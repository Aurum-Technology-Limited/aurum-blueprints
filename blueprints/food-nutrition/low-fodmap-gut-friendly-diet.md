---
id: food-nutrition.low-fodmap-gut-friendly-diet
name: Low-FODMAP & Gut-Friendly Diet
description: "A low-FODMAP trial done properly: checks with your doctor first, a short elimination, careful reintroduction challenges, and a broad personal diet that keeps your trigger foods in their place."
category: personal
version: 1.0.0
tags: [food-nutrition, low-fodmap-gut-friendly-diet, everyone, ibs, elimination-diet, reintroduction, symptom-diary, dietitian]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - trip
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Low-FODMAP & Gut-Friendly Diet
          description: "Following an elimination and reintroduction diet such as low-FODMAP to identify trigger foods for digestive symptoms."
          projects:
            - name: Medical assessment before cutting foods out
              description: |-
                ## Purpose
                Bloating, pain and changed bowel habits are usually irritable bowel syndrome, but coeliac disease, inflammatory bowel disease and other conditions can look the same, and some of their tests only work while you are still eating normally. Seeing your doctor before starting any elimination means the diet is treating the right problem and no test is spoiled by an empty plate.

                ## Milestones
                1. An appointment booked with your doctor specifically to discuss ongoing gut symptoms.
                2. A one-page summary of symptoms, how long they have lasted and family history taken to the appointment.
                3. Any tests your doctor wants, such as a coeliac blood test, done before your diet changes.
                4. Your doctor's view on whether a low-FODMAP trial is sensible for you written down with the date.

                ## Notes
                If you have already cut out wheat or bread, say so. Coeliac testing needs gluten in the diet, and your doctor decides whether and how to put it back first.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor has reviewed your gut symptoms, any tests they asked for are done, and their view on a low-FODMAP trial is recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a doctor's appointment to talk about your gut symptoms"
                - "Write a one-page summary of symptoms, duration and family bowel history"
                - "Ask which tests should be done before you change what you eat"
                - "Record your doctor's view on trying a low-FODMAP diet"
            - name: Gut red flag symptoms card
              description: |-
                ## Purpose
                A food diary can make every symptom look like a FODMAP problem, when a few signs, such as bleeding, unexplained weight loss, waking at night with diarrhoea or a lasting change in habit later in life, need a doctor rather than another food test. Writing your health service's list on one card means you will notice them instead of explaining them away.

                ## Milestones
                1. Your health service's published list of warning signs for bowel symptoms found.
                2. A short card written with the signs and who to contact for each.
                3. The card kept inside the front of your food and symptom log.
                4. Your doctor asked whether any extra signs apply to you because of personal or family history.

                ## Notes
                This card organises your health service's advice and does not replace it. If a sign appears, contact your doctor even if you are halfway through the diet.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red flag card based on your health service's guidance sits in your symptom log, checked once with your doctor."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's warning signs for bowel symptoms"
                - "Write the signs and the right contact for each on one card"
                - "Tuck the card inside the front of your symptom log"
                - "Reread the card and check it still matches current guidance @recurring(yearly)"
            - name: Two-week baseline food and symptom diary
              description: |-
                ## Purpose
                Without a record of how things are now, there is no way to tell whether the elimination helped or whether you just had a calm fortnight. Two weeks of ordinary eating, written down meal by meal with symptom scores, gives you and your dietitian a starting line and often shows patterns, such as late meals or large portions, before any food is removed.

                ## Milestones
                1. A diary with columns for time, food and drink, portion, symptoms, stool type and stress.
                2. Fourteen consecutive days recorded while eating as you normally do.
                3. An average daily score for bloating, pain and bowel habit worked out.
                4. Three patterns or questions noted for the dietitian.

                ## Notes
                Start from the **Metrics log** template. Record honestly, including the takeaway and the extra coffee, because a tidied diary hides the very thing you are looking for.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed fourteen-day food and symptom diary with average baseline scores, kept before any foods were removed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set up a food and symptom diary from the metrics log template"
                - "Record every meal, drink and symptom for fourteen days"
                - "Work out your average daily scores at the end of the fortnight"
                - "Note three patterns or questions to raise with the dietitian"
            - name: Finding a dietitian who specialises in gut health
              description: |-
                ## Purpose
                Low-FODMAP is a three-phase process with plenty of ways to go wrong, and research on IBS consistently shows better results when a trained dietitian guides it. Finding one who works with gut conditions, through a referral or privately, gives you someone to set the length of each phase, read your results and spot nutritional gaps.

                ## Milestones
                1. Your doctor asked whether a referral to a dietitian is available and how long it takes.
                2. If paying privately, two or three registered dietitians with gut health experience shortlisted.
                3. Fees, appointment format and number of sessions compared.
                4. A first appointment booked and your baseline diary sent ahead.

                ## Notes
                Check the person is registered with the professional body for dietitians in your country. Titles like nutrition coach are not protected and do not mean the same training.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first appointment is booked with a registered dietitian who has gut health experience, with your baseline diary sent before it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor about a referral to a dietitian and the waiting time"
                - "Search the dietitians' professional register for gut health specialists"
                - "Compare fees, session numbers and online or in-person options"
                - "Book the first appointment and send your baseline diary ahead"
            - name: Choosing a lab-tested FODMAP food guide
              description: |-
                ## Purpose
                Free lists online disagree with each other, and many are copied from out-of-date sources that mark whole foods as banned when only large servings are a problem. Settling on one guide whose foods have been laboratory tested, usually an app from a university research group, means every shopping and cooking decision comes from the same reliable numbers.

                ## Milestones
                1. Two or three FODMAP guides compared on whether their foods are laboratory tested.
                2. One guide chosen and installed on your phone.
                3. Its traffic light and serving size system understood using five foods you eat often.
                4. Old printed lists and saved screenshots from other sources deleted.

                ## Notes
                Your dietitian may recommend a specific guide. Use theirs so you are both reading from the same data.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One laboratory-tested FODMAP guide is installed and in use, and conflicting older lists have been removed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your dietitian which FODMAP guide they prefer"
                - "Check whether each guide you are considering tests foods in a laboratory"
                - "Install the chosen guide and look up five foods you eat every week"
                - "Delete old printed lists and screenshots from other sources"
            - name: Personal symptom scoring sheet
              description: |-
                ## Purpose
                Words like bad day or bit bloated mean different things on different days, which makes it impossible to compare week one of elimination with week four of reintroduction. A fixed scoring sheet, with a zero to ten scale for each main symptom and a stool form chart, turns how you feel into numbers that stay comparable for months.

                ## Milestones
                1. Your three or four main symptoms chosen, such as bloating, pain, wind and urgency.
                2. A zero to ten scale written for each, with a description of what a three and a seven feel like.
                3. A stool form chart added for describing bowel movements consistently.
                4. The sheet used unchanged from the baseline diary onwards.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written scoring sheet with defined scales for each main symptom and a stool form chart, used in every diary entry from the baseline on."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the three or four symptoms that bother you most"
                - "Write what a score of three and of seven means for each symptom"
                - "Print or save a stool form chart beside the sheet"
                - "Pin the scoring sheet to the first page of your diary"
            - name: Goals, start date and stop rules for the elimination
              description: |-
                ## Purpose
                Elimination phases that drift on for months are one of the commonest mistakes, and starting the week before a holiday or a wedding sets you up to fail. Agreeing a start date, a length of two to six weeks with your dietitian, and what counts as success or a reason to stop, keeps the restrictive part short and purposeful.

                ## Milestones
                1. A start date chosen that avoids travel, celebrations and unusually stressful weeks.
                2. The elimination length agreed with your dietitian and an end date written in the calendar.
                3. A success measure set, such as a set drop in average symptom score.
                4. Stop rules written for what happens if symptoms do not improve or you lose weight unintentionally.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written plan with a start date, an agreed end date, a success measure and stop rules, checked with your dietitian before day one."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look at the next eight weeks of your calendar for clashes"
                - "Agree the elimination length with your dietitian"
                - "Write your success measure and stop rules on one page"
                - "Put the start and end dates in your calendar"
            - name: Pantry sort for the elimination weeks
              description: |-
                ## Purpose
                Most slips during elimination are not choices but grabs: the stock cube with onion powder, the honey in the cupboard, the sugar-free mints in the car. Sorting the pantry and fridge before day one, with a clearly marked shelf of suitable foods, means the easy option is also the right one for the next few weeks.

                ## Milestones
                1. Every jar, packet and sauce checked against your chosen FODMAP guide.
                2. High-FODMAP items moved to a separate box or shelf for the rest of the household, not thrown away.
                3. One shelf in the cupboard and fridge marked for your elimination foods.
                4. Gaps written on the shopping list.

                ## Notes
                You will want most of these foods back after reintroduction, so store rather than bin anything still in date.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The kitchen has a marked shelf of elimination-friendly foods and high-FODMAP items are stored separately, before the start date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check the cupboard sauces and stock cubes against your FODMAP guide"
                - "Box up high-FODMAP items for the household rather than binning them"
                - "Label one cupboard shelf and one fridge shelf for your foods"
                - "Add every gap you found to the shopping list"
            - name: Low-FODMAP staples shopping list
              description: |-
                ## Purpose
                The first big shop on a low-FODMAP diet can take two hours of squinting at labels, and nobody wants to do that every week. Building a saved list of brands and products you have already checked, from bread and milk to stock and snacks, cuts later shops to normal length and avoids the panic buy of whatever looks safe.

                ## Milestones
                1. A list of staples grouped by shop aisle or online category.
                2. A checked brand or product named for each item, with the serving size from your guide.
                3. The list saved where you shop, on paper, a phone note or an online basket.
                4. Products that changed recipe or stopped being sold removed or replaced.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A saved staples list naming a checked product for at least twenty everyday items, refreshed within the last month."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the twenty staples you buy most often"
                - "Find and check a suitable brand or product for each one"
                - "Save the list as an online basket or a phone note"
                - "Recheck labels on the staples list for recipe changes @recurring(monthly:3)"
            - name: Daily symptom log through elimination and reintroduction
              description: |-
                ## Purpose
                During the elimination and challenge phases, memory is useless: by Friday nobody can say whether Tuesday was a four or a seven. Logging meals and scores every evening in two or three minutes is what makes the results believable, and it is the record your dietitian will ask for at every appointment.

                ## Milestones
                1. A fixed time each evening chosen for the log.
                2. Meals, symptom scores and stool form recorded daily using your scoring sheet.
                3. Fewer than three missed days in any month of elimination or reintroduction.
                4. The log paused deliberately once your personalised diet is settled.

                ## Notes
                Log only during the active phases. Logging every mouthful forever can feed food anxiety, so stop when your dietitian agrees the testing is done.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily log with scores for every day of the elimination and reintroduction phases, with no more than three gaps a month."
                cadence: rolling
              tasks:
                - "Choose the evening time you will fill in the log"
                - "Log the day's meals, symptom scores and stool form @recurring(daily)"
                - "Note anything unusual, such as poor sleep, illness or a stressful day"
            - name: Weekly low-FODMAP meal plan
              description: |-
                ## Purpose
                Elimination fails on Wednesday at seven in the evening, when there is nothing in the fridge you are sure about. Planning the week's meals on Sunday from recipes you have checked, with the shopping list built from the plan, removes the daily guesswork and keeps the diet varied enough to last.

                ## Milestones
                1. A weekly plan covering dinners and lunches, with breakfasts settled as defaults.
                2. Each meal checked for serving sizes in your FODMAP guide.
                3. The shopping list generated from the plan.
                4. Eight weekly plans completed without repeating the same dinner more than twice a week.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans written, each with its shopping list, during elimination and reintroduction."
                cadence: rolling
              tasks:
                - "Create a meal plan page from the weekly meal plan template"
                - "Plan the week's low-FODMAP meals and write the shopping list @recurring(weekly:sun)"
                - "Pick three fallback dinners you can make from the cupboard"
            - name: Weekly elimination scorecard
              description: |-
                ## Purpose
                Daily scores jump about, so the useful question is whether this week is better than the last one and the baseline. A ten-minute Saturday scorecard averaging each symptom shows when the elimination has done its job, which is the signal to move on to reintroduction rather than staying restricted longer than needed.

                ## Milestones
                1. A scorecard with one row per week and one column per symptom.
                2. Each week's averages compared with the baseline.
                3. The week the success measure was reached marked clearly.
                4. The scorecard shared with your dietitian before each appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly scorecard comparing each week's average scores with the baseline, kept for the whole elimination phase."
                cadence: rolling
              tasks:
                - "Add a weekly summary table to your symptom log"
                - "Average the week's symptom scores and compare them with the baseline @recurring(weekly:sat)"
                - "Send the scorecard to your dietitian before each appointment"
            - name: Onion and garlic free flavour bases in the freezer
              description: |-
                ## Purpose
                Onion and garlic are in nearly every savoury recipe and in most shop-bought stocks, and leaving them out without a substitute makes food taste thin enough to abandon the diet. Keeping frozen portions of suitable stock, a herb paste with spring onion greens, and a supply of garlic-infused oil means weeknight cooking starts from flavour rather than from nothing.

                ## Milestones
                1. Two or three bases chosen, such as stock made without onion, a green herb paste and a tomato sauce.
                2. Each base cooked and frozen in labelled portions.
                3. A suitable shop-bought garlic-infused oil found and kept in the cupboard.
                4. The freezer topped up before stocks run out.

                ## Notes
                Garlic flavour passes into oil but the fructans do not, which is why infused oil works. Home-made garlic oil carries a botulism risk at room temperature, so keep it in the fridge for a few days at most or freeze it, or buy a commercial one.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least two frozen flavour bases and one garlic-infused oil are always in stock, topped up monthly for three months."
                cadence: rolling
              tasks:
                - "Choose two flavour bases you would use at least weekly"
                - "Cook a batch of onion-free stock and freeze it in portions"
                - "Buy a commercial garlic-infused oil and check its label"
                - "Check the freezer and cook a fresh batch of any base running low @recurring(monthly:14)"
            - name: Structured FODMAP reintroduction challenges
              description: |-
                ## Purpose
                Reintroduction is where the diet earns its keep: it shows which FODMAP groups you react to and at what amount, so you can bring back everything else. Testing one group at a time over about three days with rising servings, and a washout gap between tests, keeps the results clean enough to trust.

                ## Milestones
                1. A challenge food and three increasing serving sizes chosen for each group with your dietitian.
                2. A calendar of challenges with washout days between them.
                3. Each challenge run while staying on the elimination diet for everything else.
                4. A tolerated, partly tolerated or not tolerated result recorded for every group.

                ## Notes
                Stop a challenge early if symptoms are clearly triggered, go back to baseline, then move on. A bad reaction to one food is information, not failure.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every FODMAP group has been challenged with rising servings and a written result, within three months of finishing elimination."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Agree the challenge foods and serving sizes with your dietitian"
                - "Draw up a challenge calendar with washout days between groups"
                - "Run the first three-day challenge and score symptoms each day"
                - "Record the result for the group before starting the next one"
            - name: FODMAP group results table
              description: |-
                ## Purpose
                Results scattered across weeks of diary pages are easy to misread later, especially a year on when a flare makes you doubt everything. A single table listing each group, the food used, the largest serving tolerated and the symptoms seen becomes the reference you shop, cook and order from.

                ## Milestones
                1. A table with one row per FODMAP group and columns for food, servings, symptoms and result.
                2. Every completed challenge entered on the day it finished.
                3. The table checked by your dietitian at the end of reintroduction.
                4. A copy kept on your phone for shopping and eating out.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results table covering every FODMAP group, checked by your dietitian and saved on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a results table with one row per FODMAP group"
                - "Enter each challenge result on the day it ends"
                - "Ask your dietitian to check the table at the final appointment"
                - "Save a copy of the table to your phone"
            - name: Monthly gut symptom trend review
              description: |-
                ## Purpose
                Once the testing is done, symptoms can creep back slowly through stacking, stress or a change of routine, and a monthly glance catches the drift months before an appointment would. Twenty minutes comparing this month's average with the last few tells you whether to adjust, wait, or call your dietitian.

                ## Milestones
                1. A monthly slot in the calendar for the review.
                2. Each month's average symptom score added to a running chart.
                3. A written rule for what size of change prompts contact with your dietitian or doctor.
                4. Six consecutive monthly reviews completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each comparing the month's average with previous months and noting any action."
                cadence: rolling
              tasks:
                - "Agree with your dietitian what change in scores should prompt a call"
                - "Compare this month's average symptom scores with the last three months @recurring(monthly:20)"
                - "Write one line on what changed and what you will try next"
            - name: Weekly fibre and plant variety count
              description: |-
                ## Purpose
                Cutting wheat, beans, onions and many fruits can halve fibre intake, which brings its own constipation and leaves fewer foods for gut bacteria. Counting suitable fibre sources and different plant foods once a week, such as oats, linseed, kiwi, potatoes with skin, carrots and nuts, keeps the diet from narrowing while you protect your gut from known triggers.

                ## Milestones
                1. A list of fifteen fibre-rich foods that fit your current phase.
                2. A weekly count of different plant foods eaten.
                3. A target for weekly plant variety agreed with your dietitian.
                4. The target met in six of eight weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly plant variety count kept for eight weeks, meeting the target agreed with your dietitian in at least six of them."
                cadence: rolling
              tasks:
                - "List fifteen fibre-rich foods that suit your current phase"
                - "Ask your dietitian for a weekly plant variety target"
                - "Count the different plant foods you ate this week @recurring(weekly:wed)"
            - name: Dietitian follow-up appointments
              description: |-
                ## Purpose
                A first appointment sets things up, but the decisions that matter come later: when to end elimination, how to read a confusing challenge, which foods to bring back first. Keeping a regular follow-up rhythm, with your scorecard sent ahead and questions ready, makes each paid or referred session count.

                ## Milestones
                1. Follow-up dates agreed for the end of elimination, mid reintroduction and the final review.
                2. Your scorecard and results table sent a few days before each one.
                3. Three questions prepared for every appointment.
                4. The plan agreed at each appointment written down the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Each planned dietitian follow-up held with records sent ahead and the agreed plan written down afterwards."
                cadence: cyclic
              tasks:
                - "Book follow-ups for the end of elimination and mid reintroduction"
                - "Send your latest scorecard and three questions ahead of the follow-up @recurring(quarterly)"
                - "Write down the agreed plan within a day of each appointment"
            - name: Annual gut health review with your doctor
              description: |-
                ## Purpose
                IBS is long-term for many people, and both symptoms and guidance change over the years. A yearly review, with your results table, monthly trends and any new symptoms, keeps the diagnosis checked against how things are now and gives a natural moment to ask about other treatments.

                ## Milestones
                1. The review month chosen and the appointment booked.
                2. A summary of the year's trends, flares and diet changes prepared.
                3. Any new symptom checked against your red flag card and raised.
                4. Outcomes and any referrals written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A gut health review held with your doctor each year, with a prepared summary and written outcomes."
                cadence: cyclic
              tasks:
                - "Book the yearly gut health review with your doctor @recurring(yearly)"
                - "Prepare a one-page summary of the year's trends and flares"
                - "Record the outcomes and any referrals the same day"
            - name: Understanding the six FODMAP groups
              description: |-
                ## Purpose
                FODMAPs are several different short-chain carbohydrates, and people rarely react to all of them, which is the whole point of testing. Knowing the six groups usually tested, fructans, galacto-oligosaccharides, lactose, excess fructose, sorbitol and mannitol, and the everyday foods rich in each, turns the food lists from a rulebook into something you understand.

                ## Milestones
                1. A one-page note naming each group and why it can cause symptoms.
                2. Three common foods listed for each group.
                3. The difference between a high-FODMAP food and a high-FODMAP serving written in your own words.
                4. Your note checked against your chosen guide or your dietitian.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note covering all six FODMAP groups with example foods, checked against a reliable guide or your dietitian."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your FODMAP guide's explanation of the groups"
                - "Write each group with three everyday foods that contain it"
                - "Explain the difference between a food and a serving in one sentence"
                - "Ask your dietitian to check the note at your next appointment"
            - name: Reading labels for hidden FODMAPs
              description: |-
                ## Purpose
                Ingredients such as inulin, chicory root fibre, fructo-oligosaccharides, honey, agave, apple juice concentrate and sugar alcohols ending in -itol turn up in breakfast cereals, protein bars, gluten-free bread and sugar-free sweets. Learning to scan an ingredient list for them in under a minute saves symptoms you would otherwise blame on dinner.

                ## Milestones
                1. A pocket list of hidden FODMAP ingredient names and additive numbers for polyols.
                2. Ten products in your cupboard checked against it.
                3. The difference between onion powder, onion extract and natural flavourings noted as your guide describes it.
                4. Two products swapped for versions without hidden FODMAPs.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A pocket list of hidden FODMAP ingredients is in use, with ten products checked and at least two swapped."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a pocket list of hidden FODMAP ingredient names"
                - "Add the additive numbers for common sugar alcohols to the list"
                - "Check ten cupboard products against the list"
                - "Swap two products for versions without hidden FODMAPs"
            - name: Serving sizes and FODMAP stacking
              description: |-
                ## Purpose
                Many foods are fine in a small serving and a problem in a large one, and several small servings of the same group in one meal can add up to a large one. Understanding serving thresholds and stacking explains the confusing days when every food was on the list and symptoms came anyway.

                ## Milestones
                1. How your guide shows serving thresholds, such as traffic lights by weight, understood.
                2. Five foods you eat often weighed at their suitable serving size.
                3. One recent meal analysed for stacking within a single FODMAP group.
                4. A rule of thumb written for spacing similar foods across the day.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five everyday foods weighed at their suitable serving, one meal checked for stacking, and a written spacing rule in your log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up how your guide marks suitable serving sizes"
                - "Weigh five everyday foods at their suitable serving"
                - "Check one recent meal for several foods from the same group"
                - "Write a simple rule for spacing similar foods through the day"
            - name: Cooking flavour without onion and garlic
              description: |-
                ## Purpose
                Home cooks reach for onion and garlic out of habit, and removing them is the single biggest change most people notice. Learning the swaps that actually work, infused oils, the green tops of leeks and spring onions, chives, asafoetida in small amounts, ginger, citrus and toasted spices, keeps meals tasting like food you want to eat.

                ## Milestones
                1. Six onion and garlic swaps tried in real cooking.
                2. Three regular recipes cooked successfully with the swaps.
                3. A note of which swap suits which kind of dish.
                4. Household members asked to rate the results honestly.

                ## Notes
                Some asafoetida powders are cut with wheat flour. That matters only if you react to fructans or need to avoid gluten, so check the label.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three regular household recipes cooked without onion or garlic using written swaps, and rated acceptable by the people who eat them."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Buy garlic-infused oil, chives and a small jar of asafoetida"
                - "Cook a regular recipe using spring onion greens instead of onion"
                - "Write which swap worked best for soups, stir-fries and sauces"
                - "Ask the household to rate the new versions honestly"
            - name: Plain-language note on your IBS diagnosis
              description: |-
                ## Purpose
                Many people leave the surgery with a diagnosis of IBS and no clear idea what it means, which type they have, or why diet is only one part of managing it. A short plain-language note, checked with your doctor, helps you explain it to family and work and ask sharper questions at reviews.

                ## Milestones
                1. Your diagnosis and the type, such as constipation, diarrhoea or mixed, written down.
                2. The tests that were done to reach it listed.
                3. The main approaches your health service describes for IBS noted.
                4. The note read by your doctor or dietitian for accuracy.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note of your diagnosis, its type and the tests behind it, checked by your doctor or dietitian."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor which type of IBS you have been diagnosed with"
                - "List the tests that were done before the diagnosis"
                - "Read your health service's patient information on IBS"
                - "Ask the agent to draft a short plain-language summary for you to check"
            - name: Gut-brain connection and stress practice
              description: |-
                ## Purpose
                The gut and the brain are wired closely together, so stress, poor sleep and anxiety can trigger symptoms on a perfectly planned diet. Learning how this connection works, and trying a daily relaxation or breathing practice alongside the diet, can make results clearer and gives you a second lever when food is not the cause.

                ## Milestones
                1. A reputable explanation of the gut-brain connection read and summarised.
                2. Gut-directed approaches such as hypnotherapy or talking therapies raised with your doctor.
                3. A daily ten-minute practice tried for four weeks.
                4. Symptom averages compared before and after the four weeks.

                ## Notes
                Start from the **Habit tracker** template. Gut-directed hypnotherapy and cognitive behavioural therapy for IBS are offered by some health services; ask what is available near you.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Four weeks of a daily relaxation practice logged, with symptom averages compared and a keep or drop decision recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your health service's information on IBS and stress"
                - "Ask your doctor about gut-directed hypnotherapy or talking therapy"
                - "Do ten minutes of your chosen relaxation practice @recurring(daily)"
                - "Compare four weeks of symptom averages with the month before"
            - name: Adapting recipes to the FODMAP rules
              description: |-
                ## Purpose
                Cookbooks written for the diet run out quickly, while your own recipe collection already holds the meals you like. Learning a repeatable method for converting a recipe, checking each ingredient, swapping or reducing the problem ones and correcting the flavour, means almost any dish can be brought along.

                ## Milestones
                1. A written conversion checklist covering ingredients, servings and flavour.
                2. Five recipes from your own collection converted with it.
                3. Notes added to each on what changed and how it tasted.
                4. One converted recipe served to guests without comment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five of your own recipes converted using a written checklist, each with notes on the changes and the result."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Write a short checklist for converting a recipe"
                - "Choose five favourite recipes that need converting"
                - "Convert and cook one recipe a week with notes"
                - "Serve one converted dish to friends or family"
            - name: Choosing the order of reintroduction tests
              description: |-
                ## Purpose
                The order you test FODMAP groups in changes how quickly life gets easier, because bringing back the foods you miss most early makes the rest of the diet more bearable. Deciding the order with your dietitian, based on what you eat most and what you suspect, gives the challenge calendar a reason behind it.

                ## Milestones
                1. The foods you miss most listed and grouped by FODMAP type.
                2. Your suspected triggers from the baseline diary noted.
                3. An order for testing the groups agreed with your dietitian.
                4. The order written at the top of the challenge calendar.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written order for testing every FODMAP group, agreed with your dietitian before the first challenge."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the ten foods you miss most and their FODMAP groups"
                - "Note which foods the baseline diary already made you suspect"
                - "Agree a testing order with your dietitian"
                - "Write the order at the top of the challenge calendar"
            - name: Lactose-free dairy swaps for the household
              description: |-
                ## Purpose
                Lactose is the one FODMAP that can be removed without changing the food, because lactose-free milk, yoghurt and cream are widely sold and hard and aged cheeses contain very little. Deciding which swaps the whole household will use avoids buying two of everything and keeps calcium in the diet.

                ## Milestones
                1. Every dairy product the household buys listed.
                2. A lactose-free or naturally low-lactose option chosen for each.
                3. A calcium source confirmed if any dairy is dropped altogether.
                4. A decision recorded on whether the household switches or keeps two versions.

                ## Notes
                If your lactose challenge comes back fine, many of these swaps can be undone. Wait for the result before buying in bulk.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lactose-free or low-lactose option chosen for each dairy item the household buys, with the household decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every dairy product the household buys"
                - "Taste-test lactose-free milk and yoghurt with the household"
                - "Check which hard cheeses your guide lists as suitable"
                - "Agree whether everyone switches or you keep two versions"
            - name: Bread, pasta and grain choices for elimination
              description: |-
                ## Purpose
                Wheat, rye and barley are rich in fructans, so bread and pasta need rethinking, but low-FODMAP is not the same as gluten-free. Choosing a few options that suit you, such as traditionally made spelt sourdough, oats, rice, quinoa, potatoes and checked gluten-free breads, keeps meals filling without paying for specialist products you do not need.

                ## Milestones
                1. Breakfast, lunch and dinner grain options listed for the elimination phase.
                2. Two breads chosen and checked for inulin or other hidden FODMAPs.
                3. Cost per week compared with your usual bread and pasta.
                4. The choices added to the staples shopping list.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two checked breads and a list of grain options chosen for the elimination phase and added to your staples list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List grain options for breakfast, lunch and dinner"
                - "Check two breads for inulin, honey or added fibre"
                - "Compare the weekly cost with your usual bread and pasta"
                - "Add the chosen breads and grains to the staples list"
            - name: Gut-safe snack kit for work and travel
              description: |-
                ## Purpose
                Hunger away from home is when the diet usually breaks, because station kiosks and office cupboards are full of wheat, honey and sugar alcohols. A small kit of tested snacks in the bag, the desk drawer and the car means you are never choosing between symptoms and going hungry.

                ## Milestones
                1. Eight snacks found that suit your phase and keep without a fridge.
                2. A kit packed for the bag, the desk and the car.
                3. Serving sizes portioned so a snack does not become a stack.
                4. The kits refilled before they run out.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Three snack kits in the bag, desk and car, each holding portioned snacks suited to your phase, refilled monthly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find eight snacks that suit your phase and keep without a fridge"
                - "Portion them into single servings"
                - "Pack a kit for your bag, desk and car"
                - "Refill the snack kits and replace anything past its date @recurring(monthly:25)"
            - name: Gentler FODMAP approach instead of full elimination
              description: |-
                ## Purpose
                Strict elimination is not right for everyone: people with a history of eating disorders, those already eating a narrow diet, or anyone losing weight they cannot afford may do better cutting only a few high-FODMAP foods. Deciding the approach with your dietitian before you start protects your wider health while still testing the idea.

                ## Milestones
                1. Your eating history and current diet discussed openly with your dietitian or doctor.
                2. Full elimination and a simpler approach compared for your situation.
                3. A decision made and its reasons written down.
                4. A check-in date set to revisit the choice.

                ## Notes
                If food rules are already causing you distress, say so before starting. That is exactly the information your dietitian needs.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision between full elimination and a simpler approach, made with your dietitian or doctor and recorded with its reasons."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a short honest note on your eating history and current diet"
                - "Ask your dietitian whether full elimination suits you"
                - "Record the approach chosen and the reasons for it"
                - "Set a date to check whether the approach is still right"
            - name: Questions about IBS treatments beyond diet
              description: |-
                ## Purpose
                Diet helps many people with IBS but not all of them, and there are other options your doctor or pharmacist may suggest, from soluble fibre and peppermint oil to medicines for specific symptoms and psychological therapies. Preparing questions about these means you can weigh them alongside the diet rather than discovering them years later.

                ## Milestones
                1. A list of the treatments your health service describes for IBS.
                2. Questions written about which might suit your symptom type.
                3. The questions asked at an appointment with your doctor or pharmacist.
                4. Any treatment started recorded in your log so its effect is not confused with a food result.

                ## Notes
                Start new treatments outside a reintroduction challenge where possible, so you can tell which change made the difference.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Questions on non-diet IBS treatments asked of your doctor or pharmacist, with their answers and any decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's list of IBS treatments"
                - "Write three questions about options for your symptom type"
                - "Ask your doctor or pharmacist the questions"
                - "Record any new treatment and its start date in your log"
            - name: Reworking five household favourite meals
              description: |-
                ## Purpose
                Families tend to eat the same ten or so dinners, and if half of them become off limits, someone ends up cooking twice. Reworking five favourites, such as spaghetti bolognese, curry, chilli and a roast, so they suit you and still please everyone else, keeps shared meals shared.

                ## Milestones
                1. The household's five most cooked dinners listed.
                2. Each one reworked with suitable swaps and portion changes.
                3. Every reworked meal cooked and tasted by the household.
                4. The final versions saved with your other recipes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five household favourite meals reworked, cooked and approved by the people who eat them, with recipes saved."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the household which five dinners they would miss most"
                - "Rework the first favourite with suitable swaps"
                - "Cook each reworked meal and collect honest feedback"
                - "Save the final versions with your recipes"
            - name: Personalised long-term eating plan
              description: |-
                ## Purpose
                Low-FODMAP is meant to end in a diet that is as broad as you can tolerate, because staying restricted long term cuts fibre and can harm the bacteria that keep your gut healthy. Turning your challenge results into a written personal plan, with foods you eat freely, foods in limited servings and the few you avoid, completes the process.

                ## Milestones
                1. Every food you avoided during elimination sorted into eat freely, limit or avoid.
                2. Serving limits written for the limit list.
                3. The plan reviewed with your dietitian at a final appointment.
                4. Ten previously avoided foods back in regular meals.

                ## Notes
                Expect the avoid list to be short. If most foods are still on it after reintroduction, ask your dietitian whether another cause needs looking at.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written personal eating plan with eat freely, limit and avoid lists, reviewed by your dietitian, with ten foods back in regular meals."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Sort each food you cut into eat freely, limit or avoid"
                - "Write serving limits for every food on the limit list"
                - "Review the plan with your dietitian"
                - "Check whether foods on the avoid list can move up a category @recurring(quarterly)"
            - name: Low-FODMAP plan for a special meal out
              description: |-
                ## Purpose
                Restaurant food is full of garlic butter, onion bases and stock, and a birthday dinner is not the place to discover that. Planning a booked meal out, by reading the menu ahead, calling the restaurant and preparing a short explanation, lets you enjoy the evening during elimination without wrecking the week's results.

                ## Milestones
                1. The menu read in advance and two possible dishes picked.
                2. The restaurant contacted about onion, garlic and sauces.
                3. A short, friendly explanation ready for the server.
                4. The meal and any symptoms recorded in your log afterwards.

                ## Notes
                Simple grilled meat or fish with plain potatoes or rice and a side salad without dressing is the safest fallback almost anywhere.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One planned meal out eaten during the elimination or reintroduction phase, with dishes chosen in advance and the outcome logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the restaurant menu online and pick two possible dishes"
                - "Call or message the restaurant about onion, garlic and sauces"
                - "Write a two-sentence explanation to give the server"
                - "Log the meal and any symptoms the next morning"
            - name: Travelling on a low-FODMAP diet
              description: |-
                ## Purpose
                Airports, hotel breakfasts and unfamiliar cuisines make every meal a guess, and a week of symptoms can spoil a trip. Planning food for the travel day and the first days, researching local dishes that usually suit you and packing reliable snacks keeps you comfortable away from your own kitchen.

                ## Milestones
                1. Food for the travel day and the first day away planned and packed.
                2. Five local dishes researched that are likely to suit you.
                3. A translated note about onion, garlic and wheat ready on your phone if travelling abroad.
                4. Accommodation with a fridge or kitchenette chosen where possible.

                ## Notes
                Start from the **Trip** template. Check customs rules before packing food for international travel.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip taken with travel-day food packed, five suitable local dishes identified and symptoms logged throughout."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a trip page from the trip template"
                - "Research five local dishes likely to suit your diet"
                - "Pack snacks and travel-day food from your tested list"
                - "Save a translated note about onion, garlic and wheat to your phone"
            - name: Getting through a wedding or holiday feast
              description: |-
                ## Purpose
                Feasts come with fixed menus, generous hosts and a lot of onion, and turning down food can feel rude. Deciding in advance what you will eat, what you will bring and what you will politely skip, and whether to pause testing that week, means you can enjoy the occasion and still trust your results afterwards.

                ## Milestones
                1. The host or caterer asked about the menu where appropriate.
                2. One dish you can share prepared or planned.
                3. A decision made on whether to pause challenges around the date.
                4. A short reply ready for when someone offers a second helping.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A feast attended with a food plan made in advance and reintroduction challenges paused or scheduled around it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the host or caterer what will be served"
                - "Offer to bring one dish everyone can share"
                - "Move any reintroduction challenge away from the feast week"
                - "Rehearse a short, polite reply for offers of more food"
            - name: Preparing for a gastroenterology appointment
              description: |-
                ## Purpose
                Specialist appointments are short and often months apart, and the time is easily spent reconstructing history from memory. Bringing a one-page summary, your scorecard, results table and the questions that matter most means the specialist sees the full picture and you leave with clear next steps.

                ## Milestones
                1. The appointment date and any preparation instructions confirmed.
                2. A one-page history with symptoms, tests, diet phases and treatments tried.
                3. Your scorecard and results table printed or ready on your phone.
                4. The specialist's conclusions and next steps written down the same day.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specialist appointment attended with a one-page history and records, and the outcomes written down within a day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the appointment date and any preparation needed"
                - "Ask the agent to turn your notes into a one-page history to check"
                - "Choose the three questions that matter most"
                - "Write down the specialist's conclusions on the day"
            - name: Hosting a low-FODMAP dinner for friends
              description: |-
                ## Purpose
                After weeks of careful eating, having people round can feel daunting, but a dinner you cook yourself is the one social meal you control completely. Planning a menu where every course suits you and nobody notices anything missing is a confidence boost, and proof the diet can fit a normal social life.

                ## Milestones
                1. A three-course menu planned entirely from suitable dishes.
                2. Every course cooked once in advance as a trial.
                3. The dinner hosted without a separate plate for you.
                4. Guest reactions and any symptoms noted afterwards.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dinner for at least four guests hosted with every course suited to your diet and one shared menu for everyone."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Plan a three-course menu from dishes that suit you"
                - "Cook a trial run of the main course a week before"
                - "Invite four friends and set the date"
                - "Note what guests enjoyed and how you felt the next day"
            - name: Low-FODMAP as a vegetarian or vegan
              description: |-
                ## Purpose
                Beans, lentils, chickpeas and many meat substitutes are high in FODMAPs, so plant-based eaters can lose their main protein sources overnight. Planning protein from firm tofu, tempeh, eggs or dairy if you eat them, nuts and seeds, quinoa and small servings of rinsed canned pulses keeps meals nourishing through elimination.

                ## Milestones
                1. Protein sources listed that suit both your diet and the elimination phase.
                2. Suitable serving sizes for canned, rinsed pulses checked in your guide.
                3. A week of meals planned with protein at every main meal.
                4. Your dietitian asked to check nutrients such as iron, B12 and calcium.

                ## Notes
                Canned pulses that are drained and rinsed are lower in FODMAPs than dried ones cooked at home, which is why the guide's servings differ.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A week of vegetarian or vegan elimination meals with protein at every main meal, checked by a dietitian for key nutrients."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List protein sources that fit your diet and the elimination phase"
                - "Check suitable servings for canned rinsed lentils and chickpeas"
                - "Plan a week of meals with protein at every main meal"
                - "Ask your dietitian to check iron, B12 and calcium intake"
            - name: One low-FODMAP eater in a family kitchen
              description: |-
                ## Purpose
                When only one person in a household is on the diet, the choice often seems to be cooking twice or making everyone eat the same restricted meals. Cooking one base meal that suits you, then adding garlic, onion or extra beans for others at the end, keeps dinner shared and the cook sane.

                ## Milestones
                1. The household told what the diet is, how long it lasts and how they can help.
                2. Five dinners planned where others add toppings or sides after your portion is served.
                3. A shelf or labels agreed so your foods are not used up.
                4. A family check-in held after the first fortnight.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five shared family dinners in regular use where your portion is served before extras are added, agreed with the household."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Explain the diet and its time limit to the household"
                - "Plan five dinners where others add extras after your portion"
                - "Agree labels or a shelf for your foods"
                - "Hold a family check-in after the first two weeks"
            - name: Low-FODMAP on a student budget
              description: |-
                ## Purpose
                Specialist free-from products are expensive, and students in shared kitchens have little storage and less time. Building the diet around cheap naturally suitable foods, oats, rice, eggs, potatoes, carrots, tinned tomatoes, firm tofu and frozen spinach, makes elimination possible on a tight budget and a single fridge shelf.

                ## Milestones
                1. A list of cheap naturally suitable staples priced at your usual shop.
                2. A weekly food budget set for the elimination phase.
                3. Five cheap meals that cook in under thirty minutes.
                4. Your shared-kitchen shelf labelled and stocked.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five cheap low-FODMAP meals in regular use within a set weekly budget for the elimination phase."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Price ten naturally suitable staples at your usual shop"
                - "Set a weekly food budget for the elimination weeks"
                - "Pick five meals that cook in under thirty minutes"
                - "Label your shelf in the shared fridge and cupboard"
            - name: Night shifts and irregular mealtimes with IBS
              description: |-
                ## Purpose
                Shift work scrambles meal timing, sleep and stress all at once, and all three affect gut symptoms as much as what is on the plate. Planning meals around the rota, with a main meal before the shift and something light in the small hours, helps tell food triggers apart from body clock disruption.

                ## Milestones
                1. Typical shift patterns listed with the meal times each allows.
                2. A meal pattern written for day, night and rest-day shifts.
                3. Portable suitable meals prepared before each run of nights.
                4. Shift type added to your symptom log so patterns show.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Meal patterns written for each shift type and shift type recorded in the symptom log for eight weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List your shift patterns and the meal times each allows"
                - "Write a meal pattern for day, night and rest-day shifts"
                - "Add a shift type column to your symptom log"
                - "Plan meals around next week's rota @recurring(weekly:mon)"
            - name: Supporting a child with ongoing tummy pain
              description: |-
                ## Purpose
                Children with recurring tummy pain or toileting problems need a doctor's assessment first, and restrictive diets in growing children should only be tried with a paediatric dietitian. As a parent, the useful work is keeping a clear record, getting the right referral and protecting your child's relationship with food while answers are found.

                ## Milestones
                1. A two-week record of meals, pain, toileting and school days kept.
                2. An appointment with your child's doctor attended with the record.
                3. A referral to a paediatric dietitian requested if diet is suggested.
                4. A family plan agreed for talking about food without making it scary.

                ## Notes
                Do not start an elimination diet for a child on your own. Growth and nutrition need professional oversight, and many children's symptoms have other causes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your child has been assessed by a doctor with a two-week record, and any diet change is overseen by a paediatric dietitian."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Keep a two-week record of your child's meals, pain and toilet visits"
                - "Book an appointment with your child's doctor"
                - "Ask for a paediatric dietitian referral if diet is suggested"
                - "Agree calm, neutral ways the family talks about food at meals"
            - name: Race-day gut plan for runners
              description: |-
                ## Purpose
                Runners' gut problems are common in long events, and many gels, sports drinks and energy bars contain fructose, inulin or sugar alcohols. Testing fuel and pre-race meals during training runs, using your FODMAP results, produces a race-day plan you trust rather than a gamble at the start line.

                ## Milestones
                1. The FODMAP content of your current gels, drinks and bars checked.
                2. Pre-run meals and fuel tested on at least four long training runs.
                3. A written race-day plan for the evening before, the morning and during the event.
                4. The plan used at a race and reviewed afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written race-day food and fuel plan tested on four long training runs and used at one event."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check your gels, drinks and bars for fructose, inulin and polyols"
                - "Write the meal and fuel you will test before the next long run"
                - "Log your pre-run food and how your gut felt on the long run @recurring(weekly:sat)"
                - "Write the race-day plan from what worked"
            - name: Tracking gut symptoms across the menstrual cycle
              description: |-
                ## Purpose
                Hormonal changes around a period make IBS symptoms worse for many people, which can make a reintroduction challenge look like a failure when it was really the time of the month. Recording cycle days beside symptom scores separates the two and helps you time challenges for calmer weeks.

                ## Milestones
                1. Cycle day added as a column in your symptom log.
                2. Two full cycles recorded alongside symptom scores.
                3. Any repeating pattern around particular cycle days written down.
                4. Future challenges scheduled away from your worst days.

                ## Notes
                Severe or changing period pain alongside gut symptoms is worth raising with your doctor in its own right.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two full cycles recorded against symptom scores, with any pattern noted and challenges scheduled around it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Add a cycle day column to your symptom log"
                - "Record cycle days beside symptom scores for two cycles"
                - "Note any days that are consistently worse"
                - "Move upcoming challenges away from your worst cycle days"
            - name: Flare action plan after personalisation
              description: |-
                ## Purpose
                Even with a settled personal diet, flares happen after illness, travel, stress or a run of stacked meals, and the instinct is to cut everything again. A written plan, what to check first, a short return to simple meals, when to restart foods and when to call someone, stops one bad week turning into months of restriction.

                ## Milestones
                1. Common flare causes listed from your own records.
                2. A short checklist written for the first two days of a flare.
                3. A rule for how long to stay on simpler meals before reintroducing foods.
                4. Contact points written for when a flare needs a doctor or dietitian.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page flare plan with checks, a time-limited simplification rule and contact points, reviewed with your dietitian."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List what came before your last three flares"
                - "Write a checklist for the first two days of a flare"
                - "Agree with your dietitian how long to keep meals simple"
                - "Review the flare plan against the past year's flares @recurring(yearly)"
            - name: Yearly re-challenge of foods that failed
              description: |-
                ## Purpose
                Tolerance changes over time with stress, gut bacteria and life, so a food that caused trouble two years ago may be fine now. Re-challenging the foods on your avoid list once a year, one at a time and in small servings, keeps your diet as wide as it can be rather than frozen at your worst moment.

                ## Milestones
                1. Every food on the avoid list noted with the date it last failed.
                2. One re-challenge run each year for each avoided food.
                3. Results added to the results table with the date.
                4. Foods that pass moved to the limit or eat freely list.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every food on the avoid list has been re-challenged within the last year, with dated results in the table."
                cadence: cyclic
              tasks:
                - "Note the date each food on your avoid list last failed"
                - "Pick a calm month for re-challenging avoided foods @recurring(yearly)"
                - "Update the results table and lists after each re-challenge"
            - name: Personal tested-recipe book for your gut
              description: |-
                ## Purpose
                Over months you build a set of meals you know agree with you, but they end up scattered across apps, screenshots and memory. Gathering them in one recipe book, with serving notes and any FODMAP groups each one contains, gives you an instant answer for low-energy evenings and a resource to share with whoever cooks for you.

                ## Milestones
                1. Twenty tested recipes gathered in one place.
                2. Each recipe noted with servings and the FODMAP groups it contains.
                3. Recipes grouped by meal type and cooking time.
                4. The book shared with the people who cook for you.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single recipe book of at least twenty tested meals, each with serving and FODMAP notes, shared with anyone who cooks for you."
                cadence: rolling
              tasks:
                - "Gather the tested recipes from your apps and screenshots"
                - "Add serving notes and FODMAP groups to each recipe"
                - "Share the recipe book with anyone who cooks for you"
                - "Add one newly tested recipe to the book @recurring(monthly:9)"
            - name: Testing combined groups and larger servings
              description: |-
                ## Purpose
                Single-group challenges say what you tolerate alone, but real meals mix groups and servings get bigger at weekends. Once your individual results are in, testing combinations and larger portions with your dietitian, such as a fructan food and a lactose food together, sharpens the personal plan and often frees up more food than expected.

                ## Milestones
                1. Two or three combination or larger-serving tests agreed with your dietitian.
                2. Each test run on a calm week with scores recorded for three days.
                3. Results added to the results table as a separate section.
                4. The personal eating plan updated with what you learned.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two combination or larger-serving tests completed with your dietitian's agreement and the personal plan updated."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your dietitian which combinations are worth testing"
                - "Schedule each combination test on a calm week"
                - "Record three days of scores for each test"
                - "Update your personal eating plan with the results"
---

# Low-FODMAP & Gut-Friendly Diet

This area is for anyone with bloating, pain or unpredictable bowels who has been pointed towards low-FODMAP eating, written by a friend who knows the diet is a test to run, not a way to live. It starts with the foundations (a medical check, red flags, a baseline diary, a dietitian and a stocked kitchen), moves through the daily and weekly machinery of the elimination and the reintroduction challenges, then the skills of labels, serving sizes and onion-free cooking, the decisions that turn results into a personal diet, the meals out, trips and appointments that need a plan, versions for vegetarians, families, students, shift workers, children, runners and the menstrual cycle, and finally the specialist work of flares, re-challenges and stacked servings.

What repeats is a daily symptom log during elimination, a Sunday meal plan and Saturday scorecard, a midweek fibre and plant count, a monthly trend review and freezer top-up, quarterly dietitian follow-ups and a yearly review and re-challenge of the foods that once failed. The Metrics log, Weekly meal plan, Habit tracker and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
