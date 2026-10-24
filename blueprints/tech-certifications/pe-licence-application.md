---
id: tech-certifications.pe-licence-application
name: Professional Engineer Licence Application
description: "A PE licence application board staff can approve first time: the right state board, verified experience, licensed references, honest disclosures, then comity, seals and renewal hours kept in order."
category: personal
version: 1.0.0
tags: [tech-certifications, pe-licence-application, engineer, ncees, licensure, comity, professional-development-hours]
author: Aurum Technology
starter_structure:
  templates:
    - operational-checklist
    - person
    - compliance-control
    - development-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Professional Engineer Licence Application
          description: "Applying for a PE licence: state board rules, verified experience records, references from licensed engineers, comity to other states and renewal hours."
          projects:
            - name: Choosing the state board for your first PE licence
              description: |-
                ## Purpose
                Your first licence is usually best held in the jurisdiction where you practise or plan to seal drawings, because comity to other states later starts from that record. Boards differ on experience counted, references required, state exams and how long review takes, so a deliberate choice now can save months. A short written comparison of two or three candidate boards settles the question before any fee is paid.

                ## Milestones
                1. Two or three candidate boards listed, with the reason each is in the running.
                2. Each board's experience, reference and state exam requirements noted side by side.
                3. Typical review times gathered from the board site or recently licensed colleagues.
                4. One board chosen and the reason written in a sentence at the top of your application folder.

                ## Notes
                Where you live matters less than where your engineering work and clients are. If your employer works across several states, ask which licence the firm most needs first.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One licensing board chosen, with a written comparison of at least two boards and the reason for the choice saved in the application folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List the states where you practise now or expect to seal work"
                - "Download the application instructions from each candidate board"
                - "Ask two recently licensed colleagues how long their board took"
                - "Record the chosen board and your reason in the application folder"
            - name: Reading your board's licensing statute and rules
              description: |-
                ## Purpose
                Every board publishes a licensing statute and administrative rules, and the application instructions are only a summary of them. Reading the sections on qualifying experience, references, disclosure and renewal yourself means you catch the requirement the checklist leaves out, such as a state laws exam or a rule about who may verify experience. An hour or two with the source text prevents the most common deficiency letters.

                ## Milestones
                1. The current statute and rules saved as dated files in your application folder.
                2. The sections on education, experience, references, exams and renewal marked.
                3. A one-page summary of what your board requires, in your own words.
                4. Any unclear rule written as a question to send to board staff.

                ## Notes
                Rules change. Note the effective date on the version you read, and check again just before you submit.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of your board's licensing requirements exists, dated, with the source rule numbers beside each requirement."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the licensing statute and rules pages on your board's website"
                - "Save both documents with today's date in the file name"
                - "Write a one-page summary of each requirement with its rule number"
                - "Email board staff any question the rules leave unclear"
            - name: Opening and populating your NCEES Record
              description: |-
                ## Purpose
                Most US boards accept or require an NCEES Record, which holds verified transcripts, exam results, experience and references once so they can be sent to any board later. Building it carefully for the first application makes every later comity application a matter of a transmittal request rather than a fresh chase for signatures. It also gives you one place to see which items are verified and which are still waiting.

                ## Milestones
                1. An NCEES account open and the Record started under your legal name.
                2. Education, exam history and employment sections filled in.
                3. Each verifier and reference entered with a working email address.
                4. A list of which sections are verified and which are pending, updated after each change.

                ## Notes
                Check first whether your chosen board accepts the Record for initial licensure or only for comity. A few boards run their own process for both.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An NCEES Record exists with education, exams, experience and references entered and a dated note of each section's verification status."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Check whether your board accepts the NCEES Record for initial licensure"
                - "Open an NCEES account and start the Record under your legal name"
                - "Enter your education, exam history and employment history"
                - "Add each experience verifier and reference with a current email"
            - name: Transcripts and degree verification sent to the board
              description: |-
                ## Purpose
                Official transcripts must usually come directly from the university, and a missing or delayed transcript is one of the slowest items to fix because it depends on a registrar's queue. Ordering them early, for every degree you will count, removes the item most likely to hold up an otherwise complete file. If your programme was accredited, the board will also want to see that it was accredited in the years you studied.

                ## Milestones
                1. Every degree you will count toward experience identified, with years of study.
                2. Official transcripts ordered from each university to the board or NCEES.
                3. Accreditation of each programme in your years of study confirmed.
                4. Receipt of each transcript confirmed by the board or the Record.

                ## Notes
                Ask the registrar for the electronic route if the board accepts it. Paper transcripts sent by post can take weeks to be logged.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The board or NCEES has confirmed receipt of an official transcript for every degree claimed on the application."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every degree you will claim, with dates of study"
                - "Order official transcripts to be sent directly to the board or NCEES"
                - "Check each programme's accreditation for the years you studied"
                - "Confirm with the board that every transcript has arrived"
            - name: Qualifying experience count against the board's rule
              description: |-
                ## Purpose
                Only engineering experience that shows growing responsibility counts with a board, and the years required depend on your degree, so the time on your CV and the time a board will credit can differ by a year or more. Counting your experience month by month against the board's own definition tells you whether you are ready to apply or how many months remain. It also exposes periods the board may not credit, such as sales, drafting only or overlapping part-time work.

                ## Milestones
                1. The years of experience your board requires for your degree type written down.
                2. Each job listed by month with the share of time spent on engineering work.
                3. Periods the board may not credit marked with the reason.
                4. A total of creditable months and the date you meet the requirement recorded.

                ## Notes
                Graduate degrees often earn a credit toward the experience total, but the amount varies by board. Use your board's figure, not a colleague's.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A month-by-month experience table shows the creditable total and the date it meets your board's requirement."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write down the experience your board requires for your degree"
                - "List every engineering job by start and end month"
                - "Mark periods of non-engineering or overlapping work"
                - "Total the creditable months and note the date you qualify"
            - name: Application timeline and fee budget
              description: |-
                ## Purpose
                Several fees and waits run in parallel in a PE application: the board application, the NCEES Record, transcripts, any state exam and later the seal. Laying them out on one timeline shows the critical path, usually references and board review, and lets you budget the costs or ask your employer to cover them before you start paying. Many employers reimburse licensure fees, but only if asked in advance.

                ## Milestones
                1. Every fee listed with its amount taken from the current official page.
                2. Each step placed on a timeline with its expected wait.
                3. The longest chain of steps identified as the critical path.
                4. Employer reimbursement asked about and the answer recorded.
              priority: medium
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page timeline with every fee, every wait and a target submission date exists, and the employer's reimbursement answer is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List each licensure fee from the board and NCEES pages"
                - "Put each step on a timeline with its expected wait"
                - "Mark the longest chain of steps as the critical path"
                - "Ask your manager whether the firm reimburses licensure costs"
            - name: Name, identity and document consistency check
              description: |-
                ## Purpose
                One surname on a transcript, another on an exam result and a passport with a middle name the others leave out can stall a file while staff confirm you are one person. Checking every document for the same legal name and preparing proof of any change before you apply turns a deficiency into a footnote. The same check covers date of birth, the format of your address and any identity or lawful presence document the board asks for.

                ## Milestones
                1. Every document the application will rely on listed with the name it shows.
                2. Differences in name, date of birth or spelling identified.
                3. Proof of each name change, such as a marriage certificate or deed, copied.
                4. One legal name chosen and used on every form from now on.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table of every application document with the name it shows, plus copies of proof for any difference, is saved in the application folder."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "List the name shown on each transcript, exam result and ID"
                - "Scan proof of any name change into the application folder"
                - "Choose the legal name you will use on every form"
                - "Update your NCEES account to match that legal name"
            - name: Exam approval route and passed exam records
              description: |-
                ## Purpose
                Some boards still require approval before you sit the PE exam, others let you sit first and apply later, and the order changes what you submit and when. Confirming your board's route and getting your passed FE and PE results into the file avoids applying for the wrong thing. If you passed an exam years ago or in another state, the record of that result has to be requested, not assumed.

                ## Milestones
                1. Your board's route recorded: approval before the exam, or exam first and licence application after.
                2. FE and PE results located, with dates and the discipline taken.
                3. Results from any other state or older sitting requested for transfer.
                4. The exam section of the application or NCEES Record showing every passed exam.

                ## Notes
                Preparing for the exam itself belongs in a separate study plan. This project is only about getting results onto the application.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Your board's exam route is written down and every passed FE and PE result appears verified in the application or NCEES Record."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your board requires approval before the PE exam"
                - "Find the dates and disciplines of your passed FE and PE exams"
                - "Request transfer of any result held by another state board"
                - "Confirm every passed exam shows on the application file"
            - name: Engineer intern certificate as a prerequisite
              description: |-
                ## Purpose
                Several boards expect you to hold an engineer intern or engineer in training certificate before they will grant a PE licence, even if you passed the FE years ago. Applying for it now, or confirming you already hold it, stops the PE file from being returned for a missing earlier step. It is usually a short application, but it has its own processing time.

                ## Milestones
                1. Your board's rule on the intern certificate confirmed.
                2. Any certificate you already hold located, with its number and state.
                3. An intern application submitted where one is required.
                4. The certificate number recorded in the application folder.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An engineer intern certificate number is recorded, or a written note confirms your board does not require one."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your board requires an intern certificate first"
                - "Search the board's licence lookup for any certificate you hold"
                - "Submit the intern application if your board requires it"
                - "Record the certificate number in the application folder"
            - name: Monthly application evidence filing session
              description: |-
                ## Purpose
                Licensure evidence arrives in pieces: a reference confirms, a transcript lands, a supervisor emails a project list, a board sends a letter. A monthly half hour to file each item in one folder, with a status sheet, keeps the file ready to submit and means nothing lives only in an inbox. It also catches a request that has gone quiet before it costs a month.

                ## Milestones
                1. One application folder with sections for education, exams, experience, references and correspondence.
                2. A status sheet listing each required item as received, pending or not started.
                3. Twelve monthly filing sessions held, each leaving the status sheet current.

                ## Notes
                Keep scanned copies of anything you send by post, with the date sent. Boards occasionally lose paper.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The status sheet in the application folder has been updated in each of the last three months."
                cadence: rolling
              tasks:
                - "Create the application folder with its five sections"
                - "Build a status sheet listing every required item"
                - "File new evidence and update the status sheet @recurring(monthly:12)"
                - "Chase any item marked pending for more than four weeks"
            - name: Keeping in touch with your licensed references
              description: |-
                ## Purpose
                References are licensed engineers with full diaries, and the one who knew your work best may retire, move or forget the detail by the time a second state asks. A short quarterly note keeps the relationship current, keeps their contact details right and makes the next request easy to say yes to. It also tells you early if someone can no longer act.

                ## Milestones
                1. A record for each reference with licence number, state, contact details and the work they saw.
                2. A quarterly check-in sent to each reference.
                3. Contact details updated within a month of any change.
                4. A replacement reference identified for anyone who can no longer act.

                ## Notes
                Start from the **Person** template, one record per reference.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each reference has a current record and has heard from you within the last three months."
                cadence: rolling
              tasks:
                - "Create a record for each reference with their licence details"
                - "Send each reference a short update on your licensure progress @recurring(quarterly)"
                - "Look up each reference's licence status on the board site"
                - "Name a backup reference for anyone close to retirement"
            - name: Board review status tracker
              description: |-
                ## Purpose
                Once an application is submitted it can sit for weeks with no message, then a deficiency notice arrives with a short reply window. A weekly check of the board portal, the NCEES Record and your email, logged in one tracker, means you see a request the day it appears. The log also gives you facts to quote if you need to ask staff why a file has stalled.

                ## Milestones
                1. A tracker with the submission date, each status change and each message from the board.
                2. A weekly check of the board portal and the Record logged while the file is open.
                3. Every board request answered inside its reply window.
                4. The tracker closed with the licence number and issue date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The tracker shows a weekly status check for every week the application was open, with every board request answered before its deadline."
                cadence: rolling
              tasks:
                - "Create a tracker with columns for date, source, status and action"
                - "Check the board portal and NCEES Record and log the status @recurring(weekly:tue)"
                - "Save every board email and letter into the correspondence section"
                - "Ask board staff for an update if nothing has changed in six weeks"
            - name: Licence renewal calendar for every state
              description: |-
                ## Purpose
                Renewal dates differ by board: some tie them to your birth month, some to a fixed date, some to the date the licence was issued, and practising on an expired licence is a disciplinary matter. One calendar with every licence, its expiry and its renewal hour deadline means nothing lapses by accident. Setting reminders two months ahead leaves time to finish any missing hours.

                ## Milestones
                1. Every licence listed with its number, state, expiry date and renewal cycle.
                2. Renewal hour requirements for each state noted beside its expiry.
                3. A reminder set two months before each expiry.
                4. Each renewal completed and the new expiry recorded.

                ## Notes
                Start from the **Compliance control** template, one control per licence.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every licence has a recorded expiry, renewal hour requirement and reminder, and none has lapsed."
                cadence: rolling
              tasks:
                - "List every licence with its number, state and expiry date"
                - "Note each state's renewal hours and cycle length"
                - "Set a reminder two months before each expiry"
                - "Review every licence expiry and reminder for the coming year @recurring(yearly)"
            - name: Professional development hour log
              description: |-
                ## Purpose
                Most boards require a set number of professional development hours each renewal cycle, often with a share in ethics or state rules, and they audit a sample of renewals by asking for proof. Logging each course, seminar or conference within a few weeks, with the certificate attached, turns an audit into an email. Waiting until the renewal month means hunting for certificates and finding the hours that do not count.

                ## Milestones
                1. A log with date, provider, title, hours, topic type and a link to the certificate.
                2. Each state's hour total and any ethics or rules requirement shown against the log.
                3. Hours logged within a month of each activity.
                4. A quarterly check showing hours earned against hours needed by the next expiry.

                ## Notes
                Keep certificates for at least as long as your board says it may audit, which is often longer than one cycle.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The hour log shows every activity this cycle with a certificate attached and a running total for each state."
                cadence: rolling
              tasks:
                - "Set up the hour log with a column for each state's requirement"
                - "Add this month's courses and certificates to the log @recurring(monthly:20)"
                - "Compare hours earned with each state's requirement @recurring(quarterly)"
                - "Book an ethics course if any state's ethics hours are short"
            - name: Yearly board rule change review
              description: |-
                ## Purpose
                Rules on renewal hours, references, seals and comity are amended more often than licensees notice, and the change usually applies at your next renewal whether you read it or not. A yearly look at each board's rule changes and newsletter catches the new ethics requirement or the end of a paper option before it bites. Ten minutes per board is enough.

                ## Milestones
                1. Each board's rules page and newsletter located and bookmarked.
                2. Rule changes since the last review noted for every state you hold.
                3. Any change that affects your renewal or seal practice added to the right calendar.
                4. The review date recorded in your licence register.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated note lists the rule changes found for each board this year and what you changed as a result."
                cadence: cyclic
              tasks:
                - "Bookmark the rules page and newsletter for each board you hold"
                - "Read each board's rule changes since your last review @recurring(yearly)"
                - "Add any new renewal requirement to the renewal calendar"
                - "Sign up for each board's email updates where offered"
            - name: Address and employment change notices to boards
              description: |-
                ## Purpose
                Many boards require you to report a change of address, employer or name within a set number of days, and a renewal notice sent to an old address is no defence against a lapse. A quarterly check that each board and the NCEES Record show your current details closes that gap. It also keeps the supervisors listed in your Record reachable for later comity verifications.

                ## Milestones
                1. Each board's rule on reporting changes noted with its time limit.
                2. Current address, email and employer confirmed on every board portal.
                3. The NCEES Record updated with your current employer and contacts.
                4. Every change reported inside the board's time limit.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every board portal and the NCEES Record show your current address and employer, checked within the last quarter."
                cadence: rolling
              tasks:
                - "Note each board's time limit for reporting a change"
                - "Check your details on every board portal and the Record @recurring(quarterly)"
                - "Report any new address or employer to each board"
                - "Update the contacts for past supervisors in your Record"
            - name: NCEES Record yearly upkeep
              description: |-
                ## Purpose
                An NCEES Record has to be renewed to stay active, and the experience in it goes stale if you only add to it when you need a new state. Updating it once a year, while recent projects and supervisors are fresh, means a future transmittal goes out complete. A Record that has lapsed can usually be reactivated, but at the moment you least want a delay.

                ## Milestones
                1. The Record's renewal date noted in your licence register.
                2. Each year's new experience added with a verifier who saw the work.
                3. The Record renewed before it lapses.
                4. A note of which boards have received a transmittal and when.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The NCEES Record is active, renewed this year, and includes experience up to the last twelve months."
                cadence: cyclic
              tasks:
                - "Note the Record's renewal date in your licence register"
                - "Add last year's experience and request its verification @recurring(yearly)"
                - "Renew the Record before its expiry date"
                - "Log every transmittal sent to a board with the date"
            - name: Licence and credential register
              description: |-
                ## Purpose
                Clients, employers and other boards ask for licence numbers, issue dates and proof of good standing at short notice. One register with every licence, certificate number, expiry, seal details and a copy of each wall certificate answers those requests in minutes. It also becomes the starting point for every comity application and every renewal.

                ## Milestones
                1. A register listing each licence with number, state, issue date, expiry and status.
                2. Scanned copies of every licence certificate and renewal receipt attached.
                3. Seal and signature details recorded for each state.
                4. The register checked against each board's public lookup once a year.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register shows every licence with number, dates and status matching the board's public lookup, checked in the last year."
                cadence: rolling
              tasks:
                - "Create the register with one row per licence"
                - "Scan every licence certificate and renewal receipt into it"
                - "Compare each row with the board's public lookup @recurring(yearly)"
                - "Record the seal details required in each state"
            - name: Writing experience descriptions boards accept
              description: |-
                ## Purpose
                Reviewers reject experience written as job titles or duties, and approve experience that shows engineering judgement: the problem, the analysis you did, the decision you made and the standard you applied. Practising that style on a few entries, then rewriting the rest, is the single biggest lever on whether your file comes back with questions. A good entry is specific enough that your verifier can sign it without editing.

                ## Milestones
                1. Your board's instructions and any sample experience entries read.
                2. Three entries rewritten to show problem, analysis, decision and standard applied.
                3. Every entry rewritten in the same style and checked against the word limit.
                4. Each entry read and agreed by the person who will verify it.

                ## Notes
                Write in the first person, with your role clear. 'The team designed' tells the reviewer nothing about you. Ask the agent to flag entries that describe duties rather than decisions.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "Every experience entry names a problem, your analysis, your decision and the standard used, and each verifier has agreed their entries."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read your board's guidance on describing engineering experience"
                - "Rewrite your three strongest projects as problem, analysis and decision"
                - "Rewrite one more experience entry in the same style @recurring(weekly:sat)"
                - "Ask the agent to flag entries that read as duties, not decisions"
                - "Send each verifier the entries they will sign for comment"
            - name: Responsible charge and progressive experience explained
              description: |-
                ## Purpose
                Credit goes to experience that grows in responsibility, ending with work done in responsible charge or under the direct control of a licensed engineer, and these terms have specific meanings in each statute. Understanding them lets you present the same career in the order and language a reviewer is looking for. It also tells you whether a recent role counts or whether a few more months are needed.

                ## Milestones
                1. Your board's definitions of responsible charge and qualifying experience copied out.
                2. Your experience arranged to show responsibility growing over time.
                3. The roles where you exercised responsible charge identified, with evidence.
                4. Any gap in progression explained in a sentence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page note shows your experience in order of growing responsibility, with the board's definitions quoted and each responsible charge role evidenced."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Copy your board's definition of responsible charge into your notes"
                - "Arrange your roles in order of growing responsibility"
                - "List the decisions you made alone in your most senior role"
                - "Write one sentence explaining any step back in responsibility"
            - name: State laws and rules exam
              description: |-
                ## Purpose
                Some boards add their own exam on the state's engineering law, rules and ethics, often open book and taken online, and a few add discipline-specific state exams, as California does for civil engineers. It is easy to pass and easy to forget, and a licence will not issue until it is done. Booking it as soon as your board confirms it applies keeps it off the critical path.

                ## Milestones
                1. Confirmation of whether your board requires a laws, rules or other state exam.
                2. The current statute, rules and any study guide downloaded.
                3. The exam taken and passed.
                4. The result confirmed on your application file.

                ## Notes
                Check the current format, length and pass mark on the board's site rather than relying on a colleague who took it years ago.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: event-completion
                success_criteria: "Any state exam your board requires is passed and shows on your application file, or a note confirms none applies."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check whether your board requires a state laws or rules exam"
                - "Download the study material the board provides"
                - "Read the rules sections on conduct, seals and practice"
                - "Take the exam and save the result confirmation"
            - name: Engineering ethics and conduct rules for licensees
              description: |-
                ## Purpose
                Once licensed you are bound by your board's rules of professional conduct: holding public safety paramount, practising only in your competence, avoiding conflicts and reporting violations. Most disciplinary cases involve conduct rather than calculation errors, so knowing the rules before your name is on a seal is protection, not theory. Working through a handful of realistic cases makes the rules stick.

                ## Milestones
                1. Your board's rules of professional conduct read in full.
                2. The NCEES model rules or a professional society's code compared with your board's rules.
                3. Five realistic ethics cases worked through with a written answer to each.
                4. A short personal note on how you will decide when asked to work outside your competence.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five ethics cases have written answers that cite the board's conduct rule each one turns on."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read your board's rules of professional conduct"
                - "Find five published engineering ethics cases to work through"
                - "Write your answer to each case citing the relevant rule"
                - "Discuss two of the cases with a licensed mentor"
            - name: Seal, signature and document authentication rules
              description: |-
                ## Purpose
                Each state sets what your seal must look like, which documents must be sealed, how electronic seals and signatures are applied and what records you must keep. Getting this wrong on the first sealed drawing is a common early complaint. Learning your board's rules before the licence arrives means the first set of documents you seal goes out right.

                ## Milestones
                1. Your board's seal design, size and content requirements noted.
                2. The rules on which documents must be sealed and by whom summarised.
                3. Your employer's process for electronic sealing and signing understood.
                4. A one-page sealing checklist written for your own use.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A one-page sealing checklist exists that cites your board's seal rules and matches your employer's electronic sealing process."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Read your board's rules on seals and signatures"
                - "Ask your firm how it applies electronic seals"
                - "Write a one-page checklist for sealing a document"
                - "Compare your checklist with a sealed set from a senior engineer"
            - name: Industrial exemption and when a licence is required
              description: |-
                ## Purpose
                Many states exempt engineers working inside manufacturing, utilities or government from licensure, which is why some excellent engineers never apply, and why others find a licence suddenly required when they change role or offer services to the public. Reading your state's exemptions tells you whether the licence is a legal need or a career asset in your current work. Either answer is a good reason to apply, but they set different deadlines.

                ## Milestones
                1. Your state's exemptions from licensure listed from the statute.
                2. Your current role checked against each exemption.
                3. The roles or moves that would require a licence identified.
                4. A sentence recorded on whether licensure is required or optional for you today.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A written note states whether your current role is exempt, citing the statute section, and which future roles would need a licence."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find the exemption section in your state's licensing statute"
                - "Check your current role against each exemption"
                - "List the role changes that would end the exemption"
                - "Ask a licensed manager how the firm reads the exemption"
            - name: Learning from published board disciplinary actions
              description: |-
                ## Purpose
                Most boards publish their disciplinary orders, and reading them is the quickest way to see what actually gets engineers into trouble: practising on an expired licence, sealing work they did not supervise, false renewal hour claims, or careless application answers. A short monthly read builds an instinct for the mistakes to avoid. It is uncomfortable reading, and that is the point.

                ## Milestones
                1. Your board's disciplinary actions page located.
                2. A note kept of the cause of each action you read.
                3. The three most common causes identified.
                4. One change made to your own practice in response.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note lists at least twelve disciplinary actions with their causes and one change you made to your own practice."
                cadence: rolling
              tasks:
                - "Find your board's published disciplinary actions"
                - "Read one disciplinary order and note its cause @recurring(monthly:15)"
                - "Group the causes you have read into common themes"
                - "Write down one change to your own practice"
            - name: Choosing your licensed references
              description: |-
                ## Purpose
                Boards ask for references from licensed engineers who know your work, often with a minimum number who supervised you, and a reference who cannot speak to your engineering judgement weakens the file. Choosing deliberately, across your career and with licences in good standing, gives the reviewer a consistent picture. Asking a few weeks before you submit gives each person time to write properly.

                ## Milestones
                1. Your board's reference rules noted: number, licence status, relationship and any limits.
                2. A long list of licensed engineers who have seen your work, with how they know it.
                3. Each candidate's licence checked as current on the board's public lookup.
                4. The final references chosen and each one's agreement obtained.

                ## Notes
                Relatives are usually not accepted. A mix of past and present supervisors reads better than several colleagues from the same team.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The number of references your board requires have agreed to act, each with a licence confirmed current on the public lookup."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Note your board's rules on who can act as a reference"
                - "List every licensed engineer who has seen your work"
                - "Check each candidate's licence on the board's public lookup"
                - "Ask your chosen references whether they will act"
            - name: Reference request pack and follow-up
              description: |-
                ## Purpose
                Given a bare link and no context, a reference will write a vague form or let it sit. Sending each one a short pack, with the projects they saw, your experience entries for that period and the deadline, gets specific answers back quickly. A polite follow-up plan for anyone who goes quiet keeps references from becoming the critical path.

                ## Milestones
                1. A one-page pack for each reference with the projects they saw and the dates.
                2. Each reference request sent through the board or NCEES system.
                3. A follow-up sent to anyone who has not responded within two weeks.
                4. Every reference confirmed as received by the board.

                ## Notes
                Never draft the reference yourself. You may remind someone what they saw, but the words and judgement must be theirs.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every required reference shows as received on the board or NCEES system within sixty days of the first request."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the agent to draft a one-page project summary for each reference"
                - "Send each reference request through the official system"
                - "Follow up with anyone who has not responded in two weeks"
                - "Confirm each reference shows as received"
            - name: Verifying experience when a supervisor is unavailable
              description: |-
                ## Purpose
                Supervisors retire, change companies, move abroad or die, and some were never licensed, yet boards still need someone to verify the work. Knowing your board's alternatives, such as a licensed colleague who saw the work, a later supervisor or a signed statement with project records, lets you pick the best option instead of leaving the period out. A gap that is explained is far better than one the reviewer finds.

                ## Milestones
                1. Every period of experience without an available licensed verifier listed.
                2. Your board's accepted alternatives for verification noted.
                3. A verifier or alternative evidence chosen for each period.
                4. A short explanation written for any period still without a verifier.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every period of claimed experience has a named verifier or documented alternative accepted by your board's rules."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every experience period without an available licensed verifier"
                - "Ask board staff which alternatives they accept"
                - "Find a licensed colleague who saw the work in each period"
                - "Gather drawings or reports that show your role in that work"
            - name: One state first or several at once
              description: |-
                ## Purpose
                Working across state lines raises the question of whether to apply to several boards together or license in one and use comity later. Applying to one first is usually simpler because later boards rely on a verified record, but a project or job offer can make a second licence urgent. A short decision note, with the states you need in the next two years, settles the order.

                ## Milestones
                1. The states where you will need a licence in the next two years listed with the reason.
                2. Each state's comity rules and timing noted.
                3. An order of applications decided.
                4. The decision shared with your manager if the firm depends on it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note lists the states you will apply to, in order, with the reason and expected timing for each."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the states where you expect to need a licence soon"
                - "Read each state's comity requirements and review time"
                - "Decide the order of applications and write it down"
                - "Share the plan with your manager"
            - name: Disclosure questions answered fully and accurately
              description: |-
                ## Purpose
                Applications ask about criminal convictions, past discipline, licence refusals and sometimes civil judgements, and boards treat an incomplete answer more seriously than the event itself. Preparing these answers carefully, with documents for anything you disclose, removes the most avoidable reason for refusal. If something is on the record, a short factual explanation with court or board papers usually lets the file move.

                ## Milestones
                1. Every disclosure question on the application copied out.
                2. A truthful answer drafted for each, with any event described factually.
                3. Supporting documents gathered for anything disclosed.
                4. Advice taken from an attorney if any answer could affect eligibility.

                ## Notes
                This is not legal advice. If you are unsure whether something must be disclosed, ask the board or an attorney before submitting rather than guessing.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Every disclosure question has a written, truthful answer, with supporting documents attached for anything disclosed."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Copy every disclosure question from the application"
                - "Write a truthful answer to each question"
                - "Gather court or board documents for anything disclosed"
                - "Ask an attorney or the board about any answer you are unsure of"
            - name: Renewal hour plan for the licence cycle
              description: |-
                ## Purpose
                Renewal hours are easy to collect in a rush and hard to collect well. Planning a cycle's hours around what you actually need to learn, with the ethics and any state-specific hours placed early, turns a compliance chore into useful development and avoids paying for whatever course is left in the final month. A plan also shows which sources each of your boards accepts.

                ## Milestones
                1. Each board's hour total, required topics and carry-over rules listed.
                2. Three to five development goals for the cycle written down.
                3. Courses, conferences and other activities chosen against those goals.
                4. Ethics and state-specific hours booked in the first half of the cycle.

                ## Notes
                Start from the **Development plan** template. Check which activity types each board accepts before paying for anything.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written plan shows enough planned hours to meet every board's requirement, with required topics booked in the first half of the cycle."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List each board's hour total and required topics"
                - "Write three development goals for this licence cycle"
                - "Choose activities that meet both the goals and the board rules"
                - "Book the ethics hours for the first half of the cycle"
            - name: Choosing active, inactive or retired status
              description: |-
                ## Purpose
                Statuses beyond active, such as inactive or retired, are on offer at most boards, with lower fees or fewer renewal hours, but practising or calling yourself a PE is restricted under them. Choosing deliberately for each licence you hold, when you change role, move abroad or wind down, keeps you compliant and avoids paying for licences you do not use. Reactivation rules decide how easy it is to change your mind later.

                ## Milestones
                1. The statuses each of your boards offers, with fees and hour rules, listed.
                2. The restrictions on practice and title under each status noted.
                3. A status chosen for each licence, with the reason.
                4. Reactivation rules recorded for any licence placed inactive or retired.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Each licence has a recorded status choice and the reactivation rules for any non-active licence are noted in the register."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the statuses each of your boards offers"
                - "Note what each status allows and restricts"
                - "Choose a status for each licence and record why"
                - "Write down how to reactivate each non-active licence"
            - name: Submitting the initial PE licence application
              description: |-
                ## Purpose
                Submission day is when every earlier project comes together: application form, fee, transcripts, exam results, experience, references and disclosures. A final checklist, run against the board's own instructions, catches the unsigned page or missing attachment that would otherwise send the file back. Keeping a full copy of what you sent gives you something to quote if a question comes later.

                ## Milestones
                1. Every item on the board's checklist marked as complete or confirmed received.
                2. The application form, attestation and fee submitted.
                3. A complete copy of the submission saved with the date.
                4. The board's acknowledgement or file number recorded in the status tracker.

                ## Notes
                Start from the **Operational checklist** template. Read the attestation slowly; you are signing a statement that the whole file is true.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The application is submitted, the fee paid, a full copy saved and the board's file number recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Build a checklist from the board's application instructions"
                - "Check every item off against the status sheet"
                - "Submit the application and pay the board fee"
                - "Save a full copy of the submission with today's date"
            - name: Responding to deficiency letters
              description: |-
                ## Purpose
                A deficiency letter is common and usually fixable: a reference unclear about dates, experience the reviewer could not credit, a missing transcript. Responding quickly, completely and in the board's format keeps the file in the reviewer's queue instead of at the back. Each response is also a lesson for the next state's application.

                ## Milestones
                1. Each deficiency listed with what the board asked for and its reply deadline.
                2. Missing documents or clarifications gathered.
                3. A complete response sent before the deadline.
                4. The lesson from each deficiency noted for future applications.
              priority: high
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Every deficiency raised by the board is answered completely before its reply deadline, with a copy of the response saved."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each deficiency with its reply deadline"
                - "Check open deficiency items and chase anyone involved @recurring(weekly:fri)"
                - "Send a complete response in the format the board asks for"
                - "Note what caused each deficiency for the next application"
            - name: Board interview or oral review preparation
              description: |-
                ## Purpose
                Some boards invite applicants to an interview, particularly where experience is unusual, education is from outside the US, or a disclosure needs discussion. It is a conversation about your engineering judgement and conduct, not an exam, but being able to explain your projects clearly and briefly makes it short. Preparation is mostly rehearsing the story of your experience.

                ## Milestones
                1. The board's reason for the interview and its format confirmed.
                2. A two-minute account of each major project prepared.
                3. Answers ready for likely questions on conduct and any disclosure.
                4. One practice session held with a licensed engineer.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The interview is attended with a prepared two-minute account of each major project and one rehearsal completed beforehand."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask board staff the purpose and format of the interview"
                - "Prepare a two-minute account of each major project"
                - "Practise questions on conduct and responsible charge aloud"
                - "Rehearse once with a licensed engineer"
            - name: Licence issued, seal ordered and first sealed document
              description: |-
                ## Purpose
                The licence number arrives by email or portal before the wall certificate, and you are not entitled to seal or use the title until the board says the licence is active. Ordering the seal in the board's required format, setting up electronic sealing and recording the first sealed set properly marks the change from applicant to licensee. Starting a register of sealed documents now helps with any later question about your work.

                ## Milestones
                1. The licence confirmed active on the board's public lookup.
                2. A seal or stamp ordered in the board's required design.
                3. Electronic seal and signature set up with your firm's process.
                4. A register of sealed documents started with the first entry.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The licence shows active on the public lookup, a compliant seal is in hand and the sealed document register holds its first entry."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Confirm the licence is active on the board's public lookup"
                - "Order a seal that matches the board's design rules"
                - "Set up electronic sealing with your firm's process"
                - "Update the sealed document register with this month's sets @recurring(monthly:28)"
            - name: First licence renewal cycle completed
              description: |-
                ## Purpose
                The first renewal is where new licensees most often slip: the cycle may be shorter than expected, hours may be prorated, or the renewal notice goes to an old email. Treating the first renewal as a small project, with a monthly check of hours and portal, gets it done early and sets the pattern for every later cycle. After this one, renewal becomes routine.

                ## Milestones
                1. The first expiry date and any prorated hour rule confirmed.
                2. Required hours earned and logged with certificates.
                3. The renewal submitted at least a month before expiry.
                4. The new expiry date recorded in the register and calendar.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The first renewal is submitted at least thirty days before expiry, with every claimed hour backed by a certificate."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Confirm your first expiry date and any prorated hour rule"
                - "Check hours logged against the first cycle's requirement @recurring(monthly:8)"
                - "Submit the renewal at least a month before expiry"
                - "Record the new expiry in the register and calendar"
            - name: Comity application to a second state
              description: |-
                ## Purpose
                Comity, sometimes called licensure by endorsement, lets a licensed engineer gain a licence in another state without retaking exams, provided the original licence met that state's standards. With an NCEES Record it is mostly a transmittal and the second board's own forms, state exams or ethics questions. Applying before the project that needs it starts avoids practising without a licence in that state.

                ## Milestones
                1. The second state's comity requirements and any state exam noted.
                2. The NCEES Record or verifications transmitted to the second board.
                3. The second state's forms, fee and any state exam completed.
                4. The new licence number added to the register and renewal calendar.

                ## Notes
                Do not offer or perform engineering in the new state until the licence is issued. Some states restrict even advertising or proposals.
              priority: medium
              deadlineOffsetDays: 365
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A licence is issued by a second state and recorded in the register with its expiry and renewal hour rules."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Read the second state's comity rules and forms"
                - "Request a Record transmittal to the second board"
                - "Complete any state exam or ethics requirement"
                - "Add the new licence to the register and calendar"
            - name: Applying with an engineering degree from outside the US
              description: |-
                ## Purpose
                Degrees earned outside the US usually have to be evaluated against accredited US programmes, and the evaluation can show course deficiencies to make up before the degree counts in full. Starting the evaluation early, with official transcripts and course descriptions from your university, keeps it off the critical path. Knowing the outcome also tells you whether your experience requirement is longer.

                ## Milestones
                1. The evaluation service your board accepts identified, such as NCEES Credentials Evaluations.
                2. Official transcripts and course descriptions requested from your university, with certified translations if needed.
                3. The evaluation report received and any deficiencies listed.
                4. A plan to make up any deficiencies or extra experience recorded.

                ## Notes
                Universities abroad can take months to send official documents. Ask for several sealed copies at once.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A credentials evaluation report accepted by your board is on file, with any deficiencies and the plan to address them written down."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Confirm which evaluation service your board accepts"
                - "Request official transcripts and course descriptions from your university"
                - "Arrange certified translations for any document not in English"
                - "List any deficiencies in the report and how you will close them"
            - name: US PE licence for a Caribbean-based engineer
              description: |-
                ## Purpose
                Engineers in Trinidad and Tobago, Jamaica, Barbados and elsewhere in the region sometimes need a US PE licence for clients or employers in the States, while holding local registration such as with the Board of Engineering of Trinidad and Tobago. Some US boards accept applicants who live abroad and some do not, and experience gained abroad may need a licensed verifier the board will accept. Choosing a board that welcomes non-resident applicants is the first decision.

                ## Milestones
                1. US boards that accept non-resident applicants identified.
                2. Your Caribbean experience mapped to the chosen board's definitions.
                3. Licensed verifiers acceptable to the board identified for each period abroad.
                4. Degree evaluation, exams and references set out on one plan with dates.

                ## Notes
                Keep your local registration current alongside the US licence. Each has its own renewal rules and they rarely line up.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A US board accepting non-resident applicants is chosen, and each period of Caribbean experience has an acceptable verifier named."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List US boards that accept applicants who live outside the US"
                - "Map your regional experience to the chosen board's definitions"
                - "Name an acceptable verifier for each period worked in the region"
                - "Ask a regional engineer who holds a US licence how they applied"
            - name: Verifying experience from self-employment or a small firm
              description: |-
                ## Purpose
                Sole practitioners, contractors and people from very small firms often have no licensed supervisor to sign their experience, and boards approach this cautiously. Gathering project records, client letters and verification from licensed engineers who reviewed or relied on your work gives the reviewer something firmer than your own account. Asking the board early how it treats self-employed experience avoids a refused file.

                ## Milestones
                1. Each self-employed or small firm period listed with its main projects.
                2. Your board's approach to self-employed experience confirmed with staff.
                3. Licensed engineers who reviewed or relied on the work asked to verify it.
                4. Project records chosen to show your role and judgement.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each self-employed period has a licensed verifier or supporting records that meet your board's stated approach."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each self-employed period with its main projects"
                - "Ask board staff how they treat self-employed experience"
                - "Contact licensed engineers who reviewed your work"
                - "Choose project records that show your own decisions"
            - name: Licensure later in a government, military or industry career
              description: |-
                ## Purpose
                Years spent exempt in government, the armed forces or industry often end with a decision to license on moving to consulting or a role that seals work. Older experience is still creditable, but supervisors are harder to find and some boards ask for more recent references. Planning the application around your most recent and best documented roles makes a long career easier to verify.

                ## Milestones
                1. Your career listed with the roles that best show engineering judgement.
                2. Supervisors and licensed colleagues from each period traced.
                3. Military or government records that document your roles requested.
                4. An application plan that leads with the strongest recent experience.

                ## Notes
                Some boards offer a route for experienced engineers that waives or modifies exams. Check your board's rules rather than assuming the standard route.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An application plan names a verifier for each career period and confirms which route your board offers for experienced engineers."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the roles in your career that best show engineering judgement"
                - "Trace former supervisors through professional networks"
                - "Request service or employment records for each period"
                - "Check whether your board has a route for experienced engineers"
            - name: Moving states with an existing PE licence
              description: |-
                ## Purpose
                A move for work or family means a comity application in the new state and a decision about the old licence, and the timing matters because you cannot practise in the new state until licensed there. Planning the move with the licence steps in order keeps you working from day one. It is also the moment to update every board with your new address.

                ## Milestones
                1. The new state's comity requirements and review time noted.
                2. The comity application submitted before or soon after the move.
                3. A decision made on keeping, making inactive or letting go of the old licence.
                4. Every board and the NCEES Record updated with the new address.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A licence in the new state is issued or applied for, and a recorded decision exists for the old licence."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the new state's comity requirements and review time"
                - "Submit the comity application before your start date"
                - "Decide what to do with the old state's licence"
                - "Update your address with every board and the Record"
            - name: Reinstating a lapsed or expired licence
              description: |-
                ## Purpose
                Licences lapse through missed renewals, moves abroad or illness, and reinstatement rules range from a late fee to back hours and a fresh application after a long gap. Finding out exactly what your board requires, and stopping any practice in that state until it is fixed, limits the damage. The sooner you act, the simpler it usually is.

                ## Milestones
                1. The licence's current status and the date it lapsed confirmed.
                2. The board's reinstatement requirements listed, including any back hours.
                3. Missing hours earned and logged with certificates.
                4. The reinstatement application submitted and the licence shown active again.

                ## Notes
                Stop sealing documents or using the title in that state until the board confirms the licence is active.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The licence shows active on the board's public lookup again, with every reinstatement requirement met and documented."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the licence status and lapse date on the public lookup"
                - "Read your board's reinstatement requirements"
                - "Earn and log any back hours the board requires"
                - "Submit the reinstatement application and fee"
            - name: Licensure through a career break or part-time years
              description: |-
                ## Purpose
                Parental leave, caring for a relative or part-time work can stretch the experience count and the renewal cycle, and boards differ on how part-time months count. Recording part-time periods accurately and planning renewal hours around a break keeps you on course without overstating anything. Placing a licence inactive during a long break can save fees, if reactivation is straightforward.

                ## Milestones
                1. Part-time periods recorded with the hours or share of full time worked.
                2. Your board's rule on crediting part-time experience confirmed.
                3. Renewal hours planned around the break, including online options.
                4. A decision made on active or inactive status for the break.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Part-time experience is recorded at the share your board credits, and a status decision for the break is written down."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Record each part-time period with the share of full time worked"
                - "Check how your board credits part-time experience"
                - "Find online renewal hour options you can do during the break"
                - "Decide whether to keep the licence active during the break"
            - name: Structural engineer licence where states require it
              description: |-
                ## Purpose
                Only a few states require a separate structural engineer licence for significant structures, with its own exam and longer experience, on top of or instead of the PE. Structural engineers working on hospitals, schools or tall buildings in those states need to know whether a PE alone lets them seal the work. Mapping the SE rules in the states you work in shows whether this is your next licence.

                ## Milestones
                1. States you work in that require or recognise a separate SE licence listed.
                2. The structures each state reserves for SE licensees noted.
                3. The experience and exam requirements for the SE licence compared with your record.
                4. A decision recorded on whether and when to pursue the SE licence.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written note states which of your states require an SE licence for your work and your decision on pursuing it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which of your states have a separate SE licence"
                - "Note the structure types each state reserves for SE licensees"
                - "Compare SE experience requirements with your own record"
                - "Record your decision and target date for the SE licence"
            - name: Firm certificate of authorisation for your own practice
              description: |-
                ## Purpose
                Starting your own engineering practice often requires the firm itself to be registered with each board, usually with a licensed engineer named in responsible charge, and the firm's name may be restricted. Registering the firm before offering services keeps proposals, contracts and sealed documents lawful. Each state's firm registration has its own renewal date, separate from your personal licence.

                ## Milestones
                1. Each state's firm registration rule and naming restrictions noted.
                2. The engineer in responsible charge named for each state.
                3. Firm registration submitted and approved in each state where you will offer services.
                4. Firm registration numbers and renewal dates added to the register.

                ## Notes
                Take legal and insurance advice on the business structure itself. This project covers only board registration.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The firm holds an approved registration in every state where it offers services, with renewal dates in the register."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read each state's firm registration and naming rules"
                - "Name the licensed engineer in responsible charge for each state"
                - "Submit the firm registration in each state you will serve"
                - "Check each firm registration's renewal date and status @recurring(yearly)"
            - name: Managing a multi-state licence portfolio
              description: |-
                ## Purpose
                Engineers on national projects can hold licences in ten or more states, each with its own renewal date, hour rules, ethics requirement and fee. Managing them as a portfolio, with a monthly look at upcoming expiries and a quarterly check of hours by state, stops one licence lapsing among many. It is also when to drop licences you no longer need.

                ## Milestones
                1. Every licence in one portfolio view with expiry, fee and hour rules.
                2. A monthly check of expiries in the next ninety days held.
                3. A quarterly check showing hours earned against each state's requirement.
                4. Licences no longer needed placed inactive or allowed to lapse by decision.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No licence in the portfolio has lapsed unintentionally in the last two years, and each held licence has a recorded reason."
                cadence: rolling
              tasks:
                - "Build a portfolio view of every licence and its rules"
                - "Check for licences expiring in the next ninety days @recurring(monthly:25)"
                - "Check hours earned against each state's requirement @recurring(quarterly)"
                - "Decide which licences you still need and why"
            - name: Serving as a reference for engineers you supervised
              description: |-
                ## Purpose
                Once licensed you will be asked to verify experience and act as a reference for engineers you have supervised, and a careful reference is part of the profession's duty to the public. Writing honestly and specifically about what you saw, and declining when you cannot, protects both the applicant and your own licence. A short personal process makes each request quick to do well.

                ## Milestones
                1. Your board's rules on acting as a reference read.
                2. A short process written for handling reference requests.
                3. Each reference you give based on work you saw yourself.
                4. A record kept of every reference given, with date and applicant.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Every reference you give is logged with date and applicant, and each one describes work you personally saw."
                cadence: rolling
              tasks:
                - "Read your board's rules on acting as a reference"
                - "Write a short process for handling reference requests"
                - "Ask each applicant for a list of the projects you saw"
                - "Log each reference you give with date and applicant"
            - name: NCEES Model Law Engineer designation and mobility
              description: |-
                ## Purpose
                Engineers who meet the NCEES model standard of an accredited degree, the FE, the PE and verified experience can apply for the Model Law Engineer designation, which some boards treat as a faster comity route. International registers and mobility agreements exist too, with rules that change. Checking whether you qualify and what it would save you is worth an evening if you expect to license in several places.

                ## Milestones
                1. The current Model Law Engineer criteria read on the NCEES site.
                2. Your record checked against each criterion.
                3. The boards that treat the designation as a faster route listed.
                4. A decision recorded on applying for the designation or any international register.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision note states whether you meet the Model Law Engineer criteria and whether you will apply, with the boards it would help."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the current Model Law Engineer criteria"
                - "Check your record against each criterion"
                - "List the boards that give the designation a faster route"
                - "Record your decision on applying"
---

# Professional Engineer Licence Application

This area is for the engineer who has passed or is about to pass the PE exam and now has to turn that result into a licence: choosing the state board, reading its rules, and assembling transcripts, experience records and references that a reviewer can approve without a deficiency letter. It runs from foundations (the board, the NCEES Record, the experience count) through the machinery that keeps an application moving, the skills of writing experience a board accepts, the decisions about references and disclosures, the submission and board review, situations such as foreign degrees, Caribbean-based applicants, lapsed licences and moving states, and finally the specialist work of SE licensure, firm authorisation and a multi-state portfolio.

What repeats is small but unforgiving: a monthly evidence filing session, a weekly status check while the board is reviewing, quarterly reference check-ins, monthly renewal hour logging, and a yearly pass over every licence expiry, NCEES Record update and board rule change. The Operational checklist template suits the submission, Person suits each reference, Compliance control suits each renewal and Development plan suits the renewal hour plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
