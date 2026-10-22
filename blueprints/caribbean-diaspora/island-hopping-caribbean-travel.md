---
id: caribbean-diaspora.island-hopping-caribbean-travel
name: Island Hopping Caribbean Travel
description: "Multi-island Caribbean trips that hold together: entry rules checked island by island, regional flights and ferries mapped, a budget that counts every leg, and festivals and small islands timed right."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, island-hopping-caribbean-travel, everyone, travel, regional-airlines, ferries, multi-island, entry-rules]
author: Aurum Technology
starter_structure:
  templates:
    - trip
    - purchase-decision
    - savings-goal
    - metrics-log
    - risk-register
    - operational-checklist
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Island Hopping Caribbean Travel
          description: "Travelling around the Caribbean: regional airlines and ferries, entry rules, festivals by island, budgets and building a multi-island trip."
          projects:
            - name: Island wish list and rough route map
              description: |-
                ## Purpose
                Most multi-island trips start as a vague wish to see a few islands and end with a route that zigzags across the map and burns two days on connections. Listing the islands you want, grouping them by sub-region (the Leewards, the Windwards, the Grenadines, the ABC islands, the Bahamas, the Greater Antilles and the Guianas) and drawing a rough line through them shows which combinations are realistic in the time you have. It is the page every later decision hangs off.

                ## Milestones
                1. A list of every island you are curious about, each with one sentence on why.
                2. Islands grouped by sub-region on a single map or sketch.
                3. A rough route of three to five islands that runs in one direction, with nights allocated to each.
                4. Islands that do not fit this trip moved to a list for later, not deleted.

                ## Notes
                Start from the **Trip** template. For a first hop, a sensible default is no more than one island change every four nights: less moving means more island.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written route of three to five islands in one direction, with nights allocated to each and a separate list of islands saved for later."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every Caribbean island you would like to see and why"
                - "Group the islands by sub-region on a printed or online map"
                - "Draw one route through three to five islands that does not double back"
                - "Allocate nights to each island and total them against your leave"
                - "Move the islands that do not fit onto a list for a later trip"
            - name: Entry rules checked for every island on the route
              description: |-
                ## Purpose
                Each country and territory in the region sets its own entry rules, so the passport that gets you into Barbados without a question may still need a visa, an online arrival card or a US travel authorisation further along the route. Checking every stop against your actual nationality before booking avoids being refused boarding at a small airport with no way to fix it. Requirements change, so the check only counts when it comes from each government's own immigration page or your foreign ministry's travel advice.

                ## Milestones
                1. A table listing every island on the route against your nationality.
                2. Visa, arrival card and onward ticket requirements noted for each, with the official source and the date checked.
                3. Passport validity rules checked against your expiry date for the last day of the trip.
                4. Any visa or authorisation that must be applied for in advance submitted.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every island on the route has its entry requirements for your nationality recorded with an official source and date, and any advance applications are submitted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every island on the route with the country or territory it belongs to"
                - "Check each one on its official immigration page for your nationality"
                - "Note passport validity, onward ticket and arrival card rules for each stop"
                - "Apply for any visa or travel authorisation the route needs"
            - name: Regional airline and ferry network map
              description: |-
                ## Purpose
                Getting between islands is the hard part of island hopping: some pairs have several flights a day, others one flight a week or a ferry that sails only when the sea allows. Sketching who actually flies or sails between your chosen islands, for example Caribbean Airlines, interCaribbean, Winair, Air Antilles and the Express des Iles ferry linking Guadeloupe, Dominica, Martinique and St Lucia, shows the real shape of the possible route. Routes are added and dropped often, so check the map against current schedules before each trip.

                ## Milestones
                1. Every airline and ferry operator serving your islands listed.
                2. Each island pair on the route marked with who connects it and how often.
                3. Pairs with no direct link marked with the hub you would route through.
                4. The route adjusted wherever a connection is only weekly or seasonal.

                ## Notes
                Small regional carriers often do not appear on the big flight search sites. Each island's airport website usually lists every airline that lands there, which is the quickest way to build the map.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A map or table shows which airline or ferry links each island pair on the route and how often, with a hub named for every pair lacking a direct link."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search each island's airport website for the airlines that serve it"
                - "List the ferry operators for island pairs separated by a short crossing"
                - "Mark each island pair with who connects it and how often"
                - "Find a hub for every pair with no direct link"
            - name: Full-cost budget for a multi-island trip
              description: |-
                ## Purpose
                Island hops cost more than the headline fares suggest: a forty-minute regional flight can cost as much as the transatlantic leg, and departure taxes, ferry tickets, airport taxis and extra baggage add up on every hop. A budget that counts each leg separately tells you before booking whether the route is affordable or needs an island dropped. It also gives the travel fund a real target.

                ## Milestones
                1. Long-haul flights, every inter-island flight and every ferry priced.
                2. Accommodation, island transport, food and activities estimated per island.
                3. Departure taxes, baggage fees and airport transfers added as separate lines.
                4. A total with a contingency of at least 10 percent, compared with what you can afford.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A per-leg and per-island budget with a contingency line and a total exists, compared with your available money and a decision recorded on whether every island stays."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price every flight and ferry leg on the draft route"
                - "Estimate nightly accommodation and daily spending for each island"
                - "Add lines for departure taxes, baggage and airport transfers on every hop"
                - "Add a contingency and compare the total with your budget"
                - "Drop or swap an island if the total is out of reach"
            - name: Health entry rules and a travel clinic visit
              description: |-
                ## Purpose
                Health rules for entry vary across the region: some countries ask for a yellow fever certificate if you arrive from a country with yellow fever risk, and Guyana and Suriname are on that list, so the order of your route can matter. Mosquito-borne illnesses such as dengue are present across the islands. A travel clinic appointment six to eight weeks before departure lets a professional advise on vaccines and medicines for your exact route.

                ## Milestones
                1. Your full route, in travel order, written down to show the clinic.
                2. Each country's health entry requirements checked on an official source.
                3. A travel clinic or doctor appointment held and the advice recorded.
                4. Any certificate kept with your passport, and regular medicines packed in original packaging with prescriptions.

                ## Notes
                Ask the clinic specifically about the order of countries: arriving in another island from Guyana is not the same as arriving from London or Toronto.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Health entry requirements for every country on the route are recorded and a travel clinic appointment has taken place with its advice written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the route in travel order to take to the clinic"
                - "Check each country's health entry rules on an official source"
                - "Book a travel clinic appointment six to eight weeks before departure"
                - "Store any vaccination certificate with your passport"
            - name: Insurance that covers missed inter-island connections
              description: |-
                ## Purpose
                Regional flights are cancelled and retimed often, and a missed ferry or a delayed turboprop can knock out the next three bookings. Many policies cover the long-haul flight but not separately booked inter-island legs, and many stop covering a storm once it has been named. Reading the wording against your actual route before buying is the only way to know what you have.

                ## Milestones
                1. Two or three policies compared on missed connections, cancellation, medical evacuation and hurricane cover.
                2. Each policy's treatment of separately booked flights and ferries confirmed in writing.
                3. A policy bought that covers every island and activity on the route.
                4. Policy number and emergency line saved offline and shared with someone at home.

                ## Notes
                Start from the **Purchase decision** template. Buy as soon as the first leg is booked: cover bought after a storm is named usually excludes it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A policy is bought whose wording covers separately booked regional legs, medical evacuation and named storms for every island on the route."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the cover you need: missed connections, evacuation, storms and activities"
                - "Compare three policies on how they treat separately booked legs"
                - "Buy the policy that covers every island and activity on the route"
                - "Review or renew annual multi-trip cover before the travel year starts @recurring(yearly)"
            - name: Currency plan for EC dollars, guilders, euros and more
              description: |-
                ## Purpose
                A single hop can cross four currencies: the Eastern Caribbean dollar shared by eight islands and territories, the euro in Martinique and Guadeloupe, the guilder in Curacao and Sint Maarten, and the US dollar in the British Virgin Islands and Puerto Rico. Knowing where US dollars are accepted, where cards work and where only local cash will do saves money lost to poor exchange rates and dead card readers in small shops. A plan also stops you landing on a Sunday with nothing for the taxi.

                ## Milestones
                1. Each island's currency noted, with whether US dollars are widely accepted.
                2. Your cards checked for foreign transaction fees and travel notices set where needed.
                3. A small amount of local cash or US dollars planned for each arrival.
                4. A rule set for spending or changing leftover cash before leaving each island.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page currency plan lists the money, card acceptance and arrival cash for every island on the route."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the currency used on each island on the route"
                - "Check which of your cards charge foreign transaction fees"
                - "Plan arrival cash for every island, including taxis and departure fees"
                - "Decide what to do with leftover cash before each departure"
            - name: Travel document pack, on paper and offline
              description: |-
                ## Purpose
                Small island airports and ferry terminals often ask for things a big airport would not: a printed onward ticket, the address you are staying at, proof of insurance. Keeping every confirmation in one folder, on paper and offline on your phone, means a flat battery or no signal at the dock does not stop you boarding. A copy left with someone at home covers loss and theft.

                ## Milestones
                1. Passport, visas, insurance and every booking confirmation in one folder.
                2. The same documents saved offline on your phone.
                3. Accommodation addresses and phone numbers listed for each island, ready for arrival cards.
                4. A copy shared with a trusted person at home.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed and an offline document pack exist with every booking for the route, and a copy is held by someone at home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every booking confirmation into one folder"
                - "Print onward tickets and accommodation addresses for each island"
                - "Save the full pack offline on your phone and share a copy at home"
                - "Refresh the offline copies of passports and licences after any renewal @recurring(yearly)"
            - name: Phone and data across several islands
              description: |-
                ## Purpose
                Roaming on a foreign plan can cost more than a night's accommodation, while a regional SIM or eSIM from an operator such as Digicel or Flow can cover several islands for a fraction of the price. Choosing before you go means maps, ride bookings and airline messages work from the first landing. It also gives family at home a number that stays the same across the trip.

                ## Milestones
                1. Your home plan's roaming charges for the region checked.
                2. Regional SIM, eSIM and roaming options compared on price and island coverage.
                3. A choice made and the phone confirmed as unlocked.
                4. Offline maps downloaded for every island on the route.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A data option covering every island on the route is chosen, the phone is confirmed unlocked and offline maps are downloaded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check your home plan's roaming charges for each island"
                - "Compare regional SIM and eSIM options on price and coverage"
                - "Download offline maps for every island on the route"
                - "Top up a kept regional SIM so the number stays active @recurring(quarterly)"
            - name: Island-hopping fund with a monthly transfer
              description: |-
                ## Purpose
                Saving for a multi-island trip works better as a standing transfer than a scramble when a fare sale appears. A separate fund with a target taken from your budget, fed on a fixed day each month, turns the route from a wish into a date. Seeing the balance also tells you whether to book this year or keep the trip for next.

                ## Milestones
                1. A separate savings pot or account opened for island travel.
                2. A target taken from the full-cost budget.
                3. A standing monthly transfer set up.
                4. Progress against the target reviewed each quarter, with the booking date moved if needed.

                ## Notes
                Start from the **Savings goal** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A separate travel fund receives a monthly standing transfer and its balance is compared with the trip budget every quarter."
                cadence: rolling
              tasks:
                - "Open a separate savings pot named for the trip"
                - "Set the target from your full-cost budget"
                - "Move the agreed amount into the travel fund @recurring(monthly:12)"
                - "Compare the fund balance with the trip budget @recurring(quarterly)"
            - name: Inter-island fare watch and price log
              description: |-
                ## Purpose
                Regional fares swing widely with season and seat availability, and short routes rarely appear on the big comparison sites. A weekly look at your key routes, written in a simple log, shows what a good fare actually is, so you book with confidence instead of guessing. After a couple of months the log answers the question of whether a fare is cheap on its own.

                ## Milestones
                1. Your key routes listed, including inter-island legs sold only by regional airlines.
                2. Fare alerts set where the airline or a search site offers them.
                3. A log of fares seen, with the date and days before departure.
                4. A target fare for each route written at the top of the log.

                ## Notes
                Start from the **Metrics log** template. Check regional airline websites directly, since many small carriers do not sell through comparison sites.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fare log holds at least eight weeks of weekly prices for each key route, with a target fare written for each."
                cadence: rolling
              tasks:
                - "List the long-haul and inter-island routes you want to watch"
                - "Set fare alerts on the routes that support them"
                - "Check fares on your key routes and log the lowest @recurring(weekly:tue)"
                - "Write the lowest fare of the month at the top of the log @recurring(monthly:28)"
            - name: Schedule change checks on booked regional flights
              description: |-
                ## Purpose
                Small regional airlines retime and cancel flights more than most travellers expect, sometimes telling you only by an email that lands in a spam folder. A weekly look at every booked leg, from booking to departure, catches a change while there is still time to move the next ferry or night. Missing a retime by a day can unravel the whole route.

                ## Milestones
                1. Every booked leg listed with its booking reference and the airline's contact details.
                2. Your mobile number added to each booking for text alerts.
                3. Each booking checked weekly until departure.
                4. Any change handled within 48 hours, with knock-on bookings adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every booked regional leg is checked weekly until departure, and each schedule change is recorded with the action taken within 48 hours."
                cadence: rolling
              tasks:
                - "List every booked leg with its reference and airline contact"
                - "Add your mobile number to each booking for text alerts"
                - "Check every booked leg for retimes or cancellations @recurring(weekly:fri)"
                - "Move the next booking the same day whenever a leg is retimed"
            - name: Yearly festival calendar by island
              description: |-
                ## Purpose
                Almost every island has a season worth timing a visit around, and the dates move each year: Carnival before Lent in Trinidad and Dominica, summer carnivals from St Vincent to Grenada, jazz and music festivals, regattas and independence celebrations. One calendar of the festivals on the islands you care about, refreshed when dates are announced, lets you build a route around two or three events instead of missing them by a week. It also warns you when a festival will push up prices or fill every room.

                ## Milestones
                1. A list of festivals on the islands you want to visit, with the usual month for each.
                2. Official dates added as tourism boards announce them.
                3. Festivals that clash with hurricane season or your leave flagged.
                4. Two or three festival-based route ideas noted for the next two years.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A festival calendar covering at least five islands is rebuilt each year with official dates and used to shortlist two route ideas."
                cadence: cyclic
              tasks:
                - "List the festivals on the islands you want to visit with their usual month"
                - "Rebuild the festival calendar for the coming year @recurring(yearly)"
                - "Check tourism board event pages for newly announced dates @recurring(monthly:3)"
                - "Write down two route ideas built around festivals"
            - name: Passport, visa and permit expiry tracker
              description: |-
                ## Purpose
                Some Caribbean countries want six months of passport validity left on arrival, and a travel authorisation or visa that ran out last spring will only show up at check-in. A single list of every travel document in the household, with expiry dates and the renewal lead time for each, turns renewals into a calm job done months ahead. It matters most for families where everyone holds two passports.

                ## Milestones
                1. Every passport, visa, travel authorisation and driving licence in the household listed with its expiry date.
                2. Renewal lead times noted for each document.
                3. Calendar reminders set for each renewal window.
                4. Every document valid for at least six months beyond the next planned trip.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A household document list with expiry dates is checked every quarter, and no document is within six months of expiry before a booked trip."
                cadence: rolling
              tasks:
                - "List every passport, visa and licence in the household with its expiry"
                - "Note how long each renewal takes in the issuing country"
                - "Check the list for documents inside the renewal window @recurring(quarterly)"
                - "Start any renewal the check flags within the same week"
            - name: Hurricane season plan for trips June to November
              description: |-
                ## Purpose
                The Atlantic hurricane season runs from 1 June to 30 November, and lower prices make those months tempting for island hopping. A plan written before you book, covering which islands sit further south, what your insurance pays and how you would leave early, means a forming storm is an inconvenience rather than a crisis. Reviewing it each May keeps it current.

                ## Milestones
                1. Islands on the route ranked by how often storms reach them.
                2. Insurance terms for named storms and early return written down.
                3. An exit plan for each island: alternative flights, ferries and the nearest hub.
                4. A rule agreed for when to leave or skip an island, such as a watch being issued for it.

                ## Notes
                Start from the **Risk register** template. The southern islands, such as Trinidad and Tobago and the ABC islands, are hit less often, but not never.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written hurricane plan lists storm exposure, insurance terms, an exit route for each island and a leave rule, reviewed before each season."
                cadence: cyclic
              tasks:
                - "Note which islands on the route sit outside the main storm track"
                - "Write down what your insurance pays if a storm forces changes"
                - "List a way off each island if flights are cancelled"
                - "Review the hurricane plan before the season opens @recurring(yearly)"
            - name: Island-by-island travel notes
              description: |-
                ## Purpose
                Tips gathered on a trip, such as the guesthouse owner who meets the late ferry or the route taxi that leaves from behind the market, vanish within a year unless written down. A running notes file with a page per island turns every trip, and every tip from friends, into a guide for the next one. It becomes the first thing you open when planning.

                ## Milestones
                1. A notes file with one page per island visited or planned.
                2. Transport, accommodation, food and contacts sections on each page.
                3. Notes written up within a week of returning from each trip.
                4. Photos and receipts backed up alongside the notes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A notes file has a page for each island visited, written up within a week of every trip and backed up every quarter."
                cadence: rolling
              tasks:
                - "Create a notes file with a page for each island"
                - "Write up each island's page within a week of getting home"
                - "Add tips heard from friends or forums to the island pages @recurring(monthly:20)"
                - "Back up trip photos and notes to a second place @recurring(quarterly)"
            - name: Multi-leg reconfirmation checklist before departure
              description: |-
                ## Purpose
                With five or six bookings strung together, one forgotten detail, like a ferry ticket that must be collected the day before or a small airport that closes check-in 90 minutes early, can break the chain. A checklist run in the week before departure confirms every leg, transfer and bed. Reused for each trip, it gets shorter and sharper.

                ## Milestones
                1. A checklist covering each flight, ferry, transfer and night of the route.
                2. Check-in times and baggage rules confirmed for every leg.
                3. Arrival transport arranged for each arrival after dark.
                4. The checklist updated after the trip with anything that was missed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every leg, transfer and night is reconfirmed in the week before departure using a written checklist that is updated after each trip."
                cadence: cyclic
              tasks:
                - "Write a checklist with a line for every leg, transfer and night"
                - "Confirm check-in times and baggage rules for each regional flight"
                - "Arrange transport for every arrival after dark"
                - "Add anything that went wrong to the checklist when you get back"
            - name: Entry rules in the French, Dutch, US and British territories
              description: |-
                ## Purpose
                The region's territories follow their own rulebooks: Martinique and Guadeloupe are part of France but outside the Schengen area, Aruba and Curacao ask for online arrival cards, Puerto Rico and the US Virgin Islands need US entry permission, and each British territory runs its own immigration. Understanding the pattern makes routes through these islands far easier to plan. It also explains why the shared island of Saint-Martin and Sint Maarten has French rules on one side and Dutch on the other.

                ## Milestones
                1. A one-page summary of entry rules for the French, Dutch, US and British territories.
                2. Your own nationality's requirements confirmed for each territory you might visit.
                3. Online arrival cards or authorisations noted with when to complete them.
                4. Transit rules through Puerto Rico or Miami checked for any route that uses them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of territory entry rules is written, with your nationality's requirements and any online forms confirmed from official sources."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the official entry pages for the French Caribbean islands"
                - "Note which Dutch islands require an online arrival card before travel"
                - "Check whether you need US entry permission for Puerto Rico or the US Virgin Islands"
                - "Summarise the rules for the British territories on your list"
            - name: Departure taxes and airport fees by island
              description: |-
                ## Purpose
                Most departure taxes are now built into ticket prices, but some islands still collect a fee at the airport or the ferry terminal, sometimes in cash only. Knowing which before you leave each island avoids a dash to a cash machine before boarding. The same check catches ferry port fees and small-airport security charges.

                ## Milestones
                1. Each island's departure tax and ferry fees checked.
                2. Fees already included in your tickets identified.
                3. Cash amounts and accepted currencies noted for any fee paid on the day.
                4. The cash added to the currency plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every departure fee on the route is identified as included in the ticket or payable on the day, with amounts and currency noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check each island's departure tax on its airport or tourism website"
                - "Look at your ticket breakdowns for taxes already included"
                - "Note cash amounts and currencies for fees payable on the day"
                - "Add departure cash to your currency plan for each island"
            - name: Getting around each island without a hire car
              description: |-
                ## Purpose
                Buses, route taxis and water taxis reach most places on most islands for a fraction of a taxi fare, but each runs on local logic: minibuses in St Lucia and Grenada leave when they are full, route taxis in Trinidad carry an H on the number plate and follow fixed routes, and water taxis link bays in the Grenadines. Learning the system for each island before you land saves money and puts you among the people who live there. It also tells you when the last bus runs.

                ## Milestones
                1. Public transport options noted for each island on the route.
                2. Fares, main terminals and last services written down.
                3. Official taxi rates from the airport or ferry dock checked.
                4. A plan for getting from each arrival point to your accommodation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each island on the route has a written note of public transport, fares and last services, and a confirmed way from arrival to accommodation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how buses or route taxis work on each island"
                - "Note typical fares and where the main terminals are"
                - "Check the official taxi rates from each airport and ferry dock"
                - "Plan the trip from each arrival point to your bed"
            - name: Driving permits and car hire across the islands
              description: |-
                ## Purpose
                Many Eastern Caribbean islands require a temporary local driving permit on top of your licence, bought from the car hire desk or a police station, and the side of the road changes as you hop: left in most English-speaking islands and the US Virgin Islands, right in the French, Dutch and Spanish-speaking ones. Sorting permits, insurance and local rules before you hire keeps a self-drive day legal and calm. Steep, narrow mountain roads on islands like Dominica and St Vincent reward a careful choice of car.

                ## Milestones
                1. Islands where you will drive listed with the side of the road and permit rules.
                2. Licence and international driving permit requirements checked.
                3. Car hire insurance and excess terms compared for each island.
                4. A decision on which islands are worth driving and which are better by taxi or bus.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Permit, licence and insurance rules are confirmed for every island you plan to drive, with a drive or do-not-drive decision recorded for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the temporary driving permit rules for each island you might drive"
                - "Find out whether you need an international driving permit"
                - "Compare car hire insurance excess on each island"
                - "Decide which islands to drive and which to tour by bus or taxi"
            - name: Local laws and customs that catch visitors out
              description: |-
                ## Purpose
                A few island rules surprise visitors every year: civilians wearing camouflage clothing is an offence in several countries, Barbados and Trinidad and Tobago among them, swimwear away from the beach is frowned on in many towns, and Sunday can close almost everything. Knowing these in advance avoids fines, awkward moments and a wasted Sunday. Courtesy matters too: a good morning or good afternoon before any question is expected nearly everywhere.

                ## Milestones
                1. A short list of laws and customs for each island on the route.
                2. Clothing packed that avoids camouflage and suits towns and churches.
                3. Sunday and public holiday closures noted for each island.
                4. Rules on drones, photography and protected areas checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note of key laws, customs and closures exists for each island on the route, and the packing list reflects it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read official travel advice on local laws for each island"
                - "Remove any camouflage clothing from the packing list"
                - "Note Sunday and public holiday closures for each stop"
                - "Check drone and photography rules before packing a drone"
            - name: Survival phrases in Kweyol, Papiamento, French and Spanish
              description: |-
                ## Purpose
                English gets you a long way, but not everywhere: French is the language of Martinique and Guadeloupe, Papiamento is spoken across Aruba, Bonaire and Curacao, Kweyol, a French-based creole, is heard daily in St Lucia and Dominica, and Spanish runs Cuba, the Dominican Republic and Puerto Rico. Twenty phrases in the languages on your route make taxis, markets and directions easier and earn a warmer welcome. Weekly practice for two months is enough.

                ## Milestones
                1. The everyday language identified for each island on the route.
                2. A list of twenty survival phrases for each language.
                3. Phrases practised aloud each week for two months.
                4. Greetings, numbers and directions used confidently in a practice conversation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twenty survival phrases in each language on the route can be said from memory, tested in a practice conversation before departure."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List which language is used day to day on each island"
                - "Write twenty survival phrases for each language"
                - "Practise the phrase list aloud for fifteen minutes @recurring(weekly:wed)"
                - "Test yourself with a speaker or a language app before departure"
            - name: Ferry crossings, sea conditions and seasickness
              description: |-
                ## Purpose
                Channel crossings between islands can be rough, especially in the Christmas winds from December to February, and the open-water ferry between Martinique and Dominica feels very different on a calm day and a windy one. Knowing which crossings are exposed, where to find a marine forecast and what helps with seasickness makes sea legs a choice rather than an ordeal. Ferry timetables also change with the season and the sea state.

                ## Milestones
                1. Exposed open-water crossings on the route identified.
                2. A marine forecast source found for the region.
                3. A seasickness plan agreed with a pharmacist or doctor if you are prone.
                4. Seat choice, food and timing tips noted for each crossing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each sea crossing on the route has its exposure, forecast source and seasickness plan noted before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark which ferry legs cross open channel rather than sheltered water"
                - "Find a marine forecast you can read for the region"
                - "Ask a pharmacist about seasickness options if you are prone"
                - "Note the best seat and timing for each crossing"
            - name: Heritage sites visited with care and context
              description: |-
                ## Purpose
                Forts, sugar estates, great houses and burial grounds across the islands tell the history of slavery, indenture and resistance, from Brimstone Hill in St Kitts to the Citadelle in northern Haiti. Reading the history before visiting, and choosing guides and museums that tell it honestly, turns a photo stop into understanding. Some estate venues still market a romantic plantation past, and choosing where to spend your money is part of visiting well.

                ## Milestones
                1. Heritage sites on the route listed, each with one book, article or museum to read first.
                2. Guides or museums chosen that are led or endorsed by local historians.
                3. Venues that romanticise the plantation past identified and avoided or visited critically.
                4. Notes on what each visit taught added to your travel notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each heritage site on the route is visited after reading its history, with guides chosen deliberately and notes written up afterwards."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the forts, estates and museums on or near your route"
                - "Read one history of each site before you go"
                - "Choose guides or museums led by local historians"
                - "Write up what each visit taught you"
            - name: Signature dishes to eat on each island
              description: |-
                ## Purpose
                Each island has a dish people will ask whether you tried: flying fish and cou-cou (a cornmeal and okra dish) in Barbados, oil down in Grenada, keshi yena, stuffed cheese, in Curacao, pepperpot in Guyana, conch salad in the Bahamas, bake and shark at Maracas in Trinidad. A short list per island, with where locals actually eat it and which day it is cooked, means you eat well instead of defaulting to hotel menus. Many dishes are Saturday or Sunday food, so timing counts.

                ## Milestones
                1. Two or three signature dishes listed for each island.
                2. Where and when to eat each one found from locals or recent reviews.
                3. Markets, cookshops and fish fries noted for each island.
                4. Dishes tried ticked off in your travel notes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dish list with places and days for each island is written before departure and ticked off during the trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List two or three signature dishes for each island"
                - "Ask friends from each island where they would eat them"
                - "Note which days each dish or fish fry happens"
                - "Tick off each dish in your travel notes as you eat it"
            - name: Choosing hub islands for the route
              description: |-
                ## Purpose
                Regional networks run through a handful of hubs, such as Barbados, Antigua, Trinidad, St Maarten and Puerto Rico, and a route built around one or two of them has more flights, more rebooking options and fewer forced overnights. Choosing hubs deliberately can make an awkward route straightforward, or show that two islands are best saved for separate trips. It also decides where the long-haul flight should land.

                ## Milestones
                1. Long-haul arrival options compared for the main hubs.
                2. The route redrawn around one or two hubs.
                3. Forced overnights and connection times counted for each version.
                4. A hub plan chosen with the reason written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A route built around chosen hub islands is written down, with connection times and forced overnights compared against at least one alternative."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check which hubs your long-haul airline flies into"
                - "Redraw the route around one or two hubs"
                - "Count connection times and forced overnights for each version"
                - "Write down the hub plan you chose and why"
            - name: Flights, ferries or a sailing charter for each leg
              description: |-
                ## Purpose
                Some legs are faster by sea than by air once check-in and connections are counted, and a ferry often lands you in town instead of at an airport miles out. For other pairs a flight is the only sensible option, and a skippered charter can beat both for a cluster like the Grenadines. Comparing each leg on door-to-door time, cost, luggage limits and reliability gives the best mix.

                ## Milestones
                1. Each leg listed with every available way to make it.
                2. Door-to-door time, cost and luggage limits compared for each option.
                3. Reliability and weather risk noted for sea options.
                4. A transport choice made for every leg.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every leg of the route has a chosen transport mode, selected on door-to-door time, cost, luggage and reliability."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each leg with every flight, ferry and boat option"
                - "Compare door-to-door time and cost for each option"
                - "Check luggage limits on small planes and fast ferries"
                - "Choose a mode for every leg and note why"
            - name: One base island or moving every few days
              description: |-
                ## Purpose
                Moving islands every two nights looks impressive on a map but can mean a third of the trip spent packing, waiting and checking in. Staying on one well-connected island and taking day trips by ferry or short flight, such as St Vincent to Bequia or Antigua to Barbuda, can show nearly as much with half the hassle. Deciding the style before booking shapes every other choice.

                ## Milestones
                1. Both styles sketched for the same islands and dates.
                2. Travel days counted in each version.
                3. Day trip options checked from the possible base islands.
                4. A style chosen and the route updated.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision between a base island with day trips and a moving route is recorded, with travel days counted for both versions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sketch a moving route and a base-island route for the same dates"
                - "Count the days lost to travel in each version"
                - "Check day trip ferries and flights from each possible base"
                - "Choose a style and update the route"
            - name: Separate tickets versus one through booking
              description: |-
                ## Purpose
                Booking each regional leg separately is often cheaper, but if the first flight is late the second airline owes you nothing, and a missed connection can cost a new fare and a night. A through ticket on one booking, where it exists, protects the connection at a higher price. Deciding which legs need protection, and where to leave a buffer night instead, is the biggest risk decision on the route.

                ## Milestones
                1. Each connection on the route marked as through ticket or separate booking.
                2. The cost of protection compared with the cost of a missed connection.
                3. A buffer night planned before every long-haul departure.
                4. A minimum connection time set for any separately booked leg.

                ## Notes
                A common default: never connect a separately booked regional flight into the long-haul flight home on the same day.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every connection is classed as protected or separate, with a buffer night before each long-haul departure and a minimum connection time written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark each connection as a through ticket or a separate booking"
                - "Price what a missed connection would cost on each separate leg"
                - "Plan a night on the hub island before the long-haul flight home"
                - "Set a minimum connection time for separate bookings and stick to it"
            - name: Packing light for small planes and ferries
              description: |-
                ## Purpose
                Turboprops and small island-hoppers often have lower baggage allowances than long-haul flights, sometimes weighing every bag and charging for each extra kilo, and ferries mean carrying your own bag up gangways and along docks. Packing for the smallest leg rather than the long-haul one avoids fees and stress on every hop. A soft bag that fits a small aircraft's limits is worth more than an extra outfit.

                ## Milestones
                1. The lowest baggage allowance on the route found.
                2. A packing list written to fit that allowance.
                3. A soft bag chosen that meets the size limits.
                4. The packed bag weighed at home before departure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packing list and bag fit the lowest baggage allowance on the route, confirmed by weighing the packed bag at home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the lowest baggage allowance on any leg of the route"
                - "Write a packing list that fits that allowance"
                - "Choose a soft bag that meets the smallest size limits"
                - "Weigh the packed bag at home before you leave"
            - name: Choosing where to stay on each island
              description: |-
                ## Purpose
                Where you sleep shapes each island: a guesthouse in town puts you near buses and cookshops, a beach hotel can leave you dependent on taxis, and an eco lodge in Dominica's interior is a different trip again. Matching the stay to what you want from each island, and to arrival times and transport, matters more than star ratings. Small family-run places often give the best local advice.

                ## Milestones
                1. What you want from each island written in a sentence.
                2. Two or three places compared for each island on location, transport and price.
                3. Cancellation terms checked for every booking.
                4. A stay booked for each island, with its address in the document pack.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A place to stay is booked for each island, chosen against a written aim for that island, with cancellation terms recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write one sentence on what you want from each island"
                - "Compare two or three places on each island by location and transport"
                - "Check the cancellation terms before booking anywhere"
                - "Add every address and phone number to the document pack"
            - name: Choosing the season for the trip
              description: |-
                ## Purpose
                Timing decides price, weather and what is on: December to April is the dry season and the dearest, June to November is cheaper but falls in hurricane season, and a big festival can double room prices for a week. Weighing these against your leave and the islands you want gives a season that suits both budget and nerve. Shoulder months such as May and early December often give the best balance.

                ## Milestones
                1. Prices for the same route compared in high, shoulder and low season.
                2. Rainy and hurricane season risks noted for each island.
                3. Festivals that raise prices, or are worth the cost, marked.
                4. A season chosen and written at the top of the trip plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A travel season is chosen after comparing prices and weather for the same route across at least three times of year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Price the same route in high, shoulder and low season"
                - "Note the rainy and hurricane months for each island"
                - "Mark festivals that change prices on your route"
                - "Write the chosen season at the top of the trip plan"
            - name: Festival-timed route through the Windward and Leeward Islands
              description: |-
                ## Purpose
                Between late June and mid August, carnival seasons roll through the Eastern Caribbean, with Vincy Mas in St Vincent, Carnival in St Lucia and Antigua and Spicemas in Grenada, so one route can catch two or three. The dates are set each year and rooms go early, so a festival route needs booking well ahead and a plan for the crowds. Taking in festivals as a visitor is different from playing mas, joining a costumed band on the road, and this route is about the travel.

                ## Milestones
                1. This year's festival dates confirmed for the islands on the route.
                2. Flights and ferries booked to land before each festival's main days.
                3. Accommodation booked on each festival island.
                4. A spending limit and a safety plan for crowds and late nights agreed.
                5. At least two festivals attended on one trip.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A single trip attends at least two island festivals, with all travel and accommodation booked at least three months before the first."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm this year's festival dates on each tourism board's site"
                - "Book flights and ferries to arrive before the main festival days"
                - "Book accommodation on each festival island early"
                - "Set a spending limit and a safety plan for big crowds"
            - name: Music festival weekend on a neighbouring island
              description: |-
                ## Purpose
                For anyone living in the Caribbean or already there, a music festival on the next island over is the easiest hop of all: the World Creole Music Festival in Dominica in October, the St Kitts Music Festival in June or Reggae Sumfest in Montego Bay in July. A long weekend needs only a short flight or ferry, a ticket and a bed, but all three sell out around big festivals. Planning four months out keeps the cost reasonable.

                ## Milestones
                1. A festival chosen and its dates confirmed.
                2. Festival tickets bought from the official seller.
                3. Travel and a bed booked for the festival weekend.
                4. Travel home booked with time to spare after the final night.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festival weekend on another island is attended, with tickets from the official seller and travel booked at least four months ahead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a festival and check its official dates"
                - "Buy tickets from the official seller only"
                - "Book the flight or ferry and a bed for the weekend"
                - "Book the trip home for the morning after the last night, not the same night"
            - name: Regatta week as a spectator
              description: |-
                ## Purpose
                Regattas bring a different crowd and some of the best atmosphere of the year: Antigua Sailing Week around the end of April, the Bequia Easter Regatta and the Carriacou Regatta Festival in August, with its traditional wooden sloops. Watching from the shore, a spectator boat or a friend's deck takes planning because small islands fill up fast. Picking viewpoints and events ahead means seeing the racing, not just the parties.

                ## Milestones
                1. A regatta chosen and this year's dates confirmed.
                2. Accommodation booked near the racing.
                3. Viewpoints, spectator boats and shore events identified.
                4. Race days watched and the regatta added to your travel notes.
              priority: low
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A regatta week is attended, with accommodation booked near the racing and at least two race days watched."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a regatta and confirm this year's dates"
                - "Book a place to stay near the racing early"
                - "Find out where spectators watch and whether boats take passengers"
                - "Plan two race days and the shore events around them"
            - name: Island-hopping honeymoon or anniversary trip
              description: |-
                ## Purpose
                A honeymoon or big anniversary across two or three islands needs more rest than a normal hop: one long stay somewhere quiet plus a second island for contrast usually beats five islands in ten days. Planning around arrival times, a buffer before the flight home and a few special bookings, such as a sunset sail or a dinner, makes it feel unhurried. Some places offer extras for the occasion only if they are told in advance.

                ## Milestones
                1. Two or three islands chosen, with one long, quiet stay.
                2. Flights, ferries and stays booked with a buffer night before flying home.
                3. Special bookings made for two or three moments.
                4. Each place told about the occasion in writing.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A two or three island trip is booked with at least one stay of five nights or more and a buffer night before the flight home."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree together on one quiet island and one contrasting one"
                - "Book a stay of at least five nights on the quiet island"
                - "Book two or three special moments in advance"
                - "Tell each place about the occasion when booking"
            - name: Island hopping with young children
              description: |-
                ## Purpose
                Young children change everything about a multi-island trip: early starts for small-plane flights, ferries where seasickness hits fast, and taxis that rarely carry car seats. Fewer islands, longer stays and a plan for naps and snacks on travel days keep the trip happy for everyone. Children's passports, and any consent letter for a child travelling with one parent, need checking for every country.

                ## Milestones
                1. A route with no more than one island move every five days.
                2. Children's passports, consent letters and health requirements checked for every country.
                3. Car seat options confirmed for taxis and hire cars on each island.
                4. A travel day kit packed for snacks, seasickness and sleep.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A family route is planned with no more than one island change every five days, children's documents checked for each country and car seat options confirmed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Cut the route to one island move every five days or fewer"
                - "Check children's passport and consent letter rules for each country"
                - "Confirm whether taxis or hire cars on each island can provide car seats"
                - "Pack a travel day kit for each child"
            - name: Solo island hopping safety plan
              description: |-
                ## Purpose
                Travelling the islands alone is common and rewarding, but a solo traveller carries every risk alone: a late arrival with no ride, a lost phone, a medical problem on a small island. A short safety plan, with your itinerary shared, licensed transport arranged for night arrivals and a check-in routine with someone at home, covers the usual problems without spoiling the freedom. It is worth redoing before every solo trip.

                ## Milestones
                1. The full itinerary shared with a contact at home.
                2. Licensed transport booked for every arrival after dark.
                3. A check-in routine agreed, such as a message each evening.
                4. Emergency numbers, consulate details and the insurance line saved offline.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before departure the itinerary is shared, every night arrival has booked transport and a daily check-in routine is agreed with a named contact."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Share your full itinerary with one contact at home"
                - "Book licensed transport for every arrival after dark"
                - "Agree an evening check-in message with your contact"
                - "Save emergency, consulate and insurance numbers offline"
            - name: Travelling the islands with limited mobility
              description: |-
                ## Purpose
                Many small Caribbean airports have no jet bridges, so boarding means stairs or a lift vehicle that must be booked, and ferries can involve steep gangways. Travelling with an older relative or anyone with limited mobility works well when assistance is requested for every leg and the route favours larger airports and level towns. Planning it with them, not just for them, makes the difference.

                ## Milestones
                1. Mobility needs agreed with the traveller, including walking distances and stairs.
                2. Assistance requested in writing for every flight and ferry.
                3. Accommodation chosen with step-free access confirmed by the owner.
                4. Medicines, equipment and a doctor's letter packed in hand luggage.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Assistance is confirmed in writing for every flight and ferry, and step-free access is confirmed for every stay before departure."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the traveller what distances and stairs they can manage"
                - "Request assistance on every flight and ferry in writing"
                - "Ask each place to confirm step-free access before booking"
                - "Pack medicines and a doctor's letter in hand luggage"
            - name: Travel rights as a CARICOM national
              description: |-
                ## Purpose
                CARICOM nationals have travel rights other visitors do not, such as a stay granted on arrival in many member states and, in some, wider free movement, but the rules have been changing and are not the same everywhere. Knowing exactly what your passport gets you, and what to carry to prove it, makes regional travel smoother for anyone living in the islands. Official sources, the CARICOM Secretariat and each immigration department, are the only reliable guide.

                ## Milestones
                1. Your rights on arrival checked for each member state on the route.
                2. Any CARICOM skills certificate or other status document you hold noted with its use.
                3. The lanes or forms for CARICOM nationals at each airport noted.
                4. A note kept of where the rules have recently changed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Arrival rights for your nationality are recorded for every member state on the route from official sources, with the date checked beside each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the CARICOM Secretariat's current guidance on travel rights"
                - "Check each member state's immigration page for your arrival rights"
                - "Note any documents that prove your status, such as a skills certificate"
                - "Write down the date checked beside each rule"
            - name: Adding a second island to a trip home
              description: |-
                ## Purpose
                Diaspora travellers flying home to Jamaica, Trinidad or Guyana often never see the island next door, even when a regional flight is an hour away. Adding three or four nights on a second island, at the start or end of the visit, gives a holiday alongside the family time. Done well, it costs little extra and does not eat into the days with relatives.

                ## Milestones
                1. Neighbouring islands with direct flights or ferries from home listed.
                2. Three or four nights placed at the start or end of the visit.
                3. The family told early so the side trip is not a surprise.
                4. Flights and a stay booked for the second island.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A side trip of at least three nights to a second island is booked alongside a trip home, with the family told in advance."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List islands with direct flights or ferries from your home island"
                - "Choose whether the side trip goes before or after family time"
                - "Tell the family early about the side trip"
                - "Book the flights and a stay for the second island"
            - name: Backpacking the islands on a student budget
              description: |-
                ## Purpose
                Students and young travellers can island hop for far less by using ferries instead of flights, guesthouses and hostels instead of resorts, local food instead of hotel menus, and student or youth fares where airlines offer them. Building a daily budget and sticking to it makes a longer trip possible on a small amount. A summer between terms is long enough to work down the whole Windward chain from Dominica to Grenada.

                ## Milestones
                1. A route chosen that uses ferries and buses wherever possible.
                2. Hostels, guesthouses or homestays found on each island.
                3. A daily budget set and tracked in a simple log.
                4. An emergency fund kept separate from daily spending.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A low-cost route is planned with a daily budget, ferries and buses on most legs, and a separate emergency fund in place."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plan the route around ferries and buses instead of flights"
                - "Find hostels, guesthouses or homestays on each island"
                - "Set a daily budget and log spending each evening of the trip"
                - "Keep an emergency fund in a separate account"
            - name: Checking local laws as an LGBTQ+ traveller
              description: |-
                ## Purpose
                Laws and attitudes towards LGBTQ+ people differ widely across the Caribbean, and several have changed through court rulings in recent years, so last year's advice may be out of date. Checking current official travel advice and community guides for each island, and choosing welcoming accommodation, lets LGBTQ+ travellers plan with clear eyes. Local LGBTQ+ organisations exist on many islands and know the reality on the ground.

                ## Milestones
                1. Current official travel advice read for each island on the route.
                2. Community guides and recent traveller reports checked.
                3. Accommodation chosen that states it is welcoming.
                4. Contacts for local LGBTQ+ organisations saved.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Current official advice and community guidance are recorded for every island on the route, with welcoming accommodation booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your government's current travel advice for each island"
                - "Check recent community guides and traveller reports"
                - "Choose accommodation that states it welcomes LGBTQ+ guests"
                - "Save contacts for local LGBTQ+ organisations"
            - name: Diving across islands with no-fly intervals planned
              description: |-
                ## Purpose
                Bonaire, Dominica, the Cayman Islands, Tobago and Saba are among the region's best dive destinations, and a dive hop between them is a classic trip, but flying too soon after diving raises the risk of decompression sickness. Building the no-fly interval your dive agency recommends into the route, along with certification, dive insurance and the nearest hyperbaric chamber, keeps the trip safe. Dive days and flying days need separating on the calendar before anything is booked.

                ## Milestones
                1. Dive islands and sites chosen for your certification level.
                2. The no-fly interval from your dive agency built in before every flight after diving.
                3. Dive insurance in place and the nearest hyperbaric chamber noted for each island.
                4. Certification cards and logbook packed and dive operators booked.

                ## Notes
                Ask each dive operator how they handle your last dive before a flight; good operators will plan the final day around it with you.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dive route is planned with the agency's no-fly interval before every flight, dive insurance in place and chamber locations recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose dive islands and sites suited to your certification"
                - "Schedule the recommended no-fly interval before every flight"
                - "Note the nearest hyperbaric chamber for each island"
                - "Renew dive insurance and check certification before each dive season @recurring(yearly)"
            - name: Sailing the Grenadines with customs clearance
              description: |-
                ## Purpose
                Sailing between St Vincent and Grenada crosses a border inside the Grenadines, so a charter must clear out at a port such as Union Island and clear in at Carriacou, with crew lists and fees at each. Online systems such as SailClear, used in several Eastern Caribbean states, speed this up but do not replace the visit to customs. Bareboat charters also need proof of sailing competence, while skippered ones need a clear agreement on who decides what.

                ## Milestones
                1. Charter type chosen, bareboat or skippered, with competence requirements checked.
                2. The route planned with clearance ports for each country.
                3. Crew list, passports and fees ready for each clearance.
                4. Anchorages, marine park fees and moorings noted for each stop.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A charter route is planned with clearance ports, crew documents and fees ready for every border crossing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Decide between a bareboat and a skippered charter"
                - "Check what sailing qualifications the charter company asks for"
                - "Mark the clearance ports for each country on the route"
                - "Register the crew and vessel on an online clearance system where available"
            - name: Reaching Saba, Montserrat, Barbuda and Carriacou
              description: |-
                ## Purpose
                The smallest islands are often the most memorable and the hardest to reach: Saba by small plane or ferry from Sint Maarten, Montserrat by short flight or a limited ferry from Antigua, Barbuda by ferry from Antigua, Carriacou by ferry or small plane from Grenada. Limited schedules and weather mean these legs need the most slack in the route. Planning them first, then fitting the rest around them, avoids being stranded.

                ## Milestones
                1. Small islands you want to see listed with every way to reach them.
                2. Their schedules and seasonal changes checked.
                3. A spare day planned after each small-island leg.
                4. Accommodation booked early, since rooms are few.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each small island on the route has its transport confirmed, a spare day after it and accommodation booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each small island with every flight and ferry that reaches it"
                - "Check how often each runs and whether schedules change by season"
                - "Add a spare day after every small-island leg"
                - "Book accommodation early where rooms are few"
            - name: Guyana and Suriname interior by light aircraft
              description: |-
                ## Purpose
                Kaieteur Falls, the Rupununi savannahs and Suriname's rainforest lodges are reached by light aircraft or river, from airports such as Ogle in Georgetown and Zorg en Hoop in Paramaribo. Weight limits on these flights are strict and low, weather cancels flights, and many lodges sell packages that include the flight. Planning the interior as its own leg, with slack days, makes the mainland a highlight of a Caribbean trip.

                ## Milestones
                1. Interior destinations chosen, with how each is reached.
                2. Lodge or tour packages compared, including flights and weight limits.
                3. Health needs for the interior checked with a travel clinic.
                4. Slack days built in for weather delays.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An interior trip is booked with flights, baggage limits and slack days confirmed, and health advice for the interior recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose interior destinations and how each is reached"
                - "Compare lodge packages that include the flight"
                - "Check the baggage weight limit for each light aircraft leg"
                - "Ask a travel clinic about health needs for the rainforest and savannah"
            - name: Cuba leg with its own entry and money rules
              description: |-
                ## Purpose
                Cuba sits apart from the rest of an island hop: most nationalities need a tourist card or visa, there is an online arrival form, health insurance is required, and money needs planning because cards issued by US banks do not work there. US citizens and residents face extra restrictions under US law. Treating the Cuba leg as its own project, with an official source for each rule, keeps it from derailing the rest of the route.

                ## Milestones
                1. Tourist card or visa requirements confirmed for your nationality.
                2. Online arrival form and health insurance requirement checked.
                3. A money plan made that does not rely on cards that may not work.
                4. Any extra rules for your nationality, such as US restrictions, checked with official sources.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Entry documents, insurance and a money plan for the Cuba leg are confirmed from official sources before any Cuba booking is made."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the tourist card or visa rules for your nationality"
                - "Find the official online arrival form and when to complete it"
                - "Confirm your travel insurance meets Cuba's entry requirement"
                - "Plan money for Cuba without relying on your usual cards"
            - name: Visiting every CARICOM member state
              description: |-
                ## Purpose
                Fifteen countries make up CARICOM, from the Bahamas in the north to Guyana and Suriname on the South American mainland and Belize in Central America, and seeing them all is a long-term goal some travellers set themselves. A tracker of where you have been, and a yearly choice of the next country, turns it into a plan you can finish over a decade. Each visit adds a page to your travel notes.

                ## Milestones
                1. A list of all fifteen member states with those already visited ticked.
                2. A rough order for the rest, grouped into sensible trips.
                3. The next country chosen each year.
                4. Each visit written up in your travel notes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tracker lists all fifteen CARICOM member states with visits ticked and the next country chosen and written down each year."
                cadence: cyclic
              tasks:
                - "List the fifteen member states and tick those you have visited"
                - "Group the rest into trips that make sense together"
                - "Choose the next country to visit @recurring(yearly)"
                - "Add a page for each newly visited country to your travel notes"
---

# Island Hopping Caribbean Travel

This area is for anyone who wants to see more of the Caribbean than one island, whether you live in the region, fly in from London, Toronto or New York, or are adding a side trip to a visit home. It starts with the foundations (a route, entry and health rules, the airline and ferry network, a budget, insurance, money and documents), then the routines that keep trips affordable and on track, the know-how for getting around and behaving well on each island, the big route decisions, festival and regatta trips, plans for particular travellers, and specialist hops for divers, sailors and the hard-to-reach islands.

What repeats is a monthly transfer into the travel fund, weekly fare checks and schedule checks on booked legs, weekly phrase practice, a monthly look for newly announced festival dates, quarterly checks on documents, the fund and a kept regional SIM, and yearly renewals of insurance, the festival calendar and the hurricane plan. The Trip, Purchase decision, Savings goal, Metrics log, Risk register and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
