---
id: food-nutrition.grocery-shopping-pantry-stock
name: Grocery Shopping & Pantry Stock
description: "A master staples list with minimum stock levels, a shared list and a fixed shopping day, online orders that arrive right, a grocery budget built from real receipts, and a pantry that shows at a glance what to buy."
category: personal
version: 1.0.0
tags: [food-nutrition, grocery-shopping-pantry-stock, everyone, shopping-list, pantry-stock, online-grocery, grocery-budget]
author: Aurum Technology
starter_structure:
  templates:
    - monthly-budget-bills
    - metrics-log
    - purchase-decision
    - operational-checklist
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Grocery Shopping & Pantry Stock
          description: "Running shopping lists, online orders and a stocked pantry so staples never run out and impulse buys and waste stay low."
          projects:
            - name: Master staples list for the household
              description: |-
                ## Purpose
                Most running-out moments involve items bought so automatically that nobody thinks to write them down: cooking oil, rice, tinned tomatoes, the one cereal a child will eat. A single master list of everything the household always keeps in, grouped by where it lives, becomes the checklist every weekly shopping list is built from.

                ## Milestones
                1. A list of every item the household always keeps in, usually 60 to 120 lines.
                2. Each item grouped by where it is stored: cupboard, fridge, freezer or drinks shelf.
                3. The exact brand, size or variety noted wherever a substitute would be refused.
                4. The list saved where every adult who shops can open it from their phone.

                ## Notes
                Write it while walking the kitchen, not from memory. Memory reliably forgets the things used every single day, such as salt, butter and tea.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A master staples list of every item the household always keeps in, grouped by storage place, is saved where every shopper can open it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk every cupboard, the fridge and the freezer writing down what you always keep in"
                - "Ask each household member which items they would notice missing"
                - "Note the brand or size wherever a substitute would be refused"
                - "Save the list in the same place shopping lists are written"
                - "Review the staples list for items nobody buys any more @recurring(quarterly)"
            - name: First full count of cupboard and fridge stock
              description: |-
                ## Purpose
                Kitchens almost always hold more duplicates than anyone suspects: three open bags of flour, two jars of cumin, a tin of chickpeas from two house moves ago. Counting every cupboard and the fridge once gives a true starting point for the staples list and often covers several meals before anything new is bought.

                ## Milestones
                1. Every food cupboard and the fridge emptied shelf by shelf and counted.
                2. Part-used packets of the same item combined where it is safe to do so.
                3. A dated count of what is in stock kept next to the master staples list.
                4. A use-first list of overstocked items to cook from before reordering.

                ## Notes
                Put anything past its date in a separate pile for a decision rather than straight back on the shelf, and follow your food safety authority's guidance if unsure.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated stock count of every cupboard and the fridge exists, with a use-first list of overstocked items written beside it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Clear one cupboard shelf and count what is on it"
                - "Count the remaining cupboards and the fridge against the staples list"
                - "Combine part-used packets of the same item where it is safe"
                - "Write a use-first list of overstocked items to cook from before reordering"
            - name: Grocery spend baseline from three months of receipts
              description: |-
                ## Purpose
                Ask most households what they spend on food each week and the guess comes in well under what the bank statement shows, because top-up trips, corner-shop milk and delivery fees go unnoticed. Adding up three months of grocery transactions gives a real weekly figure to plan against and shows where the money actually goes.

                ## Milestones
                1. Every grocery transaction from the last three months pulled from bank, card and app statements.
                2. Spending split into main shops, top-up trips, online orders and delivery fees.
                3. An average weekly grocery figure worked out.
                4. The three most frequent top-up purchases identified.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "An average weekly grocery spend, split by main shop, top-up, online order and fees, is calculated from three months of statements."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the last three months of bank and card statements"
                - "Mark every supermarket, convenience shop and grocery delivery payment"
                - "Ask the agent to total the marked payments by shop type and by week"
                - "Write the average weekly grocery spend at the top of the spend log"
            - name: Weekly grocery budget everyone agrees on
              description: |-
                ## Purpose
                Once the real weekly spend is known, the household can decide what it should be. A figure agreed by everyone who shops, with a small buffer and a rule for weeks that run over, stops one person quietly trimming while another keeps topping up.

                ## Milestones
                1. A weekly grocery figure agreed by every adult who buys food.
                2. A buffer of a set amount for top-ups and price rises written beside it.
                3. A rule agreed for what happens when a week goes over.
                4. The budget entered in the household budget alongside the other monthly bills.

                ## Notes
                Start from the **Monthly budget and bills** template. Set the first figure close to the baseline and lower it gradually; a budget nobody can keep is abandoned within weeks.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A weekly grocery budget with a stated buffer and an overspend rule is recorded in the household budget and agreed by every adult shopper."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Share the baseline weekly spend with everyone who shops"
                - "Agree the weekly figure and the buffer for top-ups"
                - "Agree what happens in a week that runs over budget"
                - "Compare the month's grocery spend with the budget @recurring(monthly:3)"
            - name: Choosing in-store, delivery or order-and-collect
              description: |-
                ## Purpose
                How the main shop happens shapes everything else: delivery rewards a tidy staples list, a store visit rewards an aisle-ordered list, and order-and-collect sits between. Comparing the three on time, cost, fees and freshness for your actual week settles which is the default and when to use the others.

                ## Milestones
                1. Door-to-door time recorded for an in-store shop, including travel and unpacking.
                2. Fees, minimum spends and slot availability noted for the two nearest grocers.
                3. Freshness and substitution problems noted from one trial delivery and one collection.
                4. A default method chosen, with the situations that call for another written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A default shopping method is recorded, based on timed trials of in-store, delivery and collection, with exceptions listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Time the current main shop from leaving home to finishing unpacking"
                - "Check delivery and collection fees, minimum spends and slot times nearby"
                - "Trial one delivery and one collection over the next two weeks"
                - "Record the default method and its exceptions in the shopping notes"
            - name: Shared household shopping list app
              description: |-
                ## Purpose
                Paper lists on the fridge fail the moment someone is in the shop and the list is at home, and messages asking whether milk is needed arrive too late. One shared list app synced to every phone that shops means anyone can add an item the moment they notice it, and anyone in a shop sees the whole list.

                ## Milestones
                1. A shared list app chosen that works on every phone in the household.
                2. Every adult and older child who shops or adds items invited.
                3. The master staples list loaded as saved items that can be ticked back on in one tap.
                4. List categories set to match the layout of your usual store.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared list app holds the master staples list and every household shopper has added at least one item to it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pick a free shared list app that works on every phone in the house"
                - "Invite every household member who shops or adds items"
                - "Load the master staples list as saved items"
                - "Agree that nothing is bought for the house without going on the list first"
            - name: Minimum stock levels for the top twenty staples
              description: |-
                ## Purpose
                Knowing that you keep rice is not the same as knowing when to buy more. Setting a minimum for the twenty items that hurt most when they run out, such as two litres of milk, one spare bag of pasta or one unopened jar of coffee, turns restocking into a quick check rather than a judgement call.

                ## Milestones
                1. The twenty staples whose absence causes the most disruption chosen.
                2. A minimum quantity set for each: the point at which it goes on the list.
                3. A restock-to quantity set for each: the amount to buy back up to.
                4. Both levels written on the staples list or on the shelf edge.

                ## Notes
                Base the minimum on how long it takes to restock, not only on how fast it is used. An item sold in just one shop across town needs a higher minimum than one sold at the corner.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty named staples each have a written minimum and restock-to quantity on the master staples list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the twenty staples that cause the most trouble when they run out"
                - "Set a minimum and a restock-to level for each one"
                - "Add both levels to the master staples list"
                - "Raise or lower levels based on what actually ran out @recurring(quarterly)"
            - name: Pantry zones and shelf layout
              description: |-
                ## Purpose
                Cupboards arranged by whoever unpacked last mean the same item lives in three places and nobody can see what is low. Giving each shelf a fixed job, such as tins, grains and pasta, baking, breakfast, sauces and condiments, makes a glance enough to see what needs buying.

                ## Milestones
                1. Every food cupboard given zones, drawn on a simple map.
                2. Everyday items at eye and hand height, rarely used items higher up.
                3. Shelf labels or a cupboard map in place so everyone puts shopping away the same way.
                4. Room left in each zone for a normal restock.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every food cupboard has labelled zones that match a written map, and the household unpacks the next shop into them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sketch a map of every food cupboard and shelf"
                - "Assign each shelf a zone such as tins, grains, baking or breakfast"
                - "Move items into their zones and label the shelf edges"
                - "Show the household the zones before the next shop is unpacked"
            - name: Shopping list ordered by store aisle
              description: |-
                ## Purpose
                Zig-zagging back across a supermarket for forgotten tomato puree adds ten minutes and another pass by the snack aisle. Ordering the list to follow the walking route of your usual store, from produce at the entrance to frozen near the tills, makes the main shop faster and less tempting.

                ## Milestones
                1. The walking route of your main store noted section by section.
                2. Staples list categories reordered to follow that route.
                3. The shared list app set to sort items in the same order.
                4. One timed shop with the ordered list compared with a normal shop.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The shared list sorts items in the walking order of the main store and one timed shop has been compared with a previous one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Walk the main store once noting the order of each section"
                - "Reorder the categories on the staples list to match the route"
                - "Set the shared list app to sort by those categories"
                - "Time the next main shop and compare it with the last one"
            - name: Airtight containers and labels for dry goods
              description: |-
                ## Purpose
                Half-open bags of rice, oats and flour are hard to count, easy to spill and an open invitation to pantry moths. Decanting the dry goods you buy often into clear airtight containers, labelled with contents and date filled, shows stock levels at a glance and keeps food in good condition.

                ## Milestones
                1. A list of dry goods worth decanting, usually ten to fifteen items.
                2. Containers chosen that hold one full pack plus a little spare.
                3. Every container labelled with contents and the date filled.
                4. Cooking instructions from the packets kept, taped to the container or saved in a note.

                ## Notes
                Do not top up an old batch with new stock. Finish the container, wipe it out, then refill, so older food never sits at the bottom for months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least ten regularly bought dry goods are stored in labelled airtight containers sized to one full pack."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the dry goods bought often enough to be worth decanting"
                - "Measure one pack of each to choose container sizes"
                - "Buy or reuse clear airtight containers for the list"
                - "Label each container with its contents and the date it was filled"
            - name: Fixed-day weekly shop routine
              description: |-
                ## Purpose
                A shop that happens whenever the fridge looks empty usually turns into three smaller trips and a bigger bill. Fixing one day for the main shop, with the list finished the evening before, gives the week a rhythm and tells everyone when their requests need to be on the list.

                ## Milestones
                1. One day and time agreed for the main weekly shop.
                2. A list-finishing slot the day before, with a cut-off for requests.
                3. The routine kept for four weeks in a row.
                4. Top-up trips between main shops counted and falling.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The main shop has happened on the agreed day for four consecutive weeks from a list finished the day before."
                cadence: rolling
              tasks:
                - "Choose a day and time for the main shop that suits the household's week"
                - "Tell everyone the cut-off for adding items to the list"
                - "Check the staples shelves and finish the shopping list @recurring(weekly:fri)"
                - "Do the main weekly shop from the finished list @recurring(weekly:sat)"
            - name: Last one opened goes on the list
              description: |-
                ## Purpose
                Stock runs out because the person who opens the last jar assumes someone else will notice. One house rule, that whoever opens the last pack or takes stock below its minimum adds it to the list on the spot, closes a gap that no amount of planning fixes.

                ## Milestones
                1. The rule agreed with everyone in the household, including older children.
                2. A short reminder on the inside of the main cupboard door.
                3. Any staple that ran out unlisted recorded with the reason.
                4. A month in which no staple ran out without being on the list first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full month passes in which every staple that ran out was already on the shared list before it was finished."
                cadence: rolling
              tasks:
                - "Explain the last-one rule to everyone at a mealtime"
                - "Put a short reminder note inside the main cupboard door"
                - "Record any staple that ran out without being listed, and why"
                - "Talk through the misses at the end of the month and adjust the rule"
            - name: Online grocery order and delivery slot routine
              description: |-
                ## Purpose
                Online grocery shopping saves time only when the order is built quickly and slots are booked before the good ones go. A weekly routine of saved favourites, a slot booked days ahead and a check of each delivery against the order keeps fees low and mistakes refunded.

                ## Milestones
                1. The master staples list saved as favourites or a repeat basket in the grocer's app.
                2. A regular delivery slot booked at least four days ahead.
                3. Each delivery checked against the order on arrival.
                4. Missing items and refused substitutions refunded or credited every time.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly deliveries were booked ahead, checked on arrival and any missing items refunded."
                cadence: rolling
              tasks:
                - "Save the master staples list as favourites in the grocer's app"
                - "Book next week's slot as soon as this week's order arrives"
                - "Build the online basket from favourites and the shared list @recurring(weekly:wed)"
                - "Check the delivery against the receipt and claim missing items @recurring(weekly:thu)"
            - name: Monthly bulk stock-up shop
              description: |-
                ## Purpose
                Heavy, long-life staples such as tins, pasta, rice, oil and flour take less effort bought once a month in quantity than squeezed into every weekly shop. A monthly stock-up from a fixed bulk list leaves the weekly shop light, quick and mostly fresh food.

                ## Milestones
                1. A bulk list of long-life items bought monthly rather than weekly.
                2. Quantities set to last one month, based on the stock count.
                3. Shelf space confirmed for a full month of each item.
                4. The weekly list stripped of anything now bought monthly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly stock-up shops have been done from a written bulk list, and those items no longer appear on weekly lists."
                cadence: rolling
              tasks:
                - "Mark long-life items on the staples list that could move to a monthly buy"
                - "Work out how much of each the household uses in a month"
                - "Check there is shelf space for a month of each item"
                - "Do the monthly bulk stock-up shop @recurring(monthly:14)"
            - name: Stock rotation when unpacking the shopping
              description: |-
                ## Purpose
                New tins pushed in front of old ones mean the oldest stock is always the last to be used. Unpacking every shop the same way, new stock behind and older stock brought forward, costs no extra time once it is a habit and stops the back of the cupboard filling with things past their best.

                ## Milestones
                1. Everyone who unpacks shopping shown the new-behind rule.
                2. Room at the back of each zone for a normal restock.
                3. No two packs of the same item open at the same time.
                4. Older items found at the front of every zone at the next stock count.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At the next stock count, older stock sits in front of newer stock in every zone and no item has two packs open."
                cadence: rolling
              tasks:
                - "Show each person who unpacks shopping how to put new stock behind old"
                - "Clear enough room at the back of each zone for a normal restock"
                - "Bring older packs forward while putting the next shop away"
                - "Check the front rows of every zone at the next stock count"
            - name: Weekly receipt check and grocery spend log
              description: |-
                ## Purpose
                Checking receipts catches pricing errors, missed offers and items charged twice, and the same five minutes feeds a running spend log. With the log in place, the monthly budget check takes seconds and drift in spending shows up while there is still time to act.

                ## Milestones
                1. A spend log with date, shop, amount and type of shop for every grocery purchase.
                2. One agreed place where paper and digital receipts wait until logged.
                3. Overcharges reported to the shop and refunds noted.
                4. Four consecutive weeks logged in full.

                ## Notes
                Start from the **Metrics log** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The grocery spend log holds every grocery purchase for four consecutive weeks, with any overcharges and refunds noted."
                cadence: rolling
              tasks:
                - "Create a grocery spend log from the metrics log template"
                - "Pick one place where every grocery receipt goes until it is logged"
                - "Check the week's receipts for errors and log each grocery spend @recurring(weekly:sun)"
                - "Report any overcharge to the shop and record the refund"
            - name: Quarterly pantry stock audit
              description: |-
                ## Purpose
                Even a well-run pantry drifts: a sauce nobody liked, a spice bought for one recipe, a second bag of lentils opened before the first was finished. A short audit every three months against the staples list resets the counts, surfaces anything to use soon and keeps the minimum levels honest.

                ## Milestones
                1. Every cupboard counted against the master staples list.
                2. Items to use within the month moved to one front shelf.
                3. Lines the household no longer buys removed from the staples list.
                4. Any staple that ran out since the last audit given a higher minimum.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audits are recorded across a year, each with an updated count and changes to the staples list."
                cadence: cyclic
              tasks:
                - "Count the pantry against the master staples list @recurring(quarterly)"
                - "Move anything to use soon onto one front shelf"
                - "Remove staples list lines that nobody has bought in three months"
                - "Raise the minimum on any staple that ran out this quarter"
            - name: Repeat delivery for heavy and bulky staples
              description: |-
                ## Purpose
                Some staples are heavy to carry, used at a steady rate and identical every time, such as milk, bottled water, breakfast cereal, coffee or large bags of rice. Moving them onto a repeat order or milk round takes them off the list entirely, provided quantities are reviewed before they pile up.

                ## Milestones
                1. Three to six staples identified with steady, predictable use.
                2. A repeat order set up for each at a frequency matched to use.
                3. Delivery dates visible in the household calendar.
                4. Quantities adjusted after the first two deliveries.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three heavy staples arrive on repeat orders, and none has built up more than a month of surplus stock."
                cadence: rolling
              tasks:
                - "List staples used at a steady rate that are heavy or bulky to carry"
                - "Compare the repeat-order price with the normal shelf price for each"
                - "Set up repeat orders for the items that are cheaper or easier that way"
                - "Adjust repeat order quantities to what was actually used @recurring(monthly:20)"
            - name: Snack and drinks cupboard restock routine
              description: |-
                ## Purpose
                Snacks and drinks run out faster and less predictably than anything else, and an empty snack cupboard on a busy morning leads straight to the corner shop. A dedicated shelf, a short fixed list with weekly quantities and one weekly check keep them stocked in planned amounts rather than bought on impulse at full price.

                ## Milestones
                1. One shelf or box for snacks and one area for drinks.
                2. A fixed list of snacks and drinks with weekly quantities per person.
                3. A weekly check that feeds shortfalls into the main shopping list.
                4. Corner shop snack trips counted and fewer than before.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Snacks and drinks have their own listed quantities and shelf, and the household counts fewer corner shop trips for them over a month."
                cadence: rolling
              tasks:
                - "Clear one shelf or box to hold all the snacks"
                - "Agree a weekly quantity of snacks and drinks for each person"
                - "Add the snack and drinks list to the master staples list"
                - "Check snack and drinks stock and add shortfalls to the list @recurring(weekly:thu)"
            - name: Loyalty points, coupons and vouchers routine
              description: |-
                ## Purpose
                Loyalty schemes pay out only for people who load the offers, use vouchers before they expire and convert points at the best rate. A ten-minute monthly routine across the two or three schemes you really use turns scattered points into a known saving, while dropping the schemes that only bring junk mail.

                ## Milestones
                1. Every grocery loyalty scheme in the household listed with its card or app.
                2. Schemes for shops used less than monthly cancelled.
                3. Personalised offers loaded before each main shop.
                4. Points and vouchers used before expiry, with the yearly saving noted.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No loyalty points or vouchers expired unused in the last six months, and the yearly saving from schemes is written down."
                cadence: rolling
              tasks:
                - "List every grocery loyalty card and app the household holds"
                - "Cancel schemes for shops used less than once a month"
                - "Load the digital offers in your main grocer's app before the next shop"
                - "Use or convert points and vouchers before they expire @recurring(monthly:25)"
            - name: Reading unit prices on shelf labels
              description: |-
                ## Purpose
                The bigger pack is not always cheaper per kilo, and promotions are often priced to look like a saving when the unit price says otherwise. Learning to read the unit price on the shelf label, and to compare per 100 grams or per litre across sizes, brands and loose versus packed, is the most useful single shopping skill there is.

                ## Milestones
                1. The unit price located on the shelf labels of your main store.
                2. Ten regular items compared across two pack sizes each.
                3. Loose versus packed fruit and vegetables compared per kilo.
                4. At least three items switched to a cheaper size or format.

                ## Notes
                Shops sometimes use different units for similar products, such as per 100 grams on one and per item on another. Convert to the same unit before comparing.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten regular items have been compared by unit price across sizes and at least three switched to a cheaper size or format."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find where the unit price is printed on your main store's shelf labels"
                - "Compare ten regular items across two pack sizes on the next shop"
                - "Compare loose and packed versions of five fruits and vegetables"
                - "Switch any item where another size or format is clearly cheaper"
            - name: Price book for thirty regular items
              description: |-
                ## Purpose
                Without a reference, there is no way to tell whether a promotion is a good price or just the normal price on a red label. A price book of the thirty items you buy most, with the usual and the lowest price seen at each shop, makes stocking up a confident decision rather than a guess.

                ## Milestones
                1. Thirty regular items chosen from the spend log and staples list.
                2. Usual price and lowest seen price recorded for each at two shops.
                3. A stock-up price set for each item that keeps well.
                4. The price book updated monthly for three months.

                ## Notes
                Keep it to thirty items. A short price book that stays current is worth far more than two hundred lines abandoned after a month.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A price book lists thirty items with usual, lowest and stock-up prices at two shops, updated in each of three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick the thirty items that appear most often in the spend log"
                - "Record the current price of each at your two most used shops"
                - "Set a stock-up price for each item that keeps well"
                - "Update five prices in the price book after a shop @recurring(monthly:9)"
            - name: Own-brand versus branded swap trial
              description: |-
                ## Purpose
                Own-brand staples often cost considerably less than the branded version, but the household only sticks with swaps it cannot tell apart or genuinely prefers. A month-long trial of ten swaps, tasted blind where possible, settles which ones stay and which branded items are worth the extra.

                ## Milestones
                1. Ten branded staples chosen, each with an own-brand or cheaper equivalent.
                2. Each swap tried at least twice, blind where possible.
                3. A verdict recorded for each: keep the swap, return to the brand, or try another.
                4. The staples list updated with the winners and the monthly saving noted.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A verdict is recorded for ten brand swaps and the staples list names the version the household will buy from now on."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose ten branded items that have own-brand equivalents"
                - "Buy both versions of the first three for a blind taste test"
                - "Record each household member's verdict on every swap"
                - "Update the staples list with the swaps that won"
            - name: Picking fresh produce and chilled food in the shop
              description: |-
                ## Purpose
                Ripeness, shelf dates and timing decide whether fresh food lasts the week or turns on day two. Learning to pick produce and chilled food for the day you plan to eat it, with firm fruit for later in the week and the longest date on the shelf, means fewer soft avocados and fewer midweek top-ups.

                ## Milestones
                1. Ripeness signs learnt for the ten fruits and vegetables bought most.
                2. A habit of checking dates across the whole shelf, not just the front row.
                3. Fresh items bought ripe for early in the week and firm for later.
                4. A week in which no fresh produce was thrown away for being overripe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A full week passes with no fruit or vegetables thrown away for being overripe, using ripe and firm buying for the same item."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up ripeness signs for the ten fruits and vegetables you buy most"
                - "Check dates across the whole shelf on the next shop"
                - "Buy one ripe and one firm batch of a fruit eaten all week"
                - "Note which fresh items still spoiled and why"
            - name: How supermarket layouts steer spending
              description: |-
                ## Purpose
                Stores put milk and bread at the back, offers at the ends of aisles and the most profitable brands at eye level, and none of it is accidental. Knowing the half-dozen layout tactics in your own store makes it easier to walk past them and to look high and low for the better-value lines.

                ## Milestones
                1. The main layout tactics noted from a walk round your own store.
                2. Eye-level and bottom-shelf prices compared in five categories.
                3. End-of-aisle offers checked against the normal unit price.
                4. A one-line personal rule written for each tactic that catches you most.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written notes cover your store's layout tactics, five shelf-height price comparisons and a personal rule for the two that catch you most."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Walk your main store noting where bread, milk and offers are placed"
                - "Compare eye-level and bottom-shelf prices in five categories"
                - "Check three end-of-aisle offers against the normal unit price"
                - "Write a one-line rule for each tactic that usually catches you"
            - name: Multibuy and promotion maths
              description: |-
                ## Purpose
                Three for two is only a saving if all three get used, and a half-price offer on an item raised in price last month may be no saving at all. Practising a few quick checks on each promotion, comparing unit price, usual price and how much the household will really use, stops deals from inflating the bill.

                ## Milestones
                1. A three-question check for promotions written on your phone.
                2. Ten promotions checked against the price book over a month.
                3. Offers taken only for items on the staples list that will be used within their dates.
                4. The month's genuine saving totalled, along with the offers skipped.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten promotions have been checked against the price book in a month, with the genuine saving and the skipped offers recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-question check for promotions on your phone"
                - "Check every promotion in the next main shop against the price book"
                - "Skip any offer for items that are not on the staples list"
                - "Total the month's genuine savings from promotions"
            - name: Reduced-to-clear timing at your local stores
              description: |-
                ## Purpose
                Most supermarkets mark down short-dated stock at predictable times of day, and those times differ from branch to branch. Learning when your nearest shops reduce bread, meat and chilled food, and what the household can freeze or eat that night, turns reductions into planned savings rather than random bargains.

                ## Milestones
                1. Reduction times found for your two nearest stores.
                2. A list of reduced items the household will freeze or eat the same day.
                3. Freezer space kept free for reduced bread and meat.
                4. A month of savings from reductions recorded.

                ## Notes
                Freeze reduced items the day you buy them if you will not eat them that night, and follow the packaging and your food safety authority's guidance on freezing before the date.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reduction times for two stores are written down and a month of reduced-price purchases and savings is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask staff at your two nearest stores when they reduce short-dated food"
                - "List the reduced items you would freeze or eat that night"
                - "Visit at reduction time once a week for a month"
                - "Record what was bought and the saving against full price"
            - name: Substitution and preference settings for online orders
              description: |-
                ## Purpose
                Unwanted substitutions, such as skimmed milk for whole or a different brand of baby food, are the most common complaint about grocery delivery, and most can be prevented in the app's settings. Setting item-level substitution rules and preference notes once, and learning how the grocer handles refunds and doorstep rejections, makes each delivery match the order.

                ## Milestones
                1. Substitutions switched off for every item where only one version will do.
                2. Notes added to fresh items with a specific size or ripeness need.
                3. The grocer's refund and doorstep rejection process understood.
                4. Two deliveries in a row with no unwanted substitutions.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Substitution settings and preference notes are set in the grocer's app and two consecutive deliveries arrive with no unwanted swaps."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the substitution settings in your grocer's app"
                - "Block substitutions on items where only one version will do"
                - "Add a preference note to fresh items, such as firm bananas"
                - "Reject unwanted substitutions at the door on the next delivery"
            - name: Warehouse club or cash and carry membership decision
              description: |-
                ## Purpose
                Membership warehouses and cash and carry outlets can be much cheaper per unit, but only for households with the storage, the transport and the appetite to get through catering sizes. Pricing your real basket there on one trip, against the fee and the travel, gives a clear yes or no.

                ## Milestones
                1. The nearest warehouse or cash and carry identified, with membership cost and terms.
                2. Twenty staples priced there per unit against your usual shop.
                3. Storage and transport checked for the bulk sizes on offer.
                4. A decision recorded with the yearly saving or the reason to skip it.

                ## Notes
                Start from the **Purchase decision** template. Count only items you would really buy in that size; a five-kilo tub of mayonnaise is no saving for two people.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded join-or-skip decision compares twenty staples per unit against the membership fee and travel cost."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the nearest warehouse or cash and carry and its membership terms"
                - "Price twenty of your staples there per unit, on a day pass if offered"
                - "Compare the yearly saving against the fee and the travel"
                - "Record the decision and the reasoning"
            - name: Head-to-head basket comparison of two supermarkets
              description: |-
                ## Purpose
                Loyalty to one store is often habit rather than price. Pricing the same basket of twenty-five regular items at two supermarkets on the same day shows the real difference on your shopping, not on the handful of products in their adverts.

                ## Milestones
                1. A fixed basket of twenty-five items taken from the spend log.
                2. The basket priced at your current store and one alternative on the same day.
                3. Quality differences noted for the fresh items.
                4. A decision on where the main shop happens, with the expected yearly difference.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A twenty-five item basket has been priced at two supermarkets on one day and the choice of main store recorded with its yearly difference."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy twenty-five of your most bought items into a comparison sheet"
                - "Price the basket on both stores' websites on the same day"
                - "Buy the fresh items from both stores once to compare quality"
                - "Decide on the main store and note the expected yearly difference"
            - name: Which staples are worth buying in bulk
              description: |-
                ## Purpose
                Bulk buying saves money only on items that keep well, get used steadily and have somewhere to live. Testing the case for a handful of staples, with the unit saving, shelf life and space needed for each, avoids the familiar trap of a garage full of cheap things nobody eats.

                ## Milestones
                1. A shortlist of ten staples that keep for six months or more unopened.
                2. Bulk and normal-size unit prices compared for each.
                3. Monthly use worked out to confirm a bulk pack will be finished before its date.
                4. A bulk-buy list of only the items that pass all three tests.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written bulk-buy list names the staples that passed the unit price, shelf life and storage tests, with the rest ruled out."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List ten staples that keep for six months or more unopened"
                - "Compare the bulk and normal-size unit price for each"
                - "Check how long a bulk pack of each would last the household"
                - "Add the items that pass to the monthly bulk list"
            - name: Thirty-day impulse buy cut
              description: |-
                ## Purpose
                Impulse buys are rarely one big item; they are the chocolate at the till, the second offer, the ingredient for a recipe that never gets made. Marking every off-list item on receipts for a month shows exactly what slips into the trolley, and a few simple rules then bring it down noticeably.

                ## Milestones
                1. Off-list items marked on every grocery receipt for thirty days.
                2. The month's off-list spend totalled and grouped by type.
                3. Three personal rules written for the biggest categories.
                4. A second month's off-list spend lower than the first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Off-list spending is totalled for two consecutive months, with the second month lower than the first."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Highlight every item not on the list on this week's receipts"
                - "Keep marking off-list items on every receipt for thirty days"
                - "Group the month's off-list spending by type"
                - "Write three rules for the categories that cost the most"
            - name: Delivery pass or saver subscription decision
              description: |-
                ## Purpose
                Grocery delivery passes trade a monthly or yearly fee for free or cheaper delivery, usually with a minimum spend and restricted slots. Counting how many deliveries the household actually takes, and when, shows whether a pass pays for itself or quietly costs more than paying per order.

                ## Milestones
                1. Deliveries and fees over the last three months counted.
                2. Two or three passes compared on price, minimum spend and slot rules.
                3. The break-even number of deliveries per month worked out.
                4. A decision made, with the renewal date in the calendar if subscribing.

                ## Notes
                Start from the **Purchase decision** template.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A subscribe-or-skip decision on a delivery pass is recorded with the break-even number of deliveries per month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count deliveries and fees paid over the last three months"
                - "Compare the passes offered by the grocers you use"
                - "Work out how many deliveries a month each pass needs to break even"
                - "Set a reminder a week before any pass renews"
            - name: Planned midweek top-up for fresh food
              description: |-
                ## Purpose
                Fresh milk, bread and salad rarely last a full week, so many households make two or three unplanned top-up trips, each of which costs more than the item they went in for. Planning one short midweek top-up from a fixed list, ideally on a trip already being made, such as the school run or the commute, keeps fresh food fresh without the extra spending.

                ## Milestones
                1. Unplanned top-up trips counted over two weeks.
                2. A short fixed list of fresh items bought midweek.
                3. One midweek top-up day chosen that fits a trip already in the diary.
                4. No more than one top-up trip a week for a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For four consecutive weeks the household made no more than one top-up trip a week, from a fixed midweek list."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count how many top-up trips the household makes over two weeks"
                - "Write a fixed midweek list of no more than eight fresh items"
                - "Choose one top-up day that fits a route you already travel"
                - "Compare the month's top-up count with the starting figure"
            - name: Pantry shelving and storage upgrade
              description: |-
                ## Purpose
                If tins are stacked three deep and the bulk rice lives on the floor, no stock system will last. Measuring the cupboards and choosing a few targeted upgrades, such as tiered tin risers, pull-out baskets or a freestanding larder unit, makes room for the stock levels the household has set.

                ## Milestones
                1. Every food cupboard measured, with the worst spots photographed.
                2. Storage needs listed from the minimum levels and the bulk list.
                3. Two or three options compared on fit, price and capacity.
                4. Upgrades fitted and the zones restocked.

                ## Notes
                Start from the **Purchase decision** template. Measure shelf depth and the gap between shelves, not just width; many organisers sold online do not fit standard kitchen cupboards.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Chosen storage upgrades are fitted in measured cupboards and every staple at its restock-to level has a place."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Measure every food cupboard and photograph the worst spots"
                - "List what storage the minimum levels and bulk list need"
                - "Compare two or three storage options that fit the measurements"
                - "Fit the chosen storage and restock the zones"
            - name: Refill shop and loose produce trial
              description: |-
                ## Purpose
                Refill shops and loose produce sections let you buy exactly the quantity you need in your own containers, cutting packaging and sometimes cost. A four-week trial on a handful of dry goods and fresh produce shows whether the price, the travel and the container washing suit your household.

                ## Milestones
                1. The nearest refill shop or refill aisle found, with its range and opening times.
                2. Containers weighed empty and labelled for five dry goods.
                3. Refill prices per kilo compared with the packed equivalents.
                4. A decision on which items, if any, move to refill for good.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "After four weeks, a written decision names which items move to refill, based on recorded prices per kilo."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the nearest refill shop or supermarket refill aisle"
                - "Weigh and label five clean containers for dry goods"
                - "Buy five dry goods by refill and note the price per kilo"
                - "Decide which items stay on refill after four weeks"
            - name: Annual pantry clear-out and reset
              description: |-
                ## Purpose
                Once a year every food cupboard deserves emptying: to wipe it down, check for pests, clear out expired items and rethink the zones around how the household now eats. Doing it before the busiest season of your year means the pantry starts that season clean and accurately counted.

                ## Milestones
                1. Every food cupboard emptied, cleaned and checked for pantry moths or spills.
                2. Expired and unwanted items cleared, with sealed in-date food donated.
                3. Zones rearranged where eating habits have changed.
                4. A fresh stock count recorded against the staples list.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All food cupboards have been emptied, cleaned and restocked in one session, with a new dated stock count recorded."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Choose a date for the clear-out and block out a morning"
                - "Empty, wipe and check each cupboard for pests one at a time"
                - "Take sealed, in-date food you will not use to a food bank"
                - "Record a new stock count against the staples list"
                - "Book the next pantry clear-out in the calendar @recurring(yearly)"
            - name: Pantry stock-up before the festive season
              description: |-
                ## Purpose
                Delivery slots vanish weeks before major holidays, shops close or keep short hours, and guests double how fast staples go. Building up long-life stock gradually over the six weeks before, then buying only fresh food in the last few days, spreads the cost and avoids the crush.

                ## Milestones
                1. Holiday dates, shop closures and expected guest numbers noted.
                2. A list of long-life extras such as flour, tins, drinks and snacks.
                3. Extras bought across several weekly shops rather than all at once.
                4. The holiday delivery or collection slot booked the day booking opened.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Long-life holiday extras were bought across at least three weekly shops and a holiday delivery or collection slot was secured."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Note the holiday dates, shop closures and expected guests"
                - "List long-life extras to add one or two at a time to weekly shops"
                - "Book the holiday delivery or collection slot the day booking opens"
                - "Start the stock-up list six weeks before the next holiday @recurring(yearly)"
            - name: Running down the pantry before a house move
              description: |-
                ## Purpose
                Moving full cupboards is heavy and messy, and freezers have to be emptied before they travel. Six weeks before a move, stopping restocks and using what is already in the house means only one box of essentials needs to make the trip.

                ## Milestones
                1. A stock count taken six weeks before moving day.
                2. Restocking stopped for everything except fresh food and genuine gaps.
                3. Every stock item marked as use up, give away or move.
                4. Unopened surplus donated or given away before moving day.
                5. A first-night box packed with tea, coffee, snacks and basics.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On moving day the cupboards and freezer are empty apart from one packed first-night box of food and drink basics."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count cupboard and freezer stock six weeks before moving day"
                - "Pause the staples list for anything already in stock"
                - "Mark each stock item as use up, give away or move"
                - "Pack a first-night box of food and drink basics"
            - name: Seventy-two hour emergency food and water store
              description: |-
                ## Purpose
                Storms, power cuts, illness and supply disruption can each make a normal shop impossible for a few days. A small store of food that needs no fridge and little or no cooking, plus drinking water, sized to your household and rotated into everyday meals, turns a disruption into an inconvenience rather than an emergency.

                ## Milestones
                1. Your local authority's guidance on household emergency supplies checked.
                2. Three days of no-cook or low-cook food and water stored for every person.
                3. Special needs covered, such as baby formula, medical diets or allergies.
                4. A manual tin opener and a contents list kept with the store.
                5. A rotation routine set so items are eaten before their dates.

                ## Notes
                Follow your local authority's quantities for water rather than guessing, and include anything a household member cannot go without for three days.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A boxed three-day food and water store for every household member exists, with a contents list and a rotation schedule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up your local authority's guidance on household emergency supplies"
                - "List three days of no-cook food and water for each person"
                - "Buy the store over two or three shops and keep it in one box"
                - "Eat the oldest items from the store and replace them @recurring(quarterly)"
            - name: First full shop for a new home
              description: |-
                ## Purpose
                A new kitchen starts with nothing: no salt, no oil, no stock cubes, and every recipe needs three things you do not have. Building the first shop in two stages, essentials for the first week and then the full staples list over a month, avoids one enormous bill and a pile of packs the new cupboards have no room for.

                ## Milestones
                1. A first-week essentials list of no more than thirty items.
                2. The new kitchen's cupboard and fridge space measured before the full stock-up.
                3. The rest of the staples list bought over four weekly shops.
                4. Zones set up in the new cupboards as stock arrives.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a month of moving in, every item on the master staples list is in stock and stored in zones in the new kitchen."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a first-week list of thirty essential food items"
                - "Book a delivery for the day after moving in, or find the nearest shop"
                - "Measure the new cupboards before buying any bulk sizes"
                - "Add a quarter of the remaining staples to each of the next four shops"
            - name: Restocking after a long trip away
              description: |-
                ## Purpose
                Coming home after two weeks away to a fridge emptied before leaving usually means an evening dash for milk or an expensive takeaway. Booking a delivery for the day of return and freezing a few breakfast basics makes the homecoming easy and keeps the shopping routine intact.

                ## Milestones
                1. Perishables used up or frozen in the week before leaving.
                2. Repeat deliveries paused for the dates away.
                3. A return-day delivery or collection booked before departure.
                4. Bread, milk and breakfast basics in the freezer for the first morning.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "On the day you return, a booked delivery or collection arrives and breakfast for the next morning is already in the freezer."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Plan the last week's shopping so perishables run out before you leave"
                - "Pause any repeat deliveries for the dates away"
                - "Book a delivery or collection for the day you get home"
                - "Freeze bread and milk for the first morning back"
            - name: Weekly shop for an older relative or neighbour
              description: |-
                ## Purpose
                Shopping for someone else means their brands, their budget and their way of storing things, not yours, and small mistakes such as the wrong milk or packs too big to finish matter more when someone lives alone. A fixed weekly arrangement with a written list of their staples, an agreed way to pay and a quick look at what is running low protects both their cupboards and their independence.

                ## Milestones
                1. A list of their regular items with exact brands and sizes.
                2. A weekly day and method agreed: you shop, an online delivery, or a trip together.
                3. A way to pay agreed, with receipts kept for them.
                4. A quick cupboard and fridge check built into each visit or call.
                5. A backup shopper named for weeks you cannot do it.

                ## Notes
                Ask before reorganising their cupboards or throwing anything out. If you notice a change in appetite or a fridge that is always full, mention it to their family or doctor.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Their weekly shop has arrived on the agreed day for a month, from a written list, with receipts kept and a backup shopper named."
                cadence: rolling
              tasks:
                - "Sit with them and write their regular items with brands and sizes"
                - "Agree the shopping day, the method and how payment works"
                - "Phone them for this week's list and anything running low @recurring(weekly:mon)"
                - "Keep each receipt for them with the change or card statement"
                - "Name a backup shopper for weeks you are away"
            - name: Shared staples kitty for housemates
              description: |-
                ## Purpose
                In shared houses, milk, oil, salt and tea are used by everyone and bought by whoever cracks first, which builds quiet resentment. A small kitty or a bill-splitting app for an agreed list of communal staples, with a clear rule for who restocks, keeps it fair and the cupboard stocked.

                ## Milestones
                1. A short list of communal staples agreed by every housemate.
                2. A contribution agreed and a kitty or splitting app set up.
                3. A rota or rule for who restocks each shared item.
                4. The balance settled at the end of every month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every housemate pays into the shared staples kitty and three monthly balances have been settled without a dispute."
                cadence: rolling
              tasks:
                - "Agree with housemates which staples are shared"
                - "Set up a shared kitty or a bill-splitting app"
                - "Agree who buys the shared staples each week"
                - "Settle the shared staples balance at the month end @recurring(monthly:28)"
            - name: Stocking the cupboards before a new baby arrives
              description: |-
                ## Purpose
                The first weeks with a newborn leave little time or energy for shopping, and a missing staple means a tired parent heading out at odd hours. Building up long-life staples in the last month of pregnancy, setting up a tested repeat online order and stocking one-handed snacks lets the household run on autopilot for six weeks.

                ## Milestones
                1. Six weeks of long-life staples in stock by the due date.
                2. A repeat online grocery order set up and tested before the birth.
                3. A shelf of one-handed snacks and drinks stocked for feeding times.
                4. A visiting relative or friend added to the shared shopping list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By the due date, six weeks of long-life staples are in stock and one repeat online order has been delivered successfully."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Raise the minimum levels on the staples list to cover six weeks"
                - "Set up and test a weekly repeat online grocery order"
                - "Stock a shelf of one-handed snacks and drinks for night feeds"
                - "Add a helper who visits to the shared shopping list"
            - name: Shopping with young children along
              description: |-
                ## Purpose
                Taking toddlers or young children to the supermarket can double the time and add a basket of pester-power extras. A few tactics, such as shopping after a snack, giving each child a job from the list and a clear rule on treats, make it bearable and turn it into useful practice for them.

                ## Milestones
                1. The household's rule on treats agreed before the next shop.
                2. A short picture or word list for each child to find items from.
                3. Shops timed after a meal and away from nap times.
                4. Three shops in a row without an unplanned treat at the till.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three consecutive shops with the children were completed from the list with no unplanned treats bought."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Agree the rule on treats with the other parent or carer"
                - "Make a short picture list for each child to tick off"
                - "Plan the next shop for after a snack and outside nap times"
                - "Note which tactics worked after each of the next three shops"
            - name: Grocery shopping without a car
              description: |-
                ## Purpose
                Without a car, every shop is limited by what can be carried, so heavy items crowd out fresh food and trips multiply. Splitting the shopping into heavy goods delivered monthly and light fresh food bought on foot or by bike, with the right trolley or rucksack, takes most of the weight off each trip.

                ## Milestones
                1. Heavy and bulky items moved to a monthly delivery or repeat order.
                2. A wheeled trolley, rucksack or bike panniers chosen for the regular shop.
                3. Fresh food shopping fitted around walking, cycling or public transport routes.
                4. A typical carried load that can be managed comfortably door to door.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Heavy staples arrive by monthly delivery and every carried shop for a month was managed in one trip with the chosen bag or trolley."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Mark the heaviest items on the staples list"
                - "Move those items to a monthly delivery order"
                - "Choose a wheeled trolley, rucksack or panniers for the fresh shop"
                - "Plan fresh shops around routes you already walk or travel"
            - name: Annual grocery spend review by category
              description: |-
                ## Purpose
                A year of spend log entries shows patterns no single month can: seasonal spikes, creeping top-up trips, delivery fees and categories that grew without anyone noticing. A yearly review set against the budget decides next year's weekly figure and the one or two changes most worth making.

                ## Milestones
                1. Twelve months of grocery spending totalled from the spend log.
                2. Spending split by store, type of shop and fees.
                3. The year compared with the budget and with the year before.
                4. Next year's weekly budget set and two changes chosen.

                ## Notes
                Food prices rise most years, so compare what was bought as well as what was spent before deciding the household is overspending.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written annual review shows grocery spend by store, shop type and fees, with next year's weekly budget and two changes recorded."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Export twelve months of entries from the spend log"
                - "Ask the agent to summarise the year's spending by store, shop type and fees"
                - "Compare the year against the budget and the previous year"
                - "Set next year's weekly budget and two changes to make"
                - "Book the next annual spend review @recurring(yearly)"
            - name: Group bulk buying with neighbours or a food co-op
              description: |-
                ## Purpose
                Wholesale and co-op suppliers sell sacks of oats, cases of tinned tomatoes and catering tins of olive oil at prices no single household can use up. Joining or starting a buying group with a few neighbours, with a shared order sheet, a collection point and a fair way to split cases, brings wholesale prices down to household quantities.

                ## Milestones
                1. Three to six households signed up and a supplier with a minimum order chosen.
                2. A shared order sheet listing items, case sizes and per-unit prices.
                3. A collection point and a regular date for splitting the delivery.
                4. Payment collected before ordering so the organiser is never out of pocket.
                5. Two group orders completed and the saving per household noted.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two group orders have been placed, split and paid for in full, with the saving per household written on the order sheet."
                cadence: rolling
              tasks:
                - "Ask three neighbours or friends whether they would join a monthly group order"
                - "Find a wholesaler or food co-op that delivers to buying groups"
                - "Set up a shared order sheet with case sizes and per-unit prices"
                - "Collect every household's payment before the order is placed"
                - "Place the group order from the shared sheet @recurring(monthly:5)"
            - name: Barcode pantry inventory system
              description: |-
                ## Purpose
                For larger households, bulk buyers or anyone who wants real numbers, a barcode inventory app tracks every item in and out and builds the shopping list from whatever falls below its minimum. Setting it up properly takes a weekend, and the payoff is a pantry that reports its own gaps.

                ## Milestones
                1. An inventory app chosen that scans barcodes and supports minimum levels.
                2. Every master staples item entered with its location and minimum.
                3. A scanning habit in place: in when unpacking, out when opening.
                4. Shopping lists generated from the app for four weeks running.
                5. App counts matching a manual audit to within five items.

                ## Notes
                Most systems fail at the scan-out step. Keep the phone stand or a cheap scanner where packs are opened, not where they are stored.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The barcode inventory has produced the shopping list for four consecutive weeks and matches a manual audit to within five items."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Compare two or three pantry inventory apps that scan barcodes"
                - "Enter every master staples item with its location and minimum level"
                - "Scan new stock in while unpacking the next three shops"
                - "Generate the shopping list from the app and check it against a manual count"
---

# Grocery Shopping & Pantry Stock

This area is for anyone who keeps a household fed and is tired of running out of milk, buying a fourth jar of paprika or spending more each week without knowing why. It starts with the foundations (a master staples list, a first stock count, a real spend baseline, a budget, a shared list and minimum stock levels), moves to the routines that keep the cupboards full, then the shopping skills of unit prices, price books and promotion maths, the decisions about where and how to shop, the events that upset normal stock, situations such as shopping for a relative or without a car, and finally the systems an experienced household runs, from group buying to a barcode inventory.

What repeats is the Friday list and Saturday shop (or a Wednesday online basket and Thursday delivery check), a Sunday receipt log, a monthly budget check on the 3rd, a bulk stock-up on the 14th, a quarterly pantry audit and a yearly clear-out and spend review. The Monthly budget and bills, Metrics log, Purchase decision and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
