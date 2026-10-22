---
id: physical-health.annual-health-check-ups
name: Annual Health Check-Ups
description: "A yearly check-up routine you actually keep: a registered practice, a written baseline, a booked appointment every year and a follow-up for every result."
category: personal
version: 1.0.0
tags: [physical-health, annual-health-check-ups, everyone, check-ups, blood-tests, baseline, prevention]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - meeting-notes
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Annual Health Check-Ups
          description: "Booking and following up yearly GP or physician check-ups, blood work and baseline measurements so nothing creeps up unnoticed, for any adult who wants a routine."
          projects:
            - name: Register with a doctor's practice near home
              description: |-
                ## Purpose
                Everything else in this area assumes a practice that knows you exist, and many people only discover they are not registered when they are already ill. Registering while you are well means the first appointment is about prevention rather than a crisis, and your records can be transferred before you need them.

                ## Milestones
                1. Two or three nearby practices compared on opening hours, online booking and distance.
                2. A registration submitted and confirmed in writing by the practice.
                3. Previous records requested from your old practice or country, with a reference number noted.
                4. The practice's phone number, address and booking route saved in your contacts.

                ## Notes
                If you are already registered, check the practice still holds your current address and mobile number, since recall letters go wherever they think you live.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written confirmation of registration with a named practice, and a request for previous records logged with its date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up the three practices closest to home and note their booking options"
                - "Submit a registration form to the practice that suits you best"
                - "Ask the new practice to request your records from your previous doctor"
                - "Save the practice phone number and online booking link to your contacts"
            - name: Patient portal and online access set up
              description: |-
                ## Purpose
                Most practices now offer an app or web portal where you can book, see test results and order repeat items, but access usually needs an identity check you have to request. Getting it working once saves a phone queue every time a result comes back, and lets you read results in full rather than hearing a summary.

                ## Milestones
                1. Identity verification completed for the practice's online service.
                2. Online access confirmed for appointments, test results and your record summary.
                3. A test login done from your phone, with the password stored in your password manager.
                4. Notifications switched on so new results and messages are not missed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "You can log in from your phone and see at least your appointment list and one past test result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask reception which online service the practice uses and how to verify identity"
                - "Complete the identity check and create the portal login"
                - "Request full access to test results and the detailed record, not just booking"
                - "Check the portal for new messages and results @recurring(weekly:mon)"
            - name: Personal health baseline sheet
              description: |-
                ## Purpose
                A check-up is far more useful when there is a known starting point to compare against. Writing down your height, weight, waist, resting heart rate and a home blood pressure reading on one dated page gives you and your doctor a reference that makes next year's numbers mean something.

                ## Milestones
                1. Height, weight and waist measured on the same morning and written down with the date.
                2. Resting heart rate taken on three mornings and averaged.
                3. A home blood pressure reading pair recorded, or a pharmacy reading noted if you have no monitor.
                4. The sheet saved where you can reach it in an appointment, on paper and in the vault.

                ## Notes
                Measure first thing, before food and after using the toilet, so next year's comparison uses the same conditions.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One dated page holding height, weight, waist, averaged resting heart rate and a blood pressure reading, stored in the vault."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Measure height, weight and waist tomorrow morning and write them down"
                - "Take your resting heart rate on three mornings this week"
                - "Get a blood pressure reading at home or at a pharmacy and record it"
                - "Save the baseline as a page in this area with today's date"
            - name: First comprehensive blood panel
              description: |-
                ## Purpose
                Blood tests catch things that cause no symptoms for years: blood sugar drifting up, kidney function slipping, cholesterol or iron that needs attention. A first panel taken while you are well becomes the reference point every later result is judged against.

                ## Milestones
                1. The tests your doctor recommends for your age agreed at an appointment or by message.
                2. A blood draw booked, with any fasting instructions written down.
                3. Results received and read in full on the portal.
                4. Each flagged value discussed with a clinician and the agreed next step noted.

                ## Notes
                Ask whether the test needs fasting and whether you should take usual medicines first. Getting this wrong is the most common reason a test has to be repeated.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A full set of first results saved in the vault, with every out-of-range value carrying a recorded next step agreed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Message the practice asking which routine blood tests suit your age"
                - "Book the earliest morning blood draw and note the fasting instructions"
                - "Read the full results on the portal as soon as they arrive"
                - "Book a call with the doctor to talk through any flagged result"
            - name: First annual check-up booked and held
              description: |-
                ## Purpose
                Booking the appointment is the step most people never take, because nothing is urgent. Holding one full check-up, with your baseline sheet and blood results in hand, sets the pattern for every year after and gives you a list of anything worth watching.

                ## Milestones
                1. An appointment booked for a general health review, not a single-problem slot.
                2. Your baseline sheet, blood results and question list brought to the appointment.
                3. Notes written within a day covering what was checked, what was said and any follow-up.
                4. Every agreed follow-up entered as a task with a realistic date.

                ## Notes
                Where a practice offers only short single-issue slots, ask for a double appointment or a health review with the practice nurse.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A completed check-up with written notes saved in the vault and every follow-up item turned into a task."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone or message the practice to book a general health review"
                - "Print or download your baseline sheet and latest blood results"
                - "Write your top three questions on one page the night before"
                - "Write up the appointment notes within a day of the visit"
            - name: Check-up after a long gap
              description: |-
                ## Purpose
                If it has been five or ten years since anyone checked your blood pressure or bloods, the first step back can feel awkward. A gentle return, with a blood test and a nurse check before the doctor, rebuilds the picture without the pressure of explaining the gap.

                ## Milestones
                1. A nurse or health care assistant check booked for blood pressure, weight and bloods.
                2. Results received before seeing the doctor.
                3. A doctor's appointment held to go through the results together.
                4. The yearly booking cycle started from this visit.

                ## Notes
                Practices see people after long gaps every day. There is no need to explain or apologise.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "A nurse check, blood results and a doctor's review completed within six weeks, with the yearly cycle set up."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Book a nurse check for blood pressure, weight and blood tests"
                - "Book the doctor's appointment for after the results are back"
                - "Go through every result with the doctor"
                - "Set the yearly reminder before leaving the practice"
            - name: Age-based routine check eligibility map
              description: |-
                ## Purpose
                Health systems offer different free checks at different ages, and the invitations do not always arrive. A short written map of what you are entitled to now, and what starts at your next birthday milestone, stops you missing a check simply because nobody told you it existed.

                ## Milestones
                1. The routine checks offered in your country or insurance plan for your age listed with their intervals.
                2. Each check marked as done, due or not yet applicable.
                3. The next three upcoming eligibility dates written down.
                4. Any missing invitation chased with the practice.

                ## Notes
                Cancer screening programmes have their own area. Keep this map to general health checks, blood tests and measurements.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page list of every routine check you are eligible for, each with a status and, where due, a booking date."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the routine adult health checks your health service offers by age"
                - "Ask the practice which of these they have on record for you"
                - "Mark each check as done, due or not yet applicable"
                - "Write down the next three dates when a new check becomes available"
            - name: Public versus private health check comparison
              description: |-
                ## Purpose
                Private health assessments range from useful to expensive reassurance, and the public offer is often more complete than people assume. Comparing what each actually tests, what follow-up you get and what it costs lets you spend money only where it adds something.

                ## Milestones
                1. What the public or insured check includes written down test by test.
                2. Two private assessments compared on tests, follow-up and price.
                3. Gaps between the options named, with a view on whether each gap matters for you.
                4. A decision recorded, including the option of doing nothing extra.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of at least three options with a recorded decision and the reason for it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every test included in your free or insured health check"
                - "Find two private assessments and list exactly what each includes"
                - "Note which extra tests your doctor thinks are worthwhile for you"
                - "Write down your decision and the reason in one paragraph"
            - name: One-page summary to bring to appointments
              description: |-
                ## Purpose
                In a short appointment, the doctor knows only what is on the screen and what you manage to say. A single page listing your conditions, current medicines, allergies, recent results and family history lets them see the whole picture in a minute, and it travels with you to any new clinician.

                ## Milestones
                1. Conditions, operations and allergies listed with approximate dates.
                2. Current medicines and supplements listed with doses.
                3. The last results that matter added with their dates.
                4. The page printed and also saved on your phone for unplanned visits.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page summary, dated within the last three months, available both printed and on your phone."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List your diagnoses, past operations and allergies with rough dates"
                - "Copy the names and doses from every medicine and supplement you take"
                - "Update the summary with any new medicine or result @recurring(quarterly)"
                - "Save the page as a phone favourite and print one copy for your bag"
            - name: Appointment preparation note format
              description: |-
                ## Purpose
                Appointments go better when you arrive with your questions written down and leave with the answers captured, but nobody remembers the details a week later. A standard note format, used before and after every health appointment, builds a record of what was said that you can actually search.

                ## Milestones
                1. A note format with sections for questions, measurements, decisions and follow-ups.
                2. The format used for at least one real appointment.
                3. A naming convention agreed so notes sort by date.
                4. Last year's appointment notes, where they exist, moved into the same format.

                ## Notes
                Start from the **Meeting notes** template and rename the sections for clinical use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reusable appointment note format saved in the vault and used for at least one appointment."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Create an appointment note page from the meeting notes template"
                - "Rename the sections to questions, measurements, decisions and follow-ups"
                - "Name the page with the date first so notes sort in order"
                - "Use the format for your next health appointment of any kind"
            - name: Yearly check-up booking cycle
              description: |-
                ## Purpose
                Without a fixed trigger, a year between check-ups quietly becomes three. Tying the booking to the same month every year, with a reminder a few weeks ahead, makes the check-up as automatic as renewing car insurance.

                ## Milestones
                1. A check-up month chosen, ideally one with few work or family peaks.
                2. A yearly reminder set to book a few weeks before that month.
                3. This year's check-up booked through the cycle.
                4. The cycle kept for two consecutive years.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A check-up held in the chosen month for two consecutive years, each booked from the yearly reminder."
                cadence: cyclic
              tasks:
                - "Pick the month you want your check-up every year"
                - "Book the annual check-up and blood tests for the chosen month @recurring(yearly)"
                - "Put next year's reminder in the calendar as soon as this year's visit is done"
            - name: Results follow-up loop
              description: |-
                ## Purpose
                Read once and filed, a result is a result nobody acts on. A simple loop where every new result gets a decision within two weeks (no action, retest, or appointment) closes the gap where borderline numbers drift for years without anyone mentioning them.

                ## Milestones
                1. A single list of results awaiting a decision.
                2. Every result on the list carrying one of three outcomes: no action, retest or appointment.
                3. No result left without a decision for more than two weeks.
                4. Retest dates turned into tasks the day they are agreed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For six months, every new result has a recorded decision within fourteen days of arriving."
                cadence: rolling
              tasks:
                - "Start a list of results that are waiting for a decision"
                - "Review the waiting list and decide on each result @recurring(monthly:9)"
                - "Message the practice about any result older than two weeks without a decision"
            - name: Quarterly home measurement check
              description: |-
                ## Purpose
                Weight, waist and resting heart rate change slowly, which is exactly why nobody notices until the annual visit. Measuring them four times a year in the same way keeps the trend visible and means the doctor sees a line, not a single dot.

                ## Milestones
                1. A fixed morning routine for measuring, written on one line.
                2. Four quarterly readings taken in the first year.
                3. Readings added to the same log every time.
                4. Any change beyond the range you agreed with your doctor raised at the next contact.

                ## Notes
                Start from the **Metrics log** template so each reading lands in the same table.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly measurement sets recorded in one log within twelve months."
                cadence: rolling
              tasks:
                - "Write the measuring routine down so every reading is taken the same way"
                - "Measure weight, waist and resting heart rate and add them to the log @recurring(quarterly)"
                - "Flag any reading outside your usual range for the next appointment"
            - name: Personal health metrics log
              description: |-
                ## Purpose
                Numbers scattered across apps, letters and memory are almost useless at an appointment. One log, holding dated measurements and key blood results side by side, lets you answer the question doctors ask most: has this changed?

                ## Milestones
                1. A log with columns for date, measurement, value and source.
                2. Existing readings from the last two years copied in.
                3. A monthly habit of adding new readings and results.
                4. The log used at an appointment to show a trend.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A single log holding at least two years of dated readings and results, updated every month."
                cadence: rolling
              tasks:
                - "Create a health metrics log from the metrics log template"
                - "Copy in readings and results from the last two years"
                - "Add any new readings and results to the log @recurring(monthly:20)"
            - name: Retest and recall tracker
              description: |-
                ## Purpose
                Doctors often say come back in three months and the practice may or may not send a reminder. Keeping your own list of agreed retests and recall dates means a borderline result is rechecked when it should be, not when you next happen to visit.

                ## Milestones
                1. Every retest or recall agreed in the last year listed with its due month.
                2. Each due item booked or chased.
                3. New recalls added the same day they are agreed.
                4. A monthly glance at what is coming due.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No agreed retest or recall in the last twelve months is more than a month overdue."
                cadence: rolling
              tasks:
                - "List every retest or recall a clinician has mentioned in the last year"
                - "Check the list for anything due next month and book it @recurring(monthly:12)"
                - "Add new recall dates to the list during the appointment where they are agreed"
            - name: Check-up questions log
              description: |-
                ## Purpose
                Questions about your health occur at random moments: a twinge on a walk, a headline, something a friend mentions. Capturing them in one running list through the year means the check-up covers what actually worried you, not just what you remember in the waiting room.

                ## Milestones
                1. A single running list for health questions, reachable from your phone.
                2. Questions added as they occur through the year.
                3. The list sorted into must-ask and nice-to-ask before each check-up.
                4. Answered questions marked with the answer.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A running questions list with entries from at least six different months, used to prepare a check-up."
                cadence: rolling
              tasks:
                - "Create a running health questions note you can reach from your phone"
                - "Add any health question from this week to the running list @recurring(weekly:sun)"
                - "Sort the questions list into must-ask and nice-to-ask @recurring(quarterly)"
                - "Mark each answered question with what you were told"
            - name: Check-up week operational checklist
              description: |-
                ## Purpose
                The week before a check-up has a predictable list: confirm the time, arrange the blood draw, take the measurements, gather the summary, write the questions. Turning it into a checklist you run every year means the appointment starts prepared rather than rushed.

                ## Milestones
                1. A checklist covering the week before, the day itself and the two days after.
                2. The checklist used for this year's check-up.
                3. Anything forgotten this year added before next year.
                4. The checklist linked from the yearly booking cycle.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written check-up week checklist used for a real appointment and improved once afterwards."
                cadence: cyclic
              tasks:
                - "Create the check-up week checklist from the operational checklist template"
                - "Add steps for the week before, the day itself and the follow-up"
                - "Run the checklist for this year's check-up"
                - "Add anything you forgot to the checklist the day after"
            - name: Year-end personal health review
              description: |-
                ## Purpose
                Once a year it pays to look back across every appointment, result and change before deciding what next year's check-up should focus on. A short written review turns twelve months of scattered notes into three priorities for the doctor.

                ## Milestones
                1. The year's appointments, results and measurements gathered in one place.
                2. What improved, what worsened and what is still unexplained written down.
                3. Three priorities chosen for next year's check-up.
                4. The review saved and linked from next year's appointment notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written review of the past year with three named priorities, completed before the next check-up is booked."
                cadence: cyclic
              tasks:
                - "Gather this year's appointment notes, results and measurements"
                - "Write a short review of what improved, worsened or stayed unexplained @recurring(yearly)"
                - "Pick three priorities to raise at the next check-up"
            - name: Household check-up rota
              description: |-
                ## Purpose
                In a family, the adult who books everyone else's appointments is often the one whose own check-up never happens. A single rota showing each household member's yearly checks, with months spread out, makes sure everyone is seen, including the organiser.

                ## Milestones
                1. Each household member listed with their usual checks and last date.
                2. Check-up months spread so no single month is overloaded.
                3. The organiser's own check-up on the rota with the same priority.
                4. The rota reviewed once a year when school terms and work calendars are known.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every household member, including the person organising, has a dated check-up on the rota within the last fifteen months."
                cadence: cyclic
              tasks:
                - "List each person in the household with their last check-up date"
                - "Assign each person a check-up month so the months are spread out"
                - "Review the household rota and book the next round of check-ups @recurring(yearly)"
                - "Check the rota for anyone whose check-up is due next month @recurring(monthly:3)"
            - name: Reading a full blood count
              description: |-
                ## Purpose
                The full blood count is the result most people receive and least understand. Learning what the main values describe, and what usually prompts a doctor to look closer, makes your results readable and your questions sharper without turning you into your own diagnostician.

                ## Milestones
                1. The main full blood count values listed with a one-line plain explanation each.
                2. Your own latest result read against those explanations.
                3. Two questions written down about anything you do not understand.
                4. The explanations saved next to your results for next time.

                ## Notes
                Use reputable health service or patient charity explanations. Interpretation of your own result is for your clinician.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A saved plain-language explainer of the full blood count, used once to prepare questions about your own result."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find a health service page that explains the full blood count"
                - "Write a one-line explanation for each main value"
                - "Read your latest result alongside your explanations"
                - "Write down any question to ask at the next appointment"
            - name: Making sense of reference ranges and flags
              description: |-
                ## Purpose
                Seeing a result marked high or low does not automatically mean a problem, and a result in range is not automatically fine. Understanding how laboratories set reference ranges, and why trends matter more than single flags, takes much of the anxiety out of opening a results page.

                ## Milestones
                1. A short note explaining what a reference range is and why ranges differ between labs.
                2. Examples of when a single flag usually matters and when it usually does not.
                3. Your own flagged results reviewed with this understanding.
                4. A habit of asking about the trend rather than the single value.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explanation of reference ranges in your own words, and at least one result discussed with a clinician in terms of its trend."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient guide on how laboratory reference ranges are set"
                - "Write a short explanation of reference ranges in your own words"
                - "Look at your flagged results and note which ones also changed over time"
                - "Ask at your next appointment how a flagged value compares with previous tests"
            - name: Measuring weight, waist and height accurately
              description: |-
                ## Purpose
                Home measurements are only useful if they are taken the same way each time, and most people measure the waist in the wrong place. A short practice session with the right tape position, scale placement and timing makes every future reading comparable.

                ## Milestones
                1. The recommended waist measurement position looked up and practised.
                2. The scale placed on a hard floor and checked against a known weight.
                3. A written one-line method for each measurement.
                4. Three practice readings taken a week apart with consistent results.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written measuring method for weight, waist and height, with three readings a week apart that differ by less than you would expect from real change."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Look up where on the body the waist should be measured"
                - "Move the scale onto a hard floor and check it with a known weight"
                - "Write down a one-line method for each measurement"
                - "Take practice readings on three mornings a week apart"
            - name: Asking better questions in a short appointment
              description: |-
                ## Purpose
                Typical appointments last ten to fifteen minutes, and the most important question is often asked as the doctor stands up. Learning to lead with your main concern, keep to three questions and check you have understood the plan makes those minutes count.

                ## Milestones
                1. A short guide written for yourself: lead with the main concern, three questions, repeat back the plan.
                2. The method practised at one appointment.
                3. What worked and what did not noted afterwards.
                4. The guide adjusted and kept with your appointment note format.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A personal appointment guide used at two appointments, each ending with the plan repeated back and written down."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient guide on getting the most from a doctor's appointment"
                - "Write your own three-rule guide for appointments"
                - "Use the guide at your next appointment and repeat the plan back"
                - "Note afterwards what you would change next time"
            - name: Bringing someone to an important appointment
              description: |-
                ## Purpose
                When an appointment is likely to bring difficult news or complex choices, a second person catches what you miss and remembers what was said. Choosing who comes, agreeing their role beforehand and telling the practice makes their presence useful rather than awkward.

                ## Milestones
                1. The appointments where a companion would help identified.
                2. A person chosen and their role agreed: note-taker, question-asker or support.
                3. The practice told someone is coming.
                4. Notes from the companion merged with your own afterwards.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "One important appointment attended with a companion whose notes are saved alongside yours."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which upcoming appointment would benefit from a companion"
                - "Ask someone you trust and agree what role they will play"
                - "Tell the practice when you book that someone will attend"
                - "Compare notes with your companion the same day"
            - name: Knowing your core health numbers
              description: |-
                ## Purpose
                Blood pressure, waist-to-height ratio, resting heart rate and a handful of blood values describe most of the risk a routine check-up looks for. Knowing roughly where yours sit, and what target your clinician suggests, turns the check-up into a conversation instead of a verdict.

                ## Milestones
                1. Your core numbers listed: blood pressure, waist-to-height ratio, resting heart rate and key blood values.
                2. Your latest value for each written next to it.
                3. Target ranges agreed with or quoted by your clinician added.
                4. One number chosen to work on, with a sibling area named if it needs one.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of your core health numbers, each with your latest value and a target your clinician has confirmed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Work out your waist-to-height ratio from your baseline sheet"
                - "List your latest blood pressure, heart rate and key blood values"
                - "Ask your clinician which target range applies to each one for you"
                - "Choose one number to focus on over the next year"
            - name: Reading clinic letters and medical shorthand
              description: |-
                ## Purpose
                Letters from hospitals and specialists are written for other clinicians and are full of abbreviations. Learning the common ones, and having a place to look up the rest, means you understand what was decided about you rather than waiting to be told.

                ## Milestones
                1. A personal glossary of the abbreviations in your own letters.
                2. Your last three letters read with the glossary and summarised in one line each.
                3. Unclear points written as questions for the next appointment.
                4. The glossary kept with your appointment notes.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary covering every abbreviation in your last three clinic letters, each letter summarised in a sentence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Collect your last three letters from clinics or specialists"
                - "List every abbreviation and look up what it means"
                - "Write a one-line summary of what each letter decided"
                - "Note any question the letters leave unanswered"
            - name: Making sense of absolute and relative risk
              description: |-
                ## Purpose
                Being told a change halves your risk sounds dramatic until you learn the risk was two in a thousand. Understanding the difference between absolute and relative risk lets you weigh every check-up recommendation at its real size.

                ## Milestones
                1. A plain note explaining absolute and relative risk with one worked example.
                2. Practice translating three health headlines into absolute numbers.
                3. The habit of asking what the numbers are out of a hundred.
                4. One recommendation from your own check-up weighed in absolute terms.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written explainer of absolute and relative risk, and one check-up recommendation discussed with your clinician in absolute numbers."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read a plain-language explanation of absolute and relative risk"
                - "Write your own example using numbers out of a thousand"
                - "Rewrite three health news headlines in absolute terms"
                - "Ask your doctor for the absolute numbers behind one recommendation"
            - name: Raising the symptom you keep putting off
              description: |-
                ## Purpose
                Almost everyone has one symptom they have been meaning to mention for months: a change in bowel habit, a lump, breathlessness on stairs, a mole, poor sleep. Writing it down, with when it started and what makes it better or worse, and raising it first at the next appointment is often the most useful thing a check-up does.

                ## Milestones
                1. The symptom written down with start date, frequency and what affects it.
                2. An appointment booked, or the symptom made the first item at the next check-up.
                3. The clinician's view and any tests recorded.
                4. Any follow-up booked before leaving the practice.

                ## Notes
                If the symptom is new and severe, or matches any urgent warning sign your health service publishes, seek care now rather than waiting for a routine check.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The symptom has been described to a clinician and the outcome, including any tests, is written in your notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the symptom down with when it started and how often it happens"
                - "Book an appointment or put the symptom first on your check-up list"
                - "Describe it in the first minute of the appointment"
                - "Book any agreed test or follow-up before leaving"
            - name: Changing doctor's practice decision
              description: |-
                ## Purpose
                Sometimes the practice is the obstacle: no appointments for weeks, no online booking, or a relationship that has broken down. Weighing the switch properly, including what you might lose, avoids both staying out of inertia and moving to somewhere worse.

                ## Milestones
                1. The specific problems with the current practice written down.
                2. Two alternatives checked for availability, catchment and booking options.
                3. The cost of switching noted, including any ongoing care that would move.
                4. A decision made and, if switching, the registration completed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision to stay or switch, based on a comparison of at least two alternatives."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what is not working with your current practice"
                - "Check two other practices for catchment, hours and booking"
                - "Ask how ongoing referrals and prescriptions would transfer"
                - "Record your decision and act on it within a month"
            - name: Paying for a private health assessment
              description: |-
                ## Purpose
                Private health assessments can add tests the public system does not offer routinely, but some also find harmless anomalies that lead to anxious, unnecessary follow-up. Treating it as a proper purchase decision, with your doctor's view on which extras matter, keeps the money and the worry proportionate.

                ## Milestones
                1. The extra tests you would be paying for listed against what you already get.
                2. Your doctor's view on whether any of those extras are useful for you.
                3. Prices and follow-up arrangements compared for two providers.
                4. A decision recorded, with a budget if you go ahead.

                ## Notes
                Start from the **Purchase decision** template. Ask each provider what happens when they find something: who follows it up and at whose cost.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A completed purchase decision page covering two providers, your doctor's view and a final yes or no."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create a purchase decision page from the template"
                - "List the extra tests two private providers include"
                - "Ask your doctor which of those extras are worthwhile for you"
                - "Record your decision and the budget if you go ahead"
            - name: Employer health benefits audit
              description: |-
                ## Purpose
                Many employment packages include a health check, a cash plan or private cover that employees never claim. Reading your benefits once and listing what they actually pay for can fund this year's dental check, eye test or private blood panel.

                ## Milestones
                1. Your benefits documents found and read.
                2. Every health-related benefit listed with its limit and claim route.
                3. Any unused allowance for this year identified.
                4. At least one benefit used or a reason not to written down.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A list of every health benefit available to you with limits and claim routes, and one benefit used this year."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your benefits handbook or staff portal page on health"
                - "List each health benefit with its annual limit and how to claim"
                - "Book or claim one benefit you are entitled to"
                - "Check which health allowances are left before the benefits year ends @recurring(yearly)"
            - name: Second opinion on a borderline result
              description: |-
                ## Purpose
                Borderline results can sit unexplained for years because it is not quite bad enough to act on. When one keeps reappearing, asking for a repeat test, a different clinician's view or a referral turns watchful waiting into an actual plan.

                ## Milestones
                1. The borderline result and its history written down with dates.
                2. A repeat test or a second clinician's review requested.
                3. The second view recorded and compared with the first.
                4. A plan agreed: monitor with a date, investigate, or close.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A borderline result has a written plan with either a monitoring date, an investigation booked or a clinician's note closing it."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write the borderline result's history with every date and value"
                - "Ask the practice for a repeat test or a review by another clinician"
                - "Record what the second clinician says"
                - "Agree and write down the plan with its next date"
            - name: Home blood test kit evaluation
              description: |-
                ## Purpose
                Finger-prick home kits are easy to order and easy to misread, and the results do not always reach your record. Checking what a kit actually measures, how the sample is analysed and whether your doctor will use the result decides whether it is worth buying at all.

                ## Milestones
                1. The specific question the kit would answer written down.
                2. Two kits compared on tests, laboratory accreditation and price.
                3. Your doctor asked whether they would act on a home kit result.
                4. A decision made, and any result shared with the practice if you go ahead.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on home testing, including your doctor's view on whether they would use the result."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down what you want a home blood test to tell you"
                - "Compare two kits on tests included, laboratory and price"
                - "Ask your practice whether they accept home kit results"
                - "Record your decision and where any result will be filed"
            - name: Grouping check-ups into one health week
              description: |-
                ## Purpose
                Spreading the dentist, eye test, blood draw and check-up across the year means four separate rounds of booking and four lots of time off. Grouping them into one or two weeks cuts the admin, makes the year-end review easier and means one block in the calendar instead of many.

                ## Milestones
                1. Every routine check you have each year listed with its interval.
                2. One or two target weeks chosen for grouping them.
                3. Bookings moved or made to fall in those weeks.
                4. The grouping kept the following year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least three routine checks completed within the same two-week window for a full year."
                cadence: cyclic
                effort_hours_estimate: "2"
              tasks:
                - "List every routine check you have each year and its interval"
                - "Choose one or two weeks a year to group them in"
                - "Book or move as many checks as possible into those weeks"
                - "Block the health week in your work calendar early"
            - name: Milestone birthday check-up
              description: |-
                ## Purpose
                Turning thirty, fifty, sixty or seventy often changes which checks you are offered and which risks matter most. Using the birthday as the reason to book a fuller review, with questions tailored to the decade ahead, makes a date you would mark anyway do some useful work.

                ## Milestones
                1. The checks that start or change at this age looked up.
                2. A fuller review booked within three months of the birthday.
                3. Questions about the next decade's main risks prepared.
                4. A short written plan for the decade ahead saved after the visit.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A review held within three months of a milestone birthday, with a short plan for the decade ahead saved in the vault."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up which checks begin or change at your next milestone age"
                - "Book a fuller review within three months of the birthday"
                - "Write questions about the main risks for the decade ahead"
                - "Save a short decade plan after the appointment"
            - name: Occupational or pre-employment medical
              description: |-
                ## Purpose
                Starting a new job, taking a role with safety duties or accepting a posting abroad can come with a required medical. Knowing in advance what will be measured and which documents to bring stops a paperwork gap from delaying a start date.

                ## Milestones
                1. The requirements of the medical obtained in writing from the employer.
                2. Documents gathered: vaccination record, medicine list, previous results.
                3. The medical attended and the outcome confirmed.
                4. A copy of the report kept for your own records.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The required medical is passed or cleared before the start date, with a copy of the report stored in the vault."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the employer for the medical requirements in writing"
                - "Gather your vaccination record, medicine list and recent results"
                - "Book the medical early enough to repeat anything if needed"
                - "Ask for a copy of the final report"
            - name: Insurance or mortgage medical preparation
              description: |-
                ## Purpose
                Life insurance, income protection and some mortgages ask for a medical, and the result can change your premium for decades. Preparing properly, with honest disclosure, normal sleep and the right paperwork, makes sure the measurements reflect your usual health.

                ## Milestones
                1. The insurer's requirements and the tests involved confirmed.
                2. Your medical history gathered so disclosures are accurate and complete.
                3. The medical scheduled for a morning after a normal night and no heavy exercise.
                4. The outcome and any loading on the premium recorded.

                ## Notes
                Disclose everything you are asked about. Non-disclosure is the most common reason claims are refused years later.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The insurance medical is completed with full disclosure and the insurer's decision is filed with the policy."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the insurer exactly which tests and questions the medical includes"
                - "Gather your diagnoses, medicines and recent results for the disclosure form"
                - "Book a morning slot after a normal night's sleep"
                - "File the insurer's decision letter with the policy documents"
            - name: Pre-participation check for a big physical event
              description: |-
                ## Purpose
                Before a first marathon, a long trek, a contact sport or a sharp jump in training, a check-up can pick up heart, blood pressure or joint issues that are better known in advance. Booking it with enough time to act on the answer protects both the event and you.

                ## Milestones
                1. The event and its demands described in a short note for the clinician.
                2. A check-up booked at least eight weeks before the event.
                3. Any concern found followed up before training peaks.
                4. Clearance or adjusted plans recorded.
              priority: medium
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A check-up held at least eight weeks before the event, with any concern followed up and the outcome written down."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a short description of the event and your training plan"
                - "Book a check-up at least eight weeks before the event"
                - "Mention any chest pain, fainting or palpitations during exercise"
                - "Record the clinician's advice and adjust the training plan"
            - name: Driving licence medical renewal
              description: |-
                ## Purpose
                Older drivers, professional drivers and people with certain conditions need medical confirmation to keep their licence, and the paperwork has fixed deadlines. Starting early, with eyesight and condition reports ready, avoids an enforced break from driving.

                ## Milestones
                1. The renewal date and medical requirements confirmed with the licensing authority.
                2. Any required eyesight test or condition report booked.
                3. Forms completed and submitted before the deadline.
                4. Confirmation of renewal saved.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The licence is renewed before its expiry date with all medical requirements met."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your licence renewal date and what medical evidence is needed"
                - "Book an eyesight test or doctor's report if one is required"
                - "Submit the renewal forms well before the deadline"
                - "Save the renewal confirmation with your licence documents"
            - name: Postnatal check for the birth parent
              description: |-
                ## Purpose
                After a birth, attention goes almost entirely to the baby and the parent's own postnatal check is easy to skip. This check covers recovery, mood, contraception, blood pressure and pelvic health, and it is often the only routine moment those things are asked about.

                ## Milestones
                1. The postnatal check booked at the time the practice recommends.
                2. A short list of physical and emotional questions written beforehand.
                3. The check attended, ideally with childcare arranged so there is time to talk.
                4. Any follow-up for pelvic health, mood or blood pressure booked.
              priority: high
              deadlineOffsetDays: 56
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The birth parent's own postnatal check is completed and every follow-up from it is booked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Book the postnatal check for the birth parent, separate from the baby's"
                - "Write questions about recovery, mood, pelvic health and contraception"
                - "Arrange someone to hold the baby during the appointment"
                - "Book any follow-up the check recommends"
            - name: Registering with a doctor as a student
              description: |-
                ## Purpose
                Students moving away from home often stay registered with the family doctor for years, which makes urgent appointments and repeat prescriptions near university awkward. Registering locally in the first weeks of term, and passing on any ongoing conditions, keeps care where you actually live.

                ## Milestones
                1. The university or local practice registration completed in the first weeks of term.
                2. Any ongoing condition, medicine or allergy passed to the new practice.
                3. Repeat prescriptions moved to a pharmacy near campus.
                4. The plan for holiday periods back home written down.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registered with a practice near your term-time address, with repeat prescriptions collectable locally."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the practice your university recommends for students"
                - "Complete the registration in your first weeks of term"
                - "Tell the new practice about any condition, medicine or allergy"
                - "Move repeat prescriptions to a pharmacy near where you live in term"
            - name: First check-up after moving country
              description: |-
                ## Purpose
                Moving abroad resets everything: a new health system, different screening ages, records in another language and sometimes a gap in cover. A deliberate first check-up within months of arriving rebuilds your baseline and makes sure nothing from home falls through the gap.

                ## Milestones
                1. How routine care works in the new country understood, including any insurance requirement.
                2. Records, results and vaccination history from home gathered, translated where needed.
                3. Registered with a local practice or provider.
                4. A first check-up held and the new schedule of routine checks written down.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Registered with a local provider, with home records transferred and a first check-up completed within three months of moving."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read how routine adult care and registration work in the new country"
                - "Request copies of your records and results from home"
                - "Register with a local practice or insured provider"
                - "Book a first check-up and bring your records"
            - name: Arranging an older parent's annual review
              description: |-
                ## Purpose
                Older parents often under-report problems at appointments or forget what was said. Helping them book their annual review, prepare a short list and, with their permission, attend or take notes makes the appointment safer and keeps the family informed without taking over.

                ## Milestones
                1. Your parent's agreement on how involved they want you to be.
                2. Their annual review booked, with transport arranged.
                3. A short list of their concerns and medicines prepared together.
                4. Notes from the appointment shared with them and agreed next steps written down.

                ## Notes
                Ask the practice how to be recorded as a carer or nominated contact, which makes later calls much easier.
              priority: medium
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "Your parent's annual review is held with a prepared list and written notes they have seen and agreed."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Ask your parent how involved they would like you to be in appointments"
                - "Book their annual review and arrange transport"
                - "Prepare their concerns and medicine list with them"
                - "Ask your parent how they are getting on with any changes from the review @recurring(monthly:24)"
                - "Arrange their annual review with them each year @recurring(yearly)"
            - name: Check-ups around shift work
              description: |-
                ## Purpose
                Night shifts and rotating rotas make standard appointment times hard and also raise some health risks, from blood pressure to sleep. Planning check-ups around the rota, and telling the clinician about your shift pattern, gets you seen and gets the right questions asked.

                ## Milestones
                1. Your shift pattern summarised in a line to share with clinicians.
                2. Practices or clinics with early, late or weekend slots identified.
                3. The annual check-up booked on a day that follows rest, not a night shift.
                4. Shift-related questions on sleep, weight and blood pressure raised.
              priority: low
              frontmatter:
                mode: building
                output_kind: event-completion
                success_criteria: "An annual check-up booked on a rest day, with your shift pattern recorded in your notes."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a one-line summary of your shift pattern"
                - "Find out which appointment slots fall on your rest days"
                - "Book the check-up after a rest day, not after nights"
                - "Ask the clinician about sleep and blood pressure risks with shift work"
            - name: One annual review for several conditions
              description: |-
                ## Purpose
                People living with two or more long-term conditions often attend a separate review for each, with nobody looking at the whole. Asking for a combined annual review, or at least a joined-up medicine check, reduces appointments and catches interactions between treatments.

                ## Milestones
                1. Each long-term condition and its current review schedule listed.
                2. The practice asked whether a combined review is available.
                3. A combined review or medicine review held.
                4. A single written plan covering all conditions saved.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One combined review or structured medicine review held, ending in a single written plan covering every condition."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List each long-term condition with its current review dates"
                - "Ask the practice about a combined annual review"
                - "Bring every medicine, including over-the-counter ones, to the review"
                - "Save one written plan that covers all your conditions"
            - name: Five-year results trend review
              description: |-
                ## Purpose
                Single results rarely tell a story, but five years of the same tests often do: a kidney value edging down, blood sugar creeping up, weight rising a kilo a year. Laying them side by side once can reveal a slow trend that no single appointment would notice.

                ## Milestones
                1. The same core results gathered for each of the last five years.
                2. A simple table or chart of each value over time.
                3. Any value moving steadily in one direction marked.
                4. Marked trends raised with your clinician and the response recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A five-year table of core results with every steady trend discussed with a clinician."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Download five years of results from the patient portal"
                - "Put the same core values into one table by year"
                - "Ask the agent to summarise any value that moved steadily in one direction"
                - "Raise each steady trend at your next appointment"
            - name: Executive health assessment for founders
              description: |-
                ## Purpose
                Founders and senior leaders often have the money for an assessment and none of the time, and the business depends on their health more than they admit. Treating the assessment as a scheduled board-level item, with follow-ups that actually happen, protects the person the company can least replace.

                ## Milestones
                1. A provider chosen on the strength of its follow-up, not only its tests.
                2. The assessment booked in a quiet week and protected in the calendar.
                3. Findings reviewed with your own doctor so care stays joined up.
                4. Every follow-up booked within two weeks of the report.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An assessment completed, findings shared with your usual doctor, and every follow-up booked within two weeks."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Compare two providers on what happens after the report"
                - "Book the assessment in a quiet week and block the whole morning"
                - "Send the report to your usual doctor"
                - "Book every recommended follow-up within two weeks"
            - name: Workplace health check day
              description: |-
                ## Purpose
                For a small team, bringing a nurse or pharmacy service in for a morning of blood pressure, weight and basic checks reaches people who would never book an appointment. Organising it well, with privacy and clear signposting, can catch problems early for the whole team.

                ## Milestones
                1. A provider found that offers on-site checks and confidential results.
                2. A date agreed and a private room booked.
                3. Staff invited with a clear explanation of what is checked and who sees results.
                4. Signposting for follow-up given to everyone who attends.

                ## Notes
                Results belong to each employee. The organiser should only ever see attendance numbers.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An on-site health check morning held with confidential results and written follow-up guidance given to every attendee."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Find a provider that offers on-site checks for small teams"
                - "Agree a date and book a private room"
                - "Invite staff with a note on what is checked and who sees results"
                - "Collect anonymous feedback after the morning"
            - name: Watching baseline drift after fifty
              description: |-
                ## Purpose
                Past fifty, muscle mass, height, blood pressure and kidney function tend to drift in predictable directions, and small changes add up. Tracking a few extra baseline measures each year, such as grip or chair-rise ability alongside the usual numbers, shows whether your drift is typical or faster.

                ## Milestones
                1. Two or three extra measures chosen with your clinician, such as height or a chair-rise count.
                2. A first reading of each taken and added to your log.
                3. The same measures repeated at each annual check-up.
                4. Any faster-than-expected change discussed with a clinician.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Two extra baseline measures recorded at two consecutive annual check-ups, with any fast change discussed."
                cadence: rolling
              tasks:
                - "Ask your clinician which extra measures are worth tracking after fifty"
                - "Take a first reading of each and add it to your health log"
                - "Repeat the extra measures at your annual check-up @recurring(yearly)"
            - name: Written personal check-up protocol
              description: |-
                ## Purpose
                Once you have a year or two of doing this well behind you, you know what works: which month, which tests, which questions, which follow-ups. Writing it down as a one-page protocol means the routine survives a busy year, a house move or someone else having to help you.

                ## Milestones
                1. Your check-up month, tests, measurements and follow-up loop written on one page.
                2. The protocol reviewed with your doctor or nurse for anything missing.
                3. The page stored where a partner or carer could find it.
                4. The protocol revised once a year at the year-end review.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page check-up protocol, reviewed by a clinician, revised at least once after a full year of use."
                cadence: rolling
              tasks:
                - "Write your check-up month, tests and follow-up steps on one page"
                - "Show the protocol to your nurse or doctor and ask what is missing"
                - "Store the protocol where a partner or carer could find it"
                - "Revise the protocol after the year-end review @recurring(yearly)"
---

# Annual Health Check-Ups

This area turns the annual check-up from something you mean to book into a routine with a date, a baseline and a follow-up for every result. It starts with the foundations (a registered practice, portal access, a first blood panel and a written baseline), moves through the yearly operating cycle and the skills that make a ten-minute appointment count, then covers decisions, milestone checks, life situations and, at the end, the multi-year view an experienced self-advocate keeps.

The rhythms that repeat are the yearly booking, a quarterly home measurement, a monthly look at outstanding results and recalls, and a year-end review that feeds the next appointment. The Operational checklist, Metrics log, Meeting notes and Purchase decision templates pair with the projects that point at them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
