---
id: physical-health.menopause-perimenopause-care
name: Menopause & Perimenopause Care
description: "Symptom tracking, a well-prepared first appointment, HRT and non-hormonal decisions, bone and heart checks, and workplace adjustments for the perimenopause and menopause years."
category: personal
version: 1.0.0
tags: [physical-health, menopause-perimenopause-care, everyone, knowledge-worker, perimenopause, hrt, workplace-adjustments]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - meeting-notes
    - habit-tracker
    - training-program
    - sleep-review
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Menopause & Perimenopause Care
          description: "Navigating perimenopause and menopause: symptom tracking, HRT decisions, bone and heart health, and conversations with clinicians and employers."
          projects:
            - name: Two-month perimenopause symptom baseline
              description: |-
                ## Purpose
                Perimenopause symptoms come and go with the cycle, so a single bad week tells a clinician very little. Scoring flushes, sleep, mood, joint aches and periods every evening for eight weeks shows the real pattern and turns a vague sense of not feeling like yourself into evidence that shortens the first appointment.

                ## Milestones
                1. A daily log with columns for flushes, night sweats, sleep, mood, joint pain, periods and anything else you notice.
                2. Eight weeks of entries with no more than a few days missing.
                3. The three most disruptive symptoms named, with how often each happened.
                4. A one-page summary ready to hand to your clinician.

                ## Notes
                Start from the **Metrics log** template. Scoring each symptom from 0 to 3 is quicker than writing notes and far easier to compare later.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Eight weeks of daily symptom scores and a one-page summary of the three most disruptive symptoms are ready to share."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create a symptom log from the metrics log template"
                - "Choose the eight to ten symptoms you will score each day"
                - "Score each symptom from 0 to 3 every evening for eight weeks"
                - "Write a one-page summary of the top three symptoms and how often they happen"
            - name: Period and bleeding pattern record
              description: |-
                ## Purpose
                Cycles often shorten, lengthen, skip or get heavier through perimenopause, and the dates matter: twelve months without a period is how menopause is usually confirmed, and some bleeding patterns need checking. A running record of every bleed, with dates and flow, answers both questions without relying on memory.

                ## Milestones
                1. Every bleed of the past six months reconstructed as far as apps, diaries and memory allow.
                2. Each new bleed recorded with start date, length and a heaviness score.
                3. The date of your last period always visible at the top of the record.
                4. Any bleeding that seems unusual flagged and taken to your clinician.

                ## Notes
                Bleeding after twelve months with no periods should always be reported to a clinician promptly, even if it is light.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bleeding record covering at least six months, with the date of the last period shown at the top, is kept up to date."
                cadence: rolling
              tasks:
                - "Check your phone, diary or period app for the last six months of bleeding dates"
                - "Set up a record with start date, length and heaviness columns"
                - "Add this month's bleeding dates and flow to the record @recurring(monthly:3)"
                - "Count the months since your last period whenever a long gap starts"
            - name: Menopause rating scale scored before treatment
              description: |-
                ## Purpose
                Standard questionnaires such as the Menopause Rating Scale or the Greene Climacteric Scale score symptoms the same way every time, which makes it possible to tell later whether a treatment actually helped. Completing one now, before anything changes, gives you a starting number to compare against at three months and at one year.

                ## Milestones
                1. One recognised menopause symptom questionnaire chosen.
                2. The questionnaire completed honestly, with the total and section scores recorded.
                3. The date and scores stored where you will find them at your review.
                4. A repeat planned for three months after any treatment starts.

                ## Notes
                Use the same questionnaire every time. Switching scales makes the scores impossible to compare.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline score on one named menopause questionnaire is recorded, with a repeat date set."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find a printable version of a recognised menopause symptom questionnaire"
                - "Complete it in one sitting on an ordinary day"
                - "Record the total and section scores with today's date"
                - "Put a calendar reminder to repeat it three months after starting treatment"
            - name: Personal and family history sheet for HRT decisions
              description: |-
                ## Purpose
                Clinicians weigh the same handful of facts whenever HRT comes up: blood clots, breast or womb cancer, migraine with aura, liver disease, heart disease and stroke, in you and in close relatives. Gathering them on one sheet before the appointment means the time goes on your options instead of trying to remember which aunt had what.

                ## Milestones
                1. Your own history of clots, cancers, migraine, liver, heart and stroke written down with dates.
                2. Close relatives asked about the same conditions and the answers noted.
                3. Current medicines and supplements listed beside the history.
                4. The sheet taken to your menopause appointment and any gaps the clinician raises noted.

                ## Notes
                Relatives may not know or may not want to say. Write what you know and mark the rest as unknown rather than guessing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page history sheet covering the conditions that affect HRT choices, for you and close relatives, is ready before your appointment."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your own history of clots, cancers, migraine, liver, heart and stroke"
                - "Ask a parent or sibling about the same conditions in the family"
                - "Add your current medicines and supplements to the sheet"
                - "Keep the sheet with your appointment notes for every menopause review"
            - name: Unexpected bleeding warning signs card
              description: |-
                ## Purpose
                Most bleeding changes in perimenopause are part of the transition, but a few patterns need prompt checking: any bleed after twelve months without periods, bleeding after sex, repeated bleeding between periods, and very heavy bleeding that leaves you exhausted or dizzy. A small card listing them, with who to call, removes the temptation to wait and see.

                ## Milestones
                1. The bleeding patterns your clinician wants reported listed on one card.
                2. Contact details for your practice and the out-of-hours service written beside them.
                3. A copy kept on your phone and one at home.
                4. The card checked against current advice once a year.

                ## Notes
                Ask your clinician which bleeding they want to hear about if you are on HRT, because the expected pattern differs between types of HRT.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A bleeding warning card with your clinician's reporting rules and contact numbers is saved on your phone and kept at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down the bleeding patterns that need prompt checking"
                - "Ask your clinician which bleeding on HRT they want to hear about"
                - "Save the card as a photo on your phone and print a copy"
                - "Check the card still matches your treatment and advice @recurring(yearly)"
            - name: Preparing for your first menopause appointment
              description: |-
                ## Purpose
                Ten-minute appointments are common, and menopause covers symptoms, history, contraception and treatment choices all at once. Arriving with a symptom summary, a history sheet and three questions in priority order gets a decision made in one visit instead of three, and asking for a longer or double appointment is always worth trying.

                ## Milestones
                1. A longer appointment requested, or a dedicated menopause clinic slot booked.
                2. Your symptom summary, bleeding record and history sheet printed or on your phone.
                3. Three questions written in priority order.
                4. The clinician's plan, any prescriptions and the review date written down before you leave.

                ## Notes
                Start from the **Meeting notes** template. Bringing a partner or friend to take notes is common and usually welcome.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first menopause appointment has happened, with the agreed plan and review date recorded in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the practice whether a longer or menopause-specific appointment is available"
                - "Gather the symptom summary, bleeding record and history sheet"
                - "Write your three most important questions in order"
                - "Record the agreed plan and next review date the same day"
            - name: Finding a clinician with menopause training
              description: |-
                ## Purpose
                Menopause training varies widely among general clinicians, and most practices have one or two people with a particular interest. Knowing who they are, or finding an accredited practitioner through a national menopause society register, saves months of appointments with someone less confident about prescribing.

                ## Milestones
                1. Your practice asked whether any clinician has a special interest or training in menopause.
                2. A national menopause society register checked for accredited practitioners near you.
                3. Public and private options listed with waiting times and costs.
                4. A decision made on who you will see, recorded with their contact details.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A named clinician with menopause training is chosen and an appointment booked, with the reason for the choice recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask reception which clinician has a special interest in menopause"
                - "Search your national menopause society's practitioner register"
                - "Note waiting times and costs for two public or private options"
                - "Book with the clinician you chose"
            - name: Contraception plan until periods stop for good
              description: |-
                ## Purpose
                Pregnancy is still possible during perimenopause, and HRT is not a contraceptive. Clinicians usually advise continuing contraception for a set time after the last period, depending on age, so agreeing a plan now avoids both an unplanned pregnancy and staying on a method years longer than needed.

                ## Milestones
                1. Your current contraception and how it affects your bleeding pattern noted.
                2. Your clinician's advice on how long to continue contraception recorded.
                3. A method chosen that works alongside HRT if you start it.
                4. A date or age written down for reviewing whether contraception can stop.

                ## Notes
                Some hormonal methods hide or change periods, which makes it harder to know when menopause has happened. Ask how your clinician will decide.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written contraception plan with a review date for stopping is agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write down your current contraception and when you started it"
                - "Ask your clinician how long you should continue contraception"
                - "Ask whether your method can be combined with HRT"
                - "Review the contraception stop date with your clinician @recurring(yearly)"
            - name: Shortlist of reliable menopause information sources
              description: |-
                ## Purpose
                Online menopause content ranges from national society guidance to supplement adverts dressed as advice, and contradictory claims make every decision harder. A short list of four or five trusted sources, chosen once, gives you somewhere to check any new claim before it changes what you do.

                ## Milestones
                1. Four or five sources chosen, including a national menopause society and a public health service.
                2. Each source's date of last update checked.
                3. A rule written for testing new claims, such as checking them against two listed sources.
                4. Sources that also sell products marked as such.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved list of four or five trusted menopause sources, with a written rule for checking new claims, exists."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Bookmark your national menopause society's patient information pages"
                - "Add your public health service's menopause pages to the same folder"
                - "Check when each source was last updated"
                - "Write a one-line rule for testing claims you see on social media"
            - name: Weekly menopause symptom check-in
              description: |-
                ## Purpose
                Once the baseline is done, daily scoring becomes a chore most people drop. A five-minute weekly check-in on the same symptoms keeps the record going with far less effort and still shows whether things are improving, worsening or shifting.

                ## Milestones
                1. The symptom list from your baseline carried into a weekly format.
                2. A weekly score recorded for at least twelve weeks in a row.
                3. Any new symptom added the week it appears.
                4. Unusual weeks marked with a likely cause, such as illness, travel or a treatment change.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive weekly symptom scores are recorded on the same scale as the baseline."
                cadence: rolling
              tasks:
                - "Copy your baseline symptom list into a weekly check-in sheet"
                - "Score the past week's symptoms on Sunday evening @recurring(weekly:sun)"
                - "Add any new symptom the week you first notice it"
                - "Mark weeks affected by illness, travel or a treatment change"
            - name: Monthly symptom trend review
              description: |-
                ## Purpose
                Week-to-week scores are noisy, and it is easy to feel nothing has changed when the month as a whole has improved. A short monthly review of the check-ins turns them into a trend and a single sentence you can bring to any appointment.

                ## Milestones
                1. A monthly average for each tracked symptom.
                2. A one-sentence summary of the month written down.
                3. Any symptom worsening for two months running flagged for your clinician.
                4. Twelve monthly summaries kept together for the annual review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly symptom summary is written each month, with any symptom worsening for two months flagged."
                cadence: rolling
              tasks:
                - "Ask the agent to turn the month's check-ins into averages and a one-sentence summary @recurring(monthly:9)"
                - "Flag any symptom that has worsened two months running"
                - "File the summary with your previous months"
                - "Bring the latest three summaries to your next appointment"
            - name: Daily HRT routine
              description: |-
                ## Purpose
                Missed or irregular HRT is a common reason for breakthrough bleeding and returning symptoms, and patches, gels and sprays each have small rules about timing and where to apply them. Tying the routine to something you already do every day, and ticking it off, makes it automatic within a few weeks.

                ## Milestones
                1. The application or tablet time tied to an existing daily habit.
                2. The leaflet's instructions on application sites and timing read and noted.
                3. A tick-off method in place, on paper, in an app or on a calendar.
                4. A plan for missed doses taken from the leaflet or your pharmacist.

                ## Notes
                If you use two products, such as an oestrogen gel and a separate progestogen, track both on the same sheet.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "HRT is taken or applied as prescribed on at least 27 of 30 days, recorded on a tick-off sheet."
                cadence: rolling
              tasks:
                - "Read the leaflet section on timing, application sites and missed doses"
                - "Choose the daily habit your HRT will follow, such as brushing your teeth"
                - "Take or apply your HRT as prescribed and tick it off @recurring(daily)"
                - "Ask your pharmacist what to do if you miss a dose"
            - name: HRT prescription and supply reorders
              description: |-
                ## Purpose
                HRT products have had repeated supply shortages, and running out mid-month can bring symptoms back within days. Ordering repeats with a week of margin, and knowing an equivalent your clinician would accept, keeps treatment steady.

                ## Milestones
                1. Every HRT item on repeat prescription, with the reorder gap known.
                2. A reorder date set at least a week before supplies run out.
                3. An acceptable equivalent product agreed with your clinician or pharmacist for shortages.
                4. Prescription costs reviewed, including any prepayment scheme your country offers.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six months pass with no gap in HRT supply, and an agreed shortage alternative is recorded."
                cadence: rolling
              tasks:
                - "Count how many days of each HRT item you have left"
                - "Request your HRT repeat prescription with a week's margin @recurring(monthly:18)"
                - "Ask your pharmacist which equivalent product could be used in a shortage"
                - "Check whether a prescription prepayment scheme would save money"
            - name: Annual HRT review with your clinician
              description: |-
                ## Purpose
                Guidance in most countries suggests reviewing HRT at least once a year: whether it still works, whether side effects have appeared, and whether anything in your health or family history has changed the balance. Preparing with a year of summaries keeps the review short and the decision yours.

                ## Milestones
                1. The annual review booked at least a month ahead.
                2. Your monthly summaries, bleeding record and any new history brought together.
                3. Blood pressure and weight checked at or before the review.
                4. The decision to continue, change or stop recorded with the next review date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "An HRT review has happened within the last 13 months, with the decision and next review date recorded."
                cadence: cyclic
              tasks:
                - "Book your annual HRT review a month ahead @recurring(yearly)"
                - "Gather a year of monthly summaries and the bleeding record"
                - "Update your history sheet with anything new in you or your family"
                - "Record the decision and next review date after the appointment"
            - name: Twice-weekly strength training for midlife muscle and bone
              description: |-
                ## Purpose
                Muscle and bone density both fall faster in the years around menopause as oestrogen drops, and resistance training is one of the few things shown to slow both. Two short sessions a week, progressing slowly, protect strength for daily life and often help with joint aches and mood.

                ## Milestones
                1. Two fixed weekly slots chosen for strength sessions.
                2. A beginner programme covering legs, back, chest and grip written down.
                3. Eight weeks of sessions completed with weights or repetitions logged.
                4. Loads increased at least twice since the start.

                ## Notes
                Start from the **Training program** template. If you have joint problems or a diagnosis of osteoporosis, ask a physiotherapist to check the exercises first.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Sixteen strength sessions over eight weeks are logged, with at least two load increases."
                cadence: rolling
              tasks:
                - "Choose two fixed weekly slots for strength sessions"
                - "Set up a beginner programme from the training program template"
                - "Complete a strength session and log the weights @recurring(weekly:tue,fri)"
                - "Increase one load when every set feels manageable"
            - name: Daily pelvic floor routine
              description: |-
                ## Purpose
                Falling oestrogen thins pelvic tissues, and leaks when coughing, running or laughing become more common through the menopause years. A few minutes of correctly done pelvic floor exercises each day reduces leaks for many people and is worth starting before problems appear.

                ## Milestones
                1. The correct technique learned from a reliable guide or a pelvic health physiotherapist.
                2. Exercises done daily for twelve weeks.
                3. Leaks or urgency noted before and after the twelve weeks.
                4. A referral asked for if nothing has improved after three months.

                ## Notes
                Start from the **Habit tracker** template. A pelvic health physiotherapist can check your technique, and many people discover they have been doing it wrong for years.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve weeks of daily pelvic floor exercise are ticked off, with leak frequency compared before and after."
                cadence: rolling
              tasks:
                - "Learn the technique from a pelvic health guide or app"
                - "Note how often leaks or urgency happen this week"
                - "Do your pelvic floor set and tick it off @recurring(daily)"
                - "Ask for a pelvic health physiotherapy referral if nothing improves by twelve weeks"
            - name: Night sweats and sleep record
              description: |-
                ## Purpose
                Night sweats break sleep several times a night for many people in perimenopause, and the tiredness they cause is often mistaken for depression or blamed on age. Recording wake-ups, sweats and how rested you feel, and comparing month with month, shows whether treatment or bedroom changes are working.

                ## Milestones
                1. Wake-ups, night sweats and a morning rested score recorded each day for a month.
                2. Bedroom temperature, bedding and evening alcohol noted alongside.
                3. A monthly comparison of this month with the last.
                4. Persistent poor sleep raised with your clinician with the record in hand.

                ## Notes
                Start from the **Sleep review** template. If snoring, gasping or restless legs are part of the picture, mention them, because they need a different kind of assessment.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Nightly sweat and wake-up records are compared month on month, with each comparison written down."
                cadence: rolling
              tasks:
                - "Set up a sleep record from the sleep review template"
                - "Record wake-ups, sweats and a rested score each morning for a month"
                - "Compare this month's sleep record with last month's @recurring(monthly:12)"
                - "Bring the record to your next menopause appointment"
            - name: Quarterly mood, anxiety and brain fog check
              description: |-
                ## Purpose
                Low mood, new anxiety, irritability and trouble finding words are among the most common perimenopause symptoms, and they are often treated as separate problems. A short structured check every quarter helps you notice changes early and gives your clinician something concrete if mood is getting worse.

                ## Milestones
                1. A short mood and anxiety questionnaire chosen, ideally one your practice uses.
                2. Scores and a few lines on concentration and memory recorded each quarter.
                3. Any worsening across two quarters raised with your clinician.
                4. A plan in place for who you would contact if mood dropped sharply.

                ## Notes
                If you have thoughts of harming yourself, contact your doctor, an urgent mental health line or emergency services the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly mood and concentration scores are recorded, with any worsening discussed with a clinician."
                cadence: rolling
              tasks:
                - "Choose a short mood and anxiety questionnaire your practice recognises"
                - "Complete the mood, anxiety and concentration check @recurring(quarterly)"
                - "Write down who you would contact if mood dropped sharply"
                - "Raise two quarters of worsening scores at your next appointment"
            - name: Annual bone and heart check after menopause
              description: |-
                ## Purpose
                After menopause the risks of heart disease and osteoporosis rise steadily, and both stay quiet until something happens. A yearly check covering blood pressure, cholesterol, weight and a fracture risk assessment, asked for by name, makes sure the lost protection of oestrogen is noticed in time.

                ## Milestones
                1. Blood pressure, weight and waist measured and recorded each year.
                2. A cholesterol test booked at the interval your clinician recommends.
                3. A fracture risk assessment asked for and the result noted.
                4. Any follow-up, such as a bone density scan referral, recorded with a date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Blood pressure, cholesterol and fracture risk results are recorded for this year, with any follow-up dated."
                cadence: cyclic
              tasks:
                - "Ask your clinician whether a fracture risk assessment has been done"
                - "Book your yearly blood pressure, weight and cholesterol check @recurring(yearly)"
                - "Record the results beside last year's"
                - "Note any referral that follows, such as a bone density scan"
            - name: Monthly vaginal and urinary symptom check
              description: |-
                ## Purpose
                Vaginal dryness, pain during sex, urgency and repeat urine infections tend to start later than flushes and get worse rather than better over time, yet many people never mention them. A monthly check makes them part of the record so they get treated rather than endured.

                ## Milestones
                1. Dryness, discomfort, urgency and urine infections included in your symptom record.
                2. A monthly score kept for six months.
                3. Over-the-counter moisturisers or lubricants tried and the results noted.
                4. Persistent symptoms raised with your clinician, including the option of local treatment.

                ## Notes
                Local vaginal oestrogen is a separate treatment from HRT and can often be considered even when HRT is not suitable. Ask your clinician.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly scores for vaginal and urinary symptoms are recorded, and persistent symptoms have been raised with a clinician."
                cadence: rolling
              tasks:
                - "Add dryness, discomfort, urgency and infections to your symptom list"
                - "Note whether these symptoms have changed this month @recurring(monthly:24)"
                - "Try a fragrance-free vaginal moisturiser and record the result"
                - "Ask your clinician about local treatment if symptoms persist"
            - name: The three stages of the menopause transition
              description: |-
                ## Purpose
                Perimenopause, menopause and postmenopause mean different things, and mixing them up causes real mistakes, such as stopping contraception too early or assuming symptoms cannot be hormonal while periods continue. An hour learning the definitions and typical ages puts every later conversation on the same footing.

                ## Milestones
                1. The definitions of perimenopause, menopause and postmenopause written in your own words.
                2. Typical age ranges, and what counts as early menopause, noted.
                3. Where you probably are in the transition written down, with your reasons.
                4. Any remaining question added to your appointment list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A short note defining the three stages, with your probable stage and the reasons, is written."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your national menopause society's explanation of the stages"
                - "Write the three definitions in your own words"
                - "Note which stage you think you are in and why"
                - "Add any unanswered question to your appointment list"
            - name: HRT types and routes explained
              description: |-
                ## Purpose
                HRT comes as patches, gels, sprays, tablets and implants, with oestrogen alone or combined with a progestogen, taken continuously or in cycles. Understanding the main options before the appointment means you can ask informed questions and see why one is suggested over another.

                ## Milestones
                1. The difference between skin routes and tablets understood, including the clot risk difference clinicians cite.
                2. Cyclical and continuous combined regimes explained in a sentence each.
                3. Body-identical and older synthetic hormones distinguished.
                4. A note of which options you want to ask about.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note comparing HRT routes and regimes, ending with two options to discuss, is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient guide to HRT types from a national menopause society"
                - "Write one sentence each on patches, gels, sprays and tablets"
                - "Explain in your own words how cyclical and continuous regimes differ"
                - "List the two options you want to ask your clinician about"
            - name: Why womb protection matters on oestrogen
              description: |-
                ## Purpose
                Anyone with a womb who takes oestrogen needs a progestogen as well, because oestrogen alone can thicken the womb lining and raise the risk of womb cancer. Knowing the options, from tablets to combined patches to a hormonal coil, helps you spot mistakes such as running out of one half of the prescription.

                ## Milestones
                1. The reason a progestogen is needed understood and written down.
                2. The progestogen options, including tablets, combined patches and hormonal coils, listed.
                3. Your own womb protection confirmed with your clinician if you take HRT.
                4. A rule set never to carry on with oestrogen alone without advice if the progestogen runs out.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your womb protection method is confirmed with your clinician and written beside your HRT details."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a reliable explanation of why progestogen is needed with oestrogen"
                - "List the progestogen options and how each is taken"
                - "Confirm with your clinician which part of your HRT protects your womb"
                - "Write a rule for what to do if the progestogen runs out"
            - name: HRT risks in absolute numbers
              description: |-
                ## Purpose
                Headlines about HRT and breast cancer usually quote relative risk, which sounds far larger than the extra cases per thousand women that clinicians work with. Learning to read absolute numbers, and how risk differs by type, age and length of use, lets you weigh your own situation instead of last decade's headlines.

                ## Milestones
                1. Relative and absolute risk explained in your own words.
                2. Extra cases per thousand for breast cancer, clots and stroke noted from a reliable source, by HRT type.
                3. How these compare with everyday risks such as alcohol or weight noted.
                4. Questions about your own risk written down for your clinician.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note showing absolute risk figures by HRT type, taken from a named reliable source, is written."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find a patient decision aid that shows HRT risks per thousand women"
                - "Write the difference between relative and absolute risk in two sentences"
                - "Note how risk changes with HRT type and length of use"
                - "Add your personal risk questions to your appointment list"
            - name: Lesser-known menopause symptoms to recognise
              description: |-
                ## Purpose
                Joint pain, palpitations, itchy or crawling skin, dry eyes, tinnitus, frozen shoulder, burning mouth and new anxiety can all belong to the transition, and people often see several specialists before anyone connects them. Knowing the wider list helps you mention the right things together.

                ## Milestones
                1. A list of at least fifteen recognised menopause symptoms beyond flushes.
                2. The ones you have experienced marked.
                3. Those added to your symptom record.
                4. Symptoms that need checking in their own right, such as chest pain, separated out.

                ## Notes
                Palpitations with chest pain, breathlessness or fainting need urgent medical assessment, not a menopause explanation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A marked list of recognised symptoms exists and the relevant ones have been added to your symptom record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read a full symptom list from a menopause society or charity"
                - "Mark the symptoms you recognise in yourself"
                - "Add those symptoms to your weekly check-in sheet"
                - "List any symptom that needs checking on its own merits"
            - name: Why hormone blood tests rarely settle it after 45
              description: |-
                ## Purpose
                Many people expect a blood test to confirm perimenopause, but hormone levels swing from day to day and guidance in several countries advises diagnosing on symptoms alone over 45. Understanding why saves a wasted wait for results and helps you ask for the tests that do matter in your case.

                ## Milestones
                1. The reason FSH and oestrogen tests are unreliable in perimenopause understood.
                2. The situations where tests are useful, such as under 45, noted.
                3. Other tests worth asking about for tiredness, such as thyroid and iron, listed.
                4. Your clinician's view on testing in your case recorded.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your clinician's decision on hormone testing, and the reasons for it, is recorded with your notes."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your national guidance on diagnosing perimenopause"
                - "Note when hormone tests are and are not useful"
                - "List other blood tests to ask about if tiredness is a main symptom"
                - "Record what your clinician decided about testing"
            - name: CBT self-help for hot flushes and night sweats
              description: |-
                ## Purpose
                Cognitive behavioural therapy adapted for menopause has good evidence for reducing how much flushes and night sweats bother people, and it suits those who cannot or prefer not to take HRT. A six-week self-help programme of paced breathing, thought skills and sleep habits costs little and runs alongside any other treatment.

                ## Milestones
                1. A menopause-specific CBT self-help book, course or app chosen.
                2. Paced breathing practised daily for six weeks.
                3. Flush and sweat bother scores compared at the start and the end.
                4. The techniques that helped written on one card for future use.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "A six-week CBT self-help programme is completed, with bother scores recorded before and after."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose a menopause CBT self-help book, course or app"
                - "Score how much flushes bother you before starting"
                - "Practise ten minutes of slow paced breathing @recurring(daily)"
                - "Rescore after six weeks and write down what helped"
            - name: Deciding whether HRT is right for you
              description: |-
                ## Purpose
                For many people under 60 with troublesome symptoms, current guidance says the benefits of HRT outweigh the risks, but your history, preferences and symptoms decide what is right for you. Making the decision deliberately, with your symptom data, history sheet and risk numbers, means you can stand by it whichever way you go.

                ## Milestones
                1. Your main reasons for and against HRT written down.
                2. Benefits and risks for your situation discussed with your clinician.
                3. Your preferences, such as route or wanting a trial period, made clear.
                4. A decision recorded to start, wait or choose another option, with a review date.

                ## Notes
                A three-month trial is common, and choosing HRT is not a lifelong commitment. You can revisit the decision at any review.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on HRT, with reasons and a review date, exists after a dedicated discussion with a clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write your three main reasons for and against HRT"
                - "Book an appointment specifically to discuss HRT"
                - "Discuss your symptom summary, history sheet and risk questions"
                - "Record the decision and a date to review it"
            - name: Choosing between patch, gel, spray and tablet
              description: |-
                ## Purpose
                Every HRT route fits daily life differently: patches can peel in heat or swimming, gels need drying time, sprays are quick, and tablets are simple but carry a different clot risk. Choosing with your routine in mind makes it far more likely you will keep taking it.

                ## Milestones
                1. Your daily routine, skin sensitivity, exercise and travel written down.
                2. Each route scored against those factors.
                3. The route your clinician prefers for your history noted.
                4. A choice made, with a note of what would make you switch.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen HRT route, scored against your routine and agreed with your clinician, is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down your routine, sport, travel and skin sensitivities"
                - "Score each HRT route against those factors"
                - "Ask your clinician which routes suit your history"
                - "Record your choice and what would make you switch"
            - name: Non-hormonal options when HRT is not for you
              description: |-
                ## Purpose
                Some people cannot take HRT after certain cancers or clots, and others simply prefer not to. Several non-hormonal prescription treatments, CBT and practical measures have evidence for flushes, and comparing them with your clinician gives you a plan rather than putting up with symptoms.

                ## Milestones
                1. The reason HRT is not the route for you written down.
                2. Non-hormonal prescription options your clinician would consider listed with their side effects.
                3. Non-drug options such as CBT and cooling measures included.
                4. A first option chosen with a trial length and review date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A non-hormonal treatment plan with a trial length and review date is agreed with your clinician."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down why HRT is not right for you now"
                - "Ask your clinician which non-hormonal prescriptions they would consider"
                - "Compare each option's likely side effects and how long it takes to work"
                - "Agree a first option and a date to review it"
            - name: First three months on HRT settling-in review
              description: |-
                ## Purpose
                Side effects such as breast tenderness, bloating and irregular bleeding are common in the first few months and often settle, while full symptom relief can take up to three months. Keeping a weekly side effect diary and rescoring at twelve weeks gives a clear answer on whether the current prescription is right.

                ## Milestones
                1. A weekly side effect diary kept for twelve weeks.
                2. Bleeding on HRT recorded with dates.
                3. Your baseline questionnaire repeated at twelve weeks.
                4. A three-month review held and the decision to continue or adjust recorded.
              priority: high
              deadlineOffsetDays: 100
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A twelve-week side effect diary and a repeat questionnaire score are reviewed with a clinician and the decision recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Set up a side effect diary for bleeding, breasts, mood and headaches"
                - "Record this week's side effects and any bleeding @recurring(weekly:wed)"
                - "Repeat your baseline questionnaire at twelve weeks"
                - "Book the three-month review before the twelve weeks are up"
            - name: Supplement and herbal remedy safety check
              description: |-
                ## Purpose
                Menopause supplements are heavily marketed, few have good evidence, and some, such as St John's wort or black cohosh, can interact with medicines or affect the liver. Checking everything you take with a pharmacist once, and again each year, stops spending on things that do nothing and catches risky combinations.

                ## Milestones
                1. Every supplement and remedy you take listed with brand and amount.
                2. Each one checked with a pharmacist for interactions with your prescriptions.
                3. Anything without reasonable evidence or with a safety concern stopped or questioned.
                4. The monthly spend before and after written down.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pharmacist has checked every supplement against your prescriptions, and the outcome is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every supplement and remedy you take, with brand"
                - "Ask your pharmacist to check them against your prescriptions"
                - "Stop or question anything flagged as risky or unproven"
                - "Repeat the supplement check with your pharmacist @recurring(yearly)"
            - name: Hot flush trigger experiment
              description: |-
                ## Purpose
                Alcohol, caffeine, spicy food, hot drinks and stress are common flush triggers, but they differ between people, and cutting everything at once is miserable. Testing one suspected trigger at a time for two weeks shows which ones matter for you.

                ## Milestones
                1. Three suspected triggers chosen from your symptom record.
                2. Each one removed for two weeks while flushes are counted.
                3. Flush counts compared with and without each trigger.
                4. The triggers that made a clear difference written down, and the rest allowed back.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Three triggers are tested one at a time, with flush counts recorded for each and a conclusion written."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick three suspected triggers from your symptom record"
                - "Count flushes for a normal week as a comparison"
                - "Remove one trigger for two weeks and count flushes again"
                - "Write down which triggers made a clear difference"
            - name: Cooling kit for bedroom, desk and bag
              description: |-
                ## Purpose
                A good fan, breathable layers and the right bedding make flushes much easier to ride out, but cooling products range from useful to gimmicky. Deciding what you need in each place, within a budget, means the money goes on things you will actually use.

                ## Milestones
                1. The places flushes hit hardest listed, such as bed, desk, commute and meetings.
                2. Two or three options compared for each place on price and noise.
                3. A budget set and the items chosen.
                4. The kit in use, with anything that did not help returned or passed on.

                ## Notes
                Start from the **Purchase decision** template. Layered cotton or bamboo bedding and a quiet desk fan are the usual starting points.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A cooling kit chosen against a set budget is in use at home, at your desk and in your bag."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List where flushes are hardest to manage"
                - "Compare two or three cooling options for each place"
                - "Set a budget and buy the items you chose"
                - "Return or pass on anything that has not helped after a month"
            - name: Protein, calcium and vitamin D check of an ordinary week
              description: |-
                ## Purpose
                Protein and calcium matter more around menopause as muscle and bone loss speed up, and many people eat less of both than they think. Logging an ordinary week and comparing it with your national guidance shows whether small swaps are needed, and whether to ask about vitamin D.

                ## Milestones
                1. An ordinary week of meals written down.
                2. Protein and calcium sources picked out and compared with your national guidance.
                3. Two or three realistic swaps chosen and in use.
                4. Your pharmacist or clinician asked whether vitamin D is advised for you.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A week's food log is compared with national guidance and two or three swaps are in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down everything you eat for one ordinary week"
                - "Mark the protein and calcium sources in each day"
                - "Choose two or three swaps that fill the gaps"
                - "Ask your pharmacist whether vitamin D is advised for you"
            - name: Adjusting HRT when symptoms persist or side effects appear
              description: |-
                ## Purpose
                If symptoms are still there after three months, or side effects have not settled, the answer is usually an adjustment rather than giving up: a different route, dose, progestogen or regime. Bringing specific evidence to the conversation helps your clinician choose the change most likely to work.

                ## Milestones
                1. The symptoms or side effects still present after three months listed with scores.
                2. Your adherence over the period confirmed from your tick-off record.
                3. The options for adjustment discussed with your clinician.
                4. One change made, with a review eight to twelve weeks later.

                ## Notes
                Change one thing at a time where possible, so you can tell what made the difference.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One agreed HRT adjustment is made, with the reason and a dated review recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the symptoms or side effects still present, with scores"
                - "Check your tick-off record for missed doses"
                - "Ask your clinician which adjustment they would suggest first"
                - "Set a review eight to twelve weeks after the change"
            - name: Telling your manager and agreeing workplace adjustments
              description: |-
                ## Purpose
                Brain fog, flushes in meetings and broken sleep affect work, and many employers now have menopause policies or will agree reasonable adjustments such as a desk fan, flexible start times or camera-off calls. Planning what to say and what to ask for makes the conversation shorter and more likely to end in something written down.

                ## Milestones
                1. Your employer's menopause or wellbeing policy found and read.
                2. Two or three specific adjustments chosen that would help most.
                3. The conversation held with your manager or HR.
                4. Agreed adjustments confirmed in writing, with a date to review them.

                ## Notes
                You choose how much to share. Describing the effect on your work and the adjustment you need is often enough.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Specific workplace adjustments are agreed with your manager and confirmed in writing with a review date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search your intranet or handbook for a menopause or wellbeing policy"
                - "Choose the two or three adjustments that would help most"
                - "Draft what you will say in three short points"
                - "Ask for the agreed adjustments to be confirmed by email"
            - name: Meeting and presentation plan for flushes and brain fog
              description: |-
                ## Purpose
                Knowledge workers often find that a flush in the middle of a presentation, or losing a word in a meeting, does more damage to confidence than to the work itself. A small set of tactics, such as notes on screen, water and a fan to hand, layered clothes and a planned pause, makes high-stakes days easier.

                ## Milestones
                1. The work situations where symptoms cause most trouble listed.
                2. A tactic chosen for each, such as speaker notes, a planned pause or a seat near a window.
                3. A small kit kept at your desk or in your bag.
                4. The tactics tried in three meetings and adjusted.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Tactics for at least three difficult work situations are written down and tried in real meetings."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List the meetings and tasks where symptoms trouble you most"
                - "Choose one tactic for each situation"
                - "Pack a desk kit with water, a small fan and a spare layer"
                - "Review after three meetings which tactics helped"
            - name: Investigation of unscheduled bleeding on HRT
              description: |-
                ## Purpose
                Bleeding outside the expected pattern on HRT, especially after the first six months, is usually checked with an ultrasound scan and sometimes a sample of the womb lining. Knowing what to expect, and bringing a clear bleeding record, makes the appointments less daunting and the results easier to act on.

                ## Milestones
                1. The unexpected bleeding reported to your clinician with dates.
                2. Any scan or clinic appointment booked and prepared for.
                3. Results received and explained.
                4. The outcome, such as a change of HRT or reassurance, recorded.

                ## Notes
                Ask whether to take pain relief beforehand and whether you can bring someone with you.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The unexpected bleeding has been investigated, with the result and any treatment change recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Send your bleeding record to your clinician"
                - "Ask what investigation is planned and how long it will take"
                - "Prepare your questions for the scan or clinic appointment"
                - "Record the result and any change to your HRT"
            - name: Referral to a specialist menopause clinic
              description: |-
                ## Purpose
                Specialist menopause clinics see people whose care is complicated: treatment that has not worked after several changes, a history of clots or hormone-sensitive cancer, or early menopause. Preparing a concise summary for the referral and the first visit helps a stretched clinic spend its time on your actual question.

                ## Milestones
                1. A referral requested with the reason stated clearly.
                2. A one-page summary of treatments tried, results and side effects prepared.
                3. The specialist's recommendations received in writing.
                4. The plan shared with your usual clinician so prescriptions follow.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A specialist menopause clinic has seen you and its written plan is shared with your usual clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your clinician whether a specialist referral is appropriate"
                - "Ask the agent to draft a one-page summary of treatments tried and their results"
                - "Take the summary and your records to the first appointment"
                - "Check the specialist's letter has reached your usual clinician"
            - name: Travelling with HRT and managing flushes abroad
              description: |-
                ## Purpose
                Long flights, hot climates and time zones all affect HRT routines and flushes, and patches can loosen in heat and pools. A short plan covering supplies, timing, spare patches and cooling saves a lot of discomfort on a trip.

                ## Milestones
                1. Enough HRT for the trip plus a week packed in hand luggage.
                2. A plan for timing doses across time zones agreed with your pharmacist.
                3. Spare patches or adhesive covers packed for heat and swimming.
                4. Cooling items and breathable clothes packed for the flight or drive.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "HRT supplies, a dose timing plan and cooling items are packed before the trip."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check you have enough HRT for the trip plus a week"
                - "Ask your pharmacist how to time doses across time zones"
                - "Pack spare patches or covers for heat and swimming"
                - "Pack a small fan and breathable layers in your hand luggage"
            - name: Early menopause before forty
              description: |-
                ## Purpose
                Premature ovarian insufficiency, menopause before 40, carries higher long-term risks for bones and heart, and most guidance recommends hormone treatment at least until the usual age of menopause unless there is a reason not to. It also brings fertility questions and a heavier emotional load, so specialist input and a long-term plan early on matter.

                ## Milestones
                1. The diagnosis confirmed with the tests your clinician recommends.
                2. A referral made to a specialist clinic for early menopause.
                3. Fertility options and contraception discussed in light of your plans.
                4. A long-term hormone and bone health plan agreed in writing.
                5. A support group or counsellor found, if you want one.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written long-term plan covering hormones, bones and fertility is agreed with a specialist."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask your clinician which tests confirm an early menopause diagnosis"
                - "Request a referral to a specialist early menopause clinic"
                - "Write down your questions about fertility and family plans"
                - "Look up a support group for early menopause"
            - name: Surgical menopause after ovary removal
              description: |-
                ## Purpose
                Removing both ovaries causes menopause overnight, often with sudden, intense symptoms, so planning hormone treatment before the operation rather than after makes a real difference. Agreeing a plan with the surgical team and your usual clinician means you leave hospital knowing what happens next.

                ## Milestones
                1. Hormone treatment after surgery discussed before the operation.
                2. A prescription or clear plan in place for discharge.
                3. Symptoms tracked weekly for the first three months after surgery.
                4. A follow-up booked to review the plan, including bone health.

                ## Notes
                If the operation is linked to a hormone-sensitive cancer or a gene change, the plan will differ: ask the oncology or genetics team as well as the surgeon.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A hormone plan is agreed before surgery and reviewed at a follow-up within three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the surgical team what the plan is for hormones after surgery"
                - "Make sure a prescription or plan is ready for discharge"
                - "Track symptoms each week for three months after surgery"
                - "Book a follow-up to review hormones and bone health"
            - name: Menopause after breast cancer or a hormone-sensitive history
              description: |-
                ## Purpose
                After breast cancer, or with a strong family history, standard HRT is often not advised, and some cancer treatments bring on menopause or make symptoms worse. Coordinating between the oncology team and your usual clinician gives you a symptom plan that respects your cancer care.

                ## Milestones
                1. Your oncology team's view on hormone treatment recorded.
                2. Non-hormonal options and local treatments discussed with them.
                3. Your symptom record shared with both teams.
                4. A single written plan held by you and copied to both teams.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A menopause symptom plan agreed with your oncology team is written and shared with your usual clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask your oncology team what they advise for menopause symptoms"
                - "Share your symptom record with the oncology team and your usual clinician"
                - "Discuss which non-hormonal and local treatments are acceptable"
                - "Keep one written plan and send a copy to both teams"
            - name: Perimenopause while caring for teenagers and ageing parents
              description: |-
                ## Purpose
                Perimenopause often lands in the years of exam-age children and parents who need more help, and your own appointments are the first thing to slip. A plan that protects a little time each week and shares the load with other people keeps your own treatment going.

                ## Milestones
                1. Your weekly caring commitments mapped on one page.
                2. One protected hour a week fixed for your own health.
                3. One regular task handed to a sibling, partner or service.
                4. Your own appointments booked first, before the next family round.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "One protected hour a week has been kept for four weeks, and one caring task has been handed on."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Map your weekly caring commitments on one page"
                - "Keep one protected hour for your own health @recurring(weekly:sat)"
                - "Hand one regular task to someone else in the family"
                - "Book your next menopause appointment before anyone else's"
            - name: Menopause care alongside gender-affirming hormones
              description: |-
                ## Purpose
                Trans men and non-binary people with ovaries can go through perimenopause, sometimes while on testosterone, and trans women may change or stop oestrogen in later life. Making sure the gender service and your usual clinician agree on who manages hormones, bones and screening avoids gaps.

                ## Milestones
                1. The clinician responsible for your hormone prescribing confirmed.
                2. Questions about menopause symptoms and bone health raised with them.
                3. Screening that still applies to your body confirmed.
                4. A shared plan written down and copied to both services.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written plan names who manages hormones, bones and screening, and both services hold a copy."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Confirm which service manages your hormone prescriptions"
                - "Ask how menopause and later life affect your current treatment"
                - "Check which screening programmes still apply to you"
                - "Ask both services to copy each other into letters"
            - name: Supporting a partner through menopause
              description: |-
                ## Purpose
                Partners often see the irritability, poor sleep and loss of confidence without knowing what is behind them, and both people can end up feeling shut out. Learning the basics, asking what would help, and taking on practical things like a cooler bedroom or coming to an appointment if invited makes the transition easier for both of you.

                ## Milestones
                1. The common symptoms and treatments read about from a reliable source.
                2. A conversation held about what would and would not help.
                3. Two practical changes made at home.
                4. An offer made to come to an appointment, if wanted.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Two practical changes agreed with your partner are in place at home."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a partner's guide from a menopause charity"
                - "Ask your partner what would help and what would not"
                - "Make two practical changes at home, such as bedding or chores"
                - "Offer to come to the next appointment if your partner wants"
            - name: Testosterone for persistent low libido
              description: |-
                ## Purpose
                Low sexual desire that causes distress and has not improved on HRT is the one menopause symptom for which testosterone has reasonable evidence, though it is not licensed for women in many countries. Exploring it properly means ruling out other causes and working with a clinician who prescribes and monitors it.

                ## Milestones
                1. Other causes, such as relationship stress, mood, medicines and vaginal discomfort, considered.
                2. A clinician with experience of testosterone in menopause found.
                3. Blood test monitoring explained before any start.
                4. A decision recorded, with a review date if you go ahead.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on testosterone is recorded after discussion with an experienced clinician, with a monitoring plan if started."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write down how long low desire has lasted and how it affects you"
                - "List other possible causes to discuss, including medicines and mood"
                - "Ask whether your clinician prescribes testosterone or can refer you"
                - "Record the decision and any monitoring plan"
            - name: Long-term HRT and the stopping decision
              description: |-
                ## Purpose
                There is no fixed point at which everyone must stop HRT, and stopping abruptly can bring symptoms back. Deciding whether and when to stop, and whether to taper, is best done deliberately with up-to-date risk information and a plan for what to do if symptoms return.

                ## Milestones
                1. Your reasons for considering stopping written down.
                2. Current benefits and risks reviewed with your clinician for your age and length of use.
                3. A taper or stop plan agreed, or a decision to continue recorded.
                4. A symptom check booked three months after any change.

                ## Notes
                Many people find symptoms return after stopping. That is a reason to review, not a failure.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on continuing or stopping HRT, with a plan for returning symptoms, exists."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write your reasons for considering stopping HRT"
                - "Ask your clinician about benefits and risks for your age and length of use"
                - "Agree a taper plan or record a decision to continue"
                - "Book a symptom check three months after any change"
            - name: Setting up a workplace menopause network
              description: |-
                ## Purpose
                Plenty of organisations have no menopause policy, or one nobody uses, and experienced staff leave or step back over symptoms that small changes could ease. A peer network with a senior sponsor, a short guide for managers and a quarterly session makes menopause something people can raise at work.

                ## Milestones
                1. A senior sponsor and two or three co-organisers agreed.
                2. A short guide for managers drafted with HR.
                3. The first network session held with attendance recorded.
                4. A quarterly rhythm of sessions running.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A menopause network with a senior sponsor has held at least two sessions and published a guide for managers."
                cadence: rolling
              tasks:
                - "Ask HR whether a menopause policy or network already exists"
                - "Find a senior sponsor and two co-organisers"
                - "Draft a two-page guide for managers with HR"
                - "Hold the quarterly menopause network session @recurring(quarterly)"
---

# Menopause & Perimenopause Care

This area is for anyone going through perimenopause or menopause, or expecting to soon, and for knowledge workers fitting symptoms around demanding jobs. It starts with the foundations (a symptom baseline, a bleeding record, a history sheet and a well-prepared first appointment), then the routines that keep treatment and tracking going, the knowledge that makes HRT conversations easier, the decisions about HRT, non-hormonal options and everyday changes, the events worth preparing for, the situations that change the picture such as early or surgical menopause, and finally the longer-term and specialist work.

What repeats is a weekly symptom check-in, a monthly trend review, a daily HRT and pelvic floor routine, twice-weekly strength sessions, a quarterly mood check and the annual HRT review. The Metrics log, Meeting notes, Habit tracker, Training program, Sleep review and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
