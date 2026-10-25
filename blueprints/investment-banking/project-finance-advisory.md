---
id: investment-banking.project-finance-advisory
name: Project Finance Advisory
description: "A project finance adviser's working method: the contract map and risk matrix, a cash flow model lenders trust, debt sizing on DSCR, lender due diligence, term sheets, and the conditions precedent that get you to financial close."
category: business
version: 1.0.0
tags: [investment-banking, project-finance-advisory, knowledge-worker, project-finance, infrastructure, energy, debt-sizing, financial-close]
author: Aurum Technology
starter_structure:
  templates:
    - reading-queue
    - risk-register
    - metrics-log
    - meeting-notes
    - onboarding-30-60-90
    - operational-checklist
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Project Finance Advisory
          description: "Advising on project finance: financial models for infrastructure and energy, lender due diligence, debt sizing on cash flows and financial close."
          projects:
            - name: Project finance versus corporate lending primer
              description: |-
                ## Purpose
                Bankers who arrive from M&A or corporate coverage often read a project financing as a big term loan, and miss that the lenders are looking only at one asset's future cash flows inside a ring-fenced company. A short written primer on non-recourse and limited-recourse lending, the special purpose vehicle and why lenders care so much about contracts gives you the frame every later model and meeting depends on.

                ## Milestones
                1. A two-page note explaining non-recourse, limited recourse and sponsor support, with one real-world style example of each.
                2. The reasons a ring-fenced special purpose vehicle exists written out: bankruptcy remoteness, security and off-balance-sheet treatment.
                3. The main differences from corporate lending listed: tenor, gearing, covenants, security package and due diligence depth.
                4. The note read and corrected by a senior project finance banker.

                ## Notes
                Keep it in your own words. If you cannot explain why lenders accept 75 to 85 percent gearing on a contracted power plant but not on a start-up, the primer is not finished.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A two-page primer on non-recourse project finance exists, covering the SPV and five differences from corporate lending, reviewed by a senior banker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read one published project finance case study end to end tonight"
                - "Write a paragraph defining non-recourse and limited-recourse lending"
                - "List five ways project lending differs from a corporate term loan"
                - "Ask a senior banker to mark up the primer in a 20-minute slot"
            - name: Contract map of a typical project structure
              description: |-
                ## Purpose
                Behind every project sits a bundle of contracts held together by one company: the concession or licence, the offtake or power purchase agreement, the EPC contract, the operations and maintenance agreement, the shareholder agreement, the loan agreement, the intercreditor agreement and the direct agreements. Drawing that map once, with who pays whom and who carries which risk, makes every term sheet and lender question easier to place.

                ## Milestones
                1. One diagram showing the SPV at the centre and every major counterparty and contract around it.
                2. Each contract annotated with its cash direction, term and the main risk it passes on.
                3. The direct agreements and step-in rights shown linking lenders to the key counterparties.
                4. Two variants drawn: a contracted renewables project and an availability-based infrastructure concession.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contract map diagram for two project types exists, showing every main contract, its cash flows and its risk transfer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the SPV and its eight main contracts on one page"
                - "Mark the cash direction and term on each contract line"
                - "Add direct agreements and lender step-in rights to the diagram"
                - "Draw a second version for an availability-payment concession"
            - name: Cover ratios and project finance vocabulary sheet
              description: |-
                ## Purpose
                Lenders and sponsors talk in a dense shorthand: CFADS, DSCR, LLCR, PLCR, tail, sculpting, lock-up, cash sweep, DSRA, P50 and P90. A one-page sheet with the definition and formula for each, and the typical range you see in your sector, stops you guessing in a lender call and keeps your model labels consistent.

                ## Milestones
                1. A sheet defining at least 25 project finance terms in plain language.
                2. The formulas for DSCR, LLCR and PLCR written out with the cash flows and discount rate each uses.
                3. Typical lender ranges noted for two sectors you work in, sourced from public market commentary.
                4. The sheet pinned beside your model template and used to name model rows.

                ## Notes
                Ranges move with the market and the counterparty. Treat them as a reference for questions, not a target to model to.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A vocabulary sheet with 25 or more defined terms and the three cover ratio formulas sits beside your model template."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write definitions for CFADS, DSCR, LLCR and PLCR from a trusted textbook"
                - "Add tail, sculpting, lock-up, cash sweep and reserve account terms"
                - "Note the typical DSCR ranges quoted in public market commentary for two sectors"
                - "Rename your model template rows to match the sheet"
            - name: Personal project finance model template
              description: |-
                ## Purpose
                Most project models share a skeleton: timing flags, construction costs and funding, operating revenues and costs, tax, the cash flow waterfall, debt and reserves, ratios and returns. Building your own clean template once, separate from any client file, lets you start every new mandate from a checked structure instead of an inherited spreadsheet with hidden quirks.

                ## Milestones
                1. A template with separate inputs, timing, calculations, financial statements and outputs sheets.
                2. Monthly construction and semi-annual operations timelines driven by flags, not hard-coded columns.
                3. A cash flow waterfall, sculpted debt, a debt service reserve and ratio outputs that link and balance.
                4. Error checks that sum to zero on a front summary sheet.
                5. The template tested on one textbook case with known answers.

                ## Notes
                Build it on public or invented numbers only. Never copy a client model into a personal file.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal model template built on invented data balances, passes all checks and reproduces a textbook case's DSCR and debt quantum."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Lay out the five sheets and the colour code for inputs and formulas"
                - "Build the timing flags for construction and operations periods"
                - "Add the cash flow waterfall, sculpted debt and reserve account"
                - "Test the template against a textbook case with known answers"
                - "Review the template against your latest mandate's lessons @recurring(yearly)"
            - name: Financial adviser mandate scope checklist
              description: |-
                ## Purpose
                Being the sponsor's financial adviser is a different job from being an arranger or a lender, and confusion about the role shows up later as unpaid work and conflicts. A checklist you run against every engagement letter, covering the role, deliverables, model responsibility, fee triggers and conflict checks, means the scope is clear before the first lender is approached.

                ## Milestones
                1. A checklist distinguishing financial adviser, mandated lead arranger, underwriter and lender roles.
                2. Standard scope items listed: model, bank book, lender process, term sheet negotiation, close support.
                3. Fee structure questions noted: retainer, milestone fees, success fee at financial close and break fees.
                4. A conflicts step included for when your own bank also wants to lend.
                5. The checklist approved by your team lead for use on new mandates.

                ## Notes
                Engagement terms and conflict rules are for your firm's legal and compliance teams. The checklist only makes sure the right questions are asked.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A mandate scope checklist covering role, deliverables, fees and conflicts is approved by your team lead and used on the next engagement letter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the differences between adviser, arranger and lender roles"
                - "Write the standard scope items an adviser delivers to financial close"
                - "Add questions on milestone fees, success fees and break fees"
                - "Send the checklist to your team lead for approval"
            - name: Assumptions book and project data book
              description: |-
                ## Purpose
                Every number in a project model should trace to a source: the EPC price to the contract, the energy yield to the technical report, the tariff to the offtake agreement, the opex to the O&M quote. An assumptions book that lists each input, its source document, date and owner turns model audits and lender questions from a scramble into a lookup.

                ## Milestones
                1. An assumptions book with one row per model input, its value, units, source document and date.
                2. Every input tagged with the adviser or sponsor team member who owns it.
                3. Open assumptions flagged with the date each is expected to be confirmed.
                4. The book reconciled to the model inputs sheet with zero unexplained differences.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An assumptions book traces every model input to a dated source, with open items flagged and no unexplained differences to the model."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the model's inputs sheet into a blank assumptions book"
                - "Add source document, date and owner columns to every row"
                - "Flag each unconfirmed input with an expected confirmation date"
                - "Reconcile the assumptions book to the model inputs @recurring(monthly:15)"
            - name: Energy and infrastructure sector reading queue
              description: |-
                ## Purpose
                Project finance moves with policy: auction rules, tariff reforms, grid codes, rate cycles and the lenders entering or leaving a sector. A short monthly reading habit across trade press, rating agency sector reports and development bank publications keeps your market view current enough to answer a sponsor's question about where terms are going.

                ## Milestones
                1. A queue of ten sources covering trade press, rating agency sector reports and development lender publications.
                2. A monthly slot in the calendar for reading and noting three takeaways.
                3. A running notes page with dated takeaways by sector.
                4. One takeaway used in a pitch, model assumption or client conversation each quarter.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reading queue of ten sources exists and the notes page shows dated takeaways for at least three consecutive months."
                cadence: rolling
              tasks:
                - "Pick ten sources across trade press, rating agencies and development lenders"
                - "Set up the queue from the reading queue template"
                - "Read two items and write three dated takeaways @recurring(monthly:12)"
            - name: Greenfield project risk allocation matrix
              description: |-
                ## Purpose
                Lenders decide whether a project is bankable by asking who carries each risk: construction delay, cost overrun, performance, resource, demand, price, currency, change in law, force majeure and political risk. A matrix that names each risk, the party carrying it, the contract clause and the mitigation is the backbone of the bank book and the first thing a credit committee looks for.

                ## Milestones
                1. A matrix of at least 15 project risks with the party that carries each one.
                2. Each risk linked to the contract or clause that allocates it.
                3. Mitigations recorded: guarantees, liquidated damages, insurance, reserves or sponsor support.
                4. Residual risks to lenders highlighted and agreed with the sponsor team.
                5. The matrix refreshed after each major contract turn.

                ## Notes
                Start from the **Risk register** template. Contract interpretation belongs to the lawyers; the matrix records their view, it does not replace it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk allocation matrix of 15 or more risks, each tied to a contract clause and mitigation, is agreed with the sponsor team."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List 15 construction, operating, market and political risks for the project"
                - "Map each risk to the party and clause that carries it"
                - "Ask project counsel to confirm the clause references"
                - "Refresh the matrix against the latest contract drafts @recurring(quarterly)"
            - name: Project document register and version control
              description: |-
                ## Purpose
                Hundreds of drafts pass through a financing: EPC and O&M contracts, technical and insurance reports, the model, the term sheet, the loan agreement and the CP list. A register that records the current version of each document, who holds the pen and when it last turned stops you modelling off a superseded tariff schedule or sending lenders an old report.

                ## Milestones
                1. A register listing every project document, its current version, date and pen holder.
                2. A file naming rule agreed with the deal team and applied to all folders.
                3. Superseded drafts moved to an archive folder rather than deleted.
                4. A check that the model and bank book cite the register's current versions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A document register shows the current version and pen holder of every project document, and the model cites only current versions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every project document and who currently holds the pen"
                - "Agree a file naming rule with the deal team"
                - "Move superseded drafts into an archive folder"
                - "Check the model cites the current tariff and EPC price versions"
            - name: Weekly financing workstream and CP tracker
              description: |-
                ## Purpose
                Twelve or so workstreams run at once on a project financing: technical, legal, insurance, environmental and social, market, model audit, tax, permits and the lender credit processes. A tracker reviewed every Monday, with owner, status and the next date for each, is how an adviser keeps the timetable to financial close honest and spots slippage while it can still be recovered.

                ## Milestones
                1. A tracker listing every workstream with owner, status, next action and due date.
                2. Conditions precedent added as they are agreed in the term sheet and loan agreement.
                3. A Monday review held with the sponsor team and updated tracker circulated.
                4. Slipping items escalated with a recovery plan within a week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The workstream and CP tracker is updated and circulated every Monday, with each slipping item carrying an owner and a recovery date."
                cadence: rolling
              tasks:
                - "Build the tracker with workstream, owner, status, next action and date columns"
                - "Add every condition precedent from the latest term sheet"
                - "Update and circulate the tracker after the sponsor call @recurring(weekly:mon)"
                - "Review the timetable to financial close against the tracker @recurring(monthly:3)"
            - name: Model release log and change control
              description: |-
                ## Purpose
                Once lenders, the model auditor and the sponsor all hold copies of the model, an unlogged change is a credibility problem: a DSCR moves and nobody can say why. A release routine with a version number, a change log and a reconciliation of key outputs between versions keeps every party on the same numbers.

                ## Milestones
                1. A change log recording version, date, change, reason and the effect on DSCR, debt and equity IRR.
                2. A release routine with a fixed day each week for issuing new versions.
                3. An output bridge between versions for debt quantum, minimum DSCR and sponsor returns.
                4. Every version sent to lenders matching a log entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model version issued in the last month has a log entry and an output bridge to the prior version."
                cadence: rolling
              tasks:
                - "Create a change log tab with version, change, reason and output effects"
                - "Build an output bridge for debt, minimum DSCR and equity IRR"
                - "Issue the weekly model release with its change log entry @recurring(weekly:thu)"
                - "Check the last version sent to lenders matches the log"
            - name: Lender Q&A log through credit approval
              description: |-
                ## Purpose
                During lender due diligence each bank and its advisers send questions on the model, contracts and technical reports, often the same question in five forms. A single log with the question, lender, owner, draft answer and approval status means answers are consistent across the club and nothing sits unanswered into credit committee week.

                ## Milestones
                1. One log holding every lender question with date, source, topic and owner.
                2. Duplicate questions grouped and answered once in the same words.
                3. Each answer approved by the sponsor before release.
                4. Open questions reported in the weekly sponsor update.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The Q&A log shows every lender question with an owner, and no question is older than ten working days without an answer or agreed date."
                cadence: rolling
              tasks:
                - "Set up the Q&A log with lender, topic, owner and status columns"
                - "Group duplicate questions and draft one shared answer"
                - "Chase open answers and update the log @recurring(weekly:wed)"
                - "Ask the agent to summarise open questions by topic for the sponsor update"
            - name: Monthly project debt market terms watch
              description: |-
                ## Purpose
                Sponsors want to know what the market will bear: margins, tenors, gearing, DSCR targets, hedging costs and which banks and institutional lenders are active in a sector. A monthly log of terms seen in public deal reports and your own processes gives you dated evidence for every term sheet negotiation instead of memory.

                ## Milestones
                1. A log of observed terms by sector and region: margin, tenor, gearing, DSCR and lender group.
                2. Each entry dated and tagged with its source, public report or own process.
                3. A one-page monthly summary of how terms moved.
                4. The summary used in at least one pitch or negotiation each quarter.

                ## Notes
                Start from the **Metrics log** template. Keep live terms from your own deals inside your firm's systems and record only what you are allowed to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "The terms log has dated entries for at least three months and a one-page summary for each month."
                cadence: rolling
              tasks:
                - "Create a terms log from the metrics log template"
                - "Add five recent public deal reports with margin, tenor and gearing"
                - "Log the month's observed terms and write the summary @recurring(monthly:9)"
                - "Share the summary with your team lead"
            - name: Rate and inflation curve refresh in live models
              description: |-
                ## Purpose
                Moves in swap rates or inflation forecasts change debt service, indexed revenues and the debt a project can carry, sometimes by more than a tariff change. A fixed monthly refresh of the base rate curve, swap rates, inflation indices and exchange rates in each live model keeps your outputs current and your sponsor unsurprised.

                ## Milestones
                1. A list of every rate, inflation and FX input used in each live model, with its source.
                2. A monthly refresh done from one dated source snapshot.
                3. The effect of the refresh on debt quantum and minimum DSCR recorded in the change log.
                4. Large moves flagged to the sponsor with a short note.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live model shows a curve refresh in the last month, logged with its source date and output effect."
                cadence: rolling
              tasks:
                - "List every rate, inflation and FX input in each live model"
                - "Agree the data source and snapshot time with your team"
                - "Refresh curves in live models and log the output effect @recurring(monthly:18)"
                - "Send the sponsor a note when debt quantum moves materially"
            - name: Tender and auction pipeline in your sector
              description: |-
                ## Purpose
                Much project finance work starts with a government tender, a renewables auction or a privatised concession round, and sponsors hire advisers months before bids are due. Tracking the rounds in your sector, with timetables, bid security and financing requirements, tells you where the next mandates are and which sponsors need help.

                ## Milestones
                1. A pipeline of announced tenders and auctions with procuring body, capacity or size and bid dates.
                2. Financing requirements noted for each: committed finance at bid, bid bonds, local content.
                3. Likely bidders listed against each round.
                4. One coverage conversation booked for each round within six months of bid date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pipeline lists every announced round in your sector with bid dates and financing requirements, refreshed monthly."
                cadence: rolling
              tasks:
                - "List the tenders and auctions announced in your sector this year"
                - "Note bid dates, bid bonds and committed finance requirements"
                - "Refresh the pipeline and add new rounds @recurring(monthly:22)"
                - "Raise the top two rounds at your next team meeting"
            - name: Development budget and financing cost tracker
              description: |-
                ## Purpose
                Before financial close the sponsor is spending its own money on permits, studies, advisers and lender fees, and that spend often becomes part of the project cost to be funded at close. A tracker of development costs, adviser and lender fees and expected close costs keeps the model's uses of funds accurate and avoids a surprise in the funds flow.

                ## Milestones
                1. A tracker of development spend by category with invoices and dates.
                2. Expected financing costs at close listed: upfront fees, commitment fees, agency fees, hedging and adviser success fees.
                3. The tracker reconciled to the model's sources and uses table.
                4. Items not reimbursable at close agreed with the sponsor.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The development cost tracker reconciles to the model's sources and uses each month, with non-reimbursable items agreed."
                cadence: rolling
              tasks:
                - "Ask the sponsor for its development spend to date by category"
                - "List expected financing costs at close with their basis"
                - "Reconcile the tracker to the sources and uses table @recurring(monthly:27)"
                - "Agree which costs are not reimbursable at financial close"
            - name: Construction monitoring report review
              description: |-
                ## Purpose
                After financial close the lenders' technical adviser reports monthly on progress, cost, drawdowns and the schedule to completion. Reviewing each report against the base case model, with a short note on delays, contingency use and the forecast commercial operation date, is how an adviser or lender-side banker catches a problem before it reaches the cover ratios.

                ## Milestones
                1. A review checklist covering progress, spend versus budget, contingency, schedule and drawdown requests.
                2. Each monthly report reviewed and a half-page note filed.
                3. Contingency drawn and forecast completion date tracked against the base case.
                4. Any delay beyond the agreed float raised with the sponsor and agent bank.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A half-page review note exists for every monthly construction report since close, with contingency and completion date tracked."
                cadence: rolling
              tasks:
                - "Write a review checklist for the monthly construction report"
                - "Track contingency used against the base case budget"
                - "Review the month's construction report and file the note @recurring(monthly:5)"
                - "Raise any delay beyond the schedule float with the agent bank"
            - name: Operating period covenant and ratio tests
              description: |-
                ## Purpose
                Once a project is operating, lenders test historical and forward DSCR on calculation dates, and a breach of the lock-up level stops distributions to the sponsor. A quarterly routine that runs the tests, checks reserve account balances and reports headroom gives the sponsor time to act before a lock-up or default rather than after.

                ## Milestones
                1. A list of every covenant test, its level, calculation date and data source.
                2. A quarterly calculation of historical and projected DSCR with headroom to lock-up and default levels.
                3. Reserve account balances checked against required levels.
                4. A one-page compliance summary sent to the sponsor before each certificate is due.

                ## Notes
                The loan agreement's definitions rule. Calculate exactly as defined, then talk to counsel or the agent bank if a definition is unclear.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly covenant summary shows DSCR headroom and reserve balances for each test date in the last year."
                cadence: cyclic
              tasks:
                - "List every covenant test, level and date from the loan agreement"
                - "Build the DSCR calculation using the agreement's definitions"
                - "Run the tests and send the sponsor the headroom summary @recurring(quarterly)"
                - "Check reserve account balances against required levels"
            - name: Building CFADS from revenue to cash available
              description: |-
                ## Purpose
                Cash flow available for debt service is the single number every project lender sizes against, and it is easy to get wrong: revenues on an accruals basis, working capital ignored, tax in the wrong period, major maintenance spread wrongly. Building CFADS line by line on a practice case teaches you what belongs above the line and what lenders will challenge.

                ## Milestones
                1. A practice CFADS build from revenue through opex, tax, working capital and maintenance reserve.
                2. Each line labelled as cash or accrual with the reason.
                3. The effect of working capital and tax timing on CFADS shown in a short bridge.
                4. The build checked against a textbook answer or by a senior modeller.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice CFADS build matches a textbook answer or passes a senior modeller's review, with a bridge for tax and working capital."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a textbook practice case with a published CFADS answer"
                - "Build CFADS line by line from revenue to cash available"
                - "Bridge the effect of working capital and tax timing"
                - "Ask a senior modeller to check the build"
            - name: Debt sizing on DSCR and gearing constraints
              description: |-
                ## Purpose
                Project debt is sized as the lower of what the cover ratio allows and what the maximum gearing allows, often under several revenue cases at once. Learning to size debt by hand and then in the model, and to say which constraint binds and why, is the skill sponsors pay advisers for in every term sheet negotiation.

                ## Milestones
                1. Debt sized on a practice case under a target DSCR and under a maximum gearing, with the binding constraint named.
                2. Sizing repeated under a P50 and a P90 revenue case.
                3. A short note on how tenor, tail and target DSCR change the debt quantum.
                4. A one-page explanation a sponsor could follow.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice case is sized under DSCR and gearing limits in two revenue cases, with the binding constraint explained on one page."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Size debt by hand on a practice case at a target DSCR"
                - "Repeat the sizing under a maximum gearing limit"
                - "Compare P50 and P90 sizing and name the binding case"
                - "Write a one-page explanation for a sponsor"
            - name: Sculpted repayment and circularity handling
              description: |-
                ## Purpose
                Sculpting sets each period's debt service so the DSCR is constant, which means the repayment depends on CFADS and, through interest and tax, CFADS depends on the repayment. Learning the standard ways to break that circularity, by copy-paste macro, algebraic solve or a separate sizing pass, saves hours of debugging and stops a model that only works with iterations switched on.

                ## Milestones
                1. A sculpted repayment profile built on a practice case at a constant DSCR.
                2. The circularity identified and broken by one documented method.
                3. Results compared against an annuity profile for debt quantum and average life.
                4. A note on when a sculpted profile is not appropriate.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model sculpts debt at a constant DSCR without iterative calculation switched on, with a comparison to an annuity profile."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Build a sculpted repayment at a constant DSCR on the practice case"
                - "Find where interest and tax create the circular reference"
                - "Break the circularity with one documented method"
                - "Compare debt quantum and average life against an annuity"
            - name: Reserve accounts and cash waterfall modelling
              description: |-
                ## Purpose
                The waterfall decides the order cash is paid: operating costs, senior debt service, reserve top-ups, junior debt and then distributions, with lock-ups and cash sweeps in between. Modelling the debt service reserve, maintenance reserve, lock-up test and sweep on a practice case shows how each one moves sponsor returns and why lenders fight for them.

                ## Milestones
                1. A waterfall modelled with at least six levels in the correct order.
                2. A debt service reserve funded at close or from cash flow, with releases on final maturity.
                3. A distribution lock-up test and a cash sweep that switch on in a downside case.
                4. The effect of each reserve on equity IRR shown in a small table.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice waterfall with six levels, two reserves, a lock-up and a sweep works in base and downside cases, with equity IRR effects tabled."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write the waterfall order from a sample loan agreement"
                - "Model a debt service reserve and a maintenance reserve"
                - "Add a lock-up test and a cash sweep triggered in a downside"
                - "Table the effect of each feature on equity IRR"
            - name: Construction period funding and interest during construction
              description: |-
                ## Purpose
                During construction there is no revenue, so costs are funded by equity and debt drawdowns in an agreed order, and interest and fees are capitalised. Modelling equity first, pro rata and equity bridge structures, with interest during construction and commitment fees, shows why funding order changes both the debt needed and the sponsor's return.

                ## Milestones
                1. Monthly construction costs funded under equity first and pro rata drawdown.
                2. Interest during construction and commitment fees calculated and capitalised.
                3. An equity bridge loan variant with the sponsor guarantee noted.
                4. A comparison of total funding need and equity IRR across the three structures.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice model funds construction three ways with capitalised interest and fees, and compares total funding need and equity IRR."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Model monthly construction costs from a sample EPC payment schedule"
                - "Fund them equity first, then pro rata, with capitalised interest"
                - "Add an equity bridge loan variant"
                - "Compare total funding need and equity IRR across structures"
            - name: Tax, depreciation and accounting rows in a project model
              description: |-
                ## Purpose
                Tax allowances, loss carry-forwards, thin capitalisation limits and withholding tax on shareholder loans can move equity returns more than a margin change, and they are the rows model auditors challenge most. Learning how these rows are usually built, while leaving the actual tax position to the sponsor's tax adviser, makes you a better reviewer of the model and the tax report.

                ## Milestones
                1. A list of the tax and accounting features common in your sector's project models.
                2. Practice rows built for depreciation, loss carry-forward and an interest deductibility cap.
                3. Questions for the tax adviser written for each assumption.
                4. The tax adviser's confirmed assumptions recorded in the assumptions book.

                ## Notes
                Tax positions are for the sponsor's tax adviser. The model implements their advice; you do not form a tax view.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Practice tax rows exist for depreciation, losses and an interest cap, and every tax input in the assumptions book cites the tax adviser."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the tax and accounting features in a recent project model"
                - "Build practice rows for depreciation and loss carry-forward"
                - "Write questions for the tax adviser on each assumption"
                - "Record the tax adviser's answers in the assumptions book"
            - name: Reading the lenders' technical adviser report
              description: |-
                ## Purpose
                The technical adviser's report is where lenders get their view of the technology, the EPC contractor, the schedule, the energy yield or traffic forecast and the operating costs, and its numbers often override the sponsor's. Learning to read one quickly for the figures that feed the model, and the caveats that become conditions, saves days of back and forth in due diligence.

                ## Milestones
                1. One full technical adviser report read and summarised in a page.
                2. Every figure that feeds the model listed with its section reference.
                3. Differences between the report and the sponsor case recorded.
                4. Caveats and recommendations that could become conditions precedent flagged.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of a technical adviser report lists every model figure, every difference from the sponsor case and every likely condition."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the executive summary and conclusions of the technical report"
                - "List every figure that feeds the model with its section"
                - "Mark differences from the sponsor case in the assumptions book"
                - "Flag caveats likely to become conditions precedent"
            - name: Contracted, availability and merchant revenue analysis
              description: |-
                ## Purpose
                Lenders treat a 20-year power purchase agreement with a creditworthy buyer very differently from traffic risk on a toll road or merchant power prices after a contract ends. Working through the three revenue types, with how each is forecast, stressed and sized, tells you why gearing and tenor differ so much between projects that look alike.

                ## Milestones
                1. A note on contracted, availability-based and merchant revenue with one example of each.
                2. Counterparty credit, indexation and termination payments noted for contracted revenue.
                3. Typical forecast sources for traffic, demand and merchant prices listed.
                4. The effect of a merchant tail on debt sizing shown on a practice case.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note compares three revenue types with examples, and a practice case shows how a merchant tail changes debt quantum."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a paragraph on each revenue type with an example project"
                - "Note the offtaker credit and termination payment terms to check"
                - "List the forecast providers lenders accept for demand and price"
                - "Model the effect of a merchant tail on debt sizing"
            - name: Downside cases and breakeven analysis for lenders
              description: |-
                ## Purpose
                Credit committees want to know how hard a project can be hit before it defaults: how much lower the energy yield, how much higher the opex, how long a construction delay. A standard set of downside cases and breakeven tests, agreed with the lenders early, keeps the sensitivity pages consistent and stops requests multiplying in the last week.

                ## Milestones
                1. A standard list of lender sensitivities: P90 and P99 yield, opex up, delay, availability down, rates up.
                2. Breakeven tests showing the input level at which DSCR hits 1.0 and the lock-up level.
                3. The case list agreed with the lead lenders before credit papers are written.
                4. A sensitivity output page that updates from one switch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A sensitivity page with an agreed case list and breakeven results for at least four inputs updates from a single scenario switch."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the standard downside case list for your sector"
                - "Build breakeven tests for yield, opex, delay and rates"
                - "Agree the case list with the lead lenders"
                - "Link all cases to a single scenario switch"
            - name: Choosing the financing route and lender mix
              description: |-
                ## Purpose
                A project can be financed by commercial bank loans, a project bond, development finance institutions, export credit agencies, a mini-perm with refinancing risk, or a mix. Comparing the routes on tenor, cost, timetable, documentation burden and conditions such as environmental standards gives the sponsor a recorded decision before the lender process starts.

                ## Milestones
                1. A comparison of four or five routes on tenor, all-in cost, timetable, flexibility and conditions.
                2. Eligibility for development and export credit lenders checked against the project's country and equipment.
                3. A recommended route and lender mix with reasons.
                4. The sponsor's decision recorded with date and alternatives considered.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The sponsor has recorded a financing route and lender mix decision based on a comparison of at least four routes."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the financing routes realistically open to the project"
                - "Score each on tenor, cost, timetable, flexibility and conditions"
                - "Check development and export credit lender eligibility"
                - "Present the recommendation and record the sponsor's decision"
            - name: Model auditor selection and audit scope
              description: |-
                ## Purpose
                Almost every lender group requires an independent model audit before close, and a late or narrow audit becomes the critical path. Choosing the auditor early, agreeing scope with the lenders and planning the audit rounds around model freeze dates keeps the audit from holding up credit approval.

                ## Milestones
                1. Three model audit firms approached for proposals on the same scope.
                2. Scope agreed with lenders: logic, tax, accounting, documentation consistency and a reliance letter.
                3. A firm appointed with fees and timetable recorded.
                4. Audit rounds scheduled against model freeze dates.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A model auditor is appointed on a lender-agreed scope, with audit rounds scheduled against model freeze dates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draft the audit scope and send it to the lead lenders"
                - "Request proposals from three model audit firms"
                - "Compare fees, timetable and team experience"
                - "Schedule audit rounds against model freeze dates"
            - name: Interest rate and currency hedging strategy
              description: |-
                ## Purpose
                Floating rate project debt is usually hedged for most of its life, and where revenues and debt are in different currencies the mismatch needs a plan too. Setting out the hedging ratio, tenor, counterparties and execution timing with the sponsor and its hedging adviser stops a rate move between credit approval and close eating the equity return.

                ## Milestones
                1. The hedging requirements from the term sheet listed: ratio, tenor and counterparties.
                2. A note on currency mismatch between revenues, costs and debt.
                3. Execution options compared: pre-hedging, hedging at close and deal-contingent hedges.
                4. A hedging plan agreed with the sponsor and its hedging adviser.
                5. Hedge costs and credit spreads reflected in the model.

                ## Notes
                Hedging decisions belong to the sponsor and its hedging adviser. Your work is organising the requirements, options and model effects.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written hedging plan covering ratio, tenor, counterparties and timing is agreed with the sponsor, and its costs are in the model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the hedging requirements in the current term sheet"
                - "Note every currency mismatch between revenues, costs and debt"
                - "Compare execution timing options with the hedging adviser"
                - "Check hedge mark-to-market against the plan with the sponsor @recurring(quarterly)"
            - name: Lender term sheet bid comparison
              description: |-
                ## Purpose
                When banks return term sheets the headline margin hides the terms that matter more: tenor, DSCR and gearing, cash sweep, lock-up levels, reserve sizes, fees and conditions. A comparison grid that converts every bid into debt quantum, all-in cost and equity IRR on the same model lets the sponsor choose lenders on the full package.

                ## Milestones
                1. A grid listing every bid's margin, tenor, DSCR, gearing, sweep, lock-up, reserves, fees and conditions.
                2. Each bid run through the same model for debt quantum, all-in cost and equity IRR.
                3. Clarification questions sent to each bank on unclear terms.
                4. A ranked recommendation with reasons presented to the sponsor.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every lender bid is in one grid with modelled debt quantum, all-in cost and equity IRR, and the sponsor has chosen its lenders."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the comparison grid with every term sheet item as a row"
                - "Run each bid through the model for debt and equity IRR"
                - "Send clarification questions on unclear terms"
                - "Present the ranked recommendation to the sponsor"
            - name: Sponsor equity structure and returns check
              description: |-
                ## Purpose
                Sponsors fund projects through a mix of share capital, shareholder loans and sometimes equity bridge loans, and the mix changes tax, distributions and returns. Laying out the equity structure, the timing of equity contributions and the resulting equity IRR and payback lets the sponsor see what lenders' terms cost them before signing.

                ## Milestones
                1. The equity structure set out: share capital, shareholder loans and any bridge.
                2. Equity contribution timing and sponsor guarantees listed.
                3. Equity IRR, payback and cash yield shown under base and downside cases.
                4. Questions on tax and legal structuring passed to the sponsor's advisers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page equity summary shows structure, contribution timing and returns in two cases, with structuring questions passed to advisers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set out the share capital, shareholder loan and bridge amounts"
                - "List the timing of each equity contribution and guarantee"
                - "Show equity IRR, payback and cash yield in base and downside"
                - "Pass structuring questions to the sponsor's tax and legal advisers"
            - name: Refinancing an operating project
              description: |-
                ## Purpose
                Once a project has a few years of operating history, construction risk has gone and lenders will often offer longer tenor, lower margin or more debt. Analysing a refinancing, including break costs on hedges, gain-sharing with a public authority and new lender diligence, tells the sponsor whether the saving is worth the work.

                ## Milestones
                1. Current debt terms, hedges and prepayment costs summarised.
                2. Indicative refinancing terms gathered from public data or lender soundings.
                3. Net benefit calculated after break costs, fees and any gain-sharing.
                4. A go or no-go recommendation recorded with the sponsor.

                ## Notes
                Many public concessions share refinancing gains with the authority. Check the concession terms with counsel early.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A refinancing analysis shows net benefit after break costs, fees and gain-sharing, and the sponsor's go or no-go is recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Summarise the current debt, hedges and prepayment terms"
                - "Gather indicative refinancing terms from lender soundings"
                - "Calculate net benefit after break costs, fees and gain-sharing"
                - "Review each operating asset for a refinancing window @recurring(yearly)"
            - name: Lender information memorandum for the bank book
              description: |-
                ## Purpose
                Credit teams first meet the project through the bank book: sponsors, contracts, technology, risks, financing structure, model outputs and the proposed terms. Drafting it from the risk matrix and assumptions book, so every figure ties to the model, gives credit teams what they need to approve without a hundred follow-up questions.

                ## Milestones
                1. A bank book outline agreed with the sponsor covering project, sponsors, contracts, risks, financing and model outputs.
                2. Every figure tied to the current model version and the assumptions book.
                3. Legal and technical sections reviewed by project counsel and the technical adviser.
                4. The final book approved by the sponsor and released to invited lenders.

                ## Notes
                Disclaimers and confidentiality wording come from counsel. Do not release to any lender that has not signed the confidentiality undertaking.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A sponsor-approved bank book with every figure tied to the current model is released to invited lenders under signed confidentiality undertakings."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Draft the bank book outline and agree it with the sponsor"
                - "Ask the agent to draft the contracts section from the contract map"
                - "Tie every figure in the book to the current model version"
                - "Send the legal and technical sections for adviser review"
            - name: Lender due diligence kick-off and site visit
              description: |-
                ## Purpose
                The kick-off meeting and site visit set the tone of lender diligence: who the advisers are, what they need, when and how questions flow. Running it with a clear agenda, a data request list and a visit plan saves weeks of drifting requests and gives credit teams confidence the project is organised.

                ## Milestones
                1. An agenda and attendee list sent a week before the meeting.
                2. A consolidated data request list from all lender advisers agreed at the meeting.
                3. A site visit plan with safety briefing, transport and the people lenders will meet.
                4. Notes and action items circulated within two working days.

                ## Notes
                Start from the **Meeting notes** template. Site visits follow the site's safety rules without exception: induction, protective equipment and escorts.
              priority: medium
              deadlineOffsetDays: 40
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kick-off and site visit take place and notes with an agreed data request list are circulated within two working days."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Send the agenda and attendee list a week ahead"
                - "Consolidate data requests from every lender adviser"
                - "Plan the site visit with the site's safety team"
                - "Circulate notes and actions within two working days"
            - name: Credit committee support pack for lenders
              description: |-
                ## Purpose
                Each lender writes its own credit paper, but they draw on the same model runs, sensitivities and adviser reports, and they all want them in the same week. Preparing a support pack with the agreed cases, ratio summaries, adviser report extracts and a schedule of answers lets every bank go to committee on time.

                ## Milestones
                1. A list of each lender's credit committee date and what it needs.
                2. A pack of agreed model runs, sensitivities and ratio summaries.
                3. Final or near-final adviser reports released to all lenders.
                4. Every lender's committee held with no outstanding information request.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every lender has a credit pack before its committee date and reports no outstanding information request at committee."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask each lender for its committee date and pack needs"
                - "Run the agreed cases and build the ratio summaries"
                - "Release final adviser reports to all lenders"
                - "Confirm with each lender that nothing is outstanding before committee"
            - name: Financial close conditions precedent checklist
              description: |-
                ## Purpose
                Financial close happens only when every condition precedent is satisfied or waived: signed contracts, permits, insurance, legal opinions, equity in place, hedges, the final model and audit, account openings and KYC. A checklist with owners, evidence and status, worked daily in the final weeks, is what turns a signed loan agreement into first drawdown.

                ## Milestones
                1. A checklist of every condition precedent from the loan agreement, with owner and evidence required.
                2. Each condition marked satisfied, waived or open with a date.
                3. The final model, audit sign-off and insurance confirmations in the CP folder.
                4. Lenders' counsel confirming all conditions satisfied or waived.

                ## Notes
                Start from the **Operational checklist** template. Whether a condition is satisfied is for lenders' counsel and the agent to confirm, not the adviser.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Lenders' counsel has confirmed every condition precedent satisfied or waived and financial close has occurred."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Copy every condition precedent from the loan agreement into the checklist"
                - "Assign an owner and evidence required to each item"
                - "Chase open conditions in a short call with each owner"
                - "Ask lenders' counsel for written confirmation of satisfied conditions"
            - name: Funds flow and first drawdown at close
              description: |-
                ## Purpose
                At close, money moves in one carefully ordered day: equity contributions, first loan drawdown, fees, hedge premia, development cost reimbursements and reserve funding. A funds flow memo reconciled to the model's sources and uses, with account details verified by phone, makes sure every amount lands where it should.

                ## Milestones
                1. A funds flow memo listing every payment, payer, payee, amount and account.
                2. The memo reconciled to the final model's sources and uses.
                3. Payment instructions verified through a call-back to a known contact.
                4. Every payment confirmed received by the end of close day.

                ## Notes
                Never change account details on the strength of an email alone. Payment fraud aims at exactly this day.
              priority: medium
              deadlineOffsetDays: 130
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A funds flow memo reconciled to sources and uses is signed off and every close-day payment is confirmed received."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Draft the funds flow memo from the final sources and uses"
                - "Reconcile each line to the model to the last unit"
                - "Verify payment instructions with a call-back to known contacts"
                - "Confirm receipt of every payment on close day"
            - name: Post-close file and lessons from the financing
              description: |-
                ## Purpose
                Within weeks of close the team scatters and the detail of why terms ended where they did is forgotten. A closing file of final documents, the close model and a page of lessons on what slowed the timetable gives the next mandate a head start and you a record for your own reviews.

                ## Milestones
                1. Final signed documents, the close model and audit report filed in the firm's system.
                2. A timeline of the financing from mandate to close with the main delays.
                3. One page of lessons on what to do earlier or differently.
                4. Your own contribution noted for your next performance review.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A closing file and a one-page lessons note exist within a month of close, with your own contribution recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "File the signed documents and close model in the firm's system"
                - "Write the timeline from mandate to close with the main delays"
                - "Write one page of lessons with the deal team"
                - "Note your own contribution for your next review"
            - name: First project finance staffing as an analyst
              description: |-
                ## Purpose
                A first staffing on a project financing usually means owning a model section, the Q&A log or the CP tracker within days, with acronyms nobody explains. A 30, 60 and 90-day plan for the first mandate, covering what to read, who to ask and what to deliver, gets you useful quickly and makes the first review easier.

                ## Milestones
                1. The contract map, term sheet and model structure read in the first week.
                2. One model section or tracker owned and delivered without major corrections by day 30.
                3. A weekly 15-minute check-in held with the associate or VP.
                4. A self-review at day 90 listing what you own and what you will learn next.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A 30, 60 and 90-day plan exists, one workstream is owned by day 30 and a day-90 self-review is written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the associate for the term sheet, model and contract list"
                - "Write a 30, 60 and 90-day plan from the template"
                - "Hold a short check-in with the associate @recurring(weekly:fri)"
                - "Write the day-90 self-review"
            - name: Associate owning the model and lender process
              description: |-
                ## Purpose
                As an associate you become the person lenders call: you own the model, the bank book, the Q&A and the timetable, and you review an analyst's work before it leaves. Setting out your review routine, delegation plan and escalation rules for one mandate is what lets you run the process without becoming the bottleneck.

                ## Milestones
                1. A review routine for model releases and lender documents written down.
                2. Workstreams split between you and the analyst with clear owners.
                3. Escalation rules agreed with the VP for terms, timetable and client issues.
                4. A mid-mandate check with the VP on what to hand over or take on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A written review routine, workstream split and escalation rules are agreed with the VP on one live mandate."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your review routine for model releases and lender documents"
                - "Split workstreams with the analyst and record owners"
                - "Agree escalation rules with the VP"
                - "Book a mid-mandate check with the VP"
            - name: Vice president running a project finance mandate
              description: |-
                ## Purpose
                A vice president is judged on getting the project to close on terms the sponsor accepts, while keeping the team, lenders and advisers moving together. A mandate plan that sets the timetable, the negotiation priorities, the team split and the sponsor reporting rhythm is how you lead rather than react.

                ## Milestones
                1. A mandate plan with the timetable to close, critical path and key decision dates.
                2. The sponsor's negotiation priorities ranked and agreed.
                3. A weekly sponsor report format agreed with the client.
                4. A team review after credit approval on what to change for the final stretch.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A mandate plan with timetable, ranked negotiation priorities and a sponsor reporting format is agreed with the client."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write the timetable to close and mark the critical path"
                - "Rank the sponsor's negotiation priorities with the client"
                - "Agree the weekly sponsor report format"
                - "Hold a team review after credit approval"
            - name: Moving into project finance from M&A or corporate banking
              description: |-
                ## Purpose
                Bankers who switch into project finance bring valuation and process skills but need cash flow modelling, contract reading and a lender's mindset. A transition plan that lists the gaps, a reading and modelling schedule and the people to meet in the group makes the move deliberate and the first six months less steep.

                ## Milestones
                1. A gap list comparing your current skills with a project finance associate's.
                2. A three-month learning schedule built from the skills projects in this area.
                3. Conversations held with three people in the project finance group.
                4. A recorded decision on the timing and route of the move.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A gap list, a three-month learning schedule and a recorded decision on timing exist after talking to three project finance bankers."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the skills a project finance associate uses each week"
                - "Mark which you have and which are gaps"
                - "Book conversations with three people in the group"
                - "Record your decision on timing and route"
            - name: Lender-side project finance analysis
              description: |-
                ## Purpose
                Sitting on the lender side changes the questions: not how much debt a project can raise, but whether this bank should hold its ticket and on what terms. Working one deal from the lender seat, with a credit memo, a lender base case, a security review and a hold recommendation, gives you the view advisers spend their time trying to predict.

                ## Milestones
                1. A lender base case built with the bank's own assumptions on yield, costs and rates.
                2. A credit memo outline covering structure, risks, mitigations and ratios.
                3. The security package and direct agreements summarised.
                4. A hold amount and pricing recommendation with reasons.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A lender base case, credit memo outline, security summary and hold recommendation exist for one project."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Build a lender base case from the bank's own assumptions"
                - "Outline the credit memo sections and ratio tables"
                - "Summarise the security package and direct agreements"
                - "Write the hold amount and pricing recommendation"
            - name: Advising a first-time developer on a small project
              description: |-
                ## Purpose
                Small renewables, water or waste projects are often developed by first-time sponsors who have land, a permit and a tariff offer but no idea what lenders will ask for. Advising one means more teaching: a bankability checklist, a realistic budget for advisers and fees, and an honest view of what equity the developer must bring.

                ## Milestones
                1. A bankability checklist reviewed with the developer covering land, permits, offtake, EPC and grid.
                2. A realistic budget for lender and adviser costs to close.
                3. The equity the developer must contribute, and when, set out plainly.
                4. A list of gaps to close before lenders are approached.

                ## Notes
                Small deals carry nearly the same diligence costs as large ones. Show the developer early what that means for the minimum viable project size.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The developer has a bankability checklist, a cost-to-close budget, an equity requirement and a gap list in writing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Walk the developer through a bankability checklist"
                - "Estimate lender and adviser costs to financial close"
                - "Set out the equity contribution and its timing"
                - "Write the list of gaps to close before approaching lenders"
            - name: Development lender environmental and social requirements
              description: |-
                ## Purpose
                Development finance institutions and most international banks require projects to meet recognised environmental and social standards, such as the IFC Performance Standards and the Equator Principles, with an action plan and independent monitoring. Knowing what these require, and how they shape the timetable and conditions, avoids a late surprise that adds months.

                ## Milestones
                1. A summary of the main environmental and social standards lenders apply in your sector.
                2. The usual documents listed: impact assessment, action plan, stakeholder engagement plan and monitoring reports.
                3. Typical conditions precedent and covenants tied to these standards noted.
                4. The standards' requirements added to the CP tracker template.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A summary of applicable environmental and social standards exists and their usual documents and conditions are in the CP tracker template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the summary of the IFC Performance Standards and Equator Principles"
                - "List the documents lenders require under each"
                - "Add typical related conditions to the CP tracker template"
                - "Check for updates to the standards you follow @recurring(yearly)"
            - name: Holdco and portfolio financing above operating projects
              description: |-
                ## Purpose
                Sponsors with several operating projects often raise debt at a holding company, serviced by distributions from the project companies below, to recycle equity into new developments. Understanding how that debt is sized on distributions, how lock-ups below affect it and how it ranks gives you a place in a growing part of the market.

                ## Milestones
                1. A note on how holdco debt is serviced and how it ranks behind project debt.
                2. A practice model sizing holdco debt on distributions from three projects.
                3. The effect of a lock-up at one project on holdco cover shown.
                4. Key terms of a portfolio financing listed: cash sweep, diversification tests and change of control.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A practice holdco model sized on three projects' distributions shows the effect of one project lock-up on holdco cover."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a note on holdco debt servicing and ranking"
                - "Model holdco debt sized on distributions from three projects"
                - "Show the effect of a lock-up at one project"
                - "List the key terms of a portfolio financing"
            - name: Emerging market and small-island project risks
              description: |-
                ## Purpose
                Projects in emerging and small-island markets add risks that lenders price hard: currency convertibility and transfer, a single state utility as offtaker, small grids, hurricane exposure and limited local lenders. Mapping those risks and the tools used against them, such as political risk insurance, partial risk guarantees and development lender participation, makes you useful on deals larger banks find hard.

                ## Milestones
                1. A list of country and market risks specific to emerging and small-island projects.
                2. The mitigation tools noted for each: political risk insurance, guarantees, offshore accounts and development lenders.
                3. One worked example, such as a Caribbean solar or LNG-to-power project, with its risk mitigations.
                4. A checklist added to the risk matrix template for these markets.

                ## Notes
                Insurance and guarantee products have strict eligibility. Treat the tools as questions to put to providers, not assumptions.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A risk and mitigation list for emerging and small-island projects exists, with one worked example and a checklist in the risk matrix template."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List currency, offtaker, grid and natural hazard risks for small markets"
                - "Note the mitigation tool for each risk"
                - "Work one example project through the list"
                - "Add the checklist to your risk matrix template"
            - name: Financing battery storage and new energy technologies
              description: |-
                ## Purpose
                Battery storage, green hydrogen, carbon capture and offshore wind bring revenue stacks, degradation and technology risk that lenders are still learning to size. Studying how recent deals were structured, with tolling agreements, capacity contracts, warranties and merchant tails, prepares you for the mandates where precedent is thin.

                ## Milestones
                1. Three public case studies of new energy technology financings summarised.
                2. Revenue stack and degradation modelling approaches noted for battery storage.
                3. The technology risk mitigations lenders accepted listed: warranties, performance guarantees, reserves.
                4. A short view on which features most limit debt sizing.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three new energy financing case studies are summarised with revenue, degradation and technology risk treatments and a note on sizing limits."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find three public case studies of storage or hydrogen financings"
                - "Summarise the revenue stack and degradation treatment of each"
                - "List the technology risk mitigations lenders accepted"
                - "Ask the agent to compare the three summaries for common sizing limits"
            - name: Projects in trouble and lender step-in
              description: |-
                ## Purpose
                When an EPC contractor fails, a plant underperforms or an offtaker stops paying, the project's own documents decide what happens: cure periods, reserve draws, standstills and lenders' step-in through direct agreements. Learning how these tools work in a project setting, and what an adviser does for the sponsor or lenders, rounds out the life of a financing.

                ## Milestones
                1. A list of common project distress triggers and their early warning signs.
                2. The contract tools for distress noted: cure periods, reserve draws, waivers and step-in.
                3. Two public cases of project distress summarised with how they were resolved.
                4. A first-week checklist for an adviser called into a project in trouble.

                ## Notes
                Rights in distress are legal questions. Counsel advises on them; your checklist organises the facts and the timetable.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A distress trigger list, a summary of two public cases and a first-week adviser checklist for a project in trouble exist."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the common distress triggers in your sector"
                - "Note how cure periods, waivers and step-in rights work"
                - "Summarise two public cases of project distress"
                - "Write a first-week checklist for a project in trouble"
---

# Project Finance Advisory

This area is for the banker or adviser working on non-recourse financings of power plants, renewables, roads, ports, water and social infrastructure, from the analyst on a first wind farm model to the vice president running a lender process. It starts with foundations (how project finance differs from corporate lending, the contract map, the ratio vocabulary, your own model template, the mandate scope, the data book and the risk matrix), moves into the weekly and monthly machinery of workstream trackers, model releases, lender Q&A and market terms, then the modelling skills of CFADS, sculpted debt sizing, reserve accounts and construction funding, the financing decisions, the dated events from the bank book to first drawdown, the seats you might sit in, and finally specialist work on development lenders, holdco debt, emerging markets, new technologies and projects in trouble.

What repeats is a weekly workstream and conditions precedent check, a weekly model release and lender Q&A round, monthly refreshes of market terms, rate curves, the tender pipeline and the development budget, monthly construction reports after close and quarterly covenant tests in operation. The Reading queue, Risk register, Metrics log, Meeting notes, Onboarding 30/60/90 and Operational checklist templates pair with the projects that name them. Keep project names, sponsor numbers and live lender terms inside your firm's systems, and take every tax, legal and regulatory question to the right adviser; these projects hold your own working method, not a client's confidential data. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
