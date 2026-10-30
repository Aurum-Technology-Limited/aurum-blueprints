---
id: investment-banking.independent-valuation-engagements
name: Independent Valuation Engagements
description: "Valuation reports that hold up: engagement acceptance and scope, standards of value, data and fieldwork, reasoned conclusions, second review, and the transaction, dispute and financial reporting work that follows."
category: business
version: 1.0.0
tags: [investment-banking, independent-valuation-engagements, knowledge-worker, valuation-reports, fair-value, purchase-price-allocation, expert-witness, impairment]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - development-plan
    - onboarding-30-60-90
    - reading-queue
    - metrics-log
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Independent Valuation Engagements
          description: "Producing valuation reports for transactions, disputes or financial reporting: scope, methods, data, reasoned conclusions and review before release."
          projects:
            - name: Engagement acceptance and independence check
              description: |-
                ## Purpose
                Before any work starts, a valuer has to know whether they can be independent of the subject, the client and the likely readers, and whether the firm has the skills and time to do it properly. A written acceptance record, covering conflicts, prior relationships, fee dependence and competence, is the first document an auditor, regulator or opposing counsel will ask to see.

                ## Milestones
                1. A conflict search run against the client, the subject company, counterparties and known litigants.
                2. Prior work for any of those parties in the last three years listed and assessed.
                3. Competence and capacity confirmed, with any specialist support named.
                4. An acceptance or decline decision signed by the engagement partner and filed.

                ## Notes
                If the fee would be contingent on the conclusion or the outcome of a dispute, most valuation standards treat that as a threat to independence. Raise it before the letter is drafted, not after.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed acceptance record exists for the engagement, listing conflicts searched, relationships found and the decision taken."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Submit the client, subject and counterparty names to the firm's conflict search"
                - "List any work done for those parties in the last three years"
                - "Confirm the team has the sector and method experience the scope needs"
                - "Record the acceptance decision and get the engagement partner's sign-off"
            - name: Engagement letter with scope, purpose and intended users
              description: |-
                ## Purpose
                Most valuation disputes trace back to a vague letter: an unclear purpose, unnamed users or a scope that quietly grew. Setting out the subject interest, the purpose, the standard and premise of value, the valuation date, the intended users, the deliverable and the limits on reliance in one signed letter protects both the client and the valuer.

                ## Milestones
                1. The subject interest defined precisely, including class of shares, percentage held and any rights attached.
                2. Purpose, intended users and the use the report may not be put to written into the letter.
                3. Standard of value, premise, valuation date and the governing professional standard stated.
                4. Fee basis, timetable, liability terms and reliance limits agreed with the client.
                5. The letter countersigned and saved before fieldwork begins.

                ## Notes
                Have the firm's legal or risk team review any non-standard liability or reliance wording. A letter that names one intended user and is later relied on by a lender is a common source of claims.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A countersigned engagement letter names the subject interest, purpose, users, standard of value, valuation date and reliance limits."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line definition of the exact interest being valued"
                - "Draft the purpose, intended users and prohibited uses paragraph"
                - "Send non-standard liability wording to the firm's risk team for review"
                - "Obtain the countersigned letter before any fieldwork starts"
            - name: Standard of value and premise chosen for the purpose
              description: |-
                ## Purpose
                Fair value for financial reporting, fair market value for tax, investment value for a buyer and the statutory fair value used in some shareholder disputes are different questions with different answers. Fixing the standard and the premise (going concern, orderly or forced liquidation) at the start, with the source that requires it, stops the analysis drifting toward the wrong number.

                ## Milestones
                1. The standard of value the purpose requires identified, with the accounting standard, statute or agreement that defines it.
                2. The premise of value chosen and the reason recorded.
                3. Whether minority or control, and marketable or not, follows from the standard written down.
                4. The choice confirmed with the client and, for disputes, with instructing counsel.

                ## Notes
                In a dispute, the legal meaning of the standard is for counsel and the court; the valuer records the instruction received and applies it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A memo on file states the standard and premise of value, the source that requires them and who confirmed the choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the definition of value in the accounting standard, statute or agreement that applies"
                - "Write the premise of value and why it fits the subject's situation"
                - "Note what the standard implies for control and marketability adjustments"
                - "Send the memo to the client or instructing counsel for written confirmation"
            - name: Valuation date and known or knowable cut-off
              description: |-
                ## Purpose
                Every valuation speaks as at one date, and the classic challenge is that it used information nobody could have had then. Agreeing the date, the information cut-off and how subsequent events will be treated, before data arrives, keeps hindsight out of the conclusion and gives a clear answer when a later result is put to you.

                ## Milestones
                1. The valuation date agreed and written into the letter.
                2. A cut-off rule for information recorded, including how events after the date will be handled.
                3. Market data sources set to pull as at the valuation date, not the analysis date.
                4. A short note on subsequent events drafted for the report.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The working file records the valuation date, the information cut-off rule and a subsequent events note ready for the report."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the valuation date with the client in writing"
                - "Set every market data pull to the valuation date and label it"
                - "Write the rule for treating information that arrived after the date"
                - "Draft the subsequent events paragraph for the report"
            - name: Information request list for the subject company
              description: |-
                ## Purpose
                Fieldwork stalls when the client receives a generic forty-page list and answers the easy items first. A request tailored to the purpose, ranked by what the methods actually need (historical financials, forecasts and their basis, capitalisation table, material contracts, prior valuations), gets the critical documents in the first week.

                ## Milestones
                1. A request list drafted for this purpose and method set, with each item ranked essential or helpful.
                2. An owner on the client side named for each section.
                3. Essential items received or a reason recorded for any gap.
                4. The list kept as a living log with dates received.

                ## Notes
                Ask for every prior valuation of the subject, including ones for tax or internal purposes. An unexplained gap between your conclusion and an earlier report is the first question a reviewer will ask.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ranked information request log shows every essential item as received or explained, with dates."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a request list from the engagement letter's purpose and methods"
                - "Rank each item essential or helpful and cut the rest"
                - "Name a client contact for each section of the list"
                - "Request every prior valuation of the subject, whatever its purpose"
            - name: Map of the valuation standards that govern the work
              description: |-
                ## Purpose
                Depending on the country, the purpose and the valuer's credential, a report may need to comply with the International Valuation Standards, a national standard such as USPAP or the AICPA's SSVS in the US, a professional body's rules, or the accounting framework the value feeds. Knowing which apply, and what each requires in the report, prevents a technically sound valuation failing on form.

                ## Milestones
                1. The standards that apply to each type of engagement the practice takes listed in one table.
                2. Mandatory report contents for each standard extracted into a checklist.
                3. Differences between them on scope, assumptions and disclosures noted.
                4. The table reviewed by someone holding the relevant credential.

                ## Notes
                Check the current edition on each standard setter's website; several revise on a cycle of one to three years.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page table maps each engagement type to its governing standards, with a checklist of mandatory report contents for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the engagement types the practice took in the last two years"
                - "Download the current edition of each standard that may apply"
                - "Extract the mandatory report contents into one checklist"
                - "Ask a credentialed colleague to review the mapping"
            - name: Working paper file built for outside review
              description: |-
                ## Purpose
                Years after issue, a valuation file may be opened by an auditor's specialist, a regulator's inspector or a court, and it has to show how every number was reached. A standard folder structure, with the letter, data received, analyses, sources, review notes and the final report each in a fixed place, makes that review quick and the conclusion easier to defend.

                ## Milestones
                1. A standard folder structure agreed for every engagement.
                2. Naming and version rules set for models, drafts and the issued report.
                3. Source documents linked to the analyses that use them.
                4. A file index sheet sitting at the top of each engagement folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open engagement uses the same folder structure and carries a file index that links sources to analyses."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the folder structure from engagement letter through to issued report"
                - "Write the naming and versioning rule for models and drafts"
                - "Create a file index sheet and add it to the engagement template"
                - "Move one current engagement into the new structure as a test"
            - name: Management interview plan for valuation fieldwork
              description: |-
                ## Purpose
                Forecasts and normalisation adjustments carry most of the value, and the valuer has to understand and challenge them, not just receive them. A planned interview with the finance lead and the operators, with questions written against the specific assumptions, produces evidence for the report rather than a pleasant conversation.

                ## Milestones
                1. Interviewees chosen to cover finance, operations and commercial assumptions.
                2. Questions written against each key forecast driver and non-recurring item.
                3. Interview notes typed up within a day and agreed with the interviewees.
                4. Open points carried into the information request log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Agreed interview notes exist for each key forecast driver, with open points logged against named owners."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the five forecast drivers that move the value most"
                - "Write three probing questions for each driver"
                - "Book interviews with the finance lead and one operator"
                - "Type up the notes and send them to the interviewees to confirm"
            - name: Assumptions and limiting conditions library
              description: |-
                ## Purpose
                Every report carries assumptions and limiting conditions, and copying them from the last report is how a dispute valuation ends up with financial reporting language. A maintained library, with each clause tagged by purpose and standard and checked by the firm's risk team, lets the team pick the right wording quickly.

                ## Milestones
                1. Clauses from recent reports collected and duplicates removed.
                2. Each clause tagged by purpose, standard of value and governing standard.
                3. Clauses that conflict with any standard's requirements removed or rewritten.
                4. The library reviewed by the firm's risk or legal team and dated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated clause library, tagged by purpose and standard and reviewed by the risk team, is the only source used for new reports."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect the assumptions sections from the last ten issued reports"
                - "Remove duplicates and tag each clause by purpose and standard"
                - "Flag any clause that would conflict with a governing standard"
                - "Send the library to the risk team for review"
            - name: Engagement pipeline and status board
              description: |-
                ## Purpose
                A valuation practice usually runs many engagements with hard dates set by someone else: an audit sign-off, a filing, a hearing. One board showing each engagement's stage, next date, reviewer and fee position, looked at every Monday, catches the report that is about to collide with year-end before it does.

                ## Milestones
                1. Every open engagement on one board with stage, due date, reviewer and fee status.
                2. Hard external dates marked separately from internal targets.
                3. A Monday review held for four consecutive weeks.
                4. Clashes in reviewer time resolved at least two weeks ahead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The board lists every open engagement with its external due date and reviewer, and has been reviewed every Monday for a month."
                cadence: rolling
              tasks:
                - "Put every open engagement on one board with stage and external due date"
                - "Assign a second reviewer to every engagement on the board"
                - "Review the board and move dates that clash @recurring(weekly:mon)"
            - name: Weekly open-items call with the client
              description: |-
                ## Purpose
                Valuation timetables slip one late document at a time. A short weekly call, run from the information request log, with each open item, its owner and the date it will arrive, keeps the client finance team on pace and gives you an early warning to reset the delivery date in writing.

                ## Milestones
                1. A standing 20-minute call booked with the client contact.
                2. The open-items log sent the day before each call.
                3. Every item leaving the call with an owner and a date.
                4. Any slip that threatens the delivery date confirmed in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week of fieldwork has an open-items log sent before the call and updated with owners and dates after it."
                cadence: rolling
              tasks:
                - "Book a standing 20-minute call with the client finance contact"
                - "Send the open-items log the day before the call @recurring(weekly:thu)"
                - "Email a written timetable change if a slip moves the delivery date"
            - name: Market data refresh for discount rates and multiples
              description: |-
                ## Purpose
                Risk-free rates, equity risk premium estimates, size studies, betas and trading multiples move, and a practice that refreshes them ad hoc ends up with two reports issued the same week using different inputs. A monthly refresh into one dated source file, with the source of each input, keeps every engagement consistent and traceable.

                ## Milestones
                1. One dated source file holding risk-free rates, equity risk premium and size data with sources.
                2. Peer betas and multiples for the practice's common sectors refreshed into the same file.
                3. A monthly refresh logged for three consecutive months.
                4. Every live engagement pointing at a named version of the file.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated market data file is refreshed monthly, and every live engagement records which version it used."
                cadence: rolling
              tasks:
                - "Build the market data source file with a source column for every input"
                - "Refresh rates, risk premium and size data into a new dated version @recurring(monthly:3)"
                - "Rerun peer betas for the practice's main sectors @recurring(quarterly)"
                - "Record the file version in each live engagement's index"
            - name: Independent second review before release
              description: |-
                ## Purpose
                A reviewer who did not build the analysis catches the things the preparer can no longer see: a stale discount rate, a conclusion that does not follow from the weighting, a limiting condition from the wrong template. A documented second review on every report, with points raised and cleared, is what most firms' quality policies and most standards expect.

                ## Milestones
                1. A reviewer independent of the engagement team named for every report.
                2. A review checklist covering scope, data, methods, arithmetic, reasoning and wording.
                3. Every review point recorded with how it was cleared.
                4. Reports released only after the reviewer signs off.

                ## Notes
                Start from the **Operational checklist** template. Review the reasoning, not only the arithmetic: the most common rejected report is one whose numbers tie but whose conclusion is not explained.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every report issued in the last quarter has a named second reviewer and a cleared review-point log on file."
                cadence: rolling
              tasks:
                - "Write the second review checklist from the firm's quality policy"
                - "Name a reviewer outside the team for every open engagement"
                - "Check the review log for uncleared points on issued reports @recurring(monthly:20)"
                - "Block release of any report without reviewer sign-off"
            - name: File closing and retention routine
              description: |-
                ## Purpose
                Once a report is issued, the file needs to be frozen: final model, issued PDF, review log, representation letter and correspondence locked, and drafts handled according to the firm's retention policy. A monthly closing routine stops files staying open for months and makes later challenges far easier to answer.

                ## Milestones
                1. A closing checklist listing what a complete file contains.
                2. Every engagement issued in the month closed within 30 days.
                3. Retention periods recorded for each file, following the firm's policy and any legal hold.
                4. A monthly log of files closed and still open.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every report issued more than 30 days ago has a closed file with the final model, issued report and review log locked."
                cadence: rolling
              tasks:
                - "Write the closing checklist of what a complete file must hold"
                - "Close the files of reports issued last month @recurring(monthly:28)"
                - "Confirm with the risk team which files are under a legal hold"
            - name: Fee estimate against actual hours tracking
              description: |-
                ## Purpose
                Fixed or capped fees are common in valuation work, and scope creep from extra classes of shares, a second valuation date or a long auditor challenge quietly erodes them. Tracking hours against the estimate each month, by engagement type, shows which work is underpriced and gives you the evidence to agree a change in scope before it is too late.

                ## Milestones
                1. Each engagement's estimate broken into phases with budgeted hours.
                2. Actual hours compared to budget monthly for every open engagement.
                3. Scope changes agreed with the client in writing when the variance passes a set threshold.
                4. A year of results summarised by engagement type to reset future estimates.

                ## Notes
                Start from the **Metrics log** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly hours-to-budget log exists for every open engagement, with written scope changes for any variance above the threshold."
                cadence: rolling
              tasks:
                - "Split each open engagement's fee estimate into phases with budgeted hours"
                - "Compare actual hours to budget for every open engagement @recurring(monthly:9)"
                - "Set the variance threshold that triggers a scope conversation"
            - name: Quarterly fair value cycle for fund investments
              description: |-
                ## Purpose
                Private equity, venture and credit funds value their unlisted holdings every quarter under IFRS 13 or ASC 820, and an independent adviser is often asked to value or review those marks. A fixed quarterly cycle, from data request to calibration to the valuation committee pack, means the work is done the same way each time and changes in value can be explained.

                ## Milestones
                1. A quarterly calendar agreed with the fund, from data request to committee date.
                2. Each holding's method and calibration to the entry price documented.
                3. A roll-forward explaining each holding's change in value since last quarter.
                4. The committee pack delivered by the agreed date for two quarters running.

                ## Notes
                Follow the fund's valuation policy and keep a copy on file; many funds also follow the International Private Equity and Venture Capital Valuation Guidelines as an example of practice.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Two consecutive quarterly packs delivered on time, each with a roll-forward explaining every holding's change in value."
                cadence: cyclic
              tasks:
                - "Agree the quarterly calendar with the fund's finance team"
                - "Send the quarterly data request to each portfolio company contact @recurring(quarterly)"
                - "Document the method and entry-price calibration for each holding"
                - "Build the roll-forward of value changes for the committee pack"
            - name: Annual goodwill impairment season plan
              description: |-
                ## Purpose
                Impairment tests under IAS 36 or ASC 350 cluster around year-end, and an adviser with several clients can face every report due in the same three weeks as the auditors' deadlines. Planning the season in advance, with data requests out early and reviewer time booked, turns a crunch into a schedule.

                ## Milestones
                1. Every impairment client listed with its year-end, audit deadline and cash-generating units or reporting units.
                2. Data requests issued at least eight weeks before each audit deadline.
                3. Reviewer time booked for every report.
                4. A post-season note of what to change next year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A season plan lists every impairment client with audit deadline, data request date and reviewer, issued at least eight weeks ahead."
                cadence: cyclic
              tasks:
                - "List every impairment client with its year-end and audit deadline"
                - "Draft the season plan and book reviewer time @recurring(yearly)"
                - "Send data requests eight weeks before each audit deadline"
                - "Write the post-season lessons note within a month of the last report"
            - name: Standards and guidance update watch
              description: |-
                ## Purpose
                Standard setters for valuation, accounting boards, professional bodies and courts all change what is expected, sometimes with little notice. A short quarterly scan, logged with what changed and which templates it affects, keeps the practice's reports current and gives you evidence of continuing professional development.

                ## Milestones
                1. A list of the standard setters, bodies and publications to watch.
                2. A quarterly log of changes and their effect on the practice.
                3. Templates and checklists updated within a month of a relevant change.
                4. Professional development hours recorded against the scan.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Four quarters of the change log exist, each linked to any template or checklist update it caused."
                cadence: rolling
              tasks:
                - "List the standard setters and professional bodies the practice follows"
                - "Scan their updates and log each change that affects the practice @recurring(quarterly)"
                - "Record the professional development hours in your log @recurring(monthly:26)"
            - name: Precedent report library for the practice
              description: |-
                ## Purpose
                Writing a report from a blank page wastes days, while copying the wrong old report imports the wrong standard and stale assumptions. A curated library of the practice's best recent reports, tagged by purpose, method and sector and stripped of client identifiers where policy requires, gives the team strong starting points.

                ## Milestones
                1. A shortlist of exemplary reports chosen by a senior reviewer.
                2. Each tagged by purpose, standard of value, method and sector.
                3. Client identifiers handled according to the firm's confidentiality policy.
                4. New exemplars added each month and outdated ones retired.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tagged library of at least ten exemplar reports exists, reviewed monthly, with retired items marked."
                cadence: rolling
              tasks:
                - "Ask a senior reviewer to name ten exemplary reports from the last two years"
                - "Tag each report by purpose, standard of value, method and sector"
                - "Add new exemplars and retire outdated ones @recurring(monthly:15)"
            - name: Reconciling approaches into one conclusion
              description: |-
                ## Purpose
                The income, market and asset approaches rarely agree, and the weakest part of many reports is the paragraph that turns three numbers into one. Practising how to weigh approaches by the quality of their evidence, and how to explain why one is preferred, produces conclusions a reviewer can follow rather than an unexplained average.

                ## Milestones
                1. Three past reports reread with the reconciliation paragraph marked up.
                2. A short guide to weighting by evidence quality, comparability and purpose.
                3. A reconciliation written for a practice case and reviewed by a senior.
                4. The guide added to the report template's conclusion section.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written weighting guide exists, and a reconciliation drafted from it has been reviewed by a senior with comments cleared."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Reread the conclusion sections of three issued reports"
                - "List what made each weighting convincing or weak"
                - "Draft a reconciliation for a practice case using the guide"
                - "Ask a senior reviewer to mark up the draft"
            - name: Discounts for lack of control and marketability
              description: |-
                ## Purpose
                For minority stakes in private companies, the discounts can move the conclusion by a third or more, and they are among the most challenged numbers in disputes and tax reviews. Learning the studies, models and judgement behind each discount, and when the standard of value forbids them, lets you support the figure with evidence rather than habit.

                ## Milestones
                1. The main restricted stock, pre-IPO and option-model approaches summarised with their criticisms.
                2. The factors that drive the size of each discount listed for the subject.
                3. A worked example applying both discounts to a practice case, with reasoning.
                4. A note on when the standard of value or the instruction excludes discounts.

                ## Notes
                Whether a discount applies in a dispute or a tax matter is often a legal question; record the instruction from counsel or the tax adviser rather than deciding it yourself.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example supports each discount with named evidence and factors, and notes when the standard excludes it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the main empirical studies and option models for marketability discounts"
                - "List the factors that make a discount larger or smaller"
                - "Apply both discounts to a practice case and write the reasoning"
                - "Note which standards of value or instructions rule discounts out"
            - name: Intangible asset valuation methods
              description: |-
                ## Purpose
                Purchase price allocations and impairment work turn on valuing customer relationships, technology, brands and order backlogs, each with its own method: relief from royalty, the multi-period excess earnings method, with-and-without, and cost approaches. Building each method once on a practice case, with its contributory asset charges and tax amortisation benefit, is the fastest way to stop treating them as black boxes.

                ## Milestones
                1. One practice model each for relief from royalty, excess earnings and with-and-without.
                2. Contributory asset charges calculated and explained.
                3. Tax amortisation benefit included and its basis noted.
                4. A one-page guide to which method suits which asset type.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three working practice models, one per method, exist with contributory asset charges and a method-selection guide."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Build a relief from royalty model for a practice brand"
                - "Build an excess earnings model for a practice customer base"
                - "Add contributory asset charges and the tax amortisation benefit"
                - "Write a one-page guide matching methods to asset types"
            - name: Complex capital structures with OPM, PWERM and backsolve
              description: |-
                ## Purpose
                Venture-backed and sponsor-owned companies have preferred shares, liquidation preferences, options and warrants, so the value of the whole company has to be allocated across classes. Learning the option pricing method, the probability-weighted expected return method and calibration by backsolving to a recent round lets you value a single class with a method an auditor will recognise.

                ## Milestones
                1. A waterfall built for a practice cap table with two preferred series and options.
                2. Values allocated by OPM and by PWERM for the same case.
                3. A backsolve calibrated to a recent round price.
                4. A note on when each method suits the company's stage and exit outlook.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One practice case allocates value across classes by OPM, PWERM and backsolve, with a written note on method choice."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Build a liquidation waterfall for a practice cap table"
                - "Allocate value with the option pricing method"
                - "Run the same case through PWERM with three exit scenarios"
                - "Calibrate a backsolve to a recent round price"
            - name: Rate of return reconciliation in a purchase price allocation
              description: |-
                ## Purpose
                An allocation is credible when the deal's implied internal rate of return, the WACC and the weighted average return on assets roughly agree, and auditors' specialists check this first. Practising the reconciliation, and knowing what a gap says about the price paid or the forecast, saves a round of challenge on every allocation.

                ## Milestones
                1. The implied deal IRR calculated from price and forecast for a practice case.
                2. WACC estimated from market participant inputs.
                3. Returns assigned to each asset class and the weighted average computed.
                4. Any gap explained in a short paragraph ready for the report.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice allocation shows IRR, WACC and the weighted return on assets side by side, with any gap explained in writing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the implied IRR from the purchase price and forecast"
                - "Estimate WACC from market participant inputs"
                - "Assign returns to working capital, fixed assets, intangibles and goodwill"
                - "Write the paragraph explaining any gap between the three"
            - name: Writing the reasoned valuation report
              description: |-
                ## Purpose
                Readers of a valuation report, whether an audit committee, a judge or a tax inspector, rarely rerun the model; they judge whether the reasoning holds. Learning to write each section so that it states the evidence, the judgement and why alternatives were rejected turns an accurate analysis into a conclusion that survives scrutiny.

                ## Milestones
                1. A section-by-section outline agreed for the practice's main report types.
                2. Each major judgement written as evidence, choice and rejected alternatives.
                3. A full draft reviewed for plain language by someone outside valuation.
                4. Reviewer comments on reasoning, not formatting, below an agreed count on the next report.

                ## Notes
                Write the conclusion and the reconciliation first, then the sections that support them; it exposes missing evidence early.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full report draft has each major judgement written as evidence, choice and rejected alternatives, reviewed by a non-specialist."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Outline the sections of the practice's most common report type"
                - "Rewrite one judgement as evidence, choice and rejected alternatives"
                - "Draft the conclusion and reconciliation before the supporting sections"
                - "Ask a colleague outside valuation to read for plain language"
            - name: Valuation credential plan
              description: |-
                ## Purpose
                Courts, auditors and clients look for recognised credentials, such as the ABV, ASA or CVA in the US, the CBV in Canada, the CFA charter alongside valuation experience, or RICS for property and some business valuation. Choosing the one that fits your market and practice, and planning the exams and experience requirements, turns years of engagements into a qualification.

                ## Milestones
                1. Two or three credentials compared on recognition in your market, requirements and cost.
                2. One credential chosen and its current requirements checked on the body's website.
                3. A study and experience log plan with target exam dates.
                4. Monthly progress recorded against the plan.

                ## Notes
                Start from the **Development plan** template. Check exam formats, fees and experience rules with the awarding body; they change.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A chosen credential with its current requirements recorded, a dated study plan and twelve months of logged progress."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Compare two or three valuation credentials on recognition in your market"
                - "Check the chosen body's current exam and experience requirements"
                - "Set target dates for each exam or module"
                - "Log study hours and qualifying engagements @recurring(monthly:12)"
            - name: Standard report template for the practice
              description: |-
                ## Purpose
                Reports that look different every time take longer to review and invite questions about consistency. A single template with fixed sections (scope, subject, standard of value, sources, economic and industry context, analyses, reconciliation, conclusion, assumptions, certification) and purpose-specific modules makes every report easier to write and review.

                ## Milestones
                1. Core sections agreed with the practice lead.
                2. Modules for financial reporting, transaction, dispute and tax purposes drafted.
                3. Mandatory contents from the standards checklist mapped into the template.
                4. The template used on two live reports and revised from feedback.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A report template with purpose modules and mapped mandatory contents has been used on two live reports and revised."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the core section list with the practice lead"
                - "Draft the four purpose-specific modules"
                - "Map each standard's mandatory contents into the template"
                - "Pilot the template on two live reports and collect comments"
            - name: Choosing market data and transaction databases
              description: |-
                ## Purpose
                Valuation work depends on paid data: market prices and betas, private transaction databases, royalty rate sources, cost of capital studies. Comparing subscriptions against the engagements you actually run, and the coverage you need by region and size, avoids paying for three overlapping services while lacking the one a reviewer will expect.

                ## Milestones
                1. The data the practice used over the last year listed by engagement type.
                2. Current subscriptions mapped against that need, with gaps and overlaps.
                3. Two or three options priced and trialled.
                4. A decision recorded with cost, coverage and renewal date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on data subscriptions states cost, regional coverage, gaps closed and the next renewal date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the data sources cited in the last year's reports"
                - "Map current subscriptions against that list and mark overlaps"
                - "Arrange trials of two alternatives"
                - "Review usage and cost before each renewal date @recurring(yearly)"
            - name: Engagement risk register
              description: |-
                ## Purpose
                Some valuation work carries more risk than its fee suggests: a dispute with aggressive opposing experts, a client under financial stress, a report that a lender may rely on. Keeping a register of engagement risks, with likelihood, effect and mitigation, gives the practice lead a monthly view of where a claim or a reputational problem could come from.

                ## Milestones
                1. Risk categories defined, from independence and reliance to timing and data quality.
                2. Every open engagement rated against them.
                3. A mitigation and owner for each high rating.
                4. A monthly review recorded for three months.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every open engagement is rated in the register, each high risk has a named owner, and three monthly reviews are logged."
                cadence: rolling
              tasks:
                - "Define the risk categories with the practice lead"
                - "Rate every open engagement against the categories"
                - "Review the register and update mitigations @recurring(monthly:24)"
            - name: Pricing valuation engagements
              description: |-
                ## Purpose
                Fixed fees suit repeat work such as quarterly fund marks, while disputes and first-time allocations can run far past any estimate. Deciding a pricing approach by engagement type, with scope assumptions written into the letter and a mechanism for changes, protects margin without surprising the client.

                ## Milestones
                1. Past engagements grouped by type with actual hours and fees.
                2. A pricing approach chosen for each type: fixed, capped or time-based.
                3. Standard scope assumptions and change wording drafted for the letter.
                4. The approach approved by the practice lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pricing approach per engagement type, with scope assumptions and change wording, is approved and in the letter template."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Group last year's engagements by type with hours and fees"
                - "Choose fixed, capped or time-based pricing for each type"
                - "Draft the scope assumptions and change mechanism wording"
                - "Present the approach to the practice lead for approval"
            - name: Answering an auditor's valuation challenge
              description: |-
                ## Purpose
                When a valuation feeds financial statements, the audit team's own valuation specialists will test it, often close to the client's deadline. A prepared response pack, with sources, sensitivities and the reasoning behind each judgement, and a log of questions and answers, shortens the challenge and avoids changes made in haste.

                ## Milestones
                1. A response pack template holding sources, key judgements and sensitivities.
                2. Every auditor question logged with the answer and date.
                3. Agreed changes, if any, documented with their effect on value.
                4. A closing note filed when the auditor confirms they have no further points.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A question log shows every auditor point answered and dated, with any agreed change and its effect on value recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Assemble the sources, key judgements and sensitivities into one pack"
                - "Start a question log with columns for answer, date and status"
                - "Ask the agent to summarise the auditor's comments into themed questions"
                - "File a closing note once the auditor confirms no further points"
            - name: Purchase price allocation after an acquisition
              description: |-
                ## Purpose
                After a deal closes, the acquirer must allocate the price to identifiable assets and liabilities at fair value under IFRS 3 or ASC 805, usually within its first reporting period and the measurement window that follows. Delivering the allocation on the audit timetable, with intangibles identified, valued and reconciled to the price, is one of the most common valuation engagements.

                ## Milestones
                1. Acquired intangibles identified from the deal documents and management interviews.
                2. Each intangible valued with a method suited to it, with useful lives estimated.
                3. Working capital, fixed assets and contingent items marked to fair value.
                4. Goodwill computed and the rate of return reconciliation completed.
                5. The report issued and accepted by the audit team before the reporting deadline.

                ## Notes
                Ask early whether there is contingent consideration; it changes the price being allocated and may need its own valuation.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An allocation report, with every intangible valued and goodwill reconciled, is accepted by the auditors before the reporting deadline."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Read the purchase agreement for consideration terms and acquired assets"
                - "List candidate intangibles with management in a first interview"
                - "Value each intangible and estimate its useful life"
                - "Complete the rate of return reconciliation before issuing the draft"
            - name: Year-end impairment test for the audit committee
              description: |-
                ## Purpose
                An impairment test that shows little headroom, or none, will be read line by line by the audit committee and the auditors. Delivering a test that sets out cash-generating units, recoverable amount, key assumptions, headroom and the change in assumptions that would erase it gives the committee what it needs to make its judgement.

                ## Milestones
                1. Units and their carrying amounts agreed with the client's finance team.
                2. Recoverable amount estimated with the method the standard requires.
                3. Headroom and break-even changes in key assumptions calculated.
                4. A summary pack delivered to the audit committee by the agreed date.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit committee receives a pack showing headroom and break-even assumption changes for every unit by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Agree the units and carrying amounts with the finance team"
                - "Estimate recoverable amount for each unit"
                - "Calculate the change in each key assumption that erases headroom"
                - "Deliver the summary pack to the committee secretary"
            - name: Expert valuation report in a shareholder dispute
              description: |-
                ## Purpose
                In shareholder oppression, buy-out or partnership disputes, the valuation expert's duty runs to the court or tribunal, not to the side paying the fee. Producing a report that follows the procedural rules on expert evidence, sets out instructions and assumptions plainly and addresses the other side's likely arguments is what gives it weight.

                ## Milestones
                1. Letter of instruction received, with the questions the expert must answer.
                2. The procedural rules for expert reports in that forum obtained and summarised.
                3. Alternative assumptions the other side may argue analysed in the report.
                4. Report signed with the required statement of truth or expert declaration and served on time.

                ## Notes
                Instructing counsel decides legal questions such as the valuation date or whether discounts apply; record each instruction and its source in the report.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed expert report answering each instructed question, with the required declaration, is served by the court's deadline."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask instructing counsel for a written letter of instruction"
                - "Summarise the forum's rules for expert reports on one page"
                - "List the alternative assumptions the other side is likely to argue"
                - "Check the report includes the required expert declaration before signing"
            - name: Preparing to give evidence as a valuation expert
              description: |-
                ## Purpose
                Cross-examination tests whether you understand and stand behind every step of your report, and whether you are independent. Preparing by rereading the report and the opposing report, practising answers to the hardest questions with counsel's permitted process, and assembling a clean bundle of your workings makes the day far less hazardous.

                ## Milestones
                1. Your report and the opposing expert's reread with weaknesses listed.
                2. Any joint statement with the other expert agreed and reviewed.
                3. Practice on likely questions completed within the limits the forum allows.
                4. A clean bundle of key workings and sources ready for the hearing.

                ## Notes
                Rules on witness preparation differ by jurisdiction; ask instructing counsel what is permitted before any practice session.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Evidence given on the hearing date with a listed set of weaknesses addressed and a working bundle prepared in advance."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Reread your report and list its five weakest points"
                - "Mark up the opposing expert's report for points of disagreement"
                - "Ask counsel what preparation the forum permits"
                - "Build a tabbed bundle of key workings and sources"
            - name: Independent expert report on a related-party transaction
              description: |-
                ## Purpose
                Where listing rules or a regulator require an independent valuation for a deal between a company and its insiders, the report must stand apart from both sides and from the board's own advisers. Delivering it on the transaction timetable, with independence confirmed and scope set by the rules that require it, protects minority shareholders and the reputation of the valuer.

                ## Milestones
                1. The rule or regulation requiring the report identified and its content requirements listed.
                2. Independence from the company, the related party and other advisers confirmed in writing.
                3. Valuation conclusions delivered with the basis stated in the form the rule requires.
                4. Consent to inclusion in the shareholder document given after review of the surrounding text.

                ## Notes
                This differs from a fairness opinion: the deliverable is a valuation report to a standard set by the rules, not a view on fairness to the board.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A report meeting the requiring rule's content list is issued, with written independence confirmation and consent given after text review."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Find the rule requiring the report and list its required contents"
                - "Confirm independence from every party to the transaction in writing"
                - "Agree the transaction timetable with the company secretary"
                - "Review every sentence that cites the report before giving consent"
            - name: Banker moving into valuation advisory
              description: |-
                ## Purpose
                Bankers bring speed with models and comps, but valuation advisory expects a different habit: every input sourced, conclusions written for a sceptical reader and standards that bind the work. A 90-day plan that targets those differences, with early exposure to a review and a report from start to finish, makes the transition faster.

                ## Milestones
                1. The main differences from banking valuation listed with a senior colleague.
                2. One full report shadowed from engagement letter to issue.
                3. A first section drafted under the practice's standards and reviewed.
                4. A professional standards course or credential step booked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Within 90 days you have shadowed one full report, drafted a reviewed section and booked a standards course."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List with a senior how valuation reports differ from pitch valuations"
                - "Ask to shadow one engagement from letter to issued report"
                - "Draft one report section and request a written review"
                - "Book a valuation standards course"
            - name: Moving from audit into valuation services
              description: |-
                ## Purpose
                Auditors arrive knowing the accounting standards and how reviewers think, but often with less practice building forecasts and choosing discount rates. Planning the move around those gaps, and using your audit background as a strength in financial reporting valuations, shortens the time to running your own workstreams.

                ## Milestones
                1. A self-assessment of skills against the practice's skills matrix.
                2. Forecast modelling and discount rate work practised on two cases.
                3. Assigned to a financial reporting engagement where audit knowledge counts.
                4. A review with your manager on progress after three months.

                ## Notes
                Check any independence rules if you are moving within the same firm that audits clients you will value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed skills self-assessment, two practice cases and a three-month review recorded with your manager."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Rate yourself against the practice's skills matrix"
                - "Build a forecast and discount rate for two practice cases"
                - "Ask to join a financial reporting valuation engagement"
                - "Book a three-month progress review with your manager"
            - name: First 90 days as a valuation analyst
              description: |-
                ## Purpose
                New analysts are handed data requests, comps screens and report sections across several engagements at once. A 30/60/90 plan, with specific competences at each stage and a mentor's sign-off, turns a confusing first quarter into a record of what you can now do unsupervised.

                ## Milestones
                1. By day 30, the firm's templates, data sources and file rules learned and used.
                2. By day 60, a full market approach and one income approach section prepared.
                3. By day 90, a complete draft section that passes review with minor comments.
                4. A mentor's sign-off on each stage recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Mentor sign-offs at day 30, 60 and 90 are recorded, the last on a draft section passing review with minor comments."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write the 30, 60 and 90 day goals with your mentor"
                - "Learn where the templates, data sources and file rules live"
                - "Prepare a market approach section on a live engagement"
                - "Book the 90-day sign-off meeting"
            - name: Managing several valuation engagements at once
              description: |-
                ## Purpose
                Managers typically run six or more engagements with overlapping deadlines, different reviewers and teams of analysts. A weekly planning slot, with each team's priorities set and reviewer time protected, keeps quality up when everything is due the same month.

                ## Milestones
                1. A weekly plan per analyst showing which engagement and which section.
                2. Reviewer slots booked for each report two weeks ahead.
                3. A short Friday note to the partner on status and risks.
                4. No report released late or unreviewed for a full quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarter passes with weekly analyst plans, Friday status notes and every report released on time with review."
                cadence: rolling
              tasks:
                - "Set each analyst's priorities for the week @recurring(weekly:mon)"
                - "Book reviewer slots two weeks ahead for every report"
                - "Send the partner a short status and risk note @recurring(weekly:fri)"
            - name: Setting up an independent valuation practice
              description: |-
                ## Purpose
                Valuers leaving a firm to work alone need the things a firm provided: professional indemnity insurance, engagement terms, a quality review arrangement, data subscriptions and a file retention system. Putting those in place before taking the first instruction avoids taking on liability without cover.

                ## Milestones
                1. Professional indemnity cover in place at a level suited to the work.
                2. Engagement letter terms reviewed by a lawyer.
                3. An arrangement for independent second review with a peer.
                4. Data subscriptions and a secure file system running.
                5. Registration with any professional body or regulator that applies.

                ## Notes
                Ask an insurance broker and a lawyer about cover levels and liability caps for your market; requirements vary by country and by type of work.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Insurance, reviewed engagement terms, a peer review arrangement and a secure file system are all in place before the first instruction."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get insurance quotes from a broker who covers valuation work"
                - "Have a lawyer review your engagement letter terms"
                - "Agree a peer second review arrangement in writing"
                - "Review insurance cover against the year's work before renewal @recurring(yearly)"
            - name: Valuation for a tax filing or restructuring
              description: |-
                ## Purpose
                Group reorganisations, transfers of shares between family members and some cross-border moves need a valuation that the tax authority may examine years later. Working to the standard of value the tax rules use, documenting the evidence thoroughly and coordinating with the client's tax adviser on what the filing needs, keeps the report useful when it is questioned.

                ## Milestones
                1. The tax adviser's instruction on the standard of value and date recorded.
                2. The report prepared to that standard, with evidence kept for the likely review period.
                3. Coordination on the filing timetable agreed with the tax adviser.
                4. The report and working file retained for the period the adviser specifies.

                ## Notes
                Tax conclusions belong to the client's tax adviser; the valuer applies the instructed standard and date.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A report prepared to the tax adviser's instructed standard is issued before the filing date, with retention agreed in writing."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Ask the client's tax adviser to confirm the standard of value and date in writing"
                - "Agree the filing timetable with the tax adviser"
                - "Document every source used in the report working file"
                - "Record the retention period the tax adviser specifies"
            - name: Share-based payment and option grant valuations
              description: |-
                ## Purpose
                Companies granting options or share awards need a fair value for the accounting charge under IFRS 2 or ASC 718, and private US companies typically need a common stock valuation for tax rules such as Section 409A. Building a repeatable model with sourced volatility, expected term and dividend inputs makes each grant faster and consistent across years.

                ## Milestones
                1. The award terms, vesting conditions and any market conditions summarised.
                2. Inputs for volatility, term, risk-free rate and dividends sourced and dated.
                3. A pricing model chosen that fits the award, with Monte Carlo used for market conditions.
                4. A report issued and a refresh schedule set with the client.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A grant valuation report with sourced inputs is issued and a refresh schedule agreed with the client."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise the award terms and vesting conditions"
                - "Source volatility from a peer set and date the pull"
                - "Choose a pricing model that fits the award type"
                - "Refresh volatility and rate inputs with the client @recurring(quarterly)"
            - name: Fair value of contingent consideration and earn-outs
              description: |-
                ## Purpose
                Earn-outs tied to revenue or profit targets have to be measured at fair value at the deal date and remeasured each period, and their payoffs are rarely linear. Modelling them with scenario or Monte Carlo methods, with the right discount rates for the metric and for the buyer's credit, gives a figure auditors can test.

                ## Milestones
                1. The earn-out terms modelled exactly, including caps, floors and catch-ups.
                2. The metric's volatility and risk-adjusted forecast estimated.
                3. A simulation or scenario model producing the fair value.
                4. A remeasurement routine agreed with the client for later periods.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An earn-out fair value model reproduces the agreement's payoff terms and has been accepted by the auditors."
                cadence: one-shot
                effort_hours_estimate: "18"
              tasks:
                - "Map the earn-out payoff from the purchase agreement"
                - "Estimate the metric's volatility and risk-adjusted forecast"
                - "Build the simulation and test it against simple scenarios"
                - "Agree the remeasurement routine with the client's finance team"
            - name: Solvency analysis for a leveraged recapitalisation
              description: |-
                ## Purpose
                Before a leveraged dividend, buyout or recapitalisation, a board or lender may ask for an independent analysis of whether the company will be solvent afterwards on balance sheet, cash flow and capital tests. Defining the tests from the governing law with counsel, then running them on stressed cases, is specialist work with real liability attached.

                ## Milestones
                1. The tests to be applied defined in writing with counsel.
                2. Fair value of assets compared with liabilities after the transaction.
                3. Cash flow ability to meet debts tested on base and stressed cases.
                4. A report issued with all assumptions and limiting conditions reviewed by the firm's risk team.

                ## Notes
                Whether a company is legally solvent is for the court and counsel; the valuer reports on the tests as defined in the instruction.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A solvency report runs each test agreed with counsel on base and stressed cases, cleared by the firm's risk team."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Agree the tests to apply with counsel in writing"
                - "Value assets and compare them with post-transaction liabilities"
                - "Run the cash flow tests on a base and a stressed case"
                - "Send the draft to the firm's risk team before release"
            - name: Quantifying lost profits and damages
              description: |-
                ## Purpose
                Breach of contract, lost business and post-acquisition disputes often turn on a damages figure rather than a business value, using a but-for world compared with what happened. Building a damages model with a clear causation link supplied by counsel, mitigation and discounting to the right date makes the number usable in court or arbitration.

                ## Milestones
                1. The claim, the damages period and the causation assumptions instructed by counsel recorded.
                2. A but-for forecast built with sources and compared with actual results.
                3. Mitigation and avoided costs deducted.
                4. Damages discounted or brought forward to the date counsel instructs.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A damages model with sourced but-for and actual results, mitigation and the instructed date is delivered to counsel."
                cadence: phased
                effort_hours_estimate: "45"
              tasks:
                - "Record the damages period and causation assumptions from counsel"
                - "Build the but-for forecast from contemporaneous documents"
                - "Deduct mitigation and avoided costs"
                - "Confirm with counsel the date to discount or bring forward to"
            - name: Valuing debt and preferred instruments at fair value
              description: |-
                ## Purpose
                Funds and companies hold private loans, convertible notes and preferred shares that need a fair value for reporting, where no market price exists. Learning yield analysis, credit spread calibration and convertible models lets you value these instruments on their own terms rather than at cost.

                ## Milestones
                1. Instrument terms summarised, including conversion, call and put features.
                2. A market yield estimated from comparable credit and calibrated at entry.
                3. A convertible model built where conversion is valuable.
                4. A valuation note issued with the calibration explained.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each instrument has a valuation note showing terms, calibrated yield and any conversion value."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Summarise the instrument's terms and embedded features"
                - "Calibrate a market yield to the entry price"
                - "Build a convertible model if conversion is likely to be valuable"
                - "Write the valuation note explaining the calibration"
            - name: Valuations in thin markets with sparse comparables
              description: |-
                ## Purpose
                In small economies such as Caribbean markets, frontier markets or niche sectors, there may be no listed peers, few transactions and limited rate data. Building an approach that blends regional and international peers, adjusts for country and size risk with sourced evidence, and states the limits plainly gives a defensible conclusion where the textbook inputs do not exist.

                ## Milestones
                1. Local, regional and international comparable sets assembled and the reasons for each noted.
                2. Country risk and currency adjustments sourced and documented.
                3. Greater weight placed on the approach with the strongest local evidence, with reasons.
                4. A limitations paragraph written for the report.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A thin-market method note covers peer sets, country risk evidence, weighting and a written limitations paragraph."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Assemble local, regional and international comparable sets"
                - "Source country risk and currency inputs and record each source"
                - "Decide which approach has the strongest local evidence"
                - "Write the limitations paragraph for the report"
            - name: Valuation review of another firm's report
              description: |-
                ## Purpose
                Lenders, boards and courts sometimes engage a second valuer to review a report rather than produce a new one. Reviewing to a defined scope, checking compliance with standards, data, methods and reasoning, and stating clearly whether the conclusion is supported, is a distinct service with its own reporting rules under several standards.

                ## Milestones
                1. The review scope and whether you may form your own opinion of value agreed in the letter.
                2. The report checked against the governing standard's requirements.
                3. Data, methods and reasoning tested and issues ranked by effect on value.
                4. A review report issued stating whether the conclusion is supported.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A review report issued within the agreed scope ranks each issue by its effect on value and states whether the conclusion is supported."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Agree in the letter whether the review may include your own opinion of value"
                - "Check the report against the governing standard's required contents"
                - "Rank each issue found by its likely effect on value"
                - "Draft the review conclusion on whether the value is supported"
            - name: Practice quality inspection readiness
              description: |-
                ## Purpose
                Professional bodies and some regulators inspect valuation practices, selecting files and checking them against standards and the practice's own policies. Running an internal mock inspection on a sample of files each year shows what an inspector would find and fixes it first.

                ## Milestones
                1. A sample of issued files chosen across engagement types.
                2. Each file checked against standards, the quality policy and the closing checklist.
                3. Findings ranked and owners assigned.
                4. Policy and template changes made and recorded.

                ## Notes
                Ask the agent to compile the findings into a ranked list once each file has been checked.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly mock inspection of at least five files produces a ranked findings list with owners and recorded changes."
                cadence: cyclic
                effort_hours_estimate: "15"
              tasks:
                - "Pick five issued files across different engagement types"
                - "Check each against standards, policy and the closing checklist"
                - "Run the mock inspection on a fresh sample @recurring(yearly)"
                - "Assign an owner and date to each finding"
---

# Independent Valuation Engagements

This area is for bankers, valuation advisers and corporate finance staff who sign or prepare independent valuation reports for transactions, disputes and financial reporting, where a reader such as an auditor, a court or a tax authority will test every step. It starts with the foundations (accepting the engagement, the letter, the standard and premise of value, the valuation date, the information request and the standards that govern the work), then the operating routines that keep a practice consistent, the technical skills behind defensible conclusions, decisions about templates, pricing and data, dated deliveries such as a purchase price allocation or an expert report, variants for people arriving from banking, audit or a first analyst role, and finally specialist work on share-based payments, earn-outs, solvency, damages and thin markets.

What repeats is a weekly pipeline review and open-items call, a monthly refresh of market data, a monthly check of the second-review and file-closing logs, a quarterly fair value cycle and standards watch, and the yearly impairment season and insurance renewal. The Risk register, Operational checklist, Development plan, Onboarding 30/60/90, Reading queue and Metrics log templates pair with the projects that name them. Client and deal data stay on the firm's systems; none of this is legal, tax or accounting advice, so agree the conclusions those need with the right professional. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
