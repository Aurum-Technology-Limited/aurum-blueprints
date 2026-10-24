---
id: finance-certifications.cfa-charter-application
name: CFA Charter Application
description: "From a Level III pass to a charter you can use: qualifying experience logged, references and the membership application, a local society, and the yearly conduct statement, dues and ethics routines."
category: personal
version: 1.0.0
tags: [finance-certifications, cfa-charter-application, knowledge-worker, cfa, charterholder, professional-ethics, membership]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - person
    - development-plan
    - reading-queue
    - remediation-plan
    - meeting-notes
  pillars:
    - name: Finance & Business Certifications
      emoji: "🎓"
      description: "Finance and business exams taken one at a time: each CFA level, FRM, CAIA, CMA, CIMA, CAMS, wealth and actuarial credentials, ACCA papers and CPA sections, the GMAT, GRE and MBA applications, and the recruiting tests that stand between a candidate and a finance job."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: CFA Charter Application
          description: "Getting from passing Level III to using the charter: qualifying work experience, references, CFA Institute membership, a local society and the annual professional conduct statement."
          projects:
            - name: Charter eligibility check after the Level III result
              description: |-
                ## Purpose
                Passing Level III does not award the charter on its own: CFA Institute also looks at qualifying work experience, professional references and a membership application that includes agreeing to the Code and Standards. Reading the current requirements in the week your result arrives tells you whether you can apply now or have a gap to close, and how big that gap is.

                ## Milestones
                1. Your Level III pass confirmed in your CFA Institute account, with the result letter saved.
                2. The current charter and membership requirements read on the CFA Institute website and summarised on one page.
                3. Each requirement marked as met, nearly met or not yet met.
                4. A target month for submitting your application written down.

                ## Notes
                Requirements and their figures change from time to time, so work from the website on the day you check, not from a forum post or a colleague's memory of how it was for them.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A one-page summary of the current charter requirements, each marked met or not met, with a target application month recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Download and save your Level III result letter from your CFA Institute account"
                - "Read the current charter and membership requirements on the CFA Institute website"
                - "Note the experience, reference and membership rules on one page"
                - "Mark each requirement as met, nearly met or not yet met"
                - "Pick a target month to submit the membership application"
            - name: Qualifying work experience audit
              description: |-
                ## Purpose
                Most delays in the charter process come from experience that does not clearly fit CFA Institute's description of work in, or directly supporting, the investment decision-making process. Going through every role you have held, with dates and an honest estimate of qualifying hours, shows whether you already have enough and which roles will need careful wording.

                ## Milestones
                1. Every role since leaving full-time education listed with employer, title and start and end dates.
                2. Each role compared with CFA Institute's published description and examples of qualifying experience.
                3. An estimate of qualifying hours for each role, with the reasoning in one sentence.
                4. A total compared with the current requirement, and the shortfall in months if there is one.
                5. A written decision to apply now or a date to apply later.

                ## Notes
                Be conservative. A role that only partly involves investment work should be counted for the share of time that genuinely does, and the estimate should survive a question from a reviewer or a reference.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A role-by-role table with qualifying hours estimated and totalled against the current requirement, ending in a written decision to apply now or later."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every role you have held with dates, employer and title"
                - "Read CFA Institute's examples of qualifying and non-qualifying experience"
                - "Estimate the qualifying share of hours in each role"
                - "Compare your total with the current requirement and record the gap"
                - "Decide whether to apply now or set a date to apply later"
            - name: Work experience hours log
              description: |-
                ## Purpose
                If you are still building up qualifying experience, a monthly log is far easier to defend than a reconstruction from memory two years later. Recording hours, the investment work done and who supervised it gives you the raw material for the application and for the people who will act as your references.

                ## Milestones
                1. A log with columns for month, employer, hours, qualifying share, work done and supervisor.
                2. Past months filled in from calendars, timesheets or appraisals as far back as you can go.
                3. A running total showing progress toward the current requirement.
                4. The log kept on a personal account and backed up outside your work systems.

                ## Notes
                Start from the **Metrics log** template. Keep it on a personal account: access to work files usually ends the day you change jobs.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A personal log holding monthly qualifying hours with a running total, updated every month until the experience requirement is met."
                cadence: rolling
              tasks:
                - "Create an experience log from the metrics log template"
                - "Fill in past months from calendars, timesheets and appraisals"
                - "Add a running total and the target from the current requirement"
                - "Record the month's qualifying hours and the work behind them @recurring(monthly:28)"
            - name: CFA Institute profile and records clean-up
              description: |-
                ## Purpose
                Applications stall over small mismatches: a name that differs from your passport, an employer you left a year ago, an email address you no longer check. Half an hour in your CFA Institute account before you apply means the award letter, the certificate and every renewal notice reach you with the right name on them.

                ## Milestones
                1. Your name in the account matching your identity document exactly.
                2. Current employer, job title and country of work updated.
                3. A personal email address set as primary, with CFA Institute messages allowed through your spam filter.
                4. The postal address checked for any printed certificate or letters.
              priority: medium
              deadlineOffsetDays: 21
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your CFA Institute account shows your legal name, current employer, a personal email and a postal address, all checked on the same date."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Compare the name in your account with your passport or national ID"
                - "Update your employer, job title and country of work"
                - "Set a personal email as the primary address"
                - "Add CFA Institute email domains to your safe senders list"
                - "Check the postal address where a printed certificate would go"
            - name: Choosing your professional references
              description: |-
                ## Purpose
                References confirm your character and, often, your experience, and one reference who is slow to respond can hold up the whole application. Choosing people who know your work, checking they qualify under the current rules and asking them early makes this the shortest step rather than the longest.

                ## Milestones
                1. The current rules on who can act as a reference read and noted.
                2. A shortlist of people who know your investment work, each checked against those rules.
                3. Each chosen reference asked personally before their name goes on the form.
                4. Current contact details and a short brief on your roles sent to each reference.

                ## Notes
                Start from the **Person** template for each reference. Give them a short note of your roles and dates so they are not answering from memory, and warn them when the request email is coming.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "The required references agreed in person or by message, each confirmed as eligible and with current contact details recorded."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Check the current rules on who can act as a professional reference"
                - "List five people who know your investment work well"
                - "Ask your chosen references personally before naming them"
                - "Send each reference a short summary of your roles and dates"
                - "Create a person page for each reference with their contact details"
            - name: Experience descriptions for the application
              description: |-
                ## Purpose
                Reviewers read how you describe each role, not your job title, so an analyst at one firm and an analyst at another can be judged very differently. Writing plain, specific descriptions of what you did, which decisions it fed and what share of your time it took makes your experience easy to approve and consistent with what your references will say.

                ## Milestones
                1. A draft description for every qualifying role, written around tasks and decisions rather than titles.
                2. Each description linked to the investment decision-making process in one sentence.
                3. Every claim checked against your hours log and what your references actually saw.
                4. The final text read by a colleague or mentor who knows the work.

                ## Notes
                Avoid inflation. Overstating your responsibility on a membership application is a professional conduct problem, not just a weak application.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A final description for every role you are claiming, each within the form's length limit and checked against your hours log."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write one paragraph per role on what you did and who used the output"
                - "Ask the agent to tighten each description without adding any claims"
                - "Check every description against your hours log"
                - "Ask a mentor who knows your work to read the final text"
            - name: Submitting the charter membership application
              description: |-
                ## Purpose
                Once experience, references and descriptions are ready, the application itself is a single sitting: the form, the declarations, agreeing to the Code and Standards and paying the dues. Doing it in one planned session, with every document to hand, avoids a half-finished form that times out or a declaration answered in a hurry.

                ## Milestones
                1. Experience descriptions, reference details and dues payment ready in one folder.
                2. The application form completed and every declaration read in full.
                3. Dues paid and the receipt saved.
                4. The submission confirmation saved and a date set to check its status.
              priority: high
              deadlineOffsetDays: 75
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A submitted membership application, with the confirmation and dues receipt saved in your charter records folder."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Gather descriptions, reference details and your dues payment in one folder"
                - "Book a quiet two-hour slot to complete the application"
                - "Read every declaration in full before answering it"
                - "Save the submission confirmation and the dues receipt"
                - "Check the application status two weeks after submitting"
            - name: Choosing a local CFA society
              description: |-
                ## Purpose
                Membership of CFA Institute and of a local society are linked but separate, and the society is where events, continuing education, job boards and local contacts actually happen. Choosing between the society where you work, the one where you live, or the nearest one when your own country has none, deserves a short comparison rather than a default.

                ## Milestones
                1. The societies you could join listed, with their dues and the events they ran last year.
                2. Virtual and in-person programmes compared for the one or two that fit.
                3. A society chosen and recorded on your membership profile.
                4. The society's newsletter and events calendar subscribed to.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "One local society chosen with the reason recorded, and its events calendar added to your diary."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "List the societies near where you work and where you live"
                - "Compare each society's dues and last year's events programme"
                - "Choose a society and add it to your membership profile"
                - "Subscribe to the chosen society's newsletter and events calendar"
            - name: Charter costs and who pays for them
              description: |-
                ## Purpose
                Annual dues to CFA Institute and to your society, plus events and courses, become a standing cost from the year you are awarded the charter. Many employers in investment roles reimburse them, but often only if you ask before the invoice is paid, so putting the figures and the request in writing early can save a year of paying it yourself.

                ## Milestones
                1. This year's CFA Institute and society dues noted from the official pages.
                2. Your employer's policy on professional memberships found or asked about.
                3. A written request for reimbursement sent, if the policy allows it.
                4. The yearly cost, the month it falls due and who pays it recorded in your budget.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "The yearly charter cost recorded in your budget, with a written answer from your employer on whether it reimburses dues."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Note this year's CFA Institute and society dues from their websites"
                - "Find your employer's policy on professional membership fees"
                - "Email your manager or HR asking about reimbursement"
                - "Add the yearly dues to your budget with the month they fall due"
            - name: Telling your employer's compliance team
              description: |-
                ## Purpose
                In regulated firms, holding a designation, joining a society and later volunteering or speaking can all count as outside activities or change how you may be described to clients. Telling compliance early, and getting approval for how the charter appears in marketing and bios, avoids an awkward correction after something has been published.

                ## Milestones
                1. Your firm's policy on professional designations and outside activities read.
                2. Compliance told in writing about your membership and society.
                3. Approved wording received for your bio, email signature and client materials.
                4. The approval saved in your charter records folder.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Written confirmation from compliance that your charter, society membership and approved bio wording are on record."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your firm's policy on designations and outside activities"
                - "Email compliance about your charter and society membership"
                - "Ask for approved wording for your bio and email signature"
                - "Confirm your outside activities with compliance @recurring(yearly)"
            - name: Annual Professional Conduct Statement
              description: |-
                ## Purpose
                Every year, members renew by completing the Professional Conduct Statement, which confirms compliance with the Code and Standards and asks about matters such as complaints, regulatory actions and litigation. Treating it as a planned yearly task, with time to think about each question, protects your right to use the designation and avoids a rushed answer you later have to correct.

                ## Milestones
                1. The renewal window noted in your calendar with a reminder a week before it opens.
                2. Any events from the past year that might need disclosure listed and reviewed.
                3. The statement completed and submitted inside the renewal window.
                4. The confirmation saved with the year in its file name.

                ## Notes
                If you are unsure whether something needs disclosing, read CFA Institute's guidance first and take advice before you submit, rather than guessing in the form.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A Professional Conduct Statement submitted inside every renewal window, with that year's confirmation saved."
                cadence: cyclic
              tasks:
                - "Find when the renewal window opens and add it to your calendar"
                - "List anything from the past year that might need disclosing"
                - "Complete and submit the conduct statement during renewal @recurring(yearly)"
                - "Save the submission confirmation in your charter records folder"
            - name: Membership and society dues renewal
              description: |-
                ## Purpose
                Dues lapse quietly: a card expires, an invoice goes to an old work address, and the designation can no longer be used until the membership is restored. A yearly routine that pays CFA Institute and society dues in the same week, and files the receipts for reimbursement, keeps you in good standing without much thought.

                ## Milestones
                1. The renewal dates for CFA Institute and your society both in your calendar.
                2. The payment method on file checked before each renewal.
                3. Both dues paid and receipts saved.
                4. Reimbursement claimed from your employer where it applies.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "CFA Institute and society dues paid every year before the deadline, with receipts filed and reimbursement claimed where offered."
                cadence: cyclic
              tasks:
                - "Add both renewal dates to your calendar"
                - "Pay CFA Institute membership dues before the deadline @recurring(yearly)"
                - "Pay local society dues and save the receipt @recurring(yearly)"
                - "Submit the receipts for reimbursement if your employer pays"
            - name: Continuing education hours record
              description: |-
                ## Purpose
                CFA Institute encourages members to complete a yearly amount of continuing education, including standards and ethics content, and many employers and regulators ask for evidence of professional development too. Logging each event, course or piece of reading with its hours as it happens means the year-end figure is a sum, not a guess.

                ## Milestones
                1. A record with date, activity, provider, hours and whether it counts as standards and ethics.
                2. The currently recommended yearly hours noted from CFA Institute's website.
                3. Each activity logged within a week of doing it.
                4. A year-end total compared with the recommended amount.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A dated continuing education record with every activity and its hours, totalled each quarter against the recommended yearly amount."
                cadence: rolling
              tasks:
                - "Set up a record of activities, hours and ethics content"
                - "Check the currently recommended yearly hours on CFA Institute's site"
                - "Log the month's courses, events and reading with their hours @recurring(monthly:18)"
                - "Compare the year-to-date total with your plan @recurring(quarterly)"
            - name: Annual continuing education plan
              description: |-
                ## Purpose
                Without a plan, continuing education becomes whatever webinar lands in the inbox. Choosing two or three topics each year that serve your current role or the one you want next, and booking the courses and events that cover them, turns a membership expectation into real development.

                ## Milestones
                1. Two or three learning priorities for the year chosen and written down.
                2. Courses, society events and reading matched to each priority.
                3. At least one standards and ethics activity booked.
                4. Last year's plan reviewed against what you actually did.

                ## Notes
                Start from the **Development plan** template. A priority tied to a real piece of work, such as a new asset class your desk is entering, is far more likely to be followed through.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A written plan for the year naming two or three priorities and the activities booked for each, reviewed at year end."
                cadence: cyclic
              tasks:
                - "Choose two or three learning priorities for the coming year"
                - "Match society events and courses to each priority"
                - "Book at least one standards and ethics activity"
                - "Review last year's plan and write next year's @recurring(yearly)"
            - name: Monthly Standards of Practice case
              description: |-
                ## Purpose
                Ethics knowledge from Level III fades fast once you are doing the job, yet the situations the Standards cover, such as material nonpublic information, fair dealing and suitability, arrive without warning. Reading one Standard and one worked case from the Standards of Practice Handbook each month keeps the reasoning fresh enough to use under pressure.

                ## Milestones
                1. A current copy of the Standards of Practice Handbook saved.
                2. A rotation through every Standard planned across the year.
                3. A short note written after each case on how it applies to your role.
                4. The full set covered at least once in twelve months.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly notes, one per Standard or case, each linking the case to your own role."
                cadence: rolling
              tasks:
                - "Download the current Standards of Practice Handbook"
                - "Plan which Standard to read in each month of the year"
                - "Read one Standard and its cases and write a two-line note @recurring(monthly:9)"
            - name: Quarterly designation use audit
              description: |-
                ## Purpose
                Your name with the designation ends up in more places than you remember: LinkedIn, the firm website, conference bios, pitch books, email signatures and old proposals. Checking them every quarter catches mistakes such as using the marks before award, after a lapse, or in wording the guidance does not allow.

                ## Milestones
                1. A list of every place your name and designation appear.
                2. Each place checked against CFA Institute's guidance on using the marks.
                3. Errors corrected, or reported to whoever owns the page.
                4. The list updated with any new bios or profiles.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A list of every profile and bio showing your designation, checked each quarter, with every error found corrected."
                cadence: rolling
              tasks:
                - "List every profile, bio and signature that shows your designation"
                - "Check each one against the guidance on using the CFA marks"
                - "Ask the owners of firm or event pages to fix any errors"
                - "Review the list and search for new bios @recurring(quarterly)"
            - name: Personal trading and conflicts record
              description: |-
                ## Purpose
                Charterholders are expected to put clients and employers ahead of their own dealings, and most firms back that with pre-clearance, holding periods and disclosure rules. Keeping your own record of trades, approvals and disclosed interests, matched to the firm's policy, means you can answer any question about them in minutes.

                ## Milestones
                1. Your firm's personal account dealing and conflicts policy read and summarised.
                2. A personal list of accounts, holdings and outside interests that need disclosure.
                3. Every trade matched to its pre-clearance and confirmation.
                4. Disclosures updated whenever an interest changes.

                ## Notes
                This is a record-keeping routine, not trading advice. Your firm's compliance team decides what is allowed, and its records are the ones that count.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "A personal record in which every trade in the year matches a pre-clearance and confirmation, and disclosed interests are current."
                cadence: rolling
              tasks:
                - "Summarise your firm's personal dealing and conflicts policy"
                - "List the accounts and outside interests you must disclose"
                - "Match the month's trades to their pre-clearance and confirmations @recurring(monthly:3)"
                - "Update your disclosures when an interest changes"
            - name: Society events rhythm
              description: |-
                ## Purpose
                The value of a local society shows up only if you attend: forecast dinners, ethics panels, career evenings and member socials are where you meet the people who will later hire you, refer you or vouch for your juniors. One event a quarter, chosen on purpose, is a pace most working charterholders can keep.

                ## Milestones
                1. The society's calendar checked and four events for the year chosen.
                2. Each chosen event in your diary with registration done.
                3. Two contacts followed up after each event.
                4. Event hours added to your continuing education record where they count.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four society events attended in a year, each followed by at least two follow-up messages."
                cadence: rolling
              tasks:
                - "Pick four society events for the year from its calendar"
                - "Register for the next chosen event and block the time"
                - "Attend a society event and follow up with two people @recurring(quarterly)"
                - "Add eligible event hours to your continuing education record"
            - name: Charterholder records folder
              description: |-
                ## Purpose
                Award letters, conduct statement confirmations, dues receipts, compliance approvals and course certificates are needed at odd moments: a regulator's form, a reimbursement claim, a client's due diligence questionnaire. One personal folder, filed every quarter, means none of them lives only in a work inbox you might lose.

                ## Milestones
                1. A personal folder with sections for award, membership, conduct, continuing education and compliance.
                2. Existing documents gathered from email and downloads into it.
                3. A naming rule using year and document type applied to every file.
                4. A backup copy kept outside your work systems.
              priority: low
              frontmatter:
                mode: operating
                output_kind: artifact
                success_criteria: "A personal folder holding every charter document by year and type, filed at least once a quarter."
                cadence: rolling
              tasks:
                - "Create a personal folder with five sections for charter records"
                - "Move existing letters, receipts and certificates into it"
                - "Rename files with the year and document type"
                - "File the quarter's receipts and confirmations @recurring(quarterly)"
            - name: Code and Standards from candidate to practitioner
              description: |-
                ## Purpose
                Studying the Code and Standards for an exam is about picking the right answer; living by them is about noticing the situation before it becomes a question. Rereading the seven Standards with your actual role in mind, over a few weeks after you apply, shifts them from exam material to a working checklist.

                ## Milestones
                1. All seven Standards reread with your current job beside them.
                2. The three Standards most relevant to your role named, with the reason.
                3. A one-page personal checklist of situations to stop and think about.
                4. The checklist shared with your manager or a trusted colleague for comment.
              priority: medium
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page checklist linking the Standards most relevant to your role to real situations, reviewed by a colleague."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Reread Standards I and II with your current role in mind"
                - "Reread Standards III to VII over the following weeks"
                - "Pick the three Standards that matter most for your job"
                - "Write a one-page checklist of situations to pause on"
                - "Reread the Code and Standards after each conduct statement @recurring(yearly)"
            - name: Using the CFA marks correctly
              description: |-
                ## Purpose
                CFA Institute publishes guidance on how the designation and its marks may be used, and the common slips are easy to make: calling yourself a CFA as a noun, implying the charter guarantees better results, or using it while membership has lapsed. Learning the rules once, before you change a single profile, saves corrections and possible conduct questions later.

                ## Milestones
                1. CFA Institute's current guidance on using the marks read in full.
                2. Correct and incorrect forms written on one reference card.
                3. The rules for describing candidate status noted, for juniors who ask.
                4. Your planned profile wording checked against the card.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page reference card of correct and incorrect uses of the marks, with your own planned profile wording checked against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read CFA Institute's guidance on using the designation and marks"
                - "Write correct and incorrect examples on one reference card"
                - "Note how candidates may describe their exam progress"
                - "Check your planned profile wording against the card"
            - name: How the Professional Conduct Program works
              description: |-
                ## Purpose
                Few charterholders know what happens when a complaint is made, a regulator acts or a conduct statement reveals a problem, until they or a colleague are inside the process. Understanding the stages, the possible outcomes and your duty to cooperate means you could respond calmly and get the right advice early.

                ## Milestones
                1. CFA Institute's published description of the Professional Conduct Program read.
                2. The main stages from inquiry to outcome summarised in your own words.
                3. The kinds of events members are expected to disclose listed.
                4. A note of who you would contact first if you received an inquiry.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A one-page summary of the conduct process and disclosure duties, naming the people you would contact first."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read the published overview of the Professional Conduct Program"
                - "Summarise the stages from inquiry to outcome in your own words"
                - "List the events members are expected to disclose"
                - "Name the adviser and colleague you would contact first"
            - name: Grey areas in your own role, written as cases
              description: |-
                ## Purpose
                Handbook cases are useful, but the hard calls are the ones specific to your desk: a client's gift at Christmas, a tip overheard at a conference, a research view the sales team wants softened. Writing three to five of your own cases, each with the Standard it touches and what you would do, builds judgement that generic examples cannot.

                ## Milestones
                1. Three to five real or realistic situations from your role written up without client names.
                2. Each case linked to the Standard or Standards it engages.
                3. A proposed course of action for each, checked against the Handbook.
                4. One case discussed with a senior colleague or compliance.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "At least three written cases from your own role, each mapped to a Standard with a course of action, one discussed with a senior colleague."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Write down three ethical grey areas you have seen in your role"
                - "Link each situation to the Standard it engages"
                - "Draft what you would do and check it against the Handbook"
                - "Talk one case through with a senior colleague or compliance"
                - "Add a new case from the quarter's work @recurring(quarterly)"
            - name: Social media posts and the Standards
              description: |-
                ## Purpose
                Posting market views, sharing your firm's research or celebrating a closed deal online can touch misrepresentation, confidentiality, fair dealing and your firm's communications rules at once. Setting your own rules for what you will and will not post, before anything goes out with the designation beside your name, keeps a quick update from becoming a conduct issue.

                ## Milestones
                1. Your firm's social media and external communications policy read.
                2. CFA Institute guidance on social media and the Standards read.
                3. A short list of personal posting rules written.
                4. Your existing posts reviewed against those rules.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A written list of personal posting rules consistent with your firm's policy, with the past year of posts reviewed against it."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Read your firm's social media and communications policy"
                - "Find CFA Institute guidance on social media use"
                - "Write five personal rules for what you will post"
                - "Review your last year of posts against those rules"
            - name: Explaining the charter in plain words
              description: |-
                ## Purpose
                Clients, family and even hiring managers outside investment roles often do not know what the charter means, and the temptation is to oversell it. A short, accurate explanation of what it took and what it signals, without implying better results, is useful in pitches, interviews and conversations at home.

                ## Milestones
                1. A thirty-second spoken explanation written and timed.
                2. A two-sentence written version for bios and proposals.
                3. Both versions checked against the guidance on using the marks.
                4. The explanation tried on two people outside finance.
              priority: low
              deadlineOffsetDays: 60
              frontmatter:
                mode: learning
                output_kind: artifact
                success_criteria: "A thirty-second explanation and a two-sentence written version, both checked against the marks guidance and tested on two people."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Write a thirty-second explanation of what the charter involves"
                - "Cut it to two sentences for written bios"
                - "Check both versions against the guidance on using the marks"
                - "Try the explanation on two people outside finance"
            - name: CFA Institute research reading queue
              description: |-
                ## Purpose
                Members get access to journals, research foundation books, standards updates and policy papers that many never open. A short reading queue, with one item each month chosen for your role, turns that access into real knowledge and into continuing education hours you can record.

                ## Milestones
                1. The member research and publications pages bookmarked.
                2. A queue of six items relevant to your role.
                3. One item read each month with a three-line note.
                4. Reading time added to your continuing education record.

                ## Notes
                Start from the **Reading queue** template.
              priority: low
              frontmatter:
                mode: learning
                output_kind: habit
                success_criteria: "Twelve items read in a year from member publications, each with a short note and logged hours."
                cadence: rolling
              tasks:
                - "Bookmark the member research and publications pages"
                - "Build a queue of six items relevant to your role"
                - "Read one item from the queue and write a three-line note @recurring(monthly:24)"
                - "Log the reading time in your continuing education record"
            - name: Membership options while experience is short
              description: |-
                ## Purpose
                Passing Level III with a year or two of experience still to go leaves an awkward gap: you cannot use the designation yet, but you can stay connected to the profession. Checking whether your society offers a candidate or affiliate category, and what it costs, lets you decide whether to join now or wait until you can apply as a full member.

                ## Milestones
                1. Your society's membership categories and fees read.
                2. The benefits of joining now listed against the cost.
                3. A decision recorded, with a date to revisit it.
                4. Correct wording for your status agreed for your CV and profiles.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A written decision on joining a society before the charter, with a revisit date and agreed wording for your status."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read your society's membership categories and fees"
                - "List what you would gain by joining before the charter"
                - "Decide whether to join now and record the reason"
                - "Write the correct wording for your status on your CV"
            - name: Regulatory exemptions the charter may earn
              description: |-
                ## Purpose
                In some jurisdictions the charter counts toward licensing: for example, many US states waive an investment adviser exam for charterholders, and other regulators recognise it for certain roles. Checking what your own securities regulator accepts could save an exam or shorten a registration, but only the regulator's current rules can tell you.

                ## Milestones
                1. Your securities regulator's licensing requirements for your role found.
                2. Any recognition of the charter noted, with the source.
                3. The exemption process and documents required listed.
                4. A decision recorded on whether to apply for it.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A note citing your regulator's current rules on whether the charter exempts you from any exam, with a decision to apply or not."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Find your securities regulator's licensing rules for your role"
                - "Search those rules for any recognition of the CFA charter"
                - "List the documents an exemption request would need"
                - "Ask compliance whether to apply and record the answer"
            - name: CV, title and profiles updated after award
              description: |-
                ## Purpose
                After the award letter arrives, there is a short list of places where the change should appear: your CV, LinkedIn, the firm's people page, your email signature and any client or regulator directories. Updating them in one sitting, with compliance-approved wording, means the designation appears correctly everywhere at once.

                ## Milestones
                1. Every place to update listed from your designation use audit.
                2. Compliance-approved wording applied to each.
                3. Firm pages updated through the right team.
                4. A verification link or digital badge added where CFA Institute offers one.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Your CV, online profiles, signature and firm pages all show the designation in approved wording within a month of award."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Update your CV with the designation and the year of award"
                - "Change your LinkedIn headline and certifications section"
                - "Ask the web or marketing team to update your firm profile"
                - "Add the designation to your email signature in approved wording"
                - "Add the verification link or badge if one is offered"
            - name: Reinstating a lapsed membership
              description: |-
                ## Purpose
                Membership can lapse after missed dues or an unsubmitted conduct statement, often during a job change, a move or a busy year. While it is lapsed you should not use the designation, so a quick, organised reinstatement matters far more than any fee involved.

                ## Milestones
                1. The reason and date of the lapse confirmed in your account or with CFA Institute.
                2. Every place showing the designation paused or edited until reinstatement.
                3. Outstanding dues, the conduct statement and any reinstatement form completed.
                4. Reinstatement confirmed in writing and the cause fixed for next year.

                ## Notes
                Start from the **Remediation plan** template.
              priority: medium
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "Membership reinstated with written confirmation, the designation removed from profiles during the lapse, and the cause fixed."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Check your account to confirm why and when membership lapsed"
                - "Remove the designation from profiles until you are reinstated"
                - "Complete the reinstatement steps and pay what is owed"
                - "Fix the cause, such as an expired card or an old email address"
            - name: Answering a disclosure question on the conduct statement
              description: |-
                ## Purpose
                A customer complaint, a regulatory inquiry, a lawsuit or a criminal matter may each need to be disclosed on the Professional Conduct Statement, and getting the disclosure wrong can be more serious than the event itself. Gathering the facts, reading the guidance and taking advice before you answer turns a stressful renewal into an accurate, complete record.

                ## Milestones
                1. The event described in a dated factual summary, with documents gathered.
                2. CFA Institute's guidance on that disclosure question read.
                3. Advice taken from your own lawyer or adviser where the matter is legal or regulatory.
                4. The disclosure made accurately and the submission saved.

                ## Notes
                This project organises the facts. Whether and how to disclose a specific matter is a question for CFA Institute's guidance and your own legal adviser, not for a colleague's opinion.
              priority: high
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A factual summary and supporting documents prepared, advice taken where needed, and a complete disclosure submitted with a saved copy."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Write a dated factual summary of what happened"
                - "Gather the letters, notices and filings involved"
                - "Read the guidance on the disclosure question concerned"
                - "Take advice from your own lawyer if the matter is legal or regulatory"
                - "Submit the disclosure and save a copy"
            - name: Responding to an application held for review
              description: |-
                ## Purpose
                Sometimes the membership team asks for more information: a clearer role description, a reference who has not responded, or a document confirming dates. Replying quickly, with exactly what was asked and nothing that contradicts what you already submitted, keeps the decision moving.

                ## Milestones
                1. The request read and each item listed separately.
                2. Evidence for each item gathered and checked against your original application.
                3. Slow references chased politely, or replaced if the rules allow.
                4. A complete reply sent and the date recorded.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A complete reply to every item in the review request sent within two weeks, with the date recorded."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "List each item the membership team has asked for"
                - "Gather evidence for each item and compare it with your application"
                - "Chase any reference who has not yet responded"
                - "Send one complete reply and note the date"
            - name: Charter award notification and first week
              description: |-
                ## Purpose
                The award email is the moment you can start using the designation, and a few things are best done that same week: confirming the record, downloading what CFA Institute provides and formally telling the people who need to know. Planning the first week means excitement does not lead to profiles changed before the record is final.

                ## Milestones
                1. The award confirmation saved and your member record checked.
                2. Any certificate, badge or verification link downloaded or requested.
                3. Compliance and your manager told in writing.
                4. References thanked and the award date noted for your CV.
              priority: high
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Within a week of the award email, the member record is checked, compliance and your manager are told and every reference is thanked."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Save the award email and check your member record shows the charter"
                - "Download or request any certificate, badge or verification link"
                - "Tell compliance and your manager in writing"
                - "Send each reference a thank-you message"
            - name: Charter award ceremony
              description: |-
                ## Purpose
                Many societies hold a yearly ceremony or dinner for new charterholders, and it is a good place to meet the society's board, local employers and your own cohort. Deciding early whether to go, whom to bring and what it costs means you register before places fill.

                ## Milestones
                1. Your society's ceremony date and registration rules found.
                2. A decision made on attending and on guests.
                3. Registration and any ticket payment complete.
                4. Three new contacts followed up after the event.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Registration for the society's ceremony completed, or a decision not to attend recorded, with follow-ups sent if you went."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask your society when the next charter ceremony is"
                - "Decide whether to attend and whom to bring"
                - "Register and pay for any tickets"
                - "Follow up with three people you met at the ceremony"
            - name: Displaying the charter certificate
              description: |-
                ## Purpose
                Printed certificates can take a while to arrive and are easy to lose in an office move or a house move. Checking how yours is issued, choosing whether to frame it and storing a scan keeps one of the few physical records of the charter safe.

                ## Milestones
                1. How and when the certificate is issued confirmed.
                2. Dispatch tracked and the certificate received.
                3. The certificate scanned and the scan stored in your records folder.
                4. A decision made on framing and where it hangs.
              priority: low
              frontmatter:
                mode: event
                output_kind: artifact
                success_criteria: "The certificate received, scanned into your records folder and either framed or stored flat somewhere safe."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Check how and when the printed certificate is issued"
                - "Track the certificate's dispatch and chase it if it is late"
                - "Scan the certificate into your records folder"
                - "Choose a frame or store the certificate flat"
            - name: Announcing the charter to your network
              description: |-
                ## Purpose
                A short announcement tells clients, colleagues and recruiters what you have achieved, and the congratulations it draws often turn into useful conversations. Writing it with your firm's approval, in wording that respects the marks guidance, keeps it from needing a correction.

                ## Milestones
                1. A draft announcement written for your professional network.
                2. The draft approved by compliance where your firm requires it.
                3. The announcement posted or sent to the chosen audience.
                4. Replies answered within a week.
              priority: low
              frontmatter:
                mode: event
                output_kind: deliverable
                success_criteria: "An approved announcement posted or sent, with every reply answered within a week."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Ask the agent to draft a short announcement in your own voice"
                - "Send the draft to compliance if your firm requires approval"
                - "Post or send the approved announcement"
                - "Reply to messages within a week"
            - name: First society event as a charterholder
              description: |-
                ## Purpose
                Walking into your first society event can be hard if you studied alone and know nobody there. Picking a smaller event, preparing a one-line introduction and setting a modest goal of two real conversations makes the first one the easiest to repeat.

                ## Milestones
                1. A smaller event chosen and registered for.
                2. A one-line introduction about your role prepared.
                3. Two real conversations held.
                4. Follow-up messages sent within three days.
              priority: low
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "One society event attended, with two conversations held and follow-ups sent within three days."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose a small society event in the next two months"
                - "Prepare a one-line introduction about your role"
                - "Hold two real conversations at the event"
                - "Send follow-up messages within three days"
            - name: Experience gained outside investment management
              description: |-
                ## Purpose
                Corporate finance, credit analysis, audit, treasury, risk and banking roles can include qualifying work, but reviewers need to see where the investment decision-making content sits. Separating the qualifying parts of your work from the rest, with concrete examples, gives a fair claim that neither inflates nor undersells it.

                ## Milestones
                1. The parts of each role involving investment analysis or decisions identified.
                2. A share of time estimated for those parts, with examples.
                3. Role descriptions written around those examples.
                4. A reference who saw that work agreed.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: research
                output_kind: deliverable
                success_criteria: "Role descriptions that isolate investment work with examples and a time share, backed by a reference who saw that work."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List the investment analysis or decisions your role includes"
                - "Estimate the share of your time spent on that work"
                - "Write role descriptions around specific examples"
                - "Agree a reference who saw that part of your work"
            - name: Charter from a small Caribbean market
              description: |-
                ## Purpose
                Smaller financial centres across the Caribbean may have no local society, few charterholders to act as references and a limited number of investment roles. Planning around those limits, with a regional or virtual society, references drawn from wider networks and continuing education online, makes the charter as usable in Port of Spain, Kingston or Bridgetown as in a large hub.

                ## Milestones
                1. The societies serving your country or the wider region identified.
                2. Reference options beyond your current employer considered.
                3. Online continuing education sources chosen.
                4. Contact made with at least two charterholders in the region.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A chosen society, at least two regional charterholder contacts and an online continuing education source recorded."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Find which CFA societies serve your country or region"
                - "List charterholders in the region you could contact"
                - "Choose two online continuing education sources"
                - "Message two regional charterholders to introduce yourself"
            - name: Self-employed and consulting experience
              description: |-
                ## Purpose
                Freelance analysts, independent advisers and consultants often do qualifying work with no supervisor to confirm it. Keeping engagement letters, invoices and deliverables, and asking clients who saw the work to act as references where the rules allow, gives the membership team something solid to review.

                ## Milestones
                1. Engagements listed with client, dates, hours and the investment work done.
                2. Supporting documents gathered for each engagement, with confidential details removed.
                3. Clients who could act as references identified and asked.
                4. Descriptions written that respect client confidentiality.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "An engagement list with hours and supporting documents for every claimed engagement, with references agreed."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "List each engagement with client, dates and hours"
                - "Gather engagement letters and invoices with confidential details removed"
                - "Ask clients who saw your work whether they could act as references"
                - "Write descriptions that reveal no client confidential information"
            - name: Part-time work and career breaks in the experience period
              description: |-
                ## Purpose
                Parental leave, caring for a relative, further study or part-time contracts slow the build-up of qualifying experience, and the rules count hours rather than job titles. Recording reduced hours honestly and projecting when the requirement will be met lets you set a realistic application date without guessing.

                ## Milestones
                1. Periods of leave and part-time work listed with dates and weekly hours.
                2. Qualifying hours recalculated for those periods.
                3. A projected date when the requirement will be met.
                4. A note kept for your references explaining any gaps.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recalculated experience total covering leave and part-time periods, with a projected application date recorded."
                cadence: phased
                effort_hours_estimate: "2"
              tasks:
                - "List leave and part-time periods with dates and weekly hours"
                - "Recalculate qualifying hours for those periods"
                - "Project the month the requirement will be met"
                - "Write a short note for references explaining any gaps"
            - name: Applying years after passing Level III
              description: |-
                ## Purpose
                Some candidates pass Level III and leave the application for years, until a job move or a client question brings it back. Old employers may have closed, supervisors may have moved on and records are harder to find, so a structured catch-up, starting with the current rules, makes a late application straightforward.

                ## Milestones
                1. The current rules checked for any time limits or changes since you passed.
                2. Old roles reconstructed from contracts, payslips and tax records.
                3. Former supervisors or colleagues traced and asked to act as references.
                4. The application submitted.
              priority: medium
              deadlineOffsetDays: 90
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A late application submitted with reconstructed role records and traced references, after checking the current rules."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Check the current rules for any time limits since your pass"
                - "Reconstruct old roles from contracts, payslips and tax records"
                - "Trace former supervisors through professional networks"
                - "Book a date to submit the application"
            - name: Moving countries as a charterholder
              description: |-
                ## Purpose
                Moving for work changes which society suits you, which regulator governs your role and how the charter is recognised. Updating your membership, joining the society in your new city and checking local recognition in the first few months keeps the charter working for you abroad.

                ## Milestones
                1. Your member record updated with the new country and employer.
                2. Society membership transferred, or a second society joined.
                3. Local regulatory recognition of the charter checked.
                4. Two local charterholders met in the first three months.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "Member record updated, society membership moved and local recognition checked within three months of arriving."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Update your member record with the new country and employer"
                - "Join the society in your new city or transfer your membership"
                - "Check how the local regulator treats the charter"
                - "Arrange coffee with two local charterholders"
            - name: Retired membership in later career
              description: |-
                ## Purpose
                When you stop working in investment roles, keeping full membership may no longer make sense, but losing the right to the designation by accident is a poor ending to decades of work. Checking the retired membership option, its cost and what it allows lets you choose deliberately when that time comes.

                ## Milestones
                1. The current retired membership criteria and dues read.
                2. The rules on using the designation while retired noted.
                3. A decision recorded on switching status.
                4. Profiles updated to reflect the status you choose.
              priority: low
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on retired membership, with every profile matching the chosen status."
                cadence: one-shot
                effort_hours_estimate: "1"
              tasks:
                - "Read the current retired membership criteria and dues"
                - "Note how the designation may be used while retired"
                - "Decide whether to switch status and record why"
                - "Update profiles to match the status you choose"
            - name: Acting as a professional reference for a colleague
              description: |-
                ## Purpose
                Once you hold the charter, juniors will ask you to act as a reference, and your answers carry your own professional standing. Agreeing only when you genuinely know the work, checking their description against what you saw and answering promptly is a service to them and to the profession.

                ## Milestones
                1. A rule written on when you will and will not agree to be a reference.
                2. Each candidate's role description read against what you observed.
                3. Each reference form completed accurately within a week.
                4. A list kept of whom you have supported.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Every reference you give is completed within a week and matches work you observed, with a list of whom you supported."
                cadence: rolling
              tasks:
                - "Write down when you will agree to act as a reference"
                - "Read the candidate's role description against what you saw"
                - "Complete the reference form within a week of the request"
                - "Keep a list of the people you have supported"
            - name: Mentoring candidates through the charter process
              description: |-
                ## Purpose
                Candidates often stumble on the steps after the exams rather than the exams themselves: the experience rules, the references and the conduct statement. Mentoring one or two people a year, through your society or your firm, passes on what you learned and counts toward your own development.

                ## Milestones
                1. A mentoring scheme joined or an informal arrangement agreed.
                2. Expectations set on frequency and topics.
                3. A regular call held with each mentee.
                4. Each mentee's application submitted or next step written down.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "At least one mentee supported through a year of monthly calls, with their next step written down."
                cadence: rolling
              tasks:
                - "Ask your society or firm about mentoring schemes"
                - "Agree topics and frequency with your mentee"
                - "Hold a monthly call with each mentee @recurring(monthly:12)"
                - "Review progress with each mentee every six months"
            - name: Volunteering with CFA Institute programmes
              description: |-
                ## Purpose
                Experienced members help write and review exam questions, grade constructed responses, sit on committees and contribute to practice analysis. Volunteering builds a network across countries and sharpens your own expertise, and the application cycles come round on a regular calendar.

                ## Milestones
                1. Current volunteer opportunities and their eligibility rules read.
                2. One opportunity chosen that fits your time and skills.
                3. Your employer's approval for the time commitment recorded.
                4. An application submitted in the open cycle.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "An application submitted for a CFA Institute volunteer role, with employer approval for the time recorded."
                cadence: cyclic
              tasks:
                - "Read the current volunteer opportunities and who can apply"
                - "Choose one role that fits your time and expertise"
                - "Ask your employer to approve the time commitment"
                - "Check the volunteer application cycle and apply when it opens @recurring(yearly)"
            - name: Serving on a local society board
              description: |-
                ## Purpose
                Society boards and committees plan events, run programmes for candidates, find sponsors and speak for the profession locally. Joining a committee first and moving toward the board over a few years gives you leadership experience and visibility that a single job rarely offers.

                ## Milestones
                1. Committees and board roles at your society listed with their time commitment.
                2. A committee joined.
                3. One project delivered for the committee.
                4. A decision made on standing for a board role.

                ## Notes
                Start from the **Meeting notes** template for committee meetings, and check your firm's outside activities policy before accepting a board seat.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A committee role held for a year, with one delivered project and a recorded decision on standing for the board."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Ask the society which committees need volunteers"
                - "Join one committee and attend its next meeting"
                - "Prepare notes for the monthly committee meeting @recurring(monthly:20)"
                - "Decide whether to stand for a board role at the next election"
            - name: Speaking and writing as a charterholder
              description: |-
                ## Purpose
                Conference panels, articles, podcasts and university talks raise your profile, but each one puts your name and designation beside opinions in public. Agreeing topics, disclosures and approvals with compliance before you accept, and logging preparation as continuing education where it counts, keeps visibility from creating risk.

                ## Milestones
                1. A list of topics you can speak on with authority.
                2. Your firm's approval process for external talks and articles followed.
                3. One talk or article delivered with appropriate disclosures.
                4. Preparation time logged in your continuing education record.
              priority: low
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "One approved talk or article delivered in the year, with disclosures included and preparation time logged."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "List three topics you can speak on with authority"
                - "Read your firm's approval process for talks and articles"
                - "Pitch one talk to your society or a university"
                - "Log preparation time in your continuing education record"
            - name: Leading an ethics session for your team
              description: |-
                ## Purpose
                Teams tend to talk about ethics only after something has gone wrong. Running a short quarterly session where colleagues discuss a real or adapted case against the Standards builds shared judgement, and leading it is one of the most practical ways a charterholder can put the Code to work.

                ## Milestones
                1. Your manager's agreement to a quarterly thirty-minute session.
                2. A bank of four adapted cases ready.
                3. The first session run, with notes on the discussion.
                4. Feedback used to adjust the next session.
              priority: low
              frontmatter:
                mode: service
                output_kind: habit
                success_criteria: "Four ethics sessions run in a year, each with a written case and notes on the discussion."
                cadence: rolling
              tasks:
                - "Propose a quarterly thirty-minute ethics session to your manager"
                - "Adapt four cases from the Handbook or your own experience"
                - "Run the team ethics session and keep short notes @recurring(quarterly)"
                - "Ask for feedback after each session"
---

# CFA Charter Application

This area is for candidates who have passed Level III, or are about to, and want the charter itself, and for new charterholders learning to hold it well. It starts with the foundations (an eligibility check, an experience audit and log, references, role descriptions and the membership application), then the yearly routines, the ethics and designation skills, the decisions about membership and disclosure, the award events, situations such as a small Caribbean market, self-employment or a move abroad, and finally the service work of an experienced charterholder.

What repeats is the yearly Professional Conduct Statement and dues renewal, a monthly experience and continuing education log, a monthly Standards case, a quarterly check of everywhere your designation appears and a quarterly society event. The Metrics log, Person, Development plan, Reading queue, Remediation plan and Meeting notes templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
