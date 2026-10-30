---
id: practice-ownership.telehealth-and-remote-services
name: Telehealth and Remote Services
description: "A clear scope for what your practice can deliver remotely, regulator and insurer checks, consent and identity steps, a chosen platform, safe escalation, remote billing and a launch you can review and improve."
category: business
version: 1.0.0
tags: [practice-ownership, telehealth-and-remote-services, small-business, telehealth, video-consultations, remote-services, consent, virtual-care]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - operational-checklist
    - training-program
    - purchase-decision
    - vendor
    - metrics-log
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Telehealth and Remote Services
          description: "Adding remote services to a practice: video consultations, regulator rules, consent, technology choice, billing and record keeping."
          projects:
            - name: Deciding which services suit remote delivery
              description: |-
                ## Purpose
                Not every appointment works over a screen: a medication review, a follow-up therapy session or a tax planning meeting usually does, while a first physical examination, a dental filling or a site inspection does not. Sorting every service the practice offers into remote, hybrid and in-person only gives you a scope to build around and stops staff booking the wrong thing remotely.

                ## Milestones
                1. Every service on the practice's fee list sorted into remote, hybrid or in-person only.
                2. Each remote or hybrid service given one sentence on why it is safe and useful at a distance.
                3. Services that need a physical check before any remote follow-up flagged as such.
                4. The scope agreed by the owners and circulated to reception and the professionals.

                ## Notes
                Ask each professional to sort their own services first, then compare. The disagreements are where the real clinical or professional judgement sits.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A one-page remote services scope listing every service as remote, hybrid or in-person only, agreed by the owners and shared with all staff."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Print the current fee list and mark each service remote, hybrid or in-person"
                - "Ask every professional to sort their own services the same way"
                - "Discuss the services where the sorting differs at the next partners' meeting"
                - "Circulate the agreed scope to reception and booking staff"
            - name: Regulator rules on remote consultations
              description: |-
                ## Purpose
                Most professional regulators publish guidance on remote work covering when it is appropriate, what must be recorded and whether a professional may consult a patient or client located in another country or state. Reading the guidance for your profession, and for each place your clients are likely to be sitting, prevents the most common breach in remote services: practising where you are not licensed.

                ## Milestones
                1. The current remote practice guidance from your regulator found, read and saved to the compliance folder.
                2. The rules on clients located outside your licensing jurisdiction summarised in plain words.
                3. Any duties to record the mode of consultation or the client's location noted.
                4. Open questions sent to the regulator or a professional body adviser, with replies filed.

                ## Notes
                Rules for a client who is temporarily abroad can differ from rules for one who lives abroad. Ask about both, especially if you serve a diaspora or travelling client base.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A two-page summary of the regulator's remote practice rules, including cross-border limits, filed with any written replies to open questions."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Search the regulator's website for remote or telehealth practice guidance"
                - "Summarise the rules on clients located outside your jurisdiction"
                - "List the record keeping duties specific to remote consultations"
                - "Email your open questions to the regulator or professional body adviser"
            - name: Insurer confirmation that remote work is covered
              description: |-
                ## Purpose
                Some indemnity and malpractice policies were written for in-person work and say nothing about video, phone or clients in other countries, and some exclude cross-border work entirely. A written confirmation from your insurer or broker, covering each professional and each remote mode, means a claim from a remote session will not be the first time anyone reads the small print.

                ## Milestones
                1. The current policy wording checked for any mention of remote, telephone or overseas work.
                2. A written question sent to the insurer covering video, phone, messaging and clients abroad.
                3. Written confirmation or an endorsement received for each mode the practice will offer.
                4. Any limits, such as excluded countries, added to the remote services scope.

                ## Notes
                Professionals who carry their own cover, such as associates or locums, need the same confirmation from their own insurer.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Written confirmation from the insurer that video, phone and message consultations are covered, with any exclusions recorded in the scope."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Search the policy wording for the words remote, telephone and overseas"
                - "Email the broker a list of every remote mode and location you plan to serve"
                - "Ask each professional with their own cover to obtain the same confirmation"
                - "File the replies and add any exclusions to the remote services scope"
            - name: Remote consent wording and capture
              description: |-
                ## Purpose
                Patients and clients agreeing to a video or phone session should understand what is different: the limits of a remote assessment, how the call is secured, whether it is recorded and what happens if the connection drops. A short consent statement, captured once at booking and confirmed at the start of each session, gives you evidence that the person chose remote knowingly.

                ## Milestones
                1. A plain-language remote consent statement drafted, under 200 words.
                2. The statement checked against your regulator's guidance and, where needed, by your adviser.
                3. A way of capturing consent at booking set up, such as a tick box or a signed form.
                4. A one-line verbal confirmation script written for the start of each session.

                ## Notes
                Consent to a remote session is not consent to recording. Treat recording as a separate, explicit choice the client can refuse without losing the appointment.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved remote consent statement is live in the booking process, and every remote session note shows consent confirmed at the start."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a 200-word plain-language remote consent statement"
                - "Compare the draft against the regulator's remote practice guidance"
                - "Add the consent capture step to the online or phone booking process"
                - "Write the one-line consent confirmation for professionals to read at the start"
            - name: Identity and location check at every remote session
              description: |-
                ## Purpose
                On a video or phone call it is easy to speak to the wrong person, a relative answering on someone's behalf, or a client sitting somewhere you are not allowed to advise. A fixed opening routine of confirming name, date of birth or reference, and current location protects confidentiality and gives emergency services an address if you ever need one.

                ## Milestones
                1. An identity check standard set, such as two identifiers or photo ID shown on camera for new clients.
                2. A question about the client's current address and who else is in the room added to the opening script.
                3. The check written into the remote session note template as a required field.
                4. Every professional who consults remotely briefed on the routine.
              priority: high
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Every remote session note in a sample of 20 shows identity, current location and others present recorded at the start."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide which two identifiers professionals will confirm on every call"
                - "Write the opening script covering identity, location and who else is present"
                - "Add the three checks as required fields in the remote note template"
                - "Brief every remote professional on the script at the next team meeting"
            - name: Private home consulting space standard
              description: |-
                ## Purpose
                Professionals consulting from home need a closed door, a neutral background, decent light and no one able to overhear, or confidentiality is lost the moment a partner walks past. A written standard, checked once for each person who works remotely, sets the same expectation for everyone and gives you something to point to if a client complains.

                ## Milestones
                1. A one-page home consulting standard covering privacy, background, lighting, sound and device security.
                2. Each remote professional's space checked against it, by photo or a short video call.
                3. Gaps such as a shared room or a weak router noted with a fix and a date.
                4. A rule agreed for what to do when the space is not private on a given day.

                ## Notes
                Headphones solve most overhearing problems on the professional's side. They do nothing for the client's side, which is why the opening script asks who else is present.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every professional who works remotely has had their space checked against the written standard, with any gaps closed or a fix date set."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page home consulting standard with five checks"
                - "Ask each remote professional to send a photo of their consulting set-up"
                - "Record the gaps for each person with a fix date"
                - "Agree the fallback when a home space is not private on the day"
            - name: Client technology readiness check before first call
              description: |-
                ## Purpose
                A first remote appointment that spends ten minutes on microphones and passwords is ten minutes of paid time lost and a poor first impression. Sending a short test link and a one-page guide when the appointment is booked, and offering a two-minute test call for anyone unsure, moves the problem out of the session.

                ## Milestones
                1. A one-page client guide written covering device, browser, quiet room, charging and what to do if the call drops.
                2. A self-test link from the platform added to every remote booking confirmation.
                3. A short reception test call offered to older or less confident clients.
                4. The number of first sessions delayed by technology noted for one month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every remote booking confirmation includes the client guide and test link, and fewer than one in ten first sessions start late because of technology."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft the one-page client guide for joining a remote appointment"
                - "Add the platform's self-test link to the remote booking confirmation"
                - "Agree when reception should offer a two-minute test call"
                - "Count late starts caused by technology over the next month"
            - name: Emergency escalation plan for remote sessions
              description: |-
                ## Purpose
                When a client collapses, discloses an intention to harm themselves or describes an emergency during a video call, the professional cannot walk down the corridor for help. A written escalation plan, with the client's location confirmed at the start, the local emergency number for that place and a second staff member who can phone while the professional stays on the call, turns panic into a sequence.

                ## Milestones
                1. A step-by-step escalation plan written for medical, mental health and safeguarding emergencies during remote sessions.
                2. A way of finding the emergency number for a client's location recorded, including for clients abroad.
                3. A named back-up staff member for each remote session block who can make calls.
                4. The plan approved by the clinical or professional lead and filed with the remote procedures.

                ## Notes
                Practices without clinical risk, such as law or accounting firms, still need a short version for a client in distress or disclosing abuse.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An approved escalation plan is filed, every remote session block has a named back-up, and a yearly drill is on the calendar."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the escalation steps for a medical or mental health emergency on a call"
                - "Record how staff will find the emergency number for any client location"
                - "Name a back-up staff member on the rota for each remote session block"
                - "Run a walk-through of the escalation plan with the remote team @recurring(yearly)"
            - name: Remote session note fields
              description: |-
                ## Purpose
                Notes from a remote session need a few things an in-person note does not: the mode used, the client's location, consent confirmed, who else was present and whether the call dropped or moved to phone. Adding these as fixed fields means the record shows how the service was delivered, which matters if a complaint or claim ever turns on what could be seen.

                ## Milestones
                1. The remote-specific fields agreed: mode, client location, consent, others present, technical problems, follow-up plan.
                2. The fields added to the note template in the practice system.
                3. A sentence added for when a remote session was converted to in-person or stopped early.
                4. Professionals shown the new fields with one worked example.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The remote note template with six fixed fields is live, and a sample of ten remote notes shows every field completed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List the six remote-specific fields the note must include"
                - "Ask the system administrator to add them to the note template"
                - "Write one worked example note for a remote session that dropped"
                - "Show professionals the new template at the next team meeting"
            - name: Data protection assessment for video and messaging
              description: |-
                ## Purpose
                Video platforms, chat tools and photo uploads move sensitive information through servers you do not control, often in other countries. A data protection impact assessment, written before launch, records what data flows where, the risks and the controls, and is what a data protection authority or regulator will ask to see after an incident.

                ## Milestones
                1. Every remote channel listed with what data it carries and where it is stored.
                2. Risks such as recording, screen sharing, link forwarding and lost devices scored in a risk register.
                3. A control named for each high or medium risk, with an owner.
                4. The assessment signed off by the owners and a yearly review date set.

                ## Notes
                Start from the **Risk register** template. Free consumer video apps and personal messaging accounts usually fail this assessment; find that out on paper before staff start using them.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A signed data protection impact assessment covering every remote channel, with controls and owners for each medium or high risk."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "List every channel staff use or plan to use with clients at a distance"
                - "Note where each channel stores data and whether it records by default"
                - "Score the main risks and assign a control and owner to each"
                - "Review the assessment against any platform or service changes @recurring(yearly)"
            - name: Weekly remote appointment book check
              description: |-
                ## Purpose
                Remote appointments fail in quiet ways: a link not sent, a session booked as video for a service the scope says is in-person only, a client in a country you cannot serve. Ten minutes each Monday looking through the week's remote bookings catches these before the client is sitting in front of a blank screen.

                ## Milestones
                1. A short checklist for the weekly book check written: link sent, service in scope, location allowed, consent captured.
                2. A named person responsible for the check each week, with cover.
                3. Problems found each week logged for one quarter.
                4. The most common booking error fixed at its source in the booking process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly check runs for 12 consecutive weeks, and the most frequent booking error found has a fix in the booking process."
                cadence: rolling
              tasks:
                - "Write the four-point checklist for remote bookings"
                - "Check every remote booking for the week against the checklist @recurring(weekly:mon)"
                - "Log each problem found with its cause"
                - "Change the booking process to prevent the most common error"
            - name: Daily remote consulting kit check
              description: |-
                ## Purpose
                Most lost minutes in remote sessions come from the professional's end: a dead headset battery, a camera blocked by an update, a laptop restarting mid-call. A two-minute check before the first remote session of the day, run from a pinned list, makes the professional the reliable part of the call.

                ## Milestones
                1. A pinned checklist covering camera, microphone, headset charge, platform login, lighting and a test call.
                2. The check built into the start of each remote session block on the rota.
                3. Spare headsets and a charger kept in each consulting room or home kit.
                4. Kit failures in sessions recorded for a month to show whether the check is working.

                ## Notes
                Start from the **Operational checklist** template. Keep it to six items or people stop reading it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every remote session block starts with the kit check, and kit failures during sessions fall to fewer than two a month."
                cadence: rolling
              tasks:
                - "Write the six-item kit checklist and pin it beside each remote workstation"
                - "Run the kit check before the first remote session of the day @recurring(daily)"
                - "Buy one spare headset and charger for each remote workstation"
                - "Record each kit failure that interrupts a session this month"
            - name: Virtual waiting room and reception script
              description: |-
                ## Purpose
                Clients waiting in a virtual lobby have no receptionist to tell them the professional is running ten minutes late, so they assume the link is broken and hang up. A virtual waiting room message, a reception script for late running and a rule on how long to wait before phoning keep the session alive and the client calm.

                ## Milestones
                1. The platform's waiting room switched on with a friendly holding message.
                2. A reception script for running late, connection trouble and switching to phone.
                3. A rule agreed: if a professional is more than five minutes late, reception phones or messages the client.
                4. Reception trained on admitting, moving and messaging clients in the virtual lobby.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "The waiting room message, late-running script and five-minute rule are in use, and reception can admit and message clients without help."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Switch on the platform waiting room and write the holding message"
                - "Draft the reception script for late running and dropped connections"
                - "Agree the five-minute rule with the professionals"
                - "Practise admitting and messaging a test client with each receptionist"
            - name: Monthly audit of remote session notes
              description: |-
                ## Purpose
                New fields and scripts drift within months unless someone looks. Pulling a small random sample of remote session notes each month and checking consent, identity, location and follow-up shows whether the routines are being followed and gives each professional specific feedback.

                ## Milestones
                1. An audit sheet set up with the remote-specific fields as columns.
                2. Ten remote notes sampled at random and scored each month.
                3. Results fed back to each professional privately, with one thing to improve.
                4. A quarter of results compared to show whether completion is rising.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten remote notes audited every month for six months, with completion of all remote fields at 90 percent or more by the sixth month."
                cadence: rolling
              tasks:
                - "Set up the audit sheet with one column per remote field"
                - "Sample and score ten remote session notes @recurring(monthly:12)"
                - "Send each professional their own result and one point to improve"
                - "Compare three months of scores at the quarterly governance meeting"
            - name: Remote platform access and device review
              description: |-
                ## Purpose
                Leavers who still have platform logins, shared accounts and home laptops without updates are the usual way remote services leak data. A short monthly access review, and a quarterly check that every device used for remote work is updated and encrypted, keeps the attack surface small.

                ## Milestones
                1. A list of everyone with platform access, their role and the devices they use.
                2. Leavers and unused accounts removed, and shared logins replaced with named accounts.
                3. Two-factor sign-in switched on for every account.
                4. Device updates and encryption confirmed for every laptop and phone used for remote work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No shared or leaver accounts on the platform, two-factor sign-in on every account, and a dated device check each quarter."
                cadence: rolling
              tasks:
                - "Export the list of platform users and match it against the staff list"
                - "Remove leavers and unused platform accounts @recurring(monthly:19)"
                - "Confirm every remote device is updated and encrypted @recurring(quarterly)"
                - "Switch on two-factor sign-in for any account that lacks it"
            - name: Remote billing codes and insurer rules check
              description: |-
                ## Purpose
                Insurers and government programmes often pay remote sessions under different codes, at different rates or only for certain services, and rules change with little notice. A monthly check of remote claims rejected or paid short, against each payer's current remote rules, stops a slow leak of unpaid work.

                ## Milestones
                1. Each main payer's current rules on video and phone sessions recorded in one table.
                2. The correct remote codes or modifiers set up in the billing system for each payer.
                3. Rejected or short-paid remote claims reviewed monthly with their reasons.
                4. Self-pay clients told in advance whether their insurer is likely to reimburse remote sessions.

                ## Notes
                Non-clinical practices can use the same routine for fixed-fee and hourly remote meetings, checking that remote time is captured and invoiced like any other.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A current payer table for remote sessions exists, and rejected remote claims are reviewed every month with a cause recorded for each."
                cadence: rolling
              tasks:
                - "Build a table of each payer's rules for video and phone sessions"
                - "Set up the remote codes or modifiers for each payer in billing"
                - "Review rejected and short-paid remote claims @recurring(monthly:8)"
                - "Add an insurer reimbursement note to the remote booking confirmation"
            - name: Missed and dropped remote session follow-up
              description: |-
                ## Purpose
                When a client does not join a video session, they may have forgotten, may have struggled with the link, or may be unwell, and in a clinical or therapy practice the last possibility matters. A fixed follow-up routine for no-shows and dropped calls, with a different response for clients flagged as higher risk, closes every gap the same day.

                ## Milestones
                1. A follow-up rule written: phone within 15 minutes, then a message, then a note in the record.
                2. Higher-risk clients flagged in the system so a professional, not reception, follows up.
                3. Dropped calls rebooked or finished by phone with the reason recorded.
                4. A weekly count of remote no-shows and dropped calls kept for three months.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every remote no-show and dropped call in a month has a recorded follow-up the same day, and the weekly count is kept for three months."
                cadence: rolling
              tasks:
                - "Write the same-day follow-up rule for remote no-shows"
                - "Flag higher-risk clients so a professional makes the follow-up call"
                - "Count the week's remote no-shows and dropped calls @recurring(weekly:fri)"
                - "Note the reason for each dropped call in the client record"
            - name: Secure message and photo inbox triage
              description: |-
                ## Purpose
                Once clients can send messages, photos and documents between appointments, someone has to read them, and a photo of a wound or a time-limited tax notice can sit unread for days. A daily triage of the secure inbox, with published response times and a rule for anything urgent, keeps asynchronous contact safe and stops it eating professionals' evenings.

                ## Milestones
                1. One secure channel chosen for client messages and uploads, with personal email and phone messaging ruled out.
                2. Response times published to clients, such as two working days, with an urgent route that is not the inbox.
                3. A named person triaging the inbox each working day and routing items to professionals.
                4. Time spent on messages tracked for a month to decide whether it should be billed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All client messages arrive through one secure channel, the inbox is triaged every working day, and published response times are met in a month's sample."
                cadence: rolling
              tasks:
                - "Choose the one secure channel clients will use for messages and uploads"
                - "Publish response times and the urgent route on the website and booking emails"
                - "Triage the secure inbox and route items to professionals @recurring(daily)"
                - "Track professional time spent on messages for one month"
            - name: Electronic signatures and remote document handling
              description: |-
                ## Purpose
                Working at a distance falls apart if the client still has to post back a signed form, and so do prescriptions, referral letters, engagement letters and reports that need a signature. Setting up a compliant electronic signature and document delivery route, and checking it monthly, keeps remote work remote from booking to final document.

                ## Milestones
                1. Every document that needs a signature in remote work listed, with who signs it.
                2. The regulator's or law's rules on electronic signatures and e-prescribing for your profession checked.
                3. An electronic signature tool or system feature set up with an audit trail.
                4. A monthly reconciliation of documents sent against documents signed and filed.

                ## Notes
                Some documents, such as certain prescriptions, wills or statutory forms, may still need a wet signature or a specific system. Check before promising clients a fully remote process.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "An electronic signature route with audit trail is live for every document type the rules allow, and a monthly reconciliation shows no unsigned documents older than 14 days."
                cadence: rolling
              tasks:
                - "List every document in remote work that needs a signature"
                - "Check the rules on electronic signatures and e-prescribing for your profession"
                - "Set up the signature tool with an audit trail for each allowed document"
                - "Reconcile documents sent for signature against those returned @recurring(monthly:23)"
            - name: Quarterly feedback survey on remote services
              description: |-
                ## Purpose
                Clients rarely complain about a poor video experience; they simply book in person next time or go elsewhere. A short quarterly survey sent after remote sessions, asking about joining, sound, picture, privacy and whether they would choose remote again, shows what to fix and which clients prefer it.

                ## Milestones
                1. A five-question survey written, taking under two minutes.
                2. The survey sent to all remote clients in a two-week window each quarter.
                3. Results summarised with the top two complaints and the share who would choose remote again.
                4. One change made each quarter in response, and announced to clients.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly surveys run in a year, each with a summary and one recorded change made in response."
                cadence: cyclic
              tasks:
                - "Write a five-question remote services survey"
                - "Send the survey to clients seen remotely in the last two weeks @recurring(quarterly)"
                - "Summarise the top two complaints and the would-choose-again share"
                - "Pick one change to make and tell clients it has been made"
            - name: On-camera communication skills for professionals
              description: |-
                ## Purpose
                Rapport, reassurance and bad news all land differently through a screen: eye contact means looking at the lens, silence feels longer and typing notes reads as distraction. A short training programme on on-camera communication, practised with colleagues, makes remote sessions feel like care or advice rather than a call centre.

                ## Milestones
                1. A training session of 60 to 90 minutes held for every professional who consults remotely.
                2. Each professional has run a recorded practice consultation with a colleague and watched it back.
                3. A short list of personal habits to change agreed by each professional.
                4. A refresher for new starters built into their induction.

                ## Notes
                Start from the **Training program** template. Watching yourself back for five minutes teaches more than an hour of slides.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every remote professional has completed the training and one recorded practice consultation, and the session is part of induction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Book a 90-minute on-camera skills session for the remote team"
                - "Pair professionals to record and watch back a practice consultation"
                - "Ask each professional to note two habits they will change"
                - "Add the session to the induction plan for new professionals"
            - name: Guided remote assessment techniques
              description: |-
                ## Purpose
                Professionals who examine, assess or inspect for a living lose their main tool on a video call, but much can still be done by guiding the client: positioning the camera, asking them to move, show, measure or photograph. Learning and writing down guided assessment techniques for your discipline turns a vague chat into a structured assessment with clear limits.

                ## Milestones
                1. The common remote assessments for your discipline listed, such as a guided movement check, a skin photograph or a document walk-through.
                2. A short guidance script written for each, with what the client should do and what the professional records.
                3. The limits of each remote assessment noted, with when an in-person visit is needed.
                4. Each professional has practised the scripts on a colleague.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written set of guided remote assessment scripts, each with stated limits, used in practice by every remote professional."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the five assessments your professionals most often attempt remotely"
                - "Find your professional body's guidance or training on remote assessment"
                - "Write a client guidance script and limits note for each assessment"
                - "Practise each script on a colleague before using it with clients"
            - name: Criteria for converting a remote session to in-person
              description: |-
                ## Purpose
                The biggest clinical and professional risk in remote work is carrying on when the situation needs hands, eyes or a physical document in the room. Agreeing written red flags that mean stopping the remote session and booking in person, and teaching every professional to act on them, makes that judgement consistent across the practice.

                ## Milestones
                1. A list of red flags drafted by the professional lead for each service type.
                2. A rule for how quickly the in-person follow-up must happen for each flag.
                3. Reception given a protected slot or route to book those conversions quickly.
                4. Conversions recorded in the note and counted each quarter.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Written conversion criteria exist for every remote service, with a booking route and a quarterly count of conversions recorded."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Ask the professional lead to draft red flags for each remote service"
                - "Agree how quickly each red flag needs an in-person appointment"
                - "Hold a protected slot each day for converted remote sessions"
                - "Discuss three real conversion decisions at the next case meeting"
            - name: Platform administration skills for the practice manager
              description: |-
                ## Purpose
                When the person who set up the video platform leaves, practices often discover that nobody else knows how to add users, change the waiting room or pull an audit log. Building administration skills in the practice manager and one deputy, and keeping up with platform releases, keeps the service under the practice's control.

                ## Milestones
                1. The practice manager and a deputy both hold administrator rights.
                2. Both can add and remove users, change settings, export logs and contact vendor support.
                3. A short admin guide written in the practice's own words for these tasks.
                4. Monthly release notes read so changes are spotted before staff notice them.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two named administrators can each perform the five core admin tasks unaided, and a written admin guide is filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Grant administrator rights to the practice manager and one deputy"
                - "Work through the vendor's admin training for users, settings and logs"
                - "Write a one-page admin guide for the five core tasks"
                - "Read the platform's release notes and note any change that affects staff @recurring(monthly:27)"
            - name: Accessible remote sessions for all clients
              description: |-
                ## Purpose
                Remote services can widen access for clients who struggle to travel, but they shut out people with hearing loss, low vision, limited literacy or a different first language if nobody plans for it. Checking the platform's captions, interpreter features and phone fallback, and recording each client's needs at booking, keeps remote work open to everyone.

                ## Milestones
                1. The platform's accessibility features checked: captions, screen reader support, interpreter join, phone dial-in.
                2. An accessibility question added to booking so needs are known in advance.
                3. A process for booking a professional interpreter into a three-way video call.
                4. A plain-language version of the client joining guide produced.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Booking captures accessibility needs, interpreters can be added to video calls, and a plain-language joining guide is in use."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Test the platform's captions, dial-in and screen reader support"
                - "Add an accessibility needs question to remote booking"
                - "Run a test three-way call with an interpreter service"
                - "Rewrite the client joining guide in plain language"
            - name: Safeguarding awareness in remote sessions
              description: |-
                ## Purpose
                In a client's home the professional cannot see who is listening, and a controlling partner, parent or carer may be just off camera. Training professionals to spot the signs, use safe yes or no questions and agree a code word or message route makes remote sessions safer for clients at risk of abuse or coercion.

                ## Milestones
                1. Remote-specific safeguarding signs and techniques covered in a team session.
                2. A safe-question script and a discreet way for clients to signal they cannot talk agreed.
                3. The practice's safeguarding lead named as the contact for remote concerns.
                4. Remote safeguarding added to the existing safeguarding procedure.

                ## Notes
                Therapy, family law and general practice are where this arises most, but any practice taking video calls into homes should have the basics.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every remote professional has attended the safeguarding session, and the safeguarding procedure has a remote section naming the lead."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Book a remote safeguarding session with your safeguarding lead or trainer"
                - "Agree a safe-question script and a discreet signal for clients"
                - "Add a remote section to the safeguarding procedure"
                - "Remind professionals who to call with a remote safeguarding concern"
            - name: Cyber hygiene for staff working remotely
              description: |-
                ## Purpose
                Fake meeting invitations, spoofed client emails and malicious links are aimed squarely at practices that run on video calls and email. A short training session, a quarterly phishing refresher and a clear rule on reporting suspicious messages cut the chance that a remote set-up becomes the way in.

                ## Milestones
                1. A 45-minute cyber session held covering phishing, fake meeting links, public wifi and lost devices.
                2. A single reporting route for suspicious messages known to every staff member.
                3. A quarterly refresher or simulated phishing test run and results shared.
                4. New starters given the session in their first week.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every staff member has done the cyber session, a reporting route is in use, and four quarterly refreshers run in a year."
                cadence: rolling
              tasks:
                - "Book a 45-minute cyber hygiene session for all remote staff"
                - "Set up one email address or button for reporting suspicious messages"
                - "Run a phishing refresher or simulated test @recurring(quarterly)"
                - "Add the cyber session to the first-week induction checklist"
            - name: Choosing a video consultation platform
              description: |-
                ## Purpose
                Consumer video apps are free and familiar but rarely give you a business agreement, data location, waiting rooms or an audit trail, while dedicated platforms vary widely in cost and fit. Scoring three or four platforms against the same requirements, with a real test call by a professional and a client, gives a choice the practice can defend.

                ## Milestones
                1. Requirements written: security, data location, waiting room, browser joining, phone fallback, integration, cost per user.
                2. Three or four platforms shortlisted, including any built into your practice software.
                3. A test call run on each by a professional and a volunteer client.
                4. A platform chosen with a written scorecard and reasons.

                ## Notes
                Start from the **Purchase decision** template. Check first whether your existing practice software already includes video; a built-in option often wins on booking and records even if its video is plainer.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A platform chosen against written requirements, with a scorecard comparing at least three options and test call results recorded."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Write the seven requirements every platform must be scored against"
                - "Ask your practice software vendor whether video is included or available"
                - "Run a test call on each shortlisted platform with a volunteer client"
                - "Record the scorecard and the chosen platform with reasons"
            - name: Platform contract and data processing terms
              description: |-
                ## Purpose
                The contract with a telehealth platform decides where client data lives, who can access it, how long recordings are kept, what happens in a breach and how you get your data out if you leave. Reading and negotiating these terms before signing, with a data processing agreement in place, is much easier than unpicking them after a year of use.

                ## Milestones
                1. The data processing agreement or business associate agreement obtained and read.
                2. Data location, retention, breach notification, uptime and exit terms checked against your requirements.
                3. Questions or changes sent to the vendor and answers recorded.
                4. The signed contract filed with its renewal date and notice period noted.

                ## Notes
                Start from the **Vendor** template. Ask a solicitor or data protection adviser to read the data terms if your profession handles health or financial records.
              priority: medium
              deadlineOffsetDays: 75
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A signed platform contract and data processing agreement are filed, with data location, exit terms, renewal date and notice period recorded."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Request the data processing agreement from the chosen vendor"
                - "Check data location, retention, breach notice and exit terms"
                - "Send your questions and requested changes to the vendor"
                - "File the signed contract with the renewal date and notice period"
            - name: Fee and cancellation policy for remote sessions
              description: |-
                ## Purpose
                Clients ask whether a video session costs less than an in-person one, what happens if the call fails, and whether late cancellations are charged when there is no travel. A written policy on remote fees, technical failure, late joining and cancellation answers those questions once, consistently, before they become disputes.

                ## Milestones
                1. A decision recorded on whether remote fees match in-person fees, with reasons.
                2. Rules written for a call that fails on either side, late joining and no-shows.
                3. The policy checked against payer and regulator rules on remote charging.
                4. The policy added to booking confirmations and the website.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written remote fee and cancellation policy is published at booking, covering failed calls, late joining and no-shows."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Decide whether remote fees match in-person fees and write the reason"
                - "Write the rules for failed calls, late joining and no-shows"
                - "Publish the policy in booking confirmations and on the website"
                - "Review remote fees alongside the annual fee review @recurring(yearly)"
            - name: Remote consulting room equipment
              description: |-
                ## Purpose
                Built-in laptop cameras and microphones make a professional look and sound like they are in a cupboard, and clients judge quality on what they see and hear. Equipping each remote workstation with a decent external camera, headset, light and a second screen for notes improves every session for a modest one-off cost.

                ## Milestones
                1. A standard kit list agreed: camera, headset, light, second screen, stand.
                2. Prices compared across two or three suppliers and a budget agreed.
                3. Kit bought and set up at each remote workstation, including home set-ups the practice supports.
                4. Each item added to the asset register with its serial number.

                ## Notes
                Start from the **Purchase decision** template. A second screen for notes is the item professionals thank you for most.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every remote workstation has the standard kit installed, and each item is on the asset register."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Agree the standard remote workstation kit list"
                - "Get prices from two or three suppliers for the full kit"
                - "Set up the kit at each remote workstation and test a call"
                - "Add each item to the asset register with its serial number"
            - name: Phone versus video decision rules
              description: |-
                ## Purpose
                Phone consultations are quicker and work on any connection, but they lose visual cues that matter for some services and some clients. Agreeing which services and situations need video and which are fine by phone gives reception a rule to book by and professionals a reason to insist on video when it counts.

                ## Milestones
                1. Each remote service marked as phone acceptable, video preferred or video required.
                2. Situations that override the default listed, such as a new client or a safeguarding concern.
                3. The rules added to the booking script for reception.
                4. Payer rules on phone sessions checked, since some pay less or not at all.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every remote service has a phone or video rule in the booking script, with override situations and payer limits noted."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Mark each remote service as phone acceptable, video preferred or video required"
                - "List the situations where video is required regardless of service"
                - "Check which payers pay less or nothing for phone sessions"
                - "Add the rules to the reception booking script"
            - name: Linking the video platform to the appointment book
              description: |-
                ## Purpose
                Copying video links by hand into emails is where wrong links, double bookings and missed sessions come from. Connecting the platform to the appointment system so links are created and sent automatically, and the session status flows back, removes most of the manual steps that fail.

                ## Milestones
                1. The integration options between the platform and appointment system confirmed with both vendors.
                2. Automatic link creation and sending set up for remote appointment types.
                3. Session start and end times flowing back to the appointment record, where supported.
                4. A month of remote bookings checked for wrong or missing links after go-live.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Video links are created and sent automatically for every remote appointment type, with no missing links in a month's check."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask both vendors which integration options exist between their systems"
                - "Set up automatic link creation for remote appointment types"
                - "Test five bookings end to end before switching on for all clients"
                - "Check a month of remote bookings for wrong or missing links"
            - name: Remote session blocks in the rota
              description: |-
                ## Purpose
                Scattering video calls between in-person appointments means constant switching between rooms, kit and mindsets, and remote sessions start late. Choosing between dedicated remote blocks and mixed lists, and testing the choice for a month, often frees up a room and improves punctuality on both sides.

                ## Milestones
                1. Current remote sessions mapped across the week to show how they are spread.
                2. A model chosen: dedicated remote blocks, a remote day or mixed lists, with reasons.
                3. The rota changed for one month as a trial.
                4. Punctuality, room use and professional feedback compared before and after.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A remote scheduling model is trialled for a month and kept or changed on the basis of punctuality, room use and feedback."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Map last month's remote sessions across the week"
                - "Choose a remote scheduling model to trial and note why"
                - "Change the rota for a one-month trial"
                - "Compare punctuality and room use before and after the trial"
            - name: Backup internet and phone fallback for remote work
              description: |-
                ## Purpose
                One broadband line is a single point of failure for a practice that runs a day of video sessions, and in hurricane season or a local outage it can take out a whole list. A backup connection, a phone fallback written into every session and a tested switchover keep remote services running when the main line does not.

                ## Milestones
                1. The main internet connection's outages over the past year listed.
                2. A backup connection chosen, such as mobile data hotspots or a second line.
                3. A phone fallback rule added to every remote session: number confirmed at the start.
                4. A switchover test run and timed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A backup connection is in place, every session confirms a fallback phone number, and a quarterly switchover test is recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the main internet outages of the past year with their length"
                - "Choose and set up a backup connection for remote workstations"
                - "Add confirming a fallback phone number to the session opening script"
                - "Switch to the backup connection and time the changeover @recurring(quarterly)"
            - name: Remote services pilot with one professional
              description: |-
                ## Purpose
                Launching remote services across the whole practice at once multiplies every early mistake. A six to eight week pilot with one willing professional, a limited set of services and a small group of clients tests the platform, scripts and billing on real sessions and produces a list of fixes before wider rollout.

                ## Milestones
                1. One professional, two or three services and up to 30 clients chosen for the pilot.
                2. Consent, identity, escalation and note routines in use from the first pilot session.
                3. Every pilot session logged with problems, duration and outcome.
                4. A short pilot report written with fixes needed before full launch.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A pilot of at least 20 remote sessions is complete, with a session log and a written report listing fixes before launch."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "Choose the pilot professional, services and client group"
                - "Set a start and end date for the pilot"
                - "Log every pilot session with problems and duration"
                - "Write the pilot report with the fixes needed before launch"
            - name: Full launch of remote services
              description: |-
                ## Purpose
                Once the pilot fixes are in, the launch is mostly about people: every professional ready, reception confident with bookings and the waiting room, and clients told clearly what is on offer and how to join. A dated launch plan keeps the practice from drifting into remote work half-prepared.

                ## Milestones
                1. Every pilot fix completed or consciously deferred.
                2. All remote professionals and reception trained and signed off.
                3. Website, booking system and client letters updated to offer remote sessions.
                4. The first two weeks of live sessions reviewed daily by the practice manager.
              priority: high
              deadlineOffsetDays: 150
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Remote services are bookable by all clients in scope on a set launch date, with staff trained and a two-week review completed."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Confirm every pilot fix is done or deferred with a reason"
                - "Sign off each professional and receptionist as ready for remote work"
                - "Update the website and booking system to offer remote sessions"
                - "Review the first two weeks of live remote sessions with the team"
            - name: Six-month telehealth service review
              description: |-
                ## Purpose
                Six months after launch there is enough data to see whether remote services are paying their way: how many sessions, which services, no-show rates, rejected claims, feedback and conversions to in-person. A dated review with the owners decides what to expand, what to change and what to stop.

                ## Milestones
                1. Six months of remote figures collected: volume, services, no-shows, revenue, rejected claims and conversions.
                2. Client feedback and professional views summarised.
                3. Remote revenue and cost compared with the same services in person.
                4. A decision recorded on which remote services to expand, change or stop.

                ## Notes
                Start from the **Metrics log** template and keep the same measures each review so the trend is visible.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "A review paper with six months of remote figures and feedback is discussed by the owners, and their decisions are minuted."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pull six months of remote session, no-show and claims figures"
                - "Summarise client survey results and professional feedback"
                - "Compare remote revenue and cost against in-person for the same services"
                - "Minute the owners' decisions on each remote service"
            - name: Yearly remote services compliance and renewal
              description: |-
                ## Purpose
                Regulator guidance, insurer terms, payer rules and the platform contract all change on their own timetables, and a remote service set up correctly two years ago can be quietly out of date. A yearly check of all four, timed before the platform renewal date, keeps the service legal and strengthens your hand on price before the contract rolls over.

                ## Milestones
                1. Regulator guidance re-read and any changes noted.
                2. Insurer confirmation of remote cover refreshed at policy renewal.
                3. Payer rules for remote sessions checked for changes.
                4. The platform contract renewed, renegotiated or exited before the notice deadline.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated yearly compliance note covering regulator, insurer, payer and contract changes is filed before each platform renewal deadline."
                cadence: cyclic
              tasks:
                - "Put the platform notice deadline in the practice calendar"
                - "Run the yearly regulator, insurer, payer and contract check @recurring(yearly)"
                - "Ask the vendor for renewal terms 90 days before the notice deadline"
                - "File the yearly compliance note with the remote procedures"
            - name: Remote services evidence for inspection
              description: |-
                ## Purpose
                Inspectors and regulators increasingly ask how remote services are governed, and practices often have the routines but no single place showing them. A short evidence pack, kept current, means an inspection or a complaint can be answered with documents rather than recollections.

                ## Milestones
                1. An index listing scope, consent, identity, escalation, notes, data protection and training evidence.
                2. The latest version of each document linked or filed in one folder.
                3. Recent audit results and the yearly compliance note included.
                4. A named owner responsible for keeping the pack current.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A single folder with an index and the current version of every remote services document exists, with a named owner."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Create the evidence folder and an index of required documents"
                - "File the latest version of each remote procedure and policy"
                - "Add the last three months of note audit results"
                - "Name the owner who keeps the pack current"
            - name: Video therapy and counselling sessions
              description: |-
                ## Purpose
                Therapy works well by video for many clients, but it raises its own questions: a private space at the client's end, what to do when a client logs on from a car or a workplace, ending sessions safely and handling crisis between sessions. Setting rules for these situations lets a counselling or psychology practice offer video with the same care as the room.

                ## Milestones
                1. Rules agreed on acceptable client locations, such as no driving and no shared public spaces.
                2. A session ending routine for remote work, including grounding and checking the client is safe.
                3. A between-session crisis information sheet with local services, given to every remote client.
                4. Supervision arrangements updated to include remote work cases.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Remote therapy rules on location, session ending and crisis information are written, shared with clients and covered in supervision."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the rules on where clients may join a therapy session from"
                - "Agree a remote session ending routine with the clinicians"
                - "Prepare a crisis information sheet with local support numbers"
                - "Add remote cases as a standing item in clinical supervision"
            - name: Remote client meetings for law and accounting firms
              description: |-
                ## Purpose
                Law and accounting firms can run most client meetings remotely, but identity checks for due diligence, witnessing, signing and sharing financial documents need more thought than a video link. Setting rules for which matters can be handled fully remotely, and how documents and identity are handled, lets the firm serve clients anywhere without weakening its duties.

                ## Milestones
                1. Matter and engagement types sorted into fully remote, remote with an in-person step, or in-person only.
                2. A remote identity verification method agreed that meets the firm's due diligence duties.
                3. A secure document exchange route set up in place of email attachments.
                4. Rules on remote witnessing and signing checked for your jurisdiction and recorded.

                ## Notes
                Remote witnessing rules vary widely between countries and document types. Confirm with your professional body before promising a remote execution.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written remote matters policy covers matter types, identity verification, secure document exchange and witnessing rules for the firm's jurisdiction."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Sort the firm's matter types by how remotely each can be handled"
                - "Choose a remote identity verification method for new clients"
                - "Set up a secure client portal or exchange route for documents"
                - "Check remote witnessing and signing rules with your professional body"
            - name: Veterinary teletriage and remote advice
              description: |-
                ## Purpose
                Pet owners want quick advice on whether a symptom needs an appointment, and a phone or video triage service can fill that need, but most veterinary regulators restrict remote prescribing without a physical examination. A teletriage service with clear limits, scripts and handoff to in-person care helps clients without stepping past those rules.

                ## Milestones
                1. The regulator's rules on remote advice and prescribing for animals checked and summarised.
                2. Triage scripts written for the common calls, with clear outcomes: home care advice, book soon, come now.
                3. A rule on which staff can triage and when a vet must be involved.
                4. Teletriage calls logged with the outcome and any later visit.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A teletriage service runs with written scripts and outcome categories inside the regulator's remote advice rules, and calls are logged with outcomes."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Summarise the veterinary regulator's rules on remote advice and prescribing"
                - "Write triage scripts for the ten most common phone queries"
                - "Agree which calls must be passed to a vet"
                - "Log each teletriage call with its outcome for one month"
            - name: Remote physiotherapy and exercise programmes
              description: |-
                ## Purpose
                Follow-up physiotherapy and rehab sessions often work well remotely when the client has space to move and a clear exercise programme, and they save travel for people who are sore or far away. Setting up remote follow-up with video-friendly exercise sheets, camera positioning guidance and outcome measures keeps quality comparable with the clinic.

                ## Milestones
                1. The physio services suitable for remote follow-up agreed with the clinical team.
                2. Client guidance on space, clothing and camera position for a remote session written.
                3. Exercise programmes sent through an app or sheets with videos the client can follow.
                4. The same outcome measures recorded for remote and in-clinic clients.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Remote physio follow-ups run with written client set-up guidance, sent exercise programmes and the same outcome measures as the clinic."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Agree which physio follow-ups suit remote delivery"
                - "Write the client guide on space, clothing and camera position"
                - "Choose how exercise programmes and videos will be sent to clients"
                - "Record the clinic's usual outcome measures for remote clients too"
            - name: Solo practitioner offering remote sessions from home
              description: |-
                ## Purpose
                A solo professional working remotely from home has no reception, no back-up colleague and no IT department, so every gap in the set-up falls on one person. A lean remote set-up, with a buddy professional for emergencies and a simple booking and payment route, makes remote work practical without building a full practice infrastructure.

                ## Milestones
                1. A buddy arrangement agreed with another professional for emergencies and absence.
                2. A booking and payment tool chosen that sends links and takes payment automatically.
                3. The home consulting space meeting the privacy standard.
                4. A written plan for what happens to booked clients if the practitioner is suddenly ill.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A buddy arrangement, an automatic booking and payment route and an illness plan are in place for the solo remote practice."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Ask a trusted peer to act as your emergency and absence buddy"
                - "Choose a booking tool that sends links and takes payment"
                - "Check your home space against the privacy standard"
                - "Write what happens to booked clients if you are suddenly ill"
            - name: Remote services for rural, island and overseas clients
              description: |-
                ## Purpose
                Video and phone sessions can reach clients on other islands, in rural districts or living abroad who would otherwise travel for hours or go without. Serving them well means checking licensing limits for each location, allowing for poor connections and time zones, and knowing where to send them for local in-person care when needed.

                ## Milestones
                1. The locations the practice wants to serve listed, with the licensing position for each.
                2. Low-bandwidth options set up, such as audio-only or lower video quality.
                3. Time zone rules added to booking for clients abroad.
                4. A list of local partner professionals for in-person referrals in each main location.

                ## Notes
                A client living abroad may need a professional licensed where they live. Being registered at home does not settle the question.
              priority: low
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each target location has a recorded licensing position, booking handles time zones, and a local referral contact is named for each main location."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the islands, districts and countries you want to serve remotely"
                - "Record the licensing position for each location"
                - "Set up an audio-only or low-bandwidth option on the platform"
                - "Name a local partner professional for referrals in each main location"
            - name: Remote patient monitoring programme
              description: |-
                ## Purpose
                Some clinics now receive readings from devices at home, such as blood pressure monitors, glucose meters or wearables, between appointments. A monitoring programme needs clear rules on who reviews the data, how often, what triggers a call and what the patient is told, or a stream of readings becomes unreviewed liability.

                ## Milestones
                1. The conditions and devices in scope chosen, with the clinical lead's approval.
                2. Review frequency, alert thresholds and response times agreed by the clinicians.
                3. Patient agreement explaining that readings are not watched in real time.
                4. Payer rules on billing for monitoring checked and recorded.

                ## Notes
                Thresholds and clinical responses are for your clinicians to set. The project is about making sure they are written down and someone reviews the data on schedule.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A monitoring protocol with review frequency, alert rules and patient agreement is approved, and alerts are reviewed on schedule for three months."
                cadence: rolling
              tasks:
                - "Choose the conditions and devices in scope with the clinical lead"
                - "Write the review frequency, alert rules and response times"
                - "Review the week's monitoring alerts and record actions @recurring(weekly:wed)"
                - "Check payer rules on billing for remote monitoring"
            - name: Group sessions and remote classes
              description: |-
                ## Purpose
                Group therapy, antenatal classes, rehab classes, financial education workshops and similar sessions can reach more people remotely, but confidentiality is shared among strangers and moderation is harder. Ground rules, a platform set-up for groups and a co-facilitator for larger sessions make remote groups safe and worth attending.

                ## Milestones
                1. Group ground rules written covering confidentiality, recording, cameras and names.
                2. The platform set up for groups: waiting room, muting controls, breakout rooms if needed.
                3. A co-facilitator rule for groups above a set size.
                4. A first remote group run and feedback collected.
              priority: low
              frontmatter:
                mode: service
                output_kind: event-completion
                success_criteria: "A first remote group session runs with written ground rules, platform controls set and feedback from attendees recorded."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Write the ground rules for remote group sessions"
                - "Set up muting, waiting room and breakout controls for groups"
                - "Agree the group size above which a co-facilitator is needed"
                - "Run the first remote group and collect attendee feedback"
            - name: AI scribe and transcription tools in remote sessions
              description: |-
                ## Purpose
                Tools that transcribe and summarise remote sessions can save professionals an hour a day of notes, but they record the client, send audio to a vendor and can get details wrong. Assessing them deliberately, with client consent, data terms and a rule that the professional checks every note, decides whether they belong in your practice.

                ## Milestones
                1. Two or three scribe tools assessed for data location, retention and accuracy.
                2. The data protection assessment updated for the chosen tool.
                3. A client consent step for recording and transcription added.
                4. A trial with two professionals, with every generated note checked and edited before it is filed.

                ## Notes
                The professional remains responsible for the content of the note. Treat generated text as a draft.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on scribe tools is recorded after a trial, with the data protection assessment updated and a consent step in place if adopted."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to compare the data terms of three scribe tools"
                - "Update the data protection assessment for the preferred tool"
                - "Add a recording and transcription consent question to sessions"
                - "Trial the tool with two professionals and review their edited notes"
            - name: Remote supervision and second opinions
              description: |-
                ## Purpose
                Remote tools are not only for clients: junior professionals can be supervised, second opinions sought and specialist colleagues brought into a session without anyone travelling. A structured remote supervision and second opinion routine, with consent for third parties joining and records of advice given, spreads expertise across the practice and its sites.

                ## Milestones
                1. A rule for when and how a colleague can join a client session remotely, with client consent.
                2. A secure route for sharing images or documents for a second opinion.
                3. Monthly remote supervision sessions scheduled for junior professionals.
                4. Advice from a second opinion recorded in the client file with the adviser's name.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Remote supervision runs monthly for every junior professional, and second opinions are recorded in client files with consent noted."
                cadence: rolling
              tasks:
                - "Write the consent rule for a colleague joining a client session"
                - "Set up a secure route for sharing cases for a second opinion"
                - "Hold remote supervision with each junior professional @recurring(monthly:15)"
                - "Add a second opinion field to the client note template"
---

# Telehealth and Remote Services

This area is for the owner or practice manager of a clinic, therapy, physiotherapy, veterinary, dental, law, accounting or engineering practice who wants to offer video, phone or message-based services without creating new risks. It starts with foundations (which services suit remote delivery, regulator and insurer checks, consent, identity, emergency escalation, records and a data protection assessment), moves through the operating routines that keep remote work running, the skills professionals need on camera, the decisions on platform, contract, pricing, kit and integration, the dated pilot, launch and reviews, variants for different kinds of practice and finally specialist work such as remote monitoring, group sessions, scribe tools and remote supervision.

What repeats is a daily kit check and message inbox triage, a weekly look at the remote appointment book and missed sessions, monthly audits of remote notes, user access, remote billing, signed documents, platform release notes and supervision, quarterly feedback surveys, phishing refreshers and connectivity failover tests, and yearly reviews of the data protection assessment, the emergency drill, remote fees and the platform contract. The Risk register, Operational checklist, Training program, Purchase decision, Vendor and Metrics log templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
