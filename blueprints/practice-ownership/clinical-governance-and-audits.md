---
id: practice-ownership.clinical-governance-and-audits
name: Clinical Governance and Audits
description: "A governance framework with named leads, an incident and significant event routine, a yearly clinical audit programme that closes the loop, current protocols, patient feedback that changes things and evidence an inspector can follow."
category: business
version: 1.0.0
tags: [practice-ownership, clinical-governance-and-audits, small-business, clinical-audit, significant-events, patient-safety, quality-improvement, protocols]
author: Aurum Technology
starter_structure:
  templates:
    - risk-register
    - meeting-notes
    - metrics-log
    - purchase-decision
    - remediation-plan
    - feedback-themes
  pillars:
    - name: Professional Practice Ownership
      emoji: "🔑"
      description: "Owning and running a professional practice: medical and dental clinics, law and accounting firms, engineering consultancies, architecture studios, veterinary practices and pharmacies, from buying or starting one through partnership agreements, billing, compliance, hiring and growth to succession and sale."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Clinical Governance and Audits
          description: "Running clinical governance in a healthcare practice: audits, significant event reviews, protocols, patient feedback and evidence for inspections."
          projects:
            - name: One-page clinical governance framework
              description: |-
                ## Purpose
                Clinical governance is the way a practice makes sure care stays safe and keeps getting better, and in most small practices it exists only as habits in the owner's head. Writing it on one page, covering audit, incidents, protocols, risk, feedback, staff competence and information, turns those habits into something a new clinician, a partner or an inspector can see and test.

                ## Milestones
                1. A one-page framework listing each strand of governance the practice runs and how often.
                2. Each strand linked to the meeting, log or folder where its records live.
                3. The framework agreed by the owners and every clinician who leads a strand.
                4. A dated copy filed at the front of the governance folder with a yearly review date.

                ## Notes
                Keep it to one page. A twenty-page governance policy nobody reads is weaker evidence than a page every clinician can describe from memory.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page governance framework, agreed by the owners and clinical leads, is filed with a review date set."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every governance activity the practice already does, however informal"
                - "Group them into strands such as audit, incidents, protocols, risk and feedback"
                - "Ask the agent to draft a one-page framework from your list"
                - "Agree the framework at a clinicians' meeting and record the date"
            - name: Named clinical governance lead and strand owners
              description: |-
                ## Purpose
                When everyone is responsible for safety, nobody chases the overdue audit or the safety alert that arrived on a Friday. Naming one governance lead and one owner per strand, with protected time written into the rota, gives every governance task a person and an hour in the week.

                ## Milestones
                1. One clinical governance lead named, with deputy cover for absence.
                2. An owner named for audit, incidents, protocols, safety alerts, feedback and safeguarding.
                3. Protected governance time agreed for each owner and shown on the rota.
                4. The list of leads posted in the staff area and added to the framework page.

                ## Notes
                In a small practice one person may own several strands. That is fine, provided the deputy is real and knows where the records are.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Each governance strand has a named owner and deputy, with protected time visible on the practice rota."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the governance strands down the left of a single sheet"
                - "Agree an owner and a deputy for each strand with the clinicians concerned"
                - "Block governance time for each owner on the rota"
                - "Post the list of leads in the staff room and on the shared drive"
            - name: Clinical governance baseline review
              description: |-
                ## Purpose
                Before building anything new, an owner needs to know which governance work is already sound, which is patchy and which is missing. A half-day baseline against your regulator's or professional body's quality standards gives a ranked list of gaps, so the first three months go on the gaps that carry the most risk.

                ## Milestones
                1. The regulator's or professional body's governance expectations listed as a checklist.
                2. Each item rated as in place, partly in place or missing, with the evidence noted.
                3. The gaps ranked by the harm they could cause to patients.
                4. A dated plan for the top five gaps, each with an owner.

                ## Notes
                Be honest about evidence. An activity that happens but leaves no record will be treated as not happening.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated baseline rating every governance expectation, with the five largest gaps assigned to owners and dates."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download the quality or governance standards your regulator publishes"
                - "Turn the standards into a checklist with a column for evidence"
                - "Rate each item with the governance lead in one sitting"
                - "Assign owners and dates to the five highest-risk gaps"
            - name: Incident and near-miss reporting system
              description: |-
                ## Purpose
                Practices that report few incidents are usually not safer, just quieter, and the near misses nobody writes down are the cheapest lessons on offer. A short reporting form, a no-blame message from the owner and a promise of feedback within a week make reporting normal for receptionists as well as clinicians.

                ## Milestones
                1. A one-page incident and near-miss form that takes under five minutes to complete.
                2. A central log with date, category, harm level, owner and status for every report.
                3. A written statement from the owners that honest reporting will not lead to blame.
                4. Every member of staff shown where the form is and what counts as a near miss.
                5. Each reporter told what happened to their report within seven days.

                ## Notes
                Track the number of reports per month as a good sign, not a bad one. A rise after launch usually means the system is working.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A live incident log exists, every staff member has been briefed, and each report receives feedback within seven days."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Draft a one-page form with what happened, harm level and immediate action"
                - "Set up the incident log with status and owner columns"
                - "Brief the whole team on the form at the next staff meeting"
                - "Check every new report has been acknowledged to the reporter @recurring(weekly:fri)"
            - name: Clinical protocols and guidelines index
              description: |-
                ## Purpose
                Protocols tend to pile up in shared drives, binders and inboxes, in several versions, until nobody can say which one is current. An index with one line per protocol, its version, owner, source guideline and review date is the single thing that lets a clinician find the right version in a consultation and an inspector see the whole set at once.

                ## Milestones
                1. Every clinical protocol, pathway and standing instruction gathered into one folder.
                2. Duplicates and superseded versions archived, leaving one current version of each.
                3. An index listing title, version, owner, source guideline and next review date.
                4. Any protocol older than its review date flagged for the review rota.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An index lists every current clinical protocol with one version, an owner and a review date, and overdue ones are flagged."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Search the shared drive and staff room for every protocol in use"
                - "Move superseded versions to an archive folder"
                - "Build the index with owner, version and review date columns"
                - "Flag every protocol past its review date"
            - name: Patient safety alert receipt and action log
              description: |-
                ## Purpose
                Medicine recalls, device alerts and drug safety updates arrive by email, portal and post, and a missed one can mean patients still taking a withdrawn product weeks later. A single log showing when each alert arrived, whether it applies, what was done and who signed it off is one of the first records inspectors ask to see.

                ## Milestones
                1. Every source of safety alerts for your profession and country identified and subscribed to.
                2. Alerts routed to one shared mailbox rather than one person's inbox.
                3. A log recording receipt date, relevance, action taken, patients affected and sign-off.
                4. A deputy able to run the log during the lead's leave.

                ## Notes
                Record alerts that do not apply too, with the reason. A log with only actioned alerts cannot show that nothing was missed.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every safety alert received in a quarter appears in the log with a relevance decision, action and sign-off date."
                cadence: rolling
              tasks:
                - "List the medicines, device and public health alert services for your profession"
                - "Subscribe a shared practice mailbox to each service"
                - "Set up the alert log with relevance, action and sign-off columns"
                - "Check the alert sources and log any new alert with its action @recurring(weekly:tue)"
            - name: Clinical risk register
              description: |-
                ## Purpose
                Every practice carries clinical risks it knows about, such as a single defibrillator past its pad date, results checked by one person or a procedure only one clinician can do. Writing them down with a likelihood, a consequence and an owner means the owners decide which to fix first, instead of the order being set by whichever one goes wrong.

                ## Milestones
                1. At least fifteen clinical risks listed from staff, incident and audit sources.
                2. Each risk scored for likelihood and consequence on the same scale.
                3. An owner and a control or action recorded for every risk scored high.
                4. The register reviewed and rescored by the owners each quarter.

                ## Notes
                Start from the **Risk register** template. Keep clinical risks here and business risks elsewhere, or the clinical ones get crowded out.
              priority: high
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A scored clinical risk register with owners for every high risk is reviewed at least once a quarter."
                cadence: rolling
              tasks:
                - "Ask each clinician for the three risks that worry them most"
                - "Add risks raised in the last year of incidents and audits"
                - "Score each risk and name an owner for the high ones"
                - "Rescore the register with the owners @recurring(quarterly)"
            - name: Patient feedback channels set-up
              description: |-
                ## Purpose
                Feedback that arrives only as online reviews and the occasional angry letter tells you little and arrives too late. Setting up two or three deliberate channels, such as a short card at reception, a text survey after appointments and a comments route on the website, gives a steady stream you can theme each month.

                ## Milestones
                1. Two or three feedback channels chosen to suit the practice's patients.
                2. A short set of questions written, including one open question.
                3. Each channel live, with responses landing in one place.
                4. Staff briefed on how to hand out cards and mention the survey.

                ## Notes
                Keep complaints on their own route. Feedback channels should make it easy to raise a concern, and then pass it to the complaints procedure.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "At least two patient feedback channels are live and collecting responses into one shared place."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Choose two or three feedback channels your patients will actually use"
                - "Write five short questions including one open question"
                - "Set up the survey tool or card box so responses collect in one place"
                - "Brief reception on offering the card or survey after visits"
            - name: Governance evidence folder structure
              description: |-
                ## Purpose
                Governance that leaves its records scattered across inboxes cannot be shown to an inspector, a buyer or a new partner. A folder structure that mirrors the framework, with one folder per strand and a naming rule for files, means every audit, event review and meeting note has an obvious home from the day it is written.

                ## Milestones
                1. A top-level governance folder with one subfolder per framework strand.
                2. A naming rule for files, such as year, month, type and short title.
                3. Access set so clinicians can add records and only leads can delete them.
                4. Existing audits, event reviews and minutes moved into the new structure.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A governance folder mirrors the framework strands, has a file naming rule and holds the last year of governance records."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create one subfolder for each strand of the governance framework"
                - "Write the file naming rule in a short note at the top level"
                - "Set folder permissions so only leads can delete records"
                - "Move last year's audits, event reviews and minutes into place"
            - name: Monthly clinical governance meeting
              description: |-
                ## Purpose
                Governance work done in isolation rarely changes practice, because the people who need to act never hear about it. A standing one-hour meeting each month with a fixed agenda, covering incidents, alerts, audit progress, feedback themes, risks and protocol changes, is where learning becomes a decision with an owner.

                ## Milestones
                1. A fixed agenda agreed and attached to a recurring calendar slot.
                2. Clinicians and the practice manager attending, with cover arranged for clinics.
                3. Minutes recording each decision, its owner and its deadline.
                4. An action list carried forward and checked at the start of each meeting.

                ## Notes
                Start from the **Meeting notes** template. Circulate the minutes within two working days to anyone who missed the meeting.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Eleven or more governance meetings a year are minuted, with every action showing an owner, a deadline and a status."
                cadence: rolling
              tasks:
                - "Write a fixed agenda of six standing items"
                - "Book a recurring hour with clinic cover arranged"
                - "Hold the governance meeting and minute the decisions @recurring(monthly:12)"
                - "Circulate the minutes to absent staff within two working days"
            - name: Significant event review routine
              description: |-
                ## Purpose
                A significant event is anything that could have been, or was, important for a patient's care, good or bad, and reviewing it properly is how a practice learns from its own experience. A routine that picks events from the incident log, reviews them within a month and tracks every agreed change to completion stops the same event happening twice.

                ## Milestones
                1. A clear rule for which incidents become a formal significant event review.
                2. Each review written up using the same structure and filed in the governance folder.
                3. Agreed changes tracked until done, with a date of completion.
                4. Events reviewed within a month of being reported.

                ## Notes
                Include events that went well. Reviewing a rapid, well-handled emergency shows what to keep doing and makes the meeting less of an inquest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every event meeting the review rule is reviewed within a month, written up and its changes marked complete or in progress."
                cadence: rolling
              tasks:
                - "Write a one-paragraph rule for which incidents get a full review"
                - "Pick this month's events from the incident log"
                - "Review open significant events and the status of their actions @recurring(monthly:20)"
                - "File each finished review in the governance folder"
            - name: Annual clinical audit programme
              description: |-
                ## Purpose
                Audits chosen at random, or only when an inspection looms, rarely touch the areas of highest risk. A yearly programme of four to six audits, picked from incidents, safety alerts, guideline changes and the risk register, spreads the work across the year and gives every clinician one audit to own.

                ## Milestones
                1. Topics for the year chosen from risk, incidents, guidance and feedback.
                2. Each audit assigned to a clinician with a start month and a re-audit month.
                3. A one-page programme filed and shared with the team.
                4. Progress reviewed at each governance meeting and the programme reset each year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written programme of four to six audits with owners and months exists, and at least four complete a first cycle in the year."
                cadence: cyclic
              tasks:
                - "Pull candidate audit topics from the risk register and incident log"
                - "Shortlist four to six topics with the clinical team"
                - "Assign each audit an owner, start month and re-audit month"
                - "Set the next year's audit programme from this year's results @recurring(yearly)"
            - name: Test results and abnormal findings safety net
              description: |-
                ## Purpose
                A result that comes back abnormal and sits unread in an inbox is one of the most common causes of avoidable harm in primary and community care. A written process for who checks results, how quickly, what happens when the requesting clinician is away and how patients are told closes the gap between a test being done and being acted on.

                ## Milestones
                1. A written process naming who files results, within what time and with what cover.
                2. A report or view in the clinical system showing results not yet actioned.
                3. A rule for telling patients about abnormal results and recording that they were told.
                4. An audit of a month of results showing the time from receipt to action.

                ## Notes
                The most common failure is a locum or part-time clinician's tests. Make sure results route to a named person on the days the requester is not in.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No result stays unactioned beyond the agreed time, shown by a month's audit and a daily unactioned results check."
                cadence: rolling
              tasks:
                - "Map how a result travels from lab to clinician to patient today"
                - "Write the process with a named cover person for absent clinicians"
                - "Check the unactioned results list before the first clinic @recurring(daily)"
                - "Audit one month of results for time from receipt to action"
            - name: Urgent referral tracking log
              description: |-
                ## Purpose
                When a patient is referred urgently for suspected cancer or another serious condition, the practice often assumes the hospital or specialist will take it from there. A simple log that records every urgent referral and checks that an appointment was offered catches the lost fax, the rejected form and the patient who never booked.

                ## Milestones
                1. A log for every urgent referral with date sent, destination and acknowledgement.
                2. A named person checking acknowledgements each week.
                3. A rule for chasing referrals not acknowledged within the agreed time.
                4. Patients told to contact the practice if they hear nothing by a stated date.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every urgent referral in the log shows an acknowledgement or a chase, with none left unchecked for more than a week."
                cadence: rolling
              tasks:
                - "Set up the urgent referral log with acknowledgement and chase columns"
                - "Agree how many working days before an unacknowledged referral is chased"
                - "Check the log for missing acknowledgements and chase them @recurring(weekly:mon)"
                - "Add a safety-net line to the patient's referral letter or text"
            - name: Monthly patient feedback theming
              description: |-
                ## Purpose
                Raw feedback is noise until someone reads it as a set and notices that six patients in a month mentioned the same waiting room or the same phone queue. Theming it each month, sharing the top themes with staff and saying publicly what changed closes the loop patients are looking for.

                ## Milestones
                1. All feedback from every channel read together once a month.
                2. Comments sorted into themes with a count for each.
                3. The top three themes taken to the governance meeting with a proposed action.
                4. A short you said, we did notice updated in the waiting area or on the website.

                ## Notes
                Start from the **Feedback themes** template. Pass anything that reads as a complaint to the complaints procedure rather than theming it.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Feedback is themed every month, the top themes are minuted at the governance meeting and a public update is refreshed each quarter."
                cadence: rolling
              tasks:
                - "Export the month's feedback from every channel into one sheet"
                - "Read and theme the month's patient feedback @recurring(monthly:8)"
                - "Take the top three themes to the governance meeting"
                - "Update the you said, we did notice in the waiting area"
            - name: Protocol review rota
              description: |-
                ## Purpose
                Reviewing forty protocols in the month before an inspection produces rushed edits and no real thought. Spreading reviews across the year, a few each month, gives each protocol owner time to check it against current guidance and to ask the people who use it what actually happens.

                ## Milestones
                1. Every protocol in the index given a review month across the year.
                2. Owners sent their protocols at the start of their review month.
                3. Each reviewed protocol re-versioned and the index updated.
                4. Changes briefed to the staff who use the protocol.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "No protocol in the index is more than one month past its review date at any point in the year."
                cadence: cyclic
              tasks:
                - "Spread every protocol in the index across twelve review months"
                - "Send the protocols due this month to their owners @recurring(monthly:3)"
                - "Update the version number and review date for each reviewed protocol"
                - "Brief changed protocols at the next staff huddle"
            - name: Quarterly peer review of case notes
              description: |-
                ## Purpose
                Clinicians in small practices often go years without another professional looking at their records or decisions. A quarterly session in which pairs of clinicians review a random sample of each other's cases against agreed criteria spots drift early and is usually welcomed once the first one is done.

                ## Milestones
                1. Review criteria agreed, such as history, examination, plan, safety-netting and coding.
                2. A random sample of cases drawn for each clinician each quarter.
                3. Each review recorded with strengths and one point to work on.
                4. Common themes across all clinicians taken to the governance meeting.

                ## Notes
                Keep findings between the pair and the governance lead unless there is a safety concern. The aim is learning, not appraisal by stealth.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every clinician has a peer case review recorded each quarter, with practice-wide themes minuted."
                cadence: rolling
              tasks:
                - "Agree five review criteria with the clinicians"
                - "Pair clinicians and set the sample size for each quarter"
                - "Review a random sample of case notes with your peer @recurring(quarterly)"
                - "Send shared themes to the governance lead"
            - name: Clinical supervision and reflective practice
              description: |-
                ## Purpose
                Therapists and many allied health professionals need regular supervision as a condition of practice, and doctors, dentists and vets benefit from it whether or not it is required. A monthly supervision slot with notes kept by the supervisee builds the reflective record that appraisal, revalidation and licence renewal usually ask for.

                ## Milestones
                1. Each clinician's supervision requirement under their professional body confirmed.
                2. A supervisor and a monthly slot agreed for each clinician.
                3. Reflective notes kept by each supervisee in a format their body accepts.
                4. A yearly check that every clinician met their supervision requirement.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every clinician has supervision at the frequency their professional body requires, confirmed in a yearly check."
                cadence: rolling
              tasks:
                - "Check each clinician's supervision requirement with their professional body"
                - "Agree a supervisor and a standing slot for each clinician"
                - "Hold the monthly supervision session and keep reflective notes @recurring(monthly:15)"
                - "Record each clinician's supervision hours at year end"
            - name: Quarterly governance report to the owners
              description: |-
                ## Purpose
                Owners carry the liability for the practice's care, yet many see governance only when something goes wrong. A two-page report each quarter, covering incidents, audits, alerts, risks, feedback and overdue actions, lets owners make funding and staffing decisions on evidence and shows an inspector that the board level is engaged.

                ## Milestones
                1. A standard two-page report format agreed with the owners.
                2. The report produced each quarter from the governance logs.
                3. Owners' decisions on the report recorded in their meeting minutes.
                4. Four reports filed in the governance folder by the end of the year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: deliverable
                success_criteria: "Four quarterly governance reports a year are filed, each with the owners' decisions recorded against it."
                cadence: cyclic
              tasks:
                - "Agree the headings for a two-page governance report with the owners"
                - "Ask the agent to draft the report from the quarter's logs and minutes"
                - "Compile and present the quarterly governance report @recurring(quarterly)"
                - "Record the owners' decisions in their minutes"
            - name: Clinical outcome measures dashboard
              description: |-
                ## Purpose
                Governance that counts only activities, such as meetings held and audits started, says nothing about whether patients are better off. Choosing a handful of outcome and process measures that fit your type of practice, such as recall attendance, treatment failure rates, patient-reported outcome scores or results turnaround, and tracking them monthly shows whether the work is paying off.

                ## Milestones
                1. Five to eight measures chosen, each with a definition and data source.
                2. A baseline value recorded for each measure.
                3. Monthly values plotted so trends are visible at the governance meeting.
                4. A target or acceptable range agreed with the clinicians for each measure.

                ## Notes
                Start from the **Metrics log** template. Choose measures the clinical system can produce without hand counting, or the dashboard will not survive a busy month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dashboard of five to eight defined clinical measures shows at least six consecutive monthly values with agreed ranges."
                cadence: rolling
              tasks:
                - "List ten candidate measures your clinical system can report"
                - "Choose five to eight with the clinicians and define each one"
                - "Record a baseline for each measure"
                - "Update the outcome dashboard before the governance meeting @recurring(monthly:25)"
            - name: Running a full clinical audit cycle
              description: |-
                ## Purpose
                Many practice audits stop at counting, with no standard to compare against and no second round to prove anything changed. Learning the full cycle, choosing a topic, setting a standard, collecting data, comparing, changing practice and re-auditing, is what separates an audit from a data collection exercise.

                ## Milestones
                1. The stages of the audit cycle understood and written on a one-page guide.
                2. A practice audit template with sections for each stage.
                3. One small audit run through every stage as practice.
                4. The guide and template shared with every clinician who will own an audit.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A practice audit template exists and one practice audit has been completed through to re-audit using it."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Read your professional body's guidance on clinical audit"
                - "Write a one-page guide to the audit cycle for the practice"
                - "Build an audit template with a section for each stage"
                - "Run a small audit through every stage as practice"
            - name: Significant event analysis method
              description: |-
                ## Purpose
                Write-ups that end with the words be more careful have not found anything. Learning a structured method, what happened, why it happened, what was learned and what will change, and practising it on a past event makes reviews shorter, fairer and more useful.

                ## Milestones
                1. A structured significant event analysis method chosen and written up.
                2. A worked example completed using a past event from the practice.
                3. Clinicians and the practice manager shown the method at a meeting.
                4. The method added to the governance folder as the standard write-up.

                ## Notes
                Ask why at least three times before settling on a cause. The first answer is usually a person, the third is usually a system.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard event analysis write-up is adopted and a worked example from the practice is filed as the model."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read your professional body's guidance on significant event analysis"
                - "Write the method as a one-page structured template"
                - "Rework a past event using the new method"
                - "Present the worked example at the governance meeting"
            - name: Human factors in clinical error
              description: |-
                ## Purpose
                Most clinical errors happen to competent, careful people working in systems that make the error easy: look-alike packaging, interruptions, handovers and fatigue. Learning the basics of human factors helps the governance lead write actions that change the system, such as a checklist, a forcing step or a quieter room, rather than asking people to try harder.

                ## Milestones
                1. The core human factors ideas, such as error types, interruptions and workload, studied.
                2. Three past incidents re-read through a human factors lens.
                3. At least one system change identified that would have prevented each.
                4. A short team session held on human factors in the practice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three past incidents have been re-analysed for human factors, each with a system change recorded, and a team session held."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Find a short course or guide on human factors in healthcare"
                - "Re-read three past incidents looking for system causes"
                - "Write one system change for each incident"
                - "Run a thirty-minute team session using one of the incidents"
            - name: Writing a clinical protocol staff will follow
              description: |-
                ## Purpose
                Protocols copied from a template or a national guideline are often too long to use in a consultation and silent on the practice's own steps. Learning to write a short protocol, with scope, who does what, the local steps, when to escalate and the evidence behind it, makes the difference between a document and a habit.

                ## Milestones
                1. A standard protocol layout agreed with headings for scope, roles, steps, escalation and sources.
                2. One existing protocol rewritten in the new layout and tested with staff.
                3. Feedback from the users of that protocol built into the final version.
                4. The layout adopted for every new or reviewed protocol.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A standard protocol layout is in use and at least one protocol has been rewritten in it and tested with its users."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Pick the protocol staff complain about most"
                - "Rewrite it on two pages using the new headings"
                - "Ask two users to follow it on a real case and report back"
                - "Adopt the layout in the protocol index notes"
            - name: Setting audit standards from guidelines
              description: |-
                ## Purpose
                An audit result means nothing without a standard to measure against, and a standard of one hundred percent for everything sets clinicians up to fail. Learning to turn a guideline recommendation into a measurable criterion with a realistic target, and to state the exceptions, makes audit results credible to the people being audited.

                ## Milestones
                1. The difference between a criterion, a standard and an exception understood.
                2. Criteria and targets written for three current audit topics.
                3. Each criterion traced to the guideline or evidence it came from.
                4. Exceptions agreed with the clinicians before data collection starts.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three audit topics each have written criteria, targets, exceptions and a cited source before data collection begins."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the guideline behind your next planned audit"
                - "Write two or three measurable criteria with targets"
                - "List the patients who should be excluded and why"
                - "Agree the criteria with the clinicians before collecting data"
            - name: Duty of candour and open disclosure
              description: |-
                ## Purpose
                Most professions and many countries now expect a practice to tell a patient openly and promptly when something has gone wrong in their care, to apologise and to explain what will happen next. Knowing the rules that apply to you, and rehearsing the conversation, means the first time you need it is not the first time you have thought about it.

                ## Milestones
                1. The candour or open disclosure duties for your profession and country summarised.
                2. A short practice procedure covering who speaks to the patient, when and how it is recorded.
                3. A letter template for the written follow-up checked with your indemnity provider.
                4. Clinicians briefed and one role-play conversation practised.

                ## Notes
                An apology is not an admission of liability in many jurisdictions, but check with your indemnity provider before writing the procedure.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A candour procedure and letter template, checked with the indemnity provider, are filed and every clinician has been briefed."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Find your regulator's guidance on candour or open disclosure"
                - "Draft a one-page procedure for who tells the patient and how"
                - "Send the letter template to your indemnity provider for comment"
                - "Practise one disclosure conversation at a clinical meeting"
            - name: Clinical guideline update watch
              description: |-
                ## Purpose
                Guidelines change several times a year, and a protocol written to last year's version may now be giving outdated care. A monthly scan of the guideline bodies relevant to your profession, with each change routed to the owner of the matching protocol, keeps the protocol set current without anyone reading every bulletin.

                ## Milestones
                1. The guideline bodies and professional journals relevant to the practice listed.
                2. Email alerts from each body routed to the governance mailbox.
                3. Each relevant change logged and sent to the owner of the matching protocol.
                4. Protocols changed as a result marked in the index with the guideline date.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Every relevant guideline change in the year is logged with the protocol it affects and the date that protocol was updated."
                cadence: rolling
              tasks:
                - "List the guideline bodies that set standards for your clinical work"
                - "Sign the governance mailbox up to their update alerts"
                - "Scan for new and updated guidelines and log the relevant ones @recurring(monthly:18)"
                - "Send each change to the owner of the matching protocol"
            - name: First audit on prescribing safety
              description: |-
                ## Purpose
                Prescribing is where many practices find their highest-risk gaps, such as patients on medicines that need regular blood monitoring without a recent test, or repeat prescriptions issued long past their review date. A first audit on one high-risk group gives quick, visible results and a reason for everyone to take the audit programme seriously.

                ## Milestones
                1. One high-risk prescribing group chosen with the prescribers.
                2. A standard set, such as the share of patients with monitoring done in the required interval.
                3. Data collected from the clinical system and compared with the standard.
                4. Patients outside the standard reviewed and the process changed.
                5. A re-audit date set within six months.

                ## Notes
                Choose the group with your prescribers and pharmacist. The monitoring interval comes from the guideline or the product information, not from the audit lead.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A written prescribing audit compares results against a cited standard, lists changes made and sets a re-audit date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Agree one high-risk medicine group to audit with the prescribers"
                - "Set the monitoring standard from the relevant guideline"
                - "Run the search in the clinical system and record the results"
                - "Book reviews for the patients outside the standard"
            - name: Consent process audit and improvement
              description: |-
                ## Purpose
                Consent is often recorded as a single word in the notes, which says nothing about what risks were discussed or whether the patient had time to think. Auditing a sample of procedures for how consent was recorded, and then improving the forms and prompts, protects patients and the clinician if a treatment is later questioned.

                ## Milestones
                1. A sample of recent procedures checked for the recorded elements of consent.
                2. Gaps found, such as missing risks, alternatives or cooling-off time.
                3. Consent forms or record templates updated to prompt for the missing elements.
                4. A re-audit showing the change in recording.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A consent audit and re-audit are filed, with updated forms or templates in use between them."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "Choose the procedures where written consent matters most"
                - "Pull a sample of twenty records and check each against agreed elements"
                - "Update the consent form or record template to prompt for the gaps"
                - "Re-audit a fresh sample after three months"
            - name: Chaperone policy and offer audit
              description: |-
                ## Purpose
                Intimate examinations without a recorded chaperone offer are a frequent source of complaints and allegations, and many practices have a policy nobody is trained to follow. Writing a clear policy, training the staff who act as chaperones and auditing that the offer is recorded protects patients and staff alike.

                ## Milestones
                1. A chaperone policy stating when an offer is made and who may act as chaperone.
                2. Staff who chaperone trained and their training recorded.
                3. A record prompt for the offer and the patient's answer in the clinical system.
                4. A yearly audit of intimate examinations for a recorded offer.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A chaperone policy is in use, chaperones are trained and a yearly audit shows the offer recorded for intimate examinations."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Check your regulator's guidance on chaperones for your profession"
                - "Write a one-page policy and display a notice in clinical rooms"
                - "Train the staff who will act as chaperones"
                - "Audit intimate examinations for a recorded chaperone offer @recurring(yearly)"
            - name: Clinical record-keeping quality audit
              description: |-
                ## Purpose
                Inspectors, insurers and courts judge care by what is written, and notes that are thin or inconsistent leave good clinicians unable to show what they did. An audit of the quality of clinical entries, against a short set of criteria such as reason for visit, findings, plan and safety-netting, shows each clinician where their notes fall short.

                ## Milestones
                1. Five or six record quality criteria agreed with the clinicians.
                2. Ten records per clinician scored against the criteria.
                3. Individual results shared privately and practice-wide results shared openly.
                4. One improvement action agreed per clinician and a re-audit date set.

                ## Notes
                This audit is about the content of clinical entries. Retention, access requests and storage of records belong with your records policy.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Ten records per clinician have been scored, results shared, and each clinician has one action and a re-audit date."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Agree five or six record quality criteria with the clinicians"
                - "Draw ten random records for each clinician"
                - "Score the records and share results privately"
                - "Agree one improvement per clinician and book the re-audit"
            - name: Choosing incident and governance software
              description: |-
                ## Purpose
                Spreadsheets work for a single site with a handful of reports a month, but they struggle once there are several sites, dozens of actions and an inspector asking for trend reports. Comparing two or three dedicated governance tools against your actual volume and budget gives a clear decision either way.

                ## Milestones
                1. The practice's needs written down, such as incident logging, alerts, audits and action tracking.
                2. Two or three tools and the current spreadsheet scored against the same needs.
                3. Costs over three years compared, including set-up and training.
                4. A decision recorded, with a migration plan if a new tool is chosen.

                ## Notes
                Start from the **Purchase decision** template. Check where each tool stores patient data and whether that meets your data protection duties.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision compares at least two tools and the spreadsheet on needs and three-year cost."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List what the governance logs need to do that they do not do now"
                - "Book demos of two governance software tools"
                - "Score each tool and the spreadsheet against the same list"
                - "Record the decision and the reasons in the governance folder"
            - name: Patient experience survey redesign
              description: |-
                ## Purpose
                Long satisfaction surveys with mostly positive answers make a practice feel good and teach it very little. Redesigning the survey around a few specific questions about access, explanation, involvement in decisions and dignity, with an open question that invites the uncomfortable answer, produces feedback you can act on.

                ## Milestones
                1. The current survey's response rate and usefulness reviewed.
                2. A new survey of no more than eight questions drafted and tested on five patients.
                3. The new survey running across the existing feedback channels.
                4. First results compared with the old survey's to show what is new.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A survey of eight questions or fewer has replaced the old one and its first month of results has been reviewed."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Check the response rate and last three months of answers on the current survey"
                - "Draft eight questions on access, explanation, involvement and dignity"
                - "Test the draft with five patients at reception"
                - "Run the full patient survey and compare with last year @recurring(yearly)"
            - name: High-risk medicines monitoring system
              description: |-
                ## Purpose
                After a first prescribing audit, the lasting fix is a system, not another audit: a recall list, a rule that repeats are not issued without monitoring and a named person who checks the list. Building this for the medicines that need regular blood tests or reviews turns a one-off clean-up into a standing safety net.

                ## Milestones
                1. The high-risk medicines the practice prescribes or supplies listed with their monitoring needs.
                2. A recall list or system alert set up for each medicine.
                3. A rule agreed for repeats when monitoring is overdue.
                4. A named person and deputy checking the list.

                ## Notes
                Agree monitoring intervals and the repeat rule with your prescribers and pharmacist, using the guideline or product information as the source.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every high-risk medicine on the list has a recall or alert in the system and a named person checking it."
                cadence: phased
                effort_hours_estimate: "10"
              tasks:
                - "List the high-risk medicines from the prescribing audit and guidelines"
                - "Set up a recall or system alert for each one"
                - "Agree the repeat prescribing rule with prescribers and the pharmacist"
                - "Name a person and deputy to check the recall list"
            - name: Safeguarding governance arrangements
              description: |-
                ## Purpose
                Every healthcare practice sees children and adults at risk, and when a concern is missed the question is rarely about one clinician but about whether the practice had a lead, training and a route for concerns. Setting up the governance around safeguarding, rather than the clinical judgement itself, makes sure concerns reach the right people and are recorded.

                ## Milestones
                1. A safeguarding lead and deputy named and trained to the level your profession expects.
                2. A one-page procedure for raising a concern, with local agency contacts.
                3. Every staff member trained to the level their role requires, with dates recorded.
                4. Safeguarding concerns reviewed as a standing item at the governance meeting.

                ## Notes
                Local agency contacts and required training levels vary by country and region. Confirm them with your local safeguarding authority.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A trained safeguarding lead, a procedure with local contacts and a training record for every staff member are in place."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Name a safeguarding lead and deputy and check their training level"
                - "Write a one-page concern procedure with local contacts"
                - "Record each staff member's training level and date"
                - "Check safeguarding training expiry dates for all staff @recurring(yearly)"
            - name: Governance evidence pack for the next inspection
              description: |-
                ## Purpose
                Inspectors judging clinical quality want to follow a thread: an incident, the review, the change, the re-audit and the effect on patients. Pulling together three or four of your best complete threads, with the governance framework and leads list on top, lets the clinical lead tell the practice's quality story in ten minutes rather than searching folders under pressure.

                ## Milestones
                1. Three or four complete threads chosen, each from incident or audit to measured change.
                2. The framework, leads list, audit programme and last four governance reports on top.
                3. The pack checked by a clinician who did not build it.
                4. The clinical lead able to talk through each thread without notes.

                ## Notes
                This pack covers clinical quality only. Registration, premises and general compliance evidence belong in your regulator compliance records.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An evidence pack holds at least three complete improvement threads and the core governance documents, checked by a second clinician."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick three or four events or audits that led to a measured change"
                - "Assemble each thread in date order in one folder"
                - "Add the framework, leads list and recent governance reports on top"
                - "Ask a second clinician to talk through the pack with you"
            - name: Annual clinical governance review and plan
              description: |-
                ## Purpose
                Once a year the owners and clinical leads should step back from the monthly logs and ask whether governance is changing care. A half-day review of the year's incidents, audits, outcomes and feedback, ending in three priorities for next year, keeps the framework from becoming a set of rituals.

                ## Milestones
                1. The year's incidents, audits, outcome trends and feedback themes summarised.
                2. The framework and leads list checked and updated.
                3. Three priorities for the coming year agreed with owners and dates.
                4. A short annual governance statement filed and shared with staff.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "An annual governance statement with three dated priorities is filed after a review held with the owners and leads."
                cadence: cyclic
              tasks:
                - "Book the annual governance review half day with the owners @recurring(yearly)"
                - "Summarise the year's logs and outcome trends on two pages"
                - "Agree three priorities for next year with owners and dates"
                - "Share a short governance statement with all staff"
            - name: Re-audit to close the first audit loop
              description: |-
                ## Purpose
                The re-audit is the step most often skipped and the only one that proves a change worked. Running the second round of the first audit on time, with the same criteria and a fresh sample, gives the practice its first complete cycle and the strongest single piece of governance evidence it can hold.

                ## Milestones
                1. The re-audit run with the same criteria and a comparable sample.
                2. First and second round results shown side by side.
                3. Any remaining gap given a further action and date.
                4. The completed cycle presented at the governance meeting and filed.

                ## Notes
                Start from the **Remediation plan** template for any gap that remains after the second round.
              priority: medium
              deadlineOffsetDays: 240
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A two-round audit report with results side by side and any remaining actions is filed in the governance folder."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Confirm the re-audit date and criteria with the audit owner"
                - "Collect the second round using a fresh sample"
                - "Chart the two rounds side by side"
                - "Present the full cycle at the governance meeting"
            - name: Practice learning session after a serious incident
              description: |-
                ## Purpose
                When something seriously harms a patient, the practice needs to look after the people involved, find out what happened and share the learning without turning it into a trial. A planned learning session, held once the facts are clear, helps the whole team understand the changes and recover their confidence.

                ## Milestones
                1. Support offered to the staff involved, including access to their indemnity provider and wellbeing help.
                2. A structured review completed before the session.
                3. A session held for the whole team covering the facts, the causes and the changes.
                4. The changes tracked to completion and the session notes filed.

                ## Notes
                Report to your regulator, indemnity provider or other bodies as your rules require before holding the session. Keep the session focused on systems, not individuals.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A team learning session is held after a serious incident review, with notes and a tracked list of changes filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Contact your indemnity provider for advice on reporting and support"
                - "Complete the structured review before setting a session date"
                - "Plan a one-hour session focused on causes and changes"
                - "Track each agreed change to completion"
            - name: First patient participation group meeting
              description: |-
                ## Purpose
                Patients who meet the practice a few times a year can test new services, read feedback themes and spot problems staff no longer notice. Recruiting six to ten people who reflect your patient list and running a well-prepared first meeting sets the tone for a group that lasts.

                ## Milestones
                1. Terms of reference written covering purpose, membership and confidentiality.
                2. Six to ten patients recruited from a range of ages and needs.
                3. A first meeting held with a short agenda and the feedback themes to discuss.
                4. Notes and agreed actions shared with members and staff.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A patient participation group of at least six members has met once, with terms of reference and notes filed."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Write one-page terms of reference for the group"
                - "Invite patients through reception, the website and clinicians"
                - "Plan a ninety-minute first meeting with the latest feedback themes"
                - "Send notes and actions to members within a week"
            - name: Governance for a single-handed practitioner
              description: |-
                ## Purpose
                Practising alone means carrying every governance role with nobody to review your cases or challenge your decisions. A slimmed-down routine, with an external peer for case review, a quarterly self-audit and a shared arrangement with a nearby practice for event reviews, gives a solo owner real governance without a team.

                ## Milestones
                1. A peer from another practice agreed for quarterly case review.
                2. Two audits a year chosen and scheduled.
                3. A reciprocal arrangement for reviewing significant events agreed.
                4. A short governance log kept and reviewed every quarter.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A solo practitioner has an external peer, two scheduled audits a year and a governance log reviewed each quarter."
                cadence: rolling
              tasks:
                - "Ask a trusted colleague in another practice to be a review peer"
                - "Choose two audit topics for the year"
                - "Agree to review each other's significant events"
                - "Start a single governance log for incidents, alerts and audits"
            - name: Governance induction for new clinicians
              description: |-
                ## Purpose
                New associates or locums who do not know how to report an incident, where protocols live or who checks their results are a governance gap from their first day. A thirty-minute governance induction with a short checklist they sign makes every newcomer part of the system before they see a patient.

                ## Milestones
                1. A one-page governance induction checklist covering incidents, protocols, results, alerts and safeguarding.
                2. The induction delivered before the new clinician's first clinic.
                3. The signed checklist filed in the staff file.
                4. A check at four weeks that the clinician has used the systems.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every clinician who joined in the last year has a signed governance induction checklist on file."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Draft a one-page governance induction checklist"
                - "Add the induction to the new starter timetable before the first clinic"
                - "File the signed checklist in the staff file"
                - "Book a four-week check with each new clinician"
            - name: Governance across several sites
              description: |-
                ## Purpose
                Once a practice has two or more sites, each tends to grow its own protocols and its own way of logging incidents, and lessons learned at one never reach the other. One framework, shared logs and a governance lead per site reporting into a single meeting keep standards consistent and let a problem at one site be fixed at all.

                ## Milestones
                1. A site governance lead named at each location.
                2. One shared incident log, alert log and protocol index used by every site.
                3. A joint governance meeting with each site reporting on the same headings.
                4. Learning from each site's events shared with the others within a month.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every site uses the same governance logs and protocol index and reports to one joint governance meeting."
                cadence: phased
                effort_hours_estimate: "16"
              tasks:
                - "Compare each site's protocols and logs to find the differences"
                - "Name a governance lead at each site"
                - "Move every site onto the shared logs and protocol index"
                - "Set up a joint governance meeting with site reports"
            - name: Governance during heavy locum use
              description: |-
                ## Purpose
                Periods of long-term absence or vacancies can leave a practice running largely on locums, who rotate quickly and may never hear about the incident that changed a protocol. A locum governance pack, results routing to a permanent clinician and a short debrief at the end of each session keep the safety nets working when the faces change.

                ## Milestones
                1. A two-page locum governance pack covering protocols, results, referrals and incidents.
                2. Results and referrals from locum sessions routed to a named permanent clinician.
                3. A short end-of-session debrief note for any locum concern.
                4. A check of locum sessions in the incident log after the period ends.

                ## Notes
                Credential checks and booking terms for locums sit with your staffing arrangements. This project covers the clinical safety nets around their work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A locum governance pack is in use and every locum result and referral is routed to a named permanent clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a two-page locum governance pack"
                - "Set results routing for locum sessions to a permanent clinician"
                - "Add a debrief note to the end of each locum session"
                - "Review locum-related incidents once the period ends"
            - name: Governance gaps after taking over a practice
              description: |-
                ## Purpose
                Buying a practice means inheriting the previous owner's governance, or its absence, along with the patient list and the lease. A governance review in the first ninety days, covering open incidents, overdue alerts, stale protocols and unfinished audits, shows what you are now answerable for and what has to be fixed first.

                ## Milestones
                1. Open incidents, complaints themes and unactioned alerts inherited from the previous owner listed.
                2. Protocols, audits and governance meetings of the past two years found or confirmed missing.
                3. The highest-risk gaps fixed or given an owner and date.
                4. A written note of the governance position at handover filed.

                ## Notes
                Record the position at handover in writing. It protects the new owner if an earlier lapse comes to light later.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated note of the inherited governance position is filed and every high-risk gap has an owner and a date."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Ask the previous owner for the incident log, alert log and audits"
                - "List every gap and anything left unactioned"
                - "Fix or assign the highest-risk gaps within the first month"
                - "Write and file a dated note of the governance position at handover"
            - name: Governance sign-off for a new clinical service
              description: |-
                ## Purpose
                Adding a new procedure, test or treatment often happens because one clinician is keen, and the governance arrives later, if at all. A short sign-off before launch, covering competence, protocol, consent, equipment, outcome measures and an early audit, means the service starts with its safety nets in place.

                ## Milestones
                1. The clinicians who will deliver the service shown to be trained and competent.
                2. A protocol, consent process and any equipment checks written before launch.
                3. Outcome or complication measures chosen and added to the dashboard.
                4. An audit of the first patients booked for three to six months after launch.

                ## Notes
                Check with your regulator and indemnity provider whether the new service needs notifying or a change to your cover.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A signed governance checklist for the new service is filed before the first patient, with an early audit booked."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List the training and competence evidence for each clinician involved"
                - "Write the protocol and consent process for the new service"
                - "Add outcome or complication measures to the dashboard"
                - "Book an audit of the first patients treated"
            - name: Monthly case review meeting
              description: |-
                ## Purpose
                Experienced practices go beyond incidents and hold regular case reviews, looking at deaths, unexpected outcomes, complications or difficult cases to ask whether anything could have been done better. A monthly meeting with a protected agenda and a learning log builds a culture where clinicians bring their own cases forward.

                ## Milestones
                1. Criteria for which cases come to the meeting, such as deaths, readmissions or complications.
                2. A rota for presenting cases so every clinician presents in turn.
                3. A learning log recording each case's lesson and any action.
                4. Themes across a year of cases summarised in the annual review.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Ten or more case review meetings a year are held and every case reviewed has a lesson in the learning log."
                cadence: rolling
              tasks:
                - "Agree which cases will be brought to review"
                - "Set up a presenting rota for the year"
                - "Hold the case review meeting and log the lessons @recurring(monthly:27)"
                - "Summarise the year's themes for the annual review"
            - name: Benchmarking clinical outcomes against peers
              description: |-
                ## Purpose
                Your own trend line shows whether you are improving, but not whether your starting point was good. Comparing a few measures with published national data, a professional body's benchmarks or a group of similar practices that agree to share shows where the practice is an outlier, in either direction.

                ## Milestones
                1. Three to five measures chosen where comparable peer or national data exists.
                2. Definitions checked so the comparison is like with like.
                3. The practice's position shown against the peer range for each measure.
                4. Any outlying measure taken to the governance meeting for explanation or action.
              priority: low
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "At least three practice measures are compared with matched peer or national data and any outlier has a recorded explanation or action."
                cadence: cyclic
              tasks:
                - "Find published benchmarks for your profession and practice type"
                - "Match the definitions to your own dashboard measures"
                - "Chart your position against the peer range"
                - "Refresh the benchmark comparison with the latest data @recurring(yearly)"
            - name: External clinical peer review visit
              description: |-
                ## Purpose
                Internal governance can become blind to its own habits, and a visit from a respected clinician outside the practice brings a fresh view of records, protocols and decisions. Arranging a structured peer review, by a professional body scheme or a reciprocal arrangement with another practice, gives a candid report before an inspector writes one.

                ## Milestones
                1. A reviewer or scheme chosen and the scope of the review agreed.
                2. Records, protocols and audits prepared for the reviewer.
                3. The visit completed and a written report received.
                4. Each recommendation accepted with an action or declined with a reason.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A written external peer review report is filed with a response to every recommendation."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Ask your professional body whether it runs a peer review scheme"
                - "Agree the scope and dates with the reviewer"
                - "Prepare the records sample and governance documents"
                - "Respond in writing to each recommendation in the report"
            - name: Quality improvement project with test cycles
              description: |-
                ## Purpose
                Audit tells you there is a gap; quality improvement methods help you close it in small, fast tests rather than one big change. Running a project with a clear aim, a few measures and repeated plan, do, study, act cycles, for example on recall attendance or appointment waiting times, teaches the team a method they can reuse on any problem.

                ## Milestones
                1. A specific, measurable aim set with a date.
                2. A baseline measured and a run chart started.
                3. At least three small test cycles run and recorded.
                4. The change that worked written into a protocol and the result shared.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A quality improvement report shows the aim, a run chart with baseline and at least three recorded test cycles."
                cadence: phased
                effort_hours_estimate: "20"
              tasks:
                - "Choose one problem from the audit results or feedback themes"
                - "Write a one-sentence aim with a number and a date"
                - "Measure the baseline and start a run chart"
                - "Run and record the first small test of change"
---

# Clinical Governance and Audits

This area is for the owner or clinical lead of a healthcare practice (a medical, dental, physiotherapy, optometry, therapy or veterinary practice, or a pharmacy) who is answerable for the quality and safety of the care it gives, not only for their own patients. It starts with the foundations (a governance framework, named leads, a baseline review, incident reporting, a protocol index, safety alerts and a clinical risk register), then the monthly machinery of governance meetings, significant event reviews, results and referral safety nets, feedback and the audit programme, the skills of audit, event analysis and protocol writing, decisions about consent, chaperones, high-risk medicines and software, the events that need planning, situations such as single-handed or multi-site practice, and finally specialist work in case review, benchmarking and improvement science.

What repeats is a daily results check, weekly safety alert and referral checks, a monthly governance meeting, event review, feedback theming, protocol batch, supervision session and outcome dashboard, quarterly peer review, risk review and a report to the owners, and a yearly audit programme and governance review. The Risk register, Meeting notes, Metrics log, Purchase decision, Remediation plan and Feedback themes templates pair with the projects that keep those records. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
