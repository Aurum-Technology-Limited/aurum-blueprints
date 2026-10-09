---
id: physical-health.type-2-diabetes-management
name: Type 2 Diabetes Management
description: "A target agreed with your clinician, a steady rhythm of HbA1c tests, eye and foot checks, medicine routines, and the food and movement habits that bring the numbers down."
category: personal
version: 1.0.0
tags: [physical-health, type-2-diabetes-management, everyone, retiree, hba1c, prediabetes, glucose-monitoring, diabetic-foot-and-eye]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - metrics-log
    - course
    - habit-tracker
    - weekly-meal-plan
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Type 2 Diabetes Management
          description: "Living well with type 2 diabetes or prediabetes: glucose monitoring, HbA1c targets, medication, foot and eye checks, and the habits that bring numbers down."
          projects:
            - name: Making sense of your diagnosis result
              description: |-
                ## Purpose
                Many people leave the appointment knowing only that they have diabetes or prediabetes, without the number that put them there or what it measures. HbA1c reflects your average blood glucose over roughly the last two to three months, and knowing your starting figure is what every later result will be compared against.

                ## Milestones
                1. The HbA1c result that led to the diagnosis written down with its date and units.
                2. Whether the diagnosis is type 2 diabetes or prediabetes confirmed in plain words.
                3. Any other results taken at the same time, such as kidney tests and cholesterol, noted.
                4. Questions you still have answered by your clinician or practice nurse.

                ## Notes
                Results come in two units, mmol/mol and percent, depending on the country. Write down which one your lab uses so later figures are compared like for like.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Your diagnosis HbA1c, its date and units, and the type of diagnosis are written down and checked with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your diagnosis HbA1c result on the patient portal or ask the practice for it"
                - "Write the figure, its units and the test date on one page"
                - "List the questions the diagnosis appointment left unanswered"
                - "Ask the practice nurse to go through the result with you"
            - name: Agreeing your personal HbA1c target
              description: |-
                ## Purpose
                Targets for HbA1c are individual: a younger person newly diagnosed may be aiming lower than an older person on medicines that can cause hypos. Agreeing a written target with your clinician turns each result into a clear question of on track or not, and stops you chasing a number that was never meant for you.

                ## Milestones
                1. Your clinician asked for your HbA1c target and the reasons behind it.
                2. The target written at the top of your results log.
                3. What happens if a result lands above the target noted.
                4. A plan to revisit the target at each annual review.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An individual HbA1c target, agreed with your clinician and written in your results log with the reasoning in one sentence."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your clinician what HbA1c target they suggest for you and why"
                - "Ask what would make them change that target"
                - "Write the target and the reason at the top of your results log"
                - "Confirm the target still fits at the annual review @recurring(yearly)"
            - name: Diabetes care team contact sheet
              description: |-
                ## Purpose
                Diabetes care is spread across several people: the practice nurse, your doctor, a pharmacist, the eye screening service, a podiatrist, perhaps a dietitian or a specialist nurse. One sheet with names, numbers and what each is for means you ring the right person first time, and so can anyone helping you.

                ## Milestones
                1. Every professional involved in your diabetes care listed with their role.
                2. A phone number, email or portal route recorded for each.
                3. The out-of-hours number for urgent advice added.
                4. The sheet stored where your household can find it.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page contact sheet covering every member of your diabetes care team, stored where your household can find it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List everyone who has seen you about your diabetes in the past year"
                - "Add a phone number or portal route for each person"
                - "Add the out-of-hours advice number at the bottom"
                - "Update names and numbers on the sheet @recurring(yearly)"
            - name: Checking which yearly diabetes checks you have had
              description: |-
                ## Purpose
                Most health services set out a list of yearly checks for diabetes: HbA1c, blood pressure, cholesterol, kidney blood and urine tests, weight, a foot check, eye screening and a smoking question. Comparing that list with your own record usually shows one or two that have slipped, and those are the checks that catch problems early.

                ## Milestones
                1. Your health service's list of yearly diabetes checks found.
                2. Each check marked with the date you last had it.
                3. Any check missing or overdue for more than a year flagged.
                4. The missing checks booked or raised with the practice.

                ## Notes
                The kidney urine test, often called ACR, is the one most often missed because it needs a sample you bring in.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every yearly diabetes check on your health service's list has a last-done date, and any overdue check is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up your health service's list of yearly checks for diabetes"
                - "Find the date of each check on your patient portal"
                - "Mark the checks that are missing or more than a year old"
                - "Ask the practice to book the overdue checks"
            - name: Diabetes results log
              description: |-
                ## Purpose
                Results arrive months apart and live in different places, so a slow rise in HbA1c or a dip in kidney function is easy to miss. Keeping HbA1c, weight, waist, blood pressure, cholesterol and kidney results in one dated table shows the trend at a glance and makes every review quicker.

                ## Milestones
                1. A log with columns for date, HbA1c, weight, waist, blood pressure, cholesterol and kidney results.
                2. Your target and diagnosis HbA1c written at the top.
                3. Results from the past two years copied in from the portal.
                4. The log brought to at least one review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results log holding at least two years of dated diabetes results, brought to one review."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a results log from the metrics log template"
                - "Copy the last two years of HbA1c and kidney results from the portal"
                - "Add weight, waist and blood pressure columns"
                - "Check the portal for new results and add them to the log @recurring(monthly:3)"
            - name: Deciding whether you need to test glucose at home
              description: |-
                ## Purpose
                Not everyone with type 2 diabetes needs a home meter: people on some medicines rarely benefit from routine finger pricks, while those on insulin or tablets that can cause hypos usually do. Settling the question with your clinician, and choosing a meter or sensor only if it will change what you do, avoids both wasted strips and unnoticed lows.

                ## Milestones
                1. Your clinician's view on whether you need home testing recorded.
                2. If testing is advised, the reason and how often agreed.
                3. A meter or sensor chosen that your health service supplies strips or sensors for.
                4. The device set up and a first reading taken correctly.

                ## Notes
                Start from the **Purchase decision** template. Ask which meters your health service funds strips for before buying one yourself.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision, made with your clinician, on whether you test at home, with a supported device in use if the answer is yes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether your medicines mean you should test at home"
                - "Ask which meters or sensors your health service supplies for"
                - "Compare two supported devices against the purchase decision template"
                - "Take a first reading with a clinician or pharmacist watching"
            - name: Hypo plan for medicines that can cause lows
              description: |-
                ## Purpose
                Tablets in the sulfonylurea group and insulin can push glucose too low, causing shakiness, sweating, confusion and, if untreated, collapse. A written plan with your symptoms, the fast-acting sugar you will use and what to do next means a low is dealt with in minutes, by you or by whoever is with you.

                ## Milestones
                1. Your clinician has confirmed whether any of your medicines can cause hypos.
                2. Your own early warning signs written down.
                3. A treatment plan and recheck routine, as advised by your team, on one card.
                4. Fast-acting sugar kept in your bag, car and by the bed.
                5. Your household shown the card and where the sugar is.

                ## Notes
                If none of your medicines can cause hypos, keep the answer in writing and revisit this project whenever a medicine changes.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A hypo card written from your team's advice is in your wallet, with fast-acting sugar in three set places and the household briefed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist whether any of your medicines can cause a hypo"
                - "Write your warning signs and your team's treatment steps on one card"
                - "Put fast-acting sugar in your bag, your car and beside the bed"
                - "Restock the hypo sugar in all three places @recurring(monthly:14)"
            - name: Structured diabetes education course
              description: |-
                ## Purpose
                Many health services offer a free group course for people newly diagnosed with type 2 diabetes, usually a day or a few short sessions, and attending it is linked with better results a year later. It covers food, activity, medicines and checks in one go, and you meet others working through the same questions.

                ## Milestones
                1. The course your health service offers found and a referral requested.
                2. A place booked on a date you can attend, in person or online.
                3. Every session attended.
                4. Three changes you plan to make written down at the end.

                ## Notes
                Start from the **Course** template. Courses exist for people diagnosed years ago too; it is never too late to ask.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A structured type 2 diabetes course completed, with three planned changes written down afterwards."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the practice which diabetes education course they refer to"
                - "Book the first available date that fits your week"
                - "Bring a notebook and your latest HbA1c to each session"
                - "Write down three changes you will make once the course ends"
            - name: Driving, work and insurance check after diagnosis
              description: |-
                ## Purpose
                Some diabetes medicines, especially insulin and tablets that can cause hypos, come with rules from driving authorities, and some jobs and insurance policies ask about diabetes. Checking the rules that apply to you in the first two months avoids an invalid licence or policy that only comes to light after an incident.

                ## Milestones
                1. Your driving authority's rules for diabetes and your medicines read.
                2. Any notification required made, or a note kept that none is needed.
                3. Your employer's occupational health policy checked if your job involves driving, heights or machinery.
                4. Insurance policies that ask about medical conditions updated.

                ## Notes
                Rules change when medicines change, so repeat the driving check whenever a new diabetes medicine is started.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note of which driving, work and insurance rules apply to you, with any required notifications made."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your driving authority's guidance on diabetes medicines"
                - "Make any notification the guidance requires and keep the reference"
                - "Check whether your job role has occupational health rules for diabetes"
                - "Tell your car, travel and life insurers if their policies ask"
            - name: Lifestyle-first or medicine-now conversation
              description: |-
                ## Purpose
                At diagnosis some people are offered a few months of food and activity changes before tablets, while others are advised to start a medicine straight away. Going into that conversation with your result, your preferences and a few clear questions means the choice is made with you rather than for you, with a date to look again.

                ## Milestones
                1. Your HbA1c, weight and other risks summarised on one page.
                2. The options your clinician offers listed with their pros and cons.
                3. A decision made, with what will be measured and when.
                4. A date set for the next HbA1c test to judge the decision.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment decision recorded with your clinician, naming what will be measured and the date of the follow-up HbA1c."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-page summary of your result, weight and other conditions"
                - "List what matters most to you about treatment in three lines"
                - "Ask your clinician to explain each option and how it would be judged"
                - "Book the follow-up HbA1c on the date agreed"
            - name: HbA1c test rhythm
              description: |-
                ## Purpose
                HbA1c is usually checked every three to six months while treatment is being adjusted and less often once it is stable. Knowing your interval and checking each quarter that the next test is booked stops the drift where a year passes without a result and a change in treatment is delayed.

                ## Milestones
                1. Your clinician's chosen HbA1c interval written in your log.
                2. The next test booked before you leave each appointment.
                3. Each result added to the log within a week.
                4. Four quarters in a row with the next test confirmed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No gap between HbA1c tests longer than the interval your clinician set, across a full year."
                cadence: cyclic
              tasks:
                - "Ask your clinician how often your HbA1c should be checked"
                - "Check that your next HbA1c test is booked @recurring(quarterly)"
                - "Read each result on the portal and compare it with your target"
            - name: Annual diabetes review
              description: |-
                ## Purpose
                The yearly review is where medicines, targets, complications and the year's results come together, and it is often only fifteen minutes. Arriving with your results log, medicine list and three questions, and with the blood and urine tests done a fortnight before, makes those minutes about decisions rather than catching up.

                ## Milestones
                1. The review booked in a fixed month each year.
                2. Blood tests and the urine sample done about two weeks before.
                3. Results log, medicine list and three questions prepared.
                4. Every change agreed at the review written down and acted on.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Two consecutive annual reviews held with tests done beforehand and the agreed changes written down."
                cadence: cyclic
              tasks:
                - "Book the annual diabetes review and its pre-review tests @recurring(yearly)"
                - "Drop off the urine sample with the blood test"
                - "Prepare your results log, medicine list and three questions"
                - "Write down every change agreed before you leave"
            - name: Yearly diabetic eye screening
              description: |-
                ## Purpose
                Diabetic retinopathy causes no symptoms until it is advanced, and yearly photographs of the back of the eye catch changes while treatment can still protect sight. Screening is separate from an ordinary eye test, and the invitation is easy to miss, move or forget, so it needs its own reminder.

                ## Milestones
                1. Your registration with the local diabetic eye screening service confirmed.
                2. This year's screening attended, with transport home arranged.
                3. The result letter received and filed.
                4. Any referral for further assessment booked promptly.

                ## Notes
                The drops used can blur vision for several hours. Do not drive yourself home.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Diabetic eye screening attended every year for two years, with each result filed and any referral acted on."
                cadence: cyclic
              tasks:
                - "Confirm with the practice that you are registered for eye screening"
                - "Check the eye screening invitation has arrived and is booked @recurring(yearly)"
                - "Arrange a lift home for screening day"
                - "File the result letter and book any referral it asks for"
            - name: Annual foot risk check with a clinician
              description: |-
                ## Purpose
                Diabetes can quietly reduce feeling and circulation in the feet, and a small unnoticed injury can become a serious ulcer. A yearly check with a monofilament and pulse test gives you a risk level, and that level decides whether you need regular podiatry or simply daily self-checks.

                ## Milestones
                1. This year's foot check done by a nurse, doctor or podiatrist.
                2. Your foot risk level written in your results log.
                3. What that risk level means for your care explained to you.
                4. A podiatry referral in place if your risk level calls for one.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A foot check done within the last year, with your risk level recorded and any referral it requires in place."
                cadence: cyclic
              tasks:
                - "Ask whether your foot check is due and book it with the review"
                - "Take your socks and shoes off for the check and ask for your risk level"
                - "Write the risk level in your results log @recurring(yearly)"
                - "Ask for a podiatry referral if the risk level is moderate or high"
            - name: Daily foot look routine
              description: |-
                ## Purpose
                Cuts, blisters, cracks and colour changes are much easier to treat on the day they appear than a week later. Thirty seconds after a shower or at bedtime, with a mirror for the soles if you need one, is the routine diabetes teams most want people to keep.

                ## Milestones
                1. A fixed daily moment chosen for checking both feet.
                2. A mirror or a family member arranged for seeing the soles.
                3. A rule written for which changes to report and to whom.
                4. The check kept up for thirty days in a row.

                ## Notes
                Report any break in the skin, swelling, heat or colour change that does not settle within a day. Never cut corns or hard skin yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive days of foot checks completed, with a written rule for what to report."
                cadence: rolling
              tasks:
                - "Choose the daily moment you will check your feet"
                - "Put a long-handled mirror where you dry your feet"
                - "Write down which changes you will report and the number to call"
                - "Check both feet, soles and between the toes @recurring(daily)"
            - name: Daily diabetes medicine routine
              description: |-
                ## Purpose
                Missed doses are a common reason HbA1c stays above target, and they are usually forgotten rather than skipped on purpose. Tying each tablet or injection to a fixed meal or moment, and ticking it off, makes it automatic and shows your clinician the medicine was really taken.

                ## Milestones
                1. Each diabetes medicine linked to a meal or daily moment, as your pharmacist advises.
                2. A pill organiser or reminder in use if it helps.
                3. Doses ticked off daily for a month.
                4. Fewer than two missed doses in that month.

                ## Notes
                Start from the **Habit tracker** template. Some diabetes tablets work best with food and some must be taken at a set time; ask your pharmacist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A month of daily doses ticked off with no more than one missed."
                cadence: rolling
              tasks:
                - "Ask your pharmacist which meal or time suits each diabetes medicine"
                - "Set up a habit tracker with one row per medicine"
                - "Take your diabetes medicines and tick them off @recurring(daily)"
            - name: Home glucose testing routine
              description: |-
                ## Purpose
                For people who do test, readings scattered at random times are hard to read and easy to give up on. A testing pattern agreed with your clinician, plus a short weekly look at the results, turns finger pricks into information about what is working and when a low or high needs action.

                ## Milestones
                1. The times and frequency of testing agreed with your clinician.
                2. The range your readings should sit in written down.
                3. Readings recorded with a note on meals, activity and illness.
                4. Eight weekly reviews completed.

                ## Notes
                Skip this project if you and your clinician decided home testing is not needed for you.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weekly reviews of home readings against the range your clinician agreed, with any action noted."
                cadence: rolling
              tasks:
                - "Ask your clinician what times to test and what range to aim for"
                - "Add a meal and activity note to each reading"
                - "Review the week's readings against your agreed range @recurring(weekly:sun)"
            - name: Monthly diabetes numbers review
              description: |-
                ## Purpose
                Between HbA1c tests the only signal you get is from the things you can measure yourself: weight, waist, average readings if you test, and how many active days you managed. Ten minutes once a month shows whether the habits are holding and gives you something to adjust well before the next blood test.

                ## Milestones
                1. A monthly slot in the calendar.
                2. Weight and waist measured the same way each month.
                3. The month's figures written beside the previous month's.
                4. One small adjustment chosen for the coming month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly reviews recorded, each with weight, waist and one chosen adjustment."
                cadence: rolling
              tasks:
                - "Decide how and when you will measure your waist each month"
                - "Record weight and waist and compare with last month @recurring(monthly:9)"
                - "Write one adjustment to try in the coming month"
            - name: Testing supplies and repeat prescription reorder
              description: |-
                ## Purpose
                Running out of test strips, lancets, pen needles or a diabetes medicine usually happens on a holiday weekend. A monthly stock check and reorder, with a sharps bin swapped before it is full, keeps supplies a fortnight ahead and stops gaps in treatment.

                ## Milestones
                1. Every diabetes item you use listed with how long one pack lasts.
                2. Repeat prescriptions set up for all of them.
                3. A monthly reorder done for three months running.
                4. A sharps bin collection or return route arranged, if you use needles or lancets.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months with no diabetes medicine or supply running out, and a working sharps disposal route."
                cadence: rolling
              tasks:
                - "List every diabetes medicine and supply with how long a pack lasts"
                - "Check stock and reorder anything under two weeks left @recurring(monthly:18)"
                - "Ask the pharmacy how to return a full sharps bin"
            - name: Weekly carbohydrate-aware meal plan
              description: |-
                ## Purpose
                Most glucose spikes trace back to the size and type of carbohydrate at a meal, and those choices are mostly made when the shopping is planned. A weekly plan with steady portions of starchy food, plenty of vegetables and protein at each meal is the most practical daily lever many people have on their numbers.

                ## Milestones
                1. A weekly plan with dinners and lunches decided in advance.
                2. Starchy portions on the plan sized to a quarter of the plate.
                3. Shopping lists built from the plan.
                4. The plan kept for eight weeks.

                ## Notes
                Start from the **Weekly meal plan** template. A dietitian can tailor portions to your medicines; ask for a referral if you are on insulin.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly meal plans, each with a set starchy portion at every main meal."
                cadence: rolling
              tasks:
                - "Create a weekly meal plan from the template"
                - "Plan the week's meals and write the shopping list @recurring(weekly:sat)"
                - "Mark the starchy part of each meal and check it fills a quarter of the plate"
            - name: Walk after the main meal
              description: |-
                ## Purpose
                A ten to fifteen minute walk after eating helps muscles use glucose from the meal, and it often lowers the post-meal rise noticeably. Attaching it to the biggest meal of the day makes it the easiest form of activity to keep, even for people who never think of themselves as exercisers.

                ## Milestones
                1. The meal after which you will walk chosen.
                2. A short route or indoor alternative planned for bad weather.
                3. Walks counted each week for two months.
                4. Walks on at least five days a week by the end.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two months of weekly tallies, ending with post-meal walks on at least five days a week."
                cadence: rolling
              tasks:
                - "Pick the meal you will walk after and a ten-minute route"
                - "Plan an indoor alternative for wet days"
                - "Count the days you walked after the main meal @recurring(weekly:mon)"
            - name: Carbohydrates, where they hide and how much
              description: |-
                ## Purpose
                Bread, rice, pasta and potatoes are obvious, but fruit juice, breakfast cereal, crackers, sauces and milky coffees carry carbohydrate too. Learning which foods raise glucose most, and what a sensible portion looks like on your own plates, makes every later food decision quicker.

                ## Milestones
                1. The main carbohydrate foods in your usual week listed.
                2. Portions of five staples measured once against your own bowls and plates.
                3. Three hidden sources of carbohydrate found in your usual week.
                4. One swap made for each hidden source.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Portions of five staple carbohydrate foods measured on your own crockery, and three hidden sources swapped."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down everything you eat and drink on two ordinary days"
                - "Circle every food in the list that contains carbohydrate"
                - "Measure your usual serving of rice, pasta, cereal, bread and potato"
                - "Choose a swap for three hidden sources you found"
            - name: Reading food labels for carbohydrate and sugar
              description: |-
                ## Purpose
                Labels give total carbohydrate and the sugars within it, per hundred grams and per portion, and the portion is often smaller than what people really eat. Learning to read them in a few seconds lets you compare two cereals, yoghurts or sauces in the shop and pick the better one.

                ## Milestones
                1. The difference between total carbohydrate and sugars understood.
                2. Per hundred grams and per portion figures compared on three products.
                3. Ten everyday products compared in the cupboard or shop.
                4. Lower-carbohydrate or lower-sugar swaps chosen for at least three.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten everyday products compared by label, with swaps adopted for at least three."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's guide to food labels for diabetes"
                - "Compare the per-portion carbohydrate on ten products in your cupboard"
                - "Check whether the label's portion matches what you actually eat"
                - "Choose three swaps and add them to the shopping list"
            - name: How your diabetes medicines work
              description: |-
                ## Purpose
                Type 2 diabetes medicines work in different ways: some reduce glucose made by the liver, some help the kidneys pass glucose out, some boost the body's own insulin response. Knowing which kind you take explains its side effects, why some must be paused when you are ill, and which can cause hypos.

                ## Milestones
                1. Each diabetes medicine you take listed with its group.
                2. One sentence written on how each works.
                3. Common side effects and any sick day pause noted for each.
                4. The notes checked by a pharmacist.

                ## Notes
                Your pharmacist can usually do a short structured medicines review at no cost. Ask for one when a new medicine starts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note for each of your diabetes medicines covering how it works, common side effects and sick day advice, checked by a pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each diabetes medicine you take with its strength"
                - "Read each patient leaflet and note the medicine group"
                - "Note which medicines carry a hypo risk or a sick day pause"
                - "Ask your pharmacist to check your notes in a medicines review"
            - name: Paired testing to see what a meal does
              description: |-
                ## Purpose
                Testing just before a meal and again about two hours after shows how much that meal raised your glucose, which no amount of reading can tell you. A month of paired tests on your usual breakfasts and dinners points to the two or three meals worth changing and the ones you can stop worrying about.

                ## Milestones
                1. Your clinician has agreed paired testing is useful for you.
                2. Paired readings taken for ten different usual meals.
                3. The rise for each meal worked out and ranked.
                4. Two meals adjusted and retested.

                ## Notes
                This uses extra strips, so agree it with your clinician first. If you do not test at home, a short sensor trial can answer the same question.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Paired readings for ten usual meals ranked by rise, with two meals adjusted and retested."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your clinician whether a month of paired testing would help"
                - "Test before and two hours after ten of your usual meals"
                - "Rank the meals by how much glucose rose"
                - "Change the two worst meals and test them again"
            - name: Complications explained, and the checks that catch them
              description: |-
                ## Purpose
                Years of raised glucose can affect the eyes, kidneys, nerves, feet and heart, and that list can feel frightening without knowing which check guards against which risk. Understanding the link between each yearly test and the problem it catches makes the checks feel worth turning up for.

                ## Milestones
                1. The main long-term complications of diabetes listed from a reputable source.
                2. Each one matched to the check that looks for it.
                3. Your own latest result written beside each check.
                4. Questions about any result taken to your next review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page table matching each diabetes complication to its yearly check and your latest result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's page on long-term diabetes complications"
                - "Make a two-column table of each complication and the check for it"
                - "Add your latest result and date beside each check"
                - "Take any result you do not understand to the next review"
            - name: Alcohol and blood glucose
              description: |-
                ## Purpose
                Alcohol can lower glucose for hours after drinking, which matters if you take insulin or tablets that cause hypos, and sweet drinks and mixers raise it in the meantime. Knowing how your own medicines interact with a night out means you can drink, if you choose to, without a hypo the next morning.

                ## Milestones
                1. Your pharmacist asked how alcohol interacts with your diabetes medicines.
                2. The carbohydrate in your usual drinks and mixers looked up.
                3. A personal rule written for eating and testing around drinking.
                4. The household told that a hypo can look like being drunk.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written personal rule for drinking with diabetes, checked with your pharmacist and shared with your household."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist how alcohol affects your diabetes medicines"
                - "Look up the sugar in your usual drinks and mixers"
                - "Write a one-line rule for eating and testing around a night out"
                - "Tell the people you drink with what a hypo looks like"
            - name: Exercise and glucose, what to expect
              description: |-
                ## Purpose
                Activity usually lowers glucose, during and for many hours afterwards, and muscle-strengthening work improves how the body responds to insulin over weeks. If your medicines can cause hypos, the same effect needs planning; if they cannot, it is simply one of the most reliable ways to bring numbers down.

                ## Milestones
                1. Your clinician asked whether any activity needs special care for you.
                2. The difference between aerobic and strength activity for glucose understood.
                3. A plan for snacks and testing around exercise, if your medicines need one.
                4. Your feet checked after new kinds of exercise for a month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short written note of how activity affects your glucose and any precautions your clinician advised."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether any exercise needs care with your medicines or feet"
                - "Read a reputable guide to exercise and type 2 diabetes"
                - "Write down your plan for carrying sugar during activity if you need it"
                - "Check your feet for rubbing after each new activity for a month"
            - name: Spotting signs of high blood glucose
              description: |-
                ## Purpose
                Thirst, passing more urine, tiredness, blurred vision and infections that keep coming back can all mean glucose is running high, and they creep in so slowly that people put them down to age or stress. Recognising your own signs means you raise them weeks before the next HbA1c would have shown the problem.

                ## Milestones
                1. The common signs of high glucose listed from a reputable source.
                2. Any you noticed before your diagnosis marked.
                3. A rule written for when to contact the practice.
                4. The rule checked with your practice nurse.

                ## Notes
                Vomiting, drowsiness, deep fast breathing or confusion with high glucose need urgent medical help, not a routine appointment.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of your own high glucose signs and a contact rule, checked with your practice nurse."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your health service's list of high blood glucose symptoms"
                - "Mark the signs you had before you were diagnosed"
                - "Write a rule for when those signs mean calling the practice"
                - "Check the rule with your practice nurse"
            - name: Adding a second diabetes medicine
              description: |-
                ## Purpose
                When HbA1c stays above target on one medicine, clinicians choose the next one from several groups, and the choice depends on your heart and kidney health, weight, hypo risk and how you feel about injections. Preparing your history and priorities makes it a shared decision and a choice you are likely to stick with.

                ## Milestones
                1. Your last three HbA1c results and current medicines summarised.
                2. Your heart, kidney and weight history noted for the conversation.
                3. The options offered listed with benefits, side effects and how each is taken.
                4. A decision recorded with the date of the next HbA1c.

                ## Notes
                Bring up any medicine you stopped in the past and why. It often rules options in or out.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a second diabetes medicine, made with your clinician, with a follow-up HbA1c booked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Summarise your last three HbA1c results and current medicines"
                - "Note any heart, kidney or weight concerns to raise"
                - "Ask your clinician to compare the options on side effects and hypo risk"
                - "Record the decision and book the follow-up HbA1c"
            - name: First eight weeks on a new diabetes medicine
              description: |-
                ## Purpose
                New diabetes medicines often bring stomach upset, more trips to the toilet or a change in appetite in the first weeks, and these are the weeks when people quietly stop. Planning the start, with a symptom note and the follow-up already booked, means problems are raised and solved rather than the medicine abandoned.

                ## Milestones
                1. The new medicine's name, timing and any dose steps written in your log.
                2. A symptom note kept for eight weeks.
                3. Any troublesome side effect raised with the pharmacist within a week.
                4. The follow-up review or HbA1c attended and its outcome recorded.

                ## Notes
                Never stop a diabetes medicine without speaking to your clinician or pharmacist, even if it upsets your stomach. Timing or form can often be changed instead.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of symptom notes recorded on a new diabetes medicine, with the follow-up attended and its outcome written down."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the new medicine, its timing and any planned dose steps in your log"
                - "Book the follow-up review before the first week ends"
                - "Note each new symptom with the date it started"
                - "Ring the pharmacist about any side effect lasting more than a week"
            - name: Remission conversation and programme decision
              description: |-
                ## Purpose
                For some people, especially within a few years of diagnosis, substantial weight loss can bring HbA1c below the diabetes range without medicines, which is called remission. Some health services run structured low-calorie programmes for this; finding out whether you qualify and whether it suits your life is a decision worth making deliberately.

                ## Milestones
                1. Your clinician asked whether remission is a realistic aim for you.
                2. The programmes your health service offers and their eligibility found.
                3. The effect on your medicines during the programme understood.
                4. A decision made to join, try another route, or not now.

                ## Notes
                Very low-calorie programmes need medicines adjusted under supervision, especially blood pressure and hypo-causing medicines. Do not start one on your own.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pursuing remission, made with your clinician, naming the programme or the reason for not starting."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether remission is realistic for you"
                - "Find the remission programmes your health service offers and who qualifies"
                - "Ask how your medicines would be managed during a programme"
                - "Write down your decision and the reason"
            - name: Swapping sugary drinks and hidden sugars
              description: |-
                ## Purpose
                Sugary soft drinks, fruit juice, smoothies and sweetened coffees can add more sugar in a day than all the food on the plate, and they raise glucose fast. Replacing them one at a time over a month is one of the simplest changes with a visible effect on readings and HbA1c.

                ## Milestones
                1. Every sweetened drink in a normal week counted.
                2. A replacement chosen for each one.
                3. One drink replaced per week for a month.
                4. No regular sugary drinks left in the week by the end.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A normal week with no regular sugar-sweetened drinks, sustained for a month."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Count every sweetened drink you have in one normal week"
                - "Choose a lower-sugar replacement for each drink"
                - "Replace one drink this week and another next week"
                - "Stop buying the sweetened versions for the house"
            - name: Strength sessions twice a week
              description: |-
                ## Purpose
                Muscle is where much of the glucose from a meal goes, and building it improves insulin sensitivity over a couple of months. Two short sessions a week with bands, weights or bodyweight, agreed as safe with your clinician, add a benefit walking alone does not give.

                ## Milestones
                1. Your clinician has confirmed strength work is safe for you.
                2. A routine of five or six exercises chosen and learned.
                3. Two sessions a week kept for eight weeks.
                4. Progress noted in reps or resistance.

                ## Notes
                A local gym induction or a physiotherapist can check your technique. Ask about breath-holding and heavy lifting if you have eye or blood pressure problems.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Sixteen strength sessions completed in eight weeks, with progress in reps or resistance recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask your clinician whether strength exercise needs any limits for you"
                - "Choose five exercises you can do at home or in a gym"
                - "Do a strength session and note reps or resistance @recurring(weekly:wed)"
                - "Book a technique check after four weeks"
            - name: Preparing for a conversation about insulin
              description: |-
                ## Purpose
                Being offered insulin often feels like failure, but type 2 diabetes changes over time and many people need it eventually. Knowing what starting involves, from pen technique to hypo planning and driving rules, means you can weigh the offer on its merits rather than dread it.

                ## Milestones
                1. Your worries about insulin written down honestly.
                2. What starting insulin would involve explained by a nurse.
                3. The effect on driving, work and hypo planning understood.
                4. A decision made, or a date set to discuss it again.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on starting insulin, or a date to revisit it, made after a conversation with your diabetes nurse."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your three biggest worries about starting insulin"
                - "Ask for an appointment with the diabetes nurse to talk it through"
                - "Ask how insulin would change your hypo plan and driving rules"
                - "Record what you decided and when you will review it"
            - name: Sick day rules plan
              description: |-
                ## Purpose
                Vomiting, diarrhoea, a fever or not eating can send glucose up or down and make some diabetes medicines risky to keep taking for a day or two. A written plan from your team, saying which medicines to pause, how often to test and when to call, means a bad stomach bug does not turn into a hospital admission.

                ## Milestones
                1. Your team asked which of your medicines to pause when you are unwell.
                2. Testing and fluid advice for sick days written down.
                3. The signs that mean calling for urgent help listed.
                4. The plan kept with your medicines and shared with your household.

                ## Notes
                Use your own team's advice. Sick day rules differ between medicines and this card organises their guidance; it does not replace it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written sick day plan from your diabetes team is kept with your medicines and your household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist which of your medicines should be paused when you are ill"
                - "Write the pause list, testing advice and when to call on one card"
                - "Keep the card with your medicines"
                - "Show the card to the people you live with"
            - name: Follow-up after a raised HbA1c result
              description: |-
                ## Purpose
                A result well above target can mean a medicine is not working, doses are being missed, another illness or medicine is interfering, or simply a hard few months. Treating it as a prompt for a planned conversation within a month, with your own ideas about the cause, gets a better plan than waiting for the annual review.

                ## Milestones
                1. The result compared with your target and previous figures.
                2. Your own view of what changed in the last three months written down.
                3. An appointment held within a month of the result.
                4. A revised plan agreed, with the date of the next test.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An appointment held within a month of a raised result, with a revised plan and next test date written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Compare the new result with your target and last two results"
                - "Write a few lines on what changed in the last three months"
                - "Book an appointment to discuss the result within a month"
                - "Write down the revised plan and the next test date"
            - name: Travelling with diabetes medicines and supplies
              description: |-
                ## Purpose
                Long journeys, time zones, unfamiliar food and hot weather all affect glucose and medicine timing. Packing double supplies split across two bags, carrying a clinician's letter for needles or sensors, and planning doses across time zones makes a trip something you enjoy rather than manage.

                ## Milestones
                1. Twice the supplies you need packed, split between two bags.
                2. A letter from your practice for needles, sensors or liquids at security.
                3. Medicine timing across time zones agreed with your pharmacist.
                4. Hypo sugar and snacks in hand luggage.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip completed with double supplies, a travel letter and a time zone dosing plan agreed in advance."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the practice for a travel letter listing your diabetes supplies"
                - "Ask your pharmacist how to time doses across time zones"
                - "Pack double supplies split between two bags"
                - "Put hypo sugar and snacks in your hand luggage"
            - name: Fasting for religious observance with diabetes
              description: |-
                ## Purpose
                Long daytime fasts, such as during Ramadan, change when and how much you eat for weeks, and some diabetes medicines need their timing or dose changed to stay safe. A review with your clinician a couple of months before, and a clear plan for when to break the fast, lets you observe safely.

                ## Milestones
                1. A pre-fast review booked six to eight weeks before the fast begins.
                2. Medicine timing and any dose changes for the fasting period agreed.
                3. Testing times during the fast and the readings that mean breaking it written down.
                4. Meals for the pre-dawn and evening meals planned.

                ## Notes
                Many faith communities exempt people whose health would be harmed by fasting. Your clinician and faith leader can both help you decide.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A fasting plan agreed with your clinician before the fast, covering medicine timing, testing and when to break the fast."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Book a pre-fast diabetes review two months before the fast begins"
                - "Ask how each of your medicines should be timed during the fast"
                - "Write down the readings or symptoms that mean breaking the fast"
                - "Plan balanced pre-dawn and evening meals for the first week"
            - name: Diabetes plan before a procedure or scan
              description: |-
                ## Purpose
                Some scans, bowel preparations and operations need diabetes medicines paused or adjusted, and fasting beforehand can cause lows. Asking the right questions when the appointment letter arrives, not on the morning itself, avoids a cancelled procedure or an unsafe glucose level.

                ## Milestones
                1. The procedure team told you have diabetes and which medicines you take.
                2. Written instructions for your diabetes medicines before and after.
                3. A plan for testing and treating lows during any fast.
                4. Medicines restarted as instructed afterwards.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A procedure completed with written diabetes medicine instructions obtained in advance and followed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ring the procedure team as soon as the letter arrives to mention your diabetes"
                - "Ask for written instructions on each diabetes medicine before and after"
                - "Plan how you will test and treat a low while fasting"
                - "Note when each medicine should restart"
            - name: Festive season and eating out plan
              description: |-
                ## Purpose
                Holidays, weddings and work dinners bring larger meals, more drinks and broken routines, and many people see their next HbA1c rise after them. Deciding in advance a few personal rules for buffets, desserts and drinks lets you join in without undoing a season of progress.

                ## Milestones
                1. The busiest eating weeks of your year identified.
                2. Three personal rules written for meals out and celebrations.
                3. A walk or activity planned after the largest meals.
                4. A look back at what worked after the season ends.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Three personal rules written before the main celebration season and a short look back recorded afterwards."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Mark the busiest eating weeks of your year in the calendar"
                - "Write three rules for buffets, desserts and drinks"
                - "Plan a walk after each large celebration meal"
                - "Review your rules a month before the main holiday season @recurring(yearly)"
            - name: Prediabetes, a year to bring the numbers back
              description: |-
                ## Purpose
                Prediabetes means HbA1c is raised but below the diabetes range, and for many people steady weight loss and more activity bring it back to normal. A year with a clear starting figure, a prevention programme if your health service offers one and a retest at twelve months gives you the best chance of never needing the rest of this area.

                ## Milestones
                1. Your starting HbA1c, weight and waist recorded.
                2. A place on a diabetes prevention programme taken up, if offered.
                3. Monthly weight and waist figures kept for a year.
                4. A repeat HbA1c done at twelve months and compared with the start.

                ## Notes
                Many health services offer a free prevention programme for prediabetes. Ask before paying for a commercial one.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A repeat HbA1c taken twelve months after the first, with a year of monthly weight and waist figures alongside."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write your starting HbA1c, weight and waist on one page"
                - "Ask the practice to refer you to a diabetes prevention programme"
                - "Weigh yourself and measure your waist on the same morning @recurring(monthly:27)"
                - "Book a repeat HbA1c for twelve months after the first"
            - name: Type 2 diabetes in later life, fewer hypos and falls
              description: |-
                ## Purpose
                As people get older, kidneys change, appetites shrink and the risk from a hypo or a fall grows, so a target that suited you at sixty may be too tight at eighty. A review aimed at safety, with fewer tablets and a gentler target if appropriate, often makes daily life easier with no loss of protection.

                ## Milestones
                1. Any dizzy spells, near falls or possible lows in the past year listed.
                2. A review requested to check whether targets and medicines still fit your age and health.
                3. Any medicine reduced or stopped on your clinician's advice recorded.
                4. The new target written in your results log.

                ## Notes
                Never reduce diabetes medicines on your own. Bring the list of dizzy spells and let your clinician decide.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A review held focused on hypo and falls risk, with any change to target or medicines recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List any dizzy spells, falls or shaky episodes in the past year"
                - "Ask your clinician whether your target should be relaxed for your age"
                - "Ask whether any diabetes medicine could be reduced or stopped"
                - "Write the new target and medicine list in your results log"
            - name: Helping a parent manage type 2 diabetes
              description: |-
                ## Purpose
                Adult children often end up holding the medicine list, chasing the eye screening letter and noticing when a parent seems vague or unwell. Agreeing with your parent which parts you will help with, and getting their consent for the practice to speak to you, keeps them in charge while making sure nothing important slips.

                ## Milestones
                1. A conversation held with your parent about what help they want.
                2. Written consent lodged with the practice for you to discuss their care.
                3. Their contact sheet, medicine list and hypo plan copied to you.
                4. A monthly check-in on appointments and supplies running for three months.

                ## Notes
                Respect what your parent wants to keep doing themselves. Ask before attending appointments with them.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Consent lodged with the practice and three monthly check-ins completed with your parent."
                cadence: rolling
              tasks:
                - "Ask your parent which parts of their diabetes care they would like help with"
                - "Ask the practice how your parent can give consent for you to be told about their care"
                - "Copy their medicine list, contact sheet and hypo plan"
                - "Go through upcoming appointments and supplies with your parent @recurring(monthly:24)"
            - name: After gestational diabetes, yearly screening
              description: |-
                ## Purpose
                Having had diabetes in pregnancy raises the chance of type 2 diabetes later, sometimes many years later, and most guidance recommends a yearly HbA1c from then on. A fixed yearly test, and planning before any future pregnancy, means a rise is caught at the prediabetes stage rather than discovered late.

                ## Milestones
                1. The postnatal glucose test result filed.
                2. Your practice record checked for a gestational diabetes code so recalls happen.
                3. A yearly HbA1c booked in a fixed month.
                4. A note made to request early testing in any future pregnancy.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A yearly HbA1c done for two years after a pregnancy with gestational diabetes, with results filed."
                cadence: cyclic
              tasks:
                - "Find the result of your postnatal glucose test"
                - "Ask the practice to confirm your record shows past gestational diabetes"
                - "Book your yearly HbA1c in the same month each year @recurring(yearly)"
            - name: Planning a pregnancy with type 2 diabetes
              description: |-
                ## Purpose
                Raised glucose in the first weeks of pregnancy carries extra risks, and some diabetes and blood pressure medicines should be changed before conception. Planning with your diabetes team several months ahead, with a pre-pregnancy HbA1c and a medicines review, gives the best start.

                ## Milestones
                1. Your diabetes team told you are planning a pregnancy.
                2. A medicines review held and any changes made before trying.
                3. Pre-pregnancy HbA1c target agreed and tested.
                4. Supplements and early antenatal referral arranged as your team advises.

                ## Notes
                Keep using contraception until your team says your medicines and HbA1c are ready. The supplement dose advised for diabetes is often higher than the standard one, so ask.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-pregnancy review completed with medicines changed as advised and a pre-pregnancy HbA1c recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Book a pre-pregnancy appointment with your diabetes team"
                - "Ask which of your medicines need changing before you try to conceive"
                - "Agree a pre-pregnancy HbA1c target and book the test"
                - "Ask what supplement and dose your team recommends"
            - name: Trial of a continuous glucose sensor
              description: |-
                ## Purpose
                A sensor worn for two weeks shows glucose day and night, including after meals, during sleep and through exercise, which finger pricks cannot. For people on insulin or with unexplained HbA1c changes, a short trial agreed with the team can show patterns that change treatment.

                ## Milestones
                1. Your team asked whether a sensor trial would be useful and funded.
                2. A sensor worn for at least ten days with meals and activity noted.
                3. The summary report downloaded and reviewed with the team.
                4. Two patterns found and one change made in response.

                ## Notes
                Ask the agent to summarise the sensor report into three questions for your clinician before the appointment.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A sensor trial of at least ten days completed, its report reviewed with your team and one change made."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask your team whether a short sensor trial would help and is funded"
                - "Wear the sensor for ten days and note meals and activity"
                - "Ask the agent to summarise the sensor report into three questions"
                - "Review the report with your team and agree one change"
            - name: Two-year trend review of HbA1c and weight
              description: |-
                ## Purpose
                Single results jump around, but two years of HbA1c, weight and blood pressure show whether the overall direction is right and which changes coincided with improvements. Looking at the whole trend once helps you and your clinician decide what to keep, what to drop and where the next effort should go.

                ## Milestones
                1. Two years of HbA1c, weight and blood pressure gathered in one table.
                2. A simple chart drawn of each.
                3. Medicine and lifestyle changes marked on the timeline.
                4. The trend discussed at a review and conclusions written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-year chart of HbA1c, weight and blood pressure with changes marked, discussed at a review."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull two years of results from your results log"
                - "Draw a simple chart of HbA1c and weight over time"
                - "Mark each medicine and lifestyle change on the chart"
                - "Bring the chart to your next review and note the conclusions"
            - name: Written diabetes self-management plan
              description: |-
                ## Purpose
                Experienced self-managers end up holding a lot in their heads: targets, sick day rules, hypo steps, review dates and who to ring. Pulling it into one plan agreed with your team makes it easier to hand over to family, a new clinician or a hospital, and easier to update each year.

                ## Milestones
                1. Targets, medicines, hypo and sick day steps collected in one document.
                2. Review dates and care team contacts added.
                3. The plan agreed with your diabetes nurse or doctor.
                4. Copies kept at home, on your phone and with a family member.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A self-management plan agreed with your diabetes team, stored in three places and updated within the last year."
                cadence: rolling
              tasks:
                - "Collect your target, medicines, hypo card and sick day card in one document"
                - "Ask your diabetes nurse to check the plan at your next review"
                - "Save a copy on your phone and give one to a family member"
                - "Update the plan after the annual diabetes review @recurring(yearly)"
            - name: Peer support and patient voice in diabetes care
              description: |-
                ## Purpose
                After a few years with type 2 diabetes you know things a newly diagnosed person would find invaluable, and local services often want patient views on how care is run. Joining a peer support group or a patient panel keeps you motivated and improves the service for others.

                ## Milestones
                1. Local or online diabetes peer groups and patient panels found.
                2. One group or panel tried for three sessions.
                3. A decision made to stay, switch or stop.
                4. One piece of experience shared with someone newly diagnosed.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three sessions attended with a diabetes peer group or patient panel and a decision recorded on continuing."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Search for diabetes peer support groups and patient panels near you"
                - "Attend three sessions of the one that fits your week"
                - "Decide whether to continue and note why"
                - "Offer one practical tip to someone newly diagnosed"
---

# Type 2 Diabetes Management

This area is for anyone recently told they have type 2 diabetes or prediabetes, anyone who has lived with it for years and wants the numbers to move, and the family members who help. It begins with the foundations (understanding the diagnosis, a target agreed with your clinician, a hypo plan if your medicines need one and a clear picture of which yearly checks you have had), then the routines that keep tests, feet, eyes and medicines on schedule, the skills around carbohydrates and medicines, the decisions about treatment and remission, the events that need planning, the situations that change the picture, and finally the work of an experienced self-manager.

What repeats is an HbA1c test every few months, the annual review with its eye screening and foot check, a daily foot look and medicine routine, a weekly meal plan and glucose review, and a monthly look at your numbers. The Purchase decision, Metrics log, Course, Habit tracker and Weekly meal plan templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
