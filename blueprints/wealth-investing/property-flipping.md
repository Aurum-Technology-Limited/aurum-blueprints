---
id: wealth-investing.property-flipping
name: Property Flipping
description: "A route from first deal to repeatable flips: a target patch and sold-price evidence, a deal calculator with a maximum offer, financing, builder and budget control, cash tracking and a disciplined sale."
category: personal
version: 1.0.0
tags: [wealth-investing, property-flipping, homeowner, everyone, renovation, deal-analysis, property-development]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - vendor
    - risk-register
    - operational-checklist
  pillars:
    - name: Wealth & Investing
      emoji: "📈"
      description: "Building long-term wealth: pensions and retirement accounts, index investing, property, side income, estate planning and the slow, boring decisions that compound over decades."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Property Flipping
          description: "Buying undervalued property, renovating within budget and selling for profit, with deal analysis and project risk controls."
          projects:
            - name: Flipping readiness and capital check
              description: |-
                ## Purpose
                Before viewing a single property, work out how much cash you can commit for six to twelve months and how much you could lose without harming your household. Flips routinely run 20 percent over budget and two months over time, so the honest number is the one that survives both. Knowing it now stops you chasing deals you cannot finish.

                ## Milestones
                1. Cash available for deposit, works and contingency written as one figure, separate from emergency savings.
                2. A maximum acceptable loss agreed with anyone who shares your finances.
                3. Hours per week you can give a project recorded, including evenings and weekends.
                4. A go or wait decision written down, with the reason beside it.

                ## Notes
                If the plan depends on borrowing against your own home, talk it through with a mortgage adviser before going further: the downside then includes the roof over your head.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written figure for committable cash, a maximum acceptable loss and weekly hours, with a dated go or wait decision."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List cash you could tie up for twelve months without touching emergency savings"
                - "Agree a maximum acceptable loss with your partner or household"
                - "Estimate honestly the hours you can give a project each week"
                - "Write a go or wait decision with the reason beside it"
            - name: Choosing a target patch to know street by street
              description: |-
                ## Purpose
                Profitable flips come from knowing one area better than the agents selling in it: which streets sell fast, where the price ceiling sits, which house types buyers compete for. Picking one or two neighbourhoods within 30 minutes of home keeps site visits realistic and lets your price knowledge build quickly.

                ## Milestones
                1. Three candidate areas compared on price range, sale speed and travel time.
                2. One primary patch chosen, with its boundary drawn on a map.
                3. The local price ceiling for a renovated home of your target type noted.
                4. Streets to favour and streets to avoid listed with reasons.

                ## Notes
                Close to home beats cheap and far. Most first-time flippers underestimate how many times they will need to be on site.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One primary patch chosen with a mapped boundary, a price ceiling for the target property type and a list of favoured and avoided streets."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three neighbourhoods within 30 minutes of home"
                - "Compare median sold prices and days on market for each"
                - "Walk the shortlisted streets on a weekday evening and a Saturday"
                - "Mark the chosen patch boundary on a saved map"
                - "Walk the patch on foot to spot new works, boards and empty homes @recurring(quarterly)"
            - name: Sold-price comparables database for your patch
              description: |-
                ## Purpose
                Asking prices tell you what sellers hope for; sold prices tell you what a renovated house is actually worth. A running table of recent sales in your patch, with condition, size and date, is the evidence behind every offer and every after-repair valuation.

                ## Milestones
                1. At least 30 sales from the last 18 months recorded with address, date, price, floor area and condition.
                2. Each sale tagged as unmodernised, average or fully renovated.
                3. Price per square metre worked out for renovated and for unmodernised homes.
                4. The gap between the two, your raw flipping margin, written at the top.

                ## Notes
                Start from the **Metrics log** template. Floor area is often on the energy certificate or the listing floor plan; without it, price per bedroom is a weak substitute.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A comparables table holding 30 or more dated sales with floor area and condition, and a price per square metre for renovated and unmodernised homes."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull 18 months of sold prices for your patch from a public price register"
                - "Add floor area from floor plans or energy certificates for each sale"
                - "Tag each sale as unmodernised, average or renovated from old listing photos"
                - "Add the month's new sold prices to the table @recurring(monthly:5)"
            - name: Deal analysis calculator with a maximum offer
              description: |-
                ## Purpose
                Every flip is decided by one sum: after-repair value minus works, buying and selling costs, finance, holding costs and the profit you need, which leaves the most you can pay. Building that calculator once, and running every property through it, stops a good-looking house from talking you into a bad price. Many flippers screen with a rule of thumb, such as paying no more than 70 percent of after-repair value less works, then test it against the full calculation.

                ## Milestones
                1. A calculator with lines for after-repair value, works, contingency, buying costs, finance, holding costs, selling costs and target profit.
                2. A maximum offer figure produced automatically from those inputs.
                3. The calculator tested on two properties for sale in your patch, with results that look sane.
                4. A minimum profit, as a figure and as a percentage of total cost, built into it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A deal calculator that outputs a maximum offer, tested on two real local properties, with a minimum profit threshold built in."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the minimum profit that would make six months of your time worthwhile"
                - "Build calculator lines for every cost from purchase to sale"
                - "Add a maximum offer cell that works backwards from after-repair value"
                - "Test the calculator on two properties currently for sale in your patch"
                - "Ask your AI agent to check the calculator for missing cost lines"
            - name: Full cost of a flip from offer to sale
              description: |-
                ## Purpose
                Thin margins disappear in the lines people forget: property transfer tax, which can carry a surcharge for an additional home, two sets of legal fees, the survey, lender arrangement fees, utilities and local property tax on an empty house, agent commission and the buyer's requests at the end. Listing every cost with a local figure before the first offer turns the calculator from a guess into a quote.

                ## Milestones
                1. Every cost from purchase, holding and sale listed with a local figure or percentage.
                2. The transfer tax rate that would apply to you confirmed with a conveyancer or the tax authority's calculator.
                3. Monthly holding cost for a typical patch property worked out.
                4. The finished cost list loaded into the deal calculator.

                ## Notes
                Check whether a surcharge for buying an additional property applies to you. In some countries it adds several percent to the purchase cost and decides whether a deal works at all.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost list covering buying, holding and selling, with local figures, loaded into the deal calculator and the transfer tax rate confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Get a conveyancing quote for both a purchase and a sale"
                - "Confirm the transfer tax rate for an additional property"
                - "Ask two local agents for their commission rate on a sale"
                - "Price a month of utilities, local property tax and insurance on an empty house"
            - name: Financing route for the purchase and works
              description: |-
                ## Purpose
                Ordinary residential mortgages often refuse homes without a working kitchen or bathroom, and many restrict selling within six months, which rules them out for most flips. Comparing cash, bridging finance, refurbishment loans and private lenders on total cost over a realistic nine-month hold shows which route actually leaves a profit.

                ## Milestones
                1. Three financing routes compared on interest, fees, exit fees and maximum loan to value.
                2. Total finance cost over a nine-month hold worked out for each.
                3. Lender conditions on property condition and early resale written down.
                4. A route chosen, with an agreement in principle or proof of funds in hand.

                ## Notes
                Start from the **Purchase decision** template. A broker who handles bridging and refurbishment loans is worth a conversation even if you plan to pay cash, because cash tied up in one flip cannot fund the next.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A financing route chosen after comparing three options on total cost over nine months, with proof of funds or an agreement in principle on file."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book a call with a broker who arranges bridging and refurbishment finance"
                - "Compare three routes on rate, arrangement fee, exit fee and loan to value"
                - "Calculate the total finance cost of each over a nine-month hold"
                - "Get proof of funds or an agreement in principle for the chosen route"
            - name: Core professional team for buying and selling
              description: |-
                ## Purpose
                Deals in a competitive patch go to buyers who can move in days, which means a conveyancer, surveyor, broker and accountant already lined up before the right property appears. Choosing them now, with fees agreed, means an offer can go in with a credible timeline attached.

                ## Milestones
                1. A conveyancer or property lawyer who handles auction and fast purchases engaged.
                2. A surveyor and a broker on call, with fees known.
                3. An accountant who works with property traders identified.
                4. A contact sheet with names, numbers and fees saved where you can reach it from site.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet naming a conveyancer, surveyor, broker and accountant, each with agreed or quoted fees."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two local investors or agents which conveyancers move fastest"
                - "Get fee quotes from two conveyancers who handle auction purchases"
                - "Find a building surveyor who will do a pre-offer walk-round"
                - "Save one contact sheet with every name, number and fee"
            - name: How flip profits are taxed, agreed with an accountant
              description: |-
                ## Purpose
                Selling a property bought to renovate and resell is often taxed as trading income rather than as a capital gain, and the difference can change your profit by a third or more. Asking an accountant before the first purchase how your flips are likely to be treated, and what records they need, puts the right figure in the calculator and the right amount aside at sale.

                ## Milestones
                1. A meeting held with an accountant who works with property traders.
                2. Their view on the likely tax treatment of your flips written down in plain words.
                3. An estimated tax rate on profit added to the deal calculator.
                4. A list of records the accountant wants kept from day one.

                ## Notes
                This is a question for a qualified professional, not a rule of thumb. Whether to hold flips in a company is a separate decision, covered by the property company structure area.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of the accountant's view on how flip profit will be taxed, with an estimated rate in the calculator and a records list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a meeting with an accountant who advises property traders"
                - "Prepare a one-page outline of your planned first flip for the meeting"
                - "Add the estimated tax rate on profit to the deal calculator"
                - "Book the year-end flipping review with your accountant @recurring(yearly)"
            - name: Insurance for an empty property under renovation
              description: |-
                ## Purpose
                Standard home insurance usually lapses or narrows once a house is empty for 30 to 60 days or under major works, which is exactly when theft of materials, water leaks and fire are most likely. Arranging unoccupied or renovation cover from completion day protects the purchase price, the works and your liability to the public and to trades on site.

                ## Milestones
                1. Two quotes for unoccupied property or renovation cover obtained.
                2. Conditions on inspections, water drain-down and security written down.
                3. A policy in force from the completion date.
                4. Your builder's public liability certificate on file.

                ## Notes
                Read the conditions carefully: many policies require weekly inspections recorded in writing, and missing them can void a claim.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An unoccupied or renovation insurance policy active from completion, with its inspection conditions written down and the builder's liability certificate on file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a specialist broker for unoccupied property renovation quotes"
                - "Write down every inspection and security condition in the policy"
                - "Collect the builder's public liability insurance certificate"
                - "Check the renovation cover still fits the current project before renewal @recurring(yearly)"
            - name: Separate flip bank account and project bookkeeping
              description: |-
                ## Purpose
                Running a renovation through your personal account makes it impossible to say what the flip actually made, and leaves your accountant reconstructing a year from card statements. A dedicated account and one folder per property, set up before the first purchase, keeps every invoice, receipt and transfer traceable.

                ## Milestones
                1. A separate account opened and used only for flip money.
                2. A bookkeeping sheet or app with categories matching the deal calculator.
                3. One folder per property for contracts, invoices and photos.
                4. The first month of transactions categorised and reconciled.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A dedicated account and bookkeeping record in use, with every transaction for the current month categorised and its receipt filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Open a separate current account for flip money only"
                - "Set up bookkeeping categories that match the deal calculator lines"
                - "Create one folder per property for contracts, invoices and photos"
                - "Match the month's transactions to receipts and categorise them @recurring(monthly:15)"
            - name: Twice-weekly deal sourcing routine
              description: |-
                ## Purpose
                Good flip candidates in an active patch can be under offer within a week, and most are found by someone who looks often and rejects the rest quickly. A fixed twice-weekly scan of property portals, auction catalogues and agent emails, filtered to your patch and price band, keeps a steady supply of properties for the calculator.

                ## Milestones
                1. Saved searches set up on the main portals for your patch, price band and keywords such as modernisation or probate.
                2. Auction houses covering the patch subscribed to.
                3. Two scans a week kept up for a full month.
                4. Every candidate either run through the calculator or rejected with a reason.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Saved searches and auction alerts live, and at least eight scans completed in a month with every candidate logged."
                cadence: rolling
              tasks:
                - "Save portal searches using keywords such as modernisation, refurbishment and cash buyers only"
                - "Subscribe to catalogues from auction houses that sell in your patch"
                - "Scan new listings and auction lots for the patch @recurring(weekly:mon,thu)"
                - "Reject or analyse every candidate within 48 hours of spotting it"
            - name: Estate agent relationships for off-market leads
              description: |-
                ## Purpose
                Agents call the buyers they trust when a probate sale or a tired house comes in before it reaches the portals. Being known in two or three local offices as a proceedable buyer who does what they say is how many flippers see deals first.

                ## Milestones
                1. Three local agents met in person, with your criteria and proof of funds shared.
                2. A one-page buyer profile with price band, property types and timescale.
                3. Each agent contacted monthly for at least three months.
                4. At least one property seen before it was publicly listed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three agents hold your buyer profile and proof of funds, and each has been contacted monthly for at least three months."
                cadence: rolling
              tasks:
                - "Write a one-page buyer profile with price band, property types and timescale"
                - "Visit three local agency offices in person with the profile"
                - "Call each agent to ask what is coming before it lists @recurring(monthly:9)"
                - "Give feedback within a day on every property an agent sends you"
            - name: Monthly market pulse for the patch
              description: |-
                ## Purpose
                Flips are bought in one market and sold in another six to nine months later, so a cooling market can erase a profit the calculator promised. Tracking listings, price reductions and time to agree a sale in your patch each month gives early warning to lower offers or tighten the scope of works.

                ## Milestones
                1. Four indicators chosen: new listings, price reductions, days to agree a sale and typical mortgage rates.
                2. Twelve months of history gathered as a starting point.
                3. One line a month added, with a note on direction.
                4. A written rule for when the indicators mean lowering after-repair values in the calculator.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A monthly record of four market indicators for the patch, with a written rule for adjusting after-repair values when they turn."
                cadence: rolling
              tasks:
                - "Choose four market indicators you can find every month for free"
                - "Record twelve months of history for each indicator"
                - "Add this month's indicators and a one-line direction note @recurring(monthly:18)"
                - "Write the rule for when to cut after-repair values in the calculator"
            - name: Weekly works budget against actual spend
              description: |-
                ## Purpose
                Renovation overspends build up a few hundred at a time: an extra radiator here, an upgraded tile there. Comparing committed and actual spend against each budget line every week while works are running shows the drift while there is still contingency to absorb it.

                ## Milestones
                1. The budget broken into lines that match the builder's quote and your own purchases.
                2. Committed, invoiced and paid columns for each line.
                3. A weekly update kept for the whole works period.
                4. Any line more than 10 percent over flagged, with a decision recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A works budget updated every week of the project, with any line over 10 percent flagged and a decision recorded against it."
                cadence: rolling
              tasks:
                - "Split the works budget into lines that match the builder's quote"
                - "Add committed, invoiced and paid columns to each line"
                - "Update committed and actual spend on every line @recurring(weekly:fri)"
                - "Flag any line running over 10 percent and decide what gives"
            - name: Weekly site walk-round and progress photos
              description: |-
                ## Purpose
                Problems caught on a midweek walk-round cost a conversation; the same problem found after plastering costs a rip-out. A set weekly visit with photos from the same spots, a check against the schedule and a short written list for the builder keeps quality and pace visible.

                ## Milestones
                1. Fixed photo positions chosen for each room.
                2. A weekly visit with dated photos for the whole works period.
                3. A short written list sent to the builder after every visit.
                4. Progress against the schedule noted each week.

                ## Notes
                Photos taken before walls are closed are worth keeping for good: they show where pipes and cables run when a buyer's surveyor asks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated photo set and a written list sent to the builder for every week that works are running."
                cadence: rolling
              tasks:
                - "Choose fixed photo positions in every room"
                - "Walk the site, take photos and check progress against the schedule @recurring(weekly:wed)"
                - "Send the builder a short written list after each visit"
                - "Photograph pipe and cable runs before any wall or floor is closed"
            - name: Contingency and cash runway monitor
              description: |-
                ## Purpose
                Flips fail when the money runs out before the house is finished, not when the profit shrinks. A monthly forecast of cash left, committed works, finance costs and months to sale, held against a contingency of 10 to 20 percent of the works budget, shows a shortfall while there is still time to cut scope or arrange funds.

                ## Milestones
                1. A contingency figure agreed before works start and held separately.
                2. A monthly forecast of cash remaining against committed spend and holding costs.
                3. A trigger level written down for when to cut scope or raise funds.
                4. Every contingency drawdown logged with its reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly cash forecast kept for each live project, with a written trigger level and every contingency drawdown logged."
                cadence: rolling
              tasks:
                - "Set the contingency as a fixed share of the works budget before works start"
                - "Write the cash level that triggers cutting scope or raising funds"
                - "Forecast cash remaining against commitments and holding costs @recurring(monthly:20)"
                - "Log every contingency drawdown with its reason"
            - name: Holding costs ledger for each live project
              description: |-
                ## Purpose
                Every month a flip sits unsold costs interest, insurance, utilities, local property tax and sometimes service charges, and the total usually surprises people. Logging them per property shows the true price of delay and makes the case for speed when choosing between a bigger scope and an earlier sale.

                ## Milestones
                1. Every holding cost for the property listed with its monthly amount.
                2. A running total from completion to today.
                3. The cost of one extra month unsold written at the top.
                4. The final holding total carried into the post-sale reconciliation.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A per-property holding cost ledger with a running total and a cost per extra month figure."
                cadence: rolling
              tasks:
                - "List every recurring cost the property carries from completion"
                - "Work out the cost of one extra month unsold"
                - "Add the month's holding costs to the ledger @recurring(monthly:12)"
                - "Ask the local authority whether empty homes under works get any tax relief"
            - name: Variation and extras log with the builder
              description: |-
                ## Purpose
                Changes agreed verbally on site are the most common source of end-of-job disputes and budget blow-outs. Logging every change in writing, with price and time impact agreed before work starts, keeps the final account close to the quote and gives you a record if there is a disagreement.

                ## Milestones
                1. A variation form or message format agreed with the builder at the start.
                2. Every change recorded with description, price and effect on the schedule.
                3. Each variation approved in writing before work on it begins.
                4. The log totalled and reconciled with the final invoice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every variation on the project recorded and approved in writing before work, with the log reconciled to the final invoice."
                cadence: rolling
              tasks:
                - "Agree with the builder how variations will be priced and approved"
                - "Create a numbered variation log with price and days added"
                - "Approve each variation in writing before any work starts on it"
                - "Reconcile the variation log with the builder's final account"
            - name: Deal log of every property analysed
              description: |-
                ## Purpose
                Most properties you look at will be rejected, and the reasons are your best education. A log of every candidate with its numbers, your offer if any and what it eventually sold for shows whether your after-repair values are too hopeful and your offers too timid.

                ## Milestones
                1. A log with address, asking price, your maximum offer, outcome and reason.
                2. At least 20 properties logged.
                3. Sold prices for rejected properties added later where they appear.
                4. A monthly note on what the log is teaching you.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A deal log of at least 20 analysed properties with maximum offers, outcomes and later sold prices where known."
                cadence: rolling
              tasks:
                - "Create a deal log with address, asking price, maximum offer and outcome columns"
                - "Log every property run through the calculator, including rejections"
                - "Add sold prices for past candidates and review the log @recurring(monthly:26)"
                - "Write one sentence on what the latest month taught you"
            - name: Quarterly flipping performance review
              description: |-
                ## Purpose
                Profit per deal hides how long it took and how many hours went in. A quarterly review of return on cash, profit per hour, budget accuracy and time accuracy across live and finished flips tells you honestly whether this is building wealth or just keeping you busy.

                ## Milestones
                1. Four measures chosen: profit, return on cash invested, profit per hour and budget variance.
                2. Each finished or live project scored on them.
                3. One change for the next quarter agreed.
                4. Quarterly results kept in one place for year-on-year comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A quarterly scorecard covering return on cash, profit per hour and budget variance for every project, with one agreed change."
                cadence: cyclic
              tasks:
                - "Choose the four measures you will score every project on"
                - "Keep a simple note of hours spent on each project"
                - "Score every live and finished flip and agree one change @recurring(quarterly)"
                - "Compare this quarter's scores with the same quarter last year"
            - name: Reading a survey for structural red flags
              description: |-
                ## Purpose
                Subsidence, failed lintels, damp, roof spread and dated wiring are the defects that turn a flip into a rescue. Learning what each looks like on a viewing, and what a building survey report is really saying, lets you price them or walk away before paying for a full survey on every candidate.

                ## Milestones
                1. The ten most common costly defects in your patch's housing type listed with the signs to look for.
                2. Three survey reports read, with the key findings summarised.
                3. A viewing checklist written from what you learned.
                4. One viewing done alongside a surveyor or experienced builder.

                ## Notes
                Learning the signs is for screening. The decision to buy still rests on a professional survey.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A viewing checklist of at least ten costly defects, written after reading three survey reports and one accompanied viewing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the defects most common in your patch's age and type of housing"
                - "Read three sample building survey reports end to end"
                - "Write a viewing checklist covering roof, walls, damp, electrics and drains"
                - "Ask a surveyor or builder to walk one viewing with you"
            - name: Renovation price book for your patch
              description: |-
                ## Purpose
                Estimating works from a television programme or a national average is how budgets break. A price book of real local rates for a kitchen fit, a rewire, a replastered room, a new bathroom and a full redecoration lets you price a viewing in twenty minutes and spot a builder's quote that is far out.

                ## Milestones
                1. Rates for at least fifteen common jobs gathered from quotes and local trades.
                2. Rates split into labour and materials where possible.
                3. Each rate dated, with its source.
                4. Rates checked against at least one real quote before relying on them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A dated price book of at least fifteen common renovation jobs with local rates and their sources."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the fifteen jobs that appear in almost every flip"
                - "Ask three local trades for typical rates on their jobs"
                - "Record each rate with date, source and what it includes"
                - "Refresh any rate more than a year old before relying on it"
            - name: Estimating after-repair value accurately
              description: |-
                ## Purpose
                After-repair value is the figure everything else depends on, and the most common mistake is borrowing the best sale on the street. Practising valuations on properties before they sell, then checking against the eventual sold price, calibrates your judgement within a few months.

                ## Milestones
                1. A method written down: three to five renovated comparables, adjusted for size, parking, garden and position.
                2. Ten properties valued before they sold.
                3. Each estimate compared with the eventual sold price.
                4. Your average error recorded and the method adjusted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten properties valued in advance and checked against their sold prices, with your average error recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Write your valuation method with adjustments for size, parking and garden"
                - "Value five renovated properties currently on the market in your patch"
                - "Compare each estimate with its sold price when it appears"
                - "Ask two agents to talk through how they valued a recent comparable"
            - name: Buying at property auction
              description: |-
                ## Purpose
                Auctions carry many unmodernised and hard-to-mortgage homes, but in many countries the hammer falling is a binding contract, usually with a 10 percent deposit on the day and completion within about 28 days. Learning to read a legal pack, set a ceiling and arrange finance before the day prevents the expensive auction-room mistakes.

                ## Milestones
                1. Two auctions watched without bidding.
                2. Three legal packs read with a conveyancer's help, noting special conditions and buyer's fees.
                3. A personal rule written for ceiling price and walking away.
                4. Finance confirmed as able to complete within the auction's timescale.

                ## Notes
                Check the buyer's premium and any extra fees in the special conditions. They are added to the hammer price and belong in the calculator.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two auctions observed, three legal packs reviewed with a conveyancer and a written ceiling and walk-away rule in place."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Register to watch two auctions online or in the room"
                - "Download legal packs for three lots in your patch"
                - "Ask your conveyancer to walk you through one pack's special conditions"
                - "Write your ceiling and walk-away rule before any bidding"
            - name: Planning and building approval basics for renovators
              description: |-
                ## Purpose
                Removing a wall, moving a bathroom or adding a window can need building control approval, and some changes need planning permission, especially in conservation areas. Missing sign-offs surface when your buyer's lawyer asks for them and can stall a sale for weeks. Learning which jobs need what, before the scope is set, protects the exit.

                ## Milestones
                1. A list of common flip jobs and the approvals each usually needs locally.
                2. Conservation areas and other restrictions in the patch checked.
                3. The local building control contact and process noted.
                4. Certificates a buyer is likely to ask for listed, such as electrical, gas and window installation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of common flip jobs and their approvals, local restrictions checked and the completion certificates a buyer will ask for listed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your local authority's guidance on works that need approval"
                - "Check whether any street in your patch is in a conservation area"
                - "List the completion certificates a buyer's lawyer usually asks for"
                - "Ask building control how notice is given for structural changes"
            - name: What buyers in your patch pay more for
              description: |-
                ## Purpose
                First-time buyers, families and downsizers reward different things, and money spent on features your buyers ignore is money lost. Talking to agents and studying what the fastest and highest sales had in common shows where the budget should go, whether that is a second bathroom, off-street parking or an open-plan kitchen.

                ## Milestones
                1. The likely buyer for your property type described in a short profile.
                2. Common features of the ten quickest sales in the patch listed.
                3. Three agents asked what buyers request and what puts them off.
                4. A ranked list of value-adding features for your target buyer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of features your target buyer pays for, drawn from ten fast sales and three agent conversations."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a profile of the buyer most likely to buy your property type"
                - "Study the listings for the ten quickest sales in the patch"
                - "Ask three agents what buyers request and what puts them off"
                - "Rank features by what buyers pay for against what they cost"
            - name: Trade sequencing and renovation schedule
              description: |-
                ## Purpose
                Plasterers waiting for electricians and kitchen fitters arriving before the floor is down are how a ten-week job becomes sixteen. Learning the standard order of works, from strip-out and structural work through first fix, plastering, second fix and decoration, lets you build a realistic schedule and question a builder's one that is not.

                ## Milestones
                1. The standard sequence of trades written down with typical durations.
                2. Lead times noted for items that hold up a job, such as kitchens, windows and steel beams.
                3. A template schedule built that can be adjusted for each project.
                4. The schedule reviewed with a builder for realism.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A template renovation schedule with trade sequence, durations and long lead items, reviewed by a builder."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write out the standard order of works from strip-out to decoration"
                - "Note lead times for kitchens, windows, steels and bespoke joinery"
                - "Build a template schedule you can copy for each project"
                - "Ask a builder to point out anything unrealistic in it"
            - name: Scope of works, cosmetic refresh or full refurbishment
              description: |-
                ## Purpose
                Every house can absorb more money than the market will repay, and the right scope is the one where each pound spent returns more than a pound at sale. Deciding the scope line by line against your buyer research and comparables, before asking for quotes, ties the budget to value rather than to taste.

                ## Milestones
                1. Every proposed job listed with an estimated cost and its expected effect on sale price.
                2. Jobs sorted into must do, adds value and nice to have.
                3. Nice-to-have items cut unless they clearly pay back.
                4. A final scope signed off and fixed before quotes are requested.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed-off scope where every job is tagged must do or adds value, with its cost and expected sale price effect recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every possible job with an estimated cost from your price book"
                - "Estimate the sale price effect of each job using comparables"
                - "Sort jobs into must do, adds value and nice to have"
                - "Fix the final scope before asking any builder for a quote"
            - name: Main contractor or managing trades yourself
              description: |-
                ## Purpose
                Managing individual trades can save a main contractor's margin, often 10 to 20 percent, but it costs time and coordination, and carries real risk if a trade fails to turn up. Deciding honestly, from your hours, experience and distance from site, avoids paying for that saving with months of delay.

                ## Milestones
                1. The likely saving from self-managing worked out for a typical project.
                2. Hours per week that self-managing would need estimated.
                3. Risks listed: gaps between trades, warranties and who answers for defects.
                4. A decision recorded, with the point at which you would revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision between a main contractor and self-managed trades, with the saving, hours and risks written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare a main contractor quote with the sum of individual trade quotes"
                - "Estimate the weekly hours self-managing would take"
                - "List who is responsible for defects under each route"
                - "Record the decision and what would make you revisit it"
            - name: Builder selection with three like-for-like quotes
              description: |-
                ## Purpose
                Quotes from different builders rarely price the same job, so the cheapest often becomes the most expensive once extras appear. Sending one written scope to three builders, checking references on finished jobs and comparing like for like gives you a builder you can hold to a price.

                ## Milestones
                1. A written scope and specification sent to three builders.
                2. Three quotes on the same basis, with exclusions listed.
                3. Two references per builder checked, including one finished job visited.
                4. Insurance, any trade registrations and payment terms confirmed for the chosen builder.

                ## Notes
                Start from the **Vendor** template. Be wary of large upfront deposits; staged payments against completed work are normal.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A builder chosen from three like-for-like quotes, with references, insurance and payment terms checked and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send the same written scope to three recommended builders"
                - "Put the three quotes side by side, listing every exclusion"
                - "Visit one finished job for each builder on your shortlist"
                - "Confirm insurance and payment terms with the chosen builder"
            - name: Written building contract and staged payments
              description: |-
                ## Purpose
                A handshake and a quote leave start dates, finish dates, payment, defects and variations open to argument. A written contract with a fixed price, a schedule, payments tied to completed stages and a retention held back for snagging protects both you and the builder.

                ## Milestones
                1. A contract form chosen, such as a published minor works contract, or your own agreement reviewed by a lawyer.
                2. Price, start date, completion date and payment stages agreed.
                3. A retention, often around 5 percent, held until defects are put right.
                4. The contract signed by both sides before work starts.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed contract with fixed price, dates, stage payments and a retention, in place before any work starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a published contract form or ask a lawyer to review your own"
                - "Agree payment stages tied to visible completed work"
                - "Agree a retention held until snags are fixed"
                - "Sign the contract with the builder before any work begins"
            - name: Finishes specification for the target buyer
              description: |-
                ## Purpose
                Choosing taps, tiles and flooring one at a time on site leads to mismatched rooms, delays and over-specification. A single finishes schedule, set at the level your comparables show buyers pay for, means every item is chosen, priced and ordered before the trades need it.

                ## Milestones
                1. A finish level chosen to match renovated comparables, not personal taste.
                2. Every item listed by room with product, price and supplier.
                3. Long lead items ordered to arrive before they are needed.
                4. The schedule shared with the builder and kept as the single reference.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room-by-room finishes schedule with product, price and supplier for every item, shared with the builder."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Photograph the finishes in three renovated comparables for reference"
                - "Choose one neutral palette and finish level for the whole house"
                - "List every item by room with product, price and supplier"
                - "Order long lead items so they arrive before the trades need them"
            - name: Fallback exit if the sale stalls
              description: |-
                ## Purpose
                Markets turn and some houses sit, while bridging interest keeps running. Deciding before purchase what you would do if the property has no acceptable offer after three months, whether a price cut, refinancing to let or a sale at auction, means the fallback is costed rather than improvised under pressure.

                ## Milestones
                1. Three fallback options costed: price reduction, refinance and let, auction sale.
                2. Whether the finished property would meet a lender's rental cover test checked.
                3. Trigger points written: time on the market and offer level.
                4. The chosen fallback discussed with your lender or broker.

                ## Notes
                If letting becomes the plan, the buy-to-let area covers running it. This project only decides whether it is a workable escape route.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three fallback exits costed for the current project, with written triggers for when each would be used."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Cost a 5 and a 10 percent price reduction against your profit"
                - "Ask your broker whether the finished property would refinance to let"
                - "Get an auction house's view of a likely guide price"
                - "Write the trigger points for each fallback"
            - name: Choosing the selling agent and marketing plan
              description: |-
                ## Purpose
                The agent who values highest is not always the one who sells best. Comparing three agents on recent sales of renovated homes, their buyer list, fees and marketing, and agreeing photos, floor plan and launch timing in writing, gives the finished house its best first fortnight.

                ## Milestones
                1. Three agents' valuations obtained, each with comparable evidence.
                2. Fees, contract length and tie-in terms compared.
                3. Marketing agreed: professional photos, floor plan, listing text and launch date.
                4. One agent instructed, with terms in writing.

                ## Notes
                Start from the **Vendor** template. Ask each agent how many renovated homes they sold in the patch last year and at what price against asking.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One selling agent instructed after comparing three on evidence, fees and tie-in, with the marketing plan agreed in writing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Invite three agents to value the property near the end of works"
                - "Ask each for recent renovated sales and the price achieved against asking"
                - "Compare fees, minimum contract length and withdrawal terms"
                - "Agree photos, floor plan and launch date in writing"
            - name: Asking price and offer strategy
              description: |-
                ## Purpose
                Pitching too high in the first two weeks wastes the period of most interest, while pitching too low leaves money behind. Setting the asking price from comparables and agent evidence, with a written floor price and a rule for reductions, takes emotion out of the sale.

                ## Milestones
                1. An asking price set from at least three renovated comparables.
                2. A floor price below which you will not accept, linked to your profit threshold.
                3. A rule for when and how much to reduce if there is no offer.
                4. Viewing feedback reviewed weekly while on the market.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written asking price, floor price and reduction rule, with viewing feedback recorded weekly until a sale is agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the asking price from three renovated comparables"
                - "Write the floor price tied to your minimum profit"
                - "Decide in advance when you would reduce and by how much"
                - "Ask the selling agent for viewing feedback while on the market @recurring(weekly:mon)"
            - name: Pre-offer viewing with a builder and surveyor
              description: |-
                ## Purpose
                A second viewing with someone who prices works for a living is the cheapest insurance in flipping. An hour with a builder, and ideally a surveyor, turns your rough works figure into one you can put in an offer, and often finds the one problem that kills the deal.

                ## Milestones
                1. A second viewing booked with a builder, and a surveyor if possible.
                2. A rough works figure from the builder, room by room.
                3. Concerns needing a specialist, such as drains, roof or damp, listed.
                4. The calculator rerun and an offer figure set, or the property rejected.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A second viewing done with a builder, with a room-by-room works estimate and an offer or rejection decision recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a second viewing with your builder within three days of the first"
                - "Walk every room with the builder and note works and costs"
                - "List anything that needs a specialist check before an offer"
                - "Rerun the calculator and set your offer or reject the property"
            - name: Offer, negotiation and due diligence before commitment
              description: |-
                ## Purpose
                From offer to the point you are legally committed, whether exchange of contracts or the end of a contingency period, is the last window to find problems and renegotiate. Running a clear checklist through survey, searches, title and planning history, with a walk-away price fixed, keeps an eager buyer from overlooking a costly issue.

                ## Milestones
                1. An offer made below your maximum, with comparables and works evidence.
                2. Survey, searches and title reviewed with your conveyancer.
                3. Any new issues priced, and a renegotiation made or the deal dropped.
                4. Every item on the property's risk list closed or accepted before commitment.

                ## Notes
                Start from the **Risk register** template. If the survey finds major works, renegotiating on cost evidence is normal; your maximum offer does not rise because you have grown attached.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every survey, search and title issue reviewed and either closed or priced into the offer before you are legally committed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Make the offer in writing with your comparables and works evidence"
                - "Instruct your conveyancer and surveyor the day the offer is accepted"
                - "Price each new issue the survey and searches raise"
                - "Renegotiate or withdraw before commitment if the numbers no longer work"
            - name: Completion day handover and site security
              description: |-
                ## Purpose
                The day you own an empty house is the day it becomes your responsibility: keys, locks, utilities, meters and insurance all need to change hands at once. A completion checklist means locks are changed, meters read and photographed and the property secure before the first night.

                ## Milestones
                1. Insurance active from completion confirmed.
                2. Locks changed and keys logged on the day.
                3. Meter readings photographed and utilities moved into your name.
                4. Condition photographed room by room as a starting record.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On completion day, locks changed, meters photographed, utilities transferred and a full condition photo set taken."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book a locksmith for completion day"
                - "Photograph every meter reading on arrival"
                - "Move gas, electricity and water into your name the same day"
                - "Take a full room-by-room condition photo set"
            - name: Practical completion and final snagging
              description: |-
                ## Purpose
                Buyers and their surveyors notice the unfinished sealant, sticking door and missing certificate you stopped seeing weeks ago. A formal snagging walk-round with the builder, a written list and a sign-off tied to the retention payment gets the house to sale standard and the paperwork in hand.

                ## Milestones
                1. A room-by-room snag list agreed with the builder.
                2. Every snag fixed and checked.
                3. Electrical, gas, building control and warranty certificates collected.
                4. Retention released only after snags are cleared.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed-off snag list, every completion certificate on file and the retention released only after sign-off."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk every room with the builder and write a numbered snag list"
                - "Collect electrical, gas and building control certificates"
                - "Recheck every snag before releasing the retention"
                - "File certificates and warranties in a pack for the buyer's lawyer"
            - name: Staging and photography day before listing
              description: |-
                ## Purpose
                Online photos decide who books a viewing, and empty rooms photograph as small and cold. Light staging with a few pieces of furniture, a thorough clean, then professional photos and a floor plan on one booked day give the listing its best launch.

                ## Milestones
                1. A staging plan for the key rooms: living room, main bedroom and kitchen.
                2. A thorough clean and garden tidy completed the day before.
                3. Professional photos and a floor plan taken.
                4. Photos approved and listing text checked before launch.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Staging, cleaning, professional photos and a floor plan all completed and approved before the listing goes live."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Decide which rooms to stage and hire or borrow the furniture"
                - "Book a full clean and garden tidy for the day before photos"
                - "Confirm the photographer and floor plan with the selling agent"
                - "Approve the photos and listing text before launch"
            - name: Post-sale profit reconciliation and tax set-aside
              description: |-
                ## Purpose
                A flip is not finished when the sale completes; it is finished when you know what it truly made and the tax money is somewhere safe. Reconciling every cost against the original calculator and moving the estimated tax into a separate account closes the project and teaches the next one.

                ## Milestones
                1. Every cost from purchase to sale totalled from the flip account.
                2. Actual profit compared with the calculator forecast line by line.
                3. Estimated tax moved to a separate account on the day of completion.
                4. Three lessons written down for the next deal.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A reconciliation of actual against forecast profit, with estimated tax moved to a separate account and three written lessons."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total every cost for the property from the flip account and receipts"
                - "Compare actual figures with the original calculator line by line"
                - "Move the estimated tax into a separate account on completion day"
                - "Ask your AI agent to draft a lessons summary from the reconciliation"
            - name: Live-in flip of your own home
              description: |-
                ## Purpose
                Buying a tired house, living in it while renovating and selling a couple of years later is how many homeowners start, and in some countries a main home can qualify for relief from tax on the gain. Planning it as a flip from day one, with a budget, a resale-minded specification and records kept, means the next move is funded by the work rather than just the market.

                ## Milestones
                1. Your accountant's view on how selling your renovated main home would be taxed, recorded.
                2. A works plan phased around living in the house.
                3. A specification chosen for resale buyers, not only for your own taste.
                4. Every renovation cost recorded in the bookkeeping system.

                ## Notes
                Tax relief on a main home usually comes with conditions about genuine residence and the purpose of the purchase. Ask; do not assume.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phased renovation plan for your own home, a resale-minded specification and a recorded accountant view on tax at sale."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your accountant how a renovated main home sale would be taxed"
                - "Phase the works so one bathroom and a kitchen area stay usable"
                - "Plan where the household will sleep and cook during the messiest phases"
                - "Choose finishes with resale buyers in mind"
            - name: First flip alongside a full-time job
              description: |-
                ## Purpose
                Most first flips are done around a job, with site visits squeezed into lunchtimes and Saturdays. Choosing a project with a cosmetic scope, a builder who manages the trades and a fixed weekly time block keeps the flip from consuming your evenings or your employer's patience.

                ## Milestones
                1. A scope limited to work that does not need daily decisions.
                2. A main contractor appointed to coordinate the trades.
                3. A fixed weekly block for site and admin agreed with your household.
                4. A plan for decisions needed in working hours, such as a short daily call with the builder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A first flip running with a contractor-managed cosmetic scope and a weekly time block kept for the whole works period."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Limit the first project's scope to cosmetic and non-structural works"
                - "Agree a ten-minute daily call slot with the builder"
                - "Block Saturday morning for site and paperwork @recurring(weekly:sat)"
                - "Book leave for completion day, key decisions and the snagging visit"
            - name: Joint venture agreement with a flipping partner
              description: |-
                ## Purpose
                Flipping with a friend, relative or partner pairs one person's money with another's time and skills, and falls apart when nobody wrote down who decides what. A written agreement covering contributions, profit split, decision rights, what happens if the money runs out and how either side exits keeps the friendship intact.

                ## Milestones
                1. Each partner's cash, time and skills contribution written down.
                2. Profit split, losses and repayment order agreed.
                3. Decision rights and a deadlock rule agreed.
                4. The agreement reviewed by a lawyer and signed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A signed joint venture agreement covering contributions, profit and loss split, decision rights and exit, reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down what each partner brings in cash, time and skills"
                - "Agree how profit, losses and repayments will be split"
                - "Agree a rule for breaking deadlocks on spending decisions"
                - "Ask a lawyer to review the agreement before anyone signs"
                - "Hold a partner meeting on budget, schedule and cash @recurring(quarterly)"
            - name: Household money guardrails while flipping
              description: |-
                ## Purpose
                When a flip goes over budget it tends to reach for the family savings, then the holiday fund and finally the credit cards. Agreeing with your partner or household, in writing, what money is off limits and what happens if the project needs more protects the people who did not choose the risk.

                ## Milestones
                1. Money that must never go into a flip listed, such as emergency savings and children's accounts.
                2. A maximum top-up from household funds agreed.
                3. A plan for when that top-up is reached: cut scope, sell as is or borrow.
                4. A yearly conversation booked to revisit the guardrails.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written household agreement naming off-limits money, a maximum top-up and the plan if it is reached, agreed by both partners."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the household money that must never go into a flip"
                - "Agree the maximum top-up the household will make to any project"
                - "Write down what happens if that maximum is reached"
                - "Revisit the guardrails with your partner @recurring(yearly)"
            - name: Running two flips a year without overlap failures
              description: |-
                ## Purpose
                Moving from one flip a year to two doubles your exposure while your hours stay the same. A staggered timeline, separate budgets, a builder with capacity and enough cash for both contingencies at once let you scale without the second project starving the first.

                ## Milestones
                1. A staggered timeline showing works on one property while the other is on the market.
                2. Cash for both contingencies available at the same time.
                3. Builder capacity for two jobs confirmed.
                4. Separate budgets and ledgers for each project.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A staggered two-project timeline with both contingencies funded and builder capacity confirmed before the second purchase."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Draw a twelve-month timeline staggering works and sale periods"
                - "Check you can fund both contingencies at the same time"
                - "Ask your builder whether they can run two jobs without slipping"
                - "Set up a separate ledger for the second project"
            - name: Lease extension before reselling a short-lease flat
              description: |-
                ## Purpose
                Flats with short leases, often under 80 or 90 years in leasehold systems, can be hard to mortgage and sell at a steep discount, which is where some flippers find value. Understanding the extension process, cost and timeline before buying, with a specialist valuer and lawyer, decides whether the discount is real.

                ## Milestones
                1. Remaining lease length and ground rent terms confirmed.
                2. A specialist valuation of the extension premium obtained.
                3. Legal costs and timeline estimated, including whether the seller can start the process.
                4. The deal calculator updated with every extension cost and the extra time.

                ## Notes
                Leasehold rules differ greatly between countries and are changing in some. Use a lawyer who specialises in leasehold.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short-lease flat appraised with a specialist premium valuation, legal costs and timeline included in the deal calculator."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the remaining lease length and ground rent from the title"
                - "Get a specialist valuation of the lease extension premium"
                - "Ask a leasehold lawyer for costs and whether the seller can start the claim"
                - "Add the premium, fees and delay to the deal calculator"
            - name: Loft or extension value appraisal
              description: |-
                ## Purpose
                Adding a bedroom or a larger kitchen can lift the price by more than it costs, but only where the street's price ceiling allows it. Appraising an extension or loft conversion against comparables, likely approvals and the extra months it adds tells you whether the new space pays.

                ## Milestones
                1. Price uplift estimated from comparables with and without the extra room.
                2. Build cost priced with an architect or builder.
                3. Planning route and timescale checked.
                4. Extra holding cost from the longer project included, and a go or no-go recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go or no-go on adding space, with uplift from comparables, build cost, approval route and extra holding cost."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find comparables with and without the extra bedroom or space"
                - "Ask an architect or builder for a rough build cost"
                - "Check whether the work needs planning permission or falls under permitted rules"
                - "Add the extra months of holding cost and record a go or no-go"
            - name: Converting a large house into flats
              description: |-
                ## Purpose
                Splitting a large, slow-selling house into two or more flats can create more value than refurbishing it as one home, but it brings planning permission, fire and sound regulations, separate utilities and new legal titles. A feasibility study with an architect and planning consultant before purchase decides whether the conversion is buildable and saleable.

                ## Milestones
                1. Local planning policy on conversions checked, including minimum flat sizes.
                2. A feasibility layout and cost estimate from an architect.
                3. Separate meters, title split and lease set-up costs included.
                4. Sale values for each flat estimated from comparables, and a go or no-go recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A feasibility study with layout, planning view, cost and per-flat sale values, ending in a recorded go or no-go."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Read the local planning policy on converting houses to flats"
                - "Commission a feasibility layout from an architect"
                - "Price separate utilities, title split and leases with your conveyancer"
                - "Value each flat from comparables and record the decision"
            - name: Flipping unmortgageable and non-standard properties
              description: |-
                ## Purpose
                Houses with no kitchen, non-standard construction or serious damp cannot be bought with an ordinary mortgage, which thins the competition and lowers prices. The catch is the exit: your eventual buyer's lender must accept the property, so the flip only works if the works make it mortgageable again.

                ## Milestones
                1. The reason each candidate is unmortgageable identified.
                2. Whether the planned fix makes it mortgageable confirmed with a broker.
                3. Any specialist report lenders require identified, such as a structural engineer's certificate.
                4. Exit assumptions tested against two lenders' criteria.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "For each non-standard candidate, a broker's confirmation that the planned works would make it mortgageable, with required reports identified."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note why each candidate cannot be mortgaged as it stands"
                - "Ask a broker whether the planned works would satisfy mainstream lenders"
                - "Identify the specialist reports lenders will want after the works"
                - "Drop any deal whose exit depends on finding another cash buyer"
---

# Property Flipping

Property flipping means buying a house or flat below its potential, renovating it within a fixed budget and selling it for more than everything cost, and this area is for homeowners and first-time investors who want to do it with numbers rather than hope. It starts with the foundations (capital, a target patch, sold-price comparables, a deal calculator, financing, tax and insurance), then the operating routines for sourcing deals and controlling budget, cash and site progress, the skills of valuing, reading surveys and pricing works, the decisions on scope, builders and selling, the dated moments from offer to completed sale, variants for live-in flips, flipping around a job or with a partner, and finally specialist work such as conversions, lease extensions and unmortgageable stock.

The rhythms are a twice-weekly deal scan, weekly budget and site checks while works run, monthly updates to comparables, market indicators, cash runway and holding costs, a quarterly performance review and yearly tax and insurance check-ins. The Metrics log, Purchase decision, Vendor, Risk register and Operational checklist templates pair with the comparables table, the financing choice, builder and agent selection, due diligence and completion day. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
