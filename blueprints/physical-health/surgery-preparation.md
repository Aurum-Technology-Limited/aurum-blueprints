---
id: physical-health.surgery-preparation
name: Surgery Preparation & Aftercare
description: "Your operation planned on paper, pre-op checks and medicines sorted, home and helpers ready, then the wound, pain and walking routines that carry you safely through recovery."
category: personal
version: 1.0.0
tags: [physical-health, surgery-preparation, everyone, pre-op-assessment, recovery, wound-care, pain-relief, discharge]
author: Aurum Technology
starter_structure:
  templates:
    - meeting-notes
    - household-chores
    - metrics-log
    - purchase-decision
    - operational-checklist
    - trip
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Surgery Preparation & Aftercare
          description: "Preparing for a planned operation and getting through aftercare: pre-op assessments, time off, home setup, wound care, pain plans and follow-up appointments."
          projects:
            - name: Operation details sheet
              description: |-
                ## Purpose
                Before anything else, put every fact about the operation on one page: the procedure's exact name, which side, the surgeon and hospital, the date if you have one, the admission time and the ward phone number. Letters arrive from different departments and phone calls get half remembered, so a single sheet means you, your helpers and any clinician can answer the basic questions in seconds.

                ## Milestones
                1. One page holding the procedure name, side, surgeon, hospital and booking reference.
                2. Admission date, arrival time and the department to report to added once known.
                3. The pre-op clinic, ward and surgical secretary phone numbers listed.
                4. A copy shared with the person who will take you in and bring you home.

                ## Notes
                Write the procedure exactly as it appears on the hospital letter, not your own shorthand. If the side or site ever differs between documents, raise it with the surgical team straight away.
              priority: high
              deadlineOffsetDays: 7
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single sheet with procedure, side, surgeon, hospital, dates and three contact numbers exists and has been shared with one helper."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Gather every letter and message about the operation into one folder"
                - "Write the procedure, side, surgeon and hospital at the top of one page"
                - "Add the ward, pre-op clinic and surgical secretary phone numbers"
                - "Send a copy to the person taking you in on the day"
            - name: Questions for the surgical consultation
              description: |-
                ## Purpose
                Consent is a conversation, not a signature, and most people leave the surgeon's room remembering half of what was said. Going in with written questions on benefits, risks, alternatives, recovery time and what happens if you wait means you sign the form knowing what you are agreeing to.

                ## Milestones
                1. A written list of questions covering benefits, common and serious risks, alternatives and recovery time.
                2. Answers noted during the appointment, or recorded with the surgeon's permission.
                3. The expected time off work, driving and lifting restrictions written down.
                4. Any question left unanswered sent to the surgical secretary afterwards.

                ## Notes
                Start from the **Meeting notes** template. Bring someone with you if you can: a second listener catches what you miss.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A notes page with answers to at least five consent questions, including risks, alternatives and recovery times, is saved before the consent form is signed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write your five most pressing questions about the operation"
                - "Ask how often the main risks happen for someone like you"
                - "Ask how long until you can work, drive and lift normally"
                - "Send any unanswered question to the surgical secretary in writing"
            - name: Pre-operative assessment appointment
              description: |-
                ## Purpose
                Most planned operations need a pre-operative assessment, where a nurse checks your health, takes bloods, a heart tracing and swabs, so the anaesthetist is not surprised on the day. Turning up with your medicine list, a note of past operations and any reactions to anaesthetic keeps the appointment short and makes a late cancellation less likely.

                ## Milestones
                1. The assessment booked and in the calendar, with how long it takes and whether you need to fast.
                2. A current medicine list, including supplements and over-the-counter products, ready to hand over.
                3. Past operations, anaesthetic reactions and family anaesthetic problems written down.
                4. Results and follow-up actions from the assessment recorded, each with who will act on it.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The pre-op assessment is attended with a written medicine list, and every follow-up action from it is recorded with an owner."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone the pre-op clinic to confirm the assessment date and length"
                - "List every medicine, supplement and cream you take, with strengths"
                - "Note past operations and any reaction to an anaesthetic"
                - "Ask at the end which results you will hear about and when"
            - name: Medicines to pause or adjust before the operation
              description: |-
                ## Purpose
                Some medicines are stopped days before surgery, some are taken as usual on the morning and some need a bridging plan, and the instructions differ by drug and by operation. Blood thinners, diabetes medicines, some blood pressure tablets and herbal remedies are the usual ones to check. A written plan from the pre-op team, with dates against each medicine, removes the guesswork.

                ## Milestones
                1. Every medicine and supplement checked with the pre-op team or pharmacist for surgery instructions.
                2. A dated table showing which to stop and when, which to take on the morning, and when each restarts.
                3. The prescriber of any blood thinner or diabetes medicine aware of the plan.
                4. A phone reminder set for each stop date.

                ## Notes
                Never stop or change a medicine on your own reading of a leaflet. The plan must come from the pre-op team, the surgeon or the prescriber.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated medicine plan confirmed by the pre-op team covers every medicine and supplement, with stop, morning-of and restart instructions."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the pre-op team which of your medicines need surgery instructions"
                - "Make a table with stop dates, morning-of doses and restart dates"
                - "Confirm the plan for any blood thinner with the prescriber"
                - "Set a phone reminder for each stop date"
            - name: Fasting and arrival instructions in writing
              description: |-
                ## Purpose
                Operations are cancelled every day because someone ate too late, drank the wrong thing or arrived without doing the special wash. Hospitals give cut-off times for food and clear fluids that vary by unit and by arrival slot, so writing yours down word for word protects your place on the list.

                ## Milestones
                1. The hospital's exact cut-off times for food, milk and clear fluids written on one card.
                2. Which morning medicines to take, and with how much water, noted on the same card.
                3. Skin wash, nail varnish, jewellery and contact lens instructions listed.
                4. The card displayed on the fridge the night before admission.

                ## Notes
                If the instructions are unclear or seem to contradict each other, phone the pre-op clinic rather than guessing.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A card with food and fluid cut-off times, morning medicines and skin preparation instructions is written and displayed before admission."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the fasting section in your admission letter"
                - "Copy the food and clear fluid cut-off times onto a card"
                - "Phone the pre-op clinic about anything that is unclear"
                - "Put the card on the fridge the night before admission"
            - name: Time off work and fit note plan
              description: |-
                ## Purpose
                Recovery times on the leaflet are averages, and a desk job, a driving job and a lifting job come back at very different speeds. Telling your manager early, checking the sick pay policy and knowing who issues the fit note or sick certificate (often the hospital for the first spell, your doctor after that) means money and work are settled before you are too sore to deal with them.

                ## Milestones
                1. Your manager or HR told the expected dates and the likely range of time off.
                2. Your sick pay entitlement checked in the contract or staff handbook.
                3. The person responsible for issuing your first fit note or sick certificate confirmed.
                4. Handover notes written for anything that cannot wait while you are off.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Your employer has the expected dates, your sick pay entitlement is written down and a handover note exists before admission."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read the sick pay section of your contract or staff handbook"
                - "Tell your manager the operation date and the expected range of time off"
                - "Ask the ward who issues the first fit note at discharge"
                - "Write handover notes for work that cannot pause"
            - name: Lift home and an adult for the first night
              description: |-
                ## Purpose
                After a general anaesthetic or sedation most units will not let you go home alone, drive or take a taxi unaccompanied, and many day surgery units insist that a responsible adult stays with you for the first night. Booking that person now, with a backup, avoids being kept in or having the operation postponed on the day.

                ## Milestones
                1. A named adult booked to collect you, with the likely pick-up window.
                2. The same or another adult confirmed to stay with you for the first night if required.
                3. A backup person agreed in case the first falls ill.
                4. Pick-up details, the ward number and parking information sent to both.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One named adult and one backup are confirmed for collection and the first night, with ward and parking details in their hands."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the hospital whether you need an adult with you overnight"
                - "Book a named person to collect you and stay the first night"
                - "Agree a backup person in case plans fall through"
                - "Send both of them the ward number and parking details"
            - name: Recovery space set up at home
              description: |-
                ## Purpose
                Coming home stiff, sore and possibly on crutches turns stairs, low sofas and loose rugs into real hazards. Setting up one room with everything at waist height, a clear path to the toilet, a firm chair with arms and a light you can reach from bed takes an afternoon and prevents the falls that undo good surgery.

                ## Milestones
                1. A recovery base chosen, downstairs if stairs will be hard.
                2. Rugs, cables and clutter cleared from the route between bed, chair and toilet.
                3. Daily essentials moved to between waist and shoulder height.
                4. A phone charger, lamp, water and pill organiser within reach of the bed.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A recovery room with a clear route to the toilet and essentials between waist and shoulder height is ready a week before the operation."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Choose which room will be your recovery base"
                - "Clear rugs and cables from the route to the toilet"
                - "Move everyday kitchen and bathroom items to waist height"
                - "Put a lamp, charger and water bottle within reach of the bed"
            - name: Help rota for the first two weeks
              description: |-
                ## Purpose
                Offers of help are plentiful before an operation and thin out by day five, which is exactly when shopping, bins and laundry pile up. A simple rota with named people for meals, school runs, pet care and lifts turns vague goodwill into cover for the days you actually need it.

                ## Milestones
                1. A list of jobs you will not be able to do for two weeks, such as lifting, driving, hoovering and carrying shopping.
                2. A named person against each job for each day of the first fortnight.
                3. Gaps filled by paid help, delivery slots or a neighbour.
                4. The rota shared in one message or calendar everyone can see.

                ## Notes
                Start from the **Household chores** template. Put the heavy jobs first (bins, laundry baskets, shopping): those are the ones surgeons most often tell you to avoid.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every day of the first fortnight has a named person or service against meals, shopping, heavy chores and lifts."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the jobs you will not be able to do for two weeks"
                - "Ask three people which days and jobs they can cover"
                - "Book grocery delivery slots for the first fortnight"
                - "Share the finished rota in one group message"
            - name: Daily wound check and photo log
              description: |-
                ## Purpose
                Wound infections usually show early as spreading redness, heat, swelling, new discharge or a smell, and they are easier to treat when caught in the first day or two. A quick daily look and a photo in the same light give you, and the nurse you phone, something objective to compare instead of a vague feeling that it looks worse.

                ## Milestones
                1. A log started on the first day home with the date, dressing state and any changes.
                2. A photo taken each day in the same light and from the same angle.
                3. The ward's written criteria for when to call about the wound kept beside the log.
                4. The log brought to the stitches or wound clinic appointment.

                ## Notes
                Start from the **Metrics log** template. Do not lift a dressing you were told to leave alone just to take a picture; photograph the dressing instead.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A wound log with a dated entry and photo for every day until the wound is signed off as healed."
                cadence: rolling
              tasks:
                - "Ask the ward nurse when you should call about your wound"
                - "Set up a phone album just for wound pictures"
                - "Check and photograph the wound, then note any change @recurring(daily)"
                - "Bring the log and photos to your wound check appointment"
            - name: Pain relief timetable and score log
              description: |-
                ## Purpose
                Pain that is allowed to build is harder to bring down, and many people under-use their prescribed painkillers on day two and then cannot sleep or walk. A timetable of when each medicine is due, plus a score out of ten twice a day, keeps you inside the prescribed plan and shows clearly when the plan needs changing.

                ## Milestones
                1. The discharge painkillers listed with the times and daily limits written on each label.
                2. A paper timetable or phone alarms that match those instructions.
                3. A pain score recorded morning and evening, at rest and when moving.
                4. A threshold for phoning for advice agreed and written on the timetable.

                ## Notes
                Follow only the doses and limits on your prescription. If pain is rising rather than easing after the first few days, phone the ward or your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A pain log with morning and evening scores and every dose time recorded, reviewed weekly until painkillers are stopped."
                cadence: rolling
              tasks:
                - "Copy the times and daily limits from each painkiller label"
                - "Set phone alarms that match the prescribed timings"
                - "Record pain scores at rest and when moving @recurring(daily)"
                - "Review the week's scores and whether relief is keeping up @recurring(weekly:sat)"
            - name: Blood clot prevention routine
              description: |-
                ## Purpose
                Surgery and immobility raise the risk of a clot in the leg or lung for several weeks, which is why many people go home with compression stockings, injections or tablets. Using them exactly as prescribed for the full course, moving the ankles regularly and drinking enough are small daily jobs with an outsized payoff.

                ## Milestones
                1. The prescribed clot prevention, its duration and its end date written on the calendar.
                2. The technique for stockings or injections practised, by you or a helper, if prescribed.
                3. Ankle exercises and short walks done through each day.
                4. The warning signs of a clot (calf pain or swelling, sudden breathlessness, chest pain) written by the phone.

                ## Notes
                Sudden breathlessness or chest pain is an emergency: call emergency services, do not wait for the next appointment.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every day of the prescribed clot prevention course is ticked off through to its end date, with warning signs posted by the phone."
                cadence: rolling
              tasks:
                - "Write the end date of your clot prevention course on the calendar"
                - "Tick off today's clot prevention: stockings, injection or tablet @recurring(daily)"
                - "Ask a helper to learn the injection or stocking technique with you"
                - "Pin the clot warning signs beside the phone"
            - name: Graded walking after the operation
              description: |-
                ## Purpose
                Walking soon after surgery reduces chest infections, clots and stiffness, but doing too much on a good day often costs the next two. A weekly plan that adds a few minutes at a time, logged against how you felt the next morning, builds stamina steadily without setbacks.

                ## Milestones
                1. Walking advice from the surgical team or ward physiotherapist written down, including any limits.
                2. A starting walk length chosen that feels easy on the first day home.
                3. A weekly increase set, and each walk logged with how you felt the next day.
                4. A comfortable walk to a local landmark achieved by the week your team suggested.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A walking log shows a walk on most days with a weekly increase, reaching the distance the team suggested by the agreed week."
                cadence: rolling
              tasks:
                - "Note the walking advice and any limits given by the ward"
                - "Time a walk that feels easy and make it your starting length"
                - "Add a few minutes to the daily walk if last week went well @recurring(weekly:mon)"
                - "Log each walk with how you felt the following morning"
            - name: Post-operative appointments calendar
              description: |-
                ## Purpose
                After an operation the appointments come from several directions: stitches out at the practice, a wound clinic, a physiotherapy referral, a scan and the surgeon's review. Keeping them in one calendar and checking each Friday that the next one is booked catches the referral that quietly never arrived.

                ## Milestones
                1. Every post-op appointment named in the discharge letter listed with who should book it.
                2. Each appointment either in the calendar or marked as awaiting a letter.
                3. Transport arranged for every appointment you cannot drive to.
                4. Any appointment not booked within the expected time chased by phone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every follow-up named in the discharge letter is attended, booked with transport, or chased in writing."
                cadence: rolling
              tasks:
                - "List every follow-up named in your discharge letter"
                - "Note who books each one: you, the practice or the hospital"
                - "Check the next appointment is booked and transport arranged @recurring(weekly:fri)"
                - "Phone the surgical secretary about any follow-up that is overdue"
            - name: Weekly recovery check against the expected timeline
              description: |-
                ## Purpose
                Recovery rarely runs in a straight line, and it helps to know whether a bad week is normal or a sign that something is off. Comparing each week with the timeline in the hospital leaflet (pain, walking distance, sleep, wound, energy) turns worry into a clear answer: carry on, ease off or phone someone.

                ## Milestones
                1. The expected recovery timeline from the leaflet or surgeon copied onto one page, week by week.
                2. A five-line check written each Sunday covering pain, mobility, sleep, wound and energy.
                3. Any week that falls well behind the timeline flagged and discussed with a clinician.
                4. The full set of weekly checks brought to the six-week review.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly check exists for each week since the operation, with any week behind the timeline flagged and followed up."
                cadence: rolling
              tasks:
                - "Copy the expected recovery milestones from your leaflet, week by week"
                - "Write a five-line check on pain, mobility, sleep, wound and energy @recurring(weekly:sun)"
                - "Mark any week that is well behind the expected timeline"
                - "Phone the ward or your doctor if two weeks running fall behind"
            - name: Eating and drinking for healing and comfortable bowels
              description: |-
                ## Purpose
                Wounds need protein and fluids to heal, and strong painkillers plus less movement make constipation one of the most common complaints in the first week home. Planning simple high-protein meals, fluids and fibre, and keeping a weekly tally, prevents straining against a fresh wound.

                ## Milestones
                1. Any dietary instructions from the surgical team noted, especially after gut or weight-loss surgery.
                2. A week of easy meals with a protein source in each one planned and stocked.
                3. Advice on fluids, fibre and whether a laxative suits your painkillers obtained from the team or pharmacist.
                4. A weekly tally of appetite and bowel habits kept until both are back to normal.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stocked week of meals and a weekly tally of appetite and bowel habits are kept until both are back to normal."
                cadence: rolling
              tasks:
                - "Ask the ward whether you should follow any special diet"
                - "Stock a week of easy high-protein meals before admission"
                - "Ask the pharmacist whether a laxative suits your painkillers"
                - "Tally appetite, fluids and bowel habits for the week @recurring(weekly:wed)"
            - name: Fit note and sick pay renewals
              description: |-
                ## Purpose
                The first fit note often runs out before you are ready to go back, and a gap can stop sick pay for days while you sort a new one. Checking every Thursday how long the current note has left, and requesting the next one a week ahead, keeps pay and paperwork continuous.

                ## Milestones
                1. The current fit note's end date written in your calendar.
                2. The route for a renewal (online form, phone call or appointment) confirmed with your practice.
                3. Each new note sent to your employer before the old one expires.
                4. Payslips checked to confirm sick pay arrived as expected.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fit notes run without a gap from the operation to your return to work, each sent to the employer before the last one expired."
                cadence: rolling
              tasks:
                - "Put the end date of your current fit note in the calendar"
                - "Ask your practice how to request a renewal"
                - "Check how many days are left on the current note @recurring(weekly:thu)"
                - "Check the next payslip shows the sick pay you expected"
            - name: Scar care for the first year
              description: |-
                ## Purpose
                Scars keep remodelling for twelve to eighteen months, and new scar tissue burns easily in the sun. Once the wound is fully closed and your team agrees, gentle massage twice a week, sun protection and a monthly photo often give a flatter, paler result and show whether anything needs a specialist opinion.

                ## Milestones
                1. Agreement from the nurse or surgeon that the wound is closed enough to start scar care.
                2. A massage routine with a plain unscented moisturiser running at least twice a week.
                3. The scar covered or protected from the sun through its first summer.
                4. Monthly photos showing the scar's colour and height over the year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Scar massage is logged twice a week and a photo taken monthly for twelve months after the wound closes."
                cadence: rolling
              tasks:
                - "Ask your nurse when it is safe to start massaging the scar"
                - "Massage the scar with plain moisturiser for five minutes @recurring(weekly:tue,fri)"
                - "Photograph the scar in the same light @recurring(monthly:12)"
                - "Pack a cover-up or sun protection for the scar in summer bags"
            - name: Complication warning signs and who to call
              description: |-
                ## Purpose
                In the first weeks, the difference between a normally sore wound and an infection, clot or internal bleed is not obvious to most people, and the right number to ring changes with the time of day. Learning the red flags for your operation and writing a one-page call plan means you or a helper can act in minutes rather than wait and see.

                ## Milestones
                1. Red flags for your specific operation listed from the discharge leaflet or the ward nurse.
                2. Signs that mean emergency services and signs that mean phone the ward sorted into two lists.
                3. Daytime, evening and weekend numbers for the ward or surgical team written down.
                4. A helper walked through the sheet before you come home.

                ## Notes
                Signs of sepsis (fever or a very low temperature, fast breathing, confusion, mottled skin) need emergency help, not a callback.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page call plan listing emergency signs, ward-call signs and out-of-hours numbers sits by the phone and a helper has read it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the ward nurse for the red flags specific to your operation"
                - "Sort the signs into call emergency services and phone the ward"
                - "Write the daytime, evening and weekend contact numbers on the sheet"
                - "Talk your main helper through the sheet before discharge"
            - name: Understanding your anaesthetic choices
              description: |-
                ## Purpose
                Many operations can be done under a general anaesthetic, a spinal, a nerve block or sedation, and the choice affects how you feel afterwards, how soon you eat and how pain is handled on the first night. Knowing the options before you meet the anaesthetist lets you ask about what matters to you, such as sickness, memory or being awake.

                ## Milestones
                1. The anaesthetic options usually offered for your operation listed from a reputable patient leaflet.
                2. Your own history (sickness after past anaesthetics, sleep apnoea, crowns or loose teeth) noted for the anaesthetist.
                3. Three questions prepared about the options that matter to you.
                4. The anaesthetist's recommendation and your decision recorded.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three written questions are put to the anaesthetist and the agreed anaesthetic plan is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read a patient leaflet on anaesthesia from a recognised professional body"
                - "Note any sickness or problems after past anaesthetics"
                - "Write three questions for the anaesthetist"
                - "Record the anaesthetic plan you agreed on the day"
            - name: Reading the procedure leaflet and enhanced recovery plan
              description: |-
                ## Purpose
                Hospitals publish leaflets for most common operations, and many run an enhanced recovery programme with set goals for drinking, eating and getting up within hours of surgery. Reading yours properly, with a highlighter, tells you what the team will expect of you on day one and what is normal to feel at home.

                ## Milestones
                1. The hospital's own leaflet for your procedure found and read in full.
                2. Any enhanced recovery goals (drinking, eating, sitting out, walking) listed by day.
                3. Restrictions on lifting, bathing, driving and flying copied onto your operation details sheet.
                4. Anything that contradicts what the surgeon told you raised with the team.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The procedure leaflet has been read, with restrictions and enhanced recovery goals copied onto the operation details sheet."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the pre-op clinic for the leaflet about your procedure"
                - "Highlight every restriction and the day it ends"
                - "List the enhanced recovery goals the ward will set you"
                - "Raise any contradiction with the surgical secretary"
            - name: Safe transfers in and out of bed, chair, toilet and car
              description: |-
                ## Purpose
                After hip, knee, spine, abdominal or breast surgery, the ordinary movements of getting out of bed or into a car can strain the wound or the new joint. Practising the method your team teaches, at home and before the operation, makes the first days back safer and far less frightening.

                ## Milestones
                1. The movement precautions for your operation written down from the leaflet or therapist.
                2. Getting out of bed by rolling onto your side practised before the operation.
                3. Sitting down and standing up from your chair, toilet and car seat practised the recommended way.
                4. Any furniture that is too low identified and raised or swapped.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Bed, chair, toilet and car transfers have each been practised at home before the operation, and low furniture has been raised."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write down the movement precautions for your type of operation"
                - "Practise rolling onto your side to get out of bed"
                - "Practise sitting into the car seat first, then lifting the legs in"
                - "Measure chair and toilet heights against the advice you were given"
            - name: Breathing and supported coughing after surgery
              description: |-
                ## Purpose
                Shallow breathing after chest, abdominal or long operations lets the base of the lungs partly close, which is one route to a chest infection. Deep breathing sets and coughing with a pillow pressed over the wound are simple to learn beforehand and easy to forget when you are sore.

                ## Milestones
                1. The breathing exercises recommended by your hospital or physiotherapist written down.
                2. Deep breathing and huffing practised before the operation.
                3. A small firm pillow chosen for supporting the wound when coughing or sneezing.
                4. Exercise sets done several times a day for the first week home.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Breathing exercises are practised before the operation and done on each of the first seven days at home."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the breathing exercise sheet from your hospital or physiotherapist"
                - "Practise deep breathing and huffing once a day before surgery"
                - "Pack a small firm pillow to hold over the wound when coughing"
                - "Set a breathing exercise reminder on the phone for the first week"
            - name: Changing a dressing cleanly at home
              description: |-
                ## Purpose
                Some people are sent home to change their own dressings, or a helper is asked to. Learning the clean technique from the ward nurse before discharge, and keeping a stocked dressing box, closes off the most avoidable route to infection: unwashed hands and improvised supplies.

                ## Milestones
                1. A dressing change watched or practised with a nurse before discharge.
                2. Written steps for your dressing type, including how often to change it and when to leave it alone.
                3. A box with the right dressings, sterile wipes and a bin bag kept in one clean place.
                4. A second person able to do the change if you cannot reach the wound.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written steps for your dressing type and a stocked supply box exist, and one helper can change the dressing if needed."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the ward nurse to show you a dressing change before discharge"
                - "Write the steps for your dressing type on a card"
                - "Fill a box with the dressings and supplies you were given"
                - "Show your helper the steps in case you cannot reach the site"
            - name: Reading your operation note and discharge letter
              description: |-
                ## Purpose
                The discharge letter tells your doctor what was done, what was found, what changed in your medicines and what happens next, but it is written in clinical shorthand. Going through it line by line within a week, and asking about anything you do not understand, catches missed follow-ups and medicine changes early.

                ## Milestones
                1. A copy of the discharge letter, and the operation note if available, filed in your records.
                2. Each abbreviation and unfamiliar term looked up or asked about.
                3. Every medicine change on the letter compared with what is in your cupboard.
                4. Follow-up actions from the letter added to the appointments calendar.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every term on the discharge letter is understood, medicine changes are checked against the supply, and follow-ups are in the calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the ward for your own copy of the discharge letter"
                - "Underline each abbreviation and term you do not understand"
                - "Check the medicine changes against what you were sent home with"
                - "Ask the agent to explain the remaining terms in plain words"
            - name: Deciding between surgery and the alternatives
              description: |-
                ## Purpose
                For many planned operations, from joint replacements to hernia repairs and gallbladder removal, there are alternatives such as watchful waiting, physiotherapy, injections or medicines. Setting out what each option offers, what it risks and what matters most in your life gives a decision you can stand behind and explain to your family.

                ## Milestones
                1. Every option the surgeon mentioned, including doing nothing for now, listed.
                2. Likely benefits, risks and recovery time for each written in plain words.
                3. Your own priorities (work, sport, caring duties, worries about anaesthesia) ranked.
                4. A decision recorded with its reasons and shared with the surgical team.

                ## Notes
                A patient decision aid for your procedure, if one exists, gives a useful structure. The decision is made with your surgeon, not alone.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of surgery and at least one alternative ends in a recorded decision with reasons, shared with the surgeon."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every option the surgeon mentioned, including waiting"
                - "Ask whether a patient decision aid exists for your procedure"
                - "Rank your own priorities for the next twelve months"
                - "Write down the decision and the three reasons behind it"
            - name: Second surgical opinion
              description: |-
                ## Purpose
                When an operation is major or irreversible, or the advice surprises you, a second opinion is a normal request, not an insult to your surgeon. Knowing how to ask for one, which records to send and what specific question you want answered makes it useful rather than just a delay.

                ## Milestones
                1. The specific question for a second surgeon written in one sentence.
                2. Your routes to a second opinion, public or private, and how long each takes, established.
                3. Scans, letters and results gathered and sent ahead.
                4. Both opinions compared side by side and the outcome recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A second opinion answers a written question and is compared with the first in a short table, with the outcome recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the one question you want a second surgeon to answer"
                - "Ask your doctor how a second opinion is arranged where you live"
                - "Request copies of the scans and letters the second surgeon will need"
                - "Compare the two opinions in a short table"
            - name: Choosing the hospital and surgeon
              description: |-
                ## Purpose
                Where you have a choice of hospital or surgeon, the differences that matter are how often they do your operation, their published outcomes, the wait, the distance for follow-ups and the aftercare they offer. Comparing two or three options on those few measures is quicker than it sounds.

                ## Milestones
                1. The hospitals or surgeons you can actually choose between confirmed.
                2. Volume, published outcomes where available, waiting time and distance gathered for each.
                3. Aftercare arrangements (wound clinic, physiotherapy, out-of-hours number) compared.
                4. A choice made and confirmed with whoever books the operation.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Two or three providers are compared on volume, outcomes, waiting time, distance and aftercare, and a choice is confirmed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor which hospitals or surgeons you can choose from"
                - "Look up how often each one performs your operation"
                - "Note travel time from home for follow-up visits"
                - "Confirm your choice with whoever books the operation"
            - name: Insurance authorisation or self-pay quote
              description: |-
                ## Purpose
                Private or insured surgery comes with its own paperwork: pre-authorisation codes, excesses, shortfalls on anaesthetist fees and package prices that may or may not include follow-ups and complications. Getting every figure in writing before admission avoids a bill nobody mentioned.

                ## Milestones
                1. The insurer's authorisation number for the procedure and the named surgeon obtained, if insured.
                2. A written quote or package price listing what is included and excluded.
                3. Anaesthetist, implant, scan and follow-up fees confirmed or capped.
                4. Who pays if complications need a longer stay or a return to theatre established.

                ## Notes
                Skip this if your operation is fully covered by a public health service.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written authorisation or quote covers surgeon, anaesthetist, stay and follow-ups, with complication costs clarified."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Phone your insurer to request authorisation for the procedure"
                - "Ask the hospital for a written package price and its exclusions"
                - "Confirm the anaesthetist's fees and whether your cover meets them"
                - "Ask who pays if complications need a longer stay"
            - name: Borrowing, hiring or buying recovery equipment
              description: |-
                ## Purpose
                A raised toilet seat, a grabber, a shower stool, a long-handled sponge or a wedge pillow can make the first weeks far easier, but many of these are lent free by hospital occupational therapy or community services. Checking what will be supplied before buying anything stops a cupboard filling with things used for three weeks.

                ## Milestones
                1. The equipment recommended for your operation listed.
                2. What the hospital or community service will lend confirmed.
                3. The remaining items borrowed, hired or bought, with costs noted.
                4. Everything delivered, assembled and set at the right height before admission.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "All recommended equipment is in the house and set up before admission, with borrowed items and costs recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the equipment your hospital recommends for this operation"
                - "Ask the occupational therapy team what they will lend"
                - "Check friends and local loan schemes for the remaining items"
                - "Set up and adjust each item before the day of admission"
            - name: Prehabilitation in the weeks before surgery
              description: |-
                ## Purpose
                People who arrive fitter tend to recover faster, and even four to six weeks of walking, simple strength work and breathing practice can help. A short programme agreed with your doctor or the pre-op team turns the waiting weeks into preparation rather than worry.

                ## Milestones
                1. Any limits on exercise before the operation agreed with your doctor or pre-op team.
                2. Two short strength sessions a week (sit-to-stands, wall push-ups, step-ups) running.
                3. A walk on most days, with time or distance noted.
                4. Starting and finishing measures (sit-to-stands in thirty seconds, a timed walk) recorded.

                ## Notes
                If you smoke, stopping even a few weeks before surgery helps wound healing and breathing; ask your doctor about stop smoking support.
              priority: medium
              deadlineOffsetDays: 42
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "A sit-to-stand count is recorded at the start and again before admission, with two strength sessions a week logged in between."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask your doctor whether any exercise is off limits before surgery"
                - "Count how many sit-to-stands you can do in thirty seconds"
                - "Do a short session of sit-to-stands and wall push-ups @recurring(weekly:mon,thu)"
                - "Take a longer walk and note the time @recurring(weekly:sat)"
            - name: Getting long-term conditions ready for surgery
              description: |-
                ## Purpose
                Operations are postponed when blood sugar, blood pressure or haemoglobin turn out to be out of range at the pre-op assessment, or when a chest infection raises the anaesthetic risk. Booking a check with your doctor well before the date gives time to adjust treatment and keeps your slot.

                ## Milestones
                1. A list of your long-term conditions with the latest result for each.
                2. A review with your doctor or nurse held, ideally at least six weeks before the operation date.
                3. Any treatment changes or extra tests agreed and done.
                4. Up-to-date results passed to the pre-op clinic.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Your long-term conditions are reviewed before the operation and up-to-date results are with the pre-op clinic."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List your long-term conditions with the latest result for each"
                - "Book a review with your doctor well before the operation date"
                - "Ask which results the pre-op clinic will want to see"
                - "Send updated results to the pre-op clinic"
            - name: Deciding when to drive again
              description: |-
                ## Purpose
                There is rarely a fixed rule for driving after surgery: what matters is whether you can control the car and do an emergency stop without pain or distraction, whether medicines make you drowsy, and what your insurer requires. Settling this in writing avoids discovering an invalid policy at the worst moment.

                ## Milestones
                1. Your surgeon's advice on driving for your operation and side noted.
                2. Your insurer's position on driving after surgery confirmed, ideally in writing.
                3. Drowsy medicines stopped or confirmed as compatible with driving.
                4. A short test drive in a quiet place, with a passenger, done before driving alone.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A driving restart date is recorded with the surgeon's advice and the insurer's requirements, after a supervised test in a quiet place."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the surgeon when driving is usually safe after your operation"
                - "Phone your insurer to ask what they require after surgery"
                - "Check the labels of your painkillers for drowsiness warnings"
                - "Try a short drive in a quiet car park with a passenger"
            - name: Hospital bag packed and checked
              description: |-
                ## Purpose
                Ward stays are often shorter than people expect, but the bag still needs the things that make a hospital bed bearable: loose clothes that fit over dressings, slip-on shoes, a long charging cable, earplugs and your medicines in their original boxes. Packing from a checklist a few days ahead means nothing is forgotten when nerves set in.

                ## Milestones
                1. A checklist written for your length of stay and type of operation.
                2. Medicines packed in their original boxes alongside your medicine list.
                3. Clothes chosen that fit over dressings, drains or a brace.
                4. The bag packed and by the door three days before admission.

                ## Notes
                Start from the **Operational checklist** template. Leave jewellery and valuables at home.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A packed bag matching a written checklist is by the door three days before admission."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the ward how long the stay is likely to be"
                - "Write a packing checklist for that length of stay"
                - "Pack medicines in their original boxes with your medicine list"
                - "Put the packed bag by the door three days before admission"
            - name: The night before and morning of the operation
              description: |-
                ## Purpose
                Your last twelve hours before surgery carry the most instructions: fasting times, the skin wash, which tablets to take, what to remove and when to leave. Rehearsing the evening and morning as a timed list, with alarms set and the route checked, makes the morning calm and keeps your slot.

                ## Milestones
                1. A timed list for the evening before and the morning of admission written.
                2. The skin wash done as instructed, and nail varnish, piercings and jewellery removed.
                3. Travel time to the hospital checked, with parking or drop-off sorted.
                4. You at the admissions desk at the stated time with your bag and paperwork.

                ## Notes
                Do not shave near the operation site unless told to: small nicks raise the infection risk.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You arrive at admissions at the stated time, fasted as instructed, washed and with your bag and paperwork."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write a timed list for the evening before and morning of admission"
                - "Check the route and parking for your arrival time"
                - "Remove nail varnish, piercings and jewellery the evening before"
                - "Set two alarms that leave time for the skin wash"
            - name: Discharge day questions before leaving the ward
              description: |-
                ## Purpose
                Discharge often happens in a rush late in the day, and the questions you forget then become phone calls on a Saturday night. Asking a fixed set of questions about wound care, medicines, restrictions, warning signs, follow-ups and who to call is the single best way to start recovery with a plan.

                ## Milestones
                1. Written answers on wound care, dressings and when the stitches come out.
                2. Every medicine to take home, with its purpose and how long to take it, explained.
                3. Restrictions on lifting, bathing, driving and work noted with end dates.
                4. A discharge letter, a contact number for problems and the first follow-up date in hand.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You leave the ward with written answers on wound care, medicines, restrictions, warning signs and follow-up, plus the discharge letter."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Print a discharge questions list and pack it in the hospital bag"
                - "Ask who to phone about problems in the first two weeks"
                - "Ask how long to take each medicine you are sent home with"
                - "Check you have the discharge letter before leaving the ward"
            - name: Stitches or clips removal appointment
              description: |-
                ## Purpose
                Stitches and clips usually come out at a practice or wound clinic between one and three weeks after surgery, depending on the site, and the appointment is often left for the patient to book. Booking it the day you get home, and arriving with your wound log, avoids an overdue removal and puts a trained eye on the wound.

                ## Milestones
                1. The removal timing and place from the discharge letter confirmed.
                2. The appointment booked within a day of getting home.
                3. Wound log and photos brought to the appointment.
                4. Aftercare advice for the healed wound noted.

                ## Notes
                If your stitches dissolve on their own, the appointment may be a wound check instead, and it is still worth keeping.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Stitches or clips are removed on the date set in the discharge letter, with aftercare advice recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Find the removal date and place on your discharge letter"
                - "Book the removal appointment the day you get home"
                - "Take the wound log and photos to the appointment"
                - "Ask when you can soak the wound in a bath or pool"
            - name: Six-week review with the surgical team
              description: |-
                ## Purpose
                Six weeks or so after many operations there is a review with the surgeon or a specialist nurse, and it is short. Arriving with your weekly recovery checks, any lingering symptoms and your questions about sport, work and lifting turns ten minutes into a clear plan for the next three months.

                ## Milestones
                1. The review date confirmed and transport arranged.
                2. A one-page summary of recovery so far, drawn from the weekly checks.
                3. Questions about returning to sport, heavy lifting, sex and travel written down.
                4. The surgeon's answers and any further follow-up recorded.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The post-op review is attended with a one-page summary and written questions, and the answers are recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Confirm the date of your post-operative review"
                - "Summarise the weekly recovery checks on one page"
                - "Write questions about sport, lifting, sex and travel"
                - "Record the surgeon's answers and next steps"
            - name: Phased return to work meeting
              description: |-
                ## Purpose
                Going back full time on the first day is how many people end up off again a week later. A meeting with your manager or occupational health before you return, agreeing reduced hours, lighter duties or home working for a set period, matches the job to where your recovery actually is.

                ## Milestones
                1. Your doctor's advice on work adjustments written on the fit note.
                2. A meeting with your manager or occupational health held before the return date.
                3. A phased plan with hours, duties and a review date agreed in writing.
                4. The plan reviewed after two weeks and adjusted if needed.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A written phased return plan with hours, duties and a review date is agreed before your first day back."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your doctor to note recommended adjustments on the fit note"
                - "Request a return to work meeting with your manager"
                - "Propose hours and duties for each of the first four weeks"
                - "Book a review two weeks after you return"
            - name: Recovering while living alone
              description: |-
                ## Purpose
                Living alone after surgery is very doable with planning: the real risks are a fall with nobody around, running out of food and missing warning signs because no one else is looking. A spare key with a neighbour, a daily check-in message, a freezer of meals and a phone always within reach cover most of it.

                ## Milestones
                1. A spare key held by a neighbour or in a key safe, with access shared with two people.
                2. A daily check-in agreed with someone who will act if you do not reply.
                3. Two weeks of easy meals in the freezer or deliveries booked.
                4. A phone carried in a pocket or pouch at all times, including in the bathroom.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A spare key, a daily check-in partner and two weeks of meals are in place before admission."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Arrange a spare key with a trusted neighbour or fit a key safe"
                - "Agree a daily check-in message and what happens if you miss one"
                - "Cook and freeze two weeks of easy single portions"
                - "Restock the snack and drinks shelf within easy reach @recurring(weekly:sat)"
            - name: Looking after young children while recovering
              description: |-
                ## Purpose
                Most surgeons advise against heavy lifting for several weeks, which rules out a toddler, a car seat and a pushchair. Planning school runs, bath times, night wakings and lifting with your partner, family or childcare before the operation keeps the children's routine steady and your wound intact.

                ## Milestones
                1. Every task that involves lifting a child or heavy kit listed.
                2. Each one assigned to another adult, adapted or dropped for the restriction period.
                3. Children told in age-appropriate words what will happen and why you cannot lift them.
                4. Ways to stay close without lifting (sofa cuddles, reading together) planned.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every lifting task in the children's routine has a named adult or an adaptation for the full restriction period."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List every daily task that means lifting a child or heavy kit"
                - "Agree with your partner or family who covers each one"
                - "Tell the children simply what will happen and why"
                - "Plan sofa-based activities you can still do together"
            - name: Supporting an older relative through an operation
              description: |-
                ## Purpose
                Older people are more likely to become confused after an anaesthetic, to lose strength quickly in bed and to be discharged before home is ready. As the relative helping, you can bring glasses, hearing aids and a full medicine list to hospital, ask about delirium, push for a proper discharge plan and keep in touch once they are home.

                ## Milestones
                1. Your relative's consent for you to be involved recorded with the hospital.
                2. Glasses, hearing aids, dentures and a familiar object packed for the stay.
                3. A discharge plan covering equipment, care visits and follow-ups agreed before they leave.
                4. A weekly call or visit in place for the first two months at home.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Your relative leaves hospital with an agreed discharge plan, and weekly contact is kept for the first two months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your relative to name you as a contact the hospital may speak to"
                - "Pack glasses, hearing aids and dentures in labelled cases"
                - "Ask the ward about delirium and how family can help prevent it"
                - "Call or visit to check how things are going @recurring(weekly:sun)"
            - name: Day surgery, home the same evening
              description: |-
                ## Purpose
                With day surgery you arrive in the morning and leave the same day, which means home has to be ready earlier and the first night is spent without a nurse down the corridor. Knowing the discharge criteria, packing for an unplanned overnight stay and laying out the first evening makes same-day surgery as safe as it is convenient.

                ## Milestones
                1. The unit's criteria for same-day discharge (eating, passing urine, walking, pain control) known.
                2. An overnight bag packed in the car in case you are kept in.
                3. The first evening planned: light meal, painkillers ready, phone and numbers by the bed.
                4. The unit's next-day phone call or out-of-hours number noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Same-day discharge criteria, an overnight fallback bag and a first-evening plan are all ready before the day."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the unit what you must manage before they discharge you"
                - "Pack a small overnight bag in case you are kept in"
                - "Lay out the first evening's meal, painkillers and phone by the bed"
                - "Add the unit's out-of-hours number to your call plan"
            - name: Surgery at a hospital far from home
              description: |-
                ## Purpose
                Specialist operations are often done at a centre hours away, which adds travel, a bed for a companion and follow-ups that may or may not happen locally. Planning it like any other trip, and asking about flying or long car rides afterwards, avoids a painful trip home and a muddle over where aftercare happens.

                ## Milestones
                1. Travel, parking or train tickets and accommodation for any companion booked.
                2. Advice on travelling home after the operation, including flying and long car rides, obtained.
                3. Which follow-ups happen at the centre and which locally confirmed.
                4. Your local practice sent a copy of the discharge letter.

                ## Notes
                Start from the **Trip** template. Ask the team about clot risk on long trips and how often to stop and move.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Travel and accommodation are booked, the trip home has been cleared with the team, and local versus centre follow-ups are confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Book travel and nearby accommodation for anyone coming with you"
                - "Ask the centre how soon you can fly or travel long distances"
                - "Confirm which follow-ups happen locally and which at the centre"
                - "Plan rest stops for the drive home"
            - name: Self-employed through surgery and recovery
              description: |-
                ## Purpose
                Without sick pay, a six-week recovery can mean six weeks of no income and clients who drift away. Working out the gap, checking any income protection or state support, and telling key clients the dates with a cover plan protects both the money and the business.

                ## Milestones
                1. Expected weeks off translated into a lost-income figure.
                2. Income protection, insurance or state sickness support checked and claimed where eligible.
                3. Key clients told the dates, with a deputy or a paused schedule agreed.
                4. Invoices and essential admin batched before admission.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A lost-income figure, a confirmed insurance or support position and a client cover plan are in place before the operation."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Estimate the income you will lose over the expected weeks off"
                - "Check any income protection policy for its waiting period"
                - "Tell your main clients the dates and who covers in your absence"
                - "Send a short client update and chase open invoices @recurring(weekly:fri)"
            - name: Going home with a drain, catheter or stoma
              description: |-
                ## Purpose
                Some operations send you home with a wound drain, a urinary catheter or a new stoma, each with supplies, emptying routines and a community or specialist nurse to call. Learning the routine on the ward, knowing exactly who delivers supplies and keeping a fortnight's stock in hand prevent most of the problems people dread.

                ## Milestones
                1. The care routine demonstrated by a nurse and practised by you before discharge.
                2. The community or specialist nurse's contact and visit schedule confirmed.
                3. A supplier and prescription route for bags, dressings or catheter kits set up.
                4. At least two weeks of supplies kept in stock at all times.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "You manage the device independently, a nurse contact is confirmed and stock never falls below two weeks."
                cadence: rolling
              tasks:
                - "Ask the ward to watch you empty or change the device before discharge"
                - "Confirm the name and number of the nurse who will visit"
                - "Set up repeat supply orders with the pharmacy or supplier"
                - "Count stock and reorder before it drops below two weeks @recurring(monthly:3)"
            - name: Staged or repeat operations plan
              description: |-
                ## Purpose
                Treatments sometimes come in stages, such as two-stage reconstructions, both hips or knees done months apart, or a temporary stoma reversed later. A single plan covering both operations, the gap between them, work and money across the whole period, and what you learned the first time makes the second stage easier.

                ## Milestones
                1. The full sequence of operations, likely gaps and what decides the timing written down.
                2. Work, money and help planned across the whole period, not just the first operation.
                3. Lessons from the first operation listed and built into the second.
                4. The timeline for the next stage checked monthly with the surgical secretary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan covers every stage of treatment with gaps, time off and help, and lessons from stage one are recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the surgeon to outline the full sequence and typical gaps"
                - "Plan time off and money across the whole sequence"
                - "List what you would do differently after the first operation"
                - "Check the timeline for the next stage with the secretary @recurring(monthly:15)"
            - name: Pain that persists three months after surgery
              description: |-
                ## Purpose
                A minority of people still have pain at the operation site three months on, sometimes with burning, numbness or sensitivity that suggests nerve involvement. Recording its pattern and impact, and asking for a review rather than living with it, opens the door to a pain clinic or other help.

                ## Milestones
                1. A monthly pain summary showing location, character, scores and effect on sleep and work.
                2. A review requested with the surgeon or your doctor, with the summary in hand.
                3. A referral, test or treatment plan agreed, or a clear reason why not recorded.
                4. Progress reviewed after each new treatment.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A monthly pain summary is kept and a review has produced a referral, a test or a written plan."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Describe the pain in your own words: where, what it feels like, when"
                - "Summarise the month's pain scores and effect on sleep and work @recurring(monthly:8)"
                - "Book a review with your doctor and bring the summary"
                - "Ask whether a pain clinic referral is appropriate"
            - name: Raising a concern about surgical care
              description: |-
                ## Purpose
                If something went wrong or felt wrong (a cancelled operation, poor communication, a complication you were not warned about), a clear written concern gets answers more often than an angry phone call. Most hospitals have a patient advice service and a formal complaints route, with time limits worth knowing.

                ## Milestones
                1. A dated timeline of what happened, written while memory is fresh.
                2. The outcome you want (an explanation, an apology, a change in practice, a review of care) decided.
                3. The concern sent to the hospital's patient advice service or complaints team.
                4. The response recorded and any next step, such as an independent review, decided.

                ## Notes
                For questions of compensation, speak to a qualified adviser. This project is about getting answers.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A one-page written concern with a timeline and the outcome you want is sent, and the response is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write a dated timeline of what happened"
                - "Decide what outcome you want from raising it"
                - "Find the hospital's patient advice or complaints contact"
                - "Ask the agent to tighten your draft letter to one page"
            - name: Recovery debrief and notes for next time
              description: |-
                ## Purpose
                Two months after the operation you know things no leaflet told you: which equipment you never used, what you wish you had asked and how long recovery really took. Writing them down while fresh helps if there is another operation, and is the most useful thing you can hand a friend facing the same one.

                ## Milestones
                1. Actual recovery times for work, driving, walking and sleep written against what you were told.
                2. A list of what helped most and what went unused.
                3. Questions you wish you had asked noted.
                4. The notes filed with your operation details sheet.
              priority: low
              frontmatter:
                mode: building
                output_kind: knowledge
                success_criteria: "A one-page debrief comparing actual and expected recovery, with lessons and questions, is filed with the operation records."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare your actual recovery times with the leaflet's estimates"
                - "List the three things that helped most and anything unused"
                - "Write the questions you wish you had asked beforehand"
                - "File the notes with your operation details sheet"
---

# Surgery Preparation & Aftercare

This area is for anyone with a planned operation coming up, and for the people helping them through it. It starts with the foundations (the operation details, consent questions, pre-op assessment, medicines, fasting, time off, a lift home, a recovery room and a help rota), then the daily and weekly routines of recovery, the skills worth learning before the day, the decisions about whether, where and how, the dated events from packing the bag to the six-week review, situations such as living alone, young children or an older relative, and finally the specialist work of drains, staged operations and pain that lingers.

What repeats is a daily wound check, pain log and clot prevention routine while you heal, weekly reviews of walking, appointments, eating and progress against the expected timeline, twice-weekly scar care once the wound closes, and monthly checks on supplies, staged treatment and lingering pain. The Meeting notes, Household chores, Metrics log, Purchase decision, Operational checklist and Trip templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
