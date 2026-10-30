---
id: agriculture.supermarket-supply-contracts
name: Supermarket Supply Contracts
description: "Get registered as a supermarket supplier, price and pack produce to the buyer's specification, deliver steady weekly volumes, and keep invoices, rejects and payment cycles under control."
category: business
version: 1.0.0
tags: [agriculture, supermarket-supply-contracts, small-business, supermarkets, retail-supply, produce-buyers, packaging, caribbean]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - vendor
    - operational-checklist
    - metrics-log
    - meeting-notes
    - risk-register
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Supermarket Supply Contracts
          description: "Getting produce onto supermarket shelves: supplier registration, quality standards, packaging and labelling, consistent volumes and payment cycles."
          projects:
            - name: Supermarket supply readiness check
              description: |-
                ## Purpose
                Supermarket buyers expect the same quality, the same pack and the same volume every week, and a grower who wins a listing before the farm can deliver that usually loses it within two months. Scoring the farm honestly against what a chain will ask for shows whether to pitch now, pitch one product only, or spend a season getting ready first.

                ## Milestones
                1. The farm scored against ten readiness points: volume, continuity, grading, packing, cooling, transport, records, food safety, paperwork and cash to wait for payment.
                2. Each weak point marked as fix now, fix this season or not needed for the first account.
                3. A written verdict: pitch now, pitch one product, or prepare for a season first.
                4. The three biggest gaps turned into named projects in this area.

                ## Notes
                The point most growers underestimate is cash. If the chain pays at 45 days, you carry six or seven weeks of deliveries before the first payment lands.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page readiness score with a written pitch now, pitch one product or prepare first verdict and the three biggest gaps named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the ten readiness points and score the farm on each from one to five"
                - "Work out how many weeks of deliveries you could fund before first payment"
                - "Ask a grower who already supplies a supermarket what caught them out"
                - "Write the verdict and the three biggest gaps at the top of the page"
            - name: Map of supermarket buyers and their produce needs
              description: |-
                ## Purpose
                Chains, independent supermarkets and mini-marts buy produce in very different ways: some buy centrally through one produce manager, others let each store manager order, and some buy only through a distributor. Knowing who buys, how and what they are short of turns a cold call into a useful offer.

                ## Milestones
                1. Every supermarket chain and large independent within delivery range listed with its number of stores.
                2. For each, whether produce is bought centrally, by store or through a distributor, and who the buyer is.
                3. Gaps noted from shelf visits: products often missing, imported lines a local grower could replace, poor quality on display.
                4. A shortlist of three accounts to approach first, ranked by fit with the farm.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A buyer map covering every chain and large independent in range, with buying method, buyer contact and a ranked shortlist of three targets."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every supermarket and large independent within two hours' drive"
                - "Visit four produce sections and note what is missing or imported"
                - "Ask each store's produce staff how ordering works and who buys"
                - "Rank the three accounts that best match what the farm grows"
            - name: Choosing the first products to pitch
              description: |-
                ## Purpose
                Pitching the whole farm at once overwhelms a buyer and overcommits the grower. Starting with two or three products the farm can supply every week of the year, at a quality that beats what is on the shelf, gives the account a chance to grow on reliability rather than promises.

                ## Milestones
                1. Every crop on the farm scored for year-round supply, shelf life, current shelf quality and margin.
                2. Two or three lead products chosen, with the reason for each written down.
                3. The weekly volume the farm can guarantee for each lead product, with a safety margin of at least 20 percent.
                4. Products held back for later named, so the second conversation with the buyer is already planned.

                ## Notes
                Lines with steady demand and short supply, such as lettuce, tomatoes, sweet peppers, herbs, pak choi or bagged greens in many islands, often open the door faster than the crop you are proudest of.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three lead products chosen, each with a guaranteed weekly volume and a written reason, plus a list of products to offer later."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every crop you grow with the weeks of the year it is available"
                - "Score each crop for shelf life, margin and what the shelf currently shows"
                - "Pick two or three lead products and write why for each"
                - "Set the weekly volume you can guarantee, leaving a 20 percent margin"
            - name: Supermarket supplier registration pack
              description: |-
                ## Purpose
                Before a chain can raise a purchase order, its accounts and quality teams usually need a supplier file: business registration, tax and VAT numbers, bank details on letterhead, insurance certificates, a farmer registration card and sometimes a food safety certificate. Having the pack ready on day one means a buyer's yes becomes a first order in days rather than weeks.

                ## Milestones
                1. The chain's supplier application form and document checklist obtained.
                2. Business registration, tax registration and bank confirmation letter gathered as clean scans.
                3. Farmer registration, insurance certificate and any food safety certificate filed in the same folder.
                4. The completed supplier form submitted and a supplier or vendor number received.
                5. Expiry dates for every document written on the farm calendar.

                ## Notes
                Keep one digital folder per account with every document named by type and expiry date. Chains ask for renewals with little warning, and an expired certificate can freeze payments.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A supplier number issued by at least one supermarket, with every document the chain asked for filed and its expiry date recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer's office for the supplier form and document checklist"
                - "Scan registration, tax and bank documents into one named folder"
                - "Submit the completed supplier form and note the date sent"
                - "Check every supplier document is current before it expires @recurring(yearly)"
            - name: Liability insurance for supplying supermarkets
              description: |-
                ## Purpose
                Most chains ask suppliers for public and product liability cover, often with a minimum amount and the chain named on the certificate, because a contaminated bag of salad on their shelf becomes their problem too. Getting the right cover in place before the first order avoids a stalled registration and protects the farm if a claim ever comes.

                ## Milestones
                1. The chain's insurance requirements in writing: types of cover, minimum amounts and whether it must be named.
                2. Quotes from at least two insurers or brokers for product and public liability.
                3. A policy in force with a certificate that matches the chain's wording.
                4. The certificate sent to the chain and the renewal date on the calendar.

                ## Notes
                Ask the broker to explain exclusions in plain words, especially for fresh produce and anything washed or cut. Whether the cover suits your situation is a question for a licensed broker, not this list.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A product and public liability certificate meeting the chain's stated minimums has been issued and sent to the buyer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer for the insurance requirements in writing"
                - "Request product and public liability quotes from two brokers"
                - "Check the certificate wording matches what the chain asked for"
                - "Send the renewed insurance certificate to every chain @recurring(yearly)"
            - name: Barcodes and product codes for packed produce
              description: |-
                ## Purpose
                Packed produce scanned at a supermarket till needs a barcode the chain's system recognises, usually a GS1 number registered to your business, or a weighed-item code the store prints itself. Sorting codes out before packaging is printed saves reprinting a full run of labels.

                ## Milestones
                1. The chain's barcode rules confirmed: supplier barcode, store scale label or price look-up code for each product.
                2. GS1 membership or the local barcode route arranged where the chain needs supplier codes.
                3. One barcode number assigned per product and pack size, recorded in a product code list.
                4. A test label scanned successfully at the store before the first print run.

                ## Notes
                A new pack size is a new product. A 250 g and a 500 g bag of the same lettuce need different codes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every packed product has a recorded barcode that has scanned correctly at the store's till before full labels were printed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer which barcode type each product needs"
                - "Contact the national GS1 office about membership and fees"
                - "Build a product code list with one code per product and pack size"
                - "Renew the barcode membership before it lapses @recurring(yearly)"
            - name: Landed cost and price per pack for supermarket supply
              description: |-
                ## Purpose
                Prices that work at the wholesale market can lose money at a supermarket once packaging, labels, extra grading, delivery runs, rejects and 45 days of waiting for payment are counted. Building a landed cost per pack, then adding the margin you need, gives a floor you will not go below in negotiation.

                ## Milestones
                1. Growing cost per kilo for each lead product taken from the farm's enterprise budget.
                2. Packing cost per pack added: bag or punnet, label, labour, cold storage.
                3. Delivery cost per pack and an allowance for rejects and shrink added.
                4. A floor price and a target price per pack written for each product.

                ## Notes
                Include the cost of grade-outs. If 25 percent of the crop does not meet the supermarket spec, the other 75 percent carries the whole cost of growing it, unless the outs sell elsewhere.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costing sheet shows the landed cost, floor price and target price per pack for every product offered to the supermarket."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull the growing cost per kilo for each lead product from your records"
                - "Price one pack's bag, label and packing labour"
                - "Add delivery, reject allowance and payment wait to the cost"
                - "Recost every product with current input prices @recurring(quarterly)"
            - name: First meeting with the produce buyer
              description: |-
                ## Purpose
                Produce buyers see many hopeful growers and remember the ones who arrive with samples, a price list, weekly volumes and their paperwork, and forget the ones who say they can grow anything. A prepared first meeting sets the tone for the whole relationship and often decides whether a trial order follows.

                ## Milestones
                1. Samples packed and labelled exactly as they would arrive on a delivery.
                2. A one-page offer with products, pack sizes, weekly volumes, delivery days and prices.
                3. Answers ready for the questions buyers ask: food safety, backup supply, what happens in bad weather.
                4. The meeting held, with notes on what the buyer wants and an agreed next step.

                ## Notes
                Start from the **Meeting notes** template. Ask what the buyer struggles with now; a supplier who fixes a shortage is easier to say yes to than one who adds another line.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A buyer meeting has taken place with samples and a written offer, and an agreed next step such as a trial order is recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Phone the buyer's office to request a 20-minute meeting"
                - "Write a one-page offer with volumes, pack sizes and prices"
                - "Pack samples the morning of the meeting exactly as for delivery"
                - "Send a short thank-you note confirming the agreed next step"
            - name: Reading the supplier agreement before signing
              description: |-
                ## Purpose
                Supplier agreements with chains often carry clauses that bite later: payment terms of 30 to 90 days, listing or promotional fees, the right to return unsold stock, penalties for short delivery, and termination at short notice. Reading it slowly, marking every clause that costs money, and getting a lawyer to look at the serious ones is cheaper than discovering them on a statement.

                ## Milestones
                1. The full agreement and any trading terms or supplier manual obtained, not just the signature page.
                2. Every clause that costs money or shifts risk listed in plain words.
                3. Questions on the list sent to the buyer, with answers in writing.
                4. A lawyer's view obtained on any clause you do not understand before signing.
                5. A signed copy filed with a summary of key terms on one page.

                ## Notes
                Start from the **Risk register** template to list the clauses and what each could cost. The interpretation of a contract is a question for a lawyer; this project is about reading, listing and asking.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page summary of payment terms, fees, returns, penalties and termination is filed with the signed agreement, after any unclear clause was checked with a lawyer."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the buyer for the full agreement and supplier manual"
                - "Mark every clause on payment, fees, returns, penalties and termination"
                - "Ask the agent to draft a plain-language summary of the marked clauses"
                - "Book an hour with a lawyer to go through the clauses you are unsure of"
            - name: Product specification sheet for each line
              description: |-
                ## Purpose
                Every supermarket specification fixes what the buyer is paying for: size or weight range, colour, ripeness stage, allowed blemishes, pack weight and shelf life. Writing a spec sheet for each product, agreed with the buyer and pinned in the packing area, means pickers, packers and the store's receiving clerk all judge the produce by the same rules.

                ## Milestones
                1. The buyer's own specification obtained for every product, or a draft written where none exists.
                2. Each spec sheet covering size range, colour, defects allowed, pack weight, labelling and target shelf life.
                3. Photos of acceptable and unacceptable produce added to every sheet.
                4. Each sheet agreed with the buyer in writing and posted in the packing area.

                ## Notes
                Photos settle more arguments than words. Take a picture of a pack the buyer accepted and one they rejected, and put both on the sheet.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spec sheet with photos, agreed in writing with the buyer, exists for every product supplied and is posted where packing happens."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer for their written specification for each product"
                - "Photograph a good pack and a reject for every product"
                - "Write a one-page spec sheet per product and send it for agreement"
                - "Review each spec sheet with the buyer for changes @recurring(yearly)"
            - name: Weekly order and availability routine
              description: |-
                ## Purpose
                Supermarket orders usually arrive on a fixed day for delivery a few days later, and the buyer plans shelf space around what you said you could send. A weekly routine of checking the field, sending an availability note and confirming the order stops overpromising and keeps the buyer from being caught short.

                ## Milestones
                1. The order day, cut-off time and delivery days agreed with each store or buyer.
                2. A field walk before every availability note, with expected kilos per product.
                3. Availability sent to the buyer before their ordering cut-off each week.
                4. Every order confirmed in writing, with any short supply flagged the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weeks running, availability was sent before the buyer's cut-off and every order was confirmed in writing."
                cadence: rolling
              tasks:
                - "Confirm the order day and cut-off time with each buyer"
                - "Walk the beds and estimate next week's kilos per product @recurring(weekly:wed)"
                - "Send the buyer next week's availability before their cut-off"
                - "Reply to each purchase order with a written confirmation"
            - name: Planting plan backed out from weekly supermarket volumes
              description: |-
                ## Purpose
                A supermarket wants 60 heads of lettuce every week, not 300 one week and none for a month. Working backwards from the weekly volume to how much to plant, how often and how far apart is what turns a crop into a supply line, with enough extra planted to cover pests, weather and grade-outs.

                ## Milestones
                1. Weekly volume per product converted into plants or area needed per planting.
                2. A planting interval set for each crop so harvests overlap with no gaps.
                3. An extra allowance of plantings built in for losses and rejects.
                4. A twelve-month sowing calendar on the wall, covering the wet and dry seasons.

                ## Notes
                Yields drop in the heaviest rains and the hottest dry months. Plant more in the weeks that feed those harvests rather than assuming the same yield all year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A twelve-month sowing calendar shows planting dates and quantities that cover every committed weekly supermarket volume plus a loss allowance."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Write down the weekly volume committed for each product"
                - "Convert each weekly volume into plants per sowing using your yields"
                - "Set the sowing interval so harvests overlap without gaps"
                - "Check this month's sowings against the calendar @recurring(monthly:3)"
            - name: Farm-gate quality check before every delivery
              description: |-
                ## Purpose
                Rejection at the store's receiving bay costs the produce, the packaging, the trip and a little of the buyer's trust. A short check against the spec sheet before the truck leaves catches underweight packs, soft fruit and wrong labels while they can still be fixed.

                ## Milestones
                1. A one-page pre-delivery checklist drawn from the spec sheets.
                2. A named person who signs off every load before it leaves.
                3. Sample packs weighed and inspected from every product on every load.
                4. A month of signed checklists filed, with any problems and fixes noted.

                ## Notes
                Start from the **Operational checklist** template. Check pack weight on a scale, not by eye; underweight packs are among the most common reasons stores reject or fine suppliers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every load for a full month has a signed pre-delivery checklist, and store rejects for that month are below the level agreed with the buyer."
                cadence: rolling
              tasks:
                - "Turn the spec sheets into a one-page pre-delivery checklist"
                - "Name who signs off loads and who covers when they are away"
                - "Weigh and inspect sample packs from each product before loading"
                - "File the week's signed checklists in the delivery folder @recurring(weekly:sat)"
            - name: Delivery notes and proof of delivery routine
              description: |-
                ## Purpose
                When a statement arrives showing less than you delivered, the only thing that settles it is a delivery note signed by the store with quantities, crate counts and the time. A strict routine of numbered delivery notes and signed copies is the cheapest protection a supplier has.

                ## Milestones
                1. Numbered delivery notes printed or set up on a phone app, one per drop.
                2. Each note listing products, packs, crates and delivery time.
                3. A store signature and printed name on every copy, with any shortage written on the note.
                4. Signed notes filed by store and week, ready to match against invoices.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery in the last two months has a numbered note signed by the store, filed by store and week."
                cadence: rolling
              tasks:
                - "Set up numbered delivery notes in a book or phone app"
                - "Brief the driver to get a printed name and signature on every note"
                - "Photograph each signed note before leaving the store"
                - "File signed delivery notes by store and week @recurring(weekly:fri)"
            - name: Monthly invoice and statement reconciliation
              description: |-
                ## Purpose
                Chain statements mix payments, deductions for rejects, promotional charges and short deliveries, and errors are common on both sides. Matching every invoice to a delivery note and every deduction to a reason, once a month, is how growers find money they would otherwise never see.

                ## Milestones
                1. Every invoice for the month matched to a signed delivery note.
                2. Each deduction on the statement matched to a credit note, reject slip or agreed fee.
                3. Unexplained deductions listed and sent to the accounts contact with copies of proof.
                4. Payments received checked against the agreed payment terms.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every month's statement has been reconciled to delivery notes within ten days of arrival, and every unexplained deduction has been queried in writing."
                cadence: rolling
              tasks:
                - "Ask the chain's accounts team when statements are issued"
                - "Match the month's invoices to signed delivery notes @recurring(monthly:5)"
                - "List each deduction with the reason the chain gave"
                - "Email queries on unexplained deductions with proof attached"
            - name: Reject and credit note log
              description: |-
                ## Purpose
                Stores reject produce on arrival or return it later as unsold or damaged, and each one usually becomes a credit note against your invoice. Logging every reject with the reason and a photo shows which products, stores or habits are costing money, and gives you evidence when a reject looks unfair.

                ## Milestones
                1. A log with date, store, product, quantity, reason and photo for every reject or return.
                2. Each reject matched to a credit note on the statement.
                3. Rejects totalled each month as a percentage of value delivered, by product.
                4. The top cause of rejects named and one fix agreed for the next month.

                ## Notes
                Start from the **Metrics log** template. Ask the store to keep rejected produce for you to see, or to photograph it; arguing without evidence rarely ends well.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of rejects are logged with reasons and photos, and the reject rate by product is calculated each month."
                cadence: rolling
              tasks:
                - "Set up a reject log with columns for store, product, reason and photo"
                - "Ask each store to photograph rejected produce for you"
                - "Enter the week's rejects and returns in the log @recurring(weekly:tue)"
                - "Name the top reject cause and agree one fix with the packers"
            - name: Returnable crates and packaging control
              description: |-
                ## Purpose
                Many chains deliver and collect produce in returnable crates, either the supplier's own or a pooled system, and crates quietly disappear at stores and on the farm. A crate count at each drop and a monthly balance stops a slow leak that can cost as much as a season's packaging.

                ## Milestones
                1. The number of crates owned or on loan recorded as a starting balance.
                2. Crates out and crates back written on every delivery note.
                3. A crate balance by store worked out every month.
                4. Missing crates claimed from stores or written off with a reason.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly crate balance by store has been kept for three months, with every gap either recovered or written off."
                cadence: rolling
              tasks:
                - "Count every crate on the farm to set the starting balance"
                - "Add crates out and crates back to the delivery note layout"
                - "Work out the crate balance for each store @recurring(monthly:25)"
                - "Raise missing crate counts with each store's receiving clerk"
            - name: Monthly supplier scorecard review
              description: |-
                ## Purpose
                Chains increasingly score suppliers on fill rate, on-time delivery, reject rate and paperwork accuracy, and a falling score is often the first sign an account is at risk. Keeping your own scorecard, and comparing it with the buyer's where one exists, means you see the problem before the buyer raises it.

                ## Milestones
                1. Four measures chosen: fill rate, on-time delivery, reject rate and invoice accuracy.
                2. Each measure calculated every month from orders, delivery notes and the reject log.
                3. The chain's own scorecard requested and compared with yours where one exists.
                4. One improvement chosen each month for the weakest measure.

                ## Notes
                Fill rate is what you delivered divided by what was ordered. A supplier who sends 85 percent of the order every week is often seen as less reliable than one who sends 100 percent of a smaller order.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A scorecard with fill rate, on-time delivery, reject rate and invoice accuracy has been completed every month for six months."
                cadence: rolling
              tasks:
                - "Ask the buyer whether the chain keeps a supplier scorecard"
                - "Set up a sheet with fill rate, on-time, rejects and invoice accuracy"
                - "Calculate the four measures from last month's records @recurring(monthly:12)"
                - "Write one fix for the weakest measure and tell the team"
            - name: Cash flow plan for supermarket payment terms
              description: |-
                ## Purpose
                Growers used to cash at the market can run short within weeks of starting supermarket supply, because seeds, packaging, labour and fuel are paid now while the chain pays in 30, 45 or 60 days. A simple rolling cash plan shows when money arrives, how big the gap is and whether you need an overdraft or a smaller first order.

                ## Milestones
                1. The payment terms for each account written down, with the date each invoice falls due.
                2. A twelve-week cash plan showing money in from each account and money out for the farm.
                3. The largest gap identified and a way to cover it agreed: savings, credit, or slower growth.
                4. Actual payments compared with the plan each month and late payments chased.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-week cash plan is updated every month, and no supplier bill or wage has gone unpaid because a supermarket payment was due later."
                cadence: rolling
              tasks:
                - "Write each account's payment terms and invoice due dates in one list"
                - "Build a twelve-week sheet of expected money in and money out"
                - "Update the cash plan with actual payments received @recurring(monthly:20)"
                - "Phone the accounts team about any payment more than a week late"
            - name: Store shelf visit routine
              description: |-
                ## Purpose
                What happens to your produce after the receiving bay decides whether customers buy it again: wilting under bright lights, stacked under heavier boxes, or left on the shelf past its best. A regular shelf visit, with a word to the produce clerk and a photo, catches handling problems and shows the store you care about the product.

                ## Milestones
                1. A visit schedule covering every store supplied at least once a fortnight.
                2. A short checklist: freshness, placement, price label, stock level, competing products.
                3. Photos and notes from each visit kept in one place.
                4. Problems raised kindly with the produce clerk or manager and the outcome noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every store supplied has been visited at least twice a month for three months, with photos and notes from each visit kept."
                cadence: rolling
              tasks:
                - "Draw up a visit schedule that covers every store each fortnight"
                - "Write a five-point shelf checklist on your phone"
                - "Visit a store shelf and photograph your products @recurring(weekly:sat)"
                - "Raise any handling problem politely with the produce clerk"
            - name: Understanding supermarket produce quality grades
              description: |-
                ## Purpose
                Supermarkets grade produce more tightly than most markets, with size bands, colour charts, defect limits and shelf life targets that decide whether a load is accepted. Learning how buyers and receiving clerks actually judge produce helps you grade in the field and pack only what will pass.

                ## Milestones
                1. The grade standards used by your buyer, or the national produce grading standards, read and summarised.
                2. Size, colour and defect limits known for each product you supply.
                3. An afternoon spent grading alongside a receiving clerk or buyer, with notes.
                4. Pickers and packers trained on the grades with real produce in hand.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Grade limits for every product supplied are written on one page, and every picker and packer has been trained on them with real produce."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the bureau of standards or the buyer for the grading standards"
                - "Summarise the size, colour and defect limits for each product"
                - "Ask to watch a receiving clerk grade an incoming load"
                - "Run a one-hour grading session with pickers and packers"
            - name: Labelling rules for packed fresh produce
              description: |-
                ## Purpose
                Packed bags and trays on a supermarket shelf usually need a product name, net weight, the packer's name and address, the country of origin and a packed-on or best-before date, and the chain may add its own rules. Learning the labelling law and the chain's requirements before printing avoids having packs pulled from the shelf.

                ## Milestones
                1. The national food labelling standard for pre-packed produce obtained and read.
                2. The chain's own label requirements added to the same list.
                3. A label layout drafted for each product with every required item.
                4. The draft label checked by the bureau of standards or the buyer before printing.

                ## Notes
                Labelling law differs by country. Read the standard yourself and check your draft with the authority rather than copying another supplier's label.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A label layout for each packed product has been checked against the national standard and the chain's rules and approved before printing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Request the labelling standard for pre-packed food from the bureau of standards"
                - "List every item the law and the chain require on a label"
                - "Draft a label layout for each product and pack size"
                - "Send the draft labels to the buyer for approval before printing"
            - name: How the supermarket buying calendar works
              description: |-
                ## Purpose
                Chains plan their produce range, promotions and price features weeks or months ahead, around paydays, school terms, Christmas, Easter, Carnival and other holidays. Knowing the calendar lets you offer promotions when they can still be planned and grow for the weeks demand spikes.

                ## Milestones
                1. The chain's promotion planning lead time and range review dates known.
                2. The year's high-demand weeks marked on the farm calendar.
                3. Promotion ideas for your products prepared ahead of the planning deadline.
                4. One promotion proposed and accepted within the first year.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The farm calendar shows the chain's promotion deadlines and peak weeks for the year, and at least one promotion has been proposed in time."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer how far ahead promotions and range changes are planned"
                - "Mark paydays, holidays and festival weeks on the farm calendar"
                - "Check the buyer's upcoming promotion deadlines @recurring(quarterly)"
                - "Prepare one promotion offer for a peak week"
            - name: Negotiating price and terms with a produce buyer
              description: |-
                ## Purpose
                Buyers negotiate every day and growers rarely do, so the first price offered tends to stick for years. Practising how to hold a floor price, trade a lower price for faster payment or bigger volumes, and say no politely makes every later conversation easier.

                ## Milestones
                1. Floor and target prices known for every product before any negotiation.
                2. A list of things to trade other than price: payment days, order size, delivery days, pack size.
                3. Two practice conversations with a friend or adviser playing the buyer.
                4. One real negotiation held, with the outcome and what to do differently noted.

                ## Notes
                Never agree a price in the meeting if it is below your floor. Ask for a day to check your costs; a serious buyer will wait.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of floor prices and tradeable terms exists, and one real negotiation has been held and reviewed in writing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write your floor and target price for each product on one card"
                - "List five terms you could trade instead of dropping price"
                - "Practise a price conversation with someone playing a tough buyer"
                - "Write down what worked after your next real negotiation"
            - name: Why produce shrinks and stores reject it
              description: |-
                ## Purpose
                Shrink is the store's word for produce that is thrown out, marked down or returned, and a supplier whose product shrinks badly gets dropped even if it arrived perfect. Learning what causes shrink, from field heat and rough handling to warm storage and slow-selling pack sizes, lets you fix the causes on the farm side.

                ## Milestones
                1. The main causes of shrink for each product understood and listed.
                2. The store's shrink or wastage figure for your products requested.
                3. The farm-side causes you control identified: harvest time, cooling, packing, pack size.
                4. Two changes made on the farm to reduce shrink, and the effect checked after a month.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two farm-side changes aimed at shrink have been made, and the store's shrink or return figure for your products has been compared before and after."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the store how much of your produce is marked down or thrown out"
                - "List the causes of shrink for each product you supply"
                - "Pick two farm-side causes you can change this month"
                - "Compare the store's return figure a month after the changes"
            - name: Reading retail markups and shelf prices
              description: |-
                ## Purpose
                The shelf price of your produce includes the chain's margin, tax where it applies and an allowance for shrink, and the gap between your price and the shelf price is often larger than growers expect. Understanding how the retail price is built helps you judge whether a promotion or price cut is realistic and talk to the buyer in their terms.

                ## Milestones
                1. Shelf prices recorded for your products and their nearest competitors in three stores.
                2. The approximate markup on each product worked out from your price and the shelf price.
                3. The effect of a price cut on the shelf price and on your income calculated.
                4. A short note on how the chain's pricing affects your next price review.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table shows your price, the shelf price and the implied markup for every product, in at least three stores."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Photograph shelf prices for your products in three stores"
                - "Work out the markup between your price and the shelf price"
                - "Calculate what a 10 percent price cut means for both sides"
                - "Note how this changes your next price review request"
            - name: Choosing packaging for supermarket produce
              description: |-
                ## Purpose
                Packaging decides shelf life, how the product looks and a real share of the cost per pack: punnets, clamshells, perforated bags, net bags, trays with film and cartons all suit different crops. Choosing it with the buyer's display, the cold chain and the price per unit in mind avoids paying for a pallet of bags that do not work.

                ## Milestones
                1. The buyer's packaging preferences and any banned materials known.
                2. Three packaging options per product priced, including freight and minimum order.
                3. Samples trialled on the farm for shelf life at store temperature.
                4. A packaging choice made per product and the supplier set up.

                ## Notes
                Start from the **Purchase decision** template for each option and the **Vendor** template for the supplier you choose. Watch minimum order quantities: a year's supply of printed bags ties up cash and goes out of date if the label changes.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A packaging type, size and supplier has been chosen for every product after a shelf life trial, with the cost per pack recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the buyer which packaging they prefer and what they refuse"
                - "Get prices and minimum orders from three packaging suppliers"
                - "Trial two pack types for shelf life in a store-temperature fridge"
                - "Set up the chosen supplier with a reorder level"
            - name: Pre-packed versus loose supply decision
              description: |-
                ## Purpose
                Selling loose by the crate is simpler and cheaper to pack, while pre-packed bags or trays carry your brand, sell at a better price per kilo and make your product easy to find, but cost labour, packaging and labelling. Comparing both for each product, with real numbers, settles which way to supply.

                ## Milestones
                1. Price per kilo, packing cost and reject rate compared for loose and pre-packed.
                2. The buyer's preference and shelf space for each format known.
                3. Labour hours per week for packing estimated.
                4. A format chosen per product, with the reasons written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of loose and pre-packed margin per kilo exists for each product, and a format has been chosen for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer which products they want loose and which pre-packed"
                - "Work out the margin per kilo for each format"
                - "Estimate weekly packing hours for the pre-packed lines"
                - "Choose a format per product and tell the buyer"
            - name: Supplying direct or through a distributor
              description: |-
                ## Purpose
                Some chains will only buy produce through an approved distributor or consolidator, and for a small grower, a distributor can take on delivery, invoicing and payment risk in exchange for part of the margin. Comparing direct supply and a distributor on income, work and risk helps you choose the route that suits the size of the farm.

                ## Milestones
                1. Every chain's rules on direct and distributor supply confirmed.
                2. At least two distributors spoken to about price, terms and payment.
                3. Net income per kilo compared for direct and distributor routes after delivery and admin costs.
                4. A route chosen per account, with the decision and reasons recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of net income per kilo for direct and distributor supply exists, and a route has been chosen for each account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask each chain whether they buy produce direct or only through distributors"
                - "Meet two distributors and ask their price, terms and payment days"
                - "Compare net income per kilo after delivery and admin for both routes"
                - "Record the route chosen for each account and why"
            - name: Firm order versus sale-or-return terms
              description: |-
                ## Purpose
                On a firm order, the store owns the produce once it signs for it; on sale-or-return or consignment terms, you are paid only for what sells and carry the shrink. The difference can be the whole margin on a perishable line, so it deserves a clear decision before agreeing terms rather than drifting into consignment.

                ## Milestones
                1. The terms each account currently uses confirmed in writing.
                2. Past returns on any consignment line totalled as a share of value delivered.
                3. A minimum condition set for accepting sale-or-return, such as a higher price or shelf position.
                4. A request for firm order terms made where consignment is not paying.

                ## Notes
                Consignment can make sense for a new product the store is unsure of, for a trial period with an end date. Open-ended consignment usually moves the store's risk onto the farm.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each account's terms are confirmed in writing, and a recorded decision exists on whether to accept sale-or-return and on what conditions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check in writing whether each account buys firm or on consignment"
                - "Total last quarter's returns on any consignment line"
                - "Set the conditions under which you would accept sale-or-return"
                - "Ask the buyer to move any losing consignment line to firm orders"
            - name: Product withdrawal and recall plan for retail packs
              description: |-
                ## Purpose
                If a pack is found contaminated, mislabelled or carrying a foreign object, the chain will want to know within hours which lots went to which stores and how you will get them off the shelf. A written plan, with lot codes, contacts and a practice run, means the first time you use it is not the real thing.

                ## Milestones
                1. Lot codes on every pack that link to harvest date, field and packing day.
                2. A contact list for each chain's quality team and store managers, out of hours included.
                3. Written steps for a withdrawal: decide, notify, retrieve, record and report.
                4. A mock recall run, tracing one lot to every store within four hours.

                ## Notes
                Ask each chain for its own recall procedure and contacts; your plan must fit theirs. Reporting duties to food safety authorities differ by country, so confirm them with the authority.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written withdrawal plan exists and a mock recall has traced one lot to every store that received it within four hours."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask each chain for its recall procedure and quality contacts"
                - "Make sure every pack carries a lot code linked to the packing record"
                - "Write the five withdrawal steps on one page with names beside each"
                - "Run a mock recall on one lot and time the trace @recurring(yearly)"
            - name: Adding a second supermarket chain
              description: |-
                ## Purpose
                Depending on one chain means one buyer's decision can end the business, but taking on a second account before the first is stable can damage both. Deciding when and how to add a second chain, with volumes checked and the first buyer kept informed, spreads the risk without breaking supply.

                ## Milestones
                1. Six months of steady fill rate and low rejects on the first account.
                2. Spare weekly volume confirmed from the planting plan.
                3. Any exclusivity clause in the first agreement checked.
                4. A go or wait decision on the second chain recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or wait decision on a second chain, based on six months of scorecards, spare volume and the first agreement's terms."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check six months of scorecards for the first account"
                - "Confirm how much spare weekly volume the planting plan gives"
                - "Reread the first agreement for any exclusivity clause"
                - "Record a go or wait decision on approaching a second chain"
            - name: Price review request when input costs rise
              description: |-
                ## Purpose
                Fertiliser, packaging, fuel and freight costs can rise sharply in a year while the supermarket price stays where it was set. A well-prepared price review request, with costs shown and a reasonable proposal, is far more likely to succeed than a phone call complaining about prices.

                ## Milestones
                1. Current landed cost per pack compared with the cost when the price was set.
                2. The increase per pack shown with the main causes.
                3. A written request with a proposed new price and start date sent to the buyer.
                4. The buyer's answer recorded and the new price or next step agreed.

                ## Notes
                Ask early. Many chains need several weeks' notice to change a cost price, and some only review prices at set times of year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written price review request with costs attached has been sent and the buyer's answer recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Recalculate landed cost per pack with today's input prices"
                - "Ask the buyer how much notice the chain needs for a price change"
                - "Ask the agent to draft a short price review letter from your figures"
                - "Send the request with a proposed price and start date"
            - name: Own-label and exclusive supply offers
              description: |-
                ## Purpose
                Some chains ask growers to pack under the supermarket's own brand, or to supply only them in return for steady orders. These offers can bring volume and security, but they also hide your name from customers and tie you to one buyer, so they deserve a written decision rather than a quick yes.

                ## Milestones
                1. The offer's terms in writing: volumes, price, length, packaging and exclusivity.
                2. The income and risk compared with supplying under your own label.
                3. The exit terms and notice period understood.
                4. A decision recorded, with any lawyer's comments on the terms.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the own-label or exclusive offer exists, comparing income and risk with your own brand, after the terms were read in full."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer to put the own-label or exclusive offer in writing"
                - "Compare twelve months of income under each option"
                - "Check the notice period and what happens at the end"
                - "Record the decision and tell the buyer in writing"
            - name: First delivery to a new supermarket account
              description: |-
                ## Purpose
                The first few deliveries are when the receiving clerk, the produce manager and the buyer form their opinion of a new supplier. Treating the first delivery as an event, with a dry run, extra checks and someone experienced on the truck, gives the account its best start.

                ## Milestones
                1. Delivery time, bay, receiving contact and paperwork confirmed with the store.
                2. A dry run packed and checked the day before against the spec sheet.
                3. The first load delivered on time, signed for in full, with no rejects.
                4. Feedback from the produce manager collected within a week.

                ## Notes
                Bring a few extra packs in case of damage on the road, and ask the clerk to show you how they check incoming produce.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first delivery to the new account was signed for in full, on time, with feedback from the produce manager recorded within a week."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm the delivery time, bay and receiving contact with the store"
                - "Pack and check a dry run load the day before"
                - "Ride with the driver on the first delivery"
                - "Ask the produce manager for feedback after the first week"
            - name: Christmas and festival peak supply plan
              description: |-
                ## Purpose
                Demand for produce such as sorrel, pigeon peas, chive, celery and sweet peppers jumps before Christmas, Easter, Carnival, Divali and Eid, and the buyer who was short last year remembers which supplier delivered. Planning the peak from the planting date forward means you can promise more and keep the promise.

                ## Milestones
                1. Last year's peak orders and shortages reviewed with the buyer.
                2. Peak volumes per product agreed in writing several weeks ahead.
                3. Extra plantings, packaging, labour and transport booked to match.
                4. Peak deliveries completed with fill rate recorded and lessons noted.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Peak volumes were agreed in writing ahead of the season and the peak fill rate was recorded with lessons for next year."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Ask the buyer for last year's peak orders and shortages"
                - "Agree peak volumes for each product in writing"
                - "Book extra plantings, packaging and labour for the peak weeks"
                - "Start the peak plan with the buyer well ahead of the season @recurring(yearly)"
            - name: In-store tasting or promotion day
              description: |-
                ## Purpose
                Tasting tables and promotion days let customers meet the grower and try the product, and they often lift sales for weeks after. Planning one with the store, rather than turning up with samples, gets you a good spot, a price feature and enough stock on the shelf.

                ## Milestones
                1. A date, location in store and any price feature agreed with the store manager.
                2. Stock levels for the day agreed and delivered.
                3. A simple stand with samples, a sign and a short farm story prepared.
                4. Sales on the day and the following two weeks compared with a normal fortnight.

                ## Notes
                Ask the store about its rules on food sampling, which may need gloves, covered samples or a permit.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An in-store tasting day has been held with the store's agreement, and sales for the following two weeks have been compared with a normal fortnight."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the store manager for a date and spot for a tasting day"
                - "Agree extra stock and any price feature for the day"
                - "Prepare a sign, samples and a two-line farm story"
                - "Compare the next two weeks' sales with a normal fortnight"
            - name: Supermarket supplier audit visit
              description: |-
                ## Purpose
                Many chains send a quality or technical officer to visit new suppliers and repeat the visit every year or two, looking at the field, packing area, water, hygiene, chemical records and traceability. Preparing for the visit as a dated event means walking the farm with their checklist before they do.

                ## Milestones
                1. The chain's audit checklist or questionnaire obtained.
                2. A walk-round of the farm and packing area against the checklist, with gaps listed.
                3. Every gap closed or a written plan for it ready on the day.
                4. The audit held, the report received and any actions completed by the agreed date.

                ## Notes
                Formal food safety certification is a bigger piece of work with its own area. This visit is about meeting this chain's checklist and showing your records.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The chain's supplier audit has been passed or every corrective action it raised has been closed by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the chain's quality team for their supplier audit checklist"
                - "Walk the farm and packing area against the checklist and list gaps"
                - "Gather spray, water and traceability records into one folder"
                - "Close each corrective action and send proof to the auditor"
            - name: Annual account review with the buyer
              description: |-
                ## Purpose
                Sitting down once a year with the buyer, with your scorecard, rejects, price history and ideas for next year, moves the relationship from weekly orders to a partnership. Buyers who see a supplier's own numbers tend to trust them more and talk earlier about range changes.

                ## Milestones
                1. A one-page summary of the year: volumes, fill rate, rejects, price changes and payments.
                2. Two or three proposals for next year: new products, pack sizes or promotions.
                3. The review meeting held, with notes and agreed actions.
                4. Agreed actions turned into projects or tasks within a week.

                ## Notes
                Start from the **Meeting notes** template so each year's review sits beside the last.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A yearly account review has been held with a written summary and notes, and its agreed actions are recorded as tasks."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Pull the year's volumes, fill rate, rejects and payments onto one page"
                - "Write two or three proposals for next year"
                - "Book the yearly account review with the buyer @recurring(yearly)"
                - "Turn the agreed actions into tasks within a week"
            - name: Small grower supplying one local supermarket
              description: |-
                ## Purpose
                A family farm with an acre or two can supply a single independent supermarket very well, delivering twice a week in the farm vehicle and knowing the owner by name. Setting the account up on simple terms that fit the farm's size, rather than copying a chain's system, keeps the work manageable alongside everything else.

                ## Milestones
                1. One store chosen and a simple written agreement on products, prices, days and payment.
                2. A delivery and invoicing routine that fits around other farm work.
                3. Records kept in one notebook or app: orders, deliveries, rejects and payments.
                4. A three-month review with the store owner on what to keep, add or change.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A simple written agreement with one local supermarket is in place, and three months of deliveries and payments are recorded in one place."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose the local store you would most like to supply"
                - "Write a half-page agreement on products, prices, days and payment"
                - "Set up one notebook or app for orders, deliveries and payments"
                - "Book a three-month review with the store owner"
            - name: Farmer group pooling volumes for a chain
              description: |-
                ## Purpose
                A chain may need more volume or more weeks of supply than any one small farm can give, and a group of growers pooling produce under one supplier number can win the account together. It works only if quality rules, payment shares and who does what are agreed in writing before the first delivery.

                ## Milestones
                1. A group of growers agreed on products, quality standards and a shared spec sheet.
                2. A written group agreement covering who supplies what, how payment is shared and how disputes are settled.
                3. One registered supplier, through a cooperative, company or lead farmer, set up with the chain.
                4. A monthly group meeting held to review volumes, rejects and payments.

                ## Notes
                The legal form of the group, whether cooperative, company or informal arrangement, is a decision to make with a lawyer or the cooperative registry. Agree what happens when one member's produce is rejected before it happens.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed group agreement and one registered supplier account exist, and the group has met monthly for three months to review supply."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Call three nearby growers about supplying a chain together"
                - "Agree a shared spec sheet and how rejects will be handled"
                - "Write the group agreement with advice on the legal form"
                - "Hold the group's volume and payment meeting @recurring(monthly:28)"
            - name: Moving from store delivery to the central warehouse
              description: |-
                ## Purpose
                As a chain grows, it often moves suppliers from delivering to each store to delivering to a central distribution centre, with booked time slots, pallet rules and stricter paperwork. Preparing for the change keeps the account and can save many hours of driving each week.

                ## Milestones
                1. The warehouse's delivery rules known: booking system, pallet and labelling standards, temperature checks.
                2. Packing and loading changed to meet pallet and labelling rules.
                3. A first booked delivery slot met on time and accepted.
                4. The cost of warehouse delivery compared with store-by-store delivery.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Deliveries to the chain's central warehouse are accepted on booked slots, and the cost compared with store delivery is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the chain for the warehouse's supplier delivery manual"
                - "Change packing to meet the pallet and labelling rules"
                - "Book and deliver a first slot at the distribution centre"
                - "Compare weekly delivery costs before and after the change"
            - name: Telling the buyer early about a supply shortfall
              description: |-
                ## Purpose
                Pests, drought, heavy rain or a sick worker can cut supply suddenly, and the buyer's anger comes less from the shortfall than from finding out at the receiving bay. A plan for warning the buyer early, offering substitutes or partial volumes and agreeing a recovery date protects the account through a bad patch.

                ## Milestones
                1. A rule for when to warn the buyer, such as any expected shortfall above 10 percent.
                2. A message template for shortfalls with cause, volumes, substitutes and recovery date.
                3. Two other growers identified who could cover short-term supply to the same spec.
                4. The next shortfall handled under the plan, with the buyer's response noted.

                ## Notes
                Check the supplier agreement before using another grower's produce under your name. Some chains require approval of every source.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shortfall rule and message template exist, with two backup growers named, and the next shortfall was reported before the order cut-off."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the shortfall size at which you will warn the buyer"
                - "Write a shortfall message with cause, volumes and recovery date"
                - "Ask two nearby growers whether they could cover a short gap"
                - "Check whether the agreement allows produce from other farms"
            - name: Keeping the account after a hurricane or flood
              description: |-
                ## Purpose
                After a hurricane or severe flood, supply may stop for weeks while the chain fills the shelf from imports, and the gap can become permanent if the buyer is left guessing. A clear account recovery plan, from the first message after the storm to the restart date, keeps your place on the shelf while the farm rebuilds.

                ## Milestones
                1. The supplier agreement checked for force majeure or emergency clauses.
                2. A first message sent to the buyer within days of the event with an honest assessment.
                3. A restart plan with dates for partial and full supply, agreed with the buyer.
                4. Regular updates sent until full supply resumes, and any listing kept open.

                ## Notes
                Start from the **Risk register** template to record the plan before the season. Whether a clause applies is a question for a lawyer; this project is about communication and timing.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written account recovery plan exists before hurricane season, covering the first message, restart dates and update schedule."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the agreement for any force majeure or emergency clause"
                - "Write the first post-storm message to the buyer as a template"
                - "Plan which products can restart first after crop loss"
                - "Ask the buyer how they handle supplier gaps after storms"
            - name: Handing the supermarket account to a family member or manager
              description: |-
                ## Purpose
                Supermarket accounts often live in one person's phone and memory: the buyer's name, the cut-off times, the quirks of each store. When a child takes over the farm or a manager takes on sales, writing that knowledge down and introducing the new person to the buyer keeps the account from slipping during the change.

                ## Milestones
                1. An account handbook covering contacts, agreements, specs, prices, delivery rules and payment terms.
                2. The new person shadowing orders, deliveries and reconciliation for a month.
                3. A meeting with the buyer to introduce the new contact.
                4. The new person running the account alone for a month, with a review at the end.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An account handbook exists, the buyer has met the new contact, and the new person has run the account alone for one month."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every contact, agreement and rule for the account in one document"
                - "Have the new person shadow a full month of orders and deliveries"
                - "Book a meeting to introduce the new contact to the buyer"
                - "Review the first month the new person ran the account alone"
            - name: When a supermarket stops ordering or delists a line
              description: |-
                ## Purpose
                Orders can shrink or stop with little warning because of a range review, a cheaper import, a new buyer or a run of rejects. Responding calmly, finding out why, and having somewhere else for the crop already planted can limit the damage and sometimes win the listing back.

                ## Milestones
                1. The reason for the drop or delisting asked for and recorded.
                2. Crops already in the ground redirected to other buyers.
                3. Any notice period or outstanding payments under the agreement checked and claimed.
                4. A decision made: fix and repitch, replace the account, or change the crop plan.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The reason for the delisting is recorded, planted crops have another outlet, and a written decision on the next step exists."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the buyer politely for the reason orders stopped"
                - "List crops already planted for the account and other buyers for each"
                - "Check the agreement for notice periods and claim any money owed"
                - "Decide whether to repitch, replace the account or change the plan"
            - name: Supplier portal and electronic orders
              description: |-
                ## Purpose
                Larger chains send purchase orders, receive invoices and publish payment remittances through a supplier portal or electronic data interchange, and paper invoices may be refused or paid late. Setting up the portal properly, with the right person trained, keeps orders from being missed and payments from stalling.

                ## Milestones
                1. Portal access set up with at least two people able to log in.
                2. Purchase orders, invoices and remittances located and understood in the portal.
                3. Invoices submitted through the portal and accepted without errors for a month.
                4. A routine for checking the portal on order days and payment days.

                ## Notes
                Keep login details in a password manager, not on paper in the packing shed. If the chain offers training sessions for suppliers, attend one.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two people can use the chain's supplier portal, and a full month of invoices has been submitted through it without rejection."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the chain's accounts team for supplier portal access"
                - "Find purchase orders, invoices and remittances in the portal"
                - "Submit one invoice through the portal and confirm it was accepted"
                - "Train a second person to use the portal"
            - name: Margin analysis by product and store
              description: |-
                ## Purpose
                Once supplying several products to several stores, some combinations make money and others quietly lose it through rejects, small drops and long drives. Working out the margin by product and by store every quarter shows where to grow, what to reprice and which deliveries to drop.

                ## Milestones
                1. Sales, rejects and delivery cost assigned to each product and each store.
                2. Margin per product and per store calculated for the last quarter.
                3. The two weakest combinations identified with the reason.
                4. One change made for each, such as repricing, dropping or merging deliveries.

                ## Notes
                Ask the agent to build the quarterly table from your delivery and reject logs if they are kept in a spreadsheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A quarterly table shows margin by product and by store, and one change has been made for each of the two weakest combinations."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Export a quarter's deliveries, rejects and payments into one sheet"
                - "Assign delivery costs to each store by trip"
                - "Calculate margin by product and store @recurring(quarterly)"
                - "Make one change for each of the two weakest combinations"
            - name: Category partnership with the produce buyer
              description: |-
                ## Purpose
                Experienced suppliers move from taking orders to helping the buyer plan the produce section: sharing harvest forecasts, proposing range changes, suggesting local replacements for imports and reviewing sales data together. Becoming that kind of supplier makes the account harder to replace and often brings first refusal on new lines.

                ## Milestones
                1. Store sales data for your products requested and reviewed each quarter.
                2. A seasonal harvest forecast shared with the buyer ahead of each season.
                3. One proposal made to replace an imported line with local supply.
                4. A quarterly planning conversation agreed with the buyer.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A quarterly planning conversation with the buyer is in place, and at least one proposal to replace an imported line has been made."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the buyer whether they will share sales data for your products"
                - "Prepare a seasonal harvest forecast to share with the buyer"
                - "Pick one imported line you could replace and cost it"
                - "Propose a quarterly planning conversation to the buyer"
            - name: Bidding for a chain-wide annual supply tender
              description: |-
                ## Purpose
                Some chains and their distributors run a yearly tender or supplier selection for core produce lines, inviting growers to quote prices and volumes for every store for twelve months. A strong bid needs a full year's planting plan, costed prices with a margin for risk, food safety evidence and references, all prepared before the deadline.

                ## Milestones
                1. The tender documents, deadline and evaluation criteria obtained.
                2. A twelve-month supply plan and costed price per product prepared.
                3. Evidence gathered: scorecards, audit reports, insurance and references.
                4. The bid submitted on time and the outcome recorded with feedback.

                ## Notes
                Price a year ahead with care. A fixed price for twelve months carries the risk of input cost rises, so check whether the tender allows a price review clause.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete tender bid with a twelve-month supply plan, costed prices and evidence was submitted before the deadline and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Ask the buyer whether the chain runs a yearly supply tender"
                - "Build a twelve-month supply plan for the tendered lines"
                - "Cost each line with an allowance for input price rises"
                - "Gather scorecards, audit reports and references for the bid"
---

# Supermarket Supply Contracts

Supermarket Supply Contracts is for growers who want their produce on a supermarket shelf with their name on the pack, from a smallholder pitching one independent store to a farmer group supplying a chain's central warehouse. The projects begin with the foundations: an honest readiness check, the buyer map, the registration pack, insurance, barcodes, a costed price and the supplier agreement. Then come the weekly routines of orders, quality checks, deliveries, rejects and payments, the skills of reading specifications and negotiating with a buyer, decisions on packaging and terms, dated events such as the first delivery and the Christmas peak, situations from a one-store grower to a delisted supplier, and specialist work on supplier portals, category partnerships and chain-wide tenders.

What repeats is the weekly order and availability call, the farm-gate quality check, delivery notes and reject logs, monthly invoice reconciliation, scorecards, crate counts and cash planning, quarterly recosting and promotion checks, and yearly renewals of documents, insurance and the account review. The Purchase decision, Vendor, Operational checklist, Metrics log, Meeting notes and Risk register templates pair with the projects that point to them. Contracts, insurance and food safety rules differ by country and by chain, so treat every legal or compliance point here as something to confirm with the buyer, your lawyer or the relevant authority. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
