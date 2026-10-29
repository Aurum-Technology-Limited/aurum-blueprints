---
id: agriculture.hurricane-resilience-on-the-farm
name: Hurricane Resilience on the Farm
description: "A farm ready for June to November: a written storm plan, crops timed around the peak months, windbreaks and strapped roofs, animals sheltered or moved, seed, feed and fuel stored dry, and a recovery plan for the morning after."
category: business
version: 1.0.0
tags: [agriculture, hurricane-resilience-on-the-farm, small-business, hurricane-season, windbreaks, storm-recovery, caribbean, disaster-preparedness]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - operational-checklist
    - remediation-plan
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hurricane Resilience on the Farm
          description: "Preparing a farm for hurricane season: crop timing, windbreaks, securing structures, shelter and evacuation for animals, seed and feed stores, and recovery plans."
          projects:
            - name: Hurricane risk map of your own farm
              description: |-
                ## Purpose
                Wind, flood and falling trees hit some parts of a farm far harder than others: the exposed ridge, the low corner by the ravine, the mango tree leaning over the pen. Walking the whole property with a sketch map and marking each hazard turns a vague worry into a list you can work through before the first storm of the season.

                ## Milestones
                1. A sketch or printed satellite map of the farm with boundaries, buildings, pens, ponds, stores and access roads marked.
                2. Exposed slopes, low ground that floods and trees that could fall on buildings or lines circled on the map.
                3. Each hazard listed with a likelihood and a consequence score.
                4. The five highest-scoring hazards each given an owner and a fix-by month.

                ## Notes
                Start from the **Risk register** template. Walk the farm after heavy rain as well as on a dry day, because the water tells you where it goes in a storm.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A farm map marking every major wind, flood and tree hazard, with the top five each assigned an owner and a fix-by month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print a satellite image of the farm or sketch it on one sheet"
                - "Walk the boundary and mark exposed ridges, low ground and leaning trees"
                - "Score each hazard for likelihood and consequence in a risk register"
                - "Pick the five worst hazards and give each a fix-by month"
            - name: One-page farm hurricane plan
              description: |-
                ## Purpose
                When a warning goes up, nobody reads a thick binder; people need one sheet on the store room door that says who does what, in what order, and where everyone goes. A plan that fits on one page also gets read by workers, family and the neighbour who feeds the animals if you are stuck in town.

                ## Milestones
                1. One page listing actions at five days out, at the watch, at the warning, during the storm and after.
                2. A named person against every action, with a back-up name.
                3. Safe shelter for people and the meeting point after the storm written in.
                4. Laminated copies posted in the store, the house and with the main helper.

                ## Notes
                Keep people first on the page. Crops and animals come after the safety of everyone on the farm.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page plan naming an owner for every action from five days out to after the storm, posted in at least two places."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every action you took or wished you had taken in the last storm"
                - "Group the actions into five days out, watch, warning, storm and after"
                - "Put a name and a back-up name against each action"
                - "Laminate copies for the store room, the house and your main helper"
                - "Reread and update the one-page plan before the season opens @recurring(yearly)"
            - name: Farm calendar built around the hurricane season
              description: |-
                ## Purpose
                Atlantic storms are possible from June to November, but the busiest stretch for most islands is mid August to late October. Laying planting, harvest, breeding and purchase dates against those months shows where your money is most exposed and where a few weeks of shifting would take crops and young animals out of the riskiest window.

                ## Milestones
                1. A twelve-month calendar showing the season and the peak weeks shaded.
                2. Every crop's planting and harvest window and every planned birth or batch placed on it.
                3. The items with the most value in the field during the peak months highlighted.
                4. At least two dates moved, or a reason written for leaving them.

                ## Notes
                Your extension officer or local meteorological service can tell you which months have brought the most storms to your island over the past decades.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month farm calendar with the peak storm weeks shaded and at least two exposure decisions recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shade June to November and the August to October peak on a year calendar"
                - "Mark every crop's planting and harvest window on the calendar"
                - "Add planned kiddings, farrowings, chick placements and fish harvests"
                - "Circle the three items with most value exposed in the peak weeks"
            - name: Pre-season photo and video record of the farm
              description: |-
                ## Purpose
                After a storm, a damage officer, a lender or a grant scheme will ask what was there before, and memory is not evidence. A dated walk-through on video, with photographs of buildings, equipment serial plates, fields and animals, makes every later report and claim faster and harder to dispute.

                ## Milestones
                1. A narrated video walking every field, building and pen, recorded before June.
                2. Photographs of each machine's serial plate, each roof and each water tank.
                3. Livestock headcount photographed by pen and the numbers written down.
                4. The files copied to cloud storage and a second device off the farm.

                ## Notes
                Say the date and what you are filming out loud at the start of each clip. Phone metadata can be lost when files are shared.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated video and photo set of every field, building, machine and pen, stored in two places off the farm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Charge the phone and plan a walking route through every field and building"
                - "Film each block, roof and pen while saying the date and location aloud"
                - "Photograph every machine serial plate and every water tank"
                - "Copy all files to cloud storage and to a relative's device"
                - "Refresh the farm photo and video record each May @recurring(yearly)"
            - name: Storm contact list and phone tree
              description: |-
                ## Purpose
                Phone networks often fail for hours or days after a hurricane, and the numbers you need are usually stored only on the phone that is flat. A printed list of the people who matter, with a simple order of who calls whom, keeps workers, family, the vet and buyers informed even when signal comes and goes.

                ## Milestones
                1. Numbers collected for workers, family, neighbours, the vet, the extension officer, the national disaster office and main buyers.
                2. A phone tree drawn so each person calls two others after the storm.
                3. A printed copy in the grab box and a photo of it on two phones.
                4. Every person on the list told they are on it and what is expected of them.

                ## Notes
                Add a radio station that carries local emergency announcements, and agree a WhatsApp group in case data comes back before voice.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed storm contact list and phone tree, in the grab box and on two phones, with every person on it informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down numbers for workers, neighbours, the vet and the extension office"
                - "Look up the national disaster office and the local police station numbers"
                - "Draw a phone tree where each person calls two others"
                - "Message everyone on the list to confirm the number and their role"
            - name: Watch and warning action triggers
              description: |-
                ## Purpose
                In most Caribbean warning systems, a hurricane watch means hurricane conditions are possible in your area, usually within about 48 hours, and a warning means they are expected, usually within about 36 hours. Deciding in advance what the farm does at each stage stops the last-minute scramble where the poultry curtains, the pumps and the harvest all compete for the same two people.

                ## Milestones
                1. Two or three trusted alert sources chosen, such as the national meteorological service and a regional hurricane centre.
                2. A trigger list stating what the farm does at five days out, at the watch and at the warning.
                3. The jobs that take longest, such as early harvest and dropping shade cloth, placed at the earliest trigger.
                4. The trigger list added to the one-page plan.

                ## Notes
                Always follow your national meteorological service and disaster office for official watches and warnings. Social media forecasts are often wrong.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of farm actions tied to five days out, the watch and the warning, built into the one-page plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose two official sources for watches and warnings in your country"
                - "Turn on alerts from those sources on your phone"
                - "Time how long early harvest, shade cloth removal and pen work each take"
                - "Assign each job to the earliest trigger that leaves enough time"
            - name: Farm hurricane supplies kit
              description: |-
                ## Purpose
                Tarpaulins, rope, ratchet straps and fuel sell out within hours of a watch, and prices climb with every bulletin. Buying a farm kit in the quiet months, stored in one place, means the warning day is spent using supplies rather than queueing for them.

                ## Milestones
                1. A list of farm supplies: tarps, rope, ratchet straps, nails and screws, plywood, a chainsaw and spare chain, fuel cans, torches, batteries and a first aid kit.
                2. Quantities worked out from the number of roofs, pens and doors to protect.
                3. Everything bought and stored together in a dry, raised spot.
                4. A contents sheet taped inside the store door.

                ## Notes
                Store fuel only in approved containers, away from the house and animal feed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete farm hurricane kit stored in one dry place, with a contents sheet on the door."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count the roofs, doors, pens and windows that need protecting"
                - "Write the supplies list with quantities against each item"
                - "Buy the kit in April or May before prices rise"
                - "Store it together on pallets and tape a contents list inside the door"
            - name: Waterproof grab box of farm documents
              description: |-
                ## Purpose
                Leases, land papers, farmer registration cards, animal ownership records and equipment receipts are what agencies ask for when relief or replacement is offered. Kept in a sealed box that leaves with you, they survive a flooded house and save weeks of chasing copies afterwards.

                ## Milestones
                1. A sealed waterproof box or dry bag bought.
                2. Originals or certified copies of land, lease, registration, livestock and equipment documents inside.
                3. Scans of every document stored in the cloud.
                4. The box's place in the house and who carries it written on the one-page plan.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sealed box holding farm ownership, lease, registration and equipment papers, with scans in cloud storage."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Buy a sealable waterproof box or dry bag"
                - "Gather land, lease, farmer registration and livestock papers"
                - "Scan each document with your phone and upload the scans"
                - "Note on the plan where the box lives and who takes it"
            - name: What to save first on the farm
              description: |-
                ## Purpose
                With only a day of warning and two pairs of hands, you cannot protect everything, so the order matters. Ranking animals, crops, equipment and stores by value and by how easily each could be replaced turns a frantic day into a clear sequence everyone can follow.

                ## Milestones
                1. Every major asset listed with an estimated replacement cost and time to replace.
                2. Assets ranked into must save, save if time, and leave.
                3. The hours needed for each must-save item estimated.
                4. The ranked list added to the one-page plan.

                ## Notes
                Breeding stock, the seed store and the water pump usually rank higher than people expect, because they take longest to replace.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A ranked list of farm assets in three groups, with hours for each must-save item, added to the plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every animal group, crop block, machine and store on the farm"
                - "Estimate replacement cost and months to replace for each"
                - "Sort the list into must save, save if time, and leave"
                - "Add the must-save order and hours needed to the plan"
            - name: Choosing backup power for pumps and cold storage
              description: |-
                ## Purpose
                Power can be out for days or weeks after a direct hit, which stops irrigation and well pumps, aerators on fish ponds, incubators, egg coolers and freezers. Working out which loads truly need power, and choosing a generator, solar and battery set or a shared arrangement sized to them, keeps the most valuable stock alive.

                ## Milestones
                1. Every electrical load on the farm listed with its wattage and how long it can safely be off.
                2. The essential loads totalled to give a minimum generator or battery size.
                3. Two or three options compared on price, fuel use and running hours.
                4. A choice made and the unit installed with a safe transfer arrangement fitted by an electrician.

                ## Notes
                Start from the **Purchase decision** template. Never run a generator in a closed building or pen: exhaust fumes kill people and animals.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A backup power option chosen and installed, sized to a written list of essential farm loads."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the wattage plate on every pump, cooler, aerator and freezer"
                - "Mark which loads can be off for a day and which cannot"
                - "Get quotes for two generator sizes and one solar and battery option"
                - "Book a qualified electrician to fit a transfer switch"
            - name: May hurricane readiness inspection
              description: |-
                ## Purpose
                Roofs loosen, straps rust, drains silt up and kits get raided over twelve months, so a plan that was ready last year is not ready now. One thorough inspection in May, using the same checklist every year, catches the faults while there is still time and money to fix them.

                ## Milestones
                1. A standard inspection checklist covering roofs, straps, doors, trees, stores, kit and power.
                2. Every item on the farm checked and marked pass or fix.
                3. A fix list with costs and dates, finished before the end of June.
                4. The year's inspection sheet filed with the previous ones.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed inspection sheet each May, with every fix item closed or rescheduled by the end of June."
                cadence: cyclic
              tasks:
                - "Copy last year's inspection sheet or draft a new one"
                - "Climb or inspect every roof and check each strap and fixing"
                - "Price every fix and set a June completion date"
                - "Run the full farm readiness inspection @recurring(yearly)"
            - name: Monthly in-season farm checks
              description: |-
                ## Purpose
                Even a farm that passed inspection in May can slip back by September: a new pile of loose roofing, a blocked gutter, a full store with no room for the tractor. A short check once a month during the season keeps the farm close to ready without a big push every time a system forms.

                ## Milestones
                1. A ten-point monthly check covering loose items, gutters, stores, kit, fuel and access roads.
                2. Each month's check completed and dated from June to November.
                3. Any fix found closed within the same month.
                4. A running note of what slips most often, used to change habits.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six dated monthly checks from June to November, with each fix closed within its month."
                cadence: rolling
              tasks:
                - "Write a ten-point monthly in-season check on one card"
                - "Walk the farm with the card and fix what fails @recurring(monthly:3)"
                - "Clear loose sheeting, drums and offcuts that could become missiles @recurring(monthly:20)"
                - "Note which items fail most often and change the habit behind them"
            - name: Tree and branch trimming round
              description: |-
                ## Purpose
                Most structural damage on small farms comes from trees and limbs falling onto roofs, pens, fences and power lines. Trimming dead wood and heavy limbs near buildings on a regular round, and planning which large trees should come down, removes the threat before the wind does it for you.

                ## Milestones
                1. Every tree within falling distance of a building, pen, tank or line listed.
                2. Dead and overhanging limbs removed from the listed trees.
                3. Trees too large or close to lines referred to a qualified arborist or the power company.
                4. A trimming record kept with date and trees done.

                ## Notes
                Never cut near power lines yourself. Ask the power company, who often trim lines before the season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All listed trees near structures trimmed of dead and overhanging limbs, recorded each quarter."
                cadence: cyclic
              tasks:
                - "List every tree within falling distance of a roof, pen or line"
                - "Book an arborist or the power company for trees near lines"
                - "Trim dead and overhanging limbs from the listed trees @recurring(quarterly)"
                - "Stack or chip the cut wood away from buildings"
            - name: Seed, feed and fuel reserve rotation
              description: |-
                ## Purpose
                Roads close after a storm, and feed mills and agro shops may be shut or empty for a week or more. A reserve of animal feed, saved seed and fuel sized to two weeks, rotated so nothing goes stale or mouldy, carries the farm until supply returns.

                ## Milestones
                1. Two weeks of feed for every animal group calculated and stored.
                2. Seed for a quick replant of key crops stored dry and sealed.
                3. Fuel for the generator, chainsaw and vehicle for a week stored safely.
                4. A first in, first out rotation in place and checked each month.

                ## Notes
                Stack feed bags on pallets off the floor and away from walls, and keep seed in airtight containers in the coolest dry room you have.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of feed, a replant seed store and a week of fuel held at all times through the season, rotated monthly."
                cadence: rolling
              tasks:
                - "Work out two weeks of feed for each animal group by weight"
                - "Seal replant seed for your key crops in labelled airtight containers"
                - "Use the oldest feed and fuel first and top up the reserve @recurring(monthly:12)"
                - "Check stored seed for damp, weevils and mould"
            - name: Generator and pump test runs
              description: |-
                ## Purpose
                Left idle for six months, a generator often will not start when it is needed most, and a pump that has not run may have a seized seal. Running each unit under load every month, and servicing it on schedule, means the backup works on the morning after the storm.

                ## Milestones
                1. Each generator and backup pump listed with its service schedule.
                2. A monthly test run under load done and logged.
                3. Oil, filters and spark plugs changed on the manufacturer's schedule.
                4. Spare filters, plugs and oil kept with the unit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log showing a monthly loaded test run of every generator and backup pump, with services on schedule."
                cadence: rolling
              tasks:
                - "Find the service schedule in each generator and pump manual"
                - "Run each generator under load for twenty minutes @recurring(monthly:15)"
                - "Service generators and pumps to the manufacturer's schedule @recurring(quarterly)"
                - "Keep spare plugs, filters and oil in a box beside each unit"
            - name: 72-hour storm countdown checklist
              description: |-
                ## Purpose
                Once a system is three days out, the jobs come in a fixed order and the same ones get forgotten every year, like topping up water tanks or moving the tractor out from under trees. A countdown checklist worked from the top on every approaching storm makes preparation routine instead of improvised.

                ## Milestones
                1. A checklist with jobs grouped at 72, 48, 24 and 12 hours before landfall.
                2. Every job given an owner and an estimated time.
                3. The checklist used on at least one real or practice approach.
                4. Missed or late items added after each use.

                ## Notes
                Start from the **Operational checklist** template. Put early harvest and dropping shade cloth near the top, because they take longest.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A countdown checklist with owners and times, used on an approaching storm or drill and updated after each use."
                cadence: cyclic
              tasks:
                - "List every preparation job and how long it took last time"
                - "Group the jobs at 72, 48, 24 and 12 hours out"
                - "Name an owner for each group of jobs"
                - "Update the checklist within a week of each use"
            - name: Season briefing for farm workers
              description: |-
                ## Purpose
                Workers who know the plan act on their own when the owner is cut off, and workers who do not may stay on an exposed site or leave stock unsecured. A short briefing at the start of each season, including new and seasonal staff, covers their jobs, their own safety and how they will be paid if work stops.

                ## Milestones
                1. A briefing sheet covering roles, shelter, contact and pay arrangements during disruption.
                2. Every worker, including seasonal staff, briefed before June.
                3. Each worker's emergency contact recorded.
                4. Questions and concerns raised in the briefing answered in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every worker briefed on the hurricane plan before June each year, with signed or recorded attendance."
                cadence: cyclic
              tasks:
                - "Draft a one-page briefing sheet from the hurricane plan"
                - "Collect an emergency contact for every worker"
                - "Brief all workers on roles and shelter before the season @recurring(yearly)"
                - "Write answers to the questions workers raise and share them"
            - name: Weekly tropical outlook check
              description: |-
                ## Purpose
                Most systems that reach the islands are visible on the regional tropical weather outlook several days before a watch is issued. A Monday glance at the outlook through the season gives you the extra days that early harvest, buying supplies and moving animals need.

                ## Milestones
                1. The regional outlook and national meteorological service bookmarked on your phone.
                2. A Monday check made through the season and anything forming noted.
                3. A rule written for when a system triggers the five-day actions.
                4. Workers and family told the rule so they expect the call.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Monday outlook check kept from June to November, with a written rule for starting five-day actions."
                cadence: rolling
              tasks:
                - "Bookmark the regional tropical outlook and your meteorological service"
                - "Check the tropical outlook for systems heading your way @recurring(weekly:mon)"
                - "Write the rule that starts the five-day actions"
                - "Tell workers and family what the rule is"
            - name: How wind, surge and rain hit a farm
              description: |-
                ## Purpose
                Wind speed gets the headlines, but on many farms the worst losses come from days of rain, flash floods, landslides and salt spray carried inland. Learning what each category and each hazard means for your land helps you put effort where your farm is actually exposed.

                ## Milestones
                1. The hurricane category scale and what each means for roofs, trees and crops understood.
                2. Your farm's exposure to storm surge, river flooding and landslide checked against official hazard maps where they exist.
                3. Salt spray and its effect on leaves and soil near the coast understood.
                4. A short note written on which hazard is your farm's biggest threat.

                ## Notes
                Many national disaster offices and planning departments publish flood and landslide hazard maps. Your extension officer can help you read them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note naming the farm's main storm hazard, based on the category scale and any official hazard maps."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain guide to the hurricane category scale"
                - "Ask the planning or disaster office for flood and landslide maps"
                - "Find where your farm sits on those maps"
                - "Write a short note on your farm's biggest storm hazard"
            - name: Why crops and buildings fail in high wind
              description: |-
                ## Purpose
                Tall shallow-rooted crops snap or topple, shade cloth acts like a sail, and roofs fail first at the edges and corners where fixings pull out. Knowing these failure points lets you spend a small budget on the weak links, such as roof edges and bunch props, rather than on the parts that rarely fail.

                ## Milestones
                1. The common failure points of farm roofs, walls and doors understood.
                2. The crops on your farm ranked by how badly wind damages them.
                3. Two or three photographs or accounts of failed structures studied for the cause.
                4. A list of the weak links on your own farm drawn up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of weak links on the farm, ranked, based on how roofs, covers and crops fail in wind."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a builder's guide on how roofs fail in hurricanes"
                - "Rank your crops from least to most wind sensitive"
                - "Study photos of damaged farm buildings from a past storm"
                - "List the weak links on your own buildings and fields"
            - name: Chainsaw safety and storm clean-up training
              description: |-
                ## Purpose
                Chainsaw injuries rise sharply after hurricanes, because tired people cut tangled, tensioned trees they have never handled before. Proper training, the right protective gear and a rule that nobody cuts alone make the clean-up safer for you and anyone who helps.

                ## Milestones
                1. A chainsaw course completed by everyone who will cut on the farm.
                2. Protective trousers, helmet with visor, ear defenders, gloves and boots bought for each operator.
                3. A rule agreed that nobody cuts alone or above shoulder height.
                4. Trees on lines and badly tangled trees referred to professionals.

                ## Notes
                Ask your extension office or a training provider about chainsaw courses. Tensioned wood can whip with enough force to kill.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every farm chainsaw operator trained and equipped with protective gear, with a written no-lone-cutting rule."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the extension office about chainsaw safety courses near you"
                - "Book a place on the course for each person who will cut"
                - "Buy protective trousers, helmet, ear defenders and gloves"
                - "Write and post the no-lone-cutting rule in the tool store"
            - name: Dropping shade cloth and greenhouse film before a storm
              description: |-
                ## Purpose
                A shade house or greenhouse with its cover on can be lifted and wrecked by winds it would survive bare, and the film or cloth is usually the cheapest part to save. Learning and practising how to drop, roll and store the covering quickly, before the warning, keeps the frame and the cover for the next crop.

                ## Milestones
                1. The manufacturer's or builder's advice on storm removal obtained.
                2. A method agreed for unclipping, rolling and tying down each cover.
                3. A timed practice removal done with the people who will do it.
                4. Rolls labelled and a dry store found for them.

                ## Notes
                Crops inside will be exposed once the cover comes off. Harvest what you can first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A timed practice removal of every greenhouse or shade house cover completed, with a written method and dry storage."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the structure supplier how they recommend removing covers before storms"
                - "Write the steps for unclipping and rolling each cover"
                - "Time a practice removal with your helpers"
                - "Label the rolls and clear a dry store for them"
            - name: Handling and moving animals in an emergency
              description: |-
                ## Purpose
                Frightened cattle, goats and pigs are hard to move and can injure handlers, especially in rain and poor light. Practising calm handling, loading and leading in the dry season, with the gates and ramps you will actually use, makes moving them on a warning day far quicker and safer.

                ## Milestones
                1. The route from each pen to the shelter or trailer walked and cleared.
                2. Gates, races and loading ramps checked for strength and repaired.
                3. Animals moved along the route at least once in calm conditions.
                4. Halters, ropes and torches stored where the move begins.

                ## Notes
                Ask your vet about handling and any travel needs for sick, pregnant or young animals.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each animal group moved along its emergency route at least once in calm conditions, with handling gear stored ready."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Walk and clear the route from each pen to the shelter"
                - "Repair weak gates, races and loading ramps"
                - "Move one group of animals along the route on a calm day"
                - "Hang halters, ropes and torches at the start of each route"
            - name: Learning from older farmers about past storms
              description: |-
                ## Purpose
                Farmers who lived through storms such as Ivan in Grenada, Maria in Dominica or Beryl in Carriacou and Jamaica know which fields flooded, which trees fell and how long recovery really took. A few conversations, written down, give you local lessons that no general guide can.

                ## Milestones
                1. Three older farmers or extension officers interviewed about past storms in your district.
                2. Notes on what they lost, what survived and what they would do differently.
                3. Lessons that apply to your farm picked out.
                4. At least one change made to your plan because of what you heard.

                ## Notes
                Bring a simple list of questions and offer to share what you learn with them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Notes from three conversations about past storms, with at least one resulting change written into the farm plan."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List three people in your district who farmed through a major storm"
                - "Write five questions about losses, survival and recovery"
                - "Visit or call each person and take notes"
                - "Change one thing in your plan based on what you heard"
            - name: Planting windbreaks and shelter belts
              description: |-
                ## Purpose
                Planted in the right place, a row of trees or tall grass slows wind across the field behind it for a distance of several times its height, cutting crop damage and soil loss in every storm. Planting it now, on the side the strongest winds usually come from, pays back for decades on any farm with exposed fields.

                ## Milestones
                1. The usual direction of strong winds and the most exposed fields identified.
                2. Windbreak species chosen with the extension officer for your soil and rainfall.
                3. The windbreak line marked, prepared and planted.
                4. Young windbreak plants watered and gaps replanted through the first year.

                ## Notes
                A windbreak that lets some wind through works better than a solid wall, which creates turbulence behind it.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A windbreak planted along the most exposed side of the farm, with at least nine in ten plants alive after a year."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the extension officer which windbreak species suit your area"
                - "Mark the windbreak line along the most exposed boundary"
                - "Order planting material and prepare the planting line"
                - "Water young windbreak plants and replace any losses @recurring(monthly:9)"
            - name: Timing crops around the peak storm months
              description: |-
                ## Purpose
                A field of tall corn or a heavy pepper crop due for harvest in September is far more exposed than the same crop picked in July. Shifting planting dates, choosing shorter-cycle varieties or leaving fields in low cover crops during the peak can halve what a storm can take from you.

                ## Milestones
                1. Each crop's days to harvest and wind sensitivity listed.
                2. Planting dates worked back so exposed crops finish before mid August or start after October.
                3. Low or short-cycle crops chosen for the peak months where land must stay planted.
                4. The new planting calendar agreed and buyers told about any change in supply.

                ## Notes
                Buyers may pay more for supply in the months after a storm, so a planting ready in November can be worth more than one in September.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised planting calendar keeping high-value, wind-sensitive crops out of the peak months, shared with buyers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each crop with its days to harvest and wind sensitivity"
                - "Work planting dates back from a harvest before mid August"
                - "Choose short-cycle or low crops for fields planted through the peak"
                - "Tell regular buyers about any change in when you supply"
            - name: Wind-tolerant varieties and plant shapes
              description: |-
                ## Purpose
                Dwarf and semi-dwarf varieties, shorter tree forms and crops with stronger stems lose far less in a storm than tall ones. When replanting or expanding, asking about wind tolerance alongside yield and taste can change your losses in every future season.

                ## Milestones
                1. The crops you will replant or expand in the next two years listed.
                2. Dwarf, semi-dwarf or stronger-stemmed options for each identified with the extension office or a nursery.
                3. Yield, market acceptance and price of each option compared.
                4. A decision recorded for each crop on which variety to plant next.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded variety choice for each crop due for replanting, with wind tolerance compared against yield and price."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List crops you will replant or expand in the next two years"
                - "Ask the extension office or nursery about wind-tolerant varieties"
                - "Check with buyers that the alternative varieties will sell"
                - "Record the variety you will plant for each crop"
            - name: Pruning fruit and tree crops to cut wind load
              description: |-
                ## Purpose
                Tall, dense canopies of mango, avocado, breadfruit and citrus catch the wind and either snap or uproot. Keeping tree height manageable and thinning the canopy before the season lets wind pass through and makes the trees easier to harvest as well.

                ## Milestones
                1. Trees listed by block with height and canopy condition.
                2. A pruning approach agreed with the extension officer for each species.
                3. Dense and overly tall trees thinned or reduced before June.
                4. Cuttings cleared from under the trees and away from buildings.

                ## Notes
                Heavy pruning at the wrong time can cost a season's fruit. Check timing for each species with your extension officer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fruit and tree crop block thinned or reduced before June each year, following species advice."
                cadence: cyclic
              tasks:
                - "List tree crops by block with height and canopy density"
                - "Ask the extension officer when and how to prune each species"
                - "Thin and reduce tree canopies before the season @recurring(yearly)"
                - "Clear prunings from under trees and away from structures"
            - name: Hurricane straps and roof tie-downs on farm buildings
              description: |-
                ## Purpose
                Roofs on pens, stores and packing sheds are often nailed to the walls with nothing to stop the wind lifting them off. Fitting hurricane straps or clips that tie rafters to walls and walls to the foundation is one of the cheapest structural upgrades, and it protects everything under the roof.

                ## Milestones
                1. Every farm building's roof and wall fixings inspected and photographed.
                2. A builder or engineer's advice obtained on the straps and fixings needed.
                3. Straps fitted to the buildings in order of value of what they protect.
                4. Roof sheets checked for proper screw spacing at edges and corners.

                ## Notes
                Follow your country's building code or a qualified builder for strap type and spacing. Roof edges and corners need the closest fixings.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Hurricane straps fitted to every farm building that houses animals, stores or equipment, checked by a builder."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Photograph the rafter and wall fixings in each farm building"
                - "Ask a builder to recommend straps and fixings for each building"
                - "Buy straps and screws and fit them building by building"
                - "Add screws along roof sheet edges where spacing is too wide"
            - name: Raising stores above flood level
              description: |-
                ## Purpose
                Feed, seed, fertiliser and tools stored on the floor of a low building are ruined by a few centimetres of floodwater, and wet fertiliser can contaminate what sits beside it. Raising stores on pallets and shelves, or moving them to higher ground, protects the inputs you need most for recovery.

                ## Milestones
                1. The highest flood mark seen on each store recorded.
                2. A decision made to raise stores in place or move them to a higher building.
                3. Pallets and shelving installed so all stock sits above the flood mark.
                4. Chemicals and fertiliser kept separate from feed and seed on the highest shelves.

                ## Notes
                Follow product labels for chemical storage, and keep a locked chemical store separate from feed.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "All feed, seed, fertiliser and tools stored above the highest recorded flood mark, with chemicals kept separate."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Mark the highest known flood level on each store wall"
                - "Decide whether to raise stores in place or move them uphill"
                - "Fit pallets and shelving above the flood mark"
                - "Move chemicals and fertiliser to a separate high shelf"
            - name: Clean water for people and animals after the storm
              description: |-
                ## Purpose
                Mains water can be cut for weeks after a major hurricane, and animals need water every day while crops can wait. Securing tanks against wind, keeping them full in the season and having a way to treat drinking water makes the difference between losing stock and keeping it.

                ## Milestones
                1. Daily water needs for people and each animal group calculated.
                2. Storage tanks strapped or weighted so they cannot blow over or away.
                3. Gutters and first-flush diverters cleaned and working.
                4. A method agreed for making drinking water safe for people after a storm.

                ## Notes
                Empty tanks blow away; full tanks stay put. Fill them when a watch is issued.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Strapped tanks holding at least one week of water for people and animals, with a drinking water treatment method agreed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Calculate daily water needs for the household and each animal group"
                - "Strap or anchor every water tank to a solid base"
                - "Clean gutters, inlets and first-flush diverters @recurring(quarterly)"
                - "Ask your health office how to treat drinking water after a storm"
            - name: Spreading storm risk across fields and enterprises
              description: |-
                ## Purpose
                With everything in one crop, one block or one batch, a farm can lose a year's income in a night. Staggering plantings, mixing tree crops with short-cycle vegetables, and keeping a small enterprise that recovers fast, such as poultry or seasoning herbs, spreads the risk so something is always earning.

                ## Milestones
                1. Income by enterprise and month listed for the past year.
                2. The share of income exposed to a single storm in the peak months worked out.
                3. One or two changes chosen to spread risk, such as staggered planting or a fast-recovery enterprise.
                4. The changes costed and dated in the farm plan.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on one or two changes that reduce the share of income exposed in the peak months, costed and dated."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List income by enterprise and month for the past year"
                - "Work out how much income sits in the field in September"
                - "Choose one or two ways to spread that exposure"
                - "Cost the changes and add start dates to the plan"
            - name: Recovery cash plan before the season
              description: |-
                ## Purpose
                The first weeks after a storm need cash for labour, roofing, feed and replanting long before any relief or payout arrives. Knowing exactly where that money would come from, whether savings, a pre-agreed credit line or supplier credit, stops forced sales of animals at low prices.

                ## Milestones
                1. The cash needed for the first month of recovery estimated.
                2. Savings, credit lines and supplier credit available listed with amounts.
                3. A monthly saving set up towards a recovery fund.
                4. A conversation held with your lender or credit union about storm relief options.

                ## Notes
                This is planning, not financial advice. Discuss credit options with your lender or credit union before the season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written estimate of first-month recovery costs matched against named savings, credit and supplier sources."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Estimate first-month recovery costs for labour, roofing, feed and seed"
                - "List every source of cash or credit you could draw on"
                - "Move a fixed amount into the recovery fund @recurring(monthly:25)"
                - "Ask your lender what storm relief or repayment breaks they offer"
            - name: Farm hurricane drill before June
              description: |-
                ## Purpose
                A plan nobody has rehearsed always takes longer than expected, and the drill is where you find that the ramp is broken or the generator key is missing. A half-day drill each May, running the 48-hour jobs with the real people, shows the plan's weak points while there is time to fix them.

                ## Milestones
                1. A date set and every person on the plan invited.
                2. The 48-hour checklist worked through, with each job timed.
                3. Problems found during the drill written down.
                4. Every problem fixed or assigned before the season opens.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A timed drill of the 48-hour checklist completed with all plan participants, and every problem found assigned an owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick a drill date in May and invite everyone on the plan"
                - "Run the 48-hour checklist and time every job"
                - "Write down every problem the drill uncovers"
                - "Hold the farm hurricane drill with all helpers @recurring(yearly)"
            - name: Hurricane watch lockdown of the farm
              description: |-
                ## Purpose
                Once a watch is issued, the farm has about two days of usable working time before conditions turn dangerous. Working the countdown checklist in order, harvesting what is ready, securing roofs and covers, moving animals and filling tanks, gets the farm locked down before the warning.

                ## Milestones
                1. Mature crops harvested and moved to safe storage or sold.
                2. Shade cloth, film and loose items taken down and stored.
                3. Animals moved to shelter or secured pens with feed and water.
                4. Tanks, fuel and generator filled and vehicles parked away from trees.

                ## Notes
                Stop outdoor work when the wind picks up. No crop or roof is worth a life.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every item on the 48-hour checklist completed before the warning is issued, with harvest, covers, animals and tanks done."
                cadence: cyclic
              tasks:
                - "Open the countdown checklist and assign today's jobs"
                - "Harvest every crop that is close to ready"
                - "Drop shade cloth and stow loose items"
                - "Fill tanks, fuel cans and the generator"
            - name: Getting people safely through the storm
              description: |-
                ## Purpose
                Farm families and workers are sometimes hurt trying to check animals or fix a roof while the storm is passing, and many injuries happen in the calm of the eye. Deciding in advance where each person shelters and agreeing that nobody goes outside until the all-clear keeps everyone alive for the recovery.

                ## Milestones
                1. A safe shelter chosen for every person, at home, on the farm or at an official shelter.
                2. Water, food, torches, a radio and medicines in each shelter.
                3. A rule agreed that nobody goes outside until the official all-clear.
                4. Elderly, disabled or isolated people on the farm checked on before the storm.

                ## Notes
                If you are in a flood or surge zone, or your house is not strong, go to an official shelter. Follow your national disaster office.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every person on the farm has a named shelter with supplies, and the stay-inside rule is agreed by all."
                cadence: cyclic
              tasks:
                - "Name a shelter for every person living or working on the farm"
                - "Pack water, food, a radio and torches into each shelter"
                - "Agree out loud that nobody goes out until the all-clear"
                - "Check on elderly and isolated neighbours before the storm arrives"
            - name: First 72 hours after the storm
              description: |-
                ## Purpose
                The days after a hurricane hold their own dangers: downed lines, unstable trees, contaminated water and injured animals. A clear order of work, safety first, then animals and water, then damage records, keeps people safe and saves what can still be saved.

                ## Milestones
                1. The farm checked for downed lines, gas leaks and unsafe buildings before anyone works.
                2. Every animal checked, given water and feed, and injured animals seen by a vet.
                3. Damage photographed and listed before any clean-up.
                4. A recovery list drawn up for the first two weeks.

                ## Notes
                Start from the **Remediation plan** template. Treat every downed line as live, and keep clear until the power company says otherwise.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A completed safety check, animal check and photographed damage list within 72 hours of the all-clear, with a two-week recovery list."
                cadence: cyclic
              tasks:
                - "Walk the farm for downed lines and unsafe structures before anyone works"
                - "Check every animal for injury and give water and feed"
                - "Photograph and list all damage before clearing anything"
                - "Write a two-week recovery list in order of urgency"
            - name: Reporting farm damage to the ministry
              description: |-
                ## Purpose
                Ministries of agriculture and disaster agencies usually run damage assessments after a major storm, and relief, seed and material distributions often go to farmers on those lists. Reporting quickly, with photographs and your registration number, puts your farm on the record.

                ## Milestones
                1. The damage reporting channel for farmers found, through the extension office or disaster agency.
                2. A damage report submitted with photographs, areas, animal losses and estimated costs.
                3. The reference number or officer's name recorded.
                4. Follow-up made until the assessment visit or relief decision is confirmed.

                ## Notes
                Keep your before photographs and receipts together with your report. Ask what deadline the reporting has.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A farm damage report submitted to the ministry or disaster agency with photographs, and a reference recorded."
                cadence: cyclic
              tasks:
                - "Ask the extension office how farmers report hurricane damage"
                - "Gather before and after photographs and your registration number"
                - "Submit the damage report with losses by crop and animal group"
                - "Record the reference number and chase until the visit happens"
            - name: December hurricane season review
              description: |-
                ## Purpose
                Whether the farm was hit or the season was quiet, the end of November is the time to write down what worked, what failed and what you nearly forgot. A short review each December feeds the next year's plan, budget and May inspection.

                ## Milestones
                1. A list of what went well, what went badly and what was missed.
                2. Costs of preparation and any damage totalled.
                3. Three changes chosen for next season.
                4. The changes written into the plan and the next year's budget.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written season review each December with costs totalled and three changes added to next year's plan and budget."
                cadence: cyclic
              tasks:
                - "Total the season's preparation and damage costs"
                - "Write what worked, what failed and what was missed"
                - "Pick three changes for next season"
                - "Hold the hurricane season review with helpers @recurring(yearly)"
            - name: Livestock shelter and evacuation plan
              description: |-
                ## Purpose
                Cattle, goats, sheep and pigs either shelter on the farm or move to higher, safer ground, and that decision must be made long before the warning. A plan that names where each group goes, how they get there and who feeds them afterwards cuts animal losses sharply.

                ## Milestones
                1. A decision for each animal group: shelter in place, open field or move off the farm.
                2. Shelter pens checked for roof strength, drainage and safe fencing.
                3. Off-farm destination and transport agreed with a neighbour or landowner where needed.
                4. Animal identification, such as tags or photographs, up to date for every animal.

                ## Notes
                Large animals often do better in an open field away from trees and flooding than in a weak building. Ask your vet what suits your stock.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shelter or evacuation decision for each animal group, with routes, destinations and identification in place."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide shelter, open field or move off farm for each animal group"
                - "Ask a neighbour on higher ground about taking animals in a storm"
                - "Photograph or tag every animal for identification"
                - "Check shelter roofs, fences and drainage @recurring(monthly:7)"
            - name: Poultry houses through a hurricane
              description: |-
                ## Purpose
                Broiler and layer houses have light roofs, open sides and thousands of birds that die quickly from heat, cold or flooding. Preparing the house, deciding whether to catch a near-market flock early and keeping water and feed going through outages protects the farm's fastest-turning income.

                ## Milestones
                1. Roof fixings and side curtains on each house checked and strengthened.
                2. A rule agreed with your processor on early catching of flocks near market weight.
                3. Water, feed and backup power for the house secured for three days.
                4. Chick placements planned to avoid the peak weeks where possible.

                ## Notes
                Talk to your processor before the season about early catching and what they can take at short notice.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every poultry house strengthened and supplied for three days, with an early-catch rule agreed with the processor."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Check roof fixings and curtain ties on each poultry house"
                - "Agree an early-catch rule with your processor"
                - "Store three days of feed and water for each house"
                - "Plan chick placements around the peak storm weeks"
            - name: Hurricane plan for a one-person smallholding
              description: |-
                ## Purpose
                Many Caribbean farms are run by one older farmer or a part-timer with a job in town, and a plan written for a crew does not fit. A small, realistic plan, with the few jobs one person can do, a neighbour to share them with and a firm rule to leave in time, protects both the farmer and the farm.

                ## Milestones
                1. The must-do jobs cut to what one person can finish in a day.
                2. A neighbour or relative agreed as a helper, with a swap of help in return.
                3. A rule written for when you leave the farm and do not return until the all-clear.
                4. Your medicines and personal needs packed into the grab box.

                ## Notes
                If you live alone, tell a relative or neighbour where you will shelter.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-person plan listing a day's must-do jobs, a named helper and a written leave-by rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Cut the plan to jobs one person can finish in a day"
                - "Ask a neighbour to help, offering help in return"
                - "Write down when you leave and where you will shelter"
                - "Pack personal medicines and needs into the grab box"
            - name: Storm terms for farmers on leased land
              description: |-
                ## Purpose
                Tenants on state or private land often find after a storm that nobody agreed who repairs the shed, clears fallen trees or waives the rent while fields recover. Settling those questions with the landlord before the season saves disputes when everyone is stretched.

                ## Milestones
                1. The current lease read for any clauses on damage, repairs or force majeure.
                2. Questions listed on repairs, tree clearing, rent during recovery and improvements such as windbreaks.
                3. Answers agreed in writing with the landlord or the land agency.
                4. A copy of the agreement placed in the grab box.

                ## Notes
                This is organisational, not legal advice. Have a lawyer or the land agency review any change to the lease.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written agreement with the landlord on storm repairs, tree clearing and rent during recovery, stored in the grab box."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your lease for clauses on damage and repairs"
                - "List your questions on repairs, trees and rent after a storm"
                - "Meet the landlord or land agency to agree answers in writing"
                - "File a copy of the agreement in the grab box"
            - name: Fish ponds and tanks before a hurricane
              description: |-
                ## Purpose
                Tilapia and aquaponics systems can lose a whole crop to an overflowing pond, a power cut that stops aeration or debris in the tanks. Harvesting market-size fish early, lowering pond levels, netting outlets and planning aeration through outages cuts the losses sharply.

                ## Milestones
                1. A rule agreed for early harvest of fish near market size when a watch is issued.
                2. Pond levels lowered and outlets netted so fish are not washed out.
                3. Backup aeration and power planned for at least three days.
                4. Tank covers and loose fittings secured or removed.

                ## Notes
                Fish need oxygen most in the warm, still days after a storm, when power is often out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An early-harvest rule, netted outlets and three days of backup aeration in place for every pond or tank."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Agree with a buyer to take fish early on a watch"
                - "Fit nets over pond outlets and overflows"
                - "Arrange backup aeration for three days without mains power"
                - "Secure or remove tank covers and loose fittings"
            - name: Farm workers and families living on site
              description: |-
                ## Purpose
                Where workers live on the farm, their safety is part of the owner's plan, and their housing may be weaker than the main house. Checking worker housing, agreeing shelter and keeping some pay going when work stops after a storm protects people and keeps the crew you need for recovery.

                ## Milestones
                1. Worker housing inspected for roof strength, flooding and falling trees.
                2. A safe shelter agreed for every worker and family member on site.
                3. A decision written on how workers are paid if the farm cannot work for a period.
                4. Worker families included in the phone tree.

                ## Notes
                Check your country's labour rules on pay during closures with a labour officer or adviser.
              priority: medium
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Every on-site worker and family has an agreed shelter, and a written pay decision for storm closures exists."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Inspect every worker house for roof, flood and tree risk"
                - "Agree a safe shelter for each worker family"
                - "Decide and write down pay arrangements during a storm closure"
                - "Add worker families to the phone tree"
            - name: Rehabilitate or replant a wind-damaged estate
              description: |-
                ## Purpose
                After a major storm, a cocoa, nutmeg, citrus or fruit estate may have trees broken, uprooted or leaning, and the choice between nursing them back and replanting decides the next decade. Grenada's nutmeg sector took years to recover after Ivan, and those who planned the choice block by block recovered faster.

                ## Milestones
                1. Each block surveyed and trees classed as sound, recoverable or lost.
                2. Advice taken from the extension service or a crop specialist on rehabilitation versus replanting.
                3. Costs, time to bearing and cash flow compared for both options.
                4. A block-by-block decision recorded with a planting or rehabilitation schedule.

                ## Notes
                Fallen trees can be breeding grounds for pests. Ask the extension officer about clearing and disposal.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A block-by-block decision to rehabilitate or replant, with costs, years to bearing and a dated schedule."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Survey each block and class trees as sound, recoverable or lost"
                - "Ask the extension service about rehabilitation for each species"
                - "Compare costs and years to bearing for both options"
                - "Record the decision and schedule for each block"
            - name: Rebuilding farm structures stronger after a storm
              description: |-
                ## Purpose
                Rebuilding exactly what blew down repeats the same failure in the next storm. Using the rebuild to fit stronger fixings, lower roof pitches, better anchors and safer locations turns a loss into lasting resilience, often for a small extra cost.

                ## Milestones
                1. Each damaged structure assessed for why it failed.
                2. A builder or engineer's advice obtained on stronger designs for each.
                3. Extra costs of stronger rebuilds compared with the losses they would prevent.
                4. Rebuilt structures inspected and photographed for the record.

                ## Notes
                Ask whether grants or relief materials after a storm require certain building standards.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every rebuilt farm structure has a written note of why it failed and how the new design addresses it."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Photograph each failed structure and note where it broke"
                - "Ask a builder for a stronger design for each"
                - "Compare extra costs against the losses they would prevent"
                - "Inspect and photograph each rebuild when complete"
            - name: Community seed and planting material bank
              description: |-
                ## Purpose
                Seeds, suckers and seedlings are scarce and expensive just when every farmer wants to replant. A shared store of seed and planting material, held by a group of neighbours in a safe building, means the district can replant within days instead of waiting for imports or distributions.

                ## Milestones
                1. A group of farmers agreed to share a seed and planting material store.
                2. A safe, dry building and a keeper chosen.
                3. Seed and material for the district's main crops stored, labelled and listed.
                4. A germination test and rotation routine in place.

                ## Notes
                Ask the extension office about certified seed and clean planting material to avoid spreading disease.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A shared seed and planting material store run by a named keeper, stocked for the main district crops and tested yearly."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Invite neighbouring farmers to discuss a shared seed store"
                - "Choose a dry, safe building and a keeper"
                - "Stock and label seed for the district's main crops"
                - "Run a germination test on stored seed @recurring(yearly)"
            - name: Farmer group mutual aid agreement
              description: |-
                ## Purpose
                In the days after a storm, a group of neighbours with a chainsaw, a tractor and a generator between them can clear roads and save animals faster than any agency. Agreeing before the season who shares what, and in what order farms are helped, turns goodwill into an actual plan.

                ## Milestones
                1. A group of farmers in the district agreed to help each other.
                2. Equipment, skills and labour each farm can offer listed.
                3. An order of help agreed, starting with people, then animals, then access roads.
                4. A yearly meeting set to refresh the agreement before June.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written mutual aid agreement among district farmers listing shared equipment, skills and an order of help."
                cadence: cyclic
              tasks:
                - "Invite nearby farmers to a meeting about storm mutual aid"
                - "List what each farm can offer in equipment, skills and labour"
                - "Agree and write down the order of help after a storm"
                - "Meet the group to refresh the mutual aid agreement @recurring(yearly)"
            - name: Short-cycle crops for the recovery months
              description: |-
                ## Purpose
                Prices for fresh vegetables often jump after a storm because supply is gone across the district. Planning which fast crops you would plant within days of the all-clear, such as bodi, pak choi, lettuce and cucumber, gives you income while tree crops and fields recover.

                ## Milestones
                1. Three to five short-cycle crops chosen that suit your land and buyers.
                2. Seed for those crops kept in the reserve store.
                3. A field or bed set aside that is least likely to flood.
                4. Buyers told you can supply quickly after a storm.

                ## Notes
                Ask the extension office about any seed or input distributions after storms, so you are on the list.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan for three to five recovery crops with stored seed, a set-aside field and buyers informed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose three to five fast crops your buyers already take"
                - "Add seed for those crops to the reserve store"
                - "Set aside the field least likely to flood for recovery planting"
                - "Tell buyers you can supply quickly after a storm"
---

# Hurricane Resilience on the Farm

This area is for anyone farming where the Atlantic hurricane season runs from June to November, from a backyard plot of peppers to an estate of cocoa, a broiler house or a set of tilapia ponds. It starts with foundations (a risk map of your own land, a one-page plan, a season calendar, photographs, contacts, alert triggers, supplies and backup power), then the yearly and monthly routines that keep the farm ready, the knowledge of how wind, surge and rain do their damage, improvements such as windbreaks, strapped roofs and crops timed around the peak, the dated events of a watch, the storm and the first days after, situations for livestock, poultry, ponds, tenants and farms with workers, and finally specialist work on rebuilding estates and organising neighbours.

What repeats is a May readiness inspection and drill, a Monday look at the tropical outlook through the season, monthly checks on the farm, the reserves, the generator and the windbreak, quarterly tree trimming and tank checks, a monthly deposit into the recovery fund and a December review of how the season went. The Risk register, Purchase decision, Operational checklist and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
