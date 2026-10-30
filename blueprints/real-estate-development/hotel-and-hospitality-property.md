---
id: real-estate-development.hotel-and-hospitality-property
name: Hotel and Hospitality Property
description: "Hotel ownership run as a business: a clear buy box, the RevPAR and P&L literacy owners need, the right operator, brand and lease terms, monthly owner oversight, FF&E reserves and the refurbishment cycles that keep a hotel saleable."
category: business
version: 1.0.0
tags: [real-estate-development, hotel-and-hospitality-property, founder, small-business, hotels, revpar, management-contracts, hotel-capex]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - vendor
    - risk-register
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Real Estate Investing & Development
      emoji: "🏢"
      description: "Property as a business: development appraisals, land, planning and construction finance, delivering schemes, syndications, commercial and multifamily acquisitions, short-let portfolios and property management companies, REIT analysis, and land development in the Caribbean, for sponsors, developers and operators rather than single-unit landlords."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hotel and Hospitality Property
          description: "Investing in or developing hotels: operator and brand agreements, RevPAR and ADR, management contracts versus leases and capex cycles."
          projects:
            - name: Hotel investment thesis and buy box
              description: |-
                ## Purpose
                Hotels range from a 20-room independent inn to a 400-key full-service convention property, and an owner who has not picked a lane spends months on brochures that never fit. Writing down the segment, location type, key count, price band and ownership model you will pursue gives brokers a reason to call you first. Do it before the first site visit so every later deal has something to be tested against.

                ## Milestones
                1. The segment, key count range and price band you will pursue written in one paragraph.
                2. Three to five target markets named, each with the demand generators that fill rooms there.
                3. The ownership models you will accept, and the ones you will not, stated with a reason.
                4. The buy box reviewed by one experienced hotel broker or owner and revised.

                ## Notes
                A buy box that rejects most deals is working. Select-service hotels and full-service hotels with large food and beverage operations are different businesses, so start with one.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page buy box naming segment, key count range, target markets, price band and accepted ownership models, reviewed by one industry contact."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write one paragraph on the hotel size and price band you can realistically buy"
                - "List three to five markets and the demand generators behind each one"
                - "State which of lease, management contract, franchise and owner-operation you will accept"
                - "Send the draft to one hotel broker and ask what they would change"
            - name: Hotel segments and chain scales primer
              description: |-
                ## Purpose
                Brokers, lenders and operators describe hotels by chain scale, service level and location type, and the labels carry assumptions about room rates, staffing and capex. Learning the vocabulary lets you read an offering memorandum quickly and spot when a hotel is priced as one thing but run as another. A short primer in your own words becomes the reference you keep coming back to.

                ## Milestones
                1. The chain scales from economy to luxury described in your notes, each with a typical rate band and service level.
                2. Select-service, focused-service, full-service, resort, lifestyle and extended-stay defined with one real example each.
                3. The location types (urban, airport, highway, resort, suburban) linked to their usual demand mix.
                4. The two segments that fit your buy box marked, with reasons.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written primer covering chain scales, service levels and location types with a real example hotel for each and two segments chosen to focus on."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read one recent hotel market outlook from a hospitality consultancy"
                - "Write a short note on each chain scale and service level"
                - "Find one real hotel near you for each segment and save its rate range"
                - "Mark the two segments that fit your buy box and say why"
            - name: RevPAR, ADR and occupancy fundamentals
              description: |-
                ## Purpose
                Every hotel conversation runs on three numbers: occupancy, average daily rate and revenue per available room, plus the index figures that compare them with competitors. Owners who confuse a rate gain with a share gain, or who miss that RevPAR ignores food, beverage and costs, make poor calls on operators and pricing. Working through real figures once makes the monthly report readable for good.

                ## Milestones
                1. Occupancy, ADR and RevPAR calculated by hand for one sample month of a real or published hotel.
                2. The occupancy, rate and RevPAR index explained in a sentence each, with what a score above 100 means.
                3. TRevPAR and GOPPAR added to your notes, with why they matter when a hotel has large outlets.
                4. Three questions written that you will ask an operator whose RevPAR index is falling.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A worked example calculating occupancy, ADR, RevPAR and the three index figures, plus TRevPAR and GOPPAR, saved in your notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a published monthly hotel performance summary for your target market"
                - "Calculate occupancy, ADR and RevPAR for one sample month by hand"
                - "Write down what each index figure means when it sits above or below 100"
                - "Draft three questions to put to an operator whose index is slipping"
            - name: Local hotel market and competitive set baseline
              description: |-
                ## Purpose
                A hotel's numbers mean little until they sit beside the five to eight hotels a guest would realistically choose instead. Building a baseline of supply, pipeline, rates and demand drivers in your target market tells you whether a deal's projected rate is plausible and whether new rooms are about to arrive. Benchmarking data providers sell competitive set reports, but a careful desk study comes first.

                ## Milestones
                1. A list of every hotel in the target market with keys, chain scale, brand and opening year.
                2. A proposed competitive set of five to eight hotels with the reason each belongs.
                3. Published rates sampled for weekdays, weekends and peak dates across the set.
                4. New hotels under construction or with planning consent listed with their key counts.
                5. Demand generators (offices, airports, attractions, event venues) mapped with their seasons.

                ## Notes
                Start from the **Metrics log** template. The pipeline of new supply is the number buyers most often miss, so check the local planning register as well as press reports.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A market file listing existing supply, a reasoned competitive set, sampled rates and a pipeline of new rooms for one target market."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List every hotel in the target market with keys and brand"
                - "Choose five to eight hotels a guest would compare and note why"
                - "Sample published rates for a Tuesday, a Saturday and one peak date"
                - "Search the planning register for consented or proposed hotels"
                - "Map the main demand generators and the months they are busy"
            - name: Reading a hotel P&L laid out under USALI
              description: |-
                ## Purpose
                Most hotel accounts follow the Uniform System of Accounts for the Lodging Industry, which splits revenue and costs by department before reaching gross operating profit, fees, fixed charges and the FF&E reserve. Owners who can read that layout spot where profit leaks, whether in rooms labour, food cost or undistributed costs such as sales and maintenance. One careful walk through a real statement is enough to make every later report faster to read.

                ## Milestones
                1. The departmental, undistributed, management fee, non-operating and reserve lines identified on a sample P&L.
                2. Departmental profit margins worked out for rooms and food and beverage.
                3. Gross operating profit, EBITDA and net operating income after reserve reconciled on one page.
                4. Five ratios you will watch every month chosen and written down.

                ## Notes
                Ask your accountant which edition of USALI your operator reports under, since line placement changed between editions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One sample hotel P&L annotated line by line, with GOP, EBITDA and NOI after reserve reconciled and five monthly ratios chosen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get one sample USALI hotel P&L from a broker pack or an operator"
                - "Label each line as departmental, undistributed, fee, fixed charge or reserve"
                - "Reconcile GOP down to NOI after reserve on one page"
                - "Choose the five ratios you will check every month"
            - name: Hotel specialist adviser panel
              description: |-
                ## Purpose
                Hotel deals need advisers who have read management agreements and franchise contracts before: a hotel consultant for market studies, a hospitality lawyer, a valuer with hotel experience, a surveyor who understands plant and fire safety, and an accountant familiar with operating businesses. Lining them up before an offer goes in avoids paying generalists to learn on your deal. Fee quotes agreed in advance also make the diligence budget honest.

                ## Milestones
                1. A named contact for each of five adviser roles, each with hotel references.
                2. Indicative fees for a typical acquisition diligence recorded for each adviser.
                3. Conflicts checked so no adviser also acts for a likely operator or brand.
                4. The panel list saved with contact details and the deals each has worked on.

                ## Notes
                Start from the **Vendor** template, one record per adviser.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A panel of five hotel-experienced advisers with references, indicative fees and conflict checks recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two hotel owners which consultant and lawyer they would use again"
                - "Request indicative diligence fees from each shortlisted adviser"
                - "Ask each adviser whether they act for any brands or operators"
                - "Save the panel with contacts, fees and recent hotel deals"
                - "Review the panel and drop anyone who missed a deadline @recurring(yearly)"
            - name: Choosing between lease, management contract and franchise
              description: |-
                ## Purpose
                The ownership model decides who carries the operating risk, who employs the staff and how much of the profit you keep. A lease gives a fixed or turnover rent, a management contract hands operations to an operator for fees while you take the results, a franchise lends a brand while you or a third party run it, and owner-operation keeps everything in your hands. Choosing deliberately, before talking to brands, stops the first term sheet from choosing for you.

                ## Milestones
                1. Each of the four models described with who bears the operating risk and who employs the staff.
                2. Typical fee and rent structures for each model noted from at least two sources.
                3. A simple comparison of your expected income under each model for one sample hotel.
                4. A recorded decision on the model you will pursue first, agreed with your hospitality lawyer and accountant.

                ## Notes
                Hybrid structures exist, such as a franchise with a third-party operator, or a lease with a turnover top-up. Ask your lawyer about employment liabilities, which differ sharply between models.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of lease, management contract, franchise and owner-operation for a sample hotel, with the chosen model and reasons recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write who bears risk and employs staff under each of the four models"
                - "Collect typical fee and rent terms from two industry sources"
                - "Model your income under each structure for one sample hotel"
                - "Discuss the comparison with your hospitality lawyer and accountant"
                - "Record the model you will pursue first and why"
            - name: Hotel deal pipeline and broker relationships
              description: |-
                ## Purpose
                Good hotel deals often trade quietly through specialist brokers, lenders working out problem loans, and owners who are tired or retiring. A pipeline that records every hotel seen, its price per key and why it was passed builds market knowledge and keeps you front of mind with the people who bring deals. A weekly half hour on it beats a frantic search when capital is ready.

                ## Milestones
                1. A pipeline sheet with columns for hotel, keys, brand, asking price, price per key, stage and reason passed.
                2. Five hotel brokers and two hotel lenders contacted with your buy box.
                3. At least fifteen hotels logged and screened against the buy box.
                4. A short note sent to each broker after every pass explaining why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A live pipeline of at least fifteen screened hotels with stage and pass reasons, and seven broker or lender contacts holding your buy box."
                cadence: rolling
              tasks:
                - "Set up the pipeline sheet with price per key and pass reason columns"
                - "Send your buy box to five hotel brokers and two hotel lenders"
                - "Log and screen every new hotel you see that week @recurring(weekly:fri)"
                - "Reply to each broker within two days of passing on a deal"
            - name: Monthly hotel performance review against budget
              description: |-
                ## Purpose
                Operators send a monthly pack with the P&L, key statistics and a commentary, and an owner who only skims it learns of problems a quarter late. A fixed monthly review against budget and last year, with written questions back to the general manager, turns the pack into oversight. It is the single habit that most separates engaged owners from passive ones.

                ## Milestones
                1. A one-page review format covering occupancy, ADR, RevPAR, GOP margin, labour cost and the reserve.
                2. Twelve consecutive monthly reviews completed against budget and prior year.
                3. Written questions sent to the operator within five working days of each pack.
                4. Every variance over your agreed threshold explained in writing by the operator.

                ## Notes
                Start from the **Metrics log** template. Agree a variance threshold, for example a percentage of budgeted GOP, so you do not chase noise.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly reviews on file, each comparing actuals with budget and last year and each with the operator's written answers."
                cadence: rolling
              tasks:
                - "Draft the one-page review format with your five key ratios"
                - "Agree with the operator the day each month the pack will arrive"
                - "Review the monthly pack against budget and last year @recurring(monthly:12)"
                - "Send written questions on any variance above your threshold"
            - name: Weekly competitive set index review
              description: |-
                ## Purpose
                Monthly results arrive too late to change pricing for next month's events, while the weekly competitive set report shows straight away whether the hotel is winning or losing share. Reading the occupancy, rate and RevPAR indices each week, and asking why a dip happened, keeps revenue management honest. Fifteen minutes is enough once the format is settled.

                ## Milestones
                1. Access to the weekly competitive set report agreed with the operator.
                2. A short weekly log recording the three indices and one line of commentary.
                3. Any week with a RevPAR index drop beyond your threshold followed up with the revenue manager.
                4. A quarterly check that the competitive set still reflects the real competitors.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly log of occupancy, ADR and RevPAR indices for at least thirteen consecutive weeks, with follow-up recorded for every flagged week."
                cadence: rolling
              tasks:
                - "Ask the operator to copy you on the weekly competitive set report"
                - "Set a RevPAR index drop that will trigger a question"
                - "Log the three indices and one comment line @recurring(weekly:tue)"
                - "Check each quarter whether the competitive set needs changing"
            - name: Quarterly owner meeting with the operator
              description: |-
                ## Purpose
                Monthly emails cover the numbers, but strategy, capex, staffing and brand issues need a structured meeting with the general manager and the operator's regional team. A quarterly owner meeting with a written agenda, minutes and an action list creates the record you will need if performance tests or disputes ever arise. Owners who skip it often discover that decisions were taken on their behalf.

                ## Milestones
                1. A standing agenda covering results, forecast, sales, capex, people, guest scores and compliance.
                2. Four quarterly meetings held in a year with minutes circulated within a week.
                3. An action list carried forward and closed or explained at each meeting.
                4. The operator's reforecast for the year reviewed at each meeting.

                ## Notes
                Start from the **Meeting notes** template. Hold at least one meeting a year at the hotel and walk the property before sitting down.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four owner meetings held in twelve months, each with an agenda, circulated minutes and an action list carried forward."
                cadence: cyclic
              tasks:
                - "Write the standing agenda and send it to the general manager"
                - "Hold the owner meeting and circulate minutes within a week @recurring(quarterly)"
                - "Walk the bedrooms, back of house and plant before the annual on-site meeting"
                - "Chase every open action two weeks before the next meeting"
            - name: Annual hotel budget approval cycle
              description: |-
                ## Purpose
                Most management agreements give the owner a right to review and approve the annual operating budget and capital plan, often within a set number of days of receiving it. Owners who wave it through lose their best lever over costs, rates and staffing for a full year. Running a planned cycle, from assumptions to challenge sessions to approval, makes the budget a real commitment.

                ## Milestones
                1. The budget submission and approval dates in your agreement written into your calendar.
                2. Your own top-down view of rate, occupancy and GOP margin prepared before the draft arrives.
                3. A challenge session held on every line that moves more than your threshold.
                4. The operating budget and capital plan approved in writing, with agreed changes recorded.

                ## Notes
                Check whether silence counts as approval under your agreement. Some agreements deem the budget approved if the owner does not respond in time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An approved annual operating budget and capital plan, with the owner's challenges and the agreed changes recorded in writing before the deadline in the agreement."
                cadence: cyclic
              tasks:
                - "Find the budget submission and approval clauses in your agreement"
                - "Prepare your own rate, occupancy and margin view before the draft arrives @recurring(yearly)"
                - "Book a challenge session with the general manager and finance lead"
                - "Approve the budget in writing with the agreed changes listed"
            - name: FF&E reserve account monitoring
              description: |-
                ## Purpose
                Hotel agreements and lenders usually require a reserve for furniture, fixtures and equipment, set aside each month as a percentage of total revenue, and it quietly funds the next soft refurbishment. When contributions are skipped or spent on routine repairs, the owner faces a large cash call just as the brand demands an upgrade. A monthly check of balances, contributions and spending keeps the reserve doing its job.

                ## Milestones
                1. The reserve percentage and permitted uses in your agreement and loan documents written down.
                2. A running schedule of monthly contributions, spending and balance.
                3. Every reserve spend matched to an approved capital item.
                4. A five-year view of reserve balance against the planned refurbishment cycle.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reserve schedule reconciled monthly to bank statements, with every spend tied to an approved item and a five-year balance projection."
                cadence: rolling
              tasks:
                - "Note the reserve percentage and allowed uses from the agreement and loan"
                - "Set up the reserve schedule with contributions, spending and balance"
                - "Reconcile the reserve to the bank statement @recurring(monthly:20)"
                - "Project the reserve balance against the next soft refurbishment"
            - name: Operator performance test monitoring
              description: |-
                ## Purpose
                Many management agreements let the owner terminate if the operator fails a performance test, typically a RevPAR index threshold and a share of budgeted GOP over two consecutive years, often with a cure right for the operator. The test only helps if you track it as you go and keep the evidence. A quarterly check means you know a year early whether the clause is in play.

                ## Milestones
                1. The exact performance test wording, measurement period and cure rights summarised on one page.
                2. A tracker showing year-to-date results against each limb of the test.
                3. Any exclusions the operator could claim, such as force majeure or owner-caused disruption, logged as they arise.
                4. A legal view taken before the first test year closes if results are near the line.

                ## Notes
                Performance tests are drafted very differently from one agreement to the next. Have your hospitality lawyer confirm how yours is measured before relying on it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly tracker of each performance test limb against the agreement's wording, with exclusions logged and legal input recorded when results near the threshold."
                cadence: rolling
              tasks:
                - "Summarise the performance test clause and cure rights on one page"
                - "Build a tracker for each limb of the test"
                - "Update the tracker and note any claimed exclusions @recurring(quarterly)"
                - "Book a call with your lawyer if any limb is near the threshold"
            - name: Brand standards audit follow-up
              description: |-
                ## Purpose
                Branded hotels are inspected against brand standards, and repeated failures can lead to default notices, fees or loss of the flag. Owners who see the audit report only after the operator has filed it lose time to fix the items that cost money. Getting every audit report, sorting failures into operational and capital items and tracking them to closure protects the brand relationship and the exit value.

                ## Milestones
                1. The latest brand audit report and score obtained, with the pass threshold noted.
                2. Each failed item labelled as an operational fix or a capital item.
                3. Capital items costed and added to the capital plan with dates.
                4. A quarterly self-inspection by the general manager against the same standards.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every brand audit failure logged, labelled operational or capital, costed where capital, and closed or scheduled before the next audit."
                cadence: cyclic
              tasks:
                - "Ask the operator for the last two brand audit reports"
                - "Sort each failed item into operational or capital"
                - "Review closure of audit items before the next inspection @recurring(yearly)"
                - "Ask the general manager for a self-inspection score @recurring(quarterly)"
            - name: Hotel licences and fire safety compliance calendar
              description: |-
                ## Purpose
                Few buildings carry as many licences and statutory checks than most buildings: fire risk assessments, alarm and sprinkler servicing, lifts, gas, legionella control, food hygiene, alcohol and music licences, and pool safety where there is one. A lapse can close outlets or invalidate insurance, and the owner usually carries the legal exposure even when an operator runs the hotel. One calendar with every certificate and its expiry date makes the gaps visible.

                ## Milestones
                1. A register of every licence, certificate and statutory inspection with its expiry date and responsible person.
                2. Copies of every current certificate held by the owner, not only the operator.
                3. A current fire risk assessment with its actions tracked to completion.
                4. No item allowed to lapse over a twelve-month period.

                ## Notes
                Start from the **Operational checklist** template. Requirements differ by country and local authority, so confirm the list with your surveyor and the local fire authority.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete compliance register with current certificates on file and no licence or inspection lapsed over twelve months."
                cadence: rolling
              tasks:
                - "Ask the operator for a list of every licence and certificate with expiry dates"
                - "Build the compliance register with a named owner for each item"
                - "Check the register for anything due in the next sixty days @recurring(monthly:5)"
                - "Review the fire risk assessment actions with the general manager @recurring(yearly)"
            - name: Hotel labour cost and productivity watch
              description: |-
                ## Purpose
                Labour is usually the largest single cost in a hotel, and it creeps up through overtime, agency staff and rotas that do not flex with occupancy. Tracking labour cost as a share of revenue and hours per occupied room, by department, shows whether staffing follows demand. Raising it early with the operator is far easier than cutting deep after a bad year.

                ## Milestones
                1. Labour cost percentage and hours per occupied room agreed as the two measures to track.
                2. A baseline for each department from the last twelve months.
                3. Agency and overtime spend shown separately in the monthly view.
                4. Any department above baseline for two months discussed with the general manager.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly labour view by department showing cost percentage, hours per occupied room, agency and overtime, against a twelve-month baseline."
                cadence: rolling
              tasks:
                - "Ask the operator for twelve months of payroll and hours by department"
                - "Work out the baseline cost percentage and hours per occupied room"
                - "Compare this month's labour figures with the baseline @recurring(monthly:16)"
                - "Raise any department over baseline for two months with the general manager"
            - name: Hotel insurance programme renewal
              description: |-
                ## Purpose
                Insurance for a hotel spans property, business interruption, public and employer's liability, and often terrorism, flood or windstorm cover, and the split between owner and operator policies is easy to get wrong. Business interruption limits set too low are a common gap after a fire or forced closure. A yearly renewal with a specialist broker, checked against the agreement's insurance clause, keeps cover matched to the hotel's real income.

                ## Milestones
                1. The insurance obligations of owner and operator summarised from the agreement and loan.
                2. A current reinstatement cost valuation for the building.
                3. Business interruption cover sized against current GOP and a realistic rebuild period.
                4. The renewed schedule checked by your broker and lawyer against the agreement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A renewed insurance programme with reinstatement value and business interruption cover sized to current figures and checked against the agreement and loan."
                cadence: cyclic
              tasks:
                - "Summarise who insures what under the agreement and the loan"
                - "Commission or update the reinstatement cost valuation"
                - "Start the renewal with a hospitality insurance broker @recurring(yearly)"
                - "Check business interruption limits against current GOP"
            - name: Distribution cost and channel mix review
              description: |-
                ## Purpose
                Online travel agency commissions, brand reservation fees, loyalty charges and payment costs can absorb a large slice of room revenue without ever appearing as one line. Reviewing where bookings come from and what each channel really costs shows whether direct booking, corporate accounts or groups deserve more effort. The operator owns the tactics, but the owner should see the cost of acquisition each quarter.

                ## Milestones
                1. Room nights and revenue split by channel for the last twelve months.
                2. The full cost of each channel worked out, including commissions and brand fees.
                3. Net ADR after distribution cost calculated by channel.
                4. One agreed action with the operator to shift mix toward lower-cost channels.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly channel report showing room nights, gross and net ADR by channel, with one mix action agreed with the operator."
                cadence: rolling
              tasks:
                - "Ask the revenue manager for room nights and revenue by channel"
                - "Add commissions, brand fees and payment costs to each channel"
                - "Review net ADR by channel with the operator @recurring(quarterly)"
                - "Agree one action to grow a lower-cost channel"
            - name: Hotel valuation on income and per-key bases
              description: |-
                ## Purpose
                Valuers treat a hotel as an operating business: they cap stabilised net operating income after reserve, run ten-year discounted cash flows, and check the answer against price per key from recent sales. Knowing how each method works, and which inputs move it most, lets you test an asking price before paying for a valuation. It also explains why a weak operator or a pending refurbishment can cut value sharply.

                ## Milestones
                1. Income capitalisation, discounted cash flow and price per key methods explained in your own notes.
                2. A sample hotel valued by all three methods with the results compared.
                3. The two or three inputs that move value most identified by sensitivity.
                4. A list of recent hotel sales in your market with price per key gathered.

                ## Notes
                This is for testing prices, not for replacing a formal valuation. Lenders will require a hotel-experienced valuer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One sample hotel valued by income capitalisation, discounted cash flow and price per key, with a written sensitivity on the main inputs."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read one published hotel valuation guide or valuer's methodology note"
                - "Value a sample hotel by capitalising NOI after reserve"
                - "Run a simple ten-year cash flow for the same hotel"
                - "Compare both results with recent price per key sales"
            - name: Management agreement key terms explained
              description: |-
                ## Purpose
                Management agreements for hotels can run for decades and decide fees, owner approvals, termination, sale rights and who employs staff. Owners often sign on the strength of a brand without understanding base fees, incentive fees, owner priority returns, key money clawback and restrictions on selling. Learning the main clauses before a negotiation starts means your lawyer can spend time on the deal rather than teaching you the basics.

                ## Milestones
                1. Term, renewal, base fee, incentive fee and owner priority return explained in your notes.
                2. Owner approval rights over budgets, the general manager and capital spending listed.
                3. Termination rights, performance tests, sale clauses and non-disturbance terms summarised.
                4. A list of ten questions for your lawyer on a real or sample agreement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary of the main management agreement clauses with ten specific questions prepared for a hospitality lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get a sample or redacted hotel management agreement from your lawyer"
                - "Summarise the fee, term and approval clauses in your own words"
                - "Note how termination and sale of the hotel are handled"
                - "Write ten questions to take to your hospitality lawyer"
            - name: Franchise agreement terms and fees explained
              description: |-
                ## Purpose
                Franchising gives you a brand's name, booking engine and loyalty programme while you or a third-party operator run the hotel, but the fees go well beyond the royalty. Application fees, reservation and marketing charges, loyalty costs, technology fees and the property improvement plan all add up, and liquidated damages apply if you leave early. Understanding the full cost lets you compare brands on what they really take.

                ## Milestones
                1. Every fee in a sample franchise agreement listed with how it is calculated.
                2. Total brand cost as a share of rooms revenue worked out for one sample hotel.
                3. Area of protection, term, exit rights and liquidated damages summarised.
                4. The brand's right to impose new standards and upgrade requirements noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written breakdown of every franchise fee with total brand cost as a share of rooms revenue for a sample hotel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request a franchise disclosure document or sample agreement from one brand"
                - "List every fee with its basis of calculation"
                - "Work out total brand cost as a share of rooms revenue"
                - "Summarise the exit terms and liquidated damages"
            - name: Hotel lease structures and rent models
              description: |-
                ## Purpose
                Some owners prefer to lease the hotel to an operator and collect rent, trading upside for a steadier income. Hotel leases come as fixed rent, turnover rent, hybrids with a base and a top-up, and leases with guarantees or caps, and each shifts risk differently. Knowing how they behave in a weak year, and how they affect value and debt, helps you judge whether a lease offer is generous or just looks it.

                ## Milestones
                1. Fixed, turnover, hybrid and guaranteed lease structures described with an example rent for each.
                2. Rent cover worked out for a sample lease in a strong year and a weak year.
                3. Repair, FF&E and capital obligations under each structure compared.
                4. The tenant covenant checks you would require written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison of four hotel lease structures with rent cover calculated in a strong and a weak year for one sample hotel."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect two examples of hotel lease terms from broker packs or press"
                - "Describe how rent is set under each of the four structures"
                - "Calculate rent cover in a strong year and a weak year"
                - "List the covenant checks you would want on any hotel tenant"
            - name: Revenue management basics for owners
              description: |-
                ## Purpose
                Revenue managers set prices by forecasting demand, segmenting guests and deciding when to close discounts or require minimum stays, and their choices drive most of the RevPAR gap between similar hotels. Owners do not need to run the system, but they should understand pickup, pace, displacement and length-of-stay controls well enough to ask good questions. A monthly look at forward bookings makes that conversation concrete.

                ## Milestones
                1. Segmentation, pickup, pace, displacement and stay controls explained in your notes.
                2. A meeting held with the revenue manager to see how the hotel's system sets rates.
                3. A forward bookings report for the next ninety days reviewed with the operator.
                4. Three questions on group displacement or discounting agreed for the next owner meeting.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes on core revenue management concepts, one session with the revenue manager and a monthly forward bookings review in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read one revenue management introduction written for hotel owners"
                - "Book an hour with the revenue manager to see the pricing system"
                - "Review the ninety-day forward bookings report @recurring(monthly:24)"
                - "Prepare three questions on group displacement for the owner meeting"
            - name: Ten-year hotel operating pro forma
              description: |-
                ## Purpose
                Any hotel model starts from rooms, occupancy and rate, adds food, beverage and other income, then deducts departmental and undistributed costs, fees, fixed charges and the reserve before debt and exit. Building one yourself, rather than trusting the broker's version, shows which assumptions carry the deal. It also gives you a template to test every future hotel in the pipeline.

                ## Milestones
                1. A ten-year pro forma with occupancy, ADR, departmental revenue and USALI cost lines.
                2. Management or franchise fees, FF&E reserve and fixed charges modelled from the agreement terms.
                3. Debt service, exit value and equity returns calculated.
                4. Downside cases for rate, occupancy and labour run and saved alongside the base case.

                ## Notes
                Ramp-up years after an opening or refurbishment often run well below stabilised levels; model them separately rather than averaging them away.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A working ten-year hotel pro forma with USALI cost lines, fees, reserve, debt and exit, plus at least three downside cases."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Sketch the model's input sheet for rooms, occupancy and rate"
                - "Build departmental revenue and USALI cost lines for ten years"
                - "Add fees, reserve, fixed charges, debt service and exit"
                - "Run downside cases for rate, occupancy and labour"
            - name: Food and beverage economics in hotels
              description: |-
                ## Purpose
                Restaurants, bars, banqueting and room service can bring guests and groups, but they often earn thin departmental margins and carry heavy labour. Owners buying full-service hotels need to know which outlets earn their space and which exist only because the brand or the market expects them. Understanding covers, average spend, food cost and banquet contribution turns a vague worry into a set of numbers.

                ## Milestones
                1. Covers, average spend, food and beverage cost and departmental margin explained in your notes.
                2. Each outlet in a sample hotel ranked by departmental profit per square metre.
                3. Banqueting and meetings contribution separated from restaurant results.
                4. A short list of options for weak outlets, such as reconcepting, reducing hours or leasing out.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A ranking of a sample hotel's outlets by departmental profit and space, with banqueting separated and options listed for the weakest outlet."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the operator for twelve months of results by outlet"
                - "Work out departmental profit per square metre for each outlet"
                - "Separate banqueting and meetings from restaurant figures"
                - "List options for the weakest outlet"
            - name: Third-party operator selection
              description: |-
                ## Purpose
                Choosing an operator for a hotel is a long marriage, and the cheapest fee proposal is rarely the best choice. A structured process sends the same brief to several operators, compares their pro formas, fees, approval rights and termination terms on one sheet, and tests their track record with owners they already work for. Done well, it gives you negotiating power before the agreement is drafted.

                ## Milestones
                1. A brief describing the hotel, your goals and the terms you want, sent to four to six operators.
                2. Proposals compared on fees, pro forma, key terms and the proposed general manager.
                3. Reference calls held with at least two current owners for each finalist.
                4. A preferred operator chosen and heads of terms agreed with your lawyer.

                ## Notes
                Start from the **Vendor** template. Ask each finalist for the names of owners who have terminated them, not only the ones who stayed.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Proposals from at least four operators compared on one sheet, owner references taken on finalists and heads of terms agreed with the chosen operator."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the agent to draft an operator brief from your buy box and hotel facts"
                - "Send the brief to four to six operators with a reply date"
                - "Compare proposals on fees, pro forma and termination terms"
                - "Call two current owners for each finalist"
                - "Agree heads of terms with the preferred operator"
            - name: Brand selection and brand fit study
              description: |-
                ## Purpose
                Flags can lift rate and occupancy through its loyalty programme and booking channels, but it also brings fees, standards and a property improvement plan. The right flag depends on your market's guests, the competitive set's brands, the hotel's physical layout and how long you plan to hold. Comparing two or three brands on net contribution, not on headline promises, avoids paying for a name the market does not value.

                ## Milestones
                1. Two or three candidate brands chosen that fit the hotel's segment and market.
                2. Each brand's projected RevPAR premium compared with its total fee load.
                3. The likely property improvement plan scope and cost estimated for each.
                4. A recorded decision, including whether staying independent beats every brand option.

                ## Notes
                Start from the **Purchase decision** template. Check the area of protection each brand offers so a sister hotel cannot open next door.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of two or three brands and the independent option on net contribution, PIP cost and fit, with the decision recorded."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Shortlist two or three brands that fit the segment and market"
                - "Ask each brand for projected performance and total fees"
                - "Estimate each brand's likely improvement plan cost"
                - "Compare every option with staying independent and record the choice"
            - name: Key money and owner protections negotiation
              description: |-
                ## Purpose
                Operators and brands sometimes offer key money, fee holidays or performance guarantees to win a hotel, and these sweeteners usually come with clawbacks and longer terms. Owners who negotiate them alongside termination on sale, performance tests, budget approvals and caps on fees end up with a far more flexible agreement. Planning the trade-offs before the first draft arrives keeps the important protections from being swapped for a one-off payment.

                ## Milestones
                1. A ranked list of the owner protections that matter most for your hold strategy.
                2. The financial value of any key money, guarantee or fee holiday set against the extra term and clawback.
                3. A negotiation plan agreed with your lawyer showing what you will trade and what you will not.
                4. The final terms recorded with the reasons for each concession.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A negotiation plan ranking owner protections and valuing sweeteners, with the final agreed terms and concessions recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Rank the owner protections you care about for your hold period"
                - "Value any key money or guarantee against its clawback and extra term"
                - "Agree what you will and will not trade with your lawyer"
                - "Record the final terms and the reasons for each concession"
            - name: Property improvement plan scoping and costing
              description: |-
                ## Purpose
                Buying a branded hotel, changing brands or renewing a franchise usually triggers a property improvement plan listing the upgrades the brand requires, often by a set date. PIPs can run from new carpets to replacing bathrooms, lifts and building systems, and an underestimated one can wipe out the return on a deal. Scoping and costing it independently before you commit is the cheapest protection you have.

                ## Milestones
                1. The brand's draft PIP obtained and every item listed with its deadline.
                2. Each item costed by a hotel cost consultant or contractor, with a contingency.
                3. Items the brand may waive or defer identified and negotiated.
                4. The agreed PIP, budget and completion dates reflected in the pro forma and financing.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A costed PIP with deadlines and contingency, negotiated items recorded and the final budget carried into the pro forma and loan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Request the draft property improvement plan from the brand"
                - "Ask a hotel cost consultant to price each item"
                - "Mark items to negotiate, defer or waive with the brand"
                - "Update the pro forma and loan request with the agreed PIP budget"
            - name: Soft refurbishment versus full renovation decision
              description: |-
                ## Purpose
                Every hotel moves through a capex cycle: soft goods such as carpets, curtains and bedding every few years, case goods and bathrooms less often, and building systems over decades. When a refurbishment falls due, the choice between a light refresh and a full repositioning depends on the rate the market will pay afterwards and how long you plan to hold. A side-by-side comparison of cost, closure time and rate uplift turns a design wish list into a return decision.

                ## Milestones
                1. The age and condition of soft goods, case goods, bathrooms and systems recorded.
                2. Two or three options scoped with cost, rooms out of order and programme.
                3. The expected rate and occupancy effect of each option tested against the competitive set.
                4. A recorded decision showing payback and the effect on exit value.

                ## Notes
                Start from the **Purchase decision** template. Rooms taken out of inventory during works cost revenue too, so include displacement in each option.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two refurbishment options with cost, displacement, rate uplift and payback, and the chosen option recorded."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "List the age and condition of rooms, bathrooms and building systems"
                - "Scope a light refresh and a full renovation with costs and programme"
                - "Estimate the rate each option could achieve against the competitive set"
                - "Record the chosen option with its payback and displacement cost"
            - name: Rebranding or going independent
              description: |-
                ## Purpose
                When a franchise or management agreement nears expiry, or a brand demands an expensive upgrade, the owner faces a choice: renew, switch flags or run independently with a soft brand or a direct booking strategy. Each route has different fees, exit costs, guest acquisition costs and effects on financing. Studying the options a year or more before the deadline keeps you from renewing simply because time ran out.

                ## Milestones
                1. The expiry date, renewal terms and any liquidated damages in the current agreement confirmed.
                2. Renew, change brand, join a soft brand and go independent each modelled for net income.
                3. The lender's consent requirements for a brand change checked.
                4. A decision recorded at least twelve months before the agreement expires.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four brand options modelled on net income with lender consent checked and a decision recorded twelve months before expiry."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm the expiry date and exit costs in the current agreement"
                - "Model net income for renew, switch, soft brand and independent"
                - "Ask the lender what consent a brand change needs"
                - "Record the decision and the date notice must be given"
            - name: Adding keys within the existing building
              description: |-
                ## Purpose
                Underused meeting rooms, offices, staff areas or oversized suites can sometimes become extra bedrooms, and each new key spreads fixed costs further. Before spending, check planning, fire escape, plumbing and the brand's room size standards, and test whether the market will fill the extra rooms at a sensible rate. A small feasibility study answers whether the conversion pays back.

                ## Milestones
                1. Candidate spaces listed with floor areas and current use.
                2. Planning, fire, services and brand standards constraints checked for each.
                3. Cost per new key estimated and compared with the value of a key in your market.
                4. A go or no-go decision recorded for each space.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility note for each candidate space with constraints, cost per new key and a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Walk the hotel and list spaces that could become bedrooms"
                - "Ask your architect to check planning, fire and services for each"
                - "Estimate cost per new key against local price per key"
                - "Record a go or no-go for each space"
            - name: Hotel energy and water efficiency plan
              description: |-
                ## Purpose
                Running around the clock, with laundry, kitchens, pools and air conditioning, a hotel faces energy and water bills that rise with every tariff change. Metering by area, then fixing the biggest loads first through controls, heat recovery, low-flow fittings and plant upgrades, cuts costs and helps with corporate buyers who ask about sustainability. Owners should hold the plan because the payback often runs beyond an operator's budget year.

                ## Milestones
                1. Twelve months of energy and water use per occupied room recorded as a baseline.
                2. The five largest loads identified, with sub-meters where needed.
                3. A ranked list of measures with cost, saving and payback.
                4. The first two measures installed and their savings checked against the baseline.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A baseline of energy and water per occupied room, a ranked list of measures with payback and two measures installed with savings measured."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Gather twelve months of energy and water bills from the operator"
                - "Work out energy and water per occupied room"
                - "Commission an energy audit of the five largest loads"
                - "Record meter readings against the baseline @recurring(monthly:27)"
            - name: Leasing a hotel restaurant or spa to an outside operator
              description: |-
                ## Purpose
                When a hotel restaurant, bar or spa loses money under the main operator, leasing it to a specialist tenant can turn a departmental loss into rent and bring a stronger local draw. The deal has to protect room service, breakfast, guest access and brand standards, and the management agreement may need operator consent. A clear brief and lease terms make the trade-off visible before the outlet changes hands.

                ## Milestones
                1. The outlet's last two years of departmental results and the cost of closing it understood.
                2. Guest service requirements such as breakfast, room service and opening hours written into a brief.
                3. Operator and brand consent requirements confirmed.
                4. Heads of terms agreed with a tenant, or a recorded decision to keep the outlet in house.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A brief, consent check and either heads of terms with an outside tenant or a recorded decision to keep the outlet, based on two years of results."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Pull two years of departmental results for the outlet"
                - "Write the guest service requirements a tenant must meet"
                - "Check what the management agreement and brand say about leasing outlets"
                - "Approach two local operators with the brief"
            - name: First hotel acquisition bid and diligence
              description: |-
                ## Purpose
                Buying a hotel means buying a building, a business, a workforce and a set of agreements at once, and diligence has to cover all four. Beyond title and condition, buyers check trading records, the competitive set, staff contracts, licences, the brand's PIP and whether the existing operator or brand agreement survives a sale. A dated plan from offer to completion keeps the advisers working to one timetable.

                ## Milestones
                1. An offer submitted with price, deposit, diligence period and conditions agreed with your lawyer.
                2. Financial, commercial, legal, building and employment diligence reports received.
                3. Issues recorded with their cost and either priced in, resolved or accepted.
                4. Financing approved and the transaction completed or withdrawn by a recorded decision.

                ## Notes
                Start from the **Risk register** template. Ask early whether existing agreements can be terminated on sale, because an encumbered hotel can be worth much less than an unencumbered one.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Diligence reports received across finance, trading, legal, building and employment, every issue priced or resolved, and the deal completed or withdrawn by a recorded decision."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Agree the offer terms and diligence period with your lawyer"
                - "Request three years of P&Ls, competitive set reports and staff lists"
                - "Instruct building, legal and trading diligence from your adviser panel"
                - "Record every issue with its cost in the risk register"
                - "Take the final go or withdraw decision with your advisers"
            - name: Hotel takeover and operator transition
              description: |-
                ## Purpose
                The day ownership or operator changes, guests are still checking in, staff need to be paid and every system has to keep running. Transitions fail on small things: booking engine access, payment accounts, licences in the old operator's name, forward deposits and guest data. A day-by-day plan agreed with the outgoing and incoming parties keeps the hotel trading through the handover.

                ## Milestones
                1. A transition checklist covering staff, systems, bookings, deposits, licences and supplier contracts.
                2. Employee transfer obligations confirmed with your employment lawyer.
                3. Forward bookings, deposits and guest data handed over in line with data protection rules.
                4. The hotel trading for thirty days after the handover with all open items closed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed transition checklist with staff, systems, bookings, licences and contracts transferred and no open items thirty days after handover."
                cadence: one-shot
                effort_hours_estimate: "25"
              tasks:
                - "Draft the transition checklist with the incoming operator"
                - "Confirm staff transfer obligations with your employment lawyer"
                - "Agree the handover of forward bookings and deposits"
                - "Check licences and supplier contracts are in the right names"
            - name: Pre-opening plan for a new or relaunched hotel
              description: |-
                ## Purpose
                Opening a hotel, or reopening one after a major renovation, needs months of pre-opening work before the first guest: recruitment and training, systems, operating supplies, sales and marketing, licences and a soft opening. The pre-opening budget is a separate cost from construction and is often underestimated. A dated plan owned jointly by owner and operator keeps opening day from slipping.

                ## Milestones
                1. A pre-opening budget and programme agreed with the operator, counting back from the opening date.
                2. Key hires, systems, operating supplies and licences each tracked to a date.
                3. A soft opening held with invited guests and the snag list closed.
                4. The first ninety days of trading reviewed against the opening forecast.
              priority: high
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The hotel opened on the agreed date within the pre-opening budget, with a soft opening held and the first ninety days reviewed against forecast."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Ask the operator for a draft pre-opening budget and programme"
                - "Agree the opening date the programme counts back from"
                - "Track key hires, systems and licences on one dated list"
                - "Plan the soft opening guest list and feedback form"
            - name: Rooms renovation phased through the low season
              description: |-
                ## Purpose
                Renovating a hotel while it trades means taking floors out of service, managing noise and dust, and protecting guest scores, all against a fixed window before the busy season returns. Phasing by floor, ordering long-lead items early and agreeing displacement with the operator decide whether the project lands on time. A dated plan turns the approved refurbishment into a schedule that guests barely notice.

                ## Milestones
                1. A phasing plan by floor or wing, with rooms out of order each week.
                2. Long-lead items such as case goods, bathroom fittings and lifts ordered with delivery dates.
                3. A mock-up room built, inspected and signed off by owner, operator and brand.
                4. All phases completed and handed back before the start of the busy season.

                ## Notes
                Sign off the mock-up room before ordering in bulk. Changes after the order are where most refurbishment overruns start.
              priority: medium
              deadlineOffsetDays: 300
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every renovation phase completed and handed back before the busy season, with a signed-off mock-up room and displacement within the agreed limit."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Agree the low-season window and maximum rooms out of order"
                - "Draw up the phasing plan by floor with the contractor"
                - "Order long-lead items with confirmed delivery dates"
                - "Inspect and sign off the mock-up room before bulk orders"
            - name: Preparing a hotel for sale
              description: |-
                ## Purpose
                Hotel buyers price the trailing twelve months, the competitive set trend, the condition of rooms and plant, and whether the agreements in place can be ended. Owners who prepare a year ahead can complete a refurbishment, tidy the accounts, settle disputes and decide whether to sell with or without the current operator or brand. A clean data room and a credible story often matter as much as the headline numbers.

                ## Milestones
                1. The sale timing chosen against the capex cycle and trading trend.
                2. Agreement termination or assignment rights confirmed with your lawyer.
                3. A data room with three years of accounts, competitive set reports, licences and condition surveys.
                4. A hotel broker appointed and the asset marketed, or a recorded decision to hold.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete data room, agreement rights confirmed and either a broker appointed and the hotel marketed or a recorded decision to hold."
                cadence: phased
                effort_hours_estimate: "35"
              tasks:
                - "Check where the hotel sits in its refurbishment cycle"
                - "Ask your lawyer how the agreements treat a sale"
                - "Build the data room with accounts, reports, licences and surveys"
                - "Interview two hotel brokers on price, buyers and marketing plan"
            - name: Founder buying a first boutique hotel
              description: |-
                ## Purpose
                Many first-time owners buy an independent boutique hotel of 15 to 60 rooms and run it themselves or with a small team, which means being owner, asset manager and often general manager at once. The risks are personal: long hours, staffing gaps and no brand system to fall back on. A plan that sets your own role, the team you need and the systems you will buy in makes the purchase a business rather than a lifestyle bet.

                ## Milestones
                1. Your own role, hours and what you will not do written down before the purchase.
                2. The minimum team for the hotel's size, with a general manager or deputy named.
                3. Property management, booking engine, channel manager and accounting systems chosen.
                4. A personal break-even showing what the hotel must earn before you are paid.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written owner-operator plan with your role, minimum team, chosen systems and a personal break-even, completed before exchange."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write down the hours and duties you are willing to take on"
                - "List the minimum team the hotel needs by department"
                - "Shortlist property management and booking systems for small hotels"
                - "Work out the profit the hotel needs before you take a salary"
            - name: Growing a guesthouse into a small licensed hotel
              description: |-
                ## Purpose
                Owners of guesthouses or bed and breakfasts who want more rooms, a bar or a restaurant soon cross into a different set of rules: planning use class, fire safety, food and alcohol licences, accessibility and business rates. Each extra room changes the staffing and the compliance load. Mapping the step up first shows whether expansion pays, and which approvals must come before building work.

                ## Milestones
                1. The current and proposed room count, outlets and planning use confirmed with the local authority.
                2. Fire, licensing, accessibility and food hygiene requirements for the larger hotel listed.
                3. The cost of approvals, works and extra staff compared with the extra income.
                4. A go or no-go decision recorded, with the approvals timetable if go.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written step-up plan covering planning, fire, licensing and staffing with costs against extra income and a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the planning office how a larger hotel would be classed"
                - "List the fire, licensing and accessibility rules for the bigger operation"
                - "Cost the works, approvals and extra staff"
                - "Compare the costs with extra room and bar income and record a decision"
            - name: Family-owned hotel succession and governance
              description: |-
                ## Purpose
                Family hotels often run on one founder's knowledge, with relatives in key roles and no written decisions on who leads next, who owns what and how family members are paid. When the founder steps back, the hotel can stall or the family can split. Setting up a simple governance structure, a succession plan and a yearly family meeting protects both the business and the relationships.

                ## Milestones
                1. Ownership, roles and pay of each family member written down as they stand today.
                2. A family meeting held to agree who leads the hotel next and on what timetable.
                3. A shareholder or family agreement drafted with your lawyer and accountant.
                4. A yearly family meeting set with an agenda covering results, roles and succession.

                ## Notes
                Succession has tax and legal consequences that vary by country. Take advice before transferring shares or property.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written family governance and succession plan with a draft agreement reviewed by a lawyer and a yearly family meeting scheduled."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write down each family member's ownership, role and pay today"
                - "Hold a family meeting on who leads the hotel next"
                - "Ask your lawyer and accountant to draft a family shareholder agreement"
                - "Hold the yearly family hotel meeting @recurring(yearly)"
            - name: Growing from one hotel to a small group
              description: |-
                ## Purpose
                Adding a second and third hotel brings shared services, buying power and a stronger story for lenders, but it also stretches an owner who has been running everything personally. The step needs a group structure, central finance and revenue management, a cluster general manager or operator, and rules for which hotels fit the group. Planning it before the second purchase keeps the first hotel from suffering.

                ## Milestones
                1. A group structure with one company per hotel and a holding company agreed with your advisers.
                2. Services to centralise, such as finance, revenue management and purchasing, chosen and costed.
                3. A leadership plan naming who runs each hotel and who runs the group.
                4. Group criteria written so the next hotel is tested against them.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written group plan with structure, central services, leadership roles and acquisition criteria agreed before a second hotel is bought."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your accountant how a holding company and hotel companies would work"
                - "List services worth centralising across two or three hotels"
                - "Name who runs each hotel and who runs the group"
                - "Write the criteria every future hotel must meet"
            - name: Appointing an independent hotel asset manager
              description: |-
                ## Purpose
                Owners who live far from the hotel, or who own it alongside other businesses, often hire a hotel asset manager to act for them with the operator: reviewing budgets, pushing performance, approving capex and preparing for sale. The role costs money, so the scope, fee and reporting need to be clear. A short appointment process with defined deliverables makes sure you pay for oversight, not another layer of reports.

                ## Milestones
                1. A written scope covering budget review, monthly oversight, capex approval and exit preparation.
                2. Proposals from at least two asset managers compared on fee, experience and conflicts.
                3. An appointment letter signed with deliverables and a termination right.
                4. Quarterly asset manager reports reviewed against the agreed deliverables.

                ## Notes
                Start from the **Vendor** template. Make sure the asset manager does not also work for your operator.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An asset manager appointed under a written scope with deliverables and a termination right, and quarterly reports reviewed against them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write the scope and deliverables you want from an asset manager"
                - "Request proposals from two or three hotel asset managers"
                - "Check each candidate for conflicts with your operator"
                - "Review the asset manager's report against deliverables @recurring(quarterly)"
            - name: New-build hotel development feasibility
              description: |-
                ## Purpose
                Building a hotel from the ground up combines development risk with operating risk, and lenders want to see both covered before committing. Feasibility starts with a market study, a room count and facilities programme, an operator or brand appetite check and a development budget per key, then tests whether stabilised value exceeds total cost by enough to justify the risk. The study decides whether to buy the site, not after.

                ## Milestones
                1. A hotel market study by a hospitality consultant covering demand, supply pipeline and projected rate.
                2. A facilities programme with key count, room sizes, outlets and meeting space.
                3. Total development cost per key, including pre-opening and working capital, estimated.
                4. Operator or brand interest confirmed in writing.
                5. A go or no-go decision recorded with stabilised value against total cost.

                ## Notes
                Include pre-opening costs, operating supplies and the ramp-up loss years in total cost. They are often left out of land-led appraisals.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility pack with a market study, facilities programme, cost per key, operator interest and a recorded go or no-go decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Brief a hospitality consultant on a market study for the site"
                - "Draft the facilities programme with key count and outlets"
                - "Ask a cost consultant for a development cost per key"
                - "Sound out two operators or brands on the site"
            - name: Converting an existing building into a hotel
              description: |-
                ## Purpose
                Offices, warehouses, heritage buildings and old hospitals are often converted into hotels, especially lifestyle and select-service hotels in city centres. The building dictates the result: floor depth, window spacing, ceiling heights, structure and lift cores decide how many rooms of what size fit. Testing a layout early shows whether the conversion can reach a viable key count and brand standards before a price is agreed.

                ## Milestones
                1. A test layout showing key count, room sizes and back-of-house space within the existing structure.
                2. Structural, fire, services and heritage constraints reported by the design team.
                3. Conversion cost per key compared with a new-build hotel in the same market.
                4. Brand or operator feedback on the layout recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A test layout with key count, constraint reports, cost per key compared with new-build, and operator or brand feedback on file."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Get floor plans and sections of the existing building"
                - "Ask an architect with hotel experience for a test layout"
                - "Commission structural and fire reports on the conversion"
                - "Share the layout with one brand or operator for feedback"
            - name: Extended-stay and aparthotel concept study
              description: |-
                ## Purpose
                Extended-stay hotels and aparthotels serve guests staying a week or more, such as project workers and relocating families, with kitchenettes and lean staffing that can give higher margins than a standard hotel. The concept works where there is steady long-stay demand and the right planning use, and it differs from both short-let flats and build-to-rent. A focused study tests demand, design and operating model before committing a site to it.

                ## Milestones
                1. Long-stay demand sources in the market listed, such as hospitals, project sites and corporate relocations.
                2. The planning use and licensing for an aparthotel confirmed with the local authority.
                3. A unit mix and operating staffing model drafted.
                4. A pro forma compared with a standard select-service hotel on the same site.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A study naming long-stay demand sources, confirming planning use, and comparing an aparthotel pro forma with a standard hotel on one site."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "List the long-stay demand sources within twenty minutes of the site"
                - "Ask the planning office how an aparthotel would be classed"
                - "Draft a unit mix and lean staffing model"
                - "Compare the aparthotel pro forma with a select-service hotel"
            - name: Branded residences alongside a hotel
              description: |-
                ## Purpose
                Some hotel developments sell branded residences that use the hotel's name and services, which can bring early sales income toward construction costs and a price premium over unbranded homes. They also add a residential licence fee to the brand, service charge complexity and legal work on what owners receive. A structured study shows whether the premium covers the fees and whether the hotel and residences can share facilities without conflict.

                ## Milestones
                1. The brand's residential licence fee and service obligations summarised.
                2. The sales premium over comparable unbranded homes evidenced from local sales.
                3. Shared facilities, access and service charge split between hotel and residences drafted.
                4. A recorded decision on whether to include residences, with your lawyer's comments.

                ## Notes
                Rules on selling homes off-plan, deposits and marketing to overseas buyers vary by country. Confirm them with your lawyer before any launch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A study of brand fees, evidenced sales premium and shared-facility arrangements, with a recorded decision on including residences."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Ask the brand for its residential licence fee and service terms"
                - "Find recent branded and unbranded sales prices in the market"
                - "Draft how facilities and service charges would be split"
                - "Ask the agent to summarise your lawyer's comments into a decision note"
            - name: Hotel portfolio annual strategy review
              description: |-
                ## Purpose
                Once a year an owner should step back from monthly packs and ask whether each hotel still deserves its capital: where it sits in the capex cycle, how its agreements and debt mature, what the market pipeline looks like and what it would sell for. Writing a hold, improve or sell view for each hotel turns a collection of properties into a strategy. It also prepares you for lender and partner conversations.

                ## Milestones
                1. A one-page summary per hotel covering performance, capex position, agreement and debt dates.
                2. An estimated current value and return on equity for each hotel.
                3. A hold, improve or sell call recorded for each hotel with the reason.
                4. The capital plan for the coming year aligned with those calls.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review with a one-page summary, value estimate and hold, improve or sell call for every hotel, and next year's capital plan aligned to it."
                cadence: cyclic
              tasks:
                - "Draft a one-page summary for each hotel you own"
                - "Note agreement expiry and debt maturity dates for each hotel"
                - "Hold the annual hold, improve or sell review @recurring(yearly)"
                - "Align next year's capital plan with each hotel's call"
