---
id: sales-revenue.sales-crm-administration
name: Sales CRM Administration
description: "Deal stages with exit criteria, stage-gated required fields, permissions, duplicate cleanup, backups and reports reps trust, plus the routines that keep a sales CRM clean."
category: business
version: 1.0.0
tags: [sales-revenue, sales-crm-administration, small-business, team, manager, crm, data-quality, sales-operations]
author: Aurum Technology
starter_structure:
  templates:
    - metrics-log
    - operational-checklist
    - course
    - remediation-plan
    - onboarding-plan
    - compliance-control
  pillars:
    - name: Sales & Revenue
      emoji: "💼"
      description: "Turning interest into revenue: prospecting and pipeline, discovery and demos, proposals and negotiation, forecasting, key accounts, sales process, enablement and compensation."
      pillarFrontmatter:
        review_cadence: monthly
      areas:
        - name: Sales CRM Administration
          description: "Setting up and keeping a sales CRM clean, with sensible deal stages, required fields, duplicate cleanup and reports reps actually trust and use."
          projects:
            - name: CRM health audit and baseline
              description: |-
                ## Purpose
                Before changing anything, measure what the CRM holds today: how many open deals have a close date in the past, how many contacts lack an email or company, how many duplicate accounts exist and how many users logged in last month. A one-page baseline turns the vague complaint that the CRM is a mess into five numbers you can improve and report on.

                ## Milestones
                1. Counts recorded for open deals with past close dates, deals with no activity in 30 days and records missing key fields.
                2. A duplicate estimate for accounts and contacts taken from the CRM's duplicate tool or an export.
                3. Monthly active users compared with paid licences.
                4. Three reps and one manager asked what they distrust in the CRM and why.
                5. A dated one-page baseline saved where the team can find it.

                ## Notes
                Take the numbers before any cleanup starts, or you will have nothing to show for the work later.
              priority: high
              deadlineOffsetDays: 21
              frontmatter:
                mode: research
                output_kind: knowledge
                success_criteria: "A dated one-page baseline lists at least five CRM health numbers, including past-due deals, duplicates and active users against licences."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export all open deals and count those whose close date has already passed"
                - "Run the duplicate check on accounts and contacts and note the totals"
                - "Compare last month's active users with the number of paid licences"
                - "Ask three reps what makes them distrust the CRM's numbers"
                - "Write the five baseline numbers on one dated page"
            - name: Named CRM owner and admin cover
              description: |-
                ## Purpose
                Plenty of small teams run a CRM that nobody owns, so fields multiply, requests go unanswered and the one person who knows the settings eventually leaves. Naming an owner, a backup with admin rights and the hours each week they spend on it makes administration a job rather than a favour.

                ## Milestones
                1. One person named as CRM owner, with the decision recorded by the sales manager or founder.
                2. A second person given admin rights and walked through the main settings.
                3. Weekly admin hours agreed and blocked in the owner's calendar.
                4. The owner's name shown on the CRM home page or in the team handbook so requests go to one place.

                ## Notes
                Keep admin rights to two or three people. Every extra admin is another person who can change a field the reports depend on.
              priority: high
              deadlineOffsetDays: 14
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A named CRM owner and backup admin are recorded, with weekly admin hours blocked in the owner's calendar."
                cadence: one-shot
                effort_hours_estimate: "2"
              tasks:
                - "Agree with the sales lead who owns the CRM from today"
                - "Give one backup person admin rights and list what they may change"
                - "Block a weekly slot for CRM administration in the owner's calendar"
                - "Walk the backup admin through recent changes for 30 minutes @recurring(quarterly)"
            - name: Deal stages with entry and exit criteria
              description: |-
                ## Purpose
                Stage names like Qualified or Proposal mean different things to each rep, which is why pipeline reports start arguments. Writing what must be true for a deal to enter and leave each stage, and putting that text inside the CRM's stage help, makes every rep's pipeline comparable. Keep it to five to seven open stages plus Closed Won and Closed Lost.

                ## Milestones
                1. Five to seven open stages agreed, each with a one-line entry and exit criterion.
                2. Old stages mapped to new ones, with no deal left sitting in a retired stage.
                3. Criteria added to the stage descriptions or help text inside the CRM.
                4. Default stage probabilities set or deliberately switched off, with the reason recorded.

                ## Notes
                Criteria should describe buyer actions, such as budget confirmed or proposal requested, not seller activity like email sent.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every open deal sits in one of five to seven defined stages, each with entry and exit criteria visible inside the CRM."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "List the current stages and count open deals in each one"
                - "Draft one entry and one exit criterion per stage with two senior reps"
                - "Bulk-move deals from retired stages into their new equivalents"
                - "Paste each criterion into the stage help text in the CRM"
                - "Re-check the stage criteria against how deals actually moved this year @recurring(yearly)"
            - name: Required fields at each deal stage
              description: |-
                ## Purpose
                Making twenty fields mandatory on deal creation teaches reps to type rubbish to get past the screen. Requiring a small set of fields only when a deal reaches the stage where that information really exists, such as amount at proposal or decision date at negotiation, gets accurate data without punishing early entry.

                ## Milestones
                1. A table listing which fields become required at which stage, no more than four per stage.
                2. Requirements switched on in the CRM through stage rules or validation.
                3. Every open deal back-filled so none fails the new rules.
                4. Reps told what changed, with one example screen.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Stage-gated required fields are live in the CRM, with no more than four new requirements per stage and every open deal compliant."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Write down the fields managers actually use in reviews and forecasts"
                - "Assign each field to the earliest stage where reps can genuinely know it"
                - "Send owners a report of their open deals missing those fields"
                - "Switch on the stage requirements once the gaps are filled"
            - name: Account, contact and deal record structure
              description: |-
                ## Purpose
                When a company exists twice, contacts float without an account, or one deal record covers three separate purchases, no report can be trusted. Deciding how accounts, contacts and deals relate, including parent and subsidiary companies and renewals, gives every later import, automation and report a stable base.

                ## Milestones
                1. A written rule for what counts as one account, including subsidiaries and branches.
                2. A rule that every contact belongs to an account and every deal to an account and a primary contact.
                3. A decision on whether renewals and upsells are separate deal records.
                4. Orphan contacts and deals counted and attached to the right accounts.

                ## Notes
                One deal should equal one buying decision with one amount and one close date. Bundling several decisions into one record hides wins and losses.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: decision
                success_criteria: "A one-page record structure is agreed and fewer than 2% of contacts and deals remain without a linked account."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count contacts and deals with no linked account"
                - "Write the rule for parent companies, subsidiaries and branch offices"
                - "Decide whether renewals and upsells get their own deal records"
                - "Attach orphan contacts and deals to their accounts in batches"
            - name: User roles and record permissions
              description: |-
                ## Purpose
                Default settings often let every user export the whole database or delete any account, while a manager may not be able to see the deals their own team owns. Setting roles by job, such as rep, manager, sales operations and read-only finance, protects customer data and puts the right records in front of the right people.

                ## Milestones
                1. A role list matched to real jobs, stating what each can view, edit, delete and export.
                2. Export and bulk delete restricted to admins.
                3. Manager visibility of their team's records tested with a real login.
                4. Every current user assigned to the correct role.

                ## Notes
                Test permissions by logging in as a user or with the CRM's login-as feature, never by reading the settings alone.
              priority: high
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every active user holds one documented role, and export and bulk delete are limited to named admins."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List every user with their job title and current permission level"
                - "Draft four or five roles with view, edit, delete and export rights"
                - "Remove export and mass delete rights from everyone except admins"
                - "Log in as a test manager and confirm the team's deals are visible"
            - name: CRM data dictionary
              description: |-
                ## Purpose
                Six months after a field is created nobody remembers whether Contract Value includes tax, or whether Partner means a referral partner or a reseller. A data dictionary listing every custom field, its meaning, who fills it and which reports use it stops duplicate fields being created and settles arguments in a minute.

                ## Milestones
                1. Every custom field on accounts, contacts and deals listed with its internal name.
                2. A plain definition, an owner and an example value written for each field.
                3. Fields used by reports, automations or integrations flagged as do-not-change.
                4. The dictionary linked from the CRM home page.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A data dictionary covers every custom field on accounts, contacts and deals, with definitions, owners and dependencies."
                cadence: one-shot
                effort_hours_estimate: "8"
              tasks:
                - "Export the field list for accounts, contacts and deals from the CRM settings"
                - "Ask the agent to draft plain definitions from field names and picklist values, then correct them"
                - "Flag every field that a report, automation or integration depends on"
                - "Add a link to the dictionary on the CRM home page"
            - name: Moving spreadsheet contacts into the CRM
              description: |-
                ## Purpose
                Small teams often run on a shared spreadsheet, a few inboxes and the owner's phone before the CRM goes live. Cleaning and importing those lists in a planned order, accounts first, then contacts, then open deals, avoids thousands of duplicates and orphaned records on day one.

                ## Milestones
                1. All source lists gathered, with the owner and age of each noted.
                2. Columns standardised: one spelling per company name, country codes on phone numbers, first and last names split.
                3. A 50-row test import checked field by field before the full load.
                4. Accounts, contacts and open deals imported in that order and spot-checked.
                5. The old spreadsheet made read-only with a note pointing to the CRM.

                ## Notes
                Add an import batch tag to every record so a bad import can be found and undone in one go.
              priority: high
              deadlineOffsetDays: 45
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "All active customers, contacts and open deals are in the CRM with an import tag, and the old spreadsheet is read-only."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Gather every contact list, spreadsheet and export into one folder"
                - "Standardise company names, phone formats and name columns in a copy"
                - "Import a 50-row test file and check every mapped field"
                - "Run the full import in the order accounts, contacts, deals"
                - "Lock the old spreadsheet and add a note pointing to the CRM"
            - name: Email and calendar sync for every rep
              description: |-
                ## Purpose
                Reps skip logging emails and meetings because it means copying them in by hand. Connecting each rep's mailbox and calendar to the CRM, with sensible rules for which messages are logged and which stay private, fills the activity history without extra typing.

                ## Milestones
                1. Sync settings chosen: which emails and meetings log automatically.
                2. Internal, personal and HR email domains excluded from logging.
                3. Every rep's mailbox and calendar connected, with a test message logged.
                4. Reps shown how to keep a single email private.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every rep's mailbox and calendar sync is connected, with internal and personal domains excluded and a test email logged per rep."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose which emails and meetings should log automatically"
                - "Add internal and personal email domains to the exclusion list"
                - "Connect each rep's mailbox and send a test email to confirm logging"
                - "Check every rep's sync connection is still active @recurring(monthly:28)"
            - name: Lead source and status picklists
              description: |-
                ## Purpose
                Free-text source fields end up holding Web, website, Website form and google, all meaning roughly the same thing, so nobody can say which channel produces deals. A short controlled picklist for source and status, filled automatically where forms allow, makes channel reporting possible without a cleanup project every quarter.

                ## Milestones
                1. A source picklist of no more than twelve values, each with a definition.
                2. A lead or contact status list with a clear meaning for each value.
                3. Old free-text values mapped to the new list and updated in bulk.
                4. Web forms and imports set to fill the source field automatically.

                ## Notes
                Agree the values with whoever runs marketing, so their reports and yours use the same words.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Lead source and status are controlled picklists with definitions, and fewer than 5% of last quarter's new records have no source."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Export the distinct lead source values and count records for each"
                - "Draft a picklist of twelve or fewer sources with one-line definitions"
                - "Map old values to new ones and update records in bulk"
                - "Set web forms to fill the source field without rep input"
            - name: Weekly duplicate merge routine
              description: |-
                ## Purpose
                Duplicates arrive every week from form fills, imports, email sync and reps creating a contact they could not find. A short weekly merge session, with a rule for which record survives, keeps the problem small instead of letting it grow into a cleanup weekend.

                ## Milestones
                1. Matching rules set for accounts by web domain and for contacts by email.
                2. A survivor rule written, such as the record with the most activity wins.
                3. Duplicate counts below the baseline for four weeks running.
                4. Reps reminded on screen to search before creating new records.

                ## Notes
                Check which record holds open deals before merging. A merge can move ownership and confuse the rep working the deal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Duplicate accounts and contacts stay below the baseline figure for eight consecutive weeks of merging."
                cadence: rolling
              tasks:
                - "Set duplicate matching rules on company domain and contact email"
                - "Write the rule for which record survives a merge"
                - "Review the duplicate queue and merge confirmed pairs @recurring(weekly:thu)"
                - "Add a search-before-you-create reminder to the new contact screen"
            - name: Monthly data quality scorecard
              description: |-
                ## Purpose
                Clean data decays at a predictable rate as people change jobs, deals age and fields go unfilled. A monthly scorecard of five completeness and accuracy measures, shared with managers, shows whether the CRM is getting better or worse and which team needs a nudge.

                ## Milestones
                1. Five measures chosen, such as deals missing an amount, past-due close dates, contacts without email, duplicates and accounts with no owner.
                2. A saved report built for each measure.
                3. Scores recorded each month with the trend visible.
                4. Each manager receiving the scores for their own team.

                ## Notes
                Start from the **Metrics log** template.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Five data quality measures are recorded every month for six months and shared with each sales manager."
                cadence: rolling
              tasks:
                - "Choose five data quality measures and build a saved report for each"
                - "Record the month's five scores in the metrics log @recurring(monthly:8)"
                - "Send each manager the scores for their own team"
                - "Pick the worst measure and agree one fix for next month"
            - name: Stale deal and past close date sweep
              description: |-
                ## Purpose
                Deals with close dates months in the past, or no activity in thirty days, inflate the pipeline and make every forecast look better than it is. A weekly list sent to each owner, asking them to update, push or close out each one, keeps the open pipeline honest without the admin guessing.

                ## Milestones
                1. A saved report of open deals with past close dates or 30 days without activity.
                2. The report reaching each owner automatically on Monday morning.
                3. A rule agreed with managers for when untouched deals are closed lost.
                4. Past-due deals under 5% of open pipeline for a full month.
              priority: high
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Open deals with past close dates make up less than 5% of open pipeline for four consecutive weeks."
                cadence: rolling
              tasks:
                - "Build a report of open deals with past close dates or no recent activity"
                - "Send the stale deal report to each deal owner @recurring(weekly:mon)"
                - "Agree with managers when untouched deals are moved to closed lost"
                - "Close out deals that break the agreed rule after one warning"
            - name: Quarterly user access and licence review
              description: |-
                ## Purpose
                Licences keep billing for people who left months ago, and a departed seller with live access can still export the customer list. Reviewing every user each quarter against the staff list closes access promptly and often pays for itself in recovered licences.

                ## Milestones
                1. Active users compared with a current staff list from HR or the founder.
                2. Leavers deactivated and their records reassigned.
                3. Users with no login in 60 days contacted or moved to a cheaper licence.
                4. Licence count and cost recorded ahead of the next renewal.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Four quarterly reviews are completed in a year, each leaving no departed staff with active CRM access."
                cadence: cyclic
              tasks:
                - "Get a current staff list from HR or the business owner"
                - "Compare CRM users with the staff list and last login dates @recurring(quarterly)"
                - "Deactivate leavers and reassign their open records"
                - "Record the licence count and cost before the next renewal"
            - name: Admin request queue and change log
              description: |-
                ## Purpose
                Requests for new fields, reports and fixes arrive by chat, email and corridor conversation, and changes get made without anyone knowing why. One request form and a change log, triaged weekly, lets the admin say yes, no or later with reasons, and lets anyone trace why a field or rule exists.

                ## Milestones
                1. A single request form or channel announced to the team.
                2. Each request logged with requester, reason, decision and date.
                3. Every change to fields, stages, permissions or automations recorded in a change log.
                4. Requests triaged weekly and every requester told the outcome.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every CRM configuration change for three months traces to a logged request or admin decision with a date and reason."
                cadence: rolling
              tasks:
                - "Create one request form asking what, why and how urgent"
                - "Tell the team the form is the only route for CRM change requests"
                - "Triage new requests and reply to each requester @recurring(weekly:wed)"
                - "Write every configuration change into the change log the day it is made"
            - name: Bounced email and departed contact cleanup
              description: |-
                ## Purpose
                Buyers change jobs every few years, so a contact database quietly fills with bounced addresses and people who have left. Clearing bounces monthly and marking leavers, while noting where they went, keeps outreach deliverable and often reveals a warm lead at the contact's new company.

                ## Milestones
                1. A saved view of contacts with hard bounces in the last month.
                2. A status for contacts who have left their company, so they are kept but excluded from outreach.
                3. Leavers marked, with their new employer noted where known.
                4. Hard-bounced contacts below 2% of active contacts.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Hard-bounced contacts stay below 2% of active contacts for three months, with leavers marked rather than deleted."
                cadence: rolling
              tasks:
                - "Create a saved view of contacts whose email hard bounced"
                - "Add a left-company status to the contact record"
                - "Mark leavers and note their new employer where known @recurring(monthly:19)"
                - "Pass any leaver who joined a target account to the right rep"
            - name: Report and dashboard pruning
              description: |-
                ## Purpose
                Most CRMs collect hundreds of reports that were run once, many with slightly different filters showing slightly different numbers. Pruning each quarter to a small, named set of official reports means managers stop quoting conflicting figures in the same meeting.

                ## Milestones
                1. A list of reports and dashboards with owners and last-run dates.
                2. Reports untouched for 90 days moved to an archive folder.
                3. Official reports marked with a prefix and kept in one folder.
                4. Fewer than 30 reports left in the shared folders.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Shared report folders hold fewer than 30 reports, with official ones prefixed and the rest archived each quarter."
                cadence: cyclic
              tasks:
                - "Export the report list with owners and last-run dates"
                - "Move reports untouched for 90 days into an archive folder @recurring(quarterly)"
                - "Prefix the official reports so they sort to the top"
                - "Warn report owners before deleting anything from the archive"
            - name: Monthly CRM data backup export
              description: |-
                ## Purpose
                Vendors protect against their own outages, but rarely against a user who bulk-deletes accounts or an integration that overwrites every phone number. A monthly export of core records, stored outside the CRM, means a bad day costs an afternoon rather than the customer list.

                ## Milestones
                1. The CRM's export or backup feature located and tested.
                2. Accounts, contacts, deals and activities exported in full.
                3. Exports stored in a restricted folder outside the CRM, with twelve months kept.
                4. One test restore of a small set of records completed.

                ## Notes
                Backups hold personal data. Store them with the same access limits as the CRM and delete old ones on your retention schedule.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Twelve monthly exports of core CRM records exist in a restricted store, with one test restore proven."
                cadence: rolling
              tasks:
                - "Find the CRM's full data export or backup option"
                - "Set up a restricted folder for exports outside the CRM"
                - "Export accounts, contacts, deals and activities @recurring(monthly:3)"
                - "Restore ten records from a backup into a test area to prove it works"
            - name: Integration sync error checks
              description: |-
                ## Purpose
                Connections to the marketing platform, billing system or support desk fail quietly, and nobody notices until a customer's payment status is a month stale. A weekly look at each integration's error log catches broken syncs while the fix is a reconnect, not a reconciliation.

                ## Milestones
                1. A list of every connected app, what it syncs and who owns it.
                2. Error notifications going to the current admin, not a former employee.
                3. Error logs checked weekly and failures fixed or escalated.
                4. A month with no sync failure left unresolved for more than a week.
              priority: low
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Every integration has a named owner and error alerts going to the current admin, with no failure open beyond seven days for a month."
                cadence: rolling
              tasks:
                - "List every connected app with what it syncs and who set it up"
                - "Point every integration's error alerts to the current admin"
                - "Open each integration's error log and clear failures @recurring(weekly:tue)"
                - "Reconnect any integration still authorised under a former employee's login"
            - name: Vendor release notes review
              description: |-
                ## Purpose
                CRM vendors ship several releases a year: features you already pay for arrive switched off, while others change behaviour under you. Reading the release notes each quarter for the parts that touch your setup catches breaking changes early and finds features that can replace a paid add-on.

                ## Milestones
                1. The admin subscribed to the vendor's release notes or admin newsletter.
                2. Each release scanned for changes to features you use.
                3. Useful new features added to the request queue for a decision.
                4. Any change that could break a report or automation tested before it lands.
              priority: low
              frontmatter:
                mode: operating
                output_kind: knowledge
                success_criteria: "Release notes are reviewed each quarter for a year, with relevant changes logged and any breaking change tested before release."
                cadence: cyclic
              tasks:
                - "Subscribe the admin address to the vendor's release notes"
                - "Scan the latest release for changes to features you use @recurring(quarterly)"
                - "Log useful new features in the admin request queue"
                - "Test any change flagged as affecting automations or reports"
            - name: Report builder fluency
              description: |-
                ## Purpose
                Admins who can only edit someone else's report end up exporting to spreadsheets for every question. Learning report types, filters, grouping, summary formulas and cross-object filters lets you answer a manager's question inside the CRM in ten minutes, where the number stays live.

                ## Milestones
                1. Report types understood, including which records each can join.
                2. Five practice reports built: grouped, summary, matrix, cross-filtered and date-ranged.
                3. A report using a relative date filter such as this quarter.
                4. One spreadsheet-based report rebuilt inside the CRM.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Five practice reports are built in the CRM and one recurring spreadsheet report is replaced by a live CRM report."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Work through the vendor's free report builder lessons"
                - "Build a pipeline report grouped by stage and owner"
                - "Build a report of accounts with no open deals using a cross filter"
                - "Replace one spreadsheet report a manager uses with a live CRM report"
            - name: Formula and roll-up fields
              description: |-
                ## Purpose
                Days in stage, deal age, weighted amount and date of last contact are numbers people work out by hand before every review. Learning formula and roll-up fields lets the CRM calculate them on every record, so managers stop exporting to do the arithmetic.

                ## Milestones
                1. The CRM's formula syntax and roll-up options understood from the vendor's guide.
                2. A days-in-current-stage field built and checked against ten deals.
                3. A roll-up of open pipeline value shown on each account.
                4. Each new field added to the data dictionary.

                ## Notes
                Test formulas on records with blank values. Most broken formulas fail on the empty case.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Two working calculated fields, days in stage and account open pipeline, are live and documented in the data dictionary."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Read the vendor's guide to formula and roll-up fields"
                - "Build a days-in-current-stage formula and test it on ten deals"
                - "Add a roll-up showing open pipeline value on each account"
                - "Document both new fields in the data dictionary"
            - name: Workflow automation fundamentals
              description: |-
                ## Purpose
                Automations save hours, but a badly built one can email every customer or overwrite owners across the database in seconds. Learning triggers, conditions, actions and the order in which rules fire, on test records first, lets you automate safely and debug quickly when something misfires.

                ## Milestones
                1. Triggers, conditions and actions in the CRM's automation tool understood.
                2. Three practice automations built and tested on dummy records.
                3. A written way to switch off any automation quickly.
                4. An inventory of existing automations with what each does and who owns it.
              priority: medium
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "Three tested practice automations exist and an inventory of every live automation lists its purpose and owner."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "Complete the vendor's introductory automation lessons"
                - "Create five dummy records to test automations against"
                - "List every live automation with its trigger, action and owner"
                - "Write down how to pause an automation in an emergency"
            - name: CRM admin certification study
              description: |-
                ## Purpose
                Most major CRM vendors offer an administrator certification, and preparing for it fills the gaps left by learning on the job, especially security, data management and automation. For a manager, a certified admin also makes an easier case for more hours on CRM work.

                ## Milestones
                1. The vendor's certification syllabus and exam format checked on their site.
                2. A weekly study plan of three to five hours set against the syllabus sections.
                3. Two full practice exams completed, with weak topics noted.
                4. The exam booked and sat.

                ## Notes
                Start from the **Course** template. Check whether your employer pays for the exam before booking it yourself.
              priority: low
              deadlineOffsetDays: 120
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "The vendor's admin certification exam is booked and sat after at least two full practice exams."
                cadence: phased
                effort_hours_estimate: "40"
              tasks:
                - "Download the certification syllabus from the vendor's training site"
                - "Plan weekly study sessions against each syllabus section"
                - "Sit a full practice exam and list the three weakest topics"
                - "Book the exam once practice scores pass comfortably"
            - name: Import mapping and upsert skills
              description: |-
                ## Purpose
                Every later import, from event attendee lists to purchased data, either updates existing records cleanly or creates a wave of duplicates. Understanding unique identifiers, upsert versus insert, field mapping, and date and currency formats turns imports from a risk into a routine admin task.

                ## Milestones
                1. Insert, update and upsert understood in the CRM's import tool.
                2. A matching identifier, such as email or an external ID, chosen for each record type.
                3. A mapping sheet saved for each regular import source.
                4. A practice upsert of 20 records completed with no duplicates created.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A 20-record practice upsert completes with zero duplicates, and mapping sheets exist for every regular import source."
                cadence: phased
                effort_hours_estimate: "5"
              tasks:
                - "Read the import tool's guide on matching existing records"
                - "Choose the matching identifier for accounts and contacts"
                - "Save a column mapping sheet for each regular import source"
                - "Run a 20-record upsert test and check no duplicates appeared"
            - name: Spreadsheet techniques for data cleanup
              description: |-
                ## Purpose
                Most CRM cleanup happens in a spreadsheet between export and re-import. A handful of techniques, such as trimming spaces, fixing case, splitting columns, removing duplicates and lookups that match IDs, turns a two-day cleanup into an hour and avoids importing the same mistakes back.

                ## Milestones
                1. Trim, case, text-splitting and lookup functions practised on a copy of a real export.
                2. A reusable cleanup workbook with the common formulas ready.
                3. Company names standardised across a 500-row sample.
                4. A cleaned file re-imported by matching on record ID.
              priority: low
              frontmatter:
                mode: learning
                output_kind: knowledge
                success_criteria: "A reusable cleanup workbook exists and one 500-row export has been cleaned and re-imported by record ID."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Export 500 contact rows with record IDs into a working copy"
                - "Practise trimming, case fixing and column splitting on the copy"
                - "Use a lookup to match cleaned rows back to their record IDs"
                - "Save the formulas as a reusable cleanup workbook"
            - name: Two-minute CRM how-to videos for reps
              description: |-
                ## Purpose
                Reps rarely read a manual, but they will watch a short screen recording when stuck. A library of ten videos covering the tasks people ask about most, such as logging a call, moving a stage or finding a report, cuts repeat questions and shortens onboarding.

                ## Milestones
                1. The ten most common how-to questions gathered from the request queue and chat.
                2. A screen recording under three minutes made for each.
                3. All videos linked from one page inside or beside the CRM.
                4. Videos re-recorded after any major layout change.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Ten how-to videos under three minutes each are linked from one page the whole team can reach from the CRM."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "List the ten questions reps ask the admin most often"
                - "Record a screen video under three minutes for each question"
                - "Link all the videos from one help page beside the CRM"
                - "Ask two reps which video is still missing"
            - name: Saved list views for each role
              description: |-
                ## Purpose
                Every morning reps waste time filtering the same lists, and managers build private views nobody else can find. A small set of shared views per role, such as my deals closing this month, my accounts with no activity in 60 days or team deals by stage, puts the right records one click from the home screen.

                ## Milestones
                1. The three lists each role uses most identified from short interviews.
                2. Shared views built for reps, managers and sales operations.
                3. Old public views that duplicate the new ones removed.
                4. Each role's home page set to show its views first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each sales role has three shared saved views on its home page and duplicate public views have been removed."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Ask two reps and a manager which lists they rebuild most often"
                - "Build three shared views for each role"
                - "Delete public views that duplicate the new ones"
                - "Set each role's home page to open on its main view"
            - name: Validation rules that block bad data
              description: |-
                ## Purpose
                Some errors are cheap to stop at entry and expensive to fix later: a close date in the past on a new deal, a zero amount at proposal stage, a phone number with letters in it. A few targeted validation rules with clear error messages stop the worst data before it lands, without blocking legitimate work.

                ## Milestones
                1. The five most common data errors identified from the scorecard.
                2. A validation rule for each, with a plain-language error message.
                3. Each rule tested on dummy records, including blank and edge values.
                4. Integrations and imports checked so the rules do not break them.

                ## Notes
                Write the error message as an instruction, such as Enter a close date of today or later, not as a code. Rules that block an integration often fail silently, so test those paths first.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Five validation rules with plain error messages are live and none has blocked an integration or import in the first month."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Pick the five most frequent data errors from the latest scorecard"
                - "Write a validation rule and plain error message for each"
                - "Test each rule on dummy records, including blank and edge values"
                - "Run a test import and an integration sync with the rules switched on"
            - name: Faster activity logging for reps
              description: |-
                ## Purpose
                Reps stop logging calls when it takes six clicks and a full form. Shortening the path with quick actions, a call outcome picklist, a configured mobile app and one-click email logging raises logged activity, because the right thing becomes the easy thing.

                ## Milestones
                1. Clicks needed to log a call and a meeting counted today.
                2. A quick action or short form for calls, with an outcome picklist.
                3. The mobile app set up on every rep's phone with the same quick actions.
                4. Logged activities per rep compared for four weeks before and after.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Logging a call takes three clicks or fewer, and weekly logged activities per rep rise over four weeks against the baseline."
                cadence: one-shot
                effort_hours_estimate: "5"
              tasks:
                - "Count the clicks needed to log a call and a meeting today"
                - "Build a short log-a-call action with a call outcome picklist"
                - "Install and set up the mobile app with each rep"
                - "Compare logged activities per rep four weeks before and after"
            - name: One pipeline or several
              description: |-
                ## Purpose
                New business, renewals, partner deals and small transactional sales move through different steps at different speeds, yet many teams force them into one pipeline. Whether to split pipelines or keep one with a deal type field should depend on how different the stages really are and how reports need to roll up.

                ## Milestones
                1. Each type of deal listed with its real steps and typical cycle length.
                2. Options compared: one pipeline with a type field against separate pipelines.
                3. Effects on combined revenue and win rate reports checked.
                4. A decision recorded with the reason and a review date.

                ## Notes
                Split only when the stages genuinely differ. A different team or product is not by itself a reason for a new pipeline.
              priority: medium
              frontmatter:
                mode: research
                output_kind: decision
                success_criteria: "A recorded decision on pipeline structure lists each deal type's stages and the checked effect on reports."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "List each type of deal you sell with its real steps"
                - "Sketch the stages for one combined pipeline and for separate ones"
                - "Check how each option affects win rate and revenue reports"
                - "Record the decision and the reason in the change log"
            - name: Retiring unused fields and picklist values
              description: |-
                ## Purpose
                Sixty fields on a deal screen hide the eight that matter, and reps stop scrolling. Finding fields that are empty on most records or used by no report, hiding them for a quarter and then deleting them, shortens every screen and simplifies every future change.

                ## Milestones
                1. Fill rate measured for every custom field.
                2. Fields under 10% filled and unused by reports or automations listed.
                3. Listed fields hidden from layouts for one quarter before deletion.
                4. Duplicate picklist values merged and inactive values removed.

                ## Notes
                Deleting a field can erase its data and history. Export the values first and check dependencies in the data dictionary.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Custom fields on the deal screen are reduced by at least a quarter, with removed field values exported before deletion."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Measure the fill rate of every custom field on deals and contacts"
                - "List fields under 10% filled that no report or automation uses"
                - "Hide those fields from page layouts and note the date"
                - "Export and delete the hidden fields nobody missed after a quarter"
            - name: Closed-lost reason picklist redesign
              description: |-
                ## Purpose
                Lost reason lists with Other at the top, or Price chosen for most losses, tell the business nothing. A short list of distinct reasons, required when a deal is closed lost, plus a competitor field and a brief note, gives the people who study losses data worth studying.

                ## Milestones
                1. Last year's lost reasons and how often each was chosen counted.
                2. A new list of six to eight reasons with definitions, and Other no longer the default.
                3. Lost reason and competitor required when a deal is closed lost.
                4. Last quarter's lost deals re-tagged where owners can do it from memory.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A required lost reason list of six to eight defined values is live, and Other accounts for under 10% of losses the next quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Count how often each lost reason was chosen last year"
                - "Draft six to eight reasons with a one-line definition each"
                - "Require lost reason and competitor when a deal moves to closed lost"
                - "Ask owners to re-tag last quarter's lost deals"
            - name: Automatic follow-up tasks on stage change
              description: |-
                ## Purpose
                Deals stall in the gap between stages because nobody set the next step. Creating a task automatically when a deal enters a stage, such as send the recap within a day of discovery or confirm the signer at negotiation, gives reps a prompt without the manager chasing.

                ## Milestones
                1. One standard next step agreed for each open stage.
                2. An automation creating that task, with a due date, when a deal enters the stage.
                3. Tasks tested on dummy deals for every stage.
                4. Reps' feedback after a month used to drop or reword any noisy task.

                ## Notes
                Too many automatic tasks get ignored together. One task per stage is plenty.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Each open stage creates exactly one automatic follow-up task, tested and reviewed with reps after a month."
                cadence: one-shot
                effort_hours_estimate: "4"
              tasks:
                - "Agree one standard next step for each open stage with the sales lead"
                - "Build an automation that creates the task when a deal enters a stage"
                - "Move a dummy deal through every stage to test the tasks"
                - "Ask reps after a month which tasks to drop or reword"
            - name: Sales manager dashboard reps trust
              description: |-
                ## Purpose
                A dashboard nobody believes gets replaced by private spreadsheets within a week. Building one manager dashboard from the official reports, with each chart's filter written beneath it and its totals reconciled against raw data, gives the team one version of pipeline, activity and closed revenue.

                ## Milestones
                1. The six questions the manager asks every week written down.
                2. One chart per question built from the official report folder.
                3. Each chart's filter and date range written in its caption.
                4. Totals reconciled against a raw export, with any gap explained.
              priority: medium
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "A six-chart manager dashboard is live, each chart captioned with its filters and reconciled against raw data."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write down the six questions the manager asks each week"
                - "Build one chart per question from the official report folder"
                - "Add a caption with the filter and date range to each chart"
                - "Check the dashboard totals against a raw report @recurring(monthly:15)"
            - name: Year-end CRM cleanse before the new sales year
              description: |-
                ## Purpose
                Territories, quotas and targets usually change at the start of the sales year, and dragging last year's stale data across makes every new report wrong from week one. A planned cleanse in the final month of the year closes dead deals, reassigns orphan accounts and archives last year's views.

                ## Milestones
                1. Dead deals closed with a reason, and open pipeline confirmed by every owner.
                2. Accounts owned by inactive users reassigned.
                3. Last year's campaign views and one-off reports archived.
                4. Fiscal year and quota settings updated in the CRM.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Before each new sales year starts, every open deal is confirmed by its owner and no account belongs to an inactive user."
                cadence: cyclic
              tasks:
                - "Confirm when your sales year starts and pick the cleanse month"
                - "Ask every owner to confirm or close each open deal"
                - "Reassign accounts owned by inactive users"
                - "Book the cleanse for the final month of the sales year @recurring(yearly)"
            - name: Cutover to a new CRM platform
              description: |-
                ## Purpose
                Once a new CRM has been chosen, the move itself is where data gets lost: history left behind, owners mismatched, automations never rebuilt. Running the cutover as a dated event with a data freeze, a rehearsal and a rollback plan gets the team selling in the new system on Monday morning.

                ## Milestones
                1. A field-by-field mapping from the old system to the new one signed off.
                2. A full rehearsal migration into a test environment checked against record counts.
                3. A data freeze date announced and the final migration run.
                4. Record counts and ten sample deals verified after cutover.
                5. The old system kept read-only for an agreed period.

                ## Notes
                Start from the **Operational checklist** template. Choosing the new system is a separate decision; this project starts once it is made.
              priority: high
              deadlineOffsetDays: 120
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "The new CRM is live with record counts matching the old system within 1%, and the old system is read-only."
                cadence: one-shot
                effort_hours_estimate: "40"
              tasks:
                - "Build the field mapping from the old system to the new one"
                - "Run a rehearsal migration and compare record counts per object"
                - "Announce the data freeze date and cutover weekend to the team"
                - "Verify ten sample deals end to end after the final load"
                - "Write a rollback plan naming who decides and by what time"
            - name: Rep training session for a major CRM change
              description: |-
                ## Purpose
                Changes to stages, required fields or layouts fail when reps first meet them on a busy Monday. A 45-minute session the week before go-live, showing what changes, why and how, with practice on test records, means the first week brings questions rather than workarounds.

                ## Milestones
                1. A one-page summary of what changes, why and what reps must do differently.
                2. A 45-minute session booked before go-live.
                3. Practice tasks on test records completed by every rep in the session.
                4. A question session held one week after go-live.
              priority: medium
              deadlineOffsetDays: 60
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every rep attends a training session before go-live and completes the practice tasks on test records."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Write a one-page summary of what changes and why"
                - "Book a 45-minute session in the week before go-live"
                - "Prepare three practice tasks on test records"
                - "Hold a question session one week after the change goes live"
            - name: Bulk ownership reassignment after territory changes
              description: |-
                ## Purpose
                When territories or account lists are redrawn, someone has to move thousands of accounts, contacts and open deals to new owners without breaking history or triggering a flood of notification emails. Running the reassignment as a single dated job, with a mapping file and a check afterwards, stops accounts landing with the wrong rep.

                ## Milestones
                1. A mapping file of account IDs to new owners approved by the sales manager.
                2. A decision on whether open deals, contacts and tasks move with the account.
                3. Owner change notifications switched off for the bulk update.
                4. Ownership verified by a report for every rep the next day.

                ## Notes
                Deciding who gets which accounts belongs to territory planning. This project is the clean execution of that decision.
              priority: medium
              frontmatter:
                mode: event
                output_kind: event-completion
                success_criteria: "Every account in the approved mapping file has its new owner by the agreed date, verified by a report per rep."
                cadence: one-shot
                effort_hours_estimate: "6"
              tasks:
                - "Get the approved account to owner mapping file from the sales manager"
                - "Decide whether open deals, contacts and tasks follow the account"
                - "Switch off owner change notifications before the bulk update"
                - "Run a report per rep the next day to confirm ownership"
            - name: CRM data pack for due diligence or audit
              description: |-
                ## Purpose
                Investors, acquirers and auditors increasingly ask for pipeline, customer and revenue data straight from the CRM, and inconsistent numbers raise awkward questions. Preparing a clean, reconciled pack with definitions attached makes the request a day's work rather than a scramble.

                ## Milestones
                1. The requested figures and periods confirmed with whoever asked.
                2. Customer counts, closed revenue by period and pipeline by stage exported from official reports.
                3. Closed revenue reconciled with finance's records, with differences explained.
                4. Definitions from the data dictionary attached to the pack.

                ## Notes
                Share only what is asked for, and remove personal data unless the request genuinely needs it.
              priority: medium
              deadlineOffsetDays: 45
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "A data pack with reconciled customer, revenue and pipeline figures and attached definitions is delivered to the requester."
                cadence: one-shot
                effort_hours_estimate: "10"
              tasks:
                - "Confirm exactly which figures and periods the requester needs"
                - "Export closed revenue and customer counts from the official reports"
                - "Reconcile closed revenue with finance's records and explain any gap"
                - "Remove personal data the request does not need before sharing"
            - name: Owner-run CRM in two hours a week
              description: |-
                ## Purpose
                In a business of one to five people, the owner is usually the admin, the main seller and the person with the least spare time. Keeping the CRM to a few fields and stages, plus one fixed weekly session for updates and cleanup, gives a small business a reliable customer record without paying for a part-time admin.

                ## Milestones
                1. No more than ten fields on the deal screen and five stages.
                2. A fixed two-hour weekly slot in the calendar.
                3. Every open deal left with a next step and date after each session.
                4. A short list written of things the owner will deliberately not track.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "For eight consecutive weeks, the weekly session leaves every open deal with a next step and a date."
                cadence: rolling
              tasks:
                - "Hide every deal field beyond the ten you really use"
                - "Block two hours each week for CRM updates and cleanup"
                - "Give every open deal a next step and date @recurring(weekly:fri)"
                - "Write down what you have decided not to track"
            - name: Handing over records when a rep leaves
              description: |-
                ## Purpose
                When a seller leaves, their open deals, accounts and half-written notes often sit under an inactive user for months while customers wonder who to call. A standard handover run in the leaver's final days moves every record to a named owner with context, so no buyer goes quiet.

                ## Milestones
                1. A standard leaver checklist agreed with the sales manager.
                2. Every open deal updated with a current next step before the last day.
                3. Accounts, contacts, deals and tasks reassigned to named owners.
                4. Access removed and email sync disconnected on the last day.
                5. Customers with open deals introduced to their new contact within a week.
              priority: high
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Within a week of a rep leaving, every record they owned has a new owner and their CRM access is removed."
                cadence: phased
                effort_hours_estimate: "4"
              tasks:
                - "Write a leaver checklist covering CRM records and access"
                - "Ask the leaving rep to update every open deal's next step"
                - "Reassign their accounts, deals and tasks using the manager's choices"
                - "Remove CRM access and disconnect email sync on the last day"
            - name: Adding a second team or product line
              description: |-
                ## Purpose
                A CRM set up for one team selling one product strains when a second team, a new product or a partner channel arrives: shared fields start meaning different things and reports mix unlike deals. Planning the addition with deal types, separate layouts and shared definitions lets both teams work without corrupting each other's numbers.

                ## Milestones
                1. How the new team sells, and how that differs from the first team, written down.
                2. A choice made between a deal type field and a separate pipeline.
                3. Layouts and required fields for the new team built and tested.
                4. Combined reports checked to show both teams correctly.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "The new team works in its own layouts and deal types, and combined revenue reports show both teams correctly."
                cadence: phased
                effort_hours_estimate: "12"
              tasks:
                - "Interview the new team's lead about their stages and fields"
                - "Choose between a deal type field and a separate pipeline"
                - "Build and test the new team's layouts and required fields"
                - "Check the combined pipeline report shows both teams correctly"
            - name: First 30 days as admin of an inherited CRM
              description: |-
                ## Purpose
                New admins often inherit a system built by three predecessors, full of mystery automations and fields nobody can explain. Spending the first month documenting before changing, then fixing the worst five problems in order, avoids breaking something critical while still showing the team early results.

                ## Milestones
                1. Every automation, integration and admin user listed in the first two weeks.
                2. The ten biggest complaints from reps and managers collected.
                3. A ranked list of the five worst problems, with a fix for each.
                4. The first two fixes delivered and announced by day 30.

                ## Notes
                Start from the **Remediation plan** template. Change nothing in the first week except removing access for leavers.
              priority: medium
              deadlineOffsetDays: 30
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "By day 30, an inventory of automations, integrations and admins exists and two of the five ranked problems are fixed."
                cadence: phased
                effort_hours_estimate: "15"
              tasks:
                - "List every admin user, automation and integration in the first week"
                - "Ask five reps and managers for their biggest CRM complaint"
                - "Rank the five worst problems by impact and effort"
                - "Fix and announce the top two problems by day 30"
            - name: A new rep's first week in the CRM
              description: |-
                ## Purpose
                New sellers who learn the CRM from a colleague usually pick up the shortcuts that break reports. A first-week CRM plan covering login, role, sync, views, the data rules and one supervised deal update gets them recording things the right way from their first call.

                ## Milestones
                1. Login, correct role, email sync and mobile app ready before day one.
                2. A 30-minute walkthrough of stages, required fields and saved views given.
                3. The rep's first deal and first logged call checked by the admin.
                4. The how-to video page and request form shared with the rep.

                ## Notes
                Start from the **Onboarding plan** template. Keep this to CRM habits; the wider ramp plan belongs to the sales manager.
              priority: medium
              frontmatter:
                mode: service
                output_kind: deliverable
                success_criteria: "Each new rep has working access and sync on day one, and their first deal is checked by the admin in week one."
                cadence: phased
                effort_hours_estimate: "3"
              tasks:
                - "Create the new rep's login with the right role before day one"
                - "Connect their email sync and set up the mobile app"
                - "Run a 30-minute walkthrough of stages, fields and views"
                - "Check the rep's first deal and logged call together"
            - name: Personal data, consent and deletion requests
              description: |-
                ## Purpose
                Sales CRMs hold personal data, and laws such as the GDPR in Europe, the CCPA in California and similar rules elsewhere give people rights to see, correct and delete it. Recording consent or lawful basis, tracking requests and knowing how to delete a person fully, including backups and integrations, keeps you ready when a request arrives with a legal deadline.

                ## Milestones
                1. Fields for consent or lawful basis and data source added to contacts.
                2. A request log with date received, request type, deadline and date completed.
                3. A tested procedure to find and delete one person across the CRM, integrations and backups.
                4. Your data protection lead or adviser confirming the procedure fits your obligations.

                ## Notes
                Start from the **Compliance control** template. This organises the work; what the law requires of your business is for your data protection lead or legal adviser to confirm.
              priority: high
              deadlineOffsetDays: 60
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "A request log and a tested deletion procedure covering the CRM, integrations and backups exist and have been reviewed by the data protection lead."
                cadence: phased
                effort_hours_estimate: "8"
              tasks:
                - "List everywhere CRM personal data is copied, including integrations and backups"
                - "Add consent or lawful basis and data source fields to contacts"
                - "Create a request log with received date, deadline and completion date"
                - "Check the request log for open items before their deadlines @recurring(monthly:24)"
            - name: Data retention and archiving rules
              description: |-
                ## Purpose
                Keeping every lead forever adds risk and cost and slows search, yet deleting old customer history loses the context a renewal conversation needs. Agreeing how long each kind of record is kept, then archiving or deleting on a yearly run, balances legal limits against what sales really uses.

                ## Milestones
                1. Retention periods drafted for leads, customers, closed deals and activities.
                2. The periods checked with whoever advises on data protection.
                3. A report that finds records past their retention period.
                4. The first yearly archive or deletion run completed and logged.
              priority: medium
              frontmatter:
                mode: operating
                output_kind: habit
                success_criteria: "Written retention periods exist for each record type and one yearly run has archived or deleted records past them, with counts logged."
                cadence: cyclic
              tasks:
                - "Draft a retention period for leads, customers, deals and activities"
                - "Ask your data protection adviser to check the periods"
                - "Build a report of records past their retention period"
                - "Run the archive or deletion pass and log the counts @recurring(yearly)"
            - name: Sandbox testing and release process
              description: |-
                ## Purpose
                Changing a live automation at four on a Friday is how a whole team receives the wrong tasks all weekend. A simple release process, building in a sandbox or test copy, testing against a checklist and releasing on a fixed day with a note to the team, makes changes predictable as the sales team grows.

                ## Milestones
                1. A sandbox or test environment refreshed from the live CRM.
                2. A test checklist covering permissions, automations, reports and integrations.
                3. A fixed release day each fortnight or month announced.
                4. Release notes sent for every change that affects reps' screens.
              priority: medium
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "Every configuration change for three months is tested in a sandbox and released on the fixed release day with notes."
                cadence: phased
                effort_hours_estimate: "6"
              tasks:
                - "Create a sandbox or test copy of the live CRM"
                - "Write a test checklist for permissions, automations, reports and integrations"
                - "Announce a fixed release day to the sales team"
                - "Refresh the sandbox from the live CRM @recurring(quarterly)"
            - name: Field history tracking and audit trail
              description: |-
                ## Purpose
                Managers reviewing a dropped deal amount or a changed account owner want to know who made the edit and when. Switching on history tracking for the fields that matter, and reviewing the audit log regularly, answers those questions in seconds and discourages quiet edits to forecast fields.

                ## Milestones
                1. Fields needing history chosen, such as amount, stage, close date and owner.
                2. Tracking enabled within the CRM's limit on tracked fields.
                3. A report of amount and close date changes over the last 30 days.
                4. The setup audit log reviewed for unexpected configuration changes.
              priority: low
              frontmatter:
                mode: building
                output_kind: artifact
                success_criteria: "History tracking is on for amount, stage, close date and owner, and the change report is reviewed every quarter."
                cadence: one-shot
                effort_hours_estimate: "3"
              tasks:
                - "Choose the deal and account fields that need change history"
                - "Switch on history tracking for those fields"
                - "Build a report of amount and close date changes in the last 30 days"
                - "Review the setup audit log for unexpected changes @recurring(quarterly)"
            - name: Merging two CRMs after an acquisition
              description: |-
                ## Purpose
                After a merger or acquisition, two sales teams arrive with two CRMs, overlapping customers and different stage names. Consolidating into one system with agreed definitions, deduplicated accounts and preserved history is one of the hardest admin jobs, and phasing it carefully stops either team losing pipeline mid-quarter.

                ## Milestones
                1. Both systems' records, fields, stages and automations inventoried.
                2. Overlapping customers identified and a rule set for which owner keeps each.
                3. A unified stage list and field mapping agreed by both sales leaders.
                4. Migration rehearsed, then run between quarter ends.
                5. The retired system archived with a full export kept.

                ## Notes
                Shared customers are sensitive. Agree ownership with both sales leaders before any merge runs.
              priority: low
              frontmatter:
                mode: building
                output_kind: deliverable
                success_criteria: "One CRM holds both teams' records, with overlapping accounts merged and owners agreed by both sales leaders."
                cadence: phased
                effort_hours_estimate: "60"
              tasks:
                - "Inventory records, fields, stages and automations in both systems"
                - "Match overlapping customers between the systems by web domain"
                - "Agree a unified stage list and owner rules with both sales leaders"
                - "Schedule the final migration between quarter ends"
---

# Sales CRM Administration

This area is for the owner, admin or sales manager who keeps a sales CRM usable, whether that is a five-person business or a team with several managers. It starts with the foundations (a baseline audit, a named owner, stages, required fields, record structure, permissions, a data dictionary, imports and email sync), then the operating routines, the admin skills worth learning, improvements and design decisions, dated events such as a platform cutover, situations like inheriting a messy system or a rep leaving, and finally specialist work on personal data, release management and merging two systems.

What repeats is a weekly duplicate merge, stale deal sweep, request triage and sync error check, monthly quality scores, backups and bounce cleanup, quarterly access, report, release and audit reviews, and a yearly cleanse and retention run. The Metrics log, Operational checklist, Course, Remediation plan, Onboarding plan and Compliance control templates pair with the projects that name them. Installing adds all 50 projects as active, so archive the ones that are not for you yet.
