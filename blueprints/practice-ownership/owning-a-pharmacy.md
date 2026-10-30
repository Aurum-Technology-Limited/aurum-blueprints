---
id: practice-ownership.owning-a-pharmacy
name: Owning a Pharmacy
description: "Dispensing workflow and SOPs, wholesaler accounts, drug programme and insurer claims, controlled drug registers, cold chain and expiry routines, and a front shop that pays its way in an independent pharmacy."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-pharmacy, small-business, founder, pharmacy, dispensing, controlled-drugs, retail]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - compliance-control
    - metrics-log
    - vendor
    - purchase-decision
    - risk-register
    - onboarding-30-60-90
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Pharmacy
          description: "Running an independent pharmacy: dispensing operations, wholesaler accounts, insurance and government drug programmes, controlled drug records and front-shop retail."
          projects:
            - name: Pharmacy owner's fact sheet
              description: |-
                ## Purpose
                Banks, insurers, wholesalers, drug programmes and the pharmacy regulator all ask the same questions: premises licence number, superintendent or owner pharmacist, opening hours, which contracts you hold. A single page with those answers saves hours in the first year and becomes the cover sheet for every inspection, loan application or sale.

                ## Milestones
                1. A one-page sheet listing the premises licence, owner and pharmacist registration numbers, opening hours and headcount.
                2. Every contract with a notice period listed: lease, wholesalers, drug programmes, insurers, software, card terminal, waste collection.
                3. Key contacts named: accountant, lawyer, wholesaler account manager, programme helpdesk, alarm company and bank manager.
                4. The sheet dated and stored where a relief pharmacist could find it.

                ## Notes
                Keep it factual and short. The detail lives in the registers built by the projects that follow.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page pharmacy fact sheet exists with every licence number, contract and key contact filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down the premises licence number and every pharmacist registration number"
                - "List each supplier and programme contract with its renewal date and notice period"
                - "Add the key contacts with phone numbers and account references"
                - "Refresh the fact sheet and its contact list @recurring(yearly)"
            - name: Premises licence and pharmacist registration check
              description: |-
                ## Purpose
                To be legal, a pharmacy usually needs two things at once: a registered or licensed premises and a registered pharmacist in charge. Checking both against the regulator's public register, rather than trusting a framed certificate, closes the gap before an inspector or an insurer finds it, and gives you renewal months you can plan around.

                ## Milestones
                1. Premises registration or licence confirmed current on the regulator's register, with the expiry month noted.
                2. Each pharmacist and technician checked against the public register, with a dated screenshot filed.
                3. A table of renewal months for the premises and every registered person.
                4. A rule agreed that no locum works a shift until their registration has been checked that day.

                ## Notes
                Rules differ by country. Ask your pharmacy board or council which roles must register and what the premises licence covers.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The premises licence and every pharmacist's registration have been verified this month and their renewal months sit in one table."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Look up the premises entry on the pharmacy regulator's public register"
                - "Check each pharmacist and technician on the register and save a dated copy"
                - "Build a renewal table for the premises and every registered person"
                - "Recheck the premises and staff registrations on the register @recurring(yearly)"
            - name: Responsible pharmacist record and supervision rules
              description: |-
                ## Purpose
                Most jurisdictions require a named pharmacist to be in charge whenever the pharmacy is open, and a record of who that was and when they signed in and out. Owners who work every shift often let the record slide, then struggle when a locum covers or an inspector asks who supervised a sale. A clear notice, a log and written rules on what can happen when the pharmacist steps out fix that.

                ## Milestones
                1. A responsible pharmacist notice displayed where patients can see it.
                2. A log, paper or electronic, recording sign-in and sign-out times for every pharmacist shift.
                3. Written rules on which activities stop when the pharmacist is absent from the premises.
                4. Locums briefed on the log and rules in their induction note.

                ## Notes
                Check your regulator's rules on absence periods and what technicians may do unsupervised. Do not assume another country's limits apply.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A responsible pharmacist notice, a complete sign-in log for the last month and written absence rules are all in place."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your regulator's guidance on the pharmacist in charge and absence"
                - "Set up a sign-in and sign-out log for every pharmacist shift"
                - "Write one page on what stops when the pharmacist leaves the premises"
                - "Print the responsible pharmacist notice and put it by the counter"
            - name: Wholesaler accounts and trading terms baseline
              description: |-
                ## Purpose
                Margin in a pharmacy is often won or lost on wholesaler terms: discount bands, rebates for volume, delivery cut-off times, credit limits and returns policy. Many new owners inherit accounts without ever reading the terms. Writing each account's terms side by side shows what you are paying for and where the next negotiation starts.

                ## Milestones
                1. Every wholesaler and direct manufacturer account listed with account number and rep.
                2. Discount, rebate, credit limit, payment terms and delivery schedule recorded for each.
                3. Returns and short-dated stock policy noted for each supplier.
                4. Last twelve months of spend per supplier totalled from statements.

                ## Notes
                Start from the **Vendor** template, one record per wholesaler.
              priority: high
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A comparison sheet shows terms, credit limit and twelve-month spend for every wholesaler account the pharmacy holds."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every wholesaler and direct supplier account from last month's invoices"
                - "Ask each rep for the current written trading terms"
                - "Total twelve months of spend per supplier from the statements"
                - "Record delivery cut-off times and returns rules for each account"
            - name: Drug programme and insurer contracts register
              description: |-
                ## Purpose
                Government drug programmes, private insurers and benefit managers each set their own dispensing fees, reimbursement prices, claim windows and audit rights. Keeping a register of every scheme the pharmacy is enrolled in, with the terms that matter, means a rule change or a clawback letter can be checked in minutes rather than argued from memory.

                ## Milestones
                1. Every programme, insurer and benefit manager the pharmacy bills listed with its provider number.
                2. Dispensing fee, reimbursement basis, claim deadline and payment cycle recorded for each.
                3. Audit and recovery clauses highlighted for each contract.
                4. Each contract's expiry or renewal date added to the owner's calendar.

                ## Notes
                Start from the **Compliance control** template. Ask the programme helpdesk for the current manual rather than relying on a copy left by the previous owner.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A register lists every drug programme and insurer the pharmacy bills, with fees, claim deadlines, audit terms and renewal dates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every programme and insurer from the last quarter's remittance advice"
                - "Download or request the current provider manual for each scheme"
                - "Record fees, claim windows and audit clauses in one register"
                - "Check each scheme's manual for rule changes @recurring(quarterly)"
            - name: Dispensing workflow map from intake to collection
              description: |-
                ## Purpose
                Errors and delays cluster at hand-offs: the prescription taken in but not logged, the label printed before the clinical check, the bag left on the wrong shelf. Mapping the real route a prescription takes through your dispensary, step by step and person by person, shows where the checks sit and where a second pair of eyes is missing.

                ## Milestones
                1. Each step from receipt to hand-out written down with who does it.
                2. Clinical check, accuracy check and final check points marked on the map.
                3. Bottlenecks at peak hours noted from a timed sample of twenty prescriptions.
                4. Two changes agreed to remove the riskiest hand-off.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A written workflow map shows every dispensing step, its owner and its check points, with two agreed changes recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Follow five prescriptions through the dispensary and note each step"
                - "Time twenty prescriptions at the busiest hour of the week"
                - "Mark where the clinical and accuracy checks happen on the map"
                - "Agree two changes with the team to remove the riskiest hand-off"
            - name: Standard operating procedures for the dispensary
              description: |-
                ## Purpose
                Inspectors usually ask to see written procedures for dispensing, controlled drugs, the responsible pharmacist, complaints and cold chain, and they expect staff to have read and signed them. A small set of short SOPs that match what the team really does is worth more than a thick binder copied from another pharmacy.

                ## Milestones
                1. A list of the SOPs your regulator expects, checked against what exists today.
                2. Missing SOPs drafted in plain language, one page where possible.
                3. Every member of staff has signed the SOPs relevant to their role.
                4. A review date written on each SOP.

                ## Notes
                Start from the **Operational checklist** template for the SOP index. Write what the team does, then improve it, rather than describing an ideal nobody follows.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed set of current SOPs covers dispensing, controlled drugs, cold chain, complaints and pharmacist absence, each with a review date."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "List the SOPs your regulator expects and tick off those already in place"
                - "Ask the agent to draft a plain-language outline for each missing SOP"
                - "Walk each draft through with the staff who do the task and correct it"
                - "Collect signatures from every staff member for their role's SOPs"
                - "Review and re-sign every SOP with the team @recurring(yearly)"
            - name: Dispensing versus front-shop profit split
              description: |-
                ## Purpose
                An independent pharmacy runs two businesses under one roof: dispensing, paid by programmes and insurers on fixed fees and reimbursement margins, and retail, where you set the price. Most accounts lump them together, so owners cannot tell whether the front shop earns its floor space. Splitting revenue, cost of goods and staff time between the two shows where profit really comes from.

                ## Milestones
                1. Last year's revenue separated into dispensing, private prescriptions, services and front-shop retail.
                2. Gross margin calculated for each stream from purchase records.
                3. Staff hours roughly allocated between dispensary and shop floor.
                4. A one-page summary of profit by stream reviewed with the accountant.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary shows revenue and gross margin for dispensing, services and retail, agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last year's sales by department from the till and dispensing system"
                - "Match purchases to each stream from wholesaler statements"
                - "Estimate weekly staff hours spent in the dispensary and on the shop floor"
                - "Review the split with the accountant and note what surprised you"
            - name: Pharmacy insurance schedule
              description: |-
                ## Purpose
                Pharmacies need more cover than a normal shop: professional indemnity for dispensing errors, stock cover that includes cold chain loss after a power cut, cover for cash and controlled drugs held overnight, and business interruption. Listing every policy against these risks shows the gaps before a fridge fails or a break-in happens.

                ## Milestones
                1. Every policy listed with insurer, limit, excess and renewal date.
                2. Professional indemnity checked for each pharmacist, including locums.
                3. Fridge stock spoilage, theft of medicines and business interruption confirmed as covered or not.
                4. Gaps raised with the broker in writing.

                ## Notes
                Ask the broker about the stock value you declare. Under-declared stock is a common reason claims are reduced.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A schedule of every pharmacy policy exists with limits and renewal dates, and identified gaps have been raised with the broker in writing."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather every current insurance certificate and schedule into one folder"
                - "Check whether cold chain spoilage and stock theft are covered"
                - "Email the broker the gaps you found and ask for quotes"
                - "Review the insurance schedule and declared stock value before renewal @recurring(yearly)"
            - name: Keys, cash and medicines security
              description: |-
                ## Purpose
                Pharmacies are targets for theft of cash, high-value stock and controlled drugs, and the insurer and regulator will both ask who holds keys and codes. Knowing exactly who can open the building, the safe and the controlled drug cabinet, and how cash leaves the premises, closes the easiest routes to loss.

                ## Milestones
                1. A key and alarm code register listing every holder of building, safe and controlled drug cabinet access.
                2. Controlled drug cabinet keys held only by pharmacists or those your rules allow.
                3. Till float, cash-up and banking routine written, with banking times varied.
                4. Alarm, camera and panic button tested and the results recorded.

                ## Notes
                Change codes and recover keys on the day anyone with access leaves.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated key and code register exists, controlled drug keys are restricted, and alarm and camera tests are recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List everyone who holds a key, alarm code or safe combination"
                - "Restrict controlled drug cabinet keys to the people your rules allow"
                - "Write the cash-up and banking routine and vary banking times"
                - "Test the alarm, cameras and panic button and note the results"
            - name: Daily dispensary opening and closing checks
              description: |-
                ## Purpose
                The small checks at open and close catch most avoidable problems: the fridge reading out of range overnight, a controlled drug cabinet left unlocked, bags awaiting collection past their date, the alarm not set. A one-page checklist that the first and last person in tick takes three minutes and gives you evidence when something goes wrong.

                ## Milestones
                1. An opening checklist and a closing checklist, each on one page.
                2. A named person responsible for each list on every day of the week.
                3. Four weeks of completed checklists filed.
                4. One recurring problem found by the lists and fixed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Opening and closing checklists have been completed and filed on every trading day for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Draft opening and closing checklists with the team in one short meeting"
                - "Put the checklists on a clipboard at the dispensary door"
                - "Complete the opening and closing dispensary checklist @recurring(daily)"
                - "Look through the month's checklists for repeated misses"
            - name: Fridge temperature and cold chain log
              description: |-
                ## Purpose
                Vaccines, insulin and many biologics lose effect if stored outside their range, often without any visible sign, and a single failure can mean thousands in stock and a patient recall. A daily max and min reading, a reset, and a written plan for what to do when it is out of range protect patients and give the insurer the evidence it will ask for.

                ## Milestones
                1. Each medicines fridge has a calibrated max and min thermometer or data logger.
                2. A log recording current, maximum and minimum readings every trading day.
                3. A written out-of-range procedure naming who to call and what to quarantine.
                4. The fridge on its own fused circuit with a switch label saying do not turn off.

                ## Notes
                Start from the **Metrics log** template. Follow the manufacturer's storage advice and your regulator's guidance when stock has been out of range; do not guess whether it is still usable.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every medicines fridge has a complete daily log for the last month and a written out-of-range procedure on its door."
                cadence: rolling
              tasks:
                - "Check each fridge has a working max and min thermometer or logger"
                - "Write the out-of-range procedure and tape it to the fridge door"
                - "Record and reset the fridge maximum and minimum readings @recurring(daily)"
                - "Book calibration or replacement of the fridge thermometers @recurring(yearly)"
            - name: Weekly controlled drug balance checks
              description: |-
                ## Purpose
                Discrepancies in controlled drug registers are easier to resolve the week they happen than the year after, when the staff involved have left. A weekly balance check of every running total against physical stock, signed by the pharmacist, keeps the register clean and shows the inspector a habit rather than a scramble.

                ## Milestones
                1. A list of every controlled drug line held, with its register page.
                2. Weekly physical counts compared with the running balance and signed.
                3. Any discrepancy investigated and recorded with its cause.
                4. Unresolved discrepancies reported to the right authority as your regulations require.

                ## Notes
                Start from the **Compliance control** template. Which drugs need a register, and who you report losses to, depend on your country's controlled drug schedules.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every controlled drug line has had its balance checked and signed weekly for eight weeks, with any discrepancy explained in writing."
                cadence: rolling
              tasks:
                - "List every controlled drug line in the cabinet with its register page"
                - "Count physical stock against each running balance and sign it @recurring(weekly:fri)"
                - "Record the cause of any discrepancy on the day it is found"
                - "Ask your regulator who receives reports of unexplained losses"
            - name: Weekly wholesaler ordering and stock rotation
              description: |-
                ## Purpose
                Dispensary stock is usually the largest asset on a pharmacy's balance sheet after goodwill, and most of it is ordered daily by habit. A weekly review of the order against dispensing history, with oldest stock moved forward, cuts overstock and the urgent next-day orders that cost delivery charges and staff time.

                ## Milestones
                1. Minimum and maximum levels set for the top 100 lines by value.
                2. A weekly review of the automatic order against those levels.
                3. Stock rotated so the shortest dated packs sit at the front.
                4. Next-day emergency orders counted each week and falling.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The top 100 lines have set minimum and maximum levels, and emergency orders have fallen for four weeks in a row."
                cadence: rolling
              tasks:
                - "Export the top 100 dispensary lines by value from the dispensing system"
                - "Set a minimum and maximum level for each of the top 100 lines"
                - "Review the order against stock levels and rotate short-dated packs @recurring(weekly:mon)"
                - "Count how many emergency orders were placed this week"
            - name: Monthly expiry date sweep and supplier returns
              description: |-
                ## Purpose
                Expired stock found by an inspector is a finding, and expired stock found by a patient is a complaint. A monthly sweep of one section of shelves at a time, with short-dated packs marked and returned to the wholesaler inside its returns window, turns waste into credit notes.

                ## Milestones
                1. The dispensary and shop shelves divided into twelve sections, one per month.
                2. Packs expiring within three months marked with a sticker in every section swept.
                3. Eligible short-dated stock returned for credit within each supplier's window.
                4. Expired stock separated and sent for disposal with a record kept.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve shelf sections have each been swept once in a year, with returns credits and disposal records filed for each sweep."
                cadence: rolling
              tasks:
                - "Divide the shelves into twelve sections and write the rota on the wall"
                - "Sweep this month's section for packs expiring within three months @recurring(monthly:20)"
                - "Raise returns for eligible short-dated stock before the window closes"
                - "Bag expired stock for the disposal contractor and log it"
            - name: Weekly claims run and rejection follow-up
              description: |-
                ## Purpose
                Rejected and late claims are money already spent on stock that never comes back. A fixed weekly slot to submit outstanding claims, read the rejection report and fix each rejected item before the programme's deadline recovers revenue that would otherwise quietly lapse.

                ## Milestones
                1. A weekly hour blocked for claims, with a named person and a deputy.
                2. Every rejection logged with its reason code and the fix made.
                3. The three most common rejection reasons identified after a month.
                4. A dispensing change made to stop the most common rejection.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Claims are submitted every week and every rejection from the last month has a recorded fix or a recorded write-off reason."
                cadence: rolling
              tasks:
                - "Block a weekly hour for claims and name a deputy"
                - "Submit outstanding claims and work through the rejection report @recurring(weekly:wed)"
                - "Log each rejection with its reason code and what was done"
                - "Pick the most common rejection and change the step that causes it"
            - name: Monthly reconciliation of programme remittances
              description: |-
                ## Purpose
                Programmes and insurers pay in batches, often weeks later, with deductions for clawbacks, price changes and rejected items buried in the remittance. Matching each payment to the claims submitted shows short payments while there is still time to query them.

                ## Milestones
                1. Each remittance received this month matched to the claims it covers.
                2. Short payments and deductions listed with their stated reason.
                3. Queries raised with the programme for any deduction that cannot be explained.
                4. The receivable balance per programme agreed with the bookkeeper.

                ## Notes
                If your bookkeeper already runs a month-end close, fold this into it; otherwise a simple spreadsheet per programme works.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every remittance for the month is matched to claims and every unexplained deduction has a query reference."
                cadence: rolling
              tasks:
                - "Collect this month's remittance advices from every programme and insurer"
                - "Match remittances to submitted claims and list short payments @recurring(monthly:12)"
                - "Raise a written query for each deduction you cannot explain"
                - "Agree the balance owed by each programme with the bookkeeper"
            - name: Dispensing error and near-miss log
              description: |-
                ## Purpose
                Near misses, the wrong strength picked and caught at the final check, happen far more often than errors that reach a patient, and they show where the next real error will come from. A blame-free log reviewed monthly turns those catches into changes in shelf layout, labelling or workflow.

                ## Milestones
                1. A near-miss log kept at the checking bench and used by everyone.
                2. Errors that reached a patient recorded separately, with what was done for the patient.
                3. A monthly review that names the top cause and one change.
                4. Look-alike and sound-alike drugs separated or shelf-labelled where the log shows confusion.

                ## Notes
                Report errors that reach patients through the channels your regulator or national patient safety body expects.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A near-miss log has entries every month and each monthly review has recorded one cause and one change made."
                cadence: rolling
              tasks:
                - "Put a near-miss log at the checking bench and explain it at the team huddle"
                - "Review the month's near misses and agree one change @recurring(monthly:26)"
                - "Separate or relabel any look-alike drugs the log keeps naming"
                - "Find out how errors that reach patients are reported in your country"
            - name: Monthly pharmacy numbers review
              description: |-
                ## Purpose
                Owners need a handful of numbers more than a full set of accounts: items dispensed, average reimbursement per item, front-shop takings and margin, stock value, wage cost and cash in the bank. Reviewing the same figures on the same day each month shows a lost prescriber, a price cut or a stock build-up within weeks rather than at year end.

                ## Milestones
                1. Eight numbers chosen and defined so they are measured the same way every month.
                2. Twelve months of history filled in where the data exists.
                3. A monthly hour booked to update the figures and write two lines on what changed.
                4. One action recorded from each review.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A metrics log holds eight defined pharmacy numbers for at least six consecutive months, each with a written comment and action."
                cadence: rolling
              tasks:
                - "Choose eight numbers and write how each one is calculated"
                - "Back-fill twelve months from the dispensing system and till"
                - "Update the pharmacy numbers and write what changed @recurring(monthly:5)"
            - name: Owings and backorder list for patients
              description: |-
                ## Purpose
                When a medicine is out of stock the patient leaves with a promise, and every lost owing is a phone call, a complaint or a patient going elsewhere. A single owings list checked each week, with each patient told when to come back or offered an alternative through their prescriber, keeps promises visible.

                ## Milestones
                1. One owings list, paper or in the dispensing system, used by everyone.
                2. Each owing has the patient's contact, the item, the date and the supplier chased.
                3. Owings older than a week escalated to the pharmacist for a prescriber conversation.
                4. A count of owings tracked weekly.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All patient owings sit on one list, and none has been open more than two weeks without a recorded contact with the patient or prescriber."
                cadence: rolling
              tasks:
                - "Move every owing slip into one list with patient contact details"
                - "Chase suppliers and update patients on open owings @recurring(weekly:tue)"
                - "Escalate owings over a week old to the pharmacist on duty"
            - name: Drug recall and safety alert routine
              description: |-
                ## Purpose
                Medicine recalls and safety alerts can require action within hours, such as quarantining a batch or contacting patients who received it. Pharmacies that rely on someone noticing an email miss them. A named person, a weekly check of every alert channel and a filed record of action taken make the response provable.

                ## Milestones
                1. Every alert channel listed: regulator, wholesaler, manufacturer and programme notices.
                2. A named person and deputy responsible for checking alerts.
                3. An alert log recording each notice, the stock checked and action taken.
                4. A method for finding which patients received a recalled batch from the dispensing system.

                ## Notes
                Start from the **Compliance control** template. Urgent recalls should reach the person on duty the same day, not wait for the weekly check.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An alert log shows every recall and safety notice for the last three months with the stock check and action recorded against each."
                cadence: rolling
              tasks:
                - "Subscribe the pharmacy email to the regulator's medicine alert service"
                - "Name an alert lead and a deputy and tell the wholesaler reps"
                - "Check every alert channel and log any action taken @recurring(weekly:thu)"
                - "Practise finding patients who received one batch in the dispensing system"
            - name: Reading reimbursement and dispensing fee statements
              description: |-
                ## Purpose
                Programme statements mix dispensing fees, reimbursed drug cost, allowances, deductions and patient co-payments in ways that are hard to read the first time. Learning to read one statement line by line lets you see what each prescription really earns and spot when a rule change has cut your margin.

                ## Milestones
                1. One month's statement annotated line by line with what each figure means.
                2. Reimbursement per item calculated for your ten most dispensed medicines.
                3. Items that lose money after purchase cost identified.
                4. Questions answered by the programme helpdesk or an experienced owner.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "An annotated statement and a table of net earnings per item for the ten most dispensed medicines exist."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Print last month's statement from your largest programme"
                - "Annotate every line with what it means, marking the ones you do not know"
                - "Work out net earnings per item for your ten most dispensed medicines"
                - "Ask the helpdesk or a fellow owner about the lines you could not explain"
            - name: Generic substitution rules and margin
              description: |-
                ## Purpose
                Where substitution is allowed, the choice of generic brand can change your margin on an item several times over, but the rules on who may substitute, what the patient must be told and what the programme reimburses vary widely. Understanding your scheme's rules lets you buy well without breaching them or confusing patients who expect the same packaging.

                ## Milestones
                1. Your jurisdiction's substitution rules summarised on one page.
                2. The programme's reimbursement basis for generics understood.
                3. Purchase prices compared across suppliers for the twenty highest-volume generics.
                4. A rule agreed on keeping one brand per patient where switching causes confusion.

                ## Notes
                Check the rules with your regulator or programme manual. Interchangeability lists differ between countries.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of substitution rules and a price comparison for the twenty highest-volume generics are filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the substitution and interchangeability rules that apply to you"
                - "Compare supplier prices for your twenty highest-volume generics"
                - "Agree when the pharmacy keeps a patient on the same brand"
                - "Brief the dispensary team on the rules and brand policy"
            - name: Front-shop merchandising basics
              description: |-
                ## Purpose
                Pharmacists are trained in medicines, not retail, yet the front shop often decides whether the pharmacy makes money beyond thin dispensing margins. Learning the basics, such as placing high-margin lines at eye level near the prescription waiting area, faced shelves and clear pricing, lifts sales without adding floor space.

                ## Milestones
                1. A sketch of the shop floor showing where waiting patients stand and walk.
                2. The ten highest-margin retail categories identified from till data.
                3. Shelves reset so those categories sit in the waiting and walking areas.
                4. Sales in the reset categories compared before and after over eight weeks.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The shop floor has been reset around ten high-margin categories and an eight-week before and after sales comparison is recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Sketch the shop floor and mark where waiting patients stand"
                - "Rank retail categories by margin from the last six months of till data"
                - "Move the top categories to the waiting area and face the shelves"
                - "Compare category sales eight weeks after the reset"
            - name: Gross margin and stock value literacy for owners
              description: |-
                ## Purpose
                Strong sales do not stop a pharmacy running out of cash, because stock ties up money and margin hides in purchase discounts and year-end rebates. Understanding how your accountant calculates gross margin, stock turn and stock value lets you challenge the figures and see what each order decision does to cash.

                ## Milestones
                1. Gross margin, stock turn and days of stock explained in your own words.
                2. Each figure calculated for last year from the accounts.
                3. Rebates and retrospective discounts located in the accounts.
                4. Questions resolved with the accountant in one meeting.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Last year's gross margin, stock turn and days of stock are calculated and the method has been confirmed with the accountant."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find gross margin and closing stock value in last year's accounts"
                - "Calculate stock turn and days of stock from those figures"
                - "Locate where wholesaler rebates appear in the accounts"
                - "Book a meeting with the accountant to check your workings"
            - name: Technician and assistant scope and delegation
              description: |-
                ## Purpose
                Freeing the pharmacist for clinical checks and services depends on technicians and assistants doing everything they are permitted to, and nothing they are not. Writing down what each role may do in your jurisdiction, and who on the team is trained for it, makes delegation safe and lets the owner step away from routine assembly.

                ## Milestones
                1. The regulator's rules on technician and assistant tasks summarised.
                2. A role card for each position listing permitted tasks and sign-off points.
                3. Each team member's training and competence recorded against their role card.
                4. One task moved from the pharmacist to a trained technician.

                ## Notes
                Keep the training record beside the role cards so a locum or inspector can see who is signed off for what.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Role cards for every dispensary position exist, each person's training is recorded against them, and one task has been delegated."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your regulator's guidance on what technicians may do unsupervised"
                - "Write a role card for each dispensary position"
                - "Record each person's training against their role card"
                - "Choose one routine pharmacist task to hand to a trained technician"
            - name: Prescription and pharmacy record retention
              description: |-
                ## Purpose
                Pharmacies keep a lot of records with different retention periods: prescriptions, controlled drug registers, private prescription records, fridge logs, invoices and patient medication records. A retention schedule and tidy storage means you can find a record when a programme audits you and destroy the rest securely when the time comes.

                ## Milestones
                1. A retention schedule listing each record type and its legal or contractual period.
                2. Storage for each record type labelled by year.
                3. Records past their period destroyed through a confidential shredding service with a certificate.
                4. Electronic records checked for backup and access controls.

                ## Notes
                Retention periods vary by country and by programme contract. Confirm them with your regulator and each programme rather than assuming.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A retention schedule exists for every pharmacy record type, and out-of-period paper records have been destroyed with a certificate."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every type of record the pharmacy keeps on paper and on screen"
                - "Confirm the retention period for each with the regulator and programme manuals"
                - "Box and label stored paper records by type and year"
                - "Book a confidential shredding collection for records past their period"
            - name: Consultation room and private counselling standards
              description: |-
                ## Purpose
                Patients ask about sensitive problems at a busy counter, and many services, from vaccinations to new medicine reviews, need a private space that meets the regulator's or programme's standard. Getting the room right, with privacy, a sink or hand gel, a clean surface and a way to call for help, makes services possible and confidential conversations normal.

                ## Milestones
                1. The regulator's or programme's requirements for a consultation area listed.
                2. The room checked against each requirement and gaps fixed.
                3. A sign at the counter offering a private conversation.
                4. The room booked and used at least weekly.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The consultation room meets every listed requirement and the counter displays a sign offering private consultations."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "List the consultation room requirements in your regulator or programme guidance"
                - "Check the room against the list and note what is missing"
                - "Fix the gaps, such as a lock, a sink or a privacy screen"
                - "Put up a counter sign offering a private conversation"
            - name: Second wholesaler or buying group decision
              description: |-
                ## Purpose
                Relying on one wholesaler leaves the pharmacy exposed to its stock outs, its delivery times and its price rises, while joining a buying group can improve terms in return for commitments on volume or branding. Comparing the options against your real spend turns a sales pitch into a decision you can defend.

                ## Milestones
                1. Current spend and terms per supplier taken from the baseline project.
                2. Two or three alternatives priced on the same basket of 50 lines.
                3. Commitments, exit terms and branding obligations read for each option.
                4. A decision recorded with the reason and a date to review it.

                ## Notes
                Start from the **Purchase decision** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on adding a wholesaler or joining a buying group, based on a 50-line price comparison, is recorded with a review date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Build a basket of 50 lines that reflects your real dispensing mix"
                - "Ask two alternative wholesalers or groups to price the basket"
                - "Read each option's minimum commitment and exit terms"
                - "Write down the decision and when you will review it"
            - name: Dispensing automation and system decision
              description: |-
                ## Purpose
                Robots, automated counting, barcode checking and a better dispensing system can each save time and cut errors, but the costs and space needs differ hugely and a poor choice locks you in for years. Measuring your item volumes and where staff time goes first shows which, if any, will pay back in your pharmacy.

                ## Milestones
                1. Weekly item volume and peak-hour load measured.
                2. Staff time on assembly, checking and stock handling estimated.
                3. Two or three options costed, including installation, support and data migration.
                4. A payback estimate and decision recorded.

                ## Notes
                Start from the **Purchase decision** template. Ask suppliers for references from pharmacies of your size, not their flagship sites.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on dispensing automation exists, with costed options and a payback estimate based on measured item volumes."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Pull weekly item volumes for the last twelve months"
                - "Estimate staff hours spent on assembly and stock handling"
                - "Get costed proposals from two or three suppliers"
                - "Call two reference pharmacies of similar size for each shortlisted supplier"
            - name: Compliance packs and blister service decision
              description: |-
                ## Purpose
                Multi-compartment packs help some patients manage complex regimens, but they take far more staff time than standard dispensing and are often unpaid or only partly paid. Deciding who qualifies, what you charge and how many you can safely prepare stops the service quietly growing until it swamps the dispensary.

                ## Milestones
                1. The current number of pack patients and staff hours spent per week counted.
                2. Payment, if any, from programmes or patients confirmed.
                3. Written criteria for who receives packs, agreed with local prescribers where possible.
                4. A cap or charging decision recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written compliance pack policy sets eligibility, charging and a capacity limit, based on counted patient numbers and staff hours."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count pack patients and time how long one week of packs takes"
                - "Check whether any programme pays for pack preparation"
                - "Draft eligibility criteria and share them with local prescribers"
                - "Decide on a capacity cap or a charge and tell the team"
            - name: Home delivery service business case
              description: |-
                ## Purpose
                Delivery keeps housebound and elderly patients loyal, and competitors may already offer it, but drivers, vehicles, fuel and the risk of medicines going astray all cost money. A business case based on real patient numbers and routes shows whether to charge, limit or expand the service.

                ## Milestones
                1. The number of delivery requests and current delivery patients counted over a month.
                2. Cost per delivery calculated, including driver time and fuel.
                3. Rules for signatures, failed deliveries, fridge items and controlled drugs written.
                4. A decision on charging, limiting or expanding the service recorded.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A delivery business case with cost per delivery and written handling rules has led to a recorded decision on the service."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Log every delivery for four weeks with time taken and distance"
                - "Work out the cost per delivery including driver wages and fuel"
                - "Write the rules for fridge items, controlled drugs and failed deliveries"
                - "Decide whether to charge, cap or grow deliveries"
            - name: Front-shop range and space review
              description: |-
                ## Purpose
                Shelves fill up over the years with lines that sell twice a year and tie up cash, while categories patients ask for are missing. Reviewing sales per metre of shelf each quarter frees space for lines that sell, and shows whether some floor would earn more as a consultation room or waiting area.

                ## Milestones
                1. Sales and margin per category per metre of shelf calculated.
                2. Slow lines with no sale in six months listed for clearance.
                3. Two new lines or categories trialled based on patient requests.
                4. A quarterly review date set.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Sales per metre are calculated for every category and slow lines have been cleared at least once, with quarterly reviews recorded."
                cadence: cyclic
              tasks:
                - "Measure the shelf space each front-shop category occupies"
                - "List lines with no sale in six months from the till system"
                - "Note products patients ask for that you do not stock"
                - "Review front-shop sales per metre and clear slow lines @recurring(quarterly)"
            - name: Adding a vaccination or clinical service
              description: |-
                ## Purpose
                Clinical services such as flu vaccination, blood pressure checks or minor ailment schemes can add income and bring patients who then use the shop, where your regulator and programmes allow pharmacists to provide them. Choosing one service and setting it up properly, with training, protocols and a way to be paid, beats launching several half-ready.

                ## Milestones
                1. Services the pharmacy may legally offer listed with their payment route.
                2. One service chosen on demand, payment and staff capacity.
                3. Training, protocols, equipment and consent forms in place.
                4. The first month of appointments delivered and reviewed.

                ## Notes
                Confirm the legal basis for each service, such as a protocol or authorisation, with your regulator before advertising it.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One clinical service has launched with trained staff, written protocols and a confirmed payment route, and its first month has been reviewed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the services pharmacists may provide in your jurisdiction and who pays"
                - "Pick one service and estimate weekly demand and staff time"
                - "Book the pharmacist training and gather protocols and consent forms"
                - "Review the first month of appointments and income"
            - name: Dead stock clearance and overstock reduction
              description: |-
                ## Purpose
                Most pharmacies carry lines that have not been dispensed in months, bought for one patient who moved away. Clearing them by return, transfer to another pharmacy or careful sell-through releases cash and shelf space, and setting rules stops the pile from rebuilding.

                ## Milestones
                1. A report of dispensary lines with no movement in six months, valued at cost.
                2. Returnable lines sent back for credit.
                3. Other lines offered to nearby pharmacies or a returns scheme where permitted.
                4. A rule agreed for single-patient orders, such as ordering only what the patient needs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The value of dispensary stock with no movement in six months has been measured and reduced by at least half."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a no-movement report for the last six months and total its value"
                - "Return every line the wholesaler will still accept"
                - "Offer remaining sealed packs to nearby pharmacies where the rules allow"
                - "Agree an ordering rule for one-off patient items"
            - name: Annual price review for retail and private services
              description: |-
                ## Purpose
                Programme fees are set for you, but front-shop prices, private prescription charges and service fees are not, and many independents leave them untouched for years while costs rise. An annual review against local competitors and your own costs keeps margin from eroding without surprising regular customers.

                ## Milestones
                1. Prices for the top 50 retail lines compared with three local competitors.
                2. Private prescription and service fees compared with cost and local rates.
                3. New prices set and shelf labels changed on one day.
                4. Patients told of any change to service fees before it applies.
              priority: low
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "A dated price review covers the top 50 retail lines and every private fee, with new prices applied and labels updated."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Check prices for your top 50 retail lines at three local competitors"
                - "Work out the cost of each private service you charge for"
                - "Set new prices and relabel the shelves on one day"
                - "Run the retail and private fee price review @recurring(yearly)"
            - name: Pharmacy inspection preparation
              description: |-
                ## Purpose
                Inspectors from the regulator look at the premises, the records and how the team works, and visits often come with little notice. Preparing as if one were booked, with the documents an inspector asks for gathered in one place and the team rehearsed, turns a stressful visit into a routine one and shows where real gaps remain.

                ## Milestones
                1. The regulator's published standards or inspection framework read and summarised.
                2. Evidence gathered for each standard: SOPs, logs, registers, training records, licences.
                3. A mock walk-round done by a pharmacist from outside the business.
                4. Gaps from the mock fixed and noted with dates.

                ## Notes
                Start from the **Compliance control** template, one control per inspection standard.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence folder covers every inspection standard and a mock walk-round has been held, with its gaps closed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Download your regulator's current inspection standards"
                - "Gather evidence for each standard into one folder"
                - "Ask a pharmacist friend from another business to do a mock walk-round"
                - "Fix each gap from the mock and record the date fixed"
            - name: Controlled drug stock take and witnessed destruction
              description: |-
                ## Purpose
                Out-of-date and patient-returned controlled drugs build up in the cabinet until there is no room, and many jurisdictions require their destruction to be witnessed by an authorised person and recorded. A yearly full stock take paired with a booked destruction visit keeps the cabinet clear and the registers reconciled.

                ## Milestones
                1. A full stock take of every controlled drug line reconciled to the registers.
                2. Expired and returned stock segregated and labelled in the cabinet.
                3. Destruction booked with the authorised witness your rules require.
                4. Destruction entries recorded and signed in the right registers.

                ## Notes
                Who may witness destruction and how it is recorded differ by country. Check before you denature anything.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full controlled drug stock take has been reconciled this year and expired stock destroyed with a signed, witnessed record."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "Find out who may witness controlled drug destruction where you practise"
                - "Segregate and label expired and patient-returned stock in the cabinet"
                - "Do a full controlled drug stock take and book witnessed destruction @recurring(yearly)"
                - "Check the destruction entries are signed in every register"
            - name: Year-end stock count with the accountant
              description: |-
                ## Purpose
                Closing stock is one of the largest figures in a pharmacy's accounts, and an inaccurate count moves profit, tax and the value a buyer will pay. A planned count, done out of hours with teams of two and a clear cut-off for deliveries, gives the accountant a figure they can rely on.

                ## Milestones
                1. A count date and method agreed with the accountant.
                2. Delivery and sales cut-off rules written for the count day.
                3. Dispensary and shop counted in teams of two, or by an external stock-taking firm.
                4. Count sheets valued and signed off, with large variances investigated.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A signed, valued year-end stock count is with the accountant, with every variance over an agreed threshold explained."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Agree the count date and method with the accountant"
                - "Write the delivery and sales cut-off rules for count day"
                - "Book an out-of-hours stock count with the team or a stock-taker @recurring(yearly)"
                - "Investigate variances over the threshold before the figures are final"
            - name: Drug programme audit visit preparation
              description: |-
                ## Purpose
                Programmes and insurers audit pharmacies to check that claims match prescriptions, and an unprepared audit can end in clawbacks covering months of dispensing. Knowing what they sample, checking your own sample first and having paperwork findable limits recoveries to genuine errors.

                ## Milestones
                1. The programme's audit scope and sample method understood from its manual.
                2. A self-audit of 50 recent claims against the original prescriptions completed.
                3. Errors found corrected or disclosed as the programme rules require.
                4. Prescriptions filed so any claim can be found within five minutes.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A self-audit of 50 claims is complete with findings recorded, and any sampled prescription can be retrieved within five minutes."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Read the audit section of your largest programme's provider manual"
                - "Pick 50 recent claims and check each against the original prescription"
                - "Record every mismatch and what you did about it"
                - "Refile prescriptions so any claim can be found by date and number"
            - name: Power cut and storm plan for medicines stock
              description: |-
                ## Purpose
                Hurricanes and long power cuts can destroy fridge stock, shut the dispensing system and cut off deliveries just when patients need medicines most. A written plan covering backup power, cool boxes, paper dispensing records and early supplies for vulnerable patients keeps the pharmacy useful in an emergency and limits losses.

                ## Milestones
                1. Fridge stock value and the hours it can survive without power known.
                2. Backup power, a generator or an agreement with another site arranged for the fridge.
                3. A paper procedure for dispensing and recording while systems are down.
                4. A list of patients who need early supplies before a forecast storm.

                ## Notes
                Start from the **Risk register** template. In hurricane regions, review the plan before the season starts.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "A written emergency plan covers fridge backup, paper dispensing and early supplies, and has been rehearsed with the team once."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Total the value of fridge stock and check how long the fridge holds temperature"
                - "Arrange backup power or a cold storage agreement with another site"
                - "Write a paper dispensing and recording procedure for system outages"
                - "Rehearse the storm and power cut plan with the team @recurring(yearly)"
            - name: First year as an independent pharmacy owner
              description: |-
                ## Purpose
                Pharmacists who become owners often keep working every shift at the bench while bills, programme letters and staff issues pile up behind them. A first-year plan with a 90-day focus on cash, compliance and the team, and protected weekly time away from dispensing, sets the habits the rest of this area depends on.

                ## Milestones
                1. A 90-day plan written with three priorities for cash, compliance and staff.
                2. A weekly block of owner time with a relief pharmacist or technician cover.
                3. Every staff member met one to one in the first month.
                4. A twelve-month review held with the accountant and recorded.

                ## Notes
                Start from the **Onboarding 30/60/90** template.
              priority: high
              deadlineOffsetDays: 365
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written 90-day plan exists, weekly owner time has been kept for three months, and a twelve-month review with the accountant is recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Write three 90-day priorities for cash, compliance and staff"
                - "Book relief cover for one weekly block of owner time"
                - "Hold a one-to-one with every staff member this month"
                - "Book a twelve-month review meeting with the accountant"
            - name: Opening a pharmacy in a new unit
              description: |-
                ## Purpose
                Opening a pharmacy from an empty shop involves more than a lease: many countries control where new pharmacies may open, the premises must meet the regulator's standards before registration, and programme contracts may take months. A sequenced plan from licence application to first prescription avoids paying rent on a unit that cannot yet dispense.

                ## Milestones
                1. Rules on opening a new pharmacy in your jurisdiction understood, including any distance or need tests.
                2. Premises fitted out to the regulator's standards and registered.
                3. Wholesaler accounts and programme contracts in place before opening day.
                4. Local prescribers and care providers told of the opening date.

                ## Notes
                Ask the regulator and the main programme for their approval timelines before signing a lease.
              priority: medium
              deadlineOffsetDays: 270
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The new pharmacy is registered, has live wholesaler and programme accounts and has dispensed its first prescription."
                cadence: phased
                effort_hours_estimate: "80"
              tasks:
                - "Ask the regulator how new pharmacy applications are assessed and timed"
                - "Check each programme's contracting timeline before signing a lease"
                - "Book the premises inspection once the fit-out meets the standard"
                - "Visit local surgeries and care homes to announce the opening date"
            - name: Stepping back from the bench as a single-handed owner
              description: |-
                ## Purpose
                Owners who are the only pharmacist cannot take a holiday, attend a meeting or fall ill without closing the doors. Building a pool of reliable relief pharmacists and a written handover for them gives the owner real time off and makes the business less dependent on one person, which matters to any future buyer.

                ## Milestones
                1. Three relief pharmacists vetted and briefed on the pharmacy's SOPs.
                2. A locum handover pack: logins, controlled drug keys, owings, services and contacts.
                3. One full week covered without the owner on site.
                4. The owner's regular bench days reduced by at least one a month.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Three relief pharmacists are vetted, a handover pack exists and the pharmacy has run a full week without the owner."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask nearby owners for relief pharmacists they trust"
                - "Write the locum handover pack with logins, keys and contacts"
                - "Book a first locum day while you are reachable by phone"
                - "Plan a full week away covered by the relief pool"
            - name: Losing a major prescriber nearby
              description: |-
                ## Purpose
                When the medical practice next door closes, merges or moves, an independent pharmacy can lose a large share of its prescriptions within months. Knowing how dependent you are on each prescriber, and acting early with services, delivery and relationships elsewhere, softens the drop.

                ## Milestones
                1. Prescription share by prescriber or practice calculated for the last year.
                2. The plans of the largest prescribing practices understood from direct conversations.
                3. Two new prescriber relationships or patient groups targeted.
                4. A cash plan for a 20 percent fall in items prepared with the accountant.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A prescriber dependency table exists and a cash plan for a 20 percent fall in items has been agreed with the accountant."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Report items dispensed by prescriber for the last twelve months"
                - "Ask the practice managers of your top two prescribers about their plans"
                - "List two other practices or care homes you could serve"
                - "Model a 20 percent fall in items with the accountant"
            - name: Island or rural pharmacy supply lines
              description: |-
                ## Purpose
                A pharmacy on a small island or far from the nearest wholesaler depot faces weekly rather than daily deliveries, shipping delays and seasonal disruption. Holding deeper stock of critical lines, agreeing emergency arrangements with other pharmacies and planning around shipping schedules keeps patients supplied without tying up all your cash.

                ## Milestones
                1. Delivery days, lead times and cut-offs for each supplier written down.
                2. Critical lines, such as insulin and anti-epileptics, given a higher minimum stock level.
                3. An emergency loan arrangement agreed with at least one other pharmacy.
                4. Stock plans adjusted ahead of known shipping disruption or hurricane season.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Supplier lead times, raised minimum levels for critical lines and an emergency loan agreement are all written down."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write each supplier's delivery days and true lead time"
                - "List critical lines and raise their minimum stock levels"
                - "Agree an emergency stock loan arrangement with another pharmacy"
                - "Plan extra stock ahead of the next known shipping gap"
            - name: Medicine shortage response
              description: |-
                ## Purpose
                Shortages of common medicines now happen often enough to need a routine rather than a scramble. A shared list of current shortages, known alternatives agreed with prescribers and clear rules on rationing or allocating limited stock means patients are switched safely and the team gives consistent answers.

                ## Milestones
                1. A live shortage list with expected return dates from suppliers.
                2. Alternatives for each shortage discussed and agreed with local prescribers.
                3. A rule for allocating scarce stock fairly between regular patients.
                4. Patients affected contacted before they run out.

                ## Notes
                Any change of medicine is the prescriber's decision. Your role is to find what is available and tell them early.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A shortage list is kept current, each shortage has a prescriber-agreed alternative recorded and affected patients were contacted before running out."
                cadence: rolling
              tasks:
                - "Start a shortage list with item, supplier status and expected return"
                - "Email local prescribers your current shortages and available alternatives"
                - "Write a fair allocation rule for scarce lines"
                - "Phone affected patients before their supply runs out"
            - name: Supplying care homes
              description: |-
                ## Purpose
                A care home contract brings steady volume but demands monthly cycles, medication administration records, interim prescriptions, staff training and visits. Setting up the service with clear agreements and a monthly cycle calendar decides whether it is profitable or a source of constant urgent work.

                ## Milestones
                1. A written agreement with each home covering ordering, delivery, returns and visits.
                2. A monthly cycle calendar for ordering, checking, dispensing and delivery.
                3. Interim and urgent prescription rules agreed.
                4. Profit per home reviewed after three months.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Each supplied care home has a written agreement and a monthly cycle calendar, and profit per home has been reviewed after three months."
                cadence: rolling
              tasks:
                - "Draft a supply agreement covering ordering, delivery and visits"
                - "Set the monthly ordering and delivery cycle with each home"
                - "Run the care home monthly cycle check against the calendar @recurring(monthly:15)"
                - "Review profit and staff time per home after three months"
            - name: Extemporaneous preparation and compounding standards
              description: |-
                ## Purpose
                Some pharmacies still prepare medicines that are not commercially available, such as oral liquids for children, and this carries risks that ordinary dispensing does not. Clear worksheets, verified formulas, equipment records and a decision on what you will not make protect patients and the pharmacy.

                ## Milestones
                1. A list of preparations the pharmacy makes and how often.
                2. Each formula verified from a recognised reference source.
                3. Worksheets recording ingredients, batch numbers, checks and expiry for every preparation.
                4. A list of preparations the pharmacy will refer elsewhere.

                ## Notes
                Your regulator may set specific standards for premises and equipment used for compounding. Check before offering it.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every preparation the pharmacy makes has a verified formula and a completed worksheet for each batch, and a refer-elsewhere list exists."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List every preparation made in the last year and how often"
                - "Verify each formula against a recognised reference source"
                - "Introduce a worksheet for ingredients, batch numbers and checks"
                - "Decide which preparations to refer to a specialist compounding pharmacy"
            - name: Benchmarking with other independent pharmacies
              description: |-
                ## Purpose
                Owners rarely know whether their wage cost, stock turn or retail margin is normal. Joining a small group of independent owners, or an association benchmarking scheme, and comparing the same figures each quarter shows where you lag and where a peer has already solved your problem.

                ## Milestones
                1. A group of three to six owners or a benchmarking scheme joined.
                2. A shared set of figures defined the same way for every pharmacy.
                3. The first comparison reviewed and one improvement chosen.
                4. Quarterly comparisons held for a year.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Four quarterly benchmark comparisons have been completed and each produced one recorded improvement."
                cadence: cyclic
              tasks:
                - "Ask your pharmacy association about benchmarking schemes for independents"
                - "Agree definitions for wage cost, stock turn and retail margin with peers"
                - "Compare figures with the benchmarking group @recurring(quarterly)"
                - "Pick one improvement from each comparison and note it"
---

# Owning a Pharmacy

This area is for the pharmacist who owns the business as well as standing at the bench, whether you bought an established community pharmacy, opened in a new unit or are about to hand the dispensary to a second pharmacist. It starts with the foundations (licences, the responsible pharmacist record, wholesaler accounts, drug programme contracts, SOPs and the real split between dispensing and retail margin), moves through the daily, weekly and monthly machinery of fridge logs, controlled drug balances, ordering, claims and expiry sweeps, then the skills an owner needs, decisions on wholesalers, automation and new services, dated events such as inspections and the year-end stock count, the situations founders and single-handed owners face, and finally specialist work such as shortages, care home supply and compounding.

What repeats is the daily opening check and fridge log, a weekly order, claims run, owings list, recall check and controlled drug balance, a monthly expiry sweep, remittance reconciliation, error review and numbers review, quarterly front-shop and benchmarking reviews, and yearly stock counts, insurance, contracts and SOP reviews. The Operational checklist, Compliance control, Metrics log, Vendor, Purchase decision and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
