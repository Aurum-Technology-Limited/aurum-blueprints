---
id: practice-ownership.owning-a-medical-clinic
name: Owning a Medical Clinic
description: "Run your clinic as a business without losing the doctor in you: licences and services set, rosters and session maps, results and recall systems, cold chain and stock, new services, inspections and the owner's own clinical load."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-medical-clinic, small-business, founder, family-practice, clinic-operations, rosters, primary-care]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - vendor
    - risk-register
    - meeting-notes
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Medical Clinic
          description: "Running your own medical clinic or family practice: premises and equipment, doctor and nurse rosters, patient billing, licensing, records and the owner's own clinical load."
          projects:
            - name: One-page operating picture of the clinic
              description: |-
                ## Purpose
                Most owners can quote their patient numbers but not how many doctor sessions they run a week, what share of income comes from each payer, or which three services earn the most. A single page with sessions, staff, services, payers and fixed costs gives you a baseline that every later decision in this area is measured against. Doing it in the first fortnight, before you change anything, means you can show later what actually moved.

                ## Milestones
                1. A count of doctor, nurse and support sessions per week, by person.
                2. Last year's income split by payer type: self-pay, insurers, employer contracts and any public programme.
                3. The five highest-earning services and the five busiest appointment types listed.
                4. Monthly fixed costs (rent, salaries, software, insurance, lab contracts) totalled on the same page.
                5. The page dated and saved where your practice manager or accountant can see it.

                ## Notes
                Use last full year's figures from your accounts and booking system. Estimates are fine for a first version as long as you mark them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page summary of sessions, payer mix, top services and monthly fixed costs exists and has been shared with the practice manager or accountant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export last year's appointment counts by clinician from the booking system"
                - "Ask your accountant for last year's income split by payer type"
                - "List the monthly fixed costs from the last three bank statements"
                - "Write the one-page operating picture and date it"
            - name: Clinic licence and registration register
              description: |-
                ## Purpose
                Permits pile up faster than owners remember: the facility licence, each clinician's registration and practising certificate, a dispensing or pharmacy permit if you supply medicines, radiation registration for any X-ray, a clinical waste contract and the business licence. One register with every document, its holder, its expiry and where the original is kept turns a renewal from a scramble into a diary entry. A single lapsed registration can stop a doctor working on the day an inspector or insurer asks.

                ## Milestones
                1. Every licence, permit, registration and certificate the clinic and its clinicians hold listed in one register.
                2. Each entry showing the holder, the issuing body, the expiry date and where the original is filed.
                3. Missing or expired items identified, each with an owner and a date to fix it.
                4. Renewal reminders set at least 90 days before each expiry.

                ## Notes
                Start from the **Operational checklist** template. The exact permits differ by country and by the services you offer, so confirm the list with your regulator or licensing authority rather than relying on another clinic's list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every clinic and clinician licence with expiry dates and file locations, and no item is expired or without a named owner."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every licence and certificate from the office files into one folder"
                - "Ask each clinician for a copy of their current registration and practising certificate"
                - "Confirm with the licensing authority which permits your services require"
                - "Check the next 90 days of renewals in the register @recurring(monthly:27)"
            - name: Services offered and scope of the clinic
              description: |-
                ## Purpose
                Clinics drift into services because a patient asked once: a few joint injections, an occasional medical for an employer, ear syringing on Fridays. Writing down what the clinic does, what it does not do and where it sends patients for the rest protects patients, sets staff expectations and shows the insurer exactly what you are covered for. It also shows which services you are doing too rarely to stay safe at.

                ## Milestones
                1. A list of every service currently offered, with the clinicians trained to provide it.
                2. Each service marked as core, occasional or to stop.
                3. A short list of what the clinic does not offer, with the usual referral destination for each.
                4. The scope checked against your indemnity cover and facility licence.
                5. The final list on the website and at the front desk.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written scope of services, checked against indemnity cover and the facility licence, is published at the front desk and on the website."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every service the clinic provided in the last six months"
                - "Mark which clinicians are trained and current for each service"
                - "Send the list to your indemnity provider and ask them to confirm cover"
                - "Publish the agreed services list at reception and online"
            - name: Owner's clinical session cap
              description: |-
                ## Purpose
                An owner-doctor who sees patients all day has no time left to run the business, and the business shows it within a year: rosters set late, claims unchased, staff problems left to grow. Deciding how many clinical sessions you will work each week, and which hours are protected for management, is the single change that makes the rest of this area possible. The right number depends on clinic size and income, so set it from the operating picture, not from guilt.

                ## Milestones
                1. Your current weekly clinical sessions and hours of management work counted for two typical weeks.
                2. A cap on clinical sessions agreed, with at least one protected management session a week.
                3. The income effect of the cap worked out and the cover for lost sessions planned.
                4. The cap blocked in the booking system so reception cannot fill it.

                ## Notes
                Many owners start with one management session a week and add a second once the clinic has a practice manager. Protecting it from urgent appointments is harder than choosing it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written weekly session cap with at least one protected management session is blocked in the booking system for the next three months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count your clinical and management hours for the last two weeks"
                - "Choose the weekly session cap and the protected management slot"
                - "Block the management session in the booking system for three months"
                - "Review your own session count against the cap @recurring(quarterly)"
            - name: Opening hours and weekly session map
              description: |-
                ## Purpose
                Patients judge a clinic first by whether they can get in, and the hours you advertise have to match the doctors and nurses actually on the rota. A session map shows every half-day of the week with who is working, which rooms are in use and which appointment types are open. Gaps such as no female doctor on Thursdays or no nurse on Saturday mornings become visible and fixable.

                ## Milestones
                1. A grid of every morning, afternoon and evening session in a typical week.
                2. Each session showing the doctors, nurses and rooms in use.
                3. Advertised opening hours checked against the grid and any mismatch fixed.
                4. Two or three gaps in access named, with a plan to close each.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A weekly session map exists, the advertised opening hours match it, and at least two access gaps have a written plan."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draw a seven-day grid split into morning, afternoon and evening sessions"
                - "Fill in each clinician and room from the current rota"
                - "Compare the grid with the hours on the door, website and phone message"
                - "Pick the two access gaps patients complain about most"
            - name: Patient list profile and chronic disease count
              description: |-
                ## Purpose
                Knowing that the clinic has 4,000 registered or regular patients is less useful than knowing how many are over 65, how many have diabetes or high blood pressure, and how many have not been seen in two years. A list profile tells you how much nurse time chronic care needs, which recalls matter most and whether your services fit the people you serve. Most booking and records systems can produce it with a few searches.

                ## Milestones
                1. Active patients counted, with a clear definition of active.
                2. The list split into age bands and by sex.
                3. Patients with the five or six commonest long-term conditions counted from coded records.
                4. Patients not seen in two years identified as a separate group.
                5. A short note on what the profile means for staffing and services.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written list profile with age bands, counts for at least five long-term conditions and the inactive group is saved with a note on staffing implications."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree with the practice manager what counts as an active patient"
                - "Run age band and sex searches in the records system"
                - "Search coded diagnoses for diabetes, hypertension, asthma, COPD and heart disease"
                - "Write a half-page note on what the numbers mean for nurse time"
            - name: Emergency trolley and resuscitation readiness
              description: |-
                ## Purpose
                Every clinic will one day have a collapse in the waiting room, an anaphylactic reaction after a vaccine or a child with severe breathing trouble at the front desk. Whether that goes well depends on a stocked, in-date emergency kit, a working defibrillator, oxygen that is actually full and staff who know their roles. Owners carry responsibility for all of it, and inspectors and insurers look at it first.

                ## Milestones
                1. An emergency equipment and drug list agreed with your clinical lead against current resuscitation guidance.
                2. The trolley or grab bag stocked, sealed and labelled with the next expiry date.
                3. Defibrillator pads, battery and oxygen cylinder levels checked and logged.
                4. Every staff member's basic life support training date recorded, with gaps booked.
                5. A weekly check routine in place with a named person and a deputy.

                ## Notes
                Start from the **Operational checklist** template. The drug list and doses come from your clinical lead and current national resuscitation guidance, not from this blueprint.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The emergency kit is fully stocked and in date, the defibrillator and oxygen are logged as ready, and every staff member has current life support training or a booked date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Check the defibrillator pads, battery light and oxygen gauge today"
                - "Ask your clinical lead to confirm the emergency drug and equipment list"
                - "Book life support training for anyone without a current certificate"
                - "Check the emergency trolley against the checklist @recurring(weekly:mon)"
            - name: Medical director and clinical lead roles in writing
              description: |-
                ## Purpose
                In a small clinic the owner is often the medical director by default, and nobody has written down what that means: who signs off protocols, who decides when a doctor is not safe to work, who answers the regulator. Writing the clinical lead responsibilities, separate from the business owner's, makes accountability clear when you are away and is essential if the owner is not a doctor. It also gives a successor or a buyer something concrete to take over.

                ## Milestones
                1. A list of clinical leadership duties: protocols, prescribing oversight, safeguarding, significant events, clinician concerns.
                2. A named medical director and a deputy for each duty.
                3. The split between clinical decisions and business decisions written in one page.
                4. The page signed by the owner and the medical director.

                ## Notes
                If the owner is not a doctor, check with your regulator whether a registered medical director must be named on the facility licence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed one-page role statement names the medical director and deputies and separates clinical from business decisions."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the clinical leadership decisions made in the clinic last quarter"
                - "Name who currently makes each decision and who covers when they are away"
                - "Write the one-page clinical and business role split"
                - "Sign it with the medical director and file it with the licence"
            - name: Cost per consultation baseline
              description: |-
                ## Purpose
                Fee setting, insurer negotiations and the question of whether a new service pays all depend on what a single appointment really costs you. Dividing staff, premises, consumables and overheads by the number of consultations gives a rough cost per doctor and per nurse appointment. Owners who do this for the first time often find that short appointments or one insurer's rates lose money.

                ## Milestones
                1. Annual costs grouped into clinician pay, support staff, premises, consumables and overheads.
                2. Doctor and nurse consultations counted for the same year.
                3. A rough cost per doctor appointment and per nurse appointment worked out.
                4. The cost set beside the average fee from your three largest payers.

                ## Notes
                Ask your accountant to check the method once. A rough number that everyone understands is more useful than a precise one nobody trusts.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A cost per doctor and per nurse consultation is calculated, checked by the accountant and compared with the average fee from the top three payers."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask your accountant for last year's costs grouped into five headings"
                - "Pull the year's consultation counts split by doctor and nurse"
                - "Divide costs by consultations to get a cost per appointment"
                - "Compare the result with the average fee paid by your three largest payers"
            - name: Monthly doctor and nurse roster cycle
              description: |-
                ## Purpose
                Rosters published two weeks ahead leave no time to cover leave, and gaps get filled by the owner working extra sessions. Publishing each month's roster six weeks in advance, with leave requests closed before it is drafted, gives time to book locums, keep minimum staffing on every session and tell patients when their regular doctor is away. The routine takes a couple of hours a month once it is set.

                ## Milestones
                1. Minimum staffing written for each session type: doctors, nurses, reception.
                2. A leave request cut-off date set and shared with all staff.
                3. Each month's roster published six weeks ahead for three months running.
                4. Uncovered sessions flagged and filled or deliberately closed before publication.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Three consecutive monthly rosters have been published at least six weeks ahead with every session meeting the written minimum staffing."
                cadence: rolling
              tasks:
                - "Write the minimum staffing for morning, afternoon and evening sessions"
                - "Announce the leave request cut-off date to every clinician"
                - "Publish the roster for the month six weeks ahead @recurring(monthly:8)"
                - "List uncovered sessions and ask your locum contacts for cover"
            - name: Daily clinic huddle before morning surgery
              description: |-
                ## Purpose
                Most clinic days go wrong in predictable ways: a doctor running late, a room out of action, a known difficult patient booked at noon, a sick nurse with no cover. A huddle of eight minutes before the doors open, with whoever is on shift, catches these before patients are waiting. Clinics that keep it up report fewer overruns and fewer surprises at reception.

                ## Milestones
                1. A fixed huddle time and place before the first appointment.
                2. A five-point agenda: staffing, rooms and equipment, urgent slots, flagged patients, yesterday's problems.
                3. The huddle held on at least four days a week for a month.
                4. Recurring problems from the huddle logged and passed to the practice manager.

                ## Notes
                Start from the **Meeting notes** template for the log, but keep the huddle itself to standing and talking. If it runs past ten minutes, move the long items elsewhere.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The morning huddle has run on at least 16 clinic days in a month, with recurring problems logged and passed on."
                cadence: rolling
              tasks:
                - "Pick the huddle time and tell every member of the morning team"
                - "Print the five-point huddle agenda and pin it at reception"
                - "Hold the eight-minute huddle before morning surgery @recurring(daily)"
                - "Note any problem that came up three times and pass it to the practice manager"
            - name: Results and correspondence inbox workflow
              description: |-
                ## Purpose
                Unactioned abnormal results are one of the commonest causes of harm and claims in primary care, and they usually happen because a result arrived on a doctor's day off. A workflow that routes every lab, imaging and hospital letter to a named clinician, covers absences and records the action taken closes that gap. As owner you need to know it works on the days you are not there.

                ## Milestones
                1. Every route by which results and letters arrive listed: lab portal, email, fax, post, patient hand delivery.
                2. A rule for who files results when the requesting clinician is away.
                3. Abnormal results actioned and the action recorded the same working day.
                4. A monthly spot check showing no result older than two working days unfiled.

                ## Notes
                Agree with your clinicians what counts as urgent and how patients are told about normal results. Telling patients to assume no news is good news is a common source of complaints.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For three months, monthly spot checks find no result older than two working days unfiled and every abnormal result has a recorded action."
                cadence: rolling
              tasks:
                - "List every way results and letters reach the clinic today"
                - "Write the cover rule for results when the requesting clinician is away"
                - "Clear the results inbox before the end of each clinic day @recurring(daily)"
                - "Spot check twenty results for filing time and recorded action"
            - name: Repeat prescription request system
              description: |-
                ## Purpose
                Repeat prescription requests arrive by phone, at the desk, by email and through the pharmacy, and without one route they get lost or signed without a review date being checked. A single request route with a promised turnaround, usually two working days, and a rule for when a medication review is due cuts phone calls and makes prescribing safer. Patients notice the difference within weeks.

                ## Milestones
                1. One preferred request route chosen and the others closed or redirected.
                2. A published turnaround time for routine repeat requests.
                3. A rule that requests past their medication review date go to a clinician, not straight to signing.
                4. A monthly audit of turnaround and review dates in place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Repeat requests arrive by one route, the published turnaround is met for at least nine in ten requests, and overdue reviews are routed to a clinician."
                cadence: rolling
              tasks:
                - "Count last week's repeat requests by the route they came in"
                - "Choose the single route and write the patient notice"
                - "Agree the medication review rule with your prescribing clinicians"
                - "Audit ten repeat requests for turnaround and review date @recurring(monthly:19)"
            - name: Vaccine fridge and cold chain log
              description: |-
                ## Purpose
                A vaccine fridge that drifts out of range overnight can spoil thousands in stock and, worse, mean patients were given vaccines that may not protect them. Twice-daily temperature records, a data logger and a written plan for what to do after a reading out of range are what public health programmes and inspectors expect. The owner pays for the wasted stock, so the routine is worth owning.

                ## Milestones
                1. A dedicated vaccine fridge with a calibrated thermometer or data logger.
                2. Minimum, maximum and current temperatures recorded twice each clinic day.
                3. A written plan for a reading out of range, including who to call and how to quarantine stock.
                4. A named person and deputy responsible for the fridge.
                5. Logger data downloaded and reviewed monthly.

                ## Notes
                Follow your national immunisation programme's cold chain guidance for ranges and actions. Do not use a domestic fridge or store food or samples beside vaccines.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Fridge temperatures are recorded twice each clinic day for three months, logger data is reviewed monthly and an out-of-range plan is posted on the fridge."
                cadence: rolling
              tasks:
                - "Find your immunisation programme's cold chain guidance and note the safe range"
                - "Post the out-of-range plan and contact numbers on the fridge door"
                - "Record fridge minimum, maximum and current temperatures @recurring(daily)"
                - "Download the data logger and review any excursions @recurring(monthly:3)"
            - name: Weekly clinical stock and consumables order
              description: |-
                ## Purpose
                Clinics either run out of dressings and swabs at the worst moment or hoard boxes that expire in a cupboard. A short weekly count of the twenty or thirty items you use most, with set reorder levels and one person placing the order, keeps cash out of the store room and supplies in the treatment rooms. Expiry checks on procedure and emergency stock belong in the same routine.

                ## Milestones
                1. A list of the 20 to 30 highest-use consumables with a reorder level for each.
                2. One person and a deputy responsible for the weekly order.
                3. Stock stored by expiry date, oldest at the front.
                4. No stockouts of listed items for a full quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A reorder list with set levels is in use, and no listed item ran out during a full quarter."
                cadence: rolling
              tasks:
                - "List the consumables the clinic ordered most often in the last three months"
                - "Set a reorder level for each item with the lead nurse"
                - "Run the stock count and place the weekly order @recurring(weekly:tue)"
                - "Check expiry dates on procedure and dressing stock @recurring(monthly:14)"
            - name: Clinical equipment servicing and calibration calendar
              description: |-
                ## Purpose
                ECG machines, spirometers, autoclaves, scales, blood pressure monitors, nebulisers and the defibrillator all need servicing or calibration, and the dates sit in different engineers' reports. One calendar of every item, its last service and its next due date protects patients and satisfies inspectors and insurers. It also tells you which items are near the end of their life before they fail mid-clinic.

                ## Milestones
                1. An asset list of every clinical device with serial number, location and age.
                2. Last service or calibration date and next due date recorded for each.
                3. Service contracts or named engineers identified for every item.
                4. Overdue items serviced or taken out of use.

                ## Notes
                Start from the **Vendor** template for each service provider. Electrical safety testing of all clinic equipment is usually a separate schedule from clinical calibration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every clinical device is on one calendar with its next service date, and none is overdue or still in use past its due date."
                cadence: rolling
              tasks:
                - "Walk the clinic and list every clinical device with its serial number"
                - "Find the last service report for each and note the due date"
                - "Book servicing for anything already overdue"
                - "Review the servicing calendar for the coming quarter @recurring(quarterly)"
            - name: Monthly clinic numbers meeting
              description: |-
                ## Purpose
                Owners who look at the numbers only when the accountant calls find out about falling appointments or rising unpaid claims months too late. A one-hour meeting each month with the practice manager, looking at the same eight figures every time, catches drift while it is still small. The figures are clinic-specific: sessions run, appointments booked and attended, income by payer, claims outstanding, staff costs and cash.

                ## Milestones
                1. Eight monthly figures chosen and defined so they are pulled the same way each time.
                2. A one-page log with a column per month.
                3. The meeting held for three consecutive months with actions recorded.
                4. At least one problem found early and acted on.

                ## Notes
                Start from the **Metrics log** template. Keep the list short; a dashboard of forty figures is not read.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log with eight defined figures has been filled for three consecutive months, each with recorded actions."
                cadence: rolling
              tasks:
                - "Choose the eight monthly figures with your practice manager"
                - "Write down exactly where each figure is pulled from"
                - "Hold the monthly clinic numbers meeting @recurring(monthly:10)"
                - "Record one action and an owner for each figure that moved the wrong way"
            - name: Chronic disease and screening recall system
              description: |-
                ## Purpose
                Patients with diabetes, high blood pressure, asthma or heart disease need regular reviews, and women of screening age need cervical screening invitations, but busy clinics only see people who book themselves. A monthly recall search that invites those who are due, with a second reminder and a record of who declines, keeps care on schedule and fills nurse clinics predictably. In many systems it is also what insurers and public programmes pay for.

                ## Milestones
                1. Recall intervals agreed with your clinicians for each condition and screening programme.
                2. A saved search for each recall group in the records system.
                3. Invitations by text, letter or call sent monthly, with a second reminder.
                4. Declines and non-responders recorded rather than left in limbo.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Saved recall searches exist for at least four conditions and screening, invitations go out monthly, and declines are recorded."
                cadence: rolling
              tasks:
                - "Agree recall intervals for each condition with the clinical lead"
                - "Build and save a search for each recall group"
                - "Run the recall searches and send invitations @recurring(monthly:5)"
                - "Write the script reception uses when patients decline a review"
            - name: Outgoing referral tracking loop
              description: |-
                ## Purpose
                A referral to a cardiologist or a scan that never happens is invisible until the patient comes back worse, and the clinic is often blamed. A simple referral log, with a weekly check for anything older than four weeks without an appointment, catches lost referrals while they can still be fixed. Urgent suspected cancer referrals need a shorter check.

                ## Milestones
                1. Every outgoing referral logged with date, destination and urgency.
                2. A shorter tracking window set for urgent referrals.
                3. A weekly check of referrals with no appointment confirmed.
                4. Patients told how to contact the clinic if they hear nothing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All outgoing referrals for a quarter are logged, and every routine referral older than four weeks without an appointment has been chased."
                cadence: rolling
              tasks:
                - "Set up the referral log with date, destination, urgency and status columns"
                - "Agree the tracking window for urgent referrals with your doctors"
                - "Chase referrals older than four weeks with no appointment @recurring(weekly:thu)"
                - "Add a line to referral letters telling patients when to call if they hear nothing"
            - name: Waiting time and missed appointment tracking
              description: |-
                ## Purpose
                Two numbers tell you more about access than any survey: how many days a patient waits for the next routine appointment, and how many booked appointments are missed without notice. Tracking both monthly shows whether a new doctor, a text reminder or a change in the appointment book actually helped. A missed-appointment rate of one in ten can cost a clinic several full sessions a month.

                ## Milestones
                1. A definition of wait to third next available routine appointment agreed.
                2. Missed appointments counted by clinician and by appointment type.
                3. Both figures recorded monthly for at least six months.
                4. One change made to cut missed appointments and its effect measured.

                ## Notes
                Text reminders the day before are the simplest fix for missed appointments. Be careful that a missed appointment policy does not shut out vulnerable patients.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly wait and missed appointment figures have been recorded for six months, with one change tested and its effect noted."
                cadence: rolling
              tasks:
                - "Ask reception to note the third next routine appointment each Monday"
                - "Run a report of last month's missed appointments by clinician"
                - "Pull the missed appointment rate and routine wait figure @recurring(monthly:24)"
                - "Switch on day-before text reminders if the booking system supports them"
            - name: Reading a clinic profit and loss statement
              description: |-
                ## Purpose
                Many doctor-owners sign their accounts without being able to say why profit fell, which lines are fixed and which move with patient numbers, or what the accountant means by gross margin in a clinic. Two or three focused sessions with your own accounts and your accountant are enough to read a clinic profit and loss statement and balance sheet with confidence. It makes every later conversation with the bank, a buyer or a partner shorter.

                ## Milestones
                1. Last year's profit and loss statement annotated line by line in your own words.
                2. Each cost line marked fixed, semi-fixed or variable with patient volume.
                3. Three questions about the accounts answered by your accountant.
                4. A one-paragraph explanation of last year's profit change written by you.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You have written a one-paragraph explanation of last year's profit change from an annotated set of accounts, checked by your accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Print last year's profit and loss statement and balance sheet"
                - "Mark each cost line as fixed, semi-fixed or variable"
                - "Book an hour with your accountant to go through three questions"
                - "Write your own explanation of why profit rose or fell"
            - name: How each payer reimburses your clinic
              description: |-
                ## Purpose
                Self-paying patients, private insurers, employer schemes and government or public programmes each pay differently: some per visit, some per patient per month, some per procedure, with different claim rules and payment times. Owners who understand each payer's model can see which appointment types are profitable and where claims are leaking. A single comparison table is the output, not a billing system.

                ## Milestones
                1. Every payer the clinic bills listed with its payment model.
                2. Average payment per appointment and average days to payment noted for each.
                3. Each payer's key claim rules summarised in two or three lines.
                4. The two payers with the worst rates or slowest payments identified.

                ## Notes
                Detailed claim handling and rejected claims belong to your billing routine. This project is about understanding the economics of each payer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A comparison table covers every payer's model, average payment, days to payment and key claim rules, with the two weakest payers named."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every payer that paid the clinic in the last twelve months"
                - "Ask the billing lead for average payment and days to payment per payer"
                - "Read each payer's provider agreement and note the main claim rules"
                - "Mark the two payers that pay least or slowest"
            - name: Employment basics for a clinic employer
              description: |-
                ## Purpose
                Owning a clinic means employing doctors, nurses, receptionists and cleaners, often on a mix of contracts, and most owners learn employment rules only when something goes wrong. Learning the basics of contracts, working time, leave, sickness absence, disciplinary steps and dismissal in your country means you handle the first difficult case properly. The aim is to know when to call an employment adviser, not to replace one.

                ## Milestones
                1. Each staff member's contract type and key terms listed.
                2. Your country's basic rules on leave, sickness, notice and working hours summarised on a page.
                3. The clinic's disciplinary and grievance steps written down.
                4. An employment adviser or lawyer named for difficult cases.

                ## Notes
                Rules differ widely by country and change often. Use your labour ministry's guidance or an employers' association and confirm anything important with an adviser.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of local employment rules and a written disciplinary procedure exist, and an employment adviser is named."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every staff member with their contract type and start date"
                - "Read your labour ministry's guide for employers and note the main rules"
                - "Write the clinic's disciplinary and grievance steps on one page"
                - "Ask two other clinic owners which employment adviser they use"
            - name: Leading the clinic team as owner
              description: |-
                ## Purpose
                Doctors are trained to lead in a consultation, not to run a team meeting, give a receptionist hard feedback or settle a dispute between two nurses. A few practical leadership skills, practised in the clinic, change how staff experience the owner and how long they stay. A regular whole-team meeting is the place to practise them.

                ## Milestones
                1. A monthly whole-team meeting with a standing agenda running for three months.
                2. Each team member given at least one specific piece of feedback in a short one-to-one.
                3. One staff conflict or performance problem handled with notes kept.
                4. One leadership book or short course finished and two ideas tried.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Three monthly team meetings have been held with notes, and every staff member has had a one-to-one with specific feedback."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Write a standing agenda for a 45-minute whole-team meeting"
                - "Hold the monthly whole-clinic team meeting @recurring(monthly:21)"
                - "Book a 15-minute one-to-one with each staff member this month"
                - "Choose one short leadership course or book and schedule it"
            - name: Health and safety duties as a clinic employer
              description: |-
                ## Purpose
                Clinics have hazards that offices do not: needlestick injuries, clinical waste, aggressive patients, lone working in the evening, chemical disinfectants and the occasional infectious patient in the waiting room. As employer you are usually responsible for assessing these risks and showing what you have done about them. Learning the duties and writing the clinic's own risk assessments protects staff and answers the inspector's first question.

                ## Milestones
                1. The main health and safety duties for an employer in your country summarised.
                2. Written risk assessments for sharps, waste, violence and aggression, lone working and hazardous chemicals.
                3. A needlestick injury procedure posted in every clinical room.
                4. An accident and incident book in use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Five written clinic risk assessments exist, a needlestick procedure is posted in every clinical room and an incident book is in use."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your workplace safety authority's guidance for healthcare employers"
                - "Write risk assessments for sharps, waste, aggression, lone working and chemicals"
                - "Post the needlestick procedure in every clinical room"
                - "Start an incident book and show reception where it is kept"
            - name: Chaperone and consent policy for examinations
              description: |-
                ## Purpose
                Complaints about intimate examinations are among the most serious a clinic faces, and they usually turn on whether a chaperone was offered and what was recorded. A short policy on when a chaperone is offered, who can act as one, how consent is recorded and what to do when no chaperone is available protects patients and clinicians alike. Staff who act as chaperones need brief training.

                ## Milestones
                1. A written policy on offering chaperones and recording consent for intimate examinations.
                2. Named staff trained to act as chaperones.
                3. Posters in waiting and clinical rooms telling patients they can ask for one.
                4. Clinicians agreeing to a standard note entry for offers and refusals.

                ## Notes
                Base the policy on your medical regulator's guidance on intimate examinations, which is usually short and specific.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chaperone policy is in place, named chaperones are trained, patient notices are posted and clinicians use a standard note entry."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your medical regulator's guidance on intimate examinations"
                - "Draft the chaperone policy and share it with every clinician"
                - "Arrange a short chaperone briefing for nurses and support staff"
                - "Put chaperone notices in the waiting room and each consulting room"
            - name: Redesigning the appointment book
              description: |-
                ## Purpose
                Appointment books are often inherited: ten-minute slots for everything, no on-the-day urgent capacity, and long reviews squeezed into short slots that then overrun. Redesigning the slot mix around what patients actually need, such as longer slots for chronic reviews, protected urgent slots each session and telephone triage first thing, can cut overruns and phone queues together. Test it for a month before making it permanent.

                ## Milestones
                1. A month of demand analysed: appointment types, urgent requests turned away, overruns.
                2. A new slot mix drafted for each clinician type, including urgent on-the-day capacity.
                3. The new template trialled for four weeks.
                4. Waits, overruns and reception feedback compared before and after.
                5. The template kept, adjusted or dropped, with the decision recorded.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A redesigned appointment template has been trialled for four weeks and a recorded decision made from before and after figures."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask reception to tally urgent requests turned away for two weeks"
                - "Pull last month's appointment types and overrun times by clinician"
                - "Draft the new slot mix with the doctors and nurses"
                - "Run the trial template for four weeks and compare the figures"
            - name: Adding a nurse-led clinic
              description: |-
                ## Purpose
                Diabetes reviews, blood pressure checks, wound care, travel vaccines and contraception reviews can often be run by a trained nurse, freeing doctor time and giving patients longer appointments. Before starting one you need to know the demand, the nurse's competence and the protocols, how each payer pays for nurse appointments and the room time. A decision paper answers those questions before you change the roster.

                ## Milestones
                1. Demand for the chosen nurse-led service estimated from the list profile and appointments.
                2. The nurse's training and competence for the service confirmed.
                3. Protocols and escalation rules to the doctor signed off by the clinical lead.
                4. Income per nurse appointment checked for each payer.
                5. A go or no-go decision recorded with a start date if go.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a nurse-led clinic, covering demand, competence, protocols and payer income, is recorded with a start date or a reason not to proceed."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the service where nurse-led care would free most doctor time"
                - "Ask the nurse what further training or supervision they would need"
                - "Check with each payer whether nurse appointments are billable"
                - "Write a one-page go or no-go paper for the partners or yourself"
            - name: Choosing a laboratory and imaging partner
              description: |-
                ## Purpose
                Lab and imaging partners decide how fast results come back, how they reach you and what patients pay, yet many clinics use whichever lab the previous owner used. Comparing two or three labs on turnaround, result delivery into your system, collection or phlebotomy options, patient prices and insurer acceptance can improve care and income at the same time. Point-of-care tests in the clinic are part of the same choice.

                ## Milestones
                1. Current lab and imaging arrangements written up, with turnaround and patient prices.
                2. Two or three alternatives scored on the same six criteria.
                3. In-clinic phlebotomy and point-of-care testing options costed.
                4. A partner chosen and the agreement terms noted.

                ## Notes
                Start from the **Vendor** template for each lab. Electronic results straight into your records system are worth more than a small price difference.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three lab or imaging options have been scored on six criteria and a partner chosen, with the agreement terms recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down current lab turnaround times and patient prices"
                - "Ask two other labs for their price list and result delivery options"
                - "Score each option on turnaround, delivery, collection, price, insurers and service"
                - "Record the choice and the main agreement terms"
            - name: Deciding whether to dispense medicines on site
              description: |-
                ## Purpose
                Supplying medicines from the clinic can add income and convenience, especially where the nearest pharmacy is far away, but it brings a permit, stock control, controlled drug duties, labelling and a second set of inspections. Deciding properly means checking whether the law in your country allows doctors to dispense, what it would cost and how it would change relationships with local pharmacies. Many clinics conclude that a good pharmacy partnership is worth more.

                ## Milestones
                1. The rules on doctor dispensing in your jurisdiction confirmed with the regulator.
                2. Start-up and running costs estimated, including stock, storage, software and staff time.
                3. Likely income and margin estimated from your prescribing volume.
                4. The effect on local pharmacy relationships considered.
                5. A decision recorded with reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written dispensing decision exists, based on confirmed local rules and costed income and running costs."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your regulator whether doctors may dispense in your area"
                - "Count last year's prescriptions for the twenty most common medicines"
                - "Estimate stock, storage, software and staff costs for dispensing"
                - "Talk to the nearest pharmacy owner about their view"
            - name: Setting up a minor procedures room
              description: |-
                ## Purpose
                Excisions, joint injections, contraceptive implants, wound repair and ear care are often sent to hospital or other clinics when they could be done in yours. A minor procedures room needs suitable space, sterile equipment or single-use kits, trained and current clinicians, consent forms, indemnity cover and a way to send samples to histology. A costed plan shows whether the volume justifies the set-up.

                ## Milestones
                1. The procedures you would offer listed with expected monthly volume.
                2. Room, equipment and sterilisation or single-use requirements costed.
                3. Clinician training and currency confirmed for each procedure.
                4. Indemnity cover and payer reimbursement confirmed.
                5. A decision recorded, with an opening date if approved.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed minor procedures plan with confirmed training, indemnity and payer reimbursement has a recorded decision."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count procedures referred out in the last six months that you could do in-house"
                - "Price the equipment and consumables for the room"
                - "Confirm indemnity cover for each procedure with your provider"
                - "Write the decision with expected volume and payback period"
            - name: Employer and occupational health contracts
              description: |-
                ## Purpose
                Local employers, schools, sports clubs and hotels often need pre-employment medicals, fitness to work assessments, vaccinations and on-site health days, and a clinic nearby is the natural supplier. A few contracts can fill quiet sessions and smooth income through the year. The work needs clear pricing, consent and confidentiality rules about what the employer is told, and capacity that does not squeeze out regular patients.

                ## Milestones
                1. Three to five likely employer clients listed with the services they would buy.
                2. A price list for medicals, assessments and health days.
                3. A consent and confidentiality statement covering what employers receive.
                4. At least one contract signed or a decision not to pursue recorded.

                ## Notes
                Patients examined for an employer are still owed confidentiality. Agree in writing that employers receive a fitness outcome, not clinical details.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A price list and confidentiality statement exist, and at least one employer contract is signed or the idea is formally dropped."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List five local employers that need regular medicals"
                - "Draft the price list for medicals, assessments and health days"
                - "Write the consent and confidentiality statement for employer work"
                - "Book a meeting with the employer most likely to sign"
            - name: Phone access and front desk triage redesign
              description: |-
                ## Purpose
                When the phones open at eight and every patient calls at once, the clinic loses goodwill before any doctor has seen anyone. Measuring call volume and abandoned calls, then adding call queuing, online requests or a call-back system and a simple triage script for reception, spreads demand and gets urgent patients to the right slot. The script must be agreed with clinicians, since reception should never be making clinical decisions alone.

                ## Milestones
                1. Call volume and abandoned calls measured by hour for two weeks.
                2. One or two changes chosen, such as call queuing, call-back or online requests.
                3. A reception triage script agreed with the clinical lead, with red flags that go straight to a clinician.
                4. Abandoned calls measured again after one month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A clinician-approved reception script is in use and abandoned calls have been measured before and one month after the change."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask the phone provider for call and abandoned call reports by hour"
                - "Choose one access change to make first"
                - "Draft the reception script with red flags for the clinical lead to approve"
                - "Re-run the call report one month after the change"
            - name: Cutting doctor admin time
              description: |-
                ## Purpose
                Doctors in many clinics spend a third of their day on letters, forms, results and messages, and the owner pays for that time at the doctor's rate. Measuring admin load, then moving work to templates, nurses, administrators or a scribing tool, gives back sessions without hiring. Start with the three tasks that take the most doctor time.

                ## Milestones
                1. Doctor admin time sampled for a week, by type of task.
                2. The three biggest admin tasks named.
                3. A change made for each: a template, a delegation rule or a tool.
                4. Admin time sampled again a month later.

                ## Notes
                Any scribing or transcription tool needs patient consent rules and a data protection check before use.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Doctor admin time has been sampled before and after changes to the three biggest admin tasks, with the difference recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask each doctor to log admin minutes by task type for one week"
                - "Rank the admin tasks by total doctor time"
                - "Ask the agent to draft templates for the two commonest letters"
                - "Agree which tasks nurses or administrators can take over"
            - name: After-hours and weekend cover arrangement
              description: |-
                ## Purpose
                Patients get ill at night and on Sundays, and the clinic needs a clear answer for them, even if that answer is another service. Choosing between your own on-call rota, a shared rota with nearby clinics, a deputising service or a clear message pointing to emergency services is a decision about cost, doctor wellbeing and patient safety. The answerphone message, website and patient leaflets must all say the same thing.

                ## Milestones
                1. Current out-of-hours arrangements and patient demand written down.
                2. Options compared on cost, doctor workload and patient safety.
                3. An arrangement chosen and agreed with any partner clinics or services.
                4. Answerphone, website and leaflets updated to match.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An after-hours arrangement is chosen and agreed, and the answerphone, website and leaflets all give the same instructions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Call your own clinic after hours and note what a patient hears"
                - "Ask two nearby clinics whether they would share an on-call rota"
                - "Compare costs and workload of each option on one page"
                - "Update the answerphone, website and leaflets once the choice is made"
            - name: Home visits and care home rounds policy
              description: |-
                ## Purpose
                Housebound patients and care home residents need doctors who come to them, but unplanned home visits can swallow an afternoon and leave a waiting room full. Deciding who qualifies for a visit, how requests are triaged, which days carry visits and whether a nurse can do some of them puts this work on the roster instead of on top of it. Regular rounds at a local care home can also be offered as a paid service.

                ## Milestones
                1. Home visit requests counted for a month, with who made them and why.
                2. Written criteria for who qualifies for a home visit.
                3. Visit slots built into the roster on set days, with a doctor or nurse named.
                4. Any care home arrangement agreed in writing, including fees and response times.
                5. Travel, lone working and record-keeping rules for visits written down.

                ## Notes
                Clinicians on visits are lone workers. Make sure someone at the clinic knows where they are and when they are due back.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "Home visit criteria and roster slots are in place, and any care home round is covered by a written agreement with fees and response times."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask reception to log every home visit request for a month"
                - "Draft the criteria for who qualifies for a home visit"
                - "Add set visit slots to the roster with a named clinician"
                - "Agree fees and response times with any care home you visit"
            - name: Clinic licensing inspection visit
              description: |-
                ## Purpose
                Inspectors check premises, equipment, records, policies, staff registrations and infection control on one day, and the clinics that do well are the ones that keep evidence ready rather than scramble the week before. Preparing for a known or expected visit means a self-check against the inspector's published standards, an evidence folder and a short briefing for staff on the day. Findings afterwards become an action plan.

                ## Milestones
                1. The inspector's published standards or checklist obtained.
                2. A self-check completed with gaps listed and owners named.
                3. An evidence folder ready: licences, registrations, policies, logs and audits.
                4. Staff briefed on the visit and who will speak to the inspector.
                5. An action plan for any findings completed within the time given.

                ## Notes
                Start from the **Operational checklist** template for the self-check. Logs kept every day are the best evidence, which is why the fridge, trolley and results routines come first.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is completed with an evidence folder ready and every finding closed within the time the inspector set."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Download the inspector's current standards for clinics"
                - "Walk the clinic with the checklist and list every gap"
                - "Build the evidence folder from the licence register and daily logs"
                - "Brief staff on the day and who speaks to the inspector"
            - name: Annual flu vaccination season
              description: |-
                ## Purpose
                Flu season brings a burst of demand, a large vaccine order placed months ahead, cold chain pressure and, for many clinics, a useful income. Planning the order from last year's uptake, booking dedicated vaccination sessions, inviting eligible patients and recording every dose cleanly makes the season profitable and safe. A short review at the end sets next year's order.

                ## Milestones
                1. Last season's doses given and wasted counted.
                2. This season's order placed by the supplier's deadline.
                3. Dedicated vaccination sessions on the roster and eligible patients invited.
                4. Every dose recorded and reported as the programme requires.
                5. End-of-season review with next year's order quantity.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The season's vaccines are ordered on time, given in dedicated sessions, fully recorded, and an end-of-season review sets next year's order."
                cadence: cyclic
              tasks:
                - "Count last season's doses given and wasted"
                - "Start flu season planning and place the vaccine order @recurring(yearly)"
                - "Book dedicated vaccination sessions into the roster"
                - "Write the end-of-season review with next year's quantity"
            - name: Annual appraisal round for clinical staff
              description: |-
                ## Purpose
                Doctors and nurses often need appraisal evidence for their own revalidation or licence renewal, and the clinic benefits from a yearly conversation about workload, training, ambitions and concerns. Running the round in the same month each year, with a short form and time protected in the roster, turns it from a chore into the main tool for keeping good clinicians. Support staff deserve the same, in a shorter form.

                ## Milestones
                1. A short appraisal form for clinicians and one for support staff.
                2. Appraisal sessions booked into the roster for every staff member.
                3. Training needs collected into one list with costs.
                4. Each appraisal summary signed and filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: event-completion
                success_criteria: "Every staff member has a signed appraisal summary for the year and training needs are collected into one costed list."
                cadence: cyclic
              tasks:
                - "Draft a one-page appraisal form for clinicians and one for support staff"
                - "Book the yearly appraisal round into the roster @recurring(yearly)"
                - "Collect training requests into one costed list"
                - "File each signed appraisal summary in the staff record"
            - name: Medical emergency and evacuation drills
              description: |-
                ## Purpose
                Staff who have never practised a collapse in the waiting room lose minutes finding the defibrillator, calling the ambulance and clearing space. A short scenario each quarter with whoever is on shift, rotating between cardiac arrest, anaphylaxis, a fainting patient and a fire evacuation, builds the habit cheaply. Each drill ends with two minutes on what to change.

                ## Milestones
                1. Four drill scenarios written, one for each quarter.
                2. Roles for a medical emergency agreed: leader, compressions, defibrillator, phone, crowd.
                3. A drill run each quarter with learning points recorded.
                4. At least one change made from a drill.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Four quarterly drills have been run with learning points recorded, and at least one change has been made from them."
                cadence: cyclic
              tasks:
                - "Write four short drill scenarios with the clinical lead"
                - "Agree and post the emergency roles at reception"
                - "Run a medical emergency scenario with whoever is on shift @recurring(quarterly)"
                - "Record two learning points after each drill"
            - name: Annual clinic business plan and budget
              description: |-
                ## Purpose
                Without an annual plan, a clinic drifts from roster to roster. Half a day each year to review the last twelve months, set three priorities, budget income and costs by month and agree any big spend such as a new doctor, a refit or new equipment gives the whole team direction. The monthly numbers meeting then tracks the year against it.

                ## Milestones
                1. Last year reviewed against its plan, with what worked and what did not.
                2. Three priorities chosen for the coming year.
                3. A monthly budget of income and costs agreed with your accountant.
                4. Major spending decisions listed with timing.
                5. The plan shared with the practice manager and senior clinicians.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A written annual plan with three priorities and a monthly budget has been agreed with the accountant and shared with senior staff."
                cadence: cyclic
              tasks:
                - "Block half a day for the annual planning session @recurring(yearly)"
                - "Gather last year's monthly figures from the metrics log"
                - "Choose the three priorities for the coming year"
                - "Agree the monthly budget with your accountant"
            - name: First 90 days after opening a new clinic
              description: |-
                ## Purpose
                The first three months of a new clinic decide its reputation, its cash and its habits. The founder-doctor is usually seeing patients, fixing the booking system and chasing the first insurer payments at once. A plan for the first 90 days with weekly targets for new patients, cash in the bank and systems switched on stops the urgent pushing out the important.

                ## Milestones
                1. Weekly targets set for new patient registrations, appointments and cash collected.
                2. Every core system live: booking, records, billing, results, recall.
                3. First insurer and employer payments received and reconciled.
                4. A review at day 90 with changes for the next quarter.

                ## Notes
                Keep a cash buffer for at least the first three months, since insurers often pay weeks after the visit. Your accountant can help size it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Weekly targets were tracked for 90 days, every core system is live and a day-90 review with next-quarter changes is written."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Set weekly targets for registrations, appointments and cash"
                - "List the core systems and the date each must be live"
                - "Check each Friday's figures against the weekly targets"
                - "Book a half-day review for day 90"
            - name: Solo doctor-owner covering your own leave
              description: |-
                ## Purpose
                Single-doctor clinics close, or lose patients, every time the doctor is ill, on holiday or at a conference. A cover plan with two or three reliable locums, a handover note, a pre-agreed leave calendar and a written plan for sudden absence lets you take a fortnight off without the clinic suffering. It is also what a lender or buyer will ask about first.

                ## Milestones
                1. Two or three locums who know the clinic, with their registration checked.
                2. A handover note covering systems, protocols, regular patients and who to call.
                3. Your leave for the coming year booked and covered.
                4. A sudden-absence plan telling staff what to do on the first morning.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A handover note and sudden-absence plan exist, and the coming year's leave is booked with named locum cover."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down every date you plan to be away this year"
                - "Ask two local doctors whether they would locum for you"
                - "Write the locum handover note for the clinic"
                - "Leave the sudden-absence plan with the practice manager"
            - name: Owner's return from parental or sick leave
              description: |-
                ## Purpose
                Coming back from parental leave, illness or burnout, an owner usually returns to a backlog, changed rosters and the temptation to work full sessions from day one. A phased return with a set number of sessions, a handover from whoever covered and a clear list of decisions that waited for you protects your health and your clinical safety. Agree the plan before you return, not on the first morning.

                ## Milestones
                1. A phased session plan for the first six weeks back.
                2. A handover meeting with the practice manager and covering doctor.
                3. A list of decisions that waited, each with a date.
                4. A check-in at week six to set the normal session pattern.

                ## Notes
                If the leave was for illness, agree fitness to return with your own doctor or occupational health adviser, separately from any clinic decision.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A six-week phased return plan was agreed before returning and a week-six check-in set the normal session pattern."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Draft the session plan for your first six weeks back"
                - "Book the handover meeting for the week before you return"
                - "Ask the practice manager for the list of waiting decisions"
                - "Put the week-six check-in in the diary"
            - name: First 100 days after taking over a bought clinic
              description: |-
                ## Purpose
                Buying a clinic means inheriting staff, habits, patients and problems that the sale documents did not show. Changing too much in the first month loses staff and patients; changing nothing lets old problems settle in. A 100-day plan of listening, quick fixes and then larger changes keeps both groups through the transition.

                ## Milestones
                1. One-to-one conversations held with every staff member in the first month.
                2. A list of five quick fixes made in the first 30 days.
                3. Patients told about the new owner in a letter or message.
                4. Larger changes planned for after day 60, with reasons shared with staff.
                5. A day-100 review against the operating picture.
              priority: medium
              deadlineOffsetDays: 100
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All staff one-to-ones, five quick fixes and a patient letter were done in the first month, and a day-100 review is written."
                cadence: phased
                effort_hours_estimate: "25"
              tasks:
                - "Book a 30-minute conversation with every staff member"
                - "Write and send the new owner letter to patients"
                - "Pick five quick fixes staff mention most often"
                - "Book the day-100 review against the operating picture"
            - name: Running a clinic as a non-doctor owner
              description: |-
                ## Purpose
                Business owners, nurses and investors increasingly own clinics and employ the doctors. That works when the owner understands where clinical authority sits, what the regulator expects of a named medical director, and which decisions must never be made on cost grounds alone. Getting the arrangement in writing protects the owner, the doctors and the patients.

                ## Milestones
                1. The regulator's rules on non-doctor ownership confirmed for your jurisdiction.
                2. A medical director contract with clear clinical authority and time allowed.
                3. A list of decisions reserved to clinicians.
                4. A monthly meeting between owner and medical director in place.

                ## Notes
                Some countries restrict who may own a medical practice. Confirm with the regulator and a healthcare lawyer before buying or opening.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Regulator rules are confirmed in writing, a medical director contract defines clinical authority, and reserved clinical decisions are listed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the regulator what it requires of non-doctor clinic owners"
                - "List the decisions that must stay with the medical director"
                - "Ask a healthcare lawyer to review the medical director contract"
                - "Set a monthly owner and medical director meeting"
            - name: Chronic disease outcomes for your patient list
              description: |-
                ## Purpose
                Experienced clinic owners measure not just activity but results: what share of patients with diabetes have a recent HbA1c recorded, how many with hypertension are at their agreed target, how many asthma patients had a review this year. Tracking a handful of these indicators every quarter shows where the clinic is genuinely improving health. It is also strong evidence when negotiating with insurers or public programmes.

                ## Milestones
                1. Five or six outcome indicators chosen with the clinical lead.
                2. Searches built so each indicator can be pulled the same way each quarter.
                3. A first quarter's results recorded as the baseline.
                4. One indicator targeted for improvement with a named lead.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A baseline for five or six outcome indicators is recorded and one indicator has a named lead and improvement target."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose five outcome indicators with the clinical lead"
                - "Build a saved search for each indicator"
                - "Record the first quarter's figures as the baseline"
                - "Name a lead for the indicator most worth improving"
            - name: Continuity plan for power, IT and storms
              description: |-
                ## Purpose
                A power cut, a ransomware attack, a flood or a hurricane can close a clinic for days and spoil the vaccine stock in hours. A continuity plan sets out how you will keep caring for patients without the records system, where the backup power comes from, how the fridges are protected, how patients are told and how data is restored. In storm-prone regions the plan also needs a pre-season checklist.

                ## Milestones
                1. The top risks to clinic operations listed with likelihood and impact.
                2. A plan for each: backup power, offline appointment list, fridge protection, data restore.
                3. Backups tested by restoring a sample of records.
                4. Staff contact tree and patient messaging plan written.
                5. A storm or seasonal checklist for clinics in exposed areas.

                ## Notes
                Start from the **Risk register** template. Ask your IT provider to show you a restored backup; an untested backup is not a backup.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A continuity plan covers power, IT, fridges and communications, and a backup restore has been tested successfully."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List the five events most likely to close the clinic"
                - "Ask your IT provider to restore a sample of records from backup"
                - "Write the staff contact tree and patient message templates"
                - "Test the backup power and the offline appointment list @recurring(quarterly)"
            - name: Bidding for a capitation or public programme contract
              description: |-
                ## Purpose
                Insurers and public health programmes sometimes contract clinics to care for a defined group of patients for a fixed amount per person per month, or to deliver a programme such as screening or chronic disease management. These contracts bring steady income but shift risk to the clinic if patients use more care than expected. A bid needs your list profile, cost per consultation and outcome data, and a careful read of the terms.

                ## Milestones
                1. The contract's scope, payment model and reporting duties summarised.
                2. Expected demand and cost modelled from your list profile and cost per consultation.
                3. Risks and exit terms reviewed with your accountant and a lawyer.
                4. A bid submitted or a decision not to bid recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A bid has been submitted, or a recorded decision not to bid exists, based on a cost model and a professional review of the terms."
                cadence: one-shot
                effort_hours_estimate: "20"
              tasks:
                - "Summarise the contract's scope, payment and reporting rules on one page"
                - "Model demand and cost using the list profile and cost per consultation"
                - "Ask your accountant and a lawyer to review the main risks"
                - "Submit the bid or record why you chose not to"
            - name: Hosting medical students and trainee doctors
              description: |-
                ## Purpose
                Becoming a teaching or training clinic brings energy, a recruitment pipeline and sometimes a payment from the university or training body, but it costs consulting room time and supervisor hours. Approval usually requires an accredited supervisor, suitable rooms, patient consent processes and a teaching timetable. Weigh the cost honestly before applying.

                ## Milestones
                1. Requirements of the university or training body obtained.
                2. A supervisor identified and their training or accreditation planned.
                3. Room and session impact on the roster worked out.
                4. Patient consent and notice for student involvement written.
                5. An application submitted or a decision to wait recorded.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "The training body's requirements are met on paper and an application is submitted, or a decision to wait is recorded with reasons."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Contact the local medical school or training body for their requirements"
                - "Ask which doctor in the clinic would supervise and what training they need"
                - "Work out the room and session cost of a student each week"
                - "Write the patient consent notice for student involvement"
---

# Owning a Medical Clinic

This area is for the doctor who owns a clinic or family practice, the founder who has just opened one and the business owner who runs one with a medical director beside them. It starts with foundations (the licence register, the services you offer, the owner's session cap, opening hours, the patient list and emergency readiness), moves through the operating systems that keep a clinic safe and solvent day to day, then the business skills, the bigger decisions about new services, lab partners and dispensing, the dated events of the clinic year, variants for different kinds of owner and finally specialist work on outcomes, contracts and teaching.

What repeats is a short huddle and a cleared results inbox every clinic day, twice-daily fridge temperatures, a weekly stock order, emergency trolley check and referral chase, a monthly roster, recall run, numbers meeting and team meeting, quarterly servicing and drills, and a yearly flu season, appraisal round and business plan. The Operational checklist, Metrics log, Vendor, Risk register and Meeting notes templates pair with the projects that name them. Clinical, employment, tax and regulatory questions go to the right adviser or your regulator; these projects organise the work around them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
