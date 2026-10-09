---
id: physical-health.thyroid-condition-management
name: Thyroid Condition Management
description: "Thyroid results logged against a target agreed with your clinician, a steady tablet routine, retests after every dose change, and plans for treatment decisions, pregnancy and later life."
category: personal
version: 1.0.0
tags: [physical-health, thyroid-condition-management, everyone, hypothyroidism, hyperthyroidism, graves-disease, blood-tests, medication]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - habit-tracker
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Thyroid Condition Management
          description: "Tracking thyroid blood tests, dose adjustments and symptoms for people living with an underactive or overactive thyroid, so treatment stays tuned over the years."
          projects:
            - name: Thyroid diagnosis on one page
              description: |-
                ## Purpose
                Many people who have taken thyroid tablets for years could not say whether their underactive thyroid came from Hashimoto's disease, surgery or radioactive iodine, yet the cause decides which tests matter and what to watch for. One page holding the diagnosis, its cause, the date it was made and the key results means every new clinician, pharmacist or locum gets the right picture in a minute.

                ## Milestones
                1. The exact diagnosis and its cause confirmed from a clinic letter or your record.
                2. The date of diagnosis and the first TSH and free T4 results written down.
                3. Any antibody results and treatments so far, such as surgery or radioactive iodine, listed with dates.
                4. Your current medicine and the name of whoever manages your thyroid added.
                5. The page saved on your phone and printed for appointments.

                ## Notes
                If the cause has never been explained to you, that is a fair question for your next appointment rather than something to guess.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary naming the diagnosis, its cause, the diagnosis date, treatments with dates and the current medicine exists in print and on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the clinic letter or record entry that first named your thyroid condition"
                - "Write the diagnosis, its cause and the date at the top of one page"
                - "Add treatments so far with their dates and your current tablets"
                - "Save the page to your phone and print a copy for appointments"
            - name: Thyroid results history back to diagnosis
              description: |-
                ## Purpose
                Thyroid results tend to be scattered across a hospital lab, your family doctor's record and old letters, so nobody sees how TSH and free T4 have moved as doses changed. Gathering every result you can find, back to the original diagnosis, gives the starting data for your log and often answers questions about why a dose is what it is.

                ## Milestones
                1. Results requested or downloaded from the patient portal and any hospital that tested you.
                2. Every TSH, free T4, free T3 and antibody result found, with dates.
                3. The dose you were taking at the time of each result matched where records allow.
                4. Gaps in the history noted, with a request made for the missing years.

                ## Notes
                Many health services let you see test results online; older paper results may need a formal records request, which can take weeks, so start early.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated list of every thyroid result available since diagnosis, with doses matched where known and any missing years requested."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Log in to your patient portal and list every thyroid test it shows"
                - "Ask the practice or hospital for results the portal does not show"
                - "Match each result to the dose you were taking at the time"
                - "Note the gaps and send a records request for the missing years"
            - name: Thyroid results log with reference ranges
              description: |-
                ## Purpose
                A TSH near the top of one lab's range can sit just outside another's, and results reported in different units look like changes when they are not. A single log with the date, each result, the lab's own range and the dose you were on turns a pile of numbers into a trend you and your clinician can read at a glance.

                ## Milestones
                1. A log with columns for date, TSH, free T4, free T3, the lab's reference ranges, dose and notes.
                2. Every result from your history entered, with units checked.
                3. Your agreed target range written at the top.
                4. The log shared with whoever manages your thyroid at least once.

                ## Notes
                Start from the **Metrics log** template. Copy the reference range printed beside each result rather than a range from the internet, because ranges differ between labs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A results log holding every known thyroid result with its lab range, units and dose, shared once with your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Create a results log from the metrics log template"
                - "Add columns for each result, the lab range, units and your dose"
                - "Enter every result from your gathered history"
                - "Copy new thyroid results from the patient portal into the log @recurring(monthly:24)"
            - name: Agreeing your TSH target range
              description: |-
                ## Purpose
                Treatment is adjusted to keep TSH and free T4 within a range, but the right range differs with age, pregnancy plans, heart rhythm, and whether you have had thyroid cancer, and many people have never been told theirs. A written target agreed with your clinician makes every result meaningful and stops dose changes from feeling arbitrary.

                ## Milestones
                1. Your clinician asked for your TSH target range and, if relevant, your free T4 range.
                2. The reason for that target recorded in a sentence.
                3. The target written at the top of your results log and diagnosis page.
                4. A date agreed for revisiting the target, such as the annual review.

                ## Notes
                Targets for people being treated after thyroid cancer, people planning pregnancy and people over about seventy are often different. Ask rather than assume the lab range is your target.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A TSH target range agreed with your clinician is written in your log with the reason for it and a date to revisit it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the question about your target range for the next appointment"
                - "Ask your clinician what TSH range they aim for and why"
                - "Record the target and reason at the top of your results log"
                - "Ask at the annual review whether the target range still fits @recurring(yearly)"
            - name: Thyroid medicine and brand record
              description: |-
                ## Purpose
                Levothyroxine, liothyronine and the antithyroid drugs come in several strengths, forms and manufacturers, and some people notice a difference when the pharmacy switches brand. Recording exactly what you take, down to the strength of each tablet and the maker's name on the box, lets you spot a switch the day it happens and explain it if your results change.

                ## Milestones
                1. The medicine name, strength of each tablet and number taken each day written down.
                2. The manufacturer and form, such as tablet, liquid or capsule, recorded from the pack.
                3. Any days with a different dose, such as alternating doses, written out clearly.
                4. The record kept with your diagnosis page and photographed on your phone.

                ## Notes
                If your dose is made of two strengths, record both. Mix-ups between similar-looking strengths are a common source of unexplained results.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written record of each thyroid medicine with strength, daily pattern, manufacturer and form is stored with your diagnosis page."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Photograph the front and label of each thyroid medicine box you have"
                - "Write the strength, daily pattern, maker and form for each one"
                - "Ask your pharmacist whether they usually supply the same brand"
                - "Check the record against your latest prescription @recurring(quarterly)"
            - name: Symptom baseline before the next blood test
              description: |-
                ## Purpose
                Tiredness, feeling cold or hot, palpitations, weight change, low mood, poor concentration and changes in skin, hair or bowels all feature in thyroid conditions, but memory of how you felt three months ago is unreliable. Scoring a fixed list of symptoms now gives a baseline to compare with after each test or dose change, so appointments can talk about specifics.

                ## Milestones
                1. A list of ten to fifteen symptoms relevant to your condition written down.
                2. Each symptom scored from 0 to 3 for the past fortnight.
                3. The two or three symptoms that affect daily life most marked.
                4. The scored list saved next to your results log with the date.

                ## Notes
                Keep the list the same every time you score it; changing the questions makes comparisons meaningless.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated, scored symptom checklist of ten to fifteen items is saved beside the results log, with the top two or three symptoms marked."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a list of the symptoms you associate with your thyroid condition"
                - "Score each one from 0 to 3 for the past two weeks"
                - "Mark the symptoms that affect work, sleep or family life most"
                - "Save the dated checklist next to your results log"
            - name: Mapping who manages your thyroid care
              description: |-
                ## Purpose
                Thyroid care is often split between a family doctor, an endocrinologist, a hospital lab and a pharmacy, and confusion about who adjusts the dose leads to results sitting unread for weeks. A short map of who does what, with contact routes and how results reach you, means you know exactly whom to chase when something changes.

                ## Milestones
                1. The clinician responsible for dose changes named.
                2. How and when results are reviewed, and how you will hear about them, confirmed.
                3. Contact routes for the practice, the specialist team and the pharmacy listed.
                4. Any shared care arrangement or discharge back to your family doctor noted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written map names who adjusts your thyroid dose, how results reach you and how to contact each team."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the practice who is responsible for changing your thyroid dose"
                - "Find out how you will be told about results and how long it usually takes"
                - "List phone, portal and email routes for each team involved"
                - "Add the map to your diagnosis page"
            - name: Thyroid emergency signs card
              description: |-
                ## Purpose
                Rarely, thyroid conditions and their treatment cause emergencies: a very high temperature with a racing heart and confusion in an overactive thyroid, a sore throat and fever while on antithyroid drugs, sudden loss of vision with thyroid eye disease, or extreme drowsiness and cold in a severely underactive thyroid. Writing your health service's guidance on one card means the people you live with know when to call for help rather than wait.

                ## Milestones
                1. Your health service's or medicine leaflet's urgent warning signs for your condition and treatment found.
                2. A one-page card written with those signs and the number to call.
                3. The card kept with your medicines and shared with your household.
                4. Your clinician asked whether any extra warning signs apply to you.

                ## Notes
                Use your own health service's and leaflet's wording. The card organises their advice; it does not replace it. On antithyroid drugs, the leaflet tells you what to do about a sore throat or fever, so put that instruction on the card word for word.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card listing your health service's urgent thyroid warning signs and the number to call is kept with your medicines and the household knows it exists."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the warning section of your thyroid medicine leaflet"
                - "Look up your health service's urgent signs for your thyroid condition"
                - "Write the signs and the emergency number on one card"
                - "Show the card to everyone you live with"
                - "Check the card is still by the medicines and up to date @recurring(yearly)"
            - name: Medicines and supplements that affect thyroid tablets
              description: |-
                ## Purpose
                Calcium, iron, some indigestion medicines and certain other prescriptions can reduce how much thyroid hormone is absorbed, and high-dose biotin in hair and nail supplements can make a thyroid blood test look wrong. A checked list of everything you take, reviewed with a pharmacist, explains odd results before anyone changes the dose because of them.

                ## Milestones
                1. Every prescription, over-the-counter medicine and supplement you take listed.
                2. A pharmacist asked which items interact with your thyroid medicine or tests.
                3. Spacing or pausing instructions they give written beside each item.
                4. The list shared with whoever manages your thyroid.

                ## Notes
                Starting or stopping an interacting medicine, or a new supplement, is a good reason to ask whether an extra thyroid test is needed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of all medicines and supplements, with a pharmacist's interaction and spacing notes for your thyroid treatment, is filed with your diagnosis page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Gather every medicine and supplement in the house that you take"
                - "Write them all on one list with what each is for"
                - "Ask your pharmacist which ones affect your thyroid tablet or blood tests"
                - "Write the spacing or pausing advice beside each item they flag"
            - name: Daily thyroid tablet routine
              description: |-
                ## Purpose
                Missed or mistimed tablets are one of the commonest reasons thyroid results bounce around, and with a once-daily tablet it is easy to forget whether today's has been taken. Tying the tablet to a fixed point in the day, with a weekly organiser and a tick, makes the dose steady enough that blood tests reflect the dose rather than the week you had.

                ## Milestones
                1. A fixed time for the tablet agreed with your pharmacist's advice on food and coffee.
                2. A weekly pill organiser or tracking method in use.
                3. Four weeks of doses ticked off with no more than one missed.
                4. A plan written for what to do about a missed dose, taken from your leaflet or pharmacist.

                ## Notes
                Start from the **Habit tracker** template. The tablet is easier to remember when it lives next to something you already do every morning, such as the kettle or your phone charger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four consecutive weeks of thyroid doses are ticked off in a tracker with no more than one missed, and a missed-dose plan is written down."
                cadence: rolling
              tasks:
                - "Ask your pharmacist when to take your tablet relative to food and coffee"
                - "Set up a habit tracker for the daily tablet"
                - "Take your thyroid tablet and tick it off @recurring(daily)"
                - "Fill the weekly pill organiser @recurring(weekly:sun)"
            - name: Same conditions for every thyroid blood test
              description: |-
                ## Purpose
                TSH varies through the day, and taking your tablet just before the test, a biotin supplement or a different lab can all nudge results. Agreeing a standard set of test conditions with your clinician, and following it each time, means a change in the numbers is more likely to be a real change.

                ## Milestones
                1. Your clinician's preference on test timing and on taking the tablet before the test recorded.
                2. Any supplement to pause beforehand, and for how long, noted from your pharmacist.
                3. A short pre-test checklist written and kept with your blood test form.
                4. The checklist followed at the next test and the conditions noted in your log.

                ## Notes
                Different clinicians have different preferences about whether to take the tablet before the test. Ask yours and then keep it the same.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written pre-test checklist exists and the last thyroid test in your log records the time of day and whether the tablet was taken beforehand."
                cadence: rolling
              tasks:
                - "Ask whether to take your tablet before or after a thyroid blood test"
                - "Ask your pharmacist whether any supplement should be paused before tests"
                - "Write a three-line pre-test checklist and keep it with the test form"
                - "Book the next test at the same time of day as the last one"
            - name: Retest six to eight weeks after a dose change
              description: |-
                ## Purpose
                After any dose change, brand switch or new interacting medicine, thyroid levels take several weeks to settle, which is why a retest is usually booked about six to eight weeks later. Booking that test on the day the change is made, rather than waiting for a reminder that may never come, keeps adjustments from drifting for months.

                ## Milestones
                1. The date of the change and the new dose written in your log.
                2. The retest interval confirmed with your clinician.
                3. The blood test booked before you leave the appointment or the same day.
                4. The result reviewed with your clinician and the decision recorded.

                ## Notes
                If a retest is not mentioned when your dose changes, ask when it should be. Repeat this project after every change until results settle in your target range.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every dose change in your log has a retest date booked within the interval your clinician set, and a recorded decision after it."
                cadence: rolling
              tasks:
                - "Write today's dose change and new dose in your results log"
                - "Ask your clinician how many weeks to wait before the retest"
                - "Book the retest blood test the same day the dose changes"
                - "Ask for the result and the decision two weeks after the test"
            - name: Annual thyroid review
              description: |-
                ## Purpose
                Once results are stable, most people need a thyroid blood test and a short review about once a year, and this is the visit most often missed because nothing feels urgent. Booking the test ahead of the review and arriving with your symptom scores and questions turns a ten-minute appointment into a real check on whether the treatment still fits.

                ## Milestones
                1. The yearly blood test done two weeks before the review so results are back.
                2. Your symptom checklist scored and your log brought to the appointment.
                3. Dose, target range and any medicine changes confirmed at the review.
                4. The diagnosis page updated with anything that changed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A thyroid review happens each year with blood results available beforehand, and the outcome is recorded on your diagnosis page."
                cadence: cyclic
              tasks:
                - "Ask the practice when your last thyroid review was"
                - "Score the symptom checklist the week before the review"
                - "Book the yearly thyroid blood test two weeks before the review @recurring(yearly)"
                - "Update the one-page diagnosis summary after the review @recurring(yearly)"
            - name: Monthly thyroid symptom check-in
              description: |-
                ## Purpose
                Symptoms often creep back slowly, over months, as a thyroid gland changes or a new brand behaves differently, and a monthly score catches that creep before it becomes a bad winter. Five minutes with the same checklist each month gives you dated evidence to bring to an appointment instead of a vague sense of feeling off.

                ## Milestones
                1. The baseline symptom checklist used unchanged each month.
                2. Three months of scores recorded side by side.
                3. Any symptom that rises by two points or more flagged for your clinician.
                4. Life events that could explain a change, such as illness or poor sleep, noted alongside.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three consecutive monthly symptom scores are recorded on the same checklist, with any rise of two points flagged."
                cadence: rolling
              tasks:
                - "Put the symptom checklist somewhere you can open it in two taps"
                - "Score the month's symptoms on the checklist @recurring(monthly:9)"
                - "Note any illness, stress or sleep change that month beside the scores"
                - "Send rising scores to your clinician with your latest result"
            - name: Thyroid tablet repeat prescription routine
              description: |-
                ## Purpose
                Running out of a thyroid tablet over a holiday weekend means missed doses that show up in the next blood test, and a gap with antithyroid drugs can let symptoms return quickly. A routine that reorders when ten days are left and checks the pack at collection keeps supply continuous and catches a brand or strength change straight away.

                ## Milestones
                1. The number of days a normal supply lasts worked out.
                2. A reorder point of ten days remaining set as a reminder.
                3. Each collected pack checked against your medicine and brand record.
                4. A small reserve agreed with your prescriber if they think it sensible.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No days without thyroid medicine in six months, with each collected pack checked against the brand record."
                cadence: rolling
              tasks:
                - "Count how many days of tablets you have left today"
                - "Set up online or pharmacy repeat ordering if it is available"
                - "Order the repeat prescription when ten days of tablets are left @recurring(monthly:18)"
                - "Check the strength and maker on each collected pack before leaving the pharmacy"
            - name: Monthly weight and resting pulse record
              description: |-
                ## Purpose
                Weight and resting pulse both shift with thyroid levels: a racing pulse and weight loss can mean an overactive thyroid or too high a dose, while slow weight gain can mean the opposite. A monthly reading taken the same way gives your clinician two extra numbers to read alongside the blood test.

                ## Milestones
                1. A method agreed: same scales, same time of morning, pulse taken after five minutes sitting.
                2. Weight and resting pulse added to your results log each month.
                3. Six months of readings available for the next review.
                4. Any sustained change flagged to your clinician with the dates.

                ## Notes
                A pulse that feels irregular, rather than just fast, is worth mentioning promptly because an overactive thyroid can trigger an irregular heart rhythm.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly weight and resting pulse readings, taken the same way, are recorded in the results log."
                cadence: rolling
              tasks:
                - "Learn to count your pulse at the wrist for a full minute"
                - "Add weight and resting pulse columns to your results log"
                - "Record weight and resting pulse on the same morning @recurring(monthly:3)"
            - name: Quarterly thyroid results trend review
              description: |-
                ## Purpose
                Looking at a single result tells you little; looking at the last four with the dose beside each tells you whether things are settling, drifting or bouncing. A quarterly fifteen-minute look at the log, the symptom scores and the pulse record shows when it is time to ask for a review rather than waiting for the annual one.

                ## Milestones
                1. The latest results compared with your target and the previous three.
                2. Symptom scores and weight and pulse readings set beside them.
                3. A one-line verdict written: settled, drifting or needs a conversation.
                4. Any drifting trend raised with your clinician with the log attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each quarter has a written one-line verdict on the results trend, and every drifting verdict has a dated message to your clinician."
                cadence: rolling
              tasks:
                - "Add a verdict column to your results log"
                - "Compare the latest results with the target and the last three @recurring(quarterly)"
                - "Message your clinician with the log when the verdict says drifting"
            - name: Blood count monitoring on antithyroid drugs
              description: |-
                ## Purpose
                Carbimazole, methimazole and propylthiouracil are usually monitored with regular blood tests, especially in the first months, and they carry a rare but serious risk to white blood cells and the liver. A routine that keeps the monitoring tests booked and the warning instructions to hand means the drug can be used safely for the year or more that treatment often lasts.

                ## Milestones
                1. The monitoring schedule your prescriber wants written down, including which tests and how often.
                2. The next two tests booked.
                3. The leaflet's instructions for sore throat, fever, mouth ulcers or yellowing skin copied onto your emergency card.
                4. Each result added to your log with the dose at the time.

                ## Notes
                Follow your leaflet and prescriber on what to do if you develop a sore throat or fever. It is an instruction to act on the same day, not something to wait out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monitoring test your prescriber asked for while on antithyroid drugs is booked and logged, with none missed."
                cadence: rolling
              tasks:
                - "Ask your prescriber which blood tests you need and how often"
                - "Book the next two monitoring tests"
                - "Copy the leaflet's sore throat and fever instructions onto your emergency card"
                - "Confirm the date of your next scheduled blood count @recurring(monthly:12)"
            - name: Understanding TSH, free T4 and free T3
              description: |-
                ## Purpose
                The pituitary gland raises TSH when it senses too little thyroid hormone and lowers it when there is too much, which is why a high TSH usually means an underactive thyroid and a low one an overactive thyroid or too high a dose. Understanding that feedback loop, and why TSH lags weeks behind a dose change, makes your results and your clinician's decisions far easier to follow.

                ## Milestones
                1. The feedback loop between pituitary and thyroid explained in your own words.
                2. The difference between TSH, free T4 and free T3 written in a sentence each.
                3. The reason TSH is retested weeks after a change, not days, understood.
                4. Two questions about your own results written for your next appointment.

                ## Notes
                Use a patient information page from a national health service or a thyroid patient organisation rather than forums, which mix very different situations.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page note in your own words explains TSH, free T4 and free T3 and why retests wait weeks, with two questions for your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient information page on thyroid blood tests from a health service"
                - "Write a sentence each on what TSH, free T4 and free T3 measure"
                - "Explain the pituitary feedback loop to someone else in two minutes"
                - "Write two questions about your own results for the next appointment"
            - name: What thyroid antibody results mean
              description: |-
                ## Purpose
                Antibody tests such as TPO antibodies and TSH receptor antibodies help show whether a thyroid problem is autoimmune, which affects how likely it is to progress, relapse or affect a pregnancy. Knowing which antibodies you have been tested for, and what your clinician made of them, fills in a gap many people carry for years.

                ## Milestones
                1. Every antibody test in your history identified by name and date.
                2. What each antibody is associated with written in plain words.
                3. Your clinician asked what your own antibody results mean for you.
                4. Their answer added to your diagnosis page.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your diagnosis page lists each antibody test you have had with its result and a one-sentence explanation from your clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your results history for any thyroid antibody tests"
                - "Read what TPO and TSH receptor antibodies are associated with"
                - "Ask your clinician what your antibody results mean for your future care"
                - "Add their explanation to your diagnosis page"
            - name: Taking thyroid tablets around food and other medicines
              description: |-
                ## Purpose
                Coffee, breakfast, soya, high-fibre foods, calcium and iron can all reduce how much levothyroxine is absorbed, which is why the timing advice exists and why changing habits can move results. Learning your pharmacist's specific advice, then testing that your daily routine actually follows it, removes one of the most common hidden reasons for a dose creeping up.

                ## Milestones
                1. Your pharmacist's advice on timing around food, coffee and other medicines written down.
                2. Your current morning routine compared with that advice.
                3. One change made to close any gap, such as moving an iron tablet later.
                4. The change noted in your log so a later result can be read against it.

                ## Notes
                If you cannot keep to the usual timing because of shift work or other medicines, say so. Your clinician may suggest a different timing and then simply keep it consistent.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your pharmacist's timing advice is written down, your routine matches it, and any change is dated in your results log."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your pharmacist for the timing rules for your thyroid tablet"
                - "Write down what you eat, drink and take in the first two hours of a normal day"
                - "Change one habit that clashes with the timing advice"
                - "Date the change in your results log"
            - name: Telling thyroid symptoms apart from other causes
              description: |-
                ## Purpose
                Fatigue, low mood, weight change, poor sleep and brain fog can come from the thyroid, but they also come from anaemia, low vitamin D or B12, perimenopause, sleep apnoea, depression and plain overwork. Knowing the overlap helps you ask whether other causes have been checked, rather than chasing a thyroid result that is already in range.

                ## Milestones
                1. A list of the common causes that share your main symptoms.
                2. Which of those have already been tested, with dates, found from your record.
                3. Questions about untested causes written for your next appointment.
                4. Your clinician's answer recorded.

                ## Notes
                This is for asking better questions, not self-diagnosis. Your clinician decides which tests make sense.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of other causes for your main symptoms, marked tested or untested, has been discussed with your clinician and their answer recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your three most troublesome symptoms at the top of a page"
                - "List other common causes of those symptoms from a health service page"
                - "Check your results history for which of those have been tested"
                - "Ask your clinician about any untested causes at the next appointment"
            - name: How thyroid conditions change over the years
              description: |-
                ## Purpose
                Hashimoto's disease often means a slowly failing gland and a dose that rises over the years, Graves' disease can go into remission and later relapse, and people who have had treatment for an overactive thyroid often become underactive. Understanding the likely course of your own condition helps you recognise a change early and plan reviews around it.

                ## Milestones
                1. The usual long-term course of your condition read about from a reputable source.
                2. The two or three changes most likely for you written down.
                3. Your clinician asked what to watch for over the next five years.
                4. Those signs added to your monthly symptom checklist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note of the likely long-term changes for your condition, confirmed with your clinician, with matching items added to your symptom checklist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a thyroid patient organisation's guide to the long-term course of your condition"
                - "Write the changes most likely to affect you"
                - "Ask your clinician what to watch for over the coming years"
                - "Add those signs to your monthly symptom checklist"
            - name: Iodine, kelp and thyroid supplement questions
              description: |-
                ## Purpose
                Supplements sold for thyroid support often contain iodine, kelp, seaweed extracts or even animal thyroid tissue, and these can tip an autoimmune thyroid one way or the other or confuse blood tests. Asking your clinician before starting anything, with the actual label in hand, avoids undoing a carefully adjusted dose.

                ## Milestones
                1. Every supplement or 'thyroid support' product you use or are considering listed with its label.
                2. Ingredients that contain iodine, kelp, seaweed, biotin or thyroid extract highlighted.
                3. Your clinician or pharmacist asked about each highlighted product.
                4. A yes or no decision recorded for each one.

                ## Notes
                Products marketed as glandular or natural thyroid support are not the same as prescribed thyroid hormone and their content can vary.
              priority: low
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "Each supplement you use or are considering has a recorded yes or no decision from your clinician or pharmacist."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Photograph the ingredient labels of any supplements you take or are considering"
                - "Highlight iodine, kelp, seaweed, biotin or thyroid extract on each label"
                - "Ask your pharmacist about each highlighted product"
                - "Write their decision beside each product on your medicines list"
            - name: Explaining your thyroid condition to the people around you
              description: |-
                ## Purpose
                Friends, partners and colleagues often see only the tiredness, irritability or weight change, not the cause, and a thyroid condition can look like a personality change from the outside. A short, plain explanation you are comfortable giving, and one specific way people can help, makes the bad months easier for everyone.

                ## Milestones
                1. A three or four sentence explanation of your condition written in everyday words.
                2. One or two concrete ways others can help written down.
                3. The explanation shared with the people you live with.
                4. A decision made about what, if anything, to tell work.

                ## Notes
                You choose what to share. Keep a shorter version for people who only need to know you have a manageable long-term condition.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plain-language explanation and a list of ways to help have been shared with your household, and a decision about work is recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft a four-sentence plain explanation of your condition"
                - "Edit the draft until it sounds like you"
                - "Write two specific ways the people you live with can help"
                - "Talk it through with your household over a meal"
            - name: Raising symptoms that persist with normal results
              description: |-
                ## Purpose
                Some people on treatment still feel unwell even when their TSH sits in range, and the appointment can end with a shrug unless the evidence is laid out clearly. Bringing scored symptoms, a results log and a list of other causes already checked gives your clinician something specific to work with and makes a plan more likely.

                ## Milestones
                1. Three months of symptom scores and the matching results gathered.
                2. Other possible causes and tests already done summarised on one page.
                3. A longer appointment booked specifically to discuss persistent symptoms.
                4. An agreed plan recorded, whether further tests, a dose review, a referral or a watch period.

                ## Notes
                Start from the **Meeting notes** template to capture what was agreed and who is doing what.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An appointment about persistent symptoms has taken place with your evidence summary, and the agreed plan is written in meeting notes."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Collect your last three months of symptom scores and thyroid results"
                - "Write a one-page summary of symptoms, results and causes already checked"
                - "Book an appointment and say it is about persistent thyroid symptoms"
                - "Record the agreed plan in meeting notes the same day"
            - name: Choosing a Graves' disease treatment path
              description: |-
                ## Purpose
                Graves' disease is usually treated with antithyroid drugs, radioactive iodine or surgery, and each brings different trade-offs for relapse, lifelong replacement, eye disease, pregnancy plans and time off. Laying out the options against your own priorities, with your specialist, turns a decision often made in one rushed appointment into an informed choice.

                ## Milestones
                1. The three main options described to you by your specialist, with their pros and cons for you.
                2. Your own priorities written down, such as pregnancy plans, eye symptoms, work and young children at home.
                3. Questions about relapse, replacement and eye disease answered for each option.
                4. A decision, or a decision date, agreed and recorded.

                ## Notes
                Thyroid patient organisations publish decision aids for Graves' treatment. Bring one to the appointment.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A treatment path for Graves' disease, or a date to decide it, is agreed with your specialist and recorded with the reasons."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find a Graves' disease decision aid from a thyroid patient organisation"
                - "Write your priorities for work, family, pregnancy and eyes"
                - "List your questions about relapse and lifelong replacement for each option"
                - "Record the decision and the reasons in your diagnosis page"
            - name: Asking about combined T4 and T3 treatment
              description: |-
                ## Purpose
                Liothyronine (T3) alongside levothyroxine is sometimes tried, usually under a specialist, for people with ongoing symptoms despite well-managed levothyroxine, but guidelines are cautious and access differs between health systems. Preparing a clear request, with your evidence and an understanding of what a trial would involve, gets you a considered answer rather than a quick no or an unmonitored experiment.

                ## Milestones
                1. Your health service's or specialist society's position on T3 trials read.
                2. Your symptom and results history summarised for the request.
                3. The question asked of your clinician or specialist.
                4. Their decision recorded, and if a trial is agreed, its monitoring plan and review date written down.

                ## Notes
                Do not buy T3 or thyroid extract online. Unmonitored use can cause a fast or irregular heartbeat and bone loss.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your clinician's answer on a T3 trial is recorded, with a monitoring plan and review date if a trial was agreed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your health service's guidance on liothyronine for hypothyroidism"
                - "Summarise your symptoms and results since your dose was last stable"
                - "Ask your clinician whether a supervised T3 trial is an option"
                - "Write down the answer and any monitoring plan"
            - name: Managing a switch of thyroid tablet brand or form
              description: |-
                ## Purpose
                Pharmacies sometimes change the manufacturer of levothyroxine because of supply or cost, and a few people's results or symptoms change afterwards; others are offered a liquid or capsule form because of absorption problems. Handling any switch deliberately, with a note of the date and a retest, means you know whether it made a difference.

                ## Milestones
                1. The date and details of the switch recorded in your medicine record.
                2. Your clinician told about the switch and asked whether a retest is needed.
                3. Symptom scores kept for the following eight weeks.
                4. A decision recorded on whether to stay with the new product or ask for the previous one.

                ## Notes
                If you notice a change, your clinician can write the specific brand on your prescription in some health systems.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Any brand or form switch is dated in your record, followed by a retest if advised and a recorded decision on whether to keep it."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Compare the maker on your current pack with your medicine record"
                - "Tell your clinician the date and details of any switch"
                - "Ask whether a retest is needed after the switch"
                - "Record whether you will stay with the new product"
            - name: Subclinical hypothyroidism, treat or watch
              description: |-
                ## Purpose
                A raised TSH with a normal free T4 is common, especially with age, and whether to start treatment depends on the level, symptoms, antibodies, pregnancy plans and repeat results. Understanding the options, and agreeing a clear plan with a retest date, avoids both drifting untested for years and starting lifelong tablets on a single result.

                ## Milestones
                1. At least two results showing the raised TSH, weeks apart, gathered.
                2. Antibody status and any symptoms summarised.
                3. Your clinician's recommendation and the reasoning recorded.
                4. A retest date or a treatment start and review date written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision to treat or watch a raised TSH, with the reasoning and a dated next step, is on your diagnosis page."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find both of your raised TSH results and their dates"
                - "Note whether antibodies have been checked and the result"
                - "Ask your clinician whether they recommend treatment or a watch period"
                - "Book the agreed retest or treatment review"
            - name: Deciding whether to ask for an endocrinology referral
              description: |-
                ## Purpose
                Most underactive thyroids are managed well by a family doctor, while overactive thyroids, pregnancy, eye disease, nodules and results that will not settle usually need a specialist. Checking your situation against your health service's referral guidance helps you ask confidently when a referral is warranted, or accept that it is not.

                ## Milestones
                1. Your health service's referral criteria for thyroid conditions found.
                2. Your situation compared with them in writing.
                3. The question of referral raised with your family doctor.
                4. The outcome, and the reason, recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded answer from your family doctor on whether you need an endocrinology referral, with the reason given."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up when your health service refers thyroid conditions to a specialist"
                - "Write which criteria, if any, match your situation"
                - "Ask your family doctor whether a referral is appropriate"
                - "Record the answer and the reason given"
            - name: Bedtime versus morning thyroid tablet trial
              description: |-
                ## Purpose
                Morning dosing on an empty stomach does not suit everyone: early shifts, other morning medicines or a habit of breakfast on the run can make it unreliable. Some clinicians are happy for people to try bedtime dosing instead, kept consistent and checked with a blood test, which can be easier to keep to.

                ## Milestones
                1. Your clinician's agreement to trial a different time obtained.
                2. The switch date written in your log and the new time kept daily.
                3. A blood test done at the interval your clinician asked for.
                4. A decision recorded on which time to keep.

                ## Notes
                Only change the time with your clinician's agreement, and change nothing else during the trial so the result means something.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A clinician-agreed timing trial with a dated start and a follow-up blood test ends in a recorded decision on when to take the tablet."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write down why the current tablet time is hard to keep"
                - "Ask your clinician whether a bedtime dose is reasonable for you"
                - "Record the switch date in your results log"
                - "Book the follow-up test at the interval your clinician gives"
            - name: Stopping antithyroid drugs and watching for relapse
              description: |-
                ## Purpose
                After a course of antithyroid drugs, often twelve to eighteen months, specialists may stop treatment to see whether Graves' disease has gone into remission, and relapse is most likely in the first year afterwards. Knowing the follow-up test schedule and the early signs of relapse means a return is caught at the first blood test, not after months of palpitations.

                ## Milestones
                1. The stopping plan and follow-up blood test schedule written down.
                2. Early relapse signs listed on your symptom checklist.
                3. Every follow-up test in the first year booked and logged.
                4. A plan agreed for what happens if the thyroid becomes overactive again.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All follow-up thyroid tests in the year after stopping antithyroid drugs are done and logged, with a written relapse plan."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your specialist for the follow-up test schedule after stopping"
                - "Add palpitations, weight loss and heat intolerance to your symptom checklist"
                - "Book the first two follow-up tests"
                - "Ask what happens next if the thyroid becomes overactive again"
            - name: Preparing for your first endocrinology appointment
              description: |-
                ## Purpose
                Endocrinology appointments are often short and months apart, so arriving without your results, medicines and questions can waste one. A prepared folder and a list of your three most important questions makes the first visit count and gives you a clear record of what was decided.

                ## Milestones
                1. Your diagnosis page, results log and medicine record printed or ready on your phone.
                2. Three priority questions written, most important first.
                3. Someone to come with you, or a way to take notes, arranged.
                4. Decisions, next tests and follow-up date recorded in meeting notes.

                ## Notes
                Start from the **Meeting notes** template. Ask at the end who you should contact with questions before the next appointment.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first endocrinology appointment is attended with your results and questions, and its decisions and next steps are recorded in meeting notes."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your three most important questions in order"
                - "Print or save your diagnosis page, results log and medicine record"
                - "Ask someone to come with you or plan how you will take notes"
                - "Write up decisions and the follow-up date in meeting notes after the visit"
            - name: Radioactive iodine treatment preparation
              description: |-
                ## Purpose
                Radioactive iodine treatment comes with specific instructions from the hospital: stopping some medicines beforehand, possibly a low-iodine diet, and keeping distance from children and pregnant people for a set number of days afterwards. Planning work, childcare, sleeping arrangements and travel around those instructions weeks ahead stops the treatment being postponed or the precautions being impossible to follow.

                ## Milestones
                1. The hospital's written instructions read and questions answered.
                2. Medicine changes and any diet before treatment written on a dated plan.
                3. Childcare, sleeping arrangements, work and travel arranged for the precaution period.
                4. Pregnancy timing advice after treatment recorded if relevant.
                5. The follow-up blood test after treatment booked.

                ## Notes
                Follow the hospital's instructions exactly; precautions vary with the dose and the reason for treatment. Some security scanners can detect radiation for a while afterwards, so ask for a letter if you will travel.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Radioactive iodine treatment goes ahead on the planned date with medicine changes, precautions and follow-up blood tests arranged as the hospital instructed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the hospital's radioactive iodine instructions and mark anything unclear"
                - "Ask which medicines to stop before treatment and when"
                - "Arrange childcare and sleeping arrangements for the precaution period"
                - "Ask the hospital for a travel letter if you will fly soon after"
                - "Book the follow-up blood test the hospital asks for"
            - name: Thyroid surgery questions and calcium follow-up
              description: |-
                ## Purpose
                Removing part or all of the thyroid raises questions particular to this operation: the parathyroid glands that control calcium sit beside it, the nerves to the voice box run close by, and full removal means lifelong replacement from the day after. Asking the right questions before surgery and knowing which symptoms to report after it makes recovery far less worrying.

                ## Milestones
                1. Questions about calcium checks, voice changes and replacement asked at the pre-surgery visit.
                2. The symptoms of low calcium, such as tingling around the mouth or fingers, written on your emergency card.
                3. The plan for starting thyroid replacement after surgery confirmed.
                4. The first post-operative thyroid and calcium tests booked.

                ## Notes
                General planning for time off, the hospital stay and wound care belongs to your wider surgery preparation. This project covers the thyroid-specific parts.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Thyroid surgery is followed by calcium and thyroid tests on the dates the team set, with the replacement plan and calcium warning signs written down beforehand."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write your questions about calcium, voice and replacement for the surgeon"
                - "Add the signs of low calcium to your emergency card"
                - "Confirm when thyroid replacement will start after the operation"
                - "Book the first post-operative calcium and thyroid tests"
            - name: Thyroid nodule ultrasound and biopsy appointment
              description: |-
                ## Purpose
                Most thyroid nodules are harmless, but a nodule found on a scan or felt in the neck usually leads to an ultrasound and sometimes a fine needle biopsy, with a wait for results that can feel long. Knowing what will happen, how results are graded and when you will hear makes the appointment calmer and the next step clear.

                ## Milestones
                1. The reason for the scan and what the team is looking for explained to you.
                2. Questions about the biopsy, any blood thinners and results timing asked beforehand.
                3. The ultrasound grading or biopsy result and its meaning recorded.
                4. The next step agreed: discharge, surveillance, repeat biopsy or referral.

                ## Notes
                Results are often reported using a grading system for ultrasound or cytology. Ask what your grade means for you rather than looking it up alone.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The nodule scan or biopsy is attended, the result and its grade are recorded with an explanation, and the agreed next step is written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the clinic what the scan is looking for and how long results take"
                - "Tell the clinic about any blood-thinning medicines before a biopsy"
                - "Record the result, its grade and what it means for you"
                - "Write down the agreed next step and its date"
            - name: Travelling with thyroid medicine across time zones
              description: |-
                ## Purpose
                Long-haul trips shift your daily tablet time, can disrupt meal timing, and a lost suitcase can leave you without medicine in a country where the same brand is not sold. A short plan for adjusting the dose time, carrying enough supply in hand luggage and knowing the generic name keeps doses steady on the move.

                ## Milestones
                1. Enough medicine for the trip plus spare days packed in hand luggage.
                2. A plan for shifting the tablet time across time zones, checked with your pharmacist.
                3. The generic name, strength and your medicine record carried in case you need a local supply.
                4. Any antithyroid drug warning instructions packed with the medicine.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip is completed with no missed thyroid doses, medicine carried in hand luggage and a written plan for the time-zone shift."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Count the doses needed for the trip and add a few spare days"
                - "Ask your pharmacist how to shift the tablet time across time zones"
                - "Pack the medicine and a copy of your medicine record in hand luggage"
                - "Note the generic name and strength in your phone"
            - name: Planning a pregnancy with a thyroid condition
              description: |-
                ## Purpose
                Pregnancy changes how much thyroid hormone the body needs, often very early, and both underactive and overactive thyroids need closer monitoring and sometimes a change of medicine before or during pregnancy. Telling your clinician you are planning, getting results into range beforehand and knowing what to do on the day of a positive test protects both you and the pregnancy.

                ## Milestones
                1. Your clinician told that you are planning a pregnancy and asked for a pre-conception plan.
                2. A thyroid blood test done and the target for conception agreed.
                3. What to do on the day of a positive pregnancy test written down, including who to contact.
                4. The testing schedule for pregnancy, if known, recorded.
                5. For an overactive thyroid, any medicine change before conception discussed with your specialist.

                ## Notes
                Do not change your dose yourself unless your clinician has already agreed that plan with you. Ask them to put it in writing.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written pre-conception thyroid plan from your clinician covers a target, a current result and exactly whom to contact when a pregnancy test is positive."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book an appointment to say you are planning a pregnancy"
                - "Ask for a thyroid blood test and the target before conception"
                - "Write down whom to contact the day a pregnancy test is positive"
                - "Ask how often thyroid tests will be needed during pregnancy"
            - name: Thyroid checks in the year after giving birth
              description: |-
                ## Purpose
                In the first year after birth, some people develop postpartum thyroiditis, often an overactive phase followed by an underactive one, and its symptoms are easily put down to a new baby. People already on thyroid treatment usually need their dose reviewed after delivery too. Planning the checks before the baby arrives means they are not forgotten in the blur.

                ## Milestones
                1. Your clinician asked what thyroid testing is needed after delivery and when.
                2. Any change back to a pre-pregnancy dose agreed and written down.
                3. Symptoms of postpartum thyroiditis added to your symptom checklist.
                4. Post-birth thyroid tests booked and results logged.

                ## Notes
                Ask about medicines and breastfeeding with your clinician or pharmacist; do not stop treatment on your own.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The thyroid tests your clinician recommended in the year after birth are booked and logged, with any dose change after delivery recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Ask your midwife or clinician what thyroid tests are needed after birth"
                - "Write the agreed post-delivery dose plan in your medicine record"
                - "Add palpitations, low mood and exhaustion beyond the expected to your checklist"
                - "Book the first post-birth thyroid test before the due date"
            - name: Thyroid care in later life
              description: |-
                ## Purpose
                Older adults often have a slightly higher TSH target, are more sensitive to too much thyroid hormone, which can affect heart rhythm and bones, and take more medicines that interact. A review of target, dose and interactions once you reach your seventies, or start new medicines, keeps treatment suited to the body you have now.

                ## Milestones
                1. Your clinician asked whether your TSH target should change with age.
                2. Your full medicines list checked for interactions with thyroid treatment.
                3. Any pulse irregularity or falls mentioned to your clinician.
                4. A family member or carer shown where your thyroid records are kept.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your clinician has reviewed your thyroid target and medicines for later life, and the result is recorded with a family member knowing where it is kept."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your clinician whether your TSH target should change with age"
                - "Bring your full medicines list to the next thyroid review"
                - "Mention any falls, dizziness or irregular pulse since the last review"
                - "Show a family member where your diagnosis page and log are kept"
            - name: Thyroid eye disease care plan
              description: |-
                ## Purpose
                Gritty, watery or bulging eyes, double vision or pressure behind the eyes can come with Graves' disease, sometimes before or after the thyroid itself is treated. Smoking makes it much worse, and early specialist input matters, so a plan covering what to report, who to see and how to track changes is worth having from the first symptom.

                ## Milestones
                1. Your eye symptoms described to your clinician and a referral to an eye specialist discussed.
                2. The urgent eye warning signs, such as reduced or dulled colour vision, on your emergency card.
                3. Monthly photographs of your eyes taken in the same light.
                4. Smoking status addressed, with support arranged if you smoke.

                ## Notes
                Treatments for thyroid eye disease vary. Your eye specialist decides them; this project keeps the evidence and the appointments in order.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your eye symptoms are recorded and discussed with a clinician, urgent eye signs are on your card, and at least three monthly eye photographs exist."
                cadence: rolling
              tasks:
                - "Write down which eye symptoms you have and when they started"
                - "Ask your clinician whether you need an eye specialist referral"
                - "Add the urgent eye warning signs to your emergency card"
                - "Photograph both eyes in the same light and note any change @recurring(monthly:15)"
            - name: Starting replacement after thyroid surgery or radioactive iodine
              description: |-
                ## Purpose
                Becoming underactive is the expected result of total thyroid removal and a common one after radioactive iodine, and the first months involve finding the right dose with tests every few weeks. Treating those months as a planned phase, with tests booked and symptoms scored, gets you to a settled dose sooner.

                ## Milestones
                1. The expected testing schedule for the first six months written down.
                2. Your starting dose and any changes recorded in your log with dates.
                3. Symptom scores kept before each test.
                4. A settled dose with a result in your target range reached and recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dose giving a result in your target range is reached and logged, with every test in the first six months done as scheduled."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the team for the expected testing schedule over the first six months"
                - "Record your starting dose and its date in the results log"
                - "Score your symptoms the week before each test"
                - "Mark the date the dose settles in range on your diagnosis page"
            - name: Supporting a child or teenager with a thyroid condition
              description: |-
                ## Purpose
                Children and teenagers with thyroid conditions, whether found on newborn screening or developing later, need tablets given reliably, regular growth and blood checks, and adults at school who understand tiredness or concentration changes. Parents usually hold the routine, so a clear plan, and a gradual handover to a teenager, keeps treatment steady through the school years.

                ## Milestones
                1. The child's medicine, dose pattern and test schedule written down in one place.
                2. A reliable way of giving the tablet each day that suits the child's age.
                3. The school told what it needs to know, with the child's agreement if old enough.
                4. For teenagers, a handover plan for managing their own tablets and appointments.

                ## Notes
                Ask the paediatric team how to give tablets to babies and young children; crushing and mixing instructions are specific.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written plan covers the child's medicine, tests and school information, and a teenager has a dated handover plan for self-management."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write the child's medicine, dose pattern and next test date on one page"
                - "Ask the paediatric team how best to give the tablet at this age"
                - "Agree with your child what the school should know"
                - "Update the school about medicines and appointments at the start of each school year @recurring(yearly)"
            - name: Managing a thyroid condition at work
              description: |-
                ## Purpose
                Energy dips while a dose is being adjusted, regular blood tests and specialist appointments in working hours can strain a job, and some workplaces offer adjustments if they know. Deciding what to share, planning appointments around work and asking for a temporary adjustment during difficult months keeps both health and job steady.

                ## Milestones
                1. A decision made on what to tell your manager or occupational health, if anything.
                2. The year's known appointments and tests listed and planned around work.
                3. Any temporary adjustment, such as flexible start times during dose changes, requested.
                4. The outcome of any request recorded.

                ## Notes
                Employment protections differ between countries. Your workplace policy or an employee adviser can explain what applies to you.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A recorded decision on what to share at work and a plan for the year's thyroid appointments around working hours exist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the thyroid appointments and tests you expect this year"
                - "Read your workplace policy on medical appointments and adjustments"
                - "Decide what, if anything, to tell your manager"
                - "Request early morning blood test slots so they fit around work"
            - name: Ten-year thyroid dose and result timeline
              description: |-
                ## Purpose
                Over a decade, doses change, brands switch, life events intervene and clinicians come and go, and the pattern is invisible unless it is drawn. A single timeline chart of dose against TSH, with events marked, shows a new specialist in seconds how your thyroid has behaved and often explains why a dose that suited you once no longer does.

                ## Milestones
                1. Every dose and TSH result from your log plotted on one timeline.
                2. Brand switches, pregnancies, treatments and new medicines marked.
                3. A short paragraph written on the main patterns the chart shows.
                4. The chart shared with your clinician or specialist.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A timeline chart of dose against TSH, with events marked and a paragraph of observations, has been shared with your clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export your results log into a spreadsheet"
                - "Plot dose and TSH on one timeline chart"
                - "Mark brand switches, treatments, pregnancies and new medicines"
                - "Add the year's results and doses to the timeline @recurring(yearly)"
            - name: Thyroid nodule surveillance schedule
              description: |-
                ## Purpose
                Nodules judged low risk are often watched with repeat ultrasounds at intervals that depend on their size and appearance, and those intervals easily slip once the first scan is reassuring. A written schedule with each scan's measurements recorded means growth would be noticed and nobody has to remember when the last scan was.

                ## Milestones
                1. The surveillance interval and the reason for it written down.
                2. Each scan's date, nodule size and grading recorded in a table.
                3. The next scan booked or a reminder set to request it.
                4. Discharge criteria, if any, recorded.

                ## Notes
                Report a new lump, a change in voice, difficulty swallowing or a nodule that seems to be growing to your clinician without waiting for the next scan.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A table holds every nodule scan with date, size and grade, and the next scan due date is booked or on a reminder."
                cadence: cyclic
              tasks:
                - "Ask your specialist how often the nodule should be rescanned"
                - "Create a table for each scan's date, size and grade"
                - "Enter the measurements from every scan report so far"
                - "Request the next nodule ultrasound if it is not yet booked @recurring(yearly)"
            - name: Thyroid monitoring on lithium, amiodarone or immunotherapy
              description: |-
                ## Purpose
                Lithium, amiodarone and some cancer immunotherapies can make the thyroid underactive or overactive, which is why prescribers usually check thyroid function before and during treatment. Keeping that monitoring on schedule, and knowing which symptoms to report between tests, catches a thyroid problem caused by another medicine early.

                ## Milestones
                1. The prescriber's thyroid monitoring schedule for the medicine written down.
                2. The baseline thyroid result found and logged.
                3. Each monitoring test booked and its result logged.
                4. Symptoms to report between tests added to your symptom checklist.

                ## Notes
                Do not stop the medicine because of a thyroid result. The prescriber and your thyroid clinician decide together.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every thyroid test in the prescriber's monitoring schedule is done and logged, starting from a recorded baseline result."
                cadence: rolling
              tasks:
                - "Ask the prescriber how often your thyroid should be tested on this medicine"
                - "Find your baseline thyroid result from before the medicine started"
                - "Add symptoms to report between tests to your checklist"
                - "Confirm the next monitoring thyroid test has a date in the diary @recurring(quarterly)"
            - name: Bone and heart questions after years of low TSH
              description: |-
                ## Purpose
                Keeping TSH below the normal range is sometimes deliberate, for example after thyroid cancer, and sometimes an accident of a dose that crept up, and years of it can affect bone density and heart rhythm. Raising the question with evidence lets your clinician decide whether the target is still right and whether a bone or heart check makes sense.

                ## Milestones
                1. The years in which your TSH was below range identified from your log.
                2. Whether that was intended confirmed with your clinician.
                3. Your clinician asked whether a bone or heart rhythm assessment is warranted.
                4. The answer and any agreed target change recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your clinician has reviewed how long your TSH has been below range and recorded a decision on the target and any bone or heart checks."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Highlight every below-range TSH result in your log"
                - "Count how many years your TSH has been below range"
                - "Ask your clinician whether that was intended and still right"
                - "Record their decision on bone or heart rhythm checks"
            - name: Joining a thyroid patient organisation or research study
              description: |-
                ## Purpose
                Patient organisations for thyroid conditions publish reviewed information, decision aids and support groups, and many research studies on thyroid treatment need participants with years of experience. Someone who has managed their thyroid well for a while can get better information for themselves and help improve care for people diagnosed after them.

                ## Milestones
                1. One or two reputable thyroid patient organisations identified.
                2. Their information resources compared with what you already use.
                3. A decision made on membership, a support group or volunteering.
                4. Any suitable research registry or study looked at and a decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on joining a thyroid patient organisation and on any research study, with the organisation named."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find two thyroid patient organisations run with clinical advisers"
                - "Read their information on your condition and note anything new"
                - "Decide whether to join, attend a group or volunteer"
                - "Search a public research registry for thyroid studies near you"
---

# Thyroid Condition Management

This area is for anyone living with an underactive or overactive thyroid, whether it came from Hashimoto's disease, Graves' disease, surgery or radioactive iodine, and for the people who help them keep track. It starts with the foundations (a one-page diagnosis, your results history and log, a target range agreed with your clinician and a record of exactly which tablets you take), then the routines that keep tests and tablets steady, the knowledge that makes results readable, the treatment decisions, the appointments and procedures that need preparing, the life situations that change the plan, and finally the long-view work of someone who has managed a thyroid for years.

What repeats is a daily tablet routine with a weekly organiser refill, a monthly symptom score and weight and pulse note, a quarterly look at your results trend, retests after each dose change and the annual review with its blood test. The Metrics log, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
