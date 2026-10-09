---
id: physical-health.sun-safety-mole-monitoring
name: Sun Safety & Mole Monitoring
description: "Sun protection you will actually use, a photo record of your moles, monthly self-checks and the appointments that follow a change, for everyday life, outdoor sport and higher-risk skin."
category: personal
version: 1.0.0
tags: [physical-health, sun-safety-mole-monitoring, everyone, athlete, sunscreen, melanoma, mole-checks, skin-cancer]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - habit-tracker
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Sun Safety & Mole Monitoring
          description: "Protecting skin from sun damage and photographing moles over time so changes are caught early and checked by a dermatologist."
          projects:
            - name: Skin type and burn history profile
              description: |-
                ## Purpose
                Fair skin that burns before it tans, red or blond hair and light eyes each raise the risk of sun damage, and your own history of blistering burns matters as much as your colouring. Writing a one-page profile of your skin type and past burns gives every later decision, from which SPF to buy to how often to check moles, a starting point your doctor can read in a minute.

                ## Milestones
                1. Your skin type recorded on a standard six-point skin type scale, with a sentence on how you usually react to an hour of summer sun.
                2. Every blistering or peeling sunburn you can remember listed with your rough age and where it happened.
                3. Any past sunbed use noted with an estimate of how many sessions.
                4. The profile saved as the first page of your skin record.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page skin profile listing your skin type, remembered blistering burns and any sunbed use is saved in your skin record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a description of the six skin types and pick the one that fits you"
                - "List every bad sunburn you remember with your age at the time"
                - "Ask a parent or older sibling about burns you had as a young child"
                - "Save the profile as the first page of your skin record"
            - name: Personal skin cancer risk checklist
              description: |-
                ## Purpose
                More than about fifty ordinary moles, any unusual-looking moles, a parent or sibling with melanoma, a weakened immune system and a history of bad burns all change how closely your skin should be watched. Ticking through these factors once, then asking your doctor what they mean for you, decides whether monthly self-checks are enough or whether professional checks belong in the plan too.

                ## Milestones
                1. A checklist covering mole count, unusual moles, family history, burns, sunbed use, outdoor work and immune-suppressing medicines completed.
                2. Close relatives asked whether anyone has had melanoma or another skin cancer.
                3. The completed checklist taken to your doctor and their view on your risk level written down.
                4. A decision recorded on whether self-checks alone are enough or professional checks are needed as well.

                ## Notes
                Family history of melanoma is the item people most often do not know. One message to a parent or aunt can change the whole plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed risk checklist with your doctor's view on your risk level and the agreed level of monitoring written beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count your moles roughly, region by region, using a mirror"
                - "Message close relatives to ask about any skin cancer in the family"
                - "Book a routine appointment to go through the checklist with your doctor"
                - "Write down the level of monitoring your doctor recommends"
            - name: Whole-body baseline mole photographs
              description: |-
                ## Purpose
                A change is only visible against a record of how things looked before. A set of overview photographs of every body region, taken in the same light and pose, becomes the reference you compare against each month and the evidence a dermatologist asks for when you say a mole looks different.

                ## Milestones
                1. Overview photos taken of the front, back and both sides, plus scalp, face, arms, hands, legs and feet.
                2. Close-ups taken of every mole larger than a pencil eraser or that looks different from your others.
                3. Each photo dated and labelled with its body region.
                4. The full set stored in your private skin photo folder.

                ## Notes
                Ask someone you trust to take the back and scalp shots. Use the same room, the same light and plain underwear each time so later sets are comparable.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated set of overview and close-up photographs covering every body region is stored in your private skin photo folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a room with bright, even daylight and a plain wall"
                - "Ask a partner or trusted friend to help with the back and scalp"
                - "Take overview photos region by region in a fixed order"
                - "Take close-ups with a small ruler beside each notable mole"
                - "Label each photo with the date and body region"
            - name: Numbered body map of your moles
              description: |-
                ## Purpose
                Describing a mole as the one near your left shoulder blade stops working once you are following thirty of them. A simple body outline with each notable mole numbered, and the same numbers used in photo file names, lets you, a helper and a clinician talk about exactly the same spot.

                ## Milestones
                1. A front and back body outline printed or drawn.
                2. Every mole photographed close up marked and numbered on the outline.
                3. Photo file names updated to carry the mole number.
                4. A copy of the map kept with the papers you take to appointments.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbered front and back body map exists, and every close-up photo file name carries the matching mole number."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print a front and back body outline"
                - "Mark each close-up mole on the outline and give it a number"
                - "Rename each close-up photo so it starts with its mole number"
                - "Put a copy of the map in the folder you take to appointments"
            - name: Choosing a sunscreen you will actually wear
              description: |-
                ## Purpose
                The best sunscreen is the one you put on every day in the right amount, and many people abandon theirs because it stings, feels greasy or leaves a white cast. Comparing a few broad-spectrum products with SPF 30 or higher and a good UVA rating, then testing them for several days each, ends with a face and a body product you will reach for without thinking.

                ## Milestones
                1. Criteria written down: SPF, UVA rating, water resistance, texture, skin reactions and price per 100 ml.
                2. Three face and three body products shortlisted against those criteria.
                3. Each finalist worn for at least three days and rated.
                4. A face sunscreen and a body sunscreen chosen and bought in full size.

                ## Notes
                Start from the **Purchase decision** template. If your skin reacts to many products, ask a pharmacist about mineral or fragrance-free options before buying full sizes.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A face sunscreen and a body sunscreen, both broad-spectrum SPF 30 or higher, have been chosen after testing and are in the house."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what made you stop using sunscreen in the past"
                - "Shortlist three face and three body products with SPF 30 or more and a high UVA rating"
                - "Buy travel sizes of the finalists to test"
                - "Record how each one feels after a full day of wear"
            - name: Daily UV index check
              description: |-
                ## Purpose
                Sun strength depends on the UV index, not the temperature, and a cool, breezy spring day can burn as fast as a hot one. Glancing at the UV forecast each morning and using protection whenever it reaches 3 or above turns sun safety from guesswork into a ten-second habit.

                ## Milestones
                1. A weather app or website showing the hourly UV index set up on your phone.
                2. Your personal rule written down, such as full protection at UV 3 and above.
                3. The forecast checked every morning for a month.
                4. The hours when UV peaks in your area noted for each season.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The UV forecast has been checked on at least 25 mornings in the past month, with protection used on every day at UV 3 or above."
                cadence: rolling
              tasks:
                - "Set up a weather app that shows the hourly UV index"
                - "Write your protection threshold on a note by the front door"
                - "Check the UV index forecast each morning before getting dressed @recurring(daily)"
                - "Note the peak UV hours for your area this season"
            - name: Sun kit in every bag and the car
              description: |-
                ## Purpose
                Most unplanned sunburn happens when nobody meant to be outside for long: a pub garden, a queue, a child's match that runs over. Keeping a small kit with sunscreen, a hat and sunglasses in the places you set off from means protection is already with you when the plan changes.

                ## Milestones
                1. A list of the places you set off from: front door, car, work bag, sports bag, pushchair.
                2. A kit of sunscreen, SPF lip balm, a folding hat and sunglasses in each.
                3. Every kit bottle marked with its opening date so old ones are spotted.
                4. One spare kit kept for visitors or children.

                ## Notes
                Heat breaks sunscreen down, so a bottle left in a hot car all summer may not protect as labelled. Swap the car bottle more often than the rest.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every regular bag, the car and the front door each hold a sun kit with in-date sunscreen, lip balm, a hat and sunglasses."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every bag and place you regularly set off from"
                - "Buy small sunscreen bottles and SPF lip balm for each kit"
                - "Write the opening date on each bottle with a marker"
                - "Pack a folding hat and sunglasses into each kit"
            - name: Mole warning signs and action card
              description: |-
                ## Purpose
                A mole that is changing in size, shape or colour, a new mole in adulthood that looks unlike your others, or a spot that bleeds, itches or will not heal should be shown to a doctor promptly rather than watched for months. A one-page card listing the ABCDE signs, the ugly duckling rule and who to contact means a worrying change leads to a booking that week.

                ## Milestones
                1. Your health service's published warning signs for melanoma and other skin cancers found.
                2. A card written with the ABCDE signs, the ugly duckling rule and sores that do not heal.
                3. The card states who to contact and how quickly, in your health service's words.
                4. The card kept with your skin record and a photo of it saved on your phone.

                ## Notes
                ABCDE stands for asymmetry, border, colour, diameter and evolving. Evolving, meaning any change at all, is the sign that matters most for self-checks.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card based on your health service's guidance is saved on your phone and in your skin record, naming who to contact."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your health service's page on the warning signs of skin cancer"
                - "Write the signs and the contact route on a single card"
                - "Save a photo of the card in your skin photo folder"
                - "Share the card with the person who helps with your back checks"
            - name: Private folder for skin photographs
              description: |-
                ## Purpose
                Skin photos often show a lot of bare skin and do not belong in a shared camera roll or a family cloud album. Setting up one private, backed-up folder with a clear naming pattern keeps the record safe, easy to find in an appointment and out of anyone else's feed.

                ## Milestones
                1. A private folder or locked album created and excluded from shared albums.
                2. A naming pattern agreed, such as date, body region and mole number.
                3. Automatic backup to a private account switched on and tested.
                4. Baseline photos moved in and removed from the main camera roll.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All skin photos sit in one private, backed-up folder with a consistent naming pattern, and none remain in shared albums."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create a locked album or private folder for skin photos"
                - "Turn off sharing and family album sync for that folder"
                - "Write the file naming pattern at the top of your skin record"
                - "Check the backup copy of the folder opens on a second device @recurring(monthly:28)"
            - name: Monthly full-skin self-examination
              description: |-
                ## Purpose
                Checking your whole skin once a month, including the scalp, soles, between the toes and under the nails, is how many melanomas are found early. A fixed day, a full-length mirror, a hand mirror and a set order make the check take about fifteen minutes and stop it drifting to whenever you remember.

                ## Milestones
                1. A fixed monthly date chosen and a head-to-toe order written down.
                2. Full-length and hand mirrors and good light set up in one room.
                3. Each check recorded with the date and any mole that looked different.
                4. Six consecutive monthly checks completed.

                ## Notes
                Checking far more often than monthly makes slow change harder to notice. Once a month, compared against your photos, is the usual advice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly self-examinations are recorded for the past year, each noting the date and any change found."
                cadence: rolling
              tasks:
                - "Write down your head-to-toe order, from scalp to soles"
                - "Put a hand mirror next to the full-length mirror"
                - "Do the full self-examination and note anything new or changed @recurring(monthly:12)"
                - "Book with your doctor within a week if a check finds a change"
            - name: Quarterly mole photo update
              description: |-
                ## Purpose
                Memory is poor at judging whether a mole has grown a millimetre since spring. Retaking the close-ups every three months in the same light, at the same distance and with the same ruler gives a side-by-side comparison that shows real change and calms imagined change.

                ## Milestones
                1. Close-ups of every numbered mole retaken with the ruler and lighting used for the baseline.
                2. Each new photo placed beside its previous one.
                3. Any mole that looks larger, darker or less even flagged in the skin record.
                4. Four quarterly sets completed in a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four dated sets of numbered close-ups exist for the past year, each compared side by side with the set before it."
                cadence: rolling
              tasks:
                - "Retake close-ups of every numbered mole using the baseline set-up @recurring(quarterly)"
                - "Place each new photo beside the previous one for comparison"
                - "Flag any mole that looks different in the skin record"
                - "Delete blurred duplicates so each quarter has one clear photo per mole"
            - name: Watch list for moles under observation
              description: |-
                ## Purpose
                When a doctor says a mole is probably fine but worth watching, the instruction is often vague about how and for how long. Keeping a short watch list, with each mole's number, why it is being watched, the review interval and dated measurements, turns that advice into evidence for the follow-up appointment.

                ## Milestones
                1. Every mole a clinician asked you to watch listed with its number and the reason.
                2. The review interval your clinician gave written beside each one.
                3. Monthly measurements and photos logged for each watched mole.
                4. Each watched mole either signed off or re-examined at the agreed review.

                ## Notes
                Start from the **Metrics log** template. Measure the widest diameter in millimetres against a ruler in the photo, not by eye.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every watched mole has a dated measurement log and a recorded outcome from its agreed review."
                cadence: rolling
              tasks:
                - "Create a watch list from the metrics log template"
                - "Ask your clinician how long each watched mole should be followed"
                - "Photograph and measure each watched mole against a ruler @recurring(monthly:20)"
                - "Bring the watch list to the follow-up appointment"
            - name: Morning sunscreen routine
              description: |-
                ## Purpose
                Daily exposure on the walk to work, the school run and through car windows adds up to more lifetime sun than most holidays. Making sunscreen on the face, ears, neck and backs of the hands part of the morning, tied to brushing your teeth, protects the places where most skin cancers in older adults appear.

                ## Milestones
                1. Sunscreen kept next to the toothbrush or by the front door.
                2. The routine anchored to an existing habit, such as brushing your teeth.
                3. Ears, neck and backs of the hands included, not just the face.
                4. Thirty mornings logged in a row.

                ## Notes
                Start from the **Habit tracker** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sunscreen has been applied to face, ears, neck and hands on at least 25 of the last 30 mornings, as shown in the habit tracker."
                cadence: rolling
              tasks:
                - "Move your face sunscreen next to your toothbrush"
                - "Set up a habit tracker for morning sunscreen"
                - "Apply sunscreen to face, ears, neck and backs of hands after brushing teeth @recurring(daily)"
                - "Review the tracker after 30 days and fix whatever caused the missed days"
            - name: Sunscreen stock and expiry rotation
              description: |-
                ## Purpose
                Sunscreen loses strength after its expiry date or the period-after-opening symbol on the bottle, often twelve months, and half-used bottles collect in drawers and bags. A short stock check each quarter retires old bottles and makes sure there is enough for the months ahead.

                ## Milestones
                1. Every bottle in the house, car and bags gathered in one place.
                2. Out-of-date and long-opened bottles thrown away.
                3. Remaining stock compared with what the next three months need.
                4. Replacements bought before the old ones run out.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No sunscreen past its expiry or opened-period date remains in the house, car or bags at the most recent quarterly check."
                cadence: rolling
              tasks:
                - "Gather every sunscreen bottle from the house, car and bags"
                - "Bin any bottle past its date or opened longer than its symbol allows"
                - "Check stock and expiry dates across all sun kits @recurring(quarterly)"
                - "Add replacements to the shopping list before supplies run low"
            - name: Start of sun season reset
              description: |-
                ## Purpose
                In many places UV climbs quickly in spring while habits are still set to winter, which is why early-season burns are so common. A yearly reset before the UV index regularly reaches 3, covering kit, clothing and photos, means the first warm weekend does not catch you unprepared.

                ## Milestones
                1. The month UV usually reaches 3 in your area identified.
                2. Hats, sunglasses and UPF clothing checked and worn-out items replaced.
                3. A fresh full mole photo set taken before the season starts.
                4. Sun kits restocked and the morning routine restarted if it lapsed over winter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sun season reset is completed each year before UV regularly reaches 3, with kit replaced and a fresh photo set taken."
                cadence: cyclic
              tasks:
                - "Look up the month UV usually reaches 3 where you live"
                - "Try on last year's hats and sunglasses and replace any that are damaged"
                - "Run the full sun season reset before UV regularly reaches 3 @recurring(yearly)"
                - "Take a fresh full mole photo set at the start of the season"
            - name: Back and scalp checks with a helper
              description: |-
                ## Purpose
                The back, the backs of the legs and the scalp are among the commonest places for melanoma to appear and the hardest to see yourself. Agreeing with a partner, family member or friend to check each other's hard-to-see skin regularly, with your photos to compare against, covers the gap that mirrors leave.

                ## Milestones
                1. A helper agreed and shown your warning signs card.
                2. The helper shown how to part the hair and check the scalp in sections.
                3. Back and scalp checked against your photos at least four times a year.
                4. Any change the helper sees recorded and acted on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A helper has checked your back and scalp against your photos at least four times in the past year, with findings recorded."
                cadence: rolling
              tasks:
                - "Ask a partner or friend to be your back and scalp checker"
                - "Show your helper the warning signs card and your baseline photos"
                - "Swap back and scalp checks with your helper @recurring(quarterly)"
                - "Record what your helper noticed in the skin record"
            - name: Yearly skin record review
              description: |-
                ## Purpose
                Twelve months of monthly notes, quarterly photos and watch list entries only help if someone looks at them together. Reviewing the year once and writing a half-page summary gives your doctor a clear picture at any appointment and shows whether your sun habits are actually holding.

                ## Milestones
                1. The year's self-check notes, photo sets and watch list read through together.
                2. New moles, changed moles and their outcomes summarised in half a page.
                3. Sunburns in the year counted and their causes noted.
                4. One change to next year's routine decided.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A half-page annual summary of new and changed moles, sunburns and one routine change is saved in your skin record each year."
                cadence: cyclic
              tasks:
                - "Gather the year's self-check notes, photos and watch list"
                - "Ask the agent to draft a half-page summary from your notes"
                - "Count the sunburns this year and note what caused each one"
                - "Write the yearly skin summary and choose one change for next year @recurring(yearly)"
            - name: Recognising basal cell and squamous cell skin cancers
              description: |-
                ## Purpose
                Non-melanoma skin cancers are far more common than melanoma and look nothing like a dark mole: a pearly bump, a scaly patch that keeps coming back, or a sore that bleeds and will not heal. Learning what they look like from reputable image libraries means you notice them during self-checks rather than dismissing them as a spot or a graze.

                ## Milestones
                1. Reputable image sources from a dermatology society or health service bookmarked.
                2. The usual appearance of basal cell carcinoma, squamous cell carcinoma and actinic keratosis summarised in your own words.
                3. The body areas where they appear most often noted, such as face, ears, scalp and backs of hands.
                4. Your self-check order updated to include them.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of how non-melanoma skin cancers and actinic keratoses usually look is saved, and your self-check order includes them."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Bookmark the skin cancer image pages of a dermatology society or health service"
                - "Write a short description of each type in your own words"
                - "Add face, ears, scalp and backs of hands to your self-check order"
                - "Add non-healing sores to your warning card using your health service's timescale"
            - name: How SPF, UVA ratings and application amounts work
              description: |-
                ## Purpose
                SPF measures protection against burning UVB only, UVA protection is labelled separately and differently by country, and most people apply about half the amount the SPF number was tested with. Understanding the labels and the amount needed explains why a factor 50 can still let you burn, and what to change.

                ## Milestones
                1. The difference between SPF and the UVA rating used in your country written down.
                2. The amount your health service recommends for the face and whole body noted in a familiar measure.
                3. Reapplication triggers listed: time outdoors, swimming, sweating and towelling.
                4. Your current application compared with the recommended amount.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note explaining SPF, UVA labelling, recommended amounts and reapplication triggers is saved, with your own usage compared against it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's guidance on sunscreen labels and amounts"
                - "Write the SPF and UVA labelling rules on one page"
                - "Measure out the recommended amount once to see what it looks like"
                - "List the moments when you usually forget to reapply"
            - name: UV, reflection and altitude
              description: |-
                ## Purpose
                Snow reflects most of the UV that hits it, water and sand add more, UV rises with altitude, and thin cloud lets much of it through. Knowing the conditions that raise exposure explains surprise burns on a cloudy beach, a ski slope or a boat, and tells you when to step protection up.

                ## Milestones
                1. A list of conditions that raise exposure: altitude, snow, water, sand, latitude and thin cloud.
                2. The shadow rule learned: a shadow shorter than you are means strong UV.
                3. Past burns matched to the conditions that caused them.
                4. A short personal list of situations that need extra protection.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal list of high-exposure situations, linked to past burns and the conditions behind them, is saved in your skin record."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service explainer on reflection, altitude and cloud"
                - "Check your shadow at midday on a sunny day to see the shadow rule"
                - "Match each past burn in your profile to the conditions that day"
                - "Write your personal list of situations that need extra protection"
            - name: Taking consistent mole photographs
              description: |-
                ## Purpose
                Photos taken in different light, at different angles or without a scale make a harmless mole look as if it has changed, or hide a real change. Practising one method, with diffuse daylight, a fixed distance, a ruler in shot and the camera parallel to the skin, makes every later comparison trustworthy.

                ## Milestones
                1. A written photo method covering light, distance, angle, focus and scale.
                2. A small paper ruler or adhesive scale bought or printed.
                3. Three practice photos of the same mole taken on different days and compared for consistency.
                4. The method saved where you will see it before each photo session.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written photo method exists and three practice shots of one mole match in colour, scale and angle."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Print or buy a small millimetre ruler or adhesive scale"
                - "Turn off the flash and find diffuse daylight near a window"
                - "Take three photos of one mole on different days using the same method"
                - "Write the method on a card kept with your phone stand"
            - name: Sun-protective clothing and hats
              description: |-
                ## Purpose
                Clothing protects without reapplication, but a thin white T-shirt can let a large share of UV through, and a baseball cap leaves the ears and neck bare. Learning to read UPF labels and choosing a hat with a wide brim or a neck flap gives you protection that lasts all day.

                ## Milestones
                1. UPF ratings understood and the rating worth paying for noted.
                2. Current hats sorted into those that shade face, ears and neck and those that do not.
                3. One wide-brim or legionnaire hat and one UPF long-sleeve top owned.
                4. The hat kept with your main sun kit.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You own at least one hat that shades face, ears and neck and one UPF-rated top, chosen after checking labels."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Sort your hats by whether they shade face, ears and the back of the neck"
                - "Read the UPF label rules used where you live"
                - "Buy one wide-brim or neck-flap hat and one UPF long-sleeve top"
                - "Pack the new hat with your main sun kit"
            - name: Medicines that increase sun sensitivity
              description: |-
                ## Purpose
                Some common antibiotics, water tablets, acne treatments, heart medicines and skin creams make skin burn or react far faster in the sun. A check with the pharmacist across everything you take, including creams and supplements, tells you which ones need extra protection and for how long.

                ## Milestones
                1. A full list of the tablets, creams and supplements you use written down.
                2. A pharmacist asked which of them increase sun sensitivity.
                3. Any sensitising medicine marked on your list with the advice given.
                4. A habit set of asking again whenever a new medicine starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every medicine you take has been checked with a pharmacist for sun sensitivity, and the advice is written on your medicine list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every tablet, cream and supplement you currently use"
                - "Ask your pharmacist which items increase sun sensitivity"
                - "Mark sensitising medicines and the advice given on your list"
                - "Ask about sun sensitivity each time a new medicine is started"
            - name: Sunglasses that block UV
              description: |-
                ## Purpose
                UV damages the eyes and the thin skin around them, and dark lenses without UV filtering can let more in because the pupils widen behind them. Checking that your sunglasses carry a UV400 or equivalent standard mark, ideally in a wrap or large frame, protects the eyes and eyelids, where skin cancers are easy to miss.

                ## Milestones
                1. Each pair of sunglasses in the house checked for a UV400 or equivalent standard mark.
                2. Pairs without a UV mark tested at an optician or replaced.
                3. One wraparound or large-frame pair owned for strong sun.
                4. Children's sunglasses checked to the same standard.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every pair of sunglasses in regular use in the household carries a UV400 or equivalent standard mark."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check every pair of sunglasses in the house for a UV400 or standard mark"
                - "Ask an optician to test any pair with no label"
                - "Choose a wraparound or large-frame pair for high sun"
                - "Replace scratched or unmarked pairs"
            - name: Choosing a mole tracking app or photo method
              description: |-
                ## Purpose
                Mole tracking apps range from simple photo organisers to tools that claim to assess cancer risk, and the difference matters. Comparing a plain private folder with two or three apps on privacy, side-by-side comparison, export and what they claim to do ends with one method you trust and will keep using.

                ## Milestones
                1. Criteria listed: privacy, where photos are stored, side-by-side view, export, cost and medical claims.
                2. Two or three apps compared with a plain photo folder.
                3. Any risk-scoring claims checked for medical device approval in your country.
                4. One method chosen and the baseline photos moved into it.

                ## Notes
                Apps that score moles are not a substitute for a clinician. Use any app as a record and a reminder, and show a worrying change to a doctor whatever the app says.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One mole tracking method is chosen after comparing at least three options on privacy and export, and your baseline photos are in it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what you need a tracking method to do"
                - "Compare two or three apps with a private folder on privacy and export"
                - "Check whether any app's risk scores are approved as a medical device"
                - "Move your baseline photos into the method you chose"
            - name: Giving up sunbeds for good
              description: |-
                ## Purpose
                Sunbed use, particularly when started young, is linked with a marked rise in melanoma risk, and many countries now ban them for under-18s. Replacing them with another way to get the look you want, or deciding you no longer want it, removes one of the few risk factors that is entirely yours to change.

                ## Milestones
                1. Your reasons for using sunbeds written down honestly.
                2. An alternative chosen for each reason, such as gradual tan for appearance.
                3. Any prepaid sessions or memberships cancelled.
                4. Three months passed with no sunbed sessions.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "No sunbed session has taken place for three months and any sunbed membership or prepaid course is cancelled."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the reasons you use sunbeds"
                - "Try a gradual tan or tinted moisturiser before the next planned session"
                - "Cancel any sunbed membership or prepaid course"
                - "Tell a friend you have stopped so they can hold you to it"
            - name: Vitamin D and sun avoidance question
              description: |-
                ## Purpose
                Strict sun protection, darker skin, covering clothing and long winters can all leave vitamin D low, and some people drop sunscreen in the belief that they need the sun. Asking your doctor whether you need a test or a supplement settles the question without trading away skin protection for it.

                ## Milestones
                1. Your possible risk factors for low vitamin D listed: skin colour, clothing, time indoors and latitude.
                2. Your doctor asked whether testing or a supplement is advised for you.
                3. The answer and any plan written in your skin record.
                4. Your sun protection routine kept unchanged unless your clinician says otherwise.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor's advice on vitamin D testing or supplements is recorded in your skin record, with your sun protection routine unchanged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the factors that might lower your vitamin D"
                - "Check your health service's public advice on vitamin D in winter"
                - "Ask your doctor whether a vitamin D test or supplement suits you"
                - "Write the advice in your skin record"
            - name: Lips, scalp and ears protection
              description: |-
                ## Purpose
                Lips, the parting, a thinning crown and the tops of the ears are burned often and protected rarely, and they are common sites for skin cancers. Adding an SPF lip balm, a hat that covers the scalp and a deliberate dab of sunscreen on the ears closes the gaps that face sunscreen misses.

                ## Milestones
                1. An SPF 30 or higher lip balm in every sun kit.
                2. A scalp-covering hat or a scalp sunscreen chosen for thinning hair or a parting.
                3. Tops of the ears and the back of the neck covered every time sunscreen goes on.
                4. A month passed with no burns on lips, scalp or ears.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "SPF lip balm is in every sun kit and a full month has passed with no burn on lips, scalp or ears."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Buy SPF lip balm for each sun kit"
                - "Choose a hat or scalp sunscreen that covers your parting or crown"
                - "Try a spray or powder sunscreen made for the scalp and hairline"
                - "Note any burn on lips, scalp or ears in your skin record"
            - name: Car and window UV exposure
              description: |-
                ## Purpose
                Side windows in many cars block much less UVA than the laminated windscreen, which is why people who drive for a living often show more sun damage on the side nearest the window. Checking your car's glass, and adding legal clear UV film or a sunscreen habit for the window side, deals with hours of exposure most people never count.

                ## Milestones
                1. The UV protection of your car's side windows checked in the handbook or with a glazier.
                2. Local rules on window film checked before buying any.
                3. Clear UV film fitted or a sunscreen habit for the window side adopted.
                4. Home windows beside a desk or favourite chair considered too.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The UV protection of your car's side windows is known, and either clear UV film is fitted or a window-side sunscreen habit is in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the car handbook or ask a glazier about side window UV protection"
                - "Look up the legal rules on window film where you live"
                - "Get a quote for clear UV-blocking film if the glass offers little protection"
                - "Keep sunscreen in the door pocket for long drives"
            - name: Shade for the garden, balcony or patio
              description: |-
                ## Purpose
                Time spent outdoors at home, gardening, eating or watching children play, is often the biggest share of summer sun and the least protected. Choosing a parasol, sail or pergola with a stated UV rating, sized and placed for the hours you actually sit out, adds shade you never have to remember.

                ## Milestones
                1. The hours and spots you use most in summer noted.
                2. Options compared on UV rating, size, wind stability and cost.
                3. A shade chosen and installed over the main seating or play area.
                4. The shade position checked at midday when the sun is highest.

                ## Notes
                Start from the **Purchase decision** template. Shade cuts direct UV but not reflected UV, so sunscreen still matters on long afternoons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A UV-rated shade covers the main seating or play area at midday, chosen after comparing at least three options."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Note when and where you sit outside most in summer"
                - "Compare three shade options on UV rating, size and wind stability"
                - "Install the chosen shade over the main seating or play area"
                - "Check at midday that the shade falls where people actually sit"
            - name: Deciding whether to pay for mole mapping
              description: |-
                ## Purpose
                Private clinics offer total body photography and automated mole mapping, which can help people with many or unusual moles and adds little for others. Asking your doctor whether you are in a group that benefits, and comparing what clinics include and charge, avoids both missing a useful service and paying for reassurance.

                ## Milestones
                1. Your doctor's view on whether mole mapping would help someone with your risk recorded.
                2. Two or three clinics compared on what is photographed, who reviews the images, follow-up and cost.
                3. Whether each clinic shares images and reports with your own doctor confirmed.
                4. A decision made and the reason written down.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on mole mapping, based on your doctor's view and a comparison of at least two clinics."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor whether mole mapping suits your risk level"
                - "Compare two or three clinics on who reviews the images and the follow-up offered"
                - "Check whether each clinic sends its reports to your own doctor"
                - "Write down your decision and the reason"
            - name: Sunburn response and record
              description: |-
                ## Purpose
                Every blistering burn adds to lifetime risk, and burns usually follow a pattern: the first warm day, falling asleep outside, forgetting to reapply after a swim. Having a plan for caring for a burn, knowing when it needs a doctor, and recording why it happened turns each one into a lesson rather than a repeat.

                ## Milestones
                1. Your health service's advice on sunburn care and when to seek help saved.
                2. Aftersun supplies kept with the household first aid kit.
                3. Each burn recorded with the date, place and cause.
                4. One change made after each burn to stop the cause recurring.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Sunburn care guidance is saved and every burn this year is recorded with its cause and the change made afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save your health service's sunburn advice, including when to seek help"
                - "Keep aftersun gel with the household first aid supplies"
                - "Add a sunburn log page to your skin record"
                - "Record the cause of any burn within a day of getting it"
            - name: Getting a changing mole seen by your doctor
              description: |-
                ## Purpose
                When a self-check or a helper finds a mole that has changed, the appointment works best if you arrive with evidence. Dated photos, measurements and a clear timeline help the doctor decide quickly whether to reassure, watch or refer, and make it harder for a real change to be brushed aside.

                ## Milestones
                1. An appointment booked within a week of noticing the change.
                2. Before and after photos, measurements and a short timeline prepared.
                3. The doctor's decision recorded: reassurance, watch with a review date, or referral.
                4. The next step booked or in the calendar before you leave.

                ## Notes
                If you are told to watch the mole, ask for a specific review date and what change should bring you back sooner.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The changed mole has been examined, the outcome and next step are recorded, and any review or referral date is in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a doctor's appointment as soon as you notice the change"
                - "Put the before and after photos of the mole side by side on one screen"
                - "Write a three-line timeline of what changed and when"
                - "Record the doctor's decision and any review date"
            - name: Preparing for a dermatology appointment
              description: |-
                ## Purpose
                Referrals for a suspicious mole often move fast, and the appointment itself can be short, with a dermatoscope examination and a decision on the spot. Preparing your photos, mole map, risk profile and questions in advance makes the time count and means you leave knowing what happens next.

                ## Milestones
                1. The referral, clinic and appointment time confirmed in writing.
                2. Mole map, photo comparisons, risk profile and medicine list packed.
                3. Questions written, including whether other moles should be checked while you are there.
                4. Findings, any planned procedure and the follow-up route written down after the visit.

                ## Notes
                Wear clothing that is easy to remove, and leave off nail varnish and make-up so nails and face can be examined properly.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attend the dermatology appointment with your photos and map, and leave with the findings and next step recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Call the clinic if no appointment letter arrives within the timescale given"
                - "Pack your mole map, photos, risk profile and medicine list"
                - "Write three questions to ask the dermatologist"
                - "Write down the findings and next step on the way home"
            - name: Mole removal, biopsy and result follow-up
              description: |-
                ## Purpose
                After a mole is removed the wound needs care, and the laboratory result can take a few weeks and occasionally goes astray. Planning the aftercare and knowing exactly when and how you will hear the result means a missing letter is chased rather than taken as good news.

                ## Milestones
                1. Aftercare instructions, stitch removal date and signs of infection written down.
                2. The date and route by which the result will arrive confirmed.
                3. The result received and a copy of the pathology report requested for your record.
                4. Any further treatment or follow-up booked.

                ## Notes
                No news is not good news. If the result has not arrived by the date you were given, call the clinic.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The biopsy result is received and filed in your skin record, and any follow-up the result requires is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask before the procedure when and how the result will reach you"
                - "Put the stitch removal date and wound care steps in your calendar"
                - "Call the clinic if the result has not arrived by the date given"
                - "File a copy of the pathology report in your skin record"
            - name: Sun plan for a beach or hot-country holiday
              description: |-
                ## Purpose
                A week near the equator or on a beach can put more UV on your skin than months at home, and most bad holiday burns happen in the first two days. Planning protection alongside the itinerary, with shade at midday, rash vests for the water and enough sunscreen for every day, keeps the trip from ending with a peeling back.

                ## Milestones
                1. The usual UV index at your destination checked for your travel dates.
                2. Enough sunscreen packed for the whole stay, worked out from the recommended amount.
                3. Midday hours planned indoors or in shade.
                4. A mole photo set taken before the trip and compared after it.

                ## Notes
                Start from the **Trip** template. Buying sunscreen abroad is fine, but check its UVA marking is one you recognise.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You come home from the trip with no sunburn, having packed enough sunscreen and planned midday shade from the itinerary."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the typical UV index at your destination for your dates"
                - "Work out how much sunscreen the trip needs and pack it"
                - "Pack a rash vest and a wide-brim hat"
                - "Plan the midday hours of each beach day around shade"
            - name: Long outdoor day plan
              description: |-
                ## Purpose
                Festivals, outdoor weddings, sports days and all-day matches keep you in the sun for six to ten hours with few chances to reapply or find shade. Packing for the whole day, setting reapplication reminders and knowing where the shade will be prevents the burn that shows up in every photo.

                ## Milestones
                1. Hours outdoors and available shade at the venue checked in advance.
                2. Sunscreen, hat, sunglasses, lip balm and water packed for the full day.
                3. Two-hourly reapplication reminders set on your phone.
                4. The day finished without a burn.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full outdoor day is completed with sunscreen reapplied at least every two hours and no burn the next morning."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check the venue for shade, tents or covered seating"
                - "Pack sunscreen in a size you can carry all day"
                - "Set phone reminders to reapply every two hours"
                - "Note in your sunburn log whether the plan worked"
            - name: Sun safety for children in the household
              description: |-
                ## Purpose
                Burns in childhood count heavily towards later skin cancer risk, and children cannot protect themselves. A household plan, with babies kept out of direct sun, hats and sunscreen built into getting ready, and the nursery or school's sun policy known, protects them on the days you are not there.

                ## Milestones
                1. Your health service's advice for babies and children in the sun saved.
                2. Each child's hat, sunglasses and sunscreen chosen and labelled.
                3. The nursery or school's sun policy read and any permission forms returned.
                4. Sunscreen built into the getting-ready routine on school and holiday days.

                ## Notes
                Advice for babies under six months is different, so check with a health visitor or pharmacist before using sunscreen on a young baby.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every child in the household has a labelled hat and sunscreen, and the school or nursery sun policy has been read and acted on."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's sun advice for babies and children"
                - "Label each child's hat and sunscreen with their name"
                - "Ask the school or nursery for its sun protection policy"
                - "Replace children's sunscreen and check their hats still fit @recurring(yearly)"
            - name: Sun plan for endurance training and races
              description: |-
                ## Purpose
                Runners, cyclists and triathletes spend hours outdoors at peak UV, sweat sunscreen off and rarely stop to reapply, and some studies of marathon runners have found more unusual moles than average. A training sun plan, with session timing, sweat-resistant products and reapplication built into long sessions and race kit, protects skin without costing you time.

                ## Milestones
                1. Long sessions moved outside the peak UV hours where the training plan allows.
                2. A sweat-resistant sunscreen and a stick for reapplying on the move chosen.
                3. Reapplication points built into long rides, long runs and race plans.
                4. Race kit checked for coverage, such as sleeves, a cap with a neck flap and UV sunglasses.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every long session in the past month used sweat-resistant sunscreen, with at least one reapplication on sessions over two hours."
                cadence: rolling
              tasks:
                - "Move long sessions in your training plan away from midday where you can"
                - "Choose a sweat-resistant sunscreen and a stick for reapplying on the move"
                - "Pack sunscreen and a cap in the kit bag before the weekend long session @recurring(weekly:sat)"
                - "Add a reapplication point to your race day checklist"
            - name: Sun protection for swimming and water sports
              description: |-
                ## Purpose
                Water reflects UV, washes sunscreen off and keeps skin cool so burns go unnoticed until evening, which makes outdoor swimmers, surfers, rowers and sailors some of the most exposed athletes. Water-resistant sunscreen, a rash vest or wetsuit top and a routine for reapplying after every session keep training from adding up to years of damage.

                ## Milestones
                1. A sunscreen labelled water resistant chosen, with the time its label claims noted.
                2. A rash vest, UPF swim top or wetsuit top owned for outdoor sessions.
                3. Reapplication after towelling made part of the post-session routine.
                4. Lips, nose and ears covered with a stick or zinc product.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Outdoor water sessions in the past month were done with water-resistant sunscreen and a rash vest or wetsuit top, reapplying after each."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check how long your sunscreen's water resistance label claims"
                - "Buy a rash vest or UPF swim top for outdoor sessions"
                - "Keep a zinc stick for lips, nose and ears in your swim bag"
                - "Reapply sunscreen after towelling off at the end of each session"
            - name: Sun protection for snow sports and mountains
              description: |-
                ## Purpose
                Fresh snow reflects up to about 80 percent of UV and UV rises with altitude, so skiers, climbers and mountain walkers burn under the chin and nose on cold days. Planning protection for the mountains, including goggles or high-category glacier glasses, catches the burns people least expect in winter.

                ## Milestones
                1. Altitude and snow cover for your trip or route checked.
                2. High-protection sunscreen and SPF lip balm that cope with the cold packed.
                3. Goggles or category 3 or 4 sunglasses with side protection owned.
                4. Under the chin, nose and ears included in your mountain routine.

                ## Notes
                Category 4 lenses are too dark for driving. Keep a second pair for the drive.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A mountain or snow trip is completed with no burn, using high-protection sunscreen, SPF lip balm and goggles or category 3 or 4 lenses."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Check the altitude and expected snow cover of your trip"
                - "Pack a high-protection sunscreen and lip balm suited to the cold"
                - "Choose goggles or high-category sunglasses with side shields"
                - "Add under the chin, nose and ears to your mountain sunscreen routine"
            - name: Outdoor work and employer sun protection
              description: |-
                ## Purpose
                Builders, farmers, gardeners, postal workers and lifeguards can receive several times the yearly UV of indoor workers, and in many countries employers must assess and manage that risk. Asking what your employer provides, planning heavier outdoor tasks around peak UV and keeping kit at work makes protection part of the job rather than an afterthought.

                ## Milestones
                1. Your employer's sun policy or risk assessment requested and read.
                2. Shade, breaks, sunscreen and protective clothing provided at work confirmed.
                3. Peak UV hours planned around where the work allows.
                4. A work sun kit kept at the site, in the van or in a locker.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your employer's sun policy has been read, a work sun kit is kept on site, and the weekly UV forecast is used to plan outdoor tasks."
                cadence: rolling
              tasks:
                - "Ask your manager or safety representative for the workplace sun policy"
                - "Check which sun protection kit your employer provides"
                - "Check the week's UV forecast and plan the heaviest outdoor jobs for early or late @recurring(weekly:mon)"
                - "Keep a sun kit in your locker, van or site bag"
            - name: Skin checks for darker skin tones
              description: |-
                ## Purpose
                Skin cancer is less common in darker skin but is more often found late, partly because melanoma in black and brown skin tends to appear on the palms, soles, under the nails and in the mouth, places people rarely look. Adjusting self-checks to these sites and knowing what to look for, such as a new dark streak in a nail, makes early detection as possible as for anyone else.

                ## Milestones
                1. Palms, soles, nail beds, inside the mouth and the genital area added to your self-check order.
                2. A new or widening dark streak in a nail noted on your card as a sign to report.
                3. Your photo set extended to include palms, soles and every nail.
                4. Your doctor asked what sun protection is advised for your skin.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your self-check order and photo set include palms, soles, nails and mouth, and the signs of melanoma in these sites are on your warning card."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add palms, soles, nail beds and inside the mouth to your self-check order"
                - "Photograph your palms, soles and every nail"
                - "Add a new or widening dark nail streak to your warning card"
                - "Ask your doctor what sun protection is advised for your skin"
            - name: Mole changes during pregnancy
              description: |-
                ## Purpose
                Pregnancy hormones can darken moles and skin and cause new patches of pigment, which makes it harder to tell normal change from a mole that needs checking. Taking a photo set early in pregnancy and asking the midwife or doctor to look at any mole that changes keeps real warning signs from being put down to hormones.

                ## Milestones
                1. A full mole photo set taken as early in pregnancy as possible.
                2. Any mole that changes during pregnancy shown to the midwife or doctor.
                3. Face sunscreen kept up, as pregnancy can make skin more prone to patchy pigmentation.
                4. A post-birth photo set taken and compared with the early one.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Photo sets from early pregnancy and after the birth have been compared, and every changing mole was shown to a clinician."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Take a full mole photo set as early in pregnancy as you can"
                - "Mention any changing mole at your next antenatal appointment"
                - "Keep face sunscreen in your hospital bag and changing bag"
                - "Take a fresh photo set a few months after the birth"
            - name: Sun-damaged skin in later life
              description: |-
                ## Purpose
                Decades of sun show up after 50 as rough scaly patches, new spots and pearly lumps on the face, scalp, ears and hands, and most skin cancers are diagnosed in this age group. A monthly look at the most exposed skin, a partner checking the scalp, and prompt reporting of any spot that bleeds or will not heal catch the common cancers while treatment is simple.

                ## Milestones
                1. Face, scalp, ears, lips, forearms and backs of hands made the focus of monthly checks.
                2. Rough patches and new spots photographed and dated.
                3. Any spot that bleeds, crusts or does not heal reported to your doctor.
                4. Sun protection continued, as sun damage still builds up later in life.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly checks of face, scalp, ears and hands are recorded for six months, and every non-healing spot has been reported to a doctor."
                cadence: rolling
              tasks:
                - "Ask a partner or friend to look over your scalp and the backs of your ears"
                - "Check face, scalp, ears and backs of hands for rough or crusted spots @recurring(monthly:8)"
                - "Photograph any new spot with the date in the file name"
                - "Book an appointment for any spot that bleeds or has not healed"
            - name: Sun safety policy for a sports club or team
              description: |-
                ## Purpose
                Coaches and club volunteers decide when training happens, whether there is shade beside the pitch and whether sunscreen is mentioned at all, for dozens of players at once. Writing a short sun policy covering session timing, shade, kit rules and sunscreen at the clubhouse protects juniors and adults alike and gives parents something clear to read.

                ## Milestones
                1. Sun policies from other clubs or the sport's governing body reviewed.
                2. A one-page policy drafted covering timing, shade, clothing, sunscreen and drinks breaks.
                3. The policy agreed by the committee and shared with coaches and parents.
                4. Shade and a sunscreen dispenser in place at the main venue.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A sun safety policy approved by the committee has been shared with coaches and members, with shade and sunscreen in place at the main venue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the sport's governing body for any sun safety guidance"
                - "Ask the agent to draft a one-page club sun policy from your notes"
                - "Present the draft to the committee for approval"
                - "Review the sun policy with coaches before each outdoor season @recurring(yearly)"
            - name: Living with many or atypical moles
              description: |-
                ## Purpose
                People with more than about a hundred moles, or several atypical moles, carry a higher melanoma risk and often find self-checks overwhelming because something always looks different. Agreeing a structured surveillance plan with dermatology, often combining total body photography and dermoscopy follow-up with your own photo checks, keeps the job manageable and the comparisons meaningful.

                ## Milestones
                1. A dermatology surveillance plan agreed, saying what is checked at each visit and how often.
                2. Your photo record organised to match the clinic's numbering or images where possible.
                3. A clear rule agreed for when to come back between visits.
                4. Each surveillance visit's findings filed in your skin record.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written surveillance plan from dermatology is in your skin record, with findings from every visit filed and the next visit booked."
                cadence: rolling
              tasks:
                - "Ask your dermatologist for a written surveillance plan"
                - "Ask whether the clinic can share its baseline images with you"
                - "Book the dermoscopy follow-up at the interval your dermatologist sets @recurring(yearly)"
                - "Write down the kind of change that should bring you back early"
            - name: Life after a melanoma or skin cancer diagnosis
              description: |-
                ## Purpose
                After treatment for melanoma or another skin cancer, follow-up visits, closer self-checks, lymph node checks and stricter sun protection become part of life, sometimes for five years or more. Writing down the follow-up schedule your team sets, and what you check yourself between visits, means nothing depends on a letter arriving.

                ## Milestones
                1. The follow-up schedule from your specialist team written down with dates.
                2. Self-examination of skin and the lymph node areas you were shown added to your monthly routine.
                3. First-degree relatives told about the diagnosis, as their own risk may be higher.
                4. A contact for the specialist nurse saved for questions between visits.

                ## Notes
                Your team's instructions override anything general in this area. Ask them to show you how to check the lymph nodes they are interested in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your follow-up schedule and self-check routine are written in your skin record, and every scheduled follow-up in the past year was attended."
                cadence: rolling
              tasks:
                - "Put the follow-up schedule your specialist team gave you in your calendar"
                - "Ask the specialist nurse to show you how to check your lymph nodes"
                - "Tell parents, siblings and children about the diagnosis"
                - "Do the self-examination your team asked for, including lymph node areas @recurring(monthly:5)"
            - name: Skin surveillance with a transplant or immunosuppression
              description: |-
                ## Purpose
                Organ transplant recipients and others on long-term immune-suppressing medicines develop squamous cell skin cancers many times more often than other people, and these can grow faster. Agreeing a skin surveillance plan with the transplant or specialist team, alongside strict daily protection and fast reporting of new crusted spots, becomes a standing part of living with the treatment.

                ## Milestones
                1. Your specialist team asked how often your skin should be examined professionally.
                2. Daily sun protection in place on the face, scalp, ears and hands.
                3. New or fast-growing crusted spots photographed and reported within days.
                4. Each skin examination and its findings recorded.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A skin surveillance interval agreed with your specialist team is recorded, and every new crusted or fast-growing spot in the past year was reported."
                cadence: rolling
              tasks:
                - "Ask your transplant or specialist team how often your skin should be examined"
                - "Photograph and report any new crusted or fast-growing spot within days"
                - "Record each skin examination and its findings in your skin record"
                - "Confirm your skin check interval with the specialist team at each annual review @recurring(yearly)"
            - name: Home dermatoscope and sequential imaging
              description: |-
                ## Purpose
                Smartphone dermatoscope attachments magnify a mole under polarised light and show structure invisible in a normal photo, and some dermatologists welcome sequential images from patients they already follow. Used with your dermatologist's agreement it sharpens your watch list; used without guidance it produces worrying images you cannot interpret.

                ## Milestones
                1. Your dermatologist asked whether home dermoscopy images would help them.
                2. An attachment chosen that fits your phone and gives consistent polarised images.
                3. A baseline dermoscopic image of each watched mole taken.
                4. Sequential images taken at the agreed interval and shared only as your dermatologist asks.

                ## Notes
                Do not try to diagnose from dermoscopic images yourself. Their value is in consistent comparison for the clinician who knows your moles.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Dermoscopic images of each watched mole have been taken at least twice, at the interval agreed with your dermatologist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your dermatologist whether home dermoscopy images would be useful"
                - "Choose an attachment that fits your phone and uses polarised light"
                - "Take a baseline dermoscopic image of each watched mole"
                - "Take sequential dermoscopic images of watched moles @recurring(quarterly)"
---

# Sun Safety & Mole Monitoring

This area is for anyone who spends time in the sun, from commuters and gardeners to runners, swimmers and skiers, and for anyone with moles worth keeping an eye on. It starts with the foundations (your skin type and risk factors, a baseline photo set and body map, a sunscreen you will wear and a warning signs card), then the routines of monthly self-checks, quarterly photos and daily protection, the skills of reading labels, UV and your own skin, the decisions about apps, sunbeds and mole mapping, the appointments and holidays that need planning, the situations of children, athletes, outdoor workers and different skin tones, and finally the surveillance that follows a diagnosis or a high-risk treatment.

What repeats is a daily UV check and morning sunscreen, a monthly self-examination, quarterly photo updates and back checks, a weekly kit check before long training sessions, and a yearly sun season reset and skin record review. The Purchase decision, Metrics log, Habit tracker and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
