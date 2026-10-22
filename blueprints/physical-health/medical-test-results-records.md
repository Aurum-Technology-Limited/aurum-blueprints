---
id: physical-health.medical-test-results-records
name: Medical Test Results & Records
description: "One folder for every blood result, scan, letter and discharge summary, with trend tables, a one-page summary for new doctors and routines that chase what is missing."
category: personal
version: 1.0.0
tags: [physical-health, medical-test-results-records, everyone, test-results, medical-records, blood-tests, imaging, patient-portal]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - meeting-notes
    - purchase-decision
  pillars:
    - name: Physical Health
      emoji: "🩺"
      description: "The body you live in, looked after on purpose: screenings and check-ups kept on schedule, long-term conditions managed rather than endured, medicines and results kept in order, and the small daily habits that decide how the next thirty years feel."
      pillarFrontmatter:
        review_cadence: quarterly
      areas:
        - name: Medical Test Results & Records
          description: "Collecting blood results, scans, letters and discharge summaries so trends are visible and every new doctor gets the full picture quickly."
          projects:
            - name: Full copy of your medical record
              description: |-
                ## Purpose
                Most people have never seen their own doctor's or hospital record, yet it is the source every future clinician will read. A formal request for a complete copy (a subject access request in the UK, for example) is often free and must be answered within a set time, and it shows you what is actually written about you. Doing it once now gives you a baseline to file everything else against.

                ## Milestones
                1. The records office or data protection contact for every provider you have used identified.
                2. A written request sent to each one, with the date sent noted.
                3. Every copy received and saved to your health records folder.
                4. Any gaps or obvious mistakes listed for follow-up.

                ## Notes
                Ask for letters, results and imaging reports as well as the summary, or some providers send only the front sheet. Put the response deadline in your calendar so you know when to chase.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A complete copy of your record from your main doctor and every hospital seen in the last ten years is saved in one folder."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every practice and hospital that has treated you in the last ten years"
                - "Find each provider's records request form or data protection email"
                - "Send a written request asking for letters, results and imaging reports"
                - "Chase any provider that misses its response deadline"
            - name: Patient portal and lab app access
              description: |-
                ## Purpose
                Results often appear in a portal days before anyone phones, and some are never phoned through at all. Getting a working login for your doctor's portal, each hospital portal and any private lab app means you see results as they are released and can download the documents yourself instead of asking for copies.

                ## Milestones
                1. Every portal you are eligible for listed, with what each one shows.
                2. Working logins for each, with identity checks completed and passwords stored in a password manager.
                3. Detailed record access (results and letters, not only appointments) requested where it is off by default.
                4. Notifications switched on so a new result produces an alert.

                ## Notes
                Some portals show only a summary unless you ask the practice to switch on detailed coded records and documents. Ask for this explicitly.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "You can log in to every portal that holds your results and have downloaded at least one document from each."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your practice which online record services it supports"
                - "Complete identity verification for your doctor's portal"
                - "Request detailed record access including letters and test results"
                - "Turn on result notifications in each portal app"
            - name: Health records folder and naming rule
              description: |-
                ## Purpose
                Records saved as scan0012.pdf in a downloads folder are as lost as ones never collected. One folder with a handful of sub-folders and a date-first file name, such as 2026-03-14 Lipid panel City Lab, makes every document findable in seconds and sorts itself into a timeline.

                ## Milestones
                1. One main health folder with sub-folders for results, imaging, letters, discharge summaries and admin.
                2. A naming rule written down: date first, then test or letter type, then provider.
                3. Existing files renamed to the rule.
                4. A matching folder for each household member whose records you manage.

                ## Notes
                Use the date of the test or letter, not the date you downloaded it, or the timeline will be wrong.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every health document you hold sits in one folder tree and follows a written date-first naming rule."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Create the main health folder and its five sub-folders"
                - "Write the naming rule in a short readme file inside the folder"
                - "Rename every existing health file to the new rule"
                - "Move health attachments out of your email downloads into the folder"
            - name: Scanning the paper records box
              description: |-
                ## Purpose
                Old letters, hospital leaflets and printed results tend to live in a drawer or a carrier bag, which is no use in a waiting room. Scanning them into searchable files over a few evenings brings years of history into the same place as everything new, and lets you throw away duplicates with confidence.

                ## Milestones
                1. Every paper health document in the house gathered in one box.
                2. Documents sorted into keep, scan and discard piles.
                3. All keep items scanned to searchable PDF and named to your rule.
                4. Originals of anything clinically or legally important stored in one labelled wallet.

                ## Notes
                A phone scanning app with text recognition is enough. Shred, do not bin, anything showing your name, date of birth or health number.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All paper health records in the house are scanned, named and filed, with originals reduced to one labelled wallet."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Gather every paper letter, result and leaflet into one box"
                - "Sort the box into keep, scan and discard piles"
                - "Scan the keep pile with a phone app that recognises text"
                - "Shred the duplicates that carry personal details"
            - name: One-page health summary for new doctors
              description: |-
                ## Purpose
                A new doctor, an out-of-hours service or an emergency team has minutes, not hours, and will not read a 200-page record. A single page listing diagnoses, operations, admissions, allergies, current medicines, key recent results and who looks after you gives them the full picture quickly, and you stop reciting it from memory.

                ## Milestones
                1. A one-page summary covering conditions, past operations and admissions, allergies, current medicines and key recent results.
                2. Each clinician involved in your care listed with their specialty and contact route.
                3. Every date and diagnosis on the summary checked against your record.
                4. A printed copy in your bag and a PDF on your phone.

                ## Notes
                Keep it to one page. Anything that would not change what a stranger does in the first hour belongs in the full folder instead.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated one-page health summary exists on paper and on your phone, checked against your record within the last year."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask the agent to draft a one-page summary from your record copy"
                - "Check every date and diagnosis on the draft against the source letters"
                - "Save the finished summary as a PDF on your phone"
                - "Refresh the summary and its date at the start of each year @recurring(yearly)"
            - name: Master index of tests and investigations
              description: |-
                ## Purpose
                Ask most people when they last had a kidney function test or a chest X-ray and they will guess. An index with one row per test, scan or procedure, its date, where it was done and where the report is filed answers that in seconds and shows which investigations were never followed up.

                ## Milestones
                1. A table with columns for date, test, provider, ordered by, short result note and file location.
                2. Every result and scan in your record copy entered as a row.
                3. Tests with no report on file flagged.
                4. The index saved in the root of your health folder.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An index lists every test and investigation from your record copy, each pointing to a filed report or flagged as missing."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Set up the index table with date, test, provider and file location columns"
                - "Enter every result and scan from your record copy"
                - "Flag any test that has no report in the folder"
                - "Request each missing report from the provider that did the test"
            - name: Contact sheet for clinics, labs and records offices
              description: |-
                ## Purpose
                Chasing a result usually fails at the first step: finding the right number or email for the department that holds it. A contact sheet with every clinic, lab, imaging centre and records office you deal with, plus your patient and hospital numbers, turns each chase into a five-minute job.

                ## Milestones
                1. Every provider listed with phone, email, portal link and opening hours.
                2. Your patient, hospital and insurance reference numbers recorded beside each one.
                3. The best route for results enquiries noted, since it is rarely the main switchboard.
                4. The sheet saved in the health folder and on your phone.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "One contact sheet holds the results-enquiry route and your reference number for every provider you use."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List every clinic, lab and hospital department you have used"
                - "Find the direct results or secretary line for each one"
                - "Add your patient and hospital numbers beside each provider"
                - "Save the sheet where you can open it from your phone"
            - name: Backup and privacy plan for health files
              description: |-
                ## Purpose
                Health records are among the most sensitive files you own and among the hardest to replace once a provider archives old paper. A plan with an encrypted primary copy, an automatic second copy and a rule for who sees what protects them from a lost phone, a dead laptop and an over-shared family drive.

                ## Milestones
                1. The health folder stored in an encrypted location with two-factor sign-in.
                2. An automatic second copy on a separate service or drive.
                3. A restore test completed by opening three files from the backup.
                4. A written note of who in the household can see which folders.

                ## Notes
                Avoid emailing records to yourself as a backup. Email accounts are a common breach target and the files end up scattered.
              priority: high
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your health folder has an encrypted primary copy and a second backup, and a restore of three files has been tested."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Turn on two-factor sign-in for the account that holds your health folder"
                - "Set up an automatic second copy on a separate drive or service"
                - "Write down who in the household may see each sub-folder"
                - "Open three random files from the backup to confirm it restores @recurring(quarterly)"
            - name: Five-year blood results table
              description: |-
                ## Purpose
                A single result means little on its own; the same marker measured five times over five years shows a direction. Pulling every blood result from the last five years into one table, with date, value, unit and the lab's reference range, is what makes trends visible to you and to any doctor who looks.

                ## Milestones
                1. Every blood test from the last five years gathered from portals and the record copy.
                2. A table with one row per marker and one column per test date.
                3. Units and reference ranges recorded beside each value.
                4. Markers that crossed a reference limit highlighted for discussion with your doctor.

                ## Notes
                Start from the **Metrics log** template. Keep the lab name with each value, since different labs can use different ranges and units.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A table holds five years of your blood results with dates, units and reference ranges, and has been shown once to your doctor."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Download every blood result from the last five years"
                - "Set up a table with markers as rows and test dates as columns"
                - "Enter values with their units and reference ranges"
                - "Highlight any marker that has crossed a reference limit"
            - name: Monthly portal, inbox and post sweep
              description: |-
                ## Purpose
                Documents arrive in at least four places: portals, email, the post and the occasional text message with a link that expires. A fixed monthly sweep pulls everything new into the health folder before links die and before you forget which appointment a letter belonged to.

                ## Milestones
                1. A sweep checklist naming every portal, inbox and paper tray to check.
                2. New documents downloaded, named and filed each month.
                3. Expiring links and one-time downloads saved before they lapse.
                4. Three consecutive months of sweeps completed.

                ## Notes
                Start from the **Operational checklist** template.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "New health documents from every portal, inbox and the post have been filed within a month of arrival for three months running."
                cadence: rolling
              tasks:
                - "Write the list of portals and inboxes the sweep must cover"
                - "Check every portal, inbox and paper tray and file what is new @recurring(monthly:9)"
                - "Save any document sitting behind a link that expires"
                - "Add each newly arrived result to the master index"
            - name: After-appointment notes and clinic letter follow-up
              description: |-
                ## Purpose
                What a doctor says in the room fades within a day, and the clinic letter that confirms it can take weeks or never come. Writing a five-line note straight after each appointment, then checking the letter matches when it lands, catches mistakes and missing letters while they are still easy to fix.

                ## Milestones
                1. A short note format: date, clinician, what was found, what was decided, what happens next.
                2. A note written within a day of every appointment.
                3. Each clinic letter checked against your note when it arrives.
                4. Letters that have not arrived within six weeks requested.

                ## Notes
                Start from the **Meeting notes** template. Ask to be copied into letters sent to your doctor; in many health systems patients can request this as standard.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every appointment in the last three months has a same-day note and either a filed letter or a dated request for one."
                cadence: rolling
              tasks:
                - "Set up a five-line appointment note on your phone"
                - "Write a note within a day of each appointment"
                - "Ask each clinic to copy you into letters sent to your doctor"
                - "Check for overdue clinic letters from recent appointments @recurring(monthly:20)"
            - name: Results trend table upkeep
              description: |-
                ## Purpose
                A trend table is only useful if the newest result is in it when you walk into the consulting room. Adding values as they are released, and glancing at the direction of each marker you are watching, takes minutes a month and turns the table into the first thing a doctor asks to see.

                ## Milestones
                1. Every new result entered within a month of release.
                2. A short list of the markers your clinicians are watching kept at the top.
                3. A simple chart for each watched marker.
                4. The table brought to every appointment where results will be discussed.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Your trend table includes every result released in the past year, with charts for the markers your clinicians are watching."
                cadence: rolling
              tasks:
                - "Add any newly released results to the trend table @recurring(monthly:23)"
                - "Ask your clinician which markers they are watching for you"
                - "Move the watched markers to the top of the table"
                - "Print or save the table before appointments where results are discussed"
            - name: Quarterly health records audit
              description: |-
                ## Purpose
                Small gaps compound: a missing scan report here, a letter filed under the wrong family member there. A short audit each quarter checks the index against the folder, the folder against the portals, and the follow-up log against what actually happened, so problems are found while the trail is still warm.

                ## Milestones
                1. An audit list of five checks, each with a pass or fail.
                2. Index and folder reconciled, with no orphan files and no missing reports.
                3. Open follow-ups confirmed as done or rebooked.
                4. Audit date and findings noted in the index.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly audits in a year are logged, each with findings and every gap either fixed or given a next step."
                cadence: cyclic
              tasks:
                - "Write the five checks the audit will run"
                - "Run the records audit and fix or log every gap @recurring(quarterly)"
                - "Move misfiled documents to the right person's folder"
                - "Record the audit date and findings in the index"
            - name: Annual request for hospital letters and reports
              description: |-
                ## Purpose
                Hospital documents are the ones most likely to be missing from your doctor's record and from your own folder, especially from clinics you attended only once. A yearly request to each hospital you visited that year collects letters, imaging reports and results before departments merge or archive them.

                ## Milestones
                1. Every hospital or private clinic attended this year listed.
                2. A request for the year's letters and reports sent to each.
                3. Responses received and filed.
                4. Anything still missing logged with a chase date.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Each hospital attended in the past year has supplied its letters and reports, or has an open, dated request."
                cadence: cyclic
              tasks:
                - "List the hospitals and private clinics you attended this year"
                - "Send each one a request for the year's letters and reports @recurring(yearly)"
                - "File the documents that come back"
                - "Log any department that has not replied with a chase date"
            - name: Pending results tracker
              description: |-
                ## Purpose
                No news is not always good news: results get lost between labs, inboxes and clinicians on leave, and a small share are never acted on. A tracker of every test taken and not yet seen, with the date you expect it, means nothing slips quietly past its due date.

                ## Milestones
                1. A list of every test taken, with the date and when the result is expected.
                2. Each result marked as seen, discussed and filed when it arrives.
                3. Overdue results chased with the clinic, with the date of the chase.
                4. No test older than eight weeks without a known result.

                ## Notes
                Ask at the time of the test how and when you will hear. A promise to call only if something is wrong is worth confirming for anything important.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every test taken in the past three months is either marked as seen and filed or has a dated chase recorded."
                cadence: rolling
              tasks:
                - "List every test you have had in the last three months"
                - "Ask at each test how and when the result will reach you"
                - "Chase any result that is past its expected date @recurring(weekly:fri)"
                - "Mark each result as seen, discussed and filed when it arrives"
            - name: Follow-up actions log from results
              description: |-
                ## Purpose
                Many results come with an instruction attached: repeat in three months, book an ultrasound, recheck after stopping a supplement. A log of every follow-up action, who owns it and when it is due stops these depending on someone's memory, including yours.

                ## Milestones
                1. Every follow-up instruction from the last year written in one log.
                2. An owner and a due month against each action.
                3. Repeat tests booked before their due month.
                4. Completed actions linked to the result that closed them.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every follow-up instruction from the past year has an owner, a due month and either a completion date or a booking."
                cadence: rolling
              tasks:
                - "Pull every repeat-test instruction from the last year of letters"
                - "Give each action an owner and a due month"
                - "Review open follow-up actions and book what is due @recurring(monthly:14)"
                - "Link each completed action to the result that closed it"
            - name: Correspondence log of records requests
              description: |-
                ## Purpose
                Requests for records, error corrections and chasing letters go out over months, and providers rarely reply on time. A log of what you sent, to whom, when and what came back is the evidence you need when a request stalls or a complaint becomes necessary.

                ## Milestones
                1. A log with date sent, provider, what was asked, response deadline and outcome.
                2. Every request from the last year entered.
                3. Overdue requests visible at a glance.
                4. Each closed request linked to the documents received.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every records request and chase from the past year is logged with its date, deadline and outcome."
                cadence: rolling
              tasks:
                - "Set up the log with date, provider, request, deadline and outcome"
                - "Enter every request and chase sent in the last year"
                - "Review the log for requests past their deadline @recurring(monthly:27)"
                - "Link closed requests to the files they produced"
            - name: Two-day pre-appointment results check
              description: |-
                ## Purpose
                Appointments are wasted surprisingly often because the result being discussed has not reached the clinician, or the scan was done at another hospital. Checking two days ahead that results are released and visible to the person you are seeing turns a wasted visit into a useful one.

                ## Milestones
                1. A standard pre-appointment checklist saved in the health folder.
                2. Results due for discussion confirmed as released before each appointment.
                3. Results from other providers sent ahead or brought on paper.
                4. Three appointments in a row prepared this way.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Before each of your next three appointments, the results to be discussed were confirmed as available to the clinician two days ahead."
                cadence: rolling
              tasks:
                - "Write a short checklist for the two days before an appointment"
                - "Phone the clinic two days ahead to confirm results are back"
                - "Send results held by other providers to the clinic in advance"
                - "Bring printed copies of any result held outside that clinic's system"
            - name: Reading lab report ranges, units and flags
              description: |-
                ## Purpose
                Lab reports look alike but hide differences that matter: the reference range belongs to that lab, an H or L flag is a statistical marker rather than a diagnosis, and units change between countries. Learning to read the layout of your own reports makes the questions you bring to your clinician sharper and the waiting less anxious.

                ## Milestones
                1. The parts of one of your lab reports labelled: marker, value, unit, reference range, flag and comment.
                2. The meaning of a reference range written in your own words, including that some healthy people fall outside it.
                3. Lab comments and footnotes on your recent reports read and noted.
                4. A list of questions about flagged results prepared for your clinician.

                ## Notes
                This is about reading the paper, not interpreting your health. Agree what any result means for you with the clinician who ordered it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "You can label each part of your latest lab report, and a written list of questions about its flagged results has gone to your clinician."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Print one recent lab report and label each part of it"
                - "Read the lab's own patient guide to its reference ranges"
                - "Write down what an H or L flag does and does not mean"
                - "List the flagged results you want your clinician to explain"
            - name: Personal glossary of test abbreviations
              description: |-
                ## Purpose
                FBC, eGFR, ALT, TSH, HbA1c, CRP: reports are written in shorthand that clinicians know and patients are left to search. A glossary built only from the abbreviations on your own reports stays short, accurate and useful, instead of a hundred-row list you never open.

                ## Milestones
                1. Every abbreviation on your reports from the last two years listed.
                2. A plain-English name and one-line description beside each, from a reputable patient information source.
                3. The source for each definition noted.
                4. The glossary saved in the root of your health folder.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A glossary covers every abbreviation on your last two years of reports, each with a plain-English name and a cited source."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect every abbreviation from your last two years of reports"
                - "Look each one up on a reputable patient information site"
                - "Write a plain-English name and one-line description for each"
                - "Ask the agent to check the glossary for missing or doubled entries"
            - name: Reading the findings and impression of scan reports
              description: |-
                ## Purpose
                Scan reports follow a fixed structure: the clinical question, the technique, the findings, then an impression or conclusion that is the radiologist's summary. Knowing which part to discuss, and that incidental findings are common and often need only a note or a later check that your clinician decides on, helps you read a report calmly and ask the right question.

                ## Milestones
                1. The sections of one of your own imaging reports identified.
                2. Terms you do not understand listed with plain-English meanings.
                3. Any incidental findings flagged with a question for the referring clinician.
                4. Recommendations for further imaging copied into your follow-up log.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "One of your imaging reports is annotated by section, and every recommendation in it is in your follow-up log or explained by your clinician."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Open your most recent scan report and mark its sections"
                - "List terms in the findings you want to look up or ask about"
                - "Copy any recommendation for further imaging into the follow-up log"
                - "Ask the referring clinician whether incidental findings need action"
            - name: Units, ranges and switching labs
              description: |-
                ## Purpose
                Move house, change insurer or have a test abroad and the same marker can come back in different units with a different reference range, which makes a trend table look as if it jumped. Learning how your markers convert between units, and noting the lab with every value, keeps comparisons honest.

                ## Milestones
                1. The markers in your trend table reported in more than one unit identified.
                2. Conversion factors for those markers recorded from a reliable source.
                3. Every value in the table tagged with its lab and unit.
                4. Results from a different lab marked so they are not compared blindly.

                ## Notes
                Glucose and cholesterol are common examples, reported in mmol/L in many countries and mg/dL in others. Some hormone tests vary between lab methods even in the same unit, so ask before comparing.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every value in your trend table carries its unit and lab, with conversions recorded for markers reported in more than one unit."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Mark which markers in your table appear in more than one unit"
                - "Record the conversion factor for each from a reliable source"
                - "Tag every value in the table with its lab and unit"
                - "Ask your clinician before comparing results from different labs"
            - name: Real change versus normal variation
              description: |-
                ## Purpose
                Values wobble from test to test with hydration, time of day, recent exercise, illness and lab method, so a single high or low result is often repeated before anyone acts. Understanding this, and recording the conditions of each test, stops you worrying over noise and helps you notice a genuine run in one direction.

                ## Milestones
                1. The conditions that can shift each watched marker listed from patient information or your clinician.
                2. A test conditions column added to the trend table: fasting, time of day, recent illness.
                3. Your clinician asked how much change in each watched marker is meaningful.
                4. Their answer recorded beside the marker.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Each watched marker in your table has a note from your clinician on what size of change matters, and every new value records its test conditions."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "List what can shift each marker you are watching"
                - "Add a test conditions column to the trend table"
                - "Ask your clinician how big a change in each marker is meaningful"
                - "Record fasting status and time of day with every new test"
            - name: Questions to ask when a result comes back
              description: |-
                ## Purpose
                Result calls often last two minutes and end before you have thought of the question that matters. A short standing list (what was this test for, is this a change, does anything happen next, when is it repeated, can I have a copy) means every result conversation ends with an answer you can file.

                ## Milestones
                1. A standing list of five or six questions saved on your phone.
                2. The list used on your next three result conversations.
                3. Answers written into the follow-up log or the index.
                4. A copy of every discussed result requested and filed.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Your next three result conversations were each handled with your question list and their answers recorded."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write five questions to ask whenever a result comes back"
                - "Save the list as a pinned note on your phone"
                - "Use the list on your next result call and note the answers"
                - "Ask for a copy of every result discussed by phone"
            - name: Charting your results in a spreadsheet
              description: |-
                ## Purpose
                Doctors read a line chart faster than a column of numbers, and so do you. Learning to make a simple dated chart with the reference range shaded takes an evening and gives you something to hold up in a ten-minute appointment.

                ## Milestones
                1. Dates entered as real dates so the chart spaces tests correctly.
                2. One line chart for a watched marker with the lab's reference range shown as a band.
                3. Charts for every watched marker built from the same design.
                4. A one-page chart sheet ready to print for appointments.
              priority: low
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A printable one-page sheet charts every marker your clinicians watch, with dates spaced correctly and reference ranges shown."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Convert the dates in your trend table into real date values"
                - "Build one line chart for your most-watched marker"
                - "Shade the reference range behind the line"
                - "Copy the chart design to each other watched marker"
            - name: Making sense of clinic letters
              description: |-
                ## Purpose
                Clinic letters are written for your doctor, so they use coded diagnoses, abbreviations like NAD and PMH, and a plan section that is easy to skim past. Reading three of your own letters closely, and listing every action in their plan, is the quickest way to stop instructions falling through the gap between clinic and practice.

                ## Milestones
                1. Three recent letters read with every abbreviation decoded.
                2. Diagnosis, findings and plan sections identified in each.
                3. Every plan action copied into the follow-up log.
                4. Anything unclear sent as a written question to the author's secretary.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Every action from your three most recent clinic letters is in your follow-up log, and unclear points have been raised in writing."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Pick your three most recent clinic letters"
                - "Decode every abbreviation using your personal glossary"
                - "Copy each action in the plan section into the follow-up log"
                - "Email the secretary any question about the letter's meaning"
            - name: Choosing a personal health record app
              description: |-
                ## Purpose
                Folders work, but a dedicated health record app can import from portals, chart results and share a read-only view with a doctor. Comparing two or three options on import sources, export formats, privacy terms and cost before committing avoids locking ten years of records into a service that later closes.

                ## Milestones
                1. Your must-haves written: which portals it imports from, export format, encryption and cost.
                2. Three options scored against the same criteria, with plain folders as one of them.
                3. Each option's privacy policy checked for data sale or sharing.
                4. A decision recorded with the reason.

                ## Notes
                Start from the **Purchase decision** template. Treat export as essential: if you cannot get all your data out in a standard format, you do not really hold it.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on a health record system, made by scoring three options against written criteria including export and privacy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write the five criteria any health record app must meet"
                - "Shortlist two apps and compare them with plain folders"
                - "Read each privacy policy for data sharing or sale"
                - "Record the decision and the reason in the health folder"
            - name: Correcting an error in your medical record
              description: |-
                ## Purpose
                Records contain mistakes: a condition you never had, a wrong allergy, a result filed under the wrong date or even the wrong patient. An error left in place is copied into every referral and insurance report, so asking for a correction, or for your disagreement to be noted, is worth doing as soon as you find it.

                ## Milestones
                1. Each error described with where it appears and what the correct information is.
                2. Supporting evidence attached, such as a letter or result.
                3. A written correction request sent to the record holder.
                4. The provider's response filed and the corrected record checked.

                ## Notes
                Providers may decline to delete a clinician's recorded opinion but should add your statement alongside it. Keep the tone factual and specific.
              priority: high
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "Every known error in your record has a written correction request on file and either a provider response or a dated chase."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each error with the page or screen where it appears"
                - "Gather the letter or result that shows the correct information"
                - "Send a written correction request to the record holder"
                - "Check the record once the provider confirms the change"
            - name: Record sharing and consent preferences
              description: |-
                ## Purpose
                Your record may already be shared between hospitals, pharmacies and research databases under default settings you never chose. Finding out what is shared by default and deciding what you want, in either direction, means emergency teams can see what they need and nothing goes further than you are comfortable with.

                ## Milestones
                1. The record-sharing schemes that apply to you identified, with their default settings.
                2. A decision for each: stay in, opt out or opt in.
                3. Any change made through the official route, with confirmation saved.
                4. The choices written down so they can be revisited.

                ## Notes
                Opting out of emergency sharing can mean a hospital cannot see your medicines or allergies when you cannot speak for yourself. Weigh that before switching anything off.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written record of each sharing scheme that applies to you, your choice for it and the confirmation of any change."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask your practice which record-sharing schemes you are part of"
                - "Note the default setting for each scheme"
                - "Decide whether to stay in, opt in or opt out of each"
                - "Recheck your sharing choices after any change of practice or country"
            - name: Getting your scan images, not just the reports
              description: |-
                ## Purpose
                Reports summarise a scan, but a second opinion or a later comparison often needs the images themselves. Requesting MRI, CT and X-ray images on disc or by secure download, in the standard medical imaging format, means you can hand them to any specialist without waiting weeks for hospitals to transfer them.

                ## Milestones
                1. Every significant scan of the last ten years listed with hospital and date.
                2. Images requested from each imaging department in standard format.
                3. Discs copied to your backup, since discs degrade and new laptops lack drives.
                4. A free image viewer installed and each set opened once to confirm it works.

                ## Notes
                Ask for the full study in DICOM format, not screenshots or a PDF. Fees vary, so ask before you request.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Images for every significant scan in the last ten years are held in standard format, backed up and confirmed to open."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every significant scan with the hospital and date"
                - "Request each set of images in DICOM format from imaging"
                - "Copy each disc to your backup storage the day it arrives"
                - "Open every image set once in a free viewer to check it"
            - name: Proxy access and a nominated records helper
              description: |-
                ## Purpose
                If you were in hospital tomorrow, could the person you trust find your records or speak to your doctor? Deciding who should have access, setting up formal proxy or consent-to-share where the system allows, and telling them where the folder lives makes your records usable when you cannot be the one using them.

                ## Milestones
                1. One or two trusted people chosen and asked.
                2. Formal proxy or consent-to-share forms completed with your practice where offered.
                3. Emergency access to the health folder arranged, such as a password manager's emergency access feature.
                4. Each person told where the records are and what they are for.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "At least one named person has formal access or consent with your practice and knows how to reach your health folder."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Decide who you would want to see your records if you were ill"
                - "Ask your practice for its proxy or consent-to-share form"
                - "Set up emergency access to the folder for that person"
                - "Review who has access to your records and folder @recurring(yearly)"
            - name: Keep or shred rules for health paperwork
              description: |-
                ## Purpose
                Keeping every appointment reminder buries the letters that matter, and shredding too eagerly loses the one document a future specialist needs. A short written rule, such as keeping results, letters, discharge summaries and operation notes for life and discarding reminders once filed, settles it for the whole household.

                ## Milestones
                1. A retention rule written with keep-for-life, keep-for-now and discard-once-filed lists.
                2. The folder checked against the rule and clutter removed.
                3. Shredding done for anything carrying personal identifiers.
                4. The rule saved in the folder readme.
              priority: low
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A written retention rule is in the folder readme and the folder has been cleared of everything the rule says to discard."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Write the keep-for-life, keep-for-now and discard lists"
                - "Go through the folder and apply the rule"
                - "Shred discarded paper that shows personal details"
                - "Clear duplicate downloads and old appointment reminders @recurring(yearly)"
            - name: Private and home test results joined to your record
              description: |-
                ## Purpose
                Private health checks, workplace screenings and home finger-prick kits produce results that rarely reach your main doctor, which leaves gaps in the trend and risks the same test being repeated. Deciding which of these belong in your record, and sending them in a form your practice can file, keeps one complete picture.

                ## Milestones
                1. Every private, workplace or home test result from the last three years gathered.
                2. Each added to the index and trend table, tagged as an outside lab.
                3. The ones your doctor should see sent with a short covering note.
                4. Your practice's reply on whether they were filed noted.

                ## Notes
                Home kits and private panels vary in quality. Your doctor may still want a repeat through their own lab before acting on a result.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All private and home test results from the past three years are in your index, and the relevant ones are filed with your practice."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Collect results from private checks, workplace screens and home kits"
                - "Add each one to the index tagged as an outside lab"
                - "Send relevant results to your practice with a short covering note"
                - "Ask the practice to confirm the results were filed to your record"
            - name: Consolidating records from several portals
              description: |-
                ## Purpose
                People who move, or who use both public and private care, often end up with results spread across four portals, each holding a slice. Choosing one master location and copying everything in, with a note of which portal holds the original, ends the login roulette before every appointment.

                ## Milestones
                1. Every portal and what it holds mapped in one table.
                2. All documents from each portal downloaded into the master folder.
                3. Duplicates removed and the location of each original noted.
                4. Portals you no longer need closed after their data is saved.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every document from every portal you use sits in one master folder, with a map of which portal holds each original."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Map each portal and the kind of records it holds"
                - "Download every document from each portal into the master folder"
                - "Remove duplicates and note where each original lives"
                - "Close portals you no longer need after saving their data"
            - name: Records pack for a first specialist appointment
              description: |-
                ## Purpose
                First appointments with a new specialist set the course of treatment, and specialists often see a referral letter and little else. Bringing a short pack, with your one-page summary, relevant results with a trend chart, scan reports and a list of questions, means the first visit does the work of two.

                ## Milestones
                1. The referral letter obtained and read.
                2. Relevant results, scan reports and letters selected and printed in date order.
                3. A trend chart for the results most relevant to the referral.
                4. Three to five questions written, most important first.
                5. Notes from the appointment filed with the pack.

                ## Notes
                Start from the **Meeting notes** template. Ten well-chosen pages beat a ring binder; offer the full folder only if asked.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You arrived at the specialist appointment with a pack of ten pages or fewer, and left with notes filed against it."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your doctor's surgery for a copy of the referral letter"
                - "Pick the results and scan reports relevant to the referral"
                - "Print a trend chart for the most relevant markers"
                - "File your notes from the appointment with the pack"
            - name: Discharge summary after a hospital stay
              description: |-
                ## Purpose
                Discharge summaries list what was found, what changed and what must happen next, and they are the hospital document most likely to go astray in the days after you leave. Getting your own copy before you go home, and checking its follow-up actions within a week, catches missed tests and lost instructions early.

                ## Milestones
                1. A copy of the discharge summary in hand or in the portal on the day of discharge.
                2. Results of tests done in hospital requested, since summaries often mark them as pending.
                3. Every follow-up action copied into the follow-up log.
                4. Your practice confirmed as having received the summary.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a week of discharge you hold the summary, every pending result has a chase date, and your practice confirms receipt."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Ask the ward for a copy of the discharge summary before leaving"
                - "List any results the summary marks as pending"
                - "Copy every follow-up action into the follow-up log"
                - "Phone your practice to confirm it received the summary"
            - name: Moving to a new doctor or practice
              description: |-
                ## Purpose
                When you register somewhere new, the old record can take weeks or months to arrive, and things drop out along the way. Taking your own copy and a one-page summary to the first appointment, then checking the transferred record is complete, keeps care continuous through the gap.

                ## Milestones
                1. A copy of your full record saved before leaving the old practice.
                2. Your one-page summary handed to the new practice at registration.
                3. The transferred record checked for missing letters and results.
                4. Gaps sent to the new practice with copies from your folder.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Your new practice holds a complete record, checked by you against your own copy, within two months of registering."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Download your full record before leaving the old practice"
                - "Hand your one-page summary in when you register"
                - "Ask the new practice when the old record has arrived"
                - "Compare the transferred record against your own copy"
            - name: Second opinion records bundle
              description: |-
                ## Purpose
                Second opinions are only as good as the information behind them, and a specialist reviewing your case cold needs the original reports and images, not your memory of them. Assembling a complete, ordered bundle with a cover note stating the question you want answered saves weeks and makes the opinion specific.

                ## Milestones
                1. The question for the second opinion written in one or two sentences.
                2. All relevant letters, results, pathology and imaging reports gathered in date order.
                3. Images in standard format included for any scan under review.
                4. A cover note and index attached, and the bundle sent by a secure route.

                ## Notes
                Ask the second-opinion service what format it accepts before sending anything. Many also want a referral from your doctor.
              priority: medium
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "A second-opinion bundle with a cover question, index, reports and images has been received by the reviewing clinician."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write the question you want the second opinion to answer"
                - "Gather every report and image the reviewer will need"
                - "Write a one-page cover note and index for the bundle"
                - "Send the bundle by the route the reviewing service asks for"
            - name: Insurance or occupational health records request
              description: |-
                ## Purpose
                Life insurance applications, visa medicals and workplace health assessments often ask for your records or a doctor's report, and what gets sent can affect the outcome. Reading the request, checking what will be released and reviewing the report beforehand where the rules allow keeps you informed and catches errors before a third party reads them.

                ## Milestones
                1. The request and the consent form read in full before signing.
                2. Your right to see any report before release checked, and used if you want it.
                3. The released information checked against your own copy.
                4. A copy of what was sent filed in the health folder.

                ## Notes
                Answer insurer questions honestly and completely; the aim is accuracy, not leaving things out. Ask a qualified adviser if you are unsure what a form requires.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "You hold a copy of every record or report released to an insurer or employer this year, checked for accuracy before release."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the consent form fully before signing it"
                - "Ask to see the doctor's report before it is sent"
                - "Check the report against your own records for errors"
                - "File a copy of what was released in the health folder"
            - name: Child's health records from birth to adulthood
              description: |-
                ## Purpose
                Parents hold the only joined-up record of a child's birth details, early checks, test results and hospital visits, and it is usually spread across a handheld book, school forms and several portals. A folder for each child, kept up as things happen, pays off at every new school or nursery and at their first adult appointment.

                ## Milestones
                1. A folder for each child with the same sub-folders as your own.
                2. Birth details, newborn screening results and hospital letters filed.
                3. A one-page summary for each child, updated yearly.
                4. A plan written for handing the folder over when they reach adulthood.

                ## Notes
                Keep vaccinations in the household vaccination record and use this folder for results, letters and visits, so nothing is held in two places.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: service
                output_kind: artifact
                success_criteria: "Each child has a filed record with birth details, results and hospital letters, plus a one-page summary dated within the last year."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a records folder for each child"
                - "Scan the newborn and early childhood pages from the handheld book"
                - "Update each child's one-page summary after their birthday @recurring(yearly)"
                - "Write down when and how each folder will be handed over"
            - name: Managing an ageing parent's results and letters
              description: |-
                ## Purpose
                Carers often find themselves at appointments without the letters, unsure which results are pending and unable to see the portal. Setting up proper consent or proxy access and a shared folder means you can follow up results, spot gaps and give each new clinician the history your parent may no longer recall.

                ## Milestones
                1. Your parent's written consent, or legal authority to act for them, in place.
                2. Proxy portal access granted by their practice.
                3. A shared records folder and one-page summary set up for them.
                4. A monthly check of their portal and post agreed with them.

                ## Notes
                Involve your parent in every decision they can still make. Legal powers to act for someone differ by country; take advice before relying on one.
              priority: medium
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "You have formal access to your parent's records and a shared folder that has been checked monthly for three months."
                cadence: rolling
              tasks:
                - "Ask your parent what access they are happy for you to have"
                - "Request proxy access from their practice with their consent"
                - "Set up a shared folder and one-page summary for them"
                - "Check their portal and post for new letters and results @recurring(monthly:3)"
            - name: Moving abroad with your medical records
              description: |-
                ## Purpose
                Records rarely follow you across borders, and a doctor in another country may not be able to request them at all. Leaving with a complete copy, a translated summary and your imaging in standard format means your history arrives with you instead of being rebuilt from memory.

                ## Milestones
                1. A full record copy and imaging downloaded before you leave.
                2. A one-page summary translated by a qualified translator where needed.
                3. Units on key results noted for the destination country's labs.
                4. The summary and key results handed to your new doctor at registration.

                ## Notes
                Request records several months before departure: some providers take weeks, and portal access may end when you deregister.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "You leave with your full record, imaging and a translated summary, and your new doctor holds a copy within a month of arrival."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Request a full record copy three months before you move"
                - "Download every image set and portal document before access ends"
                - "Arrange a qualified translation of your one-page summary"
                - "Give the summary and key results to your new doctor at registration"
            - name: Leaving home and taking over your own records
              description: |-
                ## Purpose
                Students and young adults moving away for the first time often do not know their own history: which tests they had as a child, what hospital letters said, or how to log in to a portal. Taking over your own records before the move means a doctor in a new city starts with facts, not guesses.

                ## Milestones
                1. Childhood records handed over by a parent or requested from the practice.
                2. Portal access set up in your own name.
                3. A short summary of your history and any ongoing tests written.
                4. Records filed in your own folder, with any shared parental copy agreed or ended.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Before moving, you hold your own record copy, a portal login and a written summary of your history."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Ask your parents for any childhood health records they kept"
                - "Set up portal access in your own name"
                - "Write a short summary of past tests and ongoing care"
                - "Register with a new doctor and give them the summary"
            - name: Pregnancy and birth records kept together
              description: |-
                ## Purpose
                Pregnancy produces a burst of scans, blood tests and letters across midwives, hospital and sonographers, much of it in a handheld file that is easy to lose afterwards. Copying it into one place during pregnancy and after the birth keeps results that matter for any future pregnancy and for the baby's early care.

                ## Milestones
                1. A pregnancy sub-folder holding booking bloods, scan reports and screening results.
                2. Handheld notes photographed at each visit and after the birth.
                3. The birth summary and discharge letters requested and filed.
                4. Results relevant to any future pregnancy flagged in the index.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "All pregnancy results, scan reports and the birth summary are filed in one sub-folder, with results relevant to future pregnancies flagged."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Create a pregnancy sub-folder in your health records"
                - "Photograph the handheld notes after each antenatal visit"
                - "Request the birth summary and discharge letters after delivery"
                - "Flag in the index any result a future pregnancy team should see"
            - name: Records after a family member dies
              description: |-
                ## Purpose
                After a death, families sometimes need records: for an insurance claim, a complaint, an inquest question or simply to understand what happened. Knowing who can request a deceased person's records, what to ask for and what to do with the folder they kept takes one burden off a hard time.

                ## Milestones
                1. Who has the right to request the records under local rules confirmed.
                2. A request sent for the specific records needed, with the reason stated.
                3. The person's own health folder secured, and paper with personal details stored or shredded.
                4. Results relevant to living relatives passed to whoever keeps the family history.

                ## Notes
                Rules on access to a deceased person's records differ by country and are often narrower than for the living. Records offices and bereavement services can explain the route.
              priority: low
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "The records needed after the death have been requested through the correct route, and the person's own health folder has been secured."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask the records office who may request a deceased person's records"
                - "Send a request naming the records needed and why"
                - "Secure or shred the paper records the person kept at home"
                - "Pass results relevant to relatives to whoever keeps the family history"
            - name: Multi-condition results dashboard
              description: |-
                ## Purpose
                People seeing three or four specialists find that each looks at their own markers and nobody looks at the whole set. A one-page dashboard showing the latest value, the previous value and the next test date for every watched marker across all your conditions lets any clinician see the full picture in a minute.

                ## Milestones
                1. Every watched marker across all your specialists listed with who watches it.
                2. Latest value, previous value and next due date shown for each.
                3. The dashboard printed or shared before each specialist visit.
                4. One clinician, usually your main doctor, asked to look at the whole page once a year.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A one-page dashboard covers every watched marker across your specialists and has been updated within the last quarter."
                cadence: rolling
              tasks:
                - "List every marker each of your specialists is watching"
                - "Lay out latest value, previous value and due date for each"
                - "Refresh the dashboard from the trend table @recurring(quarterly)"
                - "Ask your main doctor to review the whole dashboard once a year"
            - name: Imaging archive with comparison history
              description: |-
                ## Purpose
                Radiologists read a new scan far better when they can compare it with the last one, and comparisons across hospitals often fail because the old images cannot be reached. A personal archive, indexed by body part and date, lets you offer the prior study the moment a new scan is booked.

                ## Milestones
                1. All image sets indexed by body part, type of scan, date and hospital.
                2. Reports stored beside the images they describe.
                3. Prior studies offered to the imaging department each time a new scan is booked.
                4. The archive included in your backup routine.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every image set you hold is indexed by body part and date, and the prior study was offered at your most recent scan."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Index every image set by body part, scan type and date"
                - "Store each report beside the images it describes"
                - "Offer the prior study when the next scan is booked"
                - "Add the image archive to your backup routine"
            - name: Standard-format health data export
              description: |-
                ## Purpose
                Many portals and health record apps can now export in standard health data formats, and some health systems give patients a right to this. Holding a machine-readable export alongside your PDFs means future apps, research programmes or clinicians can import your history instead of retyping it.

                ## Milestones
                1. The export formats each portal offers identified.
                2. A structured export downloaded from each portal that supports one.
                3. Each export opened in a viewer to confirm it is complete.
                4. Exports stored with a date and refreshed when providers change.

                ## Notes
                FHIR and C-CDA are common standards; the name matters less than whether another system can read the file.
              priority: low
              frontmatter:
                mode: research
                output_kind: artifact
                success_criteria: "A dated structured export from every portal that supports one is stored in your folder and confirmed to open in a viewer."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check which export formats each portal offers"
                - "Download a structured export from each portal that has one"
                - "Open each export in a viewer to confirm it is complete"
                - "Store the exports in a dated sub-folder"
            - name: Lifetime health timeline
              description: |-
                ## Purpose
                Specialists often ask when something started and what was tried before, and the answer is spread across decades of letters. A single dated timeline of diagnoses, operations, admissions and key investigations, built from your record copy, answers those questions at a glance and sometimes shows patterns nobody had joined up.

                ## Milestones
                1. Every diagnosis, operation, admission and major investigation pulled from the record.
                2. Entries placed on one timeline with dates and source documents.
                3. Uncertain dates marked as approximate.
                4. The timeline reviewed once with your main doctor.

                ## Notes
                A first draft from your index saves hours, but check every entry against its source document before anyone relies on it.
              priority: low
              deadlineOffsetDays: 180
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A dated timeline of diagnoses, operations, admissions and key investigations exists, each entry linked to a source document."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Ask the agent to draft a timeline from your index of tests"
                - "Check each entry against its source letter or report"
                - "Mark any date you cannot confirm as approximate"
                - "Add the year's diagnoses, operations and admissions to the timeline @recurring(yearly)"
            - name: Problem list and coded diagnosis review
              description: |-
                ## Purpose
                Behind every record sits a coded problem list, the short list of diagnoses that drives reminders, insurance reports and what a new clinician assumes about you. Old, resolved or wrongly coded entries are common; reviewing the list with your doctor once a year keeps it accurate and closes problems that no longer apply.

                ## Milestones
                1. Your coded problem list obtained from the portal or practice.
                2. Each entry marked as current, resolved or questionable.
                3. A review held with your doctor to correct or close entries.
                4. The updated list filed and matched against your one-page summary.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Your coded problem list has been reviewed with your doctor within the last year, with resolved and wrong entries corrected."
                cadence: cyclic
              tasks:
                - "Download or request your coded problem list"
                - "Mark each entry as current, resolved or questionable"
                - "Book a review of the problem list with your doctor @recurring(yearly)"
                - "Match your one-page summary to the corrected list"
---

# Medical Test Results & Records

This area is for anyone who has sat in front of a new doctor trying to remember when a test was done or what a hospital letter said. It starts with the foundations (a full copy of your record, portal access, one well-named folder, a one-page summary and a five-year results table), then the routines that bring new documents in and chase what is missing, the skills to read lab, imaging and clinic reports, the decisions about apps, sharing and corrections, the events that need a records pack, the situations of parents, carers, students and people moving abroad, and finally the specialist work of dashboards, image archives and a lifetime timeline.

What repeats is a monthly sweep of portals and post, a weekly chase of pending results, monthly checks of follow-up actions and overdue letters, a quarterly audit and backup test, and a yearly round of hospital requests, summary refreshes and problem list review. The Metrics log, Operational checklist, Meeting notes and Purchase decision templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
