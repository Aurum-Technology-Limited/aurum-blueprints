---
id: real-estate-development.construction-finance
name: Construction Finance
description: "Development finance you can raise and run: a clear capital stack, a lender-ready credit pack, term sheets compared properly, clean monthly drawdowns, monitoring surveyor sign-off and mezzanine or equity for the gap."
category: business
version: 1.0.0
tags: [real-estate-development, construction-finance, founder, small-business, development-finance, loan-to-cost, drawdowns, mezzanine]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - risk-register
    - meeting-notes
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Construction Finance
          description: "Raising and managing development finance: lender types, loan-to-cost terms, monitoring surveyors, drawdowns and filling the gap with mezzanine or equity."
          projects:
            - name: Capital stack map for a live scheme
              description: |-
                ## Purpose
                Most first conversations with a lender stall because the developer cannot say in one line how much the scheme costs, how much debt is wanted and where the rest comes from. A one-page capital stack, showing total development cost, senior debt, any mezzanine, sponsor equity and the order each is repaid, turns a vague ask into a request a lender can price. Draw it before calling anyone.

                ## Milestones
                1. Total development cost split into land, build, fees, finance costs and contingency.
                2. Each layer of funding shown with amount, share of cost and repayment order.
                3. The equity you can personally evidence today separated from equity you hope to raise.
                4. The funding gap, if any, stated as a single figure with the layer meant to fill it.

                ## Notes
                Show finance costs inside total cost. A stack that leaves out rolled interest and fees looks fully funded and is not.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page capital stack for one live scheme showing every funding layer, its share of total cost, its repayment order and any gap."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pull total development cost from the latest appraisal into one figure"
                - "Split funding into senior debt, mezzanine, equity and land contribution"
                - "Mark which equity is in the bank and which is still to be raised"
                - "Write the funding gap and the layer you plan to fill it with"
            - name: Development finance terms glossary
              description: |-
                ## Purpose
                Quotes arrive in shorthand: loan to cost, loan to gross development value, day one advance, rolled and retained interest, arrangement, exit and non-utilisation fees. Two quotes that look alike can differ by tens of thousands once these are read properly. A glossary in your own words, each term worked on one example scheme, means you read every later term sheet at the right speed.

                ## Milestones
                1. Plain definitions written for at least fifteen common development finance terms.
                2. Loan to cost and loan to gross development value worked on the same example scheme.
                3. The difference between rolled, retained and serviced interest explained with figures.
                4. Each fee type shown with when it is charged and what it is calculated on.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary of at least fifteen terms, each with a worked figure from one example scheme, saved where you keep term sheets."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every term from the last quote or term sheet you saw"
                - "Write a one-sentence definition for each term"
                - "Work loan to cost and loan to GDV on one example scheme"
                - "Ask the agent to quiz you on the glossary until you answer without notes"
            - name: Lender landscape map by type
              description: |-
                ## Purpose
                Clearing banks, challenger banks, specialist development lenders, debt funds, private lenders and peer-to-peer platforms each want different schemes, borrowers and returns, and approaching the wrong type wastes weeks. A map of who lends on schemes your size, in your location and asset type, tells you where to start and who to keep in reserve.

                ## Milestones
                1. Lender types listed with the scheme sizes, locations and borrower profiles each prefers.
                2. At least ten named lenders sorted into those types.
                3. Typical appetite for first-time developers noted against each lender where known.
                4. A first-choice group of three lenders and a reserve group of three agreed.

                ## Notes
                In smaller markets, including much of the Caribbean, the list may be a handful of commercial banks and credit unions. Map them anyway: their appetite changes from year to year.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lender map naming at least ten lenders by type with scheme size and borrower appetite, and a first-choice and reserve group of three each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down every lender you or your contacts have dealt with"
                - "Ask two brokers or developers which lenders fund schemes your size"
                - "Sort the names by lender type and scheme size"
                - "Pick three first-choice lenders and three in reserve"
                - "Refresh the lender map with new entrants and lenders that have stopped @recurring(yearly)"
            - name: Sponsor track record schedule for lenders
              description: |-
                ## Purpose
                After the scheme itself, the first thing a credit team assesses is whether you have done this before. A track record schedule, listing each past project with units, cost, debt, programme against plan and profit, answers that question in a page and shows experience gained as a builder, project manager or partner even if you have never led a scheme.

                ## Milestones
                1. Every relevant past project listed with location, units, total cost and your role.
                2. Planned against actual programme and cost shown for each project.
                3. Lenders used and how each loan was repaid recorded.
                4. Experience from employment or partnerships added where you have few schemes of your own.

                ## Notes
                Be honest about overruns. Credit teams check, and an explained overrun is far less damaging than a hidden one.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one or two page track record schedule with planned and actual cost and programme for every relevant project, ready to attach to a loan application."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every project you have built, managed or partnered on"
                - "Find planned and actual cost and completion dates for each"
                - "Note the lender and how each loan was repaid"
                - "Add each completed scheme to the track record schedule @recurring(yearly)"
            - name: Personal financial statement and guarantee position
              description: |-
                ## Purpose
                Almost every development lender to a small developer asks for a personal guarantee and a statement of personal assets and liabilities. Preparing it calmly, with evidence, before the application avoids a rushed form that undersells you, and it forces a clear view of how much personal exposure you are willing to give across all your live loans.

                ## Milestones
                1. A statement of personal assets, liabilities and income with evidence for each line.
                2. Every existing guarantee you have given listed with lender, amount and expiry.
                3. A written ceiling on total personal guarantee exposure you are prepared to carry.
                4. Independent legal advice on guarantees booked or noted as required before signing.

                ## Notes
                A guarantee is a personal legal commitment. Take independent legal advice before signing one, even if the lender says it is standard.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated personal financial statement with evidence, a list of existing guarantees and a written ceiling on new guarantee exposure."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the latest statements for property, savings, pensions and loans"
                - "List every guarantee you have already signed with its amount"
                - "Write your maximum acceptable guarantee exposure in one sentence"
                - "Refresh the personal financial statement with current balances @recurring(quarterly)"
            - name: Sponsor equity and source of funds evidence
              description: |-
                ## Purpose
                Every credit team needs to see that the equity is real, available now and legitimately sourced, and anti-money laundering checks will ask where every large sum came from. Assembling bank statements, sale completion statements and investor commitments into one evidence file before applying stops the credit process pausing at the point when the land deadline is closest.

                ## Milestones
                1. The equity required for the scheme stated as one figure, including land already paid for.
                2. Bank or investment statements showing available cash for each source.
                3. A short source-of-wealth note explaining how each large sum was built up.
                4. Signed commitment letters from any third-party equity providers.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An equity evidence file covering every pound or dollar of sponsor equity with statements, a source-of-wealth note and any investor commitment letters."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the total equity the scheme needs, including land value already paid"
                - "Download the last three months of statements for each equity source"
                - "Draft a one-page source-of-wealth note"
                - "Ask each outside equity provider for a signed commitment letter"
            - name: Choosing a development finance broker
              description: |-
                ## Purpose
                A good broker knows which lenders are actually funding this quarter and how to present a borrower, while a poor one sprays the same pack at thirty lenders and burns your name. Comparing two or three brokers on scheme experience, lender panel, fee basis and references lets you decide whether to use one at all, and on what terms.

                ## Milestones
                1. Two or three brokers shortlisted from developer referrals.
                2. Each broker scored on similar schemes placed, lender panel, fee and exclusivity terms.
                3. References taken from at least one developer each broker has funded.
                4. A decision recorded to use one broker, or to approach lenders directly, with the reason.

                ## Notes
                Start from the **Purchase decision** template. Agree in writing which lenders the broker may approach in your name, and check whether they are regulated where your country requires it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a broker or a direct approach, with at least two brokers scored and one reference taken for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three developers which brokers placed their last facility"
                - "Request each broker's recent deal list and fee terms"
                - "Call one reference for each shortlisted broker"
                - "Record the decision and the agreed list of lenders to approach"
            - name: Finance timeline worked back from land completion
              description: |-
                ## Purpose
                Development facilities usually take weeks to months from first enquiry to funds, and the land contract will not wait. Working back from the completion or planning date through enquiries, indicative terms, credit approval, valuation, legal work and conditions precedent shows when each step must start and whether the deadline is realistic before you commit.

                ## Milestones
                1. The fixed date written down: land completion, start on site or option expiry.
                2. Each finance step listed with a realistic duration and an owner.
                3. A start date for lender enquiries calculated from the fixed date.
                4. A fallback agreed if finance runs late, such as a short bridge or a contract extension.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated finance timeline from first enquiry to first drawdown with owners and a written fallback, worked back from a fixed land or start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the fixed land completion or start on site date"
                - "Ask your broker or a lender how long each stage took on their last deal"
                - "Lay the stages backwards from the fixed date"
                - "Agree a fallback with your solicitor if finance is late"
            - name: All-in cost of finance calculator
              description: |-
                ## Purpose
                Headline interest rate is often the smallest part of the difference between two loans. A calculator that takes the facility size, drawdown profile, interest basis, arrangement, exit, monitoring and legal fees and returns the all-in cost and an effective annual rate lets you compare offers on what they really cost and feed the right figure back into the appraisal.

                ## Milestones
                1. Inputs set up for facility size, monthly drawdown profile, rate, fees and term.
                2. Interest calculated month by month on the drawn balance, rolled where the loan rolls it.
                3. Total cost of finance and an effective annual rate shown on one line.
                4. The calculator checked against a lender's own illustration for one quote.

                ## Notes
                Exit fees calculated on gross development value rather than the loan can be the biggest single cost. Read what each fee is a percentage of.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working calculator that returns total finance cost and an effective rate, reconciled to within a small margin of one lender's own illustration."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Lay out a monthly drawdown profile from the build cost plan"
                - "Add interest on the drawn balance with a rolled interest option"
                - "Add each fee with the base it is calculated on"
                - "Check the output against one lender's illustration and fix any gap"
            - name: Credit pack and loan application
              description: |-
                ## Purpose
                Credit committees decide on paper, often without meeting you. A pack that leads with a one-page summary, then the scheme, appraisal, cost plan, programme, planning position, sales or letting evidence, sponsor track record and the exit, lets an underwriter present your deal well. A thin pack is read as a thin borrower.

                ## Milestones
                1. A one-page summary with the ask, the scheme, the stack and the exit.
                2. Supporting appendices: appraisal, cost plan, programme, planning consent, comparable evidence and drawings.
                3. Sponsor section with track record, personal statement and equity evidence.
                4. Known risks and their mitigations stated plainly rather than left for the lender to find.
                5. The pack read by someone outside the deal and their questions answered in it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete credit pack with a one-page summary and every listed appendix, reviewed by one person outside the deal before it goes to a lender."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the one-page summary of ask, scheme, stack and exit"
                - "Collect the appraisal, cost plan, programme and planning consent"
                - "Write a risks and mitigations page"
                - "Ask someone outside the deal to read the pack and list their questions"
                - "Answer each question inside the pack before sending it"
            - name: Comparing indicative term sheets side by side
              description: |-
                ## Purpose
                Two or three indicative offers arrive in different layouts, with different fee bases, conditions and covenants, and the cheapest headline rate is rarely the cheapest loan. Laying them in one grid, with all-in cost from your calculator, gross and net loan amounts, guarantees, conditions and how much is truly committed, makes the choice defensible and gives you points to negotiate.

                ## Milestones
                1. Each offer entered into the same grid of amount, rate, fees, term, covenants and conditions.
                2. Net day one and total loan available calculated for each after retentions and fees.
                3. All-in finance cost run through the calculator for each offer.
                4. Two or three negotiation points identified on the preferred offer.
                5. A choice recorded with the reasons and the runner-up kept warm.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison grid of at least two offers with all-in cost, net loan and conditions, and a recorded choice with reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up one comparison grid with the same rows for every offer"
                - "Enter each offer and flag any term that is missing"
                - "Run each through the all-in cost calculator"
                - "List the points to negotiate on the preferred offer"
                - "Tell the runner-up lender where they fell short"
            - name: Monthly drawdown request cycle
              description: |-
                ## Purpose
                Construction loans release money in arrears against work certified on site, so a late or incomplete drawdown request becomes a late payment to the contractor. A fixed monthly cycle, from the contractor's valuation through your quantity surveyor's certificate, the monitoring surveyor's sign-off and the lender's release, keeps cash arriving before invoices fall due.

                ## Milestones
                1. A fixed monthly date agreed with the contractor, quantity surveyor and monitoring surveyor.
                2. A standard request pack: certificate, invoices, cost report, programme update and photos.
                3. Each request logged with date sent, amount asked, amount released and date received.
                4. Three consecutive months released without a missing-document query.

                ## Notes
                Ask the lender early how many days they need after the monitoring surveyor signs off. That figure sets the whole calendar.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A drawdown log showing every request with amounts and dates, and three consecutive months released without a document query."
                cadence: rolling
              tasks:
                - "Agree the monthly valuation and certificate dates with the contractor and QS"
                - "Write a standard checklist for the drawdown request pack"
                - "Submit the drawdown request pack to the lender and monitoring surveyor @recurring(monthly:20)"
                - "Log amount requested, amount released and date received for each drawdown"
            - name: Working relationship with the monitoring surveyor
              description: |-
                ## Purpose
                The monitoring surveyor works for the lender, but their reports decide when and how much you are paid. Treating them as part of the delivery team, sending information before they ask, walking the site with them and answering queries within days, turns a source of delay into the reason drawdowns go smoothly.

                ## Milestones
                1. The monitoring surveyor's scope and fee basis read and understood.
                2. One named contact on your side for every monitoring surveyor query.
                3. A monthly information pack sent ahead of each site visit.
                4. Every open query in their last report answered before the next visit.

                ## Notes
                Their fees are usually charged to you. Ask what triggers extra visits so you can avoid paying for avoidable ones.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No query from the monitoring surveyor open for more than one reporting cycle across the life of the loan."
                cadence: rolling
              tasks:
                - "Read the monitoring surveyor's appointment and note what triggers extra fees"
                - "Name one person on your team to answer every query"
                - "Send the monitoring surveyor the updated programme and site photos @recurring(monthly:16)"
                - "Close out each open query from their last report before the next visit"
            - name: Facility headroom and cost to complete tracker
              description: |-
                ## Purpose
                Facilities run out when the remaining facility is smaller than the cost still to spend, and by the time the monitoring surveyor reports it the conversation is already hard. Tracking undrawn facility against cost to complete every month, with contingency and interest shown separately, tells you about a shortfall early enough to fix it.

                ## Milestones
                1. Undrawn facility split into build, contingency, interest and fee allowances.
                2. Cost to complete updated from the latest cost report each month.
                3. Headroom shown as one figure with a trend over the last three months.
                4. A written trigger level that prompts an early conversation with the lender.

                ## Notes
                Start from the **Metrics log** template. Keep the interest allowance separate: rate rises and programme slips eat it quietly.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly headroom figure recorded for every month of the loan, with a written trigger level for raising a shortfall with the lender."
                cadence: rolling
              tasks:
                - "Split the undrawn facility into build, contingency and interest lines"
                - "Set the headroom level that triggers a call to the lender"
                - "Update cost to complete and remaining facility headroom @recurring(monthly:26)"
                - "Check the interest allowance against the latest programme"
            - name: Facility conditions and covenant calendar
              description: |-
                ## Purpose
                Facility agreements carry conditions subsequent, information covenants, financial tests and milestone dates such as start on site and practical completion. Missing one can be an event of default even when the build is going well. A calendar of every obligation with its date and owner keeps the loan in good standing without relying on memory.

                ## Milestones
                1. Every covenant, condition subsequent and reporting duty extracted from the facility agreement.
                2. Each obligation given a date, an owner and the clause it comes from.
                3. Financial tests such as loan to value or cost to complete scheduled ahead of each test date.
                4. A record of each obligation met, with the evidence sent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A covenant calendar covering every obligation in the facility agreement, with each one logged as met and evidenced by its due date."
                cadence: rolling
              tasks:
                - "Ask your solicitor for a list of obligations from the signed facility agreement"
                - "Enter each obligation with its date, owner and clause number"
                - "Check the calendar for conditions due in the next thirty days @recurring(monthly:3)"
                - "Run the financial covenant tests ahead of each test date @recurring(quarterly)"
            - name: Interest and fee statement reconciliation
              description: |-
                ## Purpose
                Lender statements can contain errors: interest charged on undrawn sums, fees added twice, rate changes applied on the wrong date. Reconciling each statement to your own ledger takes half an hour a month and catches mistakes while they are small, and it gives your accountant clean figures for capitalised interest.

                ## Milestones
                1. Your own ledger of drawdowns, rate changes, interest and fees set up.
                2. Each lender statement checked line by line against it.
                3. Differences raised with the lender in writing with your calculation attached.
                4. A running total of interest and fees agreed with the lender at each quarter end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lender statement over the loan's life reconciled to your ledger, with any difference raised in writing and resolved."
                cadence: rolling
              tasks:
                - "Set up a ledger of drawdowns, rate and fee events for the facility"
                - "Reconcile the lender's interest statement to your own ledger @recurring(monthly:8)"
                - "Email the lender any difference with your calculation attached"
                - "Send the agreed interest and fee totals to your accountant"
            - name: Quarterly lender progress report
              description: |-
                ## Purpose
                Any lender who hears from you only when you need money assume the worst when news is late. A short quarterly report, covering progress against programme, cost against budget, headroom, sales or lettings, risks and anything you need from them, builds the credibility you will need if the scheme ever slips and puts you first in line for the next facility.

                ## Milestones
                1. A two-page report layout agreed with the lender's relationship manager.
                2. Progress, cost, headroom, sales and risks covered in the same order every quarter.
                3. Bad news reported in the quarter it becomes known, with the plan to deal with it.
                4. Four consecutive reports sent on time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly report sent to the lender on time every quarter of the loan, in a consistent layout covering progress, cost, headroom, sales and risks."
                cadence: rolling
              tasks:
                - "Ask the relationship manager what they want in a quarterly update"
                - "Draft a two-page report layout with fixed sections"
                - "Assemble and send the quarterly lender report @recurring(quarterly)"
            - name: Insurance and security document register
              description: |-
                ## Purpose
                Security for a development loan usually covers the site, the shares in the project company, the building contract and the professional appointments, and the lender needs its interest noted on contractor's all risks and other insurance. A register of every security document, collateral warranty and policy, with renewal dates, avoids a lapsed policy freezing drawdowns.

                ## Milestones
                1. Every security document listed with date signed and where the original is held.
                2. Collateral warranties from contractor and consultants tracked as received or outstanding.
                3. Each insurance policy listed with insurer, cover, expiry and lender interest noted.
                4. Renewal dates in the covenant calendar with a lead time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A register listing every security document, warranty and insurance policy with status and expiry, with no policy lapsing during the loan."
                cadence: rolling
              tasks:
                - "List each security document and warranty the lender required"
                - "Ask the broker for each policy schedule showing the lender's interest"
                - "Check insurance policies and lender interest notes are in date @recurring(quarterly)"
            - name: Project cash flow and equity call forecast
              description: |-
                ## Purpose
                Sponsor equity is usually expected to go in first, and costs the facility does not cover still need paying. A monthly cash flow showing what comes from equity, what from each debt layer and when equity partners must be called stops the scheme pausing because cash was in the wrong account at the wrong time.

                ## Milestones
                1. A monthly cash flow from land purchase to repayment, split by funding source.
                2. Costs the senior loan excludes identified and funded from equity.
                3. Equity calls dated and notified to partners with agreed notice periods.
                4. The forecast compared each month with actual spend and the variance explained.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cash flow by funding source re-forecast every month of the build, with equity calls notified within the agreed notice period."
                cadence: rolling
              tasks:
                - "Lay out monthly spend by funding source from the appraisal"
                - "List the costs the senior facility will not pay for"
                - "Re-forecast the monthly project cash flow and equity calls @recurring(monthly:12)"
                - "Send equity partners notice of the next call with the agreed lead time"
            - name: Warm relationships with several lenders
              description: |-
                ## Purpose
                Developers who know only one lender take whatever terms that lender offers, and are stuck when its appetite changes. Keeping three or more lenders informed about your pipeline, with an occasional coffee and a copy of your track record, means you have options when the next site comes up and somewhere to go if your current lender pulls back.

                ## Milestones
                1. At least three lenders outside your current facility with a named contact each.
                2. Your track record and pipeline sent to each once a year.
                3. A short note of each conversation: appetite, scheme sizes, recent changes.
                4. At least one indicative appetite response on your next site before you need it.

                ## Notes
                Start from the **Meeting notes** template for each catch-up so appetite and terms are recorded, not remembered.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three named lender contacts outside the current facility, each spoken to at least twice a year with notes recorded."
                cadence: rolling
              tasks:
                - "Name three lenders you want to know better and find a contact at each"
                - "Send each your track record and a short pipeline note"
                - "Hold one catch-up with a lender you are not currently borrowing from @recurring(quarterly)"
            - name: Market terms and rates log
              description: |-
                ## Purpose
                Without a record of what lenders were quoting, every new offer is judged against memory. A short monthly log of base and swap rates and the margins, fees and loan to cost ratios you have been quoted or heard of shows whether an offer is in line with the market and feeds realistic finance assumptions into your next appraisal.

                ## Milestones
                1. A log with columns for date, base rate, a swap rate, margin, fees and loan to cost.
                2. At least three data points from quotes, brokers or published lender surveys each month.
                3. A six-month trend visible for margins and fees.
                4. The current figures used in the finance section of your appraisal.

                ## Notes
                Start from the **Metrics log** template. Record where each figure came from so you know which ones are firm quotes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A terms log with at least three data points a month for six months, and the latest figures used in the current appraisal."
                cadence: rolling
              tasks:
                - "Set up the terms log with source and date columns"
                - "Log current base rate, a swap rate and three quoted margins @recurring(monthly:5)"
                - "Copy the latest figures into the finance section of your appraisal"
            - name: Reading a development term sheet line by line
              description: |-
                ## Purpose
                Term sheets look short and friendly, yet they fix the facility size, the conditions, the fees payable even if the deal fails and the exclusivity that stops you talking to anyone else. Reading three real term sheets clause by clause, with notes on what each clause does, teaches you to spot the costly ones before you sign and pay a commitment fee.

                ## Milestones
                1. Three term sheets annotated clause by clause in your own words.
                2. Fees payable on signing or on a failed deal identified in each.
                3. Exclusivity, break and expiry terms noted for each.
                4. A personal checklist of the ten clauses to read first on any term sheet.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three annotated term sheets and a ten-clause checklist saved for use on the next offer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect three term sheets from past deals, a broker or a mentor"
                - "Annotate each clause with what it does and what it costs"
                - "Mark every fee payable before or without completion"
                - "Write the ten clauses you will read first next time"
            - name: How lenders size a development loan
              description: |-
                ## Purpose
                Each lender sizes a loan against several limits at once, typically a share of total cost, a share of gross development value and a day one land advance, and the lowest result wins. Learning to run those tests yourself means you know the realistic loan before applying, can explain a gap without surprise and can see which assumption is constraining the size.

                ## Milestones
                1. The usual sizing tests written out with the figure each one is calculated on.
                2. All tests run on one of your schemes, with the binding test identified.
                3. The effect of a lower valuation or higher cost on loan size shown.
                4. A short note on how land value and the day one advance are treated by lenders you know.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked sizing calculation on one scheme showing every test, the binding constraint and the loan size under a lower valuation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write out each sizing test lenders apply to development loans"
                - "Run every test on one current or past scheme"
                - "Identify which test limits the loan and why"
                - "Rerun the tests with a lower valuation and a higher build cost"
            - name: Rolled and retained interest worked examples
              description: |-
                ## Purpose
                Most development loans do not ask for monthly interest payments: interest is rolled up or retained from the facility at the start. Either way it reduces the money available for building, and the amount depends on the drawdown profile and programme. Working both methods through on one scheme shows how a three-month delay changes the facility you need.

                ## Milestones
                1. Rolled interest calculated month by month on one scheme's drawdown profile.
                2. Retained interest calculated on the same scheme and compared.
                3. The effect of a three-month programme delay on each method shown.
                4. A note on which method each of your preferred lenders uses.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked spreadsheet comparing rolled and retained interest on one scheme, including a three-month delay case."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Build a monthly drawdown profile for one scheme"
                - "Calculate rolled interest month by month"
                - "Calculate retained interest on the same profile"
                - "Add three months to the programme and compare both results"
            - name: Facility agreement clauses that bite
              description: |-
                ## Purpose
                The facility agreement is long and drafted by the lender's solicitor, and most borrowers read only the commercial terms. The clauses that cause trouble are the events of default, cost overrun and completion date provisions, cross-default, information duties and the lender's rights to step in. Knowing what each does lets you ask your solicitor the right questions while there is still time to negotiate.

                ## Milestones
                1. Events of default listed with any grace periods in one agreement you can read.
                2. Cost overrun, completion date and step-in rights summarised in plain words.
                3. Cross-default and change of control clauses identified.
                4. A list of questions to raise with your solicitor before the next facility is signed.

                ## Notes
                This is for understanding only. Your solicitor advises on the agreement in front of you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-words summary of default, overrun, completion and step-in clauses from one agreement, and a written question list for your solicitor."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get a past or sample development facility agreement to read"
                - "List every event of default and its grace period"
                - "Summarise the cost overrun and completion date clauses"
                - "Write the questions to raise with your solicitor next time"
            - name: Mezzanine finance mechanics
              description: |-
                ## Purpose
                Mezzanine sits behind the senior loan and in front of your equity, so it costs more and comes with its own conditions, often including a share of profit. Understanding how it is priced, secured and repaid, and what it does to your profit and control, lets you judge whether stretching the stack is worth it on a given scheme.

                ## Milestones
                1. Pricing elements listed: interest, arrangement and exit fees, and any profit share.
                2. Security and ranking behind the senior lender described.
                3. One scheme run with and without mezzanine to show the effect on sponsor profit and equity return.
                4. The consents a senior lender usually needs before mezzanine can be added noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked comparison of one scheme with and without mezzanine showing sponsor profit, equity required and return on equity."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List how mezzanine lenders charge for their money"
                - "Run one scheme with senior debt only and record sponsor profit"
                - "Add a mezzanine layer and record profit, equity and return"
                - "Note what consents the senior lender would need"
            - name: Intercreditor agreements explained
              description: |-
                ## Purpose
                Whenever there is more than one lender, an intercreditor agreement sets who is paid first, who can enforce and when, and whether the junior lender can cure a default or buy out the senior loan. Understanding these rights matters to the borrower because they decide what happens to your scheme if things go wrong.

                ## Milestones
                1. The purpose of an intercreditor agreement summarised in a paragraph.
                2. Payment ranking, standstill periods and cure rights explained in plain words.
                3. Purchase options and enforcement triggers described.
                4. A short list of points to ask your solicitor about on a two-lender deal.

                ## Notes
                Intercreditor terms are negotiated between the lenders, but delays in agreeing them often hold up your completion. Start the conversation early.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-words note on ranking, standstill, cure and purchase rights, with questions for your solicitor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a summary of a typical senior and mezzanine intercreditor agreement"
                - "Write ranking, standstill and cure rights in your own words"
                - "Note what each lender can do if the scheme defaults"
                - "List the questions to ask your solicitor on your next two-lender deal"
            - name: What the monitoring surveyor's initial report checks
              description: |-
                ## Purpose
                Before the first drawdown, the lender's monitoring surveyor reviews your cost plan, programme, building contract, appointments, planning consent and procurement. Their initial report can cut the facility or add conditions. Knowing what they test lets you fix gaps in your own documents first instead of reading about them in the report.

                ## Milestones
                1. The usual contents of an initial report listed section by section.
                2. Your own cost plan, programme and contracts checked against that list.
                3. Gaps such as unsigned appointments or missing warranties closed before instruction.
                4. A copy of the final report read and every recommendation actioned or answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A checklist of initial report contents, your documents checked against it, and every recommendation in the final report answered in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lender for a sample initial report or its table of contents"
                - "Check your cost plan, programme and contracts against it"
                - "Close the gaps before the monitoring surveyor is instructed"
                - "Answer each recommendation in the final report in writing"
            - name: Senior only or senior plus mezzanine decision
              description: |-
                ## Purpose
                Adding mezzanine cuts the equity you need but raises cost, adds a second set of conditions and leaves less margin for overruns. Running the scheme both ways, with base and downside cases, and setting out the effect on equity return, profit and risk, lets you make a deliberate choice rather than taking the most debt on offer.

                ## Milestones
                1. Base and downside cases run with senior debt only.
                2. The same cases run with senior plus mezzanine.
                3. Equity required, profit and return on equity compared for each.
                4. A decision recorded with the downside you are prepared to accept.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded structure decision supported by base and downside cases for both senior-only and senior plus mezzanine."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Run base and downside cases with senior debt only"
                - "Rerun both cases with an indicative mezzanine quote"
                - "Compare equity, profit and return on equity in one table"
                - "Record the chosen structure and the downside you accept"
            - name: Preferred equity or mezzanine for the gap
              description: |-
                ## Purpose
                When the gap above senior debt is too wide for your own equity, preferred equity and mezzanine can both fill it, but they behave differently: one is debt with security and default rights, the other is equity with a priority return and often a share of control. Comparing indicative offers of each shows which fits the scheme, the senior lender's consent and your appetite for giving up decisions.

                ## Milestones
                1. One indicative offer, or a realistic set of terms, for each option.
                2. Cost, security, control rights and remedies on default compared in one table.
                3. Each option tested for the senior lender's consent.
                4. A preferred route recorded with the reasons.

                ## Notes
                Preferred equity can raise securities rules where you take money from investors. Ask your solicitor before marketing any equity offer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of preferred equity and mezzanine terms for one scheme, with a recorded choice and senior lender consent checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a broker for indicative mezzanine and preferred equity terms"
                - "Compare cost, security and control rights in one table"
                - "Ask the senior lender whether each option is acceptable"
                - "Record the chosen route with the reasons"
            - name: Personal guarantee scope negotiation
              description: |-
                ## Purpose
                Guarantees can cover the whole loan, a capped amount, cost overruns only, interest only or completion only. The scope is negotiable, especially with a good track record and a strong scheme. Asking for a capped or limited guarantee, with a release on practical completion, can reduce personal exposure without losing the deal.

                ## Milestones
                1. The guarantee in the current offer read and its scope written in plain words.
                2. Alternative scopes listed: capped, cost overrun, interest, completion only.
                3. A specific ask put to the lender with the reasons it is reasonable.
                4. The agreed scope confirmed in writing and reviewed by your own solicitor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written lender response to a specific guarantee proposal, and the final guarantee scope reviewed by your own solicitor before signing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the scope of the guarantee in the current offer in plain words"
                - "Choose the alternative scope you will ask for"
                - "Put the request to the lender with your reasons"
                - "Have your solicitor review the final guarantee wording"
            - name: Cost overrun and standby funding plan
              description: |-
                ## Purpose
                Lenders ask how an overrun would be paid, and many expect a sponsor commitment to fund one. A written plan, showing contingency in the facility, cash or committed standby equity and the point at which each is used, gives the credit team comfort and gives you a playbook instead of a crisis if costs rise.

                ## Milestones
                1. The main overrun risks listed with a rough cost range for each.
                2. Contingency within the facility and outside it stated separately.
                3. Standby equity identified with how quickly it could be drawn.
                4. The order in which contingency and standby funds would be used written down.

                ## Notes
                Start from the **Risk register** template for the overrun risks. Keep the cost control detail with your quantity surveyor; this plan is about where the money comes from.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written overrun funding plan naming contingency, standby equity and the order of use, accepted by the lender as part of credit approval."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five largest overrun risks with the quantity surveyor"
                - "State the contingency inside and outside the facility"
                - "Identify standby equity and how fast it can be drawn"
                - "Review overrun risks against contingency and standby funds @recurring(monthly:10)"
            - name: Fee and early repayment terms negotiation
              description: |-
                ## Purpose
                Arrangement, exit, non-utilisation and minimum interest periods often matter more than the rate when a scheme sells quickly or refinances early. Negotiating the fee basis and any minimum earn before credit approval, while you still have competing offers, is the cheapest money a developer ever saves.

                ## Milestones
                1. Each fee and minimum interest term listed with its base and trigger.
                2. The cost of early repayment shown at three possible repayment dates.
                3. Two or three requested changes put to the lender in writing.
                4. Agreed changes reflected in the credit-approved terms.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Requested fee and early repayment changes sent in writing, and the outcome reflected in the credit-approved terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every fee and minimum interest term in the offer"
                - "Calculate repayment cost at three different dates"
                - "Send the lender your requested changes"
                - "Check the approved terms include what was agreed"
            - name: Credit committee and lender site visit
              description: |-
                ## Purpose
                Before credit committee, many lenders want to walk the site and meet the sponsor and the professional team. That meeting often decides the deal. Preparing who attends, what they say, which questions are likely and what documents to bring makes a short visit count, and recording what was promised avoids surprises in the conditions.

                ## Milestones
                1. Attendees and their roles agreed, including the contractor or quantity surveyor where useful.
                2. A one-page visit brief with the scheme story, programme and key numbers.
                3. Answers prepared for the ten most likely credit questions.
                4. Notes of the visit and any promises made sent to the lender within two days.

                ## Notes
                Start from the **Meeting notes** template so actions from the visit are captured and followed up.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A site visit held with a written brief and prepared answers, and visit notes with actions sent to the lender within two days."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the date, attendees and route around the site"
                - "Write a one-page brief for the visit"
                - "Prepare answers to the ten questions you most expect"
                - "Send visit notes and promised documents to the lender"
            - name: Conditions precedent tracker to first drawdown
              description: |-
                ## Purpose
                Between credit approval and first drawdown sits a list of conditions precedent: signed contracts, appointments, warranties, insurance, planning, title, valuation and the monitoring surveyor's report. Each one has an owner and a lead time, and one missing item holds the whole loan. A tracker reviewed twice a week in the final month gets you to funds on time.

                ## Milestones
                1. Every condition precedent listed from the facility agreement with an owner and due date.
                2. Items needing third parties, such as warranties and insurance, chased first.
                3. Status reviewed with your solicitor at least weekly in the final month.
                4. All conditions satisfied and confirmed by the lender's solicitor in writing.

                ## Notes
                Keep one row per condition, one owner and one date. Collateral warranties are the usual last item.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written confirmation from the lender's solicitor that every condition precedent is satisfied, by the date first drawdown is needed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your solicitor for the full conditions precedent list"
                - "Give each condition an owner and a due date"
                - "Chase warranties and insurance documents first"
                - "Get written confirmation that all conditions are satisfied"
            - name: Lender valuation instruction and report review
              description: |-
                ## Purpose
                The lender's valuation sets gross development value and land value for the loan, so a low figure shrinks the facility. You cannot instruct or steer the valuer, but you can make sure they have good evidence: the consent, drawings, accommodation schedule, comparable sales and any pre-sales. Reviewing the report for factual errors afterwards is legitimate and often worthwhile.

                ## Milestones
                1. An information pack sent to the valuer through the lender.
                2. Site access arranged and someone who knows the scheme available on the day.
                3. The report checked for factual errors in areas, unit mix or consent details.
                4. Any factual corrections raised through the lender in writing.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A valuation completed with your information pack supplied, and the report checked with any factual errors raised in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Assemble consent, drawings, accommodation schedule and sales evidence"
                - "Send the pack to the lender for the valuer"
                - "Check the valuation report against your accommodation schedule"
                - "Raise any factual errors with the lender in writing"
            - name: Cost overrun conversation with the lender
              description: |-
                ## Purpose
                When headroom falls below what is needed to finish, the worst moment to tell the lender is when a drawdown is refused. Going to them early with the cause, the size, the funding solution and a revised cash flow keeps the relationship intact and gives you the best chance of an agreed solution rather than a reservation of rights letter.

                ## Milestones
                1. The overrun size and cause confirmed with the quantity surveyor.
                2. A funding solution set out: contingency, standby equity, mezzanine or a facility increase.
                3. A revised cash flow and programme ready to share.
                4. A meeting held and the agreed position confirmed in writing.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lender told of the overrun before any drawdown is refused, with a written agreed funding position recorded after the meeting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the overrun figure and cause with the quantity surveyor"
                - "Write the funding solution and revised cash flow"
                - "Book a meeting with the relationship manager"
                - "Send a written note of the agreed position after the meeting"
            - name: Loan term extension request
              description: |-
                ## Purpose
                Programme slips and slow sales can push repayment past the facility's term, and lenders charge for extensions or default interest if none is agreed. Asking months before maturity, with evidence of progress and a credible repayment plan, gives you a better outcome than asking in the final weeks.

                ## Milestones
                1. The maturity date and the extension terms in the agreement checked.
                2. A revised programme and repayment plan with evidence such as reservations or a refinance offer.
                3. A written extension request sent well before maturity.
                4. An agreed extension letter signed with its cost known.

                ## Notes
                Your refinance or sale strategy sits in its own area. This project is about the request to the current lender.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed extension letter in place before the original maturity date, with its fees and new date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the maturity date and any extension option in the agreement"
                - "Prepare the revised programme and repayment evidence"
                - "Send the extension request to the relationship manager"
                - "Record the agreed fee and new maturity date"
            - name: Facility redemption and security release
              description: |-
                ## Purpose
                Repaying a development loan involves a redemption statement, final interest and fees, discharges of every charge and the return of guarantees. Missed discharges can delay the sale of units or a refinance for weeks. Treating closeout as a project, with a checklist and your solicitor, finishes the loan cleanly and frees your guarantee.

                ## Milestones
                1. A redemption statement requested and checked against your ledger.
                2. Every charge, debenture and assignment listed for release.
                3. Releases and discharges received and registered.
                4. Written confirmation that each personal guarantee is released.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The loan repaid against a checked redemption statement, all security discharged and every guarantee released in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request a redemption statement and check it against your ledger"
                - "List every security document that needs releasing"
                - "Confirm with your solicitor that discharges are registered"
                - "Get written release of each personal guarantee"
            - name: First development loan for a new developer
              description: |-
                ## Purpose
                First-time developers often hear no from mainstream lenders because there is no track record. The usual routes in are a smaller scheme, a lower loan to cost, an experienced partner or project manager on the team, or a specialist lender that backs new developers at a higher price. Planning the first loan around those facts, rather than the lender you would like, gets the first scheme funded.

                ## Milestones
                1. A scheme size realistic for a first-time borrower agreed.
                2. An experienced contractor, project manager or partner named in the team.
                3. Three lenders known to back first-time developers approached.
                4. An indicative offer received and its higher cost built into the appraisal.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An indicative offer from a lender that backs first-time developers, with its cost reflected in the scheme appraisal."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask three established developers how they funded their first scheme"
                - "Name the experienced people you will put in the team"
                - "Approach three lenders that back first-time developers"
                - "Update the appraisal with the indicative offer's real cost"
            - name: Funding a builder's own-account scheme
              description: |-
                ## Purpose
                Builders moving into their own schemes have the construction skill lenders want, but the lender will worry about a related-party contract, a fixed price that is not truly fixed and the builder's other jobs competing for labour. Addressing those concerns head on, with an independent cost check, a proper building contract and a clear resource plan, makes the builder an attractive borrower.

                ## Milestones
                1. A building contract between the project company and the building company.
                2. An independent quantity surveyor's check of the cost plan.
                3. A resource plan showing labour and supervision committed to the scheme.
                4. A lender's view on related-party construction obtained before applying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed related-party building contract, an independent cost check and a resource plan, accepted by a lender in an indicative offer."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a lender how they treat a borrower who is also the builder"
                - "Put a building contract in place between the two companies"
                - "Commission an independent quantity surveyor check of the cost plan"
                - "Write a resource plan for labour and site supervision"
            - name: Contributing land as equity
              description: |-
                ## Purpose
                Family land or a plot or land you already own can count towards the equity, but lenders value it at a figure they choose, may want it free of any existing charge and will look at how it was acquired. Agreeing early how the land will be treated in the stack avoids discovering late that the equity is smaller than you thought.

                ## Milestones
                1. Title, ownership and any existing charges on the land confirmed.
                2. The value lenders are likely to give the land compared with your own view.
                3. Any family or co-owner consents needed to charge the land obtained.
                4. The agreed land equity figure written into the capital stack.

                ## Notes
                Where the land is shared family land, as is common in parts of the Caribbean, get every owner's written consent and legal advice before offering it as security.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A land equity figure agreed with the lender and written into the capital stack, with every owner's consent to charge the land on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get an up-to-date title search or registry extract"
                - "Ask two lenders how they would value land already owned"
                - "Obtain written consent from every co-owner"
                - "Enter the agreed land equity figure in the capital stack"
            - name: Private lender loans for a small scheme
              description: |-
                ## Purpose
                Small schemes are often funded partly by private individuals lending at a fixed rate, sometimes behind a bank. These loans are simple to agree and easy to get wrong: no written terms, unclear security and confusion about when they are repaid. Documenting each one properly protects both sides and keeps the senior lender comfortable.

                ## Milestones
                1. A written loan agreement for every private lender, drafted by a solicitor.
                2. Security, ranking and senior lender consent confirmed for each.
                3. A repayment schedule tied to the scheme's exit.
                4. Each private lender given a regular statement of interest and progress.

                ## Notes
                Taking loans from members of the public can fall under financial promotion or securities rules. Ask your solicitor before approaching anyone outside friends and family.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Signed loan agreements for every private lender, with ranking agreed with the senior lender and a statement sent each quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List each private lender with amount, rate and expected repayment date"
                - "Ask your solicitor to draft a standard private loan agreement"
                - "Confirm the senior lender consents to each loan"
                - "Send each private lender an interest and progress statement @recurring(quarterly)"
            - name: Construction finance from Caribbean commercial banks
              description: |-
                ## Purpose
                In much of the Caribbean, development lending comes from a few commercial banks and credit unions, often with lower loan to cost, a requirement for pre-sales or deposits before drawdown, security by mortgage or hypothec and longer approval times. Building those expectations into the plan from the start avoids an appraisal that only works with terms the local market does not offer.

                ## Milestones
                1. Every bank and credit union active in development lending in your territory listed.
                2. Typical requirements for equity, pre-sales and security noted from at least two conversations.
                3. The appraisal and capital stack rerun on those terms.
                4. A plan for any foreign currency or regional lender option, with exchange risk noted.

                ## Notes
                Check whether the bank requires a local quantity surveyor, insurance with a hurricane cover rider or land title insurance before drawdown.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of active lenders in your territory with their stated requirements from two conversations, and the capital stack rerun on those terms."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List banks and credit unions lending on developments in your territory"
                - "Meet two of them and record their equity, pre-sale and security requirements"
                - "Rerun the capital stack on local terms"
                - "Note any regional or foreign currency option and its exchange risk"
            - name: Moving to a multi-site development facility
              description: |-
                ## Purpose
                A developer running several schemes at once can outgrow one loan per site, with separate fees, valuations and monitoring for each. A multi-site or revolving facility can cut cost and speed up new starts, at the price of cross-collateralisation and portfolio covenants. Testing whether your pipeline justifies it is a real decision for a growing small business.

                ## Milestones
                1. The pipeline listed with timing and finance needs for the next two years.
                2. Current costs of separate facilities totalled.
                3. Indicative terms for a portfolio facility obtained from at least one lender.
                4. A decision recorded, with the cross-collateral risk set out.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a multi-site facility, based on two-year pipeline needs and at least one indicative portfolio offer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the pipeline with finance needs over the next two years"
                - "Total the fees and costs of running separate facilities"
                - "Ask one lender for indicative portfolio facility terms"
                - "Review portfolio-wide facility usage and covenants @recurring(quarterly)"
            - name: Interest rate hedging on a floating facility
              description: |-
                ## Purpose
                A floating rate loan over a two or three year build can cost far more than the appraisal assumed if rates rise. Some lenders require a cap or swap; others leave it to you. Understanding the options, their cost and how break costs work lets you take an informed decision with the lender or a regulated adviser instead of signing whatever product is offered.

                ## Milestones
                1. The rate exposure on the facility calculated for a range of rate rises.
                2. Cap and swap options explained, including how break costs and premiums work.
                3. Quotes or illustrations obtained for at least one option.
                4. A decision recorded, and if hedged, the position matched to the drawn balance.

                ## Notes
                Hedging products are regulated in many countries. Take advice from a regulated adviser and do not treat this as a recommendation.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded hedging decision based on a rate sensitivity and at least one quoted option, with any hedge checked against the drawn balance."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Calculate interest cost under three rate rise scenarios"
                - "Ask the lender whether a hedge is required"
                - "Obtain an illustration for a cap and for a swap"
                - "Check the hedge position against the drawn balance @recurring(quarterly)"
            - name: Stretched senior and whole-loan structures
              description: |-
                ## Purpose
                Some debt funds offer one loan at a higher loan to cost instead of separate senior and mezzanine, with a single set of documents and one lender to deal with. That can be quicker and simpler, but the blended cost, fees and default terms need careful comparison with a two-lender stack.

                ## Milestones
                1. A stretched senior quote obtained or modelled on realistic terms.
                2. The same funding modelled as senior plus mezzanine.
                3. Blended cost, fees, default terms and timescales compared.
                4. A structure preference recorded for schemes of this size.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of a stretched senior loan with a senior plus mezzanine stack on blended cost and terms, with a recorded preference."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a broker which debt funds offer stretched senior loans"
                - "Model the blended cost of one stretched senior quote"
                - "Model the same funding as senior plus mezzanine"
                - "Record which structure suits schemes of this size and why"
            - name: Phased facility for a multi-phase scheme
              description: |-
                ## Purpose
                Large schemes built in phases can be funded with one facility drawn phase by phase, or a new loan each time, with sales from early phases repaying debt or funding later ones. The structure decides how much equity is tied up and how much risk carries across phases. Mapping it before the first phase starts saves renegotiating halfway through.

                ## Milestones
                1. Phases defined with cost, timing and expected sales or lettings.
                2. Funding options laid out: one phased facility, separate loans or a hybrid.
                3. Release rules agreed for how early-phase receipts repay debt.
                4. A preferred structure agreed in principle with a lender.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A phased funding plan with release rules for receipts, agreed in principle with a lender before phase one starts."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Define each phase with cost, timing and expected receipts"
                - "Lay out the funding options for the phases"
                - "Draft release rules for early-phase sales receipts"
                - "Discuss the preferred structure with one lender"
            - name: Sustainability-linked development loan terms
              description: |-
                ## Purpose
                Some lenders now offer a margin discount or better terms for schemes that hit agreed energy or green certification targets. The saving can be real, but so are the reporting duties and the cost of evidence. Testing whether a green loan pays for itself on your scheme stops you chasing a label that costs more than it saves.

                ## Milestones
                1. Lenders offering green or sustainability-linked development loans identified.
                2. Their targets and evidence requirements listed.
                3. Margin saving compared with extra design, certification and reporting cost.
                4. A decision recorded on whether to pursue the green terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on green loan terms, based on the margin saving against the cost of meeting and evidencing the targets."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two lenders whether they offer green development loan terms"
                - "List the targets and evidence each requires"
                - "Compare the margin saving with the extra cost"
                - "Record whether you will pursue the green terms"
            - name: Facility workout and standstill negotiation
              description: |-
                ## Purpose
                When a scheme is in or near default, through a large overrun, a contractor failure or a missed maturity, the lender may reserve its rights, stop drawdowns or appoint a receiver. A structured workout, with your solicitor and accountant, a clear picture of value and cost to complete and a credible plan, can lead to a standstill and a restructured loan instead of enforcement.

                ## Milestones
                1. Legal and accounting advisers appointed for the workout.
                2. An honest statement of position: value, cost to complete, debt and options.
                3. A restructuring proposal with new money, revised terms or a managed sale.
                4. A standstill or amended facility agreed in writing.

                ## Notes
                Take legal advice before replying to any reservation of rights or default letter. Keep talking to the lender; silence is what turns a workout into enforcement.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written standstill or amended facility agreed with the lender, supported by a statement of position and a restructuring proposal."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Appoint a solicitor and accountant experienced in loan workouts"
                - "Prepare a statement of value, cost to complete and debt"
                - "Ask the agent to draft a restructuring proposal outline for your advisers to review"
                - "Present the proposal to the lender and record the response"
---

# Construction Finance

Construction finance is the money that turns a consented site into a finished building: the senior development loan, any mezzanine or preferred equity stacked above it, and the sponsor equity that goes in first and comes out last. This area is for founders and small developers raising their own facilities and for builders moving into own-account schemes. It starts with the capital stack, the lender landscape and a credit pack lenders will read, moves through the monthly machinery of drawdowns, headroom and covenants, then covers the skills of reading term sheets and facility agreements, the decisions on structure and terms, the dated moments from credit committee to closeout, situations for different kinds of borrower and the specialist work of hedging, phased facilities and workouts.

The rhythms are a monthly drawdown cycle with the monitoring surveyor, a monthly check of cost to complete against facility headroom, monthly interest reconciliation and a market terms log, quarterly lender reports and covenant tests, and a yearly refresh of your track record and lender map. Purchase decision suits choosing a broker, Metrics log suits the headroom and terms trackers, Risk register suits cost overrun planning and Meeting notes suits lender visits and credit calls. None of this is financial, tax or legal advice: agree structures and documents with your solicitor, accountant and a regulated adviser where your country requires one. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
