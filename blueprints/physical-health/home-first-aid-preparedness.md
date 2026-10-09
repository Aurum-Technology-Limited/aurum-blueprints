---
id: physical-health.home-first-aid-preparedness
name: Home First Aid Preparedness
description: "A stocked and checked first aid kit, hands-on CPR and first aid skills, emergency medical details ready to hand over, and plans for children, older relatives and trips."
category: personal
version: 1.0.0
tags: [physical-health, home-first-aid-preparedness, everyone, parent, first-aid, cpr, emergency-planning, defibrillator]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - purchase-decision
    - operational-checklist
    - course
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Home First Aid Preparedness
          description: "Stocking first aid kits, learning CPR and first aid, and keeping emergency medical information ready, for households, travellers and anyone caring for others."
          projects:
            - name: Household first aid needs assessment
              description: |-
                ## Purpose
                A kit and a course chosen without thinking about who actually lives in the house tend to miss the things most likely to happen. Listing each person's age, health conditions, allergies and regular activities, plus how far you are from the nearest emergency department, shows whether your biggest risks are a toddler's burns, a grandparent's fall or a teenager's sports injuries. Every later decision in this area starts from that list.

                ## Milestones
                1. Every household member listed with age, relevant conditions, allergies and regular activities.
                2. The three most likely injuries or emergencies for this household written down.
                3. Travel time to the nearest emergency department and urgent care centre recorded.
                4. A short list of the kit items and skills the household is missing.

                ## Notes
                Start from the **Risk register** template. Include regular visitors such as grandparents or a child you mind, not only the people who sleep at home.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written household needs list names each person's relevant health details, the three most likely emergencies and the gaps to close."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List everyone in the household with age, conditions and allergies"
                - "Write down the three emergencies most likely in your home"
                - "Time the drive to the nearest emergency department and urgent care centre"
                - "Note which kit items and skills are missing for those risks"
            - name: Main home first aid kit, bought or built
              description: |-
                ## Purpose
                Ready-made kits vary widely: some are mostly small plasters, others leave out the large dressings, gloves and foil blanket you would want for a real injury. Comparing two or three ready-made kits against a self-assembled one, using a recognised first aid organisation's contents list as the yardstick, gets you one well-stocked kit in a sturdy box rather than a drawer of odds and ends.

                ## Milestones
                1. A contents list from a recognised first aid organisation used as the benchmark.
                2. Two or three ready-made kits compared with the cost of building your own.
                3. One main kit in a clearly labelled, sturdy box with a contents card inside the lid.
                4. Items specific to your household needs list added.

                ## Notes
                Start from the **Purchase decision** template. The kit is for injuries first; leave out any medicine someone in the house cannot take.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One main first aid kit, checked against a recognised contents list, is assembled with a contents card inside the lid."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download a home kit contents list from a recognised first aid organisation"
                - "Compare two ready-made kits against that list item by item"
                - "Buy the chosen kit or the missing items to build your own"
                - "Tape a contents card inside the lid of the box"
            - name: Emergency numbers and home location card
              description: |-
                ## Purpose
                In a panic people forget their own postcode, the out-of-hours number or the poison advice line, and visitors or babysitters may never have known them. One card on the fridge with the emergency number, the non-urgent medical advice line, your doctor's surgery, the nearest emergency department and your exact address with directions gives anyone in the house what a call handler will ask for.

                ## Milestones
                1. Your country's emergency number and non-urgent medical advice line written on one card.
                2. Your full address, nearest landmark and how to find the front door written as a call handler would need them.
                3. The doctor's surgery, poison advice line and nearest emergency department added.
                4. Copies on the fridge, in the kit lid and saved as a photo on each adult's phone.

                ## Notes
                Add a location-sharing app's details if your home is hard to find, such as a farm, a new estate or a block with several entrances.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An emergency card with numbers, address and directions is on the fridge, in the kit and on every adult's phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your local non-urgent medical advice number and poison advice line"
                - "Write your address as directions a stranger could follow at night"
                - "Print the card and stick one copy on the fridge"
                - "Photograph the card and send it to every adult in the house"
            - name: Emergency medical sheet for each household member
              description: |-
                ## Purpose
                Paramedics and emergency doctors work faster when they know someone's conditions, medicines, allergies and who to call, and the person they are treating may be unable to tell them. A one-page sheet per person, kept in a known place and as a copy on a phone, means whoever goes with them to hospital can hand it over instead of guessing.

                ## Milestones
                1. A one-page sheet for each person listing conditions, current medicines, allergies, doctor and next of kin.
                2. Each sheet checked by the person it describes, or by their parent or carer.
                3. Paper copies kept in an agreed place near the main kit.
                4. Digital copies stored where any adult in the house can open them offline.

                ## Notes
                Keep each sheet short. A full history belongs in your medical records; this page is for the first hour.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every household member has a checked one-page emergency medical sheet, held on paper by the kit and in an offline digital copy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Make a one-page sheet layout with name, date of birth, conditions, medicines and allergies"
                - "Fill in a sheet for each person and ask them to check it"
                - "Put the printed sheets in a plastic wallet next to the main kit"
                - "Save copies to a shared folder that works offline"
            - name: Medical ID on every phone in the house
              description: |-
                ## Purpose
                Most smartphones can show medical details and emergency contacts on the lock screen without unlocking, and many can share location automatically when an emergency call is made. Few people switch these on. Setting them up takes ten minutes per phone and helps a stranger or paramedic who finds someone collapsed.

                ## Milestones
                1. Medical ID or emergency information filled in on every adult's and teenager's phone.
                2. Two emergency contacts set on each phone.
                3. Display on the lock screen switched on and tested.
                4. Emergency location sharing switched on where the phone supports it.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every adult's and teenager's phone shows medical details and two emergency contacts on the lock screen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Open the health or emergency settings on your own phone"
                - "Fill in conditions, medicines, allergies and two emergency contacts"
                - "Lock the phone and check the details show on the lock screen"
                - "Help each teenager and adult in the house set up theirs"
                - "Check each phone's medical ID still matches the emergency sheet @recurring(yearly)"
            - name: Nearest defibrillator and urgent care map
              description: |-
                ## Purpose
                When someone's heart stops, survival depends on CPR starting at once and a defibrillator arriving within minutes, yet most people have no idea where the nearest public one is. Locating the closest defibrillators, the emergency department, the urgent care centre and a late-opening pharmacy, with their hours, turns a frantic search into a known route.

                ## Milestones
                1. The two nearest public defibrillators located, with how their cabinets open.
                2. The nearest emergency department and urgent care centre recorded with opening hours.
                3. A late-opening pharmacy noted for evening and weekend needs.
                4. All the locations added to the emergency card and shared with the household.

                ## Notes
                Many countries run a public defibrillator map or app. Cabinet codes are usually given by the emergency call handler, so you do not need to know them in advance.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The emergency card lists the two nearest public defibrillators, the emergency department, urgent care and a late pharmacy with hours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your national or regional defibrillator map for your street"
                - "Walk to the nearest public defibrillator and time the round trip"
                - "Note opening hours for the urgent care centre and a late pharmacy"
                - "Add every location to the emergency card"
            - name: Kit placement across home, car and bags
              description: |-
                ## Purpose
                One kit in an upstairs cupboard is little use for a cut in the garden or a fall at the park. Deciding where the main kit lives, and adding small kits in the kitchen, the car and a day bag, puts supplies within a minute of where accidents actually happen.

                ## Milestones
                1. A fixed home for the main kit that every adult can reach and young children cannot.
                2. A small kitchen kit for burns and cuts.
                3. A compact kit in each car and in the bag used for days out.
                4. Everyone in the house able to say where each kit is.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Kits sit in the house, kitchen, each car and the day bag, and every household member can point to each one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a cool, dry spot for the main kit that small children cannot reach"
                - "Put together a small kitchen kit with burn dressings and plasters"
                - "Pack a compact kit for each car and the day bag"
                - "Ask each person in the house to point to every kit"
            - name: Hospital grab bag for unplanned visits
              description: |-
                ## Purpose
                Emergency visits often mean hours of waiting, sometimes overnight, and people arrive without chargers, medicine lists or anything to calm a frightened child. A packed bag by the door with copies of the medical sheets, a charger, snacks, a change of clothes and a little cash makes a long night far easier.

                ## Milestones
                1. A bag packed with medical sheet copies, a phone charger and a power bank.
                2. Snacks, water, a change of clothes and toiletries for one night added.
                3. A comfort item and small activity for each child added where relevant.
                4. The bag stored by the main door and its location noted on the emergency card.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A packed hospital grab bag with medical sheets, charger and overnight basics sits by the main door."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose a bag and a spot near the front door for it"
                - "Pack a spare charger, power bank and copies of the medical sheets"
                - "Add snacks, water and one night's clothes and toiletries"
                - "Swap the grab bag snacks and recharge its power bank @recurring(quarterly)"
            - name: Household emergency roles plan
              description: |-
                ## Purpose
                Two adults and three children all reacting at once waste precious minutes in an emergency. Agreeing in advance who calls for help, who starts first aid, who looks after the other children and pets, and who unlocks the door and waits for the ambulance gives everyone one job.

                ## Milestones
                1. Roles agreed for calling, first aid, children and meeting the ambulance.
                2. A back-up plan written for when only one adult is home.
                3. Front door, porch light and gate access sorted so crews can get in quickly.
                4. The plan talked through with every household member old enough to help.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written roles plan, including the one-adult version, has been talked through with every household member old enough to help."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree who calls for help and who starts first aid"
                - "Decide who looks after other children and pets"
                - "Write the plan for when only one adult is home"
                - "Talk the plan through at a family meal"
            - name: Quarterly first aid kit check and restock
              description: |-
                ## Purpose
                Kits quietly empty as plasters go on small cuts and dressings wander off, and sterile items do expire. A fifteen-minute check each quarter against the contents card, with a restock order straight afterwards, means the kit is complete on the day it matters.

                ## Milestones
                1. A checklist matching the contents card for every kit in the house and car.
                2. Used, damaged and out-of-date items replaced within a week of each check.
                3. Four quarterly checks completed in a year, each dated inside the kit lid.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated kit checks are completed in twelve months, each followed by a restock within a week."
                cadence: cyclic
              tasks:
                - "Turn the contents card into a checklist"
                - "Check every kit against the list and note gaps @recurring(quarterly)"
                - "Order replacements within a week of the check"
                - "Write the check date on a label inside each kit lid"
            - name: Yearly medicine and dressing expiry clear-out
              description: |-
                ## Purpose
                Pain relievers, antihistamines and antiseptic creams in the kit lose effect after their expiry date, and many eye drops must be thrown away a few weeks after opening. A yearly clear-out, with expired medicines returned to a pharmacy rather than binned, keeps the kit trustworthy and stops children finding old tablets.

                ## Milestones
                1. Every medicine and sterile item in the kits checked for its expiry date.
                2. Expired medicines bagged and returned to a pharmacy for safe disposal.
                3. Replacements bought, with opening dates written on drops and creams.
                4. The clear-out repeated each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No expired medicine or sterile item remains in any kit after the yearly clear-out, and expired stock went back to a pharmacy."
                cadence: cyclic
              tasks:
                - "Ask your pharmacy whether they take back expired medicines"
                - "Check every expiry date in the kits and the medicine cupboard @recurring(yearly)"
                - "Return expired medicines to the pharmacy"
                - "Write opening dates on drops and creams when you open them"
            - name: Car first aid kit and roadside readiness
              description: |-
                ## Purpose
                A car kit faces heat in summer, damp in winter and raids for plasters on school runs. Checking it each quarter, alongside a hi-visibility vest, foil blanket, torch and phone charger, matters most for anyone who drives long distances or carries children.

                ## Milestones
                1. A compact kit with gloves, dressings, foil blanket and scissors in each car.
                2. A torch, hi-visibility vest and in-car charger kept with it.
                3. The kit checked each quarter and anything heat-damaged replaced.
                4. A copy of the emergency card kept in the glovebox.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each car holds a complete kit, torch, vest and emergency card, checked within the last three months."
                cadence: cyclic
              tasks:
                - "Add a torch, hi-visibility vest and in-car charger to the car kit"
                - "Put a copy of the emergency card in the glovebox"
                - "Tell every regular driver where the car kit is kept"
                - "Check the car kit and swap anything heat-damaged or used @recurring(quarterly)"
            - name: Emergency sheets kept current
              description: |-
                ## Purpose
                Emergency medical sheets go out of date the first time a medicine changes or a child develops an allergy, and an out-of-date sheet can mislead. Updating the sheet on the day of any change, plus a quarterly read-through, keeps what the paramedic is handed accurate.

                ## Milestones
                1. A rule agreed that any new diagnosis, medicine or allergy triggers a same-day update.
                2. Each sheet dated at the bottom.
                3. Paper and digital copies matching after every update.
                4. Four quarterly read-throughs completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every emergency sheet carries a date from the last three months and matches its digital copy."
                cadence: rolling
              tasks:
                - "Add a last-updated date to the bottom of each sheet"
                - "Read through every emergency sheet and update anything changed @recurring(quarterly)"
                - "Reprint the paper copy whenever a digital sheet changes"
                - "Ask the agent to compare each sheet with the latest medicine list and flag differences"
            - name: First aid certificate and refresher calendar
              description: |-
                ## Purpose
                Skills fade fast, with CPR technique slipping noticeably within a year of a course, and most first aid certificates expire after a set period, often three years. Recording each adult's course dates and fitting in a short refresher every year keeps the household's skills usable.

                ## Milestones
                1. Each adult's course name, date and certificate expiry recorded.
                2. A short refresher, online or in person, completed every year.
                3. Recertification booked at least two months before a certificate lapses.
                4. Any change in guidance noted after each refresher.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A record shows every trained adult's certificate expiry and a refresher completed within the last twelve months."
                cadence: cyclic
              tasks:
                - "Record each adult's first aid course and certificate expiry date"
                - "Do a short first aid refresher, online or in person @recurring(yearly)"
                - "Book recertification two months before any certificate lapses"
                - "Note anything the refresher taught differently from your original course"
            - name: Monthly what-would-we-do talk
              description: |-
                ## Purpose
                Families who have talked through a scenario react faster than those who have only read a leaflet. Ten minutes once a month at a meal, posing one situation such as a burn from the kettle, a child choking or a grandparent collapsing, keeps the plan and the kit locations fresh, and children often enjoy it more than you might expect.

                ## Milestones
                1. A list of twelve scenarios suited to your household's ages and risks.
                2. One scenario talked through each month with whoever is home.
                3. Gaps the talks reveal written down and fixed.
                4. Children able to say how to call for help and what to tell the call handler.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scenario talks are held in a row, with at least two gaps they exposed fixed."
                cadence: rolling
              tasks:
                - "Write twelve scenarios matched to your household's risks"
                - "Talk through one scenario at a family meal @recurring(monthly:14)"
                - "Note any gap a scenario exposed and fix it within a week"
            - name: Home injury log and monthly look-back
              description: |-
                ## Purpose
                Small injuries repeat in patterns: the same step, the same pan handle, the same trampoline. Logging each injury that needed the kit, what was used and how it healed, then glancing over the log monthly, shows which hazards to fix and which supplies run down fastest.

                ## Milestones
                1. A log with date, person, injury, cause, treatment and items used.
                2. Every use of the kit recorded for three months.
                3. One hazard fixed because of a pattern in the log.
                4. Fast-running items stocked in larger quantities.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of injury entries are logged and one hazard has been fixed as a result."
                cadence: rolling
              tasks:
                - "Create an injury log with date, person, cause and items used"
                - "Record every injury that needed the first aid kit"
                - "Look back over the month's log and note any pattern @recurring(monthly:23)"
                - "Fix the hazard behind the commonest injury"
            - name: Seasonal first aid kit swaps
              description: |-
                ## Purpose
                Summer brings sunburn, insect stings, heat exhaustion and garden cuts; winter brings slips, cold injuries and more burns from heaters and hot drinks. Swapping a few seasonal items in and out twice a year keeps the kit suited to what is actually happening outside.

                ## Milestones
                1. A summer list written, such as after-sun, sting relief, rehydration sachets and a tick remover.
                2. A winter list written, such as instant ice packs, extra foil blankets and hand warmers.
                3. Both swaps done at the start of their season for a full year.
                4. Out-of-season items stored in a labelled pouch.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both seasonal swaps are completed within one year, with out-of-season items stored in a labelled pouch."
                cadence: cyclic
              tasks:
                - "Write a summer list and a winter list of seasonal kit items"
                - "Add the summer items to the kits as the warm season starts @recurring(yearly)"
                - "Swap in the winter items as the cold weather starts @recurring(yearly)"
                - "Store out-of-season items in a labelled pouch"
            - name: Shared kit shopping list
              description: |-
                ## Purpose
                The person who uses the last large dressing is rarely the person who restocks the kit. A shared list that anyone can add to from their phone, ordered from on a fixed day each month, closes that gap without anyone having to remember.

                ## Milestones
                1. A shared list created in an app the whole household already uses.
                2. A house rule agreed: whoever uses the last of anything adds it straight away.
                3. Flagged items ordered on a fixed day each month.
                4. Three months with nothing found missing at the quarterly check.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive quarterly kit checks find nothing missing that had been used up."
                cadence: rolling
              tasks:
                - "Create a shared kit shopping list in a household app"
                - "Tell everyone to add any kit item they use up"
                - "Order everything on the shared list @recurring(monthly:5)"
            - name: Accredited first aid course for adults
              description: |-
                ## Purpose
                Reading about first aid is not the same as having practised it on a manikin with an instructor correcting you. A one-day course from a recognised provider, such as your national Red Cross or St John organisation, covers assessment, breathing, bleeding, burns and the recovery position, and gives you a certificate with a clear expiry date.

                ## Milestones
                1. Two or three recognised courses compared on content, length, cost and date.
                2. A course booked for at least one adult in the house, ideally two.
                3. The course completed and the certificate filed.
                4. The three points you most want to remember written inside the kit lid.

                ## Notes
                Start from the **Course** template. A course with hands-on practice is worth more than an online-only one for CPR and bleeding control.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one adult in the household holds a current certificate from a recognised first aid course."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Shortlist three first aid courses from recognised providers near you"
                - "Book a course date for one or two adults"
                - "Attend the course and file the certificate"
                - "Write the three points you most want to remember inside the kit lid"
            - name: Hands-on CPR and defibrillator practice
              description: |-
                ## Purpose
                Cardiac arrest at home is rare, but CPR from someone in the room during the first minutes is one of the things most clearly linked to survival. A short session focused on chest compressions and a training defibrillator builds the confidence to start, which is the step most bystanders hesitate over.

                ## Milestones
                1. A CPR session with manikin practice booked through a heart charity, community group or course provider.
                2. Compressions practised until the instructor is satisfied with depth and rhythm.
                3. A training defibrillator used from switching on to delivering a shock.
                4. A quarterly two-minute refresher in the calendar.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult in the house has practised compressions on a manikin and used a training defibrillator within the last year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a hands-on CPR session run by a heart charity or community group"
                - "Book places for every adult and teenager in the house"
                - "Practise with a training defibrillator during the session"
                - "Watch a short CPR refresher video from a recognised charity @recurring(quarterly)"
            - name: Paediatric first aid for parents and carers
              description: |-
                ## Purpose
                Babies and young children need different techniques for choking and CPR than adults, and fevers and seizures in small children frighten even calm parents. Most adult courses cover children only briefly, so a paediatric course taken before or soon after a baby arrives means the people who spend most time with them know what to do.

                ## Milestones
                1. A paediatric course from a recognised provider booked for each main carer.
                2. Infant and child CPR and choking practised on manikins.
                3. Fever, febrile seizures, meningitis signs and dehydration covered.
                4. Grandparents or regular babysitters invited to a course or session.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each parent or main carer holds a paediatric first aid certificate from a recognised provider."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a paediatric first aid course for parents near you"
                - "Book a place for each parent or main carer"
                - "Ask grandparents or the babysitter whether they want to come too"
                - "File the certificate with the household's first aid records"
            - name: Choking response for adults, children and babies
              description: |-
                ## Purpose
                Choking is among the commonest emergencies in homes with young children or older adults, and the right response differs for a baby, a child and an adult. Learning the sequence from a recognised organisation's guidance, and practising hand positions without force under an instructor, keeps the steps clear when it counts.

                ## Milestones
                1. A recognised first aid organisation's choking guidance read for each age group.
                2. Back blow and thrust positions practised without force with an instructor or trainer manikin.
                3. The guidance printed as a one-page sheet for the kitchen.
                4. Everyone old enough knows when to call for help.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each adult has practised the choking sequence for every age group in the house, and a one-page guide is in the kitchen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a recognised first aid organisation's choking guidance for each age"
                - "Practise the positions gently with an instructor or at a course"
                - "Print a one-page choking guide for the kitchen"
                - "Explain to older children why food is cut small for younger siblings"
            - name: Recognising stroke, heart attack, sepsis and meningitis signs
              description: |-
                ## Purpose
                Several of the most time-critical emergencies, including stroke, heart attack, sepsis, meningitis and severe allergic reactions, start with signs people dismiss or wait out. Learning the warning signs your health service publishes, and agreeing that anyone in the house will call for help rather than wait and see, removes the delay that does most harm.

                ## Milestones
                1. Your health service's published signs for stroke, heart attack, sepsis, meningitis and anaphylaxis gathered on one page.
                2. The page talked through with every adult and teenager.
                3. An agreement written down to call the emergency number at the first sign, not wait.
                4. The page kept beside the emergency card.

                ## Notes
                This page gathers official guidance so it can be found quickly. It is not a diagnostic tool, and the call handler will guide you.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page warning signs sheet from official guidance sits beside the emergency card and every adult and teenager has gone through it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect your health service's warning signs for stroke, heart attack and sepsis"
                - "Add meningitis and anaphylaxis signs to the same page"
                - "Go through the page with every adult and teenager in the house"
                - "Re-read the warning signs page together @recurring(yearly)"
            - name: Bleeding control and wound care basics
              description: |-
                ## Purpose
                Deep kitchen cuts, broken glass and garden tool accidents are the bleeding emergencies most homes see, and firm direct pressure applied quickly is the skill that matters most. Practising pressure and dressing application, and knowing from official guidance which wounds need a clinician, avoids both panic and unnecessary trips.

                ## Milestones
                1. Direct pressure and applying a large dressing practised on a partner or at a course.
                2. Your health service's guidance on wounds that need professional assessment noted.
                3. Each household member's tetanus protection checked with your clinic.
                4. Large dressings and gloves confirmed in every kit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every adult has practised direct pressure with a large dressing, and the guidance on wounds needing a clinician is in the kit."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Practise applying direct pressure and a large dressing on a partner"
                - "Note your health service's guidance on wounds that need a clinician"
                - "Ask your clinic whether anyone's tetanus protection is out of date"
                - "Check every kit holds at least two large sterile dressings"
            - name: Burns and scalds first response
              description: |-
                ## Purpose
                Hot drinks, bath water, hair straighteners and oven doors cause most household burns, especially in children under five. Knowing the current guidance on cooling a burn, what not to put on it and which burns need hospital care, then rehearsing it at the kitchen sink, means the first minutes go on the right thing.

                ## Milestones
                1. A recognised first aid organisation's current burns guidance read and summarised.
                2. The cooling routine rehearsed at the kitchen sink with each adult.
                3. Cling film or burn dressings added to the kitchen kit.
                4. The signs that a burn needs hospital assessment written on a kitchen card.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each adult has rehearsed the cooling routine and a kitchen card lists when a burn needs hospital care."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a recognised first aid organisation's current burns guidance"
                - "Rehearse the cooling routine at the kitchen sink"
                - "Add burn dressings or cling film to the kitchen kit"
                - "Write when a burn needs hospital care on a kitchen card"
            - name: Head injury and concussion watch
              description: |-
                ## Purpose
                Bumped heads are routine with toddlers and contact sports, and most are minor, but some signs in the following hours mean a hospital visit is needed. Knowing those signs from your health service's guidance, and how to keep watch afterwards, replaces guesswork with a clear checklist.

                ## Milestones
                1. Your health service's head injury warning signs printed for the kit.
                2. A plan for who keeps watch after a head bump, and for how long the guidance advises.
                3. Your children's sports clubs asked about their concussion policy.
                4. The warning signs gone through with babysitters and older children.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Printed head injury warning signs are in the main kit and every regular carer has read them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print your health service's head injury warning signs"
                - "Put the sheet in the main kit"
                - "Ask your children's sports clubs for their concussion policy"
                - "Go through the signs with your babysitter"
            - name: Sprains, suspected breaks and the hospital decision
              description: |-
                ## Purpose
                Twisted ankles, wrist falls and trapped fingers leave people unsure whether to wait, ask a pharmacist, visit urgent care or go to the emergency department. Practising basic support with a sling and knowing which local service handles which injury saves hours in the wrong waiting room.

                ## Milestones
                1. A sling tied and a limb supported with a triangular bandage in practice.
                2. Local services listed by what they treat: pharmacy, urgent care, emergency department.
                3. An instant ice pack and a triangular bandage in each main kit.
                4. A short which-service guide added to the emergency card.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "The emergency card carries a which-service guide for injuries, and each adult has tied a practice sling."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Practise tying a sling with a triangular bandage"
                - "Find out which local service treats suspected fractures"
                - "Add an instant ice pack and triangular bandage to the main kit"
                - "Write a short which-service guide on the emergency card"
            - name: Making a clear emergency call
              description: |-
                ## Purpose
                Call handlers need the address, what happened, and whether the person is breathing and awake, and then they give instructions. Practising that call, including staying on the line and using the speaker to keep hands free, helps adults and children give clear information under stress.

                ## Milestones
                1. The questions emergency call handlers usually ask written as a short script.
                2. Each adult and every child old enough has rehearsed the call out loud.
                3. Everyone knows how to call the emergency number from a locked phone.
                4. Children know their full address and can describe where they are.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Every household member old enough has rehearsed an emergency call aloud and can make one from a locked phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the questions a call handler will ask as a short script"
                - "Show everyone how to make an emergency call from a locked phone"
                - "Rehearse the call aloud with each child old enough"
                - "Practise putting the phone on speaker while kneeling beside someone"
            - name: Upgrading the kit for your household's real risks
              description: |-
                ## Purpose
                Standard kits cover cuts and grazes but often not the injuries your needs assessment flagged, such as burns in a busy kitchen, splints for a sporty family or extra gloves for a carer. Comparing your risk list with the kit and adding targeted items, only ones you know how to use, makes it fit your household rather than an average one.

                ## Milestones
                1. Each risk on your needs list matched against what the kit can handle.
                2. Up to five targeted items chosen, each with a written reason.
                3. Training or guidance found for any item that needs a skill to use.
                4. The contents card updated with the new items.

                ## Notes
                Tourniquets and haemostatic dressings need training to use safely; add them only after a course that covers them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Up to five targeted items, each linked to a named household risk, are in the kit and on the contents card."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Compare your household risk list with the kit contents"
                - "Choose up to five items that close the biggest gaps"
                - "Find guidance or training for any item you have not used before"
                - "Update the contents card in the kit lid"
            - name: Home defibrillator decision
              description: |-
                ## Purpose
                Some households consider buying their own defibrillator, such as those in rural areas far from a public one or with a member at high cardiac risk. Weighing cost, pad and battery upkeep, the distance to the nearest public device and the clinician's view gives a clear yes or no, and if yes, a plan for registering and maintaining it.

                ## Milestones
                1. Distance and time to the nearest public defibrillator measured.
                2. Any household member's cardiac risk discussed with their clinician.
                3. Purchase and upkeep costs over five years compared.
                4. A decision recorded, and if yes, the device registered on the local defibrillator network.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written yes or no on a home defibrillator, with the five-year cost and the clinician's view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the walking time to your nearest public defibrillator"
                - "Ask the clinician of anyone with a heart condition for their view"
                - "Compare five-year costs including replacement pads and batteries"
                - "Record the decision and, if buying, register the device with the local network"
            - name: Choosing a first aid app and offline guide
              description: |-
                ## Purpose
                During an emergency there is no time to search the web, and signal can drop. A first aid app from a recognised organisation, downloaded with its offline content, plus a small printed guide in the kit, gives step-by-step prompts when your memory goes blank.

                ## Milestones
                1. Two or three apps from recognised first aid organisations compared.
                2. One app installed on every adult's and teenager's phone with offline content downloaded.
                3. A printed pocket guide placed in the main kit.
                4. Everyone shown how to reach the app's emergency section quickly.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One recognised first aid app with offline content is on every adult's and teenager's phone, and a printed guide is in the kit."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare first aid apps from two recognised organisations"
                - "Install the chosen app and download its offline content"
                - "Put a printed pocket guide in the main kit"
                - "Move the app to each phone's home screen"
            - name: Making the home easy for paramedics to reach
              description: |-
                ## Purpose
                Ambulance crews lose minutes to unlit house numbers, locked gates, narrow stairs and dogs at the door. Visible numbering, a lit path, a plan for pets and, for anyone vulnerable living alone, a key safe whose code the right people hold make it straightforward for help to get in.

                ## Milestones
                1. House number visible from the road at night.
                2. Path and entrance lit, with gates left unlocked once help is called.
                3. A plan for shutting pets away before the crew arrives.
                4. A key safe fitted and its code held by the right people where someone lives alone.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The house number is readable from the road at night and a written plan covers lighting, gates, pets and key access."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check from the road after dark whether your house number is visible"
                - "Fit a larger or lit house number if it is not"
                - "Agree where pets will be shut away when help is called"
                - "Find out whether your local ambulance service keeps key safe codes on file"
            - name: Poison-proofing medicines and household chemicals
              description: |-
                ## Purpose
                Laundry capsules, dishwasher tablets, e-cigarette liquid and adults' medicines are among the commonest causes of child poisoning, and visitors' handbags are a frequent source. Storing them high or locked, and knowing who to call for poison advice, removes most of the risk in an afternoon.

                ## Milestones
                1. Every medicine, cleaning product and e-liquid stored high up or locked away.
                2. Visitors asked to keep handbags and medicines out of reach.
                3. The poison advice line number on the emergency card.
                4. Everyone knows to take the container and its label to the phone or hospital.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All medicines, chemicals and e-liquids in the home are stored high or locked, checked at the most recent quarterly walk-round."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk through the house and collect every medicine and chemical"
                - "Move them to a high or lockable cupboard"
                - "Ask visiting grandparents to keep bags out of reach"
                - "Check medicines and chemicals are still locked away @recurring(quarterly)"
            - name: Travel first aid kit for a family trip
              description: |-
                ## Purpose
                Pharmacies abroad stock different brands under different names, and a cut or upset stomach on the first day of a holiday is easier with your own supplies. A compact travel kit packed for the destination, the activities and airline rules, with each traveller's emergency sheet and the local emergency number, sorts this before departure.

                ## Milestones
                1. A travel kit list adapted to destination, climate and planned activities.
                2. Liquids and sharp items checked against airline cabin rules.
                3. Each traveller's emergency medical sheet packed, translated where useful.
                4. The local emergency number and the nearest hospital to your accommodation noted.

                ## Notes
                Start from the **Trip** template. Vaccines, malaria tablets and travel insurance belong with travel health preparation; this project covers the kit and the emergency details.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A packed travel kit, emergency sheets and the destination's emergency number and nearest hospital are ready before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Adapt the travel kit list to your destination and activities"
                - "Check airline rules for liquids and scissors in cabin bags"
                - "Look up the emergency number at your destination"
                - "Find the nearest hospital to where you are staying"
            - name: First aid cover for a party or family gathering
              description: |-
                ## Purpose
                Birthday parties with bouncy castles, barbecues and big family gatherings bring more people, alcohol, hot grills and children in an unfamiliar house. Naming one sober adult as first aider for the day, with the kit out and the address ready, is a small step guests rarely notice and hosts are glad of.

                ## Milestones
                1. One adult named as first aider for the event, staying sober.
                2. The main kit set out in a known spot, with burns supplies near the grill.
                3. Guests' allergies and children's medical needs asked for in advance.
                4. The venue address and nearest defibrillator noted for the day.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The gathering ran with a named sober first aider, the kit set out and guests' allergies known in advance."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask about allergies and medical needs in the invitation"
                - "Name the adult who will act as first aider and stay sober"
                - "Set the kit out with burns supplies near the barbecue"
                - "Save the venue address and nearest defibrillator on your phone"
            - name: Camping and hiking first aid plan
              description: |-
                ## Purpose
                Far from roads and phone signal, help can be hours away, and blisters, sprains, cold and dehydration become real problems. A trip plan with a lightweight kit, a route left with someone at home, a way to call for help without signal and one person trained in first aid makes remote trips safer.

                ## Milestones
                1. A lightweight outdoor kit with blister care, tape, a foil blanket and a whistle packed.
                2. Route and return time left with a named contact at home.
                3. Signal coverage checked and an alternative, such as a satellite messenger, considered.
                4. At least one person in the group with recent first aid training.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The trip set off with an outdoor kit packed, a route left with a contact and a trained first aider in the group."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pack a lightweight outdoor kit with blister care and a foil blanket"
                - "Leave your route and return time with someone at home"
                - "Check phone coverage along the route"
                - "Find out whether your country offers emergency text registration"
            - name: CPR session for neighbours and family
              description: |-
                ## Purpose
                One trained person in a house helps that house; ten trained people on a street help everyone. Hosting a short CPR awareness session, using a heart charity's loan kit or a volunteer trainer, is a practical way to pass on what you know once you are confident yourself.

                ## Milestones
                1. A loan training kit or volunteer trainer arranged through a heart charity or community group.
                2. A date, venue and up to twelve guests confirmed.
                3. Every attendee practised compressions on a manikin.
                4. The nearest public defibrillator location shared with attendees.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A CPR session was held where every attendee practised compressions and learnt where the nearest defibrillator is."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask a heart charity whether they lend CPR training kits"
                - "Pick a date and invite neighbours and family"
                - "Run the session so every attendee practises on a manikin"
                - "Share the nearest defibrillator location with everyone who came"
            - name: Taking on a workplace or club first aider role
              description: |-
                ## Purpose
                Employers, sports clubs and youth groups often need a named first aider, and volunteering brings training that benefits your household too. Understanding the responsibilities, the qualification required and how incidents are recorded before you say yes avoids surprises later.

                ## Milestones
                1. Role expectations, hours and record-keeping duties confirmed in writing.
                2. The required qualification booked and paid for by the organisation.
                3. The organisation's kit, incident book and procedure located.
                4. The requalification date set.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "You hold the qualification the organisation requires and know where its kit and incident book are kept."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the organisation exactly what the first aider role involves"
                - "Confirm which qualification they need and who pays for it"
                - "Find the organisation's kit and incident book on your first day"
                - "Put the requalification date in your calendar"
            - name: New baby first aid readiness
              description: |-
                ## Purpose
                The first months bring new worries: fevers, choking on milk, falls from changing tables and which thermometer to trust. Preparing before or just after the birth, with baby items in the kit, infant first aid covered and the out-of-hours advice number on the fridge, makes 3am decisions calmer.

                ## Milestones
                1. A thermometer of the type your midwife or health visitor recommends bought and practised with.
                2. Baby-specific items added to the main kit.
                3. The out-of-hours advice number and the emergency number on the fridge card.
                4. Infant CPR and choking covered in a course, session or recognised app.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The kit holds baby items, the recommended thermometer is in use, and both parents have covered infant CPR and choking."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your midwife or health visitor which thermometer they recommend"
                - "Add baby-specific items to the main kit"
                - "Put the out-of-hours advice number on the fridge card"
                - "Go through the infant CPR section of your first aid app together"
            - name: Toddler stage hazards and first aid
              description: |-
                ## Purpose
                Toddlers climb, pull and put things in their mouths, which shifts the risk to falls, button batteries, magnets, hot drinks and blind cords. A crawl-height walk through the house, with the matching first aid learnt for each hazard you cannot remove, gives you prevention and response together.

                ## Milestones
                1. A crawl-height walk-through done in every room.
                2. Button batteries and small magnets secured or removed.
                3. Hot drink and kettle habits agreed with every adult.
                4. Official guidance on swallowed button batteries read, with the emergency route clear.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every room has been checked at toddler height and button batteries and magnets are out of reach."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk every room at toddler height and list hazards"
                - "Secure or remove button batteries and small magnets"
                - "Agree a rule on never holding the child and a hot drink at once"
                - "Read your health service's guidance on swallowed button batteries"
            - name: Babysitter and grandparent emergency handover sheet
              description: |-
                ## Purpose
                Babysitters, grandparents and holiday club leaders step in without knowing where the kit is, what the child is allergic to or even the house address. A one-page handover sheet, left on the fridge and talked through on the first visit, gives any carer what they need to act.

                ## Milestones
                1. A sheet listing contact numbers, address, the child's allergies and medicines, and kit location.
                2. Instructions for any condition, such as an asthma or allergy action plan, attached.
                3. The sheet walked through with each new carer.
                4. The sheet dated and updated when anything changes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated handover sheet is on the fridge and every regular carer has been walked through it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a one-page handover sheet for carers"
                - "Attach copies of any child's condition action plan"
                - "Walk each new carer through the sheet and the kit location"
                - "Ask the agent to turn the sheet into a short text message version"
            - name: Teenagers home alone and learning first aid
              description: |-
                ## Purpose
                Teenagers start minding siblings, staying home alone and going out with friends, often before anyone has taught them first aid. A short course or youth programme, a phone set up with medical ID and a clear rule on when to call for help prepare them for being the responsible one.

                ## Milestones
                1. A youth first aid course or school programme identified and booked.
                2. The teenager can explain the household emergency plan and where every kit is.
                3. Their phone set up with medical ID and the first aid app.
                4. A clear rule agreed on calling for help for themselves or a friend, including after alcohol.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your teenager has completed a first aid course and can explain the household emergency plan unprompted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the school or a youth group about first aid courses for teenagers"
                - "Book a course for your teenager"
                - "Ask them to walk you through the household emergency plan"
                - "Agree that calling for help for a drunk friend never gets anyone in trouble"
            - name: Falls and emergencies plan for an older relative
              description: |-
                ## Purpose
                Falls are the commonest emergency for older people, and lying on the floor for hours afterwards does serious harm of its own. A plan covering how they call for help when they cannot reach a phone, who holds a key, a personal alarm or fall detection, and an emergency sheet by the door is something carers often wish they had set up sooner.

                ## Milestones
                1. Your relative's wishes discussed and the plan agreed with them.
                2. A personal alarm or fall-detecting device chosen and tested.
                3. Two key holders named and a key safe fitted if needed.
                4. An emergency sheet and medicine list kept by their front door or on the fridge.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Your relative has a working personal alarm, two named key holders and an emergency sheet by the door."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Talk with your relative about what happens if they fall alone"
                - "Compare personal alarm and fall-detection options with them"
                - "Name two key holders who live within twenty minutes"
                - "Test the personal alarm with the monitoring centre @recurring(monthly:18)"
            - name: Living alone emergency readiness
              description: |-
                ## Purpose
                People who live alone have nobody to call for help on their behalf, which makes phone access, a check-in arrangement and door access especially important. A simple daily check-in with a friend, a phone within reach at night and a trusted key holder close that gap without fuss.

                ## Milestones
                1. A friend or relative agreed as a check-in buddy, with what happens if a check-in is missed.
                2. A phone charged and within reach of the bed at night.
                3. A key holder nearby, or a key safe, arranged.
                4. The emergency sheet visible near the front door.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A check-in buddy, a missed check-in plan and a key holder are all agreed and written down."
                cadence: rolling
              tasks:
                - "Ask a friend or relative to be your check-in buddy"
                - "Agree what they do if you miss a check-in"
                - "Send your check-in message to your buddy @recurring(daily)"
                - "Keep a charged phone within reach of the bed at night"
            - name: Condition-specific emergency plans at home
              description: |-
                ## Purpose
                Epilepsy, diabetes, severe allergy and asthma each come with a written emergency plan from the treating team, and those plans often end up filed where no one can find them. Gathering every plan into the main kit, beside the rescue medicines or devices it refers to, means the right steps are followed whoever is home.

                ## Milestones
                1. Every household member's written emergency plan obtained from their treating team.
                2. Plans kept in the main kit with any rescue medicines or devices they mention.
                3. Every adult and regular carer shown each plan.
                4. Plans replaced after each clinic review.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every written condition plan in the household is in the main kit and every adult and regular carer has seen it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask each treating team for a written emergency plan"
                - "Store the plans in a labelled wallet in the main kit"
                - "Show every adult and regular carer where the plans are"
                - "Swap in the new plan after each clinic review"
            - name: Community defibrillator for your street or building
              description: |-
                ## Purpose
                Neighbourhoods, blocks of flats and village halls without a nearby defibrillator can fundraise for one, and some heart charities offer matched funding. Becoming the guardian means choosing a site, registering the device so call handlers can direct people to it, and checking it every week.

                ## Milestones
                1. Need confirmed by mapping the existing public defibrillators nearby.
                2. Funding, site permission and a heated outdoor cabinet arranged.
                3. The device registered on the national or regional defibrillator network.
                4. A guardian rota agreed for weekly checks.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A public defibrillator is installed, registered with the defibrillator network and checked weekly by a named guardian rota."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Map the existing public defibrillators within a ten-minute walk"
                - "Ask a heart charity about funding schemes for community devices"
                - "Register the installed device with the defibrillator network"
                - "Check the cabinet, status light and pad expiry @recurring(weekly:mon)"
            - name: Volunteer community first responder
              description: |-
                ## Purpose
                Many ambulance services train volunteers to attend nearby emergencies, such as cardiac arrests, before the ambulance arrives. For someone with first aid experience and time to give, the role brings advanced training and real impact, alongside on-call commitments and emotional demands worth weighing first.

                ## Milestones
                1. Local schemes, their training and on-call expectations researched.
                2. The commitment discussed with your household.
                3. An application submitted and training completed, if the role fits.
                4. A support plan in place for difficult call-outs.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A recorded decision on volunteering as a community first responder, and if yes, training completed."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Find out whether your ambulance service runs a community responder scheme"
                - "Ask a current volunteer about the on-call commitment"
                - "Discuss the time commitment with your household"
                - "Submit an application if the role fits"
            - name: Remote and wilderness first aid course
              description: |-
                ## Purpose
                Standard courses assume help arrives in minutes, which is not true on mountains, sailing trips or expeditions. A remote or wilderness first aid course covers prolonged care, improvised splints, hypothermia and evacuation decisions, for people who lead groups or travel far from help.

                ## Milestones
                1. Courses compared on length, outdoor practicals and recognition by activity bodies.
                2. A course completed with outdoor scenarios.
                3. The outdoor kit revised using what the course taught.
                4. The certificate expiry added to the refresher calendar.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You hold a current remote or wilderness first aid certificate and the outdoor kit matches the course kit list."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare two remote first aid courses recognised by your activity's governing body"
                - "Book the course before the next big trip season"
                - "Revise the outdoor kit using the course kit list"
                - "Add the certificate expiry to the refresher calendar"
            - name: Mental health first aid course
              description: |-
                ## Purpose
                Panic attacks, suicidal crises and severe distress happen at home too, and the people nearby often freeze for fear of saying the wrong thing. A mental health first aid course teaches how to approach, listen, keep someone safe and connect them with professional help, which suits carers, parents of teenagers and team leaders.

                ## Milestones
                1. A recognised mental health first aid course chosen.
                2. The course completed and the certificate filed.
                3. Crisis line numbers added to the emergency card.
                4. A personal plan written for looking after yourself after supporting someone.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A mental health first aid certificate is held and crisis line numbers are on the emergency card."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Find a recognised mental health first aid course near you"
                - "Book a place on the course and arrange cover at home"
                - "Add crisis line numbers to the emergency card"
                - "Write down how you will look after yourself after a hard conversation"
            - name: Catastrophic bleeding training and kit
              description: |-
                ## Purpose
                Severe bleeding from a chainsaw, a fall through glass or a road accident can kill within minutes, before an ambulance arrives. A specialist bleeding control course teaches wound packing and tourniquet use, after which carrying those items in the car or workshop kit makes sense.

                ## Milestones
                1. A course covering wound packing and tourniquets completed.
                2. A tourniquet and haemostatic dressing of the types the course recommended bought.
                3. Items placed in the car or workshop kit where the risk is.
                4. Dressing expiry dates added to the quarterly kit checklist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least one adult has completed bleeding control training and a tourniquet sits in the highest-risk kit."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find a bleeding control course that includes tourniquet practice"
                - "Book the course for adults who use power tools or drive often"
                - "Buy the tourniquet type the instructor recommended"
                - "Add the dressing expiry dates to the quarterly kit checklist"
---

# Home First Aid Preparedness

This area is for any household that wants to be ready for the cut, burn, fall or collapse before it happens, and especially for parents and anyone caring for others. It starts with the foundations (a needs assessment, a proper kit, the emergency card and medical sheets), then the routines that keep kits and details current, the skills worth learning hands-on, the upgrades and decisions, the events that need cover, the situations that change the plan from a new baby to an older relative living alone, and finally specialist training for people who want to help beyond their own front door.

What repeats is a quarterly kit check, a yearly expiry clear-out and seasonal kit swap, a quarterly read-through of the emergency sheets, a monthly what-would-we-do talk at the table and a yearly skills refresher. The Risk register, Purchase decision, Operational checklist, Course and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
