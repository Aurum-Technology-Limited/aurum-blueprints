---
id: practice-ownership.practice-regulator-compliance
name: Practice Regulator Compliance
description: "A map of every regulator duty the practice carries, registration and annual returns filed on time, an evidence library inspectors can test, and a calm routine for inspections, findings and notifiable changes."
category: business
version: 1.0.0
tags: [practice-ownership, practice-regulator-compliance, small-business, regulator, inspections, annual-returns, registration, compliance-records]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - compliance-control
    - meeting-notes
    - operational-checklist
    - purchase-decision
    - remediation-plan
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Practice Regulator Compliance
          description: "Meeting your professional regulator's rules as an owner: practice registration, inspections, annual returns, standards for premises and staff, and compliance records."
          projects:
            - name: Regulator map for the practice
              description: |-
                ## Purpose
                Most owners can name the body that registers them as a professional, but fewer know which bodies regulate the practice itself: the entity, the premises, the services, the data and the staff. A one-page map of every regulator, what each one registers and what each one expects from you as owner is the base every other project in this area builds on.

                ## Milestones
                1. Every body with authority over the practice listed, separating individual professional registration from practice, premises and entity registration.
                2. For each body, the registration number, the registered name and the named contact at the practice recorded.
                3. The main duties each body places on the owner summarised in one line each.
                4. The map saved at the front of the compliance records folder and dated.

                ## Notes
                Rules differ by country and profession. Where you are unsure whether a body regulates the practice or only its people, ask the body directly in writing and file the reply.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated one-page map lists every regulator of the practice with registration numbers and the owner's duties to each."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every regulator, licensing body and registrar you have heard from in the last two years"
                - "Check each body's website for whether it registers practices, premises or only individuals"
                - "Record each registration number exactly as it appears on the certificate"
                - "Write a one-line summary of what each body expects from the owner"
            - name: Practice registration certificate check
              description: |-
                ## Purpose
                A registration that lists an old address, a former partner or the wrong trading name is a finding waiting to happen, and in some professions practising from unregistered premises is itself a breach. Checking the current certificate line by line against reality, and correcting anything that has drifted, closes the easiest gap an inspector can find.

                ## Milestones
                1. The current practice registration certificate located and a copy filed.
                2. Registered name, address, owners, services and expiry compared with how the practice actually runs.
                3. Every mismatch either corrected with the regulator or explained in a file note.
                4. The certificate displayed where the regulator requires it to be shown.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The practice registration matches the real name, address, owners and services, with any correction request filed with the regulator."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the current registration certificate and scan a copy into the records folder"
                - "Compare every field on the certificate with the practice as it runs today"
                - "Send the regulator a correction request for any detail that has changed"
                - "Recheck the certificate details against the practice before each renewal @recurring(yearly)"
            - name: Named responsible people register
              description: |-
                ## Purpose
                Each regulator usually wants a named person for each duty: the registered manager, the superintendent, the compliance partner, the data protection lead or the money laundering officer. When nobody knows who holds which role, letters go unanswered and duties fall between partners. A short register of who is accountable for what, with a deputy for each, makes the practice answerable on any day.

                ## Milestones
                1. Every role the regulators require identified from the regulator map.
                2. One named holder and one deputy recorded for each role.
                3. Each holder has confirmed in writing that they accept the role and know its duties.
                4. The regulator notified of any named role it keeps on its own record.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A register names a holder and a deputy for every regulator-required role, each signed as accepted, with regulator records matching."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Pull every required named role out of the regulator map"
                - "Agree a holder and a deputy for each role at the next partners' meeting"
                - "Ask each holder to sign a one-paragraph role acceptance"
                - "Check the regulator's online record shows the right names"
            - name: Compliance calendar of regulator deadlines
              description: |-
                ## Purpose
                Annual returns, registration renewals, fee payments, insurance certificates and statutory notifications each have their own date, and missing one can mean a late fee, a lapsed registration or a referral. One calendar holding every regulator deadline, with an owner and a lead time for each, turns a scatter of letters into a predictable year.

                ## Milestones
                1. Every recurring regulator deadline for the next twelve months entered with its source.
                2. Each deadline has a named owner and a start date set far enough ahead to gather evidence.
                3. The calendar shared with the practice manager and every named responsible person.
                4. A monthly look-ahead routine running, with the next ninety days reviewed each time.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A shared calendar holds every regulator deadline for twelve months, each with an owner and a start date, reviewed monthly."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Collect every regulator letter, renewal notice and fee demand from the past year"
                - "Enter each deadline with its owner and a start date four to eight weeks earlier"
                - "Share the calendar with the practice manager and the named responsible people"
                - "Review the next ninety days of regulator deadlines @recurring(monthly:3)"
            - name: Reading the regulator's practice standards in full
              description: |-
                ## Purpose
                Owners often know the rules as folklore passed on by the previous principal, which leaves them defending habits rather than meeting standards. Reading the current published standards and guidance for practices, start to finish, and noting what each one asks of the owner is a weekend that pays back at every inspection.

                ## Milestones
                1. The current version of the practice standards and any supporting guidance downloaded and dated.
                2. Each standard read and summarised in one plain sentence.
                3. Every standard where the practice is unsure of its position flagged for the baseline review.
                4. A list of questions for the regulator or a compliance adviser written down.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-sentence summary exists for every current practice standard, with uncertain ones flagged for review."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Download the current practice standards and note the version date"
                - "Read one section a week and summarise each standard in a sentence"
                - "Flag the standards where you cannot say how the practice meets them"
                - "Ask the agent to turn your summaries into a one-page standards checklist"
            - name: Compliance evidence library
              description: |-
                ## Purpose
                When an inspector asks to see proof, the answer is often in someone's inbox, a drawer and a former manager's laptop. A single, well-named folder structure that mirrors the regulator's standards, with one place for each kind of evidence, means any document can be produced in minutes and nothing walks out of the door with a leaver.

                ## Milestones
                1. A folder structure set up that follows the headings of the regulator's standards.
                2. Existing certificates, policies, logs and correspondence moved into the right folders.
                3. A naming rule for files agreed and written at the top of the library.
                4. Access limited to the people who need it, with a backup confirmed.

                ## Notes
                Keep the library on the practice's own systems, not a personal drive. Records with patient or client data belong in the records system, with only a reference in the library.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One shared library, organised by regulator standard and backed up, holds all current compliance evidence with a written naming rule."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Create top-level folders that match the headings of the practice standards"
                - "Gather certificates and policies from inboxes, drawers and old drives"
                - "Write a file naming rule and put it in a readme at the top of the library"
                - "Confirm the library is included in the practice's backup"
            - name: Staffing standards and scope of practice check
              description: |-
                ## Purpose
                Professional rules set standards for who may do what in a practice: which tasks need a registered professional, what supervision unregistered staff need, and what ratios or qualifications apply. Mapping every role against those rules shows whether the rota is compliant on an ordinary Tuesday, not only on the day an inspector visits.

                ## Milestones
                1. Every role in the practice listed with the tasks it actually performs.
                2. Each task checked against the regulator's rules on registration, supervision and scope.
                3. Any role working outside its permitted scope changed or supervised properly.
                4. A quarterly check of the rota against the staffing rules in place.

                ## Notes
                Individual licence renewals and CPD hours sit in their own area. This project is about whether the practice is staffed the way its regulator requires.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A role-by-task map shows every task matched to a permitted role and supervision level, with gaps closed and a quarterly check scheduled."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "List every role and the tasks each one really does in a normal week"
                - "Mark each task that the regulator reserves for registered professionals"
                - "Change the rota or add supervision where a task sits outside its permitted role"
                - "Compare the current rota with the staffing rules @recurring(quarterly)"
            - name: Baseline self-assessment against the standards
              description: |-
                ## Purpose
                Before you can plan, you need an honest picture of where the practice meets the standards, partly meets them or has no evidence at all. Scoring every standard once, with the evidence you would show, produces a ranked gap list and tells you which three fixes matter most this quarter.

                ## Milestones
                1. Every standard scored as met, partly met or not met, with the evidence named.
                2. Each gap described in one sentence with the risk if an inspector found it.
                3. Gaps ranked by consequence and effort, with the top three chosen for this quarter.
                4. The self-assessment dated and filed so the next one can show progress.

                ## Notes
                Start from the **Risk register** template to rank the gaps. Score against what you could prove today, not what you intend to do.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated self-assessment scores every standard with named evidence and ranks the gaps, with three chosen for action this quarter."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Copy the list of standards into a scoring sheet with columns for evidence and risk"
                - "Score each standard on what you could show an inspector today"
                - "Rank the gaps by consequence and by effort to close"
                - "Choose the three gaps to close this quarter and give each an owner"
            - name: Notifiable changes procedure
              description: |-
                ## Purpose
                Many regulators expect to be told within a set number of days when the practice changes owner, moves, adds a director, changes its name, stops a service or loses its registered manager. Owners usually find out the rule after the deadline. A written list of notifiable events, each with its time limit and form, keeps the practice ahead of the paperwork.

                ## Milestones
                1. Every notifiable event and its time limit listed from each regulator's rules.
                2. The form or portal route for each notification recorded.
                3. The partners and the practice manager briefed on what triggers a notification.
                4. A quarterly prompt in place asking whether anything notifiable has happened.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A written list gives every notifiable event, its time limit and its form, with a quarterly check that nothing has been missed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Search each regulator's rules for events that must be notified and their time limits"
                - "Record the form or portal page for each kind of notification"
                - "Brief the partners on the list at the next meeting"
                - "Ask the partners whether anything notifiable has changed @recurring(quarterly)"
            - name: Monthly compliance evidence round
              description: |-
                ## Purpose
                Evidence goes stale quietly: a log stops being filled in, a certificate expires, a check is done but not recorded. A short monthly round through the evidence library, checking that each recurring record is current, catches the drift while it is still a five-minute fix rather than a finding.

                ## Milestones
                1. A list of every recurring record the standards require, with how often each should be updated.
                2. A monthly round completed and the result noted, record by record.
                3. Any stale or missing record given an owner and a date to put right.
                4. Three months of completed rounds on file as evidence of oversight.

                ## Notes
                Start from the **Compliance control** template so each round is recorded the same way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed evidence round is on file for each of the last three months, with stale records assigned and dated."
                cadence: rolling
              tasks:
                - "List every recurring record and how often the standards expect it updated"
                - "Walk through the evidence library and mark each record current or stale @recurring(monthly:12)"
                - "Assign an owner and a fix date to every stale record"
                - "File the completed round in the oversight folder"
            - name: Annual return preparation cycle
              description: |-
                ## Purpose
                The annual return asks for staff numbers, services, incidents, complaints, insurance and declarations that the owner signs personally, and a rushed return with a wrong figure can be treated as a false declaration. Gathering the figures through the year and drafting the return early makes the signature an informed one.

                ## Milestones
                1. Last year's return and the regulator's current form saved side by side.
                2. Each figure the return asks for given a source and a person who supplies it.
                3. A draft completed at least three weeks before the deadline and checked by a second partner.
                4. The return filed, the confirmation saved and any fee paid.
              priority: high
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "The annual return is filed before its deadline with a second-partner check, confirmation receipt and paid fee on file."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Save last year's return and the current form in the returns folder"
                - "Note the source and supplier for every figure the return asks for"
                - "Ask a second partner to check the draft against the evidence"
                - "Start gathering figures for the annual return @recurring(yearly)"
            - name: Registration renewal and fee cycle
              description: |-
                ## Purpose
                Practice registrations, premises licences and service authorisations often renew on different dates with different fees, and a lapse can mean the practice is technically unregistered until it is fixed. Running renewals as one yearly cycle, with budgeted fees and proof of payment filed, removes the scramble.

                ## Milestones
                1. Every practice-level registration and licence listed with its renewal date and fee.
                2. Fees included in the practice budget for the year.
                3. Each renewal submitted before its due date with proof of payment saved.
                4. New certificates filed and displayed, and old ones archived.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every practice registration renewed before expiry this year, with payment proof and new certificates filed."
                cadence: cyclic
              tasks:
                - "List each practice registration and licence with its renewal date and fee"
                - "Add the year's renewal fees to the practice budget"
                - "Confirm every practice registration renewal is submitted and paid @recurring(yearly)"
                - "File each new certificate and archive the one it replaces"
            - name: Regulator correspondence log
              description: |-
                ## Purpose
                Letters from a regulator arrive by post, email and portal message, sometimes to a partner who has since left. A single log of every item received and sent, with the date, the deadline and the reply, protects the practice when a regulator later says a request went unanswered.

                ## Milestones
                1. A log set up with date, sender, subject, deadline, owner and reply columns.
                2. Every regulator item from the past two years entered.
                3. All partners asked to forward regulator mail to one address.
                4. A weekly check filing new items running for a full quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A log holds every regulator item from the past two years and is updated weekly, with each deadline matched to a reply."
                cadence: rolling
              tasks:
                - "Set up a correspondence log with deadline and reply columns"
                - "Enter the regulator letters and emails from the past two years"
                - "Ask every partner to forward regulator mail to one shared address"
                - "File any new regulator letters and portal messages in the log @recurring(weekly:fri)"
            - name: Rule change and regulator bulletin watch
              description: |-
                ## Purpose
                Standards are revised, consultations close and new guidance quietly changes what inspectors look for. Owners who read the regulator's bulletin once a month and note what affects them are rarely surprised by a new requirement at inspection.

                ## Milestones
                1. The practice subscribed to every regulator's bulletin or news feed.
                2. A monthly note recording each change and whether it affects the practice.
                3. Any change that does affect the practice turned into an action with an owner.
                4. Open consultations that matter to the practice answered or passed to the professional association.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A monthly change note exists for the last six months, with every relevant change linked to an action."
                cadence: rolling
              tasks:
                - "Subscribe to each regulator's bulletin with the shared compliance address"
                - "Read the bulletins and note any change that affects the practice @recurring(monthly:20)"
                - "Turn each relevant change into an action with an owner"
                - "Respond to any open consultation that changes how the practice works"
            - name: Quarterly compliance meeting of the owners
              description: |-
                ## Purpose
                Compliance drifts when it is only discussed after a problem. A forty-five minute meeting each quarter, with the gap list, the actions tracker, upcoming deadlines and any regulator letters on one agenda, gives the owners shared oversight and a record that they exercised it.

                ## Milestones
                1. A standing agenda agreed covering gaps, actions, deadlines, incidents and correspondence.
                2. The first meeting held and minuted with decisions and owners.
                3. Minutes filed in the evidence library within a week of each meeting.
                4. Four meetings held in the year with actions carried forward and closed.

                ## Notes
                Start from the **Meeting notes** template. Minutes are evidence of governance, so record decisions, not discussion.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly compliance meetings held in twelve months, each minuted with decisions and named owners."
                cadence: rolling
              tasks:
                - "Draft a standing agenda for the compliance meeting"
                - "Book the first meeting with all owners and the practice manager"
                - "Hold the quarterly compliance meeting and minute the decisions @recurring(quarterly)"
                - "File the minutes in the evidence library within a week"
            - name: Monthly premises standards walk-round
              description: |-
                ## Purpose
                Inspectors notice what staff stop seeing: a certificate not on display, a blocked fire exit, a consultation room where conversations carry, a missing accessibility notice. A twenty-minute monthly walk-round with a checklist built from the regulator's premises standards keeps the building fit for registration between visits.

                ## Milestones
                1. A walk-round checklist written from the regulator's premises and display rules.
                2. The first walk-round done and every failed item recorded with a photo.
                3. Failed items fixed or logged as actions with owners.
                4. Twelve months of completed walk-round sheets on file.

                ## Notes
                Start from the **Operational checklist** template. Rotate who does the walk-round so fresh eyes see the building.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A completed premises walk-round sheet is on file for each month, with failed items fixed or logged as actions."
                cadence: rolling
              tasks:
                - "Turn the regulator's premises standards into a one-page checklist"
                - "Walk the premises with the checklist and photograph any failed item @recurring(monthly:5)"
                - "Log each failed item as an action with an owner"
                - "Rotate the walk-round between staff members each month"
            - name: Policy and procedure review rota
              description: |-
                ## Purpose
                Out-of-date policies tell an inspector that nobody is looking. Putting every regulator-required policy on a review rota, with a version number, an owner and a review date, spreads the work across the year and keeps each document honest about how the practice works now.

                ## Milestones
                1. Every policy the regulators require listed with its owner, version and last review date.
                2. Reviews spread across twelve months so a few are due each month.
                3. Each reviewed policy carries a new version number, date and summary of changes.
                4. Staff told when a policy changes in a way that affects their work.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every required policy has a named owner and a review date within the last twelve months, with version history recorded."
                cadence: cyclic
              tasks:
                - "List every required policy with owner, version and last review date"
                - "Spread the reviews so a few policies are due in each month"
                - "Review the policies due this month and update their version notes @recurring(monthly:25)"
                - "Tell staff about any change that alters their daily work"
            - name: Inspection readiness pack
              description: |-
                ## Purpose
                Most inspections open with the same requests: registration, named people, policies, staff list, training records, incidents and complaints. A ready pack holding the current version of each, refreshed every quarter, means the first hour of an inspection shows organisation rather than searching.

                ## Milestones
                1. A list of the documents inspectors usually request, from the regulator's guidance and past visits.
                2. Each document placed in a single readiness folder, current version only.
                3. A printed copy of the index kept where the person in charge can find it.
                4. A quarterly refresh replacing anything out of date.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A readiness folder holds the current version of every commonly requested document, refreshed in the last quarter."
                cadence: rolling
              tasks:
                - "List the documents inspectors usually ask for in the first hour"
                - "Copy the current version of each into a single readiness folder"
                - "Print the folder index and keep it at reception or the manager's desk"
                - "Replace anything out of date in the readiness pack @recurring(quarterly)"
            - name: Compliance actions tracker
              description: |-
                ## Purpose
                Gaps from self-assessments, walk-rounds, rule changes and inspections all produce actions, and actions spread across emails get lost. One tracker with every open action, its owner, its due date and the evidence that closes it, looked at weekly, is what turns findings into fixes.

                ## Milestones
                1. A tracker set up with source, action, owner, due date and closing evidence columns.
                2. Every open action from existing reviews entered.
                3. A weekly look at overdue items running, with owners chased.
                4. No action closed without the evidence that proves it attached.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A single tracker holds every open compliance action with owner and due date, reviewed weekly, with closing evidence attached."
                cadence: rolling
              tasks:
                - "Set up the tracker with a column for the evidence that closes each action"
                - "Move every open action from earlier reviews into the tracker"
                - "Check overdue compliance actions and chase their owners @recurring(weekly:mon)"
                - "Attach the closing evidence before marking any action done"
            - name: Staff compliance induction and yearly sign-off
              description: |-
                ## Purpose
                Inspectors often ask a receptionist or a junior professional how a procedure works, and the answer has to match the policy. A short compliance induction for every new starter, and a yearly sign-off for everyone that they have read the key policies, gives staff the answers and the practice the record.

                ## Milestones
                1. A list of the policies every staff member must read, by role.
                2. A one-hour induction session written and given to every new starter in their first week.
                3. A signed record for each staff member showing which policies they read and when.
                4. A yearly sign-off completed by the whole team.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every current staff member has a signed policy read record dated within the last twelve months."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "List the policies each role must read"
                - "Write a one-hour compliance induction for new starters"
                - "Collect a signed read record from every staff member"
                - "Run the whole-team yearly policy sign-off @recurring(yearly)"
            - name: How your regulator inspects and rates practices
              description: |-
                ## Purpose
                Regulators publish their inspection method: what triggers a visit, how long it lasts, who they speak to, how evidence is weighed and how ratings or outcomes are decided. Owners who have read the method prepare for what will really happen instead of for an imagined audit.

                ## Milestones
                1. The regulator's published inspection framework or methodology read.
                2. A one-page summary of the visit stages, from notice to final report.
                3. The rating scale or outcome categories understood, with what separates each level.
                4. Two published inspection reports of similar practices read for how evidence is described.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the regulator's inspection stages and rating levels is filed, based on the published method and two real reports."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Find the regulator's published inspection framework or method statement"
                - "Summarise the stages of a visit on one page"
                - "Note what separates each rating or outcome level"
                - "Read two published reports on practices like yours"
            - name: Writing policies an inspector can test
              description: |-
                ## Purpose
                Policies copied from a template often describe a practice that does not exist, and inspectors test them by asking staff and checking records. A policy that says who does what, how often and where the record is kept can be followed, audited and defended.

                ## Milestones
                1. One existing policy rewritten so each step names a role, a frequency and a record.
                2. Generic wording that does not match the practice removed.
                3. The rewritten policy tested by asking two staff members how they follow it.
                4. A short house style for policies written for whoever drafts the next one.

                ## Notes
                A policy you do not follow is worse than none, because it proves you knew the standard and did not meet it.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One policy is rewritten to name roles, frequencies and records, tested with two staff, and a house style note filed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Pick the policy that staff say least matches how they work"
                - "Rewrite each step to name a role, a frequency and where the record lives"
                - "Ask two staff members to walk you through the rewritten policy"
                - "Write a half-page house style for future policies"
            - name: What counts as evidence of a standard
              description: |-
                ## Purpose
                Saying the practice does something is not the same as showing it. Learning the difference between a policy, a record, an observation and a staff account, and which of these regulators give most weight, changes how every log, form and minute in the practice is kept.

                ## Milestones
                1. The kinds of evidence the regulator recognises listed with an example of each from the practice.
                2. Three standards checked for whether the practice has more than one kind of evidence for each.
                3. One record changed so it captures the date, the person and the outcome.
                4. A short note for staff on what makes a good record.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A note listing evidence types with practice examples is filed, and at least one record format changed to capture date, person and outcome."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Read the regulator's guidance on the evidence it looks for"
                - "Find one example of each kind of evidence in your own records"
                - "Change one weak record so it captures date, person and outcome"
                - "Ask the agent to draft a short staff note on what makes a good record"
            - name: Learning from published inspection reports and decisions
              description: |-
                ## Purpose
                Regulators often publish inspection reports, enforcement notices and conduct decisions, and each one shows what went wrong somewhere else. Reading one or two a month that concern practices like yours is the cheapest early warning available.

                ## Milestones
                1. The regulator's published reports and decisions page bookmarked.
                2. A monthly note of one or two cases with the failing and the lesson.
                3. Any lesson that applies to the practice added to the actions tracker.
                4. A yearly summary of recurring themes shared with the owners.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Twelve monthly case notes are on file for the year, with applicable lessons linked to actions and a yearly theme summary shared."
                cadence: rolling
              tasks:
                - "Bookmark the regulator's page of published reports and decisions"
                - "Read one or two cases about similar practices and note the lesson @recurring(monthly:15)"
                - "Add any lesson that applies to the practice to the actions tracker"
                - "Write a yearly summary of the themes for the owners"
            - name: Root cause review of a compliance breach
              description: |-
                ## Purpose
                When a renewal lapses or a required record goes missing, the instinct is to fix the item and move on, and it happens again a year later. A short root cause review asks why the system allowed it, and changes the system rather than blaming the person nearest to it.

                ## Milestones
                1. The breach described factually with dates and what was missed.
                2. The chain of causes traced back to a process, tool or role gap.
                3. One change made to the process that prevents a repeat.
                4. The review filed with the change and the date it was checked.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written root cause review of one breach is filed, naming the process change made and the date it was confirmed working."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write down what was missed, when, and how it was discovered"
                - "Ask why five times until you reach a process or role gap"
                - "Change the process so the same breach cannot recur quietly"
                - "Check three months later that the change is holding"
            - name: Owner duties under entity regulation
              description: |-
                ## Purpose
                In several professions the practice itself is regulated, and the owners or managers carry duties that are separate from their own professional conduct, such as ensuring systems, supervising others and reporting problems. Knowing which duties attach to you as owner, not as practitioner, changes what you must be able to show.

                ## Milestones
                1. The regulator's rules for practices or firms identified, separate from individual conduct rules.
                2. Each owner, manager or compliance officer duty listed in plain words.
                3. For each duty, the practice's current way of meeting it written down.
                4. Questions where the position is unclear taken to the regulator's helpline or a regulatory lawyer.

                ## Notes
                This project organises your questions. Where a duty's meaning matters to a decision, get advice from a lawyer who knows your regulator.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A plain list of owner and manager duties under the practice rules, each with how the practice meets it, is filed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Find the regulator's rules that apply to practices or firms"
                - "List each duty that falls on owners or managers in plain words"
                - "Write how the practice meets each duty today"
                - "Take unclear duties to the regulator's helpline or a regulatory lawyer"
            - name: Answering a regulator information request
              description: |-
                ## Purpose
                Regulators can ask for documents, data or explanations by a deadline, and a late, incomplete or careless reply can turn a routine query into an investigation. A simple procedure for logging, scoping, gathering, checking and sending a reply makes each request routine.

                ## Milestones
                1. A written five-step procedure for regulator requests filed.
                2. A rule agreed on who signs replies and when legal advice is taken.
                3. A standard covering letter that lists what is enclosed and what is not.
                4. The procedure used on the next request, with the reply and enclosures kept.

                ## Notes
                Send only what is asked for, check the request's legal basis if it involves confidential patient or client data, and keep an exact copy of what was sent.
              priority: medium
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "A written request procedure and covering letter exist, and the next regulator request is answered on time with a copy of everything sent."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write the five steps for handling a regulator request"
                - "Agree who signs replies and when to call a lawyer"
                - "Draft a covering letter that lists the enclosures"
                - "Keep an exact copy of every reply and enclosure sent"
            - name: Compliance software or spreadsheet decision
              description: |-
                ## Purpose
                Small practices often buy compliance software they never set up, or run everything from a spreadsheet nobody else understands. Comparing two or three dedicated tools against a well-built shared spreadsheet, on cost, reminders, evidence storage and handover, leads to a choice that fits the practice's size.

                ## Milestones
                1. Requirements written: reminders, evidence storage, action tracking, access and cost.
                2. Two or three tools and a spreadsheet option scored against the same criteria.
                3. A decision recorded with the reasons and the yearly cost.
                4. The chosen option set up with the calendar, tracker and library in it.

                ## Notes
                Start from the **Purchase decision** template. Ask any vendor for a reference practice of your size in your profession.
              priority: low
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two tools with a spreadsheet option on the same criteria, with the chosen option in use."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write the five things the compliance system must do"
                - "Shortlist two tools built for your profession"
                - "Score the tools and a shared spreadsheet against the same criteria"
                - "Record the decision and the yearly cost"
            - name: Deciding on an external mock inspection
              description: |-
                ## Purpose
                An outside compliance adviser can run a mock inspection and find what familiarity hides, but the fee only pays off if the practice acts on the report. Weighing cost, the adviser's experience with your regulator and the timing against your own internal mock gives a clear yes or no.

                ## Milestones
                1. Two advisers with experience of your regulator asked for scope and fees.
                2. Their offers compared with the cost and value of an internal mock day.
                3. A decision recorded with the reason and the budget.
                4. If going ahead, a date booked that leaves time to fix findings before the real visit.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A decision on an external mock inspection is recorded with two adviser quotes compared and, if agreed, a booked date."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your professional association for advisers who know your regulator"
                - "Request scope and fees from two advisers"
                - "Compare their offers with running an internal mock day"
                - "Record the decision and, if yes, book a date"
            - name: Appointing a compliance lead
              description: |-
                ## Purpose
                In many practices compliance belongs to every partner and therefore to nobody. Naming one compliance lead, with protected hours, a written remit and the authority to chase partners, gives the regulator a single contact and gives the work a home.

                ## Milestones
                1. A one-page remit written: duties, hours, authority and reporting line.
                2. A partner, manager or senior staff member appointed with the owners' agreement.
                3. Protected hours for the role built into the rota.
                4. The appointment announced to staff and recorded in the named people register.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A compliance lead is appointed with a written remit and protected hours, recorded in the named responsible people register."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page remit for the compliance lead"
                - "Agree the appointment at a partners' meeting"
                - "Block the lead's protected hours in the rota"
                - "Announce the role to staff and update the named people register"
            - name: Regulator approval for a change of ownership or structure
              description: |-
                ## Purpose
                Turning a partnership into a company, bringing in an outside investor or adding a new owner can require the regulator's approval before it happens, not a notification afterwards. Building the regulator steps into the plan early stops a restructuring from leaving the practice unregistered or in breach.

                ## Milestones
                1. The regulator's rules on ownership, control and entity type checked for the planned change.
                2. Whether prior approval, a new registration or a notification is needed confirmed in writing.
                3. The application or notification prepared and its timetable built into the change plan.
                4. Approval or acknowledgement received before the change takes effect.

                ## Notes
                The agreement between owners is drafted elsewhere. This project only covers what the regulator must see, approve or be told.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The regulator's written approval or acknowledgement of the ownership or structure change is filed before the change takes effect."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Read the regulator's rules on who may own or control a practice"
                - "Ask the regulator in writing whether the planned change needs prior approval"
                - "Add the regulator's timetable to the restructuring plan"
                - "File the approval before signing the change"
            - name: Registering a new regulated service
              description: |-
                ## Purpose
                Adding a procedure, a new kind of client work or a service at a new location may need its own registration, authorisation or variation of conditions. Practices that start first and ask later can be told to stop. Checking, applying and waiting for approval before the launch date protects both the service and the registration.

                ## Milestones
                1. The new service described in the regulator's own terms.
                2. Whether it needs a new registration, a variation or nothing confirmed with the regulator.
                3. Any application submitted with the required policies, staffing and premises evidence.
                4. The launch date set only after approval is received.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "The regulator's written confirmation that the new service is covered is filed before the first client or patient is seen."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Describe the new service using the regulator's categories"
                - "Ask the regulator whether a new registration or a variation is needed"
                - "Prepare the evidence the application asks for"
                - "Hold the launch date until written approval arrives"
            - name: Standard forms that cut compliance admin
              description: |-
                ## Purpose
                The same information is typed again and again into returns, notifications, insurance forms and inspection packs. A small set of standard documents kept current, such as the practice fact sheet, staff list, services list and named people register, makes every form a copy and paste job and keeps the answers consistent.

                ## Milestones
                1. The five facts regulators ask for most often identified from past forms.
                2. A standard document created for each and saved in the evidence library.
                3. Each standard document given an owner and an update trigger.
                4. The next return or notification completed from the standard documents.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least five standard compliance documents exist with owners and update triggers, and the next filing was completed from them."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Go through past regulator forms and list the questions that repeat"
                - "Create a standard document for each repeated set of facts"
                - "Give each document an owner and an update trigger"
                - "Complete the next filing from the standard documents"
            - name: Deciding whether to self-report a breach
              description: |-
                ## Purpose
                Some regulators expect owners to report serious breaches promptly, and treat a breach the practice knew about and hid far more harshly than one it reported. A written route for deciding whether and when to self-report, with advice taken where the stakes are high, avoids decisions made in a panic.

                ## Milestones
                1. The regulator's rules on self-reporting and time limits found and summarised.
                2. A short decision route written: facts, rule, advice, decision, record.
                3. The person who decides and the adviser who is called named in advance.
                4. Every self-report decision, either way, recorded with its reasons.

                ## Notes
                Whether a particular event must be reported is a legal judgement. Take advice from a regulatory lawyer or your indemnity insurer's helpline before deciding.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written self-report decision route names the decider and adviser, and any decision taken is recorded with reasons."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find what the regulator says about self-reporting and time limits"
                - "Write a five-step decision route on one page"
                - "Name the decider and the adviser to call"
                - "Set up a confidential file for self-report decisions"
            - name: Preparing for a scheduled regulator inspection
              description: |-
                ## Purpose
                Notice of an inspection usually gives a few weeks, and those weeks decide the outcome more than the day itself. A dated plan covering the information requested in advance, the readiness pack, staff briefings, the premises and who will meet the inspector turns notice into preparation rather than alarm.

                ## Milestones
                1. The notice read and every pre-visit information request listed with its deadline.
                2. Pre-visit information sent on time with a copy kept.
                3. Staff briefed on what to expect and who will lead the visit.
                4. Premises, readiness pack and evidence library checked the week before.
                5. A room, a contact person and access to records arranged for the day.

                ## Notes
                Do not create or backdate records to fill gaps. Show the gap and the plan to close it.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "All pre-visit information is sent by its deadline, staff are briefed, and the inspection takes place with a named lead and prepared room."
                cadence: one-shot
                effort_hours_estimate: "16"
              tasks:
                - "List every item the inspection notice asks for and its deadline @priority(high)"
                - "Send the pre-visit information and keep a copy"
                - "Brief all staff on the day, the lead and how to answer questions"
                - "Check the premises and readiness pack the week before"
            - name: Unannounced inspection protocol
              description: |-
                ## Purpose
                Some regulators arrive without notice, often when the owner is away or the practice is busiest. A one-page protocol telling whoever is at reception what to do, who to call, which room to offer and where the readiness pack is keeps the visit orderly and courteous without anyone improvising.

                ## Milestones
                1. A one-page protocol written covering greeting, identity check, calls and access.
                2. A call list naming the owner, the compliance lead and a deputy.
                3. The protocol kept at reception and covered in induction.
                4. A short practice drill run with reception staff.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A one-page unannounced visit protocol and call list sit at reception, and reception staff have practised it at least once."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-page protocol for an unannounced inspector"
                - "Put the call list with three names at the top"
                - "Keep a copy at reception and add it to induction"
                - "Run a ten-minute drill with reception staff"
            - name: Checking the draft inspection report
              description: |-
                ## Purpose
                Many regulators send a draft report and allow a short window to correct factual errors. Owners who miss the window, or argue opinion rather than fact, live with a published report that may be wrong. A careful line-by-line check with evidence for each correction is the last chance to get the record right.

                ## Milestones
                1. The deadline for factual accuracy comments noted on receipt.
                2. Every statement in the draft checked against the practice's records.
                3. Factual errors listed with evidence attached, separate from points of disagreement.
                4. Comments sent before the deadline and the regulator's response filed.

                ## Notes
                Keep comments to facts with evidence. Disagreement with a judgement usually goes through a separate challenge or review route, if your regulator has one.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "Factual accuracy comments with evidence are submitted before the draft report deadline and the response is filed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Note the factual accuracy deadline the day the draft arrives @priority(high)"
                - "Check each statement in the draft against your records"
                - "List factual errors with evidence, apart from points of opinion"
                - "Send the comments and file the regulator's reply"
            - name: Inspection findings action plan
              description: |-
                ## Purpose
                Findings from an inspection usually come with a deadline for an action plan, and the regulator will check it at the next visit. A plan that names each finding, the root cause, the fix, the owner, the date and the evidence that proves it is closed shows the regulator a practice that learns.

                ## Milestones
                1. Every finding listed in the regulator's own wording.
                2. Each finding given a root cause, a fix, an owner, a date and closing evidence.
                3. The action plan sent to the regulator by its deadline, if one is required.
                4. Progress reviewed monthly until every action is closed with evidence.

                ## Notes
                Start from the **Remediation plan** template. Fix the system behind each finding, not only the item the inspector saw.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "An action plan covering every finding with owner, date and closing evidence is submitted on time, with all actions closed by their dates."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Copy each finding into the plan in the regulator's own words"
                - "Agree a root cause, owner and date for each finding"
                - "Ask the agent to draft the covering letter for the action plan"
                - "Send the plan to the regulator before its deadline"
            - name: First annual return for a new practice
              description: |-
                ## Purpose
                New practices often have no previous return to copy, no history of figures and a registration that may have been granted with conditions. Working out early what the first return will ask and collecting the data from day one avoids reconstructing a year of facts in a week.

                ## Milestones
                1. The return form and guidance obtained in the first quarter of trading.
                2. A simple record started for every figure the return will ask for.
                3. Any registration conditions checked for reporting requirements of their own.
                4. The first return filed on time with a note of where each figure came from.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The practice's first annual return is filed before its deadline with a source note for each figure."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Download the annual return form and guidance"
                - "Start a record for each figure the return will ask for"
                - "Check the registration conditions for extra reporting duties"
                - "File the return with a note of each figure's source"
            - name: Internal mock inspection day
              description: |-
                ## Purpose
                Running a half-day mock, led by a partner from another site, a trusted peer or the compliance lead, using the regulator's own method, shows staff what an inspection feels like and surfaces gaps while there is time to fix them. Most practices find more in a mock than in a year of self-assessment.

                ## Milestones
                1. A mock inspector chosen who does not run the area being tested.
                2. A plan for the half day based on the regulator's published method.
                3. The mock held, with staff interviews, a records sample and a walk-round.
                4. Findings written up and added to the actions tracker within a week.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A mock inspection is held using the regulator's method, with written findings added to the tracker within a week."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Choose a mock inspector from outside the area being tested"
                - "Plan the half day around the regulator's published method"
                - "Hold the mock with interviews, a records sample and a walk-round"
                - "Add the findings to the compliance actions tracker"
            - name: Compliance routine for a sole practitioner
              description: |-
                ## Purpose
                Working alone makes you owner, professional, manager and compliance lead at once, with no partner to check the return and no cover when ill. A slimmed-down routine, one weekly half-hour, a minimal evidence set and an arrangement with a trusted peer, keeps the practice registered without eating evenings.

                ## Milestones
                1. The minimum evidence set for the practice identified from the standards.
                2. A thirty-minute weekly compliance slot protected in the diary.
                3. A peer or adviser agreed to check the annual return and act in an emergency.
                4. Three months of weekly slots kept.

                ## Notes
                Ask your professional association whether it offers templates or peer support for sole practices. Many do.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly compliance slot has been kept for three months and a named peer has agreed to check returns and cover emergencies."
                cadence: rolling
              tasks:
                - "Pick the smallest evidence set that still meets each standard"
                - "Spend thirty minutes on compliance tasks in a protected slot @recurring(weekly:wed)"
                - "Agree a reciprocal check and cover arrangement with a trusted peer"
                - "Ask your professional association for sole practice templates"
            - name: Registration handover when buying a practice
              description: |-
                ## Purpose
                Registration often does not transfer automatically with the business, and the buyer can find the seller's registration ends on completion day. Agreeing with the regulator, before completion, what must be applied for, notified or varied keeps the doors open the morning after the purchase.

                ## Milestones
                1. The regulator asked in writing how registration works on a change of owner.
                2. The seller's registration, conditions, inspection history and open actions obtained.
                3. Any new application submitted in time for completion.
                4. Confirmation that the practice is registered to the new owner filed on completion.

                ## Notes
                Ask for the last inspection report and any open regulator correspondence during due diligence. An unresolved action becomes yours.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Written confirmation that the practice is registered to the new owner from completion day is filed, with the seller's open actions known."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the regulator in writing how registration passes to a new owner"
                - "Request the seller's registration, conditions and last inspection report"
                - "Submit any new application early enough for completion"
                - "File the confirmation of registration on completion day"
            - name: Registration for each site in a multi-site practice
              description: |-
                ## Purpose
                Opening a second or third location may mean a separate registration, a separate named manager and a separate inspection, and standards can drift between sites that share a name. Treating each site as its own registered location with its own evidence, and comparing them monthly, keeps one weak site from damaging the rest.

                ## Milestones
                1. Each site's registration status and named manager confirmed with the regulator.
                2. A separate evidence folder and readiness pack for each site.
                3. A monthly comparison of each site's evidence round and open actions.
                4. Lessons from one site's inspection shared with the others within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every site has confirmed registration, a named manager and its own evidence folder, with a monthly cross-site comparison on file."
                cadence: rolling
              tasks:
                - "Confirm each site's registration and named manager with the regulator"
                - "Set up a separate evidence folder and readiness pack per site"
                - "Compare open compliance actions across the sites @recurring(monthly:18)"
                - "Share each site's inspection lessons with the other managers"
            - name: Cover when the registered manager leaves or is absent
              description: |-
                ## Purpose
                When the registered manager or superintendent leaves, falls ill or goes on long leave, many regulators require notice and an interim arrangement within a short time. A cover plan agreed in advance, with a deputy who is eligible for the role, avoids operating for weeks in breach.

                ## Milestones
                1. The regulator's rules on absence and change of registered manager summarised.
                2. An eligible deputy identified and willing to step in.
                3. Template notifications for absence and change prepared.
                4. A handover checklist for the deputy written and filed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An eligible deputy, prepared notifications and a handover checklist exist for an absent or departing registered manager."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find the regulator's rules and time limits for an absent registered manager"
                - "Agree an eligible deputy who will step in"
                - "Prepare draft notifications for absence and for a permanent change"
                - "Write a handover checklist for the deputy"
            - name: Closing or suspending a practice registration
              description: |-
                ## Purpose
                Retiring, merging, moving or pausing a practice usually means telling the regulator, cancelling or varying registrations, and arranging for records and client or patient care to continue elsewhere. Owners who simply stop trading can stay liable for fees, returns and duties. A closure plan ends the registration cleanly.

                ## Milestones
                1. The regulator's closure or suspension requirements and notice periods confirmed.
                2. A closure date set with notifications drafted for every body on the regulator map.
                3. Arrangements for records custody and continuing care or service recorded.
                4. Written confirmation of cancellation or suspension from each regulator filed.

                ## Notes
                If you are selling, the buyer's registration and your cancellation need to meet on the same day. Check the order of steps with the regulator.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every regulator has confirmed in writing that the practice registration is cancelled or suspended, with records custody arranged."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Ask each regulator what closing or suspending the practice requires"
                - "Set a closure date and draft notifications to every body on the map"
                - "Record where records will be held and who will hold them"
                - "File each regulator's written confirmation of cancellation"
            - name: Living with conditions on the practice registration
              description: |-
                ## Purpose
                A registration can carry conditions: limits on services, a requirement for extra supervision, regular reports or a timetable of improvements. Breaching a condition is usually treated more seriously than the original concern. A condition log, with the evidence of compliance for each and reports sent on time, is what earns their removal.

                ## Milestones
                1. Every condition copied word for word into a condition log.
                2. For each condition, the evidence of compliance and the person responsible recorded.
                3. Every required report sent on time with a copy kept.
                4. An application to vary or remove conditions made once the evidence supports it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A condition log shows compliance evidence and a named owner for every condition, with every required report sent on time."
                cadence: rolling
              tasks:
                - "Copy every registration condition word for word into a log"
                - "Name the evidence and the owner for each condition"
                - "Gather condition evidence and send any report that is due @recurring(monthly:8)"
                - "Apply to remove a condition once a year of evidence supports it"
            - name: Practices answering to more than one regulator
              description: |-
                ## Purpose
                Plenty of practices answer to several bodies at once. A dental practice may answer to a health regulator, a radiation authority and a data protection authority; a law firm to its conduct regulator and a money laundering supervisor; a pharmacy to a professional board and a medicines authority. Mapping where their requirements overlap or conflict saves duplicate work and shows which rule wins.

                ## Milestones
                1. The requirements of each regulator set side by side for shared topics such as records, premises and staff.
                2. Overlaps marked where one piece of evidence can satisfy several bodies.
                3. Conflicts identified and the stricter rule chosen, with advice where needed.
                4. The evidence library cross-referenced so one document serves every body that needs it.

                ## Notes
                Start from the **Risk register** template to log the conflicts and who decided how to handle each.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A side-by-side map of shared requirements across all regulators is filed, with each conflict resolved and recorded."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Choose three shared topics such as records, premises and staffing"
                - "Set each regulator's requirement for those topics side by side"
                - "Mark where one document can serve several regulators"
                - "Log each conflict and the decision on which rule to follow"
            - name: Responding to regulator enforcement action
              description: |-
                ## Purpose
                A warning notice, a proposal to impose conditions or a threat of suspension usually comes with a short deadline for representations. Owners who reply alone and in anger rarely help their case. A response plan with a regulatory lawyer, the insurer told, the facts assembled and a clear remedial story gives the practice its best chance.

                ## Milestones
                1. The notice, its deadline and the right of reply understood and logged.
                2. Your indemnity insurer and a regulatory lawyer contacted within days.
                3. A factual chronology and the evidence assembled.
                4. Representations submitted on time, showing what has already been fixed.
                5. The outcome and any appeal route recorded.

                ## Notes
                This project organises the work. The content of representations is for your lawyer. Check your insurance policy for regulatory defence cover before you instruct anyone.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Representations prepared with a regulatory lawyer are submitted before the notice deadline, with the outcome recorded."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Log the notice, its deadline and the right of reply @priority(high)"
                - "Tell your indemnity insurer and instruct a regulatory lawyer"
                - "Build a dated chronology with the supporting evidence"
                - "Submit representations that show the fixes already made"
            - name: Yearly compliance assurance report to the owners
              description: |-
                ## Purpose
                Partners and directors carry the regulatory risk of the practice and should see, once a year, whether it is being managed. A short assurance report covering registrations, returns, inspections, open actions, breaches and the year ahead gives them a basis to sign the annual return and to fund what needs fixing.

                ## Milestones
                1. A standard outline for the report agreed with the owners.
                2. The year's registrations, returns, inspections, actions and breaches summarised.
                3. The top three risks for the coming year named with a proposed response.
                4. The report presented, discussed and minuted at an owners' meeting.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A yearly assurance report naming the top three risks is presented to the owners and its discussion minuted."
                cadence: cyclic
                effort_hours_estimate: "6"
              tasks:
                - "Agree a one-page outline for the assurance report"
                - "Write the yearly compliance assurance report for the owners @recurring(yearly)"
                - "Name the top three regulatory risks for the coming year"
                - "Present the report and minute the owners' decisions"
            - name: Voluntary accreditation beyond the regulator's minimum
              description: |-
                ## Purpose
                Practices that already meet their regulator's standards sometimes seek a voluntary accreditation, a quality mark or a management system certification such as ISO 9001 to win contracts, satisfy insurers or show patients and clients something more. Weighing the cost, the audit burden and the real benefit leads to a deliberate choice, not a badge for its own sake.

                ## Milestones
                1. Accreditation schemes relevant to the profession listed with cost and audit frequency.
                2. The benefit of each tested against contracts, insurers or clients that would value it.
                3. A decision recorded, with the scheme chosen or the reason for declining.
                4. If going ahead, a gap review against the scheme's standard completed.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on voluntary accreditation compares at least two schemes on cost, audit burden and named benefit."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List accreditation schemes your profession's clients or insurers recognise"
                - "Note the cost and audit frequency of each"
                - "Ask two key clients or your insurer whether accreditation would matter to them"
                - "Record the decision and the reasons"
---

# Practice Regulator Compliance

This area is for the owner who answers to a professional regulator as a business, not only as an individual practitioner: the clinic, firm, studio or pharmacy that holds a practice registration, files an annual return and can be inspected. It starts with the foundations (a regulator map, the registration certificate, named responsible people, a compliance calendar and a baseline against the standards), then the monthly and yearly machinery of evidence rounds, returns, renewals and policy reviews, the skills of reading standards and writing testable policies, decisions about software, a compliance lead and new regulated services, the inspection itself and the action plan after it, situations such as buying, adding a site or closing, and finally specialist work for practices with conditions, several regulators or enforcement on the table.

What repeats is a weekly look at open actions and new regulator letters, a monthly evidence round, premises walk-round, policy batch and rule-change check, quarterly readiness and staffing checks with a compliance meeting, and yearly returns, renewals, staff sign-offs and an assurance report to the owners. The Risk register, Compliance control, Meeting notes, Operational checklist, Purchase decision and Remediation plan templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
