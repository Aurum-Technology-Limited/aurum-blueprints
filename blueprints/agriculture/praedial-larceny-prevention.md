---
id: agriculture.praedial-larceny-prevention
name: Praedial Larceny Prevention
description: "A farm that is harder to rob: a loss log and risk register, fences, lights and cameras that work, animals and tools marked, receipts for every sale, a watch group with neighbours and police reports that lead somewhere."
category: business
version: 1.0.0
tags: [agriculture, praedial-larceny-prevention, small-business, farm-security, crop-theft, livestock-theft, farm-watch, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - risk-register
    - purchase-decision
    - operational-checklist
    - meeting-notes
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Praedial Larceny Prevention
          description: "Protecting crops and livestock from theft: farm security, fencing and lighting, marking animals, receipts for sales, reporting and working with neighbours and police."
          projects:
            - name: Farm theft and loss log
              description: |-
                ## Purpose
                Most farmers who are robbed can say it happens all the time but cannot say how much, when or where, and that vagueness makes it hard to choose a fix or to get the police to act. A simple log of every theft, attempted theft and unexplained loss, with date, place, what went and its value, turns a sense of grievance into evidence and a pattern.

                ## Milestones
                1. A log set up with columns for date, field or pen, item, quantity, estimated value, signs of entry and whether it was reported.
                2. Every theft you can remember from the last twelve months entered, with values estimated at the price you would have sold for.
                3. A total yearly loss figure written at the top of the log.
                4. The months and places with the most losses circled.

                ## Notes
                Start from the **Metrics log** template. Count losses at farm-gate value, not retail, so the figure stands up when you quote it to a lender, an insurer or the police.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A loss log holding every known theft from the past year with values and a yearly total, kept where you can add to it the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up a loss log with date, place, item, quantity and value columns"
                - "Write down every theft you remember from the last twelve months"
                - "Ask family and workers what losses they noticed that you missed"
                - "Add up the yearly loss at farm-gate prices and note it at the top"
            - name: Security walk of the boundary and access points
              description: |-
                ## Purpose
                Few thieves come through the front gate; most use the ravine, the gap behind the water tank, the old cart track or the neighbour's abandoned lot. Walking the whole boundary once, slowly, with a map in hand, shows you every way in and out that a stranger could use with a sack or a vehicle.

                ## Milestones
                1. A sketch or printed satellite map of the farm with the full boundary walked and marked.
                2. Every gate, gap, footpath, ravine crossing and vehicle track onto the land marked on the map.
                3. Places where a vehicle can stop unseen beside a field or pen noted.
                4. The three weakest access points ranked and photographed.

                ## Notes
                Walk it at dusk as well as midday. What you can see from the road at night, and what you cannot, matters more than the daylight view.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A farm map showing every entry point and hidden stopping place, with the three weakest points ranked and photographed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Print a satellite image of the farm or sketch the boundary on one sheet"
                - "Walk the full boundary and mark every gap, path and track on the map"
                - "Note where a car or van could park unseen beside a field"
                - "Photograph and rank the three easiest ways onto the land"
            - name: Theft risk register by crop, animal and season
              description: |-
                ## Purpose
                Not everything on a farm is equally at risk: a ripe field of pumpkins by the road, goats before Christmas and a new pump by the river are worth more to a thief than a young cassava plot. Scoring each crop, animal group and piece of equipment for likelihood and consequence shows where a limited security budget will save the most.

                ## Milestones
                1. Every crop, animal group and major piece of equipment listed as a risk.
                2. Each risk scored for likelihood and consequence, using the loss log and the boundary map.
                3. The months of highest risk noted against each item, such as harvest weeks or holiday seasons.
                4. The five highest risks each given a planned control and an owner.

                ## Notes
                Start from the **Risk register** template. Revisit the scores whenever you plant a new crop or buy an expensive item, because the map of what is worth stealing changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A risk register scoring every crop, animal group and major asset, with the top five each assigned a control and an owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every crop, animal group and costly item on the farm"
                - "Score each one for likelihood and consequence of theft"
                - "Mark the months when each item is most at risk"
                - "Choose a control and an owner for each of the top five risks"
            - name: Photo and serial number record of farm assets
              description: |-
                ## Purpose
                Police can only return a stolen brushcutter, pump or battery if someone can prove it is yours, and a description like a red pump is useless. A file of photographs, serial numbers, receipts and distinguishing marks for every valuable item is the difference between a recovered asset and one that stays in a stranger's yard.

                ## Milestones
                1. Every item worth more than a set amount listed with make, model and serial number.
                2. Each item photographed, including any scratches, welds or marks that make it unique.
                3. Purchase receipts scanned or photographed and saved with the list.
                4. A copy of the record kept off the farm, in the cloud or with a relative.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A record of every asset above your chosen value with photo, serial number and receipt, with a copy stored away from the farm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a value above which every item goes on the asset record"
                - "Photograph each item and its serial plate in good light"
                - "Scan or photograph the purchase receipts you can find"
                - "Save a copy of the asset record in the cloud or with a relative"
                - "Add new purchases and remove sold items from the asset record @recurring(yearly)"
            - name: Farmer and livestock brand registration
              description: |-
                ## Purpose
                In many Caribbean countries a registered farmer gets faster help from the ministry and the police, and a registered brand or ear tag series is what proves a recovered cow or goat is yours. Getting your farmer identification, farm location and any livestock marks properly on record now saves an argument at the police station later.

                ## Milestones
                1. The registration schemes that apply to your farm confirmed with the ministry or extension office.
                2. Farmer registration or identification card current, with the farm location recorded correctly.
                3. A brand mark, tag series or other livestock identifier registered where your country offers it.
                4. Copies of every registration kept with the asset record.

                ## Notes
                Schemes and fees differ by country and change often. Ask the extension officer what is current rather than relying on what a neighbour did years ago.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Current farmer registration and any livestock mark registration held, with copies filed with the asset record."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office which farmer and livestock registrations apply"
                - "Gather the land documents and identification the registration asks for"
                - "Submit the farmer registration and any brand or tag application"
                - "Check the registrations are still current and renew any due @recurring(yearly)"
            - name: Police, ministry and neighbour contact sheet
              description: |-
                ## Purpose
                When you find the gate cut at six in the morning, you need the number of the police station that covers the farm, any praedial larceny unit, the agricultural officer and the three nearest neighbours, not a search through old messages. One laminated sheet in the house and a copy in every worker's phone makes the first call a quick one.

                ## Milestones
                1. The police station covering the farm and any rural or praedial larceny unit identified, with direct numbers.
                2. The local agricultural or extension officer's contact added.
                3. Neighbours on every side, and the nearest night watchman or caretaker, listed with permission.
                4. The sheet laminated in the house and shared to the phones of family and workers.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page contact sheet with police, ministry and neighbour numbers, posted in the house and saved on every regular worker's phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the direct number of the police station that covers the farm"
                - "Ask whether a rural or praedial larceny unit serves your district"
                - "Collect numbers from the neighbours on each side of the farm"
                - "Call every number on the contact sheet to check it still works @recurring(yearly)"
            - name: Receipt book for every farm sale
              description: |-
                ## Purpose
                Stolen produce and animals move through markets because buyers rarely ask where they came from, and a farmer who never gives receipts cannot show the difference between their sales and someone else's theft. Issuing a numbered receipt for every sale, and keeping the copy, protects your buyers at roadblocks and makes your own records believable.

                ## Milestones
                1. The official receipt or produce movement rules in your country checked with the ministry, if any apply.
                2. A numbered receipt book or receipt app in use, recording buyer, item, quantity, price and farm.
                3. Every regular buyer told that receipts now come with every load.
                4. Copies of all receipts filed by month.

                ## Notes
                Some countries, Jamaica among them, use official receipt books for produce and livestock sales. Where a scheme exists, use it, because police checks look for that book first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Numbered receipts issued for every sale for one full month, with copies filed and no sale left unrecorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the extension office whether an official receipt book scheme applies"
                - "Get a numbered receipt book or set up a receipt app"
                - "Tell each regular buyer that every load now comes with a receipt"
                - "File the receipt copies in a folder for each month"
            - name: Lockable store for tools, fuel and chemicals
              description: |-
                ## Purpose
                Brushcutters, knapsack sprayers, fuel and agrochemicals left in an open shed are among the easiest things to steal and the quickest to sell. A single store with a solid door, a good lock and nothing left outside overnight closes off the theft that costs least to prevent.

                ## Milestones
                1. One building or container chosen as the farm's lockable store.
                2. Door, hinges and window bars strong enough that the lock is not the weak point.
                3. A closed padlock or hasp lock fitted, with keys counted and named.
                4. A rule agreed that no tools, fuel or chemicals stay outside overnight.

                ## Notes
                A shipping container on blocks is a common, strong choice. Keep agrochemicals locked for safety reasons as well as theft, as the label and the law usually require.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One lockable store holds all tools, fuel and chemicals overnight, with door, hinges and lock all upgraded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose the building or container that will become the lockable store"
                - "Check the door, hinges and windows for weak points a thief would use"
                - "Fit a closed-shackle padlock and count the keys"
                - "Tell everyone on the farm that tools and fuel go inside each evening"
            - name: Yearly farm security budget
              description: |-
                ## Purpose
                Security spending usually happens in a panic after a big theft, which means the wrong items bought at the worst price. Setting a yearly budget against the loss figure from your log lets you spend in order of risk, and shows whether a camera, a dog or a night watchman actually pays back.

                ## Milestones
                1. Last year's total theft loss taken from the loss log.
                2. Current security spending listed, including fencing repairs, locks, lights and any watchman.
                3. A yearly security budget set as a share of expected sales or of the loss figure.
                4. Planned spending ranked against the top risks in the risk register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yearly security budget with spending ranked against the top five risks and compared with last year's loss figure."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy last year's total loss from the theft log"
                - "List what you already spend on fences, locks, lights and watchmen"
                - "Set a yearly security budget you can actually afford"
                - "Rank planned purchases against the top risks in the register"
            - name: Saturday perimeter and fence walk
              description: |-
                ## Purpose
                A cut strand of wire, a loosened post or a new footpath through the bush is often the first sign that someone is testing the farm. A short walk of the boundary every Saturday finds those signs while they are still warnings rather than losses.

                ## Milestones
                1. A fixed route for the weekly fence walk agreed, covering every weak point on the map.
                2. A short checklist of what to look for: cuts, gaps, footprints, new paths, tyre marks.
                3. Each walk's findings noted in a line, even when nothing was found.
                4. Repairs found on a walk completed within the same week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The boundary walked every Saturday for three months, with findings noted and repairs finished within the week."
                cadence: rolling
              tasks:
                - "Mark the fence walk route on the boundary map"
                - "Write a five-point checklist of signs to look for on the walk"
                - "Walk the boundary and note any cuts, paths or tyre marks @recurring(weekly:sat)"
                - "Fix any gap found on the walk before the following Saturday"
            - name: Pre-harvest crop count
              description: |-
                ## Purpose
                Pickers who are not yours tend to come the night before you do, and without a count you only suspect that bunches, pods or heads are disappearing. Counting what is ready in each block in the weeks before harvest tells you whether losses are real, where they start, and how much evidence you have when you report.

                ## Milestones
                1. A counting method for each main crop, such as bunches per row, marked trees or heads per bed.
                2. Counts taken for each block on a fixed day in the run-up to harvest.
                3. Differences between counts and what was harvested worked out per block.
                4. Unexplained gaps added to the loss log.

                ## Notes
                Marking sample trees or rows with paint and counting only those is faster than counting the whole field, and still shows a sudden drop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly counts for each block in the four weeks before harvest, compared with the harvest weight and any gap logged."
                cadence: cyclic
              tasks:
                - "Choose and paint-mark sample rows or trees in each block"
                - "Count ready fruit, bunches or heads on the marked rows @recurring(weekly:wed)"
                - "Compare the last count with what was actually harvested"
                - "Add any unexplained gap to the theft and loss log"
            - name: Evening livestock headcount
              description: |-
                ## Purpose
                Goats, sheep, pigs and cattle are stolen at night and often butchered before morning, so a missing animal noticed three days late is gone for good. Counting every animal at evening penning, and checking against the herd register monthly, means a theft is reported within hours while roadblocks and markets can still help.

                ## Milestones
                1. An up-to-date herd or flock register with each animal's tag, brand or description.
                2. A headcount taken every evening as animals are penned.
                3. A rule that any missing animal is searched for and reported the same night.
                4. A monthly check of the register against the animals on the ground.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An evening headcount logged on at least 25 days in each month and the herd register reconciled monthly."
                cadence: rolling
              tasks:
                - "Write the number of animals in each pen on a board at the pen door"
                - "Count animals into the pen at dusk and note the total @recurring(daily)"
                - "Check every tag or brand against the herd register @recurring(monthly:20)"
                - "Agree who searches and who calls the police if one is missing"
            - name: Monthly sales and receipt reconciliation
              description: |-
                ## Purpose
                Receipts only protect you if they match what left the farm, and workers or family selling on your behalf can drift into loose habits. Matching receipts against harvest records and cash once a month shows any gap between what was picked and what was paid for, whether the cause is a thief outside or a leak inside.

                ## Milestones
                1. Harvest or dispatch records for the month gathered in one place.
                2. Receipt copies totalled by crop or animal.
                3. Harvest totals compared with receipted sales and money received.
                4. Any gap investigated and its cause noted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Harvest records, receipts and money received reconciled each month, with every gap above a set amount explained in writing."
                cadence: rolling
              tasks:
                - "Gather the month's harvest records and receipt copies in one folder"
                - "Match harvest, receipts and cash and note any gap @recurring(monthly:28)"
                - "Ask whoever sold the load about any gap you cannot explain"
                - "Keep a running list of reconciliation gaps and their causes"
            - name: Night and weekend cover rota
              description: |-
                ## Purpose
                Thieves watch for the nights and weekends when nobody is on the farm, especially after harvest starts. A simple rota of who sleeps over, who drives by and who checks the pens on each night of the week leaves no regular gap that a watcher can learn.

                ## Milestones
                1. The nights and times of greatest risk identified from the loss log.
                2. Everyone who can share cover listed, including family, workers and paid watchmen.
                3. A weekly rota posted showing who covers each night and weekend.
                4. Drive-by and check times varied so they do not form a pattern.

                ## Notes
                A watchman's job is to see and call, not to fight. Agree that clearly and give them a charged phone and the contact sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rota covering every night and weekend posted each week for three months, with no regular gap left uncovered."
                cadence: rolling
              tasks:
                - "Mark the riskiest nights and hours using the loss log"
                - "List everyone who can take a night or a drive-by"
                - "Post next week's night and weekend cover rota @recurring(weekly:fri)"
                - "Vary drive-by times so no pattern can be learned"
            - name: Camera and security light maintenance round
              description: |-
                ## Purpose
                Cameras with dirty lenses, full memory cards or flat batteries, and solar lights with cracked panels, give a false sense of safety and nothing at all on the night it matters. A monthly round of every device keeps the system actually working.

                ## Milestones
                1. Every camera, light and alarm listed with its location and power source.
                2. A monthly round cleaning lenses and panels and checking each device works at night.
                3. Memory cards cleared or footage saved, and storage checked for space.
                4. Faulty devices repaired or replaced within two weeks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every security device checked monthly for six months, with faults fixed within two weeks and no camera out of action unnoticed."
                cadence: rolling
              tasks:
                - "List every camera, light and alarm with its location"
                - "Clean lenses and panels and test each device after dark @recurring(monthly:5)"
                - "Save any useful footage and clear full memory cards"
                - "Order replacements for any device that failed the test"
            - name: Monthly theft and loss review
              description: |-
                ## Purpose
                Individual thefts feel random, but over a few months they show patterns: the same field, the same moon phase, the week after payday, the night the watchman is off. A short monthly review of the loss log, fence walk notes and camera footage turns those patterns into the next change you make.

                ## Milestones
                1. The month's thefts, attempts and suspicious signs read through in one sitting.
                2. Any repeated time, place or method noted.
                3. One change to fencing, cover, harvest timing or reporting chosen for the coming month.
                4. Last month's change checked to see whether it made a difference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly review held for six months, each one recording a pattern found and one change made."
                cadence: rolling
              tasks:
                - "Read the month's loss log and fence walk notes together @recurring(monthly:3)"
                - "Write down any repeated time, place or method"
                - "Pick one security change to try this month"
                - "Ask the agent to summarise six months of the loss log into patterns"
            - name: Key and access register for the farm
              description: |-
                ## Purpose
                Old keys held by former workers, a gate code everyone in the village knows and a spare key under the water drum are a common route for thefts with no sign of forced entry. A register of who holds which key or code, with a habit of changing them when people leave, closes that door.

                ## Milestones
                1. Every lock, gate code and key on the farm listed.
                2. Each key holder named, with the date the key was given.
                3. Locks changed or rekeyed where keys are missing or held by people who left.
                4. A rule that keys are returned and codes changed whenever a worker leaves.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A key register listing every holder, checked each quarter, with locks or codes changed every time a key holder leaves."
                cadence: rolling
              tasks:
                - "List every lock, gate code and key holder on the farm"
                - "Rekey or replace any lock with a missing key"
                - "Check the key register against the people who still work here @recurring(quarterly)"
                - "Change gate codes on the day any worker leaves"
            - name: Neighbour farm watch group chat
              description: |-
                ## Purpose
                A vehicle seen at two in the morning on one farm is often heading to the next, and neighbours who message each other at once can turn on lights, call the police and watch the road. Running a group chat for the farms along your road with simple rules makes the whole area harder to rob.

                ## Milestones
                1. Farmers along the road or valley invited to a group chat, with an agreed purpose.
                2. Short rules written: alerts only, no rumours, no naming suspects, call police first.
                3. Police or the local agricultural officer invited where they are willing.
                4. A weekly check-in message that keeps members active between incidents.

                ## Notes
                Never post a person's name or photo as a suspect in the group. It can be defamatory, it puts people in danger, and it ruins the group's standing with the police.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A watch group with at least five neighbouring farms, written rules and a weekly check-in kept for three months."
                cadence: rolling
              tasks:
                - "Message five neighbouring farmers to propose a watch group chat"
                - "Write four short rules for alerts and pin them in the chat"
                - "Invite the local police station or agricultural officer to join"
                - "Post a short weekly check-in to the watch group @recurring(weekly:sun)"
            - name: How crop and livestock thieves operate
              description: |-
                ## Purpose
                Understanding the trade behind theft changes what you protect: some steal a sack for the pot, others reap whole fields to order for vendors, and organised groups move cattle by truck to backyard butchers. Learning which kind is hitting your district, from farmers, police and buyers, tells you whether to focus on fences, roads or markets.

                ## Milestones
                1. Three or four experienced farmers in the district asked how thefts usually happen.
                2. The local police or agricultural officer asked what patterns they see.
                3. The likely routes from your farm to a buyer for stolen goods noted.
                4. A short summary written of the type of theft most likely on your farm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on the main theft methods and outlets in your district, drawn from at least four conversations."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask three experienced local farmers how most thefts happen"
                - "Ask the police or agricultural officer which patterns they see"
                - "Note where stolen produce or meat is likely being sold"
                - "Write a one-page summary of the type of theft you face"
            - name: Knowing the praedial larceny law in your country
              description: |-
                ## Purpose
                Most Caribbean countries have laws on theft of produce and livestock, rules on who may buy and transport it, and sometimes receipt or dealer licence requirements, but few farmers have read them. Knowing the basics tells you what to ask of buyers, what evidence matters and what the police can do.

                ## Milestones
                1. The main law or laws covering produce and livestock theft in your country identified.
                2. Any receipt, dealer licence or movement permit rules noted in plain language.
                3. The rules on what a farmer may and may not do on finding a thief written down from an official source.
                4. Questions you still have listed for the extension officer, police or a lawyer.

                ## Notes
                This is for understanding, not legal advice. Ask a lawyer or the police for any decision that depends on what the law says in your situation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page plain-language note of the theft, receipt and dealer rules in your country, with sources named."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office for the name of the produce theft law"
                - "Find the official text or ministry guide for that law"
                - "Note the receipt, dealer and transport rules in plain words"
                - "Take remaining questions to the police or a lawyer"
            - name: Collecting evidence after a theft
              description: |-
                ## Purpose
                The first hour after a theft is when footprints, tyre marks, cut wire, dropped sacks and fresh stumps tell the story, and they are usually trampled by the time anyone thinks of them. Knowing what to photograph and what to leave untouched gives the police something to work with.

                ## Milestones
                1. A short list of evidence to look for: entry point, tracks, tools, waste, footage.
                2. A habit of photographing the scene with something for scale before anything is moved.
                3. Camera footage for the right hours saved and copied the same day.
                4. Evidence and photos stored with the loss log entry.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written evidence checklist on your phone, used at the next theft to produce dated photos and saved footage."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a six-item evidence checklist and save it on your phone"
                - "Practise photographing a fence cut or footprint with a ruler for scale"
                - "Learn how to export footage from your camera system"
                - "Keep evidence photos in a folder named by date and loss log entry"
            - name: Making a police report that leads somewhere
              description: |-
                ## Purpose
                Many farmers stop reporting because nothing happens, but a vague report is easy to shelve and a precise one with values, photos, serial numbers and suspects' vehicles is not. Learning how to make a clear report, get its number and follow it up makes each report count and builds the record that brings patrols.

                ## Milestones
                1. The information a good report needs gathered in a template: time, place, items, values, evidence.
                2. Reports made in person or by phone, with the report or diary number recorded each time.
                3. A follow-up call or visit scheduled after each report.
                4. All report numbers kept in the loss log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A report template in use, with every theft since adoption reported and its report number and follow-up date logged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page police report template for farm theft"
                - "Fill the template with the details of your most recent theft"
                - "Ask the station for the report or diary number and write it down"
                - "Set a follow-up date for every open report"
            - name: Guard dogs on the farm
              description: |-
                ## Purpose
                Barking dogs at the pen are among the cheapest alarms a farm can have, but a dog that is underfed, untrained or chained in the sun becomes a liability. Choosing, housing, feeding and training dogs properly, and working with a vet, turns them into reliable warning rather than a problem.

                ## Milestones
                1. A decision made on how many dogs, of what type, and where they will be kept at night.
                2. Shelter, water and a feeding routine set up, with the cost added to the security budget.
                3. A vet check and the vaccinations your vet advises completed.
                4. The dogs used to workers and family and trained to bark rather than attack.

                ## Notes
                Check local rules on dangerous dogs and warning signs. A dog that bites a passer-by can cost more than any theft.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Dogs kept with shelter, water and vet care, used to the farm team and positioned to warn at the pens and store at night."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide where on the farm a dog would give the earliest warning"
                - "Price shelter, feed and vet care for one year"
                - "Book a first vet visit for any dog you take on"
                - "Book the dogs' yearly vet check and vaccinations @recurring(yearly)"
            - name: Staying safe when you meet intruders
              description: |-
                ## Purpose
                Farmers in the region have been badly hurt and killed confronting thieves, often over produce worth a fraction of a hospital bill. Agreeing in advance what you, your family and your workers will do on meeting intruders, and practising it, means the decision is made calmly rather than in anger in the dark.

                ## Milestones
                1. A family and worker rule agreed: do not confront, retreat, call the police and neighbours.
                2. A safe place to go and a way to signal for help, such as a light or horn, chosen.
                3. Workers and watchmen told the rule and asked to repeat it back.
                4. Torch, charged phone and the contact sheet kept where night checks start.

                ## Notes
                Never set traps, hidden wires or anything designed to injure. They are dangerous to children, workers and animals and are usually illegal. Leave arrests to the police.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written no-confrontation rule known to every family member and worker, with a signal and safe place agreed."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Talk through with family what each person does on seeing an intruder"
                - "Agree a signal, such as a horn or light, that calls for help"
                - "Tell every worker and watchman the no-confrontation rule"
                - "Keep a torch, charged phone and contact sheet by the door"
            - name: Choosing fencing and gates for theft deterrence
              description: |-
                ## Purpose
                Fencing a whole farm is expensive, and the wrong fence only slows honest people. Comparing barbed wire, woven wire, chain link, electric fencing and live hedges for the weak points on your map lets you spend on the stretches that matter most, such as the road frontage and the pen.

                ## Milestones
                1. The stretches of boundary that most need fencing ranked from the boundary map.
                2. Three fence options priced per metre for those stretches.
                3. Gate options compared, including hinges and locks that cannot be lifted off.
                4. A fencing plan chosen with a phased budget.

                ## Notes
                Electric fencing must use a proper energiser and warning signs as local rules require. A live hedge of bamboo or thorny plants takes time but costs little.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fencing plan for the highest-risk stretches, with options priced and a phased budget recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Measure the length of the three highest-risk boundary stretches"
                - "Get prices per metre for three fence types from two suppliers"
                - "Check gates for hinges that could be lifted off their pins"
                - "Choose a fencing plan and split it into phases you can afford"
            - name: Solar security lighting at pens and stores
              description: |-
                ## Purpose
                Darkness is what most thieves want, and a pen or store lit by a motion-sensor light is a harder target, especially where it can be seen from the house or the road. Solar lights avoid trenching cables across the farm and still work when the grid is down.

                ## Milestones
                1. The pens, stores and gates that most need light chosen from the risk register.
                2. Light positions tested at night for what they show from the house and road.
                3. Solar motion-sensor lights installed out of easy reach.
                4. Each light added to the monthly maintenance round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Motion-sensor lights working at every pen, store and gate in the top risks, mounted out of reach and on the maintenance list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose the three spots on the farm that most need a light"
                - "Check at night what each spot looks like from the house"
                - "Install solar motion lights at least three metres up"
                - "Add each new light to the maintenance round list"
            - name: Choosing a farm camera system
              description: |-
                ## Purpose
                Cameras deter some thieves and identify others, but a farm has no mains at the far field, poor signal and dust, rain and heat. Comparing trail cameras, solar cellular cameras and wired CCTV for your sites and budget avoids buying a system that cannot see or send anything when it matters.

                ## Milestones
                1. Camera sites chosen from the risk register, with power and signal noted for each.
                2. Trail, solar cellular and wired options compared for cost, night vision and alerts.
                3. Running costs such as data plans and memory included.
                4. A system chosen and bought within the security budget.

                ## Notes
                Start from the **Purchase decision** template. Point cameras at gates and paths where faces and number plates pass, not across open fields.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A camera system chosen against written criteria for at least three sites, bought within budget and recording."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Mark the three camera sites with the most value on the map"
                - "Check phone signal and sunlight at each camera site"
                - "Compare trail, solar cellular and wired cameras on price and night vision"
                - "Buy and install the system you chose"
            - name: Marking and tagging every animal
              description: |-
                ## Purpose
                Unmarked animals are almost impossible to reclaim, because any goat or cow looks like any other once it is in someone else's yard. Choosing a marking method, such as ear tags, tattoos, brands or microchips, and applying it to every animal makes recovery and prosecution possible.

                ## Milestones
                1. Marking methods compared for your species with your vet or the livestock officer.
                2. One permanent mark and one visible mark chosen for the herd.
                3. Every existing animal marked and recorded in the herd register.
                4. A rule that new animals are marked within a week of birth or purchase.

                ## Notes
                Ask your vet or the livestock officer which methods suit your animals and how to apply them humanely. Registered marks carry more weight than homemade ones.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every animal on the farm carries the chosen marks and appears in the herd register with its mark recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your vet which marking methods suit your animals"
                - "Order the tags, tattoo kit or brands you chose"
                - "Mark every animal and enter each mark in the herd register"
                - "Check for lost or unreadable tags and replace them @recurring(monthly:15)"
            - name: Marking tools, pumps and equipment
              description: |-
                ## Purpose
                Stolen pumps sold on the next day can only be traced if they carry a mark the thief cannot easily remove. Engraving, stamping or welding a farm mark onto every tool and machine, alongside the serial number record, makes your property identifiable and less attractive to resell.

                ## Milestones
                1. A farm mark chosen, such as your registration number or initials and district.
                2. Every item on the asset record engraved, stamped or welded in a visible and a hidden place.
                3. Photos of the marks added to the asset record.
                4. Small signs posted saying equipment on this farm is marked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every item on the asset record carries a visible and a hidden farm mark, photographed and filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Decide on a farm mark that police can link back to you"
                - "Buy or borrow an engraver or metal stamping set"
                - "Mark each item in one visible and one hidden place"
                - "Photograph the marks and add them to the asset record"
            - name: Securing pumps, solar panels and batteries
              description: |-
                ## Purpose
                Irrigation pumps by the river, solar panels on a pen roof and batteries in an open box are some of the most stolen items on Caribbean farms, and losing a pump in the dry season can lose the crop too. Anchoring, caging and locking these items makes a quick theft a slow, noisy one.

                ## Milestones
                1. Every pump, panel, battery and inverter listed with its location.
                2. Pumps chained or caged, or moved to a lockable housing between uses.
                3. Solar panels fixed with anti-theft bolts and batteries in a locked box.
                4. Fittings checked during the monthly camera and light round.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every pump, panel and battery on the farm is chained, caged, bolted or locked in place."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every pump, panel, battery and inverter on the farm"
                - "Price cages or lockable housings for each pump"
                - "Replace solar panel bolts with anti-theft fittings"
                - "Fit locked boxes for batteries and inverters"
            - name: Harvest timing and routines that deny thieves
              description: |-
                ## Purpose
                Crops left in the field fully ripe, a harvest day everyone in the village knows and produce stacked by the road overnight all invite theft. Picking slightly earlier where quality allows, varying harvest days and moving produce out the same day removes the easy chances.

                ## Milestones
                1. Each main crop's earliest acceptable harvest stage agreed with buyers or the extension officer.
                2. Harvest days varied rather than fixed, with workers told on the day.
                3. A rule that nothing harvested is left in the field or by the road overnight.
                4. Results compared with the loss log after one season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One full season with varied harvest days and no produce left out overnight, with losses compared to the previous season."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your buyer how early each crop can be picked and still sell"
                - "Stop announcing harvest days in advance outside the core team"
                - "Arrange transport so harvested produce leaves the same day"
                - "Compare this season's losses with last season's in the log"
            - name: Night penning and secure housing for small stock
              description: |-
                ## Purpose
                Goats, sheep, pigs and poultry left out overnight or in a pen with a wire latch are the easiest livestock to steal. A pen with solid walls, a lockable door and a light, close enough to the house to hear, cuts night theft more than almost anything else.

                ## Milestones
                1. The pen sited where it can be seen or heard from the house or a watchman's post.
                2. Walls, roof and door strong enough that animals cannot be lifted out.
                3. A lockable door and a light or alarm fitted.
                4. Every animal penned before dark each evening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All small stock penned nightly in a lockable, lit pen within sight or hearing of the house or a watchman."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Check whether the pen can be seen or heard from the house"
                - "Strengthen walls and roof where an animal could be passed through"
                - "Fit a lockable door and a motion light at the pen"
                - "Pen every animal before dark from tonight"
            - name: Field layout that keeps valuable crops close
              description: |-
                ## Purpose
                Where you plant decides how easy a crop is to steal: a plot of sweet peppers by the road and out of sight of the house is a gift to passing thieves. Placing high-value, easily picked crops near the house and putting bulky or low-value crops on the far edges makes theft harder without spending money.

                ## Milestones
                1. Each crop ranked by value per kilo and how easily it can be picked and carried.
                2. The fields closest to the house and furthest from roads identified.
                3. Next season's planting plan placing high-value crops in the most watched fields.
                4. Thorny or bulky crops planned along exposed edges where they suit the land.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Next season's planting map puts the three highest-risk crops in the most watched fields."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank your crops by value and how easy they are to carry off"
                - "Mark the fields most watched from the house on the farm map"
                - "Plan high-value crops into the watched fields next season"
                - "Choose a bulky or thorny crop for the roadside edge"
            - name: Christmas and holiday peak theft plan
              description: |-
                ## Purpose
                Theft of goats, pigs, sorrel, peppers and ground provisions rises sharply before Christmas and other holidays, when demand and prices peak and people need cash. A plan that adds cover, harvests earlier and moves animals closer to the house in those weeks protects the most valuable sales of the year.

                ## Milestones
                1. The holiday weeks with the highest past losses marked on the farm calendar.
                2. Extra night cover and drive-bys booked for those weeks.
                3. Animals for holiday sale moved to the most secure pen early.
                4. Holiday sales pre-arranged with buyers so produce leaves quickly.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A holiday plan in place by early November each year, with extra cover booked and holiday sales arranged in advance."
                cadence: cyclic
              tasks:
                - "Mark the holiday weeks with the highest past losses on the calendar"
                - "Book extra night cover for those weeks"
                - "Move animals for holiday sale to the most secure pen"
                - "Start the holiday theft plan in early November @recurring(yearly)"
            - name: Harvest week guard plan for a high-value crop
              description: |-
                ## Purpose
                Some harvests concentrate a whole season's income into a week, such as a pepper flush, a melon field or a cocoa pod round, and that week attracts thieves. A short guard plan for those days, with cover, transport and sale all lined up, protects the crop when it is most valuable.

                ## Milestones
                1. The harvest window estimated from crop counts and buyer orders.
                2. Day and night cover arranged for every day of the window.
                3. Transport and buyers booked so produce leaves the farm the same day.
                4. Losses during the window recorded and compared with the previous harvest.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One high-value harvest completed with cover every night and losses below the previous harvest's figure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the harvest window from the latest crop count"
                - "Ask two people to share night cover for the harvest week"
                - "Book transport so each day's pick leaves the same evening"
                - "Record harvest-week losses and compare with the last harvest"
            - name: First 24 hours after a theft
              description: |-
                ## Purpose
                Shock and anger make the hours after a theft chaotic, and the chances of recovery shrink quickly as animals are slaughtered and produce sold. A checklist of what to do in order, from safety and evidence to police, neighbours and markets, makes the best use of that window.

                ## Milestones
                1. A one-page checklist covering safety, evidence, reporting, alerts and follow-up.
                2. Police, watch group and nearby markets or butchers alerted within hours.
                3. Evidence photographed and footage saved the same day.
                4. The theft entered in the loss log with its report number.

                ## Notes
                Start from the **Operational checklist** template. Keep it printed with the contact sheet so anyone on the farm can follow it.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A printed 24-hour theft checklist posted with the contact sheet and followed at the next theft, with the report number logged."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the steps for the first 24 hours after a theft in order"
                - "Print the checklist and post it beside the contact sheet"
                - "List the butchers and market vendors to alert if animals are taken"
                - "Walk a family member or worker through the checklist once"
            - name: Community meeting with police and farmers
              description: |-
                ## Purpose
                Patrols, roadblocks and market checks follow where farmers make their losses visible together. A meeting of farmers in the district with the police and the agricultural officer, with the group's losses summarised, can win more patrols and closer attention to buyers.

                ## Milestones
                1. A date, venue and agenda agreed with at least three other farmers.
                2. The police and agricultural officer invited and confirmed.
                3. Members' loss figures pooled into one summary for the meeting.
                4. Actions and owners recorded and shared afterwards.

                ## Notes
                Start from the **Meeting notes** template. Bring numbers rather than stories alone; a district total for the year is hard to ignore.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meeting held with police and at least eight farmers, with a written list of agreed actions and owners circulated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree a date and venue with three other farmers"
                - "Invite the police station commander and the agricultural officer"
                - "Collect each farmer's yearly loss figure into one summary"
                - "Share the meeting actions and owners in the watch group"
            - name: Annual farm security review
              description: |-
                ## Purpose
                Security set up once decays: fences rust, workers change, lights fail and thieves find new routes. A yearly review of losses, spending, the risk register and what worked, held before the busiest theft season, keeps the farm's defences matched to its real risks.

                ## Milestones
                1. The year's loss total compared with the previous year.
                2. Security spending compared with the budget and with losses avoided.
                3. The risk register rescored and the top five risks updated.
                4. Next year's security budget and three priorities written.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review recorded each October with loss totals, a rescored risk register and three priorities for next year."
                cadence: cyclic
              tasks:
                - "Total the year's losses and compare them with last year"
                - "Rescore the risk register using this year's log"
                - "Hold the annual security review before the holiday season @recurring(yearly)"
                - "Write next year's budget and three security priorities"
            - name: Security for a farm you do not live on
              description: |-
                ## Purpose
                Many Caribbean farmers work in town and visit the land at weekends, which leaves the farm empty and its routine easy to read. A caretaker arrangement, remote cameras and neighbours who know your schedule can give an absentee farm some of the protection of one with people on it.

                ## Milestones
                1. A caretaker, neighbour or paid watchman agreed for checks between your visits.
                2. Visit days varied and not shared outside the household.
                3. At least one remote camera or neighbour report giving news between visits.
                4. A weekly call with the caretaker covering fences, animals and anything unusual.

                ## Notes
                Agree the caretaker's pay or exchange in writing, even informally, so expectations are clear when something is stolen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A caretaker or neighbour arrangement in writing and a weekly check-in call kept for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a neighbour or caretaker to check the farm between your visits"
                - "Write down what they check and what they are paid or given"
                - "Call the caretaker for a farm update @recurring(weekly:thu)"
                - "Change your visit days so they do not follow a fixed pattern"
            - name: Free-range and tethered livestock protection
              description: |-
                ## Purpose
                Cattle and goats grazed on roadsides, river banks and open land are stolen far more often than penned animals, often loaded into a van within minutes. Choosing safer grazing spots, checking animals at set times and bringing them in at night reduces the risk for farmers who have no fenced pasture.

                ## Milestones
                1. Grazing spots ranked by how visible and how far from roads they are.
                2. The most exposed spots dropped or used only when someone is nearby.
                3. Morning and evening checks of tethered animals in place.
                4. All animals brought into a pen or close to the house at night.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Tethered animals checked morning and evening and penned at night, with the riskiest grazing spots no longer used unattended."
                cadence: rolling
              tasks:
                - "List every place your animals graze and how close it is to a road"
                - "Stop using the grazing spot nearest a road when nobody is near"
                - "Check tethered animals morning and evening @recurring(daily)"
                - "Bring every grazing animal close to the house before dark"
            - name: Protecting a large tree crop estate
              description: |-
                ## Purpose
                Cocoa, nutmeg, coconut and fruit estates stretch over hilly land that nobody can watch all at once, and thieves pick pods, nuts and fruit deep in the trees. Dividing the estate into blocks, patrolling the edges on a rota and harvesting blocks in turn makes a large estate easier to protect.

                ## Milestones
                1. The estate divided into named blocks on a map, with access paths marked.
                2. Edge blocks next to roads and other land identified as the priority.
                3. A weekly patrol of edge blocks on varied days.
                4. Harvest rounds planned so ripe blocks are picked promptly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A block map of the estate with weekly patrols of edge blocks recorded for three months."
                cadence: rolling
              tasks:
                - "Divide the estate into named blocks on the farm map"
                - "Mark which blocks border roads or abandoned land"
                - "Patrol the edge blocks and note any picking or paths @recurring(weekly:tue)"
                - "Plan harvest rounds so ripe blocks are picked first"
            - name: Theft by workers or people you know
              description: |-
                ## Purpose
                Some farm theft is by someone who knows the farm: a worker, a relative or a former helper, which is why no fence was cut. Handling this fairly, with clear rules, checks and evidence rather than accusations, protects the farm and the relationships you depend on.

                ## Milestones
                1. Clear rules written on what workers may take home, if anything.
                2. Checks in place that make inside theft visible, such as reconciliations and key control.
                3. A fair process agreed for handling suspicion, including evidence first and no public accusations.
                4. Advice sought from the police or a labour officer before any dismissal for theft.

                ## Notes
                Accusing someone without evidence can lead to a dispute or worse. Gather facts, speak privately and get advice before acting.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written rules on produce taken home and a written process for handling suspected inside theft, shared with all workers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write what workers may take home and tell every worker"
                - "Check whether thefts in the log happened without forced entry"
                - "Write a short process for handling a suspected inside theft"
                - "Ask a labour officer what steps are fair before any dismissal"
            - name: Security on leased or state land
              description: |-
                ## Purpose
                Farmers on state agricultural leases or rented land often cannot build permanent fences or structures without permission, and some leases say who pays. Finding out what you may put up, and choosing movable or low-cost protection, lets you secure the land without breaching the lease.

                ## Milestones
                1. The lease checked for clauses on fencing, structures and improvements.
                2. Permission sought in writing for any fence, store or light you want to install.
                3. Movable options chosen where permanent ones are not allowed, such as portable pens or containers.
                4. Neighbouring lessees approached to share boundary fencing costs.

                ## Notes
                Ask the land authority or landlord before building. Improvements made without consent can be lost when the lease ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written permission or a written refusal for each security improvement, and a chosen plan that fits the lease."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your lease for clauses on fences and structures"
                - "Write to the landlord or land authority asking about each improvement"
                - "Price a container store or portable pen as a movable option"
                - "Ask neighbouring lessees about sharing fence costs"
            - name: Security from day one on a new farm
              description: |-
                ## Purpose
                New farms are cheapest to secure before the first crop goes in, when the house site, pens, store and access road can still be placed with theft in mind. Building security into the layout from the start avoids paying twice to move or fence things later.

                ## Milestones
                1. The farm layout planned with the house, pens and store within sight of each other.
                2. A single main access point chosen, with a lockable gate.
                3. The boundary fencing plan costed into the start-up budget.
                4. Neighbours met and contact numbers exchanged before the first harvest.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A start-up layout with house, pens and store in sight of each other, one lockable entrance and fencing in the budget."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Sketch the new farm layout with house, pens and store close together"
                - "Choose one main entrance and plan a lockable gate"
                - "Add boundary fencing to the start-up budget"
                - "Visit the neighbours and exchange numbers before planting"
            - name: Night theft at poultry houses and fish ponds
              description: |-
                ## Purpose
                Broiler houses near slaughter weight, layer flocks and tilapia ponds at harvest size are stolen at night in bags and nets, often in large numbers. Locking houses, lighting pond banks and timing harvests closely protects stock that is valuable and easy to carry.

                ## Milestones
                1. Doors and walls of poultry houses checked and locked at night.
                2. Pond banks lit or covered by a camera where theft has happened.
                3. Bird and fish counts recorded so losses are noticed.
                4. Harvest dates set close to buyer collection to shorten the risk window.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Poultry houses locked nightly and pond banks lit or watched, with stock counts recorded weekly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Fit locks to every poultry house door"
                - "Put a motion light or camera on the pond bank"
                - "Record bird or fish numbers weekly so losses stand out"
                - "Arrange buyer collection on the day stock reaches market weight"
            - name: Forming a registered farmers' security group
              description: |-
                ## Purpose
                An informal chat group can only do so much; a registered farmers' group can apply for funding for lights or patrols, sign agreements with police and speak to the ministry with one voice. Turning a watch group into a constituted group gives the district a lasting body for security work.

                ## Milestones
                1. Members agreed on the group's purpose and a simple constitution.
                2. Officers chosen and a bank account opened if the group will hold funds.
                3. The group registered with the relevant ministry or cooperative registrar.
                4. A first-year plan of three security actions agreed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A registered farmers' group with a constitution, officers and a first-year security plan of three actions."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office how farmers' groups register"
                - "Draft a short constitution with members of the watch group"
                - "Elect officers and register the group"
                - "Hold a members' meeting on group security work @recurring(quarterly)"
            - name: Working with buyers to refuse stolen produce
              description: |-
                ## Purpose
                Theft continues because stolen goods find buyers: vendors, butchers, restaurants and middlemen who do not ask questions. Agreeing with your own buyers that they ask for receipts and will report suspicious loads cuts the market for theft in your district.

                ## Milestones
                1. Every regular buyer told why receipts and farm names matter.
                2. Buyers asked to request receipts from all suppliers.
                3. A way for buyers to report suspicious offers to the watch group or police agreed.
                4. At least three buyers committed in writing or by message.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least three regular buyers committed to asking for receipts and reporting suspicious offers."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your regular buyers, vendors and butchers"
                - "Explain to each buyer why receipts protect them too"
                - "Agree how buyers will report suspicious offers"
                - "Ask three buyers to confirm their commitment by message"
            - name: Shared guard service among neighbouring farms
              description: |-
                ## Purpose
                One farm can rarely afford a night watchman, but five farms on the same road can share one, or a mobile patrol. Working out costs, cover and a written agreement turns a shared idea into a service that actually runs.

                ## Milestones
                1. Farms willing to share a guard or patrol identified.
                2. Quotes from a guard or patrol service or a local watchman collected.
                3. Costs split by area or value and agreed in writing.
                4. The service running with a monthly review of incidents.

                ## Notes
                Check that any security company is licensed where your country requires it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written cost-sharing agreement between at least three farms and a guard or patrol in service for three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask watch group members who would share a night guard"
                - "Get two quotes from a guard service or local watchman"
                - "Agree in writing how the cost is split between farms"
                - "Review the guard's incident notes with the group"
            - name: District theft data for police and ministry
              description: |-
                ## Purpose
                Patrols and funding go where problems are measured, and most praedial larceny goes unreported or unrecorded. Pooling loss logs from a group of farms into a quarterly summary of thefts, values and places gives police and the ministry the evidence to act.

                ## Milestones
                1. Group members agree to share loss totals, with names kept private.
                2. A simple form collects date, place, item and value each quarter.
                3. A quarterly summary with totals and a map of hotspots written.
                4. The summary sent to the police station and agricultural officer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A quarterly district theft summary sent to the police and agricultural officer for four quarters running."
                cadence: rolling
              tasks:
                - "Agree with group members how loss data will be shared privately"
                - "Set up a simple form for members to report losses"
                - "Send the quarterly theft summary to police and the ministry @recurring(quarterly)"
                - "Ask the agent to turn pooled loss data into a short hotspot summary"
            - name: Following a theft case through to court
              description: |-
                ## Purpose
                When a thief is charged, the farmer is usually the key witness, and cases collapse when evidence is lost, values are vague or the farmer misses a court date. Keeping the file in order and staying in touch with the investigating officer gives a case its best chance.

                ## Milestones
                1. A case file with the report number, evidence, photos, receipts and asset records.
                2. The investigating officer's name and number recorded, with regular contact.
                3. Court dates noted and attended, with a written statement prepared with the officer.
                4. The outcome recorded in the loss log.

                ## Notes
                Ask the police or the prosecutor what is expected of you as a witness. Do not discuss the case with the accused or their family.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A complete case file held for the theft, every court date attended and the outcome recorded."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Make a case file with the report number and all evidence"
                - "Write down the investigating officer's name and number"
                - "Ask the officer what will be expected of you as a witness"
                - "Add every court date to your calendar as soon as it is set"
---

# Praedial Larceny Prevention

Praedial larceny, the theft of crops, livestock and farm produce, wipes out a season's profit overnight for farmers across the Caribbean, and this area is for any farmer tired of planting for someone else to reap. It opens with foundations (a loss log, a walk of the boundary, a risk register, records of assets, registrations, contacts, receipt books, a locked store and a security budget), then the weekly and monthly routines of fence checks, crop counts, headcounts and reconciliations, the knowledge of how thieves work and how the law and police reports work, improvements to fencing, lights, cameras and marking, the dated events of peak theft seasons and the hours after a theft, situations for absentee farmers, free-range livestock, estates and leased land, and finally specialist work with farmer groups, buyers and the courts.

What repeats is a Saturday fence walk, evening headcounts, crop counts in the run-up to harvest, a Friday night-cover rota, monthly camera, receipt and loss reviews, quarterly key checks and group meetings, and a yearly review before the Christmas peak. The Metrics log, Risk register, Purchase decision, Operational checklist and Meeting notes templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
