---
id: physical-health.anaemia-iron-deficiency
name: Anaemia & Iron Deficiency
description: "From unexplained tiredness to recovered blood levels: the right tests, a cause looked for, an iron or B12 plan you can stick to, and retests booked until the numbers hold."
category: personal
version: 1.0.0
tags: [physical-health, anaemia-iron-deficiency, everyone, iron-deficiency, ferritin, vitamin-b12, blood-tests]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - purchase-decision
    - weekly-meal-plan
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Anaemia & Iron Deficiency
          description: "Investigating tiredness from low iron or B12, following supplement or infusion plans, and retesting blood levels until they recover."
          projects:
            - name: Two-week tiredness and symptom record
              description: |-
                ## Purpose
                Tiredness has dozens of causes, and a GP faced with I feel exhausted has little to go on. Two weeks of short notes on energy, breathlessness on stairs, headaches, cold hands, odd cravings such as chewing ice, and how heavy any periods were gives the appointment a concrete starting point and makes it far more likely the right bloods are ordered.

                ## Milestones
                1. A daily note kept for fourteen days covering energy, sleep hours and breathlessness on exertion.
                2. Less obvious signs listed if present: brittle nails, sore tongue, hair shedding, pins and needles, cravings for ice or non-food items.
                3. Diet, recent blood donations, heavy periods and any stomach or bowel changes summarised in a few lines.
                4. A one-page summary ready to hand over or read out at the appointment.

                ## Notes
                Pins and needles, numbness or memory problems point more towards B12 than iron, so mention them even if they seem unrelated.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A fourteen-day symptom record condensed to one page and taken to a clinician appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Start a daily note of energy, sleep hours and breathlessness on stairs"
                - "List any cravings, nail changes, sore tongue or pins and needles"
                - "Write three lines on diet, blood donation and period heaviness"
                - "Condense the two weeks into a one-page summary for the appointment"
            - name: First full blood count and iron studies
              description: |-
                ## Purpose
                A haemoglobin result alone shows whether you are anaemic, not why. Asking for a full blood count together with ferritin, and where your clinician agrees B12 and folate, means one blood draw answers most of the first questions instead of three appointments spread over two months.

                ## Milestones
                1. An appointment booked with your symptom summary attached or ready to hand over.
                2. The tests ordered confirmed: full blood count, ferritin, and B12 and folate if your clinician agrees they are relevant.
                3. The blood test done, with any fasting or timing instructions followed.
                4. A date written down for when and how results will come back.

                ## Notes
                Ask whether you should stop any iron or multivitamin supplements before the test, as recent supplements can mask the picture.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Blood has been drawn for a full blood count and ferritin, with the result date and route recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a GP or nurse appointment to discuss tiredness and low iron"
                - "Ask whether ferritin, B12 and folate can be added to the blood count"
                - "Check whether to pause any iron or vitamin supplements before the test"
                - "Note the date results are expected and how you will hear"
            - name: Copies of your blood count and ferritin results
              description: |-
                ## Purpose
                Being told your bloods are a bit low or normal is not enough to manage anaemia, because the actual figures decide what happens next and whether you are improving. Getting the numbers and reference ranges in writing, through the patient portal or a printout, gives you a baseline every later retest is compared against.

                ## Milestones
                1. Haemoglobin, MCV, ferritin and any B12, folate or transferrin saturation figures obtained with their reference ranges.
                2. Results that are flagged high or low identified.
                3. The date and the lab's units recorded, since ranges differ between labs.
                4. The baseline figures entered as the first row of your results log.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your baseline haemoglobin and ferritin figures, with reference ranges and units, are written down in one place."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Log in to the patient portal or ask reception for a results printout"
                - "Copy each figure with its reference range and units"
                - "Mark which results the lab flagged as outside the range"
                - "Enter the baseline figures as the first row of your results log"
            - name: Reading a full blood count and iron study report
              description: |-
                ## Purpose
                A blood report is a page of abbreviations, and the useful story usually sits in four or five lines: haemoglobin, MCV, ferritin, transferrin saturation and sometimes reticulocytes. Knowing what each roughly measures lets you follow your clinician's reasoning, spot when a figure has moved and ask sharper questions.

                ## Milestones
                1. A one-line plain-English meaning written beside each abbreviation on your own report.
                2. The difference between low iron stores and anaemia understood: stores can fall long before haemoglobin does.
                3. The reason a normal ferritin can mislead during infection or inflammation noted.
                4. Two questions about your own report written down for the next appointment.

                ## Notes
                This is for following the conversation, not self-diagnosis. Interpretation belongs to your clinician, who sees the whole picture.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your own report is annotated with the meaning of each key line and two questions are ready for your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Print or screenshot your latest blood report"
                - "Look up haemoglobin, MCV, ferritin and transferrin saturation on a health service site"
                - "Write a one-line meaning beside each on your report"
                - "Note two questions your report raises for your clinician"
            - name: Finding the cause of your iron deficiency
              description: |-
                ## Purpose
                Iron deficiency is a sign, not a diagnosis: it comes from losing blood, taking in too little iron, absorbing it poorly, or needing more than usual. Treating the number without asking why risks missing a bleeding source or coeliac disease, so this project makes sure the cause is discussed, investigated where needed, and written down.

                ## Milestones
                1. The four broad causes discussed with your clinician against your own history.
                2. Any investigations your clinician recommends, such as a coeliac blood test or a referral for a camera test, booked.
                3. A working explanation recorded, even if it is provisional.
                4. A plan agreed for what happens if levels do not recover as expected.

                ## Notes
                Keep eating gluten until any coeliac blood test is done, as cutting it out first can give a falsely reassuring result.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A likely cause of the iron deficiency is recorded after discussion with a clinician, with any recommended investigations booked."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List your possible blood losses, diet gaps and stomach or bowel symptoms"
                - "Ask your clinician directly what they think is causing the low iron"
                - "Ask whether a coeliac blood test or camera test is recommended for you"
                - "Record the working explanation and the backup plan in your notes"
            - name: Agreeing a treatment plan and retest date
              description: |-
                ## Purpose
                Many people leave the surgery with a prescription and no idea how long to take it, when to be retested or what improvement should look like. A short written plan, agreed before you start, covers the treatment, the first retest, the target and when to call if things are not working.

                ## Milestones
                1. The treatment written down: what, how often and for roughly how long, as your clinician advised.
                2. The first retest date booked or noted with how to book it.
                3. The level your clinician wants to see before stopping recorded.
                4. Reasons to get back in touch sooner listed.

                ## Notes
                Iron is often continued for a while after haemoglobin returns to normal to refill stores. Ask your clinician how long that should be for you.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written treatment plan with a booked retest date and a target level agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask how long treatment should last and how you will know it is working"
                - "Book or diarise the first retest before leaving the appointment"
                - "Write the target level your clinician wants to reach"
                - "List the symptoms that should prompt an earlier call"
            - name: Iron and B12 results log
              description: |-
                ## Purpose
                Recovery from anaemia takes months and several blood tests, often ordered by different clinicians and reported in different places. One running log of haemoglobin, ferritin and any B12 or folate results, with dates and what you were taking at the time, shows the trend at a glance and stops anyone guessing.

                ## Milestones
                1. A log with columns for date, haemoglobin, MCV, ferritin, B12, folate, treatment at the time and notes.
                2. Every result since diagnosis entered, including the baseline.
                3. Reference ranges and units written once at the top.
                4. The log shared with whoever is managing your treatment.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results log holding every blood result since diagnosis, with treatment noted against each date."
                cadence: rolling
              tasks:
                - "Create a results log from the metrics log template"
                - "Add every past result with its date and the treatment you were on"
                - "Write the lab reference ranges at the top of the log"
                - "Check the portal for new results and add them to the log @recurring(quarterly)"
            - name: Anaemia red flags card
              description: |-
                ## Purpose
                Most anaemia is managed slowly, but some signs need same-day help: chest pain, fainting, breathlessness at rest, vomiting blood, or black, sticky stools when you feel unwell. A card with your health service's guidance and the right numbers means you and your household act quickly instead of waiting for the next blood test.

                ## Milestones
                1. Your health service's urgent signs for anaemia and bleeding found.
                2. A card written with the signs, the urgent advice line and the emergency number.
                3. The difference between dark stools from iron tablets and signs of bleeding checked with your clinician or pharmacist.
                4. The card kept somewhere visible and shown to the people you live with.

                ## Notes
                Iron tablets commonly turn stools dark. Tarry, sticky stools with dizziness or weakness are different and need urgent advice.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A red flags card based on health service guidance is on display and the household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's urgent signs for anaemia and bleeding"
                - "Ask the pharmacist how iron-darkened stools differ from bleeding"
                - "Write the signs and numbers on one card and put it on the fridge"
                - "Check the card is still up and the numbers are current @recurring(yearly)"
            - name: Medicines that affect iron and B12 check
              description: |-
                ## Purpose
                Several everyday medicines change how iron and B12 behave: acid reducers and metformin can lower B12 over years, antacids and calcium reduce iron absorption, and iron itself can block thyroid tablets and some antibiotics. A structured check with a pharmacist catches these interactions before they quietly undo the treatment.

                ## Milestones
                1. A full list of prescribed medicines, over-the-counter remedies and supplements written down.
                2. A pharmacist or clinician asked which of them interact with iron or affect B12.
                3. A spacing plan for any medicine that should not be taken at the same time as iron.
                4. The list kept with your results log and updated when anything changes.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every current medicine and supplement has been checked by a pharmacist for iron or B12 interactions, with any spacing advice written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a list of every medicine, remedy and supplement you take"
                - "Ask a pharmacist which ones interact with iron or lower B12"
                - "Write down the spacing advice for each interacting medicine"
                - "Recheck the list with the pharmacist after any medicine change @recurring(yearly)"
            - name: Daily iron tablet routine
              description: |-
                ## Purpose
                Oral iron only works if it is taken consistently for months, and doses are usually forgotten rather than refused. Tying the tablet to a fixed daily cue, with the timing your clinician or pharmacist suggested around food and drinks, makes it automatic and gives you a record if progress is slower than expected.

                ## Milestones
                1. A daily time chosen that fits the timing advice you were given.
                2. The tablets stored where you will see them at that time.
                3. A simple tick record running for at least eight weeks.
                4. Missed days counted and mentioned at the next retest.

                ## Notes
                Start from the **Habit tracker** template. If your plan is every other day rather than daily, set the tracker up that way.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A tick record shows the iron taken as prescribed on at least nine days in ten across eight weeks."
                cadence: rolling
              tasks:
                - "Choose a daily time that matches the timing advice you were given"
                - "Set up a habit tracker for the iron tablet"
                - "Put the tablets next to something you use at that time each day"
                - "Take the iron as agreed and tick it off @recurring(daily)"
            - name: Spacing iron from tea, coffee and calcium
              description: |-
                ## Purpose
                Tea, coffee, milk, calcium supplements and antacids can each cut the iron absorbed from a tablet or meal, and many people take their iron with breakfast tea without knowing. Rearranging the day so the tablet sits well apart from these is a free way to get more out of the same treatment.

                ## Milestones
                1. Your usual times for tea, coffee, dairy and any calcium or antacid written down.
                2. The gap your pharmacist suggests between these and iron noted.
                3. A daily timetable that keeps the tablet clear of them.
                4. Two weeks of the new timetable followed without strain.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written daily timetable keeps the iron tablet apart from tea, coffee, dairy and calcium, followed for two weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down when you normally drink tea, coffee and milk"
                - "Ask the pharmacist how long to leave between them and the iron"
                - "Move your tablet or your first cup so they no longer overlap"
                - "Pin the new daily timetable where you make drinks"
            - name: Oral iron side effect log
              description: |-
                ## Purpose
                Constipation, nausea, stomach cramps and diarrhoea are the main reasons people stop iron early, often without telling anyone. A short weekly note of what you notice gives your clinician the evidence to change the form, timing or schedule, which usually solves the problem without abandoning treatment.

                ## Milestones
                1. A log started on the first day of treatment.
                2. Bowel changes, nausea and stomach pain scored each week.
                3. Anything that helped, such as taking it later or with a small snack if advised, noted.
                4. The log taken to the first retest appointment.

                ## Notes
                Do not quietly stop. Ask about a different preparation or schedule first; there are several options.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly side effect log covering the first eight weeks of treatment is brought to the first retest."
                cadence: rolling
              tasks:
                - "Start a side effect page in your results log"
                - "Note bowel changes, nausea and stomach pain for the week @recurring(weekly:fri)"
                - "Write down anything that made the side effects easier"
                - "Call the pharmacist if side effects make you want to stop"
            - name: Retest schedule until levels recover
              description: |-
                ## Purpose
                Treatment without retesting is guesswork: you cannot tell whether iron is being absorbed, whether stores are refilling or whether something else is going on. Keeping each retest booked ahead, on the intervals your clinician set, means a stall is spotted within weeks rather than at next year's check-up.

                ## Milestones
                1. The retest intervals your clinician wants written down.
                2. The next retest booked before the current one is done.
                3. Each result compared with the previous one in your log.
                4. A clear stop point agreed: the result that ends active treatment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every retest your clinician requested has happened within two weeks of its due date, and each result is in the log."
                cadence: rolling
              tasks:
                - "Write the retest intervals your clinician wants in your plan"
                - "Book the next retest before the current one is done"
                - "Check the next retest is booked and the form is ready @recurring(monthly:3)"
                - "Ask for a call back if a retest shows no improvement"
            - name: Monthly energy and breathlessness score
              description: |-
                ## Purpose
                Blood results come every few months, but how you feel changes week to week and is what you actually care about. A monthly score for energy, breathlessness, concentration and exercise tolerance, kept beside the results, shows whether the numbers and your daily life are moving together, which is useful if they are not.

                ## Milestones
                1. Four questions chosen and scored from 1 to 10 each month.
                2. A simple benchmark recorded, such as how many flights of stairs before stopping.
                3. Six months of scores in one place.
                4. Any gap between improving bloods and persistent tiredness raised with your clinician.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scores are recorded beside your blood results."
                cadence: rolling
              tasks:
                - "Pick four things to score: energy, breathlessness, focus and exercise"
                - "Choose a repeatable benchmark such as stairs climbed without stopping"
                - "Score energy, breathlessness, focus and the benchmark @recurring(monthly:12)"
                - "Raise persistent tiredness despite better results with your clinician"
            - name: B12 injection appointment cycle
              description: |-
                ## Purpose
                B12 injections only work if they arrive on time, and gaps between appointments are a common cause of symptoms creeping back. Knowing your interval, booking the next injection as you leave, and noting how you feel near the end of each cycle keeps treatment continuous and gives evidence if the interval needs reviewing.

                ## Milestones
                1. Your injection interval confirmed and written in your plan.
                2. The next injection always booked before leaving the current one.
                3. Symptoms in the last fortnight of each cycle noted.
                4. The interval reviewed with your clinician after a year of records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No injection in the past year was more than a week late, and end-of-cycle symptoms are recorded for each."
                cadence: rolling
              tasks:
                - "Confirm your injection interval with the practice nurse"
                - "Book the next injection before leaving each appointment"
                - "Confirm the next injection date is in your diary @recurring(monthly:8)"
                - "Note any symptoms returning in the last two weeks of each cycle"
            - name: Supplement restock and storage check
              description: |-
                ## Purpose
                Running out of tablets is the quiet reason many courses stall at week six. A monthly count, a reorder point and safe storage away from children (iron tablets are a serious poisoning risk for small children) keep the supply steady and the household safe.

                ## Milestones
                1. A reorder point set, such as two weeks of tablets left.
                2. The supply route confirmed: repeat prescription, pharmacy or shop.
                3. Tablets stored in a locked or high cupboard if children visit or live with you.
                4. No gap in supply over three months.

                ## Notes
                Iron overdose is dangerous for young children. Treat iron tablets like any other medicine and keep them out of reach.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months pass with no gap in supply and tablets stored out of children's reach."
                cadence: rolling
              tasks:
                - "Set a reorder point of two weeks' supply"
                - "Move iron tablets to a high or locked cupboard"
                - "Count tablets left and reorder at the reorder point @recurring(monthly:20)"
                - "Check expiry dates on any spare packs"
            - name: Weekly iron-rich meal plan
              description: |-
                ## Purpose
                Food rarely fixes established iron deficiency on its own, but it helps tablets along and helps stop levels falling again afterwards. Planning the week so each main meal has an iron source and something with vitamin C beside it turns good intentions into a shopping list.

                ## Milestones
                1. A list of iron-rich meals your household already eats.
                2. Each main meal in the plan paired with a vitamin C source such as peppers, citrus or tomatoes.
                3. The shopping list built from the plan.
                4. Four weeks of plans kept to see which meals stick.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans with an iron source and a vitamin C pairing at each main meal."
                cadence: rolling
              tasks:
                - "List six iron-rich meals your household already likes"
                - "Pair each meal with a vitamin C food"
                - "Plan the week's main meals with an iron source in each @recurring(weekly:sun)"
                - "Build the shopping list straight from the plan"
            - name: Yearly blood count after recovery
              description: |-
                ## Purpose
                Relapse is common after iron deficiency, especially when the cause, such as heavy periods or a restricted diet, has not gone away. A yearly blood count and ferritin, arranged rather than waited for, catches a fall in stores before tiredness returns and before haemoglobin drops.

                ## Milestones
                1. Your clinician asked whether a yearly check suits your risk.
                2. The check tied to a fixed month you will remember.
                3. Each year's result added to the log.
                4. Early signs of a slide back discussed before treatment is needed again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A blood count and ferritin have been done within the last thirteen months and added to the log."
                cadence: cyclic
              tasks:
                - "Ask your clinician whether a yearly ferritin check suits you"
                - "Pick a month to tie the yearly check to"
                - "Request the yearly blood count and ferritin @recurring(yearly)"
                - "Compare the result with last year before the follow-up chat"
            - name: Haem and non-haem iron food sources
              description: |-
                ## Purpose
                Iron from meat and fish (haem iron) is absorbed far more readily than iron from beans, greens, grains and fortified foods (non-haem iron), so two meals with the same iron on the label can do very different jobs. Knowing which is which helps you plan meals that actually move your stores.

                ## Milestones
                1. Ten foods you eat listed as haem or non-haem sources.
                2. Rough iron content per usual portion noted from a reliable food table.
                3. Three easy swaps identified that raise iron without a new diet.
                4. Your notes kept with the meal plan.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal table of ten foods marked haem or non-haem with portion iron content, plus three swaps chosen."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a food composition table from a health service or dietetic body"
                - "Mark ten foods you eat as haem or non-haem"
                - "Note the iron in a usual portion of each"
                - "Pick three swaps you would actually make this month"
            - name: Absorption boosters and blockers in everyday meals
              description: |-
                ## Purpose
                Vitamin C, and meat or fish in the same meal, can several times increase how much plant iron you absorb, while tea, coffee, calcium and the phytates in bran and some wholegrains reduce it. Learning these few rules lets you change pairings and timing rather than the whole menu.

                ## Milestones
                1. The main boosters and blockers listed from a reliable source.
                2. Your usual breakfast, lunch and dinner checked against the list.
                3. Two pairings changed, such as orange juice instead of tea with a fortified cereal.
                4. A one-line rule written for the kitchen wall.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your three usual meals have been checked for boosters and blockers and two pairings changed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the main absorption boosters and blockers from a health service source"
                - "Check your usual three meals against the list"
                - "Change two pairings so vitamin C sits beside plant iron"
                - "Write a one-line pairing rule for the kitchen"
            - name: Iron deficiency versus other anaemias
              description: |-
                ## Purpose
                Not all anaemia is low iron. B12 or folate deficiency, long-term inflammation, kidney disease and inherited traits such as thalassaemia all lower haemoglobin, and iron tablets will not help most of them. Understanding the main types, and what clues such as cell size point to, explains why your clinician may order more tests.

                ## Milestones
                1. The main types of anaemia listed with one key feature each.
                2. Small, normal and large red cell size linked to the types they usually suggest.
                3. Your own results matched to the most likely type, as a question for your clinician.
                4. The reason for any extra tests you have been offered understood.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the main anaemia types, with your own type confirmed by your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service overview of the types of anaemia"
                - "Write one key feature for each type on a single page"
                - "Find the MCV on your report and note what it suggests"
                - "Ask your clinician to confirm which type you have"
            - name: Reading iron supplement labels
              description: |-
                ## Purpose
                Supplement packs list their iron content in confusing ways: the salt (ferrous sulfate, fumarate, gluconate, bisglycinate) and the elemental iron inside it are different numbers. Learning to read a label means you can compare a shop product against what you were prescribed, and ask your pharmacist the right question before switching.

                ## Milestones
                1. The difference between the iron salt weight and elemental iron understood.
                2. The elemental iron in your current product found on the label.
                3. Two other products compared on the same basis.
                4. Any proposed switch checked with your pharmacist or clinician first.

                ## Notes
                Multivitamins with iron usually contain far less than a treatment product. Never double up without checking.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your current product's elemental iron is recorded and two alternatives compared, with any switch approved by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the elemental iron figure on your current product label"
                - "Compare two other products on elemental iron, not salt weight"
                - "Write down which salt form each product uses"
                - "Ask the pharmacist before switching to any of them"
            - name: Understanding B12 and folate deficiency
              description: |-
                ## Purpose
                Low B12 can cause nerve symptoms such as tingling, unsteadiness and memory problems as well as tiredness, sometimes before anaemia shows on a blood count. Knowing the common causes, from diet and medicines to absorption problems, and why folate is often checked alongside, helps you follow the plan and notice what matters.

                ## Milestones
                1. The main causes of low B12 and low folate listed.
                2. Nerve and mood symptoms linked to B12 noted so they are reported, not dismissed.
                3. The reason B12 is usually checked before folate is treated understood.
                4. Your own likely cause discussed with your clinician.

                ## Notes
                Treating low folate alone when B12 is also low can mask the B12 problem, which is why clinicians check both.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of B12 and folate causes and symptoms, with your own likely cause confirmed by a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service page on B12 and folate deficiency"
                - "List the nerve and mood symptoms linked to low B12"
                - "Note which of your medicines or diet habits could affect B12"
                - "Ask your clinician what is behind your own low B12 or folate"
            - name: Pacing activity while haemoglobin recovers
              description: |-
                ## Purpose
                With low haemoglobin, the heart works harder to deliver oxygen, so the usual run, gym class or heavy shift can leave you wiped out for days. Pacing, with lighter versions of what you normally do and a gradual return as results improve, keeps you moving without crashing.

                ## Milestones
                1. Your clinician asked what level of activity is sensible for now.
                2. A lighter version of each usual activity written down.
                3. A return plan linked to improving results and how you feel.
                4. Four weeks of paced activity logged without a crash day.

                ## Notes
                Chest pain, fainting or breathlessness at rest during activity are red flags, not a sign to push through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written paced activity plan agreed with a clinician and followed for four weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician what activity level is sensible right now"
                - "Write a lighter version of each activity you normally do"
                - "Link each step back up to a result or energy score"
                - "Note any day you overdid it and what you did beforehand"
            - name: Comparing fortified cereals, breads and plant milks
              description: |-
                ## Purpose
                Fortified breakfast cereals, some breads and many plant milks carry added iron or B12, and the amounts differ widely between brands that look identical on the shelf. Ten minutes comparing labels in your usual shop can add steady iron and B12 to food you already buy.

                ## Milestones
                1. Labels checked for three cereals, two breads and two plant milks you might buy.
                2. Iron and B12 per serving recorded for each.
                3. One higher-fortified option chosen in each category.
                4. The choices added to your regular shopping list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Fortified products compared on iron and B12 per serving, with one swap made in each of three categories."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Photograph labels of the cereals, breads and plant milks you buy"
                - "Record iron and B12 per serving for each"
                - "Choose the best-fortified option you would actually eat"
                - "Add the chosen products to your regular shopping list"
            - name: Choosing an iron supplement form with your pharmacist
              description: |-
                ## Purpose
                If you are buying iron yourself or switching because of side effects, the options include several salt forms, liquids, slow-release and combined products, and they are not all equivalent. Comparing two or three with a pharmacist on elemental iron, side effects, cost and how they fit your other medicines leads to a choice you can keep taking.

                ## Milestones
                1. Two or three products shortlisted on the pharmacist's advice.
                2. Each compared on elemental iron, likely side effects, cost per month and interactions.
                3. One chosen and the reason written down.
                4. Your clinician told which product you are taking.

                ## Notes
                Start from the **Purchase decision** template. Slow-release products are often gentler but may release iron past where it is best absorbed; ask whether they suit you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A supplement chosen from a pharmacist shortlist, with the comparison and reason recorded and your clinician informed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask a pharmacist for two or three iron products that suit you"
                - "Compare them on elemental iron, side effects and monthly cost"
                - "Record the choice and the reason in a purchase decision page"
                - "Tell your clinician which product you are now taking"
            - name: Asking about alternate-day iron dosing
              description: |-
                ## Purpose
                Research on how the body regulates iron absorption has led some clinicians to suggest iron on alternate days or once a day rather than several times, which can mean fewer side effects with similar results. Whether it suits you depends on how low you are and how fast you need to recover, so it is a question to ask, not a change to make alone.

                ## Milestones
                1. Your current schedule and side effects summarised in two lines.
                2. Your clinician or pharmacist asked whether a different schedule would suit you.
                3. Their answer and any change recorded in your plan.
                4. The next retest used to check the new schedule is working.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clinician's decision on your iron schedule is recorded, with the following retest result logged against it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Summarise your current schedule and side effects in two lines"
                - "Ask your clinician whether a different dosing schedule would suit you"
                - "Update your treatment plan and habit tracker if the schedule changes"
                - "Compare the next result with the one before the change"
            - name: Deciding on an iron infusion
              description: |-
                ## Purpose
                An infusion can be offered when tablets are not tolerated, are not being absorbed, or levels need to rise quickly, for example before surgery or late in pregnancy. Weighing it properly means understanding why it is being suggested, the small risks, the practicalities and what happens if you continue with tablets instead.

                ## Milestones
                1. The reason an infusion is being considered written in one sentence.
                2. Benefits, risks and alternatives discussed with the clinician offering it.
                3. Practicalities known: where, how long, and whether you can drive afterwards.
                4. A decision recorded with your reasons.

                ## Notes
                Ask about the rare risk of skin staining if the drip leaks, and whether phosphate checks are needed if you might have repeat infusions.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded yes or no on an iron infusion, made after a documented discussion of reasons, risks and alternatives."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician to explain why an infusion is being offered now"
                - "Write down the risks and alternatives they describe"
                - "Find out where it happens, how long it takes and travel arrangements"
                - "Record your decision and the reasons behind it"
            - name: Switching when iron tablets do not suit you
              description: |-
                ## Purpose
                Persistent side effects, swallowing problems or no rise in results after several weeks are signs the current treatment is not working, not personal failures. Bringing a short record to your clinician lets them choose between a different form, a liquid, a new schedule, an infusion or further investigation.

                ## Milestones
                1. The problem stated clearly: side effects, swallowing or no improvement.
                2. Supporting evidence gathered from the side effect log and results log.
                3. Options discussed with your clinician and one chosen.
                4. A retest booked to check the new approach.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented switch to a new iron approach, agreed with a clinician and followed by a booked retest."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence on what is not working with the current tablets"
                - "Bring the side effect and results logs to the appointment"
                - "Ask which alternatives exist for someone in your situation"
                - "Book a retest for after the new approach has had time to work"
            - name: Tablets or injections for B12
              description: |-
                ## Purpose
                Low B12 from diet or some medicines can often be treated with tablets, while absorption problems such as pernicious anaemia usually need injections. If you have been offered one route and wonder about the other, a clear conversation about the cause and the evidence saves months of uncertainty.

                ## Milestones
                1. The likely cause of your low B12 confirmed.
                2. The reason for the chosen route explained by your clinician.
                3. Any preference you have, such as travel time to injections, discussed.
                4. The agreed route and its retest plan written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The B12 treatment route and its retest plan are recorded after a discussion of cause and options with your clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician what is causing your low B12"
                - "Ask why tablets or injections were chosen for that cause"
                - "Mention any practical preferences about the route"
                - "Write the agreed route and retest plan in your notes"
            - name: Weighing private finger-prick iron tests
              description: |-
                ## Purpose
                Home finger-prick kits from private labs promise ferritin and blood count results without an appointment, at a cost per test. They can be useful for keeping an eye on levels between clinical checks, but quality varies and results still need someone qualified to interpret them, so decide deliberately rather than on an advert.

                ## Milestones
                1. Two or three providers compared on accreditation, tests included and cost.
                2. Your clinician asked whether they would act on a private result.
                3. A decision made: use them, use them occasionally, or stick to clinical tests.
                4. If used, results added to the same log as clinical results with the source noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on private iron testing, made after comparing providers and asking your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare two or three private test providers on accreditation and price"
                - "Check which markers each kit actually measures"
                - "Ask your clinician whether they would act on a private result"
                - "Record your decision and how any results will be logged"
            - name: Iron-friendly breakfast swap
              description: |-
                ## Purpose
                Breakfast is often the meal with the most tea, coffee and milk, and so the one where iron absorption is lowest. Changing one breakfast, for example a fortified cereal with fruit and a juice instead of toast and tea, is a small, repeatable change that adds up over months.

                ## Milestones
                1. Your current breakfast and drink written down.
                2. One swap chosen that keeps the parts you enjoy.
                3. The swap made on at least five mornings a week for four weeks.
                4. The tea or coffee moved to mid-morning if that works for you.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A new iron-friendly breakfast eaten on at least five days a week for four weeks."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down what you usually have for breakfast and to drink"
                - "Choose one swap that adds iron and vitamin C"
                - "Buy what you need for the swap this week"
                - "Try moving the first tea or coffee to mid-morning"
            - name: Hair shedding and low ferritin questions
              description: |-
                ## Purpose
                Increased hair shedding is one of the most common reasons people ask for an iron test, and low ferritin is one of several possible links alongside thyroid problems, stress and recent illness. Preparing the right questions keeps the conversation focused and avoids months of guessing with supplements.

                ## Milestones
                1. When the shedding started and any events three months before it noted.
                2. Recent ferritin and thyroid results gathered if you have them.
                3. Your clinician asked what they think is contributing.
                4. A follow-up point agreed for whether shedding has settled.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A clinician has reviewed your hair shedding against recent results, with likely contributors and a follow-up point recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note when the shedding began and what happened three months earlier"
                - "Gather any recent ferritin and thyroid results"
                - "Ask your clinician which factors they think are involved"
                - "Photograph your parting monthly for three months to show change"
            - name: Preparing for an iron infusion appointment
              description: |-
                ## Purpose
                Infusion day is usually straightforward, but the appointment can run long with observation afterwards, and a few things are easier sorted beforehand. Knowing what to bring, how you will get home and what to watch for in the following days makes it a calm morning rather than a stressful one.

                ## Milestones
                1. The appointment time, place and expected length confirmed.
                2. Transport, food, drink and something to do arranged.
                3. Your medicines list and any allergy history ready to hand over.
                4. Aftercare advice written down, including which symptoms to report.

                ## Notes
                Many people are asked to stop oral iron for a period around an infusion. Check what applies to you.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The infusion is completed, with aftercare advice written down and a follow-up blood test date noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the time, place and expected length of the infusion"
                - "Arrange transport home and pack food, water and something to do"
                - "Ask whether to stop oral iron before and after the infusion"
                - "Write down the aftercare advice and when the follow-up blood test is due"
            - name: First follow-up blood test after starting treatment
              description: |-
                ## Purpose
                The first retest a few weeks into treatment is the earliest proof that iron or B12 is being absorbed and used. Preparing for it, with your tick record, side effect notes and questions, turns a quick result into a real check of whether the plan is working.

                ## Milestones
                1. The first retest done on the date your clinician set.
                2. Your adherence record and side effect notes summarised beforehand.
                3. The result compared with the baseline and discussed.
                4. The plan confirmed or changed, and the next retest set.
              priority: medium
              deadlineOffsetDays: 70
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first follow-up result is in the log, compared with baseline, and the plan confirmed or changed by a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count missed doses from your tracker since treatment started"
                - "Summarise side effects in two lines for the appointment"
                - "Ask how the result compares with your baseline"
                - "Write down whether the plan stays the same or changes"
            - name: Camera test preparation for anaemia investigation
              description: |-
                ## Purpose
                When iron deficiency has no obvious cause, especially in men and in women after the menopause, clinicians often recommend a gastroscopy, colonoscopy or both to look for a bleeding source. Good preparation, particularly following bowel prep instructions exactly and sorting medicines in advance, decides whether the test gives a clear answer first time.

                ## Milestones
                1. The tests booked and the instructions read the day they arrive.
                2. Medicines that need pausing, such as iron or blood thinners, checked with the endoscopy unit.
                3. Diet changes, bowel prep, transport and time off arranged.
                4. The findings and next steps written down before you leave.

                ## Notes
                Iron tablets are usually stopped for several days before a colonoscopy because they make the bowel harder to see. The unit's own instructions take priority.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The camera tests are completed with clear prep, and the findings and next steps are recorded."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the endoscopy instructions the day they arrive"
                - "Call the unit to check which medicines to pause, including iron"
                - "Arrange transport home and a day off afterwards"
                - "Ask for the findings and next steps in writing before leaving"
            - name: Correcting anaemia before a planned operation
              description: |-
                ## Purpose
                Going into surgery anaemic raises the chance of needing a transfusion and of a slower recovery, and many hospitals now check and treat it weeks ahead. If an operation is on the horizon, asking early about your blood count leaves time for iron to work, or for an infusion if time is short.

                ## Milestones
                1. The surgical team or pre-assessment clinic asked whether your blood count has been checked.
                2. Any anaemia flagged with enough lead time for treatment.
                3. A treatment plan agreed, tablets or infusion, with a retest before the operation date.
                4. The final pre-operation result recorded.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your blood count is checked and any anaemia treated with a retest done before the operation date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the pre-assessment clinic whether your blood count has been checked"
                - "Raise any known iron deficiency with the surgical team early"
                - "Agree whether tablets or an infusion fit the time available"
                - "Make sure a retest happens before the operation date"
            - name: Blood donation deferral and return
              description: |-
                ## Purpose
                Regular blood donors lose iron with every donation, and being turned away for low haemoglobin is a common first sign. Treating a deferral as a prompt to get checked, recover properly and then return at a sensible interval protects both your health and your ability to keep donating.

                ## Milestones
                1. The deferral reason and haemoglobin figure, if given, recorded.
                2. A check with your own clinician if the service recommends it.
                3. Your donation interval reviewed with the blood service on return.
                4. A return date set once levels have recovered.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "After a deferral, your levels are checked, a return date set and your donation interval reviewed with the blood service."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the deferral reason and any figure you were given"
                - "Ask the blood service whether you should see your own clinician"
                - "Book a check with your clinician if advised"
                - "Ask about a longer interval between donations when you return"
            - name: Finishing treatment with a maintenance plan
              description: |-
                ## Purpose
                Stopping treatment is a milestone, but without a plan the same cause often brings levels down again within a year or two. Ending with a written note of what caused it, what keeps it away and when to check again turns recovery into something that lasts.

                ## Milestones
                1. Your clinician confirms that treatment can stop and why.
                2. The cause and any ongoing risk written in two sentences.
                3. A maintenance plan agreed: diet, any ongoing supplement and retest timing.
                4. The early warning signs of a relapse listed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written maintenance plan, agreed with your clinician at the end of treatment, names the cause, the next check and relapse signs."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician to confirm treatment can stop and why"
                - "Write the cause and any ongoing risk in two sentences"
                - "Agree whether any ongoing supplement or retest is needed"
                - "Check how you feel against the relapse signs list @recurring(quarterly)"
            - name: Iron during pregnancy and after birth
              description: |-
                ## Purpose
                Pregnancy raises iron needs sharply, and haemoglobin is usually checked at booking and again later, with blood loss at birth adding a further dip. Knowing when checks happen, following any plan through to the weeks after birth and spotting symptoms early makes a hard few months a little easier.

                ## Milestones
                1. The pregnancy blood test schedule confirmed with your midwife or obstetrician.
                2. Each result and any treatment plan recorded in your log.
                3. A plan for after birth agreed, including whether a check is needed postnatally.
                4. Tiredness and breathlessness after birth raised rather than put down to a new baby alone.

                ## Notes
                Take only the supplements your maternity team agrees. Some multivitamins are not suitable in pregnancy.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All pregnancy iron checks are recorded and a postnatal check plan is agreed with the maternity team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your midwife when your blood count will be checked in pregnancy"
                - "Record each pregnancy result and any plan in your log"
                - "Agree a postnatal check plan before your due date"
                - "Tell your health visitor or GP if exhaustion after birth feels extreme"
            - name: Heavy periods behind low iron
              description: |-
                ## Purpose
                Heavy menstrual bleeding is one of the commonest causes of iron deficiency, and treating the iron without addressing the bleeding often means a cycle of tablets and relapse. Bringing evidence of how heavy your periods are to your clinician puts both the iron and the bleeding on the table.

                ## Milestones
                1. Two cycles recorded: days of bleeding, products used and any flooding or clots.
                2. Your clinician told that heavy periods may be behind the low iron.
                3. Options for reducing blood loss discussed or a referral made.
                4. The iron plan linked to whatever is done about the bleeding.

                ## Notes
                Many people underestimate heavy bleeding because it has always been normal for them. Changing protection every hour or two, or bleeding through at night, is worth raising.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two cycles of bleeding records are discussed with a clinician and a plan for both the bleeding and the iron is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record two cycles of bleeding days, products used and any flooding"
                - "Tell your clinician you think heavy periods are behind the low iron"
                - "Ask what can reduce the blood loss as well as replace the iron"
                - "Note how the iron plan will change if the bleeding improves"
            - name: Vegetarian and vegan iron and B12 plan
              description: |-
                ## Purpose
                Plant-based diets can provide enough iron with planning, but the iron is less readily absorbed and B12 is not reliably found in plant foods at all. A deliberate plan, built on fortified foods, pulses, seeds and a reliable B12 source, keeps your choice of diet from costing you energy.

                ## Milestones
                1. Your main iron sources each day listed and paired with vitamin C.
                2. A reliable B12 source chosen: fortified foods, a supplement or both, as your clinician or dietitian advises.
                3. A blood check of iron and B12 arranged if you have not had one.
                4. The plan reviewed after a year with fresh results.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plant-based plan naming daily iron sources and a reliable B12 source, with results checked within the year."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List your daily iron sources and the vitamin C food beside each"
                - "Choose a reliable B12 source with a dietitian or pharmacist"
                - "Ask for an iron and B12 check if you have not had one recently"
                - "Check stock of fortified foods or B12 supplements @recurring(monthly:24)"
            - name: Low iron in teenagers at home
              description: |-
                ## Purpose
                Teenagers, especially those who have started periods, are growing fast, training hard or cutting out meat, are at real risk of low iron, and it often shows up as falling grades or being labelled lazy. Parents can help by noticing the pattern, getting it checked and making iron-friendly food easy without turning meals into a battle.

                ## Milestones
                1. Signs noted over a few weeks: tiredness, low mood, poor concentration, breathlessness at sport.
                2. An appointment arranged with the teenager's agreement and their own say in it.
                3. Any treatment plan understood by the teenager, not just the parent.
                4. Easy iron-rich snacks and meals available at home.

                ## Notes
                Older teenagers may want to see the clinician alone for part of the appointment. Respect that and ask what they would like you to know.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "The teenager has had their iron checked and understands any plan, with iron-friendly food available at home."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note the signs you have seen over the last few weeks"
                - "Talk with your teenager about getting a blood test"
                - "Book the appointment and let them lead part of it"
                - "Stock three iron-rich snacks they will actually eat"
            - name: Low ferritin in runners and endurance athletes
              description: |-
                ## Purpose
                Endurance training increases iron losses through sweat, the gut and red cells breaking down from foot strike, and hard sessions can briefly reduce absorption. Athletes with low ferritin often see performance drop before any anaemia shows, so regular checks and a plan agreed with a sports doctor or dietitian protect both health and training.

                ## Milestones
                1. A baseline ferritin and blood count taken during a normal training block.
                2. Training load, diet and any heavy periods reviewed with a clinician or sports dietitian.
                3. A plan agreed for supplements, if any, and timing around training.
                4. Checks scheduled around the season rather than only when performance dips.

                ## Notes
                Supplementing iron without testing can cause harm. Get the levels checked and treat on advice, not on a coach's hunch.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A baseline ferritin result and an agreed plan with a clinician or sports dietitian are recorded, with seasonal checks scheduled."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Ask for a ferritin and blood count during a normal training block"
                - "Bring your weekly training volume and diet notes to the appointment"
                - "Agree whether iron timing should sit around training sessions"
                - "Book a ferritin check ahead of each race season @recurring(yearly)"
            - name: Iron monitoring for regular blood donors
              description: |-
                ## Purpose
                Frequent donors can drain their iron stores slowly even when the pre-donation haemoglobin check passes each time. Keeping your own record of donation dates and any results, and asking about ferritin testing, lets you keep giving without wearing yourself down.

                ## Milestones
                1. A log of every donation date and any haemoglobin result given.
                2. The blood service asked whether ferritin testing is available to you.
                3. Your interval reviewed if you notice tiredness or a borderline result.
                4. A clinician check arranged if symptoms persist between donations.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A complete donation log with results, and a ferritin check or interval review done in the past year."
                cadence: rolling
              tasks:
                - "Start a log of past donation dates from your donor record"
                - "Ask the blood service whether they test ferritin"
                - "Add each donation date and result to the log @recurring(quarterly)"
                - "Ask about a longer interval if results sit near the cut-off"
            - name: Helping an older relative with anaemia
              description: |-
                ## Purpose
                In older adults, anaemia often has more than one cause, from diet and medicines to kidney function and slow blood loss, and tiredness is easily blamed on age. A family member who keeps the results, medicines and appointments together, and notices changes such as falls or confusion, makes treatment far more likely to work.

                ## Milestones
                1. Your relative's agreement to help, and access to results where they allow it.
                2. A list of their medicines and supplements checked with their pharmacist for iron and B12 effects.
                3. Their appointments and retests in one shared calendar.
                4. Changes such as falls, breathlessness or confusion reported promptly.

                ## Notes
                Ask your relative how involved they want you to be. Helping with organisation is different from taking over decisions.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your relative's anaemia results, medicines and retest dates are kept in one place they can see, with every retest attended."
                cadence: rolling
              tasks:
                - "Ask your relative what help they would like with their anaemia care"
                - "Put their retest and review dates into a shared calendar"
                - "Fill their weekly pill organiser and check the iron is in it @recurring(weekly:sat)"
                - "Report any falls, confusion or new breathlessness to their clinician"
            - name: Lifelong monitoring after absorption problems
              description: |-
                ## Purpose
                Coeliac disease, weight loss surgery, inflammatory bowel disease and removal of part of the stomach or bowel can all reduce iron and B12 absorption for life. A standing monitoring plan, agreed with your specialist team and kept even when you feel well, stops deficiency from building quietly for years.

                ## Milestones
                1. The cause of poor absorption and the nutrients at risk written down.
                2. The blood tests and their intervals agreed with your specialist team.
                3. Any long-term supplements listed with who prescribes them.
                4. Results from every check added to the same log.

                ## Notes
                After weight loss surgery, the monitoring schedule from your bariatric team usually covers more than iron and B12. Keep to their full list.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An agreed monitoring schedule is written down and every check in the past year has been done and logged."
                cadence: rolling
              tasks:
                - "Write down which nutrients your condition puts at risk"
                - "Ask your specialist team for the monitoring tests and intervals"
                - "List each long-term supplement and who prescribes it"
                - "Check the next monitoring bloods are booked @recurring(monthly:16)"
            - name: Living with pernicious anaemia
              description: |-
                ## Purpose
                Pernicious anaemia is an autoimmune condition that stops B12 being absorbed from food, so treatment is usually lifelong and stopping it lets nerve damage creep back. Understanding the diagnosis, keeping injections regular and knowing which symptoms suggest the interval needs reviewing makes it a manageable part of life.

                ## Milestones
                1. The diagnosis confirmed in writing, including the tests it was based on.
                2. The lifelong nature of treatment understood and recorded.
                3. Symptoms that suggest a review is needed listed.
                4. Any associated checks your clinician recommends, such as thyroid tests, scheduled.

                ## Notes
                Patient support groups for pernicious anaemia can help with practical questions. Use them alongside, not instead of, your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "A written summary of your pernicious anaemia diagnosis, treatment plan and review triggers, with associated checks booked."
                cadence: rolling
              tasks:
                - "Ask for the tests behind your diagnosis to be written in your record"
                - "Write down the symptoms that should prompt a treatment review"
                - "Ask whether thyroid or other related checks are recommended"
                - "Review symptoms between injections in your log @recurring(monthly:26)"
            - name: Haematology referral when levels will not recover
              description: |-
                ## Purpose
                If iron or B12 levels stay low despite taking treatment properly, or results do not fit a simple deficiency, a haematology opinion can find what has been missed. Going in with a clear timeline, all results and a note of every treatment tried makes a short specialist appointment count.

                ## Milestones
                1. The reason for referral agreed with your clinician.
                2. A one-page timeline of symptoms, treatments and results prepared.
                3. Questions for the haematologist written in priority order.
                4. The specialist's conclusions and plan recorded after the appointment.

                ## Notes
                Ask the agent to draft the one-page timeline from your results log, then check every figure against the original reports.
              priority: high
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A referral pack with a one-page timeline is taken to haematology and their conclusions are written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether a haematology referral is appropriate"
                - "Ask the agent to draft a one-page timeline from your results log"
                - "Check every figure on the timeline against the original reports"
                - "Write the haematologist's conclusions down after the appointment"
            - name: Inherited anaemia traits and family testing
              description: |-
                ## Purpose
                Traits such as thalassaemia or sickle cell can cause small red cells or mild anaemia that looks like iron deficiency but does not respond to iron. If your results do not fit, or your family comes from a region where these traits are common, knowing your status prevents unnecessary iron and matters for family planning.

                ## Milestones
                1. Your clinician asked whether a haemoglobin variant test is relevant for you.
                2. Your result and what it means recorded.
                3. Relatives told, where appropriate, so they can consider testing.
                4. Partner testing discussed if you are planning a family.

                ## Notes
                Carrying a trait is usually not an illness in itself, but it changes how your blood results should be read.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your haemoglobin variant status is known and recorded, and relatives or a partner have been informed where relevant."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask whether a haemoglobin variant test fits your results or background"
                - "Record your result and what it means for future blood tests"
                - "Decide which relatives should hear about the result"
                - "Raise partner testing if you are planning to have children"
---

# Anaemia & Iron Deficiency

This area is for anyone whose tiredness, breathlessness or pale results have pointed at low iron, B12 or folate, and for people who keep slipping back into it. It starts with the foundations (a clear symptom record, the right blood tests, copies of the results and a cause actually looked for), then the routines that carry a treatment plan through to recovery, the knowledge that makes tablets and food work harder, the decisions about supplements, infusions and injections, the appointments worth preparing for, the situations that change the picture such as pregnancy, heavy periods or a plant-based diet, and finally the longer-term work of absorption problems, pernicious anaemia and inherited traits.

What repeats is a daily tablet routine, a weekly side effect note while on oral iron, a monthly energy score and restock check, retests on the schedule your clinician sets, and a yearly blood count once you have recovered. The Metrics log, Habit tracker, Purchase decision and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
