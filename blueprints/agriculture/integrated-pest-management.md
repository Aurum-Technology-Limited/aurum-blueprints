---
id: agriculture.integrated-pest-management
name: Integrated Pest Management
description: "Pests managed by evidence: a field history and pest calendar, weekly scouting and traps, written action thresholds, cultural and biological controls first, products chosen with the extension officer and records buyers trust."
category: business
version: 1.0.0
tags: [agriculture, integrated-pest-management, small-business, ipm, scouting, action-thresholds, biological-control, crop-protection]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - operational-checklist
    - risk-register
    - vendor
    - training-program
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Integrated Pest Management
          description: "Managing pests with integrated methods: scouting, action thresholds, cultural and biological controls, choosing approved products with an extension officer and keeping records."
          projects:
            - name: Pest and disease history of each field
              description: |-
                ## Purpose
                Most farms fight the same three or four pests every year, in the same fields, at the same stage of the crop, but nobody has written it down, so every outbreak feels new. Putting the last two or three seasons on paper, field by field, shows where to scout first and which problems deserve a plan rather than a panic spray.

                ## Milestones
                1. Every field or bed block listed with the crops grown in it over the last three seasons.
                2. The main pests and diseases seen in each field noted, with the crop stage and month they appeared.
                3. Losses estimated roughly for the worst problem in each field, as a share of the harvest.
                4. The three to five problems that cost the most picked out as the priorities for this area.

                ## Notes
                Memory is unreliable after one season, so ask the people who did the spraying and picking, and check old input receipts: the products bought tell you what was being fought.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written history for every field covering three seasons of crops and pest problems, with the top three to five priority pests named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every field or bed block and the crops grown there in the last three seasons"
                - "Ask the workers who sprayed and picked which pests hit each field and when"
                - "Go through old input receipts to see which pest and disease products were bought"
                - "Rank the problems by the harvest they cost and pick the top five"
                - "Add this season's pest problems to the field history @recurring(yearly)"
            - name: Scouting map and fixed walking route
              description: |-
                ## Purpose
                Scouting only works if the same ground is checked the same way each week, and a farmer walking wherever looks interesting will miss the corner where whitefly always starts. A simple map with numbered stops, edge rows and known hot spots turns scouting into a twenty to forty minute routine anyone on the farm can repeat.

                ## Milestones
                1. A sketch map of the farm with fields, borders, drains, windbreaks and neighbouring crops marked.
                2. Known hot spots from the field history circled on the map.
                3. A walking route with numbered stopping points, including edges and the middle of each field.
                4. The route walked once and timed, with the number of plants to check at each stop decided.

                ## Notes
                A common pattern is a W or zigzag through each field plus a pass along the upwind edge, because many flying pests arrive on the wind and build up at borders first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A farm map with a numbered scouting route exists, has been walked and timed once, and states how many plants are checked at each stop."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the farm with fields, borders, drains and neighbouring crops on one page"
                - "Circle the hot spots named in the field history"
                - "Mark numbered scouting stops in a zigzag through each field and along the edges"
                - "Walk the route once with a stopwatch and note how long it takes"
            - name: Scouting kit with hand lens and sample bags
              description: |-
                ## Purpose
                Thrips, mites and young whitefly are too small to judge by eye, and a sample sent to the extension office in a hot plastic bag usually arrives as mush. A small kit kept by the door, with a hand lens, bags, labels and a cool box, means every walk can collect proper evidence for very little money.

                ## Milestones
                1. A shortlist of kit items with prices from a farm supply shop or online.
                2. A hand lens of around ten to twenty times magnification bought and tested on a leaf underside.
                3. Sample bags, a marker, paper towels, a small cool box and a white tray gathered in one bag.
                4. The kit stored in a fixed place where whoever scouts can take it.

                ## Notes
                Start from the **Purchase decision** template. A phone clip-on macro lens is a cheap extra that lets you send clear photos to the extension officer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete scouting kit including a hand lens, sample bags, labels and a cool box is assembled and stored in one agreed place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of scouting kit items and price them at the farm supply shop"
                - "Buy a hand lens and check you can see mites on a leaf underside with it"
                - "Pack bags, labels, a marker, a white tray and a small cool box together"
                - "Agree where the kit lives and who puts it back after each walk"
            - name: Pest calendar for your district and crops
              description: |-
                ## Purpose
                Pest pressure in the Caribbean follows the seasons: thrips and mites build in the dry season, fungal and bacterial diseases surge once the rains arrive, and fruit fly peaks with ripening fruit. Laying the main pests of your crops against the wet and dry months tells you when to scout harder and when prevention has to be in place.

                ## Milestones
                1. A twelve-month chart with the wet and dry seasons for your district marked.
                2. Each priority pest and disease placed in the months it usually builds up.
                3. Planting and harvest windows for your main crops added to the same chart.
                4. The high-risk overlaps, where a vulnerable crop stage meets a peak pest month, highlighted.

                ## Notes
                Your extension office or a regional agricultural research institute often has a crop calendar for your area to start from.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A twelve-month chart showing seasons, crop stages and priority pest peaks exists, with at least three high-risk overlaps highlighted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw a twelve-month strip and mark your district's wet and dry seasons"
                - "Place each priority pest in the months it usually builds up"
                - "Add planting and harvest windows for your main crops"
                - "Highlight where vulnerable crop stages meet peak pest months"
            - name: Identifying the main pests of your crops
              description: |-
                ## Purpose
                Spraying the wrong thing for the wrong pest is the most expensive mistake in crop protection, and many damage symptoms look alike from a metre away. Learning to name your top pests at each life stage, including eggs and larvae, is what makes every later threshold and control choice possible.

                ## Milestones
                1. A one-page profile for each priority pest with photos of eggs, young, adults and damage.
                2. Each profile noting where on the plant the pest is usually found and at what crop stage.
                3. Your own identifications checked against an extension officer or a reliable field guide.
                4. Ten specimens or photos from your own fields correctly named without help.

                ## Notes
                Fall armyworm, whitefly, thrips, broad mite, aphids, leaf miners and fruit borers are common starting points for vegetables in the region. Use pictures from your own farm wherever you can, because local colour forms differ from textbook photos.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A profile exists for each priority pest and you can name ten specimens or photos from your own fields, confirmed by an extension officer."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Pick the five pests that cost the most from the field history"
                - "Ask the agent to draft a one-page profile template covering life stages and damage"
                - "Photograph each pest and its damage on your own crops"
                - "Show your photos to the extension officer and correct any wrong names"
            - name: First extension officer visit on pest problems
              description: |-
                ## Purpose
                Extension officers see dozens of farms a month and usually know which pest is moving through the district before it reaches you, yet many farmers only call them when a crop is already lost. Booking a visit while the farm is calm, with your field history and photos ready, gets a second pair of trained eyes and starts a relationship you will need in the next outbreak.

                ## Milestones
                1. The nearest extension office and the officer covering your district identified.
                2. A visit booked with the field history, map and photos prepared.
                3. The officer's identification of any current pest or disease recorded.
                4. Their advice on thresholds, controls and approved products for your crops written down.
                5. A way to contact them quickly in an outbreak agreed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "An extension officer has walked the farm, and their identifications, advice and contact details are recorded in your notes."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the extension office and officer that cover your district"
                - "Phone or message to book a field visit about pest problems"
                - "Prepare the field history, scouting map and pest photos for the visit"
                - "Write up what the officer identified and advised the same evening"
            - name: Scouting record sheet and photo log
              description: |-
                ## Purpose
                A scouting walk that is not written down is forgotten by Thursday, and a sheet with a column for every possible pest is never filled in. Designing one short sheet, matched to your route and priority pests, plus a simple way to file phone photos by date and field, makes the weekly walk produce numbers you can compare.

                ## Milestones
                1. A one-page sheet with date, field, crop stage, stop number and counts for each priority pest.
                2. Space for natural enemies seen and for notes on disease symptoms.
                3. A photo naming habit agreed, such as date, field and stop in the file name or album.
                4. The sheet used on two walks and changed where it was awkward.

                ## Notes
                Start from the **Metrics log** template. Keep counts simple: number of infested plants out of ten checked is easier to repeat than estimating insects per leaf.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested scouting sheet and a photo filing method are in use, with at least two completed walks recorded on them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page scouting sheet with columns for each priority pest"
                - "Add a row for natural enemies seen and a space for disease notes"
                - "Set up a phone album or folder for scouting photos named by date and field"
                - "Use the sheet on two walks and fix the columns that did not work"
            - name: Written action thresholds for priority pests
              description: |-
                ## Purpose
                An action threshold is the level of pest or damage at which control pays for itself, and without one every insect seen becomes a reason to spray. Writing a threshold for each priority pest, in the same units your scouting sheet counts, is the step that turns scouting from watching into deciding.

                ## Milestones
                1. Published or extension-recommended thresholds found for each priority pest on your crops.
                2. Each threshold rewritten in the units your sheet uses, such as infested plants out of ten.
                3. Thresholds adjusted for crop stage where young plants or flowering need a lower trigger.
                4. The action to take at each threshold named, starting with non-chemical options.
                5. The threshold table pinned beside the scouting sheet.

                ## Notes
                Some pests have no published threshold. For those, agree a working one with the extension officer, write it as provisional and change it once you have a season of your own counts.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A threshold table covers every priority pest in scouting-sheet units, with crop-stage adjustments and a named first action for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect published or extension thresholds for each priority pest"
                - "Convert each threshold into the units your scouting sheet records"
                - "Write the first action to take at each threshold, non-chemical options first"
                - "Review the thresholds against last season's counts and losses @recurring(yearly)"
            - name: Baseline of current spraying and its cost
              description: |-
                ## Purpose
                Few farmers know what they spend on crop protection each season once labour, fuel and lost picking days are counted, which makes it hard to tell whether integrated methods are paying off. A clear baseline of how often you spray, with what and at what cost per acre, is the number every later improvement is measured against.

                ## Milestones
                1. Every spray application in the last season or six months listed with date, field and product.
                2. The cost of products, labour and fuel for those applications added up.
                3. Sprays per crop cycle and cost per acre or per bed calculated.
                4. Sprays that were routine or by the calendar, rather than triggered by a pest, marked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written baseline shows sprays per crop cycle and total crop protection cost per acre for the last season."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather spray notes, receipts and memory of applications from the last season"
                - "List each application with date, field, product and who sprayed"
                - "Add up product, labour and fuel costs and divide by acres or beds"
                - "Mark which sprays were routine and which were triggered by a pest seen"
            - name: Approved product shortlist matched to each pest
              description: |-
                ## Purpose
                When thrips explode the night before market, farmers buy whatever the shop counter suggests, which often means a product not registered for the crop or one the pest already resists. Agreeing a short list in advance with the extension officer, two or three registered options per priority pest from different chemical groups and including biological ones, removes the guesswork from the worst moment.

                ## Milestones
                1. The national list of registered pest control products for your crops obtained.
                2. Two or three registered options per priority pest shortlisted with the extension officer.
                3. Each option's chemical group or mode of action noted so they can be rotated.
                4. At least one biological or low-toxicity option included for each pest where one exists.
                5. Label pre-harvest intervals noted beside each product so market timing can be planned.

                ## Notes
                Rates, mixing and safety always come from the product label and the extension officer, not from neighbours or this list. Handling, storage and spray records belong with your pesticide safety routine.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written shortlist names two or three registered options per priority pest from different mode-of-action groups, agreed with the extension officer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the extension office for the current registered product list for your crops"
                - "Shortlist two or three options per priority pest with the officer"
                - "Note each product's mode of action group and pre-harvest interval"
                - "Check the shortlist against the latest registration list @recurring(yearly)"
            - name: Weekly field scouting walk
              description: |-
                ## Purpose
                Pests double quickly in tropical heat, so a problem that was a few plants on Monday can be a whole bed by the following week. A fixed weekly walk on the same route, counting the same things, catches outbreaks while they are still small enough for a cultural or spot treatment.

                ## Milestones
                1. A fixed scouting day and time chosen, outside the hottest part of the day.
                2. The route walked weekly for a full crop cycle with a sheet completed each time.
                3. Counts compared with the threshold table at the end of every walk.
                4. Any field over threshold flagged the same day with the agreed first action.

                ## Notes
                Early morning is best for most insects and for seeing disease symptoms in dew. If you miss the day, walk the next morning rather than skipping the week.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scouting sheets exist for at least twelve consecutive weeks, each compared against the threshold table."
                cadence: rolling
              tasks:
                - "Choose a fixed morning for scouting and put it in the farm diary"
                - "Walk the scouting route and fill in the sheet @recurring(weekly:tue)"
                - "Compare the counts with the threshold table before leaving the field"
                - "Tell whoever manages spraying about any field over threshold the same day"
            - name: Sticky trap and pheromone trap network
              description: |-
                ## Purpose
                Traps catch flying pests before you can see them on the crop, and a change in weekly catch is often the first sign that whitefly, thrips, leaf miners or fruit fly are arriving. A small, fixed set of yellow and blue sticky cards and lure traps, read on the same day each week, gives an early warning that costs a few dollars a month.

                ## Milestones
                1. Trap types chosen for your priority pests, such as yellow cards, blue cards or species lures.
                2. Traps placed at fixed, numbered points on the map, including upwind edges.
                3. Catches counted and recorded weekly, with cards and lures replaced on schedule.
                4. A simple chart of weekly catches kept for each trap point.

                ## Notes
                Traps are for monitoring, not control. A rising catch tells you to scout that area harder, not to spray straight away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A numbered trap network is in place and weekly catches are recorded for at least ten consecutive weeks."
                cadence: rolling
              tasks:
                - "Buy yellow and blue sticky cards and any lures your priority pests need"
                - "Mark fixed trap points on the scouting map and set the traps out"
                - "Count and record trap catches and replace full cards @recurring(weekly:fri)"
                - "Chart the weekly catch for each trap point on one page"
            - name: Monthly pest pressure review
              description: |-
                ## Purpose
                Weekly sheets show what is happening this week, but trends only appear when four or five weeks sit side by side. A short monthly review of scouting counts, trap catches and any sprays applied shows whether pressure is rising, which controls worked and what to change for the coming month.

                ## Milestones
                1. A fixed monthly review time of under an hour set.
                2. Scouting counts and trap catches for the month summarised per field.
                3. Every control action in the month listed with the reason and the result.
                4. One or two changes for next month written down and assigned.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A one-page monthly pest summary with at least one decision for the next month exists for six consecutive months."
                cadence: rolling
              tasks:
                - "Set aside an hour each month to review the pest records"
                - "Summarise scouting counts, trap catches and control actions per field @recurring(monthly:12)"
                - "Ask the agent to turn the month's sheets into a short trend summary"
                - "Write one or two changes for next month and who will make them"
            - name: Weather watch for disease-favouring conditions
              description: |-
                ## Purpose
                Early blight, downy mildew, anthracnose and bacterial spots spread when leaves stay wet for long spells, and a run of humid, showery days is the warning to act before symptoms show. Checking the week's forecast every Monday against what favours your main diseases lets you time protective steps instead of chasing infection.

                ## Milestones
                1. The weather conditions that favour each priority disease written down from extension or published guidance.
                2. A reliable local forecast source chosen, with a rain gauge on the farm if possible.
                3. Rainfall and wet spells logged weekly beside the scouting sheet.
                4. A rule agreed for what to do when a high-risk spell is forecast.

                ## Notes
                A cheap rain gauge and noting how long leaves stay wet in the morning will tell you more about your own fields than a national forecast.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly log of rainfall and disease-risk spells is kept for a full wet season, with the agreed response applied when risk is high."
                cadence: rolling
              tasks:
                - "Write down the weather conditions that favour each priority disease"
                - "Put up a rain gauge where it is easy to read"
                - "Check the week's forecast and log last week's rain and wet spells @recurring(weekly:mon)"
                - "Agree what protective step to take when a high-risk spell is forecast"
            - name: Field sanitation and crop residue routine
              description: |-
                ## Purpose
                Old crop stubble, cull fruit left in the row and diseased plants thrown on the headland are where the next generation of pests and spores waits. A monthly sanitation round, pulling infected plants, removing fallen fruit and clearing finished crops promptly, cuts pressure without buying anything.

                ## Milestones
                1. A list of sanitation jobs for each crop, such as roguing virus plants and burying cull fruit.
                2. A place agreed away from the fields for diseased material and culls.
                3. Finished crops cleared within an agreed number of days after last harvest.
                4. A monthly sanitation round recorded with what was removed and where.

                ## Notes
                Start from the **Operational checklist** template. Do not compost diseased material near young crops, and wash tools after handling virus or bacterial plants.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sanitation checklist is in use and twelve monthly rounds are recorded, with finished crops cleared within the agreed time."
                cadence: rolling
              tasks:
                - "List the sanitation jobs for each crop you grow"
                - "Choose a disposal spot well away from the fields for diseased plants and culls"
                - "Walk every field removing infected plants and fallen fruit @recurring(monthly:20)"
                - "Set a rule for how many days after last harvest a crop must be cleared"
            - name: Weed host and field border management
              description: |-
                ## Purpose
                Many vegetable pests and viruses live between crops on weeds and bush at the field edge, and whitefly-borne viruses often start in the border before they reach the beds. Managing the weeds that host your priority pests, and keeping borders mown or planted on purpose, removes a reservoir most farmers never think about.

                ## Milestones
                1. The weeds that host your priority pests and viruses identified with the extension officer.
                2. Field borders and drains mapped with who is responsible for each.
                3. A border cutting or clearing round agreed for each month of the year.
                4. Host weeds removed from inside fields before a new crop is planted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Host weeds for each priority pest are named, borders are cleared on a monthly round, and new fields are free of host weeds at planting."
                cadence: cyclic
              tasks:
                - "Ask the extension officer which local weeds host your priority pests and viruses"
                - "Mark field borders and drains on the map with who keeps each one"
                - "Cut or clear the field borders and drains on the agreed round @recurring(monthly:8)"
                - "Remove host weeds from the next field before planting"
            - name: Spray decision log tied to scouting
              description: |-
                ## Purpose
                When a spray happens without a written reason, nobody can later tell whether it was needed or whether it worked. A short decision log, one line per treatment linking the scouting count, the threshold, the option chosen and the result, is what an IPM approach actually looks like on paper and what auditors and buyers ask to see.

                ## Milestones
                1. A one-line log format with date, field, pest, count, threshold, action and reason.
                2. Every treatment, chemical or not, entered in the log before it is applied.
                3. The result of each treatment added after the follow-up check.
                4. A monthly check that every spray on the farm has a matching log line.

                ## Notes
                This log records why you treated. The product, rate, operator and pre-harvest interval belong in your spray records under pesticide safety, and the two can share a date and field reference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every treatment in a three-month period has a decision log line linking it to a scouting count and threshold, with the result recorded."
                cadence: rolling
              tasks:
                - "Set up a one-line decision log in a notebook or spreadsheet"
                - "Write the scouting count and threshold before approving any treatment"
                - "Check every spray this month has a matching decision line @recurring(monthly:27)"
                - "Add the follow-up result to each line once it is known"
            - name: Follow-up checks after each treatment
              description: |-
                ## Purpose
                A treatment that did not work is worse than none, because it costs money and teaches the pest to survive. Checking the same plants three to seven days after any control, chemical, biological or cultural, tells you whether it worked, whether resistance may be starting and whether the next step needs to change.

                ## Milestones
                1. A follow-up interval agreed for each type of control.
                2. The treated area's plants marked or noted so the same ones are rechecked.
                3. Counts before and after recorded side by side for each treatment.
                4. Any treatment that failed to bring numbers down reported to the extension officer.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before-and-after counts are recorded for every treatment over one full crop cycle, with failures reported."
                cadence: rolling
              tasks:
                - "Agree how many days after each type of control the recheck happens"
                - "Tag a few plants in each treated area so the same ones are counted again"
                - "Record before and after counts side by side in the decision log"
                - "Report any treatment that did not work to the extension officer"
            - name: Seasonal IPM plan for each crop
              description: |-
                ## Purpose
                Integrated pest management is a plan made before planting, not a reaction after damage. Writing a short plan for each crop and season, with the expected pests, prevention steps, scouting focus, thresholds and fallback options, keeps the whole team working from the same page.

                ## Milestones
                1. A one to two page plan for each main crop covering the coming season.
                2. Each plan listing expected pests by crop stage from the pest calendar.
                3. Prevention steps, such as clean seedlings, rotation and netting, scheduled before planting.
                4. Scouting focus, thresholds and shortlisted controls for each stage written in.
                5. The plan reviewed at the end of the season against what actually happened.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written seasonal IPM plan exists for each main crop and has been reviewed after harvest at least once."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Choose the crop with the biggest pest losses to plan first"
                - "Write the expected pests by crop stage from the pest calendar"
                - "Schedule prevention steps for before planting and transplanting"
                - "Review each crop plan against the season's records and rewrite it @recurring(yearly)"
            - name: Pest alerts from extension and plant protection services
              description: |-
                ## Purpose
                Outbreaks such as fall armyworm or a new whitefly-borne virus often hit a district within weeks of each other, and the farmers who heard first had time to scout and protect. Joining the channels where the extension service, plant protection unit and farmer groups post alerts, and checking them once a month at least, gives you that head start.

                ## Milestones
                1. The extension service and plant protection unit's alert channels found and joined.
                2. One or two active farmer groups in your district joined for local reports.
                3. Alerts relevant to your crops logged with a note of action taken.
                4. Your own unusual finds shared back with the extension officer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You are subscribed to official and farmer alert channels and keep a log of relevant alerts and actions for six months."
                cadence: rolling
              tasks:
                - "Ask the extension office how it sends out pest alerts and sign up"
                - "Join one or two active farmer groups covering your district"
                - "Check official notices and group posts for new pest alerts @recurring(monthly:3)"
                - "Send the extension officer photos of any pest you cannot identify"
            - name: Telling pest damage from nutrient and weather damage
              description: |-
                ## Purpose
                Yellowing, curling and spotting can come from mites, viruses, nutrient shortage, herbicide drift, waterlogging or sun scald, and spraying insecticide on a nutrient problem wastes money and kills natural enemies. Learning the patterns that separate them, such as whether damage follows rows, wind or soil, saves the most common misdiagnosis on vegetable farms.

                ## Milestones
                1. A side-by-side reference of look-alike symptoms for your main crops.
                2. The field patterns that point to each cause, such as random, edge, low spot or whole block, noted.
                3. Three real cases on your farm diagnosed and checked with the extension officer.
                4. A rule to look under the leaf with a lens before deciding any symptom is a pest.

                ## Notes
                When the cause is unclear, a leaf sample to the extension lab and a soil test are cheaper than guessing. Fertility questions belong with your soil testing routine.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A look-alike symptom reference exists and three on-farm cases have been diagnosed and confirmed with the extension officer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect photos of look-alike symptoms for your main crops in one folder"
                - "Note the field pattern each cause usually makes"
                - "Diagnose three real cases on the farm and check them with the extension officer"
                - "Add a lens check of the leaf underside to the scouting routine"
            - name: Recognising natural enemies in the field
              description: |-
                ## Purpose
                Ladybirds, lacewings, hoverflies, predatory mites, spiders and tiny parasitic wasps already kill a large share of the pests on most farms, but only if they are noticed and protected. Knowing what they and their young look like, and counting them on the scouting walk, stops you spraying a field that is already being cleaned up for free.

                ## Milestones
                1. Photos of the common natural enemies and their larvae gathered for your crops.
                2. Parasitised aphids and caterpillars, such as mummified aphids, recognised on the farm.
                3. A natural enemy count added to the scouting sheet.
                4. A rule written for when natural enemy numbers justify waiting before treating.

                ## Notes
                Ladybird larvae look nothing like the adults and are often killed as pests. Learn them first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can name the main natural enemies on your crops at adult and larval stage, and their counts appear on the scouting sheet."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Gather photos of common natural enemies and their larvae for your crops"
                - "Look for mummified aphids and parasitised caterpillars on the next walk"
                - "Add a natural enemy column to the scouting sheet"
                - "Write a rule for when to hold off treating because enemies are present"
            - name: Sampling methods for counts you can compare
              description: |-
                ## Purpose
                Two people looking at the same field often report very different pest levels, because one shook plants over a tray and the other glanced at the top leaves. Learning a few standard methods, such as plant counts, leaf turning, beat trays and fruit cutting, and using the same one each time, makes the numbers trustworthy enough to act on.

                ## Milestones
                1. The right sampling method chosen for each priority pest.
                2. A sample size agreed per field, such as ten plants at each of five stops.
                3. Each method practised in the field until two people get similar counts.
                4. The methods written on the back of the scouting sheet.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written sampling method and sample size exist for each priority pest, and two scouts get similar counts on the same field."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Match a sampling method to each priority pest"
                - "Agree how many plants to check at each scouting stop"
                - "Scout the same field with a second person and compare counts"
                - "Write the methods on the back of the scouting sheet"
            - name: Disease signs of fungi, bacteria and viruses
              description: |-
                ## Purpose
                Fungal, bacterial and viral diseases need completely different responses, from protective sprays to roguing plants and controlling the insects that carry viruses, so naming the type matters more than naming the exact disease. Learning the signs, such as fungal spores and rings, water-soaked bacterial spots and virus mosaics and stunting, lets you act sensibly before the lab result arrives.

                ## Milestones
                1. A reference of the main diseases of your crops grouped by fungal, bacterial and viral.
                2. Typical signs of each group learned, with photos from your own farm where possible.
                3. A suspect sample of each type sent to the extension lab and the result compared with your guess.
                4. A first response written for each group while waiting for a diagnosis.

                ## Notes
                Viruses cannot be cured in the plant. The response is removing infected plants early and managing the insect that spreads them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have a grouped disease reference for your crops and at least two lab-confirmed samples that match your own diagnosis."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the main diseases of your crops and group them as fungal, bacterial or viral"
                - "Photograph suspect disease symptoms on the next scouting walk"
                - "Send a suspect sample to the extension lab in a cool, labelled bag"
                - "Write the first response for each disease group while a diagnosis is pending"
            - name: Resistance and mode of action rotation
              description: |-
                ## Purpose
                Diamondback moth, whitefly, thrips and mites on Caribbean farms have resisted product after product because the same chemical group was sprayed again and again. Understanding mode of action groups and planning rotations across them, with the extension officer, keeps the products you rely on working for longer.

                ## Milestones
                1. The idea of mode of action groups and their published numbering understood.
                2. Every product on your shortlist labelled with its group.
                3. A rotation written for each priority pest so the same group is not used back to back on one generation.
                4. Any suspected resistance on the farm recorded and reported.

                ## Notes
                Two different brand names can contain the same active ingredient or group. Always check the group on the label, not the trade name.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each shortlisted product carries its mode of action group and a written rotation exists for every priority pest."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a plain introduction to insecticide and fungicide mode of action groups"
                - "Write the group number beside each product on your shortlist"
                - "Draft a rotation for each priority pest and check it with the extension officer"
                - "Note any product that seems to have stopped working and report it"
            - name: Using biopesticides such as Bt, Beauveria and neem
              description: |-
                ## Purpose
                Biological products based on bacteria, fungi or plant extracts can control caterpillars, whitefly and some mites with far less harm to natural enemies, but they fail if used like a chemical knockdown. Learning how they work, how to store them and when to apply them, such as on young larvae and in cooler, humid hours, is what makes them pay.

                ## Milestones
                1. The registered biopesticides for your crops and pests listed with the extension officer.
                2. How each one works, which pest stage it targets and its storage needs noted from the label.
                3. One biopesticide trialled on a marked block with before and after counts.
                4. A decision made on where biopesticides fit in each crop plan.

                ## Notes
                Many biological products lose strength in heat and sunlight, so check the label for storage and shelf life before buying in bulk. Rates and mixing come from the label only.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one registered biopesticide has been trialled with recorded before and after counts and a decision on its place in the crop plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the extension officer which biopesticides are registered for your pests"
                - "Read the label of each for target stage, timing and storage needs"
                - "Trial one product on a marked block and record counts before and after"
                - "Decide where biopesticides fit in each crop's seasonal plan"
            - name: Nematode and soil pest awareness
              description: |-
                ## Purpose
                Root-knot nematodes, cutworms, mole crickets and soil-borne wilts cause stunting and patchy stands that are often blamed on fertiliser or drought. Learning to dig and check roots, and sending soil for a nematode test before planting susceptible crops, catches a problem that no leaf scouting will ever see.

                ## Milestones
                1. The soil pests and diseases most likely in your crops and soils listed.
                2. Roots of stunted plants dug and checked for galls, rots and damage.
                3. A soil sample sent for a nematode count from any field with a history of patchy growth.
                4. Rotation or soil management steps agreed for fields with high counts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Roots of stunted plants have been checked and at least one field has a nematode test result with an agreed response."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Dig up three stunted plants and wash the roots to check for galls and rots"
                - "Ask the extension lab how to take a soil sample for nematodes"
                - "Send a nematode sample from the field with the patchiest growth"
                - "Agree rotation or soil steps with the extension officer for high counts"
            - name: Farmer field school or IPM short course
              description: |-
                ## Purpose
                Farmer field schools teach IPM in the field over a whole crop cycle, comparing an IPM plot with a farmer-practice plot, and growers who attend often cut sprays sharply in the seasons after. Finding a course run by the extension service, a regional research institute or a farmer organisation gives you structured learning and a network of growers solving the same problems.

                ## Milestones
                1. Courses and field schools in your area found through the extension office and farmer groups.
                2. One course chosen that fits your crops and the farm calendar.
                3. Every session attended with notes on what to try at home.
                4. Two or three changes from the course trialled on the farm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An IPM course or field school has been completed and at least two practices from it are trialled on the farm."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the extension office and farmer groups about upcoming IPM training"
                - "Choose a course that fits your crops and the busy months of the farm"
                - "Keep a notebook of practices to try at home during each session"
                - "Trial two practices from the course on a marked block"
            - name: Crop rotation to break pest cycles
              description: |-
                ## Purpose
                Planting tomatoes after peppers after melongene in the same bed feeds the same soil pests, wilts and nematodes season after season. A rotation that moves crop families around the fields, with a break crop or cover where possible, is one of the cheapest pest controls there is.

                ## Milestones
                1. Every crop you grow grouped by plant family.
                2. A three or four season rotation drawn for each field so families do not follow themselves.
                3. Fields with soil pest or wilt history given the longest break from susceptible families.
                4. The rotation added to the field history and checked before each planting.

                ## Notes
                Tomato, pepper, melongene and potato are all one family and share many pests and diseases. So do cabbage, pak choi and broccoli.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written rotation for every field separates crop families for at least three seasons and is checked before each planting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group every crop you grow by plant family"
                - "Draw a three or four season rotation for each field"
                - "Give fields with wilt or nematode history the longest break"
                - "Check the rotation before the next planting is decided"
            - name: Resistant and tolerant variety trial
              description: |-
                ## Purpose
                Seed catalogues and research institutes now offer tomato, pepper and cucurbit varieties with tolerance to viruses, wilts and nematodes, and the right variety can remove a pest problem outright. A side-by-side trial on your own farm, with records, shows whether the claims hold under your conditions and buyers' expectations.

                ## Milestones
                1. Two or three varieties with tolerance to a priority pest or disease identified.
                2. A trial block planted beside your usual variety under the same care.
                3. Pest and disease levels, yield and quality recorded for each.
                4. A decision made on which variety to grow next season, with buyer feedback included.

                ## Notes
                Start from the **Metrics log** template. Tolerant is not immune: keep scouting the trial block the same way as the rest.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial comparing at least two tolerant varieties with your usual one is recorded and a variety decision is written down."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the seed supplier and extension officer for tolerant varieties of your main crop"
                - "Plant a trial block beside your usual variety with the same care"
                - "Record pest levels, yield and grade for each variety through harvest"
                - "Ask your main buyer what they think of the fruit from each variety"
            - name: Flowering borders for beneficial insects
              description: |-
                ## Purpose
                Hoverflies, parasitic wasps and many predators need nectar and pollen as adults, and bare, sprayed field edges give them nowhere to live. Planting strips of flowering plants such as marigold, coriander, sunflower or local wildflowers along borders gives natural enemies a home close to the crop.

                ## Milestones
                1. Flowering plants that suit your climate and attract natural enemies chosen.
                2. Border strips planted along at least two field edges.
                3. Natural enemy counts compared between fields with and without strips.
                4. The strips maintained and replanted as part of the border routine.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Flowering strips are established on at least two field edges and natural enemy counts are compared over one crop cycle."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose three or four flowering plants that attract natural enemies locally"
                - "Prepare and plant a strip along two field edges"
                - "Compare natural enemy counts beside and away from the strips"
                - "Check the strips and replant gaps @recurring(quarterly)"
            - name: Clean planting material and seedling screening
              description: |-
                ## Purpose
                Seedlings and planting material bought from an unknown source are one of the commonest ways whitefly, mites, viruses and soil diseases arrive on a farm. Buying from trusted nurseries, inspecting every tray before it goes in the ground and rejecting doubtful stock stops problems at the gate.

                ## Milestones
                1. Current seedling and planting material sources listed and rated.
                2. A short inspection checklist for trays, covering leaf undersides, roots and growing tips.
                3. Every delivery inspected and doubtful trays rejected or held apart.
                4. Nurseries that repeatedly send infested stock dropped.

                ## Notes
                Hold new trays a few days away from your crops if you can, and look again before planting. If you raise your own seedlings, keep the nursery screened and away from older crops.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every seedling delivery for a full season has been inspected against a written checklist, with rejections recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where your seedlings and planting material come from"
                - "Write a short tray inspection checklist"
                - "Inspect the next delivery with a hand lens before it is planted"
                - "Note any nursery that sends infested stock and look for another source"
            - name: Insect netting and row covers for young crops
              description: |-
                ## Purpose
                Young tomato and pepper plants infected with a whitefly-borne virus in the first weeks rarely yield, and keeping insects off for that period can save the crop. Comparing netting, row covers and screened nurseries on cost, heat and labour helps decide whether physical exclusion is worth it for your fields.

                ## Milestones
                1. Exclusion options compared on cost, mesh size, heat build-up and labour.
                2. One option trialled on a block during the most vulnerable weeks.
                3. Virus incidence and yield compared with an uncovered block.
                4. A decision recorded on where exclusion is worth it next season.

                ## Notes
                Start from the **Purchase decision** template. Fine mesh keeps heat in, so check ventilation in the dry season and remove covers for crops that need insect pollination at flowering.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial comparing a covered and uncovered block is recorded and a written decision says where netting will be used."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Price netting, row covers and a screened nursery from two suppliers"
                - "Cover one block of young plants during the first weeks after transplanting"
                - "Compare virus symptoms and yield with an uncovered block"
                - "Write down where exclusion will be used next season and why"
            - name: Switching from calendar spraying to threshold spraying
              description: |-
                ## Purpose
                Spraying every Saturday whatever is in the field is a habit many farms inherit, and it usually means more cost, more resistance and fewer natural enemies than needed. Moving one crop at a time to threshold-based decisions, with the baseline as the comparison, shows in money terms what the change is worth.

                ## Milestones
                1. One crop or field chosen for the first switch.
                2. Scouting and thresholds used for every treatment decision on it for a full cycle.
                3. Sprays, cost and yield compared with the baseline and with a calendar-sprayed field.
                4. A decision taken on rolling the approach out to other crops.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One crop has completed a full cycle on threshold decisions and its sprays, cost and yield are compared with the baseline in writing."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one crop or field to move off calendar spraying first"
                - "Tell the sprayer that this field is treated only on a scouting decision"
                - "Record every treatment decision for the field in the decision log"
                - "Compare sprays, cost and yield with the baseline after harvest"
            - name: Choosing a biological control supplier
              description: |-
                ## Purpose
                Predatory mites, parasitic wasps and biological products are only as good as the supplier's quality, delivery speed and storage, and a box of dead insects left in a hot depot is money lost. Comparing suppliers on what they offer for your pests, how they ship and what support they give avoids an expensive first experiment.

                ## Milestones
                1. Suppliers of natural enemies and biological products available to your country listed.
                2. Each compared on species or products offered, shipping, import permits and support.
                3. One supplier chosen and a small first order placed.
                4. Delivery condition and field results recorded.

                ## Notes
                Start from the **Vendor** template. Importing living organisms usually needs a permit from the plant protection authority, so ask before ordering.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A supplier is chosen from a written comparison, any import permit is confirmed and a first order's condition and results are recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List biological control suppliers that can deliver to your country"
                - "Ask the plant protection authority whether importing natural enemies needs a permit"
                - "Compare suppliers on products, shipping time and technical support"
                - "Place a small first order and record its condition on arrival"
            - name: Trap crop and repellent planting trial
              description: |-
                ## Purpose
                Some pests prefer one plant over your crop, so a strip of that plant can draw them off and be managed in one place, while strong-smelling plants can make the crop harder to find. A small, recorded trial shows whether trap and repellent planting works for your pests, rather than relying on stories.

                ## Milestones
                1. A trap or repellent plant chosen for one priority pest from published or extension advice.
                2. A trial block and a comparison block set up under the same care.
                3. Pest counts on the crop, the trap plants and the comparison block recorded weekly.
                4. A decision made on keeping, changing or dropping the method.

                ## Notes
                A trap crop that is never managed becomes a pest nursery. Plan how the trap strip will be removed or treated before planting it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trap or repellent planting trial has a recorded comparison of pest counts and a written decision on its future."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick one priority pest and find a trap or repellent plant suggested for it"
                - "Set up a trial block and a comparison block side by side"
                - "Plan how the trap strip will be removed before the pests move on"
                - "Record weekly counts on crop, trap plants and comparison block"
            - name: Wet season disease preparation before the rains
              description: |-
                ## Purpose
                Once the rains set in, fields are hard to enter, sprays wash off and fungal and bacterial diseases can move through a crop in days. Spending the last weeks of the dry season preparing, with drainage cleared, wider spacing and raised beds where needed, resistant varieties sourced and protective options agreed, turns the wet season from a scramble into a plan.

                ## Milestones
                1. The diseases that hit hardest in the wet season listed from the field history.
                2. Planting plans for the rainy months adjusted for spacing, bed height and variety.
                3. Protective options for the main diseases agreed with the extension officer and in stock.
                4. Field drains and access paths checked so scouting can continue in the rain.

                ## Notes
                Start from the **Operational checklist** template. Drainage construction itself belongs with your drainage and flood control plans; here the aim is keeping disease pressure down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A wet season disease checklist is completed before the first heavy rains, with planting adjustments made and protective options in stock."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the diseases that hit hardest in the wet season on your farm"
                - "Adjust spacing, bed height and variety choice for rainy-month plantings"
                - "Agree and stock protective options for the main diseases"
                - "Run the wet season disease checklist before the rains @recurring(yearly)"
            - name: Pre-planting pest check for a new field
              description: |-
                ## Purpose
                Opening a new field, or replanting one after fallow, is the best and only chance to deal with host weeds, soil pests and nearby infested crops before the investment goes in. A short pre-planting check, done two to four weeks before land preparation, prevents planting straight into a problem.

                ## Milestones
                1. The field walked for host weeds, soil pests and old crop residue.
                2. Neighbouring crops and their pest status noted.
                3. A soil or nematode test taken if the history suggests soil problems.
                4. Any clean-up, rotation change or planting delay agreed before preparation starts.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written pre-planting check is completed for the next field to be planted, with any clean-up or changes agreed before land preparation."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk the next field to be planted and note host weeds and residue"
                - "Check what neighbours are growing and how infested it is"
                - "Take a soil or nematode sample if the field history suggests it"
                - "Agree any clean-up or planting delay before land preparation starts"
            - name: Outbreak response plan for a sudden pest
              description: |-
                ## Purpose
                Fall armyworm in corn, a whitefly explosion in tomatoes or a thrips flare in hot peppers can take a crop in two weeks, and decisions made in a panic tend to be the wrong product at the wrong time. A short written plan for your two most likely outbreaks, with who to call, what to check and the agreed responses, means everyone knows what to do on day one.

                ## Milestones
                1. The two or three outbreaks most likely to hit the farm named.
                2. For each, the early signs, the scouting step and the response sequence written down.
                3. Contacts for the extension officer, supplier and plant protection unit listed.
                4. The plan walked through with the farm team once.

                ## Notes
                Start from the **Risk register** template. Keep the plan to one page per outbreak and put it where the team can see it.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page response plan exists for each of the two or three most likely outbreaks, with contacts listed and the team briefed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name the two or three outbreaks most likely to hit your crops"
                - "Write the early signs and response steps for each on one page"
                - "List the phone numbers of the extension officer, supplier and plant protection unit"
                - "Walk the farm team through the plans at the next meeting"
            - name: Pest and disease sweep after a storm
              description: |-
                ## Purpose
                After a hurricane or tropical storm, torn leaves, waterlogged roots and wounded fruit open the door to rots, bacterial diseases and pests moving in from damaged bush. A structured sweep in the first two weeks after the weather clears, alongside the clean-up, catches the secondary losses that often exceed the storm damage itself.

                ## Milestones
                1. A post-storm pest and disease checklist prepared before the season.
                2. Every field walked within two weeks after the storm with the checklist.
                3. Damaged and diseased plants removed and disposal recorded.
                4. Unusual pest arrivals reported to the extension officer.

                ## Notes
                Safety first: do not enter fields until the extension service or authorities say it is safe, and watch for downed power lines and flooded drains. The wider recovery plan belongs with your hurricane resilience work.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A post-storm checklist exists and, after the next storm, every field is swept within two weeks with removals recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a short post-storm pest and disease checklist"
                - "Keep the checklist with the hurricane season papers"
                - "Sweep every field with it within two weeks after a storm"
                - "Report any unfamiliar pest seen after the storm to the extension officer"
            - name: Buyer or certification audit of pest records
              description: |-
                ## Purpose
                Supermarkets, hotels, exporters and good agricultural practice schemes increasingly ask farmers to show they manage pests by monitoring and thresholds, not by routine spraying. Preparing your IPM records for an inspection, with scouting sheets, the threshold table, the decision log and the seasonal plans in one folder, turns a stressful audit into a short meeting.

                ## Milestones
                1. The buyer's or scheme's IPM requirements obtained in writing.
                2. Scouting sheets, threshold table, decision log and crop plans gathered in one folder.
                3. Gaps against the requirements found and closed before the visit.
                4. The audit completed and any corrective actions recorded with dates.

                ## Notes
                Food safety and certification as a whole belong with your GAP and food safety work. This project makes sure the pest management part is ready.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An IPM records folder meets the buyer's or scheme's written requirements and the audit is passed or corrective actions are recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the buyer or scheme for its pest management requirements in writing"
                - "Gather scouting sheets, thresholds, decision log and crop plans into one folder"
                - "Check the folder against each requirement and close the gaps"
                - "Record any corrective actions from the audit with a completion date"
            - name: Taking over a farm with a heavy spraying habit
              description: |-
                ## Purpose
                Inheriting or buying a farm, or taking over from a parent, often means inheriting a routine of frequent sprays, workers who expect it and pests that have become resistant. Changing it gradually, keeping trust with the team while proving the new approach on one field, works better than stopping everything overnight.

                ## Milestones
                1. The current spray routine and the reasons people give for it written down.
                2. One field chosen to run on scouting and thresholds while the rest continue.
                3. Workers involved in scouting the trial field and seeing the counts.
                4. Results shared with the team at the end of the cycle and the next step agreed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One field has run a full cycle on scouting decisions with the team involved, and a written plan for the next fields is agreed."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the longest-serving worker why the farm sprays the way it does"
                - "Choose one field to run on scouting and thresholds while others continue"
                - "Bring workers along on the scouting walk for the trial field"
                - "Share the trial field's results with the team after harvest"
            - name: Light IPM routine for a part-time plot
              description: |-
                ## Purpose
                A farmer with a day job and an acre or two cannot scout like a full-time grower, but can still prevent most losses with a short routine. A weekend version of the system, with a fifteen minute walk, two or three traps and a tiny threshold list, gives most of the benefit for a fraction of the time.

                ## Milestones
                1. The two or three pests that matter most on the plot chosen.
                2. A fifteen minute weekend walk route and a few traps set up.
                3. A one-line threshold for each pest written on a card.
                4. A neighbour or family member asked to check the plot if you are away.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A fifteen minute weekend scouting routine with traps and threshold card is kept for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Pick the two or three pests that matter most on the plot"
                - "Set out two or three sticky traps at the plot edges"
                - "Write a one-line threshold for each pest on a card kept with your tools"
                - "Do a fifteen minute walk and trap check @recurring(weekly:sat)"
            - name: Training workers to scout and report
              description: |-
                ## Purpose
                The workers who pick, weed and spray see the crop every day and often spot a problem days before the owner, but only if they know what to look for and feel it is their job to say. A short training programme, with pictures of the priority pests, the scouting sheet and a clear way to report, multiplies the eyes on the farm.

                ## Milestones
                1. A short training plan covering priority pests, natural enemies, the sheet and reporting.
                2. Picture cards of the priority pests and natural enemies made for the field.
                3. Every regular worker trained and able to fill in the scouting sheet.
                4. A simple reporting route agreed, such as a photo to one phone number.
                5. Refresher sessions held as new pests or workers arrive.

                ## Notes
                Start from the **Training program** template. Thank people for reports even when they turn out to be nothing, or the reports will stop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every regular worker has been trained on priority pests and the scouting sheet, and at least one worker report has led to action."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Make picture cards of the priority pests and natural enemies"
                - "Run a field session showing workers the scouting sheet and route"
                - "Agree one phone number where workers send photos of problems"
                - "Hold a short scouting refresher with the team @recurring(quarterly)"
            - name: Pest plan to meet buyer residue limits
              description: |-
                ## Purpose
                Supermarkets, hotels and export buyers reject produce whose pesticide residues exceed the maximum residue limits of the destination market, and one failed test can lose a contract. Building the pest plan around those limits, with the shortlist filtered to products allowed in the market and harvest timing respected, protects both the crop and the account.

                ## Milestones
                1. The residue limits or banned product list of each main buyer or destination market obtained.
                2. The product shortlist checked against those limits and any problem products removed.
                3. Pre-harvest intervals built into each crop plan around the picking schedule.
                4. A residue test arranged on a sample before the first delivery under the new plan.

                ## Notes
                Export documents and market access rules belong with your export compliance work. This project is about making the pest programme fit them.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The product shortlist is checked against every main buyer's residue limits and a residue test result is on file before first delivery."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each main buyer for its residue limits or banned product list"
                - "Strike off shortlisted products not allowed in those markets"
                - "Build pre-harvest intervals into the picking schedule for each crop"
                - "Arrange a residue test on a sample before the next delivery"
            - name: Organic or low-residue pest programme
              description: |-
                ## Purpose
                Growers moving toward organic certification or a low-residue label lose many of their usual tools and need prevention, natural enemies and allowed products to carry the load. Planning the pest programme a season ahead, with the certifier's allowed input list and a realistic view of the losses during transition, avoids a crop failure in the first year.

                ## Milestones
                1. The certifier's or label's allowed and prohibited pest control inputs obtained.
                2. Each priority pest matched to prevention steps and allowed controls.
                3. Expected yield loss during the transition estimated with the extension officer.
                4. One field run under the programme for a full cycle with records kept.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written pest programme using only allowed inputs exists for every priority pest and one field has completed a cycle under it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get the certifier's list of allowed and prohibited pest inputs"
                - "Match each priority pest to prevention steps and allowed controls"
                - "Estimate transition yield loss with the extension officer"
                - "Run one field under the programme and keep full records"
            - name: Releasing natural enemies on the farm
              description: |-
                ## Purpose
                Where pests keep returning despite good prevention, released predators and parasitoids, such as predatory mites for broad mite or parasitic wasps for whitefly, can hold them down for a season. Releases fail without clean conditions, so this is a project for growers who already scout well and have cut broad-spectrum sprays.

                ## Milestones
                1. A natural enemy chosen for one priority pest with supplier and extension advice.
                2. Broad-spectrum sprays stopped on the release block for the agreed period.
                3. Releases made on arrival and recorded with date, place and quantity.
                4. Pest and natural enemy counts tracked weekly and compared with a control block.

                ## Notes
                Releases work best early, when pest numbers are still low. Releasing into an outbreak rarely rescues it.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A natural enemy release is recorded with weekly pest and enemy counts compared against a control block for one crop cycle."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one pest and its natural enemy with the supplier and extension officer"
                - "Stop broad-spectrum sprays on the release block for the agreed period"
                - "Release on the day of arrival and record date, place and quantity"
                - "Count pests and natural enemies on release and control blocks @recurring(weekly:wed)"
            - name: Area-wide programme with neighbouring farms
              description: |-
                ## Purpose
                Fruit flies, whitefly and many viruses move freely across farm boundaries, so a careful grower beside a neglected field will always be reinfested. Working with neighbours and the extension service on shared trapping, synchronised clean-ups and host-free periods is the way experienced growers deal with pests no single farm can manage.

                ## Milestones
                1. Neighbouring growers and the extension officer met to discuss a shared pest.
                2. A shared action agreed, such as joint trapping, a clean-up week or a host-free period.
                3. Responsibilities and dates written down and shared with every farm.
                4. Results reviewed together at the end of the season.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written area-wide agreement with at least three neighbouring farms is in place and reviewed together after one season."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Talk to three neighbouring growers about the pest you share"
                - "Invite the extension officer to a meeting of the neighbouring farms"
                - "Write down the agreed shared actions, responsibilities and dates"
                - "Review the season's results with the group after harvest @recurring(yearly)"
            - name: Cost and return of pest management by crop
              description: |-
                ## Purpose
                An experienced grower knows not only how much is spent on pest control but what each dollar saves, crop by crop. Comparing the full cost of pest management, including scouting time, traps, biological and chemical products and labour, with the losses avoided shows where to invest more and where effort is wasted.

                ## Milestones
                1. Pest management costs for each crop totalled for a season, including scouting time.
                2. Losses to pests and diseases estimated per crop from scouting and harvest records.
                3. Cost and losses compared with the original spraying baseline.
                4. One change in spending agreed for next season based on the comparison.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A per-crop table of pest management cost and estimated losses is compared with the baseline and leads to one recorded spending decision."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Total pest management costs for each crop including scouting hours"
                - "Estimate pest and disease losses per crop from harvest records"
                - "Compare the results with the original spraying baseline"
                - "Rerun the pest cost comparison after the main season @recurring(yearly)"
            - name: Invasive and quarantine pest watch
              description: |-
                ## Purpose
                New arrivals such as giant African snail, red palm mite, frosty pod rot of cocoa or a new fruit fly can change farming in a whole island, and early reports from farmers are how plant protection services contain them. Knowing the pests your authority is watching for, and reporting suspected finds straight away instead of spraying them yourself, is a duty experienced growers take seriously.

                ## Milestones
                1. The plant protection authority's list of watched or notifiable pests obtained.
                2. Photos and key signs of each kept with the scouting kit.
                3. The reporting route and contact number for suspected finds saved.
                4. A monthly check of the farm and its borders for watched pests recorded.

                ## Notes
                Do not move plants, soil or produce off a farm where a notifiable pest is suspected until the authority advises. Photograph, note the location and call.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The watched pest list and reporting contact are in the scouting kit and a monthly invasive pest check is recorded for six months."
                cadence: rolling
              tasks:
                - "Ask the plant protection authority for its list of watched pests"
                - "Print photos of each watched pest and keep them in the scouting kit"
                - "Save the reporting number for suspected finds in every worker's phone"
                - "Check the farm and borders for watched pests @recurring(monthly:16)"
---

# Integrated Pest Management

This area is for growers who want fewer, better-timed sprays and fewer surprise losses, whether you run two acres of hot peppers and tomatoes or a mixed farm of vegetables, roots and fruit. It starts with the foundations (a field history, a scouting map and kit, a pest calendar for your district, written thresholds and a first visit from the extension officer), then the weekly and monthly routines of scouting, trapping and reviewing, the skills of telling pests, diseases and natural enemies apart, the improvements that cut pest pressure at the source, the dated events of the rains, outbreaks and audits, the situations of inheriting a spray-heavy farm or supplying fussy buyers, and finally the specialist work of area-wide programmes, releasing natural enemies and watching for invasive pests.

What repeats is a weekly scouting walk and trap check, a Monday look at the weather for disease conditions, a monthly pest pressure review, sanitation round and spray decision check, and a yearly rewrite of the seasonal plan, thresholds and product shortlist. The Purchase decision, Metrics log, Operational checklist, Risk register, Vendor and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
