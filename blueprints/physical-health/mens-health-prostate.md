---
id: physical-health.mens-health-prostate
name: Men's Health & Prostate Care
description: "A men's health baseline, informed PSA decisions with a trend log, urinary symptom scores, testosterone testing done properly and the appointments men tend to put off, from midlife onwards."
category: personal
version: 1.0.0
tags: [physical-health, mens-health-prostate, everyone, retiree, prostate, psa, testosterone, urinary-symptoms]
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
        - name: Men's Health & Prostate Care
          description: "Covering men's health checks, prostate monitoring, testosterone testing and the conversations men often put off, from midlife onwards."
          projects:
            - name: One-page men's health baseline
              description: |-
                ## Purpose
                Most men can quote their car's mileage but not their own blood pressure, waist measurement or last PSA result. A single page holding your current numbers, medicines, symptoms and family history gives every later appointment a starting point, and makes it obvious which checks are missing.

                ## Milestones
                1. Blood pressure, weight, waist, and any recent blood results written on one page with their dates.
                2. Current medicines and supplements listed, including anything bought over the counter.
                3. Urinary, sexual and energy symptoms noted in a line each, even if the answer is none.
                4. The checks you have never had, or not had for five years, marked as gaps.

                ## Notes
                Ask your practice for a copy of your recent results through the patient portal rather than relying on memory. Keep the page somewhere a partner could find it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page baseline listing current numbers, medicines, symptoms and the gaps still to fill."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Log in to the patient portal and note your last blood pressure and blood results"
                - "Measure your waist at the level of your belly button and write it down"
                - "List every medicine and supplement you take, with what it is for"
                - "Mark the checks you have never had or not had for five years"
            - name: Personal prostate cancer risk profile
              description: |-
                ## Purpose
                Age, a father or brother with prostate cancer, Black African or Caribbean heritage and inherited genes such as BRCA2 all change when a PSA conversation makes sense. Writing your own risk factors down, with the evidence for each, means your clinician can give advice that fits you rather than the average man.

                ## Milestones
                1. Prostate, breast and ovarian cancer in close relatives listed, with their age at diagnosis where known.
                2. Your ethnicity and any known inherited gene variant in the family recorded.
                3. Your health service's published guidance on higher-risk groups read and the relevant points noted.
                4. The profile shared with your clinician and their view on your risk group written down.

                ## Notes
                Breast and ovarian cancer on either side of the family can matter for men too, because the same gene variants raise prostate cancer risk.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written risk profile covering age, family history, ethnicity and known gene variants, discussed with a clinician and their view recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask a parent or sibling which relatives had prostate, breast or ovarian cancer"
                - "Note each relative's age at diagnosis where anyone knows it"
                - "Read your health service's guidance on who is at higher risk of prostate cancer"
                - "Bring the profile to your next appointment and record the clinician's view"
            - name: Booking a midlife men's health check
              description: |-
                ## Purpose
                Men in their forties and fifties see a doctor far less often than women of the same age, so blood pressure, cholesterol, blood sugar and prostate questions can go years without a look. Booking a dedicated check, with a list of what you want covered, turns a vague intention into a date in the diary.

                ## Milestones
                1. The check your health service offers at your age identified, or a standard appointment booked instead.
                2. A list of the measurements and blood tests you want discussed prepared.
                3. Prostate, urinary and sexual health questions written down so they are not left until the door.
                4. The appointment attended and the results added to your baseline page.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A men's health check attended within six weeks of install, with its results added to the baseline page."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which health check your service offers men of your age"
                - "Book the check or a standard appointment within the next six weeks"
                - "Write the three prostate or urinary questions you most want answered"
                - "Add the results to your baseline page once they arrive"
            - name: Urinary symptom score baseline
              description: |-
                ## Purpose
                A standard seven-question urinary symptom score, the kind urologists use, turns vague complaints like a weak stream or getting up at night into a number from 0 to 35. Scoring yourself now gives a baseline to compare against, and tells your clinician quickly whether symptoms are mild, moderate or severe.

                ## Milestones
                1. A validated prostate symptom questionnaire found through your health service or a urology charity.
                2. All seven questions and the quality of life question answered honestly.
                3. The total score and the date written in your log.
                4. The score shared with your clinician if it falls in the moderate or severe band.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated urinary symptom score recorded, and shared with a clinician if it is moderate or above."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a validated prostate symptom questionnaire from a reputable source"
                - "Answer all eight questions about the past month"
                - "Write the total score and today's date in your log"
                - "Send the score to your practice if it is moderate or severe"
            - name: Three-day bladder diary
              description: |-
                ## Purpose
                Urologists often ask for a bladder diary before deciding anything, because it shows whether night-time trips come from a small bladder, a slow stream or simply drinking late. Three days of times, volumes and drinks answers questions that memory cannot.

                ## Milestones
                1. A measuring jug and a simple diary sheet ready by the toilet.
                2. Every drink and every visit to the toilet recorded for three consecutive days, including nights.
                3. Total daytime and night-time volumes worked out.
                4. The diary brought to your next appointment.

                ## Notes
                Choose three days at home rather than a working week away. Ask your practice whether they have a preferred diary format.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A completed three-day bladder diary with day and night volumes totalled, brought to a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice whether they use a particular bladder diary sheet"
                - "Put a measuring jug and the diary sheet in the bathroom"
                - "Record every drink and toilet visit for three days and nights"
                - "Total the daytime and night-time volumes"
            - name: Monthly testicular self-examination
              description: |-
                ## Purpose
                Testicular cancer is most common in men aged roughly 15 to 49, and a change found early is usually very treatable. A one-minute check once a month, after a warm shower, teaches you what is normal for you, so a new lump, swelling or heaviness stands out.

                ## Milestones
                1. The self-examination method learned from a reputable health source.
                2. A fixed day each month chosen for the check.
                3. Three consecutive monthly checks done.
                4. A rule written down to book an appointment for any new lump, swelling or ache rather than waiting.

                ## Notes
                Most lumps turn out to be harmless, but only a clinician can say so. Do not wait to see if a change goes away.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly self-checks completed, with a written rule for when to book an appointment."
                cadence: rolling
              tasks:
                - "Read a health service guide to checking your testicles"
                - "Write your rule for booking an appointment after any change"
                - "Check your testicles after a warm shower @recurring(monthly:12)"
            - name: Urgent urinary and testicular symptoms card
              description: |-
                ## Purpose
                Being unable to pass urine at all, sudden severe pain in a testicle, or fever with painful urination need same-day care, while blood in the urine needs a prompt appointment. A card that sorts symptoms into emergency, same day and soon means nobody has to judge it at two in the morning.

                ## Milestones
                1. Your health service's guidance on urgent urinary and testicular symptoms found.
                2. A card written with three groups: emergency now, same day, and book within days.
                3. The emergency and out-of-hours numbers added to the card.
                4. The card kept where the household can find it and shown to a partner.

                ## Notes
                Use your own health service's wording. This card organises their advice and does not replace it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A three-level symptoms card, written from health service guidance with emergency numbers, is in a known place at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up your health service's urgent signs for urinary and testicular problems"
                - "Sort the signs into emergency, same day and book within days"
                - "Add the emergency and out-of-hours numbers to the card"
                - "Check the card is still current and in its place @recurring(yearly)"
            - name: The appointment you have been putting off
              description: |-
                ## Purpose
                Erection problems, dribbling after urinating, a change in a testicle or low mood with low energy are the things men most often sit on for months. Naming the one you have been avoiding, and writing the first sentence you will say to the doctor, removes most of the awkwardness before you walk in.

                ## Milestones
                1. The one symptom or worry you have been postponing written down.
                2. An opening sentence drafted that states it plainly in the first minute.
                3. An appointment booked, with a male or female clinician as you prefer.
                4. What the clinician said and the next step recorded.

                ## Notes
                Clinicians hear these concerns every day. Saying it first, rather than as you stand up to leave, gets you a proper answer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The postponed concern raised at a booked appointment, with the clinician's response and next step written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the one health worry you have been postponing"
                - "Draft the first sentence you will say to the doctor about it"
                - "Book the appointment and ask for a clinician you are comfortable with"
                - "Record what was said and what happens next"
            - name: Which professional to see for which problem
              description: |-
                ## Purpose
                Not every men's health problem needs a doctor first: pharmacists handle many medicine questions, sexual health clinics see erection and testicular concerns, and continence nurses and pelvic health physiotherapists treat dribbling and leaks. A short map of who does what in your area saves weeks of being bounced between services.

                ## Milestones
                1. Local options listed for the practice, pharmacy, sexual health clinic, continence service and physiotherapy.
                2. Which of them take self-referrals noted.
                3. The usual waiting time for each written down where it is published.
                4. The map saved with your baseline page.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page map of local services for men's health concerns, marking which accept self-referral."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the practice, pharmacy and sexual health clinic you would use"
                - "Find out whether your area has a continence service you can self-refer to"
                - "Check whether pelvic health physiotherapy takes self-referrals locally"
                - "Save the map alongside your baseline page"
            - name: PSA result trend log
              description: |-
                ## Purpose
                One PSA number means little on its own; what clinicians watch is how it moves over years, measured under similar conditions. A log with every result, the lab, the date and anything that could have nudged it, such as an infection or recent cycling, makes a rise easy to spot and a false alarm easy to explain.

                ## Milestones
                1. Every past PSA result gathered from your record with its date.
                2. A log with columns for date, result, lab, and notes on infection, exercise or medicines.
                3. The testing interval agreed with your clinician written at the top.
                4. The trend reviewed with a clinician after each new result.

                ## Notes
                Start from the **Metrics log** template. Some prostate and hair loss medicines lower PSA, so note them in the log and tell whoever reads your results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A PSA log holding every known result with dates and notes, and the agreed testing interval written at the top."
                cadence: rolling
              tasks:
                - "Create a PSA log from the metrics log template"
                - "Copy every past PSA result and its date from your record"
                - "Ask your clinician what testing interval suits your risk"
                - "Book the PSA test at the interval your clinician agreed @recurring(yearly)"
            - name: Annual men's health review
              description: |-
                ## Purpose
                Once a year is often enough to look at the whole picture: prostate symptoms, PSA where agreed, blood pressure, testosterone if relevant, erections and energy. Treating it as a fixed month with preparation, rather than waiting for something to go wrong, means changes are noticed while they are small.

                ## Milestones
                1. A review month chosen and kept the same each year.
                2. The latest symptom score, PSA log and medicine list prepared beforehand.
                3. Any blood tests done in time for results to be discussed.
                4. Agreed changes written down and added to the baseline page.

                ## Notes
                Start from the **Meeting notes** template for the review itself, so each year's notes sit in the same format.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An annual review held for two consecutive years, each with prepared notes and written outcomes."
                cadence: cyclic
              tasks:
                - "Choose the month your annual review will fall in"
                - "Book the annual men's health review and any blood tests @recurring(yearly)"
                - "Prepare your symptom score, PSA log and three questions"
                - "Write down every change agreed at the review"
            - name: Quarterly urinary symptom re-score
              description: |-
                ## Purpose
                Urinary symptoms from an enlarging prostate usually change slowly, so men adapt without noticing until the night-time trips have doubled. Re-scoring the same questionnaire every three months shows the real direction and gives your clinician a reason to act, or to stop worrying.

                ## Milestones
                1. The same questionnaire used each time so scores compare.
                2. Four quarterly scores recorded in a year.
                3. A change of several points in either direction flagged.
                4. Any steady rise raised with your clinician.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly symptom scores recorded in twelve months, with any steady rise raised with a clinician."
                cadence: rolling
              tasks:
                - "Ask your clinician what change in score should prompt a call"
                - "Answer the symptom questionnaire and log the score @recurring(quarterly)"
                - "Compare the new score with the last two"
            - name: Daily pelvic floor routine for men
              description: |-
                ## Purpose
                Pelvic floor muscles are not only a women's concern: in men they help stop the dribble after urinating, support continence after prostate procedures and can help with erections. A few minutes a day, attached to something you already do, builds strength over three months.

                ## Milestones
                1. A routine agreed with a physiotherapist or taken from a reputable source.
                2. Exercises attached to a daily habit such as brushing your teeth.
                3. Sessions ticked off for twelve weeks.
                4. Any change in dribbling or leaks noted at the end.

                ## Notes
                Start from the **Habit tracker** template. If you are not sure you are squeezing the right muscles, the technique project below helps.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of daily pelvic floor sessions ticked off, with any change in symptoms recorded."
                cadence: rolling
              tasks:
                - "Create a habit tracker for the pelvic floor routine"
                - "Choose the daily habit you will attach the exercises to"
                - "Do your pelvic floor set and tick it off @recurring(daily)"
                - "Note any change in dribbling after twelve weeks"
            - name: Evening drinks routine for fewer night trips
              description: |-
                ## Purpose
                Getting up twice or more each night wrecks sleep, and part of it often comes from drinking late, caffeine in the afternoon or fluid that pools in the legs during the day. Shifting drinks earlier and counting the night trips each week shows whether habits or the prostate are driving it.

                ## Milestones
                1. Your usual evening drinks and their timing written down.
                2. Most fluid moved to before early evening, without cutting the day's total.
                3. Night-time trips counted every night for four weeks.
                4. The weekly counts compared with the starting week.

                ## Notes
                Do not cut total fluid to reduce trips; concentrated urine can irritate the bladder. Ask your clinician if you take a water tablet about the best time to take it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four weeks of nightly trip counts recorded after moving drinks earlier, with the change from the first week noted."
                cadence: rolling
              tasks:
                - "Write down what you drink after 6pm on a normal evening"
                - "Move your last large drink to at least two hours before bed"
                - "Add up the week's night-time trips and compare with last week @recurring(weekly:sun)"
            - name: Daily prostate medicine routine
              description: |-
                ## Purpose
                Prostate medicines only work if taken every day, and some take three to six months to show their full effect, so men often give up just before they help. A fixed time, a tick each day and a written date for judging the result keeps the trial fair.

                ## Milestones
                1. The medicine's name, the time to take it and what it is meant to change written down.
                2. A fixed daily time tied to an existing habit.
                3. Doses ticked off for three months.
                4. A date agreed with your clinician to judge whether it is working.

                ## Notes
                Some prostate medicines cause dizziness on standing at first. Never stop one without speaking to your clinician or pharmacist.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three months of daily doses ticked off with no more than two missed, and a review date agreed with a clinician."
                cadence: rolling
              tasks:
                - "Ask your pharmacist the best time of day for your prostate medicine"
                - "Write down what the medicine should change and by when"
                - "Take your prostate medicine and tick it off @recurring(daily)"
            - name: Testosterone treatment monitoring schedule
              description: |-
                ## Purpose
                Testosterone treatment needs regular blood tests, usually for testosterone itself, red blood cell levels and PSA, more often in the first year and then yearly. A schedule written out at the start means the tests happen on time and side effects are caught before they become a reason to stop.

                ## Milestones
                1. The tests your clinician wants, and when, written into a schedule.
                2. Each test booked at the right point after a dose or injection, as instructed.
                3. Results recorded beside symptoms such as energy, mood and libido.
                4. The first-year review attended and the long-term plan written down.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every monitoring blood test in the first year of treatment done on schedule, with results logged alongside symptoms."
                cadence: cyclic
              tasks:
                - "Ask your clinician which blood tests testosterone treatment needs and when"
                - "Write the test schedule for the first year into your calendar"
                - "Book the next monitoring blood test at the agreed interval @recurring(quarterly)"
                - "Log each result next to a one-line note on energy and mood"
            - name: Quarterly partner conversation on symptoms
              description: |-
                ## Purpose
                Urinary and sexual changes affect the person you share a bed with too, and partners often notice snoring, night trips or low mood before you do. A short, planned conversation every few months keeps it from becoming the subject nobody raises.

                ## Milestones
                1. A good time agreed for the conversation, away from bedtime.
                2. Both people's observations on sleep, mood and intimacy heard.
                3. Anything worth raising with a clinician written down.
                4. Four conversations held in a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four partner conversations held in a year, each ending with a note of anything to raise with a clinician."
                cadence: rolling
              tasks:
                - "Suggest a regular check-in to your partner and agree when"
                - "Ask what your partner has noticed about your sleep and mood"
                - "Hold the quarterly conversation and note anything to raise @recurring(quarterly)"
            - name: Yearly check of medicines that affect the bladder
              description: |-
                ## Purpose
                Several everyday medicines, including some antihistamines, decongestants, antidepressants and water tablets, can slow the stream, cause retention or affect erections. A yearly check of everything you take, with a pharmacist, catches a cold remedy or new prescription that is quietly making symptoms worse.

                ## Milestones
                1. Every prescription, over-the-counter remedy and supplement listed.
                2. A pharmacist asked which of them can affect urination or erections.
                3. Any problem medicine discussed with the prescriber, not stopped on your own.
                4. Safe alternatives for colds and hay fever noted for next time.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pharmacist review of all your medicines for urinary and sexual side effects completed within the last twelve months."
                cadence: cyclic
              tasks:
                - "List every medicine, remedy and supplement in the house that you take"
                - "Ask a pharmacist to review the list for urinary side effects @recurring(yearly)"
                - "Note which cold and hay fever remedies are safer for you"
            - name: What a PSA test can and cannot tell you
              description: |-
                ## Purpose
                The PSA test measures a protein made by the prostate, and it rises with cancer but also with an enlarged prostate, infection, recent ejaculation or a long bike ride. Understanding its limits before you take one, including the chance of a false alarm and of missing something, is what makes the decision to test genuinely informed.

                ## Milestones
                1. Your health service's patient information on PSA testing read in full.
                2. The main reasons PSA can be raised without cancer listed.
                3. The possible next steps after a raised result, such as MRI and biopsy, understood.
                4. Your own decision to test, wait or decline written down after talking it through.

                ## Notes
                Ask beforehand whether to avoid ejaculation and vigorous exercise for a couple of days before the test, as many labs advise.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: decision
                success_criteria: "A written PSA testing decision made after reading health service information and discussing it with a clinician."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your health service's information leaflet on the PSA test"
                - "List the non-cancer reasons a PSA result can be raised"
                - "Talk the decision through with your clinician"
                - "Write down whether you will test, wait or decline, and why"
            - name: Reading your PSA result in context
              description: |-
                ## Purpose
                Labs report PSA as a single number, but clinicians read it against your age, your prostate size and how fast it has changed. Knowing the questions to ask about age-related ranges, density and velocity helps you follow the reasoning behind any recommendation rather than reacting to the number alone.

                ## Milestones
                1. The reference range your lab or clinician uses for your age noted.
                2. PSA velocity and density explained in a sentence each.
                3. Your own results looked at against those ideas with a clinician.
                4. A list of questions to ask after any future result.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note on how your PSA is interpreted for your age, plus a question list for future results."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask which PSA range your clinician uses for men of your age"
                - "Read a urology charity's explanation of PSA velocity and density"
                - "Write four questions to ask after any new PSA result"
            - name: Understanding an enlarged prostate
              description: |-
                ## Purpose
                An enlarged prostate is very common after fifty and is not cancer, but it squeezes the urethra and causes a slow stream, hesitancy, urgency and night trips. Knowing how it develops, and which symptoms suggest something else, makes treatment discussions far easier.

                ## Milestones
                1. A reputable explanation of benign prostate enlargement read.
                2. The difference between storage symptoms and voiding symptoms understood.
                3. The symptoms that need checking for other causes listed.
                4. Your own symptoms sorted into those groups.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note sorting your own urinary symptoms into storage and voiding groups, with any red flags listed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a urology charity's guide to benign prostate enlargement"
                - "Write down the difference between storage and voiding symptoms"
                - "Sort your own symptoms into the two groups"
            - name: Getting a testosterone test done properly
              description: |-
                ## Purpose
                Testosterone levels swing through the day and drop after illness, poor sleep or heavy drinking, so a single afternoon test can wrongly suggest a deficiency. Learning how and when the test should be taken, and why a low result is usually repeated, avoids being treated on a bad number.

                ## Milestones
                1. The timing your lab wants for the sample confirmed, usually the morning.
                2. Anything that could lower the result, such as a recent illness, noted.
                3. The result and any repeat test recorded with times and dates.
                4. Symptoms written down alongside, because diagnosis rests on both.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A testosterone result taken at the time your lab specifies, repeated if low, and recorded alongside symptoms."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the practice what time of day the testosterone sample should be taken"
                - "List symptoms such as low energy, low libido or fewer morning erections"
                - "Book the blood test for the morning slot"
                - "Ask whether a low result will be repeated before any decision"
            - name: Pelvic floor technique checked by a physiotherapist
              description: |-
                ## Purpose
                Plenty of men doing pelvic floor exercises are actually squeezing their buttocks or holding their breath. One session with a pelvic health physiotherapist, or a careful self-check using a reputable guide, makes sure the daily routine trains the right muscles.

                ## Milestones
                1. A pelvic health physiotherapist found, or a reputable men's guide chosen.
                2. The correct contraction identified and practised.
                3. A routine of slow and fast holds written down at the right level for you.
                4. A follow-up check booked if symptoms do not improve in three months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Pelvic floor technique confirmed by a physiotherapist or a structured self-check, with a written routine."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search for a pelvic health physiotherapist who sees men"
                - "Book a session or choose a reputable men's pelvic floor guide"
                - "Write the routine of slow and fast holds you were given"
            - name: Erection problems as an early heart signal
              description: |-
                ## Purpose
                Erection problems often share a cause with heart disease, narrowed or stiff blood vessels, and can appear a few years before heart symptoms do. Treating new erection difficulties as a reason to check blood pressure, cholesterol and blood sugar turns an embarrassing subject into useful early warning.

                ## Milestones
                1. The link between erection problems and blood vessel health read from a reputable source.
                2. When the problem started and whether morning erections still happen noted.
                3. Blood pressure, cholesterol and blood sugar checks requested.
                4. The results and any agreed follow-up recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Blood pressure, cholesterol and blood sugar checked after a new erection problem, with results recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a health service page on erection problems and heart health"
                - "Note when the problem began and how often it happens"
                - "Ask your clinician for blood pressure, cholesterol and blood sugar checks"
            - name: Prostate MRI and biopsy explained
              description: |-
                ## Purpose
                Prostate MRI scans are now often done before any biopsy, and the report uses a 1 to 5 score for how suspicious an area looks. Knowing what the score means, the main biopsy routes and their trade-offs makes the conversation after a raised PSA much less bewildering.

                ## Milestones
                1. What an MRI score of 1 to 5 suggests written in plain words.
                2. The two main biopsy routes and their usual side effects noted.
                3. The questions to ask if a biopsy is offered listed.
                4. The note kept with your PSA log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain-language note on MRI scoring and biopsy routes, with a question list, filed with the PSA log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a urology charity's guide to prostate MRI scoring"
                - "Note the difference between the two main biopsy routes"
                - "Ask the agent to turn your notes into five questions for a urologist"
            - name: Bladder irritant trial over six weeks
              description: |-
                ## Purpose
                Caffeine, alcohol, fizzy drinks and artificial sweeteners make some men's bladders more urgent, while others notice no difference. Cutting one at a time for two weeks, with the symptom score before and after, tells you which ones matter for you instead of giving up everything.

                ## Milestones
                1. A starting symptom score and night-trip count recorded.
                2. One drink type cut or reduced for two weeks at a time.
                3. Scores and counts compared after each two-week block.
                4. A personal list of drinks to limit and drinks that are fine.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three two-week trials completed with scores compared, ending in a written list of drinks to limit."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record today's symptom score and last week's night-trip count"
                - "Swap caffeinated drinks for decaffeinated ones for two weeks"
                - "Repeat the trial with alcohol and then fizzy drinks"
                - "Write your list of drinks to limit and drinks that make no difference"
            - name: Choosing a treatment for an enlarged prostate
              description: |-
                ## Purpose
                Treatment for an enlarged prostate ranges from watchful waiting and lifestyle changes through two main groups of medicines to several kinds of procedure. Laying the options side by side with your clinician, against what bothers you most, leads to a choice you will stick with.

                ## Milestones
                1. The symptom that bothers you most, and how much, written down.
                2. The options your clinician offers listed with their main benefits and side effects.
                3. Effects on ejaculation and erections asked about for each option.
                4. A choice made and a date set to judge whether it is working.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded treatment choice for prostate enlargement, with the options compared and a review date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the urinary symptom that bothers you most and why"
                - "Ask your clinician to list the options suitable for you"
                - "Ask how each option affects ejaculation and erections"
                - "Record your choice and the date you will judge it"
            - name: Weighing testosterone replacement therapy
              description: |-
                ## Purpose
                Clinics advertising testosterone for tiredness and low drive have multiplied, but treatment suits men with a confirmed deficiency and matching symptoms, and it can affect fertility, red blood cells and the prostate. Weighing it carefully with your own clinician, rather than a sales consultation, protects you from a long-term commitment made on weak evidence.

                ## Milestones
                1. Two properly timed low results and your symptoms confirmed by a clinician.
                2. Other causes of tiredness and low libido, such as sleep, weight and mood, considered.
                3. Effects on fertility, blood counts and PSA monitoring explained to you.
                4. A decision recorded, with the monitoring plan if you go ahead.

                ## Notes
                If you may want children in future, say so before any testosterone treatment starts, because it can suppress sperm production.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on testosterone treatment, based on two properly timed results and a clinician discussion of risks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Gather your testosterone results with the time each sample was taken"
                - "List other possible causes of your symptoms to discuss"
                - "Ask your clinician about effects on fertility and red blood cells"
                - "Write down your decision and the monitoring plan"
            - name: Erectile dysfunction treatment options
              description: |-
                ## Purpose
                Tablets work for many men, but not all, and they are not safe alongside some heart medicines. A planned conversation covering tablets, devices, injections, counselling and changes to other medicines gives you a sequence to try rather than one prescription and silence.

                ## Milestones
                1. Your current medicines checked with a clinician for interactions with erection treatments.
                2. The options suitable for you listed in the order you will try them.
                3. A fair trial of the first option completed as instructed.
                4. A follow-up booked to move to the next option if needed.

                ## Notes
                Buy erection medicines only through a prescriber or registered pharmacy. Products sold online can contain undeclared ingredients.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A first erection treatment tried under clinical advice, with a follow-up booked to review it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List any heart or blood pressure medicines you take before the appointment"
                - "Ask your clinician which erection treatments are safe for you"
                - "Try the first option as many times as advised before judging it"
                - "Book the follow-up to review how it worked"
            - name: Toilet access plan for work and days out
              description: |-
                ## Purpose
                Knowing where the next toilet is changes how confidently a man with urgency travels, works and goes out. A short plan covering your commute, workplace and regular outings, plus a toilet access card or key where your country offers one, removes a daily source of anxiety.

                ## Milestones
                1. Toilets on your commute and regular routes noted.
                2. A conversation with your manager about access, if needed.
                3. Any accessible toilet key or card scheme in your country looked into.
                4. A small spare kit kept in a bag or the car.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan of toilets on regular routes, with a spare kit packed and any access card applied for."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Note the toilets on your commute and two regular outings"
                - "Check whether your country has an accessible toilet key or card scheme"
                - "Pack a small spare kit for the bag or car"
            - name: Vasectomy decision and clearance test
              description: |-
                ## Purpose
                Vasectomy is meant to be permanent, it does not work straight away, and men are usually asked for one or more semen samples months later to confirm it has worked. Planning the decision, the procedure, recovery and the clearance test together avoids the most common mistake: stopping contraception too early.

                ## Milestones
                1. The decision talked through with your partner and the permanence accepted.
                2. A provider chosen and the pre-procedure consultation attended.
                3. Recovery days off work arranged.
                4. The clearance test done and the result confirmed in writing before stopping other contraception.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written all-clear from the clearance test received before other contraception is stopped."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Talk through with your partner whether you are certain about no more children"
                - "Find out how vasectomy is provided in your area and any waiting time"
                - "Arrange two or three quiet days after the procedure"
                - "Put the clearance test date in the calendar the day you book"
            - name: Choosing where to get a PSA test
              description: |-
                ## Purpose
                PSA tests are available through your practice, some pharmacies, private clinics and home finger-prick kits, and they are not equal. Where you test decides whether someone explains the result, whether it is recorded in your main record and whether a raised number leads anywhere.

                ## Milestones
                1. The routes available to you listed with their cost.
                2. Whether each route includes counselling before and after the test noted.
                3. How each result would reach your main health record checked.
                4. A route chosen and written in the PSA log.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen testing route recorded in the PSA log, with the reasons and how results reach your record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the PSA testing routes open to you and their cost"
                - "Check which include a clinician explaining the result"
                - "Ask how a private or home kit result would reach your practice record"
                - "Write the chosen route in the PSA log"
            - name: Hair loss treatment decision
              description: |-
                ## Purpose
                Hair loss treatments range from doing nothing to topical solutions, tablets and transplants, and one common tablet also lowers PSA readings and can affect sexual function. Making the decision with the facts, and noting it in your record, avoids a misleading PSA result years later.

                ## Milestones
                1. Your goals for treatment, and how much you mind the hair loss, written down.
                2. Options and their side effects compared with a pharmacist or doctor.
                3. Any effect on PSA testing noted in your PSA log if you start a tablet.
                4. Progress photos taken in the same light at the start.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on hair loss treatment, with any PSA effect noted in the PSA log."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you would want treatment to achieve"
                - "Ask a pharmacist about the side effects of each option"
                - "Note in your PSA log if you start a tablet that lowers PSA"
                - "Photograph your hairline in the same light and spot @recurring(quarterly)"
            - name: Preparing for your first urology appointment
              description: |-
                ## Purpose
                First urology appointments are often short, and men leave having forgotten half their questions. Arriving with your symptom score, bladder diary, PSA results and medicine list, and knowing you may be asked for a urine sample and an examination, makes the visit count.

                ## Milestones
                1. Symptom score, bladder diary, PSA log and medicine list gathered.
                2. Your top three questions written in priority order.
                3. Practical points checked: a full bladder for a flow test, someone to come with you.
                4. Notes taken during the appointment and the next steps written down.

                ## Notes
                Start from the **Meeting notes** template to record what the urologist says.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The urology appointment attended with prepared documents, and next steps recorded the same day."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the appointment letter for any tests needing a full bladder"
                - "Gather your symptom score, bladder diary, PSA log and medicine list"
                - "Write your three most important questions"
                - "Record the urologist's next steps on the day"
            - name: Getting ready for a prostate MRI scan
              description: |-
                ## Purpose
                Before a prostate MRI you may be asked about metal implants, kidney function and claustrophobia, and some centres give a bowel preparation or an injection to reduce movement. Sorting these out in advance avoids a cancelled scan and a longer wait for answers.

                ## Milestones
                1. The scan centre's instructions read and any preparation noted.
                2. Implants, pacemakers or kidney problems declared on the safety form.
                3. Help with claustrophobia arranged if needed.
                4. The date the report is expected, and who will discuss it, confirmed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The prostate MRI completed on its first booking, with the date for discussing the report confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the scan centre's preparation instructions"
                - "Fill in the safety form listing any implants or kidney problems"
                - "Ask about options if you find enclosed scanners difficult"
                - "Confirm when and how the report will be discussed with you"
            - name: Prostate biopsy preparation and recovery week
              description: |-
                ## Purpose
                A prostate biopsy usually means antibiotics, possibly stopping blood thinners on advice, a sore few days and blood in urine or semen for weeks. Planning the week, including the signs of infection that need urgent help, makes it far less alarming.

                ## Milestones
                1. Instructions on antibiotics and any blood thinners confirmed with the team.
                2. A lift home and two quieter days arranged.
                3. The signs of infection or retention that need urgent care written on a card.
                4. The date and method for receiving results confirmed.

                ## Notes
                Never stop a blood thinner without explicit instructions from the team managing it.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The biopsy done with instructions followed, an infection warning card in place and the results date known."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the team what to do about any blood thinners you take"
                - "Arrange a lift home and two lighter days after the biopsy"
                - "Write the infection and retention warning signs on a card"
                - "Confirm how and when you will receive the results"
            - name: Aortic aneurysm screening at 65
              description: |-
                ## Purpose
                Some health services invite men for a one-off ultrasound of the main artery in the abdomen around age 65, because a swollen section rarely causes symptoms before it becomes dangerous. Making sure the invitation arrives, or asking for it if you are older and missed it, takes ten minutes.

                ## Milestones
                1. Whether your health service offers aortic aneurysm screening, and at what age, checked.
                2. The scan booked or a self-referral made if you missed the invitation.
                3. The result recorded on your baseline page.
                4. Any follow-up scan dates added to the calendar.

                ## Notes
                A family history of aortic aneurysm is worth mentioning to your clinician at any age.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Aortic aneurysm screening completed where offered, with the result and any follow-up dates recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your health service offers aortic aneurysm screening for men"
                - "Book the scan or ask how to self-refer if you missed the invitation"
                - "Write the result on your baseline page"
            - name: Urine flow test appointment
              description: |-
                ## Purpose
                Flow tests measure how fast and how completely you empty your bladder, usually followed by a quick bladder scan for what is left behind. They need a comfortably full bladder on arrival, which is harder to time than it sounds, so a little planning saves a wasted trip.

                ## Milestones
                1. The clinic's instructions on drinking beforehand read.
                2. Travel timed so you arrive with a comfortably full bladder.
                3. Your bladder diary brought along.
                4. The flow and residual results written down.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The flow test completed on the first attempt, with flow and residual volume results recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the clinic's instructions on how much to drink beforehand"
                - "Time your travel so you arrive with a comfortably full bladder"
                - "Bring your bladder diary to the appointment"
                - "Ask for the flow and residual volume results and note them"
            - name: Earlier PSA conversation for Black men
              description: |-
                ## Purpose
                Black men of African or Caribbean heritage have a markedly higher risk of prostate cancer, and it can appear younger, so several charities and some guidelines suggest starting the conversation from around 45. Raising it deliberately, rather than waiting for symptoms, gives you the choice early.

                ## Milestones
                1. The guidance your health service or a prostate charity gives for Black men read.
                2. Family history of prostate cancer checked with relatives.
                3. An appointment booked to discuss PSA testing from your mid-forties.
                4. Your decision and the agreed testing interval recorded.

                ## Notes
                Bring a printout of the charity guidance if your clinician has not raised it. Some practices are not yet familiar with it.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A PSA testing decision made with a clinician from your mid-forties, with the agreed interval recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a prostate charity's guidance for Black men"
                - "Ask relatives whether anyone has had prostate cancer"
                - "Book an appointment to discuss starting PSA testing"
                - "Record the decision and interval in your PSA log"
            - name: Men in families with a BRCA variant
              description: |-
                ## Purpose
                Men who carry a BRCA2 variant, and to a lesser degree BRCA1, have a higher risk of aggressive prostate cancer and of male breast cancer. If a relative has tested positive, finding out your own status and the monitoring it implies is a decision worth making on purpose, with a genetics service.

                ## Milestones
                1. The relative's result and the exact variant name obtained, with their permission.
                2. A referral to a genetics service or counsellor requested.
                3. The implications of a positive or negative result for you and your children understood.
                4. A decision on testing made and any monitoring plan written down.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on BRCA testing made after genetic counselling, with any resulting monitoring plan recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the relative for a copy of their genetic result letter"
                - "Ask your clinician for a referral to a genetics service"
                - "List questions about what a result would mean for your children"
                - "Write down your testing decision and any monitoring plan"
            - name: Prostate testing decisions after seventy
              description: |-
                ## Purpose
                After seventy the balance of PSA testing shifts: slow-growing cancers may never cause harm, while biopsies and treatment carry more risk. Deciding with your clinician whether to continue, space out or stop testing, based on your overall health rather than age alone, saves worry and unnecessary procedures.

                ## Milestones
                1. Your PSA history and current health summarised for the discussion.
                2. The pros and cons of continuing testing at your age explained.
                3. A decision made to continue, space out or stop routine testing.
                4. The symptoms that should still prompt a check written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on continuing, spacing out or stopping PSA testing, with the symptoms that still warrant a check."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your PSA history on one side of paper"
                - "Ask your clinician whether continued testing still helps you"
                - "Write down the decision and the symptoms that should still prompt a check"
            - name: Night-time toilet trips and falls prevention
              description: |-
                ## Purpose
                Night-time trips to the toilet are a common cause of falls in older men, especially in the dark, half awake, or after a medicine that lowers blood pressure. Lighting the route, clearing it and knowing your options for the worst nights makes each trip safer.

                ## Milestones
                1. The route from bed to toilet walked and hazards removed.
                2. Plug-in or motion lights fitted along the route.
                3. A bedside urinal or commode considered for bad nights.
                4. Dizziness on standing at night mentioned to your clinician.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A lit, clear route from bed to toilet in place, with any dizziness on standing raised with a clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Walk the route to the toilet in the dark and note every hazard"
                - "Fit motion-sensor lights along the route"
                - "Ask your clinician about dizziness when you get up at night"
                - "Check the night lights and the route are still clear @recurring(monthly:28)"
            - name: Encouraging a father or partner to see a doctor
              description: |-
                ## Purpose
                Fathers, partners and brothers are often the last to book an appointment about urinary or sexual symptoms, and the first sign is something a family member notices. A respectful plan, with information he can read privately and practical help booking, works far better than nagging.

                ## Milestones
                1. The change you have noticed described in a sentence, without judgement.
                2. Reputable information chosen that he can read in private.
                3. A calm moment picked to raise it once.
                4. Practical help offered, such as booking or transport, if he wants it.

                ## Notes
                It is his decision. The aim is to make booking easy, not to take it over.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "The concern raised once in private, with information and practical help offered."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write one sentence describing the change you have noticed"
                - "Choose a reputable leaflet or web page he can read privately"
                - "Raise it once at a calm moment and offer to help with booking"
            - name: Travelling with urinary symptoms
              description: |-
                ## Purpose
                Long flights, coach trips and long drives are hard on men with urgency or a slow stream, and a change in drinks, time zones or medicines can bring on retention. Planning seats, stops, supplies and what to do abroad if you cannot pass urine makes trips enjoyable again.

                ## Milestones
                1. Aisle seats and regular stops built into the plan.
                2. Medicines and a spare supply packed in hand luggage.
                3. Cold and travel sickness remedies checked for urinary side effects.
                4. Where to get urgent help at the destination noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A travel checklist covering seats, stops, spare medicines and urgent help at the destination used on a trip."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book an aisle seat and plan stops every two hours on road trips"
                - "Pack prostate medicines plus a week's spare in hand luggage"
                - "Check travel sickness tablets with a pharmacist for urinary side effects"
            - name: Chronic prostatitis flare plan
              description: |-
                ## Purpose
                Chronic prostatitis, often called chronic pelvic pain syndrome, causes pelvic, genital or urinary pain that comes and goes for months, and it is frequently not an infection. A flare plan built with your clinician, plus a diary of what came before each flare, makes the bad weeks shorter and more predictable.

                ## Milestones
                1. The diagnosis and the treatments already tried written down.
                2. A flare diary covering symptoms, sitting, cycling, stress and sex kept for two months.
                3. A written plan for the first days of a flare agreed with your clinician.
                4. Referral to pelvic health physiotherapy discussed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A flare plan agreed with a clinician and two months of flare diary entries recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the treatments you have already tried and how they went"
                - "Start a flare diary covering symptoms, sitting, cycling and stress"
                - "Ask your clinician to help write a plan for the first days of a flare"
                - "Look back over the flare diary for patterns @recurring(monthly:9)"
            - name: Active surveillance schedule for prostate cancer
              description: |-
                ## Purpose
                Active surveillance is the usual approach for low-risk prostate cancer: regular PSA tests, repeat MRI scans and sometimes repeat biopsies, with treatment only if things change. It works only if the schedule is kept, so writing it out and owning it is the heart of the project.

                ## Milestones
                1. The surveillance protocol from your team written as a dated schedule.
                2. Each PSA, MRI and review booked before it falls due.
                3. Results logged against the thresholds that would trigger a discussion of treatment.
                4. A named contact for questions between appointments recorded.

                ## Notes
                Treatment decisions, if they come, belong with your urology team. This project keeps the monitoring on schedule.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every surveillance PSA, scan and review in a year done on schedule, with results logged against the agreed triggers."
                cadence: cyclic
              tasks:
                - "Ask your team for the surveillance schedule in writing"
                - "Write down the changes that would prompt a treatment discussion"
                - "Book the next surveillance PSA test before it falls due @recurring(quarterly)"
                - "Confirm the date of the next surveillance MRI @recurring(yearly)"
            - name: Second opinion on a prostate MRI or biopsy
              description: |-
                ## Purpose
                Second opinions on prostate MRI reports and biopsy slides are a routine part of specialist care, and a different reader occasionally changes the grade or the plan. Knowing when to ask, and how to send the images and reports, means a big decision rests on the best available reading.

                ## Milestones
                1. The specific question for the second opinion written in a sentence.
                2. Copies of the MRI images, reports and biopsy results requested.
                3. A specialist centre or second urologist chosen.
                4. The second opinion received and discussed with your main team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second opinion on the MRI or biopsy received and discussed with your main team, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the exact question you want a second opinion on"
                - "Request copies of the MRI images, reports and biopsy results"
                - "Ask your urologist which centres they would suggest"
                - "Ask the agent to summarise both opinions side by side for your next appointment"
            - name: Rising PSA after a clear biopsy
              description: |-
                ## Purpose
                When PSA keeps rising after an MRI or biopsy found nothing worrying, men are often left unsure whether they are being watched or forgotten. Agreeing a written monitoring plan, with the change that would trigger another scan, replaces open-ended worry with a clear next step.

                ## Milestones
                1. Your PSA history and previous MRI and biopsy results summarised.
                2. The monitoring interval agreed with your urologist or practice.
                3. The PSA level or rate of rise that would prompt another scan written down.
                4. Who is responsible for ordering each test confirmed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written monitoring plan after a clear biopsy, naming the interval, the trigger for re-scanning and who orders each test."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Summarise your PSA history and scan and biopsy results"
                - "Ask whether the practice or the urology team is now responsible for monitoring"
                - "Write down the interval and the result that would trigger another scan"
            - name: Intermittent self-catheterisation routine
              description: |-
                ## Purpose
                Intermittent self-catheterisation, taught by a continence or urology nurse, lets men with chronic retention empty the bladder themselves several times a day. A steady routine, reliable supplies and knowing the signs of infection keep it a manageable part of life rather than a constant worry.

                ## Milestones
                1. Training completed with a nurse and the technique written down.
                2. A daily schedule agreed with the nurse and in use.
                3. A supply reorder system set up with a delivery service or pharmacy.
                4. The signs of infection and who to call written on a card.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A self-catheterisation routine kept for a month without running short of supplies, with an infection card in place."
                cadence: rolling
              tasks:
                - "Write down the schedule your continence nurse agreed"
                - "Set up repeat supply orders with a delivery service or pharmacy"
                - "Write the infection warning signs and contact number on a card"
                - "Check supply levels and reorder catheters @recurring(monthly:3)"
            - name: Men's health session at work or a club
              description: |-
                ## Purpose
                Workplaces, sports clubs and community groups reach men who rarely see a doctor, and a short session from someone who has been through prostate tests or a men's health check makes the subject ordinary. Organising one, with a charity speaker or reputable leaflets, can prompt several men to book an appointment.

                ## Milestones
                1. A host agreed: employer, club committee or community group.
                2. A charity speaker or reputable materials arranged.
                3. A date and a twenty-minute slot fixed.
                4. The session held and signposting information handed out.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A men's health session held for a group, with a charity speaker or reputable materials and signposting handed out."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your employer or club whether they would host a short session"
                - "Contact a prostate or men's health charity about speakers or materials"
                - "Fix a date and a twenty-minute slot"
                - "Ask the agent to draft a short invitation that keeps the tone light"
---

# Men's Health & Prostate Care

This area is for men from their forties onwards, and the partners and adult children who nudge them, covering the prostate, the bladder, testosterone, erections and the checks that are easy to postpone. It starts with the foundations (a one-page baseline, a personal prostate risk profile, an informed decision about PSA testing and a urinary symptom score), then the routines that keep things monitored, the knowledge that makes results readable, the decisions about treatments and testing routes, the appointments that need preparing for, the situations that change the picture for particular men, and finally the specialist work of active surveillance and long-term catheter care.

What repeats is a monthly testicular self-check, a quarterly urinary symptom re-score, the yearly men's health review with its PSA test where agreed, daily pelvic floor and medicine routines, and a weekly look at night-time trips to the toilet. The Metrics log, Habit tracker and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
