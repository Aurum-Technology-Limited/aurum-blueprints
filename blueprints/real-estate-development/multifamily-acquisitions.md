---
id: real-estate-development.multifamily-acquisitions
name: Multifamily Acquisitions
description: "Buy apartment buildings with your eyes open: a clear buy box, a team and lender ready, rent rolls and expenses audited, every unit walked, debt arranged and a closing that hands over cleanly to a day one takeover plan."
category: business
version: 1.0.0
tags: [real-estate-development, multifamily-acquisitions, founder, small-business, apartments, rent-roll, due-diligence, takeover]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - purchase-decision
    - risk-register
    - operational-checklist
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Multifamily Acquisitions
          description: "Buying apartment buildings: sourcing deals, rent roll and expense audits, physical inspections, financing, and closing with a takeover plan."
          projects:
            - name: Multifamily buy box and target markets
              description: |-
                ## Purpose
                Brokers send their best apartment listings to buyers who can say exactly what they want and close on it. A written buy box fixes the unit count range, building age, price per door, submarkets and business plan you will pursue, so you stop spending evenings modelling deals you would never buy. Write it before you request another offering memorandum.

                ## Milestones
                1. Unit count range, purchase price range and building vintage written on one page.
                2. Two or three target submarkets named, each with the reason it fits.
                3. The business plan stated, such as stabilised hold, light refresh or heavy repositioning.
                4. Hard exclusions listed, for example flood zones, master-metered gas or student-heavy tenancy.
                5. The buy box tested against three listings you have already seen, with a yes or no for each.

                ## Notes
                A narrow buy box is easier to explain to brokers, lenders and partners. Widen it only after a first close.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page buy box naming unit range, price range, vintage, submarkets, business plan and exclusions, tested against three real listings."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the unit count and price range you could close on this year"
                - "Name the submarkets you know well enough to judge rents"
                - "List five features that would make you pass on any building"
                - "Run three recent listings through the buy box and record the verdicts"
            - name: Sponsor net worth and liquidity check for lenders
              description: |-
                ## Purpose
                Apartment lenders look at the borrower as hard as the building, and many expect the sponsor's net worth and post-closing cash to meet set multiples of the loan or its annual payments. Knowing your own figures now tells you what loan size you can carry alone and when you will need a partner or a guarantor. It also prevents the embarrassment of a term sheet withdrawn in week five.

                ## Milestones
                1. A personal financial statement listing assets, liabilities and liquid cash completed.
                2. A schedule of real estate owned prepared with values, debt and income for each property.
                3. Two lenders asked for their net worth, liquidity and experience tests for apartment loans.
                4. The largest loan you can support alone written down, with the gap a partner would need to fill.

                ## Notes
                Liquidity usually means cash or near-cash after closing, not equity in other property. Ask each lender how they count retirement accounts.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A current personal financial statement and real estate schedule, plus a written maximum loan size checked against two lenders' sponsor tests."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download a personal financial statement form from a lender's website"
                - "List every property you own with value, loan balance and net income"
                - "Ask two apartment lenders for their sponsor net worth and liquidity tests"
                - "Write the largest loan you can carry without a partner"
            - name: Acquisition team bench for apartment deals
              description: |-
                ## Purpose
                A signed contract starts a clock of 30 to 60 days, and that is no time to find a real estate attorney, an inspector who will walk 40 units or a lender who funds your size. Lining up the core team before any offer means you can sign with confidence and move on the first day of diligence. Each person on the bench should have closed apartment deals of your size in your market.

                ## Milestones
                1. A multifamily broker, real estate attorney, mortgage broker or direct lender, inspector and insurance broker named.
                2. Each candidate's recent apartment deals and typical fees recorded.
                3. Two property managers interviewed who could take over a building at closing.
                4. Contact details, fee terms and turnaround times kept in one shared list.

                ## Notes
                Start from the **Vendor** template, one record per firm. Ask every candidate for a reference from a buyer, not a seller.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Named, vetted contacts for broker, attorney, lender, inspector, insurer and two property managers, each with fees and recent deals recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two local apartment owners which attorney and inspector they use"
                - "Call three lenders and note the smallest apartment loan they make"
                - "Interview two property managers about taking over at closing"
                - "Record each firm's fees and recent deals in one list"
                - "Confirm the bench is still available before each new offer @recurring(yearly)"
            - name: Submarket study for two apartment neighbourhoods
              description: |-
                ## Purpose
                Location decides more than finishes: the same building can be a strong buy on one side of a highway and a struggle on the other. A short study of two target neighbourhoods, covering employers, new apartment supply, rents, vacancy, crime trends and transport, gives you a view you can defend to a lender and spot when a broker's market story does not match the street.

                ## Milestones
                1. Boundaries of each submarket drawn on a map with the main streets named.
                2. Major employers, new apartment completions and planned supply listed for each.
                3. Average asking rents by unit type and an estimated vacancy rate recorded.
                4. A drive or walk of each neighbourhood at night and at the weekend completed.
                5. A one-page view of each submarket's strengths and risks written.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page study for each of two submarkets covering employers, supply, rents, vacancy and an on-the-ground visit."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Draw the boundaries of two target submarkets on a map"
                - "List new apartment buildings completed or planned in each"
                - "Record asking rents for studios, one, two and three bedroom units"
                - "Walk both neighbourhoods on a weekday evening and a Saturday"
            - name: Rent comparables file by unit type
              description: |-
                ## Purpose
                Every apartment underwriting rests on what a unit will really let for, and offering memoranda often quote rents from the best building in the area. A comparables file of ten to fifteen buildings per submarket, with unit size, finish, utilities included and current asking rent, lets you price an offer from evidence rather than the seller's pro forma.

                ## Milestones
                1. Ten to fifteen comparable buildings per submarket listed with address, age and unit mix.
                2. Asking rent, square footage or floor area and included utilities recorded per unit type.
                3. Finish level noted for each comparable, such as original, refreshed or fully renovated.
                4. An average rent per unit type and per square foot calculated for each submarket.

                ## Notes
                Start from the **Metrics log** template. Call or visit as a prospective renter where that is lawful and honest about who you are; listing sites lag reality.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A comparables file of at least ten buildings per target submarket with rent, size, finish and utilities by unit type."
                cadence: rolling
              tasks:
                - "List ten apartment buildings similar to your buy box in one submarket"
                - "Record asking rent and size for each unit type they advertise"
                - "Note which utilities each building includes in the rent"
                - "Refresh asking rents for the comparables file @recurring(monthly:12)"
            - name: Apartment operating expense benchmarks
              description: |-
                ## Purpose
                Seller statements often leave out repairs, management or payroll, and a buyer without benchmarks has no way to see the gap. Building a sheet of typical annual costs per unit for buildings of your size and age, from industry surveys, lender underwriting minimums and owners you know, gives you a floor for every expense line before you see a T12.

                ## Milestones
                1. Annual cost per unit ranges recorded for taxes, insurance, utilities, repairs, turnover, payroll and management.
                2. Ranges split by building age and size where the sources allow.
                3. Lender minimums for management fees and replacement reserves noted.
                4. The benchmark sheet tested against two real buildings' statements.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A benchmark sheet of annual cost per unit for at least seven expense lines, split by building age, and tested against two real statements."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a published apartment operating expense survey for your country"
                - "Ask a lender for their minimum management and reserve assumptions"
                - "Build a cost per unit range for seven expense lines"
                - "Update the benchmark ranges from your latest deals @recurring(yearly)"
            - name: Landlord and tenant rules in your target markets
              description: |-
                ## Purpose
                Rent caps, notice periods, deposit handling, eviction timelines and habitability standards vary widely between cities, and they decide whether a business plan is lawful at all. A short brief prepared with a local attorney before your first offer stops you underwriting rent rises you cannot make or turnover you cannot achieve.

                ## Milestones
                1. Any rent control, rent stabilisation or rent increase limits in each target market identified.
                2. Notice periods for rent changes and lease ends recorded.
                3. Security deposit holding, interest and transfer rules on sale noted.
                4. Eviction process and typical timeline summarised.
                5. The brief reviewed by a local attorney with their comments added.

                ## Notes
                Rules change often and differ by city as well as state or country. Treat the brief as a list of questions for counsel, not a conclusion.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written landlord and tenant brief for each target market covering rent limits, notices, deposits and evictions, reviewed by a local attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the city housing department site for rent increase rules"
                - "Note the security deposit rules that apply when a building is sold"
                - "Summarise the eviction steps and typical timeline"
                - "Book an hour with a local attorney to review the brief"
            - name: Standard timeline from offer to closing
              description: |-
                ## Purpose
                Missed dates sink more apartment deals than bad numbers: a diligence period that ran out before the inspection report, or a loan commitment that came after the deposit went hard. A standard timeline, built once and adjusted per deal, shows who does what between letter of intent and closing and where each hard date falls.

                ## Milestones
                1. A timeline drawn from letter of intent to closing with typical durations for each step.
                2. Diligence, financing contingency and deposit hard dates marked.
                3. The order of inspections, appraisal, insurance quotes and estoppels set.
                4. Owners named for each step: you, attorney, lender, inspector or manager.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable offer-to-closing timeline showing every step, its owner, typical duration and the contract dates it must beat."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your attorney for the usual diligence and closing periods locally"
                - "Ask your lender how long their approval and appraisal usually take"
                - "Draw the timeline with every hard date marked"
                - "Name an owner for each step on the timeline"
            - name: Five-minute apartment deal screen
              description: |-
                ## Purpose
                Most listings should be rejected in minutes, and a buyer who models every one burns out before the right deal arrives. A one-page screen using price per unit, in-place income, rent gap to comparables, expense ratio and a rough debt check lets you reject quickly and spend real hours only on the few that pass.

                ## Milestones
                1. A screen of six to eight tests written, each with a pass or fail threshold.
                2. A simple sheet built that takes asking price, units, rents and expenses.
                3. The screen run on ten listings and the time per listing recorded.
                4. Thresholds adjusted after the first ten so the pass rate is useful.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written deal screen with thresholds and a sheet that scores a listing in under ten minutes, tested on ten listings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write six pass or fail tests drawn from your buy box"
                - "Build a one-tab sheet that scores asking price against the tests"
                - "Score ten current listings and time each one"
                - "Tighten or loosen thresholds after reviewing the ten results"
            - name: Weekly apartment deal screen
              description: |-
                ## Purpose
                Deal flow is a numbers game, and the buyers who close are the ones who look at listings every week rather than in bursts. A fixed weekly hour to run every new listing through the screen keeps the pipeline moving and gives brokers quick answers, which is how you get the next call.

                ## Milestones
                1. A fixed weekly slot for screening held for eight weeks in a row.
                2. Every new listing in the buy box screened and logged with a pass or reject.
                3. Brokers answered within two working days on every deal they sent.
                4. A count of deals screened, passed and offered kept each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weeks of screening logged, with every listing given a recorded verdict and every broker answered within two working days."
                cadence: rolling
              tasks:
                - "Block a weekly hour in your calendar for deal screening"
                - "Screen every new listing that fits the buy box @recurring(weekly:mon)"
                - "Reply to each broker with a yes, no or question"
                - "Log the week's counts of screened, passed and offered deals"
            - name: Multifamily broker coverage plan
              description: |-
                ## Purpose
                In most markets a handful of brokers sell most apartment buildings, and they call the buyers who have closed or bid credibly before. A coverage plan names those brokers, records what each has sold, and sets a steady rhythm of calls and coffee so you hear about deals before the marketing launch.

                ## Milestones
                1. The top five to eight apartment brokers in your submarkets identified from recent sales.
                2. Each broker met or called and given your one-page buy box.
                3. A record kept of every deal each broker sent and your response.
                4. A regular contact rhythm held with each broker for six months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five or more apartment brokers holding your buy box, each contacted at least monthly for six months with deals sent logged."
                cadence: rolling
              tasks:
                - "List the brokers behind the last ten apartment sales in your submarkets"
                - "Send each broker your one-page buy box and a short introduction"
                - "Call two brokers to ask what is coming to market @recurring(monthly:8)"
                - "Note every deal each broker sends and how you answered"
            - name: Monthly submarket rent and vacancy update
              description: |-
                ## Purpose
                Rents and concessions can shift in a single quarter when a large new building opens nearby, and an underwriting built on last year's numbers will overpay. A short monthly update of asking rents, concessions and vacancy in your submarkets keeps your offers grounded in the current market.

                ## Milestones
                1. A one-line monthly record of average asking rent per unit type per submarket.
                2. Concessions such as free weeks or waived fees noted when they appear.
                3. New supply openings and lease-up offers recorded.
                4. A six-month trend visible for each submarket.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly entries of rent, concessions and vacancy for each target submarket, with new supply noted."
                cadence: rolling
              tasks:
                - "Set up a monthly row per submarket for rent, vacancy and concessions"
                - "Record current asking rents and any concessions @recurring(monthly:14)"
                - "Note any new apartment building opening or leasing up nearby"
                - "Compare the six-month trend before each new offer"
            - name: Lender terms watch for apartment loans
              description: |-
                ## Purpose
                Pricing, maximum loan to value and coverage tests on apartment loans change with rates and lender appetite, and a bid built on last quarter's terms can be short of equity at closing. Asking two or three lenders for indicative terms each month keeps your underwriting realistic and your lender relationships warm.

                ## Milestones
                1. Two or three lenders agreed to give indicative terms monthly.
                2. Rate, loan to value, debt service coverage test, term and amortisation recorded each month.
                3. Fees, prepayment terms and recourse noted for each lender.
                4. A trend of terms over six months kept beside your deal screen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of indicative apartment loan terms from at least two lenders, recorded in one sheet with rate, proceeds tests and fees."
                cadence: rolling
              tasks:
                - "Ask two lenders if they will share indicative terms each month"
                - "Record rate, loan to value, coverage test and term @recurring(monthly:20)"
                - "Note prepayment terms and recourse for each lender"
                - "Update the debt assumptions in your deal screen from the latest terms"
            - name: Apartment deal pipeline tracker
              description: |-
                ## Purpose
                Buyers with several live deals lose track of which offers are out, which counters are pending and which brokers are waiting. A pipeline tracker with stages from screened to closed, plus a short weekly review, shows where deals stall and how many offers it really takes to win one.

                ## Milestones
                1. Stages defined: screened, underwritten, toured, offered, under contract, closed, lost.
                2. Every live deal recorded with its stage, next step and date.
                3. A weekly review held for eight weeks.
                4. Conversion rates between stages calculated after three months.

                ## Notes
                Start from the **Metrics log** template for the weekly counts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tracker with every live deal staged and dated, reviewed weekly for eight weeks, and stage conversion rates calculated."
                cadence: rolling
              tasks:
                - "Create the pipeline with seven stages from screened to lost"
                - "Enter every live deal with its next step and date"
                - "Review the pipeline and chase stalled deals @recurring(weekly:fri)"
                - "Calculate offers made per deal won after three months"
            - name: Lost apartment bid lessons log
              description: |-
                ## Purpose
                Most offers on apartment buildings lose, and each loss carries information about price, terms or credibility. Asking the broker why you lost and what the winning bid looked like, then reviewing the pattern each quarter, shows whether you are losing on price, deposit, timeline or track record.

                ## Milestones
                1. A short record kept for every lost bid: your price, the winning price if known and the reason given.
                2. The broker asked for feedback on every loss within a week.
                3. A quarterly review done of the pattern across lost bids.
                4. One change to your bidding approach made from each review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A log of every lost bid with the reason, reviewed each quarter with one recorded change to bidding approach per review."
                cadence: rolling
              tasks:
                - "Start a log with your price, the winning price and the reason given"
                - "Ask the broker for feedback within a week of each loss"
                - "Review the pattern across lost bids @recurring(quarterly)"
                - "Write down one change to try on the next offer"
            - name: Yearly apartment buy box review
              description: |-
                ## Purpose
                Markets, rates and your own capacity change, and a buy box written two years ago can quietly steer you to deals that no longer pencil. A yearly review against what you bid on, what you won and what the market now offers keeps your search aimed where you can actually close.

                ## Milestones
                1. A count of deals screened, offered, won and lost in the year gathered.
                2. Each buy box rule checked against those results.
                3. Changes to unit range, submarkets or business plan written down with reasons.
                4. The updated buy box sent to your brokers.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated yearly review of the buy box against the year's deal results, with changes recorded and the new version sent to brokers."
                cadence: cyclic
              tasks:
                - "Pull the year's counts from your pipeline tracker"
                - "Review each buy box rule against the year's results @recurring(yearly)"
                - "Write the changes and the reason for each"
                - "Send the updated buy box to every broker you work with"
            - name: Personal financial statement refresh for lenders
              description: |-
                ## Purpose
                Lenders ask for a recent personal financial statement and schedule of real estate owned with every loan request, and a stale one slows approval or raises questions. Refreshing both each quarter means a loan package can go out the day you sign a contract.

                ## Milestones
                1. The personal financial statement updated each quarter with current balances.
                2. The schedule of real estate owned updated with values, debt and income.
                3. Bank and brokerage statements saved in one folder for the latest quarter.
                4. A ready loan package folder kept with identity, entity and track record documents.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal financial statement and real estate schedule dated within the last quarter, saved with supporting statements in a ready loan package."
                cadence: cyclic
              tasks:
                - "Update balances on the personal financial statement @recurring(quarterly)"
                - "Update the schedule of real estate owned with current figures"
                - "Save the latest bank and brokerage statements in the loan folder"
                - "Check the loan package has entity documents and a track record page"
            - name: Closed deal check against underwriting
              description: |-
                ## Purpose
                Twelve months of ownership are the real test of an acquisition model, and buyers who never compare actuals with their underwriting repeat the same blind spots. A monthly check of income, occupancy and each expense line against the purchase model for the first twelve months shows which assumptions were wrong and feeds better offers next time.

                ## Milestones
                1. The acquisition underwriting saved as a fixed baseline at closing.
                2. Monthly actuals compared with the baseline for twelve months.
                3. Each variance over ten percent explained in a sentence.
                4. A list of assumptions to change in future underwriting written after month twelve.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Twelve monthly comparisons of actuals against the acquisition model, with variances over ten percent explained and a list of changed assumptions."
                cadence: rolling
              tasks:
                - "Save a locked copy of the underwriting on the closing date"
                - "Compare the month's actuals with the underwriting @recurring(monthly:25)"
                - "Explain every line that differs by more than ten percent"
                - "List the assumptions to change after the first twelve months"
            - name: Acquisition track record and deal book
              description: |-
                ## Purpose
                Brokers, lenders and partners judge an apartment buyer on what they have bought and how it performed. Keeping a deal book of every acquisition, with price, units, financing, business plan and results against underwriting, turns your history into the credibility that wins the next contested bid.

                ## Milestones
                1. A one-page summary written for every closed deal.
                2. Purchase price, units, debt, equity and current performance recorded for each.
                3. Lessons from each deal noted in two or three lines.
                4. A presentable deal book ready to send with any offer or loan request.
                5. The book updated after every closing and each year end.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A deal book with a one-page summary for every closed acquisition, updated within a month of each closing and at each year end."
                cadence: rolling
              tasks:
                - "Write a one-page summary of your most recent purchase"
                - "Record price, units, debt, equity and current performance"
                - "Add two lines of lessons to each deal page"
                - "Update every deal page with current results @recurring(yearly)"
            - name: Reading an apartment offering memorandum
              description: |-
                ## Purpose
                An offering memorandum is a sales document, and its pro forma usually shows the rents a buyer could get, not the rents the seller does get. Learning to read one critically, separating in-place figures from projections and spotting what is missing, saves hours on every deal and protects you from paying for the seller's business plan.

                ## Milestones
                1. Three apartment offering memoranda read and annotated.
                2. For each, in-place income separated from pro forma income in a simple table.
                3. Missing items listed, such as payroll, repairs, utility bills or concessions.
                4. A one-page checklist of questions to send brokers after reading any memorandum.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three annotated offering memoranda and a written checklist of questions to send brokers on any new deal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Request three apartment offering memoranda in your buy box"
                - "Mark every figure as in place or projected in each one"
                - "List what each memorandum leaves out"
                - "Write a broker question checklist from the gaps you found"
            - name: Reading a T12 and rent roll together
              description: |-
                ## Purpose
                The trailing twelve months statement and the rent roll tell two sides of the same story, and the gaps between them reveal concessions, bad debt, vacancy and loss to lease. Practising on real files until you can reconcile scheduled rent to collected rent is the core skill of apartment underwriting.

                ## Milestones
                1. Gross potential rent from a rent roll reconciled to rental income on the T12.
                2. Vacancy, concessions, bad debt and loss to lease identified as separate lines.
                3. The last three months annualised and compared with the full twelve.
                4. Two practice deals worked through with every gap explained in writing.

                ## Notes
                A strong last three months against a weak twelve can mean real improvement or a seller filling units with incentives before sale. Ask which.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two practice deals where the rent roll is reconciled to T12 income, with vacancy, concessions, bad debt and loss to lease each quantified."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get a T12 and rent roll for one deal from a broker"
                - "Calculate gross potential rent from the rent roll"
                - "Reconcile it line by line to collected rent on the T12"
                - "Compare the last three months annualised with the full year"
            - name: Apartment loan types compared
              description: |-
                ## Purpose
                Apartment buyers can choose between bank loans, government-backed agency programmes where they exist, life company money, bridge loans and seller financing, and each brings different proceeds, recourse, prepayment and timing. Learning the main options before you need one stops you choosing whatever the first lender offers.

                ## Milestones
                1. Five loan types summarised on rate basis, loan to value, coverage test, term, recourse and prepayment.
                2. Typical closing timelines and third-party reports for each recorded.
                3. The loan types that suit your buy box and business plan identified.
                4. Questions for lenders on each type written down.

                ## Notes
                In the United States, agency small balance programmes are an example; other countries have their own housing lenders. Ask a mortgage broker which apply to you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of five apartment loan types on proceeds, recourse, prepayment and timing, with the types that fit your buy box marked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the apartment loan types available in your country"
                - "Ask a mortgage broker to explain prepayment terms for each type"
                - "Build a one-page comparison table of five loan types"
                - "Mark the types that fit your buy box and business plan"
            - name: Property tax reassessment after purchase
              description: |-
                ## Purpose
                In many places the property tax bill resets to the sale price after a purchase, and a buyer who underwrites the seller's tax bill can lose most of the first year's cash flow. Learning how reassessment works where you buy, and how to estimate the post-sale bill, closes one of the most common gaps in apartment underwriting.

                ## Milestones
                1. The reassessment rules for each target market summarised from the assessor's office.
                2. The current tax rate or millage and assessment ratio recorded.
                3. A method written for estimating the post-sale tax bill on any deal.
                4. The method checked against one recent sale whose new bill is public.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written method for estimating post-purchase property tax in each target market, checked against one recent sale."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the assessor's guidance on reassessment after a sale"
                - "Record the current tax rate and assessment ratio"
                - "Find a recent apartment sale and compare its old and new tax bill"
                - "Write the estimate method into your deal screen"
            - name: Insurance quotes for older apartment buildings
              description: |-
                ## Purpose
                Insurance on older apartment buildings has risen sharply in many markets, and features such as old wiring, flat roofs, wood framing or coastal exposure can double a premium or make cover hard to find. Learning what insurers ask and getting indicative quotes on sample buildings stops a surprise premium wiping out the deal in week four.

                ## Milestones
                1. An insurance broker who places apartment cover asked what drives premiums locally.
                2. Indicative quotes obtained for two sample buildings in your buy box.
                3. Property, liability, loss of rent and flood or windstorm needs noted.
                4. A per-unit insurance assumption set for your deal screen.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Indicative insurance quotes for two sample buildings and a per-unit insurance assumption written into the deal screen."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask an insurance broker what most raises premiums on older apartments"
                - "Request indicative quotes on two buildings in your buy box"
                - "Note which building features each insurer asked about"
                - "Set a per-unit insurance figure in your deal screen"
            - name: Walking units like an experienced buyer
              description: |-
                ## Purpose
                Touring three show units tells you little about a 30-unit building. Learning to walk units quickly and consistently, checking kitchens, baths, windows, ceilings, signs of leaks, pests and unauthorised occupants, means you can inspect every unit in diligence and price the real condition.

                ## Milestones
                1. A one-page unit walk checklist written with condition grades.
                2. The checklist practised on at least ten units with an experienced owner or manager.
                3. Average time per unit brought under ten minutes.
                4. Photo naming rules set so every photo ties to a unit number.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written unit walk checklist with condition grades, practised on ten or more units at under ten minutes each."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draft a unit walk checklist with three condition grades"
                - "Ask a property manager if you can shadow a turnover inspection"
                - "Walk ten units with the checklist and time each one"
                - "Set a photo naming rule using the unit number"
            - name: Rent roll audit against leases and deposits
              description: |-
                ## Purpose
                A rent roll is the seller's summary, and it can include tenants who left, rents nobody pays or units let to staff for free. Auditing it against signed leases, the ledger and bank deposits during diligence confirms the income you are paying for. Do it on every deal, however small.

                ## Milestones
                1. Every lease or a lender-approved sample compared with the rent roll for name, rent, term and deposit.
                2. Rent roll totals tied to bank deposits for at least three months.
                3. Concessions, side agreements and staff units listed.
                4. Every discrepancy recorded with the unit number and the amount.
                5. A corrected in-place income figure agreed for the underwriting.

                ## Notes
                Start from the **Risk register** template to log discrepancies for the retrade conversation.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written rent roll audit tying leases and three months of deposits to the rent roll, listing every discrepancy and a corrected income figure."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Request leases, the tenant ledger and three months of bank statements"
                - "Compare each lease with its rent roll line"
                - "Tie rent roll totals to deposits for three months"
                - "Record every discrepancy with unit number and amount"
                - "Recalculate in-place income from the audited figures"
            - name: Seller operating statement audit
              description: |-
                ## Purpose
                Expenses on a seller's statement are often low because the owner does the repairs, pays staff in cash or runs the building on deferred maintenance. Auditing each line against invoices, utility bills, tax and insurance records, then resetting to what you will really pay, is what turns a seller's net income into a buyer's net income.

                ## Milestones
                1. Twelve months of utility bills, tax bills, insurance and major invoices received.
                2. Each expense line checked against source documents.
                3. Every line reset to your own expected cost, including management and reserves.
                4. A buyer's operating statement produced beside the seller's with differences explained.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buyer's operating statement beside the seller's, with every line checked against source documents and each difference explained."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Request twelve months of utility, tax and insurance bills"
                - "Check each T12 expense line against its source documents"
                - "Reset each line to your own expected cost"
                - "Write the buyer's net income beside the seller's"
            - name: Full unit walk during diligence
              description: |-
                ## Purpose
                Lenders and sellers may accept a sample, but the units you do not see are the ones with the collapsed ceiling or the extra occupants. Walking every unit with your checklist, a manager and a photographer gives you a unit-by-unit condition record that drives your renovation budget and any price conversation.

                ## Milestones
                1. Access to every unit agreed with the seller and notices served as the law requires.
                2. Every unit inspected and graded with photos tied to the unit number.
                3. Vacant, down and occupied units confirmed against the rent roll.
                4. A unit condition summary with estimated repair cost per unit written.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every unit inspected, graded and photographed, with a condition summary and repair estimate per unit matched to the rent roll."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the seller to serve entry notices for every unit"
                - "Bring your checklist, a manager and someone to take photos"
                - "Grade and photograph each unit against the rent roll"
                - "Total the estimated repair cost per unit"
            - name: Building systems inspection for apartments
              description: |-
                ## Purpose
                Roofs, boilers, water heaters, sewer lines and electrical panels are the expensive surprises in apartment buildings, and some older materials are uninsurable or need replacing soon after purchase. Commissioning specialist inspections during diligence gives you remaining life and replacement cost for each system before your deposit goes hard.

                ## Milestones
                1. A general property inspection and specialist roof, plumbing, electrical and heating checks booked.
                2. A sewer line camera survey completed where pipes are older or cast iron.
                3. Known problem materials checked, such as older wiring types, failing pipes or asbestos.
                4. Remaining life and replacement cost recorded for each major system.
                5. A capital list for the first three years written from the reports.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Specialist reports on roof, plumbing, sewer, electrical and heating, summarised in a three-year capital list with costs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Book a general inspector with apartment experience"
                - "Order a sewer camera survey for older buildings"
                - "Ask the insurance broker which materials insurers refuse locally"
                - "Write a three-year capital list from the reports"
            - name: Arrears and collections verification
              description: |-
                ## Purpose
                A building can show full occupancy and still collect far less than the rent roll, because arrears, payment plans and pending evictions do not appear on a summary. Checking the aged arrears report, payment plans and court filings tells you the real collection rate and whether you are inheriting problem tenancies.

                ## Milestones
                1. An aged arrears report obtained and tied to the tenant ledger.
                2. Payment plans and any rent assistance arrangements listed.
                3. Eviction cases in progress identified with their status.
                4. A realistic collection rate set for the underwriting.
                5. How arrears are treated at closing agreed with your attorney.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A collection rate set from the aged arrears report and ledger, with payment plans and pending evictions listed and closing treatment agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request the aged arrears report and payment plans"
                - "Tie arrears to the tenant ledger for each unit"
                - "Search court records for eviction cases at the address"
                - "Ask your attorney how arrears are split at closing"
            - name: Choosing the lender for an apartment purchase
              description: |-
                ## Purpose
                Term sheets that look similar can differ by tens of thousands in fees, reserves, prepayment and recourse, and the lowest rate is not always the cheapest loan. Comparing three term sheets on full cost, proceeds, timing and certainty of close before you sign the contract means your financing contingency is realistic.

                ## Milestones
                1. Three term sheets received on the same loan request.
                2. Each compared on rate, proceeds, fees, reserves, prepayment, recourse and closing time.
                3. Lender references checked with recent borrowers.
                4. A lender chosen with the reason recorded and an application signed.

                ## Notes
                Start from the **Purchase decision** template. Ask each lender which third-party reports they need and who orders them.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three apartment loan term sheets compared on full cost and certainty, with a chosen lender and the reason recorded before the contract is signed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Send the same loan request package to three lenders"
                - "Compare term sheets on fees, reserves, prepayment and recourse"
                - "Call one recent borrower of each lender"
                - "Record the chosen lender and why"
            - name: Apartment bid and letter of intent
              description: |-
                ## Purpose
                Brokers rank offers on price, deposit size, diligence length, financing certainty and the buyer's record, not price alone. A clear letter of intent built from your underwriting, with a walk-away price and terms you can actually meet, gives you a credible bid and a ceiling you will not cross in a bidding round.

                ## Milestones
                1. A walk-away price set from your underwriting before talking to the broker.
                2. Deposit, diligence period, financing period and closing date chosen.
                3. Key conditions listed, such as access to all units and delivery of documents.
                4. The letter of intent reviewed by your attorney and sent.
                5. A record kept of the offer and any counter.

                ## Notes
                Agree with yourself in writing how far you will move on price and terms. Bidding rounds reward discipline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A letter of intent sent with price, deposit, diligence, financing and closing terms, plus a written walk-away price set beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your walk-away price before calling the broker"
                - "Choose deposit, diligence days and closing date you can meet"
                - "Have your attorney review the letter of intent"
                - "Log the offer and any counter in the pipeline tracker"
            - name: Retrade or walk away after diligence
              description: |-
                ## Purpose
                Diligence often finds problems: lower income, higher costs or repairs the price did not reflect. Deciding calmly whether to ask for a price cut or credit, accept the deal as it is or walk away, with evidence and before the deposit goes hard, protects both your money and your reputation with brokers.

                ## Milestones
                1. Every diligence finding listed with its cost or income effect.
                2. The underwriting rerun with the audited figures.
                3. A decision recorded: proceed, ask for a price cut or credit, or terminate.
                4. Any retrade request sent with evidence before the hard date.

                ## Notes
                Start from the **Risk register** template. Retrade only on real findings; brokers remember buyers who cut price by habit.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to proceed, retrade or terminate, backed by a costed list of diligence findings and made before the deposit hard date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every diligence finding with its cost or income effect"
                - "Rerun the underwriting with the audited numbers"
                - "Decide to proceed, retrade or terminate and write the reason"
                - "Send any request with evidence before the hard date"
            - name: Self-manage or hire a property manager
              description: |-
                ## Purpose
                Self-managing a first small building saves the fee but costs evenings, and a poor manager can undo a good purchase within months. Deciding before closing, on the building's size, your time and distance, and the managers available, sets your expense line and the takeover plan.

                ## Milestones
                1. Hours per month needed to manage the building estimated.
                2. Two or three managers' fees, services and reporting compared.
                3. References from owners of similar buildings checked.
                4. A decision recorded and, if hiring, a management agreement reviewed by your attorney.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded management decision for the building, with any chosen manager's fees, references and reviewed agreement on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate the monthly hours this building would take to manage"
                - "Compare fees and reporting from three managers"
                - "Call two owners each manager works for"
                - "Record the decision and the reason"
            - name: Purchase agreement negotiation for an apartment building
              description: |-
                ## Purpose
                The purchase and sale agreement fixes the deposit, the hard dates, the seller's document deliveries and what happens to deposits, arrears and service contracts at closing. Working through it with your attorney, clause by clause, before signing is how you make sure the diligence you planned can actually happen.

                ## Milestones
                1. Deposit amount, release conditions and hard dates agreed.
                2. A list of seller deliveries with dates attached to the agreement.
                3. Treatment of security deposits, prepaid rent, arrears and service contracts agreed.
                4. Access rights for unit walks and inspections written in.
                5. The agreement signed and every date entered on your timeline.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed purchase agreement with deposit terms, seller deliveries, closing treatments and access rights, and every date on the deal timeline."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your attorney for the issues list on the draft agreement"
                - "Attach a dated list of documents the seller must deliver"
                - "Agree how deposits, arrears and contracts transfer at closing"
                - "Enter every contract date on the deal timeline"
            - name: Lender site visit and appraisal day
              description: |-
                ## Purpose
                Lender inspections and the appraiser's visit can change your loan amount, and a poorly prepared building shows its worst side. Preparing access, a rent roll, a list of recent work and a tidy site for the day gives the appraiser accurate information and avoids a short valuation from missing facts.

                ## Milestones
                1. Visit dates agreed with the lender, seller and manager.
                2. Access arranged to vacant units and a sample of occupied ones.
                3. A pack prepared with rent roll, recent capital work and comparables.
                4. The appraisal received and its value and assumptions checked against your underwriting.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The lender and appraiser visits completed with a prepared pack, and the appraisal value checked against your underwriting in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm visit dates with the lender, seller and manager"
                - "Prepare a pack with rent roll, recent work and comparables"
                - "Arrange access to vacant and sample occupied units"
                - "Check the appraisal's rent and expense assumptions against yours"
            - name: Apartment closing and funds flow
              description: |-
                ## Purpose
                Closing day brings together the loan, your equity, prorations, deposits and dozens of signatures, and a missing wire or wrong proration can delay it. Reviewing the closing statement line by line, confirming wiring instructions by phone and having insurance and the manager ready means you own the building and can run it from the first minute.

                ## Milestones
                1. The draft closing statement reviewed line by line with your attorney.
                2. Prorations for rent, taxes, utilities and deposits checked against the rent roll.
                3. Insurance bound and the certificate sent to the lender.
                4. Wiring instructions confirmed by phone with a known contact before sending.
                5. Keys, codes, leases and records handed over at closing.

                ## Notes
                Wire fraud targets property closings. Never act on emailed changes to wiring instructions without a phone call to a number you already hold.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The purchase closed with a checked closing statement, bound insurance, phone-verified wires and keys, leases and records received."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Review the draft closing statement with your attorney"
                - "Check rent and deposit prorations against the rent roll"
                - "Bind insurance and send the certificate to the lender"
                - "Confirm wiring instructions by phone before sending funds @priority(high)"
            - name: Day one takeover plan for an apartment building
              description: |-
                ## Purpose
                Residents, staff and vendors all need to know on day one who owns the building, where to pay rent and who to call. A takeover plan written during diligence, covering notices, rent payment, utilities, service contracts, keys, software and emergency contacts, means the first week after closing is calm rather than chaotic.

                ## Milestones
                1. Resident notices drafted with new payment details and contacts.
                2. Utilities, service contracts and insurance transfers listed with owners and dates.
                3. Keys, access codes, software and records transfer agreed with the seller.
                4. An emergency contact and maintenance route live from closing day.
                5. The plan walked through with the manager a week before closing.

                ## Notes
                Start from the **Operational checklist** template and reuse it on every deal.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written takeover checklist covering residents, utilities, contracts, keys, software and emergencies, reviewed with the manager before closing."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the resident notice with new payment and contact details"
                - "List every utility and contract to transfer with a date"
                - "Agree the handover of keys, codes and records with the seller"
                - "Walk the plan through with the manager before closing"
            - name: First 90 days after an apartment takeover
              description: |-
                ## Purpose
                The first three months decide whether the purchase starts on plan: residents test the new owner, deferred repairs surface and rent collection moves to new systems. A 90-day plan with weekly check-ins sets the tone with residents, catches problems early and confirms the underwriting's first assumptions.

                ## Milestones
                1. Every resident's lease, deposit and contact details confirmed in the new system.
                2. Urgent safety and life-safety repairs completed in the first 30 days.
                3. Rent collection rate reported each week for twelve weeks.
                4. Vendor contracts kept, renegotiated or ended with reasons recorded.
                5. A 90-day review written against the acquisition plan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A 90-day review comparing collections, repairs and contracts with the acquisition plan, after twelve weeks of weekly check-ins."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Confirm every lease and deposit in the new management system"
                - "Fix urgent safety repairs within the first 30 days"
                - "Review collections and open work orders with the manager @recurring(weekly:wed)"
                - "Write the 90-day review against the acquisition plan"
            - name: Security deposit and prepaid rent reconciliation
              description: |-
                ## Purpose
                Security deposits are tenants' money, and many jurisdictions make the buyer liable for them whether or not the seller handed them over. Reconciling every deposit and prepaid rent amount at closing, and moving the money to the right account, protects you from claims when residents move out years later.

                ## Milestones
                1. A deposit schedule received listing each unit's deposit and prepaid rent.
                2. The schedule checked against leases and tenant estoppel or acknowledgement forms.
                3. The credit on the closing statement matched to the schedule total.
                4. Deposits held as local rules require and residents notified where required.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A unit-by-unit deposit and prepaid rent schedule reconciled to leases and the closing credit, with funds held as local rules require."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request a unit-by-unit deposit and prepaid rent schedule"
                - "Check each deposit against the lease and estoppel form"
                - "Match the schedule total to the closing statement credit"
                - "Ask your attorney how deposits must be held and notified"
            - name: Tenant estoppels and lease file review
              description: |-
                ## Purpose
                Missing pages or unsigned renewals in a lease file leave you unable to enforce terms, and a resident who says they paid a larger deposit or have a rent agreement with the old owner becomes your problem. Collecting signed tenant estoppels or acknowledgements and reviewing every lease file confirms what each resident has agreed and paid.

                ## Milestones
                1. Estoppel or acknowledgement forms sent to every resident through the seller.
                2. Returned forms compared with the rent roll and leases.
                3. Missing, unsigned or expired leases listed.
                4. A plan agreed for any unit with conflicting terms.

                ## Notes
                Whether estoppels are customary for residential tenancies varies by market. Your attorney will say what is usual and enforceable.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Returned estoppels or acknowledgements reconciled to leases and the rent roll, with a list of missing or conflicting files and a plan for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your attorney for a resident estoppel form suited to your market"
                - "Have the seller send forms to every resident"
                - "Compare returned forms with leases and the rent roll"
                - "List missing or conflicting lease files with a plan for each"
            - name: First small apartment building alongside a day job
              description: |-
                ## Purpose
                Many founders and business owners buy a first building of five to twenty units while still working full time, with evenings and weekends as their only hours. A plan that fits the search, diligence and takeover into that time, with the right help bought in, makes a first purchase possible without risking the job or the deal.

                ## Milestones
                1. Weekly hours available for the search written down and protected.
                2. Tasks that need daytime presence, such as inspections and lender calls, identified.
                3. Paid help chosen for the parts you cannot cover, such as a manager or inspector.
                4. A first offer made within the time box you set.
                5. A first building closed or a written decision to pause the search.

                ## Notes
                Use leave days for the unit walk and closing. Those are the two days you should be there in person.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A first apartment building of five to twenty units closed within a year, or a written decision to pause, with weekly search hours logged."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Write the weekly hours you can give the search"
                - "List diligence tasks that need daytime presence"
                - "Book leave days for the unit walk and closing"
                - "Review weekly search hours against the plan @recurring(weekly:sun)"
            - name: Buying apartments in a market you do not live in
              description: |-
                ## Purpose
                Buyers priced out of their home market often buy hours or even a country away, where they cannot drive past the building or meet the manager for coffee. Buying long distance works when you build local eyes first, visit at the right moments and verify everything on paper that you would normally check in person.

                ## Milestones
                1. A local broker, manager and inspector chosen before any offer.
                2. At least two trips planned: one to tour submarkets and one for the unit walk.
                3. A video tour standard agreed with the broker for first looks.
                4. A reporting routine agreed with the manager before closing.
                5. A quarterly visit routine set for the first year of ownership.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A local broker, manager and inspector in place, two pre-closing trips completed and a quarterly visit routine set for the first year."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Choose a local broker, manager and inspector before offering"
                - "Plan a submarket tour trip and a unit walk trip"
                - "Agree a video tour standard with the broker"
                - "Visit each building in person @recurring(quarterly)"
            - name: Moving up from small buildings to 50 units or more
              description: |-
                ## Purpose
                Larger apartment buildings bring on-site staff, institutional lenders, third-party reports and buyers' competition from funds, and the habits that worked on a ten-unit block will not carry over. Planning the step up, in team, capital, systems and track record, makes a first larger acquisition credible to brokers and lenders.

                ## Milestones
                1. The track record from smaller deals written up as a one-page summary.
                2. The capital and partners needed for a 50 to 150 unit deal estimated.
                3. A manager with on-site staff experience at that size shortlisted.
                4. Lenders who fund that size met and their requirements recorded.
                5. A first larger deal offered on within the target time.
              priority: medium
              deadlineOffsetDays: 540
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A track record summary, capital plan, shortlisted manager and lender requirements in place, and an offer made on a building of 50 or more units."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Write a one-page summary of every deal you have closed"
                - "Estimate the equity a 100-unit deal in your market needs"
                - "Meet two lenders who fund buildings of that size"
                - "Shortlist managers who run on-site staff at that scale"
            - name: Buying from a long-time self-managing owner
              description: |-
                ## Purpose
                Owners who have run a building for decades often keep records in notebooks, charge below-market rents to long-standing residents and know things no document shows. These deals can be good value, but diligence takes patience, the seller needs respect, and the takeover has to handle residents who have only ever known one landlord.

                ## Milestones
                1. The seller met in person and their concerns about the sale understood.
                2. Income and expenses rebuilt from bank statements where records are thin.
                3. Long-standing residents and informal arrangements listed.
                4. A resident communication plan written for the change of owner.
                5. Any rent changes planned within the law and the lease terms.

                ## Notes
                Older owners may care about who buys as much as price. A steady, honest buyer can win without being the highest bid.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Income and expenses rebuilt from bank records, informal arrangements listed and a resident communication plan written before closing."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Meet the seller and ask what matters to them in a buyer"
                - "Rebuild income and expenses from twelve months of bank statements"
                - "List every informal arrangement with residents or staff"
                - "Write a short letter introducing yourself to residents"
            - name: Business owner buying a first apartment building
              description: |-
                ## Purpose
                Owners of operating businesses often have the income and discipline to buy apartments but little time and a balance sheet tied up in the company. Planning how the purchase fits beside the business, in cash, time, lender view of business income and who runs the building, avoids starving one to feed the other.

                ## Milestones
                1. Cash available for equity and reserves confirmed without touching business working capital.
                2. Lenders asked how they treat business income and company guarantees.
                3. Ownership and entity choices discussed with your accountant and attorney.
                4. A management route chosen that fits the time the business leaves.
                5. A first deal's equity and reserves set aside in a separate account.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Equity and reserves set aside separately from business working capital, entity and lender questions answered by professionals and a management route chosen."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Work out how much cash the business can spare without strain"
                - "Ask a lender how they treat your business income"
                - "Book your accountant to discuss ownership and entity options"
                - "Open a separate account for equity and reserves"
            - name: Apartment block purchase in the Caribbean
              description: |-
                ## Purpose
                Buying a block of flats in a Caribbean city brings its own checks: title and survey practice, strata or condominium rules, foreign buyer licences where they apply, local lending terms and hurricane insurance. A purchase plan built with a local attorney and surveyor protects buyers at home and in the diaspora from relying on assumptions from other markets.

                ## Milestones
                1. A local attorney and land surveyor appointed for the island concerned.
                2. Title, survey and any strata or condominium records checked.
                3. Foreign buyer licence or exchange control needs identified with counsel.
                4. Local bank lending terms and hurricane insurance quotes obtained.
                5. A resident and rent collection plan set for the local market.

                ## Notes
                Rules differ between, for example, Trinidad and Tobago, Jamaica, Barbados and the OECS islands. Confirm each requirement with counsel in that jurisdiction.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Title, survey, licence, lending and insurance checks completed with a local attorney and a written decision to proceed or not."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Appoint a local attorney who handles residential block purchases"
                - "Order a title search and boundary survey"
                - "Ask counsel whether a foreign buyer licence applies"
                - "Get a hurricane insurance quote for the building"
            - name: Portfolio purchase of several apartment buildings
              description: |-
                ## Purpose
                Sellers sometimes offer several buildings together, and the price per door can look attractive while hiding one or two weak assets. Underwriting each building on its own, then the portfolio as a whole, shows whether the package is worth more or less than its parts and where to push on price or exclusions.

                ## Milestones
                1. Each building underwritten separately with its own rent roll and expense audit.
                2. The weakest assets identified and priced on their own.
                3. Portfolio financing options compared with building-by-building loans.
                4. A diligence plan scaled to cover every building within the contract period.
                5. A bid or decision to exclude assets recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each building in the portfolio underwritten separately, weakest assets priced, and a bid or exclusion decision recorded."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Underwrite each building on its own before the portfolio"
                - "Rank the buildings from strongest to weakest"
                - "Ask lenders about portfolio loans against separate loans"
                - "Scale the diligence plan to fit the contract period"
            - name: Assuming the seller's apartment loan
              description: |-
                ## Purpose
                When the seller's loan carries a lower rate than today's market, assuming it can make a deal work, but the lender's approval process is slow, paper-heavy and not guaranteed. Knowing the steps, the fees and the timeline before you offer lets you bid with confidence and write the right contingencies.

                ## Milestones
                1. The loan documents reviewed for assumption rights, fees and conditions.
                2. The servicer's assumption package and timeline obtained.
                3. The equity needed to bridge the price over the loan balance calculated.
                4. Your application submitted with the purchase timeline matched to the servicer's.
                5. Assumption approval received or a fallback financing route ready.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An assumption approval received, or a fallback loan in place, with fees, equity gap and servicer timeline recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the seller for the note and mortgage to check assumption terms"
                - "Request the servicer's assumption package and timeline"
                - "Calculate the equity gap above the loan balance"
                - "Line up a fallback lender in case approval is refused"
            - name: Rent-regulated apartment building acquisitions
              description: |-
                ## Purpose
                Buildings under rent regulation or stabilisation can trade at low prices per unit, but legal rents, registration histories and limits on increases decide what income is possible. Specialist diligence with an attorney who knows the regime separates real value from a building whose rents can never cover its costs.

                ## Milestones
                1. The regulatory regime and its current rules summarised with counsel.
                2. Legal registered rents checked against the rent roll for every regulated unit.
                3. Any overcharge claims, complaints or pending cases identified.
                4. Underwriting rebuilt on legally permitted increases only.
                5. A decision recorded with the attorney's views attached.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every regulated unit's legal rent checked against the rent roll, claims listed and a decision recorded using only permitted increases."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Appoint an attorney who works with the local rent regulation regime"
                - "Obtain rent registration histories for each regulated unit"
                - "Search for overcharge claims and complaints against the building"
                - "Rerun the underwriting on permitted increases only"
---

# Multifamily Acquisitions

Buying an apartment building is a run of checks under time pressure: the numbers in the offering memorandum, the leases behind the rent roll, the condition behind the photos and the debt behind the price. This area is for founders and small business owners buying their own apartment buildings, from a first twelve-unit block to a portfolio of several hundred doors. It starts with foundations such as the buy box, your lender profile, the acquisition team and the local landlord rules, moves through the operating machinery of deal screening and market tracking, then covers the skills of reading a T12 and a rent roll, the diligence decisions from audits to retrades, the dated moments of contract, appraisal, closing and takeover, situations for different kinds of buyer and the specialist work of portfolio deals, loan assumptions and regulated buildings.

The rhythms are a weekly deal screen and pipeline review, monthly updates of rents, vacancy and lender terms, monthly checks of a closed deal against its underwriting, quarterly updates of your personal financial statement and lost deal lessons, and a yearly review of the buy box. Vendor suits the acquisition team, Metrics log suits the pipeline and rent comparables, Purchase decision suits choosing a lender, Risk register suits diligence findings and Operational checklist suits the takeover. None of this is legal, tax, lending or investment advice: agree contracts, structures and loan terms with your attorney, accountant and lender. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
