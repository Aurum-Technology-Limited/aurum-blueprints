---
id: practice-ownership.patient-billing-and-insurance-claims
name: Patient Billing and Insurance Claims
description: "Clean claims out the door within days, eligibility checked before the visit, denials worked every week, patient balances collected kindly and every day's takings reconciled to the bank."
category: business
version: 1.0.0
tags: [practice-ownership, patient-billing-and-insurance-claims, small-business, insurance-claims, denials, revenue-cycle, patient-balances, reconciliation]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - month-end-close
    - vendor
    - purchase-decision
    - remediation-plan
    - compliance-control
    - operational-checklist
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Patient Billing and Insurance Claims
          description: "Getting paid for patient care: fee schedules, insurer claims, pre-authorisations, rejected claims, patient balances and daily reconciliation."
          projects:
            - name: Map of how a visit becomes money
              description: |-
                ## Purpose
                Most billing problems are invisible until someone draws the path from booking to bank deposit and sees where it leaks: insurance details never captured, notes signed late, claims held for days, payments posted to the wrong patient. A one-page map with an owner for each step is the starting point for every fix in this area.

                ## Milestones
                1. Every step from appointment booking to payment posting written in order on one page.
                2. A named person and a target time attached to each step.
                3. The three steps where money is most often lost or delayed marked on the map.
                4. The map reviewed with front desk, clinicians and billing staff together.

                ## Notes
                Walk one real visit through the system end to end rather than describing how it should work. The gaps show up in what actually happened.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page billing map with an owner and target time for every step, and the three biggest leaks marked, agreed by the team."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick one visit from last week and trace it from booking to payment"
                - "List every handoff between front desk, clinician and billing"
                - "Write an owner and a target time beside each step"
                - "Hold a 30 minute review of the map with the whole team"
            - name: Payer mix and insurer contract inventory
              description: |-
                ## Purpose
                Owners are often surprised to learn that one insurer pays a third of the revenue, or that a contract has quietly auto-renewed at old rates for six years. Listing every insurer, scheme and self-pay group with its share of visits, its share of income and where its signed contract lives gives a clear view of who you depend on.

                ## Milestones
                1. Twelve months of visits and receipts split by insurer, public scheme and self-pay.
                2. Each insurer's percentage of visits and of collected income calculated.
                3. A signed copy of every insurer contract located and filed in one place.
                4. Renewal dates, notice periods and timely filing limits recorded for each contract.

                ## Notes
                If a contract cannot be found, ask the insurer's provider relations team for a copy in writing. Never assume the terms you remember are the terms on file.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A table of every payer with visit share, income share, contract location, renewal date and filing limit, with no contract marked missing."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export twelve months of payments grouped by payer from the billing system"
                - "Work out each payer's share of visits and of collected income"
                - "Gather every signed insurer contract into one secure folder"
                - "Request written copies of any contract you cannot find"
            - name: Insurer contracted rates loaded and checked
              description: |-
                ## Purpose
                Your billing system can only spot an underpayment if it knows what each insurer agreed to pay for each service. Loading the contracted allowed amount for your twenty most billed codes, per insurer, turns every remittance into something the system can check rather than something staff accept on trust.

                ## Milestones
                1. The twenty most billed procedure or service codes identified from the last year.
                2. The contracted allowed amount for each code entered per insurer.
                3. A test batch of ten paid claims compared against the loaded rates.
                4. A named person responsible for updating rates when a contract changes.

                ## Notes
                This is about the rates insurers agreed to pay, not your own list prices, which belong to fee setting. Keep the two clearly separate in the system.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Contracted rates for the top twenty codes are loaded for every major insurer and a ten-claim test shows no unexplained variance."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Run a report of the twenty most billed codes over the last year"
                - "Find each insurer's allowed amount for those codes in its contract or portal"
                - "Enter the rates into the billing system's expected payment table"
                - "Compare ten recent paid claims against the loaded rates"
            - name: Clean patient registration and insurance capture
              description: |-
                ## Purpose
                Front desk slips cause a large share of rejected claims: a misspelt name, a wrong date of birth, an old member number or the wrong policyholder. A registration standard with a scanned card front and back, checked at every visit, prevents rework that costs far more than the thirty seconds it takes.

                ## Milestones
                1. A written list of the fields that must be complete before a patient is checked in.
                2. Insurance cards scanned front and back and attached to the patient record.
                3. Policyholder name, relationship and date of birth captured for dependants.
                4. Front desk staff trained and a weekly spot check of ten registrations in place.

                ## Notes
                Ask returning patients whether anything has changed at every visit, not just once a year. Job changes and new policies are the most common cause of a stale record.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every check-in requires the listed fields and a scanned card, and spot checks find no more than one error in ten registrations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull last month's rejected claims and note which were registration errors"
                - "Write the list of mandatory registration fields for check-in"
                - "Set the system to block check-in until those fields are complete"
                - "Spot check ten new registrations against the scanned cards @recurring(weekly:fri)"
            - name: Eligibility and benefits check before every visit
              description: |-
                ## Purpose
                Finding out after treatment that a policy lapsed, a visit limit was used up or the service is excluded leaves the practice choosing between an awkward bill and a write-off. Checking eligibility one or two working days before the appointment, and telling the patient what to expect, moves that conversation to before the care rather than after.

                ## Milestones
                1. An eligibility check run for every insured appointment at least one working day ahead.
                2. Copays, deductibles remaining and visit limits noted on the appointment.
                3. Patients with a problem contacted before they arrive.
                4. A weekly count of visits seen without a recorded check, falling towards zero.

                ## Notes
                Use the insurer portal or clearinghouse batch eligibility where it exists. Phone checks should record the representative's name and a reference number.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least 95 out of every 100 insured visits in a month have a recorded eligibility check made before the appointment."
                cadence: rolling
              tasks:
                - "Find out which of your insurers support batch or portal eligibility checks"
                - "Add an eligibility status field to the appointment screen"
                - "Run eligibility checks for the next two days of appointments @recurring(daily)"
                - "Call patients whose cover has lapsed or changed before their visit"
            - name: Written patient financial policy
              description: |-
                ## Purpose
                Patients cannot follow rules nobody has told them, and staff enforce unwritten rules unevenly. A one-page financial policy covering when payment is due, what happens with insurer shortfalls, missed appointment charges, payment plans and refunds, signed at registration, makes every later money conversation fairer and shorter.

                ## Milestones
                1. A draft policy covering payment timing, insurance shortfalls, missed visits, plans and refunds.
                2. The draft checked against your regulator's and insurers' rules on charging patients.
                3. The final policy signed by new patients and displayed at reception and online.
                4. Existing patients given the policy at their next visit.

                ## Notes
                Some insurer contracts and public schemes limit what you may charge the patient. Check those terms before finalising any charge for missed appointments or shortfalls.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page financial policy is signed by every new patient and displayed at reception, with insurer and regulator limits checked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask the agent to draft a one-page patient financial policy from your current rules"
                - "Check missed appointment and shortfall charges against each insurer contract"
                - "Add the signed policy to the new patient registration pack"
                - "Post the policy at reception and on the practice website"
            - name: Provider credentialing and payer enrolment register
              description: |-
                ## Purpose
                A new clinician who starts seeing insured patients before the insurer has enrolled them can generate months of unpayable claims. A register of every clinician, every payer they are enrolled with, their provider numbers and their revalidation dates stops that from happening and makes each new hire's start date realistic.

                ## Milestones
                1. Every clinician listed with each payer they are enrolled with and their provider number.
                2. Enrolment effective dates and revalidation or recredentialing dates recorded.
                3. Any clinician seeing patients of a payer they are not enrolled with identified and fixed.
                4. A start-up checklist so new clinicians are enrolled before their first insured visit.

                ## Notes
                Enrolment can take weeks to months depending on the payer. Start the paperwork as soon as an offer is accepted, not on the first day.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register shows every clinician's enrolment status, number and revalidation date for each payer, with no clinician billing a payer they are not enrolled with."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every clinician and every payer the practice bills"
                - "Confirm each clinician's enrolment and provider number on the payer portals"
                - "Record revalidation dates and set reminders 90 days ahead"
                - "Write the enrolment steps into the new clinician start-up checklist"
            - name: Coding reference sheet for your top services
              description: |-
                ## Purpose
                Practices usually bill a few dozen codes for most of their work, yet staff still guess at modifiers, units and the matching diagnosis codes. A reference sheet for your top thirty services, agreed with a qualified coder, cuts errors at the point of charge entry and gives new staff one trusted source.

                ## Milestones
                1. The thirty most used service codes listed with plain English descriptions.
                2. Common modifiers, unit rules and typical paired diagnosis codes noted for each.
                3. The sheet reviewed and signed off by a certified coder or coding adviser.
                4. A review date set for each new annual code set release.

                ## Notes
                Coding decisions belong to the clinician and a qualified coder, never to a reference sheet alone. The sheet records what was agreed, it does not replace judgement on the case.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A coding sheet for the top thirty services is signed off by a qualified coder and sits beside every charge entry screen."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Run a report of the thirty most billed service codes"
                - "Draft a line for each with description, modifiers and units"
                - "Book a coder to review and correct the draft"
                - "Print the sheet and save it in the shared billing folder"
            - name: Receivables aging baseline for claims and patients
              description: |-
                ## Purpose
                Before changing anything you need to know how much is owed, by whom and for how long. A baseline aging report split into insurer and patient balances, by 30 day buckets, shows whether the problem is slow insurers, unpaid patients or claims that were never sent.

                ## Milestones
                1. Total receivables split into insurer and patient balances.
                2. Each split shown in buckets of under 30, 31 to 60, 61 to 90, 91 to 120 and over 120 days.
                3. Days in receivables calculated from the last three months of charges.
                4. The ten largest old balances listed with a reason for each.

                ## Notes
                Credit balances hide inside totals. Report them separately so a large refund owed does not make receivables look healthier than they are.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated aging baseline with insurer and patient splits, days in receivables and the ten largest old balances explained."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Run the aged receivables report from the billing system"
                - "Split the totals into insurer and patient balances by age bucket"
                - "Calculate days in receivables from three months of charges"
                - "Write one line of explanation for each of the ten oldest large balances"
            - name: Billing roles and separation of duties
              description: |-
                ## Purpose
                When the same person takes cash, posts payments, makes adjustments and reconciles the bank, mistakes and theft both go unnoticed. Setting out who may do what, and limiting adjustment and write-off rights in the system, protects the staff as much as the practice.

                ## Milestones
                1. A list of billing tasks with the role allowed to do each one.
                2. System permissions changed so write-offs and refunds need a second person.
                3. Cash handling and bank reconciliation held by different people.
                4. A cover plan for holidays that keeps the separation in place.

                ## Notes
                In a very small practice full separation is not possible. The owner reviewing adjustments and the bank statement personally each month is the usual substitute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written role table exists and system permissions match it, with write-offs and refunds requiring approval by a second person."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every billing task from cash taking to write-off approval"
                - "Mark which role should do each task and who approves"
                - "Change system permissions so adjustments need a second person"
                - "Write a holiday cover arrangement that keeps duties separate"
            - name: Daily close and takings reconciliation
              description: |-
                ## Purpose
                Cash, card and online payments taken at the desk should match what was posted in the system and, a day or two later, what lands in the bank. A short daily close catches a missing card batch or a mis-keyed payment while everyone still remembers the day.

                ## Milestones
                1. A daily close sheet listing cash, card and online takings against system postings.
                2. Differences investigated and explained before the next working day.
                3. Card settlements matched to bank deposits within three working days.
                4. Closed sheets filed by date and signed by the person who did the close.

                ## Notes
                Start from the **Operational checklist** template. Keep the cash float a fixed amount so the count is quick.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every working day has a signed close sheet and no unexplained difference stays open longer than three working days."
                cadence: rolling
              tasks:
                - "Create a one-page daily close sheet with cash, card and online columns"
                - "Count takings and match them to the day's postings @recurring(daily)"
                - "Match last week's card settlements to bank deposits @recurring(weekly:tue)"
                - "File each signed close sheet in a dated folder"
            - name: Charge entry and claim release within two days
              description: |-
                ## Purpose
                Every day a claim sits unsent is a day added to the wait for payment, and some insurers refuse claims filed after their deadline. Getting notes signed, charges entered and claims released within two working days of the visit is often the single biggest cash improvement a practice can make.

                ## Milestones
                1. A rule that clinical notes are signed by the end of the next working day.
                2. Charges entered and claims released within two working days of the visit.
                3. A daily list of unsigned notes and unbilled visits sent to the people who own them.
                4. Average charge lag measured monthly and below two days.

                ## Notes
                Unsigned notes are usually the real bottleneck. A short list in each clinician's inbox each morning works better than a weekly reminder.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Average days from visit to claim release is below two for three consecutive months."
                cadence: rolling
              tasks:
                - "Measure the current average days from visit to claim release"
                - "Agree a next working day note signing rule with the clinicians"
                - "Release all ready claims and send the unsigned notes list @recurring(daily)"
                - "Report charge lag at the monthly team meeting"
            - name: Clearinghouse rejection queue
              description: |-
                ## Purpose
                Rejections are claims that never reached the insurer at all, usually because of a missing field or a format error, and they sit silently until someone looks. Clearing the rejection queue every week, and fixing the cause rather than just the claim, keeps easy money from going stale.

                ## Milestones
                1. One named person responsible for the rejection queue.
                2. Every rejection corrected and resubmitted within five working days.
                3. Rejection reasons tallied each month and the top cause traced to its source.
                4. First pass acceptance rate above 95 out of 100 claims.

                ## Notes
                A rejection is not a denial. Rejected claims must be fixed and sent again, while denied claims need the denial process and sometimes an appeal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The rejection queue is empty every Friday and the monthly acceptance rate stays above 95 per cent."
                cadence: rolling
              tasks:
                - "Find the rejection report in the clearinghouse portal"
                - "Correct and resubmit every open rejection @recurring(weekly:wed)"
                - "Tally rejection reasons for the month and name the top cause"
                - "Fix the template or field that caused the top rejection"
            - name: Weekly denial work queue
              description: |-
                ## Purpose
                Insurers deny claims for reasons that range from a missing authorisation to a simple coding mismatch, and many denials are recoverable if they are worked promptly. A weekly session that sorts denials by value and deadline, and decides correct, appeal or write off for each, turns a pile into a routine.

                ## Milestones
                1. All open denials listed with amount, reason code and appeal deadline.
                2. Each denial given an outcome: corrected claim, appeal, patient bill or approved write-off.
                3. No denial allowed to pass its appeal deadline without a decision.
                4. Denial rate and recovered amount recorded each month.

                ## Notes
                Sort by appeal deadline first and value second. A small denial with three days left matters more this week than a large one with three months.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No denial passes its appeal deadline without a recorded decision, and the monthly recovered amount is logged."
                cadence: rolling
              tasks:
                - "Export all open denials with amount, reason and appeal deadline"
                - "Work the denial queue by deadline then value @recurring(weekly:thu)"
                - "Record the outcome chosen for each denial in the claim notes"
                - "Log the month's denial rate and recovered amount @recurring(monthly:9)"
            - name: Remittance posting and underpayment checks
              description: |-
                ## Purpose
                Insurer payments arrive as bulk deposits with a remittance advice listing dozens of claims, and posting them carelessly hides short payments and wrong adjustments. Posting every line, comparing paid against contracted, and flagging differences above a set amount stops quiet underpayments becoming normal.

                ## Milestones
                1. Every remittance posted line by line within two working days of receipt.
                2. Each deposit matched to its remittance advice and to the bank.
                3. Lines paid below the contracted rate by more than a set amount flagged for follow-up.
                4. Contractual adjustments separated from write-offs in the system.

                ## Notes
                Where insurers send electronic remittance files, auto-posting saves hours, but someone must still review the exceptions it cannot match.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All remittances are posted within two working days and every underpayment above the threshold has a follow-up note."
                cadence: rolling
              tasks:
                - "Set a variance amount above which an underpayment is flagged"
                - "Post the week's remittances and match deposits to the bank @recurring(weekly:mon)"
                - "List flagged underpayments with claim number and expected amount"
                - "Send underpayment queries to each insurer's provider line"
            - name: Pre-authorisation tracker
              description: |-
                ## Purpose
                Imaging, surgery, extended therapy courses and some medicines need insurer approval in advance, and approvals expire or cap the number of visits. A tracker of every pending and active authorisation, with its reference, approved units and end date, prevents treating past the approval and then being refused payment.

                ## Milestones
                1. A list of services that need prior approval for each major insurer.
                2. Every authorisation logged with reference number, approved units and end date.
                3. Requests submitted at least five working days before the planned treatment.
                4. Patients nearing their approved visit count flagged before the last approved visit.

                ## Notes
                Keep the approval letter or portal screenshot attached to the patient record. A reference number written on a sticky note will not survive an appeal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every service needing prior approval has a logged authorisation before treatment, and no claim in a quarter is denied for missing or expired approval."
                cadence: rolling
              tasks:
                - "List the services each major insurer requires prior approval for"
                - "Set up an authorisation log with reference, units and end date"
                - "Review pending requests and approvals near their limit @recurring(weekly:mon,thu)"
                - "Attach each approval letter to the patient record"
            - name: Monthly patient statement cycle
              description: |-
                ## Purpose
                Patient balances grow when statements go out irregularly, show confusing codes or arrive months after the visit. A fixed monthly cycle of clear statements, a reminder and then a phone call gives patients a predictable process and gives staff a clear point at which to escalate.

                ## Milestones
                1. Statements rewritten in plain language with visit date, insurer paid amount and balance due.
                2. Statements sent on the same date each month by post, email or text link.
                3. A reminder at 30 days and a call at 60 days for unpaid balances.
                4. Patient balances over 90 days falling month on month.

                ## Notes
                Statements that show what the insurer paid get paid faster. Patients are more willing to settle a balance they can understand.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Statements go out on a fixed day each month for twelve months and patient balances over 90 days fall for three months running."
                cadence: cyclic
              tasks:
                - "Rewrite the statement layout so patients can read it without codes"
                - "Send the monthly patient statement run @recurring(monthly:5)"
                - "Call patients with balances over 60 days using the agreed script"
                - "Track patient balances over 90 days on the monthly log"
            - name: Insurer aging follow-up rhythm
              description: |-
                ## Purpose
                Claims that were accepted but never paid drift into the older buckets unnoticed, and many insurers have strict limits on how late you can chase. Working the insurer aging report each week from the oldest end, with a note of every call and portal check, keeps old claims moving before their window closes.

                ## Milestones
                1. Insurer balances over 30 days reviewed every week, oldest first.
                2. A status check by portal or phone recorded on every claim over 45 days.
                3. Claims near the insurer's filing or follow-up limit escalated the same week.
                4. Insurer balances over 90 days below an agreed share of the total.

                ## Notes
                Record the date, person spoken to and reference number for every call. Without them, a follow-up has no value in a dispute.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every insurer claim over 45 days has a dated status note and insurer balances over 90 days stay below the agreed share for a quarter."
                cadence: rolling
              tasks:
                - "Agree the share of insurer balances allowed over 90 days"
                - "Work the insurer aging report from the oldest claims @recurring(weekly:tue)"
                - "Escalate any claim within 30 days of its filing limit"
                - "Note the date, contact and reference of each status check"
            - name: Month-end billing close
              description: |-
                ## Purpose
                Without a close, the billing figures shift every time someone runs a report and nobody can say what last month actually earned. A month-end routine that locks the period, ties charges, payments and adjustments to the ledger and the bank, and records the key numbers gives the owner a figure to trust.

                ## Milestones
                1. Charges, payments and adjustments for the month tied to the accounting ledger.
                2. Bank deposits for the month matched to posted payments.
                3. The billing period locked so back-dated changes need approval.
                4. A one-page billing summary sent to the owner by the fifth working day.

                ## Notes
                Start from the **Month-end close** template. Agree with your accountant whether income is recorded when billed or when received, and keep to it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Each month has a locked billing period, a reconciliation to ledger and bank, and a summary delivered by the fifth working day."
                cadence: cyclic
              tasks:
                - "Agree the close steps and deadline with your accountant"
                - "Run the month-end billing close and lock the period @recurring(monthly:3)"
                - "Match the month's deposits to posted payments"
                - "Send the owner a one-page billing summary"
            - name: Billing key numbers log
              description: |-
                ## Purpose
                Five numbers tell you most of what you need about billing health: days in receivables, clean claim rate, denial rate, net collection rate and patient balances over 90 days. Logging them on the same day each month shows whether changes are working long before the bank balance does.

                ## Milestones
                1. Definitions written for each of the five numbers so they are calculated the same way.
                2. Twelve months of history back-filled where the data allows.
                3. The five numbers logged each month with a one-line comment.
                4. A target set for each number and reviewed at each quarter's end.

                ## Notes
                Start from the **Metrics log** template. Keep this to billing measures; wider practice finances belong in the practice dashboard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The five billing numbers are logged monthly for at least six months against written definitions and targets."
                cadence: rolling
              tasks:
                - "Write a one-line definition for each of the five billing numbers"
                - "Back-fill as many past months as the system reports allow"
                - "Log the five billing numbers with a comment @recurring(monthly:8)"
                - "Set a quarterly target for each number"
            - name: Credit balance and refund review
              description: |-
                ## Purpose
                Overpayments from insurers and patients pile up as credit balances, and holding money that belongs to someone else creates complaints, insurer clawbacks and in some places legal duties. A monthly review that refunds or applies every credit within a set time keeps the books honest.

                ## Milestones
                1. A report of every account in credit with amount and age.
                2. Each credit traced to its cause: duplicate payment, insurer overpayment or posting error.
                3. Refunds approved by a second person and paid within the time your policy sets.
                4. No credit balance older than 60 days without a documented reason.

                ## Notes
                Rules on unclaimed money and insurer overpayment refunds vary by country and contract. Ask your accountant what applies to you.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The credit balance report shows no item older than 60 days without a documented reason, reviewed monthly for six months."
                cadence: cyclic
              tasks:
                - "Run the credit balance report and sort by age"
                - "Review and resolve every credit balance @recurring(monthly:20)"
                - "Get second person approval for each refund"
                - "Note the cause of each credit to spot repeat posting errors"
            - name: Reading benefit statements and remittance advice
              description: |-
                ## Purpose
                A remittance advice packs billed amount, allowed amount, contractual adjustment, patient responsibility and reason codes into a dense line, and misreading it leads to wrong write-offs and wrong patient bills. Learning to read one fluently is the core skill behind accurate posting and confident patient conversations.

                ## Milestones
                1. Each column of your main insurers' remittance advice explained in your own words.
                2. The difference between contractual adjustment and patient responsibility clear.
                3. Five real remittance lines worked through and checked by an experienced biller.
                4. A one-page guide written for new billing staff.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five real remittance lines are correctly interpreted and checked, and a one-page reading guide is filed for staff."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Print one remittance advice from each of your two largest insurers"
                - "Label every column with what it means"
                - "Work through five lines with an experienced biller"
                - "Write a one-page guide for new staff from your notes"
            - name: Denial reason codes and what fixes them
              description: |-
                ## Purpose
                Reason and remark codes on a denial point to the fix, but only if you know the vocabulary: a missing authorisation, a non-covered service, a duplicate, an eligibility problem or a timely filing lapse each need different action. Building a short table of the codes you actually see, with the right response, speeds up every denial session.

                ## Milestones
                1. The twenty reason codes most often seen in the last six months listed.
                2. Each code paired with its meaning and the usual corrective action.
                3. Codes marked as preventable at registration, at charge entry or not preventable.
                4. The table added to the denial work queue folder.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A table of the twenty most common denial codes with meaning, fix and preventable stage is in use in the denial queue."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Export six months of denials with their reason codes"
                - "Rank the codes by count and by amount"
                - "Ask the agent to draft a meaning and fix for each of the top twenty"
                - "Check the draft against insurer guidance before using it"
            - name: Documentation that supports a claim
              description: |-
                ## Purpose
                Insurers pay for what the notes show was necessary and done, so a claim with thin documentation is exposed to denial and later recovery. Clinicians do not need to become billers, but a short session on what the notes must contain for your common services protects both income and the clinician's name.

                ## Milestones
                1. The documentation requirements for your ten most common services gathered from insurer policies.
                2. A sample of ten notes compared against those requirements.
                3. A 30 minute session held with clinicians on the gaps found.
                4. A follow-up sample three months later showing fewer gaps.

                ## Notes
                The aim is accurate notes, never notes written to fit a code. Clinical judgement decides what is recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two documentation samples three months apart show fewer gaps against insurer requirements, with the clinician session recorded."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect insurer documentation policies for your ten most common services"
                - "Review ten recent notes against those policies"
                - "Book a 30 minute session with the clinicians to share the findings"
                - "Repeat the ten-note sample three months later"
            - name: Coordination of benefits and secondary claims
              description: |-
                ## Purpose
                Two policies, a spouse's plan or a public scheme plus private cover create claims that must be sent in the right order, and getting it wrong means both insurers refuse. Knowing the order of benefit rules and how to send a secondary claim with the primary's payment details recovers money that is otherwise written off.

                ## Milestones
                1. The usual rules for which policy pays first understood for your main payers.
                2. A registration question added to capture every patient's second policy.
                3. A worked example of a secondary claim submitted with primary payment details.
                4. Secondary balances listed and worked each month.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Secondary policies are captured at registration and at least one secondary claim is submitted and paid using the correct order."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read each main insurer's coordination of benefits section"
                - "Add a second policy question to the registration form"
                - "Submit one secondary claim with the primary's payment details attached"
                - "List open secondary balances and their primary payer"
            - name: Front desk scripts for money conversations
              description: |-
                ## Purpose
                Reception staff often avoid asking for payment because they do not know what to say, and patients sense the discomfort. A handful of short, kind scripts for collecting copays, explaining an estimate, raising an old balance and offering a plan makes the conversation routine instead of awkward.

                ## Milestones
                1. Scripts written for copay collection, estimates, old balances and payment plans.
                2. Each script practised in role play by every front desk team member.
                3. Point of service collection rate measured before and after.
                4. Scripts reviewed after a month using staff feedback.

                ## Notes
                Use the patient's name, state the amount plainly and ask how they would like to pay. Offering choices works better than asking whether they can pay today.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Four scripts are in use, every front desk staff member has practised them, and point of service collection is higher after one month."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Measure the share of copays collected at the visit last month"
                - "Write four short scripts for the common money conversations"
                - "Run a 20 minute role play with each front desk staff member"
                - "Collect feedback after a month and adjust the wording"
            - name: Writing appeals that get paid
              description: |-
                ## Purpose
                Many practices give up on denials that a clear, well-supported appeal would overturn. Learning each insurer's appeal route, levels and deadlines, and keeping a set of model letters with the right attachments, raises recovery on denials you know were wrong.

                ## Milestones
                1. Appeal levels, addresses and deadlines recorded for each major insurer.
                2. Three model appeal letters written for your most common appealable denials.
                3. A checklist of attachments for each letter: notes, authorisation, policy extract.
                4. Appeal success rate tracked for six months.

                ## Notes
                State the claim, the denial reason, why it is wrong and what you want, on one page. Attach the evidence rather than describing it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Model letters exist for the three most common appealable denials and appeal outcomes are tracked for six months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Record each major insurer's appeal levels and deadlines"
                - "Draft three model letters for your most common appealable denials"
                - "Write an attachment checklist for each letter"
                - "Log every appeal sent and its outcome"
            - name: Insurer policy bulletin watch
              description: |-
                ## Purpose
                Coverage rules, authorisation lists and billing requirements change through insurer newsletters and portal notices, and a missed bulletin can mean a month of denials. A short monthly read of each major insurer's updates, with changes passed to the people affected, catches problems before claims bounce.

                ## Milestones
                1. Every major insurer's provider bulletin or news page subscribed to by the billing lead.
                2. Bulletins read monthly and relevant changes logged with an effective date.
                3. Changes passed to the front desk or clinicians before they take effect.
                4. A note added to the coding sheet or authorisation list when either changes.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log shows each month's insurer changes with effective dates and the staff told, for six consecutive months."
                cadence: rolling
              tasks:
                - "Subscribe the billing inbox to each major insurer's provider updates"
                - "Read insurer bulletins and log any changes @recurring(monthly:14)"
                - "Tell affected staff about each change before its effective date"
                - "Update the authorisation list when an insurer changes its rules"
            - name: In-house billing versus an outsourced billing service
              description: |-
                ## Purpose
                Outsourcing billing can bring expertise and cover for absences, but it costs a share of collections and moves control outside the practice. Comparing your current cost per claim and results with two or three billing services, on the same measures, makes the choice on evidence rather than frustration.

                ## Milestones
                1. The full cost of in-house billing calculated, including staff time, software and clearinghouse fees.
                2. Proposals from at least two billing services on a like-for-like basis.
                3. Each option scored on cost, reporting, data access, contract exit and data protection terms.
                4. A decision recorded with reasons and a review date.

                ## Notes
                Start from the **Vendor** template. Confirm that you own the data and can export it at any time, and read the exit clause before the price.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares in-house cost and results with at least two billing service proposals on the same measures."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Add up last year's in-house billing cost including staff and software"
                - "Request proposals from two or three billing services"
                - "Score each option on cost, reporting, data access and exit terms"
                - "Record the decision and a date to review it"
            - name: Choosing a claims clearinghouse
              description: |-
                ## Purpose
                The clearinghouse decides how quickly claims reach insurers, how clearly rejections come back and whether eligibility and remittances flow automatically. When rejections are hard to read or key insurers are missing, a structured comparison of two or three options is worth the effort.

                ## Milestones
                1. A list of the insurers you must reach and the features you need.
                2. Two or three clearinghouses compared on payer coverage, fees and integration with your system.
                3. References from similar practices checked.
                4. A clearinghouse chosen with a switchover date agreed.

                ## Notes
                Start from the **Purchase decision** template. Check that your billing software supports the clearinghouse before comparing prices.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A clearinghouse is chosen against a written comparison of at least two options, with a switchover date agreed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the insurers and features the clearinghouse must cover"
                - "Confirm which clearinghouses your billing software supports"
                - "Compare two or three on coverage, fees and reporting"
                - "Call two practices that use your preferred option"
            - name: Card on file and online payment options
              description: |-
                ## Purpose
                Patients pay faster when paying is easy: a text link, an online portal or a card stored with consent and charged once the insurer has paid. Choosing the payment options that suit your patients, with clear consent and security rules, cuts statement costs and old balances.

                ## Milestones
                1. Current payment methods and their costs listed.
                2. Options compared for text-to-pay, online portal and card on file with written consent.
                3. Card security handled by the payment provider so the practice never stores card numbers.
                4. The chosen options live and explained on statements and at reception.

                ## Notes
                Never write card numbers on paper or store them in the patient record. Use a provider that keeps the card securely on its side.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one electronic payment option is live, card storage is handled only by the provider, and consent forms are in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List current payment methods and what each costs per transaction"
                - "Ask your billing software which payment providers it integrates with"
                - "Draft a card on file consent form with your provider's wording"
                - "Add the payment link to statements and reception signage"
            - name: Patient payment plan rules
              description: |-
                ## Purpose
                Without rules, payment plans are agreed ad hoc, run for years and are rarely followed up. A short policy on who qualifies, the shortest and longest terms, the minimum monthly amount and what happens after a missed payment lets staff say yes quickly and fairly.

                ## Milestones
                1. Eligibility, minimum amount and maximum length written down.
                2. A plain plan agreement the patient signs, with automatic payment where possible.
                3. Missed payment steps set out: reminder, call, then review.
                4. All active plans listed and checked against the new rules.

                ## Notes
                In some countries offering credit or charging interest brings consumer credit rules into play. Check with your accountant or adviser before adding interest or fees.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written payment plan policy and agreement are in use and every active plan is listed and checked against them."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every current payment plan with balance and monthly amount"
                - "Write the eligibility, minimum and maximum terms on one page"
                - "Prepare a simple plan agreement for patients to sign"
                - "Check active plans for missed payments @recurring(monthly:24)"
            - name: Cost estimates for self-pay and high deductible patients
              description: |-
                ## Purpose
                Patients who pay a large share themselves want to know the cost before they agree to treatment, and in some countries giving a written estimate is a legal duty. A simple estimate process for your common services builds trust and reduces disputes and unpaid balances afterwards.

                ## Milestones
                1. Any rules on written estimates in your country or scheme checked.
                2. Standard estimates prepared for your twenty most common self-pay services.
                3. An estimate form that shows the service, expected insurer payment and patient amount.
                4. Estimates given before treatment and filed with the patient record.

                ## Notes
                An estimate is not a quote: say clearly what could change the final amount. Keep a copy for at least as long as the claim could be disputed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An estimate form is in use for self-pay and high deductible patients, with standard estimates for twenty services and copies filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether written estimates are required in your country or scheme"
                - "List the twenty services self-pay patients most often ask about"
                - "Build an estimate form with service, insurer share and patient share"
                - "Train reception to give and file the estimate before treatment"
            - name: Fixing the top three denial causes
              description: |-
                ## Purpose
                Working denials one by one recovers money, but preventing them is where the real saving lies. Taking the three denial reasons that cost the most over the last six months and fixing each at its source, whether registration, authorisation or coding, cuts the queue for good.

                ## Milestones
                1. The three denial reasons with the highest total value over six months identified.
                2. A root cause written for each, with the step in the billing map where it starts.
                3. A specific fix in place for each: a system edit, a checklist or a training session.
                4. Denials for those three reasons down by at least half three months later.

                ## Notes
                Start from the **Remediation plan** template. A system edit that stops a bad claim leaving the building beats any amount of reminding.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Denials for the three chosen reasons fall by at least half over the three months after the fixes go in."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Rank six months of denials by total value per reason"
                - "Trace each of the top three to the step where it starts"
                - "Put one specific fix in place for each cause"
                - "Compare denial counts for those reasons three months later"
            - name: Renegotiating the lowest paying insurer contract
              description: |-
                ## Purpose
                Contracts signed years ago often pay well below what the same insurer pays newer practices, and insurers rarely raise rates without being asked. Preparing a case with your volumes, quality measures and the rates you need, and asking at the right point in the renewal cycle, is the most direct way to raise income per visit.

                ## Milestones
                1. The insurer with the lowest payment for your top codes identified from the rate table.
                2. A one-page case prepared with volumes, patient access and any quality data.
                3. A written request for new rates sent before the contract notice date.
                4. The outcome recorded and new rates loaded, or a decision made on continuing.

                ## Notes
                Talk to a healthcare contracts adviser or lawyer before threatening to leave a network. Understand the notice period and what happens to patients mid-treatment.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written rate request is sent to the lowest paying insurer before its notice date and the outcome and new rates are recorded."
                cadence: phased
                effort_hours_estimate: "14"
              tasks:
                - "Compare each insurer's rates for your top ten codes side by side"
                - "Note the lowest payer's contract renewal and notice dates"
                - "Draft a one-page case for higher rates with your volumes"
                - "Send the written request to the insurer's provider contracting team"
            - name: Write-off and collections agency policy
              description: |-
                ## Purpose
                Old balances are either chased forever, which wastes staff time, or written off quietly, which hides problems and invites abuse. A policy that says when a balance is written off, who approves it and whether an agency is used, with hardship cases handled kindly, makes the decision consistent.

                ## Milestones
                1. Write-off thresholds and approval levels set by amount.
                2. A hardship process that lets staff reduce or waive balances with approval.
                3. A decision made on using a collections agency, with its rules and fees checked.
                4. Write-offs reported monthly by reason and approver.

                ## Notes
                Sending a patient to collections affects the relationship and possibly their credit. Some insurer contracts and public schemes also limit it, so check before choosing an agency.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written write-off and hardship policy with approval levels is in use and monthly write-offs are reported by reason and approver."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total last year's write-offs by reason and size"
                - "Set write-off approval levels by amount"
                - "Write a short hardship process with an approval step"
                - "Review two collections agencies' fees and patient contact rules"
            - name: Annual insurer contract renewal season
              description: |-
                ## Purpose
                Insurer contracts renew on their own cycles, often with a short window to give notice or request changes, and a missed window locks in another year of the same rates. Reviewing every contract ahead of its renewal date each year keeps renewals deliberate.

                ## Milestones
                1. A renewal calendar showing each contract's renewal and notice dates.
                2. Each contract's payments and denial rate reviewed three months before renewal.
                3. A keep, renegotiate or leave decision recorded for each insurer.
                4. Any new rates or terms loaded into the system on their effective date.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every insurer contract has a recorded keep, renegotiate or leave decision made before its notice date this year."
                cadence: cyclic
              tasks:
                - "Build a calendar of every contract's renewal and notice dates"
                - "Review the year's contract renewal calendar @recurring(yearly)"
                - "Pull payment and denial figures for each insurer before its notice date"
                - "Record the decision for each contract and the reason"
            - name: Start of plan year deductible reset
              description: |-
                ## Purpose
                When insurance plan years restart, many patients have new deductibles, new cards or new plans, and the first weeks bring a wave of surprise balances and eligibility denials. Preparing staff and patients beforehand smooths the busiest billing month of the year.

                ## Milestones
                1. Patients reminded to bring new insurance cards to their first visit of the plan year.
                2. Eligibility rechecked for every patient in the first weeks of the new year.
                3. Front desk briefed on explaining reset deductibles.
                4. Point of service collections raised for the reset period.

                ## Notes
                Plan years do not all start in January. Check your main insurers and employer groups so you prepare for the right month.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before the plan year starts, patient reminders are sent and staff briefed, and every patient seen in the first month has a fresh eligibility check."
                cadence: cyclic
              tasks:
                - "Find the plan year start month for your main insurers"
                - "Send patients a reminder to bring new cards @recurring(yearly)"
                - "Brief the front desk on explaining reset deductibles"
                - "Recheck eligibility for every patient in the first month"
            - name: Billing system or clearinghouse cutover
              description: |-
                ## Purpose
                Changing billing software or clearinghouse is when claims go missing, balances double and old accounts become impossible to work. A planned cutover that runs old receivables out on the old system, tests the new one with live claims and freezes changes for a week keeps cash flowing through the change.

                ## Milestones
                1. A cutover date chosen away from month end and holidays.
                2. Open receivables either worked out on the old system or migrated and checked line by line.
                3. Test claims to each major insurer accepted through the new route.
                4. A one-week post cutover check of rejections, postings and deposits.

                ## Notes
                Keep read access to the old system for as long as claims from it could still be paid, appealed or audited.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The cutover completes with test claims accepted by every major insurer and no unexplained gap in receivables one week later."
                cadence: one-shot
                effort_hours_estimate: "30"
              tasks:
                - "Choose a cutover date away from month end and holidays"
                - "Decide which receivables stay on the old system and which migrate"
                - "Send test claims to each major insurer through the new route"
                - "Compare receivables totals before and after cutover"
            - name: Responding to an insurer audit or records request
              description: |-
                ## Purpose
                Insurers and public schemes sometimes ask for notes behind a set of claims, and a slow or incomplete answer can lead to repayment demands across a whole sample. Having a calm, logged process for gathering records, checking them and replying before the deadline protects the practice.

                ## Milestones
                1. The request logged with claims listed, deadline and the insurer's contact.
                2. Records gathered and checked for completeness without changing anything.
                3. Advice taken from a healthcare lawyer or adviser where repayment is at stake.
                4. A complete response sent before the deadline, with a copy kept.

                ## Notes
                Never alter or add to notes after the request arrives. A late entry made in response looks worse than a gap.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The audit response is sent before the deadline with every requested record, and a copy and log are filed."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Log the request, the claims listed and the response deadline"
                - "Gather and copy the records for each listed claim"
                - "Book a call with your adviser if repayment could be demanded"
                - "Send the response by a tracked route and file a copy"
            - name: Year-end patient balance clean-up
              description: |-
                ## Purpose
                Small balances, unapplied payments and old plans accumulate through the year and make every report harder to trust. A planned clean-up in the last quarter, before statements and accounts are finalised, starts the new year with balances that mean something.

                ## Milestones
                1. All patient balances under a set small amount reviewed and resolved.
                2. Unapplied payments matched to visits or refunded.
                3. Dormant payment plans closed or restarted.
                4. The year's write-offs and refunds summarised for the accountant.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "By year end, small balances and unapplied payments are resolved and a write-off and refund summary is with the accountant."
                cadence: cyclic
              tasks:
                - "Run a report of patient balances below a set small amount"
                - "Match unapplied payments to visits or refund them"
                - "Close or restart any dormant payment plans"
                - "Plan the year-end balance clean-up with your accountant @recurring(yearly)"
            - name: Solo practitioner doing your own billing
              description: |-
                ## Purpose
                Clinicians running a small practice alone often do billing in the evenings, and things slip when clinical days are full. A pared-down routine with two short billing slots a week, batch eligibility and an outside biller for denials only can keep claims moving without eating every evening.

                ## Milestones
                1. Two fixed billing slots a week protected in the diary.
                2. Batch eligibility and claim release done in the first slot.
                3. Remittances, rejections and patient balances done in the second.
                4. A decision made on paying an outside biller for denials and appeals only.

                ## Notes
                If billing is still slipping after two months, the hours you spend may be worth more seeing patients. Compare that figure with an outside biller's fee.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Two billing slots a week are kept for eight weeks and charge lag stays under three days throughout."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Block two 90 minute billing slots in your weekly diary"
                - "Write the steps for each slot on one card"
                - "Ask an outside biller for a price on denials and appeals only"
                - "Check charge lag at the end of eight weeks"
            - name: Taking over billing from a departing biller
              description: |-
                ## Purpose
                When the one person who knows the billing leaves, passwords, unwritten habits and half-worked appeals go with them. A structured handover in their notice period, with logins transferred, queues documented and open items listed, keeps cash from stopping.

                ## Milestones
                1. Every system login, portal account and clearinghouse access transferred to practice-owned accounts.
                2. A written list of open appeals, payment plans and insurer queries.
                3. Daily and weekly routines written down as the leaver actually does them.
                4. The replacement or owner working the queues alongside the leaver for at least a week.

                ## Notes
                Insurer portal accounts are often registered to a person's own email. Move them to a practice address before the last day.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All billing accounts are practice-owned, open items are listed and routines are written before the departing biller's last day."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List every login and portal the departing biller uses"
                - "Move each account to a practice-owned email address"
                - "Have the biller write their daily and weekly routine step by step"
                - "Shadow the biller through each queue before their last day"
            - name: Inherited receivables after buying a practice
              description: |-
                ## Purpose
                A purchased practice usually comes with old claims and patient balances whose ownership depends on the sale agreement, and patients do not care who owns them. Sorting which balances belong to the seller, collecting your own cleanly and agreeing how payments for the seller's period are passed on prevents disputes in the first year.

                ## Milestones
                1. The sale agreement's terms on receivables confirmed with your adviser.
                2. Balances split by date of service into seller and buyer periods.
                3. A process agreed for passing on payments that arrive for the seller's period.
                4. Insurer payee details changed so new claims pay the new owner.

                ## Notes
                Changing the payee on insurer contracts can take weeks. Agree in writing with the seller how payments made to the old details will reach you.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Receivables are split by period, a written payment pass-on process is agreed with the seller, and insurer payee details are updated."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Read the receivables clause of the sale agreement with your adviser"
                - "Split open balances into seller and buyer periods by service date"
                - "Agree in writing how payments for the seller's period are passed on"
                - "Submit payee change forms to each insurer"
            - name: Self-pay and cash practice receipts
              description: |-
                ## Purpose
                Practices that mostly see self-pay patients, common in therapy, aesthetics, optometry retail and many Caribbean settings, still need tidy billing: receipts patients can claim back, deposits for long treatments and clear records of every payment. A simple self-pay system is quicker than chasing insurers but just as easy to get wrong.

                ## Milestones
                1. A receipt format that patients can send to their own insurer for reimbursement.
                2. A deposit and balance rule for courses of treatment or large orders.
                3. Every cash and card payment recorded against a visit on the same day.
                4. A monthly check that receipts issued match takings banked.

                ## Notes
                Patients claiming from their own insurer need your provider details, dates, codes and amounts on the receipt. Ask a few insurers what they require.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A reimbursement-ready receipt and a deposit rule are in use, and receipts match takings banked for three consecutive months."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask two insurers what a patient receipt must show for reimbursement"
                - "Redesign the receipt with those details included"
                - "Write a deposit rule for courses of treatment"
                - "Compare receipts issued with takings banked @recurring(monthly:27)"
            - name: Public scheme and government programme claims
              description: |-
                ## Purpose
                Public health schemes, national insurance programmes and government drug or treatment plans often have their own forms, claim cycles and payment delays quite unlike private insurers. Learning the rules of the schemes you serve, and tracking their claims separately, protects a slice of income that can otherwise run months late.

                ## Milestones
                1. The current claim rules, forms and deadlines obtained from each scheme you serve.
                2. Scheme claims tracked separately with submission and expected payment dates.
                3. A named contact at each scheme for queries.
                4. Average days to payment for each scheme measured over a quarter.

                ## Notes
                Scheme rules change with government budgets and policy. Check the scheme's official website or office each year rather than relying on last year's forms.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each public scheme's current rules are on file, its claims are tracked separately, and days to payment are measured for a full quarter."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List every public scheme or government programme the practice bills"
                - "Download the current claim rules and forms from each scheme's official source"
                - "Set up a separate tracker for scheme claims and payment dates"
                - "Chase scheme claims older than their usual payment cycle @recurring(monthly:16)"
            - name: Workplace injury and accident claims
              description: |-
                ## Purpose
                Treatment after a workplace injury or a road accident is often paid by an employer's insurer, a workers' compensation body or a motor insurer, each with case numbers, adjusters and reports to send. Handling these as their own claim type, with the case details captured at the first visit, avoids sending them to the patient's health insurer and being refused by everyone.

                ## Milestones
                1. A registration question that flags injury and accident cases at the first visit.
                2. Claim number, adjuster contact and employer or insurer details captured for each case.
                3. Required progress reports and their due dates tracked per case.
                4. Open accident and injury claims reviewed monthly.

                ## Notes
                Some of these cases end up in legal proceedings. Keep billing records complete and factual, and pass any request from a lawyer to the owner.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every injury or accident case has its claim details captured at the first visit and its open claims reviewed each month."
                cadence: rolling
              tasks:
                - "Add an injury or accident question to the registration form"
                - "Create a case sheet for claim number, adjuster and report dates"
                - "Review open injury and accident claims @recurring(monthly:12)"
                - "Send each required progress report to the adjuster on time"
            - name: Billing compliance self-audit
              description: |-
                ## Purpose
                Billing errors that favour the practice, even honest ones, can lead to repayment demands, contract termination or regulatory action if an insurer finds them first. A yearly self-audit of a random claim sample against notes and contracts, done with a qualified coder, finds patterns early and shows good faith.

                ## Milestones
                1. A random sample of claims per clinician chosen by someone outside the billing team.
                2. Each claim checked against the notes, the code billed and the contract.
                3. Errors in either direction listed with their value and cause.
                4. Corrections, repayments and training agreed with your adviser where needed.

                ## Notes
                Start from the **Compliance control** template. If the audit finds a pattern of overpayment, take advice on how and when to repay before contacting the insurer.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A written audit of a random claim sample per clinician is completed with errors valued, causes named and corrective actions agreed."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Book a qualified coder for the self-audit"
                - "Pick a random sample of claims for each clinician"
                - "Record each error found, its direction, value and cause"
                - "Schedule the annual billing self-audit @recurring(yearly)"
            - name: Underpayment recovery from contract variance
              description: |-
                ## Purpose
                Once contracted rates are loaded, a variance report shows every line the insurer paid below contract, and the totals are often surprising. Working through a year of variances by insurer and code, and presenting them as a batch, recovers money and often fixes the insurer's setup for the future.

                ## Milestones
                1. A variance report for the last twelve months by insurer and code.
                2. True underpayments separated from patient responsibility and correct adjustments.
                3. A batch request for each insurer with claim numbers and expected amounts.
                4. Amounts recovered recorded and any insurer system errors confirmed fixed.

                ## Notes
                Check each contract's time limit for disputing a payment before you start. Older variances may be out of time.
              priority: medium
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Batch underpayment requests are sent to each insurer with confirmed variances and the amounts recovered are recorded."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Run a twelve month paid versus contracted variance report"
                - "Separate true underpayments from correct adjustments"
                - "Ask the agent to draft a batch underpayment letter per insurer"
                - "Record each insurer's response and the amount recovered"
            - name: Front office theft and fraud controls
              description: |-
                ## Purpose
                Embezzlement in small practices most often happens through voided receipts, unexplained write-offs and cash that never reaches the bank, usually by a trusted long-serving employee. A few owner checks each month, with a surprise audit once a year, make theft hard to hide and protect honest staff from suspicion.

                ## Milestones
                1. A monthly owner review of voids, adjustments, write-offs and refunds by user.
                2. Bank statements delivered directly to the owner and read each month.
                3. A surprise cash and receipt audit done at least once a year.
                4. Fidelity or crime insurance cover checked with your broker.

                ## Notes
                Insist that every billing employee takes at least one full week of leave a year, with someone else working their queues. Many schemes come to light only then.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The owner reviews voids, adjustments and bank statements monthly for a year and one surprise audit is completed and recorded."
                cadence: rolling
              tasks:
                - "Arrange for bank statements to go directly to the owner"
                - "Review voids, write-offs and refunds by user @recurring(monthly:18)"
                - "Plan an unannounced cash and receipt audit this year"
                - "Ask your broker whether the practice has fidelity or crime cover"
---

# Patient Billing and Insurance Claims

This area is for the owner of a clinic, dental, physiotherapy, therapy, optometry or veterinary practice who wants to be paid fully and promptly for care already given, and for the practice manager or billing lead who does the work. It starts with foundations (a map of how a visit becomes money, the payer mix, contracted rates, clean registration, eligibility checks, a written financial policy and an honest receivables baseline), then the daily and weekly machinery of claims, rejections, denials, remittances and statements, the knowledge of codes, benefit statements and appeals, the decisions about outsourcing, clearinghouses and payment options, the dated events of contract renewals and deductible resets, the situations of solo, inherited, self-pay and public scheme billing, and finally specialist work on compliance audits, underpayment recovery and front office theft controls.

What repeats is a daily close and claim release, weekly rejection, denial, remittance and aging queues, a twice weekly pre-authorisation check, monthly statements, credit balance reviews and a month-end billing close with its key numbers logged, and a yearly round of contract renewals and deductible reset preparation. The Metrics log, Month-end close, Vendor, Purchase decision, Remediation plan, Compliance control and Operational checklist templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
