---
id: investment-banking.restructuring-advisory
name: Restructuring Advisory
description: "A restructuring adviser's working method: the debt stack and waterfall, a 13-week cash flow you trust, options and recovery analysis, creditor negotiations, court milestones and the new capital structure."
category: business
version: 1.0.0
tags: [investment-banking, restructuring-advisory, knowledge-worker, restructuring, distressed-debt, liquidity, creditor-negotiations, insolvency]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - risk-register
    - reading-queue
    - board-meeting
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Restructuring Advisory
          description: "Advising stressed or distressed companies or creditors: liquidity forecasts, options analysis, creditor negotiations, court processes and new capital structures."
          projects:
            - name: Restructuring toolkit map from waiver to court process
              description: |-
                ## Purpose
                Bankers who arrive from M&A tend to see restructuring as one big event, when in practice it is a ladder of tools: covenant waivers, amendments, standstills, consensual debt-for-equity deals, pre-packaged sales and court-supervised processes. A one-page map of that ladder, with what each tool needs in consent levels, time and cost, gives you the frame for every options paper you will write.

                ## Milestones
                1. A one-page map running from covenant waiver through amendment, standstill, consensual deal, pre-pack and full court process.
                2. Each tool annotated with the typical consent threshold, timeline range and cost drivers.
                3. Two or three jurisdictions' main court tools noted as examples, such as a US Chapter 11 or a UK restructuring plan.
                4. The map checked by a senior banker or restructuring lawyer who has run cases.

                ## Notes
                Consent thresholds and court tests vary by jurisdiction and by document, so treat the map as a frame for questions to counsel, never as a legal answer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page restructuring toolkit map with consent levels, timelines and cost drivers for each tool, reviewed by an experienced practitioner."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the restructuring tools you know from weakest to strongest on one page"
                - "Pull two past options papers from your group's precedent files"
                - "Note consent thresholds and timeline ranges beside each tool"
                - "Ask a senior restructuring banker to mark up the map"
            - name: Debt stack and priority waterfall table
              description: |-
                ## Purpose
                Every restructuring conversation starts with who is owed what, by which entity, with which security and in which order. A single table of every facility, bond, lease and hedge, with borrower, guarantors, collateral, ranking, maturity and amount outstanding, is the document you will reach for in every meeting, and errors in it flow straight into recovery numbers.

                ## Milestones
                1. Every debt instrument listed with borrower entity, guarantors, security package, ranking and maturity.
                2. Drawn amounts, accrued interest and undrawn commitments shown at a stated date.
                3. Hedging, leases and other debt-like items flagged separately with their treatment noted.
                4. Each figure tied to a source document or the latest compliance certificate.
                5. The table reconciled to the balance sheet with the differences explained.

                ## Notes
                Build it at entity level from the start. A consolidated stack hides structural subordination, which is often where the real fight sits.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An entity-level debt stack table reconciled to the balance sheet, with every figure sourced to a document and dated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the latest compliance certificate, facility agreements and bond terms"
                - "List every instrument with borrower, guarantors, security and ranking"
                - "Reconcile drawn amounts to the latest balance sheet"
                - "Draw the group structure chart showing where each debt sits"
            - name: Credit agreement key terms digest
              description: |-
                ## Purpose
                Restructuring options are bounded by what the documents allow: financial covenants and their cure rights, permitted debt and lien baskets, guarantor coverage tests, voting thresholds and events of default. A short digest of these terms per instrument, prepared with counsel, tells you which doors are open before anyone proposes a solution that the documents forbid.

                ## Milestones
                1. Financial covenants, test dates, definitions and equity cure rights summarised per facility.
                2. Debt, lien, investment and restricted payment baskets listed with current usage.
                3. Amendment voting thresholds noted, including all-lender and sacred rights.
                4. Events of default and cross-default links mapped across instruments.
                5. The digest reviewed by the deal lawyers for accuracy.

                ## Notes
                Your digest is a reading aid. Interpretation of any clause belongs to counsel, so record their view next to yours where they differ.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A key terms digest covering covenants, baskets, voting thresholds and defaults for every material instrument, reviewed by counsel."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the material instruments that need a terms digest"
                - "Summarise covenant definitions and test dates for the main facility"
                - "Map cross-default and cross-acceleration links between instruments"
                - "Send the digest to counsel with your open questions marked"
            - name: Conflict check across company and creditor relationships
              description: |-
                ## Purpose
                Restructuring conflicts are sharper than in M&A because your bank may lend to the company, trade its bonds or advise a creditor in another case. Clearing conflicts before the first substantive call, and recording what was cleared and with what conditions, protects the mandate from later challenge, including in court fee applications.

                ## Milestones
                1. The bank's lending, trading and advisory relationships with the company and known creditors checked.
                2. Any conflicts disclosed to compliance with a proposed handling plan.
                3. Clearance received in writing with any conditions or information barriers noted.
                4. A disclosure note prepared in case a court or creditor committee asks for it.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Written conflict clearance for the mandate, with any conditions and disclosures recorded before the first substantive client call."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Submit the company and known creditor names to the conflicts team"
                - "Ask the trading and lending desks whether they hold positions or exposures"
                - "Record the clearance and any conditions in the mandate file"
                - "Draft a short disclosure note for a possible court or committee request"
            - name: Restructuring engagement letter and fee terms
              description: |-
                ## Purpose
                Fees on a restructuring usually combine a monthly retainer with a completion fee, sometimes a financing fee, and in court processes they may need approval and detailed time records. Understanding these terms before you start helps you keep the records the engagement demands and explain the fee to a sceptical creditor group.

                ## Milestones
                1. The structure of monthly, completion and financing fees summarised in plain words.
                2. Credits, caps and the definition of a completed restructuring noted.
                3. Any time recording or fee application obligations listed with their format.
                4. Indemnity and expense reimbursement terms understood and flagged to the team.

                ## Notes
                In some court processes advisers file time records, so start logging hours in the required format from day one rather than reconstructing them later.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the engagement's fee structure, completion definition and record-keeping duties, shared with the deal team."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the signed engagement letter's fee and indemnity sections"
                - "Write a one-page summary of how each fee is earned"
                - "List the time recording format the engagement requires"
                - "Set up your hours log in that format on day one"
            - name: First 13-week cash flow forecast build
              description: |-
                ## Purpose
                The 13-week direct cash flow is the instrument panel of every restructuring: lenders ask for it first, boards rely on it for solvency decisions and courts often see it. Building the first version with the company's treasury team, from receipts and disbursements rather than from the profit and loss, tells everyone when the cash runs out and what decisions must happen before then.

                ## Milestones
                1. Weekly receipts and disbursements forecast by line for 13 weeks, starting from actual opening bank balances.
                2. Key assumptions for collections, supplier payments, payroll, rent, tax and debt service written down.
                3. Available liquidity shown after restricted cash and minimum operating cash.
                4. The forecast reviewed line by line with the company's treasurer or finance director.
                5. Week one actuals tested against the forecast and differences explained.

                ## Notes
                Start from bank balances, not accounts. Cash trapped in subsidiaries, in other currencies or behind cash pooling rules is not liquidity until it can move.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 13-week direct cash flow forecast built from opening bank balances, with written assumptions, reviewed with the company's finance lead."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask treasury for opening bank balances by account and entity"
                - "Build receipts and disbursements lines for the next 13 weeks"
                - "Write the assumption behind every material line in one sentence"
                - "Walk the forecast through with the treasurer line by line"
            - name: Liquidity runway and minimum cash threshold
              description: |-
                ## Purpose
                Knowing the week cash goes below the level needed to run the business is the single most important number in a distressed situation, because every option needs time. Agreeing a minimum operating cash level with management and showing the runway under base and downside cases tells the board how many weeks they have to choose.

                ## Milestones
                1. A minimum operating cash level agreed with management, with the reasoning written down.
                2. The runway in weeks shown under base and downside cases.
                3. The three biggest swing factors identified with their cash impact.
                4. Decision dates set backwards from the runway, such as when to approach lenders.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written runway in weeks under base and downside cases, with an agreed minimum cash level and a dated decision timeline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the minimum operating cash level with the finance director"
                - "Run a downside case on collections and supplier terms"
                - "Mark the week each case breaches the minimum cash level"
                - "Work back from that week to the latest dates for each decision"
            - name: Stakeholder map with interests and pressure points
              description: |-
                ## Purpose
                A restructuring is a negotiation among groups who want different things: senior lenders want par and control, bondholders want a seat, suppliers want payment, pension trustees want funding, shareholders want to keep something. Mapping each group's position, likely advisers, blocking power and what would move them lets you sequence conversations instead of reacting to them.

                ## Milestones
                1. Every stakeholder group listed: lenders, bondholders, hedge counterparties, suppliers, landlords, employees, pension trustees, tax authority and shareholders.
                2. Each group's economic position, blocking rights and likely priorities noted.
                3. Known advisers to each group recorded.
                4. A proposed order of engagement agreed with the senior banker.

                ## Notes
                Revisit the map when debt trades. A new holder that bought at a deep discount has different incentives from the bank that lent at par.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A stakeholder map covering every creditor and interest group, with positions, blocking rights and an agreed order of engagement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every group with a claim on or interest in the company"
                - "Note each group's blocking rights from the documents digest"
                - "Propose an order of engagement and discuss it with the senior banker"
                - "Refresh the stakeholder map after any change in debt holders @recurring(quarterly)"
            - name: Distress diagnosis of operational versus financial causes
              description: |-
                ## Purpose
                Companies with a sound business and too much debt need a balance sheet fix; those with a broken business model need operational change first, or a new capital structure will fail again. Writing a short diagnosis that separates the two, with evidence from margins, market share and cash conversion, shapes every option you later present.

                ## Milestones
                1. Three to five years of revenue, margin and cash conversion trends laid out.
                2. Causes of distress sorted into operational, financial and one-off, with evidence for each.
                3. A view on the earnings level the business can sustain, agreed with management or the CRO.
                4. A two-page diagnosis note circulated to the deal team.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page diagnosis separating operational and financial causes of distress, with a stated sustainable earnings view."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Chart five years of revenue, margin and cash conversion"
                - "Sort each cause of distress into operational, financial or one-off"
                - "Ask the agent to draft the diagnosis note from your sorted list"
                - "Test the sustainable earnings view with the CRO or finance director"
            - name: Restructuring adviser roster and role boundaries
              description: |-
                ## Purpose
                Distressed companies quickly gather a chief restructuring officer, legal counsel, accountants on the business review, and separate advisers to each creditor group, with overlapping scopes and a fee bill the creditors watch closely. A roster that states who does what, who pays and where your bank's scope stops avoids duplicated work and turf disputes in front of the client.

                ## Milestones
                1. A roster of every adviser on the company and creditor sides, with scope and fee payer.
                2. Overlaps between the financial adviser, CRO and accountants resolved in writing.
                3. A contact sheet and distribution list for each side agreed.
                4. Information sharing protocols with creditor advisers confirmed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written adviser roster with scopes, fee payers and agreed boundaries between the bank, the CRO and the accountants."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every adviser on the company and creditor sides with their scope"
                - "Mark overlaps between your scope and the CRO's"
                - "Agree the boundary in writing with the CRO's team"
                - "Circulate the contact sheet and distribution lists"
            - name: Weekly 13-week cash flow roll-forward and variance report
              description: |-
                ## Purpose
                Forecasts that are not rolled forward go stale within a fortnight, and lenders lose trust quickly when variances go unexplained. Rolling the forecast each week, comparing actuals against the prior forecast and explaining every material variance keeps the board, the lenders and your own options work on the same numbers.

                ## Milestones
                1. A weekly routine for receiving actuals from treasury by a set day.
                2. Actual versus forecast variances shown by line, with thresholds for explanation.
                3. A rolled 13-week forecast issued every week with changes to assumptions listed.
                4. A variance commentary of no more than one page sent to the agreed distribution.

                ## Notes
                Start from the **Metrics log** template to keep the weekly closing liquidity figure and forecast accuracy in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rolled 13-week forecast and one-page variance commentary issued every week, with forecast accuracy logged for each week."
                cadence: rolling
              tasks:
                - "Agree the day treasury sends weekly bank actuals"
                - "Roll the 13-week forecast forward with the latest actuals @recurring(weekly:mon)"
                - "Send the one-page variance commentary to the agreed distribution @recurring(weekly:tue)"
                - "Log closing liquidity and forecast accuracy for the week"
            - name: Covenant compliance and headroom tracker
              description: |-
                ## Purpose
                Most stressed companies reach the restructuring table through a covenant breach, a missed coupon or a maturity they cannot refinance. Tracking headroom against each financial covenant monthly, and forecasting the next two test dates, gives the company time to seek a waiver on its own terms rather than in default.

                ## Milestones
                1. Each financial covenant calculated on the documents' definitions, not management's.
                2. Headroom shown in cash and earnings terms for current and next two test dates.
                3. Equity cure capacity and deadlines noted.
                4. A breach warning raised at least one test period ahead whenever headroom is forecast below the agreed threshold.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly covenant headroom for current and next two test dates, calculated on document definitions, with any forecast breach flagged a period ahead."
                cadence: rolling
              tasks:
                - "Rebuild each covenant calculation from the document definitions"
                - "Update headroom for current and next two test dates @recurring(monthly:12)"
                - "Check the compliance certificate against your calculation before delivery @recurring(quarterly)"
                - "Agree the headroom threshold that triggers a warning to the board"
            - name: Creditor communications and cleansing date log
              description: |-
                ## Purpose
                Creditors who receive private information become restricted from trading, and they usually agree to that only for a limited period, after which the company must publish the material information so they are cleansed. Keeping one log of who has signed which confidentiality agreement, what they were shown and when each restriction ends prevents a missed cleansing date from souring the negotiation.

                ## Milestones
                1. A log of every creditor or adviser under a confidentiality agreement, with restriction end dates.
                2. Each private disclosure recorded with date and materials shared.
                3. A draft cleansing statement maintained alongside the log.
                4. Compliance and counsel copied on the log and any changes.

                ## Notes
                Inside information rules are your firm's compliance team's territory. Keep the log factual and route every question about what must be disclosed to counsel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current log of restricted creditors, materials shared and cleansing dates, reviewed weekly and shared with compliance and counsel."
                cadence: rolling
              tasks:
                - "Create the log with columns for party, agreement date, materials and end date"
                - "Enter every confidentiality agreement signed so far"
                - "Review upcoming restriction end dates with counsel @recurring(weekly:thu)"
                - "Keep a draft cleansing statement updated as materials are shared"
            - name: Supplier terms and trade credit watch
              description: |-
                ## Purpose
                Liquidity often fails through suppliers rather than lenders: a credit insurer cuts limits, key vendors move to cash on delivery and working capital disappears in weeks. A weekly watch on supplier terms, credit insurance limits and critical vendor behaviour gives early warning and feeds straight into the cash flow forecast.

                ## Milestones
                1. A list of the twenty most critical suppliers with current terms and credit insurance cover.
                2. Weekly changes in terms, limits or behaviour recorded.
                3. The cash impact of each change fed into the 13-week forecast.
                4. A plan agreed with management for the suppliers who cannot be replaced quickly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly updated critical supplier list with terms and insurance limits, and every change reflected in the cash flow forecast."
                cadence: rolling
              tasks:
                - "Ask procurement for the twenty most critical suppliers and their terms"
                - "Record credit insurance limits on each where known"
                - "Update the supplier watch with procurement's latest changes @recurring(weekly:wed)"
                - "Agree a fallback plan for suppliers that cannot be replaced quickly"
            - name: Weekly lender update call and minutes
              description: |-
                ## Purpose
                Lenders who hear nothing assume the worst, and lenders who hear different things from different people stop trusting management. A fixed weekly call with the lender group or its advisers, with a set agenda and written minutes, keeps the relationship steady while the options work is done.

                ## Milestones
                1. A standing weekly call agreed with the lenders' advisers.
                2. A fixed agenda covering liquidity, trading, workstream progress and open requests.
                3. Minutes and an action list circulated within a day of each call.
                4. Information requests from lenders tracked to closure.

                ## Notes
                Start from the **Meeting notes** template. Agree with counsel what may be said on the call to anyone who is not restricted.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A weekly lender call held to a fixed agenda, with minutes and open requests circulated within one working day each week."
                cadence: rolling
              tasks:
                - "Propose a standing weekly slot to the lenders' advisers"
                - "Draft the fixed agenda and agree it with the client"
                - "Circulate minutes and the request tracker after each call @recurring(weekly:tue)"
                - "Close out lender information requests older than two weeks"
            - name: Debt trading price and holder movement monitor
              description: |-
                ## Purpose
                Where a company's loans or bonds trade, the price tells you what the market thinks recoveries will be, and changes in who holds the paper change the negotiation. Tracking quoted prices and known holder movements each week shows when a distressed investor is building a blocking stake or when the market has stopped believing the plan.

                ## Milestones
                1. Quoted prices for each traded instrument recorded weekly from the firm's market data sources.
                2. Implied recovery from prices compared with your own recovery analysis.
                3. Known or reported changes in holders noted with the source.
                4. Significant moves summarised for the senior banker.

                ## Notes
                Use only information your firm's compliance rules allow on the deal side. Holder information from trading desks may be off limits.
              priority: low
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A weekly record of instrument prices and reported holder changes, compared with your recovery analysis, for the life of the mandate."
                cadence: rolling
              tasks:
                - "Confirm with compliance which price and holder sources you may use"
                - "Record quoted prices for each traded instrument @recurring(weekly:fri)"
                - "Compare implied recoveries with your own waterfall"
                - "Flag any move of more than five points to the senior banker"
            - name: Restructuring milestone and long-stop date tracker
              description: |-
                ## Purpose
                Standstills, lock-ups, waivers and court timetables all carry milestone and long-stop dates, and missing one can let creditors walk away or terminate support. One tracker of every dated obligation, with owners and the consequence of missing it, is the safety net the whole deal team relies on.

                ## Milestones
                1. Every dated obligation from standstills, waivers, lock-ups and court orders listed.
                2. Each date assigned an owner and a consequence of missing it.
                3. Warning dates set two weeks before each deadline.
                4. The tracker reviewed at each weekly internal meeting.

                ## Notes
                Start from the **Risk register** template, with each long-stop date as a risk row and its consequence as the impact.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker of every dated restructuring obligation with owners, consequences and warnings, reviewed weekly with no missed deadline."
                cadence: rolling
              tasks:
                - "Extract every dated obligation from the signed documents"
                - "Assign an owner and a consequence to each date"
                - "Review dates falling in the next three weeks with the team @recurring(weekly:wed)"
                - "Add new dates the day any document is signed or any order is made"
            - name: Distressed situations watchlist for origination
              description: |-
                ## Purpose
                Mandates in restructuring go to the advisers who saw the problem coming and called early with something useful to say. A watchlist of companies showing stress, built from falling bond prices, rating actions, near-dated maturities and covenant warnings, gives your seniors a reason to call and you a head start on the analysis.

                ## Milestones
                1. Screening criteria agreed with your seniors: price, rating, maturity and covenant signals.
                2. A watchlist of fifteen to thirty names with a one-line reason for each.
                3. A short profile prepared on the three most likely mandates.
                4. Outcomes recorded: called, pitched, mandated or passed.
              priority: low
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A maintained watchlist of stressed companies with reasons and outcomes, refreshed monthly and reviewed with seniors each quarter."
                cadence: rolling
              tasks:
                - "Agree the screening signals with a senior banker"
                - "Build the first watchlist of fifteen names from public data"
                - "Refresh the watchlist with new signals and drop resolved names @recurring(monthly:20)"
                - "Review the watchlist and outcomes with your seniors @recurring(quarterly)"
            - name: Professional fee budget and burn tracker
              description: |-
                ## Purpose
                Creditors and courts watch restructuring fees closely, and a company paying several advisers can burn through a meaningful share of its liquidity in professional costs. A budget per adviser, with monthly actuals and accruals fed into the cash flow, keeps fees visible and avoids an awkward conversation when the bill arrives.

                ## Milestones
                1. A fee budget per adviser agreed with the company, covering both sides' advisers it pays.
                2. Monthly invoiced and accrued fees recorded against budget.
                3. Professional fees shown as a separate line in the 13-week forecast.
                4. Overruns above an agreed threshold raised with the adviser and the client.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly fee tracker showing invoiced and accrued fees per adviser against budget, reflected in the cash flow forecast."
                cadence: rolling
              tasks:
                - "Ask each adviser for a fee estimate to the next milestone"
                - "Build the budget table with one row per adviser"
                - "Record invoiced and accrued fees against budget @recurring(monthly:25)"
                - "Check that the forecast's fee line matches the tracker"
            - name: Restructuring cases and market practice reading queue
              description: |-
                ## Purpose
                Court decisions, new procedures and creative transactions keep rewriting what creditors expect, so restructuring practice shifts every year. A steady reading queue of case write-ups, practitioner notes and post-mortems on landmark restructurings keeps your judgement current and gives you examples to cite in options papers.

                ## Milestones
                1. A queue of ten readings covering landmark cases, recent decisions and procedural changes.
                2. A one-paragraph note on each reading, recording what it means for advisers.
                3. Two examples from your reading used in a real options paper or pitch.
                4. The queue refreshed each month with new material.

                ## Notes
                Start from the **Reading queue** template. Law firm client briefings are a good free source; check the date before relying on any of them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one restructuring reading noted each month, with ten notes on file after the first year."
                cadence: rolling
              tasks:
                - "List ten landmark restructurings or decisions to read about"
                - "Subscribe to two law firm restructuring briefings"
                - "Read one item and write a paragraph on what it means for advisers @recurring(monthly:8)"
                - "Use one example from the queue in your next options paper"
            - name: Recovery analysis by creditor class
              description: |-
                ## Purpose
                Recovery analysis is the arithmetic of the negotiation: what each class would receive under each option, given ranking, security, guarantees and the value available at each entity. Building it carefully, with sources for every claim and value, lets you show each group why a proposal is or is not better than their alternative.

                ## Milestones
                1. Claims by class and entity taken from the debt stack table, including accrued interest and fees.
                2. Distributable value at each entity under at least two valuation cases.
                3. Recoveries in amount and percentage per class under each option.
                4. Intercompany claims and guarantee recoveries handled explicitly.
                5. The analysis checked line by line by a second banker.

                ## Notes
                The order of distribution and treatment of particular claims are legal questions; agree the waterfall rules with counsel before you show any number to a creditor.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A recovery model by class and entity under at least two value cases and each option, with waterfall rules confirmed by counsel and checked by a second banker."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Link claims by class and entity from the debt stack table"
                - "Set up distributable value by entity for two value cases"
                - "Agree the waterfall order assumptions with counsel"
                - "Ask a second banker to check every link in the recovery model"
            - name: Liquidation analysis against going-concern value
              description: |-
                ## Purpose
                Every creditor measures a proposal against what they would get if the company were liquidated, and many court tests ask the same question. A liquidation analysis that estimates realisations asset by asset, net of costs and priority claims, gives the floor that frames the whole negotiation.

                ## Milestones
                1. Realisation assumptions per asset class with sources, such as appraisals or market recovery ranges.
                2. Liquidation costs, wind-down cash burn and priority claims deducted.
                3. Net recoveries per class compared with the going-concern proposal.
                4. Key assumptions reviewed with the CRO or an independent appraiser.

                ## Notes
                Keep low and high cases. A single liquidation number invites argument; a range anchored to evidence ends it faster.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A liquidation analysis with low and high cases per asset class, net of costs and priority claims, compared with the going-concern proposal."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List assets by class with book values and any appraisals"
                - "Set low and high realisation rates for each asset class"
                - "Deduct wind-down costs and priority claims"
                - "Compare liquidation recoveries with the proposal by class"
            - name: Plan valuation for the restructured business
              description: |-
                ## Purpose
                The value of the business after restructuring decides who owns it, and creditors at different levels of the stack will argue for different numbers because their recoveries depend on it. A plan valuation built from the agreed business plan, with distressed-specific adjustments and a clear range, is the number your recovery analysis and equity split depend on.

                ## Milestones
                1. The business plan the valuation relies on agreed and dated.
                2. Valuation methods chosen and weighted, with reasons for any adjustment for the distressed position.
                3. A valuation range with the midpoint and sensitivities to key plan assumptions.
                4. The valuation's effect on the fulcrum security and equity split shown.
                5. The range reviewed by your group's valuation or committee process.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A plan valuation range with methods, weights and sensitivities, linked to the recovery model and reviewed through the bank's internal process."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm which version of the business plan the valuation uses"
                - "Set out valuation methods and the weight given to each"
                - "Run sensitivities on margin and growth assumptions"
                - "Link the valuation range into the recovery model"
            - name: Identifying the fulcrum security
              description: |-
                ## Purpose
                The fulcrum is the class whose claim is partly covered by the value of the business, and its holders usually end up owning the restructured company. Working out where the fulcrum sits under each valuation case tells you who will lead the negotiation, who is out of the money and which group to engage first.

                ## Milestones
                1. The fulcrum class identified at low, mid and high valuation points.
                2. The valuation at which the fulcrum moves up or down a class calculated.
                3. Holders of the fulcrum class, where known, mapped to the stakeholder map.
                4. A short note explaining the fulcrum to the client in plain words.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note identifying the fulcrum class at three valuation points, with the switch-over valuations calculated and shared with the client."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the recovery model at low, mid and high valuations"
                - "Find the valuation where the fulcrum moves to the next class"
                - "Link the fulcrum class to holders on the stakeholder map"
                - "Write a half-page client note explaining what the fulcrum means"
            - name: Sustainable debt capacity of the restructured company
              description: |-
                ## Purpose
                Leaving too much debt in a restructured company sets up a second restructuring within a few years, a pattern the market calls chapter twenty-two in the US. Sizing the debt the business can carry from its plan cash flows, under a downside case, with sensible interest cover and a credible refinancing path, gives a defensible target for how much debt must be cut.

                ## Milestones
                1. Cash flow available for debt service under base and downside plan cases.
                2. Debt sized against interest cover, net debt to earnings and amortisation tests.
                3. A target capital structure with the debt to be cut or converted shown.
                4. A comparison with recently restructured peers' debt levels.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A target post-restructuring debt quantum supported by base and downside cash flows and peer comparisons, recorded in the options paper."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Take free cash flow before debt service from the agreed plan"
                - "Size debt against interest cover under the downside case"
                - "Compare the result with recently restructured peers"
                - "Write the target capital structure into the options paper"
            - name: Restructuring term sheet drafting
              description: |-
                ## Purpose
                Proposals only become real once they are written down: what each class receives, what new money comes in on what terms, governance, management incentives and the implementation route. Drafting the commercial term sheet with counsel, cleanly and consistently with the recovery model, is often the most important document the bank produces in a case.

                ## Milestones
                1. Treatment of each class set out: reinstated, amended, converted, paid down or released.
                2. New money terms, ranking and fees stated.
                3. Equity allocation, governance rights and incentive pool described.
                4. Implementation route and conditions summarised.
                5. Every number tied back to the recovery model.

                ## Notes
                The bank drafts the commercial terms; legal drafting and enforceability belong to counsel. Version each turn and keep a change log of what moved and why.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A commercial term sheet covering every class, new money, governance and implementation, with each number reconciled to the recovery model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull the term sheet precedent your group used on a similar case"
                - "Draft the treatment of each class from the recovery model"
                - "Reconcile every number in the draft to the model"
                - "Send the draft to counsel with a change log"
            - name: Negotiating with an ad hoc creditor group
              description: |-
                ## Purpose
                Ad hoc groups of bondholders or lenders organise quickly, hire their own advisers and negotiate as a bloc, often holding enough to block or carry a vote. Learning how these groups form, how their advisers think and how offers and counter-offers move between the sides makes you useful in the room rather than a model operator in the back.

                ## Milestones
                1. Notes on how ad hoc groups form, set holding thresholds and appoint advisers.
                2. A record of how offers and counters moved on two past cases from your group.
                3. A list of negotiating moves the creditor side commonly uses and your client's responses.
                4. One negotiation session observed or supported, with a debrief written up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes on ad hoc group dynamics and two past negotiations, plus a debrief from a session you supported."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask a senior banker to walk you through a past creditor negotiation"
                - "Chart how offers and counters moved on two past cases"
                - "List the creditor-side moves you have seen and the responses used"
                - "Write a debrief after the next negotiation session you support"
            - name: Intercreditor agreement reading practice
              description: |-
                ## Purpose
                Intercreditor agreements decide who can enforce, who must stand still, how proceeds are shared and whether junior creditors can be released in a sale. Bankers who can read one alongside counsel spot the points that will decide the case, such as release mechanics or turnover provisions, long before the other side raises them.

                ## Milestones
                1. One intercreditor agreement read end to end with notes on ranking, standstill, enforcement and release.
                2. A one-page summary of the provisions most likely to matter in a restructuring.
                3. The summary reviewed by counsel and corrected.
                4. A personal checklist of intercreditor points to look for on future cases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A counsel-reviewed summary of one intercreditor agreement and a reusable checklist of provisions to check on future cases."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose an intercreditor agreement from a past case in the group"
                - "Note the ranking, standstill, enforcement and release provisions"
                - "Ask counsel to correct your one-page summary"
                - "Turn the corrections into a checklist for future cases"
            - name: Restructuring options paper for the board
              description: |-
                ## Purpose
                Boards need to compare their real choices side by side: a covenant reset, an amend-and-waive, a consensual debt-for-equity deal, a sale, a court-supervised process or a combination. An options paper scoring each against liquidity needs, recoveries, timetable, execution risk and stakeholder support gives directors a reasoned basis for their decision and a record that they considered the alternatives.

                ## Milestones
                1. Four to six realistic options described with what each would require.
                2. Each option scored on liquidity, recoveries, timetable, cost, execution risk and support.
                3. The preferred route and a fallback recommended with reasons.
                4. Legal and directors' duty implications of each option reviewed by counsel.
                5. The paper presented to the board and its decision minuted.

                ## Notes
                A board will rarely pick the bank's preferred route on first reading. Show the fallback in full; it is often the one that happens.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board options paper scoring four to six options on stated criteria, with a recommendation and fallback, presented and its decision minuted."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List the realistic options and what each would need to work"
                - "Score each option on the agreed criteria in one table"
                - "Ask the agent to draft the executive summary from the scoring table"
                - "Send the paper to counsel for directors' duty comments before the board"
            - name: Standstill and covenant waiver request package
              description: |-
                ## Purpose
                A standstill buys time: lenders agree not to enforce while the company and its advisers develop a plan, usually in return for information, milestones and fees. A clear request package, with the liquidity position, the reason for the request, the proposed period and what lenders receive, raises the chance of a quick yes.

                ## Milestones
                1. A short request deck explaining the position, the cash flow and the time needed.
                2. Proposed standstill period, milestones and information undertakings set out.
                3. Proposed waiver or amendment fees benchmarked against recent precedents.
                4. Consent threshold and the likely holdouts identified.
                5. The package agreed with counsel and the client before it goes out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A standstill and waiver request package with period, milestones, undertakings and fee proposal, approved by the client and counsel and sent to lenders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the one-page reason for the request with the runway chart"
                - "Propose the standstill period and milestones from the decision timeline"
                - "Benchmark waiver fees against recent precedents in your group's files"
                - "Identify the lenders needed to reach the consent threshold"
            - name: Debt-for-equity swap design
              description: |-
                ## Purpose
                Converting debt into equity cuts the debt burden and hands control to creditors, but the design questions are many: how much debt converts, how equity is split between classes, what existing shareholders keep and how dilution from new money and incentives is shared. Laying out the alternatives with their ownership outcomes lets the negotiation focus on the real trade-offs.

                ## Milestones
                1. Alternative conversion amounts shown with resulting debt levels and equity splits.
                2. Ownership tables after conversion, new money and the management incentive pool.
                3. Treatment of existing shareholders under each alternative set out.
                4. Governance consequences, such as board seats and minority protections, listed.
                5. Tax and regulatory questions raised with the relevant professionals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A debt-for-equity design paper showing at least three conversion alternatives with ownership tables and governance consequences."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Model three conversion amounts and resulting debt levels"
                - "Build the ownership table after new money and the incentive pool"
                - "List governance rights that come with each ownership outcome"
                - "Send tax and regulatory questions to the company's advisers"
            - name: Rescue and new money financing options
              description: |-
                ## Purpose
                Most restructurings need fresh cash, either to bridge the negotiation or to fund the plan, and whoever provides it usually gains priority, fees and influence. Comparing who could provide new money, whether existing lenders, a new lender or a court-approved financing, and on what terms, helps the client keep control of the process.

                ## Milestones
                1. The new money need sized from the cash flow, with a buffer.
                2. Possible sources listed: existing lenders, new lenders, shareholders and court-approved financing.
                3. Indicative terms compared: ranking, pricing, fees, conditions and control rights.
                4. A preferred source recommended with the process to approach it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A new money options paper sizing the need and comparing at least three sources on ranking, cost and control, with a recommendation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Size the new money need from the downside cash flow"
                - "List possible providers and why each might lend"
                - "Compare indicative terms in one table"
                - "Recommend a source and outline the approach sequence"
            - name: Distressed sale track alongside the restructuring
              description: |-
                ## Purpose
                Selling the business or its best assets can deliver more than a restructuring, or set a value that disciplines the negotiation, and some cases run both in parallel. Designing a sale track built for distress, whether accelerated, pre-packaged or court-supervised, with credit bidding rules understood, gives the client a real alternative.

                ## Milestones
                1. The case for a parallel sale track written down with what it would show.
                2. Likely buyers for the whole and for key assets listed, including distressed investors.
                3. The sale route compared: accelerated private sale, pre-pack or court-supervised auction.
                4. Credit bid and stalking horse questions raised with counsel.
                5. A timetable that fits within the liquidity runway.

                ## Notes
                Run the sale track with the M&A team if your bank has one; this project is about fitting it to the restructuring timetable and creditor rights.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on whether to run a parallel sale track, with route, buyer list and a timetable inside the liquidity runway."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the case for and against a parallel sale track"
                - "List likely buyers for the whole and for key assets"
                - "Compare the three sale routes against the runway"
                - "Raise credit bid and stalking horse questions with counsel"
            - name: Choosing the court process and jurisdiction
              description: |-
                ## Purpose
                Where a consensual deal cannot reach every creditor, a court process can bind holdouts, but the tools, tests, costs and publicity differ by country and by process. Working with counsel to compare the available routes, including whether the group can use another jurisdiction's procedure, lets the board choose with eyes open.

                ## Milestones
                1. Available processes listed with counsel, such as a scheme, a restructuring plan or a reorganisation filing.
                2. Each compared on voting thresholds, cram-down ability, moratorium, cost, timetable and publicity.
                3. Recognition needs in other countries where assets or creditors sit identified.
                4. A recommended route recorded with counsel's reasoning.

                ## Notes
                This is counsel's call to advise on. Your role is to show the commercial consequences of each route: timing, cost, recoveries and trading impact.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of available court processes on agreed criteria, with counsel's recommended route and reasoning recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask counsel for the list of processes available to the group"
                - "Build a comparison table on thresholds, cost, time and publicity"
                - "Model the cash cost and trading impact of each route"
                - "Record the chosen route and counsel's reasoning in the file"
            - name: Working capital and cash release programme
              description: |-
                ## Purpose
                Before asking creditors for anything, a company is expected to have squeezed its own balance sheet: collecting overdue receivables, reducing excess stock, selling idle assets and deferring non-essential capital spending. A tracked cash release programme with the CRO shows lenders that management is acting and often buys several weeks of runway.

                ## Milestones
                1. Cash release initiatives listed with owner, amount and timing.
                2. Initiatives fed into the 13-week forecast only once evidenced.
                3. Monthly progress reported against target.
                4. Released cash reconciled to bank balances.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A cash release tracker with owners and targets, reported monthly, with released cash reconciled to bank balances."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Run a workshop with the CRO to list cash release ideas"
                - "Assign an owner, amount and date to each initiative"
                - "Report released cash against target to the board @recurring(monthly:15)"
                - "Move initiatives into the forecast only once cash is evidenced"
            - name: Management incentive plan for the restructured company
              description: |-
                ## Purpose
                New owners of a restructured company need management to stay and perform, and creditors who become shareholders usually agree an equity incentive pool as part of the deal. Setting out the size of the pool, vesting and performance conditions in commercial terms, with remuneration advisers, removes a late sticking point from the negotiation.

                ## Milestones
                1. Precedent incentive pools from comparable restructurings gathered.
                2. Proposed pool size, vesting and performance conditions set out.
                3. Dilution of each creditor class's equity shown.
                4. Proposal agreed with the creditor group's advisers and the remuneration adviser.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An agreed incentive pool proposal with size, vesting and dilution by class, accepted by the creditor group's advisers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect incentive pool precedents from comparable restructurings"
                - "Draft the pool size, vesting and performance conditions"
                - "Show dilution to each class in the ownership table"
                - "Share the proposal with the creditor group's advisers"
            - name: Creditor presentation and cleansing day
              description: |-
                ## Purpose
                When negotiations with restricted creditors end, the company usually publishes the materials they saw so they can trade again, and that publication shapes the market's view of the deal. Preparing the creditor presentation with publication in mind, and coordinating the cleansing release with counsel and the company, avoids surprises on the day.

                ## Milestones
                1. The creditor presentation reviewed for what will become public.
                2. The cleansing statement drafted and agreed with counsel and the company.
                3. Release timing agreed with the restricted parties.
                4. Questions from the market after release logged and answered consistently.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cleansing release published on the agreed date with counsel's sign-off, with no restricted party left uncleansed after the deadline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark every slide in the creditor deck that will be published"
                - "Draft the cleansing statement and send it to counsel"
                - "Confirm the release time with each restricted party"
                - "Prepare a short question and answer sheet for after release"
            - name: Lock-up agreement signing
              description: |-
                ## Purpose
                A lock-up agreement commits supporting creditors to vote for and implement the deal, and the level of support it gathers often decides whether a court process will work. Running the signing day well, with accession tracking, support percentages and announcement wording ready, turns months of negotiation into binding support.

                ## Milestones
                1. The final term sheet attached and agreed with every signing party.
                2. An accession tracker showing support by class against the thresholds needed.
                3. Any early-bird or consent fees calculated and approved.
                4. The announcement agreed and released on signing.
                5. Post-signing accessions tracked to the deadline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed lock-up with support by class shown against thresholds, an announcement released and accessions tracked to the deadline."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build the accession tracker by class and threshold"
                - "Calculate any consent fees owed to early signers"
                - "Agree the announcement wording with the company and counsel"
                - "Chase outstanding accessions before the deadline"
            - name: Court hearing evidence and witness preparation
              description: |-
                ## Purpose
                At a sanction or confirmation hearing the court may examine the valuation, the comparison with the alternative and the fairness of the deal, and bankers can be asked for evidence. Preparing your analyses and any witness evidence well in advance, with counsel leading, protects both the deal and your credibility.

                ## Milestones
                1. The analyses the court will see listed and frozen in final versions.
                2. Every number in the evidence tied to a source and the model.
                3. Likely challenges from objecting creditors anticipated with responses prepared.
                4. Any banker giving evidence prepared by counsel.

                ## Notes
                Never change an analysis once it is filed without counsel's agreement. Keep a frozen copy of every filed version.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Frozen, sourced versions of every analysis filed with the court, with challenge responses prepared and any witness preparation completed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "List every bank analysis that will be filed or referred to"
                - "Freeze and archive the final version of each analysis"
                - "Draft responses to the challenges objecting creditors are likely to raise"
                - "Book witness preparation sessions with counsel"
            - name: Filing day readiness checklist
              description: |-
                ## Purpose
                If the company enters a court process, the first days decide whether it keeps trading: cash must stay accessible, suppliers and employees must be paid and customers reassured. A readiness checklist covering cash management, first-day relief requested by counsel, communications and the opening cash flow keeps the business running through the filing.

                ## Milestones
                1. The opening cash flow for the first weeks of the process prepared with counsel's assumptions.
                2. Cash management and access to accounts confirmed with the banks.
                3. Communications to employees, suppliers, customers and the market drafted.
                4. A command list of who calls whom on the day, with scripts.
                5. A post-filing review held after the first week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed filing readiness checklist with opening cash flow, communications and call list, and a first-week review recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Build the opening cash flow for the first weeks with counsel"
                - "Confirm cash access arrangements with the company's banks"
                - "Draft stakeholder messages for employees, suppliers and customers"
                - "Write the call list and scripts for filing day"
            - name: Board meeting on directors' duties in distress
              description: |-
                ## Purpose
                When a company is near insolvency, directors' duties can shift toward creditors, and boards need to show they considered their options with proper advice. Preparing a board meeting where counsel explains the duties and the bank presents liquidity and options, with careful minutes, gives directors the record they will need later.

                ## Milestones
                1. Board papers circulated in time: liquidity, runway and options summary.
                2. Counsel's briefing on directors' duties scheduled on the agenda.
                3. Decisions and the reasons for them minuted.
                4. Follow-up actions owned and dated.

                ## Notes
                Start from the **Board meeting** template. Duties are a legal matter for counsel; the bank's part is the financial information the board relies on.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A board meeting held with liquidity and options papers and counsel's duties briefing, with decisions, reasons and actions minuted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the agenda with the company secretary and counsel"
                - "Prepare the liquidity and options summary for the board pack"
                - "Check the minutes record the options considered and reasons"
                - "Track the board's follow-up actions to completion"
            - name: Restructuring effective date and closing
              description: |-
                ## Purpose
                On the effective date old debt is cancelled or amended, new securities are issued, new money is funded and governance changes take effect, often across many entities and jurisdictions at once. A step plan with funds flows and conditions tracked to closure turns the agreed deal into the new capital structure without a missed step.

                ## Milestones
                1. A step plan of every closing action in order, with owners.
                2. Funds flows for new money, fees and paydowns agreed and checked.
                3. Conditions to effectiveness tracked to satisfied or waived.
                4. New capital structure table issued after closing.
                5. Closing documents and final models archived.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The restructuring declared effective with all conditions satisfied or waived, funds flows reconciled and the new capital structure table issued."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft the step plan with counsel and the company"
                - "Check the funds flow against the term sheet and fee letters"
                - "Track each condition to effectiveness to closure"
                - "Issue the post-closing capital structure table to the client"
            - name: Company-side mandate as the debtor's adviser
              description: |-
                ## Purpose
                Advising the company means serving a board under pressure, a management team that may be replaced and a business that must keep trading, while creditors scrutinise every move. Writing down how you will run the mandate, with reporting rhythms, decision rights and the boundary between the bank and the CRO, keeps the work steady when the negotiation turns hostile.

                ## Milestones
                1. The client's decision makers and approval routes confirmed.
                2. A weekly reporting rhythm to the board or restructuring committee in place.
                3. Boundaries with the CRO and counsel agreed in writing.
                4. A plan for how and when the company's proposal will be put to creditors.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written mandate operating plan with decision rights, a weekly board update in place and an agreed path to the first creditor proposal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm who on the board or committee approves each decision"
                - "Agree the weekly update format with the restructuring committee"
                - "Send the weekly liquidity and progress note to the committee @recurring(weekly:fri)"
                - "Set a target date for presenting the first proposal to creditors"
            - name: Creditor-side mandate for an ad hoc group
              description: |-
                ## Purpose
                Advising a creditor group means representing holders with different entry prices, time horizons and appetites, who must stay together for their votes to count. A clear operating plan for the group, with how decisions are taken, how information flows to restricted and unrestricted members and how fees are paid, keeps the group coherent through a long negotiation.

                ## Milestones
                1. Group membership, holdings and restriction status recorded with counsel.
                2. Decision-making rules for the group agreed and written down.
                3. A regular group call with an agenda and summary in place.
                4. The group's recovery priorities ranked and confirmed.

                ## Notes
                Holdings shift. Confirm positions with the group's counsel before each key decision rather than relying on old numbers.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written group operating plan with membership, decision rules and ranked priorities, and a regular call running with summaries."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask counsel for the group's current holdings and restriction status"
                - "Draft decision rules for the group and circulate them"
                - "Hold the group call and send a summary after it @recurring(weekly:mon)"
                - "Rank the group's recovery priorities with its members"
            - name: First restructuring deal after moving from M&A
              description: |-
                ## Purpose
                Analysts and associates who move into restructuring from M&A or coverage find the models familiar but the questions new: liquidity rather than accretion, recoveries rather than premiums, documents rather than multiples. A deliberate first-90-days plan, with the key analyses to master and the people to learn from, shortens the time to being trusted with the waterfall.

                ## Milestones
                1. A list of the five analyses to master: cash flow, debt stack, covenants, recovery and liquidation.
                2. Each analysis built at least once on a live or past case.
                3. A mentor in the group agreed, with a fortnightly check-in.
                4. A self-assessment after 90 days shared with your staffer or mentor.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All five core restructuring analyses built at least once within 90 days, with a written self-assessment reviewed by a mentor."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the list of five analyses you need to master"
                - "Ask a senior associate in the group to mentor you"
                - "Build a recovery waterfall on a past case from the group's files"
                - "Write your 90-day self-assessment and share it with your mentor"
            - name: Associate ownership of the restructuring model
              description: |-
                ## Purpose
                On most restructuring teams the associate owns the integrated model that links cash flow, debt stack, recoveries and options, and its credibility is the team's credibility. A disciplined routine for version control, checks and change logs means every number shown to a creditor can be traced and defended.

                ## Milestones
                1. One master model with a version log and a named owner.
                2. Integrity checks for balances, recoveries summing to value and claims tying to the debt stack.
                3. A change log explaining each material change between versions.
                4. Analysts briefed on the model's structure and the rules for editing it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single master model with integrity checks passing and a change log for every version sent outside the team."
                cadence: rolling
              tasks:
                - "Set up the master model folder and version naming rules"
                - "Add integrity checks that recoveries sum to distributable value"
                - "Run the integrity checks before any version leaves the team @recurring(daily)"
                - "Brief the analysts on editing rules for the model"
            - name: Smaller company restructuring with a bank lender
              description: |-
                ## Purpose
                Mid-sized companies in distress usually face one or two bank lenders and possibly an asset-based lender, not a market of bondholders, and the bank's recovery or workout team drives the outcome. Running a proportionate process, with a lighter cash flow, a direct relationship with the workout officer and realistic fee levels, fits the situation better than a large-case playbook.

                ## Milestones
                1. The lender's workout team and its decision process identified.
                2. A proportionate monthly reporting pack agreed with the lender.
                3. Options narrowed to those the lender and owners can realistically support.
                4. A written plan agreed with the lender, such as a reset, an equity injection or an orderly sale.

                ## Notes
                Owner-managers often have personal guarantees at stake. Encourage them to take their own legal advice early.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written plan agreed with the bank lender, supported by a monthly reporting pack the lender has accepted."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find out who in the lender's workout team decides and how"
                - "Agree a monthly reporting pack format with the workout officer"
                - "Send the monthly reporting pack to the lender @recurring(monthly:5)"
                - "Narrow the options to those the lender and owners would support"
            - name: Cross-border restructuring with recognition proceedings
              description: |-
                ## Purpose
                Groups with entities, assets and creditors in several countries face competing insolvency regimes, and a plan approved in one court may need recognition in others to bind everyone. Mapping where value and creditors sit, and which recognition routes counsel recommends, prevents a deal from being undone by a creditor suing in a different country.

                ## Milestones
                1. A map of entities, assets and creditors by country.
                2. Counsel's view on the main process and the recognition routes needed recorded.
                3. Timetable effects of each recognition step built into the milestone tracker.
                4. Currency and trapped cash issues reflected in the cash flow.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A country map of entities, assets and creditors with counsel's recognition plan and its timing reflected in the milestone tracker."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Map entities, assets and creditors by country"
                - "Ask counsel which recognition routes each country needs"
                - "Add recognition steps to the milestone tracker"
                - "Model trapped cash and currency effects in the forecast"
            - name: Pension, lease and other non-debt claims analysis
              description: |-
                ## Purpose
                Financial debt is rarely the whole story: pension deficits, lease liabilities, litigation, tax and supplier claims can be as large and often have special treatment or a regulator with a voice. Quantifying these claims and understanding how they would be treated changes both the recovery analysis and who must be at the table.

                ## Milestones
                1. Each non-debt claim listed with amount, source and counterparty.
                2. Likely treatment of each under the chosen route noted with counsel's input.
                3. Any regulator or trustee whose agreement matters identified.
                4. The recovery model updated to include non-debt claims.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A schedule of non-debt claims with amounts, treatment and key counterparties, included in the recovery model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the finance team for pension, lease, litigation and tax exposures"
                - "Record each claim's amount and source document"
                - "Ask counsel how each claim would be treated"
                - "Add the non-debt claims to the recovery model"
            - name: Post-emergence review and re-default risk study
              description: |-
                ## Purpose
                Restructured companies that miss their plan in the first two years often end up back in negotiations, and advisers learn most from looking at what happened after closing. Reviewing performance against the plan, covenant headroom and liquidity after emergence, and comparing with your own past cases, sharpens the debt sizing on the next mandate.

                ## Milestones
                1. Plan versus actual results tracked for the restructured company where public or shared.
                2. Liquidity and covenant headroom after emergence recorded.
                3. Two or three past cases reviewed for re-default and its causes.
                4. Lessons for future debt sizing written into your personal playbook.

                ## Notes
                Use only information that is public or that you are permitted to keep after the mandate ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written review of post-emergence performance on at least two cases, with lessons for debt sizing recorded in your playbook."
                cadence: cyclic
              tasks:
                - "Choose two past restructurings with public results to follow"
                - "Compare results after emergence with the plan each quarter @recurring(quarterly)"
                - "Record the causes of any re-default you find"
                - "Write two debt sizing lessons into your personal playbook"
---

# Restructuring Advisory

This area is for the banker advising a stressed or distressed company, or the creditors lending to it, from the analyst on a first restructuring to the vice president who leads the negotiation. It starts with foundations (the restructuring toolkit, the debt stack and waterfall, the credit documents, conflicts, the first 13-week cash flow and the liquidity runway), moves into the operating rhythm of cash roll-forwards, covenant headroom, creditor and supplier watches and fee budgets, then the analytical skills of recovery, liquidation and plan valuation, the decisions on options, standstills, new money, sale tracks and court venue, the dated events from cleansing to the effective date, the different seats you might sit in, and finally specialist work on cross-border cases, non-debt claims and life after emergence.

What repeats is a weekly cash flow roll-forward and variance report, weekly lender, creditor and supplier watches, a weekly milestone and long-stop check, monthly covenant headroom, fee burn and watchlist reviews, and a quarterly refresh of the stakeholder map. The Metrics log, Meeting notes, Risk register, Reading queue and Board meeting templates pair with the projects that name them. Keep company names, creditor positions and live terms inside your firm's systems, and take every legal and insolvency question to counsel; these projects hold your own working method, not a client's confidential data. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
