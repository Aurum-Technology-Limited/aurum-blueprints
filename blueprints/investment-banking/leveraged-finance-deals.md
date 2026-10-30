---
id: investment-banking.leveraged-finance-deals
name: Leveraged Finance Deals
description: "Leveraged loans and high-yield bonds from the banker's seat: debt capacity, credit memos, commitment papers, covenants, syndication, lender marketing and the specialist structures seniors expect you to know."
category: business
version: 1.0.0
tags: [investment-banking, leveraged-finance-deals, knowledge-worker, leveraged-loans, high-yield, covenants, syndication, lbo-financing]
author: Aurum Technology
starter_structure:
  templates:
    - development-plan
    - metrics-log
    - risk-register
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Investment Banking & Advisory
      emoji: "🏦"
      description: "Advisory and capital markets work from the banker's seat: pitch books and valuation, sell-side and buy-side M&A, equity and debt capital markets, leveraged finance, restructuring and fairness opinions, plus the analyst, associate and VP years and the career moves that follow."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Leveraged Finance Deals
          description: "Working on leveraged loans and high-yield bonds: debt capacity, credit analysis, commitment papers, syndication, covenants and marketing to lenders."
          projects:
            - name: Leveraged finance product map for a new banker
              description: |-
                ## Purpose
                Revolvers, term loan A, term loan B, second lien, unitranche, senior secured notes, senior unsecured notes and holdco PIK all appear in the same week on a levfin desk, often in the same capital structure. A one-page map of who buys each instrument, how it ranks, how it is priced and how freely it can be repaid stops you mixing them up in front of a sponsor.

                ## Milestones
                1. A one-page table covering eight instruments by ranking, security, typical tenor, pricing basis and main investor type.
                2. Call protection and amortisation conventions added for each instrument.
                3. The table checked by an associate and corrected where your desk's market differs.
                4. The map saved where you can pull it up on a call.

                ## Notes
                Conventions differ between the US, European and Asian markets. Note which market your desk mostly works in and mark the differences rather than averaging them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page instrument map of eight debt products, reviewed by an associate, is saved and used on live calls."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the eight instruments your desk arranges most often"
                - "Fill in ranking, security, tenor and pricing basis for each one"
                - "Add call protection and amortisation conventions per instrument"
                - "Ask an associate to mark up the table for your market"
            - name: Sources and uses for a sponsor buyout
              description: |-
                ## Purpose
                Every leveraged buyout financing starts from one small table: equity cheque, each debt tranche and any rollover on one side, purchase price, refinanced debt, fees and cash to balance sheet on the other. Building it cleanly, with fees split between financing and transaction costs, is the first thing a desk asks a new joiner to do and the first place a numbers error shows up in a commitment paper.

                ## Milestones
                1. A sources and uses table for a public example buyout, balancing to the dollar.
                2. Financing fees, OID and transaction fees shown separately with their basis.
                3. Implied equity contribution as a percentage of total capitalisation calculated.
                4. A one-line check that the table ties to the opening balance sheet.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A balanced sources and uses table for a public buyout example, with fees split and the equity percentage calculated, ties to an opening balance sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a recent public-to-private buyout with disclosed financing terms"
                - "Lay out sources and uses with every tranche on its own row"
                - "Separate underwriting fees, OID and advisory fees with their basis"
                - "Tie the table to a simple opening balance sheet"
            - name: Core credit metrics reference sheet
              description: |-
                ## Purpose
                Senior secured and total debt to EBITDA, net debt, interest cover, fixed charge cover, free cash flow to debt and loan to value are quoted in every credit discussion, and each lender defines them slightly differently. A personal sheet with the formula, the usual definition in credit agreements and where the number sits in the model saves arguments at midnight.

                ## Milestones
                1. Ten credit metrics written out with their formula and common definitional variants.
                2. Each metric linked to the cell that produces it in the desk model.
                3. A note on which metrics rating agencies and lenders adjust for leases and pensions.
                4. The sheet reviewed against a recent credit agreement's definitions section.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reference sheet of ten credit metrics with formulas, definitional variants and model cell references, checked against one credit agreement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write out ten credit metrics and their basic formulas"
                - "Compare each one with the definitions section of a public credit agreement"
                - "Note which adjustments lenders and agencies make for leases"
                - "Re-read the sheet against the newest deal you worked on @recurring(quarterly)"
            - name: Adjusted EBITDA bridge with add-back support
              description: |-
                ## Purpose
                Debt is sized on adjusted EBITDA, and sponsors routinely present cost savings, synergies and one-off items that lift it well above reported numbers. A bridge from reported to marketed EBITDA, with each add-back tagged by type and evidence, shows lenders what they are lending against and is where most credit committee questions land.

                ## Milestones
                1. A bridge from reported EBITDA to the marketed figure with every add-back on its own line.
                2. Each add-back tagged as realised, run-rate or projected, with its source document.
                3. Add-backs shown as a percentage of reported EBITDA, with the largest three flagged.
                4. A note of which add-backs the credit agreement's EBITDA definition would permit.

                ## Notes
                Lenders increasingly push back on projected synergies with long realisation periods. Keep the tagging honest; the credit team will redo it anyway.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An EBITDA bridge exists with every add-back tagged by type and source and expressed as a percentage of reported EBITDA."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the reported EBITDA and the sponsor's marketed EBITDA"
                - "List every add-back with the document that supports it"
                - "Tag each add-back as realised, run-rate or projected"
                - "Calculate add-backs as a share of reported EBITDA"
            - name: Debt capacity analysis on a leveraged buyout
              description: |-
                ## Purpose
                Before a desk commits, it needs a view on how much debt the business can carry: a multiple of EBITDA the market will accept, a minimum interest cover, and enough free cash flow to delever within the loan's life. Running all three tests on one company, and seeing which one binds, is the core analytical skill of the job.

                ## Milestones
                1. Debt capacity calculated three ways: market multiple, interest cover floor and free cash flow paydown.
                2. The binding constraint identified with the reason written in a sentence.
                3. A range of debt quantum presented with the implied equity cheque at each point.
                4. The output formatted as a single page an associate could drop into a credit memo.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page debt capacity analysis shows three methods, names the binding constraint and gives a debt range with implied equity."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pull recent comparable financings to set a market multiple range"
                - "Model the interest cover floor at current base rates plus margin"
                - "Run a seven-year cash sweep to test paydown capacity"
                - "Write one sentence on which constraint binds and why"
            - name: Learning the desk's leveraged credit model
              description: |-
                ## Purpose
                Most levfin groups run a standard credit model with a debt schedule, cash sweep, covenant tests and ratings-style outputs, and analysts who know it can turn a new sponsor case in hours. Mapping it before your first staffing means the late nights go on the structure question, not on finding which tab drives the revolver draw.

                ## Milestones
                1. Every tab mapped on one page from operating case through to the credit statistics output.
                2. Switches for cases, base rate curves, sweeps and PIK toggles listed with what they control.
                3. A public company run through the model end to end without errors.
                4. Open questions answered by an associate and noted on the map.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of the desk credit model exists, plus a public company run through it that prints clean outputs."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the associate or training team for the current credit model"
                - "Map every tab and how it feeds the credit statistics page"
                - "List each switch and test it on a dummy case"
                - "Book half an hour with an associate to clear open questions"
            - name: Reading a term loan B term sheet
              description: |-
                ## Purpose
                Margin over the base rate, floor, OID, call protection, amortisation, excess cash flow sweep, incremental capacity and MFN all sit on two pages of a term sheet, and each one moves the economics for lenders or the sponsor. Annotating one real public term sheet line by line is the fastest way to read the next ten in minutes.

                ## Milestones
                1. One public term loan B term sheet annotated line by line in your own words.
                2. Each economic term converted into its effect on lender yield or sponsor cost.
                3. A list of the five terms sponsors push hardest on, with the usual market range noted from public sources.
                4. Your annotated copy kept as a reference next to the product map.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annotated term loan B term sheet explains every economic term and its effect on yield or cost, saved as a reference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a term sheet or summary of terms filed with a public offering"
                - "Annotate each line in plain words"
                - "Note which terms change lender yield and which change flexibility"
                - "List the five terms sponsors negotiate hardest"
            - name: Mapping the commitment committee process
              description: |-
                ## Purpose
                Underwritten commitments put the bank's own balance sheet at risk, so they go through a committee with its own memo format, deadlines and approvers, and missing a submission cut-off can lose a sponsor bid. Knowing who approves what, how far ahead papers are due and which risk and credit teams must sign off turns a scramble into a schedule.

                ## Milestones
                1. The committee's approvers, meeting days and submission cut-offs written down.
                2. The required memo sections and appendices listed from the current template.
                3. The sign-offs needed from credit, risk, syndicate and legal mapped in order.
                4. Typical lead times from first conversation to approval noted from two past deals.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written process map names the committee's approvers, cut-offs, memo sections and required sign-offs in order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the desk associate for the current committee memo template"
                - "Write down the committee calendar and submission cut-offs"
                - "List the sign-offs needed from credit, risk, syndicate and legal"
                - "Note lead times from two recent approvals on the desk"
            - name: Lender and investor universe for loans and bonds
              description: |-
                ## Purpose
                Leveraged loans are bought mostly by CLOs, loan mutual funds and banks, while high-yield bonds go to high-yield funds, insurers and multi-strategy investors, and private credit funds now compete for whole deals. Knowing which groups buy which credit quality and size tells you who to call first and why a book is or is not filling.

                ## Milestones
                1. Investor types listed with what each typically buys by rating, size and structure.
                2. Constraints noted for each, such as CLO rating buckets and fund concentration limits.
                3. The desk's top accounts grouped by type from syndicate's records.
                4. A note of which investors moved between loans, bonds and private credit recently.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written map of loan, bond and private credit investor types with their constraints and the desk's main accounts in each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the main investor types for loans and for high-yield bonds"
                - "Note the rating and concentration constraints each faces"
                - "Ask syndicate how they group the desk's top accounts"
                - "Record which investor groups have shifted between markets this year"
            - name: Weekly leveraged loan and high-yield market monitor
              description: |-
                ## Purpose
                Spreads, OID, flex activity, new-issue volume and fund flows change week to week, and a sponsor asking where a deal would clear expects an answer grounded in this week, not last quarter. A short Monday log of the numbers and the deals that priced builds the instinct seniors rely on.

                ## Milestones
                1. A log with weekly columns for new-issue spreads, OID, flex direction and fund flows.
                2. Every week's notable pricings recorded with terms against initial talk.
                3. A monthly three-line summary of what moved and why.
                4. The log used to answer at least one sponsor pricing question.

                ## Notes
                Start from the **Metrics log** template. Use the bank's subscribed data and public market reports only.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The market log has an entry for at least 10 of the last 12 weeks, with monthly summaries."
                cadence: rolling
              tasks:
                - "Set up the log with columns for spreads, OID, flex and flows"
                - "Record last week's pricings and flex moves @recurring(weekly:mon)"
                - "Write a three-line summary of what moved this month @recurring(monthly:28)"
                - "Note where any priced deal landed against initial talk"
            - name: Recent leveraged financings tracker
              description: |-
                ## Purpose
                When a sponsor asks what multiple of EBITDA a peer got last month or what call protection a comparable credit accepted, the answer has to come from a list of real deals. A monthly tracker of priced loans and bonds by sector, size, rating, structure and terms is the levfin version of a precedent table.

                ## Milestones
                1. A tracker with at least 30 priced deals, each with size, rating, structure and key terms.
                2. Filters by sector and by sponsor working without breaking.
                3. Each entry sourced to a public report or the bank's data service.
                4. A quarterly view of median terms by rating band.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker holds 30 or more sourced deals and is updated in at least 10 of the last 12 months."
                cadence: rolling
              tasks:
                - "Build the tracker columns for size, rating, structure and terms"
                - "Add the last month's priced loans and bonds @recurring(monthly:12)"
                - "Refresh the median terms by rating band @recurring(quarterly)"
                - "Tag each entry with its source"
            - name: Documentation precedent library
              description: |-
                ## Purpose
                Lawyers draft the credit agreement and indenture, but bankers decide what to accept, and the argument is always about what precedent the sponsor got on its last deal. A personal index of recent deals' key document terms, built from public filings and cleared summaries, makes those calls faster and less dependent on memory.

                ## Milestones
                1. An index of at least 15 deals with their basket sizes, EBITDA definitions and incremental terms.
                2. Each entry linked to the public filing or cleared summary it came from.
                3. Sponsor-by-sponsor notes of terms they always ask for.
                4. The index used in at least one negotiation call.

                ## Notes
                Keep only public or cleared material. Confidential documents from live deals stay on the bank's systems.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An index of 15 or more deals' documentation terms, each sourced, is updated monthly and referenced on a live negotiation."
                cadence: rolling
              tasks:
                - "Choose the ten document terms you will index for every deal"
                - "Add new public credit agreements and indentures to the index @recurring(monthly:20)"
                - "Write sponsor notes on the terms each one always requests"
                - "Archive entries older than three years @recurring(yearly)"
            - name: Live book tracker during syndication
              description: |-
                ## Purpose
                Once a loan or bond launches, the deal team needs to know every morning who has committed, at what size and price, who is still in diligence and where the book stands against the target. A single tracker kept with syndicate, rather than scattered emails, is what the MD looks at before the pricing call.

                ## Milestones
                1. A book tracker with each investor's status, indicated size, price view and open questions.
                2. Coverage percentage against the target shown at the top.
                3. Open investor questions assigned to an owner with a reply date.
                4. A daily snapshot saved so the book's path can be reviewed after pricing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During every live syndication, the book tracker is updated each day with coverage, investor status and owned open questions."
                cadence: rolling
              tasks:
                - "Agree the tracker format with syndicate before launch"
                - "Update investor status and coverage with syndicate @recurring(weekly:wed)"
                - "Assign every open investor question an owner and reply date"
                - "Save a dated snapshot of the book each evening in market"
            - name: Credit model version control and change log
              description: |-
                ## Purpose
                Sponsor cases change daily during a bid, and a commitment paper signed off a stale model is the kind of error that reaches committee. A change log noting each version, what changed and who asked for it lets anyone on the team trace a credit statistic back to its inputs.

                ## Milestones
                1. A naming convention for model versions agreed with the team.
                2. A change log tab listing date, author, request and inputs changed for every version.
                3. Credit statistics snapshot saved with every version sent outside the deal team.
                4. No version sent without a matching log entry for a full deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every model version on the current deal has a change log entry and a saved credit statistics snapshot."
                cadence: rolling
              tasks:
                - "Agree a version naming convention with your associate"
                - "Add a change log tab to the live credit model"
                - "Reconcile the change log with versions actually sent @recurring(weekly:thu)"
                - "Save the credit statistics page with each external send"
            - name: Sponsor financing preferences log
              description: |-
                ## Purpose
                Each sponsor has habits: some always want covenant-lite and portability, some favour private credit for speed, some push hardest on EBITDA add-backs, and their deal teams remember who listened. A log of what each sponsor asked for and accepted on recent financings makes pitches sharper and avoids repeating a proposal they already rejected.

                ## Milestones
                1. A log covering the sponsors your desk sees most, one row each.
                2. For each sponsor, preferred structures, terms they push on and recent deals noted.
                3. Feedback from lost or won mandates recorded within a week of the outcome.
                4. The log consulted before every sponsor pitch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The sponsor log covers the desk's top sponsors and has been updated in at least 10 of the last 12 months."
                cadence: rolling
              tasks:
                - "List the sponsors your desk pitches most often"
                - "Record each one's preferred structures and contested terms"
                - "Add notes from this month's sponsor calls and mandates @recurring(monthly:8)"
                - "Read the sponsor's row before every pitch"
            - name: Friday market colour page for sponsor clients
              description: |-
                ## Purpose
                Sponsors expect their levfin coverage to send a short view of the market each week: where new issues priced, whether flex went wide or tight, what the private credit alternative looks like. A one-page colour note, cleared by compliance, keeps the desk in the conversation between mandates.

                ## Milestones
                1. A one-page format agreed with the MD and cleared by compliance.
                2. Each issue covers pricing, flex, volumes and one structuring theme.
                3. A distribution list kept by the coverage banker, not personal email.
                4. At least one sponsor reply or follow-up call traced to the note.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The colour page goes out on most Fridays for a quarter, compliance-cleared, with at least one sponsor follow-up recorded."
                cadence: rolling
              tasks:
                - "Agree the one-page format with the MD and compliance"
                - "Ask the agent to draft the week's colour from your market log"
                - "Finalise and send the cleared colour page @recurring(weekly:fri)"
                - "Log any sponsor replies or calls it prompted"
            - name: Public-side and private-side lender materials
              description: |-
                ## Purpose
                Many loan investors also trade public securities and choose to see only public information, so a levfin deal usually needs a private lender presentation and a cleaned public version. Getting the split wrong is a compliance problem, so the process for building and checking both versions should be routine.

                ## Milestones
                1. The bank's rules for public and private lender materials summarised in your words.
                2. A checklist of items removed from the public version, such as projections and non-public figures.
                3. Both versions of one past deal compared to see how the split was done.
                4. Each new deal's public version checked against the list before release.

                ## Notes
                The compliance and legal teams decide what is public. This project is about following their process every time, not judging it alone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written public-side checklist exists and every public lender version on your deals is checked against it before release."
                cadence: rolling
              tasks:
                - "Read the bank's policy on public-side lender materials"
                - "Compare the public and private versions of one past deal"
                - "Write a checklist of items stripped from public versions"
                - "Review the checklist with compliance once a year @recurring(yearly)"
            - name: Writing the commitment committee credit memo
              description: |-
                ## Purpose
                The credit memo is where the desk argues that the bank should underwrite: business overview, sponsor, structure, credit statistics, downside case, distribution plan and the key risks with mitigants. Writing one well means a committee can approve in one sitting, and the skill carries straight into every later role in credit.

                ## Milestones
                1. One full practice memo written on a public buyout using the bank's template.
                2. Every number in the memo traced to the credit model.
                3. The top five risks stated with a mitigant and a residual view for each.
                4. Feedback from an associate or VP recorded and applied to a second draft.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A complete practice credit memo on a public buyout, revised once after senior feedback, with every figure tied to the model."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read two approved memos from the desk's archive"
                - "Draft a practice memo on a public buyout in the template"
                - "Tie every figure in the memo to a model cell"
                - "Ask a VP for written comments and revise the draft"
            - name: Downside case that tests the covenants
              description: |-
                ## Purpose
                Committees want to know what happens if revenue falls 15 percent or margins shrink for two years: does the company still pay interest, does liquidity hold, does any maintenance covenant trip. A downside case built with the credit team, rather than a mechanical haircut, is often the page that decides the hold level.

                ## Milestones
                1. A downside case with stated assumptions for revenue, margin, capex and working capital.
                2. Liquidity, interest cover and covenant headroom shown for every year of the case.
                3. The break-even point at which a covenant trips or cash runs out calculated.
                4. The case reviewed with the credit officer and their comments recorded.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A downside case shows annual liquidity and covenant headroom and states the break-even decline, reviewed with the credit officer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree downside assumptions with your associate"
                - "Model liquidity and covenant headroom year by year"
                - "Solve for the revenue decline that trips the first test"
                - "Walk the credit officer through the case and note comments"
            - name: Maintenance and incurrence covenant mechanics
              description: |-
                ## Purpose
                Maintenance covenants are tested every quarter whatever the company does, while incurrence covenants only bite when it borrows, pays dividends or makes acquisitions, and covenant-lite loans and bonds rely on the second. Being able to explain baskets, ratio tests, builders and equity cures with numbers is basic fluency for documentation calls.

                ## Milestones
                1. A worked example of a quarterly maintenance test, including an equity cure.
                2. A worked example of an incurrence test for new debt with general and ratio baskets.
                3. The builder basket mechanics explained with a two-year numeric illustration.
                4. A monthly practice routine of one covenant scenario solved by hand.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three worked numeric examples (maintenance with cure, incurrence with baskets, builder basket) are written and checked by an associate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through a quarterly maintenance test with an equity cure"
                - "Build an incurrence test example with general and ratio baskets"
                - "Show the builder basket growing over two years in a small table"
                - "Solve one covenant scenario by hand from a recent agreement @recurring(monthly:15)"
            - name: Reading a high-yield description of notes
              description: |-
                ## Purpose
                The description of notes in an offering memorandum runs to a hundred pages and controls what the issuer can do for years. Bankers who can find the restricted payments covenant, the debt incurrence covenant, change of control and asset sale sweep quickly are useful on every bond deal and every sponsor negotiation.

                ## Milestones
                1. One public offering memorandum's description of notes read with each main covenant summarised in a paragraph.
                2. The definitions that drive capacity, such as Consolidated EBITDA, highlighted.
                3. A comparison of the same covenant across two issuers.
                4. A habit of reading one new description of notes each month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written summaries of the main covenants in one description of notes, plus a two-issuer comparison, are saved for reference."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a recent high-yield offering memorandum filed publicly"
                - "Summarise the five main covenants in a paragraph each"
                - "Compare restricted payments capacity across two issuers"
                - "Read one new description of notes and note anything unusual @recurring(monthly:25)"
            - name: Call protection and prepayment premiums
              description: |-
                ## Purpose
                Loans usually carry six or twelve months of soft call at 101, while bonds carry non-call periods, make-whole premiums and step-down call schedules, and these terms shape both investor returns and the sponsor's ability to refinance or sell. Working the numbers on each lets you answer the sponsor's question about the cost of taking a deal out early.

                ## Milestones
                1. A table of typical call structures for loans and for secured and unsecured bonds, sourced to public deals.
                2. A make-whole calculation worked from a public indenture.
                3. The cost of repaying a loan and a bond in year one, two and three compared.
                4. A one-page explainer ready for a sponsor exit or refinancing discussion.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A worked comparison of early repayment costs for a loan and a bond across three years, with a make-whole example, is saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List call structures from three recent public deals"
                - "Work a make-whole premium from a public indenture"
                - "Compare year one to three repayment costs for a loan and a bond"
                - "Write the one-page explainer for sponsor discussions"
            - name: Loan yield and bond yield conventions
              description: |-
                ## Purpose
                Loan investors compare deals on margin plus OID amortised over an assumed life, usually three or four years, while bond investors talk about yield to worst, and the two are often confused in front of clients. Being exact about the conventions, base rate floors and discount margin stops embarrassing pricing errors.

                ## Milestones
                1. Yield to three-year and yield to maturity calculated for a public term loan.
                2. Yield to call and yield to worst calculated for a public callable bond.
                3. The effect of a base rate floor shown at two rate levels.
                4. A short reference of conventions saved beside the product map.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Worked yield calculations for one loan and one bond, including floors and yield to worst, agree with a market data source."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Calculate a public term loan's yield to three-year life"
                - "Calculate yield to worst for a callable bond"
                - "Show the effect of a floor at two base rate levels"
                - "Check your numbers against the bank's market data screen"
            - name: Recovery analysis and the collateral package
              description: |-
                ## Purpose
                Secured lenders lend partly on what they would get back in default, so committees and rating agencies look at enterprise value at default, the waterfall and the guarantor and collateral coverage. A recovery analysis by tranche, with the collateral package listed, explains why the first lien prices where it does.

                ## Milestones
                1. Enterprise value at default estimated using a stated distressed multiple and EBITDA.
                2. A recovery waterfall by tranche, including the revolver drawn at default.
                3. Guarantor coverage of EBITDA and assets recorded from the term sheet.
                4. Recovery percentages compared with the tranche's pricing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recovery waterfall by tranche, with stated default assumptions and guarantor coverage, sits in the credit memo appendix."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set default EBITDA and multiple assumptions with your associate"
                - "Build the recovery waterfall assuming a fully drawn revolver"
                - "Record guarantor coverage from the term sheet"
                - "Compare implied recoveries with tranche pricing"
            - name: Intercreditor terms between first and second lien
              description: |-
                ## Purpose
                Wherever there are two secured layers, or a super senior revolver above notes, an intercreditor agreement decides who controls enforcement, how long the junior lenders must wait and how proceeds are shared. Bankers who understand standstill periods and payment waterfalls can explain to investors why a second lien prices where it does.

                ## Milestones
                1. The key intercreditor terms listed: ranking, standstill, enforcement control, release and turnover.
                2. A public intercreditor summary annotated with what each term protects.
                3. The differences between a first and second lien structure and a super senior revolver structure written out.
                4. A short note on how a unitranche handles the same questions between lenders.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An annotated intercreditor summary and a written comparison of three priority structures are saved for reference."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a public intercreditor summary in an offering document"
                - "Annotate standstill, enforcement and turnover terms"
                - "Compare first and second lien with super senior structures"
                - "Note how unitranche agreements among lenders split the same rights"
            - name: Loan or high-yield bond decision for a buyout
              description: |-
                ## Purpose
                Sponsors often ask whether to fund with a term loan B, secured notes or a mix: loans are prepayable and floating, bonds lock in a fixed rate with tighter call protection and wider investor reach, and execution timing differs. A side-by-side on cost, flexibility, call terms and execution risk is a standard page in any financing pitch.

                ## Milestones
                1. Indicative cost of each option set out on a comparable basis from recent market data.
                2. Prepayment flexibility, covenant style and reporting obligations compared.
                3. Execution timeline and market risk for each option laid out.
                4. A recommendation page drafted with the trade-offs stated, for senior review.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of loan, bond and mixed structures on cost, flexibility and execution risk is reviewed by the deal VP."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull current indicative pricing for loans and secured notes"
                - "Compare call protection and covenant style side by side"
                - "Lay out the execution timeline for each option"
                - "Draft the recommendation page for the VP"
            - name: Syndicated loan versus direct lending comparison
              description: |-
                ## Purpose
                Private credit funds now offer sponsors unitranche loans with certainty, speed and confidentiality, at a higher margin than a syndicated deal and often with a maintenance covenant. Understanding the trade-off honestly helps the desk choose when to compete, when to partner and how to explain the difference to a sponsor.

                ## Milestones
                1. All-in cost of a unitranche and a syndicated first lien compared on recent public deals.
                2. Differences in covenants, call protection, confidentiality and amendment ease written out.
                3. The situations where each tends to win listed from desk experience.
                4. A pitch page agreed with the VP for sponsors weighing both routes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison page of syndicated and direct lending structures on cost, terms and execution certainty is approved for use in pitches."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect public data on recent unitranche and syndicated pricings"
                - "Compare covenants, call protection and amendment ease"
                - "Ask two seniors where each route has won recently"
                - "Draft the pitch page and get VP sign-off"
            - name: Interest rate hedging on floating-rate debt
              description: |-
                ## Purpose
                Term loans float over a base rate, so a rate rise hits interest cover directly, and lenders often require part of the debt to be hedged for two or three years. Working out the exposure and the hedging requirement with the bank's derivatives team, rather than guessing, keeps the commitment paper and the model consistent.

                ## Milestones
                1. Interest cost sensitivity shown for a 100 and 200 basis point rise in base rates.
                2. Any hedging covenant in the term sheet identified with its percentage and tenor.
                3. Indicative swap and cap costs obtained from the derivatives desk.
                4. The hedged and unhedged cases reflected in the credit model.

                ## Notes
                The derivatives desk and the client's own advisers own hedging recommendations. Your job is to make the exposure and requirements clear.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The credit model shows hedged and unhedged interest cost under two rate shocks, using indicative costs from the derivatives desk."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run interest cost sensitivities at plus 100 and 200 basis points"
                - "Find any hedging requirement in the term sheet"
                - "Request indicative swap and cap costs from the derivatives desk"
                - "Add hedged and unhedged cases to the credit model"
            - name: Setting flex terms in the fee letter
              description: |-
                ## Purpose
                Flex lets underwriters change pricing, OID or structure within agreed limits if the market moves before syndication, and it is the main protection the bank has on an underwritten deal. How much flex to ask for, and how it is split between margin, OID and tranche reallocation, is a negotiation the whole team prepares for.

                ## Milestones
                1. Recent flex outcomes gathered from the market log and syndicate.
                2. A proposed flex package with margin, OID and structure components and its cost to the sponsor.
                3. The fallback positions agreed internally before the negotiation call.
                4. The final flex terms recorded against the opening ask.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written flex proposal with components, fallbacks and the agreed final terms is filed for the deal."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask syndicate for flex outcomes on comparable recent deals"
                - "Draft the flex package with costs to the sponsor"
                - "Agree fallback positions with the MD before the call"
                - "Record the final flex terms against the opening ask"
            - name: Incremental facility and MFN design
              description: |-
                ## Purpose
                Private equity owners want room to add debt for add-on acquisitions without new lender consent, usually a free-and-clear amount plus unlimited debt subject to a ratio, while lenders want most favoured nation protection on pricing. The incremental package is where sponsor flexibility and lender protection collide, and one of the terms most worth getting right.

                ## Milestones
                1. The proposed incremental structure written out: free-and-clear amount, ratio test and any grower.
                2. MFN terms set out: margin cushion, sunset and carve-outs.
                3. The capacity created modelled in debt terms at today's EBITDA and after an add-on.
                4. The package compared with three precedents from the documentation library.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page incremental and MFN proposal with modelled debt capacity and three precedents is ready for the documentation call."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write out the proposed free-and-clear and ratio terms"
                - "Set out MFN cushion, sunset and carve-outs"
                - "Model incremental capacity before and after an add-on"
                - "Compare with three precedents from your documentation library"
            - name: Covenant-lite or maintenance covenant package
              description: |-
                ## Purpose
                Broadly syndicated term loans are mostly covenant-lite, while revolvers often keep a springing test and private credit loans usually keep a maintenance covenant. Deciding which package to propose depends on the credit, the investor base and the sponsor, and the decision needs a written rationale the committee can follow.

                ## Milestones
                1. The credit's profile matched against recent covenant packages on similar deals.
                2. Proposed tests, levels, cushion to the sponsor case and any springing trigger written out.
                3. Investor appetite for each option checked with syndicate.
                4. The chosen package and the reason recorded in the credit memo.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The credit memo records the proposed covenant package, its cushion to the sponsor case and syndicate's view of investor appetite."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List covenant packages on five comparable recent deals"
                - "Set test levels with a stated cushion to the sponsor case"
                - "Check investor appetite for each option with syndicate"
                - "Record the chosen package and reason in the memo"
            - name: Underwriting risk and hold level assessment
              description: |-
                ## Purpose
                An underwritten commitment can leave the bank holding debt it cannot sell at par if markets turn, so committees look at the size of the underwrite, the flex available, the expected hold and the potential loss. A risk register for each commitment, kept from approval to syndication, is how desks avoid surprises.

                ## Milestones
                1. The underwrite amount, target hold and expected sell-down written down for the deal.
                2. Potential loss estimated at several price levels after flex is used.
                3. The main risks to syndication recorded with an owner and trigger.
                4. The register updated at launch, at pricing and at close.

                ## Notes
                Start from the **Risk register** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A risk register for the commitment shows hold, sell-down, loss at three prices and owned risks, updated at launch, pricing and close."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record underwrite size, target hold and sell-down"
                - "Estimate loss at three price levels after full flex"
                - "List syndication risks with an owner and trigger each"
                - "Update the register at launch, pricing and close"
            - name: Commitment papers for a sponsor bid deadline
              description: |-
                ## Purpose
                When a sponsor bids for a company, its financing commitments usually have to be signed and attached to the bid by a fixed date, and every bank in the group must have committee approval first. Working back from the bid date, with the term sheet, commitment letter, fee letter and committee memo on one timetable, is what delivers papers on time.

                ## Milestones
                1. A timetable working back from the bid date to committee and legal sign-off.
                2. The commitment letter, term sheet and fee letter tracked through each draft turn.
                3. Committee approval obtained before the papers are signed.
                4. Signed papers delivered to the sponsor before the bid deadline, with copies filed.

                ## Notes
                Start from the **Operational checklist** template. Keep the fee letter on a tighter distribution than the term sheet; it is usually confidential even within the deal group.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Signed, committee-approved commitment papers are delivered to the sponsor before the bid deadline and filed."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Write the timetable back from the sponsor's bid date"
                - "Track each turn of the term sheet, commitment and fee letters"
                - "Book the committee slot and submit the memo on time"
                - "Deliver the signed papers and file final copies"
            - name: Lender meeting for a term loan launch
              description: |-
                ## Purpose
                A term loan usually launches with a lender meeting or call where management and the sponsor present the business and the deal team walks through terms and timetable. A tight agenda, a rehearsed Q&A and clean logistics decide whether investors leave with momentum or with questions.

                ## Milestones
                1. The lender presentation finalised in public and private versions.
                2. A rehearsal held with management and the sponsor, with likely questions answered.
                3. Logistics confirmed: invitations, dial-in, access to the lender site and timing.
                4. Questions raised in the meeting logged with owners and answered within two days.

                ## Notes
                Start from the **Meeting notes** template.
              priority: medium
              deadlineOffsetDays: 35
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lender meeting runs on the planned date with public and private decks ready and every question logged and answered within two days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Draft the agenda and speaking order with the sponsor"
                - "Hold a rehearsal with management and a likely Q&A list"
                - "Confirm invitations, dial-in and lender site access"
                - "Log every lender question with an owner after the meeting"
            - name: High-yield bond roadshow and pricing day
              description: |-
                ## Purpose
                A high-yield deal is marketed over a few days of investor meetings, then priced in a single afternoon once the book is in, with the issuer, sponsor and syndicate agreeing size, coupon and terms. Preparing the schedule, the investor feedback log and the pricing materials in advance keeps the day under control.

                ## Milestones
                1. The roadshow schedule and investor meeting list confirmed with syndicate.
                2. An investor feedback log maintained after every meeting.
                3. A pricing page prepared with talk, book quality and comparable bond levels.
                4. Final terms recorded and the pricing term sheet circulated the same day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The bond prices with a feedback log covering every investor meeting and a pricing term sheet circulated on pricing day."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Confirm the roadshow schedule with syndicate"
                - "Set up an investor feedback log template"
                - "Build the pricing page with comparable bond levels"
                - "Circulate the pricing term sheet once terms are agreed"
            - name: Allocations and the break for a term loan
              description: |-
                ## Purpose
                After a loan prices, the bank allocates the book among investors, often scaling back oversubscribed orders, and the loan breaks for secondary trading. Allocation decisions affect relationships with investors for years, so the analyst's job is to prepare clean data and record exactly what was decided and why.

                ## Milestones
                1. Final book data reconciled with syndicate, investor by investor.
                2. Allocation scenarios prepared for the sponsor and syndicate discussion.
                3. Final allocations recorded with the rationale for any scaling.
                4. First secondary trading level noted against the issue price.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A reconciled final book, allocation record with rationale and the break price are filed within two days of pricing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reconcile the final book with syndicate's records"
                - "Prepare two allocation scenarios for discussion"
                - "Record final allocations and the reason for any scaling"
                - "Note the first trading level against the issue price"
            - name: Debt funding mechanics at buyout close
              description: |-
                ## Purpose
                On closing day the loans fund, bond proceeds may come out of escrow, existing debt is repaid with payoff letters and fees are netted, all at fixed times. A funding checklist with amounts, accounts, conditions precedent for the debt and confirmations from the agent avoids the last-minute discovery that a number is wrong.

                ## Milestones
                1. A funding memo showing every debt draw, fee deduction and payoff amount.
                2. Debt conditions precedent tracked to satisfied with the agent and lawyers.
                3. Payoff letters received for all refinanced debt.
                4. Funding confirmed by the agent and the final memo filed.

                ## Notes
                Start from the **Operational checklist** template. The wider closing checklist sits with counsel; this covers the debt side only.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All facilities fund on the closing date against a reconciled funding memo, with payoff letters and agent confirmation filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build the funding memo with draws, fees and payoffs"
                - "Track debt conditions precedent with the agent"
                - "Chase payoff letters for each refinanced facility"
                - "File the agent's funding confirmation and final memo"
            - name: Dividend recapitalisation financing
              description: |-
                ## Purpose
                Adding debt to a portfolio company to pay the sponsor a dividend before an exit is a common request, and lenders scrutinise these deals harder because the money leaves the business. Running the case properly means showing the new debt level, the restricted payments capacity under existing documents and why the company can still delever.

                ## Milestones
                1. Pro forma credit statistics shown before and after the recap.
                2. Restricted payments and debt capacity under existing documents confirmed with counsel.
                3. A paydown path shown in base and downside cases.
                4. The lender pitch for the recap reviewed by the VP.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A recap case with pro forma statistics, confirmed document capacity and two paydown cases is approved by the VP."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Calculate pro forma credit statistics after the recap"
                - "Ask counsel to confirm restricted payments capacity"
                - "Model base and downside paydown paths"
                - "Send the recap pitch to the VP for review"
            - name: First 90 days as a levfin analyst
              description: |-
                ## Purpose
                New analysts joining a leveraged finance desk face a mix of credit work, market data, documentation and execution that M&A training barely covers. A 90-day plan with clear things to learn, deals to shadow and checkpoints with your associate turns the first quarter into competence instead of survival.

                ## Milestones
                1. A 30, 60 and 90 day plan agreed with your associate or staffer.
                2. The product map, credit model map and term sheet annotation finished by day 30.
                3. At least one live deal shadowed end to end and one credit memo section drafted.
                4. A 90-day review held with written feedback and next goals.

                ## Notes
                Start from the **Development plan** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A written 90-day plan is agreed in week one and a review with written feedback is held by day 90."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a 30, 60 and 90 day plan and share it with your associate"
                - "Block time for the product map and credit model map in month one"
                - "Ask to shadow one live deal from pitch to close"
                - "Check progress against the plan with your associate @recurring(monthly:5)"
            - name: Moving from M&A coverage into leveraged finance
              description: |-
                ## Purpose
                Bankers arriving from M&A or a coverage group know valuation and process but not credit statistics, covenants or syndication, and the desk will judge them on those quickly. A short gap analysis and a catch-up plan focused on the credit side makes the first live deal far less exposed.

                ## Milestones
                1. A gap list comparing your current skills with the levfin core skills.
                2. Three priority gaps chosen with a senior on the desk.
                3. A catch-up plan with reading, practice models and shadowing for each gap.
                4. A check-in after the first live deal to close remaining gaps.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written gap list and catch-up plan for three priority skills, agreed with a senior, has a check-in recorded after the first live deal."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the levfin skills you have and the ones you lack"
                - "Agree three priority gaps with a senior on the desk"
                - "Plan reading, practice and shadowing for each gap"
                - "Book a check-in after your first live deal closes"
            - name: From credit analyst or rating agency to levfin origination
              description: |-
                ## Purpose
                People who join from a bank's credit team, a rating agency or a loan fund bring strong credit judgement but less experience pitching sponsors, negotiating terms or running a timetable. Turning analytical depth into an origination role means learning the sponsor's view of the same numbers and practising the client-facing parts deliberately.

                ## Milestones
                1. The client-facing skills you need listed: pitching, negotiation, timetable management.
                2. One sponsor pitch drafted from the sponsor's point of view and reviewed by a VP.
                3. Two negotiation calls attended and debriefed with a senior.
                4. A six-month review of how your role has shifted toward origination.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A reviewed sponsor pitch, two debriefed negotiation calls and a six-month role review are recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List the client-facing skills you need to build"
                - "Draft a sponsor pitch from the sponsor's side of the table"
                - "Ask to join two term negotiation calls"
                - "Debrief each call with the senior who led it"
            - name: Associate running the financing workstream
              description: |-
                ## Purpose
                On a sponsor buyout the levfin associate usually owns the model, the commitment papers, the memo and the lender materials at once, while managing an analyst and answering to a VP. A weekly workstream view with owners and dates, and a standard way of checking the analyst's work, keeps every item moving without the associate becoming the bottleneck.

                ## Milestones
                1. A workstream list for the deal with owners, dates and status.
                2. A checking routine for the analyst's model, memo and decks written down.
                3. A weekly call with the analyst to reset priorities.
                4. No external send on the deal without the associate's documented check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each live deal has a dated workstream list and every external send has a recorded associate check."
                cadence: rolling
              tasks:
                - "Write the workstream list for your current deal"
                - "Define your checking routine for analyst outputs"
                - "Reset priorities with the analyst each Monday @recurring(weekly:mon)"
                - "Record your check on every external send"
            - name: Vice president leading a sponsor financing
              description: |-
                ## Purpose
                As a VP you are the sponsor's daily contact on the financing, run the negotiation of terms and flex, manage the bank's internal approvals and coordinate with other banks in the group. A deal plan covering positions, approvals, syndicate strategy and team load, refreshed monthly on long deals, is what keeps a multi-bank financing on track.

                ## Milestones
                1. A deal plan with negotiating positions, approval dates and syndication strategy.
                2. Roles agreed with the other banks in the group and recorded.
                3. Team workload reviewed and adjusted at least monthly.
                4. A post-deal review held with the team and lessons recorded.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written deal plan, agreed bank roles and a post-deal review with recorded lessons exist for each financing led."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the deal plan with positions and approval dates"
                - "Agree and record roles with the other banks"
                - "Review team workload on long financings @recurring(monthly:3)"
                - "Hold a post-deal review with the team"
            - name: Leveraged finance technical interview preparation
              description: |-
                ## Purpose
                Lateral and graduate interviews for levfin desks test credit statistics, LBO capital structures, covenant basics and market awareness, often with a short paper case. Preparing a question bank and practising weekly before applications go out shows a desk you already speak the language.

                ## Milestones
                1. A bank of 50 technical questions with model answers in your own words.
                2. Two timed paper LBO and debt capacity cases completed.
                3. A two-minute market view prepared and refreshed before each interview.
                4. At least two mock interviews done with feedback recorded.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 50-question bank, two timed paper cases and two mock interviews with feedback are complete before applications go out."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write 50 levfin technical questions with answers"
                - "Do a timed paper debt capacity case"
                - "Practise ten questions out loud @recurring(weekly:sat)"
                - "Book two mock interviews with friends in credit"
            - name: Multi-currency tranches in cross-border buyouts
              description: |-
                ## Purpose
                Buyouts of companies earning in several currencies often split the term loan into dollar and euro tranches, or add a sterling bond, to tap more investors and match cash flows. Structuring and modelling these tranches means handling currency mismatch, different base rates and separate investor bases at the same time.

                ## Milestones
                1. The company's EBITDA and cash flow split by currency.
                2. Proposed tranche sizes by currency with the matching rationale.
                3. The credit model updated with currency tranches and FX sensitivities.
                4. Investor appetite for each currency tranche checked with syndicate.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A multi-currency structure with tranche sizing rationale and FX sensitivities is in the credit model and reviewed with syndicate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split the company's EBITDA and cash flow by currency"
                - "Propose tranche sizes that match the currency mix"
                - "Add FX sensitivities to the credit model"
                - "Ask syndicate about appetite in each currency"
            - name: Asset-based revolver alongside a term loan
              description: |-
                ## Purpose
                Businesses with large receivables and inventory, such as distributors and retailers, are often financed with an asset-based revolver sized on a borrowing base plus a term loan secured mainly on other assets. Getting the split collateral and the borrowing base right decides how much liquidity the company really has.

                ## Milestones
                1. A borrowing base calculation with advance rates and eligibility from the term sheet.
                2. The split collateral arrangement between the asset-based revolver and term loan written out.
                3. Liquidity shown under the base and downside cases with the borrowing base moving.
                4. Any springing fixed charge cover test and its trigger noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A borrowing base model with liquidity in two cases and a written split collateral summary is saved for the deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Build the borrowing base from advance rates and eligibility"
                - "Write out the split collateral between the two facilities"
                - "Show liquidity in base and downside cases"
                - "Note the springing test and what triggers it"
            - name: Holdco PIK notes above the operating debt
              description: |-
                ## Purpose
                Payment-in-kind notes at a holding company are one way a sponsor can shrink its equity cheque, with interest that compounds rather than being paid in cash. Because PIK investors sit structurally behind every operating lender, the analysis centres on total debt at exit, structural subordination and how the compounding interacts with operating company restricted payments.

                ## Milestones
                1. PIK interest compounding modelled to the expected exit date.
                2. Total debt including PIK shown against EBITDA in each year.
                3. Structural subordination and dividend capacity to service the PIK explained in a paragraph.
                4. The PIK investor base and typical terms summarised from public deals.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A PIK compounding schedule, total debt profile and written note on subordination and dividend capacity are saved."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Model PIK interest compounding to an assumed exit"
                - "Show total debt including PIK against EBITDA each year"
                - "Write a paragraph on structural subordination"
                - "Summarise PIK terms from two public deals"
            - name: Recurring revenue loans for software buyouts
              description: |-
                ## Purpose
                Some software buyouts are financed on annual recurring revenue rather than EBITDA, because the company is investing for growth and EBITDA is thin or negative, with a covenant that converts to an EBITDA test after a few years. These loans need different credit analysis: retention, churn, cash burn and the path to the conversion date.

                ## Milestones
                1. Debt sized as a multiple of recurring revenue with retention and churn data alongside.
                2. Liquidity runway modelled to the covenant conversion date.
                3. The conversion trigger and the EBITDA test after it written out.
                4. Downside case with slower growth and higher churn shown.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A recurring revenue loan analysis with runway to conversion and a churn downside is written up for the credit memo."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather recurring revenue, retention and churn figures"
                - "Model liquidity runway to the conversion date"
                - "Write out the conversion trigger and later EBITDA test"
                - "Run a slower growth, higher churn downside"
            - name: Managing a hung underwritten deal
              description: |-
                ## Purpose
                When markets turn after a commitment is signed, the bank can be left holding debt it cannot sell at the agreed terms even after full flex, which is a hung deal. Handling one well means a clear view of exposure, options such as waiting, selling at a discount or restructuring tranches, and tight coordination with risk and the sponsor.

                ## Milestones
                1. Current exposure and mark-to-market loss calculated with the risk team.
                2. Options set out with their cost and timing: hold, sell at a discount, restructure or delay.
                3. A recommendation for the committee drafted with the MD.
                4. The outcome and lessons recorded for future underwriting decisions.

                ## Notes
                Decisions on hung positions sit with senior management and risk. Keep a written record of every option considered and who decided.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written options paper for the hung position with costs and a recorded decision is filed, plus a lessons note after resolution."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Calculate current exposure and loss with the risk team"
                - "Write out each option with its cost and timing"
                - "Draft the committee recommendation with the MD"
                - "Record the outcome and lessons after resolution"
            - name: Lender protection terms against value transfers
              description: |-
                ## Purpose
                Recent disputes have shown that loose document terms can let a borrower move valuable assets away from lenders or rank new debt ahead of them, and investors now ask for blockers on every deal. Knowing what each protection does, and how sponsors negotiate them down, is now core to documentation discussions.

                ## Milestones
                1. A list of common lender protection terms with what each blocks, in plain words.
                2. Three public deals compared for which protections they include.
                3. Investor feedback on protections gathered from syndicate on a recent deal.
                4. A one-page brief for the deal team on which protections to expect lenders to request.

                ## Notes
                This sits at the edge of liability management work. Keep the focus on what new deals should contain, not on running an exercise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page brief on lender protection terms, comparing three public deals and including syndicate feedback, is shared with the deal team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the common lender protection terms and what each blocks"
                - "Compare protections across three public credit agreements"
                - "Ask syndicate which protections investors pushed for recently"
                - "Ask the agent to draft a one-page brief from your notes"
---

# Leveraged Finance Deals

This area is for analysts, associates and vice presidents who arrange leveraged loans and high-yield bonds, usually for private equity sponsors buying or recapitalising companies. It starts with the foundations (the product map, sources and uses, credit metrics, adjusted EBITDA, debt capacity and the commitment committee), then the operating routines that keep market knowledge and live deals current, the technical skills behind credit memos, covenants and documentation, the structuring decisions, dated events from commitment papers to the break and funding, variants for new analysts, lateral movers and deal leads, and finally specialist structures such as holdco PIK notes, recurring revenue loans and hung deal management.

What repeats is a weekly market monitor and a Friday colour page for sponsors, monthly logs of recent financings, documentation precedents and sponsor preferences, weekly book and model updates while a deal is in market, and quarterly benchmark and drill reviews. The Development plan, Metrics log, Risk register, Operational checklist and Meeting notes templates pair with the projects that name them. Everything here is built on public information, training material or the bank's own systems; client and lender data never goes into personal files. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
