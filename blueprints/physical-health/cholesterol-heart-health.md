---
id: physical-health.cholesterol-heart-health
name: Cholesterol & Heart Health
description: "Your lipid results in one place, a risk score and target agreed with your clinician, statin decisions made on honest numbers, and the food routines that bring cholesterol down."
category: personal
version: 1.0.0
tags: [physical-health, cholesterol-heart-health, everyone, retiree, statins, lipid-tests, cardiovascular-risk, diet]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - weekly-meal-plan
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Cholesterol & Heart Health
          description: "Understanding lipid results, statin decisions and cardiovascular risk scores, and acting on them, for adults with raised cholesterol or a family history of heart disease."
          projects:
            - name: Gathering your last three lipid results
              description: |-
                ## Purpose
                Before any decision about cholesterol, you need the actual numbers, not a remembered 'it was a bit high'. Collecting your last three lipid profiles from the patient portal or your practice, with dates, shows whether a result was a one-off or a pattern, and gives every later project something to compare against.

                ## Milestones
                1. Your last three lipid reports obtained from the portal, practice or lab.
                2. Total cholesterol, LDL, HDL, non-HDL and triglycerides copied into one table with dates.
                3. Whether each sample was fasting or non-fasting noted where the report says.
                4. Any result the lab flagged as high or low marked for discussion.

                ## Notes
                Check whether results are in mmol/L or mg/dL before comparing them, as labs in different countries use different units.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single table holds at least your last three lipid results with dates and units, saved where you can open it at an appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log in to the patient portal and look for past cholesterol or lipid results"
                - "Ask the practice for copies of any results not shown online"
                - "Copy each value and its date into one lipid results table"
                - "Mark which samples were fasting, if the report says so"
            - name: Booking a full lipid profile with the right preparation
              description: |-
                ## Purpose
                Many people are told their cholesterol is high from a single total figure, which says little on its own. A full lipid profile splits it into LDL, HDL, non-HDL and triglycerides, and knowing in advance whether you need to fast saves a wasted early morning and a repeat needle.

                ## Milestones
                1. A full lipid profile requested, not only a total cholesterol figure.
                2. Fasting or non-fasting instructions confirmed with whoever takes the sample.
                3. The test booked at a time you can keep, with any fast planned around it.
                4. The expected result date noted so you know when to chase it.

                ## Notes
                Non-fasting samples are now standard in many places, but some clinicians ask for a fast when triglycerides were high last time. Follow the instruction you are given, and keep taking regular medicines unless told otherwise.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full lipid profile with LDL, HDL, non-HDL and triglycerides has been taken, with the preparation instructions followed as given."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your practice whether a full lipid profile is due and how to book it"
                - "Check whether you need to fast and for how many hours"
                - "Book the blood test for a morning you can keep"
                - "Set a reminder to chase the result after one week"
            - name: Reading your lipid report line by line
              description: |-
                ## Purpose
                A lipid report lists five or six numbers, and each tells a different story: LDL is the usual target of treatment, non-HDL captures all the particles that cause harm, and triglycerides respond strongly to food and alcohol. Learning what each line means, and which one your clinician watches, turns the report from a worry into something you can discuss.

                ## Milestones
                1. Each value on your report matched to a plain-language meaning in your own words.
                2. The reference ranges on the report understood as lab ranges, not personal targets.
                3. The one or two values your clinician watches most marked at the top of your results table.
                4. Two questions about your report written down for your next appointment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note explains each line of your lipid report in your own words, with the values your clinician watches marked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay your latest lipid report next to a heart charity's guide to cholesterol numbers"
                - "Write one sentence in your own words for each line of the report"
                - "Ask your clinician which value they use to judge your treatment"
                - "Ask the agent to turn your notes into a one-page explainer you can keep"
            - name: Ten-year cardiovascular risk score with your clinician
              description: |-
                ## Purpose
                Cholesterol on its own rarely decides treatment: your clinician combines it with age, sex, blood pressure, smoking, diabetes and other factors in a risk calculator to estimate your chance of a heart attack or stroke over ten years. Getting that score calculated with accurate inputs, and understanding it, is the starting point for every statin conversation.

                ## Milestones
                1. The name of the calculator your clinician uses noted, for example QRISK3 or SCORE2.
                2. Every input checked: cholesterol ratio, blood pressure, smoking status, diagnoses and family history.
                3. Your ten-year risk percentage recorded with the date and calculator used.
                4. What the score means for treatment, in your clinician's words, written down.

                ## Notes
                Online calculators are useful for practice, but treatment decisions should rest on the score your clinician calculates from your full record.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your ten-year cardiovascular risk score, the calculator used and its date are recorded alongside your clinician's view of what it means for you."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice which cardiovascular risk calculator they use"
                - "List your current inputs: blood pressure, smoking, diagnoses, family history"
                - "Book an appointment to have your risk score calculated and explained"
                - "Record the percentage, the date and the calculator in your results table"
            - name: Heart risk factor inventory
              description: |-
                ## Purpose
                Some things that raise heart risk are easy to forget in a short appointment: an inflammatory condition such as rheumatoid arthritis, kidney disease, pre-eclampsia in a past pregnancy, migraine with aura, severe mental illness or certain long-term medicines. Writing them all on one page means your risk score and your clinician's advice account for the whole picture.

                ## Milestones
                1. Every diagnosis, past pregnancy complication and long-term medicine listed on one page.
                2. Lifestyle factors recorded honestly: smoking, weekly alcohol, activity and sleep.
                3. Factors that standard calculators may not include highlighted.
                4. The page shared with your clinician before your risk is calculated.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page heart risk factor list, with conditions the calculator may miss highlighted, has been shared with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every diagnosis you have been given, including ones now resolved"
                - "Add pregnancy complications, long-term medicines and smoking history"
                - "Highlight anything a standard risk calculator might leave out"
                - "Send or hand the page to your clinician before your risk review"
            - name: Agreeing your cholesterol targets
              description: |-
                ## Purpose
                Targets differ between people: someone who has had a heart attack is usually aimed lower than someone treated for prevention, and clinicians may use LDL, non-HDL or a percentage fall from your starting level. Agreeing your own target in writing gives every future result a clear yes or no and makes the next decision obvious.

                ## Milestones
                1. The measure your clinician uses for your target named: LDL, non-HDL or percentage reduction.
                2. Your target value written down with the date it was agreed.
                3. The agreed next step if the target is missed after a fair trial written down.
                4. The target added to the top of your lipid results table.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written cholesterol target, the measure it uses and the agreed next step if it is missed are recorded in your results table."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician which measure they use to judge your cholesterol treatment"
                - "Write down the target value and the date it was agreed"
                - "Ask what the next step would be if the target is not reached"
                - "Add the target to the top of your lipid results table"
            - name: Early heart disease in close relatives, for your risk score
              description: |-
                ## Purpose
                Risk calculators ask a narrow question: did a parent, brother or sister have heart disease or a stroke young, usually before 60. Finding out exact ages and diagnoses, rather than 'Dad had heart trouble', can change your score and may prompt a check for an inherited cholesterol condition.

                ## Milestones
                1. Each parent and sibling's heart attack, angina, stent or stroke listed with age at diagnosis.
                2. Any relative known to have very high cholesterol or to have started a statin young noted.
                3. Unknowns marked as unknown rather than guessed.
                4. The summary given to your clinician for your risk calculation.

                ## Notes
                Keep this to what matters for your cholesterol and heart risk. A wider family health record belongs in its own area.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A short list of first-degree relatives' heart and stroke events with ages has been given to your clinician for your risk score."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a parent or older relative about heart attacks, angina or strokes in the family"
                - "Write each event down with the relative's age when it happened"
                - "Note anyone known to have had very high cholesterol"
                - "Share the list with your clinician before your risk is calculated"
            - name: Heart attack and stroke warning card
              description: |-
                ## Purpose
                In a heart attack or stroke minutes matter, and people often wait because they are unsure or do not want to bother anyone. A small card listing the warning signs, your emergency number, your medicines and allergies, kept in your wallet and on the fridge, helps you and the people around you act quickly.

                ## Milestones
                1. Heart attack and stroke warning signs copied from a reputable source onto one card.
                2. Your emergency number, current medicines and allergies added.
                3. Copies placed in your wallet, on the fridge and with a household member.
                4. The people you live with told where the card is and what to do.

                ## Notes
                Chest pain, pressure or tightness spreading to the arm, jaw or back, or a drooping face, weak arm or slurred speech, means calling your emergency number straight away, not booking an appointment.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card with your medicines and emergency number is in your wallet and on the fridge, and your household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the heart attack and stroke warning signs from a heart charity's page"
                - "Add your emergency number, medicines and allergies to the card"
                - "Print two copies for your wallet and the fridge"
                - "Check the card still lists your current medicines @recurring(yearly)"
            - name: Questions for your first cholesterol appointment
              description: |-
                ## Purpose
                Appointments about cholesterol are often ten minutes long, and the questions you meant to ask arrive on the way home. A written list, ordered by what matters most to you, makes sure the conversation covers your risk, your options and what happens next.

                ## Milestones
                1. A list of no more than eight questions, most important first.
                2. Your results table and risk factor page packed for the appointment.
                3. Answers written down during or straight after the appointment.
                4. Agreed next steps and their dates recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list of questions was taken to the appointment, with the answers and agreed next steps recorded within a day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down everything you want to ask about your cholesterol"
                - "Ask the agent to sort your questions into the eight that matter most"
                - "Print the list with your results table to take along"
                - "Write up the answers and next steps the same day"
            - name: Lipid results log kept current
              description: |-
                ## Purpose
                Results arrive by letter, portal message or a passing mention, and within two years they are scattered. Adding each new lipid result to one log, with the date and any change in treatment beside it, lets you and your clinician see whether a medicine or diet change actually moved the numbers.

                ## Milestones
                1. Every new lipid result added within a week of it becoming available.
                2. Treatment and diet changes noted on the same timeline as the results.
                3. A simple chart of LDL or non-HDL over time kept with the log.
                4. The log brought to every cholesterol review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every lipid result from the past year appears in the log within a week of release, with treatment changes on the same timeline."
                cadence: rolling
              tasks:
                - "Check the patient portal or post for new lipid results @recurring(quarterly)"
                - "Add each new result with its date and the lab's units"
                - "Note any medicine or diet change on the same timeline"
                - "Update the LDL or non-HDL chart after each new result"
            - name: Daily statin routine
              description: |-
                ## Purpose
                Statins only help if taken most days for years, and missed doses are a common reason results disappoint. Tying the tablet to a fixed daily cue, such as brushing your teeth, and reordering before the box runs low, makes it automatic rather than something to remember.

                ## Milestones
                1. A fixed time and daily cue chosen, in line with the label or your pharmacist's advice.
                2. A weekly pill organiser or tracker in use.
                3. Repeat prescriptions reordered at least seven days before running out.
                4. Fewer than two missed doses a month for three months running.

                ## Notes
                Start from the **Habit tracker** template. Some statins are best taken in the evening and others at any time of day: ask your pharmacist which applies to yours.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fewer than two missed statin doses a month over three months, with no gaps in supply."
                cadence: rolling
              tasks:
                - "Ask your pharmacist whether your statin should be taken at a set time of day"
                - "Pick a daily cue and keep the tablets beside it"
                - "Take the statin and tick it off @recurring(daily)"
                - "Reorder the statin repeat prescription @recurring(monthly:22)"
            - name: Annual cholesterol and heart risk review
              description: |-
                ## Purpose
                Once treatment is settled, a yearly review checks that the target is still being met, the risk score is current and the medicine is still the right one. Booking the blood test a fortnight before the review means the result is on the screen when you sit down.

                ## Milestones
                1. A lipid test, and any other blood tests your clinician wants, done before the review.
                2. The review held with your results table and side effect notes to hand.
                3. Your risk score recalculated if anything has changed.
                4. Any change to medicine or target written down with the reason.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly review is held each year with fresh lipid results, an updated risk score and any changes recorded."
                cadence: cyclic
              tasks:
                - "Find out when your next cholesterol review is due"
                - "Book the lipid blood test two weeks before the review @recurring(yearly)"
                - "Bring your results table and side effect diary to the review"
                - "Write down any change to your medicine or target and why"
            - name: Weekly heart-healthy meal plan
              description: |-
                ## Purpose
                Replacing saturated fats with unsaturated ones, eating more fibre and having oily fish regularly are among the most consistent food changes for blood fats, but they only happen if the week's shopping supports them. A weekly plan built around a few reliable meals makes the choices before you are hungry.

                ## Milestones
                1. Five reliable dinners that fit the advice you have been given.
                2. A weekly plan written before the main shop.
                3. Oily fish or a plant protein meal planned at least twice a week, if suitable for you.
                4. The shopping list built from the plan rather than from habit.

                ## Notes
                Start from the **Weekly meal plan** template. A dietitian can tailor this if you also have diabetes, kidney disease or another condition with its own food advice.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A meal plan written every week for eight weeks running, each with at least two oily fish or plant protein meals."
                cadence: rolling
              tasks:
                - "List five dinners you already like that are low in saturated fat"
                - "Write next week's meal plan before the shop @recurring(weekly:sun)"
                - "Build the shopping list straight from the plan"
                - "Swap one red or processed meat meal for fish or beans"
            - name: Daily soluble fibre from oats, beans and barley
              description: |-
                ## Purpose
                Soluble fibre from oats, barley, beans, lentils and some fruit binds cholesterol in the gut, and dietary guides often suggest several portions a day. Counting portions for a few weeks shows how far you are from that and which easy additions close the gap.

                ## Milestones
                1. Your usual soluble fibre portions counted over one typical week.
                2. Three easy additions chosen, such as porridge, a bean salad or barley in soup.
                3. A weekly tally kept for eight weeks.
                4. The new pattern holding without needing the tally.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly soluble fibre tally kept for eight weeks, showing at least three new fibre sources eaten regularly."
                cadence: rolling
              tasks:
                - "Count the oats, beans, lentils and barley you eat in a normal week"
                - "Choose three soluble fibre additions you would actually eat"
                - "Add up the week's soluble fibre portions @recurring(weekly:wed)"
                - "Keep a bag of oats and two tins of beans in the cupboard"
            - name: Quarterly heart health check-in
              description: |-
                ## Purpose
                Heart risk moves with more than cholesterol, and the other factors drift quietly: a few kilograms, a rising blood pressure, a smoking relapse, more drinks a week. A fifteen-minute check every quarter on the handful you are working on catches drift long before the annual review.

                ## Milestones
                1. A short list of the three to five risk factors you are working on.
                2. Each factor checked and noted every quarter.
                3. Anything moving the wrong way for two quarters raised with your clinician.
                4. The quarterly notes brought to the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly check-ins recorded in a year, each noting waist, a blood pressure reading, smoking and weekly alcohol."
                cadence: rolling
              tasks:
                - "Choose the three to five risk factors you want to watch"
                - "Record waist, a blood pressure reading and weekly drinks @recurring(quarterly)"
                - "Flag any factor that has worsened two quarters running"
                - "File the quarterly notes with your annual review papers"
            - name: Muscle symptom diary on statins
              description: |-
                ## Purpose
                Muscle aches are the side effect people most often blame on statins, yet in blinded trials most aches happen nearly as often on dummy tablets. A simple diary of when aches happen, how bad they are and what you were doing gives your clinician real evidence for deciding whether to change, pause or carry on.

                ## Milestones
                1. A diary started before or as soon as the statin begins.
                2. Each ache noted with date, location, a score out of ten and recent activity.
                3. At least four weeks of entries before any decision.
                4. The diary reviewed with your clinician.

                ## Notes
                Severe muscle pain or weakness, especially with dark urine, needs medical advice the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least four weeks of muscle symptom entries, scored out of ten, reviewed with your clinician before any statin change."
                cadence: rolling
              tasks:
                - "Start a diary page with columns for date, place, score and activity"
                - "Note any aches from the past week with a score out of ten @recurring(weekly:fri)"
                - "Write down when you last did unusual exercise or heavy work"
                - "Take the diary to your clinician before stopping or switching"
            - name: Saturated fat swap of the month
              description: |-
                ## Purpose
                Changing everything at once rarely lasts, but one swap a month adds up to twelve in a year. Picking a single switch, such as butter to a vegetable oil spread, fatty mince to lean mince or lentils, or cream to yoghurt, and keeping it for a month gives each change time to feel normal.

                ## Milestones
                1. A list of twelve possible swaps that fit how you eat.
                2. One swap started on the same day each month.
                3. Each swap marked as kept, adjusted or dropped at month end.
                4. At least six swaps still in place after a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six or more saturated fat swaps are still in use twelve months after starting, recorded on the swap list."
                cadence: rolling
              tasks:
                - "Write a list of twelve swaps from the foods you usually buy"
                - "Start this month's swap and note it on the list @recurring(monthly:9)"
                - "Mark last month's swap as kept, adjusted or dropped"
                - "Tell whoever shops or cooks with you about the current swap"
            - name: How cholesterol builds up in artery walls
              description: |-
                ## Purpose
                Knowing why LDL matters makes the rest of this area easier to follow: LDL particles enter the artery wall and, over decades, form plaques that can narrow arteries or rupture. Understanding that the harm is cumulative explains why clinicians care about years of exposure, not only today's number.

                ## Milestones
                1. A plain-language explanation of plaque build-up read from a heart charity or health service.
                2. The idea of cumulative exposure written in your own words.
                3. The difference between gradual narrowing and plaque rupture understood.
                4. One question noted for your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explanation, in your own words, of how LDL contributes to artery plaque and why lifetime exposure matters."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a heart charity's explainer on how plaque forms in arteries"
                - "Write a paragraph explaining it as if to a friend"
                - "Note why years of exposure matter as much as a single result"
                - "Write down one question it raises for your clinician"
            - name: How statins work and what they are expected to do
              description: |-
                ## Purpose
                By lowering the liver's production of cholesterol, statins pull LDL out of the blood, and large trials have shown fewer heart attacks and strokes in people taking them. Knowing what your statin is expected to change, how soon and what it cannot do sets realistic expectations before the first box is opened.

                ## Milestones
                1. The basic mechanism written in two or three sentences.
                2. The expected LDL reduction for your medicine, as your clinician or pharmacist describes it.
                3. Common and rare side effects listed from the patient leaflet.
                4. Your remaining questions answered by a pharmacist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note covers how your statin works, the reduction your clinician expects and the side effects in the leaflet, with questions answered by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the patient leaflet that comes with your statin from start to finish"
                - "Ask your pharmacist how much your LDL is expected to fall"
                - "List the common and rare side effects the leaflet mentions"
                - "Note what the statin cannot do, such as cancel out smoking"
            - name: Absolute and relative risk, in plain numbers
              description: |-
                ## Purpose
                Hearing that a treatment halves your risk sounds huge until you know whether that means 20 in 100 falling to 10, or 2 in 100 falling to 1. Learning to turn percentages into people out of 100, and asking for decision aids that show it, lets you weigh a statin or any other treatment on honest terms.

                ## Milestones
                1. The difference between absolute and relative risk explained in your own words.
                2. Your own ten-year risk expressed as people out of 100.
                3. A decision aid showing statin benefit as people out of 100 viewed with your clinician or online.
                4. The number who benefit per 100 treated at your risk level written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your ten-year risk and the expected statin benefit are written as people out of 100, taken from a recognised decision aid."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Convert your ten-year risk percentage into people out of 100"
                - "Find a recognised statin decision aid published by a health service"
                - "Read how many people in 100 avoid a heart attack or stroke at your risk"
                - "Ask your clinician to go through the decision aid with you"
            - name: Reading food labels for saturated fat
              description: |-
                ## Purpose
                Two products that look equally healthy can differ several-fold in saturated fat, and labels give the figure per 100 g, per portion or both. Practising on ten foods you already buy teaches you which numbers to compare, where the hidden sources are, and how your country's colour-coded labels work.

                ## Milestones
                1. Saturated fat per 100 g found on ten foods from your cupboard and fridge.
                2. The levels your country's labelling scheme calls high, medium and low noted.
                3. Three higher saturated fat items in your regular shop identified.
                4. A lower alternative found for each.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten regular foods checked for saturated fat per 100 g, with lower alternatives chosen for the three highest."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pull ten packaged foods out of your cupboard and fridge"
                - "Write down the saturated fat per 100 g for each"
                - "Look up what your country's label counts as high saturated fat"
                - "Find a lower saturated fat alternative for the three highest"
            - name: Cooking with unsaturated oils and less butter
              description: |-
                ## Purpose
                Most saturated fat at home comes from how food is cooked and finished: butter in the pan, cheese on top, cream in the sauce. Learning a handful of techniques, roasting in olive or rapeseed oil, thickening with yoghurt or blended beans, using herbs and lemon for flavour, keeps meals satisfying with far less of it.

                ## Milestones
                1. Three dishes you cook often rewritten with unsaturated oils.
                2. One new technique practised each week for six weeks.
                3. A short list of household-approved recipes saved.
                4. Butter, cream and cheese used as accents rather than bases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six new lower saturated fat recipes cooked at least once, with three of them added to the regular rotation."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Rewrite three dishes you cook often using oil instead of butter"
                - "Cook one new lower saturated fat recipe @recurring(weekly:sat)"
                - "Rate each recipe with whoever eats it"
                - "Save the keepers in one recipe list"
            - name: Plant sterols and stanols, what they can and cannot do
              description: |-
                ## Purpose
                Fortified spreads, yoghurt drinks and milks with added plant sterols or stanols can lower LDL modestly when eaten daily with meals, but they are not a substitute for treatment and are not advised for everyone. Learning what the evidence supports, the daily amount on the label and who should avoid them lets you decide with your clinician whether they are worth the cost.

                ## Milestones
                1. What sterols and stanols do summarised from a reputable source.
                2. The daily amount the product labels recommend noted.
                3. Groups the labels advise against, such as pregnancy or young children, written down.
                4. A decision recorded with your clinician on whether to try them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A recorded decision, made with your clinician, on whether to use plant sterol or stanol products and at what labelled amount."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a dietetic association's fact sheet on plant sterols and stanols"
                - "Compare the price and labelled daily amount of three products"
                - "Note which groups the labels say should avoid them"
                - "Ask your clinician whether they would suggest them for you"
            - name: Checking cholesterol supplement claims
              description: |-
                ## Purpose
                Shops sell red yeast rice, fish oil, garlic, berberine and many blends promising lower cholesterol, with very uneven evidence and sometimes real risks: red yeast rice can contain the same active compound as a prescription statin. Checking any supplement with a pharmacist before buying protects you from interactions and from money spent on nothing.

                ## Milestones
                1. Every supplement you take or are considering listed with its ingredients.
                2. Each one checked with a pharmacist for interactions with your medicines.
                3. A keep, stop or never-start decision recorded for each.
                4. Your clinician told about anything you continue.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each cholesterol supplement you use or considered has a keep, stop or never-start decision recorded after a pharmacist check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every supplement you take or are thinking of buying"
                - "Photograph the ingredient labels"
                - "Ask a pharmacist to check each one against your medicines"
                - "Record a keep, stop or never-start decision for each"
            - name: What a heart age figure does and does not tell you
              description: |-
                ## Purpose
                Heart age tools turn your risk into an age, so a 50-year-old might be told their heart is 58. That framing is motivating but blunt, and it can shift a lot with small changes to the inputs. Learning to read it alongside your ten-year risk keeps it in proportion.

                ## Milestones
                1. Your heart age calculated with a health service's tool.
                2. The inputs you used recorded so the figure can be repeated.
                3. The changes that would move the figure most noted from the tool's results.
                4. The figure compared with your clinician's ten-year risk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A heart age result with its inputs recorded, compared in writing with your clinician's ten-year risk score."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Use a health service's heart age tool with your latest numbers"
                - "Save the inputs you entered alongside the result"
                - "Note which change the tool says would lower your heart age most"
                - "Compare the result with the risk score your clinician gave you"
            - name: Statin or lifestyle first decision
              description: |-
                ## Purpose
                For many people at moderate risk, the choice between starting a statin now and trying food and activity changes first is a genuine shared decision, not a rule. Weighing your risk score, your preferences and a time limit for any trial with your clinician gives you a decision you will stick with.

                ## Milestones
                1. Your ten-year risk and the expected statin benefit, in people out of 100, in front of you.
                2. The changes you would make in a lifestyle-first trial written down.
                3. A trial length and recheck date agreed if you choose lifestyle first.
                4. The decision and its reasons recorded.

                ## Notes
                Statins and lifestyle changes are not either-or: many people do both, and food changes still matter once a statin starts.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to start a statin, try lifestyle changes first with a recheck date, or both, agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what matters most to you about taking a daily tablet"
                - "List the food and activity changes you would realistically make"
                - "Book an appointment to make the decision with your clinician"
                - "Record the decision, the reasons and any recheck date"
            - name: First three months on a statin
              description: |-
                ## Purpose
                The first weeks on a statin are when people most often stop, usually over side effect worries that nobody followed up. Planning the start date, the symptom diary and the recheck blood test, often two to three months in, means the decision to continue rests on evidence rather than on a bad week.

                ## Milestones
                1. A start date chosen that avoids a busy or unusual week.
                2. The daily routine and symptom diary running from day one.
                3. The recheck lipid test, and any other bloods your clinician asks for, booked.
                4. Results reviewed and a continue, adjust or switch decision recorded.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A recheck lipid result reviewed with your clinician within four months of starting, with a continue, adjust or switch decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Pick a statin start date in an ordinary week"
                - "Ask your clinician when the recheck blood test should be done"
                - "Book the recheck blood test now so the date is fixed"
                - "Book the review appointment to discuss the recheck result"
            - name: Statin intolerance plan with your clinician
              description: |-
                ## Purpose
                When side effects seem to follow a statin, stopping for good is not the only option. Many people manage well on a lower dose, a different statin, a less frequent schedule or another class of medicine, but these need a structured plan agreed with a clinician rather than trial and error at home.

                ## Milestones
                1. Symptoms and their timing summarised from your diary.
                2. Other possible causes checked by your clinician, for example with blood tests.
                3. A written plan for a pause and rechallenge, a switch or an alternative.
                4. The outcome of each step recorded with dates.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written side effect plan agreed with your clinician, with each step's outcome recorded until a tolerated treatment or a clear decision is reached."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Summarise your muscle symptom diary on one page"
                - "Book an appointment specifically about statin side effects"
                - "Ask what options exist besides stopping altogether"
                - "Record each step of the agreed plan and how you felt"
            - name: Adding a second cholesterol medicine when the target is missed
              description: |-
                ## Purpose
                If your target has not been reached after a fair trial of a statin taken regularly, clinicians often consider a stronger statin, adding ezetimibe or other options depending on your risk. Preparing your results and adherence record makes this conversation quick and lets you ask the right questions about each choice.

                ## Milestones
                1. Several months of results and your missed-dose record in one place.
                2. Your clinician's options listed with how each is taken and monitored.
                3. Questions answered about side effects, cost and follow-up tests.
                4. The chosen next step and its recheck date recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on the next treatment step, with a recheck date, made after reviewing at least three months of results and adherence."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather your last two lipid results and your missed-dose record"
                - "Ask your clinician what options exist if the target is still missed"
                - "Write down how each option is taken and monitored"
                - "Record the chosen step and when the next test is due"
            - name: Saturated fat audit of the kitchen cupboards
              description: |-
                ## Purpose
                Most of a household's saturated fat comes from a few repeat purchases: cheese, butter, fatty meat, pastries, biscuits and coconut products. An afternoon going through the fridge, freezer and cupboards finds the biggest sources and gives you a short, realistic list of things to change.

                ## Milestones
                1. Every regular purchase in fridge, freezer and cupboards checked for saturated fat.
                2. The five biggest sources, by how much you actually eat, identified.
                3. A lower alternative or smaller portion agreed for each.
                4. The standing shopping list updated.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The five biggest saturated fat sources in your kitchen are identified, each with a recorded alternative on the shopping list."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Empty one shelf at a time and read the saturated fat figures"
                - "Rank the five biggest sources by how often you eat them"
                - "Choose a lower alternative or smaller portion for each"
                - "Update the standing shopping list"
            - name: Thirty-day portfolio diet trial
              description: |-
                ## Purpose
                The portfolio approach combines several foods that each lower LDL a little: nuts, soy or other plant proteins, soluble fibre and plant sterols. Trying it for a defined month, with a lipid test before and after if your clinician agrees, shows how much it does for you rather than for an average trial participant.

                ## Milestones
                1. Your clinician's agreement to a time-limited trial and a recheck date.
                2. A daily checklist of the four food groups.
                3. Thirty days of ticks with any missed days noted.
                4. Before and after results compared and written down.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A thirty-day portfolio diet checklist completed, with before and after lipid results compared and recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your clinician whether a one-month food trial with a recheck makes sense"
                - "Write a daily checklist of nuts, plant protein, soluble fibre and sterols"
                - "Tick off the four portfolio food groups @recurring(daily)"
                - "Book the recheck blood test for the end of the month"
            - name: High triglycerides action plan
              description: |-
                ## Purpose
                Triglycerides behave differently from LDL: they rise sharply with alcohol, sugary drinks, refined carbohydrate, poorly controlled diabetes and some medicines, and often fall quickly when those change. A short plan built with your clinician, covering likely causes, two or three changes and a repeat test, is often enough to bring them down.

                ## Milestones
                1. Possible causes reviewed with your clinician, including medicines and other conditions.
                2. Two or three specific food and drink changes chosen.
                3. A repeat test booked, fasting if requested.
                4. The new result compared with the old one.

                ## Notes
                Very high triglycerides can need prompt treatment, so follow your clinician's timescale for the repeat test.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A repeat triglyceride result compared with the previous one, after two or three agreed changes followed for the agreed period."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician what may be pushing your triglycerides up"
                - "Write down your weekly alcohol and sugary drink intake honestly"
                - "Choose two or three changes to make for the next two months"
                - "Book the repeat triglyceride test your clinician asked for"
            - name: Grapefruit and medicine interaction check
              description: |-
                ## Purpose
                Grapefruit and a few other citrus fruits can raise blood levels of some statins and heart medicines, while others are unaffected. A five-minute question to your pharmacist about your exact medicines, and about any new prescription such as certain antibiotics, prevents an avoidable side effect.

                ## Milestones
                1. Your pharmacist's answer on grapefruit, pomelo and Seville orange for your medicines.
                2. Any common medicines that interact with your statin listed.
                3. The list kept with your medication record.
                4. The check repeated whenever a new medicine starts.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of your pharmacist's check on fruit and medicine interactions for your statin is kept with your medication list."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist whether grapefruit affects your statin"
                - "Ask which common medicines should not be combined with it"
                - "Write the answers on your medication list"
                - "Tell any new prescriber that you take a statin"
            - name: Lipid clinic appointment preparation
              description: |-
                ## Purpose
                A referral to a lipid clinic or cardiologist usually means very high cholesterol, a suspected inherited condition or difficulty reaching target. These appointments can be months away and short when they come, so arriving with a clear history, results and questions makes the most of a scarce slot.

                ## Milestones
                1. The referral and expected appointment date recorded.
                2. A one-page history of results, treatments tried and side effects prepared.
                3. Family history of early heart disease and high cholesterol summarised.
                4. Questions written and the clinic's plan noted on the day.

                ## Notes
                Start from the **Meeting notes** template to capture what the clinic says.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A one-page treatment history and question list taken to the lipid clinic, with the clinic's plan written up within a day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note the referral date and chase the clinic if no letter arrives"
                - "Write a one-page history of results, medicines tried and side effects"
                - "Pack your family heart history summary and results table"
                - "Write up the clinic's plan the same day"
            - name: Chest pain clinic visit
              description: |-
                ## Purpose
                Chest discomfort on exertion that eases with rest is one reason clinicians refer to a rapid access chest pain clinic or cardiology. Preparing a symptom record and knowing which tests may follow, such as an ECG, a scan or an exercise test, makes the visit quicker and less frightening.

                ## Milestones
                1. Each episode written down with what you were doing, how long it lasted and what eased it.
                2. Your medicines, results and risk factors on one page for the clinic.
                3. The tests offered and their dates recorded.
                4. The outcome and any new treatment written down.

                ## Notes
                Chest pain at rest, or pain lasting more than a few minutes, needs your emergency number, not a clinic appointment.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written record of chest symptoms and a one-page summary taken to the clinic, with the tests and outcome recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down every episode of chest discomfort with what triggered and eased it"
                - "Prepare a one-page summary of medicines, results and risk factors"
                - "Arrange a lift or companion for the clinic day"
                - "Record the tests offered and the clinic's conclusion"
            - name: Follow-up after a finger-prick cholesterol test
              description: |-
                ## Purpose
                Pharmacies, workplaces and health fairs offer quick finger-prick cholesterol checks, and a high reading can be alarming. These tests are useful screens but less precise than a lab sample, so the right step is a full lipid profile and risk assessment rather than acting on the number alone.

                ## Milestones
                1. The finger-prick result, date and place written down.
                2. A full lab lipid profile booked through your practice.
                3. Your ten-year risk discussed once the lab result is back.
                4. Both results kept in your results table.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A lab lipid profile completed within six weeks of a high finger-prick reading, with both results recorded side by side."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the finger-prick result and where it was taken"
                - "Book a full lab lipid profile through your practice"
                - "Add both numbers to your lipid results table"
                - "Book a follow-up appointment to discuss the lab result"
            - name: Medicines review before surgery or a new prescription
              description: |-
                ## Purpose
                Around certain operations, during a serious illness or alongside some new antibiotics, statins and other heart medicines occasionally need pausing or adjusting. Telling every new prescriber and pre-operative team about them, and getting a clear instruction in writing, avoids both unnecessary stopping and unsafe combinations.

                ## Milestones
                1. An up-to-date list of your heart and cholesterol medicines ready to show.
                2. A written instruction from the surgical or prescribing team on whether to continue each one.
                3. A restart date noted if anything is paused.
                4. Your pharmacist's check on any new prescription recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written continue or pause instruction for each heart medicine obtained before surgery or a new prescription, with any restart date noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Print an up-to-date list of your heart and cholesterol medicines"
                - "Ask the pre-operative or prescribing team for a written instruction on each"
                - "Put any restart date in your calendar"
                - "Ask the pharmacist to check the new prescription against your statin"
            - name: One-year cholesterol progress review
              description: |-
                ## Purpose
                After a year of tests, swaps and medicines, it is easy to lose sight of how far things have moved. Laying the first and latest results side by side, with the changes in between, shows what worked, what did not and where to focus in year two.

                ## Milestones
                1. First and latest lipid results compared on one page.
                2. Each change made during the year listed with its apparent effect.
                3. Projects that helped kept, and ones that did not archived.
                4. Two priorities for the coming year written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A one-page year review compares first and latest results, lists changes made and names two priorities for the next year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put your first and latest lipid results side by side"
                - "List every change you made this year and roughly when"
                - "Archive the projects in this area that did not help"
                - "Write two priorities for the next twelve months"
            - name: Starting a statin over seventy-five
              description: |-
                ## Purpose
                Risk calculators give high scores at older ages almost by default, and the evidence for starting a statin for prevention after 75 is less settled than for younger adults. Discussing frailty, other medicines, what you want from the coming years and expected benefit with your clinician makes the choice fit your life rather than your birthday.

                ## Milestones
                1. Your current medicines and conditions listed for the discussion.
                2. What you most want from the coming years written down.
                3. Expected benefit and burden discussed with your clinician.
                4. A decision recorded, with a date to revisit it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on statin treatment after 75, made with your clinician, with a date set to revisit it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine you take and every condition you have"
                - "Write down what matters most to you about the next five years"
                - "Ask your clinician about expected benefit at your age and health"
                - "Record the decision and a date to look at it again"
            - name: Helping an older parent with cholesterol medicines
              description: |-
                ## Purpose
                Older parents often take a statin alongside several other tablets, and when memory or eyesight starts to slip, doses get missed or doubled. Agreeing with your parent what help they want, and setting up a simple monthly check, keeps them on their medicine while leaving the decisions with them.

                ## Milestones
                1. Your parent's agreement on how much help they want.
                2. A pill organiser or pharmacy blister pack arranged if useful.
                3. A monthly check-in together in place.
                4. You recorded as a contact with the practice, with your parent's consent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monthly medicine check-in with your parent kept for three months, with their agreement recorded and any problems raised with the pharmacy."
                cadence: rolling
              tasks:
                - "Ask your parent what help, if any, they want with their medicines"
                - "Ask the pharmacy about pill organisers or blister packs"
                - "Check the pill organiser together with your parent @recurring(monthly:18)"
                - "Ask the practice how to be recorded as a contact, with consent"
            - name: Raised cholesterol found in your thirties
              description: |-
                ## Purpose
                A high result in your twenties or thirties matters more than it looks, because LDL does its harm over a lifetime and ten-year scores always look low at young ages. Asking about lifetime risk and whether an inherited cause should be checked gives you a plan for the decades ahead.

                ## Milestones
                1. A second lab result confirming the raised level.
                2. Lifetime or thirty-year risk discussed, not only ten-year risk.
                3. Whether an inherited cause is possible asked and answered.
                4. A plan and a retest date agreed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lifetime risk discussion held and an inherited cause considered, with a written plan and retest date for cholesterol found raised before forty."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a repeat lipid test to confirm the first result"
                - "Ask your clinician about lifetime risk rather than ten-year risk"
                - "Ask whether an inherited cholesterol condition should be considered"
                - "Write down the agreed plan and the retest date"
            - name: Planning a pregnancy while on a statin
              description: |-
                ## Purpose
                Statins are usually stopped before trying to conceive and during pregnancy and breastfeeding, so anyone taking one needs a plan well before stopping contraception. Talking to your clinician early means the timing, any alternative and the restart plan are agreed in advance rather than in a hurry.

                ## Milestones
                1. An appointment held before stopping contraception.
                2. A clear instruction on when to stop the statin.
                3. Any approach to cholesterol during pregnancy agreed.
                4. A plan for restarting after pregnancy and breastfeeding written down.

                ## Notes
                If you become pregnant unexpectedly while taking a statin, contact your clinician promptly rather than waiting for a routine appointment.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written plan from your clinician covers when to stop the statin, what happens during pregnancy and when to restart."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment about your statin before stopping contraception"
                - "Ask when the statin should be stopped and why"
                - "Ask what happens with your cholesterol care during pregnancy"
                - "Write down the restart plan for after pregnancy and breastfeeding"
            - name: Cholesterol care alongside diabetes or kidney disease
              description: |-
                ## Purpose
                People with diabetes or chronic kidney disease usually carry higher heart risk, so cholesterol treatment is often offered at lower thresholds while blood tests multiply. Lining up lipid tests with the other condition's reviews, and making sure both clinicians see the same results, saves needles and avoids mixed messages.

                ## Milestones
                1. Both conditions' review dates listed together.
                2. Lipid tests timed to share a blood draw with other monitoring.
                3. Each clinician aware of the other's plan.
                4. Your cholesterol target confirmed in light of the other condition.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lipid tests share a blood draw with your other condition's monitoring for a full year, and your target reflects both conditions."
                cadence: cyclic
              tasks:
                - "List the review dates for each of your long-term conditions"
                - "Ask whether your lipid test can be taken with the other bloods"
                - "Line up next year's lipid and condition tests on one blood draw @recurring(yearly)"
                - "Confirm your cholesterol target takes the other condition into account"
            - name: Heart-friendly cooking for one in later life
              description: |-
                ## Purpose
                Cooking for one after a bereavement, or with a smaller appetite, often slides into toast, cheese and ready meals that are high in saturated fat. A small set of easy batch meals portioned into the freezer makes a lower saturated fat meal the easy option on tired days.

                ## Milestones
                1. Four simple batch recipes chosen that suit one person.
                2. Freezer portions labelled and dated.
                3. A weekly batch-cooking slot in place.
                4. Ready meals kept as a planned backup rather than a default.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Four single-portion batch recipes in regular use, with labelled freezer portions available on most days for two months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Choose four easy recipes that freeze well in single portions"
                - "Buy freezer containers and labels"
                - "Batch-cook and portion one recipe @recurring(weekly:tue)"
                - "Keep a short list of lower saturated fat ready meals as backup"
            - name: Bringing the household on board with food changes
              description: |-
                ## Purpose
                Food changes stick far better when the people you live with share them, but nobody enjoys being told their dinner is unhealthy. Agreeing a few changes together, letting each person keep a favourite, and checking in monthly makes the new pattern the household's rather than yours alone.

                ## Milestones
                1. A household conversation held about why the changes matter.
                2. Three shared changes agreed, with one favourite kept for each person.
                3. A monthly check on what is working.
                4. Children or partners involved in choosing or cooking new meals.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Three household food changes agreed and still in place after three months, reviewed at a monthly check-in."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Explain to the household why you are changing what you eat"
                - "Agree three shared changes and one favourite each person keeps"
                - "Hold a short check-in on the food changes @recurring(monthly:3)"
                - "Let each person choose one new meal to try"
            - name: Familial hypercholesterolaemia assessment
              description: |-
                ## Purpose
                Familial hypercholesterolaemia is an inherited condition that causes very high LDL from birth and early heart disease, and most people who have it have never been diagnosed. If your LDL is very high or relatives had early heart attacks, asking for a formal assessment, with genetic testing where offered, can lead to earlier treatment for you and testing for your relatives.

                ## Milestones
                1. Your highest recorded LDL or total cholesterol and family history in front of your clinician.
                2. A formal assessment or referral to a lipid clinic completed.
                3. Genetic testing offered, and a decision made about it.
                4. If confirmed, a plan agreed for telling and testing first-degree relatives.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A formal familial hypercholesterolaemia assessment completed, with the outcome and any plan for testing relatives recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find your highest recorded LDL or total cholesterol"
                - "Ask your clinician whether a familial hypercholesterolaemia assessment is warranted"
                - "Ask whether genetic testing is offered and what it involves"
                - "Agree how relatives would be told if the diagnosis is confirmed"
            - name: Lipoprotein(a) test decision
              description: |-
                ## Purpose
                Lipoprotein(a) is a cholesterol-carrying particle set mostly by your genes, and a high level adds to heart risk even when LDL looks fine. It is usually measured once in a lifetime, and some guidelines now suggest it for every adult or for people with early heart disease in the family.

                ## Milestones
                1. Whether your clinician or local guidance offers the test established.
                2. The test done, if offered and you choose it.
                3. The result recorded with its units, as labs report it differently.
                4. What the result means for your overall risk discussed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on lipoprotein(a) testing and, if tested, the result with units and your clinician's interpretation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether a lipoprotein(a) test is available and useful for you"
                - "Note the result and its units if you are tested"
                - "Ask how the result changes your overall risk estimate"
                - "Tell close relatives if your level is high so they can ask about testing"
            - name: Coronary calcium scan decision
              description: |-
                ## Purpose
                Coronary artery calcium scanning uses a low-dose CT scan to look for calcified plaque, and in some health systems it helps decide treatment for people whose risk sits on the borderline. It is not available or appropriate everywhere and carries cost and radiation, so the decision belongs in a conversation with your clinician.

                ## Milestones
                1. Whether a scan would change any decision for you discussed with your clinician.
                2. Cost, availability and radiation dose understood.
                3. A decision made to have the scan or not.
                4. If done, the score and its meaning recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on calcium scanning, made after asking whether the result would change treatment, with any score kept in your results table."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether a calcium score would change your treatment"
                - "Find out the cost and availability where you live"
                - "Record your decision and the reasons"
                - "File the score and report with your lipid results if you have the scan"
            - name: Specialist injectable lipid therapy referral
              description: |-
                ## Purpose
                For people at very high risk whose LDL stays high despite tablets, specialists can consider injectable medicines that lower LDL further. Eligibility rules are strict and vary by country, so knowing the criteria and having a complete treatment record ready helps your clinician make the case.

                ## Milestones
                1. Local eligibility criteria for injectable lipid therapy obtained from your clinician.
                2. A treatment history showing what has been tried, for how long and why it stopped.
                3. A referral made, or a clear reason recorded why not.
                4. If started, an injection and monitoring routine in place.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A complete treatment history matched against local criteria, with a referral made or the reason it was not recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician what the local criteria are for injectable cholesterol treatment"
                - "Build a timeline of every lipid medicine tried and why it stopped"
                - "Add your latest results and risk score to the timeline"
                - "Record whether a referral was made and the reason"
            - name: Long-term lipid trend report for a specialist
              description: |-
                ## Purpose
                Years into treatment, a specialist or a new doctor needs the whole story quickly: levels before any medicine, each change and its effect, and side effects along the way. A two-page report with a chart, updated each year, saves retelling the history at every appointment.

                ## Milestones
                1. Levels before treatment recorded clearly.
                2. A chart of LDL or non-HDL across all available years.
                3. Each treatment change and side effect marked on the timeline.
                4. The report updated after each annual review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A two-page lipid trend report with a chart and treatment timeline, updated within a month of each annual review."
                cadence: rolling
              tasks:
                - "Find the earliest lipid result you have from before any treatment"
                - "Ask the agent to draft a two-page trend summary from your results table"
                - "Mark each treatment change and side effect on the chart"
                - "Update the trend report after the annual review @recurring(yearly)"
---

# Cholesterol & Heart Health

This area is for adults told their cholesterol is raised, anyone weighing up a statin, and people with a family history of early heart disease, including older adults deciding what still makes sense for them. It starts with the foundations (your actual results, a full lipid profile, a ten-year risk score and an agreed target), then the routines that keep results, tablets and food on track, the knowledge that makes risk numbers meaningful, the treatment and diet decisions, the appointments worth preparing for, the situations that change the picture, and finally specialist questions such as inherited cholesterol, lipoprotein(a) and calcium scoring.

What repeats is a daily statin time with a monthly reorder, a weekly meal plan and fibre tally, a monthly food swap, a quarterly results and risk factor check, and the yearly review with its blood test booked in advance. The Metrics log, Habit tracker, Weekly meal plan and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
