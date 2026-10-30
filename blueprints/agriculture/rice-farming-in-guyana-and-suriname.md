---
id: agriculture.rice-farming-in-guyana-and-suriname
name: Rice Farming in Guyana and Suriname
description: "Map your rice fields, plan the two crops a year around water and the combine, keep blast, paddy bug and red rice in check, and deliver dry, clean paddy to a miller on terms you understand."
category: business
version: 1.0.0
tags: [agriculture, rice-farming-in-guyana-and-suriname, small-business, rice, paddy, guyana, suriname, water-control]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - metrics-log
    - operational-checklist
    - purchase-decision
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Rice Farming in Guyana and Suriname
          description: "Growing rice on the coastal plain: land preparation, water control, seed choice, mechanised harvest, drying, milling and marketing."
          projects:
            - name: Rice field map and plot register
              description: |-
                ## Purpose
                Most rice farms are known by habit: the front piece by the koker, the back field that floods first, the rented strip next to a cousin. Drawing every field with its acreage or hectares, its water inlet, its drain and who owns it gives each later record, from seed rate to bags harvested, a fixed place to sit.

                ## Milestones
                1. Every field you farm drawn or marked on a satellite image, numbered and named.
                2. The area of each field recorded in acres or hectares, checked against the lease or transport.
                3. Water inlet, drain outlet, dam and access road marked for every field.
                4. Ownership or lease status noted beside each field number.

                ## Notes
                Use the same field numbers in every record from now on, including what you tell the combine operator. A phone mapping app that records a walked track along the dams is accurate enough to start.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A map exists showing every rice field you farm, numbered, with its area, water inlet, drain and ownership status recorded beside it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Gather the leases, transports or rental notes for every field you farm"
                - "Walk the dams of the first field with a phone recording the track"
                - "Number each field and mark its inlet, drain and access road"
                - "Write the area and ownership status beside each field number"
            - name: Rice grower registration and farmer records
              description: |-
                ## Purpose
                Extension visits, subsidised seed, fertiliser support and any compensation after a flood usually go to farmers who are registered with the rice board in Guyana or the agriculture ministry in Suriname. Getting registration current, with the right acreage against your name, means you are not chasing papers the week help is announced.

                ## Milestones
                1. Your current registration status confirmed with the rice board or ministry office.
                2. Registered acreage or hectares matching the fields on your plot register.
                3. Copies of your registration, ID and land documents kept in one folder and on your phone.
                4. The renewal or update date written in your farm calendar.

                ## Notes
                In Guyana the Guyana Rice Development Board keeps rice farmer records; in Suriname start with the Ministry of Agriculture district office in your area. Ask what documents they need before you travel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your rice farmer registration is current, shows the acreage you actually farm, and copies are filed with the renewal date noted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Call the nearest rice board or ministry office to ask what registration needs"
                - "Collect your ID, land documents and field areas into one folder"
                - "Submit or update your registration with the correct acreage"
                - "Check registration details are still correct before the spring crop @recurring(yearly)"
            - name: Last two crops rebuilt in bags per field
              description: |-
                ## Purpose
                Ask a farmer what they reaped and the answer is often a round figure for the whole farm. Rebuilding the last spring and autumn crops field by field from grading slips, combine receipts and notebooks shows which fields carry the farm and which ones lose money every season.

                ## Milestones
                1. Grading slips, mill receipts and combine bills for the last two crops gathered.
                2. Bags of paddy delivered worked out for each field and each crop.
                3. Yield per acre or per hectare calculated for every field.
                4. The three weakest fields listed with a likely reason beside each.

                ## Notes
                If slips were lost, ask the miller for a statement of deliveries under your name. Note whether the bags were wet weight or dry weight, because the two are not comparable.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows bags delivered and yield per acre or hectare for every field over the last two crops, with the weakest three fields named."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Collect every grading slip and combine bill you can find from the last two crops"
                - "Ask the miller for a delivery statement covering any missing slips"
                - "Work out bags per acre or hectare for each field"
                - "List the three weakest fields and what you think held them back"
            - name: Water access and drainage rates position
              description: |-
                ## Purpose
                Rice on the coastal plain lives or dies by the canal, the koker and the pump, and the farmer who does not know who controls the water finds out at sowing. Writing down where each field draws water from, who runs the structures, which rates are due and whether you are paid up turns water from a worry into a planned dependency.

                ## Milestones
                1. The irrigation source and drainage outlet for each field named, with the authority or water users' group responsible.
                2. Contact names for the scheme manager, kokerman or water board officer recorded.
                3. Drainage and irrigation rates due for each field confirmed and any arrears known.
                4. Receipts for rates paid filed with the plot register.

                ## Notes
                In Guyana drainage and irrigation is shared between the national authority, regional bodies and water users' associations; in Suriname water boards and polder management do the job. Ask your neighbours which office actually answers the phone.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every field has a named water source, drain outlet, responsible body and contact, and rates are either paid with receipts filed or the arrears are known."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the canal and drain that serve each numbered field"
                - "Ask the water users' group or scheme office who to call about water"
                - "Check what drainage and irrigation rates are due on each field"
                - "Pay the drainage and irrigation rates and file the receipts @recurring(yearly)"
            - name: Spring and autumn crop calendar
              description: |-
                ## Purpose
                Two crops a year leaves little slack: a late land preparation pushes sowing back, which pushes harvest into the rains and makes the next crop late too. Laying out both crops on one calendar, from land preparation to delivery, with the water release dates and the combine bookings on it, shows where the season is tight before it slips.

                ## Milestones
                1. Target sowing windows for the spring and autumn crops written for each field.
                2. Land preparation, sowing, fertiliser, drainage before harvest and harvest dates set back from those windows.
                3. Known water release or rotation dates from the scheme added.
                4. The calendar printed or shared with everyone who works the fields.

                ## Notes
                Ask the rice board or research station what sowing window they currently recommend for your area and variety rather than copying last year. Leave at least a week of slack before the date you need the combine.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-crop calendar exists with dated land preparation, sowing, fertiliser, drain-down and harvest steps for every field, shared with the workers."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the extension officer for the recommended sowing window in your area"
                - "Write sowing dates for each field for the coming spring and autumn crops"
                - "Count back land preparation and forward fertiliser and harvest dates"
                - "Share the printed calendar with the tractor operator and workers"
            - name: Dam, bund and drain condition walk
              description: |-
                ## Purpose
                Breached dams and choked field drains can drown seed after broadcasting or keep water on the crop when it should be drying for harvest. Walking every dam and drain between crops and listing each weak point, crab hole and blocked culvert means the repairs happen while the land is dry and labour is free.

                ## Milestones
                1. Every field dam and internal bund walked and weak spots marked on the map.
                2. Field drains and culverts checked for silt, grass and collapse.
                3. A repair list priced in labour days or excavator hours.
                4. The worst three repairs finished before the next land preparation.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written list of dam, bund and drain repairs exists for every field, and the three most serious are completed before land preparation."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the dams of every field and mark breaches and crab holes"
                - "Check each field drain and culvert for silt and grass"
                - "Price the repairs in labour days or excavator hours"
                - "Walk the dams and drains again after each harvest @recurring(quarterly)"
            - name: Paddy cost of production per acre
              description: |-
                ## Purpose
                When the paddy price is announced, the only useful question is whether it covers your cost per bag. Adding up land preparation, seed, fertiliser, chemicals, water rates, combine, transport and labour for one crop, then dividing by the bags you deliver, gives a break-even price you can hold every offer against.

                ## Milestones
                1. Every cost for the last crop listed under the same ten or so headings.
                2. Cost per acre or hectare worked out for each field.
                3. Cost per bag of paddy delivered calculated using actual yields.
                4. A break-even price per bag written at the top of the sales record.

                ## Notes
                Include your own labour and family labour at a fair day rate, or the farm will look profitable while it pays nobody. Count rent and loan interest even if they are paid once a year.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written cost of production per acre and per bag for the last crop exists, with a break-even paddy price recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every expense from the last crop under standard cost headings"
                - "Add a day rate for your own and your family's labour"
                - "Divide total cost by bags delivered to get cost per bag"
                - "Write the break-even paddy price at the top of the sales record"
            - name: Rice season contact book
              description: |-
                ## Purpose
                At sowing and harvest everything depends on a phone call answered: the tractor man, the combine operator, the truck, the seed supplier, the mill's field officer. Keeping one list with names, numbers, rates and how far ahead each needs booking stops the scramble when three farmers want the same combine on the same day.

                ## Milestones
                1. Two or more tractor, combine and transport contacts recorded with their usual rates.
                2. Seed, fertiliser and chemical suppliers listed with location and opening times.
                3. Rice board or ministry extension officer and mill field officer contacts added.
                4. Booking lead times noted for each service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact book holds at least two tractor, combine and truck contacts plus suppliers and extension staff, each with rate and booking lead time."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every machinery and transport contact you used last crop"
                - "Ask two neighbours for a backup combine and truck contact"
                - "Add supplier, extension officer and mill field officer numbers"
                - "Update rates and numbers in the contact book before land preparation @recurring(yearly)"
            - name: Certified seed paddy source for each crop
              description: |-
                ## Purpose
                Farm-saved seed carries red rice, mixed varieties and disease into every field it touches, and red rice once established is very hard to clear. Securing certified seed of the chosen variety from the rice board, the research station or an approved seed grower, booked well before sowing, protects both yield and the grade at the mill.

                ## Milestones
                1. Seed requirement for each field worked out from area and the recommended seed rate.
                2. Approved certified seed sources and current availability confirmed.
                3. Seed ordered or reserved, with the certificate or bag tag kept.
                4. A germination check done on a sample before broadcasting.

                ## Notes
                Ask the seller for the seed lot number and keep a tag in your crop diary. If certified seed is short, ask the extension officer about cleaned seed from a known clean field rather than buying from a stranger.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Certified seed of the chosen variety is reserved or in store for every field, with lot tags kept and a germination check recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Work out bags of seed needed for each field from its area"
                - "Call the rice board or research station to ask about certified seed stocks"
                - "Reserve the seed and keep the lot tag from every bag"
                - "Soak a sample of one hundred grains and count how many sprout"
            - name: Miller terms, grading and payment baseline
              description: |-
                ## Purpose
                The mill decides the moisture deduction, the impurity and red rice deduction, the grade and when you get paid, so the miller is the most important relationship on a rice farm. Writing down each mill's grading method, deductions, transport arrangements and payment record before you deliver lets you choose a mill on facts rather than habit.

                ## Milestones
                1. The mills within reach listed with their field officer contacts.
                2. Each mill's grading standards, deductions and price announcements for the last crop noted.
                3. Payment timing and any advance or input credit terms recorded for each mill.
                4. A preferred mill and a backup chosen for the coming crop.

                ## Notes
                Start from the **Vendor** template, one record per mill. In Guyana ask the rice board what the current rules say about payment periods and grading disputes before you sign anything with a mill.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written record for each nearby mill shows grading, deductions, price and payment timing, and a preferred and backup mill are chosen."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the mills you could deliver to and their field officers"
                - "Ask two neighbours how each mill graded and paid last crop"
                - "Record each mill's deductions, payment timing and advance terms"
                - "Review the mill record and choice before each spring crop @recurring(yearly)"
            - name: Field water depth checks through the crop
              description: |-
                ## Purpose
                Water is the main tool a rice farmer has: it controls weeds, feeds the crop, drowns seed when it is too deep and lets red rice and grasses in when it falls too low. Checking each field's water depth twice a week and writing it down catches a leaking dam or a missed rotation before the crop pays for it.

                ## Milestones
                1. A target water depth for each growth stage agreed with the extension officer and written on a card.
                2. A marked stick or gauge set in each field.
                3. Twice weekly depth readings logged for every field through the crop.
                4. Each reading outside the target followed by an action noted the same day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Water depth readings exist for every field twice a week through the crop, with an action recorded each time a field was outside its target."
                cadence: rolling
              tasks:
                - "Write the target water depth for each growth stage on a card"
                - "Set a marked stick in every field where you can read it from the dam"
                - "Read and log water depth in every field @recurring(weekly:mon,thu)"
                - "Note the cause and fix whenever a field is too high or too low"
            - name: Weekly rice scouting walk
              description: |-
                ## Purpose
                Blast, sheath blight, paddy bug, stem borer and apple snails all start in patches, and a patch found early is a much smaller and cheaper problem. A fixed weekly walk in a zigzag through each field, counting what you see against thresholds from the extension officer, means spraying only happens when the count says so.

                ## Milestones
                1. A scouting sheet listing the main rice pests and diseases with action thresholds from extension staff.
                2. A zigzag route through each field with set stopping points.
                3. Weekly counts recorded for every field from emergence to harvest.
                4. Every spray decision linked to a scouting record that justified it.

                ## Notes
                Paddy bug counts matter most from flowering to milk stage, when damage turns into discoloured, light grain at the mill. Ask the extension officer before treating; product and rate come from the label.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scouting record exists for every field for every week of the crop, and each treatment applied is linked to a count above its threshold."
                cadence: rolling
              tasks:
                - "Ask the extension officer for action thresholds for the main rice pests"
                - "Mark ten stopping points on a zigzag through each field"
                - "Walk every field and record counts on the scouting sheet @recurring(weekly:wed)"
                - "Photograph anything unfamiliar and send it to the extension officer"
            - name: Bird and rat control from milk stage to harvest
              description: |-
                ## Purpose
                Blackbirds and rats can strip the edges of a field in the last weeks, and the loss is often blamed on poor yield rather than counted. Planning bird scaring for the milk and dough stages and running a regular rat round along the dams keeps more of a nearly finished crop for the mill.

                ## Milestones
                1. Fields most exposed to birds and rats identified from past crops.
                2. Bird scaring arranged for the ripening weeks, with who does it and when.
                3. Rat burrows and runs along every dam mapped and checked on a set day.
                4. Damage at harvest estimated per field and compared with the last crop.

                ## Notes
                Rodenticide use, if any, follows the label and local rules, in tamper-proof stations away from children, pets and water. Clean dams with short grass give rats fewer places to live.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Bird scaring is scheduled for every field's ripening period and a weekly rat round is logged, with harvest damage estimated per field."
                cadence: cyclic
              tasks:
                - "Mark the fields that lost most to birds and rats last crop"
                - "Arrange who scares birds at dawn and dusk through ripening"
                - "Check rat runs and burrows along the dams and log what you find @recurring(weekly:fri)"
                - "Keep dam grass cut short around the ripening fields"
            - name: Rice crop diary by field
              description: |-
                ## Purpose
                Six months later nobody remembers which day field four was sown, what went on it or when the water was drained. A short weekly diary per field, with dates of every operation and input, is what turns a bad yield into a lesson and what a lender, the rice board or a buyer asks to see.

                ## Milestones
                1. A diary page or sheet set up for every field with the crop and variety at the top.
                2. Every operation, input and date recorded through one full crop.
                3. Seed lot, fertiliser and chemical product names written exactly as on the bag or label.
                4. The diary closed at harvest with bags delivered and grade.

                ## Notes
                Start from the **Metrics log** template. A photo of each bag label taken on the day it is used is a quick, reliable record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each field has a diary for the current crop with every operation, input and date recorded and the harvest result entered at the end."
                cadence: rolling
              tasks:
                - "Set up one diary sheet per field with variety and sowing date"
                - "Photograph each input bag label on the day it is applied"
                - "Write up the week's operations for every field @recurring(weekly:sun)"
                - "Close each field's diary with bags delivered and grade"
            - name: Monthly rice cash ledger
              description: |-
                ## Purpose
                Money from rice arrives in two or three large payments a year and leaves in small amounts every week, so a farm can feel rich in one month and short for the next five. A monthly ledger of money in and out, split by crop, shows how much cash each crop needs before payment and whether the last one actually made money.

                ## Milestones
                1. A ledger set up with headings matching the cost of production sheet.
                2. Every payment and receipt for the current crop entered.
                3. Monthly totals and a running balance for the crop worked out.
                4. Crop profit or loss calculated within a month of the last mill payment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ledger holds every rice payment and receipt by month and crop, with a profit or loss figure recorded for each completed crop."
                cadence: rolling
              tasks:
                - "Set up the ledger with the same headings as your cost sheet"
                - "Enter every receipt and bill from the current crop so far"
                - "Total the month's rice income and spending @recurring(monthly:5)"
                - "Work out crop profit once the final mill payment arrives"
            - name: Fertiliser timing plan by growth stage
              description: |-
                ## Purpose
                Nitrogen is taken up by rice at particular stages, and fertiliser broadcast onto a field with no water control or at the wrong stage is money thrown into the drain. Agreeing a split timing plan for each variety with the extension officer, tied to growth stages and soil test results, then sticking to it, makes the biggest input bill work harder.

                ## Milestones
                1. Soil test results or the extension officer's recommendation for each field on file.
                2. A written split timing plan linked to growth stages for each variety grown.
                3. Fertiliser bought and stored dry before the first application date.
                4. Each application recorded with date, product and water condition at the time.

                ## Notes
                Rates come from the extension officer, the soil test and the bag, never from a neighbour's guess. Applying into standing water that then drains off the field loses much of the nitrogen.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written fertiliser timing plan per variety exists, agreed with extension staff, and every application in the crop diary matches it."
                cadence: cyclic
              tasks:
                - "Book a soil test or field visit with the extension officer"
                - "Write the agreed application stages for each variety on one page"
                - "Buy fertiliser early and store it off the ground under cover"
                - "Note water level and date in the diary at each application"
            - name: Red rice and grass weed control programme
              description: |-
                ## Purpose
                Red rice looks like the crop until it heads, sheds seed into the soil for years and costs you at the mill through grade deductions. A programme that combines clean seed, good levelling, water management, timely herbicide chosen with extension staff and rogueing before seed sets is the only way fields get cleaner crop after crop.

                ## Milestones
                1. Fields ranked by red rice and grass weed pressure from the last crop.
                2. A written control plan per field covering seed, water, herbicide timing and rogueing.
                3. Rogueing done in the worst fields before red rice sheds seed.
                4. Red rice deductions on grading slips compared with the previous crop.

                ## Notes
                Herbicide products and timing come from the label and the extension officer. Clean the combine before it enters a clean field, because it carries red rice seed from farm to farm.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each field has a written red rice control plan and the next crop's grading slips show lower red rice deductions than the last."
                cadence: cyclic
              tasks:
                - "Rank fields by red rice deduction on last crop's grading slips"
                - "Agree herbicide choice and timing for each field with extension staff"
                - "Pull red rice plants by hand in the worst fields before they shed"
                - "Ask the combine operator to clean the machine before entering clean fields"
            - name: Pump, koker and field drain maintenance
              description: |-
                ## Purpose
                A pump that will not start on the morning the field needs water, or a field outlet that will not shut, can cost a week of growth or a drowned nursery. Keeping your own pumps serviced and your outlets and gates working between crops is cheaper than an emergency repair at the height of the season.

                ## Milestones
                1. Every pump, outlet gate and field structure you are responsible for listed.
                2. Service and spare part needs for each pump written down.
                3. Pumps run monthly so faults are found before the season.
                4. Gates and outlets opened, closed and repaired where they leak.

                ## Notes
                Start from the **Operational checklist** template for the monthly pump run. Main kokers and sluices usually belong to the scheme or water authority; report faults to them in writing rather than repairing them yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All farm pumps and field outlets are listed with a service record, and a monthly test run is logged for each pump."
                cadence: rolling
              tasks:
                - "List every pump, gate and outlet the farm is responsible for"
                - "Buy the filters, belts and impeller spares each pump needs"
                - "Run each pump, check oil and fuel lines and log the result @recurring(monthly:20)"
                - "Report faults in scheme structures to the scheme office in writing"
            - name: Paddy delivery and grading slip record
              description: |-
                ## Purpose
                Every truckload that leaves the farm should come back as a grading slip, a weight and eventually a payment, and small gaps add up quickly over a crop. Recording each delivery against its slip and its payment shows whether the mill paid for what it weighed and gives you evidence if a grade is disputed.

                ## Milestones
                1. A delivery sheet with columns for date, field, truck, bags, slip number, grade and deductions.
                2. Every load in the current crop entered on the day it is delivered.
                3. Payments matched to slips, with any shortfall raised with the mill in writing.
                4. A crop summary of bags, average grade and total deductions.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every paddy load for the crop is matched to a grading slip and a payment, and any shortfall has a written query to the mill."
                cadence: rolling
              tasks:
                - "Set up the delivery sheet with slip, grade and deduction columns"
                - "Photograph each grading slip before the truck leaves the mill"
                - "Match payments received against grading slips and chase gaps @recurring(quarterly)"
                - "Write up the crop totals of bags, grade and deductions"
            - name: Paddy price and market watch
              description: |-
                ## Purpose
                Paddy prices are set by mills against export markets and announced at different times, and farmers who hear late have fewer choices. Noting each mill's announced price, export news and input costs once a month gives you the information to time delivery, choose a mill and plan the next crop's spend.

                ## Milestones
                1. A price sheet listing each mill's announced paddy price by crop.
                2. Fertiliser, fuel and combine rates added monthly beside the paddy price.
                3. Your break-even price compared with the announced price each crop.
                4. One sentence each crop on what the prices mean for planting area.
              priority: low
              frontmatter:
                mode: research
                output_kind: habit
                success_criteria: "A price sheet shows each mill's paddy price and the main input costs for every month of the year, compared with your break-even."
                cadence: rolling
              tasks:
                - "Start a price sheet with each mill's last announced paddy price"
                - "Note paddy, fertiliser, fuel and combine prices for the month @recurring(monthly:15)"
                - "Ask the farmers' association how export prices are moving"
                - "Compare the announced price with your break-even each crop"
            - name: Recognising rice growth stages in the field
              description: |-
                ## Purpose
                Nearly every instruction an extension officer gives is tied to a stage: tillering, panicle initiation, booting, flowering, milk, dough. Learning to recognise each stage in your own variety, and how many days after sowing it usually comes, means fertiliser, water and scouting happen when they should rather than when it is convenient.

                ## Milestones
                1. The main growth stages and their signs written on one card with photos.
                2. Panicle initiation found by splitting stems in your own field.
                3. Days from sowing to each stage recorded for your main variety.
                4. The crop calendar updated with the stage dates you observed.

                ## Notes
                Ask the extension officer or research station for a growth stage chart for the varieties grown locally; durations differ between varieties.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A stage card with days after sowing for each growth stage of your main variety, built from your own field observations, is in the crop diary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Get a growth stage chart for your variety from the extension officer"
                - "Split ten stems at about forty days to look for the young panicle"
                - "Photograph the crop at each stage and note days after sowing"
                - "Add the observed stage dates to the crop calendar"
            - name: Identifying blast, sheath blight and brown spot
              description: |-
                ## Purpose
                Leaf and neck blast can take a large share of a crop in a wet, cloudy spell, and sheath blight builds quietly in thick, heavily fertilised stands. Knowing these diseases and brown spot on sight, and the conditions that favour each, lets you call the extension officer early instead of reacting when the panicles turn white.

                ## Milestones
                1. Clear photos and descriptions of leaf blast, neck blast, sheath blight and brown spot collected.
                2. The weather and crop conditions that favour each disease noted.
                3. Each disease found or ruled out on your own fields with the extension officer's help.
                4. Varieties on your farm noted for their reported resistance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can name the four main rice diseases on sight, list the conditions for each, and have checked your fields for them with extension staff."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect clear photos of blast, sheath blight and brown spot symptoms"
                - "Ask the research station which local varieties resist blast"
                - "Walk a field with the extension officer looking for each disease"
                - "Add disease signs and favouring weather to your scouting sheet"
            - name: Paddy bug, stem borer and snail recognition
              description: |-
                ## Purpose
                Paddy bugs feeding at milk stage leave light, spotted grain that the mill marks down, stem borers cause dead hearts and white heads, and apple snails can wipe out freshly sown patches. Learning each pest's damage signs and life cycle tells you which stage of the crop to watch hardest and when control is worth the money.

                ## Milestones
                1. Photos of each pest and the damage it causes saved to your phone.
                2. The crop stages when each pest does most damage written on the scouting sheet.
                3. A sweep net count for paddy bug practised with the extension officer.
                4. Snail pressure checked in low spots after sowing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The scouting sheet names the damaging stage for paddy bug, stem borer and snails, and you have done a sweep net count with extension staff."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Save photos of paddy bug, stem borer and apple snail damage"
                - "Buy or borrow a sweep net for paddy bug counts"
                - "Practise a sweep count with the extension officer at flowering"
                - "Check low spots for snails and eggs the week after sowing"
            - name: Reading a miller's grading slip
              description: |-
                ## Purpose
                A grading slip compresses moisture, impurities, red rice, chalky, broken and discoloured grain into a few numbers that decide what you are paid. Understanding what each line means, how it was measured and which ones you can change on the farm turns the slip from a verdict into a list of improvements.

                ## Milestones
                1. Every line on your mill's grading slip explained in plain words.
                2. The farm causes of each deduction listed, from late harvest to paddy bug.
                3. The grading process watched once at the mill.
                4. Two deductions picked to reduce in the next crop.

                ## Notes
                Ask the rice board or mill how disputes over grading are handled before you need it. Keep a sealed sample of each load where the mill allows it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of each grading slip line and its farm causes exists, and two deductions are chosen as targets for the next crop."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Take last crop's grading slips and list every line on them"
                - "Ask the mill field officer how each figure is measured"
                - "Watch a load being sampled and graded at the mill"
                - "Choose two deductions to bring down next crop"
            - name: Puddling and broadcasting pre-germinated seed
              description: |-
                ## Purpose
                Most coastal rice is sown by broadcasting soaked, sprouted seed onto puddled, levelled mud, and an uneven puddle or poorly timed drain gives patchy stands that no fertiliser can fix. Learning the soaking and incubation routine, the right mud condition and even broadcasting, by hand, blower or aircraft, raises plant stand and cuts seed waste.

                ## Milestones
                1. The soaking and incubation routine for your seed written step by step.
                2. Puddling and levelling standard agreed with the tractor operator before work starts.
                3. Seed broadcast evenly and the field drained and reflooded as advised.
                4. Plant stand counted in five spots at two weeks and compared with the target.

                ## Notes
                Ask the extension officer for the current recommended seed rate and water routine after broadcasting for your soil and variety.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written sowing routine exists and stand counts in five spots per field at two weeks after sowing are recorded against a target."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write down the soaking and incubation routine for your seed"
                - "Agree the puddling and levelling finish with the tractor operator"
                - "Mark field edges so broadcasting passes do not miss or overlap"
                - "Count plants in a small square at five spots two weeks after sowing"
            - name: Judging harvest readiness by grain and moisture
              description: |-
                ## Purpose
                Cut too early and the mill deducts for moisture and immature grain; cut too late and grain shatters, cracks in the sun and breaks in milling. Learning to judge readiness from panicle colour, grain hardness and a moisture reading, and timing the drain-down before it, gives better head rice and fewer deductions.

                ## Milestones
                1. The signs of harvest readiness for your variety written on a card.
                2. Fields drained at the time recommended before harvest.
                3. Grain moisture checked with a meter or at the mill before cutting.
                4. Harvest dates and moisture at cutting recorded for each field.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each field's harvest date has a recorded moisture reading, and the readiness signs and drain-down timing are written in the crop diary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the research station how many days after flowering your variety is ready"
                - "Borrow a grain moisture meter or arrange readings with the mill"
                - "Rub and bite grains from the top, middle and base of panicles"
                - "Record moisture at cutting for each field in the diary"
            - name: Laser land levelling decision
              description: |-
                ## Purpose
                Uneven fields hold deep water in low spots and leave high spots dry, which drowns seed in one place and lets red rice and grass in at another. Comparing a laser levelling job on your worst fields against its cost, using yields, water and weed records, tells you whether it will pay back within a few crops.

                ## Milestones
                1. Fields with the worst high and low spots identified from water records and stand counts.
                2. Quotes from two levelling contractors per hectare or acre obtained.
                3. Expected gain in yield, seed and weed control estimated with the extension officer.
                4. A decision recorded for each field, with a date if levelling goes ahead.

                ## Notes
                Start from the **Purchase decision** template. Levelling moves topsoil, so ask about the fertility of cut areas for the first crop afterwards.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written levelling decision with costs and expected gains exists for each of the worst fields, with a date set where the answer is yes."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Mark the fields with the worst high and low spots on the map"
                - "Get levelling quotes from two contractors"
                - "Estimate the payback using yield, seed and weed control figures"
                - "Record a levelling decision and date for each field"
            - name: Hiring a combine or buying one
              description: |-
                ## Purpose
                Waiting for a hired combine while a ripe crop shatters is the most common harvest loss on small and medium rice farms, but a combine is a large debt for a machine used a few weeks a year. Comparing the true cost of hiring, sharing and owning, including the delay cost, settles a question many farmers argue about for years.

                ## Milestones
                1. Last two harvests' combine wait times and estimated shattering loss recorded.
                2. Hire rates, operator terms and availability from at least two operators gathered.
                3. Ownership cost per acre or hectare worked out, including finance, repairs, operator and storage.
                4. A decision written: hire, share with neighbours or buy, with the reasons.

                ## Notes
                Start from the **Purchase decision** template. If you buy, plan contract combining for neighbours only after your own fields are safe.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of hiring, sharing and owning a combine, with cost per acre or hectare and delay losses, ends in a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Estimate how many days you waited for the combine last two harvests"
                - "Ask two operators for their rates and how they rank bookings"
                - "Price a used combine with finance, repairs and an operator"
                - "Write down the decision to hire, share or buy and why"
            - name: Choosing a rice variety for each field
              description: |-
                ## Purpose
                Varieties released by the rice board's research station or by ADRON in Nickerie differ in duration, blast resistance, lodging, grain shape and how millers grade them. Matching variety to each field's water, soil and timing, rather than planting whatever seed is available, is one of the cheapest yield gains there is.

                ## Milestones
                1. Currently recommended varieties for your area listed with duration and main traits.
                2. Each field's water control, soil and sowing date noted beside the options.
                3. Your mill's preference or price difference between varieties checked.
                4. A variety chosen for each field for the coming crop.

                ## Notes
                Ask the research station for its latest variety recommendations; older varieties can lose disease resistance over time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every field has a variety chosen for the coming crop, matched against water, timing, disease resistance and the mill's grading preference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the research station for its current list of recommended varieties"
                - "Note each field's water control and planned sowing date"
                - "Ask your mill whether it prefers or prices any variety differently"
                - "Write the chosen variety against each field on the plot register"
            - name: Alternate wetting and drying trial on one field
              description: |-
                ## Purpose
                Keeping fields flooded all season uses a great deal of pumped water, and where water control is good, letting the water drop and rewetting can save pumping without hurting yield. Trying it carefully on one field, with the extension officer's advice and side-by-side records, tests whether it works on your soil before you change the whole farm.

                ## Milestones
                1. One field with good water control chosen and a comparison field agreed.
                2. A perforated tube installed to watch water below the soil surface.
                3. Water applications, pump hours and weeds recorded in both fields.
                4. Yield and grade compared and a decision on wider use recorded.

                ## Notes
                Weed pressure can rise when water drops, so do not try this on a field with heavy red rice. Keep the field flooded around flowering unless your extension officer advises otherwise.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A trial field and comparison field have recorded pump hours, weeds, yield and grade for one crop, with a decision on wider use written down."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the extension officer whether your soil suits wetting and drying"
                - "Choose a trial field and a comparison field with similar history"
                - "Install a perforated tube in the trial field to read water depth"
                - "Compare pump hours, yield and grade between the two fields"
            - name: Selling wet paddy or drying it first
              description: |-
                ## Purpose
                Most paddy goes to the mill wet straight from the combine, and the mill charges for drying through moisture deductions. Working out whether your own drying floor or a shared dryer would earn more than it costs, after labour, rain risk and transport, answers whether drying belongs on your farm at all.

                ## Milestones
                1. Moisture deductions paid over the last two crops added up.
                2. Costs of a drying floor, tarpaulins or a share in a dryer estimated.
                3. Labour, rain risk and extra handling counted.
                4. A decision recorded: sell wet, dry part of the crop, or invest in drying.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of moisture deductions against the full cost of drying exists, ending in a recorded decision for the next crop."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add up the moisture deductions from your last two crops' slips"
                - "Price a drying floor, tarpaulins or a dryer share"
                - "Count the labour days and rain risk drying would add"
                - "Record whether you will sell wet, dry part or invest"
            - name: Straw and stubble management after harvest
              description: |-
                ## Purpose
                Burning straw is quick and cheap but loses nutrients, damages soil life and is increasingly restricted, while incorporating it takes tractor time before a tight next crop. Comparing burning, rolling into water, baling and ploughing in, against the time between crops, settles a practice for each field.

                ## Milestones
                1. Current practice and time available between crops noted for each field.
                2. Local rules or advice on straw burning checked with the authorities.
                3. Costs and benefits of rolling, incorporation and baling compared.
                4. A straw practice chosen and recorded for each field.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each field has a recorded straw management practice chosen after checking local burning rules and comparing at least two alternatives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note how many days you usually have between harvest and land preparation"
                - "Check local rules and advice on burning straw"
                - "Ask the tractor operator to price rolling straw into the mud"
                - "Write the chosen straw practice for each field"
            - name: Cutting fertiliser waste with a leaf colour chart
              description: |-
                ## Purpose
                Fertiliser is often the largest bill on a rice farm and is commonly applied by calendar rather than need. A leaf colour chart from the research station, used at set stages, shows whether the crop needs the next nitrogen split, so you spend on fields that need it and save on ones that do not.

                ## Milestones
                1. A leaf colour chart obtained and its use demonstrated by extension staff.
                2. Readings taken at the agreed stages in every field.
                3. Nitrogen splits adjusted only where readings fall below the agreed level.
                4. Fertiliser cost per acre or hectare compared with the previous crop.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Leaf colour readings are recorded at agreed stages in every field for one crop, and fertiliser spend per acre or hectare is compared with the crop before."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the research station or extension office for a leaf colour chart"
                - "Have the extension officer show you how to read it in your field"
                - "Take readings at the agreed stages and note them in the diary"
                - "Compare fertiliser cost per acre or hectare with the last crop"
            - name: Ratoon crop decision after harvest
              description: |-
                ## Purpose
                Some varieties regrow from the stubble after harvest and can give a second, smaller crop for little more than water, fertiliser and a combine pass. Whether a ratoon pays depends on the variety, how cleanly the field was cut, the water available and whether it delays the next main crop, so the decision is worth making on numbers, field by field.

                ## Milestones
                1. Varieties on the farm checked with the research station for ratoon ability.
                2. Fields cut low and clean with good water control shortlisted.
                3. Expected ratoon yield and costs set against any delay to the next main crop.
                4. A ratoon or no-ratoon decision recorded for each shortlisted field.

                ## Notes
                A ratoon can carry disease and red rice forward, so leave out fields with heavy pressure last crop.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each shortlisted field has a recorded ratoon decision based on variety, water, expected yield, cost and the effect on the next crop's timing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the research station which of your varieties ratoon well"
                - "Note cutting height and stubble condition of each field after harvest"
                - "Estimate ratoon yield, costs and the delay to the next crop"
                - "Record ratoon or no ratoon for each shortlisted field"
            - name: Land preparation readiness before sowing
              description: |-
                ## Purpose
                Land preparation is where a crop is won or lost, and it depends on water arriving, the tractor turning up and dams holding at the same time. Running a readiness check two weeks ahead, with water, tractor, repairs, seed and fertiliser confirmed, means sowing happens in the window rather than after it.

                ## Milestones
                1. Water release date for the crop confirmed with the scheme or water board.
                2. Tractor and operator booked with dates for each field.
                3. Dam repairs and drain cleaning from the condition walk completed.
                4. Seed, fertiliser and herbicide in store or on firm order.

                ## Notes
                Start from the **Operational checklist** template and reuse it every crop.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Two weeks before land preparation, water, tractor, repairs, seed and inputs are each confirmed on a dated checklist."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the water release date with the scheme office"
                - "Book the tractor with a date for each field"
                - "Tick off dam and drain repairs from the condition walk list"
                - "Check seed, fertiliser and herbicide are in store or ordered"
            - name: Sowing week plan and stand check
              description: |-
                ## Purpose
                Sowing week squeezes soaking seed, final puddling, broadcasting and draining into a few days, often with rain threatening. A day-by-day plan for which fields are sown when, who does what and where the sprouted seed waits, followed by a stand check, keeps a messy week from becoming a patchy crop.

                ## Milestones
                1. A day-by-day sowing order for every field written and shared.
                2. Seed soaking timed so sprouted seed is ready the day each field is.
                3. Every field sown within its window and the date recorded.
                4. Stand counted two weeks later and gaps replanted or noted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every field is sown within its planned window, with sowing dates recorded and a two-week stand count done."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the order and day each field will be sown"
                - "Time seed soaking to match each field's sowing day"
                - "Record the actual sowing date of every field"
                - "Walk each field at two weeks and note thin or empty patches"
            - name: Harvest week with combine and trucks booked
              description: |-
                ## Purpose
                Harvest is the moment the whole crop's value is at risk at once: a late combine, a truck that does not come or a long line at the mill can cost grade and grain. Booking the combine and trucks early, draining on time and agreeing delivery days with the mill turns harvest into a planned operation.

                ## Milestones
                1. Combine and operator booked for each field with a backup named.
                2. Trucks and drivers booked and the mill's receiving days confirmed.
                3. Fields drained on the planned date ahead of harvest.
                4. Every field cut and delivered, with slips photographed on the day.

                ## Notes
                Agree with the operator in advance how many acres or hectares a day they expect to cut, and what happens if it rains.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every field is cut within a week of its planned harvest date and delivered with a photographed grading slip."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Book the combine and name a backup operator"
                - "Book trucks and confirm the mill's receiving days"
                - "Drain each field on the date set in the crop calendar"
                - "Photograph every grading slip on delivery day"
            - name: Rain or flood during harvest contingency
              description: |-
                ## Purpose
                Heavy rain on a ripe crop flattens it, delays the combine and pushes moisture up, and a high-water event on the coast can put water back on drained fields. Agreeing in advance what you will do, which fields go first, who to call and how losses are recorded, saves both grain and arguments about compensation later.

                ## Milestones
                1. Fields ranked by flood risk and harvest priority.
                2. A plan written for rain during harvest covering cutting order, drains and pumps.
                3. Contacts for the drainage authority and the rice board or ministry recorded for emergencies.
                4. A method agreed to photograph and record crop loss for any claim or assistance.

                ## Notes
                Start from the **Risk register** template. Photos with dates and field numbers are the evidence assistance programmes most often ask for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written harvest rain and flood plan exists with field priority order, emergency contacts and a loss recording method."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Rank fields by flood risk and how ripe they will be at harvest"
                - "Write the cutting order to use if heavy rain is forecast"
                - "Save emergency numbers for the drainage authority and rice board"
                - "Agree how crop loss will be photographed and recorded"
            - name: End of crop review
              description: |-
                ## Purpose
                Within a month of the last mill payment the details are still fresh: which field yielded, what the combine cost, where the grade slipped. Sitting down once a crop with the diary, ledger and slips, and writing three changes for the next crop, is the habit that separates farms that improve from farms that repeat.

                ## Milestones
                1. Yield, grade, cost and profit for each field summarised on one page.
                2. What went well and what went wrong listed with causes.
                3. Three specific changes chosen for the next crop.
                4. The changes added to the crop calendar and plans.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A one-page crop review with field results and three named changes is written within a month of the final mill payment."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Bring the crop diary, ledger and grading slips together"
                - "Ask the agent to summarise yield, grade and cost by field on one page"
                - "Write three changes for the next crop"
                - "Put each change into the crop calendar or plan"
            - name: Attending rice field days and farmer training
              description: |-
                ## Purpose
                The research stations and extension services run field days, variety demonstrations and short courses that show new varieties, new weed control and better water practice on real fields. Going to at least one each year, with questions from your own crop diary, is the cheapest way to keep up with what works locally.

                ## Milestones
                1. Upcoming field days and courses for the year found.
                2. Questions from your own fields written before attending.
                3. At least one field day or course attended this year.
                4. One practice from the event tried on your farm.
              priority: low
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "At least one rice field day or course is attended in the year and one practice from it is tried on a named field."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the extension office for this year's rice field days and courses"
                - "Write three questions from your crop diary to take along"
                - "Check the training calendar and book a place @recurring(yearly)"
                - "Try one practice from the event on a named field"
            - name: Running a small rice farm on hired machinery
              description: |-
                ## Purpose
                On a farm of a few acres every operation, from ploughing to combining, is hired, and the small farmer is often last in the queue. Grouping with neighbours to book tractors and combines together, keeping costs per acre tight and choosing timing carefully keeps a small farm viable when margins are thin.

                ## Milestones
                1. Every hired operation and its cost per acre listed for the last crop.
                2. Two or three neighbours agreed to book land preparation and combining together.
                3. Group bookings made for the coming crop with a single contact person.
                4. Cost per acre for hired work compared with the previous crop.

                ## Notes
                A shared WhatsApp group with neighbours on the same side line makes coordinating tractors, water and harvest much easier.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hired land preparation and combining are booked as a group with neighbours for the crop, and hired cost per acre is compared with the last crop."
                cadence: cyclic
              tasks:
                - "List each hired operation and its cost per acre last crop"
                - "Ask neighbours on your side line about booking machines together"
                - "Agree one person to make the group bookings"
                - "Compare hired cost per acre with last crop after harvest"
            - name: Farming rice in a government scheme or polder
              description: |-
                ## Purpose
                Land in a government irrigation scheme or polder comes with rotation schedules, scheme rules, maintenance duties and rates that differ from privately drained land. Knowing the scheme's rules and schedule, and keeping your obligations up to date, protects your water supply and your place in the scheme.

                ## Milestones
                1. The scheme or polder rules on water rotation, maintenance and cropping obtained.
                2. Your field's position in the rotation and the release schedule known.
                3. Your maintenance duties on shared canals and dams listed.
                4. Any scheme meetings or notices followed and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The scheme's rules and water rotation for your fields are written down, your maintenance duties are listed, and scheme notices are checked monthly."
                cadence: rolling
              tasks:
                - "Ask the scheme office for its written rules and rotation schedule"
                - "Note your field's turn in the water rotation"
                - "List your share of canal and dam maintenance"
                - "Check scheme notices and meeting dates @recurring(monthly:10)"
            - name: Growing with a miller's advance or input credit
              description: |-
                ## Purpose
                Many farmers take seed, fertiliser or cash from a mill against the coming crop, which helps when cash is short but ties the paddy to that mill and can hide the true cost. Recording exactly what was advanced, on what terms and how it will be deducted keeps the arrangement clear and lets you compare it with other credit.

                ## Milestones
                1. The advance agreement in writing, including price, interest or charges and deduction method.
                2. Every item advanced recorded with date, quantity and value.
                3. The balance checked with the mill's statement during the crop.
                4. The effective cost compared with a credit union or bank loan.

                ## Notes
                Ask for every advance arrangement in writing. If anything is unclear, ask the rice board or a farmers' association to explain your rights before signing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written advance agreement and a record of every item advanced exist, reconciled monthly against the mill's statement."
                cadence: rolling
              tasks:
                - "Ask the mill for the advance terms in writing"
                - "Record every bag and cash amount advanced with its date"
                - "Ask the mill for a statement of your advance balance @recurring(monthly:25)"
                - "Compare the advance cost with a credit union loan for the same amount"
            - name: Rice farming in the Nickerie polders
              description: |-
                ## Purpose
                Rice growers in Nickerie and other Surinamese polders work with larger fields, water boards, export-oriented mills and ADRON as the research centre, often with aerial sowing and spraying. Setting up the relationships, paperwork and calendar that fit this system makes the projects in this area work for a Surinamese grower.

                ## Milestones
                1. Contacts at the water board, ministry district office and ADRON recorded.
                2. Water board fees and rules for your polder confirmed.
                3. Mill or exporter options and their terms compared.
                4. The two-crop calendar adjusted to the polder's water and aerial service schedule.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Water board, ministry and ADRON contacts, polder rules, mill options and an adjusted crop calendar are recorded for your Nickerie fields."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record contacts at the water board, district office and ADRON"
                - "Confirm water board fees and rules for your polder"
                - "Compare mills and exporters on terms and payment"
                - "Adjust the crop calendar to the aerial sowing and water schedule"
            - name: Working with a rice farmers' association
              description: |-
                ## Purpose
                Paddy prices, payment disputes, water problems and drainage repairs are usually raised with mills and authorities through farmers' associations rather than by one farmer alone. Joining your local association, taking part in its meetings and bringing documented problems from your own fields gives you a voice in decisions that set your income.

                ## Milestones
                1. The farmers' association for your area identified and membership taken out.
                2. Meeting dates and the local representative's contact recorded.
                3. At least one documented issue, such as late payment or a broken structure, raised through the association.
                4. Outcomes of meetings noted in the crop diary.

                ## Notes
                In Guyana the Rice Producers Association represents farmers; in Suriname ask the district office which growers' groups are active in your polder.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Membership of a rice farmers' association is current, meetings are attended or followed, and at least one documented issue has been raised through it."
                cadence: rolling
              tasks:
                - "Find out which rice farmers' association covers your area"
                - "Take out membership and save the local representative's number"
                - "Attend or follow the association meeting and note decisions @recurring(monthly:12)"
                - "Raise one documented field or payment issue through the association"
            - name: Handing the rice farm to the next generation
              description: |-
                ## Purpose
                Family land is common on the rice coast, worked by one sibling and owned by several, with leases and registration in the name of a parent who is ageing. Planning the handover early, with the farm records, water rights, leases and machinery clearly documented, avoids disputes and keeps the farm in production.

                ## Milestones
                1. All land, lease, registration and machinery documents listed with whose name they are in.
                2. The family's wishes for the farm discussed and written down.
                3. A lawyer consulted about wills, transfers or leases where needed.
                4. The successor trained on the records, mill and water arrangements.

                ## Notes
                Inheritance and land transfer law differs between Guyana and Suriname; take the documents to a local lawyer rather than relying on family agreements alone.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A list of farm documents and names, a written family agreement and a lawyer's advice on transfer are on file, and the successor has run one crop's records."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every land, lease, registration and machinery document and its name"
                - "Hold a family meeting about the farm's future and note the outcome"
                - "Book a lawyer to review transfers, leases and wills"
                - "Review the handover plan with the family @recurring(yearly)"
            - name: Managing rice fields from abroad or part time
              description: |-
                ## Purpose
                Many rice fields are owned by people working in town, in the Caribbean or overseas, and run day to day by a relative or a field manager. A weekly call with a fixed agenda, photos from the field and access to the slips and ledger gives an absentee owner enough sight of the crop to make decisions without being there.

                ## Milestones
                1. A field manager agreement covering duties, pay and spending limits written.
                2. A weekly report format agreed: water, scouting, operations and costs, with photos.
                3. Grading slips and payment records shared promptly after each delivery.
                4. A visit planned for at least one land preparation or harvest a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written field manager agreement and weekly report format exist, and a weekly call with photos happens every week through the crop."
                cadence: rolling
              tasks:
                - "Write the field manager's duties, pay and spending limit"
                - "Agree a short weekly report with photos of each field"
                - "Hold the weekly call with the field manager @recurring(weekly:mon)"
                - "Plan a visit for land preparation or harvest"
            - name: Producing certified seed paddy
              description: |-
                ## Purpose
                Seed paddy commands a premium over grain paddy, but it demands clean fields, strict rogueing, inspections and separate harvest and storage. For a farmer with clean, well-levelled land and good records, becoming an approved seed grower can add income and supply neighbours with seed they can trust.

                ## Milestones
                1. The seed certification requirements of the rice board or ministry obtained.
                2. A field with low red rice history and good water control selected.
                3. Rogueing, inspection and isolation requirements met through one crop.
                4. Seed harvested, dried, stored and certified separately from grain paddy.

                ## Notes
                The combine, trucks and storage must be cleaned before seed harvest; mixing is the most common reason a seed lot fails certification.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One field passes seed certification inspection through a full crop and its seed lot is certified and stored separately."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the rice board or ministry for the seed grower requirements"
                - "Choose the cleanest, best-levelled field for seed"
                - "Rogue off-types and red rice before each inspection"
                - "Clean the combine, trucks and store before seed harvest"
            - name: Contract combining for neighbouring farms
              description: |-
                ## Purpose
                Owning a combine can pay back much of its cost by cutting for others, but only if their own crop is not put at risk and the machine stays fit. Running contract combining as a service, with booking rules, rates, cleaning between farms and maintenance, protects both the business and neighbours' fields.

                ## Milestones
                1. Rates per acre or hectare, payment terms and booking rules written.
                2. Bookings scheduled so your own fields are cut first or at their best date.
                3. Cleaning between farms done and recorded to limit red rice spread.
                4. Monthly maintenance and hours logged through the season.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Written rates and booking rules exist, every contract job is logged with cleaning and payment, and monthly maintenance is recorded."
                cadence: cyclic
              tasks:
                - "Write rates per acre or hectare, payment terms and booking rules"
                - "Keep a booking list with your own fields marked first"
                - "Clean the combine and record it between each farm"
                - "Log combine hours and maintenance work @recurring(monthly:28)"
            - name: Drone surveys and yield mapping on a large rice farm
              description: |-
                ## Purpose
                On a farm of hundreds of acres or hectares, problems in the middle of fields go unseen from the dam. Drone imagery at key stages, combined with combine yield data where available, shows uneven levelling, water problems and disease patches, so fixes target the right part of each field.

                ## Milestones
                1. Drone imagery captured at tillering and before harvest for the main fields.
                2. Problem areas compared with water, levelling and scouting records.
                3. Yield by field or zone recorded from combine data or grading slips.
                4. Two targeted fixes chosen for the next crop from the maps.

                ## Notes
                Check aviation authority rules on drone flights and any spraying licence before using drones for applications.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Drone images from two crop stages are compared with water and yield records, leading to two targeted fixes written into the next crop plan."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask a drone service provider for a quote to image the main fields"
                - "Check the aviation authority's rules for farm drone flights"
                - "Compare the images with water, levelling and scouting records"
                - "Ask the agent to draft a short summary of patterns found in the maps"
---

# Rice Farming in Guyana and Suriname

Rice Farming in Guyana and Suriname is for anyone growing paddy on the coastal plain, from the family with twelve acres off a Mahaicony side line to the Nickerie grower running several hundred hectares of polder. The projects begin with knowing your fields, your water, your miller and what last crop really cost, then move through the routines that carry each crop from puddling to delivery, the skills of reading the plant and the grading slip, decisions on levelling, machinery, varieties and drying, the land preparation, sowing and harvest milestones, situations such as small farms, scheme land, miller advances and absentee owners, and specialist work on seed paddy, contract combining and drone surveys.

What repeats is the twice weekly water check, the weekly scouting walk, rat round and crop diary, the monthly cash ledger, pump run and price watch, the quarterly dam walk and slip reconciliation, and yearly registration, drainage and irrigation rates and miller review. The Vendor, Metrics log, Operational checklist, Purchase decision and Risk register templates pair with the projects that point to them. Herbicide, insecticide, fungicide and fertiliser choices and rates always come from the label, the rice board's extension staff or the research station, never from this list. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
