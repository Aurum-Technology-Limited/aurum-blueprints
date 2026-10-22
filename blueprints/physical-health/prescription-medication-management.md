---
id: physical-health.prescription-medication-management
name: Prescription Medication Management
description: "A complete medication list, refills that never run out, side effects written down, yearly pharmacist reviews and safe routines for anyone managing several prescriptions or someone else's."
category: personal
version: 1.0.0
tags: [physical-health, prescription-medication-management, everyone, retiree, carer, medication-list, repeat-prescriptions, pharmacist]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - purchase-decision
    - metrics-log
    - meeting-notes
    - operational-checklist
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Prescription Medication Management
          description: "Keeping a clear medication list, refill schedule, side effect notes and pharmacist reviews, for anyone taking regular prescriptions or managing several at once."
          projects:
            - name: Complete medication list in one place
              description: |-
                ## Purpose
                Most people taking three or more regular medicines cannot name every one with its strength and timing, and that gap is where errors start at a new clinic or an emergency department. One list holding every prescription, over-the-counter medicine, supplement and cream, with strength, instructions, reason and prescriber, becomes the single reference everything else in this area builds on.

                ## Milestones
                1. Every medicine in the house gathered in one place, including creams, drops, inhalers and supplements.
                2. A list showing name, strength, how and when it is taken, the reason and the prescriber for each.
                3. The list checked line by line against your most recent prescription or pharmacy record.
                4. Copies stored on your phone and on paper where someone else could find them.

                ## Notes
                Include the things you take only now and then, such as a painkiller for flare-ups or a cream used twice a year. Those are the entries most often missed when a clinician asks.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated medication list covering every prescription, over-the-counter product and supplement, checked against the pharmacy record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine, cream, drop and supplement onto one table"
                - "Write the name, strength and timing of each on a single list"
                - "Compare the list with your latest repeat prescription slip or app record"
                - "Save a photo of the list on your phone and file the paper copy"
            - name: Emergency medicines card for wallet and phone
              description: |-
                ## Purpose
                If you are taken ill away from home, paramedics and emergency teams look for a card in a wallet and a medical ID on a locked phone before anything else. A short summary of current medicines, allergies, conditions and an emergency contact can change what treatment is safe to give in the first hour.

                ## Milestones
                1. A wallet-sized card listing current medicines, allergies, main conditions and an emergency contact.
                2. The medical ID on your phone filled in and visible from the lock screen.
                3. Card and phone ID checked against the full medication list so they match.
                4. A household member aware of where the card is kept.

                ## Notes
                Keep the card short: names and strengths, not the whole history. Blood thinners, insulin, steroids and anything your clinic gave you an alert card for matter most.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wallet card and a lock-screen medical ID that both match the current medication list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Fill in the medical ID section on your phone and allow lock-screen access"
                - "Write or print a wallet card from your full medication list"
                - "Show a household member where the card and phone ID live"
                - "Refresh the card and phone ID after the annual medication review @recurring(yearly)"
            - name: Choosing one regular pharmacy
              description: |-
                ## Purpose
                When prescriptions are filled at whichever pharmacy is nearest that day, no single pharmacist sees everything you take, and interaction checks only cover what that branch has on file. Settling on one pharmacy, chosen for opening hours, stock reliability and delivery, means one team holds your full record and gets to know you.

                ## Milestones
                1. Two or three local or online pharmacies compared on hours, delivery, stock and a private consultation room.
                2. One pharmacy chosen and nominated for your electronic prescriptions where your system allows.
                3. The pharmacy's phone number and opening hours saved in your phone.
                4. Your full medication list on file with the chosen pharmacist.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One pharmacy chosen and nominated for your prescriptions, with its contact details saved and your list on its file."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the pharmacies within reach and their opening hours"
                - "Ask each whether they deliver and how they handle out-of-stock items"
                - "Nominate your chosen pharmacy with your surgery or prescriber"
                - "Hand the pharmacist a copy of your full medication list"
            - name: Allergy and adverse reaction record
              description: |-
                ## Purpose
                A vague note of a penicillin allergy from childhood can stop you being given the best antibiotic for decades, while a genuine reaction left off your record can be repeated. Writing down each reaction, what happened, when and how it was confirmed lets your doctor label it correctly as an allergy, an intolerance or a side effect.

                ## Milestones
                1. Every past reaction to a medicine listed with the drug, the year and what happened.
                2. Each one marked as confirmed, suspected or unknown.
                3. The record compared with the allergies your GP or main clinician holds.
                4. The record copied onto your emergency card and medication list.

                ## Notes
                Ask whether an old, uncertain allergy label is worth testing. Some people find a childhood label no longer applies, but that decision belongs to your clinician.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of every known medicine reaction, each marked confirmed or suspected, matching the record your clinician holds."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down every reaction to a medicine you can remember"
                - "Ask a parent or older relative about reactions from childhood"
                - "Ask your practice to read back the allergies on your record"
                - "Correct any mismatch with your clinician and update your card"
            - name: Repeat prescription ordering set-up
              description: |-
                ## Purpose
                Running out of a regular medicine usually happens because ordering depends on noticing the last strip, and the turnaround from request to collection can take three to five working days. Setting up online or app ordering, linked to your nominated pharmacy, turns a recurring scramble into a two-minute task.

                ## Milestones
                1. Online or app repeat ordering through your surgery or prescriber working.
                2. Every regular medicine visible on the repeat list, with any missing ones queried.
                3. The usual turnaround from order to collection known and written down.
                4. A first repeat ordered and collected through the new route.

                ## Notes
                If a medicine you take every day is missing from the repeat list, it may be set up as a one-off. Ask the practice to review it rather than requesting it separately each time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regular medicine is orderable online or by app, and one full repeat has been ordered and collected that way."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Register for online repeat ordering with your surgery or prescriber"
                - "Check every regular medicine appears on the repeat list"
                - "Ask the pharmacy how many working days a repeat usually takes"
                - "Place your first repeat order through the new system"
            - name: Daily dose timetable by time of day
              description: |-
                ## Purpose
                Sorted by drug name, a list is hard to follow at seven in the morning; a timetable sorted by time of day is what you actually use. Laying out each dose time with what to take, whether with food or on an empty stomach, and anything that must be spaced apart makes the routine easy to follow and easy to hand to someone else.

                ## Milestones
                1. A grid with your dose times down the side and the medicines in each slot.
                2. Food, water and spacing instructions copied from each label onto the grid.
                3. Any slot that looks crowded or awkward flagged for the pharmacist.
                4. The timetable posted wherever the medicines are kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A printed timetable showing every dose time, the medicines taken then and their food or spacing rules, checked by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort your medicines by the time of day you take them"
                - "Copy the food and spacing instructions from each label"
                - "Ask the pharmacist to check the timetable for clashes"
                - "Put a printed copy beside where the medicines live"
            - name: Home medicine storage set-up
              description: |-
                ## Purpose
                Bathrooms are often the worst place for medicines because steam and heat degrade tablets, and many households keep strong painkillers within reach of children or visitors. Choosing one cool, dry, lockable spot, plus a fridge shelf for anything that needs it, protects both the medicines and the people around them.

                ## Milestones
                1. One cool, dry storage place chosen, out of sight and reach of children.
                2. Medicines that need refrigeration on their own labelled shelf, away from the freezer compartment.
                3. Strong painkillers and anything open to misuse kept in a locked box.
                4. Everyone in the household aware of where medicines are and which are off limits.

                ## Notes
                Check each label for storage instructions. Some eye drops, insulin pens and liquid antibiotics carry a use-by date counted from the day they are opened.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All medicines kept in one cool, dry place with strong painkillers locked away and fridge items on a labelled shelf."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Move medicines out of the bathroom to a cool, dry cupboard"
                - "Buy or reuse a lockable box for strong painkillers"
                - "Label a fridge shelf for refrigerated medicines"
                - "Tell the household where medicines are kept and what is off limits"
            - name: Expired and unused medicine clear-out
              description: |-
                ## Purpose
                Most homes hold bags of stopped medicines, out-of-date painkillers and half-used antibiotics, which clutter the cupboard and make it easy to take the wrong thing. One clear-out, with everything unwanted returned to a pharmacy for safe disposal rather than the bin or the toilet, leaves only what is current.

                ## Milestones
                1. Every medicine in the house checked against the current list and its expiry date.
                2. Stopped, expired and duplicate items bagged separately.
                3. The bag returned to a pharmacy for disposal.
                4. Only current medicines left in the storage spot.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every medicine left in the house is on the current list and in date, and the rest has gone back to a pharmacy."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Empty the medicine cupboard and drawers onto a table"
                - "Bag anything expired, stopped or missing from your current list"
                - "Return the bag to the pharmacy for safe disposal"
                - "Put back only the medicines that appear on your current list"
            - name: Pill organiser or blister pack decision
              description: |-
                ## Purpose
                Once you take more than a few tablets at different times, a weekly organiser or pharmacy-filled blister packs can stop doses being doubled or missed. Each option has trade-offs: organisers need a weekly fill and cannot hold some medicines, while pharmacy packs are not offered for every medicine or every patient.

                ## Milestones
                1. Your pharmacist asked which of your medicines can and cannot go in an organiser or pack.
                2. Two or three organiser styles compared on compartments, size and how easily the lids open.
                3. A choice made between a self-filled organiser, pharmacy packs or neither.
                4. The chosen system in use for at least two weeks.

                ## Notes
                Start from the **Purchase decision** template. Some tablets must stay in their foil until taken because they absorb moisture; the pharmacist will know which.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on organiser, pharmacy packs or neither, with the chosen system used for two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the pharmacist which medicines are unsuitable for an organiser"
                - "Compare organisers with four daily compartments and easy-open lids"
                - "Decide between a self-filled organiser and pharmacy packs"
                - "Use the chosen system for two weeks and note any problems"
            - name: Prescription costs and exemption check
              description: |-
                ## Purpose
                Paying per item for several regular prescriptions adds up fast, and many people never check whether they qualify for an exemption, a prepayment scheme, a cheaper tier on their insurance formulary or a longer supply. A one-off comparison of what you pay against what the schemes in your country offer often saves a noticeable sum each year.

                ## Milestones
                1. A year's spend on prescriptions totalled from receipts or statements.
                2. The exemptions, prepayment options or insurance formulary rules that apply where you live listed.
                3. A decision made on the cheapest legitimate way to pay.
                4. Any certificate, card or plan change applied for and confirmed.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Last year's prescription spend is totalled and the cheapest available payment route has been chosen and applied for."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Add up last year's prescription costs from receipts or statements"
                - "Look up the exemption and prepayment rules where you live"
                - "Ask the pharmacist whether a cheaper equivalent is available"
                - "Renew your prepayment certificate or plan before it lapses @recurring(yearly)"
            - name: Daily medicine routine anchored to habits
              description: |-
                ## Purpose
                Missed doses are rarely about forgetting the medicine exists; they happen when the dose time is not tied to anything that reliably happens. Linking each dose to a fixed daily cue such as the kettle, breakfast or brushing your teeth, and ticking it off, makes taking medicines as automatic as those habits.

                ## Milestones
                1. Each dose time linked to a specific daily cue.
                2. Medicines kept where that cue happens, still out of children's reach.
                3. A daily tick list or app record in use.
                4. Four weeks of records with missed doses counted.

                ## Notes
                Start from the **Habit tracker** template. Weekends and holidays break cues most often, so pick a backup cue for those days.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of daily dose records with fewer than two missed doses a month."
                cadence: rolling
              tasks:
                - "Pick one daily cue for each of your dose times"
                - "Move each day's medicines to where that cue happens"
                - "Tick off each dose as you take it @recurring(daily)"
                - "Note which cue failed whenever a dose is missed"
            - name: Weekly pill organiser fill
              description: |-
                ## Purpose
                Weekly organisers only prevent errors if they are filled carefully at the same time each week, from the current list rather than memory. A fixed, unhurried slot with the list in front of you, plus a check that supplies will last the coming week, catches most mistakes before they reach a dose.

                ## Milestones
                1. A fixed weekly time for filling the organiser.
                2. The current printed list used at every fill, never memory.
                3. A second look at each filled week before the lid closes.
                4. Low supplies spotted at filling time and reordered.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The organiser is filled from the printed list every week for two months with no compartment errors found."
                cadence: rolling
              tasks:
                - "Fill next week's organiser from the printed list @recurring(weekly:sun)"
                - "Check each compartment against the list before closing it"
                - "Note any medicine with fewer than ten days left"
                - "Return the filled organiser to its usual place"
            - name: Refill calendar so nothing runs out
              description: |-
                ## Purpose
                Medicines dispensed in different quantities run out on different dates, so ordering whatever looks low tends to fail on the one item you did not check. A calendar showing when each supply ends, with an ordering reminder ten working days earlier, keeps every item flowing.

                ## Milestones
                1. Each regular medicine's supply length and last dispensing date written down.
                2. Run-out dates calculated and entered on a calendar.
                3. A reminder set to order each item ten working days before it runs out.
                4. Three months with no item running out.

                ## Notes
                Ask whether all items can be synchronised to the same supply length so they fall due together. Pharmacists can often help line them up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A refill calendar with every medicine's run-out date, and three consecutive months with no item running out."
                cadence: rolling
              tasks:
                - "Write down the last dispensing date and quantity for each medicine"
                - "Enter each run-out date on your calendar"
                - "Check the refill calendar and order anything due in the next five weeks @recurring(monthly:3)"
                - "Ask the pharmacist about lining up all supply dates"
            - name: Keeping the medication list current
              description: |-
                ## Purpose
                Medication lists go out of date the first time a dose changes at an appointment, and an old list is more dangerous than none because people trust it. Updating it on the day anything changes, and checking it each quarter against the pharmacy record, keeps it worth handing over.

                ## Milestones
                1. A habit of updating the list on the day of any change.
                2. The date of the last update shown at the top of the list.
                3. A quarterly check against the pharmacy or surgery record.
                4. Old versions removed from phone, wallet and fridge.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The list shows an update date within the last three months and matches the pharmacy record at each quarterly check."
                cadence: rolling
              tasks:
                - "Add a last updated date to the top of the list"
                - "Update the list before leaving any appointment that changes a medicine"
                - "Check the list against the pharmacy record @recurring(quarterly)"
                - "Replace the wallet and fridge copies whenever the list changes"
            - name: Annual medication review with a pharmacist or doctor
              description: |-
                ## Purpose
                Medicines started years ago for one reason may no longer be needed, may now interact with something newer, or may have a better alternative. A structured yearly review, with every medicine brought along and your questions written in advance, is the main chance to stop, change or confirm each one.

                ## Milestones
                1. A review booked with a pharmacist or prescriber each year.
                2. Every medicine, including over-the-counter items, brought to the appointment.
                3. Questions written in advance about side effects, need and cost.
                4. Decisions from the review recorded and the list updated the same day.

                ## Notes
                Start from the **Meeting notes** template. Bringing the actual boxes, not just the list, catches duplicates and old supplies the list misses.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A medication review held within the last twelve months, with its decisions written down and reflected on the list."
                cadence: cyclic
              tasks:
                - "Book your yearly medication review @recurring(yearly)"
                - "Write three questions about the medicines that bother you most"
                - "Pack every medicine into a bag to bring to the review"
                - "Record each decision and update your list that day"
            - name: Monitoring tests your medicines need
              description: |-
                ## Purpose
                Some medicines need regular blood tests, blood pressure checks or eye checks to confirm they are working and not affecting the kidneys, liver or blood count. Knowing which tests each medicine needs and how often, and booking them before the repeat falls due, prevents a prescription being held back for an overdue test.

                ## Milestones
                1. Each medicine's monitoring requirements confirmed with the prescriber or pharmacist.
                2. A list of tests, their intervals and when each is next due.
                3. Tests booked ahead of the repeat that depends on them.
                4. Any change made after a result written onto the medication list.

                ## Notes
                Keep the results themselves with your other medical records; this project is about the schedule that keeps prescriptions flowing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A schedule of every medicine-related monitoring test with no test overdue at any quarterly check."
                cadence: cyclic
              tasks:
                - "Ask the pharmacist which of your medicines need regular monitoring"
                - "List each test with its interval and next due date"
                - "Check which monitoring tests fall due in the next three months @recurring(quarterly)"
                - "Book the next test before ordering the repeat that depends on it"
            - name: Side effect notes log
              description: |-
                ## Purpose
                Side effects are easy to dismiss in the moment and hard to describe weeks later, which is why many go unmentioned until someone quietly stops taking the medicine. A short dated note each time something odd happens, with the medicine, the symptom and how long it lasted, gives the prescriber evidence instead of a vague impression.

                ## Milestones
                1. A log with date, medicine, symptom, severity and duration columns.
                2. Entries made on the day symptoms appear.
                3. A monthly read-through for patterns.
                4. Anything persistent or worrying raised with the prescriber or pharmacist.

                ## Notes
                Start from the **Metrics log** template. Speak to the prescriber or pharmacist before stopping a medicine because of a side effect, since some must be reduced gradually.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A side effect log with dated entries, read monthly, and every repeated symptom raised with a pharmacist or prescriber."
                cadence: rolling
              tasks:
                - "Set up a side effect log on your phone or in a notebook"
                - "Write a dated entry whenever a new symptom appears"
                - "Read through the side effect log for patterns @recurring(monthly:12)"
                - "Take any symptom that keeps returning to the pharmacist"
            - name: Missed dose plan for each medicine
              description: |-
                ## Purpose
                The right thing to do after a missed dose varies a lot between medicines: for some you take it when you remember, for others you skip it, and for a few you call for advice. Finding the answer once and writing it beside each medicine avoids guessing, doubling up or panicking at the wrong moment.

                ## Milestones
                1. The missed dose instruction for each medicine found in its leaflet or from the pharmacist.
                2. That instruction written beside each entry on the medication list.
                3. Any medicine where a missed dose needs prompt advice clearly marked.
                4. Missed doses and their causes reviewed each month.

                ## Notes
                Most leaflets say not to take a double dose to catch up. Check what yours says rather than assuming.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every medicine on the list has its missed dose rule written beside it, and missed doses are reviewed monthly."
                cadence: rolling
              tasks:
                - "Read the missed dose section of each patient leaflet"
                - "Ask the pharmacist about any medicine where the leaflet is unclear"
                - "Add the missed dose rule beside each medicine on the list"
                - "Review the month's missed doses and what caused them @recurring(monthly:26)"
            - name: Checking new over-the-counter products before buying
              description: |-
                ## Purpose
                Cold remedies, painkillers, antacids and herbal products can interact with prescriptions or duplicate an ingredient you already take, and they are bought without anyone checking. Making it a rule to show your list to the pharmacist before buying anything new closes the gap between the shop shelf and your prescription record.

                ## Milestones
                1. A personal rule to ask before buying any new product.
                2. Your medication list easy to show on your phone at the counter.
                3. Product types to check first written at the bottom of the list.
                4. Every supplement and remedy you take added to the list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every supplement and remedy you take is on the list, and no new product has been bought in three months without a pharmacist check."
                cadence: rolling
              tasks:
                - "Ask the pharmacist which common remedies to check with them first"
                - "Write those product types at the bottom of your list"
                - "Add every supplement and herbal product you take to the list"
                - "Show your list at the counter before buying anything new"
            - name: Quarterly medicine cupboard sweep
              description: |-
                ## Purpose
                Expiry dates, opened eye drops, near-empty inhalers and creams past their open-by date pile up between reviews. A short quarterly sweep, using the same checklist each time, keeps the cupboard matching the list and the everyday supplies usable.

                ## Milestones
                1. A checklist covering expiry dates, opening dates, inhaler counters and fridge items.
                2. Each quarter's sweep done in under thirty minutes.
                3. Unwanted items returned to the pharmacy after each sweep.
                4. Cupboard contents matching the current list.

                ## Notes
                Start from the **Operational checklist** template. Write the date of opening on eye drops, liquids and creams with a marker as soon as you open them.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly sweeps completed in a year, with no expired item found in the cupboard at the following sweep."
                cadence: rolling
              tasks:
                - "Write a sweep checklist covering expiry, opening dates and counters"
                - "Sweep the medicine cupboard using the checklist @recurring(quarterly)"
                - "Drop anything out of date at the pharmacy for disposal"
                - "Mark opening dates on any eye drops, liquids or creams in use"
            - name: Reading a prescription label and patient leaflet
              description: |-
                ## Purpose
                Dispensing labels and leaflets hold the answers to most everyday questions, about food, alcohol, driving and missed doses, but the layout is dense and the important warnings are easy to skip. Working through one leaflet slowly teaches you where each type of information sits in all the others.

                ## Milestones
                1. Every part of a dispensing label understood, including the warning lines.
                2. The leaflet sections on use, missed doses, side effects and storage located.
                3. Common side effects told apart from those that need urgent help.
                4. Two questions about anything unclear answered by the pharmacist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can point to the missed dose, side effect and storage sections of any of your leaflets and explain each label warning."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick one regular medicine and lay out its label and leaflet"
                - "Highlight the sections on missed doses, side effects and storage"
                - "Look up the meaning of each warning line on the label"
                - "Ask the pharmacist about anything still unclear"
            - name: Questions to ask when a new medicine is started
              description: |-
                ## Purpose
                Appointments that start a new medicine are short, and people often leave without knowing how long to take it, what to watch for or when it should start working. A written question list kept on your phone makes sure each new prescription comes with the answers you need.

                ## Milestones
                1. A list of standard questions saved on your phone.
                2. Questions covering purpose, duration, side effects, interactions and when it should help.
                3. The list used at the next appointment that starts or changes a medicine.
                4. The answers written beside that medicine on your list.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A saved question list used at the next new prescription, with the answers recorded on the medication list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the six questions you want answered for every new medicine"
                - "Save the list where you can reach it during an appointment"
                - "Ask the agent to turn your appointment notes into a short note per medicine"
                - "Add the answers to your medication list after the appointment"
            - name: Understanding generic and brand switches
              description: |-
                ## Purpose
                A box that looks different from last month can mean a different manufacturer of the same medicine, which is usually routine, but it can also be a dispensing error. Knowing how generic names, brand names and manufacturers relate, and which medicines your prescriber wants kept on one brand, lets you tell a normal switch from a mistake.

                ## Milestones
                1. The generic name of every medicine on your list recorded beside any brand name.
                2. Medicines your prescriber wants kept on one brand marked on the list.
                3. A habit of checking the name and strength whenever a box looks different.
                4. A known route for querying an unexpected switch with the pharmacy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every medicine on the list shows its generic name, with any must-stay-on-brand items clearly marked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add the generic name beside each brand on your list"
                - "Ask the prescriber whether any medicine should stay on one brand"
                - "Check the name and strength whenever a box looks different"
                - "Ask the pharmacy to explain any switch you were not expecting"
            - name: Food, alcohol and timing interactions
              description: |-
                ## Purpose
                Some medicines are affected by grapefruit, dairy, alcohol or being taken with or without food, and the instruction is often buried in a leaflet you read once. Collecting the food and drink cautions for everything you take into one note means meals, drinks and social events no longer need a leaflet check.

                ## Milestones
                1. Food and drink cautions found for every medicine on your list.
                2. The cautions that matter most confirmed with the pharmacist.
                3. A one-page note of what applies to you and to which medicine.
                4. The note shared with whoever cooks or shops in your household.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note of food and drink cautions for every current medicine, confirmed by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search each leaflet for food, drink and alcohol cautions"
                - "Ask the pharmacist to confirm the ones that matter most"
                - "Write one page listing what to avoid or time apart"
                - "Share the page with whoever cooks or shops at home"
            - name: Device technique check for inhalers, drops and pens
              description: |-
                ## Purpose
                Inhalers, eye drops, nasal sprays and injection pens only work as well as the technique behind them, and checks in clinics regularly find users making at least one error that cuts the dose. Having a pharmacist or nurse watch you use each device, then practising the corrections, gets the full dose where it is meant to go.

                ## Milestones
                1. Every device you use listed.
                2. Your technique watched by a pharmacist or nurse for each device.
                3. Corrections written down and practised for two weeks.
                4. A yearly recheck in place.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pharmacist or nurse has watched and signed off your technique on every device you use within the last year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every inhaler, drop, spray and pen you use"
                - "Book a technique check with the pharmacist"
                - "Practise the corrections each day for two weeks"
                - "Ask for a device technique recheck at the pharmacy @recurring(yearly)"
            - name: Recognising a serious reaction and getting help
              description: |-
                ## Purpose
                Most side effects are mild, but a few, such as swelling of the face or throat, a spreading rash or sudden breathlessness after a new medicine, need urgent help. Knowing the warning signs listed for your own medicines and the number to call means acting in minutes instead of waiting to see.

                ## Milestones
                1. The urgent warning signs from each leaflet copied onto one page.
                2. The emergency number and out-of-hours advice line saved in your phone.
                3. Household members able to describe the signs on the page.
                4. The page kept beside the medicines.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page list of urgent warning signs for your medicines is posted by the medicine cupboard and household members have read it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the urgent warning signs from each leaflet onto one page"
                - "Save the emergency and out-of-hours advice numbers in your phone"
                - "Walk household members through the signs on the page"
                - "Pin the page where the medicines are kept"
            - name: Liquid doses and splitting tablets safely
              description: |-
                ## Purpose
                Measuring liquids with a kitchen spoon or cutting tablets with a knife gives uneven doses, and some tablets must never be split or crushed. Learning which of your medicines can be divided, and using the right syringe or cutter, keeps each dose the size it is meant to be.

                ## Milestones
                1. Each tablet you divide checked with the pharmacist for whether splitting is allowed.
                2. An oral syringe or measuring cup used for every liquid, never a kitchen spoon.
                3. A tablet cutter in use wherever splitting is allowed.
                4. Any medicine that is hard to swallow raised for a different form.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every divided tablet has a pharmacist's confirmation that splitting is allowed, and every liquid is measured with an oral syringe or cup."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the pharmacist which of your tablets can be split or crushed"
                - "Get an oral syringe for each liquid medicine"
                - "Buy a tablet cutter if splitting is allowed"
                - "Ask about liquid or smaller forms for anything hard to swallow"
            - name: Simplifying a crowded daily schedule
              description: |-
                ## Purpose
                Four dose times a day is hard to keep up for years, and every extra time slot raises the chance of a missed dose. Asking whether any medicine comes in a once-daily form, or can move to an existing slot, often cuts the day to one or two dose times without changing what you take.

                ## Milestones
                1. Your current number of daily dose times counted.
                2. Medicines that could move slot or change form identified with the pharmacist.
                3. Proposed changes agreed or declined by the prescriber.
                4. A new timetable in use with fewer dose times.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The prescriber has decided on each proposed timing change, and the daily timetable reflects the result."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how many separate times a day you take medicines"
                - "Ask the pharmacist which could change form or timing"
                - "Take the suggestions to your prescriber for a decision"
                - "Rewrite the daily timetable after any agreed change"
            - name: Asking whether a medicine is still needed
              description: |-
                ## Purpose
                Starting a medicine is easy and stopping one rarely happens, so people in their sixties and beyond often carry prescriptions whose original reason has passed. Raising each one deliberately with your clinician sometimes leads to stopping or reducing it under supervision, with fewer side effects and less to manage.

                ## Milestones
                1. Each medicine marked with when and why it was started.
                2. Those with an unclear or past reason listed for discussion.
                3. A conversation held with the prescriber about each listed medicine.
                4. Any change made under a written plan with a follow-up date.

                ## Notes
                Some medicines must be reduced slowly. Never stop one on your own because it seems unnecessary; the point of this project is the conversation.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every medicine with an unclear reason has been discussed with the prescriber and a keep, reduce or stop decision recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each medicine with when it was started and why"
                - "Circle any whose reason you are unsure still applies"
                - "Book an appointment to discuss the circled medicines"
                - "Write down any reduction plan and its follow-up date"
            - name: Longer supply intervals for stable medicines
              description: |-
                ## Purpose
                Ordering every 28 days means thirteen trips to the pharmacy a year for each item. For medicines that have been unchanged for a long time, asking whether a longer supply is allowed where you live can halve the ordering and collecting, and sometimes the cost.

                ## Milestones
                1. Medicines unchanged for a year or more identified.
                2. The prescriber asked whether longer supplies are possible for them.
                3. A decision recorded for each medicine.
                4. The refill calendar updated to the new intervals.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on supply length for every stable medicine, reflected in the refill calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark medicines unchanged for at least a year"
                - "Ask the prescriber whether longer supplies are allowed for them"
                - "Record the answer for each medicine"
                - "Update the refill calendar to any new supply length"
            - name: Choosing a medicine reminder method
              description: |-
                ## Purpose
                Phone alarms, reminder apps, smart dispensers and paper charts all work for someone, and the wrong one gets ignored within a fortnight. Trying two methods for two weeks each, and counting missed doses, shows which one actually suits your day.

                ## Milestones
                1. Two reminder methods chosen to trial.
                2. Each trialled for two weeks with missed doses counted.
                3. The better method kept and the other dropped.
                4. A backup reminder set for days when the routine breaks.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two reminder methods trialled for two weeks each, with the one that had fewer missed doses kept."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Pick two reminder methods to compare"
                - "Use the first for two weeks and count missed doses"
                - "Use the second for two weeks and count again"
                - "Keep the method with fewer misses and set a backup"
            - name: Prescription delivery or collection decision
              description: |-
                ## Purpose
                Collecting in person suits some people and costs others an hour each month, especially those who do not drive or who work office hours. Comparing pharmacy delivery, online pharmacies, collection lockers and a household member collecting shows which route is most reliable for your situation.

                ## Milestones
                1. The current time and cost of collecting each month estimated.
                2. Delivery, locker and online options available to you listed.
                3. One main route chosen, with a backup.
                4. Delivery address, time window or locker access set up.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A main and a backup route for getting prescriptions chosen and set up, with the first delivery or collection done."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Work out how long each collection trip takes you"
                - "Ask the pharmacy about delivery and collection lockers"
                - "Choose a main route and a backup"
                - "Set up the delivery or locker details"
            - name: Plan for when a medicine is out of stock
              description: |-
                ## Purpose
                Supply shortages now affect a steady stream of everyday medicines, and finding out at the counter on the last day leaves no time to arrange an alternative. Knowing in advance who to ask, how far ahead to order and what options the pharmacist has turns a shortage into an inconvenience rather than a gap in treatment.

                ## Milestones
                1. Medicines you take that have had recent shortages identified with the pharmacist.
                2. A buffer of a few days built into ordering for those items.
                3. The steps for an out-of-stock item written down: other branches, other strengths, prescriber contact.
                4. Your prescriber's preferred alternative noted for any medicine at risk.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written shortage plan naming at-risk medicines, an ordering buffer and a prescriber-approved alternative for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the pharmacist which of your medicines have had shortages"
                - "Order those items a few days earlier than the rest"
                - "Write down who to call if an item is out of stock"
                - "Ask the prescriber for a preferred alternative in advance"
            - name: Coordinating several prescribers
              description: |-
                ## Purpose
                When a GP, two hospital specialists and a dentist all prescribe, each tends to see only their own part, and changes made in clinic letters can take weeks to reach the others. Agreeing one keeper of the full list and sending each prescriber an updated copy after changes stops medicines being duplicated or contradicted.

                ## Milestones
                1. Every person who prescribes for you listed with contact details.
                2. One clinician or pharmacist agreed as keeper of the full list.
                3. An updated list sent to each prescriber after any change.
                4. Conflicting instructions between prescribers raised and resolved.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A named keeper of your full list, and every prescriber holding the current version after the latest change."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who prescribes for you and how to reach them"
                - "Ask your GP or pharmacist to act as keeper of the full list"
                - "Send the updated list to each prescriber after any change"
                - "Raise any conflicting instruction with the list keeper"
            - name: Hospital admission medicines bag
              description: |-
                ## Purpose
                In an unplanned admission, ward staff need to know exactly what you take within hours, and your own medicines brought in can bridge the gap until the hospital pharmacy supplies them. A ready bag holding the list, a few days of each medicine in original packaging and the emergency card can be grabbed by anyone.

                ## Milestones
                1. A labelled bag holding the current list and emergency card.
                2. A few days' supply of each regular medicine in its original box.
                3. The bag's location known to household members.
                4. The bag checked whenever the list changes.

                ## Notes
                Original packaging matters because ward staff need the dispensing label to confirm what each item is.
              priority: high
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A packed bag with the current list and a few days of every regular medicine, its location known to the household."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Pack a labelled bag with your list and emergency card"
                - "Add a few days of each regular medicine in original boxes"
                - "Tell household members where the bag is kept"
                - "Swap the contents whenever a medicine changes"
            - name: Medicines check after hospital discharge
              description: |-
                ## Purpose
                Hospital stays often start, stop or change medicines, and discharge summaries do not always reach the surgery or pharmacy before the next repeat is ordered. Checking the discharge list against what is at home within a few days catches the old supplies, duplicates and changed doses that cause harm in the weeks after discharge.

                ## Milestones
                1. The discharge medicines list compared line by line with the home list.
                2. Every change understood: what started, stopped or changed and why.
                3. Stopped medicines removed from the cupboard and the repeat list.
                4. The surgery and pharmacy confirmed to hold the new list.

                ## Notes
                Many pharmacies offer a medicines check after a hospital stay. Ask on your first visit after coming home.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Within a week of discharge, the home list, the repeat list and the cupboard all match the discharge medicines list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay the discharge list beside your home medication list"
                - "Mark every medicine that was started, stopped or changed"
                - "Ask the pharmacy for a medicines check after discharge"
                - "Confirm the surgery has updated the repeat list"
            - name: First eight weeks on a new long-term medicine
              description: |-
                ## Purpose
                Many side effects appear in the first weeks and then settle, and many long-term medicines take weeks before any benefit shows, so the start is when people most often give up. Planning the first eight weeks, with notes on what to expect and a follow-up booked, gives the medicine a fair trial and you a clear point to raise problems.

                ## Milestones
                1. What to expect in weeks one to eight written down from the prescriber or leaflet.
                2. A short weekly note on effects and side effects.
                3. A follow-up at about four to eight weeks booked or agreed.
                4. A decision recorded at the follow-up: continue, adjust or change.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Eight weekly notes on a new medicine and a recorded continue, adjust or change decision from the follow-up."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask when the new medicine should start to help"
                - "Write a short note on effects and side effects each week"
                - "Book the follow-up appointment before the first supply runs out"
                - "Record the follow-up decision on your medication list"
            - name: Moving pharmacy or surgery after a house move
              description: |-
                ## Purpose
                Moving house is a common time for supplies to run out, because repeats are still tied to the old surgery and pharmacy. Registering with the new practice and moving the pharmacy nomination around the move, with extra supply in hand, keeps treatment unbroken.

                ## Milestones
                1. A new surgery and pharmacy chosen near the new address.
                2. Registration and pharmacy nomination done before or in the first week of the move.
                3. At least two weeks of each medicine in hand on moving day.
                4. The first repeat from the new pharmacy collected without a gap.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Registered with a new surgery and pharmacy and the first repeat collected there with no day missed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a surgery and pharmacy near the new address"
                - "Register and move your pharmacy nomination"
                - "Order an extra repeat before moving day"
                - "Check the first repeat at the new pharmacy arrives on time"
            - name: Public holiday and pharmacy closure cover
              description: |-
                ## Purpose
                Pharmacies and surgeries close or cut hours over long public holidays, and repeat requests queue up in the days before. Ordering two weeks earlier than usual ahead of each long holiday period, and knowing which pharmacy opens on the day itself, avoids the most common run-out of the year.

                ## Milestones
                1. The long public holiday periods where you live listed.
                2. Repeats ordered two weeks early before each one.
                3. The nearest pharmacy open on public holidays identified.
                4. A full year of holidays passed with no run-outs.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every long public holiday in a year passes without any medicine running out."
                cadence: cyclic
              tasks:
                - "List the long public holiday periods in your calendar"
                - "Set a reminder to order repeats two weeks before each one"
                - "Find which local pharmacy opens on public holidays"
                - "Check supplies a week before each holiday period"
            - name: Managing a parent's medicines from a distance
              description: |-
                ## Purpose
                Adult children often discover a parent's medicines are muddled only when something goes wrong: unopened boxes, doubled doses, lapsed repeats. Agreeing with your parent what help they want, and setting up a shared copy of the list, a pharmacy contact and a weekly call, lets you support them from miles away without taking over.

                ## Milestones
                1. Your parent's agreement on what help they want and what they will keep doing themselves.
                2. A shared copy of their current medication list.
                3. Their pharmacy's consent arrangements for speaking to you in place, where needed.
                4. A weekly call covering supplies and any problems.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shared, current copy of your parent's list and a weekly medicines call held for two months running."
                cadence: rolling
              tasks:
                - "Ask your parent what help with medicines they would welcome"
                - "Get a copy of their current list and their pharmacy's number"
                - "Ask the pharmacy what consent they need to discuss your parent's medicines"
                - "Run a short call about supplies and side effects @recurring(weekly:wed)"
            - name: Medicines chart for a shared-care household
              description: |-
                ## Purpose
                When two or three people share caring for someone, doses get given twice or not at all because each assumes another has done it. A simple chart beside the medicines, initialled at each dose, gives everyone the same picture and a record to show the pharmacist or nurse.

                ## Milestones
                1. A chart listing each medicine and dose time with space for initials.
                2. Every carer shown how to use it.
                3. The chart initialled at every dose for a full month.
                4. Gaps or doubles reviewed weekly and the cause fixed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A month of fully initialled dose charts with every gap or double reviewed and explained."
                cadence: rolling
              tasks:
                - "Draw up a chart with each dose time and space for initials"
                - "Show every carer how to initial the chart"
                - "Review the week's chart for gaps or doubles @recurring(weekly:fri)"
                - "Raise any repeated gap with the person's pharmacist"
            - name: Whole-set medicines review in later life
              description: |-
                ## Purpose
                Past about seventy, many people take ten or more medicines, and the combination raises the risk of falls, confusion and interactions more than any one drug alone. Asking specifically for a review of the whole set, including medicines that can cause dizziness or drowsiness, puts the overall picture in front of one clinician.

                ## Milestones
                1. A count of all regular medicines, including those bought in shops.
                2. Any falls, dizziness, confusion or drowsiness in the last year noted.
                3. A whole-set medicines review requested from the GP or pharmacist.
                4. Agreed changes written down with follow-up dates.

                ## Notes
                Ask the clinician to look at the medicines together, not one at a time. That is where combined effects show up.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A whole-set review held with notes on falls and dizziness, and each agreed change written down with a follow-up date."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count every regular medicine you take, including shop-bought ones"
                - "Note any falls, dizzy spells or confusion in the past year"
                - "Request a whole-set medicines review and bring those notes"
                - "Write down each agreed change and its follow-up date"
            - name: Medicine safety when memory is changing
              description: |-
                ## Purpose
                Memory changes make self-managed medicines risky long before anyone says so, often shown by full organiser compartments or repeated ordering. Setting up supervision, a locked spare supply and an automatic dispenser or prompts, agreed with the person and their clinician, helps them keep taking medicines safely at home for longer.

                ## Milestones
                1. Signs of missed or doubled doses noted over two weeks.
                2. The person and their clinician involved in deciding the level of support.
                3. Spare supplies locked away, with only the day's doses accessible.
                4. An automatic dispenser, prompt calls or carer visits in place.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A support arrangement agreed with the person and their clinician, with spares locked away and daily doses confirmed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the organiser for untaken doses over two weeks"
                - "Discuss what you found with the person and their clinician"
                - "Lock away spare supplies and leave out only the day's doses"
                - "Confirm today's doses were taken during the evening check @recurring(daily)"
            - name: Handing medicines over to paid carers
              description: |-
                ## Purpose
                Once home care workers or a care home take on medicines, responsibility shifts to their records, and families can lose sight of what is given. Agreeing in writing who does what, getting sight of the administration record and checking it monthly keeps families informed and errors visible.

                ## Milestones
                1. A written agreement of which tasks the care provider does and which the family keeps.
                2. The current list handed over and checked against the provider's chart.
                3. Access arranged to see the administration record.
                4. A monthly look at the record with questions raised.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written split of medicine tasks with the provider and a monthly review of their administration record."
                cadence: rolling
              tasks:
                - "Ask the provider for their medicines policy in writing"
                - "Check their chart matches the current medication list"
                - "Arrange how you will see the administration record"
                - "Review the administration record with the provider @recurring(monthly:15)"
            - name: Keeping your own medicines going as a carer
              description: |-
                ## Purpose
                Carers routinely manage someone else's medicines to the minute while their own repeats lapse and their own reviews slip. Putting your medicines on the same calendar and pharmacy as the person you care for, and asking for a carer flag on your record, stops your health quietly becoming the gap.

                ## Milestones
                1. Your own medicines on the same refill calendar as the person you care for.
                2. Your repeats ordered on the same day as theirs.
                3. Your record flagged as a carer at the surgery, where this is offered.
                4. Your own medication review booked with cover arranged.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three months with your own repeats ordered alongside theirs and none running out, plus your own review booked."
                cadence: rolling
              tasks:
                - "Add your own medicines to the household refill calendar"
                - "Order your repeats on the same day as theirs"
                - "Ask the surgery to note on your record that you are a carer"
                - "Book your own review for a time when cover is arranged"
            - name: Dose times that fit shift work
              description: |-
                ## Purpose
                Labels saying morning and evening assume a day that night workers and rotating shift workers do not have. Working out with the pharmacist how to anchor doses to your waking pattern rather than the clock, including on changeover days, avoids both doubling and long gaps.

                ## Milestones
                1. Your shift pattern and typical waking times written out.
                2. Each medicine's timing rule checked: fixed clock time or relative to waking.
                3. A plan for changeover days agreed with the pharmacist.
                4. The plan tested through a full shift cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written dose plan for every shift type, including changeover days, followed through one full cycle."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write out a full cycle of your shift pattern"
                - "Ask the pharmacist which medicines need fixed clock times"
                - "Agree a plan for the changeover days"
                - "Follow the plan for one cycle and note any problems"
            - name: Controlled drug prescriptions and storage
              description: |-
                ## Purpose
                Strong painkillers, some sleeping tablets and ADHD medicines are controlled drugs, with shorter prescription validity, stricter collection rules and higher risk if they go missing. Knowing those rules, storing them locked and counting stock monthly protects you and everyone else in the house.

                ## Milestones
                1. Any controlled drugs on your list identified with the pharmacist.
                2. Their prescription validity and collection rules written down.
                3. Controlled drugs stored locked, separate from other medicines.
                4. A monthly stock count recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every controlled drug is identified, stored locked and covered by a dated monthly stock count."
                cadence: rolling
              tasks:
                - "Ask the pharmacist which of your medicines are controlled drugs"
                - "Note how long their prescriptions stay valid"
                - "Store them in a locked box apart from other medicines"
                - "Count and record controlled drug stock @recurring(monthly:28)"
            - name: Shared care medicines between hospital and GP
              description: |-
                ## Purpose
                Some specialist medicines are started in hospital and then handed to the GP under a shared care agreement, which sets out who prescribes, who orders monitoring and what happens if results change. Holding your own copy and knowing whom to call prevents the gaps that appear when each side thinks the other is responsible.

                ## Milestones
                1. Any medicine under shared care identified.
                2. A copy of each shared care agreement held.
                3. The split of prescribing and monitoring summarised in a few lines.
                4. Contacts for both the specialist team and the GP saved.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A copy of every shared care agreement held, with a three-line summary of who prescribes and who monitors."
                cadence: rolling
              tasks:
                - "Ask your GP which of your medicines are under shared care"
                - "Request a copy of each shared care agreement"
                - "Summarise who prescribes and who monitors in three lines"
                - "Confirm the next monitoring date with both teams @recurring(quarterly)"
            - name: Reporting a suspected side effect
              description: |-
                ## Purpose
                Medicine regulators rely on patient and carer reports to spot rare side effects, and in many countries anyone can report directly, not only clinicians. Learning your country's reporting scheme and submitting a report when something unexpected happens adds your experience to the safety picture for everyone taking that medicine.

                ## Milestones
                1. Your country's side effect reporting scheme found.
                2. The details the report needs gathered from your side effect log.
                3. A report submitted for a suspected reaction worth recording.
                4. The reference number kept with your medication records.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A submitted report to the national side effect scheme, with its reference number filed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the medicines regulator's side effect reporting page for your country"
                - "Gather the dates and details from your side effect log"
                - "Ask the agent to draft a clear, factual summary for the report"
                - "Submit the report and keep the reference number"
            - name: Lifetime medicines history
              description: |-
                ## Purpose
                Years later, few people remember which tablet caused a cough or which treatment did nothing, yet that history is exactly what a new specialist asks for. Keeping a running record of every medicine tried, with dates, why it was started and why it stopped, saves repeating treatments that already failed.

                ## Milestones
                1. Every past medicine you can trace listed with approximate dates.
                2. The reason each was started and stopped recorded.
                3. Gaps filled from the surgery or pharmacy prescribing record.
                4. The history brought up to date each year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A medicines history listing every past treatment with dates and reasons for starting and stopping, updated in the last year."
                cadence: rolling
              tasks:
                - "List every past medicine you remember with rough dates"
                - "Ask the surgery for a printout of your prescribing history"
                - "Add why each medicine was started and why it stopped"
                - "Add the year's changes to the medicines history @recurring(yearly)"
---

# Prescription Medication Management

This area is for anyone taking regular prescriptions, from one daily tablet to a dozen medicines from several prescribers, and for the carers who manage them for someone else. It starts with the foundations (a complete list, an emergency card, one pharmacy, an allergy record and reliable repeat ordering), then the routines that keep doses, refills and reviews on track, the skills of reading labels and spotting reactions, the decisions that lighten the load, the events that disrupt it, the situations of later life and caring, and finally specialist corners such as controlled drugs and shared care.

What repeats is a daily dose routine, a weekly organiser fill, a monthly refill check and side effect read-through, a quarterly list and cupboard check, and the yearly medication review. The Habit tracker, Purchase decision, Metrics log, Meeting notes and Operational checklist templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
