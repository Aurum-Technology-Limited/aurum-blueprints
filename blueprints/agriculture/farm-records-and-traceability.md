---
id: agriculture.farm-records-and-traceability
name: Farm Records and Traceability
description: "A numbered farm map, planting, harvest, input, animal and sales logs, lot codes on every crate, and the weekly and monthly habits that let you trace any sale back to its field in minutes."
category: business
version: 1.0.0
tags: [agriculture, farm-records-and-traceability, small-business, farm-records, traceability, lot-codes, harvest-logs, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - month-end-close
    - metrics-log
    - remediation-plan
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Farm Records and Traceability
          description: "Keeping farm records that help decisions and buyers: planting and harvest logs, inputs used, animal records, sales and lot traceability."
          projects:
            - name: Numbered farm map with fields and blocks
              description: |-
                ## Purpose
                Records only connect when every piece of ground has a name that never changes, so that Block 3 in the planting log is the same Block 3 in the harvest log and on the crate label. Drawing the farm once, splitting it into numbered fields and blocks with rough areas, gives every later record its address. Do it before the next planting so the new crop starts life with a code.

                ## Milestones
                1. A sketch or satellite printout of the farm with boundaries, roads, water sources and buildings marked.
                2. Every field and block given a short permanent code such as F2 B3.
                3. The approximate area of each block written in hectares or acres beside its code.
                4. A laminated copy of the map hanging in the shed and a photo of it saved on the phone.

                ## Notes
                Keep codes short and never reuse one for a different piece of ground. If a block is split later, add a letter (B3a, B3b) instead of renumbering.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated farm map shows every field and block with a permanent code and area, posted in the shed and saved on the phone."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Print a satellite view of the farm from a free map app"
                - "Walk the boundaries and mark fields, drains, roads and buildings"
                - "Give each block a short code and note its rough area"
                - "Laminate the map and hang it in the shed"
            - name: Choosing paper, spreadsheet or a farm app
              description: |-
                ## Purpose
                The best record system is the one the farm will still be using in six months, and that depends on who writes the records, whether there is signal in the field and how much the buyers ask for. Comparing a bound notebook, a shared spreadsheet and one or two farm record apps against the same questions avoids paying for software nobody opens. The choice made here shapes every other project in this area.

                ## Milestones
                1. The people who will record, the phones they carry and the field signal written down.
                2. Three options compared on cost, offline use, ease for workers and what buyers can be shown.
                3. One system chosen, with the reason recorded in a sentence.
                4. A start date set for the chosen system.

                ## Notes
                Start from the **Purchase decision** template. Paper is not a failure: a well-kept bound book beats an app nobody updates. Many farms run paper in the field and a spreadsheet at home.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision names the record system the farm will use, with three options compared and a start date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who will write records and the phone each one carries"
                - "Check phone signal at the far end of each field"
                - "Try two farm record apps on their free tier for a week"
                - "Write down the chosen system and the date it starts"
            - name: Pocket field diary for daily notes
              description: |-
                ## Purpose
                Memory fades within a week, and by harvest nobody can say which day the rain washed out the beds or when the first pest showed up. A small waterproof diary carried in the field, with one dated line a day, catches what the formal logs miss. Ten seconds at the end of each day becomes the source of every later explanation.

                ## Milestones
                1. A waterproof pocket notebook and pencil kept in the farm bag or vehicle.
                2. A simple line format agreed: date, block, what was done, anything unusual.
                3. Two weeks of daily entries written without a gap.
                4. Full diaries numbered and stored with the other farm records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The field diary has a dated entry for at least 25 days in each month, and full diaries are numbered and filed."
                cadence: rolling
              tasks:
                - "Buy a waterproof pocket notebook and two pencils"
                - "Write the line format inside the front cover"
                - "Write the day's field diary entry before leaving the farm @recurring(daily)"
                - "Number each full diary and file it with the farm records"
            - name: Planting log for every block
              description: |-
                ## Purpose
                Yield, harvest timing and buyer questions all trace back to what went into the ground, when and from which seed lot. A planting log with one line per planting, naming the block, crop, variety, seed source and lot number, plant count and date, turns guesses into facts. It is also the first page a buyer or auditor asks to see.

                ## Milestones
                1. A planting log page or sheet set up with columns for block, crop, variety, seed source, seed lot, quantity and date.
                2. Every crop currently in the ground entered from the diary and memory.
                3. Seed packets or nursery receipts kept and matched to each planting line.
                4. Each new planting logged on the day it happens.

                ## Notes
                Keep one seed packet or a photo of its label for every lot planted. If a crop fails, the lot number is what the seed supplier will ask for.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every crop in the ground has a planting log line with block code, variety, seed lot and planting date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the planting log columns in the chosen system"
                - "Enter every crop now in the ground with its block and date"
                - "Photograph the labels of seed packets and nursery receipts"
                - "Log the next planting on the day it goes in"
            - name: Harvest log by block and date
              description: |-
                ## Purpose
                Without a harvest log, the farm knows what it sold but not what each block produced, so a weak field hides behind a good one. Recording every pick by block, date, crop, weight or count and who picked it gives yields per block and the link between field and sale that traceability depends on. Start with the crop that brings in the most money.

                ## Milestones
                1. A harvest log set up with block, date, crop, quantity, unit, grade and picker.
                2. A scale or standard crate size agreed so quantities mean the same thing every time.
                3. Every harvest of the main crop logged for a full month.
                4. Weekly totals per block worked out from the log.

                ## Notes
                Choose one unit per crop and stick to it. Mixing crates, sacks and kilograms in one column makes the log useless for comparing blocks.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A month of harvests for the main crop is logged by block and date in a single unit, with weekly totals per block."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose one unit of measure for each crop harvested"
                - "Set up the harvest log with block, date, quantity, grade and picker"
                - "Log every pick of the main crop at the packing point"
                - "Total each block's harvest at the end of the week @recurring(weekly:sat)"
            - name: Input purchase and stock register
              description: |-
                ## Purpose
                Seed, fertiliser, feed, growing media and packaging come onto the farm in many small purchases, and the receipts end up in a truck door or a jacket pocket. A register of what came in, from whom, the batch number and where it is stored lets you trace a bad bag of fertiliser or feed back to its supplier and know what is on hand before you buy again.

                ## Milestones
                1. A register set up with date, supplier, product, batch or lot number, quantity, cost and storage place.
                2. All inputs bought in the last three months entered from receipts.
                3. A folder or envelope for input receipts kept in one place.
                4. Every new delivery entered on the day it arrives.

                ## Notes
                Chemical spray products have their own record and store rules; keep them in your spray records and use this register for everything else that comes onto the farm.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The input register lists every non-chemical input bought in the last three months with supplier, batch number and storage place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather input receipts from the vehicle, shed and pockets into one envelope"
                - "Set up the register columns including batch number and storage place"
                - "Enter the last three months of input purchases"
                - "Write the batch number on each sack or drum as it arrives"
            - name: Sales record with buyer, quantity and price
              description: |-
                ## Purpose
                Cash sales at the roadside, credit to a vendor and invoices to a hotel blur together unless every sale is written down. A sales record showing date, buyer, product, lot code, quantity, price and whether it has been paid shows who owes money, which buyers pay best and which lot went where. It is the forward half of traceability.

                ## Milestones
                1. A sales record set up with date, buyer, product, lot code, quantity, unit price, total and paid status.
                2. The last month of sales reconstructed from receipts, messages and memory.
                3. Every buyer given a consistent name in the record.
                4. Unpaid sales visible at a glance with the date they became due.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every sale from the last month is in the sales record with buyer, lot code, amount and paid status."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set up the sales record with a paid or unpaid column"
                - "Scroll back through buyer messages and enter last month's sales"
                - "Agree one spelling for each regular buyer's name"
                - "Check every unpaid sale against the sales record @recurring(weekly:wed)"
            - name: Lot code system for harvested produce
              description: |-
                ## Purpose
                A lot code is the short string on a crate or bag that ties it to a block and a harvest day, and it is what lets you answer a buyer's complaint about one delivery without pulling everything. A code built from the date and block, such as 2410-B3, is easy to write in the field and easy to read later. Settle the format once and use it on every harvest.

                ## Milestones
                1. A lot code format chosen that combines harvest date and block code.
                2. The format written on the shed wall and explained to everyone who harvests.
                3. Every harvest log line and sales line carrying a lot code.
                4. A test where one lot code is followed from harvest log to sale in under five minutes.

                ## Notes
                Keep the code under eight characters so a picker with a marker can write it on a crate in the sun. If two harvests come off one block on one day, add a letter.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written lot code format is in use on every harvest log and sales line, and one lot has been traced from field to buyer in under five minutes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a lot code format from harvest date and block code"
                - "Paint or post the format on the shed wall"
                - "Show every picker how to write the code on a crate"
                - "Trace one lot from the harvest log to its buyer and time it"
            - name: Animal register with ID numbers
              description: |-
                ## Purpose
                On a farm with goats, pigs, cattle or a flock, the register is the list of every animal or batch with its ID, birth or arrival date, sex, breed, dam and where it came from. Without one, deaths and sales go unnoticed and nobody can prove an animal's origin to an abattoir or buyer. A register also makes theft and strays visible fast.

                ## Milestones
                1. Every animal or batch on the farm given a unique ID by tag, mark or batch number.
                2. A register listing ID, sex, breed, date of birth or arrival, source and dam where known.
                3. Animals that left the farm in the last year entered with the date and reason.
                4. A head count that matches the register on the day it is finished.

                ## Notes
                Ask your vet or the veterinary authority whether animal identification is required for your species. Treatment and vaccination records belong with your herd health records; link them by the same ID.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The animal register lists every animal or batch with a unique ID, and a physical head count matches it on the date recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count every animal and note any without an ID"
                - "Set up the register with ID, sex, breed, birth date, source and dam"
                - "Enter animals sold, died or lost in the last year"
                - "Walk the herd and check every animal against the register @recurring(monthly:10)"
            - name: One place for every farm document
              description: |-
                ## Purpose
                Lease papers, farmer registration card, buyer contracts, seed receipts and the old diaries are often spread across a kitchen drawer, the truck and three phones. Setting up one box file and one phone or cloud folder with the same sections means anything can be found in a minute, by you or by whoever covers for you.

                ## Milestones
                1. A box file with labelled sections: land, registration, buyers, inputs, animals, sales, diaries.
                2. A matching folder on the phone or in cloud storage with the same section names.
                3. Loose papers from the house, vehicle and shed sorted into the sections.
                4. A one-page index on the inside lid saying what lives where.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A labelled box file and matching digital folder hold the farm's documents, with an index that lets another person find any item."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Buy a box file and label seven sections"
                - "Create the same folders on the phone or cloud drive"
                - "Sort loose farm papers from the house, truck and shed"
                - "Write the index and tape it inside the lid"
            - name: Weekly records catch-up
              description: |-
                ## Purpose
                Records slip in harvest weeks, and a gap of a fortnight is often never filled. Setting a fixed half hour each week to copy diary notes into the logs, file receipts and check that every harvest has a lot code and every sale a buyer keeps the gaps small enough to fix from memory.

                ## Milestones
                1. A fixed weekly slot of 30 minutes agreed and written on the calendar.
                2. A short checklist of what gets updated each week.
                3. Four weeks in a row completed without a missed catch-up.
                4. Gaps found in the logs noted and filled within the same week.

                ## Notes
                Start from the **Operational checklist** template. Keep the checklist to six lines or it will not get done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly catch-up checklist is ticked for at least 45 weeks of the year, with no log more than seven days behind."
                cadence: rolling
              tasks:
                - "Write a six-line weekly records checklist"
                - "Copy the week's diary notes into the planting and harvest logs @recurring(weekly:sun)"
                - "Check every harvest line has a lot code and every sale a buyer"
                - "Note any gap and fill it before the next catch-up"
            - name: Monthly harvest and sales reconciliation
              description: |-
                ## Purpose
                If the harvest log says 200 crates left the field and the sales record shows 150 sold, the other 50 were graded out, eaten, given away, spoiled or stolen, and only a monthly check will show which. Comparing harvest, sales and recorded losses once a month catches missing sales, unpaid deliveries and quiet theft while the trail is still warm.

                ## Milestones
                1. Total harvest, total sales and recorded losses compared for each main crop.
                2. Any difference above an agreed level, such as 5 percent, explained in writing.
                3. Unpaid invoices older than the buyer's terms listed for follow-up.
                4. A one-line monthly result filed with the records.

                ## Notes
                Start from the **Month-end close** template. Record grade-outs, home use and gifts as they happen, or every month will show a gap you cannot explain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month has a filed comparison of harvest against sales and losses, with any gap above 5 percent explained."
                cadence: rolling
              tasks:
                - "Agree the gap between harvest and sales that needs an explanation"
                - "Compare last month's harvest totals with sales and losses @recurring(monthly:5)"
                - "List invoices unpaid beyond the buyer's terms"
                - "Write a one-line result and file it"
            - name: Monthly input stock count
              description: |-
                ## Purpose
                Counting the store tells you what is on the shelf before the supplier's truck arrives and shows when a sack of feed or fertiliser has gone missing. Counting seed, fertiliser, feed, packaging and fuel against the register once a month, and noting what has passed its best-before date, keeps purchases sensible and the register honest.

                ## Milestones
                1. A count sheet listing every input in the register with its storage place.
                2. Physical counts matched against the register and differences noted.
                3. Out-of-date or damaged stock set aside and recorded.
                4. A reorder list written from the count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated stock count is filed each month, with differences against the register explained and a reorder list made."
                cadence: rolling
              tasks:
                - "Print a count sheet from the input register"
                - "Count inputs in every store and compare with the register @recurring(monthly:20)"
                - "Set aside and record stock past its best-before date"
                - "Write the reorder list from what is running low"
            - name: Off-farm backup of the records
              description: |-
                ## Purpose
                One phone dropped in a drain, a flooded shed or a fire can wipe out years of records in one afternoon. A monthly backup, photos of paper pages and an export of the spreadsheet or app saved somewhere off the farm, means the farm's history survives the farm's worst day.

                ## Milestones
                1. A backup place chosen that is not on the farm, such as cloud storage or a relative's house.
                2. Every paper log page photographed and saved in dated folders.
                3. The spreadsheet or app data exported and saved alongside.
                4. A test restore done by opening the backup on another device.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated backup of all farm records exists off the farm for each of the last three months, and one has been opened on another device."
                cadence: rolling
              tasks:
                - "Choose a backup location away from the farm"
                - "Photograph new log pages and export the spreadsheet @recurring(monthly:28)"
                - "Open the backup on a second phone or computer to test it"
                - "Before hurricane season, take a full printed copy to a safe house"
            - name: Rain gauge and farm weather log
              description: |-
                ## Purpose
                National weather stations can be miles away and on the wrong side of a hill. A cheap rain gauge read every morning gives your own rainfall record, which explains yield swings, backs up an insurance or relief claim and helps plan the next planting calendar around the real wet and dry seasons on your land.

                ## Milestones
                1. A rain gauge mounted in the open, away from roofs and trees.
                2. A weather log set up with date, rainfall, and notes on wind, heat or flooding.
                3. Three months of daily readings recorded.
                4. Monthly rainfall totals written alongside the harvest totals.

                ## Notes
                Start from the **Metrics log** template. Read the gauge at the same time each morning and empty it after reading.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The farm has at least three months of daily rainfall readings with monthly totals recorded beside harvest figures."
                cadence: rolling
              tasks:
                - "Buy and mount a rain gauge in an open spot"
                - "Read and empty the rain gauge each morning and log the figure @recurring(daily)"
                - "Add up the month's rainfall and note it by the harvest totals @recurring(monthly:2)"
                - "Note storms, floods and dry spells in the weather log"
            - name: Weekly animal events log
              description: |-
                ## Purpose
                Births, deaths, sales, purchases and moves between pens happen in ones and twos, and each one changes the head count. Writing every event in a log the same day, and copying it into the register each week, keeps the register true and gives the vet, buyer or insurer an exact history for any animal.

                ## Milestones
                1. An events log with date, animal ID, event type, details and who recorded it.
                2. A list of event types agreed: born, bought, sold, died, moved, lost.
                3. Each death recorded with the likely cause and whether the vet saw it.
                4. The register updated from the log every week for a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every birth, death, sale, purchase and move is in the events log, and the register matches the log each week."
                cadence: rolling
              tasks:
                - "Set up the events log with an agreed list of event types"
                - "Hang the events sheet by the pens with a pencil on a string"
                - "Copy the week's animal events into the register @recurring(weekly:sat)"
                - "Note the likely cause of each death and whether the vet saw it"
            - name: Delivery notes and buyer receipts filing
              description: |-
                ## Purpose
                A signed delivery note is the proof that a hotel, supermarket or vendor received a given quantity of a given lot on a given day, and it settles most payment arguments before they start. Using carbon-copy delivery books and filing the signed copies weekly gives a paper trail buyers respect and the forward link from lot to customer.

                ## Milestones
                1. A numbered carbon-copy delivery book in each delivery vehicle.
                2. Every delivery note showing date, buyer, product, lot code, quantity and buyer signature.
                3. Signed copies filed by buyer each week.
                4. Delivery notes matched to invoices and payments in the sales record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery in the last month has a signed, numbered delivery note filed by buyer and matched to the sales record."
                cadence: rolling
              tasks:
                - "Buy numbered carbon-copy delivery books for each vehicle"
                - "Add a lot code line to the delivery note layout"
                - "File the week's signed delivery notes by buyer @recurring(weekly:fri)"
                - "Match each delivery note number to its invoice and payment"
            - name: Labour log by block and task
              description: |-
                ## Purpose
                Knowing that weeding Block 5 took twelve worker-days while Block 2 took four is what tells you where labour money goes. A simple log of who worked, on which block, on what task and for how many hours, completed weekly, also answers buyer questions about who harvested a lot and supports the wage records your accountant needs.

                ## Milestones
                1. A labour log with date, worker, block, task and hours.
                2. Task names standardised to a short list such as plant, weed, pick, pack.
                3. Four weeks of labour entries completed.
                4. Labour hours per block added up for the month.

                ## Notes
                This log is about where the hours went. Pay, contracts and statutory contributions belong in your payroll records.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The labour log shows hours by worker, block and task for four consecutive weeks, with a monthly total per block."
                cadence: rolling
              tasks:
                - "Agree a list of eight standard task names"
                - "Set up the labour log with worker, block, task and hours"
                - "Fill in last week's labour log from the foreman's notes @recurring(weekly:mon)"
                - "Add up labour hours per block at month end"
            - name: Quarterly records review with your partner
              description: |-
                ## Purpose
                Records that only one person reads drift into one person's shorthand. Sitting down each quarter with a spouse, partner or the farm manager to look at the logs, the reconciliation results and the gaps makes the records shared property and turns them into decisions about what to plant, sell or drop next.

                ## Milestones
                1. A quarterly date set with the person who shares the farm decisions.
                2. The last three monthly reconciliations and the yield per block on the table.
                3. Three decisions or questions written down from the review.
                4. Record keeping problems noted and an owner given for each fix.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each quarter has written notes from a records review with at least three decisions or questions and owners for any fixes."
                cadence: cyclic
              tasks:
                - "Agree a quarterly review date with your farm partner"
                - "Hold the quarterly records review and write down three decisions @recurring(quarterly)"
                - "Bring the monthly reconciliations and yield per block"
                - "Give each record keeping fix an owner and a date"
            - name: Yearly season close and records archive
              description: |-
                ## Purpose
                At the end of the farm year, the active logs should be closed, totalled and boxed so the new year starts on clean pages. Archiving the year with a short summary, and keeping records for as long as buyers, lenders and the tax authority expect, means you can answer a question about a lot sold three years ago.

                ## Milestones
                1. Every log closed with year totals: planted, harvested, sold, animals in and out.
                2. A one-page year summary written with the main numbers and lessons.
                3. The year's paper records boxed, labelled and stored dry.
                4. A retention period agreed for each type of record, checked with your accountant.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The farm year is closed with totals in every log, a one-page summary, a labelled archive box and a written retention period."
                cadence: cyclic
              tasks:
                - "Close and total every log for the farm year @recurring(yearly)"
                - "Write a one-page summary of the year's numbers and lessons"
                - "Box and label the year's paper records in a sealed container"
                - "Ask your accountant how long each type of record should be kept"
            - name: One step back, one step forward traceability
              description: |-
                ## Purpose
                Traceability on a farm means being able to name where each input came from, one step back, and who each lot went to, one step forward. Understanding that simple rule, and testing your own records against it with a real crate, shows which links are missing before a buyer finds out for you.

                ## Milestones
                1. The one step back, one step forward idea explained in your own words.
                2. A diagram of your farm's chain from seed and feed suppliers to buyers.
                3. Each link in the diagram matched to the record that proves it.
                4. Missing links listed with the record that would close each one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page diagram shows the farm's supply chain with the record proving each link and a list of missing links."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a short guide on one step back, one step forward traceability"
                - "Draw the farm's chain from suppliers to buyers on one page"
                - "Write the record that proves each link beside the arrow"
                - "List the links with no record behind them"
            - name: What buyers ask for in traceability
              description: |-
                ## Purpose
                Each buyer wants something different: a wholesale vendor may ask nothing, a hotel may want a delivery note, and a supermarket or exporter may want lot codes, a recall contact and planting and spray history on request. Finding out exactly what your current and target buyers require stops you building records nobody needs and missing the one they insist on.

                ## Milestones
                1. Current and target buyers listed with their traceability requirements.
                2. Supplier manuals or forms collected from buyers who have them.
                3. Requirements compared with what your records already hold.
                4. The two or three most important additions agreed.

                ## Notes
                Ask the buyer's quality or purchasing contact directly. Requirements change, so date your notes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated table shows each buyer's traceability requirements beside what the farm records hold, with the top additions agreed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List your current buyers and the ones you want next"
                - "Ask each buyer's quality contact what records they expect"
                - "Collect any supplier manual or record form they use"
                - "Mark which requirements your records already meet"
            - name: Spreadsheet skills for farm records
              description: |-
                ## Purpose
                Five or six spreadsheet skills, such as filters, totals by block, dropdown lists and a simple pivot table, turn a long list of harvest lines into an answer in seconds. Learning them on your own farm data rather than an online example makes them stick and saves hours every month.

                ## Milestones
                1. Dropdown lists set up for block codes, crops and buyers.
                2. A filter used to show one block's full history.
                3. A pivot table or summary showing harvest by block and month.
                4. A protected master copy kept separate from the working file.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The farm spreadsheet has dropdowns for blocks, crops and buyers and a summary table of harvest by block and month."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Watch a short tutorial on dropdown lists in your spreadsheet app"
                - "Add dropdowns for block codes, crops and buyers"
                - "Build a summary of harvest by block and month"
                - "Save a protected master copy separate from the working file"
            - name: Reading yield per block from your own data
              description: |-
                ## Purpose
                Once a season of planting and harvest logs exists, yield per block, per plant or per hectare shows which ground, variety or planting date performs. Learning to calculate and compare these figures, and to allow for weather and pests in the diary, turns records from a chore into the reason you plant differently next year.

                ## Milestones
                1. Yield per block worked out for the main crop in the last season.
                2. Yield per hectare or per plant calculated so blocks of different sizes compare fairly.
                3. The best and worst blocks identified with likely reasons from the diary.
                4. Two changes for next season written down from the comparison.

                ## Notes
                One season is a hint, not proof. Wait for two or three seasons before dropping a block on yield alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of yield per hectare by block for the main crop exists, with best and worst blocks explained and two changes recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Total last season's harvest for each block of the main crop"
                - "Divide each total by block area to get yield per hectare"
                - "Check the diary for weather or pest events in the weakest blocks"
                - "Write two changes for next season from the comparison"
            - name: Dated field photos as evidence
              description: |-
                ## Purpose
                Dated, location-stamped photos show crop stage, storm damage, a flooded block or a delivered load better than any note. Building the habit of photographing each block at key stages, and filing the pictures by block and month, gives evidence for insurers, lenders, buyers and your own memory.

                ## Milestones
                1. Phone camera set to save date and location with every picture.
                2. A list of moments to photograph: planting, flowering, pre-harvest, damage, loaded trucks.
                3. Photos filed in folders by block and month.
                4. A full set of photos for one crop cycle on at least one block.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Farm photos are filed by block and month with date and location data, covering at least one full crop cycle."
                cadence: rolling
              tasks:
                - "Turn on date and location saving in the phone camera"
                - "Write the list of moments to photograph on the shed wall"
                - "Move the month's farm photos into block folders @recurring(monthly:15)"
                - "Photograph every loaded truck before it leaves the farm"
            - name: Writing field notes someone else can read
              description: |-
                ## Purpose
                Writing only 'B3 bad' tells nothing to the extension officer, the buyer's auditor or your own child taking over in ten years. Practising short, complete notes, with date, block, what you saw, how much and what you did, makes the records useful to anyone and stands up when someone checks them.

                ## Milestones
                1. A five-part note pattern agreed: date, block, observation, extent, action.
                2. Ten example notes written to the pattern and kept as a guide.
                3. The pattern shown to everyone who writes in the farm records.
                4. A month of diary entries checked against the pattern.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written five-part note pattern with ten examples is in the records folder, and a month of entries follows it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the five-part note pattern inside the diary cover"
                - "Rewrite ten old vague notes using the pattern"
                - "Show the pattern to everyone who writes farm records"
                - "Check last month's entries against the pattern"
            - name: Learning a farm record app properly
              description: |-
                ## Purpose
                Most farm apps are abandoned in the first month because nobody learned the three screens that matter. Spending a few focused hours setting up blocks, crops and buyers and practising the daily entries until they take under a minute decides whether the app saves time or becomes another login.

                ## Milestones
                1. The farm's blocks, crops, inputs and buyers loaded into the app.
                2. Daily entries for planting, harvest and sales practised until each takes under a minute.
                3. Offline mode tested in the furthest field.
                4. Data exported once to check it can be taken out if you leave the app.

                ## Notes
                Check before committing that the app lets you export everything to a spreadsheet. Records you cannot take with you are a risk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The farm app holds all blocks, crops and buyers, entries take under a minute, offline mode works and a full export has been tested."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Load the farm's blocks, crops and buyers into the app"
                - "Practise a planting, harvest and sale entry until each takes a minute"
                - "Test the app with no signal in the furthest field"
                - "Export all data once to a spreadsheet"
            - name: Using records to plan the next planting
              description: |-
                ## Purpose
                The planting calendar for next season is best built from this season's facts: which blocks yielded, when prices peaked, when the rains came and which buyers ran short. Pulling these together before buying seed turns the records into a plan, with planting dates and quantities chosen on evidence.

                ## Milestones
                1. Yield by block, monthly prices received and rainfall gathered on one sheet.
                2. Months with gaps in supply to key buyers identified from the sales record.
                3. A draft planting calendar with block, crop, quantity and date.
                4. Seed quantities worked out from the calendar.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A planting calendar for next season names block, crop, quantity and date, and cites the yield, price and rainfall records behind it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Put yield, price and rainfall figures for the season on one sheet"
                - "Mark the months when key buyers were short of supply"
                - "Ask the agent to draft a planting calendar from the sheet"
                - "Work out seed quantities for each planned planting"
            - name: Moving from paper to a spreadsheet
              description: |-
                ## Purpose
                Paper works in the field, but adding up a season of harvest lines by hand takes an evening and invites mistakes. Moving the logs into a spreadsheet, while keeping paper in the field where it is practical, gives totals in seconds and a backup that fits on a phone. The trick is to stop copying everything twice.

                ## Milestones
                1. A spreadsheet with tabs for planting, harvest, inputs, animals and sales.
                2. The current season's paper records typed in.
                3. A clear rule on what stays on paper in the field and what goes straight into the spreadsheet.
                4. The first monthly totals produced from the spreadsheet.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spreadsheet holds the current season's records in five tabs, with a written rule on what is recorded on paper first."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Create tabs for planting, harvest, inputs, animals and sales"
                - "Type in the current season's paper records"
                - "Write a rule for what stays on paper and what goes straight in"
                - "Produce last month's totals from the spreadsheet"
            - name: Crate and bin labels for harvested lots
              description: |-
                ## Purpose
                Codes are only useful if they travel with the produce. Waterproof tags, coloured crate clips or printed stickers, with lot code, block and date, make the code visible at the packing table, in the cooler and at the buyer's back door, and stop lots getting mixed when crates are stacked.

                ## Milestones
                1. A label method chosen that survives water, sun and handling.
                2. A label layout with lot code, crop and harvest date.
                3. Labels on every crate of the main crop for a full month.
                4. A rule for what happens when crates from two lots are combined.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every crate of the main crop carries a waterproof label with lot code and date for a month, and a written rule covers mixed lots."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Test two label types in water and sun for a week"
                - "Design a label with lot code, crop and harvest date"
                - "Label every crate of the main crop at the field edge"
                - "Write the rule for combining crates from two lots"
            - name: QR or barcode labels for packed produce
              description: |-
                ## Purpose
                Supermarkets and some exporters scan rather than read, and a printed barcode or QR code on a pack can carry the lot code straight into their system. Deciding whether the volume and buyer requirements justify a label printer and codes, and which standard the buyer uses, avoids buying equipment that does not fit the buyer's scanners.

                ## Milestones
                1. Buyer requirements for barcodes, QR codes or product numbers confirmed in writing.
                2. The cost of a label printer, labels and any product number registration worked out.
                3. A sample label printed and tested at the buyer's receiving point.
                4. A go or no-go decision recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template. Ask the buyer which barcode standard and product numbers they use before buying anything.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on barcode or QR labels is recorded, with buyer requirements, costs and a sample label tested at the buyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer which barcode standard and product numbers they need"
                - "Price a label printer, labels and any registration fees"
                - "Print a sample label and ask the buyer to scan it"
                - "Record the go or no-go decision and why"
            - name: Choosing an animal ID method
              description: |-
                ## Purpose
                Ear tags, notches, tattoos, paint marks, leg bands and microchips each suit different animals, budgets and buyers. Picking one method per species, with a numbering scheme that will not repeat, keeps the register reliable and makes stolen or strayed animals easier to identify.

                ## Milestones
                1. ID methods compared for each species on cost, durability and what the vet or authority accepts.
                2. One method and a non-repeating numbering scheme chosen per species.
                3. Supplies bought and every animal identified.
                4. Tag losses tracked for six months to check the method holds up.

                ## Notes
                Ask your vet or the veterinary authority whether a particular ID method is required for movement or sale of your species.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each species on the farm has a chosen ID method and numbering scheme, every animal is identified, and tag losses are recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the vet which ID methods are accepted for your species"
                - "Compare tags, notches, bands and chips on cost and durability"
                - "Set a numbering scheme that will never repeat"
                - "Identify every animal and record lost tags for six months"
            - name: Voice notes and photos for busy pickers
              description: |-
                ## Purpose
                Pickers with full hands and wet gloves will not write in a notebook, but most will send a voice note or a photo of a crate count on WhatsApp. Setting up a farm records chat where field workers send a quick message per load, which one person copies into the logs, captures data that would otherwise be lost.

                ## Milestones
                1. A farm records group chat with an agreed message format.
                2. Pickers shown how to send a block code, crate count and photo per load.
                3. One person responsible for copying chat messages into the logs daily.
                4. A month where every load has a matching chat message.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For one month every harvested load has a chat message with block code and count, copied into the harvest log the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a farm records group chat for field workers"
                - "Pin a message showing the format: block, crop, crates, photo"
                - "Name the person who copies messages into the logs"
                - "Check at month end that every load has a message"
            - name: Who records what on the farm
              description: |-
                ## Purpose
                Shared responsibility for records means nobody owns them, and the harvest log goes blank the week the owner is sick. Writing down which person keeps which record, who checks it and who covers when they are away makes record keeping part of the job description rather than a favour.

                ## Milestones
                1. Every record listed with the person who writes it and the person who checks it.
                2. A cover person named for each record.
                3. Each person shown their record and how to fill it in.
                4. The list posted in the shed and reviewed after a month.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A posted list names a recorder, a checker and a cover person for every farm record, reviewed after one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every record the farm keeps"
                - "Name the recorder, checker and cover for each"
                - "Walk each person through their record at the shed"
                - "Review the list with the team after a month"
            - name: Mock recall drill on one lot
              description: |-
                ## Purpose
                Buyers who take traceability seriously expect you to find every crate of a problem lot within hours. A mock recall picks a lot from last month and times how long it takes to name its block, planting, inputs, harvest date and every buyer who received it. The first drill nearly always shows a broken link.

                ## Milestones
                1. A lot from the past month chosen at random by someone else.
                2. The lot traced back to block, seed lot and inputs, and forward to every buyer.
                3. Time taken and gaps found written in a short drill report.
                4. Fixes for each gap agreed and dated.

                ## Notes
                Aim to complete a trace in under two hours. Repeat with a different lot each quarter until it is routine.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written drill report shows one lot traced back to inputs and forward to all buyers, with the time taken and fixes for each gap."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask someone else to pick a lot code from last month"
                - "Trace the lot back to block, seed lot and inputs and time it"
                - "Trace the lot forward to every buyer who received it"
                - "Run a mock recall on a different lot @recurring(quarterly)"
            - name: Records ready for a buyer supplier visit
              description: |-
                ## Purpose
                Before a supermarket, hotel group or exporter approves a new supplier, someone often visits the farm and asks to see records. Having the farm map, planting, harvest, input and sales logs, lot code examples and a recall contact laid out in one folder makes the visit short and shows you are a supplier who can answer questions.

                ## Milestones
                1. The buyer's list of records to show confirmed before the visit.
                2. A visit folder with the farm map, logs, lot code examples and recall contact.
                3. Gaps in the last three months of records filled or explained.
                4. Questions asked on the day and follow-ups written down.

                ## Notes
                Food safety audit checklists and certification have their own preparation; this folder is about showing the records trail.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The buyer visit happens with a complete records folder on the table and follow-ups written down within a day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer which records they want to see on the visit"
                - "Build a visit folder with map, logs and lot code examples"
                - "Fill or explain gaps in the last three months of records"
                - "Write down the visitor's questions and follow-ups the same day"
            - name: Records pack for a loan or grant application
              description: |-
                ## Purpose
                Development banks, credit unions and grant schemes ask for evidence that the farm is real and productive: planting, harvest and sales history, animal numbers and receipts. Pulling a clean two or three year records pack together before the application saves weeks of back and forth and shows the lender a farmer who knows the numbers.

                ## Milestones
                1. The lender's or scheme's document list obtained.
                2. Summaries of planting, harvest, sales and animal numbers for the last two or three years.
                3. Supporting receipts and delivery notes sorted behind each summary.
                4. The pack checked by your accountant or the extension officer before submission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A records pack with year summaries and supporting documents matches the lender's or scheme's list and has been checked before submission."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the document list from the lender or grant scheme"
                - "Ask the agent to summarise yearly harvest and sales from the logs"
                - "Sort receipts and delivery notes behind each summary"
                - "Ask your accountant or extension officer to check the pack"
            - name: Rebuilding records after losing them
              description: |-
                ## Purpose
                Theft of a phone, a flooded shed or a notebook left on a truck roof can wipe out months of records. Rebuilding from bank statements, buyer messages, supplier invoices, photos and memory, quickly while people still remember, recovers most of what matters and shows exactly what the backup routine must cover next time.

                ## Milestones
                1. The period and records lost written down.
                2. Bank statements, buyer messages, supplier invoices and photos gathered for that period.
                3. Planting, harvest and sales logs rebuilt and marked as reconstructed.
                4. The backup routine changed to cover what was lost.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Logs for the lost period are rebuilt from outside sources, marked as reconstructed, and the backup routine has been updated."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down which records were lost and for what period"
                - "Download bank statements and supplier invoices for that period"
                - "Ask regular buyers for their purchase records from you"
                - "Mark rebuilt entries as reconstructed in each log"
            - name: End-of-crop records review
              description: |-
                ## Purpose
                When the last pick of a crop is done, the records for that crop are complete for the first time, and the lessons are fresh. Reviewing yield, grade-outs, sales and diary notes for the crop within two weeks of the final harvest catches what to repeat and what to change before the block is replanted.

                ## Milestones
                1. Total yield, grade-out rate and sales value for the crop worked out.
                2. Diary notes for the crop read through and key events listed.
                3. Three things to repeat and three to change written down.
                4. Notes filed with the block's history before replanting.
              priority: medium
              frontmatter:
                mode: event
                output_kind: knowledge
                success_criteria: "Within two weeks of a crop's final harvest, a written review gives yield, grade-out rate, sales value and three changes for next time."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add up yield, grade-outs and sales value for the finished crop"
                - "Read the crop's diary notes and list key events"
                - "Write three things to repeat and three to change"
                - "File the review with the block's history"
            - name: Handling a buyer complaint with your records
              description: |-
                ## Purpose
                When a buyer reports soft fruit, a foreign object or a customer illness, the farm's response depends on how fast it can find the lot and everything that touched it. Working through a real complaint with the records, from lot code to block, inputs, harvest crew and other buyers of the same lot, lets you act on facts and keep the buyer's trust.

                ## Milestones
                1. The complaint written down with date, buyer, product, lot code and what was found.
                2. The lot traced back to block, inputs and harvest day and forward to other buyers.
                3. A cause identified or ruled out, with the evidence noted.
                4. A written reply sent to the buyer and corrective actions dated.

                ## Notes
                Start from the **Remediation plan** template. If illness or a safety hazard is involved, tell the buyer at once and contact the food safety authority as they direct.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A complaint file shows the lot traced both ways, the cause found or ruled out, a written reply to the buyer and dated corrective actions."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the complaint with buyer, product, lot code and date"
                - "Trace the lot back to block and inputs and forward to other buyers"
                - "Write the likely cause and the evidence for it"
                - "Send the buyer a written reply with the actions taken"
            - name: Records for a one-person smallholding
              description: |-
                ## Purpose
                Working alone on a few acres, often alongside another job, leaves maybe ten minutes a day for paperwork. A stripped-down set of records, one notebook with planting, harvest and sales sections and a lot code on every bag, gives most of the benefit of a full system with a fraction of the effort.

                ## Milestones
                1. One notebook divided into planting, harvest, sales and notes sections.
                2. A lot code written on every bag or crate sold.
                3. Ten minutes a day kept for records for a month.
                4. A monthly total of harvest and sales worked out from the notebook.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A single notebook holds a month of planting, harvest and sales entries with lot codes, and a monthly total is written at the end."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Divide one notebook into four labelled sections"
                - "Keep the notebook in the vehicle with a pen clipped to it"
                - "Write the lot code on every bag or crate you sell"
                - "Add up harvest and sales on the last page each month"
            - name: Shared records on a family farm
              description: |-
                ## Purpose
                On a family farm, a parent may plant, a son may sell and a cousin may feed the animals, and each keeps records in a different way, if at all. Agreeing one shared system and a short weekly check at the kitchen table gives the whole family the same picture and heads off arguments about who sold what.

                ## Milestones
                1. Each family member's role in the records agreed out loud.
                2. One shared notebook or spreadsheet that everyone can reach.
                3. A weekly ten-minute records check held for a month.
                4. Disagreements about numbers settled from the records, not memory.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The family uses one shared record system and holds a weekly ten-minute records check for at least four weeks in a row."
                cadence: rolling
              tasks:
                - "Agree at a family meal who keeps which record"
                - "Set up one shared notebook or spreadsheet for everyone"
                - "Hold a ten-minute family records check @recurring(weekly:thu)"
                - "Settle the next disagreement by checking the records together"
            - name: Passing records on when the farm changes hands
              description: |-
                ## Purpose
                When a farm passes to a child, is leased out or is sold, years of knowledge about which block floods, which tree bears and which buyer pays late can vanish with the old farmer. Handing over a records pack with the map, block histories, animal register and buyer list makes the transition far smoother and protects the farm's value.

                ## Milestones
                1. A handover pack with the farm map, block histories, animal register and buyer list.
                2. The outgoing farmer interviewed about each block and the notes written up.
                3. Records walked through together in the field with the incoming farmer.
                4. Archive boxes and digital files transferred with a signed list.

                ## Notes
                Land, inheritance and sale documents need a lawyer. This project is about the working records, which no lawyer will think to ask for.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover pack and signed transfer list are given to the incoming farmer after a field walk through every block."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List what the incoming farmer will need to know"
                - "Record the outgoing farmer talking through each block"
                - "Walk every block together with the map and history"
                - "Sign a list of the boxes and files handed over"
            - name: First-season records for a new farmer
              description: |-
                ## Purpose
                New farmers can set up good records from day one instead of fixing bad habits later. Starting the first season with a map, a planting log, a harvest log and a sales record, and keeping every receipt, means the second season can be planned on evidence and a lender can be shown a real track record after one year.

                ## Milestones
                1. Map, planting, harvest and sales records set up before the first planting.
                2. Every receipt from the first season kept in one envelope.
                3. The first crop's full record from planting to sale complete.
                4. A one-page first-season summary written for the extension officer or lender.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "The first crop has complete records from planting to sale, and a one-page first-season summary is written."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Set up the four basic records before planting"
                - "Start an envelope for every first-season receipt"
                - "Ask the extension officer what records new farmers should keep"
                - "Write a one-page summary at the end of the first crop"
            - name: Records as a member of a farmer group
              description: |-
                ## Purpose
                Pooling produce from several members into one load for a buyer means a problem in one member's crates can get the whole delivery rejected. A member who keeps their own lot codes, harvest weights and delivery receipts can prove what they supplied, get paid fairly and help the group trace a problem to its source.

                ## Milestones
                1. The group's rules for member lot codes and delivery records obtained.
                2. Your own member code added to every crate you deliver.
                3. A receipt kept for every delivery to the group, showing weight and grade.
                4. Group payments checked against your delivery receipts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery to the group carries your member code and has a receipt, and each group payment is checked against them."
                cadence: rolling
              tasks:
                - "Ask the group secretary for the member record rules"
                - "Add your member code to every crate you deliver"
                - "Keep a receipt showing weight and grade for each delivery"
                - "Check each group payment against your receipts"
            - name: Mass balance check for each main crop
              description: |-
                ## Purpose
                A mass balance asks whether what came off the field equals what was sold, stored, graded out and wasted, to within a small margin. Running it for each main crop shows whether produce is leaking through theft, poor grading or unrecorded sales, and it is what serious buyers and certifiers use to test whether a farm's traceability is real.

                ## Milestones
                1. Harvest, sales, storage, grade-outs and waste totals gathered for one crop and month.
                2. The balance worked out and the unexplained difference expressed as a percentage.
                3. An acceptable margin agreed and differences above it investigated.
                4. Mass balance results recorded monthly for each main crop.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly mass balance is recorded for each main crop, with any unexplained difference above the agreed margin investigated in writing."
                cadence: rolling
              tasks:
                - "Gather harvest, sales, storage, grade-out and waste totals for one crop"
                - "Work out the unexplained difference as a percentage"
                - "Agree the margin above which you will investigate"
                - "Run the mass balance for each main crop @recurring(monthly:12)"
            - name: Traceability when buying in from other growers
              description: |-
                ## Purpose
                Topping up orders with produce from neighbours makes the farm responsible for that produce in the buyer's eyes. Giving each supplying grower a code, recording what was bought, when and from which of their blocks, and keeping bought-in lots separate from your own protects your name when something goes wrong.

                ## Milestones
                1. Every supplying grower listed with a supplier code and contact.
                2. A purchase record for bought-in produce with grower, block, date, quantity and lot code.
                3. Bought-in lots kept physically and on paper separate from home-grown lots.
                4. A short agreement with each grower on records they must keep.

                ## Notes
                Some buyers forbid bought-in produce, or require it to be declared. Check your buyer agreement before you start.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Every bought-in lot is recorded with grower code, block and date, kept separate from own produce, and each grower has a written records agreement."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your buyers allow bought-in produce"
                - "Give each supplying grower a code and record their contact"
                - "Record grower, block, date and quantity for each purchase"
                - "Agree in writing the records each grower must keep"
            - name: Farm numbers dashboard on one page
              description: |-
                ## Purpose
                Once the logs are reliable, a single page showing harvest by block, sales by buyer, unpaid invoices, animal numbers, rainfall and the mass balance result gives a monthly picture in five minutes. It turns the records into something you look forward to opening and makes trends obvious long before the year-end summary.

                ## Milestones
                1. Six to eight key numbers chosen for the dashboard.
                2. A one-page sheet that pulls those numbers from the logs.
                3. Three months of history shown so trends are visible.
                4. The dashboard updated monthly and shared with your farm partner.

                ## Notes
                Start from the **Metrics log** template. Fewer numbers read every month beat twenty numbers nobody checks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page dashboard of six to eight farm numbers is updated monthly with at least three months of history."
                cadence: rolling
              tasks:
                - "Choose six to eight numbers that matter most to the farm"
                - "Build a one-page sheet that pulls them from the logs"
                - "Update the dashboard and send it to your farm partner @recurring(monthly:8)"
                - "Circle any number that moved more than 20 percent"
            - name: Pedigree and breeding records for stock
              description: |-
                ## Purpose
                Farms selling breeding goats, sheep, pigs or cattle are judged on proof of parentage and performance. Keeping sire, dam, birth weight, weaning weight and breeding dates for every animal lets you avoid inbreeding, pick the best replacements and sell breeding stock with papers that justify a better price.

                ## Milestones
                1. Sire and dam recorded for every animal born on the farm.
                2. Birth and weaning weights recorded for every young animal.
                3. Mating or service dates and expected birth dates logged.
                4. A breeding stock sheet produced for each animal offered for sale.

                ## Notes
                Agree breeding and health decisions with your vet. Breed societies, where they exist, may have their own record forms.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every animal born on the farm has sire, dam, birth and weaning weights recorded, and breeding stock for sale has a record sheet."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Add sire, dam and weight columns to the animal register"
                - "Borrow or buy a hanging scale for weighing young animals"
                - "Log mating dates and expected birth dates"
                - "Print a breeding record sheet for each animal you sell"
            - name: Sharing farm data with buyers and apps
              description: |-
                ## Purpose
                Buyers, input suppliers, lenders and record apps increasingly ask for farm data, and once shared it can be hard to pull back. Deciding what you will share, with whom and on what terms, and reading the data terms of any app you use, keeps commercially sensitive records such as yields and prices under your control.

                ## Milestones
                1. Every party that receives farm data listed with what they get.
                2. The data terms of each app or platform read and summarised in a line.
                3. A simple rule written on what is shared freely, on request or never.
                4. Any sharing you are not comfortable with stopped or renegotiated.

                ## Notes
                If a contract gives a buyer rights over your data, ask a lawyer to explain it before signing.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written data sharing rule lists who receives which farm records, with each app's data terms summarised and checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who receives data from your farm records"
                - "Read the data terms of each farm app you use"
                - "Write your rule for what is shared freely, on request or never"
                - "Stop any sharing that breaks the rule"
---

# Farm Records and Traceability

Farm Records and Traceability is for growers and livestock keepers who want their records to answer real questions: which block paid, which lot went to which buyer, how many animals are on the farm today. The projects start with foundations such as a numbered farm map, planting, harvest, input, animal and sales logs and a lot code, then move to the weekly and monthly routines that keep them current, the skills of reading and using the data, improvements such as crate labels and moving off paper, dated events like a mock recall or a buyer visit, situations from the one-person plot to the farmer group, and specialist work such as mass balance checks and traceability for an aggregator.

What repeats is the daily field diary and rain gauge, the weekly records catch-up and delivery note filing, the monthly harvest and sales reconciliation, stock count and off-farm backup, a quarterly records review and mock recall, and a yearly season close. The Purchase decision, Operational checklist, Month-end close, Metrics log and Remediation plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
