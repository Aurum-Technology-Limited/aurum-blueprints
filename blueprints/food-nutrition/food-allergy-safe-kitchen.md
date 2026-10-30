---
id: food-nutrition.food-allergy-safe-kitchen
name: Food Allergy Safe Kitchen
description: "A household allergy register and action plan, label and recall routines, cross-contact rules and safe recipes, so one kitchen can feed everyone safely around nut, milk, egg and other allergies."
category: personal
version: 1.0.0
tags: [food-nutrition, food-allergy-safe-kitchen, parent, everyone, food-allergy, label-reading, cross-contact, anaphylaxis]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - operational-checklist
    - weekly-meal-plan
    - meeting-notes
    - trip
    - habit-tracker
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Food Allergy Safe Kitchen
          description: "Running a kitchen safely around nut, dairy, egg or other food allergies, with label checking, cross-contamination rules and safe recipes."
          projects:
            - name: First fortnight after a food allergy diagnosis
              description: |-
                ## Purpose
                The weeks after a new diagnosis are when most households feel lost: the clinic letter arrives, every cupboard is suddenly suspect and each meal needs thought. A two-week plan covering the questions left over, the medicine, a first look at the cupboards and three safe dinners gets everyone through the fog without trying to fix the whole kitchen at once.

                ## Milestones
                1. The diagnosis, the allergens named and any prescribed medicine written on one page.
                2. Questions left over from the appointment sent to the clinic or your doctor.
                3. Three dinners the whole household can eat safely cooked at least once.
                4. The bigger jobs (kitchen sweep, equipment, school) listed in order for the following month.

                ## Notes
                Expect the first fortnight to be tiring. The aim is safe and good enough, not a perfect kitchen by Friday.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Within three weeks of diagnosis a one-page summary exists, open questions have gone to the clinic and three safe dinners have been cooked."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the diagnosis, allergens and prescribed medicine on one page"
                - "List every question the clinic appointment left unanswered"
                - "Send the questions to the allergy clinic or your doctor"
                - "Cook three dinners that leave out every named allergen"
            - name: Household allergy register
              description: |-
                ## Purpose
                When more than one person in the house has an allergy, or when grandparents, sitters and visitors cook, memory is not a record. A short register listing each person, each confirmed allergen, how past reactions went and what the clinician said about traces gives everyone the same facts to work from.

                ## Milestones
                1. Every allergic person in the household listed with each allergen a clinician has confirmed.
                2. Past reactions summarised in a line each, with dates.
                3. The clinician's guidance on traces and precautionary labels noted for each person.
                4. The register saved where every adult in the house can open it.

                ## Notes
                Keep confirmed allergies separate from foods you are avoiding while waiting for tests, so nobody mistakes one for the other.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register naming every allergic person, their confirmed allergens and their clinician's trace guidance is saved where all adults in the house can reach it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each allergic person and every allergen confirmed by a clinician"
                - "Add one line on each past reaction and when it happened"
                - "Note what the clinician said about traces for each person"
                - "Share the register with every adult who cooks in the house"
                - "Review the register for changed allergens or guidance @recurring(yearly)"
            - name: Written allergy action plan from your clinician
              description: |-
                ## Purpose
                Many allergy clinics and health services use a one-page action plan that says what a mild and a severe reaction look like and what to do for each. Having one completed by the clinician for each allergic person, rather than relying on what was said in the room, means anyone in the house can act in the right order.

                ## Milestones
                1. The action plan form your health service uses identified.
                2. A completed plan for each allergic person, filled in or signed by their clinician.
                3. Copies kept with the medicine, on the fridge and with school or work where needed.
                4. Every adult in the house has read the plan from start to finish once.

                ## Notes
                If your clinician has not offered a plan, ask for one. The plan is theirs to write; your job is to make sure it exists and is where people need it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clinician-completed action plan for each allergic person is kept with their medicine and on the fridge, and every adult has read it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the clinic which allergy action plan form they use"
                - "Book a short appointment or call to have the plan completed"
                - "Make copies for the medicine bag, the fridge and school or work"
                - "Ask each adult in the house to read the plan and raise questions"
            - name: Auto-injector kit, carry rule and expiry dates
              description: |-
                ## Purpose
                If an adrenaline (epinephrine) auto-injector has been prescribed, it only helps when it is with the person, in date and not cooked in a hot car. Setting up one kit with the number of devices your clinician advises, a fixed home for it and a rule for who carries it closes the gaps where most problems happen.

                ## Milestones
                1. The number of devices to carry confirmed with your clinician or pharmacist.
                2. One labelled bag holding the devices, the action plan and any other prescribed medicine.
                3. A fixed home location and a written rule for who carries the kit when out.
                4. Expiry dates in the calendar, with repeat prescriptions requested in good time.

                ## Notes
                Most manufacturers run a free expiry reminder service. Keep devices at room temperature and out of direct sun.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A kit with in-date devices and the action plan has a fixed home and a written carry rule, with every expiry date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist how many devices should be carried at all times"
                - "Put the devices, action plan and other medicines in one labelled bag"
                - "Agree where the kit lives at home and who carries it when out"
                - "Register each device with the manufacturer's expiry reminder service"
                - "Check the kit's expiry dates and that it is in its usual place @recurring(monthly:3)"
            - name: Emergency call script and fridge card
              description: |-
                ## Purpose
                In an emergency people forget the postcode, the word to use and where the medicine is kept. A card on the fridge with the emergency number, the full address, a two-line script naming the allergen and the word anaphylaxis, and the kit's location lets a babysitter or a frightened sibling make a clear call.

                ## Milestones
                1. A card with the emergency number, full address and a nearby landmark.
                2. A short script naming the person, the allergen and the word anaphylaxis.
                3. The locations of the kit and the action plan written on the card.
                4. The card on the fridge and a photo of it on every adult's phone.

                ## Notes
                Follow the call handler's instructions on the day. The card organises what to say; it does not replace their advice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with the emergency number, address, call script and kit location is on the fridge and saved on every adult's phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the emergency number, full address and a nearby landmark on a card"
                - "Add a two-line script naming the person, allergen and anaphylaxis"
                - "Note where the auto-injector kit and action plan are kept"
                - "Stick the card on the fridge and send a photo to every adult"
            - name: Kitchen and pantry allergen sweep
              description: |-
                ## Purpose
                Allergens hide in places nobody thinks of on day one: milk in stock cubes, nuts in pesto, egg in mayonnaise-based sauces, sesame in cereal bars. Emptying the cupboards, fridge and freezer once and sorting everything into safe, unsafe and unsure gives a clean starting point and shows which regular products need replacing.

                ## Milestones
                1. Every cupboard, the fridge and the freezer checked against the register.
                2. Each product sorted into safe, unsafe or unsure, with unsure treated as unsafe.
                3. Unsafe products given away, moved out of the kitchen or binned.
                4. A written list of regular products that need a safe replacement.

                ## Notes
                Check the label on the pack you own. The same brand can carry different allergens in different sizes, flavours or countries.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every food item in the kitchen has been checked and sorted, with unsure items removed and a written replacement list made."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Empty one cupboard and check every label against the register"
                - "Sort the rest of the kitchen into safe, unsafe and unsure piles"
                - "Remove unsafe and unsure products from the main cupboards"
                - "Write the list of regular products that need a safe replacement"
            - name: Allergen-free home or shared kitchen decision
              description: |-
                ## Purpose
                Some households remove the allergen from the house entirely; others keep it and manage separation. Both can work, and the right answer depends on the allergen, how severe reactions have been, the age of the allergic person and how much everyone else relies on that food. Choosing deliberately, with the clinician's view on record, stops it being decided by whoever happens to do the shopping.

                ## Milestones
                1. The clinician's view on keeping the allergen in the home recorded.
                2. The foods other members would lose listed with possible replacements.
                3. A decision made: an allergen-free home, or a shared kitchen with separation rules.
                4. The decision written down with a date to revisit it.

                ## Notes
                A shared kitchen is common and workable, but it depends on the storage, equipment and cleaning projects in this area being in place first.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on an allergen-free or shared kitchen, informed by the clinician's view, is recorded with a revisit date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician whether the allergen can safely stay in the home"
                - "List the foods other household members would give up"
                - "Talk the options through with every adult in the household"
                - "Record the decision and the date you will revisit it"
            - name: House rule on 'may contain' labels
              description: |-
                ## Purpose
                Precautionary wording such as 'may contain' or 'made in a factory that also handles' is voluntary and inconsistent, and it does not tell you how much risk a product carries. Asking the clinician how to treat it for each person, then writing one household rule, ends the debate at every shelf.

                ## Milestones
                1. The clinician's guidance on precautionary labels recorded for each allergic person.
                2. One written rule per person: avoid all such products, avoid some wording, or allow.
                3. The rule added to the register and shared with everyone who shops.
                4. Three borderline products already at home checked against the rule as a test.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written household rule on precautionary allergen labels, based on clinician guidance for each person, is in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician how to treat 'may contain' wording for each person"
                - "Write one household rule on precautionary labels per person"
                - "Add the rule to the allergy register"
                - "Test the rule against three products already in the cupboard"
            - name: Allergen-safe storage zone
              description: |-
                ## Purpose
                In a shared kitchen the simplest protection is a place where only safe food lives, on the top shelf of the cupboard and the fridge so crumbs and drips cannot fall onto it. Once that zone exists, everyone knows where safe food is and where allergen foods must never go.

                ## Milestones
                1. A top cupboard shelf and a top fridge shelf set aside for safe food.
                2. Lidded, labelled containers for safe staples such as spreads, flour and snacks.
                3. Allergen foods stored low and sealed so spills cannot reach safe food.
                4. A colour label or sign that a visitor would understand without asking.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Safe food sits on dedicated top shelves in the cupboard and fridge in labelled lidded containers, with allergen foods stored below."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Clear the top cupboard shelf and the top fridge shelf"
                - "Decant safe spreads, flour and snacks into labelled lidded containers"
                - "Move allergen foods to lower shelves in sealed tubs"
                - "Check nothing unsafe has drifted onto the safe shelves @recurring(weekly:sun)"
            - name: Dedicated allergy-safe equipment
              description: |-
                ## Purpose
                Some equipment is very hard to clean completely: toasters, wooden spoons and boards, seasoned pans, sieves and blender seals. A small set used only for safe food, in a colour nobody confuses, removes the guesswork from the jobs most likely to carry an allergen onto a safe plate.

                ## Milestones
                1. A list of hard-to-clean items in your kitchen that touch the allergen.
                2. One colour chosen to mean safe in this house.
                3. Dedicated safe items bought, typically a toaster or toaster bags, boards, spoons and a sieve.
                4. The safe items stored in the safe zone, apart from shared equipment.

                ## Notes
                Start from the **Purchase decision** template. Toaster bags are a cheap first step before buying a second toaster.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A colour-coded set of safe equipment covering every hard-to-clean item on your list is bought and stored in the safe zone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the hard-to-clean items that currently touch the allergen"
                - "Pick one colour to mean safe across all equipment"
                - "Compare prices for a safe toaster, boards, spoons and sieve"
                - "Buy the safe set and label anything that is not already coloured"
            - name: Label check on every shop
              description: |-
                ## Purpose
                Manufacturers change recipes, factories and suppliers without changing the front of the pack, so a product that was safe in spring can carry a new allergen by autumn. Reading the full label every time a product comes into the house, and re-reading the regulars on a fixed day each month, catches most of these changes.

                ## Milestones
                1. A household rule that every pack is read in full when unpacked, never from memory.
                2. The twenty products bought most often listed for a monthly re-read.
                3. Any changed product removed from the safe brands list on the day it is spotted.
                4. Three monthly re-reads completed in a row.

                ## Notes
                Online product pages can lag behind the pack. The label on the item in your hand is the one to trust.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly re-reads of the household's twenty regular products are completed, with any changes recorded."
                cadence: rolling
              tasks:
                - "List the twenty products the household buys most often"
                - "Read the full label of every pack as it is unpacked"
                - "Re-read the labels of the twenty regular products @recurring(monthly:12)"
                - "Remove any changed product from the safe list the same day"
            - name: Allergy alert and recall watch
              description: |-
                ## Purpose
                Food agencies publish alerts when a product turns out to contain an allergen missing from its label, and these are often for everyday brands. Subscribing to the alerts and scanning them each week against your safe brands list means a mislabelled batch leaves your cupboard before anyone eats it.

                ## Milestones
                1. Subscribed to your national food agency's allergy alerts by email or app.
                2. A weekly scan slot in the calendar.
                3. Any alert matching a product at home acted on: batch code checked, product returned or binned.
                4. A note added to the safe brands list whenever an alert affects a regular product.

                ## Notes
                Check the batch code and date on your pack against the alert. Usually only some batches of a product are affected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly alert scans are completed against the safe brands list, with any matching product checked by batch code."
                cadence: rolling
              tasks:
                - "Subscribe to your national food agency's allergy alerts"
                - "Scan the week's allergy alerts against your safe brands list @recurring(weekly:wed)"
                - "Check batch codes on any pack named in an alert"
                - "Return or bin any affected pack and note it on the list"
            - name: Safe brands and products list
              description: |-
                ## Purpose
                A trusted list of the exact products that are safe for your household, down to flavour and pack size, saves twenty minutes at every shop and lets someone else shop for you. It is also the list alerts are checked against and the one grandparents and sitters buy from.

                ## Milestones
                1. At least thirty products listed by brand, product name, flavour and pack size.
                2. Each entry dated with when its label was last checked.
                3. The list in a shared phone note every shopper can open.
                4. A quarterly review that removes changed or discontinued items.

                ## Notes
                Record the flavour and size. A brand's plain version may be safe while its chocolate or seasonal version is not.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A shared list of at least thirty safe products exists, each with a label check date in the last three months."
                cadence: rolling
              tasks:
                - "Start a shared note with brand, product, size and check date columns"
                - "Add thirty products the household already buys and trusts"
                - "Share the list with everyone who shops for the house"
                - "Review the list and remove changed or discontinued products @recurring(quarterly)"
            - name: Cross-contact cleaning routine
              description: |-
                ## Purpose
                Allergen proteins are not destroyed by ordinary cooking heat, and a quick wipe or hand gel does not reliably remove them. A written routine of hot soapy water or detergent wipes for surfaces, hands washed with soap, and safe food always cooked first makes cleaning consistent whoever is at the hob.

                ## Milestones
                1. A one-page cleaning routine stuck inside a cupboard door.
                2. Safe food prepared before allergen food whenever both are cooked.
                3. Separate cloths and sponges for the safe zone, in the safe colour.
                4. A monthly deep clean of the toaster area, hob, fridge shelves and handles.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written routine is posted in the kitchen and three monthly deep cleans have been completed and ticked off."
                cadence: rolling
              tasks:
                - "Write the cleaning routine on one page from the template"
                - "Buy cloths and sponges in the safe colour"
                - "Agree that safe dishes are always cooked and served first"
                - "Deep clean the hob, fridge shelves, handles and shared appliances @recurring(monthly:20)"
            - name: Weekly allergy-checked meal plan
              description: |-
                ## Purpose
                Most slips happen when a tired adult improvises: a jar of sauce grabbed at the last minute, a takeaway nobody checked. Planning the week with every ingredient checked against the register, and shopping only from that plan, takes most of the improvised risk out of the week.

                ## Milestones
                1. A weekly plan covering dinners and packed meals.
                2. Each planned meal checked against the register before shopping.
                3. A shopping list built only from the plan and the safe brands list.
                4. Eight weekly plans completed in a row.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans are completed, each checked against the register before the shop."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan from the template"
                - "Plan the week's meals and check each one against the register @recurring(weekly:sat)"
                - "Build the shopping list from the plan and the safe brands list"
                - "Mark any meal that needs a separate portion for the allergic person"
            - name: Reaction and near-miss log
              description: |-
                ## Purpose
                Small reactions and close calls, such as an unchecked biscuit at a friend's house or the wrong takeaway order, are the best warnings a household gets, yet they are forgotten within weeks. Logging each one with what happened, how it was caught and what will change gives the clinician real information and stops the same slip happening twice.

                ## Milestones
                1. A log with columns for date, food, symptoms, action taken and what will change.
                2. Every reaction or near miss recorded within a day.
                3. A quarterly read-back of the log looking for repeated causes.
                4. The log brought to each clinic appointment.

                ## Notes
                Keep the log for the clinician. Do not use it to make treatment decisions yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A log holds every reaction and near miss for six months, has been read back each quarter and was shared at the last clinic appointment."
                cadence: rolling
              tasks:
                - "Set up a log with date, food, symptoms, action taken and change"
                - "Record any reaction or near miss within a day of it happening"
                - "Read back through the log and note repeated causes @recurring(quarterly)"
                - "Bring the log to the next clinic appointment"
            - name: Quarterly household allergy briefing
              description: |-
                ## Purpose
                Rules drift: a new partner moves in, a child becomes old enough to make their own toast, someone forgets why the top shelf matters. Twenty minutes every three months, covering changes, the kit, the rules and one what-if, keeps the whole household working from the same page.

                ## Milestones
                1. A short agenda: changes, kit location, rules and one practice scenario.
                2. Every member of the household, including older children, attending.
                3. Any rule changes written into the register on the day.
                4. Four briefings held in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four household allergy briefings are held in twelve months, with changes written into the register after each."
                cadence: rolling
              tasks:
                - "Write a five-point agenda for the household briefing"
                - "Hold a twenty-minute household allergy briefing @recurring(quarterly)"
                - "Walk through one what-if scenario at each briefing"
                - "Update the register with any rule agreed at the briefing"
            - name: Annual allergy clinic review
              description: |-
                ## Purpose
                Allergies change over time: children outgrow some, adults develop new ones, and guidance on traces and medicines is updated. A yearly review with the allergy clinic or your doctor, prepared with the reaction log, the kit's expiry dates and your questions, keeps the action plan and prescriptions current.

                ## Milestones
                1. The review month fixed and the appointment requested.
                2. The reaction log, kit expiry dates and three questions prepared.
                3. Any tests the clinic advises done in time to discuss the results.
                4. The updated action plan and prescriptions collected and old copies replaced.

                ## Notes
                If the clinic discharges you to your doctor, agree in writing who now holds the yearly review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An allergy review is held each year with the log and questions prepared, and the action plan is reissued or confirmed as current."
                cadence: cyclic
              tasks:
                - "Ask the clinic or your doctor how often reviews should happen"
                - "Request the yearly allergy review appointment @recurring(yearly)"
                - "Prepare the reaction log, kit expiry dates and three questions"
                - "File the updated action plan and replace every old copy"
            - name: Safe treat stash for parties and surprises
              description: |-
                ## Purpose
                Allergic children are most often left out when cake appears unannounced at school, clubs and other people's birthdays. A stash of safe treats at home, at school and in the kit bag means they always have something to eat when everyone else does.

                ## Milestones
                1. Five or six safe treats chosen from the safe brands list.
                2. A labelled tub at home and one handed to school or nursery.
                3. A small safe treat kept in the kit bag.
                4. The stashes restocked monthly so nothing runs out or goes stale.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Safe treat stashes at home, at school and in the kit bag are stocked and have been restocked every month for three months."
                cadence: rolling
              tasks:
                - "Choose six safe treats from the safe brands list"
                - "Hand a labelled tub of treats to school or nursery"
                - "Restock the home, school and kit bag treat stashes @recurring(monthly:22)"
                - "Check the dates on the school tub at the start of each half term"
            - name: Reading allergen labels and hidden names
              description: |-
                ## Purpose
                Allergens appear under names few people recognise: casein and whey for milk, albumin for egg, tahini for sesame, arachis oil for peanut. Learning the names for every allergen in your register, and how labels are laid out where you live, makes checks at the shelf quick and reliable.

                ## Milestones
                1. A list of alternative names for each allergen in the register.
                2. The local label layout understood: where allergens are emphasised and what precautionary wording looks like.
                3. Ten labels practised with every adult who shops.
                4. The names list saved on phones for use at the shelf.

                ## Notes
                Allergy charities often publish free alternative-name lists for each major allergen.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult who shops can name the hidden terms for each household allergen and has checked ten labels correctly."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find an allergy charity's list of alternative names for each allergen"
                - "Copy the names for your allergens into a phone note"
                - "Practise on ten labels from your own cupboard"
                - "Walk another adult through the same ten labels"
            - name: Auto-injector trainer practice
              description: |-
                ## Purpose
                People who have practised with a trainer device use the real one faster and with fewer mistakes, and the technique differs between brands. Practising every quarter with every adult and older child keeps the steps familiar for a moment when hands are shaking.

                ## Milestones
                1. A trainer device for the exact brand you carry, from the manufacturer or pharmacy.
                2. The manufacturer's video for that device watched by every adult.
                3. Every adult and older child has practised on the trainer.
                4. Quarterly practice kept up for a year.

                ## Notes
                Make sure the trainer matches the brand in the kit, as brands are used differently. Never practise with a live device.
              priority: high
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every adult and older child in the house has practised with the correct trainer device at least once a quarter for a year."
                cadence: rolling
              tasks:
                - "Order a trainer device for the brand that has been prescribed"
                - "Watch the manufacturer's video for that exact device"
                - "Practise with the trainer with every adult and older child @recurring(quarterly)"
                - "Show any new carer the trainer before they look after the allergic person"
            - name: Recognising the signs of a reaction
              description: |-
                ## Purpose
                Reactions do not always begin with hives; they can start with a cough, a hoarse voice, tummy pain, vomiting or a child going suddenly quiet. Learning the signs your health service and action plan list, and which of them are severe, means the household acts on the plan rather than waiting to see.

                ## Milestones
                1. Your health service's list of mild and severe signs read by every adult.
                2. The signs in the action plan matched against that list.
                3. A short what-if quiz run with each adult.
                4. Older children taught which signs to tell an adult about straight away.

                ## Notes
                Follow the action plan and your clinician's instructions. This project is about recognising signs, not deciding treatment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult in the house has read the health service's reaction signs and correctly answered a short what-if quiz."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's page on allergic reaction signs"
                - "Highlight the severe signs listed in the action plan"
                - "Run a five-question what-if quiz with each adult"
                - "Explain to older children which signs to report straight away"
            - name: How cross-contact happens and what removes it
              description: |-
                ## Purpose
                Shared serving spoons, frying oil reused after battered fish, crumbs in the butter and a knife wiped on a tea towel are the classic routes for an allergen to reach a safe plate. Understanding how proteins travel, and why washing removes them while heat does not, turns the cleaning routine from a list of orders into common sense everyone follows.

                ## Milestones
                1. The transfer routes in your own kitchen listed: utensils, oil, spreads, crumbs and hands.
                2. The difference between washing, wiping and sanitising understood.
                3. The two riskiest habits in your kitchen identified and changed.
                4. The routes explained to every adult who cooks.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of transfer routes in your own kitchen exists, with the two riskiest habits identified and changed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read an allergy charity's guide to cross-contact at home"
                - "Watch one meal being made and note every route an allergen could travel"
                - "Change the two riskiest habits you spotted"
                - "Explain the routes to every adult who cooks"
            - name: Egg-free baking that still rises
              description: |-
                ## Purpose
                Egg does several jobs in baking, binding, lift, moisture and glaze, and no single swap covers all four. Learning which replacement suits which job, and testing a sponge, a batch of biscuits and pancakes, gives an egg-allergic household a baking repertoire that does not taste like a compromise.

                ## Milestones
                1. The job egg does in each of three recipes identified.
                2. Swaps tested, such as aquafaba, flax or chia gel and a commercial egg replacer.
                3. A sponge, a biscuit and a pancake recipe each made egg-free with notes.
                4. The best version of each saved in the household recipe file.

                ## Notes
                Check every replacer against the register. Some contain other allergens such as soya, wheat or lupin.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three egg-free recipes, a sponge, a biscuit and a pancake, are tested with notes on the swap and saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose one sponge, one biscuit and one pancake recipe"
                - "Note what job the egg does in each recipe"
                - "Bake each recipe with a different egg swap and score the result"
                - "Save the best version of each with notes on the swap"
            - name: Dairy-free cooking without losing richness
              description: |-
                ## Purpose
                Milk turns up in white sauces, mash, bread, gravy granules and almost every bake, and plant milks behave very differently once heated. Learning which plant milks, fats and cheese alternatives work in which dishes keeps weeknight cooking rich and creamy without the dairy.

                ## Milestones
                1. Plant milks compared in cooking: which curdle, which thicken, which taste sweet.
                2. A dairy-free white sauce, mash and gravy that the household likes.
                3. A dairy-free fat chosen for baking and another for spreading.
                4. Five weekly dishes converted and written up with the products used.

                ## Notes
                Many dairy alternatives are made from nuts, oats or soya. Check them against every allergy in the register, not just milk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A dairy-free white sauce, mash, gravy and five weekly dishes are cooked and written up with the products used."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Buy three plant milks and heat each to see how it behaves"
                - "Make a dairy-free white sauce until it holds without splitting"
                - "Choose a dairy-free fat for baking and one for spreading"
                - "Write up five converted weekly dishes with the products used"
            - name: Nut-free crunch, pesto and sauces
              description: |-
                ## Purpose
                Nuts give crunch, richness and body to pesto, satay, granola, crumble toppings and many curries. Learning nut-free versions built on seeds, toasted oats, breadcrumbs or roasted chickpeas, where those are safe for your household, keeps the dishes everyone misses on the menu.

                ## Milestones
                1. The dishes the household misses because of nuts listed.
                2. Seed and other alternatives checked against the register, especially sesame.
                3. A nut-free pesto, a crunchy topping and a satay-style sauce perfected.
                4. All three recipes added to the household recipe file.

                ## Notes
                Sesame and some seeds are major allergens in their own right, and coconut is classed differently in different countries. Check with the clinician before adding them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A nut-free pesto, crunchy topping and satay-style sauce, each checked against the register, are saved in the recipe file."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the dishes the household misses because of nuts"
                - "Ask the clinician whether seeds and coconut are safe for you"
                - "Make a nut-free pesto and a crunchy topping"
                - "Develop a satay-style sauce without nuts and save the recipe"
            - name: Allergen labelling rules where you live
              description: |-
                ## Purpose
                Labelling law differs between countries: the list of major allergens, how they must be shown, and what applies to loose food in bakeries and cafes. Knowing the local rules tells you what a label can be trusted to show and where you must ask a person instead.

                ## Milestones
                1. Your country's list of allergens that must be declared noted.
                2. The rules for packaged, prepacked-on-site and loose food summarised.
                3. Any household allergen that is not on the legal list flagged.
                4. A one-paragraph summary saved with the register.

                ## Notes
                If your allergen is not on the legal list, labels may not highlight it at all, so the full ingredient list becomes the only check.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-paragraph summary of local allergen labelling rules, including loose food, is saved alongside the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your food agency's page on allergen labelling rules"
                - "Note which allergens must be declared on packaged food"
                - "Ask the agent to summarise the rules for loose and prepacked food in one paragraph"
                - "Save the summary next to the allergy register"
            - name: Online grocery filters and substitution settings
              description: |-
                ## Purpose
                Online shops often swap an unavailable item for a similar one, and the substitute may carry a different allergen. Turning substitutions off for safe products, setting any allergen filters and checking every delivery against the order removes one of the commonest ways an unsafe product slips into the house.

                ## Milestones
                1. Substitutions turned off for every safe product, or for the whole account.
                2. Allergen filters set where the shop offers them.
                3. A favourites list built from the safe brands list.
                4. A delivery routine where every item is matched to the order before unpacking.

                ## Notes
                Allergen filters rely on the shop's own data, which can lag behind the pack. Still read the label on delivery.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Substitutions are off for safe products, filters are set and the shop's favourites list matches the safe brands list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Turn off substitutions for safe products in your online shop account"
                - "Set any allergen filters the shop offers"
                - "Build a favourites list from the safe brands list"
                - "Check each delivered item against the order before unpacking"
            - name: Adapting five family favourites
              description: |-
                ## Purpose
                A diagnosis can quietly remove the meals a household loves most: a lasagne, a Friday curry, a grandmother's cake. Picking five favourites and rebuilding each one with safe ingredients, tested until everyone agrees it still tastes right, protects the meals that matter.

                ## Milestones
                1. Five favourites chosen by the household.
                2. The allergen in each dish identified and a safe swap chosen.
                3. Each dish cooked at least twice and adjusted.
                4. Final versions written into the household recipe file with brand notes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five family favourite dishes are rebuilt without the household's allergens, each cooked twice and written up with brand notes."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask everyone in the household to name one favourite meal"
                - "Mark the allergen in each dish and choose a safe swap"
                - "Cook each adapted dish twice and adjust it"
                - "Ask the agent to format the final versions into a recipe file with brand notes"
            - name: Chef card for restaurants and takeaways
              description: |-
                ## Purpose
                Ordering out is where control is lowest: staff change, kitchens are busy and menus do not list every ingredient. A printed chef card naming the allergens and the need for clean equipment, plus a short script for phone and app orders, makes every order clear and makes it easier to walk away when the answers are vague.

                ## Milestones
                1. A wallet-sized chef card listing the allergens and cross-contact concerns.
                2. A three-question script for phone and delivery app orders.
                3. A household rule for when not to order: vague answers or no allergen information.
                4. Two or three local places that answered well noted for next time.

                ## Notes
                Delivery apps let you add notes, but busy kitchens may not read them. Call the restaurant directly for anything severe.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chef card and ordering script are in every adult's wallet or phone, with a written rule for when not to order."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a chef card naming each allergen and the need for clean equipment"
                - "Draft three questions to ask before any takeaway order"
                - "Agree a household rule for when not to order"
                - "Keep a list of places that answered allergen questions well"
            - name: Non-food allergen sources around the home
              description: |-
                ## Purpose
                Nuts, milk, egg and wheat turn up well outside the kitchen: peanuts in bird feed, milk in pet food, wheat in play dough, nut oils in skin creams and massage oils. Checking these once means a reaction does not start from the garden shed or the bathroom cabinet.

                ## Milestones
                1. Bathroom, garden shed, toy box and pet supplies checked against the register.
                2. Products containing an allergen replaced or moved out of reach.
                3. Bird feeders and pet bowls placed away from where children play and eat.
                4. A note added to the register on non-food products to watch.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Bathroom, garden, toy and pet products have been checked, with allergen-containing ones replaced or moved and listed in the register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check skin creams and toiletries for nut and milk ingredients"
                - "Check bird feed, pet food and garden products for allergens"
                - "Check play dough and craft supplies in the toy box"
                - "Replace or move any non-food product that contains an allergen"
            - name: Medicine and supplement ingredient check
              description: |-
                ## Purpose
                Some medicines, vitamins and supplements contain ingredients derived from common allergens, such as lactose, egg, soya or arachis (peanut) oil, listed only in the small print of the leaflet. Asking a pharmacist to check each regular product against the register, and making sure the allergy is on your pharmacy record, closes a gap many households never notice.

                ## Milestones
                1. A list of every regular medicine and supplement the allergic person takes.
                2. Each one checked by a pharmacist against the allergens in the register.
                3. The allergy recorded on both the pharmacy and doctor's records.
                4. A habit of asking the pharmacist whenever a new product is prescribed or bought.

                ## Notes
                Never stop a prescribed medicine because of an ingredient worry. Raise it with the pharmacist or prescriber first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pharmacist has checked every regular medicine and supplement against the register, and the allergy is on the pharmacy record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every regular medicine and supplement the allergic person takes"
                - "Ask the pharmacist to check each one against the register"
                - "Confirm the allergy is recorded on the pharmacy and doctor's records"
                - "Ask the pharmacist about allergens whenever a new product is started"
            - name: Grab bag of safe food for days out
              description: |-
                ## Purpose
                Days out are where hunger meets limited choice: motorway services, theme parks, sports fixtures and long hospital waits. A grab bag with safe snacks, one portable meal and wipes means nobody has to gamble on an unlabelled sandwich when plans run late.

                ## Milestones
                1. A list of shelf-stable safe snacks and one portable meal.
                2. Wipes and a water bottle for eating away from a sink.
                3. The grab bag packed and kept by the door next to the medicine kit.
                4. Used items replaced after each trip.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A grab bag with safe snacks, a portable meal and wipes sits by the door and has been restocked after each outing."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List shelf-stable safe snacks and one portable meal"
                - "Pack the grab bag with snacks, wipes and a water bottle"
                - "Keep the bag by the door beside the medicine kit"
                - "Replace what was used after each day out"
            - name: Specialist allergy referral decision
              description: |-
                ## Purpose
                Many allergies are first diagnosed by a general doctor, and not everyone is referred to a specialist clinic. Where reactions have been severe, tests are unclear, there are several allergens or you want to know whether an allergy might be outgrown, asking about a referral is reasonable, and preparing the case makes the conversation shorter.

                ## Milestones
                1. The reasons a referral might help written down from the log and register.
                2. A conversation held with your doctor about whether a referral is appropriate.
                3. The decision and its reasons recorded.
                4. The referral tracked through to an appointment date if one is made.

                ## Notes
                Allergy tests sold direct to the public, such as hair analysis or IgG panels, are not recommended by allergy bodies for diagnosis.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on specialist referral, made with your doctor, with an appointment date noted if a referral was made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why a specialist referral might help, using the log"
                - "Book an appointment with your doctor to discuss a referral"
                - "Record the decision and what it was based on"
                - "Chase the referral if no appointment arrives within eight weeks"
            - name: Nursery or school allergy handover meeting
              description: |-
                ## Purpose
                Schools and nurseries manage allergies every day, but each child's arrangements depend on what parents hand over. A meeting before the first day, with the action plan, in-date medicine, a safe treat tub and agreed rules for lunch, trips and cookery lessons, sets the year up properly.

                ## Milestones
                1. A meeting held with the class teacher, the first aid lead and the catering lead.
                2. The action plan, medicine and spare devices handed over and signed for.
                3. Rules agreed for lunch, snacks, celebrations, trips and food-based lessons.
                4. Notes of the meeting sent to everyone who attended.

                ## Notes
                Start from the **Meeting notes** template. Ask who covers when the usual staff are away or on a trip.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A handover meeting is held before term starts, with medicine signed in and written notes sent to all attendees."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the school to request an allergy handover meeting"
                - "Prepare copies of the action plan and the safe brands list"
                - "Agree rules for lunch, celebrations, trips and food lessons"
                - "Send meeting notes to everyone who attended"
                - "Book a plan review with the school before each new school year @recurring(yearly)"
            - name: Allergy-safe birthday party at home
              description: |-
                ## Purpose
                A birthday party puts a dozen children, shop-bought food and distracted adults in one room. Planning a menu that is fully safe for the allergic child, telling guests' parents in advance and naming one adult in charge of food makes the party ordinary in the best sense.

                ## Milestones
                1. A menu where every item is safe for the allergic child or guest, cake included.
                2. Invitations asking parents not to send food and mentioning the allergy briefly.
                3. One adult named as food lead for the party, holding the kit.
                4. Hand washing on arrival and before food built into the timings.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A party is held where every food served was checked against the register and a named adult held the kit throughout."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Draft a fully safe party menu including the cake"
                - "Add a short allergy note to the invitations"
                - "Name one adult as food lead who holds the kit during the party"
                - "Set up a hand washing station for arrivals and before food"
            - name: Hosting a guest with a food allergy
              description: |-
                ## Purpose
                Cooking for a friend or relative whose allergy you do not usually manage is where well-meaning hosts slip: a stock cube, a shared serving spoon, a dessert from the bakery. Asking the guest the right questions and keeping every label to show them means they can relax and eat.

                ## Milestones
                1. The guest asked directly about their allergens, trace tolerance and label rules.
                2. A menu cooked from scratch with every ingredient label kept.
                3. The guest's plate served first with clean serving spoons.
                4. Packaging kept until the guest has gone home.

                ## Notes
                Many allergic guests would rather bring their own dish. Offer that option without making it awkward.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A meal is served to an allergic guest who confirmed the menu in advance, with every ingredient label kept to show them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the guest about their allergens and how strict they need to be"
                - "Send the guest the planned menu to check"
                - "Keep every ingredient label to show the guest on arrival"
                - "Serve the guest first using clean serving spoons"
            - name: Allergy-safe festival or holiday meal
              description: |-
                ## Purpose
                Festive meals bring traditional recipes, gifted food, relatives' cooking and long buffets, all harder to control than a weeknight dinner. Agreeing the menu and who brings what weeks ahead, and labelling every dish on the table, keeps the allergic person at the centre of the celebration rather than on the edge of it.

                ## Milestones
                1. The menu agreed with every cook, with safe versions of the traditional dishes.
                2. A rule for gifted food and dishes brought by guests.
                3. Every dish on the table labelled as safe or not safe.
                4. Safe dishes served first, before serving spoons can travel.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A festive meal is held where every dish was labelled and the menu was agreed with all cooks at least a week ahead."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Share the register with everyone cooking for the festive meal"
                - "Agree the menu and safe versions of the traditional dishes"
                - "Make table labels marking each dish as safe or not safe"
                - "Serve the safe dishes first before other guests start"
            - name: Travelling abroad with a food allergy
              description: |-
                ## Purpose
                Travel adds a new language, unfamiliar ingredients, airline food policies and a health system you do not know. Preparing translated allergy cards, a doctor's letter for carrying devices, safe food for the flights and transfers and the local emergency number before you go makes the trip possible rather than a worry.

                ## Milestones
                1. Translated allergy cards for each language you will meet.
                2. A doctor's letter for carrying auto-injectors in hand luggage.
                3. The airline's allergy policy read and any requests made in writing.
                4. The local emergency number and nearest hospital noted for each stay.

                ## Notes
                Start from the **Trip** template. Carry devices in hand luggage, never in the hold, and pack enough safe food for delays.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, translated cards, a carry letter, written airline confirmation and local emergency numbers are packed and saved."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Order or make translated allergy cards for each destination language"
                - "Ask your doctor for a letter to carry auto-injectors on board"
                - "Read the airline's allergy policy and request any help in writing"
                - "Note the emergency number and nearest hospital for each stay"
            - name: First sleepover or playdate briefing
              description: |-
                ## Purpose
                The first time a child eats at someone else's house, the other parent suddenly holds a responsibility they may never have carried. A one-page briefing, a five-minute kit handover and safe food sent along make it possible for the child to go and for the host to say yes.

                ## Milestones
                1. A one-page briefing for the host parent: allergens, signs, action plan and kit.
                2. A five-minute handover showing the kit and the trainer device.
                3. Safe meals and treats sent with the child.
                4. A quick debrief with the host afterwards and notes on what worked.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A briefing sheet, kit handover and safe food are provided for a first sleepover or playdate, with a debrief noted afterwards."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page briefing for host parents"
                - "Show the host parent the kit and the trainer device"
                - "Pack safe meals and treats for the visit"
                - "Call the host afterwards and note what worked"
            - name: Briefing grandparents, sitters and carers
              description: |-
                ## Purpose
                Grandparents may remember a time when food allergies were rarer and less understood, and sitters change often. A short session in your own kitchen, covering the register, the safe shelf, label checks and the trainer device, gives every regular carer the same training and the confidence to refuse a well-meant treat.

                ## Milestones
                1. A list of every adult who regularly feeds or looks after the allergic person.
                2. A thirty-minute kitchen session held with each, including trainer practice.
                3. A printed summary left in the homes of carers who host.
                4. A yearly refresher held with each regular carer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every regular carer has had a kitchen session with trainer practice and a printed summary, refreshed within the last year."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List every adult who regularly feeds or looks after the allergic person"
                - "Run a thirty-minute kitchen session with each carer"
                - "Leave a printed summary for carers who host at their own home"
                - "Hold a refresher session with each regular carer @recurring(yearly)"
            - name: Handing allergy management to a teenager
              description: |-
                ## Purpose
                Teenagers and young adults are the group most at risk from serious reactions, often because the kit stays at home, asking questions feels awkward or they eat out with friends. Handing over label checks, ordering and carrying the kit in stages over a year or two builds the habits before they leave home.

                ## Milestones
                1. A list of skills to hand over: label checks, ordering, carrying the kit and repeat prescriptions.
                2. Each skill practised with a parent present, then alone.
                3. An agreed rule on carrying the kit and telling one friend.
                4. The teenager attending part of a clinic review on their own.

                ## Notes
                Ask the clinic about any transition support they offer for young people moving to adult services.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The teenager reads labels, orders food and carries the kit independently, and has attended part of a clinic review alone."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the allergy skills the teenager will take over"
                - "Let the teenager do the label checks on the next weekly shop"
                - "Agree a rule on carrying the kit and telling one friend"
                - "Check in with the teenager on how the handover is going @recurring(monthly:15)"
            - name: Adult-onset allergy and rebuilding your habits
              description: |-
                ## Purpose
                Allergies to shellfish, fish, nuts and some fruits can appear in adulthood, often after years of eating the food without trouble. An adult starting from scratch has to rebuild shopping, cooking, work lunches and social eating at the same time as explaining it to colleagues and friends.

                ## Milestones
                1. Your own register entry, action plan and kit in place.
                2. Your regular shop and the meals you cook checked and adjusted.
                3. Your partner, close friends and colleagues told what to do in a reaction.
                4. Your workplace's first aid and canteen arrangements checked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "An adult with a new allergy has a plan and kit in place, has briefed partner, friends and colleagues, and has checked work food arrangements."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write down the foods you used to eat that now need checking"
                - "Tell your partner and closest friends what to do in a reaction"
                - "Ask your workplace about first aid and canteen allergen information"
                - "Check your usual work lunches and snacks against your allergens"
            - name: Sharing a flat or house with an allergy
              description: |-
                ## Purpose
                Housemates and lodgers rarely plan their food around someone else's allergy, and a shared kitchen means shared toasters, shelves and washing up. Agreeing a few clear house rules in writing, early and without drama, protects the allergic person and keeps the house friendly.

                ## Milestones
                1. A short list of house rules covering shelves, equipment, washing up and guests' food.
                2. The rules talked through and agreed by every housemate.
                3. A labelled safe shelf and a few personal pieces of equipment in place.
                4. Housemates shown where the kit is and what the action plan says.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written house rules on shelves, equipment and washing up are agreed by every housemate, who also know where the kit is kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft five house rules for the shared kitchen"
                - "Talk the rules through with every housemate"
                - "Label your safe shelf and personal equipment"
                - "Show housemates where the kit and action plan are kept"
            - name: Two homes, one set of allergy rules
              description: |-
                ## Purpose
                When a child moves between two households after a separation, or spends long stretches with grandparents, small differences in shopping and rules add up quickly. The same register, safe brands list and action plan in both homes, with a kit in each, means the child is equally safe wherever they sleep.

                ## Milestones
                1. The register, safe brands list and action plan shared with the other household.
                2. A kit with in-date devices in each home, or a clear rule for moving one.
                3. A shared note for changes such as new products or a reaction.
                4. A monthly message exchanged to swap anything that has changed.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Both homes hold the same register, safe brands list and action plan, with a kit in each and a monthly update agreed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Send the register and safe brands list to the other household"
                - "Agree whether each home keeps its own kit"
                - "Set up a shared note for new products and reactions"
                - "Swap any allergy changes with the other household @recurring(monthly:28)"
            - name: Several allergies in one household
              description: |-
                ## Purpose
                When one child cannot have nuts and another cannot have milk, or an adult has a different allergy from the children, safe food for one person can be risky for another. Mapping who can eat what, and building a small set of meals safe for everyone, avoids cooking three dinners every night.

                ## Milestones
                1. A grid of each person against each allergen.
                2. A list of meals that are safe for every member at once.
                3. Name labels on stored food so each person's safe items are obvious.
                4. At least five all-safe dinners in the weekly rotation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A person-by-allergen grid exists and at least five dinners safe for every household member are in regular rotation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Draw a grid of each person against each allergen"
                - "List dinners that are safe for everyone at once"
                - "Label stored food with the names of who can eat it"
                - "Add five all-safe dinners to the weekly meal plan"
            - name: Preparing for a supervised food challenge
              description: |-
                ## Purpose
                Clinics sometimes offer a supervised food challenge to find out whether an allergy has been outgrown or to confirm a diagnosis. The day is run entirely by the clinic, but families who prepare, with the medicine pause dates followed, the right food brought if asked and a plan for a long day, are less likely to have it postponed.

                ## Milestones
                1. The clinic's instructions on medicines to pause and food to bring read and followed.
                2. The day planned: travel, time off and things to do during a long wait.
                3. The outcome and the clinic's instructions for afterwards written down.
                4. The register, action plan and safe brands list updated if the result changes anything.

                ## Notes
                Only ever reintroduce a food under the clinic's instructions, never as a home experiment.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A food challenge is attended with the clinic's preparation steps followed, and its outcome and next steps are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the clinic's challenge instructions and note the medicine pause dates"
                - "Book time off and plan travel for a full day at the clinic"
                - "Pack the food the clinic asked for and something to do"
                - "Write down the outcome and the clinic's instructions for afterwards"
            - name: Daily record during clinic-led immunotherapy
              description: |-
                ## Purpose
                Immunotherapy programmes offered by some allergy clinics involve a treatment taken every day under their instructions, often with rules about exercise, illness and timing. A simple daily record of when it was given, by whom and any symptoms makes the clinic's reviews accurate and stops two parents doubling up or missing a day.

                ## Milestones
                1. The clinic's written instructions kept with the record.
                2. A daily record with date, time, who gave it and any symptoms.
                3. The clinic's rules on exercise, illness and missed days copied to the top of the record.
                4. The record brought to every clinic review.

                ## Notes
                Start from the **Habit tracker** template. Follow the clinic's instructions exactly and call them with any question; the record supports their programme and never changes it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily record with no unexplained gaps is kept for the whole programme and brought to every clinic review."
                cadence: rolling
              tasks:
                - "Copy the clinic's rules on exercise, illness and missed days to the record"
                - "Record the day's treatment time, who gave it and any symptoms @recurring(daily)"
                - "Bring the record to each clinic review"
            - name: Allergy-aware food at a school or club event
              description: |-
                ## Purpose
                Bake sales, summer fairs, club suppers and match teas are where allergic children are most often left out or exposed. Volunteering to set up a simple system, with ingredient cards on every donated item, a clearly labelled safe table and a named contact, helps every allergic family at the event, not just yours.

                ## Milestones
                1. An ingredient card format sent to everyone donating food.
                2. A separate, labelled table for items safe for the main allergens.
                3. Volunteers briefed on handling and on keeping tongs to their own table.
                4. Feedback from allergic families gathered for the next event.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An event runs with ingredient cards on every donated item and a labelled safe table, with feedback gathered from allergic families."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Offer to set up allergy arrangements for the next school or club event"
                - "Ask the agent to draft an ingredient card for food donors"
                - "Set up a labelled safe table with its own tongs"
                - "Ask allergic families for feedback after the event"
            - name: Mentoring a newly diagnosed family
              description: |-
                ## Purpose
                Parents and adults a year or two past diagnosis carry exactly the practical knowledge a newly diagnosed household needs: which brands, which shop settings, what to say to school. Sharing your register format, safe brands list and lessons learned, through a support group or a friend of a friend, turns your experience into help for someone else.

                ## Milestones
                1. Your register format and safe brands list tidied into shareable versions.
                2. A short list of the lessons you wish you had known in month one.
                3. An offer of help made through an allergy support group, school or your own network.
                4. At least one household supported through its first month.

                ## Notes
                Share what worked for you and point them to their own clinician for anything medical. Their allergens and guidance may differ from yours.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "At least one newly diagnosed household has received your shareable templates and lessons and been supported through its first month."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Tidy your register format and safe brands list for sharing"
                - "Write the ten lessons you wish you had known in month one"
                - "Offer help through an allergy support group or your school"
                - "Check in with the household you are helping after their first month"
---

# Food Allergy Safe Kitchen

This area is for any household cooking around a food allergy, whether it belongs to a toddler, a teenager, a partner or yourself, and for the grandparents and friends who feed them. It starts with the foundations (a register, the clinician's action plan, the medicine kit, a kitchen sweep and the big decisions about what stays in the house), then the routines that keep labels, alerts and cleaning honest, the skills of reading labels and cooking without egg, milk or nuts, the improvements that close the quieter gaps, the events that need planning, the situations that change the picture, and finally the specialist and community work of an experienced allergy household.

What repeats is a Saturday allergy-checked meal plan, a Wednesday alert scan and a Sunday safe-shelf check, a kit check on the 3rd, a label re-read on the 12th, a deep clean on the 20th and a treat restock on the 22nd, quarterly trainer practice and household briefings, and the yearly clinic review and school plan update. The Purchase decision, Operational checklist, Weekly meal plan, Meeting notes, Trip and Habit tracker templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
