---
id: food-nutrition.vitamins-supplements-review
name: Vitamins & Supplements Review
description: "A checked inventory of everything you take, the pharmacist questions and blood tests that decide what stays, and the routines, quality checks and yearly reviews that keep every supplement earning its place."
category: personal
version: 1.0.0
tags: [food-nutrition, vitamins-supplements-review, everyone, supplements, vitamins, blood-tests, interactions, evidence]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - reading-queue
    - purchase-decision
  pillars:
    - name: Food & Nutrition
      emoji: "🥗"
      description: "What gets eaten, and how it gets to the table: meal planning, shopping and batch cooking, dietary needs and goals, cooking skill as a lifelong craft, and the food rituals that hold a household together."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Vitamins & Supplements Review
          description: "Deciding which vitamins and supplements are worth taking based on evidence, blood tests and diet, and dropping the rest."
          projects:
            - name: Inventory of every supplement in the house
              description: |-
                ## Purpose
                Most people who take supplements cannot name every product they own, its strength or why they started it, and the cupboard often holds several half-used bottles bought on a single recommendation. A written inventory with the label strength, the date started and who suggested it is the starting point for every later decision about what to keep. It takes an evening and usually turns up at least one duplicate or expired tub.

                ## Milestones
                1. Every vitamin, mineral, herbal product, powder and gummy in the house gathered in one place.
                2. Each product listed with brand, amounts per serving, how often it is taken and the expiry date.
                3. The reason each was started and who recommended it noted beside it.
                4. Expired and unidentifiable products set aside for safe disposal.

                ## Notes
                Include products bought for other household members and anything kept at work, in the car or in a bag. Many pharmacies take back unwanted medicines and supplements for safe disposal.

                Before you start: this plan is general information to help you organise your own health. It is not medical advice and does not replace a doctor, nurse, pharmacist or other qualified professional. Check any change to treatment, medicine or diet with them first, and get urgent care if you feel unwell.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written inventory lists every supplement in the house with strength per serving, frequency, start date and the reason it was started."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect every supplement bottle, tub and sachet onto one table"
                - "Photograph each label so the details are easy to copy later"
                - "List brand, strength per serving, frequency and expiry for each product"
                - "Write beside each one why you started it and who suggested it"
                - "Take expired products to a pharmacy that accepts returns"
            - name: Child-safe storage for iron and vitamins
              description: |-
                ## Purpose
                Iron-containing supplements are among the most dangerous things a young child can swallow by accident, and bright gummy vitamins look and taste like sweets. If children live in or visit the house, moving every supplement into a high, closed and ideally locked place is the first job, before any question about whether the products work.

                ## Milestones
                1. Every product containing iron identified from its label.
                2. All supplements moved to a high closed cupboard or a lockable box.
                3. Gummies and chewables stored with the same care as tablets.
                4. The poisons advice number saved in every adult's phone and written inside the cupboard door.

                ## Notes
                If a child may have swallowed an iron supplement, treat it as an emergency and call your poisons line or emergency number straight away, even if they seem well.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All supplements in the house are stored out of children's reach in a closed or locked place, with the poisons advice number posted inside the door."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check every label for iron and set those products apart"
                - "Move all supplements to a high cupboard or a lockable box"
                - "Save your poisons advice number in each adult's phone"
                - "Ask grandparents and regular visitors to keep their own supplements out of reach"
            - name: One-page medicines and supplements list
              description: |-
                ## Purpose
                Doctors, pharmacists and surgeons all ask what you take, and supplements are the part people forget, even though several affect bleeding, blood test results and how prescribed medicines work. One page listing prescriptions, over-the-counter products and supplements with their strengths, kept on your phone and in your wallet, answers the question accurately every time.

                ## Milestones
                1. A single list covering prescription medicines, over-the-counter products and supplements.
                2. Each entry showing the product, strength, how often it is taken and the start date.
                3. Copies saved on your phone and in a wallet or bag.
                4. The list given to your doctor's practice and your regular pharmacy.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page list of all medicines and supplements exists on your phone and on paper, and your practice and pharmacy hold a copy."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the supplement inventory onto one page beside your prescriptions"
                - "Add over-the-counter painkillers, antacids and remedies you take regularly"
                - "Save the list on your phone and print a wallet copy"
                - "Hand a copy to your practice and your regular pharmacy"
                - "Check the list is still accurate and update its date @recurring(quarterly)"
            - name: Pharmacist interaction check of everything you take
              description: |-
                ## Purpose
                Some common supplements, such as St John's wort, vitamin K, calcium, iron and several herbal extracts, can change how prescribed medicines are absorbed or how strongly they act. A pharmacist can check your whole list against your prescriptions in a short appointment, often at no charge, and tell you what to stop, separate in time or raise with your doctor.

                ## Milestones
                1. Your one-page list and the actual containers taken to a pharmacist for a full check.
                2. Each flagged interaction written down with the advice given.
                3. Timing changes, such as taking a mineral hours apart from a medicine, written into your routine.
                4. Anything needing a prescriber's decision passed to your practice.

                ## Notes
                Never stop a prescribed medicine because of a supplement interaction. Ask the pharmacist or prescriber which of the two should change.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist has reviewed your full medicines and supplements list, and every flagged interaction has a written action beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacy for a medicines review or a quiet appointment slot"
                - "Bring your one-page list and the actual containers to the appointment"
                - "Write down each interaction flagged and the advice given"
                - "Change the timing of any product the pharmacist asked you to separate"
            - name: Three-day food record to find real gaps
              description: |-
                ## Purpose
                Supplements make most sense where the diet genuinely falls short, and many people buy them for gaps they do not have. Writing down everything eaten on two weekdays and one weekend day, then checking it against the main food groups, shows whether you really go without oily fish, dairy or fortified alternatives, leafy greens, pulses or wholegrains.

                ## Milestones
                1. Three days of eating recorded, including drinks and snacks.
                2. Each day checked against the food groups in your national eating guide.
                3. Food groups eaten rarely or never listed.
                4. A short list of the nutrients those missing groups usually supply, ready to discuss with a professional.

                ## Notes
                A nutrition app can estimate totals, but treat its figures as rough. The aim is spotting missing food groups, not chasing exact numbers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A three-day food record is complete and compared with national food groups, with any rarely eaten groups and their key nutrients listed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose two weekdays and one weekend day to record"
                - "Write down everything you eat and drink on those three days"
                - "Compare the record with your national healthy eating guide"
                - "List the food groups you rarely eat and the nutrients they usually provide"
            - name: Asking your doctor which nutrient blood tests make sense
              description: |-
                ## Purpose
                Blood tests can confirm a shortage of vitamin D, vitamin B12, folate or iron stores, but testing everything without a reason produces borderline results that cause worry rather than answers. Bringing your symptoms, diet gaps and supplement list to one appointment lets your doctor decide which tests are worth doing for you, ideally before you start or stop anything so the result means something.

                ## Milestones
                1. Symptoms, diet gaps and current supplements written on one sheet.
                2. Your doctor's view recorded on which tests, if any, are warranted.
                3. Any agreed tests done before starting a new supplement.
                4. Results and the plan they lead to written down.

                ## Notes
                Some supplements, such as biotin, can interfere with certain lab tests. Ask whether to pause anything beforehand. Private test kits sold online often include panels you do not need, so check with your doctor before paying for one.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor has decided which nutrient blood tests are warranted, any agreed tests are done, and the results and plan are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your symptoms, diet gaps and current supplements on one sheet"
                - "Book an appointment to ask which nutrient tests suit your situation"
                - "Ask whether to pause any supplement before the blood is taken"
                - "Record each result with its reference range and the agreed plan"
            - name: Fortified foods tally
              description: |-
                ## Purpose
                Breakfast cereals, plant milks, spreads, yoghurts and some breads are often fortified with vitamin D, B12, iron, calcium or folic acid, and those amounts add to whatever comes from tablets. Totting up the fortified foods you eat in a normal week shows where supplements duplicate food, and where a fortified food could replace a supplement altogether.

                ## Milestones
                1. Every fortified food you eat regularly identified from its label.
                2. The nutrients each one adds per typical portion written down.
                3. Overlaps with your current supplements marked.
                4. One decision made: keep both, drop the supplement or switch to the fortified food.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A list of regularly eaten fortified foods, with the nutrients they add and supplement overlaps marked, has been used to make one keep or drop decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check cereal, plant milk, spread and bread labels for added vitamins"
                - "Write the nutrients each fortified food adds in your usual portion"
                - "Mark any nutrient you also take as a supplement"
                - "Decide whether the fortified food or the supplement should go"
            - name: Annual supplement spend calculation
              description: |-
                ## Purpose
                Small monthly purchases add up, and a household with several adults on several products can spend more on supplements than on fresh fruit. Working out the true yearly cost, product by product, puts a price beside each keep or stop decision and often makes the weaker products easy to drop.

                ## Milestones
                1. Receipts, order history and subscriptions gathered for the last twelve months.
                2. The yearly cost worked out for each product.
                3. The household's total yearly supplement spend written down.
                4. The three most expensive products flagged for an evidence check.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The household's yearly supplement spend is calculated product by product, with the three most expensive items flagged for review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your email and online orders for supplement purchases this year"
                - "Work out the yearly cost of each product you buy"
                - "Write the household total at the top of the inventory"
                - "Flag the three most expensive products for an evidence check"
            - name: Keep, question or stop sort of current supplements
              description: |-
                ## Purpose
                Once you know what you take, why and what it costs, each product can go into one of three piles: keep, where there is a clear reason such as a confirmed deficiency or clinician advice; question, where the reason is vague; and stop, where it no longer applies. Doing the sort deliberately, rather than letting bottles run out, clears the cupboard of things taken out of habit.

                ## Milestones
                1. Every product on the inventory placed in keep, question or stop.
                2. A one-line reason written for each product kept.
                3. Questions for your doctor or pharmacist listed for everything in the question pile.
                4. Products in the stop pile removed from your routine and your list.

                ## Notes
                Anything prescribed or recommended by a clinician for a diagnosed condition goes in question, not stop, until you have spoken to them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every supplement on your inventory has a recorded keep, question or stop decision with a one-line reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Sort every product on the inventory into keep, question or stop"
                - "Write a one-line reason beside each product you keep"
                - "List the questions for anything in the question pile"
                - "Remove stopped products from your one-page medicines list"
            - name: Personal rules before adding any new supplement
              description: |-
                ## Purpose
                New supplements usually arrive through an advert, a friend's recommendation or a worried moment in a shop, and once started they are rarely reviewed. A short written filter applied before every purchase keeps the cupboard from refilling: a clear reason, a look at the evidence, a test where one exists, an interaction check and a date to decide whether it worked.

                ## Milestones
                1. Five or six rules written on one page.
                2. The rules saved on your phone and inside the supplement cupboard.
                3. The next supplement you consider run through every rule before buying.
                4. Any product that fails a rule left on the shelf.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written set of rules for adding supplements exists, and the next product considered was checked against every rule before purchase."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write the questions you will ask before buying any new supplement"
                - "Add a rule that every new product gets a review date"
                - "Save the rules on your phone and tape a copy inside the cupboard"
                - "Run the next supplement you are tempted by through the rules"
            - name: Daily supplement routine attached to a meal
              description: |-
                ## Purpose
                Supplements that are genuinely needed only help if they are taken consistently, and several are absorbed better with food. Pinning the routine to one meal you never skip, with the products kept near where you eat it, turns a scattered habit into one that is rarely missed.

                ## Milestones
                1. The meal your routine attaches to chosen, respecting any timing advice from the pharmacist.
                2. Kept supplements stored in one spot near that meal and out of children's reach.
                3. Each day ticked off for a month.
                4. Fewer than three missed days in a month.

                ## Notes
                Start from the **Habit tracker** template. If anything must be taken apart from a medicine or another mineral, write that rule on the tracker so it is not lost.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily supplement intake is ticked off on a tracker with no more than two missed days."
                cadence: rolling
              tasks:
                - "Choose the meal you will take your supplements with"
                - "Set up a habit tracker listing only the products you kept"
                - "Take your kept supplements with the chosen meal and tick them off @recurring(daily)"
            - name: Weekly pill organiser refill
              description: |-
                ## Purpose
                Once more than two or three products are involved, a seven-day organiser makes it obvious whether today's tablets have been taken and shows when stock is running low. Refilling it at the same time each week takes five minutes and catches running out before it happens.

                ## Milestones
                1. A seven-day organiser with enough compartments in use.
                2. A fixed weekly refill time chosen.
                3. Products that must stay in original packaging, such as moisture-sensitive capsules, kept out of it.
                4. Eight weeks of refills done without a missed week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The pill organiser has been refilled on the same weekday for eight consecutive weeks."
                cadence: rolling
              tasks:
                - "Buy a seven-day organiser with morning and evening rows if you need both"
                - "Check which products should stay in their original packaging"
                - "Refill the organiser and note anything running low @recurring(weekly:sun)"
            - name: Monthly stock, expiry and storage check
              description: |-
                ## Purpose
                Vitamins lose strength past their date, fish oils turn rancid in a warm kitchen and some probiotics die off when stored wrongly. A ten-minute monthly check of dates, smell and storage, and of what needs reordering, keeps what you take worth taking and avoids panic buying at full price.

                ## Milestones
                1. Storage instructions for each product read and followed, including any that need the fridge.
                2. Expiry dates noted on the inventory.
                3. A reorder point set for each kept product.
                4. Six monthly checks completed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly checks recorded, with no expired product in use and no kept product run out."
                cadence: rolling
              tasks:
                - "Move supplements away from the kettle, oven and steamy bathroom"
                - "Note on its label any product that needs fridge storage"
                - "Check expiry dates, smell fish oils and reorder low stock @recurring(monthly:12)"
            - name: Nutrient blood results log
              description: |-
                ## Purpose
                Vitamin D, B12, ferritin and folate results arrive months or years apart, often from different clinics, and are hard to compare when you need them. A single log with each result, its unit and reference range, and what you were taking at the time shows the trend and makes the next conversation with your doctor much shorter.

                ## Milestones
                1. A log with columns for date, test, result, unit, reference range and supplements taken at the time.
                2. Past results copied in from your patient portal or letters.
                3. Each new result added within a week of receiving it.
                4. The log shown to your doctor at your next review.

                ## Notes
                Start from the **Metrics log** template. Units differ between countries and labs, so always copy the unit with the number.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A results log holds every past nutrient blood test with units and reference ranges, and has been shown to your doctor."
                cadence: rolling
              tasks:
                - "Create a results log from the metrics log template"
                - "Copy past nutrient test results from your patient portal or letters"
                - "Note what supplements you were taking at each test date"
                - "Check the patient portal for new results and add them to the log @recurring(quarterly)"
            - name: Trial log for any new supplement
              description: |-
                ## Purpose
                Starting a product and waiting to feel different is how most supplements end up taken for years without anyone knowing if they help. Logging each new product with the reason, the one thing you expect to change, how you will measure it and a review date turns every addition into a small, honest test.

                ## Milestones
                1. A trial log with columns for product, reason, expected change, measure, start date and review date.
                2. Every new product entered before the first day of taking it.
                3. A review held on each review date, with keep or stop recorded.
                4. Any side effect noted with the date it began.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every supplement started in the last six months has a trial log entry with a review date and a recorded keep or stop decision."
                cadence: rolling
              tasks:
                - "Set up a trial log with a column for the change you expect"
                - "Enter any product you started in the last three months"
                - "Review open trials that have passed their review date @recurring(monthly:5)"
                - "Write down any new symptom and the date it began"
            - name: Seasonal vitamin D review
              description: |-
                ## Purpose
                Far from the equator, skin makes little vitamin D from late autumn to early spring, and people with darker skin, those who cover their skin and those who rarely go outdoors are affected most. Many health services publish seasonal advice on this, so an autumn check of that advice and a spring decision on whether to carry on replace a year-round guess.

                ## Milestones
                1. Your health service's current vitamin D advice for your situation read and saved.
                2. Whether the advice applies to you all year or only in winter confirmed with your pharmacist or doctor.
                3. Any vitamin D blood result taken into account.
                4. An autumn check and a spring decision recorded for the year.

                ## Notes
                Vitamin D is stored in the body, so more is not better. Stay within the amount your health service or clinician advises.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Your health service's vitamin D advice has been checked against your situation, with an autumn check and a spring decision recorded for the year."
                cadence: cyclic
              tasks:
                - "Look up your health service's current vitamin D advice"
                - "Ask your pharmacist whether the advice applies to you all year"
                - "Check the vitamin D advice still fits you as autumn begins @recurring(yearly)"
                - "Decide in spring whether to carry on through the summer"
            - name: Subscriptions and auto-ship control
              description: |-
                ## Purpose
                Subscribe-and-save deals are designed to keep bottles arriving long after the reason for taking them has gone, and they often renew at a higher price after the first order. Listing every subscription with its renewal date and real unit price, and checking it each quarter, keeps only the products you have decided to keep on order.

                ## Milestones
                1. Every supplement subscription and auto-ship order listed with its frequency and price.
                2. Each subscription matched to a keep decision, and the rest cancelled.
                3. Delivery frequency matched to how fast you actually use each product.
                4. A quarterly check in the calendar.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every active supplement subscription matches a kept product and has been checked against usage and price within the last quarter."
                cadence: rolling
              tasks:
                - "Search your email for supplement subscription and auto-ship confirmations"
                - "Cancel any subscription for a product you decided to stop"
                - "Check subscription prices, delivery gaps and stock levels @recurring(quarterly)"
            - name: Annual supplement review before your health check
              description: |-
                ## Purpose
                Needs change with age, diet, new medicines and new test results, so a list that was right last year may not be right now. Running through every kept product once a year, two weeks before a routine health check or medicines review, means questions and any blood tests can be raised at an appointment you already have.

                ## Milestones
                1. Each kept product rechecked against its original reason and any new results.
                2. Changes in diet, medicines or health since last year noted.
                3. Questions written for the health check or medicines review.
                4. The inventory and one-page list updated with the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly review of every kept supplement is completed before a routine health appointment two years running, with outcomes recorded."
                cadence: cyclic
              tasks:
                - "Recheck every kept product against its reason and latest results @recurring(yearly)"
                - "Note any change in diet, medicines or health since last year"
                - "Write three supplement questions to bring to the health check"
                - "Update the inventory and one-page list after the appointment"
            - name: Recall and safety alert watch
              description: |-
                ## Purpose
                Every year supplements are recalled for contamination, undeclared medicines and wrong strengths, and regulators publish warnings about products sold online, especially those for weight loss, sleep and muscle building. A monthly glance at your regulator's alerts against the brands you use means a problem batch is caught before the bottle is finished.

                ## Milestones
                1. Your food or medicines regulator's recall page found and bookmarked.
                2. Email alerts switched on where the regulator offers them.
                3. Brands and batch numbers of kept products recorded on the inventory.
                4. Any recalled product returned and replaced.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Recall alerts are set up with your regulator, and your brands have been checked against them monthly for six months."
                cadence: rolling
              tasks:
                - "Bookmark your regulator's food supplement recalls and warnings page"
                - "Sign up for recall email alerts if your regulator offers them"
                - "Check recent recalls and warnings against the brands you use @recurring(monthly:26)"
            - name: Reading a supplement facts label
              description: |-
                ## Purpose
                Labels show amounts per serving, which may be two or three capsules, and give a percentage of a reference intake that differs between countries. Learning to read the serving size, the nutrient form, the units and whether anything sits in an undisclosed proprietary blend lets you compare two products in a minute and spot when a cheap one is simply a weaker one.

                ## Milestones
                1. Serving size, nutrient form and percentage of reference intake understood.
                2. The difference between micrograms, milligrams and international units noted.
                3. Proprietary blends with undisclosed amounts recognised as a warning sign.
                4. Five products from your cupboard read and compared.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five supplement labels have been read and compared on serving size, nutrient form and amount per serving, with findings written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pick five products from your cupboard to practise on"
                - "Find the serving size and amount per serving on each label"
                - "Look up what micrograms, milligrams and international units mean"
                - "Note any proprietary blend that hides individual amounts"
            - name: Judging the evidence behind a supplement claim
              description: |-
                ## Purpose
                A single small study, an animal trial or a testimonial can be dressed up as proof, while large reviews pooling many trials often find little effect. Knowing where to find independent summaries, such as government health fact sheets and systematic reviews, and how to read their conclusions, lets you check almost any claim in twenty minutes.

                ## Milestones
                1. Two or three independent sources of supplement evidence bookmarked.
                2. The difference between a systematic review, a single trial and a lab study understood.
                3. Three supplements you take checked against an independent summary.
                4. A one-line verdict written for each.

                ## Notes
                Start from the **Reading queue** template to collect fact sheets and review summaries as you find them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three supplements you take have been checked against independent evidence summaries, each with a written one-line verdict."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Bookmark a government health fact sheet site and a source of systematic reviews"
                - "Read a short explainer on how a systematic review differs from a single study"
                - "Check three supplements you take against an independent summary"
                - "Read one independent evidence summary from your queue @recurring(monthly:18)"
            - name: Food sources of the nutrients people supplement most
              description: |-
                ## Purpose
                Vitamin D, B12, iron, calcium, iodine, folate, magnesium and omega-3 fats are the nutrients most often bought as tablets, and most of them also come from ordinary foods. Knowing two or three good food sources for each lets you judge whether a gap is real and often fix it at the shop rather than the pharmacy.

                ## Milestones
                1. A one-page table of the eight nutrients with two or three food sources each.
                2. Sources that suit your diet, including any restrictions, marked.
                3. Nutrients with few food sources in your diet highlighted for discussion.
                4. One food-first change made, such as adding oily fish or a fortified product.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table of commonly supplemented nutrients and their food sources exists, and one food-first change has been made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the nutrients you currently take as supplements"
                - "Find two or three food sources for each on a health service website"
                - "Mark which sources fit your diet and budget"
                - "Make one food-first change for a nutrient you supplement"
            - name: Upper limits and why more is not better
              description: |-
                ## Purpose
                Vitamins A, D, E and K are stored in the body, and minerals such as iron, zinc and selenium can cause harm at high intakes, yet high-strength products are sold as the premium choice. Learning that official safe upper levels exist, finding where they are published for your country and checking your combined intake against them is the main safety skill in this area.

                ## Milestones
                1. The idea of a tolerable upper intake level understood.
                2. The upper levels published for your country or region found and saved.
                3. Your combined intake from all products compared with those levels.
                4. Anything above an upper level raised with a pharmacist or doctor.

                ## Notes
                Upper levels are set for healthy adults. A clinician may prescribe more for a diagnosed deficiency, under supervision, and that is a different situation.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your combined intake of each nutrient from all products has been checked against published upper levels, with any excess discussed with a professional."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the published upper intake levels for vitamins and minerals where you live"
                - "Add up each nutrient across all the products you take"
                - "Compare each total with its upper level"
                - "Ask a pharmacist about anything that comes out above it"
            - name: Spotting supplement marketing red flags
              description: |-
                ## Purpose
                Supplement marketing leans on words like detox, boost, clinically proven and doctor formulated, many of which have no fixed meaning. Learning the common tricks, from tiny unnamed studies to countdown timers and paid endorsements, makes adverts and influencer posts far easier to ignore.

                ## Milestones
                1. A list of ten red-flag claims and sales tactics written.
                2. The health claims your regulator allows on supplements looked up.
                3. Five adverts or posts you have seen checked against the list.
                4. One product you were considering dropped or confirmed on the evidence.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of red-flag claims has been used to assess five supplement adverts or posts, with a verdict noted for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of claims and tactics that should make you suspicious"
                - "Look up which health claims your regulator permits on supplements"
                - "Check five adverts or social posts against your list"
                - "Unfollow accounts that sell supplements through health scares"
            - name: Quality marks and third-party testing
              description: |-
                ## Purpose
                In many countries supplements are regulated more like food than medicine, so nobody checks each batch before sale, and independent tests regularly find products with less, more or different ingredients than the label claims. Learning which certification schemes operate where you live, and what each actually tests, lets you buy from brands that have been checked.

                ## Milestones
                1. How supplements are regulated in your country summarised in a paragraph.
                2. The independent testing and certification schemes available locally listed.
                3. What each scheme checks, such as content, contaminants or banned substances, noted.
                4. The products you keep checked for a recognised mark.

                ## Notes
                Examples include USP Verified and NSF certification in the United States and Informed Sport internationally. Check which schemes apply where you live.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note explains how supplements are regulated where you live and which certification schemes exist, and your kept products have been checked for a mark."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your regulator's page on how food supplements are controlled"
                - "List the independent testing schemes that operate in your country"
                - "Note what each scheme actually tests for"
                - "Check each kept product's label or website for a recognised mark"
            - name: Timing, food and absorption basics
              description: |-
                ## Purpose
                Some nutrients are absorbed better with a meal containing fat, some compete with each other, and tea, coffee or calcium can reduce how much iron is taken up. A short session with reputable sources and your pharmacist, covering only the products you actually keep, gives you a simple timing plan instead of a pile of internet rules.

                ## Milestones
                1. The absorption advice for each kept product found from a reputable source.
                2. Any pairs that compete, such as iron and calcium, identified.
                3. A one-line timing plan written for the day.
                4. The plan checked with your pharmacist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A daily timing plan for your kept supplements has been written and checked with a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the absorption advice for each product you kept"
                - "Note any pairs of products that should be taken apart"
                - "Write a one-line timing plan for the day"
                - "Ask your pharmacist to check the timing plan"
            - name: Reading your own nutrient test results
              description: |-
                ## Purpose
                A result marked normal can sit at the edge of the range, and labs use different units and ranges, so the same level can look different on two reports. Learning what the reference range means, which units your lab uses and what to ask about a borderline result makes the conversation with your doctor shorter and clearer, without diagnosing yourself.

                ## Milestones
                1. Reference ranges and units for your past tests understood.
                2. How your lab describes a deficiency, an insufficiency and a normal result noted.
                3. Questions written about any borderline result.
                4. The questions answered by your doctor and the answers recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your past nutrient results are annotated with units and ranges, and your questions about any borderline result have been answered by your doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the reference range and unit printed beside each past result"
                - "Read your lab's or health service's explanation of each test"
                - "Write questions about any result near the edge of its range"
                - "Ask your doctor the questions and note the answers"
            - name: Multivitamin keep or drop decision
              description: |-
                ## Purpose
                Large trials in well-nourished adults have mostly found little benefit from a daily multivitamin, though there are groups for whom one may make sense, such as people eating very restricted diets. Deciding deliberately, with your food record, any test results and a professional's view, settles a question many people leave open for decades.

                ## Milestones
                1. The reasons you started the multivitamin written down.
                2. Your food record and any test results set beside it.
                3. A doctor's, pharmacist's or dietitian's view recorded.
                4. A keep or drop decision made and dated.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A dated keep or drop decision on the multivitamin is recorded with the evidence and professional view it was based on."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you started taking a multivitamin"
                - "Read an independent summary of the evidence on multivitamins"
                - "Ask your pharmacist or doctor whether one suits your situation"
                - "Record the keep or drop decision with the date"
            - name: Choosing a tested brand at a fair price per dose
              description: |-
                ## Purpose
                For each supplement you have decided to keep, the brand matters more than the advert: independent testing, the right nutrient form and a fair price per daily dose. Own-brand products from supermarkets and pharmacies often match famous names at a fraction of the price, so comparing two or three options once makes every future reorder automatic.

                ## Milestones
                1. Two or three brands, including an own-brand option, shortlisted for each kept product.
                2. Each compared on certification, nutrient form, amount per serving and price per daily dose.
                3. One brand chosen per product and recorded on the inventory.
                4. Reorders switched to the chosen brand.

                ## Notes
                Start from the **Purchase decision** template. If your doctor specified a particular form, keep to it even when a cheaper product uses another.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each kept supplement has a chosen brand, recorded with its certification and price per daily dose."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist three brands, including an own-brand, for each kept product"
                - "Compare certification, nutrient form and price per daily dose"
                - "Record the chosen brand on the inventory"
                - "Switch your next reorder to the chosen brand"
            - name: Removing doubled-up nutrients across products
              description: |-
                ## Purpose
                A multivitamin, a separate vitamin D, a hair and nails formula and a fortified cereal can all contain the same nutrients, and the totals creep up without anyone noticing. Consolidating so each nutrient comes from one deliberate source simplifies the routine, cuts the cost and keeps intake well clear of upper limits.

                ## Milestones
                1. A grid of nutrients against products showing every overlap.
                2. One deliberate source chosen for each nutrient you need.
                3. Overlapping products dropped from the routine.
                4. The routine reduced to the fewest products that cover your agreed needs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each supplemented nutrient comes from one deliberate source, with overlapping products dropped and the inventory updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draw a grid with nutrients down the side and products across the top"
                - "Circle every nutrient that appears in more than one product"
                - "Choose one source for each nutrient you need"
                - "Drop the overlapping products and update the inventory"
            - name: Fish oil capsules or oily fish decision
              description: |-
                ## Purpose
                Omega-3 capsules are among the best-selling supplements, while most health services recommend eating oily fish instead, and trial results for capsules in healthy people are mixed. Weighing what the household eats now, the cost, any medicine considerations and algae-based options for people who do not eat fish gives a clear answer.

                ## Milestones
                1. How often the household eats oily fish now recorded.
                2. Independent evidence summaries on omega-3 capsules read.
                3. Any medicine considerations, such as blood thinners, checked with a pharmacist.
                4. A decision made: more oily fish, a capsule, an algae product or none.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded omega-3 decision for the household, based on current fish intake, independent evidence and a pharmacist check of medicines."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the portions of oily fish you ate in the last two weeks"
                - "Read an independent summary of the evidence on omega-3 capsules"
                - "Ask a pharmacist whether omega-3 interacts with anything you take"
                - "Decide between more oily fish, a capsule, algae oil or nothing"
            - name: Probiotic trial with one clear question
              description: |-
                ## Purpose
                Probiotic effects depend on the specific strain and the condition, so a general gut health product bought on hope rarely gives a clear answer. If you want to try one, picking a product whose named strain has been studied for your particular issue, and running a time-limited trial with a symptom score, tells you whether it is worth the monthly cost.

                ## Milestones
                1. The specific issue you hope to help written down and discussed with a clinician.
                2. A product chosen whose named strain has been studied for that issue.
                3. A baseline symptom score recorded for a week before starting.
                4. The trial run for the agreed length and a keep or stop decision recorded.

                ## Notes
                New, persistent or worsening gut symptoms need a doctor's assessment before any self-treatment.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A time-limited probiotic trial is complete with baseline and end symptom scores and a recorded keep or stop decision."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write down the one symptom you hope a probiotic might help"
                - "Ask your doctor or pharmacist whether a probiotic suits that symptom"
                - "Score the symptom daily for a week before starting"
                - "Compare the end-of-trial scores with your baseline and decide"
            - name: Herbal and botanical products safety review
              description: |-
                ## Purpose
                Herbal products such as St John's wort, ginkgo, turmeric extract, ashwagandha and green tea extract can interact with medicines or occasionally affect the liver, and the word natural on a label says nothing about safety. Reviewing every herbal product in the house against reputable safety information, and with a pharmacist, catches the risky ones.

                ## Milestones
                1. Every herbal or botanical product in the house listed with its main ingredient.
                2. Safety and interaction information for each read from a reputable source.
                3. A pharmacist's view on each recorded.
                4. Any product flagged as unsuitable stopped.

                ## Notes
                Where your country runs a registration scheme for traditional herbal products, the mark signals manufacturing standards, not proof that the product works.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every herbal product in the house has been checked against reputable safety information and with a pharmacist, and flagged products stopped."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every herbal and botanical product with its main ingredient"
                - "Look up each one in a reputable herbal safety resource"
                - "Ask your pharmacist about any flagged interaction"
                - "Stop the products the pharmacist advises against"
            - name: Planned stop of a low-value supplement
              description: |-
                ## Purpose
                People keep taking supplements partly from a fear that stopping will make them feel worse. Stopping one questionable product on a set date, noting how you feel for a month and retesting only if your doctor suggests it usually shows that nothing changes, and gives you the confidence to apply the same rules elsewhere.

                ## Milestones
                1. One product from the question or stop pile chosen, after checking it was not prescribed.
                2. A stop date set and a short note made on how you feel beforehand.
                3. A weekly note kept for four weeks after stopping.
                4. A final decision recorded: stay stopped, or restart with a stated reason.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One low-value supplement has been stopped, with four weekly notes and a final decision recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Choose one product from the question or stop pile"
                - "Confirm with your pharmacist that stopping it needs no special care"
                - "Write a short note on how you feel the week before stopping"
                - "Note any change once a week for four weeks after stopping"
            - name: Verdict on trend products like collagen and greens powders
              description: |-
                ## Purpose
                Collagen drinks, greens powders, mushroom blends and adaptogen gummies are heavily promoted online, often at several times the cost of a basic vitamin. Checking each one you own or are tempted by against independent evidence and its price per serving gives a clear verdict instead of a lingering maybe.

                ## Milestones
                1. Trend products owned or under consideration listed with their price per serving.
                2. Each checked against an independent evidence summary.
                3. Sugar content and serving accuracy of any gummies noted.
                4. A buy, keep or skip verdict recorded for each.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each trend product owned or considered has a recorded verdict based on independent evidence and price per serving."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the trend products you own or have been tempted by"
                - "Work out the price per serving of each"
                - "Ask the agent to summarise independent evidence for each product, with sources"
                - "Record a buy, keep or skip verdict for each"
            - name: Preparing for an appointment about tiredness
              description: |-
                ## Purpose
                Tiredness is one of the commonest reasons people start buying iron, B12 or vitamin D, and one of the commonest reasons to see a doctor, because the causes range from sleep to thyroid problems to anaemia. Going in with a symptom record, your supplement list and a request to discuss nutrient tests, rather than self-treating first, makes it more likely the real cause is found.

                ## Milestones
                1. Two weeks of notes on energy, sleep and any other symptoms kept.
                2. Your supplement list and any recent changes to it brought along.
                3. The tests your doctor orders, and why, recorded.
                4. A follow-up booked for the results.

                ## Notes
                Starting iron or B12 before tests can mask a deficiency and the reason for it. Ask first.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A doctor's appointment about tiredness has been attended with two weeks of symptom notes and your supplement list, and the agreed tests and follow-up are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Keep a two-week note of energy, sleep and other symptoms"
                - "Book an appointment and say it is about ongoing tiredness"
                - "Bring your one-page supplement and medicines list"
                - "Write down the tests ordered and the follow-up date"
            - name: Telling the surgical team about supplements before an operation
              description: |-
                ## Purpose
                Fish oil, vitamin E, ginkgo, garlic and several other supplements can affect bleeding or interact with anaesthetic drugs, and surgical teams often ask people to pause some of them in the weeks before. Raising your full list at the pre-operative assessment, and following their instructions on what to pause and when to restart, removes an avoidable risk.

                ## Milestones
                1. Your full supplement list given to the pre-operative assessment team.
                2. Their instructions on what to pause, and from when, written down.
                3. Pause dates in the calendar.
                4. Restart dates confirmed with the team before discharge.

                ## Notes
                Only the surgical or anaesthetic team can tell you what to pause and when. Do not guess from lists online.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The surgical team has your full supplement list, and their pause and restart instructions are written down and followed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Add every supplement to the list you take to pre-operative assessment"
                - "Ask which products to pause and how many days before surgery"
                - "Put the pause and restart dates in your calendar"
                - "Confirm at discharge when each product can restart"
            - name: Packing supplements for long trips and border rules
              description: |-
                ## Purpose
                Some countries restrict supplements that are sold freely at home, such as melatonin or certain herbal and sports products, and loose unlabelled tablets cause delays at customs. Checking the rules for your destination, keeping products in original labelled packaging and carrying only what the trip needs prevents confiscation and awkward questions.

                ## Milestones
                1. Import rules for supplements checked for each destination.
                2. Restricted products left at home or cleared in advance.
                3. Products packed in original labelled containers with a copy of your list.
                4. Enough for the trip plus a few spare days packed in hand luggage.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Supplement import rules for the destination have been checked, and the packed products are in original packaging with a copy of your list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up supplement import rules on your destination's customs website"
                - "Leave behind any product restricted at your destination"
                - "Pack products in original labelled containers in hand luggage"
                - "Carry a printed copy of your one-page medicines and supplements list"
            - name: Follow-up test after a prescribed supplement course
              description: |-
                ## Purpose
                When a doctor prescribes or recommends a course of iron, vitamin D or B12 for a confirmed deficiency, a repeat test is usually planned to check it worked and decide what happens next. Booking that test at the right time, and knowing the plan whether levels have recovered or not, stops a short course quietly becoming an indefinite one.

                ## Milestones
                1. The course length and retest timing written down at the start.
                2. The retest booked before the course ends.
                3. The new result compared with the first one in your results log.
                4. The next step agreed: stop, maintain or investigate further.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A repeat test after a prescribed supplement course has been done on time, and the agreed next step is written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down the course length and when the retest is due"
                - "Book the repeat blood test before the course ends"
                - "Add the new result to your results log beside the first"
                - "Ask your doctor whether to stop, continue or investigate further"
            - name: Supplement check when starting a new prescription
              description: |-
                ## Purpose
                New prescriptions are when interactions surface: thyroid tablets with calcium or iron, some antibiotics with minerals, blood thinners with several herbal products. Telling the prescriber and pharmacist about every supplement when a medicine starts, and asking about timing, takes two minutes and avoids a medicine that quietly does not work.

                ## Milestones
                1. Your supplement list shown to the prescriber or pharmacist when the new medicine starts.
                2. Any interaction or spacing advice written down.
                3. Your daily routine adjusted to fit.
                4. The one-page list updated with the new medicine.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pharmacist has checked your supplements against the new prescription, and any timing advice is built into your routine."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Show your supplement list when collecting the new prescription"
                - "Ask whether any supplement should be spaced apart from the new medicine"
                - "Adjust your daily routine to fit the advice"
                - "Add the new medicine to your one-page list"
            - name: Vegan and vegetarian supplement check
              description: |-
                ## Purpose
                Vitamin B12 is not reliably available from unfortified plant foods, and iodine, vitamin D, omega-3 fats and sometimes iron and calcium need attention on a vegan diet. Checking which of these your diet covers through fortified foods, and which need a supplement, gives a short list based on your actual eating rather than a vegan multivitamin bought on trust.

                ## Milestones
                1. Every B12 source in your diet, fortified or supplemented, confirmed as reliable.
                2. Iodine, vitamin D, omega-3 and calcium sources reviewed against your food record.
                3. A short supplement list checked by a dietitian or doctor.
                4. A B12 blood test discussed if you have gone years without a reliable source.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written supplement list for a vegan or vegetarian diet covers B12 and the other at-risk nutrients, with each source confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check every B12 source in your diet and supplements"
                - "Review iodine, vitamin D, omega-3 and calcium against your food record"
                - "Ask a dietitian or doctor to check your short list"
                - "Confirm your B12 source is still part of your routine @recurring(yearly)"
            - name: Supplement review for later life
              description: |-
                ## Purpose
                After about 65, appetite, time outdoors and the absorption of B12 can all fall, while the number of prescribed medicines often rises, so supplements become both more useful and more likely to interact. A review with a pharmacist covering bone health, vitamin D, B12 and the total number of tablets each day keeps what helps and cuts the pill burden.

                ## Milestones
                1. All medicines and supplements listed in one place.
                2. Vitamin D, B12 and bone health questions raised with a doctor or pharmacist.
                3. Products that add tablets without a clear benefit identified.
                4. A simplified daily routine agreed and written on one card.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist or doctor has reviewed supplements alongside medicines for an older adult, and a simplified routine is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the total number of tablets and capsules taken each day"
                - "Ask about vitamin D, B12 and bone health at a medicines review"
                - "Mark supplements that add tablets without a clear reason"
                - "Write the simplified daily routine on one card"
            - name: Vitamins for children, checked against official advice
              description: |-
                ## Purpose
                Health services in some countries recommend vitamin drops for babies and young children, while most school-age children eating a varied diet need nothing extra, yet children's gummies are marketed to every family. Checking official advice for your child's age and diet, and asking your health visitor, doctor or pharmacist, gives a clear answer and avoids sweets that double as vitamins.

                ## Milestones
                1. Your health service's vitamin advice for your child's age found.
                2. Your child's diet and any restrictions taken into account.
                3. A professional's view recorded for anything beyond the standard advice.
                4. Any children's product stored as safely as adult supplements.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each child's vitamin plan matches official advice for their age, is recorded, and any products are stored out of reach."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's vitamin advice for your child's age"
                - "Ask your health visitor, doctor or pharmacist about anything beyond it"
                - "Record the plan for each child on the inventory"
                - "Recheck each child's plan against official advice @recurring(yearly)"
            - name: Managing supplements for someone you care for
              description: |-
                ## Purpose
                Older parents and people with long-term conditions often build up supplements from adverts, friends and old advice alongside a growing list of prescriptions they may struggle to manage. Taking on a tidy, checked list and a weekly organiser for them, with their consent and their pharmacist's help, cuts the risk of interactions and double dosing.

                ## Milestones
                1. Their agreement to help, and how involved they want you to be, confirmed.
                2. All their supplements and medicines listed and checked by their pharmacist.
                3. Products they no longer need stopped with their agreement.
                4. A weekly organiser routine set up and kept.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "The person you care for has a pharmacist-checked medicines and supplements list and a weekly organiser refilled every week."
                cadence: rolling
              tasks:
                - "Ask the person how much help with supplements they want"
                - "List their supplements and medicines from every cupboard and bag"
                - "Book a pharmacist review of their full list together"
                - "Refill their weekly organiser and look for missed days @recurring(weekly:sat)"
            - name: Iron testing for heavy periods
              description: |-
                ## Purpose
                Heavy periods are a common cause of low iron stores and tiredness, but iron taken without a test can upset the stomach, hide the underlying cause and occasionally cause harm in people who absorb too much. Recording your cycle, asking for a blood count and iron stores test, and discussing the bleeding itself with a doctor deals with both the iron and the reason it is being lost.

                ## Milestones
                1. Three cycles of bleeding heaviness and duration recorded.
                2. A doctor asked about heavy periods and an iron test.
                3. Results and any treatment offered written down.
                4. A retest date agreed if iron is prescribed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Heavy periods have been discussed with a doctor using three cycles of records, iron levels tested, and any treatment and retest date recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Start recording how heavy and how long each period is"
                - "Book an appointment about heavy periods and ask for an iron test"
                - "Write down the results and any treatment offered"
                - "Put the agreed retest date in your calendar"
            - name: Supplements in drug-tested sport
              description: |-
                ## Purpose
                Anti-doping rules hold athletes responsible for anything found in their body, and contaminated supplements are a recurring cause of positive tests. Anyone competing under drug testing, at any level, needs every product checked against a batch-testing scheme and recorded with its batch number, or left out of the routine.

                ## Milestones
                1. Whether your sport and level involve drug testing confirmed.
                2. Every sports supplement checked against a batch-testing scheme.
                3. Batch numbers and certificates saved for each tub.
                4. Untested products dropped from your routine.

                ## Notes
                Your national anti-doping agency publishes supplement guidance and usually a medicine checking service. Use it before every new product.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every supplement used by a drug-tested athlete is batch-tested, with batch numbers and certificates saved."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check with your sport's governing body whether you can be tested"
                - "Look up each sports supplement on a batch-testing scheme's website"
                - "Save the batch number and certificate for every tub"
                - "Drop any product that has no batch testing"
            - name: Lifelong supplements after weight-loss surgery
              description: |-
                ## Purpose
                After gastric bypass and some other weight-loss operations the body absorbs vitamins and minerals poorly for life, and specialist teams prescribe a specific supplement plan with regular blood tests. Missed tablets and skipped monitoring are a common cause of deficiencies years later, so a written plan, a reliable routine and booked blood tests protect the result of the surgery.

                ## Milestones
                1. The specialist team's supplement plan written down exactly.
                2. A daily routine built around it, with any spacing rules.
                3. Monitoring blood tests booked at the intervals the team set.
                4. Results reviewed with the team or your doctor and kept in your results log.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The prescribed post-surgery supplement plan is followed daily and the monitoring blood tests set by the team are up to date."
                cadence: cyclic
              tasks:
                - "Copy the team's supplement plan from your discharge letters"
                - "Set reminders that respect any spacing between products"
                - "Book the monitoring blood tests the team asked for @recurring(yearly)"
                - "Ask your doctor to take over monitoring if the team discharges you"
            - name: Personal evidence file for each kept supplement
              description: |-
                ## Purpose
                For anyone keeping several supplements long term, a one-page file per product makes each decision easy to revisit: the reason, the best independent evidence, relevant test results, the brand and its certification, and the date of the last review. When a doctor, a partner or a new advert questions it, the answer is already written.

                ## Milestones
                1. A one-page file for each kept product.
                2. Each file citing at least one independent evidence summary.
                3. Relevant test results and the brand's certification attached.
                4. Each file reviewed and redated once a year.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every kept supplement has a one-page evidence file with a cited source, relevant results and a review date within the last year."
                cadence: rolling
              tasks:
                - "Create a one-page file for your most expensive kept supplement"
                - "Ask the agent to draft the remaining files from your inventory and notes, then check every source"
                - "Attach relevant blood results and the brand's certification"
                - "Review each file and update its date @recurring(yearly)"
            - name: Single-person trial with a washout period
              description: |-
                ## Purpose
                For a supplement whose benefit is a subjective symptom such as sleep, joint aches or gut comfort, a planned self-trial with on, off and on-again periods and a daily score gives far better evidence than a general impression. Fixing the periods, the measure and the decision rule in advance, and sharing the plan with your clinician, makes the result worth acting on.

                ## Milestones
                1. One supplement and one symptom chosen, with your clinician aware of the plan.
                2. A daily score and the length of each on and off period fixed in advance.
                3. The full sequence of periods completed with scores recorded.
                4. Averages compared and a keep or stop decision made by the rule you set.

                ## Notes
                Keep the measure simple, such as a score from zero to ten at the same time each day. If someone else can set out the capsules without telling you which period you are in, even better.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A self-trial with planned on and off periods is complete, daily scores compared, and a decision made by the pre-set rule."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose one supplement and the single symptom it is meant to help"
                - "Fix the length of each on and off period before starting"
                - "Score the symptom at the same time every day"
                - "Compare the averages and apply the decision rule you set"
            - name: Evaluating personalised vitamin, drip and hair analysis services
              description: |-
                ## Purpose
                Personalised vitamin subscriptions, genetic nutrition reports, hair mineral analysis and intravenous vitamin drips sell the promise of precision, often with little independent evidence and sometimes with real risks. Checking any such service on what it tests, how that test is validated, who regulates it and what your doctor thinks avoids paying a premium for a quiz and a standard multivitamin.

                ## Milestones
                1. The service's method, tests and evidence claims written down.
                2. Independent views on that kind of test or treatment found.
                3. Its regulation, and the qualifications of anyone giving treatment, checked.
                4. A go or no-go decision recorded with the main reason.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on a personalised supplement service is recorded, based on its method, independent evidence and regulation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down exactly what the service tests and what it sells you"
                - "Search for independent assessments of that kind of test"
                - "Check who regulates the service and who would treat you"
                - "Record a go or no-go decision with the main reason"
---

# Vitamins & Supplements Review

This area is for anyone with a cupboard of vitamins, minerals and herbal products who wants to know which ones are earning their place, and which are habit, hope or marketing. It starts with the foundations (an inventory, child-safe storage, a medicines and supplements list, a pharmacist check, the right blood tests and a keep or stop sort), then the routines that keep what you kept taken, stocked and reviewed, the skills of reading labels and judging evidence, the keep or drop decisions on multivitamins, fish oil, herbals and trend products, the appointments and trips that need planning, the situations that change what you need, and finally the careful self-testing of an experienced reviewer.

What repeats is a daily routine tied to a meal, a weekly organiser refill, monthly stock, trial and recall checks, quarterly subscription and results checks, and a yearly review before your health check. The Habit tracker, Metrics log, Reading queue and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
