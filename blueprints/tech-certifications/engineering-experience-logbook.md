---
id: tech-certifications.engineering-experience-logbook
name: Engineering Experience Logbook
description: "A running engineering experience record that registration assessors will accept: entries written as you go, mapped to competences, signed off by verifiers, with gaps found early and closed on purpose."
category: personal
version: 1.0.0
tags: [tech-certifications, engineering-experience-logbook, engineer, student, experience-record, competence, professional-registration, logbook]
author: Aurum Technology
starter_structure:
  templates:
    - person
    - habit-tracker
    - metrics-log
    - one-on-one
    - development-plan
  pillars:
    - name: Tech & Engineering Certifications
      emoji: "🏅"
      description: "Technical credentials and the exams behind them: FE and PE licensing, Chartered Engineer and Trinidad and Tobago engineering registration, PMP, PRINCE2 and Scrum, AWS, Azure and Google Cloud by level, Kubernetes and Terraform, networking and security certifications, Six Sigma belts, and coding, system design and machine-learning interviews."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Engineering Experience Logbook
          description: "Keeping a running record of engineering work for registration: projects, responsibilities, competences shown, supervisors who can verify them and gaps still to close."
          projects:
            - name: Choosing the registrations your logbook must serve
              description: |-
                ## Purpose
                A record kept for a US state PE licence looks different from one kept for UK chartership, a Trinidad and Tobago registration or a Canadian competency assessment, and most engineers end up needing more than one over a career. Deciding now which two or three bodies you are writing for lets every entry carry the details each will ask for, instead of rewriting years of notes later.

                ## Milestones
                1. A list of the registrations or licences you expect to apply for in the next ten years, in order.
                2. The body responsible for each one named, with the country or state it covers.
                3. One primary body chosen to set the structure of the logbook.
                4. The choice and the reasoning written on the first page of the logbook.

                ## Notes
                If you are unsure where you will work, pick the body with the most detailed competence framework as primary. A record that satisfies the strictest assessor usually satisfies the others.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The first page of the logbook names a primary registration body and up to two secondary ones, with one sentence on why."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every licence or registration you might apply for in the next ten years"
                - "Name the body that grants each one and the place it covers"
                - "Choose the primary body whose framework will shape the logbook"
                - "Write the choice and your reasoning on the logbook's first page"
            - name: Current experience rules check for each target body
              description: |-
                ## Purpose
                Bodies change how much experience they want, whether academic years count, what supervision means and how verification is done, and advice from a colleague who registered ten years ago may be out of date. One sitting with each body's official guidance gives you the exact rules your logbook has to prove.

                ## Milestones
                1. The current experience guidance downloaded from each target body's website, with the date checked.
                2. Minimum years, any credit for postgraduate study and supervision requirements noted for each.
                3. The competence framework or experience categories each body uses copied into the logbook.
                4. Any rule that needs a verifier to hold a particular registration highlighted.

                ## Notes
                Treat summaries on forums and in training courses as second-hand. Where they differ from the body's own guidance, the body wins.
              priority: high
              deadlineOffsetDays: 10
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page note per target body of its current experience, supervision and verification rules, each with the source and date checked."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download the experience guidance from your primary body's website today"
                - "Note the minimum years, supervision rules and any study credit allowed"
                - "Copy the body's competence or experience categories into the logbook"
                - "Highlight who is allowed to verify experience under each body's rules"
            - name: Deciding where the logbook lives
              description: |-
                ## Purpose
                Some institutions provide an online experience recording system, some engineers keep a spreadsheet, others a long document, and a few still use a paper book their employer issued. The right home is the one you will open every week, that survives a job change and that can be exported in the shape your body wants.

                ## Milestones
                1. Two or three options compared: your institution's online system, a spreadsheet and a document.
                2. Each option checked for export, backup and whether it stays yours if you leave your employer.
                3. One home chosen and created, with the first page filled in.
                4. A shortcut to the logbook placed where you start your working week.

                ## Notes
                Avoid keeping the only copy on an employer laptop or company drive. If your employer requires its own system, keep a personal summary alongside it with nothing confidential in it.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "One logbook home chosen, created outside employer-only storage and opened at least once with the first page complete."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check whether your institution offers an online experience recording tool"
                - "Compare it against a spreadsheet and a document for export and ownership"
                - "Create the logbook in the chosen home and fill in the first page"
                - "Pin a shortcut to the logbook where you start each working week"
            - name: Logbook entry template with the fields assessors ask for
              description: |-
                ## Purpose
                Assessors look for the same handful of facts in every entry: dates, employer, project, your role, what you personally did, the engineering involved, who can verify it and which competences it shows. Building those fields into one template means no entry is ever missing the detail that would make a reviewer ask a question.

                ## Milestones
                1. A template with fields for dates, employer, project, role, your actions, outcome, verifier and competences.
                2. A free-text field limited to about 300 words, so entries stay readable.
                3. The template tested by writing one real entry from last month.
                4. The tested entry read by a colleague, with any confusing field renamed.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An entry template with at least eight named fields exists and has been used for one real entry that a colleague has read."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Draft the template fields from your primary body's guidance"
                - "Add a word limit note to the free-text description field"
                - "Write one real entry from last month using the template"
                - "Ask a colleague to read the entry and say what was unclear"
            - name: Employment and role history master list
              description: |-
                ## Purpose
                Every application asks for an exact employment history, and gaps or overlapping dates are the first thing an assessor queries. A single list of every employer, job title, start and end date, line manager and main projects becomes the spine the whole logbook hangs from.

                ## Milestones
                1. Every engineering role since your degree listed with month and year for start and end.
                2. Job titles written exactly as on contracts or payslips.
                3. The line manager and main projects named for each role.
                4. Any gap longer than a month explained in a line.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete role history with exact dates, titles, managers and projects, with no unexplained gaps, sits at the front of the logbook."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Find your contracts, offer letters or payslips for every engineering role"
                - "List each role with exact start and end month and year"
                - "Add the line manager and two or three main projects for each role"
                - "Write one line explaining any gap longer than a month"
            - name: Reconstructing past experience from old records
              description: |-
                ## Purpose
                Most people start a logbook two or three years into their career, with the earliest and often most formative work unrecorded. Rebuilding those years from calendars, emails, drawing registers, timesheets and old reports, while the people involved can still be reached, rescues experience that would otherwise be lost or hard to verify.

                ## Milestones
                1. The sources for each past role identified: timesheets, calendars, drawing registers, reports.
                2. One entry written for each significant project from the reconstructed period.
                3. A likely verifier named against every reconstructed entry.
                4. Any period that cannot be reconstructed with confidence flagged honestly.

                ## Notes
                Write reconstructed entries in the past tense and mark them as reconstructed with the date written. Assessors respect honest reconstruction far more than entries that read as if written at the time when they were not.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every significant project since graduation has at least one entry, with reconstructed entries labelled and a verifier named for each."
                cadence: one-shot
                effort_hours_estimate: "12"
              tasks:
                - "Export your timesheet or calendar history for the earliest role you can reach"
                - "List the projects you worked on in each past year from those records"
                - "Write one reconstructed entry per significant project, marked as reconstructed"
                - "Name a likely verifier for each entry and note how to contact them"
            - name: Verifier and referee contact register
              description: |-
                ## Purpose
                Supervisors retire, move abroad, change email and forget what you did, and an application can stall for months waiting for a referee nobody can find. A register of everyone who could verify your work, with their registration status and current contact details, keeps every entry checkable.

                ## Milestones
                1. Every past and current supervisor listed with role, employer and dates worked together.
                2. Each person's own registration or licence status noted, where known.
                3. Current personal contact details recorded for anyone likely to move on.
                4. Each verifier linked to the logbook entries they can confirm.

                ## Notes
                Start from the **Person** template for each verifier. Ask permission before recording personal contact details, and keep the register private.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A verifier register covers every entry in the logbook, with each verifier's registration status and a contact detail checked within the last year."
                cadence: rolling
              tasks:
                - "List every supervisor you have worked under since graduation"
                - "Note each person's registration or licence status where you know it"
                - "Ask anyone likely to move on for a personal contact detail"
                - "Confirm every verifier's contact details are still current @recurring(yearly)"
            - name: Baseline gap map against the competence framework
              description: |-
                ## Purpose
                Most early-career records are heavy on technical analysis and thin on management, communication, commercial and professional commitment. Scoring your existing entries against each competence once gives a map of where you are strong, where you are thin and what to ask your manager for next.

                ## Milestones
                1. Each competence or experience category in your primary framework listed in a grid.
                2. Every existing entry marked against the competences it genuinely shows.
                3. Each competence rated as well evidenced, thin or missing.
                4. The three biggest gaps written down with one idea each for closing them.

                ## Notes
                For UK chartership the five areas A to E in the competence standard are the usual grid. Other bodies use their own categories; use whichever your primary body publishes.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A grid shows every competence rated well evidenced, thin or missing, with the three biggest gaps named and one closing idea each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Lay out your primary body's competences as rows in a grid"
                - "Mark each existing entry against the competences it truly shows"
                - "Rate every competence as well evidenced, thin or missing"
                - "Write down the three biggest gaps with one closing idea each"
            - name: Confidentiality and employer permission check
              description: |-
                ## Purpose
                Logbooks describe real projects, and many employers have rules about naming clients, quoting contract values or copying drawings outside the company. Checking the policy and agreeing what you can record keeps the logbook useful without breaching a confidentiality clause or a client agreement.

                ## Milestones
                1. Your employment contract and the company information policy read for anything on outside records.
                2. A short rule written for what you will and will not record: names, values, drawings.
                3. Your manager told you keep an experience record and asked whether any project needs extra care.
                4. Any sensitive client or defence project described in anonymised terms.

                ## Notes
                A good default is to describe the type of client and scale of work rather than names and exact figures. Assessors need your role and judgement, not commercial secrets.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written recording rule exists, your manager knows about the logbook, and sensitive projects are anonymised."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your contract and information policy for rules on outside records"
                - "Write a three-line rule for what you will and will not record"
                - "Tell your manager about the logbook and ask about sensitive projects"
                - "Anonymise any existing entry that names a client or contract value"
            - name: Backup and version history for the logbook
              description: |-
                ## Purpose
                Years of entries in a single file on one laptop is a record waiting to be lost to a theft, a failed drive or an employer wiping a device when you leave. Two independent copies and dated versions mean you can also show an assessor when an entry was first written.

                ## Milestones
                1. The logbook stored in a personal location with automatic version history.
                2. A second copy kept somewhere independent of the first.
                3. A dated export saved each month.
                4. A restore tested once by opening an old version.
              priority: medium
              frontmatter:
                mode: building
                output_kind: habit
                success_criteria: "Two independent copies of the logbook exist and a monthly dated export has been saved for at least three months running."
                cadence: rolling
              tasks:
                - "Move the logbook to personal storage with version history switched on"
                - "Set up a second copy in a separate location"
                - "Save a dated export of the logbook @recurring(monthly:8)"
                - "Open an older version once to prove a restore works"
            - name: Weekly ten-minute work capture
              description: |-
                ## Purpose
                Detail fades within weeks: by the end of a quarter few people can say which calculation they checked, which meeting they chaired or which decision they made. Ten minutes at the end of each week jotting what you did, decided and learned gives the monthly write-up something real to work from.

                ## Milestones
                1. A fixed ten-minute slot in the calendar at the end of each working week.
                2. Notes kept in one place with the week's date at the top.
                3. At least three items captured each week: a task, a decision and something learned.
                4. Eight consecutive weeks captured without a gap.

                ## Notes
                Start from the **Habit tracker** template. Bullet points are enough here; polish belongs in the monthly write-up.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Weekly capture notes exist for at least eight consecutive weeks, each with a task, a decision and something learned."
                cadence: rolling
              tasks:
                - "Block ten minutes at the end of your working week in the calendar"
                - "Capture what you did, decided and learned this week @recurring(weekly:fri)"
                - "Note the names of anyone who saw the work alongside each item"
                - "Count your unbroken weeks of capture at the end of each month"
            - name: Monthly logbook entry write-up
              description: |-
                ## Purpose
                Weekly notes are raw material; the entry an assessor reads is a short, first-person account of what you did, why and what came of it. Turning a month of notes into one or two proper entries keeps the logbook current and means no single sitting is ever more than an hour.

                ## Milestones
                1. One or two entries written each month from the weekly notes.
                2. Every entry using the template fields, with a verifier named.
                3. Competences tagged on each entry.
                4. Twelve months of entries with no month missing.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The logbook holds at least one complete, competence-tagged entry for each of the last twelve months."
                cadence: rolling
              tasks:
                - "Turn last month's weekly notes into one or two logbook entries @recurring(monthly:3)"
                - "Tag each new entry with the competences it shows"
                - "Name the verifier for each new entry before saving it"
                - "Mark the month as done on the front page of the logbook"
            - name: Quarterly supervisor sign-off
              description: |-
                ## Purpose
                Supervisors can confirm last quarter's work in five minutes while it is fresh, but asked to verify three years at once they hesitate, misremember or decline. A short sign-off each quarter turns verification from a favour at application time into a routine already done.

                ## Milestones
                1. The quarter's entries sent to your supervisor in one short summary.
                2. A signature, initials or written confirmation recorded against each entry.
                3. Any corrections the supervisor suggests made and noted.
                4. Four consecutive quarters signed off.

                ## Notes
                Ask what format your supervisor prefers: some will sign a printed page, others reply to an email. Keep the confirmation with the entries it covers.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every entry older than three months carries a supervisor confirmation, with four consecutive quarters signed off."
                cadence: cyclic
              tasks:
                - "Ask your supervisor which sign-off format suits them"
                - "Send the quarter's entries to your supervisor for confirmation @recurring(quarterly)"
                - "Record each confirmation against the entries it covers"
                - "Make any corrections your supervisor suggests and note them"
            - name: Quarterly competence gap review
              description: |-
                ## Purpose
                Gap maps drawn once go stale as soon as your role changes. Rescoring the grid every quarter shows whether the gaps are closing, and gives you a specific ask for your next conversation with your manager.

                ## Milestones
                1. The competence grid updated with the quarter's entries.
                2. Movement on each of the three biggest gaps noted.
                3. One concrete ask for the next quarter written down.
                4. The ask raised with your manager within two weeks.

                ## Notes
                Start from the **Development plan** template to hold the asks and what came of them.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "The competence grid has been rescored in each of the last four quarters, each with a written ask raised with your manager."
                cadence: cyclic
              tasks:
                - "Rescore the competence grid with this quarter's entries @recurring(quarterly)"
                - "Note whether each of the three biggest gaps moved"
                - "Write one specific ask for next quarter's work"
                - "Raise the ask at your next meeting with your manager"
            - name: Evidence file linked to each entry
              description: |-
                ## Purpose
                An assessor or interviewer may ask to see the calculation, the drawing you checked or the report you wrote, and finding it three years later is hard. Keeping a reference to each piece of evidence, or a permitted copy, next to the entry makes every claim easy to back up.

                ## Milestones
                1. A folder or index for evidence, organised by entry.
                2. Each entry pointing to at least one document reference, drawing number or report title.
                3. Permitted copies kept only where the employer allows it.
                4. Evidence checked against the newest entries each month.

                ## Notes
                Where you cannot keep copies, record the document number, revision and where it is held. That is usually enough for a verifier to confirm it exists.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every logbook entry from the last year points to at least one document reference, drawing number or permitted copy."
                cadence: rolling
              tasks:
                - "Set up an evidence index with one row per logbook entry"
                - "Add the document number and revision for each piece of evidence"
                - "Check this month's entries each have an evidence reference @recurring(monthly:12)"
                - "Confirm with your manager which documents you may keep copies of"
            - name: Experience duration tally by category
              description: |-
                ## Purpose
                Several licensing boards count experience in months or years against categories such as design, construction or operations, and some only accept time after graduation or under a qualified supervisor. A running tally by category shows exactly how far you are from the minimum and stops a surprise at application time.

                ## Milestones
                1. Every role split into months against your primary body's categories.
                2. Qualifying and non-qualifying time separated, with the reason noted.
                3. A running total kept up to date each month.
                4. A projected date when the minimum will be met.

                ## Notes
                Start from the **Metrics log** template. Count conservatively: an assessor who finds one inflated period will doubt the rest.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A tally shows qualifying months by category for every role, updated within the last month, with a projected date for meeting the minimum."
                cadence: rolling
              tasks:
                - "Split each past role into months against your body's experience categories"
                - "Mark any period that may not qualify and note why"
                - "Update the running tally of qualifying months @recurring(monthly:27)"
                - "Work out the date you expect to meet the minimum"
            - name: Mentor conversations on the logbook
              description: |-
                ## Purpose
                Registered engineers reading your entries will spot weak descriptions, overclaimed responsibility and missing competences years before an assessor does. A short monthly conversation with a mentor, focused on two or three recent entries, is the fastest way to improve how you write about your work.

                ## Milestones
                1. A mentor agreed, ideally registered with your primary body.
                2. A regular slot set for a short conversation most months.
                3. Two or three entries reviewed at each conversation, with comments recorded.
                4. Changes made to entries after each conversation.

                ## Notes
                Start from the **1:1** template for the conversation notes. Many institutions run mentoring schemes for members working toward registration.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Notes from at least eight mentor conversations in a year exist, each naming the entries reviewed and changes made."
                cadence: rolling
              tasks:
                - "Ask your institution whether it runs a mentoring scheme"
                - "Agree a regular slot with a mentor who is already registered"
                - "Send two recent entries to your mentor before each meeting @recurring(monthly:18)"
                - "Edit the entries after each conversation and note what changed"
            - name: Annual logbook audit and year summary
              description: |-
                ## Purpose
                Once a year the logbook needs reading as a whole, the way an assessor will: does it show growth, are the dates consistent, is anything overclaimed or missing. A yearly audit with a one-page summary also gives you the paragraph you will need for appraisals and applications.

                ## Milestones
                1. The whole year's entries read in one sitting.
                2. Dates, verifiers and competence tags checked for consistency.
                3. A one-page summary of the year's experience and growth written.
                4. Fixes listed and made within a month.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A dated one-page year summary exists for each year in the logbook, with audit fixes recorded as done."
                cadence: cyclic
              tasks:
                - "Read the past year's entries in one sitting @recurring(yearly)"
                - "Check dates, verifiers and tags for gaps or contradictions"
                - "Write a one-page summary of the year's experience and growth"
                - "List the fixes and finish them within a month"
            - name: Project close-out entry routine
              description: |-
                ## Purpose
                The end of a project is when you can see the whole of your contribution and its outcome, and it is also when the team scatters. Writing a close-out entry within a few weeks of handover captures the result, the lessons and the verifier before everyone moves on.

                ## Milestones
                1. A close-out entry written for every project that finished.
                2. The outcome stated in measurable terms where possible.
                3. Two or three lessons recorded in your own words.
                4. The project lead asked to verify the close-out entry before they move on.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every project that closed in the last year has a close-out entry with outcome, lessons and a verifier's confirmation."
                cadence: rolling
              tasks:
                - "Check your project list for anything that closed this month @recurring(monthly:24)"
                - "Write the close-out entry with outcome and lessons"
                - "Ask the project lead to confirm the entry before they move on"
                - "Link the close-out entry to the earlier entries on the same project"
            - name: Responsibility level tracking across entries
              description: |-
                ## Purpose
                Assessors want to see you move from assisting, to doing under supervision, to working independently, to leading and checking others. Tagging each entry with a level of responsibility makes that progression visible and shows where you are stuck at the same level for too long.

                ## Milestones
                1. A simple four-step scale written: assisted, did under supervision, did independently, led or checked.
                2. Every entry tagged with one level.
                3. A chart or count of levels by quarter.
                4. Any competence stuck at the lowest level for a year flagged for action.

                ## Notes
                Be honest with the scale. Leading a task is not the same as being the only person in the room; say who reviewed your work.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Every entry carries a responsibility level, and a quarterly count shows how the mix has changed over time."
                cadence: cyclic
              tasks:
                - "Write a four-step responsibility scale at the front of the logbook"
                - "Tag every existing entry with one responsibility level"
                - "Count entries by responsibility level for the quarter @recurring(quarterly)"
                - "Flag any competence stuck at the lowest level for a year"
            - name: Writing entries about your own contribution
              description: |-
                ## Purpose
                The commonest weakness in experience records is "we": the team designed, the team decided, and the assessor cannot tell what you did. Practising first-person entries that separate your actions from the team's is the single most useful writing skill for registration.

                ## Milestones
                1. Five existing entries rewritten in the first person.
                2. Each rewritten entry stating clearly what others did and what you did.
                3. A colleague able to say from each entry exactly what your part was.
                4. A short checklist of first-person habits pinned to the template.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five entries rewritten in the first person, each passing a colleague's test of saying exactly what your part was."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Highlight every use of we in your five most recent entries"
                - "Rewrite each highlighted sentence to say what you personally did"
                - "Ask a colleague to describe your part from each rewritten entry"
                - "Pin a short first-person checklist to the entry template"
            - name: Describing engineering judgement and decisions
              description: |-
                ## Purpose
                Registration is about judgement, not activity: the assessor wants to know which options you weighed, which assumption you challenged and why you chose what you did. Learning to write the decision, the alternatives and the reason turns a task list into evidence of an engineer.

                ## Milestones
                1. A short pattern written for decision entries: situation, options, choice, reason, result.
                2. Three past decisions written up in that pattern.
                3. At least one entry describing a time you changed your mind on evidence.
                4. Your mentor's view on whether the judgement comes across recorded.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three decision entries exist in the options, choice and reason pattern, reviewed by your mentor."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a five-part pattern for decision entries in the template notes"
                - "Pick three past decisions where you weighed real alternatives"
                - "Write each one up using the five-part pattern"
                - "Ask your mentor whether your judgement comes across clearly"
            - name: Quantifying scope, scale and outcome in entries
              description: |-
                ## Purpose
                "Designed a drainage system" says little; a catchment area, a design storm, a budget, a schedule saving or a defect rate says a lot. Practising adding real numbers to entries, within your confidentiality rule, makes the scale of your work clear to someone who has never seen the site.

                ## Milestones
                1. A list of the measures that matter in your discipline, such as loads, flows, capacity, cost or schedule.
                2. Ten entries revised to include at least one real figure each.
                3. Ranges or orders of magnitude used where exact figures are confidential.
                4. Outcomes stated against the original target where one existed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten entries each carry at least one real figure for scope, scale or outcome, within your confidentiality rule."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the five measures that best show scale in your discipline"
                - "Add one real figure to each of your ten most recent entries"
                - "Replace confidential figures with ranges or orders of magnitude"
                - "State the outcome against the original target where there was one"
            - name: Mapping one entry to several competences honestly
              description: |-
                ## Purpose
                Good entries often show two or three competences, but tagging every entry with everything tells the assessor you have not thought about it. Learning to justify each tag with a sentence from the entry keeps the map believable and makes the final application faster to assemble.

                ## Milestones
                1. Each competence tag on ten entries backed by a specific sentence in the entry.
                2. Tags with no supporting sentence removed.
                3. No entry carrying more than three or four tags.
                4. The competence grid rescored after the clean-up.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Ten entries have every competence tag justified by a sentence in the text, and none carries more than four tags."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick ten entries with the most competence tags"
                - "Underline the sentence that justifies each tag"
                - "Remove any tag that has no supporting sentence"
                - "Rescore the competence grid after the clean-up"
            - name: Recording health, safety and risk responsibility
              description: |-
                ## Purpose
                Every engineering registration expects you to show you identify hazards and manage risk, yet many graduates leave safety out because it felt like someone else's job. Recording risk assessments, permits, design changes made for safety and times you stopped work shows the assessor a professional, not just a technician.

                ## Milestones
                1. Past work searched for risk assessments, design reviews, permits and safety observations you took part in.
                2. At least three entries that describe your own safety or risk contribution.
                3. The relevant safety process named in each, such as a design risk register, permit to work or management of change.
                4. Any gap in safety evidence raised with your manager.

                ## Notes
                Never exaggerate a safety role. If you contributed to a HAZOP rather than led it, say so and describe what you raised.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three entries describe your own contribution to hazard identification or risk management, each naming the process used."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Search your past work for risk assessments and safety reviews you joined"
                - "Write three entries describing your own safety or risk contribution"
                - "Name the safety process used in each entry"
                - "Ask your manager for a task that adds safety responsibility if evidence is thin"
            - name: Recording ethics, sustainability and professional conduct
              description: |-
                ## Purpose
                Codes of conduct and sustainability now feature in most competence frameworks, and they are the part candidates find hardest to evidence. Learning to record the times you raised a concern, chose a lower-carbon option or declined something outside your competence fills a section that is otherwise left blank.

                ## Milestones
                1. Your body's code of conduct read and its main duties listed.
                2. Two or more situations from your work identified where a duty applied.
                3. An entry written for each, describing what you did and why.
                4. Any sustainability decision you contributed to recorded with its effect.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least two entries describe a professional conduct or sustainability situation, each linked to a named duty in your body's code."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Read your body's code of conduct and list its main duties"
                - "Think of two situations at work where one of those duties applied"
                - "Write an entry for each describing what you did and why"
                - "Record any sustainability choice you influenced and what it changed"
            - name: Recording communication, leadership and teamwork
              description: |-
                ## Purpose
                Chairing a design review, presenting to a client, training a technician or resolving a clash between contractors all count, but they rarely make it into a technical engineer's notes. Learning to capture these as proper entries closes the interpersonal gap that holds many applications back.

                ## Milestones
                1. A list of meetings you chaired, presentations given and people you trained in the last year.
                2. Three entries written about communication or leadership, with audience and outcome.
                3. At least one entry about a disagreement and how it was resolved.
                4. A verifier who saw each situation named.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three or more entries describe communication or leadership with audience, outcome and a named witness, including one disagreement resolved."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List the meetings, presentations and training you led this past year"
                - "Write three entries about communication or leadership with the outcome"
                - "Write one entry about a disagreement and how it was resolved"
                - "Name a witness who can verify each situation"
            - name: Plain-language summaries for assessors outside your field
              description: |-
                ## Purpose
                Your assessor may be a structural engineer reading about control systems, or a manufacturing engineer reading about tunnels. Practising one-paragraph summaries that a capable engineer from another discipline can follow stops jargon from hiding the quality of your work.

                ## Milestones
                1. A one-paragraph plain-language summary written for each major project.
                2. Acronyms spelled out or removed.
                3. Each summary tested on an engineer from a different discipline.
                4. Feedback used to rewrite the two least clear summaries.

                ## Notes
                Ask the agent to flag jargon and unexplained acronyms in a summary, then rewrite it yourself so it stays in your voice.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every major project has a plain-language summary that an engineer from another discipline has read and understood."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Write a one-paragraph summary of your biggest project for a non-specialist"
                - "Ask the agent to flag jargon and acronyms in the summary"
                - "Show the summary to an engineer from a different discipline"
                - "Rewrite the two least clear summaries using their feedback"
            - name: Asking for work that closes a competence gap
              description: |-
                ## Purpose
                Gaps rarely close by waiting: a design engineer without site time, or a site engineer who has never managed a budget, usually has to ask. Turning the gap map into a specific, reasonable request to your manager, with a suggested task and time frame, is often all it takes.

                ## Milestones
                1. The single most important gap chosen from the gap map.
                2. Two or three realistic tasks or rotations that would close it identified.
                3. A short written request prepared, linking the task to team needs.
                4. The request made and the answer recorded with a follow-up date.

                ## Notes
                Managers say yes more often when the ask also helps the team, such as covering a colleague's leave or taking a site inspection off someone's list.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A specific request to close your biggest gap has been made to your manager, with the answer and a follow-up date recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Choose the single most important gap from your gap map"
                - "List two or three tasks or rotations that would close it"
                - "Write a short request linking the task to what the team needs"
                - "Raise the request with your manager and note the answer"
            - name: Rewriting weak entries into strong ones
              description: |-
                ## Purpose
                Early entries tend to be one-line task lists that would not survive an assessor's first read. Working through the weakest ten with a clear before and after shows you what good looks like and lifts the whole record in a few evenings.

                ## Milestones
                1. The ten weakest entries identified by length, vagueness or missing fields.
                2. Each rewritten with your role, judgement, scale and outcome.
                3. Before and after versions kept for one entry as a personal example.
                4. The rewritten entries resent to their verifiers if the meaning changed.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten weak entries rewritten with role, judgement, scale and outcome, with verifiers reconfirming any whose meaning changed."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Pick the ten shortest or vaguest entries in the logbook"
                - "Rewrite each with your role, judgement, scale and outcome"
                - "Keep one before and after pair as your own example"
                - "Resend any entry whose meaning changed to its verifier"
            - name: Balancing design, delivery and operations experience
              description: |-
                ## Purpose
                Some bodies and assessors expect a spread across the life of an asset, and a record that is all office analysis or all site supervision can raise questions about breadth. Measuring the balance in your own record helps you decide whether to seek a secondment, a site visit programme or more design responsibility.

                ## Milestones
                1. Each entry classed as design, delivery or construction, operations or maintenance, or management.
                2. The months in each class totalled.
                3. The balance compared with what your primary body's guidance expects.
                4. A decision recorded on whether to seek different work, and what.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The share of experience in design, delivery, operations and management is calculated and a written decision on rebalancing is recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Class each entry as design, delivery, operations or management"
                - "Total the months in each class"
                - "Compare the balance with what your body's guidance describes"
                - "Record whether you will seek different work and what kind"
            - name: Consolidating duplicate and overlapping entries
              description: |-
                ## Purpose
                Long projects produce dozens of similar entries, and an assessor reading twelve versions of the same task concludes you did one thing for a year. Merging repeats into a few well-written entries that show progression makes the record shorter and stronger.

                ## Milestones
                1. Entries grouped by project and by type of task.
                2. Repeats merged into one entry per stage of the project.
                3. Each merged entry showing how your role grew over the period.
                4. Originals kept in an archive section rather than deleted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "No project in the logbook has more than one entry per stage covering the same task, with originals archived."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Group entries by project and by type of task"
                - "Merge repeated entries into one per project stage"
                - "Rewrite each merged entry to show how your role grew"
                - "Move the original entries to an archive section"
            - name: Plan for a verifier who can no longer be reached
              description: |-
                ## Purpose
                Losing a supervisor who has died, emigrated, fallen out with you or left the profession can leave years of work unverified. Most bodies allow some alternative, such as another senior colleague who saw the work or documentary evidence, but you need to set it up before you apply.

                ## Milestones
                1. Every entry whose verifier is unreachable or unsuitable listed.
                2. Your body's rules on alternative verifiers checked.
                3. A replacement verifier or documentary evidence identified for each.
                4. The replacement verifier asked and their agreement recorded.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every entry with an unreachable verifier has a named replacement who has agreed, or documentary evidence the body accepts."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List every entry whose verifier cannot be reached"
                - "Check your body's guidance on alternative verifiers"
                - "Identify a senior colleague or document that could stand in for each"
                - "Ask each replacement verifier and record their answer"
            - name: Deciding when the record is ready to submit
              description: |-
                ## Purpose
                Some engineers apply too early and are deferred; many more wait years longer than they needed to because the logbook never felt finished. A clear readiness test, applied honestly with a mentor, turns a vague feeling into a decision with a date.

                ## Milestones
                1. The minimum experience rule met on the duration tally.
                2. Every competence rated at least adequately evidenced on the grid.
                3. All entries verified or with an agreed alternative.
                4. Your mentor's view recorded, and an apply or wait decision made with a date.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written apply or wait decision exists, based on the duration tally, competence grid, verification status and your mentor's view."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the duration tally against the minimum experience rule"
                - "Confirm every competence on the grid is at least adequately evidenced"
                - "Count entries still waiting for verification"
                - "Agree an apply or wait decision with your mentor and write down the date"
            - name: Annual appraisal prepared from the logbook
              description: |-
                ## Purpose
                An up-to-date logbook is the best appraisal preparation there is: specific achievements, dates and evidence are already written. Using it for the yearly review also lets you ask for the next year's work in competence terms your manager can act on.

                ## Milestones
                1. The year summary and competence grid printed or shared before the appraisal.
                2. Three achievements chosen with evidence from the logbook.
                3. One development ask linked to a named competence gap.
                4. The agreed objectives copied back into the logbook.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The appraisal used the logbook's year summary, and the agreed objectives are recorded in the logbook against named competences."
                cadence: cyclic
              tasks:
                - "Pull the year summary and competence grid before your appraisal @recurring(yearly)"
                - "Choose three achievements with evidence from the logbook"
                - "Prepare one development ask linked to a named competence gap"
                - "Copy the agreed objectives into the logbook after the meeting"
            - name: End-of-placement sign-off for students
              description: |-
                ## Purpose
                Summer internships, co-op terms and years in industry can count toward registration in some systems and will certainly help later, but only if someone signs for the work before you leave. Planning the sign-off from the start of the placement means you walk out with a verified record rather than a vague reference.

                ## Milestones
                1. Your university's placement record requirements and any professional body requirements noted.
                2. Placement entries written weekly through the placement.
                3. A sign-off meeting booked with your placement supervisor before your last week.
                4. A signed record and the supervisor's contact details kept in the logbook.

                ## Notes
                Ask your supervisor whether they are registered with an engineering body. A registered supervisor's signature carries more weight later.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A placement record signed by your supervisor before your last day, with their registration status and contact details recorded."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your placement tutor what record the university needs"
                - "Book a sign-off meeting with your supervisor before your last week"
                - "Send your supervisor the placement entries a week before the meeting"
                - "File the signed record and supervisor contact details in the logbook"
            - name: Graduate scheme rotation reviews
              description: |-
                ## Purpose
                Graduate schemes often rotate you through three or four teams in two years, and each rotation has a different supervisor who will be hard to find later. A short review and sign-off at the end of each rotation keeps the record verified and lets you steer the next rotation toward your gaps.

                ## Milestones
                1. Entries for the rotation written and tagged before it ends.
                2. A review with the rotation supervisor booked in the final two weeks.
                3. Sign-off recorded for all the rotation's entries.
                4. Your preference for the next rotation stated in competence terms.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every completed rotation has signed-off entries and a recorded preference for the next one."
                cadence: cyclic
              tasks:
                - "Check the end date of your current rotation"
                - "Finish and tag the rotation's entries two weeks before it ends"
                - "Book a review with the rotation supervisor in the final fortnight"
                - "Tell the scheme manager which gap the next rotation should close"
            - name: Recording a shutdown, commissioning or major site event
              description: |-
                ## Purpose
                Plant turnarounds, commissioning campaigns and major pours can pack months of experience into a few intense weeks, and you will be too busy to write anything down while it happens. Planning a quick daily note during the event and a full write-up straight after turns it into some of the strongest entries in your record.

                ## Milestones
                1. A pocket notebook or phone note set aside for the event.
                2. A two-line note captured each shift or day.
                3. A full entry written within two weeks of the event ending.
                4. The event lead asked to verify the entry while the team is still together.

                ## Notes
                Follow site rules on phones and photography. Never photograph plant or drawings without permission.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A full, verified entry for the event written within two weeks of its end, drawn from daily notes kept during it."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Set aside a notebook or phone note for the event"
                - "Capture two lines at the end of each shift during the event"
                - "Write the full entry within two weeks of the event ending"
                - "Ask the event lead to verify the entry before the team disperses"
            - name: Pre-submission read-through with a registered engineer
              description: |-
                ## Purpose
                A fresh, experienced reader who did not watch you do the work will see the record the way an assessor will. Booking a full read-through with a registered engineer, a few months before you plan to apply, leaves time to fix what they find.

                ## Milestones
                1. A registered engineer, ideally an assessor or reviewer for your body, agreed as reader.
                2. The full record or its summary sent with two weeks to read it.
                3. Their comments received in writing or noted during a meeting.
                4. Every comment answered with a change or a reason not to.

                ## Notes
                Many institutions run application workshops or reviewer schemes. Ask before paying for a private service.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "A registered engineer has read the full record and every one of their comments has a recorded response."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Ask your institution whether it runs reviewer or workshop schemes"
                - "Agree a date with a registered engineer to read your record"
                - "Send the record two weeks before the meeting"
                - "Answer every comment with a change or a reason"
            - name: Student logbook from coursework and design projects
              description: |-
                ## Purpose
                Students rarely think of a capstone design project, a lab rig or an engineering society competition as experience, but they are the first evidence of design, teamwork and judgement, and some bodies give credit for them. Starting a simple logbook in your penultimate year means you graduate with entries, not just a transcript.

                ## Milestones
                1. A logbook started using the same template you will use after graduating.
                2. Entries written for each group design project, lab investigation and competition.
                3. Your role in each team project stated separately from the group's.
                4. A lecturer or project supervisor named as verifier for each entry.

                ## Notes
                Keep academic and professional entries labelled. Assessors read them differently, but both help.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A student logbook holds an entry for every group design project and competition, each with a named academic verifier."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Set up your logbook using the graduate entry template"
                - "List the design projects, labs and competitions from the last two years"
                - "Write one entry per item stating your own role in the team"
                - "Ask each project supervisor whether they would verify the entry"
            - name: Weekly logging through an internship or co-op term
              description: |-
                ## Purpose
                Twelve weeks of internship go past quickly, and by the final week most students can only remember the last project. A short weekly entry, written every Thursday afternoon while you still have access to the work, gives you material for the sign-off, your CV and later registration.

                ## Milestones
                1. A weekly slot agreed that does not clash with placement duties.
                2. An entry written for every week of the placement.
                3. Each entry noting the engineer you worked with that week.
                4. A placement summary written in the final week from the weekly entries.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A weekly entry exists for every week of the placement, plus a summary written in the final week."
                cadence: phased
              tasks:
                - "Block a short slot each week of the placement for writing"
                - "Write this week's placement entry @recurring(weekly:thu)"
                - "Note the engineer you worked with each week"
                - "Write a placement summary in the final week from the weekly entries"
            - name: Changing employer without losing the record
              description: |-
                ## Purpose
                Moving jobs is the moment logbooks are lost: access to systems ends on your last day, supervisors get busy, and the new employer has different priorities. A short exit routine in your notice period secures sign-offs, contact details and permitted evidence before the door closes.

                ## Milestones
                1. All entries for the outgoing role written and up to date.
                2. Supervisor sign-off obtained for every entry not yet verified.
                3. Personal contact details collected from verifiers who agree.
                4. A personal copy of the logbook confirmed outside employer systems.

                ## Notes
                Do not copy company files to personal storage on your way out unless you have written permission. Record document references instead.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before the last day, every entry for the outgoing role is verified, verifier contacts are held privately and the logbook is outside employer systems."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Bring every entry for the current role up to date in your notice period"
                - "Ask your supervisor to sign off all unverified entries before you leave"
                - "Collect personal contact details from verifiers who agree"
                - "Confirm your logbook copy sits outside employer systems"
            - name: Career break and part-time work in the record
              description: |-
                ## Purpose
                Parental leave, caring, illness or part-time hours are common and most bodies make allowance for them, but an unexplained gap or a part-time year counted as full time will be queried. Recording breaks and hours honestly, and any engineering activity during a break, keeps the record accurate and fair to you.

                ## Milestones
                1. Each break recorded with dates and a short neutral reason.
                2. Part-time periods recorded with the hours or fraction worked.
                3. The duration tally adjusted to count part-time time as your body's guidance says.
                4. Any engineering activity during the break, such as volunteering or study, recorded.

                ## Notes
                You do not need to give personal detail about a break. A neutral line such as parental leave or career break is usually enough.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every break and part-time period appears in the role history with dates and hours, and the duration tally reflects them."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Add each career break to the role history with dates and a neutral reason"
                - "Record the hours or fraction worked for every part-time period"
                - "Adjust the duration tally to match your body's part-time rules"
                - "Log any volunteering or study done during a break"
            - name: Experience gained abroad or across borders
              description: |-
                ## Purpose
                Engineers often work in one country and register in another, for example graduating in Trinidad and Tobago, working on a project in Guyana and registering in Canada or the UK. Recording jurisdiction, local codes used and the registration of each verifier makes foreign experience easier for a different body to accept.

                ## Milestones
                1. The country, governing codes and client type recorded for each overseas entry.
                2. Each overseas verifier's registration and the body that holds it noted.
                3. Documents in other languages flagged for translation if needed.
                4. Your target body's rules on foreign experience checked and noted.
              priority: medium
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "Every overseas entry records the country, codes used and verifier's registration, and your target body's foreign experience rules are noted."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Add the country and governing codes to each overseas entry"
                - "Note which body each overseas verifier is registered with"
                - "Check your target body's guidance on experience gained abroad"
                - "Flag any document that will need certified translation"
            - name: Verification plan for consulting and self-employed work
              description: |-
                ## Purpose
                Freelance and sole-practice engineers have no line manager to sign their record, and some bodies are cautious about self-verified experience. Arranging verification through clients' engineers, peer reviewers or a checking engineer gives that work the same weight as employed time.

                ## Milestones
                1. Every self-employed engagement listed with client, scope and dates.
                2. A suitable verifier identified for each: a client's engineer, a peer reviewer or a checker.
                3. Contracts, invoices or deliverable references kept as supporting evidence.
                4. Your body's rules on self-employed experience checked.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Every self-employed engagement has a named independent verifier and a document reference, checked against your body's rules."
                cadence: rolling
              tasks:
                - "List every freelance or consulting engagement with client and dates"
                - "Name an independent engineer who could verify each engagement"
                - "Record a contract or deliverable reference for each one"
                - "Check your body's rules on self-employed experience"
            - name: Research and postgraduate work recorded as experience
              description: |-
                ## Purpose
                A doctorate or research post can count toward registration in some systems, but only the parts that look like engineering practice: specifying equipment, managing a budget, supervising students, working with industry partners. Recording those parts in practice terms rather than academic ones lets an assessor see the engineer behind the thesis.

                ## Milestones
                1. Research activity split into engineering practice and pure research.
                2. Entries written for the practice parts in the same template as industry work.
                3. Industry partners or technical staff named as verifiers where possible.
                4. Your body's rules on research experience checked and noted.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Research years are represented by practice-focused entries with named verifiers, checked against your body's rules."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Split your research work into practice and pure research activities"
                - "Write entries for the practice activities in the standard template"
                - "Name an industry partner or technician as verifier where you can"
                - "Check how your body treats research experience"
            - name: One logbook serving two registration bodies
              description: |-
                ## Purpose
                An engineer aiming for both a US state licence and UK chartership, or a national registration and an international one, can keep one logbook rather than two if every entry carries both sets of tags. A crosswalk between the two frameworks keeps the double tagging consistent and saves weeks at application time.

                ## Milestones
                1. A crosswalk table matching each competence or category in one framework to the other.
                2. A second tag field added to the entry template.
                3. Existing entries double-tagged using the crosswalk.
                4. Both bodies' rules rechecked once a year for changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A crosswalk table exists and every entry carries tags for both target bodies."
                cadence: rolling
              tasks:
                - "Draft a crosswalk between your two bodies' frameworks"
                - "Add a second competence tag field to the entry template"
                - "Double-tag existing entries using the crosswalk"
                - "Recheck both bodies' experience rules for changes @recurring(yearly)"
            - name: Logbook export pack for an application
              description: |-
                ## Purpose
                Each body asks for experience in its own shape: an experience record form, a competence report, a list of projects with verifier details. Building an export pack from the logbook, with the right subset of entries and the right word counts, makes the application itself a matter of days rather than months.

                ## Milestones
                1. The target body's current form or report format obtained.
                2. The strongest entries for each section selected from the logbook.
                3. Entries edited to the body's word limits and structure.
                4. Verifier details checked for every entry in the pack.
              priority: medium
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete export pack in the body's current format, within its word limits, with verified details for every entry included."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Download the target body's current experience form or report guidance"
                - "Select the strongest entries for each section of the form"
                - "Edit the selected entries to the body's word limits"
                - "Check verifier details for every entry in the pack"
            - name: Verifying graduates' logbook entries as a supervisor
              description: |-
                ## Purpose
                Once registered, you will be asked to sign other people's records, and your signature carries your professional reputation. A consistent way of reading, questioning and confirming entries protects you and helps the graduate write a stronger record.

                ## Milestones
                1. Your body's guidance for verifiers or supervisors read.
                2. A short checklist for what you check before signing.
                3. A regular slot for reviewing graduates' entries.
                4. A record kept of what you signed and when.

                ## Notes
                Only confirm what you saw or can check. If an entry overstates the graduate's role, say so kindly and ask for a rewrite before signing.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "A verifier checklist exists, and a record shows every entry you signed with the date and what you checked."
                cadence: rolling
              tasks:
                - "Read your body's guidance for people verifying experience"
                - "Write a short checklist of what you check before signing"
                - "Review your graduates' pending entries @recurring(monthly:15)"
                - "Keep a record of each entry you signed and the date"
            - name: Running a logbook programme for a graduate cohort
              description: |-
                ## Purpose
                Teams with several graduates see the same weaknesses repeated: late entries, team-voice writing, verifiers who have left. A light programme with a shared template, a quarterly writing workshop and a tracker of each graduate's progress raises registration rates and makes the team's development visible to leadership.

                ## Milestones
                1. A shared entry template agreed for the cohort.
                2. A tracker showing each graduate's entries, sign-offs and gaps.
                3. A quarterly workshop held on one writing skill.
                4. A yearly report to leadership on progress toward registration.

                ## Notes
                Keep each graduate's logbook their own property. The programme tracks progress, not content, unless the graduate chooses to share.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A cohort tracker exists, at least four quarterly workshops have been held, and a yearly progress report has gone to leadership."
                cadence: cyclic
              tasks:
                - "Agree a shared entry template with the graduates in your team"
                - "Set up a tracker of each graduate's entries, sign-offs and gaps"
                - "Run a short workshop on one logbook writing skill @recurring(quarterly)"
                - "Send leadership a yearly report on progress toward registration"
---

# Engineering Experience Logbook

This area is for engineers and engineering students who want their experience written down properly while it is still fresh, so that a licence, chartership or national registration application later is an export rather than an archaeology dig. It starts with foundations (which bodies the record must satisfy, where it lives, the entry template, your role history, the verifier register and a first gap map), moves through the weekly and monthly writing machinery, the skills of writing entries an assessor trusts, decisions about balance and readiness, dated events such as appraisals and placement sign-offs, variants for students, job changes, career breaks, work abroad and self-employment, and finishes with dual registration and supervising other people's logbooks.

The rhythm is a ten-minute weekly capture, a monthly write-up with evidence filed and hours tallied, a mentor conversation most months, quarterly sign-offs, gap and responsibility reviews, and a yearly audit. The Person, Habit tracker, Metrics log, 1:1 and Development plan templates pair with the verifier register, the weekly capture, the hours tally, mentor meetings and the gap-closing plan. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
