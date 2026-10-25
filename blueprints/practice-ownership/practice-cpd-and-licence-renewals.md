---
id: practice-ownership.practice-cpd-and-licence-renewals
name: Practice CPD and Licence Renewals
description: "One register of every professional's licence, renewal date, CPD hours and certificates, with reminders that fire months ahead, an audit-ready evidence folder and a clear rule for what happens if anything lapses."
category: business
version: 1.0.0
tags: [practice-ownership, practice-cpd-and-licence-renewals, small-business, team, cpd, licence-renewals, continuing-education, credentials]
author: Aurum Technology
starter_structure:
  templates:
    - skills-matrix
    - compliance-control
    - development-plan
    - training-program
    - reading-queue
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice CPD and Licence Renewals
          description: "Tracking licences and continuing education across a practice: each professional's renewal dates, CPD hours, certificates and reminders before anything lapses."
          projects:
            - name: Licence and registration register for every professional
              description: |-
                ## Purpose
                Most practices hold licence details in a dozen places: HR files, email confirmations, the regulator's portal and people's own memories. A single register listing each professional's regulator, registration number, class or category, conditions and expiry date is the record every other project in this area reads from.

                ## Milestones
                1. Every registered professional in the practice listed, including part-time, salaried partner and associate staff.
                2. For each one, the regulator, registration number, category and expiry date recorded from the certificate itself.
                3. Any conditions, restrictions or endorsements on a registration noted in its own column.
                4. The register saved in one shared location with edit rights limited to the named owner.

                ## Notes
                Start from the **Skills matrix** template, with one row per professional and one column per licence or certificate. Copy numbers from the certificate, never from memory or an old CV.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared register lists every professional with regulator, registration number, category, conditions and expiry date taken from current certificates."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every professional on the payroll or partner schedule who needs a licence to practise"
                - "Ask each professional for a copy of their current registration certificate"
                - "Enter regulator, number, category, conditions and expiry for each person"
                - "Restrict edit access to the register to the person responsible for it"
            - name: Practice renewal calendar for the whole team
              description: |-
                ## Purpose
                Renewal dates scattered across the year are easy to miss, and some regulators renew everyone on one fixed date while others renew on each person's anniversary. Putting every expiry, CPD cycle end and declaration deadline on one practice calendar shows the busy months in advance and stops a lapse from arriving as a surprise.

                ## Milestones
                1. Every licence expiry, CPD cycle end and declaration date from the register entered on one shared calendar.
                2. Fixed-date renewals and anniversary renewals marked differently so the busy months stand out.
                3. Each entry naming the professional, the regulator and the action needed.
                4. The calendar shared with the practice manager and each professional's own entries visible to them.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar shows every licence expiry, CPD cycle end and declaration deadline in the practice for the next 24 months."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Export expiry and cycle end dates from the credential register"
                - "Create a shared practice calendar just for licence and CPD dates"
                - "Enter each date with the professional's name and the action needed"
                - "Mark the months where three or more renewals fall together"
            - name: CPD requirements summary for each profession
              description: |-
                ## Purpose
                Mixed practices can employ a dentist, a hygienist, a dental nurse and a radiographer, each with different hours, cycle lengths, compulsory topics and evidence rules. A one-page summary per profession, written from the regulator's current published rules, means nobody has to guess what counts.

                ## Milestones
                1. Each profession in the practice matched to the regulator that sets its CPD rules.
                2. For each profession, the cycle length, required hours or points, compulsory topics and evidence rules summarised on one page.
                3. The source document and the date it was checked written at the foot of each summary.
                4. The summaries filed beside the register and shared with the professionals they cover.

                ## Notes
                Rules change, sometimes mid-cycle. Copy the regulator's own wording for anything mandatory rather than paraphrasing it, and check the summary again when the regulator issues guidance.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page CPD summary exists for every profession in the practice, each citing the regulator document it was taken from."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List each distinct profession and grade that works in the practice"
                - "Download the current CPD rules from each regulator's website"
                - "Write a one-page summary of hours, cycle, compulsory topics and evidence per profession"
                - "Send each summary to the professionals it applies to"
            - name: Shared certificate and CPD evidence folder
              description: |-
                ## Purpose
                When a regulator samples a professional for audit, they usually ask for evidence within a few weeks, and certificates saved in personal inboxes are hard to find. A shared folder with one subfolder per person and per CPD cycle, and a naming rule for files, turns an audit request into a ten-minute job.

                ## Milestones
                1. A folder structure set up with one subfolder per professional and one per CPD cycle inside it.
                2. A file naming rule agreed, such as date, provider, topic and hours.
                3. Existing certificates for the current cycle gathered and filed for every professional.
                4. Access set so each professional can add to their own folder and the owner can see all of them.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every professional has a folder holding the certificates for their current CPD cycle, named to one agreed rule."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create one folder per professional with a subfolder for the current CPD cycle"
                - "Write a one-line file naming rule and pin it at the top of the folder"
                - "Ask every professional to upload this cycle's certificates by a set date"
                - "Check each folder against the CPD summary for missing evidence"
            - name: Public register check for every registration
              description: |-
                ## Purpose
                Certificates on file can be out of date the day after it is copied: registrations get suspended, conditions get added and categories change. Looking up every professional on the regulator's public register confirms what the practice is actually relying on and catches anything the paper record does not show.

                ## Milestones
                1. Each professional looked up on their regulator's online public register.
                2. Name, number, status, conditions and expiry on the public register compared with the practice register.
                3. Any difference raised with the professional and resolved in writing.
                4. A screenshot or printout of each entry filed with the date of the check.

                ## Notes
                Public register checks are what an employer is expected to do, not an intrusion. Tell staff the practice will check periodically so it never feels like suspicion.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every professional's public register entry has been checked, filed with a date and matched to the practice register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the public register search page for each regulator in the practice"
                - "Look up every professional by name and registration number"
                - "Save a dated screenshot of each entry into their evidence folder"
                - "Raise any status or condition mismatch with the professional the same day"
            - name: First audit of lapsed and expiring credentials
              description: |-
                ## Purpose
                Before building reminders, find out what has already slipped. A one-off audit of every licence, mandatory certificate and CPD cycle shows anything expired, anything due in the next 90 days and anyone behind on hours, so the urgent cases are handled first.

                ## Milestones
                1. Every credential in the register sorted into expired, due within 90 days, due within a year and later.
                2. Any expired item escalated to the owner on the day it is found.
                3. Each professional with a renewal due in 90 days given a written list of what they must do.
                4. Anyone more than a quarter behind on CPD hours for their cycle named in a short catch-up list.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "A dated audit lists every expired, 90-day and behind-on-CPD item in the practice, with an owner and action against each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Sort the register by expiry date and highlight anything before today"
                - "Tell the owner about any expired licence before the end of the day @priority(high)"
                - "Email each professional due within 90 days the steps and documents they need"
                - "Compare logged CPD hours with each cycle's target and list who is behind"
            - name: Mandatory certificates with their own expiry dates
              description: |-
                ## Purpose
                The licence is only part of it. Life support training, radiation protection, safeguarding, controlled drugs authority, practising certificates for specific services and indemnity membership numbers all expire on their own timetables. Adding them to the register means a clinic never discovers on inspection day that resuscitation training ran out in March.

                ## Milestones
                1. Every certificate the regulator, insurer or law requires for each role listed.
                2. Each certificate added as a column in the register with its issue and expiry date.
                3. Roles mapped to the certificates they need, so new starters inherit the right list.
                4. Every missing or expired certificate booked for renewal with a date.

                ## Notes
                Ask the indemnity insurer and the regulator what they expect each role to hold. Requirements that sit in guidance rather than law are still what an inspector will ask about.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The register shows every mandatory certificate by role, with no expired item lacking a booked renewal date."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the certificates each role needs besides the professional licence"
                - "Add each certificate as a column in the credential register"
                - "Collect issue and expiry dates for every certificate held"
                - "Book renewal training for certificates expiring in the next quarter @recurring(monthly:22)"
            - name: Named person responsible for licence tracking
              description: |-
                ## Purpose
                In many practices everyone assumes someone else is watching renewals, and the professional assumes the practice will remind them. Naming one person, usually the practice manager, with a written remit and a deputy, settles who chases, who escalates and who tells the owner.

                ## Milestones
                1. One person named as responsible for the credential register, with a deputy for absences.
                2. A short remit written covering updates, reminders, escalation and reporting.
                3. Each professional told in writing that keeping their own licence current is still their duty.
                4. The remit added to the responsible person's job description.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named owner and deputy for licence and CPD tracking are recorded in a written remit that every professional has received."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the person and deputy who will run the credential register"
                - "Write a half-page remit covering updates, reminders and escalation"
                - "Send all professionals a note on who tracks dates and what remains their duty"
                - "Add the remit to the job description of the person responsible"
            - name: Licence clauses in employment and partner contracts
              description: |-
                ## Purpose
                Contracts should say plainly that holding a valid licence is a condition of the role, that the person must tell the practice at once about any lapse, condition or investigation, and what happens to pay if they cannot practise. Checking current contracts against that standard avoids a dispute at the worst moment.

                ## Milestones
                1. Every employment, associate and partner contract checked for a licence and notification clause.
                2. Gaps listed with the contracts that lack them.
                3. Standard wording agreed with the practice's employment lawyer.
                4. The wording added to new contracts and offered as a variation to existing ones.

                ## Notes
                Contract terms are a legal matter. Take wording from your lawyer rather than another practice's contract.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Standard licence and notification wording approved by a lawyer is in every new contract, with variations issued for existing ones."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pull every current employment, associate and partner contract"
                - "Mark which contracts require a valid licence and prompt notice of changes"
                - "Ask the practice's lawyer for standard licence and notification wording"
                - "Issue contract variations to staff whose contracts lack the clause"
            - name: Annual licence and CPD budget for the practice
              description: |-
                ## Purpose
                Registration fees, indemnity, course fees, conference travel and cover for days out of clinic add up to a real line in the practice accounts. Budgeting them per person for the year turns renewal season from a cash surprise into a planned cost, and shows which professionals cost most to keep qualified.

                ## Milestones
                1. Last year's spend on registration fees, courses, conferences and CPD subscriptions totalled from the accounts.
                2. A per-person budget for the coming year drafted, including cover or lost fee income for CPD days.
                3. The months when large fees fall marked on the cash plan.
                4. The budget approved by the owners and recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An approved per-person budget for licence fees and CPD for the year, with large payments placed on the cash plan by month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Total last year's spend on licence fees, courses and conferences from the ledger"
                - "Estimate each professional's fees and CPD costs for the coming year"
                - "Add the cost of cover or lost clinic time for planned CPD days"
                - "Present next year's licence and CPD budget to the owners @recurring(yearly)"
            - name: Ninety, sixty and thirty day renewal reminders
              description: |-
                ## Purpose
                Renewals often need documents, references or a CPD declaration that takes weeks to gather, so a reminder the week before is too late. A monthly sweep of the register that sends staged reminders at 90, 60 and 30 days gives every professional time to act and gives the practice two chances to escalate.

                ## Milestones
                1. A monthly sweep of the register running on a fixed day.
                2. Standard reminder messages written for 90, 60 and 30 days, each naming the documents needed.
                3. Every professional with a renewal in the window reminded in that month's sweep.
                4. Anyone not renewed at 30 days escalated to the owner in writing.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For 12 consecutive months, every renewal due in the next 90 days received staged reminders and none lapsed unnoticed."
                cadence: rolling
              tasks:
                - "Write the three reminder messages and save them as reusable drafts"
                - "Sweep the register for expiries in the next 90 days and send reminders @recurring(monthly:3)"
                - "Escalate anyone within 30 days and not yet renewed to the owner"
                - "Record each reminder sent in the register's notes column"
            - name: Monthly CPD hours tally across the team
              description: |-
                ## Purpose
                Professionals who leave CPD to the last quarter of a cycle often fall short or cram unhelpful courses. A monthly tally of logged hours against each person's cycle target shows who is on track and who is slipping, early enough for a quiet word rather than a crisis.

                ## Milestones
                1. Each professional's logged CPD hours and cycle target held in one table.
                2. The tally updated monthly from new certificates in the evidence folder.
                3. Anyone more than two months behind a straight-line pace flagged.
                4. Flags shared privately with the professional and their supervising partner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A CPD tally updated every month for a year, with every flagged professional contacted within a week of the flag."
                cadence: rolling
              tasks:
                - "Set up a table with each professional's cycle target and hours logged"
                - "Update hours from new certificates in the evidence folder @recurring(monthly:25)"
                - "Flag anyone more than two months behind a steady pace"
                - "Send each flagged professional a short private note with their numbers"
            - name: Quarterly CPD conversation with each professional
              description: |-
                ## Purpose
                Hours on a spreadsheet say nothing about whether the learning matches the person's work or the practice's plans. A fifteen-minute quarterly conversation, separate from pay or appraisal, lets each professional say what they plan next, ask for time or funding and raise any registration worry early.

                ## Milestones
                1. A fifteen-minute slot booked with each professional each quarter.
                2. Each conversation recording hours so far, planned learning and any support asked for.
                3. Funding or time requests answered within two weeks.
                4. Notes filed in the professional's CPD folder.

                ## Notes
                Keep it short: three questions, five minutes each. Keep pay and performance out of it so people speak freely about gaps.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every professional has had four quarterly CPD conversations in a year, each with notes filed and requests answered within two weeks."
                cadence: rolling
              tasks:
                - "Write the three standing questions for the quarterly CPD conversation"
                - "Book a fifteen-minute CPD conversation with each professional @recurring(quarterly)"
                - "Answer every funding or time request within two weeks"
                - "File the notes from each conversation in the professional's folder"
            - name: Annual renewal season for fixed-date regulators
              description: |-
                ## Purpose
                Where a regulator renews everyone on the same date, the practice has one hectic month a year: declarations, fees, indemnity confirmations and CPD statements all due together. Running it as a planned season with a start date, a checklist and a finish line keeps it from eating the manager's whole month.

                ## Milestones
                1. The renewal window opening date for each fixed-date regulator in the calendar.
                2. A renewal checklist per profession listing documents, declarations and fees.
                3. Every affected professional renewed and their new certificate filed before the deadline.
                4. A short note of what went wrong this year added to next year's checklist.

                ## Notes
                Start from the **Compliance control** template to hold the checklist and the evidence that each renewal was completed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every professional on a fixed-date regulator renewed before the deadline, with new certificates filed and lessons recorded."
                cadence: cyclic
              tasks:
                - "Find the renewal window opening date for each fixed-date regulator"
                - "Open renewal season with a checklist sent to each affected professional @recurring(yearly)"
                - "Track each person's renewal through to a filed new certificate"
                - "Write three lessons from this season into next year's checklist"
            - name: Certificate capture after every course
              description: |-
                ## Purpose
                Certificates are easiest to collect in the week of the course and almost impossible to find two years later when a regulator asks. A standing rule that every course, webinar or conference is logged with its certificate within seven days keeps the evidence folder complete without a scramble.

                ## Milestones
                1. A seven-day rule for uploading certificates agreed and announced.
                2. A simple log form or sheet in place for date, provider, topic, hours and type.
                3. Professionals reminded on a fixed day each month to upload anything outstanding.
                4. Courses paid for by the practice matched against certificates received.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Over six months, every practice-funded course has a matching certificate in the evidence folder within seven days."
                cadence: rolling
              tasks:
                - "Announce the seven-day certificate upload rule at the next team meeting"
                - "Set up a log with date, provider, topic, hours and evidence type"
                - "Send a reminder to upload any certificates still outstanding @recurring(monthly:12)"
                - "Match practice-paid course invoices to certificates received"
            - name: Monthly public register spot check
              description: |-
                ## Purpose
                Status changes on the public register, such as a suspension, a new condition or a lapse for unpaid fees, are not always reported to the employer straight away. A monthly spot check of a few names, rotating so everyone is checked at least twice a year, catches those changes early.

                ## Milestones
                1. A rotation list built so every professional is looked up at least twice a year.
                2. The month's names checked on the public register on a fixed day.
                3. Each check recorded with date and result in the register.
                4. Any change investigated with the professional the same week.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every professional's public register entry checked at least twice in twelve months, with each check dated in the register."
                cadence: rolling
              tasks:
                - "Build a rotation so each professional is checked at least twice a year"
                - "Look up this month's names on the public registers @recurring(monthly:8)"
                - "Record each check's date and result in the register"
                - "Follow up any status change with the professional within a week"
            - name: Renewal fee payment and reimbursement routine
              description: |-
                ## Purpose
                Whether the practice pays fees directly or reimburses staff, a late payment can lapse a registration even when everything else is done. A monthly run that pays or reimburses upcoming fees, records proof of payment and posts the cost to the right ledger line closes that gap.

                ## Milestones
                1. Each professional's fee arrangement recorded: practice pays, practice reimburses or professional pays.
                2. Fees due in the next 60 days paid or reimbursed in a monthly run.
                3. Proof of payment filed in each professional's folder.
                4. Fees posted to a single licence and CPD account in the ledger.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For a year, no registration lapses for an unpaid fee, and every fee has proof of payment filed and a ledger entry."
                cadence: rolling
              tasks:
                - "Record who pays each professional's registration and certificate fees"
                - "Pay or reimburse fees due in the next 60 days @recurring(monthly:15)"
                - "File proof of payment in the professional's evidence folder"
                - "Post each fee to the licence and CPD account in the ledger"
            - name: Adding new starters to the credential register
              description: |-
                ## Purpose
                New associates and nurses are often booked with patients or clients in week one, before anyone has entered their licences and certificates. A short intake routine that adds them to the register, the calendar and the evidence folder before their first working day closes the commonest gap in the system.

                ## Milestones
                1. A start-day checklist for credentials written and kept with the recruitment file.
                2. Each new professional's licence, certificates and CPD cycle entered before their first working day.
                3. Their renewal dates added to the practice calendar.
                4. Their CPD folder created and the profession's CPD summary sent to them.

                ## Notes
                Checking credentials when hiring sits with recruitment. This project picks up from the signed offer and makes sure the new person is tracked from then on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every professional who joined in the last year was in the register, calendar and evidence folder before their first working day."
                cadence: rolling
              tasks:
                - "Write a start-day credential checklist for the recruitment file"
                - "Enter the next new starter's licence and certificates before day one"
                - "Add the new starter's renewal and cycle dates to the practice calendar"
                - "Create their CPD folder and send them their profession's summary"
            - name: Leavers, career breaks and non-practising status
              description: |-
                ## Purpose
                After someone leaves, goes on long leave or switches to non-practising status, the register can keep showing them as active and the reminders keep firing. A tidy routine for changes in status keeps the register honest and makes sure anyone returning knows what they must do first.

                ## Milestones
                1. A rule for what happens in the register when someone leaves, goes on leave or changes status.
                2. Leavers archived with their final certificates kept for the practice's retention period.
                3. People on long leave marked, with their renewal dates still watched.
                4. Anyone on non-practising status blocked from bookings until restored.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The register shows the correct status for every current and former professional, with no non-practising person bookable."
                cadence: rolling
              tasks:
                - "Write a one-paragraph rule for status changes in the register"
                - "Archive the register records of anyone who left this quarter @recurring(quarterly)"
                - "Mark anyone on long leave and keep their renewal reminders on"
                - "Check that non-practising professionals cannot be booked in the diary"
            - name: Yearly CPD declaration sign-off
              description: |-
                ## Purpose
                Many regulators ask each professional to declare each year, or at the end of a cycle, that they have met CPD requirements, and a false or careless declaration is treated more seriously than a shortfall. A yearly sign-off where each person checks their log against the rules before declaring keeps those statements accurate.

                ## Milestones
                1. The declaration date for each professional taken from the calendar.
                2. Each person's CPD log checked against their profession's summary a month before.
                3. Shortfalls either made up or disclosed honestly to the regulator.
                4. A copy of each submitted declaration filed.

                ## Notes
                A declaration is the individual's own statement to the regulator. The practice can check and support, but must never pressure anyone to declare hours they have not done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every professional's yearly CPD declaration was checked against their log before submission and a copy filed."
                cadence: cyclic
              tasks:
                - "List each professional's CPD declaration date for the year"
                - "Check each person's log against their CPD summary a month before declaring @recurring(yearly)"
                - "Agree a plan with anyone short of hours before they declare"
                - "File a copy of every submitted declaration"
            - name: Reading your regulator's CPD rules in full
              description: |-
                ## Purpose
                Summaries miss the details that decide an audit: what counts as verifiable, how much self-study is allowed, whether hours carry over, what happens to part-timers. Reading the full rules and guidance once, with notes, makes the practice the place staff come to for a straight answer.

                ## Milestones
                1. The current CPD rules, guidance and frequently asked questions downloaded for the main profession in the practice.
                2. Notes made on evidence rules, carry-over, pro rata hours and audit process.
                3. Three questions the documents do not answer sent to the regulator.
                4. The profession's one-page summary corrected where the full rules differ.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Annotated notes on the full CPD rules exist, the summary has been corrected and the regulator's replies to open questions are filed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Download the full CPD rules and guidance for the main profession"
                - "Read and annotate the sections on evidence, carry-over and audit"
                - "Email the regulator any question the documents leave open"
                - "Correct the one-page summary where it differs from the full rules"
            - name: Writing reflective CPD entries that pass audit
              description: |-
                ## Purpose
                More and more regulators want more than attendance: they ask what was learned, how it changed practice and what comes next. Professionals who never learned to write short reflections often produce entries an auditor rejects, so a short team session with good and poor examples raises the whole practice's standard.

                ## Milestones
                1. The regulator's guidance or template for reflective entries found.
                2. Two good and two weak example entries written, without real client or patient details.
                3. A thirty-minute team session run using the examples.
                4. Each professional's next three entries written in the agreed style.

                ## Notes
                Reflections must never include identifiable patient or client information. Describe the type of case, not the person.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A team session on reflective writing has run and each professional has three new entries in the agreed style."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Find the regulator's guidance or template for reflective entries"
                - "Ask the agent to draft two good and two weak anonymised reflection examples"
                - "Run a thirty-minute team session comparing the examples"
                - "Review three new entries from each professional a month later"
            - name: Verifiable and self-directed CPD explained
              description: |-
                ## Purpose
                Some regulators split CPD into verifiable or structured hours, with certificates and learning outcomes, and self-directed hours such as reading or peer discussion, often with a cap on the second kind. Confusion between them is the most common reason a professional who thinks they are on track turns out to be short.

                ## Milestones
                1. The regulator's definitions of each CPD category written in plain words.
                2. Examples listed of what counts in each category for the practice's work.
                3. The CPD tally updated to show hours by category, not just in total.
                4. Anyone short in a category told which kind of learning they need.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The CPD tally shows hours by category for every professional, with a written plain-words guide to what counts in each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy the regulator's definitions of each CPD category"
                - "List practice-specific examples of learning in each category"
                - "Split the monthly CPD tally into columns by category"
                - "Tell anyone short in a category what kind of learning closes the gap"
            - name: Personal development plans tied to CPD
              description: |-
                ## Purpose
                Several regulators expect a written plan at the start of each cycle, and even where they do not, a plan makes the hours useful rather than random. Helping each professional write a short plan linking their learning to their work, their gaps and the practice's direction gives CPD a purpose.

                ## Milestones
                1. Each professional with a one-page plan for their current CPD cycle.
                2. Each plan naming two or three learning goals linked to their work or the practice's plans.
                3. The planned learning costed and added to the CPD budget.
                4. Plans reviewed at the quarterly CPD conversation.

                ## Notes
                Start from the **Development plan** template. Keep it to one page or nobody will read it again.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every professional has a one-page development plan for their cycle with costed goals reviewed at least once."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Share the development plan format with each professional"
                - "Ask each professional to name two or three learning goals for the cycle"
                - "Cost the planned courses and add them to the CPD budget"
                - "Review each plan at the next quarterly CPD conversation"
            - name: In-house CPD sessions that count
              description: |-
                ## Purpose
                Lunchtime case reviews, peer teaching and visiting speakers can supply a good share of CPD hours at low cost, but only if they are planned with learning outcomes, attendance records and certificates the regulator will accept. A planned programme of in-house sessions also keeps the team learning together.

                ## Milestones
                1. The regulator's rules for in-house learning to count checked.
                2. A programme of at least six sessions for the year with topics, presenters and learning outcomes.
                3. An attendance sheet and certificate format that meets the evidence rules.
                4. Each session's record filed in attendees' folders within a week.

                ## Notes
                Start from the **Training program** template to plan the year's sessions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: deliverable
                success_criteria: "At least six in-house sessions ran in a year, each with outcomes, attendance and certificates filed for every attendee."
                cadence: cyclic
                effort_hours_estimate: "12"
              tasks:
                - "Check what the regulator requires for in-house learning to count"
                - "Draft a year of six or more sessions with topics and presenters"
                - "Design an attendance sheet and certificate with learning outcomes"
                - "Run the next in-house session and file its records @recurring(monthly:20)"
            - name: Journal reading and peer discussion for CPD
              description: |-
                ## Purpose
                Reading key journals and professional updates is the cheapest learning there is, and many regulators accept it in limited amounts if it is recorded with a short reflection. A shared reading list and a monthly half-hour discussion turns reading people do anyway into logged CPD.

                ## Milestones
                1. A shared reading list of journals, regulator bulletins and professional updates.
                2. A monthly half-hour discussion slot booked.
                3. Each discussion logged with the article, attendees and a one-line reflection each.
                4. Hours from reading kept within the regulator's cap for that category.

                ## Notes
                Start from the **Reading queue** template for the shared list.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Ten monthly reading discussions in a year, each logged with attendees and reflections and counted within the category cap."
                cadence: rolling
              tasks:
                - "Start a shared reading list with three journals or bulletins"
                - "Book a recurring half-hour slot for article discussion"
                - "Log each discussion with attendees and one-line reflections @recurring(monthly:18)"
                - "Check reading hours stay within the regulator's limit"
            - name: What happens when a licence lapses
              description: |-
                ## Purpose
                Owners often discover the consequences of a lapse only when it happens: some regulators restore within days for a late fee, others require a full restoration application, and work done while lapsed may be uninsured or unlawful. Knowing the rules in advance for each profession makes the stop-practice rule sensible and the response fast.

                ## Milestones
                1. For each profession, the regulator's rules on late renewal, grace periods and restoration written down.
                2. The indemnity insurer's position on work done while unregistered confirmed in writing.
                3. Typical restoration timescales and costs noted.
                4. A summary shared with the owners and the person responsible for tracking.

                ## Notes
                Ask the regulator and the insurer directly and keep their written replies. Do not rely on what another practice was told.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written summary per profession of lapse, grace and restoration rules, plus the insurer's written position, is filed and shared."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find each regulator's rules on late renewal and restoration"
                - "Ask the indemnity insurer in writing about cover for work done while lapsed"
                - "Note restoration timescales and fees for each profession"
                - "Share the summary with the owners"
            - name: Stop-practice rule for a lapsed licence
              description: |-
                ## Purpose
                When a licence lapses on a Friday and the professional has a full list on Monday, someone has to decide on the spot whether they work. A written rule agreed in advance, saying that nobody practises without a current registration and who reschedules their work, removes the pressure to make an exception.

                ## Milestones
                1. A written rule that no one practises without a current registration or required certificate.
                2. The steps set out: who is told, who reschedules or reallocates the work, and how clients or patients are informed.
                3. Pay and leave arrangements during a lapse agreed with the practice's adviser.
                4. The rule approved by the owners and sent to every professional.

                ## Notes
                Whether work done during a lapse must be reported to the regulator or insurer depends on the profession. Get that answer from them, not from this rule.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "An owner-approved stop-practice rule with named steps for a lapse has been sent to every professional and acknowledged."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page stop-practice rule for a lapsed licence or certificate"
                - "Name who reschedules work and who contacts affected clients or patients"
                - "Agree pay arrangements during a lapse with the employment adviser"
                - "Send the approved rule to every professional and record acknowledgements"
            - name: Credential tracking spreadsheet or software decision
              description: |-
                ## Purpose
                A spreadsheet works well for five professionals and poorly for forty across three sites. Comparing a spreadsheet, the credential features in existing practice or HR software, and a dedicated credential tool against the same criteria gives a decision based on the practice's real size and growth.

                ## Milestones
                1. Requirements listed: number of people, reminders, document storage, reporting and access control.
                2. Three options compared against the requirements, including staying on a spreadsheet.
                3. Costs over three years set beside each option.
                4. A decision recorded with the reasons and a review date.

                ## Notes
                Keep the scope to licences and CPD. A general HR system choice is a bigger decision for another day.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on how credentials are tracked, with three options scored and three-year costs compared."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what the practice needs from a credential tracking tool"
                - "Check whether current practice or HR software already tracks licences"
                - "Score three options against the same requirements and costs"
                - "Record the decision and a date to review it"
            - name: CPD allowance policy for days and money
              description: |-
                ## Purpose
                Without a policy, CPD funding goes to whoever asks loudest and resentment follows. A written allowance of study days and money per role, with rules for what qualifies, who approves and what happens to unused allowance, makes decisions quick and fair.

                ## Milestones
                1. Current spending and study days per person reviewed for the last two years.
                2. An allowance per role drafted for days and money.
                3. Rules written for what qualifies, how to apply and who approves.
                4. The policy approved by the owners and published to staff.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A published policy sets CPD days and money per role, with approval rules, signed off by the owners."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Total CPD spend and study days per person for the last two years"
                - "Draft an allowance per role for study days and course money"
                - "Write rules for what qualifies and who approves requests"
                - "Publish the approved policy to all professionals"
            - name: Choosing accredited CPD providers
              description: |-
                ## Purpose
                Courses vary widely in quality and in whether the regulator will accept them, and a practice paying for many courses has buying power. A short approved list of providers for each profession, checked for accreditation and value, saves staff time searching and cuts the risk of hours that do not count.

                ## Milestones
                1. The providers staff used in the last two years listed with cost and feedback.
                2. Each provider's accreditation or approval status with the relevant regulator checked.
                3. A shortlist of preferred providers per profession agreed.
                4. Group or practice rates asked for from the top providers.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A preferred provider list per profession exists, each checked for regulator acceptance, with group rates requested."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List CPD providers staff used in the last two years with costs"
                - "Check each provider's standing with the relevant regulator"
                - "Ask staff for one line of feedback on each provider"
                - "Request group rates from the three most used providers"
            - name: Repayment terms for practice-funded courses
              description: |-
                ## Purpose
                When the practice pays for an expensive postgraduate course or a specialist qualification and the professional leaves soon after, the money walks out too. A clear, proportionate repayment agreement signed before the course starts protects the practice without putting people off learning.

                ## Milestones
                1. A cost threshold set above which a repayment agreement applies.
                2. A sliding repayment scale agreed, such as reducing over 24 months.
                3. The wording checked by the practice's employment lawyer.
                4. Agreements signed for every course above the threshold before payment.

                ## Notes
                Rules on deductions from pay and on enforceable training agreements differ by country. Use wording your lawyer approves.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A lawyer-checked repayment agreement with a sliding scale is in use for every funded course above the threshold."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Set the course cost above which a repayment agreement is needed"
                - "Draft a sliding repayment scale over a fixed period"
                - "Send the draft agreement to the employment lawyer for review"
                - "Use the signed agreement before paying for any qualifying course"
            - name: Group CPD subscriptions and bulk buying
              description: |-
                ## Purpose
                Individual subscriptions to online CPD platforms, journals and professional bodies often cost far more than a practice licence covering everyone. Pulling the receipts together shows where the practice is paying twice and where one group subscription would give every professional more for less.

                ## Milestones
                1. All individual CPD subscriptions paid or reimbursed by the practice listed.
                2. Group or practice pricing obtained for the most common ones.
                3. A decision made on which to move to group subscriptions.
                4. Individual subscriptions cancelled as group access starts.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of individual and group CPD subscription costs is recorded, with savings from any switch calculated."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every CPD subscription the practice pays or reimburses"
                - "Ask the main platforms for a practice or group price"
                - "Compare total individual cost with the group offers"
                - "Switch the chosen subscriptions and stop the individual ones"
            - name: Linking CPD to appraisals and practice plans
              description: |-
                ## Purpose
                CPD chosen in isolation rarely helps the practice grow a new service or close a known weakness. Bringing CPD plans into annual appraisals, and checking them against the practice's plans for new services, gives owners a say in where learning money goes while keeping each person's professional needs first.

                ## Milestones
                1. The practice's plans for new or growing services for the next two years listed.
                2. The skills those plans need set against current CPD plans.
                3. CPD added as a standing section of each annual appraisal.
                4. At least one funded course chosen to fill a practice skill gap.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Annual appraisals include a CPD section and at least one funded course targets a skill named in the practice's plans."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the services the practice plans to add or grow in two years"
                - "Compare the skills needed with current development plans"
                - "Add a CPD section to the annual appraisal form"
                - "Fund one course that fills a gap named in the practice plans"
            - name: Preparing for a regulator CPD audit request
              description: |-
                ## Purpose
                Regulators sample a share of professionals each year and ask for their CPD records, often with a short deadline. When a letter arrives, a calm, checked response within the deadline matters far more than perfect records, and a practice that has rehearsed the steps once answers in days.

                ## Milestones
                1. The audit letter's deadline, scope and evidence list noted on the day it arrives.
                2. The professional's log and certificates gathered and checked against the profession's rules.
                3. Any gaps explained honestly with what is being done about them.
                4. The submission sent before the deadline and a copy filed with proof of sending.

                ## Notes
                The audit is of the individual, so they submit and sign. The practice's job is to help them find evidence fast. Ask the regulator for more time in writing if you need it, before the deadline.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An audited professional's CPD submission was sent before the regulator's deadline with every listed item of evidence and a filed copy."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the deadline, scope and evidence list from the audit letter"
                - "Pull the professional's log and certificates from their evidence folder"
                - "Check the evidence against the regulator's audit list item by item"
                - "Send the submission and file a copy with proof of sending"
            - name: End of cycle CPD catch-up plan
              description: |-
                ## Purpose
                Three or four months before a cycle closes, anyone short of hours still has time to close the gap with learning that is actually useful. A dated catch-up plan for each person behind, with booked courses rather than intentions, avoids a last-week rush of whatever webinar happens to be free.

                ## Milestones
                1. Everyone more than ten percent short of their cycle target identified four months out.
                2. A written catch-up plan for each with specific booked courses and dates.
                3. Study time or clinic cover arranged for the booked dates.
                4. Each catch-up plan checked complete a month before cycle end.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every professional who was short four months before cycle end met their target before the cycle closed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List everyone more than ten percent short with four months to go"
                - "Book specific courses with each of them, not just intentions"
                - "Arrange cover for the booked study dates"
                - "Check every catch-up plan is complete a month before cycle end"
            - name: Annual practice CPD day
              description: |-
                ## Purpose
                Closing for one day a year for whole-team learning covers mandatory topics such as life support, safeguarding, data protection and complaints in one go, with certificates for everyone. Planned well in advance, it costs less in lost income than staff attending the same courses separately across the year.

                ## Milestones
                1. A date chosen at least four months ahead and the diary closed for it.
                2. The mandatory topics due for renewal in the coming year listed for the agenda.
                3. Trainers booked and certificates confirmed as acceptable to the regulators involved.
                4. Every attendee's certificates filed and the register updated within a week.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A whole-team CPD day ran on its planned date, with every attendee's certificates filed and register dates updated within a week."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "Pick a date four months ahead and close the diary for it"
                - "List mandatory certificates expiring in the next year for the agenda"
                - "Book trainers whose certificates the regulators accept"
                - "File every certificate and update the register after the day"
            - name: Conference attendance with CPD evidence
              description: |-
                ## Purpose
                Professional conferences can supply a big block of CPD hours, but only if attendance is recorded session by session and each certificate shows the hours. Planning which sessions count, who attends and how learning is shared back with colleagues makes the travel and fees worth it.

                ## Milestones
                1. The conference, attendees and budget approved under the CPD allowance.
                2. Sessions chosen in advance against each attendee's development plan.
                3. Certificates and session logs collected before leaving the venue.
                4. A short talk or note sharing the main points with colleagues within a month.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Each attendee filed a certificate and session log within seven days and shared learning with colleagues within a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Approve the conference and attendees against the CPD allowance"
                - "Ask each attendee to pick sessions that match their development plan"
                - "Collect certificates and session logs before attendees leave the venue"
                - "Book a fifteen-minute slot for attendees to share what they learned"
            - name: Same-day response to a discovered lapse
              description: |-
                ## Purpose
                Finding out that a professional's licence or a required certificate has lapsed is stressful, and the first few hours matter. Working through a set response, stop, check, reschedule, restore and record, protects patients or clients, the professional and the practice's insurance position.

                ## Milestones
                1. The lapse confirmed on the public register or with the issuing body.
                2. The stop-practice rule applied and the day's work reassigned.
                3. Restoration started with the regulator and the expected date recorded.
                4. The insurer and any other required party told where their terms require it.
                5. The cause recorded and the tracking system fixed so it cannot repeat.

                ## Notes
                Whether work done while lapsed must be reported, and to whom, is a question for the regulator, the insurer and your lawyer. Record what they say.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A discovered lapse was confirmed, work stopped the same day, restoration applied for and the cause and fix recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm the lapse on the public register or with the issuing body"
                - "Reassign or reschedule the professional's work for today @priority(high)"
                - "Start the restoration application with the regulator"
                - "Write a short note of the cause and the change to tracking"
            - name: Closing one CPD cycle and opening the next
              description: |-
                ## Purpose
                The end of a multi-year cycle is when records get lost: old folders are left messy, carried-over hours are disputed and new plans never get written. A tidy close and open, with final totals, archived evidence and a fresh plan, makes the next audit easy.

                ## Milestones
                1. Final hours by category confirmed for each professional whose cycle closed.
                2. The closed cycle's evidence archived for the retention period the regulator sets.
                3. Any hours allowed to carry over recorded in the new cycle.
                4. A new cycle folder and development plan started for each person.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every professional whose cycle closed has final totals confirmed, evidence archived and a new cycle folder and plan in place."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Confirm final CPD totals by category for each closing cycle"
                - "Archive the closed cycle's evidence for the regulator's retention period"
                - "Record any carry-over hours the rules allow"
                - "Create the new cycle folder and ask for a new development plan"
            - name: Licence and CPD routine for a sole practitioner
              description: |-
                ## Purpose
                Sole practitioners have no practice manager to remind them, and one lapse can close the whole business. A light routine sized for one person, a short register, two calendar alerts per renewal and fifteen minutes a month on CPD, gives the same protection without the overhead.

                ## Milestones
                1. A one-page register of the practitioner's licence, certificates and cycle dates.
                2. Two calendar alerts per renewal set at 90 and 30 days.
                3. A fifteen-minute monthly slot for logging CPD.
                4. A trusted colleague or adviser given the renewal dates as a backstop.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A sole practitioner keeps a current one-page register and logs CPD monthly for a full year with no lapse."
                cadence: rolling
              tasks:
                - "Write a one-page list of your licence, certificates and cycle dates"
                - "Set alerts at 90 and 30 days before each renewal"
                - "Log this month's CPD in fifteen minutes @recurring(monthly:28)"
                - "Give a trusted colleague your renewal dates as a backstop"
            - name: Returning to practice after a career break
              description: |-
                ## Purpose
                Professionals coming back from parental leave, illness or time abroad often face return-to-practice rules: extra CPD, supervised practice or a restoration application. Planning the return a few months ahead, with the regulator's requirements in hand, lets them start on the agreed date rather than waiting on paperwork.

                ## Milestones
                1. The regulator's return-to-practice requirements for the length of break confirmed.
                2. Any required CPD, refresher training or supervised practice booked.
                3. Registration status confirmed as active before the first working day.
                4. A phased return plan agreed with the professional, including any supervision.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A returning professional had active registration and completed required refresher learning before their first working day back."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Check the regulator's return-to-practice rules for the length of break"
                - "Book any refresher CPD or supervised practice the rules require"
                - "Confirm the registration shows active before the return date"
                - "Agree a phased return plan with the professional in writing"
            - name: First licence renewal for newly qualified staff
              description: |-
                ## Purpose
                Newly qualified professionals often hold a provisional or first-year registration with different rules, and their first renewal is the one most likely to be missed. Walking them through it once teaches the habit that will carry them through decades of renewals.

                ## Milestones
                1. Each newly qualified professional's registration type and conversion rules confirmed.
                2. Any supervision, logbook or competency sign-off needed for full registration identified.
                3. The first renewal or conversion submitted on time with a mentor's help.
                4. The professional keeping their own CPD log in the practice format.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each newly qualified professional's first renewal or conversion to full registration was submitted on time with supporting evidence."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Check the registration type and conversion rules for each new graduate"
                - "List any logbook or sign-off needed for full registration"
                - "Pair each new graduate with a mentor for their first renewal"
                - "Show them how to keep their CPD log in the practice format"
            - name: Pro rata CPD for part-time professionals
              description: |-
                ## Purpose
                Some regulators reduce CPD for part-time practitioners and some do not, and part-timers often assume the lighter rule applies. Confirming the rule for each part-timer and setting their targets accordingly prevents a nasty surprise at cycle end, and makes sure the practice funds CPD fairly across contracts.

                ## Milestones
                1. Every part-time professional listed with their contracted hours.
                2. The regulator's rule on reduced CPD for part-timers confirmed for each profession.
                3. Each part-timer's cycle target in the tally corrected if needed.
                4. The CPD allowance policy checked for fair treatment of part-timers.
              priority: low
              frontmatter:
                mode: service
                output_kind: knowledge
                success_criteria: "Each part-time professional's CPD target matches their regulator's written rule and the allowance policy treats them fairly."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List part-time professionals and their contracted hours"
                - "Check each regulator's rule on CPD for part-time practice"
                - "Correct part-timers' targets in the CPD tally"
                - "Review the allowance policy's treatment of part-time staff"
            - name: Professionals licensed in more than one country
              description: |-
                ## Purpose
                Practices near borders, across Caribbean islands or serving clients abroad often have professionals registered with two or three regulators, each with its own renewal date, fee and CPD rule. Mapping which registrations are needed for which work, and whether CPD can count twice, avoids paying for licences nobody uses and missing the one that matters.

                ## Milestones
                1. Every professional with more than one registration listed with each regulator.
                2. The work that needs each registration written down.
                3. Each regulator asked whether CPD done for another registration counts.
                4. Unneeded registrations put on non-practising status or allowed to close on purpose.

                ## Notes
                Rules on practising across borders are a matter for each regulator. Get their answers in writing before relying on mutual recognition.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A map shows each multi-registered professional's licences, the work each covers and a recorded decision to keep or close each one."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every professional registered with more than one regulator"
                - "Write down which work requires which registration"
                - "Ask each regulator whether CPD from another registration counts"
                - "Decide which registrations to keep, suspend or close"
            - name: Senior professionals moving to non-practising status
              description: |-
                ## Purpose
                Partners winding down often want to keep a title, sit on a board or do occasional work, and each of those may need a different registration category. Planning the move to reduced, retired or non-practising status a year ahead stops them paying full fees for nothing, or practising without the right status.

                ## Milestones
                1. The regulator's registration categories for reduced or retired practice listed.
                2. The professional's planned work after the change matched to the right category.
                3. The date of change agreed and the insurer told.
                4. The register, calendar and booking system updated on the date.

                ## Notes
                Run-off cover and client handover belong to the partner's wider retirement plan. This project covers only the registration category and its CPD duties.
              priority: low
              frontmatter:
                mode: service
                output_kind: decision
                success_criteria: "A senior professional's change of registration category was made on a set date, with the register and booking system updated the same day."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the regulator's categories for reduced or retired practice"
                - "Match the professional's planned future work to a category"
                - "Agree the date of change and notify the insurer"
                - "Update the register, calendar and booking system on the date"
            - name: Specialist registrations and endorsements tracking
              description: |-
                ## Purpose
                Specialist lists, prescribing rights, sedation or radiation endorsements, higher rights of audience and similar authorisations often carry their own CPD and renewal rules on top of the main licence. Tracking each one separately prevents a professional doing work they are no longer endorsed for.

                ## Milestones
                1. Every specialist registration or endorsement held in the practice listed.
                2. Each one's renewal date, extra CPD and evidence rules added to the register.
                3. The services each endorsement allows matched to who is booked for them.
                4. Any service booked to someone without a current endorsement stopped.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every specialist endorsement in the practice is in the register with its own dates and CPD, and only endorsed staff are booked for those services."
                cadence: rolling
              tasks:
                - "List every specialist registration and endorsement held by staff"
                - "Add each endorsement's renewal date and extra CPD to the register"
                - "Match endorsed services in the booking system to endorsed staff"
                - "Review endorsement dates against bookings @recurring(quarterly)"
            - name: Supervising trainees' CPD and sign-offs
              description: |-
                ## Purpose
                Trainees, pupils and articled clerks usually need logbooks, competency sign-offs and supervised hours signed by a named supervisor, and a missed sign-off can delay their qualification by months. Owners who host trainees need a calendar of those sign-offs and a supervisor with time set aside for them.

                ## Milestones
                1. Each trainee's training body requirements and sign-off dates listed.
                2. A named supervisor with time in their diary for each trainee.
                3. Sign-offs completed on or before each due date.
                4. Copies of signed records kept in the trainee's folder.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every trainee's logbook and competency sign-offs for the year were completed on time and copies filed."
                cadence: rolling
              tasks:
                - "List each trainee's sign-off requirements and dates"
                - "Name a supervisor and block their time for reviews"
                - "Check upcoming trainee sign-offs with supervisors @recurring(monthly:5)"
                - "File signed records in each trainee's folder"
            - name: Becoming an approved CPD provider
              description: |-
                ## Purpose
                A practice that already runs good in-house teaching can sometimes become an approved or accredited CPD provider, letting it issue certificates to outside professionals and earn a modest income. It is real work, with quality assurance, records and audits of its own, so decide with the costs and duties in front of you.

                ## Milestones
                1. The provider approval scheme for the relevant regulator or professional body found.
                2. Its criteria, fees and quality assurance duties summarised.
                3. Expected demand and income estimated against the cost of running it.
                4. A go or no-go decision recorded by the owners.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written go or no-go decision on becoming a CPD provider, based on the scheme's criteria and a cost and income estimate."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Find the CPD provider approval scheme for your profession"
                - "Summarise its criteria, fees and quality assurance duties"
                - "Ask the agent to draft a simple cost and income estimate from your figures"
                - "Record the owners' decision and reasons"
            - name: Yearly licence and CPD report to the owners
              description: |-
                ## Purpose
                Owners carry the risk of an unlicensed professional working in their practice, so they should see the position once a year in writing. A short report showing renewals made, any lapses and near misses, CPD progress by profession and spend against budget gives them assurance and a basis for next year's budget.

                ## Milestones
                1. Renewals completed, lapses and near misses for the year counted.
                2. CPD progress shown by profession against cycle targets.
                3. Spend on fees and CPD set against the approved budget.
                4. Three improvements for next year agreed at the owners' meeting.

                ## Notes
                Start from the **Compliance control** template if you want the evidence and the report in one place.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A written yearly report on renewals, lapses, CPD progress and spend was presented at an owners' meeting with three agreed improvements."
                cadence: cyclic
                effort_hours_estimate: "4"
              tasks:
                - "Count renewals, lapses and near misses from the register"
                - "Summarise CPD progress by profession against targets"
                - "Compare fee and CPD spend with the approved budget"
                - "Present the report at the owners' meeting @recurring(yearly)"
---

# Practice CPD and Licence Renewals

This area is for the practice owner or manager who needs to know, on any given day, that every doctor, dentist, lawyer, accountant, engineer, architect, vet, pharmacist or therapist in the building holds a current licence and is on track with continuing professional development. It starts with foundations (a credential register, a renewal calendar, each profession's CPD rules and a first audit of anything already lapsed), moves to the monthly and yearly machinery of reminders, hour tallies and renewal season, then the skills of reflective CPD writing and in-house learning, decisions about software, allowances and a stop-practice rule, the dated moments such as a regulator CPD audit or the end of a cycle, situations from sole practitioners to returners and cross-border licences, and finally specialist work such as endorsements, trainee supervision and becoming a CPD provider.

What repeats is a monthly reminder sweep and register spot check, a monthly CPD tally, renewal fee and certificate routines, quarterly progress conversations with each professional, and a yearly renewal season, declaration sign-off and report to the owners. The Skills matrix, Compliance control, Development plan, Training program and Reading queue templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
