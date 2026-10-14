---
id: caribbean-diaspora.trips-back-home
name: Trips Back Home
description: "Trips home planned instead of scrambled: family dates mapped ahead, fares watched, a trip fund, gifts and requests handled, and short visits shared fairly across the family."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, trips-back-home, everyone, travel, flights, family-visits, christmas, gifts]
author: Aurum Technology
starter_structure:
  templates:
    - trip
    - operational-checklist
    - savings-goal
    - metrics-log
    - purchase-decision
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Trips Back Home
          description: "Planning trips back home: timing around Carnival, Christmas and family events, flights and budgets, gifts, staying with relatives and making the most of short visits."
          projects:
            - name: Two-year map of trips home and family dates
              description: |-
                ## Purpose
                Most trips home get decided in a rush when a fare drops or someone announces a wedding, and the big dates collide: Christmas, Carnival, a grandmother's 90th, a cousin's graduation. Putting the next two years of family occasions and public holidays on one page shows which trips are worth the flight and which can wait. It also gives you time to save and book before prices climb.

                ## Milestones
                1. A calendar covering the next 24 months with family birthdays, anniversaries, weddings and graduations you know of.
                2. Public holidays and festival seasons for your home country added: Christmas, Easter, Carnival or Crop Over, Emancipation and Independence.
                3. Your own school holidays, work busy periods and fixed commitments marked.
                4. One or two target trip windows chosen and written at the top of the page.

                ## Notes
                Ask one well-connected relative, usually an aunt or the family organiser, to check the list. They will know about the christening or anniversary nobody has mentioned to you yet.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-year calendar of family dates and home holidays exists, with at least one chosen trip window written on it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every family birthday, wedding and graduation coming up in the next two years"
                - "Add your home country's public holidays and festival seasons to the same calendar"
                - "Ask the family organiser to check the list for events you have missed"
                - "Mark your work and school blackout periods"
                - "Choose one or two trip windows and write them at the top"
            - name: Passport and entry check before booking anything
              description: |-
                ## Purpose
                Airlines can refuse boarding when a passport is close to expiry, when the name on the ticket does not match the passport, or when a child's passport has quietly run out. Checking every traveller's documents and the entry rules for your home country before paying for flights avoids the worst kind of airport morning. Dual citizens also need to know which passport to show at each border.

                ## Milestones
                1. Every traveller's passport expiry date written down, with any that expire within a year flagged.
                2. Names on passports matched letter for letter to the names you will book under.
                3. Entry rules for your home country checked on the official immigration or government site, including any passport validity requirement.
                4. For dual citizens, a note of which passport you will use to leave, to enter home and to return.

                ## Notes
                Renewal itself belongs with your passport records; this project is the check that tells you whether a renewal must happen before you book.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page document check lists every traveller's passport expiry, booking name and the entry rule confirmed from an official source."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every traveller's passport and write down the expiry dates"
                - "Compare each passport name with the name you plan to book under"
                - "Read the entry requirements on your home country's official immigration site"
                - "Note which passport each dual citizen will use at each border"
            - name: Full-cost budget for a trip home
              description: |-
                ## Purpose
                The flight is often less than half of what a trip home really costs once you add extra bags, gifts, groceries for the house, car hire, outings, cash for elders and the meals out you promised everyone. A budget that names every line before you book stops the trip ending in a credit card balance you are still paying at Easter. It also gives the trip fund a real target.

                ## Milestones
                1. A budget with lines for flights, bags, gifts, household contribution, transport, food, outings, cash gifts and a buffer.
                2. Each line priced from a real quote or last trip's spending, not a guess.
                3. A total compared with what is already saved and what you can add before departure.
                4. Lines cut or reduced until the total fits, with the choices written down.

                ## Notes
                Keep a buffer of around ten percent. Something always comes up: a relative's light bill, a broken suitcase, a funeral collection.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A line-by-line trip budget with a total and a buffer is written down and matches the money you will have before departure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write every cost line for the trip, from bags to cash gifts for elders"
                - "Price each line from a quote or last trip's receipts"
                - "Add a buffer and compare the total with your savings"
                - "Cut lines until the total fits and note what you dropped"
            - name: Annual leave lined up with the trip
              description: |-
                ## Purpose
                December and summer leave gets claimed early in most workplaces, and a trip home rarely works in under ten days once travel time is counted. Requesting leave before you book, and checking it against public holidays on both sides, means you are not choosing between the flight you paid for and your job. Shift workers and teachers have the tightest windows, so they gain the most from asking early.

                ## Milestones
                1. Your remaining leave for this year and next written down.
                2. The leave request submitted for the chosen trip window.
                3. Approval received in writing before any non-refundable booking.
                4. Cover for your duties agreed, with a handover note drafted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Leave for the full trip window is approved in writing before flights are booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check how many days of leave you have left this year and next"
                - "Submit the leave request for your chosen trip dates"
                - "Wait for written approval before paying for flights"
                - "Agree who covers your work while you are away"
                - "Check next year's leave calendar for the best trip window @recurring(yearly)"
            - name: Choosing between family, a guesthouse or a rental
              description: |-
                ## Purpose
                Staying with family is cheaper and closer, but a full house, one bathroom and a mother who wakes at five can wear thin by day four. A guesthouse or short rental gives privacy at a price and can cause hurt if nobody explains why. Deciding deliberately, and telling the family early and kindly, saves both the money and the relationship.

                ## Milestones
                1. The realistic options listed: each relative's house, a guesthouse nearby and a short rental.
                2. Each option compared on cost, space, distance from the people you want to see and transport.
                3. A choice made, including a split stay if that suits better.
                4. The family told of the plan in a phone call, not a message.

                ## Notes
                A split stay often works: the first nights with your parents, the rest nearby. Framing it as giving them space usually lands better than asking for your own.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Where you will sleep each night of the trip is decided and the hosts or bookings are confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each relative's house and two paid options near them"
                - "Compare cost, space, bathrooms and distance for each option"
                - "Decide where you will sleep on each night of the trip"
                - "Call the family to explain the plan before anything is booked"
            - name: Travel insurance that covers the trip home
              description: |-
                ## Purpose
                Visiting relatives is still travel, and a fall, a dengue fever or a cancelled flight abroad can cost far more than the trip itself. Many policies exclude pre-existing conditions or older travellers unless they are declared, which matters when a parent travels with you. Choosing cover that fits who is travelling and what you will do protects the trip and the people on it.

                ## Milestones
                1. Existing cover checked: work benefits, bank account packages and credit card insurance.
                2. Each traveller's medical conditions declared to the insurer where the policy requires it.
                3. Two or three policies compared on medical cover, evacuation, cancellation and baggage.
                4. A policy bought and its emergency number saved in every traveller's phone.

                ## Notes
                Start from the **Purchase decision** template. Read the exclusions page before the price page: that is where scooters, sports and undeclared conditions live.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A travel insurance policy covering every traveller for the full trip is bought, with the emergency number saved in each phone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check whether your bank, card or employer already gives travel cover"
                - "List each traveller's medical conditions for the insurer's declaration"
                - "Compare three policies on medical, evacuation and cancellation cover"
                - "Buy the policy and save its emergency number in every phone"
            - name: Master packing list for trips home
              description: |-
                ## Purpose
                Every trip home involves the same scramble for adaptors, the good sandals, church clothes, the funeral outfit you hope not to need and the chargers for three devices. A master list written once and reused saves an evening of packing and the shopping trip for things already in the cupboard. It also separates your own case from the gift and request bags.

                ## Milestones
                1. A master list split into clothes, documents, medicines, electronics, gifts and requests.
                2. Items specific to home added: plug adaptor if needed, mosquito repellent, one formal outfit, rain gear.
                3. A short list of things you always buy at home rather than carry.
                4. The list saved where you will find it next time.

                ## Notes
                Start from the **Operational checklist** template. Pack one smart outfit even for a casual trip: a christening, church service or funeral appears more often than anyone plans.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved master packing list in at least five sections is used to pack the next trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the packing list from memory in five sections"
                - "Add the home-specific items like repellent and a formal outfit"
                - "List the things you will buy at home instead of carrying"
                - "Save the list somewhere you can open on your phone"
            - name: Money plan for spending on the island
              description: |-
                ## Purpose
                Card fees, poor exchange rates at the airport and ATMs that run dry on a bank holiday can eat a surprising share of the trip budget. Knowing in advance which card to use, how much local currency to start with and where US dollars are accepted keeps spending smooth. It matters most in places like Guyana, Haiti or Suriname where cash still runs much of daily life.

                ## Milestones
                1. The fees on each of your cards for foreign spending and cash withdrawals written down.
                2. Your bank told of the travel dates if it asks for that.
                3. A starting amount of local currency or US dollars decided, with where to get it.
                4. A backup plan noted for a lost or blocked card.

                ## Notes
                Keep one card in a different bag from your wallet. If both are lost together, a relative can often lend cash while a replacement is sorted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written money plan names the card to use, the starting cash amount and the backup if a card fails."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up foreign transaction and ATM fees on each of your cards"
                - "Decide how much local currency or US dollars to arrive with"
                - "Ask a relative where locals change money and use ATMs"
                - "Write down the lost card number for each bank"
            - name: Baggage allowance and suitcase weight plan
              description: |-
                ## Purpose
                On the Caribbean routes the suitcase is half the point of the trip, and overweight fees at the check-in desk are the most avoidable cost of the whole trip. Knowing the allowance on your fare, what an extra bag costs online versus at the airport, and owning a luggage scale turns the night-before repacking into a quick weigh. It also tells you when a barrel or courier is cheaper than another case.

                ## Milestones
                1. The checked bag allowance, weight limit and cabin rules for your fare written down.
                2. The price of an extra bag bought online compared with the airport rate.
                3. A luggage scale bought or borrowed.
                4. Each case weighed and kept under the limit before leaving home.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every checked case on the next trip is weighed at home and arrives at the desk within the fare's weight limit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the baggage rules for your fare on the airline's site"
                - "Compare the online and airport price of an extra bag"
                - "Buy or borrow a luggage scale"
                - "Weigh each case and move heavy items into the cabin bag where allowed"
            - name: Dedicated trip fund with a monthly transfer
              description: |-
                ## Purpose
                Trips home that are paid for in advance feel very different from ones paid off for months afterwards. A separate pot with a fixed monthly transfer, sized from your full-cost budget, means the money is there when a good fare appears. Seeing it grow also makes it easier to say yes to the trip that matters and no to the ones that do not.

                ## Milestones
                1. A separate savings pot or account opened and named for the trip.
                2. A monthly amount set by dividing the trip budget by the months to departure.
                3. A standing order set for the day after payday.
                4. The balance checked against the target every quarter and the transfer adjusted.

                ## Notes
                Start from the **Savings goal** template. If you also pay into a sou-sou, time your hand for the months before the trip.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A standing monthly transfer into a named trip fund is running and the balance is on track for the next trip budget."
                cadence: rolling
              tasks:
                - "Open a separate savings pot and name it after the trip"
                - "Work out the monthly amount from the budget and months to departure"
                - "Confirm this month's transfer into the trip fund has landed @recurring(monthly:3)"
                - "Compare the fund balance with the next trip's budget @recurring(quarterly)"
            - name: Fare alerts and a price log for your home route
              description: |-
                ## Purpose
                Fares to Port of Spain, Kingston, Georgetown or Bridgetown swing widely across the year, and the people who pay least are usually the ones who knew what normal looked like. Setting alerts on your route and logging the lowest price you see each week builds that sense quickly. After a few months you can book a good fare in minutes instead of hoping.

                ## Milestones
                1. Price alerts set on two or three fare search tools for your exact route.
                2. A log started with the date, fare and airline of the lowest price seen each week.
                3. A typical price and a good price for your route worked out from the log.
                4. A rule written down: the price at which you book without further thought.

                ## Notes
                Start from the **Metrics log** template. Check the nearby airports too: flying into one island and taking a regional hop can sometimes beat the direct fare.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A price log with at least twelve weekly entries exists and gives a written booking threshold for your route."
                cadence: rolling
              tasks:
                - "Set price alerts on your exact route in two fare search tools"
                - "Record the lowest fare seen this week in the price log @recurring(weekly:sun)"
                - "Work out your route's typical and good fares from the log"
                - "Write the fare at which you will book without hesitating"
            - name: Running gift list for relatives back home
              description: |-
                ## Purpose
                Gifts bought in the last week before flying cost more, weigh more and still leave someone out, usually the neighbour who looked in on your mother all year. A list kept through the year, with sizes, wants and a budget per person, lets you buy on sale and pack light. It also helps when the same cousin asks for the same expensive trainers every trip.

                ## Milestones
                1. A list of everyone you usually bring something for, including neighbours and church members.
                2. Sizes, preferences and a budget noted against each name.
                3. Gifts bought through the year marked as done and stored in one place.
                4. The list totalled and kept inside the trip budget.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A gift list with a name, size and budget per person is kept and every gift for the next trip is bought within the gift budget."
                cadence: rolling
              tasks:
                - "Write the names of everyone you usually bring a gift for"
                - "Ask a relative quietly for the children's current clothes and shoe sizes"
                - "Check sales and buy one or two gifts from the list @recurring(monthly:15)"
                - "Keep bought gifts in one box so nothing is bought twice"
            - name: Handling family requests and errands to carry
              description: |-
                ## Purpose
                Before every trip the requests arrive: a phone for a niece, vitamins for an uncle, car parts, a parcel from a church sister for her son. Without a system you pay for things you were not repaid for, carry items that cause customs trouble and run out of space for your own clothes. A simple requests log with who pays, the cost and a cut-off date keeps goodwill and the suitcase intact.

                ## Milestones
                1. A requests log with item, person, cost, who pays and whether it is paid.
                2. A cut-off date shared with family, after which no new requests go in the case.
                3. A short list of things you will not carry: sealed parcels from people you do not know well, medicines without a prescription, anything restricted.
                4. Every request delivered or returned, with the log settled.

                ## Notes
                Never carry a sealed package you did not pack yourself. Ask to see inside, or say no politely.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every request for the next trip is recorded with cost and payer, and the log shows nothing unpaid after the trip."
                cadence: rolling
              tasks:
                - "Start a requests log with item, person, cost and who pays"
                - "Send the family your cut-off date for requests"
                - "Write your list of items you will not carry for anyone"
                - "Settle any unpaid requests in the log @recurring(monthly:22)"
            - name: Airline miles and card points on the home route
              description: |-
                ## Purpose
                Regular flyers on the home route often earn enough miles for a free seat every few years, but only if the points are collected in one programme and not left to expire. Choosing the scheme that matches the airlines on your route, and checking balances quarterly, turns routine travel into an occasional free flight or a paid-for extra bag. It is a small effort for people who already fly the route anyway.

                ## Milestones
                1. The airlines and alliances that serve your route listed.
                2. Every traveller enrolled in one chosen programme, with numbers saved.
                3. Past flights claimed where the programme allows it.
                4. Expiry dates and balances checked each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every regular traveller in the family has a miles number in the chosen programme and no points expire in the next year."
                cadence: rolling
              tasks:
                - "List the airlines that fly your home route and their programmes"
                - "Enrol each family traveller and save their membership numbers"
                - "Claim miles for any flights from the past few months"
                - "Check miles balances and expiry dates for the family @recurring(quarterly)"
            - name: Home, pets and post covered while you are away
              description: |-
                ## Purpose
                Two or three weeks away leaves a house abroad empty in winter or summer, a cat or dog to place and post piling up behind the door. Arranging a sitter, a neighbour with a key and the bills and deliveries in advance means you can stay the extra day without worrying about a burst pipe. A checklist reused each trip makes it a half-hour job.

                ## Milestones
                1. A sitter, kennel or neighbour arranged for pets and plants.
                2. A trusted person holding a key, with your travel dates and contact numbers.
                3. Post, deliveries and bill payments arranged for the time away.
                4. Heating, water and security settings decided and written on the checklist.

                ## Notes
                Start from the **Operational checklist** template. Check whether your home insurance needs telling about an empty property beyond a set number of days.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A reusable home-cover checklist is completed before departure, with a named keyholder and pet care confirmed."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "Book pet care or ask a neighbour to look after the animals"
                - "Give a spare key and your travel dates to someone you trust"
                - "Pause deliveries and check which bills fall due while you are away"
                - "Refresh the sitter and keyholder contact list before the year's trips @recurring(yearly)"
            - name: Two-week countdown before flying home
              description: |-
                ## Purpose
                The last fortnight before a trip home fills up with shopping, packing, work handovers and last-minute requests, and things get forgotten in the rush. A countdown that spreads the jobs over fourteen days, with the online check-in and airport pickup confirmed near the end, makes departure day calm. It is the same list every time, so it gets quicker with each trip.

                ## Milestones
                1. A countdown with jobs assigned to day 14, day 7, day 3 and day 1.
                2. Online check-in done and boarding passes saved.
                3. Airport pickup at home confirmed with a named driver and a phone number.
                4. Bags weighed, documents in one pouch and the house checklist completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The countdown is followed for the next trip, with check-in done and the airport pickup confirmed at least two days before flying."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Write the countdown jobs for days 14, 7, 3 and 1"
                - "Confirm who is picking you up at the airport and their number"
                - "Check in online as soon as the airline opens it"
                - "Put passports, tickets and insurance papers in one pouch"
            - name: Monthly calls with your hosts before you land
              description: |-
                ## Purpose
                Arriving to find your room given to a visiting cousin, or that your mother has planned a church harvest you knew nothing about, is a common start to a trip home. A short call with your hosts each month in the run-up settles the room, the plans, what they need from abroad and who meets you at the airport. It also gives older relatives something to look forward to.

                ## Milestones
                1. A monthly call set with your main host for the months before departure.
                2. Room, dates, meals and any household needs agreed and noted.
                3. Family plans for the visit written down so you can fit your own around them.
                4. A final call two days out confirming arrival time and pickup.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hosts confirm your room, dates and airport pickup on a call within the final week before the trip."
                cadence: cyclic
              tasks:
                - "Set a date for the first call with your main host"
                - "Call your hosts to settle plans, room and needs for the visit @recurring(monthly:25)"
                - "Write down any family events they have planned during your stay"
                - "Ask what the household is short of that you could bring"
            - name: Post-trip debrief and notes for next time
              description: |-
                ## Purpose
                Within a month of coming back the lessons of the trip blur: what it really cost, which relative you never managed to see, the gift that went down best. A short debrief straight after landing, written into one note, makes next year's trip cheaper and kinder. It also catches promises made at home before they are forgotten.

                ## Milestones
                1. Real costs compared with the budget, line by line.
                2. People you meant to see but missed listed for next time.
                3. Promises made during the trip written down with a date to follow up.
                4. Three changes for the next trip recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A debrief note with real costs, missed people, promises and three changes is written within two weeks of every return."
                cadence: cyclic
                effort_hours_estimate: "1"
              tasks:
                - "Compare what the trip really cost with the budget"
                - "List relatives you missed and promises you made"
                - "Write three things to do differently next time"
                - "Write the debrief note within two weeks of returning @recurring(yearly)"
            - name: Trip photos shared and archived with the family
              description: |-
                ## Purpose
                Hundreds of photos from the trip sit on one phone while the grandparents who are in them never see them printed. Sorting them soon after you return, sharing a small set with the family group and printing a few for the elders turns the visit into something everyone keeps. It also builds a record of faces and places that matters more each year.

                ## Milestones
                1. Photos from every phone gathered into one folder named by year and place.
                2. A small set chosen and shared in the family group chat.
                3. Five or six prints sent home for the elders who do not use phones much.
                4. People in older photos named while relatives still remember.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Trip photos are in one dated folder, a selection is shared with the family, and at least five prints reach the elders."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Collect photos from every traveller's phone into one folder"
                - "Pick twenty of the best and share them in the family group"
                - "Order prints for the grandparents and post them home"
                - "Share one older photo in the family group and ask who is in it @recurring(monthly:28)"
            - name: Travel health preparation and medicine supply
              description: |-
                ## Purpose
                Heat, mosquitoes and a change of food catch out even people born on the island, and running short of a regular prescription abroad is a real problem. Seeing a travel clinic or pharmacist six to eight weeks ahead, and packing enough of every medicine plus a small kit, keeps the trip from being spent in bed. It is organisation, not treatment, and your clinician has the final word.

                ## Milestones
                1. A travel health appointment or pharmacist conversation booked well before departure.
                2. Advice for your destination checked on your country's official travel health site.
                3. Enough of each regular medicine for the trip plus a few spare days, in original packaging with the prescription.
                4. A small kit packed: repellent, sunscreen, rehydration sachets and anything your clinician suggested.

                ## Notes
                Dengue and other mosquito-borne illnesses circulate across the region, especially in the rainy season. Repellent and covering up at dawn and dusk matter as much for returning locals as for tourists.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A travel health check is done before departure and every regular medicine for the trip is packed with its prescription."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a travel health appointment or pharmacist chat six to eight weeks ahead"
                - "Read the official travel health advice for your destination"
                - "Order enough repeat medicine to cover the trip plus spare days"
                - "Pack a small kit with repellent, sunscreen and rehydration sachets"
                - "Check the latest travel health advice for your island before the year's trip @recurring(yearly)"
            - name: Customs allowances both ways for suitcase goods
              description: |-
                ## Purpose
                Going out, a case full of new electronics and gifts can attract duty at home; coming back, a bag of mangoes, pepper sauce or cooked meat can be seized at the border abroad. Learning the personal allowances and banned items on both sides before you pack avoids fines and the heartbreak of a confiscated black cake. Rules change, so the official sites beat a cousin's memory.

                ## Milestones
                1. The personal duty-free allowance for entering your home country found on its customs site.
                2. The list of food, plant and animal products you cannot bring back into your country of residence read.
                3. A note of foods that usually travel well, such as sealed sauces and spices, and ones that do not.
                4. Receipts kept together for any new goods in the outbound case.

                ## Notes
                Declare when in doubt. Most fines come from undeclared items, not from declared ones that turn out to be restricted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note lists the inbound duty allowance at home and the restricted foods for the return, both taken from official customs sites."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the visitor or returning national allowance on your home customs site"
                - "Read the banned and restricted foods list for your return"
                - "Write a short list of foods you can safely bring back"
                - "Keep receipts for new items you are carrying home"
            - name: Licence, permit and car hire for driving back home
              description: |-
                ## Purpose
                Most English-speaking islands drive on the left, while Haiti, Belize and the Dutch Caribbean drive on the right, and several countries want visitors to hold a temporary local permit. Getting the licence question, insurance and the car hire choice right before you land saves a morning at the police station and a dispute about a scratched bumper. It also decides whether you rely on family lifts.

                ## Milestones
                1. The driving side and visitor permit rules for your home country confirmed from an official source.
                2. Whether you need an international driving permit checked and one obtained if so.
                3. Car hire, a relative's car or lifts compared on cost, insurance and freedom.
                4. If hiring, the car photographed at pickup and the insurance excess noted.

                ## Notes
                Borrowing a relative's car can leave them exposed if their insurance does not cover you. Ask them to check before you drive it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "The licence and permit rules are confirmed and a transport choice for the trip is made, with insurance checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the visitor driving rules for your home country on an official site"
                - "Find out whether you need an international driving permit"
                - "Compare car hire with borrowing a car or using family lifts"
                - "Ask any relative lending a car to confirm their insurance covers you"
            - name: Getting around by maxi taxi, route taxi and bus
              description: |-
                ## Purpose
                Public transport is how most people move around the islands, from the maxi taxis of Trinidad (minibuses with a coloured band showing the route) to Barbados's ZR vans and the route taxis of Jamaica and the OECS. Relearning the routes, fares and etiquette lets you get about without waiting for a relative to finish work. It is cheaper than hiring a car and shows you more of home.

                ## Milestones
                1. The main routes between where you stay and where you want to go written down.
                2. Current fares checked with a relative, and small notes or coins kept ready.
                3. Rules of thumb noted: where to stand, how to stop the van, the last service at night.
                4. One trip made on your own early in the visit.

                ## Notes
                Ask a relative which routes and times they would avoid, especially at night. Their local knowledge beats any app.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of routes, fares and safety tips is written and at least one ride is taken by public transport during the trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a relative which maxi, route taxi or bus serves the places you visit"
                - "Write the current fares and last service times in your phone"
                - "Keep small notes and coins for fares"
                - "Take one trip on your own in the first days of the visit"
            - name: Phone, data and staying reachable on the island
              description: |-
                ## Purpose
                Roaming on a foreign plan can cost more than a weekend's groceries, and the family group chat expects you to be on it. Choosing between an eSIM, a local SIM from one of the island's carriers or roaming, and keeping a local number alive between trips, makes you easy to reach and saves money. It also keeps two-factor codes from your bank abroad working.

                ## Milestones
                1. Roaming charges on your current plan checked.
                2. An eSIM, local SIM or roaming add-on chosen for the trip.
                3. A plan for receiving bank security codes sent to your usual number.
                4. If you keep a local SIM, its expiry rules noted and a top-up routine set.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A phone and data option for the trip is chosen and bank security codes are confirmed to work while abroad."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your roaming charges for the home country"
                - "Compare an eSIM, a local SIM and a roaming add-on"
                - "Check how your bank sends security codes while you are abroad"
                - "Top up the local SIM so the number stays active @recurring(quarterly)"
            - name: Catching up on what has changed back home
              description: |-
                ## Purpose
                After a few years away you return to new highways, new prices, shops gone and areas that are now safer or less safe than you remember. Asking relatives what has changed before you arrive saves the embarrassment of a ten-year-old price in your head and keeps you out of trouble. It also gives you better things to talk about than the weather in London.

                ## Milestones
                1. A list of questions for relatives: prices, roads, safety, new places, who has moved.
                2. Answers gathered from two or three people of different ages.
                3. A short note of places to avoid and new places worth seeing.
                4. Current prices for everyday things written down so you can judge what you are charged.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A note of current prices, safety advice and changes is gathered from at least two relatives before the trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of questions about prices, roads and safety"
                - "Ask two relatives of different ages what has changed"
                - "Note the current price of bread, a taxi ride and a doubles or patty"
                - "Ask a relative what has changed since your last visit @recurring(quarterly)"
            - name: House guest etiquette in a relative's home
              description: |-
                ## Purpose
                Staying with family runs on rules nobody writes down: greeting everyone properly with good morning, helping with dishes, not leaving the fan on, being home before the gate is locked, coming to church on Sunday. Visitors who grew up abroad, and partners who have never been, can cause offence without knowing. Talking the rules through before you arrive keeps the welcome warm for the whole stay.

                ## Milestones
                1. The household's routines asked about: meal times, water and electricity use, curfew, church.
                2. Your share of chores agreed, such as cooking one night or doing the shopping.
                3. A small contribution to groceries or a bill offered in a way the host can accept.
                4. Travelling companions briefed on greetings and house rules.

                ## Notes
                Water tanks and electricity are expensive in many places. Short showers and switching off the air conditioning when you go out are noticed and appreciated.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "House routines, chores and your contribution are agreed with the host before or on the first day of the stay."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your host about meal times, curfew and water use"
                - "Offer to take on a set chore for the whole stay"
                - "Decide how you will contribute to groceries or a bill"
                - "Brief anyone travelling with you on greetings and house rules"
            - name: Eating list of dishes and food stops
              description: |-
                ## Purpose
                Short trips end with the regret of never getting to the doubles stand, the Saturday soup, the jerk centre or the bakery that does the best coconut bread. A list of the dishes and places you crave, matched to the days they are served, makes sure the food you miss most actually happens. It also gives cousins an easy outing to plan with you.

                ## Milestones
                1. A list of dishes you miss, from breakfast to street food, written down.
                2. Each dish matched to a place and the day or time it is sold, with help from relatives.
                3. Meals that a relative cooks best requested ahead, with ingredients offered.
                4. The list checked off during the trip.

                ## Notes
                Doubles (curried channa in fried bara bread) sell out by mid-morning in many places, and Saturday soup and Sunday lunch are fixed by the calendar. Plan the list around those days.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A food list with at least ten dishes, places and days exists and most items are ticked off during the trip."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the ten dishes you miss most from home"
                - "Ask relatives where each is best and on which day"
                - "Ask a relative to cook their signature dish and offer to buy ingredients"
                - "Fit the food stops into the trip plan"
            - name: Choosing the season for this year's trip
              description: |-
                ## Purpose
                Christmas and Carnival bring the family together but come with the highest fares and the busiest houses, while May or October can be half the price and much calmer. Hurricane season runs from June to November, and some countries have a rainy season that turns roads to mud. Comparing seasons on cost, weather, family events and what you want from the trip leads to a better choice than habit.

                ## Milestones
                1. Three possible trip windows listed for the year.
                2. Each window compared on typical fare, weather, family events and leave available.
                3. What you most want from the trip written down: family time, rest, a festival or an occasion.
                4. A window chosen and the reasons recorded.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One trip window for the year is chosen after comparing three on cost, weather and family events, with the reasons written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick three possible windows for this year's trip"
                - "Look up the typical fare for each window in your price log"
                - "Check the weather pattern and family events for each window"
                - "Choose the window and write down why"
            - name: Choosing between a direct flight and a connection
              description: |-
                ## Purpose
                A direct flight saves a day but can cost much more; a connection through Miami, New York, Toronto or another island saves money but adds risk to bags and tight transfers. Older travellers and children change the balance again. Weighing total time, price, transit visa needs and the chance of a missed connection gives a route you will not regret at three in the morning in a transit lounge.

                ## Milestones
                1. Direct and connecting options listed with total travel time and fare.
                2. Transit visa or transit authorisation needs checked for any connection.
                3. Connection times checked against each airport's realistic minimum.
                4. A route chosen and booked on one ticket where possible.

                ## Notes
                Booking separate tickets to save money leaves you unprotected if the first flight is late. One ticket for every leg usually means the airline rebooks you.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A route is booked on a single ticket with connection times and any transit authorisation checked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List direct and connecting routes with total time and fare"
                - "Check whether any connection needs a transit visa or authorisation"
                - "Check each connection time against what the airport needs"
                - "Book the chosen route on a single ticket"
            - name: Cash gifts and household contribution plan
              description: |-
                ## Purpose
                Elders often expect a little money in the hand, the household will be feeding you, and relatives may raise a bill or school fees while you are there. Deciding in advance who gets cash, how much goes to the house and what you will say to an unexpected request keeps generosity from becoming resentment. It also stops the trip budget being spent by day five.

                ## Milestones
                1. A list of people you will give cash to, with an amount for each.
                2. A household contribution decided for food and utilities during your stay.
                3. A set amount kept aside for unexpected requests, and a polite answer prepared for when it runs out.
                4. The plan agreed with your partner or siblings if you share the giving.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cash gift and contribution plan with amounts per person is agreed before departure and kept within the trip budget."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List who you will give cash to and how much"
                - "Decide your contribution to the household for your stay"
                - "Set aside a fixed amount for unexpected requests"
                - "Agree the plan with siblings so giving is shared fairly"
            - name: Cutting the cost of the next trip by a fifth
              description: |-
                ## Purpose
                Families who fly home every year can save a fifth or more by changing a few habits: booking at the right point, travelling midweek, flying into a nearby airport, shipping gifts by barrel and using miles. Looking at last trip's spending line by line shows where the money really went. The saving can become an extra trip or a better gift for someone who needs it.

                ## Milestones
                1. Last trip's real spending broken down by line.
                2. The three biggest lines identified.
                3. At least two changes chosen for each of those lines and priced.
                4. The next trip budget set at about 80 percent of the last one.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The next trip's budget is set at least a fifth below the last trip's real cost, with the changes that achieve it listed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Break down what the last trip actually cost"
                - "Find the three most expensive lines"
                - "Price two cheaper alternatives for each of those lines"
                - "Compare this year's planned costs with last year's actuals @recurring(yearly)"
            - name: Building rest days into a packed visit
              description: |-
                ## Purpose
                Many people come back from a trip home more tired than they left, having driven to every aunt, gone to every lime (an easy gathering with friends) and never once sat on a beach. Blocking a few days with nothing planned, and saying so to the family early, protects your rest without anyone feeling snubbed. A rested visitor is better company, too.

                ## Milestones
                1. At least two days in the trip marked as rest days before you leave.
                2. The family told which days you are free and which are for you.
                3. A beach, river or quiet spot chosen for at least one of them.
                4. After the trip, a note of whether the rest days held.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "At least two rest days are planned, shared with the family and kept during the trip."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark two days of the trip as rest days"
                - "Tell the family which days you are keeping free"
                - "Choose a beach, river or quiet place for one rest day"
                - "Note after the trip whether the rest days held"
            - name: Splitting a short visit between both sides of the family
              description: |-
                ## Purpose
                Mother's side in town, father's side in the country, a partner's family on another part of the island, and only ten days: someone usually feels left out. Planning the split openly, with fixed days for each household and a shared meal where possible, avoids the quiet complaints that follow you home. It matters most when grandparents on both sides are elderly.

                ## Milestones
                1. Every household that expects a visit listed, with travel time between them.
                2. Days allocated to each household, with the reasons in mind.
                3. A shared gathering suggested where families get on.
                4. The plan shared with each household before you arrive.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A day-by-day split of the visit across households is shared with each of them before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every household that expects to see you"
                - "Note the travel time between each household"
                - "Draft a day-by-day split and check it with your partner"
                - "Call each household to share their days"
            - name: Planning the December trip for Christmas at home
              description: |-
                ## Purpose
                Christmas is the trip most people want and the hardest to book: fares peak, flights fill by late summer and the house is full. Planning it from the summer, with the black cake, sorrel, ham and parang (the Spanish-language Christmas music of Trinidad and Venezuela) in mind, means you arrive in time for the preparations, not just the day. It also lets you stay for Old Year's Night, as many families call New Year's Eve.

                ## Milestones
                1. Christmas dates agreed with the family by the end of summer.
                2. Flights booked by early autumn at or below your booking threshold.
                3. Your role in the Christmas preparations agreed: baking, painting, shopping or cooking.
                4. Plans for Christmas Day, Boxing Day and Old Year's Night written down.

                ## Notes
                Start from the **Trip** template. Flights for the last week before Christmas usually sell out first; arriving a week earlier is often cheaper and lets you join the cleaning and baking.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "December flights are booked by early autumn and your part in the family Christmas is agreed before you arrive."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the family which Christmas dates they want you there"
                - "Set a fare alert for December flights on your route"
                - "Agree your job in the Christmas preparations with your mother or host"
                - "Check December fares and set the alert each summer @recurring(yearly)"
            - name: Easter trip home for kite season and family
              description: |-
                ## Purpose
                Easter is a quieter, cheaper season to go home than Christmas, with Good Friday services, hot cross buns or bun and cheese in Jamaica, kite flying on Easter Monday in Guyana and the goat and crab races in Tobago. A long weekend plus a week's leave gives a full trip at a lower fare. It suits families with school-age children who are on holiday anyway.

                ## Milestones
                1. Easter dates for the year checked and leave booked around them.
                2. Flights booked at or below your booking threshold.
                3. Easter traditions you want to join chosen with the family.
                4. For kite flying, materials and a kite-making afternoon arranged with an elder.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An Easter trip is booked within budget and at least one Easter tradition is joined with the family."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check this year's Easter dates and the school holidays"
                - "Book leave around the Easter weekend"
                - "Ask the family which Easter traditions they keep now"
                - "Arrange a kite-making afternoon with an elder who knows how"
            - name: Trip home for a parent's milestone birthday
              description: |-
                ## Purpose
                When a parent turns 70, 80 or 90, that is often the trip everyone remembers, and the one where siblings abroad need to coordinate most. Agreeing the date, who pays for what and who flies in when, months ahead, avoids the last-minute scramble and the sibling who cannot get leave. The party itself goes better when someone at home is clearly in charge and someone abroad is clearly helping.

                ## Milestones
                1. The date and type of celebration agreed with the parent and siblings.
                2. A budget and a split of costs between siblings written down.
                3. Each sibling's travel dates collected in one place.
                4. Roles agreed: venue, food, music, speeches, photos and gifts.
                5. A thank-you to the people at home who did the work, after the event.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The birthday celebration happens on the agreed date with costs split as written and every sibling's travel arranged."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask your parent how they would like the birthday marked"
                - "Agree a budget and cost split with your siblings"
                - "Collect every sibling's travel dates in one shared note"
                - "Assign venue, food, music and speeches to named people"
            - name: Attending a family wedding back home as a guest
              description: |-
                ## Purpose
                A cousin's wedding back home can mean a church service, a reception, a Hindu wedding over several days or a dinner the night before, and each needs the right clothes, gifts and timing. Knowing what is expected of you as family abroad, from the gift to a speech or helping in the kitchen, makes the trip a pleasure rather than a series of surprises. Booking early matters because the whole family will be flying in the same week.

                ## Milestones
                1. The full schedule of wedding events confirmed with the couple or their parents.
                2. Outfits chosen for each event, including any traditional dress.
                3. A gift decided, with the couple's preference for cash, a registry or items from abroad.
                4. Any role you have, such as a reading or helping with food, confirmed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the wedding events with appropriate outfits and a gift the couple asked for, and any role you agreed is carried out."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the couple's parents for the full schedule of wedding events"
                - "Find out whether the couple prefer cash, a registry or gifts from abroad"
                - "Choose an outfit for each event"
                - "Confirm any role you have been asked to play"
            - name: Old school reunion or church homecoming weekend
              description: |-
                ## Purpose
                Old scholars' reunions, school anniversaries and church homecoming or harvest services draw people back from abroad and give a trip a focus beyond family. They often come with a fundraiser and a dinner, so they need budget and a booking. Planning the trip around one keeps you connected to the friends and community who knew you before you left.

                ## Milestones
                1. The date and programme of the reunion or homecoming confirmed with the organisers.
                2. Tickets for dinners or events bought and any donation pledged.
                3. Old classmates or church members you want to see contacted beforehand.
                4. The rest of the trip planned around the weekend.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the reunion or homecoming with tickets bought in advance and have met the people you contacted beforehand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the organisers for the date and programme"
                - "Buy tickets for the dinner or main event"
                - "Message the classmates or church members you want to see"
                - "Plan the rest of the trip around the weekend"
            - name: Taking young children home for the first time
              description: |-
                ## Purpose
                For grandparents, a baby or toddler's first trip home is a big moment; for the parents, it is a long day of travel. Passports, a consent letter if one parent travels alone, mosquito protection, a safe sleep space and a car seat all need sorting before you fly. A plan for the first few days helps the children settle into the heat and the noise of a house full of relatives.

                ## Milestones
                1. Each child's passport and any consent letter for travel with one parent ready.
                2. A car seat, cot or safe sleep arrangement confirmed at the house.
                3. Mosquito nets, child-safe repellent and sun protection packed after checking with your health visitor or pharmacist.
                4. A flight plan for feeding, sleeping and entertainment on the flights.
                5. A gentle first three days planned before the round of visits begins.

                ## Notes
                Many countries ask a child travelling with only one parent to carry a signed consent letter from the other parent. Check the rules on both sides and carry a copy of the birth certificate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Children's documents, consent letter if needed, sleep space and car seat are all confirmed before the flight."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check each child's passport and whether a consent letter is needed"
                - "Ask the hosts whether there is a cot and car seat you can use"
                - "Pack nets, child-safe repellent and sun protection"
                - "Plan the first three days to let the children settle"
            - name: Sending children home for the summer holidays
              description: |-
                ## Purpose
                Sending children to spend the long summer holiday with grandparents is a Caribbean tradition that gives them family, freedom and a sense of where they come from. It also involves an unaccompanied minor service or a travelling relative, a consent letter, money for their keep and clear agreements about rules, phones and outings. Getting the details right lets everyone enjoy it, grandparents included.

                ## Milestones
                1. The grandparents or relatives confirmed as willing and able, with dates agreed.
                2. Travel arranged with an airline's unaccompanied minor service or a trusted adult, with consent letters signed.
                3. Money for the child's food, outings and emergencies sent or arranged.
                4. Rules agreed with the hosts: bedtimes, phones, beaches, church and who can collect the child.
                5. A weekly call time fixed for the summer.

                ## Notes
                Give the hosts a copy of the child's health information, any medicines and a signed note allowing them to seek medical treatment in an emergency, so a doctor can act without waiting for you.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The child travels with consent letters and a confirmed escort or airline service, and the hosts hold money, medical details and agreed rules."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the grandparents whether they can host and for how long"
                - "Compare the airline's unaccompanied minor service with a travelling relative"
                - "Prepare consent letters and a medical treatment authorisation for the hosts"
                - "Agree house rules and a weekly call time with the hosts"
                - "Send money for the child's keep before they arrive"
            - name: Flying home with an older parent
              description: |-
                ## Purpose
                Parents who emigrated decades ago often want to go home more as they age, but long flights, connections and heat get harder. Arranging wheelchair or assistance at each airport, keeping medicines in the hand luggage and choosing the simplest route turn an exhausting day into a manageable one. Getting travel insurance and a clinician's view on fitness to fly are part of the same job.

                ## Milestones
                1. Your parent's clinician asked about fitness to fly and any precautions.
                2. Assistance or a wheelchair booked with the airline at every airport on the route.
                3. Medicines, a list of conditions and prescriptions packed in the hand luggage.
                4. Seats chosen near the aisle and a route with the fewest changes booked.
                5. Pickup at home arranged with a car that suits their mobility.

                ## Notes
                Request assistance when booking and confirm it again 48 hours before flying. The request often gets lost when flights are changed.
              priority: high
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Airport assistance is confirmed at every stage, medicines are in the cabin bag and the clinician's advice is followed for the flight."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your parent's clinician about fitness to fly and precautions"
                - "Book airport assistance for every leg of the trip"
                - "Pack medicines and a conditions list in the hand luggage"
                - "Reconfirm the assistance booking two days before flying"
            - name: First trip home after ten years or more
              description: |-
                ## Purpose
                Going back after a long gap brings joy and some grief at once: elders gone, a childhood house sold, friends with grown children, and a place that has moved on without you. Preparing for that, and planning who to see first, which graves to visit and what you most want to find again, makes the trip easier to carry. It also helps to have someone at home who will walk you through the changes.

                ## Milestones
                1. A list of people you most want to see, with who is still living and where.
                2. Places you want to revisit chosen: a childhood home, a school, a church, a beach.
                3. Graves of family members you missed burying located with a relative's help.
                4. One relative or friend asked to be your guide for the first days.
                5. Time after the trip set aside to talk it over with someone close.
              priority: medium
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A list of people, places and graves is prepared before the trip and a named guide meets you for the first days."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the names of people you most want to see and check who is still living"
                - "List the places you want to revisit"
                - "Ask a relative where family members you could not bury are laid to rest"
                - "Ask one person at home to be your guide for the first days"
            - name: Bringing a partner home to meet the family
              description: |-
                ## Purpose
                Taking a partner home for the first time means introducing them to a family, a house and a culture at once, and they will be watched closely. A partner who has never been to the Caribbean needs a briefing on greetings, food, church, nicknames and how loudly people discuss things. A little preparation on both sides gives the visit the best chance of a warm welcome.

                ## Milestones
                1. Your partner briefed on family members, nicknames, greetings and sensitive subjects.
                2. Sleeping arrangements agreed with your parents in advance, respecting house rules.
                3. A few phrases, dishes and customs shared before the trip.
                4. Some time set aside for just the two of you during the visit.

                ## Notes
                Expect questions about marriage and children from aunts. Agreeing between you how to answer saves an awkward lunch.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Your partner is briefed on the family before the trip and sleeping arrangements are agreed with your parents beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw your partner a simple family tree with nicknames"
                - "Agree sleeping arrangements with your parents before arriving"
                - "Cook one family dish together before the trip"
                - "Plan at least one outing for just the two of you"
            - name: Trip home on a student budget
              description: |-
                ## Purpose
                Students abroad often go home only every two years because the fare looks impossible on a part-time wage. Student fares, flexible dates in term breaks, staying with family, carrying fewer gifts and travelling outside peak weeks can bring the trip within reach. A plan that counts every pound or dollar shows when it can happen.

                ## Milestones
                1. Student or youth fares checked on your route, with any student card needed.
                2. Term breaks compared for the cheapest window.
                3. A lean budget written with family accommodation and a capped gift list.
                4. A savings plan from part-time work or holiday jobs set to reach the fare.

                ## Notes
                Let the family know early that gifts will be small this time. Most relatives would far rather see you than a suitcase.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A student-budget trip is planned with a chosen term-break window, a lean budget and a savings plan that reaches the fare."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Check student and youth fares on your route"
                - "Compare fares across your term breaks"
                - "Write a lean budget with a capped gift list"
                - "Tell the family early that gifts will be small this time"
            - name: Making a four-day visit count
              description: |-
                ## Purpose
                From Miami, New York or Toronto a long weekend home is possible, but four days disappear quickly into airport time and visits that run over. Choosing two or three things that matter most, fixing them before you land and saying no to everything else turns a short trip into a full one. It suits a sick relative, a single event or a quick reset.

                ## Milestones
                1. The purpose of the visit written in one sentence.
                2. Two or three must-do things chosen and booked or arranged before flying.
                3. A day-by-day plan with travel time counted honestly.
                4. Relatives told in advance that this is a short trip with a focus.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A four-day plan with no more than three fixed priorities is set before flying and each priority happens."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the purpose of this short visit in one sentence"
                - "Choose the two or three things that must happen"
                - "Plan each day with honest travel times"
                - "Tell relatives in advance that this visit has a narrow focus"
            - name: Travelling home in hurricane season
              description: |-
                ## Purpose
                Trips between June and November are cheaper but carry the chance of a storm closing airports or cutting power where you stay. Knowing the season, choosing flexible fares, watching forecasts in the week before and having a plan if a storm comes makes it a reasonable risk instead of a gamble. It matters most for the eastern and northern islands that sit in the usual storm tracks.

                ## Milestones
                1. Your insurance checked for named storm cover and when it must be bought to apply.
                2. A flexible or changeable fare chosen where the price difference is small.
                3. An official national meteorological service or regional forecaster followed in the week before travel.
                4. A plan agreed with the hosts for a storm: water, power, shelter and how you will contact home abroad.

                ## Notes
                Many policies stop covering a storm once it has been named. Buy insurance when you book, not when the forecast looks bad.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A hurricane-season trip has insurance with storm cover bought at booking and a written storm plan agreed with the hosts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your travel insurance covers named storms"
                - "Compare the price of a flexible fare with a fixed one"
                - "Follow your home country's official forecaster the week before flying"
                - "Agree a storm plan with your hosts"
            - name: Errands and paperwork day during the visit
              description: |-
                ## Purpose
                Many trips home include a run of errands that can only be done in person: renewing a national ID card, visiting a bank, paying land tax, collecting a document or meeting a lawyer. Without planning, offices are closed on a public holiday or need a document you left abroad. Batching the errands into one or two well-prepared days frees the rest of the trip for family.

                ## Milestones
                1. A list of errands that need you in person, kept between trips.
                2. Opening hours, appointments and required documents checked for each office.
                3. Documents, copies and passport photos packed in one folder.
                4. Errands grouped by area into one or two days, with each outcome noted.

                ## Notes
                Public offices often close early on Fridays and on any public holiday. Ask a relative to check the calendar for local holidays during your stay.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Every planned errand has its documents packed and is done or rescheduled with a note by the end of the trip."
                cadence: rolling
              tasks:
                - "Add errands for your next visit to the running list @recurring(monthly:18)"
                - "Check opening hours and required documents for each office"
                - "Pack documents, copies and passport photos in one folder"
                - "Group the errands by area into one or two days"
            - name: Extended stay of a month or more back home
              description: |-
                ## Purpose
                Teachers with long summers, people between jobs and new retirees sometimes go home for a month or more, which is a different thing from a visit. A long stay needs a fair arrangement with hosts or a rental, transport, a routine, a plan for bills abroad and something to do beyond visiting. Getting those right makes the stay restful for you and easy on the people you stay with.

                ## Milestones
                1. Accommodation arranged for the full stay, with any rent or contribution agreed in writing.
                2. Bills, post and responsibilities abroad covered for the whole period.
                3. Transport for the stay sorted: a longer car hire, a relative's car or a routine on public transport.
                4. A weekly rhythm planned that includes rest, family and something of your own, such as a class or volunteering.
                5. Entry rules checked for the length of stay allowed for your passport.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A stay of a month or more has accommodation, transport and bills abroad arranged for the whole period before departure."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check how long your passport lets you stay without extra permission"
                - "Agree accommodation and any rent or contribution for the full stay"
                - "Arrange bills, post and duties abroad for the whole period"
                - "Plan a weekly rhythm with rest, family and one activity of your own"
            - name: Coordinating flights for a family group
              description: |-
                ## Purpose
                When eight cousins from three countries are flying in for the same occasion, someone has to collect dates, spot the cheapest days, arrange airport pickups and stop five people landing at midnight with no driver. Acting as the group coordinator, with one shared sheet and clear deadlines, saves everyone money and the hosts a lot of stress. It is unpaid work for the family, so keep it simple.

                ## Milestones
                1. A shared sheet with each traveller's name, city, dates, flight and arrival time.
                2. A booking deadline agreed so fares do not rise while people wait.
                3. Airport pickups grouped by arrival time, with drivers named.
                4. Accommodation for everyone confirmed with the hosts.
              priority: low
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every traveller in the group is listed with flights and an assigned airport pickup before the first person flies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set up a shared sheet for travellers, dates and flights"
                - "Agree a booking deadline with the whole group"
                - "Group arrivals by time and assign a driver to each"
                - "Confirm with the hosts where everyone will sleep"
                - "Ask the agent to draft a single message with everyone's arrival details for the hosts"
            - name: Family reunion trip home
              description: |-
                ## Purpose
                A family reunion brings together relatives from home, the UK, the US and Canada, often over a long weekend with a church service, a beach day, a dinner and matching T-shirts. Organising one takes a year: choosing a date, collecting contributions, booking venues and keeping everyone informed. Doing it well gives the younger generation a lasting picture of how big their family is.

                ## Milestones
                1. A small committee formed with members at home and abroad.
                2. A date chosen at least a year ahead, avoiding peak fares where possible.
                3. A budget, contribution per family and a way of collecting and recording money agreed.
                4. Venues, food, T-shirts and a programme booked and shared.
                5. A family tree or photo display prepared for the main event.

                ## Notes
                Keep the money in one account with two signatories and send a simple statement to the family after the reunion. It keeps trust for the next one.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The reunion takes place on the agreed date and a statement of money received and spent is shared with the family afterwards."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask three relatives at home and abroad to join a reunion committee"
                - "Propose two possible dates at least a year ahead"
                - "Agree the contribution per family and how money is recorded"
                - "Send the reunion progress update to the family group @recurring(monthly:12)"
---

# Trips Back Home

This area is for anyone who flies back to Trinidad, Jamaica, Guyana, Barbados, St Lucia, Haiti or any other home island from London, Toronto, New York or Miami, and wants the trip to feel like a homecoming rather than a fortnight of running around. It starts with the foundations (a map of family dates, documents, a full budget, leave and where to sleep), then the routines that make each trip cheaper and calmer, the practical know-how for getting around and being a good house guest, the decisions about seasons, routes and money, the big occasions worth flying for, the situations that change the plan (children, older parents, a first trip in years) and the bigger jobs of extended stays and family reunions.

What repeats is a monthly transfer into the trip fund, a weekly look at fares on your route, a running gift list and requests log, monthly calls with your hosts in the run-up, quarterly checks on miles and your local SIM, and a yearly debrief once you are back. The Trip, Operational checklist, Savings goal, Metrics log and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
