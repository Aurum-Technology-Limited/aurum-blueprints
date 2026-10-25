---
id: agriculture.farm-machinery-and-equipment
name: Farm Machinery and Equipment
description: "Tractors, implements and small engines run as farm assets: a graded inventory, hire or own decisions, hour-meter servicing, fuel and parts discipline, safe operators, storm and flood plans and a costed replacement plan."
category: business
version: 1.0.0
tags: [agriculture, farm-machinery-and-equipment, small-business, tractors, implements, machinery-maintenance, equipment-hire, small-engines]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - purchase-decision
    - vendor
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Machinery and Equipment
          description: "Choosing, maintaining and sharing farm machinery: tractors and implements, small equipment, service schedules, spare parts and hiring versus owning."
          projects:
            - name: Farm machinery inventory with condition grades
              description: |-
                ## Purpose
                Most farms cannot say, without walking round the yard, how many machines they own, what hours each has done or which ones are quietly dying. A one-page inventory listing every tractor, implement, engine and trailer with its serial number, hours, age and a simple condition grade turns a heap of iron into assets you can plan, insure and sell.

                ## Milestones
                1. Every tractor, implement, small engine and trailer listed with make, model and serial number.
                2. Hour meter readings and year of purchase recorded where known.
                3. Each item graded good, needs work or scrap, with one line on its main fault.
                4. Two photographs of each machine and its serial plate filed with the list.

                ## Notes
                Include borrowed and shared machines with a note of who owns them; disputes over a shared rotavator usually start because nobody wrote it down.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory with serial numbers, hours, condition grades and photographs for every machine on the farm."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the yard and sheds and list every machine you can see"
                - "Photograph each serial plate and hour meter"
                - "Grade each machine good, needs work or scrap"
                - "Save the list and photos in one folder on the phone and on paper"
            - name: Field operations calendar matched to machines
              description: |-
                ## Purpose
                Machinery decisions go wrong when they start from the brochure instead of the work. Writing down every field operation across the year, from clearing and ploughing to bed forming, spraying, mowing and haulage, with the weeks each must happen in the wet and dry seasons, shows which machine is needed when, where the bottlenecks fall and which jobs can be hired in.

                ## Milestones
                1. Every field operation for each crop or paddock listed with the weeks it must be done.
                2. The machine or tool used for each operation named, owned or hired.
                3. Weeks where two operations compete for one tractor marked as bottlenecks.
                4. Operations that could be hired, shared or done by hand flagged for later decisions.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A twelve-month calendar showing each field operation, its weeks, its machine and the bottleneck weeks, kept with the farm plan."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the field jobs each crop or paddock needs through the year"
                - "Mark the weeks each job must be done in wet and dry seasons"
                - "Write the machine used for each job beside it"
                - "Circle weeks where one tractor is needed for two jobs"
            - name: Operator manuals and service history file
              description: |-
                ## Purpose
                Service intervals, oil grades, tyre pressures and grease points are all in the manual, and most farms lost theirs years ago. Rebuilding a file with a manual or downloaded copy for each machine and a running service history means the right oil goes in, warranty claims hold up and a buyer pays more when you sell.

                ## Milestones
                1. A paper or digital operator manual found for each tractor and major implement.
                2. Oil grades, filter part numbers and service intervals copied onto one sheet per machine.
                3. Past repairs and services gathered from receipts and memory into a history page.
                4. One shelf or folder where manuals and the history pages live.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One sheet per machine listing oil grades, filter numbers and service intervals, plus a history page, filed in one place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the maker's website for manuals using each model number"
                - "Ask the dealer for copies of manuals you cannot find online"
                - "Copy oil grades and filter numbers onto one sheet per machine"
                - "Gather old repair receipts into a history page for each machine"
            - name: Machine shed and secure parking layout
              description: |-
                ## Purpose
                A tractor parked under a mango tree in the rain rusts, grows mould in the seat and loses its wiring to rats within a few seasons. A roofed, well-drained shed or lean-to with room to walk round each machine, a hard floor for jacking and a lockable section for small engines adds years to everything stored in it.

                ## Milestones
                1. A site chosen that stays dry in heavy rain and has vehicle access.
                2. A layout sketched with a bay for each machine and a clear walkway.
                3. Roof, floor and lockable store built or repaired to the sketch.
                4. Every machine parked in its bay at the end of the working day.

                ## Notes
                Keep fuel storage separate from the shed where machines are worked on, and keep a fire extinguisher at the door.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All tractors and implements parked under cover on a dry floor, with small engines in a lockable store."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Pick a dry spot with access for the tractor and trailer"
                - "Sketch a bay for each machine with a walkway round it"
                - "Price roofing sheets, posts and a concrete or gravel floor"
                - "Fit a lock and a fire extinguisher to the small engine store"
            - name: Workshop tool kit and lubricant stock
              description: |-
                ## Purpose
                A sheared pin or a loose hydraulic fitting can stop land preparation for a day while someone drives to town for a spanner. A basic kit of sockets, spanners, a grease gun, a jack and stands, a multimeter and the right oils and greases on the shelf lets most small jobs be done in the field the same hour.

                ## Milestones
                1. A tool list drawn up to match the bolt sizes on your machines.
                2. Grease gun, jack, axle stands and a multimeter on hand.
                3. Engine oil, hydraulic oil, gear oil and grease stocked in the grades the manuals give.
                4. A shadow board or labelled box so missing tools show at a glance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled tool kit and the correct oils and grease for every machine kept in the shed, checked against a written list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check the bolt and nut sizes on the tractor and main implements"
                - "Write the tool list and tick what you already own"
                - "Buy the oils and grease the service sheets call for"
                - "Paint tool outlines on a board or label a lockable box"
            - name: Owning versus hiring a tractor decision
              description: |-
                ## Purpose
                Working only 150 hours a year, an owned tractor often costs more per hour in depreciation, interest and repairs than paying a contractor, but a contractor who arrives two weeks late can cost a whole crop. Putting your own hours, local hire rates and the cost of late operations on one page gives an honest answer for this farm, not the neighbour's.

                ## Milestones
                1. Annual tractor hours needed estimated from the field operations calendar.
                2. Local hire rates per hour or per acre collected from at least three sources.
                3. Owning cost per hour worked out, including depreciation, interest, insurance and repairs.
                4. The cost of delayed operations in your main crop estimated with the extension officer.
                5. A written decision to own, hire, share or mix, with the hours where it would change.

                ## Notes
                Ask your accountant or lender how they would treat depreciation and interest for your situation; this project prepares the numbers, it does not replace their advice.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page comparison of owning and hiring cost per hour for this farm's hours, ending in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Add up the tractor hours your field calendar needs each year"
                - "Call three contractors or hire services for their current rates"
                - "Work out the yearly cost of owning a tractor of the size you need"
                - "Record the decision and the hours at which it would flip"
            - name: Local tractor hire and contractor shortlist
              description: |-
                ## Purpose
                Every district has two or three people with a tractor for hire and a reputation that travels by word of mouth. A shortlist with rates, implements, reliability notes and phone numbers, built before the season, means you are booked in when the rains break instead of waiting behind larger farms.

                ## Milestones
                1. At least four hire services, contractors or government machinery pools identified.
                2. Rates, minimum charges and implements available recorded for each.
                3. References from two farmers who used each contractor last season.
                4. A first and second choice agreed for ploughing and for bed forming.

                ## Notes
                Start from the **Vendor** template. Some ministries of agriculture run subsidised tractor services; ask the extension office how bookings work and how early they fill.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A shortlist of at least four hire sources with rates and references, and a named first choice for each main operation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office about any government tractor service"
                - "Collect names of private contractors from neighbours and the farm shop"
                - "Call each one for rates, minimum charges and implements"
                - "Pick a first and second choice for ploughing and bed forming"
            - name: Cost per machine hour baseline
              description: |-
                ## Purpose
                Without a cost per hour you cannot price contract work, compare hiring or know when an old tractor has become a money pit. Logging fuel, oil, parts, repairs and hours for three months gives a working figure for each machine, which later projects build on.

                ## Milestones
                1. A log set up with columns for date, machine, hours, fuel, parts and repair costs.
                2. Three months of entries for each main machine.
                3. Running cost per hour worked out for each machine.
                4. Fixed costs per year, such as depreciation and insurance, added to give a full figure.

                ## Notes
                Start from the **Metrics log** template. Keep fuel receipts in an envelope in the tractor cab and enter them weekly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A cost per hour figure, running and full, for every tractor and main engine, based on at least three months of logged data."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up the cost log with one row per fuel fill or repair"
                - "Put an envelope for fuel receipts in each cab"
                - "Update cost per hour for each machine from the log @recurring(monthly:28)"
                - "Add yearly depreciation and insurance to reach a full cost per hour"
            - name: Tractor rollover and PTO safety check
              description: |-
                ## Purpose
                Tractor rollovers on slopes and drain banks and clothing caught in an unguarded power take-off shaft are among the most common causes of death on farms. Checking that every tractor has a working rollover frame and seat belt and every PTO shaft has its guards, then writing the safety rules for slopes and shafts, is the first job before any more hours are put on the machines.

                ## Milestones
                1. Each tractor checked for a rollover protective frame in the up position and a working seat belt.
                2. Every PTO shaft and tractor stub checked for intact guards and safety chains.
                3. Damaged or missing guards replaced, or the implement tagged out of use.
                4. Written rules for slopes, drains, passengers and PTO work posted in the shed.

                ## Notes
                A rollover frame only protects a driver who is wearing the seat belt. Never step over a turning shaft; stop the engine and remove the key first.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every tractor has a rollover frame and belt in use, every PTO shaft is guarded or tagged out, and the safety rules are posted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check each tractor for a rollover frame and a working seat belt"
                - "Inspect every PTO shaft guard and safety chain"
                - "Tag out any implement with a missing or cracked guard"
                - "Post the slope, passenger and PTO rules on the shed wall"
            - name: Daily pre-start walk-round for tractors
              description: |-
                ## Purpose
                Five minutes before starting catches the low coolant, the loose wheel nut and the leaking hose that would otherwise become a cracked head or an accident in the field. A short walk-round in the same order every day, done by whoever drives, is the cheapest maintenance a farm can buy.

                ## Milestones
                1. A one-page check list covering oil, coolant, fuel, tyres, wheel nuts, hoses, lights and guards.
                2. The list laminated and kept in each tractor cab or toolbox.
                3. Every driver shown the walk-round and doing it before the first start of the day.
                4. Faults found written in the service history and fixed or reported the same day.

                ## Notes
                Start from the **Operational checklist** template. Check the engine oil cold and on level ground, as the dipstick reads wrongly on a slope.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A laminated pre-start list in every cab and a fault note entered for any problem found, every working day."
                cadence: rolling
              tasks:
                - "Write the walk-round list in the order you walk round the tractor"
                - "Laminate a copy for each cab or toolbox"
                - "Do the walk-round before the first start of the day @recurring(daily)"
                - "Show every driver the walk-round on their next shift"
            - name: Service intervals tracked by hour meter
              description: |-
                ## Purpose
                Engines wear by hours, not by calendar, and a tractor that worked hard through land preparation can be overdue for oil and filters within weeks. Reading every hour meter once a week and comparing it against the manual's intervals tells you which service is due next, so oil changes happen on time instead of after the engine complains.

                ## Milestones
                1. The service intervals for each machine copied from the manual onto a chart.
                2. A weekly hour reading logged for each tractor and engine.
                3. The next service due shown for each machine on the chart.
                4. Every service done within the manual's interval for the following six months.

                ## Notes
                Where the hour meter is broken, fix it before anything else or log hours from a notebook in the cab; guessing hours is how engines are lost.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A chart showing current hours and next service due for every machine, with no service overdue for six months running."
                cadence: rolling
              tasks:
                - "Copy each machine's service intervals onto one chart"
                - "Read and log the hour meter on every machine @recurring(weekly:mon)"
                - "Compare hours with the next service due and book any service @recurring(monthly:3)"
                - "Fix or replace any broken hour meter"
            - name: Weekly grease and wash-down round
              description: |-
                ## Purpose
                Pivot pins, linkage joints and PTO shafts that are greased weekly last for years, while dry ones wear oval in a season. A set Friday round with the grease gun and a hose, taking off caked mud and crop residue, also shows the cracks, leaks and loose bolts that a dirty machine hides.

                ## Milestones
                1. Every grease point on each tractor and implement found and marked with paint.
                2. A grease point count written on each machine's service sheet.
                3. A weekly round done, with mud and residue washed off before greasing.
                4. Cracks, leaks and loose bolts spotted on the round noted for repair.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every grease point marked and greased weekly, with the round and any faults noted on the service sheet."
                cadence: rolling
              tasks:
                - "Find and paint-mark every grease point using the manual"
                - "Write the number of grease points on each service sheet"
                - "Wash down and grease all machines in use that week @recurring(weekly:fri)"
                - "Note any cracks or leaks seen during the round"
            - name: Annual tractor service before land preparation
              description: |-
                ## Purpose
                Land preparation is when the tractor works hardest and when breakdowns cost most, so the full service belongs in the quiet weeks before it, not in the middle. A yearly service covering oils, filters, belts, coolant, brakes, clutch and hydraulics, booked in advance with the dealer or a trusted mechanic, starts the season with a machine you can trust.

                ## Milestones
                1. The quiet weeks before main land preparation marked as the service window.
                2. Parts and filters ordered at least two weeks before the service date.
                3. Full service done covering oils, filters, belts, coolant, brakes, clutch and hydraulics.
                4. Service record and any recommended repairs written in the history file.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full service recorded for every tractor in the weeks before land preparation, each year, with parts ordered in advance."
                cadence: cyclic
              tasks:
                - "Mark the service window in the weeks before land preparation"
                - "Book the annual service with the dealer or mechanic @recurring(yearly)"
                - "Order filters, belts and oils two weeks before the date"
                - "File the service record and any repair quotes"
            - name: Small engine care for brushcutters and chainsaws
              description: |-
                ## Purpose
                Brushcutters, chainsaws, rotavators and generators do the daily work on most smallholdings and die young from stale fuel, clogged air filters and blunt chains. A monthly bench session for cleaning filters, checking plugs, sharpening chains and draining old mix keeps them starting on the first pull.

                ## Milestones
                1. Every small engine listed with its fuel type, mix ratio from the manual and plug type.
                2. Air filters, spark plugs and fuel filters cleaned or replaced on each.
                3. Chainsaw chains sharpened and brushcutter heads checked.
                4. A monthly bench session held and recorded on a sheet in the store.

                ## Notes
                Use the two-stroke mix ratio printed on the engine or manual, mixed fresh. Old mix left in the tank through a wet month is the usual cause of a dead carburettor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly service sheet in the store showing filters, plugs and chains checked for every small engine."
                cadence: rolling
              tasks:
                - "List each small engine with its fuel type and plug size"
                - "Buy spare plugs, air filters and a chain file"
                - "Clean filters, check plugs and sharpen chains on the bench @recurring(monthly:12)"
                - "Drain fuel from any engine that will stand for a month"
            - name: Diesel storage and fuel contamination checks
              description: |-
                ## Purpose
                Water condenses in fuel drums and tanks in humid weather, and dirty or wet diesel blocks filters and ruins injector pumps that cost more than a season's fuel to replace. Storing fuel off the ground, filtering it into the tractor and draining water from tank and filter bowls every month stops most fuel faults.

                ## Milestones
                1. Fuel stored in clean, labelled containers on a stand, under cover and away from the shed.
                2. A filter funnel or pump filter used for every fill.
                3. Water and sediment drained from storage and tractor filter bowls monthly.
                4. A spill kit and fire extinguisher kept beside the fuel store.

                ## Notes
                Follow local fire and environmental rules for how much fuel may be stored and where. Never fill a hot engine or smoke near the store.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fuel kept off the ground and under cover with a monthly water drain logged, and no fuel-related breakdowns in the following year."
                cadence: rolling
              tasks:
                - "Move fuel drums onto a stand under cover"
                - "Buy a filter funnel or a pump with an inline filter"
                - "Drain water and sediment from tanks and filter bowls @recurring(monthly:20)"
                - "Put a spill kit and extinguisher beside the fuel store"
            - name: Battery and wiring care in humid weather
              description: |-
                ## Purpose
                Corroded terminals, flat batteries and rat-chewed wiring cause a large share of no-start mornings in a hot, damp climate. Cleaning terminals, checking charge and inspecting the loom once a month, and disconnecting batteries on machines that stand idle, keeps the starter turning.

                ## Milestones
                1. Each machine's battery checked for charge with a multimeter.
                2. Terminals cleaned and protected with terminal grease.
                3. Wiring looms inspected for chewing, chafing and loose connectors.
                4. A battery isolator or disconnect routine in place for machines idle more than two weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly battery and wiring check recorded for each machine, with idle machines disconnected."
                cadence: rolling
              tasks:
                - "Check each battery's voltage with a multimeter"
                - "Clean and grease terminals on every machine @recurring(monthly:8)"
                - "Look along the wiring for chewing or chafing"
                - "Disconnect batteries on machines standing idle"
            - name: Spare filters, belts and parts stock control
              description: |-
                ## Purpose
                Parts for older tractors can take weeks to arrive from abroad, and a missing fan belt in the middle of planting means hiring a contractor at the worst price. A small stock of the filters, belts, shear bolts, hoses and bulbs that each machine eats, counted every quarter, keeps the machines turning while the order is on the boat.

                ## Milestones
                1. Fast-moving parts for each machine listed with part numbers.
                2. A minimum stock level set for each part.
                3. Shelves or boxes labelled by machine and part.
                4. A quarterly count done and reorders placed below minimum.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A parts list with minimum levels for every machine, counted each quarter, with no breakdown caused by a common part being out of stock."
                cadence: rolling
              tasks:
                - "List the filters, belts and shear bolts each machine uses"
                - "Set a minimum number to keep for each part"
                - "Label shelves or boxes by machine"
                - "Count parts and reorder anything below minimum @recurring(quarterly)"
            - name: Salt air and wet season rust control
              description: |-
                ## Purpose
                Coastal farms and wet districts eat steel fast, and rust under paint on a plough frame or trailer chassis weakens it long before it shows. A quarterly round of wire brushing, primer and paint on chipped areas, and a protective oil on bare working parts during long idle spells, adds years to frames and implements.

                ## Milestones
                1. Rust spots on frames, linkages and trailers found and marked.
                2. Chipped and rusted areas brushed, primed and painted.
                3. Bare working surfaces such as plough mouldboards and discs oiled before standing idle.
                4. A quarterly rust round recorded for each machine.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A quarterly rust round recorded, with every chipped area primed and painted and idle working surfaces oiled."
                cadence: rolling
              tasks:
                - "Walk round each machine and mark rust with chalk"
                - "Buy a wire brush, metal primer and paint"
                - "Brush, prime and paint marked spots on every machine @recurring(quarterly)"
                - "Oil mouldboards and discs before they stand idle"
            - name: End-of-season implement clean and storage
              description: |-
                ## Purpose
                Ploughs, harrows, bed formers and seed drills put away dirty and wet are seized and rusted when the next season starts. A set routine at the end of each season to clean, repair, oil and park each implement under cover, with a list of parts to order, means everything is ready when the tractor is.

                ## Milestones
                1. Each implement cleaned of soil and crop residue at season end.
                2. Worn points, discs, tines and bearings noted and parts ordered.
                3. Working surfaces oiled and implements parked on blocks under cover.
                4. A ready-for-season tag hung on each implement once repairs are done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every implement cleaned, repaired, oiled and tagged ready under cover within two weeks of each season's end, every year."
                cadence: cyclic
              tasks:
                - "Clean soil and residue off each implement after its last job"
                - "List worn points, discs and bearings and order parts"
                - "Park implements on blocks under cover with surfaces oiled"
                - "Run the end-of-season clean for every implement @recurring(yearly)"
            - name: Hitching implements and setting the three-point linkage
              description: |-
                ## Purpose
                Badly hitched implements pull to one side, wear tyres, waste fuel and can lift the front of the tractor dangerously. Learning to hitch safely, level the implement side to side and front to back, set check chains and adjust draft control gives straighter, more even work at lower cost.

                ## Milestones
                1. The linkage parts on your tractor named: lower arms, top link, lift rods, check chains.
                2. An implement hitched and unhitched safely under supervision.
                3. Side to side and front to back levelling set with the implement on flat ground.
                4. Draft and position control settings tried in the field and the best settings noted.

                ## Notes
                Never stand between the tractor and implement while the linkage is moving. Add front ballast as the manual says before lifting heavy implements.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The operator can hitch, level and adjust each main implement unaided, with settings for each written on its service sheet."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the linkage section of the tractor manual"
                - "Ask the dealer or an experienced operator to show you a safe hitch"
                - "Level the plough on flat ground and note the settings"
                - "Test draft control settings in one field and record the best"
            - name: Ploughing and harrowing settings for heavy soils
              description: |-
                ## Purpose
                Heavy clay soils common across the region turn to brick when worked dry and smear into a hardpan when worked wet, and the wrong depth or speed makes it worse. Learning to set plough depth, disc angle and tractor speed for your soil, and to judge when the ground is fit to work, saves fuel and protects the soil you depend on.

                ## Milestones
                1. A simple test for soil fit to work learned, such as the ribbon or crumble test.
                2. Plough depth, width and disc angle adjustments understood on your implements.
                3. Two or three settings tried on one field and the results compared.
                4. Chosen settings for wet and dry conditions written on the implement sheet.

                ## Notes
                Ask the extension officer to walk one field with you; they can show the soil test and the signs of a plough pan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written plough and harrow settings for wet and dry conditions on each implement sheet, based on a field trial."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension officer to show you a soil readiness test"
                - "Read how depth and disc angle are set on your plough"
                - "Try three settings on strips of one field"
                - "Write the best wet and dry settings on the implement sheet"
            - name: Hydraulic hoses, couplers and leak finding
              description: |-
                ## Purpose
                A burst hydraulic hose dumps oil, stops work and, at high pressure, can inject oil through skin. Learning how the hydraulic system works, how to spot a hose about to fail, how to match a replacement and how to find leaks safely lets you fix the most common failure on a working tractor without waiting days for a mechanic.

                ## Milestones
                1. The hydraulic system on your tractor traced from pump to remotes.
                2. Worn, cracked or chafed hoses identified and listed.
                3. One hose replaced with the correct pressure rating and fittings.
                4. Couplers cleaned and capped, and a hose spares list written.

                ## Notes
                Never run a hand along a hose to find a leak; use a piece of cardboard and release pressure before loosening any fitting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One hose replaced correctly by the operator and a list of hose sizes and ratings for each machine filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Trace the hydraulic lines on your tractor with the manual open"
                - "List any hoses that are cracked, chafed or weeping"
                - "Take one worn hose to a hose shop and have it made up to match"
                - "Clean couplers and fit dust caps to every one"
            - name: Basic diesel engine fault finding
              description: |-
                ## Purpose
                Most diesel breakdowns are air in the fuel, a blocked filter, a flat battery or overheating, and all of them can be found in the field with a little knowledge. Learning a step by step check for no-start, power loss, smoke and overheating saves call-out fees and tells you when a fault really does need a mechanic.

                ## Milestones
                1. The fuel system on your tractor traced from tank to injectors.
                2. Bleeding air from the fuel system practised once under guidance.
                3. A fault card written for no-start, power loss, black or white smoke and overheating.
                4. One real fault found and fixed using the card, or correctly passed to a mechanic.

                ## Notes
                Leave injector pumps and injectors to a specialist; this project covers checks, not internal engine repair.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written fault card kept in the cab and the operator able to bleed the fuel system unaided."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Trace the fuel line from tank to injector pump with the manual"
                - "Ask a mechanic to show you how to bleed air from the system"
                - "Write a fault card for no-start, power loss, smoke and overheating"
                - "Keep the fault card in the cab"
            - name: Sprayer and mist blower mechanical upkeep
              description: |-
                ## Purpose
                Knapsack and tractor sprayers with worn nozzles, leaking seals or a failing pump put out the wrong amount and drip on the operator. Looking after the machine itself, nozzles, filters, seals, pressure and pump, keeps it accurate and safe, while what goes in the tank stays a matter for the label and the extension officer.

                ## Milestones
                1. Each sprayer and mist blower listed with its nozzle types and seal kit part numbers.
                2. Nozzles checked for output against a new nozzle and worn ones replaced.
                3. Filters, seals and hoses inspected and leaking parts replaced.
                4. A monthly nozzle and leak check recorded for each sprayer.

                ## Notes
                Rinse and clean sprayers as the product label directs before working on them, and wear gloves. Calibration for a specific product follows the label and the extension officer's guidance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Each sprayer passes a monthly nozzle output and leak check, with worn parts replaced and recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each sprayer with its nozzle type and seal kit number"
                - "Time a measured output from each nozzle with clean water"
                - "Check nozzles, seals and hoses for wear and leaks @recurring(monthly:15)"
                - "Buy a spare seal kit and nozzle set for each sprayer"
            - name: Walk-behind tractor and rotavator handling
              description: |-
                ## Purpose
                Two-wheel tractors and walk-behind rotavators are the main powered tools on many hillside and small plots, and they cause hand, foot and back injuries when handled badly. Learning to start, steer, turn on headlands, set tilling depth and clear blockages safely makes the machine faster and kinder to the operator.

                ## Milestones
                1. Controls, clutches and safety stop on the machine named and tested.
                2. Tilling depth and speed settings learned for your soil.
                3. Safe headland turns and slope working practised under supervision.
                4. Blockage clearing done only with the engine stopped, as a fixed rule.

                ## Notes
                Wear safety boots, and never reverse a rotavator towards your feet. Work across slopes only where the manual allows.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The operator can till a plot to the set depth with safe headland turns, and stops the engine before every blockage clear."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the controls and safety section of the manual"
                - "Practise starting, stopping and the emergency stop on flat ground"
                - "Till a test strip at two depths and compare"
                - "Write the stop-the-engine rule for blockages on the handle"
            - name: Welding and fabrication for field repairs
              description: |-
                ## Purpose
                Cracked brackets, broken implement frames and worn hitch pins are routine on stony or root-filled ground, and a farm that can weld fixes them the same day. A short course in arc welding and basic fabrication, with the right protective gear, turns long waits at the workshop into an afternoon's work.

                ## Milestones
                1. A welding course found through a technical institute, extension service or local fabricator.
                2. Protective gear bought: helmet, gloves, apron and boots.
                3. Practice welds done on scrap steel and checked by the instructor.
                4. One real repair made on a non-critical part and recorded.

                ## Notes
                Leave welds on rollover frames, axles and lifting points to a qualified fabricator; a home weld there can fail under load.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A completed welding course or supervised practice, and one recorded repair on a non-critical implement part."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the technical institute or a fabricator about short welding courses"
                - "Buy a welding helmet, gloves and apron"
                - "Practise welds on scrap steel with the instructor"
                - "Make one repair on a non-critical bracket and record it"
            - name: Choosing tractor size and horsepower
              description: |-
                ## Purpose
                Too small a tractor struggles with the plough on heavy ground; too large a one costs more, compacts soil and will not fit between orchard rows or on terraces. Matching horsepower, weight, two or four wheel drive and width to your implements, slopes and field sizes gives a short specification to take to dealers.

                ## Milestones
                1. The heaviest implement and the hardest job listed with the power they need.
                2. Field sizes, row widths, slopes and gateway widths measured.
                3. A specification written for horsepower range, drive, width and PTO speed.
                4. The specification checked with the extension officer or an experienced operator.

                ## Notes
                Start from the **Purchase decision** template. Parts and service availability on your island matter as much as horsepower.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written tractor specification covering horsepower range, drive, width and PTO, checked by an experienced person."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the implements the tractor must pull and their power needs"
                - "Measure gateway, row and terrace widths"
                - "Write a one-page tractor specification"
                - "Ask the extension officer or an experienced operator to check it"
            - name: Used tractor inspection before purchase
              description: |-
                ## Purpose
                Buying a reconditioned import or a neighbour's old tractor can turn out a bargain or a money pit, and the difference usually shows in a careful inspection. Checking engine smoke, blow-by, hydraulics, clutch, brakes, PTO, tyres, frame cracks and paperwork, ideally with a mechanic, protects the largest purchase most farms make.

                ## Milestones
                1. An inspection checklist written covering engine, hydraulics, transmission, PTO, tyres, frame and papers.
                2. At least two tractors inspected cold, started, and worked under load.
                3. A mechanic's opinion obtained on the preferred tractor.
                4. Ownership papers and serial numbers checked against the seller's documents.
                5. A purchase decision recorded with the price and the known repairs.

                ## Notes
                Insist on a cold start; a seller who has warmed the engine before you arrive may be hiding a starting fault. Confirm with the licensing authority that the tractor is not under a loan or reported stolen.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed inspection sheet and mechanic's opinion for the chosen tractor, with papers verified before any money changes hands."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write the used tractor inspection checklist"
                - "Arrange to see each tractor before it has been started that day"
                - "Book a mechanic to inspect the preferred tractor"
                - "Check the papers and serial number against the seller's documents"
            - name: New versus reconditioned implement comparison
              description: |-
                ## Purpose
                Disc harrows, bed formers and trailers are sold new from dealers, reconditioned from abroad and second-hand from neighbours, at very different prices and lives. Comparing price, expected life, parts supply and fit with your tractor for one implement at a time stops impulse buys and ill-matched kit.

                ## Milestones
                1. The implement needed named with the job and tractor it must fit.
                2. At least one new, one reconditioned and one second-hand option priced.
                3. Expected life, parts availability and weight checked for each.
                4. A choice recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-way comparison of new, reconditioned and second-hand options for one implement, ending in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Name the implement and the tractor it must match"
                - "Get a price for a new, a reconditioned and a used option"
                - "Ask each seller about parts and expected life"
                - "Record your choice and the reasons"
            - name: Dealer and parts supplier vetting
              description: |-
                ## Purpose
                On a small island one dealer may hold the only stock of filters and parts for your brand, and their service decides how long your tractor is idle. Vetting dealers and parts suppliers on stock, lead times, mechanic skills and warranty support before you need them gives you a first call and a fallback.

                ## Milestones
                1. Dealers and parts suppliers for each machine brand listed.
                2. Stock of common filters and parts checked with each.
                3. Lead times for imported parts and mechanic call-out rates recorded.
                4. A preferred and a backup supplier chosen for each brand.

                ## Notes
                Start from the **Vendor** template. Ask other farmers which dealer turned up when it mattered.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred and backup parts supplier named for each brand, with stock, lead times and rates recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the brands of every machine you own"
                - "Call each dealer and ask about stock of your filters"
                - "Record lead times for parts shipped from abroad"
                - "Choose a preferred and backup supplier for each brand"
            - name: Two-wheel tractor versus compact tractor
              description: |-
                ## Purpose
                On farms of two to ten acres the choice is often between a walk-behind two-wheel tractor with attachments and a small four-wheel compact tractor. Comparing what each can do on your slopes and soil, their cost per year, operator effort and resale gives a clear answer for a small farm.

                ## Milestones
                1. The jobs needed on the farm listed against what each machine type can do.
                2. Purchase price, running cost and implement cost found for both.
                3. Both types seen working on a similar farm.
                4. A choice recorded with the deciding reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of a two-wheel and a compact tractor for this farm, based on at least one site visit, ending in a decision."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the jobs each machine type would do on your farm"
                - "Price both types with the attachments you need"
                - "Visit a farm using each type and ask about effort and repairs"
                - "Write down which you chose and why"
            - name: Battery tools replacing small petrol engines
              description: |-
                ## Purpose
                Battery brushcutters, hedge trimmers and chainsaws are quieter, need no fuel mixing and suit short daily jobs, but batteries cost money and need charging where the power is unreliable. A trial of one battery tool against its petrol equivalent for a month shows whether switching saves time and money on your farm.

                ## Milestones
                1. One petrol tool chosen for comparison and its monthly fuel and repair cost noted.
                2. A battery equivalent borrowed, hired or bought with spare batteries.
                3. A month of work timed and costed with each.
                4. A decision recorded on whether to switch, with charging arrangements.

                ## Notes
                Check whether the farm's power supply or a solar charger can recharge batteries in time for the next day's work.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month-long side-by-side record of a battery and a petrol tool, ending in a recorded switch or keep decision."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Pick one petrol tool to compare and note its monthly costs"
                - "Borrow or buy a battery equivalent with a spare battery"
                - "Log hours, charging and costs for both for a month"
                - "Record whether to switch and how batteries will be charged"
            - name: Rebuild or replace an ageing tractor
              description: |-
                ## Purpose
                An old tractor with a tired engine faces a choice between a costly rebuild and replacement, and the decision is often made in a panic after a breakdown. Comparing rebuild quotes, expected extra years, parts supply and replacement cost while the tractor still runs gives a calm, costed decision.

                ## Milestones
                1. Current condition and hours of the tractor recorded with the main faults.
                2. Two rebuild quotes and the expected life after rebuild obtained.
                3. Replacement options priced, new and reconditioned.
                4. Cost per year of each option compared and a decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rebuild or replace decision based on two quotes and replacement prices, made before the tractor fails outright."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the tractor's hours and main faults"
                - "Get two rebuild quotes with expected extra years"
                - "Price a new and a reconditioned replacement"
                - "Compare cost per year and record the decision"
            - name: Farm trailer and haulage upgrade
              description: |-
                ## Purpose
                Crops lose value every hour they sit in the field, and a trailer with soft tyres, no brakes or rotten boards slows harvest and puts loads at risk on hilly farm roads. Assessing haulage needs, then repairing or replacing the trailer with brakes, lights and a tipping or drop side to suit the crop, speeds harvest and makes road trips legal.

                ## Milestones
                1. Typical loads, distances and road conditions written down.
                2. Current trailer inspected for tyres, brakes, lights, hitch and floor.
                3. Repair or replacement chosen and costed.
                4. Upgraded trailer in use with lights and brakes working and road rules checked.

                ## Notes
                Check with the licensing authority what a trailer needs to travel on public roads in your country.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trailer in use with working brakes, lights and a sound floor, meeting local road requirements."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write down typical loads, distances and roads"
                - "Inspect the trailer's tyres, brakes, lights and floor"
                - "Get prices for repair and for a replacement"
                - "Ask the licensing authority what road rules apply"
            - name: Pre-hurricane machinery securing plan
              description: |-
                ## Purpose
                Flying sheets, falling trees and flood water wreck machines left in the open or in low sheds, and a tractor is needed most in the clean-up after a storm. A written plan naming where each machine goes, how fuel is topped and stored, and what gets moved first when a warning comes protects the machines that will rebuild the farm.

                ## Milestones
                1. A high, sheltered parking place chosen for each machine away from trees and loose sheets.
                2. A move order written for when a storm watch is issued.
                3. Fuel tanks filled, batteries disconnected and small engines stored in the plan.
                4. Photographs and serial numbers of every machine stored off the farm.
                5. The plan rehearsed once before the hurricane season.

                ## Notes
                Keep a chainsaw and the tractor ready to clear access roads after the storm, but only once the all clear is given.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written machinery storm plan rehearsed before the hurricane season, with photographs and serials stored off the farm."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose a high, sheltered spot for each machine"
                - "Write the order machines are moved in when a watch is issued"
                - "Store photos and serial numbers in the cloud or with a relative"
                - "Rehearse the machinery storm plan before the season @recurring(yearly)"
            - name: Flood recovery for submerged engines
              description: |-
                ## Purpose
                An engine that has been under flood water and is then started can hydraulic-lock and wreck itself in seconds. Knowing the steps for a flooded tractor or pump, not starting it, draining, checking oils for water and calling a mechanic, can save an engine that would otherwise be scrap.

                ## Milestones
                1. A flood recovery card written: do not start, isolate battery, note water height.
                2. The card kept in the shed and every operator told about it.
                3. A mechanic agreed in advance for post-flood checks.
                4. After any flood, each affected machine checked and its oils changed before use.

                ## Notes
                Photograph water marks on machines before cleaning them; insurers usually need the evidence.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A flood recovery card posted, a mechanic agreed in advance, and no flooded engine started before it is checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the do-not-start flood card and post it in the shed"
                - "Tell every operator the rule in person"
                - "Agree with a mechanic to do post-flood checks"
                - "Note which parking spots flooded last time and move machines away"
            - name: Land preparation readiness check before planting season
              description: |-
                ## Purpose
                When the rains come every farm wants its land worked at once, and a tractor that fails its first morning puts the whole planting back. A dated readiness check two weeks before the season, testing tractor, implements, fuel, parts and operators, means you start on the first fit day.

                ## Milestones
                1. The readiness date set two weeks before expected land preparation.
                2. Each tractor and implement started, hitched and tested in a short run.
                3. Fuel, filters and shear bolts in stock for the first month.
                4. Operators and any hired contractor confirmed for the first week.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed readiness check two weeks before land preparation, with every machine tested and contractors confirmed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Set the readiness date two weeks before land preparation"
                - "Start, hitch and test-run each tractor and implement"
                - "Check stocks of fuel, filters and shear bolts"
                - "Confirm operators and contractors for the first week"
            - name: Operator induction for a new tractor driver
              description: |-
                ## Purpose
                New and seasonal drivers who have never used your tractor on your slopes are the point of greatest risk for both the person and the machine. A planned induction covering the walk-round, controls, hitching, slopes, PTO safety and what to do after a fault, signed off before they work alone, protects everyone.

                ## Milestones
                1. An induction plan written covering checks, controls, hitching, slopes, PTO and faults.
                2. The new driver supervised for at least one full working day.
                3. Safe working signed off by the owner or supervisor.
                4. Any licence or certificate the driver holds copied and filed.

                ## Notes
                Check whether your country requires a licence or certificate to drive a tractor on public roads, and do not let unlicensed drivers take machines on the road.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed induction sheet for each new driver before they work alone, with a supervised day recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the induction plan on one page"
                - "Supervise the new driver for a full working day"
                - "Sign off safe working on the induction sheet"
                - "Copy and file any driving licence or certificate"
            - name: Selling a surplus tractor or implement
              description: |-
                ## Purpose
                Unused implements lose value in the yard every year and tie up money that could pay for a better one. Cleaning, photographing and pricing a surplus machine against current local listings, then selling with a receipt that records the serial number, turns dead iron into cash and protects you if it is later misused.

                ## Milestones
                1. Surplus machines identified from the inventory.
                2. Each cleaned, photographed and priced against local listings.
                3. Advertised through farm groups, dealers or listing sites.
                4. Sold with a written receipt naming buyer, price, serial number and date.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A surplus machine sold with a receipt recording buyer, price, serial and date, and removed from the inventory."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark surplus machines on the inventory"
                - "Clean and photograph each one in good light"
                - "Check local listings to set an asking price"
                - "Write a sale receipt template with serial number and date"
            - name: Equipment field day and dealer demonstration visit
              description: |-
                ## Purpose
                Seeing a bed former, transplanter or small harvester working on real soil tells you more than any brochure. Planning a visit to an agricultural show, extension field day or dealer demonstration, with a list of questions and machines to see, makes it a buying trip rather than a day out.

                ## Milestones
                1. An upcoming show, field day or demonstration found.
                2. A list of machines to see and questions to ask written.
                3. The event attended and notes and prices recorded.
                4. Follow-up calls made on the one or two machines worth considering.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes and prices from one field day or demonstration recorded, with follow-up on at least one machine."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office about upcoming field days and shows"
                - "Write the machines you want to see and your questions"
                - "Attend and note prices and dealer contacts"
                - "Call back about the most promising machine within a week"
            - name: Farming small plots without owning a tractor
              description: |-
                ## Purpose
                Many smallholders farm one to five acres with a cutlass, a fork, a brushcutter and a hired tractor once a year. Planning the year around a few well-chosen hand and small powered tools, booked hire for the heavy jobs and shared kit with neighbours keeps costs low without losing planting dates.

                ## Milestones
                1. Jobs listed that truly need a tractor and those that hand tools or a brushcutter can do.
                2. A small powered tool kit chosen for the farm, such as a brushcutter and a walk-behind tiller.
                3. Tractor hire for heavy jobs booked for the coming season.
                4. One sharing arrangement agreed with a neighbour for a tool or a hire visit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written plan listing the farm's own tools, booked hire dates and one sharing arrangement with a neighbour."
                cadence: rolling
              tasks:
                - "List the jobs that really need a tractor this year"
                - "Choose the small tools that cover the rest"
                - "Book tractor hire for the next heavy job"
                - "Agree to share one tool or hire visit with a neighbour"
            - name: Machinery upkeep for a weekend farmer
              description: |-
                ## Purpose
                Farmers with a full-time job elsewhere see their machines once or twice a week, which is when batteries go flat and fuel goes stale. A short Saturday routine of start-up, a quick run, a fuel and battery check and a look for rats and leaks keeps a part-time farm's machines ready without eating the whole weekend.

                ## Milestones
                1. A fifteen-minute Saturday machine routine written.
                2. Battery isolators or maintainers fitted where machines stand all week.
                3. Fuel kept fresh with a stabiliser or small purchases.
                4. The routine done most weekends for three months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written Saturday routine done on most weekends for three months, with no flat-battery no-starts in that time."
                cadence: rolling
              tasks:
                - "Write a fifteen-minute Saturday machine routine"
                - "Fit a battery isolator to machines that stand all week"
                - "Start and briefly run each engine @recurring(weekly:sat)"
                - "Buy fuel in smaller amounts so it is used within a month"
            - name: Young farmer's first tractor plan
              description: |-
                ## Purpose
                Young farmers with land and energy but little capital are often tempted by a tractor before the farm can keep it busy. A staged plan, starting with hire, building records of hours and income, then buying a modest used tractor with a lender-ready case, gets the machine at the right time and on terms the farm can carry.

                ## Milestones
                1. One season of hire costs and hours recorded as evidence of need.
                2. A target tractor and implement set chosen and priced.
                3. Income from contract work or crops that the tractor will support estimated.
                4. A short case prepared for a lender or grant scheme with the numbers.
                5. A purchase made or deferred with the reasons written down.

                ## Notes
                Ask the extension office and youth farming programmes about grants or equipment schemes for young farmers before taking a loan.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A season of hire records and a costed case for a first tractor, ending in a recorded buy or defer decision."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Start logging every hour of tractor hire and its cost"
                - "Price a used tractor and the two implements you need most"
                - "Ask about young farmer equipment grants or schemes"
                - "Draft a one-page case for a lender with your numbers"
            - name: Handing farm machinery to the next generation
              description: |-
                ## Purpose
                When a farmer steps back, the tractors and implements often pass to a son, daughter or nephew with no papers, no service history and no agreement on who owns what. Recording ownership, condition and know-how, and agreeing in writing how machines pass on, keeps the family working and avoids disputes.

                ## Milestones
                1. Ownership papers for each machine found and checked.
                2. The older farmer's knowledge of each machine's quirks written or recorded.
                3. A family agreement on who takes each machine and when.
                4. Papers transferred and the inventory updated.

                ## Notes
                For anything involving wills, estates or tax on transfer, take the family agreement to a lawyer or accountant before acting on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written family agreement on machinery transfer and updated ownership papers for each machine passed on."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the ownership papers for every machine"
                - "Record the older farmer explaining each machine's quirks"
                - "Hold a family meeting on who takes which machine"
                - "Update papers and the inventory after transfer"
            - name: Farmer group machinery pool and booking rules
              description: |-
                ## Purpose
                Sharing one tractor and a set of implements across a group of farmers can cut each member's machinery cost sharply, but only with clear rules on booking, charges, servicing and damage. Writing those rules, a booking calendar and a maintenance fund before the first season keeps the pool and the friendships intact.

                ## Milestones
                1. Members, machines and how ownership is held agreed in writing.
                2. A booking system set up with priority rules for peak weeks.
                3. Hourly charges set to cover fuel, servicing and a replacement fund.
                4. Rules agreed for damage, breakdowns and leaving the group.
                5. A monthly meeting held to review bookings, repairs and money.

                ## Notes
                Ask the extension office or cooperative department whether the group should register formally, which can open grants and protect members.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Signed group rules, a working booking calendar and a monthly money report for the machinery pool."
                cadence: rolling
              tasks:
                - "Draft group rules on ownership, booking and charges"
                - "Set up a shared booking calendar or book"
                - "Agree an hourly charge that funds servicing and replacement"
                - "Review bookings, repairs and the fund with members @recurring(monthly:5)"
            - name: Starting a tractor contracting service
              description: |-
                ## Purpose
                Spare hours on a sound tractor and implements, once your own land is worked, can earn money from neighbours' ploughing, bed forming and mowing. Pricing per hour or per acre from real costs, setting booking and payment terms, and insuring for work on other people's land turns spare hours into a second income.

                ## Milestones
                1. Spare tractor hours across the year estimated from the field calendar.
                2. A price list per hour and per acre built from cost per hour plus margin.
                3. Booking, travel charge and payment terms written.
                4. Insurance cover for third-party and contract work confirmed with an insurer.
                5. First five paying jobs done and invoiced.

                ## Notes
                Ask an insurer what your policy covers on other people's land and on public roads; many farm policies exclude contract work.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written price list and terms, confirmed insurance for contract work, and five paid jobs invoiced."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Count the spare tractor hours your own farm leaves"
                - "Build a price list from your cost per hour plus margin"
                - "Ask your insurer whether contract work is covered"
                - "Send invoices and chase unpaid contract jobs @recurring(monthly:25)"
            - name: GPS guidance for straight beds and less overlap
              description: |-
                ## Purpose
                On larger vegetable and rice farms, overlap and crooked beds waste fuel, seed and inputs on every pass. A guidance system, from a simple lightbar to auto-steer, can cut overlap noticeably, but only pays where the hours and acres are high enough. Trialling or costing one against your field operations shows whether it earns back.

                ## Milestones
                1. Current overlap estimated by measuring passes in one field.
                2. Guidance options priced, from lightbar to auto-steer, with signal correction costs.
                3. A demonstration or hired system tried on one operation.
                4. Payback worked out from fuel and input savings on your acres.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A measured overlap figure and payback calculation for a guidance system, ending in a recorded buy or wait decision."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure pass widths and overlap in one field"
                - "Ask dealers for prices on lightbar and auto-steer systems"
                - "Arrange a demonstration on one field operation"
                - "Work out payback from your own acres and costs"
            - name: Mechanical harvesting assessment for root crops
              description: |-
                ## Purpose
                Harvest labour for sweet potato, cassava and dasheen is getting scarce and expensive, and a tractor-drawn lifter or digger can change what a farm can plant. Assessing whether your soils, bed layout and crops suit a mechanical lifter, and what it would cost against hand harvesting, shows whether mechanising is worth planning towards.

                ## Milestones
                1. Current harvest labour hours and cost per acre recorded.
                2. Lifter or digger types suited to your crops identified.
                3. Bed spacing and soil conditions checked against machine needs.
                4. A demonstration or hire trial run on one block.
                5. A cost comparison and decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cost per acre comparison of hand and mechanical harvesting on one block, ending in a recorded decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Record labour hours and cost for the last harvest"
                - "Ask dealers and the extension office about lifters for your crops"
                - "Check whether your bed spacing suits the machine"
                - "Arrange a trial lift on one block"
            - name: Ten-year machinery replacement plan
              description: |-
                ## Purpose
                Machines wear out on a schedule you can roughly predict, yet replacements usually arrive as emergencies financed at the worst moment. A ten-year plan showing when each major machine is likely to need replacing, its expected cost and how it will be paid for lets you save, apply for grants and buy on your terms.

                ## Milestones
                1. Expected remaining life estimated for each major machine.
                2. A ten-year table of likely replacements with current prices.
                3. A yearly amount set aside or a funding route named for each replacement.
                4. The plan reviewed and updated each year against actual condition.

                ## Notes
                Discuss the funding side with your accountant or lender; the plan gives them the numbers they will ask for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year replacement table with costs and funding routes for every major machine, reviewed each year."
                cadence: cyclic
              tasks:
                - "Estimate the remaining years for each major machine"
                - "List likely replacements in a ten-year table with current prices"
                - "Set a yearly sum to put aside for replacements"
                - "Review and update the replacement plan @recurring(yearly)"
            - name: Machinery cost per hectare by enterprise
              description: |-
                ## Purpose
                Mixed farms with several crops or livestock enterprises often cannot tell which one the tractor is really working for. Allocating machine hours and costs to each enterprise gives a machinery cost per hectare or per head, which shows where mechanisation pays, where it should be hired in and where it is eating the margin.

                ## Milestones
                1. Machine hours from the log split by enterprise for one year.
                2. Cost per hour applied to give machinery cost per enterprise.
                3. Cost per hectare or per head worked out and compared.
                4. One change decided for the most machinery-heavy enterprise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of machinery cost per hectare or per head for each enterprise, with one recorded change for the costliest."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Tag each logged machine hour with the enterprise it served"
                - "Multiply hours by cost per hour for each enterprise"
                - "Divide by hectares or head to compare enterprises"
                - "Choose one change for the costliest enterprise"
---

# Farm Machinery and Equipment

A tractor, a set of implements, a brushcutter and a chainsaw are often the most expensive things a Caribbean farm owns after the land, and they earn their keep only when they start on the day the rain stops and the ground is right. This area starts with the foundations (an inventory, the field operations calendar, manuals, a shed, tools, the hire or own decision and safety), then the routines of pre-start checks, hour-meter servicing, greasing, fuel, batteries, parts and rust, the skills of hitching, setting implements, hydraulics, diesel faults and field repairs, the buying and replacement decisions, the dated events of land preparation, storms and floods, variants for smallholders, weekend farmers, young farmers, families, groups and contractors, and finally GPS guidance, mechanical harvesting and cost per hectare.

The rhythm is a quick walk-round before every start, an hour-meter reading each Monday, a grease and wash-down on Fridays, monthly rounds on small engines, fuel, batteries and nozzles, quarterly parts counts and rust checks, and a yearly service and storm plan before land preparation and the hurricane season. The Metrics log, Operational checklist, Purchase decision and Vendor templates pair with the cost per hour record, the pre-start check, buying a tractor and vetting a dealer. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