---

# Hotel and Hospitality Property

A hotel is an operating business wrapped in a building: its value rises and falls with nightly room rates, occupancy, labour and the terms under which someone else runs it for you. This area is for founders and small businesses buying, developing or holding hotels, from a first boutique property to a small group, and it starts with a buy box, a market and competitive set baseline, the owner's reading of a USALI P&L and the choice between lease, management contract and franchise. It then moves through the owner's operating rhythms, the knowledge of valuation, agreements and revenue management, the decisions on operators, brands and refurbishments, the dated acquisitions, openings and sales, situations for owner-operators and families, and the specialist work of new-build feasibility, conversions, extended stay and branded residences.

The rhythms are a weekly competitive set review, a monthly performance review, FF&E reserve check, compliance check and labour watch, quarterly owner meetings, performance tests and distribution reviews, and a yearly budget, brand audit, insurance renewal and strategy review. Metrics log suits the market baseline and monthly review, Meeting notes suits owner meetings, Vendor suits operator and asset manager appointments, Risk register suits acquisition diligence, Purchase decision suits refurbishment choices and Operational checklist suits compliance. None of this is investment, legal, tax or valuation advice: agree prices, agreements, structures and valuations with a hotel consultant, a hospitality lawyer, your accountant and a hotel valuer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
