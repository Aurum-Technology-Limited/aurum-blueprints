---
id: food-nutrition.coeliac-gluten-free-eating
name: Coeliac & Gluten-Free Eating
description: "A strictly gluten-free life that holds up: diagnosis sorted, a kitchen safe from crumbs, labels you can read fast, baking that works, and plans for eating out, travel, school and later life."
category: personal
version: 1.0.0
tags: [food-nutrition, coeliac-gluten-free-eating, everyone, coeliac-disease, gluten-free, cross-contact, eating-out, travel]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - weekly-meal-plan
    - metrics-log
    - purchase-decision
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Coeliac & Gluten-Free Eating
          description: "Eating strictly gluten-free for coeliac disease or intolerance, from safe shopping and baking to eating out and travelling."
          projects:
            - name: Confirming coeliac disease before cutting gluten
              description: |-
                ## Purpose
                Blood tests and a gut biopsy can only find coeliac disease while gluten is still being eaten, so going gluten-free first can leave you with a false negative and years of doubt. If you suspect coeliac disease, or a relative has it, getting tested properly before changing your diet means you know whether you need lifelong strictness or something gentler.

                ## Milestones
                1. An appointment booked with your doctor to discuss testing for coeliac disease.
                2. Your doctor's instructions on how much gluten to keep eating, and for how long, written down.
                3. The coeliac antibody blood test taken while still eating gluten.
                4. The result and the agreed next step, such as referral for a biopsy, recorded with dates.

                ## Notes
                If you have already cut gluten out, tell your doctor before the test. They may ask you to reintroduce it for several weeks first, and that is their call, not a guess.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A coeliac blood test result and your doctor's agreed next step are recorded, with the test taken while you were still eating gluten."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book an appointment with your doctor to ask about coeliac testing"
                - "Write down the symptoms, dates and family history you want to mention"
                - "Ask your doctor how much gluten to keep eating until testing is done"
                - "Record the blood test result and the next step your doctor proposes"
            - name: Questions to take to the diagnosis appointment
              description: |-
                ## Purpose
                A diagnosis appointment often lasts ten minutes and ends with a leaflet, while the questions arrive on the bus home. Going in with a written list covering follow-up blood tests, a dietitian referral, bone health and whether relatives should be tested means you leave with a plan rather than a label.

                ## Milestones
                1. A written list of questions prepared before the appointment.
                2. Copies of your antibody results and biopsy report obtained for your own records.
                3. A dietitian referral requested and the follow-up test schedule agreed.
                4. The answers you were given written up the same day in one note.

                ## Notes
                Common questions include when to repeat antibody tests, whether a bone density scan or vaccinations are advised for you, and who to contact if symptoms do not settle. Your clinician decides which apply.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A note holding your questions, the answers given, copies of your results and the agreed follow-up dates exists after the diagnosis appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your list of questions for the diagnosis appointment"
                - "Request copies of your blood test and biopsy reports"
                - "Ask for a referral to a dietitian who sees coeliac patients"
                - "Type up the answers and follow-up dates on the same day"
            - name: First dietitian appointment preparation
              description: |-
                ## Purpose
                Dietitians with coeliac experience can teach in an hour what takes most people a year of mistakes to learn, but only if you arrive with something to work on. A week of honest food notes, your usual brands and your sticking points such as work lunches or eating out turns the session into advice about your actual life.

                ## Milestones
                1. Seven days of everything eaten and drunk recorded, including brands.
                2. Your three hardest situations, such as work lunches or travel, listed for discussion.
                3. The dietitian's advice on nutrients, oats and follow-up written into one page.
                4. A follow-up appointment booked or a reason recorded for not needing one.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A seven-day food record was taken to a dietitian appointment and a one-page summary of their advice is saved with the next review date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Phone to confirm the date of your dietitian referral"
                - "Record seven days of food and drink, including brand names"
                - "List the three situations where eating gluten-free is hardest for you"
                - "Summarise the dietitian's advice on one page after the session"
                - "Book a follow-up check with your dietitian @recurring(yearly)"
            - name: Hidden gluten sources reference card
              description: |-
                ## Purpose
                Gluten hides well beyond bread and pasta: in soy sauce, malt vinegar and malted drinks, stock cubes, sausages, beer, gravy granules, battered chips and some sweets. A short card of the ingredient names and product types to question, kept in a wallet or phone, is what stops the slow drip of accidental exposures in the first months.

                ## Milestones
                1. A list of grains and ingredient names that contain gluten, taken from your coeliac society or dietitian.
                2. A second list of everyday products that often contain gluten unexpectedly.
                3. The card saved on your phone and printed for the kitchen.
                4. Everyone who cooks for you shown the card.

                ## Notes
                Wheat, barley and rye are the core grains, with spelt, kamut and triticale as wheat relatives. Oats are a separate question for your dietitian.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page hidden gluten card, built from a recognised coeliac source, is on your phone and on the kitchen wall, and every regular cook has seen it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your national coeliac society's list of gluten-containing ingredients"
                - "Ask the agent to draft a one-page card from that list and your usual products"
                - "Print the card for the kitchen and save it on your phone"
                - "Check the card against your society's latest guidance @recurring(yearly)"
            - name: Reading labels for gluten and cross-contact warnings
              description: |-
                ## Purpose
                Food labels follow rules, and once you know them a label takes ten seconds instead of two minutes. Learning how allergens are highlighted in your country, what a gluten-free claim legally means (commonly 20 parts per million or less), and how to treat voluntary may-contain warnings makes every shop faster and safer.

                ## Milestones
                1. How allergens must be shown on labels where you live understood and noted.
                2. The legal meaning of a gluten-free claim in your country written down.
                3. Your dietitian's view on may-contain and made-in-a-factory warnings recorded.
                4. Twenty products from your cupboard checked as practice, with any surprises noted.

                ## Notes
                Recipes change without warning. A product that was safe last year needs its label read again, every time, until it is on a recheck routine.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can state your country's gluten-free labelling threshold and allergen rules, and twenty cupboard products have been checked and sorted into safe and unsafe."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Look up how allergens are shown on food labels in your country"
                - "Note what a gluten-free claim legally guarantees where you live"
                - "Ask your dietitian how to treat may-contain warnings"
                - "Check twenty products in your cupboard and sort them"
            - name: Kitchen changeover for strict gluten-free cooking
              description: |-
                ## Purpose
                Crumbs, not ingredients, cause many accidental exposures: a shared toaster, a scratched non-stick pan, a wooden spoon, a butter tub with toast crumbs in it. A planned changeover over one weekend, deciding what to replace, what to scrub and what to label, gives the gluten-free eater a kitchen they do not have to second-guess.

                ## Milestones
                1. Every item in the kitchen sorted into keep, deep clean, replace or label.
                2. A dedicated toaster or toaster bags, colander and chopping board in place.
                3. Separate, labelled spreads, jams and condiments for gluten-free use.
                4. Cupboards and drawers cleaned of flour and crumbs.

                ## Notes
                Start from the **Operational checklist** template. Porous and scratched items such as wooden boards, sieves and worn non-stick pans are the usual ones to replace.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed changeover checklist shows every kitchen item sorted, the replacements bought and gluten-free spreads labelled."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Walk the kitchen and list every board, pan, utensil and appliance"
                - "Mark each item keep, deep clean, replace or label"
                - "Buy a dedicated toaster or toaster bags, a colander and a board"
                - "Label separate spreads and condiments for gluten-free use"
            - name: House rules for a shared gluten and gluten-free kitchen
              description: |-
                ## Purpose
                Most coeliacs live with people who still eat gluten, and the kitchen only stays safe if everyone follows the same few rules without thinking. Writing down where gluten-free food lives, which utensils are reserved and the order things get cooked in means the rules survive tired evenings, visitors and new flatmates.

                ## Milestones
                1. The top shelf or a separate cupboard reserved for gluten-free food.
                2. Five or six house rules written on one page and agreed by everyone.
                3. The rules posted inside a cupboard door where cooks will see them.
                4. A rule for what happens after a mistake, such as replacing a contaminated spread.

                ## Notes
                Typical rules: gluten-free cooked first, clean spoon in every jar, gluten-free food stored above gluten food, and no flour sifting on shared worktops.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page set of kitchen rules, agreed by every household member, is posted in the kitchen with gluten-free storage clearly marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the shelf or cupboard that will hold only gluten-free food"
                - "Draft five or six kitchen rules for everyone in the house"
                - "Agree the rules at a household meal and post them in the kitchen"
                - "Decide what gets replaced when a gluten-free item is contaminated"
            - name: Ten naturally gluten-free weeknight meals
              description: |-
                ## Purpose
                Early weeks after diagnosis often lean on expensive substitute products because the old meals all seemed to involve bread or pasta. Ten dinners that are gluten-free by nature, such as risotto, curry with rice, jacket potatoes, stir-fries with tamari and roast dinners with cornflour gravy, give you a rota that feels normal and costs less.

                ## Milestones
                1. Ten weeknight dinners chosen that need no specialist gluten-free products.
                2. Each recipe checked for hidden gluten in stock, sauces and seasonings.
                3. Every meal cooked at least once and kept or replaced.
                4. The ten meals written into a reusable two-week plan.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-week dinner plan of ten naturally gluten-free meals, each cooked at least once and checked for hidden gluten, is saved and in use."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "List the dinners you already make that contain no gluten at all"
                - "Add meals until you have ten, checking stock and sauce labels"
                - "Cook two new meals from the list this week"
                - "Write the ten meals into a two-week plan"
            - name: Gluten-free store cupboard set-up
              description: |-
                ## Purpose
                Cupboards stocked for a wheat-eating household leave a coeliac with nothing safe to grab on a tired night. A deliberate set of gluten-free staples, from rice, polenta and certified pasta to gluten-free stock, tamari, cornflour and a flour blend, makes most recipes possible without a special trip to a bigger shop.

                ## Milestones
                1. A list of twenty gluten-free staples matched to the meals you cook.
                2. Each staple bought in a brand whose label you have checked.
                3. The staples stored together on the gluten-free shelf.
                4. A minimum stock level noted for the five items you use most.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Twenty label-checked gluten-free staples are stored together, with minimum levels set for the five most used."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List twenty staples that your usual meals depend on"
                - "Find a gluten-free version of each and check its label"
                - "Stock the staples together on the gluten-free shelf"
                - "Mark minimum levels for the five you use most"
            - name: Testing for close relatives after a diagnosis
              description: |-
                ## Purpose
                Close relatives of someone with coeliac disease are considerably more likely to have it, often with mild or no symptoms. Telling parents, siblings and children about your diagnosis and suggesting they ask their own doctor about testing can catch it in someone who would otherwise wait years.

                ## Milestones
                1. A list of first-degree relatives who should hear about the diagnosis.
                2. A short message explaining the diagnosis and why testing might be worth asking about.
                3. Each relative told, with the date noted.
                4. Any children in your care discussed with their doctor.

                ## Notes
                Whether and when to test is a decision for each person and their own doctor. Your part is passing on the information clearly.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every first-degree relative has been told about the diagnosis and the option of testing, with dates recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your parents, siblings and children"
                - "Write a short message explaining the diagnosis and testing"
                - "Send or say the message to each relative and note the date"
                - "Ask your children's doctor whether testing is advised for them"
            - name: Explaining coeliac disease to family, friends and work
              description: |-
                ## Purpose
                Friends often hear gluten-free as a preference, which is how a host ends up picking croutons off a salad and calling it safe. A short, calm explanation that coeliac disease is an autoimmune condition and that crumbs matter, ready to say or send, saves you giving a lecture at every meal.

                ## Milestones
                1. A three-sentence spoken explanation you are comfortable using.
                2. A longer written version ready to send to hosts, colleagues and family.
                3. The written version sent to the people who feed you most often.
                4. A polite line ready for declining food you cannot check.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A short spoken explanation and a written message about coeliac disease exist and the written one has been sent to at least five regular hosts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a calm three-sentence explanation of coeliac disease"
                - "Write a longer message for hosts covering crumbs and shared utensils"
                - "Send the message to the five people who most often cook for you"
                - "Practise a friendly line for turning down food you cannot check"
            - name: Weekly gluten-free meal plan and shop
              description: |-
                ## Purpose
                Planning matters more on a gluten-free diet because the fallback options, a takeaway, a sandwich, whatever is in the canteen, are mostly unsafe. A short weekly plan and a list sorted by gluten-free shelf and ordinary aisle keeps safe food in the house and stops the expensive last-minute specialist buys.

                ## Milestones
                1. A fixed time each week for planning dinners and lunches.
                2. A shopping list format that separates specialist items from ordinary aisles.
                3. Four consecutive weeks planned and shopped.
                4. Specialist items bought in bulk or online where it saves money.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks in a row have a written gluten-free meal plan and a matching shopping list, with no unplanned takeaways forced by a lack of safe food."
                cadence: rolling
              tasks:
                - "Pick a regular slot for planning the week's meals"
                - "Set up a list split into gluten-free shelf and ordinary aisles"
                - "Plan the week's gluten-free meals and write the list @recurring(weekly:sat)"
                - "Order bulky specialist items online when the price is lower"
            - name: Trusted product list with label rechecks
              description: |-
                ## Purpose
                Manufacturers change recipes and factories without announcement, so a biscuit that was safe in spring can carry a may-contain warning by autumn. A shared list of the brands and products you trust, rechecked on a fixed day each month, saves rereading every label in the aisle while still catching changes.

                ## Milestones
                1. A list of trusted products with brand, size and date last checked.
                2. The list shared with everyone who shops for the household.
                3. A monthly recheck routine running for three months.
                4. Products that changed recorded with the date and what changed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A shared trusted product list exists with a check date on every item, rechecked monthly for at least three months."
                cadence: rolling
              tasks:
                - "Start a list of every product you buy and trust, with brands"
                - "Share the list with everyone who shops for the house"
                - "Recheck the labels of ten products on the list @recurring(monthly:12)"
                - "Sign up for product alerts from your coeliac society if offered"
            - name: Symptom and suspected exposure log
              description: |-
                ## Purpose
                When symptoms flare a day or two after eating, memory cannot reliably say what caused it. A plain log of what was eaten, where, and how you felt, with suspected exposures marked, shows patterns over months and gives your doctor and dietitian evidence rather than impressions.

                ## Milestones
                1. A log with columns for date, food, source, symptoms and suspected exposure.
                2. Every suspected exposure written up within a day.
                3. A monthly review noting any repeated source, such as one café or product.
                4. Three months of the log taken to your next review.

                ## Notes
                Start from the **Metrics log** template. The log records; it does not diagnose. Persistent or worsening symptoms go to your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A symptom log with at least three months of entries and monthly review notes is ready to share at your next medical review."
                cadence: rolling
              tasks:
                - "Create a symptom log with columns for food, source and symptoms"
                - "Log any suspected exposure within a day of noticing symptoms"
                - "Review the month's entries for repeated sources @recurring(monthly:28)"
                - "Share the last three months with your doctor at the next review"
            - name: Annual coeliac review with your doctor
              description: |-
                ## Purpose
                Once the diet settles, follow-up tends to fade, yet many health services recommend a yearly check of symptoms, diet and blood results for people with coeliac disease. Asking for it, and arriving with your symptom log and questions, keeps problems like low iron or slipping adherence from going unnoticed for years.

                ## Milestones
                1. The annual review booked in your calendar.
                2. Blood tests your doctor requests taken before the appointment.
                3. Your symptom log and a list of questions brought to the review.
                4. Results and agreed actions saved in one place.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A coeliac review took place within the last twelve months, with the bloods requested, results saved and agreed actions written down."
                cadence: cyclic
              tasks:
                - "Ask your practice whether they offer an annual coeliac review"
                - "Book the annual coeliac review and any bloods beforehand @recurring(yearly)"
                - "Write your questions and bring your symptom log"
                - "Save the results and agreed actions in your health folder"
            - name: Quarterly kitchen cross-contact check
              description: |-
                ## Purpose
                Kitchens drift: a new flatmate uses the gluten-free board, the labels wear off, a non-stick pan gets scratched, a guest borrows the toaster. Fifteen minutes every quarter walking the kitchen against your rules catches the slow slide before it causes a run of unexplained symptoms.

                ## Milestones
                1. A fifteen-minute checklist based on your house rules.
                2. The first quarterly check completed with findings noted.
                3. Worn or contaminated items replaced.
                4. Labels and rules refreshed where they had faded.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A kitchen cross-contact checklist has been run each quarter for a year, with worn items replaced and findings logged."
                cadence: cyclic
              tasks:
                - "Turn your house rules into a fifteen-minute kitchen checklist"
                - "Run the kitchen cross-contact check and note findings @recurring(quarterly)"
                - "Replace any scratched pans, worn boards or shared spreads"
                - "Relabel the gluten-free shelf, jars and utensils"
            - name: Gluten-free food costs, prescriptions and claims
              description: |-
                ## Purpose
                Gluten-free bread, pasta and flour often cost two or three times their wheat versions, and some health services or tax authorities offer help, from staples on prescription in parts of the UK to deductible medical expenses elsewhere. Knowing your extra monthly cost and what support exists turns a vague grievance into money claimed.

                ## Milestones
                1. The support available where you live identified: prescriptions, allowances or tax relief.
                2. A monthly record of specialist gluten-free spending set up.
                3. Any eligible prescription or claim submitted.
                4. A yearly total of extra cost calculated.

                ## Notes
                Start from the **Metrics log** template. Keep receipts if your tax authority allows the extra cost of gluten-free food as a medical expense.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly record of gluten-free spending exists, with any available prescription or tax claim submitted and a yearly extra cost total calculated."
                cadence: rolling
              tasks:
                - "Check whether your health service or tax authority helps with gluten-free costs"
                - "Set up a simple log of specialist gluten-free spending"
                - "Add last month's gluten-free receipts to the log @recurring(monthly:4)"
                - "Submit any prescription request or expense claim you are eligible for @recurring(quarterly)"
            - name: Safe snack stash for work, car and bag
              description: |-
                ## Purpose
                Hunger plus no safe option is when coeliacs take risks: a cake at a meeting, a sandwich at a station. A small stash of shelf-stable gluten-free food in your bag, desk and car, refilled monthly, removes that pressure entirely.

                ## Milestones
                1. Three stash locations chosen, such as bag, desk and car.
                2. Each stash stocked with label-checked snacks and one meal-sized option.
                3. A monthly refill routine in place.
                4. Out-of-date items rotated out before they expire.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three gluten-free snack stashes are stocked and have been refilled monthly for three months."
                cadence: rolling
              tasks:
                - "Pick three places where you most often get stuck hungry"
                - "Buy label-checked snacks and a meal-sized option for each"
                - "Refill the stashes and rotate older items @recurring(monthly:20)"
            - name: Coeliac society membership and food directory
              description: |-
                ## Purpose
                National coeliac societies publish food directories, barcode scanner apps, accredited restaurant lists and travel guides that are more current than anything else available. Joining yours, and actually setting up the tools on your phone, gives you the best single source of checked information for a modest yearly fee.

                ## Milestones
                1. Your national coeliac society identified and its membership options compared.
                2. Membership started or a decision recorded not to join.
                3. The society's app or directory installed and tested in a shop.
                4. Renewal date and any local group meetings in your calendar.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Membership of a coeliac society is active or a recorded decision explains why not, and its directory or app has been used in a shop."
                cadence: cyclic
              tasks:
                - "Find your national coeliac society and read what members get"
                - "Join and install the society's app or food directory"
                - "Scan five products in a shop to test the app"
                - "Review the membership and renew if still useful @recurring(yearly)"
            - name: Gluten-free flour blends and binders
              description: |-
                ## Purpose
                Wheat flour does three jobs at once: structure, stretch and absorption, and no single gluten-free flour replaces all three. Understanding how rice, sorghum, buckwheat, tapioca and potato starch behave, and when xanthan gum or psyllium husk does the binding, turns failed bakes from mysteries into adjustments.

                ## Milestones
                1. The role of each common gluten-free flour and starch noted on one page.
                2. A shop-bought blend and one home-mixed blend compared in the same recipe.
                3. The effect of xanthan gum and psyllium husk tested side by side.
                4. Your preferred house blend written down with its proportions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written house flour blend exists, chosen after comparing at least two blends and two binders in the same recipe."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a one-line note on what each common gluten-free flour does"
                - "Bake one simple muffin recipe with a shop blend and a home blend"
                - "Repeat the bake with xanthan gum, then with psyllium husk"
                - "Record your house blend and when to use it"
            - name: Everyday gluten-free sandwich loaf
              description: |-
                ## Purpose
                Shop-bought gluten-free bread is often small, dry and expensive, and many people stop eating sandwiches altogether. A home loaf built on psyllium husk can slice thin, hold a filling and freeze well, and once mastered it saves money every week.

                ## Milestones
                1. One tested psyllium-based loaf recipe chosen.
                2. Three bakes completed, each with notes on texture and changes made.
                3. A loaf that slices thin and holds a sandwich filling the next day.
                4. A weekly bake and slice-and-freeze routine running.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A home gluten-free loaf that slices thinly and holds a filling has been baked at least three times with notes, and is baked weekly."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose one psyllium-based gluten-free loaf recipe to learn"
                - "Bake the loaf and note texture, rise and crumb"
                - "Adjust water or baking time and bake twice more"
                - "Bake a loaf and freeze it in slices @recurring(weekly:sun)"
            - name: Gluten-free shortcrust pastry and pies
              description: |-
                ## Purpose
                Pastry is where gluten-free cooks most often give up, because the dough cracks, tears and refuses to roll. A few techniques, rolling between baking paper, chilling well and patching instead of rerolling, make quiches, pies and tarts possible again, which matters at family meals and festivals.

                ## Milestones
                1. A gluten-free shortcrust recipe chosen and made twice.
                2. Rolling between baking paper and patching practised until the dough lines a tin.
                3. One savoury pie and one sweet tart completed.
                4. Your working notes saved alongside the recipe.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One savoury and one sweet gluten-free pastry dish have been made successfully, with technique notes saved."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick a gluten-free shortcrust recipe with good reviews"
                - "Make the dough and roll it between two sheets of baking paper"
                - "Bake a quiche or pie with the pastry"
                - "Bake a sweet tart and note what you changed"
            - name: Thickening sauces and gravies without wheat
              description: |-
                ## Purpose
                Gravy, white sauce, stews and pie fillings are traditionally built on a wheat flour roux, so they are a common hidden source at other people's tables and a common gap in a new coeliac's cooking. Learning cornflour slurries, rice flour roux, arrowroot and reduction gives you every classic sauce back.

                ## Milestones
                1. A white sauce made with a rice flour or cornflour roux.
                2. A gravy thickened with a cornflour slurry with no lumps.
                3. A stew thickened by reduction or potato alone.
                4. A short card listing which thickener suits which dish.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A gluten-free white sauce, gravy and stew have each been made successfully, and a thickener card is in the kitchen."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Make a white sauce with a rice flour or cornflour roux"
                - "Make a gravy using a cornflour slurry and gluten-free stock"
                - "Thicken a stew by reducing it or adding mashed potato"
                - "Write a card matching each thickener to its best dishes"
            - name: Gluten-free grains, pasta and noodles beyond rice
              description: |-
                ## Purpose
                Rice and potatoes carry most new coeliacs for months, and boredom is a real reason people slip. Buckwheat, millet, quinoa, teff, polenta, rice noodles and good corn or legume pasta add variety, fibre and texture, as long as you buy versions labelled gluten-free.

                ## Milestones
                1. Six grains or noodles you have not cooked before listed.
                2. Each cooked once in a simple dish with notes on texture and taste.
                3. Three of them adopted into regular meals.
                4. Brands that are labelled gluten-free noted for each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six new gluten-free grains or noodles have been cooked once each and three are part of regular meals."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List six gluten-free grains or noodles you have not tried"
                - "Buy versions labelled gluten-free, not just naturally free"
                - "Cook one new grain or noodle dish each week for six weeks"
                - "Choose the three you will keep in the rotation"
            - name: Oats on a coeliac diet, decided with your dietitian
              description: |-
                ## Purpose
                Oats are often contaminated with wheat during growing and milling, and a minority of people with coeliac disease also react to oats themselves. Whether to include specially grown gluten-free oats is a decision to make with your dietitian or doctor, ideally once your diet has settled, with a record of how you respond.

                ## Milestones
                1. Your dietitian's advice on whether and when to try gluten-free oats recorded.
                2. Brands of oats labelled gluten-free identified.
                3. Any trial logged in your symptom log as your clinician suggests.
                4. The decision to include or avoid oats written down.

                ## Notes
                Ordinary oats and oat-based foods not labelled gluten-free are not suitable for coeliacs.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on oats, made with your dietitian or doctor, is recorded along with any trial notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your dietitian whether gluten-free oats are worth trying for you"
                - "Find oat brands that carry a gluten-free label"
                - "Log any trial in your symptom log as advised"
                - "Write down the decision and the reason"
            - name: Nutrients a gluten-free diet can run short of
              description: |-
                ## Purpose
                Many specialist gluten-free products are not fortified the way ordinary bread and cereals often are, and they can be low in fibre. Knowing which nutrients your dietitian wants you to watch, such as iron, calcium, folate, B vitamins and fibre, and which foods supply them, keeps a strict diet from becoming a thin one.

                ## Milestones
                1. The nutrients your dietitian or doctor wants you to watch listed.
                2. Natural gluten-free food sources for each noted.
                3. Your typical week checked against the list for gaps.
                4. Any supplement question raised with your clinician, not guessed.

                ## Notes
                Do not start supplements on your own reasoning. Your doctor can check blood levels and advise.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of nutrients to watch with gluten-free food sources exists, and your weekly meals have been checked against it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your dietitian which nutrients you should pay attention to"
                - "List gluten-free foods that supply each one"
                - "Compare a typical week of meals with the list"
                - "Raise any gap with your doctor before buying supplements"
            - name: Asking about gluten when eating out
              description: |-
                ## Purpose
                Eating out is the most common source of accidental gluten for coeliacs, usually through shared fryers, flour-dusted surfaces, soy sauce and stock rather than the dish itself. A short, practised set of questions for staff, and knowing which answers mean leave, makes restaurants manageable instead of a gamble.

                ## Milestones
                1. Six questions ready to ask staff about preparation, fryers and sauces.
                2. The answers that should make you choose something else listed.
                3. The questions used confidently in three different restaurants.
                4. A note of what worked and what did not after each visit.

                ## Notes
                Ask whether chips share oil with battered food, whether gluten-free meals use clean pans and boards, and whether sauces and stock are checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of six eating-out questions has been used in three restaurants, with notes on each visit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write six questions about fryers, surfaces, sauces and stock"
                - "List the answers that mean you should order something else"
                - "Phone ahead and use the questions at the next meal out"
                - "Note the outcome of each visit in your symptom log"
            - name: Fully gluten-free or mixed household decision
              description: |-
                ## Purpose
                Every household with a coeliac member eventually has the argument: should everyone eat gluten-free at home? A fully gluten-free kitchen is safer and simpler but costs more and can annoy others, while a mixed one needs discipline. Weighing cost, safety, ages and habits once, and writing the decision down, stops the argument recurring.

                ## Milestones
                1. The options listed: fully gluten-free, mixed with rules, or gluten-free main meals only.
                2. Cost, safety and practical effects of each written down.
                3. A household conversation held and a decision agreed.
                4. A review date set for six months on.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household decision on fully gluten-free or mixed cooking, with reasons and a review date, has been agreed by everyone at home."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the three options for how the household could eat"
                - "Estimate the weekly cost difference between the options"
                - "Hold a household meal to discuss and agree one option"
                - "Write the decision down with a review date"
            - name: Gluten-free bread brand taste test
              description: |-
                ## Purpose
                Brands differ wildly in taste, slice size, how they toast and whether they survive a packed lunch, and price per slice is rarely what the shelf label suggests. A blind tasting of four or five breads, scored on the same criteria, settles which to buy for toast, sandwiches and freezing.

                ## Milestones
                1. Four or five brands bought, including a fresh and a long-life option.
                2. Each scored for taste, texture, toasting and sandwich strength.
                3. Price per slice worked out for each.
                4. A first choice and a backup chosen for everyday use.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four or more gluten-free breads have been scored on the same criteria and price per slice, and a first and backup choice are written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy four or five gluten-free breads from different brands"
                - "Score each for taste, texture, toasting and sandwich use"
                - "Work out the price per slice for each"
                - "Add your first and backup choice to the trusted product list"
            - name: Choosing equipment for gluten-free baking
              description: |-
                ## Purpose
                A stand mixer, a bread maker with a gluten-free programme or simply a good set of digital scales can make the difference between occasional failed bakes and a reliable weekly loaf. Deciding what you actually need, and avoiding second-hand machines that have handled wheat flour, keeps money and crumbs where they belong.

                ## Milestones
                1. The bakes you make weekly listed to define what equipment would help.
                2. Two or three options compared on price, capacity and gluten-free settings.
                3. A decision made, including whether to buy nothing.
                4. New equipment kept for gluten-free use only.

                ## Notes
                Start from the **Purchase decision** template. Used bread makers and mixers can hold flour in crevices and are hard to clean fully.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on gluten-free baking equipment compares at least two options against your weekly baking."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List what you bake each week and where it goes wrong"
                - "Compare two or three machines or tools against that list"
                - "Decide what to buy, or decide to buy nothing yet"
                - "Label any new equipment as gluten-free only"
            - name: Medicines and supplements gluten check
              description: |-
                ## Purpose
                Tablets and capsules use fillers, and while gluten in licensed medicines is uncommon, supplements, herbal products and some imported brands are less predictable. Asking your pharmacist to check each regular product, and keeping a short list of confirmed ones, removes one more unknown.

                ## Milestones
                1. A list of every medicine, supplement and remedy you take regularly.
                2. Each one checked with your pharmacist or the manufacturer.
                3. The answers recorded beside each product.
                4. Your coeliac disease noted on your pharmacy record.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regular medicine and supplement is listed with a recorded gluten check, and the pharmacy record shows coeliac disease."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine, supplement and remedy you take"
                - "Ask your pharmacist to check each one for gluten"
                - "Ask the pharmacy to add coeliac disease to your record"
                - "Recheck the list with your pharmacist when it changes @recurring(yearly)"
            - name: Shifting from specialist products to naturally gluten-free food
              description: |-
                ## Purpose
                Specialist gluten-free breads, biscuits and ready meals are expensive, often low in fibre and high in sugar and fat to make up for texture. Moving more meals toward food that is gluten-free by nature, such as potatoes, rice, beans, eggs, meat, fish, vegetables and fruit, saves money and usually makes the diet more filling.

                ## Milestones
                1. One month of specialist product spending recorded as a starting point.
                2. Three specialist items each replaced with a naturally gluten-free alternative.
                3. Breakfasts and lunches redesigned around whole foods.
                4. A second month of spending recorded and compared.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Specialist gluten-free spending in a recent month is measurably lower than the starting month, with three items replaced by whole foods."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Total last month's spending on specialist gluten-free products"
                - "Pick three specialist items to replace with whole foods"
                - "Plan two breakfasts and two lunches with no specialist products"
                - "Compare spending after a month"
            - name: Workplace food arrangements and team events
              description: |-
                ## Purpose
                Office life runs on shared cakes, sandwich platters, team lunches and conference buffets, and the coeliac colleague is often the one eating nothing. A quiet word with your manager or event organiser, a clean shelf in the shared fridge and a standing request for gluten-free catering makes work events something you can attend properly.

                ## Milestones
                1. Your manager or office lead told what coeliac disease means for catering.
                2. A safe storage spot agreed in the shared fridge or cupboard.
                3. Your requirement added to the catering or events booking process.
                4. One catered work event attended with safe food provided.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your gluten-free requirement is part of your workplace's catering process and a safe storage spot is agreed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell your manager or office lead what coeliac catering needs"
                - "Agree a labelled spot in the shared fridge or cupboard"
                - "Ask for your requirement to be added to event catering forms"
                - "Check the arrangements before the next team lunch"
            - name: Local safe-dining shortlist
              description: |-
                ## Purpose
                Word of mouth from other coeliacs is the best guide to eating out, because accreditation schemes and menus only tell part of the story. A shortlist of local cafés, restaurants and takeaways that have fed you safely, with what you ordered and who served you, means a last-minute meal out is a quick decision instead of a risk.

                ## Milestones
                1. Accredited gluten-free venues near you found through your coeliac society.
                2. Local coeliac recommendations gathered from a group or forum.
                3. Five places tried with notes on dish, questions asked and outcome.
                4. A shortlist of trusted venues saved on your phone.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shortlist of at least five venues tried and rated for gluten-free safety is saved on your phone."
                cadence: rolling
              tasks:
                - "Search your coeliac society's accredited venue list for your town"
                - "Ask a local coeliac group for their trusted places"
                - "Try one new venue from the list and record the outcome @recurring(monthly:16)"
                - "Remove any venue where you had a reaction or poor answers"
            - name: Gluten-free festive meal for a mixed table
              description: |-
                ## Purpose
                Festive meals are full of gluten in stuffing, gravy, pigs in blankets, pies, puddings and breads, and the host is often cooking both versions in one busy kitchen. Planning a menu where most dishes are gluten-free for everyone, with a timeline that keeps the few wheat dishes separate, means the coeliac guest eats the same meal as everyone else.

                ## Milestones
                1. A festive menu where most dishes are gluten-free for all.
                2. Gluten-free versions of stuffing, gravy and dessert tested in advance.
                3. A cooking timeline that keeps gluten dishes separate in oven and on the hob.
                4. Serving spoons and dishes labelled on the day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive meal was served where the coeliac guest could eat every main element, with no shared serving spoons between gluten and gluten-free dishes."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Start planning the gluten-free festive menu six weeks ahead @recurring(yearly)"
                - "Test gluten-free stuffing, gravy and dessert before the day"
                - "Write a timeline that keeps wheat dishes on separate trays"
                - "Label each dish and its serving spoon on the table"
            - name: Gluten-free birthday cake and party food
              description: |-
                ## Purpose
                Birthday parties are hardest for coeliac children and adults alike, because the cake and party food are usually the centre of the event. Planning a gluten-free cake everyone wants to eat, and party food that is safe without anyone noticing it is special, keeps the guest of honour from eating a separate plate.

                ## Milestones
                1. A gluten-free cake recipe tested once before the party.
                2. Party food planned so that most items are gluten-free for everyone.
                3. Any gluten items kept on a separate table with their own utensils.
                4. The party held with the coeliac guest able to eat the cake.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A party took place with a gluten-free cake and mostly gluten-free food, with any gluten items served separately."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose and test bake a gluten-free celebration cake"
                - "Plan party food that is gluten-free for every guest"
                - "Set up a separate spot for any food containing gluten"
                - "Cut the gluten-free cake first with a clean knife"
            - name: Weddings, conferences and catered events
              description: |-
                ## Purpose
                Weddings, conferences and award dinners usually take dietary requirements weeks in advance, then serve a gluten-free meal with a bread roll balanced on the side. Contacting the caterer directly, confirming what will be served and how it is marked, and bringing backup food turns a long day from a hungry gamble into a normal event.

                ## Milestones
                1. The requirement given on the RSVP or booking form, using the words coeliac disease.
                2. The caterer contacted directly with your preparation questions.
                3. Confirmation of the menu and how your plate will be identified.
                4. A backup snack packed for the day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The caterer for the event has confirmed a gluten-free menu in writing and you attended with backup food."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write coeliac disease, not just gluten-free, on the RSVP form"
                - "Ask the organiser for the caterer's contact details"
                - "Email the caterer your questions about preparation and serving"
                - "Pack a backup meal for the day"
            - name: Gluten-free holiday abroad
              description: |-
                ## Purpose
                Travel brings unknown languages, unfamiliar dishes and fewer safe fallbacks, which is when exposures happen. Researching the destination's gluten-free scene, carrying restaurant cards in the local language and booking self-catering where possible lets you enjoy the food rather than living on crisps.

                ## Milestones
                1. The destination's coeliac society or gluten-free guide found and read.
                2. Gluten-free restaurant cards prepared in the local language.
                3. Accommodation with a kitchen or a clear breakfast arrangement booked.
                4. Travel food for flights and the first day packed, within customs rules.

                ## Notes
                Start from the **Trip** template. Some countries, such as Italy, have strong gluten-free awareness and pharmacies that stock specialist products.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip was planned with local-language restaurant cards, researched safe venues and a kitchen or confirmed breakfast, and completed without relying on unsafe food."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the coeliac society or gluten-free guide for your destination"
                - "Ask the agent to translate a gluten-free restaurant card into the local language"
                - "Book accommodation with a kitchen or confirmed safe breakfast"
                - "Request a gluten-free meal from the airline and pack backup food"
            - name: Planned hospital stay with gluten-free meals
              description: |-
                ## Purpose
                Hospital food services do cater for coeliac disease, but requests can be lost between the admission form, the ward and the kitchen, especially after a change of ward. Flagging it at pre-assessment, checking it is on the ward record and bringing safe snacks means you are not relying on toast at three in the morning.

                ## Milestones
                1. Coeliac disease recorded at the pre-assessment appointment.
                2. The ward asked to confirm gluten-free meals are ordered.
                3. A bag of safe snacks packed for the stay.
                4. A person named who can bring food in if needed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Coeliac disease is on your hospital record before admission, gluten-free meals were confirmed with the ward and a snack bag went with you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Tell the pre-assessment nurse you have coeliac disease"
                - "Ask the ward to confirm gluten-free meals on admission"
                - "Pack a bag of safe snacks for the stay"
                - "Arrange for a family member to bring food if needed"
            - name: Staying with friends or family as a gluten-free guest
              description: |-
                ## Purpose
                Staying a weekend with relatives can be harder than a restaurant, because generous hosts mean well and their kitchen is full of crumbs. Agreeing in advance what you will bring, what you will cook yourself and what they can safely make keeps the visit warm and your gut quiet.

                ## Milestones
                1. The host contacted a week ahead about meals during the stay.
                2. Agreement on which meals you will cook, bring or eat out.
                3. Your own toaster bags, spread and board packed.
                4. The stay completed without a suspected exposure, or one logged if it happened.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A visit took place with meals agreed with the host beforehand and your own gluten-free kit packed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone your host a week before to talk through meals"
                - "Agree which meals you will cook or bring yourself"
                - "Pack toaster bags, your own spread and a small board"
                - "Offer to cook one shared gluten-free meal for everyone"
            - name: Coeliac child at nursery or school
              description: |-
                ## Purpose
                Children with coeliac disease spend most of their weekday meals in someone else's care, among playdough, cooking lessons, shared snacks and birthday treats. A written plan agreed with the school, a meeting with the catering lead and a box of safe treats in the classroom keep your child included and safe.

                ## Milestones
                1. A meeting held with the class teacher and catering lead.
                2. A written plan covering school meals, snacks, cooking lessons and crafts.
                3. A box of safe treats kept in the classroom for celebrations.
                4. The plan reviewed at the start of each school term.

                ## Notes
                Playdough, pasta crafts and baking lessons often involve wheat flour. Ask about them as well as lunch.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written gluten-free plan for your child is agreed with the school, covering meals, snacks and activities, with a treat box in class."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Request a meeting with the class teacher and catering lead"
                - "Draft a one-page plan covering meals, snacks, crafts and cooking"
                - "Drop off a labelled box of safe treats for celebrations"
                - "Review the plan and the school menu with staff each term @recurring(quarterly)"
            - name: School trips and residential camps for a coeliac child
              description: |-
                ## Purpose
                Residential trips and day outings remove the school kitchen from the picture and add coach stops, packed lunches and activity centres. Contacting the venue early, confirming who checks the food and sending clearly labelled supplies means your child goes on the trip rather than staying behind.

                ## Milestones
                1. The trip leader told about coeliac disease when the trip is announced.
                2. The venue's catering confirmed in writing.
                3. Labelled backup food packed for travel days.
                4. A debrief with your child afterwards on what worked.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The venue's gluten-free catering was confirmed in writing before the trip and your child went with labelled backup food."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the trip leader about coeliac disease as soon as the trip is announced"
                - "Ask for the venue's catering contact and confirm their plan"
                - "Pack labelled gluten-free food for travel days"
                - "Talk with your child afterwards about what went well"
            - name: Handing a teenager their own gluten-free diet
              description: |-
                ## Purpose
                Teenagers are the age group most likely to drift from a strict diet, through friends, takeaways and not wanting to be different. Gradually handing over label reading, ordering, packing food and talking to their own doctor builds the habits they will need when nobody is checking for them.

                ## Milestones
                1. A list of skills your teenager needs before leaving home.
                2. Each skill practised with you, then done alone.
                3. Your teenager speaking for themselves at a medical appointment.
                4. A monthly check-in on how eating out with friends is going.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your teenager independently reads labels, orders in restaurants and packs safe food, and has led one medical appointment."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the gluten-free skills your teenager will need at eighteen"
                - "Let them do the label checks during the weekly shop"
                - "Have them order for themselves next time you eat out"
                - "Check in about eating with friends @recurring(monthly:7)"
            - name: Starting university or a shared house with coeliac disease
              description: |-
                ## Purpose
                University halls and shared houses mix strangers, shared toasters and late-night takeaways, and catered halls vary hugely in how they handle coeliac disease. Contacting the accommodation office early, packing your own kit and agreeing simple rules with flatmates in week one prevents a term of repeated exposures.

                ## Milestones
                1. The accommodation office told about coeliac disease before arrival.
                2. Catering arrangements or self-catered storage confirmed.
                3. Your own toaster, pan, board and labelled box packed.
                4. A short kitchen agreement made with flatmates in the first week.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The accommodation office has your requirement on record before arrival, and a kitchen agreement with flatmates is made in week one."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Email the accommodation office about coeliac disease before term"
                - "Pack your own toaster, pan, board and a labelled storage box"
                - "Agree three kitchen rules with flatmates in the first week"
                - "Find two places near campus that serve safe gluten-free food"
            - name: Pregnancy with coeliac disease
              description: |-
                ## Purpose
                Pregnancy brings extra appointments, cravings, nausea and nutrient questions, and with coeliac disease it is worth making sure your midwife and doctor know about it from the start. Telling them early and asking how it affects your care and supplements keeps everything in one plan.

                ## Milestones
                1. Coeliac disease mentioned at the first antenatal appointment.
                2. Questions about supplements and blood tests answered by your midwife or doctor.
                3. Easy gluten-free snacks for nausea and tiredness in the house.
                4. Hospital bag packed with safe food for after the birth.

                ## Notes
                Advice about supplements in pregnancy is personal. Follow your midwife or doctor rather than general guidance.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your antenatal team has coeliac disease on record, your questions are answered in writing and a gluten-free hospital bag is packed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Tell your midwife about coeliac disease at the first appointment"
                - "Ask whether it changes the supplements or blood tests advised"
                - "Stock easy gluten-free snacks for nausea days"
                - "Pack gluten-free food in your hospital bag"
            - name: Gluten-free eating in later life and care settings
              description: |-
                ## Purpose
                Appetite, cooking energy and eyesight for reading small labels can all change with age, and a move to home care, a care home or hospital can hand meals to people who have never heard of coeliac disease. A written gluten-free care sheet and a stocked cupboard of easy meals keep standards up when someone else is cooking.

                ## Milestones
                1. A one-page gluten-free care sheet written for carers.
                2. A cupboard and freezer of easy, label-checked meals kept stocked.
                3. Carers or care home staff briefed using the sheet.
                4. A named family member or friend who checks in on supplies.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A gluten-free care sheet is held by every carer, and a monthly supply check by a named person is running."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page gluten-free care sheet in large print"
                - "Stock a shelf of easy gluten-free meals and snacks"
                - "Brief every carer or care home team using the sheet"
                - "Check gluten-free supplies with the person cared for @recurring(monthly:22)"
            - name: Gluten-free sourdough starter and loaves
              description: |-
                ## Purpose
                Sourdough made with a brown rice or buckwheat starter gives gluten-free bread a flavour and keeping quality that yeasted loaves rarely match. It takes a week to build the starter and several bakes to learn the dough, which behaves more like a thick batter than a wheat dough.

                ## Milestones
                1. A gluten-free starter built from rice, buckwheat or sorghum flour and active.
                2. Feeding notes kept for the first two weeks.
                3. Three loaves baked with notes on rise, crumb and sourness.
                4. A loaf that slices cleanly and keeps for three days.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An active gluten-free starter is kept and three sourdough loaves have been baked with notes, the last slicing cleanly."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Start a gluten-free starter with brown rice or buckwheat flour"
                - "Record each feed and the starter's rise for two weeks"
                - "Bake a first loaf and note rise and crumb"
                - "Feed the starter kept in the fridge @recurring(weekly:wed)"
            - name: Converting family recipes to gluten-free
              description: |-
                ## Purpose
                Family recipes such as a grandmother's sponge, a favourite pie or a Sunday crumble are often the foods most missed after diagnosis. Converting them one at a time, with a notebook of what was swapped and how it turned out, keeps family food traditions alive at your table.

                ## Milestones
                1. Five family recipes chosen for conversion.
                2. Each converted with the swaps written down.
                3. Every recipe tested at least twice and adjusted.
                4. A converted recipe notebook shared with the family.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five family recipes have been converted to gluten-free, each tested twice, and are written in a shared notebook."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose five family recipes you miss most"
                - "Ask the agent to suggest gluten-free swaps for the first recipe"
                - "Test each converted recipe twice and note the changes"
                - "Share the notebook with your family"
            - name: Persistent symptoms despite a strict diet
              description: |-
                ## Purpose
                Symptoms that continue after a year or more of careful eating usually come from hidden gluten, but sometimes from another condition, and a small number of people need specialist assessment. Gathering your symptom log, a detailed food record and your blood results before going back to your doctor makes that conversation useful.

                ## Milestones
                1. Three months of symptom log entries gathered.
                2. A detailed two-week food diary with brands and eating-out notes.
                3. Your diet reviewed by a dietitian for hidden sources.
                4. An appointment with your doctor held and next steps recorded.

                ## Notes
                This project organises evidence for your doctor. It is not a way to self-diagnose, and new or severe symptoms need prompt medical attention.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your doctor has reviewed your symptom log, food diary and dietitian notes, and the agreed next steps are written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Collect the last three months of your symptom log"
                - "Keep a detailed two-week food diary with brands"
                - "Ask your dietitian to review the diary for hidden gluten"
                - "Book an appointment with your doctor to discuss the findings"
            - name: Dermatitis herpetiformis records and care
              description: |-
                ## Purpose
                Dermatitis herpetiformis is the skin form of coeliac disease, with intensely itchy blistering that can be slow to settle even on a strict diet. Keeping a photo record, treatment notes and the dermatologist's plan in one place helps your clinicians see whether the diet and any treatment are working.

                ## Milestones
                1. A dated photo record of skin flares started.
                2. Treatments and their effects written down in one place.
                3. Questions for your dermatologist or doctor prepared before each appointment.
                4. The agreed skin care and diet plan saved.

                ## Notes
                Treatment for dermatitis herpetiformis is prescribed and monitored by your clinician. This project keeps the records they need.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated photo and treatment record of skin flares is kept and was used at your latest dermatology appointment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Start a dated photo folder for skin flares"
                - "Record treatments and how the skin responded"
                - "Write questions for your next dermatology appointment"
                - "Save the agreed plan with your health records"
---

# Coeliac & Gluten-Free Eating

This area is for anyone who has to eat strictly gluten-free, whether a fresh coeliac diagnosis, years of living with it, or cooking for someone who has it, written by a friend who knows that a single shared toaster can undo a month of care. It starts with the foundations (confirming the diagnosis, the dietitian, hidden gluten, labels, a changed-over kitchen and house rules), moves through the weekly machinery of planning, product checks, symptom logs and annual reviews, then the skills of gluten-free flours, bread, pastry and sauces, the decisions about oats, equipment and a mixed or fully gluten-free home, dated plans for festivals, weddings, holidays and hospital stays, versions for children, teenagers, students, pregnancy and later life, and finally the specialist work of sourdough, recipe conversion, persistent symptoms and skin disease.

What repeats is a Saturday meal plan and a Sunday bake, a monthly product recheck, symptom review, cost record and snack stash refill, a quarterly crumb audit of the kitchen, and a yearly review with your doctor, dietitian and coeliac society. The Operational checklist, Weekly meal plan, Metrics log, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
