---
id: practice-ownership.owning-a-physiotherapy-clinic
name: Owning a Physiotherapy Clinic
description: "Treatment rooms and equipment, therapist diaries and utilisation, insurer and self-pay billing, referrers kept informed and outcome data you can show, for the physiotherapist who owns the clinic."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-physiotherapy-clinic, small-business, founder, physiotherapy, rehabilitation, outcome-measures, insurer-billing]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - metrics-log
    - purchase-decision
    - onboarding-plan
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Physiotherapy Clinic
          description: "Running a physiotherapy or rehab clinic: treatment rooms and equipment, therapist schedules, insurer and self-pay billing, referral sources and outcome data."
          projects:
            - name: Physiotherapy clinic owner's fact sheet
              description: |-
                ## Purpose
                Insurers, landlords, the bank and your regulator keep asking the same questions: how many rooms, which therapists, which registration numbers, which insurer contracts. One page that answers them saves hours in the first year and becomes the cover sheet for every audit, loan application or eventual sale.

                ## Milestones
                1. A one-page sheet listing treatment rooms, gym or studio space, opening hours and headcount.
                2. Clinic and therapist registration numbers recorded with their renewal months.
                3. Every contract with a value or notice period listed: lease, insurers, software, card terminal, cleaning, servicing.
                4. Key contacts named: accountant, lawyer, insurance broker, equipment engineer and bank manager.

                ## Notes
                Keep it factual and short. Detail belongs in the registers built by the projects that follow.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page clinic fact sheet exists with every registration number, contract and key contact filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the treatment rooms, gym space and opening hours the clinic runs today"
                - "Gather every clinic and therapist registration number in one document"
                - "List each supplier and insurer contract with its renewal date and notice period"
                - "Refresh the fact sheet and its contact list @recurring(yearly)"
            - name: Therapist registration and scope check
              description: |-
                ## Purpose
                Any physiotherapist treating while their registration has lapsed puts patients, the therapist and the clinic's insurer contracts at risk, and some insurers also require a set number of years qualified before they will pay for a therapist's sessions. Checking each person on the regulator's public register, and against each insurer's recognition list, closes both gaps in an afternoon.

                ## Milestones
                1. Every physiotherapist and assistant checked on the public register, with a dated screenshot filed.
                2. Each therapist's recognition status with every insurer the clinic bills confirmed in writing.
                3. Extended scope items such as acupuncture, injection or prescribing listed per person with the evidence held.
                4. A rule agreed that nobody treats or bills an insurer until both checks are complete.

                ## Notes
                Rules differ by country and by insurer. Ask your regulator and each insurer what they require rather than relying on what the last clinic did.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every therapist has a verified registration and insurer recognition status recorded in one table dated this month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Look up each therapist on the regulator's public register and save the result"
                - "Ask each insurer for its list of recognised therapists at the clinic"
                - "Record extended scope training and certificates for each therapist"
                - "Recheck registrations and insurer recognition for the whole team @recurring(yearly)"
            - name: Treatment room and equipment register
              description: |-
                ## Purpose
                Plinths, electrotherapy units, shockwave machines, ultrasound imaging, gym racks and the hydraulic couch in room three all have purchase dates, warranties and service intervals that nobody remembers until something breaks mid-session. A single register of every room and item is what the insurer, the accountant and the engineer all ask for.

                ## Milestones
                1. Every treatment room listed with its size, couch type, and what it can and cannot be used for.
                2. Each powered item recorded with serial number, purchase date, warranty end and last service.
                3. Gym and class equipment listed with its condition and a replacement year.
                4. The register filed where every therapist can report a fault against it.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every room and every powered or load-bearing item with serial, warranty and last service date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Walk each room and photograph the serial plate of every powered item"
                - "Enter purchase dates and warranty ends from invoices into the register"
                - "Note the condition and likely replacement year of gym and class kit"
                - "Add a simple fault report line therapists can fill in on the day"
            - name: Clinic numbers baseline
              description: |-
                ## Purpose
                Most clinic owners know their monthly takings but not the four numbers that drive them: new patients per week, average sessions per episode, diary utilisation per therapist and the did-not-attend rate. Pulling three months of these from the booking system gives a baseline every later change can be measured against.

                ## Milestones
                1. New patients per week for the last three months, split by referral source.
                2. Average sessions per completed episode of care, per therapist.
                3. Booked hours as a share of available hours for each therapist.
                4. Did-not-attend and late cancellation rates for the same period.

                ## Notes
                Pull the figures from the system, not from memory. If the system cannot report one, count a sample of two weeks by hand.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page baseline shows new patients, sessions per episode, utilisation and did-not-attend rate for the last three months."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export three months of appointments from the booking system"
                - "Count new patients per week and tag each by referral source"
                - "Work out sessions per completed episode for each therapist"
                - "Calculate utilisation and did-not-attend rate per therapist"
            - name: Payer mix and insurer contract list
              description: |-
                ## Purpose
                Self-pay patients, private insurers, accident and injury schemes, employer contracts and any public health contracts all pay different rates on different terms, and a clinic can be busy while losing money on its biggest payer. Listing each payer with its rate, session limits and payment days shows where the income really comes from.

                ## Milestones
                1. Every payer listed with its fee per initial and follow-up session.
                2. Each insurer's authorisation rules, session caps and report requirements summarised in one line.
                3. Average days from treatment to payment calculated for each payer.
                4. Share of income and share of diary hours worked out for each payer.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A table shows each payer's rates, rules, days to payment and share of income and diary hours."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the current contract or fee letter for every insurer you bill"
                - "Record each payer's initial and follow-up session fees"
                - "Pull days to payment for each payer from the last six months"
                - "Compare each payer's share of income with its share of diary hours"
            - name: Referral source map
              description: |-
                ## Purpose
                New patients arrive from family doctors, orthopaedic surgeons, sports clubs, gyms, employers, insurers and word of mouth, and most clinics depend on three or four names without knowing it. Mapping where the last hundred new patients came from shows which relationships to protect and which have quietly gone cold.

                ## Milestones
                1. The last hundred new patients tagged by referral source.
                2. The top ten individual referrers named, with numbers for this year and last.
                3. Referrers who sent patients last year but none this year listed.
                4. A referral source field made compulsory at booking from now on.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A ranked list of referral sources for the last hundred new patients, with lapsed referrers named."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Make referral source a required field on the new patient booking form"
                - "Tag the last hundred new patients with where they came from"
                - "Rank individual referrers by patients sent this year and last"
                - "List the referrers who have gone quiet in the last twelve months"
            - name: Choosing the clinic's outcome measures
              description: |-
                ## Purpose
                Insurers, surgeons and employers increasingly ask what happens to patients, and a clinic that cannot answer looks the same as every other. Agreeing a short set of validated patient-reported measures by body region, plus a pain and function score for everyone, gives every therapist the same tools and makes the data comparable.

                ## Milestones
                1. One validated measure chosen for each common region: spine, shoulder, knee, hip, ankle.
                2. A general function or pain score chosen for every patient.
                3. The points at which each measure is taken agreed: first session, a review point and discharge.
                4. Each measure built into the notes system or the intake form.

                ## Notes
                Choose measures that are validated, short and free or properly licensed. Ask what your main insurers and referrers already recognise before picking.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written list of the clinic's outcome measures by region and collection point is agreed and built into the intake process."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the main insurers and referrers which outcome measures they recognise"
                - "Shortlist one validated measure for each common body region"
                - "Agree with the team when each measure is taken in an episode"
                - "Add the chosen measures to the intake form and discharge template"
            - name: Clinic insurance cover check
              description: |-
                ## Purpose
                Beyond each therapist's own professional cover, a physiotherapy clinic needs public liability for the gym and classes, employer's liability, contents and equipment cover, business interruption if the building floods, and cyber cover for patient data. Laying every policy on one page shows the gaps before a claim does.

                ## Milestones
                1. Every policy listed with insurer, limit, excess and renewal date.
                2. Each therapist's own professional cover confirmed, including self-employed therapists renting rooms.
                3. Classes, sports pitch-side work and home visits confirmed as covered, or the gap recorded.
                4. Questions for the broker written down and answered in writing.

                ## Notes
                Self-employed therapists are a common gap: ask whether your policy covers a claim that names the clinic for their treatment.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page insurance schedule lists every policy, every therapist's own cover and any gap confirmed in writing by the broker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect every current policy schedule into one folder"
                - "Ask each self-employed therapist for a copy of their cover certificate"
                - "Send the broker a list of activities to confirm, including classes and home visits"
                - "Review the schedule with the broker a month before renewal @recurring(yearly)"
            - name: Therapist engagement and pay model review
              description: |-
                ## Purpose
                Physiotherapy clinics engage therapists as salaried employees, self-employed associates on a percentage split, or room renters paying a fixed fee, often with all three in one building. Each model shifts risk, control and tax status differently, and getting status wrong can bring back-tax bills, so the current arrangements deserve a deliberate look.

                ## Milestones
                1. Every therapist's current model, pay basis and contract date listed.
                2. Clinic margin per hour worked out for each model at current fees.
                3. Questions on employment status and tax written down for the accountant or lawyer.
                4. A decision recorded on which model the clinic offers from now on.

                ## Notes
                Employment status rules are set by the tax authority and labour law in your country. Take advice before relabelling anyone as self-employed.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on the clinic's therapist engagement model, with margin per hour for each option and professional advice noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each therapist's engagement model, pay basis and contract date"
                - "Work out clinic margin per treatment hour under each model"
                - "Book a review of employment status questions with the accountant or lawyer"
                - "Record the model the clinic will offer to new therapists"
            - name: Patient path from enquiry to discharge
              description: |-
                ## Purpose
                Patients judge a clinic on the phone call, the booking confirmation, the waiting area and whether anyone checks on them after discharge as much as on the treatment. Walking that path step by step, with who owns each step, shows where people drop out between the first visit and the end of their plan.

                ## Milestones
                1. Each step from first enquiry to discharge written down with the person responsible.
                2. The messages a patient receives listed with their timing and wording.
                3. The points where patients most often stop coming identified from the diary.
                4. Three changes chosen and given an owner.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written map of the patient path with owners for each step and three agreed changes, each with a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Phone the clinic as a new patient and note every step"
                - "Write down each message and reminder a patient receives"
                - "Find the session number where most patients stop booking"
                - "Agree three changes with reception and the therapists"
            - name: Daily clinic opening and closing checklist
              description: |-
                ## Purpose
                One plinth left at the wrong height, a dead electrotherapy battery or an unlocked notes cabinet costs a session or a complaint. A short checklist for opening and closing, run by whoever is first in and last out, keeps rooms ready and the building secure without the owner checking everything personally.

                ## Milestones
                1. One opening and one closing checklist written, each fitting on a single page.
                2. Room readiness, couch function, linen, hand hygiene stock and gym floor safety covered.
                3. Closing steps for cash, card terminal, notes and alarms covered.
                4. A named person responsible each day on the rota.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opening and closing checklists are signed off on every working day for a month with any faults logged."
                cadence: rolling
              tasks:
                - "Write the opening and closing steps on one page each"
                - "Put the checklist owner for each day on the rota"
                - "Run and sign the opening and closing checklist @recurring(daily)"
                - "Review missed items and faults at the monthly team meeting"
            - name: Weekly diary utilisation and gap filling
              description: |-
                ## Purpose
                An empty forty-five minute slot is income the clinic never gets back, and most gaps are visible days in advance. Looking at next week's diary every Monday, per therapist, and filling gaps from the waiting list and overdue reviews, lifts utilisation more than any marketing spend.

                ## Milestones
                1. A target utilisation agreed for each therapist.
                2. A waiting list and an overdue review list kept by reception.
                3. Next week's gaps reviewed every Monday and offered to listed patients.
                4. Utilisation tracked weekly against the target.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly utilisation for each therapist is recorded for eight consecutive weeks against an agreed target."
                cadence: rolling
              tasks:
                - "Agree a target utilisation for each therapist"
                - "Set up a waiting list that reception can offer gaps from"
                - "Review next week's diary gaps with reception @recurring(weekly:mon)"
                - "Record each therapist's weekly utilisation in the numbers sheet"
            - name: Did-not-attend and late cancellation control
              description: |-
                ## Purpose
                Did-not-attend and late cancellation rates in many clinics run at five to ten percent, and every missed slot is a lost fee and a patient whose plan has stalled. A clear policy, reminders that work and a monthly look at the pattern bring the rate down without making reception feel like debt collectors.

                ## Milestones
                1. A written cancellation policy patients see at booking.
                2. Text or email reminders set at a time that suits the clinic's patients.
                3. A monthly did-not-attend rate per therapist and per day of week.
                4. A follow-up script for patients who miss, focused on rebooking.

                ## Notes
                Check consumer law and insurer terms before charging for missed sessions. Some insurers do not allow it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The monthly did-not-attend rate is recorded for six months and falls below the clinic's agreed target."
                cadence: rolling
              tasks:
                - "Write a cancellation policy and add it to the booking confirmation"
                - "Set appointment reminders in the booking system"
                - "Give reception a short rebooking script for missed sessions"
                - "Review last month's did-not-attend rate by therapist and day @recurring(monthly:4)"
            - name: Weekly insurer claims and authorisation run
              description: |-
                ## Purpose
                Claims get rejected by insurers for a missing authorisation number, a session beyond the approved count or a report sent late, and each rejection is a fee that may never be paid. A fixed weekly run that checks authorisations, submits claims and chases rejections keeps insurer income flowing and debtor days short.

                ## Milestones
                1. Every insured patient's authorisation number and approved session count visible in the diary.
                2. Claims submitted weekly for all completed insured sessions.
                3. Rejected claims logged with the reason and resubmitted or written off.
                4. Requests for further sessions sent before the approved count runs out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Insured sessions are claimed within seven days of treatment and every rejection has a logged outcome for three months running."
                cadence: rolling
              tasks:
                - "Add authorisation number and approved sessions to each insured patient's record"
                - "Submit claims and chase rejections for the week @recurring(weekly:thu)"
                - "List patients within two sessions of their approved limit"
                - "Log every rejection reason in a running sheet"
            - name: Daily takings and package balance reconciliation
              description: |-
                ## Purpose
                Self-pay clinics take card payments, bank transfers, prepaid session packages and class passes, and an unreconciled day becomes a mystery by month-end. Matching the day's diary against payments each evening catches unpaid sessions, wrong package deductions and terminal errors while the patient can still be asked.

                ## Milestones
                1. A short end-of-day reconciliation routine written for reception.
                2. Every attended session matched to a payment, a package deduction or an insurer claim.
                3. Package and class pass balances checked against the sessions used.
                4. Unpaid sessions listed and followed up the next working day.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every working day for a month has a completed reconciliation and no unpaid session older than seven days."
                cadence: rolling
              tasks:
                - "Write a five-step end-of-day reconciliation for reception"
                - "Reconcile the day's sessions against card, cash and package records @recurring(daily)"
                - "Check prepaid package balances against sessions used"
                - "Send a polite payment request for any unpaid session"
            - name: Monthly outcome data review
              description: |-
                ## Purpose
                Outcome measures only earn their place if someone looks at them: how many patients have a first and a discharge score, how much they changed, and which therapists or conditions are outliers. A monthly hour on the data turns forms into evidence for referrers and insurers and into clinical conversations within the team.

                ## Milestones
                1. Completion rate for first and discharge scores tracked monthly.
                2. Average change per body region recorded against the measure's meaningful change threshold.
                3. Outliers by therapist or condition discussed at the clinical meeting.
                4. A one-page outcome summary updated each quarter for referrers.

                ## Notes
                Start from the **Metrics log** template. Low completion of discharge scores is the usual weak point: patients who stop coming never fill them in, so plan a follow-up text.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly outcome reviews are logged, with completion rates and average change by region recorded each time."
                cadence: rolling
              tasks:
                - "Set up an outcomes log with completion rate and change by region"
                - "Review last month's outcome scores and completion rate @recurring(monthly:12)"
                - "Send a discharge score request to patients who stopped booking"
                - "Ask the agent to draft a one-page outcome summary for referrers from the log"
            - name: Monthly clinic numbers review
              description: |-
                ## Purpose
                Income, new patients, sessions per episode, utilisation, did-not-attend rate, debtor days and the wage bill as a share of income tell the owner whether the clinic is healthy far earlier than the year-end accounts. Reviewing the same handful of numbers on the same day each month makes trends obvious.

                ## Milestones
                1. Eight clinic numbers chosen, each with a target.
                2. A one-page sheet filled in monthly from the booking and accounting systems.
                3. Three months of history visible beside the current month.
                4. One action agreed each month from what the numbers show.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly reviews are logged, each with the eight numbers and one agreed action."
                cadence: rolling
              tasks:
                - "Choose the eight numbers and a target for each"
                - "Build the monthly sheet with space for three months of history"
                - "Fill in the numbers and agree one action @recurring(monthly:8)"
                - "Share the month's sheet with the practice manager or partner"
            - name: Referrer letters and discharge summaries
              description: |-
                ## Purpose
                Surgeons and family doctors who refer a patient and never hear back usually stop referring. A short initial findings letter and a discharge summary with the outcome scores, sent within a week, keeps referrers informed and shows the clinic's work in the language they read.

                ## Milestones
                1. Templates written for an initial findings letter and a discharge summary.
                2. Consent to write to the referrer recorded at the first session.
                3. Letters sent within seven days of the first session and of discharge.
                4. A weekly check that no referred patient is waiting for a letter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every referred patient for three months has an initial and a discharge letter sent within seven days, with consent recorded."
                cadence: rolling
              tasks:
                - "Write short templates for the initial findings letter and discharge summary"
                - "Add a consent to contact the referrer question to the intake form"
                - "Check for referred patients still waiting for a letter @recurring(weekly:wed)"
                - "Include outcome scores in every discharge summary"
            - name: Equipment servicing and electrical safety calendar
              description: |-
                ## Purpose
                Electrotherapy and shockwave units need calibration, hydraulic couches need servicing, gym racks and cable machines need inspection, and portable electrical items need periodic safety testing. One calendar for all of it, tied to the equipment register, keeps insurers satisfied and stops a faulty unit treating a patient.

                ## Milestones
                1. Every service, calibration and electrical test interval added to one calendar.
                2. A named engineer or supplier recorded for each item.
                3. Certificates filed against the equipment register after each visit.
                4. Faulty items labelled and withdrawn until repaired.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every powered and load-bearing item has a current service or test certificate filed against the register."
                cadence: cyclic
              tasks:
                - "Add each item's service interval from the manufacturer to the calendar"
                - "Check gym racks, cables and couches for wear @recurring(quarterly)"
                - "Book electrical safety testing and calibration visits @recurring(yearly)"
                - "File each certificate against the equipment register"
            - name: Quarterly clinical notes audit
              description: |-
                ## Purpose
                Insurers, regulators and complaint handlers judge a physiotherapist by the notes: consent, assessment, clinical reasoning, the plan, the exercises given and the outcome. Auditing a sample of each therapist's notes every quarter against a short standard catches drift early and gives every therapist specific feedback.

                ## Milestones
                1. A one-page notes standard agreed with the team.
                2. Five sets of notes per therapist audited each quarter.
                3. Results shared privately with each therapist with one point to improve.
                4. Clinic-wide themes recorded and taken to the clinical meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audits are completed, each covering five sets of notes per therapist with feedback recorded."
                cadence: cyclic
              tasks:
                - "Write a one-page notes standard with the team"
                - "Pick five random sets of notes for each therapist"
                - "Audit the sample and give each therapist one point to improve @recurring(quarterly)"
                - "Record clinic-wide themes for the clinical meeting"
            - name: Clinical supervision and in-service training
              description: |-
                ## Purpose
                Therapists stay when they keep learning, and a clinic of mixed experience needs junior staff supported on complex cases. A monthly in-service session, regular case reviews and a named supervisor for every junior therapist build skill inside the clinic and give everyone evidence for their own continuing education records.

                ## Milestones
                1. A named supervisor for every therapist in their first two years.
                2. A monthly in-service session timetabled for the year with topics and presenters.
                3. Supervision notes kept for each therapist.
                4. Attendance recorded so therapists can use it for their own records.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten in-service sessions held in a year with attendance logged, and every junior therapist has supervision notes each month."
                cadence: rolling
              tasks:
                - "Assign a supervisor to each therapist in their first two years"
                - "Draft a year of in-service topics and presenters with the team"
                - "Run the monthly in-service session and record attendance @recurring(monthly:20)"
                - "Keep a short supervision note after each session"
            - name: Consumables and clinic stock ordering
              description: |-
                ## Purpose
                Running out of couch roll, kinesiology tape, exercise bands, acupuncture needles or ultrasound gel means a poorer session or an expensive emergency purchase. A short stock list with minimum levels and a monthly order day keeps rooms supplied and shows what each treatment really costs.

                ## Milestones
                1. A stock list with minimum levels for each item.
                2. Preferred suppliers and prices recorded.
                3. A monthly stock check and order on a fixed day.
                4. Monthly consumables spend recorded against the number of sessions.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No consumable runs out in six months and monthly spend per session is recorded each month."
                cadence: rolling
              tasks:
                - "List every consumable with a minimum stock level"
                - "Record a preferred supplier and price for each item"
                - "Count stock and place the monthly order @recurring(monthly:25)"
                - "Work out consumables cost per session each quarter"
            - name: Reading the clinic's accounts per treatment hour
              description: |-
                ## Purpose
                Accounts show income and costs for the year, but a physiotherapy owner needs to know what one treatment hour earns after therapist pay, rent per room, software and consumables. Learning to turn the profit and loss into a cost per room hour makes every fee, room and hiring decision clearer.

                ## Milestones
                1. The latest profit and loss walked through line by line with the accountant.
                2. Fixed costs per available room hour calculated.
                3. Contribution per treatment hour worked out for each payer type.
                4. A break-even number of sessions per week written down.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written break-even sessions per week figure and contribution per hour by payer, checked with the accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask the accountant to walk through last year's profit and loss with you"
                - "Split fixed costs by the number of available room hours"
                - "Calculate contribution per hour for self-pay and each insurer"
                - "Write down the weekly sessions needed to break even"
            - name: Learning each insurer's billing rules
              description: |-
                ## Purpose
                Each insurer has its own rules on referral letters, authorisation, maximum sessions, report formats, invoice codes and what happens when a patient's cover runs out. An owner who knows these rules can train reception properly and spot the pattern behind rejected claims instead of fixing them one by one.

                ## Milestones
                1. Each main insurer's provider handbook downloaded and read.
                2. A one-page rule sheet per insurer written for reception.
                3. The patient conversation for when cover ends agreed.
                4. Rule sheets checked against the latest handbook each year.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page billing rule sheet exists for every insurer the clinic bills, dated within the last year."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the provider handbook for each insurer you bill"
                - "Ask the agent to summarise each handbook into a one-page rule sheet"
                - "Check each summary against the handbook and correct it"
                - "Agree the script for telling a patient their cover has run out"
            - name: Session prices and treatment packages
              description: |-
                ## Purpose
                Physiotherapy prices are often set once and copied forward, with an initial assessment, a follow-up, perhaps a longer session and a package that may cost the clinic more than it earns. Setting prices from cost per hour and local comparison, and deciding deliberately whether packages help, protects margin and keeps self-pay patients clear on what they pay.

                ## Milestones
                1. Current prices listed with session length and cost per hour.
                2. Prices of five comparable local clinics recorded.
                3. A decision made on package discounts, with expiry and refund terms written.
                4. The new price list published on the website and at reception.

                ## Notes
                Avoid discounting prepaid packages so deeply that a fully booked therapist earns the clinic less than a single session would.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published price list exists with a written rationale based on cost per hour and local comparison."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List current prices with session lengths"
                - "Check the published prices of five comparable local clinics"
                - "Decide on package terms including expiry and refunds"
                - "Publish the new price list with a date it takes effect"
            - name: Physiotherapy record keeping standards
              description: |-
                ## Purpose
                Good physiotherapy notes record consent to examination and treatment, the subjective and objective findings, red flag screening, the reasoning, the plan, the home exercises given and any change in plan. Learning what your regulator and professional body expect, and writing it into a house standard, protects patients and the clinic.

                ## Milestones
                1. Your regulator's and professional body's record keeping guidance read.
                2. A house notes standard written in plain language.
                3. Notes templates in the system updated to match.
                4. The standard presented to the team at an in-service session.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A house notes standard matching regulator guidance is written, built into templates and presented to the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the regulator's and professional body's record keeping guidance"
                - "Write a one-page house notes standard"
                - "Update the notes templates in the clinic system"
                - "Present the standard at the next in-service session"
            - name: Reception rebooking and plan of care script
              description: |-
                ## Purpose
                Patients often leave after one or two sessions because nobody explained the plan or booked the next visit before they walked out. Training reception to confirm the therapist's plan, book the next sessions at the desk and handle cost questions calmly improves outcomes and keeps the diary full.

                ## Milestones
                1. A short script for confirming the plan and booking at the desk.
                2. Therapists agreeing to state the planned number of sessions in the notes.
                3. Reception practising the script in role play.
                4. Rebooking rate at the desk tracked for two months.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Reception uses a written rebooking script and the desk rebooking rate is recorded for eight weeks."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a short desk script for confirming the plan and booking"
                - "Ask therapists to record planned sessions at the end of each assessment"
                - "Run a thirty-minute role play with reception"
                - "Track the share of patients who rebook at the desk"
            - name: Understanding outcome data and meaningful change
              description: |-
                ## Purpose
                A two-point improvement on one measure can be meaningful while a ten-point change on another is noise. Learning how your chosen measures are scored, what counts as a minimal clinically important difference and why missing discharge scores bias the results lets the owner present outcome data honestly.

                ## Milestones
                1. The scoring method and meaningful change threshold noted for each chosen measure.
                2. The difference between average change and share of patients improving understood and written down.
                3. The effect of missing discharge scores on the clinic's results estimated.
                4. A short guide written for the team on reading the clinic's outcome reports.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team guide lists each measure's scoring and meaningful change threshold and explains missing data bias."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the published scoring guide for each outcome measure you use"
                - "Note the meaningful change threshold for each measure"
                - "Compare results with and without patients missing discharge scores"
                - "Write a one-page guide for the team on reading outcome reports"
            - name: Consent, chaperone and examination policy
              description: |-
                ## Purpose
                Physiotherapy involves undressing, touch and sometimes intimate examination in pelvic health work, and most complaints about therapists start with a patient who felt uninformed. A written policy on consent, explaining the examination, offering a chaperone and recording it all protects patients and therapists alike.

                ## Milestones
                1. A written policy covering consent, undressing, gowns and chaperones.
                2. A patient notice explaining the right to a chaperone and to stop at any time.
                3. A notes field for recording consent and chaperone offers.
                4. Every therapist and receptionist briefed and the briefing recorded.

                ## Notes
                Check your regulator's guidance on consent and intimate examinations and build the policy from it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated policy is in place, patient notices are displayed and every team member's briefing is recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the regulator's guidance on consent and chaperones"
                - "Write the clinic's consent and chaperone policy"
                - "Put a chaperone notice in every treatment room and on the website"
                - "Brief the team and review the policy each year @recurring(yearly)"
            - name: Red flag screening and urgent onward referral protocol
              description: |-
                ## Purpose
                Physiotherapists in direct access clinics are often the first clinician to see a patient whose back pain or headache has a serious cause. A clinic protocol for what to screen at every assessment, how to escalate the same day and who to phone means no therapist, junior or locum, has to work it out under pressure.

                ## Milestones
                1. A screening checklist agreed with the team from current professional guidance.
                2. Same-day and urgent referral routes written down with phone numbers.
                3. A patient safety-netting leaflet chosen for relevant conditions.
                4. Locums and new starters briefed on the protocol before their first patient.

                ## Notes
                Base the checklist on your professional body's current guidance. The protocol is about process and routes, not clinical judgement in individual cases.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written red flag protocol with escalation routes and phone numbers is in every room and every therapist has signed to say they have read it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect your professional body's current red flag guidance"
                - "Write same-day and urgent escalation routes with phone numbers"
                - "Choose a safety-netting leaflet to give patients"
                - "Ask each therapist to sign that they have read the protocol"
            - name: Rehab gym or class studio decision
              description: |-
                ## Purpose
                Many clinics find that patients plateau when treatment stops at the couch, and a rehab gym or studio adds exercise-based care, classes and a reason to stay after discharge. It also costs floor space, equipment and supervision, so the case needs numbers before the lease or the kit.

                ## Milestones
                1. Space options costed, from converting a room to taking extra floor space.
                2. Equipment list and price estimated.
                3. Expected use worked out: supervised rehab sessions, classes and memberships.
                4. A go or no-go decision recorded with payback period.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a rehab gym or studio, with cost, expected income and payback period."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure the space you could convert or rent"
                - "Price an equipment list for supervised rehab and classes"
                - "Estimate weekly use and income from rehab sessions and classes"
                - "Write a go or no-go decision with a payback period"
            - name: Capital equipment business case
              description: |-
                ## Purpose
                Shockwave, diagnostic ultrasound, laser and anti-gravity treadmills are sold with impressive income forecasts, yet many sit unused after the first year. A business case that tests the evidence, the insurer position on paying for it and real patient demand protects the owner from an expensive mistake.

                ## Milestones
                1. The clinical evidence for the proposed uses summarised by a therapist.
                2. Each main insurer's position on paying for the treatment confirmed.
                3. Buy, lease and rental quotes compared over five years.
                4. A decision recorded with the number of sessions per week needed to pay back.

                ## Notes
                Start from the **Purchase decision** template. Ask suppliers for the names of three clinics using the machine and phone them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded buy, lease or no decision with the weekly sessions needed to pay back and each insurer's position noted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask a therapist to summarise the evidence for the proposed uses"
                - "Ask each main insurer whether it pays for the treatment"
                - "Get buy, lease and rental quotes from two suppliers"
                - "Phone three clinics that already use the machine"
            - name: Physiotherapist-led group classes programme
              description: |-
                ## Purpose
                Back classes, clinical Pilates, knee and hip classes and falls prevention groups let one therapist see six to ten people in an hour and give discharged patients a way to keep going. A deliberate programme, with screening, class sizes and pricing, adds income without adding rooms.

                ## Milestones
                1. Two class types chosen from the clinic's most common conditions.
                2. Screening rules, class size and therapist ratio agreed.
                3. Pricing and booking set up as class passes.
                4. Attendance and retention tracked for the first term.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two classes run for a full term with screening records, attendance figures and a decision on continuing."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pick two class types from the clinic's most common conditions"
                - "Agree screening rules and maximum class size"
                - "Set up class pass pricing in the booking system"
                - "Review attendance after the first term"
            - name: Home exercise programme software choice
              description: |-
                ## Purpose
                Paper exercise sheets get lost, and therapists spend time drawing stick figures. A home exercise app with videos, reminders and adherence data improves follow-through, but each option differs on cost per therapist, data storage and how well it links to the notes system.

                ## Milestones
                1. Requirements agreed: video library, custom exercises, adherence data, data storage location.
                2. Three options trialled by two therapists for two weeks.
                3. Data protection terms checked for each option.
                4. A choice recorded and rolled out to the team.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded choice of home exercise software with trial notes and data protection terms checked."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the features the team needs from a home exercise app"
                - "Run a two-week trial of three options with two therapists"
                - "Check where each option stores patient data"
                - "Record the choice and set up accounts for the team"
            - name: Adding a treatment room business case
              description: |-
                ## Purpose
                When therapists are fully booked and new patients wait more than a week, another room looks obvious, but it brings rent, fit-out, a therapist to fill it and months of ramp-up. A business case built on utilisation, wait times and the cost of the room tells you whether the demand is real.

                ## Milestones
                1. Current utilisation and new patient wait time recorded.
                2. Fit-out, rent and equipment costs for the extra room estimated.
                3. A ramp-up plan for filling the room over twelve months.
                4. A go or wait decision recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on an extra room with costs, a twelve-month fill plan and the utilisation it depends on."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Record current utilisation and new patient wait time"
                - "Price fit-out, rent and equipment for one extra room"
                - "Sketch a twelve-month plan to fill the room"
                - "Write a go or wait decision with the trigger numbers"
            - name: Home visits service decision
              description: |-
                ## Purpose
                Older patients, people after joint replacement and those with neurological conditions often cannot travel to the clinic. Home visits meet a real need but carry travel time, lone working risk and different insurance terms, so they need a clear price, a safe system and a limit on how much of the diary they take.

                ## Milestones
                1. Demand estimated from enquiries the clinic has turned away.
                2. A price that covers travel time agreed.
                3. A lone working procedure and insurance confirmation in place.
                4. A decision recorded on whether to offer home visits and how many per week.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on home visits with price, weekly limit, lone working procedure and insurance confirmed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count the home visit enquiries turned away in the last six months"
                - "Set a price that covers travel time and mileage"
                - "Write a lone working check-in procedure"
                - "Confirm with the insurer that home visits are covered"
            - name: Cutting the new patient wait time
              description: |-
                ## Purpose
                A patient in pain who is offered an appointment in ten days will book elsewhere. Measuring the time from enquiry to first appointment and protecting new patient slots in each therapist's diary is usually the fastest way to grow self-pay income.

                ## Milestones
                1. Average days from enquiry to first appointment measured.
                2. Protected new patient slots set in each therapist's week.
                3. Unused protected slots released to follow-ups forty-eight hours ahead.
                4. Wait time measured again after two months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Average wait from enquiry to first appointment is measured before and after, and falls to an agreed target within two months."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure days from enquiry to first appointment for the last month"
                - "Set protected new patient slots in each therapist's diary"
                - "Agree when unused protected slots are released"
                - "Measure the wait time again after eight weeks"
            - name: Annual insurer contract and rate review
              description: |-
                ## Purpose
                Insurer rates for physiotherapy often stay flat for years while wages and rent rise, and many clinics never ask. A yearly review of each insurer's volume, rate, payment speed and admin burden gives the owner the facts to negotiate, or to decide that one contract is no longer worth holding.

                ## Milestones
                1. Volume, income, rate and days to payment summarised for each insurer.
                2. Admin time per insurer estimated from the claims log.
                3. A request for a rate review sent to each insurer with the clinic's outcome data.
                4. A keep, renegotiate or exit decision recorded for each contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each insurer contract has a yearly recorded decision with volume, rate, payment speed and admin time."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Summarise last year's volume, rate and payment speed for each insurer"
                - "Estimate admin time per insurer from the claims log"
                - "Write to each insurer requesting a rate review @recurring(yearly)"
                - "Record a keep, renegotiate or exit decision for each contract"
            - name: Insurer or regulator audit preparation
              description: |-
                ## Purpose
                Recognised clinics get audited by insurers, who sample notes and invoices, and some regulators inspect premises or ask practices for evidence of standards. Preparing a folder of the evidence they ask for, before the letter arrives, turns a stressful week into a routine visit.

                ## Milestones
                1. The audit criteria of each main insurer and the regulator collected.
                2. An evidence folder built: registrations, insurance, policies, equipment certificates, notes audits.
                3. A mock audit of ten patient files against an insurer's criteria.
                4. Gaps fixed and the folder dated.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A dated evidence folder exists and a mock audit of ten files is complete with every gap closed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask each main insurer for its clinic audit criteria"
                - "Build an evidence folder with registrations, policies and certificates"
                - "Run a mock audit of ten patient files"
                - "Fix every gap the mock audit finds"
            - name: Annual clinic team planning day
              description: |-
                ## Purpose
                Therapists see their own diary but rarely the whole clinic's year. A half-day off the diary once a year, with the numbers, outcome data and patient feedback on the table, lets the team agree priorities, training and changes they will actually support.

                ## Milestones
                1. A date chosen and the diary blocked at least two months ahead.
                2. Numbers, outcomes and patient feedback summarised for the day.
                3. Three priorities for the year agreed with owners.
                4. Notes and actions shared within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A planning day is held with three agreed priorities, each with an owner, and notes circulated within seven days."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Choose a date and block the diary two months ahead"
                - "Prepare a summary of the year's numbers and outcomes"
                - "Collect patient feedback themes for discussion"
                - "Circulate the agreed priorities and owners within a week"
            - name: Year-end with the clinic accountant
              description: |-
                ## Purpose
                Year-end goes faster and costs less when the accountant receives reconciled takings, insurer debtor lists, equipment purchases and therapist payments in one go. Preparing the pack and booking a review meeting also gives the owner a chance to ask about drawings, tax payments and equipment allowances.

                ## Milestones
                1. Takings, insurer debtors and package balances reconciled to the year-end date.
                2. Equipment bought or sold in the year listed with invoices.
                3. Payments to self-employed therapists summarised.
                4. A review meeting held and questions answered in writing.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The year-end pack is sent to the accountant and a review meeting has been held with questions answered in writing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask the accountant for their year-end checklist and deadline"
                - "Reconcile insurer debtors and unused package balances"
                - "List equipment bought in the year with invoices"
                - "Book the year-end review meeting"
            - name: Race day or tournament physio cover
              description: |-
                ## Purpose
                Providing physiotherapy at a marathon, a tournament or a school sports day raises the clinic's profile and brings new patients, but it needs agreed scope, insurance, kit and an emergency plan with the event's medical lead. Planning it as a single event avoids an under-equipped tent and a therapist out of their depth.

                ## Milestones
                1. Scope agreed with the organiser and medical lead in writing.
                2. Insurance cover for event work confirmed.
                3. Kit list packed and staff rota set.
                4. Treatments recorded and a debrief held afterwards.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "An event is covered with written scope, confirmed insurance, a completed treatment log and a debrief note."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree scope and the emergency plan with the event's medical lead"
                - "Confirm with the insurer that event work is covered"
                - "Pack the kit list and set the staff rota"
                - "Hold a short debrief and record new patient enquiries"
            - name: First year as a physiotherapy clinic owner
              description: |-
                ## Purpose
                New owners usually keep a full caseload and run the business in the evenings, which works for a few months. A first-year plan with monthly owner reviews, a short list of things to fix in order and a protected admin session each week keeps the clinic growing without the owner burning out.

                ## Milestones
                1. A list of the ten things to fix in the first year, in order.
                2. A protected admin session in the owner's week.
                3. Monthly owner reviews held and recorded.
                4. A written look back at twelve months and a plan for year two.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Twelve monthly owner reviews are recorded and a year-two plan is written by the anniversary of taking over."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the ten things to fix this year, in order"
                - "Block one admin session a week in your own diary"
                - "Hold a short owner review of progress @recurring(monthly:2)"
                - "Write a year-two plan at the twelve-month mark"
            - name: Sole practitioner to team clinic
              description: |-
                ## Purpose
                Moving from treating alone to running a clinic with other therapists changes the owner's job: someone else answers the phone, patients see someone who is not you, and your standards have to be written down. Planning the step deliberately avoids losing the quality patients came for.

                ## Milestones
                1. Assessment, treatment and notes standards written down.
                2. Reception and booking moved off the owner's phone.
                3. A plan for introducing patients to the new therapist.
                4. The owner's own diary reshaped around the new structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written clinical standards, a reception set-up and a patient introduction plan exist before the second therapist starts."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write how you assess, treat and record notes"
                - "Move booking and enquiries to a receptionist or online system"
                - "Plan how to introduce existing patients to the new therapist"
                - "Reshape your own diary for the new structure"
            - name: Hiring the first employed physiotherapist
              description: |-
                ## Purpose
                The first hire changes the clinic's finances: a salaried physiotherapist is a fixed cost from day one, while their diary may take months to fill. Planning the role, the induction and the patient flow before the contract is signed lets the new therapist reach a full caseload in a reasonable time.

                ## Milestones
                1. Role, hours, salary range and caseload targets written.
                2. Registration and references checked before an offer.
                3. An induction plan covering systems, standards and supervision.
                4. A twelve-week ramp-up plan for the new therapist's diary.

                ## Notes
                Start from the **Onboarding plan** template.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A therapist is hired with checks complete, an induction plan followed and utilisation tracked for twelve weeks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the role, hours, salary range and caseload targets"
                - "Check registration and two clinical references before offering"
                - "Prepare an induction plan for the first two weeks"
                - "Track the new therapist's utilisation for twelve weeks"
            - name: Cutting the owner's caseload
              description: |-
                ## Purpose
                An owner treating thirty-five patients a week has no time to look at the numbers, coach the team or build referrer relationships. Reducing your own clinical hours deliberately, while moving patients to other therapists without losing them, frees time for the work only the owner can do.

                ## Milestones
                1. Current clinical and management hours per week recorded.
                2. A target split between clinical and management time agreed.
                3. A plan for handing patients to other therapists.
                4. The new split held for three months.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The owner's weekly clinical hours fall to the agreed target and stay there for three consecutive months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Record your clinical and management hours for two weeks"
                - "Set a target split between clinical and management time"
                - "Plan which patients move to which therapist"
                - "Hold a protected owner admin session @recurring(weekly:fri)"
            - name: Owner absence cover plan
              description: |-
                ## Purpose
                When the owner of a small physiotherapy clinic is ill or injured, patients still need treating, insurers still need claims and therapists still need paying. A written plan naming who does what, with access to systems and bank accounts arranged in advance, keeps the clinic running for a month without you.

                ## Milestones
                1. Clinical cover arranged through a named therapist or locum agency.
                2. A named person with authority for payroll, claims and suppliers.
                3. System and bank access set up for that person.
                4. The plan reviewed with your accountant and insurer.

                ## Notes
                Start from the **Risk register** template. Check whether your business interruption cover includes the owner's own illness.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written absence plan names clinical and business cover, with system and bank access tested by the named person."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Name a therapist or locum agency for clinical cover"
                - "Name a person to handle payroll, claims and suppliers"
                - "Set up their access to the systems and bank"
                - "Ask the insurer whether owner illness is covered"
            - name: Sports club and team physio contracts
              description: |-
                ## Purpose
                Providing physiotherapy to a rugby, football or athletics club brings referrals, but loose arrangements lead to unpaid evenings, unclear liability and therapists working beyond their competence pitch-side. A written contract with scope, fees, training requirements and injury reporting turns goodwill into a sustainable service.

                ## Milestones
                1. A written agreement covering scope, fees, hours and pitch-side requirements.
                2. Therapists' pitch-side emergency training confirmed as current.
                3. An injury log and monthly report format agreed with the club.
                4. Referrals from the club tracked and reviewed at renewal.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A signed club agreement, current pitch-side training for every therapist and twelve monthly injury reports delivered."
                cadence: rolling
              tasks:
                - "Draft a club agreement with scope, fees and hours"
                - "Confirm each therapist's pitch-side emergency training is current"
                - "Send the monthly injury report to the club @recurring(monthly:15)"
                - "Track referrals from the club for the renewal discussion"
            - name: Occupational health and employer contracts
              description: |-
                ## Purpose
                Employers pay physiotherapy clinics for fast access, workplace assessments and return-to-work reports, and these contracts can fill weekday mornings that self-pay patients avoid. They also bring report deadlines, consent issues around sharing information with employers and service levels to meet.

                ## Milestones
                1. A service offer written: appointment speed, reports, workplace visits and price.
                2. A consent form covering what is shared with the employer.
                3. Report templates and turnaround times agreed.
                4. A monthly service report sent to each employer client.

                ## Notes
                Share only what the patient has consented to share. Employers are entitled to fitness for work information, not the full clinical record.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every employer client has a signed agreement, consent forms on file and a monthly service report delivered on time."
                cadence: rolling
              tasks:
                - "Write a one-page employer service offer with prices"
                - "Draft a consent form covering what the employer will see"
                - "Agree report templates and turnaround times"
                - "Send each employer a monthly service report @recurring(monthly:28)"
            - name: Specialist service set-up such as pelvic health or vestibular
              description: |-
                ## Purpose
                Pelvic health, vestibular rehab, hand therapy and neurological rehab attract referrers and patients who struggle to find them elsewhere, but each needs therapists with recognised training, suitable rooms, extra consent steps and different outcome measures. Planning one specialist service properly builds a reputation that general physiotherapy alone rarely does.

                ## Milestones
                1. One specialist service chosen from referrer demand and team interest.
                2. Therapist training and supervision requirements confirmed and funded.
                3. Room, equipment, consent and outcome measure needs met.
                4. The service introduced to referrers with a short information sheet.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A specialist service launches with trained therapists, its own consent and outcome measures, and an information sheet sent to referrers."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask your top referrers which specialist services they struggle to find"
                - "Confirm the training and supervision each specialist role needs"
                - "Set up the room, consent steps and outcome measures"
                - "Send referrers a one-page information sheet about the service"
---

# Owning a Physiotherapy Clinic

This area is for the physiotherapist who owns the clinic as well as treating in it, whether you run two rooms above a gym or a team of eight with a rehab studio. It starts with the foundations (registrations, the room and equipment register, the real numbers, the payer mix, referrers and a chosen set of outcome measures), moves through the daily and weekly machinery of the diary, claims, takings and referrer letters, then the skills an owner needs, decisions on gyms, classes, equipment and rooms, the dated events such as audits and year-end, the situations founders and growing owners face, and finally specialist work with sports clubs, employers and specialist services.

What repeats is the daily opening checklist and takings reconciliation, the weekly diary review, claims run and referrer letters, monthly outcome and numbers reviews, consumables orders and in-service sessions, quarterly equipment and notes audits, and yearly checks on registrations, insurance and insurer contracts. The Operational checklist, Metrics log, Purchase decision, Onboarding plan and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
