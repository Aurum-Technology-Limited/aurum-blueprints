---
id: agriculture.hydroponic-greens-production
name: Hydroponic Greens Production
description: "A hydroponic greens business that harvests every week: the right system, clean water, nutrient solution checked daily, staggered seeding and lettuce, herbs and greens packed for supermarkets and hotels."
category: business
version: 1.0.0
tags: [agriculture, hydroponic-greens-production, small-business, hydroponics, lettuce, nft, nutrient-solution, salad-greens]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - risk-register
    - metrics-log
    - operational-checklist
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Hydroponic Greens Production
          description: "Growing lettuce, herbs and greens hydroponically: system types, nutrient solution monitoring, seedlings, harvest cycles and supplying supermarkets and hotels."
          projects:
            - name: Hydroponic crop list matched to named buyers
              description: |-
                ## Purpose
                Hydroponics suits fast leafy crops, but which ones depends on who is buying: a supermarket may want green and red leaf lettuce with roots on, a hotel kitchen wants romaine, arugula and basil, and a café wants mixed salad leaves by the kilo. Talking to five likely buyers before you buy a single channel tells you the crops, pack sizes and weekly volumes the system has to produce. Growers who start with crops nobody ordered end up selling premium lettuce at market prices.

                ## Milestones
                1. Five possible buyers listed, each with the greens, pack size and weekly volume they mention.
                2. Three to five crops chosen that at least two buyers want.
                3. A weekly target in heads or kilos set for each crop.
                4. The crop list, buyers and targets written on the first page of the grow record.

                ## Notes
                Start with green leaf lettuce and one herb. They are forgiving, quick and sell everywhere, and they teach you the system before you try fussier crops.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written crop list naming each crop, its weekly target and at least one buyer for it, recorded before any equipment is bought."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the produce manager at one supermarket which greens they import"
                - "Ask two hotel or restaurant chefs which salad leaves and herbs they buy each week"
                - "Choose three to five crops and a weekly target for each"
                - "Write the crop list and buyer names in the grow record"
            - name: Choosing NFT, deep water culture or media beds
              description: |-
                ## Purpose
                Nutrient film technique (NFT) channels, deep water culture rafts, Dutch bucket or media beds and vertical towers all grow greens, but they differ in cost, power dependence and how badly they fail when the pump stops. NFT is common for lettuce because it is light and easy to harvest, while floating rafts hold a big volume of water that buffers heat and survives a power cut for hours. Comparing them against your crops, your power supply and your budget gives you a system you will not regret after the first blackout.

                ## Milestones
                1. Three system types compared on cost per plant site, water volume, power need and ease of harvest.
                2. Each type scored for how long plants survive if the pump stops.
                3. At least one working farm using each shortlisted type visited or called.
                4. One system type chosen, with the reasons written down.

                ## Notes
                Start from the **Purchase decision** template. Ask any supplier how long lettuce in their system survives with no circulation in midday heat, and get the answer in writing.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One hydroponic system type chosen and recorded, with cost per plant site and power-cut survival time noted for each option compared."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List NFT, raft and media bed systems with a price per plant site"
                - "Ask each supplier how long plants last if the pump stops at noon"
                - "Visit or call one grower using your preferred system"
                - "Record the system choice and the reasons in the grow record"
            - name: Grow site check for heat, power and water access
              description: |-
                ## Purpose
                Lettuce struggles once the nutrient solution and the air run hot, so where the tables sit decides half your results before you plant a seed. A site with afternoon shade or a breeze, a reliable water point, power within reach of the pumps and level ground for gentle channel slopes saves months of fighting the location. Checking the site at noon and after heavy rain shows you the problems while they are still cheap to avoid.

                ## Milestones
                1. A sketch of the site showing sun, shade, prevailing wind and wet spots after rain.
                2. Air temperature under the planned cover recorded at noon on three days.
                3. Distances to the water point and power supply measured.
                4. The table layout and reservoir position marked on the sketch.

                ## Notes
                If you are building a new shade house or greenhouse, choose the structure first; the hydroponic layout fits inside it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A site sketch marking shade, wind, wet spots, power and water points and the planned table and reservoir positions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Sketch the site and mark morning and afternoon shade"
                - "Record the air temperature at noon on three different days"
                - "Measure the distance to the water point and the nearest power outlet"
                - "Mark where the tables and the reservoir will sit"
            - name: Source water test before the first nutrient mix
              description: |-
                ## Purpose
                Every nutrient recipe assumes you know what is already in your water. Mains water, a well and roof catchment can differ widely in hardness, alkalinity, sodium and starting EC, and hard water with high bicarbonate keeps pushing pH up no matter how carefully you mix. A lab test of the source water, plus your own EC and pH reading, tells the nutrient supplier or extension officer what they need to advise you.

                ## Milestones
                1. A water sample sent to a lab that reports pH, EC, alkalinity, calcium, magnesium, sodium and chloride.
                2. Your own meter readings of the same water recorded beside the lab result.
                3. The result discussed with the nutrient supplier or an extension officer.
                4. Any treatment needed, such as filtration or a different source, decided and noted.

                ## Notes
                Test each source you might use. Many growers blend rainwater with mains or well water, and the blend changes the result.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A lab analysis of each water source is filed with the grow record and its implications for the nutrient mix are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the extension office or a local lab what a water analysis costs"
                - "Collect and send a clean sample from each water source"
                - "Read EC and pH of the same water with your own meters"
                - "Discuss the lab result with your nutrient supplier and note the advice"
            - name: Start-up budget and cost per head of lettuce
              description: |-
                ## Purpose
                Hydroponics has a high start-up cost and thin margins per head, so a grower who has not worked out the cost of one lettuce cannot price it. Adding up channels, pumps, reservoir, meters, cover, seed, sponges, nutrients, power, water and packaging, then dividing by the heads the system will realistically produce in a year, gives a cost per head to compare with the price buyers pay. That number decides whether the plan works at the size you can afford.

                ## Milestones
                1. A start-up list with prices for every piece of equipment and the first three months of supplies.
                2. Monthly running costs estimated for power, water, nutrients, seed, media and packaging.
                3. Annual output estimated with a realistic loss allowance, not the supplier's best case.
                4. A cost per head and a break-even price written down and compared with buyer prices.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written budget shows start-up cost, monthly running cost, expected annual heads and a cost per head compared with at least two buyer prices."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every piece of equipment and get a price for each"
                - "Estimate monthly power, water, nutrient, seed and packaging costs"
                - "Work out heads per year with a 15 percent loss allowance"
                - "Divide yearly costs by heads to get a cost per head"
            - name: Power cut and pump failure backup plan
              description: |-
                ## Purpose
                In an NFT system a stopped pump can leave roots dry within an hour on a hot afternoon, and a single blackout can cost a whole crop. Planning the backup before the first planting (a battery or inverter, a generator, a second pump on the shelf, an alarm and the steps anyone on the farm can follow) turns a power cut from a disaster into a nuisance. Insurers and buyers also ask what happens when the power goes.

                ## Milestones
                1. The time plants survive without circulation in your system estimated in midday heat.
                2. A backup power source sized to run the pumps for at least the longest usual outage.
                3. A spare pump and fittings stored on site.
                4. A one-page power cut procedure posted by the reservoir.

                ## Notes
                Start from the **Risk register** template. A float switch or flow alarm that sends a phone alert is cheap compared with one lost crop.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backup power source and spare pump are on site and a written power cut procedure is posted by the reservoir."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the power company or neighbours how long typical outages last"
                - "Price a battery and inverter or generator sized for the pumps"
                - "Buy a spare pump with matching fittings"
                - "Write and post a one-page power cut procedure"
            - name: Meters, nutrients and supplies starter kit
              description: |-
                ## Purpose
                Your crop is only as good as their EC and pH readings, and cheap pen meters that drift or die in the humidity give confident wrong numbers. Buying a reliable EC meter, a pH meter, calibration solutions, a thermometer, a two-part or complete nutrient made for leafy greens, seed, growing sponges or plugs and net cups in one planned order avoids the half-stocked first month. Knowing where each item is sold locally, and how long imports take, matters just as much.

                ## Milestones
                1. A supplies list with quantities for the first three months.
                2. An EC meter, a pH meter and fresh calibration solutions bought.
                3. A nutrient product for leafy greens chosen, with its mixing chart filed.
                4. Local and overseas suppliers listed with lead times for each item.

                ## Notes
                Mix nutrients only as the product label or supplier's chart says. Never mix concentrated part A and part B together undiluted; they react and lock out calcium.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Meters, calibration solutions, nutrient, seed and media for three months are on site, with a supplier and lead time recorded for each."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a three-month supplies list with quantities"
                - "Buy an EC meter, a pH meter and both calibration solutions"
                - "File the nutrient supplier's mixing chart in the grow record"
                - "Note the lead time for every item that has to be imported"
            - name: Grow record book and batch numbering
              description: |-
                ## Purpose
                Supermarkets and hotels increasingly ask which batch a pack came from, and you cannot learn from a failed crop you did not record. A simple grow record, with a batch number for every seeding date carried through transplant, harvest and the delivery note, lets you trace a complaint, compare varieties and see your real yield. Setting it up before the first seed means the records are complete from day one.

                ## Milestones
                1. A batch numbering format chosen, such as the seeding date plus a crop code.
                2. A record layout with columns for seeding, transplant, harvest, heads, losses and buyer.
                3. The batch number printed or written on every delivery note.
                4. The first batch recorded from seeding to sale.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every batch has a number that appears on its seeding, harvest and delivery records, starting with the first batch."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a batch number format and write it on the first page"
                - "Set up record columns for seeding, transplant, harvest and buyer"
                - "Add a batch number line to your delivery note"
                - "Record the first batch from seeding through to sale"
            - name: Supplier and extension network for hydroponics
              description: |-
                ## Purpose
                Hydroponic growers in the Caribbean are few, and parts, nutrients and advice can be hard to find in a hurry. A short list of suppliers, extension officers who know hydroponics, an agronomist and two or three other growers to call when something fails means problems get solved in hours, not weeks. Sharing bulk orders with other growers also cuts freight costs.

                ## Milestones
                1. Suppliers listed for seed, nutrients, meters, pumps and packaging.
                2. An extension officer or agronomist who knows hydroponics identified.
                3. Two or three other growers met and contact details swapped.
                4. One shared bulk order or knowledge exchange done.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A contact list of suppliers, advisers and at least two other hydroponic growers is filed and one shared order or exchange has happened."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List suppliers for seed, nutrients, meters, pumps and packaging"
                - "Ask the Ministry of Agriculture or extension office for a hydroponics contact"
                - "Meet two other hydroponic growers and swap contacts"
                - "Arrange one shared bulk order of nutrients or seed"
            - name: First trial table of lettuce, seed to sale
              description: |-
                ## Purpose
                Running one table or one set of channels through a full cycle before scaling shows you your real days to harvest, losses and head weights in your heat, with your water. A small first run costs little if it goes wrong and teaches more than any video. Selling the trial crop to an actual buyer also tests your packing and delivery before a contract depends on it.

                ## Milestones
                1. One table seeded, transplanted and grown to harvest with daily readings logged.
                2. Days to harvest, average head weight and losses recorded.
                3. The trial crop sold to at least one buyer and their feedback noted.
                4. A written list of changes to make before scaling up.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One trial batch grown to sale, with days to harvest, average head weight, losses and buyer feedback recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Seed enough sponges to fill one table plus 20 percent spare"
                - "Transplant the best seedlings and log readings every morning"
                - "Weigh ten heads at harvest and record the average"
                - "Write down three changes to make before adding tables"
            - name: Morning EC, pH and solution temperature check
              description: |-
                ## Purpose
                Nutrient solution changes every day as plants drink water and take up nutrients at different rates, and pH can drift far enough in two days to lock out iron or calcium. A five-minute check each morning, writing down EC, pH, solution temperature and water level, catches drift before the plants show it. The log also tells you when to top up and when to change the whole reservoir.

                ## Milestones
                1. A log sheet set up beside each reservoir with columns for date, EC, pH, temperature and level.
                2. Target ranges from your nutrient supplier's crop chart written at the top of the sheet.
                3. Readings taken and logged every morning for a full month.
                4. A simple rule written for what to do when each reading is out of range.

                ## Notes
                Start from the **Metrics log** template. Read at the same time each day, before topping up, so readings compare like with like.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The reservoir log shows EC, pH, temperature and level for at least 28 of the last 30 mornings."
                cadence: rolling
              tasks:
                - "Copy the target EC and pH ranges from the crop chart onto the log"
                - "Read and log EC, pH, solution temperature and level @recurring(daily)"
                - "Write a rule for what to do when pH or EC is out of range"
                - "Look back over the week's readings for drift @recurring(weekly:sun)"
            - name: Reservoir top-up and full solution change routine
              description: |-
                ## Purpose
                Topping up with plain water lowers EC, topping up with full-strength solution can push it too high, and over weeks the balance of nutrients drifts away from what the plants need even if EC looks right. A fixed routine for adjusting the reservoir and a scheduled full change, with the old solution used on a field crop or hedge rather than poured into a drain, keeps the solution balanced. Write down how much water and concentrate went in each time.

                ## Milestones
                1. A top-up method agreed with your nutrient supplier and written by the reservoir.
                2. A full solution change interval chosen for your system and crop.
                3. A safe place to use or dispose of spent solution identified.
                4. Every top-up and change logged with volumes added.

                ## Notes
                Ask the extension officer where spent solution can go. Dumping it near a stream or well can break local rules and feed algae.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every top-up and full change for the last two months is logged with volumes, and full changes happened on the chosen interval."
                cadence: rolling
              tasks:
                - "Agree a top-up method with your nutrient supplier"
                - "Choose a full change interval and mark it on the calendar"
                - "Find a safe place to use spent solution"
                - "Drain, clean and refill the reservoir @recurring(monthly:12)"
            - name: Staggered weekly seeding schedule
              description: |-
                ## Purpose
                Buyers want the same number of heads every week, not a glut one fortnight and nothing the next. Seeding a fixed number of sponges on the same day every week, with extra to cover germination losses, turns a hydroponic system into a steady supply line. The schedule works backwards from delivery days, through days to harvest, to the seeding date.

                ## Milestones
                1. Days from seeding to transplant and transplant to harvest recorded for each crop.
                2. A weekly seeding number per crop worked out from the weekly sales target plus a loss allowance.
                3. A seeding day fixed and kept for eight weeks in a row.
                4. Weekly harvest numbers within 10 percent of target for a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Seeding happened on the fixed day for eight consecutive weeks and weekly harvests stayed within 10 percent of target for four weeks."
                cadence: rolling
              tasks:
                - "Write days to transplant and days to harvest for each crop"
                - "Work out how many sponges of each crop to seed per week"
                - "Seed the weekly batch and label it with its batch number @recurring(weekly:mon)"
                - "Compare this month's harvests with target and adjust seeding numbers @recurring(monthly:28)"
            - name: Seedling nursery in sponges and plugs
              description: |-
                ## Purpose
                Strong, even seedlings are the foundation of an even harvest, and leggy, stretched seedlings from a dark or hot nursery never catch up in the channels. A small nursery area with good light, gentle misting or bottom watering and a weak starter solution gives transplants ready in a predictable number of days. Moving seedlings on the same day each week keeps the channels full.

                ## Milestones
                1. A nursery space with bright light, airflow and protection from heavy rain.
                2. A watering and starter solution method written down from the supplier's guidance.
                3. Germination rate recorded for each seed lot.
                4. Seedlings transplanted on a fixed day each week with roots showing through the sponge.

                ## Notes
                Stretched seedlings usually mean too little light or too much heat. Move the nursery before changing seed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Germination is recorded for every seed lot and at least 85 percent of seeded sponges reach transplant for a month."
                cadence: rolling
              tasks:
                - "Set up a nursery bench with bright light and airflow"
                - "Write down the nursery watering and starter solution method"
                - "Record germination for each seed lot after five days"
                - "Transplant the week's seedlings into the channels @recurring(weekly:wed)"
            - name: Harvest day routine from channel to cold room
              description: |-
                ## Purpose
                Lettuce cut in the heat of the afternoon and left on a bench wilts before it reaches the buyer, and a supermarket will reject a whole delivery for limp heads. Harvesting in the cool early morning, packing straight into clean crates, cooling quickly and keeping heads cold until delivery protects shelf life and your reputation. A written checklist means anyone on the farm harvests the same way.

                ## Milestones
                1. A harvest checklist covering time of day, hygiene, cutting or root-on lifting, packing and cooling.
                2. Clean, food-grade crates and a cool room, chiller or insulated boxes ready.
                3. Time from harvest to cooling kept under 30 minutes for a month.
                4. No buyer rejections for wilting or damage in the last month.

                ## Notes
                Start from the **Operational checklist** template. Living lettuce sold with roots on keeps longer on the shelf; ask your buyers which they prefer.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written harvest checklist is followed on every harvest day and the month's delivery record shows no rejections for wilting."
                cadence: rolling
              tasks:
                - "Write a harvest checklist from cutting through to cold storage"
                - "Buy or clean enough food-grade crates for one harvest"
                - "Harvest before 8am on delivery days and cool within 30 minutes @recurring(weekly:tue,fri)"
                - "Record heads harvested and any rejected by the buyer"
            - name: Pump, timer and channel maintenance schedule
              description: |-
                ## Purpose
                Pumps clog with root fragments, timers fail, and channels develop slow leaks or blockages that starve the plants at the far end. A monthly service of pump intakes, filters, timers and channel outlets, plus a quarterly deeper check, prevents the failures that happen at the worst time. Keep a log so you can see which parts wear out and order spares before they go.

                ## Milestones
                1. Every pump, timer, filter and channel listed with its age.
                2. A monthly service checklist written and kept by the reservoir.
                3. Flow at the end of each channel checked and evened out.
                4. A spare parts shelf stocked with the items that fail most often.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The maintenance log shows a monthly service for the last three months and no crop loss from pump or channel failure."
                cadence: rolling
              tasks:
                - "List every pump, timer and filter with the date it was installed"
                - "Clean pump intakes, filters and channel outlets @recurring(monthly:8)"
                - "Check flow at the end of every channel and adjust"
                - "Inspect wiring, float switches and backup power @recurring(quarterly)"
            - name: Weekly pest and root disease scouting walk
              description: |-
                ## Purpose
                Aphids, thrips, whitefly, caterpillars and leaf miners find greens under cover quickly, and root rots such as Pythium spread through shared solution to every plant in a system. A weekly walk that turns over leaves, lifts a few plants to look at the roots and checks sticky cards finds problems while one table is affected, not all of them. Decisions on what to do are made with the extension officer and the product label, and recorded.

                ## Milestones
                1. Yellow and blue sticky cards placed and numbered across the growing area.
                2. A scouting sheet with pests, root colour and the tables checked.
                3. Scouting done weekly for two months with counts recorded.
                4. An action plan for the main pests agreed with an extension officer.

                ## Notes
                Many pesticides are not approved for hydroponic greens or have long pre-harvest intervals that do not suit a weekly harvest. Check the label and ask the extension officer before using any product.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scouting sheets for eight consecutive weeks record pest counts and root condition, with any action taken and who advised it."
                cadence: rolling
              tasks:
                - "Place numbered sticky cards across the growing area"
                - "Walk every table, check leaf undersides and lift three plants to see roots @recurring(weekly:thu)"
                - "Record counts and root colour on the scouting sheet"
                - "Ask an extension officer to agree an action plan for the main pests"
            - name: Cleaning and sanitising between crops
              description: |-
                ## Purpose
                Algae, root debris and biofilm left in channels, net cups and reservoirs carry disease from one crop to the next. Cleaning and sanitising each channel as it is emptied, and the whole system on a schedule, breaks the cycle and keeps solution lines clear. Use only products approved for food production and rinse as the label directs, so no residue reaches the next crop.

                ## Milestones
                1. A cleaning method for channels, net cups and reservoirs written down.
                2. A sanitiser approved for food contact chosen, with its label filed.
                3. Every channel cleaned before it is replanted.
                4. A whole system clean done on a set date and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The cleaning log shows each channel cleaned before replanting and a full system clean in the last three months."
                cadence: rolling
              tasks:
                - "Write the step-by-step cleaning method for channels and net cups"
                - "Choose a food-safe sanitiser and file its label"
                - "Clean and rinse each channel as it is emptied"
                - "Clean the whole system and log the date @recurring(quarterly)"
            - name: Weekly yield, waste and sales log
              description: |-
                ## Purpose
                Without a weekly count of heads seeded, harvested, sold and thrown away, you cannot tell whether a bad month was the heat, the seed, the buyer or the price. A short log every Saturday, with heads and kilos by crop, losses with a reason and money received, shows the trends that matter. After three months it becomes the evidence you show a lender or a new buyer.

                ## Milestones
                1. A log layout with crop, heads seeded, harvested, sold, lost and income.
                2. A short list of loss reasons, such as bolting, tipburn, root rot or unsold.
                3. Twelve consecutive weeks logged.
                4. A monthly summary showing yield per table and loss percentage.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly logs exist, with a monthly summary of yield per table and loss percentage."
                cadence: rolling
              tasks:
                - "Set up a weekly log with crop, harvested, sold, lost and income"
                - "Agree a short list of loss reasons"
                - "Fill in the week's yield, losses and sales @recurring(weekly:sat)"
                - "Write a one-line monthly summary of yield per table and loss rate"
            - name: Seed, nutrient and packaging reorder routine
              description: |-
                ## Purpose
                Running out of lettuce seed, nutrient part B or clamshells for a week means a gap in supply four to six weeks later, and buyers do not wait. A monthly stock count with reorder points set from your weekly use and import lead times keeps the farm supplied. Seed stored cool and dry also lasts longer and germinates better.

                ## Milestones
                1. Weekly use of seed, sponges, nutrients and packaging worked out.
                2. A reorder point set for each item based on lead time.
                3. Seed stored in a sealed container in a cool, dry place.
                4. No stock-out of a critical item for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stock sheet shows reorder points for every critical item and no stock-out in the last three months."
                cadence: rolling
              tasks:
                - "Work out weekly use of seed, sponges, nutrients and packaging"
                - "Set a reorder point for each item from its lead time"
                - "Count stock and place orders for anything below its reorder point @recurring(monthly:3)"
                - "Move seed into a sealed container in a cool place"
            - name: Standing orders and weekly buyer confirmation
              description: |-
                ## Purpose
                Supermarket and hotel orders change with tourist numbers, holidays and the chef's menu, and finding out on delivery day leaves you with unsold heads. A short call or message to each buyer on the same day each week, confirming the next delivery and hearing about changes early, lets you adjust harvest and seeding. It also shows buyers you are organised.

                ## Milestones
                1. A list of buyers with contact, delivery days, usual quantity and payment terms.
                2. A fixed weekly confirmation day agreed with each buyer.
                3. Confirmed orders written against the harvest plan each week.
                4. Unsold heads under 5 percent of harvest for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each buyer's order is confirmed weekly for two months and unsold heads stay under 5 percent of harvest."
                cadence: rolling
              tasks:
                - "List each buyer with delivery days, usual quantity and terms"
                - "Confirm next week's order with every buyer @recurring(weekly:wed)"
                - "Write confirmed orders against the harvest plan"
                - "Ask each buyer once a month about upcoming menu or volume changes"
            - name: Understanding EC, pH and nutrient uptake
              description: |-
                ## Purpose
                Growers who only follow the numbers on a chart are stuck the first time something goes wrong. Learning what EC measures, why pH controls which nutrients the roots can take up, and how temperature and plant size change what the solution needs, lets you reason through a problem instead of guessing. A few weeks of reading and asking an experienced grower pays back on every crop.

                ## Milestones
                1. A one-page plain-language note on what EC, TDS and pH mean.
                2. The supplier's chart of nutrient availability against pH studied and filed.
                3. Three past readings from your own log explained using what you learned.
                4. Questions answered by an experienced grower or extension officer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note on EC, TDS and pH is written and three of your own log readings are explained with it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read an extension or university guide to hydroponic nutrient solutions"
                - "Write a one-page note on EC, TDS and pH in your own words"
                - "Explain three odd readings from your log using the note"
                - "Take your remaining questions to an experienced grower"
            - name: EC and pH meter calibration routine
              description: |-
                ## Purpose
                Meter error catches everyone out: a pH pen reading half a unit off, or an EC probe coated with residue, will send you chasing problems that do not exist. Calibrating both meters with fresh solutions on a schedule, cleaning probes and storing the pH probe wet as the maker says, keeps every reading in your log trustworthy. Recording each calibration shows when a meter is getting old.

                ## Milestones
                1. Calibration steps for each meter written from the maker's instructions.
                2. Fresh calibration solutions in stock with expiry dates noted.
                3. Both meters calibrated on a fixed day each month and logged.
                4. A second meter or reference solution used to cross-check every quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "The calibration log shows both meters calibrated monthly for three months, with solution expiry dates recorded."
                cadence: rolling
              tasks:
                - "Write the calibration steps for each meter from its manual"
                - "Check expiry dates on the calibration solutions"
                - "Clean probes and calibrate both meters @recurring(monthly:15)"
                - "Cross-check readings against a second meter or reference solution"
            - name: Reading tipburn, bolting and deficiency symptoms
              description: |-
                ## Purpose
                Brown leaf edges in the heart of a lettuce, pale new leaves, purple tints and plants that stretch and taste bitter each point to a different cause, from calcium not reaching fast-growing leaves to heat or a pH problem. Learning to tell them apart from photos and your own plants saves you from changing the nutrient when the real problem is airflow. Keep a photo record of each symptom and what fixed it.

                ## Milestones
                1. A photo guide to tipburn, bolting, iron and other common deficiency signs gathered.
                2. Your own plants photographed whenever a symptom appears.
                3. Each symptom matched to its likely cause with an extension officer or supplier.
                4. A symptom and response sheet kept in the grow record.

                ## Notes
                Tipburn in lettuce is often about heat, humidity and fast growth rather than too little calcium in the tank. Look at airflow and temperature before changing the mix.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A symptom sheet with photos and confirmed causes for at least four problems seen on your own farm is in the grow record."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect reference photos of tipburn, bolting and common deficiencies"
                - "Photograph any symptom on your own plants with the date and table"
                - "Send unclear photos to the extension officer or supplier"
                - "Write each symptom, its cause and the response on one sheet"
            - name: Keeping roots white and free of root rot
              description: |-
                ## Purpose
                Healthy hydroponic roots are white and crisp; brown, slimy roots with a bad smell usually mean root rot, which thrives in warm, low-oxygen solution. Learning the conditions that favour it, such as solution temperature, low dissolved oxygen, dirty channels and stressed seedlings, lets you prevent it rather than lose tables. Lifting plants to look at roots every week becomes second nature.

                ## Milestones
                1. The conditions that favour root rot listed from an extension or university source.
                2. Solution temperature and aeration checked against those conditions.
                3. Weekly root checks recorded for two months.
                4. A response plan for a root rot outbreak agreed with an adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written root rot prevention and response plan exists and two months of weekly root checks are recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a guide on root rot in hydroponic leafy greens"
                - "List the conditions on your farm that could favour it"
                - "Record root colour and smell for three plants per table each week"
                - "Agree an outbreak response plan with an extension officer"
            - name: Growing lettuce in tropical heat
              description: |-
                ## Purpose
                Lettuce is a cool-season crop, and in Caribbean lowlands it bolts, turns bitter and gets tipburn when the solution and air run hot. Shade cloth, heat-tolerant varieties, a cooler reservoir (buried, insulated or shaded), shorter cycles and night-time air movement can all keep it growing. Learning what works at your site turns the hot months from a write-off into a slower but saleable season.

                ## Milestones
                1. Solution and air temperatures logged through the hottest month.
                2. Three heat measures chosen and tried, such as shade cloth, an insulated reservoir and heat-tolerant seed.
                3. Bolting and tipburn rates compared before and after.
                4. A hot-season plan written for next year.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written hot-season plan names at least three heat measures with before and after bolting and tipburn rates."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Log solution and air temperature at 2pm through the hottest month"
                - "Shade or insulate the reservoir and note the temperature change"
                - "Trial one heat-tolerant lettuce variety beside your usual one"
                - "Write a hot-season plan from what you measured"
            - name: Hydroponic basil, mint and other herbs
              description: |-
                ## Purpose
                Basil, mint, parsley and coriander sell to hotels and restaurants at a better price per plant site than lettuce, but they grow differently: basil wants warmth, gets downy mildew in humid air and is cut repeatedly rather than harvested once. Learning how each herb behaves in your system, how often it can be cut and how long it lasts after harvest, lets you add a profitable second line. Start with one herb and one table.

                ## Milestones
                1. One herb chosen from what buyers ask for.
                2. Days to first cut and regrowth between cuts recorded.
                3. Post-harvest shelf life tested in your cold room.
                4. A decision on whether to expand the herb to more tables.

                ## Notes
                Basil blackens in cold below about 10 degrees Celsius, so it may not share a cold room with lettuce. Test it before mixing them on a delivery.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One herb grown through at least three cuts, with yield per cut, shelf life and an expansion decision recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask buyers which herb they would take every week"
                - "Plant one table of that herb and record days to first cut"
                - "Record yield at each cut and days between cuts"
                - "Test how long cut bunches last in your cold room"
            - name: Microgreens on trays as a fast second line
              description: |-
                ## Purpose
                Microgreens such as pea shoots, sunflower, radish and mustard go from seed to sale in one to two weeks on trays or mats, and chefs pay well for small, regular quantities. They suit a grower who already has a clean indoor or shaded space and hotel customers. Learning the seeding density, blackout period and harvest timing on a few trays shows whether the extra work pays.

                ## Milestones
                1. Two chefs asked which microgreens they would buy and how much.
                2. Three varieties grown on trays with seeding rates and days to harvest recorded.
                3. Packaging and shelf life tested.
                4. A cost and price per tray worked out and a go or no-go decision made.

                ## Notes
                Buy seed sold for sprouting or microgreens from a supplier who tests for pathogens, and keep tray hygiene strict; microgreens are eaten raw.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Three microgreen varieties trialled with days to harvest, cost and price per tray recorded and a go or no-go decision written."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask two chefs which microgreens they would buy weekly"
                - "Order tested microgreen seed for three varieties"
                - "Grow two trays of each and record days to harvest"
                - "Work out cost and price per tray and decide"
            - name: Hygiene rules for the grow area and packing table
              description: |-
                ## Purpose
                Hydroponic greens are eaten raw, often without cooking or much washing, so the hands, tools and water that touch them matter. A short set of hygiene rules (handwashing, clean knives and crates, no animals near the tables, a clean water source for any washing and a sick worker policy) protects consumers and the contracts you depend on. Buyers increasingly ask to see them.

                ## Milestones
                1. Written hygiene rules for the grow area and packing table.
                2. A handwashing station with soap and paper towels at the packing table.
                3. Everyone who handles produce shown the rules and asked to sign.
                4. A cleaning log for knives, crates and the packing table kept daily on harvest days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Written hygiene rules are posted, a handwashing station is in place and every worker who handles produce has signed the rules."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one page of hygiene rules for the grow area and packing table"
                - "Set up a handwashing station beside the packing table"
                - "Go through the rules with every worker and collect signatures"
                - "Start a cleaning log for knives, crates and the table"
            - name: Lettuce variety trial for heat and shelf life
              description: |-
                ## Purpose
                Seed catalogues list dozens of lettuce varieties, but only a few hold up in Caribbean heat without bolting and still look good on a supermarket shelf after four days. Growing four or five varieties side by side in the same system, and scoring them on days to harvest, head weight, tipburn, bolting and shelf life, gives you evidence instead of catalogue promises. Repeat the trial in both the wet and the dry season.

                ## Milestones
                1. Four or five varieties chosen, including at least two sold as heat tolerant.
                2. All grown side by side in the same table at the same time.
                3. Each variety scored on head weight, tipburn, bolting and shelf life.
                4. One or two varieties chosen for the main crop.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A side-by-side trial of at least four varieties is scored and recorded and the chosen main varieties are named."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Order seed for four or five varieties including two heat tolerant ones"
                - "Plant them side by side in one table and label each row"
                - "Score head weight, tipburn and bolting at harvest"
                - "Keep five heads of each in the cold room and score shelf life"
            - name: Reservoir chiller or cooling decision
              description: |-
                ## Purpose
                When solution temperatures run high, plants slow down and root rot risk rises, and growers face a choice between a water chiller, an insulated or buried reservoir, extra shade or simply growing different crops in the hottest months. A chiller costs money and power, so the decision rests on how many heads the heat is costing you. Measuring that loss first makes the decision easy to defend.

                ## Milestones
                1. Heat losses in heads and income estimated from your yield log.
                2. Three cooling options priced, including running cost.
                3. Expected gain in heads compared with the cost of each option.
                4. A cooling option chosen or rejected, with the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Insulating and shading the reservoir is cheap; try it before buying a chiller.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least three cooling options on cost and expected extra heads per year."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate heads lost to heat last year from your log"
                - "Price a chiller, an insulated reservoir and extra shade"
                - "Compare the cost of each with the heads it could save"
                - "Record the cooling decision and the reasons"
            - name: Expanding from one system to four
              description: |-
                ## Purpose
                Once one system sells out every week, the temptation is to quadruple it, but more tables mean more water, power, labour, seedlings, cold storage and buyers. Planning an expansion in stages, with each stage tied to a confirmed buyer volume and a cash plan, avoids a farm that grows faster than its sales. Lenders also want to see this kind of staged plan.

                ## Milestones
                1. Confirmed buyer demand in heads per week beyond current output.
                2. The extra equipment, water, power, labour and cold storage for each stage listed and priced.
                3. A staged expansion plan with a trigger for each stage.
                4. Funding for stage one secured from savings, a loan or a grant.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A staged expansion plan exists with costs, a buyer volume trigger for each stage and funding confirmed for stage one."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask current buyers what extra volume they would commit to"
                - "List and price the equipment, labour and cold storage for each stage"
                - "Set a buyer volume trigger for starting each stage"
                - "Decide how to fund stage one"
            - name: Packaging choice for heads and salad packs
              description: |-
                ## Purpose
                A supermarket may want each lettuce in a printed sleeve or clamshell with a barcode, a hotel may take loose heads in a crate, and salad mix needs bags or tubs that do not crush leaves. Packaging is often the second largest running cost after labour, and the wrong pack shortens shelf life. Comparing options on cost per unit, shelf life, buyer requirements and how much plastic you want to use gives a clear choice.

                ## Milestones
                1. Each buyer's packaging requirement written down, including any labelling rules.
                2. Three packaging options sampled and priced per unit.
                3. Shelf life of each pack tested in your cold room.
                4. Packaging chosen for each product and a supplier lined up.

                ## Notes
                Ask the supermarket for its labelling requirements in writing before printing sleeves. Changing them after a print run is expensive.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each product has a chosen pack with its unit cost, tested shelf life and a named supplier recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each buyer for their packaging and labelling requirements"
                - "Get samples and prices for three packaging options"
                - "Test shelf life of each pack over five days in the cold room"
                - "Choose a pack for each product and confirm a supplier"
            - name: Pricing hydroponic greens against imported lettuce
              description: |-
                ## Purpose
                Local hydroponic lettuce competes on the shelf with imported iceberg and romaine, and with open-field lettuce in the cool months. Knowing the landed price of imports, what local competitors charge and your own cost per head lets you set a price that buyers accept and still leaves a margin. Freshness, root-on shelf life and steady supply are the arguments that justify a premium.

                ## Milestones
                1. Shelf prices of imported and local lettuce recorded at three supermarkets.
                2. Your cost per head updated from the last three months of records.
                3. A price per head and per pack set for each buyer type.
                4. A one-paragraph case for your price written for buyer conversations.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price list for each product and buyer type is set above cost per head and supported by recorded competitor prices."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Record lettuce shelf prices at three supermarkets"
                - "Update your cost per head from recent records"
                - "Set prices per head and per pack for each buyer type"
                - "Write a short case for your price for buyer conversations"
            - name: Cutting water and nutrient waste
              description: |-
                ## Purpose
                Leaks, overflowing reservoirs, early full changes and evaporation from open tanks waste water and nutrients, and in the dry season water may be rationed. Measuring how much water and concentrate goes in per head harvested, then fixing the biggest losses, cuts costs and keeps the system running when water is short. The numbers also strengthen grant and lender applications.

                ## Milestones
                1. Water and nutrient use per head worked out from three months of logs.
                2. The three biggest losses identified, such as leaks, evaporation or early dumps.
                3. Fixes made for each and use per head measured again.
                4. Water and nutrient use per head reduced and recorded.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Water and nutrient use per head harvested is measured before and after fixes, showing a recorded reduction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Work out litres of water and nutrient used per head harvested"
                - "Walk the system looking for leaks and open tanks"
                - "Fix the three biggest losses"
                - "Measure use per head again after a month"
            - name: Automated dosing controller decision
              description: |-
                ## Purpose
                Automatic dosers that read EC and pH and add concentrate or acid save time and keep the solution steadier, but they cost money, need calibrated probes and can dump a whole tank of acid if a sensor fails. Whether one pays depends on how many reservoirs you run and how much time manual adjustment takes. Comparing a controller against careful manual dosing, and planning safety cut-offs, keeps you in charge of the system.

                ## Milestones
                1. Time spent on manual dosing each week recorded for a month.
                2. Two or three controllers compared on price, probe life and local support.
                3. Safety features required, such as maximum dose limits and alarms, written down.
                4. A decision recorded to buy, wait or stay manual.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on an automated doser compares at least two controllers against weekly manual dosing time."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record how long manual dosing takes each week for a month"
                - "Compare two or three controllers on price and probe life"
                - "List the safety cut-offs any controller must have"
                - "Record the decision and when to review it"
            - name: First supermarket listing for hydroponic lettuce
              description: |-
                ## Purpose
                Getting onto a supermarket shelf means supplier registration, sample approval, an agreed weekly volume, labelling, a delivery slot and a payment cycle that can run 30 days or more. Preparing for the meeting with your yield records, price list, packaging and food safety rules makes you look like the reliable supplier they need. The first delivery sets the tone for the whole relationship.

                ## Milestones
                1. Supplier registration documents gathered and submitted.
                2. Samples delivered and approved by the produce manager.
                3. Weekly volume, price, delivery day and payment terms agreed in writing.
                4. First delivery made on time with every pack labelled.

                ## Notes
                Agree only the volume your records show you can deliver every week. Missing deliveries loses a listing faster than a high price.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Written supply terms with one supermarket are agreed and the first labelled delivery is made on the agreed date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the supermarket for its supplier registration requirements"
                - "Prepare a sample box with labelled packs and a price list"
                - "Agree volume, price, delivery day and payment terms in writing"
                - "Make the first delivery on time and get a signed delivery note"
            - name: Hotel chef tasting and sample box
              description: |-
                ## Purpose
                Hotel chefs choose suppliers on taste, consistency and reliability, and a well-presented sample box of lettuce, herbs and salad leaves, delivered fresh with a price list, opens the conversation. Timing the tasting a month or two before the tourist season gives the chef time to plan menus around local greens. Follow up within a week while the produce is still in their mind.

                ## Milestones
                1. Three hotels or restaurants chosen and a chef or purchasing contact named for each.
                2. A sample box of four or five products packed and delivered fresh.
                3. Feedback on each product recorded.
                4. At least one trial order agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Sample boxes reach three chefs, their feedback is recorded and at least one trial order is agreed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the chef or purchasing manager at three hotels or restaurants"
                - "Book a time to drop off samples"
                - "Harvest and deliver the sample boxes on the same morning"
                - "Follow up within a week and record each chef's feedback"
            - name: Hurricane season shutdown and restart plan
              description: |-
                ## Purpose
                Channels, tables, shade cloth and reservoirs can be destroyed by a hurricane, and power may be out for days afterwards. A plan that times seeding so little is in the system at peak storm risk, says when to harvest early, how to drain and secure equipment, and how to restart from stored seed and nutrients, means you are back in supply weeks ahead of competitors. Rehearse it once before the season starts.

                ## Milestones
                1. A written shutdown checklist covering early harvest, draining, removing shade cloth and storing pumps.
                2. Seed, sponges and nutrients for a restart stored safely above flood level.
                3. Photos of all equipment taken for insurance before the season.
                4. A restart plan with the order of jobs and buyers to call.

                ## Notes
                Start from the **Risk register** template. Taking shade cloth down before a storm often saves the frame.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A shutdown and restart plan is written, equipment photos are filed and restart supplies are stored before the hurricane season begins."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write the shutdown checklist for tables, reservoirs and shade cloth"
                - "Store restart seed, sponges and nutrients above flood level"
                - "Photograph all equipment for insurance records"
                - "Review and rehearse the plan before the season @recurring(yearly)"
            - name: Tourist season volume ramp-up
              description: |-
                ## Purpose
                Hotels and restaurants buy far more salad in the winter tourist season, and Christmas, Carnival and Easter spike demand from supermarkets too. Because lettuce takes weeks from seed, the extra seeding has to start well before demand arrives. Planning the ramp-up from last year's sales and buyer forecasts lets you supply the peak without a glut afterwards.

                ## Milestones
                1. Peak season volumes estimated from last year's records and buyer forecasts.
                2. Extra seeding dates worked back from the first peak delivery.
                3. Extra labour, packaging and cold storage arranged.
                4. Peak weeks supplied in full and the results recorded for next year.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Peak season orders are supplied in full and the season's volumes and shortfalls are recorded for next year."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each hotel buyer for their expected peak season volume"
                - "Work back from the first peak delivery to set extra seeding dates"
                - "Arrange extra packaging and help for peak harvest days"
                - "Record what you supplied and any shortfalls after the season"
            - name: Buyer or food safety audit of the grow unit
              description: |-
                ## Purpose
                Supermarkets, hotel groups and export buyers may audit your farm or ask for a food safety assessment before signing or renewing a contract. Preparing the records they will ask for (water tests, cleaning logs, hygiene rules, input records, batch traceability and pest control decisions) in one folder turns an audit into a short visit. Any gaps found become a clear list of fixes.

                ## Milestones
                1. The buyer's audit checklist or standard obtained.
                2. A records folder assembled with water tests, cleaning logs, batch records and hygiene rules.
                3. A practice walk-through done against the checklist and gaps fixed.
                4. The audit passed or corrective actions agreed in writing.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An audit records folder is complete and the audit is passed or a written corrective action list is agreed with the buyer."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the buyer for the audit checklist or standard they use"
                - "Put water tests, cleaning logs and batch records in one folder"
                - "Walk the farm against the checklist and list the gaps"
                - "Fix the gaps and note what was done"
            - name: Annual review of cost per head and buyers
              description: |-
                ## Purpose
                Power tariffs, nutrient prices, freight and buyer prices all move during a year, and a margin that worked last year can disappear without anyone noticing. A quarterly and annual look at cost per head, income per table and which buyers pay on time shows where to raise prices, cut costs or drop a buyer. It is also the moment to set next year's targets.

                ## Milestones
                1. Cost per head recalculated from the quarter's actual spending.
                2. Income and margin per table and per buyer worked out.
                3. Late paying buyers and unprofitable products identified.
                4. Next year's targets for heads, price and cost written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written review shows cost per head, margin per buyer and next year's targets, updated at least once a quarter."
                cadence: cyclic
              tasks:
                - "Gather the quarter's receipts and sales records"
                - "Recalculate cost per head and margin per buyer @recurring(quarterly)"
                - "List buyers who pay late and products that lose money"
                - "Write next year's targets for heads, price and cost @recurring(yearly)"
            - name: Backyard or rooftop unit for side income
              description: |-
                ## Purpose
                Many hydroponic businesses start as a few NFT pipes or a raft tank in a yard or on a flat roof, selling to neighbours, a small shop or a restaurant down the road. A backyard unit has to fit around a job and a family: low cost, low power, safe for children and easy to check in five minutes. Done well, it proves the market before you invest in a bigger farm.

                ## Milestones
                1. A small system sized to the space, budget and the time you have each day.
                2. Children and pets kept away from nutrient concentrates and electrics.
                3. Three regular buyers found within walking or short driving distance.
                4. Three months of costs and sales recorded to judge whether to grow.

                ## Notes
                A flat roof must carry the weight of water-filled tanks and channels. Have someone qualified check it before filling anything large.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A backyard or rooftop unit is running with three regular buyers and three months of costs and sales recorded."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Measure the space and decide how many plant sites will fit"
                - "Lock nutrient concentrates and acid away from children"
                - "Ask neighbours, a shop and a restaurant if they would buy weekly"
                - "Record three months of costs and sales"
            - name: School or youth group hydroponics unit
              description: |-
                ## Purpose
                Schools, churches and youth programmes can use a small hydroponic unit to teach science, business and food production, and sell the greens to parents or the school canteen. Running it means planning for holidays, rotating student roles, keeping concentrates and electrics safe and handing over each year. Growers who help set one up also build goodwill and future workers.

                ## Milestones
                1. A small system and safe location agreed with the school or group.
                2. A student roster for daily checks and a holiday cover plan.
                3. Safety rules for nutrients, acid and electrics posted and taught.
                4. One crop grown and sold, with students keeping the records.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A school or youth unit grows and sells one full crop with student-kept records and a written holiday cover plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Meet the teacher or leader and agree the site and system size"
                - "Draw up a student roster and a holiday cover plan"
                - "Post safety rules for nutrients and electrics"
                - "Help students record and sell their first crop"
            - name: Waist-height system for older growers
              description: |-
                ## Purpose
                Hydroponics can be easier on the body than field farming, with no digging or weeding, but only if tables, reservoirs and nursery benches are at a comfortable height and nothing heavy has to be lifted. Older growers, or anyone with back or knee problems, can keep producing for years with the right layout. Planning the height, reach and lifting before building saves strain on every harvest day.

                ## Milestones
                1. Table and bench heights set at a comfortable working height for the grower.
                2. Channels no wider than a comfortable reach from one side.
                3. Reservoir filling and draining arranged with hoses or pumps, not buckets.
                4. Harvest crates moved on a trolley rather than carried.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Tables, benches and reservoirs are set up so every routine job can be done without bending low or lifting more than a light crate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure a comfortable working height for the main grower"
                - "Set tables and nursery benches to that height"
                - "Fit hoses or a pump for filling and draining the reservoir"
                - "Get a trolley for moving harvest crates"
            - name: Hotel or restaurant growing greens on site
              description: |-
                ## Purpose
                Some hotels and restaurants want their own hydroponic garden for guests to see and chefs to pick from, and a local grower can design, install and maintain it for a monthly fee. This is service work with different risks: the client's staff may forget checks, guests touch plants, and output has to match the menu. A clear agreement on who does what, and a weekly visit, keeps the garden looking good.

                ## Milestones
                1. The client's goals, space, crops and budget agreed in writing.
                2. A system installed with simple daily checks staff can do.
                3. A maintenance agreement covering visits, supplies and responsibilities.
                4. Three months of output and client feedback recorded.

                ## Notes
                Agree in writing who is responsible if the client's power or staff fail and the crop is lost.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An on-site system is installed under a written maintenance agreement and three months of output and client feedback are recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Meet the chef or manager and agree goals, space and crops"
                - "Write a maintenance agreement with visits, supplies and responsibilities"
                - "Train two staff members on the daily checks"
                - "Visit weekly and record output and the client's feedback"
            - name: Moving from field vegetables to hydroponic greens
              description: |-
                ## Purpose
                Field vegetable farmers who are tired of losing lettuce to heavy rain, soil disease and pests often try hydroponics, but the skills are different: daily solution checks replace soil judgement, and power and water quality become critical. Starting small alongside the field crops, learning the system and keeping the field income going reduces the risk. Your field buyers may be the first customers for the new greens.

                ## Milestones
                1. One hydroponic table or system running alongside the field crops.
                2. Daily solution checks fitted into the existing farm routine.
                3. Hydroponic and field lettuce compared on yield, losses and price for one season.
                4. A decision on how much of the lettuce crop to move indoors.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One season of field and hydroponic lettuce is compared on yield, losses and price and a decision on the split is recorded."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Set up one hydroponic table near the packing shed"
                - "Fit the morning solution check into the farm's daily routine"
                - "Record yield, losses and price for field and hydroponic lettuce"
                - "Decide how much lettuce to move into hydroponics"
            - name: Year-round supply plan for a contract buyer
              description: |-
                ## Purpose
                A contract to supply a supermarket chain or hotel group every week of the year means no gaps for heat, storms, cleaning, holidays or illness. Experienced growers plan this with spare capacity, staggered systems that are cleaned at different times, backup varieties for the hottest months and a trusted second grower to cover emergencies. The plan is what convinces a large buyer to commit.

                ## Milestones
                1. 52-week supply targets agreed with the buyer.
                2. System capacity set at least 15 percent above the weekly target.
                3. Cleaning and maintenance staggered so no week loses more than one system.
                4. A backup grower agreement in place for emergencies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A 52-week supply plan with spare capacity, staggered cleaning and a backup grower is written and shared with the buyer."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree weekly targets for 52 weeks with the buyer"
                - "Plan capacity at 15 percent above the weekly target"
                - "Stagger cleaning and maintenance across systems"
                - "Agree emergency cover with a trusted second grower"
            - name: Nutrient solution lab analysis and custom recipe
              description: |-
                ## Purpose
                Once a farm is running at scale, a full lab analysis of the nutrient solution every few months shows which elements are building up or running short, which a meter cannot tell you. Working with an agronomist or nutrient supplier to adjust the recipe for your water and crops can lift yield and reduce tipburn. Keep every analysis so trends are visible.

                ## Milestones
                1. A lab that analyses hydroponic nutrient solutions found and its sampling method followed.
                2. Solution samples analysed alongside a source water sample.
                3. Results reviewed with an agronomist or nutrient supplier.
                4. Any recipe change made, recorded and checked by a follow-up analysis.

                ## Notes
                Change one thing at a time and keep the old recipe written down, so you can return to it if the change does not help.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two solution analyses are filed, reviewed with an adviser and any recipe change recorded with its effect on yield."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find a lab that analyses hydroponic nutrient solution"
                - "Send solution and source water samples together"
                - "Review results with an agronomist or nutrient supplier"
                - "Record any recipe change and its effect on yield"
            - name: Indoor LED vertical farm feasibility study
              description: |-
                ## Purpose
                Indoor vertical farms with LED lights grow greens without heat or storms, but in the Caribbean high electricity costs often make them uneconomic. A careful feasibility study, with real power tariffs, cooling costs, yield per square metre and the price buyers will pay, tells you whether a small indoor unit could work, perhaps with solar. Ask the agent to draft a first cost model from your numbers, then check every figure with suppliers.

                ## Milestones
                1. Power, cooling and lighting costs worked out at local tariffs.
                2. Expected yield per square metre from at least two suppliers.
                3. A cost per head compared with your current system.
                4. A go or no-go decision recorded with the numbers behind it.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written feasibility study gives cost per head for an indoor LED unit at local power prices and records a go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Find your current electricity tariff per kilowatt hour"
                - "Ask two indoor farm suppliers for yield and power figures"
                - "Ask the agent to draft a cost per head model from those figures"
                - "Record the go or no-go decision and the reasons"
---

# Hydroponic Greens Production

Hydroponic lettuce, pak choi, basil and other greens can be harvested every week of the year from a small footprint, which is why hotels and supermarkets in the Caribbean will pay for a grower who replaces imported heads with fresh local ones. The work is closer to running a small factory than a field: water, nutrient solution, power, seedlings and a harvest calendar all have to be right every single day. This area starts with the foundations (crops and buyers, system type, site, water test, budget, power backup and a first trial table), then the daily and weekly routines, the skills of reading the solution and the roots, the decisions that lift yield and price, the dated events of a hydroponic year, variants for backyard, school, older and hotel growers, and finally year-round contract supply, custom nutrient recipes and indoor growing.

The rhythm is the growing week: a morning check of EC, pH and solution temperature, a Monday seeding, a Wednesday transplant, harvest on delivery mornings, a Thursday scouting walk and a Saturday yield and sales log, with monthly meter calibration, reservoir changes, pump servicing and a supplies reorder, and a quarterly look at cost per head. The Purchase decision, Risk register, Metrics log and Operational checklist templates pair with choosing a system, planning for power cuts, the daily solution log and the harvest day routine. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
