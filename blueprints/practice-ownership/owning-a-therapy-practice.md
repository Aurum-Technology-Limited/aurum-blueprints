---
id: practice-ownership.owning-a-therapy-practice
name: Owning a Therapy Practice
description: "Clinician agreements, supervision and caseload limits, fees, insurers and cancellations, confidentiality, notes and records, room bookings and the risk protocols that let a counselling or psychology practice run safely."
category: business
version: 1.0.0
tags: [practice-ownership, owning-a-therapy-practice, small-business, founder, counselling, psychology, clinical-supervision, confidentiality]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - metrics-log
    - purchase-decision
    - compliance-control
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Owning a Therapy Practice
          description: "Running a counselling or psychology practice: clinicians and supervision, session fees and insurers, confidentiality, notes, room bookings and limits on caseload."
          projects:
            - name: Therapy practice owner's fact sheet
              description: |-
                ## Purpose
                Accountants, insurers, insurer panels and the professional body all ask the same questions: how many clinicians, which registrations, which rooms, who supervises whom. Putting those facts on one dated page saves hours in the first year and becomes the cover sheet for every audit, panel application and eventual sale.

                ## Milestones
                1. A one-page sheet listing clinicians, their professions, rooms, opening hours and the practice's legal form.
                2. Every practice and clinician registration or accreditation number recorded with its renewal month.
                3. Each contract with a notice period listed: lease or room hire, software, insurer panels, employee assistance programmes, insurance.
                4. Key contacts named: accountant, lawyer, insurer, IT support, each clinician's supervisor and the practice's clinical executor.

                ## Notes
                Keep it factual and short. Detail lives in the registers built by the projects that follow.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page fact sheet exists with every registration number, contract and key contact filled in."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every clinician, their profession and the days they work"
                - "Gather each registration and accreditation number with its renewal month"
                - "List every contract with its renewal date and notice period"
                - "Refresh the fact sheet and its contact list @recurring(yearly)"
            - name: Clinician registration and accreditation check
              description: |-
                ## Purpose
                Titles such as psychologist are protected in many countries while counsellor often is not, so clients and insurers rely on the owner to check what each clinician is entitled to call themselves. Verifying every registration on the regulator's or professional body's public register, rather than trusting a certificate in the staff file, closes the gap in an afternoon.

                ## Milestones
                1. Each clinician checked on the relevant public register or membership directory, with a dated screenshot filed.
                2. Every title used on the website and in bios matched to what the registration allows.
                3. A table of renewal months, accreditation level and required supervision hours for each person.
                4. A rule agreed that nobody sees clients until their registration is verified.

                ## Notes
                Rules differ by country and profession. Ask your regulator or professional body which titles are protected and whether the practice itself must register.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clinician's registration or membership has been verified on a public register this month and recorded in one table."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Look up each clinician on their regulator's or professional body's register"
                - "Compare the titles on the website with what each registration allows"
                - "Record each person's renewal month and required supervision hours"
                - "Recheck every clinician on the public register @recurring(yearly)"
            - name: Clinician agreements for employed, associate and room-rental therapists
              description: |-
                ## Purpose
                Group practices often mix salaried clinicians, self-employed associates on a percentage split and therapists who simply rent a room, and the paperwork rarely says which is which. Getting the arrangement right for each person decides who owns the client relationship, who holds the notes, who carries indemnity and how the tax authority will see the relationship.

                ## Milestones
                1. Every clinician's current arrangement written down: employed, associate on a split, or room tenant.
                2. A signed agreement for each covering fees, notice, notes ownership, indemnity, supervision and non-solicitation where lawful.
                3. Employment status questions reviewed with an employment lawyer or accountant.
                4. A clear rule on what happens to clients and records when a clinician leaves.

                ## Notes
                Treating an associate like an employee (set hours, set rooms, practice-run diary) can change their status in law. Take local professional advice before signing.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clinician has a signed agreement that states their status, notes ownership and leaving arrangements, reviewed by a lawyer."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write down each clinician's real working arrangement in one line"
                - "Find every signed agreement and note which are missing or out of date"
                - "Book a review of employment status with an employment lawyer"
                - "Agree in writing who keeps client notes when a clinician leaves"
            - name: Confidentiality and its limits, written for clients
              description: |-
                ## Purpose
                Confidentiality is the promise the whole practice stands on, yet clients are often unclear where it ends: risk to life, safeguarding concerns, court orders, insurer requests and supervision. A plain-language sheet agreed by every clinician means each client hears the same limits at the first session and nobody improvises under pressure.

                ## Milestones
                1. A one-page client information sheet on confidentiality and its exceptions, checked against your professional code and local law.
                2. Insurer, employee assistance programme and supervision disclosures explained in plain words.
                3. Every clinician using the same sheet and recording that it was discussed.
                4. A short internal note on who decides when a disclosure is being considered.

                ## Notes
                Your professional body and a lawyer familiar with health records are the right people to check the exceptions for your jurisdiction.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A client confidentiality sheet approved by every clinician is in use, and its discussion is recorded in each new client's file."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Collect the confidentiality wording each clinician currently uses"
                - "Ask the agent to draft one plain-language sheet from those versions"
                - "Check the exceptions with your professional body's guidance"
                - "Review the confidentiality sheet against code and law changes @recurring(yearly)"
            - name: Client intake and therapy contract pack
              description: |-
                ## Purpose
                First contact sets the frame: fees, cancellations, contact between sessions, what happens in a crisis and how notes are kept. One intake pack and contract used by every clinician cuts disputes over missed sessions, gives clients informed consent and gives the owner evidence if a complaint ever arrives.

                ## Milestones
                1. A single intake form collecting contact details, GP or doctor, emergency contact and consent to the terms.
                2. A therapy contract covering fees, cancellation notice, contact between sessions, endings and records.
                3. A crisis information page listing local emergency and helpline numbers.
                4. Signed or electronically accepted contracts stored in every active client's record.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every new client in the last month has a completed intake form and an accepted therapy contract in their record."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather the intake forms and contracts each clinician uses now"
                - "Merge them into one intake form and one therapy contract"
                - "Add a crisis page with local emergency and helpline numbers"
                - "Spot-check five new client files for a signed contract"
            - name: Session fee and late cancellation policy
              description: |-
                ## Purpose
                Late cancellations and missed sessions can cost a clinician one paid hour in eight, and inconsistent waivers breed resentment among both clients and therapists. Writing one fee list and one cancellation rule, with who may waive a charge and when, protects income without making the policy feel punitive.

                ## Milestones
                1. One published fee list by clinician grade, session length and type: individual, couples, assessment.
                2. A cancellation notice period and charge stated in the contract and on the website.
                3. Written discretion rules for illness, bereavement and emergencies, applied the same way by everyone.
                4. Insurer and employee assistance programme rules on charging for missed sessions checked.

                ## Notes
                Some insurers and schemes forbid charging their members for missed sessions. Check each contract before applying the policy to funded clients.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A fee list and cancellation policy are published, and every clinician confirms they apply the same waiver rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List current fees for every clinician and session type"
                - "Count late cancellations and missed sessions over the last three months"
                - "Check each insurer contract for rules on missed-session charges"
                - "Agree the waiver rules at the next team meeting"
            - name: Caseload and capacity baseline
              description: |-
                ## Purpose
                Most therapists can sustain a set number of client hours a week before quality slips, and owners who do not know each clinician's real caseload find out through sickness or a complaint. Measuring sessions offered, sessions delivered and active clients per clinician over four weeks shows where capacity really sits and where limits are being breached.

                ## Milestones
                1. Four weeks of sessions offered, delivered, cancelled and missed recorded for each clinician.
                2. Active client count and waiting list size per clinician noted.
                3. A weekly client-hour limit agreed with each clinician and written into their file.
                4. Clinicians above their limit identified, with a plan to bring them down.

                ## Notes
                Start from the **Metrics log** template. Count client-facing hours separately from notes, supervision and admin time.
              priority: high
              deadlineOffsetDays: 35
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Each clinician has a recorded four-week caseload average and a written weekly client-hour limit."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export four weeks of appointments from the diary or practice system"
                - "Count sessions offered, delivered and missed for each clinician"
                - "Agree a weekly client-hour limit with each clinician"
                - "List anyone above their limit and the date it will come down"
            - name: Profit per clinical hour and break-even
              description: |-
                ## Purpose
                Therapy practices sell hours, so the question that matters is what one delivered session earns after the clinician's share, the room, the software and the owner's admin time. Working out the break-even number of sessions a week tells you whether fees, splits or room costs need to change before you hire again.

                ## Milestones
                1. Last year's income split by self-pay, insurer and employee assistance programme work.
                2. Fixed costs per month totalled: rent, software, insurance, supervision, admin pay.
                3. Contribution per delivered session calculated for each fee level and pay arrangement.
                4. A break-even number of sessions a week written down and compared with the current average.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page calculation shows contribution per session for each payer type and the weekly break-even session count."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Export last year's income by payer type from the accounts"
                - "Total the fixed monthly costs of running the practice"
                - "Work out what each delivered session contributes after the clinician's share"
                - "Ask your accountant to check the break-even calculation"
            - name: Insurance schedule for a therapy practice
              description: |-
                ## Purpose
                Therapy practices need more than professional indemnity: public liability for the rooms, employer's liability if anyone is employed, cyber cover for client data, and confirmation that every associate holds their own cover. One schedule showing each policy, its limit and renewal date stops a gap appearing when a clinician joins or a policy lapses.

                ## Milestones
                1. Every practice policy listed with insurer, limit, excess and renewal month.
                2. Each clinician's own indemnity certificate on file, with expiry dates.
                3. Run-off cover for departed clinicians and for the owner discussed with the broker.
                4. Cyber and data breach cover checked against the client records the practice holds.

                ## Notes
                Your broker or insurer decides what is covered. Bring them the clinician list and the fact sheet so they can spot gaps.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A schedule lists every practice policy and each clinician's indemnity certificate with expiry, reviewed with a broker."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every policy the practice holds with its renewal month"
                - "Collect a current indemnity certificate from each clinician"
                - "Ask the broker about cyber cover and run-off for leavers"
                - "Review the insurance schedule with the broker before renewal @recurring(yearly)"
            - name: Client risk and safeguarding escalation protocol
              description: |-
                ## Purpose
                When a client discloses suicidal intent, harm to a child or a threat to someone else, the clinician needs to know within minutes who to call and what to record. A written escalation route, with on-call senior cover and contact numbers, protects the client, the clinician and the practice, and is the first thing an auditor or insurer asks for.

                ## Milestones
                1. A one-page risk protocol stating steps, timescales and who to contact for each kind of risk.
                2. A named safeguarding lead and a deputy, with phone numbers every clinician can reach.
                3. Local crisis, emergency and safeguarding referral numbers listed and checked as working.
                4. Each clinician confirming they have read the protocol, recorded with the date.

                ## Notes
                Start from the **Risk register** template to track open risk cases. Agree the protocol with clinical supervisors and check referral routes with local services.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed-off risk protocol names a safeguarding lead and deputy, and every clinician has confirmed reading it this year."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name a safeguarding lead and a deputy for the practice"
                - "Check every crisis and referral number on the list still works"
                - "Circulate the protocol and collect a read confirmation from each clinician"
                - "Review open risk cases and the protocol with the safeguarding lead @recurring(quarterly)"
            - name: Weekly referral and waiting list triage
              description: |-
                ## Purpose
                Enquiries arrive by email, phone, web form and insurer referral, and an unanswered one is often a person in distress choosing another service. Triaging every new referral once a week, matching it to a clinician's competence and capacity, keeps response times short and stops the waiting list becoming a drawer nobody opens.

                ## Milestones
                1. One list holding every enquiry, its date, source and status.
                2. A response standard agreed, for example a reply within two working days.
                3. Each referral matched to a clinician by presenting issue, availability and fee type.
                4. People who cannot be helped signposted elsewhere, with the signposting recorded.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every enquiry from the last month is on one list with a response date, and none waited longer than the agreed standard."
                cadence: rolling
              tasks:
                - "Move every open enquiry into one referral list"
                - "Agree a response standard for new enquiries"
                - "Triage new referrals and match each to a clinician @recurring(weekly:mon)"
                - "Write a short signposting list for referrals the practice cannot take"
            - name: Clinical supervision schedule and log
              description: |-
                ## Purpose
                Most professional bodies require a minimum amount of supervision in proportion to client hours, and insurers and auditors expect the practice to prove it happened. A shared schedule showing who supervises whom, how often and whether the hours were met turns a professional duty into something the owner can evidence.

                ## Milestones
                1. Each clinician's supervisor, frequency and required hours recorded.
                2. Supervision hours logged monthly against client hours for each clinician.
                3. Any shortfall raised with the clinician within the same month.
                4. External supervisors' credentials and agreements on file.

                ## Notes
                Start from the **Meeting notes** template for the owner's own supervision of practice matters, kept separate from clinical content.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly log shows supervision hours against client hours for every clinician, with no unexplained shortfall for three months."
                cadence: rolling
              tasks:
                - "Record each clinician's supervisor and required supervision ratio"
                - "Collect a copy of each external supervisor's agreement"
                - "Log supervision hours against client hours for each clinician @recurring(monthly:9)"
                - "Raise any supervision shortfall with the clinician that week"
            - name: Therapy room booking and room readiness
              description: |-
                ## Purpose
                Double-booked rooms, a client meeting their neighbour in the corridor, or a session overheard through a thin wall all damage trust quickly. One booking system and a simple readiness standard for each room (sound masking, tissues, clock, panic alarm, nothing personal left behind) keep every session private and every clinician able to start on time.

                ## Milestones
                1. Every room in one booking calendar, with no bookings held in private diaries.
                2. A readiness standard posted in each room and checked weekly.
                3. Sound leakage tested between rooms and fixed with sound masking or door seals where needed.
                4. Waiting area arranged so clients arriving and leaving are not on display.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "All rooms are booked through one calendar with no double bookings in the last month, and each room passes the weekly readiness check."
                cadence: rolling
              tasks:
                - "Move all room bookings into one shared calendar"
                - "Test sound between rooms with a voice at normal speaking level"
                - "Write a one-page readiness standard for each room"
                - "Walk the rooms against the readiness standard and next week's bookings @recurring(weekly:thu)"
            - name: Session notes completed within two working days
              description: |-
                ## Purpose
                Notes written days later are thinner, less accurate and harder to defend if a complaint, insurer audit or court request arrives. A practice standard that notes are completed within two working days, checked weekly from the practice system, protects clients and clinicians without anyone reading clinical content they should not see.

                ## Milestones
                1. A written standard for note completion times and minimum content.
                2. A weekly report showing sessions with no completed note.
                3. Overdue notes raised privately with the clinician concerned.
                4. Overdue notes kept below an agreed level for three months running.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The weekly report shows fewer than the agreed number of overdue notes for three consecutive months."
                cadence: rolling
              tasks:
                - "Agree the note completion standard with all clinicians"
                - "Find the report in the practice system that lists sessions without notes"
                - "Run the overdue notes report and message clinicians privately @recurring(weekly:fri)"
                - "Track the overdue count in a simple monthly table"
            - name: Insurer claims and client balance review
              description: |-
                ## Purpose
                Insurer and employee assistance programme payments often arrive weeks after the session, with rejections for missing authorisation numbers or exceeded session limits. A monthly review of unpaid claims and self-pay balances stops a quiet build-up of debt and catches funded clients who have used up their authorised sessions.

                ## Milestones
                1. All unpaid claims listed by insurer, age and reason.
                2. Rejected claims corrected and resubmitted within the insurer's time limit.
                3. Funded clients' remaining authorised sessions tracked and clinicians warned before they run out.
                4. Self-pay balances older than 30 days followed up with a polite reminder.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No claim is older than the insurer's resubmission limit and self-pay debt over 60 days is below an agreed amount each month."
                cadence: rolling
              tasks:
                - "List every unpaid claim and self-pay balance with its age"
                - "Note each insurer's resubmission time limit"
                - "Review unpaid claims, authorisations and balances @recurring(monthly:12)"
                - "Warn clinicians whose funded clients have two authorised sessions left"
            - name: Monthly therapy practice numbers review
              description: |-
                ## Purpose
                Five or six numbers tell an owner most of what matters: sessions delivered, cancellation rate, average fee, waiting list size, cash collected and clinician utilisation. Reviewing them on the same day each month shows a problem in weeks rather than at year-end, when it has already cost a quarter's profit.

                ## Milestones
                1. Six headline numbers chosen and defined so they are counted the same way each month.
                2. A one-page monthly sheet filled in from the practice system and bank.
                3. Twelve months of history built up for trend comparison.
                4. One action recorded each month from what the numbers show.

                ## Notes
                Start from the **Metrics log** template. Keep the sheet to one page so it actually gets done.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve consecutive monthly sheets exist, each with the six numbers filled in and one recorded action."
                cadence: rolling
              tasks:
                - "Choose and define the six numbers to track"
                - "Fill in last month's numbers as the first entry"
                - "Complete the monthly numbers sheet and pick one action @recurring(monthly:20)"
                - "Share the sheet with any partner or practice manager"
            - name: Missed session and late cancellation tracking
              description: |-
                ## Purpose
                A rising missed-session rate is often the first sign of a booking process problem, a clinician struggling, or clients who are disengaging and need a review. Tracking the rate per clinician each month, alongside how charges were applied, turns an irritating income leak into useful clinical and operational information.

                ## Milestones
                1. Missed sessions and late cancellations counted per clinician each month.
                2. Reminder messages by text or email set up for every appointment.
                3. Clients with two or more missed sessions flagged for a conversation with their clinician.
                4. Charges and waivers recorded so the policy is applied consistently.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Monthly missed-session rates are recorded per clinician and the practice rate is lower after six months than at the start."
                cadence: rolling
              tasks:
                - "Turn on appointment reminders in the practice system"
                - "Count missed and late-cancelled sessions per clinician @recurring(monthly:5)"
                - "Flag clients with two missed sessions to their clinician"
                - "Check waivers were applied in line with the policy"
            - name: Monthly caseload check-in with each clinician
              description: |-
                ## Purpose
                Therapists are poor at noticing their own overload, and a heavy month of trauma or high-risk work can wear someone down long before hours look excessive. A short private check-in each month on hours, case mix and how they are coping lets the owner rebalance referrals before sickness absence or mistakes force the issue.

                ## Milestones
                1. A 15-minute monthly slot booked with each clinician, separate from clinical supervision.
                2. Hours against limit, number of high-risk clients and leave plans reviewed each time.
                3. Referral allocation adjusted when someone is above their limit or carrying a heavy mix.
                4. Any wellbeing concern followed up with support options, recorded briefly.

                ## Notes
                Keep this about workload and wellbeing, not clinical content. That belongs in supervision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each clinician has had a recorded caseload check-in in each of the last three months."
                cadence: rolling
              tasks:
                - "Book a recurring 15-minute check-in slot with each clinician"
                - "Hold caseload check-ins and note hours against limits @recurring(monthly:15)"
                - "Pause new referrals to anyone above their agreed limit"
                - "List the support options the practice can offer a struggling clinician"
            - name: Routine outcome measures across the practice
              description: |-
                ## Purpose
                Insurers, referrers and commissioners increasingly ask for evidence that clients improve, and clinicians benefit from seeing who is not. Using the same short validated measures at the start, during and at the end of therapy gives the practice honest outcome data and flags clients who are getting worse.

                ## Milestones
                1. Two or three validated measures chosen with the clinical team for the main presenting problems.
                2. Measures sent automatically or given at agreed sessions, with scores stored in the client record.
                3. A monthly summary of completion rates and average change, without identifying clients.
                4. A rule that a deteriorating score is raised in supervision.

                ## Notes
                Check the licensing terms of each questionnaire before using it commercially.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "At least seven in ten clients who end therapy have a start and end score recorded, summarised monthly."
                cadence: rolling
              tasks:
                - "Agree with the clinicians which outcome measures to use"
                - "Check the licence terms for each chosen questionnaire"
                - "Set up the measures in the practice system or a secure form"
                - "Summarise outcome completion and change for the month @recurring(monthly:25)"
            - name: Monthly clinical team meeting and case discussion
              description: |-
                ## Purpose
                Clinicians in private practice can go weeks without speaking to a colleague, which isolates them and lets inconsistent practice creep in. A monthly team meeting with a short business update and an anonymised case discussion builds a shared standard, airs referral and room issues, and is where policy changes get agreed.

                ## Milestones
                1. A fixed monthly date, length and standing agenda agreed.
                2. Business items kept to the first 20 minutes, with clinical discussion after.
                3. Brief notes kept of decisions and policy changes, with no identifying client details.
                4. Attendance recorded, with a summary sent to anyone absent.

                ## Notes
                Start from the **Meeting notes** template for the decisions log.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten team meetings were held in the last twelve months, each with recorded decisions."
                cadence: rolling
              tasks:
                - "Choose a monthly date and time most clinicians can attend"
                - "Write a standing agenda with business and case discussion sections"
                - "Hold the team meeting and circulate the decisions @recurring(monthly:3)"
                - "Rotate who presents the anonymised case each month"
            - name: Client records retention and closing files
              description: |-
                ## Purpose
                Therapy records must be kept for a set period after the last session, often longer for children, and then destroyed securely, yet most practices keep everything forever by default. A quarterly routine for closing ended cases, applying the retention schedule and logging destruction keeps the practice compliant and limits the damage of any breach.

                ## Milestones
                1. A written retention schedule for adult, child and couples records, checked against your professional body and data protection law.
                2. Cases with no session for an agreed period closed with an ending note.
                3. Records past their retention date destroyed securely and the destruction logged.
                4. Paper records, if any, stored locked and listed.

                ## Notes
                Retention periods vary by country and profession. Confirm yours with your professional body or a data protection adviser.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A retention schedule is in place and a destruction log shows the quarterly review ran four times this year."
                cadence: cyclic
              tasks:
                - "Write the retention period for each type of client record"
                - "List all records held on paper and where they are stored"
                - "Close ended cases and destroy expired records, logging each @recurring(quarterly)"
                - "Confirm the practice system can delete or anonymise expired records"
            - name: Insurer panels and employee assistance programmes explained
              description: |-
                ## Purpose
                Health insurers, employee assistance programmes and public schemes can fill a diary, but each has its own fee, session cap, reporting forms and audit rights. Understanding exactly how each one works before signing lets an owner judge whether the referrals are worth the lower fee and the extra admin.

                ## Milestones
                1. Each current or prospective funder listed with fee, session cap, payment time and reporting requirements.
                2. The contract terms on audit, records access and missed-session charges summarised.
                3. Admin time per funded client estimated and compared with self-pay.
                4. A one-page comparison shared with the clinicians who see funded clients.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page comparison of every funder covers fee, session cap, payment time, reporting and audit rights."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List every insurer and programme the practice works with or is considering"
                - "Read each contract's sections on fees, session caps and audits"
                - "Estimate the admin minutes each funded client adds"
                - "Build the one-page funder comparison"
            - name: Ethics for the owner as well as the clinician
              description: |-
                ## Purpose
                Owning a practice creates conflicts a clinician never faces: allocating well-paid clients to yourself, pressing a colleague to keep a client longer, supervising someone whose pay you set, or treating a friend of a staff member. Working through your professional code from the owner's chair, and writing down how you will handle these, protects you before a complaint tests it.

                ## Milestones
                1. The ethics code of each profession in the practice read with ownership questions in mind.
                2. A list of the owner's likely conflicts: allocation, dual relationships, supervision of employees, marketing claims.
                3. A short written policy on allocation and dual relationships shared with the team.
                4. One conversation with an experienced owner or ethics adviser about the hardest case.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written allocation and dual relationships policy exists, based on each profession's code, and has been shared with the team."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the current ethics code for each profession in the practice"
                - "List the conflicts you face as owner that a clinician does not"
                - "Draft a short policy on referral allocation and dual relationships"
                - "Discuss the hardest case with an ethics adviser or senior colleague"
            - name: Reading therapy practice accounts
              description: |-
                ## Purpose
                Many therapists open a practice without ever having read a profit and loss account or balance sheet, which leaves them dependent on the accountant for every decision. Learning to read your own accounts, and to see where clinician pay, room costs and unpaid claims sit, means you can ask better questions and spot trouble early.

                ## Milestones
                1. Last year's profit and loss and balance sheet read line by line with notes on anything unclear.
                2. Clinician pay, rent, software and insurance found and checked as a share of income.
                3. The difference between profit and cash explained in your own words.
                4. Three questions taken to the accountant and their answers written down.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can show where each major cost sits in the accounts and have answers from the accountant to three written questions."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Print last year's accounts and mark every line you do not understand"
                - "Work out each major cost as a share of income"
                - "Write three questions for the accountant"
                - "Book 30 minutes with the accountant to go through them"
            - name: Therapy record keeping standards
              description: |-
                ## Purpose
                Clients, insurers and courts can all ask to see therapy notes, and the line between the clinical record and a clinician's private process notes is understood differently by every profession. Agreeing a practice standard for what goes in the record, how it is written and what is not kept protects clients and makes access requests manageable.

                ## Milestones
                1. Each profession's guidance and local law on therapy records and process notes read.
                2. A practice standard on minimum note content, tone and what is kept separately.
                3. The standard discussed at a team meeting and adopted.
                4. A sample of anonymised notes reviewed against the standard by a senior clinician.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written record keeping standard has been adopted at a team meeting and a sample of notes has been checked against it."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Collect each profession's guidance on record keeping"
                - "Draft a one-page standard on note content and process notes"
                - "Present the draft at the next team meeting for agreement"
                - "Arrange a senior clinician to review a sample of notes"
            - name: Access requests, court orders and report requests
              description: |-
                ## Purpose
                Sooner or later a client asks for their notes, a solicitor requests a report, or a court order arrives demanding the file. Knowing in advance who decides, how long you have, when to take legal advice and how to involve the clinician turns a stressful letter into a routine process.

                ## Milestones
                1. The legal time limits for client access requests in your jurisdiction noted.
                2. A written procedure for access requests, solicitor letters, court orders and police requests.
                3. A fee and terms for written reports agreed, separate from therapy fees.
                4. Your indemnity insurer's legal helpline number added to the procedure.

                ## Notes
                Never release a file on a solicitor's letter alone. Check with your indemnity insurer or a lawyer whether the request is legally binding.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written procedure covers access requests, solicitor letters and court orders, with legal time limits and the insurer's helpline."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the legal time limit for client access requests where you practise"
                - "Ask your indemnity insurer for their guidance on court and solicitor requests"
                - "Write a one-page procedure for each type of request"
                - "Set a separate fee and terms for written reports"
            - name: Supervisor training for owners who supervise
              description: |-
                ## Purpose
                Owners often end up supervising the clinicians they employ, and many professional bodies expect supervisors to hold a recognised supervision qualification. Training properly, and being clear about how you separate the supervisor role from the employer role, protects the supervisee and keeps the practice's supervision defensible.

                ## Milestones
                1. Your professional body's requirements for supervisors checked.
                2. A recognised supervision course chosen, booked and completed.
                3. A supervision contract template that addresses the owner and supervisor dual role.
                4. Your own supervision of your supervision arranged.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A supervision qualification recognised by your professional body is completed and a dual-role supervision contract is in use."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Check your professional body's requirements for supervisors"
                - "Compare two or three recognised supervision courses"
                - "Draft a supervision contract that addresses the dual role"
                - "Arrange consultative supervision for your own supervising work"
            - name: Competence map of the clinical team
              description: |-
                ## Purpose
                Referrals for couples work, children, eating disorders, trauma or addiction need clinicians trained for them, and placing a client with the wrong therapist is a common source of complaints. A simple map of who is trained and experienced in what makes triage faster and shows which gaps to fill when hiring.

                ## Milestones
                1. Each clinician's modalities, client groups and training listed with evidence.
                2. Presentations the practice will not take written down, with where to signpost them.
                3. The map used in the weekly triage.
                4. Training gaps identified and linked to hiring or CPD plans.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A competence map covering every clinician is used in triage and lists the presentations the practice does not take."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Ask each clinician for their modalities, client groups and training"
                - "Build the competence map as one table"
                - "List presentations the practice will signpost elsewhere"
                - "Update the competence map with new training and hires @recurring(yearly)"
            - name: Choosing a therapy practice management system
              description: |-
                ## Purpose
                Diaries, notes, invoices and outcome measures scattered across spreadsheets and personal email are a confidentiality risk and a time sink. Choosing a system built for therapy, with strong access controls, separate process notes, a client portal and insurer billing, is worth doing carefully because moving again is painful.

                ## Milestones
                1. Requirements written: notes privacy, role-based access, scheduling, invoicing, insurer claims, outcome measures, client portal.
                2. Three systems shortlisted and trialled with real but anonymised workflows.
                3. Data location, encryption and backup terms checked against data protection law.
                4. A system chosen, with a migration and training plan dated.

                ## Notes
                Start from the **Purchase decision** template. Ask each supplier where client data is stored and who on their side can see it.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A system has been chosen against written requirements, with data protection terms checked and a dated migration plan."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Write the requirements list with the clinicians"
                - "Shortlist three therapy practice systems and book trials"
                - "Ask each supplier where data is stored and who can access it"
                - "Record the decision and plan the migration date"
            - name: Joining or leaving an insurer panel
              description: |-
                ## Purpose
                Panel membership can bring steady referrals at a fee well below your self-pay rate, along with reporting, session caps and audit rights. Deciding panel by panel whether to join, stay or leave, with the numbers in front of you, stops the practice drifting into work that keeps the diary full but loses money.

                ## Milestones
                1. Referrals, fees and admin time from each panel over the last year counted.
                2. Contribution per session from panel work compared with self-pay.
                3. A decision recorded for each panel: join, stay, renegotiate or leave.
                4. Clients affected by any exit given notice and options.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded join, stay or leave decision exists for each panel, based on a year of referral and fee data."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Count last year's referrals and income from each panel"
                - "Estimate admin time per panel client"
                - "Record a decision for each panel with the reason"
                - "Write to affected clients about any change in funding"
            - name: Clinician pay model, split, sessional fee or salary
              description: |-
                ## Purpose
                How clinicians are paid shapes who carries the risk of empty slots, how hard the practice pushes referrals and how long good people stay. Comparing a percentage split, a fixed sessional fee and a salary on your own numbers shows the cost to the practice and the take-home for clinicians before you change anything.

                ## Milestones
                1. Current pay arrangements and their cost per delivered session listed.
                2. Three models modelled on last year's sessions: split, sessional fee and salary.
                3. Effect on clinicians' income in a quiet month and a busy month shown.
                4. A decision recorded and discussed with the clinicians before any change.

                ## Notes
                Moving self-employed associates onto practice-controlled terms can change their employment status. Check with an employment lawyer first.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A comparison of three pay models on last year's data exists and a decision has been recorded and discussed with clinicians."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List every clinician's current pay arrangement"
                - "Model split, sessional and salary options on last year's sessions"
                - "Show each option's effect in a quiet and a busy month"
                - "Discuss the preferred model with the clinicians"
            - name: Sliding scale and low-cost places policy
              description: |-
                ## Purpose
                Many therapists want to see people who cannot pay full fees, but ad hoc discounts become unfair between clients and quietly cut income. A written policy setting how many reduced-fee places each clinician holds, how eligibility is judged and how often it is reviewed keeps the practice accessible and solvent.

                ## Milestones
                1. Current discounts listed by clinician and amount.
                2. A fixed number of reduced-fee places per clinician agreed.
                3. Simple eligibility rules and a review point written down.
                4. The policy published on the website in plain words.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A published sliding scale policy states the number of reduced-fee places, eligibility rules and review point."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every client currently on a reduced fee"
                - "Agree how many reduced-fee places each clinician will hold"
                - "Write simple eligibility rules and a review point"
                - "Publish the policy on the practice website"
            - name: Renting spare therapy rooms to independent therapists
              description: |-
                ## Purpose
                Most therapy rooms sit empty in the mornings and at weekends, and renting those hours to independent therapists can cover a large share of the rent. Doing it well needs a clear licence agreement, rules on confidentiality and shared spaces, and a check that your lease allows it.

                ## Milestones
                1. Room occupancy measured by hour over a typical month.
                2. The lease checked for subletting or licensing restrictions.
                3. A room licence agreement covering fees, hours, indemnity, conduct and notice.
                4. First room tenants vetted for registration and insurance.

                ## Notes
                Room tenants are not your clinicians. Make sure clients cannot assume the practice is responsible for their work.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A signed room licence is in place with at least one vetted tenant, and the lease permits the arrangement."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Measure each room's empty hours over a typical month"
                - "Check the lease for restrictions on licensing rooms"
                - "Draft a room licence agreement with a lawyer"
                - "Verify each prospective tenant's registration and insurance"
            - name: Group therapy programme decision
              description: |-
                ## Purpose
                A well-run group can help eight people in the time it takes to see two, and can reduce a waiting list for common problems such as anxiety or low mood. Deciding whether to run one needs a trained facilitator, a suitable room, a screening process and a fee that works for clients and the practice.

                ## Milestones
                1. Waiting list reviewed for presentations that suit a group.
                2. A facilitator with group training identified and a programme outline chosen.
                3. Fee, numbers, screening and confidentiality rules for the group set.
                4. A go or no-go decision recorded with the reasons.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded go or no-go decision on a group programme names the facilitator, fee, group size and screening process."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Count waiting list clients whose needs suit a group"
                - "Ask which clinicians have group facilitation training"
                - "Work out the fee and minimum numbers needed to break even"
                - "Record the decision and the reasons"
            - name: Waiting list reduction plan
              description: |-
                ## Purpose
                A waiting list of several months means people deteriorate while they wait, and many never start. A short plan using extra sessions from willing clinicians, an assessment clinic, groups, and clearer signposting can cut the wait to a few weeks without breaking anyone's caseload limit.

                ## Milestones
                1. Current waiting list size and average wait measured.
                2. A target wait set, for example under four weeks from enquiry to first session.
                3. Three or four changes agreed, each with an owner and date.
                4. Waiting clients contacted with an update and crisis information.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The average wait from enquiry to first session has fallen to the agreed target within four months."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Measure the current waiting list and average wait"
                - "Set a target wait the team agrees is realistic"
                - "Agree three changes with owners and dates"
                - "Write to everyone waiting with an update and crisis numbers"
            - name: Annual fee review and client notice
              description: |-
                ## Purpose
                Therapists are often reluctant to raise fees for existing clients, so fees fall behind rent and pay rises for years and then jump. A yearly review on a fixed date, with set notice to clients and a decision on whether existing clients are protected for a period, keeps fees fair and predictable.

                ## Milestones
                1. Local fees for comparable clinicians checked.
                2. Cost increases for the year totalled.
                3. New fees agreed, with a rule for existing clients.
                4. Clients given written notice in line with their therapy contract.
              priority: medium
              frontmatter:
                mode: event
                output_kind: decision
                success_criteria: "New fees are agreed by the same month each year and every affected client receives written notice in line with their contract."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Check what comparable local practices charge"
                - "Total this year's cost increases"
                - "Review and agree fees for the year ahead @recurring(yearly)"
                - "Send written notice to clients as their contract requires"
            - name: Accreditation or audit visit preparation
              description: |-
                ## Purpose
                Insurer panels, employee assistance programmes, public funders and some regulators audit therapy practices, checking records, supervision, risk procedures and complaints. Preparing a tidy evidence file in advance turns a stressful visit into a short one and often surfaces gaps you would want to fix anyway.

                ## Milestones
                1. The auditor's checklist or standards obtained and read.
                2. An evidence file assembled: registrations, supervision logs, risk protocol, complaints log, record keeping standard.
                3. A sample of client files checked against the standard and gaps fixed.
                4. Staff briefed on the visit and on what not to show for confidentiality reasons.

                ## Notes
                Start from the **Compliance control** template for each standard the audit checks.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An evidence file covering every audit standard is ready a week before the visit and the visit closes with no major findings."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Ask the auditing body for its checklist or standards"
                - "Assemble the evidence file against each standard"
                - "Check ten client files against the record keeping standard"
                - "Brief the team on what to expect during the visit"
            - name: Annual clinician wellbeing and CPD day
              description: |-
                ## Purpose
                Vicarious trauma and isolation are occupational hazards of therapy, and a practice that never stops to look after its clinicians loses them. A yearly day combining a training topic the team chooses, a review of the year and genuine rest from client work signals that the practice takes its people seriously.

                ## Milestones
                1. A date fixed with no client sessions booked.
                2. A training topic chosen by the clinicians and a facilitator booked.
                3. A review of the year's referrals, outcomes and complaints prepared, without client details.
                4. CPD certificates issued and filed for every attendee.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The day runs with no client sessions booked, and every attendee has a CPD certificate on file."
                cadence: cyclic
                effort_hours_estimate: "10"
              tasks:
                - "Ask the clinicians to vote on a training topic"
                - "Fix the date and block client bookings for the day"
                - "Book a facilitator and a venue"
                - "Plan next year's wellbeing and CPD day @recurring(yearly)"
            - name: Year-end with the practice accountant
              description: |-
                ## Purpose
                Year-end in a therapy practice turns on getting clinician payments, insurer income and room rentals classified correctly, which is where most errors and tax surprises arise. A prepared pack sent on time saves fees and gives you the accounts in time to plan the next year.

                ## Milestones
                1. Bank, practice system and insurer statements reconciled for the year.
                2. Clinician payments listed by person and arrangement.
                3. A year-end pack sent to the accountant by the agreed date.
                4. Draft accounts reviewed and any tax payments diarised.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "The year-end pack reaches the accountant by the agreed date and tax payment dates are diarised from the final accounts."
                cadence: cyclic
                effort_hours_estimate: "8"
              tasks:
                - "Ask the accountant for their year-end checklist"
                - "Reconcile the practice system against bank and insurer statements"
                - "Send the year-end pack to the accountant @recurring(yearly)"
                - "Diarise every tax payment from the final accounts"
            - name: Holiday closure and client continuity plan
              description: |-
                ## Purpose
                Clients can struggle around therapist breaks, and a practice-wide closure at the end of the year or in summer leaves some without anyone to call. Planning closures early, telling clients well in advance and naming cover for urgent contact keeps continuity and reduces crisis contacts during breaks.

                ## Milestones
                1. Closure dates and each clinician's leave published months in advance.
                2. Clients told of breaks in sessions ahead, as their contract describes.
                3. Cover arranged for urgent contact during closures.
                4. Crisis information sent to higher-risk clients before the break.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Closure dates are published at least two months ahead and every higher-risk client has crisis information before the break."
                cadence: cyclic
                effort_hours_estimate: "3"
              tasks:
                - "Collect each clinician's planned leave for the next six months"
                - "Agree the practice closure dates"
                - "Arrange cover for urgent contact during closures"
                - "Plan closure dates and cover for the coming year @recurring(yearly)"
            - name: From solo private practice to a group practice
              description: |-
                ## Purpose
                Going from one therapist with a room to a practice with associates changes the owner's job: you now carry responsibility for other people's clients, notes, supervision and income. Planning the step, with the agreements, systems and referral flow in place before the first associate starts, avoids the most common early failures.

                ## Milestones
                1. Enough surplus referrals shown over three months to justify a second clinician.
                2. Associate agreement, intake pack and risk protocol ready before anyone joins.
                3. Practice system set up for more than one clinician with separate access.
                4. First associate started and their first three months reviewed.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A first associate has completed three months with signed agreements, separate system access and a written review."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Count the referrals you turned away in the last three months"
                - "List the agreements and systems needed before an associate starts"
                - "Set up separate user access in the practice system"
                - "Book a three-month review with the first associate"
            - name: Hiring the first employed clinician
              description: |-
                ## Purpose
                Employing a therapist rather than taking on an associate brings payroll, pension, leave and employment law into the practice, along with more control over hours and client allocation. Doing it once properly gives you a contract, induction and probation process to repeat.

                ## Milestones
                1. A job description with client hours, supervision and admin time stated.
                2. Pay, benefits and probation terms agreed with an employment adviser.
                3. Registration, references and background checks completed before an offer.
                4. An induction covering the risk protocol, records, rooms and systems delivered.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An employed clinician has started with a signed contract, completed checks and a recorded induction."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Write the job description including client and admin hours"
                - "Ask an employment adviser to check the contract"
                - "Complete registration, reference and background checks"
                - "Plan a first-week induction covering risk and records"
            - name: Cutting the owner's own client hours
              description: |-
                ## Purpose
                Owners who keep a full caseload while running the practice usually do both badly, with management squeezed into evenings. Planning a gradual reduction in your own client hours, transferring new referrals rather than existing clients, frees protected time for supervision, finance and growth.

                ## Milestones
                1. Your current weekly client hours and management hours measured.
                2. A target split of client and management time agreed with yourself and any partner.
                3. New referrals redirected to other clinicians while existing clients finish naturally.
                4. Protected management time blocked in the diary each week.
              priority: low
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Your weekly client hours have fallen to the target and management time is blocked in the diary every week."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Log your client and management hours for two weeks"
                - "Set a target split of client and management hours"
                - "Stop taking new referrals onto your own caseload"
                - "Block weekly management time in the diary"
            - name: Clinical will and professional executor
              description: |-
                ## Purpose
                If a therapist dies or is suddenly incapacitated, their clients may be left without contact, notes unsecured and appointments unanswered. A clinical will names a professional executor who can access the diary and records, contact clients sensitively and arrange onward referral, and many professional bodies now recommend one.

                ## Milestones
                1. A colleague willing to act as professional executor for the owner, and one for each sole clinician.
                2. A clinical will stating access to records, client contact steps and storage of files.
                3. Access details held securely where the executor can reach them.
                4. The will referenced in the owner's legal will and reviewed yearly.

                ## Notes
                Your professional body may publish a clinical will template. Ask a lawyer to make sure it sits alongside your personal will.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A signed clinical will names a professional executor who has confirmed they can reach the diary and records."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Ask a trusted colleague to act as your professional executor"
                - "Draft a clinical will covering records, client contact and storage"
                - "Store access details where the executor can reach them"
                - "Review the clinical will with your executor @recurring(yearly)"
            - name: Placement students and trainee therapists
              description: |-
                ## Purpose
                Trainees bring energy and low-cost sessions, but they need placement agreements with their course, close supervision and careful case allocation. Setting up a placement scheme properly lets the practice grow future clinicians without putting clients at risk.

                ## Milestones
                1. Placement agreements signed with each training provider.
                2. Case allocation rules for trainees written: which presentations, how many clients.
                3. Supervision arrangements meeting the course's requirements confirmed.
                4. Clients told they are seeing a trainee and consenting in writing.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each trainee has a signed placement agreement, written allocation limits and documented supervision, and their clients have consented."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Contact local training courses about placement requirements"
                - "Write case allocation rules for trainees"
                - "Confirm supervision meets each course's requirements"
                - "Add trainee consent wording to the intake pack"
            - name: Starting a practice alongside a salaried post
              description: |-
                ## Purpose
                Many therapists open a private practice while still working in a hospital, charity or university service, which brings limited hours, possible conflicts of interest and an employer's rules on outside work. Planning around those limits, from evening rooms to declaring the work, lets the practice grow without risking the main job.

                ## Milestones
                1. Your employer's policy on outside private work read and any declaration made.
                2. A rule that you will not take private clients referred from your salaried service.
                3. Evening or weekend room hours secured and a realistic weekly client target set.
                4. A point defined at which you would reduce or leave the salaried post.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Outside work is declared to your employer, a conflict of interest rule is written and a weekly private client target is set."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read your employer's policy on private outside work"
                - "Write a rule against taking clients from your salaried service"
                - "Book regular evening or weekend room hours"
                - "Define the income point at which you would reduce the salaried role"
            - name: Couples and family therapy service standards
              description: |-
                ## Purpose
                Couples and family work raises questions individual therapy does not: whose consent, how secrets disclosed by one partner are handled, how to respond to domestic abuse, and who can access the shared record. Writing service standards before offering the work keeps clinicians consistent and the practice safe.

                ## Milestones
                1. Clinicians with couples or family training identified on the competence map.
                2. A contract covering consent, secrets policy, fees and record access for multiple clients.
                3. Domestic abuse screening and the response route written down.
                4. Rooms checked for size and privacy for two or more clients.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A couples and family contract and abuse screening procedure are in use by every clinician who offers the service."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List clinicians trained for couples or family work"
                - "Draft a contract covering consent and a secrets policy"
                - "Write a domestic abuse screening and response procedure"
                - "Check which rooms suit two or more clients"
            - name: Child and adolescent service with consent rules
              description: |-
                ## Purpose
                Working with under-18s brings parental responsibility, the young person's own capacity to consent, school liaison and stricter safeguarding duties. Defining the age range, consent process and safeguarding training before taking child referrals protects the young person and the practice.

                ## Milestones
                1. Age range of the service and clinicians trained for it confirmed.
                2. Consent procedure covering parental responsibility and the young person's own consent, checked with legal guidance.
                3. Child safeguarding training and background checks current for each clinician.
                4. Records retention for children's files set according to local rules.

                ## Notes
                Rules on who can consent for a child differ by country. Check your professional body's guidance and take legal advice if unsure.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written consent procedure for under-18s is in use and every clinician seeing children has current safeguarding training and checks."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Decide the age range the practice will see"
                - "Draft the consent procedure for young people and parents"
                - "Confirm each clinician's child safeguarding training and checks"
                - "Set the retention period for children's records"
            - name: Psychological assessment service set-up
              description: |-
                ## Purpose
                Assessments for learning, attention, autism or legal purposes are in high demand and paid well, but need qualified psychologists, licensed test materials, report templates and clear fees. Setting the service up deliberately avoids long reports written for free and tests used beyond the clinician's competence.

                ## Milestones
                1. Assessments offered, qualified assessors and their scope confirmed.
                2. Test materials purchased with licences and secure storage arranged.
                3. A fixed fee covering assessment, scoring, report and feedback session.
                4. A report template and turnaround standard agreed.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "An assessment service has published fees, licensed test materials, a report template and a turnaround standard."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "List the assessments clinicians are qualified to give"
                - "Price the test materials and their licences"
                - "Set an all-in fee including the report and feedback session"
                - "Agree a report template and turnaround time"
            - name: Online therapy risk and client location protocol
              description: |-
                ## Purpose
                Seeing clients online means the therapist may not know where the client is when a crisis happens, and the client may be in another jurisdiction where the clinician is not registered. A short protocol confirming location and an emergency contact at every session, and checking cross-border rules, closes the biggest gaps in remote therapy.

                ## Milestones
                1. Client location and an emergency contact confirmed at the start of every online session.
                2. A rule on seeing clients located in other countries or states, checked with the regulator and insurer.
                3. A plan for a session that drops during a risk disclosure.
                4. Clients told how to set up a private space for online sessions.

                ## Notes
                Technology choice and remote billing belong with your wider remote services set-up. This protocol is the clinical risk layer on top.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every online clinician confirms client location at each session and a cross-border rule is checked with the regulator and insurer."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Add location and emergency contact checks to the online session start"
                - "Ask your insurer whether you are covered for clients abroad"
                - "Write the plan for a dropped call during a risk disclosure"
                - "Send clients a short guide to a private space for online sessions"
---

# Owning a Therapy Practice

This area is for the counsellor, psychotherapist or psychologist who owns the practice as well as seeing clients in it, whether you are a solo practitioner with a rented room or run a group of ten clinicians across several rooms. It starts with the foundations (registrations, clinician agreements, confidentiality, the intake pack, fees, insurance and the risk protocol), moves through the weekly and monthly machinery of referrals, supervision, notes, rooms, claims and caseloads, then the knowledge an owner needs, the decisions on software, insurer panels, pay and access, the dated events such as audits and year-end, the situations founders and growing owners face, and finally specialist services for couples, children, assessments and online work.

What repeats is a weekly referral triage, room check and notes check, monthly supervision logging, claims, cancellations, caseload check-ins, outcome reviews, a team case meeting and a numbers review, a quarterly records and risk review, and yearly fee, insurance, registration and clinical will checks. The Risk register, Meeting notes, Metrics log, Purchase decision and Compliance control templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
