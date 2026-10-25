---
id: practice-ownership.owning-a-dental-practice
name: Owning a Dental Practice
description: "Surgeries, equipment and decontamination records, associates and hygienists, treatment plans, fees and lab bills, and the recall system that keeps a dental practice full and inspection-ready."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-dental-practice, small-business, founder, dentistry, infection-control, dental-lab, patient-recalls]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - compliance-control
    - metrics-log
    - vendor
    - purchase-decision
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Dental Practice
          description: "Running a dental practice as owner: surgeries and equipment, associates and hygienists, treatment plans and fees, lab bills, infection control and patient recalls."
          projects:
            - name: Dental practice owner's fact sheet
              description: |-
                ## Purpose
                New owners are asked the same questions again and again by the accountant, the bank, the insurer and the regulator: how many surgeries, which registration numbers, which contracts, who the radiation adviser is. One page holding those facts saves hours in the first year and becomes the cover sheet for every later inspection or sale.

                ## Milestones
                1. A one-page sheet listing surgeries, chairs, X-ray units, staff headcount and opening hours.
                2. Practice, owner and clinician registration numbers recorded with their renewal months.
                3. Every contract with a value or a notice period listed: lease, insurers or plans, lab, waste, software, servicing.
                4. Key contacts named: accountant, lawyer, radiation adviser, equipment engineer and bank manager.

                ## Notes
                Keep the sheet factual and short. Detail lives in the registers built by the projects that follow.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page practice fact sheet exists with every registration number, contract and key contact filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the surgeries, chairs and X-ray units the practice runs today"
                - "Gather every practice and clinician registration number in one place"
                - "List each supplier contract with its renewal date and notice period"
                - "Refresh the fact sheet and its contact list @recurring(yearly)"
            - name: Practice and clinician registration check
              description: |-
                ## Purpose
                Any dentist, hygienist or nurse working while their registration has lapsed exposes the patient, the clinician and the owner, and some regulators also register the practice premises itself. Checking every registration against the public register, rather than trusting a photocopy in the staff file, closes the gap in one afternoon.

                ## Milestones
                1. Each clinician checked against the regulator's public register, with a screenshot or printout dated.
                2. Practice or premises registration confirmed current, if your regulator requires one.
                3. A table of renewal months for every person on the team.
                4. A rule agreed that nobody starts clinical work until their registration is verified.

                ## Notes
                Rules differ by country. Ask your dental regulator which roles must register and whether the practice itself needs a licence.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clinician's registration has been verified on the public register this month and their renewal months are in one table."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each dentist, hygienist and nurse on the regulator's public register"
                - "Confirm whether the practice premises needs its own registration or licence"
                - "Build a table of each person's renewal month and indemnity provider"
                - "Recheck every registration on the public register @recurring(yearly)"
            - name: Surgery equipment and asset register
              description: |-
                ## Purpose
                Chairs, autoclaves, compressors, suction motors, curing lights and handpieces all have serial numbers, service intervals and finance agreements, and owners often discover a missing service record only when an inspector or an engineer asks. A single register makes servicing predictable and shows a buyer or valuer exactly what the practice owns.

                ## Milestones
                1. Every item of clinical equipment listed with make, model, serial number and surgery.
                2. Purchase or lease status and finance end date recorded for each item.
                3. Last service date and the service interval noted for each.
                4. Items past their expected life flagged for the replacement plan.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An equipment register covers every surgery and the decontamination room, with serial numbers, ownership and last service dates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Walk each surgery and write down every powered item and its serial number"
                - "Add the decontamination room, compressor and suction plant to the list"
                - "Match each item to an invoice, lease or finance agreement"
                - "Mark items more than ten years old for a replacement decision"
            - name: Radiation protection file for dental X-ray units
              description: |-
                ## Purpose
                Intraoral X-ray units and any OPG or CBCT machine usually need registration with a radiation authority, an appointed radiation protection adviser, local rules on the wall and periodic quality tests. Building the file now means the next inspection is a matter of handing over a folder, not chasing an engineer for a lost certificate.

                ## Milestones
                1. Each X-ray unit's registration or notification with the radiation authority confirmed.
                2. A radiation protection adviser or equivalent appointed, with their contact recorded.
                3. Local rules written, signed and displayed in each surgery with a unit.
                4. Critical examination and routine quality test reports filed for every unit.
                5. Staff radiography training certificates collected for everyone who takes images.

                ## Notes
                Start from the **Compliance control** template. Your country's radiation authority sets what is required; ask your adviser to confirm the list rather than relying on a colleague's file.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A radiation protection file holds registration, adviser appointment, local rules and current test reports for every X-ray unit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the registration or notification record for each X-ray unit"
                - "Confirm who the practice's radiation protection adviser is"
                - "Collect the latest quality test report for every unit"
                - "Book the X-ray quality assurance tests that are due @recurring(yearly)"
            - name: Associate and hygienist agreement review
              description: |-
                ## Purpose
                Associates and self-employed hygienists are often working on a contract that was never signed, or one inherited from the previous owner that says nothing about lab fee splits, notice or patient lists. Reading every agreement now, with a lawyer where terms are unclear, prevents a dispute the day someone leaves and takes patients with them.

                ## Milestones
                1. A signed agreement on file for every associate, hygienist and therapist.
                2. Pay basis, lab fee split, notice period and restrictive covenant summarised for each.
                3. Gaps or outdated terms listed for discussion with the practice lawyer.
                4. Revised agreements issued and signed where needed.

                ## Notes
                Whether someone is genuinely self-employed or an employee is a legal and tax question. Take advice in your country before changing how anyone is engaged.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every associate and hygienist has a signed, current agreement, and a one-line summary of its key terms sits in the owner's file."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Collect the signed agreement for every associate and hygienist"
                - "Summarise pay basis, lab split, notice and covenants for each person"
                - "Ask the agent to draft a list of questions for the practice lawyer from the summaries"
                - "Book a meeting with the lawyer to review the gaps"
            - name: Active patient base and recall baseline
              description: |-
                ## Purpose
                Owners quote a patient list size, but the number that matters is how many people attended in the last 18 to 24 months and how many are overdue for recall. A baseline taken from the practice software shows whether the list is growing or quietly leaking, and sets the target for every recall and new patient project that follows.

                ## Milestones
                1. Active patients counted using a stated attendance window, such as the last 24 months.
                2. Patients overdue for their examination or hygiene recall counted.
                3. The mix of private, insured, plan and public scheme patients recorded.
                4. New patients per month for the last year charted.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline records active patients, overdue recalls, payment mix and monthly new patients from the practice software."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the active patient report from the practice software"
                - "Run the overdue recall report and note the total"
                - "Split the active list by how each patient pays"
                - "Chart new patients per month for the last twelve months"
            - name: Dental profit and loss by service line
              description: |-
                ## Purpose
                A practice can look profitable overall while hygiene subsidises crowns that lose money after lab and associate costs. Splitting income and direct costs by service line, and showing lab fees and materials as a share of gross, tells you where the margin really is before you change fees or hire.

                ## Milestones
                1. Last year's income split into examinations, hygiene, restorative, prosthetics, implants or cosmetic work.
                2. Associate pay, lab fees and materials allocated to the same lines.
                3. Lab fees and materials each shown as a percentage of gross income.
                4. The two least profitable lines named with a reason.

                ## Notes
                Your accountant can usually export the figures you need. Agree the split method once so next year's numbers compare.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page profit and loss by service line exists for the last full year, with lab and materials percentages stated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask the accountant for last year's income and cost detail by account"
                - "Export treatment income by item code from the practice software"
                - "Allocate associate pay, lab fees and materials to each service line"
                - "Write two sentences on the weakest line and what might change"
            - name: Dental fee list by treatment item
              description: |-
                ## Purpose
                Fee lists drift: an examination priced five years ago, an implant fee copied from a course, a crown fee that no longer covers the lab bill. Rebuilding the list item by item, with chair time and lab cost beside each price, gives the front desk one source of truth and the owner a basis for every future increase.

                ## Milestones
                1. Every treatment item in the software listed with its current fee.
                2. Chair time and any lab or material cost noted against each item.
                3. Items priced below their direct cost flagged.
                4. A clean, dated fee list printed for the front desk and published where the rules require.

                ## Notes
                Some regulators require fees to be displayed or given in writing before treatment. Check what applies to you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated fee list covers every active treatment item, with chair time and direct cost recorded and loss-making items flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the current fee list from the practice software"
                - "Ask each clinician for typical chair time on the twenty most common items"
                - "Add lab and material cost to every item that carries one"
                - "Print the dated fee list for reception and remove old copies"
            - name: Dental practice insurance schedule
              description: |-
                ## Purpose
                Each clinician's indemnity, the premises, equipment breakdown, business interruption, employer's liability and cyber cover are usually bought separately and renewed on different dates. A schedule of who holds what, and what is missing, is the only way to know the practice is covered if an autoclave fails, a pipe bursts or a patient sues.

                ## Milestones
                1. Every policy listed with insurer, cover, limit, excess and renewal date.
                2. Indemnity confirmed for each dentist, hygienist and therapist, including who pays.
                3. Gaps identified, such as no business interruption or no cover for locums.
                4. A broker or insurer asked to quote for each gap.

                ## Notes
                Indemnity terms differ sharply between providers. Ask how claims made after a clinician leaves are handled.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An insurance schedule lists every policy and every clinician's indemnity, with gaps quoted for by a broker."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the current schedule page from every practice policy"
                - "Ask each clinician for proof of their indemnity cover"
                - "List the gaps and send them to a broker for quotes"
                - "Review the schedule a month before the main renewal @recurring(yearly)"
            - name: Daily surgery opening and closing checklist
              description: |-
                ## Purpose
                Most avoidable incidents in a dental surgery start with a missed step at opening or closing: waterlines not flushed, suction not cleaned, the compressor left draining, the emergency kit not checked. A short written checklist for each surgery makes the routine the same whoever is on duty, including locums and new nurses.

                ## Milestones
                1. One opening and one closing checklist written for a standard surgery.
                2. Waterline flushing, suction cleaning, compressor and steriliser steps included in the right order.
                3. Checklists laminated or loaded onto a tablet in every surgery.
                4. Each nurse walked through the checklist once and signed it off.

                ## Notes
                Start from the **Operational checklist** template. Follow each equipment maker's instructions for waterlines and suction rather than a generic routine.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every surgery has an opening and closing checklist in use, with completed sheets kept for at least the last month."
                cadence: rolling
              tasks:
                - "Draft the opening and closing steps with your lead nurse"
                - "Check each step against the waterline and suction makers' instructions"
                - "Put a copy of the checklist in every surgery"
                - "Sign off the day's opening and closing checklists @recurring(daily)"
            - name: Autoclave and washer-disinfector test log
              description: |-
                ## Purpose
                Sterilisers and washer-disinfectors need daily and weekly tests, and an inspector will usually ask to see the printouts or logbook for the last few months. A log kept the same way every day is the clearest evidence that instruments leaving the decontamination room are safe, and it catches a failing machine before it becomes an incident.

                ## Milestones
                1. The daily and weekly tests each machine needs listed from its manual and your national guidance.
                2. A logbook or digital record set up for every steriliser and washer-disinfector.
                3. A named person and a deputy responsible for running and recording the tests.
                4. A written rule for what happens when a test fails, including taking the machine out of use.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every steriliser and washer-disinfector has a complete test log for the last three months, with any failures and actions recorded."
                cadence: rolling
              tasks:
                - "List each steriliser and washer-disinfector and the tests its manual requires"
                - "Set up a test log for each machine in the decontamination room"
                - "Write the steps to follow when a cycle or test fails"
                - "Run and record the daily steriliser test before the first patient @recurring(daily)"
            - name: Infection control audit cycle
              description: |-
                ## Purpose
                Daily routines can slip without anyone noticing: a sharps bin overfilled, a clean and dirty zone blurred, a nurse who never had hand hygiene training. A regular self-audit using your national decontamination guidance, with an action list that is actually closed, keeps standards from sliding between inspections.

                ## Milestones
                1. The audit tool your regulator or national guidance recommends chosen and downloaded.
                2. A first full audit completed with a score and an action list.
                3. Every action given an owner and a date.
                4. The next audit date set, with the previous actions checked first.

                ## Notes
                Many countries publish a free dental infection control audit tool. Use the official one so an inspector recognises it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An infection control audit has been completed in the last six months and every action from it is closed or dated."
                cadence: cyclic
              tasks:
                - "Download the recommended dental infection control audit tool"
                - "Complete the audit with the lead nurse and record the score"
                - "Assign an owner and date to every action"
                - "Spot check hand hygiene and zoning in two surgeries @recurring(quarterly)"
            - name: Weekly recall and hygiene rebooking routine
              description: |-
                ## Purpose
                Recalls are the lifeblood of a dental practice, and every patient who leaves without a next appointment is a patient who may drift away. A weekly routine of rebooking at the chair, sending reminders and phoning the overdue list keeps hygiene diaries full and examination numbers steady.

                ## Milestones
                1. A target rebooking rate set for patients leaving examinations and hygiene visits.
                2. Automated reminders configured for recalls due and overdue.
                3. A weekly overdue list worked by a named person, with outcomes recorded.
                4. The overdue recall count lower than the baseline after three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The overdue recall count has fallen below the baseline and the rebooking rate is reported every month."
                cadence: rolling
              tasks:
                - "Set a target for patients rebooked before leaving the surgery"
                - "Check recall reminders are switched on in the practice software"
                - "Work the overdue recall list by phone and record each outcome @recurring(weekly:tue)"
                - "Report the rebooking rate at the monthly team meeting"
            - name: Monthly dental lab bill reconciliation
              description: |-
                ## Purpose
                Lab invoices are one of the largest costs in a dental practice, and they leak through remakes nobody charged back, cases billed twice and work that was never fitted. Matching every lab invoice to the patient record each month, and agreeing who pays for remakes, protects the margin and keeps associate lab fee splits fair.

                ## Milestones
                1. Every lab invoice for the month matched to a patient and a fitted or pending item.
                2. Remakes identified and charged according to the lab agreement.
                3. Each associate's lab costs totalled for their pay calculation.
                4. Lab costs as a share of gross income recorded for the month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each month's lab invoices are matched to patient records, remakes are resolved and associate lab totals are agreed before pay is run."
                cadence: rolling
              tasks:
                - "Collect last month's statements from every lab the practice uses"
                - "Match each invoice line to a patient record and treatment item"
                - "List remakes and duplicates to raise with the lab"
                - "Reconcile lab invoices and associate lab totals @recurring(monthly:5)"
            - name: Treatment plan follow-up list
              description: |-
                ## Purpose
                Every practice has patients who were given a treatment plan for a crown, bridge or implant and never booked it. A weekly list of plans presented but not started, followed up with a call or letter, turns work already diagnosed into appointments, and shows which clinicians need help explaining options.

                ## Milestones
                1. A report of treatment plans presented but not booked, from the practice software.
                2. A follow-up script agreed for reception or the treatment coordinator.
                3. Each unbooked plan contacted within a set number of days.
                4. Acceptance rate per clinician reported each month.

                ## Notes
                Follow-up is about reminding and answering questions, never pressure. Record what the patient said in their notes.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An unbooked treatment plan list is worked every week and plan acceptance per clinician is reported monthly."
                cadence: rolling
              tasks:
                - "Run the report of treatment plans presented but not booked"
                - "Agree a short, friendly follow-up script with reception"
                - "Work the unbooked treatment plan list @recurring(weekly:fri)"
                - "Share each clinician's acceptance rate with them privately"
            - name: Monthly dental practice numbers review
              description: |-
                ## Purpose
                Owners who look at the accounts once a year find problems too late. A monthly review of a handful of dental figures, such as gross per clinical hour, hygiene share of income, lab and materials percentages, failed appointments and new patients, shows trouble within weeks and keeps decisions grounded in data rather than how busy the week felt.

                ## Milestones
                1. Eight figures chosen, each with a definition and a source report.
                2. Twelve months of history filled in where the software allows.
                3. A monthly review slot fixed in the owner's diary.
                4. One action recorded after each review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log of eight dental figures is updated monthly, with at least one action recorded after each review."
                cadence: rolling
              tasks:
                - "Pick the eight figures you will review and write each definition"
                - "Backfill twelve months of history from the software and accounts"
                - "Update the metrics log and note one action @recurring(monthly:12)"
                - "Share the headline figures at the next team meeting"
            - name: Appointment book and failed appointment control
              description: |-
                ## Purpose
                An empty chair for an hour costs the practice its full overhead and earns nothing. Managing the book deliberately, with a cancellation list, rules for deposits on long appointments and a clear policy for failed appointments, protects chair time without making patients feel punished.

                ## Milestones
                1. Failed and short-notice cancelled appointments counted for the last three months.
                2. A written policy for failed appointments and deposits, shared with patients.
                3. A short-notice list of patients happy to come in at short notice.
                4. Next week's gaps reviewed every Monday and filled where possible.

                ## Notes
                Check what your regulator and any insurer or public scheme allow before charging for missed appointments.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Failed appointments are counted monthly, a written policy is displayed and the rate is lower than the three-month baseline."
                cadence: rolling
              tasks:
                - "Count failed and short-notice cancellations for the last three months"
                - "Draft a failed appointment and deposit policy for patients"
                - "Start a short-notice list at reception"
                - "Review next week's gaps and fill them from the short-notice list @recurring(weekly:mon)"
            - name: Dental materials and stock ordering
              description: |-
                ## Purpose
                Composite, impression materials, local anaesthetic cartridges, gloves and burs are ordered by whoever notices they are low, so the practice pays rush delivery and throws away expired stock. A simple stock list with minimum levels, one ordering day and named suppliers cuts materials cost and stops treatment being cancelled for want of a product.

                ## Milestones
                1. A stock list of regularly used items with minimum levels and suppliers.
                2. One person and one day each month responsible for ordering.
                3. Expiry dates checked and short-dated stock used first.
                4. Materials spend as a share of gross recorded each month.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A stock list with minimum levels is in use, orders go out on a fixed day and no treatment has been cancelled for missing stock in three months."
                cadence: rolling
              tasks:
                - "List the fifty items the surgeries use most with their supplier"
                - "Set a minimum level for each item with the lead nurse"
                - "Check expiry dates in the stock room and move short-dated items forward"
                - "Place the monthly stock order against the minimum levels @recurring(monthly:20)"
            - name: Equipment servicing and pressure systems calendar
              description: |-
                ## Purpose
                Compressors and autoclaves are pressure vessels that often need a written scheme of examination, and chairs, suction and X-ray units fail expensively when servicing is skipped. A calendar built from the asset register, with engineers booked ahead, turns breakdowns into planned visits and keeps the inspection certificates current.

                ## Milestones
                1. Service intervals for every item in the asset register entered in one calendar.
                2. Pressure system examinations booked where your country requires them.
                3. Service contracts compared and the engineer for each item named.
                4. Service reports filed against each asset after every visit.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every item in the asset register has its next service date in the calendar and the last report on file."
                cadence: rolling
              tasks:
                - "Copy each asset's service interval into a servicing calendar"
                - "Ask your insurer or engineer whether pressure vessels need a written scheme"
                - "Book the engineer visits due in the next three months"
                - "File service reports and book visits due next quarter @recurring(quarterly)"
            - name: Clinical waste and amalgam records
              description: |-
                ## Purpose
                Dental waste comes in several streams, including sharps, infectious waste, amalgam, X-ray chemicals where still used and extracted teeth, and each usually needs the right container, a licensed carrier and a transfer note. Keeping the paperwork in order is simple once set up, and missing notes are among the easiest findings for an inspector to make.

                ## Milestones
                1. Each waste stream listed with its container, carrier and collection frequency.
                2. A licensed carrier contract in place, with their licence copy filed.
                3. Amalgam separator servicing and emptying recorded where one is fitted.
                4. Waste transfer or consignment notes filed for the last twelve months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A waste file holds the carrier contract, licence and twelve months of transfer notes, with amalgam separator records where applicable."
                cadence: rolling
              tasks:
                - "List each waste stream the practice produces and its container"
                - "Get a copy of the waste carrier's licence for the file"
                - "Check when the amalgam separator was last serviced"
                - "File this month's waste transfer notes @recurring(monthly:25)"
            - name: Medical emergency kit and team drills
              description: |-
                ## Purpose
                Collapse, anaphylaxis, an asthma attack or a seizure in the chair are rare, but the team must act in seconds, with an in-date kit and oxygen that works. A weekly kit check, a named lead and regular scenario practice make the response automatic rather than improvised.

                ## Milestones
                1. The kit checked against the list your regulator or resuscitation body publishes for dental practices.
                2. Oxygen, the defibrillator and every drug expiry date recorded on a check sheet.
                3. A medical emergency lead and deputy named.
                4. A short scenario drill run with the whole team, with lessons noted.

                ## Notes
                This project organises the kit and practice. The contents and any drug choices come from your national guidance and your clinical training, not from this list.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly kit check sheet is complete for the last two months and a whole-team drill took place within the last six months."
                cadence: rolling
              tasks:
                - "Download your national list of emergency equipment for dental practices"
                - "Name a medical emergency lead and a deputy"
                - "Check oxygen, defibrillator and kit expiry dates and sign the sheet @recurring(weekly:mon)"
                - "Run a ten-minute collapse scenario at the next team meeting"
            - name: Morning huddle and monthly team meeting
              description: |-
                ## Purpose
                Dental teams work in separate surgeries all day and rarely talk until something goes wrong. A five-minute huddle before the first patient, covering emergencies, gaps and difficult appointments, plus a monthly meeting with an agenda and minutes, catches problems early and gives nurses and reception a voice.

                ## Milestones
                1. A huddle routine agreed: time, who leads and the three things it covers.
                2. A monthly team meeting fixed in the diary with protected time.
                3. A standing agenda covering numbers, compliance, patient feedback and training.
                4. Minutes and actions kept for every meeting.

                ## Notes
                Minutes double as evidence of training and governance for inspectors. Keep them dated and filed.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A daily huddle runs before the first patient and the last three monthly team meetings have dated minutes."
                cadence: rolling
              tasks:
                - "Agree the huddle time and its three standing questions with the team"
                - "Block one protected hour each month for a team meeting"
                - "Write a standing agenda for the monthly meeting"
                - "Hold the monthly team meeting and file the minutes @recurring(monthly:3)"
            - name: Dental nurse rota and chairside cover
              description: |-
                ## Purpose
                No dentist or hygienist can work without a nurse beside them, and one nurse off sick can cancel a full day of patients. A rota built around surgery sessions, with trainee nurses supervised, holidays planned months ahead and a short list of bank nurses, keeps every booked session running.

                ## Milestones
                1. Every clinical session for a typical week matched to a named nurse.
                2. Holiday requests for the year collected and checked against the rota.
                3. Trainee nurses paired with a qualified nurse and their supervision recorded.
                4. Two or three bank or agency nurses identified, with registration checked.

                ## Notes
                Cover for the decontamination room counts too. A day without someone processing instruments stops the surgeries just as surely.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A rota names a nurse for every clinical session, holidays are planned for the year and no session was cancelled for lack of a nurse last quarter."
                cadence: rolling
              tasks:
                - "Map next week's clinical sessions against the nurses available"
                - "Collect the team's holiday requests for the next twelve months"
                - "Pair each trainee nurse with a named qualified supervisor"
                - "Find two bank nurses and check their registration"
            - name: Reading dental practice accounts
              description: |-
                ## Purpose
                Many dentists buy a practice without being able to read a balance sheet, and then rely entirely on the accountant to say whether the year was good. Learning the handful of lines that matter in dental accounts, such as associate costs, lab fees, materials, staff costs and owner drawings, lets you ask better questions and spot problems yourself.

                ## Milestones
                1. The last two years of practice accounts read line by line with notes.
                2. Associate, lab, materials and staff costs each worked out as a share of income.
                3. The difference between profit, cash and owner drawings understood and written down.
                4. Five questions taken to the accountant and their answers recorded.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The owner can state the practice's associate, lab, materials and staff cost percentages and has had five questions answered by the accountant."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Print the last two years of practice accounts"
                - "Work out each main cost as a percentage of income"
                - "Write five questions about the accounts for your accountant"
                - "Book an hour with the accountant to go through them"
            - name: Associate pay models compared
              description: |-
                ## Purpose
                Associates are commonly paid a percentage of their gross, net of lab fees, with variations such as minimum guarantees, sliding scales or day rates. Understanding the options and what each costs the practice at different activity levels means your next offer is deliberate rather than whatever the last owner did.

                ## Milestones
                1. The common associate pay models in your market described in plain words.
                2. Each model costed at three activity levels for a typical associate.
                3. How lab fees and materials are shared under each model set out.
                4. A preferred model and the reasons for it written down.

                ## Notes
                Talk to a dental accountant who sees many practices. Local norms vary widely and change.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written comparison costs at least three associate pay models at three activity levels and records the owner's preferred model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a dental accountant which associate pay models are common locally"
                - "Build a small spreadsheet costing each model at three activity levels"
                - "Note how each model treats lab fees and materials"
                - "Write a paragraph on the model you would offer next and why"
            - name: Dental insurers, plans and public schemes
              description: |-
                ## Purpose
                Depending on the country, patients may pay privately, through insurance, through a capitation or membership plan, or through a public dental scheme, each with its own fees, claim rules and audit risk. Mapping which ones the practice takes, and what each really pays per hour of chair time, is the basis for deciding which to keep.

                ## Milestones
                1. Every insurer, plan and public scheme the practice works with listed.
                2. Claim rules, payment times and audit or clawback terms noted for each.
                3. Income per clinical hour estimated for each payer.
                4. One payer flagged for renegotiation or review.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A payer map lists every insurer, plan and scheme with its rules and an estimated income per clinical hour."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every insurer, plan and scheme the practice bills"
                - "Find each payer's current terms, claim rules and payment times"
                - "Estimate income per clinical hour for each payer"
                - "Pick the payer most worth reviewing and note why"
            - name: Treatment options, estimates and consent
              description: |-
                ## Purpose
                Complaints and claims in dentistry often come down to a patient who says they were never told the options, the risks or the cost. A practice-wide standard for written treatment plans and estimates, and for recording consent conversations, protects patients and clinicians and makes acceptance more likely because people understand what they are agreeing to.

                ## Milestones
                1. Your regulator's guidance on consent and written estimates read by every clinician.
                2. A treatment plan and estimate template agreed and set up in the software.
                3. A short standard for what the clinical notes must say about options and consent.
                4. A sample of ten recent plans checked against the standard.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A consent and estimate standard is written, built into the software, and a sample of ten plans has been checked against it."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Circulate the regulator's consent guidance to every clinician"
                - "Agree one treatment plan and estimate template for the practice"
                - "Write a short standard for recording options and consent in notes"
                - "Check ten recent treatment plans against the standard"
            - name: Dental clinical record keeping standards
              description: |-
                ## Purpose
                Good dental notes record the history, the examination, the radiograph justification and report, the options discussed and what was done, and they are the first thing an indemnity provider asks for when a claim arrives. Learning what your regulator and indemnity provider expect, then checking notes against it, raises the standard across every clinician.

                ## Milestones
                1. Record keeping guidance from your regulator and indemnity provider collected.
                2. A one-page practice standard covering history, charting, radiographs and consent.
                3. A first audit of notes from each clinician, with feedback given privately.
                4. A repeat audit showing improvement.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page record keeping standard exists and at least two rounds of notes audits have been completed for every clinician."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download record keeping guidance from the regulator and indemnity provider"
                - "Write a one-page notes standard for the practice"
                - "Audit five sets of notes per clinician and give private feedback"
                - "Audit a sample of clinical notes and radiograph reports @recurring(quarterly)"
            - name: Scope of practice for nurses, hygienists and therapists
              description: |-
                ## Purpose
                What a hygienist, therapist or dental nurse with extra training may do differs by country, and some can see patients directly without a dentist's prescription. Knowing the exact scope lets you plan the team so dentists spend their hours on work only they can do, without anyone working outside what they are allowed.

                ## Milestones
                1. Your regulator's scope of practice for each dental role read and summarised.
                2. Each team member's extra qualifications recorded, such as radiography or impressions.
                3. Work currently done by dentists that others could do within scope listed.
                4. Any change to who does what agreed with the clinicians involved.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A summary of each role's scope and each person's extra qualifications is on file, with any agreed changes to tasks recorded."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Download your regulator's scope of practice for each dental role"
                - "Record each team member's extra qualifications and certificates"
                - "List tasks dentists do now that others could do within scope"
                - "Discuss the list with the clinicians before changing anything"
            - name: In-house dental membership plan decision
              description: |-
                ## Purpose
                Monthly membership plans, where patients pay a fixed amount for examinations, hygiene visits and a discount on treatment, smooth income and improve recall attendance, but they change how patients see fees and need careful administration. Modelling it before launching avoids a plan priced so low that the busiest members lose the practice money.

                ## Milestones
                1. The plan's contents, monthly price and discount set out in a single paragraph.
                2. Income and chair time modelled for 200, 500 and 1,000 members.
                3. Run-it-yourself and plan-provider options compared on cost and admin.
                4. Rules checked with your regulator and any financial services rules on collecting payments.
                5. A decision to launch, change or drop the idea recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on a membership plan is recorded, supported by a model at three membership levels."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write what a member would get for their monthly payment"
                - "Model income and chair time at three membership levels"
                - "Get terms from two dental plan providers"
                - "Record the decision and the reasons in the owner's file"
            - name: Choosing and reviewing dental laboratories
              description: |-
                ## Purpose
                Most practices use whichever labs the previous owner chose, without comparing turnaround, remake rates or price. Reviewing each lab against the same criteria, and agreeing written terms on remakes and delivery, improves fits, shortens appointments and often lowers the largest variable cost in the practice.

                ## Milestones
                1. Every lab the practice uses listed with the work it does and annual spend.
                2. Remake rate, turnaround and clinician satisfaction recorded for each.
                3. Prices compared with at least one alternative lab for crowns and dentures.
                4. Written terms agreed with each lab you keep, including remakes and delivery.

                ## Notes
                Start from the **Vendor** template. Check each lab's registration or certification where your country requires it for custom-made devices.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each lab has a vendor record with spend, remake rate and turnaround, and written terms are agreed with every lab kept."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total last year's spend with each lab"
                - "Ask each clinician to rate the labs they use"
                - "Request a price list from one alternative lab"
                - "Agree written remake and delivery terms with the labs you keep"
            - name: Intraoral scanner and digital workflow decision
              description: |-
                ## Purpose
                An intraoral scanner can cut impression material costs, reduce remakes and speed up lab turnaround, but it is a large outlay and only pays back if clinicians actually use it. A structured decision, with a trial in the surgery and the labs' views, separates a useful tool from an expensive ornament.

                ## Milestones
                1. Current impression volume, material cost and remake rate measured.
                2. Two or three scanners shortlisted with purchase, subscription and support costs.
                3. A trial in the surgery completed by each clinician who would use it.
                4. Labs confirmed as able to receive scans from the chosen system.
                5. A buy, lease or wait decision recorded with a payback estimate.

                ## Notes
                Start from the **Purchase decision** template. Watch for annual software fees that continue after the purchase.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded scanner decision includes a trial by every intended user, lab compatibility and a payback estimate."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Count last year's impressions and their material cost"
                - "Shortlist three scanners and get full cost quotes including software"
                - "Arrange a surgery trial for each clinician who would use one"
                - "Ask your labs which scanner files they accept"
            - name: Imaging upgrade to sensors, OPG or CBCT
              description: |-
                ## Purpose
                Moving from film or phosphor plates to sensors, or adding an OPG or CBCT unit, changes radiation protection duties, room layout, staff training and referral income. Working through those consequences before buying stops a new machine sitting idle while the shielding report or training is sorted out.

                ## Milestones
                1. Current imaging volume and outside referrals for OPG or CBCT counted.
                2. Equipment options costed, including installation, shielding and software.
                3. Radiation adviser consulted on registration, room and training changes.
                4. A decision recorded with the go-live steps if you proceed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An imaging decision is recorded with costs, radiation adviser input and, if proceeding, a dated go-live plan."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Count how many patients you refer out for OPG or CBCT each month"
                - "Get quotes that include installation, shielding and software"
                - "Ask the radiation adviser what would change if you install the unit"
                - "Write the decision and next steps in the owner's file"
            - name: Adding a surgery business case
              description: |-
                ## Purpose
                A practice with a waiting list and a hygiene diary booked weeks ahead may be ready for another surgery, but the cost includes plumbing, suction, compressed air, a chair, an X-ray unit, a nurse and another clinician. A business case with real quotes and a break-even point answers whether the extra chair will be busy enough to pay for itself.

                ## Milestones
                1. Evidence of unmet demand gathered: waiting times, turned-away new patients, full hygiene diaries.
                2. Fit-out quotes for the room, services and equipment.
                3. Staffing for the new surgery planned and costed.
                4. A break-even month estimated and the decision recorded.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written business case with fit-out quotes, staffing costs and a break-even month supports a recorded go or no-go decision."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Record current waiting times for examinations and hygiene"
                - "Ask a dental fit-out company to survey the space for services"
                - "Cost the nurse and clinician hours the new surgery needs"
                - "Ask the agent to draft the business case from your figures"
            - name: Growing the hygiene department
              description: |-
                ## Purpose
                Hygiene is often the most reliable income in a dental practice and the main route by which patients return, yet many practices have one hygienist for a list that could support three. Measuring demand and adding hygiene days in steps grows income, frees dentist time and improves gum health across the list.

                ## Milestones
                1. Hygiene waiting time and the share of active patients seen by a hygienist measured.
                2. The income and cost of an extra hygiene day calculated.
                3. Surgery availability for extra sessions confirmed.
                4. A first extra session added and its diary filled within eight weeks.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least one additional hygiene session runs each week and its diary is at least 85 percent booked after eight weeks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure the current wait for a hygiene appointment"
                - "Calculate what one extra hygiene day earns and costs"
                - "Find a surgery that is free for one more session each week"
                - "Advertise the extra hygiene session to the overdue recall list"
            - name: Annual dental fee review
              description: |-
                ## Purpose
                Lab fees, materials, wages and rent rise every year, and a practice that leaves fees alone for three years then faces a large jump that upsets patients. An annual review, comparing direct costs and local fees and giving notice in writing, keeps increases small and predictable.

                ## Milestones
                1. Cost increases for lab, materials, wages and rent over the year totalled.
                2. Fees for the twenty most common items compared with three local practices where public.
                3. A proposed increase per item agreed by the owners.
                4. Patients and plan members given notice and the software updated on the effective date.

                ## Notes
                Fees set by insurers or public schemes are outside your control. This review covers the fees you set yourself.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A fee review is completed each year with the decision recorded, notice given and the new fees live in the software."
                cadence: cyclic
              tasks:
                - "Total this year's increases in lab, materials, wage and rent costs"
                - "Compare your twenty most common fees with local published fees"
                - "Agree the new fees and the date they take effect"
                - "Run the annual fee review with the owners @recurring(yearly)"
            - name: Specialist referral pathways for dental patients
              description: |-
                ## Purpose
                Patients needing orthodontics, endodontics, oral surgery or periodontal treatment are referred out, and a slow or unclear referral reflects on the practice that sent them. Choosing preferred specialists, agreeing how referrals are sent and how reports come back, and tracking outcomes keeps patients safe and makes the practice a referrer specialists value.

                ## Milestones
                1. Current referrals counted by specialty for the last year.
                2. A preferred specialist or clinic named for each specialty, with contact details.
                3. A referral template and the information each specialist needs agreed.
                4. A log tracking each referral until the report is received.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Preferred specialists are named for each specialty and every referral in the last quarter is logged through to a returned report."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count last year's referrals by specialty"
                - "Ask each clinician which specialists they trust and why"
                - "Agree a referral template with each preferred specialist"
                - "Start a referral log that tracks reports coming back"
            - name: Dental regulator inspection preparation
              description: |-
                ## Purpose
                An inspection by the dental regulator or health authority can come with little notice, and inspectors look for evidence across decontamination, radiography, medical emergencies, records, staff training and complaints. Preparing as if the visit were booked turns scattered folders into a single evidence pack the team can find in minutes.

                ## Milestones
                1. The regulator's current inspection standards or framework downloaded and read.
                2. An evidence index linking each standard to a folder or report.
                3. A mock inspection walk-round completed by someone outside the daily team.
                4. Every gap from the mock inspection closed or given a dated action.

                ## Notes
                Start from the **Risk register** template to hold any gaps you cannot close quickly.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence index covers every inspection standard and the gaps from a mock inspection are closed or dated."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Download the regulator's current inspection standards"
                - "Build an evidence index linking each standard to its folder"
                - "Ask a fellow owner or consultant to run a mock walk-round"
                - "Close or date every gap the mock inspection found"
            - name: Annual dental team training day
              description: |-
                ## Purpose
                Several training requirements in a dental practice recur, such as medical emergencies and life support, infection control, radiography updates and safeguarding, and arranging them one by one wastes chair time. Closing the practice for one planned training day a year covers most of them together and gives the team a shared reset.

                ## Milestones
                1. Training that falls due in the next year listed for each team member.
                2. A date chosen and patients moved well in advance.
                3. Trainers booked for life support and any other sessions run on site.
                4. Certificates collected and added to each person's training record.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A training day is held each year and every attendee's certificates are filed within two weeks of it."
                cadence: cyclic
              tasks:
                - "List each team member's training that falls due in the next year"
                - "Choose the training day and block it in the appointment book"
                - "Book a life support trainer for the day"
                - "Plan the next practice training day @recurring(yearly)"
            - name: Year-end with the dental accountant
              description: |-
                ## Purpose
                The year-end is when associate pay, lab fees, equipment purchases and the owner's own tax position are settled, and a rushed meeting means missed allowances and surprises in the tax bill. Preparing the papers early and agreeing questions in advance makes the meeting useful rather than a signature exercise.

                ## Milestones
                1. Associate and hygienist pay reconciled to their statements for the year.
                2. Equipment purchases and finance agreements listed for the accountant.
                3. Questions on drawings, tax payments and next year's plans written in advance.
                4. Draft accounts reviewed and any corrections agreed before signing.

                ## Notes
                Tax treatment of equipment and owner pay is for your accountant to advise on. Your job is to bring complete, organised records.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The year-end meeting takes place with reconciled associate pay, an equipment list and written questions, and draft accounts are reviewed before signing."
                cadence: cyclic
              tasks:
                - "Reconcile each associate's pay statements for the year"
                - "List equipment bought or financed during the year"
                - "Write your questions for the accountant a week before the meeting"
                - "Book the year-end meeting with the accountant @recurring(yearly)"
            - name: Practice closure and continuity plan
              description: |-
                ## Purpose
                A flood, a power cut, a broken compressor, a hurricane or a pandemic can close a dental practice for days or weeks, and patients in pain still need care. A written plan for emergencies, temporary arrangements with a nearby practice and how to contact patients means the practice reopens faster and keeps its patients.

                ## Milestones
                1. The main threats listed with their likely impact on surgeries and income.
                2. A reciprocal arrangement with a nearby practice for emergency patients.
                3. Patient contact lists and records backed up and reachable off site.
                4. A one-page action plan shared with the team and tested once.

                ## Notes
                Start from the **Risk register** template. In hurricane regions, add a pre-season check of shutters, generator and record backups.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page continuity plan exists, a reciprocal emergency arrangement is agreed and a tabletop test has been run."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the events most likely to close the practice"
                - "Ask a nearby practice to agree emergency cover for each other"
                - "Confirm the patient records backup can be reached from off site"
                - "Run a thirty-minute tabletop test with the team"
            - name: First year as a dental practice owner
              description: |-
                ## Purpose
                The first twelve months after buying or opening a practice bring a flood of new jobs: payroll, suppliers, staff questions, compliance and your own clinical diary. A phased plan for the year, quarter by quarter, keeps the essentials in order and stops the owner trying to change everything in the first month.

                ## Milestones
                1. A 90-day plan focused on registrations, compliance files and getting to know the team.
                2. Months four to six used to fix the numbers: fees, labs, recalls and the book.
                3. Months seven to nine used for one improvement, such as hygiene growth or a scanner.
                4. A twelve-month review written with lessons and next year's three priorities.

                ## Notes
                Resist changing the team or the fees in the first few weeks. Listen first, then change one thing at a time.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written first-year review is completed within twelve months of ownership, with lessons and three priorities for the next year."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write the three things you must have in place in the first 90 days"
                - "Meet every team member one to one in your first month"
                - "Pick one improvement for months seven to nine"
                - "Book a half day at month twelve to write the first-year review"
            - name: Building the list in a new squat practice
              description: |-
                ## Purpose
                Squat practices open with no patients, a full overhead and a dentist waiting in an empty surgery. A plan for the first 1,000 patients, built on local visibility, referrals, a smooth new patient experience and strong rebooking, shortens the months before the practice covers its costs.

                ## Milestones
                1. A monthly new patient target set for the first year, tied to break-even.
                2. Marketing channels chosen within your regulator's advertising rules.
                3. A new patient path written from first call to first recall booking.
                4. New patient numbers and sources tracked every month against target.

                ## Notes
                Check your regulator's rules on advertising, offers and testimonials before any campaign.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New patient numbers and sources are tracked monthly from opening, and the practice reaches its break-even patient target."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Work out how many active patients the practice needs to break even"
                - "Read your regulator's rules on dental advertising"
                - "Write the new patient path from first phone call to recall"
                - "Ask every new patient how they heard of the practice"
            - name: Taking on the first associate dentist
              description: |-
                ## Purpose
                Going from a single-handed practice to two dentists changes everything: surgery time, nurse rotas, lab bills and the owner's role. Planning the hire, from proving there is enough demand to the associate's first quarter, avoids an associate with an empty diary who leaves within a year.

                ## Milestones
                1. Demand proven: waiting times, unbooked treatment and a surgery free for the sessions.
                2. The associate role, sessions and pay basis written.
                3. Candidates interviewed, references and registration checked.
                4. An agreement signed and a diary filled for the associate's first month.
                5. A three-month review held with the associate.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An associate starts with a signed agreement and a booked first month, and a three-month review is held with them."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count unbooked treatment and waiting times to show the demand"
                - "Write the associate role, sessions and pay basis"
                - "Check each shortlisted candidate's registration and references"
                - "Move suitable patients into the associate's first month"
            - name: Cutting the owner's chairside days
              description: |-
                ## Purpose
                Many owners work five clinical days and run the practice in the evenings, which caps growth and wears them out. Moving gradually to a fixed management day, with associates, hygienists and a practice manager absorbing the work, makes the business less dependent on the owner's hands and more valuable if it is ever sold.

                ## Milestones
                1. The owner's current week mapped: clinical sessions, admin and evening work.
                2. Management tasks listed and each given to a person or kept by the owner.
                3. One clinical session converted to protected management time.
                4. Income impact checked after three months and the next step decided.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The owner has at least one protected management session a week for three months, with the income impact reviewed."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Log one normal week of your clinical and admin hours"
                - "List the management tasks only you currently do"
                - "Hand three of those tasks to named team members"
                - "Block one weekly session as management time in the book"
            - name: Owner absence cover plan
              description: |-
                ## Purpose
                Parental leave, illness, surgery or a sabbatical can take the owner out of the surgery for weeks, and the patients, the associates and the bank all need to know the practice will carry on. A plan for locum cover, delegated authority and the owner's own income during the absence makes a planned break possible and an unplanned one survivable.

                ## Milestones
                1. The owner's clinical patients and booked treatment for the period listed.
                2. Locum or associate cover arranged with registration and indemnity checked.
                3. Authority to sign payments and make decisions delegated in writing.
                4. Insurance or income protection terms checked for the absence.

                ## Notes
                Keep a short version of this plan on file even when no absence is planned. Sudden illness is the case it matters most.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written absence plan names the cover clinician, the person with delegated authority and the income arrangements."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the treatment you have booked in the next three months"
                - "Contact two locum dentists about cover and their availability"
                - "Write who can sign payments and make decisions while you are away"
                - "Check your income protection policy terms with the provider"
            - name: Dental implant service governance
              description: |-
                ## Purpose
                Implant dentistry brings higher fees but also higher clinical, indemnity and lab risk, and regulators expect proper training, case selection, consent and follow-up. Setting up the service with clear standards protects patients and the practice, whether the owner places implants or a visiting clinician does.

                ## Milestones
                1. Training and indemnity of every clinician placing or restoring implants confirmed.
                2. Equipment, implant system and lab partner chosen and recorded.
                3. Consent, estimate and aftercare templates written for implant cases.
                4. An implant case log set up to track outcomes and complications.

                ## Notes
                Confirm with your indemnity provider that implant work is covered before any case is booked.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every implant clinician's training and indemnity is on file, implant consent templates exist and every case is entered in an outcome log."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Collect training certificates for each implant clinician"
                - "Ask the indemnity provider to confirm implant cover in writing"
                - "Write implant consent, estimate and aftercare templates"
                - "Set up an implant case log with outcome and complication fields"
            - name: Clear aligner and orthodontic service standards
              description: |-
                ## Purpose
                Clear aligner treatment is popular and heavily marketed, and complaints often follow cases taken on without proper assessment, records or realistic expectations. A written practice standard for case selection, records, consent and retention keeps the service safe and defends it if a patient is unhappy with the result.

                ## Milestones
                1. Training and indemnity for each clinician offering aligners confirmed.
                2. A case selection standard written, including when to refer to an orthodontist.
                3. Required records listed: examination, radiographs, photographs and scans.
                4. Consent and retention information agreed for every aligner patient.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written aligner standard covers case selection, records, consent and retention, and the last five cases have been checked against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Confirm each aligner clinician's training and indemnity cover"
                - "Write when an aligner case should be referred to an orthodontist"
                - "List the records every aligner case must have before treatment"
                - "Check the last five aligner cases against the standard"
            - name: Conscious sedation service set-up
              description: |-
                ## Purpose
                Anxious patients often avoid dentistry entirely, and a sedation service can bring them back, but it requires trained clinicians, a second trained person, monitoring equipment and strict protocols under national standards. Setting it up carefully, or deciding to refer instead, is a specialist decision with real safety consequences.

                ## Milestones
                1. National standards for dental sedation obtained and read.
                2. Training and indemnity for the sedationist and the second trained person confirmed.
                3. Monitoring equipment, recovery space and emergency arrangements in place.
                4. Written protocols for assessment, consent, discharge and audit.
                5. A first audit of sedation cases completed.

                ## Notes
                If the standards cannot be met in full, refer sedation cases to a service that meets them.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on sedation exists and, if offered, every national standard is evidenced and a first case audit is complete."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Obtain your country's standards for conscious sedation in dentistry"
                - "Ask how many patients you currently refer out for sedation each year"
                - "Check whether your team holds the training the standards require"
                - "Record the decision to offer sedation or keep referring"
            - name: Benchmarking with other dental practice owners
              description: |-
                ## Purpose
                Without comparison, an owner cannot tell whether a lab bill at 12 percent of gross or a hygiene share of 20 percent is good or poor. Joining a peer group or using a dental accountant's benchmarks, and comparing a set of agreed figures each year, shows where the practice is strong and which improvement to tackle next.

                ## Milestones
                1. A peer group, study club or dental accountant's benchmark report found.
                2. Your practice's figures prepared on the same definitions.
                3. The three biggest gaps against peers identified.
                4. One improvement project chosen for the year from the gaps.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly comparison against a peer benchmark names three gaps and the improvement project chosen to close one of them."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask your dental accountant for their practice benchmark report"
                - "Prepare your figures using the benchmark's definitions"
                - "Ask the agent to summarise the three biggest gaps against peers"
                - "Choose one improvement project from the gaps"
---

# Owning a Dental Practice

This area is for the dentist who owns the practice as well as working in it, whether you bought an established list, opened a squat or are about to take on your first associate. It starts with the foundations (registrations, the equipment and X-ray files, associate contracts, the patient base and the real numbers), moves through the daily and monthly machinery of decontamination, recalls, lab bills and the appointment book, then the skills an owner needs, the decisions on equipment, labs and new surgeries, the dated events such as inspections and the team training day, the situations founders and growing owners face, and finally specialist services such as implants, aligners and sedation.

What repeats is the daily surgery checklist and autoclave test, a weekly recall list, emergency kit check and treatment plan follow-up, monthly lab reconciliation, stock order, waste records, team meeting and numbers review, quarterly audits and servicing, and yearly fee, insurance and registration checks. The Operational checklist, Compliance control, Metrics log, Vendor, Purchase decision and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
