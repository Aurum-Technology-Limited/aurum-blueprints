---
id: personal-finance.buying-a-car-wisely
name: Buying a Car Wisely
description: "A car chosen against a written brief and budget, checked, test driven and negotiated on the total price, with add-ons declined and the paperwork kept after you buy."
category: personal
version: 1.0.0
tags: [personal-finance, buying-a-car-wisely, everyone, car-buying, used-cars, negotiation, vehicle-checks]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Buying a Car Wisely
          description: "Deciding new versus used, researching running costs, negotiating price and avoiding expensive add-ons when buying a car."
          projects:
            - name: Car needs brief before you browse
              description: |-
                ## Purpose
                Showroom shine and online photos pull attention towards cars that do not fit the life you actually drive. Writing down your weekly mileage, typical passengers, parking space, towing or load needs and must-have safety features before you look at a single listing gives you a filter every later choice can be checked against. It also makes it far easier to say no to the upgrade a salesperson suggests.

                ## Milestones
                1. Your typical week of trips written down, with an estimate of annual mileage.
                2. Seats, boot space, parking width and any towing or roof-load needs recorded as numbers.
                3. Five must-haves and five nice-to-haves listed separately.
                4. The brief agreed with anyone else who will drive or pay for the car.

                ## Notes
                Keep the must-have list short. A brief with fifteen must-haves rules out every car within budget and then gets quietly ignored.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page brief with annual mileage, space needs and five must-haves, agreed with every other driver of the car."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down last week's trips and estimate your annual mileage"
                - "Measure the width of your parking space or garage door"
                - "List five must-haves and five nice-to-haves for the next car"
                - "Talk the brief through with anyone else who will drive the car"
            - name: Total budget ceiling for the purchase
              description: |-
                ## Purpose
                Shopping by monthly payment hides the real price, which is how a sensible budget turns into a car costing a third more than planned. Setting one ceiling for the full purchase price, plus a separate limit for what the car may cost each month to insure, fuel and maintain, keeps the search honest. Decide both at home with your accounts open, not at a dealership.

                ## Milestones
                1. Cash available for the purchase confirmed, with your emergency buffer left untouched.
                2. A maximum purchase price written down as a single figure, including any trade-in value.
                3. A monthly running cost limit set alongside it.
                4. Both figures shared with anyone buying with you.

                ## Notes
                If the ceiling depends on borrowing, the Car Loan and Finance area covers comparing those offers in detail. Here the job is only to fix the number.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written maximum purchase price and a monthly running cost limit, both set before any contact with a seller."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your savings balance and ring-fence your emergency buffer first"
                - "Write down the most you will pay for the car as one total figure"
                - "Set a monthly limit for insurance, fuel, tax and servicing combined"
                - "Tell anyone buying with you what the two figures are"
            - name: Keep, repair or replace the current car
              description: |-
                ## Purpose
                A large repair quote often triggers a rushed purchase, yet paying for one big repair is frequently cheaper than the first year of depreciation on a replacement. Comparing the repair bill and the next two years of expected work against the cost of switching settles whether you need to buy at all, and when.

                ## Milestones
                1. A written repair quote, ideally from two garages, for any known fault.
                2. Known costs for the next 24 months listed, such as tyres, brakes, cambelt or battery.
                3. The current car's realistic value noted as it stands and after repair.
                4. A decision recorded: keep and repair, keep until a set date, or replace now.

                ## Notes
                Skip this project if you have no car yet. If you are buying because the old car failed its roadworthiness test, ask for the failure sheet in writing first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded keep, repair or replace decision based on at least one written repair quote and a two-year list of expected costs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your garage for a written quote on any known fault"
                - "Get a second quote from another garage for any large repair"
                - "List the maintenance jobs likely to fall due in the next two years"
                - "Note what the car is worth now in its current state"
                - "Record your decision and the date you will revisit it"
            - name: New, nearly new or used decision
              description: |-
                ## Purpose
                Most new cars lose a large share of their value in the first three years, while a three- to five-year-old car has taken most of that hit but may need more maintenance. Comparing one realistic option of each age for the same model, on price, warranty left and expected value loss, shows where your money buys the most car.

                ## Milestones
                1. The same model priced new, at about one year old and at three to five years old.
                2. Remaining manufacturer warranty noted for each age.
                3. Likely value after three more years of ownership noted for each.
                4. An age band chosen and written into your needs brief.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An age band for the next car chosen and recorded, based on prices and warranty left for one model at three different ages."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick one model from your brief to use for the comparison"
                - "Look up asking prices for it new, nearly new and five years old"
                - "Note how much manufacturer warranty each age has left"
                - "Ask the agent to lay the three options out in one comparison table"
                - "Write the chosen age band into your needs brief"
            - name: Scored shortlist of three models
              description: |-
                ## Purpose
                Comparing a dozen models in your head usually ends with the one you saw last. Scoring three to five candidates against the same criteria from your needs brief, with weights you set before looking, gives a ranking you can defend and stops a charming test drive from overriding the numbers.

                ## Milestones
                1. Six to eight criteria taken from the needs brief, each with a weight.
                2. Three to five models scored on reliability, safety rating, space and price.
                3. A ranked shortlist of three, with the reason each is there.
                4. Models that failed a must-have removed in writing.

                ## Notes
                Start from the **Purchase decision** template. Use independent crash test results and owner reliability surveys rather than manufacturer brochures.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked shortlist of three models, each scored against weighted criteria taken from the needs brief."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose six to eight scoring criteria from your needs brief"
                - "Look up independent crash test ratings and owner reliability surveys"
                - "Score each candidate model and rank the top three"
                - "Rescore the shortlist if prices or quotes shift noticeably @recurring(monthly:25)"
            - name: Five-year cost of ownership estimate per model
              description: |-
                ## Purpose
                Two cars with the same sticker price can differ by thousands over five years once depreciation, fuel, insurance, tax and servicing are counted. Building a simple five-year estimate for each shortlisted model, before you fall for one, turns running costs from an afterthought into part of the price.

                ## Milestones
                1. A sheet with rows for depreciation, fuel or charging, insurance, road tax, servicing, tyres and likely repairs.
                2. Figures entered for at least three models using your own annual mileage.
                3. A five-year total and a monthly figure for each model.
                4. The cheapest-to-own model noted, even if it is not your favourite.

                ## Notes
                Official fuel economy figures are usually better than real driving achieves. Owner forums and fuel logging apps give a more honest number.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A five-year cost sheet covering at least three models, each with a total and a monthly figure based on your own mileage."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a sheet with one column per model and one row per cost"
                - "Enter real-world fuel or charging figures from owner reports"
                - "Add road tax and typical servicing costs for each model"
                - "Work out the five-year total and monthly cost for each model"
            - name: Insurance quotes on each shortlisted model
              description: |-
                ## Purpose
                Insurance can swing by hundreds a year between models that look alike, especially for young drivers or in some postcodes, and finding out after buying is too late. Running identical quotes on every shortlisted car, with the same cover, excess and mileage, puts a real figure in the cost sheet rather than a guess.

                ## Milestones
                1. One set of quote details fixed: cover level, voluntary excess, mileage, parking and named drivers.
                2. Quotes for every shortlisted model from at least two comparison sources.
                3. The cheapest realistic quote for each model entered in the five-year cost sheet.
                4. Any model with a surprisingly high quote flagged or dropped.

                ## Notes
                Quotes usually stay valid for a few weeks only. Choosing the actual policy once the car is bought belongs in the Insurance Coverage Review area.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Comparable insurance quotes for every shortlisted model, using identical cover details, entered in the cost sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the cover, excess and mileage you will use for every quote"
                - "Run quotes for each shortlisted model on two comparison sites"
                - "Enter the lowest realistic quote per model in the cost sheet"
                - "Rerun quotes for the top two models while the search continues @recurring(monthly:5)"
            - name: Payment route settled before negotiating
              description: |-
                ## Purpose
                Dealers make part of their profit on finance, so a buyer who has not decided how to pay can be steered into a deal where a discount on the price is clawed back in the interest. Deciding in advance whether you will pay from savings, with a pre-arranged loan, or with dealer finance only if it beats your benchmark keeps price and payment as two separate conversations.

                ## Milestones
                1. The amount coming from savings confirmed and held where you can pay from it quickly.
                2. Any borrowing need worked out as a figure, with an outside benchmark rate noted.
                3. A rule written down: agree the price first, discuss payment only afterwards.
                4. How the money will move on collection day confirmed, including daily bank limits.

                ## Notes
                Comparing loans, hire purchase, PCP and leasing in depth belongs in the Car Loan and Finance area. Many banks cap instant transfers per day, so check before collection day.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded payment plan naming the cash amount, any borrowing benchmark and how funds will be transferred on collection day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm how much of the price will come from savings"
                - "Note an outside loan rate to benchmark any dealer finance offer"
                - "Check your bank's daily transfer limit and how to raise it"
                - "Write the price-first rule at the top of your negotiation notes"
            - name: Car purchase paper trail folder
              description: |-
                ## Purpose
                Disputes over a faulty car, a missing service history or a mis-sold add-on are won with paperwork: the advert, the invoice, the emails and what was promised. Setting up one folder before you start, and saving each item as it arrives, means you can prove what you were sold if something goes wrong months later.

                ## Milestones
                1. One digital folder with sections for adverts, quotes, inspections, contract and handover.
                2. A screenshot or PDF of every serious advert saved before viewing.
                3. Signed invoice, registration document and warranty terms stored after purchase.
                4. Service history and number of keys recorded as received on the day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder holding the advert, invoice, contract, warranty terms and history check for the car you bought."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a folder with sections for adverts, quotes, inspection and contract"
                - "Save a PDF of each advert before you go to view the car"
                - "Scan the signed invoice and registration document after collection"
                - "Check the folder still holds the warranty terms and invoice @recurring(yearly)"
            - name: Weekly listings watch for target models
              description: |-
                ## Purpose
                Good-value used cars often sell within days, and the buyer who sees them first with a checklist ready usually gets them. Saved searches with tight filters, checked once a week at a set time, keep you in the market without scrolling listings every evening.

                ## Milestones
                1. Saved searches running on two or three listing sites with your budget, age band and mileage limits.
                2. Alerts switched on so new matches arrive by email or app.
                3. A weekly slot when new listings are reviewed and any worth a call are contacted.
                4. Filters adjusted when they prove too wide or too narrow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Saved searches with alerts running on at least two sites and reviewed in a weekly slot until the car is bought."
                cadence: rolling
              tasks:
                - "Set up saved searches on two listing sites with your budget and age filters"
                - "Turn on alerts for new matching listings"
                - "Review new listings and call about any that fit the brief @recurring(weekly:sat)"
                - "Tighten or widen the saved search filters @recurring(monthly:3)"
            - name: Market price log for your target model
              description: |-
                ## Purpose
                Knowing what a fair price is for a given year, mileage and trim is the strongest card in any negotiation. Logging asking prices, and sold prices where you can find them, for your chosen model builds a picture of the market that no single valuation tool matches.

                ## Milestones
                1. A log with columns for year, mileage, trim, seller type, asking price and date.
                2. At least twenty comparable listings recorded.
                3. A fair price range for your target spec worked out from the log.
                4. Price drops and quick sales noted to show how the market is moving.

                ## Notes
                Start from the **Metrics log** template. Dealer prices usually include preparation and a short warranty, so compare like with like.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A price log of at least twenty comparable listings with a written fair price range for the target spec."
                cadence: rolling
              tasks:
                - "Create a price log with year, mileage, trim, seller and price columns"
                - "Record ten comparable listings for your target model today"
                - "Add new comparable listings and any price drops @recurring(monthly:12)"
                - "Write down the fair price range the log points to"
            - name: Monthly search budget and timeline check
              description: |-
                ## Purpose
                Car searches that drag on for months drift: the budget creeps up, the brief gets looser and the old car's problems get worse. A short monthly check of the ceiling, the timeline and whether the brief still holds keeps the search pointed at the same target, or changes it on purpose.

                ## Milestones
                1. A target purchase month written down.
                2. The budget ceiling and cash available rechecked each month.
                3. Any change to the brief or ceiling recorded with the reason.
                4. The search closed with a purchase or paused deliberately.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A check recorded in each month of the search, with every change to budget or brief written down with its reason."
                cadence: rolling
              tasks:
                - "Write down the month you aim to buy by"
                - "Recheck the ceiling, cash available and brief @recurring(monthly:20)"
                - "Note any change to the plan and why it changed"
                - "Close or pause the search in writing when the time comes"
            - name: Seasonal buying calendar
              description: |-
                ## Purpose
                Car prices and dealer flexibility move with the calendar: quarter-end sales targets, new registration plate periods, model-year changeovers and the slow winter months. Marking these dates for your market lets you time viewing and negotiating for when sellers most need a deal.

                ## Milestones
                1. Dealer quarter-end months and new registration periods for your country noted.
                2. The next facelift or model-year change for each shortlisted model found.
                3. Quieter months for used car prices in your area marked.
                4. Your purchase window lined up with at least one of these points.

                ## Notes
                Where new registration plates arrive on set dates, a wave of part-exchange stock usually reaches forecourts in the weeks after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A calendar showing quarter-ends, registration periods and model changeovers, with the purchase window placed on one of them."
                cadence: cyclic
              tasks:
                - "Mark dealer quarter-end months in your calendar"
                - "Find when your shortlisted models get their next facelift or model year"
                - "Choose a purchase window that falls near one of these dates"
                - "Review the calendar against current market news @recurring(quarterly)"
            - name: Recall and safety notice watch
              description: |-
                ## Purpose
                Recalls are free to fix, yet many used cars change hands with open recalls never done. Checking the official recall register for each car you view, and later for the car you bought, catches safety work the manufacturer will do at no cost.

                ## Milestones
                1. The official recall lookup for your country bookmarked.
                2. Open recalls checked for each specific car before viewing it.
                3. Any open recall raised with the seller and booked in before or after purchase.
                4. The bought car checked regularly for new notices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every car viewed, and the car bought, checked on the official recall register, with any open recall booked for repair."
                cadence: rolling
              tasks:
                - "Bookmark your country's official vehicle recall lookup"
                - "Check each car's registration for open recalls before viewing"
                - "Ask the seller for proof that any recall work was done"
                - "Check the car you bought for new recalls @recurring(quarterly)"
                - "Read the manufacturer's safety bulletins for your model @recurring(yearly)"
            - name: Seller contact and promise log
              description: |-
                ## Purpose
                Salespeople promise things on the phone, a second key, a fresh service, new tyres, that are forgotten by collection day. Logging every call, email and quote with dates and names, and asking for each promise in writing, gives you a record to point to and stops two staff members giving you different answers.

                ## Milestones
                1. A log with date, seller, contact name, car and what was said.
                2. Every verbal promise followed by an email asking for confirmation.
                3. Written quotes saved with their expiry dates.
                4. Open promises checked off before collection.

                ## Notes
                Start from the **Meeting notes** template for longer conversations.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A contact log listing every seller conversation, with each verbal promise confirmed by email before collection."
                cadence: rolling
              tasks:
                - "Start a log with date, seller, contact, car and notes columns"
                - "Email each seller to confirm any promise made on the phone"
                - "Review open promises and chase missing replies @recurring(weekly:wed)"
                - "Tick off each promise as it is delivered"
            - name: Warranty and first-year paperwork calendar
              description: |-
                ## Purpose
                The first year after buying holds most of the dates that protect you: the window for rejecting a faulty car, warranty claims, the first service that keeps the warranty valid, and registration and tax renewals. Putting them all in one calendar on collection day means none of them slips past.

                ## Milestones
                1. Consumer rights windows for faults after purchase entered with dates.
                2. Warranty start and end dates, and the service intervals that keep it valid, in the calendar.
                3. Road tax, registration and roadworthiness test due dates entered.
                4. A reminder set a month before the warranty ends to report any faults.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A calendar holding rights windows, warranty end, first service and tax dates for the bought car, set up on collection day."
                cadence: rolling
              tasks:
                - "Add the rights windows for faults to your calendar from the purchase date"
                - "Enter the warranty end date and its required service interval"
                - "Add road tax and roadworthiness test due dates"
                - "Confirm the service record was updated after the annual service @recurring(yearly)"
                - "List any niggles to report a month before the warranty ends @recurring(yearly)"
            - name: Annual next-car timing review
              description: |-
                ## Purpose
                Replacing a car in a planned year, rather than the week it breaks, gives you time to save, research and buy in a good season. A yearly look at the current car's age, mileage, test advisories and warranty position sets the year you expect to start the next search.

                ## Milestones
                1. The current car's age, mileage and last test advisories noted.
                2. An expected replacement year written down.
                3. Cash needed by then estimated from today's prices for your likely next model.
                4. The next search start date placed in the calendar.

                ## Notes
                This is about timing the next purchase. Tracking what the current car costs month by month belongs in the Car Running Costs area.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An expected replacement year and search start date recorded each year, with an estimate of the cash needed."
                cadence: cyclic
              tasks:
                - "Note the current car's age, mileage and latest test advisories"
                - "Write down the year you expect to replace it"
                - "Estimate today's price for the model you would likely buy next"
                - "Revisit the replacement year after the annual test @recurring(yearly)"
            - name: Reading a vehicle history check report
              description: |-
                ## Purpose
                A paid history check is the cheapest protection in used car buying: it reveals outstanding finance, insurance write-off categories, stolen markers, mileage discrepancies and number plate changes. Learning to read one properly, and what each warning means, takes an evening and can stop you buying a car a lender still has a claim on.

                ## Milestones
                1. A paid history check provider chosen, with what it covers listed.
                2. The finance, write-off, stolen and mileage sections understood.
                3. A full report read end to end for a car you are considering.
                4. Your rule for which warnings end a purchase written down.

                ## Notes
                Free checks often show only basic details. In many countries a lender can reclaim a car with finance still owed, so a check that covers finance is worth paying for.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A paid history check read for at least one candidate car, with a written list of the warnings that end a purchase."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare two paid history check providers and what each includes"
                - "Run a check on one car you are seriously considering"
                - "Read each section and note what every warning means"
                - "Write down which results mean you walk away"
            - name: How depreciation shapes the right age to buy
              description: |-
                ## Purpose
                Depreciation is usually the largest single cost of owning a car in its first few years, larger than fuel or insurance. Learning how fast your shortlisted models lose value, and which ones hold it, shows whether a slightly older or less fashionable car is the better deal.

                ## Milestones
                1. Typical value loss for each shortlisted model over years one to five found.
                2. Models that hold value well and those that fall fast identified.
                3. The effect of mileage, colour and trim on resale understood.
                4. Your target age band adjusted if the figures point elsewhere.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five-year value loss noted for each shortlisted model, with any change to your target age band written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up typical five-year value loss for each shortlisted model"
                - "Compare asking prices for the same model at one, three and five years"
                - "Note which colours and trims sell slowest second hand"
                - "Adjust your target age band if the figures suggest it"
            - name: Used car walkaround inspection skills
              description: |-
                ## Purpose
                Twenty minutes of methodical checking catches most of the faults that turn a bargain into a money pit: mismatched paint, uneven tyre wear, damp carpets, warning lights and a rattle on a cold start. Practising on a friend's car, or a few cars you have no plan to buy, makes it a routine rather than a nervous guess.

                ## Milestones
                1. A printed walkaround checklist covering bodywork, tyres, fluids, interior, electrics and cold start.
                2. The checklist practised on at least two cars before a real viewing.
                3. Common faults for your shortlisted models added to the checklist.
                4. A habit of asking sellers not to warm the engine before you arrive.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A model-specific walkaround checklist, practised on at least two cars before the first serious viewing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Print a used car walkaround checklist from a motoring organisation"
                - "Add known faults for your shortlisted models from owner forums"
                - "Practise the checklist on a friend's car"
                - "Ask every seller not to start the engine before you arrive"
            - name: Test drive technique that finds faults
              description: |-
                ## Purpose
                Most test drives are ten minutes on smooth roads with the radio on, which hides exactly what you need to hear. A planned route covering a cold start, rough surfaces, a fast road, hill starts and parking, with the stereo off, shows how the car behaves and whether you can live with it.

                ## Milestones
                1. A route of at least thirty minutes planned with mixed road types.
                2. A list of checks for brakes, steering, gears, clutch, noises and driver aids.
                3. Seating position, visibility and the fit of your own bulky items tested.
                4. Notes written straight after each drive, before any talk of price.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written test route and checklist used on every car driven, with notes recorded straight after each drive."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Plan a thirty-minute test route with rough roads and a fast stretch"
                - "Write a checklist for brakes, steering, gears and noises"
                - "Take any bulky items you carry often to test the fit"
                - "Write your notes in the car park before discussing price"
            - name: Consumer rights when buying a car
              description: |-
                ## Purpose
                Rights after buying a car differ sharply between a dealer and a private seller, and between a car described accurately and one that was not. Knowing in outline what your country's consumer law gives you, and how long you have to act, tells you what to get in writing and when to move fast if a fault appears.

                ## Milestones
                1. The official consumer guidance on car purchases in your country read.
                2. Differences between dealer, private and auction purchases noted.
                3. Time limits for rejecting a faulty car or asking for a repair written down.
                4. The consumer advice service's contact details saved.

                ## Notes
                This organises official guidance; it is not legal advice. For a real dispute, contact your consumer advice service or a legal professional.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of buyer rights by seller type, with time limits and the consumer advice contact, saved in the purchase folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your government's consumer guidance on buying a used car"
                - "Note the rights for dealer, private and auction sales side by side"
                - "Write down the time limits for reporting a fault"
                - "Save the consumer advice helpline number in your phone"
            - name: How dealer add-ons are priced and sold
              description: |-
                ## Purpose
                Paint protection, alloy wheel cover, tyre insurance, GAP insurance, extended warranties and tracker subscriptions are where many dealers make their margin, often shown as a small monthly figure once you are tired and committed. Learning what each covers, what it costs elsewhere and which you already have through other policies means you can decline in one sentence.

                ## Milestones
                1. Each common add-on listed with what it covers and a typical dealer price.
                2. Outside prices found for GAP insurance and an extended warranty.
                3. Any cover you already hold through home, card or breakdown policies noted.
                4. A written list of the add-ons you will decline.

                ## Notes
                Add-ons are often presented in a separate office after the price is agreed. Ask for the add-on menu before you sit down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written add-on list with outside prices and a keep or decline decision against each, taken to the dealership."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the add-ons dealers commonly offer and what each covers"
                - "Get outside quotes for GAP insurance and an extended warranty"
                - "Check which cover you already hold through other policies"
                - "Ask the agent to draft a short, polite script for declining add-ons"
            - name: Negotiating on the drive-away price
              description: |-
                ## Purpose
                The number that matters is the total you pay to drive away, including fees, preparation charges and anything added on the order form, not the monthly payment or the discount off list price. Practising one clear approach, with written offers to several sellers and a walk-away figure you hold to, makes negotiation calmer and usually cheaper.

                ## Milestones
                1. Opening offer, target price and walk-away figure written down from the price log.
                2. A short email asking for a fully itemised drive-away price.
                3. The conversation practised aloud with a friend at least once.
                4. Price, part-exchange and payment kept as three separate conversations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Opening, target and walk-away figures written down and an itemised price request sent to at least two sellers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set opening, target and walk-away prices from your price log"
                - "Write an email asking for an itemised drive-away price"
                - "Practise the conversation aloud with a friend"
                - "Send the itemised price request to at least two sellers"
            - name: Valuing your current car accurately
              description: |-
                ## Purpose
                Dealers often show a generous discount on the new car while quietly marking down your trade-in, so the deal looks better than it is. Getting independent valuations and one firm cash offer before you negotiate tells you exactly what your old car is worth by each route.

                ## Milestones
                1. Mileage, service history and faults on the current car written down honestly.
                2. Trade-in and private sale values recorded from at least two valuation guides.
                3. One firm offer from an instant car buying service obtained.
                4. A minimum acceptable part-exchange figure set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two guide valuations and one firm cash offer recorded, with a minimum part-exchange figure set before negotiating."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the car's mileage, history and any faults honestly"
                - "Record trade-in and private sale values from two valuation guides"
                - "Get one firm cash offer from a car buying service"
                - "Refresh the valuation while the search continues @recurring(monthly:18)"
            - name: Independent pre-purchase inspection
              description: |-
                ## Purpose
                For a used car worth more than a few thousand, a paid inspection by an independent engineer costs a fraction of the repairs it can reveal, and a seller who refuses one is telling you something. Setting your threshold for paying for one, and lining up a provider in advance, means you can book within a day when the right car appears.

                ## Milestones
                1. A price above which you always pay for an inspection.
                2. Two inspection providers compared on what they check and what they cost.
                3. One provider chosen with booking details saved.
                4. A plan to use the findings to renegotiate or walk away.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An inspection price threshold set and a provider chosen, ready to book within a day of finding the car."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set the price above which you will always pay for an inspection"
                - "Compare two inspection services on checks covered and cost"
                - "Save the chosen provider's booking details"
                - "Ask each seller early whether they allow an independent inspection"
            - name: Extended warranty or a self-funded repair pot
              description: |-
                ## Purpose
                Extended warranties are sold on fear of a big repair bill, but many exclude wear and tear, cap claims below the car's value or duplicate cover the car still has. Comparing a policy's real terms with setting the same money aside in a repair pot shows which protects you better for this car at this age.

                ## Milestones
                1. Remaining manufacturer warranty on the chosen car confirmed.
                2. Two warranty policies compared on claim limit, exclusions and excess.
                3. The premium compared with putting the same money into a repair pot.
                4. A decision recorded with the reasoning.

                ## Notes
                Check owner reliability surveys for your model. A car with a strong record often makes self-insuring the better bet.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on extended warranty, with two policies compared on claim limit, exclusions and excess."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm how much manufacturer warranty the car has left"
                - "Compare two policies on claim limit, exclusions and excess"
                - "Work out what the premium would build in a repair pot over three years"
                - "Record your decision and the reason for it"
            - name: Part-exchange or selling the old car privately
              description: |-
                ## Purpose
                Selling privately usually gets more money than a part-exchange, but brings viewings, time-wasters, payment risk and possibly a gap without a car. Putting a number on the difference, and on the hassle, shows whether the extra is worth it for this particular car.

                ## Milestones
                1. The part-exchange offer and expected private sale price set side by side.
                2. Time and costs of a private sale estimated, including advertising and a valet.
                3. Any finance on the old car settled or planned for in the sale.
                4. A route chosen and a target sale date set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A part-exchange or private sale decision recorded, with the price difference and estimated hours compared."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the part-exchange offer next to the likely private sale price"
                - "Estimate the cost and hours a private sale would take"
                - "Check whether any finance on the old car must be settled first"
                - "Choose your route and set a date to sell"
            - name: Dealer, private seller, online retailer or auction
              description: |-
                ## Purpose
                Each route trades price against protection: franchised dealers charge most and offer the most comeback, private sellers are cheapest with the fewest rights, online retailers deliver with a return window, and auctions are fast and risky. Choosing your route deliberately, for your budget and confidence, narrows the search and sets the checks you need.

                ## Milestones
                1. Typical price, rights and warranty for each route noted at your budget.
                2. Your confidence with inspections honestly assessed.
                3. One or two routes chosen.
                4. Checks specific to the chosen routes added to your walkaround list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One or two buying routes chosen, with the price, rights and checks of each written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare prices for one car from a dealer, a private seller and an online retailer"
                - "Note the return window and warranty each route offers"
                - "Choose the one or two routes you will use"
                - "Add route-specific checks to your inspection list"
            - name: Petrol, hybrid or electric for your driving
              description: |-
                ## Purpose
                Electric and hybrid cars change the cost picture: a higher purchase price against cheaper energy and servicing, with home charging, battery warranty and tariff choice deciding whether the sums work. Working this out for your own mileage and parking before shortlisting avoids buying on fuel savings your driving cannot deliver.

                ## Milestones
                1. Home or workplace charging access confirmed or ruled out.
                2. Cost per mile on a home tariff, public charging and petrol compared for your mileage.
                3. Battery warranty length and capacity guarantee understood for one model.
                4. A fuel type chosen and added to the needs brief.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cost-per-mile comparison for home charging, public charging and petrol, with the chosen fuel type written into the brief."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether you can charge at home or at work"
                - "Work out cost per mile at home, on public chargers and on petrol"
                - "Read the battery warranty terms for one shortlisted model"
                - "Add the chosen fuel type to your needs brief"
            - name: Optional extras that are worth paying for
              description: |-
                ## Purpose
                On a new or nearly new car, factory options can add a fifth to the price, and only a few, such as certain safety packs or a tow bar, add value at resale or change daily life. Sorting the options list into must, maybe and no before ordering or comparing used specs stops you paying for bigger wheels or a sound system you will not notice.

                ## Milestones
                1. The options list for your chosen model sorted into must, maybe and no.
                2. Each must-have checked for its effect on insurance, tyres and resale.
                3. Used listings filtered for the spec you actually want.
                4. A spec sheet saved for quotes and ordering.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A spec sheet for the chosen model with every factory option marked must, maybe or no."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the options list for your chosen model and trim"
                - "Mark each option as must, maybe or no"
                - "Check whether larger wheels raise tyre and insurance costs"
                - "Save the final spec sheet in the purchase folder"
            - name: Ex-lease, ex-rental and approved used compared
              description: |-
                ## Purpose
                Many one- to three-year-old cars come from lease fleets, rental fleets or manufacturer approved used schemes, and they differ in how they were driven, how much history comes with them and what warranty they carry. Knowing which sources you will accept, and what an approved used badge adds to the price, sharpens both search and negotiation.

                ## Milestones
                1. The main sources of nearly new stock in your market listed.
                2. Approved used warranty, inspection and price premium noted for one model.
                3. Questions about former use and keeper history written down.
                4. Your accepted sources added to the needs brief.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Accepted nearly new sources recorded in the brief, with the approved used premium noted for one model."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find out which nearly new stock sources exist for your model"
                - "Price the same car as approved used and as a standard dealer sale"
                - "Write questions to ask about former fleet or rental use"
                - "Record which sources you will accept in your brief"
            - name: Factory order or a car from stock
              description: |-
                ## Purpose
                Factory orders give exactly the spec you want but can take months and leave little room on price, while stock cars, including pre-registered and demonstrator cars, can be cheaper and ready now. Comparing both for your chosen model, with delivery dates and discounts in writing, tells you what waiting is actually worth.

                ## Milestones
                1. A factory order quote with an estimated delivery date.
                2. Stock, pre-registered and demonstrator alternatives found with their mileage and spec.
                3. The price gap weighed against extra keepers or warranty already used.
                4. A choice made and recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a factory order and at least two stock or pre-registered cars, with the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask for a factory order quote with an estimated delivery date"
                - "Search for stock, pre-registered and demonstrator cars in your spec"
                - "Check how much warranty a pre-registered car has already used"
                - "Record which option you chose and the price gap"
            - name: Dealership negotiation meeting
              description: |-
                ## Purpose
                The sales meeting is designed to be long, friendly and full of small decisions, which is why buyers agree to things they planned to refuse. Going in with your price log, walk-away figure, add-on refusal list and payment plan on one page, and a set time to leave, keeps the meeting to the deal you came for.

                ## Milestones
                1. A one-page brief with target price, walk-away figure, part-exchange minimum and add-ons to decline.
                2. An itemised drive-away price obtained in writing.
                3. Every figure on the order form checked against the agreed price before signing.
                4. The meeting ended with a deal or a polite walk-out, on your timetable.

                ## Notes
                Start from the **Meeting notes** template. Take someone with you whose only job is to watch the numbers.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An itemised written price obtained and every order form line checked against it before any signature."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print one page with your target, walk-away and part-exchange figures"
                - "Ask a friend to come along and watch the numbers"
                - "Ask for the itemised drive-away price in writing"
                - "Check every line of the order form before signing"
            - name: Private sale viewing and payment safety
              description: |-
                ## Purpose
                Private sales attract scams: cloned cars with stolen identities, sellers who are not the keeper, fake escrow sites and deposits taken for cars that do not exist. Viewing at the address on the registration document, matching identification numbers and paying only by traceable transfer once you hold the car protects both your money and your safety.

                ## Milestones
                1. Viewing booked at the registered keeper's address shown on the document.
                2. Vehicle identification number matched on the car, the document and the history report.
                3. A paid history check run before any money changes hands.
                4. Payment made by bank transfer at handover, never as a deposit to hold the car.

                ## Notes
                Take someone with you, and confirm you are insured before any test drive. Walk away from any seller who pushes for a deposit or delivery by courier.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every private purchase made after matching identification numbers, a paid history check and payment by transfer at handover."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the seller to confirm the address on the registration document"
                - "Match the identification number on the car, document and history check"
                - "Confirm your insurance covers a test drive in someone else's car"
                - "Pay only by bank transfer once you have the car and its keys"
            - name: Online car delivery and return window
              description: |-
                ## Purpose
                Online car retailers deliver to your door and usually offer a return period, but the clock starts on delivery and return conditions often cap the mileage. Inspecting the car fully at handover and driving your usual routes in the first days lets you use that window properly instead of discovering a fault after it closes.

                ## Milestones
                1. The return period, mileage limit and return costs noted before ordering.
                2. The car inspected at delivery, with any damage photographed and written on the delivery note.
                3. The car driven on your usual trips within the mileage limit.
                4. A keep or return decision made before the window closes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Delivery inspection photos saved and a keep or return decision made inside the retailer's return window."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the return policy and mileage limit before ordering"
                - "Photograph the car on the driveway before signing for it"
                - "Drive your usual routes within the first few days"
                - "Decide to keep or return the car before the window closes"
            - name: Collection day handover checklist
              description: |-
                ## Purpose
                Collection day is the last moment you hold real bargaining power: once the car leaves the forecourt, chasing a missing key or an undone repair gets harder. A checklist covering condition, documents, keys and the money transfer, worked through calmly before you sign the delivery note, catches problems while the seller is still keen.

                ## Milestones
                1. The car inspected in daylight for damage, tyres and the agreed work.
                2. Both keys, service history, handbook and registration document received.
                3. Any agreed extras or repairs confirmed as done.
                4. Payment made by a traceable method and the receipt saved.

                ## Notes
                Start from the **Operational checklist** template. Do not sign to say the car was accepted in perfect condition unless you have checked it.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Handover checklist completed before signing, with keys, documents and agreed work confirmed and the payment receipt saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book collection in daylight with time to inspect the car"
                - "Check the agreed repairs and extras against the order form"
                - "Count the keys and collect every document before signing"
                - "Pay by a traceable method and keep the receipt"
            - name: First thirty days with the new car
              description: |-
                ## Purpose
                Early faults, missing paperwork and registration mistakes tend to show up in the first month, which is also when rights to reject or demand a repair are strongest in many countries. A planned first month, driving it in all conditions and checking every document, means anything wrong is reported in time.

                ## Milestones
                1. Registration, tax and insurance confirmed in your name.
                2. The car driven on your usual trips, with any fault noted and dated.
                3. Any fault reported to the seller in writing within the rights window.
                4. Insurance and any automatic payments on the replaced car cancelled.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Registration and insurance confirmed in your name, and any fault reported in writing, within thirty days of collection."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the registration change has been processed"
                - "Drive your usual routes and note any fault with the date"
                - "Email the seller about any fault straight away"
                - "Cancel insurance and payments on the car you replaced"
            - name: Rejecting or getting a faulty car repaired
              description: |-
                ## Purpose
                Serious faults weeks after purchase are stressful, and sellers sometimes offer a quick patch that runs the clock down on your stronger rights. Acting promptly in writing, with evidence and a clear request, keeps your options open and gives a consumer advice service or ombudsman something to work with if the seller stalls.

                ## Milestones
                1. The fault described in writing with dates, photos and an independent garage report.
                2. A written request sent to the seller naming the remedy you want: repair, replacement or rejection.
                3. Every reply and repair attempt logged with dates.
                4. An escalation route identified, such as a consumer advice service, ombudsman or small claims process.

                ## Notes
                This organises the process; it is not legal advice. Check official guidance or speak to a legal adviser about your own case.
              priority: high
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written complaint with evidence sent to the seller, each reply logged, and an escalation route identified."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down when the fault started and photograph it"
                - "Get an independent garage to report on the fault in writing"
                - "Send the seller a written request naming the remedy you want"
                - "Look up the motor ombudsman or consumer service for your country"
            - name: First car for a new driver
              description: |-
                ## Purpose
                New drivers face the highest insurance costs, and the choice of car can halve or double the quote. Picking a small, low insurance group car with good safety ratings, and pricing insurance before choosing a model, keeps the first year affordable while confidence builds.

                ## Milestones
                1. Insurance quoted on five small, low-group models before any viewing.
                2. A safety rating minimum and engine size limit set.
                3. Telematics and standard policies compared for a new driver.
                4. A car bought that fits both the budget and the insurance quote.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A first car bought whose insurance was quoted before viewing and fits within the agreed total budget."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get insurance quotes on five small cars before viewing any"
                - "Set a limit on engine size and insurance group"
                - "Compare telematics and standard policies for new drivers"
                - "Bring an experienced driver to every viewing"
            - name: Helping a teenager or student buy a car
              description: |-
                ## Purpose
                Parents and relatives often end up paying, inspecting or insuring, and good intentions can turn into a car the young driver cannot afford to run. Agreeing who pays for what, the budget and how running costs will be covered before the search keeps the car a gift rather than an ongoing bill or argument.

                ## Milestones
                1. A written agreement on who pays for purchase, insurance, fuel and repairs.
                2. A budget and model list agreed with the young driver.
                3. Insurance arranged with the person who drives most named as main driver.
                4. A check-in date set to review costs after six months.

                ## Notes
                Naming a parent as main driver of a car a young person mostly drives is known as fronting and can invalidate the policy. Keep the main driver accurate.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written who-pays agreement and an accurately named main driver on the policy, both in place before the car is bought."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree in writing who pays for each cost of the car"
                - "Shortlist cars together within the agreed budget"
                - "Name the person who drives most as the main driver"
                - "Review insurance and running costs together at renewal @recurring(yearly)"
            - name: Family car for a growing family
              description: |-
                ## Purpose
                Adding a baby or a third child can turn a perfectly good car into one that will not take the seats, buggy and luggage. Testing your actual child seats and pram in the shortlisted cars, and checking ISOFIX points and rear door width, avoids buying a car that looks family-sized but fails on the school run.

                ## Milestones
                1. Child seats, buggy and typical luggage listed with sizes.
                2. Three cars tested with your own seats fitted.
                3. Rear access, ISOFIX positions and boot space with the buggy folded recorded.
                4. A car chosen that fits the family for at least five years.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A family car chosen after your own child seats and buggy were tested in at least three shortlisted cars."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every seat, buggy and bag the car must carry"
                - "Take your own child seats to test fit in each shortlisted car"
                - "Check where the ISOFIX points are and how many there are"
                - "Fold the buggy into each boot before deciding"
            - name: Choosing a car for retirement
              description: |-
                ## Purpose
                In retirement, mileage often falls while comfort and access matter more: seat height, door opening, visibility and driver aids that reduce fatigue. Buying for the next ten years of driving, perhaps smaller and easier to park, can cut costs and keep you driving with confidence for longer.

                ## Milestones
                1. Annual mileage and typical trips reviewed for life without a commute.
                2. Seat height, door width and visibility tested in three cars.
                3. Useful driver aids such as parking sensors and an automatic gearbox noted.
                4. A decision on whether to downsize, and to what.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A retirement car decision recorded after testing access and driver aids in at least three cars."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate your annual mileage now you are not commuting"
                - "Test getting in and out of three cars of different heights"
                - "List the driver aids you would use every day"
                - "Decide whether a smaller car would suit the next ten years"
            - name: Buying a car with mobility needs or adaptations
              description: |-
                ## Purpose
                Drivers and passengers with mobility needs may require swivel seats, hand controls, boot hoists or wheelchair access, which narrow the choice of base car and add cost. Getting an independent driving assessment and checking for national mobility schemes or grants before choosing a model avoids buying a car that cannot be adapted.

                ## Milestones
                1. An independent mobility driving assessment booked or completed.
                2. Required adaptations listed with the cars they fit.
                3. National mobility schemes, grants or tax reliefs checked for eligibility.
                4. A car and adaptation supplier chosen together.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Adaptation needs confirmed by an assessment and a car chosen that the supplier has confirmed it can adapt."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find an independent mobility driving assessment centre"
                - "List the adaptations you or a passenger need"
                - "Check for national mobility schemes or tax relief on adapted cars"
                - "Ask adaptation suppliers which base cars they can fit"
            - name: Going down to one car as a household
              description: |-
                ## Purpose
                Two cars that each sit idle most days cost a household twice in depreciation, insurance and servicing. Testing a month with one car, using car clubs, rentals or public transport for the gaps, shows whether selling both and buying a single better car would work.

                ## Milestones
                1. Every trip both cars made over two weeks listed.
                2. A trial month run with one car, with gaps covered by other means.
                3. The cost of covering the gaps compared with the cost of the second car.
                4. A decision recorded on keeping two cars or replacing them with one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-car trial month completed, with costs compared and a two-car or one-car decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Log every trip both cars make for two weeks"
                - "Park one car for a trial month and note the gaps"
                - "Add up the cost of rentals, car club and fares used"
                - "Decide together whether to replace two cars with one"
            - name: Using a car broker or buying service
              description: |-
                ## Purpose
                Brokers and buying services pass on fleet discounts for new cars and some source used cars to order, often saving more than their fee on popular models. Knowing how they are paid, what the discount includes and who handles the warranty decides whether they beat negotiating yourself.

                ## Milestones
                1. Two brokers or buying services compared on price, fees and how they are paid.
                2. Their quote set against your best direct dealer quote on the same spec.
                3. Delivery, cancellation and warranty terms read.
                4. A choice recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Broker quotes compared with your best direct dealer price on an identical spec, and the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get quotes from two brokers on your exact spec"
                - "Ask each broker how they are paid and whether fees are included"
                - "Compare their quotes with your best direct dealer price"
                - "Read the delivery and cancellation terms before paying any deposit"
            - name: Used electric car with a battery health report
              description: |-
                ## Purpose
                Battery health decides much of a used electric car's value, and two cars of the same age can have very different usable range. Asking for a battery state-of-health report and checking how much battery warranty is left gives you a measured answer instead of the dashboard range estimate.

                ## Milestones
                1. A battery health report or diagnostic obtained for each candidate car.
                2. Remaining battery warranty in years and distance noted.
                3. Charging cables, adapters and app access checked as part of the sale.
                4. Range tested on a familiar route in the season you are buying.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A battery state-of-health figure and remaining battery warranty recorded for the chosen car before purchase."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each seller for a battery state-of-health report"
                - "Check the remaining battery warranty in years and distance"
                - "Make sure the charging cables come with the car"
                - "Recheck battery health with a diagnostic @recurring(yearly)"
            - name: Buying at a car auction with a hard ceiling
              description: |-
                ## Purpose
                Auctions can offer ex-fleet and part-exchange cars below dealer prices, but you get minutes to inspect, few rights and a buyer's fee on top. Attending one as an observer first, then bidding only on a pre-checked car with a ceiling that includes the fees, keeps auction fever from erasing the saving.

                ## Milestones
                1. One auction attended as an observer without bidding.
                2. Buyer's fees, payment terms and collection deadlines understood.
                3. Catalogue cars of interest checked with history reports before the sale.
                4. A ceiling including all fees written down and held to.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One auction observed and, for any bid, a written ceiling including all fees that was not exceeded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Attend one auction as an observer without registering to bid"
                - "Read the auction's buyer fees and collection rules"
                - "Run history checks on catalogue cars of interest before the sale"
                - "Write a ceiling including fees on your catalogue page"
            - name: Classic or enthusiast car purchase
              description: |-
                ## Purpose
                Older and enthusiast cars follow different rules: values rest on originality and documented history, rust and parts supply matter more than mileage, and specialist insurance often comes with agreed values and mileage limits. Joining an owners' club and paying for a marque specialist inspection is the difference between a hobby and a money pit.

                ## Milestones
                1. An owners' club joined and its buying guide read.
                2. Two or three cars viewed with a club member or specialist.
                3. A specialist inspection completed on the chosen car.
                4. Agreed value insurance quoted before purchase.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist inspection report and an agreed value insurance quote obtained before any price is agreed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Join the owners' club for the model and read its buying guide"
                - "Ask the club whether a member can come to a viewing"
                - "Book a marque specialist inspection before agreeing a price"
                - "Review the agreed value with your insurer @recurring(yearly)"
            - name: Choosing a tow car for a caravan or trailer
              description: |-
                ## Purpose
                Towing safely depends on figures in the handbook, not engine size: the maximum towing weight, the nose weight limit and the ratio between the car's kerb weight and the loaded trailer. Checking these, and your licence entitlement for the combined weight, before buying avoids a car that cannot legally or comfortably tow what you own.

                ## Milestones
                1. Your caravan or trailer's maximum loaded weight and nose weight recorded.
                2. Towing limits and kerb weight noted for each shortlisted car.
                3. Your driving licence entitlement for the combined weight checked.
                4. Tow bar fitting cost and electrics compatibility confirmed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tow car chosen whose towing limit and kerb weight suit your loaded trailer, with licence entitlement confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the loaded weight and nose weight on your caravan or trailer plate"
                - "Look up the towing limit and kerb weight for each shortlisted car"
                - "Check your licence entitlement for the combined weight"
                - "Get a quote for fitting a tow bar with the right electrics"
---

# Buying a Car Wisely

This area is for anyone about to choose a car, whether a first car, a family upgrade or the last car of a long driving life, who wants the right one at a fair price. It starts with the foundations (a needs brief, a budget ceiling, the new or used decision, a scored shortlist and a five-year cost estimate), then the routines that run during a search, the skills of checking history, inspecting, test driving and negotiating, the decisions about where to buy and what to add, the events from the sales meeting to the first thirty days, the situations of new drivers, families, retirees and drivers with mobility needs, and finally specialist purchases such as auctions, classics, tow cars and used electric cars.

What repeats is a weekly listings review, a monthly price log, budget check and valuation refresh while you search, a quarterly look at recalls and the buying calendar, and yearly checks on warranty, paperwork and your next replacement date. The Purchase decision, Metrics log, Meeting notes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
