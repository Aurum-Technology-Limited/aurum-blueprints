---
id: food-nutrition.pregnancy-breastfeeding-nutrition
name: Pregnancy & Breastfeeding Nutrition
description: "Supplements and foods to avoid agreed with your midwife, steady meals and snacks through each trimester, freezer meals before the birth, and easy one-handed eating while breastfeeding."
category: personal
version: 1.0.0
tags: [food-nutrition, pregnancy-breastfeeding-nutrition, parent, pregnancy, breastfeeding, prenatal-nutrition, postnatal]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - purchase-decision
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Pregnancy & Breastfeeding Nutrition
          description: "Eating for pregnancy and breastfeeding, including foods to avoid, key nutrients, supplements and easy meals for tired new parents."
          projects:
            - name: Pregnancy supplements agreed with your midwife
              description: |-
                ## Purpose
                Folic acid is most useful in the weeks before conception and the first twelve weeks, and many health services also recommend vitamin D and sometimes iodine through pregnancy and breastfeeding. A higher folic acid strength is advised for some people, for example with diabetes, a raised body mass index or a previous pregnancy affected by a neural tube condition, so the right plan is personal. Getting it agreed and written down in the first week means nothing is missed while you wait for the booking appointment.

                ## Milestones
                1. Your health service's published supplement advice for pregnancy found and saved.
                2. Your doctor, midwife or pharmacist asked whether the standard or a higher folic acid strength applies to you.
                3. The agreed supplements, strengths and stop dates written in your pregnancy notes.
                4. A daily time for taking them attached to breakfast or another fixed habit.

                ## Notes
                Avoid supplements containing vitamin A in its retinol form unless a clinician has prescribed them. Pregnancy vitamins are free through maternity services in some countries, so ask before you buy.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The supplements you take in pregnancy, with strengths and how long to continue, are agreed with a clinician and written in your notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's supplement advice for pregnancy"
                - "Ask your midwife, doctor or pharmacist which folic acid strength suits you"
                - "Write the agreed supplements and stop dates in your pregnancy notes"
                - "Take the agreed pregnancy supplements with breakfast @recurring(daily)"
            - name: Foods to avoid card for the fridge door
              description: |-
                ## Purpose
                Pregnancy food rules vary between countries and change as evidence moves, and half-remembered lists from friends often ban safe foods while missing risky ones. A single card written from your own health service's current list, covering cheeses, pâté, raw or undercooked meat and eggs, liver and certain fish, settles questions at the fridge rather than on a search engine. It also lets a partner shop and cook with confidence.

                ## Milestones
                1. Your health service's current list of foods to avoid or limit in pregnancy found.
                2. A one-page card written in three columns: avoid, limit, and fine if cooked through.
                3. The card on the fridge door and a photo of it on your phone.
                4. Two or three foods you were unsure about checked with your midwife.

                ## Notes
                Date the card. Guidance on eggs, for example, has changed in some countries in recent years, so check the source again before using the card in a later pregnancy.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated foods-to-avoid card, written from your health service's current guidance, is on the fridge and saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your health service's current list of foods to avoid in pregnancy"
                - "Sort the list into avoid, limit and fine if cooked through"
                - "Print the card and stick it on the fridge door"
                - "Send a photo of the card to your partner and anyone who cooks for you"
            - name: Listeria and toxoplasma precautions at home
              description: |-
                ## Purpose
                Listeria and toxoplasma infections are rare but can harm a pregnancy, and both are mostly prevented by habits in the kitchen and garden rather than by giving up whole food groups. Reheating chilled ready meals until steaming, washing salad and vegetables well, keeping the fridge cold and wearing gloves for gardening or cat litter cut the risk to a low level. Setting these up in the first weeks means they are automatic by the time tiredness sets in.

                ## Milestones
                1. A fridge thermometer in place, reading at or below the temperature your health service recommends.
                2. Chilled leftovers and ready meals reheated until steaming hot all the way through, every time.
                3. Salad, fruit and vegetables washed before eating, including bagged salad if your guidance says so.
                4. Cat litter handed to someone else, or gloves used, and gloves kept by the garden door.

                ## Notes
                Ask your midwife which symptoms, such as a fever or a flu-like illness, should prompt a call during pregnancy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A fridge thermometer is in place, the household reheats chilled food until steaming, and someone else handles cat litter or gloves are always used."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put a fridge thermometer on the middle shelf and read it tonight"
                - "Agree who empties the cat litter tray for the rest of the pregnancy"
                - "Keep a pair of gloves by the back door for gardening"
                - "Read the fridge thermometer and adjust the dial if it is too warm @recurring(weekly:wed)"
            - name: Caffeine budget across a pregnancy day
              description: |-
                ## Purpose
                Health services set a daily caffeine limit in pregnancy, and it is easy to pass it without a second coffee: tea, cola, energy drinks, dark chocolate and some cold remedies all count, and a large café coffee can hold far more than a mug made at home. Adding up a typical day once shows whether anything needs to change and which swaps will feel least like a sacrifice.

                ## Milestones
                1. Your health service's daily caffeine limit for pregnancy written down.
                2. Every caffeinated drink and food in a typical day listed with an approximate caffeine figure.
                3. The daily total compared with the limit.
                4. Swaps chosen, such as half-caffeine blends, smaller sizes or caffeine-free tea, if the total is over.

                ## Notes
                Energy drinks are often advised against entirely in pregnancy, not just limited. Check cold and flu products with your pharmacist.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A typical day's caffeine is added up and compared with your health service's limit, with any swaps written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your health service's caffeine limit for pregnancy"
                - "List every drink and snack with caffeine you had yesterday"
                - "Look up caffeine figures for your usual café order and teabags"
                - "Choose two swaps that bring a heavy day under the limit"
            - name: Alcohol-free pregnancy and social drinks plan
              description: |-
                ## Purpose
                Most health services advise that the safest approach in pregnancy is no alcohol at all, and the hard part is usually social: the early weeks before announcing, work events, weddings and the expectation of a toast. Having a few alcohol-free drinks you enjoy and a sentence ready for when someone offers makes those moments easy instead of awkward.

                ## Milestones
                1. Your health service's alcohol advice for pregnancy read and saved.
                2. Three alcohol-free drinks you like found and stocked at home.
                3. A short line ready for declining a drink before you have shared the news.
                4. A plan for the next big social event written, including what you will order.

                ## Notes
                If you drank before you knew you were pregnant, tell your midwife rather than worrying alone. They hear it often.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three alcohol-free drinks are stocked at home and a plan is written for the next social event in your calendar."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's advice on alcohol in pregnancy"
                - "Buy three alcohol-free drinks to try this week"
                - "Write a one-line answer for when someone offers you a drink"
                - "Plan what you will order at the next wedding, party or work event"
            - name: Three-day food record before the booking appointment
              description: |-
                ## Purpose
                Before anyone can say whether your diet covers pregnancy needs, someone has to know what you actually eat, and memory is unreliable when nausea or a busy job is skewing things. Writing down everything for two weekdays and one weekend day gives you and your midwife a real picture, and shows quickly whether iron, calcium or fruit and vegetables are thin.

                ## Milestones
                1. Three days recorded, two weekdays and one weekend day, including drinks and snacks.
                2. Each day marked for iron-rich foods, dairy or calcium alternatives, fruit and vegetables, and oily fish.
                3. The two or three biggest gaps noted in a sentence each.
                4. The record brought to the booking appointment.

                ## Notes
                Start from the **Metrics log** template. Record honestly; this is for spotting gaps, not for judging yourself.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A three-day food record with its main gaps noted is complete and brought to the booking appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a simple food log with a row for each meal and snack"
                - "Record everything eaten and drunk for two weekdays and a weekend day"
                - "Mark each day for iron, calcium, fruit, vegetables and oily fish"
                - "Write the three biggest gaps at the bottom of the record"
            - name: Booking appointment diet and history questions
              description: |-
                ## Purpose
                The booking appointment, usually somewhere between eight and twelve weeks, is when your midwife or doctor asks about health history, medicines, weight and diet, and it moves fast. Arriving with your supplement list, your food record, any special diet and your questions written down means advice is based on your real situation, and referrals such as a dietitian or early diabetes screening are raised at the start.

                ## Milestones
                1. A list of current medicines, supplements and herbal products ready.
                2. Any special diet, allergy, eating disorder history or past weight loss surgery noted to mention.
                3. Five questions about food, weight and supplements written down.
                4. The answers and any referrals recorded within a day of the appointment.

                ## Notes
                Mention any history of disordered eating even if it feels long ago. It changes how weight and food are best discussed with you.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The booking appointment is attended with a medicines list, food record and written questions, and the answers are recorded within a day."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine, supplement and herbal product you take"
                - "Write five food and supplement questions for your midwife"
                - "Note any special diet, allergy or past eating difficulty to raise"
                - "Record the answers and referrals the same evening"
            - name: Morning sickness eating plan and red flags
              description: |-
                ## Purpose
                Nausea and vomiting affect most pregnancies in the first trimester, and the usual advice to eat balanced meals is useless when only toast stays down. A plan built around small frequent snacks, cold or bland foods, sipping fluids and a written list of warning signs keeps you fed and makes it clear when it is time to call for help instead of pushing through.

                ## Milestones
                1. A list of foods and drinks you can keep down, updated as it changes.
                2. Snacks within reach of the bed for before getting up.
                3. Your health service's warning signs written down, such as being unable to keep fluids down for a day, very dark urine or weight loss.
                4. A clinician contacted promptly if any warning sign appears, and the outcome recorded.

                ## Notes
                Severe sickness is a medical condition, not a lack of willpower. Treatments exist and are safe to ask about.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of foods you can keep down and the warning signs for severe sickness are written down, with a clinician contacted if any sign appears."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the foods and drinks you have kept down this week"
                - "Put crackers or dry snacks on the bedside table tonight"
                - "Copy your health service's warning signs for severe sickness onto your phone"
                - "Call your midwife or doctor the day you cannot keep fluids down"
            - name: Key pregnancy nutrients mapped to everyday foods
              description: |-
                ## Purpose
                Iron, calcium, iodine, vitamin D, omega-3 fats, choline and protein all matter more in pregnancy, but lists of nutrients do not tell you what to put on a plate. Mapping each one to five foods you already like, and noting which you rarely eat, turns the textbook into a shopping list. It also shows which gaps food can cover and which may need a supplement agreed with your midwife.

                ## Milestones
                1. Seven key nutrients listed with a one-line reason each, taken from a reliable source.
                2. Five foods you like written beside each nutrient.
                3. Nutrients with fewer than two regular foods flagged.
                4. Flagged gaps discussed with your midwife or a dietitian.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each of seven key pregnancy nutrients is mapped to five foods you eat, with any gaps raised with your midwife or a dietitian."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List iron, calcium, iodine, vitamin D, omega-3, choline and protein on one page"
                - "Write five foods you enjoy beside each nutrient"
                - "Flag the nutrients you eat fewer than twice a week"
                - "Take the flagged list to your next antenatal appointment"
            - name: Fish choices and limits in pregnancy
              description: |-
                ## Purpose
                Oily fish supplies omega-3 fats that support a baby's brain and eye development, but some large predatory fish carry mercury and many health services limit how often oily fish is eaten. The guidance is specific by species, so knowing which fish to avoid, which to limit and which to enjoy freely keeps the benefit without the worry.

                ## Milestones
                1. Your health service's fish guidance for pregnancy saved, species by species.
                2. The fish you normally buy sorted into avoid, limit and eat freely.
                3. A weekly fish meal pattern chosen that fits the guidance.
                4. Rules on raw fish, sushi and smoked fish confirmed.

                ## Notes
                If you do not eat fish, ask your midwife or a dietitian about other sources of omega-3 rather than assuming you need a supplement.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every fish you regularly buy is sorted against your health service's pregnancy guidance and a weekly fish pattern is chosen."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find your health service's pregnancy guidance on fish and mercury"
                - "Sort the fish you usually buy into avoid, limit and eat freely"
                - "Check the rules on sushi, smoked salmon and tinned tuna"
                - "Pick one or two fish meals a week that fit the guidance"
            - name: Weekly pregnancy meal plan
              description: |-
                ## Purpose
                Tiredness in the first and third trimesters makes the question of what is for dinner feel enormous, and that is when meals slide to toast or takeaway. A short plan each weekend, built on the foods-to-avoid card and your nutrient map, with at least two easy nights and a portion of oily fish, keeps food steady without daily decisions.

                ## Milestones
                1. A weekly plan with dinners and lunches sketched for seven days.
                2. At least two zero-effort nights built into every week.
                3. Iron, calcium and fish sources visible across the week.
                4. Eight weeks of plans saved to reuse later.

                ## Notes
                Start from the **Weekly meal plan** template. Reuse old weeks freely; variety across a month matters more than variety within one week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly plans are saved, each with two easy nights and visible iron, calcium and fish sources."
                cadence: rolling
              tasks:
                - "Write a list of ten dinners you can face cooking at the moment"
                - "Plan the coming week's lunches and dinners @recurring(weekly:sun)"
                - "Mark two nights a week as easy or leftovers"
                - "Save each finished plan so good weeks can be repeated"
            - name: Pregnancy snack kit for work and bedside
              description: |-
                ## Purpose
                Hunger in pregnancy arrives suddenly and nausea often worsens on an empty stomach, so long gaps at work or overnight cause trouble. A small kit in your bag, desk drawer and bedside table, stocked with snacks that are safe, filling and easy to eat, prevents both the nausea and the vending machine.

                ## Milestones
                1. Three places chosen for snack stashes.
                2. A list of eight safe snacks that travel well and keep without a fridge.
                3. Each stash stocked.
                4. A weekly restock running for a month without a stash running empty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Snack stashes in your bag, desk and bedside are restocked every week for a month without running out."
                cadence: rolling
              tasks:
                - "Choose eight safe snacks that keep without a fridge"
                - "Stock a box for your bag, your desk and your bedside"
                - "Restock all three snack stashes @recurring(weekly:mon)"
            - name: Daily water bottle routine for pregnancy and feeding
              description: |-
                ## Purpose
                Fluid needs rise in pregnancy and again while breastfeeding, and mild dehydration can worsen constipation, headaches and tiredness. A marked bottle filled at the same time each day, plus a glass of water at every feed once the baby arrives, is far easier to keep than counting glasses.

                ## Milestones
                1. Your midwife or health visitor asked about a sensible daily fluid amount for you.
                2. A bottle marked with time-of-day lines.
                3. The bottle filled each morning and ticked off for a month.
                4. A glass of water set beside you at every breastfeed once the baby arrives.

                ## Notes
                Start from the **Habit tracker** template. Pale straw-coloured urine is a common rough guide; ask if you are unsure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily bottle fills is ticked off in the habit tracker, with water at hand during feeds after the birth."
                cadence: rolling
              tasks:
                - "Ask your midwife what daily fluid amount suits you"
                - "Mark a reusable bottle with times of day"
                - "Fill the marked bottle each morning and tick it off @recurring(daily)"
                - "Set up a glass and jug by the main feeding chair"
            - name: Monthly pregnancy nutrition check-in
              description: |-
                ## Purpose
                Appetite, nausea, cravings and heartburn change month by month, and antenatal appointments are short. A fifteen-minute review each month of what you are eating, how supplements are going and which symptoms have appeared builds the question list for the next appointment, so nothing is forgotten in the room.

                ## Milestones
                1. A monthly check-in slot in the calendar.
                2. Each month's notes covering appetite, supplements, symptoms and gaps.
                3. Questions from each check-in added to your antenatal notes.
                4. Every month from booking to birth reviewed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly check-in is recorded for every month from booking to birth, with its questions taken to the next appointment."
                cadence: rolling
              tasks:
                - "Put a fifteen-minute nutrition check-in in the calendar each month"
                - "Review appetite, supplements and symptoms and note questions @recurring(monthly:12)"
                - "Copy the questions into your antenatal appointment notes"
            - name: Iron-rich dinners in the weekly rotation
              description: |-
                ## Purpose
                Iron needs rise steeply in pregnancy and many people are told at a routine blood test that their levels are low. Building a rotation of iron-rich dinners, paired with vitamin C foods and kept apart from tea at the same meal, helps food do as much of the work as possible alongside whatever your midwife advises.

                ## Milestones
                1. Ten iron-rich dinners you enjoy listed, including plant sources.
                2. Each dinner paired with a vitamin C food such as peppers, tomatoes or citrus.
                3. Tea and coffee moved away from iron-rich meals.
                4. Two dinners a week drawn from the rotation for a month.

                ## Notes
                Food does not replace iron treatment if a blood test shows deficiency. Follow your midwife's plan and use these meals alongside it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of ten iron-rich dinners is in use, with two eaten each week for a month."
                cadence: rolling
              tasks:
                - "List ten iron-rich dinners, including two using beans or lentils"
                - "Pair each dinner with a vitamin C food"
                - "Move tea and coffee to between meals rather than with them"
                - "Add one new iron-rich recipe to the list @recurring(monthly:18)"
            - name: Trimester eating review
              description: |-
                ## Purpose
                Each trimester brings different problems: nausea and aversions early, a steadier appetite in the middle, then heartburn, a squashed stomach and tiredness at the end. Reviewing your eating pattern at the start of each trimester means the plan changes with your body rather than three months after it.

                ## Milestones
                1. A short written review at the start of the second trimester.
                2. A short written review at the start of the third trimester.
                3. Changes from each review written into the meal plan.
                4. One more review at around six weeks after birth to set up feeding-time eating.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written review is completed at the start of each trimester and once after the birth, with changes made to the meal plan."
                cadence: cyclic
              tasks:
                - "Write down what is and is not working with eating right now"
                - "Review eating, symptoms and appetite for the new trimester @recurring(quarterly)"
                - "Change the meal plan to match what the review found"
            - name: Feeding-station snacks for breastfeeding
              description: |-
                ## Purpose
                Many breastfeeding parents feel ravenous and thirsty during feeds, often in the middle of the night with both hands full. A basket at each feeding spot with water, one-handed snacks and anything else you reach for, restocked weekly, means you eat when your body asks rather than when the baby allows.

                ## Milestones
                1. Main feeding spots identified, day and night.
                2. A basket at each with water and snacks that can be eaten one-handed.
                3. A weekly restock in place.
                4. A month of restocks done without a basket running empty.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every feeding spot has a stocked basket that is restocked weekly for a month."
                cadence: rolling
              tasks:
                - "Pick the two places you feed most often, day and night"
                - "Fill a basket for each with a water bottle and one-handed snacks"
                - "Restock the feeding-station baskets @recurring(weekly:sat)"
            - name: Partner's keep-the-feeder-fed routine
              description: |-
                ## Purpose
                In the early weeks the person breastfeeding can go hours without eating simply because they never have free hands. A partner or helper who owns breakfast, a mid-morning snack and the main meal on agreed days removes that problem completely, and it is one of the most concrete ways for a non-feeding parent to help.

                ## Milestones
                1. The daily meals the partner owns agreed and written down.
                2. A list of five quick meals the partner can make without asking.
                3. The partner cooking or ordering on their agreed nights for a month.
                4. A check-in held after two weeks on what is and is not working.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The partner or helper has provided their agreed meals on schedule for four weeks, with a check-in held at two weeks."
                cadence: rolling
              tasks:
                - "Agree which meals the partner or helper owns each day"
                - "Write five quick meals the partner can make without help"
                - "Cook or order the main meal on the partner's agreed nights @recurring(weekly:tue,fri)"
                - "Hold a ten-minute check-in after the second week"
            - name: Postnatal supplements while breastfeeding
              description: |-
                ## Purpose
                Supplement advice does not stop at the birth: many health services recommend vitamin D for breastfeeding parents and for breastfed babies, and some suggest continuing iodine or other supplements. Confirming what applies to you and to the baby, and keeping a steady supply, avoids the common drift where tablets quietly run out in the chaos of the first months.

                ## Milestones
                1. Your midwife or health visitor asked which of your supplements continue after birth.
                2. Advice on vitamin D drops for the baby recorded.
                3. A supply of each in the house.
                4. A monthly reorder check running.

                ## Notes
                Do not give the baby any supplement without guidance from your health visitor, doctor or pharmacist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Postnatal supplement advice for you and the baby is recorded and both supplies are reordered each month without running out."
                cadence: rolling
              tasks:
                - "Ask your health visitor which of your supplements continue after birth"
                - "Record the advice on vitamin D drops for the baby"
                - "Check supplement supplies and reorder before they run out @recurring(monthly:3)"
            - name: Reading labels for pregnancy-unsafe ingredients
              description: |-
                ## Purpose
                Shop-bought food hides the details that pregnancy rules depend on: whether cheese is pasteurised, whether a dessert contains raw egg, whether a vitamin includes retinol, and whether a drink contains caffeine or herbal extracts. Learning where these appear on labels, and which words to look for, makes shopping quick rather than anxious.

                ## Milestones
                1. A list of label words to look for, such as unpasteurised, raw milk, retinol and guarana.
                2. Ten products from your usual shop checked against the list.
                3. Any product you were unsure about checked against your health service's guidance.
                4. Your partner shown how to check the same labels.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten regular products have been checked against a written list of label warning words, and the list is shared with whoever shops."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of label words that matter in pregnancy"
                - "Check the labels of ten products you buy every week"
                - "Look up anything unclear in your health service's guidance"
                - "Walk your partner through the label list on the next shop"
            - name: Thermometer checks for meat, eggs and reheated food
              description: |-
                ## Purpose
                Pregnancy guidance asks for meat cooked through with no pink, eggs cooked or from a scheme your health service considers safe, and leftovers reheated until steaming hot. A cheap probe thermometer takes the guesswork out of burgers, sausages, chicken and reheated rice, which is far easier than cutting things open and hoping.

                ## Milestones
                1. A probe thermometer bought and checked in boiling water.
                2. Safe internal temperatures for meat and reheated food from your health service written by the hob.
                3. Every meat dinner probed for one week.
                4. Everyone who cooks for you shown how to use it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A probe thermometer is in use for every meat dinner and reheated meal, with safe temperatures posted by the hob."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Buy a digital probe thermometer and test it in boiling water"
                - "Write your health service's safe cooking temperatures by the hob"
                - "Probe every meat dinner and reheated dish for a week"
                - "Show everyone who cooks for you how to probe the thickest part"
            - name: Eating out and takeaways while pregnant
              description: |-
                ## Purpose
                Restaurant menus rarely say whether the aioli has raw egg, the cheese is unpasteurised or the burger is cooked through, and asking every time feels awkward. Knowing the usual risky dishes by cuisine and having a few standard questions ready lets you enjoy meals out without either worrying or interrogating the waiter.

                ## Milestones
                1. A list of commonly risky dishes by cuisine, such as rare steak, carpaccio, soft cheeses, fresh mayonnaise and sushi.
                2. Three polite standard questions ready to ask staff.
                3. Safe go-to orders noted for your five most visited places.
                4. Storage and reheating rules agreed for takeaway leftovers.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Safe go-to orders are written down for your five most visited restaurants and takeaways, with standard questions saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down risky dishes for the cuisines you eat out most"
                - "Save three standard questions to ask restaurant staff"
                - "Note a safe go-to order for your five regular places"
                - "Agree how takeaway leftovers are stored and reheated"
            - name: Herbal teas and remedies safety check with the pharmacist
              description: |-
                ## Purpose
                Herbal teas, natural remedies and supplements feel harmless, but some are advised against in pregnancy or while breastfeeding and many have never been tested in either. Bringing everything in the cupboard to a pharmacist once gives a clear answer on each, instead of a dozen conflicting forum posts.

                ## Milestones
                1. Every herbal tea, remedy and non-prescribed supplement in the house listed.
                2. The list reviewed with a pharmacist or midwife.
                3. Anything advised against put away until after pregnancy or breastfeeding.
                4. A short list of herbal teas you are happy to drink written down.

                ## Notes
                Raspberry leaf, fish liver oils and fertility or lactation blends are among the products people ask about most. Get advice on each before using it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every herbal and non-prescribed product in the house has been reviewed with a pharmacist or midwife and the answers recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every herbal tea, remedy and supplement in the house"
                - "Take the list or photos to a pharmacist and ask about each"
                - "Put away anything advised against in a labelled box"
                - "Add the approved herbal teas to the foods card"
            - name: Trusted pregnancy nutrition sources shortlist
              description: |-
                ## Purpose
                Advice on pregnancy food online ranges from your national health service to influencers selling powders, and conflicting answers at 2am are a reliable route to anxiety. Choosing three trusted sources, such as your health service, a professional dietetic body and your maternity unit's leaflets, and agreeing to check those first saves hours and settles arguments.

                ## Milestones
                1. Three trusted sources chosen and bookmarked.
                2. Two questions you have seen debated online answered from those sources.
                3. A rule agreed with your partner on where you both check first.
                4. Remaining questions saved for your midwife.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three trusted sources are bookmarked and two debated questions are answered from them, with the rest listed for your midwife."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Bookmark your health service's pregnancy and breastfeeding food pages"
                - "Add a dietetic association page and your maternity unit's leaflets"
                - "Ask the agent to summarise what those three sources say on one question you keep seeing argued"
                - "Save unanswered questions for your next appointment"
            - name: Heartburn and late-pregnancy small meals pattern
              description: |-
                ## Purpose
                Heartburn and indigestion become common as the baby grows and presses on the stomach, especially in the third trimester and at night. Smaller meals more often, an earlier evening meal and noting which foods trigger symptoms often help, and knowing which remedies are suitable in pregnancy means relief without guesswork.

                ## Milestones
                1. A symptom note kept for two weeks showing time, food and severity.
                2. Two or three personal trigger foods identified.
                3. Meals split into five or six smaller ones, with dinner at least two hours before bed.
                4. Suitable remedies confirmed with a pharmacist or midwife.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two weeks of heartburn notes identify personal triggers, a smaller-meals pattern is in place and any remedy has been checked with a pharmacist."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Note each heartburn episode with the time and what you ate"
                - "Move the evening meal at least two hours before bed"
                - "Split the day's food into five or six smaller meals"
                - "Ask a pharmacist which heartburn remedies suit pregnancy"
            - name: Constipation relief through fibre and fluids
              description: |-
                ## Purpose
                Hormones in pregnancy slow the gut, and iron supplements can make constipation worse, so many people find it one of the most uncomfortable parts of pregnancy. Building more fibre into each meal gradually, with more fluid and some daily movement, often helps within a couple of weeks, and your midwife can advise if it does not.

                ## Milestones
                1. Current fibre sources at each meal listed.
                2. One higher-fibre swap added each week, such as wholegrain bread, oats, beans or dried fruit.
                3. Fluid intake raised alongside the fibre.
                4. Your midwife or pharmacist asked if symptoms continue after two weeks, especially if you take iron.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four higher-fibre swaps are in the regular diet within a month, and persistent symptoms have been raised with a midwife or pharmacist."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List what you eat at each meal that contains fibre"
                - "Swap one food for a higher-fibre version this week"
                - "Add a daily walk or other gentle movement"
                - "Ask your midwife about constipation if it lasts more than two weeks"
            - name: Ten one-handed meals for breastfeeding days
              description: |-
                ## Purpose
                Early breastfeeding often means eating with one hand while the other holds a baby who may feed for an hour. Building a repertoire of ten meals and snacks that are nourishing, need no knife and fork, and can be prepared in batches turns lunch from a missed meal into something reliable.

                ## Milestones
                1. Ten one-handed meals chosen, such as wraps, filled pittas, frittata squares, oat bars and loaded toast.
                2. Each tested once before the birth.
                3. Ingredients for all ten on a standing shopping list.
                4. The list shared with anyone helping with food.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Ten one-handed meals are tested before the birth and their ingredients are on a standing shopping list."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List ten meals and snacks that can be eaten with one hand"
                - "Cook two of the ten this weekend and note what works"
                - "Add the ingredients to a standing shopping list"
                - "Share the list with whoever is helping after the birth"
            - name: Milk supply food myths versus what matters
              description: |-
                ## Purpose
                Lactation cookies, special teas and claims that certain foods make milk dry up circulate widely, and they lead parents to spend money or cut out foods without reason. Learning what lactation specialists actually say, that milk supply depends mainly on frequent, effective feeding, lets you eat normally and seek proper help early if supply is a worry.

                ## Milestones
                1. Five common milk supply claims written down.
                2. Each claim checked against your health service or a lactation specialist source.
                3. The signs that a baby is getting enough milk noted from your health visitor's guidance.
                4. A lactation consultant, breastfeeding counsellor or support line contact saved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five supply claims are checked against reliable sources, and a lactation support contact is saved before the birth."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down five milk supply claims you have heard"
                - "Check each against your health service or a lactation specialist source"
                - "Note the signs that a baby is getting enough milk"
                - "Save a breastfeeding support line number in your phone"
            - name: Choosing a pregnancy multivitamin
              description: |-
                ## Purpose
                Shelves of pregnancy vitamins vary widely in price and content, and the most expensive often add ingredients nobody asked for while missing iodine or using a form of vitamin A to avoid. Comparing three products against the supplement plan agreed with your midwife picks one that covers what you need at a sensible cost, or shows that single supplements are enough.

                ## Milestones
                1. The supplements your midwife agreed listed as the requirement.
                2. Three products compared on content, form of vitamin A, iodine and cost per month.
                3. A pharmacist asked to check the chosen product against your medicines.
                4. One product bought, or a decision recorded to use single supplements.

                ## Notes
                Start from the **Purchase decision** template. Some maternity services supply pregnancy vitamins free; check before buying.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pregnancy supplement product, or a single-supplement plan, is chosen against your agreed requirements and checked by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the agreed supplement requirements at the top of a comparison"
                - "Compare three products on content, vitamin A form, iodine and monthly cost"
                - "Ask a pharmacist to check the chosen product against your medicines"
                - "Buy the chosen product or record the single-supplement plan"
            - name: Safe swaps for favourite high-risk foods
              description: |-
                ## Purpose
                Giving up favourite foods for nine months is easier when each one has a satisfying substitute: a hard or pasteurised cheese for the soft blue, a cooked ham pizza for the prosciutto plate, a well-done steak for the rare one. Writing a personal swap list makes the restrictions feel smaller and stops last-minute gambles.

                ## Milestones
                1. Your ten most-missed foods listed.
                2. A safe swap from your health service's guidance found for each.
                3. Three swaps tried and rated.
                4. A list of foods to look forward to after the birth written for fun.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten missed foods each have a written safe swap, with three tried and rated."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the ten foods you miss most"
                - "Find a safe swap for each using your foods card"
                - "Try three swaps this month and rate them"
                - "Start a list of foods to enjoy after the birth"
            - name: Weight gain guidance agreed with your midwife
              description: |-
                ## Purpose
                Advice on pregnancy weight gain differs between countries, and some health services do not weigh routinely at all, which leaves people guessing or dieting when they should not. Asking your midwife what applies to you, and agreeing how weight will be discussed, replaces internet charts with a plan that suits your starting point and history.

                ## Milestones
                1. Your midwife asked whether weight gain will be monitored and how.
                2. Any personal guidance on gain or on eating for two recorded.
                3. A preference written down for whether you want to see the numbers.
                4. Any concern about eating, body image or previous disordered eating raised.

                ## Notes
                Pregnancy is not a time for weight loss diets unless a specialist advises one. Ask before cutting back on food.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "How weight will be monitored in your pregnancy, and any personal guidance, is agreed with your midwife and recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your midwife whether and how your weight will be checked"
                - "Record any personal guidance on weight gain"
                - "Tell your midwife whether you want to see the numbers"
                - "Raise any worry about eating or body image at the same visit"
            - name: Caffeine and alcohol timing while breastfeeding
              description: |-
                ## Purpose
                Small amounts of caffeine and alcohol pass into breast milk, and health services give guidance on how much and when rather than an outright ban. Knowing your health service's advice, and planning around feeds for the occasional coffee or drink, avoids both needless guilt and unplanned risk.

                ## Milestones
                1. Your health service's breastfeeding guidance on caffeine and alcohol saved.
                2. Your typical caffeine day checked against it.
                3. A plan for timing an occasional drink around feeds, including expressing in advance if wanted.
                4. The rule on never sharing a bed with the baby after drinking agreed by the household.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your health service's breastfeeding guidance on caffeine and alcohol is saved, with a written plan for timing both around feeds."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Save your health service's guidance on caffeine and alcohol while breastfeeding"
                - "Check your usual coffee and tea against the caffeine advice"
                - "Plan how an occasional drink would fit around feeds"
                - "Agree the safe sleep rules after alcohol with your partner"
            - name: Expressed breast milk storage and labelling system
              description: |-
                ## Purpose
                Expressed milk has specific storage times at room temperature, in the fridge and in the freezer, and once a stash builds up it is easy to lose track of what is oldest. A system of labelled bags or bottles, a dedicated shelf and a first-in, first-out rule means nothing is wasted and nothing is used past its time.

                ## Milestones
                1. Your health service's storage and thawing times written on the fridge.
                2. Labels with date and time on every bag or bottle.
                3. A dedicated freezer shelf ordered with the oldest milk at the front.
                4. A monthly clear-out of milk past its storage time.

                ## Notes
                Never refreeze thawed milk, and do not thaw it in a microwave. Follow your health service's exact times rather than general advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every stored milk portion is labelled with date and time, kept oldest first, and checked monthly against your health service's times."
                cadence: rolling
              tasks:
                - "Write the health service storage and thawing times on the fridge"
                - "Buy milk storage bags and a marker for labelling"
                - "Clear a freezer shelf and order the stash oldest at the front"
                - "Use or discard milk past its storage time, oldest first @recurring(monthly:22)"
            - name: Glucose tolerance test day preparation
              description: |-
                ## Purpose
                Many people are offered a glucose tolerance test between about 24 and 28 weeks, especially with risk factors for gestational diabetes, and it involves fasting and a two-hour wait in clinic. Reading the instructions early, arranging childcare or work cover and packing food for afterwards makes a long morning straightforward.

                ## Milestones
                1. The test booked and the clinic's fasting instructions read.
                2. Work, childcare and transport arranged for the whole morning.
                3. A snack and drink packed for after the final blood sample.
                4. The results date noted and the result recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The glucose tolerance test is attended after following the clinic's fasting instructions and its result is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read the clinic's fasting and medicine instructions for the test"
                - "Arrange work cover or childcare for the whole morning"
                - "Pack a snack, water and something to read for afterwards"
                - "Record the result and any follow-up when it arrives"
            - name: Hospital bag food and drinks for labour
              description: |-
                ## Purpose
                Labour can take many hours, and postnatal wards may serve meals at fixed times that do not match a newly delivered parent's hunger. Packing snacks, drinks and a few easy foods for both the birthing parent and the partner, checked against your unit's rules, means nobody is running to a vending machine at four in the morning.

                ## Milestones
                1. Your maternity unit's rules on eating in labour and bringing food checked.
                2. A labour snack bag packed with drinks and light snacks.
                3. Partner food packed separately.
                4. Fridge items listed to add on the day.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A labelled food and drink bag for labour and the ward is packed by 36 weeks, with fridge items listed for the day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your maternity unit whether you can eat in labour and bring food"
                - "Pack drinks and light snacks for labour in a separate bag"
                - "Pack a partner food bag with filling snacks"
                - "Write a list of fridge items to grab on the day"
            - name: Freezer meals for the first six weeks after birth
              description: |-
                ## Purpose
                The first six weeks with a newborn leave little time or energy for cooking, and breastfeeding increases hunger. Filling the freezer in the last month of pregnancy with twenty or so labelled portions of nourishing, reheatable meals means dinner is solved for weeks, and it is a satisfying job while waiting.

                ## Milestones
                1. Freezer space cleared and counted in portions.
                2. Ten freezer-friendly recipes chosen with iron, protein and vegetables.
                3. Twenty or more portions cooked and labelled with name, date and reheating notes.
                4. A freezer inventory on the door.

                ## Notes
                Cook in short sessions; long hours on your feet in late pregnancy are hard. Ask helpers to cook one batch each.
              priority: medium
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "At least twenty labelled freezer portions, with an inventory on the freezer door, are ready before the due date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Clear the freezer and estimate how many portions fit"
                - "Choose ten freezer-friendly recipes with protein and vegetables"
                - "Cook and label two batches each weekend in the last month"
                - "Put a freezer inventory on the door"
            - name: Meal train and help rota for after the birth
              description: |-
                ## Purpose
                Friends and family often ask how they can help and then bring flowers. A simple meal rota for the first few weeks, with dietary needs, drop-off times and a no-visiting option, turns goodwill into dinners on the doorstep without hosting anyone when you are exhausted.

                ## Milestones
                1. A coordinator chosen who is not either parent.
                2. A shared sign-up list with dates, dietary notes and drop-off instructions.
                3. Two or three weeks of dinners covered.
                4. Thank-you messages sent afterwards.
              priority: low
              deadlineOffsetDays: 160
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A shared meal rota covers at least two weeks of dinners after the birth, run by a coordinator other than the parents."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a friend or relative to coordinate the meal rota"
                - "Write dietary needs and drop-off instructions for the sign-up list"
                - "Share the rota with people who have offered help"
                - "Send thanks to everyone who brought a meal"
            - name: Food and water safety on a pregnancy trip abroad
              description: |-
                ## Purpose
                Travel brings unfamiliar food rules, unpasteurised dairy sold as normal, uncertain water supplies and fewer options when nausea strikes. Planning food for a trip in pregnancy, including safe snacks for the travel day and what to do about a stomach upset, keeps a holiday or work trip from becoming a worry.

                ## Milestones
                1. Food and water safety at the destination checked with a travel health service.
                2. Snacks and a water plan packed for the travel day.
                3. Local dishes and dairy to watch for noted.
                4. Advice on what to do about vomiting or diarrhoea while pregnant written down.

                ## Notes
                Start from the **Trip** template. Check travel insurance and airline rules for pregnancy at the same time.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip food plan with destination water advice, travel-day snacks and an upset-stomach plan is written before departure."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check water and food safety advice for your destination"
                - "Pack travel-day snacks and a refillable bottle"
                - "Note local foods and dairy products to check before eating"
                - "Ask your midwife what to do about a stomach upset abroad"
            - name: Six-week postnatal check nutrition questions
              description: |-
                ## Purpose
                The postnatal check around six to eight weeks after birth is short and often focused on the baby, so your own recovery can be skipped. Bringing questions on tiredness, iron after blood loss, eating while breastfeeding and supplements makes sure your health is reviewed too.

                ## Milestones
                1. Symptoms such as exhaustion, dizziness or breathlessness noted before the appointment.
                2. Questions on iron, vitamin D and breastfeeding eating written down.
                3. Any blood test suggested booked.
                4. Answers recorded the same day.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The postnatal check is attended with written questions about your own nutrition and recovery, and the answers are recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note any tiredness, dizziness or other symptoms since the birth"
                - "Write three questions about your own eating and supplements"
                - "Ask whether your iron levels should be checked after the birth"
                - "Record the answers and book any suggested blood test"
            - name: Vegetarian or vegan pregnancy and breastfeeding plan
              description: |-
                ## Purpose
                A well-planned vegetarian or vegan diet can support pregnancy and breastfeeding, but vitamin B12, iodine, iron, calcium, vitamin D, omega-3 and choline need deliberate attention. Mapping each to fortified foods or supplements, and having the plan checked by a dietitian, removes doubt for you and for relatives who may question it.

                ## Milestones
                1. Each at-risk nutrient listed with your current food sources.
                2. Fortified foods and any supplements chosen with a dietitian or doctor.
                3. A weekly meal pattern written that covers every nutrient.
                4. The plan reviewed again for breastfeeding after the birth.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dietitian-checked plan covers B12, iodine, iron, calcium, vitamin D, omega-3 and choline for pregnancy and breastfeeding."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your current sources of B12, iodine, iron and calcium"
                - "Ask your midwife for a referral to a dietitian"
                - "Choose fortified foods and supplements with the dietitian"
                - "Check the month's meals still cover B12, iodine and iron @recurring(monthly:8)"
            - name: Gestational diabetes eating pattern with your care team
              description: |-
                ## Purpose
                A diagnosis of gestational diabetes usually arrives in the second half of pregnancy with a glucose meter, a target range and a lot to learn quickly. Working with your diabetes team or dietitian on a meal pattern, logging meals beside readings and adjusting with them helps bring readings into range while still eating enough for you and the baby.

                ## Milestones
                1. The targets and testing times given by your care team written down.
                2. A dietitian appointment attended and a meal pattern agreed.
                3. Meals logged beside glucose readings as the team asks.
                4. Patterns reviewed with the team at each appointment.
                5. Follow-up glucose testing after the birth booked.

                ## Notes
                Use the **Metrics log** template if your team does not provide a diary. Do not cut carbohydrates sharply without your team's advice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Meals are logged beside glucose readings, reviewed at every diabetes team appointment, and the postnatal glucose test is booked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write your target range and testing times inside the meter case"
                - "Book the dietitian appointment your team offers"
                - "Log meals beside the glucose readings your team asks for @recurring(daily)"
                - "Ask when your glucose should be retested after the birth"
            - name: Twin or multiple pregnancy eating plan
              description: |-
                ## Purpose
                Carrying twins or more often brings stronger nausea, earlier tiredness and a higher chance of anaemia, and appointments are more frequent. Asking the specialist team how nutrition advice differs for you, and setting up easy meals earlier than in a single pregnancy, keeps eating on track as space and energy shrink.

                ## Milestones
                1. Your specialist team asked how supplement and diet advice differs for a multiple pregnancy.
                2. Iron levels and any treatment noted after each blood test.
                3. Freezer meals and a help rota started by around 28 weeks.
                4. Meals adapted to smaller, frequent portions as the bump grows.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Multiple-pregnancy nutrition advice is recorded from the specialist team and the freezer and help rota are under way by 28 weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your specialist team how diet and supplement advice differs for twins"
                - "Record your iron results after each blood test"
                - "Start the freezer meal plan by 28 weeks"
                - "Switch to smaller, more frequent meals as space shrinks"
            - name: Fasting during Ramadan while pregnant or breastfeeding
              description: |-
                ## Purpose
                Pregnant and breastfeeding people are generally exempt from fasting in Islamic teaching, yet many still wish to fast, and the decision deserves medical input and a plan. Discussing it with your clinician and, if you wish, a religious scholar, then planning suhoor and iftar around nutrition and fluids, makes whatever you choose safer.

                ## Milestones
                1. The decision discussed with your midwife or doctor before Ramadan.
                2. If fasting, the warning signs that mean breaking the fast written down.
                3. Suhoor and iftar menus planned with protein, fibre and fluids.
                4. If not fasting, missed fasts and how they will be made up recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fasting decision is made with your clinician before Ramadan, with meal plans and stop signs written down if you fast."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a conversation about fasting with your midwife or doctor"
                - "Write the signs that mean you should break the fast"
                - "Plan a week of suhoor and iftar meals with fluids"
                - "Revisit the fasting plan with your clinician before Ramadan @recurring(yearly)"
            - name: Feeding yourself with a toddler already at home
              description: |-
                ## Purpose
                A second pregnancy comes with someone else's meals to make, and the pregnant parent often ends up eating toddler leftovers standing at the counter. Choosing family meals that suit both pregnancy rules and a small child, plus a sit-down snack time together, keeps you fed properly without cooking twice.

                ## Milestones
                1. Eight family meals that suit pregnancy and the toddler listed.
                2. A shared snack time in the day where you sit down too.
                3. Toddler leftovers no longer counted as your lunch.
                4. Toddler meals arranged for while you are in hospital.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight shared family meals are in the plan and toddler food during your hospital stay is arranged."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List eight family meals that suit both pregnancy and a toddler"
                - "Sit down to a shared snack with your toddler each afternoon"
                - "Plan who feeds the toddler while you are in hospital"
                - "Stock easy toddler meals for the week of the birth"
            - name: Breastfeeding after returning to work
              description: |-
                ## Purpose
                Going back to work while breastfeeding means expressing, storing milk at work, and keeping yourself fed and hydrated on a schedule that is no longer built around feeds. Planning the food side, including when you will eat, where milk is stored and what goes in the bag, makes the first weeks back far smoother.

                ## Milestones
                1. Your employer asked about a private room and fridge for expressing.
                2. An eating and drinking schedule around expressing sessions written.
                3. A cool bag, ice packs and labelled containers ready.
                4. A weekly bag routine running for the first month back.

                ## Notes
                Many countries give rights to breaks and facilities for expressing at work. Check your employer's policy and your local rules.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Expressing breaks, milk storage at work and a meal schedule are agreed before the first day back and kept for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your employer about a private room and fridge for expressing"
                - "Plan snacks and meals around your expressing times"
                - "Buy a cool bag, ice packs and labelled containers"
                - "Wash pump parts and pack the work cool bag for the week @recurring(weekly:sun)"
            - name: Hyperemesis gravidarum support and recovery plan
              description: |-
                ## Purpose
                Hyperemesis gravidarum is severe pregnancy sickness that can cause dehydration and weight loss and often needs medicine or hospital fluids. Keeping a simple record of intake, vomiting and weight, knowing when to go to hospital, and planning a gentle return to normal eating as it eases helps your care team treat it properly and helps you recover.

                ## Milestones
                1. Daily notes of fluids kept down, vomiting episodes and any weight checks.
                2. The threshold for urgent care agreed with your clinician.
                3. The treatment plan and medicine names recorded.
                4. A gradual food reintroduction plan written as symptoms ease.
                5. A support organisation contact saved for you and your partner.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An intake and symptom record supports each clinical review, with urgent care thresholds and a reintroduction plan written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Start a simple record of fluids kept down and vomiting each day"
                - "Ask your clinician exactly when to go to hospital"
                - "Write down the treatment plan and medicine names"
                - "Save a hyperemesis support organisation's contact details"
            - name: Pregnancy nutrition with a pre-existing condition
              description: |-
                ## Purpose
                Conditions such as type 1 or type 2 diabetes, coeliac disease, inflammatory bowel disease, phenylketonuria, epilepsy or a previous weight loss operation all change nutrition needs in pregnancy, sometimes before conception. Bringing your specialist team, dietitian and maternity team together on one written plan avoids conflicting advice and missed tests.

                ## Milestones
                1. Each specialist told about the pregnancy, or the plan to conceive.
                2. Condition-specific supplement and diet changes agreed in writing.
                3. Any extra blood tests or nutrient checks scheduled through pregnancy.
                4. One shared summary sent to the maternity team.
              priority: high
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written nutrition plan agreed by your specialist and maternity teams covers supplements, diet changes and extra tests through pregnancy."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell each specialist team about the pregnancy or plan to conceive"
                - "Ask which supplements and diet changes your condition needs"
                - "Write a one-page summary for the maternity team"
                - "Book the specialist review for each trimester @recurring(quarterly)"
            - name: Dairy-free breastfeeding trial for suspected milk allergy
              description: |-
                ## Purpose
                When a breastfed baby is suspected of cows' milk protein allergy, a doctor may suggest the breastfeeding parent removes dairy for a set period to see whether symptoms improve. Doing it properly means reading labels for hidden milk, replacing calcium and keeping a symptom record, so the trial gives a clear answer rather than months of unnecessary restriction.

                ## Milestones
                1. The trial length and what to remove agreed with your doctor or dietitian.
                2. Hidden milk ingredients listed and the kitchen restocked.
                3. Calcium and vitamin D replacement agreed with a professional.
                4. The baby's symptoms recorded through the trial.
                5. A planned reintroduction or review completed with the professional.

                ## Notes
                Do not start a dairy-free trial on your own. It should be agreed and reviewed by a professional so restriction does not drag on without an answer.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A professionally agreed dairy-free trial is completed with calcium replaced, symptoms recorded and a review held at the end."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Agree the trial length and foods to remove with your doctor"
                - "List hidden milk ingredients and restock the cupboard"
                - "Agree calcium replacement with a dietitian"
                - "Check calcium sources across the month's meals @recurring(monthly:26)"
            - name: Stopping breastfeeding and adjusting your own eating
              description: |-
                ## Purpose
                When breastfeeding winds down, appetite often stays high while needs fall, and supplements taken for feeding may no longer be needed. Reviewing your eating and supplements as feeds drop helps the transition feel steady, and it is a good point to ask about any lingering iron or vitamin D questions.

                ## Milestones
                1. The point at which feeds have dropped noted.
                2. Supplement advice for after breastfeeding checked with a pharmacist or doctor.
                3. Snack baskets and extra portions scaled back gradually.
                4. Any low mood or body changes during weaning raised with your doctor.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your supplements and portions are reviewed as breastfeeding ends, with advice from a pharmacist or doctor recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note when breastfeeds have dropped to once or twice a day"
                - "Ask your pharmacist which supplements to continue after breastfeeding"
                - "Scale back feeding-station snacks and extra portions"
                - "Mention any low mood during weaning to your doctor"
            - name: Nutrition between pregnancies before trying again
              description: |-
                ## Purpose
                If you plan another pregnancy, the gap between them is a chance to rebuild iron and other stores and to restart folic acid before conception. A short review with your doctor of how the last pregnancy went, including any gestational diabetes, anaemia or high blood pressure, sets up the next one earlier and better.

                ## Milestones
                1. Notes from the last pregnancy gathered, including blood tests and complications.
                2. A preconception appointment booked with your doctor.
                3. Folic acid and other supplements started at the time advised.
                4. A nutrition summary written to share at the next booking appointment.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A preconception review is held and a written summary of the last pregnancy's nutrition issues is ready for the next booking appointment."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Gather blood results and notes from your last pregnancy"
                - "Book a preconception appointment with your doctor"
                - "Start folic acid at the time your doctor advises"
                - "Write a one-page nutrition summary for the next pregnancy"
---

# Pregnancy & Breastfeeding Nutrition

This area is for parents-to-be and new parents who want to eat well through pregnancy and breastfeeding without wading through conflicting advice, and for the partners who cook for them. It starts with the foundations (supplements agreed with your midwife, a foods-to-avoid card, kitchen precautions, caffeine, alcohol, a food record and the booking appointment), then the weekly and monthly routines that keep meals, snacks, water and supplements steady, the skills of label reading, safe cooking and one-handed eating, decisions on vitamins, swaps, weight and breastfeeding drinks, the events from the glucose test to the postnatal check, situations such as gestational diabetes, twins, Ramadan or a return to work, and finally specialist work on severe sickness, pre-existing conditions and the gap before another pregnancy.

What repeats is a daily supplement and water bottle, a Sunday meal plan, Monday and Saturday snack restocks, partner cooking nights on Tuesday and Friday, a fridge check on Wednesdays, a nutrition check-in on the 12th, a new iron-rich recipe on the 18th and a trimester review each quarter. The Metrics log, Weekly meal plan, Habit tracker, Purchase decision and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
