---
id: fundraising-investors.acquisition-financing
name: Acquisition Financing
description: "Money to buy a business, raised in order: sources and uses, debt sized on cash flow you can defend, equity and seller financing, competing lender terms, a clean completion day and covenants kept afterwards."
category: business
version: 1.0.0
tags: [fundraising-investors, acquisition-financing, founder, small-business, enterprise, acquisition-debt, seller-financing, buyout]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - meeting-notes
    - metrics-log
    - risk-register
  pillars:
    - name: Fundraising & Investor Relations
      emoji: "💰"
      description: "Raising capital and keeping investors informed: rounds from pre-seed to growth, grants and debt, the data room, cap table, investor updates, board reporting and exits."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Acquisition Financing
          description: "Raising the equity and debt needed to buy another business, from lender packs to completing the financing alongside the deal."
          projects:
            - name: Acquisition financing goals and personal limits
              description: |-
                ## Purpose
                Buyers who start talking to lenders before deciding their own limits tend to accept whatever personal guarantee, borrowing level and equity cheque the first term sheet proposes. A one-page note of how much of your own money you will put in, how much debt the business can carry in a bad year and what personal security you refuse to give sets the boundaries every later conversation works within.

                ## Milestones
                1. A maximum personal or company equity contribution written as a single figure.
                2. A ceiling on total debt expressed as years of the target's free cash flow.
                3. Personal guarantees, a charge over your home and partner consent each marked as acceptable, negotiable or refused.
                4. The minimum ownership you want to keep after any equity partner is written down.
                5. Co-buyers or your board have agreed the same limits in writing.

                ## Notes
                Decide these before you see the target's numbers in detail. Once you want the deal, every limit starts to look flexible.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page note sets the equity cheque, debt ceiling, security limits and minimum ownership, agreed by every co-buyer or the board."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the most cash you could lose without harming your household or company"
                - "Decide which personal security you would refuse to give a lender"
                - "Set the minimum ownership stake you want after any equity partner"
                - "Share the limits note with co-buyers or the board for sign-off"
            - name: Sources and uses table for the acquisition
              description: |-
                ## Purpose
                Every lender and investor asks the same first question: how much money is needed in total, and where is each part coming from. A sources and uses table that includes the price, fees, transfer taxes, refinanced debt and a working capital buffer at completion prevents the most common surprise in acquisition finance, a funding gap discovered a fortnight before completion.

                ## Milestones
                1. Uses listed in full: purchase price, deferred consideration, transaction fees, taxes, debt being repaid and a working capital buffer.
                2. Sources listed: senior debt, seller note, equity from each party and any surplus cash on the target's balance sheet.
                3. Both columns balance to the same total with no unexplained plug figure.
                4. A version at the expected price and one at a higher price, so the gap is visible.
                5. The table checked by your accountant or financial adviser.

                ## Notes
                Fees on an acquisition often reach several percent of the price once lawyers, accountants, lender arrangement fees and valuations are added. Ask each adviser for a written estimate rather than guessing.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A balanced sources and uses table covering fees, taxes and a working capital buffer exists at two prices and has been reviewed by an adviser."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every cost of completing the deal beyond the headline price"
                - "Ask each adviser for a written fee estimate for the transaction"
                - "Build the sources and uses table at the expected price and one higher"
                - "Send the table to your accountant to check for missing items"
            - name: Lender-view earnings and free cash flow bridge
              description: |-
                ## Purpose
                Lenders size acquisition debt on the earnings they believe will survive the change of owner, not on the seller's adjusted figure in the sale memorandum. Rebuilding the target's earnings yourself, accepting only add-backs you could defend to a credit analyst and deducting the cost of replacing the owner, gives you the number the debt will actually be sized on.

                ## Milestones
                1. The seller's adjusted earnings reconciled to statutory or tax accounts for the last three years.
                2. Each add-back marked as accepted, partly accepted or rejected, with a reason.
                3. Replacement costs added: a salaried manager for the departing owner, lost related-party discounts, new insurance and software licences.
                4. Free cash flow after tax, capital spending and working capital movements calculated for each year.
                5. One defensible earnings figure and one free cash flow figure agreed with your adviser.

                ## Notes
                If you would not accept an add-back, a lender will not either. Treat the difference as a price point to negotiate, not as borrowing capacity.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written bridge runs from the seller's adjusted earnings to a lender-view earnings and free cash flow figure, with every add-back judged and reasoned."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Request three years of statutory and management accounts from the seller"
                - "Mark each seller add-back as accepted, partial or rejected with a reason"
                - "Add the cost of replacing the owner's role at a market salary"
                - "Calculate free cash flow after tax, capital spending and working capital"
                - "Ask the agent to draft a one-page note explaining the bridge for lenders"
            - name: Debt capacity at three borrowing levels
              description: |-
                ## Purpose
                How much the target can borrow is set by whether its cash flow can pay interest and repay principal in a poor year, not by how much a lender will offer in a good one. Modelling debt service at a cautious, a middle and a stretched level, each against a downside year, shows the borrowing you can carry without covenants tripping the first time sales dip.

                ## Milestones
                1. Debt service modelled at three borrowing levels, with interest at today's rate plus two percentage points.
                2. Each level tested against a downside case where earnings fall by a fifth.
                3. Debt service cover and years to repay shown for every scenario.
                4. A chosen borrowing level recorded with the reason it was preferred.
                5. Equity needed at the chosen level carried back into the sources and uses table.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model shows debt service cover in base and downside cases at three borrowing levels, and the chosen level is recorded in sources and uses."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a simple repayment schedule for three borrowing amounts"
                - "Add a downside case with earnings a fifth lower than the base"
                - "Calculate debt service cover for each year of each scenario"
                - "Write down which borrowing level you choose and why"
            - name: Buyer equity contribution plan
              description: |-
                ## Purpose
                Most acquisition lenders want to see the buyer's own money at risk, and they check where it came from. Planning the equity cheque early, from savings, company cash, co-investors or a seller rollover, and documenting each source avoids a late scramble and the awkward questions lenders ask when equity appears from nowhere.

                ## Milestones
                1. Each source of equity listed with amount, timing and any conditions attached.
                2. Evidence of funds collected: bank statements, board approvals or co-investor commitment letters.
                3. Any borrowed equity, such as a personal loan, disclosed to and discussed with the senior lender.
                4. Tax and pension consequences of drawing on retirement savings checked with a professional before anything moves.
                5. The final equity figure matching the sources and uses table.

                ## Notes
                Using retirement savings to buy a business is possible in some countries but carries real tax and personal risk. Take advice before committing them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every source of equity for the deal is documented with evidence of funds, and the total matches the sources and uses table."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every possible source for your equity cheque with amounts"
                - "Gather proof of funds for each source you intend to use"
                - "Ask the senior lender how they treat equity that is itself borrowed"
                - "Book a session with a tax adviser before touching retirement savings"
            - name: Acquisition finance adviser team
              description: |-
                ## Purpose
                A buyer financing a deal needs advisers on its own side: a lawyer who has negotiated facility agreements for borrowers, an accountant for financial due diligence and, on larger deals, a debt adviser who knows which lenders are active this year. Appointing them before the letter of intent, with fees and scope agreed, means lender documents get read properly instead of signed under time pressure.

                ## Milestones
                1. A finance lawyer appointed who has acted for borrowers on acquisition facilities.
                2. An accountant engaged for financial due diligence and the lender model.
                3. A decision recorded on whether a debt adviser or broker is worth their fee at this deal size.
                4. Engagement letters signed, with scope, fee caps and any success fee understood.
                5. A contact sheet for the whole team shared with everyone on it.

                ## Notes
                Start from the **Vendor** template, one page per adviser. Ask each for two borrower clients you can call.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Signed engagement letters with a finance lawyer and an accountant, and a recorded decision on a debt adviser, exist before the letter of intent is signed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask two recent acquirers which finance lawyers they used"
                - "Request fee quotes and scope letters from two lawyers and two accountants"
                - "Decide whether the deal size justifies a debt adviser's fee"
                - "Create one vendor page per adviser with fees and contacts"
            - name: Acquisition vehicle and holding company set-up
              description: |-
                ## Purpose
                Acquisition debt is usually borrowed by a new holding company that buys the target's shares, so that security, guarantees and tax sit where lenders and advisers expect them. Setting up the vehicle, its bank account and its board early means it can sign the purchase agreement and the facility on the same day without a last-minute incorporation.

                ## Milestones
                1. A structure chart agreed with your lawyer and tax adviser showing who owns the buying company and what it buys.
                2. The buying company incorporated, with directors and share capital in place.
                3. A bank account open in the buying company's name, ready to receive equity and debt.
                4. Board minutes ready to approve the purchase and the borrowing.
                5. Any restriction on the target giving security for its own purchase price checked with your lawyer.

                ## Notes
                Some countries restrict a company from helping to fund the purchase of its own shares. Your lawyer will know whether a procedure or exemption applies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buying company is incorporated with its own bank account, and a structure chart has been signed off by your lawyer and tax adviser."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your lawyer to sketch the buying structure on one page"
                - "Check the structure with a tax adviser for interest and dividend flows"
                - "Incorporate the buying company and appoint its directors"
                - "Open a bank account in the buying company's name"
            - name: Financing timeline matched to the deal timetable
              description: |-
                ## Purpose
                Credit approval, valuations, legal documents and security filings each take weeks, and they run alongside the purchase agreement rather than after it. A single timeline counted back from target completion shows the latest date to choose a lender and which dates are already at risk.

                ## Milestones
                1. A target completion date set and agreed with the seller in principle.
                2. Each financing step dated backwards: lender pack, indicative terms, due diligence, credit approval, documents and conditions precedent.
                3. The critical path marked, with the two or three steps that would delay completion.
                4. The exclusivity period in the letter of intent checked against the financing timeline.
                5. The timeline shared with your lawyer, accountant and lender contacts.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated financing timeline counts back from target completion, marks the critical path and fits inside the exclusivity period."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the target completion date and the exclusivity end date"
                - "Ask two lenders how long credit approval and documents usually take"
                - "Date each financing step backwards from completion"
                - "Highlight the steps that would push completion back if they slipped"
            - name: Lender information pack for the target
              description: |-
                ## Purpose
                Lenders cannot approve credit on a sale memorandum written to impress buyers. A pack built around what credit teams check, cash flow, customers, management, security and your plan for the first year, gets faster and more comparable answers from several lenders at once.

                ## Milestones
                1. The seller's written consent obtained to share confidential information with named lenders.
                2. A pack covering the business, historical financials, your lender-view earnings, the deal structure, sources and uses and your plan.
                3. A projection model with base and downside cases attached.
                4. A buyer background section showing your experience and equity commitment.
                5. A confidentiality agreement signed by each lender before they receive the pack.

                ## Notes
                Read the non-disclosure agreement with the seller before sending anything. Many forbid sharing with financiers unless they are named in advance.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A lender pack with projections, shared with the seller's written consent, has gone under confidentiality to at least three lenders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check whether the seller's NDA allows sharing information with lenders"
                - "Ask the seller for written consent naming the lenders you plan to approach"
                - "Draft the pack sections in the order a credit team reads them"
                - "Ask the agent to tighten the pack summary into a single page"
            - name: Lender and equity partner pipeline tracker
              description: |-
                ## Purpose
                Running a financing process with six lenders and two equity partners by email alone means someone is always forgotten until the week they are needed. A tracker showing every counterparty, their stage, their last request and their indicative terms keeps the competition between them visible and real.

                ## Milestones
                1. Every lender and equity partner listed with contact, stage and date of last contact.
                2. Indicative terms captured in the same columns for each, so they can be compared.
                3. Outstanding requests from each counterparty shown with an owner.
                4. Counterparties who declined kept on the list with their reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker lists every financing counterparty with stage, terms and open requests, and has been updated every week until completion."
                cadence: rolling
              tasks:
                - "Create a tracker with one row per lender or equity partner"
                - "Add columns for stage, indicative terms, open requests and next step"
                - "Record the reason each declining lender gave"
                - "Update every row before the Monday deal call @recurring(weekly:mon)"
            - name: Weekly financing workstream call
              description: |-
                ## Purpose
                During a live deal the financing and purchase workstreams drift apart: the seller agrees a change the lender has not seen, or the lender asks for a document nobody owns. Thirty minutes a week with your lawyer, accountant and lender contact, run from one action list, keeps both workstreams heading for the same completion date.

                ## Milestones
                1. A standing weekly slot agreed with the core deal team.
                2. A one-page agenda: timeline, open lender requests, document status and risks.
                3. Actions recorded with an owner and date after every call.
                4. The call stopped once completion and post-completion filings are done.

                ## Notes
                Start from the **Meeting notes** template. Bring lender representatives in for the part that concerns them, not for discussion of price.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every week from letter of intent to completion has a recorded financing call with dated actions and named owners."
                cadence: rolling
              tasks:
                - "Book a recurring thirty-minute slot with your lawyer and accountant"
                - "Write a standing agenda covering timeline, requests, documents and risks"
                - "Send dated actions to the team within an hour of each call @recurring(weekly:tue)"
                - "Cancel the series once post-completion filings are confirmed"
            - name: Lender due diligence question log
              description: |-
                ## Purpose
                Credit teams send questions in waves, and slow or inconsistent answers are one of the main reasons approvals slip. A single log of every question, who answers it, the answer given and the date sent means no lender hears two versions of the same fact.

                ## Milestones
                1. One log holding questions from every lender and their advisers.
                2. Each question assigned to you, the seller or an adviser, with a target reply date.
                3. Answers reviewed by one person before they go out.
                4. Average turnaround measured and kept under five working days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lender question is logged with an owner and answer date, and the average turnaround stays under five working days."
                cadence: rolling
              tasks:
                - "Set up a log with question, lender, owner, due date and answer columns"
                - "Agree with the seller who answers questions about the target's history"
                - "Chase overdue answers while lender diligence is open @recurring(weekly:mon,thu)"
                - "Check each answer against earlier replies before it is sent"
            - name: Covenant compliance calendar
              description: |-
                ## Purpose
                Acquisition facilities usually test financial covenants every quarter and require a signed compliance certificate within a set number of days. A calendar of every test date, reporting deadline and threshold, with the figures worked out before the certificate is due, turns a breach from a surprise into something you see coming months ahead.

                ## Milestones
                1. Every financial covenant listed with its definition, threshold and test dates from the facility agreement.
                2. Reporting deadlines for accounts, certificates and budgets entered in the calendar.
                3. Each covenant calculated in a log for every quarter since completion.
                4. Headroom against each threshold shown, with an early warning level set.
                5. A written rule for when to call the lender if headroom falls below the warning level.

                ## Notes
                Start from the **Metrics log** template. Use the facility agreement's definitions, not your accounts' headings: they rarely match.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every covenant test since completion is logged with its figure and headroom, and no compliance certificate has been late."
                cadence: rolling
              tasks:
                - "Copy each covenant definition and threshold from the facility agreement"
                - "Enter every certificate and reporting deadline in your calendar"
                - "Calculate each covenant and its headroom for the quarter @recurring(quarterly)"
                - "Run a draft covenant test from the monthly management accounts @recurring(monthly:12)"
            - name: Monthly lender reporting pack
              description: |-
                ## Purpose
                Lenders who receive tidy, punctual reports with a short commentary tend to be patient when a quarter goes badly, and lenders who have to chase tend not to be. A standard monthly pack, built once and refreshed from the management accounts, satisfies the information undertakings and keeps the relationship warm.

                ## Milestones
                1. The reporting obligations in the facility agreement listed with their deadlines.
                2. A pack format: profit and loss, balance sheet, cash flow, debt balances, covenant preview and a half-page commentary.
                3. Packs sent within the agreed deadline every month since completion.
                4. A quarterly call held with the relationship manager to walk through the numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly pack with written commentary has reached the lender within the agreed deadline every month since completion."
                cadence: rolling
              tasks:
                - "List every report the facility agreement requires and its deadline"
                - "Build a pack format from your management accounts"
                - "Send the monthly pack with a half-page commentary @recurring(monthly:18)"
                - "Offer the relationship manager a quarterly walk-through call"
            - name: Thirteen-week cash flow after completion
              description: |-
                ## Purpose
                The first quarter after an acquisition is when cash surprises land: a supplier wants new terms from the new owner, a customer pays late during the handover, the first interest payment falls due. A rolling thirteen-week forecast, updated weekly, shows a shortfall early enough to draw on the working capital facility or talk to the lender.

                ## Milestones
                1. A thirteen-week forecast covering receipts, payments, interest and repayments.
                2. Opening cash reconciled to the bank every week.
                3. Forecast against actual variance tracked for each week.
                4. A minimum cash level set, below which you contact the lender.
                5. The forecast kept going until three months of forecasts land within an agreed margin of actuals.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A thirteen-week cash forecast has been rolled forward every week since completion, with variances recorded and a minimum cash level set."
                cadence: rolling
              tasks:
                - "Build a thirteen-week forecast with receipts, payments and debt service lines"
                - "Set the minimum cash level that triggers a call to the lender"
                - "Roll the forecast forward and reconcile opening cash to the bank @recurring(weekly:fri)"
                - "Note the main reason for any weekly variance above a tenth of forecast"
            - name: Debt service and repayment schedule
              description: |-
                ## Purpose
                Interest on floating-rate acquisition debt moves with the base rate, amortisation often steps up in later years and a cash sweep can take part of each year's surplus. One schedule of every payment due, recalculated when rates move, means debt service is planned for rather than discovered on the bank statement.

                ## Milestones
                1. Every facility listed with its rate, margin, repayment profile and payment dates.
                2. A schedule of all interest and principal payments for the life of the debt.
                3. Any cash sweep or excess cash flow repayment rule written in plain words.
                4. The schedule updated whenever the base rate or a margin changes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full payment schedule for every acquisition facility exists and has been reconciled to the lender statement each month."
                cadence: rolling
              tasks:
                - "List each facility's rate, margin and repayment dates from the agreement"
                - "Build a payment schedule for the full term of the debt"
                - "Reconcile the schedule to the lender statement @recurring(monthly:3)"
                - "Write the cash sweep rule in two plain sentences"
            - name: Seller note and deferred consideration ledger
              description: |-
                ## Purpose
                Seller notes, deferred payments and earn-outs are debt in all but name, and they usually sit behind the bank with conditions on when they may be paid. A ledger of each amount, due date, interest rate and the bank's conditions stops you paying the seller when the facility forbids it, or missing a payment the purchase agreement requires.

                ## Milestones
                1. Each deferred amount listed with due date, interest and payment conditions.
                2. Restrictions from the subordination or intercreditor agreement noted beside each payment.
                3. Earn-out statements prepared and agreed with the seller on the agreed dates.
                4. Every payment made or deferred recorded with the reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger shows every seller note, deferred and earn-out payment with due date, bank restrictions and status, with none missed or paid in breach."
                cadence: rolling
              tasks:
                - "List every deferred amount from the purchase agreement with dates"
                - "Note the bank's conditions on paying each amount to the seller"
                - "Check upcoming seller payments against covenant headroom @recurring(monthly:25)"
                - "Prepare the earn-out statement for the seller on its agreed date @recurring(yearly)"
            - name: Annual facility review with the lender
              description: |-
                ## Purpose
                Many acquisition facilities include an annual review, a budget delivery date and a window to request amendments, and the borrower who arrives prepared gets better outcomes from all three. A yearly pack covering performance against the plan the lender approved, the coming year's budget and the changes you want puts you in charge of the agenda.

                ## Milestones
                1. The annual budget delivered to the lender by the date in the agreement.
                2. A review pack comparing the year's results with the acquisition plan.
                3. A list of requested changes: covenant resets, released guarantees or extra headroom.
                4. Outcomes of the meeting recorded and any agreed amendments documented by your lawyer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The annual review pack and budget reached the lender on time, and every requested change has a recorded outcome."
                cadence: cyclic
              tasks:
                - "Find the budget delivery date and review terms in the facility agreement"
                - "Draft the year's performance against the acquisition plan"
                - "Book the annual review meeting with the relationship manager @recurring(yearly)"
                - "List the amendments you want to request this year"
            - name: How lenders size acquisition debt
              description: |-
                ## Purpose
                Credit teams rely on a handful of tests: total debt as a multiple of earnings, debt service cover, the years cash flow needs to repay, and what the assets would fetch if things went wrong. Learning those tests and running them on your own deal lets you predict a lender's answer before you ask, and spot an offer that is too generous to be safe.

                ## Milestones
                1. Notes on the four main sizing tests in your own words, each with a worked example.
                2. Each test run on your target's numbers.
                3. The difference between cash flow lending and asset-based lending explained in a paragraph.
                4. Three questions to ask each lender about how they sized their offer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes explain four debt sizing tests, with each one calculated on the target's lender-view figures."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read a lender or trade body guide to acquisition debt sizing"
                - "Write each sizing test in one sentence with its formula"
                - "Run every test on the target's lender-view figures"
                - "Draft three questions about sizing to ask each lender"
            - name: Reading an acquisition debt term sheet
              description: |-
                ## Purpose
                Indicative terms arrive as a few pages of shorthand: margin, arrangement fee, commitment fee, amortisation, cash sweep, covenants, conditions precedent and events of default. Working through one term sheet clause by clause, with your lawyer on the parts that bite, means you compare offers on what they cost and restrict rather than on headline rate.

                ## Milestones
                1. A glossary of every term in the first term sheet you receive.
                2. The all-in cost of each offer calculated including fees, not just margin.
                3. The five clauses that most restrict how you run the business highlighted.
                4. Your lawyer's comments on those clauses recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary and an all-in cost calculation exist for at least one term sheet, and its five most restrictive clauses have been reviewed by your lawyer."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write a glossary entry for every term in the first term sheet"
                - "Calculate the all-in annual cost including arrangement and commitment fees"
                - "Highlight clauses that restrict dividends, further acquisitions or new debt"
                - "Send the highlighted clauses to your lawyer for comment"
            - name: Senior debt, unitranche and mezzanine compared
              description: |-
                ## Purpose
                Bank senior debt is cheapest but strictest, unitranche from private credit funds offers more borrowing in one loan at a higher price, and mezzanine or second-lien debt fills the gap between debt and equity at a cost closer to equity. Knowing where each sits, what it costs and what it demands lets you choose the layers your deal needs rather than the ones your first contact sells.

                ## Milestones
                1. A one-page comparison of each debt type on cost, amount, repayment, security and covenants.
                2. Typical lenders for each type named for your deal size and market.
                3. A view on whether your deal needs more than one layer of debt.
                4. Questions on prepayment fees and call protection written down for each type.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of debt types for your deal size records cost, repayment, security and covenants, with a view on how many layers the deal needs."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read one plain-language guide to acquisition debt types"
                - "Fill a comparison table on cost, security, repayment and covenants"
                - "Name two lenders active in each type at your deal size"
                - "Write whether your deal needs one layer of debt or two"
            - name: Financial covenants tested on your own numbers
              description: |-
                ## Purpose
                Covenants look harmless in a term sheet and decisive in a bad quarter. Calculating each proposed covenant on your projections, then on a downside where sales fall and costs stick, shows exactly how much room you have and which definition to negotiate before signing rather than after a breach.

                ## Milestones
                1. Each proposed covenant calculated quarterly across the projection period.
                2. Headroom shown in money terms: how far earnings could fall before a breach.
                3. A downside case tested against every covenant.
                4. The definitions that matter most, such as which costs may be added back to earnings, flagged for negotiation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each proposed covenant is calculated for every projected quarter in base and downside cases, with earnings headroom stated in money terms."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Copy each proposed covenant and its definition into a spreadsheet"
                - "Calculate every covenant for each projected quarter"
                - "Work out how far earnings could fall before each covenant breaks"
                - "List the definitions you want to negotiate before signing"
            - name: Personal guarantees and security explained
              description: |-
                ## Purpose
                Small business acquisition loans often ask for personal guarantees, a charge over the buyer's home, life cover assigned to the lender or all-asset security over both companies. Knowing what each allows the lender to do on default, and which are commonly negotiated, lets you agree security with your eyes open and with independent legal advice where it is required.

                ## Milestones
                1. A list of every form of security and guarantee the lenders have asked for.
                2. A plain-language note of what each one allows the lender to do on default.
                3. Your maximum personal exposure under all guarantees added up.
                4. Independent legal advice taken on any personal guarantee, and by your partner if they must sign.

                ## Notes
                Lenders sometimes require a guarantor's spouse or partner to take separate advice. Allow time for it in the financing timeline.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note sets out every guarantee and charge requested and your maximum personal exposure, and confirms independent legal advice was taken before signing."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every guarantee and charge each lender has asked for"
                - "Add up your maximum personal exposure across all of them"
                - "Book independent legal advice on any personal guarantee"
                - "Ask whether each personal guarantee can now be reduced or released @recurring(yearly)"
            - name: Seller financing and deferred consideration
              description: |-
                ## Purpose
                A seller who leaves part of the price in the business as a loan or deferred payment reduces the cash you need at completion and signals confidence in what they are selling. Learning how seller notes are usually structured, how they rank behind the bank and how earn-outs act as contingent funding prepares you to propose one that both seller and lender will accept.

                ## Milestones
                1. Notes on seller notes, deferred consideration, earn-outs and seller rollover equity.
                2. How each ranks against senior debt and what banks usually require of it.
                3. The seller's tax timing on deferred price listed as a question for their own adviser.
                4. A sketch of the seller financing you would propose for this deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover four forms of seller financing and how each ranks behind senior debt, with a proposed sketch for the current deal."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two plain guides to seller notes and earn-outs"
                - "Ask a lender what they require of a seller note behind their loan"
                - "Sketch the seller financing you would propose for this deal"
                - "List what the seller gains from deferring part of the price"
            - name: Intercreditor and subordination basics
              description: |-
                ## Purpose
                When there is more than one lender, or a seller note behind the bank, an intercreditor or subordination agreement decides who is paid first, who can enforce and when junior creditors must stand still. Borrowers rarely negotiate it but always live with it, because it governs whether you can pay the seller, refinance one layer or bring in new money.

                ## Milestones
                1. A summary of payment ranking among every lender and the seller.
                2. Payment blocks and standstill periods explained in plain words.
                3. The points that limit your own flexibility identified, such as consent to refinance.
                4. Your lawyer's view recorded on anything worth negotiating.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language summary of the intercreditor or subordination terms marks the limits on the borrower and records your lawyer's view."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your lawyer for the draft intercreditor or subordination agreement"
                - "Summarise who ranks first and when junior payments are blocked"
                - "Mark every clause that limits refinancing or seller payments"
                - "Record your lawyer's view on what can still be changed"
            - name: Conditions precedent and certain funds
              description: |-
                ## Purpose
                A lender's commitment is only as good as its conditions: if the lender can walk away because of a market change or a vague adverse change clause, the seller is right to doubt your financing. Sorting conditions into those you control and those the lender decides, and knowing when certain funds are expected, helps you give the seller a credible financing story.

                ## Milestones
                1. The conditions in the commitment letter sorted into documentary, deal-related and lender-discretionary.
                2. Discretionary conditions, such as a material adverse change clause, marked for negotiation.
                3. A note on whether the seller or a takeover regulator expects certain funds, and what that means for the lender's conditions.
                4. A one-sentence financing certainty statement you could give the seller.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The commitment letter's conditions are sorted into three groups, discretionary ones are marked for negotiation and a certainty statement for the seller is drafted."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Sort each condition in the commitment letter into three groups"
                - "Mark the conditions the lender alone decides as negotiation points"
                - "Ask your lawyer whether certain funds rules apply to this deal"
                - "Draft one sentence on financing certainty for the seller"
            - name: Lender shortlist and competitive term comparison
              description: |-
                ## Purpose
                One lender's offer has nothing to be measured against, and buyers who approach only their existing bank often pay more and accept tighter covenants than they needed to. Sending four to six lenders the same pack and comparing their indicative terms on one grid creates real competition and a clear choice.

                ## Milestones
                1. Four to six lenders approached with the same pack on the same day.
                2. Indicative terms laid out on one grid: amount, all-in cost, repayment, covenants, security and conditions.
                3. Each lender's speed and experience with acquisitions in your sector noted.
                4. A preferred lender and a backup chosen, with reasons recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A grid compares indicative terms from at least four lenders and records a preferred lender and a backup with reasons."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick four to six lenders active in acquisitions of your size"
                - "Send each the same pack with the same response deadline"
                - "Lay every offer on one grid of cost, covenants and security"
                - "Tell your preferred lender and your backup where they stand"
            - name: Bank, government-backed or private credit lender
              description: |-
                ## Purpose
                Banks lend cheaply against strong cash flow and security, government-backed loan schemes can accept a smaller deposit or thinner security, and private credit funds lend more for a higher price. Choosing the right kind of lender before running a process saves weeks spent with lenders who were never going to fit the deal.

                ## Milestones
                1. Eligibility for any government-backed acquisition lending in your country checked, such as the SBA 7(a) programme in the US.
                2. Each lender type scored on deal size, speed, equity required and security asked.
                3. The lender type chosen, with the trade-off accepted written in one sentence.
                4. Lenders to approach listed within the chosen type.

                ## Notes
                Government-backed schemes have their own rules on ownership changes, use of funds and personal guarantees. Read the scheme rules themselves, not a broker's summary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision names the lender type for the deal and the trade-off accepted, with government scheme eligibility checked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether a government-backed acquisition loan scheme applies to you"
                - "Score banks, scheme lenders and private credit against your deal"
                - "Write one sentence on the trade-off you are accepting"
                - "List three lenders of the chosen type to approach"
            - name: Equity partner decision for the acquisition
              description: |-
                ## Purpose
                If debt and your own money do not cover the price, the gap comes from an equity partner: a co-investor, a family office, a private equity sponsor or the seller rolling part of the proceeds. Each brings money on different terms of control, return and exit timing, and choosing deliberately protects the ownership limit you set at the start.

                ## Milestones
                1. The equity gap stated from the sources and uses table.
                2. Options compared: co-investor, family office, private equity sponsor and seller rollover.
                3. Ownership, control rights and expected exit timing modelled for each.
                4. A preferred route chosen and checked against your minimum ownership limit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least three equity options records ownership, control and exit expectations and names the chosen route against your minimum ownership."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate the equity gap from the sources and uses table"
                - "Model your ownership after each equity option"
                - "Note the control rights each type of partner usually asks for"
                - "Choose a route and check it against your minimum ownership"
            - name: Seller note negotiation plan
              description: |-
                ## Purpose
                Asking a seller to defer part of the price is a negotiation with three parties, because the bank must accept the note's terms too. Agreeing amount, interest, term, ranking and what happens after a missed payment with the lender first, then proposing it to the seller with reasons, avoids promising something the bank later refuses.

                ## Milestones
                1. The senior lender's limits on any seller note confirmed in writing.
                2. A proposed note: amount, interest, term, repayment and ranking.
                3. The case for the seller written: price achieved, tax timing and the confidence it signals.
                4. Agreed note terms reflected in both the purchase agreement and the subordination terms.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Seller note terms are agreed with the seller, accepted by the senior lender and identical in the purchase agreement and subordination terms."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the senior lender what seller note terms they would accept"
                - "Draft a seller note proposal with amount, rate, term and ranking"
                - "Explain to the seller why deferral helps them as well as you"
                - "Check the note terms match across the purchase and lending documents"
            - name: Interest rate hedging decision
              description: |-
                ## Purpose
                Floating-rate acquisition debt means every rise in the base rate comes straight out of free cash flow, and some lenders require part of the debt to be hedged. Deciding how much to fix or cap, for how long and at what cost, with your adviser and against your debt service model, stops a rate rise turning into a covenant problem.

                ## Milestones
                1. Debt service cover modelled with rates two and four percentage points higher.
                2. Any hedging requirement in the term sheet noted.
                3. Quotes for a swap and a cap compared on cost and break costs.
                4. A hedging decision recorded with the proportion, term and instrument chosen.

                ## Notes
                Hedging products carry break costs if you repay early, so ask for the cost of unwinding before you sign. This is a risk decision for you and your adviser, not a bet on rates.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded hedging decision states proportion, term and instrument, based on modelled rate rises and at least two quotes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Model debt service with rates two and four points higher"
                - "Check whether the term sheet requires any hedging"
                - "Request swap and cap quotes with break costs from two providers"
                - "Review rate exposure against the hedging decision @recurring(quarterly)"
            - name: Personal guarantee and collateral negotiation
              description: |-
                ## Purpose
                First offers often ask for more security than the lender needs, especially from small business buyers. Negotiating a cap on the guarantee, a release once borrowing falls, or the exclusion of your home, with alternatives the lender can accept, can cut your personal exposure without losing the loan.

                ## Milestones
                1. The security package in each offer compared side by side.
                2. A proposed position: capped guarantee, step-down triggers and excluded assets.
                3. Alternatives offered, such as key person cover or a larger equity cheque.
                4. Agreed security terms written into the facility documents.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The final security package has a cap or release trigger on any personal guarantee, recorded in the signed facility documents."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the security each lender has asked for side by side"
                - "Write your proposed guarantee cap and release triggers"
                - "Offer the lender an alternative such as key person cover"
                - "Check the signed documents match the agreed security terms"
            - name: Financing risk register for the deal
              description: |-
                ## Purpose
                Financing fails late for predictable reasons: due diligence finds a problem that cuts earnings, a property valuation comes in low, credit committee adds a condition, rates move. A risk register kept from letter of intent to completion, with a response for each risk, shows a funding gap while there is still time to close it.

                ## Milestones
                1. At least ten financing risks listed with likelihood and impact.
                2. A response for each: a backup lender, a price adjustment, a larger seller note or extra equity.
                3. Risks reviewed at every weekly financing call.
                4. Closed risks marked with how they were resolved.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register of at least ten financing risks, each with a named response and owner, has been reviewed weekly until completion."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List ten ways the financing could fail before completion"
                - "Write a response and an owner for every risk"
                - "Keep a backup lender warm as a standing response"
                - "Close each risk with a note of how it was resolved"
            - name: Maximum price the financing supports
              description: |-
                ## Purpose
                Debt sized on cash flow plus a fixed equity cheque puts a ceiling on what you can pay, whatever the seller asks. Calculating that ceiling, and the extra equity or seller financing needed for each step above it, gives you a walk-away price grounded in funding rather than enthusiasm.

                ## Milestones
                1. Maximum debt at your chosen level taken from the debt capacity model.
                2. Maximum equity from your limits note added.
                3. The resulting price ceiling after fees and taxes calculated.
                4. Extra funding needed for each price step above the ceiling shown.
                5. A walk-away price recorded and shared with co-buyers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A walk-away price based on maximum debt and equity after costs is written down and shared with co-buyers before price talks close."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take maximum debt from the capacity model at your chosen level"
                - "Subtract fees and taxes to find the price ceiling"
                - "Show the extra funding needed for each price step above it"
                - "Write the walk-away price and share it with co-buyers"
            - name: Lender management presentation and site visit
              description: |-
                ## Purpose
                Before credit approval most lenders want to meet the buyer, hear the plan and see the business. A rehearsed presentation of your background, the deal logic, the first-year plan and the downside case, followed by a well-run site visit agreed with the seller, often turns the credit analyst into your advocate at committee.

                ## Milestones
                1. A twenty-minute presentation covering buyer, target, deal, plan and risks.
                2. Hard questions anticipated and answers rehearsed with your adviser.
                3. A site visit agreed with the seller, with a cover story for staff if the deal is confidential.
                4. Follow-up questions logged and answered within the agreed time.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each shortlisted lender has had the presentation and site visit, and every follow-up question was answered within five working days."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Draft a twenty-minute presentation for lenders"
                - "Rehearse the ten hardest questions with your adviser"
                - "Agree site visit dates and the staff cover story with the seller"
                - "Log the follow-up questions from each lender visit"
            - name: Credit approval and commitment letter
              description: |-
                ## Purpose
                Indicative terms become a binding offer only when the lender's credit committee approves and issues a commitment letter, and terms often move at that point. Preparing for committee and checking the letter line by line against the agreed term sheet catches added conditions and changed fees before you rely on them in the purchase agreement.

                ## Milestones
                1. Everything the credit team needs for committee delivered by their deadline.
                2. The commitment letter compared line by line with the agreed term sheet.
                3. New or changed conditions negotiated, or accepted in writing.
                4. The commitment letter signed and its expiry date entered in the timeline.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed commitment letter, reconciled to the agreed term sheet, expires after the target completion date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the credit team for their committee date and submission deadline"
                - "Compare the commitment letter clause by clause with the term sheet"
                - "Push back in writing on any new condition or fee"
                - "Check the commitment expiry falls after target completion"
            - name: Facility agreement negotiation and signing
              description: |-
                ## Purpose
                The facility agreement turns the commitment into a hundred or more pages of representations, undertakings and events of default, and borrower-side lawyers earn their fee here. Agreeing a short list of priorities in advance, such as covenant definitions, permitted acquisitions, dividends, grace periods and cure rights, keeps negotiation on what will shape how you run the business.

                ## Milestones
                1. Your negotiation priorities agreed with your lawyer before the first draft arrives.
                2. Each draft reviewed and an issues list kept of open points.
                3. Covenant definitions checked against the covenant model.
                4. The agreement signed alongside or ahead of the purchase agreement, as the timeline requires.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The facility agreement is signed with every priority point won or consciously conceded, and its covenant definitions match the covenant model."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree your top five negotiation priorities with your lawyer"
                - "Keep an issues list of open points across each draft"
                - "Test the drafted covenant definitions against your model"
                - "Read the events of default clause in full before signing"
            - name: Conditions precedent checklist for drawdown
              description: |-
                ## Purpose
                On completion day the lender releases funds only when every condition precedent is satisfied: board minutes, signed security, insurance, legal opinions, know-your-customer documents and evidence of equity. A checklist with an owner and status for every item, started weeks ahead, stops completion slipping a day because one certificate is unsigned.

                ## Milestones
                1. The lender's full conditions precedent list in a checklist with owner and status.
                2. Know-your-customer documents for every director and shareholder delivered early.
                3. Insurance arranged with the lender noted as loss payee.
                4. Every item marked satisfied, or waived in writing by the lender, before completion day.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every condition precedent is marked satisfied or waived in writing by the lender at least one working day before completion."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the lender's lawyers for the conditions precedent list"
                - "Assign an owner and due date to every item"
                - "Send identity documents for every director and shareholder"
                - "Arrange insurance with the lender named as loss payee"
            - name: Completion day funds flow
              description: |-
                ## Purpose
                On completion, equity, debt and sometimes the target's own cash move between several accounts in a single day, and the seller's lawyer will not release the shares until the money arrives. A funds flow memo agreed by every party, with bank details verified by phone, makes sure the right amounts reach the right accounts in the right order.

                ## Milestones
                1. A funds flow memo listing every payment, amount, account and order.
                2. Bank details for each recipient verified by a call to a known number, not by email.
                3. Equity sitting in the buying company's account the day before completion.
                4. The drawdown request submitted within the lender's notice period.
                5. Confirmation of every payment received and filed.

                ## Notes
                Payment fraud targets completions. Never accept a change of bank details by email on or near completion day.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every payment in the agreed funds flow memo arrived on completion day, with each recipient's bank details verified by phone beforehand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the funds flow memo with every payment and its order"
                - "Verify each recipient's bank details by phoning a known number"
                - "Submit the drawdown request within the lender's notice period"
                - "File confirmation of every completion payment"
            - name: Post-completion conditions and charge filings
              description: |-
                ## Purpose
                Some security and deliverables are allowed to follow completion: registering charges within the statutory deadline, landlord consents, account control agreements and hedging within a set number of days. Missing one of these conditions subsequent can be an event of default, so a short dated list is worth more than the relief of having completed.

                ## Milestones
                1. Every condition subsequent listed with its deadline from the facility agreement.
                2. Charges registered with the company registry within the required period.
                3. Hedging, consents and account agreements completed by their dates.
                4. Written lender confirmation that all conditions subsequent are satisfied.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every condition subsequent was satisfied by its deadline and the lender has confirmed it in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each condition subsequent and its deadline"
                - "Confirm with your lawyer that charges were registered in time"
                - "Chase landlord and account bank consents until they are signed"
                - "Ask the lender to confirm all conditions subsequent are met"
            - name: First acquisition by an individual buyer or searcher
              description: |-
                ## Purpose
                People buying their first business, whether through a search fund backed by investors or with their own savings, face lenders who judge the person as much as the target. A credible buyer profile, showing relevant management experience, a transition plan with the seller and equity in hand, makes up for having no history of owning a company.

                ## Milestones
                1. A one-page buyer profile: experience, skills, equity available and why this sector.
                2. A transition plan agreed in principle with the seller, including how long they stay.
                3. Search investors' or co-investors' commitments documented, where you have them.
                4. A lender who finances first-time buyers identified and briefed.

                ## Notes
                Search fund investors usually expect a say on the deal and regular updates. Agree their approval rights before you sign a letter of intent.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buyer profile, a seller transition plan and evidence of equity have been presented to at least one lender that finances first-time buyers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page buyer profile aimed at a credit analyst"
                - "Agree with the seller how long they will stay after completion"
                - "Confirm your investors' approval rights over the deal"
                - "Ask brokers which lenders back first-time acquirers"
            - name: Small business buying a competitor or supplier
              description: |-
                ## Purpose
                An owner-managed business buying a local competitor, supplier or customer can often borrow against the combined cash flow, but the bank will look hard at whether the existing business could carry the debt if the purchase disappoints. Showing the combined numbers, the savings you expect and how long they take keeps the conversation on the deal rather than on your current overdraft.

                ## Milestones
                1. Combined historical earnings of both businesses prepared.
                2. Expected savings listed with timing and a cautious estimate.
                3. Debt service tested on the combined business with savings delayed by a year.
                4. Your existing bank approached first, and at least one other lender for comparison.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A combined model with delayed savings has been tested for debt service and presented to your bank and one other lender."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Combine the two businesses' last two years of earnings"
                - "List expected savings with a cautious estimate and timing"
                - "Test debt service with the savings delayed by a year"
                - "Ask your existing bank for an acquisition lending meeting"
            - name: Startup acquiring a company with shares and cash
              description: |-
                ## Purpose
                Venture-backed founders buying a smaller company usually pay partly in their own shares, partly in cash from the last round and sometimes with payments tied to the team staying. Getting board approval, investor consents and an agreed share price, and checking the cash element against runway, avoids an acquisition that quietly shortens the company's life.

                ## Milestones
                1. The price split into shares, cash at completion and deferred or retention-linked payments.
                2. Runway after the cash payment checked against the operating plan.
                3. Board approval and any investor consents required by the shareholders' agreement obtained.
                4. The issue price of consideration shares agreed and documented with your lawyer.

                ## Notes
                Consideration shares can trigger pre-emption or consent rights. Read the articles and shareholders' agreement before offering them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Board approval and investor consents are recorded for a share and cash offer whose cash element keeps runway within the agreed plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Split the offer into shares, cash and deferred payments"
                - "Recalculate runway after the cash element is paid"
                - "List the investor consents the shareholders' agreement requires"
                - "Brief the board on the offer structure and its runway impact"
            - name: Management buyout funding for the team
              description: |-
                ## Purpose
                Managers buying the company they run must fund the deal while still employed by the seller, often with little personal capital and a backer who sees them as the main asset. Separating the team's negotiation from their day jobs, taking independent advice and agreeing how equity is split protects both the deal and each manager's position.

                ## Milestones
                1. Independent advisers appointed for the management team, separate from the company's.
                2. Each manager's personal contribution and any personal borrowing agreed.
                3. The equity split among the team, and any incentive shares from a backer, documented.
                4. Conflicts with current duties to the employer recorded and managed.
                5. Funding offers from at least two backers or lenders compared.

                ## Notes
                Managers owe duties to their current employer during a buyout. Take legal advice on what company information you may use.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The team has independent advisers, an agreed equity split and personal contributions, and has compared offers from at least two backers or lenders."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Appoint advisers who act for the management team only"
                - "Agree each manager's personal contribution in writing"
                - "Document how equity is split among the team"
                - "Take legal advice on duties owed to your current employer"
            - name: Bolt-on funded from existing facilities
              description: |-
                ## Purpose
                Companies with an acquisition or revolving facility can often fund a bolt-on from headroom, an accordion or an incremental tranche, but only within the permitted acquisition terms. Checking those terms, the pro forma covenants and the consent process before an offer goes in saves a renegotiation under time pressure.

                ## Milestones
                1. The permitted acquisition terms in the facility summarised: size, sector and debt tests.
                2. Pro forma covenants calculated with the target included.
                3. Available headroom and any accordion or incremental capacity confirmed with the agent bank.
                4. Lender consent obtained, or confirmed unnecessary in writing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Pro forma covenants including the target pass, and the lender has confirmed in writing that the bolt-on is permitted or consented."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Summarise the permitted acquisition clause in the facility"
                - "Calculate pro forma covenants including the target"
                - "Ask the agent bank how much accordion capacity is available"
                - "Review acquisition headroom against the deal pipeline @recurring(quarterly)"
            - name: Cross-border acquisition financing
              description: |-
                ## Purpose
                Buying a business in another country adds currency risk, foreign security law, withholding tax on interest and sometimes investment screening. Matching the currency of the debt to the target's cash flow, and getting local counsel on security and tax early, avoids a deal that looks cheap at signing and costly by the first repayment.

                ## Milestones
                1. The currency of the debt chosen to match where the target earns its cash.
                2. Local counsel appointed for security, guarantees and any foreign investment rules.
                3. Withholding tax on interest and dividends checked with a tax adviser.
                4. Currency exposure on the price and repayments measured, with a hedging view taken.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Local counsel and a tax adviser have signed off the security and interest flows, and the debt currency matches the target's main cash flow."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the currencies the target earns and spends in"
                - "Appoint local counsel in the target's country"
                - "Ask a tax adviser about withholding on cross-border interest"
                - "Check currency exposure on upcoming debt payments @recurring(monthly:21)"
            - name: Large acquisition bridge and takeout plan
              description: |-
                ## Purpose
                Listed and large private companies buying a major target often sign a bridge loan for certainty and refinance it later with bonds, a term loan, asset sales or new shares. Planning the takeout at the same time as the bridge, with rating agency and investor messaging, keeps the expensive bridge short and the balance sheet inside the policy the board approved.

                ## Milestones
                1. The bridge facility's size, term and fee step-ups summarised.
                2. A takeout plan with bonds, term loan, asset sales or equity, and timing for each.
                3. Pro forma credit metrics shared with rating agencies where the company is rated.
                4. The board-approved balance sheet policy checked against the pro forma position.
                5. Disclosure of the financing coordinated with legal and investor relations.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A board-approved takeout plan refinances the bridge before its first fee step-up, with pro forma metrics shared with any rating agencies."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Summarise the bridge facility's fees and step-up dates"
                - "Draft a takeout plan with three refinancing routes and timing"
                - "Prepare pro forma credit metrics for the rating agency meeting"
                - "Agree financing disclosure wording with legal and investor relations"
            - name: Refinancing the acquisition debt
              description: |-
                ## Purpose
                Two or three years after completion, a business that has repaid debt and grown earnings can usually borrow on better terms, release personal guarantees or return some equity. Watching for the right moment and running the refinancing as a small new process, with prepayment costs counted, turns the first years of ownership into a lower cost of capital.

                ## Milestones
                1. Current debt level, covenant headroom and prepayment costs summarised.
                2. One refinancing objective chosen: lower cost, released guarantees, more headroom or returning equity.
                3. Indicative terms from two or three lenders compared with the existing facility.
                4. A decision to refinance or stay recorded with the numbers behind it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded refinancing decision compares at least two new offers with the existing facility after prepayment costs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate current debt to earnings and prepayment costs on the existing loan"
                - "Write the one objective a refinancing must achieve"
                - "Check lender appetite and pricing for a refinancing @recurring(yearly)"
                - "Compare new offers with the existing facility after all costs"
            - name: Buy-and-build acquisition facility
              description: |-
                ## Purpose
                Owners planning several acquisitions over a few years do better with a facility designed for it, with a committed acquisition line, agreed tests for each bolt-on and a lender who understands the plan, than with a new loan for every deal. Building the case, the pipeline and the integration evidence lenders want turns serial acquisitions into a repeatable funding routine.

                ## Milestones
                1. A buy-and-build plan with target profile, pipeline and integration approach.
                2. Evidence from earlier acquisitions: savings achieved and earnings retained.
                3. An acquisition line negotiated with agreed tests for each bolt-on.
                4. Pipeline and facility usage reported to the lender on an agreed rhythm.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An acquisition line with agreed bolt-on tests is in place, and pipeline and usage reports go to the lender on the agreed rhythm."
                cadence: cyclic
              tasks:
                - "Write the target profile and pipeline for the next three years"
                - "Measure the savings and earnings kept from the last acquisition"
                - "Ask lenders how they structure committed acquisition lines"
                - "Update the bolt-on pipeline and facility usage for the lender @recurring(monthly:8)"
            - name: Interest deductibility and debt push-down review
              description: |-
                ## Purpose
                Where the debt sits and how interest flows through the group decides whether interest reduces tax, and many countries now cap the deduction at a share of earnings or restrict interest paid to related parties. Reviewing the structure with a tax adviser before signing, and again when rules change, keeps the financing model honest about the after-tax cost of borrowing.

                ## Milestones
                1. A tax adviser's written view on interest deductibility in the chosen structure.
                2. Any interest limitation rule applied in the financing model.
                3. Shareholder loans and their interest rates reviewed against related-party rules.
                4. A note of the events that should trigger a fresh review, such as a group restructure or a change in tax law.

                ## Notes
                This is a question for a qualified tax adviser in each country involved. Record their advice rather than building the model on another country's rules.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tax adviser's written view on interest deductibility is filed and reflected in the after-tax cost shown in the financing model."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Send the structure chart to a tax adviser for an interest review"
                - "Apply any interest limitation rule to the financing model"
                - "Check shareholder loan rates against related-party rules"
                - "Note the events that should trigger a fresh tax review"
---

# Acquisition Financing

This area is for anyone raising the money to buy a business: a first-time buyer or searcher, an owner-managed company buying a competitor, a founder paying partly in shares, or a larger group funding a major target. It starts with the foundations (your limits, sources and uses, lender-view earnings, debt capacity, equity, advisers, the buying company and a timeline), sets up the operating rhythms of a financing process and of life with acquisition debt, explains how lenders size, price and secure a deal, then moves through lender and equity decisions, the dated steps from credit approval to completion day, situations by type of buyer, and specialist work on bridges, refinancing, buy-and-build and tax.

During a live deal the rhythm is weekly: a Monday tracker update, a Tuesday financing call and question chasing twice a week, then a thirteen-week cash forecast every Friday once you complete. After completion it settles into monthly and quarterly work (lender packs, draft covenant tests, debt service reconciliation, seller note checks and the quarterly covenant calculation), with yearly reviews of the facility, personal guarantees and refinancing options. The Vendor, Meeting notes, Metrics log and Risk register templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
