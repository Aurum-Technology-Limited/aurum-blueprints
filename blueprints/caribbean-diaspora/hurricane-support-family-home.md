---
id: caribbean-diaspora.hurricane-support-family-home
name: Hurricane Support for Family Back Home
description: "A hurricane plan for family back home, run from abroad: contact trees, alerts, a storm fund, documents, house and insurance checks, the first 72 hours after landfall and the repairs and relief that follow."
category: personal
version: 1.0.0
tags: [caribbean-diaspora, hurricane-support-family-home, everyone, carer, hurricane-season, disaster-preparedness, storm-fund, home-insurance]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - savings-goal
    - meeting-notes
    - operational-checklist
    - purchase-decision
    - trip
  pillars:
    - name: Caribbean Life & Diaspora
      emoji: "🌴"
      description: "Caribbean life at home and abroad: money and barrels sent home, sou-sou savings, passports and returning-resident moves, land and family property, Carnival and mas, steelpan, food, language and heritage, and staying close to family across the water."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Hurricane Support for Family Back Home
          description: "Helping family through hurricane season from abroad: preparedness checklists, emergency funds, communication plans, insurance and relief after a storm."
          projects:
            - name: Storm risk snapshot for each family house
              description: |-
                ## Purpose
                Before you can help from abroad, you need to know what you are protecting: whether Granny's house in St Thomas sits on a hillside that slips, beside a gully that floods, or under a breadfruit tree that leans over the roof. One page per household, covering location, construction, roof type, who lives there and their health, turns a vague worry into a short list of risks you can actually work on.

                ## Milestones
                1. A one-page snapshot for each household back home, with address, parish or district and who lives there.
                2. Roof type, wall construction, rough age of the house and any flood or landslide history recorded for each.
                3. The three biggest storm risks for each house ranked and marked as fixable, insurable or to plan around.
                4. The snapshot shared with siblings and the main relative on the ground.

                ## Notes
                Start from the **Risk register** template. Ask for photos of the roof, windows and yard on a video call; you will spot more on screen than any description gives you.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page risk snapshot exists for every household you would help, with its top three storm risks ranked and shared with siblings."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every household back home you would help in a storm and who lives in each"
                - "Ask a relative to walk the house and yard with you on a video call"
                - "Ask the local council or disaster office whether the district floods or slips"
                - "Rank the three biggest storm risks for each house in the register"
                - "Update the snapshot after repairs or a change of who lives there @recurring(yearly)"
            - name: Family hurricane contact tree across countries
              description: |-
                ## Purpose
                When a storm passes over Grenada at two in the morning, ten relatives in three countries will all ring the same aunt whose phone battery is already low. A contact tree decides who calls whom, so the household back home makes one call out and the news travels outward without draining the one phone that matters.

                ## Milestones
                1. Every person in the tree listed with phone, WhatsApp and email, grouped by country.
                2. One lead contact abroad and one on the ground named, each with a backup.
                3. A call order agreed so the household back home makes one call and the tree does the rest.
                4. The tree saved in each relative's phone and a printed copy kept at the house.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact tree naming a lead and backup in each country is saved on every relative's phone and printed at each house back home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every relative who will want news after a storm and where they live"
                - "Agree who the household back home calls first and who that person rings next"
                - "Name a backup for every person who has a role in the tree"
                - "Print the tree in large type for the house back home"
                - "Ring through the tree to confirm every number before the season @recurring(yearly)"
            - name: Backup communication plan for when phones go down
              description: |-
                ## Purpose
                After Hurricane Maria, parts of Dominica were cut off for days, and many families abroad learned their relatives were safe only through a radio message or a neighbour's post. Agreeing in advance what the household will try, in what order, and how long silence lasts before you worry, saves hours of panic when the mobile network and the light (electricity, as most of the region says it) are both gone.

                ## Milestones
                1. An agreed order of channels: call, text, WhatsApp, a neighbour's phone, local radio and a social media check-in.
                2. Fixed check-in times agreed for storm days, such as the evening before landfall and the first morning after.
                3. A plain rule for how long silence lasts before the missing-contact steps start.
                4. Power banks and a small solar or car charger kept charged at the house.

                ## Notes
                Texts often get through when calls fail because they need less signal. Ask the family to send a short text first and save battery for later.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written order of contact channels, two fixed check-in times and a silence rule are agreed with each household and pinned in the family group."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree the order of channels the household will try after a storm"
                - "Set fixed check-in times for the evening before and the morning after landfall"
                - "Send the house two power banks or a small solar charger"
                - "Note which local radio stations read out family messages after storms"
                - "Test a text-only check-in with each household on a calm day @recurring(yearly)"
            - name: Hurricane season alerts and calendar set-up
              description: |-
                ## Purpose
                The Atlantic hurricane season runs from 1 June to 30 November, with most damaging storms between August and October, yet many people abroad first hear of a storm when a cousin posts about it. Setting up official alerts for the islands your family lives on, and marking the season in your calendar, means you hear early enough to help with shopping, shutters and money.

                ## Milestones
                1. Official alerts set up on your phone from a regional hurricane forecast centre and each island's met service.
                2. The national disaster office for each island followed on the channel it actually posts to.
                3. Season start, the August to October peak and season end marked in your calendar.
                4. One reliable local news source chosen for each island, in place of forwarded rumours.

                ## Notes
                Trinidad and Tobago, Guyana, Suriname and the ABC islands sit at the southern edge of the main hurricane belt, but tropical storms and heavy rain still bring floods and landslides there. Viral posts showing a storm's path ten days out are guesses; trust official forecasts.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Official storm alerts for every island where family lives are active on your phone and the season dates are in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Install the official weather service app or alerts for each island your family lives on"
                - "Follow each national disaster office on the platform it posts to most"
                - "Mark the season start, the August to October peak and 30 November in your calendar"
                - "Choose one trusted local news outlet for each island and mute forwarded rumours"
            - name: Shelter and evacuation plan for each household
              description: |-
                ## Purpose
                Families in low-lying parts of Georgetown, coastal Belize or beside a ravine in Haiti may need to leave before a storm, and the decision is far harder to make at the last minute in the rain. Knowing the nearest official shelter, who would drive, which relative on higher ground could take them in and what triggers the move turns evacuation into a plan instead of an argument.

                ## Milestones
                1. The nearest official shelter for each household confirmed with the disaster office or local councillor.
                2. A second option on higher ground, such as a relative's concrete house, agreed with that relative.
                3. Transport arranged for anyone who cannot drive, with a named driver and a backup.
                4. The trigger for leaving agreed, such as an official evacuation order for the area.
                5. A short shelter packing list covering medicines, documents, bedding and water.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each household has a named shelter, a higher-ground fallback, a driver and a written trigger for leaving, shared in the family group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the disaster office or councillor which shelter serves each household"
                - "Ask a relative on higher ground whether the family could stay with them"
                - "Name a driver and a backup driver for anyone who cannot get there alone"
                - "Write the evacuation trigger and both addresses on the family plan"
            - name: Emergency storm fund for family back home
              description: |-
                ## Purpose
                The first money needed after a hurricane is small and urgent: a tarpaulin for the roof, food while the shops reopen, fuel for the generator, a taxi to the shelter. A separate fund with a target, held where you can move it from your phone, and rules agreed with siblings about when it is released, means nobody waits for a family debate while the roof is open.

                ## Milestones
                1. A target agreed with siblings, written as a sum and as what it would pay for.
                2. A separate savings pot opened and named for the storm fund.
                3. Monthly contributions running from each person who agreed to pay in.
                4. Written rules for what the fund pays for and which two people can release it.

                ## Notes
                Start from the **Savings goal** template. Many families keep the fund abroad and send money only when a storm is close, so it is not spent on other needs in a quiet year.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A named storm fund holds regular contributions from each agreed sibling, with written release rules shared in the family group."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Agree a target for the storm fund with your siblings on one call"
                - "Open a separate savings pot named for the family storm fund"
                - "Write down what the fund pays for and which two people can release it"
                - "Move the agreed contribution into the storm fund @recurring(monthly:9)"
                - "Check the fund target against last season's prices for repairs and supplies @recurring(yearly)"
            - name: Waterproof document bag for the family home
              description: |-
                ## Purpose
                Floodwater and a lifted roof can destroy birth certificates, land papers and insurance policies in minutes, and replacing them from abroad can take months. A sealed bag of originals that someone grabs on the way out, plus scanned copies held abroad, means insurance claims, relief applications and bank visits can start the week after the storm.

                ## Milestones
                1. Originals of IDs, deeds or land papers, insurance policies and prescriptions gathered in one place.
                2. Every document photographed or scanned and saved in a shared folder abroad.
                3. The originals sealed in a waterproof pouch kept in an agreed spot near the door.
                4. Two people at the house who know where the pouch is and that it leaves with them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Scans of every key household document sit in a shared folder abroad and the originals are in a waterproof pouch two people at the house can find."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the papers the household would need to claim, borrow or apply for relief"
                - "Ask a relative to photograph each document in good light and send the images"
                - "Save the images in a shared folder named by household and document"
                - "Send a waterproof document pouch and agree where it will be kept"
                - "Check the scans are current and the pouch is still by the door @recurring(yearly)"
            - name: Family hurricane plan call across time zones
              description: |-
                ## Purpose
                Siblings in Brooklyn, Birmingham and Mississauga each assume someone else will send money, call the insurer or check on Auntie, so after the storm three people do one job while another is missed. A single planned call before the season, with roles written down, settles who coordinates, who pays, who handles paperwork and who keeps the household calm.

                ## Milestones
                1. A call held with every adult relative abroad who helps the household.
                2. Roles written: coordinator, money, insurance and paperwork, ground contact and emotional support.
                3. A backup named for each role in case someone is travelling or unwell.
                4. A rule agreed for decisions when not everyone can be reached.
                5. Notes from the call shared in the family group within a day.

                ## Notes
                Start from the **Meeting notes** template. A simple rule, such as the coordinator and one other person deciding together, stops the plan stalling when a storm arrives during someone's night shift.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Written notes name a person and a backup for each of five storm roles and have been shared with every relative on the call."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick a call time that works across every sibling's time zone"
                - "Send a short agenda listing the roles to fill before the call"
                - "Ask the agent to turn the call notes into a one-page family storm plan"
                - "Hold the plan call again in May before each season @recurring(yearly)"
            - name: Medicines and prescriptions stocked before peak season
              description: |-
                ## Purpose
                Pharmacies close, roads wash out and clinics turn into first aid points after a big storm, which is exactly when a relative with diabetes or high blood pressure runs short. Getting regular medicines in hand before August, as far as the prescriber and pharmacy allow, plus a written list of every medicine, protects the people who cannot go without.

                ## Milestones
                1. A written list of every regular medicine, its dose as prescribed and the prescriber, for each person.
                2. The prescriber asked how much supply can be dispensed ahead of the season.
                3. Medicines that need cooling, such as insulin, matched to a plan for keeping them cool without power.
                4. The medicine list copied into the document pouch and the shared folder.

                ## Notes
                Ask the doctor or pharmacist, not a group chat, how long each medicine keeps and how to store it if the fridge is off.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each person's medicine list is in the pouch and the shared folder, and the prescriber has been asked about a pre-season supply."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the household for photos of every medicine box and label"
                - "Type up the medicines, doses and prescribers for each person"
                - "Ask the prescriber how much can be supplied ahead of the season"
                - "Send a cooling pouch if any medicine must stay cold"
                - "Confirm the supply is topped up before the August peak @recurring(yearly)"
            - name: Pre-season roof, window and door inspection
              description: |-
                ## Purpose
                Most storm damage to Caribbean houses starts where the wind gets in: a loose sheet of galvanise (the corrugated metal roofing used across the region), a rusted roof strap, a window that will not latch. A walk-round every May by a relative or a trusted builder catches the fixes that cost a few hundred dollars now instead of a whole roof in October.

                ## Milestones
                1. Roof sheets, screws, ridge capping and straps checked and photographed.
                2. Windows, doors and shutters tested to close and lock tight.
                3. A list of repairs priced by a local builder, with the urgent ones marked.
                4. Urgent repairs finished and photographed before the end of June.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each May the roof and openings are photographed, repairs are priced, and urgent ones are done with photos before July."
                cadence: cyclic
              tasks:
                - "Send the household a short list of what to photograph on the roof and openings"
                - "Ask a trusted builder to quote for loose sheets, rust and broken latches"
                - "Pay for the urgent repairs and ask for before and after photos"
                - "Book the pre-season inspection with the builder or a relative @recurring(yearly)"
            - name: Hurricane supply kit for the household
              description: |-
                ## Purpose
                Shops empty fast once a hurricane watch is posted, and the queue for water and batteries is no place for an 80-year-old. A kit bought in calm months and checked each quarter, with water, tinned food, a manual can opener, torches, batteries, a battery radio, first aid supplies and a spare gas cylinder, means the family only tops up rather than starts from scratch.

                ## Milestones
                1. A written kit list sized for the people and pets in the house, for the number of days the disaster office recommends.
                2. Everything on the list bought and stored in sealed tubs off the floor.
                3. Expiry dates on food, water and batteries recorded.
                4. A relative at the house who checks the kit and reports what is missing.

                ## Notes
                Start from the **Operational checklist** template. Use the national disaster office's kit list as the base, then add what this household really needs, such as baby milk, denture supplies or dog food.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete kit matching the written list is stored at the house, with expiry dates checked and photographed every quarter."
                cadence: cyclic
              tasks:
                - "Download the disaster office's recommended kit list for the island"
                - "Adapt the list for the people and pets in the house"
                - "Send money or a shopping order for the missing items in a quiet month"
                - "Ask the household to check expiry dates and send a photo of the kit @recurring(quarterly)"
            - name: Storm watch countdown when a system threatens
              description: |-
                ## Purpose
                Once a named storm appears in the forecast for your family's island there are usually a few days of warning, and what happens in those days decides how bad the aftermath is. A countdown agreed in advance, with actions at five days out, three days, the day before and landfall, tells everyone what to do at each point instead of refreshing the forecast at midnight.

                ## Milestones
                1. A countdown with actions at five days, three days, one day and landfall.
                2. Money, shopping, shutters, medicines and evacuation each tied to a point in the countdown.
                3. The countdown pinned in the family group and printed at the house.
                4. The countdown used once, even for a storm that missed, and adjusted afterwards.

                ## Notes
                Forecast timing shifts. Treat the countdown points as when to act, measured from the official watch and warning announcements, not fixed dates.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written four-stage storm countdown is pinned in the family group and has been used and revised after at least one threatening system."
                cadence: cyclic
              tasks:
                - "Write what should happen at five days, three days, one day and landfall"
                - "Tie the storm fund release to the three-day point of the countdown"
                - "Pin the countdown at the top of the family group"
                - "Walk through the countdown with the household before the August peak @recurring(yearly)"
            - name: Quarterly readiness call with the household
              description: |-
                ## Purpose
                Plans made in May quietly fall apart by September: a phone number changes, the neighbour who held the key moves away, the generator is lent to a cousin. A short call every quarter with the household back home, working through the same six questions, keeps the plan true without turning every conversation into storm talk.

                ## Milestones
                1. Six standing questions written: people, phones, kit, medicines, money and the house.
                2. Calls held each quarter, with answers noted in one place.
                3. Any change fed into the contact tree, kit list or medicine list within a week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four readiness calls a year are logged with answers to the same six questions and every change is copied into the plan within a week."
                cadence: rolling
              tasks:
                - "Write the six questions you will ask on each readiness call"
                - "Hold the readiness call and note the answers in the family file @recurring(quarterly)"
                - "Copy anything that changed into the contact tree, kit list or medicine list"
                - "Tell the siblings what changed and what needs paying for"
            - name: Generator and backup power upkeep
              description: |-
                ## Purpose
                A generator that has not been started since last season often refuses on the one night it is needed, and fuel left in the tank goes stale. Running it monthly, servicing it before June and storing fuel safely keeps the fridge, fans, phone chargers and any medical equipment going while the grid is down, sometimes for weeks.

                ## Milestones
                1. The generator or battery system run under load once a month.
                2. A service done before June, with oil, plug and filters changed.
                3. Fuel stored safely outside the house and the household shown how to refuel.
                4. The household clear that the generator runs outdoors, away from windows and doors.

                ## Notes
                Generator fumes kill people in the days after storms every year. A generator must never run indoors, in a garage, on a closed porch or under an open window.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The generator starts on every monthly test, has a pre-season service record, and a carbon monoxide alarm is fitted near the bedrooms."
                cadence: rolling
              tasks:
                - "Ask the household to run the generator for fifteen minutes under load @recurring(monthly:16)"
                - "Book a generator service with a local mechanic before June @recurring(yearly)"
                - "Send a carbon monoxide alarm for the bedroom area"
                - "Agree where fuel is stored and who refills it during a hurricane watch"
            - name: Water storage and tank upkeep
              description: |-
                ## Purpose
                Piped water is often one of the last services back after a storm, and in the Grenadines, Barbuda or rural Jamaica many households already rely on a tank or cistern. A clean, covered tank, spare food-grade containers and a filter or purification tablets mean drinking water without queuing for a truck.

                ## Milestones
                1. The water tank or cistern cleaned, with its cover and gutters checked.
                2. Spare food-grade containers for drinking water kept in the house.
                3. A filter or purification tablets stored with their instructions.
                4. The household agreed to fill containers once a hurricane watch is posted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tank is cleaned and covered before each season and the house holds spare drinking water containers and a working filter or tablets."
                cadence: cyclic
              tasks:
                - "Ask when the water tank was last cleaned and who did it"
                - "Pay for the tank and gutters to be cleaned before the season @recurring(yearly)"
                - "Send a water filter or purification tablets with the next traveller or barrel"
                - "Add filling containers to the one-day point of the storm countdown"
            - name: Home insurance renewal before each season
              description: |-
                ## Purpose
                Insurers in the region often stop issuing or changing windstorm cover once a named storm is nearby, so a policy that lapses in August may not be fixable in time. Renewing before June, with the sum insured checked against today's rebuilding costs, means the cover is in force when it counts.

                ## Milestones
                1. The renewal date and premium for each family home recorded.
                2. The sum insured compared with a recent builder's estimate of rebuilding costs.
                3. The windstorm deductible written as an amount of money beside the policy.
                4. The renewal paid and the new schedule saved in the shared folder before June.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every family home's policy is renewed before June each year, with the new schedule saved and the deductible noted in money terms."
                cadence: cyclic
              tasks:
                - "Find the renewal date on each household's current policy schedule"
                - "Ask the broker whether the sum insured still matches rebuilding costs @recurring(yearly)"
                - "Pay the renewal and save the new schedule to the shared folder"
                - "Write the windstorm deductible in money terms beside the policy"
            - name: Yard, trees and drains kept storm-ready
              description: |-
                ## Purpose
                Breadfruit, mango and coconut trees that shade the house in March become battering rams in a hurricane, and a blocked drain can flood a yard that has never flooded before. Paying someone local to trim branches over the roof, clear the drains and tie down or move old drums and loose sheeting stops the yard causing the damage.

                ## Milestones
                1. Branches over the roof or near power lines identified on a video walk.
                2. A local yard worker or tree cutter agreed with a price and a schedule.
                3. Drains and the nearest gully cleared before the August peak.
                4. Loose items such as drums, old roofing and garden furniture listed for tying down or moving in.

                ## Notes
                Branches touching power lines are a job for the electricity company or a trained crew, not a cousin with a cutlass.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Overhanging branches are cut before each season and the drains are cleared every quarter by a paid local worker."
                cadence: rolling
              tasks:
                - "Ask for a video walk round the yard looking up at the trees"
                - "Agree a price with a local tree cutter for branches over the roof"
                - "Pay for the drains and yard to be cleared @recurring(quarterly)"
                - "List the loose items that must be tied down or moved in before a storm"
            - name: End-of-season review each December
              description: |-
                ## Purpose
                Whether the season brought a direct hit, a near miss or nothing at all, December is the quiet month to ask what worked. A short review with the household and the siblings, covering money spent, calls missed and repairs still open, makes next year's plan better than this one.

                ## Milestones
                1. Notes collected from the household and each sibling on what went well and badly.
                2. Spending from the storm fund totalled and the balance checked against the target.
                3. Open repairs and missing kit items listed, each with an owner.
                4. The family plan updated and dated for next season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated review note lists what changes for next season, with every open repair and kit gap assigned to a named person."
                cadence: cyclic
              tasks:
                - "Ask each sibling for two things that worked and two that did not"
                - "Total what the storm fund paid out this season"
                - "Hold the end-of-season review call with the family @recurring(yearly)"
                - "Update the plan, contact tree and kit list with the agreed changes"
            - name: Retainer with a trusted local handyman
              description: |-
                ## Purpose
                In the two days before a storm every handyman on the island is booked, and afterwards the good ones are fixing their own houses first. Agreeing ahead with one trusted person, for a small yearly payment, to put up the shutters, tie down what is loose and come by first after the storm gives your family someone who will actually turn up.

                ## Milestones
                1. A handyman recommended by two people you trust, met in person or by video.
                2. A written list of what they do before and after a storm, with prices.
                3. A yearly retainer or deposit agreed and paid by a traceable method.
                4. Their numbers in the contact tree and the household's phone.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A named handyman has a written list of pre-storm and post-storm jobs with prices and a paid retainer for the current season."
                cadence: cyclic
              tasks:
                - "Ask the church, neighbours or relatives for two names of reliable handymen"
                - "Agree in writing the pre-storm and post-storm jobs and the price for each"
                - "Pay the season's retainer by bank transfer or another receipted method @recurring(yearly)"
                - "Add the handyman to the contact tree and the household's phone"
            - name: Reading hurricane forecasts and the cone
              description: |-
                ## Purpose
                Most people read the forecast cone as the size of the storm, when it only shows where the centre might track, and damaging wind and rain often reach well outside it. Learning to read an official advisory, the difference between a watch and a warning, wind categories, storm surge and rainfall flooding, lets you judge when to push the family to act and when to stay calm.

                ## Milestones
                1. The forecast cone, watch, warning and category scale explained in your own words.
                2. Storm surge and rainfall flooding understood as separate threats from wind.
                3. One past storm's official advisories followed from first to last.
                4. A one-page cheat sheet saved and shared with the family.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-language guide to forecasts, watches, warnings and surge is written and shared in the family group."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read an official hurricane centre explainer on the forecast cone"
                - "Follow the archived advisories of one past storm that hit the region"
                - "Write a one-page cheat sheet in plain language for the family"
                - "Share the cheat sheet in the family group before the season"
            - name: How disaster management works back home
              description: |-
                ## Purpose
                Each country has its own disaster office, such as ODPEM in Jamaica, NEMA in the Bahamas or the Department of Emergency Management in Barbados, with CDEMA coordinating across much of the region. Knowing who issues evacuation orders, how shelters open, who announces curfews and how relief is handed out tells you which announcements to trust and where your family should go.

                ## Milestones
                1. The disaster office, met service and local government body for each island named in your notes.
                2. How shelters open, how evacuation orders are given and where relief is announced understood.
                3. The local councillor, parish or district office for each household found.
                4. A short note on what the family should expect in the first week after a storm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each island names its disaster office, how evacuation orders are given and the local office for each household."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the national disaster office website for each island your family is on"
                - "Read its public hurricane guide and note who gives evacuation orders"
                - "Find the local councillor or district office for each household"
                - "Write a short note on how relief is usually handed out after a storm"
            - name: Understanding windstorm cover in a home policy
              description: |-
                ## Purpose
                A family that believes it is fully insured can find after the storm that the windstorm deductible is a percentage of the sum insured, that flood or landslide is excluded, or that the payout is cut because the house was underinsured. Reading the policy wording once, with questions written down for the broker, turns small print into numbers you can plan around.

                ## Milestones
                1. The full policy wording read and the windstorm, flood and landslide sections marked.
                2. The deductible worked out in money for a realistic roof claim.
                3. Any underinsurance or average clause understood with a worked example.
                4. The broker's written answers to your questions saved with the policy.

                ## Notes
                This is about understanding the policy you have, not choosing a new one. Ask the broker or insurer to confirm anything unclear in writing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The policy's windstorm deductible, flood terms and any underinsurance clause are written in plain words with the broker's written answers attached."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the broker for the full policy wording, not just the schedule"
                - "Mark every clause about windstorm, flood, landslide and the deductible"
                - "Ask the agent to list the plain questions this wording raises"
                - "Send the questions to the broker and save the written replies"
            - name: Storm-proofing basics for a Caribbean house
              description: |-
                ## Purpose
                Plenty of advice passed around family chats is wrong, such as taping windows, which does not stop glass breaking, or opening windows to let pressure out. Learning what actually holds a house together, a roof tied down to the walls, protected openings and strong doors, helps you spend repair money where it matters.

                ## Milestones
                1. The path from roof to walls to foundation understood in plain terms.
                2. Common myths, such as taping windows, written down with why they fail.
                3. The family house's weak points listed against what you learned.
                4. Two questions prepared for a builder about those weak points.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of the family house's weak points, checked against a building authority guide, with questions ready for a builder."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a building authority or disaster office guide to storm-proofing homes"
                - "Compare how the guide ties roofs down with how the family roof is fixed"
                - "List the myths the family believes with the correct advice beside each"
                - "Ask a local builder which weak point they would fix first"
            - name: Health and safety risks after a storm
              description: |-
                ## Purpose
                Many injuries around a hurricane happen in the clean-up rather than the storm itself: falls from roofs, chainsaw cuts, shocks from fallen lines, generator fumes, and illness from floodwater and mosquitoes. Knowing these risks and having short messages ready lets you say the right thing on the phone when everyone is tired and in a hurry.

                ## Milestones
                1. The main after-storm risks listed from a public health source: water, food, electricity, fumes, injuries and mosquitoes.
                2. A short plain message on each risk written for the family.
                3. Signs that mean someone needs a clinic noted from the health ministry's advice.
                4. The household's first aid kit and tetanus status checked.

                ## Notes
                Use the health ministry's or a public health agency's guidance. This prepares you to pass their advice on; it does not replace a clinician.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Short health and safety messages based on official guidance are saved, ready to send, and the household's tetanus status is known."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the health ministry's guidance on staying safe after hurricanes and floods"
                - "Write a short plain message on each risk for the family group"
                - "Ask the household when each adult last had a tetanus jab"
                - "Save the messages to send in the first days after a storm"
            - name: Spotting relief scams and fake fundraisers
              description: |-
                ## Purpose
                Every big storm brings fake fundraising pages, callers posing as relief agencies, contractors who take a deposit and vanish, and messages from a 'cousin' on a new number asking for an urgent transfer. Knowing the usual patterns protects your money and your family's at the moment everyone is most willing to give.

                ## Milestones
                1. The common post-storm scams listed with how each one usually works.
                2. A rule agreed with siblings that urgent money requests are confirmed by a voice call.
                3. Any charity you plan to give to checked on its country's charity register.
                4. A warning message sent to older relatives back home.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A voice-call rule for urgent money requests is agreed in the family group and older relatives have received a scam warning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a fraud or consumer agency warning about scams after disasters"
                - "Agree with siblings that urgent money requests get a voice call first"
                - "Check that a charity you might give to is on its country's register"
                - "Send older relatives a short warning about fake relief callers"
            - name: Listening support for family after a storm
              description: |-
                ## Purpose
                People who have lived through a hurricane often seem fine for a week and then cannot sleep, jump at every gust or snap at the children, and a voice from abroad can help or hurt. Learning the basics of psychological first aid, listening without pushing and linking people to practical help, gives you a better way to talk with a frightened mother or a teenage cousin.

                ## Milestones
                1. A free psychological first aid course or guide completed.
                2. Three things to say and three to avoid written down.
                3. The counselling services or helplines on each island listed.
                4. Signs that someone needs professional support noted.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A psychological first aid course is completed and a list of helplines for each island is saved with the family plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a free online psychological first aid course from a relief organisation"
                - "Complete the course in short sessions over two weeks"
                - "Write three helpful phrases and three to avoid after a storm"
                - "List the counselling services or helplines on each island"
            - name: Choosing a satellite messenger for the family home
              description: |-
                ## Purpose
                When the towers are down, a small satellite messenger or a phone with satellite texting can send a short 'we are fine' from a yard with no signal. Choosing a device and plan the household will actually use, and testing it before the season, costs a few hundred dollars against days of not knowing.

                ## Milestones
                1. Two or three satellite options compared on cost, subscription, coverage and ease of use.
                2. Coverage over your family's island confirmed with each provider.
                3. One option chosen, bought and sent home with the plan active.
                4. A test message sent from the house and received abroad.

                ## Notes
                Start from the **Purchase decision** template. Check the device is allowed into the country and whether customs duty applies before sending it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A satellite device or service is chosen, active and has sent a test message from the house that was received abroad."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what the household needs: texts only, location sharing or calls"
                - "Compare two or three satellite messengers or satellite-capable phones"
                - "Confirm with each provider that the island is covered"
                - "Send the chosen device home with the next traveller"
                - "Send a test message from the yard before the season @recurring(yearly)"
            - name: Choosing a generator or solar battery backup
              description: |-
                ## Purpose
                A petrol or diesel generator is cheaper to buy, while a solar panel and battery system is quiet, has no fumes and needs no fuel queue after the storm, but costs more up front. Comparing the two against what the household really needs to power, such as a fridge, fans, lights, phones or an oxygen concentrator, leads to a decision rather than a rushed purchase in August.

                ## Milestones
                1. A list of what must be powered and for roughly how many hours a day.
                2. Quotes for a suitable generator and for a solar and battery set-up from local suppliers.
                3. Running costs, upkeep and safety compared side by side.
                4. A decision recorded and installation booked with a licensed electrician.

                ## Notes
                Start from the **Purchase decision** template. Any connection to the house wiring needs a licensed electrician and a proper transfer switch, so power cannot feed back into the lines and hurt line workers.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Quotes for both options are compared in writing and a backup power choice is recorded with an installation date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the appliances and equipment the household must keep running"
                - "Get a quote for a generator sized for that list"
                - "Get a quote for a solar panel and battery set-up from a local installer"
                - "Compare fuel, upkeep and safety and record the decision"
            - name: Hurricane shutters or impact windows decision
              description: |-
                ## Purpose
                Broken windows let wind into the house, and once it is inside it can lift the roof from below. Choosing between pre-cut plywood, storm panels, accordion or roll-down shutters and impact glass depends on budget, who will put them up and whether an older relative could manage them alone.

                ## Milestones
                1. Every window and door opening measured and photographed.
                2. Quotes for at least two protection options from local suppliers.
                3. Who fits the protection before each storm, and how long it takes, agreed.
                4. The chosen option installed, or plywood cut, labelled and stored.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every opening has a chosen form of storm protection in place or labelled in storage, with a named person to fit it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a relative to measure and photograph every window and door"
                - "Get quotes for shutters and for pre-cut plywood panels"
                - "Decide who will put the protection up before each storm"
                - "Label each plywood panel with the window it fits"
            - name: Roof straps and fixings upgrade
              description: |-
                ## Purpose
                Losing the roof is the most common way a hurricane ruins a Caribbean house, and many older roofs were nailed on rather than strapped to the walls. Paying a qualified builder to check and fit hurricane straps or clips, with screws in place of nails, is one of the most valuable repairs a family can fund.

                ## Milestones
                1. A builder or engineer's inspection of how the roof is fixed to the walls.
                2. A written quote listing straps, clips, screws and labour.
                3. Work completed, with photos of the straps before the ceiling is closed.
                4. Receipts and photos sent to the insurer or broker.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The roof is strapped or clipped to the walls by a qualified builder, with photos and receipts saved and sent to the insurer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a builder or engineer to inspect how the roof is tied to the walls"
                - "Get a written quote listing straps, clips, screws and labour"
                - "Ask for photos of the straps before the ceiling is closed up"
                - "Send the photos and receipts to the insurer or broker"
            - name: Flood-proofing the ground floor
              description: |-
                ## Purpose
                For households in Georgetown, coastal Belize, low parts of Port of Spain or beside a gully anywhere, rain and surge flooding can do more harm than wind. Raising sockets and the water heater, sealing low openings, keeping sandbags or flood barriers and moving valuables up off the floor limits what a single night of floodwater destroys.

                ## Milestones
                1. The highest past flood level at the house marked or estimated.
                2. Electrics, appliances and papers below that level listed.
                3. The most important changes priced with a licensed electrician or builder.
                4. Sandbags or barriers and a plan for moving valuables up in place.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Sockets and appliances below the past flood line are raised or listed for work, and sandbags or barriers are stored at the house."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the household how high water has come in the house or yard before"
                - "List the sockets, appliances and papers below that level"
                - "Get a quote from a licensed electrician to raise the lowest sockets"
                - "Arrange sandbags or barriers to be stored near the door"
            - name: Emergency money routes when banks are down
              description: |-
                ## Purpose
                Banks and cash machines can stay shut for days after a direct hit, card machines need power and signal, and the household needs cash in hand. Knowing which transfer services pay out cash in the family's town, where the nearest agents are and who could collect on the family's behalf means help arrives the week it is needed.

                ## Milestones
                1. Two or three ways of getting cash to the household compared, including a cash pickup service.
                2. The nearest agent locations noted for each household.
                3. A trusted local person named who could collect money if the household cannot.
                4. A small cash reserve agreed for the house before the August peak.

                ## Notes
                Check the collector's ID matches the name on the transfer exactly; small spelling differences get transfers refused at the counter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two tested routes for getting cash to each household after a storm are written in the family plan, with a named backup collector."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the cash pickup services that operate in the family's town"
                - "Note the nearest two agent locations for each household"
                - "Name a trusted person who could collect money if the household cannot"
                - "Ask the household to keep a small cash reserve in the document pouch"
            - name: Photo and video inventory of the house and contents
              description: |-
                ## Purpose
                Insurers and relief schemes ask for proof of what was there, and memory is poor after a disaster. A narrated video of every room, close-ups of the roof, appliances and furniture with model numbers, and whatever receipts exist, takes an afternoon and makes any claim faster and harder to dispute.

                ## Milestones
                1. A narrated video of every room, the roof, the yard and any outbuildings.
                2. Photos of appliance labels and serial numbers.
                3. Receipts for larger items gathered where they exist.
                4. All files saved in the shared folder abroad with the date in the name.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated video and photo inventory of the house and its main contents is saved in the shared folder abroad."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send the household a short shot list for the inventory video"
                - "Ask a relative to film every room on a calm, bright day"
                - "Save the files in the shared folder with the date in the name"
                - "Ask for a fresh video after any major purchase or repair @recurring(yearly)"
            - name: Parametric storm cover for a relative's livelihood
              description: |-
                ## Purpose
                For a relative who fishes, farms, sells in the market or runs a small shop, a storm can take the income as well as the roof. Some Caribbean countries offer small parametric policies that pay out automatically when measured wind or rainfall passes a set level, without waiting for a loss adjuster, so finding out whether one is sold where your family lives is worth an afternoon.

                ## Milestones
                1. Whether a parametric or micro-insurance product is sold where your relative lives confirmed.
                2. The trigger, payout and premium written in plain words.
                3. The product compared with what an ordinary claim would cover.
                4. A decision recorded with your relative, whether or not they buy it.

                ## Notes
                A parametric payout depends on the measured storm, not your relative's actual loss, so it can pay when damage is light and pay nothing when a weaker storm still does harm. Ask the seller to explain both cases.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note records whether parametric cover is available locally, its trigger and premium, and the decision made with your relative."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a local insurer or credit union whether parametric storm cover is sold"
                - "Write down what triggers a payout and how much it pays"
                - "Talk the option through with your relative against their household budget"
                - "Record the decision and the renewal date if the policy is bought"
            - name: First 72 hours after landfall
              description: |-
                ## Purpose
                The three days after a storm passes are when the family abroad is most useful and most likely to get in the way. A plan for those days, confirming everyone is safe, getting a short damage report, releasing the storm fund, sending the handyman and passing on safety messages, lets you act fast without flooding the household with calls.

                ## Milestones
                1. Contact made with every household, or the missing-contact steps started.
                2. A short damage report with photos from each household, taken once it is safe to go outside.
                3. Money released from the storm fund for immediate needs.
                4. A tarpaulin, water and urgent repairs arranged through the handyman or a neighbour.
                5. One coordinator update posted each day in the family group.

                ## Notes
                Wait for the official all-clear before anyone goes outside. The calm eye of a storm can feel like the end of it.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within 72 hours of landfall every household is accounted for, fund money is released and a daily update has been posted each day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pin the first 72 hours plan at the top of the family group"
                - "Ask each household for a safety check and roof photos once the all-clear is given"
                - "Release money from the storm fund for food, water and a tarpaulin"
                - "Call the handyman to cover the roof and secure the openings"
                - "Post a single coordinator update in the family group each evening"
            - name: Relief barrel after a storm
              description: |-
                ## Purpose
                Tarpaulins, solar lamps, water filters, chainsaw chains and tinned food often sell out locally or jump in price once a hurricane has passed. A relief barrel (the blue shipping drum families pack and send home) filled with what the household asks for, sent with a shipper that is actually sailing to the island, fills the gap the shops cannot.

                ## Milestones
                1. A packing list built from what the household says it needs, not guesses.
                2. A shipper confirmed as accepting cargo for the affected island, with a sailing date.
                3. Any temporary duty waiver on relief goods checked with the customs department.
                4. The barrel packed, declared and tracked to collection.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A relief barrel built from the household's own list is shipped, declared correctly and collected at the port."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the household for their ten most needed items for the next month"
                - "Check with customs whether relief items are duty free and for how long"
                - "Confirm the shipper is sailing to the island and when"
                - "Pack and declare the barrel, keeping the inventory and receipt"
            - name: Filing an insurance claim after storm damage
              description: |-
                ## Purpose
                After a regional storm, insurers and loss adjusters are swamped, and claims reported late or with thin evidence wait longest. Reporting the loss quickly, sending the inventory and damage photos together, keeping every receipt for emergency repairs and logging each conversation gives your family the best chance of a fair and timely settlement.

                ## Milestones
                1. The claim reported within the time the policy requires, with a claim number noted.
                2. Damage photos, the pre-storm inventory and emergency repair receipts sent together.
                3. The adjuster's visit attended by a relative, with notes taken.
                4. Every call, email and visit logged with date, name and what was said.
                5. The settlement offer checked against the builder's quotes before accepting.

                ## Notes
                Ask the insurer before starting permanent repairs. Emergency work to stop further damage, such as a tarpaulin, is usually expected, but keep the receipts and photos.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A claim with a reference number is filed with full evidence, every contact is logged and the settlement is compared with written quotes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Report the damage to the insurer or broker and note the claim number"
                - "Send the damage photos, pre-storm inventory and repair receipts together"
                - "Keep a log of every call, email and visit about the claim"
                - "Compare the settlement offer with the builder's quotes before accepting"
            - name: Trip home to help after a storm
              description: |-
                ## Purpose
                Once the airport reopens, a week at home with tools and cash can do more than a month of phone calls, but only if the trip is planned around where you will sleep, what you will carry and who on the ground needs you most. Planning flights, luggage and a bed that does not depend on the damaged house, plus a clear list of jobs, makes the visit count.

                ## Milestones
                1. Airport status, flights and any entry notices for the affected island confirmed.
                2. Somewhere to stay arranged that does not rely on the damaged house.
                3. Luggage used for the tools, lamps and supplies the household asked for.
                4. A list of jobs for the visit agreed with the household before you fly.

                ## Notes
                Start from the **Trip** template. If the island asks visitors to wait, wait; arriving too early can strain water, food and transport for the people living there.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip home is completed with accommodation outside the damaged house and the agreed list of jobs done or handed to a named local person."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Check the airport and airline status for the affected island"
                - "Agree the jobs for the visit with the household and your siblings"
                - "Book a bed that does not depend on the damaged house"
                - "Pack the tools and supplies the household asked for within the baggage allowance"
            - name: Managing storm repairs from abroad
              description: |-
                ## Purpose
                Rebuilding is where families lose the most money from a distance: builders juggling ten jobs, materials prices rising week by week and deposits paid for work never done. Written quotes, payments in stages against photos, materials bought directly where possible and every receipt kept keep the repair moving and the money accounted for.

                ## Milestones
                1. A written list of repairs agreed with the household, in order of urgency.
                2. At least two written quotes from builders recommended by people you trust.
                3. A payment schedule tied to stages, with photos before each payment.
                4. A shared sheet of every payment and receipt for the siblings.
                5. The finished work checked by a relative and photographed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Repairs are finished against a written quote, with every staged payment matched to photos and a receipt in the shared sheet."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the list of repairs with the household in order of urgency"
                - "Get two written quotes from recommended builders"
                - "Agree staged payments released only against photos of finished work"
                - "Log every payment and receipt in a shared sheet for the siblings"
            - name: Applying for government and agency relief
              description: |-
                ## Purpose
                Governments, credit unions and relief agencies often open grants, building material vouchers or loan payment breaks in the weeks after a storm, with short deadlines and specific paperwork. Watching the announcements, helping the household gather documents and keeping copies of every form means your family does not miss help it qualifies for.

                ## Milestones
                1. Announcements from the government, disaster office and local agencies tracked for the affected island.
                2. The household's eligibility for each scheme noted.
                3. Applications completed with copies of IDs, proof of address and damage photos.
                4. Reference numbers and follow-up dates recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every relief scheme the household is eligible for has an application filed, with reference numbers and follow-up dates recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Follow the government and disaster office channels for relief announcements"
                - "Ask the household's bank or credit union about loan payment breaks"
                - "Help the household gather IDs, proof of address and damage photos"
                - "Record each application's reference number and follow-up date"
            - name: Storm plan for a parent living alone
              description: |-
                ## Purpose
                An older parent living alone is the person most likely to stay in a house that is not safe, refuse the shelter or be unable to put up the shutters. A plan made with them, naming who comes before the storm, where they will be during it and who knocks the morning after, respects their say while making sure they are not alone when it hits.

                ## Milestones
                1. A conversation held with your parent about where they want to be during a storm.
                2. A named person who will stay with them or collect them before landfall.
                3. Shutters, supplies and medicines handled by someone local, not left to your parent.
                4. A neighbour agreed to check on them at first light after the storm.

                ## Notes
                Many older people refuse to leave home. Plan for both answers: help to stay as safely as possible if they insist, and a respected relative, pastor or pundit to talk with them when the risk is high.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Your parent has agreed where they will be in a storm, who will be with them and which neighbour checks on them afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your parent where they would want to be if a strong storm came"
                - "Name who will stay with them or collect them before landfall"
                - "Arrange a neighbour to check on them at first light after the storm"
                - "Agree who puts up the shutters and brings in the supplies"
            - name: Storm plan for a relative with complex care needs
              description: |-
                ## Purpose
                Someone on dialysis, home oxygen, a hospital bed or insulin cannot simply sit out three days without power or transport. Working out with their clinic and carers where treatment happens before and after a storm, how equipment is powered and whether they should register for assisted evacuation protects the most vulnerable person in the family.

                ## Milestones
                1. The relative's dialysis unit, clinic or carer asked about their storm schedule.
                2. A plan for powering any equipment, such as a backup battery or a place with a generator.
                3. Registration on any local list of people needing help to evacuate, where one exists.
                4. A carer and a backup carer named for the days around landfall.

                ## Notes
                Agree the medical side with the relative's own clinicians. This plan organises their advice, transport and power; it does not replace it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A written storm plan covers treatment dates, equipment power, transport and two named carers, checked with the relative's clinic."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the dialysis unit or clinic what happens to appointments before a storm"
                - "Find out whether the island keeps a register of people needing help to evacuate"
                - "Arrange backup power or a place with a generator for the equipment"
                - "Name a carer and a backup carer for the days around landfall"
            - name: Helping children back home through a storm
              description: |-
                ## Purpose
                Nieces, nephews and grandchildren back home may lose weeks of school, sleep in a shelter and hear adults panicking. A small comfort kit with a torch, books and games, regular short video calls and help for parents getting them back into a routine make the storm less frightening for them.

                ## Milestones
                1. A comfort kit for each child: torch, books, cards and a favourite treat.
                2. Short video calls with each child in the weeks after a storm.
                3. News of school reopening or temporary classes passed to the parents.
                4. Any distress lasting more than a few weeks raised gently with the parents.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each child back home has a comfort kit before the peak and has had at least three video calls in the month after a storm."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the parents what each child would like in a storm comfort kit"
                - "Send the kits before the August peak"
                - "Book short video calls with the children in the weeks after a storm"
                - "Pass on news about school reopening and temporary classes"
            - name: When you cannot reach family after a storm
              description: |-
                ## Purpose
                Silence is the hardest part, and a day or two without contact is common when networks are down, not a sign of the worst. Having the steps written down, from neighbours and local radio to the Red Cross family tracing service and your consulate, keeps you working through a list rather than spiralling at three in the morning.

                ## Milestones
                1. A written list of steps in order, with the length of silence that triggers each one.
                2. Neighbours, church and local contacts placed first on the list.
                3. Local radio, the disaster office and community social media groups for the area noted.
                4. The Red Cross family tracing service and the relevant consulate added with how to reach them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written missing-contact procedure with silence triggers, local contacts, family tracing details and consulate numbers is saved in the family plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the steps you will take if a household goes silent after a storm"
                - "Add the Red Cross family tracing service and how to register a request"
                - "Find the local radio station that reads out family messages after storms"
                - "Note your consulate or high commission's emergency number for the island"
            - name: Relative staying with you after a storm
              description: |-
                ## Purpose
                Sometimes the right answer after a destroyed house is for a parent or child to come and stay abroad for a few months while home is rebuilt. Checking entry rules and any temporary measures, health cover, schooling and space at home before you offer, and talking through the likely length of the stay, stops a kind offer becoming a crisis of its own.

                ## Milestones
                1. The relative's passport and visa position checked with official sources for your country.
                2. Any temporary arrangements for people affected by the disaster checked on the official immigration site.
                3. Health cover, schooling and space at home sorted before travel.
                4. A likely length of stay and a return plan talked through with everyone involved.

                ## Notes
                Immigration rules can change after big disasters and differ by country. Use official government sources or a regulated adviser, not social media posts.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A decision on hosting is recorded with the relative's visa route confirmed from an official source and health cover arranged."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check whether the relative's passport is valid and what visa they need"
                - "Look on the official immigration site for any disaster-related measures"
                - "Price travel health cover for the length of the stay"
                - "Talk with your own household about space, costs and how long it might last"
            - name: Saying yes and no to storm requests from wider family
              description: |-
                ## Purpose
                Once a storm has passed, the person abroad becomes everyone's bank: cousins, godchildren, old neighbours and church members all ask, and saying yes to everyone empties the fund before your own parents' roof is fixed. Deciding in calm weather who you help first, how much and in what form lets you be generous without guilt or resentment.

                ## Milestones
                1. A first circle of people you will help written down.
                2. A budget for wider family and friends set apart from the household storm fund.
                3. A kind, short reply drafted for requests you cannot meet.
                4. Help in kind, such as space in a barrel or phone credit, listed as an option when money is short.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written first circle, a separate amount for wider family and a ready reply for refused requests are agreed with your own household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down who you will help first after a storm and why"
                - "Set a separate amount for requests from wider family and friends"
                - "Draft a kind, short reply for requests you cannot meet"
                - "Agree with your partner or household abroad how the amount is shared"
            - name: Looking after yourself during a storm from afar
              description: |-
                ## Purpose
                Watching a hurricane track toward your parents' island from a flat in Leeds or Queens, unable to do anything for three nights, is its own kind of strain, and carers abroad often go to work on no sleep. A plan for those nights, with set times for checking the forecast, someone to sit with you and leave arranged at work, keeps you fit for the weeks of recovery that follow.

                ## Milestones
                1. Set times for checking official forecasts, with news and group chats muted in between.
                2. A friend or partner who knows to check on you when a storm is heading home.
                3. Your manager told in advance that you may need leave if family is hit.
                4. One small thing each day that is just for you written into the storm countdown.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your manager knows you may need storm leave, a friend has agreed to check on you, and two forecast times a day are set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell your manager in calm weather that you may need leave after a storm"
                - "Pick two set times a day for checking the official forecast"
                - "Ask a friend to check on you when a storm is heading for home"
                - "Mute storm chatter in group chats outside your set times"
            - name: Rebuilding stronger after a destroyed roof or house
              description: |-
                ## Purpose
                Rebuilding a lost roof or house is a chance to build for the next storm instead of repeating the old weaknesses. A qualified engineer or architect who follows the current building code, a hip roof, stronger connections, protected openings and raised floors in flood areas usually costs more up front and less over the life of the house.

                ## Milestones
                1. A qualified engineer or architect engaged who knows the local building code.
                2. Choices for roof shape, connections, openings and floor level recorded with reasons.
                3. Plans approved by the local planning or building authority.
                4. Key stages inspected by the engineer, with photos saved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The rebuild follows approved plans from a qualified professional, with engineer inspections photographed at the roof and foundation stages."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the building authority for the current code or hurricane building guidance"
                - "Find an engineer or architect through the local professional association"
                - "Agree the roof shape, fixings and floor level with them in writing"
                - "Book the engineer to inspect at the foundation and roof stages"
            - name: Relief collection among relatives and friends abroad
              description: |-
                ## Purpose
                When a storm hits a whole district, friends and colleagues abroad often want to help your family and their neighbours, and money passed around informally causes arguments later. A small, transparent collection, with a named treasurer, a separate account, a clear purpose and receipts posted back, lets people give with confidence and keeps family relationships intact.

                ## Milestones
                1. A clear purpose for the collection, such as roofs for five houses on one street.
                2. A treasurer and a second checker named, with a separate pot or account.
                3. Every gift and every payment recorded and shared with donors.
                4. Photos and receipts of what the money bought sent to everyone who gave.

                ## Notes
                Check the rules on public fundraising in your country before advertising widely. For larger sums, working through a registered charity is often simpler.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A collection with a stated purpose has a full record of gifts and spending, and every donor has received receipts and photos."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write one sentence on what the collection is for and when it closes"
                - "Name a treasurer and a second person to check every payment"
                - "Open a separate pot or account for the collection"
                - "Ask the agent to draft a donor update listing receipts and totals"
                - "Post the running total and what it bought for every donor to see"
            - name: Five-year resilience plan for the family home
              description: |-
                ## Purpose
                Families who have been through two or three storms often move from fixing damage to planning a house that copes on its own: rainwater harvesting, solar with batteries, a strong inner room, a gas cooking ring and a stronger boundary wall. A five-year plan, priced and phased against the storm fund and family savings, turns one-off repairs into a house that needs less rescue each season.

                ## Milestones
                1. A list of resilience upgrades ranked by how much storm risk each removes.
                2. Rough local prices gathered for each upgrade.
                3. A five-year order agreed with the household and the siblings.
                4. The first upgrade completed and the plan reviewed each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked and priced five-year upgrade plan is agreed with the household and siblings, with the first upgrade finished."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the upgrades the household would value most after the last storm"
                - "Get rough local prices for each upgrade"
                - "Agree a five-year order of upgrades with the siblings"
                - "Review progress on the plan at the end-of-season call @recurring(yearly)"
---

# Hurricane Support for Family Back Home

Hurricane season from abroad means watching a forecast cone creep toward Kingston, Roseau or Nassau and wondering what you can do from a desk in London, New York or Toronto. This area gives the family abroad a plan for each household back home: foundations first (a risk snapshot, a contact tree, alerts, shelters, a storm fund and a waterproof document bag), then the yearly operating rhythm, the knowledge that makes you useful, decisions about shutters, power and cover, the days and weeks after landfall, situations for carers of an older or vulnerable relative, and finally rebuilding stronger.

What repeats is a May round of house, insurance, handyman and medicine checks, a quarterly readiness call, kit check and yard clearing, monthly storm fund contributions and generator runs, and a December review once the season closes. The Risk register, Savings goal, Meeting notes, Operational checklist, Purchase decision and Trip templates pair with the risk snapshot, storm fund, family plan call, supply kit, equipment choices and the trip home to help. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
