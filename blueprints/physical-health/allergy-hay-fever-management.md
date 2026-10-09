---
id: physical-health.allergy-hay-fever-management
name: Allergy & Hay Fever Management
description: "A symptom diary, your pollen season and a clear diagnosis, then seasonal medicine routines, home allergen control, auto-injector readiness and plans for children at school and away."
category: personal
version: 1.0.0
tags: [physical-health, allergy-hay-fever-management, everyone, parent, hay-fever, pollen, anaphylaxis, food-allergy]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - trip
    - weekly-meal-plan
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Allergy & Hay Fever Management
          description: "Handling seasonal and year-round allergies with testing, antihistamine plans, pollen forecasts and emergency adrenaline planning for severe reactions in adults and children."
          projects:
            - name: Allergy symptom and trigger diary
              description: |-
                ## Purpose
                Hay fever and year-round allergies look different from week to week, and memory is a poor witness by the time you see a doctor. A short daily score for nose, eyes, chest and sleep, set beside the pollen level and where you were, shows within a month or two which triggers matter and whether your medicines are doing anything.

                ## Milestones
                1. A diary with columns for date, nose, eyes, chest, sleep, medicines taken, pollen level and notes.
                2. A simple 0 to 3 score agreed for each symptom so entries stay comparable.
                3. At least four weeks of entries covering both good and bad days.
                4. A one-paragraph summary of the clearest patterns, ready to show your clinician.

                ## Notes
                Start from the **Metrics log** template. Record any wheeze or tight chest separately: those belong in front of a clinician, not only in a diary.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A diary holding at least four weeks of scored entries and a short written summary of the main triggers."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a symptom diary from the metrics log template"
                - "Agree a 0 to 3 score for nose, eyes, chest and sleep"
                - "Add the day's pollen level from your forecast to each entry"
                - "Total the week's scores and note the worst day @recurring(weekly:sun)"
            - name: Identifying your pollen season
              description: |-
                ## Purpose
                Tree pollen usually peaks in late winter and spring, grass pollen in early summer, and weed pollen and outdoor mould spores into late summer and autumn, though timing shifts with region and weather. Matching the weeks you suffer most against a local pollen calendar tells you which season is yours and when preventive treatment should start next year.

                ## Milestones
                1. A pollen calendar for your region saved where you can find it.
                2. The weeks of your worst symptoms over the past two years marked on it, from diary, memory or prescription dates.
                3. A best guess at your main pollen type written down, for testing to confirm or rule out.
                4. Year-round symptoms noted separately as a sign of indoor triggers such as mites, pets or mould.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your likely pollen type and the usual start week of your season are written down, with the source calendar saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a pollen calendar published for your region"
                - "Check past prescription or pharmacy receipt dates for your worst months"
                - "Mark your worst weeks against tree, grass and weed seasons"
                - "Write down the pollen type that fits your pattern best"
            - name: Pollen forecast and alert set-up
              description: |-
                ## Purpose
                Pollen counts can swing from low to very high within a day as wind, heat and rain change. Picking one reliable forecast source and setting alerts at the level that affects you lets you close windows, plan outdoor time and take medicines before symptoms build rather than after.

                ## Milestones
                1. One forecast source chosen that covers your area and your pollen type.
                2. Alerts switched on for high and very high days.
                3. The level at which your symptoms usually start noted from your diary.
                4. Household members who also react added to the same alerts.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Pollen alerts for your area are on, set at the level your diary shows you react to, and shared with household members who need them."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare two pollen forecast sources for your area and pollen type"
                - "Turn on alerts for high and very high pollen days"
                - "Note the pollen level at which your symptoms usually begin"
                - "Add affected household members to the same alerts"
            - name: Doctor's appointment to confirm allergic rhinitis
              description: |-
                ## Purpose
                A blocked or running nose that lasts for weeks can be allergy, but it can also be infection, a structural problem or a side effect of another medicine. One focused appointment, with your diary and a list of what you have already tried, confirms the diagnosis and gives you a first-line plan instead of a cupboard of guesses.

                ## Milestones
                1. Your diary summary and a list of every allergy medicine already tried brought to the appointment.
                2. A diagnosis recorded, or the further tests your doctor wants.
                3. A first-line treatment plan written down, with what to do if it is not enough after a few weeks.
                4. Any symptoms your doctor wants reported promptly noted, such as one-sided blockage or nosebleeds.

                ## Notes
                Mention any wheeze, night-time cough or breathlessness, since hay fever and asthma often travel together and both need treating.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appointment attended with a recorded diagnosis or test plan, and a written first-line treatment plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment with your doctor about persistent nose or eye symptoms"
                - "List every allergy medicine you have tried and how well it worked"
                - "Write your three main questions on one page"
                - "Record the diagnosis and the agreed plan the same day"
            - name: Severe reaction risk check with your clinician
              description: |-
                ## Purpose
                Anyone who has had swelling of the lips or tongue, trouble breathing or collapse after a food, sting or medicine needs a clinician to judge the risk of a worse reaction next time. That conversation decides whether you or your child should carry adrenaline, how many devices to carry, and whether a specialist referral is needed.

                ## Milestones
                1. Every past reaction written up with date, suspected trigger, symptoms, timing and treatment.
                2. A clinician's view recorded on whether adrenaline auto-injectors should be prescribed.
                3. The number of devices to carry agreed and prescribed, if needed.
                4. A referral to an allergy clinic made or explicitly ruled out.

                ## Notes
                Do not wait for the appointment if a reaction is happening: severe symptoms are an emergency call.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician's decision about adrenaline and specialist referral is recorded, with any prescription collected."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a timeline of every past reaction and its suspected trigger"
                - "Book an appointment to talk through the risk of a severe reaction"
                - "Ask whether auto-injectors are needed and how many to carry"
                - "Record the decision and any referral in the household register"
            - name: Written allergy action plan
              description: |-
                ## Purpose
                When a reaction starts, nobody reads a leaflet: they follow whatever is in front of them. A one-page action plan checked by your clinician, listing mild and severe signs and exactly what to do for each, turns panic into a sequence anyone at home, school or work can follow.

                ## Milestones
                1. A standard allergy action plan form obtained from your clinician or a recognised allergy charity.
                2. The form completed with allergens, mild signs, severe signs and the steps for each.
                3. The plan checked and signed by your clinician.
                4. Copies kept with each auto-injector, at home and at work or school.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clinician-checked action plan is filled in, with copies stored beside every auto-injector."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download a standard allergy action plan form from a recognised allergy charity"
                - "Fill in allergens, mild and severe signs and the steps for each"
                - "Ask your clinician to check and sign the completed plan"
                - "Reread the action plan on its anniversary and after any reaction @recurring(yearly)"
            - name: Household allergy register
              description: |-
                ## Purpose
                In a household where two or three people have allergies, the details live in different heads: who reacts to what, how badly, and which medicine is in which bag. One shared page with each person's allergens, past reactions, medicines and emergency contacts means a partner, grandparent or babysitter can act correctly without phoning you first.

                ## Milestones
                1. One entry per household member listing allergens, the worst reaction so far and how it was treated.
                2. Current allergy medicines and where they are kept noted for each person.
                3. Emergency contacts and each person's doctor added.
                4. The register printed or shared with every adult who looks after the household.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register covering every household member with allergies, shared with each adult who regularly cares for them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every household member with a known allergy"
                - "Write each person's allergens and worst reaction so far"
                - "Note where each person's allergy medicines are kept"
                - "Share the register with the other adults who look after the household"
            - name: Allergy medicine cabinet stocktake
              description: |-
                ## Purpose
                Most homes hold half-used antihistamines, old eye drops and a decongestant spray nobody remembers buying, some out of date or unsuitable for the children in the house. Sorting them once, and checking labels with a pharmacist where unsure, leaves a small kit you can trust when symptoms start at night.

                ## Milestones
                1. Every allergy medicine in the house gathered in one place.
                2. Expired items returned to a pharmacy for safe disposal.
                3. Each remaining item labelled with who it is for and whether it causes drowsiness.
                4. A short list of gaps taken to your pharmacist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sorted allergy kit with no expired items, each item labelled with its user, and a list of gaps checked with a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Gather every antihistamine, spray and eye drop in the house"
                - "Take expired items back to a pharmacy for disposal"
                - "Label each item with who it is for and any drowsiness warning"
                - "Check expiry dates across the allergy kit before the season starts @recurring(yearly)"
            - name: Pre-season treatment start date
              description: |-
                ## Purpose
                Preventive steroid nasal sprays usually take days to reach full effect, so starting them once sneezing has begun means a rough first fortnight. Agreeing with your doctor or pharmacist when to begin, based on the start week of your pollen season, gives you a dated plan to repeat every year.

                ## Milestones
                1. The usual start week of your season taken from your pollen calendar.
                2. A start date for preventive treatment agreed with your doctor or pharmacist.
                3. The medicines you need at home by that date listed.
                4. A yearly reminder set a few weeks ahead of the start date.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A pre-season start date agreed with a clinician or pharmacist is written down, with a yearly reminder set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up the usual start week of your pollen season"
                - "Ask your pharmacist or doctor how far ahead to start preventive treatment"
                - "List the medicines you need at home by the start date"
                - "Order supplies three weeks before your agreed start date @recurring(yearly)"
            - name: Daily hay fever medicine routine in season
              description: |-
                ## Purpose
                Nasal steroid sprays and daily antihistamines work best taken every day through the season, yet many people take them only on bad days and then decide they do not work. Tying them to a fixed point in the day, such as brushing your teeth, and ticking them off keeps treatment steady enough to judge fairly.

                ## Milestones
                1. Each in-season medicine linked to a fixed daily anchor.
                2. A tick-off record running from the agreed start date to the end of the season.
                3. Missed days kept under one in seven across the season.
                4. Any side effects such as nosebleeds or drowsiness noted for your next review.

                ## Notes
                Start from the **Habit tracker** template. Agree with your pharmacist which medicines are meant for daily use and which only as needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily in-season medicines are recorded with fewer than one missed day in seven through the pollen season."
                cadence: rolling
              tasks:
                - "Set up a tracker for in-season medicines from the habit tracker template"
                - "Keep the nasal spray next to your toothbrush during the season"
                - "Tick off the day's allergy medicines at the same time each day @recurring(daily)"
                - "Write any nosebleeds or drowsiness in the diary notes column"
            - name: Pollen-day routine at home
              description: |-
                ## Purpose
                Pollen comes indoors on hair, clothes, pets and through open windows, then settles on pillows overnight. A short set of house rules for high-count days, agreed with everyone at home, cuts night-time exposure without anyone living behind closed doors all summer.

                ## Milestones
                1. A written list of five or six house rules for high pollen days.
                2. Rules covering windows, drying laundry, showering after time outdoors and pets.
                3. Everyone in the household aware of the rules and where they are posted.
                4. The routine tested for two weeks and adjusted against the symptom diary.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A posted list of high-pollen-day house rules has been followed for two weeks and checked against diary scores."
                cadence: rolling
              tasks:
                - "Write five house rules for high pollen days"
                - "Set up an indoor drying spot for laundry in peak season"
                - "Post the rules where everyone at home will see them"
                - "Compare two weeks of diary scores before and after the routine"
            - name: Auto-injector expiry and replacement cycle
              description: |-
                ## Purpose
                Adrenaline auto-injectors usually last only a year or so, and an expired or discoloured device may not work properly when it is needed. Keeping a list of every device, where it lives and when it expires, with a monthly glance at the dates, means replacements arrive before the old ones lapse.

                ## Milestones
                1. Every device in the household listed with owner, location and expiry date.
                2. Manufacturer expiry alerts registered where offered.
                3. Replacement prescriptions requested at least a month before each expiry.
                4. Expired devices returned to a pharmacy for safe disposal.

                ## Notes
                Store devices as the leaflet says, usually at room temperature, and check the viewing window, if there is one, for clear liquid.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every auto-injector in the household is listed with its expiry date and none passes its date without a replacement in hand."
                cadence: cyclic
              tasks:
                - "List every auto-injector with owner, location and expiry date"
                - "Register each device with the maker's expiry alert service where offered"
                - "Check the expiry list and viewing window on every device @recurring(monthly:14)"
                - "Request a replacement prescription a month before any expiry"
            - name: Weekly dust mite bedroom routine
              description: |-
                ## Purpose
                House dust mite allergy causes year-round blocked noses that are often worst on waking, and the bedroom is where exposure is highest. A weekly routine of hot-washing bedding, damp dusting and vacuuming, plus allergen-proof covers if testing confirms mite allergy, keeps levels down where it counts.

                ## Milestones
                1. Bedding that can be washed hot identified, and anything that cannot noted.
                2. Allergen-proof mattress and pillow covers in place, if testing confirms mite allergy.
                3. Soft toys and clutter that collect dust reduced in the bedroom.
                4. The weekly routine running for a month, with morning symptoms noted before and after.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly bedroom routine has run for four weeks with morning nose scores recorded before and after."
                cadence: rolling
              tasks:
                - "Check which bedding labels allow a hot wash"
                - "Price allergen-proof mattress and pillow covers"
                - "Wash bedding hot and damp-dust the bedroom @recurring(weekly:sat)"
                - "Compare morning nose scores after four weeks of the routine"
            - name: Pet allergen control at home
              description: |-
                ## Purpose
                Cat and dog allergen sticks to furniture, carpets and clothes and can linger for months, yet many owners with milder allergy keep their pets by following a few firm rules. Keeping animals out of bedrooms, cleaning upholstery often and having someone without allergy do the grooming reduces the load without rehoming anyone.

                ## Milestones
                1. Bedrooms made pet-free, with the rule agreed by the household.
                2. Pet bedding and the sofa added to a weekly cleaning routine.
                3. Grooming moved outdoors and handed to a non-allergic person where possible.
                4. Symptom scores compared over six weeks to see whether the changes help.

                ## Notes
                If symptoms include wheeze, or are getting worse despite these steps, talk to your clinician before deciding anything about the pet.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pet-free bedroom and a weekly pet cleaning routine have run for six weeks with symptom scores compared before and after."
                cadence: rolling
              tasks:
                - "Agree with the household that bedrooms are pet-free"
                - "Move pet grooming outdoors and to someone without allergy"
                - "Wash pet bedding and vacuum the sofa @recurring(weekly:wed)"
                - "Compare six weeks of symptom scores against the period before"
            - name: Quarterly damp and mould check
              description: |-
                ## Purpose
                Indoor mould grows behind furniture, around window frames and in bathrooms, and its spores keep allergy symptoms going all year. A quarterly walk round with a torch, plus a humidity reading in the worst room, catches patches while they are small and gives a landlord written evidence if repairs are needed.

                ## Milestones
                1. A checklist of the rooms and spots most prone to damp in your home.
                2. A low-cost humidity meter placed in the dampest room.
                3. Mould patches photographed, dated and treated or reported.
                4. Any repair request to a landlord sent in writing with photos attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly checks are recorded in a year, each with photos of any mould found and the action taken."
                cadence: cyclic
              tasks:
                - "Write a list of the damp-prone spots in your home"
                - "Put a humidity meter in the dampest room"
                - "Walk the house with a torch and photograph any mould @recurring(quarterly)"
                - "Send any repair request to your landlord in writing with photos"
            - name: Annual allergy review before the season
              description: |-
                ## Purpose
                Allergy treatment drifts: children grow, new triggers appear, and an action plan written three years ago may no longer fit. A yearly review a month or two before your season, with your diary summary and device list in hand, keeps prescriptions, plans and school paperwork current.

                ## Milestones
                1. Last season's diary summary and medicine list ready before the appointment.
                2. The review booked a month or two before your usual season starts.
                3. Prescriptions, action plans and auto-injector needs confirmed or updated.
                4. Changes recorded and passed to school, work or carers as needed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A review is held before each pollen season, with prescriptions and action plans confirmed or updated in writing."
                cadence: cyclic
              tasks:
                - "Book your annual allergy review two months before your season @recurring(yearly)"
                - "Bring last season's diary summary and medicine list"
                - "Ask whether the action plan and device numbers still fit"
                - "Pass any changes to school, work or carers within a week"
            - name: Allergy prescriptions ordered ahead of need
              description: |-
                ## Purpose
                Repeat prescriptions for nasal sprays, eye drops and auto-injectors tend to run out on a high pollen weekend, when pharmacies are short and surgeries are closed. A monthly check of what is left, with orders placed a week before you need them, keeps the season unbroken.

                ## Milestones
                1. Every allergy item on repeat prescription listed with how long a pack lasts.
                2. An ordering route set up, such as online repeat requests or a pharmacy collection service.
                3. A monthly stock check in the calendar.
                4. No gaps in supply recorded across one full season.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A full pollen season passes with no day missing an allergy medicine because of a late prescription."
                cadence: rolling
              tasks:
                - "List each repeat allergy item and how long a pack lasts"
                - "Set up online repeat ordering with your surgery or pharmacy"
                - "Count remaining doses and order anything running low @recurring(monthly:19)"
                - "Note any shortage and the substitute the pharmacist offered"
            - name: End-of-season allergy debrief
              description: |-
                ## Purpose
                Once the pollen season ends, the details of how it went fade within weeks. A one-hour debrief comparing diary scores with the forecast and the medicines you used shows what worked, what started too late and what to raise at the next annual review.

                ## Milestones
                1. The season's weekly diary totals laid out in one table.
                2. The weeks with the highest scores matched against pollen levels.
                3. A short list of what worked, what did not and what started too late.
                4. Three points for next year's review written into its appointment note.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written debrief of the season, with three points for next year's review, saved with your allergy records."
                cadence: cyclic
              tasks:
                - "Ask the agent to summarise the season's weekly diary totals"
                - "Match the worst weeks against the recorded pollen levels"
                - "Write what worked, what did not and what started late"
                - "Hold the end-of-season debrief as your pollen type winds down @recurring(yearly)"
            - name: Nasal spray technique
              description: |-
                ## Purpose
                Most people using a steroid nasal spray aim it straight up or at the middle of the nose, which wastes the medicine and can cause nosebleeds. Ten minutes with the leaflet or a pharmacist, practising the head angle and direction, makes the same spray work better.

                ## Milestones
                1. The leaflet's instructions read for your specific spray.
                2. Technique checked by a pharmacist or against the maker's instructions.
                3. The spray used with the angle and direction the leaflet describes.
                4. Children's technique checked too, if they use a spray.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your nasal spray technique has been checked by a pharmacist or against the maker's instructions, including for any child using one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the leaflet for your nasal spray from start to finish"
                - "Ask your pharmacist to watch you use the spray"
                - "Practise the head angle and nozzle direction the leaflet shows"
                - "Check your child's spray technique in the same way"
            - name: Auto-injector practice with a trainer pen
              description: |-
                ## Purpose
                In an emergency, hands shake and instructions blur, and devices from different makers work in different ways. Practising with the matching trainer pen until each step is automatic, and teaching the people around you, is what makes carrying adrenaline worth it.

                ## Milestones
                1. A trainer pen obtained for the exact brand prescribed.
                2. You and every adult at home able to demonstrate the steps without reading.
                3. Older children shown the steps in an age-appropriate way.
                4. Practice repeated whenever the prescribed brand changes.

                ## Notes
                Never practise with a live device. Trainer pens are usually available from the maker's website.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every adult in the household can demonstrate the prescribed auto-injector's steps on a trainer pen without reading instructions."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Order a trainer pen that matches the prescribed brand"
                - "Watch the maker's instruction video together as a household"
                - "Have each adult demonstrate the steps on the trainer pen"
                - "Run a trainer pen practice with the household @recurring(quarterly)"
            - name: Recognising the signs of anaphylaxis
              description: |-
                ## Purpose
                Anaphylaxis does not always start with a rash: it can begin with a hoarse voice, a cough, sudden floppiness in a small child or a feeling that something is very wrong. Learning the airway, breathing and circulation signs from a recognised allergy charity means you act early, which is when treatment works best.

                ## Milestones
                1. The signs of a severe reaction learned under airway, breathing and circulation.
                2. The difference between mild and severe signs on your action plan understood.
                3. The emergency number and what to say on the call rehearsed.
                4. Two people in the household able to list the severe signs from memory.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two household members can list the airway, breathing and circulation signs of anaphylaxis and the first steps from memory."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a recognised allergy charity's guide to anaphylaxis signs"
                - "Sort the signs into airway, breathing and circulation"
                - "Rehearse what you would say on an emergency call"
                - "Quiz another adult at home on the severe signs"
            - name: Reading food labels for allergens
              description: |-
                ## Purpose
                Allergens hide in sauces, crisps and ready meals, recipes change without notice, and 'may contain' warnings mean different things from different makers. Learning where allergens are shown on labels in your country, and agreeing a household rule for precautionary warnings, makes every shop faster and safer.

                ## Milestones
                1. The way allergens are highlighted on labels where you live understood.
                2. A household rule for 'may contain' warnings agreed with your clinician.
                3. Labels rechecked on regularly bought products, since recipes change.
                4. Safe alternatives found for each risky staple.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written household rule for precautionary labels, agreed with a clinician, and a list of safe staples checked against current labels."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your food standards authority's guide to allergen labelling"
                - "Ask your clinician how to treat 'may contain' warnings"
                - "Check the labels of the ten products you buy most often"
                - "List safe alternatives for any staple that fails the check"
            - name: How allergy medicines differ
              description: |-
                ## Purpose
                Pharmacy shelves mix older drowsy antihistamines, newer non-drowsy ones, steroid sprays, eye drops and decongestant sprays meant for only a few days' use. Knowing what each kind is for, and which suit drivers, children or pregnancy, makes the conversation with your pharmacist short and specific.

                ## Milestones
                1. One page listing each type of allergy medicine and what it treats.
                2. The types that can cause drowsiness marked.
                3. Decongestant sprays noted as short-term only, with the limit printed on your pack.
                4. Questions about your own situation answered by a pharmacist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page guide to the main allergy medicine types exists, with your own questions answered by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one line for each type of allergy medicine and its job"
                - "Mark which types can cause drowsiness"
                - "Note the maximum days of use printed on any decongestant spray"
                - "Take your remaining questions to a pharmacist"
            - name: Understanding allergy test results
              description: |-
                ## Purpose
                A positive skin prick or blood test shows sensitisation, not necessarily allergy, and many people avoid foods they could eat safely because of a number on a report. Going through results with the clinician who ordered them, alongside your reaction history, separates real allergies from harmless positives.

                ## Milestones
                1. Copies of every allergy test result gathered in one place.
                2. Each result discussed with the clinician who ordered it, against your reaction history.
                3. Allergens to avoid, allergens to keep eating and those needing further tests listed separately.
                4. The household register updated with the conclusions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each allergy test result has a recorded conclusion of avoid, keep eating or test further, agreed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request copies of all your allergy test results"
                - "Book time with the clinician to go through each result"
                - "Sort allergens into avoid, keep eating and test further"
                - "Update the household register with the conclusions"
            - name: Saline nasal rinsing practice
              description: |-
                ## Purpose
                Rinsing the nose with salt water washes out pollen and mucus, and many people with hay fever find it eases symptoms alongside their medicines. Learning to do it safely, with sterile, distilled or boiled and cooled water and a clean bottle, takes about a week of practice to become comfortable.

                ## Milestones
                1. A rinse bottle or kit chosen and the maker's instructions read.
                2. A safe water rule set: sterile, distilled or boiled and cooled, never straight from the tap.
                3. Rinsing practised for a week after outdoor time on high pollen days.
                4. The effect on symptoms noted in the diary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A week of saline rinses after outdoor exposure is recorded in the diary, using only safe water."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Buy a saline rinse kit and read the instructions"
                - "Write the safe water rule on a card beside the kit"
                - "Rinse after outdoor time on high pollen days for a week"
                - "Wash and air-dry the rinse bottle after every use"
            - name: Itchy eye care in hay fever season
              description: |-
                ## Purpose
                Red, itchy, streaming eyes are often the worst part of hay fever, and rubbing them makes things worse. Wraparound sunglasses, cold compresses and eye drops chosen with a pharmacist, especially if you wear contact lenses, can calm eye symptoms even when the nose is under control.

                ## Milestones
                1. Eye symptoms scored separately in the diary.
                2. Wraparound sunglasses in use on high pollen days.
                3. Eye drops chosen with a pharmacist and checked for contact lens compatibility.
                4. Eye symptoms that need same-day care written down, such as pain or blurred vision.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An eye care routine with pharmacist-chosen drops is in place, and the red-flag eye symptoms are written down."
                cadence: phased
                effort_hours_estimate: "1"
              tasks:
                - "Add a separate eye score to the symptom diary"
                - "Wear wraparound sunglasses on high pollen days"
                - "Ask a pharmacist which eye drops suit your contact lenses"
                - "Write down the eye symptoms that need same-day care"
            - name: Eating out with a food allergy
              description: |-
                ## Purpose
                Restaurants, cafes and takeaways are where many serious reactions happen, often because the allergy was mentioned once and lost on the way to the kitchen. A short script, a chef card and the habit of asking about shared fryers and sauces make every meal out a planned risk rather than a gamble.

                ## Milestones
                1. A chef card listing your allergens in plain words, with a translated version for travel.
                2. An ordering script covering ingredients, cross-contact and shared fryers.
                3. Two or three local places that handled your allergy well noted.
                4. Your auto-injector carried to every meal out, if prescribed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A chef card and ordering script are on your phone or in your wallet, with a list of local places that handled your allergy well."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a chef card naming each allergen in plain words"
                - "Draft three ordering questions about ingredients and cross-contact"
                - "Use the script on your next meal out and note the response"
                - "Keep a list of places that handled your allergy well"
            - name: Choosing a bedroom air purifier
              description: |-
                ## Purpose
                Portable purifiers range from useful to useless, and the difference lies in the filter type, the clean air delivery rate and whether the unit suits the size of your room. Comparing three models on those numbers, running cost and noise prevents an expensive box humming in the corner.

                ## Milestones
                1. Bedroom floor area measured.
                2. Three purifiers with HEPA filters compared on clean air delivery rate, noise and filter cost.
                3. One chosen, or a decision recorded that one is not worth it.
                4. Filter replacement dates set if one was bought.

                ## Notes
                Start from the **Purchase decision** template. Avoid units that produce ozone.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A purifier decision is recorded, comparing three models on clean air delivery rate, noise and annual filter cost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Measure the bedroom floor area"
                - "Compare three HEPA purifiers on clean air rate, noise and filter cost"
                - "Record the decision on a purchase decision page"
                - "Clean or replace the purifier filter on the maker's schedule @recurring(quarterly)"
            - name: Stepping up hay fever treatment that is not working
              description: |-
                ## Purpose
                If symptoms still disturb sleep, work or school after several weeks of correctly used daily treatment, the plan needs changing, not just more of the same. Bringing diary evidence and a checked spray technique to your clinician lets them consider combination sprays, different medicines or a referral.

                ## Milestones
                1. Four weeks of diary scores collected with daily treatment taken as directed.
                2. Spray technique confirmed by a pharmacist before the appointment.
                3. A changed plan or a referral agreed with your clinician.
                4. The new plan's effect checked against the diary after four weeks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A revised treatment plan or referral is agreed using four weeks of diary evidence, and its effect is recorded four weeks later."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pull four weeks of diary scores into a short summary"
                - "Ask your pharmacist to confirm your spray technique"
                - "Book an appointment to discuss changing the plan"
                - "Compare diary scores four weeks after the change"
            - name: Allergy clinic referral decision
              description: |-
                ## Purpose
                Specialist allergy clinics are worth the wait for suspected food or sting allergy, reactions with no clear cause, severe hay fever despite good treatment, or when immunotherapy is being considered. Deciding with your doctor whether you meet those grounds, and preparing well if you do, makes the one specialist appointment count.

                ## Milestones
                1. The reasons for referral discussed with your doctor and recorded.
                2. A referral sent, or a clear reason for not referring noted.
                3. Reaction history, diary summary and test results packed for the clinic.
                4. Questions for the specialist written in order of importance.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A referral decision is recorded with reasons and, if referred, a clinic pack of history, results and questions is ready."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the reasons you think a specialist referral is needed"
                - "Discuss referral with your doctor and record the outcome"
                - "Put reaction history, diary summary and results in one folder"
                - "Rank your questions for the specialist by importance"
            - name: Antihistamine comparison trial
              description: |-
                ## Purpose
                Different non-drowsy antihistamines suit different people, and some people feel sleepy on one but not another. A structured trial agreed with your pharmacist, one product for a set period and then another in similar pollen weeks, with symptom and drowsiness scores, shows which works for you.

                ## Milestones
                1. Two antihistamines chosen with your pharmacist as suitable to compare.
                2. Each taken as directed for the agreed trial period in similar pollen weeks.
                3. Symptom and drowsiness scores recorded for both.
                4. A preferred option chosen and noted in your allergy records.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two pharmacist-approved antihistamines are compared over agreed periods with diary scores, and the preferred one is recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist which two antihistamines suit a comparison"
                - "Add a drowsiness score to the diary for the trial"
                - "Switch products at the agreed point and keep scoring"
                - "Record which product worked better and why"
            - name: Lower-pollen garden changes
              description: |-
                ## Purpose
                Grass lawns, some hedges and wind-pollinated trees release large amounts of pollen right outside the window, while insect-pollinated flowers generally put far less into the air. Changing a few plantings and mowing habits over a year or two lowers what lands on you every time you step outside.

                ## Milestones
                1. The main pollen sources in your garden identified.
                2. A plan agreed for the lawn, such as keeping it short or having someone else mow.
                3. Two or three high-pollen plants replaced with lower-pollen alternatives.
                4. Gardening jobs moved to lower pollen times of day.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written garden plan replaces at least two high-pollen plants and sets mowing rules for the pollen season."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Walk the garden and list plants likely to release pollen"
                - "Ask a garden centre about lower-pollen alternatives"
                - "Agree who mows the lawn during your pollen season"
                - "Move gardening jobs to times when counts are lower"
            - name: Getting a pet in an allergic household
              description: |-
                ## Purpose
                No breed is truly allergy-free, and rehoming a pet after a few months is hard on everyone, children most of all. Spending real time with the specific animal, asking the allergic family member's clinician about the risk and agreeing a fallback plan before committing avoids that outcome.

                ## Milestones
                1. The allergic family member's risk discussed with their clinician.
                2. Several hours spent with the specific animal, with symptoms noted.
                3. House rules and the costs of allergen control agreed in advance.
                4. A decision recorded, including what happens if symptoms become unmanageable.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pet decision is recorded after time with the animal and a clinician conversation, with a fallback plan written down."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the allergic family member's clinician about the risk"
                - "Arrange two long visits with the specific animal"
                - "Score symptoms during and after each visit"
                - "Write the decision and a fallback plan before committing"
            - name: Hay fever adjustments at work or school
              description: |-
                ## Purpose
                Sitting under an open window, doing outdoor duties at peak times or cycling a long commute can make a manageable allergy miserable. Asking an employer or school for small changes, such as a different desk, rearranged outdoor tasks or a place to keep medicines, costs them little and makes a real difference to your summer.

                ## Milestones
                1. The parts of the working or school day that worsen symptoms listed.
                2. Two or three specific adjustments requested in writing.
                3. A safe place agreed for medicines, and for auto-injectors if prescribed.
                4. Adjustments reviewed at the end of the season.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Specific adjustments are requested in writing and the employer's or school's response is recorded before the season starts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the moments in your working day that worsen symptoms"
                - "Write a short request for two or three adjustments"
                - "Agree where your medicines will be kept at work or school"
                - "Review the adjustments once the season ends"
            - name: Allergy testing appointment
              description: |-
                ## Purpose
                Skin prick and blood tests are only as useful as the preparation around them: antihistamines often need pausing for some days before a skin test, and the clinic needs to know which allergens to test. Getting the instructions early and bringing your history makes the appointment worth the wait.

                ## Milestones
                1. The clinic's preparation instructions read, including which medicines to pause and when.
                2. A plan agreed with your clinician for coping without antihistamines before the test.
                3. Your reaction history and suspected allergens written on one page.
                4. Results and next steps recorded after the appointment.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The test appointment is attended with medicines paused as instructed, and the results and next steps are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the clinic for written preparation instructions"
                - "Mark the date to pause antihistamines if the clinic asks you to"
                - "Write one page of reaction history and suspected allergens"
                - "Record the results and next steps on the day of the test"
            - name: Hay fever plan for exam season
              description: |-
                ## Purpose
                Summer exams fall in peak grass pollen season, and both hay fever symptoms and drowsy medicines can drag down a student's performance. A plan agreed with the student, school and doctor, covering treatment started in good time, non-drowsy options and a seat away from open windows, gives them a fair chance.

                ## Milestones
                1. Exam dates set against the expected peak of the student's pollen season.
                2. Treatment started ahead of exams as agreed with their doctor.
                3. Non-drowsy medicine options confirmed with a pharmacist.
                4. The school or exam centre told about the hay fever and asked about seating.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Daily treatment is running before the first exam, with the school informed and non-drowsy medicines confirmed."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Put exam dates beside the student's usual pollen peak"
                - "Book a doctor's appointment to plan treatment before exams"
                - "Email the school about seating away from open windows"
                - "Pack water, tissues and approved medicines for each exam day"
            - name: Holiday planning with allergies
              description: |-
                ## Purpose
                Pollen seasons shift with latitude and altitude, foods abroad are labelled differently, and airlines have their own rules on medicines and auto-injectors. Planning each trip against the destination's pollen calendar and your allergy needs means the holiday is spent outdoors, not hunting for a pharmacy.

                ## Milestones
                1. The destination's pollen season checked for your travel dates.
                2. Enough medicine for the trip plus spare days packed in hand luggage.
                3. A doctor's letter for auto-injectors and a translated allergy card prepared if needed.
                4. The local emergency number and nearest hospital noted.

                ## Notes
                Start from the **Trip** template.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each trip has a checked pollen calendar, medicines and devices in hand luggage, and the local emergency number noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the pollen calendar at your destination for the travel dates"
                - "Ask your doctor for a letter covering auto-injectors on flights"
                - "Translate your allergy card into the local language"
                - "Pack all allergy medicines and devices in hand luggage"
            - name: Moving home with allergies
              description: |-
                ## Purpose
                Old carpets, hidden damp and the previous owner's cat can make a new home worse for allergy than the one you left. Asking the right questions at viewings and planning a deep clean before moving in heads off a year of symptoms.

                ## Milestones
                1. A viewing checklist covering damp, carpets, previous pets and nearby trees.
                2. Answers recorded for each property you seriously consider.
                3. A deep clean or carpet change done before moving in.
                4. The bedroom set up with allergen control from the first night.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed allergy viewing checklist for the chosen home and a deep clean carried out before moving in."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write an allergy checklist to take to viewings"
                - "Ask agents about previous pets and any damp treatment"
                - "Book a deep clean before the move"
                - "Set up the bedroom with allergen covers on the first night"
            - name: Supervised food challenge at the allergy clinic
              description: |-
                ## Purpose
                Eating a food in gradually increasing amounts under hospital supervision is often the only way to know whether an allergy has been outgrown or never existed. Preparing for the day, with the clinic's rules on medicines and illness, means it goes ahead as planned and the result changes what the household eats.

                ## Milestones
                1. The clinic's preparation rules written down, including medicines to pause and illness rules.
                2. A calm plan for the day prepared, with food, entertainment and time off arranged.
                3. The result and any new eating instructions recorded.
                4. The household register, school plan and shopping list updated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The challenge is completed or rescheduled with a reason, and its result is reflected in the register, school plan and shopping list."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the clinic's preparation rules for the challenge"
                - "Arrange the whole day off work or school"
                - "Pack the food the clinic asks for and something to pass the time"
                - "Update the register and school plan with the result"
            - name: Child's allergy plan for school or nursery
              description: |-
                ## Purpose
                Schools and nurseries need the action plan, in-date medicines and trained staff in place before a reaction happens, and they rely on parents to supply most of it. Setting this up before term starts, and refreshing it each year, means a teacher on a school trip knows exactly what to do.

                ## Milestones
                1. The school's allergy or healthcare plan form completed with your child's action plan attached.
                2. Medicines and any auto-injectors handed over, labelled and in date.
                3. The staff trained to help named, and school trips covered.
                4. Lunch and snack arrangements agreed for any food allergy.

                ## Notes
                Ask whether the school also holds spare auto-injectors, since policies differ between countries and schools.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The school holds a signed healthcare plan, in-date labelled medicines and named trained staff before term starts."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the school for its allergy or healthcare plan form"
                - "Complete the form and attach the action plan"
                - "Hand over labelled, in-date medicines and record their expiry dates"
                - "Meet the class teacher to update the plan before each school year @recurring(yearly)"
            - name: Introducing foods to a baby with allergy risk
              description: |-
                ## Purpose
                Babies with severe eczema or an existing food allergy are at higher risk of further food allergies, and advice on when and how to introduce common allergens has changed in recent years. Agreeing a plan with your health visitor, doctor or allergy clinic before weaning starts means you introduce foods one at a time, confident about what to watch for.

                ## Milestones
                1. Your baby's risk discussed with a health visitor, doctor or allergy clinic before weaning.
                2. An agreed order and timing for introducing common allergens written down.
                3. Each new food recorded with the date and any reaction.
                4. The signs of a reaction and what to do learned in advance.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A clinician-agreed weaning plan for common allergens is written down and each new food is logged with any reaction."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a conversation about allergy risk before weaning starts"
                - "Write down the agreed order for introducing common allergens"
                - "Log each new food with the date and any reaction"
                - "Keep a reaction signs sheet on the fridge during weaning"
            - name: Teenager taking over their own allergy care
              description: |-
                ## Purpose
                Teenagers with food allergy face more risk than younger children, often because they leave devices at home or do not want to stand out among friends. Handing over responsibility in stages through the early and mid teens, with agreed rules and regular check-ins, builds habits that last into adult life.

                ## Milestones
                1. A list of the allergy tasks a teenager needs to own, from carrying devices to booking appointments.
                2. Responsibility handed over in agreed stages.
                3. A plan for telling friends and what they should do in an emergency.
                4. The teenager able to explain their action plan to a clinician unaided.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The teenager carries their own devices, has told close friends what to do, and has led one clinic appointment."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every allergy task you currently do for your teenager"
                - "Agree which tasks they take over first"
                - "Help them rehearse telling friends what to do in an emergency"
                - "Check in on carried devices and upcoming plans @recurring(monthly:3)"
            - name: Hay fever treatment in pregnancy and breastfeeding
              description: |-
                ## Purpose
                Pregnancy can make a blocked nose worse, and some allergy medicines are preferred over others while pregnant or breastfeeding. Checking every medicine with your midwife, doctor or pharmacist early, and leaning on non-medicine measures, avoids both untreated misery and guesswork.

                ## Milestones
                1. Every allergy medicine you use listed and checked with a midwife, doctor or pharmacist.
                2. A suitable plan for the coming season written down.
                3. Non-medicine measures such as rinsing and pollen-day routines in place.
                4. The plan rechecked after the birth if you are breastfeeding.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every allergy medicine has been checked by a midwife, doctor or pharmacist for pregnancy, with an agreed plan recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List every allergy medicine you currently use"
                - "Ask your midwife or pharmacist which are suitable in pregnancy"
                - "Write the agreed plan for the coming pollen season"
                - "Recheck the plan with your pharmacist after the birth"
            - name: Allergy medicines and drowsiness in later life
              description: |-
                ## Purpose
                Older sedating antihistamines can cause drowsiness, confusion and falls in older adults, and they also turn up in sleep aids and cold remedies under other names. A pharmacist check of every allergy, cold and sleep product an older relative uses, or that you use yourself, reduces that risk.

                ## Milestones
                1. Every allergy, cold and sleep product used by the older person listed.
                2. Products containing sedating antihistamines identified with a pharmacist.
                3. Safer alternatives agreed where needed.
                4. Any recent falls or confusion mentioned to their doctor.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A pharmacist has checked every allergy, cold and sleep product used by the older person, with any changes recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every allergy, cold and sleep product the older person uses"
                - "Ask a pharmacist which contain sedating antihistamines"
                - "Agree safer alternatives where needed"
                - "Tell their doctor about any recent falls or confusion"
            - name: Cooking for a household with a food allergy
              description: |-
                ## Purpose
                When one person has a food allergy, the whole kitchen needs rules: separate boards or cleaning steps, labelled shelves and recipes everyone can eat. Planning the week's meals around safe recipes cuts cross-contact risk and the daily strain of cooking two dinners.

                ## Milestones
                1. Kitchen rules written for storage, preparation and cleaning.
                2. A shelf or tub labelled for allergy-safe foods.
                3. Ten family recipes everyone can eat collected.
                4. A weekly meal plan built from safe recipes for a month.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written kitchen rules are posted and four consecutive weekly meal plans are built from allergy-safe recipes."
                cadence: rolling
              tasks:
                - "Write kitchen rules for storage, preparation and cleaning"
                - "Label a shelf for allergy-safe foods"
                - "Collect ten family recipes that avoid the allergen"
                - "Plan next week's allergy-safe meals @recurring(weekly:fri)"
            - name: Allergy briefing for grandparents and babysitters
              description: |-
                ## Purpose
                Grandparents, childminders and babysitters often grew up when allergies were rarer and less understood, and may not realise how small a trace can matter. A twenty-minute briefing with the action plan, the trainer pen and the snack rules prepares them for an afternoon in charge.

                ## Milestones
                1. A one-page briefing sheet covering allergens, safe snacks and the action plan.
                2. Each regular carer shown the trainer pen and able to demonstrate it.
                3. Rules agreed about food from other sources, such as treats and parties.
                4. Contact numbers and the location of medicines left with every carer.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every regular carer has the briefing sheet and has demonstrated the trainer pen at least once."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page briefing for anyone looking after your child"
                - "Show each carer the trainer pen and watch them use it"
                - "Agree rules about treats and food from other people"
                - "Leave contact numbers and the medicine location with each carer"
            - name: Insect sting allergy precautions
              description: |-
                ## Purpose
                Someone who has had a reaction spreading well beyond the sting site, or a severe reaction, should see a clinician, as venom allergy can be tested and in some cases treated. Meanwhile, simple outdoor habits and a plan for gardening, picnics and walks reduce the chance of being stung.

                ## Milestones
                1. Past sting reactions described and taken to a clinician.
                2. A decision recorded on testing, auto-injectors and referral.
                3. Outdoor habits set, such as covered drinks, shoes outdoors and care near bins.
                4. Family and friends told what to do if a sting reaction starts.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician's decision on testing and devices for sting allergy is recorded, and outdoor precautions are written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down each past sting reaction and how far it spread"
                - "Book a clinician appointment to discuss sting allergy"
                - "Write three outdoor habits for the summer months"
                - "Tell regular walking or gardening companions what to do in a reaction"
            - name: Allergen immunotherapy course
              description: |-
                ## Purpose
                For hay fever or venom allergy that stays severe despite good treatment, a specialist may offer immunotherapy by tablet, drops or injections, typically over about three years. Deciding whether to start, and then keeping the daily or clinic treatment going through busy years, is a long commitment that pays off only if completed.

                ## Milestones
                1. Suitability discussed with an allergy specialist and a decision recorded.
                2. The schedule, clinic visits and what to do after a missed dose written down.
                3. Treatment taken as prescribed, with a log of any side effects.
                4. Progress reviewed with the specialist each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A specialist decision on immunotherapy is recorded and, if started, a log shows the course followed for the first year."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your specialist whether you are a candidate for immunotherapy"
                - "Write down the schedule and the missed-dose instructions"
                - "Take the immunotherapy treatment as prescribed and log it @recurring(daily)"
                - "Note any side effects to raise at the yearly specialist review"
            - name: Pollen food syndrome investigation
              description: |-
                ## Purpose
                Some people with birch or grass pollen allergy get an itchy mouth from raw apples, stone fruit, nuts or carrots, because the proteins look alike to the immune system. Logging which foods do it, and in what form, then taking the list to a specialist, clarifies which foods to avoid, which are fine cooked and which need further tests.

                ## Milestones
                1. A list of foods that cause mouth or throat symptoms, raw and cooked.
                2. The pattern compared against your pollen allergy.
                3. The list reviewed by an allergy specialist, with any tests arranged.
                4. Safe and unsafe forms of each food recorded.

                ## Notes
                Throat swelling, difficulty breathing or symptoms beyond the mouth need urgent assessment, not a diary entry.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A specialist-reviewed list records which foods cause symptoms and which forms of them are safe."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every food that has caused an itchy mouth or throat"
                - "Note whether each was raw, cooked, peeled or tinned"
                - "Take the list to your allergy specialist"
                - "Record the specialist's verdict on each food"
            - name: Multi-year allergy pattern review
              description: |-
                ## Purpose
                Allergies change over the years: children outgrow some, adults gain new ones, and pollen seasons lengthen with warmer weather. Comparing several years of diary totals, prescriptions and pollen data shows whether your season starts earlier, whether treatment needs have grown and what to take to a specialist.

                ## Milestones
                1. Diary totals and season start weeks from at least three years in one table.
                2. Prescription history added alongside.
                3. Trends noted in season start, length and severity.
                4. A summary taken to your next annual review or specialist appointment.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of at least three seasons of diary and prescription data, with a written trend summary shared at a review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect diary totals from every season you have recorded"
                - "Add prescription dates from your patient portal"
                - "Ask the agent to describe trends in start week and severity"
                - "Bring the trend summary to your next review"
---

# Allergy & Hay Fever Management

This area is for anyone whose summers are spoilt by sneezing, whose nose never clears indoors, or whose family carries adrenaline for a food or sting allergy, and for the parents who organise it all. It starts with the foundations (a symptom diary, your pollen season, a confirmed diagnosis, a severe reaction risk check and a written action plan), then the routines that run through the season and the year, the skills behind sprays, auto-injectors and labels, the decisions about purifiers, pets and treatment changes, the appointments and trips that need planning, the situations of babies, teenagers, pregnancy and later life, and finally immunotherapy and long-term pattern work.

What repeats is a weekly symptom score, daily medicines in season, a monthly auto-injector expiry check and prescription order, weekly bedding and pet cleaning, quarterly damp checks and trainer pen practice, and a yearly cycle of pre-season start, annual review, school plan and end-of-season debrief. The Metrics log, Habit tracker, Purchase decision, Trip and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
