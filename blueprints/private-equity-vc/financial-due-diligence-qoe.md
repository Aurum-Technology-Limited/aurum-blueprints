---
id: private-equity-vc.financial-due-diligence-qoe
name: Financial Due Diligence (QoE)
description: "A scoped request list, an EBITDA bridge you can defend, a working capital peg, a net debt schedule and a findings log that turns every diligence issue into a price, structure or protection decision."
category: business
version: 1.0.0
tags: [private-equity-vc, financial-due-diligence-qoe, knowledge-worker, quality-of-earnings, normalised-ebitda, working-capital, net-debt, buyouts]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Private Equity & Venture Capital
      emoji: "💹"
      description: "Private markets from the investor's side: sourcing and screening deals, LBO models, investment committee memos, due diligence, value creation and exits, raising and running your own fund, search funds and independent sponsors, venture deal flow and board seats, and careers in both, for people building their own track record."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Financial Due Diligence (QoE)
          description: "Running financial diligence on a target: quality of earnings, normalised EBITDA, the working capital peg, net debt items and how findings change the price."
          projects:
            - name: Financial diligence scope and request list
              description: |-
                ## Purpose
                Most diligence overruns start with a request list copied from the last deal, which asks for forty things the target does not have and misses the three that matter. A scope written around this deal's thesis and its likely weak points, turned into a numbered request list, tells management what to prepare and tells advisers what to price.

                ## Milestones
                1. The three to five questions the financial work must answer written down, each tied to the thesis or a known concern.
                2. A numbered request list grouped by area: historical accounts, revenue, costs, working capital, debt, tax and payroll.
                3. Each request marked essential or nice to have, so management can prioritise.
                4. The list sent to the target's finance lead with a requested turnaround date.

                ## Notes
                Ask for monthly data from the start. Annual numbers hide seasonality, one-off months and the run-rate you will be pricing on.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered financial request list tied to written diligence questions has been sent to the target's finance lead with a turnaround date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five questions the financial diligence must answer for this deal"
                - "Draft the request list by area, starting from monthly accounts for three years"
                - "Mark each request essential or nice to have"
                - "Send the list to the target's finance lead with a requested return date"
            - name: Data room index and document tracker
              description: |-
                ## Purpose
                Data rooms fill up in bursts, files get renamed and replaced, and a week into fieldwork nobody knows which version of the debtor ledger the adviser used. A tracker that maps every request number to the document that answers it, with the upload date and version, keeps the team and the advisers working from the same files.

                ## Milestones
                1. A tracker listing each request number, the matching data room file, upload date and version.
                2. Requests with no matching document flagged as outstanding.
                3. Superseded files marked so analysis is never built on an old version.
                4. The tracker shared with the QoE adviser and the deal team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every request on the list is mapped to a named data room file or marked outstanding, and the tracker is shared with the adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the current data room index into a spreadsheet"
                - "Match each request number to the file that answers it"
                - "Flag every request that still has no document"
                - "Mark superseded files and note which version the adviser is using @recurring(weekly:thu)"
            - name: Three-year monthly historical financial pack
              description: |-
                ## Purpose
                Every later piece of diligence, from the EBITDA bridge to the working capital peg, is built on the same monthly profit and loss, balance sheet and cash flow. Assembling three years plus the latest trailing twelve months in one consistent layout, before any adjustments, gives the team a single starting point everyone can tie back to.

                ## Milestones
                1. Monthly profit and loss, balance sheet and cash flow for three years and the current year to date in one workbook.
                2. A trailing twelve months column calculated for each line.
                3. Account mapping from the target's chart of accounts to your standard layout documented.
                4. Totals tied to the management accounts for every month, with differences listed.

                ## Notes
                Keep the raw export on its own tab and never overwrite it. Every mapping decision should be traceable back to it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A monthly three-year pack with a trailing twelve months column ties to the management accounts for every month, with differences listed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Load the raw monthly trial balances onto a separate untouched tab"
                - "Map the target's chart of accounts to your standard layout"
                - "Build the trailing twelve months column for each line"
                - "Tie each month's totals back to the management accounts"
            - name: Management accounts to audited accounts reconciliation
              description: |-
                ## Purpose
                Management accounts are what the business runs on and what the teaser quoted, but the audited statements are what the auditors tested. Year-end adjustments that never reach the monthly pack, such as accrual true-ups, stock provisions and bonus estimates, are where earnings quietly move, so reconciling the two for each year is one of the first jobs.

                ## Milestones
                1. Management and audited EBITDA set side by side for each full year.
                2. Every difference above your materiality threshold explained by a named journal or adjustment.
                3. Any pattern of year-end adjustments that reduce profit noted for the findings log.
                4. The reconciliation reviewed with the target's finance lead and their explanations recorded.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each year's management EBITDA is reconciled to audited EBITDA with every material difference explained and the finance lead's explanation recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set management and audited EBITDA side by side for each year"
                - "Request the auditors' list of year-end adjusting journals"
                - "Explain each difference above materiality by journal"
                - "Walk the finance lead through the unexplained items and record answers"
            - name: Choosing and scoping the QoE provider
              description: |-
                ## Purpose
                A quality of earnings report is only as good as the team that writes it and the scope it was given, and the cheapest quote often excludes the areas where this target is weakest. Comparing two or three providers on sector experience, the named team, scope, timetable and reliance terms gets the right firm started before exclusivity time runs out.

                ## Milestones
                1. Two or three providers asked to quote against the same written scope.
                2. Each proposal scored on sector experience, named team, scope coverage, timetable and fee.
                3. Reliance terms for lenders and co-investors confirmed with each shortlisted firm.
                4. A provider chosen and the reason recorded.

                ## Notes
                Start from the **Vendor** template. Ask to meet the manager who will run fieldwork, not only the partner who pitches.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A QoE provider is chosen from at least two proposals scored on the same criteria, with the reason and reliance terms recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page scope to send to every provider"
                - "Ask two or three firms to quote against that scope"
                - "Score each proposal on team, scope, timetable and fee"
                - "Confirm reliance terms for lenders before choosing"
            - name: QoE engagement letter and scope sign-off
              description: |-
                ## Purpose
                Disputes about what an adviser did or did not look at usually trace back to an engagement letter nobody on the deal team read closely. Reading the scope, exclusions, reliance and liability sections before signing, with legal colleagues on the parts that are theirs, means the report covers what you think it covers.

                ## Milestones
                1. The scope section checked line by line against your written scope.
                2. Exclusions listed and each one either accepted or added back.
                3. Reliance, liability cap and fee terms passed to legal colleagues or counsel for review.
                4. The signed letter saved with the deal file and the scope summary shared with the team.

                ## Notes
                Liability and reliance terms are a legal question. Your job is to make sure counsel sees them in time and that the scope matches the deal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed engagement letter is on file whose scope matches the written scope, with exclusions accepted or resolved and counsel's review recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the letter's scope section with your written scope"
                - "List every exclusion and decide whether to accept or add it back"
                - "Send the reliance and liability sections to counsel for review"
                - "File the signed letter and circulate a one-paragraph scope summary"
            - name: EBITDA bridge from reported to pro forma
              description: |-
                ## Purpose
                Reported, management adjusted, diligence adjusted and pro forma EBITDA are four different numbers, and deals go wrong when a memo quotes one and the model uses another. A standard bridge layout, with each adjustment as its own line, its source and its status, makes every number traceable and every disagreement visible.

                ## Milestones
                1. A bridge layout with columns for reported, management adjustments, diligence adjustments and pro forma, by year and trailing twelve months.
                2. Every adjustment on its own line with a description, source document and owner.
                3. Each adjustment tagged proposed, accepted or rejected.
                4. The bridge agreed as the single source for the model and the committee paper.

                ## Notes
                Keep management's own adjustments separate from yours, even when you accept them. The committee will ask which ones came from the seller.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bridge with each adjustment on its own line, sourced and tagged by status, is agreed by the deal team as the single EBITDA source."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up the bridge with reported, management, diligence and pro forma columns"
                - "Enter each of management's adjustments as its own line with a source"
                - "Tag every line proposed, accepted or rejected"
                - "Agree with the deal team that the model reads from this bridge only"
            - name: Materiality threshold and findings log
              description: |-
                ## Purpose
                Diligence throws up dozens of issues, and without a threshold the team either chases every small accrual or misses a large one in the noise. Agreeing a materiality level up front and keeping one log of findings, each with its value, its effect on EBITDA, debt or working capital and a proposed response, keeps the work focused on what changes the deal.

                ## Milestones
                1. A materiality threshold agreed with the deal lead, in currency and as a share of EBITDA.
                2. A findings log with columns for description, value, area affected, likelihood and proposed response.
                3. Every finding assigned an owner and a status.
                4. The log reviewed with the deal lead and the top five findings ranked.

                ## Notes
                Start from the **Risk register** template. A response column with only price, structure, protection or accept as options forces a decision on every line.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A materiality threshold is recorded and a findings log exists in which every entry has a value, an owner and one of four responses."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree a materiality threshold with the deal lead and write it down"
                - "Set up the findings log with value, area, likelihood and response columns"
                - "Move every issue raised so far into the log with an owner"
                - "Rank the top five findings with the deal lead @recurring(weekly:wed)"
            - name: Diligence workplan against the exclusivity period
              description: |-
                ## Purpose
                Exclusivity in a mid-market deal is often four to eight weeks, and financial diligence has to finish early enough for its findings to reach the model, the lenders and the committee. Planning backwards from the signing date, with fieldwork, draft report, readout and bring-down each given a date, shows early whether the timetable is real.

                ## Milestones
                1. The exclusivity end date and target signing date written at the top of the plan.
                2. Fieldwork, draft report, readout, final report and bring-down each given a date.
                3. Dependencies on management, lenders and the committee marked.
                4. The plan shared with the adviser and the target's finance lead.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated workplan counting back from signing exists, with every stage dated and shared with the adviser and the target's finance lead."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the exclusivity end date and the target signing date"
                - "Count back to date the draft report, readout and bring-down"
                - "Mark which dates depend on management delivering data"
                - "Share the plan with the adviser and the finance lead"
            - name: Weekly QoE adviser status call
              description: |-
                ## Purpose
                Advisers report progress in percentages complete, which tells you little about whether the numbers that matter are moving. A short weekly call run from the findings log and the open items list, ending with dated actions on both sides, surfaces bad news early enough to act on it.

                ## Milestones
                1. A standing weekly call in the diary for the length of fieldwork.
                2. A fixed agenda: new findings, adjustments changed, open items, blockers and next week's dates.
                3. Actions from each call recorded with an owner and a date.
                4. No call ends without the adviser naming the biggest open risk.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week of fieldwork has a recorded call with dated actions and the adviser's named biggest open risk."
                cadence: rolling
              tasks:
                - "Book a standing weekly call with the adviser's engagement manager"
                - "Run the weekly adviser call from the findings log and open items @recurring(weekly:tue)"
                - "Record actions with owners and dates after each call"
                - "Ask the adviser to name the biggest open risk at the close of every call"
            - name: Open items triage during fieldwork
              description: |-
                ## Purpose
                Outstanding requests pile up quietly, and a missing debtor ageing or payroll report on day twenty can push the whole timetable. Sorting the open items twice a week into chase, escalate or drop, and telling management which three matter most, keeps fieldwork moving without burying the finance team.

                ## Milestones
                1. An open items list with request number, owner, date requested and days outstanding.
                2. Items older than a week either chased, escalated to the deal lead or dropped.
                3. A short list of the three most important items sent to management each time.
                4. Fewer than five essential items open in the week before the draft report.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The open items list is triaged twice weekly and fewer than five essential items remain open the week before the draft report."
                cadence: rolling
              tasks:
                - "Add a days outstanding column to the open items list"
                - "Triage open items into chase, escalate or drop @recurring(weekly:mon,thu)"
                - "Send management the three items that matter most this week"
                - "Escalate any essential item older than ten days to the deal lead"
            - name: Diligence question log with management
              description: |-
                ## Purpose
                Questions to the target arrive from the deal team, the adviser, lenders and lawyers, and without one log the finance director answers the same thing three times and starts to resent the process. A single numbered log, with each question routed once and every answer saved, protects the relationship with the people you may soon be backing.

                ## Milestones
                1. One numbered question log used by everyone asking financial questions.
                2. Duplicate questions merged before they reach management.
                3. Every answer saved against its question with the date and the person who answered.
                4. Answers that change a number in the bridge linked to the findings log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All financial questions to management run through one numbered log, with duplicates merged and each answer dated and saved."
                cadence: rolling
              tasks:
                - "Set up one numbered question log and share it with every workstream"
                - "Merge duplicates and send the week's questions as one batch @recurring(weekly:fri)"
                - "Chase answers outstanding for more than a week @recurring(weekly:tue)"
                - "Link answers that change a number to the findings log"
            - name: Findings to model hand-off routine
              description: |-
                ## Purpose
                Findings that sit in the adviser's draft but never reach the model are the most expensive kind of diligence error. A fixed routine where every accepted adjustment, peg change and new debt-like item is passed to whoever owns the model, and confirmed back, keeps the price and the findings telling the same story.

                ## Milestones
                1. A hand-off sheet listing each accepted finding, its value and where it lands in the model.
                2. The model owner confirming each item has been reflected.
                3. A reconciliation between the bridge's pro forma EBITDA and the model's entry EBITDA.
                4. Net debt and peg figures in the model matching the diligence schedules.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each week the model's entry EBITDA, net debt and peg match the diligence schedules, with every accepted finding confirmed as reflected."
                cadence: rolling
              tasks:
                - "Create a hand-off sheet with finding, value and model location columns"
                - "Pass newly accepted findings to the model owner @recurring(weekly:wed)"
                - "Reconcile the model's entry EBITDA to the bridge after each hand-off @recurring(weekly:thu)"
                - "Check net debt and peg in the model against the diligence schedules"
            - name: Current trading review during exclusivity
              description: |-
                ## Purpose
                Diligence is done on historical numbers, but the price is paid for a business that keeps trading while you look. Reviewing each new month's results against budget and the prior year, as soon as they close, catches a weakening quarter before signing rather than in the first board pack.

                ## Milestones
                1. A request in place for each month's management accounts within an agreed number of days of month end.
                2. Each new month compared with budget and the same month last year.
                3. Variances above materiality explained by management in writing.
                4. A one-paragraph current trading note added to the deal file each month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month that closes during exclusivity has a written current trading note with variances to budget and prior year explained."
                cadence: rolling
              tasks:
                - "Agree with the target when each month's accounts will be shared"
                - "Compare the latest month with budget and prior year @recurring(monthly:12)"
                - "Ask management to explain variances above materiality in writing"
                - "Add a current trading note to the deal file"
            - name: Personal library of QoE adjustments
              description: |-
                ## Purpose
                Adjustment types repeat across deals: owner salaries, one-off legal costs, capitalised development, rent to related parties, pandemic grants. Keeping your own library of the ones you have seen, how each was evidenced and whether committee accepted it, makes you faster and more sceptical on every deal after this one.

                ## Milestones
                1. A library with one entry per adjustment type, its usual evidence and common pitfalls.
                2. At least ten entries drawn from deals you have worked on, with confidential details removed.
                3. Each entry marked by how it was treated: accepted, haircut or rejected.
                4. The library consulted at the start of each new bridge.

                ## Notes
                Strip out names, figures and anything that identifies a target. The value is in the pattern, not the deal data.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal adjustment library holds at least ten anonymised entries, each with evidence needed and how it was treated."
                cadence: rolling
              tasks:
                - "List the adjustment types from your last three deals without target details"
                - "Write the evidence each type needs and the usual pitfalls"
                - "Add new adjustment types seen this month to the library @recurring(monthly:20)"
                - "Read the library before starting each new EBITDA bridge"
            - name: Diligence findings versus actual results review
              description: |-
                ## Purpose
                Proof of a quality of earnings comes from what the business earns in the two years after you own it, and few deal teams ever check. Comparing diligence EBITDA, the peg and net debt with what actually happened, for each deal you worked on, shows where your diligence was too generous and where it was too harsh.

                ## Milestones
                1. A list of deals you worked on that closed more than a year ago.
                2. Diligence pro forma EBITDA set beside the first and second years' actual EBITDA for each.
                3. Peg versus actual average working capital and any surprise liabilities noted.
                4. Three lessons written down and added to your checklist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two closed deals have a written comparison of diligence figures with actual results, and three lessons are added to the checklist."
                cadence: cyclic
              tasks:
                - "List the deals you worked on that closed over a year ago"
                - "Compare diligence EBITDA, peg and net debt with actuals @recurring(quarterly)"
                - "Note any liability that appeared after closing and was not found"
                - "Write three lessons into your diligence checklist"
            - name: Financial diligence checklist upkeep
              description: |-
                ## Purpose
                Checklists built on one deal grow stale as accounting standards, deal structures and your own lessons move on. Keeping a living checklist of the areas, tests and questions you run on every target, and refreshing it once a year, means nothing important depends on remembering.

                ## Milestones
                1. A checklist covering historical accounts, revenue, costs, cash, working capital, net debt, tax interfaces and payroll.
                2. Each item marked always, if relevant or specialist.
                3. Lessons from recent deals and reviews added.
                4. A dated version saved and shared with the junior team members you work with.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated checklist with every item tagged always, if relevant or specialist is saved and includes lessons from the last year."
                cadence: cyclic
              tasks:
                - "Write the checklist by area from your current request list"
                - "Tag each item always, if relevant or specialist"
                - "Refresh the checklist with the year's lessons and standard changes @recurring(yearly)"
                - "Share the dated version with the associates you work with"
            - name: QoE adviser panel scorecard
              description: |-
                ## Purpose
                Firms that quote well do not always deliver well, and the memory of which manager found the hidden rebate fades after a few deals. Scoring each adviser after every engagement on timeliness, findings, challenge and cost builds a panel you can choose from on evidence rather than relationships.

                ## Milestones
                1. A scorecard with five criteria scored one to five.
                2. Every completed engagement scored within two weeks of the final report.
                3. Named managers and partners noted alongside the firm.
                4. The panel ranked before the next provider choice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every completed QoE engagement has a scorecard within two weeks of the final report, and the panel is ranked before each new appointment."
                cadence: cyclic
              tasks:
                - "Set five scoring criteria for diligence advisers"
                - "Score the most recent engagement while it is fresh"
                - "Rank the adviser panel from the scorecards @recurring(quarterly)"
                - "Note the named managers who did the best work"
            - name: Reading a quality of earnings report critically
              description: |-
                ## Purpose
                A QoE report runs to a hundred pages and most readers stop at the executive summary, which is exactly where the adviser's softest judgements live. Learning to read the basis of preparation, the limitations section and the detail behind each adjustment turns the report from a comfort document into a working tool.

                ## Milestones
                1. The structure of a typical QoE report mapped: summary, basis, EBITDA, revenue, costs, working capital, net debt.
                2. Two past reports read with the limitations section summarised in your own words.
                3. A list of ten questions you now ask of every report.
                4. One draft report challenged in writing using that list.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two past QoE reports are summarised with their limitations, and a written list of ten standing questions has been used on a live draft."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read the basis of preparation and limitations in a past QoE report"
                - "Summarise what the adviser did not test in your own words"
                - "Write ten questions you will ask of every QoE report"
                - "Challenge one live or past QoE report in writing with those questions @recurring(monthly:16)"
            - name: Normalised EBITDA adjustments that hold up
              description: |-
                ## Purpose
                Sellers present adjusted EBITDA with every unwelcome cost labelled one-off, and the same restructuring appears three years running. Knowing the tests that separate a genuine normalisation from wishful thinking, such as recurrence, evidence and whether the cost will exist under your ownership, is the core skill of this area.

                ## Milestones
                1. The common adjustment categories listed: owner costs, one-off items, related parties, accounting changes, run-rate items.
                2. A written test for each: evidence needed, recurrence check, will it exist after closing.
                3. Every management adjustment on a live or past deal rated against the tests.
                4. A short note explaining each rejected adjustment in terms a seller can accept.

                ## Notes
                A cost that recurs every year under a different name is not one-off. Look at three years of the same line before accepting the label.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each management adjustment on one deal is rated against written evidence and recurrence tests, with every rejection explained in a short note."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the adjustment categories you see most often"
                - "Write a three-part test for each category"
                - "Rate every management adjustment on one deal against the tests"
                - "Draft a note explaining each rejection in plain terms"
            - name: Revenue quality and cut-off analysis
              description: |-
                ## Purpose
                Revenue looks the same on the profit and loss whether it came from a five-year contract or a one-off clearance sale, and recognition choices can pull next year's sales into this year. Splitting revenue by type, customer and contract terms, and testing cut-off around each year end, shows how much of the top line will repeat.

                ## Milestones
                1. Revenue split into recurring, repeat, project and one-off for each year.
                2. Top twenty customers by revenue with their share, trend and contract status.
                3. Sales in the weeks either side of each year end tested against delivery evidence.
                4. Credit notes and returns after year end reviewed for reversals of prior-year sales.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Revenue is split by type for each year, the top twenty customers are profiled, and cut-off testing around each year end is documented."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Request the sales ledger by customer and invoice for three years"
                - "Split revenue into recurring, repeat, project and one-off"
                - "Test invoices either side of each year end against delivery records"
                - "Review credit notes raised after each year end"
            - name: Proof of cash and bank reconciliation testing
              description: |-
                ## Purpose
                Profit can be shaped by estimates, but cash in the bank is harder to invent, which makes a proof of cash one of the simplest ways to test whether reported revenue is real. Tying monthly receipts and payments on bank statements to the ledger, for a sample of months, either confirms the earnings or tells you to dig.

                ## Milestones
                1. Bank statements obtained directly or from the data room for every account.
                2. Receipts reconciled to revenue and debtor movements for at least six months.
                3. Payments reconciled to costs and creditor movements for the same months.
                4. Unexplained differences listed and raised with management.

                ## Notes
                Ask for statements from the bank portal rather than spreadsheets. A copy typed into Excel proves nothing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six months of bank receipts and payments are reconciled to the ledger, with every unexplained difference raised with management."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request bank statements for every account directly from the bank portal"
                - "Reconcile monthly receipts to revenue and debtor movements"
                - "Reconcile monthly payments to costs and creditor movements"
                - "Raise each unexplained difference with management"
            - name: Net working capital analysis and seasonality
              description: |-
                ## Purpose
                Working capital swings with the seasons, customer terms and how hard the seller has been squeezing creditors before a sale. Analysing it month by month over at least two years, with debtor, stock and creditor days, shows the real level the business needs and sets up the peg negotiation.

                ## Milestones
                1. A definition of trade working capital agreed, listing which balance sheet lines are in and out.
                2. Monthly working capital for at least twenty-four months charted.
                3. Debtor, creditor and stock days calculated each month.
                4. Unusual movements before the sale process, such as stretched creditors, identified and quantified.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty-four months of working capital on an agreed definition are charted with days ratios and any pre-sale manipulation quantified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down which balance sheet lines count as trade working capital"
                - "Calculate monthly working capital for twenty-four months"
                - "Add debtor, creditor and stock days for each month"
                - "Flag movements in the six months before the sale process"
            - name: Net debt and debt-like items schedule
              description: |-
                ## Purpose
                On a cash-free, debt-free deal every item classed as debt comes straight off the equity price, so the definition is fought over line by line. Building a full schedule of bank debt, leases, deferred consideration, unpaid tax, aged creditors, pension deficits and other debt-like items gives the deal team a list it can defend in the purchase agreement.

                ## Milestones
                1. Financial debt and cash listed at the latest balance sheet date.
                2. Debt-like items identified and each valued with its source.
                3. Trapped or restricted cash identified and separated.
                4. The schedule shared with counsel drafting the purchase agreement definitions.

                ## Notes
                Typical debt-like items to check: deferred revenue the buyer must fulfil, accrued bonuses, deferred capex, customer deposits, dilapidations and any tax owed for pre-closing periods. Whether each one counts is a negotiation, so record your reasoning.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A net debt schedule lists financial debt, every debt-like item valued with a source and any trapped cash, and has been sent to counsel."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List bank debt, leases and cash at the latest balance sheet date"
                - "Work through the balance sheet for debt-like items line by line"
                - "Separate any trapped or restricted cash"
                - "Send the schedule to counsel drafting the purchase agreement"
            - name: Gross margin analysis by product and customer
              description: |-
                ## Purpose
                Stable overall margins can hide one product line collapsing while another grows, and a few customers on special pricing can make the average misleading. Breaking gross margin down by product, customer and channel shows where the profit really comes from and which parts of the business the price is really paying for.

                ## Milestones
                1. Gross margin by product line or service for each year.
                2. Margin for the top twenty customers compared with the average.
                3. The effect of input cost and price changes over the period separated.
                4. Loss-making products or customers listed with their revenue.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Gross margin is analysed by product and top customers for each year, with price and cost effects separated and loss-makers listed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request cost of sales by product line for three years"
                - "Calculate gross margin by product and top customer"
                - "Separate the effects of price increases and input cost changes"
                - "List every loss-making product or customer with its revenue"
            - name: Cash conversion and maintenance capex review
              description: |-
                ## Purpose
                EBITDA is not cash, and a business that needs heavy spending just to stand still is worth less than its earnings suggest. Measuring how much EBITDA turns into operating cash, and splitting historical capex into maintenance and growth with evidence, gives the free cash flow figure lenders and the model both rely on.

                ## Milestones
                1. Cash conversion calculated for each year as operating cash flow over EBITDA.
                2. Historical capex listed by project and classed as maintenance or growth.
                3. An asset age and condition view from the fixed asset register.
                4. Any deferred maintenance or underinvestment before the sale noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Cash conversion is calculated for each year and every material capex item is classed as maintenance or growth with its evidence."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate operating cash flow over EBITDA for each year"
                - "Request the capex listing by project and the fixed asset register"
                - "Class each material capex item as maintenance or growth"
                - "Note signs of deferred maintenance in the year before the sale"
            - name: Accounting policies and GAAP differences review
              description: |-
                ## Purpose
                Two companies with identical trading can report very different EBITDA depending on how they treat leases, development costs, revenue on long contracts or stock valuation. Reviewing the target's policies, and any change in them over the period, against the standards your own reporting uses avoids paying a multiple on an accounting choice.

                ## Milestones
                1. The target's key accounting policies listed from the audited accounts.
                2. Any policy changes during the diligence period identified with their effect.
                3. Differences from your fund's reporting basis, such as IFRS or local GAAP, noted.
                4. The EBITDA effect of each material difference quantified for the bridge.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The target's key policies and any changes are listed, with the EBITDA effect of each material difference from your reporting basis quantified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the key accounting policies from the audited accounts notes"
                - "Find any policy change made during the last three years"
                - "Note differences from the reporting basis your fund uses"
                - "Quantify the EBITDA effect of each material difference"
            - name: Setting the working capital peg
              description: |-
                ## Purpose
                The peg is the normal level of working capital the buyer expects to receive, and every unit of difference at completion moves the price one for one. Proposing a peg based on a trailing twelve month average, adjusted for seasonality and any pre-sale squeeze, and writing down the reasoning, gives you a position you can hold in the negotiation.

                ## Milestones
                1. Two or three peg methods calculated, such as twelve month average and seasonally adjusted average.
                2. Adjustments for pre-sale movements and one-off balances applied.
                3. A proposed peg and the reasoning written in one page.
                4. The peg agreed with the deal lead and passed to counsel for the purchase agreement.

                ## Notes
                Check that the peg and the completion accounts use exactly the same definition and accounting policies. Mismatched definitions cause more disputes than the number itself.
              priority: high
              deadlineOffsetDays: 40
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A proposed peg with its method, adjustments and one-page reasoning is agreed by the deal lead and sent to counsel."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate the peg on a twelve month average and a seasonal basis"
                - "Adjust for pre-sale movements and one-off balances"
                - "Write one page setting out the proposed peg and the reasoning"
                - "Agree the peg with the deal lead and send it to counsel"
            - name: Turning findings into a price adjustment
              description: |-
                ## Purpose
                Half a million of EBITDA adjustment is worth several million at the headline multiple, and sellers know it as well as you do. Translating each finding into its effect on enterprise value, net debt or the peg, and deciding which ones to take to the seller, turns diligence into a negotiating position rather than a report.

                ## Milestones
                1. Each material finding valued in EBITDA, net debt or working capital terms.
                2. The equity price effect of each calculated at the deal multiple or one for one.
                3. Findings sorted into price, structure, protection or accept.
                4. A revised price position agreed internally with its supporting schedule.

                ## Notes
                Lead with the two or three findings that are best evidenced. A long list of small points invites the seller to argue all of them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every material finding has a valued price effect and a response category, and a revised price position is agreed internally with its schedule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Value each material finding in EBITDA, debt or working capital terms"
                - "Calculate the equity price effect of each finding"
                - "Sort findings into price, structure, protection or accept"
                - "Agree the revised price position and schedule with the deal lead"
            - name: Locked box or completion accounts choice
              description: |-
                ## Purpose
                The purchase mechanism decides who carries the risk of trading between the balance sheet date and closing, and the diligence work needed differs sharply. Comparing a locked box, where leakage protection replaces a true-up, with completion accounts, where the peg and net debt are settled after closing, lets the deal team choose with the diligence findings in front of them.

                ## Milestones
                1. The strengths of the locked box balance sheet assessed: audited or reviewed, how recent.
                2. Expected trading and cash generation between box date and closing estimated.
                3. The diligence each mechanism needs listed, such as leakage review or completion accounts definitions.
                4. A recommendation written and the final choice recorded with counsel's input.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of the two mechanisms for this deal leads to a recorded choice, made with counsel's input."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check how recent and how reliable the proposed locked box balance sheet is"
                - "Estimate trading and cash generation between box date and closing"
                - "List the diligence each mechanism would require"
                - "Write a recommendation and record the final choice with counsel"
            - name: Run-rate and pro forma adjustments review
              description: |-
                ## Purpose
                Pro forma adjustments for a price rise, a new contract, a closed site or a recent bolt-on are where adjusted EBITDA most often outruns reality. Testing each one against signed contracts, actual months of trading and realistic timing decides whether it belongs in the price, in an earn-out or nowhere.

                ## Milestones
                1. Every run-rate and pro forma adjustment listed with management's rationale.
                2. Each adjustment tested against contracts, invoices or months of actual results.
                3. Adjustments rated proven, partly proven or forecast.
                4. Forecast-only adjustments moved out of the price and into the earn-out or upside case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each pro forma adjustment is rated proven, partly proven or forecast, and forecast-only items are excluded from the price EBITDA."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each pro forma adjustment with management's rationale"
                - "Ask for the contracts or invoices behind each run-rate claim"
                - "Rate each adjustment proven, partly proven or forecast"
                - "Move forecast-only items out of the price EBITDA"
            - name: Findings routed to purchase agreement protections
              description: |-
                ## Purpose
                Some findings cannot be priced because their size is uncertain: a tax enquiry, a customer dispute, an unclear holiday pay accrual. Agreeing with counsel which findings need a specific indemnity, an escrow, a warranty or a disclosure, and passing them over with values attached, keeps the risk where the diligence says it belongs.

                ## Milestones
                1. Findings marked protection in the log listed with their estimated range.
                2. Each one discussed with counsel and a proposed protection recorded.
                3. Any insurance policy exclusions that affect these findings noted with the insurance adviser.
                4. The final treatment of each finding recorded after signing.

                ## Notes
                Which protection fits is a legal and insurance decision. Your role is to give counsel a clear description and a value range for each issue.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every finding marked protection has a value range, a proposed protection agreed with counsel and its final treatment recorded after signing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List findings marked protection with an estimated value range"
                - "Brief counsel on each one in a short written note"
                - "Check with the insurance adviser which findings fall outside cover"
                - "Record the final treatment of each finding after signing"
            - name: Red flag or full scope diligence decision
              description: |-
                ## Purpose
                A full quality of earnings costs real money and weeks, and on a small or early-stage deal a red flag review of the riskiest areas may be enough to decide whether to go further. Choosing the depth deliberately, based on deal size, data quality and how much the price depends on adjustments, avoids both overspending and underlooking.

                ## Milestones
                1. Deal size, data quality and the share of EBITDA from adjustments written down.
                2. The areas a red flag review would cover and what it would leave out listed.
                3. Cost and timing for both options obtained.
                4. A recorded decision with the point at which you would upgrade to full scope.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice between red flag and full scope diligence, with costs for both and a named trigger for upgrading."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down deal size, data quality and reliance on adjustments"
                - "List what a red flag review would and would not cover"
                - "Get cost and timing for red flag and full scope options"
                - "Record the decision and the trigger for upgrading"
            - name: Buy-side review of a vendor QoE
              description: |-
                ## Purpose
                In auctions the seller often provides a vendor quality of earnings, which saves time but was written for the side that wants a higher price. Reading it critically, deciding what to rely on and scoping a buy-side top-up for the gaps gets you comfort faster without inheriting the seller's framing.

                ## Milestones
                1. The vendor report's scope, limitations and reliance terms summarised.
                2. Adjustments that favour the seller listed and challenged.
                3. Gaps in coverage identified against your checklist.
                4. A top-up scope agreed with your own adviser.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The vendor QoE's limitations and seller-favourable adjustments are documented and a buy-side top-up scope covering the gaps is agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Summarise the vendor report's scope, limitations and reliance terms"
                - "List adjustments that favour the seller and the evidence behind each"
                - "Compare the report's coverage against your diligence checklist"
                - "Agree a top-up scope for the gaps with your own adviser"
            - name: CFO walkthrough of the management accounts
              description: |-
                ## Purpose
                An early working session with the target's finance director tells you more about the quality of the numbers than a week of data room reading. Walking through how the month-end close works, who prepares what and where the judgements sit, with prepared questions, also starts the relationship with someone you may soon rely on every month.

                ## Milestones
                1. Questions prepared on the close process, key estimates, systems and finance team roles.
                2. The session held with notes taken against each question.
                3. Areas of weak control or heavy manual work identified.
                4. Follow-up requests added to the question log within a day.

                ## Notes
                Start from the **Meeting notes** template. Ask how long the month-end close takes; anything over three weeks usually means manual work and estimates worth testing.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A walkthrough with the target's finance director is held, notes are filed and follow-up requests are in the question log within a day."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Prepare questions on the close process, estimates and systems"
                - "Book a two-hour session with the target's finance director"
                - "Note where manual work and judgement sit in the close"
                - "Add follow-up requests to the question log the same day"
            - name: QoE draft report readout session
              description: |-
                ## Purpose
                The readout is the one meeting where the adviser presents and the deal team can challenge every number before it hardens into the final report. Reading the draft beforehand and arriving with written challenges, ranked by value, turns it into a working session rather than a presentation.

                ## Milestones
                1. The draft read in full at least a day before the readout.
                2. Written challenges ranked by value sent to the adviser in advance.
                3. Each challenge resolved, accepted or carried as an open point.
                4. Changes for the final report agreed with dates.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written challenges were sent before the readout and each one is recorded as resolved, accepted or open, with final report changes dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the full draft report a day before the readout"
                - "Ask the agent to draft a ranked list of challenges from your margin notes"
                - "Send the ranked challenges to the adviser in advance"
                - "Record each challenge as resolved, accepted or open"
            - name: Financial diligence summary for the deal team
              description: |-
                ## Purpose
                Whoever writes the committee paper needs the financial findings in a form they can use, not a hundred-page report. A short summary with the EBITDA bridge, the peg, net debt, the top findings and their price effect gives the memo writer and the partners the same agreed numbers.

                ## Milestones
                1. A summary of no more than four pages drafted.
                2. The bridge, peg and net debt figures matching the latest model.
                3. The top five findings with value and response.
                4. The summary reviewed by the deal lead and handed to the memo writer.
              priority: medium
              deadlineOffsetDays: 50
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A summary of four pages or fewer, with figures matching the model and the top five findings valued, is approved by the deal lead."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a four-page summary from the bridge and findings log"
                - "Check every figure against the latest model"
                - "Set out the top five findings with value and response"
                - "Hand the approved summary to whoever writes the committee paper"
            - name: Bring-down review before signing
              description: |-
                ## Purpose
                Weeks pass between the draft report and signing, and a lost customer or a missed month can change the picture. A bring-down review of the latest trading, working capital and net debt, with written confirmation from the adviser and management that nothing material has changed, closes the gap before the documents are signed.

                ## Milestones
                1. Latest month's results and balance sheet obtained.
                2. Trading, working capital and net debt compared with the diligence figures.
                3. Management's written confirmation of no material changes, or a list of those that occurred.
                4. Any change valued and taken to the deal lead before signing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated bring-down comparison of latest trading, working capital and net debt is on file before signing, with any change valued."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request the latest month's results and balance sheet"
                - "Compare trading, working capital and net debt with diligence figures"
                - "Ask management to confirm in writing what has changed"
                - "Value any change and take it to the deal lead"
            - name: Completion accounts and peg true-up
              description: |-
                ## Purpose
                On a completion accounts deal the price is not final until the closing balance sheet is agreed, often three to four months after closing. Preparing or reviewing the completion statement against the agreed definitions, and handling any dispute within the contract's timetable, is where the peg work either pays off or does not.

                ## Milestones
                1. The contract's definitions and timetable for completion accounts summarised.
                2. The closing balance sheet prepared or received.
                3. Working capital and net debt calculated against the peg on the agreed policies.
                4. Any disagreement notified within the contract deadline and the final adjustment recorded.

                ## Notes
                Diarise the response deadline the day the statement arrives. Missing it can mean accepting the other side's figures.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The completion statement is calculated on the agreed policies, any dispute is notified on time and the final price adjustment is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Summarise the completion accounts definitions and deadlines"
                - "Put the response deadline in the diary as soon as the statement arrives"
                - "Recalculate working capital and net debt against the peg"
                - "Record the final agreed price adjustment"
            - name: First financial diligence as a new associate
              description: |-
                ## Purpose
                New associates are often handed the financial workstream within weeks, with an adviser who has done fifty of these and a partner who wants answers yesterday. A structured first run, with a mentor check-in at each stage and a written debrief afterwards, builds the judgement that the next deal will depend on.

                ## Milestones
                1. A senior colleague agreed as your reviewer for the workstream.
                2. Your own versions of the bridge, peg and net debt built before reading the adviser's.
                3. Differences between your work and the adviser's discussed with the reviewer.
                4. A one-page debrief of what you would do differently written after signing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "On your first deal you have built your own bridge, peg and net debt, discussed the gaps with a reviewer and written a debrief."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a senior colleague to review your workstream at each stage"
                - "Build your own bridge before reading the adviser's version"
                - "Discuss differences with your reviewer and log what you missed @recurring(monthly:28)"
                - "Write a one-page debrief within two weeks of signing"
            - name: Diligence on cash-basis and owner-run books
              description: |-
                ## Purpose
                Smaller founder-owned businesses often keep books on a cash basis, run personal costs through the company and have accounts prepared once a year by an outside bookkeeper. Rebuilding accrual-based earnings from bank statements, invoices and payroll records, and separating the owner's costs, is the only way to get a number worth pricing.

                ## Milestones
                1. The bookkeeping basis and who prepares the accounts confirmed.
                2. Accrual-based revenue and costs rebuilt for at least two years from source documents.
                3. Owner and family costs identified and adjusted with evidence.
                4. A market-rate replacement salary for the owner's role agreed and included.

                ## Notes
                Owner add-backs are only valid if the cost will genuinely stop. A spouse on the payroll who does real work needs replacing, not removing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two years of accrual-based earnings are rebuilt from source documents, with owner costs adjusted and a replacement salary included."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the bookkeeping basis and who prepares the year-end accounts"
                - "Rebuild accrual revenue from invoices and bank receipts"
                - "List owner and family costs with the evidence for each"
                - "Agree a market-rate replacement salary for the owner's role"
            - name: Carve-out standalone cost analysis
              description: |-
                ## Purpose
                Divisions bought from a larger group arrive without their own finance, IT, HR or premises, and their reported profit usually reflects an allocation of group costs rather than what they will spend alone. Estimating true standalone costs, one-off separation costs and the transitional service charges gives an EBITDA the business can actually achieve.

                ## Milestones
                1. Group allocations in the carve-out accounts listed by function.
                2. Standalone running costs estimated for each function.
                3. One-off separation costs and their timing estimated.
                4. Transitional service agreement charges and their end dates reflected in the bridge.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Standalone costs by function and one-off separation costs are estimated and the transitional service charges are reflected in the bridge."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List every group allocation in the carve-out accounts by function"
                - "Estimate standalone running costs for each function"
                - "Estimate one-off separation costs and when they fall"
                - "Reflect transitional service charges and end dates in the bridge"
            - name: Financial diligence on a loss-making or stretched target
              description: |-
                ## Purpose
                When a target is losing money or close to its banking limits, the question shifts from what it earns to how long its cash lasts and what it owes. A thirteen-week cash view, a full creditor and arrears picture and a check on any lender or supplier pressure tell you whether there is a business to buy or a rescue to fund.

                ## Milestones
                1. A thirteen-week cash flow obtained or built and its assumptions tested.
                2. Aged creditors, tax arrears and any overdue lender payments listed.
                3. Covenant positions and any waivers or reservations of rights noted.
                4. The minimum cash injection needed at closing estimated.

                ## Notes
                In distressed situations, directors' duties and insolvency rules matter. Involve restructuring counsel early rather than relying on the diligence team's view.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A tested thirteen-week cash flow, a full arrears and covenant picture and an estimated closing cash need are documented."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request or build a thirteen-week cash flow"
                - "List aged creditors, tax arrears and overdue lender payments"
                - "Check covenant positions and any waiver letters"
                - "Estimate the cash injection the business needs at closing"
            - name: Cross-border target with local GAAP and currency
              description: |-
                ## Purpose
                Targets reporting in another currency and under local accounting rules add layers that can move EBITDA without any change in trading. Restating results in your reporting currency at consistent rates, mapping local GAAP differences and coordinating with local tax and accounting advisers keeps the numbers comparable with the rest of the deal.

                ## Milestones
                1. Results restated in the reporting currency at documented average and closing rates.
                2. Constant-currency growth shown alongside reported growth.
                3. Local GAAP differences mapped and quantified.
                4. Local advisers briefed with a clear scope and a contact on the deal team.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Results are restated at documented rates with constant-currency growth shown, local GAAP differences quantified and local advisers briefed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose and document the average and closing exchange rates"
                - "Restate results in the reporting currency with constant-currency growth"
                - "Map local GAAP differences and their EBITDA effect"
                - "Brief local accounting and tax advisers with a written scope"
            - name: Lean diligence on a small deal budget
              description: |-
                ## Purpose
                Below a certain deal size a full quality of earnings from a large firm eats a painful share of the equity, yet skipping diligence is how small acquisitions go wrong. Doing the core analyses yourself, and buying narrow help from a smaller accounting firm for proof of cash and tax, gets real comfort at a fraction of the cost.

                ## Milestones
                1. The analyses you will do yourself listed: bridge, revenue concentration, working capital, net debt.
                2. Two smaller accounting firms asked to quote for a narrow scope.
                3. A budget agreed and tracked against actual spend.
                4. A written note of the risks accepted by not doing a full QoE.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A split between work done yourself and a narrow external scope is recorded, with the budget tracked and accepted risks written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the analyses you can run yourself on this deal"
                - "Ask two smaller firms to quote for proof of cash and tax review"
                - "Set a diligence budget and track actual spend against it"
                - "Write down the risks you accept by not commissioning a full QoE"
            - name: Subscription revenue and cohort analysis
              description: |-
                ## Purpose
                For software and other subscription businesses, reported revenue lags the real story told by bookings, renewals and churn. Rebuilding annual recurring revenue from the contract list, and analysing cohorts by start date, shows whether growth comes from keeping and expanding customers or from replacing the ones that leave.

                ## Milestones
                1. Annual recurring revenue rebuilt from the contract or billing list and reconciled to revenue.
                2. Gross and net revenue retention calculated by annual cohort.
                3. Discounts, free periods and non-standard terms identified.
                4. Deferred revenue reconciled and its treatment in net debt noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Recurring revenue is rebuilt from contracts and reconciled to reported revenue, with retention by cohort and deferred revenue treatment documented."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request the full contract or billing list with start and end dates"
                - "Rebuild annual recurring revenue and reconcile it to reported revenue"
                - "Calculate gross and net retention by annual cohort"
                - "Note how deferred revenue is treated in the net debt schedule"
            - name: Inventory valuation and provisioning review
              description: |-
                ## Purpose
                In distribution and manufacturing targets, stock is often the largest balance sheet item and the easiest place for profit to hide, through generous costing, thin provisions or slow-moving lines carried at full value. Reviewing count results, ageing, costing method and provisions shows whether the margin is real and what the peg should include.

                ## Milestones
                1. The latest stock count results and any count differences obtained.
                2. Stock ageing by line with slow-moving and obsolete items identified.
                3. The costing method and overhead absorption reviewed for changes.
                4. A view on whether the provision is adequate, quantified for the bridge and peg.

                ## Notes
                Ask to attend or observe a count if timing allows. A count you watched is worth more than a count report.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Count results, ageing and costing are reviewed and any provision shortfall is quantified and carried into the bridge and the peg."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request the latest stock count results and count differences"
                - "Analyse stock ageing and flag slow-moving lines"
                - "Check whether the costing method or overhead absorption changed"
                - "Quantify any provision shortfall for the bridge and the peg"
            - name: Payroll, headcount and accrual testing
              description: |-
                ## Purpose
                People costs are usually the largest cost line, and they drift in ways the profit and loss hides: unfilled vacancies flattering margins, unpaid holiday building up, bonuses accrued too low, contractors who are really employees. Reconciling payroll to headcount and testing the accruals gives a run-rate cost the business will actually carry.

                ## Milestones
                1. Payroll reports reconciled to the profit and loss for a sample of months.
                2. A headcount schedule with joiners, leavers and open vacancies.
                3. Bonus, commission and holiday accruals tested against policy.
                4. Contractor arrangements listed for review by employment or tax advisers.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Payroll ties to the profit and loss for sampled months, vacancies and accruals are quantified, and contractor arrangements are passed to advisers."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Reconcile payroll reports to the profit and loss for six months"
                - "Build a headcount schedule including open vacancies"
                - "Test bonus, commission and holiday accruals against the written policies"
                - "Pass the contractor list to employment or tax advisers for review"
            - name: Coordinating tax diligence with financial findings
              description: |-
                ## Purpose
                Tax diligence is a specialist workstream with its own advisers, but its findings land in the same places as yours: net debt, the bridge and the purchase agreement. Making sure each tax exposure the advisers raise is valued, placed in the right schedule and sent to counsel avoids the gap where everyone assumes someone else has it.

                ## Milestones
                1. The tax advisers' findings listed with their estimated range.
                2. Each exposure placed in net debt, the bridge, the findings log or protections.
                3. Overlaps with financial findings, such as payroll or sales tax, reconciled.
                4. The combined list reviewed with the tax advisers and counsel.

                ## Notes
                You are coordinating, not advising. Whether an exposure is real and how large it is remains the tax adviser's call.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every tax finding has a value range and a placement in net debt, the bridge, the log or protections, reviewed with tax advisers and counsel."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the tax advisers' findings with their estimated ranges"
                - "Place each exposure in net debt, the bridge, the log or protections"
                - "Reconcile overlaps between tax and payroll or sales findings"
                - "Review the combined list with the tax advisers and counsel"
            - name: Forensic red flags and when to escalate
              description: |-
                ## Purpose
                Now and then diligence turns up something that looks less like a judgement call and more like a problem: invoices with no deliveries, round-sum journals at year end, a supplier that shares an address with a director. Knowing the warning signs, and when to stop and bring in forensic accountants and counsel, protects both the deal and you.

                ## Milestones
                1. A list of forensic warning signs relevant to the target's sector.
                2. Journal entries tested for round sums, weekend postings and unusual users.
                3. Related-party and supplier master data checked for overlaps with staff and directors.
                4. A written escalation rule agreed with the deal lead, naming who to call.

                ## Notes
                If you find something that may be fraud, stop asking management about it and escalate. Questions can prompt evidence to disappear.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Journal and supplier data tests are documented and a written escalation rule naming forensic and legal contacts is agreed with the deal lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a list of forensic warning signs for the target's sector"
                - "Request the full journal listing for the last two year ends"
                - "Check supplier bank details and addresses against staff and directors"
                - "Agree with the deal lead who to call if something looks wrong"
                - "Read one published accounting fraud case and add its warning signs to the list @recurring(monthly:9)"
---

# Financial Due Diligence (QoE)

This area is for the deal professional who has to stand behind the earnings number in a buyout, from the associate running a first quality of earnings workstream to the principal deciding how a finding moves the price. It starts with the foundations (scope, request list, historical pack, reconciliations, the QoE provider and the EBITDA bridge), then the machinery that keeps fieldwork moving, the analytical skills of revenue, margin, cash, working capital and net debt work, the decisions on the peg, the price and the purchase mechanism, the meetings and readouts worth preparing for, the situations that change the work such as carve-outs and cash-basis books, and finally specialist topics like subscription revenue, inventory and forensic red flags.

What repeats is a twice-weekly open items triage and a weekly adviser call during fieldwork, a Friday question log review, a monthly look at current trading and at your adjustment library, quarterly adviser scoring and lessons reviews, and a yearly refresh of your checklist. The Vendor, Risk register, Meeting notes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
