---
id: investment-banking.debt-advisory-for-mid-market
name: Debt Advisory for Mid-Market
description: "Debt advice from the borrower's side for mid-sized companies: lender universes, credit papers, term sheet comparisons, refinancings, acquisition debt and the routines that keep advised clients ahead of their maturities."
category: business
version: 1.0.0
tags: [investment-banking, debt-advisory-for-mid-market, knowledge-worker, refinancing, direct-lending, lender-process, acquisition-finance, mid-market]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - risk-register
    - compliance-control
    - meeting-notes
    - purchase-decision
    - development-plan
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Debt Advisory for Mid-Market
          description: "Advising mid-sized companies on borrowing: refinancings, running lender processes, comparing terms and acquisition debt for growing businesses."
          projects:
            - name: Mid-market debt product map for borrowers
              description: |-
                ## Purpose
                Finance directors with 25 million of EBITDA can be offered a bank revolver, an amortising term loan, an asset-based line, invoice finance, a unitranche, stretch senior debt, mezzanine or a private placement, often in the same month. A one-page map of how each ranks, amortises, prices and can be repaid lets you explain the options in plain language before any lender is called.

                ## Milestones
                1. A one-page table of nine products by ranking, security, typical tenor, amortisation and pricing basis.
                2. Prepayment terms and the usual lender type added against each product.
                3. A short note on which products suit asset-heavy, cash-generative and fast-growing borrowers.
                4. The map reviewed by a director and corrected for your market's conventions.

                ## Notes
                Conventions differ between the UK and European, US and emerging markets. Mark the differences on the page rather than averaging them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of nine mid-market debt products, reviewed by a director, is saved and used in first client meetings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the nine debt products your team places most often"
                - "Fill in ranking, security, tenor and amortisation for each product"
                - "Add prepayment terms and the typical lender type per product"
                - "Ask a director to mark up the map for your market"
            - name: Lender universe map for mid-sized borrowers
              description: |-
                ## Purpose
                Mid-market borrowers usually know their house bank and little else, while the real universe runs to clearing banks, challenger banks, direct lending funds, business development companies, asset-based lenders, insurers buying private placements and development finance institutions. Mapping them by ticket size, sector appetite, hold level and structure gives every mandate a credible long list on day one.

                ## Milestones
                1. A list of at least 40 lenders grouped into six or more lender types.
                2. Typical ticket size, preferred EBITDA range and hold level noted for each lender.
                3. Sector exclusions and favourite structures recorded where they are public or known to the team.
                4. A named contact owner in your team for each lender.

                ## Notes
                Start from the **Vendor** template if you want one page per lender. Use public fund documents and your firm's CRM; do not copy another adviser's lists.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A lender map of 40 or more lenders with ticket size, EBITDA range, hold level and a team contact owner is saved in the team's shared drive."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the lenders your team has spoken to in the last two years from the CRM"
                - "Group them into banks, direct lenders, asset-based lenders, insurers and others"
                - "Add ticket size, EBITDA range and hold level for each lender"
                - "Assign a contact owner for every lender with a gap"
            - name: Debt advisory engagement letter and fee basis
              description: |-
                ## Purpose
                Debt advice is usually paid as a monthly or upfront retainer plus a success fee measured in basis points of facilities committed, and arguments start when the letter is vague about which facilities count, when the fee is earned or what happens if the client drops the process. Agreeing a clear scope and fee basis before work starts protects the relationship and the invoice.

                ## Milestones
                1. A scope paragraph naming the facilities, the lender process and what is excluded.
                2. Retainer, success fee basis, crediting of retainer and expenses set out in plain terms.
                3. Tail period, termination and conflicts wording reviewed by your firm's legal team.
                4. A signed letter on file before the first lender is approached.

                ## Notes
                Your firm's legal and compliance teams own the wording. Your job is to make sure the commercial terms match what was agreed with the client.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed engagement letter with scope, retainer, success fee basis and tail period is on file before any lender contact."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the firm's standard debt advisory engagement letter"
                - "Write the scope paragraph naming each facility in the mandate"
                - "Agree the success fee basis and retainer crediting with the client"
                - "Send the draft to legal and compliance for review @priority(high)"
            - name: Borrower credit profile on one page
              description: |-
                ## Purpose
                Lenders decide in the first ten minutes whether a borrower is worth a credit paper, and they look at the same handful of numbers: revenue and EBITDA history, net debt, cash conversion, customer concentration and what security is available. A one-page credit profile built from the client's accounts lets you test the story internally and spot the questions lenders will ask first.

                ## Milestones
                1. Three years of revenue, EBITDA, capex and free cash flow on one page.
                2. Net debt, net debt to EBITDA and interest cover at the last year end and last twelve months.
                3. Customer concentration, contract length and asset base summarised in three lines.
                4. The five questions a lender is most likely to ask, each with a draft answer.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page credit profile with three years of figures, current credit metrics and five anticipated lender questions has been reviewed by the deal lead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request the last three years of audited accounts and the latest management accounts"
                - "Calculate net debt, net debt to EBITDA and interest cover"
                - "Summarise customer concentration and contract terms in three lines"
                - "List the five questions a lender will ask first"
            - name: Existing facilities and maturity ladder review
              description: |-
                ## Purpose
                Before proposing anything new you need to know exactly what the client already owes, to whom, on what terms and when it falls due, including leases, overdrafts, shareholder loans and any vendor notes. A facilities summary and maturity ladder often shows that the real problem is a bullet in 14 months or a covenant that tightens next year.

                ## Milestones
                1. Every facility listed with lender, amount, drawn balance, margin, maturity and security.
                2. A maturity ladder chart covering the next five years.
                3. Financial covenants, step-downs and current headroom recorded for each facility.
                4. Prepayment costs, change of control and cross-default terms noted where they affect a refinancing.

                ## Notes
                Read the signed agreements and amendment letters, not the client's summary of them. Clients often forget a side letter or an amendment fee.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A facilities summary and five-year maturity ladder, built from the signed documents, records margin, covenants and prepayment costs for every facility."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the client for every signed facility agreement and amendment letter"
                - "Tabulate amount, drawn balance, margin, maturity and security per facility"
                - "Record covenants, step-downs and current headroom"
                - "Draw the five-year maturity ladder for the kick-off pack"
            - name: Lender-ready adjusted EBITDA bridge
              description: |-
                ## Purpose
                Mid-market owners often present an EBITDA that includes one-off costs, owner salaries above market and synergies still to come, and lenders will strip out anything they cannot evidence. Building the bridge from reported to adjusted EBITDA with support for every add-back tells you which number the lenders will actually lend against and avoids a credibility hit later.

                ## Milestones
                1. A bridge from statutory EBITDA to adjusted EBITDA, line by line.
                2. Each add-back tagged as evidenced, partly evidenced or forecast.
                3. A conservative case that keeps only evidenced add-backs.
                4. The client's finance director agreed to the bridge and its support file.

                ## Notes
                If a quality of earnings report is planned, align the bridge with the accountants early so lenders do not see two different numbers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An adjusted EBITDA bridge with every add-back tagged by evidence level and a conservative case is agreed with the client's finance director."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every adjustment the client makes to reported EBITDA"
                - "Ask for invoices, payroll or board papers supporting each add-back"
                - "Tag each add-back as evidenced, partly evidenced or forecast"
                - "Build the conservative case using evidenced items only"
            - name: Debt capacity range from the borrower's cash flows
              description: |-
                ## Purpose
                Clients ask how much they can borrow, and the honest answer is a range set by cash flow, not a single multiple. Sizing debt three ways, on net debt to EBITDA, on interest and fixed charge cover and on the ability to repay a set share of senior debt within the tenor, gives a range you can defend in front of the board and the lenders.

                ## Milestones
                1. Debt capacity calculated on a multiple of adjusted EBITDA for bank and direct lender cases.
                2. Capacity tested against minimum interest cover and fixed charge cover.
                3. A repayment test showing how much senior debt is repaid from free cash flow within the tenor.
                4. A one-page summary with a low, central and high capacity figure and the binding constraint.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page debt capacity summary shows low, central and high figures and names the binding constraint for each lender type."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Take the conservative EBITDA case into the debt capacity tab"
                - "Size debt on multiples typical for banks and for direct lenders"
                - "Test each case against interest cover and repayment from free cash flow"
                - "Write a one-page capacity summary naming the binding constraint"
            - name: Borrowing objectives agreed with the CFO
              description: |-
                ## Purpose
                A refinancing can be won on price and still fail the client if what they really needed was covenant headroom, a delayed draw line for acquisitions or freedom to pay dividends. Agreeing a ranked list of objectives and non-negotiables with the CFO and owners before launch gives the process a scoring frame and stops goalposts moving at term sheet stage.

                ## Milestones
                1. A meeting held with the CFO and at least one owner or board member.
                2. Objectives ranked across cost, headroom, flexibility, tenor, amortisation and relationship.
                3. Three to five non-negotiables written down, such as no personal guarantees.
                4. The ranked list signed off by email and filed with the mandate.

                ## Notes
                Start from the **Meeting notes** template. Owners and finance teams often rank things differently; surface that now, not at final offers.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A ranked list of borrowing objectives and non-negotiables is confirmed in writing by the CFO before the first lender is approached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a 90-minute objectives meeting with the CFO and an owner"
                - "Prepare a list of eight possible objectives to rank in the room"
                - "Write up the ranking and the non-negotiables the same day"
                - "Ask the CFO to confirm the list by email"
            - name: Borrower debt model with covenant tests
              description: |-
                ## Purpose
                Every mandate needs one model that the client trusts: a forecast, a debt schedule for each proposed facility, cash sweeps and amortisation, and covenant tests each quarter. Building it once in your team's format, with switches for each lender's terms, means term sheets can be run through the same engine and compared on the same assumptions.

                ## Milestones
                1. Base and downside forecasts linked to the client's latest budget.
                2. A debt schedule for each facility with interest, fees, amortisation and optional sweep.
                3. Quarterly net debt to EBITDA, interest cover and cash flow cover tests with headroom shown.
                4. A switch panel that loads each lender's term sheet terms.
                5. Balance and cash checks clean on every scenario.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A checked borrower model runs base and downside cases through every proposed facility and reports quarterly covenant headroom for each lender's terms."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Copy the team's borrower model template into the mandate folder"
                - "Link the forecast to the client's latest budget and accounts"
                - "Build debt schedules and quarterly covenant tests"
                - "Add a switch panel for each lender's terms"
                - "Ask a colleague to run the model checks before it goes to the client"
            - name: Mid-market pricing and terms benchmark sheet
              description: |-
                ## Purpose
                Clients want to know whether an offer is good, and a credible answer needs current ranges for margins, arrangement fees, commitment fees, debt multiples and covenant packages by lender type and borrower size. Keeping a benchmark sheet from public league reports, trade press and your own closed mandates lets you answer in the first meeting rather than after the process.

                ## Milestones
                1. Margin and fee ranges recorded for banks, direct lenders and asset-based lenders.
                2. Typical debt multiples and covenant packages noted by EBITDA band.
                3. Every data point tagged with its source and date.
                4. The sheet refreshed each quarter and the date shown at the top.

                ## Notes
                Benchmarks are for framing conversations, not for promising a client a price. Lenders price the credit in front of them.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated benchmark sheet with sourced margin, fee, debt multiple and covenant ranges by lender type is refreshed every quarter."
                cadence: cyclic
              tasks:
                - "Collect the latest public mid-market lending reports your team subscribes to"
                - "Record margin and fee ranges by lender type and EBITDA band"
                - "Tag each data point with source and date"
                - "Refresh the benchmark sheet from new reports and closed mandates @recurring(quarterly)"
            - name: Monthly mid-market lending market note
              description: |-
                ## Purpose
                Lender appetite in the mid-market moves faster than most clients realise: a direct lender closes a new fund and gets aggressive, a bank pulls back from a sector, base rates move and fixed-rate quotes change. A short monthly note of what you heard and read gives your seniors material for client calls and keeps your own read of the market current.

                ## Milestones
                1. A one-page note template with sections for rates, lender news, pricing and notable deals.
                2. The first note circulated to the team.
                3. Three months of notes saved in one folder so trends are visible.
                4. At least one client conversation started from a point in the note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page lending market note is circulated to the team every month and filed in a single folder."
                cadence: rolling
              tasks:
                - "Set up a one-page market note template with four sections"
                - "Gather lender fundraises, pricing moves and notable deals from the trade press @recurring(monthly:3)"
                - "Circulate the note to the team with one point for client calls @recurring(monthly:5)"
                - "File each note in the shared market notes folder"
            - name: Lender appetite and contact tracker
              description: |-
                ## Purpose
                Lenders change people, fund vintages and credit appetite, and the adviser who knows which credit partner moved and which fund is now fully deployed builds better long lists. A tracker that records every call with a lender, what they said they want and who covers them keeps the lender universe map alive between mandates.

                ## Milestones
                1. Each lender in the universe map linked to a current named contact.
                2. Every lender call logged with stated appetite, ticket size and sectors to avoid.
                3. Lenders not spoken to in six months flagged for a catch-up.
                4. The tracker used to build the long list on the next mandate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lender call is logged with appetite and contact details, and no lender in the core universe has gone more than six months without contact."
                cadence: rolling
              tasks:
                - "Add a stated appetite field to each lender record in the CRM"
                - "Log appetite, ticket size and sectors after each lender call"
                - "Update lender appetite and contact changes from the month's calls @recurring(monthly:12)"
                - "Book catch-ups with lenders not contacted in six months @recurring(quarterly)"
            - name: Closed mandate terms database
              description: |-
                ## Purpose
                Your team's own closed deals are the most persuasive evidence in a pitch or a negotiation, as long as the terms are recorded consistently and kept within confidentiality limits. A database of closed mandates with size, lender type, debt multiple, margin, fees, covenants and timeline turns past work into a reference you can cite in anonymised ranges.

                ## Milestones
                1. A field list agreed with the team covering size, debt multiple, pricing, covenants and timeline.
                2. The last two years of closed mandates entered from signed documents.
                3. Each record checked against the facility agreement, not the term sheet.
                4. An anonymised summary view approved by compliance for use in pitches.

                ## Notes
                Confidentiality terms in engagement letters vary. Check with compliance what may be shown outside the team, and in what form.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A database of the last two years of closed mandates, checked against signed documents, has an anonymised view approved by compliance."
                cadence: rolling
              tasks:
                - "Agree the database fields with the team's director"
                - "Enter the last two years of closed mandates from signed agreements"
                - "Ask compliance which anonymised fields can appear in pitches"
                - "Add each newly closed mandate's final terms @recurring(monthly:20)"
            - name: Refinancing trigger watchlist for target clients
              description: |-
                ## Purpose
                Most mid-market refinancing work is won 12 to 24 months before a maturity, when the CFO starts worrying and before the house bank offers a quiet extension. A watchlist of companies with known maturities, covenant step-downs, sponsor hold periods or acquisitive plans gives the team a reason to call each one at the right moment.

                ## Milestones
                1. A list of at least 50 target companies with a known debt trigger and its date.
                2. Each trigger sourced from public filings, registry charges or published accounts.
                3. A named owner and a planned contact month against each company.
                4. Three or more introductory meetings booked from the list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A watchlist of 50 or more companies with sourced debt triggers is scanned monthly and has produced at least three introductory meetings."
                cadence: rolling
              tasks:
                - "Pull charge registrations and maturity notes from published accounts for 20 companies"
                - "Record each company's trigger, its date and the source"
                - "Scan the watchlist for triggers falling inside 24 months @recurring(monthly:8)"
                - "Review the list with the director and reassign owners @recurring(quarterly)"
            - name: Covenant compliance calendar for retained clients
              description: |-
                ## Purpose
                After a deal closes, many mid-sized borrowers have no treasury team, and a missed compliance certificate or a test date nobody saw coming can turn a good credit into an awkward lender conversation. Keeping a calendar of reporting dates and covenant tests for each retained client, with a headroom check ahead of each test, is a service clients value and one that keeps you close to them.

                ## Milestones
                1. Every reporting obligation and test date for each retained client in one calendar.
                2. A headroom check run from management accounts before each quarterly test.
                3. Any test with less than 15 percent headroom flagged to the client and the deal lead.
                4. Compliance certificates confirmed as delivered on time for a full year.

                ## Notes
                Start from the **Compliance control** template. The client signs and sends its own certificates; your role is to remind, check the arithmetic and raise early warnings.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each retained client has a calendar of reporting and test dates, with a headroom check run and recorded before every quarterly test."
                cadence: rolling
              tasks:
                - "List reporting obligations and test dates from each retained client's facility agreement"
                - "Set reminders ten working days before each reporting date"
                - "Check upcoming test dates and send reminders to client finance teams @recurring(monthly:15)"
                - "Run a headroom check from the latest management accounts @recurring(quarterly)"
            - name: Quarterly lender relationship review for retained clients
              description: |-
                ## Purpose
                Borrowers who only speak to lenders when they need something get less goodwill when trading dips. A quarterly review for each retained client of how lender relationships stand, what information has gone out and whether any waiver, consent or new facility is on the horizon keeps the client's lender group informed and the adviser useful between deals.

                ## Milestones
                1. A short review agenda covering trading, information sent, upcoming consents and lender sentiment.
                2. A review held with each retained client's finance director each quarter.
                3. Actions from each review logged with owners and dates.
                4. Any upcoming consent or waiver request scoped at least two months ahead.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each retained client has a documented lender relationship review every quarter, with actions and owners recorded."
                cadence: rolling
              tasks:
                - "Draft a one-page review agenda with four standing items"
                - "Hold the lender relationship review with each retained client @recurring(quarterly)"
                - "Log actions and owners after each review"
                - "Scope any consent or waiver needed in the next two quarters"
            - name: Weekly status note during a lender process
              description: |-
                ## Purpose
                Live refinancings have a dozen lenders at different stages, a client finance team running the business at the same time and owners who want to know whether it is on track. A short weekly note covering lenders engaged, dropped and progressing, open diligence items and the next milestones keeps everyone aligned and gives the deal lead an early view of slippage.

                ## Milestones
                1. A status note template with lender tracker, diligence items and timeline.
                2. The note sent to the client every week while the process is live.
                3. Each lender's status updated from the latest call or email.
                4. Slippage against the timeline flagged with a proposed fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly status note covering every lender, open diligence items and timeline goes to the client throughout each live process."
                cadence: rolling
              tasks:
                - "Build a one-page status note template with a lender tracker table"
                - "Send the weekly status note to the client and deal lead @recurring(weekly:fri)"
                - "Update each lender's stage from calls and emails before sending"
                - "Flag any milestone more than a week late with a proposed fix"
            - name: Lender question log and response control
              description: |-
                ## Purpose
                In a competitive debt process every lender asks overlapping questions, the client's finance team gets swamped and inconsistent answers erode confidence. One log with every question, the lender who asked it, the agreed answer and when it went out lets you answer once, share consistently and show the client exactly what is outstanding.

                ## Milestones
                1. A single log with question, lender, category, owner, draft answer and date sent.
                2. Duplicate questions grouped so each is answered once.
                3. Every answer reviewed by the client before release.
                4. Open questions under five working days old at each status update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lender question is logged with owner and release date, answered consistently across lenders and cleared within five working days."
                cadence: rolling
              tasks:
                - "Set up the question log with category and owner columns"
                - "Group duplicate questions and assign one owner per group"
                - "Clear the question log with the client finance team @recurring(weekly:tue)"
                - "Send approved answers to all lenders who asked"
            - name: Mandate win, loss and fee log
              description: |-
                ## Purpose
                Debt advisory teams pitch far more than they win, and the reasons rarely get written down: the house bank offered an extension, a rival quoted a lower fee, the sponsor ran the process in-house. Logging every pitch, its outcome, the fee proposed and the reason won or lost shows where the team is competitive and makes your own contribution visible at review time.

                ## Milestones
                1. A log of every pitch from the last 12 months with outcome and fee.
                2. A reason won or lost recorded for each, from the client where possible.
                3. Win rate and average success fee calculated by mandate type.
                4. Two lessons from the analysis shared with the team.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A pitch log with outcome, fee and reason for every pitch in the last 12 months shows win rate by mandate type."
                cadence: rolling
              tasks:
                - "List every pitch the team made in the last 12 months"
                - "Record outcome, fee proposed and reason won or lost"
                - "Calculate win rate and average fee by mandate type"
                - "Add new pitches and outcomes to the log @recurring(monthly:27)"
            - name: Writing the lender information paper
              description: |-
                ## Purpose
                A lender paper is not a sale memorandum: credit committees want downside, cash conversion, security and how the business repays, not the upside story. Learning to write one that answers a credit analyst's questions in the order they ask them shortens diligence, reduces question volume and helps lenders get approval on the timeline.

                ## Milestones
                1. A section plan covering business, market, financials, forecast, downside, security and the proposed facilities.
                2. A draft that explains cash conversion and working capital seasonality with figures.
                3. A downside case and the borrower's mitigating actions written in plain language.
                4. Every number tied to the model and the accounts.
                5. The paper reviewed and approved by the client before release.

                ## Notes
                Ask the agent to draft a first outline from your section plan, then rewrite it in the client's language. Lenders spot generic text quickly.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "A lender paper with a downside case, security section and figures tied to the model is approved by the client and released to lenders."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Read two anonymised lender papers from your team's past mandates"
                - "Ask the agent to outline a lender paper from your section plan"
                - "Draft the cash conversion and downside sections first"
                - "Tie every figure to the model and mark the source"
                - "Send the draft to the client for comments"
            - name: Lender presentation and management rehearsal
              description: |-
                ## Purpose
                Lender meetings with a mid-market management team decide whether a credit committee hears a confident story or a hesitant one, and many finance directors have never presented to a direct lender. A short presentation focused on cash flow and downside, plus a rehearsal with hard credit questions, prepares the team for meetings that usually run 90 minutes.

                ## Milestones
                1. A presentation of 15 to 20 pages agreed with management.
                2. A list of 30 likely credit questions with agreed answers and an owner for each.
                3. One full rehearsal held with someone playing a sceptical credit analyst.
                4. A meeting schedule with each shortlisted lender confirmed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Management has rehearsed a 15 to 20 page lender presentation against 30 prepared credit questions before the first lender meeting."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Draft a 15 to 20 page presentation outline focused on cash flow"
                - "Write 30 likely credit questions and assign each to a manager"
                - "Book a two-hour rehearsal with a colleague playing the lender"
                - "Confirm meeting slots with each shortlisted lender"
            - name: Reading and marking up a lender term sheet
              description: |-
                ## Purpose
                Two term sheets with the same margin can be very different deals once you read the fees, the definitions, the baskets and the conditions. Learning to read a term sheet clause by clause from the borrower's side, and to mark it up against the client's objectives, is the core technical skill of debt advice and the one clients pay for.

                ## Milestones
                1. A term sheet read end to end with each clause summarised in one line.
                2. Every clause rated as acceptable, negotiate or reject against the client's objectives.
                3. A markup of the ten clauses that matter most, with suggested wording reviewed by a senior.
                4. A short list of points to raise with the lender on the next call.

                ## Notes
                Your markup is commercial. Legal drafting belongs to the borrower's lawyers, and they should see your points before any wording goes to a lender.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A term sheet has been rated clause by clause and a markup of ten priority clauses has been reviewed by a senior colleague."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Take one anonymised term sheet from a closed mandate"
                - "Summarise every clause in a single line"
                - "Rate each clause against the client's ranked objectives"
                - "Mark up the ten most important clauses for a senior to review"
            - name: Financial covenant definitions and headroom setting
              description: |-
                ## Purpose
                Covenant levels get negotiated hard while definitions get skimmed, yet the definition of EBITDA, net debt or fixed charges usually moves headroom more than a quarter turn on the net debt to EBITDA level. Learning how each definition works and how to set levels with real headroom against the downside case protects clients from a technical breach in a normal bad year.

                ## Milestones
                1. Definitions of EBITDA, net debt, interest and fixed charges compared across three term sheets.
                2. Each definition's effect on headroom quantified in the model.
                3. Covenant levels proposed that keep at least 25 percent headroom on the base case and pass the downside case.
                4. Equity cure and deemed cure mechanics understood and summarised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of covenant definitions across three term sheets, with headroom quantified and proposed levels tested against the downside case, is filed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Copy the EBITDA and net debt definitions from three term sheets side by side"
                - "Model the headroom effect of each definition"
                - "Propose covenant levels that pass the downside case"
                - "Summarise how equity cure rights work in each offer"
            - name: Security and guarantee package from the borrower's side
              description: |-
                ## Purpose
                Share pledges, debentures, guarantees from material subsidiaries and sometimes personal guarantees from owners are the usual lender requests, and the cost of providing them is legal time, tax questions and lost flexibility. Understanding the package and what is customary for each lender type lets you push back where a request goes beyond the market.

                ## Milestones
                1. A group structure chart marking which entities would grant security or guarantees.
                2. A guarantor coverage test calculated against EBITDA and assets.
                3. Requests that go beyond the market, such as personal guarantees, listed and challenged.
                4. Cost and timing of security perfection discussed with the borrower's lawyers.

                ## Notes
                Tax and corporate benefit questions on upstream guarantees are for the client's lawyers and tax advisers. Record their views; do not form your own.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A structure chart with proposed security and guarantors, a coverage test and a list of challenged requests is agreed with the borrower's lawyers."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draw the group structure with each entity's share of EBITDA and assets"
                - "Mark which entities each lender wants as guarantors"
                - "Calculate guarantor coverage against EBITDA and assets"
                - "List requests beyond market terms for the lawyers' call"
            - name: All-in cost of debt comparison
              description: |-
                ## Purpose
                Once arrangement fees, original issue discount, commitment fees on undrawn lines, agency fees, prepayment premiums and hedging are counted, a lower margin can cost more over the life of a facility. Calculating an all-in annual cost for each offer on the same drawdown and repayment assumptions gives the client one comparable number and shows which fees are worth negotiating.

                ## Milestones
                1. One drawdown and repayment profile agreed for all offers.
                2. Every fee and margin from each offer entered into the cost calculator.
                3. All-in annual cost calculated over the expected hold period and over full tenor.
                4. A sensitivity showing the cost if the facility is refinanced in year two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An all-in cost comparison for every offer, on the same drawdown profile, shows annual cost over expected hold and full tenor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the drawdown and repayment profile with the client"
                - "Enter margin, upfront fees, commitment fees and prepayment terms per offer"
                - "Calculate the all-in annual cost over hold period and full tenor"
                - "Add an early refinancing sensitivity for year two"
            - name: Facility agreement clauses that matter to borrowers
              description: |-
                ## Purpose
                Mid-market borrowers live with their facility agreement for five years, and the clauses that hurt are rarely the ones discussed at term sheet: permitted acquisition baskets, dividend restrictions, information undertakings, change of control and events of default. Knowing these clauses well lets you flag problems to the client's lawyers before signing.

                ## Milestones
                1. Notes on twelve clauses common in mid-market facility agreements based on recommended market forms.
                2. For each clause, the borrower-friendly and lender-friendly positions written in one line each.
                3. Three real examples where a clause limited a client after closing, anonymised.
                4. A checklist used on your next documentation review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on twelve key facility clauses with borrower and lender positions are written and used as a checklist on a live document review."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List twelve clauses to study from a recommended form facility agreement"
                - "Write the borrower and lender positions for each clause"
                - "Ask a director for three anonymised examples of clauses that bit"
                - "Turn the notes into a documentation review checklist"
            - name: Interest rate hedging policy for a mid-sized borrower
              description: |-
                ## Purpose
                Floating-rate debt often comes with a lender requirement to hedge part of it, and mid-sized companies without a treasury function can end up with swaps they do not understand, bought from the lender at an unseen spread. Helping the client set a written policy on how much to hedge, for how long and how to get competing quotes keeps the decision theirs.

                ## Milestones
                1. The lenders' hedging requirement taken from the term sheet.
                2. A one-page policy drafted with hedge ratio, tenor range and approval rules for the board.
                3. Quotes sought from at least two hedge providers, with an independent hedging adviser where the size justifies it.
                4. The board's decision and the executed hedge recorded.

                ## Notes
                Hedging products carry real risks. The policy and product choice are the board's decision with a regulated hedging adviser; your role is to organise and compare.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A board-approved hedging policy with ratio, tenor and approval rules is on file, and at least two hedge quotes were compared before execution."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the hedging requirement from each term sheet"
                - "Draft a one-page hedging policy outline for the board"
                - "Arrange quotes from two hedge providers"
                - "Remind the client to review the hedging policy against the debt @recurring(yearly)"
            - name: Bank club or direct lender unitranche decision
              description: |-
                ## Purpose
                The most common fork in mid-market borrowing is a club of two to four relationship banks with amortising senior debt, or a single direct lender offering a unitranche with more debt, lighter amortisation and a higher margin. Laying the two side by side on the client's numbers, objectives and future plans gives the board a decision it understands.

                ## Milestones
                1. Both structures modelled on the same forecast with amount, cost, amortisation and covenants.
                2. Free cash flow after debt service compared for each in base and downside cases.
                3. Flexibility for acquisitions, dividends and a sale compared in a short table.
                4. A recommendation paper presented to the board and its decision minuted.

                ## Notes
                Start from the **Purchase decision** template. Many boards value the bank relationship for cash management and guarantees; count those services too.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board paper comparing a bank club and a unitranche on cost, cash flow and flexibility has been presented and the decision minuted."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Model a bank club and a unitranche on the same forecast"
                - "Compare free cash flow after debt service in base and downside"
                - "Tabulate flexibility for acquisitions, dividends and a sale"
                - "Write the board paper with a clear recommendation"
            - name: Asset-based lending or cash flow loan choice
              description: |-
                ## Purpose
                Distributors, manufacturers and businesses with large receivables and stock can often borrow more against their assets than against their EBITDA, especially after a weak year. Comparing an asset-based line with a cash flow loan, including borrowing base mechanics, field exams and reporting load, shows whether the extra availability is worth the monitoring.

                ## Milestones
                1. An indicative borrowing base calculated from receivables, stock and plant.
                2. Availability compared with cash flow debt capacity across the seasonal low point.
                3. Reporting, field exam and cash dominion requirements listed for the finance team.
                4. A recommendation agreed with the CFO.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of asset-based availability and cash flow debt capacity through the seasonal low is agreed with the CFO."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask for aged receivables and stock reports for the last 12 months"
                - "Calculate an indicative borrowing base at the seasonal low"
                - "List reporting and field exam requirements for the finance team"
                - "Present the comparison to the CFO"
            - name: Refinance early or wait to maturity decision
              description: |-
                ## Purpose
                Refinancing 18 months early can lock in available terms and remove the risk of a maturity cliff, but it may trigger prepayment fees and give up a cheap facility. Laying out the cost, the market risk and the client's plans for the next two years helps the board choose when to start, rather than drifting until the house bank sets the timetable.

                ## Milestones
                1. Prepayment fees and break costs on existing facilities calculated.
                2. The cost of current facilities compared with indicative new terms.
                3. Risks of waiting listed: trading, market, rate and lender appetite.
                4. A recommended start date for the process agreed by the board.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A board-agreed start date for the refinancing, supported by a cost and risk comparison of acting now or waiting, is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Calculate prepayment fees and break costs on existing facilities"
                - "Compare current cost with indicative new terms"
                - "List the main risks of waiting another year"
                - "Present a recommended start date to the board"
            - name: Bilateral, club or syndicated structure choice
              description: |-
                ## Purpose
                Facilities of 40 million can be written by one lender, shared by a club of three or arranged and sold down to a wider group, and each choice changes how consents are obtained, how much negotiating power the borrower keeps and who the client will deal with in a difficult year. Choosing the structure before launch shapes the long list and the timetable.

                ## Milestones
                1. The facility size compared with typical hold levels of shortlisted lenders.
                2. Voting thresholds and consent mechanics described for each structure.
                3. Relationship and ancillary needs such as cash management mapped to lenders.
                4. The chosen structure recorded in the process plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The process plan records a chosen bilateral, club or syndicated structure with reasons covering hold levels, consents and ancillary needs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare the facility size with shortlisted lenders' hold levels"
                - "Describe consent and voting mechanics for each structure"
                - "Map the client's cash management and guarantee needs to lenders"
                - "Record the chosen structure in the process plan"
            - name: Fixed or floating rate choice for term debt
              description: |-
                ## Purpose
                Some lenders offer fixed-rate term debt, others only floating rate with hedging alongside, and the comparison is rarely like for like once prepayment terms and make-whole costs are included. A side-by-side view of cost, prepayment flexibility and sensitivity to rate moves lets the client see what certainty costs and what it gives up.

                ## Milestones
                1. Fixed and floating offers converted to a comparable all-in cost.
                2. Prepayment and make-whole costs compared if the debt is repaid early.
                3. Cash flow effect of a two percentage point rate rise shown for the floating case.
                4. The client's choice and reasons recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded client decision on fixed or floating rate debt is supported by an all-in cost, prepayment and rate sensitivity comparison."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Convert fixed and floating offers to the same all-in cost basis"
                - "Compare prepayment costs if repaid in year two and year four"
                - "Model a two percentage point rate rise on the floating case"
                - "Record the client's decision and reasons"
            - name: Lender shortlist from long list to invitation
              description: |-
                ## Purpose
                Approaching too many lenders leaks information and wears out the client's finance team, while approaching too few weakens competition. Narrowing a long list of 25 to 40 names to an invited group of six to ten, using appetite, hold level, sector history and relationship fit, is a decision worth making carefully and explaining to the client.

                ## Milestones
                1. A long list built from the lender universe map and appetite tracker.
                2. Each lender scored on appetite, hold level, sector history and relationship fit.
                3. A shortlist of six to ten lenders agreed with the client, with reasons for exclusions.
                4. Non-disclosure agreements in place with each shortlisted lender.

                ## Notes
                Ask the client which lenders they will not work with, and why, before scoring anyone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of six to ten scored lenders is agreed with the client and each has signed a non-disclosure agreement."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull a long list of 25 to 40 lenders from the universe map"
                - "Score each lender on four criteria"
                - "Agree the shortlist and exclusions with the client"
                - "Send non-disclosure agreements to the shortlisted lenders"
            - name: Weighted scoring of final lender offers
              description: |-
                ## Purpose
                Final offers arrive in different formats with different conditions, and clients tend to fix on the margin or on the lender they like. A weighted matrix built from the objectives agreed at the start, with all-in cost, headroom, flexibility, conditionality and relationship scored on the same scale, turns a messy choice into a decision the board can defend.

                ## Milestones
                1. Weights taken from the client's ranked objectives and confirmed before offers arrive.
                2. Each final offer scored on cost, headroom, flexibility, conditionality and relationship.
                3. Clarification questions sent to lenders on any unclear term.
                4. A preferred lender and a back-up recommended in a short paper.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every final offer is scored on a weighted matrix agreed before offers arrived, and a preferred and back-up lender are recommended in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Set matrix weights from the client's ranked objectives"
                - "Score each final offer on the five criteria"
                - "Send clarification questions on unclear terms"
                - "Write a short paper recommending a preferred and a back-up lender"
            - name: Debt portability and prepayment terms before a sale
              description: |-
                ## Purpose
                Owners planning a sale in two to four years should borrow on terms that do not penalise that plan: prepayment premiums that fall away, change of control clauses that allow a portability option, and no heavy exit fees. Testing each offer against the expected exit timeline avoids a refinancing cost landing on the buyer or the seller at the worst time.

                ## Milestones
                1. The owners' likely exit window recorded.
                2. Prepayment premiums, exit fees and change of control terms tabulated per offer.
                3. Cost of repaying each offer at the expected exit date calculated.
                4. Portability terms requested from at least two lenders.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each offer's cost of repayment at the expected exit date is calculated and portability terms are requested from at least two lenders."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the owners for their likely sale window"
                - "Tabulate prepayment premiums, exit fees and change of control terms"
                - "Calculate repayment cost at the expected exit date per offer"
                - "Request portability wording from two lenders"
            - name: Refinancing lender process to signed term sheet
              description: |-
                ## Purpose
                A well-run mid-market refinancing takes about 10 to 14 weeks from kick-off to signed term sheet, and most slippage comes from late financial information, a slow model or lenders asked for terms before they have enough to go to committee. A written timetable with gates for preparation, launch, indicative terms, meetings and final offers keeps the process competitive and on time.

                ## Milestones
                1. A timetable with dated gates agreed with the client at kick-off.
                2. Lender paper, model and data room ready before launch.
                3. Indicative terms received from at least four lenders.
                4. Lender meetings held and final offers received.
                5. A term sheet with the preferred lender signed by the client.

                ## Notes
                Start from the **Risk register** template for the process risks: late accounts, key staff leaving, a weak month mid-process.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A term sheet with the preferred lender is signed within the timetable agreed at kick-off, after indicative terms from at least four lenders."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Draft the process timetable with five dated gates"
                - "Open a process risk register with five starting risks"
                - "Launch to shortlisted lenders once the paper and model are ready"
                - "Collect indicative terms and agree who goes to final round"
                - "Get the preferred term sheet signed by the client"
            - name: Lender confirmatory diligence and credit approval
              description: |-
                ## Purpose
                After the term sheet, lenders commission or rely on financial, legal, commercial and sometimes environmental or insurance reports, then go to final credit committee. Organising who prepares each report, who pays, what reliance is given and when drafts are due keeps the borrower's costs in check and stops diligence from stretching into the documentation timetable.

                ## Milestones
                1. A diligence scope agreed with the lender, listing each report and its provider.
                2. Fee quotes and reliance terms confirmed for each report.
                3. Draft reports reviewed by the client for factual accuracy before final versions.
                4. Final credit approval confirmed by the lender in writing.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All agreed diligence reports are delivered with reliance terms in place and the lender confirms final credit approval in writing."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Agree the diligence scope and report list with the lender"
                - "Collect fee quotes and reliance terms from each provider"
                - "Set factual accuracy review dates with the client"
                - "Ask the lender for written confirmation of final approval"
            - name: Facility documentation negotiation to signing
              description: |-
                ## Purpose
                The term sheet is a few pages; the facility agreement, security documents and fee letters run to hundreds, and points thought settled get reopened in drafting. Running an issues list between the borrower's lawyers, the lender's lawyers and the client, with a clear owner for each commercial point, gets the documents signed without losing what was won at term sheet.

                ## Milestones
                1. A documentation timetable agreed with both sets of lawyers.
                2. An issues list tracking each open point, its owner and status.
                3. Every term sheet point checked as carried into the facility agreement.
                4. Signing pages, fee letters and the final document set agreed.

                ## Notes
                Legal drafting is the lawyers' work. Your contribution is keeping commercial points intact and resolving them quickly with the client.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The facility agreement is signed with every term sheet point confirmed as carried across and no open items left on the issues list."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree a documentation timetable with both firms of lawyers"
                - "Set up an issues list with owner and status columns"
                - "Check each term sheet point against the first draft facility agreement"
                - "Hold a commercial points call with the client before each turn"
            - name: Conditions precedent and first drawdown
              description: |-
                ## Purpose
                Funding only happens when every condition precedent is satisfied: board minutes, security documents, legal opinions, insurance endorsements, know-your-customer checks, repayment letters from old lenders and a utilisation request with the right date. A checklist owned jointly by the client and both law firms makes first drawdown a quiet morning rather than a scramble.

                ## Milestones
                1. A conditions precedent checklist with owner and status for each item.
                2. Payoff letters and release documents agreed with the existing lenders.
                3. A funds flow memo showing every payment, account and amount.
                4. The utilisation request delivered and funds received on the planned date.

                ## Notes
                Start from the **Operational checklist** template if your team does not have a standard one. Know-your-customer checks on owners are the item most often left late.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every condition precedent is signed off, the funds flow memo is agreed and the first drawdown arrives on the planned date."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Build the conditions precedent checklist with owners"
                - "Request payoff letters from each existing lender"
                - "Draft the funds flow memo with account details checked by phone"
                - "Confirm the utilisation request date with the lender's agent"
            - name: Acquisition debt for a bolt-on with certain funds
              description: |-
                ## Purpose
                When a mid-sized client bids for a competitor, the seller wants proof that the money is there, and the client needs an acquisition facility agreed in parallel with the purchase agreement. Organising debt with certain funds style conditions, timed to the bid deadline and signing, lets the client bid with confidence without paying for a facility they may never use.

                ## Milestones
                1. Pro forma credit metrics for the combined group calculated.
                2. At least two lenders engaged under non-disclosure with the target's information.
                3. Committed terms with limited conditions in place before the binding bid.
                4. Ticking fees and expiry dates agreed if signing slips.

                ## Notes
                Keep the acquisition debt process separate from the M&A negotiation in your notes and data room, and follow your firm's information barrier rules.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Committed acquisition debt with limited conditions is in place before the binding bid, with ticking fees and expiry dates agreed."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Build pro forma credit metrics for the combined group"
                - "Approach two lenders under non-disclosure with the target's data"
                - "Agree conditions limited to the minimum the lenders will accept"
                - "Negotiate ticking fees and a commitment expiry date"
            - name: Annual lender update meeting for a client
              description: |-
                ## Purpose
                Lenders appreciate a borrower who presents its year without being asked, and the meeting builds goodwill that counts when a consent, waiver or extra facility is needed. Helping a retained client prepare a short annual update on trading, outlook, capital plans and any requests turns a compliance chore into a relationship event.

                ## Milestones
                1. A date agreed with the lender group shortly after the annual accounts are signed.
                2. A 10-page update covering trading, outlook, capex and planned requests.
                3. Likely lender questions prepared with management.
                4. Follow-up actions from the meeting recorded and sent within two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual lender update meeting is held after each year's accounts, with a 10-page deck and follow-up actions sent within two days."
                cadence: cyclic
              tasks:
                - "Book the annual lender meeting after the accounts sign-off @recurring(yearly)"
                - "Draft a 10-page update with trading, outlook and requests"
                - "Prepare likely lender questions with the finance director"
                - "Send follow-up actions to lenders within two days"
            - name: Family-owned company borrowing beyond its house bank
              description: |-
                ## Purpose
                Family businesses often have banked with one lender for decades, with personal guarantees, a cheap overdraft and loyalty on both sides, and approaching others can feel like a betrayal. Advising them means explaining the options gently, protecting the relationship, separating family and company assets and getting every generation who owns shares comfortable with the plan.

                ## Milestones
                1. A meeting held with the family shareholders, not just the finance director.
                2. Existing personal guarantees and family security listed with the aim of releasing them.
                3. The house bank invited to compete on equal terms.
                4. A plan agreed that the family board approves in writing.

                ## Notes
                Personal guarantees and family assets raise questions for each family member's own lawyer. Suggest independent advice where interests could differ.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The family board approves a borrowing plan in writing that invites the house bank to compete and addresses each personal guarantee."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the finance director to arrange a meeting with family shareholders"
                - "List every personal guarantee and item of family security"
                - "Draft a short explanation of the options in non-technical language"
                - "Prepare the invitation for the house bank to compete"
            - name: Growth company weighing venture or growth debt
              description: |-
                ## Purpose
                Founders of fast-growing companies with recurring revenue but little EBITDA are offered venture debt and growth term loans with warrants, minimum cash covenants and interest-only periods. Helping them compare the dilution saved with the cost and the risk of a covenant tied to cash runway gives them a clear view before the next equity round.

                ## Milestones
                1. Runway with and without the debt modelled on the founder's plan.
                2. Warrant coverage converted to an estimated dilution and compared with an equity raise.
                3. Minimum cash, revenue and material adverse change terms compared across offers.
                4. A recommendation discussed with the founder and the board.

                ## Notes
                Valuation and dilution figures are estimates. The founder's lawyers should review warrant terms before signing.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The founder and board have discussed a comparison of venture debt offers with estimated dilution, runway and covenant risk set out."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Model cash runway with and without each debt offer"
                - "Convert warrant coverage to an estimated dilution"
                - "Compare minimum cash and revenue covenants across offers"
                - "Present the comparison to the founder and the board"
            - name: Sponsor portfolio company refinancing mandate
              description: |-
                ## Purpose
                When a private equity sponsor hires a debt adviser for a portfolio company, the client is really two people: the deal partner who wants terms that support the investment case and the company CFO who has to live with the reporting. Running the mandate well means agreeing who decides what, using the sponsor's preferred lenders sensibly and respecting the sponsor's documentation precedents.

                ## Milestones
                1. Decision rights between sponsor and company agreed in writing.
                2. The sponsor's lender relationships and precedent documents gathered.
                3. Long list adjusted for sponsor preferences with reasons recorded.
                4. Weekly updates delivered to both sponsor and CFO.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Decision rights between sponsor and company are agreed in writing and both receive weekly updates through the refinancing."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree in writing who decides on lender choice and terms"
                - "Collect the sponsor's precedent facility agreements"
                - "Adjust the long list for the sponsor's preferred lenders"
                - "Set up one weekly update for both sponsor and CFO"
            - name: First 90 days as a debt advisory analyst
              description: |-
                ## Purpose
                Analysts joining a debt advisory team from M&A, audit or a lending bank find the work familiar but the viewpoint reversed: you are on the borrower's side, and lenders are counterparties to be managed. A 90-day plan that covers the team's templates, the lender universe, one live mandate and regular feedback makes the first review a strong one.

                ## Milestones
                1. The team's model, lender paper and term comparison templates learned on a past mandate.
                2. The top 30 lenders in the team's universe known by name and appetite.
                3. Work on at least one live mandate from kick-off or launch.
                4. A 90-day check-in held with your manager and next goals agreed.

                ## Notes
                Start from the **Development plan** template to set your goals and record feedback.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 90-day plan is completed with templates learned, 30 lenders known and a check-in held with your manager."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask your manager for a past mandate to rebuild in the team's templates"
                - "Learn the top 30 lenders in the team's universe"
                - "Review your mandate notes with the associate @recurring(weekly:wed)"
                - "Book the 90-day check-in with your manager"
            - name: Moving from a lending bank into debt advisory
              description: |-
                ## Purpose
                Credit analysts and relationship managers at banks and direct lenders bring something advisers value: they know how credit committees think. Moving across means learning to sell, to manage a client process and to argue the borrower's case against people you used to sit beside, and the move is easier with a clear story and the right questions about the new team.

                ## Milestones
                1. A two-minute story explaining why the move and what you bring from the lending side.
                2. Five debt advisory teams researched by deal size, sector and recent mandates.
                3. Conversations held with at least three people working in debt advisory.
                4. Any notice period, non-solicitation and confidentiality terms in your current contract checked.

                ## Notes
                Employment terms and restrictive covenants are for an employment lawyer to interpret. Keep former employer information out of every application.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A move story is written, five teams researched, three conversations held and your contract's restrictive terms checked before applying."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a two-minute story of why you are moving to advisory"
                - "Research five debt advisory teams and their recent mandates"
                - "Ask three people in debt advisory for a short call"
                - "Check notice period and restrictive terms in your contract"
            - name: Emerging market borrower with local and dollar lenders
              description: |-
                ## Purpose
                Mid-sized companies in smaller or emerging markets often face a short list of local banks, dollar funding from regional or international lenders and development finance institutions with their own environmental and social standards. Advising them means matching currency of debt to currency of revenue, planning for longer approval times and preparing for diligence that few local lenders ask for.

                ## Milestones
                1. Revenue and costs split by currency to show how much foreign currency debt the business can carry.
                2. Local banks, regional lenders and development finance institutions listed with typical requirements.
                3. Environmental and social standards that a development lender would apply reviewed with the client.
                4. A process timetable that allows for longer approval cycles.

                ## Notes
                Exchange controls, withholding tax and local security rules vary by country; agree them with local counsel and tax advisers early.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A currency split, lender list with requirements and a timetable allowing for longer approvals are agreed with the client."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Split the client's revenue and costs by currency"
                - "List local, regional and development finance lenders with their requirements"
                - "Review development lender environmental and social standards with the client"
                - "Extend the process timetable for longer approval cycles"
            - name: Delayed draw facility for a buy-and-build plan
              description: |-
                ## Purpose
                Clients planning several bolt-on acquisitions need committed debt they can draw as deals close, without renegotiating each time. Structuring a delayed draw term loan or accordion with clear permitted acquisition criteria, commitment fees and gearing tests lets management move quickly on targets while the board keeps control of the total debt.

                ## Milestones
                1. The acquisition pipeline summarised with likely size and timing.
                2. Delayed draw amount, availability period and ticking fees proposed.
                3. Permitted acquisition criteria and pro forma gearing tests agreed with the lender.
                4. A drawdown checklist prepared for the first bolt-on.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A delayed draw facility is agreed with availability period, ticking fees and permitted acquisition tests, and a drawdown checklist is ready."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Summarise the acquisition pipeline by size and expected timing"
                - "Propose a delayed draw amount and availability period"
                - "Negotiate permitted acquisition criteria and pro forma tests"
                - "Prepare a drawdown checklist for the first bolt-on"
            - name: Private placement notes for a mid-market issuer
              description: |-
                ## Purpose
                Established mid-sized companies with stable cash flow can borrow long-dated fixed-rate money from insurance companies and pension investors through a private placement, often for 7 to 12 years. Preparing a client for this market means checking whether its size and profile fit, explaining make-whole prepayment terms and running a process alongside bank facilities.

                ## Milestones
                1. The client's size, rating profile and tenor needs checked against the private placement market.
                2. Make-whole and prepayment terms explained to the board in a worked example.
                3. Placement agent options and costs compared.
                4. A decision recorded on whether to proceed alongside bank facilities.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The board has seen a worked make-whole example and recorded a decision on a private placement alongside bank facilities."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check the client's profile against typical private placement issuers"
                - "Build a worked make-whole prepayment example"
                - "Compare placement agent options and fees"
                - "Record the board's decision on proceeding"
            - name: Sustainability-linked margin terms for a borrower
              description: |-
                ## Purpose
                Many lenders now offer a small margin step up or down tied to sustainability targets, and mid-sized borrowers sign up without counting the reporting cost or checking whether the targets are achievable. Helping a client choose two or three measurable targets it already tracks, with third-party verification it can afford, makes the terms worthwhile rather than a reporting burden.

                ## Milestones
                1. Two or three candidate targets chosen from data the client already measures.
                2. Baselines and annual targets agreed with the client's operations team.
                3. Verification and reporting cost estimated against the margin benefit.
                4. Final targets and margin ratchet included in the term sheet.

                ## Notes
                Claims about sustainability performance carry legal and reputational risk. Wording in public statements should be checked by the client's lawyers.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Two or three measured sustainability targets with baselines, verification cost and a margin ratchet are included in the agreed term sheet."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List sustainability data the client already measures"
                - "Agree baselines and annual targets with operations"
                - "Estimate verification and reporting cost against the margin benefit"
                - "Remind the client to collect target data for the annual report @recurring(yearly)"
---

# Debt Advisory for Mid-Market

This area is for analysts, associates and directors who sit on the borrower's side of the table, advising mid-sized companies, family businesses and sponsor-backed groups on how to borrow. It starts with the foundations (the product and lender maps, the engagement letter, the credit profile, the maturity ladder and a realistic debt capacity), then the operating routines that keep market knowledge and live processes current, the skills behind lender papers, term sheets, covenants and all-in cost, the structuring decisions, dated events from launch to first drawdown, variants for family owners, founders, sponsors and new joiners, and finally specialist work such as delayed draw acquisition lines, private placements and sustainability-linked terms.

What repeats is a monthly market note and lender appetite update, a maturity watchlist scanned each month, a covenant calendar for retained clients, a weekly status note while a process is live, quarterly benchmark and relationship reviews and a yearly lender update. The Vendor, Risk register, Compliance control, Meeting notes, Purchase decision and Development plan templates pair with the projects that name them. Client and lender information stays in the firm's systems; personal files hold only public data and your own working notes. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
