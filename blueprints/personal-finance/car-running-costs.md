---
id: personal-finance.car-running-costs
name: Car Running Costs
description: "A ledger of every car cost, a true cost per mile, a monthly allowance and the yearly routines for servicing, insurance, tyres and tests, so you know what the car costs and whether to keep it."
category: personal
version: 1.0.0
tags: [personal-finance, car-running-costs, everyone, motoring, cost-per-mile, fuel, servicing, vehicle-maintenance]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - monthly-budget-bills
    - operational-checklist
    - vendor
    - purchase-decision
  pillars:
    - name: Personal Finance
      emoji: "💷"
      description: "The day-to-day money system: income, budget, bills, debt, savings buffers, insurance, tax and big purchases, run so that nothing surprises you and every pound has a job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Car Running Costs
          description: "Tracking fuel, insurance, tax, servicing and repairs to know what a car really costs and whether to keep it."
          projects:
            - name: Car cost ledger from last year's statements
              description: |-
                ## Purpose
                Most drivers can quote their monthly finance payment but not what the car cost them last year once fuel, insurance, tax, servicing, tyres, parking and the odd repair are added. Pulling twelve months of bank and card statements into one ledger, with a column per cost type, gives you the real figure in an afternoon and a structure for every month after.

                ## Milestones
                1. Twelve months of car-related payments found in bank and card statements.
                2. Each payment sorted into fuel, insurance, tax, servicing, repairs, tyres, parking and tolls, finance, or other.
                3. Cash spending such as car washes and pay-and-display parking estimated and added as its own line.
                4. A yearly total and a monthly average for each category at the foot of the ledger.

                ## Notes
                Start from the **Metrics log** template. Search statements for fuel station names, your insurer and your garage rather than scrolling month by month.

                Before you start: this plan is general information to help you organise your own money decisions. It is not financial, investment, tax or legal advice. Check decisions that matter with a qualified, licensed adviser in your country, and remember that investing and trading can lose money.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ledger holding twelve months of car costs by category, with an annual total and a monthly average for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download the last twelve months of bank and card statements"
                - "Search the statements for fuel, insurer, garage and parking payments"
                - "Sort every car payment into one of the ledger's cost categories"
                - "Add the month's car receipts and payments to the ledger @recurring(monthly:4)"
            - name: True annual cost of the car worked out
              description: |-
                ## Purpose
                Cash spent is only part of what a car costs. Depreciation is often the largest single cost of a newer car, and finance interest, parking permits and a rented garage all belong in the total. Adding them to the ledger figures shows what owning this particular car really takes from the household each year.

                ## Milestones
                1. Last year's cash running costs taken from the ledger.
                2. A year of depreciation estimated from two valuations twelve months apart.
                3. Interest paid on any car finance added from the annual statement.
                4. One total annual figure written down, with the share each cost makes up.

                ## Notes
                Online valuation tools vary. Use the same tool and the same condition grade each time so the difference reflects the car, not the website.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "One written annual cost figure combining cash running costs, depreciation and finance interest, with each component's share shown."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get today's private sale valuation for your car from one online tool"
                - "Estimate what the same car was worth twelve months ago from old adverts"
                - "Add finance interest from your last annual finance statement"
                - "Write the full annual cost and the share of each component"
            - name: Cost per mile baseline from the odometer
              description: |-
                ## Purpose
                Cost per mile turns a vague sense that the car is expensive into a number you can compare with a train fare, a taxi or a car club. Reading the odometer on a fixed date, and again a month later, gives your real annual mileage, and dividing the annual cost by it shows what each trip actually costs, not just the fuel for it.

                ## Milestones
                1. The odometer reading and date written down.
                2. A second reading taken a month later and annual mileage estimated from the two.
                3. The estimate checked against the mileage on past test certificates or service invoices.
                4. Cost per mile calculated both for fuel alone and for the full annual cost.

                ## Notes
                Kilometres work the same way. Expect the full figure to be several times the fuel-only figure; that gap is the point of the exercise.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Two cost per mile figures, fuel only and full cost, worked out from measured mileage and written in the ledger."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the odometer and note today's date"
                - "Take a second odometer reading one month later"
                - "Compare the mileage with the readings on past test certificates"
                - "Divide fuel cost and full annual cost by annual mileage"
            - name: Car paperwork folder in one place
              description: |-
                ## Purpose
                When the car is stopped at the roadside, written off or sold, someone needs the registration document, insurance certificate, breakdown number, service book and warranty within minutes. Gathering them into one folder, paper or digital, also exposes the expired warranty, the lost spare key or the policy nobody remembers buying.

                ## Milestones
                1. Registration document, insurance schedule, latest test certificate and breakdown membership filed together.
                2. Service book, warranty booklet and any service plan terms added.
                3. Policy and membership numbers copied into a phone note for roadside use.
                4. Where the spare key and the locking wheel nut key are kept written down.

                ## Notes
                Do not keep the registration document in the car. It makes a stolen car easier to sell on.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One folder holds every current car document, and the roadside numbers are saved on the main driver's phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every car document you can find into one place"
                - "Scan or photograph each document into a single digital folder"
                - "Save the breakdown and insurer claim numbers in your phone"
                - "Check the folder for expired or missing documents and replace them @recurring(yearly)"
            - name: Renewal dates calendar for tax, test, insurance and service
              description: |-
                ## Purpose
                Missing a car renewal costs money twice over: an insurance policy left to auto-renew often lands at a worse price than a fresh quote, lapsed vehicle tax brings a fine, and driving past the annual test date can put your cover at risk. Putting every fixed car date into one calendar, with reminders six weeks and one week ahead, means none of them arrives as a surprise.

                ## Milestones
                1. Dates for vehicle tax, annual test, insurance, breakdown cover and service written in one list.
                2. Each date in the calendar with a reminder six weeks before and another one week before.
                3. Any month where two or more car bills cluster spotted and planned for.
                4. The list confirmed against the documents in the paperwork folder.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every recurring car date sits in the calendar with two reminders, matching the documents in the paperwork folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the renewal date of every car cost that comes round each year"
                - "Add each date to your calendar with six-week and one-week reminders"
                - "Mark any month where two or more car bills fall together"
                - "Review the whole calendar against this year's paperwork @recurring(yearly)"
            - name: Monthly car allowance in the household budget
              description: |-
                ## Purpose
                Car costs arrive in lumps: a tyre in March, insurance in June, a service in October. Turning the annual total into one fixed monthly amount, paid into a separate pot on payday, means the big bills are already covered when they land and the true cost of the car shows up in the budget every month.

                ## Milestones
                1. The annual cash running cost divided into a monthly figure and rounded up.
                2. A separate account or savings pot opened and named for the car.
                3. A standing order into the pot set for payday.
                4. Every car bill paid from the pot for three months running.

                ## Notes
                Start from the **Monthly budget and bills** template. Add a margin of about ten percent for an older car, where the unexpected repair is not really unexpected.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named car pot receives a fixed monthly transfer, and three months of car bills have been paid from it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Divide last year's cash car costs by twelve and round up"
                - "Open or name a savings pot just for car costs"
                - "Set a payday standing order into the car pot"
                - "Refund the main account from the pot for any car bill paid from it by mistake @recurring(monthly:26)"
            - name: Manufacturer service schedule mapped to your mileage
              description: |-
                ## Purpose
                Garages often sell the next service out of habit, while manufacturers set intervals by time or mileage, whichever comes first, and items such as brake fluid or the timing belt run on their own clocks. Reading the schedule for your exact model and mileage shows what is genuinely due and when the expensive items will fall.

                ## Milestones
                1. The official service schedule for your model, engine and year found.
                2. Each interval written down by time and by mileage.
                3. The next three services placed on the calendar using your measured annual mileage.
                4. Big-ticket items such as the timing belt, brake fluid and coolant noted with the year they fall due.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page schedule for your car listing the next three services and the year each major item falls due."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the service schedule in the handbook or on the manufacturer's website"
                - "Note which items have their own time or mileage intervals"
                - "Work out the dates of the next three services from your annual mileage"
                - "File the schedule in the car paperwork folder"
            - name: Breakdown cover check against what you already hold
              description: |-
                ## Purpose
                Plenty of households pay for breakdown cover twice, once through a packaged bank account or new car warranty and again through a separate membership, while others hold roadside-only cover that will not tow them home. Comparing what each policy includes, such as home start, national recovery and onward travel, against how you actually drive picks the right level once.

                ## Milestones
                1. Every source of breakdown cover found, including bank accounts, warranties and insurance add-ons.
                2. Each one's cover level, whether it covers the person or the car, and its renewal date listed.
                3. Duplicate cover cancelled or set to lapse at renewal.
                4. The level you need chosen from your typical trips and the car's age.

                ## Notes
                Personal cover follows you in any car; vehicle cover follows the car whoever drives it. Pick the one that matches who uses the car.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One breakdown policy chosen at a level matched to your driving, with any duplicate cover cancelled and the saving recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your bank account benefits and car warranty for breakdown cover"
                - "List each cover's level and whether it covers the person or the car"
                - "Cancel or stop the renewal of any duplicate breakdown cover"
                - "Write the annual saving into the car ledger"
            - name: Cheapest fuel or charging on your normal routes
              description: |-
                ## Purpose
                Fuel prices at stations a mile apart can differ enough to matter over a year, and motorway services are usually the dearest. Spending an hour finding the two cheapest stations or chargers already on your regular routes saves money without detours, which is where most fuel-saving plans fail.

                ## Milestones
                1. Prices at the stations or chargers on your three most common routes compared.
                2. The two cheapest saved as favourites in a price comparison app or map.
                3. A rule written for when filling up elsewhere is acceptable.
                4. An annual saving estimated from the price gap and your yearly fuel use.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The two cheapest regular stations or chargers chosen and saved, with an estimated annual saving in the ledger."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the stations or chargers you pass on your three most common routes"
                - "Compare their prices using a fuel price app or website"
                - "Save the two cheapest as favourites on your phone"
                - "Check whether your usual stations are still the cheapest @recurring(quarterly)"
            - name: Fill-up and mileage log
              description: |-
                ## Purpose
                A log of litres, price and odometer at every fill-up is the only way to know your real fuel economy, and a sudden drop is often the first sign of a dragging brake, a soft tyre or an engine fault. It takes thirty seconds at the pump and turns the monthly review from guesswork into arithmetic.

                ## Milestones
                1. A log with date, odometer, litres or kWh, price per unit and total cost.
                2. Every fill-up for two months recorded.
                3. Monthly fuel economy worked out from full tank to full tank.
                4. A personal normal range for your economy noted, so a drop stands out.

                ## Notes
                Start from the **Metrics log** template. Fill the tank to the brim each time, or the per-fill figures will jump about.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of fill-ups logged, with monthly fuel economy calculated and a normal range recorded."
                cadence: rolling
              tasks:
                - "Set up a fill-up log on your phone with odometer, litres and price columns"
                - "Record odometer, litres and price at every fill-up"
                - "Work out last month's fuel economy from the log @recurring(monthly:2)"
                - "Look into any month where economy drops by more than a tenth"
            - name: Monthly car cost review against the allowance
              description: |-
                ## Purpose
                Ten minutes a month comparing what the car actually cost with the monthly allowance shows whether the pot is building or quietly draining. Catching a rising fuel bill or a string of small repairs early leaves time to raise the allowance before a big bill finds the pot empty.

                ## Milestones
                1. A fixed monthly slot for the review in the calendar.
                2. Each month's spend compared with the allowance by category.
                3. The car pot balance checked against the next three months of known bills.
                4. Six consecutive monthly reviews completed, with any allowance change noted.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each with spend against allowance and the car pot balance."
                cadence: rolling
              tasks:
                - "Book a ten-minute monthly car cost review in your calendar"
                - "Compare this month's car spend with the allowance by category @recurring(monthly:5)"
                - "Check the car pot covers the next three months of known bills"
                - "Raise the allowance if spending runs over for three months in a row"
            - name: Quarterly cost per mile update
              description: |-
                ## Purpose
                Cost per mile drifts as fuel prices move, insurance renews and the car ages, so the baseline goes stale within months. Recalculating it each quarter from the ledger and a fresh odometer reading shows the trend and gives an honest number for comparing trips, lifts and alternatives.

                ## Milestones
                1. An odometer reading taken at the end of each quarter.
                2. The quarter's costs and miles turned into a fuel-only and a full cost per mile.
                3. Four quarters charted side by side.
                4. Any quarter that jumps explained in one sentence.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive quarterly cost per mile figures recorded, with a one-line explanation of any jump."
                cadence: rolling
              tasks:
                - "Note the odometer reading on the last day of the quarter"
                - "Recalculate fuel-only and full cost per mile for the quarter @recurring(quarterly)"
                - "Add the figures to a simple chart in the ledger"
            - name: Monthly tyre pressure and fluid check
              description: |-
                ## Purpose
                Under-inflated tyres wear faster at the edges and raise fuel use, and a low coolant or oil level can turn a cheap top-up into an engine repair. A fifteen-minute check once a month, done with the tyres cold on the driveway or at a station air line, is the cheapest maintenance there is.

                ## Milestones
                1. The correct pressures for normal and full loads found on the door pillar or in the handbook.
                2. A tyre gauge bought or a reliable station air line chosen.
                3. Pressures, oil and coolant checked monthly for six months.
                4. Any tyre that keeps losing pressure inspected by a tyre fitter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months of monthly checks completed, with any slow puncture or fluid loss looked at by a professional."
                cadence: rolling
              tasks:
                - "Find the recommended tyre pressures for normal and full loads"
                - "Buy a simple digital tyre pressure gauge"
                - "Check tyre pressures cold, plus oil and coolant levels @recurring(monthly:12)"
                - "Take any tyre that loses pressure twice to a tyre fitter"
            - name: Annual service booked with two quotes
              description: |-
                ## Purpose
                Service prices for the same car and the same schedule can vary widely between garages, and booking at the last minute leaves no time to compare. Asking two garages for an itemised quote a month before the service is due, and agreeing a limit for extra work, keeps the yearly service at a fair price.

                ## Milestones
                1. The service due named from the manufacturer schedule.
                2. Two itemised quotes received for exactly that service.
                3. A spending limit for extra work agreed with the garage before handing over the keys.
                4. The invoice checked against the quote and filed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The annual service done at the better of two itemised quotes, with no extra work carried out without approval."
                cadence: cyclic
              tasks:
                - "Ask two garages for itemised quotes for your next service @recurring(yearly)"
                - "Tell the garage to call before any extra work over your agreed limit"
                - "Check the final invoice line by line against the quote"
            - name: Car insurance renewal price check
              description: |-
                ## Purpose
                Car insurance quotes are often cheaper a few weeks before the renewal date than on the day itself, and letting a policy roll over unchecked usually costs more. Starting six weeks out, with your details checked and outside quotes in hand, lets you negotiate with the current insurer or move without a rush.

                ## Milestones
                1. The renewal date and current premium written in the ledger.
                2. Declared mileage, parking, drivers and modifications checked for accuracy.
                3. Quotes gathered from at least two comparison sites and one insurer that does not use them.
                4. The renewal price challenged or a new policy bought, and the saving recorded.

                ## Notes
                Declared annual mileage should match what you really drive. Understating it to cut the premium can lead to a refused claim.
              priority: high
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each renewal compared against at least three outside quotes, with the chosen premium and saving written in the ledger."
                cadence: cyclic
              tasks:
                - "Note this year's premium and the renewal date in the ledger"
                - "Gather three outside quotes six weeks before renewal @recurring(yearly)"
                - "Ring the current insurer with the best quote and ask them to match it"
                - "Record the final premium and the saving"
            - name: Roadworthiness test preparation that avoids easy fails
              description: |-
                ## Purpose
                A large share of annual test failures come from things a driver could have fixed in minutes: blown bulbs, worn wiper blades, an empty screenwash bottle, low tread. Running a short pre-test check two weeks before the test avoids a fail, a retest fee and the garage's own price for a bulb.

                ## Milestones
                1. Your country's annual test checklist, such as the MOT in the UK, read once.
                2. Lights, wipers, washers, horn, tyres and number plates checked two weeks before the test.
                3. Simple faults fixed before the test date.
                4. The result and any advisory notes added to the paperwork folder.

                ## Notes
                Advisories are not failures, but they are next year's bills. Copy each one into the five-year wear forecast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The car passes its annual test without failing on any item a pre-test check would have caught, with advisories recorded."
                cadence: cyclic
              tasks:
                - "Read the public checklist of what the annual test covers"
                - "Run the pre-test checks two weeks before the test @recurring(yearly)"
                - "Replace any blown bulb or worn wiper blade yourself"
                - "File the certificate and copy any advisories into the ledger"
            - name: Seasonal car care checklist
              description: |-
                ## Purpose
                Winter finds flat batteries, worn wipers and thin tyres, while summer exposes tired air conditioning and low coolant just before the long trips. Two short checklists, run at the start of winter and of summer, catch the cheap fixes before they turn into roadside callouts.

                ## Milestones
                1. A winter checklist covering battery age, antifreeze strength, wipers, lights and tread.
                2. A summer checklist covering coolant, air conditioning, tyres and pressures for a loaded car.
                3. Both checklists run once and the findings noted.
                4. Anything needing a garage booked in before the season starts.

                ## Notes
                Start from the **Operational checklist** template. An ageing battery is a common cause of winter callouts, and many parts shops will test one free.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both seasonal checklists run in the same year, with every finding fixed or booked in before the season."
                cadence: cyclic
              tasks:
                - "Write a winter and a summer checklist from the template"
                - "Run the winter checklist before the first frosts @recurring(yearly)"
                - "Run the summer checklist before the main holiday trip @recurring(yearly)"
                - "Ask a parts shop to test the battery if it is over four years old"
            - name: Service history that protects resale value
              description: |-
                ## Purpose
                A complete, stamped service history can add noticeably to what a buyer or dealer will pay, and gaps are the first thing they question. Keeping every invoice, the stamped book or digital record, and receipts for tyres and parts makes the car easier to sell and supports any warranty claim.

                ## Milestones
                1. Every past service invoice found and put in date order.
                2. Gaps in the history identified and, where possible, filled from garage records.
                3. The manufacturer's digital service record checked, if it keeps one.
                4. Each new invoice filed within a week of the work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete service history in date order, with every invoice since installing filed within a week of the work."
                cadence: rolling
              tasks:
                - "Put all past service and repair invoices in date order"
                - "Ask previous garages for copies of any missing invoices"
                - "Check the manufacturer's digital service record matches your invoices"
                - "File each new garage invoice in the service history folder"
            - name: Parking, tolls and zone charges kept in check
              description: |-
                ## Purpose
                Parking, bridge and road tolls, and low emission or congestion zone charges can add up to more than the fuel for town drivers, and the penalty for a missed payment often dwarfs the charge itself. Listing where these costs arise, and setting up permits or auto-pay accounts where they make sense, cuts both the cost and the fines.

                ## Milestones
                1. Every regular parking, toll and zone cost from the ledger listed.
                2. Season tickets or permits compared with paying each time.
                3. Auto-pay accounts set up for zones and tolls you use regularly.
                4. Six months passed with no penalty charge notice.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Regular parking and zone costs compared with permits, auto-pay set up where useful, and six months with no penalty notice."
                cadence: rolling
              tasks:
                - "List every parking, toll and zone charge in last year's ledger"
                - "Price a season ticket or permit for your most used car park"
                - "Set up auto-pay for any toll or zone you drive through regularly"
                - "Note the payment deadline for each zone and toll you use"
            - name: Annual valuation to track depreciation
              description: |-
                ## Purpose
                Depreciation is invisible until you sell, yet for a car under five years old it often outweighs fuel and insurance together. One valuation a year, on the same date with the same tool, makes that cost visible and shows when the steepest losses are behind you.

                ## Milestones
                1. A valuation tool and condition grade chosen and written down.
                2. This year's private and trade values recorded.
                3. The fall since last year added to the annual cost total.
                4. Three years of valuations side by side.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Valuations recorded on the same date for three years, with each year's fall added to the annual cost."
                cadence: cyclic
              tasks:
                - "Choose one valuation website and the condition grade you will use"
                - "Value the car and record trade and private prices @recurring(yearly)"
                - "Add the year's fall in value to the annual cost total"
            - name: Annual car cost and keep-or-replace review
              description: |-
                ## Purpose
                Once a year the ledger, the valuation and the wear forecast together answer a question most drivers settle by feel: is this car still worth running? Reviewing the full year's cost, next year's known bills and the car's value on one page sets next year's allowance and flags the year when replacing will cost less than repairing.

                ## Milestones
                1. The year's full cost, cost per mile and depreciation on one page.
                2. Next year's known bills listed from the forecast and the test advisories.
                3. Next year's monthly allowance set.
                4. A keep, watch or replace verdict written down with the reason.

                ## Notes
                If the verdict is replace, choosing the next car belongs in its own plan. This review only answers whether the numbers say it is time.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page annual review completed, with next year's allowance set and a keep, watch or replace verdict recorded."
                cadence: cyclic
              tasks:
                - "Pull the year's totals from the ledger into a one-page summary @recurring(yearly)"
                - "List next year's known bills from the forecast and test advisories"
                - "Set next year's monthly car allowance"
                - "Write a keep, watch or replace verdict and the reason for it"
            - name: Reading a garage quote and invoice line by line
              description: |-
                ## Purpose
                Garage paperwork mixes labour hours, parts, consumables and tax in ways that can hide padding, and few drivers know what a fair labour time looks like. Learning to read a quote, question a vague line and spot charges for work nobody authorised saves money on every visit.

                ## Milestones
                1. Labour rate, labour hours, parts and consumables identified on a real past invoice.
                2. The difference between original, matching quality and budget parts understood.
                3. Three questions to ask about any quote written down.
                4. One quote questioned and the answer recorded.

                ## Notes
                Many garages price jobs from published standard labour times. Asking which time they used is reasonable and usually answered.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A past invoice annotated line by line and three standard questions written for the next quote."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Take your last garage invoice and mark labour, parts and consumables"
                - "Look up what original, matching quality and budget parts mean"
                - "Write three questions to ask before agreeing any quote"
                - "Ask the questions on the next quote and note the answers"
            - name: Fuel-efficient driving measured over a month
              description: |-
                ## Purpose
                Smooth acceleration, earlier gear changes, steady speeds and less idling can cut fuel use noticeably, but only if the change is measured rather than assumed. Practising for four weeks with the fill-up log running gives a before and after figure and shows which habits are worth keeping.

                ## Milestones
                1. A month of normal driving economy recorded as the baseline.
                2. Four techniques chosen: gentle acceleration, reading the road ahead, a lower motorway speed and no idling.
                3. Four weeks of practice with every fill-up logged.
                4. The change in economy calculated and the annual saving estimated.

                ## Notes
                Removing a roof box and unused weight from the boot helps too. Check tyre pressures before starting so they do not skew the result.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Fuel economy measured for a baseline month and a practice month, with the difference and annual saving recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note last month's fuel economy from the fill-up log as a baseline"
                - "Remove roof bars, a roof box and any dead weight from the boot"
                - "Practise anticipating stops and accelerating gently for four weeks"
                - "Compare the practice month with the baseline and estimate the yearly saving"
            - name: Tyre tread, sidewall codes and replacement timing
              description: |-
                ## Purpose
                Tyres are one of the biggest wear costs on most cars. Knowing how to read tread depth and the sidewall lets you buy the right size and load rating, spot uneven wear that signals an alignment fault, and replace before the legal minimum rather than after a fine. Ten minutes with a gauge each quarter tells you roughly when the next pair is due.

                ## Milestones
                1. Your country's legal minimum tread depth written down.
                2. The size, load and speed codes on your sidewall decoded.
                3. Tread depth measured across each tyre and any uneven wear noted.
                4. An expected replacement month estimated for each axle.

                ## Notes
                Wear on one edge usually means the alignment needs checking. Fixing it costs far less than a new pair of tyres.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Sidewall codes decoded, tread depths for all four tyres recorded, and a replacement month estimated for each axle."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a tread depth gauge"
                - "Decode the size, load and speed rating on your tyre sidewall"
                - "Measure tread on the inner, middle and outer edge of each tyre @recurring(quarterly)"
                - "Estimate when each axle will reach the depth you plan to replace at"
            - name: Under-bonnet checks anyone can learn
              description: |-
                ## Purpose
                Topping up oil, coolant and screenwash, and replacing wiper blades and many bulbs, are jobs most owners can learn in an afternoon, and garages charge labour for every one. Learning where each item lives on your car and what a safe level looks like saves garage visits and catches leaks early.

                ## Milestones
                1. Oil dipstick, coolant tank, brake fluid and screenwash reservoir located on your car.
                2. The correct oil grade and coolant type written down from the handbook.
                3. Wiper blades changed once without help.
                4. A small kit of the right oil, screenwash and spare bulbs kept in the boot.

                ## Notes
                Never open the coolant cap on a hot engine. Brake fluid that keeps dropping is a garage job, not a top-up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can locate and check every fluid, have changed the wiper blades yourself, and carry the correct top-ups in the car."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find each fluid reservoir using the handbook diagram"
                - "Write the correct oil grade and coolant type inside the handbook cover"
                - "Change the wiper blades yourself"
                - "Pack a small top-up kit for the boot"
            - name: Dashboard warning lights and the cost of ignoring them
              description: |-
                ## Purpose
                Some warning lights mean stop now and others mean book a garage this week, and confusing the two is how a small fault becomes an engine or gearbox bill. Learning your car's lights by colour and urgency means the right call gets made at the roadside, by whoever is driving.

                ## Milestones
                1. Every warning light in the handbook listed by colour and meaning.
                2. Red stop-now lights separated from amber book-soon lights.
                3. A one-page card for the glovebox with the action for each.
                4. Everyone who drives the car shown the card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glovebox card listing each warning light by urgency, seen by every regular driver of the car."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the warning light section of the handbook"
                - "Group the lights into stop now and book soon"
                - "Write a one-page glovebox card with the action for each light"
                - "Show the card to everyone who drives the car"
            - name: Warranty and service plan terms that keep cover valid
              description: |-
                ## Purpose
                Manufacturer and extended warranties can turn down a claim if services were late, the wrong parts were used or a fault was left unreported. Reading the terms once and noting the conditions that apply to your car lets you use an independent garage without risking cover, and tells you exactly what is and is not included.

                ## Milestones
                1. Warranty end date, mileage limit and exclusions written down.
                2. Servicing conditions noted, including any rules on parts, garages and timing.
                3. Service plan payments and what each visit includes checked against the schedule.
                4. How to make a claim and who decides it written down.

                ## Notes
                In many countries an independent garage can service a car under manufacturer warranty if it follows the schedule and uses matching quality parts. Check the rules where you live.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of warranty and service plan conditions, end dates and claim steps filed with the car paperwork."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the warranty booklet and any service plan agreement"
                - "List the end dates, mileage limits and exclusions"
                - "Note the servicing conditions that keep the warranty valid"
                - "Write down how to make a claim and the claims phone number"
            - name: Vehicle tax band and clean air zone rules for your car
              description: |-
                ## Purpose
                Vehicle tax often depends on emissions, list price or fuel type, and both the tax rules and the low emission zones cities add keep changing. Knowing your car's band, and whether it meets the zone standards on your regular routes, avoids an unexpected daily charge and feeds straight into the keep or replace verdict.

                ## Milestones
                1. Your car's tax band and annual rate confirmed from the official source.
                2. Zone standards for cities you drive into checked against your car's emissions class.
                3. Any daily zone charges you would pay costed for a year.
                4. Announced rule changes over the next three years noted.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your car's tax band, zone compliance for regular destinations and any yearly zone cost written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your car's tax band on the official vehicle tax website"
                - "Enter your registration in the zone checker for cities you visit"
                - "Cost any daily zone charges you would pay over a year"
                - "Note any announced tax or zone changes with their start dates"
            - name: Independent garage or main dealer for servicing
              description: |-
                ## Purpose
                Main dealers usually charge more per hour but know the model and handle software updates and recalls, while a good independent can do the same service for less. Comparing two or three on price, reputation and warranty compliance, then sticking with one, builds a relationship that pays off when something goes wrong.

                ## Milestones
                1. Two independent garages and one dealer identified from local recommendations and reviews.
                2. Each one's labour rate and price for your next service compared.
                3. Trade association membership and warranty compliance checked.
                4. One garage chosen and its details saved in the paperwork folder.

                ## Notes
                Start from the **Vendor** template to keep the garage's details, rates and job history in one place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One garage chosen after comparing at least three on labour rate, service price and reputation, with its details saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask neighbours and colleagues which local garages they trust"
                - "Get the labour rate and next service price from three garages"
                - "Check reviews and trade association membership for each"
                - "Record your chosen garage using the vendor template"
            - name: Prepaid service plan or paying per service
              description: |-
                ## Purpose
                Dealers often offer a monthly service plan that fixes the price of the next two or three services. Whether it saves money depends on which services it covers, your mileage, whether you keep the car to the end and whether the plan transfers when you sell.

                ## Milestones
                1. The plan's total cost and the services it covers listed.
                2. The same services priced at the dealer and at an independent garage.
                3. Refund and transfer terms for an early sale read.
                4. A decision recorded with the expected saving or extra cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The plan's total cost compared with paying per service at two garages, with a written decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the dealer for the plan's total cost and the services it covers"
                - "Price the same services one by one at the dealer and an independent"
                - "Read what happens to the plan if you sell the car early"
                - "Record whether to take the plan and why"
            - name: Budget, mid-range or premium tyres
              description: |-
                ## Purpose
                Tyres differ in wet grip, noise and how many miles they last, so the cheapest tyre is not always the cheapest per mile. Comparing a budget, a mid-range and a premium option on their label ratings and expected life gives a fair cost per thousand miles for your next pair.

                ## Milestones
                1. Your tyre size and load rating confirmed.
                2. Three tyres compared on price, wet grip, fuel efficiency and noise ratings.
                3. Expected life and cost per thousand miles estimated for each.
                4. One tyre chosen and an all-in fitted price agreed, including valves, balancing and disposal.

                ## Notes
                Start from the **Purchase decision** template. Fit matching tyres across the same axle.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A tyre chosen from three compared on label ratings and cost per thousand miles, bought at an all-in fitted price."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note your tyre size and load rating from the sidewall"
                - "Compare three tyres on price and their label ratings"
                - "Estimate the cost per thousand miles for each option"
                - "Get an all-in fitted price from two tyre fitters"
            - name: Home charging tariff for an electric car
              description: |-
                ## Purpose
                Charging at home on an off-peak electricity tariff can cost a fraction of public rapid charging, but only if the car actually charges in the cheap hours. Comparing tariffs against your mileage and charging habits, then setting the charge schedule, often decides whether an electric car is cheap to run or not.

                ## Milestones
                1. Monthly charging kWh estimated from your mileage and the car's efficiency.
                2. Two or three off-peak tariffs compared on cheap rate, peak rate and standing charge.
                3. A tariff chosen and the switch completed.
                4. The car or charger scheduled to charge only in the off-peak window.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An off-peak tariff in place and the car scheduled to charge in its cheap window, with cost per mile recalculated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate monthly charging energy from your mileage and the car's efficiency"
                - "Compare three off-peak tariffs including their peak rates"
                - "Switch to the tariff you chose"
                - "Set the car or charger to charge only in the off-peak hours"
            - name: Commute by car compared with the alternatives
              description: |-
                ## Purpose
                The daily commute is often the largest share of a car's mileage, and its cost is usually judged on fuel alone. Comparing the full cost per mile of driving, plus parking, against a season ticket, cycling, a lift share or a mix of these shows what the commute really costs and what a change could save.

                ## Milestones
                1. Monthly commute miles and parking costs worked out.
                2. The car commute costed at full cost per mile.
                3. Two alternatives priced, including travel time and any season ticket discount.
                4. A decision on how to commute recorded, even if it is to keep driving.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The monthly commute costed by car and by two alternatives, with a written decision on how to commute."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out your monthly commute miles and parking cost"
                - "Multiply the commute miles by your full cost per mile"
                - "Price two alternatives, such as a season ticket or a lift share"
                - "Try the cheapest alternative for one week before deciding"
            - name: Repair spend limit set against the car's value
              description: |-
                ## Purpose
                Faced with a large repair quote at the garage counter, most people say yes because the car is needed tomorrow. Setting a written rule in advance, such as no single repair above a set amount without a second opinion, makes that decision calmly and stops money being poured into a car near the end of its life.

                ## Milestones
                1. The car's current trade value recorded.
                2. A repair limit set as an amount, with a rule for second opinions.
                3. The rule agreed with anyone else who pays for the car.
                4. The limit updated after each annual valuation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written repair spend limit and second opinion rule, agreed with any co-payer and reviewed at each annual valuation."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note the car's current trade value from the latest valuation"
                - "Decide the largest repair you would pay for without a second opinion"
                - "Agree the limit with anyone who shares the car's costs"
                - "Write the rule on the first page of the ledger"
            - name: Paying for small dents and chips or claiming
              description: |-
                ## Purpose
                Claiming on insurance for a small scrape can cost more than the repair once the excess and a reduced no-claims discount over several years are added up. Knowing local prices for mobile smart repair, windscreen chip repair and paintless dent removal lets you decide quickly and keep claims for the damage that warrants them.

                ## Milestones
                1. Your excess and the likely cost of losing part of your no-claims discount estimated.
                2. Prices for chip repair, smart repair and dent removal found locally.
                3. A personal threshold set below which you pay for repairs yourself.
                4. Windscreen cover in your policy checked, as chip repairs are often included.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written threshold for paying versus claiming, based on your excess, discount and local repair prices."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your excess and no-claims discount on the policy schedule"
                - "Ask your insurer how a claim would affect future premiums"
                - "Get prices for chip repair and smart repair nearby"
                - "Write a claim or pay threshold into the ledger"
            - name: Car-free month trial
              description: |-
                ## Purpose
                Many drivers suspect they could manage with less car but never test it. Leaving the car parked for a month, using public transport, cycling, car club hire or taxis and logging every cost and inconvenience, gives real evidence about whether the car earns its fixed costs.

                ## Milestones
                1. A month chosen that has no holiday or house move in it.
                2. Every alternative trip and its cost logged.
                3. The month's alternative costs compared with a month of full car costs.
                4. The trips that were hard or impossible without the car noted.

                ## Notes
                Insurance and tax keep running while the car is parked, so compare against the full monthly cost, not just the fuel.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A month without the car completed, with every alternative cost logged and compared with the full monthly car cost."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a month and tell anyone who relies on you for lifts"
                - "Join a car club or note taxi and bus fares in advance"
                - "Log every trip and its cost during the month"
                - "Compare the total with a month of full car costs"
            - name: Premium or standard fuel for your engine
              description: |-
                ## Purpose
                Premium fuel costs more per litre and is marketed on economy and engine cleanliness, but most engines are designed to run on standard grade. Checking what the handbook specifies, then comparing a few tanks of each in the fill-up log, settles the question for your car rather than for the advert.

                ## Milestones
                1. The fuel grade your handbook specifies written down.
                2. Three tanks of standard and three of premium logged.
                3. Economy and cost per mile compared for each grade.
                4. A decision recorded on which grade to buy.

                ## Notes
                Some performance engines do require higher octane fuel. Follow the handbook first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The handbook's fuel grade recorded and three tanks of each grade compared on cost per mile, with a decision noted."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check the handbook or filler cap for the recommended fuel grade"
                - "Log three tanks of standard fuel in the fill-up log"
                - "Log three tanks of premium fuel the same way"
                - "Compare cost per mile and write down which grade to buy"
            - name: Timing belt and major service milestone
              description: |-
                ## Purpose
                On many engines the timing belt, water pump and auxiliary belt are replaced together at a set age or mileage, and the bill can be several times a normal service. If the belt snaps first, the engine can be damaged beyond economic repair. Knowing the due point, getting quotes early and putting the money aside turns a shock into a planned bill.

                ## Milestones
                1. Whether your engine has a timing belt or a chain confirmed.
                2. The replacement interval by age and mileage found.
                3. Any record of a previous replacement found in the service history.
                4. Two quotes obtained and the work booked before the due point.

                ## Notes
                On a used car with no proof the belt was changed, many mechanics advise treating it as due. Ask your garage.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The timing belt replacement, or confirmation that the engine uses a chain, recorded, with any due work booked before its interval."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your engine uses a timing belt or a chain"
                - "Find the belt replacement interval by years and mileage"
                - "Look for proof of the last replacement in the service history"
                - "Get two quotes and book the work before it falls due"
            - name: Unexpected big repair bill handled calmly
              description: |-
                ## Purpose
                Sooner or later the car fails with a bill larger than the pot holds: a gearbox, a clutch, a turbo. Having a short plan ready, covering a second opinion, paying from the car pot first, reconditioned parts and what to ask before agreeing, stops the decision being made in a panic at the garage counter.

                ## Milestones
                1. The diagnosis written down with the fault codes and the quoted parts and labour.
                2. A second opinion or quote obtained for any bill over your repair limit.
                3. Reconditioned or used parts asked about as an option.
                4. The repair paid from the car pot, with any shortfall planned rather than put on a card by default.

                ## Notes
                Ask for the old parts back. Most garages agree, and it confirms the work was done.
              priority: high
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "The last major repair had a written diagnosis, a second quote and a funding decision recorded before work started."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the garage for the diagnosis and fault codes in writing"
                - "Get a second quote for any repair over your limit"
                - "Ask whether reconditioned or used parts are an option"
                - "Decide how to fund any shortfall before approving the work"
            - name: Long road trip costed before you set off
              description: |-
                ## Purpose
                Long drives abroad or across the country bring costs that never show in the monthly figures: tolls, ferries, vignettes, motorway fuel prices, parking at the destination and the risk of a breakdown far from home. Costing the trip and checking the car a week before leaving turns these into a budget instead of a run of surprises.

                ## Milestones
                1. The route costed for fuel, tolls, ferries, vignettes and parking.
                2. Breakdown cover confirmed for the countries or distance involved.
                3. Tyres, fluids and lights checked a week before departure.
                4. Actual trip costs recorded against the budget afterwards.

                ## Notes
                Some countries require extra kit in the car, such as warning triangles or high visibility vests. Check the rules for each country on the route.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip budget covering fuel, tolls, crossings and parking, compared with actual costs after the trip."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Plan the route and price the tolls, ferries and vignettes"
                - "Estimate fuel for the round trip from your fill-up log"
                - "Confirm your breakdown cover works for the whole route"
                - "Record what the trip actually cost against the budget"
            - name: Moving house and the car costs that change
              description: |-
                ## Purpose
                Moving to a new address can change the insurance premium, add or remove a parking permit, lengthen the commute and put you inside or outside a clean air zone. Checking each car cost before the move, and telling the insurer and the vehicle registration office on time, avoids an invalid policy and a fine.

                ## Milestones
                1. An insurance quote for the new address obtained before the move date is fixed.
                2. Parking arrangements and permit costs at the new home checked.
                3. Insurer, registration office and breakdown provider told of the new address.
                4. The monthly car allowance revised for the new commute and costs.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Insurer, registration office and breakdown provider updated, and the car allowance revised for the new address."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get an insurance quote at the new address before moving"
                - "Check parking and permit costs at the new address"
                - "Update your address with the insurer and vehicle registration office"
                - "Revise the monthly car allowance for the new commute"
            - name: Selling or scrapping the car and closing its costs
              description: |-
                ## Purpose
                When a car goes, its costs do not stop on their own: vehicle tax may need cancelling for a refund, insurance needs ending or moving, and breakdown cover and parking permits may quietly renew. Closing each one and writing the final figure in the ledger also shows the full lifetime cost of the car.

                ## Milestones
                1. The registration office told of the sale or scrapping, with proof kept.
                2. Tax refund, insurance refund or transfer, and breakdown cancellation confirmed.
                3. Parking permits, zone auto-pay and toll accounts closed or moved.
                4. The car's lifetime cost and cost per mile written in the ledger.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every recurring car cost cancelled or transferred, refunds received and the lifetime cost recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Notify the registration office of the sale and keep the confirmation"
                - "Cancel or transfer insurance and breakdown cover"
                - "Close any zone, toll or parking accounts linked to the number plate"
                - "Write the car's lifetime cost per mile in the ledger"
            - name: Young driver's car costs and who pays what
              description: |-
                ## Purpose
                For a new driver, insurance can cost more than the car itself, and families often drift into paying for everything with no plan. Pricing the full annual cost before the keys are handed over, and agreeing in writing who pays for fuel, insurance, servicing and any damage, avoids arguments and teaches the real cost of driving.

                ## Milestones
                1. Insurance quotes for the young driver gathered, including black box options.
                2. The full annual cost of their driving calculated.
                3. A written split of who pays for fuel, insurance, servicing and damage.
                4. A review date set for when the first no-claims year is earned.

                ## Notes
                Naming a parent as main driver when the young driver really drives most is called fronting, and it can void the policy.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written agreement listing who pays each car cost for the young driver, based on a full annual cost figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get insurance quotes with the new driver named as the main driver"
                - "Add up the full annual cost of their driving"
                - "Agree and write down who pays for each cost"
                - "Review the split when the first no-claims year is earned"
            - name: Car costs on a retirement income
              description: |-
                ## Purpose
                After retiring, many people drive far fewer miles while the fixed costs stay the same, so cost per mile rises sharply. Requoting insurance at the real mileage, checking the breakdown level and asking whether a smaller car or a car club would serve better keeps the car affordable on a fixed income.

                ## Milestones
                1. Annual mileage since retiring measured.
                2. Insurance requoted with the real, lower mileage and no commute.
                3. Fixed costs as a share of the total worked out.
                4. A decision recorded on keeping the current car, downsizing or using a car club.

                ## Notes
                Check what your licensing authority asks older drivers to declare about health and eyesight, as it affects insurance too.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Insurance requoted at the real mileage and a keep, downsize or car club decision recorded against the fixed income."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the odometer and work out your mileage since retiring"
                - "Requote insurance with your real mileage and no commute"
                - "Work out what share of the car's cost is fixed"
                - "Compare the yearly cost with a car club for your usual trips"
            - name: Business mileage records for work trips
              description: |-
                ## Purpose
                If you drive your own car for work, your employer or the tax authority usually allows a set rate per business mile, but only with a record of each trip. Logging date, purpose, start, destination and miles as you go turns a rough estimate into a claim that is paid in full and stands up if questioned.

                ## Milestones
                1. Your employer's mileage policy or the tax authority's approved rates found.
                2. A trip log with date, purpose, route and miles in use.
                3. Claims submitted every month without gaps.
                4. Unreimbursed business miles totalled for the tax year, where relief may apply.

                ## Notes
                Ordinary commuting is not usually business mileage. Check the rules that apply to you with your employer or the tax authority.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete business mileage log for the year, with every month's claim submitted and any unclaimed miles totalled."
                cadence: rolling
              tasks:
                - "Find your employer's mileage rate or the official approved rate"
                - "Set up a trip log with date, purpose, route and miles"
                - "Submit the month's business mileage claim @recurring(monthly:28)"
                - "Total any unreimbursed business miles at the end of the tax year"
            - name: Sharing one car's costs fairly between two people
              description: |-
                ## Purpose
                Couples, housemates and adult children sharing one car often split everything in half while one of them does most of the miles. Splitting fixed costs evenly and per-mile costs by actual mileage, written down once, ends the quiet resentment and makes the arrangement easy to adjust.

                ## Milestones
                1. Fixed costs and per-mile costs separated in the ledger.
                2. A way of recording each person's miles agreed.
                3. A written split rule, with when and how money changes hands.
                4. The split reviewed after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written cost sharing rule based on fixed costs and recorded miles, in use for three months and then reviewed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Separate the car's fixed costs from its per-mile costs"
                - "Agree how each person will record their miles"
                - "Write the split rule and when payments are made"
                - "Settle up the shared car costs between you @recurring(monthly:15)"
            - name: Electric car running costs tracked per mile
              description: |-
                ## Purpose
                Electric cars swap fuel bills for a mix of home charging hidden in the household electricity bill, public charging at very different prices, and their own tyre and insurance costs. Tracking the kWh used and where it came from shows the real cost per mile and which charging pattern is cheapest.

                ## Milestones
                1. Home charging separated from household electricity using the charger app or a meter reading.
                2. Public charging sessions logged with price per kWh.
                3. Monthly cost per mile calculated.
                4. Three months compared to find the cheapest charging pattern.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of home and public charging logged, with a monthly cost per mile for each."
                cadence: rolling
              tasks:
                - "Turn on usage history in your charger or car app"
                - "Log every public charging session with kWh and price"
                - "Work out the month's charging cost per mile @recurring(monthly:9)"
                - "Move one regular public charge to home off-peak charging if you can"
            - name: Laying a car up off the road for months
              description: |-
                ## Purpose
                Working abroad, a long hospital stay or a second car rarely used can leave a car parked for months while tax and full insurance keep running. Declaring it off the road where your country allows, switching to laid-up cover and preparing it properly cuts costs sharply and avoids a flat battery and seized brakes when it returns.

                ## Milestones
                1. Your country's off-road declaration rules, such as SORN in the UK, read.
                2. Insurance switched to laid-up cover, or cancelled with a refund.
                3. The car prepared, with a battery maintainer fitted and tyres inflated.
                4. A return checklist written for putting it back on the road.

                ## Notes
                A car declared off the road usually cannot be kept on a public road. Check where it can legally stay.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An off-road declaration made where needed, insurance reduced and the car prepared, with a return checklist written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your country's rules for declaring a car off the road"
                - "Ask your insurer about laid-up cover or a cancellation refund"
                - "Fit a battery maintainer and inflate the tyres to the upper pressure"
                - "Write a checklist for putting the car back on the road"
            - name: Five-year wear and replacement forecast
              description: |-
                ## Purpose
                Brakes, tyres, the battery, the clutch and the timing belt each wear out on their own clock, and several big items often fall due in the same year. A five-year forecast built from your mileage, test advisories and the service schedule shows the heavy years in advance and sets the allowance at the right level.

                ## Milestones
                1. Each wear item listed with its typical life and when it was last replaced.
                2. An expected replacement year and cost estimated for each.
                3. The five years laid out with any heavy year highlighted.
                4. The forecast updated after each service and annual test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year table of wear items with expected year and cost, updated within a month of the last service."
                cadence: cyclic
              tasks:
                - "List each wear item with when it was last replaced"
                - "Estimate the replacement year and cost for each from your mileage"
                - "Highlight any year where two or more big items fall together"
                - "Update the forecast after the service and annual test @recurring(yearly)"
            - name: Disputing a poor repair or garage overcharge
              description: |-
                ## Purpose
                Repairs that do not fix the fault, work done without permission and invoices well above the quote are common complaints, and many are settled once the driver puts the facts in writing. Knowing your consumer rights, the garage's trade body and the steps up to an ombudsman or small claims court gives you a fair route without a shouting match.

                ## Milestones
                1. Quote, invoice, photos and dates gathered in one place.
                2. A written complaint sent to the garage stating what you want done.
                3. The trade association or dispute scheme identified, if the garage belongs to one.
                4. The outcome recorded, with the next step decided if it is unresolved.

                ## Notes
                If you need the car back, pay and state in writing that you are paying under protest. A garage can often keep the car until the bill is paid.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written complaint with evidence sent, and the outcome or next escalation step recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the quote, invoice, photos and timeline in one folder"
                - "Look up your consumer rights for services in your country"
                - "Send the garage a written complaint stating the remedy you want"
                - "Find out whether the garage belongs to a trade body or dispute scheme"
---

# Car Running Costs

This area is for anyone who runs a car and wants to know what it really costs, whether it is still worth keeping and where the money leaks out. It starts with foundations (a cost ledger, the true annual cost, cost per mile, a paperwork folder, a renewal calendar and a monthly car allowance), moves through the routines that keep costs steady, the skills of reading garage quotes, tyres and warning lights, and decisions on garages, tyres, fuel and repairs, then covers events from a timing belt change to selling the car, situations for young drivers, retirees, business drivers and electric car owners, and ends with specialist work such as laying a car up and disputing a bad repair.

What repeats is a monthly ledger update, cost review, fuel economy check and tyre check, a quarterly cost per mile update, and yearly rounds of service quotes, insurance renewal, pre-test checks, seasonal checklists, a valuation and the keep-or-replace review. The Metrics log, Monthly budget and bills, Operational checklist, Vendor and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
