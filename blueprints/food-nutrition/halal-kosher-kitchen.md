---
id: food-nutrition.halal-kosher-kitchen
name: Halal & Kosher Kitchen
description: "A kitchen run to the halal or kosher standard your household keeps: certified sourcing, label checks, meat and dairy separation, kashering, and festivals such as Passover and Eid al-Adha planned around the rules."
category: personal
version: 1.0.0
tags: [food-nutrition, halal-kosher-kitchen, everyone, halal, kosher, kashrut, certification, religious-dietary-law]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - purchase-decision
    - operational-checklist
    - reading-queue
    - weekly-meal-plan
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Halal & Kosher Kitchen
          description: "Keeping a kitchen in line with religious dietary laws, sourcing certified ingredients and adapting recipes and festivals around them."
          projects:
            - name: Household dietary standard agreed with your adviser
              description: |-
                ## Purpose
                Observant households differ widely: which certifiers they accept, whether stunned meat is allowed, how long they wait between meat and dairy, whether machine-slaughtered chicken or prawns are permitted. Sitting down once with your imam, rabbi or a scholar you trust and writing the answers on one page gives every later shopping, cooking and hosting decision a reference point instead of a family argument.

                ## Milestones
                1. A list of the open questions your household actually disagrees about or is unsure of.
                2. A conversation held with your chosen religious adviser on those questions.
                3. A one-page household standard written in plain words, covering meat, dairy, alcohol, certification and doubtful ingredients.
                4. Every adult in the household has read the page and agreed to it.

                ## Notes
                Where your adviser says a matter is a personal choice, write down the choice you made and why, so it is not reopened every month.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page household dietary standard, based on a conversation with a named religious adviser, is agreed by every adult in the home."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the five questions your household is least sure about"
                - "Book a conversation with your imam, rabbi or a scholar you trust"
                - "Write the answers as a one-page household standard"
                - "Read the page through with every adult who cooks at home"
            - name: Pantry and freezer audit against your standard
              description: |-
                ## Purpose
                Most kitchens hold products bought before anyone checked them: sweets made with gelatine, stock cubes with animal fat, a bottle of cooking wine, chicken from an unknown source. A full sweep of cupboards, fridge and freezer against your household standard shows what can stay, what needs a closer look and what has to go.

                ## Milestones
                1. Every shelf, the fridge and the freezer checked item by item.
                2. Items sorted into keep, check further and remove.
                3. Removed items given away, returned or discarded as your adviser suggests.
                4. A short list of replacements to buy written.

                ## Notes
                Unopened products you cannot use can often go to a neighbour or a food bank rather than the bin.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every food item in the house has been checked, with doubtful items resolved and a replacement list written."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Empty one cupboard and check each label against your standard"
                - "Sort everything into keep, check further and remove"
                - "Look up the check-further items on the certifier's product search"
                - "Give unopened unsuitable food to a neighbour or food bank"
            - name: Accepted certification bodies list
              description: |-
                ## Purpose
                Not every symbol on a packet means the same thing. Some halal certifiers accept stunned meat and others do not, and some kosher symbols carry strict supervision while others are disputed within the community. A written list of the marks your household trusts, with a picture of each, makes decisions on the shop floor quick and consistent.

                ## Milestones
                1. The certifiers your adviser or community recognises listed by name.
                2. A photo of each accepted symbol saved on your phone.
                3. Marks your household does not rely on listed separately, with the reason.
                4. The list shared with everyone who shops for the house.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A list of accepted and not-accepted certification marks, with pictures, is on the phone of every person who shops for the house."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your adviser which certification bodies they rely on"
                - "Photograph each accepted symbol from a product in your cupboard"
                - "Note the marks your household will not rely on and why"
                - "Share the list with everyone who shops for the house"
                - "Check the list against your community's latest guidance @recurring(yearly)"
            - name: Hidden animal and alcohol ingredients watchlist
              description: |-
                ## Purpose
                Ingredients that break the rules often hide behind technical names: gelatine (E441), carmine from insects (E120), edible bone phosphate (E542), shellac (E904), L-cysteine (E920), and mono and diglycerides (E471) that may be plant or animal. A watchlist on your phone turns the ingredient panel of an uncertified product from guesswork into a two-minute check.

                ## Milestones
                1. A watchlist of E-numbers and ingredient names with their usual sources.
                2. Each entry marked avoid, ask or fine for your household.
                3. The watchlist saved where you can see it in a shop.
                4. Three products from your cupboard checked against it as practice.

                ## Notes
                Where an ingredient can be plant or animal, only the manufacturer or a certifier can tell you which. Email the manufacturer and keep the reply.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A watchlist of at least ten ingredient names and E-numbers, each marked avoid, ask or fine, is saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the ingredients you already know to avoid"
                - "Add the E-numbers that can come from animals or insects"
                - "Mark each entry avoid, ask or fine using your adviser's view"
                - "Ask the agent to turn the watchlist into a one-screen phone note"
            - name: Meat, dairy and pareve zones in a kosher kitchen
              description: |-
                ## Purpose
                Keeping meat and dairy apart is easier when the kitchen itself is divided: a counter, a sink area and a cupboard for each, with pareve kit somewhere neutral. Mapping the zones once, before buying anything, stops the slow muddle where a dairy spoon ends up in the meat drawer and nobody is sure which pan is which.

                ## Milestones
                1. A sketch of the kitchen with meat, dairy and pareve zones marked.
                2. Sinks, counters, the hob and the oven each given a rule your rabbi has approved.
                3. Cupboards and drawers labelled by zone.
                4. Your waiting time between meat and dairy written on the kitchen rules card.

                ## Notes
                Waiting times vary by custom, commonly one, three or six hours. Use the one your family or rabbi follows, not a neighbour's.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A zone map approved by your rabbi is in the kitchen and every cupboard and drawer is labelled meat, dairy or pareve."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Sketch the kitchen and mark where meat and dairy cooking happen now"
                - "Ask your rabbi how to handle the sink, oven and hob you share"
                - "Label each cupboard and drawer meat, dairy or pareve"
                - "Stick the zone map inside a cupboard door"
            - name: Colour-coded cookware and utensil sets
              description: |-
                ## Purpose
                Two full sets of pans, cutlery, chopping boards and tea towels, each in its own colour, are what make separation work when someone tired is cooking. Red for meat and blue for dairy is a common convention, and a third colour for pareve items, or for the pan a non-observant housemate uses, saves a lot of second-guessing.

                ## Milestones
                1. A colour code chosen and written on the kitchen rules card.
                2. An inventory of what you already own in each set.
                3. Gaps filled so each set can cook a full meal on its own.
                4. Every item marked with its colour by handle, tape or engraving.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each set of cookware and utensils can cook a complete meal on its own and every item carries its colour mark."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose a colour for meat, dairy and pareve and write it down"
                - "Count the pans, boards and cutlery you already have in each set"
                - "List the items missing from each set before buying anything"
                - "Mark every handle with coloured tape or an engraving"
            - name: Making existing cookware fit for use
              description: |-
                ## Purpose
                Whether you are newly keeping kosher, have had a meat and dairy mix-up, or are bringing pans once used for pork into a halal kitchen, the question is the same: what can be cleaned or kashered and what must be replaced. Methods depend on the material and on how the item was used, so the answer comes from your adviser, item by item, not from a general rule.

                ## Milestones
                1. A list of every pan, utensil and appliance in question, with its material.
                2. Your adviser's ruling on each item recorded: usable after cleaning, kasher it, or replace it.
                3. Items that can be kashered or cleaned done by the method given.
                4. Items that cannot be used removed and replacements bought.

                ## Notes
                Glass, metal, ceramic, enamel, non-stick and plastic are often treated differently, and some customs hold that certain materials can never be made usable again. Ask before buying replacements.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every questioned item in the kitchen has a recorded ruling from your adviser and has been kashered, cleaned or replaced accordingly."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every questioned pan and utensil with its material"
                - "Take the list to your adviser and record a ruling on each item"
                - "Kasher or clean the items as instructed, one batch at a time"
                - "Replace the items that cannot be made usable"
            - name: Trusted halal or kosher butcher shortlist
              description: |-
                ## Purpose
                Meat is where certification matters most and where trust is hardest to judge from across a counter. Comparing two or three butchers on their certifier, slaughter method, freshness, price and delivery gives you a regular supplier, plus a back-up for when the first one sells out before a festival.

                ## Milestones
                1. Two or three local or delivering butchers identified.
                2. Each one's certificate seen, with its certifier and expiry date noted.
                3. Slaughter method, stunning policy and meat source asked of each.
                4. A main butcher and a back-up chosen.

                ## Notes
                Start from the **Vendor** template. A certificate on the wall should name the shop, the certifier and a date still in force.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main and a back-up certified butcher are chosen, with the certifier and certificate expiry recorded for each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your community which butchers they actually use"
                - "Visit or call three and photograph each current certificate"
                - "Ask each about slaughter method, stunning and where the meat comes from"
                - "Choose a main butcher and a back-up and save their numbers"
                - "Check each butcher's certificate is still in date @recurring(yearly)"
            - name: Household kitchen rules card
              description: |-
                ## Purpose
                Rules that live in one person's head break the first time someone else cooks. A single laminated card on the fridge, with the colour code, what never comes into the house, the waiting time if you keep one and who to ask when unsure, lets a teenager, a visiting relative or a helper get it right.

                ## Milestones
                1. The household standard condensed to no more than ten lines.
                2. The card printed, laminated and fixed to the fridge or inside a cupboard.
                3. Every regular cook in the house walked through it once.
                4. A photo of the card shared in the family group chat.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A kitchen rules card of ten lines or fewer is on display and every regular cook in the house has been shown it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Cut your household standard down to ten short lines"
                - "Print and laminate the card"
                - "Fix the card to the fridge or inside the main cupboard"
                - "Walk each regular cook through the card in the kitchen"
            - name: Certification check on the weekly shop
              description: |-
                ## Purpose
                Formulations change and new products slip in, so a quick check on every shop matters more than a big audit once a year. Two minutes at unpacking, looking for an accepted mark or running the ingredient watchlist, catches the biscuit that changed recipe before it is half eaten.

                ## Milestones
                1. A house rule that nothing new goes in the cupboard unchecked.
                2. Uncertified new items checked against the watchlist on the day they arrive.
                3. Anything doubtful set aside on a check-further shelf.
                4. Four consecutive weeks of shopping checked at unpacking.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly shops are checked at unpacking, with doubtful items held on a check-further shelf until resolved."
                cadence: rolling
              tasks:
                - "Clear a small shelf to hold check-further items"
                - "Check new products for an accepted mark as you unpack @recurring(weekly:thu)"
                - "Resolve or remove anything left on the check-further shelf"
            - name: Brand certification status watch
              description: |-
                ## Purpose
                Certifiers publish alerts when a product loses its certification, is mislabelled or carries a fraudulent mark, and supermarket own brands can switch suppliers without notice. Checking those alerts once a month against the brands you rely on is the cheapest protection against eating something you thought was fine.

                ## Milestones
                1. The alert pages or newsletters of your accepted certifiers bookmarked or subscribed to.
                2. The brands the household buys every week listed.
                3. A monthly check of alerts against that list in the calendar.
                4. Any affected product removed and the household told.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Certifier alerts are checked against the household's regular brands every month for six months, with any affected product removed."
                cadence: rolling
              tasks:
                - "Subscribe to the alert page or newsletter of each accepted certifier"
                - "List the twenty brands the household buys most often"
                - "Check certifier alerts against your brand list @recurring(monthly:9)"
                - "Tell the household when a regular product is affected"
            - name: Household approved products list
              description: |-
                ## Purpose
                Families waste hours rechecking the same products and arguing over whether a cereal was ever confirmed. A shared list of checked products, with the mark or reason each one is acceptable and the date it was checked, becomes the household's memory and speeds up every shop.

                ## Milestones
                1. A shared list with columns for product, brand, reason it is accepted and date checked.
                2. At least forty regular products entered.
                3. The list open to everyone who shops.
                4. Entries older than a year rechecked.

                ## Notes
                A shared note or spreadsheet on everyone's phone works better than a printed list that goes out of date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared list of at least forty checked products, each with a reason and a check date, is used by every shopper in the household."
                cadence: rolling
              tasks:
                - "Create a shared list with product, brand, reason and date checked"
                - "Enter the products from your last two shops"
                - "Share the list with everyone who shops"
                - "Recheck the entries that are more than a year old @recurring(quarterly)"
            - name: Separate washing-up and drying system
              description: |-
                ## Purpose
                Mixing happens most often at the sink, not the stove: a meat pan soaking in the dairy bowl, one sponge for everything, a dishwasher run with both. Separate bowls, racks, sponges and towels, plus a clear answer from your rabbi on the dishwasher, close the commonest gap in a kosher kitchen.

                ## Milestones
                1. Separate washing-up bowls or sink inserts, sponges, racks and towels in each colour.
                2. A ruling on whether and how your dishwasher can be used for both.
                3. Storage for each set that keeps them apart when dry.
                4. A month without a sink mix-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Meat and dairy washing-up kit is fully separate and colour coded, with a written dishwasher rule and a month with no sink mix-ups."
                cadence: rolling
              tasks:
                - "Buy a washing-up bowl, sponge and towel in each colour"
                - "Ask your rabbi how your dishwasher may be used"
                - "Store each set away from the other once dry"
                - "Note any sink mix-up and what caused it"
            - name: Monthly certified meat order and freezer rotation
              description: |-
                ## Purpose
                Certified meat often means a trip across town or a minimum delivery order, so buying monthly and freezing in meal-sized packs saves money and prevents the week with nothing compliant to cook. Rotating the oldest packs forward keeps quality up and stops meat getting lost at the back of the freezer.

                ## Milestones
                1. A standard monthly order agreed with your butcher.
                2. Meat portioned and labelled with cut, date and certifier on arrival.
                3. Older packs moved to the front each month.
                4. Three months without running out or binning freezer-burnt meat.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly orders are placed, portioned and labelled, with no meat binned for freezer burn."
                cadence: rolling
              tasks:
                - "Write the household's standard monthly meat order"
                - "Place the monthly order with your butcher @recurring(monthly:3)"
                - "Portion and label each pack with cut, date and certifier"
                - "Move the oldest packs to the front of the freezer @recurring(monthly:18)"
            - name: Shabbat cooking and food warming routine
              description: |-
                ## Purpose
                With no cooking from candle lighting on Friday until nightfall on Saturday, every Shabbat meal has to be cooked in advance and kept warm within the rules your family follows. A fixed Friday routine covering the menu, the order of cooking and how the hot plate, blech or slow cooker is set turns a weekly rush into something calm.

                ## Milestones
                1. Your rabbi's guidance on how food may be kept warm and served on Shabbat written down.
                2. A standard Friday cooking order that finishes an hour before candle lighting.
                3. The hot plate, blech or slow cooker set up the same way every week.
                4. Four Shabbatot in a row with everything ready on time.

                ## Notes
                Start from the **Weekly meal plan** template and keep Friday night and Saturday lunch on it. A cholent or other slow-cooked dish solves Saturday lunch.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive Shabbatot have all food cooked and warming arrangements set before candle lighting."
                cadence: rolling
              tasks:
                - "Ask your rabbi how food may be kept warm and reheated on Shabbat"
                - "Plan Friday night and Saturday lunch on the weekly meal plan"
                - "Finish cooking and set the hot plate an hour before candle lighting @recurring(weekly:fri)"
                - "Write the Friday cooking order on one card"
            - name: Certified takeaways and restaurants list
              description: |-
                ## Purpose
                Certified places open, close and lose their certificates more often than people expect, and word of mouth lags behind. A short list of takeaways and restaurants you have checked, with the certifier and a last-checked date, gives the household somewhere to eat on a tired night without the doubt.

                ## Milestones
                1. Certified places within reach listed with their certifier.
                2. Each one's certificate seen in person or on the certifier's website.
                3. Places that only claim to be halal or kosher, without a certificate, noted separately.
                4. The whole list rechecked every quarter.

                ## Notes
                Fully certified and owner-declared are different things. Some families accept owner-declared halal and some do not; settle it in your household standard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A list of at least five certified eateries, each with its certifier and a check date from the last quarter, is shared with the household."
                cadence: rolling
              tasks:
                - "List the takeaways and restaurants the household already uses"
                - "Look each one up on its certifier's website"
                - "Separate certified places from owner-declared ones"
                - "Recheck every certificate on the list @recurring(quarterly)"
            - name: Annual kitchen review with your adviser
              description: |-
                ## Purpose
                Households drift: a new appliance arrives, a teenager starts cooking, a product rule changes, a question gets put off. A yearly review with your imam, rabbi or adviser, bringing the standard, the rules card and a list of open questions, keeps the kitchen consistent and settles the year's doubts in one conversation.

                ## Milestones
                1. Open questions collected through the year in one note.
                2. The household standard and rules card brought to the review.
                3. Rulings from the review written into the standard.
                4. The rules card reprinted if anything changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review with your adviser is held for two consecutive years, with rulings written into the household standard each time."
                cadence: cyclic
              tasks:
                - "Start a note for kitchen questions that come up during the year"
                - "Book the yearly kitchen review with your adviser @recurring(yearly)"
                - "Write each ruling into the household standard"
                - "Reprint the rules card if anything changed"
            - name: Kashrut basics study plan
              description: |-
                ## Purpose
                Keeping kosher by rote works until something unusual happens. Understanding the categories of meat, dairy and pareve, the reasons behind waiting times and what makes a utensil or product unfit lets you ask better questions and explain the rules to children, and a short plan with a book, a class or a study partner covers the basics in about three months.

                ## Milestones
                1. A beginner text or class chosen on your rabbi's recommendation.
                2. A weekly study slot kept for twelve weeks.
                3. The main categories summarised on one page in your own words.
                4. A list of questions taken back to your rabbi.

                ## Notes
                Start from the **Reading queue** template to hold the books and articles you are working through.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve weekly study sessions are completed and a one-page summary of the main rules is written in your own words."
                cadence: phased
                effort_hours_estimate: "18"
              tasks:
                - "Ask your rabbi for one beginner book or class on kashrut"
                - "Add the book and two articles to your reading queue"
                - "Study for half an hour in a fixed weekly slot @recurring(weekly:sun)"
                - "Write a one-page summary of the categories in your own words"
            - name: Halal and haram food rules across the schools
              description: |-
                ## Purpose
                The core prohibitions are shared, but the schools of law and contemporary scholars differ on seafood, stunning, machine slaughter, meat from the People of the Book and traces of alcohol in flavourings. Learning where the main positions sit, and which one your family follows, makes it easier to respect a guest's stricter standard and to answer children's questions.

                ## Milestones
                1. A trusted introductory source or class chosen.
                2. The core prohibitions and the category of doubtful foods summarised.
                3. The main differences between schools on five questions noted.
                4. Your family's position on each question confirmed with your adviser.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note summarising the core rules and the main differences on five questions, with the family's position marked, is saved."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your imam or a scholar for one introductory text or class"
                - "Note the core prohibitions and what counts as doubtful"
                - "Study one disputed question each week @recurring(weekly:wed)"
                - "Mark which position your family follows on each question"
            - name: Reading kosher label codes such as D, DE, M and P
              description: |-
                ## Purpose
                A small letter beside a kosher symbol changes what a product can be eaten with. D means dairy, DE means made on dairy equipment, M or Meat means meat, and P means kosher for Passover, not pareve, which is the commonest misreading. Learning the codes your accepted certifiers use prevents accidental mixing at the table.

                ## Milestones
                1. The codes used by each accepted certifier listed with their meaning.
                2. Your rabbi's guidance on serving DE products with meat meals recorded.
                3. Ten products in the cupboard read and sorted correctly as practice.
                4. The code list added to the household rules card or phone note.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of each accepted certifier's label codes with their meanings, including the household's rule for DE products, is on the rules card."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Look up the label codes on each accepted certifier's website"
                - "Ask your rabbi how DE products may be served with meat"
                - "Sort ten cupboard products by their label code"
                - "Add the codes to the household rules card"
            - name: Checking eggs and produce for blood spots and insects
              description: |-
                ## Purpose
                Two everyday checks catch people out: an egg with a blood spot, and insects hidden in leafy greens, herbs, broccoli and berries. Learning the household's method for each, from cracking eggs into a glass first to washing and inspecting greens against a light, makes them quick habits rather than nagging worries.

                ## Milestones
                1. Your rabbi's guidance on egg checking and produce inspection recorded.
                2. A clear glass kept by the stove for cracking eggs into.
                3. A washing and checking method written for the five vegetables you use most.
                4. Certified pre-checked bagged produce identified as an alternative.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A written checking method for eggs and the five most-used vegetables is in the kitchen and has been followed for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your rabbi which produce needs checking and how"
                - "Keep a clear glass by the stove for cracking eggs into first"
                - "Practise the washing and checking method on a bag of lettuce"
                - "Find which certified pre-checked vegetables your shops sell"
            - name: Immersing new dishes in a mikveh
              description: |-
                ## Purpose
                Many kosher households immerse new metal and glass cookware and tableware made by non-Jewish manufacturers in a mikveh before first use, a practice called tevilat kelim. Knowing which items need it, where the nearest kelim mikveh is and how it is done means new purchases go straight into use instead of sitting in their boxes.

                ## Milestones
                1. Your rabbi's guidance on which materials need immersion recorded.
                2. The nearest kelim mikveh and its opening times found.
                3. Labels and glue removed from the new items.
                4. The new items immersed and marked as done.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "All new metal and glass kitchenware is immersed as your rabbi directs before first use, with the local mikveh's details saved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your rabbi which new items need immersion"
                - "Find the nearest kelim mikveh and its opening times"
                - "Soak off labels and glue from the new items"
                - "Take the new items to the mikveh before their first use"
            - name: Alcohol-free swaps for wine, mirin and extracts
              description: |-
                ## Purpose
                Recipes lean on alcohol for acidity, sweetness or depth: wine in a ragu, mirin in a glaze, brandy in a pan sauce, vanilla extract in a sponge. A tested swap card, such as stock with a splash of vinegar for wine or an alcohol-free vanilla paste for extract, lets you cook from any cookbook without reworking each recipe from scratch.

                ## Milestones
                1. Ten common uses of alcohol in your cookbooks listed.
                2. A swap chosen and tested for each.
                3. The swaps written on one card kept with the cookbooks.
                4. Three favourite recipes cooked with the swaps and judged good enough to repeat.

                ## Notes
                Kosher kitchens can usually cook with certified kosher wine, so this card is mainly for halal kitchens and for guests who avoid alcohol. Check whether your standard accepts flavourings with traces of alcohol.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card of at least ten tested alcohol-free swaps is kept with the cookbooks and has been used in three recipes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the ten ways alcohol turns up in your favourite recipes"
                - "Test a swap for wine in one savoury dish this week"
                - "Write each tested swap on one card"
                - "Find an alcohol-free vanilla your standard accepts"
            - name: Pareve baking and desserts for meat meals
              description: |-
                ## Purpose
                A meat meal in a kosher home rules out butter, cream and milk for dessert, which is why pareve baking is a skill of its own. Building a small repertoire, such as an oil-based cake, a fruit crumble with a plant-based topping and a sorbet, means there is always a proper pudding after Friday night chicken.

                ## Milestones
                1. Pareve fats and creams with an accepted certification found in local shops.
                2. Five pareve desserts tested.
                3. Three kept as the household's reliable set.
                4. The recipes stored with the pareve kit or in the family recipe file.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tested pareve desserts are in the household's recipe file and each has been served after a meat meal."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find certified pareve margarine and cream substitutes in local shops"
                - "Bake one oil-based cake this week"
                - "Bake a new pareve dessert recipe @recurring(monthly:24)"
                - "File the three best recipes with the pareve kit"
            - name: Reworking favourite recipes to meet your rules
              description: |-
                ## Purpose
                Some of the best-loved dishes break the rules: butter chicken, carbonara, beef stroganoff with soured cream, a cheeseburger, a stew made with wine or lard pastry. Rewriting the five dishes the household misses most, with a tested replacement for the problem ingredient, keeps family favourites on the table.

                ## Milestones
                1. The five dishes the household misses most listed.
                2. The problem ingredient in each identified.
                3. A replacement tested for each, such as coconut cream, beef bacon or a pareve spread.
                4. Five rewritten recipes stored where the household cooks from.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five rewritten recipes, each with a tested replacement for the problem ingredient, are in the household's recipe collection."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the household which five dishes they miss most"
                - "Mark the ingredient in each that breaks your rules"
                - "Cook one dish with a replacement and note what to change"
                - "Ask the agent to rewrite each recipe with its tested replacement"
            - name: Understanding slaughter and stunning methods
              description: |-
                ## Purpose
                Arguments about stunning, hand versus machine slaughter and shechita are often had in strong terms with little information. Understanding what each method involves, which certifiers accept which, and what the welfare and religious arguments are lets you choose a supplier knowingly and explain the choice to others.

                ## Milestones
                1. A plain description of dhabiha, shechita, stunned and machine slaughter written.
                2. Each accepted certifier's position on stunning and machine slaughter recorded.
                3. Your adviser's view on the household choice noted.
                4. The household's position added to the dietary standard.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The household standard records a position on stunning and machine slaughter, backed by a note of each accepted certifier's policy."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read each accepted certifier's published policy on stunning"
                - "Write a plain summary of the four main methods"
                - "Discuss the summary with your adviser"
                - "Add the household's position to the dietary standard"
            - name: Level of kitchen separation decision
              description: |-
                ## Purpose
                Separation can mean anything from two sets of pans in one kitchen to two sinks, two ovens and a second dishwasher, and the cost runs from a few pounds to several thousand. Deciding what level your household needs, whether for a kosher kitchen or a halal one shared with someone who eats pork, stops you either overbuying or living with a set-up that keeps causing mix-ups.

                ## Milestones
                1. Mix-ups and near misses from the last two months listed.
                2. Three levels of separation costed for your kitchen.
                3. Your adviser's view on what your kitchen requires recorded.
                4. A level chosen, with a budget and an order of work.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen level of kitchen separation, with a budget and order of work, is recorded alongside your adviser's guidance."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every mix-up or near miss from the last two months"
                - "Cost three levels of separation for your kitchen"
                - "Ask your adviser what your kitchen layout requires"
                - "Write down the chosen level, budget and order of work"
            - name: Second sink, oven or dishwasher purchase
              description: |-
                ## Purpose
                When separation outgrows bowls and racks, the next step is a second appliance: a small second sink, a combination microwave oven kept for dairy, or a second dishwasher drawer. Comparing options on space, plumbing, power and price before buying avoids a fitting that suits neither the rules nor the room.

                ## Milestones
                1. The appliance needed and the rule it serves confirmed with your adviser.
                2. Space, plumbing and power measured.
                3. Three options compared on size, cost and installation.
                4. One chosen, bought and fitted, or the decision deferred with a reason.

                ## Notes
                Start from the **Purchase decision** template. Some ovens have a Sabbath mode; check whether your rabbi relies on it before paying extra.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second sink, oven or dishwasher has been chosen from three compared options and fitted, or deferred with a written reason."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm with your adviser which appliance would help most"
                - "Measure the space, plumbing and sockets available"
                - "Compare three options on size, cost and installation"
                - "Book fitting for the option you choose"
            - name: Cheese, rennet and whey decision
              description: |-
                ## Purpose
                Cheese is one of the hardest products to judge. Many hard cheeses use animal rennet, whey from those cheeses turns up in crisps and biscuits, and kosher practice requires cheese to be made under supervision. Settling the household rule on cheese and whey, and finding brands that meet it, ends the weekly debate in the dairy aisle.

                ## Milestones
                1. The household's rule on rennet, whey and supervised cheese agreed with your adviser.
                2. Brands of everyday cheeses that meet the rule found.
                3. Snacks and biscuits containing whey checked against it.
                4. The rule and the brands added to the approved products list.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rule on cheese, rennet and whey is in the household standard, with at least five compliant cheese brands on the approved list."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your adviser how the household should treat rennet and whey"
                - "Check the rennet in the cheeses you buy most often"
                - "Find certified or microbial-rennet versions of each"
                - "Add the compliant brands to the approved products list"
            - name: Seafood rule for the household
              description: |-
                ## Purpose
                Seafood divides opinion. Kosher law allows only fish with both fins and scales, while Muslim schools differ, some permitting all seafood and others restricting it to fish, with prawns as the classic debate. A clear household rule and a list of species you accept make fishmonger trips and restaurant menus straightforward.

                ## Milestones
                1. Your adviser's guidance on seafood recorded.
                2. A list of species the household accepts and avoids.
                3. Processed products such as fish sauce, surimi and anchovy-based sauces checked.
                4. The rule added to the kitchen rules card.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A seafood rule and a species list are written into the household standard and the kitchen rules card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your adviser which seafood the household may eat"
                - "List the species you buy and mark each accept or avoid"
                - "Check fish sauce, surimi and anchovy-based sauces in the cupboard"
                - "Add the seafood rule to the rules card"
            - name: Gelatine capsules and alcohol in medicines
              description: |-
                ## Purpose
                Tablets often come in gelatine capsules, some syrups contain alcohol, and a few medicines have porcine ingredients. Religious authorities generally make allowances where health is at stake, so the job here is to ask the pharmacist about alternatives and your adviser about the rule, never to stop a medicine on your own.

                ## Milestones
                1. Every regular medicine and supplement in the house listed with its capsule and syrup ingredients.
                2. The pharmacist asked about suitable alternatives for any in question.
                3. Your adviser's position on medicines with doubtful ingredients recorded.
                4. Any switch made only with the prescriber's or pharmacist's agreement.

                ## Notes
                Never stop or swap a prescribed medicine without speaking to the prescriber or pharmacist first.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every regular medicine in the house has been checked, with alternatives discussed with a pharmacist and the adviser's view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every medicine and supplement the household takes regularly"
                - "Read each leaflet for gelatine, alcohol and animal ingredients"
                - "Ask the pharmacist about alternatives for the ones in question"
                - "Record your adviser's view on medicines with doubtful ingredients"
            - name: Certified meat cost comparison
              description: |-
                ## Purpose
                Certified meat, kosher meat in particular, can cost far more than the supermarket equivalent, and the bill grows quietly. Comparing price per kilo across butchers, online suppliers and cuts, and planning a couple of meat-free dinners a week if needed, keeps the household standard affordable without compromising it.

                ## Milestones
                1. Prices per kilo for the six cuts you buy most, from three suppliers.
                2. Cheaper cuts that suit your cooking identified.
                3. A monthly certified meat budget set.
                4. Meat-free dinners planned if the budget needs them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A price-per-kilo comparison of six cuts across three certified suppliers is done and a monthly meat budget is set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the six cuts the household buys most"
                - "Compare price per kilo at three certified suppliers"
                - "Set a monthly budget for certified meat"
                - "Repeat the price comparison across suppliers @recurring(yearly)"
            - name: House rule for food gifts and guests' dishes
              description: |-
                ## Purpose
                Neighbours bring cakes, colleagues bring biscuits and relatives arrive with a dish cooked at home, and turning them away is awkward. A kind, consistent rule, such as sealed certified items welcome and home-cooked dishes enjoyed elsewhere, plus a polite way of saying it, avoids both offence and compromise.

                ## Milestones
                1. The household rule for gifts of food written in one sentence.
                2. A friendly script for explaining it to neighbours and colleagues.
                3. A plan for well-meant gifts you cannot use, such as passing them on.
                4. The rule shared with close friends and family before the next festival.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-sentence rule on food gifts and a short explanation script are written and shared with close family and friends."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the household rule on food gifts in one sentence"
                - "Draft a friendly two-line explanation for neighbours"
                - "Decide where gifts you cannot use will go"
                - "Send the rule to close family before the next festival"
            - name: Passover kitchen changeover
              description: |-
                ## Purpose
                Passover means removing or selling chametz, cleaning the kitchen thoroughly, kashering or covering surfaces, bringing out the Passover dishes and buying products certified kosher for Passover. A written checklist, reused and improved every year, spreads the work over the weeks before rather than one frantic final night.

                ## Milestones
                1. A changeover checklist covering cleaning, kashering, covering and storage.
                2. Chametz sold through your rabbi or removed by the deadline.
                3. Kosher for Passover products bought, following your family's custom on kitniyot.
                4. Notes on what to change written straight after the festival.

                ## Notes
                Start from the **Operational checklist** template. Customs on kitniyot differ between Ashkenazi and Sephardi families, so follow your own.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The kitchen is changed over for Passover by the checklist, with chametz sold or removed and post-festival notes written."
                cadence: cyclic
              tasks:
                - "Copy last year's notes into this year's changeover checklist"
                - "Start the Passover changeover checklist six weeks ahead @recurring(yearly)"
                - "Arrange the sale of chametz with your rabbi"
                - "Buy kosher for Passover staples following your kitniyot custom"
                - "Write what to change next year the day after the festival"
            - name: Qurbani arrangement for Eid al-Adha
              description: |-
                ## Purpose
                Qurbani needs deciding weeks before Eid: a local sacrifice through a farm or butcher, or one carried out abroad through a charity, which animal or share, and how the meat will be divided between family, friends and people in need. Arranging it early avoids sold-out shares and a freezer with no room.

                ## Milestones
                1. The number of shares the household is giving decided.
                2. A local or overseas arrangement chosen and paid for through a reputable organisation.
                3. Freezer space cleared if meat is coming home.
                4. Distribution of the meat planned and carried out.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Qurbani is booked and paid through a chosen provider before Eid, with distribution of the meat planned and completed."
                cadence: cyclic
              tasks:
                - "Ask each adult whether they are giving qurbani this year"
                - "Compare a local butcher with an overseas charity on price and reporting"
                - "Book qurbani shares a month before Eid al-Adha @recurring(yearly)"
                - "Clear freezer space and list who will receive meat"
            - name: Pre-Ramadan certified pantry stock-up
              description: |-
                ## Purpose
                Ramadan changes the household's eating to two main meals, suhoor and iftar, and shops and butchers get crowded in the last week before it starts. A stock-up two weeks ahead, with certified meat in the freezer and dates, lentils, flour and long-life staples in the cupboard, means fasting days are not spent queueing.

                ## Milestones
                1. Last year's Ramadan shopping and freezer notes found.
                2. A stock list of certified staples and meat written.
                3. The shop done at least ten days before the first fast.
                4. Notes for next year written after Eid.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A certified stock-up for Ramadan is completed at least ten days before the first fast, with notes kept for next year."
                cadence: cyclic
              tasks:
                - "Find last year's Ramadan shopping and freezer notes"
                - "Write a stock list of certified staples and meat for the month"
                - "Place the Ramadan meat order a fortnight ahead @recurring(yearly)"
                - "Write down what ran short or went unused after Eid"
            - name: Hosting an observant guest in a non-observant kitchen
              description: |-
                ## Purpose
                Inviting a friend or colleague who keeps halal or kosher into a kitchen that does not is very doable with planning. Asking their standard directly, buying certified food sealed, using new foil trays or disposable kit and, for strict kosher guests, ordering from a certified caterer shows care without guesswork.

                ## Milestones
                1. The guest's standard asked politely and written down.
                2. A menu chosen that can be bought or cooked to that standard.
                3. Kit planned: new disposable trays and foil, or sealed certified meals.
                4. The meal served with packaging kept so the guest can check it.

                ## Notes
                Many strictly kosher guests will not eat food cooked in a non-kosher kitchen even with certified ingredients. Sealed certified meals, served in their packaging, are the respectful default.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meal is served that meets the guest's stated standard, with certified packaging available for them to check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your guest which standard they keep and what they would happily eat"
                - "Choose a menu you can buy or cook to that standard"
                - "Order sealed certified meals or buy new disposable trays"
                - "Keep packaging and labels to show your guest"
            - name: Certified caterer for a wedding, bris or aqiqah
              description: |-
                ## Purpose
                Large celebrations need a caterer whose certification the whole guest list will accept, which may mean a stricter certifier than you use at home and a supervisor on site. Comparing caterers early on certifier, menu, supervision fee and price avoids finding a problem when the invitations are already out.

                ## Milestones
                1. The certification standard the guest list needs agreed with the family.
                2. Three caterers compared on certifier, menu, supervision and price.
                3. A caterer booked with certification confirmed in the contract.
                4. A copy of the event certificate received before the day.

                ## Notes
                Start from the **Vendor** template. Ask whether the venue's own kitchen needs kashering or supervision too.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A caterer is booked with a certifier the family has agreed on, written into the contract, and the event certificate is held before the day."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree with the family which certifier the guests will need"
                - "Get quotes from three certified caterers"
                - "Ask each about supervision fees and the venue kitchen"
                - "Book the caterer with certification written into the contract"
            - name: Setting up the kitchen in a new home
              description: |-
                ## Purpose
                A move is the one moment the whole kitchen is empty, which makes it the best time to plan zones, clean or kasher the oven and hob, and immerse new kit before the boxes are opened. Planning it before moving day avoids a fortnight of takeaways while the kitchen waits to be made usable.

                ## Milestones
                1. The new kitchen's layout mapped into zones before moving day.
                2. Ovens, hobs, sinks and counters cleaned or kashered as your adviser directs.
                3. Boxes labelled by zone so they unpack into the right cupboards.
                4. A first full compliant meal cooked within a week of moving in.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The new kitchen is cleaned or kashered, zoned and cooking a compliant meal within a week of moving in."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Get a floor plan or photos of the new kitchen"
                - "Mark meat, dairy and pareve zones on the plan"
                - "Book your adviser or a kashering service for the first days"
                - "Label every kitchen box with its zone before packing"
            - name: Starting to keep halal or kosher as an adult
              description: |-
                ## Purpose
                People take on these laws at many points in life: on conversion, on marriage, or returning to a practice they grew up with. Taking it in stages over about six months, starting with meat and obvious ingredients and adding kitchen separation later, is a common approach, and agreeing the stages with your adviser keeps the change sustainable.

                ## Milestones
                1. A staged plan agreed with your adviser.
                2. Stage one in place: no non-compliant meat or obvious ingredients in the house.
                3. Stage two in place: certified products only and a label checking routine.
                4. Stage three in place: kitchen separation or kashering as your adviser directs.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "All three stages of a plan agreed with your adviser are in place within six months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write down why you are starting and what worries you most"
                - "Agree three stages and rough dates with your adviser"
                - "Clear non-compliant meat from the house as stage one"
                - "Find a mentor family who already keeps the rules"
            - name: Mixed-observance household agreement
              description: |-
                ## Purpose
                Plenty of homes hold people with different standards: one partner observant and one not, a convert living with non-observant parents, a teenager questioning the rules. A written agreement on shared space, what each person may bring in and cook, and how guests are fed lets everyone live together without a running dispute.

                ## Milestones
                1. Each person's standard and red lines written down.
                2. Shared and personal zones in the kitchen agreed.
                3. Rules for bringing in and cooking food agreed.
                4. A check-in on how it is working held every three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written household agreement covering zones, food brought in and guests is agreed by every adult and reviewed each quarter."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each adult to write down their standard and red lines"
                - "Agree shared and personal kitchen zones together"
                - "Write the agreement on one page"
                - "Hold a short check-in on the agreement @recurring(quarterly)"
            - name: Keeping halal or kosher in a shared student kitchen
              description: |-
                ## Purpose
                Halls and shared houses mean shared ovens, shared fridges and housemates frying bacon. A small personal kit, a shelf of your own, foil trays for the oven and a stock of certified staples let a student keep their standard on a student budget, and the chaplaincy or faith society usually knows where to buy cheaply.

                ## Milestones
                1. A personal pan, board, knife and utensils labelled and kept in your room or a locked cupboard.
                2. A fridge and cupboard shelf of your own, agreed with housemates.
                3. Cheap certified suppliers near campus found through the faith society.
                4. Five cheap compliant meals you can cook in under thirty minutes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A personal labelled kit, an agreed shelf and five cheap compliant meals are in place by the end of the first term."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pack a labelled personal pan, board, knife and utensils"
                - "Agree a fridge and cupboard shelf with housemates"
                - "Ask the faith society where students buy certified food cheaply"
                - "Write five compliant meals that cost little and cook fast"
            - name: School and club meal arrangements for children
              description: |-
                ## Purpose
                Schools, nurseries, clubs and camps vary widely in what they offer, from certified halal or kosher meals to a vegetarian option to nothing at all. Writing your child's requirements clearly, asking what each kitchen can provide and agreeing a fallback such as packed lunch avoids a child being served the wrong meal or going hungry.

                ## Milestones
                1. A short written note of your child's requirements.
                2. Each school, nursery or club asked what it provides and how it is certified.
                3. A fallback agreed, such as vegetarian meals or a packed lunch.
                4. Requirements renewed at the start of each school year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every school, nursery and club your child attends holds their written requirements and an agreed meal plan or fallback."
                cadence: cyclic
              tasks:
                - "Write a short note of your child's dietary requirements"
                - "Ask the school kitchen whether its meat is certified and by whom"
                - "Agree a vegetarian or packed lunch fallback with each setting"
                - "Resend the requirements to each setting as the school year starts @recurring(yearly)"
            - name: Certified meals for a relative in care or hospital
              description: |-
                ## Purpose
                An older parent moving into a care home or spending weeks in hospital can find their dietary law quietly dropped, with food served from the general kitchen. Agreeing in writing what they will be served, where it comes from and who checks protects both their faith and their appetite at a time when eating well matters most.

                ## Milestones
                1. The relative's standard written into their care plan.
                2. The home or ward asked how certified meals are sourced.
                3. A supplier of sealed certified meals arranged if the kitchen cannot provide them.
                4. Meals checked on a visit each month.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The relative's care plan records their dietary standard, with a named source of certified meals checked on a monthly visit."
                cadence: rolling
              tasks:
                - "Write your relative's dietary standard in a short care note"
                - "Ask the care home or ward how certified meals are sourced"
                - "Arrange sealed certified meals if the kitchen cannot provide them"
                - "Visit at a mealtime and check what was served @recurring(monthly:12)"
            - name: Travelling with halal or kosher food needs
              description: |-
                ## Purpose
                Travel tests every rule at once: airline meals, hotel breakfasts, labels in another language and towns with no certified butcher. Planning food before booking, with special meal requests, certified places at the destination and a bag of sealed staples, keeps a holiday from becoming a week of crisps and fruit.

                ## Milestones
                1. Certified restaurants and shops at the destination found before booking.
                2. Special meals requested with the airline at least two days before the flight.
                3. Accommodation with a kitchen chosen if certified food is scarce.
                4. A bag of sealed certified staples packed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Certified food sources at the destination are listed and special meals requested at least two days before travelling."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up certified restaurants and shops at your destination"
                - "Request halal or kosher meals with the airline"
                - "Choose accommodation with a kitchen if certified food is scarce"
                - "Pack a bag of sealed certified staples and a small travel pan"
            - name: Briefing a nanny, cleaner or helper on kitchen rules
              description: |-
                ## Purpose
                New nannies, au pairs, cleaners and home helps who do not share your practice can undo a carefully kept kitchen in a week, with the best of intentions. A short practical briefing in the kitchen itself, covering the colour code and what never comes into the house, protects the kitchen and saves embarrassment on both sides.

                ## Milestones
                1. A one-page briefing based on the rules card, in plain words.
                2. A walk-through in the kitchen during the helper's first week.
                3. A clear way to ask when unsure, such as sending a photo by message.
                4. A one-month check on how it is going.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A new helper has had a kitchen walk-through with a written briefing in their first week and a review after one month."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn the rules card into a one-page briefing in plain words"
                - "Walk the helper through the kitchen in their first week"
                - "Agree that unsure items get a photo by message before use"
                - "Ask after a month which rules were confusing"
            - name: Salting and soaking meat at home
              description: |-
                ## Purpose
                Almost all kosher meat sold today has already been soaked and salted, but some butchers and some cuts arrive unkashered, and liver always needs separate handling. Learning the traditional soak, salt and rinse method from your rabbi or an experienced cook means you can buy from a wider range of suppliers and handle unusual cuts correctly.

                ## Milestones
                1. Your rabbi's step-by-step procedure written down.
                2. A salting board, coarse salt and soaking bowl set aside for the purpose.
                3. The procedure practised under an experienced eye.
                4. The separate method for liver confirmed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One batch of meat has been soaked and salted by your rabbi's written procedure under supervision."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your rabbi for the full salting procedure in writing"
                - "Set aside a salting board, coarse salt and a soaking bowl"
                - "Practise the procedure with an experienced cook watching"
                - "Ask how liver must be handled differently"
            - name: Separating challah from a large bake
              description: |-
                ## Purpose
                When dough is made from more than a set weight of flour, kosher practice is to separate a small piece before baking, with a blessing above a higher weight. Keen bakers, and groups who bake together before festivals, need to know the thresholds their community uses and how the separated piece is disposed of.

                ## Milestones
                1. The flour weights your community uses for separating with and without a blessing recorded.
                2. The blessing written on a card kept with the baking things.
                3. The way to burn or wrap and dispose of the piece confirmed.
                4. Challah separated correctly on a large bake.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The thresholds and blessing are on a card in the baking cupboard and challah has been separated on at least one large bake."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your rabbi for the flour thresholds your community uses"
                - "Write the blessing on a card for the baking cupboard"
                - "Confirm how to dispose of the separated piece"
                - "Weigh the flour on your next large bake and separate challah"
            - name: Supplier chain questions from farm to counter
              description: |-
                ## Purpose
                Certification fraud and mislabelling do happen, usually at the points where meat changes hands. An experienced household or community food organiser who knows what to ask about abattoir, supervision, transport, cutting plant and shop can spot a weak link and raise it with the certifier, rather than relying on a logo alone.

                ## Milestones
                1. A question list covering abattoir, supervision, transport, cutting and storage.
                2. The questions put to your main butcher and the answers recorded.
                3. Any gap raised with the certifier in writing.
                4. Findings shared with your community food group if you have one.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your main butcher has answered a full chain-of-custody question list, with any gap reported to the certifier in writing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write questions for each stage from abattoir to counter"
                - "Ask your main butcher to talk you through their supply chain"
                - "Report any gap to the certifier in writing"
                - "Share the findings with your community food group"
            - name: Running a community kitchen to halal or kosher standard
              description: |-
                ## Purpose
                Mosques, synagogues, faith schools and charities run kitchens for lunches, food banks and festival meals, often staffed by volunteers who change every week. Setting the kitchen's standard, its supervision, its supplier list and a volunteer briefing lets a community kitchen serve hundreds of meals that everyone can trust.

                ## Milestones
                1. The kitchen's standard agreed with the community's religious leadership.
                2. Approved suppliers and a supervision arrangement in place.
                3. A volunteer briefing and a kitchen rules sign in use.
                4. A record kept of deliveries and supervision for each service day.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The community kitchen runs to an agreed standard, with approved suppliers, briefed volunteers and a delivery record for every service day."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Meet the religious leadership to agree the kitchen's standard"
                - "List approved suppliers and who supervises deliveries"
                - "Write a one-page volunteer briefing"
                - "Keep a record of deliveries and supervision for each service day"
---

# Halal & Kosher Kitchen

This area is for any household that keeps halal, kosher or both, and for anyone who cooks for people who do. It starts with the foundations (a household standard agreed with your imam or rabbi, a pantry audit, trusted certifiers, an ingredient watchlist, separated zones and kit, and a butcher you trust), then the routines that keep shopping and cooking compliant, the skills behind the rules, the decisions on cheese, seafood, medicines and appliances, the festivals and events that need planning, the situations of converts, students, carers and travellers, and finally the specialist work of salting meat, separating challah and running a community kitchen.

What repeats is a certification check on each weekly shop, a monthly look at certifier alerts and a monthly meat order, the Friday Shabbat routine, quarterly rechecks of products and eateries, and the yearly cycle of Passover, Ramadan, Qurbani and a review with your adviser. The Vendor, Purchase decision, Operational checklist, Reading queue and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
