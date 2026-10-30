---
id: real-estate-development.distressed-property-acquisitions
name: Distressed Property Acquisitions
description: "Buy distressed property without being the one who overpaid: clear risk limits, cash ready to close, a feel for how repossessions and receiver sales work, extra diligence, honest repair budgets and a plan for auction day."
category: business
version: 1.0.0
tags: [real-estate-development, distressed-property-acquisitions, founder, small-business, foreclosure, auctions, receivership, non-performing-loans]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
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
        - name: Distressed Property Acquisitions
          description: "Buying distressed property: foreclosures and receiver sales, auctions, non-performing loans, extra diligence and realistic repair budgets."
          projects:
            - name: Distressed property buy box and risk limits
              description: |-
                ## Purpose
                Auction rooms and receiver sales reward buyers who know in advance what they will and will not touch. A written buy box sets the property types, locations, price band and condition you will consider, plus the most you will lose on any single deal, so excitement in the room cannot rewrite your plan. Write it before you request a single legal pack.

                ## Milestones
                1. Property types, target locations and a purchase price band written on one page.
                2. The condition you will accept stated, for example cosmetic only, structural repairs allowed, or shells.
                3. A maximum loss per deal and a maximum share of your capital in any one property recorded.
                4. Hard exclusions listed, such as occupied property, leasehold with short terms or known contamination.
                5. The buy box tested against three recent auction lots, with a yes or no for each.

                ## Notes
                A narrow buy box makes you faster, and speed is half the edge in distressed buying. Widen it only after a first completed deal.

                Before you start: this plan is general information to help you organise your own affairs. It is not legal advice. Rules differ between countries and change often, so check decisions that matter with a qualified lawyer or the official authority in the country concerned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page buy box with types, locations, price band, accepted condition, loss limits and exclusions, tested against three real lots."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the price band you could complete on in cash this year"
                - "Name the two or three areas where you know resale values street by street"
                - "Set the largest loss you would accept on one deal"
                - "Run three recent auction lots through the buy box and record each verdict"
            - name: Proof of funds and cash ready to complete fast
              description: |-
                ## Purpose
                Auctions often take a deposit on the fall of the hammer and expect completion within weeks, and receivers favour bidders who can show the money before they talk. Having cash, a bridge facility or a partner commitment documented in advance means you can bid when the right lot appears instead of watching it go. Lost deposits from failed completions are one of the commonest distressed buying losses.

                ## Milestones
                1. Cash available for deposits and completion totalled, with where it sits.
                2. A current proof of funds letter or statement ready to send.
                3. A bridging or short-term lender spoken to, with indicative terms and timing written down.
                4. The longest completion period you could meet without strain recorded.

                ## Notes
                Ask any lender how quickly they can value and fund a property in poor condition. Many cannot lend on a building without a working kitchen or bathroom.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A proof of funds document dated within the last three months and indicative terms from at least one short-term lender are on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total the cash you could commit within 48 hours"
                - "Ask your bank for a proof of funds letter"
                - "Speak to one bridging lender about funding times for unmortgageable property"
                - "Refresh the proof of funds letter so it is never older than three months @recurring(quarterly)"
            - name: Distressed acquisition team on call
              description: |-
                ## Purpose
                Distressed deals compress weeks of work into days, so the attorney, surveyor, builder and insurer must be lined up before the legal pack arrives, not after. Each of them should have handled repossessions or auction purchases before and agreed to turn work around quickly. A team you can phone on a Tuesday for a Thursday auction is what makes fast bids safe.

                ## Milestones
                1. An attorney who reviews auction legal packs and receiver contracts engaged, with a fee basis agreed.
                2. A building surveyor and a builder willing to view at short notice identified.
                3. An insurer or broker who covers vacant and damaged property named.
                4. Contact details, turnaround times and fees for each held in one place.

                ## Notes
                Start from the **Vendor** template, with one record per team member. Ask each how many distressed purchases they handled last year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Named attorney, surveyor, builder and insurer with agreed turnaround times and fees recorded, each with distressed property experience."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask two attorneys how fast they can review an auction legal pack"
                - "Find a surveyor who will view a lot within three working days"
                - "Ask a broker which insurers cover vacant repossessed property"
                - "Review each team member's speed and quality after the year's deals @recurring(yearly)"
            - name: How repossession and forced sales work where you buy
              description: |-
                ## Purpose
                Routes from missed payments to a sale differ by jurisdiction: some go through the courts, others let lenders sell under a power of sale, and some appoint receivers to collect rent first. Knowing the stages, typical timescales and who has authority to sign tells you when a property can really be bought and what the seller can and cannot promise. Learn it once, with your attorney checking your notes.

                ## Milestones
                1. The stages from default to sale written as a simple timeline for your jurisdiction.
                2. The parties who can sell, such as a lender, receiver, court officer or trustee, named with what each can sign.
                3. Any redemption period or right of the borrower to repay before or after sale noted.
                4. Your notes reviewed by your attorney and corrected.

                ## Notes
                Rules change and vary by region, so treat published guides as a starting point and confirm everything with your attorney.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page timeline of the repossession and sale process in your jurisdiction, reviewed and corrected by your attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the official guidance on mortgage enforcement in your jurisdiction"
                - "Draw the timeline from first missed payment to completed sale"
                - "List who can sell at each stage and what they can sign"
                - "Ask your attorney to mark up the timeline"
            - name: Map of who sells distressed property locally
              description: |-
                ## Purpose
                Only a handful of channels bring distressed stock to market, and most local buyers watch just one of them. Mapping the auction houses, lender recovery teams, receivers, insolvency practitioners, court sales and estate administrators active in your area shows where volume and competition really sit. It also tells you which relationships to build first.

                ## Milestones
                1. Auction houses selling in your target areas listed with sale dates.
                2. Lenders' asset recovery or repossession teams identified where they can be reached.
                3. Receivers and insolvency firms active in property named.
                4. Each channel rated for volume, typical condition and competition.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A channel map naming at least ten auction houses, lenders, receivers or practitioners, each rated for volume and competition."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every auction house that sold a lot in your areas this year"
                - "Search for receivers and insolvency firms that handle property locally"
                - "Find out how court-ordered sales are advertised in your jurisdiction"
                - "Rate each channel for volume and competition"
            - name: Maximum bid formula for distressed purchases
              description: |-
                ## Purpose
                Most overpayment at auction happens because the bidder never wrote down the ceiling. A formula that starts from the resale or rental value after repair, then takes away repairs, contingency, buying costs, holding costs, finance, selling costs and your required profit gives one number you will not exceed. Use the same formula on every lot so deals can be compared.

                ## Milestones
                1. A spreadsheet that works from after-repair value back to a maximum bid.
                2. Buying costs such as auction fees, taxes, legal fees and the buyer's premium included.
                3. Holding costs per month and a realistic hold period built in.
                4. A required profit set as a margin on total cost, not on the bid alone.
                5. The formula run on two past lots and compared with the prices they sold for.

                ## Notes
                Auction fees and buyer's premiums are often in the conditions, not the catalogue. Read them before you set the ceiling.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A maximum bid spreadsheet covering every cost line and required profit, tested on two past lots with results noted."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every cost between the hammer falling and selling or letting the property"
                - "Build the sheet from after-repair value back to a maximum bid"
                - "Test it on two lots that sold in the last three months"
                - "Write the required profit margin into the sheet as a fixed input"
            - name: Local repair cost library
              description: |-
                ## Purpose
                Repair budgets for distressed property are usually guessed from television, and real local prices are often far higher. A library of unit rates from your own builders and suppliers, such as a new roof per square metre, a full rewire, a kitchen or a boiler, lets you price a viewing in an hour with figures you trust. It improves with every job you complete.

                ## Milestones
                1. Twenty common repair items listed with a unit of measure.
                2. Local rates for each gathered from at least two builders or suppliers.
                3. Rates for specialist work such as damp, asbestos removal or structural repair noted where available.
                4. The date and source of each rate recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A repair rate library of at least twenty items with dated local prices from two sources each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the twenty repairs you see most often in repossessed property"
                - "Ask two builders for their current rates on each item"
                - "Add the actual costs from any job you have completed"
                - "Update the rates with your builders' latest prices @recurring(quarterly)"
            - name: Walk-away rules written before the first bid
              description: |-
                ## Purpose
                Surprises arrive late in distressed deals, such as a title defect, an occupier or a structural crack, and the money already spent on surveys makes walking away feel wasteful. Writing the conditions that end a deal before you start one makes the call quick and unemotional. These rules sit alongside the buy box and are read before every bid.

                ## Milestones
                1. Deal-ending findings listed, for example unresolved title gaps, unlawful occupiers or uninsurable damage.
                2. The diligence spend you accept losing on a deal you drop set as a figure.
                3. A rule for walking away in the room when bidding passes your ceiling written down.
                4. A partner or adviser asked to hold you to the rules.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written list of deal-ending findings, a diligence spend limit and an in-room ceiling rule, shared with one other person."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List five findings that would end any distressed deal for you"
                - "Set the most you will spend on diligence before deciding to bid"
                - "Write the rule you will follow when bidding passes your ceiling"
                - "Reread the walk-away rules and change any that did not hold @recurring(yearly)"
            - name: Insurance for vacant and damaged buildings
              description: |-
                ## Purpose
                Standard property policies often exclude buildings left empty for more than a few weeks, and many repossessions have been empty for months. Knowing in advance who will insure a vacant, damaged or partly stripped building, and on what conditions such as weekly inspections and drained water systems, avoids a completion day with no cover. Some auction terms make the risk yours from exchange.

                ## Milestones
                1. Two insurers or brokers who cover vacant and unoccupied property identified.
                2. Typical conditions, excesses and premiums for a vacant building noted.
                3. The point at which risk passes to you under typical auction and receiver terms confirmed.
                4. A process for placing cover on the day of exchange agreed with the broker.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two named sources of vacant property cover with conditions recorded, and a same-day cover process agreed with a broker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a broker for quotes on a sample vacant house and a vacant shop"
                - "Note the inspection and security conditions each insurer sets"
                - "Ask your attorney when risk passes under typical auction terms"
                - "Review vacant property cover terms and rates with the broker @recurring(yearly)"
            - name: Weekly auction catalogue screen
              description: |-
                ## Purpose
                Catalogues are published a few weeks before each sale, and the best lots for your buy box are usually obvious within minutes. A fixed weekly session to screen new catalogues against the buy box and request legal packs on the few that fit keeps you in front of every sale without letting it take over the week. Most lots should be rejected in under two minutes.

                ## Milestones
                1. A fixed weekly slot for catalogue screening in the calendar.
                2. Every catalogue in your target areas screened against the buy box.
                3. Legal packs requested only for lots that pass the screen.
                4. A count of lots screened and passed kept each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Catalogues in your target areas screened every week for eight weeks, with lots screened and passed counted each time."
                cadence: rolling
              tasks:
                - "Sign up for catalogue alerts from every auction house on your channel map"
                - "Screen new catalogues against the buy box @recurring(weekly:tue)"
                - "Request legal packs for the lots that pass"
                - "Note how many lots you screened and how many passed"
            - name: Receiver and insolvency practitioner contact programme
              description: |-
                ## Purpose
                Receivers and insolvency practitioners often sell property quietly to buyers they know will complete, before or instead of an auction. Being on their list as a credible buyer with funds and a clear buy box brings deals with less competition. The relationship is built with regular, short, useful contact, not one email.

                ## Milestones
                1. A list of ten receivers or practitioners who handle property in your areas.
                2. An introduction sent to each with your buy box and proof of ability to complete.
                3. At least three first conversations held.
                4. A contact log showing the date and outcome of each call.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten receivers or practitioners contacted with a buy box, three conversations logged and monthly follow-ups kept for six months."
                cadence: rolling
              tasks:
                - "Draft a one-page buyer profile with your buy box and funding"
                - "Send the profile to the first five receivers on your list"
                - "Call two receivers or practitioners to ask what they are selling @recurring(monthly:12)"
                - "Log the date and outcome of every contact"
            - name: Lender recovery team relationships
              description: |-
                ## Purpose
                Banks and credit unions holding repossessed property want it sold with the least fuss, and their recovery or asset management teams decide which agents, auctions and buyers get it. Knowing the right person at three or four local lenders gives early sight of stock and sometimes the chance to buy before marketing. Smaller lenders are usually easier to reach than large ones.

                ## Milestones
                1. The recovery or repossessions contact at three local lenders identified.
                2. Each told what you buy and how quickly you can complete.
                3. The agents or auction houses each lender uses to sell repossessions noted.
                4. At least one lot offered to you directly by a lender or its agent.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Named recovery contacts at three lenders, with the selling agents they use recorded and monthly contact kept for six months."
                cadence: rolling
              tasks:
                - "Ask your own bank who handles its repossessed property"
                - "Find the selling agents three local lenders use for repossessions"
                - "Check in with one lender recovery contact @recurring(monthly:19)"
                - "Record any lots offered to you and how you responded"
            - name: Distressed deal pipeline tracker
              description: |-
                ## Purpose
                Deals arrive from auctions, receivers, lenders and court notices on different timetables, and a missed bid deadline costs the whole opportunity. One tracker with each lot's source, stage, key dates, maximum bid and status lets you see the week at a glance and spot which channels produce deals you actually buy. Review it weekly and summarise it monthly.

                ## Milestones
                1. A tracker with source, address, stage, sale date, maximum bid and status columns.
                2. Every live lot entered with its next deadline.
                3. A weekly review held in a fixed slot.
                4. A monthly summary of lots viewed, bid, won and lost by channel.

                ## Notes
                Start from the **Metrics log** template for the monthly counts by channel.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pipeline tracker with every live lot and its next deadline, reviewed weekly and summarised by channel each month for six months."
                cadence: rolling
              tasks:
                - "Set up the tracker with source, stage, sale date and maximum bid columns"
                - "Enter every lot you are following with its next deadline"
                - "Review the pipeline and clear stale lots @recurring(weekly:fri)"
                - "Count lots viewed, bid, won and lost by channel @recurring(monthly:28)"
            - name: Court and public notice watch
              description: |-
                ## Purpose
                In many jurisdictions forced sales and enforcement steps must be advertised in court lists, official gazettes or newspapers before a sale. Reading those notices each week shows which properties are heading to sale weeks before the catalogue, and who to contact. Treat every notice as public information and approach owners and their advisers with care.

                ## Milestones
                1. The places where sale and enforcement notices are published in your jurisdiction listed.
                2. A weekly check of those sources running.
                3. Relevant notices added to the pipeline with the property, stage and contact.
                4. A rule for respectful contact with owners in difficulty agreed with your attorney.

                ## Notes
                Some jurisdictions restrict how you may approach a borrower in default. Ask your attorney before contacting any owner directly.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notice sources listed and checked weekly for twelve weeks, with relevant notices logged in the pipeline."
                cadence: rolling
              tasks:
                - "Find where sale notices are published in your jurisdiction"
                - "Read new sale and enforcement notices for your target areas @recurring(weekly:mon)"
                - "Add relevant notices to the pipeline tracker"
                - "Ask your attorney what limits apply to contacting owners in default"
            - name: Auction results log and price benchmarks
              description: |-
                ## Purpose
                Guide prices are set to draw a crowd and tell you little about what lots really fetch. Logging the results of every sale in your areas, with guide price, sold price, condition and whether it sold before or after the auction, builds a benchmark of true discounts. After six months you will know which guides are realistic and which are bait.

                ## Milestones
                1. A results log with guide, sold price, condition and sale route columns.
                2. Every lot in your areas from the last three sales entered.
                3. The average ratio of sold price to guide calculated by property type.
                4. The benchmark used to sanity-check your next maximum bid.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A results log covering at least six months of local sales, with sold-to-guide ratios by property type."
                cadence: rolling
              tasks:
                - "Download the results from the last three sales in your areas"
                - "Enter guide, sold price and condition for each lot"
                - "Add the latest auction results to the log @recurring(monthly:27)"
                - "Work out the sold-to-guide ratio for each property type"
            - name: Monthly holding cost check on owned distressed property
              description: |-
                ## Purpose
                Holding costs start the day a distressed purchase completes: insurance, security, utilities, property taxes, finance interest and sometimes service charges. These costs quietly eat the margin when repairs run late. A monthly check of actual holding costs against the bid formula shows early when a project is drifting.

                ## Milestones
                1. Every holding cost for each owned property listed with its monthly amount.
                2. Actual costs compared with the hold period and costs assumed in the bid.
                3. Properties running over the assumed hold period flagged.
                4. Any cost that can be cut or stopped acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly holding cost comparison against the bid assumptions for every owned distressed property, kept for twelve months."
                cadence: rolling
              tasks:
                - "List every holding cost for each property you own"
                - "Compare actual holding costs with the bid assumptions @recurring(monthly:5)"
                - "Flag any property past its assumed hold period"
                - "Cancel utilities or services the property no longer needs"
            - name: Quarterly review of bids won and lost
              description: |-
                ## Purpose
                Every lost bid tells you something about the market and every won one tells you something about your formula. A quarterly look at each bid, the price it went for, what you would have paid and how the won deals are performing against their budgets shows whether your ceilings are too cautious or too generous. It is the only honest feedback loop in distressed buying.

                ## Milestones
                1. Every bid in the quarter listed with your ceiling and the winning price.
                2. Won deals compared against their repair and holding budgets.
                3. One change to the bid formula or buy box agreed, or a decision that none is needed.
                4. The review notes filed with the date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly bid reviews completed in a year, each ending with a recorded change or a recorded decision to change nothing."
                cadence: cyclic
              tasks:
                - "List every bid this quarter with your ceiling and the winning price"
                - "Hold the quarterly bid review and record one decision @recurring(quarterly)"
                - "Compare each won deal with its repair budget"
                - "Update the bid formula if the review calls for it"
            - name: Builder and trades bench for quick repairs
              description: |-
                ## Purpose
                Every week a distressed property waits for a builder costs money, and the good ones are booked months ahead. A small bench of a main builder, a roofer, an electrician, a plumber and a clearance firm who know your standards and can start within two weeks of completion keeps the hold period short. Review it each quarter so it stays real.

                ## Milestones
                1. At least one name for each of builder, roofer, electrician, plumber and clearance.
                2. Insurance, references and any licences or registrations checked for each.
                3. Typical lead time and day rates recorded.
                4. A backup named for the main builder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A trades bench of at least five checked trades with lead times and rates, reviewed every quarter."
                cadence: rolling
              tasks:
                - "List the trades you used or were recommended in the last year"
                - "Check insurance and references for each trade"
                - "Ask each for their current lead time and day rate"
                - "Confirm availability and rates with the bench @recurring(quarterly)"
            - name: Reading an auction legal pack
              description: |-
                ## Purpose
                The legal pack is where auction lots hide their problems: special conditions that add fees, missing title documents, short leases, unpaid charges, planning breaches and clauses that make you pay the seller's costs. Learning to read one quickly lets you discard bad lots before paying an attorney and ask sharper questions on the good ones. Your attorney still reviews any lot you intend to bid on.

                ## Milestones
                1. The standard parts of a legal pack listed and explained in your own notes.
                2. A checklist of red flags in special conditions written.
                3. Three real legal packs read with red flags marked.
                4. Your marked-up packs compared with your attorney's view on one of them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal legal pack red-flag checklist, tested on three real packs and checked against your attorney's review of one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download a legal pack for any lot in an upcoming sale"
                - "List what each document in the pack is for"
                - "Write a red-flag checklist for special conditions"
                - "Ask your attorney to review one pack you have already marked"
            - name: Receiver sale terms and limited warranties
              description: |-
                ## Purpose
                Receivers and lenders selling under a power of sale usually give few or no promises about the property: no warranties on condition, title limited to what they hold, and personal liability excluded. Understanding what you are not getting tells you which risks move to you and which checks and insurance must replace the missing promises. Many first-time buyers learn this only after completion.

                ## Milestones
                1. Typical receiver and mortgagee sale terms summarised in plain words.
                2. A list of the promises a normal seller would give that these sales usually exclude.
                3. For each excluded promise, the check or insurance that replaces it noted.
                4. The summary reviewed by your attorney.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-word summary of receiver and mortgagee sale terms with a replacement check for each excluded promise, reviewed by your attorney."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your attorney for a sample receiver sale contract"
                - "List every warranty or promise the contract excludes"
                - "Write the check or insurance that covers each excluded promise"
                - "Ask whether title indemnity insurance is available for these sales"
            - name: Non-performing loan basics
              description: |-
                ## Purpose
                Buying the loan instead of the building lets you step into the lender's shoes: you may negotiate with the borrower, enforce, or sell the debt on. It is a different business with its own paperwork, timelines and legal duties to borrowers, and it suits buyers with patience and good attorneys. Learn the basics before you look at any loan for sale.

                ## Milestones
                1. The difference between buying a loan and buying a repossessed property written in your own words.
                2. The documents that prove a loan and its security listed.
                3. The routes to resolve a bought loan, such as repayment, restructure, enforcement or resale, summarised.
                4. Duties owed to borrowers in your jurisdiction checked with your attorney.

                ## Notes
                Lending and debt collection are regulated in many places. Confirm whether buying or enforcing a loan needs a licence before you bid.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes covering loan documents, resolution routes and borrower duties, with the licensing question answered by your attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read one plain guide to non-performing loan sales"
                - "List the documents that make up a complete loan file"
                - "Summarise the four ways a bought loan can be resolved"
                - "Ask your attorney whether buying a loan needs a licence where you are"
            - name: Pricing repairs from a short viewing
              description: |-
                ## Purpose
                Auction viewings are often 20 minutes in a block of open house slots, sometimes with no power on. Being able to walk a property in a set order, photograph what matters and turn it into a priced repair list that evening is a core distressed buying skill. Practise on properties you will not buy before it matters.

                ## Milestones
                1. A fixed viewing route from roof and outside walls to services and finishes written down.
                2. A viewing kit assembled, such as torch, moisture meter, tape and camera.
                3. Five properties viewed and priced with the repair library.
                4. Your estimates compared with a builder's on at least two of them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five viewings priced with the repair library, two of them checked against a builder's estimate with the gaps noted."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write a viewing route that starts with the roof and ends with finishes"
                - "Put together a viewing kit with a torch and a moisture meter"
                - "View and price five auction lots in your area"
                - "Ask a builder to price two of the same lots and compare"
            - name: Title problems common in repossessed property
              description: |-
                ## Purpose
                Repossessed and abandoned property often carries more than one charge, unpaid property taxes, judgments, missing deeds, unregistered extensions or boundary disputes with neighbours. Knowing which problems clear on a forced sale and which survive it and become yours shapes both diligence and the bid. Every case still needs your attorney's view.

                ## Milestones
                1. A list of title problems seen in distressed sales in your jurisdiction.
                2. For each, whether it usually clears on a forced sale or survives, confirmed with your attorney.
                3. The searches that reveal each problem noted.
                4. Typical costs and time to cure the common surviving problems estimated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of common title problems showing whether each clears or survives a forced sale and the search that finds it, checked by your attorney."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your attorney which title problems they see most in repossessions"
                - "List which problems clear on sale and which survive"
                - "Note the search that reveals each problem"
                - "Estimate the cost of curing the three most common ones"
            - name: Occupied property and people in possession
              description: |-
                ## Purpose
                Some distressed lots are sold with the former owner, tenants or unauthorised occupiers still inside, and the buyer inherits the job of resolving it. The legal routes, timescales and costs vary greatly and must be handled lawfully and humanely. Understanding them helps you decide whether to bid on occupied lots at all and, if so, what to allow in time and money.

                ## Milestones
                1. The types of occupier you may meet listed, with how each is usually treated.
                2. The lawful process and typical timescale for each confirmed with your attorney.
                3. A cost and time allowance for occupied lots added to the bid formula, or a rule to exclude them.
                4. A note on treating occupiers with respect and offering help to find support.

                ## Notes
                Never change locks, cut services or remove belongings without your attorney's advice. Unlawful eviction can be a criminal matter in many places.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written decision on occupied lots, with lawful processes and time and cost allowances confirmed by your attorney."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the kinds of occupier found in repossessed property"
                - "Ask your attorney for the lawful process for each kind"
                - "Decide whether occupied lots stay in your buy box"
                - "Add the time and cost allowance for occupied lots to the bid sheet"
            - name: As-is and after-repair value evidence pack
              description: |-
                ## Purpose
                Every distressed bid rests on two values: what the property is worth today in its state, and what it will be worth once repaired. Lenders, partners and your own discipline need both backed by comparable sales rather than hope. A short evidence pack per lot makes the numbers defensible and shows when an after-repair value is a stretch.

                ## Milestones
                1. Three comparable sales of repaired property near the lot found.
                2. Two comparable sales of property in similar poor condition found.
                3. Adjustments for size, condition and location written beside each.
                4. As-is and after-repair values stated with the evidence attached.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An evidence pack per bid lot with at least five comparables and written as-is and after-repair values."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull recent sales of repaired homes within a short walk of the lot"
                - "Find sales of similar property in poor condition"
                - "Write the adjustment for each comparable"
                - "Ask a local agent whether the after-repair value is achievable"
            - name: Reading a loan tape for a note purchase
              description: |-
                ## Purpose
                Loans for sale come with a spreadsheet, the loan tape, listing balances, arrears, interest rates, payment history and the property securing each loan. Reading it critically, spotting gaps and stale values, and knowing which columns matter most is how a note buyer decides which loans to price. The tape is only the seller's summary, so it opens diligence rather than replacing it.

                ## Milestones
                1. The usual columns of a loan tape explained in a glossary.
                2. A sample tape read with missing or doubtful fields marked.
                3. Each loan sorted into likely outcomes such as reperform, restructure or enforce.
                4. Questions for the seller about the weakest data written.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A loan tape glossary and one sample tape marked up with data gaps, likely outcomes and seller questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a sample or anonymised loan tape to practise on"
                - "Write a glossary of every column on the tape"
                - "Mark fields that are missing, stale or inconsistent"
                - "Draft questions for the seller about the weakest loans"
            - name: Extra diligence checklist for distressed purchases
              description: |-
                ## Purpose
                Sellers in distress often know little about the property and promise less, so the buyer must find out what a normal seller would have disclosed. A checklist that adds the distressed extras, such as vandalism and stripped fittings, frozen pipes, unpaid charges, missing building approvals and occupier history, to the usual title and survey checks keeps every lot to the same standard. Record findings and actions in a risk register.

                ## Milestones
                1. A diligence checklist covering title, physical, legal, financial and occupier risks.
                2. Distress-specific items added, such as winter damage, theft of metals and missing certificates.
                3. A risk register format agreed for logging findings, owners and actions.
                4. The checklist used on one live lot and revised.

                ## Notes
                Start from the **Risk register** template for findings on each lot.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A distressed diligence checklist and risk register used on at least one live lot and revised afterwards."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Start from your attorney's standard purchase checklist"
                - "Add ten checks specific to repossessed and abandoned property"
                - "Set up a risk register for findings and actions"
                - "Use the checklist on the next lot you view"
            - name: Pre-auction survey and builder walk-through
              description: |-
                ## Purpose
                A surveyor and a builder walking the lot with you before the sale turns a guess into a priced risk. Sharing the viewing with them, even in a short slot, finds the structural, damp, roof and services issues that change the bid by thousands. The cost is small against a deposit you cannot get back.

                ## Milestones
                1. A surveyor and builder booked into the viewing slot.
                2. A written note of structural, roof, damp and services findings received.
                3. The builder's repair estimate set against your own.
                4. The maximum bid updated from the findings.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written survey and builder findings for the lot, with the maximum bid updated to reflect them before the sale."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book the viewing slot as soon as the catalogue is out"
                - "Ask your surveyor and builder to attend the same slot"
                - "Get the findings in writing within two days"
                - "Rerun the maximum bid with the builder's figures"
            - name: Unpaid taxes, utilities and service charge arrears search
              description: |-
                ## Purpose
                Arrears often come with distressed property: property taxes, water bills, estate or service charges and sometimes utility debts tied to the property rather than the person. Whether these pass to the buyer depends on the jurisdiction and the sale terms, and they can wipe out a discount. Searching for them before bidding puts a real figure in the formula.

                ## Milestones
                1. Each authority or management company that could hold arrears listed for the lot.
                2. Written figures or confirmation of nil arrears requested from each.
                3. Your attorney's view on which arrears pass to the buyer recorded.
                4. The arrears that pass added to the bid formula.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written arrears figures or nil confirmations from every relevant authority, with the buyer's share added to the bid sheet before the sale."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every authority and management company that could bill the property"
                - "Request written arrears statements from each"
                - "Ask your attorney which arrears pass to the buyer"
                - "Add the buyer's share of arrears to the maximum bid sheet"
            - name: Bid at auction or offer before the sale
              description: |-
                ## Purpose
                Many auction lots can be bought before the sale if the seller accepts an offer, and lots that fail to sell are often available afterwards at lower prices. Choosing between an early offer, bidding in the room and waiting for an unsold lot depends on competition, the seller's urgency and your diligence status. Decide deliberately for each lot rather than defaulting to the room.

                ## Milestones
                1. The auction house's rules on pre-auction and post-auction offers confirmed.
                2. Competition for the lot judged from viewing numbers and legal pack downloads where shared.
                3. A route chosen with the reason written down.
                4. The outcome logged in the pipeline for later review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded route choice and reason for each lot you pursue, with the outcome logged in the pipeline."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the auctioneer whether the seller will consider offers before the sale"
                - "Ask how many viewings and legal pack requests the lot has had"
                - "Write the route you choose and why"
                - "Ask about unsold lots the day after the sale"
            - name: Buy the loan or wait for the forced sale
              description: |-
                ## Purpose
                Where a lender is willing to sell a defaulted loan, buying it can secure the property earlier and with more control than waiting for an auction. It also brings enforcement costs, delay and the chance the borrower repays. Comparing both routes side by side for a specific property shows which gives the better risk-adjusted outcome.

                ## Milestones
                1. The likely price and timing of buying the loan estimated.
                2. The likely price and timing of buying at a later forced sale estimated.
                3. Enforcement cost, delay and repayment risk noted for the loan route.
                4. A choice made and recorded, checked with your attorney.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side comparison of loan purchase and forced sale routes for one property, with a recorded choice reviewed by your attorney."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the lender whether the loan itself is for sale"
                - "Estimate the timing and cost of enforcing the loan"
                - "Estimate the likely price at a later forced sale"
                - "Record the route you choose and your attorney's view"
            - name: Realistic repair budget with contingency
              description: |-
                ## Purpose
                Repair budgets on distressed property are wrong in one direction: they rise once walls open up. A line-by-line budget from the builder's walk-through, priced with your repair library, with a contingency set by the property's condition and age, keeps the bid honest and the lender or partner informed. The budget becomes the control document once work starts.

                ## Milestones
                1. A repair budget with every item priced, grouped by trade.
                2. A contingency set as a percentage that rises with age and condition, with the reason noted.
                3. Fees, permits and approvals for the works included.
                4. The budget agreed with the main builder before the bid.

                ## Notes
                Shells, fire damage and long-empty buildings usually need a larger contingency than a tired but sound house. Ask your builder what they would hold back.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced repair budget with a stated contingency and fees, agreed with the main builder before bidding."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Price every repair item from the walk-through notes"
                - "Set the contingency percentage and write why"
                - "Add permit, approval and design fees for the works"
                - "Go through the budget line by line with your builder"
            - name: Choosing finance for a distressed purchase
              description: |-
                ## Purpose
                Ordinary mortgages are rarely available on distressed property until it is repaired, and auction deadlines leave little time to arrange one. The real choices are your own cash, a bridging or short-term loan, a partner's money, or a mix, each with different costs, speeds and risks. Comparing them on the same deal before bidding avoids a scramble that ends in a lost deposit.

                ## Milestones
                1. Cash, bridging, partner and mixed options listed for a sample deal.
                2. Cost, speed, condition requirements and exit for each set side by side.
                3. The refinance or sale route that repays short-term debt written down.
                4. A preferred route chosen with a backup.

                ## Notes
                Start from the **Purchase decision** template. Agree loan terms with the lender and your attorney, not from a broker summary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three finance routes on one sample deal, with a preferred route, a backup and the repayment exit recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two short-term lenders for terms on a sample unmortgageable property"
                - "Compare cost, speed and conditions with paying cash"
                - "Write how the short-term debt would be repaid"
                - "Choose a preferred route and a backup"
            - name: Sell, let or hold after repair
              description: |-
                ## Purpose
                Three exits are open after a distressed purchase: repair and sell, repair and let, or hold while values recover, and the right one changes how much you spend on repairs. Deciding before bidding, with figures for each route, stops a project drifting between plans. It also tells you whether the property suits a mortgage lender for a refinance.

                ## Milestones
                1. Net proceeds from a sale after repair estimated.
                2. Rent, running costs and a refinance amount estimated for letting.
                3. The repair specification needed for each route noted.
                4. One exit chosen before the bid, with the trigger that would change it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded exit choice for the lot with figures for selling and letting and a written trigger for changing the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate net proceeds from selling after repair"
                - "Estimate rent and a refinance amount for letting"
                - "Note how the repair specification differs between routes"
                - "Write the exit you choose and what would change it"
            - name: Auction day plan and bidding script
              description: |-
                ## Purpose
                The auction room, or the online timer, is designed to make people bid past their limits. A written plan for the day, with your maximum bid, registration and identity documents ready, deposit arranged, and a short script for when to start, how to bid and when to stop, keeps you inside the numbers. Practise it once at a sale you are only watching.

                ## Milestones
                1. Registration, identity checks and deposit method completed before the day.
                2. Maximum bid for each lot written on a card or note you keep in hand.
                3. A bidding script for opening, increments and stopping written.
                4. One sale attended or watched online as a rehearsal.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed auction plan with registration done, deposit arranged and maximum bids written, rehearsed at one sale before the first real bid."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Watch one auction online without bidding"
                - "Register with the auction house and complete identity checks"
                - "Arrange the deposit payment method the auction house accepts"
                - "Write the bidding script and the maximum bid for each lot"
            - name: Exchange and completion after an auction win
              description: |-
                ## Purpose
                Winning at auction usually means exchanging contracts on the spot, paying a deposit and fees that day, and completing within a fixed period whatever happens with the finance. The weeks after the hammer are a checklist race: insurance, funds, attorney, keys. Missing completion can cost the deposit and more, so plan it before you bid.

                ## Milestones
                1. Insurance placed from the moment risk passes to you.
                2. Deposit and auction fees paid and receipted on the day.
                3. Completion funds confirmed in place well before the completion date.
                4. Completion achieved on time, with keys and documents received.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Completion achieved within the auction's completion period, with cover in place from exchange and all documents received."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tell your broker the lot number and ask for cover from exchange"
                - "Send the signed memorandum of sale to your attorney the same day"
                - "Confirm completion funds with your lender or bank"
                - "Book key collection for the completion date"
            - name: Receiver sale offer and best and final round
              description: |-
                ## Purpose
                Private treaty sales by receivers often run a short offer process ending in a best and final round, where they look at price, certainty and speed together. A clear offer letter with proof of funds, minimal conditions and a firm timetable can win against a higher but shakier bid. Prepare the offer before the deadline, not on the night.

                ## Milestones
                1. The receiver's process, deadline and offer requirements confirmed in writing.
                2. An offer letter with price, funding, conditions and timetable drafted.
                3. Proof of funds and attorney details attached.
                4. A best and final figure set within your maximum bid before the round opens.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An offer letter with proof of funds submitted before the receiver's deadline, with the best and final figure within your written maximum."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the receiver for the process, deadline and what offers must include"
                - "Ask the agent to draft the offer letter from your terms"
                - "Attach proof of funds and your attorney's details"
                - "Set your best and final figure before the round opens"
            - name: Securing a vacant repossessed building on day one
              description: |-
                ## Purpose
                Empty buildings attract theft of metals and fittings, squatting, fly-tipping and water damage, often within days of the keys changing hands. A day one checklist of locks, boarding or alarms, utilities, water drained or heated, photographs and a regular inspection protects the asset and keeps the insurer's conditions met. Weekly visits are often a policy requirement.

                ## Milestones
                1. Locks changed and openings secured on completion day.
                2. Dated photographs of every room and the outside taken.
                3. Water and utilities made safe in line with insurance conditions.
                4. A weekly inspection routine running and logged.

                ## Notes
                Start from the **Operational checklist** template. Check your insurer's vacancy conditions and follow them exactly.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The building secured and photographed on completion day, with weekly inspections logged for as long as it stays empty."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a locksmith for completion day"
                - "Photograph every room and the outside on the day you take the keys"
                - "Drain or protect the water system as the insurer requires"
                - "Inspect the empty building and log the visit @recurring(weekly:wed)"
            - name: Note purchase closing and servicing handover
              description: |-
                ## Purpose
                Closing a loan purchase means more than paying: the loan documents must be assigned, the security transferred on the register, the borrower told who to pay, and someone set up to service the loan. Gaps here cause missed payments, invalid notices and disputes about who can enforce. Treat it as a short project with your attorney and a servicer.

                ## Milestones
                1. Assignment documents and the transfer of security signed and registered.
                2. The original loan file and payment history received.
                3. A servicer appointed or your own servicing process in place.
                4. The borrower notified of the change in a lawful form.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Loan and security assigned and registered, file received, servicing in place and the borrower notified within the agreed closing period."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your attorney for the closing checklist for a loan purchase"
                - "Confirm who will service the loan from day one"
                - "Check the original loan file is complete before funds go"
                - "Send the borrower notice in the form your attorney approves"
            - name: First 90 days after a distressed purchase
              description: |-
                ## Purpose
                Margin on a distressed deal is mostly won or lost in the first three months, when works start, costs land and surprises appear. A short plan with the start date, a weekly site meeting, budget tracking against the repair budget and an early decision point on any overruns keeps the hold period close to what the bid assumed.

                ## Milestones
                1. Works started within the period set in the bid assumptions.
                2. A weekly site meeting held with the builder and notes kept.
                3. Spend compared with the repair budget every week.
                4. A decision point at day 60 on any overrun above the contingency.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Works started on time, weekly site notes kept and a recorded day 60 decision on any overrun."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Agree the works start date with your builder"
                - "Hold a site meeting and update spend against budget @recurring(weekly:thu)"
                - "Write down any surprise found once walls are opened"
                - "Hold the day 60 review on cost and programme"
            - name: First auction purchase alongside a day job
              description: |-
                ## Purpose
                Most people buying their first distressed property have a job that does not stop for viewings, legal packs and completion deadlines. A year-long plan that uses one weekend viewing slot, evening screening and a team that handles the urgent parts lets you buy one property well rather than chase many. One completed deal teaches more than fifty screened catalogues.

                ## Milestones
                1. A weekly time budget for distressed buying agreed with yourself and your household.
                2. Weekend viewing slots booked for the lots that pass the screen.
                3. One lot bid on within the buy box and the ceiling.
                4. One property completed, repaired and sold or let within the year.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "One distressed property bought within the buy box and completed within twelve months, alongside a full-time job."
                cadence: phased
                effort_hours_estimate: "120"
              tasks:
                - "Agree how many hours a week you can give with your household"
                - "Book one weekend viewing slot for a lot that passes the screen @recurring(weekly:sat)"
                - "Arrange for your attorney to handle legal packs at short notice"
                - "Set a date by which you will have placed your first bid"
            - name: Buying repossessed premises for your own business
              description: |-
                ## Purpose
                A business owner who needs a shop, workshop or warehouse can sometimes buy repossessed or receiver-held commercial premises well below the cost of building or renting long term. The checks differ from residential: use class or zoning, fire safety, access and loading, and whether the business can operate during repairs. Done well, it fixes the business's occupancy cost for years.

                ## Milestones
                1. The space, location and use the business needs written down.
                2. Zoning or use permission for your business confirmed for the target premises.
                3. Repair and fit-out costs and the time before the business can move in estimated.
                4. Buying compared with renting over ten years with your accountant.

                ## Notes
                Ask your accountant whether the business or a separate company should own the property. Tax and lending treatment differ.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written decision on buying repossessed premises for the business, with use permission confirmed and a ten-year buy or rent comparison reviewed by your accountant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the floor area, location and use your business needs"
                - "Check the permitted use of any repossessed premises you shortlist"
                - "Estimate the months between completion and moving in"
                - "Ask your accountant to compare buying with renting over ten years"
            - name: Partner money for a distressed deal
              description: |-
                ## Purpose
                Founders often find good distressed deals faster than they can fund them, and a single partner or a small group can provide the cash for deposits and completion. Agreeing who puts in what, who decides, how profit is split and what happens if the deal runs late must happen before the auction, because there will be no time after. Raising money from several people may fall under securities rules.

                ## Milestones
                1. One or two prospective partners briefed on your buy box and track record.
                2. Contributions, decision rights, profit split and overrun rules agreed in a term sheet.
                3. A written agreement prepared by your attorney before any bid.
                4. Partner funds confirmed as available within the auction's timescales.

                ## Notes
                Ask your attorney whether raising money from more than one person needs a securities filing or exemption where you are.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed partner agreement covering contributions, decisions, profit split and overruns, with funds confirmed before the first bid."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a one-page summary of your buy box and past results"
                - "Brief one prospective partner on how a distressed deal runs"
                - "Agree the main terms in a short term sheet"
                - "Ask your attorney to turn the term sheet into an agreement"
            - name: Buying distressed property in another country
              description: |-
                ## Purpose
                Founders living abroad, including in the diaspora, are often offered repossessed property back home at prices that look far below local value. Buying from a distance adds risks: you cannot view easily, local rules on foreign buyers may apply, and money transfers and deposits take time. A plan that puts trusted local eyes and a local attorney in place first makes it workable.

                ## Milestones
                1. Rules on foreign ownership, licences and taxes for the country confirmed by a local attorney.
                2. A local surveyor or builder engaged to view on your behalf.
                3. The time to move deposit and completion funds across borders tested.
                4. A local contact able to secure and inspect the property after completion.

                ## Notes
                Be wary of anyone offering a guaranteed discount on a foreign repossession who also controls the viewing and the paperwork.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A local attorney, a viewing professional and an after-completion contact in place, with foreign buyer rules and fund transfer times confirmed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask a local attorney about foreign buyer rules and taxes"
                - "Find a surveyor or builder who will view and report with video"
                - "Test how long it takes to move a deposit into the country"
                - "Name a local contact to inspect the property after completion"
            - name: Mortgagee and bank sales in the Caribbean
              description: |-
                ## Purpose
                Across the Caribbean, banks and credit unions commonly sell repossessed property under a power of sale, often advertised in newspapers or through local auctioneers and agents, from Trinidad and Tobago and Jamaica to Barbados, Guyana and the OECS islands. Values, title systems and stamp duty or transfer taxes vary island by island, and properties are often sold as seen. Knowing how sales are advertised and completed in your chosen territory is the first step.

                ## Milestones
                1. The territory you will focus on chosen, with how mortgagee sales are advertised there.
                2. The local banks and credit unions that sell repossessed property listed.
                3. Transfer taxes, stamp duty and legal fees for a purchase confirmed by a local attorney.
                4. Title checks and boundary surveys needed for these sales noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A profile of mortgagee sales in one Caribbean territory covering sellers, advertising channels, purchase costs and title checks, confirmed by a local attorney."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the territory where you know values best"
                - "List the banks and credit unions there that sell repossessions"
                - "Check newspaper and agent listings for mortgagee sales @recurring(monthly:15)"
                - "Ask a local attorney for the full cost of a purchase"
            - name: Buying from estates and executor sales
              description: |-
                ## Purpose
                Properties left in estates are often in poor repair, sometimes empty for years, and sold by executors who want a clean, quick sale. Buying them takes patience with probate timelines, sensitivity with families and care over who has authority to sell. Done kindly and quickly, it gives executors what they need and you a property at a fair discount.

                ## Milestones
                1. The documents that prove an executor's authority to sell understood.
                2. Typical probate or estate timelines in your jurisdiction noted.
                3. A way to reach executors through attorneys and agents, not by approaching families uninvited.
                4. One estate property viewed and priced.

                ## Notes
                Never pressure a grieving family. Make offers through their attorney or agent and allow time.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Notes on executor authority and estate timelines, plus one estate property viewed and priced through an attorney or agent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your attorney what proves an executor can sell"
                - "Find out the usual time to obtain authority to sell where you are"
                - "Tell two local agents you buy estate property in any condition"
                - "View and price one estate property"
            - name: Bidding on a non-performing loan portfolio
              description: |-
                ## Purpose
                Banks clearing bad loans sometimes sell them in pools, with a data room, a loan tape and a deadline for bids. Pricing a pool means sampling files, valuing the security, estimating recovery timelines and costs, and allowing for loans that cannot be enforced at all. It is specialist work done with experienced attorneys, servicers and often partners.

                ## Milestones
                1. The data room reviewed and a sample of loan files read in full.
                2. Security values estimated for the sampled loans.
                3. Recovery timelines, costs and failure rates set out for the pool.
                4. A bid range agreed with partners and advisers, or a decision not to bid.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded bid or no-bid decision on a loan pool, backed by a file sample, security values and recovery assumptions."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Request data room access and the bid timetable"
                - "Pick a sample of loan files to read in full"
                - "Estimate recovery time and cost for each sampled loan"
                - "Agree a bid range or a no-bid decision with your partners"
            - name: Distressed commercial property from a receiver
              description: |-
                ## Purpose
                Receivers appointed over offices, shops and industrial units often sell them part-let, with tenants in arrears, service charge deficits and deferred repairs. Buying them means checking leases and arrears yourself, judging which tenants will stay and pay, and budgeting for void periods. The discount can be large, but the work is closer to an asset turnaround than a simple purchase.

                ## Milestones
                1. The tenancy schedule checked against leases and payment records.
                2. Tenant arrears and service charge deficits quantified.
                3. Void periods, letting costs and repairs added to the bid formula.
                4. A bid or a decision to pass recorded with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded bid or pass on a receiver-held commercial property, with leases, arrears and void costs checked and included."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the receiver for the tenancy schedule and arrears report"
                - "Check each lease against the schedule"
                - "Estimate void periods and letting costs for empty units"
                - "Record your bid or pass with the reasons"
            - name: Buying a stalled part-built development
              description: |-
                ## Purpose
                When a developer fails mid-build, lenders or receivers sell the half-finished site, often with expired permissions, unpaid subcontractors and no warranties on the work done. A buyer who can assess the structure, the permissions, the remaining cost and the market can finish what others could not. It needs a design and cost team, not just a builder.

                ## Milestones
                1. The status of planning and building permissions confirmed, including any expiry.
                2. Work done so far inspected by an engineer, with what must be removed or tested.
                3. The cost and time to complete estimated by a quantity surveyor or experienced builder.
                4. Liens, subcontractor claims and missing warranties identified with your attorney.

                ## Notes
                Work done without proper inspection may need to be opened up or replaced. Allow for it in the budget.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a stalled site with permissions, engineer's inspection, cost to complete and claims reviewed."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the seller for permissions, drawings and inspection records"
                - "Book a structural engineer to inspect the work done"
                - "Ask a quantity surveyor for a cost to complete"
                - "Ask your attorney to check for liens and contractor claims"
            - name: Workouts and discounted payoffs as a loan holder
              description: |-
                ## Purpose
                Once you hold a defaulted loan, the best outcome is often a negotiated one: a restructure, a discounted payoff, or a consensual handover of the property, rather than a long enforcement. Preparing the numbers for each option and negotiating fairly and lawfully with the borrower usually recovers more, faster. Every proposal goes through your attorney.

                ## Milestones
                1. Net recovery and timing estimated for restructure, discounted payoff, consensual handover and enforcement.
                2. The borrower's circumstances understood through lawful contact.
                3. A proposal made and its terms recorded.
                4. The agreed outcome documented by your attorney.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of four resolution routes for a held loan and a documented, attorney-approved outcome."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Estimate net recovery and time for each resolution route"
                - "Ask your attorney how you may contact the borrower"
                - "Draft a proposal for the route that recovers most"
                - "Have your attorney document the agreed outcome"
---

# Distressed Property Acquisitions

Distressed property is sold by people who did not choose to sell: lenders repossessing, receivers appointed over a borrower, courts ordering a sale, executors clearing an estate. The discount is real, but so are the missing paperwork, the short deadlines and the damage nobody mentioned. This area is for founders and small business owners buying distressed property on their own account, and it runs from foundations such as risk limits, proof of funds, the team and the local repossession process, through the operating machinery of catalogue screens, receiver and lender contacts and a pipeline, the skills of reading legal packs and sale terms, the diligence and repair decisions, the dated work of auction day and completion, situations for different buyers and the specialist end of loan portfolios, stalled schemes and workouts.

The rhythms are a weekly catalogue and notice screen, a weekly pipeline review, monthly calls to receivers and lender recovery teams, monthly auction results and holding cost checks, quarterly reviews of bids and the trades bench, and a yearly look at the buy box, team and insurance. Vendor suits the acquisition team, Metrics log suits the pipeline, Risk register suits diligence findings, Purchase decision suits choosing finance and Operational checklist suits securing a vacant building on day one. None of this is legal, tax, lending or investment advice: agree contracts, bids, structures and loan terms with your attorney, accountant and lender. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
