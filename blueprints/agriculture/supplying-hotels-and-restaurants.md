---
id: agriculture.supplying-hotels-and-restaurants
name: Supplying Hotels and Restaurants
description: "A farm run as a dependable hospitality supplier: the right kitchens and lines chosen, specs and prices agreed with chefs, weekly orders and deliveries that arrive as promised, and invoices that get paid."
category: business
version: 1.0.0
tags: [agriculture, supplying-hotels-and-restaurants, small-business, hospitality, chefs, hotels, restaurants, food-service]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - purchase-decision
    - operational-checklist
    - metrics-log
  pillars:
    - name: Agriculture & Agribusiness
      emoji: "🌾"
      description: "Farming as a business, with the Caribbean in mind: vegetables, root crops, cocoa, coffee, citrus and other tree crops, poultry, goats, cattle and pigs, aquaculture and greenhouses, soil, irrigation and pest management, farm finance, selling to markets, hotels and supermarkets, agro-processing and export, insurance, hurricane resilience and extension services."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Supplying Hotels and Restaurants
          description: "Becoming a reliable supplier to hotels and restaurants: chef relationships, volumes and specifications, delivery schedules, invoicing and payment terms."
          projects:
            - name: Map of kitchens within a day's delivery range
              description: |-
                ## Purpose
                Before growing anything for the trade, you need to know who is actually buying within reach of your farm: all-inclusive resorts, boutique hotels, guesthouses, restaurants, cafes, caterers and villa chefs. A simple list with distance, size, cuisine and who does the buying shows where the volume sits and which five kitchens are worth approaching first. Without it, most growers sell to whoever answers the phone and end up with scattered, unprofitable runs.

                ## Milestones
                1. Every hotel, restaurant and caterer within about two hours' drive listed with location and type.
                2. Each entry marked with rough size (rooms or covers) and cuisine style.
                3. The buyer's role identified for each: chef, purchasing manager or owner.
                4. A first target list of five kitchens chosen, grouped so they share one delivery route.

                ## Notes
                Group targets by route, not by prestige. Two restaurants on the same road beat one famous resort an hour the other way.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written list of at least 20 kitchens with size, cuisine and buyer role, ending in five named targets on one route."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every hotel and restaurant you pass on your usual road to town"
                - "Search online maps and tourism listings for kitchens within two hours"
                - "Note room count or covers, cuisine and buyer role for each"
                - "Pick five targets that fit on one delivery route"
            - name: Choosing the produce lines chefs struggle to source
              description: |-
                ## Purpose
                Chefs rarely need another supplier of common cabbage; they need the items they import at high cost or cannot get reliably, such as herbs at peak freshness, baby greens, cherry tomatoes, sweet peppers in colour or local specialities like chadon beni and pimento peppers. Asking a handful of kitchens what they struggle to buy, then matching that against what your land grows well, gives you a short product list with a reason to exist. Getting this right decides whether chefs see you as a convenience or a necessity.

                ## Milestones
                1. At least four kitchens asked which items they import, run short of or reject most often.
                2. A list of 10 to 15 candidate lines, each marked with how well your farm can grow it.
                3. A starter range of four to six lines chosen, with one reliable staple and one speciality.
                4. The reasons for each choice recorded beside the expected price range.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A starter range of four to six lines is recorded, each backed by at least one kitchen saying it struggles to source it."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write three short questions to ask chefs about items they struggle to buy"
                - "Visit or call four kitchens on the target list with the questions"
                - "Score each mentioned item for how well your farm can grow it"
                - "Choose four to six starter lines and note the expected price"
            - name: Delivered cost per case for the hospitality trade
              description: |-
                ## Purpose
                Selling to a hotel costs more than selling at the farm gate: tighter grading leaves more seconds, the packaging is better, the delivery run takes fuel and a morning, and payment arrives 30 or more days later. Working out the true cost of one delivered case for each line shows the lowest price you can accept and stops you agreeing a price that only looks good. Purchasing managers will push on price in the first meeting, so this number has to exist before then.

                ## Milestones
                1. Production cost per kilogram or bunch taken from your farm budget for each starter line.
                2. Grade-out rate estimated, so the cost is spread over only the produce a chef would accept.
                3. Packaging, delivery fuel, time and the cost of waiting for payment added per case.
                4. A floor price and a target price written for each line.

                ## Notes
                Include the cost of the run itself. A 40 km round trip for one small order can wipe out the margin on everything in the van.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A costing sheet shows floor and target delivered prices per case for every starter line, including grade-outs, packaging, transport and credit days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull production cost per unit for each starter line from your records"
                - "Estimate the share of each harvest a chef would reject"
                - "Add packaging, fuel and driver time per case"
                - "Write a floor and a target price for every line"
            - name: Supplier registration pack for hotel purchasing
              description: |-
                ## Purpose
                Larger hotels and resort groups will not raise a purchase order until you are on their approved supplier list, and that usually means a vendor form, business registration, a tax number, bank details, sometimes proof of insurance and a reference. Having the pack ready as one folder, paper and digital, turns a three-week back and forth into a same-day reply. It also signals to the purchasing office that you run a real business.

                ## Milestones
                1. Business registration, tax registration and bank letter scanned into one folder.
                2. Public liability or product liability cover confirmed with your insurer, with the certificate filed.
                3. Two trade references lined up who agree to take a call.
                4. A one-page farm profile written with products, location, contact and delivery days.

                ## Notes
                Ask the purchasing office for its vendor form early. Forms differ between groups and some need a stamp or a signed code of conduct.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete supplier folder exists with registration, tax, bank, insurance and reference documents plus a one-page farm profile."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Scan your business and tax registration into a supplier folder"
                - "Ask your bank for a letter confirming your account details"
                - "Ask your insurer whether your cover includes product liability"
                - "Write a one-page farm profile with products and delivery days"
            - name: Product specification sheets for each line
              description: |-
                ## Purpose
                A chef saying they want good lettuce is not a specification; a head of 250 to 300 grams, crisp, no tip burn, delivered within 24 hours of harvest is. Writing one sheet per line, agreed with the chef, sets the size, colour, ripeness, pack and count so your pickers and the receiving clerk judge by the same standard. Most rejected deliveries come from a spec that was never written down.

                ## Milestones
                1. A spec sheet drafted for every starter line covering size, colour, maturity, defects allowed and pack.
                2. Each sheet reviewed with at least one chef and changed to match their kitchen.
                3. A photo of an accepted and a rejected example attached to each sheet.
                4. Copies kept in the packing area and sent to each account's receiving office.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Signed or acknowledged spec sheets with reference photos exist for every line supplied to each kitchen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a one-page spec for your most important line today"
                - "Photograph a perfect example and a reject for each line"
                - "Walk each sheet through with the chef and note their changes"
                - "Pin the agreed sheets up where produce is packed"
            - name: Trade price list and availability sheet
              description: |-
                ## Purpose
                Kitchens plan menus from what they know they can get, so a clear sheet with each line, its pack size, price, minimum order and the weeks it is available makes you easy to buy from. It also stops prices being renegotiated on every phone call. Keep it to one page that fits on a phone screen, since most chefs will read it on WhatsApp between services.

                ## Milestones
                1. A one-page list showing line, pack size, price per pack and minimum order.
                2. Availability marked by month so chefs can see gaps in advance.
                3. Delivery days, order cut-off and payment terms printed at the foot.
                4. A version saved as an image or PDF that reads well on a phone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A phone-readable price and availability sheet with pack sizes, prices, cut-off and terms is ready to send to any chef."
                cadence: rolling
              tasks:
                - "Copy your target prices into a single one-page table"
                - "Mark the months each line is normally available"
                - "Add delivery days, order cut-off time and payment terms"
                - "Revise prices against market and input costs @recurring(monthly:2)"
            - name: Choosing a delivery vehicle and cool boxes
              description: |-
                ## Purpose
                Leafy greens and herbs that sit in an open pickup at midday arrive limp, and a receiving clerk will reject them in front of you. Deciding how produce travels, whether in a covered van, a pickup with insulated boxes and ice packs, or a hired refrigerated vehicle, protects quality and the account. Price the options against your volumes rather than buying the biggest vehicle you can finance.

                ## Milestones
                1. Expected weekly volume and the longest run time estimated.
                2. Three transport options priced: covered vehicle, insulated boxes with ice, hired cold transport.
                3. One option chosen with the reason recorded.
                4. Cool boxes, ice packs or liners in place before the first regular delivery.

                ## Notes
                Start from the **Purchase decision** template. Insulated boxes and frozen packs in a shaded vehicle handle most small runs under two hours.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how produce will travel, with the chosen boxes or vehicle in use before the first regular order."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Estimate weekly cases and the longest drive on the route"
                - "Price insulated boxes and reusable ice packs for that volume"
                - "Ask a local haulier the cost of a cold van for one run a week"
                - "Record the transport choice and order what it needs"
            - name: Realistic weekly supply capacity
              description: |-
                ## Purpose
                The fastest way to lose a hotel is to promise 20 kilograms of tomatoes a week and deliver 12 in the third week. Estimating what each bed or block really yields per week, after grade-outs, rain and pest losses, tells you how much you can commit to and how much to keep as surplus for other buyers. Promise about three quarters of what you expect to harvest and you will rarely short a kitchen.

                ## Milestones
                1. Weekly marketable yield per line estimated from recent harvest records or field counts.
                2. A safety margin agreed, usually holding back about a quarter.
                3. A committed weekly volume per line recorded.
                4. A one-page capacity sheet kept current after each field walk.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current capacity sheet shows committed weekly volume per line, set below expected marketable yield."
                cadence: rolling
              tasks:
                - "Count plants or beds in harvest for each starter line"
                - "Estimate marketable kilograms per week after grade-outs"
                - "Set the committed volume at about three quarters of the estimate"
                - "Update the capacity sheet after the weekend field walk @recurring(weekly:sun)"
            - name: First chef meeting with samples
              description: |-
                ## Purpose
                Chefs buy with their hands and mouths, so a short visit with a box of your best produce, the spec sheet and the price list does more than any email. Book the meeting outside service hours, mid-afternoon on a quiet day, and ask for 15 minutes. The goal is a trial order with a date, not a contract.

                ## Milestones
                1. Meetings booked with at least three kitchens on the target list.
                2. A sample box packed to spec for each, with price list and farm profile.
                3. Feedback recorded on quality, price and pack after each visit.
                4. At least one trial order agreed with a delivery date.

                ## Notes
                Start from the **Person** template for each chef, noting their name, preferred contact, delivery window and the items they mentioned. Avoid calling between 11 and 2 or after 6.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three sample visits are completed and at least one trial order is agreed with a delivery date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Call the first target kitchen to ask for 15 minutes mid-afternoon"
                - "Pack a sample box to spec with your price list inside"
                - "Record each chef's feedback the same day as the visit"
                - "Confirm the first trial order date in writing"
            - name: Supplier food safety document pack
              description: |-
                ## Purpose
                Hotel groups, particularly those with international brands, increasingly ask suppliers for evidence of safe practice: a recent water test, a pesticide record, a cleaning routine for crates and packing surfaces and sometimes a GAP or similar certificate. Gathering what you already have into one buyer-facing pack lets you answer the questionnaire quickly and shows where the gaps are. The farm food safety system itself sits in its own area; this pack is what a buyer sees.

                ## Milestones
                1. The questionnaire or document list obtained from at least one hotel group.
                2. Existing documents gathered: water test, spray records summary, cleaning routine, any certificates.
                3. Gaps listed with a date to close each one.
                4. The pack saved as one PDF ready to email.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single PDF of food safety evidence is ready to send, with a dated list of any missing documents."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask one hotel purchasing office for its supplier food safety questionnaire"
                - "Collect your latest water test and spray record summary"
                - "List each document the questionnaire asks for that you lack"
                - "Check expiry dates on every certificate in the pack @recurring(quarterly)"
            - name: Weekly order cycle with each kitchen
              description: |-
                ## Purpose
                Kitchens work to a rhythm: the chef checks the walk-in, writes the order and expects it confirmed by a set time. Fixing two order cut-offs a week, confirming every order back in writing and flagging shortages before harvest, not at the loading dock, is what makes a farm feel like a proper supplier. It also gives you a written record if quantities are disputed later.

                ## Milestones
                1. Order cut-off days and times agreed with each account.
                2. Every order confirmed back in writing with quantities and delivery day.
                3. Any shortage flagged to the chef before harvest with a substitute offered.
                4. Orders kept in one place, a book or spreadsheet, not scattered across chats.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For eight consecutive weeks, every order is confirmed in writing before the cut-off and every shortage is flagged before delivery day."
                cadence: rolling
              tasks:
                - "Agree an order cut-off day and time with each account"
                - "Set up one order sheet with a row per account per delivery"
                - "Confirm every kitchen's order back in writing by the cut-off @recurring(weekly:mon,thu)"
                - "Message the chef before harvest whenever an item will be short"
            - name: Thursday availability message to chefs
              description: |-
                ## Purpose
                Late in the week is when chefs write weekend and next-week menus, so a short message on Thursday listing what is plentiful, what is short and any special items gives them a reason to order more of what you have. Growers who send this regularly sell their gluts to kitchens instead of dumping them at the market for half price. Keep it short, with a photo of the best item.

                ## Milestones
                1. A broadcast list or group set up with every chef and buyer.
                2. A standard message format: plentiful, limited, new this week, not available.
                3. The message sent every Thursday for at least two months.
                4. Extra orders from the message noted so you can see whether it pays.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An availability message goes to every account each Thursday for eight weeks, with resulting extra orders recorded."
                cadence: rolling
              tasks:
                - "Create a broadcast list with every chef and buyer on it"
                - "Write a four-line template for plentiful, limited, new and unavailable"
                - "Send the availability list with a photo to every chef @recurring(weekly:thu)"
                - "Mark any order that came from the Thursday message"
            - name: Delivery run routine and route
              description: |-
                ## Purpose
                Receiving windows are tight, often early morning before the lunch prep starts, and a delivery that turns up during service gets left on the dock or refused. A fixed route, a loading checklist and a departure time worked back from the first receiving window keep deliveries on time and stop the forgotten case of thyme. Run it the same way every time and anyone on the farm can do the delivery when you cannot.

                ## Milestones
                1. Receiving windows recorded for every account.
                2. A route ordered to hit each window, with a departure time.
                3. A loading checklist covering each order, delivery notes, ice packs and crates.
                4. A second person trained to run the delivery on their own.

                ## Notes
                Start from the **Operational checklist** template for the loading and departure check.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written route and loading checklist exist, deliveries arrive within receiving windows for a full month and a second person has run the route alone."
                cadence: rolling
              tasks:
                - "Ask each account for its receiving window and entrance"
                - "Order the stops so the earliest window comes first"
                - "Run the loading checklist before every delivery @recurring(weekly:tue,fri)"
                - "Ride along while a second person runs the route once"
            - name: Delivery notes and signed receipts
              description: |-
                ## Purpose
                When a hotel accounts office queries an invoice two months later, the signed delivery note is the only proof that 15 kilograms arrived, not 10. Writing a numbered note for each delivery, getting the receiving clerk's signature and name, and filing it against the invoice ends most payment disputes before they start. A duplicate book costs very little; a lost dispute costs a month's margin.

                ## Milestones
                1. Numbered duplicate delivery notes or a delivery app in use for every drop.
                2. Every note signed with the receiver's printed name and time.
                3. Any items refused or short-shipped written on the note at the dock.
                4. Signed notes filed against the matching invoice each week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every delivery for one month has a signed, numbered note filed against its invoice, with refusals written on the note."
                cadence: rolling
              tasks:
                - "Buy a numbered duplicate delivery note book"
                - "Ask each receiving clerk to print their name beside the signature"
                - "Write any refused or short items on the note at the dock"
                - "File signed delivery notes against invoices @recurring(weekly:fri)"
            - name: Invoicing and monthly statements
              description: |-
                ## Purpose
                Hotel accounts offices pay what is in front of them, matched to a purchase order or delivery note; an invoice with a missing reference sits in a pile. Sending a correct invoice with each delivery or weekly, then a monthly statement of what is outstanding, gets you into the payment run instead of the query file. Consistent numbering and references matter more than the software you use.

                ## Milestones
                1. Each account's invoicing rules recorded: PO number, address, email, frequency.
                2. Invoices numbered in sequence and issued within two days of delivery.
                3. A monthly statement sent to every account listing open invoices.
                4. Invoices and statements stored so any one can be found in a minute.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months every invoice carries the required reference and goes out within two days, and statements go to every account monthly."
                cadence: rolling
              tasks:
                - "Ask each accounts office what an invoice must show to be paid"
                - "Set up sequential invoice numbers in your book or software"
                - "Issue invoices within two days of each delivery"
                - "Send monthly statements of open invoices to every account @recurring(monthly:28)"
            - name: Debtors chase on 30-day accounts
              description: |-
                ## Purpose
                Hotels and restaurants commonly pay on 30, 45 or 60 days, and a small grower can be owed two months of sales before noticing. A weekly look at who owes what, with a polite, fixed sequence of reminders and a point where deliveries pause, protects cash for seed, feed and wages. Restaurants close without warning; the sooner you notice slow payment, the less you lose.

                ## Milestones
                1. An aged debtors list showing each account by 0 to 30, 31 to 60 and over 60 days.
                2. A reminder sequence agreed: friendly note, phone call, statement, then a pause on deliveries.
                3. A credit limit set per account based on its payment history.
                4. Overdue balance over 60 days brought below an agreed level.

                ## Notes
                Agree the pause rule when the account opens, not in the middle of a dispute. Chefs rarely control payment, so chase the accounts office and keep the chef informed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An aged debtors list is reviewed weekly for two months and no account sits over 60 days without a recorded chase step."
                cadence: rolling
              tasks:
                - "List every unpaid invoice by account and age"
                - "Write the reminder sequence and when deliveries pause"
                - "Review the aged debtors list and chase overdue invoices @recurring(weekly:wed)"
                - "Set a credit limit for each account from its payment record"
            - name: Complaints and credit note log
              description: |-
                ## Purpose
                Every supplier gets a complaint sooner or later: wilted coriander, short weight, a late drop. What keeps the account is a fast, fair response and a record that shows the problem does not repeat. Logging each complaint with cause, credit given and the fix lets you spot that every problem happens on the Friday run, or with one picker, and deal with it.

                ## Milestones
                1. A single log for complaints with date, account, item, issue and credit issued.
                2. A response rule: acknowledge the same day, replace or credit within a set time.
                3. A root cause recorded for each complaint.
                4. Repeat causes reviewed monthly and one fix applied.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every complaint for three months has a logged cause and credit, and a monthly review shows at least one repeat cause fixed."
                cadence: rolling
              tasks:
                - "Start a complaints log with columns for cause and credit"
                - "Agree how fast you will replace or credit a rejected item"
                - "Issue numbered credit notes rather than informal discounts"
                - "Review the month's complaints and credits for repeat causes @recurring(monthly:3)"
            - name: Planting plan matched to standing orders
              description: |-
                ## Purpose
                Steady weekly orders need steady weekly harvests, which means sowing small batches on a fixed schedule rather than planting a whole field at once. Working back from the standing orders, crop days to harvest and expected losses gives a sowing calendar that keeps every line in supply. This is how growers avoid the familiar glut in week six followed by nothing in week ten.

                ## Milestones
                1. Total standing weekly volume per line added up across all accounts.
                2. Days to harvest and harvest window recorded for each line.
                3. A sowing calendar showing batch size and date for the next three months.
                4. Sowings checked each month against changes in orders.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A three-month sowing calendar sized to standing orders is followed, with no line short for more than one week in the quarter."
                cadence: rolling
              tasks:
                - "Add up the standing weekly order for each line"
                - "Note days to first harvest and length of picking for each crop"
                - "Draw a sowing calendar with batch sizes for the next three months"
                - "Match next month's sowings to current standing orders @recurring(monthly:20)"
            - name: Monthly head chef check-in
              description: |-
                ## Purpose
                Chefs change menus, change jobs and change suppliers, often without telling you until the orders stop. A short monthly conversation, at the kitchen door or on the phone, about quality, upcoming menus, events and anything they wish you grew keeps you ahead of those changes. It is also where new lines and bigger orders come from.

                ## Milestones
                1. Each account's chef and sous chef recorded with preferred contact time.
                2. A check-in held with every account each month for three months.
                3. Menu changes, events and requests noted after each conversation.
                4. At least one new line or volume increase traced to a check-in.

                ## Notes
                Keep the record in the **Person** template for each chef. When a chef leaves, ask for an introduction to the replacement before they go.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every account has a recorded monthly check-in for three consecutive months, with requests and menu changes noted."
                cadence: rolling
              tasks:
                - "Record the chef and sous chef at each account with best contact time"
                - "Call or visit each head chef for feedback and menu news @recurring(monthly:12)"
                - "Write down any request for a line you do not grow yet"
                - "Ask every departing chef to introduce their replacement"
            - name: Returnable crates and packaging tracking
              description: |-
                ## Purpose
                Crates, bins and reusable boxes vanish into hotel stores at an alarming rate, and at their replacement cost a missing stack can eat a week's margin. Counting what goes out and comes back per account, marking every crate with the farm name, and agreeing that empties are returned at the next drop keeps packaging costs under control. It also matters for hygiene, since crates must come back clean or be cleaned before reuse.

                ## Milestones
                1. Every crate and bin marked with the farm name or colour.
                2. A count of crates out and returned kept per account.
                3. A rule agreed with each account for returning empties.
                4. A cleaning routine for returned crates before they go back into the field.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Crate counts per account are kept for two months and losses fall below a figure you set at the start."
                cadence: rolling
              tasks:
                - "Mark every crate and bin with the farm name or colour"
                - "Agree with each receiving office that empties come back at the next drop"
                - "Count crates out and back for each account @recurring(weekly:sat)"
                - "Wash returned crates before they go back to the field"
            - name: How hotel purchasing departments work
              description: |-
                ## Purpose
                In a large hotel the chef may choose the produce but a purchasing manager places the order, a receiving clerk weighs and checks it, a cost controller watches the price and the accounts office pays. Knowing who does what, and what each person needs from you, explains why an order the chef loved still got stuck. Small restaurants collapse all of this into the owner, which is simpler but less predictable.

                ## Milestones
                1. The roles in purchasing, receiving, cost control and accounts understood and written down.
                2. For each account, a named person recorded for each role.
                3. The path from chef request to purchase order to payment mapped for your biggest account.
                4. One thing each role needs from you noted, such as PO numbers or delivery times.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page map of the order-to-payment path for your largest account names the person in each role."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your main chef who places and approves produce orders"
                - "Introduce yourself to the receiving clerk on the next delivery"
                - "Map the steps from chef request to payment for that account"
                - "Note what each role needs from you to keep orders moving"
            - name: Reading a chef's quality language
              description: |-
                ## Purpose
                Kitchen words do not always mean what a farmer means: baby, micro, petite, heirloom, firm-ripe, two days from ready and plate-ready each describe a specific size and stage. Learning how the chefs you supply use these terms, and seeing how produce is prepped and plated, helps you pick and pack exactly what they want. Spending one prep shift in a kitchen teaches more than months of guessing.

                ## Milestones
                1. A glossary of the size and ripeness terms your chefs use, with examples.
                2. At least one prep session watched in a client kitchen.
                3. Picking instructions for your team updated with the chef's terms.
                4. Rejections for wrong size or stage reduced over the next month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written glossary of kitchen quality terms exists and the picking instructions use it, after at least one kitchen prep visit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every size or ripeness word chefs have used with you"
                - "Ask a chef if you can watch one morning prep session"
                - "Photograph how each of your lines is cut and plated"
                - "Rewrite the picking instructions using the chef's terms"
            - name: Menu reading for crop opportunities
              description: |-
                ## Purpose
                Restaurant and hotel menus are a free market survey: every dish lists ingredients someone is buying, and many are imported. Reading the menus of your target kitchens, and noting which ingredients could be grown locally, points to lines with ready demand and lets you open a conversation with a specific offer. A chef is more interested in a grower who says I noticed your salad uses rocket than one with a general product list.

                ## Milestones
                1. Menus collected from at least ten target kitchens.
                2. Ingredients listed that your farm could grow, with how often each appears.
                3. Three opportunity lines chosen for a trial planting or a chef conversation.
                4. A specific offer written for one kitchen based on its menu.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of growable ingredients from ten menus exists and one menu-based offer has been made to a kitchen."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download or photograph menus from ten target kitchens"
                - "List each ingredient your farm could grow and count its appearances"
                - "Pick three opportunity lines from the list"
                - "Write one tailored offer for a single kitchen's menu"
            - name: The tourist season demand curve
              description: |-
                ## Purpose
                In most Caribbean destinations hotel occupancy climbs from December to April and drops through the late summer and hurricane months, and restaurant volumes follow cruise calendars, festivals and holidays. Understanding when your accounts buy most, and by how much, lets you plant for the peak and line up other outlets for the slow months. A farm that only plants for an average week will be short at Christmas and swamped in September.

                ## Milestones
                1. Each account asked for its busy and slow months and rough volume swing.
                2. Past order records charted by month where they exist.
                3. Local peak events listed: carnival, festivals, cruise calendar, holidays.
                4. A month-by-month demand estimate written for the next year.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A month-by-month demand estimate for every account and the local event calendar is written for the coming year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each chef which months are busiest and slowest"
                - "Chart your past orders by month if you have them"
                - "List the festivals, holidays and cruise peaks near your accounts"
                - "Write a monthly demand estimate for the next twelve months"
            - name: Negotiating price with purchasing managers
              description: |-
                ## Purpose
                Purchasing managers are measured on food cost and will ask for your best price, a lower price for volume and longer terms, sometimes all at once. Knowing your floor price, what you can trade instead of price (consistency, delivery days, a speciality line) and when to walk away keeps you from agreeing to something you regret in month three. Practise the conversation before you have it.

                ## Milestones
                1. Floor, target and opening prices set for each line from your costing sheet.
                2. A list of things you can offer instead of a lower price.
                3. The negotiation rehearsed with a friend or mentor.
                4. The agreed prices and terms confirmed in writing after the meeting.

                ## Notes
                Never give a price cut without getting something back: a higher volume commitment, faster payment or fewer delivery days.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Prices and terms from the next negotiation are confirmed in writing and none is below the recorded floor price."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write floor, target and opening prices for each line"
                - "List three concessions you could offer instead of price"
                - "Rehearse the price conversation once with someone you trust"
                - "Email the buyer a summary of the agreed prices and terms"
            - name: Understanding supply agreements and payment terms
              description: |-
                ## Purpose
                Some hotel groups ask suppliers to sign a supply agreement covering price validity, quality, rejection rights, insurance, payment terms and termination notice. Reading it clause by clause, and knowing which points to ask about, protects you from a 90-day payment term or an open-ended rejection right hidden on page four. Have anything unclear checked by a lawyer or your business adviser before signing.

                ## Milestones
                1. The main clauses listed in plain words: price, volume, quality, rejection, payment, notice.
                2. Questions written for every clause that is unclear or one-sided.
                3. Unclear points checked with a lawyer or business adviser.
                4. A signed copy filed with a note of key dates such as price reviews.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-words summary of the supply agreement exists, with adviser input on unclear clauses recorded before signing."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the purchasing office for a copy of its standard supply agreement"
                - "Summarise each main clause in one plain sentence"
                - "Mark any clause about rejection, payment or notice you do not accept"
                - "Book a short review of the marked clauses with an adviser"
            - name: Fixed contract price versus weekly market price
              description: |-
                ## Purpose
                Kitchens like a fixed price they can cost into menus; farmers like to follow the market when it rises after a storm or in the dry season. Choosing between a fixed price per line for a season, a weekly price list, or a fixed price with an agreed band, decides who carries the risk of price swings. Compare what each option would have paid you over the last year before picking one.

                ## Milestones
                1. Last year's market prices gathered for each main line.
                2. Income under fixed, weekly and banded pricing compared for one account.
                3. A pricing method chosen per line and the reason recorded.
                4. The method explained to each account and confirmed in writing.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded pricing method per line, backed by a one-year comparison, is confirmed in writing with each account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect last year's wholesale prices for your main lines"
                - "Work out what fixed, weekly and banded pricing would have paid"
                - "Choose a pricing method for each line"
                - "Confirm the method with each account by email"
            - name: Profitability review of each account
              description: |-
                ## Purpose
                A busy account is not always a profitable one: the restaurant that orders three small boxes twice a week at the end of a long road, pays at 60 days and returns half your crates may cost you money. Working out the margin per account after delivery, credits, packaging losses and payment delay shows which to grow, which to reprice and which to let go. Most growers find one account carrying the rest.

                ## Milestones
                1. Sales, delivery cost, credits, crate losses and average days to pay listed per account.
                2. A margin figure calculated for each account.
                3. Accounts ranked and a keep, reprice or release decision made for the bottom one.
                4. The review repeated each quarter.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A quarterly margin table per account exists and a recorded decision has been made on the lowest-margin account."
                cadence: cyclic
              tasks:
                - "Pull three months of sales and credits for each account"
                - "Add delivery cost, crate losses and days to pay for each"
                - "Decide to keep, reprice or release the lowest-margin account"
                - "Recalculate margin per account @recurring(quarterly)"
            - name: Adding a speciality line chefs import
              description: |-
                ## Purpose
                Lines such as microgreens, edible flowers, baby carrots, cherry tomatoes in mixed colours or fresh turmeric often fetch several times the price of standard produce, because kitchens fly them in. Trialling one small block of a speciality line with a single committed chef tests both the growing and the sale before you scale. Pick one where the chef has said they would buy it.

                ## Milestones
                1. One speciality line chosen with a chef who has agreed to trial it.
                2. A small trial planting made with costs recorded.
                3. Trial harvests delivered and the chef's feedback recorded.
                4. A scale up, adjust or drop decision made with the margin worked out.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A trial of one speciality line is delivered to a committed chef and a recorded decision on scaling is made from its costed margin."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask your best chef which imported item they would buy locally"
                - "Source seed or planting material for a small trial block"
                - "Record every cost and hour spent on the trial"
                - "Deliver the first trial harvest and note the chef's verdict"
            - name: Raising fill rate and cutting short deliveries
              description: |-
                ## Purpose
                Fill rate, the share of ordered quantity you actually deliver, is the number purchasing managers remember when deciding whether to keep a supplier. Measuring it weekly per account, and tracing every short to its cause (planting gap, pest loss, wrong forecast, picker error), turns a vague worry into a fixable list. Aim for 95 percent or better on standing orders.

                ## Milestones
                1. Fill rate calculated per account for the last four weeks.
                2. Every short shipment given a cause.
                3. The top cause addressed with one change in planting, scouting or picking.
                4. Fill rate at or above 95 percent for four weeks running.

                ## Notes
                Start from the **Metrics log** template with one line per account per week: ordered, delivered, percent and cause of any shortfall.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly fill rate log shows at least 95 percent on standing orders for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Work out last month's fill rate for each account"
                - "Write the cause beside every short delivery"
                - "Make one change that tackles the most common cause"
                - "Log ordered versus delivered quantities per account @recurring(weekly:sat)"
            - name: Moving orders off scattered chats
              description: |-
                ## Purpose
                Orders that arrive by WhatsApp voice note, text, a call to your spouse and a word at the kitchen door are easy to miss and impossible to check later. Moving every account onto one channel, whether a shared order form, a simple spreadsheet or an ordering app, makes orders traceable and lets anyone on the farm pick from the same list. Keep it as simple as your least technical chef can manage.

                ## Milestones
                1. Every current ordering channel listed with how often it is used.
                2. One ordering method chosen that works for all accounts.
                3. All accounts moved to it, with a one-week overlap.
                4. Missed or misread orders counted before and after the change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All accounts place orders through one channel for a full month and missed orders fall compared with the month before."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count how many orders came in by each channel last month"
                - "Choose one ordering method every chef can use"
                - "Ask the agent to draft a short message explaining the new way to order"
                - "Run old and new channels side by side for one week"
            - name: Pooling supply with neighbouring growers
              description: |-
                ## Purpose
                One small farm rarely covers a resort's full list every week, and a single bad patch of weather can leave a kitchen short. Arranging with two or three trusted neighbours to supply named lines to your spec, under your account, widens the range and covers gaps, provided quality and payment between you are agreed in writing. It is often the step that makes a large hotel account possible.

                ## Milestones
                1. Two or three growers identified whose quality you have seen.
                2. A written arrangement on lines, spec, price paid to them and payment timing.
                3. A shared planting plan so you do not all grow the same thing.
                4. The first combined order delivered under one invoice.

                ## Notes
                Each partner's produce must meet the same spec sheet, and you carry the account's complaint if it does not. Check their spray records before buying from them.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written supply arrangement with at least two partner growers is in place and one combined order has been delivered to spec."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List neighbours whose produce and records you trust"
                - "Agree lines, spec and price paid with each partner in writing"
                - "Share a planting plan so lines do not overlap"
                - "Hold a planning call with partner growers @recurring(monthly:8)"
            - name: Delivering direct versus using a food distributor
              description: |-
                ## Purpose
                Food service distributors already deliver to most hotels daily and can take your produce into accounts you could never reach, but they take a margin and set their own specs. Delivering direct keeps the margin and the chef relationship but costs time, fuel and a vehicle. Comparing the two for your volume and route gives a clear choice, or a mix of both.

                ## Milestones
                1. One or two distributors asked what they pay growers and what they require.
                2. Net income per case compared for direct delivery and distributor sale.
                3. Hours per week spent on direct delivery recorded.
                4. A decision recorded: direct, distributor or a split by account or line.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on direct delivery versus distributor sale, backed by a per-case comparison and hours spent."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a food service distributor what it pays growers per case"
                - "Record the hours you spent on deliveries last month"
                - "Compare net income per case under each option"
                - "Write down which accounts or lines go which way"
            - name: High season ramp-up before December
              description: |-
                ## Purpose
                Demand jumps in the festive weeks: kitchens that buy ten boxes a week in October may want twenty-five over Christmas and the New Year, then stay high until Easter. Planning the ramp three months ahead, with extra sowings, labour, packaging and delivery days lined up, lets you meet the peak instead of turning orders away in your most profitable weeks. The planting has to start while the hotels are still quiet.

                ## Milestones
                1. Each account asked for expected high season volumes by line.
                2. Extra sowings scheduled to reach harvest by early December.
                3. Extra picking and packing labour, crates and delivery days arranged.
                4. A high season order plan confirmed with every account by mid-November.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "High season volumes are confirmed with every account and extra sowings, labour and packaging are in place before December."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask each chef for expected December to April volumes"
                - "Schedule extra sowings timed for early December harvest"
                - "Line up extra picking help and packaging for the peak"
                - "Confirm the high season plan with each account in writing"
            - name: Preparing for a hotel supplier site visit
              description: |-
                ## Purpose
                Branded hotels and resorts sometimes visit or audit a new supplier before approving them, looking at the fields, the packing area, water source, chemical store, toilets and handwashing, and your records. Preparing a short walk-through route, tidy records and answers to the obvious questions makes a good first impression and avoids a conditional approval. Treat it as a rehearsal for any future certification audit.

                ## Milestones
                1. The visit checklist or audit form obtained from the hotel.
                2. Packing area, chemical store and handwashing point checked against it.
                3. Records ready: spray log, water test, harvest and delivery records.
                4. Visit completed and any corrective actions closed by an agreed date.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The supplier visit is completed with no open major findings, and any minor actions are closed by the agreed date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the hotel what the visit will cover and request any form"
                - "Walk the farm with the form and list every gap"
                - "Put the spray log, water test and harvest records in one folder"
                - "Close each corrective action and email proof to the hotel"
            - name: Chef farm visit and harvest morning
              description: |-
                ## Purpose
                Kitchen teams who have walked your fields, tasted a tomato off the vine and met the people picking become loyal customers and talk about you to their guests. Inviting your chefs and their teams for a harvest morning, timed outside their busy service days, strengthens relationships and often produces menu stories and new orders. Keep it simple: a walk, a tasting table and something cooked from the farm.

                ## Milestones
                1. A date agreed that suits at least three chefs, outside their peak days.
                2. A walking route, tasting table and safety briefing prepared.
                3. The visit held and photos taken with permission.
                4. Follow-up messages sent with any requests that came up.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A farm visit is held with chefs from at least three accounts, and follow-up messages go out within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask your chefs which weekday morning they could visit"
                - "Plan a short field walk and a tasting table"
                - "Brief visitors on footwear, sun and where not to walk"
                - "Send each chef a thank-you note listing what they asked for"
            - name: Culinary festival or hospitality trade show stall
              description: |-
                ## Purpose
                Food festivals, restaurant weeks and hospitality trade shows gather dozens of chefs and purchasing managers in one place, which is far cheaper than visiting each kitchen. A stall or tasting with your best lines, price list and spec sheets can fill a year's prospect list in a weekend, if you follow up quickly. Choose one event where your target buyers actually attend.

                ## Milestones
                1. One event chosen where chefs and hotel buyers are known to attend.
                2. Stall, samples, price lists and a contact sign-up sheet prepared.
                3. Contacts collected with notes on what each buyer wanted.
                4. Every contact followed up within five working days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A stall is run at one hospitality event and every buyer contact collected is followed up within five working days."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List the food and hospitality events in the next six months"
                - "Ask the organiser who attends and what a stall costs"
                - "Prepare samples, price lists and a contact sheet"
                - "Follow up every new contact within five working days"
            - name: Annual price and terms review with each account
              description: |-
                ## Purpose
                Input costs for seed, fertiliser, fuel and labour rise every year, but prices agreed with a hotel tend to stay put unless the supplier raises them. Holding a planned yearly review with each account, with your costs and a year's delivery record in hand, makes a price change a routine business conversation rather than a confrontation. Time it before the hotels set their next year's food budgets.

                ## Milestones
                1. A one-page summary per account: volumes, fill rate, complaints and current prices.
                2. Proposed new prices worked out from updated costs.
                3. A review meeting held with each account's buyer.
                4. New prices and terms confirmed in writing with a start date.

                ## Notes
                Give at least 30 days' notice of a price change and send it before budget season, which many hotels run in the autumn.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each account has a yearly review on record with new prices and terms confirmed in writing and a start date."
                cadence: cyclic
              tasks:
                - "Update your delivered cost per case with this year's input prices"
                - "Prepare a one-page record for each account"
                - "Book the yearly price and terms review with each buyer @recurring(yearly)"
                - "Confirm the agreed prices and start date by email"
            - name: Low season plan for the summer months
              description: |-
                ## Purpose
                When occupancy drops from late summer into the hurricane months, hotel orders can fall by half or more, and some smaller properties close for refurbishment. Planning in advance which lines to cut back, which other buyers to sell to and what work to do on the farm keeps income going and avoids a field of produce with no one to buy it. Tell your accounts you will still be there when they reopen.

                ## Milestones
                1. Each account asked about expected low season volumes and any closure dates.
                2. Sowings reduced for lines that depend on hotel demand.
                3. At least one alternative outlet arranged for the low season surplus.
                4. Farm maintenance and repair jobs scheduled for the quiet weeks.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written low season plan lists reduced sowings, one alternative outlet and closure dates for every account."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask each account about summer volumes and closure dates"
                - "Cut back sowings for hotel-dependent lines"
                - "Line up one other outlet for any summer surplus"
                - "List the farm repairs to do in the quiet weeks"
            - name: Part-time grower supplying one restaurant
              description: |-
                ## Purpose
                Many growers start with a day job and a half-acre, supplying a single restaurant they know well. With limited hours, the trick is to supply a few lines the chef values, on one delivery day, with a standing order that does not change much week to week. Keeping it small and dependable earns the reputation that opens the next door.

                ## Milestones
                1. Two to four lines agreed with one restaurant on a standing weekly order.
                2. A single delivery day and time that fits around your job.
                3. A weekly routine for picking and packing in the hours you have.
                4. Three months of on-time deliveries before taking another account.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "One restaurant receives its standing order on the agreed day for twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Ask one restaurant owner what two to four items they would buy weekly"
                - "Agree a delivery day that fits around your working hours"
                - "Block out picking and packing time the evening before delivery"
                - "Hold off on a second account until three months are on time"
            - name: Supplying guesthouses and villa chefs
              description: |-
                ## Purpose
                Guesthouses, small boutique hotels and private villa chefs buy smaller quantities but often pay on delivery, value variety and are less fussy about uniform size. They can be a good first market and a useful outlet in the low season, but orders swing with each booking. A mixed weekly box, with a flexible add-on list, suits them better than fixed line orders.

                ## Milestones
                1. At least five guesthouses or villa managers contacted with a box offer.
                2. A mixed box format priced with optional add-ons.
                3. Payment on delivery or within seven days agreed.
                4. A booking-led ordering routine set so orders arrive with guest dates.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three guesthouse or villa accounts are buying a mixed box on short payment terms within three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List guesthouses and villa management firms near your farm"
                - "Design a mixed weekly box with optional add-ons and a price"
                - "Offer the box to five of them with payment on delivery"
                - "Ask each for guest arrival dates so you can plan picks"
            - name: Farmer group supplying a resort group
              description: |-
                ## Purpose
                A large all-inclusive resort or hotel chain may want tonnes a week across dozens of lines, far beyond one farm, and some actively look for farmer groups or cooperatives to raise local sourcing. Organising a group with a coordinator, shared spec sheets, a joint planting plan and one invoicing point lets small growers win business they could never reach alone. The group needs clear rules on quality, payment shares and what happens when a member falls short.

                ## Milestones
                1. A group of growers formed with a named coordinator.
                2. Written rules on quality, allocation of orders, pricing and payment to members.
                3. A joint planting plan covering the resort's list.
                4. A trial supply period completed and reviewed with the resort.

                ## Notes
                Agree in writing how payment flows from the resort to each member before the first delivery. Disputes over money end more groups than poor yields do.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A farmer group with written rules completes a trial supply period with a resort and holds a recorded review with its buyer."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the resort purchasing office whether it buys from farmer groups"
                - "Invite five neighbouring growers to a first meeting"
                - "Draft group rules on quality, allocation and payment shares"
                - "Build a joint planting plan against the resort's list"
            - name: Handing hotel accounts to the next generation
              description: |-
                ## Purpose
                Hospitality accounts rest on personal relationships: the chef trusts the farmer, not the farm. When a son, daughter or new manager is taking over, introducing them to every chef and buyer, handing over the order sheets, spec sheets and pricing history, and running the accounts together for a season keeps the business from slipping away in the change. Plan it before it is urgent.

                ## Milestones
                1. Every account, contact, spec sheet and price history gathered in one handover file.
                2. The successor introduced in person to each chef and purchasing manager.
                3. A season of joint running, with the successor leading orders and deliveries.
                4. Accounts formally transferred, with buyers told who to contact.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A handover file exists and every account has met the successor and confirmed them as the main contact."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Gather every account's contacts, specs and price history in one file"
                - "Take the successor on a full delivery run to meet each chef"
                - "Let the successor take the orders for one month with you checking"
                - "Write to each buyer naming the new main contact"
            - name: Scaling from restaurants to an all-inclusive resort
              description: |-
                ## Purpose
                Moving from a handful of restaurants to an all-inclusive resort can double your volume overnight, but it brings purchase orders, longer payment terms, audits and the risk of one buyer controlling most of your income. Planning the step, including working capital to carry 45 to 60 days of receivables and a cap on how much of your output one buyer takes, keeps growth from becoming dependence. Founders should model the cash before signing.

                ## Milestones
                1. The resort's volumes, terms and requirements written down.
                2. Extra land, labour and working capital needed calculated.
                3. A cap set on the share of total sales any one buyer may take.
                4. A go or wait decision made and, if go, a phased volume plan agreed with the resort.

                ## Notes
                Talk to your bank or credit union about working capital before the first large order. Receivables on 60 days at peak volumes can be several months of farm costs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or wait decision on a resort account, backed by a cash flow estimate and a cap on single-buyer share."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask the resort for its volumes, specs and payment terms in writing"
                - "Estimate the land, labour and cash needed to meet them"
                - "Set a maximum share of sales for any single buyer"
                - "Record the decision and a phased volume plan if you go ahead"
            - name: Exclusive grower deal with a signature restaurant
              description: |-
                ## Purpose
                Top restaurants sometimes want a particular variety, grown only for them, to build a dish around: a heritage tomato, a local pepper or a herb no one else supplies. An exclusive arrangement can command a premium and a long relationship, but it ties land and effort to one buyer. Write down volumes, price, exclusivity scope and what happens if either side ends it.

                ## Milestones
                1. The chef's request defined: variety, volume, season and exclusivity scope.
                2. A premium price worked out to cover the dedicated land and risk.
                3. Written terms covering minimum purchase, notice and seed ownership.
                4. The first exclusive harvest delivered and reviewed with the chef.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written exclusive supply terms are agreed and the first exclusive harvest has been delivered and reviewed with the chef."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Ask the chef exactly what variety, volume and season they want"
                - "Cost the dedicated block and add a premium for the exclusivity"
                - "Draft terms on minimum purchase, notice and who keeps the seed"
                - "Plant the exclusive block once the terms are signed"
            - name: Named-farm credit on menus and guest stories
              description: |-
                ## Purpose
                Guests increasingly want to know where their food comes from, and many hotels and restaurants are glad to name local farms on menus, boards and tours. Agreeing how your farm is credited, supplying photos and a short story, and occasionally hosting guests, builds a reputation that wins other accounts. Make sure the claims match what you actually supply.

                ## Milestones
                1. Each account asked whether it would name your farm on menus or boards.
                2. A short farm story and a set of good photos prepared.
                3. Wording agreed with each account and checked for accuracy.
                4. At least one account crediting your farm publicly.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one account credits your farm on its menu, board or website using wording you have checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your best account whether it would name your farm on the menu"
                - "Write a 100-word farm story and pick five strong photos"
                - "Check the wording the restaurant plans to use"
                - "Share a photo of the credited menu with your other prospects"
            - name: Year-round supply programme with a resort
              description: |-
                ## Purpose
                The most valuable hospitality accounts are year-round programmes where the resort commits to weekly volumes by line for twelve months and the grower plans the whole year around them. Building one needs a twelve-month crop calendar, a rolling forecast shared with the buyer, clear rules on substitutions and a mid-year review. It turns irregular orders into income you can borrow against.

                ## Milestones
                1. Weekly volume commitments by line agreed for twelve months.
                2. A crop calendar showing sowing and harvest for every committed line.
                3. A rolling eight-week forecast shared with the resort each month.
                4. Substitution and shortfall rules written into the arrangement.
                5. A mid-year review held and volumes adjusted.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A twelve-month volume programme is agreed with a resort, a forecast is shared every month and a mid-year review is recorded."
                cadence: cyclic
              tasks:
                - "Propose a twelve-month line and volume programme to your largest account"
                - "Build a crop calendar covering every committed line"
                - "Send the resort a rolling eight-week supply forecast @recurring(monthly:15)"
                - "Agree in writing how substitutions and shortfalls are handled"
            - name: Prepped and washed lines for kitchens
              description: |-
                ## Purpose
                Labour is expensive in hotel kitchens, so some will pay well for produce that arrives washed, trimmed, peeled or mixed, such as salad mixes, peeled cassava, picked herbs or diced seasoning. This moves you from farming into food handling, which usually means a licensed preparation space, cold storage and stricter hygiene. Test demand and check the licensing rules with your health authority before investing.

                ## Milestones
                1. Two or three kitchens asked which prepped items they would buy and at what price.
                2. Licensing and premises rules for food preparation checked with the health authority.
                3. Equipment, space and labour costed for one prepped line.
                4. A decision recorded on whether to start, and with which line.

                ## Notes
                Washing and cutting produce raises food safety risk because cut surfaces spoil and carry bacteria faster. Treat licensing and cold storage as conditions, not extras.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on starting a prepped line, backed by buyer prices, licensing requirements and a cost estimate."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask three chefs which prepped items save them the most labour"
                - "Contact the health authority about rules for preparing cut produce"
                - "Cost the space, equipment and labour for one prepped line"
                - "Write down whether to start and which line to start with"
            - name: Local sourcing figures for hotel sustainability reports
              description: |-
                ## Purpose
                Many hotels report the share of food bought locally for sustainability certifications, brand standards or tourism awards, and they need suppliers to provide the numbers. Sending each account a regular summary of kilograms and value supplied, with farm location, makes their reporting easy and makes you harder to replace. It is also a strong selling point for new accounts.

                ## Milestones
                1. Each account asked whether and how it reports local sourcing.
                2. A simple summary format: kilograms, value, lines and farm location per period.
                3. Summaries sent each quarter.
                4. The figures used in at least one pitch to a new account.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every account that reports local sourcing receives a quarterly summary of volumes and value supplied for a full year."
                cadence: rolling
              tasks:
                - "Ask each hotel's sustainability or purchasing lead what figures they need"
                - "Set up a summary sheet of kilograms and value by line"
                - "Send each hotel its local sourcing figures @recurring(quarterly)"
                - "Add your total local supply figure to your farm profile"
            - name: Building a hospitality supply business across farms
              description: |-
                ## Purpose
                Experienced suppliers sometimes grow beyond their own land into an aggregation business: buying from contracted growers, grading and packing to hotel specs, and delivering under one name to many kitchens. It needs a packing space, cold storage, grower agreements, working capital, a delivery fleet and staff, and it changes your job from farmer to supply manager. Write a business plan and test it with your accountant and lender first.

                ## Milestones
                1. A business plan covering grower supply, packing, cold storage, delivery and staffing.
                2. Grower agreements drafted for at least five suppliers.
                3. Working capital needs and margins checked with an accountant.
                4. Financing options discussed with a lender and a go or wait decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written business plan for a multi-farm supply operation is reviewed by an accountant and lender, ending in a recorded decision."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "List the kitchens you could serve if supply were not limited by your land"
                - "Outline packing, cold storage, delivery and staff needs"
                - "Draft a standard agreement for contracted growers"
                - "Book a meeting with your accountant to test the margins"
---

# Supplying Hotels and Restaurants

Hotels, resorts and restaurants pay better than the wholesale market and buy every week of the year, but they drop a supplier after two short deliveries or one box of soft tomatoes. This area starts with the foundations (which kitchens to target, which lines to grow, a delivered cost, supplier paperwork, specification sheets and a first meeting with samples), then the weekly machinery of availability lists, orders, delivery runs, invoices and collections, the skills of reading purchasing departments, menus and the tourist calendar, the decisions that lift margin and fill rate, the dated events of a hospitality year, variants for part-time growers, guesthouse suppliers, farmer groups and family farms, and finally exclusive grower deals, menu credits and year-round resort programmes.

The rhythm follows the kitchen week: an availability list every Thursday, orders confirmed Monday and Thursday, delivery checks before each run, a Wednesday debtors chase, monthly statements and chef check-ins, a monthly planting match against standing orders and a yearly price and terms review. The Person, Purchase decision, Operational checklist and Metrics log templates pair with your chef records, the delivery vehicle choice, the delivery run routine and the fill rate log. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
