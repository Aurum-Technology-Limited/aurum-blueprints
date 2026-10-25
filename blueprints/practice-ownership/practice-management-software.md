---
id: practice-ownership.practice-management-software
name: Practice Management Software
description: "A clear picture of the systems you run today, a software choice made against real requirements, a clean data migration and go-live, tight access controls, tested backups and staff who know the system well."
category: business
version: 1.0.0
tags: [practice-ownership, practice-management-software, small-business, practice-software, vendor-selection, data-migration, access-controls, staff-training]
author: Aurum Technology
starter_structure:
  templates:
    - vendor
    - operational-checklist
    - purchase-decision
    - training-program
    - risk-register
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Management Software
          description: "Choosing and running practice software: scheduling, records, billing and accounting links, data migration, access controls and staff training."
          projects:
            - name: Inventory of current practice systems and workarounds
              description: |-
                ## Purpose
                Most practices run on a main system plus a quiet layer of spreadsheets, paper diaries, shared inboxes and sticky notes that nobody has written down. Listing every system, what it holds, who uses it and which workarounds exist around it shows what any new or improved software actually has to replace, and it is the starting point for every decision in this area.

                ## Milestones
                1. Every piece of software and every spreadsheet or paper record the practice relies on listed on one page.
                2. Each item tagged with what it holds, who uses it and roughly what it costs a year.
                3. The workarounds staff use because the main system falls short written down in their own words.
                4. The three biggest gaps or duplications marked as the first problems to solve.

                ## Notes
                Walk the building and sit with reception, billing and a professional for half an hour each. The workarounds people rely on rarely appear in any system list.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A one-page inventory of every system, spreadsheet and paper record in use, with owner, cost and known workarounds, and the top three gaps marked."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every login and subscription the practice pays for from the last bank statement"
                - "Sit with reception for 30 minutes and note every spreadsheet or paper list they use"
                - "Ask each professional which task the system makes them do twice"
                - "Mark the three biggest gaps on the inventory and share it with the partners"
            - name: Software requirements list from every role
              description: |-
                ## Purpose
                Software chosen from a sales demo usually fits the owner and frustrates the front desk, or the reverse. A written requirements list, gathered from reception, billing, clinicians or fee earners and the practice manager, and split into must have and nice to have, turns a vague wish for better software into something every vendor can be scored against.

                ## Milestones
                1. Requirements collected from at least one person in every role that touches the system.
                2. Each requirement written as a testable statement, such as booking a recall from the patient record in two clicks.
                3. The list split into must have, should have and nice to have, agreed by the owners.
                4. Deal breakers named, such as local data hosting, a specific accounting link or offline access.

                ## Notes
                Write requirements as tasks people do, not features they have heard of. A requirement like online booking means little until it says who books, what they can see and what happens next.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A prioritised requirements list with at least one contribution from every role and the deal breakers marked, signed off by the owners."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Send each role a short form asking for the five tasks they do most in the system"
                - "Rewrite each answer as a testable requirement statement"
                - "Hold a 45 minute session with the owners to rank must have against nice to have"
                - "Mark the deal breakers in bold and date the final version"
            - name: Software owner and decision group for the practice
              description: |-
                ## Purpose
                When nobody owns the system, settings drift, updates are ignored and every staff complaint goes to whichever partner is nearest. Naming one system owner, a small decision group and a simple rule for who can change settings gives the software a steward, and stops changes being made on a busy afternoon without anyone knowing.

                ## Milestones
                1. One named system owner with protected time each month for the role.
                2. A decision group of three or four people covering clinical or professional, front desk and finance views.
                3. A written rule for which changes the owner can make alone and which need the group.
                4. The arrangement shared with all staff so they know where requests go.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named system owner and decision group, with a one-paragraph change rule shared with all staff."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask who already fixes the system when it misbehaves and talk to them about the role"
                - "Choose three or four people for the decision group across the main roles"
                - "Write one paragraph on which settings changes need group approval"
                - "Announce the system owner and the request route at the next staff meeting"
            - name: Total cost of the software you run today
              description: |-
                ## Purpose
                The licence fee is often less than half of what software really costs once add-on modules, per-user charges, card processing, text message bundles, hardware, IT support and staff time are counted. A full yearly cost baseline gives you an honest number to compare any new system against, and often shows savings available without switching at all.

                ## Milestones
                1. Every software, hosting and support charge from the last twelve months totalled.
                2. Usage charges such as text reminders, e-signatures and storage added separately.
                3. An estimate of staff hours lost each week to workarounds, costed at their hourly rate.
                4. A single yearly figure and a cost per professional recorded for later comparisons.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A yearly total cost of ownership figure for current software, including usage fees and an estimate of workaround time, recorded with its workings."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export twelve months of supplier payments and filter for software and IT"
                - "Add usage charges such as text bundles and card terminal fees"
                - "Estimate weekly hours lost to workarounds with the practice manager"
                - "Write the total and the cost per professional at the top of the inventory"
            - name: Data map of where practice information lives
              description: |-
                ## Purpose
                Before choosing, migrating or securing anything, you need to know which records sit in which system, where each system stores them and who can reach them. A data map covering appointments, clinical or matter notes, documents, images, billing, payroll and email answers the questions vendors, regulators and insurers will ask, and it shows where sensitive information has leaked into places it should not be.

                ## Milestones
                1. Each type of practice data listed with the system that holds it and where that system is hosted.
                2. Places where sensitive data has drifted, such as personal email, desktop folders or messaging apps, identified.
                3. The legal entity holding each set of data noted, for example the vendor or a cloud provider.
                4. The map saved where the system owner and the data protection lead can find it.

                ## Notes
                Retention periods and patient or client access requests belong to the records area. This map is about where the data physically and contractually sits.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A data map showing every category of practice data, its system, hosting location and responsible party, with stray copies listed for clean-up."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the categories of data the practice holds on one sheet"
                - "Ask each vendor in writing which country and provider hosts your data"
                - "Search shared drives and desktops for exported patient or client lists"
                - "Agree a clean-up date for every stray copy found"
            - name: User accounts and access roles register
              description: |-
                ## Purpose
                Shared logins, a receptionist with full admin rights and an account still active for someone who left two years ago are among the most common findings when a practice system is reviewed. A register of every account, the role it holds and who approved it is the base for safe access, and it makes every later monthly review quick.

                ## Milestones
                1. Every user account in each practice system exported and listed in one register.
                2. Each account matched to a named person, with shared and generic logins flagged.
                3. A small set of standard roles defined, such as reception, billing, professional, manager and administrator.
                4. Accounts for leavers disabled and shared logins replaced with personal ones.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register listing every account with its named owner and standard role, with no shared logins and no active accounts for former staff."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the user list from the main practice system"
                - "Match each account to a current staff member and flag the rest"
                - "Define five standard roles and what each should be able to see"
                - "Disable every account that belongs to someone who has left @priority(high)"
            - name: Vendor contract and support terms file
              description: |-
                ## Purpose
                Nobody wants to search old emails for the support number, the service level or the notice period while the system is down on a Monday morning. Pulling each software contract, order form and support agreement into one file, with the key terms summarised on a cover page, means you can hold vendors to what they promised and never miss a renewal deadline.

                ## Milestones
                1. Signed contracts, order forms and current price schedules saved for every main system.
                2. A cover page per vendor with term end date, notice period, price rise clause and support hours.
                3. Service level commitments and any credits for outages noted.
                4. Data return and termination terms summarised in plain words.

                ## Notes
                Start from the **Vendor** template. If a vendor cannot produce the contract you signed, ask for it in writing now rather than during a dispute.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One file holding every software contract with a cover page of term, notice period, price rise, support and data return terms for each vendor."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Search email and the shared drive for every software contract and order form"
                - "Ask any vendor whose contract is missing to send the signed copy"
                - "Fill in the cover page for each vendor with dates and notice periods"
                - "Put each notice deadline in the practice calendar two months ahead"
            - name: Backup and recovery check on the current system
              description: |-
                ## Purpose
                Many owners assume the vendor backs everything up, then discover after a ransomware attack or a corrupted server that backups were partial, untested or overwritten. Confirming what is backed up, how often, where, and how long a restore takes tells you the real risk today, whether the system is cloud hosted or sits on a server in the back office.

                ## Milestones
                1. Written confirmation from the vendor or IT support of what is backed up and how often.
                2. At least one backup copy confirmed as stored separately from the main system.
                3. The time to restore from backup estimated, and compared with how long the practice could cope without the system.
                4. Gaps such as unbacked scanned documents or imaging files listed with an owner to fix them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note of backup scope, frequency, location and restore time for the main practice system, with every gap assigned to a named person."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Email the vendor or IT support asking what is backed up, how often and where"
                - "Check whether any backup copy is kept offline or with a separate provider"
                - "Ask how long a full restore would take and write the answer down"
                - "List the files and systems that are not covered by any backup"
            - name: Downtime procedure for when the system is down
              description: |-
                ## Purpose
                Internet outages, vendor incidents and power cuts happen, and a full waiting room or a court deadline does not stop for them. A short downtime procedure, with a printed day list, paper forms and a way to record what happened for entry later, lets the practice keep seeing patients or clients safely and stops data being lost in the scramble.

                ## Milestones
                1. A one-page procedure covering who decides the system is down and who tells the vendor.
                2. A printed or offline copy of the next day's schedule produced every evening.
                3. Paper forms for notes, payments and bookings kept in a known place at reception.
                4. A back-entry step so everything recorded on paper is entered once the system returns.
                5. A practice drill run and the procedure updated from what went wrong.

                ## Notes
                Start from the **Operational checklist** template. Keep a copy of the vendor's support number and status page address on paper, since the email with it may be inside the system that is down.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page downtime procedure with paper forms in place at reception and one drill completed and recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write who declares downtime and who calls the vendor on one page"
                - "Set the system to print or save tomorrow's schedule each evening"
                - "Put a labelled folder of paper forms at reception"
                - "Run a 30 minute downtime drill with the front desk @recurring(yearly)"
            - name: Weekly appointment book and schedule template review
              description: |-
                ## Purpose
                Schedule templates set up years ago often no longer match how professionals work: appointment lengths are wrong, emergency slots are missing and recalls clog the book. A short weekly look at next week's book, with the front desk, catches gaps, double bookings and template errors before they turn into a lost morning or an overrun clinic.

                ## Milestones
                1. Next week's appointment book checked every week for gaps, overlaps and missing professionals.
                2. Appointment types and lengths matched to how long each service actually takes.
                3. A protected urgent or same-day slot built into each professional's template.
                4. Template changes logged so the system owner can see what changed and why.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly book review held for eight consecutive weeks, with appointment types and lengths reset to match actual service times."
                cadence: rolling
              tasks:
                - "Compare booked lengths with actual times for the five most common appointment types"
                - "Add a protected urgent slot to each professional's template"
                - "Review next week's book with reception for gaps and overlaps @recurring(weekly:thu)"
                - "Record each template change in the change log"
            - name: Monthly user access review
              description: |-
                ## Purpose
                Access drifts quickly: a locum is given full rights for a busy week, a temporary receptionist is never removed, a billing clerk gains access to clinical notes. A fifteen minute monthly review against the access register keeps rights matched to roles and gives you evidence for your regulator, insurer or data protection authority that access is controlled.

                ## Milestones
                1. The user list compared against the access register every month.
                2. Accounts of leavers, locums and temporary staff closed within a set number of days of their last shift.
                3. Any account with administrator rights justified in writing.
                4. Each review dated and signed off by the system owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve dated monthly access reviews on file, with no account for a departed person left active for more than seven days."
                cadence: rolling
              tasks:
                - "Export the current user list and compare it to the access register @recurring(monthly:9)"
                - "Close accounts for anyone who left or finished a locum shift"
                - "Check that each administrator account still needs those rights"
                - "Sign and date the review in the register"
            - name: Quarterly restore test from backup
              description: |-
                ## Purpose
                A backup that has never been restored is a hope, not a plan. Restoring a sample of records, documents and a day of appointments every quarter, or asking the vendor to evidence that they have, proves the backup works and tells you how long recovery really takes.

                ## Milestones
                1. A test restore of sample records and documents completed each quarter, or written evidence obtained from the vendor.
                2. The time taken to restore recorded each time.
                3. Any failed or partial restore escalated to the vendor or IT support within a week.
                4. A one-line result for each test kept in a restore log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly restore tests in the log within a year, each showing records restored and the time taken."
                cadence: rolling
              tasks:
                - "Ask the vendor or IT support how a test restore can be done safely"
                - "Restore a sample of ten records and two scanned documents @recurring(quarterly)"
                - "Record the time taken and any files that failed"
                - "Raise any failed restore with the vendor as a priority ticket"
            - name: Release notes and update review routine
              description: |-
                ## Purpose
                Cloud systems change every few weeks, and a moved button or a new default setting can quietly change how bookings, invoices or consent forms work. Reading the release notes monthly and testing anything that touches daily work means the practice hears about changes from you rather than from a confused patient or client.

                ## Milestones
                1. The system owner subscribed to the vendor's release notes and status updates.
                2. Each month's changes skimmed and the ones affecting the practice noted.
                3. Changes that alter daily work explained to staff in a short message before they land.
                4. New features worth switching on added to the super user meeting agenda.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly note of relevant vendor changes kept for six months, with staff told in advance of each change that affects daily work."
                cadence: rolling
              tasks:
                - "Subscribe the system owner to release notes and the vendor status page"
                - "Read the month's release notes and mark changes that affect the practice @recurring(monthly:18)"
                - "Send staff a three-line message about any change to daily screens"
                - "Add promising new features to the super user meeting agenda"
            - name: Vendor support ticket log
              description: |-
                ## Purpose
                Problems reported by phone and forgotten tend to come back, and without a record it is impossible to show a vendor that an issue has happened twelve times this quarter. Logging every support ticket with its date, impact and outcome gives you evidence for escalation, service credits and the renewal conversation.

                ## Milestones
                1. One shared log where every support request is recorded with date, ticket number and impact.
                2. Open tickets checked weekly and chased when the vendor misses its response time.
                3. Repeating problems grouped so they can be escalated as one issue.
                4. A quarterly summary of ticket volume and resolution times kept for the renewal file.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A ticket log in use for three months, with open tickets reviewed weekly and a quarterly summary added to the vendor file."
                cadence: rolling
              tasks:
                - "Create a shared log with columns for date, ticket number, impact and outcome"
                - "Ask staff to log every support call before the end of their shift"
                - "Chase open tickets past the vendor's response time @recurring(weekly:fri)"
                - "Group repeating problems and escalate them to the account manager"
            - name: Integration and sync error check
              description: |-
                ## Purpose
                Links between the practice system and accounting, laboratories, card terminals, e-prescribing or document signing fail silently more often than they fail loudly. A weekly look at sync logs and error queues catches invoices that never reached the ledger and results that never reached the record, before they become a month-end mystery or a missed result.

                ## Milestones
                1. Every live integration listed with where its error log or queue can be found.
                2. Error queues checked every week and cleared or escalated.
                3. Recurring failures traced to a cause such as a changed password, an unmapped code or an expired certificate.
                4. A named back-up person able to run the check when the system owner is away.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every integration with its error location, and a weekly check recorded for at least eight weeks running."
                cadence: rolling
              tasks:
                - "List every integration and where its error log can be viewed"
                - "Check each error queue and clear or escalate failures @recurring(weekly:tue)"
                - "Note the cause of any failure that repeats twice in a month"
                - "Show a second person how to run the check"
            - name: Data quality sweep for duplicates and gaps
              description: |-
                ## Purpose
                Duplicate patient or client records, missing dates of birth, stale addresses and unlinked documents cause wrong letters, failed claims and conflict check misses. A monthly sweep using the system's own reports keeps the database clean in small bites, which is far easier than a painful clean-up before a migration.

                ## Milestones
                1. Saved reports built for duplicate records, missing key fields and unlinked documents.
                2. Duplicates merged each month following the vendor's merge procedure.
                3. Front desk prompts or mandatory fields added for the fields most often left blank.
                4. The count of problem records tracked so the trend is visible.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Duplicate and missing field counts recorded monthly for six months, with the total number of problem records falling."
                cadence: rolling
              tasks:
                - "Build saved reports for duplicates and records missing key fields"
                - "Run the reports and merge or fix the records found @recurring(monthly:23)"
                - "Make the most often skipped field mandatory at registration"
                - "Write the month's problem record count in the log"
            - name: Template and form library upkeep
              description: |-
                ## Purpose
                Letter templates, consent forms, engagement letters, intake questionnaires and note templates multiply over the years until staff use outdated versions with old prices, old addresses or wording the regulator has since changed. A quarterly tidy keeps one approved version of each, owned by someone who knows when it last changed.

                ## Milestones
                1. Every template in the system listed with an owner and last review date.
                2. Duplicate and obsolete templates archived so staff cannot pick them.
                3. Templates with fees, addresses or regulatory wording checked against current facts.
                4. A naming convention applied so the right template is easy to find.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A template list with owners and review dates, and a quarterly review recorded with obsolete templates archived."
                cadence: rolling
              tasks:
                - "Export or list every template and form in the system"
                - "Archive duplicates and templates nobody has used in a year"
                - "Review fee, address and regulatory wording in active templates @recurring(quarterly)"
                - "Rename templates to a simple shared convention"
            - name: Saved reports and scheduled exports upkeep
              description: |-
                ## Purpose
                Practice software holds the numbers owners need, but reports are often built once by a trainer and never checked again, so filters break when a new professional or service is added. Keeping a small set of saved reports and scheduled exports, and checking each month that they still run and still add up, means the figures that reach the partners are trustworthy.

                ## Milestones
                1. A short list of the reports the practice relies on, each saved in the system with a clear name.
                2. Scheduled exports set to go to the right people on fixed days.
                3. Each report's totals checked monthly against a second source such as the bank or the ledger.
                4. Filters updated whenever a professional, site or service is added.

                ## Notes
                What the partners do with the numbers belongs to the financial dashboard area. This project keeps the reports themselves accurate.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of saved reports with owners, and a monthly check showing each one still runs and reconciles to a second source."
                cadence: rolling
              tasks:
                - "List the reports the partners and manager actually read"
                - "Save each one with a clear name and a scheduled delivery"
                - "Check each report runs and agrees with a second source @recurring(monthly:3)"
                - "Update report filters when a new professional or service starts"
            - name: Workstation patching and device check
              description: |-
                ## Purpose
                Your practice system is only as safe as the reception PC with an outdated browser or the laptop a partner takes home. A monthly check that operating systems, browsers and antivirus are current, screens lock and disks are encrypted closes the openings attackers most often use, and is often a condition of cyber insurance.

                ## Milestones
                1. Every device that can reach the practice system listed with its user.
                2. Automatic updates, screen lock and disk encryption confirmed on each device.
                3. Devices that can no longer be updated listed for replacement.
                4. A monthly check recorded, by IT support or the system owner.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A device list with update, screen lock and encryption status, and a monthly check recorded for six months with no device left unpatched for over 30 days."
                cadence: rolling
              tasks:
                - "List every PC, laptop, tablet and phone that opens the practice system"
                - "Confirm automatic updates and screen lock are on for each device"
                - "Check update status across all devices and fix stragglers @recurring(monthly:12)"
                - "Mark devices that can no longer receive updates for replacement"
            - name: Super user meeting and change request queue
              description: |-
                ## Purpose
                Staff ideas and complaints about the system get lost in corridor conversations, and settings get changed by whoever shouts loudest. A monthly half hour with the super users, working through a simple change request queue, gives every request an answer and keeps configuration changes deliberate and recorded.

                ## Milestones
                1. One place where any staff member can submit a change request or problem.
                2. A super user named for each main role or site.
                3. A monthly meeting that decides each request: do, decline or park.
                4. Decisions and configuration changes recorded in the change log.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A change request queue in use and six monthly super user meetings held, each request with a recorded decision."
                cadence: rolling
              tasks:
                - "Set up a simple shared form for change requests"
                - "Name a super user for reception, billing and the professionals"
                - "Hold the super user meeting and decide each open request @recurring(monthly:27)"
                - "Tell each requester what was decided within a week"
            - name: Cloud versus on-premise hosting explained
              description: |-
                ## Purpose
                Vendors talk about cloud, hosted, hybrid and on-premise as if the difference were obvious, but the choice changes who patches the server, where data is stored, what happens when the internet fails and how costs fall over five years. An owner who understands the trade-offs can ask sharper questions and avoid a choice that suits the vendor more than the practice.

                ## Milestones
                1. The main hosting models described in your own words with one advantage and one risk each.
                2. The practice's own constraints noted, such as internet reliability, local IT support and imaging file sizes.
                3. Questions about data location, uptime and exit drafted for every vendor.
                4. A preferred hosting model recorded with reasons.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note comparing hosting models against the practice's constraints, ending in a preferred model with reasons."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read two vendor-neutral explainers on cloud and on-premise hosting"
                - "Record your internet outages over the last year from staff memory or the provider"
                - "Draft five hosting questions to ask every vendor"
                - "Write the preferred hosting model and why in one paragraph"
            - name: Interoperability standards basics for your profession
              description: |-
                ## Purpose
                Whether a system can talk to laboratories, imaging, insurers, e-prescribing, courts, tax portals or bank feeds depends on standards and published connections that few owners have heard named. Learning the handful that matter in your profession, such as HL7 and FHIR in healthcare or e-invoicing and open banking formats in professional firms, lets you tell a real integration from a promise on a roadmap.

                ## Milestones
                1. The external parties the practice exchanges data with listed.
                2. The standard or connection method each one uses identified.
                3. The difference between a built integration, a file export and a manual upload understood and noted.
                4. Integration questions added to the vendor demo script.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A list of external data exchanges with the standard each uses, and integration questions added to the demo script."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List every outside party the practice sends data to or receives data from"
                - "Ask your lab, insurer or tax portal which formats they accept"
                - "Note which links are automatic, file based or manual today"
                - "Add three integration questions to the vendor demo script"
            - name: Data protection duties with a software vendor
              description: |-
                ## Purpose
                Handing your records to a vendor to host usually leaves the practice responsible for them, and most data protection laws expect a written agreement setting out what the vendor may do with the data. Understanding the controller and processor split, sub-processors and cross-border transfer rules lets you check contracts properly and answer your regulator if asked.

                ## Milestones
                1. The roles of the practice and the vendor under your data protection law noted in plain words.
                2. Each vendor's data processing agreement located or requested.
                3. Sub-processors and hosting countries for each vendor listed.
                4. Open questions taken to your data protection adviser or lawyer.

                ## Notes
                This is organisational, not legal advice. Check the duties that apply in your country with your data protection authority's guidance or a lawyer.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A signed data processing agreement and a sub-processor list on file for every vendor holding practice records, with open questions sent to an adviser."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your data protection authority's guidance on using processors"
                - "Ask each vendor for its data processing agreement and sub-processor list"
                - "Note any hosting outside your country and the basis the vendor relies on"
                - "Send unresolved questions to your adviser in one email"
            - name: Super user training for the practice lead
              description: |-
                ## Purpose
                Practices that depend on the vendor's helpline for every settings change wait days for small fixes and pay for consultancy they did not need. Training one or two people to administrator level, through the vendor's own courses or certification, keeps everyday configuration in house and makes the practice a much more informed customer.

                ## Milestones
                1. The vendor's administrator or super user training path identified, with cost and time.
                2. One or two staff enrolled with protected study time.
                3. Core admin tasks practised in a test or sandbox environment.
                4. A short internal crib sheet written for the admin tasks the practice does most.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least one staff member has completed the vendor's administrator training and written a crib sheet for the practice's common admin tasks."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Ask the vendor for its administrator training options and costs"
                - "Book protected study time for the chosen super user"
                - "Practise user setup and template changes in the sandbox"
                - "Write a one-page crib sheet of the ten most common admin tasks"
            - name: Reading a vendor's security documentation
              description: |-
                ## Purpose
                Every vendor says it takes security seriously; the evidence is in independent reports such as SOC 2 or ISO 27001 certificates, penetration test summaries and incident history. Knowing what these documents prove, what they leave out and how to read their scope lets a small practice ask for real assurance without hiring a consultant.

                ## Milestones
                1. The difference between a certificate, an audit report and a self-assessment questionnaire understood.
                2. Security documents requested from each shortlisted or current vendor.
                3. The scope of each report checked to confirm it covers the product you use.
                4. Concerns and gaps listed for the contract negotiation.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Security evidence collected from each main vendor, with a one-line scope check and any gaps listed for negotiation."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read a short guide on what SOC 2 and ISO 27001 reports cover"
                - "Ask each vendor for its current security certificate and report summary"
                - "Check that the report scope names the product and hosting you use"
                - "List any gaps to raise before signing or renewing"
            - name: Workflow automation rules inside the system
              description: |-
                ## Purpose
                Most practice systems can send recall letters, chase unsigned forms, create follow-up tasks after a type of appointment or route documents to the right person, yet many practices use none of it. Learning the automation tools and switching on two or three well chosen rules saves front desk hours every week without buying anything new.

                ## Milestones
                1. The system's automation, task and workflow features understood from the vendor's guides.
                2. Three repetitive manual tasks chosen as candidates.
                3. Rules built and tested in the sandbox before going live.
                4. Time saved estimated after a month and each rule kept or switched off.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Three automation rules live and documented, each reviewed after a month with the time saved noted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the vendor's help pages on workflows and automated tasks"
                - "Ask reception which three tasks they repeat most each day"
                - "Build and test one rule in the sandbox"
                - "Review time saved after a month and keep or retire each rule"
            - name: Vendor shortlist and scripted demos
              description: |-
                ## Purpose
                Sales demos are designed to show the best screens, not your Monday morning. Shortlisting three vendors that meet the deal breakers and making each run the same script of real tasks, from booking a new patient or opening a matter to producing an invoice, gives a fair comparison scored by the people who will use the system.

                ## Milestones
                1. A long list cut to three vendors that meet every deal breaker.
                2. A demo script of eight to ten real tasks sent to each vendor in advance.
                3. Each demo scored by at least three staff from different roles on the same sheet.
                4. A preferred vendor and a runner-up recorded with scores and reasons.

                ## Notes
                Start from the **Purchase decision** template. Ask for a trial or sandbox login after the demo and try the script yourself; what the salesperson does in two clicks often takes six.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Three vendors demoed against the same scripted tasks and scored by staff from at least three roles, with a preferred vendor and runner-up chosen."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Ask two peer practices and your professional body which systems they use"
                - "Cut the long list to three vendors that meet every deal breaker"
                - "Ask the agent to turn the requirements list into a ten-task demo script"
                - "Book demos with the scoring staff present at each one"
            - name: Reference calls with practices on the shortlisted systems
              description: |-
                ## Purpose
                Vendors pick references who love them, so the most useful calls are with practices of your size and profession that you find yourself, ideally ones that switched in the last two years. Asking them about migration, support response and surprise costs is the cheapest insurance against a five-year mistake.

                ## Milestones
                1. Two references per shortlisted vendor, at least one found independently of the vendor.
                2. The same set of questions asked on every call.
                3. Answers on migration, support, outages and hidden costs recorded side by side.
                4. Scores on the shortlist adjusted in light of what references said.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least two reference calls per shortlisted vendor completed with a common question set, and the shortlist scores updated."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Find a practice on each system through your professional network or user groups"
                - "Write eight standard reference questions"
                - "Ask each reference what they wish they had negotiated"
                - "Update the scoring sheet after the last call"
            - name: Contract negotiation and exit clauses
              description: |-
                ## Purpose
                The time to secure a fair price cap, real service levels and a guaranteed way to get your data out is before signing, when the vendor wants the deal. Negotiating the contract on paper, with a lawyer reviewing the final draft, protects the practice for the years when switching is hard and prices are easiest to raise.

                ## Milestones
                1. The vendor's standard contract read and the clauses that matter marked: term, price rises, service levels, liability, data return.
                2. A written list of requested changes sent to the vendor.
                3. Data export format, timing and cost on exit agreed in the contract.
                4. The final draft reviewed by your lawyer before any partner signs.

                ## Notes
                Ask for annual price rises capped at a fixed percentage or an inflation index, and for migration and training costs fixed in the order form rather than estimated.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed contract with a price rise cap, written service levels and a defined data export on exit, reviewed by a lawyer before signature."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Mark the term, price, service level, liability and exit clauses in the draft"
                - "Send the vendor a written list of requested changes"
                - "Ask for a sample data export file before signing"
                - "Book your lawyer to review the final draft"
            - name: Data migration plan and test runs
              description: |-
                ## Purpose
                Migration is where most software projects go wrong: appointment histories arrive without notes, balances do not match, documents lose their links to records. A written plan of what moves, what is archived, how it is mapped and how each test load is checked, with at least two trial runs, turns go-live from a gamble into a rehearsed event.

                ## Milestones
                1. A list of data to migrate, data to archive and data to leave behind, agreed with the owners.
                2. A field mapping from the old system to the new one, checked by someone who knows the old data.
                3. Two test migrations completed, each checked against counts and a sample of records.
                4. Opening balances and future appointments reconciled between old and new systems.
                5. A sign-off that the final migration is ready to run.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Two test migrations checked against record counts, a sample of 50 records and reconciled balances, with a written sign-off before the final run."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Agree with the owners which data moves, which is archived and which is left"
                - "Review the vendor's field mapping with the person who knows the old data best"
                - "Check the first test load against record counts and 50 sample records"
                - "Reconcile balances and future appointments after the second test load"
            - name: Role-based staff training before go-live
              description: |-
                ## Purpose
                Staff who meet the new system for the first time on go-live day make mistakes in front of patients and clients, and the bad habits stick. Short training sessions by role, with practice on a sandbox using realistic scenarios and a check that each person can do their core tasks, are what decide whether the new software is welcomed or resented.

                ## Milestones
                1. A list of core tasks for each role, taken from the requirements list.
                2. Training sessions scheduled by role, with cover arranged for the time away.
                3. Every staff member has completed their core tasks in the sandbox at least once.
                4. Quick reference cards for each role printed for the first weeks.
                5. A short induction for future new starters added to onboarding.

                ## Notes
                Start from the **Training program** template. Train as close to go-live as possible, within two weeks, so people remember what they learned.
              priority: medium
              deadlineOffsetDays: 140
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every staff member has completed role-based training and shown they can do their core tasks in the sandbox before go-live."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the core tasks for reception, billing, professionals and managers"
                - "Book training sessions by role within two weeks of go-live"
                - "Have each person complete their core tasks in the sandbox and tick them off"
                - "Print a one-page quick reference card for each role"
            - name: Online booking and automated reminders setup
              description: |-
                ## Purpose
                Online booking and text or email reminders reduce phone traffic and missed appointments, but set up carelessly they let people book the wrong service, fill urgent slots or receive reminders with too much detail. Choosing which appointment types can be booked online, writing reminder wording that protects confidentiality and measuring the effect makes the feature pay its way.

                ## Milestones
                1. Appointment types suitable for online booking chosen, with rules for new and existing patients or clients.
                2. Reminder timing and wording agreed, with no sensitive detail in the message.
                3. Consent to receive reminders captured and recorded.
                4. Missed appointment rate measured for three months before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Online booking live for chosen appointment types with confidential reminder wording, and missed appointment rates compared before and after over three months."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pull the last three months of missed appointment numbers as a baseline"
                - "Choose which appointment types can be booked online"
                - "Write reminder wording that names no service or condition"
                - "Compare missed appointments three months after launch"
            - name: Patient or client portal rollout
              description: |-
                ## Purpose
                A portal can let patients or clients complete forms, see invoices, upload documents and message the practice securely instead of by email, but only if people actually sign up. A planned rollout with clear rules for what goes through the portal, who answers messages and how quickly, gets it adopted without creating an unwatched inbox.

                ## Milestones
                1. The portal features to switch on chosen, and the ones to leave off for now.
                2. A response time and owner for portal messages agreed.
                3. Identity checks for portal sign-up agreed and written down.
                4. A sign-up target set and progress counted monthly for the first six months.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A portal live with chosen features, a named message owner and response time, and sign-up counts recorded for six months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the portal features available and choose three to start"
                - "Agree who answers portal messages and within how many working days"
                - "Write the identity check steps for new portal accounts"
                - "Add the portal invitation to the new patient or client welcome"
            - name: Accounting software link and ledger mapping
              description: |-
                ## Purpose
                When the practice system and the accounting software are linked badly, invoices post to the wrong income accounts, payments are counted twice and the bookkeeper rebuilds the month by hand. Agreeing a mapping of services, payment types and tax codes with your accountant, then testing it on a closed month, makes the link something the accounts can rely on.

                ## Milestones
                1. The link method chosen: a built integration, a scheduled export or a manual journal.
                2. Services, payment methods and tax codes mapped to ledger accounts and agreed with the accountant.
                3. One closed month posted through the link and reconciled to the practice system's own totals.
                4. A written procedure for what to do when the link fails.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A ledger mapping agreed with the accountant and one month posted through the link that reconciles to the practice system totals."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Ask your accountant which ledger accounts each service should post to"
                - "Map payment methods and tax codes in the integration settings"
                - "Post a closed month through the link and compare totals"
                - "Write a short procedure for a failed sync"
            - name: Multi-factor authentication rollout across the practice
              description: |-
                ## Purpose
                Stolen or guessed passwords are still the most common way into practice systems and email, and many insurers now ask whether multi-factor authentication is switched on. Rolling it out to every account, with a plan for staff without work phones and a recovery process, shuts that door at little cost.

                ## Milestones
                1. Every system that supports multi-factor authentication listed.
                2. A method chosen for staff, such as an authenticator app or hardware key, with an option for those without smartphones.
                3. Multi-factor authentication switched on for administrators first, then all users.
                4. A recovery procedure written for lost devices that does not bypass the check.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Multi-factor authentication active on every account in the practice system and email, with a written recovery procedure."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List which practice systems and email accounts support multi-factor sign-in"
                - "Switch it on for every administrator account this week"
                - "Agree an option for staff who do not use a work smartphone"
                - "Set a date for all remaining users and help them enrol"
            - name: Retiring paper forms with digital intake
              description: |-
                ## Purpose
                Clipboards of registration, history and consent forms take reception time to type in and introduce errors with every handwritten date of birth. Moving the most used forms to digital intake, completed before the visit or on a tablet in the waiting room, cuts double entry and lets the form data flow straight into the record.

                ## Milestones
                1. The paper forms in use counted and the three highest-volume ones chosen.
                2. Digital versions built in the practice system or its intake tool, with fields mapped to the record.
                3. A fallback for people who cannot or prefer not to use a digital form.
                4. Reception time saved estimated after a month, and the paper versions withdrawn.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The three highest-volume paper forms replaced by digital versions that write into the record, with a paper fallback kept for those who need it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Count how many of each paper form reception handles in a week"
                - "Build the highest-volume form digitally and test it on two staff"
                - "Agree the fallback for people who need a paper or assisted form"
                - "Withdraw the paper version once the digital one has run for a month"
            - name: Go-live cutover plan
              description: |-
                ## Purpose
                Go-live is a single dated event with many moving parts: the final data load, a light schedule, extra staff on the desk, vendor support on site or on call and a clear point at which you decide to proceed or roll back. Writing the cutover plan hour by hour, and rehearsing it, is what keeps the first day calm.

                ## Milestones
                1. A go-live date chosen in a quiet period, with professionals' schedules lightened for the first days.
                2. An hour-by-hour cutover plan with owners, from freezing the old system to the first booking in the new one.
                3. A go or no-go checklist and a rollback point agreed with the vendor.
                4. Floor walkers or vendor trainers booked for the first week.
                5. Patients, clients and referrers told of any change to booking or portals.

                ## Notes
                Start from the **Operational checklist** template. Avoid month ends, tax deadlines, holiday periods and the week of an inspection.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Go-live completed on the planned date following a written cutover plan, with the go or no-go decision recorded and no lost data found in the first-day checks."
                cadence: one-shot
                effort_hours_estimate: "24"
              tasks:
                - "Choose a go-live date away from month end and busy seasons"
                - "Write the cutover plan hour by hour with an owner for each step"
                - "Agree the go or no-go checklist and rollback point with the vendor"
                - "Reduce each professional's bookings for the first three days"
            - name: First 30 days after go-live stabilisation
              description: |-
                ## Purpose
                The weeks after go-live decide whether problems are fixed or become permanent workarounds. A daily stand-up, a single issues list and a 30-day review with the vendor catch configuration errors, missing data and training gaps while the vendor's implementation team is still engaged and paid to fix them.

                ## Milestones
                1. A daily ten minute stand-up held for the first two weeks.
                2. One issues list with each problem's impact, owner and status.
                3. Every critical issue resolved or escalated to the vendor within its agreed time.
                4. A 30-day review held with the vendor and remaining issues put into a written plan.

                ## Notes
                Keep the old system read-only and available through this period so staff can check what was there before.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A 30-day review held with the vendor, all critical issues closed and remaining issues in a dated written plan."
                cadence: one-shot
                effort_hours_estimate: "15"
              tasks:
                - "Set up a single issues list shared with the vendor"
                - "Hold a ten minute stand-up each morning for two weeks"
                - "Sort issues by impact and escalate critical ones the same day"
                - "Book the 30-day review with the vendor's implementation lead"
            - name: Annual software contract renewal and price review
              description: |-
                ## Purpose
                Renewals arrive as an automatic invoice with a price rise, and the window to negotiate closes weeks before. Starting the review three months ahead, with the ticket log, user counts and a market check in hand, gives the practice a bargaining position of its own: the realistic option to move or to drop unused modules.

                ## Milestones
                1. Renewal and notice dates for every main system in the practice calendar.
                2. Licence counts and modules matched to actual use, and unused ones listed for removal.
                3. Support performance over the year summarised from the ticket log.
                4. A renewal decision recorded: renew as is, renegotiate or begin a replacement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: decision
                success_criteria: "Each main software renewal reviewed at least 60 days before its notice deadline, with unused licences removed and the decision recorded."
                cadence: cyclic
              tasks:
                - "Start the renewal review three months before the notice deadline @recurring(yearly)"
                - "Compare paid licences and modules with actual logins"
                - "Summarise the year's support tickets for the account manager"
                - "Record the renewal decision and any agreed price in the vendor file"
            - name: Decommissioning and archiving the old system
              description: |-
                ## Purpose
                Old systems are often left running for years at full licence cost, or switched off before anyone checked that records past the migration cut-off are still reachable. Planning how the old data will be kept, read and eventually destroyed, then cancelling the old contract on time, closes the project properly.

                ## Milestones
                1. Data that was not migrated confirmed as archived in a readable format.
                2. A way to look up archived records agreed, such as a read-only licence or an export viewer.
                3. Old servers and devices wiped to a recognised standard, with a certificate where a contractor does it.
                4. The old contract cancelled within its notice period, with written confirmation.

                ## Notes
                How long the archived records must be kept is set by your regulator and the records area. Check that before choosing an archive format.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The old system's data archived in a readable form, its hardware wiped with a certificate and its contract cancelled with written confirmation."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Confirm with the vendor what format the full archive export will be in"
                - "Test opening five archived records from the export"
                - "Book certified wiping of old servers and workstations"
                - "Send written notice to cancel the old contract and keep the confirmation"
            - name: Solo practitioner choosing an all-in-one system
              description: |-
                ## Purpose
                A solo professional has no practice manager and no IT person, so the right system is the one that handles booking, notes, invoicing and payments in one place, needs little setup and has support that answers quickly. A lighter selection, two trials and a short checklist, gets a sole practitioner set up in weeks without the full process a group practice needs.

                ## Milestones
                1. Five must-have tasks for a one-person practice written down.
                2. Two all-in-one systems trialled for at least a week each with real, non-sensitive test data.
                3. Monthly cost compared, including card fees and text charges.
                4. One system chosen and set up, with backups and multi-factor sign-in confirmed.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "An all-in-one system chosen after two trials, set up with multi-factor sign-in and confirmed backups, with its monthly cost recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the five tasks you do most in a working week"
                - "Start free trials of two all-in-one systems built for your profession"
                - "Book, note and invoice a test appointment in each"
                - "Compare the full monthly cost including payment fees"
            - name: Software for a newly opened practice
              description: |-
                ## Purpose
                New practices have no data to migrate but every setting to decide, and choices made in the rush to open, such as appointment types, fee codes and user roles, are hard to change later. Setting the system up properly in the weeks before opening, with a small configuration workbook, gives the practice a clean base to grow on.

                ## Milestones
                1. A configuration workbook listing services, appointment types, fees, tax codes and user roles.
                2. Templates for letters, invoices and consent built before the first patient or client.
                3. Payments, reminders and the accounting link tested end to end with test bookings.
                4. Backups, multi-factor sign-in and the downtime folder in place before opening day.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A configuration workbook completed and a full test booking, invoice and payment run through the system before the practice opens."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Create a configuration workbook with services, fees and user roles"
                - "Build the letter, invoice and consent templates you will need on day one"
                - "Run three test bookings through to payment and the accounts"
                - "Confirm backups and multi-factor sign-in before the first appointment"
            - name: Merging two practices onto one system
              description: |-
                ## Purpose
                After an acquisition or merger, running two systems doubles cost and splits reporting, yet the merge brings duplicate records, conflicting fee lists and two sets of staff habits. Choosing the surviving system on evidence and planning a careful merge of records keeps both teams on side and the data trustworthy.

                ## Milestones
                1. The surviving system chosen by comparing both against the combined practice's requirements.
                2. Duplicate patients or clients across the two databases identified before migration.
                3. Fee lists, appointment types and templates harmonised into one set.
                4. Staff from the absorbed practice trained and given a named super user.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Both practices running on one system with duplicates resolved, one harmonised fee list and every absorbed staff member trained."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Score both systems against the combined practice's requirements"
                - "Run a duplicate match across the two patient or client lists"
                - "Agree one fee list and set of appointment types with both teams"
                - "Name a super user from the absorbed practice"
            - name: Adding a second site to the same system
              description: |-
                ## Purpose
                Opening another location raises software questions a single site never faced: separate or shared schedules, which staff can see which site's records, site-level reporting and whether the licence covers it. Setting this up before the new site opens avoids staff booking into the wrong diary and reports that cannot split the sites apart.

                ## Milestones
                1. The vendor's multi-site setup and licence cost confirmed in writing.
                2. Site-level schedules, rooms and staff configured.
                3. Access rules agreed for which staff can see records across sites.
                4. Reports able to show each site separately and combined.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The second site configured with its own schedules, access rules and site-level reports before its first booking."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the vendor in writing how multi-site setup is licensed and priced"
                - "Configure rooms, schedules and staff for the new site"
                - "Decide which roles can see records from both sites"
                - "Test that saved reports split by site"
            - name: Vendor acquired, price rise or product sunset notice
              description: |-
                ## Purpose
                Practice software vendors are bought and merged often, and the letter that follows may announce a large price rise, a forced move to a new product or an end-of-life date. Responding calmly, by reading the contract, checking what can be negotiated and starting a quiet market check, keeps the practice in charge of the timetable.

                ## Milestones
                1. The notice read against the contract's price, term and termination clauses.
                2. Written questions sent to the vendor about timelines, pricing and data.
                3. A market check of two alternatives started in case the answers are poor.
                4. A decision recorded: accept, negotiate or begin a replacement.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written response to the vendor notice, a check of two alternatives and a recorded decision within 60 days of the notice."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Read the notice against the price rise and termination clauses in the contract"
                - "Send the vendor written questions about dates, pricing and data"
                - "Ask two peer practices how they are responding"
                - "Record the decision and next step in the vendor file"
            - name: Practice manager handover of system administration
              description: |-
                ## Purpose
                When the person who set up and runs the system leaves, they often take with them the admin passwords, the vendor contacts and the reasons behind every odd setting. A planned handover, with credentials moved to a shared password manager and the configuration written down, stops the practice being locked out of its own system.

                ## Milestones
                1. All admin credentials stored in a practice-owned password manager, not a personal one.
                2. Vendor contacts, contract details and support routes handed to the successor.
                3. Key configuration choices and their reasons written in a short system guide.
                4. The departing person's admin access removed on their last day.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A written system guide, admin credentials in a practice-owned password manager and the departing administrator's access removed on their last day."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Move every admin credential into a practice-owned password manager"
                - "Ask the agent to draft a system guide from the departing manager's notes"
                - "Introduce the successor to the vendor account manager"
                - "Remove the departing person's admin rights on their last day"
            - name: Cyber incident and ransomware response plan
              description: |-
                ## Purpose
                Practices hold exactly the data attackers want, and a ransomware attack can stop appointments, billing and access to records for days. A written response plan, naming who to call, how to isolate systems, who notifies the regulator, insurer and data protection authority, and how to work in the meantime, turns a crisis into a set of known steps.

                ## Milestones
                1. Key contacts listed on paper: IT support, vendor, cyber insurer, lawyer and the data protection authority.
                2. First steps for isolating affected devices written in plain words for any staff member.
                3. Notification duties under your data protection law and regulator rules checked with an adviser and recorded.
                4. The plan rehearsed in a short tabletop exercise with the owners and manager.

                ## Notes
                Start from the **Risk register** template to record the threats and controls. Your cyber insurer may require you to call their incident line before engaging anyone else, so check the policy now.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written incident response plan with paper contact list, checked notification duties and one tabletop rehearsal recorded."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Print a contact sheet with IT, vendor, insurer and lawyer numbers"
                - "Check your cyber policy for its incident line and notification rules"
                - "Write the first five steps any staff member takes when they see a ransom screen"
                - "Run a one-hour tabletop rehearsal with the owners @recurring(yearly)"
            - name: Audit trail review of record access
              description: |-
                ## Purpose
                Most practice systems log who opened, changed or exported each record, but the logs are rarely read until a complaint or a regulator asks. A short monthly review of high-risk events, such as staff opening records of family members or celebrities, bulk exports and after-hours access, deters misuse and gives you evidence that confidentiality is actively protected.

                ## Milestones
                1. The audit log reports available in the system understood and saved.
                2. A short list of high-risk events to review each month agreed.
                3. Staff told that access is monitored, as part of their induction.
                4. Each monthly review and any follow-up recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Six monthly audit trail reviews recorded, with every high-risk event either explained or followed up in writing."
                cadence: rolling
              tasks:
                - "Find the audit log reports in the system and save the useful ones"
                - "Agree the list of high-risk access events to check"
                - "Review bulk exports and after-hours access @recurring(monthly:15)"
                - "Add a line on access monitoring to the staff induction"
            - name: Custom integrations through the vendor API
              description: |-
                ## Purpose
                Larger practices eventually want data the standard screens cannot give, such as a live capacity board, a referral tracker or a link to a group reporting tool. Building on the vendor's published API, with a clear specification, a developer bound by a confidentiality agreement and an owner for maintenance, adds that capability without breaking support terms.

                ## Milestones
                1. The vendor's API documentation, rate limits and terms of use reviewed.
                2. A one-page specification of what the integration does and what data it touches.
                3. A developer engaged under a written agreement covering confidentiality and data handling.
                4. The integration tested in a sandbox and a named owner responsible for keeping it working.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A custom integration live on the vendor's published API, with a written specification, a developer agreement and a named maintenance owner."
                cadence: phased
                effort_hours_estimate: "30"
              tasks:
                - "Ask the vendor for API documentation and any partner programme terms"
                - "Write a one-page specification of the data the integration will touch"
                - "Sign a confidentiality and data handling agreement with the developer"
                - "Test the integration against a sandbox before connecting live data"
            - name: Evaluating AI documentation and note-taking tools
              description: |-
                ## Purpose
                AI scribes and drafting assistants promise to cut note writing and letter drafting time, and some are now built into practice systems. Evaluating one carefully, with a small pilot, consent from patients or clients, a clear view of where recordings and transcripts go and professional review of every output, tells you whether it saves time without new risks.

                ## Milestones
                1. One or two tools shortlisted, with their data handling and storage locations confirmed in writing.
                2. Your regulator's or professional body's guidance on AI tools read and noted.
                3. A four-week pilot with two professionals, consent captured and every output reviewed before filing.
                4. Time saved and errors found recorded, and a decision made to adopt, extend or stop.

                ## Notes
                The professional remains responsible for every note and letter. Treat AI output as a draft to check, never as the record itself.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A four-week pilot completed with consent recorded and outputs reviewed, ending in a written adopt, extend or stop decision with time saved measured."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your regulator's or professional body's guidance on AI tools"
                - "Ask the vendor where recordings and transcripts are stored and for how long"
                - "Prepare a consent script for patients or clients in the pilot"
                - "Record minutes saved and errors found for each pilot session"
---

# Practice Management Software

This area is for the owner or practice manager of a clinic, dental, veterinary, therapy, law, accounting or engineering practice who has to choose, set up and keep running the software the whole practice depends on: scheduling, records, billing, document management and the link to the accounts. It starts with foundations (an honest inventory of current systems, requirements from every role, a data map, an access register, backups and a downtime plan), then the operating routines that keep the system healthy, the knowledge an owner needs to judge vendors and hosting, the decisions of selection, contract, migration, training and integration, the dated events of go-live, renewal and retiring the old system, the situations of solo, new, merged and multi-site practices, and finally specialist work on cyber incidents, audit trails, custom integrations and AI documentation tools.

What repeats is a weekly look at the appointment book, the sync errors and the vendor ticket log, a monthly access review, patch check, release notes reading, data quality sweep, report check and super user meeting, a quarterly restore test and template tidy, and a yearly contract renewal, downtime drill and incident rehearsal. The Vendor, Operational checklist, Purchase decision, Training program and Risk register templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
