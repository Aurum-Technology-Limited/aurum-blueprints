---
id: food-nutrition.nutrition-for-older-adults
name: Nutrition for Older Adults
description: "Eating to keep muscle, appetite, fluids and bones in good shape in later life: weight and screening checks, protein and fortified meals, softer textures, carer routines and plans for hospital stays and care."
category: personal
version: 1.0.0
tags: [food-nutrition, nutrition-for-older-adults, retiree, carer, healthy-ageing, protein, hydration, texture-modified]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - purchase-decision
    - person
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Nutrition for Older Adults
          description: "Planning meals that maintain muscle, appetite, hydration and bone health in later life, including softer textures and cooking for one or two."
          projects:
            - name: Three-day later-life food and drink diary
              description: |-
                ## Purpose
                Appetite often shrinks so gradually in later life that nobody notices meals have become a biscuit at lunch and soup at night. Writing down everything eaten and drunk for three ordinary days, including one weekend day, shows how many proper meals, protein foods and drinks are really happening, and gives every later project in this area a starting point.

                ## Milestones
                1. Three days recorded, including one weekend day, with times, amounts and drinks.
                2. The number of main meals, snacks and cups of fluid counted for each day.
                3. Protein foods at each meal marked so gaps are obvious.
                4. Two or three patterns noted, such as a skipped breakfast or a long gap after 4pm.

                ## Notes
                Write it down as you go, not from memory at bedtime; recall misses most snacks and drinks. A carer can keep the diary on someone's behalf if they agree.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-day food and drink diary is complete, with meals, protein foods and drinks counted and at least two patterns written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put a notebook and pen by the kettle for the next three days"
                - "Record every meal, snack and drink with a rough amount and time"
                - "Count main meals, protein foods and cups of fluid for each day"
                - "Write two patterns you want to change at the bottom of the last page"
            - name: Monthly weight and appetite log
              description: |-
                ## Purpose
                Unplanned weight loss of around five per cent over a few months is one of the earliest signs that eating is falling behind, and it is easy to miss when clothes are loose anyway. Weighing on the same scales once a month, with a one-line note on appetite, catches the slide early enough for a doctor or dietitian to help.

                ## Milestones
                1. Reliable bathroom scales in place, used at the same time of day in similar clothes.
                2. A log with columns for date, weight, appetite and anything unusual that month.
                3. At least three monthly entries recorded.
                4. A rule written at the top for when a drop is reported to the doctor.

                ## Notes
                Start from the **Metrics log** template. Agree with your doctor what size of drop they want to hear about; many use a few kilograms over three to six months as a prompt.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weight and appetite log holds at least three monthly entries, with a written threshold for when to contact the doctor."
                cadence: rolling
              tasks:
                - "Find or buy bathroom scales that show weight clearly from standing"
                - "Create a weight log with date, weight and an appetite note"
                - "Ask the doctor what drop in weight they want to be told about"
                - "Weigh before breakfast and record weight and appetite @recurring(monthly:9)"
            - name: Malnutrition risk screening at the practice
              description: |-
                ## Purpose
                Many health services use a short validated screening tool, such as MUST in the UK, that combines weight, height, recent weight loss and acute illness into a risk score. Asking for one, rather than waiting to be offered it, means a low score is on record as a baseline and a raised score leads to a plan.

                ## Milestones
                1. The practice asked for a nutrition or malnutrition risk screen.
                2. Current height, weight and any recent weight loss measured and recorded.
                3. The screening result and what it means written in your own notes.
                4. Any plan from a raised score, such as a dietitian referral or recheck date, agreed.

                ## Notes
                Bring your weight log and food diary to the appointment. If standing height is hard to measure, staff can estimate it from forearm length.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A malnutrition screening result is recorded in your notes along with any plan or recheck date the practice set."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone the practice and ask whether they offer a malnutrition risk screen"
                - "Take the weight log and food diary to the appointment"
                - "Write down the score, the risk level and the agreed next step"
                - "Ask for the screen to be repeated at the annual check @recurring(yearly)"
            - name: Medicines and food interactions sheet
              description: |-
                ## Purpose
                Some medicines need an empty stomach, some must be taken with food, and a few interact with foods such as grapefruit, leafy greens or milk. A one-page sheet written with the pharmacist, listing each medicine with its food rules, stops tablets being taken at the wrong time or quietly working less well.

                ## Milestones
                1. A current list of every prescribed and bought medicine and supplement.
                2. The pharmacist asked about food timing and interactions for each one.
                3. A one-page sheet showing each medicine, when to take it and any foods to watch.
                4. Copies kept on the fridge and with whoever helps with meals.

                ## Notes
                Include over-the-counter remedies and supplements; calcium, iron and herbal products cause many of the interactions people do not expect.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page medicines and food sheet, checked by a pharmacist, is on the fridge and shared with anyone who helps with meals."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine box and supplement bottle into one bag"
                - "Book a medicines conversation with the community pharmacist"
                - "Write each medicine with its food timing and foods to avoid on one page"
                - "Recheck the sheet with the pharmacist after the yearly medication review @recurring(yearly)"
            - name: Teeth, dentures and chewing check
              description: |-
                ## Purpose
                Loose dentures, a sore gum or a missing back tooth quietly steer people away from meat, raw vegetables and crusty bread, and the diet narrows without anyone deciding it should. A dental visit focused on chewing, with denture fit checked, restores foods that had been dropped.

                ## Milestones
                1. Foods that have become hard to chew or have been avoided listed.
                2. A dental appointment attended with that list in hand.
                3. Denture fit, sore spots and dry mouth raised and any adjustment made.
                4. One or two avoided foods back on the menu, or a softer alternative chosen.

                ## Notes
                Dry mouth is a common side effect of medicines and makes chewing and swallowing harder; mention it to both the dentist and the pharmacist.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A dental check covering chewing and denture fit is done and at least one previously avoided food is eaten again or replaced."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List foods you now avoid because they are hard to chew"
                - "Book a dental appointment and mention chewing as the reason"
                - "Ask the dentist about denture fit, sore spots and dry mouth"
                - "Book the yearly dental and denture check @recurring(yearly)"
            - name: Swallowing warning signs and referral
              description: |-
                ## Purpose
                Coughing or clearing the throat during meals, a wet or gurgly voice after drinking, food sticking or chest infections that keep returning can all point to a swallowing problem. Writing down what to watch for, and knowing that a speech and language therapist assesses swallowing, means signs lead to a referral instead of food being cut back by guesswork.

                ## Milestones
                1. The common signs of swallowing difficulty written on one card.
                2. Any signs already noticed recorded with when they happen and with which foods.
                3. The doctor told about the signs and asked about a swallowing assessment.
                4. Any texture or drink advice from the assessment written down and shared with the household.

                ## Notes
                Choking that blocks breathing is an emergency; learn the first aid steps your health service teaches. Do not start thickening drinks or pureeing food without an assessment, as the wrong level can make things worse.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A swallowing signs card is in the kitchen, and any signs observed have been reported to the doctor with the outcome written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the common signs of swallowing difficulty on one card for the kitchen"
                - "Note any coughing, wet voice or food sticking for a week"
                - "Tell the doctor what you noticed and ask about a swallowing assessment"
                - "Learn the choking first aid steps from your health service's guidance"
            - name: Daily fluid target and drinking routine
              description: |-
                ## Purpose
                Thirst signals weaken with age, and many older people drink less to avoid night-time trips to the toilet, which raises the risk of falls, confusion, constipation and urine infections. Agreeing a daily fluid amount with the doctor and tying drinks to fixed points in the day makes enough fluid automatic rather than remembered.

                ## Milestones
                1. A daily fluid amount agreed with the doctor, especially if heart or kidney problems limit fluids.
                2. Six to eight drinking moments tied to existing routines such as waking, meals and medicines.
                3. A marked jug or bottle in use so the day's total is visible.
                4. Two weeks of daily tallies recorded.

                ## Notes
                Start from the **Habit tracker** template. Tea, coffee, milk, soup and jelly all count. Front-load drinks before late afternoon if night waking is the worry.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A doctor-agreed daily fluid amount is written down and met on at least ten of fourteen recorded days."
                cadence: rolling
              tasks:
                - "Ask the doctor whether any fluid limit applies to you"
                - "Choose six drinking moments linked to things you already do each day"
                - "Mark a jug or bottle with the day's target amount"
                - "Tick off each drink on the tracker before bed @recurring(daily)"
            - name: Protein at every meal plan
              description: |-
                ## Purpose
                Older muscles need more protein to keep their strength than younger ones, yet many retirees eat almost all of theirs at the evening meal. Planning a protein food at breakfast, lunch and dinner, with an amount agreed with a dietitian or doctor, supports strength, balance and recovery from illness.

                ## Milestones
                1. A daily protein amount discussed with a dietitian or doctor, especially if kidney function is reduced.
                2. A list of ten protein foods you like and can chew easily.
                3. A protein food chosen for each of breakfast, lunch and dinner.
                4. Two weeks of meals checked against the plan.

                ## Notes
                Eggs, milk, yoghurt, cheese, beans, lentils, tinned fish and soft minced meat are easy wins. Kidney disease can change protein advice, so check before increasing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A protein food is part of breakfast, lunch and dinner on at least ten of fourteen days, against an amount discussed with a professional."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the doctor or dietitian whether a higher protein intake suits you"
                - "List ten protein foods you enjoy and can chew comfortably"
                - "Pick a protein food for each meal and add them to the shopping list"
                - "Check one day's meals for protein at every meal @recurring(weekly:mon)"
            - name: Calcium and vitamin D food audit for bones
              description: |-
                ## Purpose
                Bones thin faster after sixty, and a fracture from a fall can end independent living. Checking how much calcium comes from food each day, and asking the doctor whether vitamin D or a bone scan is needed, puts bone health on the record instead of leaving it to chance.

                ## Milestones
                1. A typical day's calcium sources listed, such as milk, yoghurt, cheese, fortified alternatives and tinned fish with bones.
                2. Gaps against your health service's published adult guidance identified.
                3. The doctor asked about vitamin D, any bone scan and fracture risk.
                4. Two calcium-rich foods added to the regular shop if the audit showed a gap.

                ## Notes
                Plant milks vary widely; only some are fortified with calcium. Supplements should be agreed with the doctor, not added on top of a diet that already covers needs.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-day calcium audit is written down and the doctor's view on vitamin D and bone checks is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every dairy, fortified or bone-in fish food eaten on a typical day"
                - "Compare the list with your health service's adult calcium guidance"
                - "Ask the doctor about vitamin D, bone scans and fracture risk"
                - "Add two calcium-rich foods to the regular shopping list"
            - name: Easy-grip kitchen for arthritis and weaker hands
              description: |-
                ## Purpose
                Stiff jar lids, fiddly tin openers and heavy pans make people give up cooking long before they stop wanting to. An occupational therapist's view and a few well-chosen aids, such as a jar opener, lighter pans, a kettle tipper and a perching stool, keep cooking possible for years longer.

                ## Milestones
                1. The tasks that have become difficult in the kitchen listed.
                2. An occupational therapy assessment requested or an aids centre visited.
                3. Three to five aids chosen and in use.
                4. Heavy and rarely used items moved off waist-to-shoulder height shelves.

                ## Notes
                Start from the **Purchase decision** template. Many health and social care services lend or fund aids after an assessment, so ask before buying.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "At least three kitchen aids chosen after an assessment or trial are in daily use, and everyday items sit between waist and shoulder height."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every kitchen job that now hurts or takes too long"
                - "Ask the doctor or social care team for an occupational therapy assessment"
                - "Try jar openers, lighter pans and a kettle tipper at an aids centre"
                - "Move everyday pans and plates to between waist and shoulder height"
            - name: Weekly meal plan for one or two in retirement
              description: |-
                ## Purpose
                Without a plan, later-life meals drift toward whatever needs least effort, which is usually toast. A simple weekly plan with seven main meals, a protein food at each and one easy fallback night keeps variety up and makes the shopping list write itself.

                ## Milestones
                1. A weekly plan with seven main meals and a light meal for each day.
                2. A protein food and a vegetable or fruit in every main meal.
                3. One no-cook fallback meal planned for low-energy days.
                4. Four consecutive weeks planned.

                ## Notes
                Start from the **Weekly meal plan** template. Plan the bigger meal at whichever time of day appetite is best, which for many older people is midday.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans exist, each with a protein food in every main meal and a fallback meal."
                cadence: rolling
              tasks:
                - "List the twelve meals you most enjoy and can still cook easily"
                - "Fill in a first week from the list with a protein food in each"
                - "Write the shopping list straight from the plan"
                - "Plan next week's meals with a cup of tea @recurring(weekly:sun)"
            - name: Store cupboard for days you cannot get out
              description: |-
                ## Purpose
                Snow, a bad back, a bout of flu or a cancelled delivery can keep an older person indoors for days, and that is when meals collapse. A store cupboard holding a week of easy, nourishing food, such as long-life milk, tinned fish, soups, porridge oats and tinned fruit, means a bad week does not become weight loss.

                ## Milestones
                1. A list of seven days of simple meals that need no fresh food.
                2. Those foods bought and stored in one easy-to-reach place.
                3. Use-by dates written on the list.
                4. A rotation habit in place so stock is eaten and replaced before it expires.

                ## Notes
                Choose foods that can be opened with weak hands: ring-pull tins, pouches and cartons. Include drinks such as long-life milk and squash, not just food.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A store cupboard holding seven days of easy meals and drinks is stocked, listed with dates and rotated at least once."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write seven days of meals that use only tins, cartons and dry goods"
                - "Buy the items and store them on one reachable shelf"
                - "Note each item's use-by date on a list taped inside the door"
                - "Use the oldest items in a meal and restock them @recurring(quarterly)"
            - name: Weekly grocery delivery routine after giving up driving
              description: |-
                ## Purpose
                Giving up the car often means heavy shopping stops and the fridge empties. Setting up a regular online order or a standing delivery with a local shop, with a saved list of staples, keeps milk, eggs, fruit and protein foods coming without lifts from family.

                ## Milestones
                1. A delivery option chosen, such as a supermarket website, a local shop or a volunteer shopping service.
                2. An account set up with a saved favourites list of weekly staples.
                3. A regular delivery slot booked.
                4. A family member or friend able to place an order if you are unwell.

                ## Notes
                Many supermarkets offer priority slots or phone ordering for older or disabled customers; ask. Keep the saved list short so the order takes ten minutes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular grocery delivery arrives each week from a saved staples list, with a named backup person able to place the order."
                cadence: rolling
              tasks:
                - "Ask local shops and supermarkets which deliver and whether they take phone orders"
                - "Save a list of weekly staples including milk, eggs, fruit and protein foods"
                - "Ask one family member or neighbour to be the backup orderer"
                - "Place the weekly grocery order from the saved list @recurring(weekly:thu)"
            - name: Food fortification for a small appetite
              description: |-
                ## Purpose
                Making every mouthful count matters more than eating more for someone who can only manage small portions. Fortifying everyday food, such as stirring milk powder into porridge, adding cheese to mashed potato or using full-fat milk, adds energy and protein without bigger plates.

                ## Milestones
                1. The doctor or dietitian has confirmed that fortifying food suits your situation.
                2. Fortified whole milk made up and kept in the fridge.
                3. Five regular dishes each given one fortifying addition.
                4. Weight steady or rising across the next two monthly weigh-ins.

                ## Notes
                This reverses usual healthy-eating advice and is meant for people losing weight or at risk; agree it with a professional first, especially with diabetes or high cholesterol.
              priority: high
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five regular dishes are fortified as agreed with a professional, and weight is steady or rising at the next two monthly weigh-ins."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the doctor or dietitian whether fortifying food is right for you"
                - "Buy dried milk powder and make a jug of fortified milk"
                - "Add one extra such as cheese, butter or milk powder to five usual dishes"
                - "Compare the next two monthly weights with the one before"
            - name: Small meals and snacks rhythm for poor appetite
              description: |-
                ## Purpose
                Three large meals can feel overwhelming to someone with a small appetite, a slow stomach or breathlessness. Moving to six smaller eating moments, each with something nourishing, often adds more food over the day than forcing three full plates.

                ## Milestones
                1. Six eating times set across the day, about two to three hours apart.
                2. A list of nourishing snacks that need no preparation, such as yoghurt, cheese and crackers or a milky drink.
                3. Snacks kept in sight where they are easy to reach.
                4. A week of the new rhythm compared with the original food diary.

                ## Notes
                Smaller plates make portions look generous rather than daunting. Drinking a lot just before meals can fill a small stomach, so sip between meals instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six eating moments a day are kept for a full week and the food eaten is compared with the original diary."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose six eating times that fit around your day"
                - "Stock a shelf with ready-to-eat nourishing snacks"
                - "Swap to a smaller plate for main meals"
                - "Compare a week of the new rhythm with your original food diary"
            - name: Fibre and fluid routine for regular bowels
              description: |-
                ## Purpose
                Constipation is one of the most common complaints in later life, driven by less movement, less fluid, lower fibre and many common medicines. A steady routine of fibre foods spread across the day alongside enough fluid deals with it more comfortably than reaching for laxatives first.

                ## Milestones
                1. Medicines known to cause constipation identified with the pharmacist.
                2. A fibre food added at breakfast, such as porridge, prunes or a high-fibre cereal.
                3. Fruit, vegetables or pulses included at lunch and dinner.
                4. Fibre increased gradually over two weeks alongside more fluid.

                ## Notes
                Raise any lasting change in bowel habit, bleeding or pain with the doctor rather than managing it with diet. Adding fibre quickly without fluid can make constipation worse.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A fibre food appears at every meal for two weeks alongside the daily fluid target, and the pharmacist has reviewed constipating medicines."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask the pharmacist which of your medicines can cause constipation"
                - "Choose a fibre-rich breakfast you will enjoy most days"
                - "Add a fruit, vegetable or pulse to lunch and dinner"
                - "Increase fibre over two weeks while keeping to the fluid target"
            - name: Monthly food check for a parent living alone
              description: |-
                ## Purpose
                Carers often only discover that a parent has stopped eating properly when they open the fridge and find mould and empty shelves. A short monthly check of the fridge, cupboards, weight and bins, done kindly and with permission, spots trouble months before it becomes a hospital admission.

                ## Milestones
                1. Your parent's agreement to a monthly kitchen check, framed as helping rather than inspecting.
                2. A short checklist covering out-of-date food, fresh food stock, weight and signs of skipped meals.
                3. Three monthly checks completed with notes.
                4. Any worrying trend shared with your parent and, with consent, their doctor.

                ## Notes
                Bins and the recycling tell you more than questions do. Respect your parent's choices; the aim is information, not control.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three monthly kitchen checks are recorded on a written checklist, with any concerning trend raised with the parent."
                cadence: rolling
              tasks:
                - "Ask your parent whether they would welcome a regular kitchen check"
                - "Write a ten-point checklist for fridge, cupboards, weight and bins"
                - "Note what you find and what changed since last time"
                - "Do the kitchen check and clear out-of-date food together @recurring(monthly:14)"
            - name: Weekly shared meal at a lunch club or with friends
              description: |-
                ## Purpose
                People who eat alone eat less, and loneliness is closely tied to poor appetite in later life. A fixed weekly meal with other people, at a community lunch club, a place of worship, a cafe with friends or a neighbour's table, adds a proper meal and conversation to the week.

                ## Milestones
                1. Local lunch clubs, community cafes and shared meal schemes listed.
                2. One tried and a regular day chosen.
                3. Transport sorted, such as a community bus or a lift rota.
                4. Eight weeks of attendance.

                ## Notes
                Many lunch clubs offer transport and charge little. If going out is hard, a regular meal with a neighbour at home does the same job.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A regular weekly shared meal has been attended for eight weeks with transport arranged."
                cadence: rolling
              tasks:
                - "Ask the library, council or a local charity for a list of lunch clubs"
                - "Visit one lunch club and decide whether to make it a regular day"
                - "Arrange transport through a community bus or a friend"
                - "Go to the shared lunch @recurring(weekly:wed)"
            - name: Heatwave eating and drinking plan
              description: |-
                ## Purpose
                Older people are among those most at risk in hot weather, as dehydration builds quietly and appetite for hot food disappears. A plan made before summer, with cool drinks, water-rich foods, cold meals and someone checking in, keeps fluids and food up through hot spells.

                ## Milestones
                1. Cold meal ideas listed for hot days, such as salads, cold meats, yoghurt and soft fruit.
                2. Ice lollies, jelly and cool drinks stocked as extra fluid.
                3. A check-in arranged with a neighbour or relative during heat alerts.
                4. The doctor asked whether any medicines need extra care in hot weather.

                ## Notes
                Some medicines, including some for blood pressure and diuretics, change how the body copes with heat. Ask, do not stop them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written heatwave plan with cold meals, extra fluids and a named check-in person is ready before summer each year."
                cadence: cyclic
              tasks:
                - "Write five cold meals you would enjoy on a hot day"
                - "Ask the doctor whether any of your medicines matter in hot weather"
                - "Agree a heat alert check-in with a neighbour or relative"
                - "Refresh the heatwave plan and stock cool drinks before summer @recurring(yearly)"
            - name: Annual later-life nutrition review
              description: |-
                ## Purpose
                Appetite, weight, teeth, medicines and energy all shift from year to year after seventy, and a plan that worked at seventy-two can be wrong at seventy-six. One sitting each year to look at the weight log, food diary, screening result and medicines sheet keeps the whole area current.

                ## Milestones
                1. A year of weights and appetite notes read through and the trend written in a sentence.
                2. A fresh three-day food diary compared with the last one.
                3. Projects in this area archived or reactivated to match the year ahead.
                4. Three questions for the annual health check written down.

                ## Notes
                Line this up with the yearly medication review so questions about food and medicines are asked in one appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A yearly review note records the weight trend, compares two food diaries and lists questions for the annual health check."
                cadence: cyclic
              tasks:
                - "Read through the year of weights and write the trend in one sentence"
                - "Repeat the three-day food diary and compare it with last year's"
                - "Write three nutrition questions for the annual health check"
                - "Look at the last three months of weights for any downward drift @recurring(quarterly)"
                - "Hold the yearly nutrition review @recurring(yearly)"
            - name: Soft protein foods that are easy to chew
              description: |-
                ## Purpose
                Tough steak and chewy chops are often the first foods to go when teeth or energy fade, and protein goes with them. Learning a repertoire of soft protein foods, such as scrambled eggs, flaked fish, slow-cooked mince, lentil dal, tofu and Greek yoghurt, keeps protein up without a fight at every meal.

                ## Milestones
                1. Twelve soft protein foods listed across eggs, dairy, fish, meat and pulses.
                2. Four of them cooked and tasted for the first time or after a long gap.
                3. Six favourites added to the weekly meal plan rotation.
                4. A note made of which cooking methods keep meat tender, such as braising and slow cooking.

                ## Notes
                Slow cookers and pressure cookers turn cheap, tough cuts soft enough to cut with a fork, and they are easy to use with weaker hands.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve soft protein foods are listed and six are part of the weekly meal plan rotation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List twelve soft protein foods you would be willing to try"
                - "Cook four of them over the next fortnight"
                - "Try slow cooking one tougher cut of meat until fork-tender"
                - "Add your six favourites to the weekly meal plan list"
            - name: Unlearning low-fat rules when appetite falls
              description: |-
                ## Purpose
                Decades of advice to cut fat, sugar and calories can leave an underweight eighty-year-old choosing skimmed milk and diet yoghurt when their body needs the opposite. Understanding when everyday healthy-eating messages stop fitting, and what a doctor or dietitian suggests instead, avoids quietly undereating out of habit.

                ## Milestones
                1. The low-fat and low-calorie products in the fridge and cupboard listed.
                2. The doctor or dietitian asked whether those choices still suit your weight and health.
                3. Agreed swaps made, such as whole milk or full-fat yoghurt, where advised.
                4. A short note written explaining the change for family members who may question it.

                ## Notes
                This does not apply to everyone: people with diabetes, heart disease or a healthy weight may still need the old advice. The point is to ask, not assume.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A professional's view on low-fat and diet products is recorded and any agreed swaps are in the weekly shop."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every low-fat, light or diet product you buy regularly"
                - "Ask the doctor or dietitian whether those choices still suit you"
                - "Make the agreed swaps on your saved shopping list"
                - "Write a short note for family explaining the change"
            - name: Texture-modified food levels explained
              description: |-
                ## Purpose
                After a swallowing assessment, people are often given a texture level such as minced and moist, soft and bite-sized or pureed, and carers are left to work out what that means at the stove. Learning the framework your service uses, such as the international IDDSI levels, and the simple tests behind them, means food at home matches the advice.

                ## Milestones
                1. The texture and drink levels from the assessment written down exactly.
                2. Your service's guide to those levels read, including the fork and spoon tests.
                3. Three everyday meals tested against the level and adjusted.
                4. Questions about borderline foods taken back to the speech and language therapist.

                ## Notes
                Mixed textures, such as soup with bits or cereal in milk, are a common hidden risk. Only use the levels a professional has prescribed.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The prescribed texture level is written down and three everyday meals have passed its tests at home."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write the exact food and drink levels from the swallowing assessment"
                - "Read your service's guide to those levels and their tests"
                - "Test three usual meals with the fork and spoon checks"
                - "List foods you are unsure about and ask the therapist"
            - name: Preparing thickened drinks correctly
              description: |-
                ## Purpose
                When a thickener is prescribed, getting the consistency wrong in either direction matters: too thin risks drinks going down the wrong way, too thick and people stop drinking. Practising with the exact product, scoop and level until every drink comes out the same protects both safety and hydration.

                ## Milestones
                1. The prescribed thickener, scoop size and drink level written on a card by the kettle.
                2. The manufacturer's instructions for hot, cold and milky drinks read.
                3. Each common drink made and tested against the level.
                4. Everyone who makes drinks, including visitors and paid carers, shown how.

                ## Notes
                Different brands thicken differently, so a change of product means retesting. Keep thickener out of reach of anyone with dementia who might eat it dry.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A thickening card is by the kettle and every regular drink has been made and tested at the prescribed level by each person who makes drinks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the thickener name, scoop count and level on a card by the kettle"
                - "Make tea, juice and milk at the prescribed level and test each"
                - "Show each visitor and carer who makes drinks how to do it"
                - "Store the thickener tin somewhere it cannot be eaten by mistake"
            - name: Making soft and pureed meals look appetising
              description: |-
                ## Purpose
                A plate of beige mush looks like a punishment, and people on pureed diets often eat less because of it. Pureeing each part of a meal separately, using colour, moulds and garnishes, and serving in normal dishes makes texture-modified food look like a meal again.

                ## Milestones
                1. A blender or stick blender chosen that copes with small portions.
                2. Three meals pureed with each component kept separate.
                3. Colour and shape added with simple moulds, piping or contrasting plates.
                4. Feedback from the person eating noted after each meal.

                ## Notes
                Season after blending, as pureeing dulls flavour. Make sure presentation tricks still meet the texture level, so no lumps, skins or crisp edges.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three pureed meals with separately prepared components have been served and the eater's feedback recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose a stick blender or small blender that handles single portions"
                - "Puree the meat, vegetables and potato of one meal separately"
                - "Shape each component with a mould or spoon and serve on a contrasting plate"
                - "Ask the person eating what they liked and change one thing next time"
            - name: Taste and smell changes in later life
              description: |-
                ## Purpose
                Taste buds and sense of smell dull with age, medicines and some illnesses, so favourite meals start to taste of nothing and people lose interest. Learning which flavours still come through, such as sour, herby, spicy or sweet, and boosting those instead of reaching for the salt cellar brings pleasure back to eating.

                ## Milestones
                1. The pharmacist asked whether any medicines affect taste or smell.
                2. A tasting of five contrasting flavours done to see which still register.
                3. Three regular meals adjusted with lemon, herbs, spices or sauces.
                4. Any sudden or one-sided loss of taste or smell reported to the doctor.

                ## Notes
                Food served warm rather than piping hot releases more aroma. A clean mouth and good denture care also help taste.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Medicines are checked for taste effects and three regular meals have been adjusted to the flavours that still come through."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the pharmacist whether any medicine affects taste or smell"
                - "Taste something sour, sweet, spicy, bitter and herby side by side"
                - "Add lemon, herbs or spice to three meals you have gone off"
                - "Note which changes made food more enjoyable"
            - name: No-chop recipes for low-energy days
              description: |-
                ## Purpose
                Standing at a chopping board for twenty minutes is beyond many people on a tired day, and that is when meals get skipped. A short set of recipes that use frozen chopped vegetables, tins, microwave rice and ready-cooked protein makes a balanced hot meal possible in ten minutes with no knife.

                ## Milestones
                1. Five no-chop recipes written on cards, each with a protein food and a vegetable.
                2. The frozen, tinned and pouch ingredients for them kept in stock.
                3. Each recipe cooked once and timed.
                4. The cards kept where they are easy to find on a bad day.

                ## Notes
                Frozen vegetables are as nourishing as fresh and need no peeling. A microwave and one saucepan are enough for all five.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five no-chop recipe cards, each tested and under fifteen minutes, are in the kitchen with their ingredients in stock."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write five meals that need no chopping and use frozen or tinned ingredients"
                - "Buy the ingredients for all five and store them together"
                - "Cook each recipe once and note how long it took"
                - "Pin the recipe cards inside a cupboard door"
            - name: Higher-risk foods for older immune systems
              description: |-
                ## Purpose
                Immunity weakens with age, so food poisoning bugs such as listeria and salmonella cause more serious illness in people over sixty-five. Knowing which foods carry the most risk, such as pre-packed sandwiches kept too long, soft mould-ripened cheese, pate and smoked fish, lets you make informed swaps without giving up favourite foods.

                ## Milestones
                1. Your health service's advice on higher-risk foods for older people read.
                2. The foods on that list you regularly eat identified.
                3. Safer swaps or handling rules chosen for each, such as heating smoked fish until steaming.
                4. The list shared with anyone who shops or cooks for you.

                ## Notes
                Risk rises further with chemotherapy, steroids and some other treatments; ask the treating team for their own food guidance.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short list of higher-risk foods you eat, each with a chosen swap or handling rule, is shared with anyone who shops for you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's food safety advice for older people"
                - "Mark which higher-risk foods you eat regularly"
                - "Choose a swap or a heating rule for each one"
                - "Share the list with anyone who shops or cooks for you"
            - name: Choosing a meal delivery or community meals service
              description: |-
                ## Purpose
                Delivered meals can keep nutrition steady once cooking every day is no longer realistic, but services differ widely in texture options, portion size, price and whether anyone checks on the person at the door. Comparing two or three on the same criteria leads to a choice that suits appetite, diet and budget.

                ## Milestones
                1. Options listed: council or charity meals, frozen meal companies and local cooks.
                2. Each scored on price, menu choice, texture options, special diets and doorstep contact.
                3. Two services trialled for a week each.
                4. One chosen, with a backup noted if it fails.

                ## Notes
                Start from the **Purchase decision** template. Check whether a social care assessment would fund or part-fund meals before paying privately.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A meal service is chosen after scoring at least three options and trialling two, with a backup recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List council, charity and private meal services that deliver to your area"
                - "Score each on price, choice, textures, special diets and doorstep contact"
                - "Trial the top two for a week each"
                - "Review whether the chosen service is still being eaten and enjoyed @recurring(quarterly)"
            - name: Questions to ask before using supplement drinks
              description: |-
                ## Purpose
                Milkshake-style supplement drinks are sold everywhere, and they can help someone losing weight, but they are not right for everyone and can replace meals instead of adding to them. Asking the doctor or dietitian whether one is needed, which type, how many and for how long turns a shop purchase into a plan with a review date.

                ## Milestones
                1. The reasons for considering a supplement drink written down, with recent weights.
                2. The doctor or dietitian asked whether a prescribed or bought product is appropriate.
                3. Type, number per day, timing and review date agreed.
                4. A note made to take drinks between meals, not instead of them, if that is the advice.

                ## Notes
                Drinks given on prescription are often reviewed and stopped when weight recovers. Diabetes and kidney disease change which products are suitable.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on supplement drinks, with type, amount and a review date, is agreed with a professional and written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you are considering supplement drinks and your recent weights"
                - "Ask the doctor or dietitian whether a supplement drink is suitable"
                - "Record the agreed product, amount, timing and review date"
                - "Put the review date in your calendar"
            - name: Adapting family favourite recipes to softer textures
              description: |-
                ## Purpose
                Being told to eat soft food can feel like losing the meals that hold memories, from a Sunday roast to a family curry. Reworking three or four favourites into softer versions, such as a shepherd's pie instead of roast lamb, keeps the familiar flavours at the table.

                ## Milestones
                1. Four much-loved meals listed that have become hard to eat.
                2. A softer version of each worked out, keeping the main flavours.
                3. Each adapted recipe cooked and tasted by the person it is for.
                4. The recipes written down with the texture changes clearly marked.

                ## Notes
                If a texture level has been prescribed, check each adapted recipe against it before serving.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four favourite recipes are rewritten in softer versions, each cooked and approved by the person eating them."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the person which four meals they miss most"
                - "Work out a softer version of the first favourite"
                - "Cook it together and ask what tastes right and what does not"
                - "Write each adapted recipe with the texture change marked"
            - name: Protein and fibre breakfast upgrade
              description: |-
                ## Purpose
                Breakfast in later life is often tea and a slice of toast, which leaves the longest fast of the day broken with almost no protein or fibre. Trying a handful of easy upgrades, such as porridge made with milk, eggs, yoghurt with fruit or beans on toast, sets up the day with both.

                ## Milestones
                1. Current breakfasts for one week written down.
                2. Five upgraded breakfasts chosen that each include a protein food.
                3. Each tried at least once over two weeks.
                4. Two or three adopted as the usual breakfast.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two or three breakfasts with a protein food and a fibre source have replaced the old default on most days for a month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you ate for breakfast each day this week"
                - "Choose five breakfasts that each include a protein food"
                - "Try a new breakfast on at least five mornings this fortnight"
                - "Keep the ingredients for your favourite two always in stock"
            - name: Replacing the tea and toast supper
              description: |-
                ## Purpose
                Carers and doctors talk about tea and toast syndrome: older people living alone who slip into eating only bread, biscuits and tea because cooking feels pointless. Choosing a set of easy proper suppers, with a protein food and a vegetable, replaces the slide with something just as easy.

                ## Milestones
                1. The number of evenings in a fortnight that were tea, toast or biscuits counted.
                2. Six suppers chosen that take under fifteen minutes and include a protein food.
                3. Ingredients for them kept in stock.
                4. Tea and toast evenings halved over the following month.

                ## Notes
                Ready meals, tinned soup with a cheese sandwich and an omelette all count as proper suppers. Perfect is not the goal.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Tea and toast suppers are at least halved over a month compared with a counted fortnight before."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count the tea and toast suppers over the next fortnight"
                - "Pick six quick suppers that include a protein food"
                - "Stock the ingredients for all six"
                - "Count again after a month and compare"
            - name: Moving the main meal to midday
              description: |-
                ## Purpose
                Appetite in many older people is strongest at lunchtime and fades by evening, especially with tiredness or early sunsets in winter. Trialling the main cooked meal at midday, with a lighter supper, can raise total food eaten and makes cooking easier while energy is higher.

                ## Milestones
                1. Appetite at breakfast, lunch and supper rated for a week.
                2. A two-week trial of a cooked lunch and a light supper.
                3. Total food eaten and how you felt compared with the old pattern.
                4. A decision made to keep, adjust or drop the change.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A two-week midday main meal trial is compared with the usual pattern and a decision to keep or drop it is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Rate your appetite at each meal for a week from one to five"
                - "Swap to a cooked lunch and a light supper for two weeks"
                - "Compare how much you ate and how you felt"
                - "Decide whether to keep the new pattern and adjust the meal plan"
            - name: Deciding what help with cooking to bring in
              description: |-
                ## Purpose
                There is a point where cooking every day becomes risky or exhausting, and families often swing from doing nothing to doing everything. Weighing the real options, such as a family cooking rota, homecare visits at mealtimes, a meal service, a cleaner who preps vegetables or cooking together weekly, finds the level of help that keeps the most independence.

                ## Milestones
                1. The cooking tasks that are now hard or unsafe listed honestly.
                2. Four options of help costed and compared.
                3. The person themselves asked what help they would accept.
                4. A decision recorded with a date to review it.

                ## Notes
                Ask for a social care needs assessment early; it can open funded support and gives an independent view when family members disagree.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on cooking help, agreed with the person concerned and with a review date, replaces ad hoc arrangements."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the cooking tasks that are now difficult or unsafe"
                - "Ask the local council for a social care needs assessment"
                - "Compare four kinds of help on cost, reliability and independence"
                - "Agree the chosen option with the person and set a review date"
            - name: First fortnight of meals home from hospital
              description: |-
                ## Purpose
                Older people commonly lose weight and strength during a hospital stay, then come home to an empty fridge and too little energy to cook. Planning the first two weeks of meals before or on discharge, with stocked food, easy options and help lined up, protects recovery and lowers the chance of going straight back in.

                ## Milestones
                1. Any dietary advice from the ward, such as texture or supplement drinks, written down before leaving.
                2. Fridge and cupboard stocked for the first three days before arriving home.
                3. Two weeks of easy meals planned, with help from family, friends or a meal service.
                4. Weight checked at home within a week and again at two weeks.

                ## Notes
                Ask the ward or discharge team whether a dietitian saw the patient, and for a copy of any nutrition plan to go with the discharge letter.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Food is stocked before arrival home and two weeks of easy meals are planned, with weight checked twice in the first fortnight."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the ward for any dietary advice and supplement prescriptions before discharge"
                - "Stock three days of easy food before the person arrives home"
                - "Plan two weeks of meals and who is cooking or delivering each"
                - "Weigh at home after one week and after two weeks"
            - name: Preparing for a dietitian appointment
              description: |-
                ## Purpose
                A first dietitian appointment is often short, and much of it can be spent remembering what was eaten last week. Arriving with a food diary, weight history, medicines list and two or three clear questions makes the advice specific to you rather than a general leaflet.

                ## Milestones
                1. A recent three-day food diary and weight log ready to hand over.
                2. The medicines and food sheet brought along.
                3. Three questions written in order of importance.
                4. The advice given written down in your own words before leaving.

                ## Notes
                Bring the person who does most of the cooking if that is not the patient. Ask for a written copy of any plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dietitian appointment is attended with diary, weights and questions, and the advice is written down the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the doctor for a dietitian referral if one has not been made"
                - "Gather the food diary, weight log and medicines sheet in one folder"
                - "Write your three most important questions"
                - "Write down the dietitian's advice before leaving the building"
            - name: Eating well around planned surgery
              description: |-
                ## Purpose
                Going into a hip, knee or other planned operation well nourished helps healing and recovery, and the weeks after often bring poor appetite and limited mobility. Preparing food, freezer meals and kitchen access before the date means recovery is not undone by weeks of biscuits.

                ## Milestones
                1. The pre-operation team asked about any eating advice before and after surgery.
                2. Ten single portions of easy meals stocked in the freezer.
                3. The kitchen arranged so everything needed is reachable without bending or stretching.
                4. Help with shopping arranged for the first four weeks after.

                ## Notes
                Hip replacement rules often limit bending; move kettle, microwave and everyday food to worktop height before the operation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Ten freezer portions, a reachable kitchen and four weeks of shopping help are in place before the surgery date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the pre-operation clinic for any eating advice before and after"
                - "Cook or buy ten single freezer portions of easy meals"
                - "Move everyday food and equipment to worktop height"
                - "Arrange who will shop for you in the four weeks after surgery"
            - name: Multi-generation family meal everyone can eat
              description: |-
                ## Purpose
                Birthday lunches and family gatherings can leave an older guest picking at food they cannot chew or should not eat, and quietly feeling left out. Planning one menu where every dish has a soft or adapted version, served without fuss, keeps grandparents part of the meal instead of catered for separately.

                ## Milestones
                1. The older guest's texture needs, diet and preferences confirmed with them.
                2. A menu planned where at least the main course and pudding work for everyone.
                3. Seating, timing and portion size arranged around the older guest's energy.
                4. The meal served and the older guest asked what worked.

                ## Notes
                Serve the older guest first and early in the gathering, when they are least tired. Avoid making a separate plate obvious.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A family meal is served where the main course and pudding suit the older guest's needs, and their feedback is noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the older guest about foods they find hard or are avoiding"
                - "Plan a main course and pudding that everyone can eat"
                - "Seat them in a comfortable chair close to the kitchen and serve early"
                - "Ask afterwards what worked and what to change next time"
            - name: Winter warmth and food readiness
              description: |-
                ## Purpose
                Cold homes, dark evenings and icy pavements combine in winter to cut appetite and trips to the shops, and older people lose weight and strength over the season. Preparing before the cold sets in, with a fuller cupboard, a hot meal a day, warm drinks and support arranged, keeps eating steady through to spring.

                ## Milestones
                1. The store cupboard checked and topped up before the first frost.
                2. A hot meal a day planned, with soups and stews batch-cooked in single portions.
                3. A flask or insulated mug ready so hot drinks are always close by.
                4. Someone lined up to shop on icy days.

                ## Notes
                Ask about winter fuel or heating support schemes in your area if heating cost is cutting into food money.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the first frost each year the cupboard is topped up, six single portions of soup or stew are frozen and an icy-day shopper is named."
                cadence: cyclic
              tasks:
                - "Check the store cupboard against your list and top it up"
                - "Batch-cook and freeze six single portions of soup or stew"
                - "Agree with a neighbour or relative who shops on icy days"
                - "Run through winter food readiness before the clocks change @recurring(yearly)"
            - name: Learning to cook after losing a partner who cooked
              description: |-
                ## Purpose
                Many widowed people, often men of an older generation, have never cooked daily because their partner always did, and grief makes starting even harder. Learning a small set of reliable meals, one a week at a gentle pace, with a friend, a class or written cards, rebuilds both nourishment and independence.

                ## Milestones
                1. Eight meals chosen, ideally including some the partner used to make.
                2. One new meal learnt each week with a friend, relative, community class or recipe card.
                3. Each learnt meal written on a card in your own words.
                4. Eight meals cooked without help at least once.

                ## Notes
                Community centres and charities often run cooking courses for older men or people living alone. A partner's handwritten recipes can be a comfort to cook from, when you feel ready.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight meals have been learnt and cooked unaided at least once, each recorded on a recipe card."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write down eight meals you would like to be able to cook"
                - "Ask a friend, relative or community class to teach the first one"
                - "Write each meal on a card in your own words after cooking it"
                - "Cook one learnt meal on your own each week"
            - name: Carer's food profile for an ageing parent
              description: |-
                ## Purpose
                When several siblings, neighbours and paid carers all feed one older parent, likes, dislikes, allergies, texture needs and medicine timings live in different heads. A single shared profile means whoever is cooking gets it right and nobody repeats the same questions.

                ## Milestones
                1. Likes, dislikes, cultural or religious food rules and allergies written down with your parent.
                2. Texture level, fluid target and medicine timings added.
                3. Usual meal times and portion sizes recorded.
                4. The profile shared with everyone who cooks for them, with a date it was last checked.

                ## Notes
                Start from the **Person** template. Write it with your parent where possible, in their words; it protects their choices if they later cannot explain them.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A food profile covering preferences, needs and timings is written with the parent and shared with everyone who cooks for them."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sit with your parent and list the foods they love and refuse"
                - "Add texture needs, fluid target, allergies and medicine timings"
                - "Record usual meal times and how much they like on the plate"
                - "Share the profile with siblings, neighbours and paid carers"
            - name: Supporting eating and drinking with dementia
              description: |-
                ## Purpose
                Dementia changes eating in ways that look like refusal: forgetting to eat, not recognising food, trouble with cutlery, pacing away from the table or not feeling thirst. A few practical changes, such as finger foods, coloured plates, prompting and eating together, often make more difference than any change of recipe.

                ## Milestones
                1. The specific eating difficulties noted over a week, with times and situations.
                2. Finger food versions of three regular meals tried.
                3. Plates with a contrasting colour to the food and the table in use.
                4. Drinks offered visibly and often, with intake tallied for a week.
                5. Any weight loss or swallowing signs reported to the doctor or memory service.

                ## Notes
                Sitting and eating with the person, rather than watching them eat, encourages them to copy. A dementia support charity or memory service can advise on later-stage eating changes.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Finger foods, contrasting plates and a daily drink tally are in use, and eating difficulties observed over a week are shared with the memory service."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Note each eating difficulty you see this week and when it happens"
                - "Make finger food versions of three meals they usually enjoy"
                - "Buy plates in a colour that contrasts with both food and table"
                - "Sit down and eat with them at least once a day"
            - name: Cooking for a couple with different later-life needs
              description: |-
                ## Purpose
                One partner may need to gain weight while the other manages diabetes, or one needs soft food while the other wants a crusty loaf, and cooking two dinners every night soon wears the cook out. Designing meals around one shared base with simple additions or swaps on each plate feeds both properly from one pan.

                ## Milestones
                1. Both partners' dietary needs and any professional advice written side by side.
                2. Six shared base meals chosen that suit both.
                3. For each, the additions or swaps for each plate written down.
                4. Two weeks cooked from one base with both partners satisfied.

                ## Notes
                Fortification can happen on one plate only: a spoon of cream or grated cheese added after serving keeps the shared pot neutral.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Six shared base meals with written per-plate swaps have been cooked over two weeks and suit both partners' advice."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write both partners' food advice side by side on one page"
                - "Choose six meals that could suit both with small changes"
                - "Note the additions or swaps for each plate"
                - "Cook from the shared plan for two weeks and ask both what worked"
            - name: Food preferences profile for care home or sheltered housing
              description: |-
                ## Purpose
                Moving into a care home or extra-care housing means meals are cooked by people who do not know a lifetime of likes, dislikes and rituals. Writing a food profile before the move, and meeting the cook or catering manager, gets preferences, textures and mealtime habits respected from the first week.

                ## Milestones
                1. A one-page food profile written with the person moving in.
                2. The home's menus and approach to special diets and texture levels seen.
                3. A meeting held with the cook or catering manager.
                4. A review of how meals are going booked for the first month.

                ## Notes
                Include small rituals that matter, such as a boiled egg on Sundays or tea with milk first; they carry more weight in a new place than they seem to.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A food profile is handed to the home's catering lead before or at the move, with a review of meals held within the first month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a one-page food profile with the person who is moving"
                - "Ask the home for its menus and how it handles texture and special diets"
                - "Meet the cook or catering manager and hand over the profile"
                - "Book a conversation about meals for four weeks after the move"
            - name: Briefing paid carers on mealtimes
              description: |-
                ## Purpose
                Homecare visits are often short, and a carer arriving cold may heat a ready meal and leave without knowing that it is never eaten. A clear written mealtime brief kept in the care folder, with what to make, how to serve it and what to record, turns rushed visits into proper meals.

                ## Milestones
                1. A one-page brief listing usual meals for each visit, drinks and any texture rules.
                2. A simple record sheet for what was offered and how much was eaten.
                3. The brief walked through with the care agency or regular carers.
                4. Record sheets read weekly for patterns of uneaten food.

                ## Notes
                Ask the agency how long each visit really is; a twenty-minute brief for a fifteen-minute visit will not be followed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A mealtime brief and intake record are in the care folder, discussed with the agency, and records are reviewed for at least one month."
                cadence: rolling
              tasks:
                - "Ask the care agency how long each visit lasts in practice"
                - "Write a one-page mealtime brief for each visit time"
                - "Add a sheet for carers to record what was offered and eaten"
                - "Update the brief and read the intake records for patterns @recurring(monthly:3)"
            - name: Strength-focused eating alongside resistance exercise
              description: |-
                ## Purpose
                Age-related muscle loss, called sarcopenia, responds best to protein combined with regular strength exercise, not either on its own. For an active retiree or someone in a falls or strength programme, timing protein around exercise sessions and tracking simple strength measures shows whether the effort is working.

                ## Milestones
                1. A strength or falls prevention programme agreed with a physiotherapist or trainer.
                2. A protein food or drink planned within a couple of hours of each session.
                3. A baseline strength measure recorded, such as a chair stand test or grip test.
                4. The measure repeated after twelve weeks.

                ## Notes
                Ask the physiotherapist or doctor which strength test suits you and whether any health conditions limit protein or exercise.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Protein is planned around each strength session for twelve weeks and a strength measure is recorded at the start and the end."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a physiotherapist or doctor about a strength or falls programme"
                - "Record a baseline chair stand or grip strength test"
                - "Plan a protein snack after each exercise session"
                - "Repeat the strength test and note the change @recurring(monthly:25)"
            - name: Two-week texture-modified menu cycle
              description: |-
                ## Purpose
                Cooking for someone on a long-term texture-modified diet becomes repetitive fast, and boredom leads to smaller portions. A two-week menu cycle at the prescribed level, with nutrition balanced across the fortnight and batch-cooked components frozen, keeps variety high and daily effort low.

                ## Milestones
                1. Fourteen days of main meals and puddings planned at the prescribed texture level.
                2. Each day checked for a protein food, a fruit or vegetable and fluid-rich foods.
                3. Components that freeze well batch-cooked and labelled with texture level and date.
                4. The cycle run once and unpopular meals replaced.

                ## Notes
                Ask the speech and language therapist or dietitian to look over the menu once. Label frozen portions with the level so anyone reheating them knows.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day menu at the prescribed texture level has been run once and reviewed by a professional."
                cadence: cyclic
              tasks:
                - "Ask the agent to draft a fourteen-day menu at the prescribed texture level from your favourites list"
                - "Check each day has protein, fruit or vegetables and fluid-rich foods"
                - "Batch-cook and label freezable components with level and date"
                - "Swap out unpopular dishes and restart the cycle @recurring(monthly:18)"
            - name: Comfort-focused eating near the end of life
              description: |-
                ## Purpose
                As someone approaches the end of life, the goal of eating usually shifts from nutrition to comfort and pleasure, and families can feel guilty when food is refused. Talking with the palliative or hospice team about what to offer, and recording the person's wishes, lets everyone focus on favourite tastes, mouth care and company.

                ## Milestones
                1. The palliative or hospice team asked how eating and drinking may change and what to offer.
                2. The person's favourite tastes, drinks and wishes recorded while they can express them.
                3. Mouth care supplies and routine in place for when food and drink are minimal.
                4. Family members told about the change of goal so mealtimes are not a source of conflict.

                ## Notes
                Families find this one of the hardest stages. Hospice teams support families as well as patients; ask them to explain the changes to relatives who are struggling.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written note of the person's food wishes and the palliative team's advice is shared with the family, and a mouth care routine is in place."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the palliative team how eating may change and what to offer"
                - "Write down favourite tastes, drinks and wishes with the person"
                - "Ask the nurses to show the family a mouth care routine"
                - "Share the team's advice with family members who visit"
            - name: Monthly community lunch for older neighbours
              description: |-
                ## Purpose
                For an energetic retiree, organising a simple monthly lunch for older neighbours who live alone is one of the most direct ways to improve how they eat and how connected they feel. A modest set menu with soft options in a hall, church or someone's home, with lifts arranged, can become the meal people look forward to all month.

                ## Milestones
                1. A venue, a date pattern and two co-organisers secured.
                2. Food safety basics checked with the local council for community cooking.
                3. A guest list built through neighbours, places of worship and the practice.
                4. A set menu with soft and special diet options agreed.
                5. Three lunches held with numbers and feedback noted.

                ## Notes
                Ask guests about allergies and texture needs at sign-up, not on the day. Keep the price low or free; donations jars cover more than people expect.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Three monthly community lunches with a soft-food option have been held, with attendance and feedback recorded."
                cadence: rolling
              tasks:
                - "Ask two friends to co-organise and agree a monthly day"
                - "Book a hall, church room or home with an accessible kitchen"
                - "Check the council's rules for community cooking and serving food"
                - "Collect allergy and texture needs from each guest at sign-up"
                - "Run the neighbours' lunch and note attendance @recurring(monthly:11)"
---

# Nutrition for Older Adults

This area is for anyone eating in their seventies, eighties and beyond, and for the partners, sons, daughters and paid carers who help them, because later life turns ordinary nutrition advice on its head: losing weight is more often a warning than a win, protein matters more, thirst fades and chewing or swallowing can change. It starts with the foundations (a food diary, a weight log, screening, medicines, teeth, swallowing, fluids, protein, bones and an easier kitchen), moves through the routines that keep meals happening, the skills of fortifying food and preparing softer textures, decisions about meal services, supplement drinks and help with cooking, the events of hospital stays, surgery and family meals, versions for widowed cooks, carers, couples and people living with dementia, and finally strength-focused eating, texture-modified menu cycles, comfort-focused eating near the end of life and running a lunch for neighbours.

What repeats is a daily fluid tally, a weekly meal plan, grocery order and social meal, a monthly weigh-in, carer check and care briefing update, a quarterly store cupboard rotation and weight trend look, and yearly reviews of medicines, teeth, screening, heat and winter plans. The Metrics log, Habit tracker, Weekly meal plan, Purchase decision and Person templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
