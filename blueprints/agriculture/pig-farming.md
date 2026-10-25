---
id: agriculture.pig-farming
name: Pig Farming
description: "Lay out pens and waste handling that neighbours and inspectors accept, run breeding, farrowing and grow-out on records, keep disease out with a vet's plan, and sell pigs to butchers and processors at a margin."
category: business
version: 1.0.0
tags: [agriculture, pig-farming, small-business, pigs, farrowing, biosecurity, pork, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - risk-register
    - remediation-plan
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pig Farming
          description: "Raising pigs: housing and waste management, breeding and farrowing, feed, herd health with a vet, biosecurity and sales to butchers and processors."
          projects:
            - name: Piggery site plan and pen layout
              description: |-
                ## Purpose
                Pig units grow one pen at a time, and the result is often a dry sow pen next to the farrowing pen, a feed store downwind of the manure pit and no way to move pigs without crossing paths. Drawing the whole unit to scale, with the flow of pigs from service to sale and the flow of manure and water away from them, shows what to fix now and where the next pens should go.

                ## Milestones
                1. A scale drawing of the unit showing every pen, the feed store, water points, manure handling and the boundary.
                2. Each pen labelled with its purpose, floor area and the number of pigs it holds today.
                3. The route pigs take from service to farrowing, weaning, growing and loading marked as one line.
                4. The prevailing wind, the slope and the distance to the nearest house and watercourse noted on the plan.
                5. Three layout changes listed in order of cost and benefit.

                ## Notes
                Ask your extension officer or the ministry's livestock unit whether they publish recommended space per pig by weight class, and use their figures rather than ones copied from a temperate country. Keep the loading ramp at the edge of the unit so trucks never come near the breeding pens.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A scale plan of the piggery exists showing every pen with its use and capacity, the pig flow, the manure route and three ranked layout changes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pace out the pens and buildings and sketch them on squared paper"
                - "Measure each pen and write its use and floor area on the sketch"
                - "Draw the route pigs take from the boar pen to the loading ramp"
                - "Mark wind direction, slope, nearest house and nearest stream"
                - "List three changes that would shorten pig movements or keep manure away from pens"
            - name: Pig identification and herd register
              description: |-
                ## Purpose
                Without a number on every breeding pig, records turn into memory, and memory cannot tell you which sow weaned six piglets twice running. Giving every sow, gilt and boar a permanent ear tag or notch and a line in a herd register is the first step to every breeding, health and culling decision that follows, and buyers and inspectors increasingly ask for it.

                ## Milestones
                1. One identification method chosen for breeding stock: ear tags, ear notches or tattoos.
                2. Every sow, gilt and boar identified and listed with date of birth or purchase, breed and source.
                3. Growing pigs recorded by batch or pen, with numbers and weaning dates.
                4. A full stock count matches the register.

                ## Notes
                Ear notching is cheap and permanent but takes practice to read; tags are easy to read and get torn out. Many units notch breeding stock and tag batches. Check whether your country runs an official livestock identification scheme you are expected to join.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every breeding pig carries a permanent identity that appears in a herd register, and a stock count matches the register exactly."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count every pig on the unit by pen and write the totals down"
                - "Choose ear tags, notches or tattoos for the breeding herd"
                - "Identify each sow, gilt and boar and start a herd register line for each"
                - "Record growing pigs by batch with numbers and weaning date"
                - "Do a full stock count against the register @recurring(quarterly)"
            - name: Registering the pig unit with the authorities
              description: |-
                ## Purpose
                Smell, flies and water pollution give pig units more rules than most livestock, and many countries require livestock premises registration, a planning or environmental approval above a certain herd size and minimum distances from homes and watercourses. Knowing exactly which registrations apply to your unit, and holding them, protects you when a neighbour complains or a buyer asks for your premises number.

                ## Milestones
                1. The ministry of agriculture's livestock office asked which registrations apply to a unit of your size.
                2. The planning or environmental authority asked whether the unit needs an approval or permit.
                3. Every required registration or permit applied for or confirmed, with reference numbers filed.
                4. Renewal dates and any conditions, such as setback distances or waste rules, written in one place.

                ## Notes
                Rules differ widely between islands and between rural and residential zones. Write down the name of each officer you speak to and the date, so a later disagreement can be traced back to what you were told.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A file holds every registration and permit the unit needs, each with a reference number, conditions and renewal date confirmed by the issuing office."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Call the ministry's livestock office and ask which registrations apply to your herd size"
                - "Ask the planning or environmental authority whether the unit needs a permit"
                - "Submit or confirm each registration and file the reference numbers"
                - "Write every condition and renewal date on one sheet"
                - "Check registrations and permits are current before they lapse @recurring(yearly)"
            - name: Pig herd health plan with the vet
              description: |-
                ## Purpose
                Most pig units only call a vet when pigs are already dying, which is the most expensive time to meet one. A written herd health plan, agreed on a planned farm visit, sets out which diseases matter locally, the vaccination and parasite programme the vet recommends, what to do with a sick pig and when to call, so routine decisions stop being guesses.

                ## Milestones
                1. A vet with pig experience found and a planned whole-unit visit booked.
                2. The vet has walked every pen and seen your records and feed.
                3. A written herd health plan covering vaccination, parasites, piglet procedures, sick pig handling and post-mortems.
                4. The plan's routine treatments entered on the breeding calendar.
                5. A date for the next planned visit agreed.

                ## Notes
                Ask the vet to write the plan in terms of what to do and when, and to name the products so you can buy the right ones. Doses come from the vet and the label, not from neighbours or online groups.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed or dated herd health plan from a vet exists, its routine treatments are on the calendar and the next visit date is booked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask other pig farmers or the extension office which vets work with pigs"
                - "Book a planned whole-unit visit rather than an emergency call"
                - "Have the herd register, mortality notes and feed bags ready for the visit"
                - "Enter every routine treatment in the plan on the breeding calendar"
                - "Review the herd health plan with the vet on a planned visit @recurring(yearly)"
            - name: Choosing breeds and crossbred lines for a hot climate
              description: |-
                ## Purpose
                Pure white breeds bought for lean growth can struggle with heat and sun, while local and coloured pigs cope better but grow slower and carry more fat. Deciding what the sow herd should be, and which boar or semen line goes on it, sets litter size, growth and carcass quality for years, so it deserves a deliberate choice rather than whatever is for sale this month.

                ## Milestones
                1. The breeds and crosses available locally listed, with sources for gilts, boars and semen.
                2. Each option compared on litter size, growth, heat tolerance, carcass fat and price, using supplier and extension information.
                3. Your buyers asked what carcass they pay best for.
                4. A written breeding aim chosen, such as a crossbred sow herd with a terminal boar line.

                ## Notes
                A common pattern is a crossbred sow, which brings hybrid vigour in litter size and mothering, served by a meatier terminal boar whose offspring are all sold for slaughter. Ask for health status in writing from any breeding stock seller.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written breeding aim names the sow type and the boar or semen line, with the reasons and the sources for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every source of gilts, boars and semen within reach"
                - "Ask your two main buyers which carcass type earns the best price"
                - "Compare the options on litter size, growth, heat tolerance and fat"
                - "Write your breeding aim in two sentences and file it with the herd register"
            - name: Biosecurity line and visitor rules for the piggery
              description: |-
                ## Purpose
                Boots, trucks, feed sacks and new pigs carry pig diseases far more often than the air does, and African swine fever has shown how fast that can empty a region of pigs. A clear line around the unit, a footbath and boot change at the only entrance, a visitor book and a rule that buyers' trucks stay outside are cheap and stop most of the risk at the gate.

                ## Milestones
                1. A single controlled entrance to the pig area, with a fence or barrier around the rest.
                2. A boot change or footbath and handwashing point at that entrance.
                3. Written rules for visitors, workers and vehicles posted at the gate.
                4. A visitor book in use, recording name, date and when the visitor was last on another pig farm.
                5. A loading point outside the line so buyers' trucks never enter.

                ## Notes
                Start from the **Operational checklist** template for the gate routine. Ask your vet which disinfectant suits a footbath under your conditions and follow its label for strength and change frequency.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The pig area has one controlled entrance with boot change, posted rules, a visitor book in daily use and an outside loading point."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Walk the boundary and mark every gap where people or animals get in"
                - "Set up a boot change and handwashing point at one entrance"
                - "Write and post the visitor and vehicle rules at the gate"
                - "Start a visitor book asking when each person was last near pigs"
                - "Refresh the footbath at the entrance @recurring(weekly:mon,thu)"
            - name: Pig manure and wash water management plan
              description: |-
                ## Purpose
                A pig produces several times more manure than a person, and wash water from hosed pens is the most common reason a neighbour, a river or an inspector turns against a pig unit. Planning where solids go, how liquid is held or treated and how it reaches land as fertiliser rather than runoff keeps the unit legal and turns a nuisance into something worth using.

                ## Milestones
                1. Daily manure and wash water volumes estimated from pig numbers and hosing habits.
                2. The current route of manure and water traced from each pen to where it ends up.
                3. A method chosen for solids and liquids, such as scraping and composting, a settling pit, a lagoon or a digester.
                4. Land or buyers identified for compost or slurry, with distances from watercourses respected.
                5. The plan checked against your environmental or public health authority's rules.

                ## Notes
                Scraping solids before hosing cuts water use and pit size sharply. Never let slurry reach a stream, gully or drain, even in a storm; size storage for the wettest weeks of the rainy season.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written manure plan states daily volumes, the handling method, storage capacity for the wet season and where the output goes, and meets the authority's rules."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Follow the wash water from each pen and note where it ends up"
                - "Estimate daily manure and water volumes from pig numbers"
                - "Ask the extension office which handling methods suit your herd size"
                - "Write the plan with storage sized for the wettest month"
                - "Check the soak-away, pit or lagoon level and its walls @recurring(monthly:15)"
            - name: Cost per weaner and per finished pig baseline
              description: |-
                ## Purpose
                Feed is usually two thirds or more of the cost of a finished pig, and when imported feed prices jump many farmers keep selling at last year's price without noticing they now lose money on every pig. Working out what a weaner and a finished pig really cost you, from feed, sow upkeep, medicines, labour and power, gives a floor below which you should not sell.

                ## Milestones
                1. Feed bought in the last six months totalled and split between sows, piglets and growers.
                2. Other costs gathered: vet and medicines, power, water, labour, transport and repairs.
                3. Pigs sold or weaned in the same period counted.
                4. A cost per weaner and a cost per kilogram of liveweight sold worked out.
                5. A minimum selling price per kilogram written down.

                ## Notes
                If you do not keep receipts, start now and redo this in three months. Ask the agent to lay your figures into a simple per-pig cost table once you have them.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost per weaner and a cost per kilogram liveweight are calculated from six months of real figures, with a minimum selling price recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather feed receipts for the last six months into one envelope"
                - "Total feed and other costs for the period"
                - "Count weaners produced and kilograms of pig sold in the same period"
                - "Ask the agent to work out cost per weaner and per kilogram from your totals"
                - "Write a minimum selling price per kilogram on the office wall"
            - name: Heat stress audit of the pig pens
              description: |-
                ## Purpose
                Pigs barely sweat, so in a tin-roofed pen at two in the afternoon they eat less, grow slower, and sows return to heat late or lose litters. An audit of shade, roof height, airflow, wallows or sprinklers and drinker access, done on a hot dry-season afternoon, finds the cheap fixes that pay back in feed intake within weeks.

                ## Milestones
                1. Temperatures recorded in each pen house at mid-afternoon on a hot day.
                2. Signs of heat stress noted pen by pen: panting, lying apart, wet floors used as wallows, low feed intake.
                3. Roof insulation, height, open sides, shade and cooling methods listed for each house.
                4. Three improvements chosen, such as roof insulation, drip cooling for sows or shade cloth on the west side.

                ## Notes
                Lactating sows suffer most, because they produce heat making milk. Cooling methods that wet pigs only work with airflow; a soaked pig in still air stays hot.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Afternoon temperatures and heat stress signs are recorded for every house, with three chosen improvements and their costs written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Hang a cheap thermometer at pig height in each house"
                - "Read every thermometer at two in the afternoon on a hot day"
                - "Note breathing rate and lying behaviour in each pen"
                - "Price three cooling improvements and choose which to do first"
            - name: Daily pig house round and checklist
              description: |-
                ## Purpose
                Most losses on a pig unit, from a crushed piglet to a sow off her feed with a fever, are visible to someone who looks properly each morning. A fixed daily round that checks every pen for feed, water, dung, breathing and behaviour in the same order means problems are caught on day one, when they are cheapest to treat.

                ## Milestones
                1. A written round covering every pen in the same order, with what to check in each type of pen.
                2. The round done every morning before feeding and recorded with a tick and any notes.
                3. Any pig off feed, lame, coughing or scouring marked and reported the same day.
                4. A weekend and sick-day cover arrangement so the round never lapses.

                ## Notes
                Start from the **Operational checklist** template. Look at pigs before you feed them: a pig that does not get up for food is the one you need to see.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written daily round is completed and initialled every day for a month, with every sick pig noted and acted on the same day."
                cadence: rolling
              tasks:
                - "Write the order of the round and what to check in each pen type"
                - "Pin the checklist at the unit entrance with a pen"
                - "Walk every pen before feeding and note any pig not getting up @recurring(daily)"
                - "Arrange who does the round on your days off"
            - name: Weekly feed stock and intake check
              description: |-
                ## Purpose
                Running out of sow or creep feed for two days does lasting damage, and feed left damp in the store goes mouldy and can harm pigs. Counting bags every week, matching them to what each group should eat and ordering before stock falls to a set level keeps pigs fed and shows straight away when intake drops or feed is going missing.

                ## Milestones
                1. A minimum stock level set for each feed type, enough to cover delivery delays.
                2. A weekly count of bags by feed type recorded on a sheet in the store.
                3. Feed used per week compared with what the pigs on hand should eat.
                4. The store kept dry, off the floor and rotated first in, first out.

                ## Notes
                A sudden fall in use is often the first sign of illness or heat stress; a sudden rise with no change in pigs often means waste or theft.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feed stock is counted weekly for eight weeks running with no feed type falling below its minimum level."
                cadence: rolling
              tasks:
                - "Set a minimum number of bags for each feed type"
                - "Raise the bags off the floor on pallets and rotate old stock forward"
                - "Count bags by feed type and compare use with pig numbers @recurring(weekly:mon)"
                - "Order feed whenever any type reaches its minimum"
            - name: Breeding and farrowing calendar
              description: |-
                ## Purpose
                A sow's year runs to a fixed clock: service, a pregnancy of roughly three months, three weeks and three days, farrowing, lactation and weaning, then back to service within a week if all goes well. A calendar that shows every sow's next event lets you move her to the farrowing pen on time, prepare the pen, plan labour and see weeks with too many or too few litters.

                ## Milestones
                1. Every sow and gilt on the calendar with her service date, due date and planned weaning date.
                2. A rule for when sows move to the farrowing pen before the due date, agreed with your vet.
                3. Routine treatments from the herd health plan placed on the calendar.
                4. Weeks with clashing farrowings or empty farrowing pens visible at a glance.

                ## Notes
                A wall board or a printed year planner works as well as an app if it is updated the same day. Ask your vet to confirm the pregnancy length and timing rules you use.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breeding female has a service, due and weaning date on the calendar, and no sow has farrowed outside a prepared farrowing pen for three months."
                cadence: cyclic
              tasks:
                - "Put up a year planner or board in the unit office"
                - "Enter every sow's last service date and work out her due date"
                - "Mark farrowing pen moves and weaning dates for each sow"
                - "Update the calendar and check the coming fortnight's events @recurring(weekly:fri)"
            - name: Sow cards for every breeding sow
              description: |-
                ## Purpose
                Deciding which sow to cull is easy when each has a card showing every litter: born alive, stillborn, weaned, weaning weight, treatments and any problems at farrowing. Without cards, the sow that farrows big litters and crushes half of them stays in the herd for years.

                ## Milestones
                1. A card or digital record for every sow and gilt, linked to her identity in the herd register.
                2. Each litter recorded with service date, boar or semen, farrowing date, born alive, stillborn, fostered and weaned.
                3. Treatments and problems such as difficult farrowing or poor milk written on the card.
                4. Cards updated within a day of each event.

                ## Notes
                Keep cards by the sow's pen in a plastic sleeve and copy them into the main record monthly. A sow's last three litters tell you more than her best one.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every breeding sow has a card with all litters since the card started, updated within a day of each farrowing and weaning."
                cadence: rolling
              tasks:
                - "Print or buy sow cards with columns for each litter"
                - "Fill in what you know of each sow's past litters"
                - "Hang each card in a plastic sleeve by the sow's pen"
                - "Copy the month's card entries into the main record @recurring(monthly:3)"
            - name: Monthly weighing of growers and finishers
              description: |-
                ## Purpose
                Guessing weights by eye is how pigs are sold too light, kept too long on expensive feed or priced below what they are worth. Weighing a sample of each batch every month, on a scale or with a weigh band, shows growth rate, flags slow pens and tells you when a batch will reach the weight your buyer pays best for.

                ## Milestones
                1. A pig scale, weigh crate or calibrated weigh band available on the unit.
                2. A sample of pigs from each batch weighed on the same day each month.
                3. Average weight and daily gain worked out per batch.
                4. A forecast date for each batch to reach selling weight.

                ## Notes
                A weigh band is cheaper than a scale but less accurate; check it against a scale weight now and then. Weigh before feeding so gut fill does not distort the figures.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each batch has at least three monthly sample weights with a daily gain figure and a forecast selling date."
                cadence: rolling
              tasks:
                - "Borrow, buy or build a way to weigh pigs safely"
                - "Decide how many pigs to weigh from each pen"
                - "Weigh the sample from every batch before feeding @recurring(monthly:12)"
                - "Work out daily gain and the forecast selling date per batch"
            - name: All-in all-out pen cleaning between batches
              description: |-
                ## Purpose
                Disease builds up in pens that are never emptied, because each new batch picks up what the last one left in cracks and dung. Emptying a pen completely, scraping, washing, disinfecting and leaving it dry for a few days before the next batch breaks that chain, and is one of the cheapest ways to cut scours and pneumonia in young pigs.

                ## Milestones
                1. Batches planned so each farrowing and nursery pen empties completely before refilling.
                2. A written cleaning sequence: scrape, soak, wash, disinfect, dry, check.
                3. A disinfectant chosen with the vet and used at the label strength.
                4. Every pen cleaned and rested before refilling, with the date recorded on the pen.

                ## Notes
                Disinfectant does little on dirty surfaces; most of the benefit comes from removing every trace of dung first. Drying time matters as much as the chemical.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months every farrowing and nursery pen is emptied, cleaned and rested before refilling, with dates written on each pen."
                cadence: rolling
              tasks:
                - "Write the cleaning sequence on a laminated card"
                - "Ask the vet which disinfectant suits your pens"
                - "Plan the next three batches so each pen empties fully"
                - "Write the cleaning date on each pen once it is done"
            - name: Rodent and fly control round
              description: |-
                ## Purpose
                Rats eat and foul pig feed, chew wiring and carry diseases into the unit, and flies breeding in wet manure are the first thing neighbours complain about. A round of bait stations, traps and fly breeding spots, checked on a schedule and logged, keeps both down without scattering poison where pigs, dogs or children can reach it.

                ## Milestones
                1. Bait stations placed and numbered on the site plan, out of reach of pigs and pets.
                2. Rat runs, burrows and feed spillage points found and dealt with.
                3. Fly breeding spots such as wet feed, damp bedding and manure crusts identified.
                4. A log of each round showing stations checked and activity seen.

                ## Notes
                Use only rodenticides and fly products approved in your country and follow the label exactly. Tamper-resistant stations protect pigs and children.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Numbered bait stations are marked on the site plan and a log shows a round completed every week for two months."
                cadence: rolling
              tasks:
                - "Mark bait station positions on the site plan"
                - "Clean up spilled feed around troughs and the store"
                - "Check every bait station and note rat signs @recurring(weekly:wed)"
                - "Clear wet feed and manure crusts where flies breed"
            - name: Drinker flow and water supply checks
              description: |-
                ## Purpose
                One blocked nipple drinker can leave a pen of growers thirsty for a day before anyone notices, and pigs that drink less eat less. Checking flow at every drinker and keeping a backup water supply for when the main fails is a small routine that protects growth and, in the dry season, lives.

                ## Milestones
                1. Every drinker on the unit listed by pen.
                2. Flow at each drinker checked against the rate your supplier or vet suggests for that size of pig.
                3. Drinker height matched to the pigs in each pen.
                4. A stored water reserve that can supply the unit for at least two days if the main supply fails.

                ## Notes
                Lactating sows need far more water than dry sows, and too low a flow cuts milk. Time how long a drinker takes to fill a measuring jug to check flow.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every drinker's flow is checked and logged weekly for two months, and a two-day water reserve is in place."
                cadence: rolling
              tasks:
                - "List every drinker by pen on one sheet"
                - "Measure flow at each drinker with a jug and a watch"
                - "Check flow and drinker height in every pen @recurring(weekly:sat)"
                - "Work out how much water the unit uses in two days and how to store it"
            - name: Monthly pig herd performance review
              description: |-
                ## Purpose
                Five or six numbers decide whether a pig unit pays: piglets born alive and weaned per sow, pre-weaning and post-weaning mortality, days to selling weight and feed used per kilogram of gain. Working them out monthly from your records shows whether a change you made helped, and gives your vet and lender the same picture you see.

                ## Milestones
                1. The key figures for your unit chosen and defined in writing.
                2. A monthly sheet that pulls them from sow cards, weighing records and feed counts.
                3. Three months of figures in a row, with a short note on what changed.
                4. One target set for the figure that most needs to improve.

                ## Notes
                Start from the **Metrics log** template. Compare yourself with your own past months first; published figures from large temperate farms are not a fair yardstick.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly reviews exist with pigs weaned per sow, mortality and feed per kilogram gained, and one written improvement target."
                cadence: rolling
              tasks:
                - "Choose five figures to track and define each in a sentence"
                - "Set up a monthly sheet using the Metrics log"
                - "Work out the month's figures from sow cards, weights and feed @recurring(monthly:5)"
                - "Write one line on what changed and why"
            - name: Pig sales and buyer ledger
              description: |-
                ## Purpose
                Butchers, processors, neighbours and Christmas customers all buy pigs, some by liveweight, some by carcass weight, some at a price agreed by eye, and payment often comes weeks later. Keeping a ledger of every sale with the buyer, weight, price per kilogram and the date paid shows which buyers pay best and on time, and stops money owed from being forgotten.

                ## Milestones
                1. One ledger for all pig sales, listing buyer, date, number, weight, price basis and amount.
                2. Every sale in the last three months entered.
                3. Unpaid sales flagged with the date payment is due.
                4. Price per kilogram compared across buyers and against your minimum selling price.

                ## Notes
                Give a written receipt or sale note for every pig, even to a neighbour; it protects you if the pig's ownership or health is questioned later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every pig sold in the last three months is in one ledger with weight, price per kilogram and payment status."
                cadence: rolling
              tasks:
                - "Start a sales ledger with columns for buyer, weight, price basis and paid date"
                - "Enter every pig sold in the last three months"
                - "Chase any sale unpaid past its due date"
                - "Total the month's sales and compare buyers' prices per kilogram @recurring(monthly:28)"
            - name: Spotting sick pigs early
              description: |-
                ## Purpose
                Pigs hide illness until it is well advanced, so a good stockperson learns the small signs: a pig lying apart, ears down, tail still, dung too hard or too loose, breathing from the belly, skin discoloured at the ears. Learning these signs, and the normal temperature range from your vet, turns the daily round into an early warning system.

                ## Milestones
                1. A list of early signs of illness for sows, piglets and growers, checked with your vet.
                2. Taking a pig's rectal temperature practised under the vet's guidance.
                3. A simple sick pig sheet in use: pen, identity, signs, temperature, action, outcome.
                4. Workers shown the same signs and the sheet.

                ## Notes
                Write down what you see before you treat; it helps the vet and builds your own judgement. Sudden deaths, many pigs off feed at once, or blotchy skin should be reported to the vet the same day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A vet-checked list of early illness signs is posted in the unit and a sick pig sheet holds at least five recorded cases with actions and outcomes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the vet to show you early signs of illness in each age group"
                - "Learn to take a pig's temperature with the vet watching"
                - "Post a sick pig sheet in the unit office"
                - "Walk the pens with each worker and point out normal and abnormal pigs"
            - name: Heat detection and service timing in sows and gilts
              description: |-
                ## Purpose
                Every day a weaned sow stays empty costs feed and floor space with nothing to show for it, and serving too early or too late in heat cuts litter size. Learning to read the signs of heat, such as a swollen vulva, restlessness and standing still under back pressure with the boar nearby, and timing service to them, fills the farrowing pens on schedule.

                ## Milestones
                1. The signs of heat and the standing response learned and checked with an experienced stockperson or the vet.
                2. Weaned sows and gilts checked for heat at the same time each morning with boar contact.
                3. Service times recorded against the first sign of standing heat.
                4. Returns to heat three weeks after service checked and recorded.

                ## Notes
                Heat signs are weaker in hot weather, so check early in the cool of the morning. Ask your vet what service timing they recommend relative to the first standing heat.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every weaned sow and gilt has heat check results logged daily until served, and returns to heat are recorded for each service."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Spend a morning heat checking alongside an experienced pig keeper"
                - "Write the signs of heat on a card in the service area"
                - "Check weaned sows and gilts for heat with boar contact each morning @recurring(daily)"
                - "Record each service time and check for returns three weeks later"
            - name: Learning artificial insemination for pigs
              description: |-
                ## Purpose
                Artificial insemination lets a small unit use better boars than it could ever buy, avoids the cost and danger of keeping a boar and reduces disease risk from bought boars. It is a learnable skill, but semen handling, timing and hygiene decide whether it works, so a short course or supervised practice comes before relying on it.

                ## Milestones
                1. A source of pig semen located, with delivery times and storage requirements.
                2. A training session or supervised inseminations completed with an experienced technician.
                3. A semen storage unit at the right temperature with a thermometer and a log.
                4. Ten sows or gilts inseminated and their farrowing rate compared with natural service.

                ## Notes
                A boar still helps with heat detection even if he never serves. Ask whether the semen supplier or extension service runs training days.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have completed supervised training, inseminated ten females and recorded their farrowing rate against natural service."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the extension office or a pig breeder where pig semen can be bought"
                - "Book a training session or supervised inseminations"
                - "Set up a semen storage box with a thermometer and log"
                - "Compare farrowing rates for inseminated and naturally served sows"
            - name: Farrowing assistance and newborn piglet care
              description: |-
                ## Purpose
                Most piglet deaths happen in the first three days, from crushing, chilling, starvation and difficult births. Knowing when a farrowing is going wrong and when to call the vet, and getting every piglet dry, warm and onto a teat with colostrum within hours, is where an attentive stockperson adds the most weaned piglets per sow.

                ## Milestones
                1. The signs of a normal farrowing and of trouble learned, with the vet's rule for when to intervene or call.
                2. A farrowing kit ready: towels, lubricant, gloves, iodine for navels, a heat source, a torch and the vet's number.
                3. A warm, draught-free creep area in every farrowing pen.
                4. Piglet procedures and their timing taken from the herd health plan, not from habit.
                5. Losses in the first week recorded by cause for every litter.

                ## Notes
                Never pull piglets without clean gloves and lubricant, and call the vet if you cannot feel a piglet or progress stops. Teeth clipping, tail docking and castration rules vary by country and buyer, so take them from your vet and local law.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stocked farrowing kit sits in the farrowing house, every pen has a creep area, and first-week losses are recorded by cause for every litter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the vet when to intervene in a farrowing and when to call them"
                - "Pack a farrowing kit in a sealed box in the farrowing house"
                - "Set up a warm creep area in every farrowing pen"
                - "Record each piglet lost in the first week with its likely cause"
            - name: Body condition scoring sows
              description: |-
                ## Purpose
                Sows that are too thin at weaning return to heat late and produce smaller litters, while fat sows have harder farrowings and eat less in lactation. Scoring condition by feeling the backbone and hips, on a simple scale, at service, mid-pregnancy and weaning tells you which sows to feed up or hold back long before the problem shows in a litter.

                ## Milestones
                1. A condition scoring scale learned and practised with the vet or an experienced keeper.
                2. Every sow scored at service, mid-pregnancy and weaning, with scores on her sow card.
                3. A feeding adjustment agreed with your nutritionist or vet for sows outside the target range.
                4. Scores compared with litter results after six months.

                ## Notes
                Feel, do not just look: a sow with a full belly can look fat and be thin over the back. Some keepers use a simple backfat caliper as they grow more experienced.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every sow has condition scores recorded at service, mid-pregnancy and weaning for two cycles, with any feeding change agreed with an adviser."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Learn the condition scoring scale with an experienced keeper"
                - "Score every sow and write the score on her card"
                - "Agree feeding changes for thin and fat sows with your adviser"
                - "Score the whole sow herd and update the cards @recurring(monthly:22)"
            - name: Safe pig handling and moving
              description: |-
                ## Purpose
                Boars and sows with litters injure people every year, and pigs chased with sticks bruise, which buyers see on the carcass. Learning to move pigs calmly with a pig board, using their flight zone and wide clear passages, makes loading days quicker, protects workers and children, and improves carcass quality.

                ## Milestones
                1. Pig boards and a sorting panel available in the unit.
                2. Every person who moves pigs shown how to use a board and where to stand.
                3. A rule that nobody enters a boar pen or a pen with a sow and new litter alone.
                4. Passages and the loading ramp checked for slippery floors, sharp edges and blind corners.

                ## Notes
                Pigs move towards light and away from noise and shadows. Never beat pigs; electric goads should be a last resort if permitted at all where you farm.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pig boards are in place, every handler has been shown their use, and passages and the ramp have been checked and fixed for hazards."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Buy or make two pig boards and a sorting panel"
                - "Show every handler how to move pigs with a board"
                - "Post the rule about entering boar and farrowing pens"
                - "Fix slippery floors and sharp edges on passages and the ramp"
            - name: Pig feed phases and reading feed labels
              description: |-
                ## Purpose
                Pigs need different diets as they grow: creep and starter feeds for piglets, grower and finisher rations, and separate diets for pregnant and suckling sows. Knowing what each feed is for and how to read the protein, energy and lysine on a label lets you buy the right bag for each group and talk sensibly with your feed supplier and nutritionist.

                ## Milestones
                1. Every feed you use listed with the group it is meant for and its label figures.
                2. The purpose of each feed phase understood and checked with your supplier or nutritionist.
                3. The weights or ages at which pigs change feed agreed in writing.
                4. Feeding instructions posted in the store for each group.

                ## Notes
                Feeding finisher to young pigs or dry sow ration to suckling sows saves little and costs growth or milk. Quantities per pig come from the feed maker or your nutritionist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A posted feeding chart names the feed for each pig group, the change-over weights or ages and the label figures, checked by your supplier or nutritionist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Photograph the label on every feed bag in the store"
                - "List each feed with the pig group it is intended for"
                - "Ask the supplier's nutritionist when pigs should change feed"
                - "Post a feeding chart for each group in the feed store"
            - name: Recognising African swine fever and other notifiable pig diseases
              description: |-
                ## Purpose
                African swine fever has no vaccine in general use and no cure, it reached the island of Hispaniola in 2021, and an outbreak means compulsory culling and movement bans across a district. Knowing its signs, and those of classical swine fever and foot and mouth disease, and how to report a suspicion, is the most important disease knowledge a Caribbean pig keeper can hold.

                ## Milestones
                1. The notifiable pig diseases in your country listed, with their main signs, from the veterinary authority.
                2. The official reporting number for suspected notifiable disease saved in your phone and posted in the unit.
                3. The main ways these diseases spread understood: pork products, swill, people, vehicles and pigs.
                4. Workers and family who feed pigs told what to look for and who to call.

                ## Notes
                Report a suspicion first and ask questions after; hiding sick pigs or selling them quickly spreads disease to your neighbours. Never bring pork products from abroad onto a pig farm.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A poster or sheet listing notifiable pig diseases, their signs and the official reporting number is posted in the unit, and every worker has been briefed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get the notifiable disease list and signs from the veterinary authority"
                - "Save the official disease reporting number in your phone"
                - "Post the signs and the number at the unit entrance"
                - "Brief every worker and family member who feeds the pigs"
            - name: Farrowing crates or free farrowing pens
              description: |-
                ## Purpose
                Crates cut piglet crushing and take less space, but cost more, restrict the sow and are under pressure from some buyers and welfare rules; open pens are cheaper and kinder but need more space, good design and skilled management. Deciding which suits your unit, budget and buyers before building or replacing farrowing accommodation avoids an expensive mistake.

                ## Milestones
                1. Current piglet crushing losses worked out from your records.
                2. Crates, pens with protection rails and other designs compared on cost, space, losses and welfare.
                3. Your buyers and the local welfare rules checked for any restrictions.
                4. A decision recorded with the number of places and a budget.

                ## Notes
                Start from the **Purchase decision** template. Visit a farm using each system before you choose; good management matters more than the design.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the farrowing system, the number of places and the budget, based on your crushing losses and buyer requirements."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Work out piglets crushed per litter from your sow cards"
                - "Visit one farm using crates and one using open pens"
                - "Ask your buyers whether they have welfare requirements"
                - "Record the decision and budget in a Purchase decision page"
            - name: Selling weaners or finishing your own pigs
              description: |-
                ## Purpose
                Some units do best selling weaners to finishers and keeping only sows; others make more by growing every pig to slaughter weight. The answer depends on feed prices, space, the weaner price, labour and whether you have a reliable buyer for finished pigs, and it is worth working out with your own figures rather than copying a neighbour.

                ## Milestones
                1. Local weaner prices and finished pig prices gathered from at least three buyers.
                2. The feed and other costs of growing a weaner to slaughter weight estimated from your records.
                3. Space and labour needed for each option compared with what you have.
                4. A decision recorded, with the price changes that would make you switch.

                ## Notes
                Many farms do both, selling surplus weaners when feed is dear and finishing more when pork prices are high before Christmas.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison shows the margin per weaner sold against per finished pig sold, with the chosen option and the prices that would trigger a switch."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask three buyers what they pay for weaners and finished pigs"
                - "Estimate the cost of growing one weaner to slaughter weight"
                - "Compare the space and labour each option needs"
                - "Write the decision and the switching prices on one page"
            - name: Keeping a boar or using AI
              description: |-
                ## Purpose
                Keeping a boar costs feed every day, takes a pen, can be dangerous and may bring disease if bought from the wrong herd, but he is always there and makes heat detection easy. Artificial insemination gives access to better genetics with less risk but depends on semen supply and skill. Comparing the true cost per litter of each settles a question many small units never decide on purpose.

                ## Milestones
                1. The yearly cost of keeping a boar worked out: purchase, feed, pen space, vet and replacement.
                2. The cost per litter of AI worked out: semen, delivery, storage, catheters and time.
                3. Semen supply reliability checked, including what happens when deliveries are late.
                4. A decision recorded, including whether a teaser boar is kept for heat detection.

                ## Notes
                Sharing a boar with neighbours saves money but carries real disease risk; if you do, agree health rules in writing first.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on boar, AI or both is recorded with a cost per litter for each option."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up a year of costs for keeping your current or planned boar"
                - "Get semen prices and delivery terms from a supplier"
                - "Work out cost per litter for each option"
                - "Write down the decision and how heat detection will be done"
            - name: Biogas digester for pig manure
              description: |-
                ## Purpose
                Pig manure is one of the best feedstocks for small biogas digesters, which can supply cooking gas or run a heat lamp, cut smell and flies, and leave a liquid that is easier to spread on crops. Whether it pays depends on herd size, water use, what the gas replaces and maintenance, so it is worth a careful study before buying.

                ## Milestones
                1. Daily manure volume and the number of pigs that would feed the digester estimated.
                2. Two or three digester types and suppliers compared on cost, size and maintenance.
                3. A use for the gas identified, such as cooking, water heating or piglet heat lamps.
                4. Any permit or safety requirement checked with the relevant authority.
                5. A decision recorded with a payback estimate.

                ## Notes
                Biogas is flammable and the gas can be dangerous in enclosed spaces. Use an installer who provides training and a written maintenance routine.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written study compares at least two digester options with costs, gas use and payback, and records a go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Estimate daily manure available from your herd"
                - "Ask the extension office or energy agency for digester suppliers"
                - "Visit a farm already running a digester on pig manure"
                - "Write the payback estimate and decision"
            - name: Pen floors, slopes and drainage upgrade
              description: |-
                ## Purpose
                Rough or broken concrete lames pigs, smooth floors make them slip, and pens with no fall hold urine that rots feet and breeds flies. Fixing floors and slopes pen by pen, so dung and water run to one side and away, makes cleaning faster, cuts lameness and helps the manure plan work.

                ## Milestones
                1. Every pen floor rated for surface, cracks, slope and where water pools.
                2. A priority list of pens to repair, starting with farrowing and nursery pens.
                3. Repairs designed with a fall towards a dunging channel away from the lying area.
                4. The first priority pens repaired and checked after a wash-down.

                ## Notes
                A lightly brushed concrete finish gives grip without wearing feet. Plan repairs between batches so each pen is empty and can cure fully.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every pen floor is rated, and at least the farrowing and nursery pens are repaired with a fall that drains clear after hosing."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Hose each empty pen and note where water pools"
                - "Rate every floor for grip, cracks and slope"
                - "Get a mason's quote for the first three priority pens"
                - "Repair pens between batches and recheck drainage after a wash-down"
            - name: Gilt replacement and sow culling policy
              description: |-
                ## Purpose
                Sow herds age, and without a plan the unit ends up with many old sows producing smaller litters, or too many young gilts at once. A written policy on which sows to cull and when, how many gilts to bring in a year, and whether to breed or buy them keeps the herd's age and performance steady.

                ## Milestones
                1. The sow herd's parity spread worked out from sow cards.
                2. Culling rules agreed, such as repeated small litters, failure to conceive, lameness or poor mothering.
                3. A yearly number of replacement gilts set from the culling rate.
                4. A decision on breeding your own gilts or buying them, with a health rule for bought stock.

                ## Notes
                Bought gilts are a leading way disease enters a unit. Ask your vet about quarantine and acclimatisation before mixing them with the herd.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written culling and replacement policy states the culling rules, the yearly gilt number and the source of replacements."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count sows by number of litters from the sow cards"
                - "Write culling rules and check them with the vet"
                - "Work out how many gilts you need each year"
                - "Decide whether to breed or buy gilts and set a quarantine rule"
            - name: Swill and food waste feeding rules
              description: |-
                ## Purpose
                Feeding kitchen waste, hotel scraps or restaurant leftovers to pigs is cheap and traditional, but uncooked swill containing meat is the classic route for African swine fever and foot and mouth disease, and many countries restrict or ban it. Knowing exactly what the law allows where you farm, and stopping anything that puts the herd and the district at risk, protects everyone's pigs.

                ## Milestones
                1. The current rules on feeding food waste to pigs confirmed with the veterinary authority.
                2. Every food waste source you use or are offered listed, with whether it contains meat.
                3. Any non-compliant feeding stopped and replaced with an allowed feed.
                4. Workers and suppliers told the rule in writing.

                ## Notes
                Where swill is allowed, it is usually only after approved heat treatment. A bag of hotel scraps is not worth the herd.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The veterinary authority's rules on food waste are recorded, every waste source is checked against them and only permitted feeds are in use."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the veterinary authority what food waste may be fed to pigs"
                - "List every food waste source you use or have been offered"
                - "Stop any waste feeding that breaks the rules"
                - "Tell workers and waste suppliers the rule in writing"
            - name: Upgrading power backup for the farrowing house
              description: |-
                ## Purpose
                One power cut on a cool night can chill a litter under a dead heat lamp, and a long outage stops pumps, fans and the semen store. Working out which loads must keep running, and choosing between a generator, a battery system or solar for them, protects the most valuable part of the unit through storms and grid failures.

                ## Milestones
                1. Every electrical load in the unit listed with its wattage and how critical it is.
                2. The essential loads totalled: pumps, heat lamps, fans and any semen storage.
                3. Generator, battery and solar options compared on cost, running time and maintenance.
                4. A backup chosen, installed safely by a qualified electrician and tested.

                ## Notes
                Never run a generator inside a pig house or near an air intake. Test the backup monthly under load, not just by starting it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backup power source covering every essential load is installed by a qualified electrician and has passed a load test."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every electrical load on the unit with its wattage"
                - "Mark which loads must run in an outage"
                - "Get quotes for a generator and a battery or solar system"
                - "Have the chosen backup installed and tested under load"
            - name: First farrowing of a new gilt batch
              description: |-
                ## Purpose
                Gilts farrowing for the first time are nervous, often farrow at night, and lose more piglets than older sows. Preparing the pens, the kit and the people for the first batch's due week, and being present at every farrowing, sets the gilts up as mothers for the rest of their working life.

                ## Milestones
                1. Due dates for every gilt confirmed on the breeding calendar.
                2. Farrowing pens cleaned, rested and fitted with creep heat before the gilts move in.
                3. Gilts moved in on the date the vet's plan sets, and fed and watered in the new pen.
                4. Someone present or checking regularly through each farrowing, including at night.
                5. Every litter recorded on the gilt's new sow card within a day.

                ## Notes
                Moving gilts into the farrowing pen early lets them settle. A quiet radio and the same handler every day help nervous gilts.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every gilt in the batch farrows in a prepared pen with someone in attendance, and each litter is on her sow card within a day."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Confirm every gilt's due date on the calendar"
                - "Clean and prepare the farrowing pens a week before the first due date"
                - "Arrange a night check rota for farrowing week"
                - "Record each litter on the gilt's sow card"
            - name: First finisher batch to the abattoir
              description: |-
                ## Purpose
                Sending your first batch to a licensed abattoir is where weights, paperwork, transport and withdrawal periods all meet a deadline. Getting it right means the pigs arrive calm and clean, nothing is condemned for residues, and you receive a carcass weight and grade you can learn from.

                ## Milestones
                1. The abattoir's booking process, required documents and accepted weight range confirmed.
                2. Every pig in the batch checked against the medicine record for withdrawal periods.
                3. Transport booked in a suitable vehicle, with a loading time that avoids the midday heat.
                4. Pigs delivered with the right paperwork and the kill sheet received.
                5. Carcass weights and any condemnations compared with your liveweight estimates.

                ## Notes
                Feed is often withheld for a period before slaughter to reduce gut fill and contamination; ask the abattoir and your vet for their rule. Never send a pig still inside a medicine withdrawal period.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A batch is delivered with complete paperwork, no pig inside a withdrawal period, and the kill sheet is filed beside your liveweight estimates."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the abattoir to ask about booking, paperwork and weight range"
                - "Check every pig in the batch against the medicine record"
                - "Book transport for an early morning loading"
                - "File the kill sheet and compare carcass and live weights"
            - name: Christmas pork season sales plan
              description: |-
                ## Purpose
                Across much of the Caribbean, demand for pork and ham peaks in December, and prices with it, then drops sharply in January. Planning breeding months ahead so a batch reaches the right weight in early December, and taking orders from butchers and families in good time, captures the year's best prices without being left with heavy pigs in the new year.

                ## Milestones
                1. Last year's December sales and prices reviewed, or local prices gathered if this is your first year.
                2. The number of pigs to have ready for December and the weight buyers want decided.
                3. Services or weaner purchases timed back from early December.
                4. Orders and deposits taken from regular buyers by late November.
                5. Abattoir or butcher slots booked early, before the rush.

                ## Notes
                Abattoirs and butchers are fully booked in the last two weeks before Christmas. Take a deposit on every private order.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planned number of pigs reaches target weight by early December, with orders and slaughter slots booked before December begins."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Look up last December's pig sales and prices"
                - "Decide how many pigs to have ready and at what weight"
                - "Work back from early December to the service or purchase dates"
                - "Message regular buyers to take Christmas orders and deposits"
                - "Book abattoir or butcher slots for the second week of December"
            - name: Preparing for an environmental health inspection
              description: |-
                ## Purpose
                Complaints about smell or flies usually leads to a visit from the public health or environmental authority, and a poor first impression can bring notices with short deadlines. Getting the unit inspection-ready, with the manure plan, permits, rodent log and cleaning records to hand, turns the visit into a routine check rather than the start of a dispute.

                ## Milestones
                1. The authority's inspection criteria for livestock premises obtained.
                2. The unit walked as an inspector would, with problems listed and fixed or scheduled.
                3. A folder ready with permits, the manure plan, rodent and fly logs and cleaning records.
                4. The inspection completed and any required actions written into a remediation plan with dates.

                ## Notes
                Start from the **Remediation plan** template for any actions the inspector requires. Talk to the neighbour who complained if you can; fixing the actual nuisance matters more than winning the argument.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An inspection folder is assembled and any actions from the inspection are in a dated remediation plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the authority for its inspection criteria for pig units"
                - "Walk the unit downwind and note smells, flies and runoff"
                - "Put permits, the manure plan and logs in one folder"
                - "Write any required actions into a Remediation plan with dates"
            - name: Swine fever outbreak drill for the unit
              description: |-
                ## Purpose
                If African swine fever or another notifiable disease is confirmed in your district, movement bans start immediately, sales stop, and you may be told to keep every pig on the farm for weeks. Running a short drill now, deciding who does what, how feed, water and manure will be managed under lockdown and what records the authorities will ask for, makes that day survivable.

                ## Milestones
                1. The likely actions of the veterinary authority in an outbreak learned from its published guidance or an officer.
                2. A one-page plan naming who reports, who stops movements and who manages feed, water and manure.
                3. Feed and space needs estimated for holding all pigs on the farm for six weeks.
                4. The herd register, visitor book and sales records confirmed up to date for tracing.
                5. The drill talked through with everyone who works on the unit.

                ## Notes
                Start from the **Risk register** template to list what would fail first. Compensation schemes, where they exist, usually depend on early reporting and good records.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page outbreak plan exists, has been talked through with everyone on the unit, and the six-week holding needs are estimated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the veterinary authority what happens on a farm in an outbreak zone"
                - "Write a one-page plan with names against each job"
                - "Estimate feed and space to hold all pigs for six weeks"
                - "Talk the plan through with everyone who works on the unit"
                - "Rerun the drill with the team and update the plan @recurring(yearly)"
            - name: Starting a small unit with two or three sows
              description: |-
                ## Purpose
                Many pig businesses begin in a back yard with a couple of sows, and the early mistakes of cheap gilts from unknown herds, pens too close to the house and no buyer lined up are hard to undo. Starting small on purpose, with healthy stock, proper pens, a vet contact and a known buyer for weaners, gives a base that can grow.

                ## Milestones
                1. A site chosen that meets setback rules and has water and drainage.
                2. Pens built for the sows, a farrowing pen and a pen for weaners.
                3. Two or three healthy gilts bought from a herd with a known health record.
                4. A buyer for weaners or finished pigs agreed before the first litter.
                5. First litters weaned and the results written on sow cards.

                ## Notes
                Buy all your starting gilts from one good source rather than several cheap ones. A small unit still needs registration if your country requires it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two or three gilts from a known-health herd are housed in purpose-built pens, a buyer is agreed and the first litters are weaned and recorded."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Check the setback distances for pigs where you live"
                - "Sketch pens for sows, farrowing and weaners"
                - "Find a breeder who can show the herd's health record"
                - "Agree a buyer for weaners before the first service"
            - name: Scaling from ten to fifty sows
              description: |-
                ## Purpose
                Growing a pig unit fivefold changes almost everything: manure volume, permits, labour, feed buying, the need for batch farrowing and the size of the cash gap before more pigs are sold. Planning the steps, rather than adding sows whenever pens allow, keeps performance from collapsing as numbers rise.

                ## Milestones
                1. The extra pens, feed storage, water and manure capacity for fifty sows worked out.
                2. Permits and registrations checked for the larger herd size.
                3. Labour needs and who will do each job written down.
                4. A cash flow covering the months before extra pigs are sold, discussed with your lender.
                5. The expansion staged in phases with performance checks before each step.

                ## Notes
                Expand breeding numbers only when finishing space and buyers are ready to take the extra pigs; otherwise you will be selling weaners cheap.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A phased expansion plan covers pens, manure, permits, labour, cash flow and buyers for fifty sows, with a performance check before each phase."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Work out pen, feed and water needs for fifty sows"
                - "Ask the authorities whether a larger herd needs new permits"
                - "Write down who will do each job at the new size"
                - "Draft a cash flow for the expansion and take it to your lender"
                - "Split the expansion into phases with a check before each"
            - name: Running a finishing-only pig unit
              description: |-
                ## Purpose
                Buying weaners and growing them to slaughter weight avoids breeding work, but the profit rests on paying the right price for healthy weaners and getting good feed conversion. A finishing unit needs reliable weaner sources, strict quarantine and batch records that show margin per pig.

                ## Milestones
                1. Two or three weaner suppliers with known health status and consistent weights.
                2. A receiving routine for each batch: inspection, weighing, settling pen and observation.
                3. Each batch recorded from arrival to sale with weights, feed, losses and margin.
                4. A target buying price per weaner set from your margin records.

                ## Notes
                Mixing weaners from several sources in one pen is a common way to bring in disease. Buy each batch from one source where you can.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three batches are recorded from arrival to sale with weights, feed, losses and margin per pig, from no more than three known suppliers."
                cadence: cyclic
              tasks:
                - "List weaner suppliers and ask each about herd health"
                - "Write a receiving routine for new batches"
                - "Start a batch record from arrival to sale"
                - "Set a maximum weaner price from the margin of the last batch"
            - name: Pig keeping with a day job and family help
              description: |-
                ## Purpose
                Many pig units are run before and after another job, with a spouse, a parent or teenagers feeding at midday. That works when everyone knows the routine, the jobs are split fairly and someone with authority to call the vet is always reachable, and fails when the person who knows the sows is away.

                ## Milestones
                1. A written list of daily, weekly and monthly pig jobs.
                2. Each job assigned to a family member or helper by time of day.
                3. Short written instructions for feeding, water checks and sick pig signs.
                4. A rule for who calls the vet and who pays when the main keeper is out of reach.

                ## Notes
                Children helping with pigs should never enter boar pens or farrowing pens alone. Keep farrowing weeks for days you can be at home.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly rota names who does each pig job, written instructions are posted, and the vet contact rule is agreed by the family."
                cadence: rolling
              tasks:
                - "Write every pig job on a list with how often it is done"
                - "Agree with the family who does which job and when"
                - "Post short feeding and checking instructions in the feed store"
                - "Set the coming week's pig rota with the family @recurring(weekly:sun)"
            - name: Bringing an idle pig unit back into use
              description: |-
                ## Purpose
                Old pig pens left empty after a disease, a death in the family or a price slump often still have good walls but broken drainage, rusted gates and leftover contamination. Restarting safely means repairing, cleaning thoroughly, checking permits and restocking with healthy pigs, rather than putting new pigs into old problems.

                ## Milestones
                1. The buildings, roofs, floors, drains and water supply surveyed and repairs priced.
                2. The reason the unit stopped found out, especially if it was disease.
                3. Pens cleaned, disinfected and left empty for the period the vet advises.
                4. Permits and registration checked or renewed.
                5. The first pigs bought from a known-health source and their progress recorded.

                ## Notes
                If the unit was emptied because of disease, ask the vet how long it should stand empty and what testing, if any, is needed before restocking.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The unit is repaired, cleaned, rested for the period the vet advises and restocked from a known-health source, with permits current."
                cadence: phased
                effort_hours_estimate: "50"
              tasks:
                - "Walk the old unit and list every repair needed"
                - "Ask former keepers or neighbours why pigs were stopped"
                - "Clean and disinfect the pens and agree a rest period with the vet"
                - "Check the old registration and renew it if needed"
            - name: Supplying a pork processor to carcass specification
              description: |-
                ## Purpose
                Processors making ham, bacon and sausages pay on carcass weight and grade, often with penalties for pigs too heavy, too light or too fat. Meeting their specification consistently, and using the grading feedback they send, can lift the price of every pig and turn an occasional sale into a steady contract.

                ## Milestones
                1. The processor's specification obtained in writing: weight range, fat limits, grading and penalties.
                2. Grading results for your last batches compared with the specification.
                3. Causes of out-of-specification pigs identified, such as feed, genetics or selling weight.
                4. Changes made and the next three batches' grades tracked.
                5. Delivery schedule and volumes agreed with the processor.

                ## Notes
                Weigh pigs before selection for each load; a few kilograms over the weight band can cost more than the extra feed was worth.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The processor's written specification is on file and the share of pigs graded within specification is tracked for three batches."
                cadence: rolling
              tasks:
                - "Ask the processor for their carcass specification and penalty table"
                - "Compare your last grading sheets with the specification"
                - "Weigh every pig before selecting each load"
                - "Track the share of pigs in specification batch by batch"
            - name: Batch farrowing in three-week cycles
              description: |-
                ## Purpose
                Farrowing a group of sows together every three weeks, instead of a sow every few days, makes all-in all-out cleaning possible, concentrates labour on known weeks and produces even batches of pigs that suit buyers. Converting takes planning around weaning and service dates, but most growing units find it pays in health and time.

                ## Milestones
                1. The batch interval and group size chosen to suit your farrowing places and sow numbers.
                2. Each sow assigned to a batch on the breeding calendar.
                3. Weaning dates adjusted to bring sows into the right batch, with advice from the vet.
                4. Two full batches farrowed on schedule.
                5. Pen use and labour compared before and after.

                ## Notes
                Some units use hormone products to synchronise heats; that is a vet's decision, not a calendar trick.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two full batches of sows have farrowed within their planned week, with every sow assigned to a batch on the calendar."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count farrowing places and sows to choose a batch size"
                - "Assign every sow to a batch on the calendar"
                - "Agree with the vet how to move sows into the right batch"
                - "Compare pen use and labour after two batches"
            - name: Selling breeding gilts and boars with records
              description: |-
                ## Purpose
                Units with good health, good records and proven sows can sell breeding stock at well above slaughter value. Doing it responsibly means only selling animals with documented health, parentage and performance, and being honest about what the buyer is getting.

                ## Milestones
                1. Health status of the herd documented with the vet.
                2. Selection rules for breeding stock written: sow performance, legs, teats and growth.
                3. A record sheet for each animal sold, showing parentage, dam's litters and treatments.
                4. A price list and sale note template ready.
                5. First breeding animals sold with full records handed over.

                ## Notes
                Your reputation as a breeding stock seller rests on the first disease problem a buyer traces back to you. Sell only from a herd your vet is happy to vouch for.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Breeding stock is sold only with a record sheet showing parentage, dam's performance and treatments, backed by a vet's note on herd health."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the vet whether the herd's health supports selling breeding stock"
                - "Write selection rules for gilts and boars to sell"
                - "Make a record sheet showing parentage and dam's litters"
                - "Draft a sale note and price list for breeding animals"
            - name: Antibiotic use and withdrawal records
              description: |-
                ## Purpose
                Buyers, abattoirs and regulators are paying closer attention to antibiotic use and residues in pork, and a pig sent to slaughter inside a withdrawal period can be condemned and damage your name with the buyer. Recording every treatment, using antibiotics only on the vet's advice and checking withdrawals before sale protects both the herd and the market.

                ## Milestones
                1. A medicine record in use for every treatment: date, pig or pen, product, batch, amount given, by whom and withdrawal end date.
                2. Antibiotics only used on the vet's diagnosis or written plan.
                3. Withdrawal end dates checked before every sale or slaughter.
                4. Medicine stock counted and expired products returned or disposed of as advised.

                ## Notes
                Ask the vet each year which treatments could be reduced through better hygiene, vaccination or management. Store medicines locked, cool and away from feed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every treatment for six months is in the medicine record with a withdrawal end date, and no pig has been sold inside a withdrawal period."
                cadence: rolling
              tasks:
                - "Start a medicine record with a withdrawal end date column"
                - "Ask the vet which antibiotics are in the herd health plan and why"
                - "Check the medicine record before every sale or load"
                - "Count medicine stock and check expiry dates @recurring(quarterly)"
            - name: Genetic selection within your own sow herd
              description: |-
                ## Purpose
                Once sow cards and weights have built up for a few years, you can pick replacement gilts from your best sows instead of at random. Using a simple selection index from litter size, piglets weaned, growth and conformation lets an experienced unit improve its herd year on year at little cost.

                ## Milestones
                1. Two or more years of sow card and growth records gathered.
                2. A simple index chosen that weights litter size, weaning results and growth.
                3. Every sow ranked by the index, with the top quarter identified.
                4. Replacement gilts selected only from top-ranked sows.
                5. Results of selected gilts compared with herd averages after their first litters.

                ## Notes
                Ask a livestock breeding adviser or your extension service to check your index. Inbreeding creeps in fast in small herds, so bring in new boar or semen lines regularly.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every sow is ranked by a written selection index, replacement gilts come only from the top quarter, and their first litters are compared with herd averages."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Gather two years of sow cards and growth records"
                - "Choose a simple index and check it with a breeding adviser"
                - "Rank every sow by the index"
                - "Select replacement gilts only from top-ranked sows"
---

# Pig Farming

Pig Farming is for anyone raising pigs as a business in the Caribbean, from the backyard keeper with two sows and a borrowed boar to the farmer running fifty sows and selling finishers to a processor every fortnight. The projects start with the foundations: a pen layout, identified pigs, registration, a vet's herd health plan, a biosecurity line, a manure plan and a cost baseline. Then come the daily, weekly and monthly routines of the unit, the stockmanship skills behind more weaned piglets, decisions on crates, boars, feed and swill, the dated events of first farrowings, abattoir deliveries and the Christmas pork season, situations such as finishing-only or part-time units, and specialist work on batch farrowing, carcass specifications and selling breeding stock.

What repeats is the daily walk of every pen, heat checks on weaned sows, the twice-weekly footbath, weekly feed counts, drinker and rodent rounds, monthly weighing, sow cards, condition scores, performance and sales reviews, and yearly registration, health plan and outbreak drill. The Operational checklist, Metrics log, Purchase decision, Risk register and Remediation plan templates pair with the projects that name them. Every vaccine, wormer, antibiotic and disinfectant decision goes through your vet and the product label, never a dose from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
