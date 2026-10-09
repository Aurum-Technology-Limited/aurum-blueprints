---
id: physical-health.clinical-weight-management
name: Clinical Weight Management
description: "Trustworthy measurements, prepared appointments, weight medication and bariatric surgery routes weighed with your clinicians, and the follow-up routines that keep metabolic risk falling."
category: personal
version: 1.0.0
tags: [physical-health, clinical-weight-management, everyone, obesity, weight-medication, bariatric-surgery, metabolic-risk]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - purchase-decision
    - meeting-notes
    - weekly-meal-plan
    - training-program
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Clinical Weight Management
          description: "Working with doctors on weight-related health, including weight loss medication, bariatric surgery pathways, and the measurements that track metabolic risk."
          projects:
            - name: Weight, waist and blood pressure baseline
              description: |-
                ## Purpose
                Every later decision about medication or surgery is judged against where you started, and clinics usually ask for more than one number. Recording weight, height, waist circumference and a blood pressure reading on the same morning, measured the same way, gives you a baseline your clinician can trust and you can compare against honestly.

                ## Milestones
                1. Height measured without shoes and written down once.
                2. Morning weight recorded on three separate days and averaged.
                3. Waist measured midway between the lowest rib and the top of the hip bone, twice.
                4. A blood pressure reading added from a home monitor, pharmacy or clinic.
                5. BMI and waist-to-height ratio worked out and kept in one log.

                ## Notes
                Start from the **Metrics log** template. Measure first thing after using the toilet, in light clothing, so later readings are comparable.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A log holds your height, a three-day average weight, two waist measurements, a blood pressure reading and the two ratios, all dated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Set up a metrics log with columns for weight, waist and blood pressure"
                - "Weigh yourself on three mornings this week before breakfast"
                - "Measure your waist at the midpoint between rib and hip bone"
                - "Work out your BMI and waist-to-height ratio from the averages"
            - name: Choosing an accurate bathroom scale
              description: |-
                ## Purpose
                Cheap scales can drift by a kilogram or more and read differently on carpet, which turns normal fluctuation into false alarms or false progress. A scale with a clear weight limit above your current weight, used on a hard floor, makes the weekly number worth recording.

                ## Milestones
                1. A weight capacity requirement set with a margin above your current weight.
                2. Three models shortlisted with capacity, platform size and price.
                3. A scale bought and placed on a hard, level floor.
                4. The scale checked against a clinic reading within a week of buying it.

                ## Notes
                Start from the **Purchase decision** template. Body fat readings from home scales vary widely; treat them as a rough trend at best.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A scale with adequate capacity sits on a hard floor and has been compared once with a clinic or pharmacy reading."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide the minimum weight capacity your scale needs"
                - "Shortlist three scales with a wide platform and stated accuracy"
                - "Place the new scale on a hard floor where it will stay"
                - "Compare its reading with the scale at your next appointment"
            - name: Lifetime weight history for your doctor
              description: |-
                ## Purpose
                Specialist clinics ask when weight changed, what was tried and what happened afterwards, because that history shapes which treatment fits. A one-page timeline of weight across your adult life, with diets, medicines, pregnancies, injuries and life events beside it, answers those questions in minutes instead of leaving you to recall them under pressure.

                ## Milestones
                1. Approximate weights at key ages and life events listed.
                2. Every structured diet, programme or medicine tried noted with how long it lasted and the result.
                3. Events linked to weight change written beside the timeline, such as new medicines, injury or shift work.
                4. The timeline fitted onto one page you can hand over.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page weight timeline covering adult life, past attempts and related events is ready to bring to appointments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your approximate weight at 18, 25, 35 and today"
                - "Note every diet, programme or medicine you have tried and its result"
                - "Mark life events that coincided with weight changes"
                - "Ask the agent to tidy the notes into a one-page timeline"
            - name: First weight-focused appointment with your doctor
              description: |-
                ## Purpose
                A short appointment that opens with an apology for your weight rarely ends with a plan. Booking a dedicated appointment, saying at the start that you want to discuss weight as a health issue, and arriving with your baseline, history and three questions makes it far more likely you leave with tests booked and a next step agreed.

                ## Milestones
                1. An appointment booked specifically to discuss weight-related health.
                2. Baseline numbers, weight history and current medicines brought along.
                3. Three questions asked: what is driving my risk, what are my options, what happens next.
                4. Agreed actions, tests and referrals written down before you leave.

                ## Notes
                Start from the **Meeting notes** template. If time runs short, ask for a follow-up appointment rather than squeezing everything in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A note of the appointment exists listing the options discussed, tests ordered and the agreed next step with a date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment and say it is to discuss weight and health"
                - "Write your three questions on the first page of your meeting notes"
                - "Bring your baseline log and weight timeline to the appointment"
                - "Write down every agreed action before leaving the building"
            - name: Metabolic risk blood tests
              description: |-
                ## Purpose
                Weight on its own says little about risk; blood sugar, cholesterol and liver results show whether excess weight is already affecting your organs. Getting HbA1c, a lipid profile and liver function tests done near the start gives you and your clinician the numbers that decide urgency and eligibility for some treatments.

                ## Milestones
                1. The tests your clinician wants confirmed, typically HbA1c, lipids, liver and kidney function.
                2. Fasting or other preparation instructions checked before the appointment.
                3. Bloods taken and results received.
                4. Each result copied into your log with its reference range and your clinician's comment.

                ## Notes
                Ask whether thyroid function is worth checking too if you have tiredness, feeling cold or unexplained weight gain.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "HbA1c, lipid and liver results are recorded in your log with reference ranges and a clinician's interpretation."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask which metabolic blood tests your clinician wants before any treatment"
                - "Check whether you need to fast before the blood test"
                - "Book the blood test at the surgery or a local phlebotomy clinic"
                - "Copy each result and its range into your metrics log"
            - name: Medicines that can cause weight gain
              description: |-
                ## Purpose
                Some antidepressants, antipsychotics, steroids, diabetes medicines, epilepsy medicines and beta blockers can add weight or blunt weight loss. A pharmacist review of everything you take shows whether any medicine is working against you and whether an alternative is worth asking your prescriber about.

                ## Milestones
                1. A complete list of prescribed and bought medicines and supplements.
                2. Each one checked with a pharmacist for known effects on weight or appetite.
                3. Any candidates for change raised with the prescribing clinician.
                4. A decision recorded for each: keep, switch, or review later.

                ## Notes
                Never stop or reduce a prescribed medicine on your own because of weight. Some, such as steroids and mental health medicines, need a planned change.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every current medicine has been reviewed by a pharmacist for weight effects, with a keep, switch or review decision recorded for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a list of every medicine and supplement you take"
                - "Ask a pharmacist which of them can affect weight or appetite"
                - "Raise any likely culprit with the clinician who prescribed it"
                - "Record a keep, switch or review decision against each medicine"
            - name: Weight-related conditions checklist
              description: |-
                ## Purpose
                Excess weight is linked to a cluster of conditions that often go unnoticed: loud snoring and daytime sleepiness, reflux, knee pain, fatty liver, raised blood pressure and irregular periods. Going through a checklist once and mentioning anything that applies means the conditions get treated alongside the weight, and may strengthen a case for referral.

                ## Milestones
                1. A checklist of common weight-related conditions gone through honestly.
                2. Symptoms that apply described with how long you have had them.
                3. A partner or family member asked about snoring and breathing pauses at night.
                4. The completed list shared with your clinician.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A completed checklist of weight-related symptoms has been shared with your clinician and any follow-up tests noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a reputable list of conditions linked to excess weight"
                - "Mark each symptom you have and how long it has lasted"
                - "Ask whoever shares your room whether you snore or stop breathing"
                - "Send the marked list to your clinician before your next appointment"
            - name: Health goals agreed beyond the scale number
              description: |-
                ## Purpose
                Clinical guidelines often treat a five to ten percent loss as meaningful because blood pressure, blood sugar and joint pain can improve at that point, long before any ideal weight. Agreeing realistic targets with your clinician, including non-scale ones such as HbA1c, waist size or walking distance, gives treatment a finish line you can actually reach.

                ## Milestones
                1. A first weight target agreed with your clinician as a percentage of starting weight.
                2. Two or three health targets set that do not depend on the scale.
                3. A timescale agreed for reviewing progress against the targets.
                4. All targets written at the top of your metrics log.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A percentage weight target and at least two non-scale health targets, agreed with a clinician, are written in your log with a review date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician what first percentage loss would help your health"
                - "Choose two targets that are not weight, such as waist or HbA1c"
                - "Write all targets and the review date at the top of your log"
                - "Revisit your targets with your clinician at the yearly review @recurring(yearly)"
            - name: Seven-day eating and hunger diary
              description: |-
                ## Purpose
                Dietitians and weight clinics nearly always ask what a normal week of eating looks like, and memory is unreliable about snacks, drinks and late evenings. Keeping an honest seven-day record, including hunger levels and what prompted eating, gives the professional something real to work with and often shows patterns you had not noticed.

                ## Milestones
                1. Everything eaten and drunk recorded for seven consecutive days.
                2. Hunger rated before each meal or snack on a simple scale.
                3. Triggers noted, such as tiredness, stress or social occasions.
                4. Two or three patterns summarised for the dietitian or doctor.

                ## Notes
                Record the week you actually live, not a model week. A diary written to impress is useless to the person reading it.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A seven-day food, drink and hunger diary with a short summary of patterns is ready for a dietitian or clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pick a paper or phone format you will actually keep for a week"
                - "Record everything eaten and drunk, with times, for seven days"
                - "Rate your hunger before each meal from one to five"
                - "Summarise three patterns the diary shows"
            - name: Map of local weight management services
              description: |-
                ## Purpose
                Most health systems offer weight care in tiers, from community programmes and dietitians to specialist clinics and surgical teams, each with its own entry criteria and waiting time. Knowing what exists locally, who can refer you and what the eligibility rules are stops you from waiting for a referral that was never possible or missing one you qualify for.

                ## Milestones
                1. The services available in your area listed by tier or level.
                2. Eligibility criteria for each noted, such as BMI thresholds or related conditions.
                3. Who can refer you to each service confirmed.
                4. Current waiting times or intake dates recorded where published.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list of local weight services, with eligibility, referral route and waiting time for each, is saved in this area."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search your health service's website for weight management services"
                - "Note the eligibility criteria for each service you find"
                - "Ask the practice which services they refer to and how"
                - "Record published waiting times beside each service"
            - name: Weekly weigh-in routine
              description: |-
                ## Purpose
                Daily weight swings by a kilogram or more with fluid, salt and bowels, and watching it every morning tends to cause more anxiety than insight. Weighing once a week on the same day, at the same time and in the same clothes gives a cleaner trend line for you and your clinic.

                ## Milestones
                1. A fixed weigh-in day and time chosen.
                2. Weight recorded weekly for twelve consecutive weeks.
                3. A four-week rolling average added to the log.
                4. The trend, not single readings, used in conversations with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly weights are recorded at the same time of day, with a four-week rolling average beside them."
                cadence: rolling
              tasks:
                - "Choose one weekday and time for your weigh-in"
                - "Weigh yourself before breakfast and record it in the log @recurring(weekly:mon)"
                - "Add a four-week rolling average column to the log"
            - name: Monthly waist and trend check
              description: |-
                ## Purpose
                Waist size tracks the visceral fat linked to diabetes and heart disease more closely than weight, and it can keep falling while the scale stalls, especially when you are building strength. A monthly measurement alongside a look at the month's weight trend shows whether treatment is working on the risk that matters.

                ## Milestones
                1. Waist measured monthly at the same landmark.
                2. The month's weight trend summarised in one line.
                3. Waist-to-height ratio updated each month.
                4. A note made of anything to raise at the next clinical review.

                ## Notes
                Start from the **Metrics log** template. Use the same tape measure and breathe out normally before reading it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly waist measurements and one-line trend summaries are recorded, with the waist-to-height ratio updated each time."
                cadence: rolling
              tasks:
                - "Measure your waist and update the waist-to-height ratio @recurring(monthly:3)"
                - "Write one line on how the month's weight trend moved"
                - "Note any question for your next review beside the month's entry"
            - name: Quarterly review with your prescriber
              description: |-
                ## Purpose
                Weight medicines and structured programmes are usually continued only if they are working and tolerated, and that judgement needs regular contact. A review every three months, with your log, side effect notes and questions prepared, keeps the prescription active, catches problems early and records whether to continue, adjust or stop.

                ## Milestones
                1. A review booked every three months while on treatment.
                2. A one-page summary of weight trend, waist and side effects brought each time.
                3. The decision from each review recorded: continue, adjust or stop.
                4. Repeat blood tests arranged when the prescriber asks for them.

                ## Notes
                Start from the **Meeting notes** template. Some prescribers will do this remotely if you send your log in advance.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four consecutive quarterly reviews are held, each with a written summary and a recorded continue, adjust or stop decision."
                cadence: cyclic
              tasks:
                - "Book your next three-monthly treatment review @recurring(quarterly)"
                - "Prepare a one-page summary of trend, waist and side effects"
                - "Record the prescriber's decision and any new instructions"
            - name: Weekly injection day routine
              description: |-
                ## Purpose
                Many current weight medicines are weekly injections, and a missed or doubled dose can bring a return of nausea or blunt the effect. Fixing one injection day, rotating the site and ticking it off in the same place each week makes the routine automatic even when life is busy.

                ## Milestones
                1. One injection day and time agreed and set as a reminder.
                2. A site rotation pattern chosen across abdomen, thighs and upper arms as advised.
                3. Each injection ticked off with the site used.
                4. A written rule for a missed dose taken from the leaflet or your prescriber.

                ## Notes
                Missed dose rules differ between medicines. Write the one for yours from its leaflet rather than guessing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly injections are recorded with the site used, and a written missed dose rule sits with the pens."
                cadence: rolling
              tasks:
                - "Choose your injection day and set a phone reminder for it"
                - "Copy the missed dose rule from the leaflet onto a card by the fridge"
                - "Take your injection and log the site you used @recurring(weekly:sat)"
                - "Get a sharps bin from the pharmacy for used needles"
            - name: Weight medication supply and reorder routine
              description: |-
                ## Purpose
                Supply shortages, pharmacy delays and lapsed private subscriptions have left people without medicine mid-course, sometimes forcing a restart at a lower dose. Checking stock monthly, reordering with a week in hand and knowing your fallback pharmacy protects continuity of treatment.

                ## Milestones
                1. Current stock counted and a reorder point set at about two weeks remaining.
                2. The prescribing route and how to request a repeat written down.
                3. A second pharmacy or supplier identified in case of shortage.
                4. Expiry dates and fridge storage checked each month.

                ## Notes
                If a shortage means a gap of more than a week or two, ask your prescriber what to do before restarting. The answer is not always to carry on at the same dose.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months pass with no unplanned gap in medication, with monthly stock checks recorded."
                cadence: rolling
              tasks:
                - "Count the pens or packs you have and note the next reorder date"
                - "Check stock, expiry dates and fridge storage, then reorder @recurring(monthly:20)"
                - "Find a second pharmacy that can supply your medicine in a shortage"
            - name: Side effect log on weight medication
              description: |-
                ## Purpose
                Nausea, constipation, reflux and tiredness are common when starting or stepping up a weight medicine, and most settle, but persistent vomiting, severe abdominal pain or signs of dehydration need prompt medical advice. A weekly log shows your prescriber whether the dose is tolerable and helps you separate the expected from the worrying.

                ## Milestones
                1. The common and serious side effects for your medicine listed from the leaflet.
                2. A short weekly entry recording each symptom and its severity.
                3. Warning symptoms that need same-day advice written on a card.
                4. The log shared before each dose increase.

                ## Notes
                Severe, persistent abdominal pain, especially spreading to the back, needs urgent medical attention, whatever the log says.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly side effect entries are kept through every dose step, with a warning symptoms card in place and the log shared before each increase."
                cadence: rolling
              tasks:
                - "List the common and serious side effects from your medicine's leaflet"
                - "Write the symptoms that need same-day advice on a card"
                - "Record this week's side effects and their severity @recurring(weekly:wed)"
                - "Send the log to your prescriber before any dose increase"
            - name: Weekly meal plan agreed with your dietitian
              description: |-
                ## Purpose
                Reduced appetite, a calorie target or a post-surgery eating plan all work better when the week's meals are decided before hunger or tiredness decides for you. Planning meals each weekend around the principles your dietitian set, usually protein at every meal and plenty of vegetables and fibre, turns advice into a shopping list.

                ## Milestones
                1. The dietitian's main principles written as three or four rules.
                2. A weekly plan made for eight consecutive weeks.
                3. Five reliable meals identified that fit the rules and the household.
                4. The plan adjusted after each dietitian or clinic review.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans exist, each following the dietitian's written rules."
                cadence: rolling
              tasks:
                - "Write your dietitian's advice as three or four simple rules"
                - "Plan the week's meals and write the shopping list @recurring(weekly:sun)"
                - "Collect five meals the whole household will eat that fit the rules"
            - name: Strength training to protect muscle
              description: |-
                ## Purpose
                Rapid weight loss, whether from medication, surgery or a very low calorie diet, takes muscle with it as well as fat, and lost muscle makes regain more likely and later life harder. Two short strength sessions a week, cleared with your clinician and built up gradually, help keep the weight you lose mostly fat.

                ## Milestones
                1. Any limits on exercise checked with your clinician or physiotherapist.
                2. A simple programme of six to eight exercises chosen.
                3. Two sessions a week completed for eight weeks.
                4. Grip strength or a chair stand test recorded at the start and after eight weeks.

                ## Notes
                Start from the **Training program** template. A supervised gym induction or a physiotherapist session is worth it if you are new to weights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen strength sessions completed over eight weeks, with a strength test recorded before and after."
                cadence: rolling
              tasks:
                - "Ask your clinician whether there are any limits on strength exercise"
                - "Time how many chair stands you can do in thirty seconds"
                - "Complete a twenty-minute strength session @recurring(weekly:tue,fri)"
                - "Repeat the chair stand test after eight weeks"
            - name: Yearly metabolic blood tests
              description: |-
                ## Purpose
                Blood sugar, cholesterol and liver results often improve within months of meaningful weight loss, and can drift back without warning if weight returns. Repeating the same panel each year, a fortnight before your annual review, shows whether risk is really falling and gives the review something to work with.

                ## Milestones
                1. The panel confirmed with your clinician as the same tests as your baseline.
                2. Bloods booked two weeks before the annual review each year.
                3. Results added beside previous years in your log.
                4. Changes discussed and any new action noted at the review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two consecutive years of matching metabolic blood panels are recorded side by side, each discussed at an annual review."
                cadence: cyclic
              tasks:
                - "Confirm with your clinician which tests make up your yearly panel"
                - "Book the yearly bloods two weeks before your annual review @recurring(yearly)"
                - "Add the new results beside last year's in your log"
            - name: Daily protein and fluid check during treatment
              description: |-
                ## Purpose
                When appetite drops sharply on medication or after surgery, people can go days with too little protein or fluid without noticing, which brings dizziness, constipation, hair thinning and muscle loss. A quick end-of-day check against the targets your dietitian gave catches a poor day before it becomes a poor fortnight.

                ## Milestones
                1. Daily protein and fluid targets agreed with your dietitian or clinic.
                2. A simple tally method chosen, such as a phone note or a marked bottle.
                3. The check done on most days for six weeks.
                4. Days below target discussed at your next review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of daily protein and fluid tallies are recorded against targets set by a dietitian or clinic."
                cadence: rolling
              tasks:
                - "Ask your dietitian or clinic for daily protein and fluid targets"
                - "Mark a water bottle so you can see how much you have drunk"
                - "Tally today's protein and fluid against your targets @recurring(daily)"
            - name: How weight loss medicines work
              description: |-
                ## Purpose
                Modern weight medicines mostly act on gut hormones that reduce appetite and slow stomach emptying, while older ones work differently, and the mechanism explains both the side effects and why weight often returns when they stop. Understanding the medicine you are offered lets you ask sharper questions and judge claims in the news and online.

                ## Milestones
                1. The main groups of licensed weight medicines listed with how each works.
                2. Typical trial results for each group noted in plain words.
                3. Common side effects and who should not take each group written down.
                4. What usually happens after stopping understood and noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note covers how each licensed weight medicine group works, typical results, main side effects and what happens on stopping."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's patient information on weight loss medicines"
                - "Write one sentence on how each medicine group works"
                - "Note who should not take each one and why"
                - "List three questions for your prescriber from what you read"
            - name: BMI, waist ratio and their limits
              description: |-
                ## Purpose
                BMI is the gatekeeper for most referrals and prescriptions, yet it ignores muscle, fat distribution and ethnicity, and thresholds are lower for some groups, including people of South Asian, Chinese, Black African and Caribbean heritage. Knowing what each measure does and does not tell you helps you understand eligibility decisions and question them when they seem wrong.

                ## Milestones
                1. How BMI is calculated and its standard categories understood.
                2. Adjusted thresholds that apply to your ethnicity checked.
                3. Waist-to-height ratio and its suggested cut-off learned.
                4. Your own numbers interpreted in a short written note.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written note interprets your BMI and waist-to-height ratio, including any adjusted thresholds that apply to you."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up whether adjusted BMI thresholds apply to your ethnicity"
                - "Read how waist-to-height ratio is used to judge risk"
                - "Write a short note interpreting your own two numbers"
            - name: Reading your metabolic blood results
              description: |-
                ## Purpose
                Results letters often say only normal or abnormal, yet an HbA1c creeping towards the prediabetes range or a raised liver enzyme is exactly what weight treatment aims to reverse. Learning what HbA1c, the lipid profile and ALT measure, and where your results sit in each range, means you can follow the effect of treatment rather than waiting to be told.

                ## Milestones
                1. What HbA1c, total and LDL cholesterol, triglycerides and ALT each measure understood.
                2. The ranges your lab uses copied next to your results.
                3. Each of your results described as normal, borderline or raised.
                4. Questions about any borderline result taken to your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each of your metabolic results is labelled normal, borderline or raised against your lab's ranges, with questions about borderline ones answered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Get a copy of your latest results with their reference ranges"
                - "Read what HbA1c, lipids and ALT each measure"
                - "Label each of your results normal, borderline or raised"
                - "Take any borderline result to your clinician as a question"
            - name: Injection technique with a pen device
              description: |-
                ## Purpose
                Pen devices are simple once learned but easy to get wrong the first time: priming, holding for the full count and choosing the right site all matter. Having a nurse or pharmacist watch your first injection, or using the manufacturer's training pen, means the first dose goes in properly and you are confident for the rest.

                ## Milestones
                1. The pen's instructions read and the demonstration video watched.
                2. A first injection given under supervision or with a training device.
                3. Correct storage, priming and hold time written as a short routine.
                4. Needle disposal arranged.

                ## Notes
                Each brand of pen works a little differently. Learn the one you have, not one you saw online.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A first injection has been given correctly under supervision, and a written routine for your pen is kept with the medicine."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Watch the manufacturer's instruction video for your exact pen"
                - "Ask a nurse or pharmacist to watch your first injection"
                - "Write your pen's storage, priming and hold steps on one card"
            - name: Eating well on a much smaller appetite
              description: |-
                ## Purpose
                On appetite-reducing medicines or after surgery, portions can shrink to a third of what they were, and the risk shifts from eating too much to eating too little of what matters. Learning to put protein first, eat slowly, stop at the first sign of fullness and keep drinks separate from meals reduces nausea and protects nutrition.

                ## Milestones
                1. Five protein-rich foods you tolerate well identified.
                2. Smaller plates and slower eating practised for two weeks.
                3. Drinks moved away from mealtimes if your clinic advises it.
                4. Foods that trigger nausea or reflux noted and avoided.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of five well-tolerated protein foods and three trigger foods exists, and smaller-portion eating has been practised for two weeks."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List five protein-rich foods you can eat in small portions"
                - "Serve meals on a side plate for the next two weeks"
                - "Note which foods bring on nausea or reflux and drop them"
                - "Ask your clinic whether to drink separately from meals"
            - name: Bariatric surgery types explained
              description: |-
                ## Purpose
                Sleeve gastrectomy, gastric bypass and the less common operations differ in expected weight loss, effect on diabetes and reflux, reversibility and lifelong nutritional needs. Understanding the main options before a surgical consultation means the conversation can be about which suits you, not about the basics.

                ## Milestones
                1. The main operations described in plain words.
                2. Typical outcomes, risks and lifelong commitments compared in a table.
                3. Factors that favour one operation over another for you noted, such as reflux or diabetes.
                4. Questions for the surgeon written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table of the main bariatric operations, with your own questions for the surgeon, is complete."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a surgical society's patient guide to the main operations"
                - "Build a table comparing outcomes, risks and lifelong needs"
                - "Mark which factors in your own health point to one operation"
                - "Write five questions to ask the surgeon"
            - name: Recognising emotional and binge eating
              description: |-
                ## Purpose
                Eating in response to stress, boredom or low mood is common, and binge eating disorder affects a meaningful share of people seeking weight treatment. Recognising these patterns, and getting psychological support where needed, is often a condition of surgery and improves results from any treatment.

                ## Milestones
                1. The difference between emotional eating and binge eating disorder understood.
                2. A weekly reflection kept on eating that felt out of control.
                3. Any pattern raised with your doctor or the clinic psychologist.
                4. Support arranged if recommended, such as talking therapy.

                ## Notes
                If you are restricting heavily, making yourself sick or feel out of control around food, tell your doctor. Eating disorders are treatable and need specialist help.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Eight weekly reflections are recorded and any pattern has been discussed with a doctor or psychologist."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reputable explanation of binge eating disorder"
                - "Write a short reflection on any eating that felt out of control @recurring(weekly:fri)"
                - "Raise any pattern with your doctor or clinic psychologist"
            - name: Speaking up about weight stigma in appointments
              description: |-
                ## Purpose
                Many people with obesity delay care because past appointments felt judgemental, or because every symptom was put down to weight. Learning a few calm phrases for redirecting a conversation, asking for the right-sized equipment and requesting a different clinician if needed protects both your dignity and your care.

                ## Milestones
                1. Three phrases prepared for steering a conversation back to your question.
                2. Equipment needs noted, such as a large blood pressure cuff or a wider chair.
                3. How to request a different clinician or make a complaint looked up.
                4. One appointment attended using the prepared phrases.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three prepared phrases and an equipment note are written down and used at a real appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write three phrases that bring a consultation back to your concern"
                - "Note any equipment you need, such as a large cuff"
                - "Look up how your practice handles requests for another clinician"
            - name: Weight medication eligibility and decision
              description: |-
                ## Purpose
                Whether you are offered a weight medicine depends on your BMI, related conditions, past attempts and the rules of your health system or insurer. Checking eligibility, weighing benefits against side effects and long-term cost, and making the decision with your clinician means you start treatment, or decline it, for clear reasons.

                ## Milestones
                1. Eligibility criteria for your health system or insurer confirmed.
                2. Your BMI, conditions and previous attempts matched against them.
                3. Benefits, side effects, monitoring and duration discussed with a clinician.
                4. A decision recorded: start, wait, or choose another route.

                ## Notes
                Expect to take these medicines for a long time; trial evidence shows most people regain weight after stopping.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to start, wait or pursue another route is recorded, with the eligibility criteria and reasons noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the eligibility rules your health system or insurer uses"
                - "Check your BMI and related conditions against those rules"
                - "Discuss benefits, side effects and duration with your clinician"
                - "Write down your decision and the reasons behind it"
            - name: Public, insured or private medication route
              description: |-
                ## Purpose
                The same medicine may be available through a public specialist service, an insurer or a private online prescriber, with very different waiting times, monitoring and costs that run for years. Comparing the routes on safety, follow-up and total two-year cost avoids a choice made on the first advert you saw.

                ## Milestones
                1. Each route available to you listed with its waiting time.
                2. Monitoring and follow-up offered by each compared.
                3. Total two-year cost estimated for each paid route.
                4. A route chosen and the reasons recorded.

                ## Notes
                Start from the **Purchase decision** template. Whichever route you choose, make sure your regular doctor knows you are taking the medicine.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of at least two routes on waiting time, monitoring and two-year cost ends in a recorded choice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every route to weight medication open to you"
                - "Compare the monitoring each route provides"
                - "Estimate the total cost of each paid route over two years"
                - "Tell your regular doctor which route you chose"
            - name: Checking an online weight loss provider is legitimate
              description: |-
                ## Purpose
                Counterfeit pens, unlicensed compounded products and sellers who skip any health check are a real and growing problem, and some fakes have caused hospital admissions. Checking registration, prescriber details and the supply chain before paying protects you from medicine that is ineffective or dangerous.

                ## Milestones
                1. The provider's registration with the pharmacy or medical regulator confirmed.
                2. A named prescriber and a genuine health questionnaire or consultation seen.
                3. The product confirmed as a licensed medicine supplied by a registered pharmacy.
                4. A red flag list written: no prescription needed, social media sales, prices far below others.

                ## Notes
                Never buy injectable weight medicines from social media, beauty salons or sellers who do not need a prescription.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The provider's regulator registration, named prescriber and licensed product have been checked and recorded before any payment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Search the national pharmacy regulator's register for the provider"
                - "Confirm the name and registration of the prescriber"
                - "Check the product is a licensed medicine, not a compounded copy"
                - "Write your red flag list before looking at any other provider"
            - name: Bariatric surgery referral decision
              description: |-
                ## Purpose
                Surgery remains the most effective long-term treatment for severe obesity, but it is a lifelong commitment with a long assessment pathway. Deciding whether to ask for a referral, after understanding the criteria, the waiting time and the follow-up you would sign up to, is a decision worth making deliberately and early, because the pathway can take a year or more.

                ## Milestones
                1. Referral criteria in your health system checked against your situation.
                2. The pathway steps and typical waiting time understood.
                3. A conversation held with someone who has had the operation, through a support group if possible.
                4. A decision made with your doctor to request a referral or not, and the reasons recorded.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on whether to request a bariatric referral, made with your doctor, with criteria and reasons noted."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Look up the bariatric referral criteria in your health system"
                - "Find a bariatric patient support group and attend a meeting"
                - "List what lifelong follow-up the operation would require"
                - "Ask your doctor for a referral, or record why you are waiting"
            - name: Choosing a structured weight programme
              description: |-
                ## Purpose
                Dietitian-led programmes, total diet replacement and commercial group programmes all have trial evidence, but they suit different people, budgets and schedules. Comparing two or three options on evidence, support, cost and what happens at the end makes it more likely you finish the programme rather than leaving in week three.

                ## Milestones
                1. Programmes available through your doctor and privately listed.
                2. Two or three compared on evidence, contact time, cost and length.
                3. Practical fit checked against your work, family and budget.
                4. A programme chosen and a start date set.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A programme has been chosen from a comparison of at least two, with a start date booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor which weight programmes they can refer you to"
                - "Compare two or three programmes on support, cost and length"
                - "Check each one against your working hours and family commitments"
                - "Book a start date with the programme you choose"
            - name: Supervised very low calorie diet decision
              description: |-
                ## Purpose
                Total diet replacement with shakes or soups for eight to twelve weeks can produce large losses and even remission of recent type 2 diabetes, but it needs medical supervision, especially if you take medicines for diabetes or blood pressure. Deciding whether it suits you, with a clinician checking your medicines, avoids the risks of attempting it alone.

                ## Milestones
                1. How supervised total diet replacement works and who it is for understood.
                2. Your medicines reviewed by a clinician for changes needed during the diet.
                3. A supervised programme identified, with the reintroduction phase included.
                4. A go or no-go decision recorded with your clinician.

                ## Notes
                Do not start a very low calorie diet while taking diabetes or blood pressure medicines without your clinician adjusting them first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A go or no-go decision on supervised total diet replacement is recorded after a clinician has reviewed your medicines."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read how supervised total diet replacement programmes work"
                - "Ask your clinician which medicines would need changing"
                - "Find out whether a supervised programme is offered locally"
                - "Record a go or no-go decision with your clinician"
            - name: Planning to stop or reduce weight medication
              description: |-
                ## Purpose
                Most people regain a large part of the weight lost within a year of stopping a weight medicine unless something else takes its place. Planning a stop or step-down with your prescriber, with a monitoring routine and a clear point at which to seek help, gives the best chance of keeping the benefit.

                ## Milestones
                1. The reason for stopping agreed: target reached, side effects, cost or supply.
                2. A stopping or tapering approach agreed with your prescriber.
                3. Supporting habits in place first: strength training, meal planning, weekly weigh-ins.
                4. A regain threshold set at which you will book a review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written stopping plan agreed with your prescriber, including a regain threshold, is followed with monthly checks for six months."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment to plan stopping with your prescriber"
                - "Agree a regain threshold that will trigger a review"
                - "Compare this month's average weight with your threshold @recurring(monthly:12)"
            - name: Bariatric pre-operative assessment and liver diet
              description: |-
                ## Purpose
                Before bariatric surgery most teams require assessments by a dietitian, psychologist and anaesthetist, and a strict low calorie liver-reduction diet for one to four weeks to make the operation safer. Treating the weeks before surgery as a project, with appointments, tests and the diet planned, avoids a cancelled date.

                ## Milestones
                1. Every pre-operative appointment and test booked and attended.
                2. The liver-reduction diet plan, start date and shopping arranged.
                3. Medicines to pause or change before surgery confirmed in writing.
                4. Time off work, transport and help at home arranged for the recovery period.

                ## Notes
                Follow the liver-reduction diet exactly. Surgeons may postpone if the liver is still too large to operate around safely.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All pre-operative assessments are complete and the liver-reduction diet has been followed in full by the surgery date."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every pre-operative appointment the surgical team requires"
                - "Get the liver-reduction diet plan and its start date in writing"
                - "Confirm which medicines to pause before surgery"
                - "Arrange time off and help at home for the first fortnight"
            - name: First eight weeks after bariatric surgery
              description: |-
                ## Purpose
                After bariatric surgery food is reintroduced in stages, usually liquids, then purees, then soft foods, over several weeks, and moving too fast causes pain, vomiting or worse. Following the stage plan exactly, with vitamins started and warning signs known, gets you through the riskiest period safely.

                ## Milestones
                1. The team's stage plan written with dates for each stage.
                2. Supplements started as prescribed before leaving hospital.
                3. Warning signs that need urgent contact listed with the team's phone number.
                4. The first post-operative clinic and dietitian appointments attended.

                ## Notes
                Persistent vomiting, a fast heart rate, fever or worsening abdominal pain after surgery need urgent contact with the surgical team.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All diet stages are completed on the team's schedule and the first two follow-up appointments are attended."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the diet stages and their dates on the fridge"
                - "Save the surgical team's urgent contact number in your phone"
                - "Prepare and freeze purees for the second stage before surgery"
                - "Attend the first post-operative clinic and dietitian appointments"
            - name: First assessment at a specialist weight clinic
              description: |-
                ## Purpose
                A specialist clinic assessment can last an hour or more and may involve a doctor, dietitian, psychologist and physiotherapist. Arriving with your history, measurements, medicines and goals prepared, and knowing what the clinic offers, makes the most of an appointment you may have waited months for.

                ## Milestones
                1. The clinic's letter read and any forms completed in advance.
                2. Weight timeline, baseline log, results and medicines list packed.
                3. Your goals and the treatments you want to discuss written down.
                4. The agreed plan and next appointment noted before leaving.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first clinic assessment is attended with prepared documents, and the agreed plan and next appointment are written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Complete any questionnaires the clinic sent with the letter"
                - "Pack your timeline, results and medicines list the night before"
                - "Write down which treatments you want to ask about"
                - "Note the plan and next appointment date before you leave"
            - name: Five percent milestone review
              description: |-
                ## Purpose
                Many services judge whether a medicine or programme is working by whether you have lost around five percent of starting weight within a set period. Preparing for this review, with the trend, waist, blood pressure and side effects summarised, helps the decision to continue or change rest on evidence.

                ## Milestones
                1. The review point and the service's continuation criteria confirmed.
                2. Weight trend, waist and blood pressure summarised against baseline.
                3. Side effects and adherence summarised honestly.
                4. The continue or change decision recorded.

                ## Notes
                Falling short of five percent is not failure; it is information for choosing a better-suited treatment.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A summary comparing current measurements with baseline is presented at the review and the continue or change decision recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your prescriber when the continuation review falls"
                - "Calculate your percentage change from baseline weight"
                - "Summarise waist, blood pressure and side effects on one page"
                - "Record whether treatment continues or changes"
            - name: Travelling with injectable weight medication
              description: |-
                ## Purpose
                Pens need to stay within a temperature range, needles raise questions at security, and a missed weekly dose abroad can mean restarting side effects. Planning storage, paperwork and dose timing before a trip keeps treatment on track without problems at the airport.

                ## Milestones
                1. Storage rules for your pen out of the fridge checked from the leaflet.
                2. A cool bag or travel case chosen for the trip.
                3. A prescription copy or letter from your prescriber packed.
                4. Dose day adjusted for time zones if needed, after checking with the pharmacist.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip is completed with medication kept in range, paperwork carried and no missed dose."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check how long your pen can stay out of the fridge"
                - "Ask your prescriber for a letter covering pens and needles"
                - "Pack the medicine in hand luggage with a cool pack"
                - "Ask the pharmacist how to time your dose across time zones"
            - name: Weight medication and pregnancy planning
              description: |-
                ## Purpose
                Most weight medicines are not recommended in pregnancy and some need stopping weeks or months before trying to conceive, while rapid weight loss can also change fertility and the effect of oral contraception. Planning with your clinician before pregnancy is possible protects both treatment and a future baby.

                ## Milestones
                1. Contraception advice for your medicine checked, including any effect on the pill.
                2. How long before conception the medicine should stop confirmed with your prescriber.
                3. A preconception plan agreed for weight, supplements and timing.
                4. A plan for what to do in case of unplanned pregnancy written down.

                ## Notes
                If you become pregnant while taking a weight medicine, contact your prescriber promptly rather than waiting for your next review.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written preconception plan covering contraception, stopping time and supplements has been agreed with your prescriber."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read the pregnancy and contraception section of your medicine's leaflet"
                - "Ask whether your medicine affects how well the pill works"
                - "Agree with your prescriber when to stop before trying to conceive"
            - name: Meeting a BMI threshold for joint replacement
              description: |-
                ## Purpose
                Some orthopaedic and gynaecological surgeons will not operate above a set BMI because complication risks rise, which can leave people in pain unable to move enough to lose weight. Working with your doctor on a time-limited weight plan, and keeping the surgeon informed, can bring the operation within reach.

                ## Milestones
                1. The surgeon's BMI threshold and the reason for it confirmed in writing.
                2. A realistic plan and timescale agreed with your doctor, which may include medication.
                3. Pain-friendly activity options agreed with a physiotherapist.
                4. Progress letters sent to the surgical team at agreed intervals.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written plan with a target BMI and timescale is agreed with your doctor and progress is reported to the surgical team."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the surgical team for their BMI threshold in writing"
                - "Agree a time-limited weight plan with your doctor"
                - "Ask a physiotherapist for activity that does not worsen the joint"
                - "Send a progress update to the surgical team every three months"
            - name: Weight treatment around shift work
              description: |-
                ## Purpose
                Night and rotating shifts disrupt appetite hormones, meal timing and sleep, and make standard advice about breakfast, weekly injection days and appointments hard to follow. Adapting the plan to your rota, with your clinician's agreement, keeps treatment consistent across a changing week.

                ## Milestones
                1. Your typical rota pattern shared with your clinician or dietitian.
                2. Meal timing agreed for night shifts and days off.
                3. Injection or medicine timing fixed to a point in the rota that never moves.
                4. Appointments arranged at times that fit around sleep after nights.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written meal and medicine timing plan for your rota is agreed with your clinician and followed through one full rota cycle."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write out your rota pattern for the next month"
                - "Agree meal timing for night shifts with your dietitian"
                - "Fix your medicine day to a point in the rota that stays the same"
                - "Prepare two night-shift meals in advance each rota"
            - name: Weight care when mobility is limited
              description: |-
                ## Purpose
                Standard scales, exercise advice and clinic equipment often do not work for wheelchair users or people with severe joint or neurological conditions. Arranging accessible weighing, alternative measures and chair-based strength work with your care team makes clinical weight management possible on your terms.

                ## Milestones
                1. Access to a wheelchair or seated scale arranged through a clinic or pharmacy.
                2. An alternative measure agreed if weighing is impractical, such as mid-upper arm circumference.
                3. A seated strength and movement routine agreed with a physiotherapist.
                4. Pressure care and skin checks included in reviews where relevant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A regular accessible measurement and a physiotherapist-agreed seated routine are both in place and recorded monthly."
                cadence: rolling
              tasks:
                - "Ask your practice where you can use a wheelchair or seated scale"
                - "Agree an alternative measure with your clinician if weighing is hard"
                - "Ask a physiotherapist for a seated strength routine"
                - "Record your accessible measurement in the log @recurring(monthly:22)"
            - name: Supporting a family member through bariatric surgery
              description: |-
                ## Purpose
                Partners and adult children often take on cooking, driving and reassurance around bariatric surgery, and household meals change for months. Understanding the diet stages, warning signs and emotional ups and downs means you can help without policing what they eat.

                ## Milestones
                1. The diet stages and warning signs learned alongside them.
                2. Household meals adapted so they are not eating separately every night.
                3. Practical help agreed for the first fortnight after surgery.
                4. A weekly check-in agreed on how they want to be supported.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A support plan agreed with your family member covers the first fortnight and weekly check-ins continue for three months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask whether you can attend a pre-operative education session with them"
                - "Agree which practical tasks you will cover in the first fortnight"
                - "Ask how they would like to be supported this week @recurring(weekly:thu)"
            - name: Responding to weight regain
              description: |-
                ## Purpose
                Some regain after surgery or stopping medication is common and is a medical issue to raise, not a personal failure to hide. Catching it early, finding the likely cause and returning to your team quickly opens options such as restarting medicine, dietitian support or surgical review.

                ## Milestones
                1. A regain threshold set that will prompt action.
                2. Possible causes listed: stopped medicine, grazing, new medicines, life events.
                3. An appointment booked once the threshold is crossed.
                4. A revised plan agreed and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A regain threshold is set and, if crossed, an appointment is held within a month and a revised plan recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Set a regain threshold in kilograms below which you act"
                - "Check your weekly trend against the threshold @recurring(monthly:8)"
                - "List what has changed in medicines, routine or life recently"
                - "Book a review with your team once the threshold is crossed"
            - name: Lifelong bariatric follow-up and vitamins
              description: |-
                ## Purpose
                After bariatric surgery, especially bypass, the body absorbs less iron, vitamin B12, calcium, vitamin D and other nutrients for life, and deficiencies can cause anaemia, bone loss or nerve damage years later. Daily supplements and yearly blood tests, kept up long after the surgical team discharges you, prevent problems that are easy to miss.

                ## Milestones
                1. The supplements your team prescribed listed with how often each is taken.
                2. A daily supplement routine in place.
                3. Yearly bariatric blood tests arranged with your regular doctor after discharge.
                4. Any B12 injections scheduled if prescribed.

                ## Notes
                Many people stop supplements once they feel well. Deficiencies can take years to show and some cause lasting harm.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Daily supplements are taken and recorded, and a yearly bariatric blood panel is completed after discharge from the surgical team."
                cadence: rolling
              tasks:
                - "List each supplement your bariatric team prescribed and when to take it"
                - "Take your bariatric supplements and tick them off @recurring(daily)"
                - "Book the yearly bariatric blood tests with your doctor @recurring(yearly)"
            - name: Body composition tracking with your clinic
              description: |-
                ## Purpose
                Weight cannot distinguish lost fat from lost muscle, which matters most during fast loss on medication or after surgery. Some clinics offer bioimpedance or DEXA body composition measurements; using one method consistently at intervals tells you whether strength work is protecting muscle.

                ## Milestones
                1. Available body composition methods and their accuracy understood.
                2. One method chosen and a baseline measurement taken.
                3. Repeat measurements taken at the same time of day on the same device.
                4. Results discussed with your clinician alongside strength test results.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three body composition measurements taken with the same method are recorded and discussed with a clinician."
                cadence: rolling
              tasks:
                - "Ask your clinic whether body composition measurement is available"
                - "Book a baseline measurement before or early in treatment"
                - "Repeat the measurement on the same device @recurring(quarterly)"
            - name: Excess skin and body contouring referral
              description: |-
                ## Purpose
                After large weight loss, excess skin can cause rashes, infections and difficulty with exercise or clothing, and some health systems fund removal when strict criteria are met. Documenting problems and understanding criteria, such as a stable weight for a set period, helps a referral succeed.

                ## Milestones
                1. Funding criteria in your health system or insurer checked.
                2. Skin problems documented with dates, treatments and photographs.
                3. Weight stability recorded for the required period.
                4. A referral discussed with your doctor and the outcome recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A record of skin problems and weight stability has been reviewed with your doctor and a referral decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the criteria for funded excess skin surgery where you live"
                - "Photograph and date any rashes or infections in skin folds"
                - "Record your weight stability over the period the criteria require"
                - "Discuss a referral with your doctor"
            - name: Long-term weight maintenance plan
              description: |-
                ## Purpose
                Keeping weight off is a separate phase from losing it, with its own risks and routines, and people who have it written down fare better. A one-page plan agreed with your care team, listing what you keep doing, what you monitor and what triggers a review, turns years of treatment into something you can sustain.

                ## Milestones
                1. The routines that worked during loss reviewed and the ones to keep chosen.
                2. Monitoring agreed: weigh-in frequency, waist and yearly bloods.
                3. A regain trigger and the action it prompts written down.
                4. The plan shared with your doctor and filed with your records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page maintenance plan with monitoring, routines and a regain trigger is agreed with your care team and on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the routines that helped most while losing weight"
                - "Ask the agent to draft a one-page maintenance plan from your notes"
                - "Agree the monitoring and regain trigger with your care team"
                - "Review the maintenance plan with your clinician each year @recurring(yearly)"
---

# Clinical Weight Management

This area is for anyone working with doctors, nurses, dietitians or a specialist clinic on weight as a health matter rather than a matter of willpower. It starts with the foundations (honest measurements, a weight history, a prepared first appointment and the blood tests that show metabolic risk), then the routines that keep treatment safe, the knowledge that makes medicine and surgery decisions clearer, the choices between treatment routes, the dated events of a surgical pathway, the situations that change the plan, and finally the long-term follow-up an experienced patient runs.

What repeats is a weekly weigh-in, a monthly waist and trend check, a quarterly review with your prescriber, the yearly metabolic blood tests, and for those on treatment a weekly injection day, a monthly supply reorder and lifelong vitamin checks after surgery. The Metrics log, Purchase decision, Meeting notes, Weekly meal plan and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
