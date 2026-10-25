---
id: family-office.adviser-and-manager-oversight
name: Adviser and Manager Oversight
description: "A family's system for watching the people who manage its money: a register of advisers and mandates, clear reporting standards, fee checks, a fair selection process and a calm way to replace a manager."
category: personal
version: 1.0.0
tags: [family-office, adviser-and-manager-oversight, parent, retiree, investment-managers, adviser-selection, manager-due-diligence, fee-review]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - vendor
    - onboarding-plan
    - remediation-plan
  pillars:
    - name: Family Office & Private Wealth
      emoji: "🏰"
      description: "Running the affairs of a wealthy family, not picking investments: family governance and a constitution, trusts and foundations across jurisdictions, setting up a single-family office, a family investment policy and reporting, educating the next generation, philanthropy vehicles, household staff and concierge, and the security and privacy wealth brings."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Adviser and Manager Oversight
          description: "Overseeing outside investment advisers and managers as a family: the selection process, mandates, reporting standards, fee reviews and replacing an adviser."
          projects:
            - name: Register of every outside adviser and manager
              description: |-
                ## Purpose
                Most wealthy families have accumulated managers the way a house accumulates keys: a private bank discretionary account from the 1990s, two fund managers a cousin introduced, a wealth adviser for the trust and a property fund nobody quite remembers signing. One register, listing each adviser, what they manage, how much, since when and who the family's contact is, is the starting point for every other project in this area.

                ## Milestones
                1. Every adviser, discretionary manager and fund manager the family uses listed by name.
                2. Assets under each relationship recorded with the date and source of the figure.
                3. The family member or office staffer who owns each relationship named in the register.
                4. Relationships with no current paperwork flagged for follow-up.

                ## Notes
                Include managers held inside trusts, companies and pension wrappers, not only the accounts in personal names. Those are usually the ones nobody watches.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single register lists every outside adviser and manager with assets managed, start date and a named family owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every adviser and manager you can name from recent statements"
                - "Ask the custodians for a list of every manager with authority over family accounts"
                - "Record assets, start date and family contact for each relationship"
                - "Confirm the adviser register against year-end statements @recurring(yearly)"
            - name: Who in the family oversees which manager
              description: |-
                ## Purpose
                Oversight fails quietly when everyone assumes someone else is reading the reports. Writing down who in the family or office reviews each manager, who may sign instructions, who can hire or fire, and what needs the investment committee or the whole family, removes the gap and protects the person doing the work from later blame.

                ## Milestones
                1. A named reviewer for each manager relationship agreed by the family.
                2. Signing authority for instructions and contract changes written down for each account.
                3. Decisions reserved for the investment committee or the family listed separately.
                4. The delegation note shared with every manager so they know whom to call.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page delegation note names the reviewer, signatories and reserved decisions for every manager and has been sent to each of them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft a list of who currently talks to each manager"
                - "Agree with the family who reviews, who signs and who can terminate"
                - "Send each manager the names of the people authorised to instruct them"
                - "Review the delegation note when roles change or each year @recurring(yearly)"
            - name: Reading each investment management agreement
              description: |-
                ## Purpose
                The agreement, not the pitch book, decides what a manager may do with family money, what they charge, how much notice ends the relationship and who carries the loss if something goes wrong. Reading every current agreement once, with a short summary of the terms that matter, often turns up auto-renewals, long notice periods or fee terms nobody agreed to knowingly.

                ## Milestones
                1. A signed copy of every current agreement, side letter and fee schedule on file.
                2. A one-page summary per agreement covering scope, discretion, fees, notice and liability.
                3. Unusual terms, such as long notice periods or broad indemnities, flagged.
                4. Questions on flagged terms put to the family's lawyer and the answers recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every current manager agreement is on file with a one-page term summary and any flagged clauses reviewed by the family's lawyer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request a signed copy of every agreement and fee schedule from each manager"
                - "Summarise scope, discretion, fees, notice period and liability for each"
                - "Mark any clause you do not understand or would not sign today"
                - "Send the flagged clauses to the family's lawyer with a short question list"
            - name: Mandate sheet for each manager
              description: |-
                ## Purpose
                A mandate sheet is a single page that says what each manager is hired to do: the asset class, the benchmark, permitted instruments, limits on concentration and currency, the liquidity the family needs and the role the money plays in the whole portfolio. Without it, a manager can drift into something different and still claim to be doing their job.

                ## Milestones
                1. A mandate sheet drafted for every discretionary manager and advised account.
                2. Benchmark, permitted instruments and key limits written on each sheet.
                3. Each manager has confirmed in writing that the sheet matches their understanding.
                4. Any mismatch between sheet and agreement resolved by amending one or the other.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every manager has a one-page mandate sheet that they have confirmed in writing matches their agreement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a draft mandate sheet for the largest manager first"
                - "Copy benchmark and limits from the agreement into each sheet"
                - "Ask each manager to confirm or correct their sheet in writing"
                - "Refresh each mandate sheet after any agreement change @recurring(yearly)"
            - name: Baseline of all-in fees paid to managers
              description: |-
                ## Purpose
                Few families can say what they paid last year in total to the people who manage their money, because fees arrive as management charges, performance fees, fund expenses, custody, trading costs and adviser retainers, often deducted rather than invoiced. A baseline in money and as a percentage of assets is the number every later fee review and selection decision is measured against.

                ## Milestones
                1. Every fee type identified for each manager, including fees inside pooled funds.
                2. Last full year's fees totalled in money for each relationship.
                3. Each total expressed as a percentage of average assets managed.
                4. A family-wide all-in figure agreed and recorded as the baseline.

                ## Notes
                Ask managers for a costs and charges statement where one exists. Deducted fees are easy to miss when you only read invoices.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A fee baseline shows last year's total cost in money and percentage terms for every manager and for the family as a whole."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each manager for a full costs and charges statement for last year"
                - "Add fund-level expenses for any pooled funds held in the portfolio"
                - "Total fees per manager and divide by average assets managed"
                - "Record the family-wide all-in fee figure as the baseline"
            - name: Regulatory status check on current advisers
              description: |-
                ## Purpose
                Checking that every adviser and manager is authorised by the right financial regulator for the work they actually do takes an afternoon and is the most basic piece of due diligence. Public registers also show disciplinary history, permissions and the legal entity the family is contracting with, which is not always the brand on the letterhead.

                ## Milestones
                1. The regulator and registration number for each adviser found on a public register.
                2. Permissions on the register compared with the services each adviser provides.
                3. Any disciplinary records or restrictions noted and discussed with the adviser.
                4. The contracting legal entity for each relationship recorded in the register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every adviser has a recorded registration number, permitted activities and disciplinary history check dated within the last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search the relevant regulator's public register for each adviser firm"
                - "Compare registered permissions with the services each one provides"
                - "Note the exact legal entity named on each agreement"
                - "Repeat the regulatory register check for every adviser @recurring(yearly)"
            - name: Reporting standard the family expects from every manager
              description: |-
                ## Purpose
                Every manager reports in their own format, at their own frequency, with their own definition of return, which makes comparison close to impossible. Writing one reporting standard (net and gross returns, the agreed benchmark, holdings, fees in money, cash flows and a short commentary, delivered within a set number of days of quarter end) and sending it to every manager turns a pile of glossy packs into something the family can read.

                ## Milestones
                1. A written reporting standard covering content, return method, format and deadline.
                2. The standard sent to every manager with a request to confirm they can meet it.
                3. Gaps each manager cannot fill recorded with their reason.
                4. The first quarter of reports received against the new standard.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written reporting standard has been accepted by every manager and the next quarter's reports arrive in that form."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect last quarter's report from every manager side by side"
                - "Write the list of items every quarterly report must contain"
                - "Set a delivery deadline after quarter end that every manager can meet"
                - "Send the standard to each manager and record their reply"
            - name: Linking each mandate to the investment policy
              description: |-
                ## Purpose
                Mandates are only meaningful as pieces of the family's overall policy: one manager provides liquidity, another long-term growth, a third income for a retired parent. Mapping each mandate to the role the investment policy statement gives it shows where two managers are doing the same job and where a role in the policy has no manager at all.

                ## Milestones
                1. Each manager mapped to a role or allocation in the family's investment policy.
                2. Overlaps, where two managers fill the same role, listed.
                3. Gaps, where a policy role has no manager, listed.
                4. The map reviewed with the investment committee or family decision makers.

                ## Notes
                This project uses the investment policy statement; it does not write it. If there is no policy yet, that comes first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map shows every mandate against its role in the investment policy, with overlaps and gaps reviewed by the decision makers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull the current investment policy statement and list its allocation roles"
                - "Place each manager against the role it fills"
                - "Mark overlaps and unfilled roles on the map"
                - "Put the map on the next investment committee agenda"
            - name: First-year oversight calendar
              description: |-
                ## Purpose
                Without a calendar, manager oversight happens only when a number looks bad, which is the worst time to start asking questions. A single year's calendar of report deadlines, reconciliation dates, review meetings, fee checks and disclosure requests turns the work into a steady, light routine instead of an annual scramble.

                ## Milestones
                1. Report delivery dates for every manager on one calendar.
                2. Quarterly review, fee check and reconciliation dates set.
                3. An annual review meeting slot booked or proposed for each manager.
                4. The calendar shared with everyone named in the delegation note.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A twelve-month oversight calendar with every report, review, fee and meeting date is shared with all named reviewers."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put each manager's report deadline into a shared calendar"
                - "Spread annual review meetings across the year rather than one month"
                - "Add the quarterly fee check and monthly reconciliation dates"
                - "Share the calendar with every named reviewer"
            - name: Quarterly manager report review
              description: |-
                ## Purpose
                Quarterly is often enough to notice a problem early and rarely enough that the family is not reacting to noise. Reading each manager's report against its mandate sheet, noting net return against benchmark, changes in risk, fees and anything the commentary avoids, keeps a written trail the annual review and any replacement decision can rely on.

                ## Milestones
                1. Every manager's report read within three weeks of receipt.
                2. Net return, benchmark, fees and notable changes logged for each manager.
                3. Follow-up questions sent to any manager whose report raised one.
                4. A short quarterly summary shared with the family decision makers.

                ## Notes
                Start from the **Metrics log** template. Judge managers over a full market cycle, not one quarter; the log exists to show patterns.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, a logged line per manager with net return, benchmark, fees and questions exists within three weeks of report delivery."
                cadence: rolling
              tasks:
                - "Set up a log with one row per manager per quarter"
                - "Read every manager report against its mandate sheet @recurring(quarterly)"
                - "Send written follow-up questions where a report raises one"
                - "Ask the agent to draft a one-page quarterly summary from the log for the family"
            - name: Monthly reconciliation against custodian statements
              description: |-
                ## Purpose
                Manager reports should match what the independent custodian says the family owns, and occasionally they do not. A monthly check of holdings and cash between the two catches pricing errors, missing trades and, in the rare worst case, assets that are not where the report says they are.

                ## Milestones
                1. Custodian statements available directly to the family, not only via the manager.
                2. Month-end values from each manager compared with the custodian's figures.
                3. Differences above an agreed threshold explained in writing.
                4. A reconciliation record kept for every month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month, each manager's reported holdings are reconciled to custodian statements and any difference above the threshold is explained in writing."
                cadence: rolling
              tasks:
                - "Arrange direct statement access from each custodian"
                - "Agree a difference threshold that triggers a written explanation"
                - "Compare manager and custodian month-end figures @recurring(monthly:12)"
                - "File each month's reconciliation with any explanations received"
            - name: Investment guideline breach log
              description: |-
                ## Purpose
                Guidelines on concentration, credit quality, currency or leveraged instruments only protect the family if someone checks them and records exceptions. A simple breach log, with what happened, how the manager reported it, how fast it was corrected and whether the family was made whole, becomes strong evidence at review time.

                ## Milestones
                1. Each manager asked to report any guideline breach within an agreed number of days.
                2. A breach log set up with date, rule, size, cause and correction.
                3. Every breach followed to a written closing note from the manager.
                4. Repeat breaches by one manager raised at their annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every reported or discovered guideline breach has a log entry with cause, correction date and the manager's closing note."
                cadence: rolling
              tasks:
                - "Ask each manager to confirm how and when they report guideline breaches"
                - "Create the breach log with the agreed columns"
                - "Check holdings against the key limits on each mandate sheet @recurring(monthly:20)"
                - "Chase a written closing note for each open breach"
            - name: Annual review meeting with each manager
              description: |-
                ## Purpose
                Once a year each manager should sit down with the family reviewers, explain results against the mandate, discuss changes in their team and business and hear the family's changing needs. Preparing the questions in advance and writing up the answers turns a polite lunch into a genuine review.

                ## Milestones
                1. A written agenda and question list sent to the manager two weeks ahead.
                2. The meeting held with the named family reviewers present.
                3. Notes written up within a week, including any commitments the manager made.
                4. Commitments followed up at the next quarterly review.

                ## Notes
                Start from the **Meeting notes** template. Meet at the manager's office every few years: it tells you more than another presentation in yours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each manager has a dated annual review with a pre-sent agenda and written notes listing their commitments."
                cadence: cyclic
              tasks:
                - "Draft a standard annual review question list for all managers"
                - "Book each manager's annual review meeting @recurring(yearly)"
                - "Write up notes and commitments within a week of each meeting"
                - "Check commitments from last year's meeting before the next one @recurring(yearly)"
            - name: Quarterly fee invoice check
              description: |-
                ## Purpose
                Invoices and deducted fees are calculated by the manager, and mistakes in asset values, breakpoints, performance fee crystallisation or billing periods are more common than most families expect. A quarterly check against the agreed schedule takes an hour and occasionally pays for the whole year's oversight.

                ## Milestones
                1. Each fee schedule turned into a simple calculation the family can repeat.
                2. Every quarter's fees recalculated and compared with what was charged.
                3. Differences raised with the manager in writing and resolved.
                4. Refunds or credits received and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter, every manager's fees are recalculated against the schedule and any difference has a written resolution."
                cadence: rolling
              tasks:
                - "Build a fee calculation for each schedule, including breakpoints"
                - "Recalculate every manager's charged fees for the quarter @recurring(quarterly)"
                - "Write to the manager about any difference above a small threshold"
                - "Record refunds and credits against the right quarter"
            - name: Watch list for managers under review
              description: |-
                ## Purpose
                When a manager underperforms for several quarters, loses a key person or breaches guidelines, the choice is not simply keep or fire. A formal watch list, with the reason, what the family expects to see and by when, gives the manager a fair chance and gives the family a clear trigger for replacement instead of a vague unease.

                ## Milestones
                1. Written criteria for putting a manager on the watch list.
                2. Each watched manager told in writing why and what would remove them.
                3. A review date set for every watch list entry.
                4. Each entry closed with a recorded decision: removed from the list or replaced.

                ## Notes
                Start from the **Remediation plan** template. Decide the exit criteria when you add a manager, not when the review date arrives.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Every watched manager has written reasons, exit criteria and a review date, and each closed entry ends in a recorded decision."
                cadence: rolling
              tasks:
                - "Write the criteria that put a manager on the watch list"
                - "Tell each watched manager the reason and what would resolve it"
                - "Review every watch list entry against its criteria @recurring(quarterly)"
                - "Record the final decision when a watch list entry closes"
            - name: Tracking changes at each manager's firm
              description: |-
                ## Purpose
                Changes at a manager's firm, such as a portfolio manager leaving, a sale of the business, a new owner or a regulator's action, often matter more than one quarter's numbers. Asking every manager to notify the family of material changes, and checking the news yourself, means the family hears first rather than reading it in the press.

                ## Milestones
                1. Each manager asked to give written notice of material organisational changes.
                2. A list of the key people at each manager whose departure would trigger a review.
                3. A light news and regulatory scan routine in place.
                4. Every material change logged with the family's response.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A key people list exists for every manager and each material change at a firm is logged with a dated family response."
                cadence: rolling
              tasks:
                - "Ask each manager to commit to notifying you of material firm changes"
                - "List the named people at each manager whose departure triggers a review"
                - "Scan news and regulator notices for each manager firm @recurring(monthly:5)"
                - "Log each material change and the response the family agreed"
            - name: Annual conflict of interest disclosure from advisers
              description: |-
                ## Purpose
                Advisers are paid in ways the family does not always see: retrocessions from fund houses, in-house products, referral fees, soft commissions or a bonus tied to selling a bank's lending. An annual written disclosure of every conflict and every payment received in connection with the family's money makes those incentives visible and discussable.

                ## Milestones
                1. A standard disclosure questionnaire written for all advisers and managers.
                2. Completed, signed disclosures received from every relationship.
                3. Any in-house product or third-party payment discussed with the adviser.
                4. Disclosures filed and compared with the previous year's answers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every adviser and manager has returned a signed annual conflict disclosure, filed alongside the prior year's."
                cadence: cyclic
              tasks:
                - "Write a disclosure questionnaire covering payments, products and referrals"
                - "Send the conflict questionnaire to every adviser @recurring(yearly)"
                - "Discuss any in-house products or third-party payments with the adviser"
                - "File each disclosure beside last year's and note what changed"
            - name: Benchmark agreement for every mandate
              description: |-
                ## Purpose
                Benchmarks chosen by managers tend to flatter them, and a benchmark that does not match the mandate makes every performance conversation meaningless. Agreeing a written benchmark for each mandate with the investment adviser or consultant, and revisiting it once a year, keeps judgement of results honest.

                ## Milestones
                1. The current benchmark for each mandate recorded, with who chose it.
                2. Benchmarks that do not match the mandate's instruments or risk identified.
                3. Replacement benchmarks agreed in writing with the manager and the family's adviser.
                4. The agreed benchmark written onto every mandate sheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every mandate has a written, agreed benchmark recorded on its mandate sheet and reviewed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List each mandate's current benchmark and who chose it"
                - "Ask an independent adviser which benchmarks look mismatched"
                - "Agree any replacement benchmark with the manager in writing"
                - "Revisit every benchmark with the investment adviser @recurring(yearly)"
            - name: Reading a manager factsheet and report
              description: |-
                ## Purpose
                Factsheets and quarterly packs are written to reassure, and the useful numbers are usually small print: net or gross, since inception or since the family invested, which share class, which benchmark. An hour learning where to look means every later report takes ten minutes instead of an afternoon of uncertainty.

                ## Milestones
                1. One real report annotated with what each figure means.
                2. Net and gross return, period and share class identified in every report you receive.
                3. A short glossary of terms that keep appearing kept with the oversight files.
                4. Three questions you would now ask that you could not have framed before.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One manager report has been fully annotated and a glossary of recurring terms is filed with the oversight records."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print the latest report from your largest manager"
                - "Mark every figure you cannot explain with a question mark"
                - "Ask the manager or an independent adviser to walk through the marks"
                - "Write a one-page glossary of the terms you looked up"
            - name: Time-weighted and money-weighted returns
              description: |-
                ## Purpose
                Two return figures for the same account can both be correct and still differ by several points a year, because one measures the manager's decisions and the other measures the family's experience including the timing of additions and withdrawals. Understanding which is which stops a manager being blamed for the family's own cash flows, or praised for luck.

                ## Milestones
                1. The difference between time-weighted and money-weighted return explained in your own words.
                2. Each manager asked which method their reports use.
                3. One account's return calculated both ways with help from the adviser.
                4. The family's reporting standard updated to name the method required.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each manager's return method is recorded and the reporting standard names which method the family requires for each type of mandate."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain guide to time-weighted and money-weighted returns"
                - "Ask each manager which return method their reports use"
                - "Work through one account both ways with your adviser"
                - "Add the required return method to the reporting standard"
            - name: How performance fees and hurdles work
              description: |-
                ## Purpose
                Performance fees, hurdles, high-water marks, catch-ups and crystallisation periods decide how much of a good year goes to the manager, and small drafting differences change the bill substantially. Learning the mechanics before the next negotiation or fund subscription lets the family ask precise questions rather than accept the standard terms.

                ## Milestones
                1. Hurdle, high-water mark, catch-up and crystallisation explained in your own notes.
                2. Every performance fee in the current line-up summarised in the same format.
                3. One worked example showing what each fee would cost in a strong year.
                4. Questions on unusual terms listed for the next review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every current performance fee is summarised in a standard format with a worked strong-year example."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a plain-language explainer on performance fee mechanics"
                - "Summarise each current performance fee in the same five headings"
                - "Work out what each would cost in a strong year"
                - "List the terms you would ask to change at the next review"
            - name: Advisory, discretionary and fee-only models
              description: |-
                ## Purpose
                How an adviser is permitted to act and how they are paid shape their advice. Learning the difference between advisory and discretionary mandates, fee-only and commission-based advice, and the duties different firms owe in different countries, lets the family see which relationship it actually has with each adviser.

                ## Milestones
                1. Notes on advisory, discretionary and execution-only relationships.
                2. Notes on fee-only, commission and mixed payment models.
                3. Each current adviser classified by relationship type and payment model.
                4. Any adviser whose model surprised the family flagged for discussion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adviser in the register is classified by relationship type and payment model, with surprises noted for review."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the regulator's consumer guide to adviser relationship types"
                - "Classify each adviser in the register by type and payment model"
                - "Ask any adviser whose model is unclear to confirm it in writing"
                - "Note which relationships the family would choose differently today"
            - name: Risk measures in manager reports
              description: |-
                ## Purpose
                Volatility, drawdown, tracking error, Sharpe ratio and duration appear in most reports and rarely get explained. Knowing what each measures, and which matter for each mandate, lets the family ask whether a manager took more risk than the mandate allows to produce a good return.

                ## Milestones
                1. Notes on volatility, maximum drawdown, tracking error and duration.
                2. The two or three most relevant risk measures chosen for each mandate type.
                3. Those measures added to the reporting standard.
                4. One manager's risk figures read and discussed with the adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The reporting standard lists the risk measures required for each mandate type and the family has discussed one manager's figures with an adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-line definition of each risk measure in your reports"
                - "Choose the measures that matter for each mandate type"
                - "Add the chosen risk measures to the reporting standard"
                - "Discuss one manager's risk figures with the adviser"
            - name: Operational due diligence basics
              description: |-
                ## Purpose
                Many manager failures come from operations, not investment skill: weak valuation of illiquid assets, one person controlling cash movements, no independent administrator or auditor. Learning the core operational questions means the family can spot the warning signs before committing money, or ask a specialist to check them.

                ## Milestones
                1. A list of core operational questions covering custody, valuation, cash controls and audit.
                2. Each current manager's administrator, auditor and custodian recorded.
                3. Managers without independent service providers identified.
                4. A decision recorded on which managers need a deeper operational review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The administrator, auditor and custodian are recorded for every manager and gaps have a written decision on further review."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a short list of operational due diligence questions"
                - "Record each manager's administrator, auditor and custodian"
                - "Highlight any manager without independent service providers"
                - "Decide which managers need a specialist operational review"
            - name: Spotting style drift in a mandate
              description: |-
                ## Purpose
                Style drift is when a manager hired for one approach quietly changes it, buying growth stocks in a value mandate or lower-quality bonds to lift yield. It can look like good performance until conditions change, so learning to spot it in holdings and attribution is one of the more useful oversight skills.

                ## Milestones
                1. Notes on the common signs of drift in holdings, sectors and credit quality.
                2. A short drift check written for each mandate type.
                3. The check run on every current mandate once.
                4. Any suspected drift raised with the manager and their answer recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A drift check exists for each mandate type and has been run on every mandate with suspected drift raised in writing."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read how style drift shows up in holdings and sector weights"
                - "Write a drift check for each type of mandate"
                - "Run the drift check on each mandate's latest holdings @recurring(quarterly)"
                - "Raise any suspected drift with the manager in writing"
            - name: Questions to ask in a manager meeting
              description: |-
                ## Purpose
                An hour with a polished portfolio manager can pass without the family learning anything new. A bank of good questions, covering what went wrong and what they learnt, how the team is paid, how capacity is managed and what would make them close the strategy, means every meeting gives the family real information.

                ## Milestones
                1. A question bank grouped by results, team, process, business and fees.
                2. Questions marked for new candidates versus existing managers.
                3. The bank tried in one real meeting and refined afterwards.
                4. The bank filed where every family reviewer can use it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A grouped question bank has been used in at least one manager meeting and is filed for every family reviewer."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write ten questions about mistakes, team pay and capacity"
                - "Group the questions by results, team, process, business and fees"
                - "Use the bank in your next manager meeting"
                - "Refine the questions that produced weak answers"
            - name: Selection process for a new adviser or manager
              description: |-
                ## Purpose
                Hiring a manager on a friend's recommendation or after one good lunch is how many families end up with the wrong one. A written process, with a defined need, a long list, a request for information, scoring against the same criteria, finalist meetings and a recorded decision, makes the choice defensible to the rest of the family for years.

                ## Milestones
                1. The need written down: mandate, size, role in the policy and timetable.
                2. A long list of eight to twelve candidates sent the same request for information.
                3. Responses scored against the same weighted criteria.
                4. Two or three finalists met by the same family reviewers.
                5. The decision and its reasons recorded and shared with the family.

                ## Notes
                Start from the **Vendor** template, one per finalist. Keep a note of who introduced each candidate and whether they receive any fee for it.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new manager is appointed through a documented process with scored responses from at least five candidates and a recorded decision."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write a one-page brief describing the mandate the family needs"
                - "Build a long list of candidates from independent sources"
                - "Send every candidate the same request for information"
                - "Score responses and invite two or three finalists to meet"
            - name: Weighted scoring framework for manager candidates
              description: |-
                ## Purpose
                Scoring candidates against criteria agreed before the responses arrive stops the most charming presenter winning by default. A framework weighting investment process, team stability, fit with the mandate, operations, fees and alignment of interest makes comparison fair and can be reused for every future search.

                ## Milestones
                1. Six to eight criteria agreed, each with a written definition.
                2. Weights agreed by the family reviewers before any response is read.
                3. A scoring sheet with space for evidence behind each score.
                4. The framework tested on one existing manager as a calibration.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weighted scoring sheet with defined criteria is agreed by the reviewers and calibrated on one existing manager."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the criteria the family cares about in a manager"
                - "Agree weights with the reviewers before seeing any candidates"
                - "Build a scoring sheet with a column for evidence"
                - "Score one existing manager as a calibration test"
            - name: Reference calls on a shortlisted adviser
              description: |-
                ## Purpose
                References chosen by the manager will be positive, so the value is in the specific questions asked and in finding references the manager did not offer. A short script and calls to three clients, including one who left, tell the family far more about service, honesty in bad years and how problems were handled.

                ## Milestones
                1. A reference call script with the same eight questions for every call.
                2. Calls held with at least two references the adviser provided.
                3. At least one former client or independent contact found and spoken to.
                4. A written summary of all calls filed with the selection record.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three reference calls, including one not supplied by the adviser, are summarised in the selection file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write eight reference questions covering service, bad years and problems"
                - "Ask the shortlisted adviser for three client references"
                - "Find one former client or independent contact to call"
                - "Summarise all reference calls in the selection file"
            - name: Operational review visit to a finalist manager
              description: |-
                ## Purpose
                Visiting a finalist's office, seeing who actually runs trading and operations and how cash moves, reveals things no pitch book does. For larger or illiquid mandates, a specialist operational due diligence firm can do this for a fee, which is usually small beside the amount at stake.

                ## Milestones
                1. A visit agenda covering trading, valuation, cash controls, compliance and systems.
                2. The visit held, meeting operations and compliance staff as well as investment staff.
                3. Independent confirmation from the administrator or auditor obtained where possible.
                4. A written operational assessment filed before any money is committed.

                ## Notes
                Ask for the latest audited accounts and the auditor's name, then confirm with the auditor directly that they act for the firm.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written operational assessment, including independent confirmation from a service provider, is filed before funding the finalist."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft the visit agenda with the operational questions list"
                - "Ask to meet the head of operations and compliance during the visit"
                - "Confirm the auditor and administrator directly by phone or email"
                - "Write up the operational assessment before signing anything"
            - name: Fee renegotiation with an existing manager
              description: |-
                ## Purpose
                Fees agreed when the family had less money, or when the mandate was smaller, are often never revisited. Using the fee baseline, current market rates and the size of the relationship, a polite renegotiation of breakpoints or the performance fee is one of the few improvements available without changing a single investment.

                ## Milestones
                1. The manager's current fees compared with the baseline and two or three alternatives.
                2. A written request setting out the proposed new terms and the reasons.
                3. The manager's response recorded, including any counter-offer.
                4. Agreed changes confirmed in an amended fee schedule.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The manager has responded in writing to a fee proposal and any agreed change is in a signed, amended fee schedule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Compare this manager's fees with the baseline and two alternatives"
                - "Write a short, courteous request with the terms you propose"
                - "Meet the manager to discuss the request"
                - "Get any agreed change into a signed fee schedule"
            - name: Advisory or discretionary mandate decision
              description: |-
                ## Purpose
                Discretionary mandates let the manager act without asking, while advisory ones need the family's approval for each trade. The right answer depends on how much time and expertise the family has, how quickly decisions are needed and who carries responsibility, and it can differ by account. Deciding it consciously, with the adviser, ends the confusion of half-discretionary relationships.

                ## Milestones
                1. Each account's current arrangement recorded as advisory or discretionary.
                2. Time, expertise and speed considerations written down for each account.
                3. A decision agreed for each account with the family's adviser.
                4. Agreements amended where the arrangement changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every account has a recorded advisory or discretionary decision with reasons, and agreements are amended to match."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record whether each account is advisory or discretionary today"
                - "Note how often the family has actually approved or blocked trades"
                - "Decide the arrangement for each account with the adviser"
                - "Ask managers to amend agreements where the arrangement changes"
            - name: Consolidating the number of managers
              description: |-
                ## Purpose
                Families often hold far more managers than they can oversee, each with its own report, fee and meeting, and several doing the same thing. Deciding the number the family can genuinely watch, and which relationships to merge, cuts cost and oversight time and often reduces hidden overlap in holdings.

                ## Milestones
                1. Overlapping mandates identified from the policy map and holdings.
                2. A target number of managers agreed by the family decision makers.
                3. A list of relationships to keep, merge or end, with reasons.
                4. A transition timetable agreed for each relationship being ended.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision lists which managers stay, merge or leave, with a target total and a transition timetable."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Mark overlapping mandates using the policy map and holdings"
                - "Agree how many managers the family can genuinely oversee"
                - "Write keep, merge or end against each relationship"
                - "Set a timetable for each relationship being ended"
            - name: Independent investment consultant decision
              description: |-
                ## Purpose
                An independent consultant or outsourced investment adviser can run manager searches, monitoring and reporting for the family, which helps when nobody in the family has the time or expertise. It also adds a fee and another relationship to oversee, so the decision deserves its own comparison rather than a default.

                ## Milestones
                1. The oversight tasks the family struggles to do itself listed.
                2. Two or three consultants compared on scope, independence and fees.
                3. Each consultant's own conflicts, such as manager payments, checked.
                4. A recorded decision to appoint one or keep oversight in house.

                ## Notes
                Check whether a consultant also sells funds or receives payments from managers it recommends; independence is the whole point.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on appointing an independent consultant, supported by a comparison of at least two candidates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the oversight tasks the family finds hardest to do itself"
                - "Request scope and fee proposals from two or three consultants"
                - "Ask each consultant how they are paid and by whom"
                - "Record the decision and the reasons behind it"
            - name: Negotiating terms for a new mandate
              description: |-
                ## Purpose
                Before money moves, the family has more influence over terms than it ever will again. Agreeing the mandate sheet, reporting standard, fee schedule, notice period, liability and guideline breach process in the agreement, with the family's lawyer reviewing it, avoids most of the problems older agreements in the register show.

                ## Milestones
                1. The mandate sheet and reporting standard attached to the draft agreement.
                2. Fee schedule, notice period and breach reporting terms negotiated.
                3. The draft reviewed by the family's lawyer and comments resolved.
                4. The signed agreement and schedules filed with the register.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed agreement for the new mandate includes the family's mandate sheet, reporting standard and negotiated fee and notice terms."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the manager for their standard agreement early in the process"
                - "Attach the mandate sheet and reporting standard as schedules"
                - "Send the draft to the family's lawyer for review"
                - "File the signed agreement and update the adviser register"
            - name: First ninety days with a new manager
              description: |-
                ## Purpose
                The first ninety days with a new manager set the tone for the whole relationship: how the money moves in, how quickly reports arrive, whether the first invoice matches the schedule. Running onboarding as a short plan with clear checks catches problems while they are still easy to fix.

                ## Milestones
                1. Accounts opened, custody confirmed and funding completed as planned.
                2. The new manager added to the oversight calendar, register and delegation note.
                3. The first report checked against the reporting standard.
                4. The first fee calculation checked against the schedule.
                5. A ninety-day review call held and notes filed.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within ninety days, funding, first report, first fee check and a review call with the new manager are complete and recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the funding plan and dates with the manager and custodian"
                - "Add the new manager to the register, calendar and delegation note"
                - "Check the first report and first fee against the agreement"
                - "Hold a ninety-day review call and file the notes"
            - name: Replacing an adviser or manager
              description: |-
                ## Purpose
                Ending a relationship goes badly when it is rushed, emotional or done without reading the notice terms. A planned replacement, with the decision recorded, the successor chosen through the selection process, notice given in line with the agreement and the transition agreed in writing, protects the family's money and its reputation with other firms.

                ## Milestones
                1. The reasons for replacement recorded with the supporting watch list evidence.
                2. The notice period and termination terms checked in the agreement.
                3. A successor chosen, or a holding arrangement agreed, before notice is given.
                4. Written notice given and acknowledged by the outgoing manager.
                5. All assets, records and final fee statements received.

                ## Notes
                Keep the conversation courteous and short. Managers talk to each other, and the family will want good service from the industry for decades.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The outgoing manager has acknowledged written notice, all assets and records have transferred and a final fee statement is filed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a short record of why the family is making the change"
                - "Check the notice period and termination clauses in the agreement"
                - "Have the successor or holding arrangement agreed before giving notice"
                - "Send written notice and confirm the transition timetable"
            - name: Moving assets between outgoing and incoming managers
              description: |-
                ## Purpose
                Moving a portfolio between managers can cost more than a year's fees if every position is sold and bought again, and can leave money out of the market for weeks. Planning the transition, deciding what moves in kind and what is sold, and agreeing who does what and when, keeps cost and risk visible.

                ## Milestones
                1. A list of holdings marked to move in kind or to be sold.
                2. Estimated transition costs and any tax effects reviewed with the tax adviser.
                3. A dated transfer plan agreed by both managers and the custodian.
                4. A post-transition check that every holding arrived and nothing was missed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All assets have moved under a dated transfer plan and a post-transition reconciliation shows nothing missing."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the incoming manager which holdings they can accept in kind"
                - "Review estimated transition costs and tax effects with the tax adviser"
                - "Agree a dated transfer plan with both managers and the custodian"
                - "Reconcile the incoming account against the outgoing holdings list"
            - name: Response plan when a key portfolio manager leaves
              description: |-
                ## Purpose
                If the named portfolio manager behind a mandate resigns or retires, the family is effectively holding a new, untested manager under the old name. A short response plan, agreed in calm times, says what information to request, how long to wait and who decides whether to stay.

                ## Milestones
                1. A written trigger list of people whose departure activates the plan.
                2. A standard information request for the manager when it happens.
                3. A default holding period and decision owner agreed.
                4. The plan filed beside each affected mandate sheet.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written key person response plan with triggers, information request and decision owner is filed with each affected mandate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the key people at each manager whose departure matters"
                - "Draft the information request you would send on day one"
                - "Agree a default wait period and who decides"
                - "File the plan beside each affected mandate sheet"
            - name: Three-year review of the whole manager line-up
              description: |-
                ## Purpose
                Every three years, step back from individual quarters and ask whether the family still needs each manager at all: are mandates still matched to the policy, have fees fallen elsewhere, would a simpler line-up do the same job. A dated review with a written outcome stops the line-up becoming fixed by habit.

                ## Milestones
                1. Three years of quarterly logs, breaches and fee checks gathered for every manager.
                2. Each manager rated keep, watch or replace with reasons.
                3. The line-up compared with the current investment policy.
                4. A written outcome presented to the family decision makers.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written three-year line-up review rating every manager keep, watch or replace is presented to the decision makers."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Pick a date for the line-up review and tell the decision makers"
                - "Gather three years of logs, breach records and fee checks"
                - "Rate each manager keep, watch or replace with reasons"
                - "Present the written outcome to the family decision makers"
            - name: Simplifying adviser relationships in retirement
              description: |-
                ## Purpose
                Retirement is a sensible time to reduce the number of advisers a parent has to deal with, before age or illness makes it harder. Fewer, better documented relationships, with the income mandate clear and a family member introduced to each adviser, make life easier now and protect the parent later.

                ## Milestones
                1. The retiree's current advisers listed with what each provides.
                2. Relationships to keep, merge or end agreed with the retiree.
                3. A trusted family member introduced to every remaining adviser.
                4. Income needs written into the relevant mandate sheets.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The retiree has a reduced, agreed list of advisers, each of whom has met a trusted family member and has written income instructions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sit with the retiree and list every adviser they deal with"
                - "Agree which relationships to keep, merge or end"
                - "Arrange a meeting introducing a trusted family member to each adviser"
                - "Write the retiree's income needs into the relevant mandate sheets"
            - name: Introducing adult children to the family's managers
              description: |-
                ## Purpose
                Adult children who will one day oversee the family's managers usually meet them for the first time at a funeral or a crisis. Inviting them to one annual review a year, with a short briefing before and a debrief after, builds familiarity, judgement and relationships long before responsibility arrives.

                ## Milestones
                1. Each adult child briefed on the register, mandate sheets and reporting standard.
                2. Each attends at least one annual review meeting as an observer.
                3. A debrief held after each meeting about what they noticed.
                4. Managers told who the next generation contacts are.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each adult child has observed at least one manager annual review in the year and had a recorded debrief."
                cadence: cyclic
              tasks:
                - "Brief each adult child on how the family oversees its managers"
                - "Choose one manager review for each child to observe @recurring(yearly)"
                - "Hold a short debrief after the meeting"
                - "Tell managers which family members are the next-generation contacts"
            - name: Cover if the overseeing family member is incapacitated
              description: |-
                ## Purpose
                If the one family member who oversees the managers falls ill or dies, managers may find themselves without anyone to take instructions from, and accounts can drift for months. A short continuity plan, with a named deputy, signing authorities and the oversight files accessible, keeps the work going.

                ## Milestones
                1. A named deputy for each manager relationship agreed.
                2. Powers of attorney and signing authorities checked with the family's lawyer.
                3. The register, agreements and logs stored where the deputy can reach them.
                4. Each manager told who the deputy is and when they may act.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A continuity note names a deputy, confirms signing authorities with the lawyer and has been shared with every manager."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree a deputy for each manager relationship"
                - "Ask the family's lawyer to check powers of attorney and signatories"
                - "Store the oversight files where the deputy can reach them"
                - "Re-test the continuity plan with the deputy @recurring(yearly)"
            - name: Surviving spouse taking over adviser relationships
              description: |-
                ## Purpose
                After a death, the surviving spouse often inherits a set of advisers they never chose and may never have met, at the hardest possible time. A gentle, paced handover, with the register explained, no decisions forced in the first months and a trusted helper present, prevents rushed changes and opportunistic selling.

                ## Milestones
                1. The surviving spouse given a plain summary of each adviser relationship.
                2. A rule agreed that no major changes happen for an agreed number of months.
                3. Meetings with each adviser held with a trusted helper present.
                4. Any later changes made through the normal selection or replacement process.

                ## Notes
                Advisers may approach a recently widowed client with new products. A trusted helper at every meeting is the simplest protection.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The surviving spouse has met every adviser with a helper present, and no major change was made within the agreed pause."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Prepare a plain one-page summary of each adviser relationship"
                - "Agree a pause on major changes with the surviving spouse"
                - "Arrange each adviser meeting with a trusted helper present"
                - "Log any change requested by an adviser during the pause"
            - name: Manager oversight when wealth is split between branches
              description: |-
                ## Purpose
                When assets are divided between family branches, shared managers suddenly serve several households with different needs, and one branch may want to leave. Agreeing whether branches keep shared mandates, how reporting is split and who may change a shared manager avoids friction and lost fee breakpoints.

                ## Milestones
                1. Each manager's assets mapped to the branches they serve.
                2. A decision on shared versus separate mandates for each manager.
                3. Reporting arranged so each branch receives its own figures.
                4. A rule agreed on how a shared manager may be changed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each manager has a recorded shared or separate decision and every branch receives its own report."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Map each manager's assets to the branches they serve"
                - "Ask managers whether separate mandates keep the same fee breakpoints"
                - "Agree shared or separate arrangements with each branch"
                - "Confirm each branch is receiving its own manager reports @recurring(yearly)"
            - name: Family view of managers appointed by trustees
              description: |-
                ## Purpose
                Trustees often appoint investment managers for trust assets, and beneficiaries can feel shut out of how those managers are chosen and watched. Asking the trustees, politely and within the family's rights, for the manager's mandate, reporting and fee information keeps the family informed without taking over decisions that belong to the trustees.

                ## Milestones
                1. The managers appointed by each trustee listed.
                2. The information the family may reasonably request confirmed with the trust lawyer.
                3. A request sent to the trustees for mandate, reporting and fee summaries.
                4. The trustees' replies filed with the register.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The register lists every trustee-appointed manager with the mandate and fee summary the trustees provided."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List which managers each trustee has appointed"
                - "Ask the trust lawyer what information beneficiaries may request"
                - "Write to the trustees asking for mandate, reporting and fee summaries"
                - "File the replies with the adviser register"
            - name: Independent performance attribution review
              description: |-
                ## Purpose
                Independent attribution, by a performance measurement firm or consultant rather than the manager, shows whether returns came from the manager's skill, from the market, from currency or from taking risk outside the mandate. For the largest mandates it is worth commissioning once a year, so the family is not relying on the manager's own account of its results.

                ## Milestones
                1. The mandates large enough to justify independent attribution chosen.
                2. A provider appointed with access to custodian data rather than manager data.
                3. Attribution results reviewed with the provider and compared with the manager's report.
                4. Material differences discussed with the manager and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The largest mandates have an independent attribution report from custodian data, with differences from the manager's own report recorded."
                cadence: cyclic
              tasks:
                - "Choose which mandates are large enough for independent attribution"
                - "Request proposals from two performance measurement providers"
                - "Arrange custodian data feeds to the chosen provider"
                - "Review the independent attribution against the manager report @recurring(yearly)"
            - name: Separate account or pooled fund for a large mandate
              description: |-
                ## Purpose
                Holding a strategy through a separately managed account in the family name, rather than units in the manager pooled fund, can bring lower fees, full transparency of holdings and the ability to exclude certain investments, but it needs a larger minimum and more oversight work. For a family whose mandate with one manager has grown large, comparing the two structures with the adviser is a decision worth making on purpose.

                ## Milestones
                1. Mandates near or above each manager separate account minimum identified.
                2. Fees, transparency, custody and tax reporting compared for both structures.
                3. The family tax adviser consulted on any effect of switching structure.
                4. A recorded decision for each candidate mandate, with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each large mandate has a recorded decision between a separate account and a pooled fund, supported by a written comparison."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each large manager for their separate account minimum and fee scale"
                - "Compare fees, transparency and custody for both structures"
                - "Ask the tax adviser whether switching structure has any tax effect"
                - "Record the decision for each mandate with the reasons"
            - name: Side letters and most-favoured-nation terms
              description: |-
                ## Purpose
                Side letters with private fund managers can give a family fee discounts, reporting rights, co-investment access or the right to receive any better terms given to similar investors. Knowing which ones exist, what each promises and whether the manager honours them is specialist work that larger families do routinely and smaller ones forget.

                ## Milestones
                1. Every side letter collected and summarised in one schedule.
                2. Most-favoured-nation elections and deadlines recorded.
                3. Compliance with each side letter checked against reports and invoices.
                4. New fund subscriptions reviewed for side letter requests before signing.

                ## Notes
                Most-favoured-nation clauses usually require the investor to elect within a short window after notice. Ask the family's lawyer to watch for those notices.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A side letter schedule lists every promise and election deadline, with compliance checked for each fund."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect every side letter from the fund files and the lawyer"
                - "Summarise each promise and any election deadline in one schedule"
                - "Check reports and invoices for compliance with each side letter"
                - "Add side letter requests to the checklist for new fund subscriptions"
            - name: Escalating a dispute with an adviser
              description: |-
                ## Purpose
                Disputes with advisers, over a loss from a mandate breach, an unsuitable recommendation or wrong fees, are best handled in steps: a written complaint, the firm's own complaints process, then a regulator, ombudsman or legal route if needed. Knowing the steps and keeping clean records from the start makes a fair outcome more likely and protects the relationship where it can be saved.

                ## Milestones
                1. The complaint set out in writing with dates, documents and the remedy sought.
                2. The firm's formal complaints process followed and deadlines recorded.
                3. Advice taken from the family's lawyer on further routes and time limits.
                4. A final outcome recorded, with any lessons added to the selection framework.

                ## Notes
                Time limits for complaints to an ombudsman or court can be short. Ask the lawyer about them early.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written complaint has a recorded outcome from the firm or an external route, with lessons added to the selection framework."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather the documents and dates behind the complaint"
                - "Ask the agent to draft a factual written complaint for your review"
                - "Follow the firm's complaints process and note each deadline"
                - "Ask the family's lawyer about further routes and time limits"
---

# Adviser and Manager Oversight

This area is for the parent or retiree whose family money is run by several outside advisers and managers, and who wants them chosen carefully and watched properly rather than left alone for years. It starts with foundations (a register of every adviser, the agreements read, a mandate sheet for each manager, a fee baseline and the reporting standard you expect), then the operating routine of quarterly reviews, reconciliations, guideline checks and annual meetings, the knowledge needed to read a manager's numbers, decisions on selecting, paying and consolidating managers, the dated events of onboarding and replacing one, situations for retirement, adult children and a surviving spouse, and finally specialist work on attribution, side letters and disputes.

What repeats is a monthly reconciliation and guideline check, a quarterly read of every manager report and invoice, and a yearly cycle of review meetings, conflict disclosures, benchmark refreshes and regulatory re-checks. The Metrics log, Meeting notes, Vendor, Onboarding plan and Remediation plan templates pair with the quarterly scorecard, the annual review meeting, a selection process, a new manager's first ninety days and a watch list. Nothing here is investment, tax or legal advice: agree mandates, benchmarks and contract terms with the family's own independent professionals. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
