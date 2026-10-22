---
id: caribbean-diaspora.retiring-to-the-caribbean
name: Retiring to the Caribbean
description: "A retirement in the islands planned with real numbers: choosing an island, residency, pensions paid abroad, healthcare and medicines, housing and backup power, getting around and a social life that lasts."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, retiring-to-the-caribbean, retiree, retirement-abroad, island-living, residency, pensions, healthcare]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - monthly-budget-bills
    - habit-tracker
    - household-chores
    - trip
    - metrics-log
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Retiring to the Caribbean
          description: "Retiring to the Caribbean: choosing an island, residency, pensions paid abroad, healthcare, housing and building a social life."
          projects:
            - name: Island retirement brief with your must-haves
              description: |-
                ## Purpose
                Before comparing islands, write down what this retirement is actually for: being near a mother in Mandeville, a sea bath every morning, living for less than in Toronto, or a church community you already know. A one-page brief with your must-haves, deal-breakers and budget ceiling stops the choice being made by whichever holiday you enjoyed most recently.

                ## Milestones
                1. A one-page brief listing five must-haves, three deal-breakers and a monthly budget ceiling.
                2. Health needs that limit where you can live, such as dialysis, cardiology or a specialist you see often, written in their own section.
                3. The longest flight time you will accept to children and grandchildren noted.
                4. The brief agreed with your spouse or partner, if you are moving together.

                ## Notes
                Write the deal-breakers first. People who skip them tend to fall for an island in March and discover the rainy season, the hills or the distance to the hospital later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page retirement brief with must-haves, deal-breakers, health needs and a budget ceiling exists and is agreed with anyone moving with you."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the five things that would make island retirement worth the move"
                - "Write three deal-breakers you would not accept on any island"
                - "Note every regular health need that limits where you can live"
                - "Set the most you can spend each month once retired"
                - "Ask the agent to tidy your notes into a one-page brief"
            - name: Retirement income map in local currency
              description: |-
                ## Purpose
                Most retirees heading south have income from three or four places: a state pension, a workplace pension, perhaps an annuity, savings and rent from a house abroad. Mapping each one, when it pays, in which currency and whether it can be paid overseas, then converting the total into Barbados dollars, Jamaican dollars or whichever currency you will spend, shows what life you can really afford.

                ## Milestones
                1. Every source of retirement income listed with amount, payment date and currency.
                2. Each source marked as payable abroad, payable only to a home-country account, or not yet known.
                3. A monthly total converted into the local currency of each shortlisted island at a cautious exchange rate.
                4. Gaps, such as a pension that starts years after you plan to move, flagged clearly.

                ## Notes
                Use a rate a little worse than today's so a currency swing does not wreck the plan. How these pensions are taxed is a separate question for the Caribbean Tax Residency and Pensions area and a qualified adviser.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated income map lists every pension and income source with its currency, whether it can be paid abroad and a monthly total in local currency."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather the latest statement for every pension, annuity and savings account"
                - "List each source with its amount, payment date and currency"
                - "Ask each pension provider in writing whether they pay to overseas accounts"
                - "Convert the monthly total into local currency at a cautious rate"
                - "Update the income map when any pension rate changes @recurring(yearly)"
            - name: State pension uprating check for each island
              description: |-
                ## Purpose
                Where you retire can decide whether your state pension rises each year or stays frozen at the rate when you left. The UK State Pension, for example, is uprated in countries with a qualifying reciprocal agreement, Jamaica and Barbados among them at the time of writing, and frozen in many others, so after twenty years the same pension can be worth far less. Checking the official rules for every island on your shortlist puts a real number on that difference.

                ## Milestones
                1. The official rules for paying each of your state pensions abroad found.
                2. Each shortlisted island marked as uprated, frozen or unclear for every pension you hold.
                3. The loss over fifteen years from any frozen pension estimated at today's rates.
                4. The finding added to your island shortlist scores.

                ## Notes
                Use the pension authority's own pages or a written answer from them, not forum posts. US Social Security, the Canada Pension Plan and Old Age Security each have their own rules on payment abroad, and Old Age Security depends on how many years you lived in Canada.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each shortlisted island is marked uprated or frozen for every state pension you hold, using the pension authority's published rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the official page on paying your state pension abroad"
                - "Check each shortlisted island against the uprating rules"
                - "Estimate the fifteen-year cost of a frozen pension at today's rate"
                - "Write to the pension authority about any island that is unclear"
            - name: Island shortlist scored for retirement
              description: |-
                ## Purpose
                Barbados, Tobago, Saint Lucia, Belize, Grenada, Jamaica's north coast and Curacao all draw retirees, for very different reasons. Scoring three or four candidates against the same criteria, such as hospital access, flights to your children, cost of living, hurricane exposure, the residency route and the community you would join, turns a feeling into a choice you can explain to your family.

                ## Milestones
                1. A shortlist of three or four islands drawn from your retirement brief.
                2. Eight criteria weighted before any scoring begins.
                3. Each island scored out of five on every criterion, with pension, health and residency findings included.
                4. A first choice and a reserve chosen, with the reasons written in a paragraph.

                ## Notes
                Hospital access and flights to family matter more at 78 than at 62, so score for the retiree you will be in fifteen years, not the one packing now.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three or four islands are scored on eight weighted criteria, and a first choice and reserve are recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three or four islands that meet the must-haves in your brief"
                - "Agree the eight criteria and their weights before scoring"
                - "Score every island on every criterion in one table"
                - "Write a paragraph explaining your first choice and reserve"
            - name: Cost of living test budget for each shortlisted island
              description: |-
                ## Purpose
                Island prices surprise people in both directions: fruit, fish and the dentist can be cheaper, while electricity for air conditioning, imported groceries, cars and insurance often cost more than in Birmingham or Atlanta. Pricing a real month on each shortlisted island, from the weekly shop to the light bill, shows which places your income map can carry.

                ## Milestones
                1. A standard monthly basket written: rent, light, water, internet, groceries, transport, health cover and leisure.
                2. Current prices for the basket gathered for each island from residents, supermarket sites and rental listings.
                3. A monthly total per island set beside your income map.
                4. A margin for exchange swings and repairs built into each total.

                ## Notes
                Ask someone who already lives there for their actual light bill in August. Air conditioning is where island budgets most often break.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A priced monthly budget exists for each shortlisted island, set against your income map with a margin for swings."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the monthly basket of costs you will price on every island"
                - "Ask a resident on each island for a real August light bill"
                - "Price a week of groceries on each island's supermarket websites"
                - "Set each island's monthly total beside your income"
            - name: Residency routes for retirees on your shortlist
              description: |-
                ## Purpose
                Nationals can usually live at home freely, but a spouse who is not a national, or a retiree with no Caribbean passport, needs a permit. Some countries run schemes aimed at retirees, such as Belize's Qualified Retired Persons programme, while others use permanent residence or independent means categories with income, health and police certificate conditions. Knowing the route on each island before you choose avoids settling on a place where you cannot legally stay.

                ## Milestones
                1. Your own and your partner's right to live on each shortlisted island written down.
                2. The retiree or independent means route for each island identified from the immigration department's own guidance.
                3. Income, health, police certificate and fee conditions listed for each route.
                4. Questions you could not answer sent to the immigration department or a local attorney.

                ## Notes
                Rules and fees change often. Treat agents' websites as leads and confirm every condition with the immigration department or a licensed attorney on that island.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each shortlisted island has a written note of the residency route open to you and your partner, its conditions and its official source."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check whether you or your partner already hold citizenship of each island"
                - "Find each immigration department's page on retirement or independent means permits"
                - "List the income, police certificate and medical conditions for each route"
                - "Email the immigration department with any question their page leaves open"
            - name: Hospitals, specialists and medicines on each island
              description: |-
                ## Purpose
                Healthcare is the reason most often given by retirees who move back abroad, usually because a specialist, a scan or a medicine they relied on was not available on the island. Checking the nearest hospital, which specialities are on island, where patients are flown for the rest and whether your regular medicines are stocked tells you whether an island fits the health you have now and are likely to have.

                ## Milestones
                1. The main public and private hospitals on each island listed with their distance from where you would live.
                2. Specialities you use or are likely to need marked as on island, visiting or off island.
                3. Each regular medicine checked with a local pharmacy for stock and brand.
                4. The island or city most patients are flown to for complex care noted for each candidate.

                ## Notes
                Ask a local pharmacist rather than trusting a hospital website. Smaller islands often depend on visiting consultants and on transfers to a larger island or to Miami for cardiac and cancer care.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows hospitals, specialist availability and local stock of your regular medicines for each shortlisted island."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the specialities and medicines you rely on now"
                - "Phone a pharmacy on each island to check stock of your medicines"
                - "List the public and private hospitals within an hour of each area"
                - "Ask a retiree living there where patients go for complex care"
            - name: Health cover that works for a retiree abroad
              description: |-
                ## Purpose
                Health cover from your working life rarely follows you: US Medicare generally does not pay for care outside the United States, and public cover in the UK or Canada usually ends once you are no longer resident. International and local private plans differ in age limits for new members, exclusions for existing conditions and whether evacuation is included, so comparing them before the move is worth more care than any other purchase.

                ## Milestones
                1. What your current cover pays overseas, and when it stops, confirmed in writing.
                2. Three plans compared on age limits, existing condition exclusions, excess, evacuation and how premiums rise with age.
                3. A plan chosen, or a decision to self-insure recorded with a separate medical reserve.
                4. Policy number and claims line saved in your phone and on the fridge.

                ## Notes
                Start from the **Purchase decision** template. Declare every existing condition: a claim refused at 74 for something undisclosed is far worse than a higher premium at 64.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A health cover decision is recorded, with three plans compared and the chosen policy's claims line saved in two places."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your current insurer or health service in writing when overseas cover ends"
                - "Get quotes from three international or local private health plans"
                - "Compare age limits, exclusions, excess and evacuation in one table"
                - "Check the renewal premium and any new exclusions before paying @recurring(yearly)"
            - name: Family conversation about retiring overseas
              description: |-
                ## Purpose
                Children and grandchildren abroad often hear the plan late and react with worry about who will help if you fall ill. A planned conversation, covering why you are going, how often you will visit, who is the contact if something happens and what you expect of them, lets the family back the move instead of quietly resisting it.

                ## Milestones
                1. A family call or gathering held with every adult child.
                2. Each person's worries written down and either answered or added to the plan.
                3. One child named as the main contact abroad for emergencies.
                4. Visits in both directions agreed for the first year.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every adult child has heard the plan, a main emergency contact abroad is named and first-year visits are agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the three reasons for the move in your own words"
                - "Set a date for a family call that suits every time zone"
                - "Note each child's worries during the call"
                - "Agree who is the emergency contact abroad"
            - name: Residency application evidence pack
              description: |-
                ## Purpose
                Retiree permits usually ask for the same stack: certified passport copies, birth and marriage certificates, police certificates from countries you have lived in, a medical report, bank references and proof of pension income. Some take weeks to obtain and others expire after a few months, so gathering them in the right order saves a second round of fees and appointments.

                ## Milestones
                1. A checklist of every document the chosen route requires, with validity periods.
                2. Police certificates applied for from each country required.
                3. Proof of income letters received from each pension provider.
                4. Originals, certified copies and scans filed together, with expiry dates logged.

                ## Notes
                Order the slow documents first and the short-lived ones last. A police certificate valid for a few months can expire while you wait for a pension letter.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every document on the chosen route's checklist is gathered, certified and scanned, with expiry dates recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Print the document checklist for the residency route you chose"
                - "Apply for police certificates from every country the route requires"
                - "Request proof of income letters from each pension provider"
                - "Scan each document and log its expiry date"
            - name: Monthly retirement budget in local currency
              description: |-
                ## Purpose
                Fixed incomes go further when you can see them, and island costs move with fuel prices, exchange rates and the season. A monthly budget in the currency you spend, set against the pension that actually landed, catches a rising light bill or a weaker pound before it becomes a problem.

                ## Milestones
                1. A budget in local currency with lines for housing, light, water, food, transport, health, help in the home and leisure.
                2. Each month's pension income recorded at the rate it actually converted at.
                3. Spending compared with the budget in a short monthly sitting.
                4. Any line over budget for two months running reviewed and adjusted.

                ## Notes
                Start from the **Monthly budget and bills** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly budget reviews in local currency are recorded, each with actual pension income and spending."
                cadence: rolling
              tasks:
                - "Set up the budget lines in local currency from the template"
                - "Record the pension income that landed this month"
                - "Compare spending against the budget and note any overruns @recurring(monthly:5)"
            - name: Pension arrival and currency exchange routine
              description: |-
                ## Purpose
                Pensions paid in pounds, US dollars or Canadian dollars can lose a surprising slice to conversion fees and poor rates when they land in a local account by default. A routine for where each pension is paid, when and how it is converted, and how much stays in the original currency keeps more of the money and keeps you calm when a payment is late.

                ## Milestones
                1. Each pension's paying account, date and currency written in one table.
                2. Your bank's fees and rate compared with at least one transfer service.
                3. A buffer in the original currency set at a level you are comfortable with.
                4. A rule agreed for how many days to wait before chasing a late payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every pension has a recorded payment route, conversion costs are compared each quarter and a currency buffer is in place."
                cadence: rolling
              tasks:
                - "List each pension's paying account, date and currency"
                - "Confirm each pension arrived and log the rate it converted at @recurring(monthly:9)"
                - "Compare your bank's conversion cost with a transfer service @recurring(quarterly)"
                - "Write down how long you will wait before chasing a late payment"
            - name: Yearly pension and residency paperwork calendar
              description: |-
                ## Purpose
                Living abroad on pensions brings a yearly stack of paperwork: life certificates, address confirmations, tax forms in one or two countries, residency permit renewals and passport expiry dates. Missing one can suspend a pension or an immigration status, so a single calendar with every date and the documents each one needs keeps payments and status uninterrupted.

                ## Milestones
                1. Every recurring form, certificate and renewal listed with its due month.
                2. The documents, witnesses and signatures each one needs noted beside it.
                3. Residency permit and passport expiry dates entered with a six-month warning.
                4. A folder of last year's completed forms kept as a reference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A paperwork calendar lists every pension, tax and residency deadline, and no payment or permit lapses in a full year."
                cadence: cyclic
              tasks:
                - "List every life certificate, tax form and permit renewal you receive"
                - "Enter each due month in your calendar with a reminder a month ahead"
                - "Check passport and residency permit expiry dates six months out @recurring(yearly)"
                - "Add any new forms or changed dates to the calendar @recurring(yearly)"
            - name: Medicines supply routine on the island
              description: |-
                ## Purpose
                Island pharmacies can run short of a particular brand for weeks, and posting medicines from abroad can be slow or held at customs. A routine that keeps a buffer at home, knows the local equivalent of each medicine and refills well before the last strip means a stock-out is an inconvenience rather than a crisis.

                ## Milestones
                1. A medicine list with generic names, strengths and the local brand for each.
                2. A local doctor's prescription in place for every regular medicine.
                3. A home buffer agreed with your doctor and kept topped up.
                4. A second pharmacy identified for each medicine in case the first runs out.

                ## Notes
                Always ask for medicines by generic name abroad, because brand names differ between countries. Agree any switch to a local brand with your doctor first.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every regular medicine has a local prescription, a named second pharmacy and a home buffer, with refills logged monthly for a year."
                cadence: rolling
              tasks:
                - "Write your medicine list using generic names and strengths"
                - "Ask a local doctor to prescribe each regular medicine"
                - "Find a second pharmacy that stocks each medicine"
                - "Count remaining supply and refill before the buffer is touched @recurring(monthly:20)"
            - name: Yearly check-up and screening with a local doctor
              description: |-
                ## Purpose
                Screening that happened automatically abroad, such as a bowel screening kit in the post or a mammogram recall letter, will not follow you to the island. Registering with a family doctor and booking a yearly review, with blood tests and the eye and foot checks that apply to you, keeps preventive care going and gives the doctor a baseline before anything goes wrong.

                ## Milestones
                1. A family doctor chosen and your records from abroad handed over.
                2. A list of screenings due at your age agreed with that doctor.
                3. A yearly review booked in the same month each year.
                4. Results filed alongside your records from abroad.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review with a local family doctor is held, and the screening due at your age is booked and its results filed."
                cadence: cyclic
              tasks:
                - "Ask other retirees which family doctor they trust"
                - "Book a first appointment and bring your records from abroad"
                - "Agree with the doctor which screenings are due at your age"
                - "Book the yearly review and blood tests for your birthday month @recurring(yearly)"
            - name: Weekly social rhythm of clubs, church and friends
              description: |-
                ## Purpose
                Loneliness is the quiet reason many retirees give up on island life after two or three years, once the novelty of the beach wears off. A weekly rhythm with at least two fixed points, such as a church service, a dominoes table, a walking group, a Rotary lunch or a seniors' club, builds friendships the way work once did.

                ## Milestones
                1. Two weekly fixed points chosen and attended for a month.
                2. One new group tried each month for the first six months.
                3. Names and numbers of at least ten people you see regularly saved.
                4. A quiet week noticed and followed by a phone call or an invitation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weekly social fixtures have been kept for six months and at least ten local contacts are saved in your phone."
                cadence: rolling
              tasks:
                - "List the clubs, churches, mandirs, mosques and groups within reach"
                - "Go to your first fixed weekly gathering"
                - "Try one new club, class or group this month"
                - "Plan the week's two social fixtures and one invitation @recurring(weekly:mon)"
            - name: Morning sea bath and walking habit
              description: |-
                ## Purpose
                Older people across the islands swear by the early morning sea bath, a gentle float or swim before the heat, followed by a walk while the air is still cool. Building it into three mornings a week keeps you mobile, gets you out of the house and puts you among the same faces regularly, which is how island friendships often start.

                ## Milestones
                1. A beach or bay chosen with calm water and other early bathers.
                2. Three mornings a week fixed for a sea bath or walk.
                3. A walking partner or group found for at least one morning.
                4. Eight weeks of sessions logged.

                ## Notes
                Start from the **Habit tracker** template. Check with your doctor before starting if you have a heart condition, and never bathe alone in rough water.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sea bath or walking sessions are logged on three mornings a week for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Ask locals which beach is calm and busy early in the morning"
                - "Set up a habit tracker for three mornings a week"
                - "Invite a neighbour to join you one morning"
                - "Go for a sea bath or walk before eight @recurring(weekly:mon,wed,fri)"
            - name: Sunday video call with children and grandchildren
              description: |-
                ## Purpose
                Distance from grandchildren is the cost retirees mention most, and calls that happen only when someone remembers fade within a year. A fixed weekly call at a time that suits school and work in London, New York or Toronto, plus small rituals such as reading a story or watching a Test match together, keeps you part of ordinary family life.

                ## Milestones
                1. A weekly time agreed that suits every household's time zone.
                2. A reliable device, data plan and backup connection arranged.
                3. One shared ritual started with each grandchild.
                4. Birthdays and school events added to your calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly family video call has happened at least 40 times in a year, with every grandchild's birthday in your calendar."
                cadence: rolling
              tasks:
                - "Agree a weekly call time with each of your children"
                - "Test the call app on both your phone and a larger screen"
                - "Choose one ritual to share with each grandchild"
                - "Join the family video call @recurring(weekly:sun)"
            - name: Salt air and heat home maintenance schedule
              description: |-
                ## Purpose
                Salt air rusts burglar bars and car bodies, heat and humidity breed mould and termites, and air conditioners near the sea clog fast. A quarterly round of checks and a yearly service schedule for the roof, gutters, water tank and AC units keeps small repairs small, which matters on a fixed income.

                ## Milestones
                1. A list of every system needing care: roof, gutters, tank, pump, AC, bars, woodwork and paint.
                2. Trusted tradespeople found for AC, plumbing, termite treatment and roofing.
                3. Quarterly checks done and logged for a year.
                4. A yearly repair fund set aside in the budget.

                ## Notes
                Start from the **Household chores** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly home checks are logged in a year, with AC servicing and a termite inspection done on schedule."
                cadence: cyclic
              tasks:
                - "Walk round the house and list everything that needs regular care"
                - "Ask neighbours for an AC technician and termite firm they trust"
                - "Check bars, gutters, tank and AC filters for rust, blockage and mould @recurring(quarterly)"
                - "Book the yearly AC service and termite inspection @recurring(yearly)"
            - name: Hurricane season routine for your own home
              description: |-
                ## Purpose
                From June to November a retiree household needs to be able to manage a week without power, piped water or a trip to the pharmacy. A yearly routine in May, covering shutters, supplies, medicines, documents, insurance and who checks on you, means a storm warning brings a checklist rather than panic.

                ## Milestones
                1. A storm kit with water, food, torches, batteries, a radio and a two-week medicine supply ready by June.
                2. Shutters, trees and loose items checked and your nearest shelter known.
                3. Insurance and key documents copied into a waterproof bag and a cloud folder.
                4. A neighbour and a child abroad agreed as check-in contacts after any storm.

                ## Notes
                Trinidad, Tobago and the ABC islands of Aruba, Bonaire and Curacao sit further south and are hit less often, though not never, as Grenada learned with Ivan. Floods and earthquakes call for the same kit.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each May the storm kit, shutters, documents and check-in contacts are confirmed ready before the season opens on 1 June."
                cadence: cyclic
              tasks:
                - "Find your island's disaster management office and nearest shelter"
                - "Pack a storm kit with a two-week medicine supply"
                - "Agree post-storm check-in contacts on the island and abroad"
                - "Check the kit, shutters, insurance and documents before 1 June @recurring(yearly)"
            - name: How public and private healthcare works for residents
              description: |-
                ## Purpose
                Each island mixes free or low-cost public clinics, a general hospital with long waits, and private doctors and hospitals that expect payment upfront. Understanding what you are entitled to as a national or permit holder, what the polyclinic or health centre offers and when people go private means you choose where to go on a bad day rather than finding out at the door.

                ## Milestones
                1. Your entitlement to public care as a national, resident or permit holder confirmed.
                2. The nearest health centre or polyclinic visited and its hours noted.
                3. How private consultations, tests and admissions are paid for written down, including deposits.
                4. Where ambulances take patients, and whether a private ambulance serves your district, recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note sets out your public entitlement, nearest health centre, private payment rules and ambulance options."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the health ministry what care permit holders and returning nationals can use"
                - "Visit your nearest health centre and note its hours and services"
                - "Ask a private hospital how deposits and admissions are paid"
                - "Find out whether a private ambulance service covers your district"
            - name: Getting around by route taxi, maxi and bus
              description: |-
                ## Purpose
                Few retirees want to drive at night on narrow hill roads, and many find they do not need to once they learn the local system: Trinidad's maxi taxis, minibuses whose coloured band shows the route, Jamaica's route taxis, shared cars running a fixed road, Barbados's ZR vans and the public buses. Some islands offer free or reduced fares for seniors, and knowing routes, prices and safe times gives you independence without a car.

                ## Milestones
                1. Routes from home to the shops, clinic, church and town written down.
                2. Fares, last services and safe pick-up points noted for each.
                3. Any senior fare or free travel scheme checked and the proof it needs obtained.
                4. Two trusted private taxi drivers saved for night and hospital trips.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Routes, fares and pick-up points to five regular destinations are written down and two trusted taxi drivers are saved."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask neighbours which route taxi or bus passes nearest your home"
                - "Ride each regular route once in daylight with someone who knows it"
                - "Ask at the bus terminal about senior fares and the proof needed"
                - "Save the numbers of two taxi drivers you trust for night trips"
            - name: Heat, sun and mosquito-borne illness precautions
              description: |-
                ## Purpose
                Heat hits older bodies harder, some common medicines change how you cope with heat or sun, and dengue, chikungunya and Zika circulate in the region. Asking your doctor about your medicines, learning the warning signs and mosquito-proofing the house turn the climate you came for into one you can live with safely.

                ## Milestones
                1. Your doctor asked whether any of your medicines need extra care in heat or strong sun.
                2. Signs of heat exhaustion and dengue written on a card for the household.
                3. Screens, nets and standing water around the house dealt with.
                4. A daily routine for water, shade and the hottest hours settled.

                ## Notes
                Health services in the region advise calling a doctor about any fever during a dengue outbreak before taking painkillers, so keep the doctor's number on the same card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your doctor's advice on medicines and heat is recorded, a warning signs card is posted and the house has screens and no standing water."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor whether your medicines change how you should handle heat"
                - "Write the warning signs of heat exhaustion and dengue on one card"
                - "Clear standing water from pots, drains and old tyres in the yard"
                - "Fit screens or nets in the bedrooms"
            - name: Everyday Papiamento, Kweyol or Spanish for island life
              description: |-
                ## Purpose
                Retiring to Curacao, Aruba or Bonaire means Papiamento in the market; in Saint Lucia and Dominica many older neighbours speak Kweyol, the French-based creole; Suriname runs on Dutch and Sranan Tongo, and Belize on Kriol and a great deal of Spanish. Even fifty phrases change how people treat you at the shop and how much of village life you can join.

                ## Milestones
                1. The language you most need identified from the island's daily life.
                2. Fifty everyday phrases for greetings, shopping, directions and the doctor learned.
                3. A weekly class, tutor or conversation partner found.
                4. A simple conversation held with a neighbour without switching to English.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fifty everyday phrases are learned and a weekly class or conversation partner has been kept for three months."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the twenty phrases you would use most in a normal week"
                - "Find a class, tutor or church group that teaches the language"
                - "Practise your phrases with a shopkeeper you see every week"
                - "Learn the words you need at the doctor and the pharmacy"
            - name: Scams that target retirees and newcomers
              description: |-
                ## Purpose
                Newcomers with foreign pensions are a known target: fake land sales, lottery calls, romance approaches, contractors who take a deposit and vanish, and acquaintances' relatives with sudden emergencies. Knowing the common patterns on your island and setting a few household rules makes you a harder target without becoming suspicious of everyone.

                ## Milestones
                1. The scams most reported on your island listed from police and bank warnings.
                2. House rules written: no payment by phone, no deposit without a written contract, no new payee without a call-back.
                3. Transaction alerts switched on for every bank account.
                4. One trusted person named to check any large request for money before you pay.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written anti-scam house rules are in place, bank alerts are switched on and a trusted second-opinion person is named."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your island's police and bank warnings about current scams"
                - "Write three household rules for any request for money"
                - "Switch on transaction alerts for every bank account"
                - "Ask a trusted friend to be your second opinion before any large payment"
            - name: Online pension portals, telehealth and banking from the island
              description: |-
                ## Purpose
                Pension providers, tax authorities and banks abroad keep moving services online, and many send login codes to a phone number in the old country. Setting up each portal, keeping a dependable way to receive those codes and learning video appointments with a doctor abroad where that is allowed means you can manage things from the verandah instead of an expensive international call centre.

                ## Milestones
                1. A list of every online account you need abroad, with its login method.
                2. A dependable way to receive security codes from the island arranged, such as a kept number or an authenticator app.
                3. Each portal tested from the island, including downloading one pension statement.
                4. Passwords stored in a password manager with emergency access set up.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every pension, bank and health portal you need has been logged into from the island and security codes can still be received."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every online account you use for pensions, banking, tax and health"
                - "Ask each bank how it sends security codes to customers living overseas"
                - "Log into each portal from the island and download one statement"
                - "Ask the agent to write a plain-English guide to each portal's login steps"
            - name: Building a circle of friends in the first year
              description: |-
                ## Purpose
                Friendships after 60 take deliberate effort anywhere, and on an island it is easy to end up only with other foreign retirees or only with relatives. A first-year plan that mixes neighbours, a faith community, a hobby group and one volunteer role gives you local friends, people to call in an emergency and a real sense of belonging.

                ## Milestones
                1. Neighbours on both sides and across the road introduced and their names known.
                2. One faith, hobby or interest group joined and attended for three months.
                3. At least one friendship outside both the expat crowd and the family.
                4. A small gathering hosted at home before the year is out.

                ## Notes
                Greet everyone with good morning or good afternoon before asking anything; skipping it is the classic newcomer mistake. A lime, the Trinidadian and Bajan word for an easy gathering where people simply hang out together, is the natural way to host.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "By the end of the first year you know your neighbours by name, belong to one group and have hosted one gathering at home."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Introduce yourself to the neighbours on both sides and across the road"
                - "Pick one group outside the expat crowd and the family to join"
                - "Invite one new acquaintance for a coffee or a lime"
                - "Host a small lime at home for the people you have met"
            - name: Full move, snowbird winters or a split year
              description: |-
                ## Purpose
                Not every retiree needs to leave abroad entirely: some spend November to April on the island and summers near grandchildren, others move fully and visit. Each pattern has different costs and different residency, tax and health cover consequences, so comparing them side by side before giving up a home or a doctor abroad keeps your options open.

                ## Milestones
                1. Three patterns costed: a full move, winters only and a fixed split year.
                2. Residency, health cover and tax residency effects of each listed for professional checking.
                3. Days per year in each country counted under each pattern.
                4. A pattern chosen, with the date you will review it.

                ## Notes
                Day counts can change your tax residency in either country. Confirm the effect with a tax professional before booking flights; the Caribbean Tax Residency and Pensions area covers the detail.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision between a full move, winters only or a split year is recorded with costs, day counts and a review date."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Cost a year of each pattern using your test budgets"
                - "Count the days you would spend in each country under each pattern"
                - "Ask a tax professional which patterns change your residency"
                - "Write down the pattern you chose and when you will review it"
            - name: Rent for a year before you buy
              description: |-
                ## Purpose
                Plenty of people who buy on an island in their first months sell within a few years, after meeting the rainy season, the rum shop sound system next door or the hill they cannot climb at 75. Renting for twelve months in your chosen area tests the place through every season and keeps your capital safe while you learn the market.

                ## Milestones
                1. A twelve-month rental secured in your preferred district.
                2. A season-by-season note kept of heat, rain, noise, mosquitoes, power cuts and road access.
                3. Three areas you might buy in visited at different times of day and week.
                4. A decision to buy, keep renting or try another district made at month eleven.

                ## Notes
                Buying itself, from title searches to choosing an attorney, is covered in the Buying Land or a House Back Home area.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After twelve months of renting, a written decision to buy, keep renting or move district is recorded with notes from every season."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write down what would make you want to stay in an area for twenty years"
                - "Keep a monthly note of heat, rain, noise and outages at the rental"
                - "Visit three possible buying areas at night and on a Sunday"
                - "Decide at month eleven whether to buy, keep renting or move"
            - name: Choosing a long-term rental that suits later life
              description: |-
                ## Purpose
                A house that suits a holiday rarely suits retirement: steps to the front door, the only bathroom upstairs, no water tank, a long unlit road or a landlord abroad who never answers. Choosing with a checklist built for later life, covering access, water, power, security and distance to a clinic and shops, and settling between village, town or a gated development, saves a second move.

                ## Milestones
                1. A checklist of later-life must-haves for a rental written.
                2. Village, town and gated development compared for cost, company and security.
                3. At least five places viewed and scored against the checklist.
                4. A lease signed with repairs, deposit return and notice period in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A rental is chosen after scoring at least five properties on a later-life checklist, with repairs and notice terms written into the lease."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write a checklist of access, water, power, security and distance needs"
                - "Weigh village, town and gated living against your brief"
                - "View five rentals and score each one on the checklist"
                - "Have the lease reviewed before you sign it"
            - name: Single-level, step-free home adaptations
              description: |-
                ## Purpose
                Caribbean houses are often raised on pillars or set into a hillside, with steps to every door and showers over high tub walls. Adapting your home early with rails or a ramp, a walk-in shower, non-slip outdoor tiles and good lighting keeps you living independently for longer and costs far less than a rushed change after a fall.

                ## Milestones
                1. A room-by-room walk-through noting steps, slippery surfaces, dark corners and hard-to-reach storage.
                2. Priority changes listed with quotes from a local contractor.
                3. Grab rails, non-slip surfaces and better lighting fitted first.
                4. A plan for a ground-floor bedroom and walk-in shower written for later.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Grab rails, non-slip surfaces and lighting are fitted, and a costed plan exists for any larger step-free changes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Walk through each room and list every step and slippery surface"
                - "Get two quotes for rails, a ramp and outdoor non-slip tiles"
                - "Fit grab rails by the toilet and shower first"
                - "Price a ground-floor bedroom and walk-in shower for later"
            - name: Backup power and water for a retiree household
              description: |-
                ## Purpose
                Power cuts and water lock-offs are part of island life, and for a retiree they mean more than inconvenience: a fridge holding insulin, a CPAP machine, a fan in the August heat or a toilet that will not flush. Sizing a water tank and pump, and choosing between a generator, a battery inverter or solar with storage, keeps the essentials running through the usual outages.

                ## Milestones
                1. Essential loads listed: fridge, medical devices, fans, lights, phone charging and the water pump.
                2. Water tank size and pump checked against a week of use.
                3. Generator, inverter and solar options compared on cost, noise, fuel and maintenance.
                4. A backup system installed and tested under real load.

                ## Notes
                Start from the **Purchase decision** template. Never run a generator indoors or in a closed garage.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A backup power and water system covering every listed essential load is installed and has passed a test under load."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every device that must keep running during a power cut"
                - "Check how many days your water tank lasts without mains supply"
                - "Get quotes for a generator, an inverter and solar with storage"
                - "Run the backup system for an hour to test it @recurring(monthly:15)"
            - name: Car or no car in retirement on the island
              description: |-
                ## Purpose
                Owning a car means independence where buses are thin, but it brings import duty or high local prices, insurance, salt-air rust and the switch to driving on the left in Jamaica or Barbados, or on the right in Aruba or Belize. Comparing the yearly cost of owning one against route taxis, a regular driver and occasional rentals often shows a clear winner for your district.

                ## Milestones
                1. The yearly cost of owning a car estimated, including purchase, duty, insurance, fuel and repairs.
                2. The yearly cost of taxis, a regular driver and occasional rentals estimated for the same trips.
                3. Your comfort on the island's roads at dusk and in rain tested on a few drives.
                4. A decision recorded, with the age or health change that would make you revisit it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A car or no car decision is recorded with the yearly cost of both options and a stated trigger for revisiting it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Estimate a year of car costs including duty, insurance and repairs"
                - "Estimate a year of taxis, a regular driver and occasional rentals"
                - "Drive a rental on local roads at dusk and in rain"
                - "Write down the change that would make you revisit the decision"
            - name: Hiring a housekeeper, gardener or caretaker fairly
              description: |-
                ## Purpose
                Paid help in the home is common on many islands, and in later life a regular helper can be the person who notices you are unwell. Agreeing pay, hours, duties, holidays and any national insurance registration up front keeps the arrangement fair and keeps a good helper for years.

                ## Milestones
                1. Duties, hours and days written for each role you need.
                2. Local going rates checked with neighbours and the labour department.
                3. Whether you must register as an employer with the national insurance scheme confirmed.
                4. A written agreement signed and a payment record kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each helper has a signed written agreement covering pay, hours, duties and holidays, and employer registration is confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the duties and hours for the help you need"
                - "Ask neighbours what they pay for the same work"
                - "Check with the national insurance office whether you must register as an employer"
                - "Sign a written agreement with your helper and keep a pay record"
            - name: Three-month trial stay in the rainy season
              description: |-
                ## Purpose
                Two weeks at Christmas shows an island at its best. Three months living as a resident, ideally including part of the rainy season, renting in the district you are considering, shopping locally and using the clinics, tests the real heat, mosquitoes, power cuts and loneliness before you sell anything abroad.

                ## Milestones
                1. A three-month stay booked in a rental in your first-choice district.
                2. A list of things to test: the trip to the clinic, the shop and church, night noise, outages and costs.
                3. A weekly diary of what worked and what did not.
                4. A go, adjust or reconsider verdict written within two weeks of returning.

                ## Notes
                Start from the **Trip** template. Check how long you can stay as a visitor before booking; some islands grant shorter visitor stays than three months without an extension.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A three-month trial stay is completed in the chosen district, with a weekly diary and a written verdict."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Check how long a visitor can stay on your first-choice island"
                - "Book a three-month rental in the district you would live in"
                - "Write the list of things the stay must test"
                - "Write your verdict within two weeks of flying back"
            - name: Residency application submission and follow-up
              description: |-
                ## Purpose
                Once the evidence pack is ready, the application itself is a dated event: a submission or appointment, fees, sometimes an interview, then weeks or months of waiting. Running it as a project with a log of every call and reference number keeps it moving and avoids overstaying while a decision is pending.

                ## Milestones
                1. The application submitted with every document and fee, and the receipt filed.
                2. Reference numbers, officers' names and promised dates logged.
                3. Your visitor status kept valid while the application is pending.
                4. The permit received and its conditions and renewal date recorded.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The residency application is submitted with a receipt, every follow-up is logged and the permit's conditions and renewal date are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Book the submission appointment with the immigration department"
                - "Submit the application and file the receipt and reference number"
                - "Log every call and visit with the officer's name and the date"
                - "Ask in writing what status you hold while the decision is pending"
            - name: Night-time hospital run rehearsal
              description: |-
                ## Purpose
                Chest pain at two in the morning is the wrong moment to discover the ambulance takes forty minutes, the private hospital wants a deposit and nobody knows your medicines. Rehearsing the route, the payment and the bag once, in daylight, with the neighbour who would drive you, means the real night runs on a plan.

                ## Milestones
                1. The fastest route to the nearest emergency department driven once with your chosen driver.
                2. Ambulance and private hospital numbers saved in your phone and on the fridge.
                3. A grab bag packed with medicine list, ID, insurance card and a way to pay a deposit.
                4. Your emergency contact abroad briefed on who drives and which hospital.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The route to emergency care has been driven once, the grab bag is packed and contacts on the island and abroad know the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a neighbour whether they would drive you to hospital at night"
                - "Drive the route to the emergency department together in daylight"
                - "Pack a grab bag with medicine list, ID, insurance card and deposit money"
                - "Send the plan to your emergency contact abroad"
            - name: First hurricane season in your new home
              description: |-
                ## Purpose
                The first season in a new house teaches what no checklist can: where water comes in, how long the power stays off and which neighbours look out for each other. Treating it as a one-off event, with a pre-season survey, a watch on every named storm and a debrief in December, sets up every season after it.

                ## Milestones
                1. A pre-season survey of roof, windows, drains and trees done with a builder or experienced neighbour.
                2. Every named storm followed through the island's official updates, not social media rumours.
                3. Any damage, leaks or outages logged with dates and photos.
                4. A December debrief listing changes for next season.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pre-season survey, a log of storms and any damage, and a written December debrief exist for your first season."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask an experienced neighbour to walk the house with you before June"
                - "Follow the island's meteorological service for official storm updates"
                - "Photograph and log any leak, damage or outage with dates"
                - "Write a December debrief of what to change next season"
            - name: Annual trip abroad for family and medical reviews
              description: |-
                ## Purpose
                Most retirees in the islands still fly back once a year: to see grandchildren, attend a graduation, keep an appointment with a specialist or deal with a bank in person. Planning it as one yearly trip, with appointments and errands booked in advance, makes the most of the fare and of your time in the cold.

                ## Milestones
                1. Travel dates set around a family event and booked early for fares.
                2. Medical, dental and bank appointments abroad booked before you fly.
                3. Travel insurance checked to cover medical care in your old country.
                4. An errand list completed and things to bring back packed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly trip abroad is completed with family time, booked medical and bank appointments and every listed errand done."
                cadence: cyclic
              tasks:
                - "Choose dates around the main family event of the year"
                - "Book medical and bank appointments abroad before the flight"
                - "Check your travel insurance covers medical care in your old country"
                - "Plan next year's trip abroad and the appointments to book @recurring(yearly)"
            - name: Hosting the grandchildren for a summer on the island
              description: |-
                ## Purpose
                Summers with grandparents in the islands are something children remember for life and a break their parents need. Planning one, from consent letters for children flying without both parents to sea safety, a few outings, a budget and quiet afternoons for you, keeps it joyful for a host in their seventies.

                ## Milestones
                1. Dates, flights and who brings the children agreed with their parents.
                2. Travel and medical consent letters arranged for children travelling without a parent.
                3. A loose plan of outings, family visits and rest days written.
                4. Sea safety rules and the local doctor's number shared with every adult.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The grandchildren's summer visit is completed with consent letters in place, a written outings plan and a tracked budget."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree dates and travel arrangements with the children's parents"
                - "Ask the parents to arrange travel and medical consent letters"
                - "Plan outings with a rest day after each one"
                - "Set a budget for food, outings and treats"
            - name: Retiring as a couple when only one of you is from the region
              description: |-
                ## Purpose
                When a Jamaican-born husband retires home with a Scottish wife, or a Guyanese-Canadian woman brings her partner from Ottawa, one person is going home and the other is emigrating. The partner without family, friends or citizenship there needs a plan of their own: their own residency, their own friends, their own reasons to stay and an agreed way out if it does not work.

                ## Milestones
                1. The non-national partner's residency route confirmed and their documents in order.
                2. Two activities or groups chosen that belong to that partner, not to the family.
                3. A check-in every three months on how each of you is finding it.
                4. An agreed plan for what happens if one of you wants to leave.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The non-national partner has a confirmed residency route and two groups of their own, and quarterly check-ins are held for a year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Talk honestly about what each of you is giving up"
                - "Confirm the residency route for the partner who is not a national"
                - "Choose two activities that belong only to the non-national partner"
                - "Hold a check-in on how each of you is settling @recurring(quarterly)"
            - name: Retiring alone or after losing a partner
              description: |-
                ## Purpose
                Single retirees and widows or widowers do retire to the islands happily, but living alone needs a safety net that a couple builds without thinking. A daily check-in, a key holder, a neighbour who notices closed curtains and a weekly social commitment mean a fall or illness is found within hours, not days.

                ## Milestones
                1. A daily check-in arranged by message or call with a friend, neighbour or relative.
                2. A spare key with a trusted neighbour and an emergency contact card by the door.
                3. One weekly social commitment kept.
                4. A personal alarm or alert app chosen if you live somewhere quiet.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A daily check-in, a key holder and an emergency card are in place, and one weekly social commitment has been kept for three months."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a daily good-morning message with a friend or relative"
                - "Give a spare key to a neighbour you trust"
                - "Put an emergency contact and medicine card by the front door"
                - "Call one friend you have not seen this week @recurring(weekly:fri)"
            - name: Retiring with diabetes, a heart condition or kidney disease
              description: |-
                ## Purpose
                Long-term conditions are common among retirees, and the region's high rates of diabetes and hypertension mean services exist, but specialist access varies widely between islands. Matching your condition to a named specialist, the tests you need, supplies such as test strips or insulin, and the dialysis or cardiac unit within reach decides whether you can stay well there.

                ## Milestones
                1. A summary letter from your specialist abroad with diagnosis, medicines and test history.
                2. A named specialist or clinic on the island accepting you as a patient.
                3. Supplies such as test strips, insulin or devices confirmed as locally available.
                4. Readings or results logged monthly and shared with your doctor.

                ## Notes
                Start from the **Metrics log** template. If you need dialysis, check that a regular slot exists before you move, because some smaller islands have very few places.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named local specialist holds your summary letter, supplies are confirmed available and readings are logged monthly for six months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your specialist abroad for a summary letter to take with you"
                - "Find a specialist or clinic on the island who will take you on"
                - "Check local stock of your test strips, insulin or devices"
                - "Log your readings and send them to your doctor @recurring(monthly:24)"
            - name: Retiring early in your fifties to the islands
              description: |-
                ## Purpose
                Leaving work at 52 or 55 can mean a decade before state pensions start, private health premiums that rise every year and a need for purpose that holidays do not fill. An early retiree's plan bridges the income gap, budgets for health cover until any public entitlement and settles whether part-time work, consulting or a small business is allowed under your permit.

                ## Milestones
                1. Bridging income from savings or a workplace pension mapped year by year until state pensions begin.
                2. Health cover costs projected to age 70.
                3. Your permit's rules on paid work confirmed with the immigration department.
                4. A weekly structure with one purposeful commitment beyond leisure.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A year-by-year bridging income plan, a health cover cost projection and your permit's work rules are written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Map your income for each year until every state pension starts"
                - "Project health cover premiums to age 70"
                - "Ask the immigration department whether your permit allows paid work"
                - "Choose one purposeful weekly commitment beyond leisure"
            - name: Retiring to the region without family ties there
              description: |-
                ## Purpose
                Plenty of retirees with no Caribbean roots choose Tobago, Belize or Bonaire for the sea, the pace and the people. Arriving without a family network means building local knowledge and trust from scratch: learning the history and customs, avoiding the bubble of a gated enclave and respecting how things are done before trying to change them.

                ## Milestones
                1. A reading list on the island's history and culture started and two books finished.
                2. A local friend or mentor found for practical questions.
                3. National days such as Emancipation and Independence marked in your calendar.
                4. One local organisation supported through membership or volunteering.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two books on the island's history are read, a local mentor is found and one local organisation is supported."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask a local bookshop or library for two books on the island's history"
                - "Find a local friend willing to answer practical questions"
                - "Add the island's national and religious holidays to your calendar"
                - "Join or support one local organisation"
            - name: Caring for a spouse whose health declines on the island
              description: |-
                ## Purpose
                A partner's stroke, dementia or heart failure changes island retirement overnight: the hills, the heat, the distance to specialists and the thin formal care services all weigh more. A carer's plan covering home nursing, respite, money, your own health and the honest question of staying or moving near the children abroad keeps both of you supported.

                ## Milestones
                1. A list of care needs agreed with your spouse's doctor.
                2. Home nurses or carers found and their hours and costs recorded.
                3. Regular respite arranged so the carer gets time off each week.
                4. A written stay or move decision talked through with your children.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A care plan with paid help, weekly respite and a stay or move decision discussed with the children is written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your spouse's doctor to list the care needs for the next six months"
                - "Find two home nursing or carer services and note their rates"
                - "Arrange a weekly half day off for yourself"
                - "Ask the agent to draft a stay or move summary for a family call"
            - name: A role in community life after retirement
              description: |-
                ## Purpose
                Retired nurses, teachers, accountants and engineers bring skills island communities need on a church council, a school board, a Rotary or Lions club, a seniors' association or a credit union committee. Taking one defined role, with a fixed commitment and a term, gives purpose and standing without turning retirement into a second job.

                ## Milestones
                1. Three local organisations shortlisted that match your skills.
                2. One role taken with a clear time commitment and term.
                3. A year in the role completed.
                4. A decision to continue, change or step back made at the end of the term.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One defined community role is held for a year with an agreed time commitment, and a decision is made at the end of the term."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "List the skills from your working life an organisation could use"
                - "Shortlist three local organisations that need those skills"
                - "Agree the hours and term before accepting a role"
                - "Review at year end whether to continue or step back"
            - name: Medical evacuation and air ambulance cover
              description: |-
                ## Purpose
                Some emergencies, such as a major heart attack, a severe stroke or a serious burn, need care a smaller island cannot give, and an air ambulance to Barbados, Trinidad, Puerto Rico or Miami can cost tens of thousands of US dollars. Knowing whether your health plan includes evacuation, or buying a separate membership, and recording exactly how to trigger it protects your savings on the worst night.

                ## Milestones
                1. Your health plan's evacuation terms read and its limits noted.
                2. Separate evacuation memberships compared if needed, including age limits and which hospitals they fly to.
                3. The trigger process, phone numbers and policy numbers written on your emergency card.
                4. Your local doctor and emergency contact told how evacuation is arranged.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Evacuation cover is confirmed or bought, and the trigger numbers are written on your emergency card and known to two people."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the evacuation section of your health plan"
                - "Compare two evacuation memberships on age limits and destination hospitals"
                - "Write the trigger number and policy number on your emergency card"
                - "Confirm the evacuation cover has renewed @recurring(yearly)"
            - name: Later-life plan if living independently gets hard
              description: |-
                ## Purpose
                Island retirement at 65 can look very different at 85, when driving stops, specialists are needed more often and children are a long flight away. Deciding now, while you are well, what would trigger a move to a care home on the island, live-in help or a return near family abroad spares your children an emergency decision made on your behalf.

                ## Milestones
                1. Care homes and live-in care on the island researched or visited, with costs.
                2. The cost and residency position of moving back near family abroad checked.
                3. Your triggers written: the changes that would prompt each option.
                4. The plan shared with your children and your local doctor.

                ## Notes
                Pair this with powers of attorney and wills, covered in the Wills and Estates Across Two Countries area.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written later-life plan with researched options, costs and personal triggers is shared with your children and your doctor."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Visit or call two care homes on the island and ask their costs"
                - "Ask what live-in care costs and who provides it locally"
                - "Check whether you could still access care and housing near family abroad"
                - "Write the changes that would trigger each option and share them"
            - name: Five-year review of your island retirement
              description: |-
                ## Purpose
                Five years in, the honeymoon is long over and the real picture is clear: money, health, friendships, family visits and whether the island still fits. A structured review, comparing life now with your original brief and asking whether to stay, change district or island, or return abroad, makes the next ten years a choice rather than a drift.

                ## Milestones
                1. Your original retirement brief compared with life now, point by point.
                2. Five years of budgets and health notes reviewed for trends.
                3. Your spouse, children and closest local friends asked for their honest view.
                4. A stay, adjust or move decision recorded with the next review date.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written five-year review compares life now with the original brief and records a stay, adjust or move decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Reread your original retirement brief and mark what has changed"
                - "Review five years of budgets for rising costs"
                - "Ask your family and closest local friends how they think it is going"
                - "Ask the agent to summarise your notes into a stay, adjust or move paper"
---

# Retiring to the Caribbean

Retiring to the Caribbean works best as a decision made with numbers rather than a postcard: which island, on what income, near which hospital, in what kind of home and among which friends. This area is for retirees, whether you are going home after forty years in Leeds, Brooklyn or Scarborough or choosing the islands with no family ties at all, and it runs from the foundations of the island brief, income map, pension uprating, health cover and residency routes, through the routines of island life, practical know-how on healthcare, transport, heat and scams, the decisions on renting, power, cars and help in the home, the trial stay and the first hurricane season, situations for couples, single, early and caring retirees, and finally evacuation cover, the later-life plan and the five-year review.

The rhythm is a weekly round of sea baths, social fixtures and the Sunday family call, a monthly budget, pension and medicine check, quarterly home, currency and couple check-ins, and a yearly cycle of hurricane preparation before June, paperwork, check-ups, cover renewals and the trip abroad. The Purchase decision, Monthly budget and bills, Habit tracker, Household chores, Trip and Metrics log templates pair with the health cover, backup power, budget, sea bath, maintenance, trial stay and long-term condition projects. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
