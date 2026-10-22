---
id: physical-health.asthma-copd-care
name: Asthma & COPD Care
description: "A written action plan, inhalers used well and never run out, peak flow and symptom records your clinician can use, and plans for attacks, flare-ups, school and winter."
category: personal
version: 1.0.0
tags: [physical-health, asthma-copd-care, everyone, parent, asthma, copd, inhalers, peak-flow]
author: Aurum Technology
starter_structure:
  templates:
    - habit-tracker
    - metrics-log
    - meeting-notes
    - purchase-decision
    - trip
    - training-program
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Asthma & COPD Care
          description: "Managing asthma or COPD with inhaler routines, action plans, peak flow tracking, trigger avoidance and annual reviews, for children and adults with breathing conditions."
          projects:
            - name: Written asthma or COPD action plan
              description: |-
                ## Purpose
                Fewer than half of people with asthma have a written action plan, yet having one is linked to fewer emergency visits. A single page agreed with your clinician says what to take every day, what to do when symptoms or peak flow worsen, and the exact point at which to call for help, so nobody in the house has to guess during a bad night.

                ## Milestones
                1. An appointment booked with the practice nurse, doctor or respiratory team to write the plan.
                2. A plan on paper or screen with green, amber and red sections in your own clinician's words.
                3. Your personal best peak flow or usual symptom level written on the plan, if your clinician uses one.
                4. Copies stored on your phone, on the fridge and with anyone who looks after you or your child.

                ## Notes
                Many asthma and lung charities publish blank action plan forms that clinicians are happy to fill in. Bring one to the appointment if your practice does not have its own.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written action plan agreed with your clinician, with all three zones filled in, is saved on your phone and shared with your household."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone the practice and ask for an appointment to write an action plan"
                - "Download a blank action plan form from a lung charity to bring along"
                - "Ask your clinician to fill in every zone, including when to call for help"
                - "Photograph the finished plan and send it to everyone who needs it"
            - name: Inhaler inventory of relievers, preventers and maintenance
              description: |-
                ## Purpose
                Most people collect inhalers over the years and end up unsure which one is for emergencies and which must be taken every day, especially when two devices are the same colour. Listing every inhaler, nebuliser and tablet with its job, its device type and how often it is prescribed clears out old stock and catches gaps before they matter.

                ## Milestones
                1. Every inhaler in the house gathered in one place, including old ones in bags and drawers.
                2. A list showing each device's name, colour, job (reliever, preventer or maintenance) and prescribed use.
                3. Expired or discontinued inhalers returned to a pharmacy for disposal.
                4. Any confusion about what an inhaler is for raised with your pharmacist.

                ## Notes
                Inhaler colours are not standard across brands or countries. Go by the name on the label, not the colour you remember.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written list of every current inhaler with its job and prescribed use, with expired stock returned to a pharmacy."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect every inhaler from bags, coats, the car and drawers onto one table"
                - "Write down each inhaler's name, job and how often it is prescribed"
                - "Return expired or no longer prescribed inhalers to a pharmacy"
                - "Ask the pharmacist about any inhaler whose purpose is unclear"
            - name: Inhaler technique check with a nurse or pharmacist
              description: |-
                ## Purpose
                Studies regularly find that most people make at least one error with their inhaler, which means much of the medicine lands in the mouth instead of the lungs. A ten-minute check where a nurse or pharmacist watches you use each device is often the single biggest improvement available, before any change of medicine is considered.

                ## Milestones
                1. A technique check booked for every device you use, including spacers.
                2. Each device demonstrated in front of a professional and any errors corrected.
                3. The corrected steps written down or a reputable technique video saved for each device.
                4. A note made of whether your device suits your breathing, for example if a dry powder inhaler needs a stronger breath than you can manage.

                ## Notes
                Bring the actual inhalers, not just the names. Many pharmacies offer this check free as part of a medicines review.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every device has been demonstrated to a nurse or pharmacist within the month, with corrected steps written down for each."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacy or practice nurse for an inhaler technique check"
                - "Pack every inhaler and spacer you use to take to the check"
                - "Save a technique video for each device from a lung charity site"
                - "Write down any step you were doing wrong"
            - name: Personal best peak flow baseline
              description: |-
                ## Purpose
                Peak flow numbers only mean something compared with your own best, and the charts based on height and age can be far from what your lungs actually do. Two weeks of morning and evening readings while you are well gives your clinician a personal best to build the action plan zones around.

                ## Milestones
                1. A peak flow meter at home, prescribed or bought, with its scale noted.
                2. Best of three blows recorded morning and evening for fourteen days.
                3. The highest reading from the fortnight marked as your personal best.
                4. The personal best shared with your clinician and written on your action plan.

                ## Notes
                Use the same meter every time; different meters can read differently. Peak flow is less useful in COPD and for young children, so ask your clinician whether it suits you.
              priority: high
              deadlineOffsetDays: 28
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Fourteen days of morning and evening peak flow readings, with a personal best agreed with your clinician and written on the action plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your practice whether peak flow suits your condition and for a meter"
                - "Blow three times each morning and evening for fourteen days and log the best"
                - "Mark the highest reading of the fortnight as your personal best"
                - "Send the readings to your clinician to set the action plan zones"
            - name: Asthma attack and COPD flare warning card
              description: |-
                ## Purpose
                In a bad attack the person struggling to breathe is the least able to explain what is happening or what they take. A wallet card and phone lock-screen note listing your condition, inhalers, the danger signs from your action plan and an emergency contact lets a partner, teacher or stranger act quickly.

                ## Milestones
                1. The red-zone danger signs copied word for word from your action plan.
                2. A card listing condition, current inhalers, allergies and an emergency contact.
                3. The same details on your phone's emergency information screen.
                4. Household members told where the card and reliever are kept.

                ## Notes
                Keep it to what your own action plan says. If you do not yet have a plan, finish that project first and treat any severe breathlessness as an emergency.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A wallet card and phone emergency screen both show your condition, inhalers, red-zone signs and an emergency contact."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Copy the red-zone signs from your action plan onto an index card"
                - "Add your inhalers, allergies and one emergency contact"
                - "Fill in the emergency medical information screen on your phone"
                - "Show everyone at home where the card and reliever are kept"
            - name: Symptom control score baseline
              description: |-
                ## Purpose
                People with long-standing asthma or COPD often get used to symptoms and rate themselves as fine when they are not. A short standard questionnaire, such as an asthma control test or a COPD assessment test, turns night waking, reliever use and breathlessness into a score you can compare each month and show your clinician.

                ## Milestones
                1. The questionnaire your clinician prefers identified.
                2. A first score recorded with the date and any recent cold or flare noted.
                3. The score compared with the cut-off your clinician uses for poor control.
                4. The baseline score written beside your action plan for later comparison.

                ## Notes
                These questionnaires take under five minutes and are free from most lung charities. They support, not replace, what your clinician thinks.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score on a standard control questionnaire is recorded and compared with your clinician's cut-off."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician which control questionnaire they use"
                - "Complete the questionnaire and record the score with today's date"
                - "Note any cold, flare or steroid course in the last month beside it"
                - "Mention the score at your next appointment if it is below the cut-off"
            - name: Confirming the diagnosis with breathing tests
              description: |-
                ## Purpose
                A surprising number of adults were labelled with asthma or COPD on symptoms alone, and some turn out to have something else, or both. Spirometry, a reversibility test and sometimes a FeNO breath test give an objective record that guides every later treatment decision and is needed for most specialist referrals.

                ## Milestones
                1. Your record checked for any previous spirometry or breathing test results.
                2. Testing requested if the diagnosis was never confirmed objectively.
                3. Pre-test instructions followed, such as which inhalers to pause and for how long, as your clinic advises.
                4. The results and the confirmed diagnosis written into your breathing history.

                ## Notes
                Never stop an inhaler before a test unless the clinic has told you to, and only for the time they give.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your diagnosis is confirmed or revised by spirometry or other breathing tests, with the results filed in your records."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search the patient portal for any past spirometry results"
                - "Ask your clinician whether your diagnosis was confirmed by breathing tests"
                - "Read the clinic's instructions on which inhalers to pause before testing"
                - "File the test report and the confirmed diagnosis with your records"
            - name: Spacer for every pressurised inhaler
              description: |-
                ## Purpose
                A spacer can roughly double the medicine that reaches the lungs from a pressurised inhaler and cuts the mouth and throat side effects of steroid inhalers, yet many adults have never been offered one. Getting the right spacer, with a mask for young children, for every aerosol inhaler in the house is a quick, cheap win.

                ## Milestones
                1. Every pressurised aerosol inhaler in the house matched to a compatible spacer.
                2. A mask spacer for any child too young to seal their lips around a mouthpiece.
                3. A second spacer for school, work or a grandparent's house where needed.
                4. A replacement date noted, usually about a year, or as the maker advises.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every aerosol inhaler in use has a compatible spacer, including a mask version for young children, with replacement dates noted."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List which inhalers in the house are pressurised aerosols"
                - "Ask the pharmacist which spacer fits each one"
                - "Request a mask spacer for any child under about four"
                - "Write each spacer's replacement date on your inhaler list"
            - name: Breathing condition history for your care team
              description: |-
                ## Purpose
                Every new clinician asks the same questions: when you were diagnosed, how many steroid courses you have had, whether you have ever been admitted or needed intensive care, and your smoking history. A one-page history answers them in seconds and flags the risk factors, such as frequent steroid courses, that should change how closely you are watched.

                ## Milestones
                1. Diagnosis date and confirming tests listed.
                2. Steroid tablet courses and antibiotic courses for the past two years counted.
                3. Hospital admissions, emergency visits and any intensive care stays listed with dates.
                4. Smoking and workplace exposure history written in a sentence or two.
                5. The page saved where you can show it at any appointment.

                ## Notes
                Ask the agent to turn your rough notes into a tidy one-page summary, then check every date against your records.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page breathing history with diagnosis, steroid courses, admissions and exposures is saved and ready to show at appointments."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count the steroid tablet courses on your prescription record for two years"
                - "List every emergency visit and hospital stay for breathing with dates"
                - "Ask the agent to draft a one-page history from your notes"
                - "Save the page on your phone and print a copy for appointments"
            - name: Daily preventer routine tied to brushing teeth
              description: |-
                ## Purpose
                Preventer and maintenance inhalers work by calming the airways over weeks, so they only help if taken every day, including the weeks you feel well. Tying the dose to brushing your teeth puts the inhaler beside the sink and makes the mouth rinse after a steroid inhaler automatic.

                ## Milestones
                1. The preventer kept beside the toothbrush, out of reach of young children.
                2. A daily tick recorded for at least four weeks.
                3. Missed doses noticed and the reason written down.
                4. A pharmacy check of your refill record shows doses taken as prescribed.

                ## Notes
                Start from the **Habit tracker** template. Rinsing and spitting after a steroid inhaler reduces hoarseness and oral thrush.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Preventer doses logged on at least 26 of 28 days, with refill records matching the prescribed use."
                cadence: rolling
              tasks:
                - "Move your preventer inhaler next to your toothbrush"
                - "Set up a habit tracker with one tick per prescribed dose"
                - "Take your preventer when you brush your teeth, then rinse and spit @recurring(daily)"
                - "Write down why on any day you miss a dose"
            - name: Twice-weekly peak flow log
              description: |-
                ## Purpose
                Peak flow often drops days before symptoms become obvious, which gives early warning of a cold settling on the chest or a trigger season starting. Logging it twice a week, more often when unwell or if your clinician asks, builds a chart that makes reviews faster and decisions clearer.

                ## Milestones
                1. A log with date, time, best of three, symptoms and reliever use columns.
                2. Your personal best and zone thresholds written at the top.
                3. At least two readings a week for three months.
                4. Any reading in your amber or red zone acted on as your action plan says.

                ## Notes
                Start from the **Metrics log** template. Some people are asked to measure daily during flare-ups or medicine changes; follow that when it applies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A peak flow log holds at least two readings a week for three months, with a monthly average noted."
                cadence: rolling
              tasks:
                - "Create a peak flow log from the metrics log template"
                - "Record your best of three morning blows in the log @recurring(weekly:mon,thu)"
                - "Work out last month's average and lowest reading @recurring(monthly:12)"
                - "Bring the log to every breathing appointment"
            - name: Monthly asthma or COPD control check
              description: |-
                ## Purpose
                Using a reliever more than twice a week, waking at night or cutting back on activity are signs that control is slipping, and they creep up slowly. A five-minute monthly check of those three things, plus your questionnaire score, catches the slide while a review can still fix it.

                ## Milestones
                1. A monthly record of reliever puffs per week, night waking and activity limits.
                2. Your control questionnaire score added each month.
                3. Any month that crosses your clinician's threshold followed by a booked review.
                4. Three months of records ready to show at the next appointment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Control is checked every month, and every month over the agreed threshold leads to a review booked within two weeks."
                cadence: rolling
              tasks:
                - "Ask your clinician what reliever use should prompt a review"
                - "Score reliever use, night waking and activity limits for the month @recurring(monthly:9)"
                - "Book a review whenever the month crosses the agreed threshold"
            - name: Annual asthma or COPD review
              description: |-
                ## Purpose
                Yearly reviews are the standard of care for both conditions, covering technique, control, the action plan and whether treatment still fits, yet many people skip theirs in a good year. Preparing your log, questions and inhaler list beforehand turns a hurried appointment into a real review.

                ## Milestones
                1. The review booked in the same month each year.
                2. Peak flow log, control scores and steroid course count gathered beforehand.
                3. Three questions written down before you go.
                4. The action plan updated and the outcome recorded.

                ## Notes
                Start from the **Meeting notes** template for what was agreed. COPD reviews may include spirometry, oxygen levels and a breathlessness score.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review is attended each year, with the action plan updated and the agreed changes recorded in meeting notes."
                cadence: cyclic
              tasks:
                - "Book your annual breathing review with the practice @recurring(yearly)"
                - "Gather your log, control scores and steroid course count beforehand"
                - "Write three questions to ask at the review"
                - "Record what changed in meeting notes the same day"
            - name: Inhaler reorder and expiry rhythm
              description: |-
                ## Purpose
                Running out of a preventer for a week is enough to tip some people into an attack, and running out of a reliever is dangerous. Reordering on a fixed date each month, before the dose counter gets low, means there is always a full inhaler in reserve.

                ## Milestones
                1. Repeat prescriptions set up for every regular inhaler.
                2. A fixed monthly reorder day in your calendar.
                3. One unopened reserve of each preventer and reliever at home.
                4. No inhaler running out in six months.

                ## Notes
                Some aerosol inhalers have no dose counter. Count puffs on a sticker or ask for a device with a counter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months with every regular inhaler reordered before it ran out and a reserve kept at home."
                cadence: rolling
              tasks:
                - "Set up online repeat prescriptions for each regular inhaler"
                - "Reorder inhalers and check dose counters on your set day @recurring(monthly:18)"
                - "Put a puff-count sticker on any inhaler without a counter"
            - name: Spare relievers in the right places
              description: |-
                ## Purpose
                Attacks rarely happen next to the bathroom cabinet. Placing in-date relievers, with spacers where needed, in the bag, the car, the office drawer and a grandparent's house means a reliever is never more than a few minutes away.

                ## Milestones
                1. A list of the places a spare reliever should live.
                2. A reliever and spacer at each place on the list.
                3. Each spare checked for expiry, counter level and heat damage every quarter.
                4. Empty or expired spares replaced within a week.

                ## Notes
                Hot cars can damage aerosol inhalers. If one has been left in direct sun, ask a pharmacist whether to replace it.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every agreed location holds an in-date reliever, checked each quarter, with no expired spare found in a year."
                cadence: rolling
              tasks:
                - "List every place you spend more than a few hours a week"
                - "Ask your clinician whether extra reliever prescriptions are possible"
                - "Check each spare reliever for expiry and puffs left @recurring(quarterly)"
            - name: Trigger and symptom diary
              description: |-
                ## Purpose
                Cold air, exercise, smoke, damp, pets, perfume, viral colds and pollen all set off asthma or COPD, but few people know which matter most for them. A short weekly diary for three months shows the patterns worth acting on and gives your clinician something better than a guess.

                ## Milestones
                1. A diary with columns for symptoms, reliever use and possible triggers.
                2. Twelve weeks of entries.
                3. The three most frequent triggers named.
                4. One practical change planned for each of the top three.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weekly diary entries completed and the top three personal triggers named with one planned change each."
                cadence: rolling
              tasks:
                - "Set up a simple trigger diary on your phone"
                - "Note the week's symptoms and anything that set them off @recurring(weekly:sun)"
                - "Rank your top three triggers after twelve weeks"
                - "Share the trigger list with your clinician at the next review"
            - name: Winter flare-up readiness check
              description: |-
                ## Purpose
                Colds and flu are the most common cause of asthma attacks and COPD admissions, and admissions peak in the winter months. An autumn check of supplies, the action plan, recommended vaccines and heating means the first chest infection of the season finds you ready.

                ## Milestones
                1. Inhalers, spacers and any rescue pack checked as in date.
                2. Your clinician asked which seasonal vaccines are recommended for your condition.
                3. The action plan reread and the household reminded of the red zone.
                4. A plan for keeping the bedroom warm enough on cold nights.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An autumn readiness check is completed each year before the first cold month, covering supplies, vaccines advice and the action plan."
                cadence: cyclic
              tasks:
                - "Run the autumn readiness check on supplies and the action plan @recurring(yearly)"
                - "Ask your clinician which winter vaccines are advised for your lungs"
                - "Remind the household where the action plan and reliever are kept"
            - name: Air pollution and thunderstorm alert routine
              description: |-
                ## Purpose
                High pollution days, smoke from wildfires and thunderstorms during grass pollen season can all bring on sudden attacks, sometimes in people with mild asthma. A quick weekly look at the air quality forecast, with alerts switched on, lets you carry the reliever, move exercise indoors or step up as your plan allows.

                ## Milestones
                1. An air quality forecast service chosen and alerts turned on.
                2. Your action plan checked for what to do on high-risk days.
                3. Outdoor exercise moved on high-pollution days at least once.
                4. Thunderstorm warnings during pollen season treated as a reason to stay indoors.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Air quality alerts are active and checked weekly, with outdoor plans changed on every high-risk day for one season."
                cadence: rolling
              tasks:
                - "Turn on air quality and pollen alerts for your area"
                - "Ask your clinician what to change on high pollution days"
                - "Check the week's air quality forecast before planning outdoor exercise @recurring(weekly:mon)"
            - name: Spacer, mask and nebuliser cleaning routine
              description: |-
                ## Purpose
                Dirty or static-charged spacers hold medicine on their walls, and nebuliser parts can grow bacteria if left damp. A monthly wash and a replacement date for each piece keeps equipment delivering what it should.

                ## Milestones
                1. The maker's cleaning instructions found for every spacer, mask and nebuliser.
                2. A monthly cleaning day in the calendar.
                3. Each piece washed and air dried without rubbing, as most makers advise.
                4. Replacement dates for spacers, masks and nebuliser parts recorded.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every spacer and nebuliser part is cleaned monthly for six months and none is used past its replacement date."
                cadence: rolling
              tasks:
                - "Find the cleaning instructions for each spacer and nebuliser"
                - "Wash spacers and masks and leave them to air dry @recurring(monthly:3)"
                - "Write replacement dates for each piece on your inhaler list"
            - name: Staying active with COPD after rehab
              description: |-
                ## Purpose
                The breathlessness and fitness gains from pulmonary rehabilitation fade within months unless exercise continues. Two set sessions a week, walking plus simple strength work agreed with your rehab team, keep everyday tasks like stairs and shopping possible for longer.

                ## Milestones
                1. A home or community exercise plan agreed with your rehab team or physiotherapist.
                2. Two sessions a week completed for twelve weeks.
                3. A simple measure, such as a timed walk or sit-to-stand count, repeated every three months.
                4. A local breathing exercise class or walking group found.

                ## Notes
                Start from the **Training program** template. Some breathlessness during exercise is expected and helpful; your team will tell you what level is right and when to stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two exercise sessions a week completed for twelve weeks, with a timed walk or sit-to-stand result repeated quarterly."
                cadence: rolling
              tasks:
                - "Ask your rehab team for a written home exercise plan"
                - "Do your walking and strength session as agreed @recurring(weekly:tue,fri)"
                - "Repeat your timed walk or sit-to-stand test and log the result @recurring(quarterly)"
                - "Search for a breathing exercise class or walking group nearby"
            - name: How preventer and reliever inhalers work
              description: |-
                ## Purpose
                People who understand that a preventer treats the swelling underneath, while a reliever only opens the airway for a few hours, are far more likely to keep taking the preventer on good days. An hour with reliable material makes your treatment make sense and helps you explain it to family.

                ## Milestones
                1. The difference between inflammation and narrowing explained in your own words.
                2. Each of your inhalers matched to the job it does.
                3. Why relying on a reliever alone carries risk written down in a sentence.
                4. Two questions noted for your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explanation of how each of your inhalers works, plus two questions taken to your next appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a lung charity guide to how asthma or COPD medicines work"
                - "Write one sentence on what each of your inhalers does"
                - "Explain the difference to someone at home"
                - "Note two questions to take to your clinician"
            - name: Spacer technique for single breaths and tidal breathing
              description: |-
                ## Purpose
                There are two ways to breathe through a spacer, a single slow breath held for about ten seconds or several normal breaths, and the right one depends on age and breathing strength. Practising the right method, one puff at a time and shaking between puffs, matters most for children and for adults short of breath during a flare.

                ## Milestones
                1. The method your nurse recommends confirmed for each person in the house.
                2. One puff per spacer fill practised with a placebo or watched by a nurse.
                3. A child shown the method with the mask held as a firm seal, where it applies.
                4. The steps stuck inside a cupboard door near the inhalers.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each person who uses a spacer has been shown the right breathing method and can demonstrate it without prompts."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your nurse which spacer breathing method suits each user"
                - "Watch a spacer technique video from a lung charity together"
                - "Practise one puff per fill with an empty spacer"
                - "Stick the steps inside the cupboard where inhalers are kept"
            - name: Early signs of a COPD flare-up
              description: |-
                ## Purpose
                A COPD flare-up treated in its first day or two is less likely to end in hospital, but the early signs are easy to put down to a cold. Learning your own pattern, such as more breathlessness, more sputum or a change in its colour, lets you start your agreed plan or call your team sooner.

                ## Milestones
                1. Your usual daily breathlessness, cough and sputum described in writing.
                2. The changes that count as a flare-up for you agreed with your clinician.
                3. A rule written down for when to start a rescue pack or call the team.
                4. One past flare-up looked back on to see which sign came first.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written description of your normal day and your personal flare-up signs, agreed with your clinician, sits with the action plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what a normal day of breathing, cough and sputum is like"
                - "Ask your clinician which changes should count as a flare-up"
                - "Recall your last flare-up and note which sign appeared first"
                - "Add your personal flare-up signs to the action plan"
            - name: Breathing control for breathlessness
              description: |-
                ## Purpose
                Pursed-lip breathing, relaxed shoulders and positions such as leaning forward on a table help many people with COPD and some with asthma get through breathless moments without panic. Practising these when calm, a few minutes a week with a physiotherapist's guidance, means they are there when needed.

                ## Milestones
                1. Breathing control, pursed-lip breathing and recovery positions taught by a physiotherapist or rehab team.
                2. A short practice done every week for eight weeks.
                3. One technique used successfully during a real breathless moment.
                4. A written note of which positions help you most.

                ## Notes
                Breathing techniques help with breathlessness but never replace the reliever or action plan during an attack.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of weekly breathing control practice completed, with your most helpful positions written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your practice for a referral to a respiratory physiotherapist"
                - "Practise pursed-lip breathing and recovery positions for ten minutes @recurring(weekly:wed)"
                - "Write down which positions help you most"
            - name: Airway clearance with a respiratory physiotherapist
              description: |-
                ## Purpose
                People with COPD or bronchiectasis who produce a lot of sputum often cough hard and get little up. A respiratory physiotherapist can teach techniques such as the active cycle of breathing or a handheld device, which shift mucus with less effort and fewer coughing fits.

                ## Milestones
                1. A physiotherapy assessment booked for airway clearance.
                2. One technique taught and practised in front of the physiotherapist.
                3. A routine agreed for how often to use it on normal and flare-up days.
                4. Any device recommended cleaned and stored as instructed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An airway clearance technique taught by a physiotherapist is practised and written into your daily routine."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether airway clearance physiotherapy could help"
                - "Book the physiotherapy assessment once referred"
                - "Write down the routine agreed for normal and flare-up days"
                - "Practise the technique once alone before the follow-up session"
            - name: Understanding your spirometry results
              description: |-
                ## Purpose
                Spirometry reports are full of abbreviations like FEV1, FVC and the ratio between them, and most people leave without knowing what their own numbers say. Learning the basics lets you follow how your lungs change over the years and ask sharper questions at review.

                ## Milestones
                1. A copy of your latest spirometry report obtained.
                2. FEV1, FVC and the ratio explained in your own words.
                3. Your result compared with the predicted value printed on the report.
                4. The numbers added to your breathing history.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest spirometry report is on file with a short written explanation of what each main number means for you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Request a copy of your latest spirometry report"
                - "Read a lung charity explainer on FEV1, FVC and the ratio"
                - "Ask the agent to explain each line of your report in plain words"
                - "Check your understanding with your clinician at the next review"
            - name: Pacing household tasks around breathlessness
              description: |-
                ## Purpose
                Showering, dressing, carrying shopping and climbing stairs are where breathlessness bites hardest for many people with COPD. Sitting to dress, spreading heavy jobs through the week and storing everyday things between waist and shoulder height can save enough breath to keep doing the things that matter.

                ## Milestones
                1. The five daily tasks that leave you most breathless listed.
                2. One change tried for each, such as sitting to dress or a shower stool.
                3. Heavy jobs spread across the week on a simple plan.
                4. An occupational therapy assessment requested if aids could help.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Five breathless tasks listed, each with one tested change, and a weekly plan that spreads heavy jobs across the days."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the five daily tasks that leave you most breathless"
                - "Try one change for each task for a fortnight"
                - "Ask about an occupational therapy assessment for home aids"
                - "Spread heavy jobs like vacuuming across the week"
            - name: Reliever overuse review
              description: |-
                ## Purpose
                Needing a reliever more than a couple of times a week, or getting through more than a few reliever inhalers a year, is a recognised warning that asthma is not controlled and attack risk is higher. Counting your actual use and taking it to your clinician turns a habit many people shrug off into a treatment decision.

                ## Milestones
                1. Reliever inhalers dispensed over the past year counted from your prescription record.
                2. Reliever puffs per week tracked for four weeks.
                3. Both numbers taken to a review appointment.
                4. The agreed change, if any, written on your action plan.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your yearly reliever count and four weeks of weekly use have been reviewed with a clinician and the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count reliever inhalers issued in the past year on your prescription record"
                - "Tally reliever puffs each week for four weeks"
                - "Book a review to discuss the numbers"
                - "Record the clinician's decision on your action plan"
            - name: Stepping down treatment when control is good
              description: |-
                ## Purpose
                Guidelines suggest that after about three months of good control, the lowest treatment that keeps you well should be found, which can mean fewer side effects and lower cost. Doing it with your clinician, one step at a time and with your peak flow log running, avoids the common mistake of simply stopping the preventer.

                ## Milestones
                1. Three months of good control scores and peak flow readings gathered.
                2. A step-down plan agreed with your clinician, including what to do if symptoms return.
                3. The new routine followed with readings logged for eight weeks.
                4. A follow-up confirming whether the lower step holds.

                ## Notes
                Never reduce or stop an inhaler on your own. Step-down is a clinical decision, made with a plan for stepping back up.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A step-down agreed with your clinician is followed for eight weeks with readings logged and a recorded follow-up decision."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Collect three months of control scores and peak flow averages"
                - "Ask your clinician whether a lower treatment step is worth trying"
                - "Write down the step-down plan and when to step back up"
                - "Book the follow-up appointment before starting the change"
            - name: Single maintenance and reliever inhaler discussion
              description: |-
                ## Purpose
                Some asthma treatment plans now use one combination inhaler for both daily prevention and symptom relief, which can reduce attacks for some people and simplify what to carry. Whether it suits you depends on your age, current treatment and local guidance, so it is a question to prepare for, not a switch to make alone.

                ## Milestones
                1. Your current inhalers and how often you use the reliever written down.
                2. A plain-language summary of how single-inhaler regimes work read beforehand.
                3. The option discussed with your clinician and a decision recorded.
                4. If you switch, a new action plan written for the new regime.

                ## Notes
                A change of regime always needs a new action plan, because the amber zone instructions are different.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision with your clinician on whether a single maintenance and reliever regime suits you, with the action plan updated if so."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a lung charity explainer on single-inhaler regimes"
                - "List your current inhalers and weekly reliever use"
                - "Ask your clinician whether a single-inhaler regime would suit you"
                - "Record the decision and any new action plan"
            - name: Lower-carbon inhaler switch discussion
              description: |-
                ## Purpose
                Pressurised aerosol inhalers use propellant gases with a large climate impact, while dry powder and soft mist devices use far less. For people who can manage the breath a dry powder device needs, switching may be possible at a routine review without any loss of control.

                ## Milestones
                1. Each of your inhalers identified as aerosol, dry powder or soft mist.
                2. Whether you can manage a dry powder device checked by a nurse.
                3. A switch agreed or declined with your clinician, with reasons.
                4. Used inhalers returned to a pharmacy for proper disposal.

                ## Notes
                Control comes first. A device you cannot use well is worse for you than any carbon saving.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on switching to a lower-carbon device, made with your clinician after a technique check."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark each inhaler on your list as aerosol, dry powder or soft mist"
                - "Ask at your next review whether a lower-carbon device suits you"
                - "Return used inhalers to a pharmacy instead of the household bin"
            - name: Damp, mould and dust reduction at home
              description: |-
                ## Purpose
                Damp and mould are linked to worse asthma, especially in children, and house dust mites set off symptoms in many people. A room-by-room survey and a few targeted fixes, such as ventilation, extractor fans and allergy-proof bedding covers where advised, reduce the triggers you breathe for eight hours every night.

                ## Milestones
                1. Every room checked for damp patches, mould and condensation.
                2. The bedroom of the person with asthma made the priority.
                3. Ventilation improved and any mould treated or reported to the landlord in writing.
                4. A quarterly check for new mould in the calendar.

                ## Notes
                Renters: report damp and mould to the landlord in writing and keep a copy with photographs. Anyone with asthma should avoid scrubbing large patches of mould themselves.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A room-by-room damp and mould survey is completed, with the asthma sufferer's bedroom fixed or reported in writing within four months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Walk through every room and photograph damp, mould and condensation"
                - "Fix or report the problems in the bedroom of the person with asthma first"
                - "Check window frames and extractor fans for new mould @recurring(quarterly)"
            - name: Choosing an air purifier or dehumidifier
              description: |-
                ## Purpose
                Air purifiers and dehumidifiers are sold with bold claims, and the evidence for asthma benefit varies with the trigger, the room size and the filter. Matching the device to a known trigger, a room and a running cost stops an expensive box sitting unused in a corner.

                ## Milestones
                1. The trigger you are trying to reduce named from your diary.
                2. Room size measured and noise limit agreed for a bedroom device.
                3. Three models compared on filter type, room rating, noise and running cost.
                4. A decision recorded, including the decision not to buy.

                ## Notes
                Start from the **Purchase decision** template. Avoid devices that produce ozone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy or do-not-buy decision comparing three devices on filter type, room rating, noise and annual running cost."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Name the trigger you want the device to reduce"
                - "Measure the room where it would run"
                - "Compare three models on filter, noise and running cost"
                - "Record your decision in a purchase decision page"
            - name: Workplace exposure check for occupational asthma
              description: |-
                ## Purpose
                Around one in six adult asthma cases is linked to work, with bakers, cleaners, vehicle sprayers, hairdressers, healthcare and woodworkers among those most affected. Symptoms that ease at weekends and on holiday are the classic clue, and early action gives the best chance of recovery.

                ## Milestones
                1. Peak flow and symptoms logged on work days and days off for four weeks.
                2. Substances you work with listed from safety data sheets.
                3. The pattern discussed with your clinician or an occupational health service.
                4. Any agreed changes to your work requested in writing.

                ## Notes
                Do not leave a job or change role on suspicion alone. Get the pattern recorded and assessed first, as diagnosis affects your options.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Four weeks of work and rest-day readings reviewed by a clinician or occupational health, with the conclusion recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your employer for safety data sheets for substances you use"
                - "Log peak flow and symptoms on work days and days off for four weeks"
                - "Book a clinician or occupational health appointment to review the pattern"
                - "Put any agreed workplace changes in writing to your manager"
            - name: COPD rescue pack agreement
              description: |-
                ## Purpose
                Many people with COPD are given a standby pack of steroid tablets and sometimes antibiotics, so they can start treatment at home when a flare-up begins. The pack only helps if you know exactly when to start it, who to tell, and how to get it replaced afterwards.

                ## Milestones
                1. Your clinician asked whether a rescue pack is right for you.
                2. Written instructions on when to start each part of the pack.
                3. An agreement on who to contact within a set time of starting it.
                4. A process for replacing the pack after each use.

                ## Notes
                A pack is not a replacement for help. If breathlessness is severe or you are confused or drowsy, follow the red zone on your action plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A rescue pack decision is recorded, and if agreed, written start rules, a contact rule and a replacement process sit with the pack."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician whether a COPD rescue pack suits you"
                - "Write the start rules and who to tell on a card inside the pack"
                - "Check the pack's expiry date and store it with your action plan"
                - "Order a replacement pack after each use"
            - name: Follow-up within two days of an asthma attack
              description: |-
                ## Purpose
                After an attack that needed emergency treatment, the next few weeks carry a high risk of another, and guidelines recommend a review within about two working days. Booking it before you leave the emergency department, and bringing a clear account of what happened, turns a frightening night into a better plan.

                ## Milestones
                1. A follow-up appointment booked within two working days of the attack.
                2. A written account of what triggered it and what was given in hospital.
                3. Technique, adherence and the action plan reviewed at the follow-up.
                4. The attack added to your breathing history.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A follow-up review happens within two working days of any emergency asthma treatment, with the action plan updated."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Phone the practice for a follow-up within two working days"
                - "Write down what happened, what triggered it and what was given"
                - "Bring your inhalers to the appointment for a technique check"
                - "Add the attack and any steroid course to your breathing history"
            - name: Coming home after a COPD hospital stay
              description: |-
                ## Purpose
                Around one in five people admitted with a COPD flare-up are readmitted within a month or so, often because medicines changed, oxygen or rehab referrals were missed, or no one followed up. A discharge checklist and an early review catch those gaps in the first fortnight home.

                ## Milestones
                1. The discharge letter read and every medicine change understood.
                2. A follow-up with your practice or respiratory team booked within two weeks.
                3. A pulmonary rehabilitation referral requested if not already made.
                4. Shopping, meals and help at home arranged for the first week.

                ## Notes
                Ask the ward before you leave whether a community respiratory team will visit, and get their number.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A follow-up within two weeks of discharge is attended, with medicine changes confirmed and a rehab referral made."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the ward for the discharge letter and a community team number"
                - "Compare the discharge medicines with what you have at home"
                - "Book a follow-up with your practice within two weeks"
                - "Request a pulmonary rehabilitation referral at that follow-up"
            - name: Pulmonary rehabilitation course
              description: |-
                ## Purpose
                Pulmonary rehabilitation, usually six to eight weeks of supervised exercise and education, is one of the most effective treatments for COPD breathlessness, yet many people referred never start or finish. Treating it like a booked course, with transport sorted and the dates in the calendar, makes completion far more likely.

                ## Milestones
                1. A referral made by your practice or respiratory team.
                2. Course dates, venue and transport confirmed.
                3. An assessment walk or test done at the start.
                4. Every session attended, or missed ones made up.
                5. The end-of-course result compared with the start.

                ## Notes
                If travel is the barrier, ask whether a home-based or online programme is available.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full pulmonary rehabilitation course is completed, with start and end assessment results recorded."
                cadence: phased
                effort_hours_estimate: "24"
              tasks:
                - "Ask your clinician for a pulmonary rehabilitation referral"
                - "Put every session date in your calendar once offered"
                - "Arrange transport or a lift for each session"
                - "Record your start and end walk test results"
            - name: Travelling with inhalers and your action plan
              description: |-
                ## Purpose
                Lost luggage, a different climate, cold air on a mountain or smoke at a festival can all bring on symptoms far from your usual help. Packing double supplies in hand luggage, carrying the action plan and knowing the local emergency number keeps a trip from becoming a crisis.

                ## Milestones
                1. Enough inhalers for the trip plus spares, split between two bags.
                2. The action plan and a medicines list carried in hand luggage.
                3. The local emergency number and nearest hospital noted for each stop.
                4. Travel insurance checked to cover your declared lung condition.

                ## Notes
                Start from the **Trip** template. Inhalers are allowed in hand luggage on most airlines; check the airline's rules for nebulisers or oxygen.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, double inhaler supplies, the action plan and insurance that covers your condition are packed and confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Order extra inhalers to cover the trip plus a week"
                - "Split inhalers between hand luggage and a companion's bag"
                - "Declare your lung condition to the travel insurer"
                - "Note the emergency number for each country you visit"
            - name: Fitness to fly check with a lung condition
              description: |-
                ## Purpose
                Cabin air on long flights holds less oxygen than air at ground level, which matters for some people with COPD or severe asthma. A conversation with your clinician weeks before booking, and sometimes a hypoxic challenge test, tells you whether you need in-flight oxygen and how to arrange it with the airline.

                ## Milestones
                1. Your clinician asked whether you need a fitness to fly assessment.
                2. Any test completed and its result recorded.
                3. Airline oxygen or medical clearance arranged if needed.
                4. The airline's medical form and clinician letter packed for the trip.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A recorded clinician view on fitness to fly, with any airline oxygen or clearance confirmed in writing before travel."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your clinician whether you need a fitness to fly assessment"
                - "Check the airline's medical clearance and oxygen policy"
                - "Complete any test and keep the result letter"
                - "Pack the airline form and clinician letter in hand luggage"
            - name: First race or sports season with exercise-induced asthma
              description: |-
                ## Purpose
                Exercise is good for asthma, but cold air, long efforts and pollen-heavy pitches can set off symptoms in runners, swimmers and team players. Planning the warm-up, the reliever routine your clinician agrees, and what coaches should know, lets a child or adult train and compete fully.

                ## Milestones
                1. Your clinician's advice on reliever use around exercise written on the action plan.
                2. A warm-up routine tried in training.
                3. The coach or team manager given a copy of the action plan.
                4. A reliever carried on the day, with someone knowing where it is.

                ## Notes
                If exercise symptoms appear often despite good preventer use, that is a reason for a review, not just more reliever.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A race or season completed with an agreed reliever routine, a tested warm-up and the coach holding a copy of the action plan."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician what to do with the reliever around exercise"
                - "Try a gradual warm-up at three training sessions"
                - "Give the coach a copy of the action plan"
                - "Pack the reliever and spacer in the kit bag the night before"
            - name: School asthma plan for your child
              description: |-
                ## Purpose
                Children spend most waking hours at school, and staff can only help if they know your child's triggers, inhalers and what an attack looks like. Giving the school a copy of the action plan, a named reliever with spacer and a signed consent, renewed each school year, means help is not delayed while someone phones home.

                ## Milestones
                1. The school's asthma policy and health care plan form obtained.
                2. A copy of the action plan, signed consent and emergency contacts handed in.
                3. A named reliever and spacer delivered and in date.
                4. School trips, sports days and after-school clubs covered by the same plan.

                ## Notes
                In some countries, the United Kingdom for example, schools may keep a spare emergency reliever; ask whether yours does and give consent if you want it used.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The school holds your child's current action plan, consent and an in-date named reliever with spacer, renewed every school year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the school office for its asthma policy and care plan form"
                - "Hand in the action plan, consent and a named reliever with spacer"
                - "Renew the school plan and check the reliever at each new school year @recurring(yearly)"
                - "Ask how the plan travels with your child on trips and sports days"
            - name: Nursery or childminder handover for a wheezy under-five
              description: |-
                ## Purpose
                Young children cannot say they are breathless, and wheeze with colds is common and frightening for carers who do not know the child. A short handover with the nursery or childminder, showing the spacer and mask, the signs to watch and when to call you or emergency services, protects your child in your absence.

                ## Milestones
                1. A one-page summary of your child's wheeze, inhalers and danger signs.
                2. The spacer and mask shown to the key worker or childminder.
                3. Medicine consent forms completed for the setting.
                4. A check after the first cold of the season on how the plan worked.

                ## Notes
                Many under-fives who wheeze with colds do not go on to have asthma. Keep the plan current as your child's diagnosis develops.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "The nursery or childminder holds a one-page plan and signed consent, and has been shown the spacer and mask by you."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page summary of your child's inhalers and danger signs"
                - "Show the key worker how to use the spacer and mask"
                - "Complete the setting's medicine consent forms"
                - "Ask the key worker how it went after the first cold"
            - name: Teenager taking over their own inhalers
              description: |-
                ## Purpose
                Adolescence is when many young people stop taking preventers, hide symptoms from friends or leave the reliever at home, and attacks in teenagers are often linked to that drift. Handing over responsibility in stages, with the teenager seeing the nurse alone for part of the review, builds habits that last into adult life.

                ## Milestones
                1. Your teenager reordering their own inhalers with you checking.
                2. Part of the annual review spent with the nurse alone.
                3. Your teenager able to explain their action plan in their own words.
                4. A reliever carried every day without reminders for a term.

                ## Notes
                Ask the clinic about moving to adult services well before the age cut-off, so there is no gap.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Your teenager reorders inhalers, carries a reliever daily and explains their action plan without help for a full term."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Agree with your teenager which jobs they take over first"
                - "Show them how to reorder inhalers on the pharmacy app"
                - "Check reliever use together for ten minutes @recurring(monthly:14)"
                - "Ask the nurse to see your teenager alone for part of the review"
            - name: Asthma during pregnancy and after birth
              description: |-
                ## Purpose
                Asthma can improve, worsen or stay the same in pregnancy, and poorly controlled asthma carries more risk to mother and baby than most asthma medicines do. Telling both the midwife and the asthma team early, and keeping a closer eye on control, keeps both of you safe through pregnancy and the first months after birth.

                ## Milestones
                1. Midwife and asthma clinician both told about the pregnancy and the asthma.
                2. Current inhalers reviewed with a clinician, without stopping any on your own.
                3. Control scores checked monthly through pregnancy.
                4. A plan for the birth and the weeks after written with the maternity team.

                ## Notes
                Do not stop or reduce a preventer because you are pregnant unless your clinician advises it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Asthma control is reviewed with a clinician early in pregnancy, checked monthly, and covered in the written birth plan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Tell your midwife and asthma clinician about each other"
                - "Ask your clinician to review your inhalers for pregnancy"
                - "Add asthma details to your birth plan with the maternity team"
                - "Book an asthma check for the weeks after the birth"
            - name: Supporting a parent living with COPD
              description: |-
                ## Purpose
                Adult children often notice the slow changes, more breathlessness, fewer trips out, missed inhalers, before the parent mentions them. A monthly call with a short list of questions, with your parent's consent, catches problems early without taking over their care.

                ## Milestones
                1. Your parent's agreement on how involved they want you to be.
                2. Copies of their action plan and inhaler list held by you.
                3. A monthly check-in covering breathlessness, supplies and appointments.
                4. Changes you notice passed to their care team with their permission.

                ## Notes
                Ask your parent to add you as a nominated contact with the practice, so the team can speak to you if needed.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "With your parent's consent, you hold their action plan and inhaler list and complete a check-in every month for six months."
                cadence: rolling
              tasks:
                - "Ask your parent how involved they would like you to be"
                - "Get copies of their action plan and inhaler list"
                - "Call your parent about breathing, supplies and appointments @recurring(monthly:25)"
                - "Ask them to name you as a contact with their practice"
            - name: Severe asthma clinic referral and biologic treatment
              description: |-
                ## Purpose
                Only a small share of people with asthma stay poorly controlled despite good technique, high-dose inhalers and regular use, and frequent steroid courses carry long-term harm. A specialist severe asthma service can test for the type of asthma and consider newer treatments such as biologic injections.

                ## Milestones
                1. Technique, adherence and triggers confirmed as checked before referral.
                2. A count of steroid courses and admissions for the past year ready.
                3. A referral to a severe asthma service requested and its progress tracked.
                4. Specialist test results and the treatment decision recorded.

                ## Notes
                Most services will want to see that the basics have been addressed, so bring your technique check, refill record and steroid count.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A severe asthma referral is made or declined with reasons, and any specialist treatment decision is recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Count your steroid courses and admissions for the past year"
                - "Ask your clinician whether a severe asthma referral is warranted"
                - "Track the referral every month until an appointment is given"
                - "Record the specialist's tests and treatment decision"
            - name: Home oxygen assessment questions
              description: |-
                ## Purpose
                Some people with advanced COPD are assessed for home or portable oxygen, which needs blood oxygen measurements while well and brings strict safety rules about smoking and open flames. Preparing your questions makes the assessment easier, and the safety steps at home are as important as the oxygen itself.

                ## Milestones
                1. Your clinician asked whether an oxygen assessment is indicated.
                2. The assessment attended and the result recorded.
                3. If prescribed, the hours of use and flow rate written on your plan.
                4. A home fire safety check arranged and household rules agreed.

                ## Notes
                Oxygen and smoking, including e-cigarettes near the equipment, are a serious fire risk. Many fire services offer free home safety visits for oxygen users.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An oxygen assessment outcome is recorded and, if oxygen is prescribed, a home fire safety check is completed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your respiratory team whether an oxygen assessment is needed"
                - "Write your questions about portable use and travel before the assessment"
                - "Book a home fire safety visit if oxygen is prescribed"
                - "Agree no-smoking and no-flame rules with everyone in the home"
            - name: Advance care planning with COPD
              description: |-
                ## Purpose
                COPD changes slowly and then sometimes quickly, and many people never get asked what matters to them about hospital stays, ventilation or where they would want to be cared for. Writing down your wishes while well, and sharing them with family and your care team, means decisions in a crisis follow what you wanted.

                ## Milestones
                1. A conversation with your clinician about what to expect over the coming years.
                2. Your wishes on hospital treatment and place of care written down.
                3. A trusted person named to speak for you if you cannot.
                4. Copies given to family and placed in your medical record.

                ## Notes
                The legal forms for naming a decision maker vary by country. Ask your clinician or a legal adviser which apply where you live.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written statement of your care wishes, with a named representative, is shared with family and added to your medical record."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your clinician for a conversation about the years ahead"
                - "Write down what matters most to you about future care"
                - "Choose the person you would want to speak for you"
                - "Give copies to your family and ask for one on your record"
            - name: Five-year lung function and flare-up trend
              description: |-
                ## Purpose
                Year to year, it is hard to tell whether your lungs are holding steady or slowly declining. Putting five years of spirometry, peak flow averages, steroid courses and admissions on one page shows the direction of travel and helps your clinician judge whether treatment needs to change.

                ## Milestones
                1. Spirometry results for the past five years collected.
                2. Yearly counts of steroid courses, antibiotic courses and admissions tabled.
                3. Peak flow or control score averages added for each year.
                4. The trend discussed at an annual review and the conclusion noted.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page five-year table of lung function and flare-ups is discussed at an annual review, with the clinician's view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Request five years of spirometry results from your practice"
                - "Table yearly steroid courses, antibiotics and admissions"
                - "Add this year's results to the five-year table @recurring(yearly)"
                - "Take the table to your annual review"
---

# Asthma & COPD Care

This area is for adults and children living with asthma or COPD, and for the parents and relatives who help them breathe easier. It starts with the foundations (a written action plan, a clear list of what each inhaler does, a checked technique, a personal best peak flow and a warning card), then the routines that keep preventers taken and supplies in date, the skills that make inhalers and breathing techniques work, the decisions about treatment, rescue packs and the home, the events that need preparing for, the situations that belong to a particular life stage, and finally the specialist work of severe asthma and advanced COPD.

What repeats is a daily preventer time, peak flow twice a week, a monthly control check, the monthly inhaler reorder, a quarterly look at spare relievers, the annual review and a winter readiness check each autumn. The Habit tracker, Metrics log, Meeting notes, Purchase decision, Trip and Training program templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
