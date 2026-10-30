---
id: agriculture.agricultural-export-compliance
name: Agricultural Export Compliance
description: "Exporting produce and farm products without stuck shipments: market access checked, licences and phytosanitary steps in place, a document pack that clears first time, cold chain, freight and buyers abroad."
category: business
version: 1.0.0
tags: [agriculture, agricultural-export-compliance, small-business, export, phytosanitary, market-access, cold-chain, freight, diaspora-markets]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - compliance-control
    - metrics-log
    - remediation-plan
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Agricultural Export Compliance
          description: "Exporting fresh and processed produce: market access rules, phytosanitary certificates, packing standards, cold chain, freight and buyers in diaspora markets."
          projects:
            - name: Export product and target market shortlist
              description: |-
                ## Purpose
                Plenty of farmers start exporting because a cousin in Toronto or Brooklyn asked for a box, then find the crop is not admissible there or the freight costs more than the produce. Choosing two or three products and two target markets on paper first, checked against demand, admissibility and landed price, keeps the first export effort pointed at something that can actually clear.

                ## Milestones
                1. A list of every product you could export, fresh or processed, with the volume you could reliably supply each month.
                2. Two or three target markets named for each product, such as the UK, the US, Canada or a neighbouring Caribbean island.
                3. Each pairing marked as likely admissible, unclear or not admissible after a first check.
                4. A shortlist of no more than three product and market pairs chosen to pursue first.

                ## Notes
                Diaspora demand is real but seasonal. A product that sells at Christmas in London may not move in March, so note the months of demand beside each pair.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written shortlist of up to three product and market pairs, each with a monthly supply estimate and a first admissibility check recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every product you could supply for export and the monthly volume of each"
                - "Ask two diaspora buyers or importers which of those products they would order"
                - "Mark each product and market pair as admissible, unclear or not admissible"
                - "Choose the three pairs you will pursue first and write down why"
            - name: Market access check for each target country
              description: |-
                ## Purpose
                Every importing country keeps its own list of which fruits, vegetables and plant products may enter from which origin, and under what conditions: a permit, a treatment, a pest-free area or nothing at all. Looking up each shortlisted product in the importing country's official database, for example the US fruit and vegetable import requirements or Canada's automated import reference system, tells you before you plant or pack whether the door is open.

                ## Milestones
                1. The official import requirements for each shortlisted product found in the importing country's own database or plant health service.
                2. The conditions written down: permit needed, treatment required, inspection on arrival, or prohibited.
                3. Any product that is prohibited from your country taken off the shortlist.
                4. The findings confirmed with your national plant protection organisation or plant quarantine office.

                ## Notes
                Rules differ for the same crop by country of origin, so check the entry for your own country, not the Caribbean in general. Fresh produce in personal luggage follows different rules from commercial consignments.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page access summary for each shortlisted product and market, citing the official source and confirmed with the plant quarantine office."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the official import requirements database for each target country"
                - "Look up each shortlisted product with your country as the origin"
                - "Write the entry conditions for each product on one page"
                - "Ask the plant quarantine office to confirm your reading of the conditions"
            - name: Exporter registration and licences at home
              description: |-
                ## Purpose
                Before the first carton leaves, most Caribbean countries expect an exporter to be registered with customs, to hold a taxpayer number and sometimes an export licence or permit from the trade ministry, and to be known to the plant quarantine service. Getting these in place early avoids the common scramble of applying for a registration while a buyer waits and the produce ripens in the shed.

                ## Milestones
                1. The list of registrations and licences required for your products confirmed with customs and the trade ministry.
                2. A customs or trader registration number issued in the name the buyer will see on the invoice.
                3. Any export licence or permit for controlled products applied for or confirmed as not needed.
                4. Your farm or business registered with the plant quarantine service where it keeps a register of exporters.

                ## Notes
                Use exactly the same business name and address on every registration. A mismatch between the licence, the invoice and the phytosanitary certificate is one of the most common reasons a document is queried.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Copies of every required home-country registration and licence held in the export file, all in one consistent business name."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call customs and ask which registrations an agricultural exporter needs"
                - "Ask the trade ministry whether your products need an export licence"
                - "Submit the registrations using one consistent business name and address"
                - "File a copy of each registration and licence in the export file"
            - name: Phytosanitary certificate process map
              description: |-
                ## Purpose
                A phytosanitary certificate is the official statement from your plant quarantine service that a consignment has been inspected and meets the importing country's requirements, and without it most fresh produce is refused on arrival. Mapping exactly how your local office issues one, how much notice it needs, where inspections happen and what it costs, turns the most feared step in exporting into a routine.

                ## Milestones
                1. The application form, fee and notice period for a phytosanitary certificate confirmed with the plant quarantine office.
                2. The inspection location agreed: at the farm, the packhouse or the port of exit.
                3. The information the inspector needs, including the importing country's additional declarations, written down.
                4. A step by step map from booking to certificate in hand pinned up where you pack.

                ## Notes
                Additional declarations are statements the importing country requires on the certificate, such as freedom from a named pest. If the inspector does not know them, the certificate may be issued without them and the shipment refused.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of the phytosanitary certificate process, with form, fee, notice period, inspection site and required declarations, checked with an inspector."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Visit the plant quarantine office and ask for the certificate application form"
                - "Ask how much notice an inspection needs and where it takes place"
                - "Write down any additional declarations each target market requires"
                - "Draw the booking to certificate steps on one page and pin it in the packing area"
            - name: Export costing from farm gate to buyer's door
              description: |-
                ## Purpose
                Exporters who price from the local market price plus freight usually lose money, because packaging, inspection fees, broker charges, airport handling, insurance, duties at the other end and shrinkage all sit between the farm gate and the buyer. One costing sheet per product and market shows the true cost per kilo or per carton landed and the lowest price worth accepting.

                ## Milestones
                1. Every cost from harvest to delivery listed for one product and market, including fees on both sides.
                2. Costs converted to a figure per carton and per kilogram at a realistic shipment size.
                3. A shrinkage and rejection allowance included rather than assumed to be zero.
                4. A minimum acceptable export price per carton recorded for each product and market pair.

                ## Notes
                Ask the forwarder for a written quote that names every charge. Fuel surcharges, security fees and documentation fees often double the headline airfreight rate.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costing sheet for each shortlisted product and market showing landed cost per carton and a recorded minimum export price."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every cost between harvest and the buyer's door for one product"
                - "Get a written freight quote that itemises every surcharge"
                - "Work out the landed cost per carton at your usual shipment size"
                - "Set and record a minimum price below which you will not ship"
            - name: Incoterms for your first export quotes
              description: |-
                ## Purpose
                Incoterms are the standard three-letter trade terms, such as EXW, FCA, CPT and CIF, that say where your responsibility for the goods, the cost and the risk ends and the buyer's begins. Learning the four or five terms small exporters actually use, and picking one as your default, stops arguments about who pays for the airport handling or who bears the loss when a pallet is left on the tarmac.

                ## Milestones
                1. The current edition of Incoterms identified and the terms commonly used for perishables noted.
                2. Each common term explained in your own words: where delivery happens, who pays what, when risk passes.
                3. A default term chosen for air and one for sea shipments.
                4. The chosen term written, with the named place, on your quote and invoice templates.

                ## Notes
                Always name the place with the term, for example FCA your airport cargo terminal. A term without a place leaves the most important question open.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A default Incoterm with a named place for air and sea shipments, written on your quote and invoice templates."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find a plain-language guide to the current Incoterms edition"
                - "Write where risk and cost pass for EXW, FCA, CPT and CIF"
                - "Ask your forwarder which terms their perishable customers use"
                - "Add your default term and named place to the quote template"
            - name: Standard export document pack
              description: |-
                ## Purpose
                Typically a fresh produce consignment travels with a commercial invoice, a packing list, a phytosanitary certificate, an air waybill or bill of lading, and often a certificate of origin and an import permit copy. Building a standard pack with blank templates and a list of who issues what means every shipment starts from the same folder rather than from memory at four in the morning.

                ## Milestones
                1. Every document required for each product and market listed, with who issues it.
                2. Templates for the commercial invoice and packing list made, using the same consignee details every time.
                3. A worked example pack completed for one imaginary shipment and checked by your broker.
                4. The pack saved where anyone preparing a shipment can find it.

                ## Notes
                Weights, carton counts and descriptions must match across every document. Inspectors and customs officers compare them line by line.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A document pack with a list of required documents per market and filled invoice and packing list templates, reviewed by a customs broker."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the documents each target market requires for each product"
                - "Make commercial invoice and packing list templates with your registered details"
                - "Fill in a practice pack for an imaginary shipment"
                - "Ask your customs broker to check the practice pack for errors"
            - name: Choosing a customs broker and freight forwarder
              description: |-
                ## Purpose
                Good forwarders know which airlines take perishables, which days have space and how to get produce into a cooler at the airport, and a good broker files the export entry correctly the first time. Comparing two or three of each on perishable experience, cut-off times and full charges is worth an afternoon, because they will touch every shipment you make.

                ## Milestones
                1. Three forwarders or brokers identified who already handle fresh produce or food exports.
                2. Each one asked the same questions on routes, cut-off times, cold storage, charges and claims handling.
                3. Written quotes compared for the same sample shipment.
                4. One forwarder and one broker chosen, with contact names and after-hours numbers recorded.

                ## Notes
                Start from the **Vendor** template. Ask each forwarder for one other farmer or processor you can call as a reference.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A forwarder and broker chosen from at least three compared on the same sample shipment, with contacts and quotes on file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the export promotion agency or other exporters for forwarders who handle perishables"
                - "Send three forwarders the same sample shipment for a quote"
                - "Ask each about cooler access, cut-off times and claims handling"
                - "Record the chosen forwarder and broker with after-hours contacts"
            - name: Export compliance file and document register
              description: |-
                ## Purpose
                Buyers, auditors and the plant quarantine office all ask for copies of past certificates, permits, registrations and shipment records, often years later. One export file, paper or digital, with a register showing what each document is, when it expires and where it lives, makes those requests a five-minute job and shows renewal dates before they lapse.

                ## Milestones
                1. One folder structure set up for registrations, permits, certificates and shipment records.
                2. A register listing each standing document with its number, issuer and expiry date.
                3. Every past shipment's documents filed under its shipment reference.
                4. A retention period set for shipment records after asking the broker and the tax authority.

                ## Notes
                Start from the **Compliance control** template. Scan certificates on the day they are issued, since originals travel with the goods and may never come back.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An export file with a register of every standing document and its expiry date, and shipment records filed by reference."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up folders for registrations, permits, certificates and shipments"
                - "List each standing document with its number and expiry date in a register"
                - "Scan and file the documents for every shipment made so far"
                - "File the month's shipment documents and update the register @recurring(monthly:15)"
            - name: Import rules for processed farm products
              description: |-
                ## Purpose
                Pepper sauce, jams, dried sorrel, cassava flour and seasonings face a different gate from fresh produce: food safety rules, labelling law and sometimes facility registration in the importing country. For the US, for example, a food facility usually needs to be registered with the food regulator and shipments need prior notice, while the UK, the EU and Canada have their own labelling and importer rules that the buyer will expect you to meet.

                ## Milestones
                1. The food import rules for each processed product and market identified from the importing regulator's own guidance.
                2. Facility registration, prior notice or importer licence requirements noted, with who is responsible for each.
                3. Label requirements for each market listed: language, ingredients, allergens, net quantity, nutrition panel and origin.
                4. Gaps between your current label and each market's rules written down for the processor or label designer.

                ## Notes
                Low-acid canned and acidified foods can carry extra process filing rules in some markets. Ask the regulator or a food technologist before shipping any sauce or preserve in quantity.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written summary per processed product and market of registration, notice and label rules, with a list of label gaps to fix."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the importing food regulator's guidance for each target market"
                - "Note any facility registration or prior notice the market requires"
                - "Compare your current label against each market's label rules"
                - "Send the list of label gaps to whoever designs your label"
            - name: Weekly export order and shipment calendar
              description: |-
                ## Purpose
                Export orders run backwards from a flight or sailing: harvest, pack, cool, inspect and deliver to the terminal before cut-off. A single weekly calendar that starts from the departure and counts back each step keeps the farm, the packers, the inspector and the forwarder on the same timetable, and shows on Monday which orders cannot be met.

                ## Milestones
                1. A calendar that shows each confirmed shipment with its departure and terminal cut-off.
                2. Harvest, packing, cooling and inspection slots counted back from each departure.
                3. Each order confirmed with the buyer by Monday for that week's shipments.
                4. Orders that cannot be filled declined or moved, in writing, before harvest starts.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shipment for the coming week appears on the calendar by Monday with harvest, packing, inspection and cut-off times filled in."
                cadence: rolling
              tasks:
                - "Set up a shipment calendar that starts from each departure time"
                - "Confirm this week's orders and departures with buyers and the forwarder @recurring(weekly:mon)"
                - "Count back the harvest, packing and inspection times for each shipment"
                - "Tell the buyer in writing when an order cannot be filled"
            - name: Inspection booking routine with plant quarantine
              description: |-
                ## Purpose
                Inspectors are few and their diaries fill quickly before holidays, so a shipment packed without a booked inspection can sit until it spoils. A fixed weekly routine of booking inspections, sending the advance details and confirming the slot the day before makes the inspection a known appointment rather than a hope.

                ## Milestones
                1. The booking method, notice period and contact for inspections confirmed.
                2. Inspections for the coming week's shipments booked on the same day each week.
                3. Consignment details sent ahead so the inspector arrives knowing the market and declarations.
                4. Any missed or late inspection recorded with its cause.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every shipment in a month had its inspection booked at least the required notice period ahead, with no shipment held for lack of an inspector."
                cadence: rolling
              tasks:
                - "Confirm the inspection booking method and notice period with the office"
                - "Book inspections for the coming week's shipments @recurring(weekly:tue)"
                - "Send each inspector the consignment details and required declarations"
                - "Note any inspection that was late or missed and why"
            - name: Pre-shipment document and cargo check
              description: |-
                ## Purpose
                Most export problems are found at the destination but caused at the packing table: a carton count that differs from the invoice, a certificate missing a declaration, an unmarked pallet. A short check run before every consignment leaves, by someone other than the person who prepared it, catches these while they can still be fixed.

                ## Milestones
                1. A one-page checklist covering documents, carton marks, pallet treatment, temperature and counts.
                2. The check run and signed for every consignment before it leaves the farm or packhouse.
                3. Mismatches between documents fixed before departure rather than explained afterwards.
                4. A month of signed checklists filed with the shipment records.

                ## Notes
                Start from the **Operational checklist** template. Compare the phytosanitary certificate against the invoice line by line: product name, botanical name, quantity and consignee.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A signed pre-shipment checklist exists for every consignment in the past month, with no document mismatches raised by the buyer."
                cadence: rolling
              tasks:
                - "Write a one-page pre-shipment checklist for documents, marks, pallets and counts"
                - "Run the checklist on the week's consignments before they leave @recurring(weekly:thu)"
                - "Fix any mismatch between the certificate, invoice and packing list before departure"
                - "File each signed checklist with its shipment documents"
            - name: Market access rule watch
              description: |-
                ## Purpose
                Import conditions change: a new pest detection in your country can suspend a product overnight, a market can add a treatment requirement, and labelling rules shift with new food law. A monthly look at the official notices for each market you ship to, and at any interceptions reported against your country, gives warning before a consignment is refused.

                ## Milestones
                1. A list of the official pages and notice services to check for each market.
                2. Email alerts or notice subscriptions set up where the importing country offers them.
                3. Changes found each month written in a short log with the date and the action needed.
                4. Any change affecting a current product passed to buyers and the forwarder the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log entry for each market shipped to, with every rule change acted on within one week of being found."
                cadence: rolling
              tasks:
                - "List the official notice pages for each market you ship to"
                - "Subscribe to any import alert or plant health notice service offered"
                - "Check each market's notices and log any change @recurring(monthly:12)"
                - "Tell buyers and the forwarder about any change that affects current orders"
            - name: Cold chain temperature log per consignment
              description: |-
                ## Purpose
                Fresh produce that warms up for two hours on an airport apron can arrive soft, and a buyer's claim is hard to answer without a record. A temperature log from the cooler to the aircraft or container, using a simple data logger in a carton on each consignment, shows where the chain broke and who is responsible.

                ## Milestones
                1. The target holding temperature for each export product agreed with the buyer or an extension officer.
                2. A temperature data logger or recorded spot checks used on every consignment.
                3. Pulp or room temperatures recorded at harvest, after cooling and at handover.
                4. Logs reviewed weekly and any break traced to a stage of the chain.

                ## Notes
                Start from the **Metrics log** template. Tropical produce such as mango, banana and dasheen can suffer chilling injury if held too cold, so colder is not always better.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every consignment in a month has a temperature record from cooling to handover, reviewed weekly with breaks traced."
                cadence: rolling
              tasks:
                - "Agree the holding temperature for each product with the buyer"
                - "Buy or borrow a small temperature data logger for cartons"
                - "Record pulp temperature after cooling and at handover for each shipment"
                - "Review the week's temperature records and mark any breaks @recurring(weekly:fri)"
            - name: Export payment and receivables tracking
              description: |-
                ## Purpose
                Overseas buyers often pay thirty to sixty days after arrival, deduct for claims, and pay in a foreign currency through banks that charge on both ends. Tracking each invoice from shipment to money in your account shows who pays on time, what the bank fees really cost, and when to stop shipping on credit to a slow buyer.

                ## Milestones
                1. A receivables list showing each export invoice, its due date and the amount received.
                2. Bank charges and exchange differences recorded against each payment.
                3. Overdue invoices chased in writing on a fixed day each month.
                4. A credit limit set for each buyer based on their payment record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A receivables list with every export invoice, payments received and fees recorded, and no invoice more than 30 days overdue without a written chase."
                cadence: rolling
              tasks:
                - "List every unpaid export invoice with its due date"
                - "Record the amount received, bank fees and exchange rate for each payment @recurring(monthly:5)"
                - "Send written reminders for every overdue export invoice @recurring(monthly:20)"
                - "Set a credit limit for each buyer from their payment history"
            - name: Rejection, interception and claims log
              description: |-
                ## Purpose
                A rejected carton, a pest interception at the port of entry or a buyer's quality claim each carry a lesson, but only if they are written down with the cause. A single log of every problem, with the shipment reference, the reason given and what was changed, shows patterns such as one crop, one packer or one route that keeps failing.

                ## Milestones
                1. A log with columns for date, shipment, problem, cause, cost and action taken.
                2. Every rejection, interception and claim from the past year entered.
                3. The log reviewed monthly and repeat causes marked.
                4. One change made for each repeated cause and its effect noted.

                ## Notes
                An interception notice from the importing country is also sent to your plant protection organisation. Answer it promptly and in writing, since repeated interceptions can lead to tighter checks for every exporter in your country.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every rejection, interception and claim in the past year is logged with a cause, and the log was reviewed in each of the last three months."
                cadence: rolling
              tasks:
                - "Set up a log for rejections, interceptions and claims"
                - "Enter every problem shipment from the past year"
                - "Review the log and mark any cause that has happened twice @recurring(monthly:27)"
                - "Agree one change for each repeated cause with the person responsible"
            - name: Freight rate and cargo space check
              description: |-
                ## Purpose
                Airfreight rates and space for perishables swing with tourist season, fuel prices and airline schedules, and a route that worked in March may be full in December. A monthly check of rates, cut-off times and space on your main routes keeps your costing honest and gives early warning when you need to book further ahead or switch carrier.

                ## Milestones
                1. Current rates, surcharges and cut-off times recorded for each main route.
                2. Schedule changes and peak season restrictions noted from the forwarder.
                3. The costing sheet updated when any rate moves by more than a set amount.
                4. A second routing identified for each main market.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Rates and cut-offs for each main route recorded monthly, with the export costing updated whenever a rate moves past the agreed threshold."
                cadence: rolling
              tasks:
                - "Ask the forwarder for current rates and cut-offs on each main route @recurring(monthly:8)"
                - "Note any schedule changes or peak season space limits"
                - "Update the export costing sheet when a rate moves past your threshold"
                - "Identify a second routing for each main market"
            - name: Quarterly export compliance review
              description: |-
                ## Purpose
                Small exporters rarely fail on one big thing; they drift, with a lapsed registration here and an unanswered interception there. A quarterly review of the export file, the rule watch log, the rejection log and the receivables list, done in one sitting, catches the drift and keeps the risk register current.

                ## Milestones
                1. Standing documents checked for any expiring in the next six months.
                2. Rule changes from the quarter confirmed as acted on.
                3. Rejections, interceptions and overdue payments summarised in a paragraph.
                4. The export risk register updated with new or closed risks.

                ## Notes
                Keep the review to two hours. If it routinely runs longer, the monthly routines are not being kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated review note each quarter covering expiring documents, rule changes, problem shipments and the updated risk register."
                cadence: cyclic
              tasks:
                - "Run the export compliance review and write a short dated note @recurring(quarterly)"
                - "List standing documents expiring in the next six months"
                - "Summarise the quarter's rejections and overdue payments"
                - "Update the export risk register with new and closed risks"
            - name: Yearly licence, permit and registration renewals
              description: |-
                ## Purpose
                Exporter registrations, import permits held by buyers, facility registrations and certifications all expire on their own cycles, and an expired import permit at the other end stops a shipment just as surely as a missing certificate. Setting one yearly renewal sweep, with dates pulled from the document register, means nothing lapses during the busy season.

                ## Milestones
                1. Every renewable document listed with its renewal date and lead time.
                2. Reminders set far enough ahead of each renewal to allow for processing.
                3. Buyers asked to confirm that their import permits are current for the coming year.
                4. Renewed documents filed and the register updated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No registration, permit or certificate used for exporting lapsed in the past year, with renewals recorded in the document register."
                cadence: cyclic
              tasks:
                - "Pull every renewal date and lead time from the document register"
                - "Run the yearly renewal sweep across licences, permits and registrations @recurring(yearly)"
                - "Ask each buyer to confirm their import permit is valid for the year"
                - "File renewed documents and update the register"
            - name: Reading an import permit and its conditions
              description: |-
                ## Purpose
                Where a market requires an import permit, it is usually issued to the importer, not to you, yet its conditions decide how you must pack, treat, label and certify. Learning to read one properly, from the permitted ports of entry to the wording required on the phytosanitary certificate, means you can spot an impossible condition before you agree to an order.

                ## Milestones
                1. A real or sample import permit for one of your products obtained from a buyer.
                2. Each condition on it listed in plain language with what you must do.
                3. Conditions that fall on you, the buyer or the inspector separated.
                4. Any condition you cannot meet raised with the buyer before the first order.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language list of conditions from one real import permit, split by who is responsible, shared with the buyer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a buyer for a copy of their import permit for your product"
                - "List each permit condition in plain language"
                - "Mark which conditions fall on you, the buyer or the inspector"
                - "Raise any condition you cannot meet with the buyer in writing"
            - name: Quarantine pests that matter for your crop
              description: |-
                ## Purpose
                Importing countries refuse consignments mainly because of quarantine pests: fruit flies in mango and pepper, mealybugs and scale insects on fruit and foliage, weevils in root crops, and soil on tubers. Knowing which pests each market worries about for your crop, and how they are detected at inspection, lets you scout and pack with the inspector's eyes.

                ## Milestones
                1. The quarantine pests listed by each target market for your crop and origin.
                2. A photo sheet of each pest and its damage made for packers and pickers.
                3. The field and packing checks that would find each pest agreed with the extension officer.
                4. Packers able to name and spot the main pests on a sample of produce.

                ## Notes
                Control measures are a matter for your extension officer and integrated pest management plan. This project is about recognising what the inspector is looking for, not about which product to spray.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A photo sheet of the quarantine pests for each product and market, used in a packer briefing where every packer identified the main pests."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the plant quarantine office which pests each market lists for your crop"
                - "Make a photo sheet of each pest and its damage"
                - "Agree field and packing checks for those pests with the extension officer"
                - "Brief packers with the photo sheet and test them on sample produce"
            - name: Export carton marking and labelling
              description: |-
                ## Purpose
                Importing countries and buyers expect cartons to carry specific marks: product and variety, country of origin, net weight, grade, the packer or exporter's name and a lot or batch code that links back to the field and packing date. Learning what each market requires and printing it consistently means a carton can be traced if anything goes wrong, and an inspector has no reason to hold it.

                ## Milestones
                1. The carton marking requirements for each market and buyer collected in one list.
                2. A standard carton label laid out with every required field.
                3. A lot code format chosen that links each carton to field, harvest date and pack date.
                4. A sample labelled carton approved by the buyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A buyer-approved carton label with all required market marks and a lot code that links back to field and pack date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the carton marking rules for each market and buyer"
                - "Lay out a carton label with every required field"
                - "Choose a lot code format linking field, harvest date and pack date"
                - "Send a photo of a sample labelled carton to the buyer for approval"
            - name: Wood pallets and packaging materials to ISPM 15
              description: |-
                ## Purpose
                Wooden pallets, crates and dunnage moving between countries must usually be treated and stamped under the international standard ISPM 15, and an unstamped pallet can get an otherwise perfect shipment held or the pallet destroyed. Learning what the stamp looks like, where to buy compliant pallets and when plastic or cardboard is simpler takes an hour and removes a needless risk.

                ## Milestones
                1. The ISPM 15 mark and its parts understood: treatment code, country code and producer number.
                2. A local supplier of stamped heat-treated pallets found, or a switch to plastic or cardboard pallets decided.
                3. Every pallet checked for a clear mark before loading.
                4. Packing materials such as straw, leaves or used sacks ruled out for export cartons.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All export pallets come from a named supplier of stamped heat-treated wood or are non-wood, checked before every loading."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up a picture of the ISPM 15 mark and what each part means"
                - "Ask the forwarder or plant quarantine office for a stamped pallet supplier"
                - "Compare the cost of stamped wood pallets with plastic or cardboard"
                - "Add a pallet mark check to the pre-shipment checklist"
            - name: Cold chain basics for fresh produce exports
              description: |-
                ## Purpose
                Each crop has its own ideal holding temperature and humidity, some give off ethylene that ripens others, and the minutes between field and cooler matter more than the hours in the hold. Learning these basics for your own crops, with an extension officer or a post-harvest specialist, shows which cooler you need, which products cannot share a container and how long each will really last.

                ## Milestones
                1. A sheet for each export crop with its recommended holding temperature, humidity and expected storage life, from a reliable source.
                2. Products that produce or react to ethylene identified, with rules for not mixing them.
                3. Time from harvest to cooler measured for one week of shipments.
                4. One change to reduce field heat agreed, such as earlier picking or shade at the collection point.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A cold chain sheet for every export crop, a measured harvest to cooler time, and one agreed change to reduce field heat."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find recommended holding temperatures for each export crop from a post-harvest guide"
                - "Note which products should not share a cooler or container"
                - "Time harvest to cooler for every shipment for one week"
                - "Agree one change with pickers that cuts field heat"
            - name: Rules of origin and trade preference claims
              description: |-
                ## Purpose
                Caribbean exports can enter some markets at lower or zero duty under trade arrangements, such as the CARIFORUM and EU agreement, the CARICOM single market or preference programmes in North America, but only if the goods meet the rules of origin and the right certificate is presented. Learning which preference applies to each product and how to obtain the certificate of origin can take several percent off the buyer's landed cost.

                ## Milestones
                1. The trade arrangements that cover each product and market identified with the trade ministry or export agency.
                2. The origin rule for each product understood, especially for processed goods using imported ingredients.
                3. The certificate of origin form and issuing body confirmed.
                4. The duty saving for the buyer worked out and mentioned in your quotes.

                ## Notes
                Fresh produce grown on your farm usually qualifies easily. Processed products with imported sugar, vinegar or bottles need checking against the specific origin rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note per product and market naming the trade preference, its origin rule, the certificate needed and the duty saving to the buyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the export agency which trade arrangements cover your products and markets"
                - "Check the origin rule for any product with imported ingredients"
                - "Confirm which body issues certificates of origin and the fee"
                - "Work out the buyer's duty saving and add it to your quote notes"
            - name: Quoting in foreign currency and managing exchange
              description: |-
                ## Purpose
                Export buyers expect prices in their own currency or in US dollars, yet your costs are in local currency and the rate can move between quote and payment. Learning to quote with a stated validity period, a buffer for exchange movement and clear bank charge terms protects the margin you worked out in the costing sheet.

                ## Milestones
                1. A quote template that states currency, Incoterm, validity period and who pays bank charges.
                2. The exchange rate used for each quote recorded, with a buffer agreed.
                3. A foreign currency account or the bank's conversion terms understood after talking to your banker.
                4. A monthly comparison of quoted and received rates on past shipments.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A quote template with currency, validity and charge terms in use, and a monthly record comparing quoted and received exchange rates."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add currency, validity period and bank charge terms to the quote template"
                - "Ask your banker about foreign currency accounts and conversion fees"
                - "Record the exchange rate and buffer used on each quote"
                - "Compare quoted and received rates on last month's payments @recurring(monthly:3)"
            - name: Export payment methods and letters of credit
              description: |-
                ## Purpose
                Cash in advance, open account, documentary collection and letters of credit each move the risk of non-payment between exporter and buyer, and the right one depends on how well you know the buyer and how big the order is. Learning how each works with your bank, before a large order arrives, avoids shipping a container on a handshake to someone you have never met.

                ## Milestones
                1. The four common payment methods understood in terms of who carries the risk.
                2. Your bank's trade finance contact found and its documentary collection and letter of credit fees noted.
                3. A rule written for which payment method applies to new, regular and large orders.
                4. The rule shared with any family member or staff who takes orders.

                ## Notes
                Letters of credit are strict about documents: a spelling difference between the credit and the invoice can delay payment. Ask the bank to check the draft credit before you accept the order.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written payment method rule by buyer type and order size, based on a conversation with your bank's trade finance contact."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain guide to cash in advance, open account, collections and letters of credit"
                - "Ask your bank for its trade finance contact and fees"
                - "Write a payment method rule for new, regular and large orders"
                - "Share the rule with everyone who takes export orders"
            - name: Air freight versus sea freight for each product
              description: |-
                ## Purpose
                Airfreight suits fragile, high-value or short-lived produce such as herbs, peppers and ripe fruit, while refrigerated sea containers suit root crops, coconuts and processed goods at a fraction of the cost per kilo, if you can fill them and wait. Comparing both for each product on cost, transit time, shelf life and minimum volume settles which mode to build the business around.

                ## Milestones
                1. Transit times, rates and minimum volumes collected for air and sea on each route.
                2. Shelf life of each product compared against door to door transit time.
                3. Landed cost per carton worked out for both modes.
                4. A mode chosen for each product, with the volume at which you would switch.

                ## Notes
                Shared refrigerated containers, where a consolidator combines several exporters' cargo, can make sea freight possible at smaller volumes. Ask the forwarder whether one runs to your market.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded freight mode for each export product, backed by landed cost and transit time against shelf life for both options."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Get air and refrigerated sea quotes for the same shipment"
                - "Compare each product's shelf life with door to door transit"
                - "Work out landed cost per carton for both modes"
                - "Record the chosen mode and the volume at which you would switch"
            - name: Export packaging upgrade trial
              description: |-
                ## Purpose
                Local market crates and sacks do not survive an aircraft hold or a two-week sailing, and poor cartons are a common cause of bruising, crushing and rejected loads. Trialling export-grade cartons with proper ventilation, liners where needed and correct stacking on a small shipment shows whether the extra cost pays back in fewer claims.

                ## Milestones
                1. Two or three carton options sourced, with strength, ventilation and cost per unit noted.
                2. A trial shipment sent in the new packaging alongside the old.
                3. Condition on arrival reported by the buyer for both.
                4. A packaging standard chosen and written into the packing instructions.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A packaging standard recorded in the packing instructions, chosen from a trial with buyer-reported arrival condition for at least two options."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the forwarder and buyer which carton specifications they expect"
                - "Source samples of two or three export cartons with prices"
                - "Send a trial shipment in old and new packaging"
                - "Write the chosen carton and stacking pattern into the packing instructions"
            - name: Quarantine treatment options for restricted markets
              description: |-
                ## Purpose
                Some markets only accept certain fruit, such as mango or papaya from fruit fly areas, after an approved treatment like hot water immersion, vapour heat or irradiation at a certified facility. Finding out which treatment each market accepts, whether an approved facility exists within reach and what it costs per kilo tells you whether that market is realistic at all.

                ## Milestones
                1. The approved treatments for each restricted product and market identified from the importing country's rules.
                2. Approved treatment facilities in your country or region located, with capacity and booking terms.
                3. Treatment cost per kilo added to the export costing.
                4. A decision recorded on whether to pursue the market, use a facility or wait.

                ## Notes
                Treatment schedules are set by the importing country and supervised by inspectors. Do not attempt your own version on the farm; only an approved facility's treatment will be accepted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision for each restricted product and market, based on the approved treatment, facility access and cost per kilo."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Look up the approved treatments each market requires for your fruit"
                - "Ask the plant quarantine office where approved facilities operate"
                - "Get a treatment price per kilo and booking terms"
                - "Decide whether the restricted market is worth pursuing now"
            - name: Cargo and export credit insurance decision
              description: |-
                ## Purpose
                Perishable cargo can be lost to a delayed flight, a failed reefer or a buyer who never pays, and standard freight liability pays very little per kilo. Comparing marine cargo insurance and export credit insurance, where your export agency or a private insurer offers it, against your shipment values tells you which risks to insure and which to carry.

                ## Milestones
                1. The carrier's and forwarder's liability limits per kilo written down.
                2. Quotes or terms for cargo insurance on perishables obtained.
                3. Export credit insurance options for buyer non-payment checked with the export agency or a broker.
                4. A decision recorded on which covers to buy, with the renewal date.

                ## Notes
                Cargo policies often exclude spoilage unless caused by a named event such as a refrigeration breakdown. Read the perishables clause with the broker before buying.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded insurance decision covering cargo loss and buyer non-payment, with policy terms or the reason for not insuring on file."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the forwarder for the carrier liability limit per kilo"
                - "Get a cargo insurance quote that covers perishables"
                - "Ask the export agency about export credit insurance"
                - "Review insurance covers against the year's shipment values @recurring(yearly)"
            - name: Fixing the causes of rejected consignments
              description: |-
                ## Purpose
                After a rejection or an interception, the instinct is to blame the inspector or the airline and ship again the same way. A short remediation plan, with the root cause, the fix, who owns it and how you will know it worked, is what buyers and your plant protection organisation want to see, and it is the only thing that stops the second rejection.

                ## Milestones
                1. The rejected consignment's documents, photos and notices gathered in one place.
                2. A root cause agreed with packers, the forwarder and, where relevant, the inspector.
                3. Corrective actions listed with an owner and a date.
                4. The next three shipments checked to confirm the fix held.

                ## Notes
                Start from the **Remediation plan** template. Send the buyer a short written summary of the cause and fix; it often saves the account.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written remediation plan with root cause, owned actions and the result of the next three shipments, shared with the buyer."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Gather the rejection notice, documents and arrival photos"
                - "Meet packers and the forwarder to agree the root cause"
                - "List corrective actions with an owner and date for each"
                - "Send the buyer a written summary of the cause and the fix"
            - name: Buyer certification requirements gap check
              description: |-
                ## Purpose
                Overseas importers and supermarket chains often require a farm certification such as GlobalG.A.P., organic or a fair trade label before they will list a supplier, and the cost and effort differ hugely. Asking each serious buyer exactly which scheme they require, and comparing that against where your farm stands, avoids paying for a certificate no buyer asked for.

                ## Milestones
                1. Each target buyer asked in writing which certification, if any, they require.
                2. The cost, audit cycle and time to certify noted for each scheme mentioned.
                3. A rough gap list made against the scheme most buyers ask for.
                4. A decision recorded on whether to certify, and for which buyers.

                ## Notes
                The detailed work of meeting a scheme belongs with your food safety and good agricultural practice records. This project is the export decision: which buyers need which certificate, and is it worth it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on which certification to pursue, if any, based on written buyer requirements and scheme costs."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each target buyer in writing which certification they require"
                - "Note the cost and audit cycle of each scheme mentioned"
                - "List the main gaps against the scheme most buyers require"
                - "Record whether to certify and for which buyers"
            - name: First trial shipment to an overseas buyer
              description: |-
                ## Purpose
                Sending a first shipment of a few cartons to a diaspora grocer or importer in London, New York or Toronto tests every step: the licence, the inspection, the documents, the forwarder, the cold chain and the payment. Treating it as a planned trial, with a debrief afterwards, finds the weak link while the stakes are a few hundred dollars rather than a container.

                ## Milestones
                1. One buyer agreed to a trial order with price, Incoterm and payment method in writing.
                2. Inspection, documents and freight booked against a set departure date.
                3. The consignment delivered and its arrival condition photographed by the buyer.
                4. A debrief note written listing what went right, what went wrong and what changes.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trial consignment delivered and paid for, with arrival photos and a written debrief on file."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree a small trial order with one buyer in writing"
                - "Book the inspection and freight for a set departure date"
                - "Ask the buyer to photograph the cartons on arrival"
                - "Write a debrief of the trial within a week of payment"
            - name: Preparing for an importing country audit visit
              description: |-
                ## Purpose
                Opening or keeping some markets involves a visit from the importing country's plant health officials, or a preclearance programme where their inspectors check produce before departure. When your farm or packhouse is chosen for a visit, preparing the records, the site and the people properly reflects on every exporter in the country, not just you.

                ## Milestones
                1. The scope and date of the visit confirmed with your plant protection organisation.
                2. Records the auditors may ask for gathered: pest monitoring, packing, traceability and shipment files.
                3. The site walked with the extension or quarantine officer and issues fixed.
                4. Findings from the visit recorded with actions and dates.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit visit completed with records ready on the day, and a written list of findings with an action and date for each."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the plant protection organisation for the visit scope and date"
                - "Gather pest monitoring, packing and shipment records in one folder"
                - "Walk the site with the quarantine officer a week before the visit"
                - "Write up the auditors' findings with actions and dates"
            - name: Diaspora festive season export peak
              description: |-
                ## Purpose
                Demand from Caribbean communities abroad peaks around Christmas, Easter, Divali, Eid and carnival seasons, for sorrel, peppers, seasonings, ground provisions and sauces, and so do freight rates and competition for cargo space. Planning the peak months ahead, with buyer volumes, booked space and extra inspections agreed, turns a scramble into the best sales weeks of the year.

                ## Milestones
                1. Peak dates and expected volumes agreed with each regular buyer.
                2. Cargo space booked or reserved with the forwarder for the peak weeks.
                3. Extra inspection slots requested from plant quarantine ahead of holidays.
                4. Packing labour, cartons and labels in place before the first peak order.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every peak season order shipped on its planned departure, with space, inspections and packaging arranged in advance."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask each regular buyer for their peak season volumes and dates"
                - "Reserve cargo space for the peak weeks with the forwarder"
                - "Request extra inspection slots for the weeks before holidays"
                - "Start planning the next festive peak with buyers @recurring(yearly)"
            - name: Exhibiting at an overseas food trade show
              description: |-
                ## Purpose
                Trade shows for ethnic and specialty foods, and Caribbean export showcases run by regional export agencies, put an exporter in front of dozens of importers in two days. Going prepared, with samples that are allowed into the host country, a price list built on real landed costs and a follow-up plan, is the difference between a stack of business cards and three real orders.

                ## Milestones
                1. One show chosen, with booth or shared pavilion support confirmed from the export agency where offered.
                2. Rules for bringing food samples into the host country checked and met.
                3. A price list, spec sheets and a short company profile printed.
                4. Every lead followed up in writing within two weeks of the show.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Attendance at one trade show with compliant samples, a landed-cost price list and written follow-up sent to every lead within two weeks."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the export agency which shows have a Caribbean pavilion this year"
                - "Check the host country's rules on bringing in food samples"
                - "Prepare a price list and spec sheet for each product"
                - "Follow up every lead in writing within two weeks"
            - name: Responding to a detained or refused shipment
              description: |-
                ## Purpose
                When a consignment is detained at the port of entry, by the plant health service for a pest or by the food regulator for a label or documentation issue, the clock runs fast and the options shrink: re-export, treatment, relabelling or destruction. Having a response plan ready, with who to call and what to send, saves the produce more often than you would expect.

                ## Milestones
                1. A one-page response plan with contacts for the buyer, forwarder, broker and your plant protection organisation.
                2. The usual options after detention listed for each market: treat, relabel, re-export or destroy.
                3. Documents needed to answer a detention gathered in the export file.
                4. Any actual detention handled and written up in the rejection log.

                ## Notes
                Answer detention notices in writing and within the stated deadline. Some regulators place repeat offenders on import alerts that hold every future shipment until cleared.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A one-page detention response plan with contacts and options per market, stored in the export file and known to whoever ships."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a contact list for buyer, forwarder, broker and plant protection office"
                - "Ask the broker what options follow a detention in each market"
                - "Put the documents a detention response needs into the export file"
                - "Walk through the plan with whoever handles shipments"
            - name: Shipping disruption contingency plan
              description: |-
                ## Purpose
                Hurricanes close ports and airports, airlines drop routes, strikes stop customs, and a reefer plug failure can lose a whole container. A short contingency plan for the disruptions most likely on your routes, with an alternative route, a local outlet for produce that cannot ship and a buyer communication script, limits the damage when the expected becomes real.

                ## Milestones
                1. The disruptions most likely on each route listed in a risk register with likelihood and impact.
                2. An alternative routing or carrier identified for each main market.
                3. A local or processing outlet arranged for produce that cannot ship in time.
                4. A buyer message drafted for delays, ready to send.

                ## Notes
                Start from the **Risk register** template. Review it before each hurricane season and after any route change.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A risk register of route disruptions with an alternative route, a fallback outlet and a ready buyer message for each main market."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the disruptions most likely on each shipping route"
                - "Ask the forwarder for an alternative routing to each main market"
                - "Arrange a local buyer or processor for produce that cannot ship"
                - "Draft a delay message to send buyers when shipments are held"
            - name: End of export season review
              description: |-
                ## Purpose
                Most export crops have a season, and the weeks after it ends are the only calm time to ask what each product and market actually earned. A yearly review of volumes, prices, costs, rejections and payments by buyer decides which markets to grow, which to drop and what to fix before the next season starts.

                ## Milestones
                1. Volumes, revenue and landed cost totalled by product and market for the season.
                2. Rejections, claims and late payments summarised by buyer.
                3. Each product and market pair marked grow, keep or drop.
                4. Three changes for next season written down and dated.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly season review with results by product and market, a grow, keep or drop mark for each, and three dated changes."
                cadence: cyclic
              tasks:
                - "Total the season's volumes, revenue and landed costs by product and market"
                - "Summarise rejections and late payments by buyer"
                - "Mark each product and market pair grow, keep or drop"
                - "Hold the end of season export review and write three changes @recurring(yearly)"
            - name: Part-time farmer's first export through an aggregator
              description: |-
                ## Purpose
                Farmers with a job in town and a few acres rarely have the hours to register as an exporter, book inspections and meet flights at dawn. Supplying an established exporter or aggregator to export standard is the realistic first step, and it teaches export grading, packing and timing without the paperwork falling on evenings and weekends.

                ## Milestones
                1. One or two aggregators who export your crop identified and visited.
                2. Their grade, packing and delivery requirements written down.
                3. A first delivery made to export standard and paid at the export grade price.
                4. A note made of what fell short and how to fix it before the next delivery.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three deliveries to an aggregator accepted at export grade, with requirements and shortfalls recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the extension officer which aggregators export your crop"
                - "Visit one aggregator and write down their grade and packing rules"
                - "Make a first delivery packed to their export standard"
                - "Note what the aggregator rejected and why"
            - name: Farmer group exporting under one registration
              description: |-
                ## Purpose
                Five farmers with half a pallet each cannot fill a regular export order alone, but together they can, if one entity holds the exporter registration and the group agrees standards, payment shares and who carries a rejected carton. Setting this up properly, with a written agreement and shared records, is how many Caribbean producer groups have reached overseas buyers.

                ## Milestones
                1. The group's legal form chosen with advice: cooperative, company or one lead farmer exporting for others.
                2. A written agreement covering grade standards, lot coding by farm, pricing, payment timing and rejection costs.
                3. One exporter registration and forwarder account held by the group entity.
                4. A monthly meeting held to review volumes, quality and payments.

                ## Notes
                Code every carton to the farm that grew it. When a rejection comes back, the group needs to know whose produce it was without arguing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed group export agreement, one group exporter registration and minutes from three monthly review meetings."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the cooperative department or extension service about group structures"
                - "Draft a group agreement on grades, lot codes, pricing and rejections"
                - "Register the group entity as exporter and open the forwarder account"
                - "Hold the group's monthly volumes, quality and payment meeting @recurring(monthly:10)"
            - name: Small sauce maker's first export order
              description: |-
                ## Purpose
                A pepper sauce or seasoning business that sells well at home faces a different checklist for its first overseas order: the importer's requirements, label changes for the market, facility registration where needed, glass breakage in transit and a minimum order that fills a pallet. Working through these for one buyer and one market turns a promising enquiry into a shipment that clears.

                ## Milestones
                1. One importer's written requirements for product, label, documents and pallet configuration received.
                2. Labels changed to meet the market's rules and approved by the importer.
                3. Any facility registration or product filing completed or confirmed as handled by the importer.
                4. A first pallet shipped with breakage protection and arrival condition reported.

                ## Notes
                Ask the importer who files what. In several markets the importer of record carries duties the exporter assumes are theirs, and the reverse.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first pallet of processed product shipped with importer-approved labels and all required registrations on file."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the importer for their product, label and document requirements in writing"
                - "Send revised labels to the importer for approval"
                - "Confirm who handles facility registration and product filing"
                - "Ship the first pallet with dividers and corner protection for glass"
            - name: Formalising export sales to family importers abroad
              description: |-
                ## Purpose
                Many Caribbean exporters start by sending produce to a brother's grocery in Brooklyn or an aunt's market stall in Brixton, often on trust, with no invoice and loose payment. Putting family sales on the same footing as any other buyer, with written prices, proper documents and a payment schedule, protects the relationship and the business, and keeps the records the tax authority and lenders will ask for.

                ## Milestones
                1. A conversation held with each family buyer about moving to written terms.
                2. Prices, Incoterm and payment timing agreed and written in a short supply letter.
                3. Every shipment invoiced and documented like any other export.
                4. Payments reconciled quarterly and any arrears discussed openly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written supply letter with each family buyer, and every shipment in the last quarter invoiced and reconciled."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Talk to each family buyer about moving to written terms"
                - "Write a short supply letter with prices, Incoterm and payment timing"
                - "Invoice every family shipment with full export documents"
                - "Reconcile family buyers' payments against invoices @recurring(quarterly)"
            - name: Growing from one export buyer to several markets
              description: |-
                ## Purpose
                Relying on one importer feels safe until they switch supplier or stop paying, and then the whole export business stops. Adding a second and third buyer, ideally in a different market, spreads that risk, but each one brings its own permit, label and payment rules, so growth needs to be paced against what the farm and the paperwork can carry.

                ## Milestones
                1. The share of export sales from your largest buyer calculated.
                2. A target set for the most any single buyer should represent.
                3. Two prospective buyers in a second market contacted with samples or price lists.
                4. A quarterly review of buyer concentration added to the routine.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Buyer concentration measured each quarter against a written target, with at least one buyer active in a second market."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Calculate the share of export sales from your largest buyer"
                - "Set a written limit for any one buyer's share"
                - "Contact two buyers in a second market with a price list"
                - "Review buyer concentration against the limit @recurring(quarterly)"
            - name: Requesting market access for a new crop
              description: |-
                ## Purpose
                When a product is not on an importing country's permitted list, the route in is a formal market access request from your national plant protection organisation, usually followed by a pest risk analysis that can take years. Exporters and producer groups who supply the data on pests, growing areas and volumes, and keep the request moving, are often the reason it succeeds at all.

                ## Milestones
                1. The plant protection organisation confirms whether a request for your crop and market is already open.
                2. Industry data supplied: growing areas, volumes, pest monitoring records and proposed export season.
                3. A contact named at the ministry and progress checked on an agreed schedule.
                4. Any conditions proposed by the importing country reviewed for whether producers can meet them.

                ## Notes
                This is slow, official work between governments. Producers support it with data and patience; there is no private shortcut.
              priority: low
              deadlineOffsetDays: 365
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A market access request on file with the plant protection organisation, with industry data supplied and a named contact and progress record."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Ask the plant protection organisation whether a request is open for your crop"
                - "Gather growing area, volume and pest monitoring data with other growers"
                - "Submit the data through the ministry contact"
                - "Check progress with the ministry contact on the agreed schedule"
            - name: Becoming an approved export packhouse
              description: |-
                ## Purpose
                Some markets and export programmes only accept produce packed in a facility registered with the plant quarantine service, with screened areas, pest exclusion, approved water and inspection space. Upgrading a farm packing shed to that standard, or joining one that already meets it, is a major step that opens programmes closed to loose field packing.

                ## Milestones
                1. The registration criteria for export packhouses obtained from the plant quarantine service.
                2. A gap list made against the criteria for your shed, with costed fixes.
                3. Upgrades completed or a shared approved packhouse arrangement agreed.
                4. The packhouse inspected and registered, with the registration number on file.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A packhouse registration number issued by the plant quarantine service, or a signed agreement to pack in an approved facility."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the plant quarantine service for packhouse registration criteria"
                - "Walk your shed against the criteria and list the gaps with costs"
                - "Compare upgrading your shed with packing at an approved facility"
                - "Book the registration inspection once upgrades are done"
            - name: Year-round supply programme with an overseas importer
              description: |-
                ## Purpose
                The step beyond spot orders is a supply programme: an agreed weekly volume for fifty-two weeks, with specifications, price bands and penalties for shortfall. Delivering one takes planned staggered planting, group sourcing for gaps and a weekly forecast to the importer, and it rewards the exporter with steadier prices and a buyer who plans around you.

                ## Milestones
                1. A written programme agreement covering weekly volumes, specifications, price bands and shortfall terms.
                2. A planting and sourcing plan that covers the volume in every week, including the wet and dry season dips.
                3. A weekly volume forecast sent to the importer on a fixed day.
                4. Monthly performance against the programme reviewed with the importer.

                ## Notes
                Never commit to a weekly volume your own records cannot support across a full year. Shortfall penalties and lost trust cost more than a smaller programme.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A signed supply programme met at or above the agreed fill rate for three consecutive months, with weekly forecasts sent."
                cadence: rolling
              tasks:
                - "Ask the importer for their programme terms and specifications in writing"
                - "Build a week by week planting and sourcing plan for the full year"
                - "Send the importer a weekly volume forecast"
                - "Review fill rate and quality with the importer @recurring(monthly:24)"
            - name: Electronic phytosanitary certificates and trade single window
              description: |-
                ## Purpose
                More countries now exchange phytosanitary certificates electronically through the international ePhyto hub, and many Caribbean customs services file export entries through an electronic single window. Learning how your country's system works, registering for access and moving your routine filings online cuts paper delays and certificate fraud concerns that buyers increasingly raise.

                ## Milestones
                1. Whether your country issues or receives electronic phytosanitary certificates confirmed with plant quarantine.
                2. Access to the customs or trade single window obtained for your business or broker.
                3. One shipment filed fully through the electronic systems.
                4. The paper steps that remain written into the pre-shipment checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "One shipment completed through the electronic certificate and single window systems, with the remaining paper steps documented."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask plant quarantine whether your country uses electronic phytosanitary certificates"
                - "Register for access to the customs single window or confirm the broker's access"
                - "File one shipment through the electronic systems end to end"
                - "Update the pre-shipment checklist with the paper steps that remain"
---

# Agricultural Export Compliance

Exporting fresh and processed produce from the Caribbean is mostly paperwork and timing: the importing country decides what may enter, your plant quarantine service certifies it, and a missing stamp or a warm container can turn a good harvest into a destroyed consignment. This area starts with the foundations (what to export and where, market access, licences, the phytosanitary process, costing, Incoterms, the document pack, a broker and forwarder, and the rules for processed foods), then the weekly machinery of orders, inspections, document checks and cold chain logs, the skills of permits, pests, marking, pallets, origin rules and export payments, the decisions on freight mode, packaging, treatment, insurance and certification, the dated first shipments, audits, peaks and refusals, variants for part-time farmers, groups, sauce makers, family importers and growing exporters, and finally new market access requests, approved packhouses, year-round programmes and electronic certificates.

The rhythm follows the shipping week: orders confirmed on Monday, inspections booked on Tuesday, documents checked on Thursday and temperature records reviewed on Friday, with monthly checks on rules, freight rates, payments and rejections, a quarterly compliance review and yearly licence renewals and season close-out. The Vendor, Operational checklist, Compliance control, Metrics log, Remediation plan and Risk register templates pair with the forwarder choice, the pre-shipment check, the export file, the cold chain log, rejections and shipping disruption. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
