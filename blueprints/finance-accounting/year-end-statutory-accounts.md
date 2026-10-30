---
id: finance-accounting.year-end-statutory-accounts
name: Year-End Statutory Accounts
description: "A filing deadline map, a timetable agreed with your accountant, a complete records pack, the notes and disclosures explained, and the approval and filing steps that get annual accounts in on time."
category: business
version: 1.0.0
tags: [finance-accounting, year-end-statutory-accounts, small-business, founder, manager, annual-accounts, filing-deadlines, disclosures]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - compliance-control
    - meeting-notes
    - board-meeting
    - remediation-plan
  pillars:
    - name: Finance & Accounting
      emoji: "🧾"
      description: "The money side of a business: bookkeeping and the monthly close, cash flow, budgeting and forecasting, billing and collections, payroll, tax, audit and financial controls."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Year-End Statutory Accounts
          description: "Preparing the annual financial statements, notes and filings that the law requires, working with accountants so deadlines are met without a scramble."
          projects:
            - name: Statutory filing deadline map for each company
              description: |-
                ## Purpose
                Every company has an accounting reference date, and from it the law sets a fixed date by which the annual accounts must reach the companies registry, usually separate from the tax return date. Owners with more than one company, or a company that has changed its year end, often carry the wrong date in their head until a penalty letter arrives. One page listing each company, its year end and every statutory deadline it carries ends the guessing.

                ## Milestones
                1. Every company you are a director of listed with its registration number and accounting reference date.
                2. The accounts filing deadline for each company confirmed on the registry's own record, not worked out from memory.
                3. The annual confirmation date and the tax return date noted beside it, clearly labelled as separate deadlines.
                4. The map saved where your accountant and co-directors can open it.

                ## Notes
                Private and public companies usually have different filing periods, and a first set of accounts often runs on a different clock. Read the date from the registry rather than calculating it yourself.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page map shows each company's year end and statutory filing dates, each checked against the registry record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up each company on the companies registry and note its accounting reference date"
                - "Copy the next accounts filing deadline for each company from the registry record"
                - "Add the annual confirmation and tax return dates as separate columns"
                - "Share the deadline map with your accountant and co-directors"
            - name: Company size and reporting framework classification
              description: |-
                ## Purpose
                Whether your company counts as micro, small, medium or large decides which accounting framework it may use, how much it must disclose, whether an audit is needed and what goes on the public record. The thresholds use turnover, balance sheet total and average headcount, usually over two consecutive years, and governments revise them from time to time. Classifying the company properly, with the working shown, stops you over-preparing or, worse, under-filing.

                ## Milestones
                1. The current size thresholds in your company law found, with the date they took effect.
                2. This year's and last year's turnover, balance sheet total and average employees set against them.
                3. The size category and reporting framework recorded, with the reasoning in two or three sentences.
                4. Your accountant's agreement with the classification noted.

                ## Notes
                Group membership can change the answer: a small company inside a larger group may lose some exemptions. Ask your accountant if any shareholder is itself a company.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written classification of the company's size and framework, showing two years of figures against the current thresholds, agreed by the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current company size thresholds on the registry or government website"
                - "Pull turnover, total assets and average headcount for the last two years"
                - "Write down which size category and framework apply, and why"
                - "Ask your accountant to confirm the classification in writing"
                - "Re-test the size thresholds once each year's figures are known @recurring(yearly)"
            - name: Audit exemption check and record
              description: |-
                ## Purpose
                Many small companies can skip a statutory audit, but the exemption usually depends on size, group status and no shareholder demanding one, and the balance sheet must carry the right statement from the directors. Lenders, grant funders and investor agreements can also require audited accounts even where the law does not. Checking all of these once a year, and recording the answer, keeps the company from discovering at signing that an audit was needed.

                ## Milestones
                1. The statutory audit exemption conditions for your size of company listed.
                2. Loan agreements, grant terms and shareholder agreements checked for any audit requirement.
                3. A recorded decision that the company is exempt, or that an audit is required this year.
                4. The directors' exemption statement wording confirmed with the accountant where the company is exempt.

                ## Notes
                If an audit is needed, start audit preparation early: auditors book up months ahead of the busy filing season.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated note records whether the company needs an audit this year, citing the law and every contract checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the audit exemption conditions that apply to your company's size"
                - "Search loan, grant and shareholder agreements for any audit clause"
                - "Record the audit decision and the documents you checked"
                - "Confirm no shareholder or lender requires an audit before each year end @recurring(yearly)"
            - name: Year-end timetable agreed with your accountant
              description: |-
                ## Purpose
                Most late accounts are caused not by hard accounting but by a records pack that arrives three weeks before the deadline and a draft that sits unread in an inbox. Working back from the filing date to fix when the books close, when the pack goes to the accountant, when the draft comes back and when the directors approve gives everyone a date to hit. Agree it before year end, while there is still slack.

                ## Milestones
                1. The filing deadline written at the foot of the timetable and every step dated back from it.
                2. Dates set for books closed, records pack sent, draft returned, queries answered, approval and filing.
                3. The accountant's confirmation that they can work to those dates.
                4. Each date in the calendar of the person who owns it.

                ## Notes
                A sensible default for a small company: the pack reaches the accountant within two months of year end, and filing happens at least a month before the deadline.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated year-end timetable with six milestones and named owners, confirmed by the accountant in writing."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the filing deadline down and count back the weeks available"
                - "Draft dates for books closed, pack sent, draft returned and approval"
                - "Send the draft timetable to your accountant for confirmation"
                - "Put each milestone in the calendar of the person who owns it"
            - name: Prior-year accounts and filings library
              description: |-
                ## Purpose
                Last year's signed accounts are the starting point for this year's comparatives, opening balances and notes, yet many owners cannot put their hands on the final version, the accountant's adjusting journals or the filing receipt. A single folder holding every year's filed accounts, tax computations and receipts saves hours at each year end and answers the questions banks and buyers ask.

                ## Milestones
                1. Signed accounts for at least the last three years saved as final PDFs.
                2. The filing receipt for each year saved alongside its accounts.
                3. The accountant's adjusting journals and tax computation for each year filed with them.
                4. Gaps listed and requested from the accountant or downloaded from the registry.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A folder holds signed accounts, filing receipts and adjusting journals for the last three years, with any gaps requested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a year-end library folder with one subfolder per financial year"
                - "Download the last three sets of filed accounts from the companies registry"
                - "Ask the accountant for the adjusting journals and tax computations behind them"
                - "List anything still missing and who has been asked for it"
            - name: Directors' duties on the annual accounts
              description: |-
                ## Purpose
                Signing off the accounts is the directors' legal responsibility even when an accountant prepares every page, and founders are often surprised to learn that a late or wrong filing is their problem, not the accountant's. An hour with the registry's guidance for directors, and your accountant on hand for questions, makes clear what you are confirming when you sign.

                ## Milestones
                1. The registry's guidance on directors' accounting duties read.
                2. A short note of what directors must do: keep records, prepare accounts, approve, sign and file.
                3. The consequences of late or inaccurate filing written down in plain words.
                4. Your questions answered by the accountant before the next signing.

                ## Notes
                This is about knowing the duty, not interpreting it. Take any question about personal liability to a lawyer or your accountant.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of directors' duties for the annual accounts, checked with the accountant before the next approval."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the companies registry's guidance for directors on annual accounts"
                - "Write a one-page note of what each director is responsible for"
                - "Note the penalties and consequences of late or inaccurate filing"
                - "Take three questions about the duties to your accountant"
            - name: Year-end records pack for the accountant
              description: |-
                ## Purpose
                An accountant can only be as quick and as cheap as the records they receive. A pack with the closing trial balance, year-end bank and loan statements, debtor and creditor listings, asset additions and disposals, payroll summaries and a note of anything unusual lets them draft without a fortnight of emails. A tidy, complete pack is the biggest single influence an owner has on the year-end fee.

                ## Milestones
                1. A pack list agreed with the accountant, item by item.
                2. Every bank, card and loan statement covering the last day of the year included.
                3. Aged debtor and creditor listings at year end that agree to the trial balance.
                4. Asset additions, disposals, payroll summaries and the issues log attached.
                5. The pack sent in one delivery on the timetabled date.

                ## Notes
                Send one complete pack rather than a trickle of files. Partial packs are the commonest reason drafts come back late.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete records pack, matching the accountant's list item by item, delivered by the date in the year-end timetable."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant for their year-end records checklist"
                - "Download every bank, card and loan statement that covers year end"
                - "Export aged debtor and creditor listings and agree them to the trial balance"
                - "Ask the agent to draft a cover note summarising the year's unusual items"
                - "Send the complete pack to the accountant in one delivery"
            - name: Final trial balance and year-end lock
              description: |-
                ## Purpose
                After the accountant starts drafting, any change in the books makes their numbers wrong, and late edits are how signed accounts end up disagreeing with the ledger. Fixing a date for the final trial balance, locking the period in the accounting software and routing every later change through a written journal request keeps the ledger and the accounts in step.

                ## Milestones
                1. A final trial balance exported and saved with its date and time.
                2. The year-end period locked in the accounting software.
                3. A simple rule in place that any change after the lock goes to the accountant as a journal request.
                4. The locked trial balance agreed to the figures the accountant drafted from.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The year-end period is locked in the software and the saved final trial balance matches the one the accountant drafted from."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the period lock setting in your accounting software"
                - "Export and save the final trial balance with its date"
                - "Tell the team that changes after the lock need a written journal request"
                - "Check the accountant's draft uses the same trial balance totals"
            - name: Accounting policies note in plain words
              description: |-
                ## Purpose
                The policies note says how the company counts revenue, depreciates assets, values stock and treats grants and foreign currency, and many small companies carry the same wording for years after the business has changed. Rewriting it in plain words, then checking each line against what you actually do, catches mismatches before a lender or buyer does.

                ## Milestones
                1. Last year's accounting policies note copied into a working document.
                2. Each policy restated in one sentence of plain language.
                3. Every policy compared with how the business actually trades today.
                4. Changes or new policies agreed with the accountant for this year's accounts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each accounting policy in the accounts has a plain-language version and has been confirmed against current practice with the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy last year's accounting policies note into a working document"
                - "Rewrite each policy as one plain sentence"
                - "Mark any policy that no longer matches how the business trades"
                - "Check the policies against any new type of transaction before year end @recurring(yearly)"
            - name: Last day of the financial year checklist
              description: |-
                ## Purpose
                Some year-end evidence can only be gathered on the day itself: the cash in the till, the last sales invoice and goods received note numbers, the payroll cut-off and goods in transit. Missing it means reconstructing figures months later from memory. A short checklist run on the final day of the year gives the accountant clean cut-off evidence and settles arguments about which year a sale belongs to.

                ## Milestones
                1. A checklist covering cash counts, last document numbers, payroll cut-off and goods in transit.
                2. A named person responsible for running it on the day, with a deputy.
                3. Photos or scans of the evidence saved to the year-end folder.
                4. The completed checklist included in the records pack.

                ## Notes
                Start from the **Operational checklist** template. Detailed stock count procedures belong with your inventory process; this list records only what the accounts need.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The last-day checklist is completed on the final day of the financial year, with evidence saved and sent with the records pack."
                cadence: cyclic
              tasks:
                - "Draft the last-day checklist from the operational checklist template"
                - "Name who will run the checklist on the final day, and a deputy"
                - "Record the last sales invoice and goods received note numbers of the year"
                - "Run the last-day checklist on the final day of the financial year @recurring(yearly)"
            - name: Filing deadline control with staged reminders
              description: |-
                ## Purpose
                A deadline you look at once a year is one you will eventually miss, especially after a change of year end, a new company or a new accountant. A standing control that checks the next ninety days of filings every month, with reminders at ninety, sixty and thirty days before each accounts deadline, turns the deadline map into something that actually prevents penalties.

                ## Milestones
                1. The deadline map turned into a tracker with a status for each filing.
                2. Reminders set at ninety, sixty and thirty days before each accounts deadline.
                3. A monthly check of the coming ninety days completed and dated.
                4. Every filing receipt logged in the tracker when it arrives.

                ## Notes
                Start from the **Compliance control** template. Many registries offer email reminders; sign up, but do not rely on them alone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every statutory filing for the company sits in a tracker with staged reminders, and twelve consecutive monthly checks are recorded."
                cadence: rolling
              tasks:
                - "Set up the filing tracker from the compliance control template"
                - "Sign up for the registry's email filing reminders"
                - "Set calendar reminders ninety, sixty and thirty days before the accounts deadline"
                - "Review the tracker and every filing due in the next ninety days @recurring(monthly:9)"
            - name: Year-round year-end issues log
              description: |-
                ## Purpose
                The notes to the accounts ask about things that happened months ago: a new loan, a disputed invoice, a share issue, a director's personal guarantee, a van sold. Writing each one down in a log as it happens means the year-end disclosure questions take minutes rather than an afternoon of searching old emails.

                ## Milestones
                1. An issues log with columns for date, event, amount, documents and possible accounts impact.
                2. Each month's unusual transactions added by the eighteenth of the following month.
                3. The log reviewed with the accountant before year end.
                4. The log attached to the records pack.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly entries in the issues log and a review with the accountant before year end are recorded."
                cadence: rolling
              tasks:
                - "Create the issues log with date, event, amount and documents columns"
                - "Add the month's unusual transactions to the issues log @recurring(monthly:18)"
                - "Walk the accountant through the issues log a month before year end @recurring(yearly)"
                - "Attach the issues log to the records pack"
            - name: Quarterly directors' loan account review
              description: |-
                ## Purpose
                Money moving between a director and the company, whether expenses paid personally, drawings or loans, often has to be disclosed in the accounts and can carry tax consequences when the account is overdrawn at year end. Reconciling the directors' loan account every quarter keeps the year-end balance a known number rather than a surprise the accountant finds.

                ## Milestones
                1. A separate ledger account for each director's loan balance.
                2. Every quarter's movements reconciled to supporting records.
                3. The year-end balance and the largest balance during the year noted for disclosure.
                4. Any overdrawn balance raised with the accountant before year end.

                ## Notes
                How an overdrawn balance is taxed, and how best to clear it, is a question for your accountant or tax adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reconciliations of each director's loan account are on file, with the year-end and peak balances noted."
                cadence: rolling
              tasks:
                - "Check each director has their own loan account in the ledger"
                - "Reconcile the directors' loan accounts to supporting records @recurring(quarterly)"
                - "Note the highest balance each director reached during the year"
                - "Raise any overdrawn balance with your accountant before year end"
            - name: Month-nine year-end dry run
              description: |-
                ## Purpose
                Problems found in month thirteen cost time and fees; the same problems found in month nine cost a phone call. Running the year-end checklist against the nine-month figures, including the records pack items, the issues log and the size thresholds, surfaces missing statements, unreconciled balances and disclosure questions while there is still a quarter left to fix them.

                ## Milestones
                1. The year-end checklist run against the month-nine trial balance.
                2. Missing documents and unreconciled balances listed with owners.
                3. Likely disclosure topics flagged to the accountant.
                4. Every dry-run issue closed before the actual year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dry run at month nine produces an issue list, and every item on it is closed before the financial year ends."
                cadence: cyclic
              tasks:
                - "Diary the date three months before year end for the dry run"
                - "Run the year-end checklist against the month-nine figures @recurring(yearly)"
                - "List each gap with an owner and a fix date"
                - "Send likely disclosure questions to the accountant early"
            - name: Accountant's adjustments posted and opening balances agreed
              description: |-
                ## Purpose
                Accountants often adjust the trial balance while drafting: depreciation, accruals, tax, reclassifications. If those journals never reach your own ledger, next year opens on the wrong numbers and the comparatives fight the books for the whole year. Posting the final adjustments and proving the ledger now agrees with the signed balance sheet closes the loop each year.

                ## Milestones
                1. The final list of adjusting journals received from the accountant.
                2. Every adjustment posted to the ledger in the year-end period.
                3. Opening balances in the software agreed line by line to the signed balance sheet.
                4. Any remaining difference explained and cleared before the first month-end of the new year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The ledger's opening balances agree to the signed balance sheet with no unexplained difference, within a month of signing."
                cadence: cyclic
              tasks:
                - "Ask the accountant for the final list of adjusting journals"
                - "Post the accountant's final adjusting journals into the ledger @recurring(yearly)"
                - "Compare the ledger's opening balances with the signed balance sheet"
                - "Investigate and clear any difference before the first close of the new year"
            - name: Quarterly related parties and directors' interests update
              description: |-
                ## Purpose
                Related party disclosures depend on knowing who is related: directors, their close families, and the companies they control or influence. That list changes quietly as directors take new roles or invest elsewhere. Asking each director each quarter for changes, and checking the ledger for trades with those names, gives the accountant a complete picture at year end.

                ## Milestones
                1. A related parties list covering directors, close family and their companies.
                2. Each director's changes collected every quarter.
                3. Ledger transactions with listed parties identified and totalled.
                4. The list and transactions sent to the accountant at year end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly updates of the related parties list are on file, and the year-end list with transactions has gone to the accountant."
                cadence: rolling
              tasks:
                - "Draft a related parties list of directors, close family and their companies"
                - "Ask each director for changes to their outside interests @recurring(quarterly)"
                - "Search the ledger for transactions with anyone on the list"
                - "Send the list and the transactions found to the accountant at year end"
            - name: Shareholder circulation and annual meeting cycle
              description: |-
                ## Purpose
                Company law usually requires a copy of the annual accounts to go to every member, and some companies, through their articles or their type, must also hold an annual general meeting where the accounts are laid. Small private companies often skip the circulation step entirely. Knowing what your articles require, and running it the same way each year, keeps the record clean for a future sale or investment.

                ## Milestones
                1. The articles and company law checked for circulation and meeting requirements.
                2. An up-to-date register of members with a contact address for each.
                3. Approved accounts sent to every member, with the date recorded.
                4. The annual meeting held and minuted, where one is required.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Approved accounts are sent to every shareholder each year, with the date and method recorded in the statutory records."
                cadence: cyclic
              tasks:
                - "Read the company's articles for any annual general meeting requirement"
                - "Check the register of members has a current address for each shareholder"
                - "Send the approved accounts to every shareholder @recurring(yearly)"
                - "Record the date and method of circulation in the statutory records"
            - name: Signed accounts and working papers archive
              description: |-
                ## Purpose
                Tax authorities, buyers, lenders and future auditors can ask for year-end records many years later, and company law and tax law each set minimum retention periods. A yearly archiving step that saves the signed accounts, the filing receipt, the approval minute and the working papers together, each labelled with a disposal date, meets those periods without keeping everything for ever.

                ## Milestones
                1. The retention periods your company and tax law set written down.
                2. The year's signed accounts, receipt, minute and working papers archived together.
                3. Each archive labelled with its earliest safe disposal date.
                4. A backup copy held somewhere other than the main file store.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each filed year has an archive containing signed accounts, receipt, minute and working papers, labelled with a disposal date."
                cadence: cyclic
              tasks:
                - "Look up the record retention periods your company and tax law set"
                - "Archive the signed accounts, filing receipt and working papers @recurring(yearly)"
                - "Label each archive with its earliest safe disposal date"
                - "Keep a backup of the archive outside the main file store"
            - name: Year-end retrospective and timetable reset
              description: |-
                ## Purpose
                Every year end leaves lessons: which document arrived late, which query took three rounds, which note surprised the directors. Thirty minutes within three weeks of filing, with the accountant if possible, turns those lessons into a better timetable and pack list for next year instead of the same scramble.

                ## Milestones
                1. Days from year end to filing recorded for this year.
                2. The three biggest delays or surprises written down with their causes.
                3. Next year's timetable and records pack list updated.
                4. The changes agreed with the accountant.

                ## Notes
                Start from the **Meeting notes** template. Keep the notes in the year-end library so next year's retrospective can compare.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retrospective is held within three weeks of each filing, and next year's timetable shows at least one change that came from it."
                cadence: cyclic
              tasks:
                - "Book a thirty-minute retrospective with the accountant for after filing"
                - "Hold the year-end retrospective within three weeks of filing @recurring(yearly)"
                - "Update next year's timetable and records pack list from the lessons"
                - "Record the days from year end to filing in the notes"
            - name: Reading your own statutory accounts
              description: |-
                ## Purpose
                Plenty of directors sign accounts they could not explain to their bank manager. Learning how the balance sheet, profit and loss account, notes and directors' report fit together, using your own last filed set as the textbook, means you can spot an odd figure before signing and answer questions confidently afterwards.

                ## Milestones
                1. Last year's accounts read page by page, with a note of what each section is for.
                2. Five key figures traced from the notes back to the main statements.
                3. Three questions about the figures answered by the accountant.
                4. A one-paragraph summary of the year that a lender could follow.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-paragraph plain summary of last year's accounts, with five figures traced to the notes, checked by the accountant."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Open last year's signed accounts and list their sections"
                - "Write one line on what each section of the accounts is for"
                - "Trace five figures from the notes to the main statements"
                - "Write a one-paragraph summary of the year in plain words"
            - name: Reporting frameworks and what each one asks
              description: |-
                ## Purpose
                Smaller companies may be able to choose between a simplified local standard, a fuller local standard, the international standard for small and medium-sized entities or full international standards, and each demands different measurement and disclosure. Knowing at a headline level what your framework requires that the others do not explains why your accountant asks the questions they ask.

                ## Milestones
                1. Your company's framework named, as recorded in the last accounts.
                2. Three to five headline requirements of that framework listed.
                3. The main differences from the next framework up noted.
                4. The note checked by the accountant.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note names the company's framework and lists its headline requirements and differences, checked by the accountant."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the framework named in last year's accounting policies note"
                - "Read the standard setter's published summary of that framework"
                - "List three requirements that differ from the next framework up"
                - "Ask the accountant to correct anything you have misread"
            - name: Provisions, contingencies and commitments at year end
              description: |-
                ## Purpose
                A warranty claim, a repair clause in a lease, a legal dispute or a signed order for equipment can each belong in the accounts as a provision, a contingent liability note or a commitment, and the distinction turns on probability and whether an obligation existed at the balance sheet date. Learning the three categories lets you tell the accountant what they need to know rather than hoping they ask.

                ## Milestones
                1. The definitions of a provision, a contingent liability and a commitment written in your own words.
                2. Every known obligation, claim and signed future contract at year end listed.
                3. Each item sorted into a likely category for discussion.
                4. The accountant's treatment of each item recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A year-end list of obligations, claims and commitments, each with the accountant's agreed treatment recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your framework's summary on provisions and contingent liabilities"
                - "List every dispute, guarantee and signed future purchase open at year end"
                - "Sort each item into provision, contingency or commitment for discussion"
                - "Record how the accountant treated each item"
            - name: Events after the balance sheet date
              description: |-
                ## Purpose
                Something that happens between year end and the date the directors sign, such as a large customer going bust, a fire, a new loan or a lost court case, may change the numbers or need a note. Knowing the difference between events that adjust the accounts and events that only need disclosing, and telling the accountant before signing, keeps the signed accounts honest.

                ## Milestones
                1. Adjusting and non-adjusting events explained in a short note with examples from your sector.
                2. A list of significant events since year end prepared before the approval meeting.
                3. Each event discussed with the accountant.
                4. A line in the approval minutes confirming events were considered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of post year-end events is discussed with the accountant and minuted at the approval meeting."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your framework's guidance on events after the reporting period"
                - "Write two examples of each kind of event for your business"
                - "List anything significant that has happened since year end"
                - "Send the list to the accountant before the approval meeting"
            - name: Related party transactions and disclosures
              description: |-
                ## Purpose
                Trading with a director's other company, a loan from a shareholder or a family member on the payroll can all be related party transactions, and the accounts usually need to disclose them even when the terms are normal. Understanding who counts as related, and what details the note needs, makes the quarterly interests update worth doing.

                ## Milestones
                1. The definition of a related party under your framework summarised.
                2. The kinds of related party your company is likely to have listed.
                3. The details a disclosure usually needs noted: nature, amount and balance outstanding.
                4. Last year's related party note compared with this year's known transactions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note defines related parties for the company and compares last year's disclosure with this year's transactions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the related party section of your framework's guidance"
                - "List the kinds of related party your company is likely to have"
                - "Compare last year's related party note with this year's transactions"
            - name: Share capital, reserves and the equity notes
              description: |-
                ## Purpose
                Founders who have issued shares, bought some back or paid dividends often find the equity section of their accounts the hardest part to follow. Understanding share capital, share premium, retained earnings and other reserves, and tying each to board minutes and registry filings, means the equity note matches the legal record.

                ## Milestones
                1. Each line of the equity section explained in a sentence.
                2. Shares in issue at year end agreed to the register of members and registry filings.
                3. Share issues, transfers and dividends in the year listed with their minutes.
                4. Any difference raised with the accountant or company secretary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Shares in issue and the year's equity movements are agreed to the register of members and board minutes, with differences raised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence explaining each line of the equity section"
                - "Agree the shares in issue to the register of members"
                - "List the year's share issues and dividends with their board minutes"
                - "Raise any mismatch with the accountant or company secretary"
            - name: Going concern basics for directors
              description: |-
                ## Purpose
                Accounts are normally prepared on the assumption that the company will keep trading for the foreseeable future, and the directors, not the accountant, must be satisfied that assumption holds, usually looking at least twelve months ahead from approval. Knowing what the assessment involves, and when a material uncertainty has to be disclosed, matters most in a year of losses, heavy debt or a lost customer.

                ## Milestones
                1. The going concern assumption and look-forward period described in a short note.
                2. The warning signs that call for a fuller assessment listed: losses, net liabilities, debt falling due, lost contracts.
                3. What a material uncertainty disclosure is, and when it appears, noted.
                4. The note shared with the other directors.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A going concern note listing the look-forward period and warning signs is shared with all directors before approval."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your framework's guidance on going concern"
                - "List the warning signs that would need a fuller assessment"
                - "Note what a material uncertainty disclosure says and who decides on it"
                - "Share the note with the other directors before approval"
            - name: Choosing full, abridged or micro-entity accounts for filing
              description: |-
                ## Purpose
                Small companies can often file a reduced version publicly while still giving members full accounts, and the smallest companies can file even less. Less on the public record protects margins from competitors, but lenders, credit agencies and big customers may read thin accounts as a risk. Weighing privacy against credit standing once, with the accountant, sets the filing format deliberately rather than by habit.

                ## Milestones
                1. The filing options open to your company's size listed.
                2. What each option puts on the public record compared side by side.
                3. Lender, credit agency and customer expectations considered.
                4. The chosen format recorded with the reason.

                ## Notes
                Several countries are narrowing the reduced filing options. Check the current rules before relying on last year's choice.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the filing format, comparing what each option discloses publicly, agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the filing formats your company's size allows"
                - "Compare what each format shows on the public record"
                - "Ask your bank and largest customers what they expect to see"
                - "Record the chosen filing format and the reason for it"
            - name: Changing the accounting reference date
              description: |-
                ## Purpose
                A year end that falls in the busiest trading month, or out of line with a parent company or the tax year, makes every year end harder than it needs to be. Most registries let you shorten or extend a period, with limits on how often and by how much, and the change must be filed before the current deadline. Deciding whether a move is worth it, and doing it on time, pays back every year after.

                ## Milestones
                1. The case for a different year end written: seasonality, group alignment, accountant workload.
                2. The registry's rules on shortening and extending periods checked.
                3. Tax and lender effects of a long or short period confirmed with the accountant.
                4. A decision recorded, and the change filed before the deadline if going ahead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to change the year end, with the registry rules and the accountant's view on tax effects noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why the current year end is awkward for the business"
                - "Check the registry's rules for changing an accounting reference date"
                - "Ask the accountant about tax and lender effects of a short or long period"
                - "File the change before the current accounts deadline if you go ahead"
            - name: Distributable reserves check before dividends
              description: |-
                ## Purpose
                In most company law a dividend can only be paid out of distributable profits, judged against the last accounts or properly prepared interim accounts, and an unlawful dividend may have to be repaid by the shareholders who received it. A simple check, written up and minuted before each dividend, protects the directors and keeps the year-end equity note clean.

                ## Milestones
                1. The distributable reserves figure from the last signed accounts noted.
                2. Profits, losses and dividends since year end taken into account to give a current figure.
                3. Interim accounts prepared where the last accounts do not support the dividend.
                4. Each dividend backed by a board minute and dividend voucher on file.

                ## Notes
                How much to pay yourself, and in what form, belongs with owner pay planning. This project only checks whether the reserves support the payment, which your accountant should confirm.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every dividend in the year has a reserves check confirmed by the accountant, a board minute and a voucher on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the retained earnings figure in the last signed balance sheet"
                - "Adjust it for profits, losses and dividends since year end"
                - "Ask the accountant to confirm reserves before the dividend is declared"
                - "File the board minute and dividend voucher for each payment"
            - name: Accounting estimates and judgements register
              description: |-
                ## Purpose
                Useful lives of assets, bad debt allowances, stock obsolescence, warranty and holiday pay accruals are all estimates, and together they quietly move profit. Recording each one with its method, the figure used and the evidence, then checking it against what really happened, keeps the accounts consistent from year to year and stands up to a lender's or buyer's questions.

                ## Milestones
                1. Every significant estimate in the accounts listed with its current method.
                2. The figure, source data and owner noted for each.
                3. Last year's estimates compared with what actually happened.
                4. Any change of method agreed with the accountant and disclosed where needed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists each significant estimate with method, figure and data source, and last year's estimates are compared with outcomes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every estimate behind last year's accounts"
                - "Record the method, figure and data source for each estimate"
                - "Compare last year's estimates with what actually happened"
                - "Update each estimate in the register before the records pack goes out @recurring(yearly)"
            - name: Disclosure checklist for this year's accounts
              description: |-
                ## Purpose
                Frameworks list dozens of required disclosures, from directors' advances and guarantees to average employee numbers, and the ones that apply change as the business changes. Working through a disclosure checklist for your framework, or reviewing the one your accountant completes, catches the note that was needed this year but not last.

                ## Milestones
                1. A disclosure checklist for your framework and size obtained.
                2. Each item marked applicable, not applicable or to discuss.
                3. Applicable items matched to a note in the draft accounts.
                4. Open items resolved with the accountant before approval.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed disclosure checklist with every applicable item matched to a note in the draft and no open items at approval."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the accountant for the disclosure checklist they use for your framework"
                - "Mark each item applicable, not applicable or to discuss"
                - "Match each applicable item to a note in the draft accounts"
                - "Refresh the disclosure checklist when the framework is updated @recurring(yearly)"
            - name: Cutting a month off the year-end timetable
              description: |-
                ## Purpose
                Filing in the last week before the deadline leaves no room for a sick accountant, a late bank statement or a lender asking for accounts early. Measuring the days from year end to filing, finding the two or three longest waits and fixing them can bring filing forward by a month or more within one or two cycles.

                ## Milestones
                1. Days from year end to filing measured for the last two years.
                2. The three longest waits identified, such as pack delivery or rounds of queries.
                3. One fix agreed for each with the person responsible.
                4. This year's filing made at least a month earlier than last year's.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The accounts are filed at least thirty days earlier than the previous year, with the fixes that achieved it written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out the days from year end to filing for the last two years"
                - "Mark the three longest waiting periods on last year's timeline"
                - "Agree one fix for each wait with the person responsible"
                - "Compare this year's filing date with last year's once filed"
            - name: Draft accounts review before approval
              description: |-
                ## Purpose
                The draft from the accountant deserves more than a glance at the profit figure. A structured review, checking that comparatives match last year's signed accounts, totals cast, notes agree to the statements, names and dates are right and nothing you know about is missing, catches the errors that are embarrassing once they sit on the public record.

                ## Milestones
                1. Comparatives agreed to last year's signed accounts.
                2. Totals and cross-references in the notes checked.
                3. Company name, number, directors and dates confirmed.
                4. Questions sent to the accountant as one list and answered in writing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A review record shows comparatives, totals, notes and company details checked, and every question answered before approval."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree the comparative figures to last year's signed accounts"
                - "Check that the notes add up to the main statements"
                - "Confirm the company name, number and directors shown are correct"
                - "Ask the agent to compile your review questions into one list for the accountant"
            - name: Accounts approval board meeting
              description: |-
                ## Purpose
                Directors normally approve the accounts at a board meeting, or by written resolution where the articles allow, and one director signs the balance sheet on the board's behalf. Holding a proper meeting with the final draft, the going concern view and events since year end on the agenda creates the record that the board did its job.

                ## Milestones
                1. Final draft accounts circulated to every director several days before the meeting.
                2. An agenda covering the accounts, going concern, events since year end and any representation letter.
                3. Approval minuted and the balance sheet signed by an authorised director.
                4. Signed copies saved and sent to the accountant.

                ## Notes
                Start from the **Board meeting** template. A sole director still benefits from a short written minute.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The accounts are approved at a minuted meeting or by written resolution and signed by an authorised director."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up the approval meeting from the board meeting template"
                - "Circulate the final draft accounts to every director"
                - "Minute the approval and have the balance sheet signed"
                - "Send the signed accounts to the accountant for filing"
            - name: Filing the accounts with the companies registry
              description: |-
                ## Purpose
                Approval is not the finish line: the accounts only count once the registry accepts them. Online filing usually needs an authentication code, a format the registry accepts and someone who knows what to do if a submission is rejected. Filing with time to spare, and keeping the acceptance notice, is the step that actually avoids the penalty.

                ## Milestones
                1. Who files confirmed: you, a co-director or the accountant as agent.
                2. The company's filing authentication code located and stored securely.
                3. Accounts submitted at least two weeks before the deadline.
                4. The acceptance notice saved and logged in the filing tracker.

                ## Notes
                A rejected submission does not stop the clock. Leave enough time to fix it and resubmit.
              priority: high
              deadlineOffsetDays: 270
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The registry has accepted the accounts at least two weeks before the deadline and the acceptance notice is saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm who will submit the accounts to the registry"
                - "Find the company's filing authentication code and store it securely"
                - "Submit the accounts at least two weeks before the deadline"
                - "Save the acceptance notice in the filing tracker"
            - name: Filing extension request when the deadline is at risk
              description: |-
                ## Purpose
                Some registries grant extra time for accounts, but usually only on application before the deadline and only for reasons outside the company's control, such as serious illness or a disaster, not a busy accountant. Spotting early that the deadline is at risk, and applying properly, is far cheaper than a late penalty that grows the later the accounts arrive.

                ## Milestones
                1. The registry's rules on extensions, including the reasons it accepts, read.
                2. A clear decision on whether the deadline can still be met.
                3. An application made before the deadline with evidence, if one is needed.
                4. Any new deadline entered in the filing tracker.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A recorded decision on whether to apply for an extension, made before the deadline, with any granted date in the tracker."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the registry's rules on extending the accounts deadline"
                - "Ask the accountant whether the current deadline can still be met"
                - "Apply for an extension before the deadline with supporting evidence"
                - "Enter any new deadline in the filing tracker"
            - name: Late filing penalty response and recovery
              description: |-
                ## Purpose
                Once a deadline is missed, penalties usually accrue automatically, the company may be flagged on the public record and repeated failure can lead to the company being struck off or its directors prosecuted. A calm recovery plan files the overdue accounts first, then deals with the penalty, any appeal and the root cause, so it does not happen twice.

                ## Milestones
                1. The overdue accounts filed as the first priority.
                2. The penalty notice read and the amount and appeal window noted.
                3. An appeal submitted only where the reason meets the registry's criteria.
                4. The root cause fixed in next year's timetable.

                ## Notes
                Start from the **Remediation plan** template. Busy periods and accountant delays are rarely accepted grounds for appeal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The overdue accounts are filed, the penalty is paid or appealed within its window, and the cause is fixed in next year's timetable."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up the recovery plan from the remediation plan template"
                - "File the overdue accounts before anything else"
                - "Note the penalty amount and the appeal deadline"
                - "Submit an appeal only if the reason meets the registry's criteria"
                - "Write the root cause and its fix into next year's timetable"
            - name: Accounts distribution to lenders and investors
              description: |-
                ## Purpose
                Loan agreements often require signed annual accounts within a set number of days of year end, and investor agreements can carry similar information rights; missing them can be a technical default even when the registry deadline is months away. Listing every outside party owed a copy, with their date, and sending on time keeps those relationships out of trouble.

                ## Milestones
                1. Every loan, facility and shareholder agreement checked for accounts delivery clauses.
                2. A list of recipients with their deadline and required format.
                3. Signed accounts and any required compliance certificate sent to each.
                4. Proof of sending saved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every lender and investor owed annual accounts has received them by their contractual date, with proof of sending saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search loan and investor agreements for annual accounts delivery clauses"
                - "List each recipient with their deadline and required format"
                - "Ask the agent to draft a covering email for each recipient"
                - "Send the signed accounts and any covenant certificate to each recipient"
            - name: Annual confirmation of company details filing
              description: |-
                ## Purpose
                Alongside the accounts, many registries require a yearly confirmation or annual return of the registered office, directors, shareholders and people with significant control. Founders forget it because it is not part of the accountant's job by default. Checking the details against the statutory registers and filing on time keeps the public record accurate and the company in good standing.

                ## Milestones
                1. The confirmation date and what it must contain checked on the registry.
                2. Registered office, directors and shareholders compared with the statutory registers.
                3. Any outstanding changes filed before or with the confirmation.
                4. The confirmation filed and the receipt logged.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The annual confirmation is filed on time each year, with the registry details matching the company's statutory registers."
                cadence: cyclic
              tasks:
                - "Find the confirmation or annual return date on the registry record"
                - "Compare the registry's details with the company's statutory registers"
                - "File any outstanding changes to officers or shareholders"
                - "File the annual confirmation and log the receipt @recurring(yearly)"
            - name: First statutory accounts for a new company
              description: |-
                ## Purpose
                Newly formed companies often have a first accounting period longer or shorter than twelve months, and the first filing deadline may be counted from incorporation rather than from year end, which catches many founders out. Setting up the first year end properly, with an accountant engaged early and the books kept from day one, avoids a penalty in the company's first year.

                ## Milestones
                1. The first accounting period end and first filing deadline confirmed on the registry.
                2. Opening transactions recorded: share capital, formation costs and any founder loans.
                3. An accountant engaged for the first year end at least four months before the deadline.
                4. The first accounts approved and filed on time.

                ## Notes
                Spending incurred before incorporation needs careful handling. Keep the receipts and ask your accountant how to bring it into the books.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The company's first accounts are approved and filed before the first deadline shown on the registry record."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Confirm the first accounting period end and filing deadline on the registry"
                - "Record the share capital and any founder loans in the books"
                - "Engage an accountant for the first year end at least four months ahead"
                - "Plan the first year-end milestones back from the filing deadline"
            - name: Dormant company accounts and filings
              description: |-
                ## Purpose
                Holding companies, reserved names and paused ventures can be dormant, but dormant does not mean exempt: the company usually still files accounts and an annual confirmation, and a single bank charge or fee can end dormant status. A simple yearly routine keeps a dormant company compliant for a fraction of a trading company's cost.

                ## Milestones
                1. The registry's definition of dormant for accounts purposes checked against the company's activity.
                2. Bank statements confirmed to show no transactions that break dormant status.
                3. Dormant accounts prepared and filed on time each year.
                4. A decision recorded on whether to keep, reactivate or close the company.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dormant accounts are filed on time each year, and a yearly keep, reactivate or close decision is recorded."
                cadence: cyclic
              tasks:
                - "Read the registry's definition of a dormant company"
                - "Check the bank statements for transactions that end dormant status @recurring(quarterly)"
                - "Prepare and file the dormant accounts before the deadline"
                - "Decide once a year whether to keep, reactivate or close the company"
            - name: Crossing the small company thresholds
              description: |-
                ## Purpose
                Growth past the small company thresholds for two years in a row can cost a company its audit exemption, add a strategic report and fuller notes, and tighten the timetable. Spotting the crossing a year ahead, from the forecast rather than the final figures, gives a manager or founder time to book auditors, upgrade the close and brief the board.

                ## Milestones
                1. The forecast tested against the size thresholds for the next two years.
                2. The year in which the company is likely to change category identified.
                3. The new requirements listed: audit, strategic report, extra disclosures.
                4. A plan agreed with the accountant and, if needed, audit firms approached.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan names the first year the company changes size category, the extra reporting it brings and who will deliver it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Test next year's forecast against the size thresholds"
                - "Identify the first year the company would change size category"
                - "List the extra reporting the larger category brings"
                - "Approach audit firms a year before the first audit is needed"
            - name: First year end with outside investors
              description: |-
                ## Purpose
                Once angels or a fund own shares, the year end changes: share issues and options need recording in the equity note, investors may require audited accounts or a set delivery date, and preference share rights can affect how equity is presented. Founders who plan for this in their first post-investment year avoid a rushed correction just before the next round.

                ## Milestones
                1. The shareholder agreement read for accounts, audit and delivery requirements.
                2. Every share issue and option grant in the year documented with its registry filing.
                3. The accountant briefed on investor rights and any share-based payment arrangements.
                4. Accounts delivered to investors by the agreed date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The first post-investment accounts reflect every share issue and option grant and reach investors by the date in the shareholder agreement."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the shareholder agreement for accounts and audit obligations"
                - "Collect the documents for each share issue and option grant in the year"
                - "Brief the accountant on investor rights and option schemes"
                - "Agree the accounts delivery date with the lead investor"
            - name: New finance manager inheriting the year end
              description: |-
                ## Purpose
                Joining part way through the year means inheriting someone else's year end: their timetable, their accountant or auditor relationship and their unresolved issues. Spending the first fortnight finding last year's files, the open queries and the agreed dates turns a handover gap into a known plan before year end arrives.

                ## Milestones
                1. Last year's signed accounts, adjusting journals and correspondence found.
                2. Open queries and unresolved issues from last year listed.
                3. An introductory call held with the external accountant or auditor.
                4. This year's timetable confirmed or rebuilt under your name.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Within a month of starting, last year's files are located, open issues are listed and this year's timetable carries your name."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find last year's signed accounts and the accountant's correspondence"
                - "List every open query left over from last year"
                - "Book an introductory call with the external accountant"
                - "Confirm this year's year-end timetable with your manager"
            - name: Final accounts before closing a company
              description: |-
                ## Purpose
                Closing a company, whether by voluntary strike-off or a formal liquidation, usually needs final accounts and tax filings, cleared bank balances and settled debts first, and filing duties continue until the registry removes it. Planning the final year end with an accountant, and for an insolvent company a licensed insolvency practitioner, avoids a closure being blocked or later reversed.

                ## Milestones
                1. The closure route chosen with professional advice.
                2. Final accounts prepared to the date trading stopped.
                3. Bank balances, debts and tax liabilities settled or provided for.
                4. All outstanding filings made before the closure application.

                ## Notes
                Strike-off is generally only for solvent companies. If the company cannot pay its debts, take insolvency advice before doing anything else.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Final accounts to the cessation date are prepared and every outstanding filing is made before the closure application goes in."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every outstanding filing, debt and tax liability of the company"
                - "Ask the accountant which closure route suits the company"
                - "Prepare final accounts to the date trading stopped"
                - "Make all outstanding filings before applying for closure"
            - name: Going concern assessment paper for the board
              description: |-
                ## Purpose
                In a year with losses, net liabilities, a loan due within twelve months or a lost major customer, the directors need more than a sentence to support going concern. A short board paper built on a monthly cash forecast covering at least twelve months from approval, with a downside case and covenant headroom, gives the board and the accountant evidence for the basis of preparation and any disclosure.

                ## Milestones
                1. A monthly cash forecast covering at least twelve months from the expected approval date.
                2. A downside case written out, with the assumptions that would break the company.
                3. Covenant headroom and facility renewal dates shown.
                4. The paper minuted at the approval meeting and shared with the accountant.

                ## Notes
                Use the forecast your cash flow process already produces; this paper interprets it for the accounts. Whether a material uncertainty disclosure is needed is a judgement to make with your accountant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A going concern paper with a twelve-month forecast, downside case and covenant headroom is minuted at the approval meeting."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pull the latest monthly cash forecast covering the next twelve months"
                - "Build a downside case and note what would break the company"
                - "Show covenant headroom and facility renewal dates on one page"
                - "Refresh the going concern paper with the latest forecast @recurring(quarterly)"
            - name: Digital tagging of the accounts for online filing
              description: |-
                ## Purpose
                Many registries and tax authorities now want accounts in a machine-readable format such as inline XBRL, where each figure carries a tag from a published taxonomy. Wrong tags do not change the printed page but can misreport the company's figures in every database that reads the filing. Reviewing the tagging, even when software or the accountant applies it, catches a mis-tagged turnover or period date before submission.

                ## Milestones
                1. The required electronic format and taxonomy for your filing confirmed.
                2. Who applies the tags, and with which software, recorded.
                3. Key tags checked: company number, period dates, turnover, net assets and employees.
                4. The tagged file passed through a validator before filing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The key tags in the filed accounts have been checked against the printed figures and the file has passed a validator."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check which electronic format your registry and tax authority accept"
                - "Ask the accountant which software applies the tags"
                - "Check the tags on period dates, turnover and net assets in the preview"
                - "Run the tagged file through a validator before submission"
            - name: Local statutory accounts for a group subsidiary
              description: |-
                ## Purpose
                Subsidiaries often report to their parent on the group's framework and timetable, yet still owe local statutory accounts under local law, on a different basis and to a different deadline. Managers who run the entity need a reconciliation from the group pack to the local accounts, a local disclosure set and a local signing director, all planned around the group's own year-end rush.

                ## Milestones
                1. The local framework, filing deadline and audit requirement for the subsidiary confirmed.
                2. A reconciliation from the group reporting pack to the local trial balance.
                3. Local-only disclosures, such as directors' remuneration and intercompany balances, prepared.
                4. A local director briefed and available to sign before the deadline.

                ## Notes
                Group consolidation and eliminations sit with your consolidation process. This project covers only the subsidiary's own accounts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The subsidiary's local accounts reconcile to the group pack and are signed by a local director before the local deadline."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the subsidiary's local framework, deadline and audit status"
                - "Reconcile the group reporting pack to the local trial balance"
                - "List disclosures the local accounts need that the group pack lacks"
                - "Book the local signing director's time before the filing deadline"
            - name: Prior period error correction and restatement
              description: |-
                ## Purpose
                Finding a material mistake in accounts already filed, such as a missed liability, a double-counted sale or a wrong stock figure, raises questions about whether to restate comparatives, how to disclose it and whether amended accounts must be filed. Handling it methodically with the accountant keeps a historical error from becoming a credibility problem with lenders and the tax authority.

                ## Milestones
                1. The error quantified for each affected year.
                2. Materiality and the required treatment agreed with the accountant.
                3. Comparatives restated and the correction disclosed, or amended accounts filed where required.
                4. The control gap that allowed the error closed.

                ## Notes
                Any knock-on effect on past tax returns is a matter for your tax adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how the error is corrected, agreed with the accountant, with the correction reflected in the next accounts."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the error, the years affected and how it was found"
                - "Quantify the error's effect on profit and net assets for each year"
                - "Agree with the accountant whether to restate or file amended accounts"
                - "Fix the process gap that let the error through"
            - name: Transition to a new reporting framework
              description: |-
                ## Purpose
                Moving from a simplified local standard to a fuller one, or to international standards for investors or a listing, changes how leases, financial instruments, revenue and deferred tax are measured, and usually means restating the opening balances. Planning the transition a full year ahead with the accountant or auditor avoids discovering the restatement in the month the accounts are due.

                ## Milestones
                1. The reason for the change and the target framework agreed by the board.
                2. A gap analysis of measurement and disclosure differences completed.
                3. The transition date fixed and a restated opening balance sheet prepared.
                4. The first accounts under the new framework approved with transition disclosures.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A gap analysis and restated opening balance sheet are complete before the first year under the new framework ends."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down why the company is changing framework and by when"
                - "Ask the accountant for a gap analysis between the two frameworks"
                - "Prepare the restated opening balance sheet at the transition date"
                - "Draft the transition disclosures for the first accounts"
---

# Year-End Statutory Accounts

This area is for owners, founders and finance managers whose company has to prepare and file annual accounts, usually with an external accountant doing much of the drafting. It starts with the foundations (a deadline map, the company's size and framework, the audit question, a timetable, the records pack and a locked trial balance), then the year-round routines that make year end small, the accounting ideas behind the notes, decisions about filing format, year end date and reserves, the dated events of approval and filing, situations such as a first year, a dormant company, new investors or a closure, and finally specialist work on going concern, digital tagging, subsidiaries, restatements and framework changes.

What repeats is a monthly look at the filing tracker and the issues log, quarterly checks of the directors' loan account and related parties, a dry run at month nine, and a yearly cycle of the last-day checklist, adjusting journals, circulation to shareholders, archiving and a short retrospective. The Operational checklist, Compliance control, Meeting notes, Board meeting and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
