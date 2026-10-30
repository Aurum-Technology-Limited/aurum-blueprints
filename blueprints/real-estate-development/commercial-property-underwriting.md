---
id: real-estate-development.commercial-property-underwriting
name: Commercial Property Underwriting
description: "Underwriting you can defend: evidenced market rents, scored tenant covenants, a lease expiry profile, a hold-period capex budget, a reasoned exit cap rate and downside cases that decide the bid."
category: business
version: 1.0.0
tags: [real-estate-development, commercial-property-underwriting, knowledge-worker, founder, tenant-covenant, lease-expiry, exit-cap-rate, downside-case]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - purchase-decision
    - board-meeting
    - one-on-one
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Commercial Property Underwriting
          description: "Underwriting a commercial property: tenant covenant strength, lease expiry profile, market rents, capex needs, exit cap rates and downside cases."
          projects:
            - name: Commercial underwriting checklist for every asset
              description: |-
                ## Purpose
                Most underwriting mistakes are omissions rather than bad maths: a forgotten break clause, a service charge shortfall nobody modelled, a roof that needs replacing in year three. A written checklist covering income, leases, tenants, costs, capex, debt and exit, used on every deal, makes the second asset as thorough as the first and lets a reviewer see at a glance what was checked.

                ## Milestones
                1. A checklist of at least 40 items grouped under income, leases, covenant, costs, capex, debt and exit.
                2. Each item marked with the document or source that answers it.
                3. The checklist tried on one live or past deal and the gaps it exposed added.
                4. A version number and date on the checklist, stored where every deal folder can link to it.

                ## Notes
                Keep it short enough to finish in a first-round bid window. A checklist nobody completes is worse than none, because it gives false comfort.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated checklist of at least 40 items, each tied to a source document, has been used on one complete deal."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every question your last three underwritings had to answer late"
                - "Group the questions under income, leases, covenant, costs, capex, debt and exit"
                - "Note the document that answers each checklist item"
                - "Run the checklist on one past deal and add what it missed"
            - name: Assumption book with a source for every input
              description: |-
                ## Purpose
                When a committee asks where the 6.75 percent exit yield or the nine-month void came from, an answer of judgement is not enough. An assumption book records each input, its value, the evidence behind it and the date it was last checked, so every model draws from one place and stale numbers are easy to spot.

                ## Milestones
                1. A single assumption book listing market rent, void, incentive, opex, capex, growth, cap rate and debt inputs by sector.
                2. A source and an as-at date beside every value.
                3. A rule that no model uses an input older than six months without a fresh check.
                4. The book linked from the underwriting checklist.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An assumption book exists with a value, source and as-at date for every core input across at least two sectors."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the inputs from your latest model into one assumption sheet"
                - "Add a source and an as-at date beside each input"
                - "Flag every input you cannot evidence for a fresh check"
                - "Re-check any assumption older than six months @recurring(monthly:2)"
            - name: Return hurdles and walk-away rules in writing
              description: |-
                ## Purpose
                Deals have momentum, and without written hurdles the target return quietly drifts down to whatever the bid needs. Writing the minimum unlevered and levered returns, the lowest acceptable covenant score and the expiry exposure you will not take, before the next deal arrives, gives you a reason to stop that is not personal.

                ## Milestones
                1. Minimum unlevered IRR, levered IRR, equity multiple and cash-on-cash yield written for each sector.
                2. Hard limits recorded for covenant score, share of income expiring in the first three years and single-tenant exposure.
                3. The rules agreed with your partner, manager or investment committee.
                4. A sentence on what happens when a deal breaches a rule: re-price, restructure or walk.

                ## Notes
                Hurdles are your own business choices, not advice. Revisit them when debt costs move by more than a percentage point.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page hurdles and walk-away note, agreed with whoever signs off deals, is dated and stored with the assumption book."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the return each recent deal was approved at"
                - "Draft minimum returns and hard limits for each sector you underwrite"
                - "Agree the hurdles with your partner or committee chair"
                - "Store the signed note next to the assumption book"
            - name: Rent roll reconciled to the lease abstracts
              description: |-
                ## Purpose
                Seller rent rolls are summaries, and summaries leave things out: stepped rents, rent-free periods still running, side letters and service charge caps. Reconciling every line of the rent roll to an abstract of the actual lease, before any cash flow is built, means the income in the model is the income in the documents.

                ## Milestones
                1. A lease abstract for every tenancy, with rent, review dates, breaks, expiry, incentives and caps.
                2. Each rent roll line ticked against its abstract, with differences listed.
                3. Side letters and licences found in the data room recorded against the right unit.
                4. A list of questions for the seller on every unexplained difference.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every rent roll line is reconciled to a lease abstract, with differences and seller questions listed in one sheet."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Build a lease abstract sheet with columns for rent, reviews, breaks, expiry and incentives"
                - "Abstract each lease from the data room into the sheet"
                - "Tick every rent roll line against its abstract and note differences"
                - "Send the seller a numbered list of questions on the differences"
            - name: Market rent evidence file by sector and submarket
              description: |-
                ## Purpose
                Whether a lease is under-rented or over-rented decides most of a commercial underwriting, and that judgement rests on letting evidence. A file of recent lettings for each submarket you work in, with headline rent, rent-free, term, break and floor area, lets you set market rent on comparables rather than on the agent's opinion.

                ## Milestones
                1. At least ten recent lettings logged for each submarket you actively underwrite.
                2. Headline rent, incentive, term, break and size recorded for each letting.
                3. Net effective rent worked out for every comparable.
                4. A market rent view per submarket written with the three lettings that support it.

                ## Notes
                Start from the **Metrics log** template. Agents quote headline rents; ask what the incentive was every time.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An evidence file holds at least ten dated lettings per active submarket, each with a net effective rent."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the submarkets you underwrite in most often"
                - "Ask two letting agents per submarket for their recent deals"
                - "Record headline rent, incentive, term and size for each letting"
                - "Write a market rent view for each submarket citing three lettings"
            - name: Tenant covenant scoring framework
              description: |-
                ## Purpose
                Leases are only as good as the tenants paying them, and a ten-year lease to a weak business can be worth less than a five-year lease to a strong one. Scoring every tenant on the same factors, such as accounts, credit rating, trading history, parent guarantee and how essential the premises are to them, turns covenant from a feeling into a comparable number.

                ## Milestones
                1. Five to eight scoring factors chosen, each with a short description of what scores high and low.
                2. Weights agreed so the total runs from 0 to 100.
                3. The framework applied to the tenants of one live or past asset.
                4. Score bands linked to underwriting choices, such as extra void or a lower exit value for weak tenants.

                ## Notes
                Credit reports are one input, not the answer. A tenant whose head office sits in the building behaves differently from one using it as a satellite.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written covenant scoring sheet with weighted factors has scored every tenant in one asset, with score bands tied to underwriting adjustments."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the factors you will score every tenant on"
                - "Write what a high and a low score looks like for each factor"
                - "Score the tenants of one asset you know well"
                - "Link each score band to a void or exit value adjustment"
            - name: Lease expiry profile and WAULT by income
              description: |-
                ## Purpose
                Buyers and lenders look first at when the income could stop, so the expiry profile is often the chart that decides a deal. Building it by year, to first break and to expiry, weighted by rent rather than floor area, shows the cliff years and the true weighted average unexpired lease term.

                ## Milestones
                1. Income expiring each year shown both to first break and to lease expiry.
                2. WAULT worked out to break and to expiry, weighted by passing rent.
                3. The largest single expiry year and its share of income named.
                4. A note on which tenants in the cliff years are likely to stay, with reasons.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An expiry chart by year to break and to expiry, with WAULT figures and a named cliff year, is in the deal file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull break and expiry dates from the lease abstracts"
                - "Sum passing rent expiring each year to break and to expiry"
                - "Work out WAULT to break and to expiry weighted by rent"
                - "Write a line on each tenant expiring in the cliff year"
            - name: Base, downside and upside case definitions
              description: |-
                ## Purpose
                Downside cases that are just the base case with a little less growth tell a committee nothing. Defining in advance what each case means, for example the downside loses the largest tenant at first break, re-lets after twelve months and exits 75 basis points wider, makes cases comparable across deals and stops them being tuned to pass.

                ## Milestones
                1. Written definitions of base, downside and upside cases for each sector.
                2. A severe downside defined that removes the largest tenant and widens the exit yield.
                3. The definitions applied to one past deal and results recorded.
                4. Agreement from the approver that every paper will show the same cases.

                ## Notes
                Start from the **Risk register** template to list the events each case assumes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Written case definitions, agreed with the approver, have been run on one past deal with results recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write what changes in each case for rent, void, capex and exit yield"
                - "Define a severe downside that removes the largest tenant"
                - "Run the cases on one past deal and note the returns"
                - "Ask your approver to confirm every paper will show these cases"
            - name: One-page underwriting summary sheet
              description: |-
                ## Purpose
                Partners and committee members read the first page and skim the rest. A fixed one-page summary showing price, yield, WAULT, covenant scores, capex, returns in each case and the three biggest risks lets anyone compare deals side by side and forces you to decide what really matters.

                ## Milestones
                1. A one-page layout with price, initial yield, reversionary yield, WAULT, capex and returns in each case.
                2. A box for the three biggest risks and how the underwriting treats each.
                3. The layout filled in for two deals and compared.
                4. Feedback from one reader folded into a final version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary layout has been used for two deals and revised once after reader feedback."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch the ten numbers a reader needs before turning the page"
                - "Add a three-risk box with the treatment of each"
                - "Fill in the sheet for two recent deals"
                - "Ask one partner which line they looked at first"
            - name: Monthly letting and incentive evidence refresh
              description: |-
                ## Purpose
                Market rent evidence goes stale within a year, and incentives move faster than headline rents. A short monthly session adding new lettings, rent-free periods and fit-out contributions to the evidence file keeps every new underwriting on current numbers rather than last year's.

                ## Milestones
                1. New lettings added to the evidence file each month for active submarkets.
                2. Incentive trends noted per submarket each quarter.
                3. Lettings older than two years marked as historic.
                4. Any shift in market rent view recorded with the deals that caused it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The evidence file shows new lettings added in at least ten of the last twelve months."
                cadence: rolling
              tasks:
                - "Add new lettings from agent reports and deal databases @recurring(monthly:9)"
                - "Ask one agent per submarket what incentives are being agreed"
                - "Mark lettings older than two years as historic"
                - "Note any change in your market rent view with the supporting deals"
            - name: Quarterly cap rate and yield evidence log
              description: |-
                ## Purpose
                Entry and exit yields drive value more than almost any other input, yet many underwriters set them from memory. A log of investment transactions with price, yield, WAULT and covenant, updated each quarter, shows where yields are moving and gives the exit assumption a trail of evidence.

                ## Milestones
                1. Recent transactions logged per sector with price, initial yield, WAULT and tenant.
                2. A quarterly note on yield movement per sector and submarket.
                3. Prime and secondary yield ranges written for each sector.
                4. Each new underwriting citing the log for its entry and exit yields.

                ## Notes
                Start from the **Metrics log** template. Published yield reports are a useful cross-check but lag real trades.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The yield log has a dated update and sector commentary for each of the last four quarters."
                cadence: rolling
              tasks:
                - "Log the quarter's investment sales with price, yield and WAULT @recurring(quarterly)"
                - "Read one published market yield report and note its ranges"
                - "Write prime and secondary yield ranges per sector"
                - "Link the log from the assumption book exit yield line"
            - name: Tenant watchlist for credit events
              description: |-
                ## Purpose
                Tenants rarely fail without warning: late accounts, a profit warning, store closures, a lost contract or a change of owner usually come first. A watchlist of every tenant in assets you own or are bidding on, scanned weekly and re-scored quarterly, gives time to adjust a bid or start re-letting plans before the rent stops.

                ## Milestones
                1. Every tenant above a set share of income on one watchlist.
                2. News and filing alerts set up for each watchlist tenant.
                3. A quarterly covenant re-score with movements explained.
                4. A record of actions taken when a tenant was downgraded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tenant watchlist has been scanned weekly and re-scored each quarter for a year, with actions logged for every downgrade."
                cadence: rolling
              tasks:
                - "List every tenant above five percent of income in your assets and live bids"
                - "Set news and company filing alerts for each listed tenant"
                - "Scan alerts for watchlist tenants and note anything material @recurring(weekly:tue)"
                - "Re-score watchlist tenants on the covenant framework @recurring(quarterly)"
            - name: Deal screening log for every opportunity seen
              description: |-
                ## Purpose
                Underwriters see far more deals than they bid on, and the ones they pass on are a free market education. Logging each opportunity with asset, guide price, yield, key tenants and the reason for passing builds evidence of where pricing sits and stops time being wasted on deals already rejected once.

                ## Milestones
                1. One log holding every opportunity seen, with guide price, yield and reason for passing or progressing.
                2. A screen of five quick tests applied before any full underwriting starts.
                3. Outcomes added where the deal later sold, with the achieved price.
                4. A quarterly look at the log for patterns in what you passed and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The screening log holds every opportunity received over six months, each with a pass or progress reason."
                cadence: rolling
              tasks:
                - "Write five quick screening tests a deal must pass for full underwriting"
                - "Log the week's new opportunities with guide price and reason @recurring(weekly:mon)"
                - "Add the achieved price when a passed deal sells @recurring(monthly:27)"
                - "Note the most common reason for passing this quarter"
            - name: Second-person review before any bid leaves
              description: |-
                ## Purpose
                Spreadsheet errors found after a bid is accepted become a renegotiation or a loss. A standing rule that every underwriting is checked by someone else, against a short review list covering formulas, lease dates, cases and the summary page, catches the mistakes the author can no longer see.

                ## Milestones
                1. A review list of 15 to 20 checks agreed with a reviewer.
                2. A rule that no bid or committee paper goes without a recorded review.
                3. A comments log showing each review and how points were closed.
                4. A note of the errors found most often, fed back into the checklist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every bid in the last six months has a recorded second-person review with comments closed before submission."
                cadence: rolling
              tasks:
                - "Draft a review list covering formulas, lease dates, cases and the summary"
                - "Agree a named reviewer and turnaround time for each deal"
                - "Go through open review comments with your reviewer @recurring(weekly:fri)"
                - "Add the most common error to the underwriting checklist"
            - name: Debt terms and exit rate tracker
              description: |-
                ## Purpose
                Exit values depend on what the next buyer can borrow at, and levered returns depend on today's debt terms. Tracking base rates, swap rates, lender margins and typical loan-to-value and coverage tests each month keeps the debt and exit assumptions in the underwriting tied to the market rather than to the last deal.

                ## Milestones
                1. A monthly record of base rate, five-year swap and typical margins by asset type.
                2. Typical loan-to-value, interest cover and debt yield tests from at least two lenders or brokers.
                3. A note linking cost of debt to the exit yield assumption.
                4. The assumption book debt lines updated from the tracker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The debt tracker has entries for at least ten of the last twelve months and the assumption book debt lines cite it."
                cadence: rolling
              tasks:
                - "Record base rate, swap rate and lender margins for the month @recurring(monthly:23)"
                - "Ask a debt broker what tests lenders are applying this quarter"
                - "Compare the cost of debt with your exit yield assumption"
                - "Update the debt lines in the assumption book"
            - name: Yearly lookback on closed deals
              description: |-
                ## Purpose
                Underwriters rarely learn whether they were right, because the asset moves to another team after closing. Comparing each deal's actual rent, voids, capex and value a year or more on with what the underwriting said shows which assumptions you are consistently too hopeful or too cautious on.

                ## Milestones
                1. Every deal closed more than a year ago listed with its underwritten and actual figures.
                2. Variances for rent, void, capex, opex and value recorded.
                3. The two assumptions with the largest repeated error named.
                4. The assumption book and case definitions adjusted for those errors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A lookback table of underwritten versus actual figures for every deal closed over a year ago is completed each year with two named adjustments."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask asset management for actual figures on each closed deal"
                - "Run the lookback of underwritten against actual figures @recurring(yearly)"
                - "Name the two assumptions with the largest repeated error"
                - "Adjust the assumption book for those two errors"
            - name: Fit-out and capex cost benchmark refresh
              description: |-
                ## Purpose
                Re-letting a floor needs a fit-out or a contribution, and older buildings need roofs, lifts and plant replaced, so cost rates feed straight into the underwriting. Refreshing benchmark costs per square metre each quarter with a cost consultant or recent tenders stops last year's prices understating this year's capex.

                ## Milestones
                1. Benchmark rates per square metre for Category A fit-out, refurbishment and common plant items.
                2. A source and date beside each benchmark.
                3. A quarterly update with movement since the last update.
                4. Benchmarks linked from the assumption book capex lines.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Capex benchmarks have dated updates for each of the last four quarters with sources recorded."
                cadence: rolling
              tasks:
                - "List the cost rates your underwriting uses for fit-out and plant"
                - "Ask a cost consultant for current rates per square metre @recurring(quarterly)"
                - "Record movement since the last update beside each rate"
                - "Link the benchmarks from the assumption book"
            - name: Operating expense and service charge benchmarks
              description: |-
                ## Purpose
                Non-recoverable costs, void service charges and caps in leases quietly eat net income, especially in multi-let buildings. Benchmarks for service charge per square metre, insurance, management fees and void costs by building type let you test a seller's operating statement and spot leakage before you buy it.

                ## Milestones
                1. Service charge, insurance, management and void cost benchmarks by building type.
                2. Typical recovery rates and common lease caps noted.
                3. A quarterly update with sources.
                4. A short test for comparing any seller's operating statement with the benchmarks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opex benchmarks by building type are updated each quarter and used to test the operating statement on every deal underwritten."
                cadence: rolling
              tasks:
                - "Gather service charge budgets from three buildings you know"
                - "Work out costs per square metre by building type"
                - "Update the opex benchmarks with new budgets and insurance quotes @recurring(quarterly)"
                - "Write a quick test for spotting non-recoverable cost leakage"
            - name: Reading tenant accounts and credit reports
              description: |-
                ## Purpose
                Covenant scoring is only as good as your ability to read what a tenant files. Learning to read a balance sheet, cash flow statement and credit report for the signs that matter to a landlord, such as rent cover, net assets, debt maturities and auditor notes, makes covenant work faster and less reliant on a single credit score.

                ## Milestones
                1. The landlord's view of each main financial statement written in your own words.
                2. Rent cover, net assets and liquidity worked out for three real tenants.
                3. One credit report read alongside the accounts, with differences noted.
                4. A short guide of warning signs added to the covenant framework.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Rent cover, net assets and liquidity have been calculated for three real tenants and a warning-sign guide added to the covenant framework."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Download the latest accounts for three tenants in assets you know"
                - "Work out rent cover and net assets for each tenant"
                - "Read one listed tenant's annual report and its risk section @recurring(monthly:6)"
                - "Write a list of warning signs for the covenant framework"
            - name: Lease clauses that move value
              description: |-
                ## Purpose
                Two leases at the same rent can be worth very different amounts once breaks, review mechanisms, repairing terms, alienation and service charge caps are read. Learning which clauses move value, and how to reflect each in the cash flow, stops a model treating every lease as plain income until expiry.

                ## Milestones
                1. A note on how break clauses, upward-only and index-linked reviews, repairing terms and caps each affect the cash flow.
                2. Three real leases read and their value-moving clauses listed.
                3. A modelling rule written for each clause type.
                4. Questions for a property lawyer listed where a clause meaning was unclear.

                ## Notes
                Clause interpretation is a legal matter. Underwrite your reading, then confirm it with the lawyer on the deal.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A modelling rule for each value-moving clause type is written and tested against three real leases."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick three leases of different types from past data rooms"
                - "List each clause that changes when or how much rent is paid"
                - "Write a modelling rule for each clause type"
                - "Send unclear clauses to the deal lawyer as written questions"
            - name: Reversionary and over-rented income
              description: |-
                ## Purpose
                Rent above market looks generous until the review or expiry, when the income drops to market. Learning to split passing rent into the part supported by market rent and the over-rented top slice, and to value each differently, is the difference between buying income and buying a future rent cut.

                ## Milestones
                1. The terms reversionary, rack-rented and over-rented explained with a worked example of each.
                2. Passing rent split against market rent for every tenant in one asset.
                3. The over-rented slice treated separately in the cash flow and exit value.
                4. Results compared with a simple all-income approach.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One asset's rent has been split into market and over-rented slices and the value difference against a simple approach recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a worked example of reversionary and over-rented income"
                - "Compare passing rent with market rent for each tenant in one asset"
                - "Model the over-rented slice to drop at the next event"
                - "Record how much value the simple approach overstated"
            - name: Exit cap rate reasoning and the entry spread
              description: |-
                ## Purpose
                Small changes in exit yield can move the IRR more than years of rent growth, and an exit set equal to entry ignores that the building will be older and the leases shorter. Learning to build the exit yield from evidence, age, remaining WAULT and the debt market gives the assumption a reason a committee can test.

                ## Milestones
                1. A written method for setting the exit yield from the yield log, building age and WAULT at sale.
                2. The spread between entry and exit yield explained for three past deals.
                3. IRR sensitivity to a 25 basis point change in exit yield shown for one deal.
                4. A default spread per sector recorded in the assumption book.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written exit yield method and a default spread per sector are recorded in the assumption book with a worked example."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down how you set the exit yield on your last three deals"
                - "Estimate WAULT and building age at the planned sale date"
                - "Show the IRR change for each 25 basis point move in exit yield"
                - "Record a default entry to exit spread for each sector"
            - name: Practice underwriting on past transactions
              description: |-
                ## Purpose
                Speed and judgement come from repetition, and live deals are an expensive place to practise. Underwriting a sold asset each month from public information, then comparing your price with the achieved price, builds instinct for which inputs matter in which sectors.

                ## Milestones
                1. Twelve sold assets chosen across office, retail and industrial.
                2. Each underwritten from public information within a four-hour limit.
                3. Your price compared with the achieved price and the gap explained.
                4. A list of the inputs that explained most of the gaps.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve practice underwritings are completed within a year, each with the gap to achieved price explained."
                cadence: phased
                effort_hours_estimate: "48"
              tasks:
                - "Pick twelve recently sold assets from investment press reports"
                - "Underwrite one past sale within four hours @recurring(monthly:25)"
                - "Compare your price with the achieved price and explain the gap"
                - "List the inputs that explained the biggest gaps"
            - name: Net effective rent and incentive arithmetic
              description: |-
                ## Purpose
                Headline rents hide rent-free periods, capital contributions and stepped rents, and comparing headline with net effective is how underwriters get market rent wrong. Practising the arithmetic of net effective rent over the term certain, with and without discounting, makes evidence comparable and re-letting assumptions honest.

                ## Milestones
                1. Net effective rent worked out for five lettings with different incentive packages.
                2. Results compared over the term to first break and to expiry.
                3. A discounted and undiscounted version shown side by side.
                4. A standard method chosen and written into the assumption book.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard net effective rent method is written in the assumption book and applied to five real lettings."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick five lettings with different rent-free and contribution packages"
                - "Work out net effective rent over the term to first break"
                - "Repeat the sum with discounting and compare the results"
                - "Write the chosen method into the assumption book"
            - name: Sector drivers for office, retail and industrial
              description: |-
                ## Purpose
                The same lease reads differently in each sector: office demand follows employment and hybrid working, retail follows footfall and tenant sales, industrial follows supply chains and land supply. Learning the three or four drivers that decide rent and voids in each sector you underwrite keeps assumptions grounded in demand rather than history.

                ## Milestones
                1. Three or four demand and supply drivers written for each sector.
                2. A data source noted for tracking each driver.
                3. A current reading of each driver for one submarket.
                4. One underwriting assumption changed because of a driver reading.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page driver sheet per sector, each driver with a data source and current reading, is stored with the assumption book."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the drivers you believe set rents in each sector"
                - "Find a data source to track each driver"
                - "Read one sector research report and note its driver views @recurring(monthly:14)"
                - "Change one assumption in the book based on a driver reading"
            - name: Stripping the seller's assumptions from the cash flow
              description: |-
                ## Purpose
                Brokers build cash flows to sell: rent growth from day one, short voids, renewals assumed and capex left out. Rebuilding the cash flow from your own assumption book, then setting it beside the seller's version line by line, shows exactly where the asking price depends on their optimism.

                ## Milestones
                1. The seller's cash flow assumptions listed line by line.
                2. Your own cash flow built from the assumption book without reference to theirs.
                3. A variance table showing each assumption and its value effect.
                4. The three biggest variances written into the bid note.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A variance table between the seller's and your own cash flow, with value effect per line, is in the deal file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every assumption in the seller's cash flow"
                - "Build your own cash flow from the assumption book"
                - "Tabulate each variance and its effect on value"
                - "Write the three biggest variances into the bid note"
            - name: Re-letting assumptions by unit
              description: |-
                ## Purpose
                One blanket void and incentive for every unit hides the fact that a ground floor suite and a dated top floor let very differently. Setting renewal probability, void, rent-free and fit-out per unit, using evidence and the tenant's likely intentions, gives a re-letting forecast that reflects the building rather than an average.

                ## Milestones
                1. A renewal probability for each tenant, with a reason.
                2. Void, rent-free and fit-out cost set per unit from the evidence file.
                3. Blended downtime worked out and compared with the blanket assumption.
                4. The unit assumptions agreed with a letting agent who knows the building.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit in one asset has a renewal probability, void, incentive and fit-out cost with a reason recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Rate each tenant's likelihood of renewing with a short reason"
                - "Set void, rent-free and fit-out per unit from the evidence file"
                - "Compare blended downtime with your usual blanket assumption"
                - "Test the unit assumptions with a local letting agent"
            - name: Hold-period capex budget from condition reports
              description: |-
                ## Purpose
                Capex left out of an underwriting reappears as a lower return two years after closing. Turning the building survey, plant reports and the landlord's repairing obligations into a year-by-year budget for the hold, with recoverable and non-recoverable items separated, puts the real cost of owning the building into the price.

                ## Milestones
                1. Each defect and lifecycle item from the surveys listed with cost and year.
                2. Items split into recoverable through service charge and landlord cost.
                3. A contingency set and justified.
                4. The capex schedule linked into the cash flow by year.

                ## Notes
                Ask the surveyor to cost items, not just describe them. A building reserve plan after purchase is asset management work; here the aim is pricing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A year-by-year capex schedule with recoverable and landlord items separated is linked into the deal cash flow."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull every costed item from the building and plant surveys"
                - "Mark each item as recoverable or landlord cost"
                - "Set a contingency and write the reason for its size"
                - "Link the capex schedule into the cash flow by year"
            - name: Choosing underwriting data subscriptions
              description: |-
                ## Purpose
                Lettings, transactions, tenant credit and market forecasts all come from paid data, and a solo underwriter or small team cannot buy everything. Comparing providers against the questions your underwriting actually asks, with a trial on a live deal, avoids paying for coverage of markets you never bid in.

                ## Milestones
                1. The data questions your underwriting asks listed by type.
                2. Three providers compared on coverage, cost and export options.
                3. One provider trialled on a live or recent deal.
                4. A subscription decision recorded with the annual cost.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on data subscriptions names the provider, cost and the questions it answers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the data your last five underwritings had to find"
                - "Shortlist three providers covering your submarkets"
                - "Trial one provider on a recent deal"
                - "Record the decision and the annual cost"
            - name: Sensitivity grid for the five inputs that matter
              description: |-
                ## Purpose
                Sensitivity tables that flex every input produce pages nobody reads. Identifying the five inputs that move value most for a given asset, typically exit yield, market rent, void, capex and the largest tenant's renewal, and presenting a clear grid for those shows the committee exactly where the risk sits.

                ## Milestones
                1. Each input flexed in turn and ranked by effect on value and IRR.
                2. The top five inputs chosen for the grid.
                3. Two-way tables built for the two inputs with the largest effect.
                4. Break points shown where returns fall below the hurdle.

                ## Notes
                Start from the **Risk register** template to pair each sensitive input with what would cause it to move.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sensitivity grid showing the five most material inputs, a two-way table and the hurdle break points is in the deal paper."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Flex each input by a set step and record the value change"
                - "Rank the inputs and keep the top five"
                - "Build a two-way table for the top two inputs"
                - "Mark where returns fall below the written hurdle"
            - name: Break-even occupancy and rent tests
              description: |-
                ## Purpose
                Lenders and partners want to know how far things can fall before the asset stops paying its way. Working out the occupancy and the rent level at which the property just covers its debt service and non-recoverable costs gives a plain measure of cushion that every reader understands.

                ## Milestones
                1. Break-even occupancy against debt service and landlord costs worked out.
                2. Break-even rent per square metre at current occupancy worked out.
                3. Both compared with current and market levels as a percentage cushion.
                4. The cushion shown on the one-page summary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Break-even occupancy and rent, with the cushion against current levels, are shown on the deal summary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sum debt service and non-recoverable costs for year one"
                - "Work out the occupancy at which income just covers them"
                - "Work out the break-even rent at current occupancy"
                - "Add both cushions to the one-page summary"
            - name: Maximum price and bid range from the underwriting
              description: |-
                ## Purpose
                An underwriting that produces one value leaves the bid to instinct on the day. Turning the cases into a walk-away price, a target price and an opening bid, each tied to a return, gives the negotiator clear limits and makes it obvious when a seller's counter crosses the line.

                ## Milestones
                1. The price that just meets the hurdle in the base case worked out.
                2. The price that keeps the downside case above a set floor worked out.
                3. Opening bid, target and walk-away price written down with their returns.
                4. The limits agreed with the approver before the first bid.

                ## Notes
                The walk-away price is the lower of the two tests, not the average.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An opening bid, target and walk-away price, each with its return, are agreed with the approver before bidding."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Solve for the price that meets the base case hurdle"
                - "Solve for the price that keeps the downside above its floor"
                - "Write opening, target and walk-away prices with returns"
                - "Get the approver to sign off the walk-away price"
            - name: Debt sizing check inside the underwriting
              description: |-
                ## Purpose
                Levered returns assume a loan the lender may not offer once it applies its own tests. Sizing the debt yourself against loan-to-value, interest cover and debt yield limits, using the lender's likely view of the income, shows whether the planned loan is realistic and what equity the deal really needs.

                ## Milestones
                1. Loan size worked out under loan-to-value, interest cover and debt yield tests.
                2. The binding test identified.
                3. Equity required at the binding loan size shown.
                4. Covenant headroom in the downside case recorded.

                ## Notes
                Lenders often haircut short leases and weak tenants. Confirm indicative terms with a broker or lender before the bid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The deal file shows loan size under each lender test, the binding test, required equity and downside covenant headroom."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Apply loan-to-value, interest cover and debt yield limits to the income"
                - "Name the test that limits the loan"
                - "Work out the equity needed at that loan size"
                - "Check covenant headroom in the downside case"
            - name: Energy rating and obsolescence risk in the cash flow
              description: |-
                ## Purpose
                Minimum energy standards for letting, occupier demand for efficient space and lender green policies can turn a dated building into one that cannot be re-let without major works. Pricing the upgrade cost, the timing and the effect on exit yield of a poor rating protects the underwriting from a value cliff later in the hold.

                ## Milestones
                1. Current energy ratings recorded for every unit.
                2. Any minimum rating rules in the jurisdiction and their dates noted.
                3. Upgrade works costed with a surveyor and placed in the capex schedule.
                4. Exit yield adjusted where the building will still lag the market.

                ## Notes
                Rules differ by country and change often. Check the current position with a surveyor rather than relying on old guidance.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Ratings, applicable rules, costed upgrade works and any exit yield adjustment are recorded in the deal file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the energy certificate for every unit"
                - "Note any minimum rating rules and the dates they bite"
                - "Ask a surveyor to cost the upgrade works"
                - "Adjust capex and exit yield for the rating gap"
            - name: Investment committee underwriting presentation
              description: |-
                ## Purpose
                Committees approve deals they understand and reject or delay deals that feel rushed. Preparing a paper and a twenty-minute presentation that walks through the thesis, the key assumptions with evidence, the cases and the walk-away price, with answers ready for the obvious questions, turns the underwriting into a decision.

                ## Milestones
                1. A committee paper with the one-page summary, cases and sensitivity grid.
                2. A list of the ten questions the committee is most likely to ask, each with an answer.
                3. A rehearsal with a colleague playing the toughest member.
                4. The committee's decision and conditions recorded.

                ## Notes
                Start from the **Board meeting** template.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A committee paper was presented with a rehearsed question list and the decision and conditions were recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the committee date and work back to a paper deadline"
                - "Assemble the summary, cases and sensitivity grid into the paper"
                - "Ask the agent to draft the ten hardest committee questions from the paper"
                - "Rehearse with a colleague and record the decision afterwards"
            - name: First-round bid underwriting in a ten-day window
              description: |-
                ## Purpose
                Marketed deals often give ten days or fewer from data room to first-round bids, which is too short for full diligence but long enough to price badly. Planning a compressed underwriting, which inputs to evidence properly and which to take from the book, gives a defensible indicative bid without burning a fortnight on a deal you may not win.

                ## Milestones
                1. A day-by-day plan for a ten-day bid window.
                2. Inputs split into must-evidence and use-the-book.
                3. An indicative bid letter submitted with clear assumptions and conditions.
                4. A note of what must be confirmed if the bid goes to round two.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An indicative bid with stated assumptions and conditions went in on time, with a round-two confirmation list."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Write a day-by-day plan for the bid window"
                - "Mark which inputs must be evidenced before bidding"
                - "Draft the bid letter with assumptions and conditions"
                - "List what must be confirmed in round two"
            - name: Best-and-final re-underwrite
              description: |-
                ## Purpose
                Best-and-final rounds tempt bidders to stretch, usually by quietly loosening the exit yield or the void. Re-underwriting with the new information from round two, and writing down exactly which assumption changed and why, keeps the final bid honest and gives a clear record if the deal later underperforms.

                ## Milestones
                1. Round-two information logged and its effect on each assumption shown.
                2. A change log of every assumption altered since the first bid.
                3. Returns at the final price in every case.
                4. The final bid approved within the walk-away limit or the deal dropped.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A change log of assumptions since the first bid and returns at the final price in every case were approved before submission."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Log what round two told you about each assumption"
                - "Write every assumption change since the first bid with a reason"
                - "Run returns at the proposed final price in every case"
                - "Confirm the final price sits inside the walk-away limit"
            - name: Lender credit questions pack
              description: |-
                ## Purpose
                Credit teams at lenders will test the same income, tenants and exit that you underwrote, often with a sharper pencil. Preparing a pack that answers their likely questions on covenant, expiry, capex and the downside, from your own underwriting, speeds approval and avoids late changes to terms.

                ## Milestones
                1. A list of credit questions gathered from the broker and past lenders.
                2. An answer and supporting document for each question.
                3. The downside case shown against the loan covenants.
                4. The pack sent and the lender's follow-up questions logged.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A credit pack answering every listed lender question with documents was sent and follow-up questions were logged."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the broker which questions this lender's credit team usually raises"
                - "Answer each question with a supporting document"
                - "Show the downside case against the loan covenants"
                - "Log the lender's follow-up questions and answers"
            - name: Handing the underwriting to the asset manager
              description: |-
                ## Purpose
                Once a deal closes, the person running the building needs to know what the price assumed, otherwise the business plan drifts from the underwriting within months. A handover meeting and note covering the key assumptions, the riskiest tenants and the capex timing gives asset management a baseline and you a future lookback.

                ## Milestones
                1. A handover note of the ten assumptions the price depends on.
                2. The watchlist tenants and their re-letting plan explained.
                3. The capex schedule and its timing walked through.
                4. A date agreed for the first underwritten versus actual check.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A handover note was delivered in a meeting with the asset manager and a first actual versus underwritten check was dated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten assumptions the price depends on"
                - "Book a handover meeting with the asset manager"
                - "Walk through watchlist tenants and the capex schedule"
                - "Agree a date for the first actual versus underwritten check"
            - name: Founder's first small commercial purchase
              description: |-
                ## Purpose
                Founders moving from residential into a first shop parade, small office or trade counter often underwrite it like a house: one rent, no void and no capex. Working through tenant covenant, lease terms, a realistic void and a capex budget on a modest first asset, with a surveyor and lawyer checking your reading, builds the habits before the stakes get larger.

                ## Milestones
                1. One target asset underwritten using the checklist and assumption book.
                2. Each tenant scored and each lease abstracted.
                3. A downside case showing returns if the main tenant leaves.
                4. Your reading of the leases and building confirmed by a lawyer and surveyor.

                ## Notes
                Keep borrowing modest on a first asset so a long void is survivable. This is a planning note, not lending advice.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One small commercial asset has a complete underwriting with a downside case, reviewed by a surveyor and lawyer, and a buy or pass decision recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Pick one small commercial asset currently on the market"
                - "Abstract its leases and score its tenants"
                - "Model a downside where the main tenant leaves at expiry"
                - "Ask a surveyor and lawyer to check your reading before deciding"
            - name: Building a reputation as an underwriting analyst
              description: |-
                ## Purpose
                Analysts are trusted with bigger deals when their numbers survive scrutiny and their memos say something. Keeping a record of your underwritings, the calls you got right and wrong and one lesson a month gives you material for reviews and promotions and sharpens judgement faster than volume alone.

                ## Milestones
                1. A private log of every deal you underwrote, with your view and the outcome.
                2. One written lesson a month for a year.
                3. Feedback requested from two senior people on your memos.
                4. A short track record summary ready for your next review.

                ## Notes
                Keep the log free of confidential deal data. Record your judgement and outcome, not the client's numbers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal log of underwritings with monthly lessons for a year and a track record summary for review is complete."
                cadence: rolling
              tasks:
                - "Start a private log of deals underwritten with your view on each"
                - "Write one underwriting lesson from the month @recurring(monthly:15)"
                - "Ask two senior colleagues for written feedback on a recent memo"
                - "Draft a track record summary before your next review"
            - name: Moving from residential to commercial underwriting
              description: |-
                ## Purpose
                Residential and multifamily underwriters know cash flows but are often new to long leases, single tenants, service charges and covenant risk. A structured switch, covering the vocabulary, the lease, the tenant and the exit differences, lets an experienced residential investor underwrite commercial assets without learning the expensive way.

                ## Milestones
                1. A list of the key differences between residential and commercial cash flows.
                2. One commercial lease read end to end with its key terms summarised.
                3. One commercial deal underwritten and reviewed by a commercial specialist.
                4. Your residential assumptions that do not transfer written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One commercial deal has been underwritten and reviewed by a specialist, with a written list of residential habits that do not transfer."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List how residential and commercial cash flows differ"
                - "Read one commercial lease end to end and summarise it"
                - "Underwrite one commercial deal and ask a specialist to review it"
                - "Write the residential assumptions that do not carry over"
            - name: Underwriting case study for interviews
              description: |-
                ## Purpose
                Real estate investment interviews often include a timed case: a rent roll, some lease terms and an hour to price the asset and argue a view. Practising three timed cases with a clear structure, checking each against a model answer or a mentor, turns a stressful test into one you can plan for.

                ## Milestones
                1. A standard approach for a timed case, from rent roll to recommendation.
                2. Three timed cases completed against the clock.
                3. Each case reviewed by a mentor or against a model answer.
                4. A one-page recommendation template ready for the interview.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three timed underwriting cases are completed and reviewed, with a recommendation template ready before the interview date."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write a step-by-step approach for a one-hour case"
                - "Do three timed cases from practice material"
                - "Ask a mentor to mark one case"
                - "Prepare a one-page recommendation template"
            - name: Peer review circle for solo underwriters
              description: |-
                ## Purpose
                Founders and independent analysts underwriting alone have no second pair of eyes, which is when errors and optimism slip through. A small circle of two or three peers who swap one underwriting a month, under a confidentiality agreement and with deal data anonymised, provides the review a team would.

                ## Milestones
                1. Two or three peers agreed with a simple confidentiality understanding.
                2. A shared review list based on your second-person checks.
                3. One underwriting swapped and reviewed each month.
                4. A record of points raised and changes made.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A peer circle has swapped and reviewed at least one anonymised underwriting a month for six months."
                cadence: rolling
              tasks:
                - "Invite two peers who underwrite similar assets"
                - "Agree confidentiality and how deal data will be anonymised"
                - "Swap one anonymised underwriting for review @recurring(monthly:20)"
                - "Record the points each review raised"
            - name: Mentoring a junior analyst through underwriting
              description: |-
                ## Purpose
                Junior analysts learn underwriting by watching and redoing, but only if someone explains why each assumption was chosen. Taking one analyst through a full underwriting over a few months, with weekly sessions and a clear set of skills to cover, builds a team that can be trusted and sharpens your own reasoning.

                ## Milestones
                1. A list of underwriting skills the analyst should have by the end.
                2. A weekly session held and notes kept.
                3. The analyst completing one underwriting with your review.
                4. A short end-of-period assessment shared with the analyst.

                ## Notes
                Start from the **1:1** template for the weekly session notes.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Weekly sessions over three months are recorded and the analyst has completed one reviewed underwriting."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the skills the analyst should have in three months"
                - "Hold a weekly underwriting session with the analyst @recurring(weekly:wed)"
                - "Set the analyst one full underwriting to complete"
                - "Share a written assessment at the end of the period"
            - name: Single-let asset with a weak covenant
              description: |-
                ## Purpose
                A single-let building is only as safe as its one tenant, and when that tenant is weak the value rests on what happens if it leaves. Underwriting the vacant possession value, the cost and time to re-let or repurpose, and the dark case where the tenant fails in year two shows whether the price is paying for income or for the building.

                ## Milestones
                1. Vacant possession value estimated with evidence.
                2. Re-letting or alternative use costed with a timeline.
                3. A dark case where the tenant fails early, with returns.
                4. A view on whether the price is covered by the building alone.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dark case, vacant possession value and re-letting cost are recorded with a view on price cover by the building alone."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate vacant possession value from comparable sales"
                - "Cost the works and time to re-let or repurpose"
                - "Model the tenant failing in year two"
                - "Write whether the building alone covers the price"
            - name: Multi-let office with clustered expiries
              description: |-
                ## Purpose
                A multi-let office with a third of its income expiring in years two to four can look cheap on initial yield and expensive on everything else. Underwriting each expiry with its renewal odds, the refurbishment needed to compete and the cash drag of voids shows whether the discount is enough.

                ## Milestones
                1. Each tenant in the cluster assessed for renewal with a reason.
                2. Refurbishment cost for floors likely to fall vacant included.
                3. Peak void and income trough shown by year.
                4. Returns compared with a stabilised alternative.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A by-year income trough with refurbishment costs and returns against a stabilised alternative is in the deal file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Assess renewal odds for each tenant expiring in years two to four"
                - "Cost refurbishment for floors likely to fall vacant"
                - "Chart the income trough year by year"
                - "Compare returns with a stabilised alternative"
            - name: Turnover rent and retail tenant sales
              description: |-
                ## Purpose
                Retail leases with turnover rents, or tenants whose sales barely cover rent, need underwriting from the till upwards. Using tenant sales, occupancy cost ratios and footfall trends to test whether base rents are sustainable, and how much turnover top-up is realistic, avoids buying rent that the shops cannot afford.

                ## Milestones
                1. Tenant sales gathered where leases require reporting.
                2. Occupancy cost ratio worked out for each tenant.
                3. Tenants above a set ratio flagged as at risk.
                4. Turnover rent modelled on a realistic sales trend rather than the peak.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Occupancy cost ratios for each tenant, at-risk flags and a turnover rent forecast on a stated sales trend are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Request tenant sales figures from the data room"
                - "Work out the occupancy cost ratio for each tenant"
                - "Flag tenants above your at-risk ratio"
                - "Model turnover rent on a realistic sales trend"
            - name: Sale and leaseback underwriting
              description: |-
                ## Purpose
                In a sale and leaseback the seller becomes the tenant and sets both the price and the rent, so a high rent can inflate the price. Underwriting the rent against market evidence, the occupier's business, the building's alternative use and the lease terms protects against paying for a rent the market would never pay.

                ## Milestones
                1. Proposed rent compared with market rent evidence.
                2. The occupier's accounts and reliance on the site assessed.
                3. Value on market rent and on vacant possession worked out.
                4. Lease terms checked for rent review, repairs and alienation.

                ## Notes
                The legal and tax effects of a sale and leaseback for either party are matters for advisers on the deal.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Value on market rent and on vacant possession, an occupier assessment and lease term review are recorded with a bid view."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare the proposed rent with market rent evidence"
                - "Assess how essential the site is to the occupier's business"
                - "Value the asset on market rent and on vacant possession"
                - "Check the lease terms for reviews, repairs and assignment"
            - name: Probabilistic range for exit value
              description: |-
                ## Purpose
                Three cases show three points, but a committee deciding on a large asset may want to see how likely the downside really is. Running a simulation across exit yield, rent growth and voids, with ranges set from the evidence logs, gives a distribution of returns and the chance of missing the hurdle.

                ## Milestones
                1. Ranges and distributions chosen for exit yield, rent growth and void from evidence.
                2. Correlations between inputs set and explained.
                3. A distribution of IRR and the chance of missing the hurdle shown.
                4. The result compared with the three-case view and differences explained.

                ## Notes
                A simulation is only as good as its ranges. Present it alongside the cases, never instead of them.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A return distribution with the probability of missing the hurdle is shown beside the three cases for one deal."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Set ranges for exit yield, rent growth and void from the logs"
                - "Decide which inputs move together and how strongly"
                - "Run the simulation and chart the IRR distribution"
                - "Compare the result with the three-case view"
---

# Commercial Property Underwriting

Underwriting a commercial property means turning a rent roll, a stack of leases and a broker's story into a cash flow you would bet your own money or reputation on. This area is for analysts who underwrite office, retail and industrial assets for a living and for founders sizing up their first commercial purchases. It starts with a checklist, an assumption book, hurdles and the core analyses of covenant, expiry and market rent, then moves through the evidence logs that keep inputs fresh, the skills behind each assumption, the decisions about voids, capex, sensitivities and bid price, the dated moments of bids and committees, situations for different underwriters, and specialist cases such as weak single-let covenants, turnover rents and sale and leasebacks.

The rhythms are a weekly screening log and tenant news scan, monthly refreshes of letting evidence and debt terms, quarterly cap rate, cost and operating expense benchmarks, and a yearly lookback comparing closed deals with what the underwriting promised. The Metrics log template suits the evidence records, Risk register suits the downside work, Purchase decision suits choosing data subscriptions, Board meeting suits an investment committee and 1:1 suits mentoring a junior analyst. None of this is valuation, credit or investment advice: agree values with a registered valuer and legal, tax and lending positions with the right professionals. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
