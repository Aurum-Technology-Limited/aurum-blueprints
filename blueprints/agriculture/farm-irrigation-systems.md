---
id: agriculture.farm-irrigation-systems
name: Farm Irrigation Systems
description: "Irrigation that puts the right water on each block: sources mapped and permitted, drip and sprinkler layouts that suit the crop, pumps and solar sized properly, schedules, logs and the maintenance that keeps emitters running."
category: business
version: 1.0.0
tags: [agriculture, farm-irrigation-systems, small-business, drip-irrigation, sprinklers, solar-pumping, water-permits, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - vendor
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Irrigation Systems
          description: "Watering crops efficiently: water sources and permits, drip and sprinkler systems, pumps and solar pumping, scheduling and maintenance."
          projects:
            - name: Farm water source survey and map
              description: |-
                ## Purpose
                Most irrigation trouble starts with a source nobody measured or mapped: a river that drops to a trickle in March, a well shared with the house, a pond that silts up. A sketch map of every source, its distance and height from the fields and who else draws on it is the base for every later decision on pipes, pumps and permits.

                ## Milestones
                1. Every water source on or next to the farm listed: wells, springs, rivers, ponds, tanks, roof catchment and any public supply.
                2. A sketch map showing each source, the fields, the rough height difference and the pipe route between them.
                3. Each source marked with who else uses it and whether it has failed in a past dry season.
                4. One main source and one backup chosen for the irrigated blocks.

                ## Notes
                Walk the route the pipe would take, not the straight line on the map. Gullies, roads and a neighbour's land all change the cost.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated map of all water sources and fields exists, with a main and a backup source named for irrigation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every water source on or beside the farm in a notebook"
                - "Walk each source with a neighbour and note how it behaved last dry season"
                - "Draw the sources, fields and pipe routes on one sketch map"
                - "Pick a main and a backup source and write the reason beside each"
            - name: Water abstraction permit and rights check
              description: |-
                ## Purpose
                In many islands taking water from a river, spring or well for irrigation needs a licence or permit from the water authority, and drawing without one can mean fines or a shut-off just when the crop needs it. Finding out what applies to your source, and getting it in writing, protects the investment in pumps and pipe before it is made.

                ## Milestones
                1. The authority that licenses water abstraction in your country identified, with a named contact.
                2. The rules for your source type and volume confirmed in writing or from the official website.
                3. An application submitted or an exemption confirmed, with copies filed.
                4. Any limits on volume, hours or season written into the irrigation plan.

                ## Notes
                Rules differ by country and by source. Ask the water authority or your extension officer rather than relying on what a neighbour was told years ago.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A permit, licence or written exemption for each irrigation source is on file, with any volume or season limits recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find out which authority licenses irrigation water in your country"
                - "Ask the authority what applies to your source type and volume"
                - "Submit the application or get the exemption confirmed in writing"
                - "Check the permit expiry date and renewal conditions @recurring(yearly)"
            - name: Irrigation water quality test for clogging and salinity
              description: |-
                ## Purpose
                Drip emitters block on iron, sand, algae and hard water, and salty well water near the coast can burn crops and build up in the soil. A lab test for salinity, pH, iron, hardness and suspended solids tells you which filter you need, whether line treatments will be required and which crops can tolerate the water.

                ## Milestones
                1. A lab that tests irrigation water found through the extension service or the ministry.
                2. A sample taken from each main source in a clean bottle, the way the lab asks.
                3. Results received for salinity, pH, iron, hardness and suspended solids.
                4. The results explained by the extension officer or lab, with filter and crop implications written down.

                ## Notes
                This test is about the water's effect on equipment and crops. Testing for bacteria for food safety is a separate test with its own sampling rules.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lab report on salinity, pH, iron, hardness and solids for each irrigation source is filed with its meaning written underneath."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension office which lab tests irrigation water"
                - "Collect a sample from each source following the lab's instructions"
                - "Go through the results with the extension officer or the lab"
                - "Retest each source before the dry season starts @recurring(yearly)"
            - name: Measuring how much water the source can deliver
              description: |-
                ## Purpose
                Drip systems designed for more water than the well or spring can give run every block at low pressure and leave the far end dry. Timing how long the source takes to fill a container of known size, and watching how far a well draws down while pumping, gives the real flow you can design to.

                ## Milestones
                1. Flow from each source measured by timing a drum or bucket of known volume.
                2. For a well, the water level checked before pumping, during a long pumping run and after recovery.
                3. The measured flow converted to litres per hour and litres per day.
                4. A safe working flow written down for the dry months, below the measured maximum.

                ## Notes
                Measure in the dry season if you can. A spring that gives plenty in October may give half that in April.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A measured flow in litres per hour for each source, taken on a recorded date, is written into the irrigation plan."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Time how long the source takes to fill a 200 litre drum"
                - "Measure the well water level before and after a two-hour pumping run"
                - "Convert the readings to litres per hour and litres per day"
                - "Set a dry-season working flow below the measured maximum"
            - name: Crop water needs for each block
              description: |-
                ## Purpose
                Peppers, melons, citrus and pasture use very different amounts of water, and the same crop needs far more in the dry season than in the wet. Working out a rough daily need for each block, with the extension officer or published crop factors, tells you whether the source can carry all your planned acreage or only part of it.

                ## Milestones
                1. Each irrigated block listed with its crop, area and planting date.
                2. A rough peak daily water need for each block taken from extension guidance or crop factor tables.
                3. Total peak demand compared with the measured source flow.
                4. A decision recorded on how much land can be irrigated in the driest month.

                ## Notes
                Plan for the peak month, not the average. A source that covers the average will still fail you in the last six weeks of the dry season.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of peak daily water need per block, set against source flow, with the irrigable area for the driest month recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each block with its crop, size and planting date"
                - "Ask the extension officer for peak water use figures for your crops"
                - "Add up peak daily demand and compare it with the source flow"
                - "Write down how many blocks the source can carry in the driest month"
            - name: Field levels and pressure survey for slopes
              description: |-
                ## Purpose
                Every ten metres of height gained or lost changes water pressure by about one bar, which is enough to make emitters at the bottom of a slope gush while those at the top barely drip. A simple level survey with a water tube or a phone app shows where you will need pressure regulators, separate zones or pressure-compensating emitters.

                ## Milestones
                1. Heights of the source, the tank and the top and bottom of each block measured or estimated.
                2. Height differences converted to pressure gain or loss for each block.
                3. Blocks with more than a small change in height flagged for separate zoning or regulation.
                4. The levels marked on the farm water map.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each block on the map shows its height relative to the source, with blocks needing regulation or separate zones marked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Make a water-tube level from clear hose and two stakes"
                - "Measure the height of the tank above the top and bottom of each block"
                - "Convert each height difference to pressure on a simple table"
                - "Mark the blocks that need regulators or their own zone"
            - name: Irrigation zone layout plan
              description: |-
                ## Purpose
                Splitting the farm into zones that each run off one valve, sized so the pump or source can supply them, is what lets you water peppers daily and the orchard twice a week without dragging hoses. A layout drawn before buying pipe also gets the main line sizes right, which is the most expensive mistake to fix later.

                ## Milestones
                1. The farm divided into zones, each with one crop or water need and an area the source can supply at once.
                2. Main line, sub-main and lateral routes drawn with rough lengths.
                3. Valve positions marked where a worker can reach them easily.
                4. A pipe size for each main and sub-main agreed with a supplier or extension officer.

                ## Notes
                Keep crops with different water needs on different zones, even if it costs one extra valve.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A drawn zone layout with pipe routes, lengths, valve positions and agreed main line sizes is ready to price."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Split the farm into zones by crop and water need"
                - "Draw main, sub-main and lateral routes with rough lengths"
                - "Mark each valve where a worker can reach it without crossing beds"
                - "Ask a supplier to check the main line sizes against your flow"
            - name: Choosing drip, sprinkler or hose for each crop
              description: |-
                ## Purpose
                Drip saves water and keeps leaves dry, which cuts disease in tomatoes and peppers, but sprinklers suit pasture, leafy crops and nurseries and a hose may still be right for a small herb bed. Matching the method to each crop and to the water quality avoids paying for drip where it will clog or for sprinklers where the water will not stretch.

                ## Milestones
                1. Each crop rated for drip, sprinkler, micro-sprinkler or hand watering against water use, disease risk and cost.
                2. Water quality results checked for any method they rule out.
                3. A method chosen for each zone with a one-line reason.
                4. A rough cost per zone noted for the chosen method.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every zone has a chosen watering method and a recorded reason, consistent with the water test results."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each crop beside drip, sprinkler and hand watering options"
                - "Ask two growers of the same crops what method they use and why"
                - "Check the water test for anything that rules drip out"
                - "Write the chosen method and reason against each zone"
            - name: Irrigation set-up budget per acre
              description: |-
                ## Purpose
                Pipe, fittings, filters, valves, a pump and a tank add up quickly, and growers often run out of money with half a block installed. A costed budget per acre, with quotes rather than guesses, shows what to install this season, what can wait and whether a loan or grant application makes sense.

                ## Milestones
                1. A parts list for each zone taken from the layout plan.
                2. Prices gathered from at least two suppliers for the main items.
                3. A total cost and a cost per acre worked out, with labour and transport included.
                4. An install order agreed: which zones go in first and which wait.

                ## Notes
                Add about one tenth for fittings, glue and the parts you will forget. Every first install has them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A priced irrigation budget with cost per acre and a zone-by-zone install order is written and dated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Turn the layout plan into a parts list for each zone"
                - "Get written prices from two irrigation suppliers"
                - "Add labour, transport and a margin for forgotten fittings"
                - "Decide which zones are installed this season and which wait"
            - name: As-built irrigation drawing and parts list
              description: |-
                ## Purpose
                Two years after installation nobody remembers where the buried main runs, which valve feeds which block or what size the filter screen is. An as-built drawing and parts list kept in the farm office saves digging up the wrong line and lets a new worker or contractor find their way around the system on day one.

                ## Milestones
                1. Buried pipe routes, valves, filters and the pump marked on a drawing with rough distances from fixed points.
                2. Pipe sizes, emitter types and filter specifications listed.
                3. Supplier names and part numbers noted for anything that wears out.
                4. Copies kept in the farm office and photographed on the phone.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated as-built drawing and parts list covering every zone is stored in two places."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Mark buried lines with distances from posts, trees or buildings"
                - "List pipe sizes, emitter types and filter screen sizes"
                - "Write supplier names and part numbers beside wearing parts"
                - "Photograph the drawing and keep the paper copy in the farm office"
            - name: Weekly watering schedule by block
              description: |-
                ## Purpose
                Watering by habit, the same hour every day whatever the weather, wastes water in a wet week and starves crops in a hot one. A short weekly plan, set each Monday from the weather, the crop stage and soil checks, tells everyone which zone runs, for how long and when.

                ## Milestones
                1. A one-page schedule showing each zone, its run days and run times.
                2. Run times adjusted for crop stage, from transplant to peak fruiting.
                3. Rain in the past week and forecast for the next used to change the plan.
                4. The schedule posted where workers start the pumps.

                ## Notes
                Early morning watering loses less to evaporation and leaves foliage time to dry before night.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written schedule for each zone is set every Monday and followed for at least eight weeks in a row."
                cadence: rolling
              tasks:
                - "Draft this week's run days and times for each zone"
                - "Set next week's zone run times from forecast and crop stage @recurring(weekly:mon)"
                - "Post the schedule beside the pump or valve station"
                - "Mark on the schedule any run that was skipped or cut short"
            - name: Irrigation log with meter readings
              description: |-
                ## Purpose
                Fitting a water meter after the pump and reading it weekly turns guesswork into numbers: how much each zone used, whether a leak has started and what the dry season really costs in water and fuel. The log is also the evidence a permit holder or lender may ask for.

                ## Milestones
                1. A water meter fitted after the pump or filter, or one already there located and read.
                2. A log page with date, meter reading, hours run and rainfall.
                3. Weekly use per zone worked out for at least a month.
                4. A sudden rise in use traced to a leak or a schedule change.

                ## Notes
                Start from the **Metrics log** template. An inexpensive meter pays for itself the first time it shows a hidden leak.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The meter log has a reading every week for three months and a monthly use total for each zone."
                cadence: rolling
              tasks:
                - "Fit or locate a water meter after the pump"
                - "Write the meter reading and pump hours in the log @recurring(weekly:sat)"
                - "Total the month's water use per zone and compare with last month @recurring(monthly:28)"
                - "Investigate any week where use jumps without a schedule change"
            - name: Filter cleaning routine
              description: |-
                ## Purpose
                Clogged filters drop pressure across the whole system long before anyone notices, and the emitters at the end of the line go first. Cleaning screen or disc filters on a set day, more often when the water is dirty after rain, keeps pressure steady and protects every emitter downstream.

                ## Milestones
                1. Every filter on the farm listed with its type and location.
                2. Pressure gauges fitted before and after the main filter.
                3. A cleaning day set and the method written for each filter type.
                4. The pressure difference that means clean now written beside the gauges.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each filter has been cleaned on its set day for eight weeks, with gauge readings before and after recorded."
                cadence: rolling
              tasks:
                - "Fit a pressure gauge on each side of the main filter"
                - "Clean the screen or disc filters and note the gauge readings @recurring(weekly:wed)"
                - "Write the clean-now pressure difference on a tag at the filter"
                - "Keep a spare filter element and seals at the pump house"
            - name: Drip lateral flushing and emitter check
              description: |-
                ## Purpose
                Silt and algae settle at the dead ends of drip laterals and slowly block the last emitters on every row. Opening the line ends once a month until the water runs clear, and walking the rows for dry patches, catches blockages before plants show stress.

                ## Milestones
                1. End caps or flush valves on every lateral and sub-main identified.
                2. A flushing order worked out so pressure stays high enough to clear each line.
                3. Each lateral flushed until clear water runs, monthly.
                4. Blocked or damaged emitters marked and replaced the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lateral on the farm has been flushed monthly for three months with blocked emitters replaced and noted."
                cadence: rolling
              tasks:
                - "Mark the end of every lateral with a stake or ribbon"
                - "Flush laterals a few at a time until the water runs clear @recurring(monthly:12)"
                - "Walk each row and mark dry spots or wet patches"
                - "Replace marked emitters and note how many on the row card"
            - name: Pump service routine
              description: |-
                ## Purpose
                Pumps that fail in the second week of a dry spell can cost a whole crop. A short monthly check of oil, belts, seals, priming and noise, and a fuller service at the intervals in the manual, keeps small faults from turning into a seized engine or a burnt motor.

                ## Milestones
                1. The manual for each pump found or downloaded, with service intervals noted.
                2. A monthly check list written: leaks, oil, belts, strainer, priming, vibration and noise.
                3. Running hours recorded so services fall due on time.
                4. A mechanic or electrician named for work beyond basic checks.

                ## Notes
                Start from the **Operational checklist** template. Running a centrifugal pump dry, even briefly, can ruin the seal.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each pump has a monthly check recorded for six months and every manufacturer service done at the due running hours."
                cadence: rolling
              tasks:
                - "Find the service intervals in each pump's manual"
                - "Check pump oil, belts, seals, strainer and noise @recurring(monthly:5)"
                - "Book the full service at the due running hours @recurring(quarterly)"
                - "Save the number of a pump mechanic in the farm phone"
            - name: Leak and damage walk after field work
              description: |-
                ## Purpose
                Hoes, cutlasses, rats, dogs and the tractor all find drip tape, and a single cut lateral can drain a zone's pressure for days. A Friday walk along every main and lateral, with a repair kit in hand, keeps losses small and shows which jobs or pests cause the most damage.

                ## Milestones
                1. A repair kit made up with joiners, goof plugs, tape, a knife and spare tape.
                2. A walking route covering every main, valve and lateral.
                3. Leaks repaired on the spot and the cause noted.
                4. A pattern of damage, such as rats at one corner or cuts after weeding, acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly leak walk has been done for eight weeks, with repairs and their causes noted each time."
                cadence: rolling
              tasks:
                - "Put together a repair bag with joiners, plugs and a sharp knife"
                - "Walk every main and lateral and repair leaks on the spot @recurring(weekly:fri)"
                - "Note the cause of each leak on the log sheet"
                - "Brief workers on where the drip lines run before weeding starts"
            - name: Soil moisture check before each watering
              description: |-
                ## Purpose
                The soil, not the calendar, says whether a crop needs water. A quick feel test at root depth twice a week, backed by a tensiometer or moisture meter on one key block, stops both overwatering that drowns roots and leaches nutrients and the dry spells that crack fruit and drop flowers.

                ## Milestones
                1. The feel method learned for your soil type, from wet to dry.
                2. A tensiometer or moisture meter installed at root depth in one main block.
                3. Readings taken twice a week and written beside the schedule.
                4. Run times changed at least once because of a reading, with the result noted.

                ## Notes
                Clay holds water longer than sandy soil, so the same reading means different things on different blocks.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twice-weekly soil moisture readings are recorded for eight weeks, with at least one schedule change made because of them."
                cadence: rolling
              tasks:
                - "Dig to root depth and squeeze a handful of soil to learn its feel"
                - "Install one tensiometer or moisture sensor in the main block"
                - "Read soil moisture in each block before watering @recurring(weekly:mon,thu)"
                - "Change a zone's run time when readings stay wet or dry"
            - name: Drip line cleaning treatments planned with your supplier
              description: |-
                ## Purpose
                Where water carries iron, lime or algae, flushing alone will not keep emitters clear and lines need periodic chemical cleaning. The product, the concentration and the safety steps must come from the supplier, the label and the extension officer, and the treatment needs a calendar so it is done before blockages set in.

                ## Milestones
                1. The type of clogging identified from the water test and from looking inside a blocked emitter.
                2. A treatment product and method agreed with the supplier or extension officer, with the label read.
                3. Protective equipment and a safe mixing place in place before first use.
                4. Treatment dates and results recorded.

                ## Notes
                Never mix chlorine products and acids. Follow the label and the supplier's instructions exactly, and keep treated water away from fish ponds and drinking supplies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written line-cleaning plan from the supplier or extension officer is on file, with each treatment date and result recorded."
                cadence: cyclic
              tasks:
                - "Cut open a blocked emitter and photograph what is inside"
                - "Ask the supplier which cleaning product suits your water and emitters"
                - "Read the label and set up protective gear before first treatment"
                - "Carry out the agreed line treatment and record the result @recurring(quarterly)"
            - name: Tank and pond upkeep for irrigation water
              description: |-
                ## Purpose
                Storage tanks and ponds feed silt, algae, leaves and mosquito larvae straight into the filters if they are left alone. A monthly look at inlets, covers, overflow and the water level, and a clean-out before the dry season, keeps stored water usable and the filters from choking.

                ## Milestones
                1. Every storage tank and pond listed with its capacity.
                2. Covers, inlet screens and overflows in place on each tank.
                3. The intake set above the silt line, or a floating intake fitted.
                4. A dry-season clean-out date set for each store.

                ## Notes
                Covered tanks grow far less algae. Open water also breeds mosquitoes, so screen or cover where you can.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each tank and pond has had a recorded monthly inspection for four months and a clean-out before the dry season."
                cadence: rolling
              tasks:
                - "List each tank and pond with its capacity in litres"
                - "Inspect tank covers, inlet screens, overflow and water level @recurring(monthly:20)"
                - "Raise the pump intake above the silt or fit a floating intake"
                - "Book a clean-out of each tank for the end of the wet season"
            - name: Irrigation spares box and reorder list
              description: |-
                ## Purpose
                Irrigation fittings are cheap until the one you need is out of stock at the agro shop and a zone stays dry for a week. A spares box with the right sizes of joiners, tees, valves, seals and a filter element, counted every quarter, means repairs happen the same day.

                ## Milestones
                1. A list of the fittings and sizes used on the farm drawn from the as-built parts list.
                2. A minimum stock level set for each spare.
                3. A labelled box or shelf stocked to those levels.
                4. A reorder list kept and refilled after every repair.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stocked spares box matches a written minimum list, counted every quarter for a year."
                cadence: rolling
              tasks:
                - "Write the spare fittings list with sizes from the as-built drawing"
                - "Set a minimum number for each spare"
                - "Buy enough to fill the box to minimum levels"
                - "Count the spares box and reorder anything below minimum @recurring(quarterly)"
            - name: Pressure, flow and friction loss basics
              description: |-
                ## Purpose
                Most irrigation problems come down to three ideas: pressure, flow and the pressure lost to friction in pipe that is too small or too long. Learning them well enough to read a supplier's chart lets you question a quote, diagnose weak zones and design small extensions yourself.

                ## Milestones
                1. Pressure in bar and metres of head, and flow in litres per hour, explained in your own words.
                2. A friction loss chart used to check one main line on the farm.
                3. The pressure needed at the start of a drip zone worked out from the emitter specification.
                4. One weak zone explained using the three ideas.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains pressure, flow and friction loss, with a worked check of one main line on the farm."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Get a friction loss chart for poly pipe from a supplier"
                - "Work through how pressure, head and flow relate using your own pump"
                - "Check one main line's friction loss against the chart"
                - "Explain one weak zone on the farm in a short written note"
            - name: Reading a pump curve
              description: |-
                ## Purpose
                Every pump has a curve showing how much water it gives at each pressure, and a pump run far from its best point wastes fuel and wears out early. Being able to read the curve and mark where your system sits is what stops you buying a pump that is too big, too small or wrong for the lift.

                ## Milestones
                1. The curve for your current pump found from the maker or supplier.
                2. Total head worked out from lift, pipe friction and the pressure the emitters need.
                3. Your system's working point marked on the curve.
                4. A note on whether the pump suits the system or is working outside its best range.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The farm's working point is marked on its pump curve, with a written verdict on whether the pump suits the system."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Download or request the curve for your current pump model"
                - "Add up suction lift, delivery height, pipe friction and emitter pressure"
                - "Mark the working point on the curve"
                - "Write whether the pump is oversized, undersized or about right"
            - name: Joining poly pipe and fittings properly
              description: |-
                ## Purpose
                Poorly made joints are behind most leaks and blow-outs, and a compression fitting forced on at an angle or a PVC joint glued in a hurry will fail under pressure. Practising the right way to cut, clean, glue, clamp and insert on offcuts takes an afternoon and saves weeks of leaks.

                ## Milestones
                1. Square cuts made with a pipe cutter, not a cutlass.
                2. PVC joints solvent welded following the glue maker's curing time.
                3. Poly compression and barbed fittings fitted without kinks or leaks under pressure.
                4. A test section pressurised and checked before working on live lines.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice board of PVC and poly joints holds working pressure for a day without leaking."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Buy a proper pipe cutter and a few metres of offcut pipe"
                - "Practise PVC solvent joints and leave them for the full curing time"
                - "Fit compression and barbed poly fittings on offcuts"
                - "Pressure test the practice joints from a tap for a full day"
            - name: Drip uniformity test on one block
              description: |-
                ## Purpose
                Looking at a drip block tells you little: it can seem fine while the emitters at the far end give half the water of those near the valve. Catching the output of a sample of emitters for a set time, at the head, middle and tail of the block, shows how evenly the system waters and whether pressure, clogging or layout is to blame.

                ## Milestones
                1. Sample emitters chosen near the head, middle and tail of several laterals.
                2. Output from each caught in cups for a timed period and measured.
                3. The lowest quarter of readings compared with the average to get a uniformity figure.
                4. The cause of any poor result identified and a fix planned.

                ## Notes
                Ask your extension officer how to calculate distribution uniformity. Many services will help with the first test.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A uniformity figure for one drip block is recorded with the cause of any poor result and a planned fix."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Choose sample emitters at the head, middle and tail of the block"
                - "Catch each emitter's output in a cup for a timed ten minutes"
                - "Compare the lowest quarter of readings with the average"
                - "Repeat the uniformity test on the same block @recurring(yearly)"
            - name: Sprinkler catch-can test
              description: |-
                ## Purpose
                Sprinklers that overlap badly leave dry rings and soggy patches, and few growers know how many millimetres an hour their system actually applies. Laying out cans in a grid, running the zone for a set time and measuring what lands in each tells you both the application rate and how even it is.

                ## Milestones
                1. Identical cans or containers set out in a grid between sprinklers.
                2. The zone run for a timed period in still conditions.
                3. Water depth measured in each can and the application rate in millimetres per hour worked out.
                4. Spacing, nozzle or pressure changes made where coverage is uneven.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A catch-can grid result with the application rate in millimetres per hour is recorded for one sprinkler zone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect 20 identical straight-sided containers"
                - "Set them in a grid between sprinklers on a still morning"
                - "Run the zone for 30 minutes and measure the depth in each can"
                - "Work out the application rate and mark dry or soggy patches"
            - name: Electrical safety around irrigation pumps
              description: |-
                ## Purpose
                Water, mains electricity and a pump house with a dirt floor are a lethal mix, and burnt motors and shocks are common where wiring was done by a friend. Knowing what safe looks like, and having a qualified electrician inspect it, protects workers and the most expensive part of the system.

                ## Milestones
                1. The pump supply checked by a qualified electrician for earthing, a residual current device and correct cable size.
                2. Switchgear housed off the ground and out of the rain.
                3. Workers shown how to isolate the pump before touching it.
                4. Faults found by the electrician fixed and the inspection date recorded.

                ## Notes
                Do not open motor or panel covers yourself unless you are qualified. A residual current device is cheap compared with an injury.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A qualified electrician's inspection of every pump supply is recorded, with all faults fixed and workers shown how to isolate."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a qualified electrician to inspect each pump supply"
                - "Move any switchgear sitting on the floor or in the rain"
                - "Show every worker how to switch off and isolate the pump"
                - "Record the inspection date and the faults fixed"
            - name: Backflow protection for fertiliser injectors
              description: |-
                ## Purpose
                Once a venturi or dosing pump is fitted, fertiliser or treatment water can siphon back into a well, a tank or the house supply when the pump stops. Learning how check valves, vacuum breakers and air gaps work, and fitting them before the first injection, protects drinking water and the source itself.

                ## Milestones
                1. Every point where an injector or chemical tank joins the system identified.
                2. The backflow device each point needs agreed with the supplier.
                3. Check valves or vacuum breakers fitted and tested.
                4. A rule written that nothing is injected until backflow protection is confirmed.

                ## Notes
                Rates and products for anything injected come from the label, the supplier and the extension officer, not from this plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every injection point has a fitted and tested backflow device, recorded on the as-built drawing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark every injector and chemical tank connection on the drawing"
                - "Ask the supplier which backflow device each connection needs"
                - "Fit and test the check valves or vacuum breakers"
                - "Add the backflow devices to the as-built parts list"
            - name: Choosing an irrigation pump
              description: |-
                ## Purpose
                Buying a pump on price or horsepower alone is the commonest expensive mistake in irrigation. Choosing from the flow and head your system needs, the power available and the service support nearby gets a pump that runs near its best point for years.

                ## Milestones
                1. Required flow and total head written down from the layout and source tests.
                2. Power options compared: mains electric, petrol, diesel or solar.
                3. Three pumps shortlisted with curves showing they meet the duty point.
                4. A pump chosen with parts and service available on the island.

                ## Notes
                Start from the **Purchase decision** template. A pump that can be repaired locally beats a slightly cheaper one that has to go abroad for parts.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pump is chosen whose curve meets the written flow and head, with local service support confirmed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the flow and total head the system needs"
                - "Ask three suppliers for pumps that meet that duty point"
                - "Compare curves, power source, price and local parts support"
                - "Record the pump chosen and why"
            - name: Solar pumping system sizing and decision
              description: |-
                ## Purpose
                Fuel for a petrol or diesel pump is a cost that never stops, and mains power may not reach the field. A solar pump fills a tank in daylight for free once paid for, but only if panels, pump and storage are sized to the dry-season demand. Comparing it honestly with fuel and grid costs over ten years shows whether it pays.

                ## Milestones
                1. Current yearly fuel or electricity cost for pumping worked out from the log.
                2. Daily water demand in the peak month and the lift written down.
                3. Two solar quotes obtained with panel size, pump model and tank size stated.
                4. Ten-year costs of solar and the current option compared and a decision recorded.

                ## Notes
                Solar pumps work best pumping to a tank by day and irrigating by gravity, so size the tank for at least a day or two of cloud.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of ten-year solar and current pumping costs, based on two quotes, ends with a recorded decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add up last year's fuel or power cost for pumping"
                - "Write down peak-month daily demand and total lift for installers"
                - "Get two solar pumping quotes that state panel, pump and tank sizes"
                - "Ask the agent to compare ten-year costs of solar and the current pump"
            - name: Choosing the right filter for your water
              description: |-
                ## Purpose
                Screen filters are fine for clean well water, but river or pond water full of organic matter needs a disc or sand media filter or the emitters will clog within weeks. Choosing the filter type and mesh from the water test and the emitter maker's requirement protects the whole drip investment.

                ## Milestones
                1. The emitter maker's required filtration level found.
                2. Water test results checked for sand, silt, algae and organic load.
                3. Screen, disc and sand media options compared for your flow.
                4. A filter chosen, sized for the system flow, with spare elements available.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A filter type and mesh size matched to the emitter requirement, the water test and the system flow is chosen and recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the filtration level your emitters require"
                - "Check the water test for silt, sand and organic load"
                - "Compare screen, disc and sand media filters for your flow rate"
                - "Choose the filter and confirm spare elements are stocked locally"
            - name: Pressure-compensating or standard drip emitters
              description: |-
                ## Purpose
                Pressure-compensating emitters give the same flow over a range of pressures, which matters on long rows and slopes, but they cost more and some need higher pressure to work. Comparing them with standard drip tape for each zone avoids paying extra where the ground is flat and runs are short.

                ## Milestones
                1. Each zone's row length and height change listed.
                2. Prices for standard tape and pressure-compensating line gathered for each zone.
                3. Minimum operating pressure checked against what the system can supply.
                4. An emitter type chosen per zone and written on the layout.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each zone has a chosen emitter type, checked against row length, slope and available pressure, written on the layout."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List row length and height change for each zone"
                - "Price standard tape and pressure-compensating line per metre"
                - "Check each option's minimum operating pressure against your system"
                - "Mark the chosen emitter type on the zone layout"
            - name: Converting a hose-watered plot to gravity drip
              description: |-
                ## Purpose
                Hand watering with a hose takes hours every day and puts water everywhere except where roots need it. A raised tank and a simple drip kit fed by gravity can water a few beds in the time it takes to open a valve, with no pump at all, and is the cheapest first step into drip.

                ## Milestones
                1. A tank stand built at least a metre above the beds.
                2. A gravity drip kit or low-pressure tape bought for the beds.
                3. A screen filter fitted after the tank outlet.
                4. The plot watered by drip for a month, with time saved noted.

                ## Notes
                Gravity drip runs at very low pressure, so choose tape or emitters rated for it and keep rows short.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A gravity drip system waters the plot from a raised tank for a month, with daily watering time before and after recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Time how long hand watering takes on a normal day"
                - "Build a tank stand at least one metre above the beds"
                - "Buy a low-pressure drip kit sized for the beds"
                - "Fit a screen filter at the tank outlet and lay the lines"
            - name: Roof catchment into the irrigation tank
              description: |-
                ## Purpose
                Packing shed and pen roofs shed thousands of litres in a single wet-season downpour, and plumbing them into the irrigation storage gives free water close to the fields. Getting gutters, first-flush diverters and an overflow right keeps leaves and roof dirt out of the filters.

                ## Milestones
                1. Roof area of each farm building measured and likely yield in a heavy rain estimated.
                2. Gutters, downpipes and a first-flush diverter fitted on the chosen roof.
                3. Catchment piped into a tank that feeds the irrigation system.
                4. An overflow route that does not erode the yard or flood a pen.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one farm roof feeds the irrigation tank through gutters and a first-flush diverter, with overflow safely routed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the roof area of each farm building"
                - "Fit gutters and a first-flush diverter on the best roof"
                - "Pipe the downpipe into the irrigation storage tank"
                - "Dig or pipe an overflow route away from pens and paths"
            - name: Timers and controllers for unattended watering
              description: |-
                ## Purpose
                With a battery tap timer or a simple controller and solenoid valves, zones run at dawn whether or not anyone is at the farm. Choosing the right level of automation for your power supply and theft risk saves labour without leaving a crop dry when a battery dies.

                ## Milestones
                1. Zones that would benefit most from automatic watering identified.
                2. Battery tap timers, solar controllers and mains controllers compared on cost and reliability.
                3. One zone automated and run for a month alongside manual checks.
                4. A battery change and fault check routine written for the controller.

                ## Notes
                Anything left visible in the field can walk. Lock controllers in a box or hide them under cover.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One zone has run automatically for a month with manual checks confirming it watered on schedule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the zone where a missed watering costs the most"
                - "Compare battery timers and solar controllers from two suppliers"
                - "Install a controller on one zone and check it runs at dawn"
                - "Write a battery change and fault check routine for the controller"
            - name: Choosing an irrigation supplier and installer
              description: |-
                ## Purpose
                A supplier who stocks the parts, answers the phone in April and will come out to the farm is worth more than the cheapest quote. Comparing two or three on stock, advice, design help and after-sales service before a big order avoids being stranded with an odd fitting nobody else carries.

                ## Milestones
                1. Two or three irrigation suppliers or installers identified through growers and the extension service.
                2. Each asked for a quote on the same zone layout.
                3. Stock depth, design help, warranty and call-out service compared.
                4. One main supplier chosen with contact details and terms filed.

                ## Notes
                Start from the **Vendor** template. Ask growers which supplier still answered when something failed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main irrigation supplier is chosen from at least two compared quotes, with contact details and warranty terms filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask three growers which irrigation supplier they trust"
                - "Send the same zone layout to two or three suppliers for quotes"
                - "Compare stock, design help, warranty and call-out service"
                - "File the chosen supplier's contacts and warranty terms"
            - name: Reusing drip tape or buying new each crop
              description: |-
                ## Purpose
                Thin-wall drip tape is cheap but often lasts one crop, while thicker tape and drip line can be rolled up and reused for several seasons if handled well. Working out the real cost per crop of each, including labour to lift and store it and the waste to dispose of, settles which suits each block.

                ## Milestones
                1. Current tape thickness and cost per metre recorded.
                2. Lifting, cleaning, storing and relaying time estimated for reused tape.
                3. Cost per crop worked out for single-use tape and reusable drip line.
                4. A choice made per block and a disposal or storage plan written.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cost per crop comparison of single-use and reusable drip line is written, with a choice made for each block."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record the thickness and price per metre of your current tape"
                - "Time how long it takes to lift and roll one row of tape"
                - "Work out cost per crop for single-use and reusable options"
                - "Decide per block and find a recycler or storage space for old tape"
            - name: Commissioning a new drip system before planting
              description: |-
                ## Purpose
                A new system should be proved before the seedlings go in, not after they wilt. Flushing the mains, pressure testing, checking every zone runs at the right pressure and timing a full cycle catches wrong fittings, missing end caps and undersized pipe while fixes are still easy.

                ## Milestones
                1. Mains and sub-mains flushed before laterals are connected.
                2. Pressure at the head and tail of every zone measured and within the emitter range.
                3. Each zone run for a full cycle with no leaks or dry rows.
                4. A commissioning sheet signed off and filed with the as-built drawing.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every zone of the new system has a recorded head and tail pressure within the emitter range, signed off before planting."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Flush the mains and sub-mains before connecting any laterals"
                - "Measure pressure at the head and tail of every zone"
                - "Run every zone for a full cycle and walk the rows"
                - "Sign off the commissioning sheet and file it with the drawing"
            - name: Pre-dry-season irrigation overhaul
              description: |-
                ## Purpose
                The dry season is when the system works hardest and when a breakdown hurts most. A full overhaul in the last weeks of the wet season, covering pump service, filter elements, lateral flushing, valve checks, tank clean-out and a spares top-up, means the system goes into January ready for months of daily running.

                ## Milestones
                1. The pump fully serviced and a spare set of seals on the shelf.
                2. Filters stripped, cleaned and worn elements replaced.
                3. Every valve opened and closed and every lateral flushed.
                4. Tanks cleaned and the spares box restocked to minimum.

                ## Notes
                Start from the **Operational checklist** template, and reuse it every year.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed overhaul checklist covering pump, filters, valves, laterals, tanks and spares is dated before the dry season starts."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a date in the last month of the wet season for the overhaul"
                - "Book the pump service and order spare seals and filter elements"
                - "Open and close every valve and flush every lateral"
                - "Restock the spares box and tick off the overhaul checklist"
            - name: Storm-proofing and restarting irrigation after a hurricane
              description: |-
                ## Purpose
                High winds rip panels off solar arrays, floods bury pumps in silt and fallen trees crush mains, and a farm that cannot water after a storm loses the replanting window. A short plan for what to remove, lift or tie down when a storm is forecast, and the order to restart in afterwards, gets water back on the fields fast.

                ## Milestones
                1. A list of irrigation items to remove, raise or tie down when a storm is forecast.
                2. Pumps and controllers that sit in flood-prone spots given a lift-out plan.
                3. A restart order written: inspect electrics, flush silt, check mains, then zones.
                4. Photos of the system taken for insurance before the season.

                ## Notes
                Have an electrician check any pump or panel that sat in floodwater before switching it back on.
              priority: medium
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page storm plan for the irrigation system, with a removal list and a restart order, is posted in the pump house."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "List every irrigation item that must be removed or tied down for a storm"
                - "Plan how to lift pumps and controllers out of flood-prone spots"
                - "Write the restart order and post it in the pump house"
                - "Photograph the pump, panels and tanks for insurance records"
            - name: Irrigation efficiency audit with the extension officer
              description: |-
                ## Purpose
                Extension officers and agricultural agencies in several islands run irrigation assessments, and an outside eye spots leaks, poor scheduling and wrong pressures that the farmer has stopped seeing. Preparing the log, the map and a uniformity result before the visit makes the hour on site count.

                ## Milestones
                1. A visit booked with the extension service or irrigation unit.
                2. The meter log, water map and any uniformity results ready for the visit.
                3. The officer's findings and recommendations written down.
                4. Two or three recommendations acted on within a season.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An irrigation assessment visit is completed, findings are recorded and at least two recommendations are carried out."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Call the extension office and ask for an irrigation assessment visit"
                - "Gather the meter log, water map and uniformity result for the visit"
                - "Write down the officer's findings during the walk round"
                - "Schedule two of the recommendations into the next month's work"
            - name: Annual irrigation season review
              description: |-
                ## Purpose
                Once the rains return, the dry season's numbers are fresh: water used, fuel or power spent, breakdowns, blocks that struggled and crops that thrived. A yearly sit-down with the log turns those into the next year's changes, from a new zone to a different emitter.

                ## Milestones
                1. Total water used, pumping cost and breakdowns for the year summarised.
                2. Each block rated on how well it was watered and how it yielded.
                3. Three changes chosen for next season with rough costs.
                4. The review filed beside last year's for comparison.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written yearly review with water, cost and breakdown totals and three costed changes is filed each year."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to summarise the year's meter log and repair notes"
                - "Rate each block on watering and yield"
                - "Choose and cost three changes for next season"
                - "Hold the irrigation season review when the rains return @recurring(yearly)"
            - name: Quarter-acre irrigation on a tight budget
              description: |-
                ## Purpose
                A small grower selling greens and seasoning at the market can lose a week's income to one dry spell but cannot spend like a commercial farm. Recycled drums, a gravity tank, a few rows of drip tape and careful mulching can water a quarter acre for a fraction of a full system, installed one bed at a time.

                ## Milestones
                1. Water needed for the beds in the driest month worked out roughly.
                2. Free or cheap storage found: used food-grade drums or an old tank.
                3. The most valuable beds put on drip first.
                4. A plan to extend to the remaining beds as money allows.

                ## Notes
                Only reuse drums that held food or water. Drums that held chemicals are not safe for crop water.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The highest-earning beds on a quarter acre are on drip from low-cost storage, with a written plan for the rest."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the beds by how much they earn at the market"
                - "Source clean food-grade drums or a second-hand tank"
                - "Put the top-earning beds on drip tape first"
                - "Write the order and rough cost for adding the other beds"
            - name: Irrigation for a part-time farmer with an off-farm job
              description: |-
                ## Purpose
                Many growers farm before and after a day job, and the crop cannot wait for the weekend. A system built around automatic timers, a full tank and a weekly check, with a neighbour or relative briefed for emergencies, keeps the plot watered when you cannot be there.

                ## Milestones
                1. Watering needs mapped against the hours you are actually at the farm.
                2. The zones that cannot miss a day put on timers.
                3. Tank size checked to cover at least two days without topping up.
                4. A neighbour or relative shown how to run the system and the main shut-off.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The plot is watered on schedule for a month of working weeks with a weekly timer and tank check recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the hours you are actually at the farm each week"
                - "Put the zones that cannot miss a day on battery timers"
                - "Check timers, batteries and tank level on your farm day @recurring(weekly:sun)"
                - "Show a neighbour how to run the system and shut off the main"
            - name: Sharing a river or pipeline with neighbouring farms
              description: |-
                ## Purpose
                Where several farms draw from one river, spring or shared pipeline, arguments over who took the water in a dry week can sour a valley. A simple written rota, agreed shares and a fund for repairs, set up by the farmers themselves or a water users group, keeps the peace and the water flowing.

                ## Milestones
                1. Every farm drawing on the shared source listed with its rough need.
                2. A meeting held to agree days, hours or shares for the dry season.
                3. A written rota and a repair contribution agreed and shared.
                4. A regular meeting set to review the rota and repairs.

                ## Notes
                If a water users association or irrigation board already exists in your district, join it before setting up anything new.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written dry-season water rota and repair contribution are agreed by every farm on the shared source."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every farm on the shared source and its main crops"
                - "Invite neighbours to agree dry-season days and hours"
                - "Write the rota and repair fund terms and share copies"
                - "Hold the shared source meeting to review rota and repairs @recurring(monthly:3)"
            - name: Irrigation investments on leased or family land
              description: |-
                ## Purpose
                Burying a main line, drilling a well or building a tank on land you lease or share with family raises a hard question when the lease ends or a relative wants the land back. Agreeing in writing what you may install, what you can remove and what is owed for fixed works protects the money you put into the ground.

                ## Milestones
                1. The lease or family arrangement read for anything about water, wells or structures.
                2. Fixed works such as wells, buried mains and tanks separated from removable items like pumps and drip line.
                3. Written agreement from the owner or family for the planned works.
                4. Advice from a lawyer sought for any large fixed investment.

                ## Notes
                This is about recording agreements, not legal advice. Check large investments with a lawyer before you build.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed note from the landowner or family covers the planned irrigation works and what happens to them when the arrangement ends."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the lease or family arrangement for anything about water or structures"
                - "List planned works as fixed or removable"
                - "Ask the owner or family to sign a note agreeing the works"
                - "Book a lawyer before any well or large tank is built"
            - name: Gravity-fed drip for a hillside plot
              description: |-
                ## Purpose
                Hillside farms in the islands often sit below a spring or stream and above the fields, which means water can be moved without a pump at all. Using the height difference with a header tank, pressure breaks and contour laterals delivers steady drip to terraces with no fuel bill.

                ## Milestones
                1. The height from the source or header tank to each terrace measured.
                2. Pressure-break tanks or regulators placed where the head gets too high.
                3. Laterals laid along the contour so each row runs level.
                4. Each terrace tested for even flow from top to bottom of the row.

                ## Notes
                Too much head bursts fittings as surely as too little starves emitters. Break the pressure every 20 to 30 metres of drop, or as your supplier advises.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every terrace on the hillside plot is watered by gravity drip with pressure checked at the top and bottom row."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Measure the drop from the source to each terrace with a water level"
                - "Place a pressure-break tank or regulator where the drop is too great"
                - "Peg the contour and lay laterals level along each terrace"
                - "Check flow at the top and bottom row of every terrace"
            - name: Micro-sprinklers and bubblers for orchard trees
              description: |-
                ## Purpose
                Mango, avocado, citrus and other tree crops need water spread across the root zone, not a single drip at the trunk, and young trees need far less than mature ones. Micro-sprinklers or bubblers sized to canopy width, moved out as trees grow, carry an orchard through the dry months when flowering and fruit set are decided.

                ## Milestones
                1. Trees grouped by age and canopy width.
                2. A micro-sprinkler or bubbler type and flow chosen for each group.
                3. Emitters set at the drip line of the canopy, not against the trunk.
                4. A routine to check and move emitters out as trees grow.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every irrigated tree has an emitter sized to its canopy, with a monthly check recorded for six months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Group the orchard trees by age and canopy width"
                - "Choose a micro-sprinkler or bubbler flow for each group"
                - "Move emitters out to the canopy edge on every tree"
                - "Walk the orchard checking each tree emitter is spraying @recurring(monthly:15)"
            - name: Scheduling from weather data and evapotranspiration
              description: |-
                ## Purpose
                Experienced growers schedule from how much water the crop actually used, calculated from evaporation, crop stage and rainfall, rather than from feel alone. Using a local weather station or published daily figures with crop factors turns the schedule into a water balance and can cut water use without losing yield.

                ## Milestones
                1. A source of daily evapotranspiration figures found: a met service, a nearby station or a farm weather station.
                2. Crop factors for each stage obtained from the extension service.
                3. A daily or weekly water balance kept for one block for a full crop.
                4. Water used and yield compared with a block scheduled the old way.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One block is scheduled from a recorded water balance for a full crop, with water use and yield compared to a standard block."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find daily evaporation figures from the met service or a station"
                - "Ask the extension officer for crop factors by growth stage"
                - "Work out the water balance for the trial block @recurring(weekly:tue)"
                - "Compare water used and yield with a standard block at harvest"
            - name: Borehole drilling decision and pump test
              description: |-
                ## Purpose
                Boreholes can free a farm from an unreliable river, but drilling is expensive, success is not guaranteed and wells near the coast can turn salty if over-pumped. Gathering local well records, permits, quotes and a plan for a proper pump test before drilling turns a gamble into a considered decision.

                ## Milestones
                1. Records of nearby wells, depths and yields gathered from the water authority or neighbours.
                2. The permit needed to drill confirmed.
                3. Two drilling quotes obtained that include casing, a pump test and a water test.
                4. A go or no-go decision recorded, with a test result if drilled.

                ## Notes
                Insist on a pump test of several hours and a water quality test before buying the permanent pump.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded borehole decision based on local well records, the drilling permit and two quotes, with pump and water test results if drilled."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the water authority for records of wells near the farm"
                - "Confirm what permit drilling a borehole requires"
                - "Get two drilling quotes that include casing and a pump test"
                - "Record the go or no-go decision and the reasons"
            - name: Subsurface drip for perennial blocks
              description: |-
                ## Purpose
                Burying drip line under permanent crops such as pasture grasses, asparagus or long-term orchards puts water straight at the roots, cuts evaporation and keeps lines out of reach of cutlasses and the sun. It needs good filtration, root-intrusion protection and a flushing design from the start, so it suits growers who already run surface drip well.

                ## Milestones
                1. A block chosen where the crop will stay for several years.
                2. Burial depth, line type and root-intrusion protection agreed with a supplier.
                3. Air relief valves and flushing manifolds included in the design.
                4. A trial strip installed and its performance recorded over a season.

                ## Notes
                Problems under the ground are hard to see. Only try this once filters, flushing and the meter log are already routine.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A subsurface drip trial strip with air relief and flushing manifolds is installed and its water use recorded for one season."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Pick a block where the crop will stay at least five years"
                - "Ask a supplier for a subsurface design with flushing manifolds"
                - "Install a trial strip with air relief valves"
                - "Compare the trial strip's water use with surface drip after a season"
---

# Farm Irrigation Systems

This area is for anyone watering crops as a business, from a grower moving off the hosepipe on a quarter acre to a farmer running several drip blocks off a well and a solar pump. It starts with foundations (where the water comes from, whether you may take it, what is in it, how much the source gives, what the crops need and a zone layout that matches the two), then the weekly and monthly machinery of schedules, logs, filters, flushing, pump care and leak walks, the hydraulics and field tests that separate a system that works from one that only looks finished, decisions on pumps, solar, filters, emitters and suppliers, dated events such as commissioning and the pre-dry-season overhaul, situations from shared river sources to hillside plots and orchards, and finally specialist work on weather-based scheduling, boreholes and subsurface drip.

What repeats is a Monday watering plan, a Monday and Thursday soil moisture check, a Wednesday filter clean, a Friday leak walk and Saturday meter reading, monthly lateral flushing, pump checks and tank inspections, quarterly line treatments and spares counts, and a yearly review, permit check and water test. The Metrics log, Purchase decision, Vendor and Operational checklist templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
