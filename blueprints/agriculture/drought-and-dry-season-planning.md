---
id: agriculture.drought-and-dry-season-planning
name: Drought and Dry Season Planning
description: "A farm that gets through the dry months on purpose: a water budget, storage counted in days, trigger stages, irrigation priorities, drought-tolerant crops, fire breaks, feed reserves and a planting calendar for the long dry spell."
category: business
version: 1.0.0
tags: [agriculture, drought-and-dry-season-planning, small-business, drought, dry-season, water-storage, fire-breaks, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
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
        - name: Drought and Dry Season Planning
          description: "Getting through the dry season: water storage, irrigation priorities, drought-tolerant crops, fire breaks, feed reserves and adjusting the planting calendar."
          projects:
            - name: Your farm's real dry season dates and rainfall record
              description: |-
                ## Purpose
                Every island has an official dry season, but a hillside plot in the north and a flat field near the coast can differ by six weeks in when the rain stops and starts. Pulling together what the met service, your own notes and older neighbours say gives you dates you can plan planting, storage and feed around, instead of a calendar that belongs to somebody else's valley.

                ## Milestones
                1. Monthly rainfall averages for the nearest met station written down for at least ten years, where available.
                2. Your own or a neighbour's memory of the last three dry seasons noted: when the rain stopped, the driest month and when it came back.
                3. A start date, peak month and likely end date for the dry season on your farm agreed and written at the front of the farm notebook.
                4. A rain gauge mounted in the open on the farm, away from trees and roofs.

                ## Notes
                Ask the met service or the extension office for the station records; many will share monthly totals free. A simple plastic gauge on a post is enough.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The farm notebook records a start date, peak month and end date for the local dry season, backed by station figures and a working rain gauge."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the met service or extension office for monthly rainfall at the nearest station"
                - "Talk to two older farmers nearby about when the last three dry seasons began and ended"
                - "Buy a rain gauge and mount it on a post in open ground"
                - "Write your dry season start, peak and end dates in the farm notebook"
            - name: Dry season water budget in litres
              description: |-
                ## Purpose
                Most farms that run out of water in April never added up what they were using against what they had. A budget that sets litres stored and litres flowing in against litres needed per week for each block and each group of animals tells you, in January, whether you will reach the rains or which week you will run short.

                ## Milestones
                1. Weekly water demand estimated for each crop block and each group of animals, with the figures and their source written down.
                2. Total stored water and the realistic dry season inflow from wells, springs or the mains estimated per week.
                3. A week-by-week table from the start of the dry season to the expected first rains showing the balance.
                4. The week the balance turns negative, if it does, marked and shared with everyone who waters.

                ## Notes
                Start from the **Metrics log** template. Use the lowest flow you have seen from each source, not the average; dry years are the ones that matter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week-by-week dry season water table exists showing supply, demand and balance, with any shortfall week named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every crop block and animal group that needs water in the dry months"
                - "Estimate weekly litres for each, noting where each figure came from"
                - "Ask the agent to lay out a week-by-week supply and demand table from your figures"
                - "Mark the week the balance turns negative and tell everyone who waters"
            - name: Dry season risk register for the farm
              description: |-
                ## Purpose
                Drought rarely hits one thing at a time: the pond drops, the grass browns, a bush fire jumps the fence and the bank payment still falls due. Writing every dry season risk in one place with how likely it is, what it would cost and who acts first stops the season becoming a series of surprises.

                ## Milestones
                1. At least ten dry season risks listed, covering water, crops, animals, fire, labour, buyers and cash.
                2. Each risk scored for likelihood and impact on a simple three-point scale.
                3. A first action and an owner named for every risk scored high on either scale.
                4. The register dated and filed where the whole household or team can see it.

                ## Notes
                Start from the **Risk register** template. Include the risks you cannot control, such as a mains water cut, so the response is planned even if the cause is not.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated register lists at least ten dry season risks, each scored, with an owner and first action for every high one."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every way last dry season cost you money or stock"
                - "Add the risks you have heard about from neighbours but not yet faced"
                - "Score each risk for likelihood and impact from one to three"
                - "Name an owner and a first action for each high-scoring risk"
            - name: Drought trigger stages and actions
              description: |-
                ## Purpose
                Waiting until the tank is empty to start rationing means the hardest cuts land on the crop at its most sensitive stage. Setting three stages in advance, such as watch, alert and emergency, each tied to a tank level or weeks without rain and each with fixed actions, means decisions are made calmly in December rather than in a panic in April.

                ## Milestones
                1. Three drought stages defined, each with a clear trigger such as stored water below a set percentage or a set number of weeks without useful rain.
                2. A short list of actions for each stage covering watering, planting, animals, fire and buyers.
                3. The stages and actions written on one sheet and posted by the tank or in the store.
                4. Everyone who works the farm told which stage the farm is in and how they will hear when it changes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page sheet defines three drought stages with measurable triggers and fixed actions, and it is posted where workers see it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide what tank level or dry weeks will trigger each of three stages"
                - "List what changes at each stage for watering, planting, animals and buyers"
                - "Print the sheet and post it beside the main tank or in the store"
                - "Brief every worker and family member on the stages and the signal for each"
            - name: Water storage capacity counted in days
              description: |-
                ## Purpose
                Most farmers who say they have three tanks and a pond do not know that this means eleven days of supply at peak demand. Measuring every tank and pond, and turning the total into days of watering at dry season rates, shows plainly whether storage is the gap and how big it is.

                ## Milestones
                1. Every tank, drum, cistern and pond on the farm listed with its usable volume in litres.
                2. Pond volume estimated from length, width and average depth, less the bottom layer that cannot be pumped.
                3. Total usable storage divided by peak weekly demand to give days of supply.
                4. The days figure written beside the water budget and compared with the length of the dry season.

                ## Notes
                Usable volume is less than the size printed on the tank: the outlet usually sits above the floor and the top few centimetres overflow.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of all water storage with usable litres and a single days-of-supply figure is written beside the dry season water budget."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk the farm and list every tank, drum, cistern and pond"
                - "Measure each one and work out usable litres below the outlet"
                - "Divide total usable storage by peak weekly demand to get days of supply"
                - "Write the days figure beside the water budget"
            - name: Irrigation priority ranking for a short year
              description: |-
                ## Purpose
                When water runs short, someone will decide which block goes without, and it is better that the decision is made now with figures than at the pump with a worker guessing. Ranking every block by its value, its stage in the dry months and how badly it suffers from a missed watering gives a clear order for cuts.

                ## Milestones
                1. Every irrigated block listed with its crop, expected planting and harvest dates and expected income.
                2. Each block marked for how sensitive it is to water stress during the dry months.
                3. A ranked order from first to cut to last to cut, with nurseries, young trees and crops near harvest considered separately.
                4. The ranking written on the drought stages sheet so cuts follow it automatically.

                ## Notes
                Perennial trees that die take years to replace, so they often rank above a short vegetable crop even when the vegetables earn more this season.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A ranked list of irrigated blocks from first to last to cut is written on the drought stages sheet."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every irrigated block with its crop, dates and expected income"
                - "Mark each block high, medium or low for sensitivity to a missed watering"
                - "Rank the blocks from first to cut to last to cut"
                - "Copy the ranking onto the drought stages sheet"
            - name: Livestock drinking water and a backup supply
              description: |-
                ## Purpose
                Animals cannot be put on a lower water ration the way a crop can, and a lactating cow or a pen of broilers in the heat drinks far more than most people guess. Knowing the daily need for every group, and having a second source ready before the first fails, is the difference between a hard week and lost stock.

                ## Milestones
                1. Daily drinking water for each animal group estimated for the hottest months, with the figure checked with your vet or extension officer.
                2. The main water source for the animals and its dry season reliability recorded.
                3. A backup source named, such as a second tank, a neighbour's well or a water truck, with how it would be delivered.
                4. Troughs and drinkers checked for enough capacity and shade.

                ## Notes
                Heat stress and water shortage feed each other. Ask the vet for the warning signs in your species and write them on the pen.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Daily water needs for every animal group are written down and a tested backup source with a delivery method is named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vet or extension officer for daily water needs of your animals in hot weather"
                - "Total the daily litres for every animal group on the farm"
                - "Arrange a backup source and agree how water would reach the pens"
                - "Run the backup supply to the troughs for one day to test it @recurring(quarterly)"
            - name: Dry season feed reserve target
              description: |-
                ## Purpose
                Pasture growth stops a few weeks after the rain does, and feed bought in a hurry at the peak of the dry season costs the most and sometimes cannot be found at all. Working out how many tonnes of hay, silage or bagged feed will bridge the gap, and by when it must be in the store, turns a vague worry into a number.

                ## Milestones
                1. The number of weeks with little or no grazing estimated from past dry seasons.
                2. Weekly feed need for the herd or flock during those weeks worked out with a vet, nutritionist or extension officer.
                3. A total reserve target in tonnes or bales, with the date by which it must be stored.
                4. Sources for the reserve listed: own hay or silage, neighbours, merchants and their likely prices.

                ## Notes
                Rations are for a nutritionist or vet to set. This project is about the quantity and timing, so you have it when the grass runs out.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written feed reserve target in tonnes or bales with a storage deadline and at least two named sources."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the weeks with little grazing in the last two dry seasons"
                - "Ask your vet or nutritionist for weekly dry season feed needs per animal"
                - "Multiply out a reserve target and set the date it must be stored"
                - "Price the reserve from two merchants and one neighbour"
            - name: Fire risk map and fire break plan
              description: |-
                ## Purpose
                Bush fires in the dry season burn fences, pasture, young trees and irrigation pipe, and many start on the next property. A map showing where dry grass meets your crops, buildings and boundaries, with planned breaks and access for a fire tender, is the first line of defence and costs mainly labour.

                ## Milestones
                1. A sketch map of the farm marking grassland, bush, crops, buildings, fuel and chemical stores and the direction of the prevailing wind.
                2. Fire breaks planned along the boundaries most exposed to the wind and to neighbouring bush, with their width noted.
                3. A cleared zone planned around buildings, stores and the pump house.
                4. Gate and track access for a fire tender checked and marked on the map.

                ## Notes
                Check with the fire service or extension officer what break width they recommend for your vegetation. Pipe and tank fittings above ground melt quickly.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A farm map shows fire breaks, cleared zones around buildings and fire tender access, with break widths agreed with the fire service."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the farm and mark grass, bush, crops, buildings and stores"
                - "Mark the prevailing dry season wind and the boundaries it blows across"
                - "Ask the fire service what break width suits your vegetation"
                - "Draw the planned breaks, cleared zones and tender access on the map"
            - name: Weekly tank and pond level readings
              description: |-
                ## Purpose
                Stored water falls slowly and then all at once, and the only way to see the trend is to read the levels the same day each week. A gauge stick or marked post in every tank and pond, read every Monday, shows the burn rate and tells you which drought stage you are in.

                ## Milestones
                1. A marked gauge stick, sight tube or depth post fitted in each tank and pond.
                2. A simple table converting each mark to litres.
                3. Weekly readings recorded for every store through the dry season.
                4. The trend compared each month with the water budget, and the drought stage updated.

                ## Notes
                Start from the **Metrics log** template. Read at the same time of day; ponds drop by evaporation through a hot afternoon.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly level readings for every tank and pond are logged for the whole dry season and checked monthly against the water budget."
                cadence: rolling
              tasks:
                - "Fit a marked stick or sight tube in each tank and pond"
                - "Make a table that converts each mark to litres"
                - "Read and log every tank and pond level @recurring(weekly:mon)"
                - "Compare the month's fall in storage with the water budget @recurring(monthly:28)"
            - name: Daily rain and dry spell log
              description: |-
                ## Purpose
                Seasonal rainfall totals hide what matters to crops: the length of the dry spells between showers. Reading the gauge each morning through the dry months and counting the days since useful rain gives you the trigger figure for your drought stages and a record you will use for years.

                ## Milestones
                1. A daily reading taken and written down each morning during the dry months.
                2. A running count kept of days since the last useful rain, with the amount that counts as useful agreed.
                3. Monthly totals compared with the station averages from your dry season dates work.
                4. The log kept with past years' logs for the season review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily rainfall and a running count of days since useful rain are logged throughout the dry season."
                cadence: cyclic
              tasks:
                - "Decide how many millimetres count as useful rain for your soil"
                - "Read the rain gauge each morning and log the figure @recurring(daily)"
                - "Keep a running count of days since useful rain at the top of the page"
                - "Total each month and compare it with the station average"
            - name: Monthly drought outlook check
              description: |-
                ## Purpose
                Regional climate centres and national met services publish seasonal outlooks and drought alerts, such as the Caribbean drought bulletins, months before the worst arrives. Reading them on the same day each month, and noting what they say for your area, gives early warning to buy feed, delay a planting or move a stage up.

                ## Milestones
                1. The outlook sources for your country bookmarked: the national met service and the regional climate outlook.
                2. Each month's outlook for your area summarised in one line in the farm notebook.
                3. Any outlook of drier than normal conditions or a drought alert matched to a decision in the drought stages sheet.
                4. A year of monthly notes kept for the season review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-line summary of the drought outlook for your area is written each month, with any warning linked to a recorded decision."
                cadence: rolling
              tasks:
                - "Bookmark the national met service and regional drought outlook pages"
                - "Read the latest outlook and write a one-line summary for your area @recurring(monthly:3)"
                - "Note any drier than normal warning against your drought stages sheet"
                - "Sign up for any free met service alerts sent by text or email"
            - name: Weekly water allocation by block
              description: |-
                ## Purpose
                Once the farm is in a drought stage, water has to be shared out on purpose rather than by whoever gets to the valve first. A short Friday plan that sets how many hours or litres each block gets next week, following the priority ranking and the tank readings, keeps the most valuable crops alive to the rains.

                ## Milestones
                1. A weekly allocation sheet listing each block, its water for the coming week and the reason.
                2. Allocations that match the priority ranking and the current drought stage.
                3. Whoever runs the pumps or hoses briefed on the week's allocation.
                4. Actual use compared with the allocation the following Friday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "During every drought stage week a written allocation by block exists, follows the priority ranking and is checked against actual use."
                cadence: cyclic
              tasks:
                - "Draw up a one-page weekly allocation sheet with a row per block"
                - "Set next week's water by block from the ranking and tank readings @recurring(weekly:fri)"
                - "Brief the person running the pumps on the allocation"
                - "Note where actual use went over the allocation and why"
            - name: Fire break clearing and upkeep routine
              description: |-
                ## Purpose
                Fire breaks cut in December are overgrown with dry grass by March unless someone keeps at it. A monthly round through the dry season, clearing the breaks, the zones around buildings and the tender tracks, keeps the plan on the map true on the ground.

                ## Milestones
                1. All planned fire breaks cut to the agreed width before the driest month.
                2. A monthly check of every break, cleared zone and track recorded through the dry season.
                3. Cut material removed or spread thin so it does not become fuel along the break.
                4. Fire beaters, water drums and a knapsack sprayer of water kept in a known place.

                ## Notes
                Clear by cutting or grazing. Do not burn breaks yourself without the permission and conditions your fire service or local rules require.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every fire break and cleared zone is checked and cleared monthly through the dry season, with the dates recorded."
                cadence: cyclic
              tasks:
                - "Cut the planned fire breaks to width before the driest month"
                - "Walk and clear every break, zone and track @recurring(monthly:12)"
                - "Rake cut grass off the breaks or spread it thinly in the field"
                - "Store beaters and filled water drums where everyone knows to find them"
            - name: Monthly feed reserve stock count
              description: |-
                ## Purpose
                Feed reserves that looked plenty in January can be half gone by March because animals were fed from them during a short dry spell. Counting the bales, bags and silage left on the same day each month, and setting that against the weeks still to go, shows whether to buy more while it is still available.

                ## Milestones
                1. A monthly count of hay bales, silage and bagged feed in store.
                2. Weeks of feed remaining worked out from the current feeding rate.
                3. Weeks remaining compared with the weeks to the expected rains.
                4. Spoiled or damp feed removed and written off in the count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The feed store is counted every month of the dry season and weeks of feed remaining are compared with weeks to the rains."
                cadence: rolling
              tasks:
                - "Count every bale, bag and silage pack in the store @recurring(monthly:20)"
                - "Work out weeks of feed left at the current feeding rate"
                - "Set weeks left against weeks to the expected first rains"
                - "Pull out any mouldy or damp feed and record the loss"
            - name: Mulch and soil cover routine
              description: |-
                ## Purpose
                Bare soil in the Caribbean sun loses water fast and crusts so that what little rain falls runs off. Keeping a layer of mulch or living cover on beds and around trees through the dry months saves irrigation water and protects soil life, but only if it is topped up as it breaks down.

                ## Milestones
                1. A source of mulch identified for the season: crop residue, grass cuttings, coconut husk or bought material.
                2. Mulch laid on all dry season beds and around young trees before the driest month.
                3. A monthly check of mulch depth with thin patches topped up.
                4. Mulch kept back from tree trunks and stems to avoid rot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Dry season beds and young trees carry mulch throughout the dry months, with monthly top-ups recorded."
                cadence: cyclic
              tasks:
                - "Line up enough mulch material for every dry season bed and young tree"
                - "Lay mulch on beds and around trees before the driest month"
                - "Check mulch depth and top up thin patches @recurring(monthly:8)"
                - "Pull mulch back a hand's width from trunks and stems"
            - name: Livestock water and condition round
              description: |-
                ## Purpose
                Animals lose condition quickly when water is short or warm, and a blocked float valve on a hot afternoon can do serious harm before anyone notices. A set midweek round of every trough, drinker and pen, with a quick look at body condition, catches trouble while it can still be fixed.

                ## Milestones
                1. Every trough, drinker and float valve on the farm on a written round.
                2. Water checked for flow, cleanliness and temperature on each round.
                3. A simple body condition note kept for each group through the dry season.
                4. Any animals losing condition or showing heat stress reported to the vet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly round of every water point and animal group is recorded through the dry season, with any concerns passed to the vet."
                cadence: cyclic
              tasks:
                - "Write the round: every trough, drinker and float valve in order"
                - "Walk the round and note flow, cleanliness and condition @recurring(weekly:wed)"
                - "Clean algae and dirt out of troughs found dirty on the round"
                - "Call the vet about any group that is losing condition"
            - name: Dry season cash flow check
              description: |-
                ## Purpose
                The dry months often bring falling yields, bought-in water and feed and higher fuel for pumps all at once, while sales slow down. A monthly look at money in and out for the season shows early whether you need to sell stock, talk to the bank or delay a purchase, before a repayment is missed.

                ## Milestones
                1. A dry season cash plan listing expected income and extra costs month by month.
                2. Actual income and spending compared with the plan each month.
                3. A minimum cash level set, below which the farm takes a named action.
                4. Any expected shortfall raised with the lender or credit union before the payment falls due.

                ## Notes
                Lenders and credit unions in farming areas are often willing to reschedule if asked early. Asking after a missed payment is harder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly comparison of dry season cash against plan is recorded, with a minimum cash level and the action it triggers written down."
                cadence: cyclic
              tasks:
                - "List the extra dry season costs: bought water, feed, fuel and labour"
                - "Compare this month's money in and out with the cash plan @recurring(monthly:25)"
                - "Set the minimum cash level and the action it triggers"
                - "Call the lender early if a repayment looks at risk"
            - name: Reading seasonal drought outlooks and drought indices
              description: |-
                ## Purpose
                Outlooks are written in probabilities and terms such as standardised precipitation index, which many farmers skim past. An hour or two learning what the maps and terms mean lets you turn a bulletin into a decision instead of a vague worry.

                ## Milestones
                1. The difference between a forecast, an outlook and a drought alert understood and noted.
                2. The meaning of the standardised precipitation index and its usual categories written in the notebook.
                3. One recent outlook read and explained in your own words for your area.
                4. A question sent to the met service or extension officer about anything still unclear.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A notebook page explains outlook terms and the drought index categories, with one recent outlook interpreted for your area."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find the guide or glossary page that comes with your regional drought outlook"
                - "Write the drought index categories and what each means in plain words"
                - "Read the latest outlook and explain it for your area in three sentences"
                - "Send one question about the outlook to the met service or extension officer"
            - name: Spotting crop water stress early
              description: |-
                ## Purpose
                By the time a crop is visibly wilting at midday, yield is often already lost. Learning the earlier signs in your main crops, such as leaf rolling, colour change, dropped flowers or a duller leaf surface, and checking soil at root depth, lets you act on stress days sooner.

                ## Milestones
                1. The early stress signs for each of your main crops listed from extension guides or an officer's visit.
                2. The difference between midday wilting that recovers and wilting at dawn understood.
                3. Soil at root depth checked by hand or auger alongside the plant signs on three occasions.
                4. Photos of stressed and healthy plants of each crop kept as a field reference.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A field reference with stress signs and photos exists for each main crop, built from at least three paired soil and plant checks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Get the extension guide for each of your main crops and note the stress signs"
                - "Walk one block at dawn and again at midday and compare the leaves"
                - "Dig to root depth beside a stressed plant and feel the soil"
                - "Photograph stressed and healthy plants of each crop for a field reference"
            - name: Mulching and soil cover methods for dry soils
              description: |-
                ## Purpose
                Not every mulch suits every crop: some tie up nitrogen, some harbour pests, and plastic heats roots in full sun. Learning the options, and trying two on a small patch, means the dry season routine uses the material that works on your soil.

                ## Milestones
                1. The main mulch options compared: crop residue, cut grass, wood chip, coconut husk, plastic and living cover.
                2. The pros and cons of each for your crops and soil written down.
                3. Two mulches tried side by side on one bed through part of a dry season.
                4. A default mulch chosen for beds and one for trees.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A side-by-side trial of two mulches is recorded and a default mulch for beds and for trees is chosen."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the mulch materials you can get free or cheaply within ten miles"
                - "Ask the extension officer which ones suit your crops and soil"
                - "Lay two mulches side by side on one bed and mark them"
                - "Compare soil moisture under each after two weeks without rain"
            - name: Critical growth stages for scarce water
              description: |-
                ## Purpose
                Crops can usually take some shortage during leafy growth but lose heavily if water fails at flowering, fruit set or bulking. Knowing which weeks matter most for each crop lets you put scarce water where it buys the most yield, a practice often called deficit irrigation.

                ## Milestones
                1. The water-critical stages listed for each main crop, with their timing in weeks after planting.
                2. Each block's critical weeks marked on the dry season calendar.
                3. The irrigation priority ranking adjusted where a block's critical stage falls in the driest weeks.
                4. Advice from the extension officer on what level of shortage each crop tolerates noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every main crop's water-critical weeks are marked on the dry season calendar and reflected in the priority ranking."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up the water-critical growth stages for each of your main crops"
                - "Mark each block's critical weeks on the dry season calendar"
                - "Ask the extension officer how much shortage each crop can stand"
                - "Move any block whose critical weeks fall in the driest month up the ranking"
            - name: Water harvesting earthworks for dry land
              description: |-
                ## Purpose
                On dry slopes most of the rain that does fall runs straight off. Small earthworks such as swales on contour, planting pits, half-moon bunds and stone lines slow that water and let it soak in where roots can reach it, and they are cheap if built by hand before the rains.

                ## Milestones
                1. The main water harvesting earthworks understood and their fit for your slope and soil noted.
                2. A contour line marked on one dry slope using an A-frame or water level.
                3. One trial earthwork built and its effect checked after the first heavy rain.
                4. A decision on whether to extend the earthworks next year.

                ## Notes
                On heavy clay or very steep slopes, earthworks that hold water can cause slips. Ask the extension officer or a soil conservation officer before building at scale.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One trial water harvesting earthwork is built on contour and checked after a heavy rain, with a recorded decision on extending it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Read an extension guide on swales, planting pits and stone lines"
                - "Make an A-frame level and mark one contour line on a dry slope"
                - "Dig a trial swale or row of pits along the line"
                - "Check how water soaked in after the first heavy rain"
            - name: Drought-tolerant crops and varieties for your area
              description: |-
                ## Purpose
                Pigeon peas, cassava, sweet potato, sorghum, some bodi and pumpkin types and many local landraces produce with far less water than lettuce or cabbage. Finding which crops and varieties do well on your soil in the dry months, and where to get planting material, gives you options before you need them.

                ## Milestones
                1. A list of drought-tolerant crops and varieties used in your country, from the extension service, a research institute and local growers.
                2. Each candidate checked for a local market and a reliable source of seed or planting material.
                3. Three candidates shortlisted for your farm.
                4. Seed or planting material for at least one candidate secured ahead of the dry season.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A shortlist of three drought-tolerant crops or varieties with buyers and planting material sources is written, and material for one is in hand."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension officer which drought-tolerant varieties are recommended locally"
                - "Talk to two growers who keep producing through the dry months"
                - "Check each candidate for a buyer and a seed or planting material source"
                - "Order or collect planting material for the first candidate"
            - name: Bush fire behaviour and safe burning rules
              description: |-
                ## Purpose
                Many dry season fires are started deliberately to clear land and then run out of control in a midday wind. Understanding how fire moves through dry grass and on slopes, and what the local rules say about burning, protects your farm and keeps you on the right side of the law and your neighbours.

                ## Milestones
                1. The local rules on open burning, including any permit, season or notification requirement, confirmed with the fire service.
                2. How wind, slope and time of day change fire spread understood and noted.
                3. A household and worker rule agreed on whether and when any burning happens on the farm.
                4. The fire service and neighbours' numbers saved in every worker's phone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The local burning rules are confirmed in writing and a farm rule on burning is agreed, with emergency numbers saved by every worker."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the fire service what rules apply to open burning in your area"
                - "Learn how wind, slope and midday heat change fire spread"
                - "Agree a written farm rule on when, if ever, burning is allowed"
                - "Save the fire service and neighbours' numbers in every worker's phone"
            - name: Recognising heat stress in livestock
              description: |-
                ## Purpose
                Heat and drought arrive together, and panting broilers, goats crowding the shade and cows that stop eating are all early warnings. Learning the signs for your species with the vet, and the simple steps of shade, airflow and cool water, means animals are helped before losses start.

                ## Milestones
                1. The signs of heat stress for each species on the farm listed with the vet.
                2. The hottest hours and the housing or pens most at risk identified.
                3. Shade, airflow and water changes for hot spells agreed with the vet.
                4. A one-page heat stress sheet posted in each pen or house.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A heat stress sheet agreed with the vet listing signs and responses is posted in every animal house or pen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the vet for the heat stress signs in each of your species"
                - "Note which pens and houses get hottest and at what time"
                - "Agree shade, airflow and water changes for hot spells with the vet"
                - "Post a one-page heat stress sheet in each house or pen"
            - name: Adding a tank, a pond or both for storage
              description: |-
                ## Purpose
                If the water budget shows a shortfall, extra storage is often the best investment on the farm, but the choice between plastic tanks, a lined pond, a dug pond or a ferrocement cistern depends on cost per litre, land, losses and what can be filled. Comparing options on the same figures avoids buying the wrong one.

                ## Milestones
                1. The extra storage needed in litres taken from the water budget and days-of-supply work.
                2. At least three options priced per thousand litres stored, including installation.
                3. Each option scored for evaporation and seepage losses, land needed, fill source and lifespan.
                4. A decision recorded, with any permit or planning check for a pond completed.

                ## Notes
                Start from the **Purchase decision** template. Open ponds can lose a large share of their water to evaporation in a long dry season; include that in the cost per useful litre.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A storage decision is recorded comparing at least three options on cost per useful litre, losses and fill source."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Take the litres of extra storage needed from the water budget"
                - "Get prices for tanks, a lined pond and a cistern of that size"
                - "Work out cost per useful litre for each after losses"
                - "Check whether a pond needs a permit or planning approval"
            - name: Shifting the planting calendar around the dry season
              description: |-
                ## Purpose
                Planting a thirsty crop in December so that it fruits in March is the most common way to waste dry season water. Moving plantings earlier, later or onto different blocks so that critical stages fall in the wetter weeks, and leaving the driest weeks to tolerant crops or fallow, often saves more water than any equipment.

                ## Milestones
                1. The current planting calendar for every block written out against the dry season dates.
                2. Every planting whose critical stage falls in the driest weeks flagged.
                3. A revised calendar that moves, swaps or drops those plantings.
                4. Buyers who rely on those crops told about any change in supply dates.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A revised planting calendar is written in which no thirsty crop has its critical stage in the driest weeks, and affected buyers are told."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write each block's planting and harvest dates beside the dry season dates"
                - "Flag every planting whose critical weeks fall in the driest month"
                - "Redraw the calendar moving, swapping or dropping the flagged plantings"
                - "Tell the buyers affected about the changed supply dates"
            - name: Switching one block to drought-tolerant crops
              description: |-
                ## Purpose
                Changing the whole farm at once is a big risk, but trying a drought-tolerant crop on one block for one dry season shows the real yield, labour and price before you commit. A planned trial with records turns an idea from the shortlist into a tested part of the farm.

                ## Milestones
                1. One block chosen for the trial and its usual dry season crop and income recorded as the comparison.
                2. The drought-tolerant crop planted on time with its water use recorded.
                3. Yield, labour hours and sale price recorded at harvest.
                4. A decision on whether to keep, expand or drop the crop next season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One dry season trial block has water use, yield, labour and price recorded and a written keep, expand or drop decision."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose the trial block and note last dry season's crop and income on it"
                - "Plant the drought-tolerant crop on the planned date"
                - "Log water applied to the trial block each time it is watered"
                - "Record yield, labour and price at harvest and make the decision"
            - name: Shade netting for dry season nurseries
              description: |-
                ## Purpose
                Seedlings and newly planted cuttings lose more young plants to sun scorch and drying out in the dry season than to anything else. A shade-netted nursery corner, with the right shade percentage and wind-safe fixing, cuts water use and losses at the stage when plants are worth least to replace and most to protect.

                ## Milestones
                1. The nursery or seedling area and its water source chosen.
                2. Shade percentage chosen for the crops raised, checked with a supplier or extension officer.
                3. Netting fixed on a frame that can be taken down before storms.
                4. Seedling losses and watering time compared with the previous dry season.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shade-netted nursery is in use for the dry season, with seedling losses compared against the year before."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Pick a nursery spot close to water and out of the strongest wind"
                - "Ask a supplier which shade percentage suits your seedlings"
                - "Build a frame and fix the netting so it can come down quickly"
                - "Count seedling losses this season and compare with last"
            - name: Destocking and herd size decision for a dry year
              description: |-
                ## Purpose
                Holding every animal through a long drought can mean buying feed and water at peak prices and still losing condition across the whole herd. Deciding in advance how many to sell, which ones and at what point, with your vet and buyer, protects the core breeding stock and the cash.

                ## Milestones
                1. The number of animals the farm can feed and water through a dry season worked out from the feed and water figures.
                2. A culling order agreed: which animals go first, such as older, unproductive or poor-condition stock.
                3. A trigger for selling linked to a drought stage or a feed reserve level.
                4. A buyer or abattoir contacted about likely dry season prices and dates.

                ## Notes
                Dry years flood the market with animals and push prices down. Selling earlier, before neighbours do, usually gets a better price.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written destocking plan names the carrying number, culling order and selling trigger, with a buyer contacted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Work out how many animals the stored feed and water can carry"
                - "Agree with the vet which animals would be sold first"
                - "Tie the selling trigger to a drought stage or feed level"
                - "Ask your buyer or abattoir about likely dry season prices"
            - name: Arranging trucked water for a dry spell
              description: |-
                ## Purpose
                When storage runs out, a water truck is often the only option, and in a bad year every farm in the district is calling the same few operators. Agreeing price, volume, access and payment with a supplier before the season, and checking the water is fit for animals or crops, keeps you near the front of the queue.

                ## Milestones
                1. Two or three water truck operators identified, with prices per load and load sizes.
                2. Truck access to each tank or pond checked for width, weight and turning space.
                3. The source of the trucked water and its suitability for animals or irrigation confirmed.
                4. One operator agreed as first call, with terms written down.

                ## Notes
                Start from the **Vendor** template. Ask whether the operator also hauls sewage or chemicals; dedicated potable tankers are safer for animals.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first-call water truck operator is agreed with price, volume, access and water source written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Get names and prices from two or three water truck operators"
                - "Check truck access to each tank or pond with the operator"
                - "Ask where each operator draws their water and what else they haul"
                - "Agree terms with one operator as first call and write them down"
            - name: Cutting pond evaporation and seepage
              description: |-
                ## Purpose
                Farm ponds in full sun can lose a hand's depth of water a week to evaporation and more through a leaking floor. Measuring the losses, then trying the practical fixes such as shade, windbreak planting, a liner or deepening to reduce surface area, shows which ones earn their cost.

                ## Milestones
                1. Daily pond loss measured over a week with no pumping or rain.
                2. Evaporation and seepage separated, for example with a bucket test beside the pond.
                3. One or two fixes chosen and costed.
                4. Losses measured again after the fix and the saving recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Pond losses are measured before and after at least one fix, with the weekly saving in litres recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Mark the pond level on a stake and stop pumping for a week"
                - "Set a bucket of water beside the pond to measure evaporation alone"
                - "Cost one or two fixes for the bigger of the two losses"
                - "Measure the weekly loss again after the fix"
            - name: Fallow or cover crop through the dry months
              description: |-
                ## Purpose
                On some blocks the most profitable dry season crop is no crop at all, with the soil protected by a cover crop or mulch and the water saved for better land. Comparing the expected margin of planting against fallowing, including water, labour and soil condition, makes it a decision rather than a habit.

                ## Milestones
                1. Blocks with the poorest dry season returns over the last two years listed.
                2. The expected margin from planting each one compared with leaving it fallow or under cover.
                3. A drought-hardy cover crop or mulch option chosen for any block left out.
                4. The decision recorded on the planting calendar for each block.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "For each low-return block a written plant or fallow decision is recorded, with the expected margin and cover chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the blocks that earned least in the last two dry seasons"
                - "Estimate the margin from planting each one after water and labour"
                - "Ask the extension officer which cover crop survives your dry months"
                - "Record a plant or fallow decision for each block on the calendar"
            - name: Pre-dry-season readiness check
              description: |-
                ## Purpose
                A few weeks before the rain usually stops is the last chance to fill tanks, stock feed, cut fire breaks and finish plantings while water and labour are plentiful. Running one checklist across the whole farm each year, at the same point, catches the gaps while there is still time to close them.

                ## Milestones
                1. A checklist covering water storage full, feed reserve in, fire breaks cut, mulch laid, plantings done and buyers told.
                2. Every item checked on the farm and marked done, late or not needed.
                3. Late items given an owner and a date.
                4. The checklist saved and reused next year with any additions.

                ## Notes
                Start from the **Operational checklist** template. This is the whole-farm check; leave equipment servicing to the irrigation maintenance routine.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The whole-farm readiness checklist is completed before the expected dry season start, with every late item given an owner and date."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft the readiness checklist from your risk register and stages sheet"
                - "Walk the farm with the checklist and mark each item"
                - "Give every late item an owner and a finish date"
                - "Run the readiness check six weeks before the dry season starts @recurring(yearly)"
            - name: Last safe planting date before the dry season
              description: |-
                ## Purpose
                Each crop has a date after which planting means it will reach its thirstiest stage after the rains have gone. Working back from your dry season dates to a last safe planting date for each main crop, and holding to it, avoids sowing a crop you cannot finish.

                ## Milestones
                1. Days from planting to critical stage and to harvest noted for each main crop.
                2. A last safe planting date worked back from the expected end of the rains for each crop.
                3. The dates marked on the farm calendar and told to anyone who plants.
                4. Any planting made after its date recorded with the reason, for the season review.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A last safe planting date is set for every main crop and marked on the farm calendar before the rains end."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note days to critical stage and to harvest for each main crop"
                - "Count back from the expected end of the rains to a last planting date"
                - "Mark each crop's last safe planting date on the farm calendar"
                - "Tell everyone who plants what the dates are"
            - name: Fire season notice to neighbours and the fire service
              description: |-
                ## Purpose
                Fires cross boundaries, and a neighbour who knows where your gates, water and animals are can save them while you are away. A short notice at the start of each fire season, to the farms around you and the local fire station, sets up who calls whom and who can open which gate.

                ## Milestones
                1. A one-page farm sheet with a map, gate locations, water points, animals and contact numbers.
                2. The sheet given to each neighbouring farm and the nearest fire station.
                3. An agreement with neighbours on who calls whom and who holds spare gate keys.
                4. Any shared boundary breaks agreed and cut jointly.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every neighbouring farm and the local fire station hold a current farm sheet, and a calling arrangement is agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Make a one-page sheet with map, gates, water points and numbers"
                - "Drop the sheet at each neighbouring farm and the nearest fire station"
                - "Agree with neighbours who calls whom and who holds spare keys"
                - "Send the updated sheet to neighbours at the start of fire season @recurring(yearly)"
            - name: Responding to water restrictions from the water authority
              description: |-
                ## Purpose
                In severe droughts the water authority may cut mains supply to farms, set hours or ban hosepipe and irrigation use, sometimes with little notice. Knowing in advance what the rules usually are, what counts as agricultural use and what you will change on the day keeps the farm legal and the essentials alive.

                ## Milestones
                1. The water authority's usual restriction stages and how they are announced found out.
                2. What the farm uses mains water for listed, separating animals, crops, washing and the house.
                3. A plan for each restriction level showing which uses stop and what replaces them.
                4. Any exemption or agricultural allocation scheme checked and applied for if it exists.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written plan matches each likely water authority restriction level to the farm uses that stop and their replacements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find out how the water authority announces restrictions and their stages"
                - "List every farm use of mains water by type"
                - "Write which uses stop at each restriction level and the replacement"
                - "Ask the authority or extension office about any farm allocation scheme"
            - name: First rains replanting plan
              description: |-
                ## Purpose
                The first heavy rains end the dry season, but a false start followed by two dry weeks can kill a whole sowing. A plan that sets what counts as the real start of the rains, what goes in first and what waits, puts seed and labour to work without gambling on a single shower.

                ## Milestones
                1. A rule for the start of the rains agreed, such as a set rainfall over a set number of days.
                2. The first crops to plant and the blocks they go on listed in order.
                3. Seed, planting material and labour booked ahead of the expected date.
                4. A fallback agreed if planting is followed by a dry spell.

                ## Notes
                Your rain log will show how often false starts have happened. Keep a little seed back for a second sowing.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written replanting plan sets the rule for the start of the rains, the planting order and a fallback, with seed and labour booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Agree how much rain over how many days marks the real start of the rains"
                - "List the first plantings in order with their blocks"
                - "Book seed, planting material and labour for the expected start"
                - "Set aside seed for a second sowing in case of a false start"
            - name: End of dry season review
              description: |-
                ## Purpose
                Every dry season teaches something, but the lessons fade once the rains come and the farm gets busy. A short review each year, while the logs are fresh, compares what you planned with what happened and updates the budget, stages, calendar and checklist for next time.

                ## Milestones
                1. Rain, tank level, feed and cash logs for the season gathered in one place.
                2. What went to plan and what did not written down, with the cost of each problem.
                3. The water budget, drought stages, planting calendar and readiness checklist updated.
                4. Three changes for next dry season chosen and written at the front of the notebook.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A written review of the dry season exists each year with three named changes and updated budget, stages and checklist."
                cadence: cyclic
              tasks:
                - "Gather the season's rain, tank, feed and cash logs"
                - "Ask the agent to summarise the logs and list where reality differed from the plan"
                - "Update the water budget, stages, calendar and checklist"
                - "Hold the dry season review within a month of the first rains @recurring(yearly)"
            - name: First dry season on a new farm
              description: |-
                ## Purpose
                Taking on new land means facing a dry season with no records, unknown sources and soil you have not worked. Asking the right people, measuring early and planting cautiously the first year builds the knowledge every later plan depends on, without betting the farm on guesses.

                ## Milestones
                1. The previous owner or tenant and two neighbours asked about water, fire and grazing in past dry seasons.
                2. Every water source on the land measured in the first dry month.
                3. A cautious first-year planting plan that leaves a margin of water unused.
                4. A record kept through the season to start the farm's own history.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "By the end of the first dry season the new farm has measured source flows, a conservative planting plan and a full season record."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the previous occupier how the water held up in the last dry season"
                - "Visit two neighbours and ask about dry season fire and grazing"
                - "Measure every source in the first dry month"
                - "Plan the first dry season to use no more than most of the measured water"
            - name: Dry season on a farm with no water source
              description: |-
                ## Purpose
                Many smallholdings, especially on leased or hillside land, have no well, stream or mains connection and rely on rain and carried water. Planning the dry season around catchment, tolerant crops, timing and shared or trucked supply makes the most of a hard position without large debt.

                ## Milestones
                1. Roof or surface catchment possible on the plot estimated in litres per wet season.
                2. Crops for the dry months limited to drought-tolerant or short-season ones that fit the water available.
                3. A shared, carried or trucked supply arranged for the driest weeks.
                4. The cost of a permanent source compared with the cost of working around it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written dry season plan for the waterless plot names its catchment, crops, backup supply and a costed decision on a permanent source."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Estimate how much rain could be caught from any roof or slab on the plot"
                - "Choose dry season crops that fit the water you can store or carry"
                - "Arrange a shared or trucked supply for the driest weeks"
                - "Compare the cost of a permanent source against working around it"
            - name: Grazing livestock through a long dry season
              description: |-
                ## Purpose
                Pasture farms carry the most risk in a drought because grass, water and animal condition all decline together. Rotating paddocks to keep cover, rationing standing grass, setting a fallback date for hand feeding and watching the herd closely keeps the land and animals in shape for the rains.

                ## Milestones
                1. Paddocks ordered so that the best standing grass is saved for the driest weeks.
                2. A weekly pasture cover score kept for every paddock in use.
                3. A date or cover score set at which hand feeding from the reserve begins.
                4. Overgrazed paddocks rested so they recover quickly when the rains return.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly pasture cover score is recorded for each paddock through the dry season, with a hand feeding trigger written down."
                cadence: cyclic
              tasks:
                - "Order the paddocks so the best grass is saved for the driest weeks"
                - "Walk the pasture and score remaining grass cover @recurring(weekly:sat)"
                - "Set the cover score at which hand feeding from the reserve starts"
                - "Shut the most overgrazed paddock to let it recover"
            - name: Keeping orchard trees alive through a drought year
              description: |-
                ## Purpose
                Young fruit, cocoa or citrus trees lost to drought take three to seven years to replace, and even mature trees can drop a whole crop. Protecting the trees first, with mulch, basins, targeted watering and sometimes sacrificing the crop, puts the long-term asset ahead of one season's fruit.

                ## Milestones
                1. Trees grouped by age and value, with young trees and best producers marked.
                2. Basins and mulch in place around every priority tree before the driest month.
                3. A minimum survival watering plan agreed with the extension officer for each group.
                4. Any decision to thin fruit or skip a crop to save trees recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every priority tree has a basin and mulch, and a survival watering plan by tree group is written down for the drought year."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Tag the young trees and best producers in the orchard"
                - "Dig basins and mulch around each tagged tree"
                - "Agree a minimum watering plan for each tree group with the extension officer"
                - "Decide whether to thin fruit on stressed trees and record why"
            - name: Dry season on a small island with rationed water
              description: |-
                ## Purpose
                On small, low islands with little groundwater, farms often depend on desalinated or rationed mains water and roof catchment, and the dry season can mean scheduled supply days. Planning storage to cover the gaps between supply days and growing crops that suit the water quality keeps production going under those limits.

                ## Milestones
                1. The supply schedule and any farm water rules from the utility written down.
                2. Storage sized to bridge the longest gap between supply days at peak demand.
                3. Crops checked for tolerance to the water quality, such as salt in brackish wells.
                4. Greywater or washing water reuse considered where local rules allow.

                ## Notes
                Rules on reusing greywater differ between islands. Ask the environmental health office before using it on food crops.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Storage on the farm covers the longest gap between supply days, and crops are chosen to suit the available water quality."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get the dry season supply schedule and farm rules from the utility"
                - "Size storage to cover the longest gap between supply days"
                - "Ask the extension officer which crops tolerate your water quality"
                - "Check with environmental health whether greywater reuse is allowed"
            - name: Keeping weekly buyers supplied through the dry months
              description: |-
                ## Purpose
                Market gardeners selling every week to a hotel, shop or vendor can lose the account if supply stops for six weeks in March. Planning a smaller, steady supply through the dry season, and telling buyers early what to expect, protects the relationship that pays for the rest of the year.

                ## Milestones
                1. Each regular buyer's weekly order and the crops it depends on listed.
                2. A reduced but steady dry season supply plan made from the water allocation.
                3. Buyers told in writing of expected volumes and any gaps before the season.
                4. A weekly supply forecast sent to buyers through the driest weeks.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every regular buyer receives a written dry season supply plan and a weekly forecast through the driest weeks."
                cadence: cyclic
              tasks:
                - "List each regular buyer's weekly order and the crops behind it"
                - "Plan a smaller, steady supply that fits the dry season water"
                - "Write to each buyer with expected volumes and gaps"
                - "Send each buyer a two-week supply forecast @recurring(weekly:thu)"
            - name: Planning for two failed wet seasons
              description: |-
                ## Purpose
                Most dry season plans assume the rains return on time, but the region has seen back-to-back droughts that emptied reservoirs and wells. Thinking through a worst case in which the next wet season also fails shows which parts of the farm would break first and which steps to take early if the outlook points that way.

                ## Milestones
                1. A scenario written for a dry season followed by a weak wet season and a second dry season.
                2. Water, feed, crop and cash effects estimated for the scenario.
                3. Early warning signs listed, such as a drought index category or reservoir level, that would mean acting on the scenario.
                4. A short list of early actions agreed, such as destocking, extra storage or switching crops.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written two-season drought scenario lists its effects, warning signs and agreed early actions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page scenario for a dry season, weak rains and another dry season"
                - "Estimate water, feed, crop and cash effects in that scenario"
                - "List the warning signs that would mean acting on it"
                - "Revisit the scenario against the latest outlook @recurring(yearly)"
            - name: Farm well level monitoring over the years
              description: |-
                ## Purpose
                A well that held up this year may be drawing on a falling water table, and the first sign is often a pump that runs dry an hour earlier each April. Measuring the resting water level monthly with a dip meter or weighted tape builds a record that shows the trend long before the well fails.

                ## Milestones
                1. A fixed measuring point marked on the well head.
                2. A dip meter or weighted tape bought or borrowed.
                3. Resting water level measured monthly, with the pump off for a set time first.
                4. A year of readings plotted and compared with rainfall.

                ## Notes
                Start from the **Metrics log** template. Keep the measuring tape clean and dry it before storing, so the well water is not contaminated.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly resting water levels for the farm well are logged from a fixed point, with a year plotted against rainfall."
                cadence: rolling
              tasks:
                - "Mark a fixed measuring point on the well head"
                - "Get a dip meter or weighted tape for measuring water depth"
                - "Measure the resting water level with the pump off @recurring(monthly:15)"
                - "Plot the year's readings beside the rainfall log"
            - name: Drought loss records for relief programmes
              description: |-
                ## Purpose
                When governments declare a drought or open relief and rehabilitation schemes, help usually goes to farmers who can show registration, what they had and what they lost. Keeping dated photos, planting and stock records and receipts through the dry season means you can apply quickly and fully if a scheme opens.

                ## Milestones
                1. Farmer registration with the agriculture ministry confirmed current.
                2. A dated record of each block's planting and each animal group at the start of the dry season.
                3. Losses recorded with photos, dates and estimated value as they happen.
                4. Receipts for bought water, feed and replanting kept in one folder.

                ## Notes
                This is the evidence file for government relief. Insurance claims follow the policy's own rules, so check those with your insurer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated drought evidence folder holds registration, starting records, loss photos and receipts for the whole dry season."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check your farmer registration with the agriculture ministry is current"
                - "Photograph every block and animal group at the start of the dry season"
                - "Record each loss with a dated photo and estimated value"
                - "File every receipt for bought water, feed and replanting in one folder"
            - name: Ten-year dry season trend review
              description: |-
                ## Purpose
                Single seasons mislead: one wet year makes storage look wasteful and one bad year makes the farm look doomed. Putting ten years of rainfall, dry spell length, yields and costs side by side, from your logs and station data, shows whether the dry season is getting longer and whether the farm should change course.

                ## Milestones
                1. Rainfall and dry spell length for up to ten years gathered from your logs and the met station.
                2. Yields and dry season costs for the same years added where records exist.
                3. Any trend in season length, rainfall or cost noted and checked with the extension officer or met service.
                4. One long-term decision recorded, such as more storage, different crops or a new enterprise mix.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A table of up to ten dry seasons with rainfall, spell length, yields and costs exists, with one recorded long-term decision."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Collect rainfall and dry spell figures for as many past years as you can"
                - "Add yields and dry season costs for the same years"
                - "Ask the met service whether local dry seasons are lengthening"
                - "Add the latest season to the ten-year table @recurring(yearly)"
---

# Drought and Dry Season Planning

This area is for growers and livestock keepers who lose sleep between January and May, or in whatever months your island runs dry, and want the dry season planned rather than survived. It starts with foundations (your real dry season dates, a water budget, storage counted in days, trigger stages, irrigation priorities, livestock water, a feed reserve target and a fire plan), then the weekly and monthly routines that track water, feed, fire breaks and cash, the skills of reading outlooks, spotting stress and keeping rain in the ground, decisions on storage, crops, calendars and herd size, the dated events from the last planting date to the first rains, situations from a new farm to a dry island, and finally the specialist work of multi-year scenarios, well records and long-run trends.

What repeats is a daily rain gauge reading in the dry months, a Monday tank and pond reading, a Wednesday livestock water round, a Friday water allocation, monthly checks of the drought outlook, mulch, fire breaks, feed stock, cash and the well level, a quarterly test of the backup animal water, and a yearly readiness check, fire notice and season review. The Risk register, Metrics log, Purchase decision, Vendor and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
