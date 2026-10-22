---
id: mental-wellbeing.mental-health-medication-tracking
name: Mental Health Medication Tracking
description: "A complete record of your psychiatric medicines, a daily dose routine, side effects and mood tracked against agreed targets, and well-prepared reviews, switches and tapers with your prescriber."
category: personal
version: 1.0.0
tags: [mental-wellbeing, mental-health-medication-tracking, everyone, antidepressants, side-effects, tapering, prescriber-review, medication-log]
author: Aurum Technology
starter_structure:
  templates:
    - purchase-decision
    - habit-tracker
    - metrics-log
    - meeting-notes
    - trip
  pillars:
    - name: Mental & Emotional Wellbeing
      emoji: "🧘"
      description: "The inner weather: managing stress and anxiety, recovering from burnout, therapy and support, rest and attention, mood and emotional skills, and the routines that keep a mind steady when life is not."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Mental Health Medication Tracking
          description: "Tracking antidepressant or other psychiatric medication, side effects and mood changes, and preparing for reviews or tapering with a prescriber."
          projects:
            - name: Complete list of current psychiatric medicines
              description: |-
                ## Purpose
                Most people asked in an appointment what they take give a partial answer: the name but not the strength, the morning tablet but not the one taken as needed. A single written list with name, strength, form, timing, start date, prescriber and reason is the document every later review, emergency and pharmacy visit depends on.

                ## Milestones
                1. Every psychiatric medicine you take written down with name, strength, form and time of day.
                2. Start date, prescriber and the reason for each medicine added.
                3. As-needed medicines, other prescriptions, supplements and herbal remedies listed on the same page.
                4. The list saved on your phone and printed for your wallet or bag.

                ## Notes
                Copy names and strengths from the pharmacy label, not from memory. Brand and generic names often differ, so record both where you can.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page medicine list exists with name, strength, timing, start date, prescriber and reason for every medicine, stored on your phone and in print."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Lay out every medicine box and bottle you have on one table"
                - "Copy each name, strength and dosing instruction from the pharmacy label"
                - "Add start dates and prescribers from your patient portal or letters"
                - "Save the list on your phone and print a wallet copy"
            - name: Past psychiatric medicine history timeline
              description: |-
                ## Purpose
                Prescribers choosing a next medicine want to know what has been tried, at what dose, for how long and why it stopped, yet that history usually lives scattered across years of letters and fading memory. Rebuilding it once into a dated timeline prevents repeating a medicine that failed and makes any specialist referral faster.

                ## Milestones
                1. Every psychiatric medicine you have ever taken listed with approximate start and stop dates.
                2. The highest dose reached and the length of time on it noted for each.
                3. The reason each one stopped recorded: side effects, no effect, felt well, or other.
                4. Gaps filled from your medical record, old prescriptions or a family member's memory.

                ## Notes
                A request for your own records may take a few weeks, so ask early. Rough dates are far more useful than none.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated timeline lists every past psychiatric medicine with highest dose, duration and reason for stopping, checked against your medical record."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down every psychiatric medicine you remember taking, in any order"
                - "Request a copy of your medication history from your doctor's practice"
                - "Add highest dose, duration and reason for stopping to each entry"
                - "Ask the agent to arrange your notes into a dated timeline table"
            - name: Target symptoms agreed with your prescriber
              description: |-
                ## Purpose
                A medicine started for low mood can be judged a success or failure only if everyone agrees what it was meant to change. Naming three or four target symptoms with your prescriber, such as early waking, loss of interest or constant worry, gives each review a clear question: are these better, the same or worse?

                ## Milestones
                1. Three or four target symptoms agreed with your prescriber and written in their words.
                2. A rough current rating for each symptom recorded on a 0 to 10 scale.
                3. The time your prescriber expects before judging the effect noted.
                4. The targets written at the top of your medication log.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Three or four target symptoms are agreed with your prescriber, rated at the start and written at the top of your medication log with an expected review point."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the symptoms that bother you most in daily life"
                - "Ask your prescriber which of them the medicine is expected to help"
                - "Rate each agreed target symptom from 0 to 10 today"
                - "Ask how many weeks to wait before judging whether it is working"
            - name: Baseline symptom scores before a medicine changes
              description: |-
                ## Purpose
                Six weeks into a new medicine, memory of how bad things were is unreliable, and people often underrate their improvement or miss a slow slide. Recording a standard questionnaire score, such as the PHQ-9 for depression or GAD-7 for anxiety, before a start or change gives you a fixed point to compare against.

                ## Milestones
                1. The questionnaire your prescriber or service uses identified.
                2. A baseline score recorded within a week before the start or change.
                3. The date, medicine and dose noted beside the score.
                4. The score shared with your prescriber or care team.

                ## Notes
                Use the same questionnaire every time. Mixing scales makes comparisons meaningless.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated baseline questionnaire score is recorded alongside the medicine and dose, and your prescriber has seen it."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask your prescriber which questionnaire they use to track progress"
                - "Complete the questionnaire honestly about the last two weeks"
                - "Record the score with today's date, medicine and dose"
                - "Send the score to your prescriber or bring it to the next appointment"
            - name: Pharmacist interaction check for everything you take
              description: |-
                ## Purpose
                Psychiatric medicines interact with surprisingly ordinary things: some cold remedies, migraine tablets, painkillers, St John's wort and other herbal products. Pharmacists are trained to spot these and will usually check a full list for free, which catches problems that a busy prescriber looking at one prescription can miss.

                ## Milestones
                1. A full list of prescriptions, over-the-counter medicines, supplements and herbal products prepared.
                2. The list reviewed by a pharmacist in person or by phone.
                3. Any interaction flagged written down with what the pharmacist advised.
                4. Products to avoid added to your medicine list in a short do-not-take line.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A pharmacist has reviewed your full list of medicines and supplements, and any flagged interactions are recorded with their advice."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Collect every supplement, herbal product and over-the-counter medicine you use"
                - "Ask your pharmacist for an interaction check against your prescriptions"
                - "Write down each flagged interaction and the advice given"
                - "Add a do-not-take line to your medicine list"
            - name: Warning signs card for new or changed medicines
              description: |-
                ## Purpose
                A few reactions to psychiatric medicines need same-day help rather than waiting for the next review: for example a spreading rash, severe agitation with fever and shaking, fainting, or new or worse thoughts of suicide after starting or changing a dose. Writing your own medicines' warning signs from the leaflet and your prescriber onto one card means you, and the people you live with, know what counts as urgent.

                ## Milestones
                1. Urgent warning signs for each of your medicines collected from the leaflet and your prescriber.
                2. A card listing the signs, who to call in hours and the emergency number.
                3. The card kept with your medicines and shared with one trusted person.
                4. Your prescriber asked whether any signs specific to you should be added.

                ## Notes
                This card organises the guidance from your leaflet and prescriber; it does not replace it. If you ever feel unsafe, contact emergency services or a crisis line straight away.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A warning signs card built from your leaflets and prescriber's advice is kept with your medicines and one trusted person knows where it is."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the seek-help-urgently section of each medicine leaflet"
                - "Write the signs, daytime contact and emergency number on one card"
                - "Show the card to the person you would call first"
                - "Check the card matches your current medicines @recurring(yearly)"
            - name: Patient leaflet notes for each medicine
              description: |-
                ## Purpose
                The folded leaflet in every box answers most of the questions people search late at night, but it is long, alarming in places and usually thrown away. Reading it once with a pen and pulling out five facts per medicine (what it is for, how to take it, common side effects, what to avoid, what to do if a dose is missed) gives you a calm reference you will actually use.

                ## Milestones
                1. The current leaflet for each medicine found, or downloaded from the manufacturer or medicines regulator.
                2. Five key facts per medicine written in your own words.
                3. Common side effects separated from rare ones.
                4. Questions the leaflet raised listed for the pharmacist.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each current medicine has a half-page summary of five key facts from its leaflet, with open questions listed for the pharmacist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the leaflet for your main psychiatric medicine"
                - "Write down its purpose, how to take it and the missed-dose instruction"
                - "Note which side effects the leaflet calls common and which rare"
                - "Take your unanswered questions to the pharmacy counter"
            - name: Care team and pharmacy contact sheet
              description: |-
                ## Purpose
                When a side effect worries you on a Friday afternoon, losing twenty minutes hunting for the right number is the difference between getting advice and giving up. One sheet with your prescriber, practice, community mental health team, usual pharmacy, out-of-hours service and crisis line puts every route in one place.

                ## Milestones
                1. Phone numbers, opening hours and best contact method for each service listed.
                2. Your patient or hospital number written at the top.
                3. The sheet stored with your medicine list on your phone and on paper.
                4. Out-of-hours and crisis numbers checked as current.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A contact sheet with every care, pharmacy, out-of-hours and crisis number is stored with your medicine list and checked within the last year."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List every professional involved in prescribing or dispensing your medicines"
                - "Add numbers, hours and patient reference numbers for each"
                - "Save the sheet next to your medicine list on your phone"
                - "Ring or check the website of each number to confirm it still works @recurring(yearly)"
            - name: Choosing a medication log, app or paper
              description: |-
                ## Purpose
                Logs abandoned after a fortnight record nothing. Comparing two or three options, such as a reminder app, a spreadsheet or a printed sheet by the kettle, against what you will genuinely keep up, and against privacy, export and reminder features, picks the format that lasts long enough to be useful at reviews.

                ## Milestones
                1. Three options compared on reminders, ease, privacy and the ability to export or print.
                2. The privacy policy of any app checked for who sees your health data.
                3. One format chosen and set up with your current medicines.
                4. A two-week trial completed before committing.

                ## Notes
                Start from the **Purchase decision** template. Free and paper options are fine; the best log is the one you open daily.
              priority: low
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One log format is chosen after comparing three options, set up with all current medicines and used for a two-week trial."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what failed last time you tried to track anything"
                - "Compare three log options on reminders, privacy and export"
                - "Read the privacy policy of any app on the shortlist"
                - "Set up the chosen log and use it for two weeks"
            - name: Physical health baseline before certain medicines
              description: |-
                ## Purpose
                Some psychiatric medicines, particularly antipsychotics and mood stabilisers, can affect weight, blood sugar, cholesterol, heart rhythm, kidneys or thyroid, so services usually take baseline measurements before or soon after starting. Knowing which checks apply to your medicine and making sure they actually happen gives later results something to be compared with.

                ## Milestones
                1. The baseline checks your medicine needs confirmed with the prescriber or pharmacist.
                2. Weight, waist and blood pressure recorded at the start.
                3. Any blood tests or heart tracing requested booked and completed.
                4. Results noted in your log with the date.

                ## Notes
                Not every psychiatric medicine needs these checks. Ask rather than assume either way.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every baseline check your prescriber requires is completed and its dated result recorded in your medication log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your prescriber which baseline checks your medicine needs"
                - "Weigh yourself and measure your waist on the same morning"
                - "Book any blood tests or heart tracing that were requested"
                - "Record each baseline result with its date in your log"
            - name: Daily dose time and tick-off routine
              description: |-
                ## Purpose
                Missed doses are the commonest reason a psychiatric medicine seems not to work, and with some medicines a few missed days also bring unpleasant discontinuation effects. Tying the dose to an existing daily anchor, such as the first coffee or brushing your teeth, and ticking it off, turns remembering into routine.

                ## Milestones
                1. A dose time agreed that suits the medicine and your day.
                2. The dose attached to a fixed daily anchor.
                3. A visible tick sheet or app check in use.
                4. A month with no more than one missed dose.

                ## Notes
                Start from the **Habit tracker** template. Ask your pharmacist whether your medicine is better taken morning or evening, with or without food.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Thirty consecutive days of doses ticked off with no more than one missed."
                cadence: rolling
              tasks:
                - "Ask your pharmacist the best time of day for each medicine"
                - "Choose the daily anchor you will take your medicine alongside"
                - "Take your medicine with the anchor and tick it off @recurring(daily)"
            - name: Weekly side effect and mood check
              description: |-
                ## Purpose
                Daily mood swings up and down whatever a medicine is doing, so a weekly snapshot shows the direction far better than day-to-day impressions. A five-minute Sunday check of the target symptoms, the main side effects and one line on the week builds the record your prescriber actually needs.

                ## Milestones
                1. A weekly log with columns for target symptom ratings, side effects, sleep and notes.
                2. The check done on the same day each week.
                3. Eight consecutive weeks recorded.
                4. Any trend over four weeks flagged for the next review.

                ## Notes
                Start from the **Metrics log** template. If a side effect feels severe or frightening, contact your prescriber or pharmacist that day rather than waiting for the weekly entry.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eight consecutive weekly entries recording target symptoms, side effects and sleep, with any four-week trend flagged."
                cadence: rolling
              tasks:
                - "Create a weekly log with symptom, side effect and sleep columns"
                - "Rate target symptoms and side effects for the past week @recurring(weekly:sun)"
                - "Mark any trend that has lasted four weeks for your prescriber"
            - name: Weekly pill organiser fill
              description: |-
                ## Purpose
                Weekly pill organisers answer the question did I take it this morning at a glance, and the weekly fill shows when stock is running low before it runs out. For anyone on more than one medicine, or with a memory dulled by low mood, it is one of the simplest supports available.

                ## Milestones
                1. An organiser with enough compartments for your daily dose times.
                2. A fixed weekly time to fill it.
                3. Remaining stock checked at every fill.
                4. Pharmacist asked whether any medicine should stay in its blister pack.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The organiser is filled at the same time every week for eight weeks, with stock levels checked at each fill."
                cadence: rolling
              tasks:
                - "Buy an organiser with compartments for each of your daily dose times"
                - "Ask the pharmacist whether any tablet must stay in its blister"
                - "Fill the organiser and check how many days of stock remain @recurring(weekly:sat)"
            - name: Repeat prescription reorder rhythm
              description: |-
                ## Purpose
                Running out is how many people end up stopping a psychiatric medicine abruptly, often without meaning to, and it tends to happen when energy and organisation are lowest. A fixed reorder date each month with a week's buffer, plus a nominated pharmacy, makes supply something that happens rather than something you remember.

                ## Milestones
                1. Repeat prescriptions set up for every regular medicine.
                2. A nominated pharmacy and ordering method chosen.
                3. A monthly reorder date set with at least seven days of buffer stock.
                4. Six months with no gap in supply.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive months of repeat prescriptions ordered on schedule with no day without medicine."
                cadence: rolling
              tasks:
                - "Check that every regular medicine is on your repeat list"
                - "Nominate one pharmacy and confirm how they receive prescriptions"
                - "Order the next repeat prescription with a week's buffer @recurring(monthly:18)"
                - "Ask about a longer supply interval once the dose is stable"
            - name: Monthly one-page medication summary
              description: |-
                ## Purpose
                Reviews come round every few months and nobody remembers week three. A one-page summary each month, with the current dose, average weekly scores, main side effects, missed doses and one question, compresses the log into what a prescriber can read in a minute.

                ## Milestones
                1. A one-page summary layout fixed and saved.
                2. Each month's dose, average scores, side effects and missed doses filled in.
                3. One question for the next review carried forward each month.
                4. Six monthly summaries ready to hand over.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six consecutive monthly summaries, each listing dose, average scores, side effects, missed doses and one question."
                cadence: rolling
              tasks:
                - "Design a one-page summary with five fixed headings"
                - "Fill in the month's summary from your weekly log @recurring(monthly:26)"
                - "Ask the agent to turn three monthly summaries into a short review note"
            - name: Quarterly prescriber review preparation
              description: |-
                ## Purpose
                Medication reviews are often ten minutes long, and the questions that mattered surface in the car park afterwards. Spending half an hour beforehand pulling together the last three monthly summaries, your score trend and your top three questions means the appointment ends with decisions rather than reassurance.

                ## Milestones
                1. A review booked or confirmed every three months while doses are changing.
                2. Three monthly summaries and the score trend printed or ready on screen.
                3. Three questions written in priority order.
                4. Agreed changes and the next review date written down before leaving.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Four consecutive reviews attended with prepared summaries and written outcomes, including the next review date."
                cadence: cyclic
              tasks:
                - "Confirm with your prescriber how often reviews should happen"
                - "Prepare summaries, score trend and three questions for the review @recurring(quarterly)"
                - "Write the agreed changes and next review date in your log"
            - name: Monitoring blood tests and physical checks calendar
              description: |-
                ## Purpose
                Medicines such as lithium, valproate, clozapine and many antipsychotics come with regular blood tests, weight or heart checks, and these are easily missed when care moves between services. A calendar of exactly which checks are due and when, kept by you, is the safety net that does not depend on a letter arriving.

                ## Milestones
                1. Every monitoring check for your medicines listed with its interval.
                2. The next due date for each check in your calendar.
                3. Results from the portal or letters recorded beside the dates.
                4. A full year of checks completed on time.

                ## Notes
                Your prescriber or pharmacist sets the schedule. If you are unsure whether a check was done, ask rather than assume.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All monitoring checks your medicines need were done on schedule over the last year, with dated results in your log."
                cadence: cyclic
              tasks:
                - "Ask your pharmacist which monitoring checks your medicines need and how often"
                - "Put each check's next due date in your calendar"
                - "Book the yearly round of monitoring bloods and physical checks @recurring(yearly)"
                - "Record each result with its date when it appears"
            - name: Missed and late dose plan
              description: |-
                ## Purpose
                The right action after a missed dose differs between medicines: some can be taken late, some should simply be skipped, and doubling up is rarely the answer. Asking your pharmacist once and writing the rule for each medicine means the decision is already made at 11pm when you realise.

                ## Milestones
                1. The missed-dose instruction for each medicine confirmed with a pharmacist.
                2. The cut-off time after which a dose is skipped written for each.
                3. The rules added to your medicine list.
                4. Missed doses recorded so patterns can be spotted.
              priority: medium
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "Each medicine has a written missed-dose rule confirmed by a pharmacist, and missed doses are logged."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the pharmacist what to do about a missed dose of each medicine"
                - "Write the rule and any cut-off time beside each medicine on your list"
                - "Note the date and cause of every missed dose in your log"
                - "Look at the causes after a month and change one thing"
            - name: Annual structured medicines review with a pharmacist
              description: |-
                ## Purpose
                Over years, prescriptions accumulate: a sleeping tablet that became permanent, a second medicine added and never reviewed. A yearly sit-down with a pharmacist, going through every medicine, its purpose and whether it still earns its place, catches duplication and forgotten add-ons that single-prescription reviews miss.

                ## Milestones
                1. A structured review requested from your practice or community pharmacist.
                2. All medicines and supplements brought, in their boxes.
                3. Each medicine's purpose and continued need discussed.
                4. Suggested changes passed to your prescriber and their response recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "A structured medicines review has happened within the last twelve months, with any suggestions passed to the prescriber and their response noted."
                cadence: cyclic
              tasks:
                - "Ask your pharmacy or practice whether they offer a structured medicines review"
                - "Book the yearly medicines review and bring every box with you @recurring(yearly)"
                - "Pass any suggested changes to your prescriber in writing"
            - name: Safe storage, expiry and disposal check
              description: |-
                ## Purpose
                Old psychiatric medicines in a bathroom cabinet are a risk to children, visitors and, in a bad patch, to the person who owns them. A yearly clear-out, returning out-of-date and stopped medicines to a pharmacy and keeping current ones somewhere secure, reduces that risk at almost no cost.

                ## Milestones
                1. Every medicine in the house gathered in one place.
                2. Stopped and out-of-date medicines returned to a pharmacy.
                3. Current medicines stored somewhere cool, dry and out of reach.
                4. A lockable box in use where anyone in the home is at risk.

                ## Notes
                If keeping a large stock at home worries you or someone close to you, ask your prescriber about smaller, more frequent supplies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No stopped or expired medicines remain at home, and current ones are stored securely, checked within the last year."
                cadence: cyclic
              tasks:
                - "Gather every medicine in the house onto one table"
                - "Take stopped and expired medicines back to a pharmacy for disposal"
                - "Move current medicines to a secure, cool place"
                - "Repeat the clear-out and storage check @recurring(yearly)"
            - name: How your medicine class works and how long it takes
              description: |-
                ## Purpose
                Knowing roughly how your type of medicine acts explains things that otherwise feel alarming: why antidepressants often take two to six weeks to help, why side effects tend to come before benefits, and why stopping suddenly causes trouble. A short session of reading from reputable sources turns the first weeks from guesswork into an expected pattern.

                ## Milestones
                1. The class of each medicine identified, for example SSRI, SNRI or mood stabiliser.
                2. Two reputable sources read: a health service page and a medicines information charity or pharmacy guide.
                3. The expected time to first benefit noted in your log.
                4. Remaining questions taken to your prescriber or pharmacist.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A half-page note explains your medicine's class, expected time to benefit and early side effect pattern, citing two reputable sources."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up which class each of your medicines belongs to"
                - "Read one health service page and one pharmacy guide on that class"
                - "Write the expected time to first benefit at the top of your log"
                - "Note anything you read that conflicts with what you were told"
            - name: Telling side effects apart from symptoms
              description: |-
                ## Purpose
                Tiredness, poor sleep, low appetite, restlessness and low libido can all be part of depression or anxiety and can all be medicine side effects. Learning to record when each started relative to the medicine, and whether it changes with the dose, helps you and your prescriber decide which is which instead of guessing.

                ## Milestones
                1. A list of symptoms you had before starting the medicine, from memory or the baseline.
                2. New symptoms since starting marked with the date they began.
                3. Any link between symptoms and dose timing noted.
                4. Your prescriber's view on each ambiguous symptom recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each symptom in your log is marked as present before the medicine or new since, and ambiguous ones have been discussed with your prescriber."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the symptoms you had in the month before starting"
                - "Mark every symptom that began after the medicine with its start date"
                - "Note whether any symptom peaks a few hours after the dose"
                - "Ask your prescriber about the symptoms you cannot place"
            - name: Discontinuation symptoms versus relapse
              description: |-
                ## Purpose
                Stopping or reducing many psychiatric medicines can bring dizziness, electric-shock sensations, flu-like feelings, irritability or vivid dreams, and these are easily mistaken for the illness returning. Understanding the difference in timing and type, before any reduction, avoids both unnecessary restarts and missed relapses.

                ## Milestones
                1. Common discontinuation symptoms for your medicine listed from reputable sources.
                2. Typical timing of discontinuation symptoms compared with a relapse noted.
                3. Your own early relapse signs written from past experience.
                4. The differences discussed with your prescriber before any dose reduction.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of discontinuation symptoms and your personal relapse signs exists and has been discussed with your prescriber."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your leaflet's section on stopping the medicine"
                - "List the discontinuation symptoms most reported for your medicine"
                - "Write the first signs you noticed in past episodes of illness"
                - "Bring the comparison to your prescriber before any reduction"
            - name: Generic switches and tablets that look different
              description: |-
                ## Purpose
                Pharmacies often change supplier, so the same medicine can arrive in a new colour, shape or box, which causes confusion, doubled doses or the worry that something has changed. Knowing how to read the label, and which medicines your prescriber prefers kept on one brand, keeps a supplier change from becoming a dosing error.

                ## Milestones
                1. The generic name and strength of each medicine recognisable on any label.
                2. Your prescriber asked whether any medicine should stay on one brand or formulation.
                3. A habit of checking the label whenever a pack looks different.
                4. Any change you noticed after a supplier switch reported to the pharmacist.

                ## Notes
                For a small number of medicines, such as some lithium preparations and modified-release forms, the product is usually kept consistent. Ask rather than assume.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can identify each medicine by generic name and strength on any label, and brand-consistency requirements are confirmed with your prescriber."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare the label on your current pack with the one on your list"
                - "Ask whether any of your medicines must stay on one brand"
                - "Photograph each current tablet and pack for future comparison"
                - "Report any effect you notice after a supplier change"
            - name: Using a rating scale the same way every time
              description: |-
                ## Purpose
                Questionnaires such as the PHQ-9 and GAD-7 are only useful for tracking medicine response if they are filled in consistently: same time window, same time of week, honest rather than hopeful answers. A short practice of reading the instructions and noting what affected each score makes the numbers comparable over months.

                ## Milestones
                1. The scale's time window and scoring instructions understood.
                2. A fixed day and time chosen for completing it.
                3. Four scores completed under the same conditions.
                4. Events that may have swayed each score noted beside it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Four consecutive scale scores are completed on the same day and time window, each with a note on unusual events."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the instructions and time window printed on your scale"
                - "Pick the day and time you will always complete it"
                - "Complete the scale and add one line on unusual events that week"
                - "Compare four scores and check they used the same conditions"
            - name: Getting the most from a short medication review
              description: |-
                ## Purpose
                Ten minutes with a prescriber goes fast, and people tend to spend it describing the last bad day rather than the trend. A few practised habits, leading with the score trend, naming one main question, asking what happens next and repeating back the plan, make short reviews far more productive.

                ## Milestones
                1. A three-sentence opening summary of the period since the last review written.
                2. One main question chosen in advance.
                3. The questions what are the options, what if we wait, and when do we review again prepared.
                4. The plan repeated back to the prescriber and written down before the end.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At two consecutive reviews you opened with a prepared summary, asked your main question and left with the plan written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write a three-sentence summary of how things have been since the last review"
                - "Choose the single question that matters most for this review"
                - "Practise saying the summary aloud once before the appointment"
                - "Repeat the agreed plan back to the prescriber before you leave"
            - name: Alcohol, cannabis and caffeine alongside your medicines
              description: |-
                ## Purpose
                Alcohol can add to drowsiness from many psychiatric medicines and can undo their benefit on mood, cannabis may interact with some, and heavy caffeine can worsen anxiety or sleep. Getting a clear answer from a pharmacist for your specific medicines, and recording your own use honestly for a month, replaces guesswork with facts.

                ## Milestones
                1. Pharmacist or prescriber advice on alcohol, cannabis and caffeine for each medicine recorded.
                2. A month of your actual use noted alongside mood and side effects.
                3. Any link between use and worse days identified.
                4. One change chosen if the record suggests it.

                ## Notes
                Being open with your prescriber about substance use helps them prescribe safely. It is information, not a confession.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written professional advice on alcohol, cannabis and caffeine for your medicines exists, alongside a month of honest use records."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist how alcohol affects each of your medicines"
                - "Ask about cannabis and caffeine in the same conversation"
                - "Record drinks, cannabis and caffeine beside your weekly check for a month"
                - "Choose one change if the record shows a pattern"
            - name: First six weeks on a new antidepressant
              description: |-
                ## Purpose
                The first weeks on an antidepressant are when people most often give up: side effects arrive early, benefits come later, and some feel more anxious or restless before they feel better. Planning those six weeks, with weekly scores, a side effect note and a follow-up already booked, gives the medicine a fair trial and catches problems quickly.

                ## Milestones
                1. The start date, medicine and dose recorded, with a baseline score.
                2. A follow-up contact booked within the first two to four weeks, as your prescriber advises.
                3. Weekly scores and side effects recorded for six weeks.
                4. The six-week picture discussed and the next step agreed.

                ## Notes
                Never stop or change a dose without talking to your prescriber. Contact them or urgent services straight away if you notice new or worse thoughts of self-harm or suicide.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six weeks of weekly scores and side effect notes are recorded and the next step has been agreed with your prescriber."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Record the start date, dose and a baseline score"
                - "Book the early follow-up before the end of the first week"
                - "Tell one trusted person you have started and what to watch for"
                - "Bring six weeks of scores and side effects to the follow-up"
            - name: Following through on a dose change
              description: |-
                ## Purpose
                When a dose goes up or down, the next month tells you whether the change helped, and the evidence is lost if nobody writes it down. Treating each dose change as a small four-week project, with the date, a before score and weekly notes, makes the next decision far clearer.

                ## Milestones
                1. The date and new dose recorded with a before score.
                2. Weekly scores and side effects noted for four weeks.
                3. Any new side effect reported within the time your prescriber asked.
                4. The four-week result compared with the before score and shared.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A four-week record after the most recent dose change, with before and after scores, has been shared with your prescriber."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Write the date, old dose and new dose on your medicine list"
                - "Record a before score on the day of the change"
                - "Note new or changed side effects each week for four weeks"
                - "Send the before and after comparison to your prescriber"
            - name: Raising a side effect that is not settling
              description: |-
                ## Purpose
                Many side effects ease within a few weeks, but some persist and quietly lead people to stop treatment without telling anyone. Describing the side effect precisely, with how often, how severe and what it stops you doing, gives your prescriber what they need to suggest a timing change, a dose adjustment or an alternative.

                ## Milestones
                1. The side effect described with start date, frequency, severity and impact on daily life.
                2. What you have already tried noted.
                3. The concern raised with your prescriber or pharmacist.
                4. The agreed response recorded and followed up after a set period.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A persistent side effect has been described in writing, raised with your prescriber, and an agreed response recorded with a follow-up date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write when the side effect began and how often it happens"
                - "Rate its severity and name one thing it stops you doing"
                - "Contact your prescriber about it rather than waiting for the review"
                - "Record the agreed response and the date to check again"
            - name: Sexual side effects conversation with your prescriber
              description: |-
                ## Purpose
                Reduced desire, difficulty with arousal or orgasm are common with several antidepressants, yet they are among the least reported side effects because both patient and clinician avoid the subject. Preparing the words in advance makes it a routine conversation, and there are often options worth discussing.

                ## Milestones
                1. Whether the problem predates the medicine noted.
                2. A plain, brief description written in advance.
                3. The subject raised at the review, with any partner input you want included.
                4. Options discussed and the agreed approach recorded.

                ## Notes
                Prescribers hear this regularly. Writing it on a note and handing it over is perfectly acceptable.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Sexual side effects have been raised with your prescriber and the options discussed and agreed approach are written down."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note whether the change started before or after the medicine"
                - "Write two sentences describing the problem to hand over if speaking feels hard"
                - "Raise it at your next review or book a call specifically for it"
                - "Record the options discussed and what you agreed"
            - name: Switching to a different medicine with your prescriber
              description: |-
                ## Purpose
                Switching from one psychiatric medicine to another often involves overlapping or staged doses over days or weeks, and written instructions given verbally in an appointment are easy to garble. Turning the prescriber's plan into a dated day-by-day schedule, and tracking how each step feels, makes the switch safer and easier to adjust.

                ## Milestones
                1. The switch plan from your prescriber written as a dated day-by-day schedule.
                2. The schedule checked back with the prescriber or pharmacist.
                3. Each day's doses ticked off and symptoms noted through the switch.
                4. A review after the switch held and the outcome recorded.

                ## Notes
                Only follow a switching schedule your prescriber has given you. Ask them for the plan in writing if you can.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written day-by-day switch schedule confirmed by your prescriber has been followed and the post-switch review outcome recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Ask your prescriber for the switching plan in writing"
                - "Turn the plan into a dated calendar of doses"
                - "Ask the pharmacist to check the calendar against the prescription"
                - "Note doses and symptoms each day until the post-switch review"
            - name: Preparing to ask about coming off a medicine
              description: |-
                ## Purpose
                Feeling well for a long time naturally raises the question of whether a medicine is still needed, and the answer depends on your history, the risks of relapse and how stopping would be managed. Arriving at that conversation with your history, your reasons and your questions makes it a shared decision rather than a quick yes or no.

                ## Milestones
                1. Your reasons for wanting to stop written in a few lines.
                2. Your medicine history and time well since the last episode summarised.
                3. Questions prepared on relapse risk, timing and how a reduction would be planned.
                4. A decision recorded, with a plan or a date to revisit.

                ## Notes
                Do not stop a psychiatric medicine suddenly. Agree any reduction with your prescriber first.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A conversation about stopping has been held with your prescriber and the decision, with a plan or revisit date, is written down."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down why you want to consider stopping now"
                - "Note how long you have felt well and any past relapses after stopping"
                - "Prepare questions on relapse risk, timing and reduction steps"
                - "Book a review specifically to discuss coming off"
            - name: Following an agreed tapering schedule
              description: |-
                ## Purpose
                Reducing a psychiatric medicine is usually done in steps over weeks or months, adjusted to how each step feels, and the plan only works if each reduction and its effects are recorded. A taper log with the dose for each period, a weekly symptom score and a pre-agreed rule for pausing makes the process steadier and easier to adjust with your prescriber.

                ## Milestones
                1. The taper plan from your prescriber written with dates and doses for each step.
                2. A rule agreed with your prescriber for when to pause or slow down.
                3. Weekly discontinuation and mood scores recorded at every step.
                4. The final step reached, or a pause agreed and recorded.

                ## Notes
                The schedule is your prescriber's to set and adjust. Contact them if symptoms become hard to manage rather than changing the plan yourself.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every taper step is recorded with dates, doses and weekly scores, and any pause or change was agreed with your prescriber."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write each taper step with its dates and dose in your calendar"
                - "Ask your prescriber what symptoms should prompt a pause"
                - "Score discontinuation symptoms and mood during the taper @recurring(weekly:wed)"
                - "Tell one person close to you which step you are on"
            - name: Continue or stop decision after a period of feeling well
              description: |-
                ## Purpose
                Guidelines commonly suggest staying on an antidepressant for some months after recovery, and longer for people with repeated episodes, but the right length for you is a decision to make with your prescriber. Setting a review point in advance, with your history and preferences ready, stops the decision being made by drift or by running out.

                ## Milestones
                1. The recommended continuation period for your situation asked about and noted.
                2. A review date set for when that period ends.
                3. Your preferences and concerns about long-term use written down.
                4. The decision to continue, reduce or stop recorded with the reasons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A continuation decision has been made with your prescriber at a pre-set review point and recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your prescriber how long they suggest continuing once you are well"
                - "Put the end of that period in your calendar as a review date"
                - "Write your hopes and worries about staying on the medicine"
                - "Record the decision and reasons after the review"
            - name: Prescription cost check
              description: |-
                ## Purpose
                Psychiatric medicines are often taken for years, and per-item charges, insurance co-pays or private prescription costs add up quietly. Checking once whether a prepayment scheme, a different supply length, a generic version or an exemption applies can cut the yearly cost without changing the treatment.

                ## Milestones
                1. Your yearly spend on prescriptions worked out.
                2. Prepayment, exemption, insurance or assistance options in your country checked.
                3. Generic availability for each medicine confirmed with the pharmacist.
                4. The cheapest legitimate route chosen and set up.
              priority: low
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your yearly prescription cost is calculated, cost-saving options are checked and the cheapest suitable route is in place."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add up what you spent on prescriptions in the last twelve months"
                - "Check prepayment, exemption or insurance options where you live"
                - "Ask the pharmacist whether a generic exists for each medicine"
                - "Recheck costs and scheme renewal dates @recurring(yearly)"
            - name: First psychiatrist appointment preparation
              description: |-
                ## Purpose
                A first appointment with a psychiatrist is often long-awaited and short, and the quality of the medicine plan that comes out of it depends on the history you bring. Arriving with your medicine timeline, current list, scores and three questions makes the assessment more accurate and the recommendations more specific.

                ## Milestones
                1. Your current medicine list and past medicine timeline printed.
                2. Recent questionnaire scores and the monthly summaries gathered.
                3. Three questions about diagnosis or medicine options written.
                4. The recommendations written down during or straight after the appointment.

                ## Notes
                Start from the **Meeting notes** template to capture what the psychiatrist recommends and who will act on it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You attended the psychiatrist appointment with your medicine list, timeline and scores, and the recommendations are written down with who acts on each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Print your medicine list, timeline and latest scores"
                - "Write three questions you most want answered"
                - "Ask someone you trust to come along or be on the phone"
                - "Note each recommendation and who is responsible for acting on it"
            - name: Travelling across time zones with your medicines
              description: |-
                ## Purpose
                Crossing time zones shifts dose times, long travel days disrupt routine, and some psychiatric medicines are controlled drugs that need paperwork at borders. Planning dose times, packing enough with a buffer in hand luggage and checking the destination's rules prevents both missed doses and awkward conversations at customs.

                ## Milestones
                1. A plan for shifting dose times across the time difference agreed with your pharmacist.
                2. Enough medicine for the trip plus several days' buffer, in original packaging.
                3. Destination rules on importing your medicines checked, with a prescriber letter if needed.
                4. Medicines packed in hand luggage with a copy of your list.

                ## Notes
                Start from the **Trip** template and add the medicine steps to its packing list.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A trip is completed without missed doses, with medicines carried in original packs and any required documents in hand."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your pharmacist how to shift dose times for the time difference"
                - "Check the destination's rules on bringing your medicines in"
                - "Order enough supply for the trip plus a buffer"
                - "Pack medicines and a copy of your list in hand luggage"
            - name: Hospital admission or surgery medicine handover
              description: |-
                ## Purpose
                On admission, psychiatric medicines are sometimes missed, mis-dosed or stopped without anyone realising, especially when the admission is for something unrelated. Bringing an up-to-date list, your medicines in their boxes and a short note on what happens if a dose is missed protects continuity during a stay.

                ## Milestones
                1. An up-to-date list and boxed medicines packed for admission.
                2. The ward team told about each psychiatric medicine and its missed-dose risk.
                3. Any medicines paused during the stay noted, with a plan for restarting.
                4. The discharge list checked against your own before leaving.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "During your most recent admission your psychiatric medicines were continued or deliberately paused, and the discharge list matched your own."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Pack your medicine list and medicines in their original boxes"
                - "Tell the admitting nurse about each psychiatric medicine"
                - "Ask how any paused medicine will be restarted"
                - "Compare the discharge list with your own before you leave"
            - name: Moving area or changing doctor without a supply gap
              description: |-
                ## Purpose
                Moving house, changing practice or being discharged from one service to another is a classic point where prescriptions lapse, because the old prescriber stops and the new one has not started. Registering early and carrying your own records bridges the gap.

                ## Milestones
                1. The new practice registered with before the old supply runs out.
                2. At least a month of supply in hand when the move happens.
                3. Your medicine list, timeline and recent letters handed to the new prescriber.
                4. The first repeat prescription from the new practice issued.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The move to a new prescriber was completed with no day without medicine and your records handed over."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Register with the new practice as soon as you know the address"
                - "Ask the current prescriber for a supply that covers the changeover"
                - "Hand your list, timeline and letters to the new practice"
                - "Confirm the first repeat prescription is set up at the new pharmacy"
            - name: Holiday period supply check
              description: |-
                ## Purpose
                Pharmacies and practices close or run short hours over public holidays, and the end of December in particular catches people out with a prescription due on a closed day. Checking supply two weeks before each long holiday, and ordering early, removes the most predictable cause of running out.

                ## Milestones
                1. The main holiday closures in your area noted.
                2. Supply counted two weeks before each one.
                3. Early orders placed where supply would run out.
                4. A full year of holidays passed with no gap in supply.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No gap in supply over any public holiday in the last twelve months."
                cadence: cyclic
              tasks:
                - "List the long holiday closures coming up this year"
                - "Count your supply two weeks before the end-of-year holidays @recurring(yearly)"
                - "Order early if supply will not last through the closure"
            - name: Planning a pregnancy while on psychiatric medicine
              description: |-
                ## Purpose
                Decisions about psychiatric medicine before and during pregnancy and breastfeeding weigh the risks of the medicine against the real risks of becoming unwell, and they are best made in advance rather than in a rush. A planned conversation with your prescriber, and specialist perinatal input where available, gives time to choose calmly.

                ## Milestones
                1. A preconception appointment with your prescriber booked.
                2. Your medicine list, history and questions about pregnancy and breastfeeding prepared.
                3. A written plan agreed, including who to contact once pregnant.
                4. Referral to a perinatal mental health service discussed.

                ## Notes
                If you become pregnant unexpectedly, do not stop your medicine abruptly. Contact your prescriber promptly to discuss it.
              priority: high
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written medicine plan for pregnancy and breastfeeding is agreed with your prescriber before trying to conceive."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book an appointment about medicines before trying to conceive"
                - "List your questions about pregnancy and breastfeeding"
                - "Ask whether a perinatal mental health referral is available"
                - "Write down the agreed plan and who to call once pregnant"
            - name: Supporting a teenager starting psychiatric medicine
              description: |-
                ## Purpose
                Parents of a young person starting an antidepressant are often told to watch closely in the first weeks, without being told what that means day to day. Agreeing with your teenager and the prescriber who holds the medicine, what to watch for and how often to check in respects their privacy while keeping them safe.

                ## Milestones
                1. The prescriber's specific watch points for young people written down.
                2. Who stores and gives the medicine agreed with the young person.
                3. A weekly check-in in place that the young person accepts.
                4. Contact details for the prescriber and urgent help agreed between you.

                ## Notes
                Young people can be more vulnerable to agitation or suicidal thoughts in the early weeks. Ask the prescriber what to watch for and seek help the same day if you are worried.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written agreement with your teenager covers medicine storage, watch points and a weekly check-in, kept for the first three months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask the prescriber what to watch for in the first weeks"
                - "Agree with your teenager where the medicine is kept and who gives it"
                - "Hold a short check-in about the medicine with your teenager @recurring(weekly:thu)"
                - "Save the urgent help numbers on both your phones"
            - name: Several medicines in later life
              description: |-
                ## Purpose
                Older adults often take psychiatric medicines alongside treatments for blood pressure, pain or sleep, and the combination can bring dizziness, falls, confusion or low sodium. A focused review of the whole list, with attention to falls and memory, keeps the benefits while trimming avoidable risks.

                ## Milestones
                1. One combined list of every medicine from every prescriber.
                2. Any falls, dizziness, confusion or constipation in the past six months noted.
                3. A review requested that looks at the whole list together.
                4. Agreed changes recorded and the list updated.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A whole-list review covering falls and memory has been held and the combined medicine list updated with any changes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Combine prescriptions from every doctor onto one list"
                - "Write down any falls, dizziness or confusion in the last six months"
                - "Ask for a review of the whole list with falls in mind"
                - "Update the list with every change agreed"
            - name: Managing medicines for someone you care for
              description: |-
                ## Purpose
                Carers often end up ordering, sorting and prompting psychiatric medicines for a partner, parent or adult child, usually with no clear agreement about how much to be involved. A written arrangement, with the person's consent, about what you handle and what they keep, protects their independence and your peace of mind.

                ## Milestones
                1. The person's consent and preferences about your role written down.
                2. Your role with the prescriber and pharmacy confirmed, including any consent forms.
                3. A weekly routine for ordering, sorting and checking set up.
                4. Warning signs and who to call known by both of you.

                ## Notes
                Sharing information with a carer usually needs the person's consent. Ask the practice how they record it.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A consented written arrangement defines your role, the care team has it on record and a weekly medicine routine has run for two months."
                cadence: rolling
              tasks:
                - "Ask the person which parts of their medicines they want help with"
                - "Ask the practice how to record their consent for you to be involved"
                - "Check the week's doses and supply together @recurring(weekly:mon)"
                - "Keep a copy of their medicine list and warning signs card"
            - name: Dose timing around rotating shift work
              description: |-
                ## Purpose
                Night shifts and rotating rotas make a fixed clock time for doses impossible, and some psychiatric medicines are sedating or activating enough to matter on a night shift. Agreeing with a pharmacist how to anchor doses to your sleep rather than the clock keeps them consistent across the rota.

                ## Milestones
                1. Your rota pattern described to the pharmacist.
                2. A rule agreed for dose timing on day, night and changeover days.
                3. The rule written on your rota or calendar.
                4. Drowsiness or alertness on shift recorded for a full rota cycle.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A written dose timing rule for each shift type is agreed with a pharmacist and followed for one full rota cycle."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write out a typical rota cycle with sleep times"
                - "Ask your pharmacist how to time each dose around that pattern"
                - "Mark dose times for each shift type on your calendar"
                - "Note drowsiness or alertness on shift for one full cycle"
            - name: Keeping a prescription going as a student
              description: |-
                ## Purpose
                Students moving between home and university often fall between two doctors, with prescriptions at one address and the student at the other. Registering at the term-time practice, transferring records and planning supply around term breaks prevents the mid-term gap that so often derails treatment.

                ## Milestones
                1. Registered with a practice near your term-time address.
                2. Your medicine list and recent letters sent to the new practice.
                3. A repeat prescription and pharmacy set up near campus.
                4. Supply planned to cover every term break.

                ## Notes
                University wellbeing services can often help with registration and can liaise with your prescriber if you agree.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "You are registered near your term-time address with a working repeat prescription, and no break in the year left you without supply."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Register with a practice near your term-time address"
                - "Send your medicine list and latest letter to the new practice"
                - "Check supply will cover the next term break @recurring(quarterly)"
                - "Tell your university wellbeing service if you want extra support"
            - name: Evidence file of adequate trials for a specialist referral
              description: |-
                ## Purpose
                When two or more medicines have not helped, a specialist will want to know whether each was tried at an adequate dose for long enough and taken reliably. An evidence file pulling together your timeline, scores, doses and adherence makes a specialist assessment faster and the next recommendation better informed.

                ## Milestones
                1. Each past trial listed with dose, duration and adherence.
                2. Before and after scores attached to each trial where available.
                3. Reasons for stopping and any side effects summarised.
                4. The file sent to the specialist ahead of the appointment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A file summarising each past medicine trial's dose, duration, adherence, scores and outcome has been sent to the specialist before assessment."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pull each past trial from your timeline into a table"
                - "Add dose, duration and how reliably each was taken"
                - "Attach before and after scores where you have them"
                - "Ask the agent to draft a one-page cover summary for the specialist"
            - name: Multi-year medicine and outcome review
              description: |-
                ## Purpose
                Years of logs can show what single reviews cannot: which dose coincided with the steadiest year, whether winters dip despite treatment, and how side effects have changed with age. Charting doses against scores once a year turns your own records into evidence for long-term decisions with your prescriber.

                ## Milestones
                1. Dose changes and monthly scores combined into one chart.
                2. The steadiest and hardest periods identified with what was happening.
                3. Long-term side effects such as weight or sleep changes summarised.
                4. Two or three observations shared with your prescriber.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly chart of doses against scores, with written observations, has been shared with your prescriber."
                cadence: cyclic
              tasks:
                - "Gather twelve months of monthly summaries into one table"
                - "Chart doses and scores and note what you see @recurring(yearly)"
                - "Share two or three observations at your next review"
            - name: Advance statement of medication preferences
              description: |-
                ## Purpose
                If you become very unwell, decisions about medicine may be made by people who do not know you well. Writing an advance statement while well, setting out which medicines have worked, which caused serious problems and what you would prefer, gives your future care team clear guidance, and in some countries it can be formally recorded.

                ## Milestones
                1. Medicines that helped and those that caused serious problems listed.
                2. Your preferences for treatment in a crisis written in plain words.
                3. The statement discussed with your prescriber or care coordinator.
                4. Copies held by your care team and one trusted person.

                ## Notes
                The legal status of advance statements differs by country. Ask your care team how to record one where you live.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written advance statement of medicine preferences is on file with your care team and held by one trusted person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List medicines that helped and those you would not want again"
                - "Write your treatment preferences for a crisis in plain words"
                - "Ask your care team how to record the statement formally"
                - "Reread and update the statement while well @recurring(yearly)"
---

# Mental Health Medication Tracking

This area is for anyone taking an antidepressant, anti-anxiety medicine, mood stabiliser, antipsychotic or other psychiatric medicine, and for the people who help them keep track. It starts with the foundations (a full medicine list, your past medicine history, agreed target symptoms, a baseline score and a warning signs card), then the routines that keep doses, side effects and supplies in order, the knowledge that helps you read what is happening, the decisions about dose changes, switches and coming off, the events that disrupt supply, versions for parents, carers, older adults, shift workers and students, and finally the specialist record-keeping of a long-term medicine user.

What repeats is a daily dose tick, a Sunday side effect and mood check, a weekly pill organiser fill, a monthly reorder and one-page summary, a quarterly review preparation and a yearly round of blood tests, pharmacist review and holiday supply check. The Purchase decision, Habit tracker, Metrics log, Meeting notes and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
