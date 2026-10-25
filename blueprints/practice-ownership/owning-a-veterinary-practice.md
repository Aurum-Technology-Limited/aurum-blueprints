---
id: practice-ownership.owning-a-veterinary-practice
name: Owning a Veterinary Practice
description: "Premises standards, theatre and dispensary routines, controlled drugs, out-of-hours cover, vet and nurse rotas, fees, health plans and client billing, for the vet who owns the practice as well as working in it."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-veterinary-practice, small-business, founder, veterinary, dispensary, out-of-hours, pet-health-plans]
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
        - name: Owning a Veterinary Practice
          description: "Running a veterinary practice: small animal or mixed work, surgery and dispensary, out-of-hours cover, vet and nurse staffing and client billing."
          projects:
            - name: Veterinary practice owner's fact sheet
              description: |-
                ## Purpose
                Accountants, banks, insurers, wholesalers and the regulator all ask the same opening questions: how many consult rooms and theatres, which species you see, who holds which registration and which contracts bind the practice. Putting those facts on one dated page saves hours in the first year and becomes the cover sheet for every inspection, loan application or eventual sale.

                ## Milestones
                1. A one-page sheet listing consult rooms, theatres, kennel and cattery spaces, X-ray units, vehicles and opening hours.
                2. Practice and clinician registration numbers recorded with their renewal months.
                3. Every contract with a value or notice period listed: lease, wholesaler, out-of-hours provider, lab, waste, software and servicing.
                4. Key contacts named: accountant, lawyer, radiation adviser, equipment engineer, bank manager and insurer.

                ## Notes
                Keep it factual and short. The detail lives in the registers that later projects build.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page fact sheet exists with every registration number, contract and key contact for the practice filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the consult rooms, theatres, ward spaces and X-ray units in use today"
                - "Gather every practice and clinician registration number in one document"
                - "List each supplier contract with its renewal date and notice period"
                - "Refresh the fact sheet and its contact list @recurring(yearly)"
            - name: Vet and veterinary nurse registration check
              description: |-
                ## Purpose
                Any vet or registered nurse working while their registration has lapsed puts animals, clients and the owner at risk, and most veterinary regulators treat it as a serious matter for the practice as well as the individual. Checking each person on the public register yourself, rather than trusting a certificate in the staff file, closes the gap in an afternoon and gives you a renewal calendar.

                ## Milestones
                1. Each vet and registered nurse checked on the regulator's public register, with the check dated.
                2. Any student nurses or locums working under supervision listed with their supervising registrant.
                3. A table of renewal months, CPD year ends and indemnity providers for every clinician.
                4. A rule agreed that nobody starts clinical work until their registration has been verified.

                ## Notes
                Which roles must register differs by country. Ask your veterinary regulator whether nurses, technicians and paraprofessionals are covered.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every vet and nurse has been verified on the public register this month and their renewal months sit in one table."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each vet and registered nurse on the regulator's public register"
                - "Note which students or locums work under someone else's supervision"
                - "Build a table of renewal months, CPD year ends and indemnity providers"
                - "Recheck every clinician on the public register @recurring(yearly)"
            - name: Veterinary premises standards file
              description: |-
                ## Purpose
                Many countries license or accredit veterinary premises separately from the vets who work there, with standards for theatres, isolation, medicines storage and record keeping. Building one file that maps each standard to the evidence you hold turns an inspection from a scramble into a walk round with a folder.

                ## Milestones
                1. The current premises standards or accreditation scheme for your country obtained and the practice's level or class confirmed.
                2. Each standard listed beside the document, photo or record that shows it is met.
                3. Gaps marked with an owner and a fix date.
                4. The file stored where any senior team member can find it on inspection day.

                ## Notes
                Start from the **Compliance control** template. Where membership of a voluntary scheme is optional, record the decision either way.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A premises standards file maps every applicable standard to evidence, with each gap assigned an owner and a fix date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Download the current veterinary premises standards for your country"
                - "Confirm which class or tier of premises the practice is registered under"
                - "List each standard beside the evidence the practice already holds"
                - "Assign every gap an owner and a target date"
                - "Review the standards file against any revised scheme @recurring(yearly)"
            - name: Clinical equipment and asset register
              description: |-
                ## Purpose
                Anaesthetic machines, monitors, autoclaves, X-ray generators, centrifuges, ultrasound probes and the practice vehicles all have service dates, warranties and replacement costs that live in different inboxes. A single register shows what you own, what it is worth for insurance and what will need replacing in the next three years.

                ## Milestones
                1. Every item over an agreed value listed with make, model, serial number and location.
                2. Purchase date, warranty end and last service recorded for each item.
                3. A replacement year and rough cost estimated for anything over five years old.
                4. The register matched against the insurance schedule and the fixed asset list from the accountant.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every clinical asset over the agreed value with serial number, service date and a replacement year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Walk the building and photograph the serial plate of each major item"
                - "Enter make, model, serial, location and purchase date for each asset"
                - "Add warranty ends and the last service date from engineer reports"
                - "Check the register against the insurer's schedule and fixed asset list"
                - "Update the asset register for new and disposed items @recurring(quarterly)"
            - name: Radiation protection file for the X-ray room
              description: |-
                ## Purpose
                Veterinary radiography usually means people in the room restraining or positioning an animal, which is exactly why radiation rules for vet practices are strict about local rules, dosimetry and who may be present. A complete file, kept current, protects the team and is one of the first things an inspector asks to see.

                ## Milestones
                1. Any registration or notification the radiation authority requires for each X-ray unit confirmed and filed.
                2. Local rules written for each room, signed by the radiation protection supervisor and posted.
                3. A radiation protection adviser or equivalent appointed, with their latest report on file.
                4. Dosemeter results, critical examination and equipment test reports filed in date order.
                5. Every team member who takes radiographs has signed that they have read the local rules.

                ## Notes
                Requirements are set by national radiation law and vary widely. Agree the details with a qualified radiation adviser rather than copying another practice's rules.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The radiation file holds current registration, signed local rules, the adviser's report and dosimetry records for every X-ray unit."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find the radiation authority registration for each X-ray unit"
                - "Ask the radiation adviser for their latest report and outstanding actions"
                - "Collect signatures from everyone who reads or takes radiographs"
                - "File the latest dosemeter results and equipment test reports"
                - "Review local rules and dosimetry results with the supervisor @recurring(yearly)"
            - name: Active client and patient base baseline
              description: |-
                ## Purpose
                Practice software often counts every animal ever registered, including the dead and the moved away, so owners overestimate their real list. Knowing how many animals were seen in the last 18 months, split by species and by how many are on a health plan or overdue a vaccine, is the base for every staffing, pricing and growth decision.

                ## Milestones
                1. Active patients defined, for example seen or invoiced in the last 18 months.
                2. Active patients counted by species, with dogs, cats, rabbits, exotics, equine and farm separated.
                3. Deceased and moved animals marked or archived so reminders stop.
                4. The share of active animals that are vaccinated in date and on a health plan recorded.

                ## Notes
                Ask the software supplier for the right report rather than exporting everything to a spreadsheet.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated count of active patients by species, with vaccinated and health plan shares, is recorded from a cleaned client list."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Agree the definition of an active patient with the practice manager"
                - "Run the active patient report by species from the practice software"
                - "Archive animals marked deceased or moved away"
                - "Record the vaccinated in date and health plan shares beside the count"
            - name: Profit by income stream for the practice
              description: |-
                ## Purpose
                A veterinary practice earns from consultations, surgery, diagnostics, hospitalisation, the dispensary, retail food and out-of-hours, and each carries very different costs. Splitting last year's accounts into those streams shows whether the dispensary is propping up underpriced surgery, or whether out-of-hours is losing money every night.

                ## Milestones
                1. Last year's turnover split into consultations, procedures, diagnostics, hospitalisation, medicines, food and retail, and out-of-hours.
                2. Direct costs set against each stream: drug and food purchases, lab fees, consumables and out-of-hours pay.
                3. A gross margin worked out for each stream.
                4. Two or three findings written down for the accountant to check.

                ## Notes
                Most practice software can export income by category if items are coded properly. If they are not, fixing the coding is the first win.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table shows last year's income, direct costs and gross margin for at least six income streams, reviewed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export last year's income by item category from the practice software"
                - "Map each category to one of the practice's income streams"
                - "Pull drug, food, lab and consumable purchases from the accounts"
                - "Ask the agent to draft a one-page summary of margins by stream"
                - "Review the findings with the accountant"
            - name: Veterinary practice insurance schedule
              description: |-
                ## Purpose
                Owners usually hold half a dozen policies bought at different times: professional indemnity, buildings and contents, business interruption, employer's liability, motor for practice vehicles and sometimes cover for animals in your care. Laying them side by side shows gaps, such as no cover for a failed freezer full of vaccines or for a horse injured on your premises.

                ## Milestones
                1. Every policy listed with insurer, renewal date, premium and main limits.
                2. Cover checked for animals in the practice's care, stock spoilage, cyber and business interruption.
                3. Each clinician's professional indemnity confirmed as current.
                4. Gaps and overlaps discussed with a broker and decisions recorded.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A schedule of every practice policy with renewal dates exists and each identified gap has a recorded decision from a broker review."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect the current schedule page of every practice insurance policy"
                - "List insurer, premium, renewal date and limits in one table"
                - "Check whether animals in your care and stock spoilage are covered"
                - "Book a review of the gaps with an insurance broker"
            - name: Species and caseload scope statement
              description: |-
                ## Purpose
                Without a clear statement, a small animal clinic ends up seeing a sick tortoise on a Saturday with nobody trained or equipped for it, and a mixed practice drifts between farm, equine and companion work without pricing any of them properly. Writing down which species and procedures you offer, which you refer and which you decline protects animals and gives the front desk a clear script.

                ## Milestones
                1. A list of species seen routinely, seen with limits and not seen.
                2. Procedures done in-house listed separately from those always referred.
                3. A referral destination named for each excluded species or procedure.
                4. Reception given a short script for calls outside the practice's scope.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written scope statement names species and procedures offered, limited and referred, and reception has a script for out-of-scope calls."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the species and procedures the practice handled last year"
                - "Ask each vet which cases they are not comfortable taking"
                - "Name a referral destination for each excluded species or procedure"
                - "Write a short phone script for reception on out-of-scope calls"
            - name: Daily theatre and ward opening checklist
              description: |-
                ## Purpose
                Mornings in a busy practice start with admits arriving while someone is still looking for the theatre gowns, and the gaps show up as cancelled surgery or a missed fridge alarm. A written open and close routine for theatre, prep, kennels and the dispensary means any nurse can set the building up the same way, and the owner can see it was done.

                ## Milestones
                1. One opening and one closing checklist covering theatre, prep, kennels, cattery, isolation and dispensary.
                2. Fridge and freezer temperatures recorded on every opening.
                3. Oxygen supply, suction and emergency drug box checked before the first admit.
                4. The completed checklist signed daily and kept for an agreed period.

                ## Notes
                Start from the **Operational checklist** template. Keep each list to one side of a page so it actually gets used.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opening and closing checklists are completed and signed on at least 95 percent of working days over a month."
                cadence: rolling
              tasks:
                - "Walk the morning routine with the head nurse and write each step down"
                - "Add fridge temperature and oxygen checks to the opening list"
                - "Laminate or digitise the checklists for theatre, wards and dispensary"
                - "Complete and sign the opening and closing checklist @recurring(daily)"
            - name: Anaesthetic safety checks and monitoring records
              description: |-
                ## Purpose
                Anaesthetic deaths in companion animals are rare but far from zero, and most reviews point back to unchecked machines, missing monitoring or no one watching recovery. A pre-use machine check, a surgical safety checklist and a monitoring chart for every general anaesthetic give each patient the same protection and give the practice evidence if something goes wrong.

                ## Milestones
                1. A machine and breathing system check done and initialled before the first anaesthetic each day.
                2. A surgical safety checklist read aloud before induction, before the first cut and before recovery.
                3. A monitoring chart completed for every anaesthetic, with recovery observations.
                4. Any anaesthetic incident reviewed at the next clinical meeting.

                ## Notes
                Several veterinary anaesthesia bodies publish free safety checklists. Adapt one rather than writing your own from scratch.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed machine check, safety checklist and monitoring chart exist for every general anaesthetic in an audited month."
                cadence: rolling
              tasks:
                - "Download a published veterinary surgical safety checklist and adapt it"
                - "Agree which nurse role owns the machine check each day"
                - "Check the anaesthetic machine and breathing systems before first use @recurring(daily)"
                - "Audit ten anaesthetic records for complete monitoring charts @recurring(monthly:18)"
            - name: Weekly vaccination and health reminder routine
              description: |-
                ## Purpose
                Boosters, flea and worm treatment, dental checks and senior clinics are the predictable income that pays for the unpredictable days, and they depend on reminders going out and being followed up. A weekly routine that sends, chases and books those visits keeps animals protected and the diary filled weeks ahead.

                ## Milestones
                1. Reminder rules set in the software for vaccines, parasite control and senior checks.
                2. A weekly list of animals two weeks overdue produced and worked by reception.
                3. Response rate tracked as the share of reminded animals seen within eight weeks.
                4. A second reminder by phone or text added for animals still overdue.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly overdue list is worked every week for a quarter and the reminder response rate is recorded each month."
                cadence: rolling
              tasks:
                - "Check which reminder rules are switched on in the practice software"
                - "Agree the wording and channel for first and second reminders"
                - "Work the list of animals overdue by two weeks @recurring(weekly:mon)"
                - "Record the reminder response rate in the numbers review"
            - name: Dispensary stock, expiry and ordering control
              description: |-
                ## Purpose
                Medicines and food are often the largest single cost in a vet practice, and a dispensary run on memory leaks money through expired vials, duplicate orders and items that were dispensed but never charged. A monthly stock routine with minimum levels and an expiry check cuts waste and shows the true margin on what you sell.

                ## Milestones
                1. Minimum and reorder levels set for the top 100 lines by value.
                2. Short-dated stock found each month and moved to the front or returned where possible.
                3. Stock on hand counted against the system for high-value lines.
                4. Dispensed but uncharged items traced and the cause fixed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly expiry checks and high-value stock counts are completed for six months and written-off stock value falls against the first month."
                cadence: rolling
              tasks:
                - "Export the top 100 dispensary lines by annual purchase value"
                - "Set minimum and reorder levels for each of those lines"
                - "Count high-value lines and pull short-dated stock @recurring(monthly:12)"
                - "Trace any dispensed item that has no matching charge"
            - name: Controlled drug cabinet and register routine
              description: |-
                ## Purpose
                Ketamine, opioids and some sedatives are attractive to misuse, and discrepancies in the register are one of the first things an inspector or the police will look at. A weekly running balance check, a named key holder and a clear process for witnessed destruction protect the team and the licence.

                ## Milestones
                1. Each controlled drug the practice holds listed with its legal schedule or class and storage rule.
                2. Key holders named and key or code access logged.
                3. Running balances in the register checked against stock every week and discrepancies investigated the same day.
                4. Expired and returned controlled drugs destroyed with a witness and recorded as the law requires.

                ## Notes
                Controlled drug law is national and detailed. Check the rules for your country with the regulator or a veterinary defence body before changing practice.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly balance checks are signed for every controlled drug for three months with any discrepancy investigated and recorded the same day."
                cadence: rolling
              tasks:
                - "List each controlled drug held with its schedule and storage rule"
                - "Name the key holders and start a key access log"
                - "Check register balances against cabinet stock @recurring(weekly:fri)"
                - "Book witnessed destruction for expired controlled drugs"
            - name: Monthly veterinary numbers review
              description: |-
                ## Purpose
                Most owners see the bank balance daily and the accounts once a year, which leaves everything in between to instinct. A one-hour monthly review of a handful of numbers, such as transactions per vet, average transaction value, new clients, debtor days and drug cost as a share of turnover, catches problems while they are still small.

                ## Milestones
                1. Eight or fewer measures chosen and defined in writing.
                2. A monthly sheet filled in from the practice software and the bank.
                3. Each month's sheet compared with the same month last year.
                4. One action recorded each month with an owner.

                ## Notes
                Start from the **Metrics log** template. Pick numbers you can pull in under thirty minutes, or the review will stop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly sheets exist, each with the agreed measures and one recorded action."
                cadence: rolling
              tasks:
                - "Choose up to eight measures and write how each is calculated"
                - "Build the monthly sheet with last year's figures for comparison"
                - "Fill in the numbers and record one action @recurring(monthly:8)"
                - "Share the sheet with the practice manager before the team meeting"
            - name: Billing at discharge and client debt control
              description: |-
                ## Purpose
                Clients collecting a recovered pet are emotional and in a hurry, so charges get missed and accounts are left open with a promise to pay. Billing in full before the animal leaves, taking deposits on estimates and chasing the small debt list every week keeps cash in the practice rather than in the debtor ledger.

                ## Milestones
                1. A written payment policy covering deposits, payment at discharge and credit accounts.
                2. Hospital sheets checked against the invoice before every discharge.
                3. Client debt listed by age every week and chased by a named person.
                4. Debtor days measured monthly and falling against the starting figure.

                ## Notes
                Agree in advance which situations, such as a genuine emergency, allow a payment plan, so reception is not deciding under pressure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A written payment policy is in use and client debt over 30 days is lower after three months than on the day the routine started."
                cadence: rolling
              tasks:
                - "Write the payment policy for deposits, discharge and credit accounts"
                - "Add a hospital sheet versus invoice check to the discharge routine"
                - "Chase the aged client debt list @recurring(weekly:wed)"
                - "Train reception on explaining the policy to upset clients"
            - name: Ward round and hospitalised patient handover
              description: |-
                ## Purpose
                Hospitalised animals change hands between day vets, nurses and out-of-hours cover, and the dangerous moments are those changeovers. A standing ward round with a written handover for each patient means drug times, fluid rates and the plan for the night are never held in one person's head.

                ## Milestones
                1. A handover format agreed for every inpatient: problem, treatments due, observations, plan and client contact.
                2. A morning and evening ward round held at fixed times.
                3. Hospital sheets checked against the handover at each round.
                4. Clients updated by a named person at an agreed time each day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every inpatient has a written handover at each ward round for a month, confirmed by a spot check of ten patients."
                cadence: rolling
              tasks:
                - "Agree a one-page handover format with the vets and head nurse"
                - "Set fixed times for the morning and evening ward rounds"
                - "Run the ward round and complete each handover @recurring(daily)"
                - "Spot check ten hospital sheets against their handovers"
            - name: Theatre sterilisation and hygiene audit cycle
              description: |-
                ## Purpose
                Surgical site infections and resistant bacteria in the wards cost the practice in repeat treatment, free revisits and reputation. A quarterly audit of instrument processing, autoclave records, hand hygiene and kennel cleaning gives evidence that standards are held, and finds the slip before an outbreak does.

                ## Milestones
                1. An audit sheet covering instrument cleaning, packing, autoclave cycles, theatre cleaning and hand hygiene.
                2. Autoclave cycle printouts or test strips filed for every load.
                3. A quarterly audit completed with a score and actions.
                4. Postoperative infections recorded and reviewed alongside the audit results.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly hygiene audits are completed in a year, each with a score, actions and a record of postoperative infections."
                cadence: cyclic
              tasks:
                - "Draft an audit sheet for instruments, autoclave, theatre and hand hygiene"
                - "Start filing autoclave cycle records for every load"
                - "Run the theatre and ward hygiene audit @recurring(quarterly)"
                - "Add surgical site infection cases to the clinical meeting agenda"
            - name: Clinical waste, sharps and cytotoxic waste records
              description: |-
                ## Purpose
                Every vet practice produces sharps, infectious waste, cytotoxic drug waste, out-of-date medicines and animal remains, and each stream has its own legal route and paperwork. Missing transfer notes or a contractor without the right licence can leave the owner liable for waste they paid to have taken away.

                ## Milestones
                1. Each waste stream listed with its container, contractor and collection frequency.
                2. The contractor's licence or permit checked and a copy filed.
                3. Transfer or consignment notes filed for every collection.
                4. Pet cremation and body storage arrangements written up, including freezer capacity.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every waste stream has a named licensed contractor and a complete set of collection notes for the last twelve months."
                cadence: rolling
              tasks:
                - "List every waste stream the practice produces and its container"
                - "Check and file each waste contractor's licence or permit"
                - "File the month's waste transfer notes and check none are missing @recurring(monthly:20)"
                - "Confirm freezer capacity and collection days with the pet crematorium"
            - name: Out-of-hours rota and on-call cover
              description: |-
                ## Purpose
                Most veterinary regulators expect practices to provide or arrange round-the-clock emergency cover for their clients, and an unfair rota is one of the main reasons vets leave. A published rota months ahead, with rest after nights and a clear plan for hospitalised patients, meets the duty without burning out the team.

                ## Milestones
                1. The practice's out-of-hours duty under your regulator's code written in one paragraph.
                2. A rota published at least two months ahead with nights and weekends shared fairly.
                3. Rest time after on-call nights agreed and kept.
                4. Out-of-hours calls, visits and income recorded monthly.

                ## Notes
                Check employment rules on working hours and rest for your country, which apply to vets as to anyone else.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An out-of-hours rota is published at least two months ahead for six months running with no unfilled shifts."
                cadence: rolling
              tasks:
                - "Read the out-of-hours section of your regulator's code of conduct"
                - "Count last quarter's nights and weekends worked by each vet"
                - "Publish the next two months of the on-call rota @recurring(monthly:25)"
                - "Agree the rest time owed after a night on call"
            - name: Lab and imaging results follow-up list
              description: |-
                ## Purpose
                Blood results, histology and external imaging reports arrive after the consult, and the failure point is the result that comes back abnormal when the vet who sent it is on leave. A weekly list of outstanding results, each with a named vet and a client call logged, means nothing important sits unread.

                ## Milestones
                1. Every sample sent out logged with patient, test, date and requesting vet.
                2. Results matched to the log as they arrive and outstanding ones chased.
                3. Each result marked as seen by a vet and client contact recorded.
                4. Cover agreed for results that arrive while the requesting vet is away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No external result on the weekly list stays unseen by a vet for more than two working days over a three-month check."
                cadence: rolling
              tasks:
                - "Set up a log of samples sent to external labs"
                - "Agree who covers results for vets on leave"
                - "Review outstanding results and client calls @recurring(weekly:thu)"
                - "Check the lab portal settings so results alert the right vet"
            - name: Reading veterinary practice accounts
              description: |-
                ## Purpose
                Vets are trained to read blood panels, not balance sheets, yet the owner signs the accounts and the bank's covenants depend on them. Learning to read your own profit and loss, balance sheet and cash flow, and the ratios vet practices are judged on, lets you question the accountant instead of nodding along.

                ## Milestones
                1. The practice's last two sets of accounts read line by line with notes on anything unclear.
                2. Staff costs, drug costs and premises costs worked out as shares of turnover.
                3. The difference between profit and cash explained in your own words.
                4. A list of questions answered by the accountant in a meeting.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Staff, drug and premises cost ratios are worked out from the last two years of accounts and the accountant has answered a written list of questions."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Print the last two years of accounts and mark every line you cannot explain"
                - "Work out staff, drug and premises costs as a share of turnover"
                - "Ask the agent to explain the gap between profit and cash in your accounts"
                - "Book a meeting with the accountant to go through your questions"
            - name: How veterinary pricing is built
              description: |-
                ## Purpose
                Vet fees are a mix of time-based consultations, procedure prices, medicine markups, dispensing fees and hospitalisation charges, and changing one moves the others. Understanding how your price list is built, and what each item actually costs you to deliver, stops discounting by habit and gives you a defensible answer when a client asks why surgery costs what it does.

                ## Milestones
                1. The price list grouped into consultations, procedures, diagnostics, medicines, hospitalisation and sundries.
                2. The cost of a standard consultation and two common procedures worked out from time, staff and consumables.
                3. Medicine markups and dispensing fees compared across the top 30 lines.
                4. A short written explanation of how fees are set, usable by reception.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Costed models exist for a consultation and two common procedures, and a one-page fee explanation is in use at reception."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Export the full price list and group it by category"
                - "Cost a standard consultation using vet, nurse and room time"
                - "Cost a cat spay and a dental scale and polish the same way"
                - "Write a one-page explanation of how the practice sets fees"
            - name: Estimates, options and consent conversations
              description: |-
                ## Purpose
                Complaints to vet regulators and defence bodies are dominated by money and communication, usually a bill far above what the client expected. Training every vet to offer a range of treatment options with written estimates, and to record consent, prevents most of those disputes and helps clients who cannot afford the gold standard.

                ## Milestones
                1. A standard estimate and consent form in use for every procedure and hospitalisation.
                2. Vets practise offering at least two treatment options with costs in role play.
                3. A rule agreed for when to update the client as costs approach the estimate.
                4. Ten recent consent forms audited for completeness.

                ## Notes
                Your veterinary defence or indemnity provider often has template consent forms and guidance worth using.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "An audit of ten recent procedures finds a written estimate and signed consent on every one."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the indemnity provider for their consent and estimate guidance"
                - "Agree a threshold for updating clients when costs approach the estimate"
                - "Run a role play session on offering options at different price points"
                - "Audit ten recent consent forms and share the results"
            - name: Veterinary clinical and medicines records standards
              description: |-
                ## Purpose
                Clinical notes are the practice's main defence in a complaint, and many countries require separate records of medicines received, administered and supplied, especially for food-producing animals. Agreeing a note standard and auditing it brings every vet to the same level and makes the records usable by the next clinician.

                ## Milestones
                1. A one-page standard for consult notes: history, examination findings, differential list, plan and discussion with the client.
                2. Medicine records checked against the rules for food-producing animals if the practice treats them.
                3. Ten records per vet audited against the standard.
                4. Feedback given privately to each vet and a re-audit date set.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every vet has had ten records audited against the written standard with a re-audit showing improvement."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Draft a one-page note standard with the senior vets"
                - "Check medicines records rules for food-producing animals"
                - "Audit ten consult records for each vet"
                - "Give each vet private feedback and set a re-audit date"
            - name: Pet insurance claims and direct settlement
              description: |-
                ## Purpose
                Insured clients accept more diagnostics and treatment, but claims paperwork can swallow hours of nurse and reception time and direct settlement can leave the practice waiting weeks for money. A defined claims process, clear rules on which insurers you settle with directly and a monthly check of outstanding claims keeps insurance helping rather than draining the practice.

                ## Milestones
                1. A list of the insurers your clients use most, with their claim portals and payment times.
                2. A written policy on direct settlement, including deposits and which insurers qualify.
                3. One person trained to complete claims accurately from the clinical record.
                4. Outstanding insurance claims reviewed monthly by age.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A direct settlement policy is in use and outstanding insurer claims are reviewed every month, with claims over 60 days falling."
                cadence: rolling
              tasks:
                - "List the ten insurers that appear most often on client records"
                - "Write the direct settlement policy and the deposit it requires"
                - "Train one nurse or receptionist as the claims lead"
                - "Review outstanding insurance claims by age @recurring(monthly:15)"
            - name: Prescribing and dispensing rules for owners
              description: |-
                ## Purpose
                Veterinary medicines law usually sets out who may prescribe, how unlicensed products may be used, when an animal must be under your care and whether clients can ask for a written prescription to buy elsewhere. Knowing those rules as an owner, not only as a clinician, keeps dispensary policies, prescription fees and staff roles inside the law.

                ## Milestones
                1. The main veterinary medicines rules for your country summarised on one page.
                2. The practice's written prescription policy and fee checked against them.
                3. Each dispensary role, from vet to nurse to receptionist, matched to what it may supply.
                4. A notice about written prescriptions displayed if your rules require it.

                ## Notes
                This is about knowing where to look. Confirm interpretations with the regulator or your veterinary association.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the medicines rules exists and the prescription policy and dispensary roles have been checked against it."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Find the veterinary medicines guidance published by the regulator"
                - "Summarise prescribing, supply and prescription rules on one page"
                - "Check the written prescription policy and fee against the summary"
                - "Match each dispensary role to what it may legally supply"
            - name: Euthanasia and bereavement care for clients
              description: |-
                ## Purpose
                How a practice handles the death of a pet is remembered by clients for years, and a rushed room, a bill presented in tears or the wrong ashes returned can lose a family for good. A planned process, from booking to aftercare and a follow-up card, looks after clients and the team who carry this work every week.

                ## Milestones
                1. A quiet room or time slot set aside for euthanasia appointments.
                2. Consent, payment and aftercare choices handled before the appointment where possible.
                3. Cremation tracking checked so every animal and its ashes are traced.
                4. A condolence card or call sent within a week, and a debrief offered to staff after hard cases.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A written euthanasia process is in use, with payment settled in advance and every cremation traced from collection to return."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose the room and appointment slots used for euthanasia"
                - "Write the booking script covering consent, payment and aftercare"
                - "Check how cremations are traced from collection to return"
                - "Set up a condolence card or follow-up call routine"
            - name: Pet health plan subscription decision
              description: |-
                ## Purpose
                Monthly health plans bundling vaccines, parasite control and check-ups smooth income and keep clients loyal, but a badly priced plan locks in losses for every member. Modelling the plan against real costs and expected uptake before launching, or before renewing an existing one, decides whether it is worth running and at what price.

                ## Milestones
                1. The contents of each proposed plan listed with the cost to the practice.
                2. Monthly prices modelled for dogs, cats and rabbits against full-price equivalents.
                3. Payment collection options compared, in-house or through a plan provider.
                4. A decision recorded to launch, change or close the plan.

                ## Notes
                Some countries regulate pet plans as financial products. Check before taking monthly payments yourself.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A costed plan model and a recorded decision on launch, change or closure exist, including the payment collection route."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List what each health plan tier would include"
                - "Cost each tier using current drug and consultation costs"
                - "Get quotes from two health plan administration providers"
                - "Record the decision and the target number of members"
            - name: Out-of-hours in-house or outsourced decision
              description: |-
                ## Purpose
                Running your own nights keeps clients and income in the practice but costs sleep and recruitment, while handing nights to an emergency provider frees the team at a monthly fee and a loss of control. Comparing both on cost, cover quality, travel distance for clients and staff retention gives a decision you can defend to the team and the regulator.

                ## Milestones
                1. Current out-of-hours cost and income worked out from the last twelve months.
                2. Quotes or terms obtained from at least one emergency provider within reasonable travel distance.
                3. The team's views gathered on nights and on-call.
                4. A decision recorded with how inpatients and clients will be handed over.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written comparison of in-house and outsourced out-of-hours on cost and cover exists with a recorded decision."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Work out last year's out-of-hours income and staff cost"
                - "Ask the nearest emergency provider for terms and handover rules"
                - "Hold a team discussion on nights and on-call"
                - "Write up the comparison and the decision"
            - name: Diagnostic imaging upgrade decision
              description: |-
                ## Purpose
                Moving from film or an old computed radiography reader to digital radiography, or adding ultrasound or a CT scanner, changes what cases you can keep in-house and what you can charge. A business case on case volume, fee, training and space stops an expensive machine sitting idle.

                ## Milestones
                1. Last year's imaging cases and referrals counted by type.
                2. Two or three systems compared on price, service contract, software and training.
                3. Expected case volume and fee worked into a payback period.
                4. Room, radiation and power requirements checked before purchase.
                5. A decision recorded with the person who will lead the service.

                ## Notes
                Start from the **Purchase decision** template. Ask suppliers for references from practices of a similar size.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business case comparing at least two imaging systems with a payback period and a recorded decision exists."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Count last year's radiographs, ultrasounds and imaging referrals"
                - "Request quotes and service terms from two or three suppliers"
                - "Work out the payback period at a realistic case volume"
                - "Check the room and radiation requirements with the adviser"
                - "Name the vet who will lead the new imaging service"
            - name: In-house analysers or external laboratory
              description: |-
                ## Purpose
                In-house haematology and biochemistry give results while the client waits, but reagent costs, quality control and leased machines add up. Comparing in-house and external lab costs per test, and turnaround needs by case type, shows which tests belong on the bench and which belong in the post.

                ## Milestones
                1. Tests run in the last year counted, split by in-house and external.
                2. Cost per test worked out for both routes, including reagents, controls and lease.
                3. Quality control records for in-house analysers reviewed.
                4. A list of tests to keep in-house and tests to send out agreed with the vets.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Cost per test for in-house and external routes is compared and an agreed split of tests is written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count last year's in-house and external lab tests by type"
                - "Work out the cost per test including reagents and machine lease"
                - "Check the quality control log for each in-house analyser"
                - "Agree with the vets which tests stay in-house"
            - name: Wholesaler and buying group terms review
              description: |-
                ## Purpose
                Drug and food purchases are often a fifth or more of turnover, and terms set years ago by a previous owner may no longer be competitive. Reviewing the main wholesaler, rebates, delivery frequency and whether a buying group would help can release money without touching clinical care.

                ## Milestones
                1. Annual spend with each supplier totalled from the accounts.
                2. Current discounts, rebates and payment terms written down.
                3. At least one alternative wholesaler or buying group quote obtained.
                4. Terms renegotiated or a decision to stay recorded with reasons.

                ## Notes
                Start from the **Vendor** template for each main supplier.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Spend and terms for the main suppliers are recorded and at least one competing quote has been compared, with a decision written down."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total last year's spend with each drug and food supplier"
                - "Write down current discounts, rebates and payment terms"
                - "Request a quote from an alternative wholesaler or buying group"
                - "Meet the current wholesaler with the comparison in hand"
            - name: Adding a consult room or second theatre
              description: |-
                ## Purpose
                When the diary is booked solid by mid-morning and surgery lists overrun, the bottleneck is often rooms rather than vets. A business case on the cost of building, equipping and staffing an extra room, against the extra appointments and procedures it allows, tells you whether to build, extend hours or refer.

                ## Milestones
                1. Room utilisation measured over four typical weeks.
                2. Build, equipment and staffing costs estimated for the extra room.
                3. Extra appointments or procedures per week estimated with their income.
                4. Alternatives such as longer hours or a nurse clinic compared.
                5. A decision recorded with a budget and a timetable.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A business case comparing an extra room with at least one alternative exists, with a recorded decision and budget."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Measure consult room and theatre use over four typical weeks"
                - "Get a builder's estimate for the extra room"
                - "Estimate the extra income per week it would allow"
                - "Compare the room against extended hours and nurse clinics"
            - name: Nurse clinics to free vet appointments
              description: |-
                ## Purpose
                Registered nurses can often run weight clinics, nail clips, suture removals, puppy and kitten checks and some follow-ups, inside the rules on what nurses may do. Moving that work to nurse clinics frees vet appointments for cases that need a vet and gives nurses work they trained for.

                ## Milestones
                1. Tasks nurses may legally do checked against your regulator's rules.
                2. A list of appointment types moved to nurse clinics with protocols.
                3. Nurse clinic slots added to the diary and priced.
                4. Vet appointments freed counted after three months.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "At least four appointment types run as priced nurse clinics, and freed vet appointments are counted after three months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Check which procedures nurses may do under your regulator's rules"
                - "Choose four appointment types to move to nurse clinics"
                - "Write a short protocol for each nurse clinic"
                - "Add priced nurse clinic slots to the diary"
            - name: Annual veterinary fee review
              description: |-
                ## Purpose
                Drug prices, wages and energy rise every year, and practices that skip a fee review end up making a large jump that clients notice. A planned yearly review, using cost changes, local comparisons and the profit by stream analysis, keeps increases small and explainable.

                ## Milestones
                1. Last year's cost increases for staff, drugs and premises calculated.
                2. Local fees for a consultation, vaccination and neutering compared where published.
                3. New fees agreed for each category with a start date.
                4. Reception briefed with a short explanation for clients.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "New fees are agreed and loaded into the software each year with a written note of the cost changes behind them."
                cadence: cyclic
              tasks:
                - "Work out this year's cost increases for staff, drugs and premises"
                - "Check published fees at nearby practices for common items"
                - "Agree and load new fees with a start date @recurring(yearly)"
                - "Brief reception on how to explain the change"
            - name: Response to online pharmacy competition
              description: |-
                ## Purpose
                Clients can often buy parasite treatments, prescription diets and long-term medicines online for less, taking a slice of dispensary income. Deciding which lines to price-match, which to bundle into health plans and how to make repeat prescriptions easier keeps those clients without a price war across the whole dispensary.

                ## Milestones
                1. The twenty most-bought repeat lines compared with online prices.
                2. A decision for each line: match, bundle, hold or let go.
                3. A repeat prescription and home delivery option set up if worthwhile.
                4. Dispensary income for those lines measured after six months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A pricing decision is recorded for each of the top twenty repeat lines and their income is measured six months later."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the twenty most-bought repeat medicines and diets"
                - "Compare their prices with two online pharmacies"
                - "Decide for each line whether to match, bundle or hold"
                - "Set up repeat prescription requests by phone or online"
            - name: Veterinary premises inspection preparation
              description: |-
                ## Purpose
                Whether it is a regulator's premises inspection, an accreditation visit or a medicines inspection, the practice that prepares in the weeks before has a calm day and a short action list. A mock inspection using the standards file, with the team briefed on who answers which questions, turns a dated visit into a box ticked.

                ## Milestones
                1. The inspection date and scope confirmed in writing.
                2. A mock inspection completed against the premises standards file.
                3. Every gap from the mock closed or with a written plan.
                4. Team briefed on the day's running order and who shows what.
                5. Inspector's findings recorded with actions and dates afterwards.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The inspection is completed and every finding has a named owner and a fix date recorded within a week of the visit."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Confirm the date and scope of the next inspection"
                - "Run a mock inspection with a senior nurse using the standards file"
                - "Close the gaps found or write a plan for each"
                - "Brief the team on the running order for the day"
            - name: Annual practice training and CPD day
              description: |-
                ## Purpose
                Vets and nurses need continuing professional development hours, but the practice also needs whole-team skills such as CPR on animals, fire evacuation, manual handling of large dogs and radiation refreshers. One planned training day a year, with the practice closed or on minimal cover, gets everyone through the same content.

                ## Milestones
                1. A date chosen with cover arranged and clients told in advance.
                2. Sessions planned on resuscitation, safety, radiation and one clinical topic.
                3. Attendance and certificates recorded for each person.
                4. Feedback gathered and next year's topics noted.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The training day is held, attendance and certificates are recorded for every team member and next year's topics are noted."
                cadence: cyclic
              tasks:
                - "Pick a date and arrange emergency cover"
                - "Book trainers for resuscitation and safety sessions"
                - "Record attendance and certificates for every team member"
                - "Set the date for next year's training day @recurring(yearly)"
            - name: Year-end with the veterinary accountant
              description: |-
                ## Purpose
                Year-end for a practice includes a full stock take of drugs and food, work in progress on hospitalised animals, client debt and equipment purchases, and late information delays accounts and tax. Preparing a pack before the accountant asks keeps fees down and gives you the numbers early enough to act on.

                ## Milestones
                1. A full dispensary and food stock take completed at the year-end date.
                2. Client debt and unbilled inpatient work listed at the year-end date.
                3. Equipment purchases and disposals listed with invoices.
                4. The year-end pack sent to the accountant within an agreed number of weeks.
                5. Draft accounts reviewed in a meeting before signing.

                ## Notes
                Choose an accountant who works with other vet practices; they will know the benchmarks.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A complete year-end pack with stock take, debtors and asset list reaches the accountant on the agreed date."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Agree the year-end pack contents and deadline with the accountant"
                - "Plan the dispensary stock take for the year-end date"
                - "List client debt and unbilled inpatient work at the year-end"
                - "Book a meeting to review the draft accounts before signing"
            - name: Emergency and evacuation plan for animals in care
              description: |-
                ## Purpose
                Picture a power cut, flood, fire or hurricane with twenty animals in the kennels: it is a very different emergency from an empty office. A written plan for moving or sheltering inpatients, protecting vaccines in the fridge, keeping controlled drugs secure and contacting owners means the team knows what to do before the warning comes.

                ## Milestones
                1. Risks listed for the site: power loss, flooding, fire, storms and staff unable to travel.
                2. A plan for each, including where inpatients go and how they are transported.
                3. Generator or cold storage backup for vaccines and medicines arranged.
                4. Client contact lists for inpatients available offline.
                5. The plan walked through with the team once a year.

                ## Notes
                Start from the **Risk register** template. In hurricane regions, review the plan before the season starts.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written emergency plan covering inpatients, cold storage and controlled drugs exists and has been walked through with the team."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the emergencies most likely at your site"
                - "Agree with a nearby practice to take each other's inpatients"
                - "Arrange backup power or cold storage for vaccines"
                - "Walk the team through the emergency plan"
            - name: First year as a veterinary practice owner
              description: |-
                ## Purpose
                New owners, whether they bought a practice or opened one, often keep consulting full time and discover in month six that payroll, suppliers and the regulator all need them too. Setting out the first year in quarters, with what must be learned and fixed in each, turns a long list of worries into a plan.

                ## Milestones
                1. A first-quarter list of what must be in place: registrations, insurance, banking and payroll.
                2. A second-quarter focus on the team: one-to-ones, rota and contracts.
                3. A third-quarter focus on the numbers: monthly review and fee check.
                4. A fourth-quarter review of the year with the accountant and a plan for year two.

                ## Notes
                Expect to give up some consulting time. Block at least half a day a week for running the business from the start.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Each quarter of the first year has a written focus list, and a year-one review with the accountant is recorded."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Write the list of must-haves for your first quarter"
                - "Block half a day a week in the diary for management work"
                - "Hold a one-to-one with each team member in the first quarter"
                - "Book the year-one review with the accountant"
            - name: Building the client list in a new clinic
              description: |-
                ## Purpose
                A new small animal clinic usually runs at a loss until it has enough registered animals coming back for vaccines and treatment, and most failures happen while the list is still small. A plan for the first months covering registrations, puppy and kitten offers, local referrals and reviews gives a target to watch each week.

                ## Milestones
                1. A target number of active registered animals for month six and month twelve.
                2. Launch offers and a puppy and kitten package priced within professional advertising rules.
                3. Contacts made with groomers, kennels, breeders and rescue groups nearby.
                4. New registrations tracked weekly against the target.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "New registrations are tracked weekly for six months against a written month-six target."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Set the active registration targets for month six and twelve"
                - "Price a puppy and kitten starter package"
                - "Visit five local groomers, kennels or rescue groups"
                - "Track new registrations each week against the target"
            - name: Taking on the first assistant vet
              description: |-
                ## Purpose
                Hiring the first assistant vet is the point where the owner stops being the whole clinical team, and a poor contract or rushed start can lose a good vet within months. Getting the contract, pay, on-call share, mentoring and caseload right before the start date makes the hire stick.

                ## Milestones
                1. A role description with consult hours, surgery days and on-call share.
                2. A contract reviewed by a lawyer, including notice and any restrictive covenant.
                3. Registration, indemnity and right to work verified before day one.
                4. A mentoring plan for the first three months, especially for a new graduate.

                ## Notes
                Restrictive covenants must be reasonable to be enforceable in most places. Take legal advice rather than copying a template.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The assistant vet starts with a signed contract, verified registration and a written three-month mentoring plan."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Write the role description with hours, surgery days and on-call"
                - "Ask a lawyer to review the employment contract"
                - "Verify registration, indemnity and right to work"
                - "Draft a three-month mentoring plan"
            - name: Mixed practice farm and equine calls
              description: |-
                ## Purpose
                Farm and equine work brings travel, call-out fees, on-site safety risks and medicines records for food animals that small animal work does not. Setting up visit fees, vehicle stock, safe handling rules and record keeping for on-farm and yard visits makes the large animal side pay its way and keeps vets safe.

                ## Milestones
                1. Call-out, mileage and time fees set for farm and equine visits.
                2. A standard vehicle stock list with a weekly restock routine.
                3. Safe handling and lone working rules written for farm and yard visits.
                4. Medicines records for food-producing animals checked against legal requirements.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Visit fees, a vehicle stock list and written lone working rules are in place for every vet doing farm or equine calls."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Set call-out, mileage and time fees for large animal visits"
                - "Write the standard stock list for each practice vehicle"
                - "Agree lone working check-in rules for farm and yard visits"
                - "Check food animal medicines records against the rules"
            - name: Stepping back from consulting as the owner
              description: |-
                ## Purpose
                Many owners still see a full list of consults and run the business in the evenings, which caps the practice at what one tired person can manage. Reducing your own clinical sessions in planned steps, with an assistant vet or nurse clinics taking the slack, gives you time to manage without losing clients who like seeing you.

                ## Milestones
                1. Your current clinical hours and management hours counted over a month.
                2. A target split of clinical and management time agreed.
                3. Clients and cases handed to other vets with a personal introduction.
                4. The new split held for three months and reviewed.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "The owner's clinical sessions fall to the agreed target and the new split is held for three consecutive months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Log your clinical and management hours for four weeks"
                - "Agree the target number of consult sessions per week"
                - "Introduce your regular clients to another vet"
                - "Review the split after three months"
            - name: Owner wellbeing and compassion fatigue plan
              description: |-
                ## Purpose
                Veterinary work carries well documented risks of burnout and poor mental health, and owners add money worries and staffing gaps to the clinical load. A simple plan with protected time off, a peer or professional to talk to and a regular check on how you are doing is part of running a practice that lasts.

                ## Milestones
                1. Annual leave for the owner booked in advance with cover arranged.
                2. A peer, mentor or professional support service named and contacted.
                3. Team access to a support helpline or employee assistance service confirmed.
                4. A monthly check of hours worked, sleep and leave taken recorded.

                ## Notes
                Many veterinary associations run confidential support lines. If you are struggling, talk to your doctor.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The owner's leave for the year is booked, a support contact is named and twelve monthly wellbeing checks are recorded."
                cadence: rolling
              tasks:
                - "Book your annual leave for the next twelve months"
                - "Find the confidential support line run by your veterinary association"
                - "Confirm the team's access to a support service"
                - "Record hours worked and leave taken @recurring(monthly:28)"
            - name: Herd health planning contracts for farm clients
              description: |-
                ## Purpose
                Farm work paid only by call-out is reactive and seasonal, while herd or flock health plans turn it into regular visits, data review and preventive work billed on contract. Building a contract with set visits, targets and a fee gives farmers better animal health and the practice steady income.

                ## Milestones
                1. A standard herd health plan template covering vaccination, parasites, fertility and biosecurity.
                2. A fee structure for routine visits and data review agreed.
                3. Three farm clients signed up as a pilot.
                4. Results reviewed with each farmer after a year.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Three farm clients have signed herd health contracts with set visits and a fee, reviewed after twelve months."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Draft a herd health plan template for cattle or small ruminants"
                - "Set the fee for routine visits and data review"
                - "Offer the pilot to three farm clients"
                - "Book the twelve-month review with each pilot farm"
            - name: Referral-level service governance
              description: |-
                ## Purpose
                Adding orthopaedics, advanced soft tissue surgery or CT turns a first-opinion practice into a referral destination, and other vets and clients will judge you by the outcomes. A written service standard covering credentials, case selection, outcome audit and communication with referring vets protects patients and the practice's name.

                ## Milestones
                1. The lead clinician's qualifications and experience documented for the service.
                2. Case selection criteria and consent forms written for the service.
                3. Outcomes and complications recorded for every case.
                4. Referring vets sent a report within an agreed time after each case.

                ## Notes
                Check how your regulator controls the use of titles such as specialist or advanced practitioner before advertising.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written service standard exists and outcomes are recorded for every case in the first year of the referral service."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Document the lead clinician's qualifications for the service"
                - "Write case selection criteria and a service consent form"
                - "Set up an outcome and complication log"
                - "Agree the report turnaround for referring vets"
            - name: Benchmarking with other veterinary practice owners
              description: |-
                ## Purpose
                Without comparisons, an owner cannot tell whether a staff cost of half of turnover is normal or alarming. Joining a benchmarking survey or a small group of non-competing owners who share key ratios once a year shows where the practice stands and which changes other owners found worth making.

                ## Milestones
                1. A benchmarking survey or owners' group found and joined.
                2. The practice's key ratios submitted in the agreed format.
                3. Results compared and three gaps chosen to work on.
                4. One idea from another owner tried and reviewed.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "The practice's ratios are compared with a benchmark group each year and three improvement areas are written down."
                cadence: cyclic
              tasks:
                - "Ask your veterinary association about benchmarking surveys"
                - "Contact two non-competing owners about sharing ratios"
                - "Submit the practice's ratios to the benchmark @recurring(yearly)"
                - "Choose three gaps to work on from the results"
---

# Owning a Veterinary Practice

This area is for the veterinary surgeon who owns the practice, whether a small animal clinic in a town, a mixed practice with farm and equine calls, or a new surgery that opened last year. It starts with the foundations (registrations, premises standards, the X-ray file, the equipment register and the real numbers by income stream), moves through the daily and monthly machinery of theatre checks, the ward round, the dispensary, controlled drugs, reminders, billing and out-of-hours, then the skills an owner needs, the decisions on health plans, imaging, labs and suppliers, the dated events such as inspections and year-end, the situations founders and growing owners face, and finally specialist work such as herd health contracts and referral-level services.

What repeats is the daily theatre, anaesthetic and ward routine, weekly reminders, controlled drug balances, debt review and results follow-up, monthly dispensary, waste, rota and numbers checks, quarterly sterilisation audits and yearly fee, registration, training and benchmarking reviews. The Operational checklist, Compliance control, Metrics log, Vendor, Purchase decision and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
