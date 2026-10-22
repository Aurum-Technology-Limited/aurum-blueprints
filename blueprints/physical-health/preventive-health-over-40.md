---
id: physical-health.preventive-health-over-40
name: Preventive Health Over 40
description: "A written midlife prevention plan: your risk factors listed, the checks due this decade booked, muscle and fitness measured and trained, and a yearly review that keeps the next forty years in view."
category: personal
version: 1.0.0
tags: [physical-health, preventive-health-over-40, everyone, midlife, prevention, strength-training, risk-factors]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - training-program
    - weekly-meal-plan
    - sleep-review
    - habit-tracker
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Preventive Health Over 40
          description: "A midlife prevention plan covering blood pressure, cholesterol, screenings, muscle strength and risk factors, for adults who want their next decades to go well."
          projects:
            - name: Midlife risk factor inventory
              description: |-
                ## Purpose
                Most heart attacks, strokes and cases of type 2 diabetes in midlife trace back to a short list of factors: smoking, blood pressure, cholesterol, blood sugar, waist size, inactivity, alcohol, sleep and family history. Writing down where you stand on each, with the date of the last real measurement, shows which ones you know, which you are guessing and which have never been checked.

                ## Milestones
                1. A list of nine common midlife risk factors with your current status beside each.
                2. Every entry marked as measured, self-reported or unknown, with a date where there is one.
                3. The unknowns turned into a short list of checks to ask for.
                4. The inventory saved where you will find it for your next appointment.

                ## Notes
                Be honest about alcohol and activity. Clinicians see rounded-down numbers every day, and the plan is only as good as the starting point.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated inventory covering at least nine risk factors, each marked measured, self-reported or unknown, with a list of missing checks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the nine risk factors on one page with a column for status and date"
                - "Find your most recent blood pressure, cholesterol and blood sugar results on the patient portal"
                - "Mark each factor as measured, self-reported or unknown"
                - "Ask the agent to turn the unknowns into a list of checks to request"
            - name: Free midlife health check from age 40
              description: |-
                ## Purpose
                Several health services invite adults from about 40 to 74 for a free prevention check every few years, measuring blood pressure, cholesterol, weight and diabetes risk and giving a heart risk estimate. England's NHS Health Check is one example. Invitations are easy to miss, so finding out whether your country or employer offers one and booking it yourself gets the core numbers measured in one sitting.

                ## Milestones
                1. Whether a free midlife check is offered to you, and how often, confirmed.
                2. The check booked, with any fasting or preparation instructions noted.
                3. The check attended and every number given to you written down.
                4. The date you are next eligible added to your calendar.

                ## Notes
                If no free check exists where you live, ask your doctor which of the same measurements they would do at a routine visit and book those instead.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A midlife prevention check attended, with blood pressure, cholesterol, weight and diabetes risk results recorded and the next eligible date diarised."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your health service or employer website for a midlife prevention check"
                - "Book the check and note any fasting instructions"
                - "Write down every number the nurse or doctor gives you"
                - "Add the date you are next eligible to your calendar"
            - name: Type 2 diabetes risk score before any diagnosis
              description: |-
                ## Purpose
                Type 2 diabetes develops silently for years, and a large share of people with raised blood sugar in midlife do not know it. A validated questionnaire from a diabetes charity or health service takes five minutes, uses your age, waist, family history and activity, and tells you whether a blood test such as HbA1c is worth asking for now.

                ## Milestones
                1. A validated diabetes risk questionnaire completed with a tape-measured waist.
                2. Your score and risk band saved with the date.
                3. An HbA1c or fasting glucose test requested if the score suggests it.
                4. Any result in the prediabetes range followed up with your clinician.

                ## Notes
                Use a tool published by a health service or diabetes charity, not a supplement seller's quiz.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated diabetes risk score on file, with a blood test requested and its result recorded if the score was moderate or high."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure your waist at the level of your belly button"
                - "Complete a diabetes risk questionnaire from a health service or charity"
                - "Save the score and risk band with today's date"
                - "Ask your practice for an HbA1c test if the score is moderate or high"
            - name: Waist-to-height ratio as a midlife risk marker
              description: |-
                ## Purpose
                Fat stored around the middle carries more heart and diabetes risk than the same weight elsewhere, and body mass index misses it in many people. Several guidelines now suggest keeping your waist below half your height, a check that needs only a tape and takes two minutes.

                ## Milestones
                1. Height measured without shoes and waist measured midway between ribs and hip bone.
                2. Your waist divided by your height and the ratio written down.
                3. The ratio compared with the half-your-height guide your health service uses.
                4. The figure added to your prevention numbers log as a baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A measured waist-to-height ratio recorded with the date and compared with your health service's guide value."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Measure your height against a wall without shoes"
                - "Measure your waist midway between lowest rib and hip bone after breathing out"
                - "Divide waist by height and write the ratio down"
                - "Look up the ratio your health service treats as raised"
            - name: Midlife strength baseline tests
              description: |-
                ## Purpose
                Adults lose muscle from their thirties onwards, slowly at first and faster after sixty, and grip strength and leg power predict independence in later life better than most blood tests. Four simple tests at home or in a gym, a 30-second chair stand, a push-up count, a grip test and a one-leg stand, give a baseline you can beat at every retest.

                ## Milestones
                1. Thirty-second chair stand count recorded.
                2. Push-ups to good-form failure, from the floor or a bench, recorded.
                3. Grip strength measured with a dynamometer at a gym, pharmacy or physio if one is available.
                4. One-leg stand time with eyes open recorded for each leg.
                5. All four results dated and saved in your numbers log.

                ## Notes
                Stop any test that causes chest pain, dizziness or sharp joint pain, and mention it to your doctor before starting training.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Four dated strength and balance test results recorded, ready to compare at a six-month retest."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Count how many times you can stand from a chair in 30 seconds"
                - "Count push-ups to good-form failure, from the floor or a kitchen counter"
                - "Time a one-leg stand on each side with eyes open"
                - "Find a gym or physio who can measure grip strength"
            - name: Aerobic fitness baseline with a timed walk
              description: |-
                ## Purpose
                Cardiorespiratory fitness is one of the strongest predictors of long-term health, and it can be estimated without a lab. Timing a brisk one-mile walk on flat ground, and noting your heart rate at the finish, gives a repeatable baseline and shows whether the weekly cardio is working.

                ## Milestones
                1. A flat, measured one-mile or 1.6 km route chosen.
                2. The route walked as briskly as is comfortable, with time and finishing heart rate noted.
                3. Your resting heart rate taken on waking for three mornings and averaged.
                4. All three numbers saved as your fitness baseline.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timed one-mile walk, finishing heart rate and three-morning resting heart rate average recorded with the date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Map a flat one-mile route near home"
                - "Walk it briskly and record your time and finishing pulse"
                - "Take your resting pulse on waking for three mornings"
                - "Save the walk time and pulse averages as your baseline"
            - name: Prevention calendar for the decade ahead
              description: |-
                ## Purpose
                Between 40 and 50 a run of checks starts or changes interval: blood pressure, cholesterol and diabetes tests, eye tests, screening programmes and some vaccines. Laying them out year by year on one calendar, with the age each one begins where you live, turns a scattered set of letters into a plan you can see.

                ## Milestones
                1. The prevention checks offered in your country for your age and sex listed with their start ages and intervals.
                2. A year-by-year grid for the next ten years with each check placed in it.
                3. Checks that depend on your own risk marked for discussion with your doctor.
                4. This year's due checks booked or scheduled.

                ## Notes
                Screening start ages and intervals differ by country and change over time. Use your own health service's current list and recheck it each year.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ten-year grid of prevention checks with start ages and intervals from your health service, and this year's items booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your health service's list of checks and screenings by age"
                - "Draw a ten-year grid and place each check in the year it falls due"
                - "Mark the checks that depend on your personal risk"
                - "Book or diarise everything due this year"
            - name: First prevention conversation with your doctor
              description: |-
                ## Purpose
                Appointments are usually about a problem, so prevention rarely gets discussed unless you raise it. Booking a visit specifically to go through your risk inventory and decade calendar lets your doctor say which checks matter most for you, which numbers they want to see moving, and which risks they would worry about first.

                ## Milestones
                1. An appointment booked with prevention named as the reason.
                2. Your risk inventory, recent numbers and three questions printed or on your phone.
                3. Your doctor's top two priorities for you written down during the visit.
                4. Any tests they suggested booked within two weeks.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A prevention appointment held, with the doctor's top two priorities recorded and every suggested test booked within two weeks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an appointment and say it is for a prevention review"
                - "Write three questions about which risks matter most for you"
                - "Bring your risk inventory and decade calendar to the visit"
                - "Book every test the doctor suggested"
            - name: One-page midlife prevention plan
              description: |-
                ## Purpose
                Once the risks, numbers and doctor's priorities are known, they need to sit on a single page you will actually reread. A plan listing your three main risks, the target for each, the habits that address them and the dates of the next checks keeps the whole area pointing the same way.

                ## Milestones
                1. Your three priority risks named, in the order your doctor suggested.
                2. A measurable target for each, agreed with your clinician where it is a clinical number.
                3. The weekly habits that serve each target listed.
                4. Next check dates for each number written on the page.
                5. The page printed or pinned where you see it monthly.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single-page plan naming three risks, a target for each, the supporting habits and the next check dates."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the agent to draft a one-page plan from your inventory and appointment notes"
                - "Cut the draft to three risks, three targets and the habits behind them"
                - "Add the next check date for each number"
                - "Reread the plan and adjust one habit if needed @recurring(monthly:5)"
            - name: Prevention numbers log
              description: |-
                ## Purpose
                Results arrive from different places: a pharmacy blood pressure reading, a cholesterol letter, a gym weigh-in, your own strength tests. Keeping them in one log with the date and the source makes trends visible over years, which is where prevention evidence lives.

                ## Milestones
                1. A log with columns for date, measure, value, unit, source and notes.
                2. Every number from the last three years you can find copied in.
                3. Strength, fitness and waist baselines added alongside the clinical numbers.
                4. The log shared with your doctor at your next prevention visit.

                ## Notes
                Start from the **Metrics log** template. Record units every time; cholesterol and glucose are reported in different units in different countries.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A numbers log holding at least three years of clinical results plus current strength and fitness baselines, each with date and source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a log from the metrics log template"
                - "Copy in every result from the last three years on the patient portal"
                - "Add your strength, walk and waist baselines"
                - "Note the unit beside every value"
            - name: Twice-weekly resistance training for muscle mass
              description: |-
                ## Purpose
                Activity guidelines in most countries ask adults to do muscle-strengthening work on at least two days a week, and most people over 40 do none. Two sessions of 30 to 45 minutes covering legs, hips, back, chest and arms slow the loss of muscle and bone and make the strength baseline move.

                ## Milestones
                1. A programme of six to eight exercises covering the whole body written down.
                2. Two fixed session days a week in the calendar.
                3. Weights or repetitions recorded at every session.
                4. Twelve consecutive weeks with at least two sessions each.

                ## Notes
                Start from the **Training program** template. If you have a heart, joint or blood pressure condition, ask your clinician or a physiotherapist which exercises to adapt.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weeks with two logged full-body strength sessions in each."
                cadence: rolling
              tasks:
                - "Write a six-exercise full-body session from the training program template"
                - "Do a full-body strength session and log weights and reps @recurring(weekly:mon,thu)"
                - "Review the log and raise the load on any exercise that felt easy @recurring(monthly:9)"
                - "Tell someone at home which two evenings are your training slots"
            - name: Weekly cardio minutes against the guideline
              description: |-
                ## Purpose
                The common guideline is 150 minutes of moderate activity or 75 minutes of vigorous activity a week, and people tend to overestimate how much they do. Adding up the week's brisk walks, cycling, swimming or classes every Sunday shows the real figure and where the gap is.

                ## Milestones
                1. What counts as moderate and vigorous for you understood, using the talk test.
                2. A weekly total recorded every Sunday.
                3. The week's shortfall, if any, planned into the following week.
                4. Eight weeks in a row at or above the guideline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly totals recorded, all at or above 150 moderate or 75 vigorous minutes."
                cadence: rolling
              tasks:
                - "Learn the talk test for moderate and vigorous effort"
                - "Add up the week's moderate and vigorous minutes @recurring(weekly:sun)"
                - "Plan where next week's missing minutes will come from"
            - name: Quarterly midlife numbers check
              description: |-
                ## Purpose
                Weight, waist and resting heart rate drift slowly, a kilo or a centimetre a year, which is too gradual to notice day to day. A ten-minute check every three months catches drift while a small change in habits can still reverse it.

                ## Milestones
                1. A quarterly date set for the check.
                2. Weight, waist, resting heart rate and a home or pharmacy blood pressure reading taken each quarter.
                3. Each set added to the prevention numbers log.
                4. Any steady rise over two quarters raised with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly sets of weight, waist, resting heart rate and blood pressure recorded within twelve months."
                cadence: rolling
              tasks:
                - "Measure weight, waist, resting pulse and blood pressure and log them @recurring(quarterly)"
                - "Compare the set with the previous quarter"
                - "Decide which habit to adjust if two quarters show a rise"
            - name: Birthday prevention review each year
              description: |-
                ## Purpose
                Birthdays are a natural moment to ask what the past year did to your numbers and what the coming year needs. A one-hour review each year, checking the decade calendar, the numbers log and the one-page plan, keeps the plan current as new checks fall due.

                ## Milestones
                1. A one-hour slot booked in the week of your birthday.
                2. The year's numbers compared with the previous year.
                3. Checks falling due in the coming year booked or diarised.
                4. The one-page plan rewritten for the new year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "An annual review completed in your birthday month, with an updated one-page plan and the coming year's checks diarised."
                cadence: cyclic
              tasks:
                - "Hold a one-hour prevention review in your birthday week @recurring(yearly)"
                - "Compare this year's numbers with last year's"
                - "Book the checks that fall due in the coming year"
                - "Rewrite the one-page plan for the year ahead"
            - name: Protein spread across three meals
              description: |-
                ## Purpose
                Muscle built in the gym needs protein to hold on to it, and older muscle responds better when protein comes in several decent portions rather than one large evening meal. Many people over 40 eat little at breakfast and lunch, so planning a protein source into each meal is a simple change that supports the strength work.

                ## Milestones
                1. A typical day's meals written down with the protein source in each.
                2. A protein source chosen for breakfast and lunch on most days.
                3. A short list of quick options kept for busy days.
                4. Four weeks with protein at all three meals on most days.

                ## Notes
                If you have kidney disease or another condition affecting diet, agree the amount with your clinician or a dietitian first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks in which most days include a protein source at breakfast, lunch and dinner."
                cadence: rolling
              tasks:
                - "Write down yesterday's meals and the protein in each"
                - "List five quick breakfast and lunch protein options you would eat"
                - "Plan the week's breakfast and lunch protein into the shopping list @recurring(weekly:sat)"
            - name: Weekly meal plan with fewer ultra-processed foods
              description: |-
                ## Purpose
                Diets high in ultra-processed food are linked with weight gain, type 2 diabetes and heart disease, and most of that food arrives on rushed weeknights. Planning five dinners a week from basic ingredients, built around vegetables, pulses, whole grains and fish, does more for midlife risk than any single superfood.

                ## Milestones
                1. A list of ten simple dinners the household already likes.
                2. A weekly plan written before the shop.
                3. Five planned home-cooked dinners eaten in most weeks.
                4. Two regular ultra-processed staples replaced with simpler versions.

                ## Notes
                Start from the **Weekly meal plan** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of written meal plans with at least five home-cooked dinners eaten in most of them."
                cadence: rolling
              tasks:
                - "Write down ten simple dinners everyone at home will eat"
                - "Plan the week's dinners and write the shopping list @recurring(weekly:fri)"
                - "Pick one ultra-processed staple to replace this month"
            - name: Protected sleep window and fixed wake time
              description: |-
                ## Purpose
                Regularly sleeping under about seven hours is linked with higher blood pressure, weight gain and worse blood sugar, and midlife is when work, children and parents squeeze it hardest. A fixed wake time, seven days a week, and a bedtime set back from it is the most reliable single change for people without a sleep disorder.

                ## Milestones
                1. A wake time chosen that works on weekdays and weekends.
                2. A bedtime set at least seven and a half hours earlier.
                3. Screens and work stopped 30 minutes before that bedtime most nights.
                4. A month reviewed with average sleep time noted.

                ## Notes
                Start from the **Sleep review** template. Loud snoring, gasping at night or heavy daytime sleepiness need a doctor, not a better routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month with the same wake time on at least 25 days and an average sleep time recorded."
                cadence: rolling
              tasks:
                - "Choose one wake time for every day of the week"
                - "Set a bedtime alarm seven and a half hours before it"
                - "Review the month's sleep times in a sleep review page @recurring(monthly:12)"
            - name: Ten-minute daily mobility routine
              description: |-
                ## Purpose
                Stiff hips, shoulders and ankles in your forties become the reason you cannot get off the floor easily in your seventies. Ten minutes a day of hip, spine, shoulder and ankle movements, done at the same point each day, keeps range of motion and makes the strength sessions safer.

                ## Milestones
                1. A routine of six movements covering hips, spine, shoulders and ankles written down.
                2. A daily anchor chosen, such as after the morning coffee.
                3. The routine done on at least five days a week for a month.
                4. One movement that was hard at the start noticeably easier.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The routine completed on at least 20 days in a month, with one previously restricted movement noted as easier."
                cadence: rolling
              tasks:
                - "Choose six mobility movements and write them on a card"
                - "Do the ten-minute mobility routine after your morning drink @recurring(daily)"
                - "Note which movement feels tightest so you can track it"
            - name: Monthly prevention habit scorecard
              description: |-
                ## Purpose
                Numbers show results months later, but habits show this month whether the plan is happening. A monthly scorecard of the four or five habits on your one-page plan, ticked weekly and totted up on a fixed day, shows which habit is slipping before the numbers do.

                ## Milestones
                1. The four or five habits from the one-page plan listed on a scorecard.
                2. Each habit ticked or missed for every week of the month.
                3. A monthly score written down and the weakest habit named.
                4. One change made to the weakest habit each month.

                ## Notes
                Start from the **Habit tracker** template.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly scorecards, each naming the weakest habit and the change made to it."
                cadence: rolling
              tasks:
                - "Set up a habit tracker with the habits from your plan"
                - "Total the month's habit score and name the weakest habit @recurring(monthly:20)"
                - "Make one change to the weakest habit for next month"
            - name: Lighter training weeks built into the year
              description: |-
                ## Purpose
                Midlife bodies recover more slowly, and the classic injury pattern after 40 is months of steady progress followed by a strained calf or shoulder. Planning a lighter week every month or so, with loads cut and nothing new tried, lets joints and tendons catch up and keeps training going for years.

                ## Milestones
                1. A rule written for what a lighter week means, such as half the sets at the same weights.
                2. A lighter week marked in the calendar roughly every four to six weeks.
                3. Any niggling pain noted before and after each lighter week.
                4. A training year completed without an injury that stopped training for more than two weeks.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Lighter weeks taken on schedule for six months, with niggles noted before and after each."
                cadence: cyclic
              tasks:
                - "Write your rule for what a lighter training week looks like"
                - "Mark the next lighter week in the calendar and note any niggles @recurring(monthly:28)"
                - "Check whether any niggle has eased after the lighter week"
            - name: Five basic lifts with good form
              description: |-
                ## Purpose
                Squat, hip hinge, push, pull and carry cover almost everything daily life asks of muscle, from lifting a suitcase to getting out of a low chair. Learning them properly at light weights, ideally with a coach or video feedback, is what makes it safe to load them later.

                ## Milestones
                1. One version of each of the five patterns chosen at your current level.
                2. Each lift filmed from the side and compared with a reliable demonstration.
                3. A coach, trainer or experienced friend asked to check at least two lifts.
                4. All five done for three sets of ten with steady form.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three clean sets of ten of a squat, hinge, push, pull and carry, checked on video or by a coach."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Choose a beginner version of the squat, hinge, push, pull and carry"
                - "Film each lift from the side at a light weight"
                - "Compare your videos with a qualified coach's demonstration"
                - "Ask a trainer or physio to check your hinge and squat"
            - name: Progressive overload without injury after 40
              description: |-
                ## Purpose
                Muscle only grows when the work gets gradually harder, but jumping weights too fast is how most midlife lifters get hurt. Understanding the safe ways to progress, adding a rep, then a set, then a small amount of load, and the warning signs to back off, keeps the gains coming without the setbacks.

                ## Milestones
                1. The three ways to progress, reps, sets and load, understood and written down.
                2. A personal rule set for when to add weight.
                3. Warning signs that mean easing off listed, such as joint pain that lasts into the next day.
                4. Eight weeks of training logged following the rule.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written progression rule and eight weeks of training logs that follow it without an injury break."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a reliable guide to progressive overload for older adults"
                - "Write a rule for when you add a rep, a set or more weight"
                - "List three warning signs that mean you should ease off"
                - "Check your last eight weeks of logs against the rule"
            - name: Muscle loss with age and how to slow it
              description: |-
                ## Purpose
                Age-related muscle loss, called sarcopenia when it becomes severe, is one of the main reasons people lose independence, yet it is largely preventable with training and enough protein. Knowing how it develops, how it is measured and what slows it makes the strength work feel like prevention rather than vanity.

                ## Milestones
                1. How muscle mass and strength change from midlife onwards explained in your own words.
                2. The common measures, grip strength, chair stands and walking speed, understood.
                3. The evidence for resistance training and protein in slowing loss summarised.
                4. Your own baseline results placed against age-typical values from a reliable source.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page summary of sarcopenia, its measures and what slows it, with your own baseline compared to age-typical values."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read a health service or geriatric society page on sarcopenia"
                - "Note the three measures clinicians use to spot it"
                - "Compare your grip and chair stand results with published age norms"
                - "Write a half-page summary in your own words"
            - name: Modifiable and fixed risk factors explained
              description: |-
                ## Purpose
                Age, sex, ethnicity and family history cannot be changed, but they decide how hard you need to work on the factors that can. Separating the two lists, and learning roughly how much each changeable factor contributes, helps you put effort where it counts instead of where it is fashionable.

                ## Milestones
                1. Your fixed risk factors listed.
                2. Your modifiable factors listed and ranked with your doctor's view in mind.
                3. The difference between absolute and relative risk understood with one worked example.
                4. The ranked list added to your one-page plan.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two written lists, fixed and modifiable, with the modifiable factors ranked and one absolute risk example worked through."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Split your risk inventory into fixed and modifiable factors"
                - "Read a reliable explainer on absolute and relative risk"
                - "Rank your modifiable factors using your doctor's priorities"
                - "Copy the ranking onto your one-page plan"
            - name: Reading your midlife health check results
              description: |-
                ## Purpose
                Health check result letters often pack a blood pressure reading, a cholesterol ratio, a body mass index, a diabetes marker and a ten-year heart risk percentage onto one page with little explanation. Learning what each line means, and which ones are flagged for action, turns the letter into a to-do list.

                ## Milestones
                1. Each measure on your result letter identified and its unit noted.
                2. The normal ranges or thresholds your health service uses written beside each.
                3. Any flagged result matched to a follow-up action.
                4. Unclear lines turned into questions for the nurse or doctor.

                ## Notes
                Ask the clinic rather than guess. A ten-year risk figure is an estimate for people like you, not a prediction for you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every line on your health check letter annotated with its meaning and threshold, and any flagged result linked to an action."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your most recent health check letter or results page"
                - "Look up each measure on your health service's website"
                - "Write the threshold beside each line"
                - "List the lines you still do not understand as questions"
            - name: Easy-pace and interval cardio basics
              description: |-
                ## Purpose
                Most fitness gains in midlife come from a lot of easy effort, where you can still hold a conversation, plus a little hard effort once or twice a week. Learning how to judge both by feel or heart rate stops the common pattern of every session being medium-hard and leaving you tired without getting fitter.

                ## Milestones
                1. Easy, moderate and hard effort described in your own terms using the talk test.
                2. An approximate heart rate range for easy work noted if you use a monitor.
                3. One short interval session a week tried for four weeks.
                4. Your timed walk repeated to see whether it has improved.

                ## Notes
                Ask your doctor before adding hard intervals if you have a heart condition, high blood pressure or chest symptoms on exertion.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four weeks combining easy sessions with one interval session a week, followed by a repeat of the timed walk."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read a reliable guide to easy and interval training for beginners"
                - "Describe your easy, moderate and hard effort in a few words each"
                - "Try one session of short hill or brisk intervals this week"
                - "Repeat your timed one-mile walk after four weeks"
            - name: Balance training before you need it
              description: |-
                ## Purpose
                Balance starts declining in your forties, long before falls become a worry, and it responds well to practice. Short daily drills such as standing on one leg while brushing your teeth, then progressing to eyes closed or an unstable surface, build a reserve that pays off decades later.

                ## Milestones
                1. Your one-leg stand time recorded as the starting point.
                2. A daily drill attached to an existing routine.
                3. A harder progression added once 30 seconds is easy.
                4. One-leg stand time retested after eight weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Eight weeks of near-daily balance drills, with the one-leg stand time retested and compared with the baseline."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Retrieve your one-leg stand time from the strength baseline"
                - "Stand on one leg while brushing your teeth, switching halfway @recurring(daily)"
                - "Add a harder version once 30 seconds is easy"
                - "Retest your one-leg stand after eight weeks"
            - name: Sorting prevention evidence from wellness marketing
              description: |-
                ## Purpose
                Midlife is when the adverts for longevity supplements, hormone panels and full-body scans start arriving. Learning a few quick checks, who is selling, what kind of study supports the claim, and whether a health body recommends it, saves money and keeps attention on the measures that actually prevent disease.

                ## Milestones
                1. A five-question checklist for any health claim written down.
                2. Three claims you have seen recently put through the checklist.
                3. One trusted source per topic noted for future checks.
                4. Any product you were considering kept or dropped on the result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written five-question claim checklist applied to three real claims, each with a keep or drop decision."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write five questions to ask of any health product or test claim"
                - "Ask the agent to find what health bodies say about three claims you have seen"
                - "Note one trusted source for supplements, tests and exercise"
                - "Decide whether to keep or drop each product you were considering"
            - name: How visceral fat and insulin resistance raise risk
              description: |-
                ## Purpose
                Fat inside the abdomen behaves differently from fat under the skin, feeding into insulin resistance, raised triglycerides and blood pressure long before diabetes is diagnosed. Understanding this link explains why a waist measurement and an HbA1c can matter more than the bathroom scales, and why activity helps even when weight barely moves.

                ## Milestones
                1. The difference between visceral and subcutaneous fat explained in your own words.
                2. What insulin resistance is and how it shows up in blood tests understood.
                3. The markers that hint at it, such as waist, triglycerides and HbA1c, listed.
                4. Your own recent values for those markers gathered in one place.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written explanation of visceral fat and insulin resistance with your own waist, triglyceride and HbA1c values beside it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service explainer on visceral fat and insulin resistance"
                - "List the blood tests and measures that hint at insulin resistance"
                - "Gather your most recent values for each"
                - "Write a short explanation you could give a friend"
            - name: Choosing the first risk factor to change
              description: |-
                ## Purpose
                Trying to fix sleep, food, drinking, weight and fitness in the same month usually ends with none of them changed. Picking one factor for the next quarter, based on your doctor's priorities and how ready you are, and parking the rest on purpose, gives the first change a real chance.

                ## Milestones
                1. Your modifiable risk factors scored for impact and for how ready you feel.
                2. One factor chosen for the next three months.
                3. A single measurable goal set for it.
                4. The other factors written on a parked list with a date to revisit.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One risk factor chosen with a measurable three-month goal, and the rest recorded on a parked list with a revisit date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Score each modifiable factor from one to five for impact and readiness"
                - "Pick the factor with the best combined score"
                - "Write one measurable goal for the next three months"
                - "Put the other factors on a parked list with a revisit date"
            - name: Daily aspirin for prevention, asked not assumed
              description: |-
                ## Purpose
                Many people in midlife start a daily low-dose aspirin on their own, or stay on one started years ago, but guidance has changed and for people without heart disease the bleeding risk often outweighs the benefit. Asking your doctor directly whether it is right for you settles the question with your own risks in view.

                ## Milestones
                1. Whether you currently take aspirin, and who suggested it, written down.
                2. The question raised with your doctor or pharmacist.
                3. Their answer and reasoning recorded.
                4. Any change made only on their advice.

                ## Notes
                Do not stop aspirin prescribed after a heart attack, stent or stroke without speaking to the team that prescribed it.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A documented answer from your doctor or pharmacist on whether daily aspirin is right for you, with any change made on their advice."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check whether you or anyone advised you to take daily aspirin"
                - "Ask your doctor or pharmacist whether aspirin is right for your risk"
                - "Write down their answer and the reason they gave"
            - name: Supplement cupboard review with a pharmacist
              description: |-
                ## Purpose
                Vitamin D, fish oil, multivitamins and herbal products build up in midlife cupboards, some useful for particular people, many not, and a few interact with prescribed medicines. Taking the whole collection to a pharmacist for one review costs nothing and usually leaves you with a shorter, cheaper and safer list.

                ## Milestones
                1. Every supplement in the house listed with brand, strength and how often you take it.
                2. The list reviewed with a pharmacist alongside any prescribed medicines.
                3. Each supplement marked keep, stop or ask the doctor.
                4. The kept list added to your medicines record.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist-reviewed supplement list with each item marked keep, stop or ask the doctor."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph every supplement label in the house"
                - "List each one with strength and how often you take it"
                - "Book a medicines review with your pharmacist and take the list"
                - "Bring the updated list to the yearly medicines review @recurring(yearly)"
            - name: Gym, home or class for strength training
              description: |-
                ## Purpose
                The best place to train is the one you will still be using in a year, and that depends on cost, travel time, confidence and whether you need supervision. Comparing a gym, a home setup and a group strength class on the same few criteria avoids paying for a membership you stop using in March.

                ## Milestones
                1. Three options identified within a realistic travel time.
                2. Each scored for cost, convenience, coaching and how likely you are to keep going.
                3. A trial session or week done at the top two options.
                4. A choice made and started.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three training options scored on the same criteria, two trialled, and one chosen and in use."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List one gym, one class and one home option you could realistically use"
                - "Score each for cost, convenience, coaching and staying power"
                - "Book a trial at the top two"
                - "Commit to one and put the first month of sessions in the calendar"
            - name: Home strength kit on a small budget
              description: |-
                ## Purpose
                A pair of adjustable dumbbells, a few resistance bands and a sturdy step cover most of a midlife strength programme for less than a few months of gym fees. Choosing kit that fits your space and lets you add load over time avoids the common mistake of buying weights you outgrow in six weeks.

                ## Milestones
                1. The exercises in your programme listed with the kit each needs.
                2. Two or three options compared for price, weight range and storage.
                3. Kit bought or borrowed that allows load to increase over a year.
                4. A storage spot chosen so setup takes under two minutes.

                ## Notes
                Start from the **Purchase decision** template. Second-hand weights are usually fine; check adjustable dumbbell locks carefully.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Home strength kit chosen against a written comparison, with a load range that allows a year of progression."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the kit each exercise in your programme needs"
                - "Compare adjustable dumbbells, bands and kettlebells for price and range"
                - "Check second-hand listings before buying new"
                - "Clear a storage spot near where you will train"
            - name: Active commute trial for four weeks
              description: |-
                ## Purpose
                Building activity into a trip you already make is the most reliable way for busy people to reach the weekly guideline, because it needs no extra time slot. A four-week trial of walking or cycling part of the commute on two days a week shows what is realistic before you commit.

                ## Milestones
                1. A route for walking or cycling all or part of the commute planned.
                2. Kit sorted: shoes, a bag, lights or a bike check as needed.
                3. Two active commute days a week completed for four weeks.
                4. A decision made on keeping, extending or changing it.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Eight active commute days logged over four weeks, followed by a written decision on whether to continue."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Plan a walking or cycling route for part of your commute"
                - "Sort the shoes, bag or bike check you will need"
                - "Pick the two days a week for the trial"
                - "Decide after four weeks whether to keep or change it"
            - name: Weight drift since your twenties, faced honestly
              description: |-
                ## Purpose
                Gradual weight gain of several kilos a decade is common and is linked with higher risk of diabetes, heart disease and joint problems, even when weight stays within a normal range. Comparing your weight now with your weight at about 25, and deciding with your clinician whether the aim is to stop the drift or reverse some of it, sets a realistic target.

                ## Milestones
                1. Your approximate weight at 25 and your current weight written down.
                2. The yearly rate of gain worked out.
                3. The figures discussed with your clinician alongside waist and blood results.
                4. An agreed aim, hold steady or reduce, recorded on your plan.

                ## Notes
                Weight is one marker among several. If eating or weight has been a source of distress, say so to your clinician before setting any target.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Current and age-25 weights recorded, discussed with a clinician, and an agreed aim written on the prevention plan."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find or estimate your weight at about age 25"
                - "Work out your average gain per year since then"
                - "Raise the figure with your clinician at the next visit"
                - "Write the agreed aim on your one-page plan"
            - name: Personal trainer assessment for a midlife start
              description: |-
                ## Purpose
                Starting strength training after years off is where a few sessions with a qualified trainer pay for themselves: a movement screen, a sensible starting load and someone to correct form. Going in with your baseline results and any health conditions written down gets a programme built around you rather than a generic one.

                ## Milestones
                1. A trainer found with recognised qualifications and experience with over-40 beginners.
                2. Your baseline results and health notes shared before the first session.
                3. An assessment session completed with a written starting programme.
                4. A follow-up session booked to review form after four weeks.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An assessment with a qualified trainer completed, a written starting programme received and a four-week review booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Shortlist two trainers with recognised qualifications near you"
                - "Send your baseline results and health notes before the session"
                - "Ask for the starting programme in writing"
                - "Book a follow-up for four weeks later"
            - name: Six-month strength and fitness retest
              description: |-
                ## Purpose
                Training feels like it is working long before the numbers prove it, and sometimes the reverse. Repeating the chair stand, push-ups, grip, one-leg stand and timed walk six months after the baseline shows what has changed and which part of the plan needs more attention.

                ## Milestones
                1. The retest date set six months after your baselines.
                2. All five tests repeated under the same conditions.
                3. Results compared with the baseline in the numbers log.
                4. The weakest result turned into one change to the training plan.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All five baseline tests repeated after six months and compared, with one training change recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Put the retest date in the calendar six months from your baseline"
                - "Repeat the chair stand, push-ups, grip, one-leg stand and timed walk"
                - "Compare each result with the baseline"
                - "Change one part of your training to target the weakest result"
            - name: Training for a first 5 km after 40
              description: |-
                ## Purpose
                Signing up for a dated event gives cardio training a reason on the wet evenings. Building up over about twelve weeks with walk and run intervals to a local 5 km run, or a fast walk of the same distance, raises fitness steadily while giving tendons time to adapt.

                ## Milestones
                1. A 5 km event about twelve weeks away chosen and entered.
                2. A beginner plan with walk and run intervals written into the calendar.
                3. Three sessions a week completed for most of the twelve weeks.
                4. The event finished and your time recorded.

                ## Notes
                Ankle, calf and Achilles problems are common in new runners over 40. Build up gradually and swap a run for a walk at the first sign of pain.
              priority: low
              deadlineOffsetDays: 84
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 5 km event completed after a twelve-week plan, with the finishing time recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Find a 5 km run or walk about twelve weeks away and enter it"
                - "Choose a beginner walk and run plan and put the sessions in the calendar"
                - "Check your running shoes have plenty of cushioning left"
                - "Record your finishing time in the numbers log"
            - name: Returning to a team or racket sport after years off
              description: |-
                ## Purpose
                Going back to football, tennis, netball or squash after a long gap is great for fitness and friendship, and also the commonest way for people over 40 to tear a calf or Achilles. A six-week build-up of strength, short sprints and change-of-direction work before the first full match cuts that risk.

                ## Milestones
                1. A club, league or group session chosen with a start date.
                2. Six weeks of calf, hamstring and change-of-direction work completed beforehand.
                3. The first few sessions played at reduced intensity.
                4. A warm-up routine written down and used before every game.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Six weeks of preparation completed and the first four sessions played with a written warm-up, without a time-loss injury."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Find a club or casual session that suits your level"
                - "Add calf raises and short sprint drills to your strength sessions"
                - "Write a ten-minute warm-up to use before every game"
                - "Play the first sessions at reduced intensity"
            - name: Prevention plan for shift workers over 40
              description: |-
                ## Purpose
                Night and rotating shifts are linked with higher rates of weight gain, type 2 diabetes and heart disease, and the usual advice on sleep, meals and exercise assumes a nine-to-five week. Building the plan around your rota, with anchor sleep, planned meals on shift and training slots that move with the pattern, makes prevention possible on your terms.

                ## Milestones
                1. A typical rota cycle mapped with sleep, meal and training windows.
                2. An anchor sleep period kept on both work and rest days.
                3. Food for night shifts planned rather than bought from vending machines.
                4. Two strength sessions fitted into each rota week.

                ## Notes
                Ask your occupational health service whether it offers health checks for night workers; some employers are required to.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rota-based weekly plan in use for four cycles, with sleep, meals and two strength sessions mapped to each."
                cadence: rolling
              tasks:
                - "Map one full rota cycle with sleep, meal and training windows"
                - "Choose a four-hour anchor sleep period you can keep on all days"
                - "Plan next week's training and shift meals around the rota @recurring(weekly:wed)"
                - "Ask occupational health about a night worker health check"
            - name: Prevention squeezed between children and ageing parents
              description: |-
                ## Purpose
                People in their forties and fifties often book every appointment for their children and parents and none for themselves. A minimum plan that fits a squeezed week, one protected hour, two short strength sessions at home and your own checks booked alongside theirs, keeps your health from becoming the next family emergency.

                ## Milestones
                1. Your own overdue checks listed alongside the family's appointments.
                2. One weekly hour protected for your own health.
                3. A 20-minute home strength session that needs no travel.
                4. Your next check booked the same day as a parent's or child's.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks with a protected weekly health hour used, and your own next check booked alongside a family appointment."
                cadence: rolling
              tasks:
                - "List your own overdue checks next to the family appointments"
                - "Write a 20-minute home strength session needing no kit"
                - "Use your protected hour for your own health @recurring(weekly:tue)"
                - "Book your next check on the same day as a family appointment"
            - name: Lifelong risk after gestational diabetes or pre-eclampsia
              description: |-
                ## Purpose
                Gestational diabetes, pre-eclampsia and high blood pressure in pregnancy raise the risk of type 2 diabetes and heart disease for decades afterwards, and that history is often missing from later medical records. Making sure your doctor knows, and that the follow-up tests your health service recommends actually happen, is one of the highest-value prevention steps for anyone with that history.

                ## Milestones
                1. The pregnancy complication, year and any test results written down.
                2. The history confirmed as recorded on your current medical record.
                3. The recommended follow-up tests and how often they are due agreed with your doctor.
                4. The first follow-up test done and the next one diarised.

                ## Notes
                If you are unsure whether you had one of these conditions, your maternity notes or the hospital where you gave birth can tell you.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The pregnancy complication recorded on your medical record, follow-up tests agreed, and the first test done with the next one diarised."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down the pregnancy complication, the year and any results you have"
                - "Ask your practice to confirm it is on your record"
                - "Ask your doctor which follow-up tests you need and how often"
                - "Book the yearly glucose or blood pressure check they recommend @recurring(yearly)"
            - name: Starting from zero after years of avoiding doctors
              description: |-
                ## Purpose
                Some people reach 45 or 50 having not seen a doctor in a decade, often from fear of what they will hear. A staged plan that starts with something small, such as a pharmacy blood pressure check, then a single appointment, and then the full checks, makes catching up feel manageable rather than overwhelming.

                ## Milestones
                1. A pharmacy or workplace blood pressure check done as a first step.
                2. Registration with a doctor's practice confirmed or completed.
                3. One appointment attended to agree what needs checking first.
                4. The first round of blood tests done and results discussed.

                ## Notes
                If fear is the obstacle, say so at the appointment. Clinicians hear it often and can pace things with you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "Within 90 days, a first blood pressure reading, one doctor's appointment and a first round of blood tests completed and recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Get a free blood pressure check at a local pharmacy"
                - "Confirm you are still registered with a doctor's practice"
                - "Book one appointment to agree what to check first"
                - "Ask someone you trust to come with you if that helps"
            - name: Earlier risk thresholds for some ethnic backgrounds
              description: |-
                ## Purpose
                People of South Asian, Chinese, Black African and Caribbean heritage develop type 2 diabetes and some heart conditions earlier and at lower body weights, and several guidelines use lower weight thresholds or earlier testing as a result. Knowing whether this applies to you means asking for checks at the right age rather than the default one.

                ## Milestones
                1. Your health service's guidance on ethnicity and diabetes or heart risk found.
                2. Any lower body mass index or waist thresholds that apply to you noted.
                3. Whether earlier or more frequent testing is advised confirmed with your doctor.
                4. Your decade calendar adjusted to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The ethnicity-adjusted thresholds and test ages that apply to you recorded, confirmed with your doctor and reflected in your decade calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's guidance on ethnicity and diabetes risk"
                - "Note any lower weight or waist thresholds that apply to you"
                - "Ask your doctor whether you should be tested earlier or more often"
                - "Update your decade calendar with any changed ages"
            - name: Prevention pact with a partner or friend
              description: |-
                ## Purpose
                Habits stick better when someone else expects you to turn up. Agreeing a simple pact with a partner, sibling or friend of a similar age, a shared walk or strength session each week and a monthly check-in on each other's plan, adds accountability without turning health into a competition.

                ## Milestones
                1. A partner or friend who wants to do the same agreed.
                2. One shared weekly activity fixed in both calendars.
                3. A monthly check-in on each other's one-page plans held.
                4. Three months of the pact completed.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Three months of a shared weekly activity and monthly check-ins completed with the same partner or friend."
                cadence: rolling
              tasks:
                - "Ask one person of a similar age to join a prevention pact"
                - "Agree one shared weekly walk or strength session"
                - "Check in on each other's plans and next steps @recurring(monthly:15)"
            - name: Training backwards from the life you want at 80
              description: |-
                ## Purpose
                Picture the things you want to do at 80, carry a grandchild, lift a case into an overhead locker, get up off the floor, walk a hilly town, then work out the strength and fitness they need. Because both decline with age, you need a good deal more than that now, which turns vague exercise into concrete targets.

                ## Milestones
                1. Five physical tasks you want to manage at 80 written down.
                2. The strength, fitness and balance each one requires estimated.
                3. A current target for each set above that level to allow for decline.
                4. Your training programme adjusted to work towards those targets.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five later-life tasks with matching present-day strength or fitness targets written down and reflected in the training programme."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write five physical tasks you want to manage at 80"
                - "Estimate the strength or fitness each one needs"
                - "Set a present-day target above each level"
                - "Change one exercise in your programme to work towards a target"
            - name: Lab cardiorespiratory fitness test decision
              description: |-
                ## Purpose
                A lab VO2 max test, done on a treadmill or bike with a mask, gives an accurate measure of aerobic fitness that wearables only estimate. For most people the timed walk is enough, but for anyone training seriously or with a medical reason, deciding whether a lab test is worth the cost and where to get a reliable one is a reasonable next step.

                ## Milestones
                1. Your reason for wanting a lab test written down.
                2. Two providers compared for price, method and staff qualifications.
                3. Your doctor asked whether a supervised test is advisable for you.
                4. A decision recorded, and the test booked if you go ahead.

                ## Notes
                Maximal exercise tests can be unsafe with some heart conditions. Ask your doctor first if you have any cardiac symptoms or history.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a lab fitness test, with two providers compared and medical advice taken."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you would do differently with a lab result"
                - "Compare two providers for price, method and who supervises"
                - "Ask your doctor whether a maximal test is safe for you"
                - "Record the decision and book the test if you go ahead"
            - name: Written personal prevention rulebook
              description: |-
                ## Purpose
                After a few years of checks and training, most people have learned what works for them: which habits slip in winter, which numbers creep, which warning signs mean ease off. Writing those lessons into a short rulebook makes the plan survive a busy year, a move or a new doctor.

                ## Milestones
                1. Ten personal rules drawn from your logs and reviews written down.
                2. Each rule linked to the evidence that taught it.
                3. Rules that no longer hold removed.
                4. The rulebook kept with your one-page plan and reread at each birthday review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A rulebook of about ten personal prevention rules, each linked to evidence from your own logs."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Reread a year of logs and reviews for repeated patterns"
                - "Write ten rules you have learned about your own health"
                - "Note the evidence behind each rule"
                - "Store the rulebook with your one-page plan"
            - name: Ten-year prevention trend review
              description: |-
                ## Purpose
                The real test of a prevention plan is whether your numbers are flatter at 55 than they would have been without it. Charting a decade of blood pressure, cholesterol, HbA1c, waist, strength and fitness side by side shows which risks you held steady, which crept up, and what the next ten years should focus on.

                ## Milestones
                1. Ten years of results gathered from the numbers log and records.
                2. Each measure charted against time.
                3. The measures that improved, held or worsened named.
                4. Your doctor's view sought on the trends.
                5. Priorities for the next decade written into a new one-page plan.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Charts of at least six measures over ten years, reviewed with your doctor and turned into priorities for the next decade."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Export ten years of results from your numbers log"
                - "Ask the agent to chart each measure and summarise the trends"
                - "Name the measures that improved, held or worsened"
                - "Take the charts to your doctor and agree next decade's priorities"
---

# Preventive Health Over 40

This area is for any adult past forty who would rather prevent the common midlife problems than meet them later: raised blood pressure and cholesterol creeping up unnoticed, type 2 diabetes, lost muscle and a fall in fitness that makes everyday life harder at seventy. It starts with the foundations (a risk factor inventory, the free midlife check where your health service offers one, strength and fitness baselines and a one-page plan), then the weekly routines that do the real work, the skills behind safe training and reading your results, the decisions worth making with your clinician, a few events to aim at, versions for particular lives, and finally the long view of an experienced self-manager.

What repeats is twice-weekly strength training, a weekly activity tally, a short daily mobility and balance habit, a quarterly numbers check and a prevention review each birthday. The Metrics log, Training program, Weekly meal plan, Sleep review, Habit tracker and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
