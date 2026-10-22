---
id: physical-health.kidney-liver-health-monitoring
name: Kidney & Liver Health Monitoring
description: "Abnormal kidney and liver results followed up properly, trends you can read, medicines checked for safety, and chronic kidney disease or fatty liver monitored on a schedule you own."
category: personal
version: 1.0.0
tags: [physical-health, kidney-liver-health-monitoring, everyone, retiree, chronic-kidney-disease, fatty-liver, egfr, liver-function]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - weekly-meal-plan
    - habit-tracker
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Kidney & Liver Health Monitoring
          description: "Monitoring kidney or liver function after an abnormal result, managing chronic kidney disease or fatty liver, and following dietary and medication advice."
          projects:
            - name: Questions for your doctor after an abnormal result
              description: |-
                ## Purpose
                An unexpected eGFR, ALT or GGT flagged on a routine blood test often arrives as a one-line message from the surgery with no explanation. Going into the follow-up conversation with the actual numbers, the reference ranges and five written questions turns a vague worry into a clear next step: repeat, investigate or simply watch.

                ## Milestones
                1. The full result, with units and reference ranges, obtained from the patient portal or the surgery.
                2. Previous results for the same tests found, so the doctor can see whether this is new.
                3. Five questions written, including what may have caused it and when to retest.
                4. The doctor's plan recorded in one paragraph: repeat test, further tests, referral or no action.

                ## Notes
                A single abnormal value is common and often settles on repeat testing. Ask before assuming anything, and do not stop prescribed medicines on your own because of one result.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written follow-up plan from your doctor for the abnormal result, with the date of any repeat test, is saved with your results."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download the abnormal result with its reference range from the patient portal"
                - "Find any earlier results for the same tests"
                - "Write five questions to ask at the follow-up appointment"
                - "Book the follow-up appointment or phone review with your doctor"
                - "Record the agreed plan and the date of the repeat test"
            - name: Repeat kidney blood test to confirm the result
              description: |-
                ## Purpose
                Kidney disease is only diagnosed when reduced function or signs of kidney damage persist for at least three months, because a single creatinine can be pushed up by dehydration, a large meat meal, hard exercise or a short illness. Booking a properly prepared repeat test turns one worrying number into a reliable picture.

                ## Milestones
                1. The interval for the repeat test agreed with your doctor.
                2. Preparation for the test known in advance: what to avoid eating or doing beforehand.
                3. The repeat blood test done and the result received.
                4. Both results set side by side, with your doctor's view on whether the change is lasting.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A repeat kidney blood test, taken after the interval your doctor set, has been compared with the first result and the conclusion recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor when the repeat kidney blood test should be done"
                - "Ask whether to avoid meat, exercise or certain medicines beforehand"
                - "Book the repeat blood test for the agreed date"
                - "Write both results side by side with the doctor's conclusion"
            - name: Urine albumin test alongside your eGFR
              description: |-
                ## Purpose
                Blood tests show how well the kidneys filter, but a urine albumin to creatinine ratio shows whether they are leaking protein, which is often the earlier sign of damage and changes how closely you are followed. Many people with a low eGFR have never had the urine test, so asking for it completes the picture.

                ## Milestones
                1. Your doctor asked whether a urine albumin to creatinine ratio test has been done.
                2. An early morning urine sample given using the container and instructions provided.
                3. The result and its category recorded next to your eGFR.
                4. Any repeat sample your doctor wants booked.

                ## Notes
                A urine infection, a period or heavy exercise the day before can affect the result, so mention any of these when you hand in the sample.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A urine albumin to creatinine ratio result is recorded next to your eGFR, with any repeat sample your doctor asked for booked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check your record for a urine albumin to creatinine ratio result"
                - "Ask your doctor to request the test if it is missing"
                - "Collect the sample container and read the collection instructions"
                - "Hand in an early morning sample and note the date"
                - "Record the result next to your latest eGFR"
            - name: Liver screen blood tests after raised enzymes
              description: |-
                ## Purpose
                When ALT, AST or GGT come back raised, doctors usually look for a cause with a set of follow-up blood tests, which may cover viral hepatitis, iron levels, autoimmune markers and others depending on your history. Knowing which tests were done, and which came back normal, stops the same questions being asked from scratch at every appointment.

                ## Milestones
                1. The follow-up liver tests your doctor requested listed by name.
                2. An honest account of alcohol, medicines, supplements and recent illness given to your doctor.
                3. All results received and marked normal or abnormal.
                4. A written next step from your doctor: monitor, scan, refer or treat the cause.

                ## Notes
                Raised liver enzymes have many causes, including some common medicines and recent hard exercise. Let your doctor decide what to test; your part is to give a complete history and keep the results.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every liver screen test done, each marked with its result, is saved alongside your doctor's written next step."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every medicine, supplement and remedy you took in the last three months"
                - "Write down your weekly alcohol units honestly before the appointment"
                - "Ask your doctor which follow-up liver tests are being requested and why"
                - "Record each result as it comes back"
                - "Ask for the next step in writing once all results are in"
            - name: Fibrosis risk score for fatty liver
              description: |-
                ## Purpose
                Fatty liver itself is very common, but what matters for the future is whether scarring, called fibrosis, is developing. Many services now calculate a simple score such as FIB-4 from routine blood tests, then use a liver stiffness scan if the score is not reassuring. Asking whether your score has been worked out decides whether you need further tests or simple monitoring.

                ## Milestones
                1. Your doctor asked whether a fibrosis risk score has been calculated from your blood tests.
                2. The score and the category it falls into recorded.
                3. The recommended next step noted: repeat in a few years, stiffness scan or referral.
                4. A date set for the next assessment.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your fibrosis risk score and its category are recorded, with the next assessment date your doctor recommended."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your doctor whether a FIB-4 or similar score has been calculated"
                - "Request any missing blood tests needed for the score"
                - "Record the score, its category and the recommended next step"
                - "Put the next assessment date in your calendar"
            - name: Kidney and liver results trend sheet
              description: |-
                ## Purpose
                Kidney and liver numbers mean most as a line over time: one eGFR of 55 tells you little, but a steady fall of five a year tells you a lot. One sheet holding creatinine, eGFR, urine albumin, ALT, GGT, platelets and any fibrosis score, each with a date, lets you and every clinician see the direction at a glance.

                ## Milestones
                1. A sheet with dated columns for each kidney and liver test you have had.
                2. At least two years of past results copied in from the portal or letters.
                3. Units recorded for every test, since labs differ.
                4. The sheet shared with your doctor once and kept up to date after each test.

                ## Notes
                Start from the **Metrics log** template. Copy numbers exactly as printed, including units, and note when a result came from a different lab.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trend sheet holding at least two years of dated kidney and liver results, with units, has been shared with your doctor."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a trend sheet from the metrics log template"
                - "Add columns for date, test, value, units and lab"
                - "Copy in every kidney and liver result from the last two years"
                - "Ask the agent to chart eGFR and ALT over time from the sheet"
                - "Bring the sheet to your next appointment"
            - name: Urgent warning signs card for kidneys and liver
              description: |-
                ## Purpose
                Some changes need same-day or emergency care rather than waiting for the next test: yellowing skin or eyes, vomiting blood, black stools, new confusion, a swollen abdomen, or passing very little urine. Writing your health service's warning signs on one card, with the number to call, means nobody at home has to look them up during a crisis.

                ## Milestones
                1. Your health service's urgent signs for kidney and liver problems found.
                2. A one-page card written with the signs and who to call for each.
                3. Any personal warning signs your specialist gave you added.
                4. The card kept somewhere visible and shown to the people you live with.

                ## Notes
                Use your own health service's wording. This card organises their advice; it does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card written from your health service's guidance is on display at home and your household knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's urgent signs for kidney and liver problems"
                - "Ask your doctor or specialist for any warning signs specific to you"
                - "Write the signs and phone numbers on one card"
                - "Show the card to everyone you live with"
                - "Check the card is still accurate and on display @recurring(yearly)"
            - name: Medicines to check when kidney function is reduced
              description: |-
                ## Purpose
                Reduced kidney function changes how the body clears many medicines, and some everyday ones, such as anti-inflammatory painkillers, can harm the kidneys further. A list of everything you take, reviewed by a pharmacist against your current eGFR, catches doses that need adjusting and medicines best avoided.

                ## Milestones
                1. A complete list of prescribed, over-the-counter and herbal products you take.
                2. The list reviewed by a pharmacist or doctor with your latest eGFR in front of them.
                3. Any changes they recommend written down with the reason.
                4. Medicines to avoid listed on the back of your trend sheet.

                ## Notes
                Never change or stop a prescribed medicine yourself. Bring the list and let the pharmacist or prescriber decide.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your full medicines list has been reviewed against your latest eGFR by a pharmacist or doctor, with their recommendations recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down every medicine, supplement and remedy you take, with strengths"
                - "Book a medicines review with your pharmacist or practice"
                - "Bring your latest eGFR result to the review"
                - "Record each recommendation and who made it"
                - "Write the medicines to avoid on the back of your trend sheet"
            - name: Sick day plan for kidney-sensitive medicines
              description: |-
                ## Purpose
                During vomiting, diarrhoea or a fever with poor drinking, some common medicines for blood pressure, diabetes and heart failure can strain the kidneys, and many services advise pausing them for a short time. Getting your prescriber to name which of your medicines this applies to, and when to restart, gives you a plan before you are too unwell to think about it.

                ## Milestones
                1. Your prescriber asked which of your medicines are covered by sick day guidance.
                2. A written card naming those medicines, when to pause and when to restart.
                3. The card kept with your medicines and a copy in your wallet or phone.
                4. A note of who to call if you are unwell for more than a day or two.

                ## Notes
                Sick day guidance is personal. Use only the list your own prescriber or pharmacist gives you.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A sick day card listing your own medicines to pause, agreed with your prescriber or pharmacist, is kept with your medicines."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your prescriber or pharmacist which of your medicines have sick day rules"
                - "Write the medicines, pause rules and restart rules on one card"
                - "Put a copy of the card in your wallet or phone"
                - "Confirm the sick day card matches your current medicines @recurring(yearly)"
            - name: Yearly kidney monitoring blood and urine tests
              description: |-
                ## Purpose
                Once kidney function is known to be reduced, the eGFR and urine albumin are usually repeated at least yearly, and more often at later stages or when they are changing. Fixing the schedule your doctor recommends, and booking the tests yourself, stops gaps of two or three years opening up unnoticed.

                ## Milestones
                1. How often each test should be repeated agreed with your doctor for your stage.
                2. The next test dates entered in your calendar.
                3. Each round of results received and added to the trend sheet.
                4. A missed or overdue test chased within a month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Kidney blood and urine tests have been done at the frequency your doctor set, with no gap longer than agreed in the last two years."
                cadence: cyclic
              tasks:
                - "Ask your doctor how often your eGFR and urine albumin should be checked"
                - "Put the next test dates in your calendar"
                - "Book the kidney blood and urine tests @recurring(yearly)"
                - "Chase the surgery if a result has not arrived within two weeks"
            - name: Liver monitoring schedule for fatty liver
              description: |-
                ## Purpose
                Fatty liver with a low fibrosis score is often reassessed every few years, while a higher score means more frequent checks or specialist care. Agreeing the interval and putting it in the calendar keeps fatty liver from becoming a line in your record that nobody reads again.

                ## Milestones
                1. The reassessment interval agreed with your doctor and written on your trend sheet.
                2. The tests included in each reassessment listed: blood tests, score, scan if needed.
                3. The next reassessment booked in the calendar.
                4. Each reassessment's result compared with the last.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your fatty liver reassessment interval is written on your trend sheet and the next reassessment date is in your calendar."
                cadence: cyclic
              tasks:
                - "Ask your doctor how often your fatty liver should be reassessed"
                - "List which tests each reassessment includes"
                - "Enter the next reassessment date in your calendar"
                - "Ask at your yearly check whether the liver score is due @recurring(yearly)"
            - name: Monthly kidney and liver results check-in
              description: |-
                ## Purpose
                Results now arrive on patient portals before anyone has explained them, and it is easy either to panic or to ignore them. Fifteen minutes on a fixed day each month to copy new results into the trend sheet, note anything flagged and list questions for the next appointment keeps the record current without daily checking.

                ## Milestones
                1. A fixed monthly slot set in the calendar.
                2. Every new result copied into the trend sheet within a month.
                3. Flagged results listed with a question for your doctor.
                4. Three months of check-ins completed in a row.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The trend sheet has been updated in each of the last three monthly check-ins, with flagged results listed."
                cadence: rolling
              tasks:
                - "Choose a fixed day each month for the results check-in"
                - "Copy new results from the patient portal into the trend sheet @recurring(monthly:9)"
                - "List any flagged result with a question for your doctor"
                - "Contact the surgery about a flagged result nobody has explained"
            - name: Pre-test routine for a reliable eGFR
              description: |-
                ## Purpose
                Creatinine, the basis of most eGFR results, can rise after a large meat meal, a hard gym session, creatine supplements or a day of poor drinking, making kidney function look worse than it is. A short routine before every kidney blood test, checked with your doctor, means the trend reflects your kidneys and not your weekend.

                ## Milestones
                1. Pre-test advice confirmed with your doctor or the blood test service.
                2. A short written checklist kept with your test appointments.
                3. The checklist followed before the next two kidney blood tests.
                4. Anything unusual on test day noted beside the result.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pre-test checklist agreed with your doctor has been followed before two consecutive kidney blood tests, with test-day notes recorded."
                cadence: rolling
              tasks:
                - "Ask your doctor what to avoid in the day before a kidney blood test"
                - "Write a five-line checklist from the advice"
                - "Set a reminder two days before each booked blood test"
                - "Note anything unusual on test day beside the result"
            - name: Pharmacist check before new medicines or remedies
              description: |-
                ## Purpose
                Painkillers, cold remedies, herbal products and gym supplements are bought without a prescription, yet some are hard on the kidneys or liver. Making a habit of asking the pharmacist, with your condition and latest results named, before buying anything new prevents the most avoidable harm.

                ## Milestones
                1. A short note on your phone stating your condition and latest eGFR or liver result.
                2. The habit of showing that note before buying any new medicine or supplement.
                3. A list of products the pharmacist advised against kept with your medicines.
                4. Expired and unsuitable products cleared from the cupboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A phone note with your condition and latest results exists, and the medicine cupboard holds no products your pharmacist advised against."
                cadence: rolling
              tasks:
                - "Write a phone note with your condition and latest results"
                - "Show the note to the pharmacist before buying anything new"
                - "Add products to avoid to the list kept with your medicines"
                - "Clear expired and unsuitable medicines from the cupboard @recurring(yearly)"
            - name: Monitoring bloods for medicines that affect the liver or kidneys
              description: |-
                ## Purpose
                Some long-term medicines, including certain drugs for arthritis, epilepsy, heart conditions and psoriasis, come with regular kidney or liver blood tests as a condition of safe prescribing. Knowing which of your medicines need them and how often, and booking them before the prescription is due, avoids repeat prescriptions being held back.

                ## Milestones
                1. Each of your medicines that needs kidney or liver monitoring identified with your prescriber.
                2. The test and interval for each written beside it.
                3. The next monitoring tests booked ahead of the prescription renewal.
                4. Results checked by the prescriber before the next supply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every medicine that needs kidney or liver monitoring is listed with its interval, and no prescription has been delayed by a missed test in the last year."
                cadence: cyclic
              tasks:
                - "Ask your prescriber which of your medicines need monitoring blood tests"
                - "Write the test and interval beside each medicine"
                - "Book the monitoring blood test before the prescription runs out @recurring(quarterly)"
                - "Confirm the prescriber has seen the result before the next supply"
            - name: Weekly kidney-friendly meal plan
              description: |-
                ## Purpose
                Dietitians may advise people with chronic kidney disease to limit salt and sometimes potassium, phosphate or protein, but the advice differs from person to person and stage to stage. Planning the week's meals from your own dietitian's guidance, rather than generic lists online, turns the advice into food you actually eat.

                ## Milestones
                1. Your personal dietary advice written as a short list of limits and swaps.
                2. A weekly plan of main meals drawn up against that list.
                3. A shopping list built from the plan.
                4. Four weeks of plans completed and reviewed with your dietitian or doctor.

                ## Notes
                Start from the **Weekly meal plan** template. Do not restrict potassium or protein unless you have been told to; for many people with early kidney disease it is not needed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weekly meal plans written against your dietitian's advice have been reviewed at your next appointment."
                cadence: rolling
              tasks:
                - "Write your dietitian's advice as a list of limits and swaps"
                - "Plan next week's main meals against the list @recurring(weekly:sun)"
                - "Build the shopping list from the plan"
                - "Bring four weeks of plans to your next dietitian appointment"
            - name: Weekly activity target for fatty liver
              description: |-
                ## Purpose
                Regular activity reduces liver fat even before weight changes, and much guidance suggests building toward around 150 minutes of moderate activity a week. Agreeing a starting target with your doctor and logging the week's minutes keeps the habit going once the first enthusiasm fades.

                ## Milestones
                1. A weekly activity target agreed with your doctor, suited to your current fitness.
                2. A simple weekly log of activity minutes set up.
                3. Eight weeks logged, with the target met in at least six.
                4. The target reviewed and raised if your doctor agrees.

                ## Notes
                Start from the **Habit tracker** template. Brisk walking counts; it does not need to be the gym.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight weeks of activity minutes are logged, with your agreed weekly target met in at least six of them."
                cadence: rolling
              tasks:
                - "Agree a starting weekly activity target with your doctor"
                - "Set up a weekly activity log from the habit tracker template"
                - "Add up and log the week's activity minutes @recurring(weekly:sat)"
                - "Review the target with your doctor after eight weeks"
            - name: Morning weight and swelling log when advised
              description: |-
                ## Purpose
                People with later-stage kidney disease, or liver disease with fluid build-up, are sometimes asked to weigh daily, because a quick gain of a kilo or two can mean fluid is collecting before swelling is obvious. A morning log, kept only if your team asks for it, gives them the early warning they need.

                ## Milestones
                1. Your team's instructions on daily weighing, and the gain that should prompt a call, written down.
                2. Weight recorded each morning on the same scale, after the toilet and before breakfast.
                3. Ankle or abdominal swelling noted on the same line.
                4. Any gain past the agreed amount reported the same day.

                ## Notes
                Only keep this log if your kidney or liver team asks you to. If they have not, ask whether it would help.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily weight and swelling log has been kept for a month, with any gain beyond your team's limit reported the same day."
                cadence: rolling
              tasks:
                - "Ask your kidney or liver team whether you should weigh daily"
                - "Write down the weight gain that should prompt a call"
                - "Weigh after the toilet and before breakfast and record it @recurring(daily)"
                - "Call the team the same day if the gain passes the agreed limit"
            - name: Annual kidney review preparation
              description: |-
                ## Purpose
                The yearly kidney review is short, and the useful parts are easily lost to small talk: whether function is stable, what the urine albumin shows, and whether any medicine should change. Arriving with the year's trend, your current medicines and three written questions makes the fifteen minutes count.

                ## Milestones
                1. The year's kidney results printed or on your phone as a trend.
                2. Your current medicines list updated.
                3. Three questions written in order of importance.
                4. The doctor's answers and the next review date recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from your latest annual kidney review, covering trend, medicines and your three questions, are saved with the next review date."
                cadence: cyclic
              tasks:
                - "Print the year's kidney results as a simple trend"
                - "Update your medicines list before the review"
                - "Write three questions for the annual kidney review @recurring(yearly)"
                - "Record the answers and the next review date"
            - name: Blood pressure target for kidney protection
              description: |-
                ## Purpose
                Blood pressure is one of the strongest levers on how fast kidney function declines, and kidney teams sometimes set a lower target than usual, especially when there is protein in the urine. Agreeing your kidney-specific target and sending home readings to the team that set it links two conditions that are often managed in separate places.

                ## Milestones
                1. Your kidney team or doctor asked for a blood pressure target specific to your kidneys.
                2. The target written on your trend sheet.
                3. Home readings shared with the kidney team at the interval they ask for.
                4. Any treatment change recorded with its date.

                ## Notes
                Use the monitor and reading routine you already have; this project is about the target and who sees the numbers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A kidney-specific blood pressure target is written on your trend sheet, and home readings have been shared with the kidney team in the last quarter."
                cadence: rolling
              tasks:
                - "Ask your doctor what blood pressure target applies with your kidney results"
                - "Write the target at the top of your trend sheet"
                - "Send a month of home readings to the kidney team @recurring(quarterly)"
                - "Record any treatment change and the date it started"
            - name: Reading a kidney function blood report
              description: |-
                ## Purpose
                A kidney blood report usually lists creatinine, eGFR, urea, sodium and potassium, each with a range and sometimes a flag. Learning what each one measures, and which ones your doctor watches most closely for you, lets you read a new result calmly and ask the right question about it.

                ## Milestones
                1. What creatinine, eGFR, urea, sodium and potassium each measure written in one line each.
                2. Why eGFR is an estimate, and what can skew it, understood.
                3. Your own latest report annotated line by line.
                4. The two values your doctor most wants you to watch noted.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest kidney blood report is annotated line by line in your own words, with the two values to watch highlighted."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a kidney charity's guide to kidney blood tests"
                - "Write one line on what each value on your report measures"
                - "Annotate your latest kidney report in your own words"
                - "Ask your doctor which two values matter most for you"
            - name: Reading liver function tests
              description: |-
                ## Purpose
                Liver function tests are a panel: ALT and AST reflect irritation of liver cells, ALP and GGT the bile ducts, while bilirubin, albumin and clotting show how well the liver is actually working. Understanding the pattern helps you follow your doctor's reasoning and notice which numbers are moving.

                ## Milestones
                1. Each test on a standard liver panel explained in one line.
                2. The difference between enzyme tests and true function tests understood.
                3. Your own latest panel annotated.
                4. Questions about your pattern taken to your next appointment.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your latest liver blood panel is annotated in your own words, with questions about its pattern ready for your next appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a liver charity's guide to liver blood tests"
                - "Write a one-line explanation for each test on your report"
                - "Annotate your latest liver panel"
                - "Take your questions about the pattern to your next appointment"
            - name: Understanding your kidney disease stage
              description: |-
                ## Purpose
                Chronic kidney disease is staged by two measures, the eGFR category from G1 to G5 and the albumin category from A1 to A3, and together they set how often you are tested and when a specialist becomes involved. Knowing your own combination turns a vague diagnosis into a specific one you can follow.

                ## Milestones
                1. Your G and A categories confirmed with your doctor.
                2. What your combination means for monitoring frequency understood.
                3. The thresholds that would usually prompt a referral noted.
                4. Your stage written at the top of the trend sheet with the date it was set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your G and A categories, confirmed by your doctor, are written on your trend sheet with the date and the monitoring frequency they imply."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your doctor for your G and A kidney categories"
                - "Read a kidney charity's explanation of the staging grid"
                - "Find your square on the grid and note what it means for monitoring"
                - "Write your stage and its date at the top of the trend sheet"
            - name: How fatty liver develops and what reverses it
              description: |-
                ## Purpose
                Liver fat build-up, now often called MASLD, ranges from simple fat to inflammation and scarring, and the early stages can improve substantially with weight loss and activity. Understanding where you sit on that scale, and what evidence says changes it, makes the lifestyle advice feel worth following.

                ## Milestones
                1. The stages from fat build-up to scarring and cirrhosis understood in plain terms.
                2. Where your own results place you confirmed with your doctor.
                3. The factors linked to progression, such as diabetes and weight, listed for your situation.
                4. Two changes you will make written down and agreed with your doctor.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your fatty liver stage and the two changes agreed with your doctor is saved with your results."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a liver charity's guide to fatty liver stages"
                - "Ask your doctor where your results place you"
                - "List the progression risk factors that apply to you"
                - "Write a one-page summary with two agreed changes"
            - name: Potassium and phosphate foods your team flags
              description: |-
                ## Purpose
                If blood tests show potassium or phosphate running high, your kidney team may ask you to cut back on certain foods, and the lists can be surprising: some fruit, potatoes, chocolate, processed meats and cola. Learning which foods matter for your own results, from a renal dietitian, avoids both ignoring the advice and cutting out food you do not need to.

                ## Milestones
                1. Whether you need to limit potassium or phosphate confirmed by your kidney team.
                2. A personal list of foods to limit and lower alternatives from a renal dietitian.
                3. Cooking methods that lower potassium, such as boiling, practised if advised.
                4. The next potassium and phosphate results compared with the previous ones.

                ## Notes
                Only follow these limits if your own team has advised them. Restricting without need can make a diet poorer.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal list of foods to limit and alternatives, from a renal dietitian, is in use and the next results have been compared with the last."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your kidney team whether your potassium or phosphate needs attention"
                - "Request a personal food list from a renal dietitian"
                - "Practise one lower-potassium cooking method if advised"
                - "Compare the next potassium and phosphate results with the last"
            - name: Herbal remedies and supplements safety check
              description: |-
                ## Purpose
                Herbal and bodybuilding supplements are a recognised cause of liver injury, and some products, including high-dose vitamins and creatine, can confuse kidney results or strain the kidneys. Checking every product you take with a pharmacist, and stopping only what they advise, removes a cause that is easy to miss.

                ## Milestones
                1. Every supplement, herbal product and powder you take listed with its brand and the dose printed on it.
                2. The list reviewed by a pharmacist or your doctor.
                3. Products they advise stopping set aside and the change noted on your trend sheet.
                4. The next liver or kidney result checked for any change.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every supplement you take has been reviewed by a pharmacist or doctor, with their advice and any change noted on your trend sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Photograph the label of every supplement and herbal product in the house"
                - "List each product with its brand and the dose printed on the label"
                - "Take the list to your pharmacist or doctor for review"
                - "Note any product you stop, and the date, on your trend sheet"
            - name: Why muscle mass skews creatinine
              description: |-
                ## Purpose
                Standard eGFR is calculated from creatinine, which comes from muscle, so very muscular people can look as if their kidneys are worse than they are, and frail or older people with little muscle can look better. Knowing this, and when a cystatin C test can give a second estimate, helps you ask a sensible question when a result does not fit.

                ## Milestones
                1. How creatinine relates to muscle mass understood.
                2. Whether your build might skew your eGFR discussed with your doctor.
                3. Whether a cystatin C test is available and useful for you established.
                4. Any second estimate recorded next to your usual eGFR.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your doctor's view on whether your eGFR is skewed by muscle mass, and on cystatin C testing, is recorded on your trend sheet."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read how creatinine is produced and why muscle affects it"
                - "Ask your doctor whether your build could skew your eGFR"
                - "Ask whether a cystatin C test would help in your case"
                - "Record any second estimate beside your usual eGFR"
            - name: Gradual weight loss plan for fatty liver
              description: |-
                ## Purpose
                Losing around 7 to 10 percent of body weight is linked in studies with large falls in liver fat and, in some people, less scarring, while crash diets can briefly worsen liver inflammation. A steady plan agreed with your doctor, with monthly weigh-ins and a liver blood test at about six months, aims for change that lasts.

                ## Milestones
                1. A weight goal and rate of loss agreed with your doctor.
                2. One eating change and one activity change started.
                3. Weight recorded monthly on the same scale.
                4. Liver blood tests repeated after about six months and compared with the starting results.

                ## Notes
                Medically supported weight programmes and medicines are a wider subject; this project keeps the liver results at the centre.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A weight goal agreed with your doctor, six monthly weigh-ins and a repeat liver blood test compared with the starting result are all recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Agree a weight goal and a safe rate of loss with your doctor"
                - "Choose one eating change and one activity change to start this week"
                - "Weigh on the same scale and record it @recurring(monthly:5)"
                - "Book a repeat liver blood test for six months after starting"
            - name: Sugary drinks swap for liver fat
              description: |-
                ## Purpose
                Drinks sweetened with sugar or fructose syrup are a concentrated source of the sugars the liver turns into fat, and they are one of the simplest things to change. Counting what you drink for a week, then swapping one drink at a time, cuts that input without a full diet overhaul.

                ## Milestones
                1. One week of sugary drinks counted, including juices and smoothies.
                2. A replacement chosen for each regular drink.
                3. Sugary drinks reduced to a chosen number per week.
                4. The change held for eight weeks.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Eight weeks of weekly drink counts show sugary drinks held at or below your chosen limit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Count every sugary drink, juice and smoothie for one week"
                - "Choose a replacement for each drink you have regularly"
                - "Swap one drink at a time, starting with the most frequent"
                - "Write the week's sugary drink count in your log @recurring(weekly:wed)"
            - name: Pain relief plan that protects your kidneys
              description: |-
                ## Purpose
                Anti-inflammatory painkillers such as ibuprofen and naproxen are common causes of avoidable kidney harm, especially with reduced function or alongside some blood pressure medicines, while people with liver disease may be given limits on other painkillers. A pain plan agreed in advance for headaches, back pain and dental pain stops you reaching for the wrong box on a bad day.

                ## Milestones
                1. Your doctor or pharmacist asked which painkillers suit your kidneys and liver.
                2. A written plan for everyday pain with the products and limits they gave you.
                3. Unsuitable painkillers removed from the home and the car.
                4. The plan shared with whoever buys medicines for the household.

                ## Notes
                Gels and combination cold remedies can contain anti-inflammatories too. Check labels or ask the pharmacist.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written pain relief plan, agreed with your doctor or pharmacist, is kept with your medicines and unsuitable painkillers are out of the house."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist which painkillers suit your kidney and liver results"
                - "Write the agreed pain plan on one card"
                - "Remove unsuitable painkillers from the home, car and bags"
                - "Show the plan to whoever buys medicines for the household"
            - name: Renal dietitian referral and eating plan
              description: |-
                ## Purpose
                Generic kidney diet advice online is often written for people on dialysis and can be far stricter than you need. Asking for a referral to a renal dietitian, and going with a three-day food diary, gives you advice matched to your stage and your results.

                ## Milestones
                1. Referral to a renal dietitian requested from your doctor or kidney team.
                2. A three-day food diary completed before the first appointment.
                3. A written plan from the dietitian with your personal limits.
                4. A follow-up date agreed to check how the plan is working.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written eating plan from a renal dietitian, based on your three-day food diary, is saved with a follow-up date."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask your doctor or kidney team for a renal dietitian referral"
                - "Keep a three-day food diary including one weekend day"
                - "Take the diary and your latest results to the appointment"
                - "Book the dietitian follow-up before leaving"
            - name: Asking about kidney-protecting medicines
              description: |-
                ## Purpose
                Several classes of medicine, including some blood pressure tablets and newer diabetes and heart drugs, are now used specifically to slow kidney decline, especially when there is protein in the urine. Asking whether any suit you, with your results and other medicines in front of the doctor, makes sure the option has at least been considered.

                ## Milestones
                1. Your doctor asked whether a kidney-protecting medicine is appropriate given your results.
                2. The benefits, drawbacks and monitoring needs of any option discussed.
                3. A decision recorded: start, wait or not suitable, with the reason.
                4. Any follow-up blood test after starting booked.

                ## Notes
                This is a conversation to have with your prescriber, not a decision to make from reading. Some of these medicines need a blood test a few weeks after starting.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision with your doctor on kidney-protecting medicines, with the reason and any follow-up test date, is saved on your trend sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your latest eGFR, urine albumin and current medicines"
                - "Ask your doctor whether a kidney-protecting medicine suits you"
                - "Record the decision and the reason given"
                - "Book any blood test needed after starting a new medicine"
            - name: Kidney clinic referral or shared care decision
              description: |-
                ## Purpose
                Most people with chronic kidney disease are looked after by their family doctor, with referral to a kidney specialist kept for a low or falling eGFR, a lot of protein in the urine, or an unclear cause. Knowing the usual referral thresholds, and asking where you stand, helps you press for a referral if needed or relax if not.

                ## Milestones
                1. The usual referral criteria in your health system found.
                2. Your results compared with those criteria.
                3. Your doctor's view on referral, and the reason, recorded.
                4. The result or trend that would change the decision written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor's decision on specialist referral, with the reason and the result that would change it, is recorded on your trend sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the published kidney referral criteria your health service uses"
                - "Compare your latest results and trend against them"
                - "Ask your doctor whether a referral is needed now"
                - "Write down which result would trigger a referral later"
            - name: Kidney or liver ultrasound appointment
              description: |-
                ## Purpose
                An ultrasound is often the next step after an abnormal kidney or liver blood test, to look at size, shape, fat in the liver or blockages. Knowing the preparation, usually fasting for a liver scan and a full bladder for some kidney scans, avoids a wasted appointment and months back on the list.

                ## Milestones
                1. The preparation instructions for your scan read and noted.
                2. Transport and time off arranged for the appointment.
                3. The scan attended with your preparation followed.
                4. The report obtained and discussed with the requesting doctor.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The ultrasound has been done with the preparation followed, and its report has been discussed with the doctor who requested it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the preparation instructions in the appointment letter"
                - "Set a reminder for fasting or drinking water before the scan"
                - "Arrange transport and time off for the appointment"
                - "Ask the requesting doctor for the report and what it means"
            - name: Liver stiffness scan appointment
              description: |-
                ## Purpose
                A liver stiffness scan, sometimes known by the brand name FibroScan, measures how stiff the liver is as a guide to scarring, in about fifteen minutes and without needles. It usually follows an uncertain fibrosis score, and the reading decides whether you are monitored locally or referred to a liver clinic.

                ## Milestones
                1. The scan referral confirmed and an appointment date received.
                2. Fasting instructions, usually a few hours, followed on the day.
                3. The stiffness reading and its category recorded.
                4. The next step agreed: routine monitoring, repeat scan or referral.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your liver stiffness reading and its category are on your trend sheet, together with the agreed next step."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask whether a liver stiffness scan has been requested for you"
                - "Note the fasting time given in the appointment letter"
                - "Write the stiffness reading and category on your trend sheet"
                - "Agree the next step with your doctor after the result"
            - name: First kidney clinic appointment
              description: |-
                ## Purpose
                First appointments with a nephrologist may be months away and short when they come, so preparation decides how much you get from them. Bringing your trend sheet, medicines list, blood pressure readings and written questions means the specialist starts from your history, not from scratch.

                ## Milestones
                1. Two years of kidney results, medicines and blood pressure readings gathered.
                2. Written questions about cause, outlook and monitoring prepared.
                3. Someone invited to come along or listen in to take notes.
                4. The specialist's plan, tests ordered and next appointment written down.

                ## Notes
                Start from the **Meeting notes** template.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from the first kidney clinic appointment, covering the plan, tests ordered and next date, are saved with your results."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Gather two years of kidney results and your medicines list"
                - "Write your questions about cause, outlook and monitoring"
                - "Ask someone to come with you to take notes"
                - "Write up the specialist's plan the same day"
            - name: First liver clinic appointment
              description: |-
                ## Purpose
                Referral to a hepatologist usually means a raised fibrosis score, an unexplained result or a scan finding that needs a specialist view. Arriving with your results, scans, alcohol history and medicines list lets the clinic move straight to decisions instead of repeating the tests your doctor already did.

                ## Milestones
                1. Copies of your liver blood tests, scores and scan reports gathered.
                2. An honest alcohol and medicines history written down.
                3. Questions about stage, outlook and treatment prepared.
                4. The clinic's plan and follow-up interval recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Notes from the first liver clinic appointment, with the plan and follow-up interval, are saved alongside your liver results."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Request copies of your scan reports from the surgery"
                - "Write your alcohol and medicines history on one page"
                - "List your questions about stage, outlook and treatment"
                - "Record the clinic's plan and the follow-up interval"
            - name: Kidney check before a scan with contrast dye
              description: |-
                ## Purpose
                CT scans and some other imaging use contrast dye, which can strain kidneys already working below normal. Telling the imaging team about your kidney condition when the scan is booked means they can check your latest eGFR and plan fluids or timing if needed.

                ## Milestones
                1. Whether your scan uses contrast dye confirmed.
                2. Your kidney condition and latest eGFR given to the imaging department.
                3. Any instruction about medicines or drinking before and after the scan written down.
                4. A follow-up kidney blood test booked if requested.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The imaging team was told about your kidney condition before a contrast scan, and any follow-up blood test they requested has been done."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask whether your upcoming scan uses contrast dye"
                - "Tell the imaging department about your kidney condition and latest eGFR"
                - "Write down any medicine or fluid instructions for scan day"
                - "Book the follow-up kidney blood test if they ask for one"
            - name: Travelling with a kidney or liver condition
              description: |-
                ## Purpose
                Travel brings heat, unfamiliar food, stomach bugs and pharmacies that sell anti-inflammatories freely, all of which matter more with reduced kidney or liver function. Packing your sick day card, a results summary and enough medicine, and checking that insurance covers the condition, keeps a holiday problem from becoming a hospital one.

                ## Milestones
                1. Travel insurance confirmed to cover your declared condition.
                2. A one-page results summary and your sick day card packed.
                3. Enough medicine for the trip plus spare days packed in hand luggage.
                4. The names of unsuitable painkillers noted in the local language if needed.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before departure, insurance covering your declared condition is confirmed and a results summary, sick day card and spare medicine are packed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Declare your kidney or liver condition to the travel insurer"
                - "Print a one-page results summary to carry"
                - "Pack medicine for the trip plus spare days in hand luggage"
                - "Look up unsuitable painkiller names in the local language"
            - name: Kidney function changes after seventy
              description: |-
                ## Purpose
                Age brings a gradual fall in kidney function, and many people over seventy have an eGFR between 45 and 60 without the protein leak or rapid decline that signals progressive disease. Understanding what your result means at your age, and what matters more, such as medicines and drinking enough, avoids both undue worry and missed problems.

                ## Milestones
                1. Your doctor asked how your eGFR compares with what is expected at your age.
                2. Whether there is protein in the urine or a fast decline confirmed.
                3. Medicines reviewed with your age and kidney function in mind.
                4. A sensible testing frequency agreed for the years ahead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your doctor's view on your eGFR for your age, an agreed testing frequency and a medicines review are recorded on your trend sheet."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor how your eGFR compares with others your age"
                - "Ask whether your rate of decline is faster than expected for your age"
                - "Ask for a medicines review with your kidney function in mind"
                - "Agree how often kidney tests are needed from now on"
            - name: Supporting a parent with chronic kidney disease
              description: |-
                ## Purpose
                Older parents with kidney disease often have several conditions, several prescribers and results nobody joins up, and they may not want to ask questions themselves. Acting as a second pair of eyes, with their permission, on test dates, medicines and the warning signs card shares the load without taking over.

                ## Milestones
                1. Your parent's permission to help, and the help they want, agreed.
                2. Access to their results or appointment letters arranged with their consent.
                3. Their test schedule and warning signs card known to you.
                4. A monthly check that results have been seen and acted on.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "With your parent's consent, you hold their kidney test schedule and warning signs card, and a monthly check of their results has run for three months."
                cadence: rolling
              tasks:
                - "Ask your parent what help they want and what they would rather handle"
                - "Arrange consent for you to see their results or letters"
                - "Copy their kidney test dates into your own calendar"
                - "Check their latest results have been reviewed by the surgery @recurring(monthly:20)"
            - name: Pregnancy planning with chronic kidney disease
              description: |-
                ## Purpose
                Pregnancy places extra demands on the kidneys, and some kidney and blood pressure medicines are unsuitable in pregnancy, so specialists advise planning ahead rather than finding out afterwards. A pre-pregnancy conversation with your kidney team and maternity service sets up medicines, monitoring and the right hospital in advance.

                ## Milestones
                1. A pre-pregnancy appointment with your kidney team requested.
                2. Your current medicines reviewed for pregnancy suitability.
                3. A monitoring plan for pregnancy agreed, including blood pressure and urine checks.
                4. The maternity team aware of your kidney condition from the first appointment.

                ## Notes
                If you find you are pregnant, do not stop any medicine without speaking to your team the same day.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pre-pregnancy plan from your kidney team, covering medicines and monitoring, is written down and shared with the maternity service."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your kidney team for a pre-pregnancy appointment"
                - "Bring a list of your current medicines to the appointment"
                - "Write down the pregnancy monitoring plan agreed"
                - "Share the plan with the maternity team at the first booking visit"
            - name: Fatty liver found by chance on a scan
              description: |-
                ## Purpose
                Many people learn they have fatty liver from a scan done for something else, with a single line in the report and no follow-up. Taking that line to your doctor, asking for liver blood tests and a fibrosis score, and agreeing whether anything else is needed turns an incidental finding into a plan.

                ## Milestones
                1. The report's wording about the liver copied into your records.
                2. Liver blood tests and a fibrosis score requested or confirmed.
                3. Related risks, such as blood sugar and cholesterol, checked or already known.
                4. A monitoring plan or reassurance from your doctor recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor's plan for the incidental fatty liver finding, with blood tests and a fibrosis score done, is recorded on your trend sheet."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Find the line about the liver in the scan report"
                - "Book an appointment to discuss the finding with your doctor"
                - "Ask for liver blood tests and a fibrosis score if not already done"
                - "Record the plan your doctor gives"
            - name: Kidney checks with diabetes or high blood pressure
              description: |-
                ## Purpose
                Diabetes and high blood pressure are the two most common causes of chronic kidney disease, so guidelines recommend a yearly eGFR and urine albumin test for anyone with either. Checking that both tests are part of your annual review, every year, catches early kidney damage when treatment changes help most.

                ## Milestones
                1. Whether your annual diabetes or blood pressure review includes both kidney tests confirmed.
                2. The last three years of results found.
                3. Any missing test requested at the next review.
                4. The kidney results added to your trend sheet each year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Both an eGFR and a urine albumin result appear for each of the last three years, or the missing ones have been requested."
                cadence: cyclic
              tasks:
                - "Check the last three years of annual reviews for both kidney tests"
                - "Request any missing kidney test at the next review"
                - "Confirm both kidney tests are on the annual review request @recurring(yearly)"
                - "Add the kidney results to your trend sheet"
            - name: Coordinating kidney care across several specialists
              description: |-
                ## Purpose
                Later life often means a cardiologist, a diabetes team, a kidney clinic and a family doctor, each adjusting medicines without seeing the others' letters. Keeping one summary of results, medicines and recent changes, and taking it to every appointment, prevents conflicting changes and repeated blood tests.

                ## Milestones
                1. Every clinician involved in your care listed with contact details.
                2. A one-page summary of current medicines, recent changes and latest kidney results.
                3. The summary taken to every appointment for three months.
                4. Conflicting advice raised with your family doctor to resolve.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary of clinicians, medicines and kidney results has been taken to every appointment for three months."
                cadence: rolling
              tasks:
                - "List every clinician involved in your care with contact details"
                - "Write a one-page summary of medicines, changes and kidney results"
                - "Update the summary after each appointment"
                - "Review the summary with your family doctor @recurring(quarterly)"
            - name: Iron overload check when ferritin is high
              description: |-
                ## Purpose
                A raised ferritin is common with fatty liver and inflammation, but sometimes it points to inherited haemochromatosis, which loads the liver with iron and is very treatable once found. Asking whether a transferrin saturation test or genetic test is needed settles the question rather than leaving a flagged ferritin unexplained.

                ## Milestones
                1. Your ferritin history gathered from past results.
                2. Your doctor asked whether transferrin saturation has been measured.
                3. A genetic test for haemochromatosis done if your doctor recommends it.
                4. The conclusion and any treatment or monitoring plan recorded.

                ## Notes
                If haemochromatosis is confirmed, close relatives may be offered testing. Your doctor can advise how to raise it with them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your doctor's conclusion on high ferritin, with transferrin saturation and any genetic test results, is recorded on your trend sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find every ferritin result in your records"
                - "Ask your doctor whether transferrin saturation has been measured"
                - "Ask whether a haemochromatosis gene test is needed"
                - "Record the conclusion and any follow-up plan"
            - name: Six-monthly liver surveillance with cirrhosis
              description: |-
                ## Purpose
                People with cirrhosis are usually offered an ultrasound, sometimes with a blood test, every six months to look for liver cancer early, plus periodic checks for swollen veins called varices. Surveillance only works if it actually happens on time, so owning the schedule yourself protects against a slipped appointment going unnoticed for a year.

                ## Milestones
                1. The surveillance plan, scan interval and any endoscopy schedule confirmed with your liver team.
                2. The dates of the last scan and endoscopy recorded.
                3. The next scan booked within the agreed window.
                4. Each result received and added to the trend sheet.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Surveillance scans for the last year took place within the interval your liver team set, with results on your trend sheet."
                cadence: cyclic
              tasks:
                - "Ask your liver team to confirm your surveillance plan in writing"
                - "Record the dates of your last surveillance scan and endoscopy"
                - "Confirm the next six-monthly scan date is booked @recurring(quarterly)"
                - "Chase the liver team if a scan result has not arrived in a month"
            - name: Kidney replacement options decision
              description: |-
                ## Purpose
                When kidney function falls towards stage 5, teams start discussing options well in advance: haemodialysis, peritoneal dialysis at home, a transplant, or conservative care focused on symptoms. Learning each one, visiting a unit and talking to patients who chose differently lets you make the choice that fits your life rather than the default.

                ## Milestones
                1. An education session on kidney replacement options attended.
                2. Each option compared on time, travel, diet and independence.
                3. A dialysis unit visited or a home dialysis patient spoken to.
                4. A preferred option recorded with your kidney team and family.

                ## Notes
                Conservative care is a recognised choice, particularly for older people with other conditions, and is not giving up. Ask your team about it alongside the other options.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your preferred kidney replacement option, chosen after an education session and a comparison of all options, is recorded with your kidney team."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your kidney team when the options education session runs"
                - "Compare each option on time, travel, diet and independence"
                - "Arrange to visit a dialysis unit or meet a home dialysis patient"
                - "Tell your kidney team and family which option you prefer"
            - name: Five-year kidney function slope review
              description: |-
                ## Purpose
                The rate of change in eGFR over several years says more about outlook than any single number, and a fall of more than about five a year is usually treated as significant. Plotting five years of results and working out the slope with your doctor shows whether your kidneys are stable, slowly declining or need closer attention.

                ## Milestones
                1. Five years of eGFR results plotted on one chart.
                2. The average yearly change calculated.
                3. The slope discussed with your doctor and their interpretation recorded.
                4. The date for next year's review set.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A chart of five years of eGFR, with the yearly change calculated and your doctor's interpretation, is saved with your results."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather five years of eGFR results into one list"
                - "Ask the agent to plot the results and work out the average yearly change"
                - "Discuss the slope and what it means with your doctor"
                - "Repeat the slope review with the latest results @recurring(yearly)"
            - name: Living kidney donor assessment for a relative
              description: |-
                ## Purpose
                Kidneys from living donors usually last longer than those from deceased donors, and many transplants come from relatives and friends. The donor assessment takes several months of tests, so understanding the process, the risks to the donor and the independent support available helps you decide without pressure.

                ## Milestones
                1. Information on living donation read from a transplant centre.
                2. An initial conversation held with the transplant team's living donor coordinator.
                3. The donor's own risks and recovery time understood and written down.
                4. A decision to proceed, pause or decline made freely and recorded.

                ## Notes
                Donor teams include an independent assessor whose role is to make sure nobody feels pressured. It is acceptable to say no at any stage.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A decision on living donation, made after speaking with the living donor coordinator and recording the donor risks, is written down."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read a transplant centre's guide to living kidney donation"
                - "Contact the living donor coordinator for an initial conversation"
                - "Write down the risks and recovery time for the donor"
                - "Record your decision and tell your relative in your own time"
---

# Kidney & Liver Health Monitoring

This area is for anyone handed an abnormal kidney or liver blood result, living with chronic kidney disease or fatty liver, or helping a parent who is. It starts with the foundations (confirming the result, the urine and liver screen tests, a fibrosis score, a trend sheet and medicine safety), then the routines that keep testing on schedule, the skills for reading your own reports, the decisions about diet, painkillers and protective medicines, the scans and clinic visits worth preparing for, the situations that change the picture in later life or pregnancy, and finally specialist work such as cirrhosis surveillance and kidney replacement choices.

What repeats is a monthly results check-in, yearly kidney tests and reviews, quarterly monitoring bloods and readings for the kidney team, and a weekly meal plan and activity log. The Metrics log, Weekly meal plan, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
