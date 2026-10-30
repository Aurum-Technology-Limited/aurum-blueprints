---
id: food-nutrition.mediterranean-diet-transition
name: Mediterranean Diet Transition
description: "A baseline score, a twelve-week meal-by-meal plan, and the routines, cooking skills and swaps that move a household toward vegetables, legumes, fish and olive oil."
category: personal
version: 1.0.0
tags: [food-nutrition, mediterranean-diet-transition, everyone, retiree, olive-oil, legumes, fish, heart-health]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - weekly-meal-plan
    - habit-tracker
    - metrics-log
    - reading-queue
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mediterranean Diet Transition
          description: "Shifting a household toward Mediterranean-style eating with more vegetables, legumes, fish and olive oil, one meal at a time."
          projects:
            - name: Mediterranean eating baseline week
              description: |-
                ## Purpose
                Before changing anything, it helps to know how Mediterranean your eating already is: most households score well on some parts, such as fruit, and poorly on others, such as legumes or fish. Writing down a normal week of meals and scoring it against a short adherence checklist, like the 14-point questionnaire used in research, shows which two or three changes will move the score most.

                ## Milestones
                1. A normal week of breakfasts, lunches, dinners and snacks written down, without changing anything.
                2. The week scored against a published Mediterranean adherence checklist.
                3. The three lowest-scoring items circled as the first targets.
                4. The baseline score and date saved where the monthly checks will go.

                ## Notes
                Do not tidy the week up for the diary. An honest low score is more useful than a flattering one.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A seven-day food record and a dated Mediterranean checklist score exist, with the three weakest items named."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find a published Mediterranean diet adherence checklist and save a copy"
                - "Write down every meal and snack for seven ordinary days"
                - "Score the week against the checklist and note the total"
                - "Circle the three items with the most room to improve"
            - name: Household reasons and goals for the change
              description: |-
                ## Purpose
                A switch that one person wants and everyone else tolerates tends to fade by the third week. Agreeing, in a short written note, why the household is making the change (heart health, cholesterol, a doctor's suggestion, or simply eating better for longer) and what success looks like in six months gives everyone a reason to keep going when the novelty wears off.

                ## Milestones
                1. Each adult's main reason for the change written in one line.
                2. Two or three six-month goals agreed, such as fish twice a week or legumes three times a week.
                3. Foods each person is not willing to give up listed honestly.
                4. The note pinned where meals are planned.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page household note records the reasons, two or three measurable six-month goals and the foods each person wants to keep."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask each adult in the house for their one main reason for the change"
                - "Agree two or three goals you could count in six months"
                - "List the foods each person wants to keep"
                - "Pin the note beside where you plan meals"
            - name: Clinician conversation before changing diet
              description: |-
                ## Purpose
                For most people a Mediterranean pattern is a safe change, but a few situations need a word first: blood thinners such as warfarin are affected by big swings in leafy greens, kidney disease can make legumes and nuts a potassium question, and diabetes medicines may need watching as carbohydrates shift. One short appointment or pharmacist chat clears this up and gives you a cholesterol or weight baseline to measure against.

                ## Milestones
                1. A list of current medicines and conditions taken to your doctor, nurse or pharmacist.
                2. A clear answer on whether anything in the planned change needs care or monitoring.
                3. Any recent blood results, such as cholesterol, noted as a starting point.
                4. A referral to a dietitian requested if your clinician thinks it would help.

                ## Notes
                This conversation is about safety and baselines. If nothing applies to you, it takes ten minutes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your clinician or pharmacist has confirmed whether the planned change affects any medicine or condition, and their answer is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of your current medicines and health conditions"
                - "Book a short appointment or pharmacist consultation about the diet change"
                - "Ask whether leafy greens, legumes or nuts need care with your medicines"
                - "Ask at your annual review whether the eating plan still suits your health @recurring(yearly)"
            - name: Twelve-week meal-by-meal transition plan
              description: |-
                ## Purpose
                Changing every meal in one week is the commonest reason a Mediterranean switch collapses, because the shopping, cooking and tastes all change at once. Spreading it over twelve weeks, one meal type or one swap at a time, lets the household adjust and lets you learn the cooking before the next step arrives.

                ## Milestones
                1. Twelve weekly steps written in order, starting with the easiest change.
                2. Each step limited to one meal or one swap, such as breakfast first, then olive oil, then a fish night.
                3. The steps matched to the three weakest items from the baseline.
                4. Week one started on a set date.

                ## Notes
                A sensible order for many households: breakfast, cooking fat, snacks, one fish night, one legume night, lunches, then the rest of dinner.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written twelve-week plan with one change per week exists and week one has a start date in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick the easiest first change using your baseline score"
                - "Write one change per week for twelve weeks"
                - "Ask the agent to turn the twelve steps into a printable one-page plan"
                - "Put the start date of week one in the calendar"
            - name: Pantry audit and first Mediterranean restock
              description: |-
                ## Purpose
                Cupboards built around butter, white bread, ready sauces and crisps make the new meals harder every single evening. A one-off audit sorts what stays, what gets used up and not rebought, and what is missing, then a single restock brings in the tins, jars and dry goods that make Mediterranean cooking quick: chickpeas, lentils, tinned tomatoes, oily fish, wholegrains, nuts and dried herbs.

                ## Milestones
                1. Cupboards, fridge and freezer sorted into keep, use up and do not rebuy.
                2. A restock list written for the Mediterranean staples you are missing.
                3. The core staples bought and stored where they are easy to reach.
                4. Items to use up planned into the next fortnight's meals.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The pantry holds at least ten Mediterranean staples, and the use-up items are planned into meals within two weeks."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Empty one cupboard and sort it into keep, use up and do not rebuy"
                - "Write a restock list of missing staples such as chickpeas, tinned fish and bulgur"
                - "Buy the restock in one shop and put it at eye level"
                - "Plan the use-up items into the next two weeks of meals"
            - name: Choosing an everyday extra virgin olive oil
              description: |-
                ## Purpose
                Extra virgin olive oil is the main fat in the pattern, used for cooking as well as dressing, so a household using it properly may get through a litre or more a month. Choosing one good everyday oil by harvest date, dark glass or tin, origin and price per litre, rather than by the pictures on the label, keeps the habit affordable and the oil fresh.

                ## Milestones
                1. Three or four extra virgin oils compared on harvest or best-before date, packaging and price per litre.
                2. One everyday oil chosen for cooking and one optional better oil for finishing.
                3. A container size picked that you will finish within about two months of opening.
                4. The chosen oil and where to buy it written down.

                ## Notes
                Start from the **Purchase decision** template. Store oil away from the hob and windows; light and heat spoil it faster than age.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An everyday extra virgin olive oil is chosen on date, packaging and price per litre, and recorded with where to buy it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note how much oil and other cooking fat the household uses in a typical month"
                - "Compare three extra virgin oils on harvest date, bottle and price per litre"
                - "Buy the chosen oil in a size you will finish within two months"
                - "Move the oil to a cupboard away from the hob"
            - name: Legume starter shelf of five varieties
              description: |-
                ## Purpose
                Beans, lentils and chickpeas are eaten several times a week in traditional Mediterranean diets and are the part most northern European and American households skip. Building a small shelf of five types, tinned for speed and dried for cost, with one tested recipe for each, makes three legume meals a week a realistic goal instead of a slogan.

                ## Milestones
                1. Five legumes chosen, such as chickpeas, red lentils, green lentils, cannellini and butter beans.
                2. Each one stocked tinned or dried, depending on time and budget.
                3. One simple recipe tested for each of the five.
                4. The two the household liked best marked as weekly regulars.

                ## Notes
                If beans cause wind, start with small portions and rinse tinned ones; tolerance usually improves over a few weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five legume varieties are on the shelf and each has one recipe the household has eaten."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose five legumes to start with"
                - "Buy a tin or bag of each one"
                - "Cook one simple recipe for each legume over the next month"
                - "Mark the two favourites as weekly regulars on the meal plan"
            - name: Reliable fish sources for two fish meals a week
              description: |-
                ## Purpose
                Two fish meals a week, one of them oily such as sardines, mackerel or salmon, is a common Mediterranean target and the one most often missed because fresh fish feels expensive or hard to find. Mapping three sources, fresh, frozen and tinned, with their prices per portion, means a fish night never depends on a special trip.

                ## Milestones
                1. One fresh source, one frozen source and one tinned option identified.
                2. Prices per portion compared across the three.
                3. Three oily fish the household will eat named.
                4. A standing stock of frozen fillets and tinned fish in the house.

                ## Notes
                If you are pregnant, planning a pregnancy or feeding young children, check your health service's guidance on which fish to limit.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three fish sources with per-portion prices are written down and at least four portions of frozen or tinned fish are in stock."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find one fish counter, one frozen range and one tinned brand near you"
                - "Work out the price per portion for each source"
                - "Ask the household which three oily fish they will eat"
                - "Stock four portions of frozen or tinned fish"
            - name: Mediterranean versions of ten household favourites
              description: |-
                ## Purpose
                Families rarely give up the meals they love, but most favourites can move a long way toward the pattern: a cottage pie made with half lentils and cooked in olive oil, a curry with chickpeas and less meat, a fry-up turned into eggs, tomatoes and beans. Rewriting ten favourites keeps familiar food on the table while the ingredients shift underneath it.

                ## Milestones
                1. Ten meals the household eats most often listed.
                2. A Mediterranean adjustment written for each: more vegetables, a legume, olive oil, less red meat or a wholegrain.
                3. At least five of the adjusted versions cooked and rated.
                4. The keepers added to the meal plan rotation.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten favourite meals have written Mediterranean adjustments, and at least five have been cooked and rated by the household."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List the ten meals your household eats most often"
                - "Write one or two Mediterranean adjustments for each meal"
                - "Cook one adjusted favourite each week and ask for a rating"
                - "Move the adjusted versions that win into the regular rotation"
            - name: Weekly Mediterranean meal plan
              description: |-
                ## Purpose
                Good intentions about fish and beans disappear by Wednesday unless they are on a plan with the shopping already done. A fifteen-minute weekly plan that places the pattern's anchors first (two fish meals, three legume meals, vegetables at every lunch and dinner) does most of the work of the whole transition.

                ## Milestones
                1. A weekly planning slot fixed in the calendar.
                2. Each plan showing the fish, legume and vegetable anchors before anything else.
                3. A shopping list written from every plan.
                4. Eight consecutive weeks planned.

                ## Notes
                Start from the **Weekly meal plan** template. Place the anchors first, then fill the gaps with whatever the household fancies.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly plans exist, each with two fish meals and three legume meals placed."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan page from the template"
                - "Plan the week around fish, legume and vegetable anchors and write the list @recurring(weekly:sun)"
                - "Keep a running list of meals that worked to draw from"
            - name: Two fish meals a week routine
              description: |-
                ## Purpose
                Fish is the anchor most households plan and then quietly drop when the week gets busy. Fixing two named nights, keeping a freezer and tin backup, and checking midweek that both meals are covered turns it from an aspiration into a routine that survives late trains and empty fridges.

                ## Milestones
                1. Two fish nights chosen and named, for example Tuesday and Friday.
                2. A backup of frozen fillets and tinned fish always in the house.
                3. A midweek check that both meals are on track.
                4. Two fish meals eaten in at least ten of twelve weeks.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two fish meals a week are recorded in at least ten of any twelve consecutive weeks."
                cadence: rolling
              tasks:
                - "Choose two fixed fish nights that fit your week"
                - "Keep two portions of frozen fish and two tins as backup"
                - "Check on Thursday that both fish meals are covered this week @recurring(weekly:thu)"
                - "Mark each fish meal eaten on the meal plan"
            - name: Weekend pot of beans and grains
              description: |-
                ## Purpose
                Cooking a pot of chickpeas or beans and a tray of farro or bulgur once at the weekend gives three or four weekday meals a head start: a salad, a soup, a stew and a lunch box. One hour on Saturday is what makes legumes and wholegrains feel quicker than pasta on a Tuesday.

                ## Milestones
                1. A weekend slot set aside for an hour of cooking.
                2. One legume and one wholegrain cooked each weekend.
                3. Cooked portions stored in labelled containers in the fridge or freezer.
                4. At least three weekday meals each week built from the pot.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight weekends running, a legume and a grain have been cooked and used in at least three weekday meals."
                cadence: rolling
              tasks:
                - "Buy enough lidded containers for four cooked portions"
                - "Cook one legume and one wholegrain for the week ahead @recurring(weekly:sat)"
                - "Label each container with the contents and the date"
                - "Write three weekday meals that will use the pot"
            - name: Weekly vegetable and fruit tally
              description: |-
                ## Purpose
                Mediterranean eaters typically have vegetables at lunch and dinner and fruit most days, often far more than people realise they eat themselves. A quick tally at the end of each week, counting portions rather than calories, shows whether the plate is really changing or just feels like it.

                ## Milestones
                1. A simple tally sheet with days down the side and vegetable and fruit columns.
                2. Portions counted for a full week without changing anything.
                3. A weekly target set a little above the first week's count.
                4. The target reached in six of eight weeks.

                ## Notes
                Start from the **Habit tracker** template. Count beans and tomatoes in sauces; national guidance differs on whether potatoes count as a vegetable.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly vegetable and fruit tallies are recorded, with the agreed target met in at least six."
                cadence: rolling
              tasks:
                - "Set up a tally sheet for vegetable and fruit portions"
                - "Count a full week of portions as a starting point"
                - "Total the week's portions and compare them with your target @recurring(weekly:fri)"
                - "Raise the target by two portions once it is met for a month"
            - name: Monthly Mediterranean score check
              description: |-
                ## Purpose
                Re-scoring the household's eating once a month against the same checklist used for the baseline shows whether the twelve-week plan is working and which item has stalled. It takes ten minutes and gives a single number to follow instead of a vague sense of eating better.

                ## Milestones
                1. The same checklist used each month as for the baseline.
                2. Each month's score and date logged in one place.
                3. The lowest item each month named as next month's focus.
                4. Six monthly scores recorded with a visible trend.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly checklist scores are logged beside the baseline, each with a named focus item."
                cadence: rolling
              tasks:
                - "Create a log with the baseline score as the first row"
                - "Score the past month against the checklist and log it @recurring(monthly:12)"
                - "Pick the lowest-scoring item as next month's focus"
            - name: Olive oil, nuts and tins restock routine
              description: |-
                ## Purpose
                The pattern runs on a few things that run out quietly: olive oil, nuts, tinned tomatoes, tinned fish and chickpeas. A monthly restock checked against a short standing list prevents the week when the oil is gone and the butter comes back out, and lets you buy larger sizes when they are on offer.

                ## Milestones
                1. A standing list of the eight to ten staples that must never run out.
                2. A monthly check of stock against the list.
                3. Nuts and oil bought in sizes that will be finished before they turn stale.
                4. No staple out of stock for three months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive months pass with no staple from the standing list running out."
                cadence: rolling
              tasks:
                - "Write the standing list of Mediterranean staples and their usual sizes"
                - "Check stock against the list and order what is low @recurring(monthly:20)"
                - "Smell open nuts and oil and replace any that have turned stale"
            - name: Fruit as the everyday dessert
              description: |-
                ## Purpose
                In much of the Mediterranean the everyday end to a meal is fresh fruit, with cakes and sweets kept for Sundays and celebrations. Making fruit the default after dinner, with a full bowl in sight and sweets moved out of reach, is one of the simplest swaps and one children often accept quickly.

                ## Milestones
                1. A fruit bowl kept full and in plain view.
                2. Sweets and biscuits moved to a less visible cupboard.
                3. Fruit eaten as the after-dinner default on most days for a month.
                4. Puddings saved for one or two named occasions a week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fruit is the after-dinner dessert on at least 20 days in a month, with sweet puddings limited to named occasions."
                cadence: rolling
              tasks:
                - "Put a full fruit bowl where everyone can see it"
                - "Move biscuits and sweets to a higher cupboard"
                - "Serve fruit as the after-dinner dessert and tick it off @recurring(daily)"
                - "Agree which one or two days a week have a proper pudding"
            - name: Quarterly household check-in on the switch
              description: |-
                ## Purpose
                After the first few months the question shifts from what to change to what is sticking, what people secretly miss and what has crept back. A short quarterly conversation, with the monthly scores in front of you, catches drift early and lets the household choose the next change together.

                ## Milestones
                1. A quarterly date in the calendar for a twenty-minute check-in.
                2. Each check-in covering the scores, what people enjoy and what they miss.
                3. One change agreed per quarter and added to the plan.
                4. Four check-ins held in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check-ins are held in twelve months, each with one agreed change written into the meal plan."
                cadence: rolling
              tasks:
                - "Book a twenty-minute household check-in for next quarter"
                - "Bring the monthly scores and ask what people miss @recurring(quarterly)"
                - "Write the one agreed change into the following week's plan"
            - name: Seasonal rotation of twelve Mediterranean dinners
              description: |-
                ## Purpose
                Eating the same eight dishes all year is how enthusiasm dies, and Mediterranean cooking follows the seasons anyway: stuffed peppers and tomato salads in summer, bean soups and baked fish with greens in winter. Refreshing a rotation of twelve dinners every season keeps the pattern varied without asking you to invent meals every week.

                ## Milestones
                1. Twelve dinners listed for the current season.
                2. At least three new dishes in each seasonal list.
                3. The list used to fill the weekly plans.
                4. Four seasonal lists written over a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Four seasonal lists of twelve dinners exist, each with at least three dishes new to the household."
                cadence: cyclic
              tasks:
                - "Write twelve dinners for the season you are in now"
                - "Mark three that the household has never cooked"
                - "Swap the rotation for the coming season's twelve dinners @recurring(quarterly)"
            - name: Cooking with extra virgin olive oil
              description: |-
                ## Purpose
                Many people still keep olive oil for salads and fry in something else because of an old worry about smoke points. Learning how olive oil behaves for gentle frying, roasting, braising and finishing, and how much each job needs, makes it the default fat without leaving dishes greasy or bland.

                ## Milestones
                1. The basics of olive oil and heat read from a reputable source.
                2. Four techniques practised: sautéing, roasting vegetables, slow braising and finishing a dish.
                3. A rough guide written for how much oil each job needs.
                4. Butter and other oils no longer used for everyday cooking.

                ## Notes
                Extra virgin olive oil handles normal home frying and roasting well. Treat deep frying as a separate decision.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four olive oil techniques have each been cooked at least twice, with a written note of the oil quantity each one needs."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable guide to cooking with olive oil at different heats"
                - "Roast a tray of vegetables in olive oil this week"
                - "Make a slow braise that uses olive oil as the main fat"
                - "Write how many spoonfuls each technique needed"
            - name: Soffritto and other flavour bases
              description: |-
                ## Purpose
                A huge share of Mediterranean dishes start the same way: onion, carrot, celery, garlic or peppers cooked slowly in olive oil until sweet. Mastering the Italian soffritto, the Spanish sofrito and a simple onion and garlic base means soups, stews and beans taste rich without stock cubes, cream or much salt.

                ## Milestones
                1. Three flavour bases learned: soffritto, sofrito and a simple onion and garlic base.
                2. Each base cooked slowly enough to soften and sweeten without browning.
                3. A batch of soffritto frozen in portions.
                4. Two dishes built from each base.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three flavour bases have each been used in at least two dishes, with frozen portions of one in the freezer."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Dice onion, carrot and celery for a classic soffritto"
                - "Cook the soffritto slowly in olive oil for at least fifteen minutes"
                - "Make a tomato and pepper sofrito for a bean or rice dish"
                - "Freeze spare base in portions for quick weeknight meals"
            - name: Cooking dried beans and chickpeas from scratch
              description: |-
                ## Purpose
                Dried legumes cost a fraction of tins, taste better and give you a cooking liquid for soups and stews. Learning soaking, simmering times, salting and the pressure cooker shortcut takes a couple of weekends and makes large batches cheap enough to eat legumes most days.

                ## Milestones
                1. Soaking and cooking methods for chickpeas, beans and lentils understood.
                2. Three types cooked from dry until creamy and fully tender.
                3. Cooking times noted for your own pan or pressure cooker.
                4. A batch frozen in portions with its cooking liquid.

                ## Notes
                Dried red kidney beans must be boiled hard for at least ten minutes, because undercooked ones can cause food poisoning. A slow cooker alone does not get hot enough.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three legumes have been cooked from dry, with timings recorded and at least one batch frozen."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Soak a bag of dried chickpeas overnight"
                - "Simmer the chickpeas until creamy and note the time it took"
                - "Cook a second and third legume from dry and record their timings"
                - "Freeze portions of cooked beans with some of their liquid"
            - name: Three dependable ways to cook fish
              description: |-
                ## Purpose
                Many people avoid fish at home because they fear overcooking it or the smell lingering. Learning three forgiving methods (baking in a parcel with lemon and herbs, roasting on a tray of vegetables and grilling oily fish such as sardines or mackerel) covers almost every fish night with very little that can go wrong.

                ## Milestones
                1. Fish baked in a parcel cooked successfully.
                2. A one-tray fish and vegetable roast cooked successfully.
                3. An oily fish grilled or pan-fried until just cooked through.
                4. A simple doneness test learned so fish is no longer overcooked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each of the three methods has been cooked at least twice and the household has rated the results."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Bake a fish fillet in a parcel with lemon, garlic and herbs"
                - "Roast fish on a tray of tomatoes, peppers and olives"
                - "Grill or pan-fry sardines or mackerel for a weeknight dinner"
                - "Learn the flake test for when fish is cooked through"
            - name: Olive oil braised vegetables as a main course
              description: |-
                ## Purpose
                Greek ladera, Sicilian caponata and Spanish pisto treat vegetables as the meal rather than the side, slow cooked in olive oil and tomato until soft and rich. Learning four of these dishes changes what a vegetable dinner means to a sceptical household and is the quickest route to more vegetables in the evening.

                ## Milestones
                1. Four braised vegetable dishes chosen from different countries.
                2. Each cooked once and served as a main with bread, beans or cheese.
                3. The household's two favourites added to the rotation.
                4. One made in a double batch for lunches.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four vegetable braises have been cooked as main courses and two are in the regular rotation."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Pick four vegetable braises such as green beans in tomato, caponata, briam and pisto"
                - "Cook the first one as a main course this week"
                - "Serve each with bread, beans or a little cheese to make it filling"
                - "Make a double batch of the favourite for lunches"
            - name: Whole grains beyond pasta and rice
              description: |-
                ## Purpose
                Bulgur, farro, barley, freekeh and wholewheat couscous are everyday staples across the region and add fibre and chew that white pasta and rice lack. Learning to cook four of them and use them in salads, pilafs and soups widens the cupboard without anyone feeling deprived.

                ## Milestones
                1. Four wholegrains bought and their cooking methods noted.
                2. Each one used in a salad, a pilaf or a soup.
                3. Wholewheat pasta tried in a familiar dish.
                4. At least half the household's grain meals using a wholegrain.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four wholegrains have been cooked and at least half of a typical week's grain meals use a wholegrain."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Buy small bags of bulgur, farro, barley and freekeh"
                - "Cook a tabbouleh or bulgur salad"
                - "Swap white pasta for wholewheat in one family favourite"
                - "Note the cooking time and water ratio for each grain"
            - name: Mediterranean dressings and sauces
              description: |-
                ## Purpose
                Lemon and olive oil, tahini sauce, salsa verde, a yogurt and cucumber sauce and a good vinaigrette make plain fish, beans and grains taste finished, and they replace shop-bought dressings and creamy sauces. Five sauces kept in rotation are what turn a pile of healthy ingredients into a meal people want to eat.

                ## Milestones
                1. Five sauces learned: lemon and oil, vinaigrette, tahini, salsa verde and a yogurt sauce.
                2. Each made from memory without a recipe.
                3. A jar of vinaigrette kept in the fridge every week.
                4. Shop-bought dressings no longer bought.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five dressings and sauces can be made from memory, and no shop-bought dressing has been bought for a month."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make a lemon and olive oil dressing and a basic vinaigrette"
                - "Whisk a tahini sauce with lemon, garlic and water"
                - "Blend a salsa verde from soft herbs, capers and olive oil"
                - "Make a yogurt, cucumber and mint sauce for fish or grains"
            - name: Mezze and legume dips at home
              description: |-
                ## Purpose
                Hummus, fava, white bean dip, baba ganoush and marinated olives are an easy way to eat more legumes and vegetables, and home-made versions taste better than tubs. A small mezze repertoire also makes lunches, snacks and unexpected guests simpler.

                ## Milestones
                1. Hummus made from chickpeas with a texture the household likes.
                2. Two other dips learned, one bean and one vegetable.
                3. A mezze lunch served with raw vegetables, wholegrain bread and olives.
                4. One dip made weekly for snacks and lunches.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three home-made dips are in the repertoire and one is made most weeks for lunches and snacks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Make hummus from cooked chickpeas, tahini, lemon and garlic"
                - "Make a white bean dip and a roasted aubergine dip"
                - "Serve a mezze lunch with raw vegetables and wholegrain bread"
                - "Note which dip the household finishes fastest"
            - name: Reading list on the Mediterranean diet evidence
              description: |-
                ## Purpose
                Headlines swing from miracle to myth, and it helps to know what the large studies actually measured, such as the Lyon Diet Heart Study and the PREDIMED trial, and what they did not. A short, well-chosen reading list gives you enough understanding to ignore fads and to ask your clinician sensible questions.

                ## Milestones
                1. Five reputable sources chosen: two summaries from health bodies, two study summaries and one book.
                2. Each read with a three-line note on what it found.
                3. A short list of what the evidence supports and what is uncertain.
                4. Questions for your clinician noted from the reading.

                ## Notes
                Start from the **Reading queue** template. Prefer summaries from health services and universities over sites selling supplements or meal plans.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five sources have been read and summarised, with a written list of what is well supported and what remains uncertain."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up a reading queue of five reputable sources"
                - "Read the first source and write a three-line note on it"
                - "Ask the agent to summarise where your five notes agree and disagree"
                - "Write the questions the reading raised for your clinician"
            - name: Mediterranean breakfast switch
              description: |-
                ## Purpose
                Breakfast is usually the easiest meal to change first, because it is repetitive and eaten at home. Swapping sugary cereals and white toast for plain yogurt with fruit and nuts, wholegrain bread with tomato and olive oil, or eggs with greens gives an early win that the rest of the plan can build on.

                ## Milestones
                1. Three Mediterranean breakfasts chosen that fit weekday mornings.
                2. The ingredients for all three in the house.
                3. Old breakfast cereals used up and not rebought.
                4. The new breakfasts eaten on most weekdays for four weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three Mediterranean breakfasts are in use and eaten on at least 15 weekdays in a four-week period."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose three breakfasts that take under ten minutes"
                - "Add plain yogurt, fruit, nuts and wholegrain bread to the shopping list"
                - "Use up the current cereal and leave it off the next list"
                - "Try tomato and olive oil on toast one weekend morning"
            - name: Lunches built on grains, beans and leftovers
              description: |-
                ## Purpose
                Lunch is where many people eat a sandwich, crisps and a chocolate bar without thinking, whether at a desk or at home. Built on last night's leftovers or a box of grains, beans, vegetables and dressing, a Mediterranean lunch costs less, keeps you full through the afternoon and uses up the weekend pot.

                ## Milestones
                1. A simple lunch formula written: grain, legume, vegetables, olive oil dressing and something salty such as olives or feta.
                2. Dinner portions increased so one goes into a lunch box.
                3. Mediterranean lunches eaten on most days for four weeks.
                4. Shop-bought lunches cut to once a week or less.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four weeks of lunches are recorded, with Mediterranean lunches on most days and bought lunches once a week or less."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your lunch formula on a card by the fridge"
                - "Cook one extra dinner portion for tomorrow's lunch"
                - "Buy two leakproof boxes and a small dressing jar"
                - "Count the bought lunches at the end of each week"
            - name: Rebalancing the dinner plate
              description: |-
                ## Purpose
                The traditional Mediterranean dinner plate is roughly half vegetables, a quarter beans, fish or a little meat, and a quarter wholegrains or potatoes, all cooked in olive oil. Rebalancing a typical meat-and-two-veg or pasta-heavy plate toward these proportions changes the whole pattern without counting anything.

                ## Milestones
                1. Your usual dinner plate photographed and its proportions noted.
                2. A target plate drawn or pinned up for reference.
                3. Vegetable portions increased at every dinner for two weeks.
                4. Meat and refined grain portions reduced to fit the target plate.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For two weeks running, at least five dinners a week match the target plate of half vegetables."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Photograph three typical dinners and estimate the proportions"
                - "Pin a picture of the target plate in the kitchen"
                - "Add a second vegetable to every dinner this week"
                - "Serve meat and pasta in smaller dishes so portions shrink"
            - name: Snack swap to nuts, fruit and olives
              description: |-
                ## Purpose
                Crisps, biscuits and cereal bars are mostly eaten from habit, at the same times every day. Replacing them with a small daily handful of unsalted nuts, fresh fruit or a few olives fits the pattern exactly and needs only a change in what is bought and where it is kept.

                ## Milestones
                1. The household's usual snacks and when they are eaten noted.
                2. Unsalted nuts portioned into small tubs for the week.
                3. Packaged snacks no longer on the shopping list.
                4. A handful of nuts or fruit eaten as the snack most days for six weeks.

                ## Notes
                Nuts are calorie dense, so a small handful is the usual portion. If anyone in the house has a nut allergy, keep this project to fruit, olives and roasted chickpeas.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six weeks, packaged snacks are off the shopping list and a portioned handful of nuts or fruit is the default snack."
                cadence: rolling
              tasks:
                - "Note what the household snacks on and at what times"
                - "Portion unsalted nuts into small tubs for the week"
                - "Have the day's handful of nuts or fruit in place of a packaged snack @recurring(daily)"
                - "Take crisps and cereal bars off the regular shopping list"
            - name: Replacing butter and other fats with olive oil
              description: |-
                ## Purpose
                Swapping butter, lard, margarine and other cooking fats for olive oil is one of the central changes in the pattern, but it is not one size fits all: toast, mash, baking and roast potatoes each need a different answer. Deciding use by use where olive oil goes, and where a little butter stays, makes the change stick.

                ## Milestones
                1. Every place the household uses butter or other fats listed.
                2. A decision made for each: olive oil, a smaller amount of butter, or no fat.
                3. Two baking recipes tried with olive oil in place of butter.
                4. The new defaults written on a card for whoever cooks.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list covers every household use of butter and other fats with an agreed olive oil or reduced alternative."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every way the household uses butter, lard or spread"
                - "Decide the olive oil swap for each use"
                - "Bake one cake or loaf with olive oil instead of butter"
                - "Write the new fat defaults on a card by the hob"
            - name: Red and processed meat step-down
              description: |-
                ## Purpose
                Red meat in traditional Mediterranean diets is eaten a few times a month rather than most days, and processed meats such as bacon, ham and sausages rarely. Stepping down over three months, swapping some meals to fish, beans or poultry and using meat as a flavouring rather than the centrepiece, avoids the backlash of an overnight ban.

                ## Milestones
                1. Current red and processed meat meals counted for two weeks.
                2. A target agreed with the household, such as red meat once a week.
                3. Meat dishes rewritten to use half the meat and more legumes or vegetables.
                4. The target met for a full month.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Red and processed meat meals have been at or below the household's agreed target for four consecutive weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Count red and processed meat meals over the next two weeks"
                - "Agree a weekly or monthly target with the household"
                - "Halve the mince in one regular dish and add lentils"
                - "Review the month's red and processed meat meals against the target @recurring(monthly:5)"
            - name: Deciding where alcohol fits, if at all
              description: |-
                ## Purpose
                Wine with meals often appears in descriptions of the Mediterranean diet, but health bodies do not advise anyone to start drinking for their health, and for some people any alcohol is a risk. Making a deliberate, informed decision with your clinician, rather than adopting a glass a night because a magazine mentioned it, settles the question.

                ## Milestones
                1. Current alcohol intake honestly recorded for two weeks.
                2. Your national low-risk drinking guidance read.
                3. Your clinician asked whether alcohol is advisable with your medicines and conditions.
                4. A household decision written down, including the option of none.

                ## Notes
                This is a health decision, not a pairing exercise. Never start drinking because of the diet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written alcohol decision exists, informed by national guidance and your clinician's view, with two weeks of current intake recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Record what you actually drink for two weeks"
                - "Read your health service's low-risk drinking guidance"
                - "Ask your clinician whether alcohol is safe with your medicines"
                - "Write the household decision on alcohol, including none"
            - name: Keeping the switch affordable
              description: |-
                ## Purpose
                Olive oil, nuts and fresh fish can make the Mediterranean shop look expensive, while dried legumes, tinned tomatoes, frozen vegetables, tinned sardines and seasonal produce are some of the cheapest foods available. Comparing four weeks of spending before and after, line by line, shows where the money really goes and which cheaper swaps keep the pattern within budget.

                ## Milestones
                1. Four weeks of food spending before the switch recorded.
                2. Four weeks of spending after the switch recorded the same way.
                3. The five most expensive new items identified, with a cheaper alternative for each.
                4. A monthly budget figure agreed for the new way of eating.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Eight weeks of spending are compared side by side and a monthly food budget is agreed, with cheaper swaps for the five costliest items."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect last month's food receipts or online order totals"
                - "Record four weeks of spending after the switch the same way"
                - "Find a cheaper alternative for the five costliest new items"
                - "Compare the month's food spend with the agreed budget @recurring(monthly:24)"
            - name: Long Sunday lunch for the family
              description: |-
                ## Purpose
                The slow shared lunch, with several dishes on the table and nobody rushing, is as much a part of Mediterranean eating as the olive oil. Hosting one for family or close friends, with a menu built entirely from the pattern, shows the people you eat with that the change is generous rather than restrictive.

                ## Milestones
                1. A date set and guests invited.
                2. A menu written: a starter, a main built on fish or legumes, vegetable sides and a fruit dessert.
                3. A prep timeline so most dishes are ready before guests arrive.
                4. The lunch held, with the dishes guests liked noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A Mediterranean family lunch has been held on a set date and the dishes guests enjoyed are written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Choose a Sunday and invite family or close friends"
                - "Write a menu built on fish or legumes, vegetables and fruit"
                - "Write a prep timeline that leaves the last hour free"
                - "Ask guests which dish they would want again and note it"
            - name: Mezze evening for friends
              description: |-
                ## Purpose
                Small shared plates are the easiest way to cook Mediterranean food for a group: most can be made ahead, cost little and suit vegetarians and meat eaters alike. A mezze evening is also a relaxed way to share the change with friends who are curious about it.

                ## Milestones
                1. Six to eight mezze dishes chosen, most of them made ahead.
                2. A shopping list and day-before prep plan written.
                3. The evening held with every dish on the table at the start.
                4. Leftovers turned into lunches over the next two days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mezze evening with at least six dishes has been hosted and the leftovers used within two days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick a date and invite four to six friends"
                - "Choose six to eight dishes, at least half of them made ahead"
                - "Prepare dips, salads and marinated vegetables the day before"
                - "Turn the leftovers into lunches for the next two days"
            - name: Six-month review with your clinician
              description: |-
                ## Purpose
                Six months is long enough for changes in cholesterol, weight, waist or blood sugar to show, and a planned review turns the diet change into something measured rather than hoped for. Booking it at the start, with the same tests as the baseline, means the results arrive while you can still adjust course.

                ## Milestones
                1. A review appointment booked about six months after starting.
                2. Any agreed blood tests done a week or two before.
                3. Your monthly scores and a summary of the changes made brought to the appointment.
                4. The results and your clinician's advice on next steps written down.
              priority: high
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A six-month review has been held, with fresh results compared against the baseline and the clinician's advice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a review appointment for about six months after you start"
                - "Ask which blood tests should be repeated and book them beforehand"
                - "Prepare a one-page summary of the changes and monthly scores"
                - "Write down the results and agreed next steps"
            - name: New season olive oil tasting at home
              description: |-
                ## Purpose
                Each autumn and early winter the new harvest's oil arrives, greener, more peppery and at its freshest. A small side-by-side tasting of three or four oils teaches you what fruity, bitter and pungent mean, how to spot a stale or rancid bottle, and which style you actually like for finishing dishes.

                ## Milestones
                1. Three or four extra virgin oils from different countries or olive varieties bought.
                2. A simple tasting sheet with fruity, bitter, pungent and off-flavour columns.
                3. The tasting held with bread, apple slices and water.
                4. A preferred finishing oil chosen for the year.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tasting of at least three oils has been held with notes on each, and a finishing oil chosen for the year."
                cadence: cyclic
              tasks:
                - "Buy three or four small bottles of new season extra virgin oil"
                - "Make a tasting sheet with fruity, bitter, pungent and off-flavour columns"
                - "Taste each oil from a small glass and note your scores"
                - "Hold a tasting when the new harvest's oil reaches the shops @recurring(yearly)"
            - name: Market visit and cooking class on a Mediterranean trip
              description: |-
                ## Purpose
                A holiday in Greece, southern Italy, Spain, Turkey, Lebanon or Morocco is the best possible classroom: markets show what people actually buy, and a half-day class with a local cook teaches dishes no recipe book quite captures. Planning it into the trip, rather than hoping to stumble on it, brings back skills and recipes that last.

                ## Milestones
                1. A market and a cooking class identified for the destination.
                2. The class booked, with dietary needs mentioned in advance.
                3. Three dishes learned and written up within a week of getting home.
                4. One dish cooked at home for the household.

                ## Notes
                Start from the **Trip** template.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A cooking class on a Mediterranean trip has been attended and three dishes written up and cooked at home."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a market and a well-reviewed cooking class at your destination"
                - "Book the class and mention any dietary needs"
                - "Write up three dishes within a week of getting home"
                - "Cook one of them for the household in the first month back"
            - name: Mediterranean eating for one or two on a pension
              description: |-
                ## Purpose
                Retired couples and people living alone often find that recipes serve four, fish comes in packs too big and fresh produce goes off before it is used. Planning a Mediterranean week around tinned fish, frozen vegetables, dried legumes and dishes that halve or freeze well keeps the pattern affordable and waste low on a fixed income.

                ## Milestones
                1. Six Mediterranean dishes chosen that halve or freeze well.
                2. A weekly shop sized for one or two people.
                3. Fish bought frozen or tinned in single portions.
                4. Waste and spending noted for four weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "For four weeks, a Mediterranean shop sized for one or two is in use, with spending and waste recorded each week."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick six dishes that halve easily or freeze in single portions"
                - "Buy fish frozen or tinned in single portions"
                - "Freeze half of each batch on the day you cook it"
                - "Note what was thrown away at the end of each week for a month"
            - name: Softer Mediterranean dishes for teeth and appetite
              description: |-
                ## Purpose
                Raw salads, crusty bread and whole nuts can become hard work with dentures, sore gums or a smaller appetite later in life. Many Mediterranean dishes are naturally soft, such as bean soups, slow-braised vegetables, baked fish, lentils and yogurt, so the pattern can carry on with a change of texture rather than being given up.

                ## Milestones
                1. Foods that have become difficult to chew listed.
                2. Eight soft Mediterranean dishes chosen to replace them.
                3. Nuts swapped for nut butters or ground nuts where needed.
                4. Any ongoing chewing or swallowing difficulty raised with a dentist or doctor.

                ## Notes
                Coughing or choking while eating is a reason to speak to a doctor, not just to change recipes.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight soft Mediterranean dishes are in the rotation and any chewing difficulty has been raised with a professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the foods that have become hard to chew or swallow"
                - "Choose eight soft dishes such as lentil soup, baked fish and braised beans"
                - "Swap whole nuts for nut butter or ground nuts in breakfasts"
                - "Mention any chewing trouble at your next dental appointment"
            - name: Bringing a sceptical partner along
              description: |-
                ## Purpose
                In many couples one person wants the change and the other quietly misses the old meals, and it is often the second person who decides whether it lasts. Starting from dishes they already like, protecting one of their favourites and letting them choose the next change makes it a shared project rather than a regime.

                ## Milestones
                1. The sceptical partner's favourite meals and real objections written down.
                2. Three Mediterranean dishes found that sit close to what they already enjoy.
                3. One protected favourite kept on the weekly plan unchanged.
                4. The partner choosing the next change at the quarterly check-in.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The sceptical partner has rated three new dishes, has one protected favourite on the plan and has chosen at least one change."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your partner what they would miss most and why"
                - "Find three Mediterranean dishes close to meals they already like"
                - "Keep one of their favourites on the plan every week"
                - "Let them choose the next change from a shortlist of three"
            - name: Mediterranean dinners children will eat
              description: |-
                ## Purpose
                Children often resist strong flavours and visible vegetables, yet many Mediterranean dishes have a familiar shape: pasta with lentil ragu, chicken and chickpea traybakes, fish cakes made with tinned salmon, flatbread pizzas loaded with vegetables. Building a short list the children actually eat stops the household cooking two dinners every night.

                ## Milestones
                1. Six family dinners chosen that suit both adults and children.
                2. Children involved in choosing or preparing at least one each week.
                3. A separated option, with sauce or vegetables served apart, for younger children.
                4. Four of the six eaten without a separate children's meal.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four Mediterranean dinners are eaten by the whole family without a separate children's meal being cooked."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Choose six dinners with a familiar shape, such as pasta, traybakes or fish cakes"
                - "Let a child pick and help make one dinner a week"
                - "Serve sauces and vegetables separately for younger children"
                - "Note which dinners the children finish"
            - name: Twenty-minute Mediterranean dinners for busy weeks
              description: |-
                ## Purpose
                Long working days are when takeaways and ready meals creep back. A short list of dinners that take twenty minutes from tins, jars and the freezer, such as chickpea and spinach stew, tuna and white bean pasta or eggs baked in tomato sauce, keeps the pattern going on nights with no energy for cooking.

                ## Milestones
                1. Eight twenty-minute dinners chosen and tested.
                2. Every ingredient for at least three of them kept in the cupboard or freezer.
                3. The list stuck inside a cupboard door.
                4. Takeaways down to an agreed number a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight tested twenty-minute dinners are on a list, with ingredients for three always in stock and takeaways at or under the agreed number."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Time three quick dinners from tins and the freezer this week"
                - "Write the eight quickest on a list inside a cupboard door"
                - "Keep the ingredients for three of them in stock at all times"
                - "Agree a monthly takeaway limit with the household"
            - name: Following a dietitian's plan after a heart diagnosis
              description: |-
                ## Purpose
                After a heart attack, a stent or a diagnosis of high cholesterol, many people are advised to eat in a Mediterranean way, often through a cardiac rehabilitation programme or a dietitian. Turning that advice into a written plan, with questions answered and changes scheduled, makes sure the recommendations become meals rather than a leaflet in a drawer.

                ## Milestones
                1. The dietitian's or rehab team's written advice gathered in one place.
                2. Questions about specific foods, portions and medicines asked and answered.
                3. Their recommendations mapped onto your weekly meal plan.
                4. A follow-up appointment booked to review progress.

                ## Notes
                Where the dietitian's advice differs from a general Mediterranean guide, follow the dietitian: they know your medicines and results.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The dietitian's recommendations are written into the weekly meal plan and a follow-up appointment is booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather every leaflet and note from the rehab team or dietitian"
                - "Write three questions about foods or portions you are unsure of"
                - "Map each recommendation onto a day of your meal plan"
                - "Book the follow-up appointment before you leave the session"
            - name: Cooking Mediterranean meals for a parent you care for
              description: |-
                ## Purpose
                Carers who cook for an older parent often want to improve their meals without a battle over long-held habits. Introducing Mediterranean dishes gradually, in familiar forms and in portions that freeze well, lets a parent eat better while keeping the foods that matter to them.

                ## Milestones
                1. Your parent's current meals, likes and any dietary advice from their doctor noted.
                2. Three Mediterranean dishes introduced in familiar forms.
                3. A weekly cook-and-freeze routine of single portions running.
                4. Your parent's view on the new dishes asked and respected.

                ## Notes
                If your parent has a swallowing difficulty, a kidney diet or takes blood thinners, check changes with their care team first.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "For eight weeks, single portions of Mediterranean dishes are cooked and delivered weekly, with your parent's preferences recorded."
                cadence: rolling
              tasks:
                - "Ask your parent which meals they love and which they would not miss"
                - "Check with their care team whether any diet advice applies"
                - "Cook and freeze two Mediterranean portions for your parent @recurring(weekly:wed)"
                - "Label each portion with the dish, date and reheating note"
            - name: Regional Mediterranean patterns beyond Italy and Greece
              description: |-
                ## Purpose
                Pasta and Greek salad are only part of the picture: Levantine, Turkish, Spanish, southern French, North African and Croatian kitchens follow the same pattern with different herbs, spices and legumes. Working through one region a month keeps an experienced household's rotation fresh and teaches new ways to eat more vegetables and beans.

                ## Milestones
                1. Six regions chosen for the next six months.
                2. Two everyday dishes cooked from each region.
                3. The new herbs, spices or ingredients each region needs added to the pantry.
                4. At least one dish from each region kept in the rotation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two dishes from each of six regions have been cooked, with at least one per region kept in the rotation."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Choose six Mediterranean regions to cook through"
                - "Buy the two or three new pantry items the first region needs"
                - "Cook one new everyday dish from this month's region @recurring(monthly:16)"
                - "Keep the best dish from each region in the seasonal rotation"
            - name: A year of Mediterranean score and health markers
              description: |-
                ## Purpose
                Experienced self-trackers want to know whether a higher checklist score actually goes with better results for them. Logging the monthly score next to the measures you already have, such as weight, waist, home blood pressure or cholesterol results, for a full year gives you and your clinician a personal picture no single test can.

                ## Milestones
                1. A log with columns for score, weight, waist and any results your clinician follows.
                2. Twelve monthly rows completed.
                3. Results from blood tests during the year added when they arrive.
                4. A one-page summary of the year discussed with your clinician.

                ## Notes
                Look for patterns, not proof: one person's year cannot show cause and effect.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "Twelve monthly rows of score and health markers are logged and a one-page summary has been discussed with your clinician."
                cadence: cyclic
              tasks:
                - "Add weight, waist and result columns beside the monthly score"
                - "Record the month's weight and waist next to the score @recurring(monthly:28)"
                - "Add each blood test result to the log when it arrives"
                - "Write a one-page summary of the year for your clinician"
            - name: Personal Mediterranean recipe binder of thirty dishes
              description: |-
                ## Purpose
                After a year, most households have a scatter of recipes across websites, screenshots and torn pages, and the dishes that really worked get forgotten. Building a binder of thirty tested recipes, each with your own notes on quantities, swaps and timings, turns the transition into a permanent repertoire someone else in the family could cook from.

                ## Milestones
                1. A binder or digital folder set up with sections by meal type.
                2. Thirty recipes added, each cooked at least twice.
                3. Your own notes on swaps, portions and timings on every recipe.
                4. A copy shared with a family member who cooks.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A binder holds thirty Mediterranean recipes, each cooked at least twice and annotated, and a copy has been shared."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Set up a binder or folder with sections for breakfast, lunch, dinner and mezze"
                - "Add one tested recipe with your own notes to the binder @recurring(monthly:9)"
                - "Rewrite quantities for the number of people you usually cook for"
                - "Share a copy with a family member who cooks"
---

# Mediterranean Diet Transition

This area is for households, couples and retirees who want to eat the Mediterranean way without turning the kitchen upside down overnight. It starts with foundations (a baseline score, agreed reasons, a word with your clinician, a twelve-week plan and a restocked pantry), then the weekly and monthly routines, the cooking skills the pattern depends on, the swaps and decisions meal by meal, a few occasions to cook for, versions for retirees, carers, families and busy workers, and finally the work of an experienced Mediterranean cook.

What repeats is a Sunday meal plan, two fish nights and a weekend pot of beans and grains, a weekly vegetable tally, a monthly score check and staples restock, and a quarterly household check-in. The Purchase decision, Weekly meal plan, Habit tracker, Metrics log, Reading queue and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
