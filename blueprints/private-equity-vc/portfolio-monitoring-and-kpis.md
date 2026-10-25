---
id: private-equity-vc.portfolio-monitoring-and-kpis
name: Portfolio Monitoring and KPIs
description: "A standard monthly pack, a KPI dictionary and dashboard, covenant headroom checks, an early warning watchlist and quarterly valuation workpapers for tracking portfolio companies between board meetings."
category: business
version: 1.0.0
tags: [private-equity-vc, portfolio-monitoring-and-kpis, knowledge-worker, portfolio-monitoring, kpi-dashboards, covenants, valuation, early-warning]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - risk-register
    - meeting-notes
    - vendor
    - remediation-plan
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Portfolio Monitoring and KPIs
          description: "Tracking portfolio companies between board meetings: monthly reporting templates, KPI dashboards, covenant headroom, early warning signs and valuation updates."
          projects:
            - name: Portfolio company monitoring inventory
              description: |-
                ## Purpose
                Before any dashboard is worth building you need one record per portfolio company listing who owns the relationship, the closing date, the fund's ownership, the lenders and where the governing documents sit. Most teams find gaps here: a facilities agreement nobody saved, or a CFO who left and was never replaced in the contact list. Building the inventory first makes every later routine faster and catches missing documents while they are still easy to get.

                ## Milestones
                1. A one-page record for every portfolio company with deal lead, monitoring owner, ownership percentage and closing date.
                2. The finance contacts at each company named, with a backup contact.
                3. Links saved to the shareholders' agreement, facilities agreement, investment case model and latest budget.
                4. Missing documents listed with the person asked to supply each one.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every portfolio company has a record naming its monitoring owner, finance contacts and links to its four governing documents, with any gaps assigned."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every current portfolio company with its deal lead and closing date"
                - "Record the CFO and a backup finance contact for each company"
                - "Save links to the shareholders' agreement, facilities agreement and deal model"
                - "Ask the deal lead for any governing document that is missing"
            - name: Information rights and reporting obligations map
              description: |-
                ## Purpose
                Shareholders' agreements and facilities agreements both say what the company must send and by when, and the two rarely match: lenders may want monthly accounts within 30 days while the investor's rights say 20 working days. Mapping every obligation per company tells you what you can insist on, what the lenders will see before you do, and where the company is already late. Read the clauses yourself and ask fund counsel where the wording is unclear.

                ## Milestones
                1. A table per company listing each deliverable, its recipient, its deadline and the clause it comes from.
                2. Investor and lender deadlines shown side by side, with conflicts highlighted.
                3. Deliverables the company is not currently sending marked as gaps.
                4. Unclear clauses listed with fund counsel's answer beside each.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A reporting obligations table exists for every company, citing the source clause for each deliverable and flagging every current gap."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull the information rights clause from each shareholders' agreement"
                - "Extract the reporting deadlines from each facilities agreement"
                - "Tabulate deliverable, recipient, deadline and source clause per company"
                - "Flag every case where investor and lender deadlines differ"
            - name: Standard monthly management reporting pack
              description: |-
                ## Purpose
                Ten companies sending ten different packs means every review starts with hunting for the cash line. A standard pack agreed with each CFO fixes the core pages: P&L against budget and prior year, balance sheet, cash flow, net debt, a KPI page and a page of management commentary. Companies can add their own pages behind it, but the first six should always look the same.

                ## Milestones
                1. A pack template with six fixed pages and space for company-specific appendices.
                2. Each page's line items defined, including how net debt and adjusted EBITDA are shown.
                3. The template walked through with every portfolio CFO and their comments reflected.
                4. A submission deadline in working days agreed with each company and written on the template cover.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every portfolio company has agreed in writing to a six-page standard monthly pack with a submission deadline in working days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Collect the latest monthly pack from each portfolio company"
                - "Draft the six fixed pages using the best existing pack as a base"
                - "Walk each CFO through the template on a short call"
                - "Write the agreed submission deadline on the template cover"
                - "Review the pack template with CFOs after budgets are set @recurring(yearly)"
            - name: KPI definitions dictionary
              description: |-
                ## Purpose
                When one company counts churn on customer numbers and another on revenue, a portfolio-wide churn chart is fiction. A dictionary that gives every KPI its formula, data source, frequency and the person at the company who produces it stops definitions drifting and keeps trends comparable over years, even after a CFO leaves.

                ## Milestones
                1. Every KPI in use across the portfolio listed with a single written formula.
                2. The source system and the producing person at the company recorded for each KPI.
                3. Company-specific variants marked explicitly rather than silently merged.
                4. The dictionary confirmed by each CFO and saved beside the pack template.

                ## Notes
                Start from the **Metrics log** template. Date every definition change so a broken trend line can be explained later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A KPI dictionary covers every reported metric with one formula, a data source and a named producer, confirmed by each CFO."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every KPI currently reported by each portfolio company"
                - "Write one formula and one data source for each KPI"
                - "Mark company-specific variants with the reason they differ"
                - "Send the dictionary to each CFO for confirmation"
            - name: Choosing the KPIs that test each investment thesis
              description: |-
                ## Purpose
                Packs drown in metrics, yet the few numbers that would prove or disprove why the fund bought the company are often missing. For each company, pick five to eight KPIs that map directly to the thesis and its biggest risks, such as net revenue retention for a software business or billable utilisation for a services firm, and agree them with the deal lead.

                ## Milestones
                1. The two or three thesis points for each company written in a sentence each.
                2. Five to eight KPIs per company, each linked to a thesis point or a named risk.
                3. A base case value set beside each KPI from the deal model.
                4. The KPI set agreed with the deal lead and the company CFO.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each portfolio company has five to eight agreed KPIs, every one linked in writing to a thesis point or risk and carrying a base case value."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the thesis for each company in three sentences from the IC memo"
                - "Propose five to eight KPIs that would show the thesis working or failing"
                - "Take the base case value for each KPI from the deal model"
                - "Agree the final KPI set with the deal lead"
            - name: Budget and investment case baselines
              description: |-
                ## Purpose
                Variance against budget tells you whether management hit their own plan; variance against the investment case tells you whether the deal is on track. You need both loaded side by side, by month, before the first review, or every discussion turns into an argument about which number is the real target.

                ## Milestones
                1. The current year budget loaded by month for revenue, gross margin, EBITDA, capex and cash.
                2. The investment case base case loaded for the same lines, phased by month or quarter.
                3. Differences between budget and investment case summarised in a short note per company.
                4. Both baselines locked so later edits are versioned, not overwritten.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Budget and investment case figures are loaded by period for every company, with a dated locked version and a note on where they diverge."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the board-approved budget by month from each company"
                - "Phase the deal model base case into the same periods"
                - "Write a short note per company on where budget and case diverge"
                - "Lock both baselines and save a dated version"
            - name: Covenant headroom calculator
              description: |-
                ## Purpose
                Financial covenants are tested on the definitions in the facilities agreement, not on the EBITDA in the pack, and the difference is usually permitted add-backs, pro forma adjustments for acquisitions and the treatment of leases. A calculator built from the actual definitions shows headroom on each test, how far EBITDA could fall before a breach and how close the next test date is. Have the definitions confirmed by the company's finance director or counsel before relying on them.

                ## Milestones
                1. Each covenant, its test level and its test dates extracted from the facilities agreement for every company.
                2. Covenant EBITDA and net debt built from the agreement's definitions, each adjustment referenced to its clause.
                3. Headroom shown as a percentage and as the EBITDA fall that would cause a breach.
                4. The calculator reconciled to the last compliance certificate each company issued.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A headroom calculator for every company reconciles to its latest compliance certificate and shows the EBITDA cushion on each covenant."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Extract every financial covenant and test date from each facilities agreement"
                - "Build covenant EBITDA from the defined add-backs, citing each clause"
                - "Show headroom as both a percentage and an EBITDA cushion"
                - "Reconcile the calculator to the latest compliance certificate"
                - "Ask each company CFO to confirm the definitions you used"
            - name: Portfolio reporting calendar
              description: |-
                ## Purpose
                Monthly packs, quarterly compliance certificates, annual budgets, audits and valuation dates all land at different times across a portfolio, and a missed audit deadline usually surfaces only when the lender asks. One calendar for the whole portfolio, drawn from the obligations map, shows what is due each week and who should chase it.

                ## Milestones
                1. Every recurring deliverable for every company entered with its due date and owner.
                2. Lender deadlines visibly distinguished from investor deadlines.
                3. Fund valuation and investor reporting dates added so company inputs arrive in time.
                4. The calendar shared with the deal team and updated when terms change.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared portfolio calendar lists every recurring company deliverable with a due date and a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Turn the obligations map into dated calendar entries"
                - "Add fund valuation and investor reporting dates"
                - "Name an owner for every deliverable"
                - "Check the coming month's deliverables and owners @recurring(monthly:3)"
            - name: Portfolio data store and version control
              description: |-
                ## Purpose
                Packs arrive as email attachments, get edited for a board deck, and three months later nobody knows which version fed the valuation. A single store with one folder per company, a naming rule and a received date for every file means you can always rebuild any number you have reported.

                ## Milestones
                1. One folder per company with subfolders for packs, compliance certificates, budgets and valuations.
                2. A file naming rule with company, period and version, written in a short readme.
                3. The last twelve months of packs filed under the rule.
                4. Access limited to the people who need it under the fund's confidentiality rules.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twelve months of packs for every company are filed under a written naming rule, with access checked against the confidentiality policy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one folder per company with fixed subfolders"
                - "Write a naming rule with company, period and version"
                - "File the last twelve months of packs under the rule"
                - "Check folder access against the fund's confidentiality rules"
            - name: Monthly pack receipt and chase routine
              description: |-
                ## Purpose
                Late packs are an early warning sign in their own right, because a company that cannot close its books on time often has a finance problem or something it would rather not show. Logging the receipt date for every pack and chasing on a fixed day turns lateness into data rather than irritation.

                ## Milestones
                1. A receipt log showing each company's due date, received date and days late.
                2. A polite chase sent on the same working day each month for missing packs.
                3. Repeated lateness raised with the deal lead after the second late month.
                4. Twelve months of receipt history that can be shown at a board meeting.

                ## Notes
                Start from the **Operational checklist** template. Keep the chase short and factual; the log does the persuading.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The receipt log has a received date or a chase recorded for every company for each of the last six months."
                cadence: rolling
              tasks:
                - "Set up a receipt log with due date and received date per company"
                - "Log each pack's received date and chase any that are late @recurring(monthly:12)"
                - "Raise any company late two months running with its deal lead"
                - "Add a days-late column to the portfolio dashboard"
            - name: Monthly KPI and variance review
              description: |-
                ## Purpose
                Reading a pack is not the same as reviewing it. A fixed monthly review compares each company with budget, prior year and investment case, writes down the three things that moved most and why, and lists the questions for management, so problems are noticed in month two rather than at the quarterly board.

                ## Milestones
                1. Each pack reviewed within five working days of receipt.
                2. A short variance note per company naming the three largest movements and their drivers.
                3. Questions for management sent the same week and answers filed with the note.
                4. A one-page portfolio summary of the month for the partners.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every received pack has a variance note within five working days, and a monthly portfolio summary reaches the partners."
                cadence: rolling
              tasks:
                - "Write a one-page variance note template with three movement slots"
                - "Review each received pack against budget, prior year and case @recurring(monthly:15)"
                - "Send management questions in the same week as the review"
                - "Ask the agent to draft the portfolio summary from the variance notes"
            - name: Portfolio KPI dashboard
              description: |-
                ## Purpose
                Partners want to see the whole portfolio on one page: revenue and EBITDA against budget, cash, net debt to EBITDA, covenant headroom and a red, amber or green status per company. A dashboard refreshed on a set day each month replaces ten separate spreadsheets and makes trends visible across quarters.

                ## Milestones
                1. A dashboard with one row per company and columns for the agreed core metrics.
                2. Quarterly columns or small trend charts showing the last eight quarters.
                3. Status colours driven by written thresholds, not by judgement on the day.
                4. The refreshed dashboard circulated to partners on a fixed day each month.

                ## Notes
                Keep it to one page. If a metric is not discussed in three consecutive months, drop it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page dashboard with threshold-driven status colours has been circulated to the partners on the same day for three consecutive months."
                cadence: rolling
              tasks:
                - "Sketch the one-page layout with the partners before building it"
                - "Write the thresholds that set each status colour"
                - "Refresh the dashboard from the latest packs and circulate it @recurring(monthly:18)"
                - "Archive a dated copy of each month's dashboard"
            - name: Quarterly covenant compliance review
              description: |-
                ## Purpose
                Compliance certificates go to lenders signed by the company, but the fund carries the consequences of a breach. Checking each certificate against your own calculator as it is issued catches definition errors, flags shrinking headroom a quarter early and leaves time to talk to lenders before a test, not after.

                ## Milestones
                1. Each quarterly compliance certificate received and checked against the headroom calculator.
                2. Any difference between the company's figure and yours explained in writing.
                3. A headroom trend over the last four tests recorded for each covenant.
                4. Companies below an agreed headroom threshold, such as 20 percent, moved onto the watchlist.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every compliance certificate for the last quarter has been checked against the calculator, with a four-quarter headroom trend per covenant."
                cadence: cyclic
              tasks:
                - "Agree the headroom threshold that puts a company on the watchlist"
                - "Check each compliance certificate against the calculator @recurring(quarterly)"
                - "Record headroom for each covenant in a four-quarter trend table"
                - "Explain any gap between the company's figure and yours in writing"
            - name: Thirteen-week cash flow review for watchlist companies
              description: |-
                ## Purpose
                Monthly accounts tell you where cash was; a rolling thirteen-week cash forecast tells you where it is going and when the revolving facility runs out. For companies on the watchlist, a weekly look at the forecast, with last week's actuals against forecast, is the earliest reliable signal of a liquidity problem.

                ## Milestones
                1. Each watchlist company sending a thirteen-week cash flow every week.
                2. Actual against forecast variance tracked for receipts and payments.
                3. The minimum liquidity point and its week highlighted in each new forecast.
                4. A written rule for when a company returns to monthly reporting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every watchlist company has a weekly thirteen-week forecast on file with actual against forecast variance tracked."
                cadence: rolling
              tasks:
                - "Agree a thirteen-week cash flow format with each watchlist company"
                - "Compare last week's actual cash with forecast @recurring(weekly:mon)"
                - "Mark the lowest liquidity week in each new forecast"
                - "Write the rule for returning a company to monthly reporting"
            - name: Early warning watchlist
              description: |-
                ## Purpose
                Problems rarely announce themselves; they show up as a late pack, a thinning order book, a CFO resignation or stretched creditor days. A watchlist that scores every company each month against a fixed set of signals, with a red, amber or green rating and a named action for each amber, gives the partners a short list to worry about.

                ## Milestones
                1. Eight to twelve early warning signals defined, financial and non-financial.
                2. Each company scored monthly against the signals.
                3. Every amber or red company given an owner and a next action.
                4. The watchlist discussed at the partners' meeting each month.

                ## Notes
                Start from the **Risk register** template. Include soft signals such as key leavers, auditor changes and delayed payments to suppliers, not only numbers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every company has a monthly watchlist score for the last three months, and each amber or red rating has a named owner and next action."
                cadence: rolling
              tasks:
                - "Draft eight to twelve early warning signals with the deal leads"
                - "Score each company against the signals @recurring(monthly:20)"
                - "Name an owner and next action for every amber or red company"
                - "Bring the watchlist to the partners' meeting"
            - name: Monthly CFO check-in calls
              description: |-
                ## Purpose
                Half an hour with each portfolio CFO between board meetings catches what the pack leaves out: the customer that is wobbling, the audit issue, the hire that fell through. A fixed monthly call with a short standing agenda builds the relationship that makes bad news arrive early.

                ## Milestones
                1. A recurring call booked with every portfolio CFO.
                2. A standing agenda covering trading, cash, covenants, people and what is coming.
                3. Notes from every call filed in the company folder within a day.
                4. Actions from each call followed up before the next one.

                ## Notes
                Start from the **Meeting notes** template. Keep it a conversation, not a second board meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from a CFO call are on file for every company for each of the last three months."
                cadence: rolling
              tasks:
                - "Book a 30-minute monthly slot with each portfolio CFO"
                - "Send the standing agenda before the first call"
                - "Hold the CFO calls and file notes within a day @recurring(monthly:8)"
                - "Check last month's actions before each call"
            - name: Quarterly portfolio company valuation update
              description: |-
                ## Purpose
                Each quarter the fund needs a fair value for every holding, and the deal team usually supplies the inputs: last twelve months EBITDA, net debt, comparable multiples and a view on any change since the last mark. A consistent process, with a workpaper per company that follows the fund's valuation policy, makes the marks defensible to the valuation committee and the auditors.

                ## Milestones
                1. A valuation workpaper per company with method, inputs and sources.
                2. Movement in the multiple since the previous quarter explained in a sentence.
                3. A bridge from last quarter's value to this quarter's, split into earnings, multiple and net debt.
                4. Workpapers submitted to the valuation committee by its deadline.

                ## Notes
                Follow the fund's written valuation policy and the guidelines it adopts, such as the IPEV guidelines. The mark is a judgement for the committee and the auditors, not for the deal lead alone.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A workpaper with a value bridge for every holding reaches the valuation committee before its deadline each quarter."
                cadence: cyclic
              tasks:
                - "Read the fund's valuation policy and note the methods it allows"
                - "Prepare a valuation workpaper for each company @recurring(quarterly)"
                - "Bridge each value from last quarter into earnings, multiple and net debt"
                - "Submit the workpapers to the valuation committee before its deadline"
            - name: Restatement and data quality log
              description: |-
                ## Purpose
                Companies restate prior months more often than anyone admits: a late accrual, a reclassified cost, a revised KPI definition. Logging every restatement with its reason and size keeps your history honest and shows which finance teams need help.

                ## Milestones
                1. A log recording company, period, line restated, old value, new value and reason.
                2. Historic dashboard figures updated with the change noted.
                3. Companies with repeated restatements flagged to the deal lead.
                4. A yearly summary of restatements by company.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every restatement in the last twelve months is logged with old value, new value and reason, and repeat offenders have been flagged."
                cadence: rolling
              tasks:
                - "Create the restatement log with old value, new value and reason"
                - "Compare this month's prior-period figures with last month's pack @recurring(monthly:25)"
                - "Update the dashboard history and note each restatement"
                - "Flag any company with three restatements in a year"
            - name: Quarterly portfolio review with the partners
              description: |-
                ## Purpose
                Once a quarter, step back from the monthly noise and take the partners through every company in one sitting: performance against case, covenants, watchlist status, valuation movement and the one decision needed. A disciplined format keeps it to a morning and makes sure no company goes a year without a proper look.

                ## Milestones
                1. A two-page summary per company in a fixed format.
                2. Decisions and follow-ups from the meeting recorded with owners.
                3. Companies needing deeper work scheduled for a separate session.
                4. Last quarter's follow-ups checked off at the start of each meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A quarterly review has covered every company in a two-page format, with decisions and owners recorded."
                cadence: cyclic
              tasks:
                - "Draft the two-page summary format and agree it with the partners"
                - "Prepare and hold the quarterly portfolio review @recurring(quarterly)"
                - "Record decisions and owners from the review"
                - "Open each review by checking last quarter's follow-ups"
            - name: Annual budget intake and re-baselining
              description: |-
                ## Purpose
                New budgets arrive in the last weeks of the year, often late and sometimes softer than the investment case. Reviewing each one against the case and last year's actuals, then re-baselining the dashboard, sets up the next twelve months of monitoring on targets that have been challenged, not just accepted.

                ## Milestones
                1. Every company's new budget received by the agreed date.
                2. Each budget compared with the investment case and prior year actuals in one table.
                3. Concerns sent to the deal lead before the board approves the budget.
                4. Dashboard and variance templates re-baselined to the approved budgets.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Approved budgets for every company are loaded into the dashboard, each with a written comparison against the investment case."
                cadence: cyclic
              tasks:
                - "Request next year's budget from each company with a due date @recurring(yearly)"
                - "Compare each budget with the investment case and prior year actuals"
                - "Send concerns to the deal lead before budget approval"
                - "Reload the dashboard baselines with the approved budgets"
            - name: Reading a monthly management pack in thirty minutes
              description: |-
                ## Purpose
                Experienced investors read a pack in a set order: cash and net debt first, then the KPI page, then the P&L variance, and only then the commentary, because commentary is written to frame the numbers. Practising a fixed reading order on past packs builds the speed to review a whole portfolio in a day.

                ## Milestones
                1. A written reading order with the questions to ask on each page.
                2. Five past packs read using the order and timed.
                3. Your questions compared with what the board actually asked in those months.
                4. Reading time under thirty minutes per pack.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five past packs have been read against a written reading order, each in under thirty minutes, with questions recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your reading order and the key question for each page"
                - "Read five past packs against the clock using the order"
                - "Compare your questions with the board minutes for those months"
                - "Revise the reading order after the fifth pack"
            - name: Covenant definitions and cure rights explained
              description: |-
                ## Purpose
                Covenant EBITDA, permitted add-backs, equity cures, deemed cures and test periods are where monitoring meets the facilities agreement, and they are easy to misread. Working through one real agreement clause by clause, with the company's finance director or fund counsel on hand, gives you a reference for every other deal.

                ## Milestones
                1. Notes on the covenant EBITDA definition, its add-backs and their caps from one real agreement.
                2. The cure mechanics written out in plain words, including how often a cure can be used.
                3. The effect of an equity cure worked through on the headroom calculator.
                4. Points of uncertainty checked with counsel and the answers recorded.

                ## Notes
                This is about understanding the documents you monitor. How a specific clause applies is a question for counsel.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Plain-words notes on one facilities agreement's covenant definitions and cure rights exist, with counsel's answers to open questions."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one portfolio facilities agreement to study clause by clause"
                - "Write the covenant EBITDA definition and add-back caps in plain words"
                - "Model an equity cure on the headroom calculator"
                - "List your open questions and take them to fund counsel"
            - name: Cash conversion and working capital metrics
              description: |-
                ## Purpose
                EBITDA can grow while cash falls, and the gap usually sits in debtor days, stock or a capex line nobody watches. Learning to track cash conversion, debtor and creditor days and working capital as a share of revenue for each company shows whether profit is turning into cash.

                ## Milestones
                1. Formulas for cash conversion, debtor days, creditor days and stock days added to the KPI dictionary.
                2. Twelve months of each metric calculated for every company.
                3. Seasonal patterns noted so normal swings are not mistaken for problems.
                4. Cash conversion added to the portfolio dashboard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve months of cash conversion and working capital days are calculated for every company and cash conversion appears on the dashboard."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Define cash conversion as the fund will use it"
                - "Calculate debtor, creditor and stock days for twelve months per company"
                - "Note each company's seasonal working capital pattern"
                - "Add cash conversion to the portfolio dashboard"
            - name: Recurring revenue metrics for software holdings
              description: |-
                ## Purpose
                Software portfolio companies live and die on annual recurring revenue, gross and net revenue retention, customer churn and payback on acquisition cost, and each has competing definitions. Learning how they are built, and how they can be flattered, lets you review a software pack as sharply as an industrial one.

                ## Milestones
                1. Definitions of ARR, gross retention, net retention, churn and CAC payback written in the KPI dictionary.
                2. An ARR bridge from opening to closing built from one company's customer-level data.
                3. Common ways these metrics are flattered listed, with the check for each.
                4. A software company's KPI page reviewed against the new definitions.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An ARR bridge for one software holding reconciles to its reported ARR, and five recurring revenue definitions are in the dictionary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the definitions for ARR, retention, churn and CAC payback"
                - "Build an ARR bridge from one company's customer-level data"
                - "List how each metric can be flattered and the check you would run"
                - "Review a software company's KPI page against the definitions"
            - name: Valuation methods for unquoted holdings
              description: |-
                ## Purpose
                Quarterly marks rely on a handful of methods: earnings multiples from comparable companies and transactions, discounted cash flow as a cross-check, and the price of a recent round or offer. Understanding how each is applied under the fund's policy, and where the judgement sits, makes your workpapers easier to defend.

                ## Milestones
                1. A summary of each method the fund's policy allows and when each applies.
                2. One holding valued by two methods and the difference explained.
                3. Notes on how calibration to the entry price carries into later quarters.
                4. Questions for the fund's finance team recorded with their answers.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One holding has been valued by two methods under the fund's policy, with the difference and the calibration approach written up."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise each method allowed by the fund's valuation policy"
                - "Value one holding by multiples and by a cash flow cross-check"
                - "Ask how the fund calibrates to the entry price over time"
                - "Take your remaining questions to the fund's finance team"
            - name: Leading indicators by business model
              description: |-
                ## Purpose
                Revenue is a lagging number; by the time it falls, the cause happened months ago. Each business model has its own leading signals, such as order intake and backlog for manufacturers, pipeline coverage for software, utilisation for services and like-for-like footfall for retail, and knowing them tells you what to ask for before the P&L moves.

                ## Milestones
                1. A list of leading indicators for each business model in the portfolio.
                2. The lag between each indicator and revenue estimated from the company's own history.
                3. At least one leading indicator added to each company's KPI set.
                4. A note on what level of each indicator would move a company to amber.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every portfolio company reports at least one leading indicator with an estimated lag to revenue and an amber threshold."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Group the portfolio companies by business model"
                - "List two or three leading indicators for each model"
                - "Check the lag between each indicator and revenue in past data"
                - "Ask each CFO to add one leading indicator to the KPI page"
            - name: Price, volume and mix variance bridges
              description: |-
                ## Purpose
                A revenue miss explained as softer trading tells you nothing. Splitting the variance into price, volume and mix, and margin variance into input cost, pricing and efficiency, turns management commentary into something you can test and follow up month after month.

                ## Milestones
                1. A bridge template splitting revenue variance into price, volume and mix.
                2. A margin bridge separating input costs, price and operational efficiency.
                3. Bridges built for two companies using their product-level data.
                4. Management's commentary compared against what the bridges show.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Revenue and margin bridges for two companies reconcile to their reported variances and have been compared with management commentary."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a price, volume and mix bridge template"
                - "Ask two CFOs for product-level sales data for last quarter"
                - "Build revenue and margin bridges for both companies"
                - "Compare the bridges with what management wrote in the pack"
            - name: Portfolio monitoring software selection
              description: |-
                ## Purpose
                Spreadsheets cope with five companies; beyond about ten, collecting packs, mapping accounts and producing dashboards by hand starts to eat a full day a month. Comparing two or three portfolio monitoring tools against your own reporting needs, data volumes and budget gives a clear answer on whether software is worth it now.

                ## Milestones
                1. Requirements written: data collection, mapping, dashboards, valuation support and access control.
                2. Three tools shortlisted and demonstrated with your own anonymised sample data.
                3. Total cost over three years compared with the hours saved.
                4. A written decision, buy or wait, with the reason.

                ## Notes
                Start from the **Vendor** template. Ask each vendor for a reference client of similar size to your fund.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A buy or wait decision on monitoring software is recorded, comparing three tools on three-year cost against hours saved."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Write the monitoring requirements on one page"
                - "Shortlist three portfolio monitoring tools"
                - "Run a demo of each tool on an anonymised sample pack"
                - "Record the buy or wait decision with costs and hours saved"
            - name: Standard chart of accounts mapping
              description: |-
                ## Purpose
                Gross margin can mean four different things across four companies, because each keeps its own chart of accounts. Mapping every company's ledger lines to a standard set of reporting lines once, and maintaining it as accounts change, makes portfolio totals and comparisons meaningful.

                ## Milestones
                1. A standard set of reporting lines for revenue, cost of sales, overheads, EBITDA adjustments and items below EBITDA.
                2. Each company's trial balance mapped to the standard lines.
                3. Ambiguous accounts listed and resolved with the CFO.
                4. The mapping version-dated and saved with the KPI dictionary.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every company's trial balance maps to the standard reporting lines with no unmapped accounts, in a dated mapping file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draft a standard set of reporting lines"
                - "Map one company's trial balance to the standard lines"
                - "Resolve ambiguous accounts with that company's CFO"
                - "Repeat the mapping for the remaining companies"
            - name: Automating pack collection from company systems
              description: |-
                ## Purpose
                Retyping numbers from PDFs into a dashboard invites errors and wastes the days right after month end. Agreeing a fixed data template that each company uploads, or a direct export from its accounting system, removes the retyping and gets numbers to the partners sooner.

                ## Milestones
                1. A data template matching the standard reporting lines and KPIs.
                2. Each company's preferred export or upload method agreed.
                3. One full month collected without manual retyping.
                4. Validation checks in place that catch totals that do not add up.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One full month of data from every company has reached the dashboard without retyping, passing the validation checks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Build a data upload template from the standard reporting lines"
                - "Ask each CFO which export their accounting system can produce"
                - "Pilot the template with one company for a month"
                - "Add checks that flag totals that do not reconcile"
            - name: KPI set review after the first year
              description: |-
                ## Purpose
                After twelve months some KPIs have earned their place and others are reported only because nobody stopped them. Reviewing the set per company, keeping what was discussed and acted on and dropping the rest, keeps packs short and attention on the thesis.

                ## Milestones
                1. Each KPI marked as acted on, discussed or ignored over the last year.
                2. Ignored KPIs proposed for removal and missing ones proposed for addition.
                3. Revised KPI sets agreed with deal leads and CFOs.
                4. The dictionary and pack template updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each company's KPI set has been reviewed against a year of use, with removals and additions agreed and the dictionary updated."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark each KPI by whether it led to a question or action last year"
                - "Propose removals and additions per company"
                - "Agree revised KPI sets with each deal lead"
                - "Update the dictionary and pack template"
            - name: Reforecast trigger rules
              description: |-
                ## Purpose
                Budgets age quickly in a bad year, and comparing actuals with a budget everyone knows is dead wastes the review. Written triggers, such as a year-to-date EBITDA miss of more than 10 percent or the loss of a top-five customer, tell management when a reforecast is expected and stop the request feeling personal.

                ## Milestones
                1. Three to five reforecast triggers agreed with the partners.
                2. The triggers shared with each CFO in writing.
                3. A reforecast format agreed: full year by month, with a bridge to budget.
                4. Reforecasts tracked beside budget and case on the dashboard.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three to five written reforecast triggers have been agreed by the partners and sent to every CFO with a reforecast format."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft three to five reforecast triggers"
                - "Agree the triggers with the partners"
                - "Send the triggers and reforecast format to each CFO"
                - "Add a reforecast column to the dashboard"
            - name: Watchlist escalation protocol
              description: |-
                ## Purpose
                When a company turns red, the useful questions are who is told, how quickly, and what changes: weekly cash reporting, a lender conversation, a partner joining the board call. Writing the protocol before you need it means the response to bad news is calm and quick rather than improvised.

                ## Milestones
                1. Escalation steps written for amber and red, with who is informed and within how many days.
                2. Changes to reporting frequency and content defined for each level.
                3. Criteria for returning to green written down.
                4. The protocol agreed with the partners and filed with the watchlist.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written escalation protocol for amber and red companies, including exit criteria, has been agreed with the partners."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft escalation steps for amber and red companies"
                - "Define the extra reporting each level triggers"
                - "Write the criteria for returning to green"
                - "Agree the protocol with the partners"
            - name: Risk-based reporting tiers
              description: |-
                ## Purpose
                Not every company needs the same attention: a stable business with wide covenant headroom can send a light monthly pack, while a stretched one needs weekly cash and a fortnightly call. Tiering companies by risk, with a defined reporting package for each tier, puts your monitoring hours where the risk is.

                ## Milestones
                1. Three reporting tiers defined with their pack, call and cash reporting frequency.
                2. Each company assigned a tier with a one-line reason.
                3. Tiers reviewed each quarter alongside the watchlist.
                4. Companies told their tier and what it means for them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every company is assigned one of three written reporting tiers with a reason, and each CFO has been told their tier."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Define three reporting tiers and what each requires"
                - "Assign each company a tier with a one-line reason"
                - "Tell each CFO their tier and its reporting requirements"
                - "Review tiers when the quarterly watchlist is updated"
            - name: Year-end audit and management accounts reconciliation
              description: |-
                ## Purpose
                Audited accounts sometimes land well below the December management accounts, after year-end adjustments to stock, accruals or revenue recognition. Reconciling the two for each company, and understanding every adjustment, tells you how reliable the monthly numbers are and whether the valuation needs revisiting.

                ## Milestones
                1. Audited accounts received for every company.
                2. A reconciliation from year-end management EBITDA to audited EBITDA per company.
                3. Each material adjustment explained by the CFO.
                4. Any effect on covenant tests or valuation flagged to the deal lead.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A management to audited EBITDA reconciliation exists for every company, with each material adjustment explained."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get each company's audit timetable and expected sign-off date"
                - "Reconcile year-end management EBITDA to audited EBITDA"
                - "Ask each CFO to explain material audit adjustments"
                - "Flag any adjustment that affects covenants or the valuation"
            - name: Preparing for a tight covenant test date
              description: |-
                ## Purpose
                If headroom on a coming test is under 15 percent, the weeks before the test date are when the options exist: performance actions, an equity cure, a lender conversation or simply better evidence that the number will hold. Preparing a dated plan with the company, rather than waiting for the certificate, protects the fund's position and its relationship with lenders.

                ## Milestones
                1. A forecast of the covenant calculation at the test date, with a downside case.
                2. Options listed with the company: performance actions, cure or lender amendment.
                3. Timing of any lender conversation agreed with the company and fund counsel.
                4. A decision on the route recorded before the certificate is due.

                ## Notes
                Lender negotiations and cure decisions involve counsel and the full partnership. This project is about getting the facts ready early.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A covenant forecast with a downside case and a recorded decision on the route exist at least four weeks before the test date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Forecast the covenant calculation at the next test date"
                - "Run a downside case on the forecast"
                - "List the options with the company CFO"
                - "Agree timing for any lender conversation with fund counsel"
                - "Record the chosen route before the certificate is due"
            - name: Half-year valuation committee submission
              description: |-
                ## Purpose
                Half-year and year-end marks get the most scrutiny from auditors and investors, so the submission needs more than a quarterly refresh: full workpapers, refreshed comparables, a sensitivity table and a clear account of any change in method. Preparing it against a checklist avoids the scramble in the week before the committee.

                ## Milestones
                1. Workpapers for every company completed with refreshed comparables.
                2. A sensitivity table for each mark showing the effect of a one-turn change in the multiple.
                3. Any change of method explained and supported.
                4. The submission delivered to the committee by its deadline.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete half-year submission with refreshed comparables and a sensitivity per mark reaches the valuation committee by its deadline."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Get the committee date and submission deadline from the finance team"
                - "Refresh comparable company and transaction multiples"
                - "Build a one-turn multiple sensitivity for each mark"
                - "Deliver the full submission to the valuation committee"
            - name: Annual monitoring lookback
              description: |-
                ## Purpose
                Once a year, test the monitoring system against what actually happened: which problems the watchlist flagged early, which it missed, how late packs were and how far the marks moved. A short written lookback turns twelve months of routine into specific changes for next year.

                ## Milestones
                1. Every company problem of the past year listed with the date monitoring first flagged it.
                2. Missed or late signals analysed for why.
                3. Pack timeliness and restatement figures summarised.
                4. Three changes to the monitoring system agreed for next year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written lookback lists each problem of the year with its first flag date and records three agreed changes to the system."
                cadence: cyclic
              tasks:
                - "List every portfolio problem this year and when it was first flagged @recurring(yearly)"
                - "Work out why any signal came late or not at all"
                - "Summarise pack timeliness and restatements for the year"
                - "Agree three changes to the monitoring system with the partners"
            - name: Deal anniversary review against the investment case
              description: |-
                ## Purpose
                On each anniversary of closing, compare where the company stands with where the investment case said it would be: revenue, EBITDA, net debt, the KPIs that test the thesis and the implied return at the current mark. Doing it on a fixed date stops the case quietly being replaced by the latest budget.

                ## Milestones
                1. Actual results set against the investment case for the year just ended.
                2. Thesis KPIs scored as ahead, on track or behind.
                3. Implied return at the current mark compared with the underwritten return.
                4. A one-page anniversary note shared with the deal lead and partners.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Each company has a one-page anniversary note comparing actuals and thesis KPIs with the investment case, shared with the partners."
                cadence: cyclic
              tasks:
                - "Note each company's closing anniversary in the reporting calendar"
                - "Compare the year's actuals with the investment case"
                - "Score each thesis KPI as ahead, on track or behind"
                - "Ask the agent to draft the anniversary note from the comparison table"
            - name: Inheriting a portfolio company from a departing colleague
              description: |-
                ## Purpose
                Deal team moves and departures mean companies change hands, and the knowledge that matters is rarely in the folder: the CFO who needs chasing, the add-back the lenders challenged, the promise made to management. A structured handover in the colleague's last fortnight captures it before they go.

                ## Milestones
                1. A handover session held with the departing colleague using a written question list.
                2. Open issues, promises and sensitivities recorded per company.
                3. An introduction to the CEO and CFO made by the departing colleague.
                4. Your first monthly review completed while the colleague is still reachable.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written handover record of open issues and promises exists for each inherited company, and introductions to its CEO and CFO are done."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a handover question list covering people, numbers and promises"
                - "Hold the handover session and record the answers"
                - "Ask the departing colleague to introduce you to the CEO and CFO"
                - "Do your first monthly review while the colleague can still be asked"
            - name: Monitoring a minority growth stake
              description: |-
                ## Purpose
                As a minority investor you get the information your rights allow, which may be quarterly accounts and an annual budget rather than a monthly pack. Agreeing a light reporting package with the founder, and focusing on the few KPIs that drive value, keeps you informed without straining a relationship you do not control.

                ## Milestones
                1. The information rights for the stake read and summarised.
                2. A reporting package agreed with the founder within those rights.
                3. Three to five KPIs chosen that matter most for the minority position.
                4. A regular founder call agreed in place of a monthly pack, if that suits them better.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A reporting package within the stake's information rights, with three to five KPIs, has been agreed with the founder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the information rights in the minority investment documents"
                - "Propose a light reporting package to the founder"
                - "Choose the three to five KPIs that matter most for the stake"
                - "Agree a regular call rhythm with the founder"
            - name: Monitoring on a lean fund team
              description: |-
                ## Purpose
                A first fund with two partners and no analyst cannot run a portfolio office, but its investors still expect timely numbers and careful marks. A minimal system of one template, one dashboard, one calendar and a fixed monitoring morning each month delivers most of the value in a few hours.

                ## Milestones
                1. Monitoring tasks listed and cut to the ones that change decisions.
                2. A fixed monthly monitoring morning blocked in both partners' calendars.
                3. Companies sending data in a template that needs no retyping.
                4. A written trigger for when the fund will hire or outsource monitoring help.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The fund's monitoring fits a fixed monthly morning, with a written trigger for hiring or outsourcing help."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every monitoring task and keep only those that change decisions"
                - "Block a fixed monitoring morning in both partners' calendars"
                - "Ask each company to report in the standard template"
                - "Write the trigger for hiring or outsourcing monitoring help"
            - name: Monitoring cover during leave or a live deal
              description: |-
                ## Purpose
                Monitoring is the first thing dropped when a deal goes live or someone goes on leave, and that is exactly when a problem slips past. A cover note per company, with what to check, the thresholds that matter and who to call, lets a colleague run the routine for a few weeks without guessing.

                ## Milestones
                1. A one-page cover note per company with key thresholds and contacts.
                2. The covering colleague walked through the dashboard and watchlist.
                3. Escalation contacts confirmed for the cover period.
                4. A short catch-up held on your return.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each of your companies has a one-page cover note, and the covering colleague has been walked through the dashboard and watchlist."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page cover note for each of your companies"
                - "Walk the covering colleague through the dashboard and watchlist"
                - "Confirm who the colleague should call if a company turns red"
                - "Book a catch-up for the day you return"
            - name: Monitoring companies that report in other currencies
              description: |-
                ## Purpose
                Currency movements can make a company reporting in Jamaican dollars, euros or Brazilian reais look as if it is shrinking in the fund's currency while it grows locally. Tracking local currency and constant currency results side by side, with the exchange rates fixed in the budget and the case, separates trading from currency.

                ## Milestones
                1. Each company's reporting currency and the fund currency recorded.
                2. Budget and investment case exchange rates documented.
                3. The dashboard showing local currency, constant currency and fund currency results.
                4. The currency effect on net debt and covenant tests noted where debt and earnings are in different currencies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The dashboard shows constant currency results for every non-fund-currency company, using documented budget and case rates."
                cadence: rolling
              tasks:
                - "Record the budget and case exchange rates for each company"
                - "Update month-end exchange rates in the dashboard @recurring(monthly:10)"
                - "Show constant currency results beside reported results"
                - "Note any currency mismatch between a company's debt and its earnings"
            - name: Monitoring through a covenant breach or waiver
              description: |-
                ## Purpose
                Lenders usually ask for more once a breach or waiver is in play: weekly cash flows, monthly calls, adviser reports and milestones written into the waiver letter. Tracking every new obligation and the company's performance against the waiver conditions keeps the fund ahead of the next lender question. Decisions on the waiver itself sit with the partners and counsel.

                ## Milestones
                1. Every new reporting obligation from the waiver listed with its dates.
                2. Performance against each waiver condition tracked weekly.
                3. Lender adviser reports filed and summarised for the partners.
                4. A dated plan for returning to normal reporting once the conditions are met.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every waiver obligation is tracked with its date, and weekly performance against each condition is on file until normal reporting resumes."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List every reporting obligation and condition in the waiver letter"
                - "Track performance against each waiver condition @recurring(weekly:thu)"
                - "Summarise lender adviser reports for the partners"
                - "Plan the return to normal reporting once conditions are met"
            - name: Portfolio concentration and shared exposure map
              description: |-
                ## Purpose
                Individually healthy companies can share the same risk: one large customer, one supplier country, floating-rate debt or the same lender. Mapping these shared exposures across the portfolio shows where a single event could hit several companies at once.

                ## Milestones
                1. Top customers, key suppliers, lenders and debt rate type recorded for every company.
                2. Exposures shared by two or more companies highlighted.
                3. The effect of a 200 basis point rate rise on each company's interest cover estimated.
                4. Findings summarised for the quarterly portfolio review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shared exposure map covering customers, suppliers, lenders and rate risk is refreshed before each quarterly portfolio review."
                cadence: cyclic
              tasks:
                - "Collect top customers, key suppliers and lenders for each company"
                - "Highlight exposures shared by two or more companies"
                - "Estimate the effect of a 200 basis point rate rise on interest cover"
                - "Refresh the exposure map before the quarterly review @recurring(quarterly)"
            - name: Debt maturity and hedging tracker
              description: |-
                ## Purpose
                Refinancing risk builds slowly and then arrives all at once, when several facilities mature in the same year or interest rate hedges roll off together. A tracker of every facility's maturity, margin, amortisation and hedge expiry shows which companies need a refinancing conversation two years out rather than six months.

                ## Milestones
                1. Every facility listed with amount, margin, maturity and amortisation.
                2. Hedge notional, rate and expiry recorded per company.
                3. A maturity chart by year for the whole portfolio.
                4. Companies with maturities or hedge expiries inside two years flagged for discussion.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portfolio maturity chart exists and every facility or hedge expiring within two years has been flagged to its deal lead."
                cadence: cyclic
              tasks:
                - "List every facility with amount, margin, maturity and amortisation"
                - "Record each interest rate hedge with notional, rate and expiry"
                - "Chart maturities by year across the portfolio"
                - "Update the tracker after each compliance certificate round @recurring(quarterly)"
            - name: Sustainability data collection across the portfolio
              description: |-
                ## Purpose
                Many limited partners now ask for annual sustainability data, such as emissions estimates, workforce figures and governance policies, often in a set framework like the ESG Data Convergence Initiative. Collecting it once a year through one questionnaire, rather than through ad hoc requests, keeps the burden on companies predictable.

                ## Milestones
                1. The data points investors ask for combined into one questionnaire.
                2. Each company's data owner named.
                3. A year of data collected and checked for obvious errors.
                4. Year-on-year changes noted for the fund's reporting team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every company has returned the annual sustainability questionnaire, checked for errors and passed to the fund's reporting team."
                cadence: cyclic
              tasks:
                - "Combine investor sustainability requests into one questionnaire"
                - "Name the data owner at each company"
                - "Send the questionnaire to every company @recurring(yearly)"
                - "Check returns for obvious errors before passing them on"
            - name: Back-testing early warning signals
              description: |-
                ## Purpose
                Your watchlist signals are guesses until they are tested against history. Taking the companies that ran into trouble in past funds and checking which signals would have fired, and how early, tells you which to keep, which to weight more heavily and which only produce noise.

                ## Milestones
                1. Three to five past problem companies chosen with their monthly data.
                2. Each signal checked for when it would first have fired.
                3. False alarms counted on a sample of companies that performed well.
                4. Watchlist signals and thresholds revised from the results.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each watchlist signal has a recorded lead time and false alarm count from at least three past cases, and the thresholds have been revised."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Choose three to five past problem companies with monthly data available"
                - "Check when each watchlist signal would first have fired"
                - "Count false alarms on a sample of companies that did well"
                - "Revise signals and thresholds from the results"
            - name: Benchmarking portfolio companies against peers
              description: |-
                ## Purpose
                Hitting budget says little if competitors grew twice as fast. Benchmarking growth, margins and cash conversion against listed peers and industry surveys shows whether a company is winning share or simply riding its market.

                ## Milestones
                1. A peer set of five to eight comparable companies chosen per portfolio company.
                2. Growth, margin and cash conversion compared over three years.
                3. Gaps to peers summarised in a short note per company.
                4. Notes shared with deal leads before budget season.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every portfolio company has a peer gap note covering three years of growth, margin and cash conversion, shared before budget season."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose five to eight listed peers per portfolio company"
                - "Pull three years of growth, margin and cash conversion for each peer"
                - "Write a short gap note per company"
                - "Share the notes with deal leads before budget season"
---

# Portfolio Monitoring and KPIs

This area is for the deal professional who watches portfolio companies between board meetings, from the associate who reads the monthly packs to the principal who has to explain a falling mark or a tight covenant to the partners. It starts with the foundations (a company inventory, the information rights map, a standard monthly pack, a KPI dictionary, baselines and a covenant headroom calculator), then the monthly and quarterly machinery of pack receipt, variance reviews, dashboards, watchlists and valuation updates, the skills behind reading packs and covenants, decisions on software, mapping and reporting tiers, the dated moments such as audits and tight test dates, situations like inheriting a company or monitoring a minority stake, and finally specialist work on shared exposures, debt maturities and testing your own warning signals.

What repeats is a monthly rhythm of chasing packs, reviewing variances, refreshing the dashboard, scoring the watchlist and calling each CFO, a weekly cash review for companies under strain, quarterly covenant checks, valuation workpapers and a partners' portfolio review, and a yearly budget intake, lookback and sustainability data round. The Metrics log, Operational checklist, Risk register, Meeting notes, Vendor and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
