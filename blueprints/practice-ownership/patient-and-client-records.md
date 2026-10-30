---
id: practice-ownership.patient-and-client-records
name: Patient and Client Records
description: "A records system an owner can defend: every file located, a retention schedule, consent and confidentiality rules, access requests answered on time, secure storage and files closed and destroyed on schedule."
category: business
version: 1.0.0
tags: [practice-ownership, patient-and-client-records, small-business, records-management, confidentiality, data-protection, retention, access-requests]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - vendor
    - compliance-control
    - risk-register
    - remediation-plan
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Patient and Client Records
          description: "Keeping professional records properly: retention periods, consent, confidentiality, access requests, secure storage and closing files."
          projects:
            - name: Inventory of every place records are kept
              description: |-
                ## Purpose
                Records rarely live in one system. A typical practice has charts or files in the practice software, scanned letters in a shared drive, results and attachments in email, photos on staff phones, paper in back-office cabinets and boxes in a storage unit nobody has opened in years. Listing every location, what sits there and who can reach it is the base for every other records decision, because you cannot protect, retain or destroy what you have not found.

                ## Milestones
                1. One register lists every system, drive, inbox, device and physical store that holds patient or client information.
                2. Each location shows the record types it holds, the approximate volume and the oldest material in it.
                3. A named person is recorded against each location as the one who knows how it works.
                4. Locations nobody can justify keeping, such as old exports or personal folders, are flagged for action.

                ## Notes
                Ask each staff member separately where they keep anything about a patient or client. Personal email, messaging apps and desktop folders surface this way and almost never from the owner's own list.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A records location register covering every system and physical store exists, with contents, volume, oldest date and a named contact for each."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List the systems you know hold patient or client information"
                - "Ask each staff member where they keep files, notes, photos or emails"
                - "Walk the premises and storage unit and count boxes and cabinets"
                - "Record the oldest material found in each location"
                - "Flag locations with no business reason to exist"
            - name: Named records lead and deputy
              description: |-
                ## Purpose
                Someone has to own the response when a patient asks for their notes, a laptop goes missing or a court order arrives, and in many practices it falls to whoever answers the phone. Naming a records lead with a deputy, written into job descriptions, gives staff one person to escalate to and gives the regulator or data authority a clear answer when they ask who is responsible.

                ## Milestones
                1. A records lead and a deputy are named in writing, with the owner's sign-off.
                2. Their duties are listed in one page: access requests, disclosures, breaches, retention and training.
                3. All staff have been told who the lead is and how to reach them.
                4. Where the law requires a data protection officer, the appointment is checked and recorded.

                ## Notes
                In a small practice the owner is often the lead. That is fine, as long as the deputy can act during holidays and the duties are written down.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed one-page records lead role names a lead and deputy, and every staff member can name them when asked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide who will act as records lead and who will deputise"
                - "Write the lead's duties on a single page"
                - "Check whether your jurisdiction requires a formal data protection officer"
                - "Announce the lead and deputy at the next staff meeting"
            - name: Map of your legal and regulator record duties
              description: |-
                ## Purpose
                Record duties come from several directions at once: data protection law, your professional regulator's standards, health or practice licensing rules, tax law and, for law and accounting firms, anti-money laundering rules on what must be kept. Putting them on one map, with the source of each duty, stops the practice either over-keeping everything forever or destroying files that a regulator still expects to see.

                ## Milestones
                1. A table lists each law, regulation and professional standard that sets a records duty for the practice.
                2. Each duty is summarised in plain words with a link or reference to the source.
                3. Any registration or annual fee owed to the data protection authority is identified and diarised.
                4. Questions you could not answer are listed for your lawyer or professional body.

                ## Notes
                Your professional body or indemnity insurer often publishes records guidance for members. Start there, then confirm anything uncertain with a lawyer who advises practices in your field.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A duty map names every applicable law and professional standard on records, with sources and a list of open questions sent to an adviser."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download your regulator's current guidance on record keeping"
                - "Ask your indemnity insurer for their records and retention guidance"
                - "List each duty with its source in a single table"
                - "Check whether the practice must register with the data protection authority"
                - "Send the open questions to your lawyer or professional body"
            - name: Retention schedule by record type
              description: |-
                ## Purpose
                Without a schedule, every file is either kept indefinitely, which multiplies breach risk and storage cost, or thrown out on a whim. A retention schedule sets, for each record type, how long it is kept, from which trigger date (last visit, file closure, the age of majority, end of a limitation period) and what happens at the end, so destruction becomes routine and defensible.

                ## Milestones
                1. Every record type from the inventory appears on the schedule with a retention period and trigger date.
                2. Longer periods for minors, deceased patients, long-tail liability work and regulated records are written in.
                3. Each period cites the duty map or the reason the practice chose it.
                4. The owner has signed and dated the schedule, with a review date a year out.

                ## Notes
                Engineering, architecture and some legal work carry liability for many years after completion. Ask your indemnity insurer what they expect you to keep before setting short periods.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed retention schedule covers every record type in the inventory, with a period, trigger date, disposal method and source for each."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Copy the record types from the inventory into a schedule table"
                - "Set a retention period and trigger date for each type"
                - "Mark the types that need longer periods for minors or liability"
                - "Write the disposal method for each type"
                - "Sign the schedule and set a review date"
            - name: Privacy notice for patients and clients
              description: |-
                ## Purpose
                People have a right to know what the practice records about them, why, who it is shared with and how long it is kept, and most data protection laws require that to be told in writing at the point of collection. A clear notice, on the website, at reception and attached to engagement terms, also prevents the angry phone call when someone learns their insurer received a report.

                ## Milestones
                1. A plain-language privacy notice covers what is collected, why, sharing, retention, rights and how to complain.
                2. The notice matches what the practice actually does, checked against the inventory and retention schedule.
                3. It is published on the website, displayed at reception and referenced in new patient forms or engagement letters.
                4. A short version exists for phone and text contact.

                ## Notes
                Write it after the inventory and retention schedule, not before. Notices copied from another practice routinely promise things yours does not do.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A privacy notice consistent with the retention schedule is live on the website, at reception and in new client paperwork."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a privacy notice from the inventory and retention schedule"
                - "Check each sharing statement against who really receives information"
                - "Have your lawyer or professional body template review the draft"
                - "Publish the notice on the website and at reception"
                - "Add a reference to it in new patient and client forms"
            - name: Consent and lawful basis register
              description: |-
                ## Purpose
                Practices collect some information because the law or the professional relationship requires it and other information only with consent: marketing texts, photographs, recordings, sharing with a family member, use in teaching. Recording which basis applies to each purpose, and where each consent is captured, means staff stop asking for consent the practice does not need and start recording the consent it does.

                ## Milestones
                1. Each purpose for processing records is listed with its lawful basis.
                2. Purposes that rely on consent show where and how consent is captured and recorded in the file.
                3. A method for withdrawing consent exists and staff know it.
                4. Forms that ask for unnecessary consent are corrected.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register lists every processing purpose with its lawful basis and, where consent is used, the form and file location where it is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every reason the practice uses patient or client information"
                - "Assign a lawful basis to each reason using the duty map"
                - "Note where consent is captured for the consent-based purposes"
                - "Rewrite any form that asks for consent the practice does not need"
            - name: Role-based access map for records
              description: |-
                ## Purpose
                In many practices every login can open every file, so the receptionist can read therapy notes and a junior can browse a celebrity client's matter. Mapping which roles need which records, then setting the software to match, is one of the strongest protections against snooping and one of the first things an investigator checks after a breach.

                ## Milestones
                1. Each role in the practice is listed with the record types it needs to do the job.
                2. The practice software permissions are set to match the map, with exceptions written down.
                3. Shared logins have been replaced with individual accounts.
                4. Audit trails that show who opened which record are switched on and tested.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written access map exists and the practice system's permissions match it, with no shared logins and audit trails switched on."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List each role and the record types it needs"
                - "Export the current user list and permission levels from the practice system"
                - "Remove access that the map does not justify"
                - "Replace any shared login with individual accounts"
                - "Open a test record and confirm the audit trail shows it"
            - name: Practice standard for a complete file note
              description: |-
                ## Purpose
                File notes written at the time are usually the best evidence the practice has when a complaint or claim arrives, and a vague one is often worse than none. Agreeing a short standard for what every note must contain (date, time, author, who was present, what was advised or done, what was agreed, next step) gives every professional in the practice the same floor.

                ## Milestones
                1. A one-page note standard lists the required elements for consultations, calls and advice given.
                2. Rules on corrections are written: never overwrite, add a dated amendment with the author's name.
                3. Two anonymised example notes, one good and one poor, illustrate the standard.
                4. Every professional has read and signed the standard.

                ## Notes
                Keep it short enough to pin above a desk. Long standards are signed and ignored.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page note standard with worked examples has been signed by every professional in the practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your regulator's guidance for required note content"
                - "Draft the one-page standard with the required elements"
                - "Prepare one good and one poor anonymised example"
                - "Collect signatures from every professional"
            - name: Paper records storage and key control
              description: |-
                ## Purpose
                Paper files are still the most common source of small breaches: a cabinet left unlocked over a weekend, a box in an unlocked corridor, a key that nobody can account for. Checking every physical store against a simple standard (locked, out of public view, protected from water and fire, keys logged) closes risks that no software can.

                ## Milestones
                1. Every cabinet, room and archive holding records is lockable and locked outside working hours.
                2. A key and code register shows who holds access to each store.
                3. Records are off the floor and away from water pipes and windows.
                4. A storage walk-round is on the calendar every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every physical records store is locked and listed in a key register, and quarterly walk-rounds are recorded with any faults fixed."
                cadence: rolling
              tasks:
                - "Walk every room and note each place paper records sit"
                - "Create a key and code register for each store"
                - "Lift boxes off the floor and away from pipes"
                - "Walk the stores and check locks, keys and damp @recurring(quarterly)"
            - name: Backup and restore test for electronic records
              description: |-
                ## Purpose
                Ransomware, a failed server or a cloud account lockout can take every record offline at once, and many practices discover only then that their backup was never tested. Restoring a sample of records from backup to a separate place proves the practice can recover, shows how long it takes and satisfies a duty most regulators and data authorities treat as basic.

                ## Milestones
                1. The backup arrangement for each system is written down: what, how often, where, and who checks it.
                2. At least one backup copy is held off site or in a separate account that ransomware cannot reach.
                3. A sample of records has been restored and opened successfully, with the time taken noted.
                4. A restore test is repeated every quarter and logged.

                ## Notes
                If a cloud practice system holds your records, ask the supplier in writing how long they keep backups and how you would get a full export if you left.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A documented backup arrangement exists with an off-site copy, and a logged restore test succeeds at least once a quarter."
                cadence: rolling
              tasks:
                - "Ask your IT provider or software supplier to describe current backups in writing"
                - "Confirm that one copy sits off site or in a separate account"
                - "Restore five sample records to a test location and open them"
                - "Run and log a sample restore test @recurring(quarterly)"
            - name: File opening checklist for new patients and clients
              description: |-
                ## Purpose
                Most records problems start on day one: a misspelt name that splits one patient into two charts, a missing date of birth, no record of who may be contacted, or a consent form never scanned. A short opening checklist used by reception or the file opener makes every new file complete, matched to the right person and ready for the professional.

                ## Milestones
                1. A checklist lists the identity checks, contact preferences, consents and conflict or duplicate checks needed to open a file.
                2. The practice system's new record screen requires the essential fields.
                3. Reception staff have practised the checklist on ten real openings.
                4. A duplicate record search is part of every opening.

                ## Notes
                Start from the **Operational checklist** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every new file is opened against a written checklist, and a sample of twenty new files shows no missing essential fields or duplicates."
                cadence: rolling
              tasks:
                - "List the fields and documents every new file must contain"
                - "Add a duplicate record search step before opening"
                - "Make the essential fields mandatory in the practice system"
                - "Check the last twenty opened files against the checklist"
            - name: Monthly file quality sampling
              description: |-
                ## Purpose
                Standards slip quietly, and the first time an owner sees a poor note is often when a lawyer asks for it. Pulling a small random sample of files each month, five per professional, and scoring them against the note standard catches drift early, gives each professional specific feedback and builds a record that the practice checks its own work.

                ## Milestones
                1. A short scoring sheet based on the note standard is in use.
                2. Five random files per professional are sampled each month.
                3. Each professional receives their scores and one specific point to improve.
                4. Scores are kept so trends across the year can be seen.

                ## Notes
                Rotate who samples. Peer review across professionals is more useful, and less resented, than the owner checking everyone.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five files per professional are scored every month, with feedback given and twelve months of scores kept."
                cadence: rolling
              tasks:
                - "Turn the note standard into a ten-point scoring sheet"
                - "Pick five random files per professional and score them @recurring(monthly:12)"
                - "Give each professional their scores and one improvement point"
                - "Chart the scores at the end of each quarter"
            - name: Access request procedure and log
              description: |-
                ## Purpose
                Patients and clients can usually ask for a copy of what the practice holds about them, and data protection laws commonly set a deadline of around a month with little room for delay. A written procedure, an identity check, a log with each request's due date and a habit of checking the log means requests are answered on time, with third-party information properly removed, instead of found in a tray after the deadline.

                ## Milestones
                1. A written procedure covers receiving, verifying identity, gathering, reviewing, redacting and sending.
                2. A log records every request with date received, due date and date completed.
                3. Staff at reception know to pass any request, verbal or written, to the records lead the same day.
                4. Rules for requests from parents, attorneys and representatives are written down.

                ## Notes
                Check the current deadline and whether any fee may be charged under your own law. Many laws now forbid fees for a first copy.
              priority: high
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every access request in the last twelve months appears in the log with a completion date within the legal deadline."
                cadence: rolling
              tasks:
                - "Confirm the legal deadline and fee rules for access requests in your country"
                - "Write the procedure on one page"
                - "Set up the request log with a due date column"
                - "Review open requests against their due dates @recurring(monthly:8)"
            - name: Third-party disclosure log and approvals
              description: |-
                ## Purpose
                Insurers, employers, the police, courts, other professionals and family members all ask for records, and each needs a different answer. Logging every request, checking the consent or legal basis for each, and having the records lead approve anything unusual gives the practice an audit trail and stops well-meant disclosures that breach confidentiality.

                ## Milestones
                1. A log records every third-party request with who asked, what for, the basis for disclosure and what was sent.
                2. A one-page guide tells staff which requests need written consent, which need a court order, and which go to the lead.
                3. Disclosures are sent by a secure method and only the minimum necessary information is released.
                4. The log is reviewed monthly for patterns and mistakes.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every disclosure to a third party in the past year is logged with its basis and approver, and monthly reviews are recorded."
                cadence: rolling
              tasks:
                - "Set up a disclosure log with basis and approver columns"
                - "Write the one-page guide on who needs consent or a court order"
                - "Brief reception on routing police and court requests to the lead"
                - "Review the disclosure log for errors and patterns @recurring(monthly:16)"
            - name: Quarterly user access review
              description: |-
                ## Purpose
                Former staff, locums and IT contractors often keep logins long after they leave, and permissions drift as people change roles. Comparing the practice system's user list with the current staff list every quarter, and removing what nobody can justify, is a small task that closes one of the commonest routes to a breach.

                ## Milestones
                1. The user lists of every system holding records are exported each quarter.
                2. Each account is matched to a current person and role.
                3. Leavers' and unused accounts are disabled the same week.
                4. A leaver checklist removes access on a person's last day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews a year are recorded, with no active account belonging to someone who has left."
                cadence: rolling
              tasks:
                - "Export user lists from each system that holds records"
                - "Match every account to a current staff member or contractor"
                - "Disable accounts for leavers and anyone unused for ninety days @recurring(quarterly)"
                - "Add records access removal to the leaver checklist"
            - name: Records audit trail monitoring for snooping
              description: |-
                ## Purpose
                Staff looking at the records of neighbours, relatives, colleagues or well-known clients is one of the most common and damaging breaches, and the audit trail shows it if anyone looks. Periodic checks of high-risk records, with staff told in advance that access is monitored, deter snooping and catch it early.

                ## Milestones
                1. Staff are told in writing that access to records is logged and checked.
                2. A list of high-risk records is kept: staff, their families, public figures and sensitive cases.
                3. Access to those records is checked against a legitimate reason.
                4. Any unexplained access is investigated under the disciplinary procedure.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Access to high-risk records is checked against a legitimate reason at least quarterly, with checks and any investigations recorded."
                cadence: rolling
              tasks:
                - "Tell all staff in writing that record access is monitored"
                - "List the high-risk records to check"
                - "Pull the audit trail for high-risk records and check each access @recurring(quarterly)"
                - "Write down how unexplained access will be investigated"
            - name: Annual retention and destruction run
              description: |-
                ## Purpose
                Retention schedules that are never applied protect nothing. Once a year, pulling every file past its retention date, checking for legal holds and open matters, getting sign-off, then destroying securely with a certificate turns the schedule into practice, and it frees storage that is costing money every month.

                ## Milestones
                1. A list of files past their retention date is produced from the system and the archive.
                2. Files under a legal hold, complaint or open matter are removed from the list.
                3. The records lead and owner have signed off the destruction list.
                4. Destruction is completed by a secure method and a certificate or log entry is kept for each batch.

                ## Notes
                Keep the destruction log permanently. It is the proof that a file no longer exists if anyone asks for it later.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each year a signed destruction list and certificates show every file past retention destroyed, with holds excluded."
                cadence: cyclic
              tasks:
                - "Run a report of files past their retention trigger date @recurring(yearly)"
                - "Check the list against legal holds, complaints and open matters"
                - "Get the owner's signature on the destruction list"
                - "Book secure destruction and file the certificate"
            - name: File closing procedure
              description: |-
                ## Purpose
                Files that are never formally closed stay open forever, so the retention clock never starts and nobody knows whether work is finished. A closing procedure (final letter or discharge summary, return of original documents, final note, archive flag and retention date set) makes the end of each relationship visible and starts the countdown to lawful destruction.

                ## Milestones
                1. A written closing procedure exists for each type of file the practice holds.
                2. Closing letters or discharge summaries are standardised.
                3. Original documents belonging to clients are returned and the return recorded.
                4. Each closed file shows its closure date and calculated destruction date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Files are closed against a written procedure, and each closed file carries a closure date and destruction date in the system."
                cadence: rolling
              tasks:
                - "Write the closing steps for each file type"
                - "Draft a standard closing letter for clients and a discharge note for patients"
                - "Review files inactive for a year and close those that are finished @recurring(monthly:22)"
                - "Record the destruction date on each closed file"
            - name: Incoming results and correspondence filing
              description: |-
                ## Purpose
                Lab results, court letters or tax notices scanned into the wrong record, or left unfiled for a week, are both a confidentiality breach and a safety or deadline risk. A daily filing routine, with a two-point identity match and a rule that the responsible professional sees anything that needs action, keeps the unfiled pile at zero.

                ## Milestones
                1. One person per day owns the unfiled tray and the shared results or correspondence inbox.
                2. Every item is matched on at least two identifiers before filing.
                3. Items needing action are routed to the responsible professional and marked as seen.
                4. Misfiles are recorded and corrected the same day.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The unfiled tray and shared inbox are cleared every working day, and misfiles are logged and corrected the same day."
                cadence: rolling
              tasks:
                - "Set a rota for who owns the unfiled tray each day"
                - "Write the two-identifier matching rule on the scanning station"
                - "Clear the unfiled tray and the shared results inbox @recurring(daily)"
                - "Log every misfile found and how it was corrected"
            - name: Clear desk and screen lock routine
              description: |-
                ## Purpose
                Charts left on a reception counter, a screen visible from the waiting room, a printer tray full of someone's medical report: these are the breaches patients and clients actually notice. A short end-of-week check of desks, screens, printers and bins builds the habit and gives the owner evidence that the basics are watched.

                ## Milestones
                1. Screens auto-lock after a short idle time on every device.
                2. Screens visible from public areas are turned or fitted with privacy filters.
                3. Confidential waste bins are in place by every printer and desk.
                4. A Friday check is recorded with any issues raised at the next staff meeting.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Auto-lock is set on every device and a weekly clear desk check is recorded with issues followed up."
                cadence: rolling
              tasks:
                - "Set screen auto-lock on every practice device"
                - "Sit in the waiting room and note any screen or paper you can read"
                - "Place a locked confidential waste bin by each printer"
                - "Walk desks, printers and bins and note anything left out @recurring(weekly:fri)"
            - name: Records breach and near miss log
              description: |-
                ## Purpose
                Breaches in a practice are usually small: an email to the wrong client, a letter in the wrong envelope, a lost USB stick. Many laws require serious breaches to be reported to the data authority within days, and the decision is only defensible if every incident is logged and assessed quickly. Logging near misses too shows where the next real breach will come from.

                ## Milestones
                1. A breach response procedure sets out who assesses, who decides on reporting, and the deadline.
                2. A log captures every breach and near miss with date, what happened, people affected, risk and action.
                3. Staff know to report within an hour of noticing, without blame for honest mistakes.
                4. The log is reviewed monthly and each pattern produces a fix.

                ## Notes
                Check the reporting deadline to your data authority and your indemnity insurer's notification terms. Both can be short, and late notification can affect cover.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every breach and near miss is logged within a day with a reporting decision recorded, and monthly reviews produce at least one fix per pattern."
                cadence: rolling
              tasks:
                - "Confirm the breach reporting deadline in your law and your insurance policy"
                - "Write a one-page breach response procedure"
                - "Set up the breach and near miss log"
                - "Review the log and agree fixes for repeat causes @recurring(monthly:27)"
            - name: Annual records management review
              description: |-
                ## Purpose
                Laws change, the practice adds services, staff come and go and the retention schedule ages. A yearly review that pulls together the access request log, breaches, sampling scores, destruction certificates and any regulator feedback gives the owner one honest picture and a short list of improvements for the year ahead.

                ## Milestones
                1. A one-page summary covers requests answered on time, breaches, sampling trends and destruction completed.
                2. The retention schedule, privacy notice and duty map are checked for changes in law or service.
                3. Three to five improvements are chosen, each with an owner and a date.
                4. The review is minuted at a partners' or management meeting.

                ## Notes
                Start from the **Compliance control** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "A yearly review summary and an action list with owners and dates are minuted at a management meeting."
                cadence: cyclic
              tasks:
                - "Gather the year's logs, sampling scores and destruction certificates"
                - "Check the retention schedule and privacy notice against changes in law"
                - "Hold the annual records review with the partners @recurring(yearly)"
                - "Assign each improvement an owner and date"
            - name: Confidentiality training for every staff member
              description: |-
                ## Purpose
                Most breaches are made by well-meaning people: a receptionist confirming an appointment to a caller, a junior talking about a case in a café. Induction training on confidentiality and records, with a yearly refresher built on the practice's own incidents, turns the rules into habits and is evidence regulators and insurers expect to see.

                ## Milestones
                1. A short induction session covers confidentiality, access, phones, email and breach reporting.
                2. Every current staff member, including cleaners and contractors with access, has completed it.
                3. Each person has signed a confidentiality undertaking held on their staff file.
                4. A yearly refresher uses examples from the practice's own breach and near miss log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every person with access to records has a signed undertaking and a training date within the last twelve months."
                cadence: cyclic
              tasks:
                - "Draft a thirty-minute confidentiality session for new starters"
                - "Collect signed confidentiality undertakings from all staff and contractors"
                - "Record each person's training date on a single sheet"
                - "Run the confidentiality refresher using the year's incidents @recurring(yearly)"
            - name: Writing defensible notes at the end of each session
              description: |-
                ## Purpose
                Professionals often write notes in batches at the end of the day, from memory, which is when the detail that later matters goes missing. Practising concise, contemporaneous notes, written in the last few minutes of each appointment or call, protects the professional in a complaint and makes handover to a colleague safe.

                ## Milestones
                1. The owner has read the regulator's and indemnity insurer's guidance on note writing.
                2. Appointment lengths include a few minutes for notes, or a note window is blocked in diaries.
                3. Ten of the owner's own recent notes have been rewritten against the practice standard as practice.
                4. A colleague has reviewed a sample and confirmed they could pick up the case from the notes alone.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A colleague confirms they could continue care or work on five of the owner's files from the notes alone, written on the day."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your indemnity insurer's guidance on note writing"
                - "Block a note window at the end of each appointment for two weeks"
                - "Rewrite ten of your own recent notes against the practice standard"
                - "Ask a colleague to review five files and say what is missing"
            - name: Data protection law for practice owners
              description: |-
                ## Purpose
                Owners carry the legal duty as the controller of patient and client information but rarely have time to study the law that sets it. Working through a short course or the data authority's guidance for small organisations gives enough grasp of principles, rights, special categories such as health data, and international transfers to ask advisers the right questions.

                ## Milestones
                1. The data authority's guidance for small organisations in your country has been read.
                2. A short course or webinar on data protection for professional practices is complete.
                3. The owner can explain the main principles, individual rights and the special rules for health or sensitive data.
                4. Any change the learning suggests is added to the annual review action list.

                ## Notes
                Where your country has no data protection law yet, your professional regulator's confidentiality rules still apply, and clients abroad may bring their own law with them.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The owner has completed a data protection course or the authority's guidance and recorded at least three actions for the practice."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Find the data authority's guidance for small organisations"
                - "Book a short data protection course for professional practices"
                - "Write a one-page summary of the rules on sensitive data"
                - "Add the actions you identify to the annual review list"
            - name: Consent and authority for minors and representatives
              description: |-
                ## Purpose
                Who can see a teenager's notes, a separated parent asking about a child, an attorney for an elderly client, a spouse wanting a deceased patient's file: these questions arrive at reception without warning. Learning the practice's rules for each situation, checked with your regulator's guidance, means staff have an answer instead of guessing.

                ## Milestones
                1. The rules on minors, parental responsibility, attorneys, guardians and deceased persons are summarised for your jurisdiction.
                2. A decision guide tells staff what proof of authority to ask for in each case.
                3. Sensitive cases, such as a young person who asks that parents not be told, go to the professional and records lead.
                4. The guide has been tested against three real past requests.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A decision guide on minors, representatives and deceased persons is in use at reception and has been checked against real cases."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your regulator's guidance on minors and representatives"
                - "List the proof of authority needed for each type of representative"
                - "Write a one-page decision guide for reception"
                - "Test the guide against three past requests"
            - name: When confidentiality can be set aside
              description: |-
                ## Purpose
                Confidentiality is not absolute: safeguarding concerns, serious risk to others, court orders and some statutory reporting duties can require disclosure. Professionals who are unsure either disclose too readily or freeze when it matters. Studying your regulator's guidance and agreeing how the practice makes and records these decisions protects both the person and the professional.

                ## Milestones
                1. The statutory reporting duties and regulator guidance that apply to your profession are listed.
                2. A decision process names who is consulted, including your indemnity insurer's advice line.
                3. A template records the decision, the reasons and what was disclosed.
                4. Every professional has discussed two anonymised scenarios using the process.

                ## Notes
                This project prepares the practice to make these decisions well. Each real case still needs the professional's judgement and, where appropriate, advice from your insurer or lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written disclosure decision process and record template exist, and every professional has worked through two scenarios with it."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the reporting duties that apply to your profession"
                - "Save your indemnity insurer's advice line number in the procedure"
                - "Draft a template for recording a disclosure decision"
                - "Run two anonymised scenarios at a team meeting"
            - name: Secure email and messaging habits
              description: |-
                ## Purpose
                Email sent to the wrong address, autocomplete picking the wrong client, attachments that are not encrypted and practice discussions on personal messaging apps are now the main route for records leaving a practice. A short, practical set of habits, taught and checked, cuts misdirected email sharply.

                ## Milestones
                1. A one-page email rule set covers checking recipients, encryption, subject lines and attachments.
                2. Autocomplete is switched off or limited on practice email accounts.
                3. A delay on outgoing email gives staff a short chance to recall a message.
                4. Staff have practised sending an encrypted attachment and a secure link.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Email rules are written and taught, autocomplete is limited, a send delay is active and misdirected emails fall in the breach log."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the one-page email rules"
                - "Turn off address autocomplete on practice accounts"
                - "Set a short send delay on every mailbox"
                - "Have each staff member send a test encrypted attachment"
            - name: Caller identity verification script for reception
              description: |-
                ## Purpose
                Callers pretending to be a patient, a spouse or an insurer are a well-known way to obtain records, and a friendly receptionist is the easiest target. A short verification script, with set questions and a call-back rule for anyone requesting information, protects people without making genuine callers feel interrogated.

                ## Milestones
                1. A script lists the identity questions for patients or clients and the information never given by phone.
                2. A call-back rule uses the number on file, never one the caller gives.
                3. Reception staff have role-played the script with three difficult callers.
                4. A note of each refused or suspicious call goes into the breach and near miss log.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Reception uses a written verification script with a call-back rule, practised in role-play by every receptionist."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the identity questions reception must ask"
                - "List what is never confirmed or given over the phone"
                - "Role-play three difficult callers with each receptionist"
                - "Pin the script beside every reception phone"
            - name: Scanning paper records into the electronic file
              description: |-
                ## Purpose
                Practices moving from paper keep both for years, which doubles the storage and confuses everyone about which is the true record. A planned scanning project, with quality checks and a decision on whether paper can then be destroyed, gives one complete electronic record and frees space for clinical or client work.

                ## Milestones
                1. The volume of paper is measured and a scanning approach chosen: in-house, bureau or scan-on-demand.
                2. A scanning standard sets resolution, file naming, indexing and quality checks.
                3. Your regulator's position on destroying paper after scanning is confirmed in writing.
                4. All active files are scanned and checked, with a plan for the archive.

                ## Notes
                Scan active files first. Scanning a decade of closed files that will be destroyed in two years is usually wasted money.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every active paper file is scanned to a written standard, quality checked and indexed, with a recorded decision on the paper originals."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Count the boxes and cabinets of paper records"
                - "Get quotes from two scanning bureaus and cost an in-house option"
                - "Ask your regulator whether paper may be destroyed after scanning"
                - "Write the scanning and indexing standard"
                - "Check a sample of scanned files against the originals"
            - name: Choosing a secure shredding and archive provider
              description: |-
                ## Purpose
                Offsite archives and shredding firms handle the practice's most sensitive material, and a careless one can turn a routine collection into a reportable breach. Choosing on security, chain of custody and certificates of destruction, not only on price per box, gives the owner a supplier they can defend.

                ## Milestones
                1. Two or three providers are compared on security, chain of custody, certificates and retrieval times.
                2. References from other practices have been taken.
                3. A contract includes confidentiality, data processing terms and audit rights.
                4. The first collection is witnessed or tracked and its certificate filed.

                ## Notes
                Start from the **Vendor** template.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A provider is chosen against written criteria, under a contract with data processing terms, and the first destruction certificate is filed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List your criteria for security, certificates and retrieval"
                - "Request quotes and security details from three providers"
                - "Call one reference practice for each shortlisted provider"
                - "Match each collection to a destruction certificate @recurring(monthly:4)"
            - name: Encrypting laptops, phones and portable media
              description: |-
                ## Purpose
                Lost laptops and phones that hold records are a reportable breach if unencrypted and often a non-event if encrypted. Encrypting every device, banning unencrypted USB sticks and enabling remote wipe is one of the cheapest improvements a practice can make and is increasingly expected by indemnity insurers.

                ## Milestones
                1. Every laptop, tablet and phone used for practice work is listed with its owner.
                2. Full-disk encryption and a passcode are confirmed on each device.
                3. Remote wipe is enabled for phones and tablets that access practice email or records.
                4. Unencrypted USB sticks are withdrawn and replaced with encrypted ones or secure transfer.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A device register shows encryption, passcode and remote wipe confirmed for every device that touches records, checked each quarter."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every device used for practice work and who holds it"
                - "Check encryption and passcode status on each device"
                - "Enable remote wipe on phones and tablets"
                - "Collect and replace unencrypted USB sticks"
                - "Check new and returned devices against the register @recurring(quarterly)"
            - name: Secure exchange of documents with clients
              description: |-
                ## Purpose
                Clients send passports, tax returns, scans and reports by ordinary email, and practices reply the same way, so sensitive documents sit unprotected in inboxes for years. Deciding on one secure method, a portal, encrypted email or secure links, and moving clients onto it reduces risk and makes the record easier to find.

                ## Milestones
                1. Current methods of document exchange with clients are listed with their risks.
                2. Two or three secure options are compared on cost, ease for clients and how documents reach the file.
                3. One method is chosen and recorded as the practice default.
                4. New clients are told the method at file opening and existing clients are moved over.

                ## Notes
                Choose the method your oldest and least technical clients can use. A portal nobody logs into sends everything back to email.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A secure document exchange method is chosen against written criteria and used as the default for new clients."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List how documents reach you from clients today"
                - "Compare two or three secure exchange options"
                - "Test the chosen option with two of your least technical clients"
                - "Add the method to the file opening checklist"
            - name: Ending clinical photos on personal phones
              description: |-
                ## Purpose
                Clinicians and vets photograph wounds, teeth, skin and injuries on their own phones because it is quick, and those images then sync to personal cloud accounts and family tablets. Giving staff a practice-owned way to take and file images, and clearing what already sits on personal devices, removes a large and invisible store of sensitive records.

                ## Milestones
                1. A rule is written that clinical or client images are taken only on practice devices or a secure app.
                2. A practice device or app is in place that files images directly into the record.
                3. Each professional has confirmed in writing that existing images on personal devices are filed and deleted.
                4. Consent for photographs is captured in the record.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Clinical images are taken only on practice devices or a secure app, and every professional has signed that personal copies are deleted."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask each professional how they take and store images today"
                - "Choose a practice device or secure app that files images to the record"
                - "Write the rule on clinical photographs and consent"
                - "Collect signed confirmations that personal copies are deleted"
            - name: Corrections and amendment requests
              description: |-
                ## Purpose
                Patients and clients sometimes ask for a record to be changed: a wrong date of birth, a diagnosis they dispute, an opinion they find offensive. Most laws give a right to correct inaccurate facts, while professional opinion is usually annotated rather than deleted. A clear procedure answers each request fairly and keeps the original visible.

                ## Milestones
                1. A procedure distinguishes factual errors, which are corrected, from disputed opinion, which is annotated.
                2. Every correction is dated, signed and leaves the original entry visible.
                3. The person receives a written reply explaining what was changed or why not.
                4. Requests are logged alongside access requests.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written amendment procedure exists and every correction request is logged with a written reply and an audit trail in the record."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check how your practice system records amendments"
                - "Write the procedure for facts versus disputed opinion"
                - "Draft a standard reply letter for each outcome"
                - "Add a correction request column to the access request log"
            - name: Data processing terms with every supplier
              description: |-
                ## Purpose
                The practice software company, the IT support firm, the cloud email provider, the transcription service, the lab and the shredding firm all handle your records. Most data protection laws require a written contract with each one that sets what they may do with the data, and owners rarely know which suppliers have signed one.

                ## Milestones
                1. Every supplier with access to records is listed from the inventory.
                2. Each has signed data processing terms or a contract clause, filed and dated.
                3. Suppliers storing data outside the country are noted, with the transfer basis.
                4. A yearly check confirms terms are current and suppliers still needed.

                ## Notes
                Start from the **Compliance control** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "Every supplier that handles records has signed data processing terms on file, reviewed in the last twelve months."
                cadence: cyclic
                effort_hours_estimate: "5"
              tasks:
                - "List every supplier that can access or store records"
                - "Request signed data processing terms from those without them"
                - "Note where each supplier stores data"
                - "Review supplier terms and remove suppliers no longer used @recurring(yearly)"
            - name: Records inspection readiness
              description: |-
                ## Purpose
                A regulator's inspection, a data authority enquiry or an indemnity insurer's risk visit will ask for the same handful of things: retention schedule, access logs, training records, breach log, backup tests and a sample of files. Assembling them into one evidence pack, and running a mock inspection, turns a stressful visit into an afternoon.

                ## Milestones
                1. An evidence pack holds the duty map, retention schedule, privacy notice, logs, training records and test results.
                2. A mock inspection by a colleague or adviser has sampled ten files and the logs.
                3. Gaps from the mock inspection are listed with owners and dates.
                4. The pack is updated after each annual records review.

                ## Notes
                Start from the **Remediation plan** template for the gaps the mock inspection finds.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A complete records evidence pack exists and a mock inspection has been held, with every gap given an owner and date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Check what your regulator asks for about records at inspection"
                - "Gather the logs, schedule and training records into one folder"
                - "Ask a colleague from another practice to run a mock inspection"
                - "List the gaps found with owners and dates"
            - name: Records breach tabletop exercise
              description: |-
                ## Purpose
                Deciding within days whether to report a breach, who to tell and what to say is hard to do well for the first time under pressure. A one-hour tabletop exercise, walking the team through a realistic scenario such as a stolen laptop or ransomware on the practice system, tests the breach procedure and shows its gaps before they matter.

                ## Milestones
                1. A realistic scenario is written for the practice, with a twist halfway through.
                2. The owner, records lead, practice manager and IT contact have walked through it in one sitting.
                3. Decisions, timings and gaps are written up within a week.
                4. The breach procedure has been updated with what was learned.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A tabletop breach exercise has been held and written up, and the breach procedure updated within two weeks."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a breach scenario for your type of practice"
                - "Book one hour with the owner, records lead and IT contact"
                - "Run the exercise and note each decision and its timing"
                - "Update the breach procedure with what was learned"
            - name: Records integrity check after a system change
              description: |-
                ## Purpose
                Migrating to new practice software or merging databases is when records silently go missing: attachments that did not move, notes stripped of their author, duplicate patients merged wrongly. A planned integrity check, comparing counts and samples before the old system is switched off, catches losses while they can still be recovered.

                ## Milestones
                1. Record counts by type are taken from the old system before migration.
                2. The same counts are taken in the new system and differences explained.
                3. Fifty sampled records are compared field by field, including attachments, authors and dates.
                4. A read-only copy or full export of the old system is retained for the retention period.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Record counts reconcile between old and new systems, fifty samples match, and a read-only copy of the old data is retained."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Take record counts by type from the current system"
                - "Agree a fifty-record sample covering every record type"
                - "Compare the sample field by field after migration"
                - "Arrange a read-only copy of the old system before switch-off"
            - name: Moving a records archive to new premises
              description: |-
                ## Purpose
                An office move puts every paper record in boxes, in corridors and in a removal van, often handled by strangers. Planning the records part of a move (what is destroyed first, what is scanned, how boxes are sealed, numbered and tracked, who signs at each end) avoids the breach and the lost box that are otherwise almost certain.

                ## Milestones
                1. Files past retention are destroyed before the move rather than moved.
                2. Every box is sealed, numbered and listed, with no names visible on the outside.
                3. A signed handover sheet tracks boxes out of the old premises and into the new.
                4. A count at the new premises confirms every box arrived and is locked away.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every records box moved is listed, signed out and signed in, with a final count matching and no box unaccounted for."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Run a destruction pass on files past retention before packing"
                - "Number and list every box without names on the outside"
                - "Brief the removal firm on handling and confidentiality"
                - "Count boxes in at the new premises against the list"
            - name: Records for a solo practitioner
              description: |-
                ## Purpose
                Solo professionals with no administrator are records lead, receptionist and IT department at once, and also the single point of failure. Keeping the system light (one system of record, automatic backups, a short retention schedule, a sealed letter for a nominated colleague) gives a sole practitioner a defensible setup in a few evenings rather than a compliance programme.

                ## Milestones
                1. All records sit in one system of record, with no parallel paper or personal folders.
                2. Backups run automatically and a restore has been tested.
                3. A simplified retention schedule and privacy notice are in place.
                4. A nominated colleague holds sealed instructions for accessing records if you cannot.

                ## Notes
                Your professional body or insurer may offer a records template pack for sole practitioners. It is usually a better start than adapting a large practice's policies.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A solo practice has one system of record, a tested backup, a retention schedule and a nominated colleague holding access instructions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Move any notes kept outside your main system into it"
                - "Switch on automatic backups and test one restore"
                - "Adapt a professional body records template to your practice"
                - "Write sealed access instructions for a nominated colleague"
            - name: Therapy notes and the separate process record
              description: |-
                ## Purpose
                Counsellors and psychologists hold some of the most sensitive records there are, and the line between the clinical record and private process or supervision notes matters when clients, courts or insurers ask for access. Agreeing what goes in each, how long each is kept and how they are disclosed protects clients and clinicians alike.

                ## Milestones
                1. The practice has a written position on what belongs in the clinical record and what in process or supervision notes.
                2. Your regulator's and professional body's guidance on process notes and their disclosure has been checked.
                3. Clients are told at contracting what is recorded and who can see it.
                4. Supervision notes avoid identifying clients and have their own retention rule.

                ## Notes
                Many jurisdictions treat any note about a client as part of their record for access purposes. Check before assuming process notes are private.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written position on clinical, process and supervision notes, checked against professional guidance, is used in client contracting."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your professional body's guidance on process notes"
                - "Write what belongs in the clinical record and what does not"
                - "Add a records paragraph to the client contract"
                - "Set a retention rule for supervision notes"
            - name: Client file ownership in law and accounting firms
              description: |-
                ## Purpose
                When a client moves to another firm, they often ask for their whole file, and disputes follow about which papers belong to the client, which to the firm, and whether unpaid fees allow the file to be held. Setting out ownership in the engagement terms and having a transfer procedure avoids complaints and regulator referrals.

                ## Milestones
                1. The firm's position on which documents belong to the client and which to the firm is written, following your regulator's guidance.
                2. Engagement letters explain file ownership, copying charges and retention.
                3. A file transfer procedure sets timescales, what is copied and how transfer is recorded.
                4. Any lien over files for unpaid fees is checked with your regulator's rules before use.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Engagement letters state file ownership, and every client file transfer in the year follows a written procedure with a transfer record."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your regulator's guidance on ownership of client files"
                - "Add a file ownership paragraph to the engagement letter"
                - "Write the file transfer procedure and timescale"
                - "Record the last three file transfers in the new format"
            - name: Veterinary records, owners and animals
              description: |-
                ## Purpose
                A veterinary record is about an animal but the confidentiality belongs to the client, which creates its own questions: a new owner asking for history, a separated couple disputing a dog, an insurer wanting the full clinical history, a referral practice needing everything at once. Clear rules for each keep the practice consistent and the client relationship intact.

                ## Milestones
                1. Rules cover access by current, previous and joint owners and by insurers.
                2. Clinical history transfers to other practices follow a written procedure with client consent.
                3. Records of animals that change ownership are handled according to your regulator's guidance.
                4. Reception has a short guide for the five most common requests.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written guide covers owner, previous owner, insurer and referral requests for veterinary records and is used at reception."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your veterinary regulator's guidance on client confidentiality"
                - "List the five most common requests reception receives"
                - "Write the rule for each request"
                - "Agree a transfer form for clinical history to other practices"
            - name: Records when a practice is bought, merged or sold
              description: |-
                ## Purpose
                Records are often the most valuable and most regulated asset in a practice deal, and patients and clients have not agreed to their information being sold. Planning how records transfer, who becomes responsible for them, what notices go out and what the outgoing owner keeps access to protects both sides and is commonly required by regulators.

                ## Milestones
                1. The regulator's rules on transferring records on a change of ownership are confirmed.
                2. The sale or merger agreement says who holds records, who is responsible, and how the seller can access them for claims.
                3. Patients or clients receive notice of the change and any choice to move elsewhere.
                4. The records transfer is completed and reconciled against the inventory.

                ## Notes
                Records duties continue after the deal. A seller may still need access years later to answer a complaint or claim, so write that right into the agreement.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The deal agreement sets records responsibility and seller access, notices are sent and the transfer reconciles against the inventory."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask your regulator what it requires when records change hands"
                - "Give your lawyer the inventory and retention schedule for the deal"
                - "Draft the notice to patients or clients about the change"
                - "Reconcile transferred records against the inventory"
            - name: Records custodian if the owner dies or the practice closes
              description: |-
                ## Purpose
                When a sole owner dies, becomes ill or closes the practice, records do not disappear: they must still be kept, made available and eventually destroyed, and families are often left with filing cabinets they cannot lawfully open or dump. Naming a custodian, with an agreement and funding for storage, spares the family and protects patients and clients.

                ## Milestones
                1. A custodian, such as a colleague, another practice or a records storage firm, has agreed in writing to take the records.
                2. The agreement covers storage cost, access requests and destruction at the end of retention.
                3. Your will or business continuity plan names the custodian and where the instructions are.
                4. The regulator's requirements for records on closure have been checked.

                ## Notes
                Some regulators or professional bodies run a scheme for records of closed practices. Ask before paying for a private arrangement.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed custodian agreement exists, is referenced in the owner's will or continuity plan and is reviewed every year."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your regulator what happens to records when a practice closes"
                - "Approach a colleague or practice to act as records custodian"
                - "Agree storage cost and access duties in writing"
                - "Tell your executor and your lawyer where the agreement is"
                - "Confirm the custodian arrangement still stands @recurring(yearly)"
            - name: Records in a Caribbean practice
              description: |-
                ## Purpose
                Data protection law across the region is uneven: some countries have enacted modern acts, others have laws not yet fully in force, and clients may live on several islands or abroad. Hurricanes, flooding and power cuts also make physical and server storage riskier than in many places. Mapping the law where you practise and building storage for the hurricane season protects records the practice cannot replace.

                ## Milestones
                1. The data protection law of your country, and its commencement status, is confirmed with a local adviser.
                2. Clients or patients in other islands or abroad, and any rules that follow them, are identified.
                3. An off-island backup and a plan for paper records in a storm are in place.
                4. Records are checked and the backup tested before each hurricane season.

                ## Notes
                Barbados, Jamaica, the Bahamas, Trinidad and Tobago and several OECS states have data protection laws at different stages. Check the current position rather than relying on a summary.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The practice has a confirmed note of its data protection law status, an off-island backup and a hurricane records plan checked each year."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Ask a local adviser for the current status of your data protection law"
                - "List clients or patients who live in other countries"
                - "Set up an off-island backup for electronic records"
                - "Test the backup and move paper above flood level before hurricane season @recurring(yearly)"
            - name: Legal hold on records when a claim is threatened
              description: |-
                ## Purpose
                Once a claim, complaint or investigation is reasonably expected, destroying related records, even under the normal retention schedule, can be treated as destroying evidence. A legal hold procedure lets the owner freeze specific files, emails and backups quickly, tell staff, and lift the hold properly when the matter ends.

                ## Milestones
                1. A written procedure defines when a hold is triggered and who can issue and lift it.
                2. Held files are flagged in the system and excluded from the destruction run.
                3. Staff receive a written hold notice listing what must be preserved.
                4. A hold register records each hold, its scope and the date it was lifted.

                ## Notes
                Notify your indemnity insurer as soon as a claim is threatened. Their claims team will often advise on what to preserve.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A legal hold procedure and register exist, and every held file is flagged and excluded from destruction until the hold is lifted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the trigger and authority for a legal hold"
                - "Check how the practice system can flag a held file"
                - "Draft a standard hold notice for staff"
                - "Create the hold register"
            - name: One records standard across several sites
              description: |-
                ## Purpose
                Practices that grow by opening or buying sites usually inherit a different filing habit, retention approach and access culture at each one. A single records standard, with a records champion per site and quarterly comparisons, keeps the group defensible as one controller and stops one weak site exposing all the others.

                ## Milestones
                1. Each site's records practices are compared against the group's retention schedule and procedures.
                2. A records champion is named at every site and meets the records lead regularly.
                3. Access, retention and breach procedures are identical across sites.
                4. Site sampling scores and breach counts are compared each quarter.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All sites follow one records standard, each has a named champion, and quarterly site comparisons are recorded."
                cadence: rolling
              tasks:
                - "Compare each site's records practice against the group standard"
                - "Name a records champion at each site"
                - "Compare sampling scores and breaches across sites @recurring(quarterly)"
                - "Close the largest gap at the weakest site first"
            - name: Anonymised records for teaching and research
              description: |-
                ## Purpose
                Case studies, conference talks, training material, audits and research all draw on patient or client records, and a detail like a rare condition, a town or a date can identify someone even without a name. A procedure for anonymisation, consent where needed and ethics approval for research lets the practice share learning without breaching confidentiality.

                ## Milestones
                1. Rules define when consent is needed and when anonymised data can be used without it.
                2. An anonymisation checklist covers direct and indirect identifiers.
                3. Every case study or dataset leaving the practice is checked by a second person.
                4. Research use is routed through the relevant ethics approval process.

                ## Notes
                Start from the **Risk register** template to note re-identification risks for small or unusual groups.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "An anonymisation procedure and checklist are in use, and every external case study or dataset has a recorded second-person check."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Read your regulator's guidance on using records for teaching"
                - "Write an anonymisation checklist with indirect identifiers"
                - "Require a second-person check for anything leaving the practice"
                - "Find the ethics approval route for research in your field"
---

# Patient and Client Records

This area is for the owner who carries the legal responsibility for every patient chart and client file the practice holds, whether that is a clinic, a law or accounting firm, a therapy or veterinary practice or a design consultancy. It starts with foundations (finding every record, naming who is accountable, mapping your duties, a retention schedule, a privacy notice, access rights and backups), then the operating machinery of opening, checking, disclosing, closing and destroying files, the skills of good notes and confidentiality, improvements such as scanning, encryption and secure exchange, dated moments like an inspection or an office move, situations for solo, therapy, legal, veterinary and Caribbean practices, and finally specialist work on legal holds, multi-site governance and anonymised data.

What repeats is a daily clear of the unfiled tray, a weekly clear desk check, monthly file sampling, access request and disclosure reviews, file closures and a breach log review, quarterly user access, device and storage checks, and a yearly destruction run, training refresher and records review. The Operational checklist, Vendor, Compliance control, Risk register and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
