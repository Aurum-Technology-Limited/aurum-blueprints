---
id: investment-banking.information-memorandum-drafting
name: Information Memorandum Drafting
description: "A working method for the confidential information memorandum: scope and contents, sourced facts, the equity story, business, market and financial sections, model tie-outs, counsel's pages and client sign-off."
category: business
version: 1.0.0
tags: [investment-banking, information-memorandum-drafting, knowledge-worker, analyst, associate, cim, sell-side, deal-documents]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - operational-checklist
    - feedback-themes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Information Memorandum Drafting
          description: "Writing a confidential information memorandum: the equity story, business and market sections, financials, consistency with the model and client sign-off."
          projects:
            - name: Anatomy of an information memorandum from three past deals
              description: |-
                ## Purpose
                Every group has a house shape for its information memoranda, and juniors who learn it from finished documents get far fewer structural comments on a first draft. Reading three released IMs from recent sale processes, ideally one corporate, one sponsor-owned and one founder-owned business, shows which chapters never change, how long each runs and where the equity story is stated first.

                ## Milestones
                1. Three final, released information memoranda from your group pulled from the deal archive with permission.
                2. A one-page map of each document's chapters, page counts and order.
                3. The chapters common to all three marked as house standard, the rest marked as deal specific.
                4. Three questions on structure and tone taken to an associate and answered.

                ## Notes
                Read the released version, not a working draft, so you learn what survived client and counsel review rather than what was cut.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chapter map covering three released information memoranda, with house-standard sections marked and reviewed with an associate."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask an associate which three recent IMs best show the group's standard"
                - "List each document's chapters and page counts on a single page"
                - "Mark the chapters that appear in all three as house standard"
                - "Take your three open questions on structure to the associate"
            - name: IM scope and audience brief at kick-off
              description: |-
                ## Purpose
                An IM written for trade buyers reads differently from one written for financial sponsors, and a team that never says which it is writing for ends up with a document that suits neither. A one-page brief agreed at kick-off fixes the likely readers, the length, the depth of financials and forecast, the release date and who on the client side signs off, before anyone drafts a paragraph.

                ## Milestones
                1. A one-page brief naming the target readers, intended length and release date.
                2. The depth of historical financials and forecast years agreed with the deal lead.
                3. The client's signatory and day-to-day contact for the IM named.
                4. The brief circulated to the bank team and the client and saved with the deal files.

                ## Notes
                Start from the **Meeting notes** template for the kick-off call, then lift the agreed points into the brief the same day.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page IM brief with readers, length, forecast depth, release date and client signatory, agreed by the deal lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the one-page IM brief from the engagement letter and kick-off notes"
                - "Confirm the target readers and forecast depth with the deal lead"
                - "Name the client signatory and daily contact for the IM"
                - "Circulate the agreed brief to the bank team and the client"
            - name: Annotated contents page agreed before drafting
              description: |-
                ## Purpose
                Drafting forty pages and then discovering the vice president wanted the market chapter before the business chapter wastes a week. An annotated contents page, with each chapter's key message, page budget, owner and source documents, is the IM equivalent of a ghost deck and is cheap to change.

                ## Milestones
                1. A contents page listing every chapter and appendix in order.
                2. One sentence per chapter stating the message a buyer should take away.
                3. A page budget, a drafting owner and the main source documents against each chapter.
                4. The annotated contents signed off by the deal lead and shared with the client.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An annotated contents page with message, page budget, owner and sources for every chapter, approved by the deal lead."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every chapter and appendix in the order the house standard uses"
                - "Write one takeaway sentence and a page budget for each chapter"
                - "Assign a drafting owner and source documents to each chapter"
                - "Walk the deal lead through the annotated contents for sign-off"
            - name: Information request list for the IM chapters
              description: |-
                ## Purpose
                Most IM delays trace back to one missing document, such as a customer revenue split or a headcount table, requested late and chased for a fortnight. Building the information request from the annotated contents, chapter by chapter, gets everything asked for in one go and gives the client a clear list with owners and dates.

                ## Milestones
                1. An information request list grouped by IM chapter, with each item described precisely.
                2. A client owner and a target date against every item.
                3. Items already held by the bank, from earlier pitches or the model, marked as received.
                4. The list sent to the client contact and the first batch of documents received.

                ## Notes
                Ask for the format you need, for example customer revenue by year in a spreadsheet rather than a printed report, so nothing has to be retyped.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An information request list mapped to IM chapters, with owners and dates, sent to the client and the first batch received."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Turn each chapter of the annotated contents into specific document requests"
                - "Mark which items the bank already holds from the model or past work"
                - "Agree an owner and a date for each request with the client contact"
                - "Chase overdue information requests in one consolidated email @recurring(weekly:wed)"
            - name: Source log tying every IM fact to a document
              description: |-
                ## Purpose
                A buyer's adviser will ask where a market share figure or a customer retention rate came from, and "management told us" is not an answer anyone wants to give in a warranty negotiation. A source log that pairs each factual statement and number in the IM with a document, a page and a date makes verification fast and protects the client and the bank.

                ## Milestones
                1. A source log set up with columns for IM page, statement, source document, page reference and date.
                2. Every number in the executive summary and investment highlights logged first.
                3. Statements based only on management view flagged for wording as opinion.
                4. The log complete for the full draft before it goes to counsel.

                ## Notes
                Keep the source documents themselves in a folder named to match the log, so anyone on the team can open the evidence in seconds.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A source log covering every factual statement in the draft IM, with document and page references, complete before counsel review."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set up the source log with page, statement, source and date columns"
                - "Log every number in the executive summary and highlights first"
                - "Flag statements resting only on management view for opinion wording"
                - "Match the source folder names to the log references"
                - "Add statements from the latest draft to the source log @recurring(weekly:tue)"
            - name: Disclaimer and non-reliance pages cleared by counsel
              description: |-
                ## Purpose
                The front pages of an IM, covering confidentiality, non-reliance, forward-looking statements and the bank's role, carry real legal weight, and a version copied from another deal can name the wrong seller or the wrong jurisdiction. Getting the current house wording, adapting it to this deal and having the client's and the bank's counsel clear it early takes the issue off the critical path.

                ## Milestones
                1. The current house disclaimer wording obtained from the bank's legal or compliance team.
                2. Deal-specific details, such as the seller entity and governing law, inserted and highlighted.
                3. Comments from the client's counsel and the bank's legal team received and resolved.
                4. Cleared front pages locked in the master draft with the approval date noted.

                ## Notes
                This is legal drafting: the bank's lawyers and the client's counsel decide the wording. Your job is to get the right version in front of them early and keep it locked afterwards.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Disclaimer and non-reliance pages approved by the bank's legal team and the client's counsel, locked in the master draft with the date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request the current house IM disclaimer wording from legal or compliance"
                - "Insert the seller entity and deal details and highlight every change"
                - "Send the front pages to both sets of counsel with a return date"
                - "Lock the cleared pages in the master draft and note the approval date"
            - name: Draft numbering and file rules for the IM
              description: |-
                ## Purpose
                Three people editing "IM_final_v2_revised" on the same evening is how a client's comments get lost and an old revenue figure reappears in the released document. Simple rules for draft numbering, a single master file, a check-out convention and an archive folder prevent the worst version-control failures on a long document.

                ## Milestones
                1. A naming convention with deal code, draft number, date and editor initials agreed by the team.
                2. One master file location named and every other copy treated as a working file.
                3. A check-out rule for chapters so two people never edit the same section at once.
                4. Superseded drafts moved to an archive folder, not deleted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written file rules for the IM, adopted by the deal team, with one master location and an archive of superseded drafts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the draft naming convention and share it with the deal team"
                - "Name the single master file location for the IM"
                - "Agree a chapter check-out rule for evening edits"
                - "Move superseded drafts to the archive folder @recurring(weekly:fri)"
            - name: Splitting drafting work between bank and client
              description: |-
                ## Purpose
                Some clients want the bank to write everything; others hand over a finance director's twenty-page draft and expect it used verbatim. Agreeing early who writes which chapter, who reviews and who supplies raw material avoids both an IM that sounds like a sales brochure and one that sounds like an annual report.

                ## Milestones
                1. A chapter-by-chapter table showing drafter, reviewer and supplier of raw material.
                2. The client's preferred level of involvement confirmed with the main contact.
                3. Turnaround times for client review agreed for each draft round.
                4. The split recorded in the IM brief and shared with both teams.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A drafting split table for every IM chapter, with drafter, reviewer and turnaround agreed with the client."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Build a table of chapters with drafter, reviewer and raw material supplier"
                - "Ask the client contact how involved management wants to be"
                - "Agree client review turnaround times for each draft round"
                - "Add the agreed split to the IM brief"
            - name: Style sheet for numbers, units and defined terms
              description: |-
                ## Purpose
                Long documents drift: revenue becomes turnover on page 30, financial years switch from FY24 to 2024A, and one chapter uses millions to one decimal while another uses thousands. A short style sheet covering currency, units, rounding, year labels, defined terms and the client's preferred name for itself keeps a sixty-page draft consistent across several drafters.

                ## Milestones
                1. A one-page style sheet covering currency, units, rounding, year labels and negative numbers.
                2. A defined terms list with the client's and the business units' approved names.
                3. The style sheet circulated to every drafter before the first draft.
                4. A first draft checked against the sheet and the deviations corrected.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page IM style sheet with a defined terms list, circulated to all drafters and applied to the first full draft."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the style rules for currency, units, rounding and year labels"
                - "List the defined terms and approved names for the client and its units"
                - "Send the style sheet to every drafter before the first draft"
                - "Review the style sheet against the house standard @recurring(quarterly)"
            - name: Weekly IM drafting status review
              description: |-
                ## Purpose
                On a live sale process the IM competes with the model, the buyer list and the data room for the same people's time, and chapters stall quietly. A short Monday review of each chapter's status, open information requests and blocking points keeps the release date honest and surfaces problems while there is still time to fix them.

                ## Milestones
                1. A tracker listing each chapter with owner, draft status and next deadline.
                2. Open points recorded with an owner and a date, not just a description.
                3. A Monday review held each week the IM is live, with the tracker updated.
                4. Slippage against the release date flagged to the deal lead the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chapter tracker reviewed every Monday while the IM is live, with every open point carrying an owner and a date."
                cadence: rolling
              tasks:
                - "Set up the chapter tracker with owner, status and next deadline columns"
                - "Review chapter status and open points with the team @recurring(weekly:mon)"
                - "Give every open point a named owner and a date"
                - "Tell the deal lead the same day if the release date is at risk"
                - "Send the client contact a short IM status note @recurring(weekly:mon)"
            - name: Model-to-IM number tie-out routine
              description: |-
                ## Purpose
                Nothing damages an IM faster than a financial figure that disagrees with the model or the data room, because a buyer who finds one starts checking everything. A weekly tie-out that traces every number in the financial chapters, the highlights and the charts back to the current model version catches drift as the model changes underneath the document.

                ## Milestones
                1. A tie-out sheet listing every financial number in the IM with its model cell reference.
                2. The model version used for each tie-out recorded on the sheet.
                3. A weekly tie-out completed while the IM and model are both moving.
                4. A final tie-out on the release draft signed off by a second person.

                ## Notes
                Tie to the model and to the source accounts, not to an earlier draft of the IM. A number copied from a previous draft carries its old errors with it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every financial number in the release draft ties to a named model version, with the final tie-out checked by a second team member."
                cadence: rolling
              tasks:
                - "Build a tie-out sheet with each IM number and its model reference"
                - "Tie the IM numbers to the latest model version @recurring(weekly:thu)"
                - "Record the model version on every completed tie-out"
                - "Ask a second team member to check the final tie-out @priority(high)"
            - name: Client comment log and weekly turn
              description: |-
                ## Purpose
                Management comments arrive as tracked changes, margin notes, emails and remarks on calls, and the one that gets lost is usually the one the chief executive cares about. A single log of client comments, with each marked as accepted, discussed or declined, and a set day each week to turn them, keeps the client confident that their document is listening to them.

                ## Milestones
                1. A comment log with source, date, page, comment, response and status columns.
                2. Every client comment from email, calls and markups entered in the log.
                3. A weekly turn of open comments completed and the updated draft returned.
                4. Declined comments explained to the client contact with a reason.

                ## Notes
                Start from the **Feedback themes** template if you want to group recurring comments, such as tone or forecast caution, across rounds.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A client comment log with every comment marked accepted, discussed or declined, turned weekly while the IM is in client review."
                cadence: rolling
              tasks:
                - "Set up the client comment log with status and response columns"
                - "Enter comments from emails, calls and markups in the log"
                - "Turn open client comments and return the updated draft @recurring(weekly:tue)"
                - "Explain each declined comment to the client contact with a reason"
            - name: Weekly verification pass on factual statements
              description: |-
                ## Purpose
                Counsel and the client will verify the IM before release, but finding unsupported statements one week before launch forces rushed rewording under pressure. A weekly pass through the newest pages against the source log, checking that each statement has evidence and that opinions read as opinions, spreads the work across the drafting period.

                ## Milestones
                1. New or changed pages from the past week identified from the draft comparison.
                2. Each factual statement on those pages matched to an entry in the source log.
                3. Unsupported claims either sourced, softened to management view or removed.
                4. No unverified statements left in the draft sent to counsel.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every factual statement in the counsel draft has a source log entry, with unsupported claims resolved during weekly passes."
                cadence: rolling
              tasks:
                - "Compare this week's draft with last week's to find new pages"
                - "Match each new statement to the source log @recurring(weekly:wed)"
                - "Reword or remove claims that have no supporting document"
                - "List any statements still unsourced for the deal lead"
            - name: Rolling management accounts into the IM
              description: |-
                ## Purpose
                Sale processes run for months, and an IM drafted on September numbers can be released in January with a quarter of trading missing. Rolling each month's management accounts into the year-to-date pages, the current trading section and the KPI tables keeps the document current and shows buyers a business that reports promptly.

                ## Milestones
                1. The pages that carry year-to-date or current trading figures listed.
                2. A monthly date agreed with the client's finance team for management accounts.
                3. Each month's numbers rolled into the model and the IM pages, then tied out.
                4. Current trading commentary updated in words, not just in tables.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "IM year-to-date and current trading pages updated within five working days of each month's management accounts."
                cadence: rolling
              tasks:
                - "List every IM page that shows year-to-date or current trading figures"
                - "Agree a monthly delivery date for management accounts with the finance team"
                - "Roll the latest management accounts into the IM pages @recurring(monthly:12)"
                - "Rewrite the current trading paragraph to match the new numbers"
            - name: Market statistics refresh from third-party sources
              description: |-
                ## Purpose
                Market size, growth rates and share data go out of date, and a buyer's commercial adviser will have the latest edition of the same report. A monthly check of every third-party statistic in the market chapter, with the publisher, edition and permission to quote noted, avoids a stale figure undermining an otherwise careful document.

                ## Milestones
                1. Every third-party statistic in the IM listed with publisher, edition and date.
                2. Permission or licence terms for quoting each source checked.
                3. Statistics refreshed monthly where a newer edition exists.
                4. Footnotes updated to match the edition cited.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every third-party statistic in the IM cites a current edition with a checked licence to quote, refreshed monthly while the IM is live."
                cadence: rolling
              tasks:
                - "List each third-party statistic with publisher, edition and date"
                - "Check the licence terms for quoting each market report"
                - "Check sources for newer editions and update figures @recurring(monthly:20)"
                - "Update the footnotes to the edition now cited"
            - name: Proofreading pass before every IM release
              description: |-
                ## Purpose
                Typos in a pitch book embarrass the team; typos in an IM suggest a seller who is careless with detail, which is the last impression to give a buyer about to commit to diligence. A fixed proofreading routine, including a read on paper, a check of cross-references and a search for other clients' names, runs before every version that leaves the bank.

                ## Milestones
                1. A written proofreading checklist covering spelling, cross-references, footnotes, page numbers and stray names.
                2. A full read of the release draft on paper or in print view by someone who did not write it.
                3. A search of the file for previous client names, placeholder text and tracked changes.
                4. The completed checklist saved with the released version.

                ## Notes
                Start from the **Operational checklist** template so the same checks run every time and the record stays with the deal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed proofreading checklist, run by someone other than the drafter, saved with every version of the IM that leaves the bank."
                cadence: rolling
              tasks:
                - "Write the IM proofreading checklist from the house standard"
                - "Ask a colleague who did not draft it to read the release version"
                - "Search the file for old client names, placeholders and tracked changes"
                - "Save the completed checklist alongside the released version"
                - "Add errors caught since the last release to the checklist @recurring(monthly:28)"
            - name: Numbered copy and watermark register for released IMs
              description: |-
                ## Purpose
                Once the IM goes to buyers who have signed confidentiality agreements, the seller needs to know exactly who holds which version. A register of every copy released, with recipient, date, version, watermark and any later return or destruction confirmation, is what the bank relies on if a document leaks or a bidder drops out.

                ## Milestones
                1. A register with recipient, NDA date, version, watermark reference and release date.
                2. Every copy released entered on the day it is sent.
                3. Supplements and replacement versions recorded against the same recipients.
                4. Return or destruction confirmations logged when bidders leave the process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every IM copy released is recorded with recipient, version and watermark, and every departing bidder has a logged return or destruction confirmation."
                cadence: rolling
              tasks:
                - "Set up the copy register with recipient, NDA date, version and watermark"
                - "Check a signed NDA is on file before logging any release"
                - "Record supplements against the same recipients when they are sent"
                - "Reconcile the register against confirmations from departed bidders @recurring(monthly:5)"
            - name: Executive summary and investment highlights
              description: |-
                ## Purpose
                Many readers at a buyer, including the investment committee, will read only the first five pages, so the executive summary and highlights carry most of the document's persuasive weight. Writing them last, from the finished chapters, with six to eight highlights that each pair a claim with a number, gives a summary that diligence will confirm rather than contradict.

                ## Milestones
                1. Six to eight investment highlights drafted, each with a supporting number and a chapter reference.
                2. An executive summary of no more than five pages covering business, market, financials and the transaction.
                3. Every number in the summary tied to the model and the source log.
                4. The summary read in isolation by a colleague who has not seen the deal.

                ## Notes
                A highlight without evidence reads as marketing. "Strong customer relationships" becomes useful only when it says how many customers have stayed for over ten years.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An executive summary of five pages or fewer with six to eight evidenced highlights, all tied to the model and read cold by a colleague."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Draft six to eight highlights, each paired with one supporting number"
                - "Write the executive summary from the finished chapters"
                - "Tie every summary number to the model and the source log"
                - "Ask a colleague outside the deal to read the summary cold"
            - name: Turning the agreed equity story into chapter one
              description: |-
                ## Purpose
                Equity stories are usually agreed in the pitch and refined with management, but translating five slide bullets into a written opening chapter is a separate craft. Expanding each pillar of the story into a paragraph with evidence, and making sure later chapters return to the same themes in the same words, is what makes an IM feel like one argument.

                ## Milestones
                1. The agreed equity story pillars written down as the deal team last approved them.
                2. Each pillar expanded into a paragraph with evidence and a pointer to the supporting chapter.
                3. Later chapters checked to confirm they use the same theme names and order.
                4. The opening chapter approved by the deal lead and the client.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "An opening chapter expanding every equity story pillar with evidence, with theme names matched across the IM and approved by the client."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the equity story pillars as last approved by the deal team"
                - "Expand each pillar into an evidenced paragraph with a chapter pointer"
                - "Search later chapters for the same theme names and fix mismatches"
                - "Send the opening chapter to the deal lead and client for approval"
            - name: Business overview and history chapter
              description: |-
                ## Purpose
                Buyers want to understand quickly what the company does, how it makes money and how it got here, and a timeline of every acquisition since 1987 does not answer that. A business overview built around the revenue model, the main business lines and four or five turning points in its history gives the reader the frame for every later chapter.

                ## Milestones
                1. A one-paragraph description of what the business does and how it earns revenue.
                2. Business lines shown with revenue and margin share from the model.
                3. A history reduced to four or five turning points that explain today's shape.
                4. Group structure and ownership summarised in one chart checked by counsel.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A business overview chapter with revenue model, business line split, a short history and a counsel-checked structure chart."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write one paragraph on what the business does and how it earns money"
                - "Pull revenue and margin by business line from the model"
                - "Cut the company history to the four or five turning points that matter"
                - "Send the group structure chart to counsel to check"
            - name: Products, services and customers chapter
              description: |-
                ## Purpose
                Customer concentration, contract length and churn are among the first things a buyer tests, so this chapter has to present them honestly and in a form diligence will recognise. Showing products with their revenue weight, the top customers by revenue band with tenure, and retention measured the same way the data room measures it builds credibility early.

                ## Milestones
                1. Products and services grouped and shown with their revenue contribution.
                2. Top customers shown by revenue band and tenure, anonymised where the client requires.
                3. Retention, churn or renewal rates defined and calculated to match the data room.
                4. Concentration risk addressed in the text, not left for a buyer to discover.

                ## Notes
                Agree with the client and counsel which customer names may appear. Many sellers code customers as Customer A, B and C until a later round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A customer chapter with revenue by product, top customers by band and tenure, and retention metrics defined consistently with the data room."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Group products and services and show each one's revenue weight"
                - "Ask the client which customer names may appear in the IM"
                - "Calculate retention the same way the data room analysis does"
                - "Write a plain paragraph addressing customer concentration"
            - name: Market overview chapter with sourced data
              description: |-
                ## Purpose
                Market chapters that lean on one consultant's headline growth rate invite a buyer's commercial adviser to pick them apart. Defining the addressable market the way the company actually sells, citing two or more independent sources, and showing the drivers behind growth makes the chapter defensible and ties it to the forecast.

                ## Milestones
                1. The market defined in the terms the company sells into, with geography and segments stated.
                2. Size and growth figures from at least two independent sources, with any difference explained.
                3. Three to five growth drivers described and linked to the forecast assumptions.
                4. Every statistic logged in the source log with edition and licence status.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A market chapter with a stated market definition, two or more independent sources and drivers linked to the forecast, fully logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the market definition the way the company actually sells"
                - "Find a second independent source for market size and growth"
                - "Link each growth driver to a named forecast assumption"
                - "Log every market statistic with edition and licence status"
            - name: Competitive landscape and positioning chapter
              description: |-
                ## Purpose
                Claiming the company has no real competitors is the fastest way to lose a sophisticated buyer's trust. A chapter that names the competitor groups, places the company against them on the three or four factors customers actually choose on, and supports the position with evidence such as win rates or pricing data reads as confident rather than defensive.

                ## Milestones
                1. Competitors grouped by type, with the main names agreed with management.
                2. Three or four buying criteria chosen from customer evidence, not internal opinion.
                3. A positioning chart or table placing the company and competitor groups on those criteria.
                4. Each positioning claim supported by a data point or reworded as management view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A competition chapter naming competitor groups, positioning on evidenced buying criteria and sourcing or qualifying every claim."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask management to name the competitors they meet most often"
                - "Choose three or four buying criteria from customer evidence"
                - "Build a positioning table for the company and competitor groups"
                - "Reword any unsupported positioning claim as management view"
            - name: Operations, people and organisation chapter
              description: |-
                ## Purpose
                Buyers need to see how the business delivers, where its sites and systems are, and whether it depends on a handful of people. A chapter covering facilities, supply chain, technology, headcount by function and the management team, written with care about personal data and retention sensitivities, answers those questions before they become diligence requests.

                ## Milestones
                1. Sites, capacity and key operational processes described with supporting figures.
                2. Headcount by function and location tied to the latest payroll data.
                3. Management team biographies approved by each individual.
                4. Personal and sensitive employee data reviewed with the client before inclusion.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An operations and people chapter with sites, headcount tied to payroll and individually approved management biographies."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe each site with capacity and its main processes"
                - "Tie the headcount table to the latest payroll summary"
                - "Send each manager their draft biography for approval"
                - "Review employee data with the client before it goes in"
            - name: Historical financial chapter with bridges
              description: |-
                ## Purpose
                Historical financials are where buyers start building their own model, so the chapter must explain movements, not only display tables. Three years of income statement, balance sheet and cash flow, with revenue and margin bridges, a clear basis of preparation and commentary on every large movement, gives buyers what they need and reduces repetitive questions in Q&A.

                ## Milestones
                1. Income statement, balance sheet and cash flow for the agreed historical period, tied to the accounts.
                2. The basis of preparation stated, including audited, management or pro forma figures.
                3. Revenue and EBITDA bridges between each year with every bar explained.
                4. Commentary on each line that moved by more than an agreed threshold.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A historical financial chapter with three statements, stated basis of preparation, annual bridges and commentary on every material movement."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Tie the historical statements to the audited and management accounts"
                - "Write the basis of preparation paragraph with the finance team"
                - "Build revenue and EBITDA bridges between each pair of years"
                - "Draft commentary for every line moving above the agreed threshold"
            - name: Business plan and forecast chapter with assumptions
              description: |-
                ## Purpose
                Forecasts in an IM are the seller's case for value, and buyers will discount any number whose assumptions they cannot see. Presenting the plan with its key assumptions, the bridge from the current year, the initiatives that drive the step changes and how the plan compares with past delivery lets a buyer underwrite it rather than dismiss it.

                ## Milestones
                1. Forecast years presented with the key volume, price and cost assumptions listed.
                2. A bridge from the current year to the final forecast year by driver.
                3. Each growth initiative described with its timing and revenue contribution.
                4. A comparison of last year's budget with actual results, agreed with the client.

                ## Notes
                The forecast is management's. Label it as management's plan, keep the forward-looking statements wording counsel cleared, and never present it as the bank's view.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A forecast chapter showing key assumptions, a driver bridge, initiatives with timing and a budget-versus-actual comparison, labelled as management's plan."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the volume, price and cost assumptions behind each forecast year"
                - "Build a bridge from the current year to the last forecast year"
                - "Describe each growth initiative with its timing and contribution"
                - "Agree the budget versus actual comparison with the finance director"
            - name: Adjusted EBITDA bridge and KPI definitions
              description: |-
                ## Purpose
                Adjusted EBITDA is usually the number the price is quoted against, and every add-back will be challenged by the buyer's accountants. A reconciliation from reported profit to adjusted EBITDA with each adjustment described, quantified and evidenced, plus written definitions of every KPI, keeps the IM consistent with any vendor due diligence work and with the data room.

                ## Milestones
                1. A reconciliation from reported operating profit to adjusted EBITDA for each historical year.
                2. Each adjustment described in a sentence with its amount and supporting document.
                3. Written definitions for every KPI the IM uses, agreed with the finance team.
                4. The bridge and definitions checked against any vendor due diligence report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adjusted EBITDA reconciliation with evidenced adjustments and written KPI definitions, consistent with vendor due diligence where it exists."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Reconcile reported operating profit to adjusted EBITDA for each year"
                - "Write one sentence and attach evidence for each adjustment"
                - "Agree written definitions for every KPI with the finance team"
                - "Check the bridge against the vendor due diligence numbers"
            - name: Charts and graphics that carry the argument
              description: |-
                ## Purpose
                Buyers skim, and a well-chosen chart of revenue by segment or customer tenure does more work than a paragraph. Planning one strong graphic per spread, built from linked data with consistent colours and labelled sources, makes the IM easier to read and much easier to update when the numbers change.

                ## Milestones
                1. A list of planned charts, one per spread where it earns its place.
                2. Each chart built from a linked data sheet rather than typed values.
                3. Colours, fonts and axis conventions matched to the house template.
                4. A source line under every chart that matches the source log.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every IM chart is built from a linked data sheet, follows house style and carries a source line matching the source log."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the charts each chapter needs, one per spread at most"
                - "Build each chart from a linked data sheet"
                - "Match colours and axis styles to the house template"
                - "Add a source line under every chart from the source log"
            - name: Deciding how far out to show the forecast
              description: |-
                ## Purpose
                Showing five forecast years can lift a buyer's view of value, but it also exposes the seller to scrutiny of years nobody can predict, and some clients have never budgeted beyond twelve months. Weighing two, three and five year options against the client's planning record, the buyer universe and counsel's view leads to a recorded decision rather than a default.

                ## Milestones
                1. The client's budgeting history and planning horizon documented.
                2. Two, three and five year options compared on credibility, buyer expectations and exposure.
                3. Counsel's view on forward-looking statements for each option obtained.
                4. A decision recorded with reasons and reflected in the IM brief.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on forecast horizon, with the options compared and counsel's view noted, reflected in the IM brief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the finance director how far ahead the business has budgeted before"
                - "Compare two, three and five year forecast options in a short note"
                - "Get counsel's view on forward-looking statements for each option"
                - "Record the forecast horizon decision in the IM brief"
            - name: Choosing what to hold back for later rounds
              description: |-
                ## Purpose
                Not everything belongs in a document sent to fifteen bidders, some of them competitors: detailed pricing, named customer contracts and site-level margins are often held for the data room or a later round. Deciding up front what is held back, and writing the IM so it does not promise information that never arrives, protects the client without making the document look evasive.

                ## Milestones
                1. A list of sensitive information types, each marked IM, later round or clean team only.
                2. The list agreed with the client and the deal lead.
                3. IM wording checked so held-back items are described in aggregate rather than omitted silently.
                4. The holdback list shared with whoever runs the data room so the plan stays aligned.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A holdback list marking each sensitive information type by release stage, agreed with the client and reflected in the IM wording."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the sensitive information types the IM could include"
                - "Mark each one for the IM, a later round or clean team only"
                - "Agree the holdback list with the client and deal lead"
                - "Share the list with the colleague running the data room"
            - name: Competitor-safe IM version for trade buyers
              description: |-
                ## Purpose
                When competitors are invited to bid, sharing customer pricing or margins by contract can raise competition law concerns as well as commercial ones. Preparing a version of the IM with competitively sensitive items aggregated or removed, with counsel advising on what crosses the line, lets the process include strategic buyers safely.

                ## Milestones
                1. Competitively sensitive passages identified page by page with counsel's input.
                2. An alternative version with those items aggregated, ranged or removed.
                3. Both versions tracked in the copy register so each buyer receives the right one.
                4. Counsel's sign-off on the competitor-safe version recorded.

                ## Notes
                Whether something is competitively sensitive is a legal judgement. Counsel decides; the deal team prepares the marked-up draft and keeps the versions straight.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A competitor-safe IM version signed off by counsel, with the copy register showing which buyers received which version."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark competitively sensitive passages page by page for counsel"
                - "Prepare the alternative version with sensitive items aggregated"
                - "Add a version column to the copy register for each buyer"
                - "Record counsel's sign-off on the competitor-safe version"
            - name: Short-form IM or full IM for a mid-market sale
              description: |-
                ## Purpose
                For a smaller business or a tightly targeted process, a twenty-page short-form IM backed by a strong data room can beat an eighty-page document nobody finishes. Comparing the two formats against the buyer list, the time available and the client's resources leads to a choice the whole team can defend.

                ## Milestones
                1. The likely buyer types and their reading habits described.
                2. Short-form and full formats compared on time to release, cost and buyer expectations.
                3. A recommendation made to the deal lead with reasons.
                4. The chosen format and page budget recorded in the IM brief.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between short-form and full IM, with the comparison and page budget noted in the brief."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Describe the likely buyer types and how they read sale documents"
                - "Compare short-form and full formats on time, cost and expectations"
                - "Recommend a format to the deal lead with reasons"
                - "Record the chosen format and page budget in the brief"
            - name: Page budget audit to cut the IM to length
              description: |-
                ## Purpose
                IMs grow by accretion: every reviewer adds a paragraph and nobody removes one, so a sixty-page plan becomes a hundred-page draft. Auditing each chapter against its original page budget, moving detail to appendices and cutting repetition brings the document back to a length buyers will actually read.

                ## Milestones
                1. Current page counts compared with the budget in the annotated contents.
                2. Repeated material across chapters identified and consolidated.
                3. Detailed tables moved to appendices with a pointer from the main text.
                4. The draft brought within ten percent of the agreed total length.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A revised draft within ten percent of the agreed page budget, with detail moved to appendices and repetition removed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Compare each chapter's page count with its original budget"
                - "Mark passages that repeat material from another chapter"
                - "Move detailed tables to appendices with a pointer in the text"
                - "Ask the agent to suggest cuts for the longest chapter, then review them"
            - name: Evidence behind every superlative in the draft
              description: |-
                ## Purpose
                Words like leading, unique, best-in-class and market-defining slide into IMs during client review, and each one is a claim a buyer may later rely on. Searching the draft for superlatives and either evidencing, qualifying or removing each one makes the document more credible and keeps the client clear of statements nobody can support.

                ## Milestones
                1. A list of every superlative and absolute claim in the current draft.
                2. Each one evidenced from the source log, reworded as management view or removed.
                3. The client told which claims changed and why.
                4. A short list of banned words added to the style sheet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every superlative in the draft is evidenced, qualified or removed, with the changes explained to the client and the style sheet updated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the draft for leading, unique, only and similar absolute claims"
                - "Evidence, qualify or remove each claim using the source log"
                - "Explain the changed claims to the client contact"
                - "Add the problem words to the IM style sheet"
            - name: Post-release review of IM questions and errors
              description: |-
                ## Purpose
                Questions buyers ask after reading the IM show where it was unclear, and any error found after release is a lesson for the next document. Reviewing buyer questions by chapter and logging every correction a few weeks after release gives the group a short list of fixes for its next IM.

                ## Milestones
                1. Buyer questions in the Q&A log grouped by the IM chapter that prompted them.
                2. Every post-release correction or clarification listed with its cause.
                3. Three to five lessons written up for the group's IM template.
                4. The lessons shared with the deal team and the template owner.

                ## Notes
                Start from the **Feedback themes** template to group buyer questions into themes such as unclear definitions or missing bridges.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note of three to five lessons drawn from buyer questions and corrections, shared with the deal team and the template owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Group buyer questions from the Q&A log by IM chapter"
                - "List every correction issued after release with its cause"
                - "Write three to five lessons for the group IM template"
                - "Send the lessons to the deal team and the template owner"
            - name: Management interview programme for drafting
              description: |-
                ## Purpose
                The best material in an IM comes from structured conversations with the chief executive, finance director and heads of sales and operations, not from old board papers. Planning a short interview with each, with questions drawn from the annotated contents, gives drafters the voice, examples and numbers that make each chapter specific.

                ## Milestones
                1. Interviewees chosen for each chapter and their time booked.
                2. A question list for each interview built from the annotated contents.
                3. Notes written up within a day and filed against the chapters they feed.
                4. Follow-up information requests raised from each interview.

                ## Notes
                Start from the **Meeting notes** template for each interview so notes, actions and data requests sit in one place.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Interviews held with each chapter's main executive, with notes filed against chapters and follow-up requests logged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the executive interviewee for each chapter"
                - "Draft a question list for each interview from the annotated contents"
                - "Ask the agent to turn raw interview notes into a chapter outline"
                - "Raise follow-up information requests from each interview"
            - name: All-party drafting session on the near-final IM
              description: |-
                ## Purpose
                A page-turn session with management, the bank team and counsel in one room, or on one call, resolves in a day what email chains take two weeks to settle. Preparing the draft, the open points list and the agenda so that every chapter gets a decision makes the session the point where the IM becomes nearly final.

                ## Milestones
                1. A near-final draft and open points list sent to all parties two working days ahead.
                2. An agenda allocating time to each chapter and its open points.
                3. Decisions and actions captured live and circulated the same evening.
                4. Every open point closed or given an owner and date by the end of the session.

                ## Notes
                Start from the **Meeting notes** template and keep one person on notes only, so decisions are recorded word for word.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A drafting session held with every chapter reviewed, decisions circulated the same evening and every open point closed or owned."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Send the near-final draft and open points list two days ahead"
                - "Draft an agenda with time allocated to each chapter"
                - "Name one team member to capture decisions and actions only"
                - "Circulate decisions and actions the same evening"
            - name: Client sign-off and IM representation letter
              description: |-
                ## Purpose
                Before release, the client confirms in writing that the IM is accurate and not misleading, which protects the bank and makes management read the document properly. Preparing the sign-off pack, with the final draft, the source log and the representation wording counsel has cleared, and walking the signatory through it, turns sign-off into a real check rather than a signature on the last page.

                ## Milestones
                1. The representation letter wording obtained from the bank's legal team or the engagement terms.
                2. A sign-off pack with the final draft, source log and list of changes since the last round.
                3. A walkthrough with the signatory covering the forecast and any management view statements.
                4. The signed letter filed with the release version.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed client representation letter for the IM, filed with the release version, after a walkthrough with the signatory."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the bank's legal team for the current representation letter wording"
                - "Assemble the sign-off pack with draft, source log and change list"
                - "Walk the signatory through the forecast and opinion statements"
                - "File the signed letter with the release version @priority(high)"
            - name: Release day checks for the final IM
              description: |-
                ## Purpose
                The day the IM goes out is when watermarks fail, the wrong version gets uploaded and a cover email names the wrong buyer. A short, rehearsed release-day routine, covering the final PDF, metadata, watermarks, the copy register and a test send, means the document reaches each cleared bidder correctly the first time.

                ## Milestones
                1. The final PDF produced from the master file with metadata and hidden content removed.
                2. A test release to an internal address checked for watermark and formatting.
                3. Each cleared bidder's copy released and entered in the copy register.
                4. Confirmation of receipt logged from every bidder.

                ## Notes
                Start from the **Operational checklist** template so the same release steps run for the IM and every later supplement.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The final IM released to every cleared bidder with correct watermarks, logged in the copy register and receipt confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Produce the final PDF and strip metadata and hidden content"
                - "Send a test copy internally and check the watermark"
                - "Release each bidder's copy and log it in the copy register"
                - "Log receipt confirmation from every bidder"
            - name: IM supplement before second round bids
              description: |-
                ## Purpose
                By the second round, trading has moved, a contract may have been won or lost and buyers' questions have exposed gaps. A short supplement updating current trading, answering common themes from the first round and correcting anything that changed keeps the IM accurate as the basis for binding offers.

                ## Milestones
                1. A list of everything that changed since release, agreed with the client.
                2. A supplement drafted covering current trading and the main first-round themes.
                3. The supplement tied out, verified and signed off on the same terms as the IM.
                4. The supplement released to remaining bidders and logged in the copy register.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A signed-off IM supplement covering changes since release, sent to every remaining bidder and logged in the copy register."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List everything that has changed since the IM was released"
                - "Draft the supplement covering current trading and first-round themes"
                - "Tie out and verify the supplement before client sign-off"
                - "Release the supplement to remaining bidders and log each copy"
            - name: Aligning the IM with vendor due diligence reports
              description: |-
                ## Purpose
                When the seller commissions vendor due diligence, buyers will read the financial and commercial reports alongside the IM and notice every difference in a revenue figure or KPI definition. Reconciling the IM with the draft reports before release, and agreeing with the providers how each difference is explained, avoids awkward questions in the first week of diligence.

                ## Milestones
                1. Draft vendor due diligence reports received and their key numbers listed.
                2. Every figure and definition shared with the IM compared and differences logged.
                3. Each difference corrected or explained in a footnote agreed with the provider.
                4. Release dates of the IM and reports coordinated so buyers see consistent versions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A reconciliation of IM and vendor due diligence figures with every difference corrected or footnoted, completed before release."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the key figures and definitions in each draft vendor report"
                - "Compare them with the IM and log every difference"
                - "Agree corrections or footnotes for each difference with the provider"
                - "Coordinate release dates for the IM and the reports"
            - name: Your first IM as an analyst
              description: |-
                ## Purpose
                First-year analysts usually draft the financial chapter, build the charts and run the tie-out, often while staffed on two other deals. Knowing what good looks like in those three jobs, keeping a personal list of the comments you receive and asking the associate for one chapter to draft in full turns your first IM into a skill you keep.

                ## Milestones
                1. Your parts of the IM agreed with the associate in writing.
                2. A personal log of every comment received on your sections, grouped by type.
                3. One full chapter drafted by you and reviewed by the associate.
                4. Your five most frequent comment types turned into a checklist for the next IM.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal checklist of your five most frequent comment types, built from your first IM, with one full chapter drafted by you."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm in writing which IM sections are yours with the associate"
                - "Log each comment you receive on your sections by type"
                - "Ask to draft one full chapter end to end"
                - "Turn your five most common comments into a personal checklist"
                - "Review your comment log for repeat errors @recurring(monthly:3)"
            - name: Owning the IM as a new associate
              description: |-
                ## Purpose
                As an associate the IM becomes your document: you set the timetable, review every analyst page, handle the client's finance team and take the vice president's markups. Moving from writer to owner means planning the review rounds, checking work before it travels up and keeping one clear view of what is still open.

                ## Milestones
                1. A drafting timetable with review rounds and owners agreed with the vice president.
                2. Every analyst section reviewed by you before it reaches the vice president.
                3. One weekly update sent to the deal lead on IM status and risks.
                4. A short handover note written at release on what you would change next time.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An IM delivered to its release date with every analyst section reviewed by you first and a handover note written at release."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft the IM timetable with review rounds and owners"
                - "Review each analyst section before it goes to the vice president"
                - "Send the deal lead a short IM status and risks update @recurring(weekly:fri)"
                - "Write a handover note on what to change next time"
            - name: Vice president review of storyline and exposure
              description: |-
                ## Purpose
                A vice president's review of an IM is less about commas and more about whether the argument holds, whether the forecast is defensible and whether any statement could come back to the client in a warranty claim. Reading the draft twice, once as a sceptical buyer and once as the client's general counsel, catches what line-by-line review misses.

                ## Milestones
                1. One full read as a sceptical buyer, with the five weakest claims noted.
                2. One full read for exposure, with statements that need counsel's view marked.
                3. Storyline comments returned to the associate as a short prioritised list.
                4. The weakest claims strengthened, qualified or removed before client review.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A prioritised review list from two full reads, with the five weakest claims resolved before the draft goes to the client."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the full draft as a sceptical buyer and note five weak claims"
                - "Read again for exposure and mark statements for counsel"
                - "Send the associate a short prioritised list of storyline comments"
                - "Check the weakest claims are resolved before client review"
            - name: IM for a founder-owned business with thin records
              description: |-
                ## Purpose
                Founder-owned companies often have good businesses and poor paperwork: management accounts that do not match the statutory accounts, no written strategy and customer data in someone's head. Building the IM around what can be evidenced, while helping the founder produce the missing tables, gets a credible document out without inventing structure the business does not have.

                ## Milestones
                1. Gaps between what the IM needs and what the business records identified.
                2. The finance team helped to produce the key missing tables, such as customer revenue by year.
                3. Management accounts reconciled to the statutory accounts and the differences explained.
                4. The founder's own account of the business captured in interview and used for the story.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An IM for a founder-owned business with management and statutory accounts reconciled and every key table produced from the company's records."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the tables the IM needs that the business does not yet produce"
                - "Work with the finance team to build customer revenue by year"
                - "Reconcile management accounts to the statutory accounts"
                - "Interview the founder on how the business grew"
            - name: IM for a carve-out with standalone financials
              description: |-
                ## Purpose
                Selling a division means writing about a business that has never reported on its own, with shared costs, shared people and shared systems. An IM that explains the perimeter clearly, shows standalone financials with every allocation described and sets out what the buyer will need to replace answers the first questions every carve-out buyer asks.

                ## Milestones
                1. The perimeter of the business for sale described in words and a chart.
                2. Standalone financials with each allocation and its basis listed.
                3. Shared services and the planned transitional arrangements summarised.
                4. Standalone cost assumptions agreed with the parent's finance team.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A carve-out IM with a clear perimeter, standalone financials listing every allocation and a summary of shared services agreed with the parent."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Describe the perimeter of the division for sale in a chart"
                - "List every cost allocation in the standalone financials with its basis"
                - "Summarise shared services and planned transitional arrangements"
                - "Agree standalone cost assumptions with the parent's finance team"
            - name: IM for a small regional or Caribbean market sale
              description: |-
                ## Purpose
                In a small market such as a Caribbean island economy, the buyer universe may be a handful of regional conglomerates, local pension funds and one or two international groups, all of whom may know the company already. An IM for that setting needs reliable local market data, careful treatment of currency and exchange controls, and extra discretion because confidentiality is harder to keep where everyone knows everyone.

                ## Milestones
                1. Local market data sources identified, including statistical offices, central bank and industry bodies.
                2. Currency, foreign exchange availability and listing status addressed with professional input.
                3. Confidentiality measures agreed with the client given the small buyer pool.
                4. The IM length and depth matched to the expected regional buyers.

                ## Notes
                Exchange control and securities rules differ by country. Ask local counsel before describing them; the IM states facts the client and counsel have confirmed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An IM for a small-market sale with local data sources cited, currency matters confirmed by local counsel and agreed confidentiality measures."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List local data sources such as the statistical office and central bank"
                - "Ask local counsel how to describe currency and exchange matters"
                - "Agree extra confidentiality steps with the client for a small buyer pool"
                - "Match the IM length to the expected regional buyers"
            - name: Fast IM for a distressed sale
              description: |-
                ## Purpose
                When a business is running out of cash, the sale timetable can shrink from months to weeks and the IM has to be shorter, franker and faster. A cut-down document focused on the asset, the liquidity position, the reasons for the sale and what a buyer must do quickly, prepared with the restructuring advisers, gives buyers what they need to move.

                ## Milestones
                1. A short IM structure agreed with the restructuring and legal advisers.
                2. The liquidity position and reasons for sale stated plainly with counsel's input.
                3. A first draft produced within the compressed timetable.
                4. Key risks for buyers set out openly rather than buried in the appendix.

                ## Notes
                Disclosure in a distressed sale carries extra legal sensitivity for directors. Every statement about solvency or liquidity goes through counsel.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A short-form distressed sale IM released to the compressed timetable, with liquidity statements cleared by counsel."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Agree a short IM structure with the restructuring advisers"
                - "Draft the liquidity and reasons for sale section for counsel"
                - "Set out the key buyer risks plainly in the main text"
                - "Release the first draft within the compressed timetable"
            - name: Group IM template and section library
              description: |-
                ## Purpose
                Each team in a group tends to rebuild the IM structure, the disclaimer pages and standard charts from the last deal they worked on, inheriting old mistakes. A maintained group template with a library of strong example sections, refreshed after each release, cuts first-draft time and lifts the floor for every future document.

                ## Milestones
                1. A blank IM template with house chapters, front pages and style sheet built in.
                2. A library of example sections from released IMs, anonymised and approved for reuse.
                3. An owner named for the template and a review rhythm agreed.
                4. Lessons from each post-release review fed into the template.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A group IM template and anonymised section library with a named owner, updated after each released IM."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a blank template with house chapters and front pages"
                - "Collect and anonymise strong example sections from released IMs"
                - "Agree a template owner and review rhythm with the group"
                - "Add lessons from recent IM reviews to the template @recurring(quarterly)"
            - name: IM drafting teach-in for new juniors
              description: |-
                ## Purpose
                New analysts and associates learn IM drafting by accident, on a live deal at midnight. A once-a-year teach-in, using a released and anonymised IM, the source log and the tie-out sheet, shows them the method before they need it and gives the group a consistent standard.

                ## Milestones
                1. An anonymised released IM and its working files cleared for teaching use.
                2. A ninety-minute session plan covering structure, sourcing, tie-out and sign-off.
                3. The teach-in delivered to the year's new joiners.
                4. Feedback from attendees collected and the session updated.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A teach-in delivered to the year's new juniors using an anonymised IM, with attendee feedback collected and applied."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Clear an anonymised released IM and its working files for teaching"
                - "Write a ninety-minute session plan on structure, sourcing and tie-out"
                - "Schedule the IM teach-in for the new joiner intake @recurring(yearly)"
                - "Collect attendee feedback and update the session plan"
---

# Information Memorandum Drafting

The information memorandum is the longest document most sell-side teams write, and the one buyers read hardest: every claim gets tested in diligence and every number gets checked against the model. This area starts with foundations (learning the house shape, a scope brief, an annotated contents page, the information request, a source log, counsel's pages and drafting conventions), then the operating routines that keep a live draft accurate, the section-by-section writing skills, the judgement calls on what to show and what to hold back, the drafting sessions and sign-off that make up the calendar, variants for analysts, associates, vice presidents and unusual sellers, and specialist work such as distressed sales and a reusable group template.

What repeats is weekly while a draft is live: a Monday status review, a Tuesday client comment turn, a Wednesday verification pass and a Thursday tie-out against the model, with monthly roll-forwards of management accounts and market data, and quarterly upkeep of the style sheet and section library. The **Meeting notes**, **Operational checklist** and **Feedback themes** templates pair with drafting sessions, the release check and the post-release review. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
