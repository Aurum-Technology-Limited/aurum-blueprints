---
id: physical-health.bone-density-osteoporosis
name: Bone Density & Osteoporosis
description: "A fracture risk estimate, a bone density scan and a treatment plan you understand, plus the medicine, calcium, strength, balance and falls routines that protect bones in later life."
category: personal
version: 1.0.0
tags: [physical-health, bone-density-osteoporosis, retiree, everyone, osteoporosis, fracture-risk, bone-scan, falls-prevention]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - operational-checklist
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Bone Density & Osteoporosis
          description: "Assessing fracture risk, arranging bone density scans, and following treatment, calcium and strength advice to protect bones in later life."
          projects:
            - name: Fracture risk factor inventory
              description: |-
                ## Purpose
                Fracture risk is shaped by far more than bone density: age, a previous broken bone, a parent who broke a hip, long courses of steroid tablets, smoking, heavy drinking, low body weight and conditions such as rheumatoid arthritis all count. Listing which apply to you on one page, before any appointment, gives your clinician what the risk calculators ask for and shows whether a scan is worth requesting now.

                ## Milestones
                1. A one-page list of recognised fracture risk factors with each marked yes, no or unsure.
                2. Any steroid courses of three months or longer noted with dates, as written on the prescription.
                3. Family history of hip fracture or osteoporosis checked with a parent or sibling where possible.
                4. The list saved with your health records and ready for your next appointment.

                ## Notes
                The list is for discussion, not self-diagnosis. Keep the unsure answers: your clinician can often check them from your record.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page risk factor list, with every item marked yes, no or unsure, is filed and has been shown to a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every fracture risk factor you know applies to you"
                - "Ask a parent or older relative whether anyone in the family broke a hip"
                - "Find the dates of any long steroid courses in your prescription history"
                - "Bring the finished list to your next appointment"
            - name: Record of broken bones since age 50
              description: |-
                ## Purpose
                A bone that breaks in a fall from standing height or less, such as a wrist after tripping on a kerb, is often the first sign of osteoporosis. Many people never mention old fractures because they healed, so writing each one down with the year, the bone and how it happened turns forgotten injuries into evidence your clinician can act on.

                ## Milestones
                1. Every fracture since about age fifty listed with the bone, the year and the cause.
                2. Each one marked as a low-trauma fall or a high-energy injury such as a car accident.
                3. Any fracture X-ray reports or discharge letters located and filed.
                4. The list added to your bone health records folder.

                ## Notes
                Include fractures you were never treated for if an X-ray later showed them, such as a spinal fracture found by chance on a chest X-ray.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written fracture history since age fifty, with the cause and year of each break, sits in your bone health folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every broken bone you remember since about age fifty"
                - "Note for each one whether it came from a simple fall"
                - "Request copies of missing fracture letters from your practice"
                - "Add the fracture list to your bone health folder"
            - name: Ten-year fracture risk estimate with your clinician
              description: |-
                ## Purpose
                Clinicians often use a fracture risk calculator, such as FRAX in many countries, that combines age, sex, weight, height and risk factors into the probability of a major fracture over the next ten years, with or without a scan result. Going through it with your clinician, rather than alone online, means the result is read against your country's treatment thresholds and leads to a clear next step.

                ## Milestones
                1. Your height, weight and risk factor list ready before the appointment.
                2. Ten-year probabilities for a major osteoporotic fracture and a hip fracture recorded from your clinician's tool.
                3. Your clinician's view written down: reassure, scan or treat.
                4. The date of the calculation noted so it can be repeated if your situation changes.

                ## Notes
                The calculators are public, but the thresholds for action differ between countries and guidelines. Treat a home calculation as a question to bring, not an answer.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Ten-year major and hip fracture probabilities from your clinician's tool are recorded, with the agreed next step and the date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Weigh yourself in the morning and note the figure for the appointment"
                - "Ask your clinician which fracture risk tool your service uses"
                - "Write down both ten-year percentages the tool gives"
                - "Record whether the next step is reassurance, a scan or treatment"
            - name: Asking for a bone density scan referral
              description: |-
                ## Purpose
                Bone density scans, known as DXA, measure the hip and spine and are the standard test for diagnosing osteoporosis, but in many health systems it is offered only when risk factors or a fracture justify it. Making a clear request, with your risk list and fracture history in hand, turns a vague worry into either a referral or a recorded reason why one is not needed yet.

                ## Milestones
                1. An appointment booked specifically to discuss bone health.
                2. Your risk factor list and fracture history shared at that appointment.
                3. A referral for a DXA scan made, or the reason for not referring written down.
                4. If a scan is declined, a date agreed for reassessing the question.

                ## Notes
                Private scans exist in some countries, but a result with no clinician to interpret and act on it is of limited use. Ask who will read it before paying.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A DXA referral has been made, or a written reason for not referring and a reassessment date are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment and say it is about bone health and fracture risk"
                - "Prepare two sentences explaining why you are asking for a scan"
                - "Ask directly whether you meet the local criteria for a DXA scan"
                - "Write down the decision and any date to revisit it"
            - name: Getting ready for your first DXA scan
              description: |-
                ## Purpose
                The scan itself is quick and painless, usually ten to twenty minutes lying still on a padded table, but a few practical details affect it. Scan units commonly ask you to skip calcium supplements on the day, wear clothes without metal and mention any recent barium test or nuclear medicine scan, and knowing this in advance avoids a rebooked appointment.

                ## Milestones
                1. The scan unit's own preparation instructions read and followed.
                2. Clothing without zips, buckles or underwiring chosen for the day.
                3. The machine and the sites scanned noted for future comparison.
                4. The date when results will reach your clinician written down.

                ## Notes
                Where your scan unit's instructions differ from anything general, follow the unit. Ask whether they measure your height, since that figure is useful later.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The DXA scan is completed on the booked date, with the machine, the sites scanned and the expected result date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the preparation letter from the scan unit in full"
                - "Lay out metal-free clothes the night before the scan"
                - "Ask the radiographer which sites were scanned and on which machine"
                - "Note when and how the result will reach your clinician"
            - name: Reading your DXA report, T-scores and Z-scores
              description: |-
                ## Purpose
                A DXA report gives a T-score comparing your bone density with a healthy young adult and a Z-score comparing it with people of your own age and sex. By the usual definition a T-score of minus 2.5 or lower falls in the osteoporosis range and one between minus 1 and minus 2.5 is called osteopenia, but the label matters less than what your clinician does with it alongside your fracture risk.

                ## Milestones
                1. Your T-scores and Z-scores for each site copied into your records.
                2. The lowest site identified and its category noted as the report states it.
                3. Questions asked about any site the report could not measure reliably, such as a spine with arthritis.
                4. Your clinician's interpretation and plan written beside the numbers.

                ## Notes
                Spinal arthritis and old fractures can make the spine read falsely high, which is one reason the hip result often carries more weight. Ask rather than assume.
              priority: high
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every T-score and Z-score from your report is recorded, with your clinician's interpretation and plan written beside them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a copy of the full DXA report, not just the summary letter"
                - "Copy each T-score and Z-score into your records"
                - "Write three questions about the report for your clinician"
                - "Record the plan your clinician agrees from the result"
            - name: Checks for secondary causes of bone loss
              description: |-
                ## Purpose
                In a sizeable share of people with osteoporosis, especially men and younger adults, something else is driving the bone loss: low vitamin D, an overactive thyroid or parathyroid gland, coeliac disease, low testosterone, kidney problems or a long-term medicine. Asking whether these have been looked for, usually with a few blood tests, matters because treating the cause can change which bone treatment suits you.

                ## Milestones
                1. Your clinician asked which secondary causes have already been considered.
                2. The blood tests requested, for example calcium, vitamin D, kidney and thyroid function, completed.
                3. Results recorded with the date and any value flagged as out of range.
                4. Any cause found added to your treatment plan conversation.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The secondary cause blood tests your clinician requested are completed, with results and any flagged values recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician which other causes of bone loss have been ruled out"
                - "Book the blood tests your clinician requests"
                - "Check whether a morning or fasting sample is needed"
                - "File the results with their date in your bone health folder"
            - name: Agreeing an osteoporosis treatment plan
              description: |-
                ## Purpose
                After a diagnosis or a high fracture risk result, the choice is rarely just tablets or no tablets: it covers which medicine, how it is given, how long before a review and what you do alongside it. Going in with your questions and leaving with a written plan avoids the common outcome of a prescription that is never started because nobody explained why it mattered.

                ## Milestones
                1. Your goals and worries written down before the appointment.
                2. The options your clinician offers listed, with how and how often each is taken.
                3. A choice made, or a date set to decide after reading more.
                4. A written plan covering the medicine, calcium and vitamin D, exercise and the next review date.

                ## Notes
                Bring someone with you if decisions feel rushed. Asking for the absolute reduction in fracture risk, not just the relative one, makes the choice easier to weigh.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page treatment plan naming the chosen option and the next review date is agreed with your clinician and filed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what worries you most about starting bone treatment"
                - "Ask how each option is taken and how long it usually lasts"
                - "Ask what the next review will check and when it is"
                - "Record the agreed plan on one page in your bone folder"
            - name: Bone health records folder
              description: |-
                ## Purpose
                Scan reports, blood results, fracture letters and medicine start dates usually end up in different drawers and inboxes, and comparing two scans years apart is impossible once the first report is lost. One folder, paper or digital, with a running table of the key numbers makes every review faster and every new clinician better informed.

                ## Milestones
                1. A folder holding every DXA report, bone-related blood result and fracture letter you can find.
                2. A table listing scan dates, machine, sites, T-scores and your height at each scan.
                3. Bone medicine start dates, changes and stops listed in date order.
                4. A copy shared with whoever might speak for you in an emergency.

                ## Notes
                Start from the **Metrics log** template for the table of numbers. Keep the original reports too: the table is a summary, not a replacement.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bone health folder holds every scan report and letter, with a summary table of dates, T-scores and medicines kept current."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every bone scan report and letter you already have"
                - "Set up a table for scan dates, sites and T-scores"
                - "List bone medicine start and stop dates in order"
                - "Add any new bone results and letters to the folder @recurring(quarterly)"
            - name: Accurate height measurement baseline
              description: |-
                ## Purpose
                Losing height is one of the few visible signs of spinal fractures, which are often painless and go undiagnosed for years. A careful measurement now, taken barefoot against a wall the same way each year, gives you a baseline, and a loss of a few centimetres over time, or a couple within a single year, is worth reporting.

                ## Milestones
                1. Your height measured barefoot against a flat wall with a set square or hardback book on your head.
                2. The result recorded to the nearest half centimetre, with the date.
                3. Your tallest remembered adult height, from an old record or document, noted for comparison.
                4. A yearly remeasurement set for the same month.

                ## Notes
                Measure at the same time of day each year. Everyone is slightly taller in the morning than in the evening.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated barefoot height measurement and your tallest adult height are recorded, with a yearly remeasure scheduled."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Measure your height barefoot against a wall with someone helping"
                - "Find your tallest recorded adult height in old documents"
                - "Record both heights in your bone health folder"
                - "Remeasure your height against the same wall @recurring(yearly)"
            - name: Weekly bone tablet routine
              description: |-
                ## Purpose
                Weekly osteoporosis tablets such as alendronate or risedronate only work if they are absorbed, and the leaflet usually asks for them on an empty stomach with plain water, staying upright and not eating for a set time afterwards. Building the routine around one fixed morning makes missed or wrongly taken doses far less likely, and many people quietly stop these tablets within a year.

                ## Milestones
                1. A fixed weekday and time chosen for the tablet.
                2. The leaflet's instructions on water, posture and waiting time written on a card by the kettle or bed.
                3. The missed dose rule from the leaflet or pharmacist written on the same card.
                4. Eight consecutive weeks taken on the chosen day.

                ## Notes
                Follow your own leaflet and pharmacist exactly, since instructions differ between products. Report heartburn, pain on swallowing or chest pain rather than stopping without a word.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly bone tablets are taken on the chosen day for eight consecutive weeks, following a written card of the leaflet's instructions."
                cadence: rolling
              tasks:
                - "Choose one morning a week that is rarely disrupted"
                - "Copy the leaflet's taking instructions onto a card by the kettle"
                - "Ask the pharmacist what to do if you miss your tablet day"
                - "Take the weekly bone tablet as the leaflet directs @recurring(weekly:sun)"
                - "Reorder bone tablets when one month of supply remains @recurring(monthly:17)"
            - name: Bone injection and infusion calendar
              description: |-
                ## Purpose
                Some bone treatments are given as an injection every six months or an infusion once a year, which makes them easy to forget and hard for a busy clinic to chase. With some, denosumab in particular, a late or stopped dose can be followed by rapid bone loss, so the next date should be booked well ahead rather than left to a recall letter.

                ## Milestones
                1. The date of your last injection or infusion confirmed from your record.
                2. The next due date and the acceptable window around it written in your calendar.
                3. The appointment booked at least a month before it is due.
                4. A plan agreed with your clinician for what happens if a dose is delayed.

                ## Notes
                Ask your clinician how much a gap matters for your specific medicine. Never stop an injectable bone treatment without a plan for what follows it.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each injection or infusion is booked at least four weeks before it is due, and no dose falls outside the agreed window."
                cadence: rolling
              tasks:
                - "Confirm the date of your last bone injection or infusion"
                - "Write the next due date and a booking reminder in your calendar"
                - "Ask your clinician what to do if a dose runs late"
                - "Check the next bone injection appointment is booked @recurring(monthly:9)"
            - name: Calcium-rich weekly meal plan
              description: |-
                ## Purpose
                Most guidelines prefer calcium from food first, with supplements filling a gap your clinician identifies, and a weekly plan is where that actually happens. Building two or three calcium-rich foods into each day, such as dairy or fortified alternatives, tinned fish with soft bones, calcium-set tofu and green vegetables, takes the guesswork out of the shopping.

                ## Milestones
                1. A rough daily calcium target confirmed with your clinician or a dietitian.
                2. Ten calcium-rich meals or snacks you actually enjoy listed.
                3. A weekly plan with at least two calcium-rich items each day.
                4. Four weeks of plans followed and adjusted.

                ## Notes
                Start from the **Weekly meal plan** template. If you also take a calcium supplement, ask your pharmacist how to space it from other medicines.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans each include at least two calcium-rich items every day."
                cadence: rolling
              tasks:
                - "Ask your clinician or dietitian what daily calcium to aim for"
                - "List ten calcium-rich foods your household will happily eat"
                - "Plan next week with two calcium-rich items every day"
                - "Write the calcium-rich weekly meal plan @recurring(weekly:sat)"
            - name: Vitamin D through the darker months
              description: |-
                ## Purpose
                Skin makes vitamin D from sunlight, but far from the equator there is too little strong sun from roughly autumn to spring, and older skin makes less of it anyway. Many health services advise a supplement for some or all of the year, and agreeing yours once, then running it as a seasonal routine, protects the calcium absorption your bones depend on.

                ## Milestones
                1. Your clinician or pharmacist asked whether you need vitamin D and at what dose.
                2. A product chosen that matches that advice.
                3. The months you take it, or all year, written in your calendar.
                4. A blood level check requested if your clinician thinks it would help.

                ## Notes
                Do not combine several products containing vitamin D without asking: multivitamins and combined calcium tablets often contain it too.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A vitamin D plan agreed with a clinician or pharmacist is written down and followed for one full autumn to spring season."
                cadence: cyclic
              tasks:
                - "Ask your pharmacist what vitamin D advice applies to you"
                - "Check the label of every supplement you take for vitamin D"
                - "Take the vitamin D your clinician or pharmacist advised @recurring(daily)"
                - "Restart the vitamin D routine at the start of autumn @recurring(yearly)"
            - name: Twice-weekly strength sessions for bone
              description: |-
                ## Purpose
                Bone responds to load, and progressive muscle strengthening at least twice a week is a core recommendation for people with or at risk of osteoporosis. Two fixed sessions, with weights or resistance that feel genuinely hard by the last repetitions and are increased gradually, do more for bones and falls than daily gentle movement alone.

                ## Milestones
                1. Exercises agreed with a physiotherapist or trained instructor, especially after any spinal fracture.
                2. Two fixed session days in your week.
                3. A log of exercises, weights and repetitions for every session.
                4. Twelve weeks of sessions completed with at least one load increase.

                ## Notes
                Start from the **Habit tracker** template. After a spinal fracture, ask for exercises that avoid heavy forward bending and twisting.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Strength sessions are logged on two days a week for twelve weeks, with at least one recorded increase in load."
                cadence: rolling
              tasks:
                - "Ask a physiotherapist which strength exercises are safe for you"
                - "Pick two fixed days and times for strength sessions"
                - "Do the agreed strength session and log the loads @recurring(weekly:tue,fri)"
                - "Increase one load or repetition count each fortnight if it feels manageable"
            - name: Daily balance practice
              description: |-
                ## Purpose
                Most hip and wrist fractures follow a fall, and balance is a trainable skill that fades quickly when it is not used. A few minutes a day of practice, such as standing on one leg by the kitchen counter, heel-to-toe walking or a structured programme from a physiotherapist, is one of the best-evidenced ways to reduce falls in older adults.

                ## Milestones
                1. A safe practice spot chosen with something sturdy to hold.
                2. Three balance exercises learned, each with a harder version.
                3. A simple test, such as timed standing on each leg, recorded at the start.
                4. The same test repeated after eight weeks and the results compared.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Balance practice is kept up for eight weeks and a repeat one-leg stand time is recorded beside the starting time."
                cadence: rolling
              tasks:
                - "Pick a practice spot next to a kitchen counter or sturdy chair"
                - "Time how long you can stand on each leg and write it down"
                - "Do five minutes of balance practice beside the counter @recurring(daily)"
                - "Repeat the one-leg timing after eight weeks"
            - name: Monthly falls hazard walk-through at home
              description: |-
                ## Purpose
                Loose rugs, trailing cables, dim stair lighting and a bathroom floor that is wet at night lie behind many falls at home, and a home slowly changes as furniture moves and clutter builds. Walking the same route once a month with a short checklist catches hazards before they catch you.

                ## Milestones
                1. A route covering stairs, bathroom, bedroom, kitchen and entrances agreed.
                2. A checklist of ten common hazards written for that route.
                3. Every hazard found on the first walk-through fixed or listed with a date.
                4. Three monthly walk-throughs completed.

                ## Notes
                Start from the **Operational checklist** template. Many falls happen at night, so walk the route once in the dark with only the lights you actually use.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three monthly walk-throughs are logged against a written checklist, with every hazard found either fixed or given a date."
                cadence: rolling
              tasks:
                - "Write a ten-item hazard checklist for your own home"
                - "Do the first walk-through and fix the quickest hazards"
                - "Walk the route once at night with only the usual lights on"
                - "Walk the home falls hazard route with the checklist @recurring(monthly:14)"
            - name: Annual bone health review
              description: |-
                ## Purpose
                Once a year is a sensible point to check that treatment is being taken, side effects are known, falls are recorded, height has not dropped and the plan still fits your life. Arriving with a short written summary keeps the appointment focused on decisions rather than on reconstructing twelve months from memory.

                ## Milestones
                1. A one-page summary of the year: doses missed, falls, fractures, height and side effects.
                2. The review booked with your clinician or osteoporosis service.
                3. Questions about treatment length and the next scan asked.
                4. The outcome written into your bone health folder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A yearly review takes place with a written summary brought along and the outcome recorded in your bone health folder."
                cadence: cyclic
              tasks:
                - "Write a one-page summary of your bone year before the review"
                - "Book the yearly bone health review @recurring(yearly)"
                - "Ask whether treatment length or the next scan date has changed"
                - "File the review outcome in your bone folder"
            - name: Repeat bone density scan timing
              description: |-
                ## Purpose
                Repeat DXA scans are usually spaced several years apart, often between two and five, because bone density changes slowly and small differences fall within the machine's margin of error. Knowing when your next scan is due, and why, avoids both a scan too early to show anything and a gap so long that a treatment decision is made blind.

                ## Milestones
                1. The interval your clinician recommends for your next scan recorded with the reason.
                2. The due year written in your calendar and bone folder.
                3. A referral requested three months before the due date.
                4. The next scan booked at the same unit where possible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "The recommended repeat scan interval and due year are recorded, and the next scan is requested at least three months before it is due."
                cadence: cyclic
              tasks:
                - "Ask your clinician when your next DXA scan should be"
                - "Write the due year in your calendar and bone folder"
                - "Ask for the next scan at the same unit as the last one"
                - "Check whether a repeat bone scan is due this year @recurring(yearly)"
            - name: Bone medicine side effect diary
              description: |-
                ## Purpose
                Most people take bone medicines without trouble, but a few symptoms deserve prompt attention: heartburn or pain on swallowing with tablets, flu-like aches after a first infusion, new pain in the thigh or groin, or jaw pain and slow healing after dental work. A brief diary separates real side effects from coincidence and gives your clinician dates, not impressions.

                ## Milestones
                1. A diary page with date, symptom, how long it lasted and what you did.
                2. The symptoms your leaflet asks you to report listed at the top.
                3. Any listed symptom reported to your clinician or pharmacist within the time the leaflet gives.
                4. The diary brought to your annual review.

                ## Notes
                New or unusual thigh, hip or groin pain while on long-term bone medicine should be reported, not exercised through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A side effect diary holds dated entries, and any leaflet-listed symptom has been reported within the advised time."
                cadence: rolling
              tasks:
                - "List the report-promptly symptoms from your bone medicine leaflet"
                - "Set up a diary page with date, symptom and duration columns"
                - "Review the side effect diary for any patterns @recurring(monthly:22)"
                - "Report any listed symptom to your pharmacist or clinician"
            - name: How bone is built and lost
              description: |-
                ## Purpose
                Bone is living tissue that is constantly broken down and rebuilt, and peak bone mass is reached in early adulthood before a gradual decline that speeds up for several years after menopause. Understanding that cycle explains why some medicines slow removal while others build new bone, why exercise and calcium matter, and why results change so slowly.

                ## Milestones
                1. A plain-language summary, in your own words, of how bone is renewed.
                2. The difference between bone density and bone quality understood.
                3. Two reputable patient sources, such as a national osteoporosis charity, bookmarked.
                4. Remaining questions written down for your clinician.

                ## Notes
                Patient charities often run specialist nurse helplines, a good first stop for questions between appointments.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written five-sentence summary of bone renewal exists, with two trusted sources and a list of questions saved."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read one patient guide on bone renewal from an osteoporosis charity"
                - "Write a five-sentence summary of how bone is renewed"
                - "Find out whether your country has an osteoporosis nurse helpline"
                - "Note three questions the reading raised"
            - name: Bone-friendly bending and lifting
              description: |-
                ## Purpose
                Spinal fractures in people with osteoporosis can happen during everyday movements such as lifting a heavy pan, bending to tie shoes or twisting to reach the back seat of a car. Learning to hinge at the hips, keep loads close and avoid bending forward with a twist under load changes dozens of daily movements at once.

                ## Milestones
                1. A physiotherapist or trained instructor has shown you the hip hinge and a safe lift.
                2. Five of your most common bending tasks, such as emptying the dishwasher, relearned or rearranged.
                3. Heavy items at home moved to between waist and shoulder height.
                4. The new movements practised until they feel automatic.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Five common daily bending tasks have been relearned or rearranged, and heavy household items sit between waist and shoulder height."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask a physiotherapist to teach you the hip hinge and safe lifting"
                - "List five daily tasks that involve bending and twisting"
                - "Move heavy items at home to between waist and shoulder height"
                - "Practise each relearned task for two weeks"
            - name: Getting up safely after a fall
              description: |-
                ## Purpose
                Lying on the floor for a long time after a fall, unable to get up, is frightening and causes problems of its own, and most older adults have never practised getting up. Learning a safe method, and what to do when you cannot or should not get up, gives you a plan for the moment you most hope never comes.

                ## Milestones
                1. A safe way of getting up from the floor learned from a physiotherapist or falls service.
                2. The method practised on a carpeted floor with someone present.
                3. A plan for keeping warm and calling for help if you cannot get up.
                4. A phone or alarm reachable from floor level in the rooms you use most.

                ## Notes
                If you think you may have broken something, especially a hip, do not try to get up: call for help and keep warm.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A floor recovery method has been practised with someone present, and a written plan for not being able to get up sits by the phone."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a physiotherapist or falls service to teach the floor recovery method"
                - "Practise getting up on a carpeted floor with someone there"
                - "Decide where a phone or alarm will live in each main room"
                - "Write the cannot-get-up plan on a card by the phone"
            - name: Impact exercise that suits your bones
              description: |-
                ## Purpose
                Some kinds of impact, such as heel drops, stamping, skipping or jogging, stimulate bone at the hip, but the right level depends on your fracture history and fitness. Working out with a physiotherapist which level suits you, and building up gradually, adds a bone benefit that swimming and cycling alone do not give.

                ## Milestones
                1. Your fracture history and scan results shared with a physiotherapist.
                2. An impact level agreed: low, moderate or not suitable for now.
                3. A short impact routine written down with how to progress it.
                4. Six weeks of the routine completed without new pain.

                ## Notes
                People who have had spinal fractures or who are frail may be advised to stay with low impact. That is a valid answer, not a failure.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An impact level agreed with a physiotherapist is written down, and six weeks of the routine are completed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a physiotherapy session about impact exercise for bone"
                - "Ask which impact level is safe given your fracture history"
                - "Write down the agreed impact routine and how to progress it"
                - "Add the impact moves to the warm-up of each strength session"
            - name: Back extensor and posture exercises
              description: |-
                ## Purpose
                Strong back extensor muscles support the spine, can lessen the forward stoop that follows vertebral fractures and may lower the risk of further ones. A short set of exercises done a few times a week, taught properly at the start, is one of the most direct things you can do for your spine.

                ## Milestones
                1. Three back extensor or posture exercises taught by a physiotherapist.
                2. A written or photographed sheet showing each exercise.
                3. A weekly slot for the routine kept for eight weeks.
                4. A side-on photo taken at the start and after eight weeks to compare posture.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Back extensor exercises are done every week for eight weeks, with start and end posture photos compared."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your physiotherapist for three back extensor exercises"
                - "Photograph or sketch each exercise with its key points"
                - "Take a side-on posture photo standing against a plain wall"
                - "Do the back extensor routine @recurring(weekly:wed)"
            - name: Bone medicine options explained
              description: |-
                ## Purpose
                Osteoporosis medicines fall into two broad groups: those that slow bone removal, such as bisphosphonates and denosumab, and those that build new bone, such as teriparatide, abaloparatide and romosozumab, with hormone-based options for some women. Knowing how each is given, how long it is usually used and what happens when it stops makes the treatment conversation shorter and the choice your own.

                ## Milestones
                1. A one-page comparison of the main options: how given, how often, typical duration.
                2. The options your clinician mentioned highlighted.
                3. Questions about side effects and stopping each option listed.
                4. The comparison brought to your treatment plan appointment.

                ## Notes
                Which medicines are available, and who qualifies, differs by country. Your clinician will know which are offered to you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of bone medicine options, with your questions listed, is ready before the treatment plan appointment."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a patient charity guide to osteoporosis medicines"
                - "Ask the agent to draft a one-page comparison table from your notes"
                - "Mark the options your clinician has mentioned"
                - "List your questions about stopping each option"
            - name: Dairy-free calcium cooking
              description: |-
                ## Purpose
                People who avoid dairy because of allergy, lactose intolerance or a plant-based diet can still reach their calcium target, but it takes more planning. Learning a handful of meals built on fortified plant milks, calcium-set tofu, almonds, sesame, beans and the right greens makes it routine rather than a daily calculation.

                ## Milestones
                1. Five fortified products compared for calcium per serving.
                2. Six calcium-rich dairy-free recipes cooked at least once.
                3. Three favourites added to the regular meal rotation.
                4. Your intake checked with a dietitian if you remain unsure.

                ## Notes
                Spinach contains calcium that is poorly absorbed; kale, pak choi and broccoli are better sources. Shake fortified drinks before pouring, as the calcium settles.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Six calcium-rich dairy-free recipes have been cooked and three are in the regular meal rotation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Compare calcium per serving on five plant milk or yoghurt labels"
                - "Cook two new dairy-free calcium-rich recipes this week"
                - "Choose three favourites to add to regular meals"
                - "Ask a dietitian to check your intake if you remain unsure"
            - name: Calcium from food audit
              description: |-
                ## Purpose
                Before anyone adds a calcium supplement, it helps to know how much you already get from food, and people are often surprised in both directions. Recording three typical days and counting calcium with a food table or calculator gives a realistic figure your clinician or pharmacist can use to decide whether a supplement is needed at all.

                ## Milestones
                1. Everything eaten and drunk recorded for three typical days, including a weekend day.
                2. Calcium totals worked out for each day using a reputable food table or calculator.
                3. The daily average compared with the target your clinician gave.
                4. A decision recorded: food changes, a supplement, or no change.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A three-day calcium count with a daily average is recorded, and a decision on food changes or a supplement is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down everything you eat and drink for three typical days"
                - "Count calcium for each day with a calcium calculator or food table"
                - "Compare your daily average with the target from your clinician"
                - "Record whether food changes or a supplement is the next step"
            - name: Calcium and vitamin D supplement review with a pharmacist
              description: |-
                ## Purpose
                Supplements interact with bone medicines and others: calcium taken at the same time can block absorption of bisphosphonate tablets, thyroid medicine and some antibiotics. A short review with a pharmacist sorts out what to take, when in the day relative to everything else, and whether two products are doubling up.

                ## Milestones
                1. Every supplement and medicine you take listed with its timing.
                2. A pharmacist has reviewed the list for interactions and duplicates.
                3. A daily timetable showing when each item is taken.
                4. Any supplement you no longer need stopped with the pharmacist's agreement.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist-reviewed daily timetable for supplements and medicines is written down and on display at home."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every supplement and medicine you take with the time of day"
                - "Book a short medicines review with a pharmacist"
                - "Ask how far apart calcium and your other medicines should be"
                - "Write the agreed daily timetable on the fridge"
            - name: Medicines that affect bones or balance
              description: |-
                ## Purpose
                Some medicines weaken bone over time, including long-term oral steroids, some epilepsy drugs, aromatase inhibitors and excessive thyroid replacement, while others such as sleeping tablets, some blood pressure tablets and certain antidepressants raise the chance of falling. A structured review with your prescriber or pharmacist checks whether each one is still needed and whether a gentler alternative exists.

                ## Milestones
                1. Your current medicine list checked for bone and falls effects mentioned in each leaflet.
                2. A review held with your prescriber or pharmacist.
                3. Any agreed changes written down, with who made them.
                4. Dizziness or unsteadiness after any change watched for and reported.

                ## Notes
                Never stop a prescribed medicine on your own because it appears on a list like this. Raise it at the review.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A bones and falls medicines review has taken place and every agreed change is written down with the reason."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark any medicine whose leaflet mentions bone loss or dizziness"
                - "Book a medicines review focused on bones and falls"
                - "Write down every change agreed and why"
                - "Repeat the bones and falls medicines review @recurring(yearly)"
            - name: Grab rails, lighting and bathroom changes
              description: |-
                ## Purpose
                Bathrooms, stairs and the route from bed to toilet at night are where many fractures begin, and a few fixed changes, such as grab rails, a second stair rail, motion-sensor night lights and a non-slip mat, last for years. Arranging them once, ideally after an occupational therapy assessment, removes risks that no amount of care can fully cover.

                ## Milestones
                1. An occupational therapy home assessment requested, or a self-assessment guide used.
                2. A list of changes with rough costs and who will fit them.
                3. Grab rails and lighting fitted in the bathroom and on the stairs.
                4. Night lights tested along the bed-to-toilet route.

                ## Notes
                In some places the local council or health service fits small adaptations free or at low cost. Ask before paying a contractor.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Grab rails, a second stair rail and night lights on the bed-to-toilet route are fitted and tested."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your practice or local council about an occupational therapy home assessment"
                - "List the adaptations needed with rough costs"
                - "Book a fitter for grab rails and a second stair rail"
                - "Fit motion-sensor lights between the bed and the toilet"
            - name: Footwear and walking aid choice
              description: |-
                ## Purpose
                Backless slippers, smooth soles and walking sticks at the wrong height all contribute to falls. Choosing well-fitting shoes with a firm heel and a grippy sole, and having any walking aid measured and checked, is a small purchase with a large effect on everyday steadiness.

                ## Milestones
                1. Current footwear checked for fit, backs, heel height and sole grip.
                2. One pair of backed indoor shoes or slippers chosen to replace worn ones.
                3. Any walking aid set to the right height by a physiotherapist or trained staff.
                4. Worn rubber tips and soles replaced.

                ## Notes
                Start from the **Purchase decision** template. A stick set too high or too low can make balance worse, not better.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Backed indoor footwear with a grippy sole is in use, and any walking aid has been height-checked by a professional."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check every pair of shoes and slippers for backs and grip"
                - "Shortlist two indoor shoes with a firm heel and non-slip sole"
                - "Ask a physiotherapist to check the height of any walking aid"
                - "Replace worn rubber tips on sticks and frames"
            - name: Choosing a strength and balance class
              description: |-
                ## Purpose
                Group classes give structure, company and an instructor who can correct technique, but not every class suits fragile bones. Comparing two or three local options, and asking whether the instructors are trained in falls prevention or osteoporosis exercise, finds one you will keep going to.

                ## Milestones
                1. Three local classes found, including any run by the health service or a falls team.
                2. Each one checked for instructor training, class size and cost.
                3. A trial session attended at the most promising class.
                4. A choice made and the first block of sessions booked.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A strength and balance class with a suitably trained instructor is chosen and the first block of sessions is booked."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search for strength and balance classes within easy travel"
                - "Ask each class whether instructors have falls prevention training"
                - "Attend one trial session and note how it felt"
                - "Book the first block of sessions at your chosen class"
            - name: Dental care before and during bone medicine
              description: |-
                ## Purpose
                Osteonecrosis of the jaw, where jawbone fails to heal after dental work, is rare with osteoporosis treatment but more likely after extractions and with poor oral health. A dental check before starting treatment where possible, and telling your dentist about bone medicines before any extraction or implant, keeps that small risk as small as it can be.

                ## Milestones
                1. A dental check completed before starting bone treatment, if timing allows.
                2. Your dentist's record updated with the name of your bone medicine.
                3. Any planned extraction or implant discussed with both dentist and prescriber first.
                4. Daily oral care and regular dental visits kept up.

                ## Notes
                Do not delay needed dental treatment out of worry. The risk is low, and your dentist and prescriber can plan the work together.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your dentist has your bone medicine on record, and any extraction or implant has been discussed with both dentist and prescriber."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book a dental check before your bone treatment starts"
                - "Tell your dentist the name of your bone medicine and its start date"
                - "Ask your prescriber how a planned extraction should be handled"
                - "Report jaw pain or slow healing after dental work promptly"
            - name: Bone assessment after a fragility fracture
              description: |-
                ## Purpose
                A broken wrist, hip, spine, upper arm or pelvis from a fall at standing height is a warning, and the risk of another fracture is highest in the year or two that follow. Many such fractures are set in a cast and never followed up for bone health, so asking for an assessment through a fracture liaison service or your own clinician closes that gap.

                ## Milestones
                1. The fracture clinic or your clinician asked whether a bone health assessment will follow.
                2. A fracture liaison service or osteoporosis clinic contacted if one exists locally.
                3. Fracture risk assessed, with a scan if recommended.
                4. A treatment and falls plan in place within three months of the fracture.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A bone health assessment is completed and a treatment and falls plan is recorded within three months of the fracture."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the fracture clinic whether a bone health assessment is arranged"
                - "Find out whether a fracture liaison service covers your hospital"
                - "Book an appointment with your clinician to discuss the fracture"
                - "Note the fracture date and bone in your bone health folder"
            - name: First bone infusion day
              description: |-
                ## Purpose
                Yearly bone infusions such as zoledronic acid take a short visit to a day unit, but the first one can bring a day or two of flu-like aches and a raised temperature. Preparing for the appointment and the days after it makes the experience easier and avoids the worry that something has gone wrong.

                ## Milestones
                1. Pre-infusion blood tests, often kidney function and calcium, done in time.
                2. The unit's instructions on fluids and any vitamin D beforehand followed.
                3. Two quiet days planned after the infusion.
                4. Any reaction recorded and reported as the unit advised.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first infusion is completed with pre-infusion tests done on time and any reaction in the following days recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm which blood tests are needed before the infusion"
                - "Ask the unit what to eat and drink before and after"
                - "Clear your diary for the two days after the infusion"
                - "Write down any reaction with times for your next review"
            - name: Sudden back pain and a possible spinal fracture
              description: |-
                ## Purpose
                Vertebral fractures can follow a minor strain, a cough or nothing obvious at all, and show up as sudden mid or lower back pain, sometimes with lost height. A plan written in advance means you know when to seek help, what to ask for and how to get through the weeks of recovery.

                ## Milestones
                1. Signs that need same-day attention written down from your health service's guidance.
                2. Questions prepared about imaging and pain relief options.
                3. A recovery plan covering rest, gentle movement and help at home.
                4. A follow-up booked to review bone treatment after any confirmed fracture.

                ## Notes
                Sudden severe back pain with numbness, leg weakness, or loss of bladder or bowel control needs emergency care.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan for sudden back pain, including urgent signs and a list of people who can help, is filed in your bone health folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's urgent signs for new back pain"
                - "Write questions about imaging and pain relief for your clinician"
                - "Ask who could help with shopping and lifting for a few weeks"
                - "Keep the back pain plan with your bone health folder"
            - name: Winter ice and dark evenings falls plan
              description: |-
                ## Purpose
                Wrist and hip fractures rise in icy weather and on dark evenings, when pavements, steps and garden paths turn into hazards. A short seasonal routine, with grips for shoes, grit for the path, outdoor lights checked and a plan for shopping on the worst days, cuts out the riskiest trips outdoors.

                ## Milestones
                1. Shoe grips or ice cleats bought and tried before the first frost.
                2. Grit or salt stored by the door and the path lighting checked.
                3. Deliveries or a helper arranged for icy days.
                4. The plan revisited each autumn.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Shoe grips, grit and working outdoor lights are in place before the first frost, and an icy-day shopping plan exists."
                cadence: cyclic
              tasks:
                - "Buy shoe grips and try them on a dry path"
                - "Store a bag of grit by the front door"
                - "Arrange a delivery slot or helper for icy days"
                - "Check outdoor lights and shoe grips before winter @recurring(yearly)"
            - name: Coming home after a hip fracture
              description: |-
                ## Purpose
                Recovery from a hip fracture often takes months, and many people do not regain their previous mobility without sustained rehabilitation. Planning the return home, with equipment, help, exercises and fracture prevention lined up, gives the best chance of walking and living independently again.

                ## Milestones
                1. Equipment such as a raised toilet seat, perching stool and walking frame in place before discharge.
                2. Home help or family support arranged for the first weeks.
                3. The rehabilitation exercise programme written down and started.
                4. Bone treatment and a falls assessment confirmed before or soon after discharge.

                ## Notes
                Ask the ward team directly about bone medicine before discharge. It is too often left for someone else to start.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Equipment, help and a rehabilitation programme are in place at discharge, and a bone treatment decision is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the ward occupational therapist what equipment is needed at home"
                - "Arrange who will help with meals and washing for the first weeks"
                - "Get the rehabilitation exercise sheet before leaving hospital"
                - "Ask whether bone treatment has been started or planned"
            - name: Bone checks after early or surgical menopause
              description: |-
                ## Purpose
                Menopause before 45, whether natural, surgical or caused by cancer treatment, means more years of low oestrogen and faster bone loss. Asking for a fracture risk assessment and discussing bone protection, including whether hormone treatment is suitable, keeps bone health from being lost among everything else being managed.

                ## Milestones
                1. Your menopause date and its cause recorded in your bone folder.
                2. A fracture risk assessment requested, with a scan if your clinician recommends it.
                3. Bone protection options discussed, including hormone treatment where appropriate.
                4. A date for the next bone review set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A fracture risk assessment after early menopause is complete, with the bone protection decision and next review date recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Note your age and the cause of your early menopause"
                - "Ask your clinician for a fracture risk assessment"
                - "Ask how hormone treatment and other options would affect bone"
                - "Record the next bone review date"
            - name: Osteoporosis in men
              description: |-
                ## Purpose
                Roughly one in five men over fifty will have an osteoporotic fracture, yet men are assessed and treated far less often than women, and an underlying cause such as low testosterone, alcohol or steroids is found more often. Men with a fracture or risk factors benefit from asking the questions women are routinely asked.

                ## Milestones
                1. Risk factors common in men, including steroid use, low testosterone and alcohol, reviewed.
                2. A fracture risk assessment requested.
                3. Tests for secondary causes discussed.
                4. A treatment and exercise plan agreed if the risk is high.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A fracture risk assessment is complete, secondary causes have been discussed and the next step is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician whether a bone assessment applies to you"
                - "Check whether a testosterone test has ever been done"
                - "Go through alcohol and steroid history honestly with your clinician"
                - "Agree what happens next and write it down"
            - name: Bone protection on long-term steroids
              description: |-
                ## Purpose
                Steroid tablets such as prednisolone taken for three months or more can cause rapid bone loss, especially in the first months, and guidelines advise considering bone protection from the start. Raising it early with whoever prescribes the steroids prevents fractures that are otherwise common in this group.

                ## Milestones
                1. Your expected steroid course length and dose recorded.
                2. Bone protection discussed at the start of the course.
                3. A fracture risk assessment completed.
                4. Bone protection reviewed whenever the steroid plan changes.

                ## Notes
                Never stop steroids suddenly to protect your bones. Changes to steroid doses must come from the prescriber.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Bone protection has been discussed at the start of a steroid course of three months or more, and the decision is recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask the steroid prescriber whether bone protection is needed"
                - "Record the start date and expected length of the steroid course"
                - "Ask whether a fracture risk assessment or scan is planned"
                - "Ask at each steroid review whether bone protection is still needed @recurring(quarterly)"
            - name: Bone loss during hormone therapy for breast or prostate cancer
              description: |-
                ## Purpose
                Aromatase inhibitors for breast cancer and androgen deprivation therapy for prostate cancer both speed bone loss, and many cancer teams recommend a baseline scan and bone protection for some patients. Keeping bone health on the agenda during years of cancer follow-up protects quality of life long after treatment ends.

                ## Milestones
                1. Your oncology team asked whether a baseline bone scan is planned.
                2. Scan results and any bone treatment recorded.
                3. A strength exercise and calcium and vitamin D plan agreed.
                4. Bone monitoring dates included in your cancer follow-up schedule.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A baseline bone assessment during hormone therapy is complete, with bone monitoring dates added to the follow-up schedule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your oncology team whether a baseline DXA scan is planned"
                - "Record scan results and any bone medicine started"
                - "Ask which exercise is safe during hormone therapy"
                - "Add bone monitoring dates to your follow-up calendar"
            - name: Supporting a parent with osteoporosis
              description: |-
                ## Purpose
                Adult children often notice what an older parent will not mention: a stumble, a missed tablet, a loose rug or a fall that was never reported. Agreeing with your parent what help they actually want, then a short monthly check-in, keeps their independence while catching problems early.

                ## Milestones
                1. A conversation held with your parent about what help they want.
                2. Their treatment plan, medicines and appointments known to you, with their consent.
                3. Home hazards and missing equipment reviewed together.
                4. A monthly check-in kept for three months.

                ## Notes
                Ask permission before talking to their clinicians, and ask the practice how it records consent to share information.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monthly check-in about falls, tablets and appointments is kept with your parent for three months, with their consent."
                cadence: rolling
              tasks:
                - "Ask your parent what help with their bones they would welcome"
                - "Agree which appointments you will attend or hear about"
                - "Look round their home together for falls hazards and missing rails"
                - "Ask whether hip protectors would suit them if they fall often"
                - "Check in with your parent about falls, tablets and appointments @recurring(monthly:3)"
            - name: Living alone with a high fracture risk
              description: |-
                ## Purpose
                Falling when nobody else is home can mean hours on the floor, and that fear worries many people more than the fracture itself. A personal alarm or fall detector, a daily contact routine and a key safe for responders give the confidence to stay active rather than staying in.

                ## Milestones
                1. Personal alarm and fall detector options compared, including wearable and phone-based ones.
                2. One chosen and set up with at least two responders.
                3. A key safe or trusted spare key holder in place for emergency access.
                4. A daily contact routine agreed with a friend, neighbour or relative.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A tested personal alarm with two responders, an emergency access arrangement and a daily contact routine are all in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Compare two personal alarm or fall detector options"
                - "Set up the alarm with two named responders"
                - "Arrange a key safe or trusted spare key holder"
                - "Test the personal alarm with a responder @recurring(monthly:28)"
            - name: Low bone density before 50
              description: |-
                ## Purpose
                Low bone density in younger adults is uncommon and usually has a reason: an eating disorder history, coeliac disease, long-term steroids, long gaps without periods or a medicine side effect. At this age the Z-score rather than the T-score is used, and a careful search for the cause matters more than an osteoporosis label.

                ## Milestones
                1. Your Z-scores recorded and their meaning explained by your clinician.
                2. Investigations for an underlying cause requested.
                3. Referral to a bone specialist discussed if no cause is found.
                4. A plan for exercise, nutrition and monitoring agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Investigations for a cause of low bone density before fifty are complete and a specialist referral decision is recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician why a Z-score is used at your age"
                - "List any history that may affect bone, such as long gaps without periods"
                - "Ask whether a referral to a bone specialist is appropriate"
                - "Record the plan and the next review date"
            - name: Anabolic treatment for very high fracture risk
              description: |-
                ## Purpose
                People at very high fracture risk, for example after several vertebral fractures or with a very low T-score, may be offered a bone-building medicine first, given as injections for a fixed course, followed by another medicine to keep the gain. Understanding the sequence and its practical demands in advance means agreeing to it with your eyes open.

                ## Milestones
                1. Your clinician's reasons for considering anabolic treatment recorded.
                2. The practical details known: how it is given, for how long and who supplies it.
                3. Injection technique learned if you will inject yourself.
                4. The follow-on treatment planned before the course ends.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The anabolic treatment decision, course length and follow-on treatment plan are agreed with a specialist and recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask why an anabolic medicine is suggested for you"
                - "Find out how long the course lasts and how it is supplied"
                - "Learn the injection technique with a nurse if needed"
                - "Ask what treatment follows when the course finishes"
            - name: Bisphosphonate treatment break decision
              description: |-
                ## Purpose
                After several years on a bisphosphonate, often around five for tablets and three for yearly infusions, some people are offered a treatment break, because the drug stays in bone and rare side effects become more likely with longer use. Whether a break suits you depends on your fracture history and current risk, and it should be a planned decision with a set review.

                ## Milestones
                1. Your total years of treatment counted from your records.
                2. Fracture risk reassessed, often with a repeat scan.
                3. A decision to continue, pause or switch recorded with the reasons.
                4. If pausing, a date to reassess written in your calendar.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A continue, pause or switch decision after several years of bisphosphonate is recorded with reasons and a reassessment date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the years you have taken your bisphosphonate"
                - "Ask your clinician whether a treatment break is suitable"
                - "Ask what would end the break early, such as a new fracture"
                - "Write the reassessment date in your calendar"
            - name: Stopping or switching denosumab safely
              description: |-
                ## Purpose
                Denosumab works well while it continues, but bone loss can rebound quickly after it stops, and some people have several spinal fractures when treatment ends without cover. Anyone thinking of stopping, or whose doses keep slipping, needs a specialist plan, usually with a follow-on medicine timed carefully.

                ## Milestones
                1. Your reason for wanting to stop or switch discussed with your clinician.
                2. A follow-on treatment and its timing agreed before the last dose.
                3. Any monitoring tests after switching scheduled.
                4. The plan written in your bone health folder.

                ## Notes
                Do not let a denosumab dose lapse while you decide. Keep to the schedule until the switch plan is in place.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A specialist-agreed plan for stopping or switching denosumab, with follow-on medicine timing, is written in your bone health folder."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down why you are thinking about stopping denosumab"
                - "Ask your specialist which follow-on medicine is planned and when"
                - "Book any blood tests or scans needed after switching"
                - "Keep denosumab doses on time until the new plan starts"
            - name: Comparing bone scans across the years
              description: |-
                ## Purpose
                Small differences between scans are often within the machine's precision, and results from different machines may not be directly comparable. Reading change properly, using the least significant change figure your scan unit quotes, helps you judge whether treatment is working and ask sharper questions at review.

                ## Milestones
                1. Every past DXA result tabulated by site and machine.
                2. The scan unit asked for its least significant change figure.
                3. Real change separated from measurement noise at each site.
                4. A summary of the trend discussed with your clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every DXA result, with each change marked as above or within the least significant change, is discussed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Put all your past DXA results in one table by site"
                - "Ask the scan unit for its least significant change figure"
                - "Ask the agent to summarise which changes exceed that figure"
                - "Discuss the trend summary at your next review"
---

# Bone Density & Osteoporosis

This area is for anyone told their bones are thinning, anyone who has broken a bone in a simple fall, and the relatives who help them, with most of it written for later life. It starts with the foundations (a risk factor list, a fracture risk estimate, a DXA scan and a treatment plan), then the routines that keep medicines, calcium, vitamin D, strength and balance going, the skills of moving and exercising safely, the decisions about supplements, medicines and the home, the events that need planning, the situations that change the picture, and finally the specialist treatment questions.

What repeats is a weekly tablet day, two strength sessions a week with daily balance practice, a monthly falls hazard walk-through, regular injection and side effect checks, and a yearly review with its height measurement. The Metrics log, Weekly meal plan, Habit tracker, Operational checklist and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
